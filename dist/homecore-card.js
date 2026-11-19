const dh = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-text-on-accent:#090909;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#26221e;--color-text-on-selected:#fbf9f6;--color-bg-segment-selected:#fbf9f6;--color-accent-primary:#0288d1;--color-border-focus:#0288d1;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.pill,.primary,.navBtn,.tab,.back{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.hcAreaGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.hcAreaPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.hcAreaPanel.active{flex:7 1 0;min-width:0;cursor:default}.hcAreaPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.hcAreaPanel:before,.hcAreaPanel:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.hcAreaPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.hcAreaPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}#app.light .hcAreaPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.hcAreaPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.hcAreaPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.hcAreaPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}@media (max-width:900px){.hcAreaGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.hcAreaPanel,.hcAreaPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.panelCollapsed{display:none}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.sectionLabel{margin:0 0 8px 22.4px}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.toggleList{display:grid;gap:9.6px}.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.grid{grid-template-columns:1fr}}@media (max-width:620px){#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}}.card,.panel,.tile{border-radius:var(--r-card)}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .hcAreaPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.grid>*{min-width:0}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}:host{--primary:#03A9F4;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.activityRowMeta{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.toggleRow strong,.primary,.tab,.themeBtn,.wxLayoutBtn,.toast{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.note,.settingsSelect,.pill{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.metaTable th,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.hcAreaGallery,.hcAreaPanel{height:340px}@media (max-width:900px){.hcAreaPanel,.hcAreaPanel.active{height:320px}}@media (max-width:900px){.hcAreaGallery{height:auto}.hcAreaPanel,.hcAreaPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel{margin-left:16px}.grid{gap:8px}.sectionLabel{margin-bottom:8px}.hcAreaGallery{gap:8px}.hcAreaPanel,.hcAreaPanel.active{flex:0 0 100%;min-width:100%}.card,.hcAreaPanel{padding:16px}.activityRows{gap:8px}.activityRow{padding:10px 12px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}@media (prefers-reduced-motion: reduce){.sheet{transition:none}}.card,.panel,.hcAreaPanel.active{padding:var(--inset)}.hcAreaPanel{border-radius:var(--r-tile);padding:var(--inset)}.hcAreaPanel.active,.activityRow{border-radius:var(--r-tile)}.activityRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.activityRowMeta{color:var(--text)}.activityRowMeta{margin-top:0}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}#app{--group-bg:var(--card)}.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .note{margin:0 4px 4px}#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}', ph = `#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}:is(#homeView,.tfMoreBackdrop,.tfEditTray,.tfMiniPhone) .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)){transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .wxWide{gap:16px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}@media (max-width:620px){#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--text)}#app.house.light{--hc-icon:#e6e6e6;--hc-icon-ink:var(--title)}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house :is(.tfAreaHead,#settingsView>.settingsHeader) .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house :is(.tfAreaHead,#settingsView>.settingsHeader) .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}.tfCard .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfAction>.tfActionHead{margin-bottom:auto}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .toggleRow:has(>.themeChoice,>.settingsSelect){flex-direction:column;align-items:stretch;gap:12px}#housePane .toggleRow>.settingsSelect{width:100%}#housePane .themeChoice[hidden]{display:none}#housePane .houseTab>.card:has(>.tfSetGroup){gap:24px}#housePane .tfSetGroup{display:grid;gap:8px}#housePane .tfSetGroup>.sectionLabel{margin:0 16px}#housePane{container:housepane/inline-size}#housePane .tfLightCards{display:none}@container housepane (width < 720px){#housePane .houseTab .metaTableWrap{display:none}#housePane .tfLightCards{display:grid;gap:8px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDacPad{min-width:0}.tfDacPad>dual-controller-v3{display:block}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}:is(.tfStep,.tfSeg,.tfBlocks,.tfTilt,.tfChips){font-family:var(--font-tile)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:0 1 46px;min-width:32px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);cursor:pointer}.tfStep svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfStep output{flex:1 0 auto;white-space:nowrap;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}#housePane .themeChoice,.tfBoardMenu .tfHeightTabs,.wb .wbSegments{gap:4px;padding:4px;border:0;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}#housePane .themeChoice{display:flex;flex-wrap:nowrap;width:100%}#housePane .themeChoice>button{flex:1 1 0;overflow:hidden;text-overflow:ellipsis}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button){height:38px;min-width:0;min-height:0;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile)!important;white-space:nowrap;cursor:pointer}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button):hover:not(:disabled):not([aria-pressed=true]):not([aria-checked=true]):not(.active){background:transparent;color:var(--text)}:is(#housePane .themeChoice :is(.wxLayoutBtn[aria-pressed=true],.themeBtn.active),.tfBoardMenu .tfHeightTabs button[aria-checked=true],.wb .wbSegments button[aria-pressed=true]){background:var(--bright);color:var(--on-bright)}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none;container:blocks/inline-size}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:12px 4px 4px 12px}.tfBlocks>span:nth-child(4){border-radius:4px 12px 12px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 14px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b small{font:inherit}@container blocks (width < 164px){.tfBlocks b small{display:none}}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.tfTilt i{position:absolute;top:4px;bottom:4px;left:4px;border-radius:12px;background:var(--primary)}.tfTilt span{position:relative;padding:0 16px;color:var(--text);font:600 14px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns svg{fill:none}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}#app.house .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}#app.house .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-l);--g1:var(--g1-l);--g2:var(--g2-l)}#app.house .tfSum[data-summary=climate] .tfIcon svg path{fill:url(#hcClimateGrad)}.tfGradDefs{position:absolute;width:0;height:0;overflow:hidden;pointer-events:none}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMoreBackdrop.tfMoreUnder{z-index:179;pointer-events:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}.tfMoreTileHead .tfName{display:grid;flex:1;min-width:0;cursor:default}.tfMoreTileHead :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreTileHead .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfMoreTileHead div.tfIcon{cursor:default}.tfMoreTileHead.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreTileHead.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMorePages{display:grid;grid-auto-flow:column;grid-auto-columns:100%;align-items:start;gap:20px;flex:none;overflow-x:auto;overflow-y:hidden;overscroll-behavior-x:contain;scroll-snap-type:x mandatory;scrollbar-width:none;transition:height .25s cubic-bezier(.2,.7,.3,1)}@media (prefers-reduced-motion:reduce){.tfMorePages{transition:none}}.tfMorePages::-webkit-scrollbar{display:none}.tfMorePage{display:flex;flex-direction:column;gap:14px;min-width:0;scroll-snap-align:start;scroll-snap-stop:always}.tfMoreSpace{flex:none;display:flex;flex-direction:column;justify-content:space-between;gap:12px;height:224px;padding:18px;border-radius:16px;background:var(--tile);overflow:hidden}.tfMoreSpace.tfMoreFill{justify-content:center;align-items:center;height:auto;padding:0;background:none;border-radius:0}.tfMoreSpace.tfMoreFill>.tfCoverArt{width:100%;height:auto;max-width:none;align-self:center}.tfMoreSpace.tfMoreFill>.tfDacPad{width:100%;height:100%}.tfMoreBig{display:flex;align-items:baseline;min-width:0;font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfMoreBig.live{color:var(--primary)}.tfMoreNum{overflow:hidden;text-overflow:ellipsis}.tfMoreUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfMoreFacts{display:flex;flex:1;flex-direction:column;justify-content:space-evenly;min-height:0}.tfMoreFact{display:flex;justify-content:space-between;gap:16px;font:400 14px/20px var(--font)}.tfMoreFact span:first-child{color:var(--muted)}.tfMoreFact span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreGraph{display:flex;flex:none;flex-direction:column;gap:6px}.tfMoreGraph .tfMoreGroupName{margin:0}.tfMoreGraph .tfGraph.tfDay{width:100%}.tfMoreDots{display:flex;flex:none;justify-content:center;gap:4px;margin-top:-4px}.tfMoreDots button{display:grid;place-items:center;width:24px;height:24px;min-height:0;padding:0;border:0;background:none;cursor:pointer}.tfMoreDots button:before{content:"";width:8px;height:8px;border-radius:50%;background:var(--muted);opacity:.45;transition:opacity .15s ease,background .15s ease}.tfMoreDots button[aria-selected=true]:before{background:var(--text);opacity:1}.tfMoreDots.tfMorePageIcons{gap:3px;align-self:center;margin-top:0;padding:3px;border-radius:19px;background:var(--tile)}.tfMoreDots.tfMorePageIcons button{width:48px;height:32px;border-radius:16px;color:var(--muted);transition:background .15s ease,color .15s ease}.tfMoreDots.tfMorePageIcons button:before{display:none}.tfMoreDots.tfMorePageIcons button svg{width:20px;height:20px;fill:currentColor}.tfMoreDots.tfMorePageIcons button[aria-selected=true]{background:var(--text);color:var(--card)}.tfMoreDots.tfMorePageIcons button:not([aria-selected=true]):hover{color:var(--text)}#homeView .grid>.tfDashTiles>.tfAction.tfHeadOnly,#homeView .grid .tfAction.tfHeadOnly{align-self:start}.tfMoreLink{margin-top:auto}.tfMoreLink svg{transform:none!important}.tfMorePage .tfMoreRows{flex:none}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card.tfCard{container-type:inline-size}#homeView .card.tfCard .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMorePair.still{animation:none}#app[data-more=sheet] .tfMore{width:min(640px,100vw)}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}.tfAreaPanel .icon{width:22px;height:22px}#app .hcAreaPanel.tfAreaPanel{padding:0}#app .hcAreaPanel.tfAreaPanel.active{border-radius:28px}.tfAreaPanel .panelExpanded>.tfRoomTile{height:100%;box-sizing:border-box;background:none;box-shadow:none}#app.tfBoard .tfAreaPanel .tfRoomTile[data-rows="1"]{padding:10px}#app.tfBoard .tfAreas[data-rows="1"] .hcAreaPanel.tfAreaPanel.active{border-radius:24px}.tfAreaIcon{flex:none;border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}button.tfAreaIcon{cursor:pointer}.tfAreaGlyph{display:grid;place-items:center}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{display:grid;grid-template-columns:repeat(var(--peg-n),var(--peg-w));grid-auto-rows:60px;grid-auto-flow:row dense;align-items:stretch;gap:16px;max-width:none}#app.tfWeatherOpen .tfBento.tfPegs .wbItem{width:auto;min-height:0;align-self:stretch;display:flex;flex-direction:column}#app.tfWeatherOpen .tfBento.tfPegs .wbItem>*{flex:1;min-height:0}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=wide]{grid-column:span 2;grid-row:span 5}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=double]{grid-column:span 2;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=tile]{grid-column:span 1;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbCard.wbSquare{aspect-ratio:auto}#app.tfWeatherOpen .tfBento.tfPegs .wbWeather .wbNow{margin-bottom:auto}#app.tfWeatherOpen .tfBento.tfPegs :is(.wbStripScroll,.wbBars .wbDayBars,.wbBars.wbTabbed .wbDayBars){min-height:0}#app.tfBoard .tfAreas[data-rows="5"] .tfACMain{position:absolute;left:10px;right:10px;bottom:170.3px;max-width:none;text-align:center}#app.tfBoard .tfAreas[data-rows="4"] .tfACMain{position:absolute;left:10px;right:10px;bottom:164.1px;max-width:none;text-align:center}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:18px 0 10px;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:6px;max-width:calc(100% - 20px)}.tfACMain{max-width:calc(100% - 20px);font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px);min-height:60px}.tfACTiles:has(>:nth-child(3)){margin-top:-60px}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}.tfACTiles:has(>:nth-child(2)){margin-top:-60px}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{gap:28px;padding:40px;background:var(--bg)}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:-20px -20px 0 0}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead) .activityTitle{font-size:24px}@media (max-width:620px){#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:0}}@media (min-width:621px){#app:not([data-more=sheet]) .tfMoreBackdrop.wide{place-items:start center}}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px}.tfMoreActions .tfAction{grid-column:auto}.tfMoreBackdrop{grid-template-columns:minmax(0,1fr)}.tfMoreActions .tfAction{min-width:0}.tfMoreActions>.activityRow{align-self:start;display:grid;grid-auto-flow:column;grid-template-columns:auto minmax(0,1fr);align-items:center;align-content:start;gap:12px;min-width:0;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfMoreActions>.activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreActions>.tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreActions>.activityRow :is(.activityRowName,.activityRowMeta){display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreActions>.activityRow.alert .activityRowMeta{color:var(--danger)}@media (max-width:620px){.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash :is(.tfDash-aq,.tfDash-pollen,.tfDash-radar,.tfDash-hourly,.tfDash-sun,.tfDash-moon,.tfDash-uv,.tfDash-humidity,.tfDash-pressure,.tfDash-wind,.tfDash-visibility){order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app .tfNotAdded{display:none!important}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:0 0 var(--area-open,409px)}#app.tfDash .tfAreaPanel:not(.active){flex:1 0 128px}}.tfAreaPhone{display:none}@media (max-width:620px){#app .tfAreas .tfAreaGallery{display:none}#app .tfAreas .tfAreaPhone{display:flex;flex-direction:column;gap:14px}.tfAreaStage{position:relative;flex:none;aspect-ratio:1325/982;min-height:0;touch-action:pan-y}.tfAreaStage>.tfRoomTile{height:100%;box-sizing:border-box;overflow:hidden}.tfAreaPicks{display:grid;grid-template-columns:repeat(8,minmax(0,1fr));gap:8px;padding:0 16px}#app .tfAreaPick{width:100%;height:auto;aspect-ratio:1;border:0;padding:0;border-radius:40%;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}#app .tfAreaPick.on[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfAreaStage>.tfAreaGoing{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;animation:tfAreaOut .32s cubic-bezier(.2,.7,.3,1) forwards}.tfAreaStage>.tfAreaLand{animation:tfAreaIn .32s cubic-bezier(.2,.7,.3,1) backwards}}@keyframes tfAreaOut{to{translate:calc(var(--dir,1) * (-100% - 16px)) 0}}@keyframes tfAreaIn{0%{translate:calc(var(--dir,1) * (100% + 16px)) 0}}@media (prefers-reduced-motion:reduce){.tfAreaStage>*{animation:none!important}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;margin-top:auto;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(2,minmax(0,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app.house .tfDashBento .wbItem[data-size]{width:100%}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}.tfDash-wx .wbCondition{display:none}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .hcAreaGallery,#app.tfBoard .tfAreas .hcAreaPanel{height:100%;min-height:0}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;pointer-events:none;color:var(--text)}.tfBoardCells svg{display:block;overflow:visible}.tfBoardCells pattern circle{fill:currentColor;fill-opacity:.16}.tfBoardCells .tfGridCross{fill:none;stroke:currentColor;stroke-opacity:.45;stroke-width:1.5;stroke-linecap:round}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfHeight{display:grid;gap:6px;padding:6px 6px 8px}.tfHeightLabel{padding:0 6px;color:var(--muted);font:500 12px/16px var(--font)}.tfHeightTabs{display:grid;grid-template-columns:repeat(5,1fr)}.tfBoardMenu .tfHeightTabs button{justify-content:center}.tfBoardMenu .tfHeightTabs button:disabled{opacity:.35}.tfWidth{padding-top:0}.tfWidth .tfHeightTabs{grid-template-columns:repeat(3,auto)}.tfSourceList{display:grid;gap:2px}.tfBoardMenu .tfSourceList button[aria-checked=true]{background:var(--bright);color:var(--on-bright)}.tfBoardMenu .tfSourceList button[aria-checked=true]:hover{background:var(--bright)}.tfBoardMenu .tfWidth .tfHeightTabs button{white-space:nowrap}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows{grid-auto-rows:var(--fill-row,60px);margin-top:0}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows>.activityRow{min-height:0;height:var(--fill-row,60px);box-sizing:border-box}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]{padding:0;gap:0}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityHeader,#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.tfDashGraph{display:none}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityRows{margin:0;flex:1}#app.tfBoard .tfBoardItem.tfAction[data-rows="1"]{padding:10px;border-radius:24px}.tfRoomTile{cursor:pointer}.tfRoomTile .tfRoomIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomTile button.tfRoomIcon{cursor:pointer}.tfRoomInline,.tfRoomSub{display:none}.tfRoomReading{display:flex;flex-direction:column;align-items:flex-start;align-self:flex-start;gap:4px;min-width:0;max-width:100%;padding:0;border:0;border-radius:8px;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.tfRoomBig{overflow:hidden;color:var(--text);font:500 36.8px/36.8px var(--font-tile);letter-spacing:-.74px;white-space:nowrap;text-overflow:ellipsis}#app.tfBoard .tfRoomTile[data-rows="4"] .tfRoomBig{font-size:41.6px;line-height:41.6px;letter-spacing:-1.54px}#app.tfBoard .tfRoomTile[data-rows="5"] .tfRoomBig{font-size:51.2px;line-height:51.2px;letter-spacing:-1.54px}.tfRoomTile:not([data-rows="1"]) :is(.tfRoomDevices,.tfRoomHeads){margin-top:auto}.tfRoomTile>.tfActionHead{margin-bottom:0}.tfRoomSub{overflow:hidden;color:var(--muted);font:400 16px/19px var(--font);white-space:nowrap;text-overflow:ellipsis}.tfRoomDevices{display:flex;gap:12px}.tfRoomDevices .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfRoomDevices .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}#app.tfBoard .tfRoomTile[data-rows="1"] .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-rows="1"] :is(.tfRoomReading,.tfRoomDevices),#app.tfBoard .tfRoomTile[data-rows="2"] .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfActionHead .activityRowMeta{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfRoomSub{display:block}#app.tfBoard .tfRoomTile[data-cols="1"]:is([data-rows="3"],[data-rows="4"],[data-rows="5"]) .tfRoomDevices{display:grid;grid-template-columns:repeat(2,max-content)}#app.tfBoard .tfRoomTile[data-cols="1"][data-rows="3"]:has(.tfRoomDevices) .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-cols="1"][data-rows="3"]:has(.tfRoomDevices) .tfRoomReading{display:none}#app.tfBoard .tfRoomTile[data-cols="1"]:is([data-rows="4"],[data-rows="5"]) .tfRoomDevices{min-height:calc(2 * var(--chip-size) + 12px);align-content:start}.tfRoomHeads{display:none;gap:12px 16px}.tfRoomDev{position:relative;isolation:isolate;display:flex;align-items:center;gap:12px;min-width:0}.tfRoomDev:before{content:"";position:absolute;z-index:-1;top:-6px;right:-10px;bottom:-6px;left:-10px;border-radius:var(--r-tile);pointer-events:none;transition:background .15s ease,box-shadow .15s ease}@media (hover:hover){.tfRoomDev:hover:before{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}}.tfRoomDevName{padding:0;border:0;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.tfRoomDev .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfRoomDev .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfRoomDevName{display:flex;flex-direction:column;min-width:0}.tfRoomDevName>span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]){flex-direction:row;align-items:center;gap:12px}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"])>.tfActionHead{flex:1;margin-bottom:0}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]) .tfRoomDevices{display:flex}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomHeads{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-cols="2"]):not([data-rows="1"]) .tfRoomHeads{grid-template-columns:repeat(4,minmax(0,1fr))}#app.tfBoard .tfRoomTile[data-cols="2"][data-rows="2"] .tfRoomDev:nth-child(n+3){display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]):has(.tfRoomDevices) .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]):has(.tfRoomDevices) .tfRoomReading{display:none}#app.tfBoard .tfDashBento[data-rows="1"] .wbCard{padding:10px;border-radius:24px}#app.tfBoard .tfDashBento[data-rows="1"] .wbVisual{display:none}#app.tfBoard .tfDash-wx[data-rows="1"] .wbNow{margin:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbWx.wbS90{width:40px;height:40px;border-radius:12px}#app.tfBoard .tfDashBento[data-rows] :is(.wb,.wbBento,.wbItem){height:100%;min-height:0}#app.tfBoard .tfDashBento[data-rows] .wbCard{height:100%;min-height:0;box-sizing:border-box;aspect-ratio:auto}#app.tfBoard .tfDash-wx[data-rows="1"] .wbDeg{font-size:20px;letter-spacing:0;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbPlace{font-size:13px;line-height:18px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbUnit{font-size:14px;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbWx.wbS90{width:100px;height:100px;border-radius:31px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbDeg{font-size:80px;line-height:80px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbUnit{font-size:30px;line-height:38px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbWeather{flex-direction:row;align-items:center;gap:16px}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNow{flex:none}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNextHours{display:flex;flex:1 1 0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbWeather{justify-content:center;padding-top:0;padding-bottom:0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) :is(.wbNow,.wbSummary){display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbColumns{display:flex;flex:none;height:185px}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsDay{display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsNow{display:inline}#app.tfBoard .tfDash-wx[data-narrow] .wbCard.wbWeather{gap:12px;padding:18px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbWx.wbS90{width:64px;height:64px;border-radius:20px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbDeg{font-size:46px;line-height:46px;letter-spacing:-.92px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbUnit{font-size:20px;line-height:26px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-narrow] .wbHalves{display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="3"] .wbNextHours{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow] .wbHour:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;flex:none;height:auto;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumn:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbHalves{display:none}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx:not([data-narrow])[data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="4"]) .wbSummary{display:none}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) :is(.wbColumns,.wbHalves){display:none}#app.tfBoard .tfDash-wx[data-rows="4"] .wbColumns{flex:1 1 0;height:auto;min-height:0;margin-top:0}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn{justify-content:flex-start;gap:8px;padding:12px 0 16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn .wbWx{width:40px;height:40px;border-radius:16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbTemps{gap:4px}#app.tfBoard .tfDash-wx[data-rows="4"] .wbHalves>:nth-child(n+5){display:none}#app.tfBoard .tfDash-energy[data-rows="2"] .tfDashGraph{display:none}#app.tfBoard .tfDash-energy:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) .activityRows{grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr)}#app.tfBoard .tfDash-energy[data-rows="3"] .tfDashGraph{min-height:0}#app.tfBoard .tfDashBento[data-rows="2"] .wbBaseRows{display:none}#app.tfBoard .tfDashBento[data-rows="2"] :is(.wbRadar,.wbCompareBars,.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfDashBento[data-rows="3"] :is(.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfAreas[data-rows="1"] .tfACTop{display:contents}#app.tfBoard .tfAreas[data-rows="1"] .tfACTiles{display:none}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed{display:grid;grid-template-columns:40px minmax(0,1fr);column-gap:12px;align-content:center;padding:0}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfACName,.tfACMain){margin:0;font-size:14px;line-height:18px;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.tfBoard .tfAreas[data-rows="2"] .tfACTiles{display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTile:nth-child(n+3){display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACollapsed{justify-content:flex-start;gap:10px}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTiles{margin-top:auto}.tfEditTray{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px));right:0;bottom:0;z-index:160;display:flex;width:608px;max-width:calc(100vw - 56px);transform:translate(100%);transition:transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfEditTray.open{transform:none}.tfEditTray.open.tucked{transform:translate(100%)}.tfEditTray.open :is(.tfTrayInner,.tfTrayTuck){pointer-events:auto}.tfTrayTuck{position:absolute;top:20px;left:-52px;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border:0;border-radius:var(--r-inner);background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;--mdc-icon-size:22px}.tfTrayTuck svg{width:22px;height:22px}.tfEditTray:not(.open) .tfTrayTuck{visibility:hidden}.tfTrayInner{flex:1;min-width:0;display:flex;flex-direction:column;gap:20px;overflow:auto;overscroll-behavior:contain;padding:20px;border-radius:var(--r-card) 0 0 var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d}.tfTrayHead{display:flex;align-items:center;justify-content:space-between;gap:12px}.tfTraySection{display:flex;flex-direction:column;gap:8px}.tfTraySection .sectionLabel{margin:0}.tfTrayNote{margin:0;color:var(--muted);font:400 14px/1.3 var(--font)}.tfTrayCards{display:flex;flex-direction:column;gap:6px}.tfTrayCard{display:flex;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 14px 0 10px;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none}.tfTrayList{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}.tfTrayFav{display:grid;grid-template-columns:22px var(--chip-size) minmax(0,1fr) 36px 36px;align-items:center;gap:8px;min-height:var(--tile-min);padding:0 4px 0 6px;border-radius:var(--r-tile)}.tfTrayFav.off{cursor:grab;touch-action:none}.tfTrayFav.off :is(.tfIcon,.tfTrayName){opacity:.5}.tfTrayFav.moving{background:var(--tile)}.tfTrayGrip{display:grid;place-items:center;color:var(--muted);cursor:grab;touch-action:none}.tfTrayGrip svg{width:20px;height:20px;fill:currentColor}:is(.tfTrayFav,.tfTrayPickItem) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfTrayName{display:flex;flex-direction:column;min-width:0}.tfTrayName>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfTrayBtn{display:grid;place-items:center;width:36px;height:36px;min-height:0;padding:0;border:0;border-radius:12px;background:none;color:var(--text);cursor:pointer}.tfTrayBtn svg{width:20px;height:20px;fill:currentColor}.tfTrayBtn:hover{background:var(--tile)}.tfTrayAdd{align-self:flex-start}.tfTrayPick{display:flex;flex-direction:column;gap:6px}.tfTrayPick[hidden]{display:none}.tfTrayPickItem{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;width:100%;min-height:var(--tile-min);padding:0 10px;border:0;border-radius:var(--r-tile);background:none;color:var(--text);text-align:start;cursor:pointer}.tfTrayPickItem:hover{background:var(--tile)}.tfTraySuggest{margin-top:8px}.tfMiniPhone{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px) + 20px);bottom:20px;left:max(16px,calc(100vw - min(608px,100vw - 56px) - 380px));z-index:160;display:flex;flex-direction:column;gap:8px;width:324px;padding:12px;border-radius:44px;background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d;opacity:0;transform:translate(16px);transition:opacity .2s ease,transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfMiniPhone.open{opacity:1;transform:none;pointer-events:auto}.tfPhoneHead{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 4px 0 12px}.tfMiniPhone>.tfTrayNote{padding:0 12px 4px}.tfLinkBtn{min-height:0;padding:0;border:0;background:none;color:var(--primary);font:inherit;text-decoration:underline;cursor:pointer}.tfPhoneScreen{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;border-radius:34px;background:var(--bg);box-shadow:var(--hc-hair-all);padding:14px 0 24px}.tfPhoneList{display:flex;flex-wrap:wrap;gap:12.8px}.tfPhoneTitle{width:100%;padding:0 12.8px;color:var(--text);font:800 25.6px/1 var(--font);letter-spacing:-.055em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfPhoneBlock{display:flex;align-items:flex-start;gap:10px;width:100%;min-height:0;padding:12px;border:0;border-radius:27px;background:var(--card);box-shadow:var(--hc-hair);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.tfPhoneBlock.tile{width:calc((100% - 12.8px)/2);border-radius:22.4px}.tfPhoneBlock.fixed{align-items:center;color:var(--muted);cursor:default}.tfPhoneBlock.moving{box-shadow:var(--hc-hair),0 0 0 2px var(--primary);cursor:grabbing}.tfPhoneBlock:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfPhoneBlock .tfIcon{width:32px;height:32px;border-radius:13px;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}.tfPhoneName{min-width:0;padding-top:6px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tfTrayGhost{position:fixed;top:0;left:0;z-index:200;margin:0;pointer-events:none;opacity:.9;background:var(--tile);border-radius:var(--r-tile);box-shadow:0 8px 24px #00000059}.tfFavDrop{position:fixed;z-index:200;width:4px;border-radius:2px;background:var(--primary);pointer-events:none}.tfFavHides{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;pointer-events:none}.tfFavHide{position:absolute;display:grid;place-items:center;width:32px;height:32px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;pointer-events:auto}.tfFavHide svg{width:18px;height:18px;fill:currentColor}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.toast.tfToast{top:auto;right:auto;max-width:calc(100vw - 32px);transform:translate(-50%,6px)}.toast.tfToast.show{transform:translate(-50%)}.tfDash-act .activityRow.alert .activityRowName{color:var(--danger)}.activityRow .tfIcon.alert{background:#e53935;color:#fff}.tfGraph.tfDay{flex:none;height:62px;min-height:0}.tfGraph.tfDay text{font-size:10px}#housePane .rubberIndicator{background:var(--bright)}#housePane .tab.active{color:var(--on-bright)}#app.house .settingsSelect{border:1px solid var(--muted)}#app.house .addInput{display:block;width:100%;height:46px;min-height:0;box-sizing:border-box;margin:0;padding:0 10px;border:0;border-radius:var(--r-inner)!important;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:400 16px/18.4px Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;letter-spacing:-.32px;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}#app.house .addInput:hover{background:color-mix(in srgb,var(--text) 6%,var(--tile))}#app.house .addInput:focus-visible,#app.house .addInput:focus{background:var(--tile);box-shadow:inset 0 0 0 1.6px var(--primary)}#app.house .addInput::-webkit-search-decoration,#app.house .addInput::-webkit-search-cancel-button{-webkit-appearance:none;-moz-appearance:none;appearance:none}#app.house{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%23d9d9d9' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house.light{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%2326221e' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house select.settingsSelect{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 44px 0 16px;background-image:var(--select-chev);background-repeat:no-repeat;background-position:right 16px center;background-size:16px 16px}#app.house .addInput::placeholder{color:var(--muted);opacity:1}#app .activityRows :focus-visible{outline-offset:-2.4px}#app.house :is(button,a,input,select,[tabindex]){scroll-margin-bottom:96px}@media (max-width:620px){#app.house :is(.activityRowName,.activityRowMeta){white-space:normal;text-overflow:clip;overflow:visible;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}}.tfTooltip{position:fixed;z-index:500;max-width:min(320px,calc(100vw - 16px));padding:6px 10px;border-radius:10px;background:var(--bright);color:var(--on-bright);font:500 14px/18px var(--font);overflow-wrap:break-word;box-shadow:0 4px 16px #00000040}.tfTooltip[hidden]{display:none}.tfDashGraph rect{transform-box:fill-box;transform-origin:50% 100%}#app.house:is([data-names=cut],[data-names=scroll]) :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis;overflow-wrap:normal}#app.house[data-names=wrap] :is(.activityRowName,.activityRowMeta){display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:normal;overflow:hidden;text-overflow:ellipsis;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}#app.tfBoard .tfDash-favs>.activityRows{min-height:0;overflow-y:auto;scrollbar-width:thin}#app.house :is(.tfIcon,.tfAreaIcon,.tfRoomIcon){--chip-hi:.0375;background-image:linear-gradient(180deg,#ffffff08,#fff0)!important;box-shadow:inset 0 1px rgba(255,255,255,var(--chip-hi)),inset 0 -1px color-mix(in srgb,currentColor 3%,transparent),inset 0 -3px 6px color-mix(in srgb,currentColor 3.5%,transparent)}#app.house :is(.on[data-light] .tfIcon,.tfIcon.on[data-light],.tfACTile .tfIcon[data-light],.on[data-tone=alarm] .tfIcon,.tfIcon[data-light]){--chip-hi:.1375}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-xl]{grid-row:span 5}#app.tfBoard .tfDashBento:not([data-rows="5"]) .wbItem[data-xl] .wbCallouts{display:none}#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]) .wbZone{flex:1;height:auto;background:none;box-shadow:none;padding:0;align-items:flex-start}#app.tfBoard .tfDashBento[data-rows="3"] .wbItem[data-xl] .wbCallouts{display:flex;margin-top:0}#app.tfBoard .tfDashBento[data-rows="1"] :is(.wbZone,.wbCallouts){display:none}#app .wbZoneM{display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM){display:flex;align-items:flex-start;justify-content:flex-start}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM)>:not(.wbZoneM){display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZoneM{display:flex}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{grid-auto-flow:row}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-break]{grid-column-start:1}#app.house.tfWeatherOpen #homeView{max-width:none}#app.house #settingsView .toggleList{border-radius:var(--r-card);padding-block:4px}#app.house #settingsView .toggleRow{padding-left:18px;padding-right:18px}#app.house #settingsView .toggleRow:not([hidden])~.toggleRow:before{left:18px}#app.house .view{margin-left:0}#app.house #settingsView .toggleList>.tfCardTitle{display:flex;align-items:center;min-height:28px;padding:14px 18px 2px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfLightView{display:flex;padding:4px 0 14px}#housePane.tfLightCardsOn .houseTab .metaTableWrap,#housePane.tfLightCardsOn .houseTab .tfTableNote{display:none}#housePane.tfLightCardsOn .tfLightCards{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:8px}#housePane:not(.tfLightCardsOn) .tfLightCards{display:none}@container housepane (width < 720px){#housePane:not(.tfLightCardsOn) .houseTab .metaTableWrap{display:none}#housePane:not(.tfLightCardsOn) .tfLightCards{display:grid}}#app.house.light .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house .tfTrayInner{gap:32px}#app.house .tfTraySection{gap:12px}#app.house{--font:Geist,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-family:var(--font)}#app.house #housePane .toggleRow>:is(.themeChoice,.settingsSelect){align-self:flex-start;width:auto;max-width:100%}#app.house #housePane .themeChoice{display:inline-flex}#app.house #housePane .themeChoice>button{flex:0 1 auto;min-width:0;padding:0 16px;overflow:hidden;text-overflow:ellipsis}#app.house #housePane .toggleRow{min-width:0}#app.house #housePane .toggleRow>.settingsSelect{min-width:200px}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments){display:inline-flex;width:auto;align-self:flex-start}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments) button{flex:0 0 auto;padding:0 16px}@media (max-width:620px){#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid{display:flex!important;flex-wrap:wrap;align-items:flex-start;gap:var(--grid-gap);height:auto!important}#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid .tfBoardItem{position:relative!important;left:auto!important;top:auto!important}#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid>.tfBoardItem:not(.tfDash-favs){height:auto!important}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummary{flex:none;margin-top:0;container-type:normal}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummaryText{position:static}}#app.house :is(#housePane .themeChoice,.wb .wbSegments,.tfBoardMenu .tfHeightTabs){height:32px;padding:3px;gap:3px;box-sizing:border-box}#app.house :is(#housePane .themeChoice>button,.wb .wbSegments button,.tfBoardMenu .tfHeightTabs button){height:26px!important;padding:0 12px;border-radius:13px!important;font:600 12px/16px var(--font-tile)!important}.tfPlantProblem{flex:1 1 0;min-height:184px;flex-direction:column}.tfGraph.tfPlantGraph{flex:1 1 0;width:calc(100% - 20px);height:auto;min-height:160px;margin:0 10px}.tfGraph .tfGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:3 4;vector-effect:non-scaling-stroke}.tfGraph .tfGuideWord{font-size:11px}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){box-shadow:inset 0 0 0 1px var(--line)}.tfDashTitle .tfGreeting{display:block;margin-bottom:6px;font:500 20px/1.2 var(--font-tile);letter-spacing:0;color:var(--muted)}#app.light{--title:#55504a}#app.light :is(.activityTitle,.hcCardTitle,.wbTitle,.activityRowName,.hcRowName,.wbName){color:var(--title)}#app.light .tfRoomTile .tfActionHead .activityRowName{color:var(--text)}#app.light .tfRoomBig{color:var(--title)}#app.tfOverview.tfDash #homeView .tfSum:not([data-summary=alerts]) .tfIcon{background:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar{width:100%;max-width:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows{display:flex;justify-content:space-between}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRow{flex:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows{display:grid;grid-template-columns:repeat(var(--bar-cols,3),minmax(0,1fr))}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows>.activityRow{min-width:0}@media (max-width:620px){#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}}#app.tfOverview.tfDash #homeView .tfDash-favs{padding:10px;border-radius:var(--r-card)}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-auto-rows:60px;row-gap:25px;max-height:100%;margin:0;overflow-y:auto;scrollbar-width:none}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows::-webkit-scrollbar{display:none}.hcFadeList.hcMore{-webkit-mask-image:linear-gradient(to bottom,#000 calc(100% - 40px),transparent);mask-image:linear-gradient(to bottom,#000 calc(100% - 40px),transparent)}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{height:60px;min-height:0;padding:10px;box-sizing:border-box}#app.tfOverview.tfDash #homeView .tfDash-wx .wbCard.wbWeather{gap:0;padding:18px}#app.tfOverview.tfDash #homeView .tfDash-wx .wbCondition,#app.tfOverview.tfDash #homeView .tfDash-wx .wbNextHours,#app.tfOverview.tfDash #homeView .tfDash-wx .wbHalves{display:none!important}#app.tfOverview.tfDash #homeView .tfDash-wx .wbSummary{flex:none;height:auto;margin:18px 0 0;container:none}#app.tfOverview.tfDash #homeView .tfDash-wx .wbSummaryText{position:static;-webkit-line-clamp:1}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumns{display:flex!important;height:159px;margin-top:auto;border-radius:var(--r-tile)}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn{padding:8px 0;background:none}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn:hover{background:var(--tile)}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn .wbWx.wbS60{width:60px;height:60px;border-radius:20px}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar{width:max-content;max-width:100%}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar .activityRows{justify-content:flex-start}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows{grid-template-columns:repeat(var(--bar-cols,3),auto)}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs{height:auto!important;padding:10px;container-type:normal}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows{display:flex;justify-content:space-between;grid-auto-rows:auto;row-gap:0;max-height:none}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{flex:none;width:240px;height:60px}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows{display:grid;grid-template-columns:repeat(var(--bar-cols,3),minmax(0,1fr))}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows>.activityRow{width:auto;min-width:0}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs{width:max-content!important;max-width:100%}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs>.activityRows{justify-content:flex-start}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows{grid-template-columns:repeat(var(--bar-cols,3),240px)}@media (max-width:620px){#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{width:auto;min-width:0}}#app.tfOverview.tfBoard #homeView .hcFloor{position:absolute;z-index:1;display:flex;align-items:center;height:24px;margin:0;box-sizing:border-box}#app.tfOverview.tfBoard #homeView .hcFloorBox{position:absolute;z-index:0;border-radius:40px;background:color-mix(in srgb,var(--text) 5%,transparent);box-sizing:border-box;pointer-events:none}#app.tfOverview #homeView .hcFloorName{margin:0;font:500 16px/24px var(--font);color:var(--title,var(--text));white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.hcHomeEditing.tfOverview #homeView .tfBoardItem.tfRoomTile{cursor:default;outline:0}#app.hcHomeEditing.tfOverview #homeView .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfRoomTile){cursor:grab;-webkit-user-select:none;user-select:none;touch-action:none;outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.hcHomeEditing.tfBoardReady #homeView .tfBoardItem{transition:left .34s cubic-bezier(.2,1.35,.4,1),top .34s cubic-bezier(.2,1.35,.4,1)}@media (prefers-reduced-motion:reduce){#app.hcHomeEditing.tfBoardReady #homeView .tfBoardItem{transition:none}}#app.hcHomeEditing #homeView .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfEditTray .tfTrayInner{scrollbar-width:none}.tfEditTray .tfTrayInner::-webkit-scrollbar{display:none}.hcHeChoiceLine{flex-wrap:wrap;gap:8px 12px}.hcHeChoiceLine>.hcHeChoice{margin-left:auto}.hcHeChoice.themeChoice{display:inline-flex;flex-wrap:nowrap;height:32px;padding:3px;gap:3px;box-sizing:border-box;border-radius:16px;background:var(--control-2,var(--hc-icon))}#app .hcHeChoice>button{height:26px!important;min-height:0;padding:0 12px;border:0;border-radius:13px!important;background:none;color:var(--text);font:600 12px/16px var(--font-tile)!important;white-space:nowrap}#app .hcHeChoice>button[aria-pressed=true]{background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all)}.hcHeBody{display:flex;flex-direction:column;gap:12px}.hcHeBody>.tfTrayNote{margin:0 0 8px}.hcHeLabel{display:flex;align-items:center;gap:4px}.hcHeLine{display:flex;align-items:center;gap:4px;min-height:44px}.hcHeLine>.activityRowName{min-width:0}.hcHeLine>.switch{margin-left:auto}.hcHeLink{display:inline;min-height:0;padding:0;border:0;background:none;font:inherit;color:var(--primary);text-decoration:underline;cursor:pointer}.hcHeList{display:flex;flex-direction:column;gap:2px;margin:0;padding:0;list-style:none}.hcHeRow{display:grid;grid-template-columns:36px var(--chip-size) minmax(0,1fr) auto;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 4px;border-radius:var(--r-tile)}.hcHeRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.hcHeRow.moving{background:var(--card);box-shadow:var(--hc-hair-all)}:is(.hcHeRow,.tfTrayFav):is(.hcListDragging,.hcListLanding){position:relative;z-index:5;background:var(--card)}:is(.hcHeRow,.tfTrayFav).hcListDragging{filter:drop-shadow(0 10px 30px rgba(0,0,0,.35));cursor:grabbing}.hcHeGrip{color:var(--muted);cursor:grab;touch-action:none}.hcHeSum .tfIcon{color:var(--sum-ink,var(--hc-icon-ink))}#app .hcHeRow.hcHeSum .tfIcon{background-color:transparent}#app.house .hcHeSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .hcHeSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}.hcInfoBtn{display:grid;place-items:center;flex:none;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:var(--r-fine,12px);background:none;color:var(--muted);cursor:pointer}.hcInfoBtn svg{width:18px;height:18px;fill:currentColor}.hcInfoBtn:hover,.hcInfoBtn[aria-expanded=true]{background:var(--tile);color:var(--text)}.hcInfoPop{position:fixed;z-index:320;width:280px;max-width:calc(100vw - 16px);display:flex;flex-direction:column;gap:8px;padding:16px;border-radius:var(--r-inner);box-shadow:var(--hc-hair-all),0 8px 28px #0000002e}.hcInfoPop[hidden]{display:none}.hcInfoTitle{font:600 14px/20px var(--font-tile);color:var(--text)}.hcInfoText{font:400 14px/1.45 var(--font);color:var(--text)}.hcInfoText p{margin:0}.hcInfoText ul{margin:6px 0 0;padding-left:18px}.hcInfoMore{align-self:flex-start;font:600 14px/20px var(--font-tile);color:var(--primary);text-decoration:underline}#app .tfTrayAdd.hcAddBtn{display:inline-flex;align-items:center;gap:6px;height:32px;min-height:0;margin:10px 0 12px;padding:0 16px 0 12px;border:0;border-radius:16px!important;background:#03a9f4;color:#fff;font:600 14px/20px var(--font-tile);text-decoration:none!important}#app .tfTrayAdd.hcAddBtn svg{width:18px;height:18px;flex:none;fill:currentColor}#app .tfTrayAdd.hcAddBtn:hover{background:#0398dc}#app .tfTrayAdd.hcAddBtn[aria-expanded=true]{background:#0288d1}.tfEditTray:not(.hcHomeTray) .tfTraySection:not(.hcFirst){padding-top:20px;border-top:1px solid var(--line)}#app.house .tfEditTray:not(.hcHomeTray) .tfTrayInner{gap:20px}.hcHeRule{width:100%;height:0;margin:8px 0;border:0;border-top:1px solid var(--line)}.tfEditTray .hcTrayTabs{display:flex;align-self:stretch;margin:0 0 4px;flex:none}.tfEditTray .hcTrayTabs .tab{flex:1 1 0;min-height:36px;padding:0 10px;font:600 14px/20px var(--font-tile)}.tfEditTray .hcTrayTabs .rubberIndicator{background:var(--text)}.tfEditTray .hcTrayTabs .tab.active{color:var(--card)}.tfEditTray .tfTraySection[hidden]{display:none!important}.hcTrayList{display:grid;gap:0;padding:0}.hcTrayList .hcRow{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:12px;width:100%;min-height:60px;padding:10px 18px;border:0;border-radius:0;background:transparent;color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:pointer;box-sizing:border-box}.hcTrayList .hcRow+.hcRow{box-shadow:inset 0 1px var(--line)}.hcTrayList .hcRowText{display:grid;min-width:0}.hcTrayList .hcRowName{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.hcTrayList .hcRowEnd{display:grid;place-items:center;width:24px;height:24px;color:var(--muted)}.hcTrayList .hcRowEnd svg{display:block;width:20px;height:20px}#app .tfEditTray :is(.hcTrayList,.hcTrayBack){display:none}@media (max-width:620px){#app .tfEditTray .hcTrayTabs{display:none}#app .tfEditTray:not(.hcTrayIn) .hcTrayList{display:grid;flex:none;padding:0}#app .tfEditTray .hcTrayList .hcConfigRow{grid-template-columns:minmax(0,1fr) auto;margin-inline:-10px;width:calc(100% + 20px)}#app .tfEditTray:not(.hcTrayIn) :is(.tfTraySection,.hcHeTabBody){display:none!important}#app .tfEditTray.hcTrayIn .hcHeAreasNote{display:none}#app .tfEditTray.hcTrayIn .hcTrayBack{display:inline-flex;flex:none;width:40px;height:40px;margin-block:-4px}#app .tfEditTray.hcTrayIn .tfTrayHead{justify-content:flex-start;gap:12.8px}#app .tfEditTray.hcTrayIn .tfTrayHead>:last-child:not(.activityTitle){margin-left:auto}}.hcHeTabBody{display:flex;flex-direction:column;gap:8px}.hcHomeTray .hcTrayTabs{margin:0 0 8px}#homeView .grid.tfStack{grid-auto-rows:1px;row-gap:0}#homeView .grid.tfStack>*{align-self:start}.tfTrayPop{position:fixed;z-index:260;right:calc(min(608px,100vw - 56px) + 12px);width:300px;max-width:calc(100vw - 80px);display:grid;gap:2px;padding:10px!important;background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfTrayPop[hidden]{display:none}.tfTrayPopTitle{padding:4px 8px 8px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfTrayPopRow{display:flex;align-items:center;gap:12px;min-height:var(--tile-min);padding:0 8px}.tfTrayPopRow .tfIcon{background-color:var(--hc-icon)}.tfTrayPopName{flex:1;min-width:0;font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app .tfMoreBackdrop:not(.wide) .tfMore{height:min(600px,85dvh)}#app .tfMoreBackdrop:not(.wide) .tfMorePages{flex:1 1 auto;min-height:0;height:auto!important;align-items:stretch}#app .tfMoreBackdrop:not(.wide) .tfMorePage{overflow-y:auto;overscroll-behavior:contain;scrollbar-width:none}#app .tfMoreBackdrop:not(.wide) .tfMorePage[aria-label=Control]>:first-child{margin-top:auto}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace{flex:1 1 auto;height:auto;min-height:224px}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill{min-height:0;container-type:size}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill>.tfCoverArt{width:min(100%,100cqh);height:auto}.tfMorePage[aria-label=Control]>:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink)+:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink){margin-top:14px}.tfMoreSwitch{display:flex;align-items:center;justify-content:center;min-height:0;padding:0;border-radius:0;background:none}.tfMoreSwitch .tfIcon{width:min(240px,100%);height:min(240px,100%);aspect-ratio:1;min-height:0;border:0;padding:0;border-radius:40%;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer;--mdc-icon-size:204px}.tfMoreSwitch.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreSwitch.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}@media (max-width:620px){#app .tfMoreBackdrop{place-items:end center;padding:0 16px max(16px,env(safe-area-inset-bottom,0px))}#app .tfMoreBackdrop .tfMorePair{width:100%;max-height:85dvh}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){width:100%;border-radius:34px;box-shadow:inset 0 0 0 1px var(--line),0 10px 30px #00000047}#app .tfMoreBackdrop .tfMore{padding-top:10px;outline:none}#app .tfMoreBackdrop .tfMore:before{content:"";display:block;position:sticky;top:10px;z-index:2;flex:none;width:36px;height:5px;margin:0 auto;border-radius:3px;background:var(--line)}#app .tfMoreBackdrop .tfMore [data-more-close]{display:none}}#app .tfMoreBackdrop:not(.wide) .tfMore{height:min(604.4px,calc(100dvh - 32px))}#app .tfMoreBackdrop:not(.wide) .tfMorePages{transition:none}#app .tfMoreBackdrop:not(.wide) .tfMorePop>.tfMorePage:not([aria-label=Info]){display:flex;flex-direction:column;gap:14px;overflow:hidden}#app .tfMoreBackdrop:not(.wide) .tfMorePop>.tfMorePage>.tfMoreSpace{flex:1 0 224px;min-height:224px;margin-top:0}.tfMoreCtl{display:flex;flex-direction:column;gap:14px;flex:0 1 auto;min-height:0;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:none}.tfMoreCtl::-webkit-scrollbar{display:none}.tfMoreCtl:empty{display:none}#app .tfMoreBackdrop:not(.wide) .tfMorePages{margin:-14px;padding:14px;gap:28px;scroll-padding-inline:14px}#app .tfMoreBackdrop:not(.wide) .tfMorePop>.tfMorePage:not([aria-label=Info]){overflow:visible;min-height:0}#app .tfMoreBackdrop:not(.wide) :is(.tfMorePages:not(.tfMorePop)>.tfMorePage,.tfMorePop>.tfMorePage[aria-label=Info]){margin:-14px;padding:14px}.tfMoreCtl{margin:-14px;padding:14px}.tfMoreSwap{display:grid}.tfMoreSwap>*{grid-area:1/1}#app .tfMoreSwap>.tfBar{transition:opacity .26s cubic-bezier(.2,0,0,1),translate .32s cubic-bezier(.34,1.2,.64,1),visibility .32s,box-shadow var(--ab-out) var(--ab-ease),transform var(--ab-out) var(--ab-ease)}.tfMorePage[data-mode=colour] .tfMoreSwap>:not(.hue){opacity:0;translate:28px 0;visibility:hidden;pointer-events:none}.tfMorePage:not([data-mode=colour]) .tfMoreSwap>.hue{opacity:0;translate:-28px 0;visibility:hidden;pointer-events:none}@media (prefers-reduced-motion:reduce){#app .tfMoreSwap>.tfBar{transition:none}}#app .tfMorePages.tfMoreHold{overflow-x:hidden}#app .tfMoreBackdrop:not(.wide) .tfMorePop>.tfMorePage>.tfMoreSpace.tfLightSpace{position:relative;flex:1 0 224px;display:flex;align-items:center;justify-content:center;padding:0;border-radius:0;background:none;overflow:visible}.tfVCols{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;width:calc((100% - 16px)*.7 + 16px);height:70%;transition:opacity .22s ease,visibility .22s}.tfVCols:has(>:only-child){width:calc((100% - 16px)*.35)}.tfVCols:has(>:only-child){grid-template-columns:minmax(0,1fr)}.tfVCol,.tfVSwap>*{display:flex;flex-direction:column;gap:8px;min-height:0}.tfVSwap{display:grid;min-height:0}.tfVSwap>*{grid-area:1/1}#app .tfVBar{flex:1;height:auto;min-height:0;border-radius:24px;touch-action:none;box-shadow:var(--hc-hair-all)}#app .tfVBar.bright{background:var(--tile)}#app .tfVBar.bright i{inset:auto 0 0 0;width:auto;background:linear-gradient(180deg,#ffc247,#fa0)}.tfVBar .tfBarIcon{position:absolute;left:14px;top:14px;width:22px;height:22px;color:var(--text);pointer-events:none;--mdc-icon-size:22px}.tfVBar .tfBarIcon>*{width:22px;height:22px}#app .tfVBar.ctf{background:linear-gradient(180deg,#fa0,#ffc247 25%,#fff7ee 55%,#d7e7ff)}#app .tfVBar.huev{background:linear-gradient(180deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}#app .tfVBar b{left:50%;right:auto;bottom:auto;width:30px;height:4px;margin:-2px 0 0 -15px;border-radius:2px}#app .tfVSwap>*{transition:opacity .18s ease,visibility .18s}.tfMorePage[data-mode=colour] .tfVSwap>.tfVWarm{opacity:0;visibility:hidden;pointer-events:none}.tfMorePage:not([data-mode=colour]) .tfVSwap>.tfVColour{opacity:0;visibility:hidden;pointer-events:none}@keyframes tfVLand{0%{opacity:0;scale:.94}55%{opacity:1;scale:1.035}to{opacity:1;scale:1}}.tfMorePage[data-mode=colour] .tfVSwap>.tfVColour,.tfMorePage:not([data-mode=colour]):not([data-mode=dac]) .tfVSwap>.tfVWarm,.tfMorePage[data-mode=dac] .tfLightPad,.tfMorePage:not([data-mode=dac]) .tfVCols{animation:tfVLand .42s cubic-bezier(.34,1.46,.64,1) backwards}.tfVSwap>.tfVColour:only-child{opacity:1!important;translate:0 0!important;visibility:visible!important;pointer-events:auto!important}.tfLightPad{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:24px;overflow:hidden;--tf-dac-pad:100cqh;--tf-dac-max:none;container-type:size;transition:opacity .22s ease,visibility .22s}.tfLightPad>.tfDacPad{width:100%;height:100%}.tfMorePage:not([data-mode=dac]) .tfLightPad,.tfMorePage[data-mode=dac] .tfVCols{opacity:0;visibility:hidden;pointer-events:none}@media (prefers-reduced-motion:reduce){#app .tfVSwap>*,.tfVCols,.tfLightPad{transition:none;animation:none!important}}.tfMoreFoot{display:flex;flex:none;align-items:center;justify-content:space-between;height:40px}.tfMoreFootGap{flex:none;width:40px}.tfMoreFoot .tfMoreDots{margin:0}#app .tfMoreInfoBtn{display:grid;place-items:center;flex:none;width:40px;height:40px;min-height:0;padding:0;border:0;border-radius:20px;background:none;color:var(--muted);cursor:pointer}.tfMoreInfoBtn svg{width:20px;height:20px;fill:currentColor}#app .tfMoreInfoBtn[aria-pressed=true]{background:var(--tile);color:var(--text)}.tfMoreCtl>*{flex:none}.tfMoreField{display:flex;flex-direction:column;gap:6px}.tfMoreLabel{color:var(--muted);font:400 14px/20px var(--font)}.tfMoreRange{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}@media (max-width:620px){.tfMoreRange{grid-template-columns:1fr;gap:14px}}.tfPopBar{box-shadow:var(--hc-hair-all)}.tfPopBar i{overflow:visible}.tfPopBar .tfBarVal{position:absolute;right:14px;top:50%;translate:0 -50%;color:#26221e;font:600 15px/20px var(--font-tile);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.tfPopBar .tfBarVal.mid{left:50%;right:auto;translate:-50% -50%;z-index:1}.tfPopBar .tfBarIcon{position:absolute;left:13px;top:12px;width:22px;height:22px;color:#26221e;pointer-events:none;--mdc-icon-size:22px}.tfPopBar .tfBarIcon>*{width:22px;height:22px}.tfPopBar.fan i{background:linear-gradient(90deg,#4dd4ec,#00b2d6)}.tfPopBar.valve i{background:linear-gradient(90deg,#4aa8ff,#1a7fe6)}.tfPopBar.tiltp i{background:linear-gradient(90deg,#c9a7ef,#8e5cd9)}.tfPopBar.ctf{background:linear-gradient(90deg,#d7e7ff,#fff7ee 45%,#ffc247 75%,#fa0)}.tfPopBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfMoreSwitch .tfIcon{width:min(224px,100%);height:min(224px,100%);--mdc-icon-size:190px}.tfMoreSwitch:not(.on) .tfIcon{box-shadow:var(--hc-hair-all);color:var(--text)}.tfMorePad{--tf-dac-pad:337px;--tf-dac-max:none}.tfAction.tfDac{--tf-dac-max:none}.tfMoreSpace.tfMoreArt{justify-content:center;align-items:center;padding:8px;container-type:size}.tfMoreArt>.tfCoverArt{width:min(100%,100cqh);height:auto;max-width:none}#app .tfMoreCode{width:100%;height:46px;padding:0 16px;border:0;border-radius:16px!important;background:var(--tile);color:var(--text);box-shadow:var(--hc-hair-all);font:400 16px/20px var(--font);box-sizing:border-box}#app .tfMoreCode::placeholder{color:var(--muted);opacity:1}#app .tfMoreCode:focus{outline:2px solid var(--primary);outline-offset:-1px}.tfMoreSpace.tfMoreKeypad{justify-content:flex-start;gap:8px;padding:12px}.tfMoreKeypad .tfMoreCode{flex:none;background:var(--card)}.tfKeypad{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.tfKeypad button{height:46px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);font:500 18px/1 var(--font-tile);cursor:pointer}.tfKeypad button[data-key=clear]{color:var(--muted);font:400 14px/1 var(--font)}.tfKeypad svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfKeypad button:active{scale:.96}@media (max-width:620px){.tfMorePop .tfSeg:has(>:nth-child(5)){flex-wrap:wrap;height:auto}.tfMorePop .tfSeg:has(>:nth-child(5)) button{flex:0 0 auto;height:38px;padding:0 14px}}`, fh = `.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:14px;aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:18px;border-radius:28px;overflow:hidden}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbChip{width:40px;height:40px;border-radius:16px}.wbSquare .wbName{font-size:14px;line-height:1.4}.wbSquare .wbSub{font-size:16px}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:10px}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846;border-radius:34px}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:1;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);fill-opacity:.14}.wbChart .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:24px minmax(0,1fr) 22px;grid-template-areas:". sun" "y plot" ". x";column-gap:8px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wb[data-style=smooth] :is(.wbWx,.wbSky):after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;border-radius:inherit;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1.3 0 0 0 -.15 1.3 0 0 0 -.15 1.3 0 0 0 -.15 0 0 0 0 1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:140px 140px;mix-blend-mode:overlay;opacity:.3}.wbBaseRows{display:flex;flex-direction:column;gap:4px;width:100%}.wbBaseRow{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbBaseRow>span:last-child{color:var(--text);white-space:nowrap}.wbBaseRow>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRadar{position:relative;flex:1;align-self:stretch;min-height:80px;border-radius:var(--r-inner);overflow:hidden;background-color:var(--tile);background-image:linear-gradient(color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px);background-size:24px 24px;background-position:center}.wbRadarRing{position:absolute;left:50%;top:50%;width:64%;aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 20%,transparent)}.wbRadarRing:after{content:"";position:absolute;top:25%;right:25%;bottom:25%;left:25%;border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 14%,transparent)}.wbRadarHome{position:absolute;left:50%;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 3px var(--tile)}.wbRadarMap,.wbRadarCam{background-image:none}.wbRadarLayer{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden}.wbRadarLayer img{position:absolute;width:256px;height:256px;max-width:none;pointer-events:none}.wbRadarLayer[hidden]{display:none}.wbRadarRain{opacity:.85}.wbRadarMap .wbRadarHome{z-index:2}.wbRadarTime,.wbRadarCredit{position:absolute;z-index:2;white-space:nowrap}.wbRadarTime{left:8px;bottom:6px;padding:1px 6px;border-radius:8px;background:color-mix(in srgb,var(--tile) 78%,transparent);color:var(--text);font:600 11px/16px var(--font-tile)}.wbRadarTime:empty{display:none}.wbRadarCredit{right:6px;top:4px;max-width:calc(100% - 12px);overflow:hidden;text-overflow:ellipsis;color:var(--muted);font:400 9px/12px var(--font)}.wbRadarNote{position:absolute;top:0;right:0;bottom:0;left:0;z-index:2;display:grid;place-items:center;padding:0 12px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbRadarCam img{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;object-fit:cover}.wbWx.wbLineIcon{display:grid;place-items:center;background:var(--tile);color:var(--text)}.wbWx.wbLineIcon>svg{width:64%;height:64%}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:18px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:14px 16px 12px 12px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbAsNow{display:none}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}.wbNextHours{display:none;justify-content:space-between;align-items:center;gap:8px;min-width:0}.wbHour{display:flex;flex-direction:column;align-items:center;gap:8px;min-width:0}.wbHourTime{color:var(--muted);font:400 14px/20px var(--font);white-space:nowrap}.wbHourTemp{font:400 18px/20px var(--font-tile);white-space:nowrap}.wbHour .wbWx.wbS40{width:40px;height:40px;border-radius:16px}.wbSummary{position:relative;flex:1 1 0;min-height:0;margin-top:-12px;container:wbsum/size}.wbSummaryText{position:absolute;top:12px;left:0;right:0;margin:0;color:var(--text);font:400 16px/22px var(--font);display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}@container wbsum (height < 56px){.wbSummaryText{-webkit-line-clamp:1}}@container wbsum (height < 34px){.wbSummaryText{display:none}}@container wb-card (width < 480px){.wbColumn .wbWx.wbS60{width:48px;height:48px;border-radius:16px}}@container wb-card (width < 400px){.wbCard.wbWeather{gap:16px;padding:18px 18px 10px}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumn .wbWx.wbS60{width:40px;height:40px;border-radius:14px}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbStripScroll.wbPaged{container-type:inline-size;scroll-snap-type:x mandatory;overscroll-behavior-x:contain}.wbStripScroll.wbPaged.wbHeld{scroll-snap-type:none}.wbPaged .wbStrip{position:relative;min-width:0;padding:0}.wbSnap{position:absolute;top:0;width:1px;height:1px;scroll-snap-align:start;pointer-events:none}.wbMark.wbLast{align-items:flex-end;transform:translate(-100%)}.wbPaged .wbTimes .wbMark.wbFirst{font:400 14px/20px var(--font)}.wbPaged .wbTimes .wbMark.wbNowMark{font:600 14px/20px var(--font-tile)}.wbSky .wbPast{position:absolute;top:0;bottom:0;left:0;background:var(--card);opacity:.45;pointer-events:none}.wbSky .wbNowLine{position:absolute;top:0;bottom:0;width:2px;margin-left:-1px;background:var(--text);opacity:.55;pointer-events:none}.wbSky.wbLineSky{background:var(--tile);color:var(--text)}.wbLineArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbLineArt .wbLineArc{fill:none;stroke:var(--text);stroke-width:1.5;stroke-linejoin:round;vector-effect:non-scaling-stroke;opacity:.7}.wbLineArt .wbLineHorizon{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.35}.wbLineArt .wbLineNight{fill:var(--text);opacity:.07}.wbLineArt .wbLineEdge{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.3}.wbLineTime{position:absolute;top:calc(80% + 4px);transform:translate(-50%);color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.wbLineNow{position:absolute;width:26px;height:26px;transform:translate(-50%,-50%);border-radius:50%;background:var(--tile);pointer-events:none}.wbLineNow>svg,.wbLineGlyph>svg{display:block;width:100%;height:100%}.wbLineGlyph{position:absolute;top:calc(50% - 14px);width:28px;height:28px;transform:translate(-50%);pointer-events:none}.wbLineGlyph.wbFirst{transform:none}.wbLineGlyph.wbLast{transform:translate(-100%)}.wbSky .wbMidnight{position:absolute;top:0;bottom:0;width:0;border-left:1.5px dashed var(--text);opacity:.5;pointer-events:none}.wbDays{position:absolute;top:36px;left:0;z-index:1;display:flex;pointer-events:none}.wbDaySpan{flex:none;min-width:0}.wbDayName{position:sticky;left:8px;margin-left:8px;height:26px;min-height:0;padding:0 10px;border:0;background:color-mix(in srgb,var(--card) 82%,transparent);color:var(--text);font:600 13px/26px var(--font-tile);white-space:nowrap;cursor:pointer;pointer-events:auto}.wb .wbDayName{border-radius:13px!important;font-family:var(--font-tile)!important}.wbViews button{padding:2px 10px;font-size:13px}.wbBars .wbDayBars{flex:1 1 0;min-height:160px;display:flex;flex-direction:column;padding:0 18px;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin}.wbBars.wbTabbed .wbDayBars{min-height:206px}.wbDayBar{flex:1 0 auto;display:grid;grid-template-columns:minmax(56px,auto) 40px 36px minmax(0,1fr) 36px;align-items:center;column-gap:12px;min-height:48px;box-shadow:inset 0 -.4px 0 var(--line)}.wbDayBar:last-child{box-shadow:none}.wbRangeDay{color:var(--text);font:600 14px/20px var(--font-tile);white-space:nowrap}.wbRangeLo{color:var(--muted);text-align:right;font:400 16px/20px var(--font);font-variant-numeric:tabular-nums}.wbRangeHi{color:var(--text);text-align:right;font:400 16px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbRangeTrack{position:relative;height:6px;border-radius:3px;background:var(--tile)}.wbRangeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:3px}.wbRangeNow{position:absolute;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:#fff;box-shadow:0 0 0 2px var(--card)}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbBars .wbDayBars{padding:0 8px;min-height:380px}.wbBars.wbTabbed .wbDayBars{min-height:426px}.wbDayBar{column-gap:8px}.wbStripScroll{min-height:380px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:16px;overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbSunTile .wbZone{display:block}.wbSunZone{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff;transition:background 1s ease}.wbSunTrack{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbSunBand{fill:#fff;fill-opacity:.1}.wbSunBand.wbSunDay{fill-opacity:.14}.wbSunBand.wbSunDone{fill-opacity:.85}.wbSunDot{fill:#ffd84a}.wbSunDot.wbSunNight{fill:#9aa3c7}.wbSunCount{position:absolute;top:22px;right:22px;bottom:22px;left:22px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;padding-bottom:14px}.wbSunLeft{font:500 clamp(28px,calc(16cqw * var(--wb-k,1)),36px)/1.1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums;white-space:nowrap}.wbSunWord{font:400 13px/18px var(--font);opacity:.85}.wbSunAt{position:absolute;bottom:32px;font:500 12px/16px var(--font);opacity:.85;font-variant-numeric:tabular-nums}.wbSunRise{left:32px}.wbSunSet{right:32px}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}.wbMoonCaption{gap:8px}.wbMoonCaption span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbMoonCaption span:last-child{flex:none}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbSea{position:relative;flex:1;min-height:0;border-radius:16px;overflow:hidden;--wb-sea-inset:clamp(8.88px,calc(4.76cqw * var(--wb-k,1)),12px)}.wbSeaArt{position:absolute;top:0;right:0;bottom:0;left:0;display:block;width:100%;height:100%;image-rendering:pixelated}.wbSeaFact{position:absolute;top:clamp(7px,calc(3.97cqw * var(--wb-k,1)),10px);inset-inline:var(--wb-sea-inset);color:#26221e;font:600 clamp(9.44px,calc(5.47cqw * var(--wb-k,1)),13.78px)/1.23 var(--font-tile)}.wbSeaValue{position:absolute;bottom:var(--wb-sea-inset);inset-inline-start:var(--wb-sea-inset);color:#fff;text-shadow:0 0 2px rgba(0,0,0,.6),0 1px 3px rgba(0,0,0,.5)}.wbSeaValue .wbUnitV{color:inherit}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbTrend{position:relative;width:100%;height:100%;min-height:0}.wbTrendPlot{position:absolute;top:22px;right:0;bottom:24px;left:0}.wbTrendPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbTrendLine{fill:none;stroke:var(--text);stroke-width:2;stroke-linejoin:round;stroke-linecap:round;opacity:.8}.wbTrendDot{position:absolute;width:7px;height:7px;margin:-3.5px 0 0 -3.5px;border-radius:50%;background:var(--card);box-shadow:0 0 0 2px var(--text)}.wbTrendDot.wbToday{width:11px;height:11px;margin:-5.5px 0 0 -5.5px;background:var(--primary);box-shadow:0 0 0 3px var(--card)}.wbAvgValue{position:absolute;transform:translate(-50%,calc(-100% - 8px));color:var(--muted);font:400 10px/1 var(--font-tile);white-space:nowrap}.wbAvgValue.wbToday{color:var(--text);font-size:12px;font-weight:600}.wbTrendAvg{position:absolute;right:0;transform:translateY(4px);color:var(--muted);font:400 10px/1 var(--font-tile)}.wbTrendDays{position:absolute;left:0;right:0;bottom:0;height:16px}.wbAvgDay{position:absolute;bottom:0;transform:translate(-50%);color:var(--muted);font:400 11px/16px var(--font-tile)}.wbAvgDay.wbToday{color:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}.wbZoned{gap:14px}.wbZone{position:relative;flex:none;height:198px;display:flex;align-items:center;justify-content:center;border-radius:16px;overflow:hidden}.wbCallouts{display:none;flex-direction:column;gap:4px;margin-top:-6px}.wbCallout{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbCallout>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbCallout>span:last-child{flex:none;color:var(--text);white-space:nowrap}.wbZone>.wbSunSky{flex:1;align-self:stretch;border-radius:0}.wbZone>.wbMoonBox{flex:none;height:150px}.wbBase .wbZone{align-items:flex-end;justify-content:flex-start}.wbZone>.wbTapeRow{align-self:stretch;height:100%}.wbItem[data-xl] .wbCallouts{display:flex}.wbUv .wbZone{display:block}.wbUvArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbUvBig{position:absolute;right:0;bottom:0;display:flex;flex-direction:column;align-items:flex-end}.wbUvNum{font:500 64px/.9 var(--font-tile);letter-spacing:-.03em;color:var(--text);font-variant-numeric:tabular-nums}.wbUvWord{margin-top:6px;font:400 14px/20px var(--font);color:var(--muted)}.wbAqSmile .wbZone{display:block}.wbAqFill{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff}.wbAqFace{position:absolute;left:12px;top:12px;width:min(140px,calc(100% - 60px));height:auto;aspect-ratio:1;fill:none;stroke:currentColor;stroke-width:3.4;stroke-linecap:round;stroke-linejoin:round}.wbAqFace .wbAqEyes{stroke-width:5}.wbAqBig{position:absolute;right:14px;bottom:12px;display:flex;flex-direction:column;align-items:flex-end}.wbAqNum{font:500 56px/.9 var(--font-tile);letter-spacing:-.03em;font-variant-numeric:tabular-nums}.wbAqUnit{margin-top:4px;font:500 14px/20px var(--font)}.wbPollenAir{position:absolute;top:0;right:0;bottom:62px;left:0;overflow:hidden;pointer-events:none}.wbFloat{position:absolute;left:-12%;animation:wbFloat linear infinite}.wbBob{display:block;animation:wbBob ease-in-out infinite alternate}@keyframes wbFloat{0%{left:-12%}to{left:106%}}@keyframes wbBob{0%{transform:translateY(-6px) rotate(-14deg)}to{transform:translateY(8px) rotate(16deg)}}.wbFloat svg{display:block}.wbSeed svg{width:calc(20px * var(--s));height:calc(28px * var(--s))}.wbGrain svg{width:calc(10px * var(--s));height:calc(10px * var(--s))}.wbStem svg{width:calc(9px * var(--s));height:calc(26px * var(--s))}.wbSeed{color:var(--text);opacity:.7}.wbGrain{color:#e9c46a;opacity:.85}.wbStem{color:#a3b18a;opacity:.75}#app.light .wbGrain{color:#c99a1e}#app.light .wbStem{color:#7d8c5f}@media (prefers-reduced-motion:reduce){.wbFloat,.wbBob{animation:none}.wbFloat{left:var(--x)}}.wbPush{display:block;transition:transform .35s cubic-bezier(.2,.8,.3,1)}.wbCallout.wbAdvice>span:first-child{color:var(--text)}.wbCard.wbSquare.wbGraphCard{height:100%;min-height:0}.wbGraphCard .wbHead .wbBack{margin:-4px -6px 0 auto}.wbGraphCard .wbRangeBtn{align-self:flex-start;display:inline-flex;align-items:center;gap:6px;max-width:100%;height:32px;padding:0 8px 0 10px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:600 12px/16px var(--font-tile);cursor:pointer}.wb button.wbRangeBtn{border-radius:12px!important}.wbRangeBtn>span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRangeBtn .wbIcon{flex:none;width:16px;height:16px;fill:currentColor}.wbRangeBtn[aria-expanded=true]{background:var(--bright);color:var(--on-bright)}.wbItem:has(.wbRangePick){position:relative;z-index:30}.wbRangePick{position:absolute;top:116px;left:18px;z-index:30;display:flex;flex-direction:column;gap:12px;width:248px;box-sizing:border-box;padding:12px;border-radius:24px;background:var(--card);box-shadow:var(--hc-hair-all),0 18px 40px #00000059}.wbRangePick.wbPickRight{left:auto;right:18px}.wbRangePresets{display:flex;flex-direction:column;gap:2px}.wb .wbRangePreset{height:32px;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--text);font:400 14px/20px var(--font);text-align:left;cursor:pointer}.wb .wbRangePreset:hover{background:var(--tile)}.wb .wbRangePreset[aria-pressed=true]{background:var(--bright);color:var(--on-bright);font-weight:600}.wbRangeDates{display:grid;grid-template-columns:1fr 1fr;gap:8px;padding-top:12px;box-shadow:inset 0 .4px 0 var(--line)}.wbRangeDates label{display:grid;gap:4px;min-width:0;color:var(--muted);font:400 12px/16px var(--font)}.wbRangeDates input{width:100%;min-width:0;height:32px;box-sizing:border-box;padding:0 6px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:400 12px/16px var(--font);color-scheme:inherit}.wb .wbRangeApply{height:32px;padding:0 14px;border:0;border-radius:999px!important;background:var(--bright);color:var(--on-bright);font:600 12px/16px var(--font-tile);cursor:pointer}.wbGraphCard .wbGraph{flex:1;height:auto;min-height:0}.wb.wbPopup{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073;overscroll-behavior:contain;container-type:normal}.wb.wbPopup[hidden]{display:none}.wbPopupBox{position:relative;width:520px;max-width:100%}.wbPopup .wbCard.wbSquare.wbGraphCard{height:auto;aspect-ratio:auto;box-shadow:var(--hc-hair-all)}.wbPopup .wbGraphCard .wbGraph{flex:none;height:auto}@media (max-width:620px){.wb.wbPopup{place-items:end stretch;padding:0}.wbPopupBox{width:100%}.wbPopup .wbCard.wbSquare.wbGraphCard{border-radius:28px 28px 0 0}}`, uh = '#app .mvPv{position:relative;transform:perspective(var(--pv-persp)) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) scale(var(--sc,1));transition:transform var(--pv-ret) var(--pv-ease)}#app .mvPv.mvMoving{transition:transform 70ms linear}#app .mvPv:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;opacity:0;mix-blend-mode:soft-light;background:radial-gradient(circle at var(--mx,50%) var(--my,50%),rgba(255,255,255,var(--pv-shine)),transparent var(--pv-size));transition:opacity var(--pv-ret) ease}#app .mvPv.mvLit:after{opacity:1}#app .tfBar{--mv-c:var(--light-soft,var(--primary));transform-origin:center;transition:box-shadow var(--ab-out) var(--ab-ease),transform var(--ab-out) var(--ab-ease)}#app .tfBar.mvHover{box-shadow:0 0 var(--ab-blur) var(--ab-spread) color-mix(in srgb,var(--mv-c) var(--ab-str),transparent);transition-duration:var(--ab-in)}#app .tfBar.mvHold{box-shadow:0 0 var(--ab-blur2) var(--ab-spread2) color-mix(in srgb,var(--mv-c) var(--ab-str2),transparent);transform:var(--ab-grow);transition-duration:var(--ab-in)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>:is(svg,ha-icon,ha-state-icon,span){transition:scale var(--ih-dur) var(--ih-ease)}@media (hover:hover){#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-s)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover:before{opacity:1}}:where(#app button.tfIcon,#app .tfBack,#app .tfEditChip,#app .tfTrayBtn,#app [data-wb=graph-close]){position:relative}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;background:color-mix(in srgb,currentColor var(--ih-tint),transparent);opacity:0;transition:opacity var(--ih-dur) var(--ih-ease)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):active>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-p)}#app .mvSegInd{position:absolute;z-index:0;pointer-events:none}#app .mvSegMoving>button{position:relative;z-index:1;background-color:transparent!important;box-shadow:none!important;transition:none!important}#app .tfMoreBackdrop{-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}#app .toast.tfToast{min-height:58px;box-sizing:border-box;padding:9px 18px 9px 9px;gap:14px;border-radius:29px;font-size:18px;line-height:1.2}#app .toast .mvTick{display:grid;place-items:center;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--mv-ok);color:#fff}#app .toast .mvTick svg{width:26px;height:26px;fill:none;stroke:currentColor;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}#app .toast .mvToastText{font-weight:600}#app .toast .toastAction{font-size:16px;margin-left:2px}#app .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}#app{--ol-l:68%;--mv-ok:#4cc38a}#app.light{--ol-l:48%;--mv-ok:#1f7a4d}#app .tfAreaPanel:has(>.mvEdge){isolation:isolate;position:relative}#app .tfRoomTile.tfBoardItem:has(>.mvEdge){isolation:isolate}#app .mvEdge,#app .mvEdgeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity var(--ol-in) ease-out}#app .mvEdgeFill{z-index:-1;background:hsl(var(--ol-h) 97% var(--ol-l));mix-blend-mode:soft-light;opacity:clamp(0,calc(var(--ol-fill) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-fill));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%)}#app .mvEdge{z-index:5}#app .mvEdge:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l));opacity:clamp(0,calc(var(--ol-border) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-border));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%));mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%))}#app .mvEdge>i{position:absolute;top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;border-radius:inherit;mix-blend-mode:plus-lighter;opacity:clamp(0,calc(var(--ol-glow) * (var(--edge-proximity,0) - var(--ol-esens)) / (100 - var(--ol-esens))),var(--ol-glow));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}#app .mvEdge>i:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;--s:var(--ol-size);box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l) / 60%),inset 0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),inset 0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),inset 0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(22.4px*var(--s)) calc(1.6px*var(--s)) hsl(var(--ol-h) 97% var(--ol-l) / 10%)}#app :not(.mvLitEdge)>:is(.mvEdge,.mvEdgeFill){opacity:0;transition:opacity var(--ol-out) ease-out}@media (prefers-reduced-motion:reduce){#app .mvPv{transform:none!important}#app .mvPv:after{display:none}#app .tfBar.mvHold{transform:none}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>*{scale:none!important}}#app .tfBoardItem.mvDrag{scale:none}#app.tfEditing.tfBoardReady .tfBoardItem:not(.tfDragging){transition:left .42s cubic-bezier(.34,1.46,.64,1),top .42s cubic-bezier(.34,1.46,.64,1),height .42s cubic-bezier(.34,1.46,.64,1)}', hh = `<main id="app"><div class="shell">
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
`, Ed = "homecore-theme", mh = {
  home: '<path d="M3 10.5L12 3L21 10.5V21H3V10.5Z"/>',
  settings: '<path d="M21 4H14"/><path d="M10 4H3"/><path d="M21 12H12"/><path d="M8 12H3"/><path d="M21 20H16"/><path d="M12 20H3"/><path d="M14 2V6"/><path d="M8 10V14"/><path d="M16 18V22"/>',
  fullscreen: '<path d="M8 3H5C3.9 3 3 3.9 3 5V8"/><path d="M21 8V5C21 3.9 20.1 3 19 3H16"/><path d="M3 16V19C3 20.1 3.9 21 5 21H8"/><path d="M16 21H19C20.1 21 21 20.1 21 19V16"/>',
  back: '<path d="M15 18L9 12L15 6"/>'
}, gh = (n) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (mh[n] || "") + "</svg>", Bd = {
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
function bh(n, { setLight: i, fullscreenSupported: d, toggleFullscreen: p }) {
  const g = (et) => n.getElementById(et), y = g("app");
  n.querySelectorAll("[data-icon]").forEach((et) => {
    et.innerHTML = gh(et.dataset.icon);
  });
  const w = { home: g("homeView"), settings: g("settingsView") }, T = g("homeNav"), V = g("settingsNav");
  function k(et) {
    Object.entries(w).forEach(([at, X]) => X.classList.toggle("active", at === et)), T.classList.toggle("active", et === "home"), V.classList.toggle("active", et === "settings");
  }
  T.addEventListener("click", () => k("home")), V.addEventListener("click", () => k("settings")), g("settingsBack").addEventListener("click", () => k("home"));
  function D(et) {
    const at = et === "light";
    n.querySelectorAll(".themeBtn").forEach((X) => X.classList.toggle("active", X.dataset.theme === et)), y.classList.toggle("light", at), i(at);
  }
  D(Bd.get(Ed) === "light" ? "light" : "dark"), n.querySelectorAll(".themeBtn").forEach((et) => et.addEventListener("click", () => {
    D(et.dataset.theme), Bd.set(Ed, et.dataset.theme);
  }));
  const O = g("tvNav");
  d || (O.hidden = !0), O.addEventListener("click", () => p());
  let G;
  function J(et) {
    const at = g("toast");
    at && (at.textContent = et, at.classList.add("show"), clearTimeout(G), G = setTimeout(() => at.classList.remove("show"), 2600));
  }
  return { showView: k, toast: J };
}
const wh = /* @__PURE__ */ new Set(["roaming", "test_area"]), vh = {
  living_room: { climate: !0, cover: ["Curtains", "curtain", 62], temperature: 20.5, humidity: 44, motion: "Living room motion", plant: ["Monstera", 32, 4200, 21.4, 580] },
  kitchen: { temperature: 21.2, humidity: 48, door: "Back door", plant: ["Basil", 55, 900, 22.1, 910] },
  balcony: { solar: !0, door: "Balcony door", doorOpen: !0, valve: "Watering", valvePos: ["Garden valve", 40], plant: ["Tomatoes", 61, 18500, 14.2, 1240] },
  bedroom: { cover: ["Roller blind", "shade", 0], humidifier: !0, temperature: 18.9, humidity: 38, window: "Bedroom window", fan: ["Ceiling fan", 60] },
  office: { cover: ["Blinds", "blind", 60, 45], vacuum: !0, temperature: 21.8, humidity: 41, plant: ["Pothos", 47, 2600, 21.6, 640] },
  bathroom: { temperature: 22.4, humidity: 62, fan: ["Extractor fan"], waterHeater: !0, valvePos: ["Water valve", null] }
}, Bn = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, Se = "made_up_", Ya = (n) => {
  var i;
  return (i = String(n).split(".")[1]) == null ? void 0 : i.startsWith(Se);
}, Dn = (n) => n.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function oc(n) {
  const i = n.getHours() + n.getMinutes() / 60, d = Math.max(0, Math.sin((i - 7) / 13 * Math.PI));
  return 2.4 * d * d;
}
function yh(n) {
  const i = new Date(n.getFullYear(), n.getMonth(), n.getDate());
  let d = 0;
  for (let p = +i; p < +n; p += 10 * 60 * 1e3) d += oc(new Date(p)) / 6;
  return d;
}
function Rd(n = /* @__PURE__ */ new Date()) {
  const i = [];
  for (let d = 0; d <= 96; d++) {
    const p = +n - (96 - d) * 15 * 60 * 1e3;
    i.push([p, oc(new Date(p))]);
  }
  return i;
}
function xh({ onChange: n }) {
  const i = {}, d = {}, p = (X, N, nt, ct) => {
    i[X] = { entity_id: X, state: nt, attributes: ct, last_changed: new Date(Date.now() - 18e6).toISOString() }, d[X] = N;
  }, g = (X, N, nt) => {
    const ct = i[X], bt = N ?? ct.state;
    i[X] = { ...ct, state: bt, attributes: { ...ct.attributes, ...nt }, last_changed: bt === ct.state ? ct.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, y = (X, N, nt, ct) => p("binary_sensor." + Se + (X ? X + "_" : "") + Dn(N), X, ct ? "on" : "off", { friendly_name: N, device_class: nt });
  Object.entries(vh).forEach(([X, N]) => {
    if (N.temperature != null && p("sensor." + Se + X + "_temperature", X, String(N.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), N.humidity != null && p("sensor." + Se + X + "_humidity", X, String(N.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), N.vacuum && p("vacuum." + Se + "robot", X, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), N.climate && p("climate." + Se + X, X, "heat", {
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
      const [nt, ct] = N.fan;
      p("fan." + Se + X + "_" + Dn(nt), X, "on", ct != null ? { friendly_name: nt, percentage: ct, percentage_step: 10, oscillating: !0, direction: "forward", supported_features: 55 } : { friendly_name: nt, supported_features: 48 });
    }
    if (N.waterHeater && p("water_heater." + Se + X, X, "eco", { friendly_name: "Water heater", current_temperature: 55, temperature: 60, min_temp: 40, max_temp: 75, target_temp_step: 1, operation_mode: "eco", operation_list: ["off", "eco", "electric", "gas"], away_mode: "off" }), N.valvePos) {
      const [nt, ct] = N.valvePos;
      p("valve." + Se + X + "_" + Dn(nt), X, ct == null || ct ? "open" : "closed", { friendly_name: nt, device_class: "water", supported_features: 3 | (ct == null ? 0 : 12), ...ct == null ? {} : { current_position: ct } });
    }
    if (N.garage && p("cover." + Se + X + "_" + Dn(N.garage), X, "closed", { friendly_name: N.garage, device_class: "garage", supported_features: 3 }), N.cover) {
      const [nt, ct, bt, it] = N.cover;
      p("cover." + Se + X + "_" + Dn(nt), X, bt ? "open" : "closed", { friendly_name: nt, device_class: ct, current_position: bt, ...it != null ? { current_tilt_position: it } : {} });
    }
    if (N.humidifier && p("humidifier." + Se + X, X, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: N.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), N.solar && (p("sensor." + Se + X + "_solar_power", X, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), p("sensor." + Se + X + "_solar_today", X, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), N.valve && p("valve." + Se + X + "_" + Dn(N.valve), X, "closed", { friendly_name: N.valve, device_class: "water" }), N.door && y(X, N.door, "door", N.doorOpen), N.window && y(X, N.window, "window", !1), N.motion && y(X, N.motion, "motion", !1), N.plant) {
      const [nt, ct, bt, it, K] = N.plant, Y = Se + Dn(nt), H = (Pt, lt, U, Ft, q) => p("sensor." + Y + "_" + Pt, X, String(U), { friendly_name: lt, device_class: q, state_class: "measurement", unit_of_measurement: Ft, plant_low: U < Bn[Pt][0], plant_high: U > Bn[Pt][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[Pt] });
      H("moisture", "Moisture", ct, "%", "moisture"), H("light", "Light", bt, "lx", "illuminance"), H("temperature", "Temperature", it, "°C", "temperature"), H("fertility", "Fertility", K, "µS/cm", "conductivity");
      const xt = Object.entries({ moisture: ct, light: bt, temperature: it, fertility: K }).filter(([Pt, lt]) => lt < Bn[Pt][0] || lt > Bn[Pt][1]).map(([Pt, lt]) => Pt + (lt < Bn[Pt][0] ? " low" : " high"));
      p("plant." + Y, X, xt.length ? "problem" : "ok", { friendly_name: nt, moisture: ct, brightness: bt, temperature: it, conductivity: K, problem: xt.join(", ") || "none" });
    }
  }), p("alarm_control_panel." + Se + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 39, code_format: "number", code_arm_required: !1, changed_by: "Matt" }), y(null, "Front door", "door", !1), y(null, "Smoke alarm", "smoke", !1), p("sensor." + Se + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const w = {}, T = {};
  let V = null;
  function k() {
    const X = /* @__PURE__ */ new Date();
    Object.keys(i).forEach((N) => {
      N.endsWith("_solar_power") && (i[N] = { ...i[N], state: oc(X).toFixed(2) }), N.endsWith("_solar_today") && (i[N] = { ...i[N], state: yh(X).toFixed(1) });
    });
  }
  k();
  let D = 0;
  function O() {
    let X = !1;
    const N = ++D % 10 === 0, nt = (it, K, Y) => {
      g(it, K, Y), X = !0;
    };
    Object.entries(w).forEach(([it, K]) => {
      const Y = i[it].attributes.current_position, H = Y < K ? Math.min(K, Y + 10) : Math.max(K, Y - 10);
      H === K && delete w[it], nt(it, H === K ? H === 0 ? "closed" : "open" : K > Y ? "opening" : "closing", { current_position: H });
    }), Object.entries(T).forEach(([it, K]) => {
      const Y = i[it].attributes.current_tilt_position, H = Y < K ? Math.min(K, Y + 25) : Math.max(K, Y - 25);
      H === K && delete T[it], nt(it, null, { current_tilt_position: H });
    }), Object.keys(i).filter((it) => it.startsWith("climate.")).forEach((it) => {
      const K = i[it], Y = K.attributes, H = Y.current_temperature, xt = (K.state === "heat" || K.state === "auto") && H < Y.temperature - 0.05, Pt = (K.state === "cool" || K.state === "auto") && H > Y.temperature + 0.05, lt = K.state === "off" ? "off" : xt ? "heating" : Pt ? "cooling" : "idle", U = N ? Math.round((H + (xt ? 0.1 : Pt ? -0.1 : 0)) * 10) / 10 : H;
      (U !== H || lt !== Y.hvac_action) && nt(it, null, { current_temperature: U, hvac_action: lt });
    }), Object.keys(i).filter((it) => it.startsWith("humidifier.")).forEach((it) => {
      const K = i[it], Y = K.attributes, H = Y.current_humidity, xt = K.state === "on" && H < Y.humidity, Pt = xt && N ? H + 1 : H, lt = K.state !== "on" ? "off" : xt ? "humidifying" : "idle";
      if (Pt !== H || lt !== Y.action) {
        nt(it, null, { current_humidity: Pt, action: lt });
        const U = "sensor." + Se + d[it] + "_humidity";
        i[U] && nt(U, String(Pt));
      }
    });
    const ct = i["vacuum." + Se + "robot"], bt = ct.attributes;
    ct.state === "cleaning" && N && nt(ct.entity_id, null, { battery_level: Math.max(5, bt.battery_level - 1) }), ct.state === "returning" && nt(ct.entity_id, "docked", {}), ct.state === "docked" && bt.battery_level < 100 && nt(ct.entity_id, null, { battery_level: Math.min(100, bt.battery_level + 2) }), V && Date.now() - V.at > 5e3 && (nt("alarm_control_panel." + Se + "house", "armed_" + V.mode, {}), V = null), X && n();
  }
  const G = setInterval(O, 1e3), J = setInterval(() => {
    k(), n();
  }, 60 * 1e3);
  function et(X, N, nt) {
    const ct = nt == null ? void 0 : nt.entity_id;
    if (!i[ct]) return !1;
    const bt = i[ct], it = bt.attributes, K = (Y, H) => g(ct, Y, H);
    if (X === "climate" && (N === "set_temperature" && nt.temperature != null && K(null, { temperature: Math.max(it.min_temp, Math.min(it.max_temp, nt.temperature)) }), N === "set_hvac_mode" && K(nt.hvac_mode, nt.hvac_mode === "off" ? { hvac_action: "off" } : {}), N === "toggle" && K(bt.state === "off" ? "heat" : "off", bt.state === "off" ? {} : { hvac_action: "off" }), N === "set_temperature" && nt.target_temp_low != null && K(null, { target_temp_low: nt.target_temp_low, target_temp_high: nt.target_temp_high }), N === "set_fan_mode" && K(null, { fan_mode: nt.fan_mode }), N === "set_swing_mode" && K(null, { swing_mode: nt.swing_mode }), N === "set_preset_mode" && K(null, { preset_mode: nt.preset_mode }), N === "set_humidity" && K(null, { humidity: Math.max(it.min_humidity, Math.min(it.max_humidity, nt.humidity)) })), X === "fan" && (N === "set_percentage" && K(nt.percentage > 0 ? "on" : "off", { percentage: nt.percentage }), N === "oscillate" && K(null, { oscillating: nt.oscillating }), N === "set_direction" && K(null, { direction: nt.direction }), (N === "turn_on" || N === "turn_off" || N === "toggle") && K(N === "turn_on" || N === "toggle" && bt.state !== "on" ? "on" : "off")), X === "water_heater" && (N === "set_temperature" && K(null, { temperature: Math.max(it.min_temp, Math.min(it.max_temp, nt.temperature)) }), N === "set_operation_mode" && K(nt.operation_mode, { operation_mode: nt.operation_mode }), N === "set_away_mode" && K(null, { away_mode: nt.away_mode ? "on" : "off" }), N === "turn_on" || N === "turn_off" || N === "toggle")) {
      const Y = N === "turn_on" || N === "toggle" && bt.state === "off";
      K(Y ? "eco" : "off", { operation_mode: Y ? "eco" : "off" });
    }
    if (X === "cover") {
      const Y = N === "open_cover" ? 100 : N === "close_cover" ? 0 : N === "set_cover_position" ? nt.position : N === "toggle" ? it.current_position > 0 ? 0 : 100 : null;
      N === "stop_cover" && (delete w[ct], delete T[ct], K(it.current_position === 0 ? "closed" : "open")), Y != null && it.current_position == null ? K(Y > 0 ? "open" : "closed") : Y != null && Y !== it.current_position && (w[ct] = Y, K(Y > it.current_position ? "opening" : "closing"));
      const H = N === "open_cover_tilt" ? 100 : N === "close_cover_tilt" ? 0 : N === "set_cover_tilt_position" ? nt.tilt_position : null;
      N === "stop_cover_tilt" && delete T[ct], H != null && it.current_tilt_position != null && H !== it.current_tilt_position && (T[ct] = H);
    }
    if (X === "humidifier" && (N === "set_humidity" && K(null, { humidity: Math.max(it.min_humidity, Math.min(it.max_humidity, nt.humidity)) }), N === "set_mode" && K(null, { mode: nt.mode }), N === "turn_on" || N === "turn_off" || N === "toggle")) {
      const Y = N === "turn_on" || N === "toggle" && bt.state !== "on";
      K(Y ? "on" : "off", { action: Y ? "idle" : "off" });
    }
    if (X === "vacuum" && (N === "start" && K("cleaning", { rooms: nt.rooms || it.rooms }), N === "pause" && K("paused"), N === "return_to_base" && K("returning", { rooms: [] }), N === "locate" && K(null, { located: Date.now() }), N === "set_rooms" && K(null, { rooms: nt.rooms })), X === "valve") {
      const Y = N === "open_valve" || N === "toggle" && bt.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(N) && K(Y ? "open" : "closed", it.current_position != null ? { current_position: Y ? 100 : 0 } : {}), N === "set_valve_position" && K(nt.position > 0 ? "open" : "closed", { current_position: nt.position });
    }
    if (X === "alarm_control_panel") {
      N === "alarm_disarm" && (V = null, K("disarmed", { changed_by: "Matt" }));
      const Y = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night", alarm_arm_vacation: "vacation" }[N];
      Y && (V = { mode: Y, at: Date.now() }, K("arming", { changed_by: "Matt" }));
    }
    return n(), !0;
  }
  function at(X, { madeUp: N = !0 } = {}) {
    const nt = N ? i : {}, ct = (X == null ? void 0 : X.states) || {}, bt = (X == null ? void 0 : X.entities) || {}, it = (X == null ? void 0 : X.devices) || {}, K = (ot) => {
      var vt;
      const st = bt[ot];
      return st && (st.area_id || st.device_id && ((vt = it[st.device_id]) == null ? void 0 : vt.area_id)) || null;
    }, Y = (ot) => {
      const st = bt[ot];
      return ct[ot] && ct[ot].state !== "unavailable" && !(st != null && st.hidden) && !(st != null && st.entity_category);
    }, H = {};
    Object.keys(ct).forEach((ot) => {
      const st = K(ot);
      st && Y(ot) && (H[st] || (H[st] = [])).push(ot);
    });
    const xt = { ...ct, ...nt }, Pt = (ot) => {
      var st, vt;
      return (vt = (st = xt[ot]) == null ? void 0 : st.attributes) == null ? void 0 : vt.device_class;
    }, lt = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], U = Object.keys(ct).filter((ot) => ot.startsWith("vacuum.") && Y(ot)), Ft = Object.values((X == null ? void 0 : X.areas) || {}).filter((ot) => !wh.has(ot.area_id)).map((ot) => {
      const st = ot.area_id, vt = H[st] || [], ut = (Ot) => vt.filter((_e) => _e.startsWith(Ot + ".")), Mt = (Ot) => ut("sensor").filter((_e) => Pt(_e) === Ot), qt = (Ot) => Object.keys(nt).filter((_e) => d[_e] === st && Ot(_e)), ie = (Ot, _e) => Ot.length ? Ot : qt(_e), pa = ie(Mt("temperature"), (Ot) => Ot.endsWith(st + "_temperature")), na = ie(Mt("humidity"), (Ot) => Ot.endsWith(st + "_humidity")), fa = Mt("power").filter((Ot) => /^(W|kW)$/.test(xt[Ot].attributes.unit_of_measurement || "")), $e = ut("binary_sensor").filter((Ot) => Pt(Ot) === "moisture"), Hn = ie(ut("plant"), (Ot) => Ot.startsWith("plant.")).map((Ot) => ({ id: Ot, readings: qt((_e) => _e.startsWith("sensor." + Ot.split(".")[1] + "_")) })), wt = [...ut("binary_sensor").filter((Ot) => lt.includes(Pt(Ot))), ...qt((Ot) => Ot.startsWith("binary_sensor."))];
      return {
        id: st,
        name: ot.name,
        icon: ot.icon,
        floor: ot.floor_id || null,
        readings: [...pa.slice(0, 1), ...na.slice(0, 1), ...$e],
        power: fa.length ? fa.reduce((Ot, _e) => Ot + Number(xt[_e].state) * (xt[_e].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: ut("switch"),
        lights: ut("light"),
        actions: [
          ...ut("light"),
          ...ie(ut("climate"), (Ot) => Ot.startsWith("climate.")),
          ...ie(ut("cover"), (Ot) => Ot.startsWith("cover.")),
          ...ie(ut("humidifier"), (Ot) => Ot.startsWith("humidifier.")),
          ...ie(ut("valve"), (Ot) => Ot.startsWith("valve.")),
          ...ut("media_player"),
          ...ut("vacuum"),
          ...U.length ? [] : qt((Ot) => Ot.startsWith("vacuum.")),
          ...ut("fan"),
          ...qt((Ot) => Ot.startsWith("fan.")),
          ...ut("water_heater"),
          ...qt((Ot) => Ot.startsWith("water_heater."))
        ],
        solar: qt((Ot) => Ot.includes("_solar_")),
        plants: Hn,
        openings: wt,
        alerts: [...$e, ...wt].filter((Ot) => {
          var _e;
          return ((_e = xt[Ot]) == null ? void 0 : _e.state) === "on";
        })
      };
    }).filter((ot) => ot.readings.length || ot.plugs.length || ot.actions.length || ot.solar.length || ot.plants.length), q = Object.keys(ct).find((ot) => /^sensor\..*(p1_meter_power|grid_power)$/.test(ot) && ct[ot].state !== "unavailable") || null, Q = (ot) => Object.keys(ct).filter((st) => st.startsWith(ot + ".") && Y(st)), A = Q("alarm_control_panel"), ft = U.length ? U : N ? ["vacuum." + Se + "robot"] : [];
    return {
      states: xt,
      rooms: Ft,
      grid: q,
      // any device's room, hidden ones too (Maintenance's batteries are mostly diagnostic)
      areaOf: (ot) => nt[ot] ? d[ot] : K(ot),
      vacuums: ft,
      homeVacuums: ft.filter((ot) => !Ft.some((st) => st.actions.includes(ot))),
      security: {
        alarms: A.length ? A : N ? ["alarm_control_panel." + Se + "house"] : [],
        locks: Q("lock"),
        openings: [...Object.keys(nt).filter((ot) => ot.startsWith("binary_sensor.")), ...N ? ["sensor." + Se + "doorbell"] : []]
      }
    };
  }
  return { model: at, call: et, stop() {
    clearInterval(G), clearInterval(J);
  } };
}
const Oa = {
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
}, Yr = (n) => n < 0 ? 0 : n > 1 ? 1 : n, Xl = (n) => {
  const i = String(n || "#000000").trim().replace("#", ""), d = i.length === 3 ? i.split("").map((p) => p + p).join("") : i;
  return [0, 2, 4].map((p) => parseInt(d.slice(p, p + 2), 16) || 0);
}, kh = (n) => "#" + n.map((i) => Math.round(Math.max(0, Math.min(255, i))).toString(16).padStart(2, "0")).join(""), Pd = {}, Ha = (n, i, d) => {
  const p = n + i + d;
  return Pd[p] || (Pd[p] = kh(Xl(n).map((g, y) => g + (Xl(i)[y] - g) * d)));
}, Hd = {}, Tl = (n) => Hd[n] || (Hd[n] = Xl(n));
function Ip(n, i) {
  const d = String(n || "");
  return (d === "sunny" || d === "clear-night" ? "clear" : d === "partlycloudy" ? "partly" : d === "fog" ? "fog" : d === "lightning" || d === "lightning-rainy" ? "storm" : d === "snowy" || d === "snowy-rainy" ? "snow" : d === "rainy" || d === "pouring" || d === "hail" ? "rain" : "cloudy") + "/" + (d === "clear-night" || i ? "night" : "day");
}
function Mh(n) {
  const i = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return i.partly = [Ha(i.clear[0], i.cloudy[0], 0.12), Ha(i.clear[1], i.cloudy[1], 0.12)], i.storm = [Ha(i.rain[0], "#000000", 0.22), Ha(i.rain[1], "#000000", 0.22)], i;
}
const $l = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], Jl = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], Ql = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function Sh(n, i = Oa) {
  const d = { ...Oa, ...i }, p = Mh(d), g = String(n).split("/"), y = p[g[0]] ? g[0] : "clear", w = g[1] === "night", T = p[y][w ? 1 : 0], V = {
    night: w,
    clearness: y === "clear" ? 1 : y === "partly" ? 0.7 : 0.25,
    sky: T,
    skyStops: [T],
    skyT: 0,
    sun: { x: 45, y: w ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: w ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: w ? 1 : 0 },
    stars: $l.map(() => ({ o: 0 })),
    rain: Jl.map(() => ({ o: 0, dy: -16 })),
    snow: Ql.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, k = (D) => $l.map(() => ({ o: D }));
  return y === "clear" ? w ? (V.moon.o = 1, V.stars = k(1)) : V.sun.o = 1 : y === "partly" ? (V.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: w ? 1 : 0 }, w ? (V.moon = { x: 34, y: 33, d: 48, o: 1 }, V.stars = k(0.7)) : V.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : y === "cloudy" || y === "fog" ? (V.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: w ? 1 : 0 }, w ? V.moon = { x: 40, y: 36, d: 40, o: 0 } : V.sun = { x: 40, y: 36, r: 20, o: 0 }) : (V.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, w ? V.moon = { x: 38, y: 28, d: 36, o: 0 } : V.sun = { x: 38, y: 28, r: 18, o: 0 }, y === "snow" ? V.snow = Ql.map(() => ({ o: 1, dy: 0 })) : V.rain = Jl.map((D, O) => ({ o: y === "storm" && O === 1 ? 0 : 1, dy: 0 })), y === "storm" && (V.bolt = { o: 1, dy: 0 })), V;
}
const _h = [
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
], En = (n, i) => (_h[(i & 7) * 8 + (n & 7)] + 0.5) / 64, Ch = 0, Fp = 1, qp = 2, Wp = 3, Vp = 4, so = 5, cs = 6, dr = 7, jp = 8, Nd = (n, i) => i <= 0.6665 && ((n - 0.5) * (n - 0.5) + (i - 0.2877) * (i - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (i - 0.416) * (i - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (i - 0.458) * (i - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && i >= 0.416), Ah = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], Th = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((n) => [n[0] * 13 / 11, n[1] * 28 / 24]), Lh = (n, i, d) => {
  let p = !1;
  for (let g = 0, y = n.length - 1; g < n.length; y = g++) {
    const w = n[g], T = n[y];
    w[1] > d != T[1] > d && i < (T[0] - w[0]) * (d - w[1]) / (T[1] - w[1]) + w[0] && (p = !p);
  }
  return p;
};
function Dh(n, { size: i = 90, px: d = 2, oneBit: p = !1, colors: g = Oa, ink: y = "#26221e", paper: w = "#fbf9f6", clock: T = 0, idle: V = !1 } = {}) {
  const k = { ...Oa, ...g }, D = Math.sin, O = Math.PI * 2, G = Math.max(6, Math.round(i / d)), J = G / 90, et = V ? Math.floor(T / 100) * 100 : 0, at = V ? D(O * et / 3600) : 0, X = V ? 1.8 * D(O * et / 6400) : 0, N = V ? 0.9 * D(O * et / 4100) : 0, nt = V ? 0.8 * D(O * et / 5200) : 0, ct = et / 3400 % 1, bt = V && n.bolt.o > 0.5 && (ct < 0.04 || ct > 0.08 && ct < 0.11), it = new Array(G * G), K = new Uint8Array(G * G), Y = (q, Q, A, ft, ot) => {
    A == null || q < 0 || Q < 0 || q >= G || Q >= G || (ft >= 1 || ft > En(q + 5, Q + 3)) && (it[Q * G + q] = A, K[Q * G + q] = ot);
  }, H = (q, Q, A, ft) => {
    for (let ot = Math.max(0, Math.floor(Q - A) - 1); ot <= Math.min(G - 1, Q + A + 1); ot++) for (let st = Math.max(0, Math.floor(q - A) - 1); st <= Math.min(G - 1, q + A + 1); st++) ft(st, ot, st + 0.5 - q, ot + 0.5 - Q);
  }, xt = n.skyStops || [n.sky], Pt = n.skyT || 0;
  for (let q = 0; q < G; q++) {
    const Q = n.night ? Yr(1 - (q + 0.5) / (G * 0.7)) * 0.85 : Yr(((q + 0.5) / G - 0.35) / 0.65) * 0.85;
    for (let A = 0; A < G; A++) {
      let ft = xt[0];
      if (xt.length > 1) {
        const ot = Pt * (xt.length - 1), st = Math.min(xt.length - 2, Math.floor(ot));
        ft = ot - st > En(A, q) ? xt[st + 1] : xt[st];
      }
      Q > En(A + 2, q + 5) && (ft = n.night ? Ha(ft, "#000000", 0.28) : Ha(ft, "#ffffff", 0.2)), it[q * G + A] = bt ? Ha(ft, "#ffffff", 0.25) : ft;
    }
  }
  if (n.sun.o > 0.01) {
    const q = n.sun.x * J, Q = n.sun.y * J, A = Math.max(1, n.sun.r * J);
    if (V) {
      const ft = A * (1.45 + 0.06 * at), ot = Ha(k.sun, "#ffffff", 0.55);
      if (H(q, Q, ft, (st, vt, ut, Mt) => {
        const qt = Math.sqrt(ut * ut + Mt * Mt);
        qt > A && qt < ft && Y(st, vt, ot, 0.26 * (1 - (qt - A) / (ft - A)) * n.sun.o, Ch);
      }), n.sun.o > 0.5) {
        const st = Math.floor(et / 500) % 2, vt = Math.max(1, A * 0.22);
        for (let ut = 0; ut < 8; ut++) if (ut % 2 === st) for (let Mt = A + 1.5; Mt < A + 1.5 + vt; Mt += 0.7) Y(Math.floor(q + Math.cos(ut * Math.PI / 4) * Mt), Math.floor(Q + Math.sin(ut * Math.PI / 4) * Mt), k.sun, n.sun.o, jp);
      }
    }
    H(q, Q, A, (ft, ot, st, vt) => {
      if (st * st + vt * vt > A * A) return;
      const ut = ((st * 0.643 + vt * 0.766) / A + 1) / 2;
      Y(ft, ot, Yr((ut - 0.62) / 0.38) > En(ft, ot) ? k.sunEdge : k.sun, n.sun.o, Fp);
    });
  }
  if ($l.forEach((q, Q) => {
    const A = n.stars[Q].o;
    if (A < 0.01) return;
    const ft = Math.floor(q[0] * J), ot = Math.floor(q[1] * J), st = V ? (Math.floor(et / 300) + Q * 3) % 6 : 0;
    if (st === 5) return;
    const vt = Math.round(q[2] * J * (st === 4 ? 0.3 : st < 2 ? 1 : 0.6));
    Y(ft, ot, k.star, A, dr);
    for (let ut = 1; ut <= vt; ut++) {
      const Mt = ut === vt && vt > 1 ? Ha(k.star, n.sky, 0.5) : k.star;
      Y(ft - ut, ot, Mt, A, dr), Y(ft + ut, ot, Mt, A, dr), Y(ft, ot - ut, Mt, A, dr), Y(ft, ot + ut, Mt, A, dr);
    }
  }), n.moon.o > 0.01) {
    const q = Math.max(1.5, n.moon.d * J * 0.37), Q = n.moon.x * J, A = n.moon.y * J + (V && nt > 0.4 ? -1 : 0), ft = Q + 0.547 * q, ot = A - 0.503 * q, st = 0.82 * q, vt = Ha(k.moon, "#ffffff", 0.6);
    H(Q, A, q, (ut, Mt, qt, ie) => {
      if (qt * qt + ie * ie > q * q) return;
      const pa = ut + 0.5 - ft, na = Mt + 0.5 - ot;
      pa * pa + na * na <= st * st || Y(ut, Mt, Yr((ie + q) / (2 * q) * 1.1 - 0.1) > En(ut, Mt) ? k.moon : vt, n.moon.o, qp);
    });
  }
  const lt = Math.max(2, Math.round(15.65 * J)), U = Math.max(1, Math.round(5.87 * J * 0.5));
  Jl.forEach((q, Q) => {
    const A = n.rain[Q];
    let ft = A.dy, ot = A.o;
    if (ot < 0.01) return;
    if (V) {
      const ut = (et / 950 + Q / 3) % 1;
      ft += -5 + ut * 14, ot *= ut < 0.18 ? ut / 0.18 : ut > 0.72 ? (1 - ut) / 0.28 : 1;
    }
    const st = (q[0] + 3 + X) * J, vt = (q[1] + ft) * J;
    for (let ut = 0; ut < lt; ut++) for (let Mt = 0; Mt < U; Mt++) Y(Math.floor(st - 0.208 * ut) + Mt, Math.floor(vt) + ut, k.rain, ot, Vp);
  });
  const Ft = Math.max(0, Math.round(7.34 * J / 2.6));
  if (Ql.forEach((q, Q) => {
    const A = n.snow[Q];
    let ft = A.dy, ot = 0, st = A.o;
    if (st < 0.01) return;
    if (V) {
      const Mt = (et / 3200 + Q / 5) % 1;
      ft += -6 + Mt * 14, ot = 1.5 * D(O * (Mt * 1.5 + Q / 5)), st *= Mt < 0.2 ? Mt / 0.2 : Mt > 0.75 ? (1 - Mt) / 0.25 : 1;
    }
    const vt = Math.floor((q[0] + 3.67 + ot + X) * J), ut = Math.floor((q[1] + 3.67 + ft) * J);
    Y(vt, ut, k.snow, st, so);
    for (let Mt = 1; Mt <= Ft; Mt++)
      Y(vt - Mt, ut, k.snow, st, so), Y(vt + Mt, ut, k.snow, st, so), Y(vt, ut - Mt, k.snow, st, so), Y(vt, ut + Mt, k.snow, st, so), Ft > 1 && Mt < Ft && (Y(vt - Mt, ut - Mt, k.snow, st, so), Y(vt + Mt, ut - Mt, k.snow, st, so), Y(vt - Mt, ut + Mt, k.snow, st, so), Y(vt + Mt, ut + Mt, k.snow, st, so));
  }), n.bolt.o > 0.01)
    if (G >= 30) {
      const q = 39 + X, Q = 50 + n.bolt.dy;
      for (let A = Math.floor(Q * J); A <= (Q + 28) * J; A++) for (let ft = Math.floor(q * J); ft <= (q + 13) * J; ft++)
        Lh(Th, (ft + 0.5) / J - q, (A + 0.5) / J - Q) && Y(ft, A, k.sun, n.bolt.o, cs);
    } else {
      const q = G / 18, Q = 7, A = 10 + Math.round(n.bolt.dy * 0.2);
      Ah.forEach((ft, ot) => ft.split("").forEach((st, vt) => {
        if (st !== "#") return;
        const ut = Math.floor((Q + vt) * q), Mt = Math.floor((A + ot) * q);
        for (let qt = Mt; qt < Math.max(Mt + 1, Math.floor((A + ot + 1) * q)); qt++) for (let ie = ut; ie < Math.max(ut + 1, Math.floor((Q + vt + 1) * q)); ie++) Y(ie, qt, k.sun, n.bolt.o, cs);
      }));
    }
  if (n.cloud.o > 0.01) {
    const q = Math.max(3, n.cloud.w * J), Q = q * 0.6665, A = (n.cloud.x + X) * J - q / 2, ft = (n.cloud.y + N) * J - Q / 2, ot = Ha(k.cloudDay, k.cloudNight, Math.round(n.cloud.f * 4) / 4), st = Ha(ot, "#000000", 0.16);
    for (let vt = Math.max(0, Math.floor(ft) - 1); vt <= Math.min(G - 1, ft + Q + 1); vt++) for (let ut = Math.max(0, Math.floor(A) - 1); ut <= Math.min(G - 1, A + q + 1); ut++) {
      const Mt = (ut + 0.5 - A) / q, qt = (vt + 0.5 - ft) / q;
      Nd(Mt, qt) && Y(ut, vt, !Nd(Mt, qt + 1 / q) || Yr((qt - 0.42) / 0.25) * 0.8 > En(ut, vt) ? st : ot, n.cloud.o, Wp);
    }
  }
  return Eh(it, K, G, G, { oneBit: p, ink: y, paper: w, snowInk: !n.night });
}
function Eh(n, i, d, p, { oneBit: g, ink: y, paper: w, snowInk: T }) {
  const V = new Uint8ClampedArray(d * p * 4), k = Tl(y), D = Tl(w);
  for (let O = 0; O < p; O++) for (let G = 0; G < d; G++) {
    const J = O * d + G, et = i[J];
    if (n[J] == null) continue;
    let at = Tl(n[J]);
    if (g) {
      let X;
      et === Vp || et === jp ? X = !0 : et === so ? X = T : et === dr || et === cs ? X = !1 : X = Math.round((0.2126 * at[0] + 0.7152 * at[1] + 0.0722 * at[2]) / 255 * 4) / 4 <= En(G, O), (et === Fp || et === qp || et === Wp || et === cs) && (G > 0 && i[J - 1] !== et || G < d - 1 && i[J + 1] !== et || O > 0 && i[J - d] !== et || O < p - 1 && i[J + d] !== et) && (X = !0), at = X ? k : D;
    }
    V[J * 4] = at[0], V[J * 4 + 1] = at[1], V[J * 4 + 2] = at[2], V[J * 4 + 3] = 255;
  }
  return { w: d, h: p, data: V };
}
const qo = (n) => n < 0 ? 0 : n > 1 ? 1 : n, tc = (n) => {
  const i = String(n || "#000000").trim().replace("#", ""), d = i.length === 3 ? i.split("").map((p) => p + p).join("") : i;
  return [0, 2, 4].map((p) => parseInt(d.slice(p, p + 2), 16) || 0);
}, Bh = (n) => "#" + n.map((i) => Math.round(Math.max(0, Math.min(255, i))).toString(16).padStart(2, "0")).join(""), Od = {}, Na = (n, i, d) => {
  const p = n + i + d;
  return Od[p] || (Od[p] = Bh(tc(n).map((g, y) => g + (tc(i)[y] - g) * d)));
}, Id = {}, rs = (n) => Id[n] || (Id[n] = tc(n));
function Rh(n) {
  const i = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return i.partly = [Na(i.clear[0], i.cloudy[0], 0.12), Na(i.clear[1], i.cloudy[1], 0.12)], i.storm = [Na(i.rain[0], "#000000", 0.22), Na(i.rain[1], "#000000", 0.22)], i;
}
const Ph = [
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
], Io = (n, i) => (Ph[(i & 7) * 8 + (n & 7)] + 0.5) / 64, zp = 1, Gp = 2, Up = 3, Yp = 4, pr = 5, ds = 6, ec = 7, Zp = 8, Fd = (n, i) => i <= 0.6665 && ((n - 0.5) * (n - 0.5) + (i - 0.2877) * (i - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (i - 0.416) * (i - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (i - 0.458) * (i - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && i >= 0.416), Hh = (n, i, d) => {
  let p = !1;
  for (let g = 0, y = n.length - 1; g < n.length; y = g++) {
    const w = n[g], T = n[y];
    w[1] > d != T[1] > d && i < (T[0] - w[0]) * (d - w[1]) / (T[1] - w[1]) + w[0] && (p = !p);
  }
  return p;
};
function Nh(n, i, d, p, { oneBit: g, ink: y, paper: w, snowInk: T }) {
  const V = new Uint8ClampedArray(d * p * 4), k = rs(y), D = rs(w);
  for (let O = 0; O < p; O++) for (let G = 0; G < d; G++) {
    const J = O * d + G, et = i[J];
    if (n[J] == null) continue;
    let at = rs(n[J]);
    if (g) {
      let X;
      et === Yp || et === Zp ? X = !0 : et === pr ? X = T : et === ec || et === ds ? X = !1 : X = Math.round((0.2126 * at[0] + 0.7152 * at[1] + 0.0722 * at[2]) / 255 * 4) / 4 <= Io(G, O), (et === zp || et === Gp || et === Up || et === ds) && (G > 0 && i[J - 1] !== et || G < d - 1 && i[J + 1] !== et || O > 0 && i[J - d] !== et || O < p - 1 && i[J + d] !== et) && (X = !0), at = X ? k : D;
    }
    V[J * 4] = at[0], V[J * 4 + 1] = at[1], V[J * 4 + 2] = at[2], V[J * 4 + 3] = 255;
  }
  return { w: d, h: p, data: V };
}
const Oh = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, Ih = (n) => Ip(n, !1).split("/")[0], Ll = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let i = Math.imul(n ^ n >>> 15, 1 | n);
  return i = i + Math.imul(i ^ i >>> 7, 61 | i) ^ i, ((i ^ i >>> 14) >>> 0) / 4294967296;
}, Fh = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", qh = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", Wh = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", Vh = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", jh = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], zh = [".##", "##.", ".#.", "#.."];
function Kp(n, { width: i, height: d, colors: p, wave: g = 0.38, soft: y = 6, glow: w = 0.6, columns: T = 6 }) {
  const V = { ...Oa, dawn: "#e5a77e", ...p }, k = Rh(V), D = i, O = d, G = D / T, J = G / 2, et = Math.PI * 2, at = n.length ? n : [{ cond: "cloudy", night: !1 }], X = [...Array(T * 2)].map((bt, it) => {
    const K = at[Math.min(it, at.length - 1)], Y = Ih(K.cond), H = it % 2 === 1;
    return { cond: K.cond, k: Y, night: H, sky: k[Y][H ? 1 : 0], cover: Oh[Y] };
  }), N = (bt) => O * (0.5 - g * Math.cos(et * (bt / G - 0.25)));
  return { C: V, S: X, W: D, H: O, cw: G, sw: J, TAU: et, yb: N, side: (bt, it, K) => {
    const Y = (bt ? N(it) - K : K - N(it)) / Math.max(3, y * 1.4) + 0.5;
    return Y <= 0 ? 0 : Y >= 1 ? 1 : Y;
  }, glowAt: (bt) => {
    const it = ((bt / G - 0.25) % 1 + 1) % 1, K = Math.max(0, Math.min(T - 1, Math.round(bt / G - 0.25))), Y = Math.max(0, Math.min(T - 1, Math.round(bt / G - 0.75))), H = 1 - (X[2 * K].cover + X[2 * Y + 1].cover) / 2, xt = Math.sin(Math.PI * Math.min(1, Math.max(0, N(bt) / O)));
    return { c: it < 0.5 ? V.dusk : V.dawn, a: w * (0.2 + 0.8 * H) * xt * xt };
  }, soft: y, tw: G * 0.3, sy: O / 90 };
}
function Xp(n, { clock: i = 0, ambient: d = !1, seed: p = 1 }) {
  const { S: g, sw: y, side: w, C: T, TAU: V, sy: k, H: D } = n, O = i, G = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  g.forEach((at, X) => {
    const N = Ll(p * 977 + X * 131 + 7), nt = (X + 0.5) * y, ct = at.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[at.k] : 0;
    for (let bt = 0; bt < ct; bt++) {
      const it = nt + (N() - 0.5) * y * 1.6, K = (6 + N() * 76) * k, Y = N() < 0.35, H = 1.8 + N() * 1.6, xt = w(!0, it, K) * (Y ? 0.95 : 0.7) * (d ? 0.6 + 0.4 * Math.sin(V * O / 2600 + bt * 1.7 + X) : 1);
      xt >= 0.03 && G.stars.push({ x: it, y: K, big: Y, size: H, o: xt });
    }
    if (!at.night && (at.k === "clear" || at.k === "partly")) {
      const bt = nt + (N() - 0.5) * y * 0.3, it = Math.min(15, y * 0.29);
      G.suns.push({ x: bt, y: 32 * k, rad: it, halo: it * 2.8 * (d ? 1 + 0.07 * Math.sin(V * O / 3600 + X) : 1) });
    }
    if (at.night && (at.k === "clear" || at.k === "partly")) {
      const bt = Math.min(0.78, y * 0.55 / 34), it = nt - 23 * bt + (N() - 0.5) * y * 0.2;
      G.moons.push({ x: it + 23 * bt, y: (4 + (d ? 0.8 * Math.sin(V * O / 5200 + X) : 0)) * k + 23 * bt, d: 46 * bt });
    }
  });
  const J = Math.max(56, Math.min(100, D * 0.45)), et = Math.max(1, y / (J * 2.4));
  return g.forEach((at, X) => {
    const N = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[at.k];
    if (!N) return;
    const nt = at.k === "partly" ? 1 : Math.round(N * et), ct = Ll(p * 577 + X * 71 + 3), bt = (X + 0.5) * y, it = at.k === "rain" || at.k === "storm" || at.night ? T.cloudNight : T.cloudDay, K = at.night ? 0.82 : at.k === "storm" ? 0.75 : 1;
    for (let Y = 0; Y < nt; Y++) {
      const H = J / 46 * (at.k === "partly" ? 1 : 0.8 + ct() * 0.4), xt = bt + (at.k === "partly" ? y * 0.12 : ((Y + 0.5) / nt - 0.5) * y * 0.95 + (ct() - 0.5) * y * 0.5 / nt), Pt = (at.k === "partly" ? 40 : 6 + ct() * 26) * k, lt = d ? 2.5 * Math.sin(V * O / 9e3 + X * 1.3 + Y * 2.1) : 0, U = d ? 0.9 * Math.sin(V * O / 6100 + X + Y) : 0;
      G.clouds.push({ x: xt - 23 * H + lt, y: Pt - 15.33 * H + U, w: 46 * H, h: 30.66 * H, fill: it, o: K * (nt > 1 && Y === 0 ? 0.85 : 1) });
    }
  }), g.forEach((at, X) => {
    const N = Ll(p * 313 + X * 29 + 11), nt = (X + 0.5) * y, ct = at.cond === "pouring" ? 16 : at.cond === "rainy" || at.cond === "hail" ? 9 : at.cond === "lightning-rainy" ? 12 : at.cond === "snowy-rainy" ? 5 : 0;
    for (let it = 0; it < ct; it++) {
      let K = nt + (N() - 0.5) * y * 1.05, Y = 44 + N() * 36, H = 1;
      if (d) {
        const Pt = ((Y - 44 + O * 0.04) % 36 + 36) % 36;
        K -= 0.21 * (Pt - (Y - 44)), Y = 44 + Pt, H = Math.min(1, Pt / 6, (36 - Pt) / 6);
      }
      Y *= k;
      const xt = w(at.night, K, Y) * H;
      xt >= 0.05 && G.drops.push({ x: K, y: Y, o: xt });
    }
    const bt = at.cond === "snowy" ? 11 : at.cond === "snowy-rainy" ? 6 : 0;
    for (let it = 0; it < bt; it++) {
      let K = nt + (N() - 0.5) * y * 1.05, Y = 40 + N() * 44, H = 1;
      if (d) {
        const Pt = ((Y - 40 + O * 9e-3) % 44 + 44) % 44;
        Y = 40 + Pt, K += 1.6 * Math.sin(V * O / 2800 + it * 1.9 + X), H = Math.min(1, Pt / 6, (44 - Pt) / 6);
      }
      Y *= k;
      const xt = w(at.night, K, Y) * H;
      xt >= 0.05 && G.flakes.push({ x: K, y: Y, o: xt });
    }
    if (at.k === "fog") {
      const it = at.night ? "#c8ccd6" : "#ffffff", K = at.night ? 0.28 : 0.62, Y = d ? 4 * Math.sin(V * O / 8e3 + X) : 0;
      for (let H = 0; H < 4; H++) G.fogs.push({ x: nt - y * 0.75 + H % 2 * y * 0.18 + (H % 2 ? Y : -Y), y: (30 + H * 13) * k, w: y * 1.3, c: it, a: K });
    }
    if (at.k === "storm") {
      const it = (O / 3400 + X * 0.37) % 1;
      G.bolts.push({ x: nt + (N() - 0.5) * y * 0.3 - 5, y: 36 * k, o: d && !(it < 0.05 || it > 0.09 && it < 0.12) ? 0.8 : 1 });
    }
  }), G;
}
function Gh(n, i, d, p, g, y, w, T) {
  const { S: V, C: k, cw: D, yb: O, glowAt: G, soft: J, tw: et, sy: at } = n, X = new Array(d * p), N = new Uint8Array(d * p), nt = new Uint8Array(d * p), ct = (q, Q, A, ft, ot) => {
    A == null || q < 0 || Q < 0 || q >= d || Q >= p || (ft >= 1 || ft > Io(q + 5, Q + 3)) && (X[Q * d + q] = A, N[Q * d + q] = ot);
  }, bt = (q, Q, A, ft) => {
    for (let ot = Math.max(0, Math.floor(Q - A) - 1); ot <= Math.min(p - 1, Q + A + 1); ot++) for (let st = Math.max(0, Math.floor(q - A) - 1); st <= Math.min(d - 1, q + A + 1); st++) ft(st, ot, st + 0.5 - q, ot + 0.5 - Q);
  }, it = (q, Q, A) => {
    for (let ot = 0; ot < q.length - 1; ot++) {
      const st = (ot + Q) * D;
      if (A < st - et / 2) return [q[ot], q[ot], 0];
      if (A <= st + et / 2) return [q[ot], q[ot + 1], (A - st + et / 2) / et];
    }
    const ft = q[q.length - 1];
    return [ft, ft, 0];
  }, K = V.filter((q) => !q.night).map((q) => q.sky), Y = V.filter((q) => q.night).map((q) => q.sky), H = J / y, xt = 16 * at / y;
  for (let q = 0; q < d; q++) {
    const Q = (q + 0.5) * g, A = O(Q) / y, ft = it(K, 0.75, Q), ot = it(Y, 1.25, Q), st = G(Q);
    for (let vt = 0; vt < p; vt++) {
      const ut = Io(q, vt), Mt = vt + 0.5 - A, qt = (H > 0.01 ? qo(0.5 + Mt / H) : Mt > 0 ? 1 : 0) > ut;
      let ie = qt ? ft[2] > ut ? ft[1] : ft[0] : ot[2] > ut ? ot[1] : ot[0];
      (qt ? qo(((vt + 0.5) / p - 0.45) / 0.55) * 0.7 : qo(1 - (vt + 0.5) / (p * 0.55)) * 0.7) > Io(q + 2, vt + 5) && (ie = qt ? Na(ie, "#ffffff", 0.18) : Na(ie, "#000000", 0.25)), qt && Mt >= 0 && Mt < xt && st.a * 1.3 * (1 - Mt / xt) > Io(q + 6, vt + 1) && (ie = st.c), X[vt * d + q] = ie, nt[vt * d + q] = qt ? 0 : 1;
    }
  }
  const Pt = Na(k.sun, "#ffffff", 0.55), lt = Na(k.moon, "#ffffff", 0.6);
  i.stars.forEach((q) => {
    const Q = Math.floor(q.x / g), A = Math.floor(q.y / y);
    if (Q < 0 || A < 0 || Q >= d || A >= p || !nt[A * d + Q] || q.o < 0.15) return;
    const ft = q.o > 0.45 ? k.star : Na(k.star, X[A * d + Q], 0.5), ot = q.big && q.o > 0.6 ? Math.floor(q.size / g) : 0;
    ct(Q, A, ft, 1, ec);
    for (let st = 1; st <= ot; st++) [[Q - st, A], [Q + st, A], [Q, A - st], [Q, A + st]].forEach((vt) => {
      vt[0] >= 0 && vt[1] >= 0 && vt[0] < d && vt[1] < p && nt[vt[1] * d + vt[0]] && ct(vt[0], vt[1], ft, 1, ec);
    });
  }), i.suns.forEach((q) => {
    const Q = Math.max(1.5, q.rad / g), A = q.x / g, ft = q.y / y, ot = q.halo / g * 0.85;
    if (bt(A, ft, ot, (st, vt, ut, Mt) => {
      const qt = Math.sqrt(ut * ut + Mt * Mt);
      qt > Q && qt < ot && !nt[vt * d + st] && ct(st, vt, Pt, 0.3 * (1 - (qt - Q) / (ot - Q)), 0);
    }), T) {
      const st = Math.floor(w / 500) % 2, vt = Math.max(1, Q * 0.3);
      for (let ut = 0; ut < 8; ut++) if (ut % 2 === st) for (let Mt = Q + 1.2; Mt < Q + 1.2 + vt; Mt += 0.7) ct(Math.floor(A + Math.cos(ut * Math.PI / 4) * Mt), Math.floor(ft + Math.sin(ut * Math.PI / 4) * Mt), k.sun, 1, Zp);
    }
    bt(A, ft, Q, (st, vt, ut, Mt) => {
      ut * ut + Mt * Mt <= Q * Q && ct(st, vt, qo(((Mt / Q + 1) / 2 - 0.6) / 0.4) > Io(st, vt) ? k.sunEdge : k.sun, 1, zp);
    });
  }), i.moons.forEach((q) => {
    const Q = Math.max(1.5, q.d * 0.37 / g), A = q.x / g, ft = q.y / y, ot = A + 0.547 * Q, st = ft - 0.503 * Q, vt = 0.82 * Q;
    bt(A, ft, Q, (ut, Mt, qt, ie) => {
      if (qt * qt + ie * ie > Q * Q) return;
      const pa = ut + 0.5 - ot, na = Mt + 0.5 - st;
      pa * pa + na * na > vt * vt && ct(ut, Mt, qo((ie + Q) / (2 * Q) * 1.1 - 0.1) > Io(ut, Mt) ? k.moon : lt, 1, Gp);
    });
  }), i.clouds.forEach((q) => {
    const Q = Math.max(3, q.w / g), A = Q * 0.6665, ft = q.x / g, ot = q.y / y, st = Na(q.fill, "#000000", 0.16);
    for (let vt = Math.max(0, Math.floor(ot) - 1); vt <= Math.min(p - 1, ot + A + 1); vt++) for (let ut = Math.max(0, Math.floor(ft) - 1); ut <= Math.min(d - 1, ft + Q + 1); ut++) {
      const Mt = (ut + 0.5 - ft) / Q, qt = (vt + 0.5 - ot) / Q;
      Fd(Mt, qt) && ct(ut, vt, !Fd(Mt, qt + 1 / Q) || qo((qt - 0.42) / 0.25) * 0.8 > Io(ut, vt) ? st : q.fill, q.o, Up);
    }
  }), i.fogs.forEach((q) => {
    const Q = Math.floor(q.y / y), A = Math.max(Q, Math.floor((q.y + 6 * at) / y) - 1), ft = Math.floor(q.x / g), ot = Math.floor((q.x + q.w) / g);
    for (let st = Q; st <= A; st++) for (let vt = ft; vt <= ot; vt++) {
      const ut = (vt - ft) / Math.max(1, ot - ft);
      ct(vt, st, q.c, q.a * (ut < 0.25 ? ut / 0.25 : ut > 0.75 ? (1 - ut) / 0.25 : 1), 0);
    }
  });
  const U = Math.max(2, Math.round(9 / y));
  i.drops.forEach((q) => {
    const Q = q.x / g, A = Math.floor(q.y / y);
    for (let ft = 0; ft < U; ft++) ct(Math.floor(Q - 0.208 * ft * y / g), A + ft, k.rain, q.o, Yp);
  });
  const Ft = Math.max(0, Math.round(4.4 / g / 2.6));
  return i.flakes.forEach((q) => {
    const Q = Math.floor(q.x / g), A = Math.floor(q.y / y);
    ct(Q, A, k.snow, q.o, pr);
    for (let ft = 1; ft <= Ft; ft++)
      ct(Q - ft, A, k.snow, q.o, pr), ct(Q + ft, A, k.snow, q.o, pr), ct(Q, A - ft, k.snow, q.o, pr), ct(Q, A + ft, k.snow, q.o, pr);
  }), i.bolts.forEach((q) => {
    if (g <= 3.5)
      for (let Q = Math.floor(q.y / y); Q <= (q.y + 24) / y; Q++) for (let A = Math.floor(q.x / g); A <= (q.x + 11) / g; A++)
        Hh(jh, (A + 0.5) * g - q.x, (Q + 0.5) * y - q.y) && ct(A, Q, k.sun, 1, ds);
    else {
      const Q = Math.round(q.x / g), A = Math.round(q.y / y);
      zh.forEach((ft, ot) => ft.split("").forEach((st, vt) => {
        st === "#" && ct(Q + vt, A + ot, k.sun, 1, ds);
      }));
    }
  }), { col: X, ids: N };
}
function Uh(n, i) {
  const d = i.px, p = Math.max(6, Math.round(i.width / d)), g = Math.max(6, Math.round(i.height / d)), y = i.width / p, w = i.height / g, T = i.ambient ? Math.floor((i.clock || 0) / 100) * 100 : 0, V = (J) => {
    const et = Kp(J, i);
    return Gh(et, Xp(et, { clock: T, ambient: i.ambient, seed: i.seed }), p, g, y, w, T, i.ambient);
  }, k = V(n), D = i.reveal == null ? 1 : qo(i.reveal);
  let O = k.col, G = k.ids;
  if (D < 1) {
    const J = i.prev ? V(i.prev) : null, et = D * (p + 12);
    O = new Array(p * g), G = new Uint8Array(p * g);
    for (let at = 0; at < p * g; at++) {
      const X = at % p, N = at / p | 0;
      (i.reduce ? D : qo((et - X) / 12)) > Io(X, N) ? (O[at] = k.col[at], G[at] = k.ids[at]) : J ? (O[at] = J.col[at], G[at] = J.ids[at]) : (O[at] = null, G[at] = 255);
    }
  }
  return Nh(O, G, p, g, { oneBit: i.oneBit, ink: i.ink || "#26221e", paper: i.paper || "#fbf9f6", snowInk: !1 });
}
function Yh(n, i, d) {
  const p = d.width, g = d.height, y = d.reveal == null ? 1 : qo(d.reveal), w = (G, J) => {
    const et = Kp(J, d);
    Zh(G, et, Xp(et, d));
  };
  if (n.clearRect(0, 0, p, g), y >= 1) {
    w(n, i);
    return;
  }
  if (d.prev && w(n, d.prev), d.reduce) {
    n.save(), n.globalAlpha = y, w(n, i), n.restore();
    return;
  }
  const T = n.canvas, V = T.__wxOff || (T.__wxOff = document.createElement("canvas"));
  (V.width !== T.width || V.height !== T.height) && (V.width = T.width, V.height = T.height);
  const k = V.getContext("2d");
  k.setTransform(n.getTransform()), k.clearRect(0, 0, p, g), w(k, i);
  const D = y * (p + 64) - 64, O = k.createLinearGradient(D, 0, D + 64, 0);
  O.addColorStop(0, "rgba(0,0,0,1)"), O.addColorStop(1, "rgba(0,0,0,0)"), k.globalCompositeOperation = "destination-in", k.fillStyle = O, k.fillRect(0, 0, p, g), k.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(V, 0, 0), n.restore();
}
function Zh(n, i, d) {
  const { W: p, H: g, S: y, C: w, cw: T, yb: V, glowAt: k, soft: D, tw: O, sy: G } = i, J = n.getTransform().a || 1, et = (U) => {
    n.shadowColor = U ? "rgba(28,18,8,.22)" : "transparent", n.shadowBlur = U ? 4 * J : 0, n.shadowOffsetY = U ? 1.5 * J : 0;
  }, at = (U, Ft) => {
    const q = rs(U);
    return "rgba(" + q[0] + "," + q[1] + "," + q[2] + "," + Math.max(0, Math.min(1, Ft)).toFixed(3) + ")";
  }, X = (U, Ft) => {
    const q = n.createLinearGradient(0, 0, p, 0);
    q.addColorStop(0, U[0]);
    for (let Q = 0; Q < U.length - 1; Q++) {
      const A = (Q + Ft) * T, ft = (A - O / 2) / p, ot = (A + O / 2) / p;
      ft > 0 && ft < 1 && q.addColorStop(ft, U[Q]), ot > 0 && ot < 1 && q.addColorStop(ot, U[Q + 1]);
    }
    return q.addColorStop(1, U[U.length - 1]), q;
  }, N = Math.max(24, Math.ceil(p / 4)), nt = (U, Ft) => {
    n.beginPath();
    for (let q = 0; q <= N; q++) {
      const Q = p * q / N, A = U == null ? 0 : V(Q) + U;
      q ? n.lineTo(Q, A) : n.moveTo(Q, A);
    }
    for (let q = N; q >= 0; q--) {
      const Q = p * q / N;
      n.lineTo(Q, V(Q) + Ft);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = X(y.filter((U) => !U.night).map((U) => U.sky), 0.75), n.fillRect(0, 0, p, g);
  const ct = n.createLinearGradient(0, 0, p, 0);
  for (let U = 0; U <= 64; U++) {
    const Ft = k(p * U / 64);
    ct.addColorStop(U / 64, at(Ft.c, Math.min(1, Ft.a)));
  }
  n.fillStyle = ct;
  for (let U = 0; U < 8; U++)
    n.globalAlpha = 1 - U / 8, nt(U * 2 * G, (U + 1) * 2 * G);
  n.fillStyle = X(y.filter((U) => U.night).map((U) => U.sky), 1.25);
  const bt = Math.max(0.5, D), it = 6;
  n.globalAlpha = 1, nt(null, -bt);
  for (let U = 0; U < it; U++)
    n.globalAlpha = 1 - (U + 0.5) / it, nt(-bt + 2 * bt * U / it, -bt + 2 * bt * (U + 1) / it);
  n.globalAlpha = 1;
  const K = new Path2D(Wh), Y = new Path2D(qh), H = new Path2D(Fh), xt = new Path2D(Vh);
  n.fillStyle = w.star, d.stars.forEach((U) => {
    n.globalAlpha = U.o, U.big ? (n.save(), n.translate(U.x, U.y), n.scale(U.size, U.size), n.fill(K), n.restore()) : (n.beginPath(), n.arc(U.x, U.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const Pt = Na(w.sun, "#ffffff", 0.55);
  d.suns.forEach((U) => {
    const Ft = n.createRadialGradient(U.x, U.y, 0, U.x, U.y, U.halo);
    Ft.addColorStop(0, at(Pt, 0.42)), Ft.addColorStop(0.7, at(Pt, 0)), n.fillStyle = Ft, n.beginPath(), n.arc(U.x, U.y, U.halo, 0, Math.PI * 2), n.fill();
    const q = n.createLinearGradient(0, U.y - U.rad, 0, U.y + U.rad);
    q.addColorStop(0.6, w.sun), q.addColorStop(1, w.sunEdge), n.fillStyle = q, et(!0), n.beginPath(), n.arc(U.x, U.y, U.rad, 0, Math.PI * 2), n.fill(), et(!1);
  });
  const lt = Na(w.moon, "#ffffff", 0.6);
  d.moons.forEach((U) => {
    n.save(), n.translate(U.x - U.d / 2, U.y - U.d / 2), n.scale(U.d / 46, U.d / 46);
    const Ft = n.createLinearGradient(0, 6, 0, 40);
    Ft.addColorStop(0, lt), Ft.addColorStop(1, w.moon), n.fillStyle = Ft, et(!0), n.fill(Y), et(!1), n.restore();
  }), d.clouds.forEach((U) => {
    n.save(), n.globalAlpha = U.o, n.translate(U.x, U.y), n.scale(U.w / 46, U.h / 30.66), n.translate(-4, -9.67), n.fillStyle = U.fill, et(!0), n.fill(H), et(!1), n.restore();
  }), d.fogs.forEach((U) => {
    const Ft = n.createLinearGradient(U.x, 0, U.x + U.w, 0);
    Ft.addColorStop(0, at(U.c, 0)), Ft.addColorStop(0.25, at(U.c, U.a)), Ft.addColorStop(0.75, at(U.c, U.a)), Ft.addColorStop(1, at(U.c, 0)), n.fillStyle = Ft, n.fillRect(U.x, U.y, U.w, 6 * G);
  }), n.fillStyle = w.rain, d.drops.forEach((U) => {
    n.save(), n.globalAlpha = U.o, n.translate(U.x, U.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = w.snow, d.flakes.forEach((U) => {
    n.globalAlpha = U.o, n.beginPath(), n.arc(U.x, U.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = w.sun, d.bolts.forEach((U) => {
    n.save(), n.globalAlpha = U.o, n.translate(U.x, U.y), n.fill(xt), n.restore();
  }), n.restore();
}
const Kh = (n) => n === "sunny" ? "clear" : n === "clear-night" ? "night" : n === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(n) ? "rain" : ["snowy", "snowy-rainy"].includes(n) ? "snow" : "cloudy", ir = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, Yi = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, Dl = (n, i) => '<path class="' + i + '" d="' + n + '"/>', Xh = (n, i) => ' style="animation-delay:-' + Math.round(n * 137 % i) + 'ms"', Ra = (n, i, d, p) => {
  const g = d * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (p < 1 ? ' opacity="' + p + '"' : "") + Xh(n, 2400) + ' d="M' + n + " " + (i - d) + "L" + (n + g) + " " + (i - g) + "L" + (n + d) + " " + i + "L" + (n + g) + " " + (i + g) + "L" + n + " " + (i + d) + "L" + (n - g) + " " + (i + g) + "L" + (n - d) + " " + i + "L" + (n - g) + " " + (i - g) + 'Z"/>';
}, qd = ([n, i, d], p) => '<path class="wbMoonPath" d="' + n + '" fill="url(#' + p + ')"/><defs><linearGradient id="' + p + '" x1="0" y1="' + i + '" x2="0" y2="' + d + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', $h = (n, i) => i ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', Jh = (n) => (n ? ["29.35", "43.04", "56.74"].map((i, d) => '<g class="wbDrop" style="animation-delay:-' + d * 317 + 'ms"><rect class="wbAccent" x="' + i + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + i + ' 60.65)"/></g>') : [19, 26, 33].map((i, d) => '<g class="wbDrop" style="animation-delay:-' + d * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + i + ' 38)"/></g>')).join(""), Qh = (n) => (n ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([i, d], p) => '<circle class="wbFlake" style="animation-delay:-' + p * 640 + 'ms" cx="' + i + '" cy="' + d + '" r="' + (n ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function tm(n, i, d, p) {
  const g = (y) => '<g filter="url(#' + p + '-sh)">' + y + "</g>";
  return n === "clear" ? i ? g(qd(d ? Yi.l : Yi.s, p)) + (d ? Ra(70, 20, 5.83, 1) + Ra(78.33, 41.67, 3.75, 0.8) + Ra(60, 71.67, 3.33, 0.6) : Ra(42, 12, 3.5, 1) + Ra(47, 25, 2.25, 0.8) + Ra(36, 43, 2, 0.6)) : g($h(p, d)) : n === "partly" ? g(i ? qd(d ? Yi.lp : Yi.sp, p) : d ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + g(Dl(d ? ir.lp : ir.sp, i ? "wbCloudLight" : "wbBright")) + (i ? d ? Ra(73.33, 16.67, 4.17, 0.9) : Ra(44, 10, 2.5, 0.9) : "") : n === "cloudy" ? g(Dl(d ? ir.lc : ir.s, i ? "wbCloudLight" : "wbBright")) + (i ? d ? Ra(15, 15, 3.75, 0.8) + Ra(76.67, 13.33, 2.92, 0.6) : Ra(9, 9, 2.25, 0.8) + Ra(46, 8, 1.75, 0.6) : "") : g(Dl(d ? ir.lr : ir.s, "wbCloudLight")) + (n === "rain" ? Jh(d) : Qh(d));
}
const em = (n, i) => '<defs><filter id="' + n + '-sh" x="-25%" y="-25%" width="150%" height="160%"><feDropShadow dx="0" dy="' + (i ? 1.6 : 1) + '" stdDeviation="' + (i ? 1.8 : 1.1) + '" flood-color="#1c1208" flood-opacity=".22"/></filter></defs>';
function am(n, i, d, p) {
  let g = Kh(n);
  const y = g === "night" || !!d;
  g === "night" && (g = "clear");
  const w = i ? 90 : 54;
  return { k: g, night: y, svg: '<svg viewBox="0 0 ' + w + " " + w + '">' + em(p, i) + tm(g, y, i, p) + "</svg>" };
}
const om = [
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
], Zi = (n, i) => (om[i % 8 * 8 + n % 8] + 0.5) / 64, Za = (n) => [parseInt(n.slice(1, 3), 16), parseInt(n.slice(3, 5), 16), parseInt(n.slice(5, 7), 16)], Xe = (n, i, d) => [Math.round(n[0] + (i[0] - n[0]) * d), Math.round(n[1] + (i[1] - n[1]) * d), Math.round(n[2] + (i[2] - n[2]) * d)], Zr = (n) => n < 0 ? 0 : n > 1 ? 1 : n, Wd = (n, i) => {
  let d = n * 374761393 + i * 668265263 ^ 1540483477;
  return d = Math.imul(d ^ d >>> 13, 1274126177), ((d ^ d >>> 16) >>> 0) / 4294967296;
}, Rn = [255, 255, 255], aa = Za("#26221e"), Vd = Za("#0288d1"), nm = Za("#01579b"), El = Za(Oa.cloudDay), Bl = Za(Oa.cloudNight), Ki = Za(Oa.dusk), Rl = Za(Oa.sunEdge), rm = Za(Oa.sun), im = 10, jd = 0.3, Wo = 56, $p = 21;
function sm(n) {
  const i = Array.from({ length: $p }, () => new Array(Wo).fill(void 0)), d = (w, T, V) => {
    i[T][w] = V;
  }, p = Xe(Ki, aa, 0.35), g = Xe(aa, Rn, 0.22);
  for (let w = 0; w <= 6; w++) {
    const T = w < 2 ? Wo - 2 : Wo - 1;
    for (let V = 6 - w; V <= T; V++) d(V, w, w < 2 ? p : w === 6 ? g : aa);
  }
  const y = [Ki, Rl, Bl, Za(Oa.skyRainDay), Xe(Ki, aa, 0.2), Xe(n, aa, 0.35)];
  [2, 3, 2, 3, 3].forEach((w, T) => {
    const V = 9 + T * 6;
    for (let k = 0; k < w; k++) {
      const D = y[(T * 2 + k * 3) % y.length];
      for (let O = V; O < V + 5; O++)
        d(O, 7 + k * 2, Xe(D, aa, 0.12)), d(O, 8 + k * 2, k === w - 1 ? Xe(D, Rn, 0.3) : D);
      d(V + 5, 7 + k * 2, aa), d(V + 5, 8 + k * 2, aa);
    }
  });
  for (let w = 7; w <= 12; w++) d(5, w, aa);
  d(5, 13, Rl);
  for (let w = 7; w <= 14; w++) for (let T = 42; T <= 51; T++) d(T, w, T === 51 ? Bl : El);
  for (let w = 43; w <= 50; w += 2)
    d(w, 12, aa), d(w, 9, Xe(aa, El, 0.4));
  for (let w = 40; w <= 53; w++) d(w, 14, w === 40 || w === 53 ? Bl : El);
  for (let w = 15; w <= 18; w++) for (let T = 46; T <= 49; T++) d(T, w, w === 18 ? aa : w === 16 ? Rl : Ki);
  for (let w = 15; w <= 19; w++) d(44, w, aa);
  return d(44, 20, rm), i;
}
function lm(n, i, d, p) {
  const g = Math.max(1, Math.round(n)), y = Math.max(1, Math.round(i)), w = new Uint8ClampedArray(g * y * 4), T = Za(p.skyClearDay), V = Za(p.skyFogDay), k = sm(T), D = Math.round(y * 0.55), O = Zr(1 - Math.log(d / jd) / Math.log(im / jd)), G = Xe(T, V, O), J = (N) => Zr((N - 0.1) / 0.9), et = Zr((1 - Math.exp(-2 / d) - 0.2) / 0.8), at = Math.round(g / 2 - Wo / 2), X = D + 3;
  for (let N = 0; N < y; N++) {
    const nt = X - 1 - N, ct = N - X;
    for (let bt = 0; bt < g; bt++) {
      const it = bt - at;
      let K, Y;
      const H = nt >= 0 && nt < $p && it >= 0 && it < Wo ? k[nt][it] : void 0;
      if (H)
        K = H, Y = et;
      else if (nt >= 0 && nt <= 1 && it >= 4 - nt && it <= 5 - nt)
        K = Xe(Rn, Vd, 0.15), Y = et;
      else if (N < D) {
        const lt = Zr(((N + 0.5) / D - 0.15) / 0.85) * 3, U = Math.min(3, Math.floor(lt + Zi(bt + 2, N + 5)));
        K = Xe(G, Rn, U * 0.1), Y = O * 0.95;
      } else {
        const lt = (N - D + 0.5) / (y - D), U = Math.min(1.5, 6e-3 / (lt * lt)), Ft = Zr(lt * 1.4) * 3, q = Math.min(3, Math.floor(Ft + Zi(bt + 1, N + 6)));
        K = Xe(Vd, nm, q / 3);
        const Q = 1 + Math.round(lt * 7), A = Math.floor(bt / (Q * 3)), ft = 0.06 + 0.16 * lt, ot = bt % (Q * 3) < Q;
        ot && Wd(A, N) < ft ? K = Xe(K, Rn, 0.18 + 0.1 * (1 - lt)) : ot && lt > 0.5 && Wd(A, N - 1) < ft && (K = Xe(K, aa, 0.12)), Y = J(1 - Math.exp(-U / d)), ct === 0 && it >= 3 && it <= 8 ? (K = Xe(K, Rn, it < 6 ? 0.8 : 0.45), Y = et) : ct >= 0 && ct <= 2 && it >= Wo && it < Wo + 40 ? ((1 - (it - Wo) / 40) * (ct === 1 ? 0.9 : 0.5) > Zi(bt, N + 3) && (K = Xe(K, Rn, 0.5)), Y = et) : ct === 0 && it >= 6 && it < Wo && (K = Xe(K, aa, it % 2 === 0 ? 0.35 : 0.2), Y = et);
      }
      const xt = Y > Zi(bt, N) ? V : K, Pt = (N * g + bt) * 4;
      w[Pt] = xt[0], w[Pt + 1] = xt[1], w[Pt + 2] = xt[2], w[Pt + 3] = 255;
    }
  }
  return { data: w, w: g, h: y };
}
const cm = {
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
}, dm = 1.6;
function pm(n, i) {
  const d = n ? cm[String(n).toUpperCase()] : void 0;
  if (!d || !(i > 0)) return;
  const p = (y) => Math.abs(Math.log(y[2] / i)), g = d.reduce((y, w) => p(w) < p(y) ? w : y);
  return p(g) <= Math.log(dm) ? { from: g[0], to: g[1], km: g[2] } : void 0;
}
const fm = (n, i) => i === "mi" ? n * 1.609344 : i === "m" ? n / 1e3 : i === "ft" ? n * 3048e-7 : i === "yd" ? n * 9144e-7 : n, um = (n) => n < 1 ? "very_poor" : n < 4 ? "poor" : n < 10 ? "moderate" : n < 20 ? "good" : n < 40 ? "very_good" : "excellent", De = {
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
}, Ee = { standard: "cubic-bezier(.2,0,0,1)", land: "cubic-bezier(.34,1.46,.64,1)", spring: "cubic-bezier(.2,1.2,.4,1)", soft: "cubic-bezier(.4,0,.2,1)", exit: "cubic-bezier(.4,0,1,1)" }, We = () => {
  var n;
  return !!((n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches);
};
function hm() {
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
  ].map(([y, w]) => y + ":" + w).join(";");
}
const Pl = ":is(button.primary,button.pill,.hcBtn,.wbRangeBtn,.activityRow.tap,.hcRow,a.hcRow)", mm = "#homeView :is(.tfAreaPanel,.tfRoomTile.tfBoardItem)", gm = 300, is = (n) => Math.min(1, gm / Math.max(1, n)), Hl = (n, i) => 1 + (i / 100 - 1) * is(n.offsetWidth);
function bm(n, i) {
  i.style.cssText += ";" + hm();
  let d = null;
  const p = (D) => {
    D.classList.remove("mvMoving", "mvLit"), D.style.setProperty("--rx", "0deg"), D.style.setProperty("--ry", "0deg"), D.style.setProperty("--sc", 1), D._down = !1;
  };
  n.addEventListener("pointermove", (D) => {
    var N, nt;
    const O = D.pointerType === "touch" || We() ? null : (nt = (N = D.target).closest) == null ? void 0 : nt.call(N, Pl);
    if (d && d !== O && p(d), d = O, !O || O.disabled) return;
    const G = De.pivot, J = O.getBoundingClientRect(), et = (D.clientX - J.left) / J.width, at = (D.clientY - J.top) / J.height, X = 1;
    O.classList.add("mvPv", "mvMoving", "mvLit"), O.style.setProperty("--pv-persp", G.persp / is(Math.max(O.offsetWidth, O.offsetHeight)) + "px"), O.style.setProperty("--ry", (X * (et - 0.5) * 2 * G.tilt * is(O.offsetWidth)).toFixed(3) + "deg"), O.style.setProperty("--rx", (X * -(at - 0.5) * 2 * G.tilt * is(O.offsetHeight)).toFixed(3) + "deg"), O.style.setProperty("--mx", (et * 100).toFixed(1) + "%"), O.style.setProperty("--my", (at * 100).toFixed(1) + "%"), O._down || O.style.setProperty("--sc", Hl(O, G.lift));
  }, { passive: !0 }), n.addEventListener("pointerout", (D) => {
    d && !d.contains(D.relatedTarget) && (p(d), d = null);
  }), n.addEventListener("pointerdown", (D) => {
    var G, J;
    const O = We() ? null : (J = (G = D.target).closest) == null ? void 0 : J.call(G, Pl);
    O && (O._down = !0, O.classList.add("mvPv"), O.classList.remove("mvMoving"), O.style.setProperty("--sc", Hl(O, De.pivot.press)));
  }), n.addEventListener("pointerup", (D) => {
    var G, J;
    const O = (J = (G = D.target).closest) == null ? void 0 : J.call(G, Pl);
    O && (O._down = !1, O.style.setProperty("--sc", D.pointerType === "touch" ? 1 : Hl(O, De.pivot.lift)));
  });
  let g = null;
  n.addEventListener("pointerover", (D) => {
    var O, G, J;
    D.pointerType !== "touch" && ((J = (G = (O = D.target).closest) == null ? void 0 : G.call(O, ".tfBar")) == null || J.classList.add("mvHover"));
  }), n.addEventListener("pointerout", (D) => {
    var G, J;
    const O = (J = (G = D.target).closest) == null ? void 0 : J.call(G, ".tfBar");
    O && !O.contains(D.relatedTarget) && O !== g && O.classList.remove("mvHover");
  }), n.addEventListener("pointerdown", (D) => {
    var G, J;
    const O = (J = (G = D.target).closest) == null ? void 0 : J.call(G, ".tfBar");
    O && (g = O, O.classList.add("mvHold"));
  });
  const y = (D) => {
    if (!g) return;
    g.classList.remove("mvHold");
    const O = g.getBoundingClientRect();
    (D.pointerType === "touch" || D.clientX < O.left || D.clientX > O.right || D.clientY < O.top || D.clientY > O.bottom) && g.classList.remove("mvHover"), g = null;
  };
  window.addEventListener("pointerup", y, !0), window.addEventListener("pointercancel", y, !0), n.addEventListener("focusin", (D) => {
    var O, G;
    (G = (O = D.target).matches) != null && G.call(O, ".tfBar:focus-visible") && D.target.classList.add("mvHover");
  }), n.addEventListener("focusout", (D) => {
    var O;
    (O = D.target.classList) == null || O.remove("mvHover", "mvHold");
  }), n.addEventListener("keydown", (D) => {
    var G, J;
    const O = (J = (G = D.target).closest) == null ? void 0 : J.call(G, ".tfBar");
    !O || !["ArrowRight", "ArrowUp", "ArrowLeft", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(D.key) || (O.classList.add("mvHold"), clearTimeout(O._k), O._k = setTimeout(() => O.classList.remove("mvHold"), 350));
  }), n.addEventListener("click", (D) => {
    var G, J;
    const O = (J = (G = D.target).closest) == null ? void 0 : J.call(G, "button.tfIcon[data-act]");
    O && wm(O);
  });
  let w = null;
  const T = (D, O, G) => {
    D.querySelector(":scope>.mvEdge") || D.insertAdjacentHTML("afterbegin", '<span class="mvEdgeFill" aria-hidden="true"></span><span class="mvEdge" aria-hidden="true"><i></i></span>');
    const J = D.getBoundingClientRect(), et = J.width / 2, at = J.height / 2, X = O.clientX - J.left - et, N = O.clientY - J.top - at, nt = X ? et / Math.abs(X) : 1 / 0, ct = N ? at / Math.abs(N) : 1 / 0, bt = Math.min(Math.max(1 / Math.min(nt, ct), 0), 1);
    let it = Math.atan2(N, X) * 180 / Math.PI + 90;
    it < 0 && (it += 360);
    const K = G ? 100 : bt * 100;
    D.style.setProperty("--edge-proximity", K.toFixed(3)), D.style.setProperty("--cursor-angle", it.toFixed(3) + "deg"), D.classList.toggle("mvLitEdge", G || K >= De.outline.lightAt);
  }, V = (D) => {
    D.classList.remove("mvLitEdge"), D.style.setProperty("--edge-proximity", "0"), D._down = !1;
  }, k = (D) => {
    var G;
    const O = (G = D.closest) == null ? void 0 : G.call(D, mm);
    return O && !i.classList.contains("tfEditing") ? O : null;
  };
  n.addEventListener("pointermove", (D) => {
    if (D.pointerType === "touch") return;
    const O = k(D.target);
    w && w !== O && V(w), w = O, O && !O._down && T(O, D, !1);
  }, { passive: !0 }), n.addEventListener("pointerout", (D) => {
    w && !w.contains(D.relatedTarget) && (V(w), w = null);
  }), n.addEventListener("pointerdown", (D) => {
    const O = k(D.target);
    O && De.outline.press && (O._down = !0, T(O, D, !0));
  }), n.addEventListener("pointerup", (D) => {
    const O = k(D.target);
    O && (O._down = !1, D.pointerType === "touch" ? V(O) : T(O, D, !1));
  }), new MutationObserver((D) => {
    var O;
    for (const G of D) {
      const J = G.target;
      if (G.type === "attributes") {
        (O = J.classList) != null && O.contains("tfMoreBackdrop") && !J.hidden && G.oldValue !== null && zd(J);
        continue;
      }
      G.addedNodes.forEach((et) => {
        et.nodeType === 1 && et.classList.contains("tfMoreBackdrop") && !et.hidden && zd(et);
      });
    }
  }).observe(i, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["hidden"], attributeOldValue: !0 });
}
const Jp = (n) => n.closest("[data-k],.tfMore,.tfMorePair") || n.getRootNode();
function Qp(n, i) {
  const d = [];
  for (let p = n; p && p !== i && p.parentNode; p = p.parentNode) d.unshift([...p.parentNode.children].indexOf(p));
  return d;
}
const tf = (n, i) => i.reduce((d, p) => d == null ? void 0 : d.children[p], n);
function wm(n) {
  var J;
  if (We() || n._warp) return;
  const i = De.warp, d = i.amount / 100, p = n.firstElementChild;
  if (!p) return;
  const g = { squash: { scale: 1 + 0.35 * d + " " + (1 - 0.55 * d) }, pinch: { scale: String(1 - 0.5 * d) }, twist: { rotate: 140 * d + "deg", scale: String(1 - 0.35 * d) }, flip: { rotate: "y 90deg" } }[i.style], y = "blur(" + 2 * d + "px)", w = n.getRootNode(), T = Jp(n), V = (J = T.dataset) == null ? void 0 : J.k, k = Qp(n, T), D = n.getAttribute("aria-pressed") + "|" + n.dataset.act;
  n._warp = 1;
  const O = p.animate([{ scale: "1", rotate: "none", filter: "blur(0px)" }, { ...g, filter: y }], { duration: i.win, easing: Ee.exit, fill: "forwards" }), G = performance.now();
  O.finished.then(() => {
    const et = () => {
      var bt, it;
      const at = V ? T.isConnected ? T : (bt = w.querySelector) == null ? void 0 : bt.call(w, '[data-k="' + CSS.escape(V) + '"]') : T, X = at && tf(at, k);
      if (X === n && n.getAttribute("aria-pressed") + "|" + n.dataset.act === D && performance.now() - G < 420) {
        requestAnimationFrame(et);
        return;
      }
      (((it = X == null ? void 0 : X.matches) != null && it.call(X, "button.tfIcon") ? X : n).firstElementChild || p).animate([{ ...g, filter: y }, { scale: "1", rotate: "none", filter: "blur(0px)" }], { duration: i.wout, easing: Ee[i.ease] }), O.cancel(), n._warp = 0;
    };
    et();
  });
}
const ef = (n) => {
  let i = "M" + n[0][0].toFixed(1) + " " + n[0][1].toFixed(1);
  for (let d = 0; d < n.length - 1; d++) {
    const p = n[d - 1] || n[d], g = n[d], y = n[d + 1], w = n[d + 2] || y, T = [g[0] + (y[0] - p[0]) / 6, g[1] + (y[1] - p[1]) / 6], V = [y[0] - (w[0] - g[0]) / 6, y[1] - (w[1] - g[1]) / 6];
    i += "C" + T.map((k) => k.toFixed(1)).join(" ") + " " + V.map((k) => k.toFixed(1)).join(" ") + " " + y.map((k) => k.toFixed(1)).join(" ");
  }
  return i;
}, af = (n, i, d, p = "mvGrid") => [0, 1, 2].map((g) => {
  const y = (i + (d - i) * g / 2).toFixed(1);
  return '<line class="' + p + '" x1="0" x2="' + n + '" y1="' + y + '" y2="' + y + '"/>';
}).join("");
function of(n, i = n.querySelector(".mvLine"), d = n.querySelectorAll(".mvArea,.mvDot")) {
  if (We() || !(i != null && i.getTotalLength)) return;
  const p = De.graphs, g = i.getTotalLength();
  i.animate([{ strokeDasharray: g, strokeDashoffset: g }, { strokeDasharray: g, strokeDashoffset: 0 }], { duration: p.draw, easing: Ee.standard }), [...d].forEach((y, w) => y.animate([{ opacity: 0 }, { opacity: 1 }], { duration: p.draw * 0.6, delay: p.draw * 0.3 + w * 12, easing: Ee.standard, fill: "backwards" }));
}
function ss(n, i, d, p, g) {
  if (n.getAnimations().forEach((D) => D.cancel()), n.style.left = p + "px", n.style.width = g + "px", We() || i === p && d === g) return;
  const y = De.tabs, w = y.stretch / 100, T = (D, O) => ({ left: D + "px", width: O + "px" }), k = p > i ? T(i + (p - i) * (0.15 * (1 - w)), p + g - (i + (p - i) * (0.15 * (1 - w)))) : T(p, i + d - p - (i - p) * (0.15 * (1 - w)));
  n.animate([T(i, d), { offset: 0.5, ...k }, T(p, g)], { duration: y.dur, easing: Ee.standard });
}
function vm(n) {
  const i = ":is(.themeChoice,.wbSegments,.tfHeightTabs,.hcSeg,.tfSeg)", d = (g) => g.querySelector(':scope>[aria-pressed="true"],:scope>[aria-checked="true"],:scope>.active'), p = (g, y) => y ? [...g.children].indexOf(y) : -1;
  n.addEventListener("click", (g) => {
    var nt, ct, bt;
    const y = (ct = (nt = g.target).closest) == null ? void 0 : ct.call(nt, i + ">button"), w = y == null ? void 0 : y.parentElement;
    if (!w || We() || y.disabled) return;
    const T = d(w);
    if (!T || T === y) return;
    const V = p(w, T), k = w.getBoundingClientRect(), D = T.getBoundingClientRect(), O = getComputedStyle(T).borderRadius, G = w.getRootNode(), J = Jp(w), et = (bt = J.dataset) == null ? void 0 : bt.k, at = Qp(w, J), X = performance.now(), N = () => {
      var U, Ft, q;
      const it = et && !J.isConnected ? (U = G.querySelector) == null ? void 0 : U.call(G, '[data-k="' + CSS.escape(et) + '"]') : J, K = it && tf(it, at), Y = (Ft = K == null ? void 0 : K.matches) != null && Ft.call(K, i) ? d(K) : null;
      if (!Y || p(K, Y) === V) {
        performance.now() - X < 700 && requestAnimationFrame(N);
        return;
      }
      const H = K.getBoundingClientRect(), xt = Y.getBoundingClientRect(), Pt = getComputedStyle(Y);
      (q = K.querySelector(":scope>.mvSegInd")) == null || q.remove();
      const lt = document.createElement("span");
      lt.className = "mvSegInd", lt.style.cssText = "top:" + (xt.top - H.top - K.clientTop) + "px;height:" + xt.height + "px;border-radius:" + O + ";background:" + Pt.backgroundColor + ";box-shadow:" + Pt.boxShadow, getComputedStyle(K).position === "static" && (K.style.position = "relative"), K.prepend(lt), K.classList.add("mvSegMoving"), ss(lt, D.left - k.left - K.clientLeft, D.width, xt.left - H.left - K.clientLeft, xt.width), clearTimeout(K._seg), K._seg = setTimeout(() => {
        lt.remove(), K.classList.remove("mvSegMoving");
      }, De.tabs.dur + 20);
    };
    requestAnimationFrame(N);
  }, !0);
}
const nf = (n) => getComputedStyle(n).placeItems.startsWith("end");
function zd(n) {
  const i = n.firstElementChild;
  if (We() || !i || i.classList.contains("still")) return;
  const d = De.dialog;
  n.animate([{ opacity: 0, backdropFilter: "blur(0px)" }, { opacity: 1, backdropFilter: "blur(" + d.blur + "px)" }], { duration: d.open, easing: Ee.standard }), i.style.animation = "none", i.animate(nf(n) ? [{ transform: "translateY(100%)" }, { transform: "none" }] : [{ opacity: 0, transform: "scale(" + d.from / 100 + ")" }, { opacity: 1, transform: "none" }], { duration: d.open, easing: Ee[d.ease] }), [...(i.classList.contains("tfMorePair") && i.querySelector(".tfMore") || i).children].forEach((g, y) => g.animate([{ opacity: 0 }, { opacity: 1 }], { duration: d.open * 0.6, delay: d.open * 0.35 + y * 40, easing: Ee.standard, fill: "backwards" }));
}
function ym(n, i) {
  const d = n == null ? void 0 : n.firstElementChild;
  if (We() || !d || n.hidden || n._closing) {
    i();
    return;
  }
  const p = De.dialog;
  n._closing = !0, n.style.pointerEvents = "none", n.animate([{ opacity: 1, backdropFilter: "blur(" + p.blur + "px)" }, { opacity: 0, backdropFilter: "blur(0px)" }], { duration: p.close, easing: Ee.exit, fill: "forwards" });
  const g = d.animate(nf(n) ? [{ transform: "none" }, { transform: "translateY(100%)" }] : [{ opacity: 1, transform: "none" }, { opacity: 0, transform: "scale(" + p.from / 100 + ")" }], { duration: p.close, easing: Ee.exit, fill: "forwards" });
  let y = !1;
  const w = () => {
    y || (y = !0, n._closing = !1, n.style.pointerEvents = "", n.getAnimations().forEach((T) => T.cancel()), d.getAnimations().forEach((T) => T.cancel()), i());
  };
  g.finished.then(w, w), setTimeout(w, p.close + 80);
}
const xm = '<span class="mvTick" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M20 6L9 17L4 12" pathLength="1"/></svg></span>';
function km(n, i) {
  n.replaceChildren(), n.insertAdjacentHTML("afterbegin", xm), n.appendChild(Object.assign(document.createElement("span"), { className: "mvToastText", textContent: i }));
}
function Mm(n) {
  if (We()) return;
  const i = De.confirm;
  n.animate([{ opacity: 0, translate: "0 18px" }, { opacity: 1, translate: "0 0" }], { duration: i.dur, easing: Ee.spring });
  const d = n.querySelector(".mvTick path");
  d && i.draw && d.animate([{ strokeDasharray: "1", strokeDashoffset: "1" }, { strokeDasharray: "1", strokeDashoffset: "0" }], { duration: 420, delay: i.dur * 0.5, easing: Ee.standard, fill: "backwards" });
}
const Nl = (n, i, d, p, g = 1) => (n + i * d * g) * Math.pow(p, g);
function Ol(n) {
  const i = De.drag.squash / 100;
  !n || We() || !i || n.animate([{ transform: "scale(" + (1 + i * 0.4) + "," + (1 - i) + ")" }, { transform: "scale(" + (1 - i * 0.1) + "," + (1 + i * 0.24) + ")" }, { transform: "none" }], { duration: 340, easing: "ease-out" });
}
function Gd(n) {
  if (!n || We()) return;
  const i = De.expand;
  [...n.children].slice(1).forEach((d, p) => d.animate([{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "none" }], { duration: 260, delay: i.delay + p * i.stagger, easing: "cubic-bezier(.2,0,0,1)", fill: "backwards" }));
}
const qe = 6e4, ne = 36e5, da = 864e5, Qr = 1440, Sm = 6, _m = 10 * qe, Ud = 3, Cm = 3, Xi = { day: [6, 22], waking: [7, 23], all: [0, 24] }, Am = [[-5, [91, 141, 239]], [5, [79, 195, 230]], [12, [95, 211, 160]], [18, [255, 211, 77]], [24, [255, 159, 67]], [30, [255, 91, 79]]], Tm = "M6.5 18.5h11a4 4 0 0 0 .4-7.98 5.5 5.5 0 0 0-10.6-1.1A4.5 4.5 0 0 0 6.5 18.5Z", Yd = (n, i, d, p) => '<circle cx="' + n + '" cy="' + i + '" r="' + d + '"/><path d="' + [0, 45, 90, 135, 180, 225, 270, 315].map((g) => {
  const y = Math.cos(g * Math.PI / 180), w = Math.sin(g * Math.PI / 180), T = d + 2, V = d + 2 + p;
  return "M" + (n + y * T).toFixed(2) + " " + (i + w * T).toFixed(2) + "L" + (n + y * V).toFixed(2) + " " + (i + w * V).toFixed(2);
}).join("") + '"/>', Po = (n) => '<path d="' + Tm + '"' + (n ? ' transform="' + n + '"' : "") + "/>", Ho = (n) => '<path d="' + n + '"/>', Zd = '<path d="M19.5 14.5A7.5 7.5 0 1 1 9.5 4.5a6 6 0 0 0 10 10Z"/>';
function Lm(n, i) {
  const d = "translate(0,-3)";
  switch (n) {
    case "sunny":
      return i ? Zd : Yd(12, 12, 4, 2.5);
    case "clear-night":
      return Zd;
    case "partlycloudy":
      return (i ? '<path d="M11.5 9.5A4.5 4.5 0 1 1 6 4a3.6 3.6 0 0 0 5.5 5.5Z"/>' : Yd(7.5, 7.5, 2.6, 1.4)) + Po("translate(3.6,3) scale(.85)");
    case "cloudy":
      return Po();
    case "fog":
      return Ho("M4 8.5h16M3 12.5h18M5 16.5h14");
    case "rainy":
      return Po(d) + Ho("M8.5 18.5 7.5 21M12.5 18.5l-1 2.5M16.5 18.5l-1 2.5");
    case "pouring":
      return Po(d) + Ho("M7.5 18.5 6 22M11 18.5 9.5 22M14.5 18.5 13 22M18 18.5 16.5 22");
    case "snowy":
      return Po(d) + Ho("M8 20h.01M12 21.5h.01M16 20h.01");
    case "snowy-rainy":
      return Po(d) + Ho("M8.5 18.5 7.5 21M12 21h.01M16.5 18.5l-1 2.5");
    case "hail":
      return Po(d) + '<circle cx="8" cy="20.5" r="1"/><circle cx="12" cy="21.5" r="1"/><circle cx="16" cy="20.5" r="1"/>';
    case "lightning":
      return Po(d) + Ho("M12.5 16 10.5 19.5h3l-2 3");
    case "lightning-rainy":
      return Po(d) + Ho("M12.5 16 10.5 19.5h3l-2 3M7.5 18.5l-1 2.5M17.5 18.5l-1 2.5");
    case "windy":
    case "windy-variant":
      return Ho("M3 8.5h10.5a2.5 2.5 0 1 0-2.5-2.5M3 12h15.5a2.5 2.5 0 1 1-2.5 2.5M3 15.5h8");
    default:
      return '<circle cx="12" cy="12" r="8"/>' + Ho("M12 8v5M12 16h.01");
  }
}
const Il = (n, i) => '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + Lm(n, i) + "</svg>", Dm = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), Em = 30 * qe, Bm = 7, Rm = 3, Kd = 1, Pm = qe, Hm = 15 * qe, Nm = 5, re = {
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
}, ac = 7, Oo = 256, Om = 3, Xd = 700, Im = 1800, rf = 5 * qe;
let $i = null, $d = 0, Kr = null;
function Fm() {
  return $i && Date.now() - $d < rf ? Promise.resolve($i) : Kr || (Kr = fetch("https://api.rainviewer.com/public/weather-maps.json").then((n) => n.ok ? n.json() : Promise.reject(new Error(String(n.status)))).then((n) => {
    var p, g;
    const i = (((p = n.radar) == null ? void 0 : p.past) || []).slice(-6), d = (((g = n.radar) == null ? void 0 : g.nowcast) || []).slice(0, Om);
    return $i = { host: n.host, frames: [...i.map((y) => ({ ...y, past: !0 })), ...d] }, $d = Date.now(), $i;
  }).finally(() => {
    Kr = null;
  }), Kr);
}
function qm(n, i, d, p) {
  const g = ac, y = 2 ** g, w = n * Math.PI / 180, T = (i + 180) / 360 * y * Oo, V = (1 - Math.log(Math.tan(w) + 1 / Math.cos(w)) / Math.PI) / 2 * y * Oo, k = T - d / 2, D = V - p / 2, O = [];
  for (let G = Math.floor(k / Oo); G <= Math.floor((k + d - 1) / Oo); G++) for (let J = Math.floor(D / Oo); J <= Math.floor((D + p - 1) / Oo); J++)
    J < 0 || J >= y || O.push({ x: (G % y + y) % y, y: J, left: G * Oo - k, top: J * Oo - D });
  return O;
}
const Wm = {
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
}, Vm = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], jm = Object.keys(gt.phases), zm = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)", extreme: "var(--purple-color, #926bc7)" }, Jd = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, sf = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], Ji = 100, Qd = "µg/m³", Gm = "weather_alerts.air_quality_pollen", ps = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], Um = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, Ym = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], Zm = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, Km = { daily: 1, hourly: 2 }, yt = (n) => String(n ?? "").replace(/[&<>"']/g, (i) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[i]), Ke = (n, i) => n.replace(/\{(\w+)\}/g, (d, p) => i[p] ?? ""), Fo = (n) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + n + '"/></svg>', tp = /* @__PURE__ */ new Map();
function lf(n) {
  let i = tp.get(n);
  if (i === void 0) {
    const d = "http://www.w3.org/2000/svg", p = document.createElementNS(d, "svg"), g = document.createElementNS(d, "path");
    p.setAttribute("viewBox", "0 0 24 24"), p.style.cssText = "position:absolute;width:24px;height:24px;visibility:hidden;pointer-events:none", g.setAttribute("d", n), p.append(g), document.body.append(p);
    const y = g.getBBox();
    p.remove();
    const w = Math.max(y.width, y.height), T = w ? 26 * 24 / w : 0, V = T / 24;
    i = w ? "width:" + T.toFixed(2) + "px;height:" + T.toFixed(2) + "px;translate:" + ((12 - y.x - y.width / 2) * V).toFixed(2) + "px " + ((12 - y.y - y.height / 2) * V).toFixed(2) + "px" : "", tp.set(n, i);
  }
  return i ? '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true" style="' + i + '"><path d="' + n + '"/></svg>' : Fo(n);
}
const Xm = () => {
  var n;
  return !!((n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches);
}, fe = (n) => n != null && n !== "" && Number.isFinite(Number(n)), ep = /* @__PURE__ */ new Map(), ap = /* @__PURE__ */ new Map(), Fl = /* @__PURE__ */ new WeakMap(), $m = (n) => {
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
function Qt(n, i, d) {
  const p = Number(n);
  if (Number.isNaN(p)) return String(n);
  const g = (i == null ? void 0 : i.number_format) === "none", y = { maximumFractionDigits: 2, ...d, ...g ? { useGrouping: !1 } : {} }, w = g ? "en-US" : $m(i), T = JSON.stringify([w, y]);
  let V = ep.get(T);
  if (!V) {
    try {
      V = new Intl.NumberFormat(w, y);
    } catch {
      V = new Intl.NumberFormat(void 0, y);
    }
    ep.set(T, V);
  }
  return V.format(p);
}
const nc = (n) => {
  var i;
  return ((i = n == null ? void 0 : n.locale) == null ? void 0 : i.language) || (n == null ? void 0 : n.language) || void 0;
};
function Jm(n) {
  if (!n) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (Fl.has(n)) return Fl.get(n);
  const i = n.time_format, d = i === "language" || i === "system" || !i ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(i === "language" ? n.language : void 0).includes("10") : i === "12";
  return Fl.set(n, d), d;
}
const cf = (n) => {
  var i, d;
  return ((i = n == null ? void 0 : n.locale) == null ? void 0 : i.time_zone) === "server" && ((d = n == null ? void 0 : n.config) != null && d.time_zone) ? n.config.time_zone : void 0;
};
function df(n, i) {
  const d = JSON.stringify([n, i]);
  let p = ap.get(d);
  if (!p) {
    try {
      p = new Intl.DateTimeFormat(n, i);
    } catch {
      p = new Intl.DateTimeFormat(void 0, { ...i, timeZone: void 0 });
    }
    ap.set(d, p);
  }
  return p;
}
const Ge = (n, i) => df(nc(i), { hour: "numeric", minute: "2-digit", hourCycle: Jm(i == null ? void 0 : i.locale) ? "h12" : "h23", timeZone: cf(i) }).format(n), op = (n, i) => df(nc(i), { weekday: "short", timeZone: cf(i) }).format(n), Qm = (n, i) => n.toLocaleDateString(nc(i), { weekday: "narrow" }), be = (n, i) => fe(i) ? Qt(Math.round(Number(i)), n.locale) + "°" : "–", nn = (n) => {
  const i = new Date(n);
  return i.setHours(0, 0, 0, 0), i;
}, sr = (n, i) => n.getFullYear() === i.getFullYear() && n.getMonth() === i.getMonth() && n.getDate() === i.getDate(), oa = Math.PI / 180, t0 = 2440588, e0 = 2451545, fs = oa * 23.4397, a0 = 149598e3, o0 = -0.833 * oa, n0 = 0.133 * oa, np = 5 * qe, pf = (n) => n.getTime() / da - 0.5 + t0 - e0, ff = (n, i) => Math.atan2(Math.sin(n) * Math.cos(fs) - Math.tan(i) * Math.sin(fs), Math.cos(n)), uf = (n, i) => Math.asin(Math.sin(i) * Math.cos(fs) + Math.cos(i) * Math.sin(fs) * Math.sin(n)), r0 = (n, i) => oa * (280.16 + 360.9856235 * n) - i, i0 = (n, i, d) => Math.asin(Math.sin(i) * Math.sin(d) + Math.cos(i) * Math.cos(d) * Math.cos(n));
function hf(n) {
  const i = oa * (357.5291 + 0.98560028 * n), d = oa * (1.9148 * Math.sin(i) + 0.02 * Math.sin(2 * i) + 3e-4 * Math.sin(3 * i)), p = i + d + oa * 102.9372 + Math.PI;
  return { ra: ff(p, 0), dec: uf(p, 0), dist: a0 };
}
function mf(n) {
  const i = oa * (218.316 + 13.176396 * n), d = oa * (134.963 + 13.064993 * n), p = oa * (93.272 + 13.22935 * n), g = i + oa * 6.289 * Math.sin(d), y = oa * 5.128 * Math.sin(p);
  return { ra: ff(g, y), dec: uf(g, y), dist: 385001 - 20905 * Math.cos(d) };
}
const gf = (n, i, d, p) => {
  const g = pf(i), y = n(g);
  return i0(r0(g, oa * -p) - y.ra, oa * d, y.dec);
}, us = (n, i, d) => gf(hf, n, i, d), s0 = (n, i, d) => gf(mf, n, i, d);
function bf(n, i, d, p) {
  const g = {};
  let y = d.getTime(), w = n(d) - i;
  for (let T = y + np; T <= p.getTime(); T += np) {
    const V = n(new Date(T)) - i;
    if (w < 0 != V < 0) {
      const k = new Date(y + (T - y) * w / (w - V));
      V > 0 ? g.rise ?? (g.rise = k) : g.set ?? (g.set = k);
    }
    y = T, w = V;
  }
  return g;
}
const wf = (n) => {
  const i = nn(n);
  return [i, new Date(i.getTime() + da)];
}, l0 = (n, i, d) => bf((p) => us(p, i, d), o0, ...wf(n)), c0 = (n, i, d) => bf((p) => s0(p, i, d), n0, ...wf(n));
function ql(n) {
  const i = pf(n), d = hf(i), p = mf(i), g = Math.acos(Math.sin(d.dec) * Math.sin(p.dec) + Math.cos(d.dec) * Math.cos(p.dec) * Math.cos(d.ra - p.ra)), y = Math.atan2(d.dist * Math.sin(g), p.dist - d.dist * Math.cos(g)), w = Math.atan2(Math.cos(d.dec) * Math.sin(d.ra - p.ra), Math.sin(d.dec) * Math.cos(p.dec) - Math.cos(d.dec) * Math.sin(p.dec) * Math.cos(d.ra - p.ra));
  return { fraction: (1 + Math.cos(y)) / 2, phase: 0.5 + 0.5 * y * (w < 0 ? -1 : 1) / Math.PI };
}
const d0 = (n) => {
  const i = n * 28;
  return i < 0.5 || i > 27.5 ? "new_moon" : i < 6.5 ? "waxing_crescent" : i < 7.5 ? "first_quarter" : i < 13.5 ? "waxing_gibbous" : i < 14.5 ? "full_moon" : i < 20.5 ? "waning_gibbous" : i < 21.5 ? "last_quarter" : "waning_crescent";
}, fr = (n) => {
  const i = n == null ? void 0 : n.config;
  return i && fe(i.latitude) && fe(i.longitude) ? { lat: Number(i.latitude), lon: Number(i.longitude) } : null;
};
function lr(n, i) {
  var k, D, O;
  const d = fr(n), p = d ? l0(i, d.lat, d.lon) : {}, g = (k = n == null ? void 0 : n.states) == null ? void 0 : k["sun.sun"], y = nn(i).getTime(), w = (G) => {
    const J = G ? new Date(G) : null;
    return J && Number.isFinite(J.getTime()) && nn(J).getTime() === y ? J : null;
  }, T = w((D = g == null ? void 0 : g.attributes) == null ? void 0 : D.next_rising), V = w((O = g == null ? void 0 : g.attributes) == null ? void 0 : O.next_setting);
  return T && (p.rise = T), V && (p.set = V), p;
}
function p0(n) {
  var p;
  const i = (p = n == null ? void 0 : n.states) == null ? void 0 : p["sun.sun"];
  if ((i == null ? void 0 : i.state) === "below_horizon" || (i == null ? void 0 : i.state) === "above_horizon") return i.state === "below_horizon";
  const d = fr(n);
  return d ? us(/* @__PURE__ */ new Date(), d.lat, d.lon) < 0 : !1;
}
const Pn = (n) => !!n && n.state !== "unavailable" && n.state !== "unknown", ur = (n, i) => {
  var p;
  const d = (p = n.entities) == null ? void 0 : p[i];
  return !d || !d.hidden && !d.entity_category;
}, Be = (n, i, d) => {
  var p, g;
  for (const y of i) {
    const w = (p = n.states) == null ? void 0 : p[y];
    if (!Pn(w)) continue;
    const T = (g = w.attributes) == null ? void 0 : g[d];
    if (T != null && T !== "") return { stateObj: w, value: T };
  }
}, f0 = (n, i) => i.map((d) => {
  var p;
  return (p = n.states) == null ? void 0 : p[d];
}).find(Pn), u0 = (n, i, d) => i.map((p) => {
  var g;
  return (g = n.states) == null ? void 0 : g[p];
}).find((p) => {
  var g;
  return Pn(p) && (((g = p.attributes) == null ? void 0 : g.supported_features) == null || Number(p.attributes.supported_features) & Km[d]);
});
function on(n, i, d) {
  var y, w, T, V;
  const p = ((w = (y = n.config) == null ? void 0 : y.unit_system) == null ? void 0 : w.length) || "", g = (i == null ? void 0 : i.attributes) || {};
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
      return g.temperature_unit || ((V = (T = n.config) == null ? void 0 : T.unit_system) == null ? void 0 : V.temperature) || "";
  }
}
function ls(n, i, d, p) {
  try {
    if (typeof n.formatEntityAttributeValueToParts == "function") {
      const [g, ...y] = n.formatEntityAttributeValueToParts(i, d, p).map((w) => w.value);
      return { number: g, unit: y.join("").trim() };
    }
  } catch {
  }
  return { number: Qt(p, n.locale), unit: on(n, i, d) };
}
function rp(n, i, d, p) {
  try {
    if (typeof n.formatEntityAttributeValue == "function") return n.formatEntityAttributeValue(i, d, p);
  } catch {
  }
  const g = ls(n, i, d, p);
  return (g.number + " " + g.unit).trim();
}
function No(n, i) {
  var p;
  try {
    if (typeof n.formatEntityState == "function") return n.formatEntityState(i);
  } catch {
  }
  const d = (p = i.attributes) == null ? void 0 : p.unit_of_measurement;
  return Wm[i.state] || (d && fe(i.state) ? Qt(i.state, n.locale) + " " + d : i.state);
}
function en(n, i) {
  var d;
  try {
    if (typeof n.formatEntityName == "function") return n.formatEntityName(i, { type: "entity" });
  } catch {
  }
  return ((d = i.attributes) == null ? void 0 : d.friendly_name) || i.entity_id;
}
const ip = (n) => n < 3 ? "low" : n < 6 ? "moderate" : n < 8 ? "high" : n < 11 ? "very_high" : "extreme", Qi = (n) => sf.find(([, i]) => n <= i)[0];
function h0(n, i) {
  if (i === "Beaufort") return Math.round(n);
  const d = i ? Um[i] : void 0;
  if (d === void 0) return;
  const p = Ym.findIndex((g) => n * d < g);
  return p === -1 ? 12 : p;
}
const sp = (n, i) => {
  const d = i ? Zm[i] : void 0;
  return d === void 0 ? void 0 : n * d;
}, lp = (n) => Object.keys(n.states || {}).find((i) => {
  var d, p;
  return i.startsWith("sensor.") && ((p = (d = n.entities) == null ? void 0 : d[i]) == null ? void 0 : p.platform) === "moon";
}), Wl = (n) => Object.values(n.states || {}).filter((i) => {
  var d, p;
  return i.entity_id.startsWith("sensor.") && ((d = i.attributes) == null ? void 0 : d.device_class) === "precipitation" && ["total", "total_increasing"].includes(((p = i.attributes) == null ? void 0 : p.state_class) ?? "") && ur(n, i.entity_id);
}).map((i) => i.entity_id).sort()[0];
function m0(n) {
  var d;
  const i = {};
  for (const [p, g] of Object.entries(((d = n == null ? void 0 : n.core) == null ? void 0 : d.integration) ?? {})) {
    if (g && "integration_type" in g) {
      i[p] = g.categories;
      continue;
    }
    for (const [y, w] of Object.entries((g == null ? void 0 : g.integrations) ?? {})) i[y] = w == null ? void 0 : w.categories;
  }
  return i;
}
const vf = (n, i, d) => {
  var g, y, w;
  const p = (y = (g = n.entities) == null ? void 0 : g[d]) == null ? void 0 : y.platform;
  return !!p && !!((w = i[p]) != null && w.includes(Gm));
};
function g0(n, i) {
  const d = /* @__PURE__ */ new Map();
  return Object.values(n.states || {}).filter((p) => {
    var g;
    return p.entity_id.startsWith("sensor.") && ps.includes(((g = p.attributes) == null ? void 0 : g.device_class) ?? "") && ur(n, p.entity_id) && vf(n, i, p.entity_id);
  }).sort((p, g) => p.entity_id.localeCompare(g.entity_id)).forEach((p) => {
    d.has(p.attributes.device_class) || d.set(p.attributes.device_class, p.entity_id);
  }), ps.map((p) => d.get(p)).filter(Boolean);
}
const b0 = (n, i) => Object.values(n.states || {}).filter((d) => {
  var p, g;
  return d.entity_id.startsWith("sensor.") && ur(n, d.entity_id) && vf(n, i, d.entity_id) && (((g = (p = n.entities) == null ? void 0 : p[d.entity_id]) == null ? void 0 : g.translation_key) ?? d.entity_id).toLowerCase().includes("pollen");
}).map((d) => d.entity_id).sort();
function cp(n, i, d) {
  const p = Math.max(i - n, 1e-6), g = d[d.length - 1], y = d.find((k) => p / k <= 4) ?? g * Math.ceil(p / (4 * g)), w = Math.floor(n / y) * y;
  let T = Math.ceil(i / y) * y;
  T === w && (T = w + y);
  const V = [];
  for (let k = w; k <= T + y / 1e3; k += y) V.push(k);
  return { min: w, max: T, ticks: V };
}
const w0 = (n, i, d) => {
  const p = (w) => [1, 3, 5].map((T) => parseInt(w.slice(T, T + 2), 16)), g = p(n), y = p(i);
  return "rgb(" + g.map((w, T) => Math.round(w + (y[T] - w) * d)).join(", ") + ")";
}, v0 = (n, i, d, p) => {
  const g = d * Math.abs(1 - 2 * p), y = p < 0.5 ? 0 : 1;
  return "M " + n + " " + (i - d) + " A " + d + " " + d + " 0 0 0 " + n + " " + (i + d) + " A " + g + " " + d + " 0 0 " + y + " " + n + " " + (i - d) + " Z";
}, ea = ({ icon: n, name: i, sub: d, visual: p, double: g, backdrop: y, cls: w, zone: T, callouts: V }) => '<div class="wbCard wbSquare' + (g ? " wbDouble" : "") + (y ? " wbHasBackdrop" : "") + (T != null ? " wbZoned" : "") + (w ? " " + w : "") + '">' + (y ? '<div class="wbBackdrop" aria-hidden="true">' + y + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + lf(n) + '</div><div class="wbText"><span class="wbName">' + yt(i) + "</span>" + (d ? '<span class="wbSub">' + yt(d) + "</span>" : "") + "</div></div>" + (T != null ? '<div class="wbZone">' + T + "</div>" + (V != null && V.length ? '<div class="wbCallouts">' + V.slice(0, 3).map((k) => Array.isArray(k) ? '<span class="wbCallout"><span>' + yt(k[0]) + "</span><span>" + yt(k[1]) + "</span></span>" : '<span class="wbCallout wbAdvice"><span>' + yt(k) + "</span></span>").join("") + "</div>" : "") : '<div class="wbVisual">' + p + "</div>") + "</div>", ts = (n) => '<div class="wbZoneM">' + n + "</div>", Pa = (n, i) => '<div class="wbValue"><span class="wbNum">' + yt(n) + "</span>" + (i ? '<span class="wbUnitV">' + yt(i) + "</span>" : "") + "</div>";
function y0(n) {
  const i = n.max - n.min || 1, d = (T) => 100 - (Math.min(n.max, Math.max(n.min, T)) - n.min) / i * 100, p = (T) => T / Qr * 100 + "%", g = (T) => T.map((V) => V.t + "," + d(V.v)).join(" "), y = n.kind === "line" ? n.points : [];
  let w = '<div class="wbDayChart"><div class="wbDcSun">' + n.sun.map((T) => '<span class="wbDcSunMark" style="left:' + p(T.t) + '">' + Fo(T.rise ? re.sunsetUp : re.sunsetDown) + yt(T.label) + "</span>").join("") + "</div>";
  return w += '<div class="wbDcY">' + n.ticks.map((T) => '<span style="top:' + d(T) + '%">' + yt(n.format(T)) + "</span>").join("") + "</div>", w += '<div class="wbDcPlot"><svg viewBox="0 0 ' + Qr + ' 100" preserveAspectRatio="none">' + n.night.map(([T, V]) => '<rect class="wbDcNight" x="' + T + '" y="0" width="' + (V - T) + '" height="100"></rect>').join("") + n.ticks.map((T) => '<line class="wbDcGrid" x1="0" x2="' + Qr + '" y1="' + d(T) + '" y2="' + d(T) + '" vector-effect="non-scaling-stroke"></line>').join("") + n.sun.map((T) => '<line class="wbDcSunLine" x1="' + T.t + '" x2="' + T.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (n.past && n.past.length > 1 ? '<polyline class="wbDcPast" points="' + g(n.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (y.length > 1 ? '<polygon class="wbDcArea" points="' + y[0].t + ",100 " + g(y) + " " + y[y.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + g(y) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (n.now ? '<line class="wbDcNow" x1="' + n.now.t + '" x2="' + n.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (n.kind === "bars" ? n.points.filter((T) => T.v > 0).map((T) => '<i class="wbDcBar" style="left:' + p(T.t + 12) + ";width:" + p(36) + ";height:" + (100 - d(T.v)) + '%"></i>').join("") : "") + (n.now && n.kind === "line" ? '<i class="wbDcDot" style="left:' + p(n.now.t) + ";top:" + d(n.now.v) + '%"></i>' : "") + (n.peak ? '<span class="wbDcPeak" style="left:' + p(n.peak.t) + ";top:" + d(n.peak.v) + '%">' + yt(n.peak.label) + "</span>" : "") + (n.note ? '<span class="wbDcNote">' + yt(n.note) + "</span>" : "") + "</div>", w += '<div class="wbDcX">' + n.hours.map((T) => '<span class="' + (T.minor ? "wbMinor" : "") + '" style="left:' + p(T.t) + '">' + yt(T.label) + "</span>").join("") + "</div></div>", w;
}
function dp(n, i, d = 120, p = 300) {
  const w = n.map((N) => N.value), T = Math.min(...w), V = Math.max(...w), k = V - T || 1, D = (N) => N / (n.length - 1) * p, O = (N) => 18 + (1 - (N - T) / k) * (d - 18 - 18), G = n.map((N, nt) => [D(nt), O(N.value)]), J = G.length > 2 ? ef(G) : "M" + G.map((N) => N[0].toFixed(1) + " " + N[1].toFixed(1)).join("L"), et = w.indexOf(V), at = w.indexOf(T), X = (N) => N === 0 ? "start" : N === n.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 ' + p + " " + d + '" aria-hidden="true">' + af(p, 18, d - 18) + ('<path class="wbArea" d="' + J + "L" + p + " " + (d - 18) + "L0 " + (d - 18) + 'Z"></path>') + '<path class="wbLine" d="' + J + '" vector-effect="non-scaling-stroke"></path><text x="' + D(et) + '" y="' + (O(V) - 6) + '" text-anchor="' + X(et) + '">' + yt(i(V)) + '</text><text x="' + D(at) + '" y="' + (O(T) + 14) + '" text-anchor="' + X(at) + '">' + yt(i(T)) + '</text><text x="0" y="' + d + '" text-anchor="start">' + yt(n[0].label) + '</text><text x="' + p + '" y="' + d + '" text-anchor="end">' + yt(n[n.length - 1].label) + "</text></svg>";
}
function x0(n, i) {
  const y = n.map((O) => O.value).concat([]), w = Math.min(...y) - 2, T = Math.max(...y) + 1, V = T - w || 1, k = 300 / n.length, D = (O) => (1 - (O - w) / V) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + n.map((O, G) => '<rect class="wbBar' + (O.now ? " wbNowBar" : "") + '" x="' + (G * k + k * 0.2) + '" y="' + D(O.value) + '" width="' + k * 0.6 + '" height="' + (104 - D(O.value)) + '" rx="6"></rect><text x="' + (G * k + k / 2) + '" y="120" text-anchor="middle">' + yt(O.label) + "</text>").join("") + "</svg>";
}
const k0 = [
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
], M0 = [[60, 92, 2.2], [72, 98, 1.6], [48, 100, 1.5], [85, 88, 1.8], [38, 92, 1.3], [66, 84, 1.2], [95, 80, 1.3], [25, 40, 1.4], [82, 30, 1.3], [55, 108, 1.2]], pp = [[54.4, 95, 1.8], [44.5, 56.6, 1.5], [33.5, 56.6, 1.1], [23.7, 40.1, 1.1]], S0 = [[30, 62], [48, 48], [72, 60], [96, 82], [86, 112], [30, 108], [16, 86]];
let _0 = 0;
function fp(n, { getHass: i, entityId: d, style: p = "bitmap", motion: g = !0, cards: y, onOpen: w, hoursWindow: T, radarSource: V } = {}) {
  var Dr, Er;
  const k = "wb" + ++_0 + "-", D = document.createElement("div");
  D.className = "wb", D.dataset.style = p;
  const O = document.createElement("div");
  O.className = "wbBento", D.appendChild(O), n.replaceChildren(D);
  const G = document.createElement("div");
  G.className = "wb wbPopup", G.dataset.style = p, G.hidden = !0;
  const J = ["aq_tile", "pollen_tile", "radar_tile"], et = ["current", "hourly", "sun", "pollen_tile", "moon", "uv_index", "aq_tile", "humidity", "pressure", "wind", "visibility", "radar_tile", "compared_to_average", "precipitation", "air_quality"].filter((s) => !y || y.includes(s)), at = { current: "wide", hourly: "wide", compared_to_average: "double" }, X = ["sun", "moon", "uv_index", "aq_tile", "pollen_tile", "humidity", "pressure", "wind"], N = {};
  et.forEach((s) => {
    const h = document.createElement("div");
    h.className = "wbItem", h.dataset.card = s, h.dataset.size = at[s] || "tile", h.hidden = !0, X.includes(s) && (h.dataset.xl = ""), O.appendChild(h), N[s] = { el: h, html: null };
  });
  let nt = !1, ct = null, bt = 0, it = -1, K = !1, Y = null, H = "";
  const xt = "homecore-next-view", Pt = (() => {
    try {
      return localStorage.getItem(xt);
    } catch {
      return null;
    }
  })(), lt = { graph: void 0, range: { preset: "day" }, picking: !1, openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", hourlyView: Pt === "bars" ? "bars" : "strip", aq: void 0 }, U = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let Ft = /* @__PURE__ */ new Date(), q = /* @__PURE__ */ new Date();
  const Q = {}, A = {}, ft = {}, ot = (s) => {
    var h;
    return ((h = ft[s]) == null ? void 0 : h.forecast) ?? [];
  }, st = (s, h) => {
    var m;
    return ft[h] ? (m = s.states) == null ? void 0 : m[ft[h].entityId] : void 0;
  };
  function vt(s) {
    const h = A[s];
    h && (h.unsub.then((m) => {
      typeof m == "function" && m();
    }).catch(() => {
    }), delete A[s]), ft[s] && delete ft[s];
  }
  function ut(s, h, m) {
    var L;
    if (typeof ((L = s.connection) == null ? void 0 : L.subscribeMessage) != "function") return;
    const b = { entityId: m };
    try {
      b.unsub = Promise.resolve(s.connection.subscribeMessage((I) => {
        nt || A[h] !== b || (I != null && I.forecast ? ft[h] = { entityId: m, forecast: I.forecast } : delete ft[h], Je());
      }, { type: "weather/subscribe_forecast", forecast_type: h, entity_id: m }));
    } catch (I) {
      b.unsub = Promise.reject(I);
    }
    b.unsub.catch(() => {
      A[h] === b && delete A[h];
    }), A[h] = b;
  }
  function Mt(s, h) {
    var m;
    for (const b of ["daily", "hourly"]) {
      const L = u0(s, h, b);
      ((m = A[b]) == null ? void 0 : m.entityId) !== (L == null ? void 0 : L.entity_id) && (vt(b), L && ut(s, b, L.entity_id));
    }
  }
  const qt = (s, h, m, b = !1) => s.callWS({
    type: "history/history_during_period",
    start_time: m.toISOString(),
    end_time: (/* @__PURE__ */ new Date()).toISOString(),
    entity_ids: [h],
    minimal_response: b,
    no_attributes: b,
    significant_changes_only: !1
  });
  async function ie(s, h) {
    var z, Z, W;
    const m = Be(s, h, "pressure");
    if (!m) return;
    const b = m.stateObj.entity_id, L = await qt(s, b, new Date(Date.now() - 3 * ne)), I = (W = (Z = (z = L == null ? void 0 : L[b]) == null ? void 0 : z.find(($) => {
      var tt;
      return typeof ((tt = $.a) == null ? void 0 : tt.pressure) == "number";
    })) == null ? void 0 : Z.a) == null ? void 0 : W.pressure;
    U.pressureHistory = typeof I == "number" ? { entityId: b, value: I } : void 0;
  }
  async function pa(s, h) {
    var Z;
    const m = Be(s, h, "temperature");
    if (!m) return;
    const b = m.stateObj.entity_id, L = nn(/* @__PURE__ */ new Date()), I = await qt(s, b, new Date(L.getTime() - Bm * da)), z = /* @__PURE__ */ new Map();
    for (const W of (I == null ? void 0 : I[b]) ?? []) {
      const $ = (Z = W.a) == null ? void 0 : Z.temperature, tt = new Date((W.lc ?? W.lu) * 1e3);
      if (typeof $ != "number" || tt >= L) continue;
      const mt = tt.toDateString();
      z.set(mt, Math.max(z.get(mt) ?? -1 / 0, $));
    }
    U.temperatureHistory = { entityId: b, dailyHighs: [...z.values()], days: [...z.entries()].map(([W, $]) => ({ date: new Date(W), high: $ })) };
  }
  async function na(s) {
    const h = Wl(s);
    if (!h) return;
    const m = await s.callWS({ type: "recorder/statistic_during_period", statistic_id: h, rolling_window: { duration: { hours: 24 } } });
    U.rain = { entityId: h, change: (m == null ? void 0 : m.change) ?? void 0 };
  }
  function fa() {
    const s = i == null ? void 0 : i();
    if (!s || nt || typeof s.callWS != "function") return;
    const h = Ot(s);
    U.lastFetch = Date.now(), [ie(s, h), pa(s, h), na(s)].forEach((m) => m.then(() => Je(), () => {
    }));
  }
  async function $e() {
    const s = i == null ? void 0 : i();
    if (!s) return;
    const h = Be(s, Ot(s), "temperature");
    if (!h) return;
    const m = h.stateObj.entity_id, b = nn(/* @__PURE__ */ new Date());
    try {
      const L = await qt(s, m, b), I = (z) => ((L == null ? void 0 : L[m]) ?? []).map((Z) => {
        var W;
        return { time: Z.lu * 1e3, value: (W = Z.a) == null ? void 0 : W[z] };
      }).filter((Z) => typeof Z.value == "number");
      U.todayHistory = { day: b.toDateString(), fetched: Date.now(), temperature: I("temperature"), humidity: I("humidity") }, Je();
    } catch {
    }
  }
  async function Hn(s) {
    const h = i == null ? void 0 : i();
    if (h)
      try {
        const m = await qt(h, s, new Date(Date.now() - 24 * ne), !0), b = ((m == null ? void 0 : m[s]) ?? []).filter((I) => fe(I.s)), L = Math.max(1, Math.ceil(b.length / 48));
        U.aqHistory = { entityId: s, points: b.filter((I, z) => z % L === 0).map((I) => ({ label: Ge(new Date(I.lu * 1e3), h), value: Number(I.s) })) }, Je();
      } catch {
      }
  }
  function wt(s) {
    U.categories === void 0 && (U.categories = null, Promise.resolve().then(() => s.callWS({ type: "integration/descriptions" })).then((h) => {
      U.categories = m0(h);
    }, () => {
      U.categories = {};
    }).then(() => Je()));
  }
  function Ot(s) {
    var m;
    const h = Object.keys(s.states || {}).filter((b) => b.startsWith("weather.") && ur(s, b)).sort();
    return d && ((m = s.states) != null && m[d]) ? [d, ...h.filter((b) => b !== d)] : h;
  }
  const _e = (s) => U.categories ? { air: g0(s, U.categories), pollen: b0(s, U.categories) } : { air: [], pollen: [] };
  function co(s, h, m, b) {
    if (p === "line") return '<span class="wbWx wbS' + h + ' wbLineIcon" aria-hidden="true">' + Il(s, m || s === "clear-night") + "</span>";
    if (p === "smooth") {
      const L = am(s, h === 90, m, k + "g-" + b);
      return '<span class="wbWx wbS' + h + " wb" + L.k[0].toUpperCase() + L.k.slice(1) + (L.night ? " wbNight" : "") + '" aria-hidden="true">' + L.svg + "</span>";
    }
    return '<span class="wbWx wbS' + h + '" aria-hidden="true"><canvas data-wb-wx="' + yt(Ip(s, m)) + '" data-size="' + h + '"></canvas></span>';
  }
  const rn = () => ot("daily").filter((s) => s.templow != null).slice(0, Sm);
  function ya(s, h) {
    const m = new Date(h.datetime), b = /* @__PURE__ */ new Date();
    return sr(m, b) ? gt.today : sr(m, new Date(b.getTime() + da)) ? gt.tomorrow : op(m, s);
  }
  const we = (s, h, m) => m === 0 ? ya(s, h) : op(new Date(h.datetime), s);
  function ei(s, h) {
    var tt, mt, Rt, St;
    const m = f0(s, h);
    if (!m) return "";
    const b = rn(), L = lt.openDay !== void 0 ? b[lt.openDay] : void 0, I = Be(s, h, "temperature"), z = b[0], Z = z && sr(new Date(z.datetime), /* @__PURE__ */ new Date()), W = ((mt = (tt = s.config) == null ? void 0 : tt.unit_system) == null ? void 0 : mt.temperature) || ((Rt = m.attributes) == null ? void 0 : Rt.temperature_unit) || "";
    let $ = '<div class="wbCard wbWeather' + (L ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (L ? " inert" : "") + '><div class="wbNow">' + (w ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + yt(gt.openPage) + '">' : '<div class="wbCurrent">') + co(m.state, 90, p0(s), "now") + '<div class="wbTempBlock">' + (I && fe(I.value) ? '<div class="wbTemp"><span class="wbDeg">' + yt(Qt(Math.round(Number(I.value)), s.locale)) + '</span><span class="wbUnit">' + yt(W) + "</span></div>" : "") + '<div class="wbPlace">' + yt(((St = s.config) == null ? void 0 : St.location_name) ?? "") + "</div></div>" + (w ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + yt(No(s, m)) + "</div>" + (Z && z.templow != null ? '<div class="wbRange">' + yt(Ke(gt.range, { high: be(s, z.temperature), low: be(s, z.templow) })) + "</div>" : "") + "</div></div>";
    if ($ += hr(s) + Vt(s), b.length) {
      const At = Z && I && fe(I.value) ? be(s, I.value) : "", jt = (Lt, dt, Ht) => Lt === 0 && At ? '<span class="wbAsDay">' + yt(dt) + '</span><span class="wbAsNow">' + yt(Ht) + "</span>" : yt(dt);
      $ += '<div class="wbColumns" role="list">' + b.map((Lt, dt) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + dt + '" data-wb-focus="col-' + dt + '"><span class="wbDay">' + jt(dt, we(s, Lt, dt), gt.now) + "</span>" + co(Lt.condition ?? "cloudy", 60, !1, "col" + dt) + '<span class="wbTemps"><span class="wbHi">' + jt(dt, be(s, Lt.temperature), At) + '</span><span class="wbLo">' + yt(be(s, Lt.templow)) + "</span></span></button>").join("") + "</div>", $ += '<div class="wbHalves" role="list">' + b.map((Lt, dt) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + dt + '" data-wb-focus="half-' + dt + '">' + co(Lt.condition ?? "cloudy", 40, !1, "half" + dt) + '<span class="wbText"><span class="wbName">' + yt(ya(s, Lt)) + '</span><span class="wbSub">' + yt(Ke(gt.highLow, { high: be(s, Lt.temperature), low: be(s, Lt.templow) })) + "</span></span></button>").join("") + "</div>";
    }
    return $ + "</div>" + (L ? oi(s, h, L) : "") + "</div>";
  }
  const xa = {
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
  }, Xt = {
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
  function po(s) {
    const h = Date.now(), m = ot("hourly").filter((mt) => new Date(mt.datetime).getTime() > h - ne).slice(0, 13);
    if (m.length < 2) return "";
    const b = (mt) => Ge(new Date(mt.datetime), s), L = (mt) => xa[mt.condition] || "", I = (mt) => Xt[mt.condition] || mt.condition;
    let z = L(m[0]);
    if (!z) return "";
    let Z = m[0], W = 0;
    for (const mt of m.slice(1))
      W === 2 || I(mt) === I(Z) || !L(mt) || (z += (W ? " and " : ", ") + L(mt) + " from " + b(mt), Z = mt, W++);
    const $ = Number(m[0].temperature), tt = m.filter((mt) => fe(mt.temperature));
    if (fe($) && tt.length) {
      const mt = tt.reduce((St, At) => Number(At.temperature) < Number(St.temperature) ? At : St), Rt = tt.reduce((St, At) => Number(At.temperature) > Number(St.temperature) ? At : St);
      $ - Number(mt.temperature) >= 3 ? z += ", down to " + be(s, mt.temperature) + " by " + b(mt) : Number(Rt.temperature) - $ >= 3 && (z += ", up to " + be(s, Rt.temperature) + " by " + b(Rt));
    }
    return z[0].toUpperCase() + z.slice(1) + ".";
  }
  const hr = (s) => {
    const h = po(s);
    return h ? '<div class="wbSummary"><p class="wbSummaryText">' + yt(h) + "</p></div>" : "";
  };
  function Vt(s) {
    const [h, m] = Xi[T == null ? void 0 : T()] || Xi.day, b = Date.now(), L = ot("hourly").filter((I) => {
      const z = new Date(I.datetime), Z = z.getHours();
      return z.getTime() > b - ne / 2 && Z >= h && Z < m && fe(I.temperature);
    }).slice(0, 4);
    return L.length ? '<div class="wbNextHours" role="list">' + L.map((I, z) => '<div class="wbHour" role="listitem"><span class="wbHourTime">' + yt(Ge(new Date(I.datetime), s)) + "</span>" + co(I.condition ?? "cloudy", 40, I.is_daytime === !1, "hr" + z) + '<span class="wbHourTemp">' + yt(be(s, I.temperature)) + "</span></div>").join("") + "</div>" : "";
  }
  function ua(s) {
    const h = s.getTime(), m = Date.now() - ne;
    return ot("hourly").filter((b) => {
      const L = new Date(b.datetime).getTime();
      return L >= h && L < h + da && L > m;
    });
  }
  function ai(s) {
    if (!s.length) return ["temperature"];
    const h = ["temperature"];
    return s.some((m) => m.precipitation != null || m.precipitation_probability != null) && h.push("precipitation"), s.some((m) => m.humidity != null) && h.push("humidity"), h;
  }
  function oi(s, h, m) {
    const b = nn(new Date(m.datetime)), L = ua(b), I = ai(L), z = I.includes(lt.dayMode) ? lt.dayMode : "temperature", Z = (W) => W === "humidity" ? gt.humidity : gt.modes[W];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + co(m.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + yt(ya(s, m)) + '</span><span class="wbSub">' + yt(Ke(gt.highLow, { high: be(s, m.temperature), low: be(s, m.templow) })) + '</span></div><button class="wbBack" title="' + yt(gt.back) + '" data-wb="close-day" data-wb-focus="back-day">' + Fo(re.back) + "</button></div>" + (I.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + I.map((W) => '<button aria-pressed="' + (W === z) + '" data-wb="day-mode" data-mode="' + W + '" data-wb-focus="day-mode-' + W + '">' + yt(Z(W)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + y0(ka(s, h, b, L, z)) + "</div></div>";
  }
  function ka(s, h, m, b, L) {
    var Si;
    const I = m.getTime(), z = Date.now(), Z = sr(m, /* @__PURE__ */ new Date()), W = (Jt) => (Jt - I) / qe, $ = (Jt) => Ge(new Date(Jt), s), tt = (Jt) => new Date(Jt.datetime).getTime(), mt = [0, 3, 6, 9, 12, 15, 18, 21].map((Jt) => ({ t: Jt * 60, label: $(I + Jt * ne), minor: Jt % 6 !== 0 })), { rise: Rt, set: St } = lr(s, m), At = [], jt = [];
    Rt && (At.push({ t: W(Rt.getTime()), label: $(Rt.getTime()), rise: !0 }), jt.push([0, W(Rt.getTime())])), St && (At.push({ t: W(St.getTime()), label: $(St.getTime()), rise: !1 }), jt.push([W(St.getTime()), Qr]));
    const Lt = fr(s);
    !Rt && !St && Lt && us(new Date(I + da / 2), Lt.lat, Lt.lon) < 0 && jt.push([0, Qr]);
    const dt = Z ? W(z) : void 0, Ht = { hours: mt, sun: At, night: jt };
    if (!b.length && !Z) return { ...Ht, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: gt.noHourly };
    if (L === "precipitation") {
      const Jt = b.some((ra) => ra.precipitation_probability != null), xo = b.map((ra) => ({ t: W(tt(ra)), v: Number((Jt ? ra.precipitation_probability : ra.precipitation) ?? 0) })), ko = on(s, st(s, "hourly"), "precipitation"), gn = Math.max(0, ...xo.map((ra) => ra.v)), Yn = Jt ? 100 : cp(0, Math.max(gn, 1), [0.5, 1, 2, 5, 10]).max, _i = (ra) => Jt ? Qt(ra, s.locale) + "%" : Qt(ra, s.locale, { maximumFractionDigits: 1 }) + " " + ko, bn = xo.find((ra) => ra.v === gn);
      return {
        ...Ht,
        kind: "bars",
        points: xo,
        min: 0,
        max: Yn,
        ticks: [0, Yn / 2, Yn],
        format: _i,
        now: dt !== void 0 ? { t: dt, v: 0 } : void 0,
        peak: bn && gn > 0 ? { t: bn.t + 30, v: bn.v, label: _i(bn.v) } : void 0,
        note: gn > 0 ? void 0 : gt.noRain
      };
    }
    const It = L === "humidity" ? "humidity" : "temperature", ke = b.filter((Jt) => Jt[It] != null && (!Z || tt(Jt) >= z)).map((Jt) => ({ t: W(tt(Jt)), v: Number(Jt[It]) }));
    let _t, oe = [];
    if (dt !== void 0) {
      const Jt = Be(s, h, It);
      Jt && fe(Jt.value) && (_t = { t: dt, v: Number(Jt.value) }, ke.unshift(_t)), oe = (((Si = U.todayHistory) == null ? void 0 : Si.day) === m.toDateString() ? U.todayHistory[It] : []).filter((ko) => ko.time <= z).map((ko) => ({ t: Math.max(0, W(ko.time)), v: ko.value })), _t && oe.length && oe.push(_t);
    }
    const pe = [...oe, ...ke];
    if (!pe.length) return { ...Ht, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: gt.noHourly };
    const ga = pe.map((Jt) => Jt.v), yo = cp(Math.min(...ga), Math.max(...ga), It === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    It === "humidity" && (yo.min = Math.max(0, yo.min), yo.max = Math.min(100, yo.max), yo.ticks = yo.ticks.filter((Jt) => Jt >= 0 && Jt <= 100));
    const Un = It === "humidity" ? (Jt) => Qt(Jt, s.locale) + "%" : (Jt) => be(s, Jt), mn = It === "temperature" ? pe.reduce((Jt, xo) => xo.v > Jt.v ? xo : Jt) : void 0;
    return { ...Ht, kind: "line", points: ke, past: oe, ...yo, format: Un, now: _t, peak: mn ? { ...mn, label: Un(mn.v) } : void 0 };
  }
  function xe(s) {
    const h = ["temperature"];
    return s.some((m) => m.precipitation_probability != null || m.precipitation != null) && h.push("precipitation"), s.some((m) => m.wind_speed != null) && h.push("wind"), h;
  }
  function ni(s, h, m = Ud) {
    var I, z;
    const b = ot("daily"), L = [];
    for (let Z = 0; Z < m; Z++) for (const W of [!1, !0]) {
      const $ = s.getTime() + (Z * 24 + (W ? 12 : 0)) * ne, tt = $ + 12 * ne, mt = {};
      h.forEach((St) => {
        const At = new Date(St.datetime).getTime();
        St.condition && At >= $ && At < tt && (mt[St.condition] = (mt[St.condition] ?? 0) + (Dm.has(St.condition) ? 2 : 1));
      });
      let Rt = (I = Object.entries(mt).sort((St, At) => At[1] - St[1])[0]) == null ? void 0 : I[0];
      if (!Rt) {
        const St = new Date($).toDateString();
        Rt = ((z = b.find((At) => new Date(At.datetime).toDateString() === St)) == null ? void 0 : z.condition) ?? "cloudy";
      }
      L.push({ cond: W && Rt === "sunny" ? "clear-night" : Rt, night: W });
    }
    return L;
  }
  function sn(s, h, m) {
    const b = st(s, "hourly"), L = h.precipitation_probability != null ? Qt(h.precipitation_probability, s.locale) + "%" : "", I = h.precipitation ? Qt(h.precipitation, s.locale) + " " + on(s, b, "precipitation") : "";
    switch (m) {
      case "precipitation":
        return L ? [L, I] : [I || "–", ""];
      case "wind":
        return h.wind_speed != null ? [Qt(Math.round(h.wind_speed), s.locale), on(s, b, "wind_speed")] : ["–", ""];
      default:
        return [be(s, h.temperature), (h.precipitation_probability ?? 0) >= 20 ? L : ""];
    }
  }
  function ri(s, h, m) {
    const [b, L] = Xi[T == null ? void 0 : T()] || Xi.day, I = [];
    for (let z = 0; z < 4 && I.length < 3; z++) {
      const Z = /* @__PURE__ */ new Date();
      Z.setHours(0, 0, 0, 0), Z.setDate(Z.getDate() + z);
      const W = new Date(Z);
      W.setHours(L, 0, 0, 0), Z.setHours(b, 0, 0, 0), !(W.getTime() <= m || !h.some(($) => {
        const tt = new Date($.datetime).getTime();
        return tt >= Z.getTime() && tt <= W.getTime();
      })) && I.push({ a: Z.getTime(), b: W.getTime(), label: ya(s, { datetime: Z.toISOString() }) });
    }
    return I;
  }
  function mr(s, h, m, b, L, I) {
    const z = (m.b - h.a) / ne, Z = (dt) => ((dt - h.a) / ne).toFixed(3), W = 80, $ = 32, tt = [];
    for (const dt = new Date(h.a - da); dt.getTime() < m.b + da; dt.setDate(dt.getDate() + 1)) {
      const { rise: Ht, set: It } = lr(s, new Date(dt));
      Ht && It && tt.push({ rise: Ht.getTime(), set: It.getTime() });
    }
    const mt = (dt, Ht) => W - (W - $) * Math.sin(Math.PI * (Ht - dt.rise) / (dt.set - dt.rise)), Rt = (dt) => !tt.some((Ht) => dt >= Ht.rise && dt <= Ht.set);
    let St = "", At = "", jt = "";
    tt.forEach((dt, Ht) => {
      const It = [];
      for (let _t = dt.rise; _t <= dt.set; _t += 15 * qe) It.push(Z(_t) + "," + mt(dt, _t).toFixed(2));
      It.push(Z(dt.set) + "," + W), St += '<polyline class="wbLineArc" points="' + It.join(" ") + '"/>';
      const ke = tt[Ht + 1];
      ke && (St += '<rect class="wbLineNight" x="' + Z(dt.set) + '" y="0" width="' + ((ke.rise - dt.set) / ne).toFixed(3) + '" height="100"/>'), [[dt.rise, "↑"], [dt.set, "↓"]].forEach(([_t, oe]) => {
        _t < h.a || _t > m.b || (At += '<line class="wbLineEdge" x1="' + Z(_t) + '" x2="' + Z(_t) + '" y1="0" y2="100"/>', jt += '<span class="wbLineTime" style="left:' + I(_t) + '">' + oe + " " + yt(Ge(new Date(_t), s)) + "</span>");
      });
    });
    const Lt = tt.find((dt) => L >= dt.rise && L <= dt.set);
    return '<svg class="wbLineArt" viewBox="0 0 ' + z + ' 100" preserveAspectRatio="none" aria-hidden="true">' + St + At + '<line class="wbLineHorizon" x1="0" x2="' + z + '" y1="' + W + '" y2="' + W + '"/></svg>' + jt + (Lt ? '<span class="wbLineNow" style="left:' + I(L) + ";top:" + mt(Lt, L) + '%">' + Il("sunny", !1) + "</span>" : "") + b.filter((dt) => dt.entry && !dt.now).map((dt) => '<span class="wbLineGlyph' + dt.edge + '" style="left:' + I(dt.t) + '">' + Il(dt.entry.condition ?? "cloudy", Rt(dt.t)) + "</span>").join("");
  }
  function ii(s, h) {
    delete Q.hourly;
    const m = lt.hourlyView === "bars" ? "bars" : "strip", b = '<div class="wbHeader"><h2 class="wbTitle">' + yt(m === "bars" ? gt.nextDays : gt.nextHours) + '</h2><div class="wbSegments wbViews" role="group" aria-label="' + yt(gt.showAs) + '">' + ["strip", "bars"].map((_t) => '<button aria-pressed="' + (_t === m) + '" data-wb="hourly-view" data-view="' + _t + '" data-wb-focus="hourly-view-' + _t + '">' + yt(gt.views[_t]) + "</button>").join("") + "</div></div>";
    if (m === "bars") return hs(s, h, b);
    const L = ot("hourly"), I = Math.floor(Date.now() / qe) * qe, z = L.filter((_t) => new Date(_t.datetime).getTime() > I - ne);
    if (!z.length) return "";
    const Z = xe(z), W = Z.includes(lt.hourlyMode) ? lt.hourlyMode : "temperature", $ = ri(s, L, I);
    if (!$.length) return "";
    const tt = $[0], mt = $[$.length - 1], Rt = (tt.b - tt.a) / ne, St = (_t) => "calc(var(--wb-u) * " + ((_t - tt.a) / ne).toFixed(3) + ")", At = new Date(tt.a);
    At.setHours(6, 0, 0, 0), At.getTime() > tt.a && At.setDate(At.getDate() - 1);
    const jt = Math.ceil((mt.b - At.getTime()) / da);
    p !== "line" && (Q.hourly = { segs: ni(At, L, jt), seed: At.getDate(), columns: jt });
    const Lt = (_t) => _t === tt.a ? " wbFirst" : _t === mt.b ? " wbLast" : "", dt = [];
    for (let _t = tt.a; _t < mt.b; ) {
      const oe = new Date(_t);
      oe.setHours(24, 0, 0, 0);
      const pe = Math.min(oe.getTime(), mt.b);
      dt.push({ a: _t, b: pe, label: ya(s, { datetime: new Date(_t).toISOString() }), page: $.find((ga) => ga.a >= _t && ga.a < pe) || $.find((ga) => ga.a < pe && ga.b > _t) }), _t = pe;
    }
    const Ht = I > tt.a && I < mt.b ? Math.floor((I - tt.a) / (2 * ne)) * 2 : 0, It = [];
    for (let _t = tt.a; _t <= mt.b; _t += ne) {
      const oe = new Date(_t), pe = Lt(_t);
      !pe && oe.getHours() % Cm || !pe && (Math.abs(tt.a - _t) < 2 * ne || Math.abs(mt.b - _t) < 2 * ne) || I >= tt.a && Math.abs(_t - I) < 1.5 * ne && !pe || It.push({ t: _t, edge: pe, label: Ge(oe, s), entry: _t >= I - ne ? L.find((ga) => new Date(ga.datetime).getTime() === _t) : void 0 });
    }
    I > tt.a && I < tt.b && It.push({ t: I, edge: I - tt.a < ne ? " wbFirst" : tt.b - I < ne ? " wbLast" : "", label: gt.now, entry: z[0], now: !0 });
    const ke = (_t, oe) => '<span class="wbMark' + _t.edge + (_t.now ? " wbNowMark" : "") + '" style="left:' + St(_t.t) + '">' + oe + "</span>";
    return '<div class="wbCard wbHc wbHourly">' + b + (Z.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + Z.map((_t) => '<button aria-pressed="' + (_t === W) + '" data-wb="hourly-mode" data-mode="' + _t + '" data-wb-focus="hourly-mode-' + _t + '">' + yt(gt.modes[_t]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll wbPaged" tabindex="0" aria-label="' + yt(gt.nextHours) + '" data-span="' + Rt + '" data-start="' + Ht + '"><div class="wbStrip" style="--wb-u:calc(100cqw / ' + Rt + ");width:calc(var(--wb-u) * " + (mt.b - tt.a) / ne + ')">' + // a stop every two hours (Matt, 1 Nov): a swipe settles on one, a flick runs on past several
    [...Array(Math.floor((mt.b - tt.a) / (2 * ne)) + 1)].map((_t, oe) => '<i class="wbSnap" style="left:' + St(tt.a + oe * 2 * ne) + '"></i>').join("") + '<div class="wbDays">' + dt.map((_t, oe) => {
      var pe;
      return '<span class="wbDaySpan" style="width:calc(var(--wb-u) * ' + ((_t.b - _t.a) / ne).toFixed(3) + ')"><button class="wbDayName" data-wb="hours-day" data-hours="' + (oe === 0 ? Ht : ((((pe = _t.page) == null ? void 0 : pe.a) ?? _t.a) - tt.a) / ne) + '" data-wb-focus="hours-day-' + oe + '">' + yt(_t.label) + "</button></span>";
    }).join("") + '</div><div class="wbRow wbTimes">' + It.map((_t) => ke(_t, yt(_t.label))).join("") + "</div>" + (p === "line" ? '<div class="wbSky wbLineSky">' + mr(s, tt, mt, It, I, St) : '<div class="wbSky"><div class="wbSkyArt" style="left:' + St(At.getTime()) + ";width:calc(var(--wb-u) * " + jt * 24 + ')"><canvas data-wb-strip="hourly"' + (p === "smooth" ? "" : ' class="wbPixels"') + "></canvas></div>") + (I > tt.a ? '<i class="wbPast" style="width:' + St(Math.min(I, mt.b)) + '"></i><i class="wbNowLine" style="left:' + St(I) + '"></i>' : "") + dt.slice(1).map((_t) => '<i class="wbMidnight" style="left:' + St(_t.a) + '"></i>').join("") + '</div><div class="wbRow wbValues">' + It.map((_t) => {
      if (!_t.entry) return "";
      const [oe, pe] = sn(s, _t.entry, W);
      return ke(_t, '<span class="wbPrimaryV">' + yt(oe) + '</span><span class="wbSecondary">' + yt(pe) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function jo(s) {
    const h = Am, m = h.findIndex(([W]) => W >= s);
    if (m <= 0) return "rgb(" + h[m < 0 ? h.length - 1 : 0][1].join(",") + ")";
    const [b, L] = h[m - 1], [I, z] = h[m], Z = (s - b) / (I - b);
    return "rgb(" + L.map((W, $) => Math.round(W + (z[$] - W) * Z)).join(",") + ")";
  }
  function hs(s, h, m) {
    var St;
    const b = ot("daily").filter((At) => fe(At.templow) && fe(At.temperature)).slice(0, 7);
    if (!b.length) return "";
    const L = Math.min(...b.map((At) => Number(At.templow))), I = Math.max(...b.map((At) => Number(At.temperature))), z = Math.max(1, I - L), Z = (At) => Math.max(0, Math.min(100, (At - L) / z * 100)).toFixed(2), W = /F/.test(on(s, st(s, "daily"), "temperature")), $ = (At) => W ? (At - 32) / 1.8 : At, tt = "linear-gradient(90deg," + [0, 0.25, 0.5, 0.75, 1].map((At) => jo($(L + At * z)) + " " + At * 100 + "%").join(",") + ")", mt = (St = Be(s, h, "temperature")) == null ? void 0 : St.value;
    return '<div class="wbCard wbHc wbHourly wbBars' + (xe(ot("hourly").filter((At) => new Date(At.datetime).getTime() > Date.now() - ne)).length > 1 ? " wbTabbed" : "") + '">' + m + '<div class="wbDayBars" role="list">' + b.map((At, jt) => {
      const Lt = ya(s, At), dt = sr(new Date(At.datetime), /* @__PURE__ */ new Date()), Ht = Number(At.templow), It = Number(At.temperature);
      return '<div class="wbDayBar" role="listitem" aria-label="' + yt(Ke(gt.rangeRow, { day: Lt, low: be(s, Ht), high: be(s, It) })) + '"><span class="wbRangeDay">' + yt(Lt) + "</span>" + co(At.condition, 40, !1, "r" + jt) + '<span class="wbRangeLo">' + yt(be(s, Ht)) + '</span><span class="wbRangeTrack"><i class="wbRangeFill" style="background:' + tt + ";clip-path:inset(0 " + (100 - Z(It)) + "% 0 " + Z(Ht) + '% round 4px)"></i>' + (dt && fe(mt) ? '<i class="wbRangeNow" style="left:' + Z(Number(mt)) + '%"></i>' : "") + '</span><span class="wbRangeHi">' + yt(be(s, It)) + "</span></div>";
    }).join("") + "</div></div>";
  }
  const Ia = [[-120, "#0d1530"], [-60, "#1c2550"], [-15, "#c9707a"], [30, "#f2a46a"], [60, "#b49bc8"], [90, "#5aa5e6"]], Ce = [[-90, "#5aa5e6"], [-60, "#a99bd0"], [-30, "#f0a54a"], [15, "#c45a5a"], [60, "#3a2a5c"], [120, "#0d1530"]], Nn = (s, h) => {
    if (h <= s[0][0]) return s[0][1];
    for (let m = 1; m < s.length; m++) if (h <= s[m][0]) {
      const [b, L] = s[m - 1], [I, z] = s[m];
      return w0(L, z, (h - b) / (I - b));
    }
    return s[s.length - 1][1];
  }, si = (s, h, m) => {
    if (!h || !m) return Ia[5][1];
    const b = (s.getTime() - m.getTime()) / qe;
    return b >= -90 ? Nn(Ce, b) : Nn(Ia, (s.getTime() - h.getTime()) / qe);
  }, gr = (s) => (s >= 60 ? Math.floor(s / 60) + "h " : "") + s % 60 + "m";
  function ms(s) {
    const h = Ft, { rise: m, set: b } = lr(s, h), L = m && b ? Math.round((b.getTime() - m.getTime()) / qe) : 0, I = Math.floor(L / 60), z = L % 60, Z = (ke) => ke ? Ge(ke, s) : "–", W = new Date(h);
    W.setDate(W.getDate() + 1);
    const $ = lr(s, W), tt = $.rise && $.set ? Math.round(($.set.getTime() - $.rise.getTime()) / qe) : 0, mt = new Date(h);
    mt.setDate(mt.getDate() - 1);
    const Rt = !!(m && b && h >= m && h <= b), St = !!(m && h < m), At = Rt ? m : St ? lr(s, mt).set : b, jt = Rt ? b : St ? m : $.rise, Lt = At && jt ? Math.min(1, Math.max(0, (h.getTime() - At.getTime()) / (jt.getTime() - At.getTime()))) : 0, dt = jt ? Math.max(0, Math.round((jt.getTime() - h.getTime()) / qe)) : 0, Ht = jt ? gr(dt) : "–", It = Rt ? gt.untilSunset : gt.untilSunrise;
    return ea({
      icon: re.sunny,
      name: gt.sun,
      sub: L ? Ke(gt.daylightShort, { hours: I, minutes: z }) : void 0,
      cls: "wbSunTile",
      callouts: [[gt.callout.riseTomorrow, Z($.rise)], [gt.callout.setTomorrow, Z($.set)], ...tt ? [[gt.callout.dayTomorrow, Math.floor(tt / 60) + "h " + tt % 60 + "m"]] : []],
      zone: '<div class="wbSunZone" style="background:' + si(h, m, b) + '"><svg class="wbSunTrack" data-up="' + (Rt ? 1 : 0) + '" data-f="' + Lt.toFixed(4) + '" aria-hidden="true"></svg><div class="wbSunCount"><span class="wbSunLeft">' + yt(Ht) + '</span><span class="wbSunWord">' + yt(It) + '</span></div><span class="wbSunAt wbSunRise">' + yt(Z(m)) + '</span><span class="wbSunAt wbSunSet">' + yt(Z(b)) + "</span></div>" + // at M, the countdown alone (Matt, 10 Nov): M's zone has room for one line
      ts(Pa(Ht, ""))
    });
  }
  const li = 22;
  function zt(s) {
    const h = Math.round(s.clientWidth), m = Math.round(s.clientHeight), b = li, L = b / 2, I = h + "x" + m + ":" + s.dataset.f + ":" + s.dataset.up;
    if (h < b * 3 || m < b * 3 || s.dataset.drawn === I) return;
    s.dataset.drawn = I;
    const z = "M" + L + " " + (m - b) + "V" + b + "A" + L + " " + L + " 0 0 1 " + b + " " + L + "H" + (h - b) + "A" + L + " " + L + " 0 0 1 " + (h - L) + " " + b + "V" + (m - b), Z = "M" + (h - L) + " " + (m - b) + "A" + L + " " + L + " 0 0 1 " + (h - b) + " " + (m - L) + "H" + b + "A" + L + " " + L + " 0 0 1 " + L + " " + (m - b), W = 16, $ = 6, tt = "M" + W + " 0H" + (h - W) + "A" + W + " " + W + " 0 0 1 " + h + " " + W + "V" + (m - W) + "A" + W + " " + W + " 0 0 1 " + (h - W) + " " + m + "H" + W + "A" + W + " " + W + " 0 0 1 0 " + (m - W) + "V" + W + "A" + W + " " + W + " 0 0 1 " + W + " 0ZM" + (b + $) + " " + b + "A" + $ + " " + $ + " 0 0 0 " + b + " " + (b + $) + "V" + (m - b - $) + "A" + $ + " " + $ + " 0 0 0 " + (b + $) + " " + (m - b) + "H" + (h - b - $) + "A" + $ + " " + $ + " 0 0 0 " + (h - b) + " " + (m - b - $) + "V" + (b + $) + "A" + $ + " " + $ + " 0 0 0 " + (h - b - $) + " " + b + "Z", mt = s.dataset.up === "1", Rt = Number(s.dataset.f) || 0, St = "http://www.w3.org/2000/svg";
    s.setAttribute("viewBox", "0 0 " + h + " " + m);
    const At = document.createElementNS(St, "path");
    At.setAttribute("d", mt ? z : Z), s.replaceChildren(At);
    const jt = At.getTotalLength(), Lt = At.getPointAtLength(jt * Rt), dt = mt ? jt : 0;
    s.innerHTML = '<defs><mask id="' + k + 'sun-day"><path d="' + z + '" fill="none" stroke="#fff" stroke-width="' + b * 2 + '"></path></mask><mask id="' + k + 'sun-done"><path d="' + z + '" fill="none" stroke="#fff" stroke-width="' + b * 2 + '" stroke-dasharray="' + (mt ? (dt * Rt).toFixed(1) + " " + (dt + 1).toFixed(1) : "0 99999") + '"></path></mask></defs><path class="wbSunBand" fill-rule="evenodd" d="' + tt + '"></path><path class="wbSunBand wbSunDay" fill-rule="evenodd" d="' + tt + '" mask="url(#' + k + 'sun-day)"></path><path class="wbSunBand wbSunDone" fill-rule="evenodd" d="' + tt + '" mask="url(#' + k + 'sun-done)"></path><circle class="wbSunDot' + (mt ? "" : " wbSunNight") + '" cx="' + Lt.x.toFixed(1) + '" cy="' + Lt.y.toFixed(1) + '" r="' + L + '"></circle>';
  }
  const ht = typeof ResizeObserver == "function" ? new ResizeObserver((s) => s.forEach((h) => zt(h.target))) : null;
  function ue() {
    ht == null || ht.disconnect(), D.querySelectorAll("svg.wbSunTrack").forEach((s) => {
      zt(s), ht == null || ht.observe(s);
    });
  }
  function Wt(s, h, m) {
    const b = (z) => k + "moon-" + z, L = s > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + b("terminator") + ')" d="' + v0(61, 61, 57.9, s) + '"' + (h ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", I = (z, Z, W, $, tt, mt) => '<filter id="' + b(z) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + Z + '" numOctaves="' + W + '" seed="' + $ + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((Rt) => "<feFunc" + Rt + ' type="linear" slope="' + tt + '" intercept="' + mt + '"></feFunc' + Rt + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + b("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + b("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + b("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + b("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + b("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + I("mottle", "0.045", 4, 3, 1.8, -0.4) + I("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + b("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + b("fill") + ')"></circle><g' + (m ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + b("soften") + ')">' + k0.map(([z, Z, W, $, tt, mt]) => '<ellipse cx="' + z + '" cy="' + Z + '" rx="' + W + '" ry="' + $ + '" fill-opacity="' + mt + '" transform="rotate(' + tt + " " + z + " " + Z + ')"></ellipse>').join("") + "</g>" + M0.map(([z, Z, W]) => '<circle class="wbCrater" cx="' + z + '" cy="' + Z + '" r="' + W + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + b("glow") + ')">' + S0.map(([z, Z]) => '<line x1="54.4" y1="95" x2="' + z + '" y2="' + Z + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + b("glow") + ')">' + pp.map(([z, Z, W]) => '<circle cx="' + z + '" cy="' + Z + '" r="' + W * 2 + '"></circle>').join("") + "</g>" + pp.map(([z, Z, W]) => '<circle class="wbBrightCenter" cx="' + z + '" cy="' + Z + '" r="' + W + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + b("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + b("grain") + ')"></rect>' + L + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function Re(s) {
    const h = q, m = fr(s), b = (m == null ? void 0 : m.lat) ?? 0, L = ql(h), I = lp(s), z = I ? s.states[I] : void 0, Z = Pn(z) && jm.includes(z.state) ? z.state : d0(L.phase), { rise: W, set: $ } = m ? c0(h, m.lat, m.lon) : {}, tt = L.phase > 0.5 != b < 0, mt = Qt(Math.round(L.fraction * 100), s.locale) + "%", Rt = W ?? $;
    return Rt && Ge(Rt, s), ea({
      icon: re.night,
      name: gt.moon,
      sub: gt.phases[Z],
      callouts: [...W ? [[gt.callout.moonrise, Ge(W, s)]] : [], ...$ ? [[gt.callout.moonset, Ge($, s)]] : [], [gt.callout.lit, mt]],
      // at M, how much of it is lit (Matt, 10 Nov)
      zone: '<div class="wbMoonBox">' + Wt(L.fraction, tt, b < 0) + "</div>" + ts(Pa(Qt(Math.round(L.fraction * 100), s.locale), "%"))
    });
  }
  function fo(s, h) {
    var At;
    const m = Be(s, h, "wind_speed");
    if (!m || !fe(m.value)) return "";
    const b = Be(s, h, "wind_gust_speed"), L = Be(s, h, "wind_bearing"), I = L && fe(L.value) ? Number(L.value) : void 0, z = h0(Number(m.value), (At = m.stateObj.attributes) == null ? void 0 : At.wind_speed_unit), Z = ls(s, m.stateObj, "wind_speed", m.value), W = I !== void 0 ? gt.cardinal[Vm[((I + 11.25) / 22.5 | 0) % 16]] : void 0, $ = b ? rp(s, b.stateObj, "wind_gust_speed", b.value) : void 0, tt = [W ? Ke(gt.windFrom, { direction: W }) : void 0, z !== void 0 ? z + " " + gt.beaufort : void 0].filter(Boolean).join(" · ") || $, mt = (jt, Lt) => {
      const dt = (jt - 90) * Math.PI / 180;
      return [100 + Lt * Math.cos(dt), 100 + Lt * Math.sin(dt)];
    }, Rt = Array.from({ length: 36 }, (jt, Lt) => Lt * 10).map((jt) => {
      const Lt = jt % 90 === 0, [dt, Ht] = mt(jt, 97), [It, ke] = mt(jt, Lt ? 83 : 89);
      return '<line class="wbTick' + (Lt ? " wbMajor" : "") + '" x1="' + dt + '" y1="' + Ht + '" x2="' + It + '" y2="' + ke + '"></line>';
    }).join(""), St = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([jt, Lt]) => {
      const [dt, Ht] = mt(Lt, 64);
      return '<text class="wbLetter' + (jt === "n" ? " wbNorth" : "") + '" x="' + dt + '" y="' + Ht + '">' + yt(gt.cardinal[jt]) + "</text>";
    }).join("");
    return ea({ icon: re.windy, name: gt.wind, sub: tt, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + Rt + St + (I !== void 0 ? '<path class="wbMarker" transform="rotate(' + I + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + yt(Z.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + yt(Z.unit) + "</text></svg>" });
  }
  const br = (s, h) => {
    if (s < 3) return gt.advice.fine;
    if (s < 8) return gt.advice.sunblock;
    const m = Date.now(), b = ot("hourly").find((L) => L.uv_index != null && new Date(L.datetime).getTime() > m && L.uv_index < 6);
    return b && new Date(b.datetime).toDateString() === (/* @__PURE__ */ new Date()).toDateString() ? Ke(gt.advice.avoidUntil, { time: Ge(new Date(b.datetime), h) }) : gt.advice.avoidToday;
  };
  function gs(s, h) {
    const m = Be(s, h, "uv_index");
    if (!m || !fe(m.value)) return "";
    const b = Number(m.value), L = gt.uvLevel[ip(b)], I = /* @__PURE__ */ new Date();
    I.setHours(23, 59, 59, 999);
    const z = ot("hourly").filter((tt) => tt.uv_index != null && new Date(tt.datetime) > /* @__PURE__ */ new Date() && new Date(tt.datetime) <= I).reduce((tt, mt) => !tt || mt.uv_index > tt.uv ? { uv: mt.uv_index, time: new Date(mt.datetime) } : tt, void 0), Z = zm[ip(b)], W = 216 * Math.min(1, Math.max(0.08, 0.4 + (b - 4.5) * (0.5 / 5.5))), $ = '<svg class="wbUvArt" viewBox="0 0 216 198" preserveAspectRatio="xMinYMin slice" aria-hidden="true"><defs><radialGradient id="' + k + 'uv-sun" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="' + W.toFixed(1) + '"><stop offset="0" style="stop-color:color-mix(in srgb, ' + Z + ' 28%, #fff6dd)"></stop><stop offset=".62" style="stop-color:color-mix(in srgb, ' + Z + ' 62%, #fff6dd)"></stop><stop offset="1" style="stop-color:' + Z + '"></stop></radialGradient></defs><circle class="wbUvSun" cx="0" cy="0" r="' + W.toFixed(1) + '" fill="url(#' + k + 'uv-sun)"></circle></svg><div class="wbUvBig"><span class="wbUvNum">' + yt(Qt(Math.round(b), s.locale)) + '</span><span class="wbUvWord">' + yt(L) + "</span></div>" + ts(Pa(Qt(Math.round(b), s.locale), ""));
    return ea({
      icon: re.sunnyAlert,
      name: gt.metrics.uv_index,
      sub: z && z.uv > b ? Ke(gt.uvPeak, { level: L, uv_index: Qt(Math.round(z.uv), s.locale), time: Ge(z.time, s) }) : L,
      zone: $,
      cls: "wbUv",
      callouts: [br(b, s), [gt.callout.now, Qt(Math.round(b), s.locale) + " · " + L], [gt.callout.peak, z && z.uv > b ? Qt(Math.round(z.uv), s.locale) + " at " + Ge(z.time, s) : gt.callout.now]]
    });
  }
  function wr(s) {
    const h = ot("daily")[0], m = U.temperatureHistory;
    if (!h || new Date(h.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !fe(h.temperature) || !m || m.dailyHighs.length < Rm) return "";
    const b = Number(h.temperature), L = m.dailyHighs.reduce((Lt, dt) => Lt + dt, 0) / m.dailyHighs.length, I = Math.round(b - L) || 0, z = I > 0 ? "above" : I < 0 ? "below" : "same", Z = [...m.days, { date: /* @__PURE__ */ new Date(), high: b, today: !0 }], W = Z.map((Lt) => Lt.high).concat(L), $ = Math.min(...W) - 1, tt = Math.max(...W) + 1, mt = (Lt) => (1 - (Lt - $) / (tt - $)) * 100, Rt = (Lt) => (Lt + 0.5) / Z.length * 100, St = Z.map((Lt, dt) => [Rt(dt), mt(Lt.high)]), At = St.map(([Lt, dt], Ht) => (Ht ? "L" : "M") + Lt.toFixed(2) + " " + dt.toFixed(2)).join(""), jt = '<div class="wbCompareBars wbTrend" aria-hidden="true"><div class="wbTrendPlot"><svg viewBox="0 0 100 100" preserveAspectRatio="none"><defs><linearGradient id="' + k + 'trend" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--primary)" stop-opacity=".28"></stop><stop offset="1" style="stop-color:var(--primary)" stop-opacity="0"></stop></linearGradient></defs><path class="wbTrendArea" d="' + At + "L" + St[St.length - 1][0].toFixed(2) + " 100L" + St[0][0].toFixed(2) + ' 100Z" fill="url(#' + k + 'trend)"></path><line class="wbAvgLine" x1="0" x2="100" y1="' + mt(L).toFixed(2) + '" y2="' + mt(L).toFixed(2) + '" vector-effect="non-scaling-stroke"></line><path class="wbTrendLine" d="' + At + '" vector-effect="non-scaling-stroke"></path></svg><span class="wbTrendAvg" style="top:' + mt(L).toFixed(2) + '%">' + yt(be(s, L)) + "</span>" + Z.map((Lt, dt) => {
      const Ht = Lt.today ? " wbToday" : "", It = "left:" + Rt(dt).toFixed(2) + "%;top:" + mt(Lt.high).toFixed(2) + "%";
      return '<i class="wbTrendDot' + Ht + '" style="' + It + '"></i><span class="wbAvgValue' + Ht + '" style="' + It + '">' + yt(be(s, Lt.high)) + "</span>";
    }).join("") + '</div><div class="wbTrendDays">' + Z.map((Lt, dt) => '<span class="wbAvgDay' + (Lt.today ? " wbToday" : "") + '" style="left:' + Rt(dt).toFixed(2) + '%">' + yt(Qm(Lt.date, s)) + "</span>").join("") + "</div></div>";
    return ea({
      icon: re.chartLine,
      name: gt.metrics.compared_to_average,
      double: !0,
      sub: Ke(gt.highsLastDays, { days: m.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (I > 0 ? "+" : "") + yt(be(s, I)) + '</div><div class="wbCompareWords">' + yt(gt.average[z]) + '</div><div class="wbCompareTemps">' + yt(Ke(gt.todayVsAverage, { today: be(s, b), average: be(s, L) })) + "</div></div>" + jt + "</div>"
    });
  }
  function ci(s, h) {
    const m = Be(s, h, "humidity");
    if (!m || !fe(m.value)) return "";
    const b = Be(s, h, "dew_point"), L = Math.max(0, Math.min(100, Number(m.value)));
    return ea({
      icon: re.waterPercent,
      name: gt.metrics.humidity,
      sub: b && fe(b.value) ? Ke(gt.dewPoint, { dew_point: be(s, b.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + L + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + Pa(Qt(Math.round(Number(m.value)), s.locale), "%") + "</div>"
    });
  }
  function bs(s, h) {
    var Lt, dt, Ht;
    const m = Be(s, h, "pressure");
    if (!m || !fe(m.value)) return "";
    const b = Number(m.value), L = (Lt = m.stateObj.attributes) == null ? void 0 : Lt.pressure_unit, I = sp(b, L), z = ((dt = U.pressureHistory) == null ? void 0 : dt.entityId) === m.stateObj.entity_id ? sp(U.pressureHistory.value, L) : void 0;
    let Z;
    if (I !== void 0 && z !== void 0) {
      const It = I - z;
      Z = It >= Kd ? "rising" : It <= -Kd ? "falling" : "steady";
    }
    const W = ls(s, m.stateObj, "pressure", Math.round(b)), $ = m.stateObj, tt = (It) => L === "inHg" ? Math.round(It * 100) / 100 : Math.round(It), mt = (It) => rp(s, $, "pressure", tt(It)), Rt = z !== void 0 ? U.pressureHistory.value : void 0, St = Rt !== void 0 ? tt(b - Rt) : void 0, At = (Ht = $.entity_id) != null && Ht.startsWith("weather.") ? ot("hourly").find((It) => fe(It.pressure) && new Date(It.datetime).getTime() >= Date.now() + 3 * ne - 30 * qe) : void 0, jt = [
      ...Z ? [gt.advice[Z]] : [],
      ...Rt !== void 0 ? [[gt.callout.hoursAgo, mt(Rt)], [gt.callout.change, (St > 0 ? "+" : St < 0 ? "−" : "") + mt(Math.abs(St))]] : [],
      ...At ? [[gt.callout.inHours, mt(Number(At.pressure))]] : []
    ];
    return ea({
      icon: re.gauge,
      name: gt.metrics.pressure,
      sub: Z ? gt.pressure[Z] : void 0,
      cls: "wbPressure",
      callouts: jt,
      zone: '<div class="wbTapeRow"><div class="wbTapeValue">' + Pa(W.number) + '<span class="wbTapeUnit">' + yt(W.unit) + "</span></div>" + (I !== void 0 ? ws(s, I) : "") + "</div>"
    });
  }
  function ws(s, h) {
    const L = Math.floor(h) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (I, z) => L + z).map((I) => {
      const z = 100 - (I - h) * 9;
      if (z < 22 || z > 178) return "";
      const Z = I % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(z - 100) / 100) + '"><line class="wbTapeTick" x1="' + (Z ? 2 : 8) + '" x2="26" y1="' + z + '" y2="' + z + '"></line>' + (Z ? '<text class="wbTapeLabel" x="33" y="' + z + '">' + yt(Qt(I, s.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + yt(gt.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + yt(gt.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function zo(s) {
    var W, $;
    const h = Wl(s), m = h ? s.states[h] : void 0;
    if (!m || ((W = U.rain) == null ? void 0 : W.entityId) !== h || !fe(U.rain.change)) return "";
    const b = (($ = m.attributes) == null ? void 0 : $.unit_of_measurement) ?? "", L = st(s, "hourly"), I = Date.now() + da, z = ot("hourly").filter((tt) => tt.precipitation != null && new Date(tt.datetime).getTime() <= I), Z = z.reduce((tt, mt) => tt + Number(mt.precipitation), 0);
    return ea({
      icon: re.rainy,
      name: gt.metrics.precipitation,
      sub: L && z.length ? Ke(gt.rainExpected, { amount: Qt(Z, s.locale, { maximumFractionDigits: 1 }) + " " + on(s, L, "precipitation") }) : gt.rainLast24h,
      visual: Pa(Qt(U.rain.change, s.locale, { maximumFractionDigits: 1 }), b) + (z.length > 1 ? x0(z.map((tt) => ({ label: "", value: Number(tt.precipitation) }))) : "")
    });
  }
  function di(s, h) {
    const m = Be(s, h, "visibility");
    if (!m || !fe(m.value)) return "";
    const b = ls(s, m.stateObj, "visibility", m.value), L = fm(Number(m.value), on(s, m.stateObj, "visibility"));
    return ea({
      icon: re.eyeOutline,
      name: gt.metrics.visibility,
      sub: gt.visibilityLevel[um(L)],
      visual: '<div class="wbSea"><canvas class="wbSeaArt" data-wb-sea="' + L + '" aria-hidden="true"></canvas><div class="wbSeaFact">' + yt(vs(s, L)) + '</div><div class="wbSeaValue">' + Pa(b.number, b.unit) + "</div></div>"
    });
  }
  function vs(s, h) {
    var I;
    const m = pm((I = s.config) == null ? void 0 : I.country, h);
    if (m) return Ke(gt.visibilityLandmarks, { from: m.from, to: m.to });
    const b = h / Nm * 60;
    if (b < 60) {
      const z = b < 5 ? Math.max(1, Math.round(b)) : 5 * Math.round(b / 5);
      if (z < 60) return Ke(gt.walkMinutes, { minutes: Qt(z, s.locale) });
    }
    const L = Math.max(1, Math.round(b / 30) / 2);
    return L < 8 ? Ke(gt.walkHours, { hours: Qt(L, s.locale) }) : gt.walkDay;
  }
  function ln(s) {
    U.categories === void 0 && wt(s);
    const h = _e(s), m = (W) => W.map(($) => s.states[$]).filter(Pn), b = m(h.air), L = m(h.pollen);
    if (!b.length && !L.length) return "";
    const I = [...b, ...L], z = (W) => L.includes(W) ? re.flower : re.airFilter, Z = I.find((W) => W.entity_id === lt.aq);
    return Z ? vr(s, Z, z(Z)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + yt(gt.airQuality) + '</h2></div><div class="wbAqTiles">' + I.map((W) => '<button class="wbTile" data-wb="aq-open" data-entity="' + yt(W.entity_id) + '"><span class="wbChip">' + Fo(z(W)) + '</span><span class="wbText"><span class="wbName">' + yt(en(s, W)) + '</span><span class="wbSub">' + yt(No(s, W)) + "</span></span></button>").join("") + "</div></div>";
  }
  function vr(s, h, m) {
    var tt, mt, Rt;
    const b = ((tt = h.attributes) == null ? void 0 : tt.unit_of_measurement) ?? "", L = ((mt = h.attributes) == null ? void 0 : mt.device_class) === "pm25" && b === Qd && fe(h.state), I = Number(h.state), z = L ? Qi(I) : void 0, Z = ((Rt = U.aqHistory) == null ? void 0 : Rt.entityId) === h.entity_id ? U.aqHistory.points : void 0, W = (St) => Math.min(100, Math.max(0, St / Ji * 100));
    let $;
    if (Z && Z.length > 1) $ = dp(Z, (St) => (Qt(St, s.locale, { maximumFractionDigits: 1 }) + " " + b).trim());
    else if (z) {
      let St = 0;
      const At = sf.map(([jt, Lt]) => {
        const dt = W(Math.min(Lt, Ji)), Ht = Jd[jt] + " " + St + "% " + dt + "%";
        return St = dt, Ht;
      });
      $ = '<div class="wbScale" role="meter" aria-label="' + yt(gt.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + Ji + '" aria-valuenow="' + I + '" style="background:linear-gradient(to right, ' + At.join(", ") + ')"><i style="left:' + W(I) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + Ji + " " + Qd + "</span></div>";
    } else $ = '<span class="wbGraphNote"><span>' + yt(No(s, h)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + Fo(m) + '</span><span class="wbText"><span class="wbName">' + yt(en(s, h)) + '</span><span class="wbSub">' + yt(No(s, h)) + (z ? " · " + yt(gt.aqLevel[z]) : "") + '</span></span><button class="wbBack" title="' + yt(gt.back) + '" data-wb="aq-close">' + Fo(re.back) + '</button></div><div class="wbGraph">' + $ + "</div></div></div>";
  }
  const On = { good: "Good", fair: "Fair", moderate: "Moderate", poor: "Poor", very_poor: "Very poor", extremely_poor: "Extremely poor" }, pi = (s) => s <= 50 ? "Good" : s <= 100 ? "Moderate" : s <= 150 ? "Unhealthy for some" : s <= 200 ? "Unhealthy" : s <= 300 ? "Very unhealthy" : "Hazardous";
  function uo(s) {
    const h = /* @__PURE__ */ new Map();
    return Object.values(s.states || {}).filter((m) => {
      var b;
      return m.entity_id.startsWith("sensor.") && ps.includes(((b = m.attributes) == null ? void 0 : b.device_class) ?? "") && Pn(m) && ur(s, m.entity_id);
    }).sort((m, b) => m.entity_id.localeCompare(b.entity_id)).forEach((m) => {
      h.has(m.attributes.device_class) || h.set(m.attributes.device_class, m);
    }), ps.map((m) => h.get(m)).filter(Boolean);
  }
  const yr = (s) => Object.values(s.states || {}).filter((h) => {
    var m, b;
    return h.entity_id.startsWith("sensor.") && Pn(h) && ur(s, h.entity_id) && (((b = (m = s.entities) == null ? void 0 : m[h.entity_id]) == null ? void 0 : b.translation_key) ?? h.entity_id).toLowerCase().includes("pollen");
  }), Fa = ["none", "very_low", "low", "moderate", "high", "very_high"], Go = (s) => fe(s.state) ? Number(s.state) : Fa.indexOf(String(s.state).toLowerCase().replace(/ /g, "_")), Ka = (s) => {
    const h = String(s).replace(/_/g, " ");
    return h[0].toUpperCase() + h.slice(1);
  }, Xa = (s, h, m) => {
    const b = m ? s === "aqi" ? h <= 50 ? "good" : h <= 100 ? "moderate" : "poor" : s === "pm25" ? Qi(h) : null : null;
    return b === "good" || b === "fair" ? gt.advice.window : b === "moderate" || b === null ? gt.advice.fine : gt.advice.closed;
  }, In = ["good", "fair", "moderate", "poor", "very_poor", "extremely_poor"], $a = (s) => In[s <= 50 ? 0 : s <= 100 ? 1 : s <= 150 ? 2 : s <= 200 ? 3 : s <= 300 ? 4 : 5], Fn = "M43 43q1 8 0 10M77 42q1 8 -1 10", Ma = {
    good: [Fn, "M34 69Q61 98 86 67"],
    fair: [Fn, "M40 74Q61 89 81 72"],
    moderate: [Fn, "M41 79Q60 76 80 81"],
    poor: [Fn, "M41 85Q60 73 80 86"],
    very_poor: ["M36 38l13 5M84 37l-13 5M43 48q1 7 0 9M77 47q1 7 -1 9", "M37 90Q60 64 84 89"],
    extremely_poor: ["M37 41l12 11M49 41l-12 11M71 40l12 11M83 40l-12 11", "M36 84q6 -8 12 0t12 0t12 0t12 0"]
  }, cn = (s) => '<svg class="wbAqFace" viewBox="0 0 120 120" aria-hidden="true"><path d="M60 9C89 8 112 32 110 61C109 90 87 112 58 111C30 110 9 88 10 59C11 31 33 10 63 12"></path><path class="wbAqEyes" d="' + Ma[s][0] + '"></path><path d="' + Ma[s][1] + '"></path></svg>';
  function xr(s) {
    const h = uo(s), m = h[0];
    if (!m) return ea({ icon: re.airFilter, name: gt.airQuality, sub: gt.noAir, visual: Pa("–", ""), cls: "wbBase" });
    const b = m.attributes.device_class, L = Number(m.state), I = fe(m.state), z = b === "aqi" && I ? pi(L) : b === "pm25" && I ? On[Qi(L)] : No(s, m), Z = I ? Qt(Math.round(L), s.locale) : String(m.state), W = b === "aqi" ? "AQI" : m.attributes.unit_of_measurement || "", $ = I && b === "aqi" ? $a(L) : I && b === "pm25" ? Qi(L) : null;
    return ea($ ? {
      icon: re.airFilter,
      name: gt.airQuality,
      sub: z,
      cls: "wbAqSmile",
      zone: '<div class="wbAqFill" style="background:' + Jd[$] + '">' + cn($) + '<div class="wbAqBig"><span class="wbAqNum">' + yt(Z) + "</span>" + (W ? '<span class="wbAqUnit">' + yt(W) + "</span>" : "") + "</div></div>" + ts(Pa(Z, W)),
      callouts: [Xa(b, L, I), ...h.slice(1, 3).map((tt) => [en(s, tt), No(s, tt)])]
    } : {
      icon: re.airFilter,
      name: gt.airQuality,
      sub: z,
      cls: "wbBase",
      zone: Pa(Z, W),
      callouts: [Xa(b, L, I), ...h.slice(1, 3).map((tt) => [en(s, tt), No(s, tt)])]
    });
  }
  const He = [
    ["wbSeed", '<svg viewBox="0 0 22 30" aria-hidden="true"><path d="M11 28V11" fill="none" stroke="currentColor" stroke-width="1"></path><path d="M11 11L3 6M11 11L5 2.5M11 11L8.5 1M11 11L13.5 1M11 11L17 2.5M11 11L19 6" fill="none" stroke="currentColor" stroke-width=".8" stroke-linecap="round"></path><circle cx="11" cy="28.5" r="1.4" fill="currentColor"></circle></svg>'],
    ["wbGrain", '<svg viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="3.3" fill="currentColor"></circle><path d="M6 1.2v1.4M6 9.4v1.4M1.2 6h1.4M9.4 6h1.4M2.6 2.6l1 1M8.4 8.4l1 1M2.6 9.4l1-1M8.4 3.6l1-1" stroke="currentColor" stroke-width=".9" stroke-linecap="round"></path></svg>'],
    ["wbStem", '<svg viewBox="0 0 10 30" aria-hidden="true"><path d="M5 29Q3.6 18 5 8" fill="none" stroke="currentColor" stroke-width="1"></path><ellipse cx="5" cy="6" rx="2.3" ry="4.6" fill="currentColor"></ellipse></svg>']
  ], kr = (s) => {
    const h = [1, 3, 5, 7, 10, 13][Math.max(0, Math.min(5, Number.isFinite(s) ? Math.round(s) : 0))];
    return '<div class="wbPollenAir" aria-hidden="true">' + Array.from({ length: h }, (m, b) => {
      const [L, I] = He[b % 3], z = 10 + b * 7 % 9, Z = 2.6 + b * 5 % 4 * 0.4;
      return '<span class="wbFloat ' + L + '" style="top:' + (4 + b * 37 % 52) + "%;--x:" + (b * 29 % 90 + 4) + "%;--s:" + (0.8 + b * 13 % 5 / 10).toFixed(1) + ";animation-duration:" + z + "s;animation-delay:-" + (b * 2.3 % z).toFixed(1) + 's"><span class="wbPush"><span class="wbBob" style="animation-duration:' + Z.toFixed(1) + "s;animation-delay:-" + (b * 0.7 % Z).toFixed(1) + 's">' + I + "</span></span></span>";
    }).join("") + "</div>";
  };
  function ho(s) {
    const h = yr(s).sort((L, I) => Go(I) - Go(L));
    if (!h.length) return ea({ icon: re.flower, name: gt.pollen, sub: gt.noPollen, visual: Pa("–", ""), cls: "wbBase" });
    const m = h[0], b = (L) => fe(L.state) ? No(s, L) : Ka(L.state);
    return ea({
      icon: re.flower,
      name: gt.pollen,
      sub: en(s, m) + " · " + b(m),
      cls: "wbBase wbPollen",
      zone: kr(Go(m)) + Pa(b(m), ""),
      callouts: h.slice(0, 3).map((L) => [en(s, L), b(L)])
    });
  }
  function fi(s) {
    var Z;
    const h = Date.now(), m = ot("hourly").filter((W) => {
      const $ = new Date(W.datetime).getTime();
      return $ > h - ne && $ < h + 12 * ne;
    }), b = m.find((W) => (W.precipitation_probability ?? 0) >= 50 || (W.precipitation ?? 0) >= 0.2), L = b ? Ke(gt.rainFrom, { time: Ge(new Date(Math.max(h, new Date(b.datetime).getTime())), s) }) : m.length ? gt.noRain12 : void 0, I = (V == null ? void 0 : V()) || "rainviewer";
    let z;
    if (I.startsWith("camera:")) {
      const W = s.states[I.slice(7)], $ = W && W.state !== "unavailable" && ((Z = W.attributes) == null ? void 0 : Z.entity_picture);
      z = $ ? '<div class="wbRadar wbRadarCam" aria-hidden="true"><img class="wbRadarImg" src="' + yt($) + '" data-src="' + yt($) + '" alt=""></div>' : '<div class="wbRadar" aria-hidden="true"><span class="wbRadarNote">' + yt(gt.cameraOff) + "</span></div>";
    } else {
      const W = fr(s);
      z = W ? '<div class="wbRadar wbRadarMap" aria-hidden="true" data-lat="' + W.lat + '" data-lon="' + W.lon + '"><i class="wbRadarHome"></i></div>' : '<div class="wbRadar" aria-hidden="true"><i class="wbRadarRing"></i><i class="wbRadarHome"></i><span class="wbRadarNote">' + yt(gt.noLocation) + "</span></div>";
    }
    return ea({ icon: re.radar, name: gt.rainRadar, sub: L, cls: "wbBase wbRadarTile", visual: z });
  }
  const ui = {
    current: ei,
    hourly: ii,
    sun: ms,
    moon: Re,
    wind: fo,
    uv_index: gs,
    compared_to_average: wr,
    humidity: ci,
    pressure: bs,
    precipitation: zo,
    visibility: di,
    air_quality: ln,
    aq_tile: xr,
    pollen_tile: ho,
    radar_tile: fi
  }, Mr = [["day", "Last 24 hours", 1], ["week", "Last 7 days", 7], ["month", "Last 30 days", 30]], dn = (s, h) => {
    var m;
    return h.toLocaleDateString((m = s.locale) == null ? void 0 : m.language, { day: "numeric", month: "short" });
  }, Sr = (s) => {
    const h = new Date(s);
    return h.setMinutes(h.getMinutes() - h.getTimezoneOffset()), h.toISOString().slice(0, 10);
  }, mo = () => {
    const s = lt.range, h = Date.now();
    if (s.preset !== "custom") {
      const L = Mr.find(([I]) => I === s.preset)[2];
      return [h - L * da, h];
    }
    const m = nn(/* @__PURE__ */ new Date(s.from + "T00:00")).getTime(), b = Math.min(h, nn(/* @__PURE__ */ new Date(s.to + "T00:00")).getTime() + da);
    return [Math.min(m, b - ne), b];
  }, hi = (s) => {
    const h = lt.range;
    if (h.preset !== "custom") return Mr.find(([L]) => L === h.preset)[1];
    const [m, b] = mo();
    return h.from === h.to ? dn(s, new Date(m)) : dn(s, new Date(m)) + " – " + dn(s, new Date(b - 1));
  }, _r = () => lt.range.preset === "custom" ? lt.range.from + "_" + lt.range.to : lt.range.preset, Cr = (s, h) => h - s <= 2 * da, he = (s, h, m, b) => Cr(m, b) ? Ge(h, s) : dn(s, h), Sa = (s, h = 60) => {
    const m = Math.max(1, Math.ceil(s.length / h));
    return s.filter((b, L) => L % m === 0 || L === s.length - 1);
  }, Et = (s, h, m, b, L = !1) => s.callWS({
    type: "history/history_during_period",
    start_time: new Date(m).toISOString(),
    end_time: new Date(b).toISOString(),
    entity_ids: [h],
    minimal_response: L,
    no_attributes: L,
    significant_changes_only: !1
  }), _a = (s) => async (h, m, b, L) => {
    const I = Be(h, m, s);
    if (!I) return [];
    const z = I.stateObj.entity_id, Z = await Et(h, z, b, L);
    return Sa(((Z == null ? void 0 : Z[z]) ?? []).map((W) => {
      var mt;
      const $ = ((mt = W.a) == null ? void 0 : mt[s]) ?? (fe(W.s) ? Number(W.s) : void 0), tt = (W.lu ?? W.lc) * 1e3;
      return typeof $ == "number" && tt >= b && tt <= L ? { t: new Date(tt), value: $ } : null;
    }).filter(Boolean)).map((W) => ({ label: he(h, W.t, b, L), value: W.value }));
  }, pn = (s, h) => async (m, b, L, I) => {
    const z = s(m);
    if (!z) return [];
    const Z = z.entity_id, W = await Et(m, Z, L, I, !0);
    return Sa(((W == null ? void 0 : W[Z]) ?? []).map(($) => {
      const tt = h($.s), mt = $.lu * 1e3;
      return tt == null || !Number.isFinite(tt) || mt < L || mt > I ? null : { t: new Date(mt), value: tt };
    }).filter(Boolean)).map(($) => ({ label: he(m, $.t, L, I), value: $.value }));
  }, Ar = (s, h) => async (m, b, L, I) => {
    const z = fr(m);
    if (!z) return [];
    const Z = [];
    if (Cr(L, I)) for (let W = L; W <= I; W += ne / 2) Z.push({ label: Ge(new Date(W), m), value: s(new Date(W), z) });
    else for (let W = I; W >= L; W -= da) {
      const $ = new Date(W), tt = h($, z, m);
      tt != null && Z.unshift({ label: dn(m, $), value: tt });
    }
    return Sa(Z);
  }, Ja = (s) => yr(s).sort((h, m) => Go(m) - Go(h))[0], Uo = (s, h, m) => {
    const b = Be(s, h, m);
    return b ? on(s, b.stateObj, m) : "";
  }, qn = {
    current: { name: () => gt.modes.temperature, icon: () => re.sunny, load: _a("temperature"), fmt: (s, h, m) => be(s, m), now: (s, h) => {
      var m;
      return be(s, (m = Be(s, h, "temperature")) == null ? void 0 : m.value);
    } },
    sun: {
      name: () => gt.sun,
      icon: () => re.sunny,
      load: Ar((s, h) => Math.round(us(s, h.lat, h.lon) / oa), (s, h, m) => {
        const b = lr(m, s);
        return b.rise && b.set ? Math.round((b.set - b.rise) / ne * 10) / 10 : null;
      }),
      fmt: (s, h, m, b) => b ? Qt(m, s.locale) + "°" : Qt(m, s.locale) + " h",
      sub: (s) => s ? "How high the sun was" : "Hours of daylight a day"
    },
    moon: {
      name: () => gt.moon,
      icon: () => re.night,
      load: Ar((s) => Math.round(ql(s).fraction * 100), (s) => Math.round(ql(s).fraction * 100)),
      fmt: (s, h, m) => Qt(m, s.locale) + "%",
      sub: () => "How much of it was lit"
    },
    uv_index: { name: () => gt.metrics.uv_index, icon: () => re.sunnyAlert, load: _a("uv_index"), fmt: (s, h, m) => Qt(Math.round(m * 10) / 10, s.locale), now: (s, h) => {
      const m = Be(s, h, "uv_index");
      return m ? Qt(Number(m.value), s.locale) : "";
    } },
    humidity: { name: () => gt.metrics.humidity, icon: () => re.waterPercent, load: _a("humidity"), fmt: (s, h, m) => Qt(Math.round(m), s.locale) + "%", now: (s, h) => {
      const m = Be(s, h, "humidity");
      return m ? Qt(Math.round(Number(m.value)), s.locale) + "%" : "";
    } },
    pressure: { name: () => gt.metrics.pressure, icon: () => re.gauge, load: _a("pressure"), fmt: (s, h, m) => Qt(Math.round(m), s.locale) + " " + Uo(s, h, "pressure"), now: (s, h) => {
      const m = Be(s, h, "pressure");
      return m ? Qt(Math.round(Number(m.value)), s.locale) + " " + Uo(s, h, "pressure") : "";
    } },
    wind: { name: () => gt.wind, icon: () => re.windy, load: _a("wind_speed"), fmt: (s, h, m) => Qt(Math.round(m), s.locale) + " " + Uo(s, h, "wind_speed"), now: (s, h) => {
      const m = Be(s, h, "wind_speed");
      return m ? Qt(Math.round(Number(m.value)), s.locale) + " " + Uo(s, h, "wind_speed") : "";
    } },
    visibility: { name: () => gt.metrics.visibility, icon: () => re.eyeOutline, load: _a("visibility"), fmt: (s, h, m) => Qt(Math.round(m * 10) / 10, s.locale) + " " + Uo(s, h, "visibility"), now: (s, h) => {
      const m = Be(s, h, "visibility");
      return m ? Qt(Number(m.value), s.locale) + " " + Uo(s, h, "visibility") : "";
    } },
    aq_tile: {
      name: (s) => uo(s)[0] ? en(s, uo(s)[0]) : gt.airQuality,
      icon: () => re.airFilter,
      load: pn((s) => uo(s)[0], (s) => fe(s) ? Number(s) : null),
      fmt: (s, h, m) => {
        var I, z;
        const b = uo(s)[0], L = (I = b == null ? void 0 : b.attributes) == null ? void 0 : I.device_class;
        return Qt(Math.round(m * 10) / 10, s.locale) + (L === "aqi" ? " AQI" : (z = b == null ? void 0 : b.attributes) != null && z.unit_of_measurement ? " " + b.attributes.unit_of_measurement : "");
      },
      now: (s) => {
        const h = uo(s)[0];
        return h ? No(s, h) : "";
      }
    },
    pollen_tile: {
      name: (s) => Ja(s) ? en(s, Ja(s)) : gt.pollen,
      icon: () => re.flower,
      load: pn(Ja, (s) => {
        const h = Go({ state: s });
        return h < 0 ? null : h;
      }),
      fmt: (s, h, m) => Ka(Fa[Math.round(m)] || ""),
      now: (s) => {
        const h = Ja(s);
        return h ? Ka(h.state) : "";
      }
    }
  }, go = {};
  let Yo = null;
  async function Wn(s) {
    const h = i == null ? void 0 : i();
    if (!h || !qn[s]) return;
    const m = s + "|" + _r(), [b, L] = mo();
    if (go[m] && Date.now() - go[m].at < 5 * qe) return;
    go[m] = { at: Date.now(), points: null };
    try {
      go[m].points = await qn[s].load(h, Ot(h), b, L);
    } catch {
      go[m].points = [];
    }
    Oe(!0), Yo === s && lt.graph === s && (Yo = null, Gd(G.querySelector(".wbGraphCard")));
    const I = lt.graph === s && G.querySelector(".wbGraph .wbChart");
    I && of(I, I.querySelector(".wbLine"), I.querySelectorAll(".wbArea"));
  }
  function bo(s, h) {
    const m = lt.range, b = Sr(Date.now()), [L, I] = mo(), z = m.pickFrom || Sr(L), Z = m.pickTo || Sr(I - 1);
    return '<div class="wbRangePick" role="dialog" aria-label="Choose date range"><div class="wbRangePresets">' + Mr.map(([W, $]) => '<button class="wbRangePreset" aria-pressed="' + (m.preset === W) + '" data-wb="graph-preset" data-range="' + W + '" data-wb-focus="graph-preset-' + W + '">' + yt($) + "</button>").join("") + '</div><div class="wbRangeDates"><label><span>From</span><input type="date" data-range-from value="' + z + '" max="' + b + '"></label><label><span>To</span><input type="date" data-range-to value="' + Z + '" max="' + b + '"></label></div><button class="wbRangeApply" data-wb="graph-apply" data-wb-focus="graph-apply">Show these dates</button></div>';
  }
  function mi(s, h, m) {
    var mt;
    const b = qn[m], [L, I] = mo(), z = Cr(L, I), Z = (mt = go[m + "|" + _r()]) == null ? void 0 : mt.points, W = Math.max(120, Math.min(520, innerWidth - (innerWidth <= 620 ? 0 : 32)) - 2 * 18 - 32), tt = Z ? Z.length > 1 ? dp(Z, (Rt) => b.fmt(s, h, Rt, z), 220, W) : '<span class="wbGraphNote"><span>No history for these dates</span></span>' : '<span class="wbGraphNote"><span>Loading…</span></span>';
    return '<div class="wbPopupBox"><div class="wbCard wbSquare wbGraphCard" role="dialog" aria-modal="true" aria-label="' + yt(b.name(s)) + '"><div class="wbHead"><div class="wbChip wbPlain">' + lf(b.icon(s)) + '</div><div class="wbText"><span class="wbName">' + yt(b.name(s)) + '</span><span class="wbSub">' + yt(b.sub ? b.sub(z) : b.now ? b.now(s, h) : "") + '</span></div><button class="wbBack" title="Close" data-wb="graph-close" data-wb-focus="graph-close">' + Fo(re.close) + '</button></div><button class="wbRangeBtn" aria-haspopup="dialog" aria-expanded="' + !!lt.picking + '" title="Choose date range" data-wb="graph-pick" data-wb-focus="graph-pick">' + Fo(re.calendar) + "<span>" + yt(hi(s)) + "</span>" + Fo(re.chevronDown) + '</button><div class="wbGraph">' + tt + "</div></div>" + (lt.picking ? bo() : "") + "</div>";
  }
  function Oe(s) {
    var Rt, St, At, jt, Lt;
    const h = i == null ? void 0 : i();
    if (!h || nt) return;
    const m = Ot(h);
    Mt(h, m), U.lastFetch || fa();
    const b = _e(h), L = lp(h), I = Wl(h), z = [
      ...m.map((dt) => h.states[dt]),
      h.states["sun.sun"],
      L && h.states[L],
      I && h.states[I],
      ...b.air.map((dt) => h.states[dt]),
      ...b.pollen.map((dt) => h.states[dt]),
      ...et.some((dt) => J.includes(dt)) ? [...uo(h), ...yr(h)] : [],
      h.locale,
      h.config,
      h.entities,
      Math.floor(Date.now() / qe)
    ];
    if (!s && ct && z.length === ct.length && z.every((dt, Ht) => dt === ct[Ht])) return;
    ct = z;
    const Z = D.getRootNode(), W = Z.activeElement || document.activeElement;
    for (const dt of et) {
      const Ht = N[dt];
      let It = "";
      try {
        It = ui[dt](h, m) || "";
      } catch {
        It = "";
      }
      if (It === Ht.html) continue;
      const ke = W && Ht.el.contains(W) ? (Rt = W.dataset) == null ? void 0 : Rt.wbFocus : void 0, _t = Ht.el.querySelector(".wbStripScroll"), oe = _t ? _t.scrollLeft : null;
      Ht.html = It, Ht.el.hidden = !It, Ht.el.innerHTML = It;
      const pe = Ht.el.querySelector(".wbStripScroll");
      pe && oe != null ? pe.scrollTo({ left: oe }) : pe != null && pe.dataset.start && pe.scrollTo({ left: Number(pe.dataset.start) * pe.clientWidth / Number(pe.dataset.span) }), ke && !Y && ((St = Ht.el.querySelector('[data-wb-focus="' + ke + '"]')) == null || St.focus());
    }
    let $ = "";
    if (lt.graph)
      try {
        $ = mi(h, m, lt.graph) || "";
      } catch {
        $ = "";
      }
    if ($ !== H) {
      const dt = W && G.contains(W) ? (At = W.dataset) == null ? void 0 : At.wbFocus : void 0;
      H = $, G.innerHTML = $, G.hidden = !$, $ && !G.isConnected && (D.closest("#app") || D).appendChild(G), dt && !Y && ((jt = G.querySelector('[data-wb-focus="' + dt + '"]')) == null || jt.focus({ preventScroll: !0 }));
    }
    ue(), D.querySelectorAll(".wbRadarMap").forEach((dt) => {
      dt._tiles || wo(dt);
    }), Y && ((Lt = D.querySelector('[data-wb-focus="' + Y + '"]') || G.querySelector('[data-wb-focus="' + Y + '"]')) == null || Lt.focus({ preventScroll: !0 }), Y = null);
    let tt = !1, mt = !1;
    for (const dt of et) {
      const Ht = N[dt], It = !Ht.el.hidden, ke = at[dt] === "wide" || X.includes(dt), _t = et.indexOf(dt) >= et.indexOf("moon"), oe = It && (_t && ke && !tt || !ke && !mt);
      oe && ke && (tt = !0), oe && !ke && (mt = !0), Ht.el.toggleAttribute("data-break", oe);
    }
    jn(performance.now());
  }
  function Je() {
    K || nt || (K = !0, queueMicrotask(() => {
      K = !1, Oe(!0);
    }));
  }
  function ha() {
    const s = getComputedStyle(D), h = (z) => s.getPropertyValue(z).trim(), m = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([z, Z]) => {
      h(Z) && (m[z] = h(Z));
    });
    const b = h("--color-text-primary") || "#f1f1f1", L = h("--color-bg-card") || "#222222", I = !!D.closest(".light");
    return { colors: { ...Oa, ...m }, ink: I ? b : L, paper: I ? L : b };
  }
  const Vn = (s, h) => {
    var m;
    s.width !== h.w && (s.width = h.w), s.height !== h.h && (s.height = h.h), (m = s.getContext("2d")) == null || m.putImageData(new ImageData(h.data, h.w, h.h), 0, 0);
  }, Zo = () => g && !Xm();
  function Tr(s, h) {
    D.querySelectorAll("canvas[data-wb-strip]").forEach((m) => ys(m, Q[m.dataset.wbStrip], s, h));
  }
  function ys(s, h, m, b) {
    if (!h || !s.getClientRects().length) return;
    const L = s.clientWidth, I = s.clientHeight;
    if (!L || !I) return;
    const z = { width: L, height: I, columns: h.columns || Ud, colors: b.colors, clock: m, ambient: Zo(), seed: h.seed, soft: 1.5 };
    if (p === "smooth") {
      const Z = Math.min(2, window.devicePixelRatio || 1), W = Math.round(L * Z), $ = Math.round(I * Z);
      s.width !== W && (s.width = W), s.height !== $ && (s.height = $);
      const tt = s.getContext("2d");
      if (!tt) return;
      tt.setTransform(Z, 0, 0, Z, 0, 0), Yh(tt, h.segs, z);
    } else Vn(s, Uh(h.segs, { ...z, px: 2, oneBit: p === "onebit", ink: b.ink, paper: b.paper }));
  }
  function jn(s) {
    if (nt) return;
    const h = ha();
    if (p !== "smooth") {
      const m = Zo();
      D.querySelectorAll("canvas[data-wb-wx]").forEach((b) => {
        b.getClientRects().length && Vn(b, Dh(Sh(b.dataset.wbWx, h.colors), { size: Number(b.dataset.size) || 40, px: 2, oneBit: p === "onebit", colors: h.colors, ink: h.ink, paper: h.paper, clock: s, idle: m }));
      });
    }
    D.querySelectorAll("canvas[data-wb-sea]").forEach((m) => {
      const b = m.clientWidth, L = m.clientHeight, I = Number(m.dataset.wbSea), z = b + "x" + L + ":" + I + ":" + h.colors.skyClearDay;
      !b || !L || !(I > 0) || m.dataset.painted === z || (m.dataset.painted = z, Vn(m, lm(b, L, I, h.colors)));
    }), Tr(s, h);
  }
  function gi(s) {
    if (bt = 0, !(nt || !Zo())) {
      if (!document.hidden)
        if (p === "smooth") Tr(s, ha());
        else {
          const h = Math.floor(s / 100);
          h !== it && (it = h, jn(s));
        }
      bt = requestAnimationFrame(gi);
    }
  }
  function Ko() {
    D.classList.toggle("wbMotion", Zo()), !bt && !nt && Zo() && (bt = requestAnimationFrame(gi));
  }
  function zn(s) {
    var m, b, L, I, z, Z, W;
    if (s.target === G) {
      lt.graph = void 0, lt.picking = !1, Oe(!0);
      return;
    }
    const h = (b = (m = s.target).closest) == null ? void 0 : b.call(m, "[data-wb]");
    if (!h || !(D.contains(h) || G.contains(h))) {
      const $ = (I = (L = s.target).closest) == null ? void 0 : I.call(L, ".wbItem"), tt = $ == null ? void 0 : $.dataset.card;
      if (!$ || !D.contains($) || !qn[tt] || lt.graph === tt || D.closest(".tfEditing") || tt === "current" && w) return;
      lt.graph = tt, lt.picking = !1, Y = "graph-close", Oe(!0), (z = go[tt + "|" + _r()]) != null && z.points ? Gd(G.querySelector(".wbGraphCard")) : Yo = tt, Wn(tt);
      return;
    }
    switch (h.dataset.wb) {
      case "day": {
        lt.openDay = Number(h.dataset.index), lt.opener = h.dataset.wbFocus, Y = "back-day";
        const $ = rn()[lt.openDay], tt = !U.todayHistory || U.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - U.todayHistory.fetched > _m;
        $ && sr(new Date($.datetime), /* @__PURE__ */ new Date()) && tt && $e();
        break;
      }
      case "close-day":
        lt.openDay = void 0, Y = lt.opener, lt.opener = void 0;
        break;
      case "open-page":
        w == null || w();
        return;
      case "day-mode":
        lt.dayMode = h.dataset.mode;
        break;
      case "hourly-mode":
        lt.hourlyMode = h.dataset.mode;
        break;
      case "hourly-view":
        lt.hourlyView = h.dataset.view;
        try {
          localStorage.setItem(xt, lt.hourlyView);
        } catch {
        }
        break;
      case "hours-day": {
        const $ = D.querySelector(".wbStripScroll");
        $ && $.scrollTo({ left: Number(h.dataset.hours) * $.clientWidth / Number($.dataset.span), behavior: "smooth" });
        return;
      }
      case "aq-open":
        lt.aq = h.dataset.entity, Hn(lt.aq);
        break;
      case "aq-close":
        lt.aq = void 0;
        break;
      case "graph-close":
        lt.graph = void 0, lt.picking = !1;
        break;
      case "graph-pick":
        lt.picking = !lt.picking, Y = lt.picking ? "graph-preset-" + (lt.range.preset === "custom" ? "day" : lt.range.preset) : "graph-pick";
        break;
      case "graph-preset":
        lt.range = { preset: h.dataset.range }, lt.picking = !1, Y = "graph-pick", Oe(!0), Wn(lt.graph);
        return;
      case "graph-apply": {
        let $ = lt.range.pickFrom || ((Z = D.querySelector("[data-range-from]")) == null ? void 0 : Z.value), tt = lt.range.pickTo || ((W = D.querySelector("[data-range-to]")) == null ? void 0 : W.value);
        if (!$ || !tt) return;
        $ > tt && ([$, tt] = [tt, $]), lt.range = { preset: "custom", from: $, to: tt }, lt.picking = !1, Y = "graph-pick", Oe(!0), Wn(lt.graph);
        return;
      }
      default:
        return;
    }
    Oe(!0);
  }
  function Xo(s) {
    var h, m, b, L, I, z;
    s.key === "Escape" && lt.openDay !== void 0 && ((m = (h = s.target).closest) != null && m.call(h, '[data-wb-open="day"]')) ? (lt.openDay = void 0, Y = lt.opener, lt.opener = void 0, Oe(!0)) : s.key === "Escape" && lt.picking && ((L = (b = s.target).closest) != null && L.call(b, ".wbGraphCard")) ? (lt.picking = !1, Y = "graph-pick", Oe(!0)) : s.key === "Escape" && lt.graph && ((z = (I = s.target).closest) != null && z.call(I, ".wbGraphCard")) && (lt.graph = void 0, Oe(!0));
  }
  let Ue = null;
  function bi(s) {
    var m, b;
    const h = (b = (m = s.target).closest) == null ? void 0 : b.call(m, ".wbStripScroll");
    !h || s.button !== 0 || (Ue = { startX: s.pageX, left: h.scrollLeft, moved: !1 }, h.classList.add("wbHeld"), window.addEventListener("mousemove", fn), window.addEventListener("mouseup", wi, { once: !0 }));
  }
  function fn(s) {
    const h = D.querySelector(".wbStripScroll");
    if (!Ue || !h) return;
    const m = s.pageX - Ue.startX;
    !Ue.moved && Math.abs(m) > 1 && (Ue.moved = !0, h.classList.add("wbDragging")), h.scrollLeft = Ue.left - m;
  }
  function wi() {
    Ue = null, window.removeEventListener("mousemove", fn);
    const s = D.querySelector(".wbStripScroll");
    if (!s) return;
    s.classList.remove("wbDragging", "wbHeld");
    const h = [...s.querySelectorAll(".wbSnap")];
    if (h.length) {
      const m = h.reduce((b, L) => Math.abs(L.offsetLeft - s.scrollLeft) < Math.abs(b.offsetLeft - s.scrollLeft) ? L : b);
      s.scrollTo({ left: m.offsetLeft, behavior: "smooth" });
    }
  }
  const Ye = (s) => {
    var m, b;
    const h = s.target;
    (m = h.matches) != null && m.call(h, "[data-range-from]") ? lt.range.pickFrom = h.value : (b = h.matches) != null && b.call(h, "[data-range-to]") && (lt.range.pickTo = h.value);
  };
  D.addEventListener("change", Ye), D.addEventListener("click", zn), D.addEventListener("keydown", Xo), G.addEventListener("change", Ye), G.addEventListener("click", zn), G.addEventListener("keydown", Xo), D.addEventListener("mousedown", bi);
  const un = 64, Lr = 30;
  let ma = null, qa = 0;
  const hn = () => {
    qa = 0, D.querySelectorAll(".wbPollen .wbPush").forEach((s) => {
      let h = 0, m = 0;
      if (ma) {
        const b = s.parentElement.getBoundingClientRect(), L = b.left + b.width / 2 - ma.x, I = b.top + b.height / 2 - ma.y, z = Math.hypot(L, I) || 1;
        if (z < un) {
          const Z = (1 - z / un) * Lr;
          h = L / z * Z, m = I / z * Z;
        }
      }
      s.style.transform = h || m ? "translate(" + h.toFixed(1) + "px," + m.toFixed(1) + "px)" : "";
    }), ma && (qa = requestAnimationFrame(hn));
  }, vi = (s) => {
    var m, b;
    if (!((b = (m = s.target).closest) == null ? void 0 : b.call(m, ".wbPollen")) || Ie != null && Ie.matches) {
      ma && (ma = null, qa || (qa = requestAnimationFrame(hn)));
      return;
    }
    ma = { x: s.clientX, y: s.clientY }, qa || (qa = requestAnimationFrame(hn));
  }, yi = () => {
    ma = null, qa || (qa = requestAnimationFrame(hn));
  };
  D.addEventListener("pointermove", vi), D.addEventListener("pointerleave", yi);
  const Qa = typeof ResizeObserver == "function" ? new ResizeObserver(() => jn(performance.now())) : null;
  Qa == null || Qa.observe(D);
  const $o = typeof ResizeObserver == "function" ? new ResizeObserver((s) => s.forEach((h) => {
    const m = h.target;
    m._tiles && (m.clientWidth !== m._w || m.clientHeight !== m._h) && wo(m);
  })) : null;
  function wo(s) {
    var z;
    const h = s.clientWidth, m = s.clientHeight;
    if (!h || !m || nt) return;
    const b = qm(Number(s.dataset.lat), Number(s.dataset.lon), h, m), L = !!((z = D.closest("#app")) != null && z.classList.contains("light")), I = (Z) => ' style="left:' + Z.left + "px;top:" + Z.top + 'px"';
    s._tiles = b, s._w = h, s._h = m, s._frames = null, s._built = Date.now(), s.innerHTML = '<div class="wbRadarLayer wbRadarBase">' + b.map((Z) => '<img src="https://' + "abcd"[(Z.x + Z.y) % 4] + ".basemaps.cartocdn.com/" + (L ? "light_all" : "dark_all") + "/" + ac + "/" + Z.x + "/" + Z.y + '.png"' + I(Z) + ' alt="">').join("") + '</div><div class="wbRadarFrames"></div><i class="wbRadarHome"></i><span class="wbRadarTime"></span><span class="wbRadarCredit">© OpenStreetMap · CARTO · RainViewer</span>', $o == null || $o.observe(s), Fm().then((Z) => {
      !s.isConnected || nt || s._tiles !== b || (s.querySelector(".wbRadarFrames").innerHTML = Z.frames.map((W, $) => '<div class="wbRadarLayer wbRadarRain" data-i="' + $ + '" hidden>' + b.map((tt) => '<img src="' + Z.host + W.path + "/" + Oo + "/" + ac + "/" + tt.x + "/" + tt.y + '/2/1_1.png"' + I(tt) + ' alt="">').join("") + "</div>").join(""), s._frames = Z.frames, s._hold = 0, xi(s, Z.frames.findLastIndex((W) => W.past)));
    }).catch(() => {
      s.isConnected && (s.querySelector(".wbRadarTime").textContent = gt.radarOff);
    });
  }
  function xi(s, h) {
    const m = s._frames;
    if (!(m != null && m.length)) return;
    s._i = h, s.querySelectorAll(".wbRadarRain").forEach((L) => {
      L.hidden = Number(L.dataset.i) !== h;
    });
    const b = m[h];
    s.querySelector(".wbRadarTime").textContent = Ge(new Date(b.time * 1e3), i == null ? void 0 : i()) + (b.past ? "" : " · " + gt.forecastTag);
  }
  function Ze() {
    D.querySelectorAll(".wbRadarMap").forEach((s) => {
      if (!s._frames) return;
      if (Date.now() - s._built > rf) {
        wo(s);
        return;
      }
      if (Ie != null && Ie.matches) return;
      if (s._hold > 0) {
        s._hold -= Xd;
        return;
      }
      const h = s._frames.length - 1, m = s._frames.findLastIndex((L) => L.past), b = s._i >= h ? 0 : s._i + 1;
      xi(s, b), (b === m || b === h) && (s._hold = Im);
    });
  }
  const vo = () => D.querySelectorAll(".wbRadarImg").forEach((s) => {
    const h = s.dataset.src;
    s.src = h + (h.includes("?") ? "&" : "?") + "hc=" + Date.now();
  }), Ca = typeof MutationObserver == "function" ? new MutationObserver(() => D.querySelectorAll(".wbRadarMap").forEach((s) => {
    s._tiles && wo(s);
  })) : null, Gn = D.closest("#app");
  Gn && (Ca == null || Ca.observe(Gn, { attributes: !0, attributeFilter: ["class"] }));
  const Ie = (Dr = window.matchMedia) == null ? void 0 : Dr.call(window, "(prefers-reduced-motion: reduce)"), ki = () => {
    Ko(), jn(performance.now());
  };
  (Er = Ie == null ? void 0 : Ie.addEventListener) == null || Er.call(Ie, "change", ki);
  const Mi = [
    setInterval(() => {
      Ft = /* @__PURE__ */ new Date(), Oe(!0);
    }, Pm),
    setInterval(() => {
      q = /* @__PURE__ */ new Date(), Oe(!0);
    }, Hm),
    setInterval(fa, Em),
    setInterval(Ze, Xd),
    setInterval(vo, qe)
  ];
  return Oe(!0), Ko(), {
    update() {
      Oe(!1);
    },
    // a choice in Settings changed (Next hours' window)
    refresh() {
      Oe(!0);
    },
    setStyle(s) {
      !s || s === p || (p = s, D.dataset.style = p, G.dataset.style = p, Oe(!0), Ko());
    },
    destroy() {
      var s;
      cancelAnimationFrame(qa), D.removeEventListener("pointermove", vi), D.removeEventListener("pointerleave", yi), nt = !0, Mi.forEach(clearInterval), bt && cancelAnimationFrame(bt), bt = 0, Qa == null || Qa.disconnect(), $o == null || $o.disconnect(), Ca == null || Ca.disconnect(), (s = Ie == null ? void 0 : Ie.removeEventListener) == null || s.call(Ie, "change", ki), wi(), D.removeEventListener("click", zn), D.removeEventListener("change", Ye), D.removeEventListener("keydown", Xo), D.removeEventListener("mousedown", bi), G.removeEventListener("click", zn), G.removeEventListener("change", Ye), G.removeEventListener("keydown", Xo), ["daily", "hourly"].forEach(vt), D.remove(), G.remove();
    }
  };
}
const ti = "#E1E1E1", up = "#F7F4F0", Vl = "#03a9f4", ee = 14, ae = 172;
let C0 = 0;
const ye = (n) => Math.round(n * 100) / 100, lo = (n, i, d) => Math.max(i, Math.min(d, n)), Vo = (n, i, d, p, g, y) => '<rect x="' + ye(n) + '" y="' + ye(i) + '" width="' + ye(d) + '" height="' + ye(p) + '" fill="' + g + '"' + (y != null ? ' opacity="' + y + '"' : "") + "/>", jl = (n) => n.map((i, d) => (d ? "L" : "M") + ye(i[0]) + " " + ye(i[1])).join("");
function zl(n) {
  const i = (n == null ? void 0 : n.attributes) || {};
  return i.device_class === "curtain" ? "curtain" : i.device_class === "blind" || i.current_tilt_position != null ? "venetian" : "blind";
}
const an = [
  [2, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]],
  [6.5, ["#0B0F1C", "#2E7FD6", "#F2743B", "#F1B6C8", 0.95]],
  [9.5, ["#8FC4EC", "#4DA3E8", "#F4FAFF", "#2F7FCF", 0.7]],
  [13, ["#9ED3F6", "#3F97E6", "#FFFFFF", "#2B86D9", 0.65]],
  [17, ["#9FC2E4", "#4A8ED4", "#FFD9B8", "#5E8FD6", 0.75]],
  [19, ["#4B5E86", "#3B86E0", "#FF6A3D", "#B07CE8", 0.95]],
  [21.5, ["#1A2140", "#1F3F7A", "#B4506E", "#3E59A6", 0.8]],
  [26, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]]
];
function A0(n) {
  const i = n < 2 ? n + 24 : n;
  let d = an[0], p = an[an.length - 1];
  for (let T = 0; T < an.length - 1; T++) if (i >= an[T][0] && i <= an[T + 1][0]) {
    d = an[T], p = an[T + 1];
    break;
  }
  const g = (i - d[0]) / (p[0] - d[0]), y = g * g * (3 - 2 * g), w = (T, V) => {
    const k = parseInt(T.slice(1), 16), D = parseInt(V.slice(1), 16);
    return "#" + [16, 8, 0].map((O) => Math.round((k >> O & 255) + ((D >> O & 255) - (k >> O & 255)) * y).toString(16).padStart(2, "0")).join("");
  };
  return { top: w(d[1][0], p[1][0]), bot: w(d[1][1], p[1][1]), warm: w(d[1][2], p[1][2]), cool: w(d[1][3], p[1][3]), op: d[1][4] + (p[1][4] - d[1][4]) * y, t: i };
}
function T0(n) {
  const i = parseInt(n.slice(1), 16), d = (i >> 16 & 255) / 255, p = (i >> 8 & 255) / 255, g = (i & 255) / 255, y = Math.max(d, p, g), w = Math.min(d, p, g);
  let T = 0, V = 0;
  const k = (y + w) / 2;
  if (y !== w) {
    const D = y - w;
    V = k > 0.5 ? D / (2 - y - w) : D / (y + w), T = (y === d ? (p - g) / D + (p < g ? 6 : 0) : y === p ? (g - d) / D + 2 : (d - p) / D + 4) / 6;
  }
  return [T * 360, V * 100, k * 100];
}
function yf(n, i, d) {
  i = lo(i, 0, 100) / 100, d = lo(d, 0, 100) / 100;
  const p = (w) => (w + n / 30) % 12, g = i * Math.min(d, 1 - d), y = (w) => d - g * Math.max(-1, Math.min(p(w) - 3, Math.min(9 - p(w), 1)));
  return "#" + [y(0), y(8), y(4)].map((w) => Math.round(w * 255).toString(16).padStart(2, "0")).join("");
}
const [xf, kf, Mf] = T0(ti), hp = yf(xf, kf, Math.max(6, Mf - 14)), L0 = yf(xf, kf, Math.min(96, Mf + 16));
function D0(n, i, d, p, g) {
  const y = ae / 2, w = ae * 0.12, T = y - (y - w) * n, V = (et) => et ** 1.3, k = lo(d, -1.5, 1.5), D = (et) => -(Math.abs(k) * 4.6 * et ** 1.5) * Math.sign(k), O = n * 1.4, G = (et, at) => {
    const X = Math.min(4.8, Math.abs(d) * 2.6) * (at ? 1 : -1) * Math.sign(d || 1), N = at ? et + T : et, nt = at ? et : et + T, ct = (xt) => N + D(xt) + X * Math.sin(xt * Math.PI * 1.2 + p) * V(xt) * 1.4 + O * Math.sin(xt * Math.PI * 2 + p * 0.6) * V(xt) * (at ? 1 : -1), bt = [[nt, ee]];
    for (let xt = 0; xt <= 12; xt++) bt.push([ct(xt / 12), ee + ae * xt / 12]);
    bt.push([nt, ee + ae]);
    let it = '<path d="' + jl(bt) + 'Z" fill="' + ti + '"/>';
    if (g) return it;
    const K = 1.35 + ((at ? d > 0 : d < 0) ? 0.35 : 0), Y = (xt) => {
      const Pt = xt / 7, lt = at ? 1 - Pt : Pt, U = (1 - lt) ** 1.3, Ft = et + T * Pt;
      return Array.from({ length: 13 }, (q, Q) => {
        const A = Q / 12;
        return [Ft + D(A) * U + X * K * Math.sin(A * Math.PI * 1.2 + p - lt * 3.2) * V(A) * 1.4 * U + O * 1.6 * Math.sin(A * Math.PI * 2 + p * 0.6 - lt * 2.5) * V(A) * n * (0.4 + 0.6 * U), ee + ae * A];
      });
    }, H = [1, 2, 3, 4, 5, 6].map(Y);
    for (let xt = 0; xt < 6; xt += 2) it += '<path d="' + jl(H[xt]) + jl(H[xt + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return it;
  }, J = y - (y - w) * i;
  return { body: G(ee, !0) + G(ee + ae - T, !1), rails: [{ x: ee + J - 4, y: ee, w: 4, h: ae }, { x: ee + ae - J, y: ee, w: 4, h: ae }], head: 6.4 };
}
function E0(n, i, d) {
  const p = ae * (1 - n);
  let g = "";
  if (p > 1 && (g += Vo(ee, ee, ae, p, ti), !d))
    for (let y = 1; y < 7; y += 2) g += Vo(ee + ae * y / 7, ee, ae / 7, p, "#fff");
  return { body: g, rails: [{ x: ee, y: ee + ae * (1 - i) - 7, w: ae, h: 11 }], head: 10.4 };
}
function B0(n, i, d, p) {
  const g = 9 - 7 * (d / 100), y = ee + ae * (1 - n), w = Math.ceil(ae / 10) + 1, T = ee + g / 2, V = (ee + ae - g / 2 - T) / (w - 1), k = 0.8, D = 0.6, O = Array.from({ length: w }, (et, at) => Math.max(T + at * D, Math.min(T + at * V, y - g / 2 - (w - 1 - at) * D))), G = O.slice(0, -1).map((et, at) => lo((O[at + 1] - et - D) / (V - D), 0, 1));
  G.push(G[w - 2]);
  let J = "";
  return O.forEach((et, at) => {
    const X = k + (g - k) * G[at], N = Math.max(0.5, X / 2), nt = Math.max(0.4, X * 0.114);
    J += Vo(ee, et - N, ae, Math.max(1, X), ti), !p && X > 2.2 && (J += Vo(ee, et + N - nt, ae, nt, hp) + Vo(ee, et - N, ae, nt * 0.55, L0, 0.75));
  }), p || [0.22, 0.78].forEach((et) => {
    J += Vo(ee + ae * et - 0.7, ee, 1.4, Math.max(0, O[w - 1] + 1 - ee), hp, 0.85);
  }), { body: J, rails: [{ x: ee, y: ee + ae * (1 - i) - 8, w: ae, h: 8 }], head: 8.8 };
}
const mp = (n, i, d, p, g, y, w) => n === "curtain" ? D0(i, d, g, y, w) : n === "venetian" ? B0(i, d, p, w) : E0(i, d, w);
function R0(n, i) {
  let d = "", p = "";
  return i.forEach((g) => {
    const y = g.w > g.h, w = lo(y ? ee + ae / 2 : g.x + g.w / 2, 17, 183), T = lo(y ? g.y + g.h / 2 : ee + ae / 2, 17, 183);
    d += y ? Vo(ee, lo(g.y + g.h / 2, ee, ee + ae) - 1, ae, 2, Vl) : Vo(lo(g.x + g.w / 2, ee, ee + ae) - 1, ee, 2, ae, Vl);
    const V = y ? "M" + ye(w - 4) + " " + ye(T - 3) + "l4 -3l4 3M" + ye(w - 4) + " " + ye(T + 3) + "l4 3l4 -3" : "M" + ye(w - 3) + " " + ye(T - 4) + "l-3 4l3 4M" + ye(w + 3) + " " + ye(T - 4) + "l3 4l-3 4";
    p += '<circle cx="' + ye(w) + '" cy="' + ye(T) + '" r="11" fill="' + Vl + '" filter="url(#' + n + 's)"/><path d="' + V + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: d, knobs: p };
}
function P0(n, i) {
  const d = /* @__PURE__ */ new Date(), p = A0(d.getHours() + d.getMinutes() / 60), g = 42 + 18 * Math.sin(p.t * 0.5), y = p.t >= 5 && p.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (p.t - 5) / 15) : 80, w = mp(i.kind, i.pos / 100, i.bar / 100, i.tilt, i.vel, i.ph, !1), T = i.ghostAlpha > 4e-3 && i.ghost != null ? mp(i.kind, i.ghost / 100, i.ghost / 100, i.tilt, 0, 0, !0).body : "", V = i.grip > 4e-3 ? R0(n, w.rails) : null, k = (D) => Vo(ee, ee, ae, ae, D);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + n + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + n + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + p.top + '"/><stop offset="1" stop-color="' + p.bot + '"/></linearGradient><radialGradient id="' + n + 'w" cx="' + ye(g) + '%" cy="' + ye(y) + '%" r="58%"><stop offset="0" stop-color="' + p.warm + '" stop-opacity="' + ye(p.op * 0.8) + '"/><stop offset="1" stop-color="' + p.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + n + 'k" cx="' + ye(100 - g * 0.8) + '%" cy="' + ye(100 - y * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + p.cool + '" stop-opacity="' + ye(p.op * 0.64) + '"/><stop offset="1" stop-color="' + p.cool + '" stop-opacity="0"/></radialGradient><filter id="' + n + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + up + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + n + 'c)">' + k("url(#" + n + "l)") + k("url(#" + n + "w)") + k("url(#" + n + "k)") + (T ? '<g opacity="' + ye(i.ghostAlpha) + '">' + T + "</g>" : "") + w.body + '<rect x="14" y="14" width="172" height="' + w.head + '" fill="' + ti + '" filter="url(#' + n + 's)"/></g>' + (V ? '<g clip-path="url(#' + n + 'c)" opacity="' + ye(i.grip) + '">' + V.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + up + '" stroke-width="3"/>' + (V ? '<g opacity="' + ye(i.grip) + '">' + V.knobs + "</g>" : "") + "</svg>";
}
function H0({ onMove: n, onSet: i }) {
  var it;
  const d = "cv" + ++C0, p = document.createElement("div");
  p.className = "tfCoverArt";
  const g = (it = window.matchMedia) == null ? void 0 : it.call(window, "(pointer: coarse)").matches;
  let y = null;
  const w = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let T = 0, V = !1, k = !1, D = null, O = 0, G = 0;
  const J = () => (y == null ? void 0 : y.kind) === "curtain" ? "x" : "y", et = () => D || V || k || y.moving || y.target != null ? 1 : g ? performance.now() < G ? 1 : 0.4 : 0, at = () => {
    p.innerHTML = P0(d, { kind: y.kind, pos: w.pos, bar: y.target ?? w.pos, tilt: w.tilt, vel: w.vel, ph: w.ph, ghost: w.gpos, ghostAlpha: w.ghost, grip: w.grip });
  };
  function X(K) {
    T = 0;
    const Y = w.last ? Math.min(0.064, (K - w.last) / 1e3) : 1 / 60, H = Y * 60;
    w.last = K;
    const xt = y.pos - w.pos, Pt = w.pos;
    w.pos += Math.sign(xt) * Math.min(Math.abs(xt), Math.max(10.5, Math.abs(xt) * 1.4) * Y), Math.abs(y.pos - w.pos) < 0.03 && (w.pos = y.pos), w.vel = w.vel * 0.86 + (w.pos - Pt) / H * 0.14, Math.abs(w.vel) < 0.015 && w.pos === y.pos && (w.vel = 0), (w.pos !== Pt || w.vel) && (w.ph += (0.06 + Math.abs(w.vel) * 0.03) * H);
    const lt = y.tilt - w.tilt;
    w.tilt += Math.sign(lt) * Math.min(Math.abs(lt), Math.max(60, Math.abs(lt) * 4) * Y);
    const U = et();
    w.grip += (U - w.grip) * Math.min(1, Y * (U > w.grip ? 11 : 3.5)), Math.abs(U - w.grip) < 0.01 && (w.grip = U);
    const Ft = y.target != null && Math.abs(y.target - w.pos) > 0.5 ? 0.22 : 0;
    y.target != null && (w.gpos = y.target), w.ghost += (Ft - w.ghost) * Math.min(1, Y * (Ft > w.ghost ? 16 : 3)), Math.abs(Ft - w.ghost) < 4e-3 && (w.ghost = Ft), at(), w.pos !== y.pos || w.vel || w.tilt !== y.tilt || w.grip !== U || w.ghost !== Ft ? T = requestAnimationFrame(X) : w.last = 0;
  }
  const N = () => {
    y && !T && (T = requestAnimationFrame(X));
  }, nt = setInterval(() => {
    y && !T && at();
  }, 60 * 1e3), ct = (K) => {
    const Y = p.getBoundingClientRect();
    return J() === "x" ? (K.clientX - Y.left) / Y.width : (K.clientY - Y.top) / Y.height;
  };
  p.addEventListener("pointerdown", (K) => {
    var xt;
    if (!(y != null && y.canSet) || K.button > 0) return;
    K.preventDefault(), (xt = p.setPointerCapture) == null || xt.call(p, K.pointerId);
    const Y = y.target ?? y.pos, H = p.getBoundingClientRect();
    D = { p0: ct(K), from: Y, x0: K.clientX, value: null, side: null }, y.kind === "curtain" && Y > 0 && (D.side = (K.clientX - H.left) / H.width < 0.5 ? "L" : "R"), N();
  }), p.addEventListener("pointermove", (K) => {
    if (!D) return;
    let Y;
    if (y.kind === "curtain") {
      if (!D.side) {
        const xt = K.clientX - D.x0;
        if (Math.abs(xt) < 4) return;
        D.side = xt < 0 ? "L" : "R";
      }
      const H = (ae / 2 - ae * 0.12) / 200;
      Y = D.from + (D.side === "L" ? -1 : 1) * ((ct(K) - D.p0) / H) * 100;
    } else Y = D.from - (ct(K) - D.p0) / (ae / 200) * 100;
    D.value = lo(Y, 0, 100), n(D.value);
  });
  const bt = () => {
    if (!D) return;
    const K = D.value;
    D = null, K != null && i(Math.round(K)), N();
  };
  return p.addEventListener("pointerup", bt), p.addEventListener("pointercancel", bt), p.addEventListener("lostpointercapture", bt), p.addEventListener("pointerenter", () => {
    V = !0, N();
  }), p.addEventListener("pointerleave", () => {
    V = !1, N();
  }), p.addEventListener("focus", () => {
    k = p.matches(":focus-visible"), N();
  }), p.addEventListener("blur", () => {
    k = !1, N();
  }), p.addEventListener("keydown", (K) => {
    if (!(y != null && y.canSet)) return;
    const Y = Math.round(y.target ?? y.pos), H = K.shiftKey ? 10 : 1, xt = { ArrowUp: Y + H, ArrowRight: Y + H, ArrowDown: Y - H, ArrowLeft: Y - H, PageUp: Y + 25, PageDown: Y - 25, Home: 0, End: 100 }[K.key];
    if (xt == null) return;
    K.preventDefault();
    const Pt = lo(xt, 0, 100);
    n(Pt), clearTimeout(O), O = setTimeout(() => i(Pt), 500);
  }), {
    el: p,
    update(K) {
      const Y = !y;
      y = K, Y && (w.pos = y.pos, w.tilt = y.tilt, G = performance.now() + 1500, g && setTimeout(N, 1600)), p.classList.toggle("x", J() === "x"), p.classList.toggle("y", J() === "y"), y.canSet ? (p.tabIndex = 0, p.setAttribute("role", "slider"), p.setAttribute("aria-valuemin", "0"), p.setAttribute("aria-valuemax", "100"), p.setAttribute("aria-valuenow", String(Math.round(y.target ?? y.pos))), p.setAttribute("aria-orientation", J() === "x" ? "horizontal" : "vertical")) : p.setAttribute("role", "img"), p.setAttribute("aria-label", y.name + (y.canSet ? " position" : "")), p.setAttribute("aria-valuetext", y.text), N();
    },
    destroy() {
      cancelAnimationFrame(T), T = 0, clearInterval(nt), clearTimeout(O), p.remove();
    }
  };
}
const gp = "homecore-density", ro = {
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
}, F = (n) => String(n ?? "").replace(/[&<>"']/g, (i) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[i]), bp = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', Gl = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', wp = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', es = {
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h2v12H6zM9.5 12L18 18V6z"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>'
}, vp = {
  down: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 11h14v2H5z"/></svg>',
  up: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z"/></svg>'
}, yp = 1, N0 = 4, xp = 16, kp = 32, O0 = 128, I0 = 256, Mp = 16384, Sp = 1, _p = 2, Ul = 4, Cp = 8, F0 = {
  open: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/></svg>',
  stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5" fill="currentColor"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l5 5-5 5"/><path d="M21 7l-5 5 5 5"/></svg>'
}, Ap = { curtain: ["mdi:curtains", "mdi:curtains-closed"], blind: ["mdi:roller-shade", "mdi:roller-shade-closed"], venetian: ["mdi:blinds-horizontal", "mdi:blinds-horizontal-closed"] }, q0 = { curtain: "curtains", blind: "blind", venetian: "blinds" }, Xr = {
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
}, Tp = ["covers", "people", "openings", "leaks", "vacuum"], Lp = "homecore_house", Dp = "homecore-house-used", $r = ["switch", "fan", "input_boolean", "automation"], Ep = "homecore-house-look", W0 = [["look", "Look"], ["house", "House page"], ["weather", "Weather"]], V0 = [["popup", "Popup"], ["sheet", "Sheet"]], j0 = [["auto", "Automatic"], ["cut", "Cut short"], ["wrap", "Two lines"], ["scroll", "Scroll"]], z0 = [["day", "Daytime 06–22"], ["waking", "Waking 07–23"], ["all", "All day"]], G0 = [["bitmap", "Pixel"], ["onebit", "1-bit"], ["smooth", "Smooth"], ["line", "Line"]], Jr = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', U0 = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', Y0 = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>', Bp = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"/></svg>', Yl = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>', ca = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 13C6.14 13 4.59 14.28 4.14 16H2V18H4.14C4.59 19.72 6.14 21 8 21S11.41 19.72 11.86 18H22V16H11.86C11.41 14.28 9.86 13 8 13M8 19C6.9 19 6 18.1 6 17C6 15.9 6.9 15 8 15S10 15.9 10 17C10 18.1 9.1 19 8 19M19.86 6C19.41 4.28 17.86 3 16 3S12.59 4.28 12.14 6H2V8H12.14C12.59 9.72 14.14 11 16 11S19.41 9.72 19.86 8H22V6H19.86M16 9C14.9 9 14 8.1 14 7C14 5.9 14.9 5 16 5S18 5.9 18 7C18 8.1 17.1 9 16 9Z"/></svg>', Zl = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"/></svg>', as = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/></svg>', Kl = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', Sf = (n) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + n.map((i) => '<path d="' + i + '"/>').join("") + "</svg>", os = Sf(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), Rp = Sf(["M20 6L9 17L4 12"]), io = (n, i = "") => '<span class="tfAreaGlyph" data-icon-for="' + F(n || "") + '"' + (i ? ' data-icon-name="' + F(i) + '"' : "") + "></span>", Z0 = (n) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (n ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', Pp = 1, Hp = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], Np = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, ns = ["door", "window", "garage_door", "opening"], Op = { moisture: ["detected water", "dry"], smoke: ["detected smoke", "clear"], gas: ["detected gas", "clear"], carbon_monoxide: ["detected carbon monoxide", "clear"], safety: ["became unsafe", "safe"] }, cr = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve", "water_heater"], K0 = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], X0 = 10, $0 = 20, J0 = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, Q0 = ["living room", "bedroom", "office"];
function tg(n, { config: i, getHass: d }) {
  var _d, Cd, Ad;
  const p = (t) => n.getElementById(t), g = p("app"), y = i || {}, w = String(y.layout || "").toLowerCase().replace("_", "-") === "test-focus", T = String(y.page || "").toLowerCase() === "overview";
  let V = ro.get(gp) === "1", k = {};
  const D = (t) => {
    var e;
    return (e = d()) == null ? void 0 : e.callWS(t);
  }, O = (t, e, a) => D({ type: "call_service", domain: t, service: e, service_data: a }), G = n.querySelector("#appearancePane .toggleList");
  G && !p("densityToggle") && (G.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), p("densityToggle").addEventListener("click", () => {
    V = !V, ro.set(gp, V ? "1" : "0"), Y();
  }));
  const J = [
    ["weather", "Weather", "The forecast under Home.", (t) => t.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (t) => t.startsWith("sensor.") && zt(t).device_class === "power" && /^(W|kW)$/.test(zt(t).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm in the Security popup.", (t) => t.startsWith("alarm_control_panel.")]
  ], et = (t, e, a, o) => '<div class="themeChoice" id="' + t + '" role="group" aria-label="' + e + '">' + o.map(([r, l]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + a + '="' + r + '">' + l + "</button>").join("") + "</div>", at = (t, e, a, o) => '<div class="toggleRow"' + (o ? ' id="' + o + '"' : "") + "><div><strong>" + t + "</strong>" + (e ? '<div class="status">' + e + "</div>" : "") + "</div>" + a + "</div>";
  function X() {
    var R, E;
    if (!w || p("housePane")) return;
    const t = p("settingsView");
    t.querySelector(".settingsTitle").textContent = "HomeCore settings";
    const e = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], a = (B, M) => '<div class="houseTab' + (B === "look" ? " active" : "") + '" data-house-pane="' + B + '"><section class="card">' + M + "</section></div>";
    t.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + e.map(([B, M]) => '<button class="tab segBtn' + (B === "look" ? " active" : "") + '" type="button" data-house-tab="' + B + '">' + M + "</button>").join("") + "</div>" + // Appearance in groups (Matt, 8 Nov), each one's title inside its card as a card header (Matt, 9 Nov)
    a("look", W0.map(([B, M]) => '<div class="tfSetGroup"><div class="toggleList" data-look-group="' + B + '"><div class="tfCardTitle">' + M + "</div></div></div>").join("")) + // Lights as cards by default, with a Cards | Table choice (Matt, 9 Nov)
    a("lights", '<div class="tfLightView"><div class="themeChoice" role="group" aria-label="Show lights as"><button class="wxLayoutBtn" type="button" data-light-view="cards">Cards</button><button class="wxLayoutBtn" type="button" data-light-view="table">Table</button></div></div><p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div><div class="tfLightCards" id="lightCards"></div>') + a("sources", '<div class="toggleList">' + J.map(([B, M, P]) => at(M, P, '<select class="settingsSelect" data-source="' + B + '" aria-label="' + M + '"></select>')).join("") + "</div>") + a("sums", '<div class="toggleList">' + Object.entries(Xr).map(([B, M]) => at(M.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + B + '" aria-label="' + M.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const o = (B) => t.querySelector('[data-look-group="' + B + '"]'), r = (B) => B == null ? void 0 : B.closest(".toggleRow");
    [r(t.querySelector(".themeBtn"))].forEach((B) => B && o("look").appendChild(B));
    const l = r(p("densityToggle"));
    l && (l.hidden = !0), [r(p("moreInfoChoice")), r(p("namesChoice"))].forEach((B) => B && o("house").appendChild(B)), o("house").insertAdjacentHTML("beforeend", at("Lights", "How lights show on the house page.", et("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + at("Pad", "What the Dual Axis Controller’s pad sets on its tile.", et("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow")), [r(p("hoursChoice")), r(p("wxStyleChoice"))].forEach((B) => B && o("weather").appendChild(B));
    const c = p("housePane"), f = c.querySelector(".houseTabs"), u = f.querySelector(".rubberIndicator"), v = "homecore-light-view", S = (B) => {
      c.classList.toggle("tfLightCardsOn", B === "cards"), c.querySelectorAll("[data-light-view]").forEach((M) => M.setAttribute("aria-pressed", String(M.dataset.lightView === B))), ro.set(v, B);
    };
    S(ro.get(v) === "table" ? "table" : "cards"), c.querySelector(".tfLightView").addEventListener("click", (B) => {
      const M = B.target.closest("[data-light-view]");
      M && S(M.dataset.lightView);
    }), new ResizeObserver(() => nt()).observe(c), (E = (R = document.fonts) == null ? void 0 : R.ready) == null || E.then(() => nt());
    const x = (B) => {
      const M = f.querySelector(".tab.active");
      u.style.transition = "none", B ? ss(u, u.offsetLeft, u.offsetWidth, M.offsetLeft, M.offsetWidth) : (u.style.left = M.offsetLeft + "px", u.style.width = M.offsetWidth + "px");
    };
    new ResizeObserver(() => x(!1)).observe(f), c.addEventListener("click", (B) => {
      const M = B.target.closest("[data-house-tab]");
      if (M) {
        f.querySelectorAll(".tab").forEach((C) => C.classList.toggle("active", C === M)), c.querySelectorAll(".houseTab").forEach((C) => C.classList.toggle("active", C.dataset.housePane === M.dataset.houseTab)), M.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), x(!0), nt();
        return;
      }
      const P = B.target.closest("[data-light-fav]");
      if (P) {
        ko(P.dataset.lightFav);
        return;
      }
      const _ = B.target.closest("[data-light-pick]");
      if (_) {
        const [C, rt] = _.dataset.lightPick.split("|"), Tt = { ...Xt[C] };
        _.dataset.v ? Tt[rt] = _.dataset.v : delete Tt[rt], Xt[C] = Tt, po(), [...Ye.keys()].filter((Bt) => Bt.endsWith(":" + rt)).forEach((Bt) => Ye.delete(Bt)), za();
        return;
      }
      const j = B.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!j || j.disabled)) {
        if (j.dataset.lights && (Xt.lights = j.dataset.lights), j.dataset.dacPad && (Xt.dacPad = j.dataset.dacPad), (j.dataset.lights || j.dataset.dacPad) && (po(), Ye.clear()), j.dataset.sumToggle) {
          const C = j.dataset.sumToggle, rt = new Set(wt.hiddenSums || []);
          rt.has(C) ? rt.delete(C) : rt.add(C), wt = { ...wt, hiddenSums: [...rt] }, xa();
        }
        za();
      }
    }), c.addEventListener("change", (B) => {
      const M = B.target;
      M.dataset.source && (wt = { ...wt, sources: { ...wt.sources || {}, [M.dataset.source]: M.value || void 0 } }, xa());
      const P = M.dataset.lightStyle || M.dataset.lightPad;
      if (P) {
        const _ = M.dataset.lightStyle ? "lightStyles" : "lightPads", j = { ...Xt[_] };
        M.value ? j[P] = M.value : delete j[P], Xt[_] = j, po(), [...Ye.keys()].filter((C) => C.endsWith(":" + P)).forEach((C) => Ye.delete(C));
      }
      za();
    });
  }
  function N() {
    var x, R;
    Lr() && wi();
    const t = p("housePane");
    if (!t) return;
    const e = !!customElements.get(Ue);
    t.querySelectorAll("[data-lights]").forEach((E) => E.setAttribute("aria-pressed", String(E.dataset.lights === Xt.lights))), p("lightsRow").querySelector(".status").textContent = e || !Lr() ? "How lights show on the house page." : fn === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", t.querySelectorAll("[data-dac-pad]").forEach((E) => E.setAttribute("aria-pressed", String(E.dataset.dacPad === Xt.dacPad))), p("dacPadRow").hidden = !Lr();
    for (const E of t.querySelectorAll("[data-source]")) {
      if (E === n.activeElement) continue;
      const [B] = J.find(([P]) => P === E.dataset.source), M = Object.keys(k).filter(J.find(([P]) => P === B)[3]).sort((P, _) => ht(P).localeCompare(ht(_)));
      E.dataset.sig !== M.join(",") && (E.innerHTML = '<option value="">Automatic</option>' + M.map((P) => '<option value="' + F(P) + '">' + F(ht(P)) + "</option>").join(""), E.dataset.sig = M.join(",")), E.value = M.includes((x = wt.sources) == null ? void 0 : x[B]) ? wt.sources[B] : "";
    }
    t.querySelectorAll("[data-sum-toggle]").forEach((E) => {
      const B = !(wt.hiddenSums || []).includes(E.dataset.sumToggle);
      E.classList.toggle("on", B), E.setAttribute("aria-checked", String(B));
    });
    const a = p("lightRows"), o = p("lightCards"), r = n.activeElement, l = a != null && a.contains(r) || o != null && o.contains(r) ? r : null;
    if (!a || l != null && l.matches("select")) {
      nt();
      return;
    }
    const c = new Set(St()), f = (E, B, M, P) => '<option value="' + E + '"' + (E === M ? " selected" : "") + ">" + B + "</option>", u = Object.keys(k).filter((E) => E.startsWith("light.")).sort((E, B) => !we.get(E) - !we.get(B) || (we.get(E) || "").localeCompare(we.get(B) || "") || ht(E).localeCompare(ht(B))).map((E) => {
      const B = Xt.lightStyles[E] || "", M = Xt.lightPads[E] || "", P = c.has(E), _ = F(ht(E));
      return "<tr><td><strong>" + _ + "</strong></td><td>" + F(we.get(E) || "—") + "</td><td>" + F(He(E)) + '</td><td class="metaSwitchCol"><button class="switch' + (P ? " on" : "") + '" type="button" role="switch" aria-checked="' + P + '" data-light-fav="' + F(E) + '" aria-label="' + _ + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + F(E) + '" aria-label="' + _ + ' tile">' + f("", "Default", B) + f("tile", "HomeCore tile", B) + f("dac", "Dual Axis Controller", B) + '</select></td><td><select class="settingsSelect" data-light-pad="' + F(E) + '" aria-label="' + _ + ' pad"' + (un(E) ? "" : " disabled") + ">" + f("", "Default", M) + f("temperature", "Temperature", M) + f("colour", "Colour", M) + "</select></td></tr>";
    }).join(""), v = (E, B, M, P, _) => '<div class="themeChoice" role="group" aria-label="' + M + '">' + P.map(([j, C]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (j === _) + '" data-light-pick="' + E + "|" + F(B) + '" data-v="' + j + '">' + C + "</button>").join("") + "</div>", S = Object.keys(k).filter((E) => E.startsWith("light.")).sort((E, B) => !we.get(E) - !we.get(B) || (we.get(E) || "").localeCompare(we.get(B) || "") || ht(E).localeCompare(ht(B))).map((E) => {
      const B = c.has(E), M = F(ht(E)), P = [we.get(E), He(E)].filter(Boolean).map(F).join(" · ");
      return '<div class="toggleList"><div class="toggleRow"><div><strong>' + M + '</strong><div class="status">' + P + "</div></div></div>" + at("Favourite", "", '<button class="switch' + (B ? " on" : "") + '" type="button" role="switch" aria-checked="' + B + '" data-light-fav="' + F(E) + '" aria-label="' + M + ' is a favourite"></button>') + at("Tile", "", v("lightStyles", E, M + " tile", [["", "Default"], ["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]], Xt.lightStyles[E] || "")) + (un(E) ? at("Pad", "", v("lightPads", E, M + " pad", [["", "Default"], ["temperature", "Temperature"], ["colour", "Colour"]], Xt.lightPads[E] || "")) : "") + "</div>";
    }).join("");
    a.dataset.html !== u && (a.innerHTML = u, a.dataset.html = u), o.dataset.html !== S && (o.innerHTML = S, o.dataset.html = S), l != null && l.dataset.lightFav && ((R = (o.contains(l) ? o : a).querySelector('[data-light-fav="' + CSS.escape(l.dataset.lightFav) + '"]')) == null || R.focus({ preventScroll: !0 })), nt();
  }
  function nt() {
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
            c.innerHTML = l.map((R, E) => '<option value="' + E + '"' + (R.disabled ? " disabled" : "") + ">" + F(R.textContent) + "</option>").join("");
            const x = l.findIndex((R) => R.getAttribute("aria-pressed") === "true" || R.classList.contains("active"));
            x >= 0 && (c.value = String(x));
          };
          new MutationObserver(S).observe(r, { subtree: !0, attributes: !0, attributeFilter: ["aria-pressed", "class", "disabled"] }), S();
        }
        const f = (S) => {
          r.hidden !== !S && (r.hidden = !S), c.hidden !== S && (c.hidden = S);
        };
        if (l.length > 3) {
          f(!1);
          continue;
        }
        if (!r.getClientRects().length && !c.getClientRects().length) {
          c.dataset.fit || f(!0);
          continue;
        }
        const u = r.hidden;
        r.hidden = !1;
        const v = l.every((S) => S.scrollWidth <= S.clientWidth + 1);
        r.hidden = u, f(v), c.dataset.fit = "1";
      }
  }
  const ct = document.createElement("div");
  ct.className = "densityBadge", ct.setAttribute("aria-live", "polite"), ct.hidden = !0, g.appendChild(ct);
  let bt = 0;
  function it() {
    if (!V) return;
    const t = p("homeView"), e = (l) => l.offsetParent !== null && !l.closest("[hidden]");
    t.querySelectorAll(":scope .card, :scope .tfAction").forEach((l) => {
      e(l) && (l.dataset.h = Math.round(l.getBoundingClientRect().height) + " px");
    });
    const a = [...t.querySelectorAll(".activityRow, .tfAction, .wxNow")].filter(e), o = window.innerHeight, r = a.filter((l) => {
      const c = l.getBoundingClientRect();
      return c.height > 0 && c.top >= 0 && c.bottom <= o + 0.5;
    }).length;
    ct.hidden = !t.classList.contains("active"), ct.innerHTML = "<b>" + r + "</b><small>of " + a.length + " readings on screen</small>";
  }
  const K = () => {
    V && requestAnimationFrame(it);
  };
  function Y() {
    var t;
    g.classList.toggle("showDensity", V), (t = p("densityToggle")) == null || t.classList.toggle("on", V), ct.hidden = !V, clearInterval(bt), V && (bt = setInterval(it, 1e3), it());
  }
  window.addEventListener("scroll", K, { capture: !0, passive: !0 }), window.addEventListener("resize", K, { passive: !0 });
  const H = n.querySelector("#homeView .grid"), xt = document.createElement("style");
  n.appendChild(xt);
  const Pt = new ResizeObserver(() => Ft()), lt = /* @__PURE__ */ new Set(), U = (t) => {
    const e = t.getBoundingClientRect().height;
    return Math.abs(e - t.offsetHeight) < 1 ? e : t.offsetHeight;
  };
  function Ft() {
    const t = g.classList.contains("tfAreaOpen") && !g.classList.contains("tfWeatherOpen");
    if (H.classList.toggle("tfStack", t), lt.forEach((u) => {
      (!t || !u.isConnected) && (Pt.unobserve(u), lt.delete(u));
    }), !t) {
      xt.textContent = "";
      return;
    }
    const e = getComputedStyle(H), a = parseFloat(e.columnGap) || 0, o = e.gridTemplateColumns.split(" ").length, r = [...H.children].filter((u) => u.dataset.k && u.offsetParent);
    xt.disabled = !0;
    const l = r.map((u) => {
      const v = getComputedStyle(u), S = /span (\d+)/.exec(v.gridColumnStart + " " + v.gridColumnEnd);
      return Math.min(o, S ? +S[1] : v.gridColumnEnd === "-1" ? o : 1);
    });
    xt.disabled = !1;
    let c = 0;
    const f = r.map((u, v) => {
      lt.has(u) || (lt.add(u), Pt.observe(u));
      const S = l[v];
      c + S > o && (c = 0);
      const x = c + 1;
      return c = (c + S) % o, '#homeView .grid.tfStack>[data-k="' + CSS.escape(u.dataset.k) + '"]{grid-column:' + x + " / span " + S + ";grid-row-end:span " + Math.max(1, Math.ceil(U(u) + a)) + "}";
    }).join(`
`);
    xt.textContent !== f && (xt.textContent = f);
  }
  new MutationObserver(Ft).observe(H, { childList: !0 }), new MutationObserver(Ft).observe(g, { attributes: !0, attributeFilter: ["class"] });
  let q = null, Q = null, A = null;
  const ft = /* @__PURE__ */ new Map(), ot = /* @__PURE__ */ new Map(), st = /* @__PURE__ */ new Map(), vt = /* @__PURE__ */ new Set(), ut = /* @__PURE__ */ new Map(), Mt = (t) => ut.set(t, (ut.get(t) || 0) + 1), qt = () => [.../* @__PURE__ */ new Set([...st.keys(), ...vt])];
  let ie = !1;
  const pa = 6;
  let na = null;
  const fa = /* @__PURE__ */ new Map(), $e = /* @__PURE__ */ new Map(), Hn = /* @__PURE__ */ new Map();
  let wt = { favourites: null }, Ot = {}, _e = {}, co = [], rn = null;
  const ya = (() => {
    try {
      return JSON.parse(ro.get(Dp)) || {};
    } catch {
      return {};
    }
  })();
  let we = /* @__PURE__ */ new Map(), ei = 0;
  function xa() {
    clearTimeout(ei), ei = setTimeout(() => Promise.resolve(D({ type: "frontend/set_user_data", key: Lp, value: wt })).catch(() => {
    }), 400);
  }
  const Xt = (() => {
    let t = {};
    try {
      t = JSON.parse(ro.get(Ep)) || {};
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
  })(), po = () => ro.set(Ep, JSON.stringify(Xt)), hr = () => {
    g.dataset.more = Xt.more, g.dataset.names = Xt.names, cl();
  };
  w && G && !p("moreInfoChoice") && (p("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + V0.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Xt.more === t) + '" data-more-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), p("moreInfoChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-more-style]");
    e && (Xt.more = e.dataset.moreStyle, po(), hr(), p("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  }), p("moreInfoChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Long names</strong><div class="status">How a name or state too long for its space shows.</div></div><div class="themeChoice" id="namesChoice" role="group" aria-label="Long names">' + j0.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Xt.names === t) + '" data-names-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), p("namesChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-names-style]");
    e && (Xt.names = e.dataset.namesStyle, Xt.namesPicked = !0, po(), hr(), p("namesChoice").querySelectorAll("[data-names-style]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  }), p("namesChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Next hours</strong><div class="status">The hours each day shows on the Weather page.</div></div><div class="themeChoice" id="hoursChoice" role="group" aria-label="Next hours">' + z0.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Xt.hoursWindow === t) + '" data-hours-window="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), p("hoursChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-hours-window]");
    e && (Xt.hoursWindow = e.dataset.hoursWindow, po(), xe == null || xe.refresh(), p("hoursChoice").querySelectorAll("[data-hours-window]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  }), p("hoursChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Weather art</strong><div class="status">How the weather and the sky are drawn.</div></div><div class="themeChoice" id="wxStyleChoice" role="group" aria-label="Weather art">' + G0.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Xt.wxStyle === t) + '" data-wx-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), p("wxStyleChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-wx-style]");
    e && (Xt.wxStyle = e.dataset.wxStyle, po(), xe == null || xe.setStyle(Xt.wxStyle), Ce == null || Ce.forEach((a) => a.setStyle(Xt.wxStyle)), p("wxStyleChoice").querySelectorAll("[data-wx-style]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  })), X();
  let Vt = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const ua = /* @__PURE__ */ new Map();
  let ai = "";
  const oi = w ? xh({ onChange: () => Pe() }) : null;
  w && g.classList.add("house");
  const ka = Object.assign(document.createElement("div"), { className: "tfBento" });
  let xe = null, ni = null, sn = !1;
  function ri(t) {
    const e = oe();
    if (g.classList.toggle("houseBento", !!e), xe && (ni !== e || t == null) && (xe.destroy(), xe = null), !e || t == null) {
      ka.remove();
      return;
    }
    ka.isConnected || H.append(ka), ka.style.order = t, !xe && !sn && (xe = fp(ka, { getHass: d, entityId: e, style: Xt.wxStyle, hoursWindow: () => Xt.hoursWindow, radarSource: gr }), ni = e);
  }
  const mr = [
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
  ], ii = mr.map(([t]) => t), jo = ["aq", "pollen", "radar", "hourly", "sun", "moon", "uv", "humidity", "pressure", "wind", "visibility"], hs = { hourly: 2 }, Ia = Object.fromEntries(mr.map(([t]) => [t, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + t })]));
  let Ce = null, Nn = null;
  function si(t) {
    const e = oe();
    Ce && Nn !== e && (Ce.forEach((a) => a.destroy()), Ce = null), Object.values(Ia).forEach((a) => e ? !a.isConnected && H.append(a) : a.remove()), e && !Ce && !sn && (Ce = /* @__PURE__ */ new Map(), Nn = e), li();
  }
  const gr = () => {
    var t;
    return ((t = se().opts.radar) == null ? void 0 : t.source) || "rainviewer";
  }, ms = () => [["rainviewer", "RainViewer"], ...Object.values(k).filter((t) => t.entity_id.startsWith("camera.")).sort((t, e) => ht(t.entity_id).localeCompare(ht(e.entity_id))).map((t) => ["camera:" + t.entity_id, ht(t.entity_id)])];
  function li() {
    if (!Ce || sn) return;
    const t = new Set(se().hidden);
    mr.forEach(([e, a]) => {
      Ce.has(e) || t.has(e) && !(te != null && te.fromTray && te.key === e) || Ce.set(e, fp(Ia[e], { getHass: d, entityId: Nn, style: Xt.wxStyle, cards: a, onOpen: e === "wx" ? () => ed("weather") : void 0, radarSource: gr }));
    });
  }
  const zt = (t) => {
    var e;
    return ((e = k[t]) == null ? void 0 : e.attributes) || {};
  }, ht = (t) => zt(t).friendly_name || t, ue = (t, e) => Ya(t) || (Number(zt(t).supported_features) & e) === e, Wt = (t) => {
    const e = String(t ?? "").replace(/_/g, " ");
    return e.charAt(0).toUpperCase() + e.slice(1);
  }, Re = (t, e = 1) => Number(t).toLocaleString(void 0, { minimumFractionDigits: e, maximumFractionDigits: e }), fo = (t) => (t == null ? void 0 : t.state) === "on" ? t.attributes.brightness != null ? Math.max(1, Math.round(t.attributes.brightness / 2.55)) : 100 : 0, br = (t) => zt(t).supported_color_modes || [], gs = (t, e) => [5, 3, 1].map((a) => {
    const o = (a + t / 60) % 6;
    return 255 * (1 - e / 100 * Math.max(0, Math.min(o, 4 - o, 1)));
  }), wr = (t) => (t /= 255, t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)), ci = (t) => 0.2126 * wr(t[0]) + 0.7152 * wr(t[1]) + 0.0722 * wr(t[2]), bs = (t, e) => {
    const a = ci(t), o = ci(e);
    return (Math.max(a, o) + 0.05) / (Math.min(a, o) + 0.05);
  }, ws = 0.55, zo = ["hs", "xy", "rgb", "rgbw", "rgbww"], di = (t) => {
    const e = zt(t), a = zo.includes(e.color_mode);
    return (a && e.rgb_color ? e.rgb_color : a && e.hs_color ? gs(...e.hs_color) : [255, 170, 0]).map((o) => Math.round(Math.max(0, Math.min(255, o))));
  }, vs = { heat: [255, 111, 34], cool: [33, 150, 243], heat_cool: [255, 193, 7], auto: [76, 175, 80], dry: [255, 152, 0], fan_only: [0, 188, 212] };
  function ln(t) {
    var o;
    const e = t.split(".")[0], a = (o = k[t]) == null ? void 0 : o.state;
    return !a || a === "unavailable" || a === "unknown" ? null : e === "light" ? a === "on" ? di(t) : null : e === "climate" ? vs[a] || null : e === "cover" ? a !== "closed" ? [146, 107, 199] : null : e === "lock" ? a !== "locked" ? [244, 67, 54] : null : e === "media_player" ? ["playing", "paused", "on", "buffering"].includes(a) ? [3, 169, 244] : null : e === "humidifier" || e === "valve" ? ["on", "open", "opening", "closing"].includes(a) ? [33, 150, 243] : null : e === "vacuum" ? ["cleaning", "returning"].includes(a) ? [0, 150, 136] : null : e === "alarm_control_panel" ? a !== "disarmed" && a !== "triggered" ? [76, 175, 80] : null : e === "fan" ? a === "on" ? [0, 188, 212] : null : (e === "switch" || e === "input_boolean") && a === "on" ? [255, 193, 7] : null;
  }
  function vr(t, e, a = !1) {
    const [o, r, l] = t.map((B) => B / 255), c = Math.max(o, r, l), f = Math.min(o, r, l), u = c - f, v = u ? (c === o ? (r - l) / u + (r < l ? 6 : 0) : c === r ? (l - o) / u + 2 : (o - r) / u + 4) * 60 : 0, S = (c + f) / 2, x = u ? u / (1 - Math.abs(2 * S - 1)) : 0, R = u < 0.1 ? Math.min(x, 0.25) : 1, E = (B) => {
      const M = (_) => (_ + v / 30) % 12, P = R * Math.min(B, 1 - B);
      return [0, 8, 4].map((_) => Math.round(255 * (B - P * Math.max(-1, Math.min(M(_) - 3, 9 - M(_), 1)))));
    };
    for (let B = 0.5; a ? B < 0.96 : B > 0.04; B += a ? 0.01 : -0.01) {
      const M = E(B);
      if (bs(M, e) >= 3) return "rgb(" + M.join(",") + ")";
    }
    return a ? "#ffffff" : "#26221e";
  }
  const On = (t) => {
    const e = [1, 3, 5].map((a) => parseInt(t.slice(a, a + 2), 16));
    return Math.max(...e) - Math.min(...e) < 26 ? "" : ";--sum-d:" + vr(e, [58, 58, 58], !0) + ";--sum-l:" + vr(e, [230, 230, 230]);
  }, pi = { d: ["#ffb894", "#d2b4ff", "#9dcbff"], l: ["#f0946a", "#b48ae6", "#6fa8e8"] }, uo = () => [0, 1, 2].map((t) => "--g" + t + "-d:" + pi.d[t] + ";--g" + t + "-l:" + pi.l[t]).join(";"), yr = '<svg class="tfGradDefs" aria-hidden="true" focusable="false"><defs><linearGradient id="hcClimateGrad" x1="0" y1="0" x2="0" y2="1">' + [0.15, 0.5, 0.85].map((t, e) => '<stop offset="' + t + '" style="stop-color:var(--g' + e + ')"/>').join("") + "</linearGradient></defs></svg>", Fa = (t) => {
    const e = t.map((a) => Math.round(a + (255 - a) * ws));
    return "--light-soft:rgb(" + e.join(",") + ");--light-ink:" + vr(t, e);
  }, Go = (t) => Fa(di(t)), Ka = (t) => {
    const e = ln(t);
    return e ? ' data-light style="' + Fa(e) + '"' : "";
  }, Xa = (t) => {
    const e = br(t);
    return e.length ? e.some((a) => a !== "onoff") : zt(t).brightness != null;
  }, In = (t) => [zt(t).min_color_temp_kelvin || 2e3, zt(t).max_color_temp_kelvin || 6500], $a = (t) => new Date(t).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
  function Fn(t) {
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
  const Ma = (t) => {
    var e;
    return zt(t).current_position ?? (((e = k[t]) == null ? void 0 : e.state) === "closed" ? 0 : 100);
  }, cn = (t) => {
    var e;
    return Ze("pos", t, ((e = fa.get(t)) == null ? void 0 : e.pos) ?? Ma(t));
  }, xr = (t) => {
    var e;
    return Ze("tilt", t, ((e = fa.get(t)) == null ? void 0 : e.tilt) ?? zt(t).current_tilt_position);
  };
  function He(t) {
    var c;
    const e = k[t];
    if (!e) return "Not found";
    if (e.state === "unavailable") return "Unavailable";
    const a = e.attributes, o = t.split(".")[0];
    if (o === "light") {
      if (e.state !== "on") return "Off";
      const f = a.color_temp_kelvin;
      return (Xa(t) ? fo(e) + "%" : "On") + (a.color_mode === "color_temp" && f ? " · " + Number(f).toLocaleString() + "k" : zo.includes(a.color_mode) ? " · Colour" : "");
    }
    if (o === "climate") return (e.state === "off" ? "Off" : Wt(a.hvac_action || e.state)) + " · " + Re(a.current_temperature) + " °C now";
    if (o === "cover") {
      const f = Ma(t), u = a.current_tilt_position;
      return e.state === "opening" || e.state === "closing" ? Wt(e.state) + " - " + f + "%" : (f <= 0 ? "Closed" : f >= 100 ? "Open" : "Partially open") + (u > 0 && u < 100 ? " · tilted" : "");
    }
    if (o === "humidifier") return e.state !== "on" ? "Off" : Wt(a.action || "on") + " · " + a.current_humidity + "% now";
    if (o === "vacuum") return Wt(e.state) + (e.state === "cleaning" && ((c = a.rooms) != null && c.length) ? " · " + a.rooms.join(", ") : "") + (a.battery_level != null ? " · " + a.battery_level + "%" : "");
    if (o === "media_player") return e.state === "playing" || e.state === "paused" ? (e.state === "paused" ? "Paused · " : "") + (a.media_title || "Playing") : Wt(e.state);
    if (o === "alarm_control_panel") return Np[e.state] || Wt(e.state);
    if (o === "lock" || o === "valve") return Wt(e.state);
    if (o === "switch") return e.state === "on" ? "On" : "Off";
    if (o === "plant") return e.state === "ok" ? "Healthy" : Wt(a.problem);
    if (o === "binary_sensor")
      return a.device_class === "battery" ? e.state === "on" ? "Low" : "Normal" : a.device_class === "problem" ? e.state === "on" ? "Problem" : "OK" : a.device_class === "moisture" ? e.state === "on" ? "Wet" : "Dry" : ns.includes(a.device_class) ? e.state === "on" ? "Open" : "Closed" : e.state === "on" ? "Detected" : "Clear";
    if (a.rang) return "Rang at " + $a(a.rang);
    const r = d();
    if (r != null && r.formatEntityState && !Ya(t))
      try {
        return r.formatEntityState(e);
      } catch {
      }
    const l = Number(e.state);
    if (e.state !== "" && Number.isFinite(l)) {
      const f = Math.abs(l) >= 100 ? 0 : Math.abs(l) >= 10 ? 1 : 2, u = a.unit_of_measurement ? a.unit_of_measurement === "%" ? "%" : " " + a.unit_of_measurement : "";
      return l.toLocaleString(void 0, { maximumFractionDigits: f }) + u + (a.plant_low ? " · Low" : a.plant_high ? " · High" : "");
    }
    return Wt(e.state);
  }
  const kr = (t) => t >= 1e3 ? Re(t / 1e3, 2) + " kW" : Math.round(t).toLocaleString() + " W";
  function ho(t) {
    var a, o;
    const e = d();
    t.querySelectorAll("[data-icon-for]").forEach((r) => {
      var f;
      const l = k[r.dataset.iconFor], c = r.dataset.iconName || "";
      if (customElements.get("ha-state-icon") && l && !c) {
        let u = r.firstElementChild;
        (!u || u.localName !== "ha-state-icon") && (r.textContent = "", u = document.createElement("ha-state-icon"), r.appendChild(u)), u.hass = e, u.stateObj = l;
      } else if (customElements.get("ha-icon")) {
        let u = r.firstElementChild;
        (!u || u.localName !== "ha-icon") && (r.textContent = "", u = document.createElement("ha-icon"), r.appendChild(u)), u.icon = c || ((f = l == null ? void 0 : l.attributes) == null ? void 0 : f.icon) || "mdi:circle-medium";
      } else r.textContent || (r.textContent = (r.dataset.letter || ht(r.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    }), (a = t.querySelectorAll) == null || a.call(t, ".tfIcon").forEach(ui), (o = t.classList) != null && o.contains("tfIcon") && ui(t), _r();
  }
  const fi = /* @__PURE__ */ new Map();
  function ui(t) {
    var l, c, f;
    const e = (((l = t.closest("[data-k]")) == null ? void 0 : l.dataset.k) || "") + "|" + (t.dataset.iconFor || ((c = t.querySelector("[data-icon-for]")) == null ? void 0 : c.dataset.iconFor) || t.getAttribute("aria-label") || ""), a = getComputedStyle(t), o = { backgroundColor: a.backgroundColor, color: a.color }, r = fi.get(e);
    fi.set(e, o), !(!r || r.backgroundColor === o.backgroundColor && r.color === o.color || (f = window.matchMedia) != null && f.call(window, "(prefers-reduced-motion: reduce)").matches) && t.animate([r, o], { duration: De.warp.cdur, delay: De.warp.cdelay, easing: Ee[De.warp.ease], fill: "backwards" });
  }
  const Mr = "[data-icon-for]>:is(ha-state-icon,ha-icon),.tfIcon>svg", dn = (t) => {
    const e = [t];
    for (; e.length; ) {
      const a = e.shift();
      if (a.localName === "svg") return a;
      a.shadowRoot && e.push(...a.shadowRoot.children), e.push(...a.children);
    }
    return null;
  };
  function Sr(t) {
    var E, B, M;
    const e = t.localName === "svg" ? t : dn(t), a = e ? [...e.querySelectorAll("path,rect,circle,ellipse,polygon,polyline,line")] : [];
    if (!a.length) return !e;
    const o = (E = t.closest(".tfIcon")) == null ? void 0 : E.offsetWidth;
    if (o === void 0) return !0;
    if (!o) return !1;
    const r = o + "|" + a.map((P) => P.getAttribute("d") || P.localName).join("|");
    if (t.dataset.fitted === r) return !0;
    let l = 1 / 0, c = 1 / 0, f = -1 / 0, u = -1 / 0;
    for (const P of a) {
      const _ = P.getBBox(), j = getComputedStyle(P), C = j.stroke !== "none" ? (parseFloat(j.strokeWidth) || 0) / 2 : 0;
      !_.width && !_.height || (l = Math.min(l, _.x - C), c = Math.min(c, _.y - C), f = Math.max(f, _.x + _.width + C), u = Math.max(u, _.y + _.height + C));
    }
    if (!(f > l)) return !1;
    const v = (M = (B = e.viewBox) == null ? void 0 : B.baseVal) != null && M.width ? e.viewBox.baseVal : { x: 0, y: 0, width: 24, height: 24 }, S = o > 40 ? o * (26 / 40) : o - 14, x = S * v.width / Math.max(f - l, u - c), R = x / v.width;
    return t.localName === "svg" ? (t.style.width = x + "px", t.style.height = x + "px") : t.style.setProperty("--mdc-icon-size", x + "px"), e.style.translate = ((v.x + v.width / 2 - (l + f) / 2) * R).toFixed(2) + "px " + ((v.y + v.height / 2 - (c + u) / 2) * R).toFixed(2) + "px", t.dataset.fitted = r, !0;
  }
  let mo = 0;
  function hi(t = 0) {
    clearTimeout(mo), [...n.querySelectorAll(Mr)].filter((a) => !Sr(a)).length && t < 5 && (mo = setTimeout(() => hi(t + 1), 300));
  }
  function _r() {
    clearTimeout(mo), mo = setTimeout(() => hi(), 60);
  }
  const Cr = (t) => {
    var e, a, o;
    return t.startsWith("light.") && k[t] && !zt(t).icon && !((o = (a = (e = d()) == null ? void 0 : e.entities) == null ? void 0 : a[t]) != null && o.icon) ? "mdi:lightbulb" : "";
  }, he = (t, e, a) => (e = e || Cr(t), ' data-icon-for="' + F(t) + '"' + (e ? ' data-icon-name="' + F(e) + '"' : "") + (a ? ' data-letter="' + F(a) + '"' : "")), Sa = (t) => t.endsWith("_solar_power") ? "mdi:solar-power-variant" : zt(t).rang ? "mdi:doorbell" : "", Et = (t, e, a, o) => F([t, e, a, o ? JSON.stringify(o) : ""].join("|")), _a = (t) => F(JSON.stringify(t));
  function pn(t) {
    const e = F(ht(t) + ", " + He(t));
    return '<div class="activityRow tap" role="button" tabindex="0" data-more="' + F(t) + '" aria-label="' + e + '. More info"><div class="tfIcon" aria-hidden="true"' + he(t, Sa(t)) + '></div><div><div class="activityRowName">' + F(ht(t)) + '</div><div class="activityRowMeta">' + F(He(t)) + "</div></div></div>";
  }
  const Ar = (t, e, a) => '<div class="activityRow" aria-label="' + F(t + ", " + e) + '"><div class="tfIcon" aria-hidden="true"' + he("", a, t) + '></div><div><div class="activityRowName">' + F(t) + '</div><div class="activityRowMeta">' + F(e) + "</div></div></div>";
  function Ja(t, e, a, o, r = "", l = null, c = "") {
    return '<section class="card tfCard' + (c ? " " + c : "") + '" data-tf data-k="' + F(t) + '" style="order:' + e + '" aria-label="' + F(a) + '"><div class="activityHeader">' + (l ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + F(l) + '" aria-label="' + F(a + (k[l] ? ", " + He(l) : "") + ". More info") + '">' + F(a) + "</button>" : '<div class="activityTitle">' + F(a) + "</div>") + '</div><div class="activityRows">' + o.join("") + "</div>" + r + "</section>";
  }
  function Uo(t, e) {
    const a = "readings:" + t.id, o = t.readings.map((r) => pn(r));
    return t.power != null && o.push(Ar("Power now", kr(t.power), "mdi:flash")), Ja(a, e, "Readings", o);
  }
  function qn(t, e) {
    var f;
    const a = "energy:" + t.id, [o, r] = [t.solar.find((u) => u.endsWith("_power")), t.solar.find((u) => u.endsWith("_today"))], l = [o, r].filter(Boolean).map((u) => pn(u)), c = Number(((f = k[o]) == null ? void 0 : f.state) || 0) * 1e3;
    return Vt.grid && (l.push(pn(Vt.grid)), l.push(Ar("House use", kr(c + Number(k[Vt.grid].state)), "mdi:home-lightning-bolt"))), Ja(a, e, "Energy", l, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const go = (t, e) => Ja("plant:" + t.id, e, ht(t.id), t.readings.map((a) => pn(a)), "", t.id);
  function Yo(t, e, a, o, r, l, c = null) {
    const f = a == null ? null : Math.max(0, Math.min(1, a)), u = f == null ? 0 : Math.round(f * 100);
    return '<div class="tfBar ' + t + '" role="slider" tabindex="0" aria-label="' + F(o) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + u + '"' + (r ? ' aria-valuetext="' + F(r) + '"' : "") + ' data-drag="' + F(t + "|" + e) + '">' + (c != null ? '<span class="was" aria-hidden="true" style="left:' + c + '%"></span>' : "") + (l ? f == null ? "" : '<b style="left:' + u + '%"></b>' : '<i style="width:' + u + '%"></i>') + "</div>";
  }
  const Wn = "homecore-house-last-bright", bo = (() => {
    try {
      return JSON.parse(ro.get(Wn)) || {};
    } catch {
      return {};
    }
  })();
  let mi = 0;
  const Oe = (t, e) => {
    !e || bo[t] === e || (bo[t] = e, clearTimeout(mi), mi = setTimeout(() => ro.set(Wn, JSON.stringify(bo)), 500));
  }, Je = (t, e, a, o) => '<div class="tfStep" role="group" aria-label="' + F(t) + '"><button type="button" data-act="' + a + '" aria-label="Lower ' + F(t.toLowerCase()) + '">' + vp.down + "</button><output>" + F(e) + '</output><button type="button" data-act="' + o + '" aria-label="Raise ' + F(t.toLowerCase()) + '">' + vp.up + "</button></div>", ha = (t, e, a) => '<div class="' + t + '" role="group" aria-label="' + F(e) + '">' + a.filter(Boolean).map((o) => '<button type="button" data-act="' + o.act + '"' + (o.pressed != null ? ' aria-pressed="' + o.pressed + '"' : "") + (o.disabled ? " disabled" : "") + (o.aria ? ' aria-label="' + F(o.aria) + '"' : "") + ">" + (o.html || F(o.label)) + "</button>").join("") + "</div>", Vn = (t, e) => "width:" + Math.round(Math.max(0, Math.min(1, (t - e * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * e / 3).toFixed(2), Zo = (t) => "left:calc(4px + " + t / 100 + " * (100% - 8px))", Tr = (t, e) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + F(ht(t)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(e) + '" aria-valuetext="' + Math.round(e) + '% open" data-blocks="' + F(t) + '">' + [0, 1, 2, 3].map((a) => '<span><i style="' + Vn(e, a) + '"></i><b' + (e >= (a + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (a + 1) * 25 + "<small>%</small></b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + Zo(e) + '">' + Math.round(e) + "%</output></div>";
  function ys(t, e) {
    t.querySelectorAll(":scope>span").forEach((o, r) => {
      o.firstElementChild.setAttribute("style", Vn(e, r)), o.lastElementChild.classList.toggle("lit", e >= (r + 1) * 25 - 12);
    });
    const a = t.querySelector(".tfTip");
    a.setAttribute("style", Zo(e)), a.textContent = Math.round(e) + "%", t.setAttribute("aria-valuenow", String(Math.round(e))), t.setAttribute("aria-valuetext", Math.round(e) + "% open");
  }
  const jn = (t, e) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + F(ht(t)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(e) + '" aria-valuetext="' + Math.round(e) + '% open" data-drag="tilt|' + F(t) + '"><i style="width:calc((100% - 8px) * ' + e / 100 + ')"></i><span' + (e > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (e > 92 ? ' class="lit"' : "") + ">Open</span></div>", gi = (t, e, a) => '<div class="tfSeg tfCoverBtns" role="group" aria-label="' + F(ht(t)) + '">' + [
    ue(t, Sp) && ["open", "Open", "open_cover", e >= 100 && !a],
    ue(t, Cp) && ["stop", "Stop", "stop_cover", !1],
    ue(t, _p) && ["close", "Close", "close_cover", e <= 0 && !a]
  ].filter(Boolean).map(([o, r, l, c]) => '<button type="button" data-act="' + Et("cover", l, t) + '" aria-label="' + r + '"' + (c ? " disabled" : "") + ">" + F0[o] + "</button>").join("") + "</div>", Ko = (t, e) => '<button class="tfIcon' + (e.art ? " art" : "") + '" type="button" data-act="' + e.button.act + '" aria-label="' + F(e.button.label) + '"' + (e.art ? ' style="background-image:url(&quot;' + F(e.art) + '&quot;)"' : he(t, e.icon)) + "></button>", zn = (t) => '<button class="tfName" type="button" data-more="' + F(t) + '" aria-label="' + F(ht(t) + ", " + He(t) + ". More info") + '"><span class="activityRowName">' + F(ht(t)) + '</span><span class="activityRowMeta">' + F(He(t)) + "</span></button>";
  function Xo(t, e = !1, a = null) {
    const o = vo(t), r = t.startsWith("light.") && ma(t) && !(a && wn(t) < 3), l = a || (e && t.startsWith("light.") ? ["bright"] : null), c = r ? ['<div class="tfDacPad" data-dac="' + (e ? "more:" : a ? "dash:" : "tile:") + F(t) + '"></div>'] : o.sections.map((f, u) => f && (!l || l.includes((o.parts || [])[u])) ? f : "").filter(Boolean);
    return '<div class="tfAction' + (r ? " tfDac" : "") + (o.on ? " on" : "") + (!r && !c.length ? " tfHeadOnly" : "") + '" data-k="' + F(t) + '"' + (o.tone ? ' data-tone="' + o.tone + '"' : "") + Ka(t) + '><div class="tfActionHead">' + Ko(t, o) + zn(t) + "</div>" + c.join("") + "</div>";
  }
  const Ue = "dual-controller-v3", bi = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.5/dist/dual-axis-controller-v4.js";
  let fn = null;
  async function wi() {
    if (fn || customElements.get(Ue)) return;
    fn = "loading";
    const t = await Promise.resolve().then(() => D({ type: "lovelace/resources" })).catch(() => null), e = Array.isArray(t) && t.some((o) => /dual-axis-controller/i.test(o.url || ""));
    if (await Promise.race([customElements.whenDefined(Ue), new Promise((o) => setTimeout(o, e ? 8e3 : 0))]), customElements.get(Ue)) return;
    const a = Object.assign(document.createElement("script"), { src: bi });
    a.onerror = () => {
      fn = "failed", N();
    }, document.head.appendChild(a);
  }
  const Ye = /* @__PURE__ */ new Map(), un = (t) => (Xt.lightStyles[t] || Xt.lights) === "dac", Lr = () => Xt.lights === "dac" || Object.values(Xt.lightStyles).includes("dac");
  function ma(t) {
    return un(t) && !!customElements.get(Ue);
  }
  const qa = (t) => Xt.lightPads[t] || Xt.dacPad, hn = () => {
    const t = d();
    return t && {
      ...t,
      themes: { ...t.themes || {}, darkMode: !g.classList.contains("light") },
      callService: (e, a, o, ...r) => t.callService(e, ...xd(e, a, o), ...r)
    };
  }, vi = "ha-card,.hc.hcTile{padding:0!important;border:0!important;border-radius:0!important;background:none!important;box-shadow:none!important}.hcTileHead{display:none!important}.hc--dark{--hc-text:var(--color-text-primary,#f1f1f1)}.halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,198px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}.hc.hcTile{max-width:var(--tf-dac-max,280px)!important}", yi = (t) => {
    !t.shadowRoot || t.shadowRoot.querySelector("style[data-tf]") || (t.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: vi })).dataset.tf = "");
  }, Qa = /* @__PURE__ */ new Map(), $o = new ResizeObserver((t) => t.forEach(({ target: e }) => {
    const a = e.parentElement;
    !a || !e.offsetHeight || (a.style.removeProperty("min-height"), Qa.set(a.dataset.dac, a.offsetHeight));
  }));
  function wo(t) {
    t.querySelectorAll("[data-dac]").forEach((e) => {
      const a = e.dataset.dac;
      let o = Ye.get(a);
      if (!o) {
        const r = a.slice(a.indexOf(":") + 1);
        o = document.createElement(Ue), o.setConfig({ type: "custom:" + Ue, entity: r, pad: qa(r), tap_action: { action: "none" } }), Ye.set(a, o);
      }
      o.hass = hn(), o.parentNode !== e && e.replaceChildren(o), !o.offsetHeight && Qa.has(a) && (e.style.minHeight = Qa.get(a) + "px"), $o.observe(o), yi(o);
    });
  }
  function xi() {
    const t = hn();
    Ye.forEach((e, a) => {
      e.isConnected ? e.hass = t : Ye.delete(a);
    });
  }
  customElements.whenDefined(Ue).then(() => {
    w && (H != null && H.querySelector("[data-tf]")) && od(za);
  });
  const Ze = (t, e, a) => st.has(t + "|" + e) ? st.get(t + "|" + e) : a;
  function vo(t) {
    var l, c;
    const e = k[t], a = e.attributes, o = t.split(".")[0], r = (f, u) => ({ act: Et(f, "toggle", t), label: u });
    if (o === "light") {
      const f = e.state === "on", u = br(t), [v, S] = In(t), x = Ze("bright", t, fo(e));
      f && Oe(t, fo(e));
      const R = Ze("ct", t, f && a.color_mode === "color_temp" ? a.color_temp_kelvin : null), E = Ze("hue", t, f && zo.includes(a.color_mode) && a.hs_color ? a.hs_color[0] : null);
      return { on: f, button: r("light", "Turn " + ht(t) + (f ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        Xa(t) && Yo("bright", t, x / 100, ht(t) + " brightness", x + "%", !1, f ? null : bo[t] ?? null),
        u.includes("color_temp") && Yo("ct", t, R == null ? null : (R - v) / (S - v), ht(t) + " warm to cool", R == null ? "" : Math.round(R) + " kelvin", !0),
        u.some((B) => zo.includes(B)) && Yo("hue", t, E == null ? null : E / 360, ht(t) + " colour", "", !0)
      ] };
    }
    if (o === "climate") {
      const f = a.target_temp_step || 0.5, u = Number(a.temperature);
      return { on: e.state !== "off", tone: e.state === "cool" || a.hvac_action === "cooling" ? "cool" : "heat", button: r("climate", "Turn " + ht(t) + (e.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(u) && Je("Target temperature", Re(u) + " °C", Et("climate", "set_temperature", t, { temperature: u - f }), Et("climate", "set_temperature", t, { temperature: u + f })),
        ha("tfSeg", "Mode", (a.hvac_modes || []).map((v) => ({ label: Wt(v), act: Et("climate", "set_hvac_mode", t, { hvac_mode: v }), pressed: e.state === v })))
      ] };
    }
    if (o === "cover") {
      const f = e.state === "opening" || e.state === "closing", u = e.state === "closed", v = cn(t), S = xr(t);
      return { on: !u, tone: "blue", icon: Ap[zl(e)][u ? 1 : 0], button: r("cover", (u ? "Open " : "Close ") + ht(t)), parts: ["blocks", "tilt", "buttons"], sections: [
        ue(t, Ul) && Tr(t, v),
        S != null && jn(t, S),
        gi(t, v, f)
      ] };
    }
    if (o === "humidifier") {
      const f = Number(a.humidity);
      return { on: e.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: r("humidifier", "Turn " + ht(t) + (e.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(f) && Je("Target humidity", f + "%", Et("humidifier", "set_humidity", t, { humidity: f - 1 }), Et("humidifier", "set_humidity", t, { humidity: f + 1 })),
        ((l = a.available_modes) == null ? void 0 : l.length) && ha("tfSeg", "Mode", a.available_modes.map((u) => ({ label: Wt(u), act: Et("humidifier", "set_mode", t, { mode: u }), pressed: a.mode === u })))
      ] };
    }
    if (o === "media_player") {
      const f = e.state === "playing", u = e.state === "off" || e.state === "standby", v = Ze("vol", t, a.volume_level), S = u ? { act: Et("media_player", ue(t, O0) ? "turn_on" : "toggle", t), label: "Turn " + ht(t) + " on" } : e.state === "playing" || e.state === "paused" ? { act: Et("media_player", "media_play_pause", t), label: (f ? "Pause " : "Play ") + ht(t) } : { act: Et("media_player", ue(t, I0) ? "turn_off" : "toggle", t), label: "Turn " + ht(t) + " off" };
      return { on: !u, tone: "blue", art: !u && a.entity_picture ? a.entity_picture : null, button: S, parts: ["playback", "volume"], sections: u ? [] : [
        (ue(t, xp) || ue(t, kp) || ue(t, yp) || ue(t, Mp)) && ha("tfSeg", "Playback", [
          { html: es.prev, aria: "Previous", act: Et("media_player", "media_previous_track", t), disabled: !ue(t, xp) },
          { html: f ? es.pause : es.play, aria: f ? "Pause" : "Play", act: Et("media_player", "media_play_pause", t), disabled: !(ue(t, yp) || ue(t, Mp)) },
          { html: es.next, aria: "Next", act: Et("media_player", "media_next_track", t), disabled: !ue(t, kp) }
        ]),
        ue(t, N0) && v != null && Yo("vol", t, v, ht(t) + " volume", Math.round(v * 100) + "%")
      ] };
    }
    if (o === "vacuum") {
      const f = e.state === "cleaning", u = a.rooms || [], v = (x) => u.includes(x) ? u.filter((R) => R !== x) : u.concat(x), S = Et("vacuum", f ? "pause" : "start", t, Ya(t) ? { rooms: u } : null);
      return { on: f || e.state === "returning", tone: "blue", button: { act: S, label: (f ? "Pause " : "Start ") + ht(t) }, parts: ["controls", "rooms"], sections: [
        ha("tfSeg", ht(t), [
          { label: f ? "Pause" : "Start", act: S },
          { label: "Dock", act: Et("vacuum", "return_to_base", t), disabled: e.state === "docked" },
          { label: "Locate", act: Et("vacuum", "locate", t) }
        ]),
        Ya(t) && ha("tfChips", "Rooms to clean", Vt.rooms.filter((x) => x.id !== "balcony").map((x) => ({ label: x.name, act: Et("vacuum", "set_rooms", t, { rooms: v(x.name) }), pressed: u.includes(x.name) })))
      ] };
    }
    if (o === "lock") {
      const f = e.state === "locked";
      return { on: !f, tone: "heat", button: { act: Et("lock", f ? "unlock" : "lock", t), label: (f ? "Unlock " : "Lock ") + ht(t) }, parts: ["controls"], sections: [
        ha("tfSeg", ht(t), [
          { label: "Lock", act: Et("lock", "lock", t), pressed: f },
          { label: "Unlock", act: Et("lock", "unlock", t), pressed: e.state === "unlocked" },
          ue(t, Pp) && { label: "Open", act: Et("lock", "open", t), pressed: e.state === "open" }
        ])
      ] };
    }
    if (o === "alarm_control_panel") {
      const f = e.state === "disarmed";
      return { on: !f, tone: e.state === "triggered" ? "alarm" : "blue", button: { act: Et("alarm_control_panel", f ? "alarm_arm_away" : "alarm_disarm", t), label: f ? "Arm " + ht(t) + ", away" : "Disarm " + ht(t) }, parts: ["controls"], sections: [
        ha("tfSeg", ht(t), Hp.filter(([, , , u]) => !u || ue(t, u)).map(([u, v, S]) => ({ label: v, act: Et("alarm_control_panel", S, t), pressed: e.state === u })))
      ] };
    }
    if (o === "valve") {
      const f = e.state === "open";
      return { on: f, tone: "blue", icon: "mdi:sprinkler-variant", button: r("valve", (f ? "Close " : "Open ") + ht(t)), parts: ["controls"], sections: [
        ha("tfSeg", ht(t), [
          { label: "Open", act: Et("valve", "open_valve", t), pressed: f },
          { label: "Close", act: Et("valve", "close_valve", t), pressed: !f }
        ])
      ] };
    }
    if (o === "water_heater") {
      const f = Number(a.temperature), u = a.target_temp_step || 1, v = e.state !== "off";
      return { on: v, tone: "heat", icon: "mdi:water-boiler", button: { act: Et("water_heater", v ? "turn_off" : "turn_on", t), label: "Turn " + ht(t) + (v ? " off" : " on") }, parts: ["step", "modes"], sections: [
        Number.isFinite(f) && Je("Target temperature", f + " °C", Et("water_heater", "set_temperature", t, { temperature: f - u }), Et("water_heater", "set_temperature", t, { temperature: f + u })),
        ((c = a.operation_list) == null ? void 0 : c.length) && ha("tfSeg", "Mode", a.operation_list.map((S) => ({ label: Wt(S), act: Et("water_heater", "set_operation_mode", t, { operation_mode: S }), pressed: (a.operation_mode || e.state) === S })))
      ] };
    }
    if ($r.includes(o)) {
      const f = e.state === "on";
      return { on: f, button: r(o, "Turn " + ht(t) + (f ? " off" : " on")), parts: [], sections: [] };
    }
    return { on: !1, button: { act: "", label: ht(t) }, sections: [] };
  }
  const Ca = (t) => (Number.isInteger(Number(t)) ? String(Number(t)) : Re(t)) + "°";
  function Gn(t) {
    var P;
    const e = (_) => t.readings.find((j) => zt(j).device_class === _), a = e("temperature"), o = e("humidity"), r = (_) => {
      var j;
      return Number((j = k[_]) == null ? void 0 : j.state);
    }, l = (_) => t.actions.filter((j) => _.test(j)), c = t.lights.filter((_) => {
      var j;
      return ((j = k[_]) == null ? void 0 : j.state) === "on";
    }), f = l(/^cover\./), u = f.filter((_) => {
      var j;
      return ((j = k[_]) == null ? void 0 : j.state) !== "closed";
    }), v = [...new Set(f.map((_) => zl(k[_])))], S = l(/^climate\./)[0], x = l(/^humidifier\./)[0], R = l(/^media_player\./), E = R.find((_) => {
      var j;
      return ((j = k[_]) == null ? void 0 : j.state) === "playing";
    }) || R.find((_) => {
      var j;
      return ((j = k[_]) == null ? void 0 : j.state) === "paused";
    }), B = t.plugs.filter((_) => {
      var j;
      return ((j = k[_]) == null ? void 0 : j.state) === "on";
    }), M = [];
    if (a && Number.isFinite(r(a)) && M.push({ key: "temp", id: a, kind: "reading", icon: io(a), label: "Temperature", value: Re(r(a)) + "°" }), o && Number.isFinite(r(o)) && M.push({ key: "hum", id: o, kind: "reading", icon: io(o), label: "Humidity", value: Math.round(r(o)) + "%" }), t.lights.length && M.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: io("", "mdi:lightbulb"),
      label: "Lights",
      value: c.length ? c.length + " of " + t.lights.length + " on" : "All off",
      short: c.length ? c.length + " on" : "Off",
      on: c.length > 0,
      light: c.length ? Go(c[0]) : "",
      acts: t.lights.map((_) => ["light", c.length ? "turn_off" : "turn_on", _]),
      aria: (c.length ? "Turn off" : "Turn on") + " the lights in " + t.name
    }), f.length) {
      const _ = v.length === 1 ? q0[v[0]] : "covers", j = Math.round(f.reduce((C, rt) => C + Ma(rt), 0) / f.length);
      M.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        light: u.length ? Fa([146, 107, 199]) : "",
        icon: io("", ((P = Ap[v[0]]) == null ? void 0 : P[u.length ? 0 : 1]) || "mdi:window-shutter"),
        label: Wt(_),
        value: j <= 0 ? "Closed" : j >= 100 ? "Open" : j + "% open",
        short: j <= 0 ? "Closed" : j + "%",
        on: u.length > 0,
        acts: f.map((C) => ["cover", u.length ? "close_cover" : "open_cover", C]),
        aria: (u.length ? "Close the " : "Open the ") + _ + " in " + t.name
      });
    }
    if (S) {
      const _ = zt(S), j = k[S].state === "off";
      M.push({
        key: "climate",
        kind: "control",
        tone: _.hvac_action === "cooling" ? "cool" : "heat",
        light: ln(S) ? Fa(ln(S)) : "",
        icon: io(S),
        label: ht(S),
        value: j ? "Off" : Wt(_.hvac_action || k[S].state) + " · " + Ca(_.temperature),
        short: j ? "Off" : Ca(_.temperature),
        on: !j,
        acts: [["climate", "toggle", S]],
        aria: "Turn " + ht(S) + (j ? " on" : " off")
      });
    }
    if (x) {
      const _ = k[x].state === "on";
      M.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        light: _ ? Fa([33, 150, 243]) : "",
        icon: io("", "mdi:air-humidifier"),
        label: ht(x),
        value: _ ? "On · " + zt(x).humidity + "%" : "Off",
        short: _ ? zt(x).humidity + "%" : "Off",
        on: _,
        acts: [["humidifier", "toggle", x]],
        aria: "Turn " + ht(x) + (_ ? " off" : " on")
      });
    }
    if (R.length) {
      const _ = E || R[0], j = k[_], C = j.state === "playing";
      M.push({
        key: "media",
        kind: "control",
        tone: "blue",
        light: ln(_) ? Fa(ln(_)) : "",
        icon: io(_),
        label: ht(_),
        value: He(_),
        short: C ? "Playing" : j.state === "paused" ? "Paused" : Wt(j.state),
        on: C,
        acts: [["media_player", j.state === "playing" || j.state === "paused" ? "media_play_pause" : "toggle", _]],
        aria: (C ? "Pause " : "Play ") + ht(_)
      });
    }
    return t.plugs.length && M.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      light: B.length ? Fa([255, 193, 7]) : "",
      icon: io("", "mdi:power-plug"),
      label: "Plugs",
      value: B.length ? B.length + " of " + t.plugs.length + " on" : "All off",
      short: B.length ? B.length + " on" : "Off",
      on: B.length > 0,
      acts: t.plugs.map((_) => ["switch", B.length ? "turn_off" : "turn_on", _]),
      aria: (B.length ? "Turn off" : "Turn on") + " the plugs in " + t.name
    }), t.alerts.forEach((_) => M.push(zt(_).device_class === "moisture" ? { key: "alert:" + _, kind: "alert", icon: io(_), label: "Water leak" } : { key: "note:" + _, kind: "note", icon: io(_), label: ht(_) + " " + He(_).toLowerCase() })), M;
  }
  const Ie = (t, e) => {
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
          return ((l = k[r]) == null ? void 0 : l.state) === "playing";
        }) || o.find((r) => {
          var l;
          return ((l = k[r]) == null ? void 0 : l.state) === "paused";
        }) || o[0]].filter(Boolean);
      })()
    }[e] || [];
  };
  function ki(t, e, a = !1) {
    const o = e.find((f) => f.key === "lights"), r = !!(o != null && o.on), l = "", c = '<span class="tfAreaGlyph"' + he("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span>";
    return a || !o ? '<span class="tfIcon tfAreaIcon' + (r ? " on" : "") + '"' + l + ' aria-hidden="true">' + c + "</span>" : '<button class="tfIcon tfAreaIcon' + (r ? " on" : "") + '" type="button"' + l + ' data-acts="' + _a(o.acts) + '" aria-label="' + F(o.aria) + '" aria-pressed="' + r + '">' + c + "</button>";
  }
  const Mi = (t) => t.readings.find((e) => zt(e).device_class === "temperature") || [...t.readings, ...t.solar, ...t.openings, ...t.actions, ...t.plugs].find((e) => k[e]) || null, Dr = (t, e) => {
    const a = ht(e);
    return a.toLowerCase().startsWith(t.name.toLowerCase() + " ") ? Wt(a.slice(t.name.length + 1)) : a;
  };
  function Er(t) {
    const e = k[t], a = zt(t), o = t.split(".")[0], r = Number(e.state);
    if (e.state === "unavailable") return { text: "Unavailable" };
    if (o === "sensor" && Number.isFinite(r)) {
      if (a.device_class === "temperature") return { text: Ca(r) };
      const l = a.unit_of_measurement || "";
      return l === "%" ? { text: Math.round(r) + "%" } : { text: Re(r, Number.isInteger(r) ? 0 : 1), unit: l };
    }
    if (o === "climate" && (a.current_temperature ?? a.temperature) != null) return { text: Ca(a.current_temperature ?? a.temperature) };
    if (o === "light") return { text: e.state !== "on" ? "Off" : Xa(t) ? fo(e) + "%" : "On" };
    if (o === "cover") {
      const l = Ma(t);
      return { text: l <= 0 ? "Closed" : l >= 100 ? "Open" : l + "%" };
    }
    return o === "humidifier" ? { text: e.state === "on" ? a.humidity + "%" : "Off" } : o === "media_player" ? { text: e.state === "playing" ? "Playing" : e.state === "paused" ? "Paused" : Wt(e.state) } : { text: He(t) };
  }
  const s = (t, e, a) => {
    const o = a.find((f) => f.key === "temp"), r = a.find((f) => f.key === "hum"), l = zt(e), c = k[e].state === "off";
    return e.startsWith("climate.") ? [Dr(t, e), c ? "Off" : Wt(l.hvac_action || k[e].state) + (l.temperature != null ? " · " + Ca(l.temperature) : ""), r && r.value].filter(Boolean).join(" · ") : [!(o && o.id === e) && Dr(t, e), o && o.id !== e && o.value, r && r.id !== e && r.value + (o ? "" : " humidity")].filter(Boolean).join(" · ");
  };
  function h(t) {
    const e = t.id === q, a = Gn(t), o = Mi(t), r = o && Er(o), l = [...a.filter((c) => c.kind === "control"), ...a.filter((c) => c.kind !== "control" && c.kind !== "reading")].slice(0, 4);
    return '<article class="hcAreaPanel tfAreaPanel' + (e ? " active" : "") + '" data-area="' + F(t.id) + '" tabindex="0" aria-expanded="' + e + '" aria-label="' + F(t.name) + '"><div class="panelExpanded"' + (e ? "" : " inert") + ">" + tt(t, null, ' data-cols="2" data-rows="' + wn("areas") + '"') + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop">' + ki(t, a, !0) + '<span class="tfACName">' + F(t.name) + '</span></div><span class="tfACMain">' + (r ? F(r.text + (r.unit ? " " + r.unit : "")) : "") + '</span><span class="tfACTiles" aria-hidden="true">' + l.map((c) => '<span class="tfACTile"><span class="tfIcon' + (c.kind === "alert" ? " alert" : "") + '"' + (c.on && c.light ? ' data-light style="' + c.light + '"' : "") + ">" + c.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let m = [];
  const b = (t) => {
    const e = wt.areaOrder || [], a = (o) => {
      const r = e.indexOf(o.id);
      return r < 0 ? e.length + t.indexOf(o) : r;
    };
    return [...t].sort((o, r) => a(o) - a(r));
  }, L = () => {
    var e;
    const t = new Set(((e = wt.dash) == null ? void 0 : e.areasOff) || []);
    return b(m).filter((a) => !t.has(a.id));
  }, I = Fa([255, 162, 75]), z = (t) => {
    const e = t.id === q;
    return '<button class="tfIcon tfAreaPick' + (e ? " on" : "") + '" type="button" data-area-pick="' + F(t.id) + '"' + (e ? ' data-light style="' + I + '"' : "") + ' aria-label="' + F(t.name) + '" aria-pressed="' + e + '"><span class="tfAreaGlyph"' + he("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span></button>";
  }, Z = (t) => {
    var o;
    const e = L();
    e.some((r) => r.id === q) || (q = ((o = e[0]) == null ? void 0 : o.id) || null);
    const a = e.find((r) => r.id === q);
    return '<div class="tfAreas" data-tf data-k="areas" style="order:' + t + '"><section class="hcAreaGallery tfAreaGallery" aria-label="Areas">' + e.map(h).join("") + '</section><div class="tfAreaPhone"><div class="tfAreaStage">' + (a ? tt(a, null, ' data-cols="2" data-rows="' + wn("areas") + '"') : "") + '</div><div class="tfAreaPicks" role="group" aria-label="Areas">' + e.map(z).join("") + "</div></div></div>";
  }, W = (t) => t.startsWith("room:"), $ = (t) => m.find((e) => "room:" + e.id === t);
  function tt(t, e, a = "") {
    const o = Gn(t), r = Mi(t), l = r && Er(r), c = r ? s(t, r, o) : "", f = l ? l.text + (l.unit ? " " + l.unit : "") : "", u = (_) => {
      const j = Ie(t, _.key);
      return j.length === 1 ? j[0] : "group:" + t.id + ":" + _.key;
    }, v = o.filter((_) => _.kind === "control").slice(0, 4), S = (_) => _.on && _.light ? ' data-light style="' + _.light + '"' : "", x = (_) => '<button class="tfIcon' + (_.on ? " on" : "") + '" type="button" data-tone="' + _.tone + '"' + S(_) + ' data-acts="' + _a(_.acts) + '" aria-label="' + F(_.aria) + '" aria-pressed="' + _.on + '">' + _.icon + "</button>", R = v.map(x), E = v.map((_) => '<div class="tfRoomDev' + (_.on ? " on" : "") + '">' + x(_) + '<button class="tfName tfRoomDevName" type="button" data-more="' + F(u(_)) + '" aria-label="' + F(t.name + " " + _.label.toLowerCase() + ", " + _.value + ". Open") + '"><span class="activityRowName">' + F(_.label) + '</span><span class="activityRowMeta">' + F(_.value) + "</span></button></div>"), B = o.find((_) => _.key === "lights"), M = '<span class="tfAreaGlyph"' + he("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span>", P = B ? '<button class="tfIcon tfRoomIcon" type="button" data-acts="' + _a(B.acts) + '" aria-label="' + F(B.aria) + '" aria-pressed="' + !!B.on + '">' + M + "</button>" : '<span class="tfIcon tfRoomIcon" aria-hidden="true">' + M + "</span>";
    return '<div class="tfAction tfRoomTile"' + (e ? ' data-k="' + F(e) + '"' : "") + a + ' data-go="' + F(t.id) + '"><div class="tfActionHead">' + P + '<button class="tfName" type="button" data-go="' + F(t.id) + '" aria-label="Open ' + F(t.name) + '"><span class="activityRowName">' + F(t.name) + "</span>" + (f || c ? '<span class="activityRowMeta">' + (f ? '<span class="tfRoomInline">' + F(f) + (c ? " · " : "") + "</span>" : "") + F(c) + "</span>" : "") + "</button></div>" + // the reading opens its more-info (the thermometer's, say)
    (f ? '<button class="tfRoomReading" type="button" data-more="' + F(r) + '" aria-label="' + F(ht(r) + ", " + He(r) + ". More info") + '"><span class="tfRoomBig">' + F(f) + "</span>" + (c ? '<span class="tfRoomSub">' + F(c) + "</span>" : "") + "</button>" : "") + (R.length ? '<div class="tfRoomDevices">' + R.join("") + '</div><div class="tfRoomHeads">' + E.join("") + "</div>" : "") + "</div>";
  }
  const mt = () => [
    { key: "home", name: "Home", ids: Vt.homeVacuums },
    ...Vt.rooms.map((t) => ({ key: "room:" + t.id, name: t.name, room: t, ids: t.actions }))
  ], Rt = (t, e, a) => t + " " + (t === 1 ? e : a), St = () => (wt.favourites ?? Ot.favorite_entities ?? []).filter((t) => k[t]);
  function At() {
    if (!rn) {
      const e = Object.entries(ya).sort((o, r) => r[1] - o[1]).map(([o]) => o), a = Vt.rooms.flatMap((o) => o.actions);
      rn = [.../* @__PURE__ */ new Set([...co, ...e, ...a.filter((o) => vo(o).on), ...a])];
    }
    const t = St();
    return rn.filter((e) => k[e] && k[e].state !== "unavailable" && !t.includes(e));
  }
  let jt = !1;
  const Lt = 6;
  function dt() {
    if (!jt || wt.favSeeded || !Vt.rooms.length || T) return;
    const t = (a) => Object.keys(k).find((o) => Ya(o) && a(o)), e = [t((a) => a.startsWith("climate.")), t((a) => a.startsWith("cover.") && /curtain/.test(a)), t((a) => a.startsWith("valve.")), Vt.security.locks[0]];
    wt = { ...wt, favourites: [.../* @__PURE__ */ new Set([...wt.favourites ?? Ot.favorite_entities ?? [], ...e.filter(Boolean)])].slice(0, Lt), favSeeded: !0 }, xa();
  }
  const Ht = () => wt.suggest ?? !Ot.hide_suggested_entities;
  function It() {
    const t = new Set(T ? [] : wt.favHidden || []), e = St().filter((r) => !t.has(r)), a = Ht() ? At().filter((r) => !t.has(r) && Cs(r)) : [], o = Math.max(Lt, e.length);
    return [...e, ...a].slice(0, T && !Ni() ? o : Math.min(X0, o));
  }
  const ke = (t) => {
    const e = St().includes(t);
    return '<button class="tfStar" type="button" data-star="' + F(t) + '" aria-pressed="' + e + '" aria-label="Favourite: ' + F(ht(t)) + '">' + Z0(e) + "</button>";
  };
  function _t(t, { area: e = !1, star: a = !1, plain: o = !1, say: r = null, alert: l = !1 } = {}) {
    var B, M, P, _, j, C;
    const c = o && ((j = (B = d()) == null ? void 0 : B.devices) == null ? void 0 : j[(_ = (P = (M = d()) == null ? void 0 : M.entities) == null ? void 0 : P[t]) == null ? void 0 : _.device_id]), f = c && (c.name_by_user || c.name) || ht(t), u = t.split(".")[0], v = !o && cr.includes(u) ? vo(t) : null, S = v ? v.on : ["on", "open", "playing"].includes((C = k[t]) == null ? void 0 : C.state), x = o ? null : v ? v.button : $r.includes(u) ? { act: Et(u, "toggle", t), label: "Turn " + ht(t) + (S ? " off" : " on") } : u === "scene" || u === "script" ? { act: Et(u, "turn_on", t), label: "Run " + ht(t) } : null, R = (r ?? He(t)) + (e && we.get(t) ? " · " + we.get(t) : ""), E = (v == null ? void 0 : v.icon) || Sa(t);
    return '<div class="activityRow' + (x ? " tfPlug" : "") + (S ? " on" : "") + (a ? " tfPick" : "") + (l ? " alert" : "") + '" data-k="' + F((e ? "fav:" : "row:") + t) + '" data-tone="' + (u === "light" ? "light" : (v == null ? void 0 : v.tone) || "blue") + '"' + Ka(t) + ">" + (x && !a ? '<button class="tfIcon" type="button" data-act="' + x.act + '" aria-label="' + F(x.label) + '"' + he(t, E) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + he(t, E) + "></div>") + '<button class="tfName" type="button" data-more="' + F(t) + '" aria-label="' + F(f + ", " + R + ". More info") + '"><span class="activityRowName">' + F(f) + '</span><span class="activityRowMeta">' + F(R) + "</span></button>" + (a ? ke(t) : "") + "</div>";
  }
  const oe = () => {
    var t;
    return k[(t = wt.sources) == null ? void 0 : t.weather] ? wt.sources.weather : k["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(k).find((e) => e.startsWith("weather."));
  };
  function pe() {
    var a;
    const t = (o) => Object.keys(k).filter((r) => r.startsWith("binary_sensor.") && o.includes(zt(r).device_class));
    return ((a = _e.alert_entities) != null && a.length ? _e.alert_entities : [...t(["moisture", "smoke", "gas"]).map((o) => ({ entity: o, severity: "alert" })), ...t(ns).map((o) => ({ entity: o, severity: "warning" }))]).filter((o) => k[o.entity]).map((o) => ({ ...o, on: ["on", "open", "unlocked", "triggered", "problem"].includes(k[o.entity].state) }));
  }
  function ga() {
    const t = Object.keys(Xr), e = /* @__PURE__ */ new Set(), a = [];
    (Ot.shortcuts || []).forEach((l) => {
      if (l.type === "summary") {
        if (!t.includes(l.key) || e.has(l.key)) return;
        e.add(l.key);
      }
      a.push(l);
    }), t.forEach((l) => {
      e.has(l) || a.push({ type: "summary", key: l });
    });
    const o = Un().sumOrder || [], r = (l) => l.type === "summary" && o.includes(l.key) ? o.indexOf(l.key) : o.length;
    return o.length ? a.map((l, c) => [l, c]).sort((l, c) => r(l[0]) - r(c[0]) || l[1] - c[1]).map(([l]) => l) : a;
  }
  function yo() {
    var P;
    const t = ((P = d()) == null ? void 0 : P.entities) || {}, e = (_) => zt(_).device_class, a = Object.keys(k).filter((_) => _.startsWith("sensor.") && e(_) === "battery" || _.startsWith("binary_sensor.") && ["battery", "problem"].includes(e(_))), o = Vt.rooms.flatMap((_) => _.plants.map((j) => j.id));
    if (!a.length && !o.length) return null;
    const r = (_) => {
      var C;
      const j = (C = t[_]) == null ? void 0 : C.device_id;
      return !!j && Object.keys(k).some((rt) => {
        var Tt;
        return rt.startsWith("binary_sensor.") && ((Tt = t[rt]) == null ? void 0 : Tt.device_id) === j && e(rt) === "battery_charging" && k[rt].state === "on";
      });
    }, l = (_) => _.startsWith("vacuum.") ? zt(_).battery_level <= 20 && k[_].state !== "docked" : _.startsWith("binary_sensor.") ? e(_) === "battery" && k[_].state === "on" : parseFloat(k[_].state) <= 20 && !r(_), c = [...a, ...Vt.vacuums].filter((_) => k[_] && l(_)), f = [...a.filter((_) => e(_) === "problem" && k[_].state === "on"), ...o.filter((_) => {
      var j;
      return ((j = k[_]) == null ? void 0 : j.state) === "problem";
    })], u = a.filter((_) => k[_].state === "unavailable"), v = [.../* @__PURE__ */ new Set([...c, ...f, ...u])], S = (_) => {
      const j = parseFloat(k[_].state);
      return e(_) === "battery" && Number.isFinite(j) ? j : 101;
    }, x = [...o, ...Vt.vacuums, ...[...a].sort((_, j) => S(_) - S(j))].filter((_) => k[_] && !v.includes(_)), R = /* @__PURE__ */ new Map();
    x.forEach((_) => {
      var C;
      const j = ((C = Vt.areaOf) == null ? void 0 : C.call(Vt, _)) || "";
      R.set(j, [...R.get(j) || [], _]);
    });
    const E = (_) => {
      const j = Vt.rooms.findIndex((C) => C.id === _);
      return _ === "" ? 1 / 0 : j < 0 ? Vt.rooms.length : j;
    }, B = [...R.keys()].sort((_, j) => E(_) - E(j)), M = (_) => {
      var j, C, rt, Tt;
      return ((j = Vt.rooms.find((Bt) => Bt.id === _)) == null ? void 0 : j.name) || ((Tt = (rt = (C = d()) == null ? void 0 : C.areas) == null ? void 0 : rt[_]) == null ? void 0 : Tt.name) || _;
    };
    return {
      value: [c.length && Rt(c.length, "low battery", "low batteries"), f.length && Rt(f.length, "problem", "problems"), u.length && Rt(u.length, "unavailable device", "unavailable devices")].filter(Boolean).join(", ") || "All good",
      plain: !0,
      groups: [{ name: "Needs attention", ids: v, alert: !0 }, ...B.map((_) => ({ name: _ ? M(_) : B.length > 1 ? "Other devices" : "Devices", ids: R.get(_) }))].filter((_) => _.ids.length)
    };
  }
  const Un = () => T ? wt.home || {} : wt, mn = (t) => Tp.includes(t) ? (Un().shownSums || []).includes(t) : !(Un().hiddenSums || []).includes(t);
  function Si(t, e, a) {
    const o = t.flatMap((R) => a(R, /^cover\./)), r = o.filter((R) => {
      var E;
      return ["open", "opening"].includes((E = k[R]) == null ? void 0 : E.state);
    }).length, l = Object.keys(k).filter((R) => R.startsWith("person.")), c = l.filter((R) => {
      var E;
      return ((E = k[R]) == null ? void 0 : E.state) === "home";
    }).length, f = Vt.security.openings.filter((R) => k[R]), u = f.filter((R) => k[R].state === "on").length, v = Object.keys(k).filter((R) => R.startsWith("binary_sensor.") && zt(R).device_class === "moisture"), S = v.filter((R) => k[R].state === "on").length, x = Vt.vacuums.filter((R) => k[R]);
    return {
      covers: o.length && { value: r ? r + " open" : "All closed", groups: e((R) => a(R, /^cover\./)) },
      people: l.length && { value: c ? c + " home" : "Nobody home", groups: [{ name: "People", ids: l }] },
      openings: f.length && { value: u ? u + " open" : "All closed", groups: [{ name: "Doors and windows", ids: f }] },
      leaks: v.length && { value: S ? Rt(S, "leak", "leaks") : "All dry", groups: [{ name: "Leak sensors", ids: v }] },
      vacuum: x.length && { value: Wt(k[x[0]].state), groups: [{ name: "Vacuum", ids: x }] }
    };
  }
  function Jt(t = !1) {
    var Ut;
    const e = Vt.rooms, a = Vt.security, o = (Ct, Dt) => Ct.actions.filter((ve) => Dt.test(ve)), r = (Ct) => e.map((Dt) => ({ name: Dt.name, ids: Ct(Dt) })).filter((Dt) => Dt.ids.length), l = e.flatMap((Ct) => Ct.lights), c = l.filter((Ct) => {
      var Dt;
      return ((Dt = k[Ct]) == null ? void 0 : Dt.state) === "on";
    }).length, f = e.map((Ct) => Ct.readings.find((Dt) => zt(Dt).device_class === "temperature")).filter(Boolean).map((Ct) => Number(k[Ct].state)).filter(Number.isFinite), [u, v] = [Re(Math.min(...f)), Re(Math.max(...f))], S = e.flatMap((Ct) => o(Ct, /^media_player\./)), x = S.filter((Ct) => {
      var Dt;
      return ((Dt = k[Ct]) == null ? void 0 : Dt.state) === "playing";
    }).length, R = pe(), E = R.filter((Ct) => Ct.severity === "warning" && Ct.on).length, B = a.locks.filter((Ct) => {
      var Dt;
      return ["unlocked", "jammed", "open"].includes((Dt = k[Ct]) == null ? void 0 : Dt.state);
    }).length, M = a.alarms.filter((Ct) => {
      var Dt;
      return ((Dt = k[Ct]) == null ? void 0 : Dt.state) === "disarmed";
    }).length, P = E ? Rt(E, "warning", "warnings") : null, _ = B ? B + " unlocked" : M ? M + " disarmed" : P ? null : "All secure", j = yo(), C = e.flatMap((Ct) => Ct.solar), rt = C.find((Ct) => Ct.endsWith("_power")), Tt = {
      light: l.length && { value: c ? c + " on" : "All off", groups: r((Ct) => Ct.lights) },
      climate: f.length && { value: u === v ? u + "°" : u + " - " + v + "°", groups: r((Ct) => [...Ct.readings.filter((Dt) => ["temperature", "humidity"].includes(zt(Dt).device_class)), ...o(Ct, /^(climate|humidifier)\./)]) },
      security: (a.alarms.length || a.locks.length) && { value: [P, _].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...a.alarms, ...a.locks] }, { name: "Doors and windows", ids: a.openings }].filter((Ct) => Ct.ids.length) },
      media_players: S.length && { value: x ? x + " playing" : "No media playing", groups: r((Ct) => o(Ct, /^media_player\./)) },
      maintenance: j,
      energy: Vt.grid && { value: kr(Number(((Ut = k[rt]) == null ? void 0 : Ut.state) || 0) * 1e3 + Number(k[Vt.grid].state)) + " now", groups: [{ name: "Energy", ids: [...C, Vt.grid] }] },
      ...Si(e, r, o)
    }, Bt = [], Gt = R.filter((Ct) => Ct.severity !== "warning" && Ct.on);
    return Gt.length && Bt.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: Rt(Gt.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: Gt.map((Ct) => Ct.entity) }] }), ga().forEach((Ct) => {
      Ct.type !== "summary" ? Bt.push({ key: "path:" + Ct.path, name: Ct.label || Ct.path, icon: Ct.icon || "mdi:link-variant", colour: "", value: "" }) : !Ct.hidden && Tt[Ct.key] && (t || mn(Ct.key)) && Bt.push({ key: Ct.key, ...Xr[Ct.key], ...Tt[Ct.key] });
    }), Bt;
  }
  const xo = (t) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + F(t.key) + '" data-k="sum:' + F(t.key) + '" aria-label="' + F(t.name + (t.value ? ", " + t.value : "")) + '"' + (t.key === "alerts" ? ' style="--sum:' + t.colour + ';--sum-ink:#ffffff"' : t.key === "climate" ? ' style="' + uo() + '"' : t.colour && On(t.colour) ? ' style="' + On(t.colour).slice(1) + '"' : "") + ">" + (t.key === "climate" ? yr : "") + '<div class="tfIcon" aria-hidden="true"' + he(t.id || "", t.icon, t.name) + '></div><div><div class="activityRowName">' + F(t.name) + "</div>" + (t.value ? '<div class="activityRowMeta">' + F(t.value) + "</div>" : "") + "</div></div>";
  function ko(t) {
    const e = St();
    wt = { ...wt, favourites: e.includes(t) ? e.filter((a) => a !== t) : [...e, t], favHidden: (wt.favHidden || []).filter((a) => a !== t) }, xa(), Pe();
  }
  function gn(t) {
    document.querySelector("home-assistant") && (window.history.pushState(null, "", t), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function Yn(t, e) {
    if (t.startsWith("path:")) {
      gn(t.slice(5));
      return;
    }
    qi("summary:" + t, e);
  }
  async function _i() {
    const t = (c) => Promise.resolve().then(() => D(c)).catch(() => null), [e, a, o, r] = await Promise.all([
      t({ type: "frontend/get_user_data", key: Lp }),
      t({ type: "frontend/get_system_data", key: "home" }),
      t({ type: "frontend/get_system_data", key: "security" }),
      t({ type: "usage_prediction/common_control" })
    ]), l = (e == null ? void 0 : e.value) || {};
    wt = { favourites: l.favourites ?? null, sources: l.sources, hiddenSums: l.hiddenSums, shownSums: l.shownSums, home: l.home, dash: l.dash, named: l.named, favHidden: l.favHidden, suggest: l.suggest, favSeeded: l.favSeeded, favsTitle: l.favsTitle, areaOrder: l.areaOrder }, Ot = (a == null ? void 0 : a.value) || {}, _e = (o == null ? void 0 : o.value) || {}, co = Array.isArray(r == null ? void 0 : r.entities) ? r.entities : [], rn = null, Object.keys(k).length && Pe(), ra(), jt = !0, dt();
  }
  const bn = "HomeCore";
  async function ra() {
    var o, r, l;
    const t = location.pathname.split("/")[1], e = wt.named || [];
    if (!((r = (o = d()) == null ? void 0 : o.user) != null && r.is_admin) || !t || e.includes(t)) return;
    const a = () => {
      wt = { ...wt, named: [...e, t] }, xa();
    };
    try {
      const c = (l = await D({ type: "lovelace/dashboards/list" })) == null ? void 0 : l.find((v) => v.url_path === t);
      if (!c || c.mode === "yaml") return;
      if (c.title === bn) {
        a();
        return;
      }
      const f = await D({ type: "lovelace/config", url_path: t }), u = ((f == null ? void 0 : f.views) || []).flatMap((v) => [...v.cards || [], ...(v.sections || []).flatMap((S) => S.cards || [])]);
      if (!u.length || !u.every((v) => (v == null ? void 0 : v.type) === "custom:homecore-card" && !v.page)) return;
      await D({ type: "lovelace/dashboards/update", dashboard_id: c.id, title: bn }), a();
    } catch {
    }
  }
  let Br = null, xs = 0, ks = !1;
  const rc = (t) => {
    const e = t.split(".")[0], a = zt(t).device_class;
    return K0.includes(e) && (e !== "binary_sensor" || ns.includes(a) || !!Op[a]);
  }, Ms = (t) => t.startsWith("binary_sensor.") ? Op[zt(t).device_class] : null;
  async function _f() {
    var t;
    if (!(ks || Date.now() - xs < 30 * 1e3)) {
      ks = !0, xs = Date.now();
      try {
        const e = Object.keys(((t = d()) == null ? void 0 : t.states) || {}).filter(rc), a = e.length ? await D({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: e }) : null;
        Br = Array.isArray(a) ? a.filter((o) => o.entity_id && o.state != null && o.when) : null;
      } catch {
        Br = null;
      }
      ks = !1, Pe();
    }
  }
  function Cf() {
    const t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map(), a = (r) => {
      if (!k[r.entity_id] || !rc(r.entity_id) || !Cs(r.entity_id) || ["unavailable", "unknown"].includes(r.state)) return;
      if (Ms(r.entity_id)) {
        const c = e.get(r.entity_id);
        r.state === "on" ? (!c || r.when > c.when + 1) && e.set(r.entity_id, { ...r, alarm: !0, cleared: null }) : c && !c.cleared && r.when > c.when && (c.cleared = r.when);
        return;
      }
      const l = t.get(r.entity_id);
      (!l || r.when > l.when + 1) && t.set(r.entity_id, r);
    };
    [...Br || []].sort((r, l) => r.when - l.when).forEach(a);
    const o = Br ? xs / 1e3 - 5 : 0;
    return Object.keys(k).forEach((r) => {
      var f;
      const l = k[r], c = l.last_changed ? Date.parse(l.last_changed) / 1e3 : 0;
      c > o && a({ entity_id: r, state: l.state, when: c, context_user_id: (f = l.context) == null ? void 0 : f.user_id });
    }), [...t.values(), ...e.values()].sort((r, l) => l.when - r.when).slice(0, $0);
  }
  function Af(t) {
    var o;
    const e = t.context_user_id && Object.keys(k).find((r) => r.startsWith("person.") && zt(r).user_id === t.context_user_id);
    if (e) return ht(e);
    const a = (o = d()) == null ? void 0 : o.user;
    return a && t.context_user_id === a.id ? a.name : ["automation", "script"].includes(t.context_domain) || t.context_event_type === "automation_triggered" ? t.context_name || "Home Assistant" : "";
  }
  function Tf(t) {
    const e = t.entity_id.split(".")[0], a = String(t.state);
    return e === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[a] || Wt(a).toLowerCase() : e === "cover" || e === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[a] || Wt(a).toLowerCase() : e === "binary_sensor" ? a === "on" ? "opened" : "closed" : e === "climate" ? a === "off" ? "turned off" : "set to " + Wt(a).toLowerCase() : e === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[a] || Wt(a).toLowerCase() : e === "alarm_control_panel" ? (Np[a] || Wt(a)).toLowerCase() : e === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[a] || Wt(a).toLowerCase() : a === "on" ? "turned on" : a === "off" ? "turned off" : Wt(a).toLowerCase();
  }
  function Lf(t) {
    const e = t.entity_id, a = t.alarm && Ms(e), o = ht(e) + " " + (a ? a[0] : Tf(t)), r = a ? $a(t.when * 1e3) + (t.cleared ? " · " + a[1] + " since " + $a(t.cleared * 1e3) : "") : [Af(t), $a(t.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow' + (a ? " alert" : "") + '"><div class="tfIcon' + (a ? " alert" : "") + '" aria-hidden="true"' + he(e, Sa(e)) + '></div><button class="tfName" type="button" data-more="' + F(e) + '" data-at="' + Math.round(t.when * 1e3) + '" aria-label="' + F(o + ", " + r + ". More info") + '"><span class="activityRowName">' + F(o) + '</span><span class="activityRowMeta">' + F(r) + "</span></button></div>";
  }
  let Wa = null, ic = 0;
  const Df = [["electricity", "Electricity", 4.3, "kWh"], ["solar", "Solar", 2.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function sc() {
    var e;
    if (Date.now() - ic < 5 * 60 * 1e3) return;
    ic = Date.now();
    const t = [];
    try {
      const a = ((e = await D({ type: "energy/get_prefs" })) == null ? void 0 : e.energy_sources) || [], o = (r) => a.filter((l) => l.type === r).flatMap((l) => r === "grid" ? (l.flow_from || []).map((c) => c.stat_energy_from) : [l.stat_energy_from]).filter(Boolean);
      for (const [r, l, c] of [["electricity", "Electricity", o("grid")], ["solar", "Solar", o("solar")], ["gas", "Gas", o("gas")], ["water", "Water", o("water")]]) {
        if (!c.length) continue;
        const f = await Promise.all(c.map((u) => Promise.resolve(D({ type: "recorder/statistic_during_period", statistic_id: u, calendar: { period: "day" }, types: ["change"] })).then((v) => Number(v == null ? void 0 : v.change) || 0, () => 0)));
        t.push({ key: r, name: l, id: c[0], ids: c, value: f.reduce((u, v) => u + v, 0), unit: zt(c[0]).unit_of_measurement || (r === "gas" || r === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    Wa = t, Pe();
  }
  let Zn = null, lc = [];
  function Ss() {
    var l;
    const t = lc = Wa != null && Wa.length ? Wa : Df.map(([c, f, u, v]) => {
      if (c === "solar") {
        const x = Object.keys(k).find((R) => R.endsWith("_solar_today") && !R.includes("made_up_energy"));
        x && Number.isFinite(Number(k[x].state)) && (u = Number(k[x].state));
      }
      const S = "sensor.made_up_energy_" + c;
      return k[S] = { entity_id: S, state: String(u), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: f + " today", unit_of_measurement: v, state_class: "total_increasing" } }, { key: c, name: f, id: S, value: u, unit: v };
    });
    ot.clear(), t.some((c) => c.id === Zn) || (Zn = t[0].id);
    const e = t.map((c) => {
      const f = Number(c.value).toLocaleString(void 0, { maximumFractionDigits: c.value < 10 ? 2 : 1 }) + " " + c.unit, u = J0[c.key], v = c.id === Zn;
      return ot.set(c.id, { name: c.name, text: f, icon: u }), '<div class="activityRow tap' + (v ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + F(c.id) + '" aria-pressed="' + v + '" aria-label="' + F(c.name + ", " + f) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + he("", u, c.name) + '></div><div><div class="activityRowName">' + F(c.name) + '</div><div class="activityRowMeta">' + F(f) + "</div></div></div>";
    }), a = t.find((c) => c.id === Zn), o = (((l = se().opts.energy) == null ? void 0 : l.graph) || "above") === "below", r = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + F(a.id) + '" role="img" aria-label="' + F(a.name) + ', last 24 hours"></svg></div>';
    return Ja("dash:energy", 0, "Energy today", e, r, Jt().some((c) => c.key === "energy") ? "summary:energy" : null, "tfDashCard tfDash-energy" + (o ? "" : " graphAbove"));
  }
  function cc(t) {
    const e = H.querySelector(".tfDash-energy"), a = e == null ? void 0 : e.querySelector(".tfDashGraph svg");
    !a || t === Zn || (Zn = t, e.querySelectorAll("[data-energy-pick]").forEach((o) => {
      const r = o.dataset.energyPick === t;
      o.classList.toggle("picked", r), o.setAttribute("aria-pressed", String(r));
    }), a.dataset.graph = t, a.dataset.drawn = "", ua.set("dash:energy", Ss()), Xc(!0));
  }
  const dc = {
    electricity: [15, 12, 10, 10, 10, 12, 25, 45, 40, 30, 25, 30, 35, 30, 25, 25, 35, 60, 80, 70, 55, 45, 30, 20],
    gas: [2, 2, 2, 2, 3, 8, 18, 20, 12, 6, 4, 4, 4, 4, 4, 5, 8, 14, 16, 14, 10, 6, 3, 2],
    water: [0, 0, 0, 0, 0, 2, 12, 18, 8, 4, 3, 4, 6, 3, 2, 3, 4, 6, 10, 8, 5, 5, 3, 1]
  }, pc = /* @__PURE__ */ new Map();
  async function Ef(t) {
    const e = /* @__PURE__ */ new Date(), a = new Date(e).setHours(0, 0, 0, 0), o = e.getHours(), r = e.getMinutes() / 60, l = Array.from({ length: 24 }, (f, u) => u <= o ? 0 : null);
    if (!t.ids) {
      const f = dc[t.key] || dc.electricity, u = f.map((S, x) => x < o ? S : x === o ? S * r : 0), v = u.reduce((S, x) => S + x, 0) || 1;
      return l.map((S, x) => S == null ? null : t.value * u[x] / v);
    }
    const c = pc.get(t.id);
    if (c && c.day === a && Date.now() - c.at < 5 * 60 * 1e3) return c.hours;
    try {
      const f = await D({ type: "recorder/statistics_during_period", start_time: new Date(a).toISOString(), end_time: e.toISOString(), statistic_ids: t.ids, period: "hour", types: ["change"] });
      t.ids.forEach((S) => ((f == null ? void 0 : f[S]) || []).forEach((x) => {
        const R = typeof x.start == "number" ? x.start : Date.parse(x.start), E = new Date(R).getHours();
        R >= a && E < o && (l[E] += Number(x.change) || 0);
      }));
      const u = new Date(e).setMinutes(0, 0, 0), v = await Promise.all(t.ids.map((S) => Promise.resolve(D({ type: "recorder/statistic_during_period", statistic_id: S, fixed_period: { start_time: new Date(u).toISOString(), end_time: e.toISOString() }, types: ["change"] })).then((x) => Number(x == null ? void 0 : x.change) || 0, () => 0)));
      l[o] = v.reduce((S, x) => S + x, 0);
    } catch {
    }
    return pc.set(t.id, { at: Date.now(), day: a, hours: l }), l;
  }
  async function Bf(t, e) {
    const a = await Ef(e);
    if (!t.isConnected) return;
    const o = Math.max(120, t.clientWidth || 260), r = Math.max(60, t.clientHeight || 130), l = 18, c = r - 18, f = o / 24, u = f * 0.72, v = (/* @__PURE__ */ new Date()).getHours(), S = a.map((P) => P ?? 0), x = Math.max(0, ...S), R = (P) => c - (x > 0 ? P / x * (c - l) : 0), E = (P) => P.toLocaleString(void 0, { maximumFractionDigits: P < 10 ? 2 : 1 }) + " " + e.unit, B = (P) => String(P).padStart(2, "0") + ":00", M = x > 0 ? S.indexOf(x) : -1;
    t.setAttribute("viewBox", "0 0 " + o + " " + r), t.setAttribute("aria-label", e.name + " today by the hour: " + E(e.value) + (M >= 0 ? ", most " + E(x) + " at " + B(M) : "")), t.innerHTML = [l, (l + c) / 2, c].map((P) => '<line x1="0" x2="' + o + '" y1="' + P + '" y2="' + P + '" stroke="var(--line)" stroke-width="1"/>').join("") + a.map((P, _) => P > 0 ? '<rect x="' + (_ * f + (f - u) / 2).toFixed(1) + '" y="' + R(P).toFixed(1) + '" width="' + u.toFixed(1) + '" height="' + (c - R(P)).toFixed(1) + '" rx="2" fill="' + (_ === v ? "var(--primary)" : "var(--text)") + '"' + (_ === v ? "" : ' fill-opacity=".5"') + "/>" : "").join("") + [0, 6, 12, 18].map((P) => '<text x="' + (P * f).toFixed(1) + '" y="' + (r - 3) + '">' + String(P).padStart(2, "0") + "</text>").join("") + (M >= 0 ? '<text x="0" y="11">Most: ' + F(E(x)) + " at " + B(M) + "</text>" : "");
  }
  function Rf(t) {
    var e;
    (e = window.matchMedia) != null && e.call(window, "(prefers-reduced-motion: reduce)").matches || t.querySelectorAll("rect").forEach((a, o) => a.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], { duration: 500, delay: o * 18, easing: "cubic-bezier(.2,.7,.3,1)", fill: "backwards" }));
  }
  function fc(t) {
    var o;
    if ((o = window.matchMedia) != null && o.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [e, a] = t.querySelectorAll("path");
    of(t, a, [e].filter(Boolean));
  }
  let Ci = null, _s = 0;
  const Cs = (t) => !t.startsWith("light.") || Q0.includes((we.get(t) || "").toLowerCase()), As = () => Math.max(2, Qo((H == null ? void 0 : H.clientWidth) || 0).n), uc = (t) => {
    const e = vo(t);
    return e.sections.map((a, o) => a && (e.parts || [])[o]).filter(Boolean);
  }, Pf = (t) => uc(t).slice(0, wn(t) - 1);
  function hc(t) {
    const e = se().tiles;
    if (e) return e.filter((o) => k[o] || $(o));
    if (!Ci) {
      const o = (r) => {
        var l;
        return (((l = k[r]) == null ? void 0 : l.state) === "on" ? 1e6 : 0) + (ya[r] || 0);
      };
      Ci = {
        lights: Vt.rooms.flatMap((r) => r.lights).filter((r) => {
          var l;
          return Cs(r) && ((l = k[r]) == null ? void 0 : l.state) !== "unavailable";
        }).sort((r, l) => o(l) - o(r) || ht(r).localeCompare(ht(l))),
        climates: Vt.rooms.flatMap((r) => r.actions.filter((l) => l.startsWith("climate.")))
      };
    }
    const a = Ci.climates.filter((o) => k[o]).slice(0, t > 3 ? 2 : 1);
    return [...Ci.lights.filter((o) => k[o]).slice(0, Math.max(0, t - a.length)), ...a];
  }
  const Ts = () => {
    var t;
    return ((t = wt.home) == null ? void 0 : t.welcome) ?? !0;
  }, Hf = () => {
    var e, a;
    const t = (e = d()) == null ? void 0 : e.user;
    return (t == null ? void 0 : t.name) || ((a = Object.values(k).find((o) => {
      var r;
      return o.entity_id.startsWith("person.") && (t == null ? void 0 : t.id) && ((r = o.attributes) == null ? void 0 : r.user_id) === t.id;
    })) == null ? void 0 : a.attributes.friendly_name) || "";
  }, Nf = () => {
    const t = (/* @__PURE__ */ new Date()).getHours(), e = Hf();
    return (t >= 5 && t < 12 ? "Good morning" : t >= 12 && t < 18 ? "Good afternoon" : "Good evening") + (e ? ", " + e : "");
  }, mc = (t, e, a, o) => (r) => '<section class="card tfCard tfDashCard ' + t + '" data-tf data-k="' + e + '" aria-label="' + a + '">' + (o ? '<div class="activityHeader">' + (e === "favs" ? '<button class="activityTitle tfTitleBtn" type="button" data-more="favourites" aria-label="Favourites. More info">' + a + "</button>" : '<div class="activityTitle">' + a + "</div>") + "</div>" : "") + '<div class="activityRows">' + r + "</div></section>";
  function Of(t, e) {
    var l, c;
    t.dash = !0, t.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + ((T ? Ts() : se().welcome) ? '<span class="tfGreeting">' + F(Nf()) + "</span>" : "") + F(((c = (l = d()) == null ? void 0 : l.config) == null ? void 0 : c.location_name) || "Home") + "</h1>" }), e.length && t.push({ key: "sums", wrap: (f) => '<div class="tfDashBarRow" data-tf data-k="sums">' + mc("tfDash-bar", "sums-bar", "Summaries", !1)(f).replace(" data-tf", "") + "</div>", tiles: e.map((f) => ({ key: "sum:" + f.key, html: xo(f) })) }), !T && L().length && t.push({ key: "areas", html: Z(0) });
    const a = It();
    if (a.length && t.push({ key: "favs", wrap: mc("tfDash-favs", "favs", "Favourites", Ti()), tiles: a.map((f) => ({ key: "fav:" + f, html: _t(f, { area: !0 }) })) }), T)
      return sc(), Tc() && t.push({ key: "dash:energy", html: Ss() }), _s = As(), hc(0).forEach((f) => t.push({
        key: "dash:tile:" + f,
        wrap: (u) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + F(f) + '">' + u + "</div>",
        tiles: [{ key: f, html: tt($(f), f) }]
      })), t;
    const o = Cf();
    t.push({ key: "dash:act", html: Ja("dash:act", 0, "Activity", o.length ? o.map(Lf) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), t.push({ key: "dash:energy", html: Ss() });
    const r = As();
    return _s = r, hc(r >= 3 ? r : r * 2).forEach((f) => t.push({
      key: "dash:tile:" + f,
      wrap: (u) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + F(f) + '">' + u + "</div>",
      tiles: [{ key: f, html: W(f) ? tt($(f), f) : Xo(f, !1, Pf(f)) }]
    })), _f(), sc(), t;
  }
  const Rr = 252, de = 16, If = 200, Ff = Math.round(Rr * 1.25), qf = 60, Aa = qf + de, Wf = 3, gc = {
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
  }, Vf = ["wx", "favs", "act", "energy", "avg"], bc = ["XS", "S", "M", "L", "XL"], wc = bc.length, jf = ["Narrow", "Wide", "Really wide"], zf = { wx: 5, areas: 5, favs: 5, act: 5, energy: 4, avg: 4, aq: 4, pollen: 4, radar: 4, hourly: 4, sun: 4, moon: 4, uv: 4, humidity: 4, pressure: 4, wind: 4, visibility: 4 }, vc = (t) => !t.includes(".") || !k[t] || t.startsWith("light.") && un(t) ? wc : Math.min(wc, uc(t).length + 1), wn = (t) => {
    const e = se().opts[t] || {}, a = vc(t), o = Number(e.h) || (e.tall ? 5 : zf[t] || yc);
    return Math.max(1, Math.min(a, o));
  }, yc = 2, Gf = 90, Uf = 56, Ta = (t) => {
    var e;
    return gc[t] || (t.startsWith("room:") ? ((e = m.find((a) => "room:" + a.id === t)) == null ? void 0 : e.name) || "Area" : ht(t));
  }, Yf = 128;
  let ia = !1, te = null, Qe = null, Ls = !1, vn = /* @__PURE__ */ new Map(), Ai = 0, Jo = 0;
  const Mo = ["title", "sums"], Qo = (t) => {
    const e = Math.max(1, Math.floor((t + de) / (If + de)));
    return { n: e, w: Math.max(1, Math.min(Ff, Math.floor((t - (e - 1) * de) / e))) };
  }, Ds = () => b(m), Zf = () => {
    var e;
    const t = new Set(((e = wt.home) == null ? void 0 : e.areasOff) || []);
    return Ds().filter((a) => !t.has(a.id)).map((a) => "room:" + a.id);
  };
  function Kf() {
    const t = Zf();
    return {
      cells: {},
      spans: { favs: 2 },
      hidden: Object.keys(gc).filter((e) => {
        var a, o;
        return !["title", ...((a = wt.home) == null ? void 0 : a.sums) === !1 ? [] : ["sums"], ...((o = wt.home) == null ? void 0 : o.favs) === !1 ? [] : ["favs"], ...tu() ? ["wx"] : [], ...Tc() ? ["energy"] : []].includes(e);
      }),
      opts: { favs: { h: 5 }, ...Object.fromEntries(t.map((e) => [e, { h: 5 }])) },
      tiles: t,
      known: jo,
      areasOff: []
    };
  }
  const se = () => T ? Kf() : Es(), Es = () => {
    let t = { cells: {}, spans: {}, hidden: [], opts: {}, ...wt.dash || {} };
    t.sumsOff && (t = { ...t, hidden: [...t.hidden, "sums"] });
    const e = jo.filter((a) => !(t.known || []).includes(a) && !t.hidden.includes(a));
    return e.length ? { ...t, hidden: [...t.hidden, ...e] } : t;
  };
  function yn(t) {
    T || (wt = { ...wt, dash: { ...t, known: jo } }, xa());
  }
  function xn() {
    const t = (e) => H.querySelector(e);
    return [
      ["title", t(".tfDashTitle"), "full"],
      ["sums", t(".tfDashBarRow"), "full"],
      ["wx", Ia.wx, 2],
      ["areas", t(".tfAreas"), "areas"],
      ["favs", t(".tfDash-favs"), 2],
      ["act", t(".tfDash-act"), 2],
      ["energy", t(".tfDash-energy"), 2],
      ["avg", Ia.avg, 2],
      ...jo.map((e) => [e, Ia[e], hs[e] || 1]),
      ...[...H.querySelectorAll(".tfDashTiles > [data-k]")].map((e) => [e.dataset.k, e, 1, !0])
    ].filter(([, e]) => e == null ? void 0 : e.isConnected).map(([e, a, o, r = !1]) => ({ key: e, el: a, span: o, tile: r }));
  }
  const xc = (t, e, a) => {
    var o;
    if (t.span === "full") return e;
    if (t.span === "areas") {
      const r = 2 * a + de;
      t.el.style.setProperty("--area-open", r + "px");
      const l = Math.ceil((r + Math.max(0, L().length - 1) * (Yf + de) + de) / (a + de));
      return Math.max(Math.min(e, 2), Math.min(l, e - (((o = se().cells.areas) == null ? void 0 : o.col) || 0)));
    }
    return Math.min(e, se().spans[t.key] ?? t.span);
  }, kc = (t) => wn(t.key), Mc = window.matchMedia("(max-width: 620px)"), Xf = (t) => {
    const e = (t - 32 - 56) / 8, a = Math.ceil(L().length / 8);
    return Math.max(1, Math.ceil((t * 982 / 1325 + 14 + a * e + (a - 1) * 8 + de) / Aa));
  };
  function Sc(t, e, a = null) {
    const o = se().cells, r = t.every((f) => !o[f.key] || o[f.key].col + f.cols <= e), l = (f) => o[f.key] || { row: 1e9, col: 0 };
    return (() => {
      const f = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map(), v = (M, P, _, j) => {
        for (let C = P; C < P + j; C++) for (let rt = M; rt < M + _; rt++) if (f.has(rt + "," + C)) return !1;
        return !0;
      }, S = (M, P, _) => {
        for (let j = _; j < _ + M.rows; j++) for (let C = P; C < P + M.cols; C++) f.add(C + "," + j);
        u.set(M.key, { col: P, row: _, cols: M.cols, rows: M.rows });
      }, x = (M, P, _) => {
        for (P = Math.max(0, Math.min(e - M.cols, P)), _ = Math.max(0, _); !v(P, _, M.cols, M.rows); ) _++;
        S(M, P, _);
      }, R = (M) => {
        for (let P = 0; ; P++) for (let _ = 0; _ <= e - M.cols; _++) if (v(_, P, M.cols, M.rows)) {
          S(M, _, P);
          return;
        }
      };
      a && x(a, te.col, te.row);
      const E = t.filter((M) => M !== a), B = (M, P) => l(M).row - l(P).row || l(M).col - l(P).col;
      return r ? (E.filter((M) => o[M.key]).sort(B).forEach((M) => x(M, o[M.key].col, o[M.key].row)), E.filter((M) => !o[M.key]).forEach(R), u) : ([...E].sort(B).forEach(R), u);
    })();
  }
  function $f(t, e) {
    const a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map(), r = (l, c, f) => {
      for (let u = c; u < c + f.rows; u++) for (let v = l; v < l + f.cols; v++) if (a.has(v + "," + u)) return !1;
      return !0;
    };
    return t.forEach((l) => {
      for (let c = 0; ; c++) {
        let f = 0;
        for (; f <= e - l.cols && !r(f, c, l); ) f++;
        if (!(f > e - l.cols)) {
          for (let u = c; u < c + l.rows; u++) for (let v = f; v < f + l.cols; v++) a.add(v + "," + u);
          o.set(l.key, { col: f, row: c, cols: l.cols, rows: l.rows });
          return;
        }
      }
    }), o;
  }
  function Bs() {
    const t = se(), e = new Set(t.hidden), a = xn().filter((c) => !Mo.includes(c.key));
    let o = vn;
    if (!o.size) {
      const c = t.pegs || 4, f = a.filter((u) => !e.has(u.key));
      f.forEach((u) => {
        u.cols = xc(u, c, Rr), u.rows = kc(u) ?? yc;
      }), o = Sc(f, c);
    }
    const r = (c) => !e.has(c.key) && o.get(c.key) || { row: 1e9, col: 0 };
    a.sort((c, f) => r(c).row - r(f).row || r(c).col - r(f).col);
    const l = (t.phone || []).map((c) => a.find((f) => f.key === c && !e.has(c))).filter(Boolean);
    return [...l, ...a.filter((c) => !l.includes(c))];
  }
  const Jf = () => {
    const t = Bs();
    t.forEach((e, a) => e.el.style.setProperty("--o", String(3 + a))), Rs([...xn().filter((e) => Mo.includes(e.key)), ...t].map((e) => e.el));
  };
  function Rs(t) {
    if (te) return;
    const e = n.activeElement;
    let a = null;
    for (const o of new Set(t.map((r) => {
      for (; r && r.parentElement !== H; ) r = r.parentElement;
      return r;
    }).filter(Boolean))) {
      const r = a ? a.nextSibling : H.querySelector(":scope > [data-tf]");
      if (o !== r)
        try {
          H.moveBefore ? H.moveBefore(o, r) : H.insertBefore(o, r);
        } catch {
          H.insertBefore(o, r);
        }
      a = o;
    }
    e && e !== n.activeElement && e.isConnected && e.focus({ preventScroll: !0 });
  }
  const Kn = (t, e) => yn({ ...t, cells: e, pegs: Qo(H.clientWidth).n });
  function Ps(t) {
    const e = H == null ? void 0 : H.querySelector('.tfAreas[data-k="areas"] .tfAreaGallery'), a = e == null ? void 0 : e.querySelector(".tfAreaPanel.active");
    if (!a || e.scrollWidth <= e.clientWidth) return;
    const o = e.getBoundingClientRect(), r = a.getBoundingClientRect(), l = r.right > o.right ? r.right - o.right : r.left < o.left ? r.left - o.left : 0;
    l && e.scrollBy({ left: l, behavior: t ? "smooth" : "auto" });
  }
  function Ve() {
    var j;
    if (requestAnimationFrame(() => Ps(!1)), setTimeout(() => Ps(!1), 360), !w || !H) return;
    const t = H.clientWidth, e = t < 2 * Rr + de, a = g.classList.contains("tfDash");
    T && (ia = !1), g.classList.toggle("tfOverview", T);
    const { n: o, w: r } = e ? { n: 2, w: Math.floor((t - de) / 2) } : Qo(t);
    ka.classList.add("tfPegs"), ka.style.setProperty("--peg-n", o), ka.style.setProperty("--peg-w", r + "px");
    const l = new Set(se().hidden);
    jo.forEach((C) => {
      var rt;
      return (rt = Ia[C]) == null ? void 0 : rt.classList.toggle("tfNotAdded", l.has(C) && !(te != null && te.fromTray && te.key === C));
    }), li(), g.classList.toggle("tfBoard", a), g.classList.toggle("tfEditing", a && ia && !e);
    const c = p("dashEditNav");
    !a && Lo && tl(!1), c && T ? (c.hidden = !a, Lo || (c.classList.remove("active"), c.setAttribute("aria-pressed", "false"), c.setAttribute("aria-label", "Edit Home page"), c.title = "Edit", c.innerHTML = os)) : c && (c.hidden = !a || e, c.classList.toggle("active", ia), c.setAttribute("aria-pressed", String(ia)), c.setAttribute("aria-label", ia ? "Done editing" : "Edit custom dashboard"), c.title = ia ? "Done" : "Edit", c.innerHTML = ia ? Rp : os);
    const f = a ? xn() : [];
    if ((!a || !T) && H.querySelectorAll(":scope > :is(.hcFloor,.hcFloorBox)").forEach((C) => C.remove()), !a) {
      H.style.height = "", H.querySelectorAll(".tfBoardItem").forEach((C) => {
        C.classList.remove("tfBoardItem", "tfBoardHidden"), C.style.left = C.style.top = C.style.width = C.style.height = "";
      }), (j = H.querySelector(".tfDash-act > .activityRows")) == null || j.style.removeProperty("max-height"), Is(!1), g.classList.contains("tfDash") && Jf(), Ae();
      return;
    }
    if (T) {
      ou(f, t, e);
      return;
    }
    H.style.setProperty("--peg-w", r + "px");
    const u = new Set(se().hidden), v = r + de;
    te != null && te.fromTray && u.delete(te.key), f.forEach((C) => C.el.classList.toggle("tfBoardHidden", u.has(C.key)));
    const S = f.filter((C) => !u.has(C.key) && getComputedStyle(C.el).display !== "none");
    let x = 0;
    S.filter((C) => Mo.includes(C.key)).forEach((C) => {
      C.el.classList.add("tfBoardItem"), Object.assign(C.el.style, { width: t + "px", height: "", left: "0px", top: x + "px" });
      const rt = C.key === "sums" && C.el.querySelector(".tfDash-bar"), Tt = rt ? rt.querySelectorAll(".activityRow").length : 0;
      rt && (rt.style.maxWidth = "none");
      for (let Bt = 1; rt && Bt <= Tt && (rt.style.setProperty("--bar-cols", String(Math.ceil(Tt / Bt))), !(rt.offsetWidth <= t)); Bt++)
        ;
      rt && (rt.style.maxWidth = ""), x += C.el.offsetHeight + de;
    }), Jo = x;
    const R = S.filter((C) => !Mo.includes(C.key));
    R.forEach((C) => {
      C.cols = xc(C, o, r), C.el.classList.add("tfBoardItem"), C.el.style.width = (C.cols === o ? t : C.cols * r + (C.cols - 1) * de) + "px", C.el.style.height = "", C.rows = kc(C) ?? Math.max(1, Math.ceil((C.el.offsetHeight + de - 6) / Aa)), C.key === "areas" && Mc.matches && (C.rows = Xf(parseFloat(C.el.style.width)));
    });
    const E = te && R.find((C) => C.key === te.key), B = e && Bs().map((C) => C.key), M = (C) => B.includes(C.key) ? B.indexOf(C.key) : -1, P = e ? $f([...R].sort((C, rt) => M(C) - M(rt)), o) : Sc(R, o, E);
    P.forEach((C) => Object.assign(C, { x: C.cols === o ? 0 : C.col * v, y: Jo + C.row * Aa, w: C.cols === o ? t : C.cols * r + (C.cols - 1) * de, h: C.rows * Aa - de })), R.forEach((C) => {
      const rt = P.get(C.key);
      C.el.style.height = rt.h + "px", C.el.dataset.rows = e && C.key === "wx" ? 5 : wn(C.key), C.key === "areas" && C.el.querySelectorAll(".tfAreaPanel .tfRoomTile, .tfAreaStage>.tfRoomTile").forEach((Tt) => {
        Tt.dataset.rows = C.el.dataset.rows;
      }), C.el.toggleAttribute("data-narrow", !e && rt.cols === 1 && o > 1), C.el.dataset.cols = rt.cols, C.el.classList.contains("tfDac") && C.el.style.setProperty("--tf-dac-pad", rt.h - Gf + "px"), !(C === E && !te.fromTray) && (C.el.style.left = rt.x + "px", C.el.style.top = rt.y + "px");
    }), e || (vn = P), Rs([...S.filter((C) => Mo.includes(C.key)), ...R.slice().sort((C, rt) => P.get(C.key).row - P.get(rt.key).row || P.get(C.key).col - P.get(rt.key).col)].map((C) => C.el)), [["favs", ".tfDash-favs"], ["act", ".tfDash-act"]].forEach(([C, rt]) => {
      const Tt = P.get(C), Bt = Tt && H.querySelector(rt), Gt = Bt == null ? void 0 : Bt.querySelector(":scope > .activityRows"), Ut = Bt == null ? void 0 : Bt.querySelector(":scope > .activityHeader");
      if (!Gt || !Ut) return;
      const Ct = Gt.getBoundingClientRect().top - Bt.getBoundingClientRect().top, Dt = Tt.rows === 1 ? Tt.h : Math.floor(Tt.h - Ct - parseFloat(getComputedStyle(Bt).paddingBottom)), ve = Math.max(1, Math.floor(Dt / Uf));
      Gt.style.setProperty("--fill-row", (Dt / ve).toFixed(2) + "px"), Gt.style.maxHeight = Dt + "px";
    }), Ai = Math.max(0, ...[...P.values()].map((C) => C.row + C.rows));
    let _ = Jo + Ai * Aa - de;
    _ = Is(ia && !e, R, P, _, o, r), H.style.height = _ + "px", requestAnimationFrame(() => g.classList.add("tfBoardReady")), f.forEach((C) => Os.observe(C.el)), Xc(), Ae();
  }
  const So = { row: 337, nameGap: 16, sumsGap: 16, full: 1336, floorTop: 12, floorHead: 24, floorGap: 16 }, _c = { s: { w: 252, h: 136, rows: 2 }, m: { w: 252, h: 212, rows: 3 }, l: { w: 252, h: 288, rows: 4 } }, Cc = () => {
    var t;
    return _c[(t = wt.home) == null ? void 0 : t.areaSize] ? wt.home.areaSize : "s";
  }, Hs = () => {
    var t;
    return ["rows", "columns", "bento"].includes((t = wt.home) == null ? void 0 : t.areaLayout) ? wt.home.areaLayout : "bento";
  }, Ac = () => {
    var t;
    return ((t = wt.home) == null ? void 0 : t.cardsAs) === "rows" ? "rows" : "stacked";
  }, Qf = { byFloor: !0, bentoBoxes: !0, bentoMixed: !1, favsTitle: !1 }, Ti = () => T ? _o("favsTitle") : wt.favsTitle !== !1, tu = () => {
    var t;
    return !!((t = wt.home) != null && t.weather && oe());
  }, Tc = () => {
    var t;
    return !!((t = wt.home) != null && t.energy && (Wa != null && Wa.length));
  }, _o = (t) => {
    var e;
    return ((e = wt.home) == null ? void 0 : e[t]) ?? Qf[t];
  };
  function eu() {
    var r;
    const t = Object.values(((r = d()) == null ? void 0 : r.floors) || {}), e = new Set(t.map((l) => l.floor_id)), a = t.map((l) => ({ id: l.floor_id, name: l.name, rooms: m.filter((c) => c.floor === l.floor_id) })), o = m.filter((l) => !e.has(l.floor));
    return o.length && a.push({ id: "", name: t.length ? "Other areas" : "", rooms: o }), a;
  }
  const Lc = (t) => t.classList.toggle("hcMore", t.scrollHeight - t.scrollTop - t.clientHeight > 1);
  let Me = null, Dc = [], Pr = /* @__PURE__ */ new Map();
  function Ns(t) {
    let e = H.querySelector(".hcHomeLand");
    if (!t) {
      e == null || e.remove();
      return;
    }
    e || (e = Object.assign(document.createElement("div"), { className: "tfBoardLand hcHomeLand" }), H.appendChild(e)), Object.assign(e.style, { left: t.x + "px", top: t.y + "px", width: t.w + "px", height: t.h + "px" });
  }
  function au(t) {
    if (!T || !Lo || t.button !== 0 || H.clientWidth < 2 * Rr + de) return;
    const e = t.target.closest(".tfBoardItem"), a = e && xn().find((f) => f.el === e);
    if (!a || Mo.includes(a.key) || W(a.key)) return;
    t.preventDefault();
    const o = H.getBoundingClientRect(), r = Pr.get(a.key);
    Me = { key: a.key, el: e, on: !1, x0: t.clientX, y0: t.clientY, left: r.x, top: r.y, order: [...Dc] };
    const l = (f) => {
      const u = f.clientX - Me.x0, v = f.clientY - Me.y0;
      if (!Me.on && Math.hypot(u, v) < 5) return;
      Me.on || (Me.on = !0, e.classList.add("tfDragging"), We() || e.animate([{ scale: "1" }, { scale: "1.05" }, { scale: "1.02" }], { duration: 260, easing: "cubic-bezier(.2,1.35,.4,1)" })), Object.assign(e.style, { left: Me.left + u + "px", top: Me.top + v + "px" });
      const S = f.clientX - o.left, x = f.clientY - o.top + H.scrollTop;
      let R = null, E = 1 / 0;
      if (Pr.forEach((_, j) => {
        if (j === a.key || !Me.order.includes(j)) return;
        const C = Math.hypot(S - (_.x + _.w / 2), x - (_.y + _.h / 2));
        C < E && (E = C, R = { key: j, b: _ });
      }), !R) return;
      const B = Me.order.filter((_) => _ !== a.key), M = B.indexOf(R.key) + (S > R.b.x + R.b.w / 2 ? 1 : 0), P = [...B.slice(0, M), a.key, ...B.slice(M)];
      P.join() !== Me.order.join() ? (Me.order = P, Ve()) : Ns(Pr.get(a.key));
    }, c = () => {
      removeEventListener("pointermove", l), removeEventListener("pointerup", c), removeEventListener("pointercancel", c);
      const f = Me;
      Me = null, e.classList.remove("tfDragging"), f.on && wa({ order: f.order }), Ve(), f.on && !We() && setTimeout(() => Ol(e), 340);
    };
    addEventListener("pointermove", l), addEventListener("pointerup", c), addEventListener("pointercancel", c);
  }
  function ou(t, e, a) {
    var Dd;
    const o = new Set(se().hidden);
    t.forEach((pt) => pt.el.classList.toggle("tfBoardHidden", o.has(pt.key)));
    const r = t.filter((pt) => !o.has(pt.key) && getComputedStyle(pt.el).display !== "none"), l = de, c = a ? { w: Math.floor((e - l) / 2) } : Qo(e), f = Math.min(e, So.full);
    let u = 0;
    const v = Ni();
    g.classList.toggle("hcSumsFit", Fc()), g.classList.toggle("hcFavStrip", v);
    const S = r.filter((pt) => Mo.includes(pt.key) || v && pt.key === "favs");
    S.sort((pt, Nt) => ["title", "sums", "favs"].indexOf(pt.key) - ["title", "sums", "favs"].indexOf(Nt.key)), S.forEach((pt) => {
      pt.el.classList.add("tfBoardItem"), pt.el.toggleAttribute("data-narrow", !1), Object.assign(pt.el.style, { width: (pt.key === "title" ? e : f) + "px", height: "", left: "0px", top: u + "px" });
      const Nt = pt.key !== "title" && (pt.el.querySelector(".tfDash-bar>.activityRows") || pt.key === "favs" && pt.el.querySelector(":scope>.activityRows")), Le = Nt ? Nt.children.length : 0;
      if (Nt && (Nt.classList.remove("hcBarRows"), !a && Nt.scrollWidth > Nt.clientWidth + 1))
        for (let Zt = 2; Zt <= Le && (Nt.classList.add("hcBarRows"), Nt.style.setProperty("--bar-cols", String(Math.ceil(Le / Zt))), !(Nt.scrollWidth <= Nt.clientWidth + 1)); Zt++)
          ;
      u += pt.el.offsetHeight + (pt.key === "title" ? So.nameGap : So.sumsGap);
    });
    const x = ["favs", "wx", "energy"], R = (Me == null ? void 0 : Me.order) || ((Dd = wt.home) == null ? void 0 : Dd.order), E = R ? [...R.filter((pt) => x.includes(pt)), ...x.filter((pt) => !R.includes(pt))] : x;
    Dc = E;
    const B = r.filter((pt) => x.includes(pt.key) && !(v && pt.key === "favs")).sort((pt, Nt) => E.indexOf(pt.key) - E.indexOf(Nt.key));
    Pr = /* @__PURE__ */ new Map();
    const M = (pt, Nt) => {
      if (Pr.set(pt.key, Nt), Object.assign(pt.el.style, { width: Nt.w + "px", height: Nt.h + "px" }), Me != null && Me.on && Me.key === pt.key) {
        Ns(Nt);
        return;
      }
      Object.assign(pt.el.style, { left: Nt.x + "px", top: Nt.y + "px" });
    }, P = a ? e : 2 * c.w + l, _ = So.row, j = Ac() === "stacked" && !a && B.length > 0;
    let C = 0, rt = 0, Tt = u;
    B.forEach((pt) => {
      pt.el.classList.add("tfBoardItem"), pt.el.dataset.rows = 5, pt.el.dataset.cols = 2, pt.el.toggleAttribute("data-narrow", !1), !j && C && C + P > e && (u += rt + l, C = 0, rt = 0);
      let Nt = _;
      if ((a || pt.key === "favs") && (Object.assign(pt.el.style, { width: P + "px", height: "" }), Nt = pt.el.offsetHeight), j) {
        M(pt, { x: 0, y: Tt, w: P, h: Nt }), Tt += Nt + l;
        return;
      }
      M(pt, { x: C, y: u, w: P, h: Nt }), C += P + l, rt = Math.max(rt, Nt);
    }), B.length && !j && (u += rt + l);
    const Bt = j ? P + l : 0, Gt = j ? e - P - l : e, Ut = a ? "l" : Cc(), Ct = _c[Ut], Dt = Hs(), ve = _o("byFloor"), Te = c.w, Ne = Ct.h, Fe = a ? 2 : Math.max(1, Math.floor((Gt + l) / (Te + l))), nr = new Map(r.filter((pt) => W(pt.key)).map((pt) => [pt.key, pt])), Ba = (ve ? eu() : [{ id: "", name: "", icon: "", rooms: m }]).map((pt) => ({ ...pt, cards: pt.rooms.map((Nt) => nr.get("room:" + Nt.id)).filter(Boolean) })).filter((pt) => pt.cards.length), zi = Dt === "bento", Gi = zi && _o("bentoMixed"), rh = zi && ve && _o("bentoBoxes"), ih = Dt === "columns" && ve && !a, Bo = 12, Td = (pt) => pt.name ? So.floorHead + So.floorGap : 0, Gr = (pt, Nt, Le) => {
      const Zt = /* @__PURE__ */ new Set(), le = [];
      pt.cards.forEach(($t, no) => {
        const tn = Gi && no === 0 && Nt >= 2 && pt.cards.length > 1, ze = tn ? 2 : 1, Ro = tn && !a ? 2 : 1;
        $t.el.classList.add("tfBoardItem"), $t.el.dataset.cols = ze, $t.el.toggleAttribute("data-narrow", !1);
        for (let Tn = 0; ; Tn++) {
          const Ln = [...Array(Math.max(0, Nt - ze + 1)).keys()].find((Ur) => [...Array(ze).keys()].every((Ua) => [...Array(Ro).keys()].every((Ui) => !Zt.has(Tn + Ui + "," + (Ur + Ua)))));
          if (Ln != null) {
            [...Array(ze).keys()].forEach((Ur) => [...Array(Ro).keys()].forEach((Ua) => Zt.add(Tn + Ua + "," + (Ln + Ur)))), le.push({ it: $t, r: Tn, c: Ln, sc: ze, sr: Ro });
            break;
          }
        }
      });
      const ce = Math.max(0, ...le.map(($t) => $t.r + $t.sr));
      zi && !a && le.forEach(($t) => {
        for (; $t.r + $t.sr < ce && !Zt.has($t.r + $t.sr + "," + $t.c) && $t.sc === 1; )
          Zt.add($t.r + $t.sr + "," + $t.c), $t.sr++;
      }), le.forEach(($t) => {
        $t.it.el.dataset.rows = Math.min(5, $t.sr * Ct.rows), Object.assign($t.it.el.style, { width: $t.sc * Le + ($t.sc - 1) * l + "px", height: $t.sr * Ne + ($t.sr - 1) * l + "px" });
      });
      const Kt = [...Array(ce)].map(() => Ne), ge = [];
      let va = Td(pt);
      return Kt.forEach(($t, no) => {
        ge[no] = va, va += $t + l;
      }), { h: va - (ce ? l : 0), places: le.map(($t) => ({ it: $t.it, x: $t.c * (Le + l), y: ge[$t.r], w: $t.sc * Le + ($t.sc - 1) * l, h: Kt.slice($t.r, $t.r + $t.sr).reduce((no, tn) => no + tn, 0) + ($t.sr - 1) * l })) };
    }, Sl = new Map([...H.querySelectorAll(":scope > .hcFloor")].map((pt) => [pt.dataset.floor, pt])), _l = new Map([...H.querySelectorAll(":scope > .hcFloorBox")].map((pt) => [pt.dataset.floor, pt])), Ld = [], sh = (pt, Nt, Le, Zt) => {
      if (!pt.name) return;
      let le = Sl.get(pt.id);
      Sl.delete(pt.id), le || (le = Object.assign(document.createElement("div"), { className: "hcFloor" }), le.dataset.floor = pt.id, H.appendChild(le)), le.dataset.sig !== pt.name && (le.dataset.sig = pt.name, le.innerHTML = '<h2 class="hcFloorName">' + F(pt.name) + "</h2>"), Object.assign(le.style, { left: Nt + "px", top: Le + "px", width: Zt + "px" }), Ld.push(le);
    }, lh = (pt, Nt, Le, Zt, le) => {
      let ce = _l.get(pt.id);
      _l.delete(pt.id), ce || (ce = Object.assign(document.createElement("div"), { className: "hcFloorBox" }), ce.dataset.floor = pt.id, ce.setAttribute("aria-hidden", "true"), H.prepend(ce)), Object.assign(ce.style, { left: Nt + "px", top: Le + "px", width: Zt + "px", height: le + "px" });
    }, ch = (pt) => parseFloat(getComputedStyle(pt.cards[0].el).paddingLeft) || 0, Cl = (pt, Nt, Le, Zt, le = 0) => {
      sh(pt, Le + le, Zt, (Nt.w ?? e) - le), Nt.places.forEach((ce) => M(ce.it, { x: Le + ce.x, y: Zt + ce.y, w: ce.w, h: ce.h }));
    };
    if (Ba.length && B.length && !j && (u += So.floorTop), ih) {
      let pt = 0, Nt = u;
      Ba.forEach((Le) => {
        const Zt = { ...Gr(Le, 1, Te), w: Te };
        pt && pt + Te > Gt && (u = Nt + l + So.floorTop, pt = 0), Cl(Le, Zt, Bt + pt, u), Nt = Math.max(Nt, u + Zt.h), pt += Te + l;
      }), u = Nt + l;
    } else if (rh) {
      let pt = [{ x0: 0, x1: Gt, t: u }];
      const Nt = (Zt, le) => Math.max(...pt.filter((ce) => ce.x1 > Zt && ce.x0 < le).map((ce) => ce.t)), Le = (Zt, le, ce) => {
        const Kt = [];
        pt.forEach((ge) => {
          ge.x1 <= Zt || ge.x0 >= le ? Kt.push(ge) : (ge.x0 < Zt && Kt.push({ x0: ge.x0, x1: Zt, t: ge.t }), ge.x1 > le && Kt.push({ x0: le, x1: ge.x1, t: ge.t }));
        }), Kt.push({ x0: Zt, x1: le, t: ce }), pt = Kt.sort((ge, va) => ge.x0 - va.x0);
      };
      Ba.forEach((Zt) => {
        const le = Zt.cards.length + (Gi && Zt.cards.length > 1 ? 3 : 0);
        let ce = a ? 2 : Math.min(Fe, Math.max(Gi && Zt.cards.length > 1 ? 2 : 1, le <= 3 ? le : Math.ceil(le / 2)));
        for (; !a && ce > 1 && ce * Te + (ce - 1) * l + 2 * Bo > Gt; ) ce--;
        let Kt = null;
        for (let ze = ce; ze >= (a ? ce : 1); ze--) {
          const Ro = Math.min(Te, Math.floor((Gt - 2 * Bo - (ze - 1) * l) / ze)), Tn = { ...Gr(Zt, ze, Ro), w: ze * Ro + (ze - 1) * l }, Ln = Tn.w + 2 * Bo, Ur = Tn.h + 2 * Bo;
          pt.map((Ua) => Ua.x0).filter((Ua) => Ua + Ln <= Gt + 0.5).forEach((Ua) => {
            const Ui = Nt(Ua, Ua + Ln);
            (!Kt || Ui < Kt.t - 0.5) && (Kt = { cc: ze, inner: Ro, bw: Ln, h: Ur, t: Ui, x: Ua });
          });
        }
        if (!Kt) {
          const ze = Math.min(Te, Gt - 2 * Bo), Ro = Gr(Zt, 1, ze);
          Kt = { cc: 1, inner: ze, bw: ze + 2 * Bo, h: Ro.h + 2 * Bo, t: Nt(0, Gt), x: 0 };
        }
        const ge = { ...Gr(Zt, Kt.cc, Kt.inner), w: Kt.cc * Kt.inner + (Kt.cc - 1) * l }, va = Kt.bw, $t = Kt.h, no = Kt.x, tn = Kt.t;
        lh(Zt, Bt + no, tn, va, $t), Cl(Zt, ge, Bt + no + Bo, tn + Bo, ch(Zt)), Le(no, Math.min(Gt, no + va + l), tn + $t + l);
      }), u = Math.max(...pt.map((Zt) => Zt.t));
    } else {
      const pt = (Nt) => {
        var ce;
        if (!((ce = wt.home) != null && ce.fitTogether) || a) return Fe;
        const Le = j ? Tt - l - u : null, Zt = (Kt) => {
          const ge = Nt.cards.length + (Gi && Nt.cards.length > 1 && Kt >= 2 ? 3 : 0), va = Math.ceil(ge / Kt);
          return { holes: va * Kt - ge, rows: va, h: Td(Nt) + va * Ne + (va - 1) * l, w: Kt * Te + (Kt - 1) * l };
        }, le = (Kt) => Kt.holes === 0 || zi && Kt.holes === 1 && Kt.rows > 1;
        for (let Kt = 1; Kt <= Fe; Kt++) {
          const ge = Zt(Kt);
          if (le(ge) && ge.h <= (Le ?? ge.w)) return Kt;
        }
        for (let Kt = 1; Kt <= Fe; Kt++) {
          const ge = Zt(Kt);
          if (ge.h <= (Le ?? ge.w)) return Kt;
        }
        return Fe;
      };
      Ba.forEach((Nt, Le) => {
        Le && (u += So.floorTop);
        const Zt = Gr(Nt, pt(Nt), Te);
        Cl(Nt, { ...Zt, w: Gt }, Bt, u), u += Zt.h + l;
      });
    }
    j && (u = Math.max(u, Tt)), Sl.forEach((pt) => pt.remove()), _l.forEach((pt) => pt.remove()), Me != null && Me.on || Ns(null), H.style.height = Math.max(0, u - l) + "px", Rs([...S.map((pt) => pt.el), ...B.map((pt) => pt.el), ...Ld, ...Ba.flatMap((pt) => pt.cards.map((Nt) => Nt.el))]), Is(!1), t.forEach((pt) => [...pt.el.children].forEach((Nt) => Nt.toggleAttribute("inert", Lo)));
    const Al = H.querySelector(".tfDash-favs>.activityRows");
    Al && (Al.classList.toggle("hcFadeList", !v), Lc(Al)), requestAnimationFrame(() => g.classList.add("tfBoardReady")), t.forEach((pt) => Os.observe(pt.el)), Ae();
  }
  const Li = () => {
    Ls || (Ls = !0, requestAnimationFrame(() => {
      Ls = !1, Ve();
    }));
  }, Os = new ResizeObserver(() => {
    te || Li();
  });
  function nu(t, e, a) {
    const o = a + de, r = t * a + (t - 1) * de, l = e * Aa - de, c = de / 2, f = o / Math.max(1, Math.round(o / (Aa / 4))), u = Aa / 4, v = 6;
    let S = "";
    for (let x = 0; x <= t; x++) for (let R = 0; R <= e; R++) {
      const E = x * o - c, B = R * Aa - c;
      S += "M" + (E - v) + " " + B + "H" + (E + v) + "M" + E + " " + (B - v) + "V" + (B + v);
    }
    return '<svg width="' + r + '" height="' + l + '" viewBox="0 0 ' + r + " " + l + '"><defs><pattern id="tfGridDots" patternUnits="userSpaceOnUse" x="' + -c + '" y="' + -c + '" width="' + f.toFixed(3) + '" height="' + u + '"><circle cx="0" cy="0" r="1.4"></circle><circle cx="' + f.toFixed(3) + '" cy="0" r="1.4"></circle><circle cx="0" cy="' + u + '" r="1.4"></circle><circle cx="' + f.toFixed(3) + '" cy="' + u + '" r="1.4"></circle></pattern></defs><rect class="tfGridDots" x="' + -c + '" y="' + -c + '" width="' + (r + de) + '" height="' + (l + de) + '" fill="url(#tfGridDots)"></rect><path class="tfGridCross" d="' + S + '"></path></svg>';
  }
  function Is(t, e = [], a = /* @__PURE__ */ new Map(), o = 0, r = 1, l = Rr) {
    H.querySelectorAll(".tfEditChips").forEach((S) => {
      (!t || !S.closest(".tfBoardItem")) && S.remove();
    }), H.querySelectorAll(".tfFavHides").forEach((S) => S.remove()), H.querySelectorAll(".tfBoardItem").forEach((S) => [...S.children].forEach((x) => {
      x.classList.contains("tfEditChips") || x.toggleAttribute("inert", t);
    }));
    let c = H.querySelector(".tfBoardCells"), f = H.querySelector(".tfBoardLand");
    if (!t)
      return c == null || c.remove(), f == null || f.remove(), to(), o;
    const u = Ai + Wf;
    if (c || (c = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), c.setAttribute("aria-hidden", "true"), H.prepend(c)), c.style.top = Jo + "px", c.dataset.size !== r + "x" + u + "x" + l && (c.dataset.size = r + "x" + u + "x" + l, c.innerHTML = nu(r, u, l)), o = Math.max(o, Jo + u * Aa - de), e.forEach((S) => {
      const x = S.el;
      !x || x.querySelector(":scope > .tfEditChips") || x.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + Jr + '</span><button class="tfEditChip" type="button" data-board-more="' + F(S.key) + '" aria-label="' + F(Ta(S.key)) + ' options" aria-haspopup="menu">' + U0 + "</button></div>");
    }), te && a.has(te.key)) {
      f || (f = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), H.appendChild(f));
      const S = a.get(te.key);
      Object.assign(f.style, { left: S.x + "px", top: S.y + "px", width: S.w + "px", height: S.h + "px" });
    } else f == null || f.remove();
    const v = H.querySelector(".tfDash-favs.tfBoardItem:not(.tfBoardHidden)");
    if (v) {
      const S = v.getBoundingClientRect();
      v.insertAdjacentHTML("beforeend", '<div class="tfFavHides">' + [...v.querySelectorAll('[data-k^="fav:"]')].map((x) => {
        const R = x.getBoundingClientRect(), E = x.dataset.k.slice(4);
        return '<button class="tfFavHide" type="button" data-fav-hide="' + F(E) + '" aria-label="Hide ' + F(ht(E)) + ' from the dashboard" style="left:' + Math.round(R.right - S.left - 42) + "px;top:" + Math.round(R.top - S.top + (R.height - 32) / 2) + 'px">' + Bp + "</button>";
      }).join("") + "</div>");
    }
    return o;
  }
  let Fs = "";
  function qs(t) {
    ia = t, t || (te = null, Co = Ao = !1, to()), Ve(), t ? (Fs = JSON.stringify(wt), $n(Yt, "Edit custom dashboard", null)) : Fs && JSON.stringify(wt) !== Fs && La("Changes saved");
  }
  function ru(t, e) {
    var P, _;
    to();
    const a = vn.get(t), { n: o } = Qo(H.clientWidth), r = se(), l = r.spans[t] ?? (W(t) ? 1 : 2);
    if (!a) return;
    const c = a.cols >= o, f = (j, C, rt) => '<button type="button" role="menuitem" data-board-act="' + j + '"' + (rt ? " disabled" : "") + ">" + C + "</button>", u = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    u.setAttribute("role", "menu"), u.setAttribute("aria-label", Ta(t) + " options");
    const v = H.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]'), S = vc(t), x = wn(t), R = '<div class="tfHeight" role="group" aria-label="Height"><span class="tfHeightLabel" aria-hidden="true">Height</span><div class="tfHeightTabs">' + bc.map((j, C) => '<button type="button" role="menuitemradio" aria-checked="' + (C + 1 === x) + '" aria-label="' + j + ", " + (C + 1) + (C ? " rows" : " row") + '" data-board-act="h:' + (C + 1) + '"' + (C < S ? "" : " disabled") + ">" + j + "</button>").join("") + "</div></div>", E = Vf.includes(t) || W(t) ? '<div class="tfHeight tfWidth" role="group" aria-label="Width"><span class="tfHeightLabel" aria-hidden="true">Width</span><div class="tfHeightTabs">' + jf.map((j, C) => '<button type="button" role="menuitemradio" aria-checked="' + (C + 1 === Math.min(l, o)) + '" aria-label="' + j + ", " + (C + 1) + (C ? " columns" : " column") + '" data-board-act="w:' + (C + 1) + '"' + (C < o ? "" : " disabled") + ">" + j + "</button>").join("") + "</div></div>" : "", B = t === "radar" ? '<div class="tfHeight tfSource" role="group" aria-label="Source"><span class="tfHeightLabel" aria-hidden="true">Source</span><div class="tfSourceList">' + ms().map(([j, C]) => '<button type="button" role="menuitemradio" aria-checked="' + (j === gr()) + '" data-board-act="src:' + F(j) + '">' + F(C) + "</button>").join("") + "</div></div>" : "";
    u.innerHTML = R + E + B + (t === "energy" ? f("graph", (((P = r.opts.energy) == null ? void 0 : P.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + f("left", "Move left", c || a.col === 0) + f("right", "Move right", c || a.col + a.cols >= o) + f("up", "Move up", a.row <= 0) + f("down", "Move down") + (v ? f("remove", "Remove") : f("hide", "Hide")), H.appendChild(u);
    const M = Math.min(a.x + a.w - u.offsetWidth, H.clientWidth - u.offsetWidth);
    Object.assign(u.style, { left: Math.max(0, M) + "px", top: a.y + 28 + "px" }), Qe = { key: t, menu: u, opener: e }, (_ = u.querySelector("button:not([disabled])")) == null || _.focus();
  }
  function to(t) {
    if (!Qe) return;
    const { menu: e, opener: a } = Qe;
    Qe = null, e.remove(), t && (a == null || a.focus());
  }
  const kn = () => Object.fromEntries([...vn].map(([t, e]) => [t, { col: e.col, row: e.row }]));
  function iu(t, e) {
    var f, u, v;
    if (e === "remove") {
      to(), su(t);
      return;
    }
    const a = wt, o = se(), r = kn(), l = r[t] || { col: 0, row: 0 };
    e.startsWith("w:") && (o.spans = { ...o.spans, [t]: e === "w:full" ? "full" : Number(e.slice(2)) }), e.startsWith("h:") && (o.opts = { ...o.opts, [t]: { ...o.opts[t] || {}, h: Number(e.slice(2)), tall: void 0 } }), e.startsWith("src:") && (o.opts = { ...o.opts, radar: { ...o.opts.radar || {}, source: e.slice(4) } }), e === "graph" && (o.opts = { ...o.opts, energy: { ...o.opts.energy || {}, graph: (((f = o.opts.energy) == null ? void 0 : f.graph) || "above") === "above" ? "below" : "above" } }), e === "left" && (r[t] = { ...l, col: l.col - 1 }), e === "right" && (r[t] = { ...l, col: l.col + 1 }), e === "up" && (r[t] = { ...l, row: l.row - 1 }), e === "down" && (r[t] = { ...l, row: l.row + 1 }), e === "hide" && (o.hidden = [.../* @__PURE__ */ new Set([...o.hidden, t])]), ["left", "right", "up", "down"].includes(e) && (te = { key: t, col: r[t].col, row: r[t].row }), Kn(o, r), te && (Ve(), te = null, Kn(se(), kn()));
    const c = /^[hw]:/.test(e) && !We() && (Qe == null ? void 0 : Qe.menu.querySelector('[data-board-act="' + CSS.escape(e) + '"]'));
    if (c) {
      const S = Qe;
      c.parentElement.querySelectorAll("[aria-checked]").forEach((x) => x.setAttribute("aria-checked", String(x === c))), setTimeout(() => {
        Qe === S && to();
      }, De.tabs.dur);
    } else to();
    e === "graph" && (ua.delete("dash:energy"), Pe()), e.startsWith("src:") && ((u = Ce == null ? void 0 : Ce.get("radar")) == null || u.refresh(), xe == null || xe.refresh()), e.startsWith("h:") && t.includes(".") && Pe(), Ve(), e !== "hide" ? (v = H.querySelector('[data-board-more="' + CSS.escape(t) + '"]')) == null || v.focus() : La(Ta(t) + " hidden", Hi(a));
  }
  const Ec = (t) => {
    var e;
    return jo.includes(t) && !(((e = wt.dash) == null ? void 0 : e.cells) || {})[t] ? " added" : " put back";
  };
  function Ws(t) {
    const e = se(), a = Ta(t) + Ec(t);
    yn({ ...e, hidden: e.hidden.filter((o) => o !== t) }), Ve(), La(a);
  }
  const Di = () => se().tiles || [...H.querySelectorAll(".tfDashTiles > [data-k]")].map((t) => t.dataset.k).filter((t) => !se().hidden.includes(t));
  function Bc(t, e) {
    const a = se();
    Kn({ ...a, tiles: t, hidden: a.hidden.filter((o) => !o.includes(".")) }, e), Pe(), Ae();
  }
  const Rc = (t) => {
    Bc([...Di().filter((e) => e !== t), t], kn()), La(Ta(t) + " added"), pu(t);
  }, su = (t) => {
    const e = wt, a = kn();
    delete a[t], Bc(Di().filter((o) => o !== t), a), La(Ta(t) + " removed", Hi(e));
  };
  let Vs = 0;
  function La(t, e = null) {
    var c;
    const a = p("toast");
    if (!a) return;
    if (km(a, t), e) {
      const f = Object.assign(document.createElement("button"), { type: "button", className: "toastAction", textContent: "Undo" });
      f.addEventListener("click", () => {
        clearTimeout(Vs), a.classList.remove("show", "withAction"), e();
      }), a.appendChild(f);
    }
    const o = g.getBoundingClientRect(), r = (c = n.querySelector(".bottomNav")) == null ? void 0 : c.getBoundingClientRect(), l = Yt.classList.contains("open") && !eo ? Math.min(o.right, Yt.getBoundingClientRect().left) : o.right;
    a.style.left = (o.left + l) / 2 + "px", a.style.bottom = (r != null && r.height ? window.innerHeight - r.top + 12 : 26) + "px", a.classList.add("tfToast", "show"), a.classList.toggle("withAction", !!e), Mm(a), clearTimeout(Vs), Vs = setTimeout(() => a.classList.remove("show", "withAction"), e ? 5e3 : De.confirm.stay);
  }
  const lu = 700, cu = 1e3, sa = Object.assign(document.createElement("div"), { className: "tfTooltip", hidden: !0 });
  sa.setAttribute("role", "tooltip"), sa.setAttribute("aria-hidden", "true"), g.appendChild(sa);
  let Hr = null, Nr = 0, Mn = 0, Pc = -1 / 0;
  const js = (t) => {
    if (t.nodeType !== 1) return !1;
    const e = getComputedStyle(t);
    return e.textOverflow === "ellipsis" && t.scrollWidth > t.clientWidth + 1 || e.webkitLineClamp !== "none" && t.scrollHeight > t.clientHeight + 1;
  }, du = (t) => {
    for (let e = t; e && e !== g; e = e.parentElement) if (js(e)) return e;
    return null;
  };
  function Ei(t, e) {
    clearTimeout(Nr), clearTimeout(Mn);
    const a = () => {
      if (!t.isConnected) return;
      Hr = t, sa.textContent = e, sa.hidden = !1;
      const o = t.getBoundingClientRect(), r = sa.getBoundingClientRect(), l = o.top - r.height - 8 >= 8 ? o.top - r.height - 8 : o.bottom + 8;
      sa.style.left = Math.max(8, Math.min(window.innerWidth - r.width - 8, o.left + o.width / 2 - r.width / 2)) + "px", sa.style.top = l + "px";
    };
    !sa.hidden || performance.now() - Pc < cu ? a() : Nr = setTimeout(a, lu);
  }
  function Bi() {
    clearTimeout(Nr), clearTimeout(Mn), sa.hidden || (Pc = performance.now()), sa.hidden = !0, Hr = null;
  }
  n.addEventListener("pointerover", (t) => {
    var o, r;
    if (t.pointerType === "touch") return;
    if (sa.contains(t.target)) {
      clearTimeout(Mn);
      return;
    }
    const e = (r = (o = t.target).closest) == null ? void 0 : r.call(o, ".tfAreaPick");
    if (e) {
      e !== Hr ? Ei(e, e.getAttribute("aria-label")) : clearTimeout(Mn);
      return;
    }
    const a = du(t.target);
    if (a && Xt.names === "scroll" && a.matches(Ri)) {
      zs(a);
      return;
    }
    if (a) {
      a !== Hr ? Ei(a, a.textContent.trim()) : clearTimeout(Mn);
      return;
    }
    clearTimeout(Nr), clearTimeout(Mn), Mn = setTimeout(Bi, 120);
  }), n.addEventListener("focusin", (t) => {
    var o;
    const e = t.target;
    if (!((o = e.matches) != null && o.call(e, ":focus-visible"))) return;
    if (e.classList.contains("tfAreaPick")) {
      Ei(e, e.getAttribute("aria-label"));
      return;
    }
    let a = [e, ...e.querySelectorAll("*")].filter(js);
    Xt.names === "scroll" && (a.filter((r) => r.matches(Ri)).forEach(zs), a = a.filter((r) => !r.matches(Ri))), a.length && Ei(e, a.map((r) => r.textContent.trim()).join(" · "));
  }), n.addEventListener("focusout", (t) => {
    t.target === Hr && Bi();
  }), n.addEventListener("keydown", (t) => {
    t.key === "Escape" && !sa.hidden && (t.stopPropagation(), Bi());
  }, !0), window.addEventListener("scroll", () => {
    (!sa.hidden || Nr) && Bi();
  }, { capture: !0, passive: !0 });
  const Ri = ".activityRowName,.activityRowMeta", Pi = /* @__PURE__ */ new WeakSet();
  function zs(t) {
    var a;
    if (Xt.names !== "scroll" || Pi.has(t) || t.closest("[inert]") || (a = window.matchMedia) != null && a.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    Pi.add(t);
    const e = () => Promise.all([t.closest(".hcAreaPanel"), t.closest(".panelExpanded")].filter(Boolean).flatMap((o) => o.getAnimations()).map((o) => o.finished.catch(() => {
    })));
    setTimeout(async () => {
      await e();
      const o = t.isConnected && !t.closest("[inert]") ? t.scrollWidth - t.clientWidth : 0;
      if (o < 2) {
        Pi.delete(t);
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
        t.style.textOverflow = "", Pi.delete(t);
      };
    }, 600);
  }
  const Hc = new IntersectionObserver((t) => t.forEach((e) => {
    e.isIntersecting && !e.target.closest("[inert]") && (Hc.unobserve(e.target), zs(e.target));
  }), { threshold: 1 });
  let Gs = !1;
  new MutationObserver(() => {
    Gs || Xt.names !== "scroll" || (Gs = !0, setTimeout(() => {
      Gs = !1, n.querySelectorAll(Ri).forEach((t) => {
        !t.dataset.glided && js(t) && (t.dataset.glided = "1", Hc.observe(t));
      });
    }, 300));
  }).observe(n, { childList: !0, subtree: !0 });
  const Hi = (t) => () => {
    wt = t, xa(), Pe(), Ve(), Ae();
  };
  function pu(t) {
    const e = () => H.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]');
    setTimeout(() => {
      var c;
      const a = e();
      if (!a) return;
      const o = (c = window.matchMedia) == null ? void 0 : c.call(window, "(prefers-reduced-motion: reduce)").matches, r = a.getBoundingClientRect();
      (r.top < 0 || r.bottom > window.innerHeight) && a.scrollIntoView({ behavior: o ? "auto" : "smooth", block: "center" });
      const l = (f) => "0 0 0 4px color-mix(in srgb,var(--primary) " + f + "%,transparent),0 0 24px color-mix(in srgb,var(--primary) " + f + "%,transparent)";
      a.animate([{ boxShadow: l(55) }, { boxShadow: l(0) }], { duration: 1500, easing: o ? "steps(1, end)" : "ease-out" });
    }, fu(t) ? 260 : 0);
  }
  function fu(t) {
    const e = vn.get(t);
    if (!e || !Yt.classList.contains("open") || eo) return !1;
    const { n: a, w: o } = Qo(H.clientWidth), r = Yt.getBoundingClientRect().left - H.getBoundingClientRect().left, l = (u) => u * (o + de) + e.cols * o + (e.cols - 1) * de <= r;
    if (l(e.col)) return !1;
    const c = /* @__PURE__ */ new Set();
    vn.forEach((u, v) => {
      if (v !== t) for (let S = u.row; S < u.row + u.rows; S++) for (let x = u.col; x < u.col + u.cols; x++) c.add(x + "," + S);
    });
    const f = (u, v) => {
      for (let S = v; S < v + e.rows; S++) for (let x = u; x < u + e.cols; x++) if (c.has(x + "," + S)) return !1;
      return !0;
    };
    for (let u = 0; u <= Ai; u++) for (let v = 0; v + e.cols <= a && l(v); v++)
      if (f(v, u))
        return Kn(se(), { ...kn(), [t]: { col: v, row: u } }), Ve(), !0;
    return !1;
  }
  const Nc = /^(light|switch|cover|climate|fan|lock|valve|media_player|humidifier|vacuum|scene|script|alarm_control_panel|water_heater|input_boolean)\./, Oc = [["page", "Page"], ["cards", "Cards"], ["areas", "Areas"], ["favs", "Favourites"]];
  let Xn = "page";
  const uu = (t, e) => '<section class="hcRowsCard hcTrayList">' + t.map(([a, o]) => '<button class="hcRow hcConfigRow" type="button" ' + e + '="' + a + '"><span class="hcRowText"><span class="hcRowName">' + F(o) + '</span></span><span class="hcRowEnd">' + Kl + "</span></button>").join("") + "</section>", $n = (t, e, a, o) => {
    t.classList.toggle("hcTrayIn", !!a), t.querySelector(".tfTrayHead .activityTitle").textContent = a ? o : e, t.querySelector(".tfTrayInner").scrollTop = 0;
  }, hu = '<button class="back hcTrayBack" type="button" data-tray-back aria-label="Back">' + Gl + "</button>", mu = (t) => t.matches('[data-tray="welcome"],[data-tray="phone"]') ? "page" : t.querySelector("[data-room-add]") ? "areas" : t.querySelector('[data-tray="favs"]') ? "favs" : "cards";
  function Us(t = !1) {
    const e = Yt.querySelector(".tfTrayInner"), a = Yt.querySelector(".hcTrayTabs"), o = a.querySelector(".rubberIndicator");
    let r = !0;
    e.querySelectorAll(":scope>.tfTraySection").forEach((c) => {
      c.hidden = mu(c) !== Xn, c.classList.toggle("hcFirst", !c.hidden && r), c.hidden || (r = !1);
    }), a.querySelectorAll("[data-tray-tab]").forEach((c) => {
      const f = c.dataset.trayTab === Xn;
      c.classList.toggle("active", f), c.setAttribute("aria-selected", String(f));
    });
    const l = a.querySelector(".tab.active");
    l != null && l.offsetWidth && (o.style.transition = "none", t ? ss(o, o.offsetLeft, o.offsetWidth, l.offsetLeft, l.offsetWidth) : (o.style.left = l.offsetLeft + "px", o.style.width = l.offsetWidth + "px"));
  }
  const Yt = Object.assign(document.createElement("aside"), { className: "tfEditTray" });
  Yt.setAttribute("aria-label", "Edit custom dashboard"), Yt.innerHTML = '<button class="tfTrayTuck" type="button" data-tray-tuck></button><div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit custom dashboard</div><button class="pill" type="button" data-tray-done>Done</button></div><div class="tabs rubberTabs hcTrayTabs" role="tablist" aria-label="Edit custom dashboard"><div class="rubberIndicator" aria-hidden="true"></div>' + Oc.map(([t, e], a) => '<button class="tab segBtn' + (a ? "" : " active") + '" type="button" role="tab" aria-selected="' + !a + '" data-tray-tab="' + t + '">' + e + "</button>").join("") + '</div><section class="tfTraySection" data-tray="welcome"></section><section class="tfTraySection" data-tray="cards"></section><section class="tfTraySection" data-tray="weather"></section><section class="tfTraySection"><div class="sectionLabel">Tiles</div><p class="tfTrayNote">Remove a tile from its ⋯.</p><button class="pill tfTrayAdd hcAddBtn" type="button" data-tile-add aria-expanded="false">' + as + '<span>Add tile</span></button><div class="tfTrayPick" data-pick="tiles" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-tile-search><ul class="tfTrayList" data-tray="tilepick"></ul></div></section><section class="tfTraySection"><div class="sectionLabel">Areas</div><p class="tfTrayNote">Which areas the Areas card shows. Drag to change their order, here and on Home.</p><button class="pill tfTrayAdd hcAddBtn" type="button" data-room-add aria-expanded="false">' + as + '<span>Add area</span></button><ul class="tfTrayList" data-tray="roompick" hidden></ul><ul class="tfTrayList hcHeList" data-tray="areas"></ul></section><section class="tfTraySection" data-tray="phone"></section><section class="tfTraySection"><div class="sectionLabel">Favourites</div><ul class="tfTrayList" data-tray="favs"></ul><button class="pill tfTrayAdd hcAddBtn" type="button" data-fav-add aria-expanded="false">' + as + '<span>Add favourite</span></button><div class="tfTrayPick" data-pick="favs" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-fav-search><ul class="tfTrayList" data-tray="pick"></ul></div><div class="toggleRow tfTraySuggest" data-tray="favtitle"></div><div class="toggleRow tfTraySuggest" data-tray="suggest"></div></section></div>', g.appendChild(Yt);
  let eo = !1, Co = !1, Ao = !1, Or = !1, ta = null, To = !1;
  const Ys = {}, Va = (t, e) => {
    if (Ys[t] === e) return;
    Ys[t] = e;
    const a = Yt.querySelector('[data-tray="' + t + '"]');
    a.innerHTML = e, ho(a);
  }, Zs = (t, e) => '<span class="tfTrayName"><span class="activityRowName">' + F(ht(t)) + '</span><span class="activityRowMeta">' + F(e) + "</span></span>", gu = (t, e, a) => '<li class="tfTrayFav' + (e ? " off" : "") + '" data-tray-fav="' + F(t) + '"><span class="tfTrayGrip" aria-hidden="true">' + Jr + '</span><span class="tfIcon"' + he(t, Sa(t)) + "></span>" + Zs(t, e ? "Hidden" + (we.get(t) ? " · " + we.get(t) : "") : we.get(t) || He(t)) + '<button class="tfTrayBtn" type="button" data-fav-eye="' + F(t) + '" aria-pressed="' + !e + '" aria-label="' + (e ? "Show " : "Hide ") + F(ht(t)) + ' on the dashboard">' + (e ? Bp : Y0) + "</button>" + (a ? '<button class="tfTrayBtn" type="button" data-fav-remove="' + F(t) + '" aria-label="Remove ' + F(ht(t)) + ' from favourites">' + Yl + "</button>" : "<span></span>") + "</li>";
  function Ks(t, e, a, o) {
    const r = t.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return Object.keys(k).filter((c) => e(c) && !a.has(c) && k[c].state !== "unavailable").filter((c) => {
      const f = (ht(c) + " " + (we.get(c) || "") + " " + c).toLowerCase();
      return r.every((u) => f.includes(u));
    }).sort((c, f) => (we.get(c) || "~").localeCompare(we.get(f) || "~") || ht(c).localeCompare(ht(f))).slice(0, 40).map((c) => '<li><button class="tfTrayPickItem" type="button" ' + o + '="' + F(c) + '"><span class="tfIcon"' + he(c, Sa(c)) + "></span>" + Zs(c, we.get(c) || "—") + "</button></li>").join("") || '<li class="tfTrayNote">Nothing matches.</li>';
  }
  const bu = "https://www.home-assistant.io/dashboards/", Ic = {
    welcome: ["Welcome message", "<p>Shows a <strong>greeting</strong> above your home's name: good morning, afternoon or evening, then your name.</p>"],
    weather: ["Weather", "<p>The forecast card: now, the next hours in a sentence and the week ahead. Its <strong>Now</strong> opens the Weather page.</p>"],
    energy: ["Energy today", "<p>What your home has used and made today, hour by hour, with <strong>Electricity</strong>, <strong>Solar</strong>, <strong>Gas</strong> and <strong>Water</strong> under it. From your Energy dashboard.</p>"],
    favs: ["Favourite entities", "<p>The devices you use most, at the top of Home.</p><ul><li><strong>Drag</strong> one to change the order</li><li>Press <strong>×</strong> to take it off</li></ul>"],
    suggest: ["Suggested entities", "<p>Fills Favourites with devices you often use, after your own. They change as you use your home.</p>"],
    sums: ["Summaries", "<p>Each summary sums up one kind of thing across your home, like <strong>Lights</strong>: how many are on.</p><ul><li>Switch one off to hide it</li><li><strong>Drag</strong> one to change the order</li></ul>"]
  }, me = Object.assign(document.createElement("aside"), { className: "tfEditTray hcHomeTray" });
  me.setAttribute("aria-label", "Edit Home page"), me.toggleAttribute("inert", !0);
  let Lo = !1, Da = !1, Xs = "", $s = null, Jn = "page";
  function Js(t, e) {
    const a = me.querySelector(".hcTrayTabs"), o = a == null ? void 0 : a.querySelector(".rubberIndicator"), r = a == null ? void 0 : a.querySelector(".tab.active");
    if (!(r != null && r.offsetWidth)) {
      requestAnimationFrame(() => {
        var l;
        return ((l = me.querySelector(".hcTrayTabs .tab.active")) == null ? void 0 : l.offsetWidth) && Js(t, e);
      });
      return;
    }
    o.style.transition = "none", t && e ? ss(o, e.left, e.width, r.offsetLeft, r.offsetWidth) : (o.style.left = r.offsetLeft + "px", o.style.width = r.offsetWidth + "px");
  }
  const Sn = (t) => '<button class="hcInfoBtn" type="button" data-info="' + t + '" aria-expanded="false" aria-label="About ' + F(Ic[t][0]) + '">' + Zl + "</button>", ba = (t, e, a) => '<button class="switch' + (t ? " on" : "") + '" type="button" role="switch" aria-checked="' + t + '" aria-label="' + F(e) + '" ' + a + "></button>", Qs = (t) => '<button class="tfTrayBtn hcHeGrip" type="button" data-he-grip aria-label="Move ' + F(t) + '. Use the up and down arrows">' + Jr + "</button>", Fc = () => {
    var t;
    return ((t = wt.home) == null ? void 0 : t.sumsWidth) === "fit";
  }, Ni = () => {
    var t;
    return ((t = wt.home) == null ? void 0 : t.favsAs) === "strip";
  }, Ir = (t, e, a, o) => '<div class="hcHeLine hcHeChoiceLine"><span class="activityRowName">' + t + '</span><div class="themeChoice hcHeChoice" role="group" aria-label="' + F(t) + '">' + o.map(([r, l]) => '<button class="wxLayoutBtn" type="button" ' + e + '="' + r + '" aria-pressed="' + (a === r) + '">' + l + "</button>").join("") + "</div></div>", qc = () => Jt(!0).filter((t) => Xr[t.key]).map((t) => t.key);
  function _n() {
    var u, v, S, x, R, E, B;
    if (!Lo) return;
    const t = St(), e = (M) => '<li class="hcHeRow" data-he-id="' + F(M) + '">' + Qs(ht(M)) + '<span class="tfIcon"' + he(M, Sa(M)) + "></span>" + Zs(M, we.get(M) || He(M)) + '<button class="tfTrayBtn" type="button" data-he-remove="' + F(M) + '" aria-label="Take ' + F(ht(M)) + ' off Favourites">' + Yl + "</button></li>", a = (M) => {
      const P = Xr[M];
      return '<li class="hcHeRow hcHeSum" data-he-id="' + F(M) + '"' + (P.colour && On(P.colour) ? ' style="' + On(P.colour).slice(1) + '"' : "") + ">" + Qs(P.name) + '<span class="tfIcon"' + he("", P.icon, P.name) + '></span><span class="activityRowName">' + F(P.name) + "</span>" + ba(mn(M), P.name, 'data-he-sum="' + F(M) + '"') + "</li>";
    }, o = ((u = me.querySelector("[data-he-search]")) == null ? void 0 : u.value) || "", r = [["page", "Page"], ["favs", "Favourites"], ["sums", "Summaries"], ["areas", "Areas"]], l = new Set(((v = wt.home) == null ? void 0 : v.areasOff) || []), c = (M) => '<li class="hcHeRow" data-he-id="' + F(M.id) + '">' + Qs(M.name) + '<span class="tfIcon"><span class="tfAreaGlyph"' + he("area:" + M.id, M.icon || "mdi:texture-box", M.name) + '></span></span><span class="activityRowName">' + F(M.name) + "</span>" + ba(!l.has(M.id), "Show " + M.name + " on Home", 'data-he-area="' + F(M.id) + '"') + "</li>", f = {
      page: '<div class="hcHeLine"><span class="activityRowName">Welcome message</span>' + Sn("welcome") + ba(Ts(), "Welcome message", "data-he-welcome") + "</div>" + // the weather card and Energy today, where the house has them
      (oe() ? '<div class="hcHeLine"><span class="activityRowName">Weather</span>' + Sn("weather") + ba(!!((S = wt.home) != null && S.weather), "Weather", 'data-he-card="weather"') + "</div>" : "") + (Wa != null && Wa.length ? '<div class="hcHeLine"><span class="activityRowName">Energy today</span>' + Sn("energy") + ba(!!((x = wt.home) != null && x.energy), "Energy today", 'data-he-card="energy"') + "</div>" : "") + Ir("Cards", "data-he-cards-as", Ac(), [["stacked", "Stacked"], ["rows", "Rows"]]) + '<hr class="hcHeRule"><div class="hcHeLine"><span class="activityRowName">Group by floor</span>' + ba(_o("byFloor"), "Group by floor", 'data-he-flag="byFloor"') + "</div>" + Ir("Layout", "data-he-area-layout", Hs(), [["rows", "Rows"], ["columns", "Columns"], ["bento", "Bento"]]) + (Hs() === "bento" ? '<div class="hcHeLine"><span class="activityRowName">Floors as boxes</span>' + ba(_o("bentoBoxes"), "Floors as boxes", 'data-he-flag="bentoBoxes"') + '</div><div class="hcHeLine"><span class="activityRowName">Mixed sizes</span>' + ba(_o("bentoMixed"), "Mixed sizes", 'data-he-flag="bentoMixed"') + "</div>" : "") + Ir("Area cards", "data-he-area-size", Cc(), [["s", "Small"], ["m", "Medium"], ["l", "Large"]]) + // Fit together (Matt, 17 Nov): the areas as a neat block, not spread over every column that fits
      '<div class="hcHeLine"><span class="activityRowName">Fit together</span>' + ba(!!((R = wt.home) != null && R.fitTogether), "Fit together", "data-he-fit") + "</div>",
      favs: '<div class="hcHeLine"><span class="activityRowName">Show favourites</span>' + ba(((E = wt.home) == null ? void 0 : E.favs) !== !1, "Show favourites", 'data-he-card="favs"') + '</div><hr class="hcHeRule"><div class="hcHeLabel"><span class="activityRowName">Favourite entities</span>' + Sn("favs") + "</div>" + Ir("Show as", "data-he-favs-as", Ni() ? "strip" : "card", [["card", "Card"], ["strip", "Strip"]]) + (Ni() ? "" : '<div class="hcHeLine"><span class="activityRowName">Title</span>' + ba(_o("favsTitle"), "Title", 'data-he-flag="favsTitle"') + "</div>") + '<ul class="tfTrayList hcHeList" data-he-list="favs">' + (t.map(e).join("") || '<li class="tfTrayNote">No favourites yet.</li>') + '</ul><button class="pill tfTrayAdd hcAddBtn" type="button" data-he-add aria-expanded="' + Da + '">' + as + '<span>Add favourite</span></button><div class="tfTrayPick" data-he-pick' + (Da ? "" : " hidden") + '><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-he-search value="' + F(o) + '"><ul class="tfTrayList">' + (Da ? Ks(o, (M) => Nc.test(M), new Set(t), "data-he-pick-id") : "") + '</ul></div><hr class="hcHeRule"><div class="hcHeLine"><span class="activityRowName">Suggested entities</span>' + Sn("suggest") + ba(Ht(), "Suggested entities", "data-he-suggest") + "</div>",
      sums: '<div class="hcHeLine"><span class="activityRowName">Show summaries</span>' + Sn("sums") + ba(((B = wt.home) == null ? void 0 : B.sums) !== !1, "Show summaries", 'data-he-card="sums"') + "</div>" + Ir("Width", "data-he-sums-width", Fc() ? "fit" : "match", [["match", "Match the cards"], ["fit", "Fit the summaries"]]) + '<hr class="hcHeRule"><ul class="tfTrayList hcHeList" data-he-list="sums">' + qc().map(a).join("") + "</ul>",
      areas: '<p class="tfTrayNote">Which areas show on Home. Drag to change their order, here and on the custom dashboard.</p><ul class="tfTrayList hcHeList" data-he-list="areas">' + Ds().map(c).join("") + "</ul>"
    };
    me.querySelector("[data-he-body]").innerHTML = // the note about the areas page first (Matt, 12 Nov: "to the top of the rollover"), as Home Assistant's dialog has it
    '<p class="tfTrayNote hcHeAreasNote">You can rearrange your floors and areas in the order that best represents your house on the <button type="button" class="hcHeLink" data-path="/config/areas/dashboard">areas page</button>.</p><div class="tabs rubberTabs hcTrayTabs" role="tablist" aria-label="Edit Home page"><div class="rubberIndicator" aria-hidden="true"></div>' + r.map(([M, P]) => '<button class="tab segBtn' + (M === Jn ? " active" : "") + '" type="button" role="tab" aria-selected="' + (M === Jn) + '" data-he-tab="' + M + '">' + P + "</button>").join("") + "</div>" + uu(r, "data-he-go") + '<div class="hcHeTabBody" role="tabpanel">' + f[Jn] + "</div>", Js(!1), ho(me);
  }
  const Qn = (t) => {
    wt = { ...wt, ...t }, xa(), Pe(), _n();
  }, wa = (t) => Qn({ home: { ...wt.home || {}, ...t } });
  function tl(t) {
    Cn(), Lo = t, Da = !1, me.classList.toggle("open", t), me.toggleAttribute("inert", !t), g.classList.toggle("hcHomeEditing", t), w && H && Ve();
    const e = p("dashEditNav"), a = me.querySelector(".tfTrayHead");
    e && t && ($s = e.parentElement, a.appendChild(e)), e && !t && $s && $s.appendChild(e), e && (e.classList.toggle("active", t), e.setAttribute("aria-pressed", String(t)), e.setAttribute("aria-label", t ? "Done editing Home" : "Edit Home page"), e.title = t ? "Done" : "Edit", e.innerHTML = t ? Rp : os), t ? (Xs = JSON.stringify(wt), _n(), $n(me, "Edit Home page", null)) : Xs && JSON.stringify(wt) !== Xs && La("Changes saved");
  }
  me.innerHTML = '<div class="tfTrayInner"><div class="tfTrayHead">' + hu + '<div class="activityTitle">Edit Home page</div></div><div class="hcHeBody" data-he-body></div></div>', g.appendChild(me);
  let Do = null;
  const ja = Object.assign(document.createElement("div"), { className: "card hcInfoPop", hidden: !0 });
  ja.setAttribute("role", "dialog"), g.appendChild(ja);
  function Cn() {
    Do && (Do.setAttribute("aria-expanded", "false"), Do = null, ja.hidden = !0);
  }
  function Wc(t) {
    const e = Do;
    if (Cn(), e === t) return;
    const [a, o] = Ic[t.dataset.info];
    ja.setAttribute("aria-label", a), ja.innerHTML = '<div class="hcInfoTitle">' + F(a) + '</div><div class="hcInfoText">' + o + '</div><a class="hcInfoMore" href="' + bu + '" target="_blank" rel="noopener">Learn more</a>', ja.hidden = !1, Do = t, t.setAttribute("aria-expanded", "true");
    const r = t.getBoundingClientRect(), l = ja.offsetWidth, c = ja.offsetHeight;
    ja.style.left = Math.max(8, Math.min(innerWidth - l - 8, r.left + r.width / 2 - l / 2)) + "px", ja.style.top = (r.bottom + 8 + c > innerHeight - 8 ? Math.max(8, r.top - 8 - c) : r.bottom + 8) + "px";
  }
  n.addEventListener("pointerdown", (t) => {
    Do && !t.composedPath().some((e) => e === ja || e === Do) && Cn();
  }, !0), n.addEventListener("keydown", (t) => {
    var e;
    if (t.key === "Escape") {
      if (Do) {
        t.stopPropagation();
        const a = Do;
        Cn(), a.focus();
        return;
      }
      if (Da) {
        t.stopPropagation(), Da = !1, _n();
        return;
      }
      Lo && (t.stopPropagation(), tl(!1), (e = p("dashEditNav")) == null || e.focus());
    }
  }, !0);
  const wu = (t) => t.dataset.heList === "favs" ? St() : t.dataset.heList === "areas" ? Ds().map((e) => e.id) : qc(), Vc = (t, e) => t.dataset.heList === "favs" ? Qn({ favourites: e }) : t.dataset.heList === "areas" ? (Qn({ areaOrder: e }), Ve()) : wa({ sumOrder: e });
  me.addEventListener("keydown", (t) => {
    var f;
    const e = t.target.closest("[data-he-grip]");
    if (!e || !["ArrowUp", "ArrowDown"].includes(t.key)) return;
    t.preventDefault();
    const a = e.closest("[data-he-id]"), o = a.parentElement, r = wu(o), l = r.indexOf(a.dataset.heId), c = l + (t.key === "ArrowUp" ? -1 : 1);
    c < 0 || c >= r.length || (r.splice(c, 0, r.splice(l, 1)[0]), Vc(o, r), (f = me.querySelector('[data-he-list="' + o.dataset.heList + '"] [data-he-id="' + CSS.escape(a.dataset.heId) + '"] [data-he-grip]')) == null || f.focus());
  }), me.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-he-grip]");
    if (!e || t.button !== 0) return;
    const a = e.closest("[data-he-list]"), o = a.dataset.heList;
    nl(t, e.closest("[data-he-id]"), "heId", (r) => Vc(a, r), (r) => me.querySelector('[data-he-list="' + o + '"] [data-he-id="' + CSS.escape(r) + '"]'));
  }), me.addEventListener("input", (t) => {
    if (t.target.matches("[data-he-search]")) {
      const e = t.target.selectionStart;
      _n();
      const a = me.querySelector("[data-he-search]");
      a.focus(), a.setSelectionRange(e, e);
    }
  }), me.addEventListener("click", (t) => {
    var P, _, j, C;
    const e = t.target, a = e.closest("[data-info]");
    if (a) {
      Wc(a);
      return;
    }
    const o = e.closest("[data-he-go]");
    if (o) {
      Jn = o.dataset.heGo, Da = !1, Cn(), _n(), $n(me, "Edit Home page", Jn, o.textContent);
      return;
    }
    if (e.closest("[data-tray-back]")) {
      Cn(), $n(me, "Edit Home page", null);
      return;
    }
    const r = e.closest("[data-he-tab]");
    if (r) {
      const rt = me.querySelector(".hcTrayTabs .rubberIndicator"), Tt = { left: rt.offsetLeft, width: rt.offsetWidth };
      Jn = r.dataset.heTab, Da = !1, Cn(), _n(), Js(!0, Tt), me.querySelector(".tfTrayInner").scrollTop = 0;
      return;
    }
    if (e.closest("[data-he-welcome]")) {
      wa({ welcome: !Ts() });
      return;
    }
    const l = e.closest("[data-he-card]");
    if (l) {
      const rt = l.dataset.heCard, Tt = ["sums", "favs"].includes(rt) ? ((P = wt.home) == null ? void 0 : P[rt]) !== !1 : !!((_ = wt.home) != null && _[rt]);
      wa({ [rt]: !Tt });
      return;
    }
    const c = e.closest("[data-he-favs-as]");
    if (c) {
      wa({ favsAs: c.dataset.heFavsAs });
      return;
    }
    const f = e.closest("[data-he-sums-width]");
    if (f) {
      wa({ sumsWidth: f.dataset.heSumsWidth });
      return;
    }
    const u = e.closest("[data-he-area-size]");
    if (u) {
      wa({ areaSize: u.dataset.heAreaSize });
      return;
    }
    const v = e.closest("[data-he-area-layout]");
    if (v) {
      wa({ areaLayout: v.dataset.heAreaLayout });
      return;
    }
    if (e.closest("[data-he-fit]")) {
      wa({ fitTogether: !((j = wt.home) != null && j.fitTogether) });
      return;
    }
    const S = e.closest("[data-he-cards-as]");
    if (S) {
      wa({ cardsAs: S.dataset.heCardsAs });
      return;
    }
    const x = e.closest("[data-he-flag]");
    if (x) {
      const rt = x.dataset.heFlag;
      wa({ [rt]: !_o(rt) }), rt === "favsTitle" && za();
      return;
    }
    if (e.closest("[data-he-suggest]")) {
      Qn({ suggest: !Ht() });
      return;
    }
    const R = e.closest("[data-he-area]");
    if (R) {
      const rt = new Set(((C = wt.home) == null ? void 0 : C.areasOff) || []), Tt = R.dataset.heArea;
      rt.has(Tt) ? rt.delete(Tt) : rt.add(Tt), wa({ areasOff: [...rt] });
      return;
    }
    const E = e.closest("[data-he-sum]");
    if (E) {
      const rt = E.dataset.heSum, Tt = !mn(rt), Bt = wt.home || {};
      wa(Tp.includes(rt) ? { shownSums: Tt ? [...Bt.shownSums || [], rt] : (Bt.shownSums || []).filter((Gt) => Gt !== rt) } : { hiddenSums: Tt ? (Bt.hiddenSums || []).filter((Gt) => Gt !== rt) : [...Bt.hiddenSums || [], rt] });
      return;
    }
    const B = e.closest("[data-he-remove]");
    if (B) {
      Qn({ favourites: St().filter((rt) => rt !== B.dataset.heRemove) });
      return;
    }
    if (e.closest("[data-he-add]")) {
      Da = !Da, _n(), Da && me.querySelector("[data-he-search]").focus({ preventScroll: !0 });
      return;
    }
    const M = e.closest("[data-he-pick-id]");
    M && (Da = !1, me.querySelector("[data-he-search]").value = "", Qn({ favourites: [...St(), M.dataset.hePickId] }));
  });
  function Ae() {
    var S, x, R;
    const t = ia && g.classList.contains("tfBoard");
    if (Yt.classList.toggle("open", t), Yt.classList.toggle("tucked", t && eo), Yt.toggleAttribute("inert", !t), t || (To = !1), Zc(), !t) return;
    const e = Yt.querySelector("[data-tray-tuck]");
    e.innerHTML = eo ? Gl : Kl, e.setAttribute("aria-expanded", String(!eo)), e.setAttribute("aria-label", eo ? "Show the edit tray" : "Tuck the edit tray away");
    const a = se().hidden.filter((E) => !Mo.includes(E) && xn().some((B) => B.key === E)), o = (E, B) => '<button class="tfTrayCard" type="button" data-tray-card="' + F(E) + '" aria-label="' + F(Ta(E)) + ": drag it onto the board, or press to " + B + '"><span class="tfTrayGrip" aria-hidden="true">' + Jr + "</span>" + F(Ta(E)) + "</button>", r = a.filter((E) => !ii.includes(E)), l = ii.filter((E) => a.includes(E));
    Va("welcome", '<div class="hcHeLine"><span class="activityRowName">Welcome message</span>' + Sn("welcome") + '<button class="switch' + (se().welcome ? " on" : "") + '" type="button" role="switch" aria-checked="' + !!se().welcome + '" aria-label="Welcome message" data-dash-welcome></button></div><div class="hcHeLine"><span class="activityRowName">Show summaries</span><button class="switch' + ((S = wt.dash) != null && S.sumsOff ? "" : " on") + '" type="button" role="switch" aria-checked="' + !((x = wt.dash) != null && x.sumsOff) + '" aria-label="Show summaries" data-dash-sums></button></div>'), requestAnimationFrame(() => Us(!1)), Va("cards", '<div class="sectionLabel">Hidden and new cards</div>' + (r.length ? '<div class="tfTrayCards">' + r.map((E) => o(E, "put it back")).join("") + "</div>" : '<p class="tfTrayNote">Cards you hide, and new ones, wait here.</p>')), Va("weather", '<div class="sectionLabel">Weather</div>' + (l.length ? `<p class="tfTrayNote">The Weather page's widgets. Drag one onto the board, or press to add it.</p><div class="tfTrayCards">` + l.map((E) => o(E, "add it")).join("") + "</div>" : '<p class="tfTrayNote">Every weather widget is on the board.</p>')), Va("phone", '<div class="sectionLabel">Phone</div><p class="tfTrayNote">' + (se().phone ? "Phones have an order of their own." : "Phones follow the board's order.") + '</p><button class="pill tfTrayAdd" type="button" data-phone-toggle aria-pressed="' + To + '">' + (To ? "Hide the phone" : "Show the phone") + "</button>");
    const c = new Set(wt.favHidden || []), f = St(), u = [...f, ...[...c].filter((E) => !f.includes(E) && k[E])];
    Va("favs", u.map((E) => gu(E, c.has(E), f.includes(E))).join("") || '<li class="tfTrayNote">No favourites yet.</li>'), Yt.querySelector('[data-pick="tiles"]').hidden = !Ao, Yt.querySelector("[data-tile-add]").setAttribute("aria-expanded", String(Ao)), Ao && Va("tilepick", Ks(Yt.querySelector("[data-tile-search]").value, (E) => cr.includes(E.split(".")[0]), new Set(Di()), "data-tile-pick")), Yt.querySelector('[data-tray="roompick"]').hidden = !Or, Yt.querySelector("[data-room-add]").setAttribute("aria-expanded", String(Or));
    const v = new Set(((R = wt.dash) == null ? void 0 : R.areasOff) || []);
    if (Va("areas", b(m).map((E) => '<li class="hcHeRow" data-area-id="' + F(E.id) + '"><button class="tfTrayBtn hcHeGrip" type="button" data-area-grip aria-label="Move ' + F(E.name) + '. Use the up and down arrows">' + Jr + '</button><span class="tfIcon"><span class="tfAreaGlyph"' + he("area:" + E.id, E.icon || "mdi:texture-box", E.name) + '></span></span><span class="activityRowName">' + F(E.name) + '</span><button class="switch' + (v.has(E.id) ? "" : " on") + '" type="button" role="switch" aria-checked="' + !v.has(E.id) + '" aria-label="Show ' + F(E.name) + ' in the Areas card" data-area-on="' + F(E.id) + '"></button></li>').join("")), Or) {
      const E = new Set(Di());
      Va("roompick", b(m).filter((B) => !E.has("room:" + B.id)).map((B) => '<li><button class="tfTrayPickItem" type="button" data-room-pick="' + F(B.id) + '"><span class="tfIcon"><span class="tfAreaGlyph"' + he("area:" + B.id, B.icon || "mdi:texture-box", B.name) + '></span></span><span class="tfTrayName"><span class="activityRowName">' + F(B.name) + "</span></span></button></li>").join("") || '<li class="tfTrayNote">Every area is on the board.</li>');
    }
    Yt.querySelector('[data-pick="favs"]').hidden = !Co, Yt.querySelector("[data-fav-add]").setAttribute("aria-expanded", String(Co)), Co && Va("pick", Ks(Yt.querySelector("[data-fav-search]").value, (E) => Nc.test(E), new Set(St()), "data-fav-pick")), Va("favtitle", '<div><strong>Title</strong><div class="status">Favourites, at the top of the card.</div></div><button class="switch' + (Ti() ? " on" : "") + '" type="button" role="switch" aria-checked="' + Ti() + '" data-fav-title aria-label="Title"></button>'), Va("suggest", '<div><strong>Show suggestions</strong><div class="status">Fills the card after your favourites.</div></div><button class="switch' + (Ht() ? " on" : "") + '" type="button" role="switch" aria-checked="' + Ht() + '" data-fav-suggest aria-label="Show suggestions"></button>');
  }
  const An = (t) => {
    wt = { ...wt, ...t }, xa(), Pe(), Ae();
  };
  function jc(t, e) {
    const a = wt, o = new Set(wt.favHidden || []);
    e ? o.delete(t) : o.add(t), An({ favHidden: [...o] }), e ? La(ht(t) + " put back") : La(ht(t) + " hidden", Hi(a));
  }
  const vu = (t) => {
    const e = wt;
    An({ favourites: St().filter((a) => a !== t), favHidden: (wt.favHidden || []).filter((a) => a !== t) }), La(ht(t) + " removed from favourites", Hi(e));
  }, yu = (t) => {
    An({ favourites: [...St().filter((e) => e !== t), t], favHidden: (wt.favHidden || []).filter((e) => e !== t) }), La(ht(t) + " added to favourites");
  };
  Yt.addEventListener("click", (t) => {
    var a, o, r;
    const e = t.target.closest("button");
    if (e) {
      if (e.hasAttribute("data-tray-tab")) {
        Xn = e.dataset.trayTab, Us(!0), Yt.querySelector(".tfTrayInner").scrollTop = 0;
        return;
      }
      if (e.hasAttribute("data-tray-go")) {
        Xn = e.dataset.trayGo, Us(!1), $n(Yt, "Edit custom dashboard", Xn, Oc.find(([l]) => l === Xn)[1]);
        return;
      }
      if (e.hasAttribute("data-tray-back")) {
        $n(Yt, "Edit custom dashboard", null);
        return;
      }
      if (e.hasAttribute("data-tray-done")) qs(!1);
      else if (e.hasAttribute("data-info")) Wc(e);
      else if (e.hasAttribute("data-dash-sums"))
        yn({ ...Es(), hidden: Es().hidden.filter((l) => l !== "sums"), sumsOff: !((a = wt.dash) != null && a.sumsOff) }), Pe(), Ae();
      else if (e.hasAttribute("data-dash-welcome")) {
        const l = se();
        yn({ ...l, welcome: !l.welcome }), Pe(), Ae();
      } else if (e.hasAttribute("data-tray-tuck"))
        eo = !eo, Ae();
      else if (e.hasAttribute("data-phone-toggle"))
        To = !To, Ae(), To && ((o = la.querySelector("[data-phone-key]")) == null || o.focus({ preventScroll: !0 }));
      else if (e.dataset.trayCard)
        t.detail === 0 && (Ws(e.dataset.trayCard), Ae());
      else if (e.dataset.favEye) jc(e.dataset.favEye, e.getAttribute("aria-pressed") !== "true");
      else if (e.dataset.favRemove) vu(e.dataset.favRemove);
      else if (e.hasAttribute("data-fav-add"))
        Co = !Co, Ae(), Co && Yt.querySelector("[data-fav-search]").focus({ preventScroll: !0 });
      else if (e.dataset.favPick) yu(e.dataset.favPick);
      else if (e.hasAttribute("data-tile-add"))
        Ao = !Ao, Ae(), Ao && Yt.querySelector("[data-tile-search]").focus({ preventScroll: !0 });
      else if (e.dataset.tilePick) Rc(e.dataset.tilePick);
      else if (e.hasAttribute("data-room-add"))
        Or = !Or, Ae();
      else if (e.dataset.roomPick) Rc("room:" + e.dataset.roomPick);
      else if (e.dataset.areaOn) {
        const l = new Set(((r = wt.dash) == null ? void 0 : r.areasOff) || []);
        l.has(e.dataset.areaOn) ? l.delete(e.dataset.areaOn) : l.add(e.dataset.areaOn), yn({ ...se(), areasOff: [...l] }), Pe(), Ae();
      } else e.hasAttribute("data-fav-suggest") ? An({ suggest: !Ht() }) : e.hasAttribute("data-fav-title") && (An({ favsTitle: !Ti() }), za());
    }
  }), Yt.addEventListener("input", (t) => {
    t.target.matches("[data-fav-search],[data-tile-search]") && Ae();
  });
  const zc = (t) => {
    wt = { ...wt, areaOrder: t }, xa(), Pe(), Ae();
  };
  Yt.addEventListener("keydown", (t) => {
    var c, f, u;
    const e = (f = (c = t.target).closest) == null ? void 0 : f.call(c, "[data-area-grip]");
    if (!e || !["ArrowUp", "ArrowDown"].includes(t.key)) return;
    t.preventDefault();
    const a = e.closest("[data-area-id]").dataset.areaId, o = b(m).map((v) => v.id), r = o.indexOf(a), l = r + (t.key === "ArrowUp" ? -1 : 1);
    l < 0 || l >= o.length || (o.splice(l, 0, o.splice(r, 1)[0]), zc(o), (u = Yt.querySelector('[data-area-id="' + CSS.escape(a) + '"] [data-area-grip]')) == null || u.focus());
  }), Yt.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-area-grip]");
    !e || t.button !== 0 || nl(t, e.closest("[data-area-id]"), "areaId", zc, (a) => Yt.querySelector('[data-area-id="' + CSS.escape(a) + '"]'));
  });
  const Eo = window.visualViewport, el = () => {
    if (!Eo) return;
    const t = Math.max(0, Math.round(window.innerHeight - Eo.height - Eo.offsetTop));
    Yt.style.bottom = t > 40 ? t + "px" : "";
  };
  Eo == null || Eo.addEventListener("resize", el), Eo == null || Eo.addEventListener("scroll", el), Yt.addEventListener("focusin", (t) => {
    var e, a;
    (a = (e = t.target).matches) != null && a.call(e, "input") && setTimeout(() => {
      el(), t.target.scrollIntoView({ block: "center", behavior: "smooth" });
    }, 350);
  }), Yt.addEventListener("keydown", (t) => {
    var a, o;
    const e = !!((o = (a = t.target).closest) != null && o.call(a, '[data-pick="tiles"],[data-tile-add]'));
    t.key !== "Escape" || !(e ? Ao : Co) || (t.stopPropagation(), e ? Ao = !1 : Co = !1, Ae(), Yt.querySelector(e ? "[data-tile-add]" : "[data-fav-add]").focus({ preventScroll: !0 }));
  });
  function Gc(t, e, a, o) {
    t.preventDefault();
    const r = t.clientX, l = t.clientY;
    let c = null, f = 0;
    const u = Object.assign(document.createElement("div"), { className: "tfFavDrop" }), v = (x) => {
      if (!c) {
        if (Math.hypot(x.clientX - r, x.clientY - l) < 4) return;
        c = e.cloneNode(!0), c.classList.add("tfTrayGhost"), c.style.width = e.offsetWidth + "px", g.appendChild(c);
      }
      c.style.transform = "translate(" + (x.clientX - 24) + "px," + (x.clientY - 24) + "px)";
      const R = !eo && x.clientX >= Yt.getBoundingClientRect().left;
      if (a === "card") {
        const M = H.getBoundingClientRect(), { w: P } = Qo(H.clientWidth);
        te = !R && x.clientX >= M.left && x.clientX <= M.right && x.clientY >= M.top + Jo ? { key: o, col: Math.max(0, Math.floor((x.clientX - M.left) / (P + de))), row: Math.max(0, Math.floor((x.clientY - M.top - Jo) / Aa)), fromTray: !0 } : null, f || (f = requestAnimationFrame(() => {
          f = 0, Ve();
        }));
        return;
      }
      const E = H.querySelector(".tfDash-favs"), B = E == null ? void 0 : E.getBoundingClientRect();
      if (ta = null, B && !R && x.clientX >= B.left && x.clientX <= B.right && x.clientY >= B.top && x.clientY <= B.bottom) {
        let M = 1 / 0;
        E.querySelectorAll('[data-k^="fav:"]').forEach((P, _) => {
          const j = P.getBoundingClientRect(), C = Math.hypot(x.clientX - (j.left + j.width / 2), x.clientY - (j.top + j.height / 2));
          C < M && (M = C, ta = { i: _, r: j, after: x.clientX > j.left + j.width / 2 });
        }), ta || (ta = { i: 0, r: null, after: !1 });
      }
      ta != null && ta.r ? (u.isConnected || g.appendChild(u), Object.assign(u.style, { left: (ta.after ? ta.r.right : ta.r.left) - 2 + "px", top: ta.r.top + 8 + "px", height: ta.r.height - 16 + "px" })) : u.remove();
    }, S = () => {
      if (window.removeEventListener("pointermove", v), window.removeEventListener("pointerup", S), window.removeEventListener("pointercancel", S), cancelAnimationFrame(f), c == null || c.remove(), u.remove(), a === "card") {
        if (!c) Ws(o);
        else if (te != null && te.fromTray) {
          Ve();
          const M = Ta(o) + Ec(o), P = se(), _ = kn();
          te = null, Kn({ ...P, hidden: P.hidden.filter((j) => j !== o) }, _), La(M);
        }
        te = null, Ve(), Pe(), Ae();
        return;
      }
      if (!ta) return;
      const x = new Set(wt.favHidden || []);
      x.delete(o);
      const R = St().filter((M) => M !== o), E = R.filter((M) => !x.has(M)), B = E[Math.min(ta.i + (ta.after ? 1 : 0), E.length)];
      R.splice(B ? R.indexOf(B) : R.length, 0, o), ta = null, An({ favourites: R, favHidden: [...x] }), La(ht(o) + " put back");
    };
    window.addEventListener("pointermove", v), window.addEventListener("pointerup", S), window.addEventListener("pointercancel", S);
  }
  const Uc = {
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
  }, Yc = 136, xu = 288, ku = 0.8, Mu = { wx: "mdi:weather-partly-cloudy", areas: "mdi:home", favs: "mdi:star", act: "mdi:history", energy: "mdi:lightning-bolt", avg: "mdi:chart-line", aq: "mdi:air-filter", pollen: "mdi:flower-pollen", radar: "mdi:radar" }, la = Object.assign(document.createElement("aside"), { className: "tfMiniPhone" });
  la.setAttribute("aria-label", "Phone order"), la.innerHTML = '<div class="tfPhoneHead"><div class="activityTitle">Phone</div><button class="tfTrayBtn" type="button" data-phone-close aria-label="Close the phone">' + Yl + '</button></div><p class="tfTrayNote" data-phone="note"></p><div class="tfPhoneScreen"><div class="tfPhoneList" data-phone="list"></div></div>', g.appendChild(la);
  let al = "";
  function Zc() {
    var f;
    const t = To && ia && g.classList.contains("tfBoard") && !eo;
    if (la.classList.toggle("open", t), la.toggleAttribute("inert", !t), !t) return;
    const e = Bs().filter((u) => !se().hidden.includes(u.key)), a = e.length, o = (u) => Math.round(u * ku * 10) / 10 + "px", r = (u, v) => {
      const S = u.el.classList.contains("tfDac"), x = u.tile ? S ? xu : Yc : Uc[u.key] || Yc;
      return '<button class="tfPhoneBlock' + (u.tile ? " tile" : "") + '" type="button" data-phone-key="' + F(u.key) + '" style="min-height:' + o(x) + '" aria-label="' + F(Ta(u.key) + ", " + (v + 1) + " of " + a + ". Drag, or use the arrow keys, to move it") + '"><span class="tfIcon"' + (u.tile ? he(u.key, Sa(u.key)) : he(u.key, Mu[u.key])) + '></span><span class="tfPhoneName">' + F(Ta(u.key)) + "</span></button>";
    }, l = '<div class="tfPhoneTitle">' + F(((f = H.querySelector(".tfDashTitle")) == null ? void 0 : f.textContent) || "") + '</div><div class="tfPhoneBlock fixed" style="min-height:' + o(Uc.sums) + '"><span class="tfPhoneName">' + F(Ta("sums")) + "</span></div>" + e.map(r).join("");
    if (la.querySelector('[data-phone="note"]').innerHTML = se().phone ? 'Phones use this order. <button class="tfLinkBtn" type="button" data-phone-reset>Follow the board</button>' : "Phones follow the board. Drag a card to give them an order of their own.", l === al) return;
    al = l;
    const c = la.querySelector('[data-phone="list"]');
    c.innerHTML = l, ho(c);
  }
  function Kc(t, e) {
    var a;
    yn({ ...se(), phone: t }), Ae(), e && ((a = la.querySelector('[data-phone-key="' + CSS.escape(e) + '"]')) == null || a.focus({ preventScroll: !0 }));
  }
  const ol = () => [...la.querySelectorAll("[data-phone-key]")].map((t) => t.dataset.phoneKey);
  function Su(t, e) {
    t.preventDefault();
    const a = e.parentElement, o = la.querySelector(".tfPhoneScreen"), r = ol().join();
    e.classList.add("moving");
    const l = (f) => {
      const u = o.getBoundingClientRect();
      f.clientY > u.bottom - 40 ? o.scrollTop += 12 : f.clientY < u.top + 40 && (o.scrollTop -= 12);
      const v = [...a.querySelectorAll("[data-phone-key]")].find((R) => {
        const E = R.getBoundingClientRect();
        return R !== e && f.clientX >= E.left && f.clientX <= E.right && f.clientY >= E.top && f.clientY <= E.bottom;
      });
      if (!v) return;
      const S = v.getBoundingClientRect(), x = v.classList.contains("tile") ? f.clientX < S.left + S.width / 2 : f.clientY < S.top + S.height / 2;
      a.insertBefore(e, x ? v : v.nextSibling);
    }, c = () => {
      window.removeEventListener("pointermove", l), window.removeEventListener("pointerup", c), window.removeEventListener("pointercancel", c), e.classList.remove("moving");
      const f = ol();
      al = "", f.join() !== r ? Kc(f) : Zc();
    };
    window.addEventListener("pointermove", l), window.addEventListener("pointerup", c), window.addEventListener("pointercancel", c);
  }
  la.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-phone-key]");
    e && t.button <= 0 && Su(t, e);
  }), la.addEventListener("click", (t) => {
    var a;
    const e = t.target.closest("button");
    if (e != null && e.hasAttribute("data-phone-close"))
      To = !1, Ae(), (a = Yt.querySelector("[data-phone-toggle]")) == null || a.focus({ preventScroll: !0 });
    else if (e != null && e.hasAttribute("data-phone-reset")) {
      const { phone: o, ...r } = se();
      yn(r), Ae();
    }
  }), la.addEventListener("keydown", (t) => {
    var c, f, u, v;
    if (t.key === "Escape") {
      t.stopPropagation(), To = !1, Ae(), (c = Yt.querySelector("[data-phone-toggle]")) == null || c.focus({ preventScroll: !0 });
      return;
    }
    const e = (v = (u = (f = t.target).closest) == null ? void 0 : u.call(f, "[data-phone-key]")) == null ? void 0 : v.dataset.phoneKey, a = { ArrowUp: -1, ArrowLeft: -1, ArrowDown: 1, ArrowRight: 1 }[t.key];
    if (!e || !a) return;
    t.preventDefault();
    const o = ol(), r = o.indexOf(e), l = r + a;
    l < 0 || l >= o.length || ([o[r], o[l]] = [o[l], o[r]], Kc(o, e));
  });
  function nl(t, e, a, o, r) {
    t.preventDefault();
    const l = De.drag, c = We(), f = 1 + l.lift / 100, u = [...e.parentElement.children].filter((Dt) => Dt.dataset[a]), v = u.indexOf(e), S = u.map((Dt) => Dt.getBoundingClientRect()), x = u.length - 1, R = S[v].height + (u.length > 1 ? S[1].top - S[0].bottom : 0), E = (Dt) => S[Dt].top + S[Dt].height / 2, B = t.clientY, M = S[0].top - S[v].top, P = S[x].top - S[v].top;
    let _ = 0, j = 0, C = 0, rt = 1, Tt = v, Bt = 0;
    e.classList.add("hcListDragging"), u.forEach((Dt) => {
      Dt !== e && (Dt.style.transition = c ? "none" : "transform " + l.gap + "ms " + Ee.land);
    });
    const Gt = () => {
      if (Bt = requestAnimationFrame(Gt), c) {
        j = _, e.style.transform = "translateY(" + j + "px)";
        return;
      }
      C = Nl(C, _ - j, l.pull / 100, l.keep / 100), j += C, rt += (f - rt) * 0.25;
      const Dt = Math.min(Math.abs(C) / 48, 1);
      e.style.transform = "translateY(" + j.toFixed(2) + "px) scale(" + (rt * (1 - 0.063 * Dt)).toFixed(4) + "," + (rt * (1 + 0.1 * Dt)).toFixed(4) + ")";
    };
    Bt = requestAnimationFrame(Gt);
    const Ut = (Dt) => {
      _ = Math.max(M, Math.min(P, Dt.clientY - B));
      const ve = E(v) + _, Te = u.filter((Ne, Fe) => Fe !== v && E(Fe) < ve).length;
      Te !== Tt && (Tt = Te, u.forEach((Ne, Fe) => {
        Ne !== e && (Ne.style.transform = v < Tt && Fe > v && Fe <= Tt ? "translateY(" + -R + "px)" : Tt < v && Fe >= Tt && Fe < v ? "translateY(" + R + "px)" : "");
      }));
    }, Ct = () => {
      window.removeEventListener("pointermove", Ut), window.removeEventListener("pointerup", Ct), window.removeEventListener("pointercancel", Ct), cancelAnimationFrame(Bt);
      const Dt = e.getBoundingClientRect(), ve = e.dataset[a];
      u.forEach((Ba) => {
        Ba.style.transition = "none", Ba.style.transform = "";
      }), e.classList.remove("hcListDragging");
      const Te = u.map((Ba) => Ba.dataset[a]);
      Te.splice(Tt, 0, Te.splice(v, 1)[0]), o(Te);
      const Ne = r(ve) || e;
      if (requestAnimationFrame(() => u.forEach((Ba) => {
        Ba.style.transition = "";
      })), c) return;
      const Fe = Ne.getBoundingClientRect(), nr = Dt.top + Dt.height / 2 - (Fe.top + Fe.height / 2);
      Ne.classList.add("hcListLanding"), Ne.animate([{ transform: "translateY(" + nr + "px) scale(" + rt + ")", filter: "drop-shadow(0 10px 30px rgba(0,0,0,.35))" }, { transform: "none", filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" }], { duration: l.slide, easing: Ee.land }).finished.then(() => {
        Ne.classList.remove("hcListLanding"), Ol(Ne);
      }, () => Ne.classList.remove("hcListLanding"));
    };
    window.addEventListener("pointermove", Ut), window.addEventListener("pointerup", Ct), window.addEventListener("pointercancel", Ct);
  }
  function _u(t, e) {
    nl(
      t,
      e,
      "trayFav",
      (a) => {
        const o = new Set(St());
        Ys.favs = null, An({ favourites: a.filter((r) => o.has(r)) });
      },
      (a) => Yt.querySelector('[data-tray-fav="' + CSS.escape(a) + '"]')
    );
  }
  Yt.addEventListener("pointerdown", (t) => {
    if (t.button > 0) return;
    const e = t.target.closest("[data-tray-card]"), a = t.target.closest(".tfTrayFav");
    e ? Gc(t, e, "card", e.dataset.trayCard) : a && t.target.closest(".tfTrayGrip") ? _u(t, a) : a != null && a.classList.contains("off") && !t.target.closest("button") && Gc(t, a, "fav", a.dataset.trayFav);
  });
  function Cu(t) {
    if (!ia || t.button !== 0 || t.target.closest("[data-board-more],.tfBoardMenu,.tfFavHides")) return;
    const e = t.target.closest(".tfBoardItem"), a = e && xn().find((Gt) => Gt.el === e);
    if (!a || Mo.includes(a.key)) return;
    const o = vn.get(a.key), { w: r } = Qo(H.clientWidth);
    if (!o) return;
    t.preventDefault(), to();
    const l = t.clientX, c = t.clientY;
    let f = !1, u = 0;
    const v = De.drag, S = We();
    let x = 0, R = 0, E = 0, B = 0, M = 0, P = 0, _ = S || v.stick === 0, j = 0;
    const C = (Gt, Ut, Ct, Dt) => {
      e.style.transform = "translate(" + E.toFixed(2) + "px," + B.toFixed(2) + "px) rotate(" + Gt.toFixed(2) + "deg) rotate(" + Ut + "rad) scale(" + Ct.toFixed(4) + "," + Dt.toFixed(4) + ") rotate(" + -Ut + "rad)";
    }, rt = () => {
      if (j = requestAnimationFrame(rt), S) {
        E = x, B = R, C(0, 0, 1, 1);
        return;
      }
      if (!_) {
        const ve = Math.min(Math.hypot(x, R) / Math.max(1, v.stick), 1);
        E = x * 0.35, B = R * 0.35, C(0, Math.atan2(R, x), 1 + 0.155 * ve, 1 - 0.1 * ve);
        return;
      }
      M = Nl(M, x - E, v.pull / 100, v.keep / 100), P = Nl(P, R - B, v.pull / 100, v.keep / 100), E += M, B += P;
      const Gt = Math.hypot(M, P), Ut = Math.min(Gt / 48, 1), Ct = Math.max(-5, Math.min(v.tilt, M * 0.32)), Dt = 1 + v.lift / 100;
      C(Ct, Math.atan2(P, M), Dt * (1 + 0.1 * Ut), Dt * (1 - 0.063 * Ut));
    }, Tt = (Gt) => {
      if (x = Gt.clientX - l, R = Gt.clientY - c, !f) {
        if (Math.hypot(x, R) < 4) return;
        f = !0, te = { key: a.key, col: o.col, row: o.row }, e.classList.add("tfDragging", "mvDrag"), j = requestAnimationFrame(rt);
      }
      !_ && Math.hypot(x, R) > v.stick && (_ = !0, M = x * 0.085, P = R * 0.085), te.col = Math.round((o.x + x) / (r + de)), te.row = Math.round((o.y + R - Jo) / Aa), u || (u = requestAnimationFrame(() => {
        u = 0, Ve();
      }));
    }, Bt = () => {
      var nr;
      if (window.removeEventListener("pointermove", Tt), window.removeEventListener("pointerup", Bt), window.removeEventListener("pointercancel", Bt), !f) return;
      const Gt = (rr) => {
        rr.preventDefault(), rr.stopImmediatePropagation();
      };
      window.addEventListener("click", Gt, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", Gt, { capture: !0 }), 300), cancelAnimationFrame(u), cancelAnimationFrame(j);
      const Ut = e.getBoundingClientRect(), Ct = a.key;
      e.style.transition = "none", Ve(), e.classList.remove("tfDragging", "mvDrag"), e.style.transform = "", te = null, Kn(se(), kn()), Ve(), Pe();
      const Dt = (nr = xn().find((rr) => rr.key === Ct)) == null ? void 0 : nr.el;
      if (requestAnimationFrame(() => {
        e.style.transition = "", Dt && (Dt.style.transition = "");
      }), !Dt || S) return;
      Dt.style.transition = "none";
      const ve = Dt.getBoundingClientRect(), Te = Ut.left + Ut.width / 2 - (ve.left + ve.width / 2), Ne = Ut.top + Ut.height / 2 - (ve.top + ve.height / 2);
      Dt.style.zIndex = "20", Dt.animate([{ transform: "translate(" + Te + "px," + Ne + "px) scale(" + (1 + v.lift / 100) + ")" }, { transform: "none" }], { duration: v.slide, easing: Ee.land }).finished.then(() => {
        Dt.style.zIndex = "", Ol(Dt);
      }, () => {
        Dt.style.zIndex = "";
      });
    };
    window.addEventListener("pointermove", Tt), window.addEventListener("pointerup", Bt), window.addEventListener("pointercancel", Bt);
  }
  function Xc(t = !1) {
    const e = H == null ? void 0 : H.querySelector(".tfDashGraph svg[data-graph]");
    if (!(e != null && e.clientWidth)) return;
    const a = e.dataset.graph + "@" + e.clientWidth + "x" + e.clientHeight + "@" + Math.floor(Date.now() / 3e5);
    if (e.dataset.drawn === a) return;
    const o = !e.dataset.drawn;
    e.dataset.drawn = a;
    const r = lc.find((l) => l.id === e.dataset.graph);
    r ? Bf(e, r).then(() => {
      (t || o) && Rf(e);
    }) : vd(e.dataset.graph, e).then(() => {
      t && fc(e);
    });
  }
  function $c() {
    var u, v, S;
    Vt = oi.model(d(), { madeUp: !T }), dt(), k = Vt.states, k[(u = wt.sources) == null ? void 0 : u.grid] && (Vt.grid = wt.sources.grid), k[(v = wt.sources) == null ? void 0 : v.alarm] && (Vt.security.alarms = [wt.sources.alarm]), fa.forEach((x, R) => {
      const E = k[R], B = (E == null ? void 0 : E.attributes) || {};
      if (!E || Date.now() - x.at > 2 * 60 * 1e3) {
        fa.delete(R);
        return;
      }
      x.pos != null && E.state !== "opening" && E.state !== "closing" && Math.abs(Ma(R) - x.pos) < 1 && delete x.pos, x.tilt != null && Math.abs((B.current_tilt_position ?? -1) - x.tilt) < 1 && delete x.tilt, x.pos == null && x.tilt == null && fa.delete(R);
    });
    const t = [];
    let e = 0;
    const a = mt();
    m = a.filter((x) => x.room).map((x) => x.room), m.some((x) => x.id === q) || (q = ((S = m[0]) == null ? void 0 : S.id) || null);
    const o = Q === "weather" ? { key: "weather", name: "Weather" } : Q && a.find((x) => x.key === Q);
    if (o || (Q = null), g.classList.toggle("tfAreaOpen", !!o), g.classList.toggle("tfWeatherOpen", (o == null ? void 0 : o.key) === "weather"), g.classList.toggle("tfDash", !o), we = /* @__PURE__ */ new Map(), Vt.rooms.forEach((x) => [...x.actions, ...x.plugs, ...x.readings, ...x.openings, ...x.solar, ...x.plants.flatMap((R) => [R.id, ...R.readings])].forEach((R) => we.set(R, x.name))), !o) return Of(t, Jt());
    if (t.push({ key: "areahead", html: Au(o, ++e) }), o.key === "weather")
      return t.weather = ++e, t;
    const r = o.ids, l = o.room ? o.room.id : o.key, c = o.room;
    c != null && c.solar.length && t.push({ key: "energy:" + c.id, html: qn(c, ++e) }), c && (c.readings.length || c.power != null) && t.push({ key: "readings:" + c.id, html: Uo(c, ++e) }), c == null || c.plants.forEach((x) => t.push({ key: "plant:" + x.id, html: go(x, ++e) }));
    const f = [...r, ...((c == null ? void 0 : c.plugs) || []).filter((x) => !r.includes(x))];
    return f.length && t.push({ key: "block:" + l, order: ++e, tiles: f.map((x) => ({ key: x, html: Xo(x) })) }), t;
  }
  const Au = (t, e) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + e + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + Gl + '</button><div class="settingsTitle">' + F(t.name) + "</div></div>";
  let Jc = 0, Qc = null;
  const td = (t) => t === "weather" ? Ia.wx : t.startsWith("room:") && H.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || H.querySelector(".tfAreas");
  function ed(t) {
    var e, a;
    Q || (Jc = qr().scrollTop, Qc = ((e = td(t)) == null ? void 0 : e.getBoundingClientRect().top) ?? null), Q = t, t.startsWith("room:") && (q = t.slice(5)), za(), qr().scrollTop = 0, (a = H.querySelector("[data-area-back]")) == null || a.focus({ preventScroll: !0 });
  }
  let Fr = null;
  function Tu(t, e) {
    if (Fr == null || Fr(), e == null) return;
    const a = qr(), o = performance.now() + 1500, r = ["wheel", "touchstart", "pointerdown", "keydown"];
    let l = 0;
    const c = () => {
      cancelAnimationFrame(l), r.forEach((u) => window.removeEventListener(u, c, !0)), Fr = null;
    }, f = () => {
      const u = t();
      if (u != null && u.isConnected) {
        const v = u.getBoundingClientRect().top - e;
        Math.abs(v) > 0.5 && (a.scrollTop += v);
      }
      performance.now() < o ? l = requestAnimationFrame(f) : c();
    };
    r.forEach((u) => window.addEventListener(u, c, { capture: !0, passive: !0 })), Fr = c, f();
  }
  function rl() {
    var a;
    const t = Q;
    Q = null, za(), qr().scrollTop = Jc, Tu(() => td(t), Qc);
    const e = t.startsWith("room:") ? H.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || H.querySelector('.tfAreaPanel[data-area="' + CSS.escape(t.slice(5)) + '"]') : t === "weather" ? Ia.wx.querySelector(".wbOpenPage") : H.querySelector('[data-k="sum:' + CSS.escape(t) + '"]');
    (a = (e == null ? void 0 : e.querySelector("[data-go]")) || e) == null || a.focus({ preventScroll: !0 });
  }
  const Lu = (t) => t.wrap ? t.wrap(t.tiles.map((e) => e.html).join(""), t) : '<div class="tfBlock" data-tf data-k="' + F(t.key) + '" style="order:' + t.order + '"><div class="tfActions">' + t.tiles.map((e) => e.html).join("") + "</div></div>", ad = (t) => t.map((e) => e.key + (e.tiles ? "(" + e.tiles.map((a) => a.key).join(",") + ")" : "")).join(";");
  function qr() {
    for (let t = g.parentElement || g.getRootNode().host; t; t = t.parentElement || t.getRootNode().host) {
      const e = getComputedStyle(t).overflowY;
      if ((e === "auto" || e === "scroll") && t.scrollHeight > t.clientHeight) return t;
    }
    return document.scrollingElement;
  }
  function od(t) {
    const e = qr(), a = (f) => {
      const u = f.getBoundingClientRect();
      return u.height && u.bottom > 0 && u.top < window.innerHeight;
    }, o = [...H.children, ...H.querySelectorAll(".tfDashTiles > *")].find((f) => !f.matches(".tfDashTiles") && a(f)), r = o == null ? void 0 : o.dataset.k, l = o == null ? void 0 : o.getBoundingClientRect().top;
    t();
    const c = o != null && o.isConnected ? o : r && H.querySelector('[data-k="' + CSS.escape(r) + '"]');
    c != null && c.isConnected && l != null && (e.scrollTop += c.getBoundingClientRect().top - l);
  }
  function za() {
    if (!w || !H) return;
    const t = $c(), e = (r) => {
      var l;
      return (((l = r.closest("[data-k]")) == null ? void 0 : l.dataset.k) || "") + "|" + r.dataset.iconFor + "|" + (r.dataset.iconName || "");
    }, a = /* @__PURE__ */ new Map();
    H.querySelectorAll("[data-tf] [data-icon-for]").forEach((r) => {
      r.firstElementChild && (a.get(e(r)) || a.set(e(r), []).get(e(r))).push(r.firstElementChild);
    }), H.querySelectorAll("[data-tf]").forEach((r) => r.remove()), ua.clear();
    const o = document.createElement("div");
    o.innerHTML = t.map((r) => r.tiles ? Lu(r) : r.html).join(""), t.forEach((r) => r.tiles ? r.tiles.forEach((l) => ua.set(l.key, l.html)) : ua.set(r.key, r.html)), ai = ad(t), o.querySelectorAll("[data-icon-for]").forEach((r) => {
      var c;
      const l = !r.firstElementChild && ((c = a.get(e(r))) == null ? void 0 : c.shift());
      l && r.appendChild(l);
    }), H.append(...o.children), ri(t.weather), si(), Os.disconnect(), Ve(), ho(H), ml(H), wo(H), N(), yd(), ar(), pd(), requestAnimationFrame(it);
  }
  const nd = (t) => {
    var a;
    const e = n.activeElement && t.contains(n.activeElement) ? n.activeElement : null;
    return e && { label: e.getAttribute("aria-label"), act: (a = e.dataset) == null ? void 0 : a.act };
  }, il = (t, e) => {
    var a;
    e && ((a = e.label && t.querySelector('[aria-label="' + CSS.escape(e.label) + '"]') || e.act && t.querySelector('[data-act="' + CSS.escape(e.act) + '"]')) == null || a.focus({ preventScroll: !0 }));
  };
  function sl(t, e) {
    if (!t.querySelector(".tfDacPad"))
      return t.replaceWith(e), e;
    const a = t.matches(".tfDac") && t.querySelector(":scope > .tfDacPad"), o = e.querySelector(":scope > .tfDacPad");
    if (a)
      return (o == null ? void 0 : o.dataset.dac) !== a.dataset.dac ? (t.replaceWith(e), e) : (t.querySelector(":scope > .tfActionHead").replaceWith(e.querySelector(":scope > .tfActionHead")), t.classList.toggle("on", e.classList.contains("on")), ["data-light", "data-tone"].forEach((c) => e.hasAttribute(c) ? t.setAttribute(c, e.getAttribute(c)) : t.removeAttribute(c)), [...t.style].filter((c) => c.startsWith("--") && !c.startsWith("--tf-")).forEach((c) => t.style.removeProperty(c)), [...e.style].forEach((c) => t.style.setProperty(c, e.style.getPropertyValue(c))), t);
    const r = (c) => {
      var f;
      return ((f = c.dataset) == null ? void 0 : f.iconFor) !== void 0;
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
    return [...t.children].forEach((c, f) => sl(c, l[f])), t;
  }
  function rd(t, e) {
    const a = document.createElement("div");
    a.innerHTML = e;
    const o = nd(t), r = sl(t, a.firstElementChild);
    ho(r), ml(r), wo(r), il(r, o);
  }
  function Pe() {
    !w || !H || te || od(Du);
  }
  function Du() {
    if (ie = !1, !H.querySelector("[data-tf]")) {
      za();
      return;
    }
    const t = $c();
    if (ad(t) !== ai) {
      za();
      return;
    }
    const e = (a) => qt().some((o) => {
      const r = o.slice(o.indexOf("|") + 1);
      return a === r || a.endsWith(":" + r);
    });
    t.forEach((a) => (a.tiles || [a]).forEach((o) => {
      if (ua.get(o.key) === o.html) return;
      if (e(o.key)) {
        ie = !0;
        return;
      }
      const r = H.querySelector('[data-k="' + CSS.escape(o.key) + '"]');
      r && (ua.set(o.key, o.html), rd(r, o.html), o.key.startsWith("energy:") && yd());
    })), ar(), pd(), xi(), N(), xe == null || xe.update(), Ce == null || Ce.forEach((a) => a.update()), g.classList.contains("tfDash") && Li(), requestAnimationFrame(it);
  }
  const tr = {
    light: (t) => [["Brightness", t.brightness != null ? Math.round(t.brightness / 2.55) + "%" : null], ["Colour temperature", t.color_temp_kelvin ? Number(t.color_temp_kelvin).toLocaleString() + " K" : null], ["Colour mode", t.color_mode && Wt(t.color_mode)]],
    climate: (t) => [["Current temperature", Re(t.current_temperature) + " °C"], ["Target", Re(t.temperature) + " °C"], ["Action", Wt(t.hvac_action)]],
    cover: (t) => [["Position", t.current_position != null ? t.current_position + "% open" : null], ["Tilt", t.current_tilt_position != null ? t.current_tilt_position + "% open" : null]],
    humidifier: (t) => [["Current humidity", t.current_humidity + "%"], ["Target", t.humidity + "%"], ["Mode", Wt(t.mode)]],
    media_player: (t) => [["Title", t.media_title], ["Artist", t.media_artist], ["Volume", t.volume_level != null ? Math.round(t.volume_level * 100) + "%" : null], ["Source", t.source]],
    vacuum: (t) => [["Battery", t.battery_level + "%"], ["Fan speed", Wt(t.fan_speed)], ["Rooms", (t.rooms || []).join(", ") || null]],
    lock: (t) => [["Changed by", t.changed_by]],
    alarm_control_panel: (t) => [["Changed by", t.changed_by]],
    valve: (t) => [["Position", t.current_position != null ? t.current_position + "% open" : null]],
    fan: (t) => [["Speed", t.percentage != null ? t.percentage + "%" : null], ["Oscillating", t.oscillating != null ? t.oscillating ? "Yes" : "No" : null], ["Direction", t.direction && Wt(t.direction)]],
    water_heater: (t) => [["Current temperature", t.current_temperature != null ? t.current_temperature + " °C" : null], ["Target", t.temperature != null ? t.temperature + " °C" : null], ["Mode", t.operation_mode && Wt(t.operation_mode)], ["Away", t.away_mode && Wt(t.away_mode)]],
    plant: (t) => [["Moisture", t.moisture + "%"], ["Light", Number(t.brightness).toLocaleString() + " lx"], ["Temperature", Re(t.temperature) + " °C"], ["Fertility", t.conductivity + " µS/cm"], ["Problems", t.problem === "none" ? "None" : Wt(t.problem)]],
    weather: (t) => [["Temperature", t.temperature != null ? t.temperature + " " + (t.temperature_unit || "°C") : null], ["Humidity", t.humidity != null ? t.humidity + "%" : null], ["Wind", t.wind_speed != null ? t.wind_speed + " " + (t.wind_speed_unit || "km/h") : null], ["Pressure", t.pressure != null ? t.pressure + " " + (t.pressure_unit || "hPa") : null]]
  }, Eu = (t) => Ya(t) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function Bu(t, e = {}, a = !1) {
    return '<div class="tfMoreList">' + t.map((o) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + F(o.name) + '</div><div class="tfMoreTiles' + (a ? " single" : "") + '">' + o.ids.map((r) => _t(r, e)).join("") + "</div></div>").join("") + "</div>";
  }
  const kt = document.createElement("div");
  kt.className = "tfMoreBackdrop", kt.hidden = !0, g.appendChild(kt);
  const Ga = document.createElement("div");
  Ga.className = "tfMoreBackdrop tfMoreUnder", Ga.hidden = !0, g.insertBefore(Ga, kt);
  const ll = (t, e) => {
    for (let a = t; a && a !== kt; a = a.parentElement) {
      const o = getComputedStyle(a).overflowY;
      if ((o === "auto" || o === "scroll") && a.scrollHeight > a.clientHeight + 1 && (e < 0 ? a.scrollTop > 0 : a.scrollTop + a.clientHeight < a.scrollHeight - 1)) return !0;
    }
    return !1;
  };
  let Wr = null;
  kt.addEventListener("touchstart", (t) => {
    Wr = { x: t.touches[0].clientX, y: t.touches[0].clientY };
  }, { passive: !0 }), kt.addEventListener("touchmove", (t) => {
    var r, l;
    if (!Wr || t.touches.length > 1 || (l = (r = t.target).closest) != null && l.call(r, "input,textarea,select")) return;
    const e = t.touches[0], a = Wr.x - e.clientX, o = Wr.y - e.clientY;
    Wr = { x: e.clientX, y: e.clientY }, Math.abs(o) >= Math.abs(a) && !ll(t.target, o) && t.preventDefault();
  }, { passive: !1 }), kt.addEventListener("wheel", (t) => {
    var e, a;
    Math.abs(t.deltaX) > Math.abs(t.deltaY) && ((a = (e = t.target).closest) != null && a.call(e, "[data-more-pages]")) || ll(t.target, t.deltaY) || t.preventDefault();
  }, { passive: !1 });
  const Ru = () => window.innerWidth <= 620;
  let je = null;
  kt.addEventListener("pointerdown", (t) => {
    const e = kt.querySelector(".tfMorePair");
    !Ru() || !e || !e.contains(t.target) || !t.isPrimary || kt._closing || t.target.closest("input,textarea,select,.tfDacPad,[data-cover-art],.tfMoreSide,[data-drag],[data-blocks]") || (je = { x: t.clientX, y: t.clientY, t: performance.now(), dy: 0, v: 0, pair: e, from: t.target, grab: t.target.matches(".tfMore") || !!t.target.closest(".tfMoreHead") });
  }, !0), kt.addEventListener("pointermove", (t) => {
    if (!je || !t.isPrimary) return;
    const e = t.clientY - je.y, a = performance.now();
    if (!je.on) {
      if (Math.abs(t.clientX - je.x) > 8 || e < -8 || !je.grab && ll(je.from, -1)) {
        je = null;
        return;
      }
      if (e < 8) return;
      je.on = !0;
      try {
        kt.setPointerCapture(t.pointerId);
      } catch {
      }
    }
    je.v = (e - je.dy) / Math.max(1, a - je.t), je.dy = e, je.t = a, je.pair.style.transform = "translateY(" + Math.max(0, e) + "px)";
  });
  const id = (t) => {
    if (!je || !t.isPrimary) return;
    const e = je;
    if (je = null, !e.on) return;
    const a = (v) => {
      v.preventDefault(), v.stopImmediatePropagation();
    };
    window.addEventListener("click", a, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", a, { capture: !0 }), 300);
    const o = t.type === "pointerup" && (e.dy > 120 || e.v > 0.5), r = "translateY(" + Math.max(0, e.dy) + "px)";
    if (e.pair.style.transform = "", !o || We()) {
      o ? xl() : e.pair.animate([{ transform: r }, { transform: "none" }], { duration: 320, easing: Ee.spring });
      return;
    }
    const l = A;
    kt._closing = !0, kt.style.pointerEvents = "none", kt.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220, easing: Ee.exit, fill: "forwards" });
    const c = e.pair.animate([{ transform: r }, { transform: "translateY(calc(100% + 40px))" }], { duration: 220, easing: Ee.exit, fill: "forwards" });
    let f = !1;
    const u = () => {
      f || (f = !0, kt._closing = !1, kt.style.pointerEvents = "", kt.getAnimations().forEach((v) => v.cancel()), e.pair.getAnimations().forEach((v) => v.cancel()), A === l && xl());
    };
    c.finished.then(u, u), setTimeout(u, 300);
  };
  kt.addEventListener("pointerup", id), kt.addEventListener("pointercancel", id);
  function cl() {
    const t = kt.querySelector(".tfMorePair"), e = kt.querySelector(".tfMore");
    t == null || t.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - e.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", cl, { passive: !0 }), w && hr();
  let ao = [];
  const Pu = (t) => t === "favourites" || t.startsWith("summary:") || t.startsWith("group:");
  function Hu(t) {
    const e = (M, P = "") => '<div class="tfMoreHead">' + (A != null && A.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + bp + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + F(M) + "</div>" + P + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + wp + "</button></div>", a = (M, P) => '<div class="tfMoreNow"><div class="tfMoreState">' + F(M) + "</div></div>", o = Bu;
    if (t === "favourites") {
      const M = St(), P = new Set(M), _ = [{ name: "Starred", ids: M }, { name: "Home", ids: Vt.homeVacuums }, { name: "Security", ids: [...Vt.security.alarms, ...Vt.security.locks] }, ...Vt.rooms.map((j) => ({ name: j.name, ids: [...j.actions, ...j.plugs] }))].map((j, C) => C ? { ...j, ids: j.ids.filter((rt) => !P.has(rt)) } : j).filter((j) => j.ids.length);
      return [e("Favourites"), a(M.length ? M.length + " starred" : "None starred"), o(_, { star: !0 }, !0)];
    }
    const r = (M, { name: P = "", alert: _ = !1, plain: j = !1 } = {}) => {
      const C = j ? [] : M.filter((Bt) => cr.includes(Bt.split(".")[0])), rt = M.filter((Bt) => !C.includes(Bt)), Tt = (Bt) => Bt.startsWith("vacuum.") && zt(Bt).battery_level != null ? zt(Bt).battery_level + "%" : null;
      return '<div class="tfMoreGroup">' + (P ? '<div class="tfMoreGroupName">' + F(P) + "</div>" : "") + '<div class="tfMoreActions">' + C.map((Bt) => Xo(Bt, !0)).join("") + rt.map((Bt) => _t(Bt, { plain: j, alert: _, say: j ? Tt(Bt) : null })).join("") + "</div></div>";
    };
    if (t.startsWith("summary:")) {
      const M = Jt().find((C) => C.key === t.slice(8));
      if (!M) return null;
      const P = M.key === "light" ? (M.groups || []).flatMap((C) => C.ids) : [], _ = P.some((C) => {
        var rt;
        return ((rt = k[C]) == null ? void 0 : rt.state) === "on";
      }), j = P.length ? '<button class="primary" type="button" data-acts="' + _a(P.map((C) => ["light", _ ? "turn_off" : "turn_on", C])) + '">' + (_ ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [e(M.name), '<div class="tfMoreNowRow">' + a(M.value) + j + "</div>", ...(M.groups || []).map((C) => r(C.ids, { name: C.name === M.name ? "" : C.name, alert: C.alert, plain: M.plain }))];
    }
    if (t.startsWith("group:")) {
      const [, M, P] = t.split(":"), _ = Vt.rooms.find((rt) => rt.id === M), j = _ && Gn(_).find((rt) => rt.key === P);
      if (!j) return null;
      const C = j.acts ? '<button class="primary" type="button" data-acts="' + _a(j.acts) + '">' + (j.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [e(_.name + " " + j.label.toLowerCase()), '<div class="tfMoreNowRow">' + a(j.value) + C + "</div>", r(Ie(_, P))];
    }
    const l = t.split(".")[0];
    k[t];
    const c = cr.includes(l) || $r.includes(l) ? vo(t) : dl(t), f = ju(t), u = [...f ? f.pages.map((M) => ({ name: M.name, svg: M.svg, tabs: M.tabs, html: M.space + '<div class="tfMoreCtl"' + Ka(t).replace(" data-light", "") + ">" + M.rows.filter(Boolean).join("") + "</div>" })) : [{ name: "Control", svg: ca, html: Fu(t) + (l === "plant" ? Ku(t).join("") : "") + c.sections.filter(Boolean).join("") }], { name: "Info", svg: Zl, html: Gu(t) }];
    A && A.page == null && (A.page = 0), A && (A.pages = u.length);
    const v = (A == null ? void 0 : A.page) || 0, S = (A == null ? void 0 : A.mode) || "", x = u.length - 1, R = !!(f != null && f.infoButton), E = u.flatMap((M, P) => (R && P === x ? [] : M.tabs || [{ name: M.name, svg: M.svg }]).map((_) => ({ ..._, page: P }))), B = (M) => M.page === v && (M.mode == null || M.mode === S);
    return [
      Ou(t, c),
      '<div class="tfMorePages' + (f ? " tfMorePop" : "") + (S && v === 0 ? " tfMoreHold" : "") + '" data-more-pages>' + u.map((M) => '<section class="tfMorePage" aria-label="' + M.name + '" data-mode="' + S + '">' + M.html + "</section>").join("") + "</div>",
      // the pages' icons in place of their dots (Matt, 12 Nov): Control's sliders and Info's (i); a light's Colour its palette first
      (R ? '<div class="tfMoreFoot"><span class="tfMoreFootGap"></span>' : "") + (E.length ? '<div class="tfMoreDots tfMorePageIcons" role="tablist" aria-label="' + (R ? "Views" : "Pages") + '">' + E.map((M) => '<button type="button" role="tab" aria-selected="' + B(M) + '" aria-label="' + M.name + '" title="' + M.name + '" data-more-page="' + M.page + '"' + (M.mode != null ? ' data-more-mode="' + M.mode + '"' : "") + (B(M) ? "" : ' tabindex="-1"') + ">" + M.svg + "</button>").join("") + "</div>" : "") + (R ? '<button class="tfMoreInfoBtn" type="button" aria-label="Info" title="Info" aria-pressed="' + (v === x) + '" data-more-page="' + x + '" data-more-toggle>' + Zl + "</button></div>" : "")
    ];
  }
  const Nu = (t, e) => {
    const a = t.split(".")[0], o = k[t], r = o.attributes;
    if (a === "light") return He(t);
    const l = a === "climate" ? Wt(r.hvac_action || o.state) : a === "humidifier" ? Wt(r.action || o.state) : a === "water_heater" ? Wt(r.operation_mode || o.state) : a === "fan" && o.state === "on" && r.percentage != null ? r.percentage + "%" : (a === "valve" || a === "cover") && r.current_position != null && o.state !== "closed" ? r.current_position + "%" : He(t);
    return [e, l].filter(Boolean).join(" · ");
  };
  function Ou(t, e, a) {
    var c, f, u, v, S;
    const o = (c = Vt.areaOf) == null ? void 0 : c.call(Vt, t), r = o && (((f = Vt.rooms.find((x) => x.id === o)) == null ? void 0 : f.name) || ((S = (v = (u = d()) == null ? void 0 : u.areas) == null ? void 0 : v[o]) == null ? void 0 : S.name)) || "", l = e.button ? Ko(t, e) : '<div class="tfIcon"' + he(t, e.icon) + "></div>";
    return '<div class="tfMoreHead tfMoreTileHead' + (e.on ? " on" : "") + '"' + (e.tone ? ' data-tone="' + e.tone + '"' : "") + Ka(t) + ">" + (A != null && A.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + bp + "</button>" : "") + l + '<div class="tfName"><span class="activityRowName" id="tfMoreTitle">' + F(ht(t)) + '</span><span class="activityRowMeta">' + F(Nu(t, r)) + '</span></div><button class="tfBack" type="button" data-more-close aria-label="Close">' + wp + "</button></div>";
  }
  const Iu = ["lock", "alarm_control_panel", "switch", "input_boolean", "fan", "valve", "media_player", "automation", "script", "scene", "button"];
  function dl(t) {
    var r;
    const e = t.split(".")[0], a = ((r = k[t]) == null ? void 0 : r.state) === "on", o = $r.includes(e) ? { act: Et(e, "toggle", t), label: "Turn " + ht(t) + (a ? " off" : " on") } : e === "scene" || e === "script" ? { act: Et(e, "turn_on", t), label: "Run " + ht(t) } : null;
    return { sections: [], on: a, button: o, icon: Sa(t) };
  }
  function Fu(t) {
    const e = t.split(".")[0];
    if (Iu.includes(e) || e === "light" && !ma(t)) {
      const r = cr.includes(e) ? vo(t) : dl(t);
      return r != null && r.button ? '<div class="tfMoreSpace tfMoreSwitch' + (r.on ? " on" : "") + '"' + (r.tone ? ' data-tone="' + r.tone + '"' : "") + Ka(t) + ">" + Ko(t, r) + "</div>" : "";
    }
    if (e === "cover") return '<div class="tfMoreSpace tfMoreFill"><div data-cover-art="' + F(t) + '"></div></div>';
    if (e === "light" && ma(t)) return '<div class="tfMoreSpace tfMoreFill"><div class="tfDacPad" data-dac="more:' + F(t) + '"></div></div>';
    const { big: a, lines: o } = zu(t);
    return '<div class="tfMoreSpace"><div class="tfMoreBig' + (Ze("pos", t) != null ? " live" : "") + '"><span class="tfMoreNum">' + F(a[0]) + "</span>" + (a[1] ? '<span class="tfMoreUnit">' + F(a[1]) + "</span>" : "") + '</div><div class="tfMoreFacts">' + o.map(([r, l]) => '<div class="tfMoreFact"><span>' + F(r) + "</span><span>" + F(l) + "</span></div>").join("") + "</div></div>";
  }
  const qu = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z"/></svg>', Wu = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="5" width="14" height="14" rx="4"/></svg>', Vu = ["light", "climate", "fan", "humidifier", "water_heater", "alarm_control_panel", "cover", "lock", "valve", "switch", "input_boolean"], oo = (t, e) => '<div class="tfMoreField"><div class="tfMoreLabel">' + F(t) + "</div>" + e + "</div>", Ea = (t, e) => ha("tfSeg", t, e), pl = (t, e, a, o, r, l) => '<div class="tfBar tfPopBar ' + t + '" role="slider" tabindex="0" aria-label="' + F(o) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(a) + '" aria-valuetext="' + F(r) + '" data-drag="' + F(t + "|" + e) + '"><i style="width:' + Math.max(0, Math.min(100, a)) + '%"><output class="tfBarVal">' + F(r) + "</output></i>" + (l ? '<span class="tfBarIcon"' + he("", l, o) + "></span>" : "") + "</div>", er = (t, e) => '<div class="tfMoreSpace tfMoreSwitch' + (e.on ? " on" : "") + '"' + (e.tone ? ' data-tone="' + e.tone + '"' : "") + Ka(t) + ">" + Ko(t, e) + "</div>", fl = (t, e, a) => '<div class="tfMoreSpace"><div class="tfMoreBig"><span class="tfMoreNum">' + F(t) + "</span>" + (e ? '<span class="tfMoreUnit">' + F(e) + "</span>" : "") + '</div><div class="tfMoreFacts">' + a.filter(([, o]) => o != null && o !== "").map(([o, r]) => '<div class="tfMoreFact"><span>' + F(o) + "</span><span>" + F(r) + "</span></div>").join("") + "</div></div>", sd = () => '<input class="tfMoreCode" type="password" inputmode="numeric" autocomplete="off" placeholder="Code" aria-label="Code" data-code value="' + F((A == null ? void 0 : A.code) || "") + '">', Oi = (t, e, a, o, r) => ({ label: o, pressed: r, html: null, coded: [t, e, a].join("|") }), ld = (t, e) => '<div class="tfSeg" role="group" aria-label="' + F(t) + '">' + e.map((a) => '<button type="button" data-coded="' + F(a.coded) + '" aria-pressed="' + !!a.pressed + '">' + F(a.label) + "</button>").join("") + "</div>", cd = (t, e, a) => Ea(ht(t), [{ label: "Off", act: Et(e, "turn_off", t), pressed: !a }, { label: "On", act: Et(e, "turn_on", t), pressed: a }]);
  function ju(t) {
    var l, c, f;
    const e = t.split(".")[0], a = k[t], o = a.attributes;
    if (!Vu.includes(e)) return null;
    const r = cr.includes(e) || $r.includes(e) ? vo(t) : dl(t);
    if (e === "light") {
      const u = a.state === "on", v = br(t), [S, x] = In(t), R = Ze("bright", t, u ? fo(a) : 0), E = Ze("ctf", t, u && o.color_mode === "color_temp" ? o.color_temp_kelvin : null), B = Ze("huev", t, u && zo.includes(o.color_mode) && o.hs_color ? o.hs_color[0] : null), M = v.includes("color_temp"), P = v.some((ve) => zo.includes(ve)), _ = ma(t), j = (ve, Te, Ne, Fe) => '<div class="tfBar tfVBar ' + ve + '" data-axis="y" role="slider" tabindex="0" aria-orientation="vertical" aria-label="' + F(ht(t) + " " + Te.toLowerCase()) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(Ne) + '" data-drag="' + ve + "|" + F(t) + '">' + Fe + "</div>", C = (ve, Te, Ne = "") => '<div class="tfVCol' + Ne + '">' + Te + "</div>", rt = C("Brightness", j("bright", "Brightness", R, '<i style="height:' + R + '%"></i><span class="tfBarIcon"' + he("", "mdi:white-balance-sunny", "Brightness") + "></span>")), Tt = E == null ? null : (x - E) / (x - S), Bt = M ? C("Warmth", j("ctf", "Warmth", Tt == null ? 0 : Tt * 100, Tt == null ? "" : '<b style="top:' + Math.round((1 - Tt) * 1e3) / 10 + '%"></b>'), " tfVWarm") : "", Gt = P ? C("Colour", j("huev", "Colour", B == null ? 0 : (1 - B / 360) * 100, B == null ? "" : '<b style="top:' + Math.round(B / 360 * 1e3) / 10 + '%"></b>'), " tfVColour") : "", Ut = '<div class="tfVCols">' + rt + (Bt || Gt ? '<div class="tfVSwap">' + Bt + Gt + "</div>" : "") + "</div>", Ct = _ ? '<div class="tfLightPad"><div class="tfDacPad" data-dac="more:' + F(t) + '"></div></div>' : "", Dt = [P && { name: "Colour", svg: qu, mode: "colour" }, _ && { name: "Dual Axis Controller", svg: Wu, mode: "dac" }, { name: "Sliders", svg: ca, mode: "" }].filter(Boolean);
      return { infoButton: !0, pages: [{ name: "Control", svg: ca, space: '<div class="tfMoreSpace tfLightSpace">' + Ut + Ct + "</div>", rows: [], tabs: Dt.length > 1 ? Dt : [] }] };
    }
    if (e === "climate") {
      const u = o.target_temp_step || 0.5, v = Number(o.temperature), S = Number(o.target_temp_low), x = Number(o.target_temp_high), R = (P) => Et("climate", "set_temperature", t, P), E = (P, _, j, C, rt) => (_ == null ? void 0 : _.length) && oo(P, Ea(P, _.map((Tt) => ({ label: Wt(Tt), act: Et("climate", C, t, { [rt]: Tt }), pressed: (j === "state" ? a.state : o[j]) === Tt })))), B = Number.isFinite(S) && Number.isFinite(x) && oo("Range", '<div class="tfMoreRange">' + Je("Low", Re(S) + " °C", R({ target_temp_low: S - u, target_temp_high: x }), R({ target_temp_low: S + u, target_temp_high: x })) + Je("High", Re(x) + " °C", R({ target_temp_low: S, target_temp_high: x - u }), R({ target_temp_low: S, target_temp_high: x + u })) + "</div>"), M = Number(o.humidity);
      return { pages: [{
        name: "Control",
        svg: ca,
        space: fl(Re(o.current_temperature), "°C", [["Target", Number.isFinite(v) ? Re(v) + " °C" : null], ["Humidity", o.current_humidity != null ? o.current_humidity + "%" : null], ["Action", o.hvac_action && Wt(o.hvac_action)]]),
        rows: [
          Number.isFinite(v) && Je("Target temperature", Re(v) + " °C", R({ temperature: v - u }), R({ temperature: v + u })),
          B,
          E("Mode", o.hvac_modes, "state", "set_hvac_mode", "hvac_mode"),
          E("Fan", o.fan_modes, "fan_mode", "set_fan_mode", "fan_mode"),
          E("Swing", o.swing_modes, "swing_mode", "set_swing_mode", "swing_mode"),
          E("Preset", o.preset_modes, "preset_mode", "set_preset_mode", "preset_mode"),
          Number.isFinite(M) && o.min_humidity != null && oo("Humidity", Je("Target humidity", M + "%", Et("climate", "set_humidity", t, { humidity: M - 1 }), Et("climate", "set_humidity", t, { humidity: M + 1 })))
        ]
      }] };
    }
    if (e === "fan") {
      const u = a.state === "on", v = Ze("fan", t, u && Number(o.percentage) || 0), S = o.percentage != null;
      return { pages: [{ name: "Control", svg: ca, space: er(t, r), rows: S ? [
        pl("fan", t, v, ht(t) + " speed", v + "%", "mdi:fan"),
        o.oscillating != null && oo("Oscillate", Ea("Oscillate", [{ label: "Off", act: Et("fan", "oscillate", t, { oscillating: !1 }), pressed: !o.oscillating }, { label: "On", act: Et("fan", "oscillate", t, { oscillating: !0 }), pressed: !!o.oscillating }])),
        o.direction && oo("Direction", Ea("Direction", [["forward", "Forward"], ["reverse", "Reverse"]].map(([x, R]) => ({ label: R, act: Et("fan", "set_direction", t, { direction: x }), pressed: o.direction === x })))),
        ((l = o.preset_modes) == null ? void 0 : l.length) && oo("Preset", Ea("Preset", o.preset_modes.map((x) => ({ label: Wt(x), act: Et("fan", "set_preset_mode", t, { preset_mode: x }), pressed: o.preset_mode === x }))))
      ] : [cd(t, "fan", u)] }] };
    }
    if (e === "humidifier") {
      const u = Number(o.humidity);
      return { pages: [{ name: "Control", svg: ca, space: fl(String(o.current_humidity), "%", [["Target", Number.isFinite(u) ? u + "%" : null], ["Action", o.action && Wt(o.action)]]), rows: [
        Number.isFinite(u) && Je("Target humidity", u + "%", Et("humidifier", "set_humidity", t, { humidity: u - 1 }), Et("humidifier", "set_humidity", t, { humidity: u + 1 })),
        ((c = o.available_modes) == null ? void 0 : c.length) && oo("Mode", Ea("Mode", o.available_modes.map((v) => ({ label: Wt(v), act: Et("humidifier", "set_mode", t, { mode: v }), pressed: o.mode === v }))))
      ] }] };
    }
    if (e === "water_heater") {
      const u = Number(o.temperature), v = o.target_temp_step || 1;
      return { pages: [{ name: "Control", svg: ca, space: fl(Re(o.current_temperature).replace(/\.0$/, ""), "°C", [["Target", Number.isFinite(u) ? String(u).replace(/\.0$/, "") + " °C" : null], ["Mode", Wt(o.operation_mode || a.state)]]), rows: [
        Number.isFinite(u) && Je("Target temperature", u + " °C", Et("water_heater", "set_temperature", t, { temperature: u - v }), Et("water_heater", "set_temperature", t, { temperature: u + v })),
        ((f = o.operation_list) == null ? void 0 : f.length) && oo("Mode", Ea("Mode", o.operation_list.map((S) => ({ label: Wt(S), act: Et("water_heater", "set_operation_mode", t, { operation_mode: S }), pressed: (o.operation_mode || a.state) === S })))),
        o.away_mode != null && oo("Away", Ea("Away", [{ label: "Off", act: Et("water_heater", "set_away_mode", t, { away_mode: !1 }), pressed: o.away_mode !== "on" }, { label: "On", act: Et("water_heater", "set_away_mode", t, { away_mode: !0 }), pressed: o.away_mode === "on" }]))
      ] }] };
    }
    if (e === "alarm_control_panel") {
      const u = [...Hp, ["armed_vacation", "Vacation", "alarm_arm_vacation", 32]].filter(([, , , x]) => !x || ue(t, x)), v = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "clear", "0", "back"], S = '<div class="tfMoreSpace tfMoreKeypad">' + sd() + '<div class="tfKeypad">' + v.map((x) => '<button type="button" data-key="' + x + '"' + (x === "back" ? ' aria-label="Delete"' : "") + ">" + (x === "clear" ? "Clear" : x === "back" ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22,3H7C6.31,3 5.77,3.35 5.41,3.88L0,12L5.41,20.11C5.77,20.64 6.31,21 7,21H22A2,2 0 0,0 24,19V5A2,2 0 0,0 22,3M22,19H7.07L2.4,12L7.06,5H22V19M10.41,17L14,13.41L17.59,17L19,15.59L15.41,12L19,8.41L17.59,7L14,10.59L10.41,7L9,8.41L12.59,12L9,15.59L10.41,17Z"/></svg>' : x) + "</button>").join("") + "</div></div>";
      return { pages: [{ name: "Control", svg: ca, space: S, rows: [ld(ht(t), u.map(([x, R, E]) => Oi("alarm_control_panel", E, t, R, a.state === x)))] }] };
    }
    if (e === "cover") {
      if (o.current_position == null) return { pages: [{ name: "Control", svg: ca, space: er(t, r), rows: [Ea(ht(t), [{ label: "Open", act: Et("cover", "open_cover", t), pressed: a.state !== "closed" }, { label: "Close", act: Et("cover", "close_cover", t), pressed: a.state === "closed" }])] }] };
      const u = a.state === "opening" || a.state === "closing", v = cn(t), S = xr(t);
      return { pages: [{ name: "Control", svg: ca, space: '<div class="tfMoreSpace tfMoreArt"><div data-cover-art="' + F(t) + '"></div></div>', rows: [
        ue(t, Ul) && Tr(t, v),
        S != null && oo("Tilt", pl("tiltp", t, Ze("tiltp", t, S), ht(t) + " tilt", Math.round(Ze("tiltp", t, S)) + "%")),
        Ea(ht(t), [ue(t, Sp) && { label: "Open", act: Et("cover", "open_cover", t), disabled: v >= 100 && !u }, ue(t, Cp) && { label: "Stop", act: Et("cover", "stop_cover", t) }, ue(t, _p) && { label: "Close", act: Et("cover", "close_cover", t), disabled: v <= 0 && !u }])
      ] }] };
    }
    if (e === "lock")
      return { pages: [{ name: "Control", svg: ca, space: er(t, r), rows: [
        sd(),
        ld(ht(t), [Oi("lock", "lock", t, "Lock", a.state === "locked"), Oi("lock", "unlock", t, "Unlock", a.state === "unlocked"), ue(t, Pp) && Oi("lock", "open", t, "Open", a.state === "open")].filter(Boolean))
      ] }] };
    if (e === "valve") {
      const u = a.state === "open";
      if (o.current_position == null) return { pages: [{ name: "Control", svg: ca, space: er(t, r), rows: [Ea(ht(t), [{ label: "Open", act: Et("valve", "open_valve", t), pressed: u }, { label: "Close", act: Et("valve", "close_valve", t), pressed: !u }])] }] };
      const v = Ze("valve", t, Number(o.current_position) || 0);
      return { pages: [{ name: "Control", svg: ca, space: er(t, r), rows: [
        pl("valve", t, v, ht(t) + " position", Math.round(v) + "%", "mdi:valve"),
        Ea(ht(t), [{ label: "Open", act: Et("valve", "open_valve", t) }, ue(t, 8) && { label: "Stop", act: Et("valve", "stop_valve", t) }, { label: "Close", act: Et("valve", "close_valve", t) }])
      ] }] };
    }
    return { pages: [{ name: "Control", svg: ca, space: er(t, r), rows: [cd(t, e, a.state === "on")] }] };
  }
  function zu(t) {
    var S;
    const e = k[t], a = zt(t), o = t.split(".")[0], r = (((S = tr[o]) == null ? void 0 : S.call(tr, a)) || []).filter(([, x]) => x != null && x !== ""), l = (x) => {
      const R = r.findIndex(([E]) => E === x);
      return R < 0 ? null : r.splice(R, 1)[0][1];
    }, c = (x) => {
      const R = String(x).match(/^(-?[\d.,]+)\s*(.*)$/);
      return R ? [R[1], R[2]] : [String(x), ""];
    }, f = () => [Wt(String(e.state).replace(/_/g, " ")), ""];
    let u;
    o === "light" ? (l("Brightness"), u = e.state === "on" && Xa(t) ? [String(fo(e)), "%"] : f()) : o === "climate" ? u = c(l("Current temperature") || Re(a.current_temperature) + " °C") : o === "cover" ? (l("Position"), u = a.current_position != null ? [String(Ma(t)), "%"] : f()) : o === "humidifier" ? u = c(l("Current humidity") || e.state) : o === "vacuum" ? u = c(l("Battery") || e.state) : o === "plant" ? u = c(l("Moisture") || e.state) : ["media_player", "lock", "alarm_control_panel", "valve"].includes(o) ? u = f() : u = c(e.state + (a.unit_of_measurement ? " " + a.unit_of_measurement : ""));
    const v = r.length ? r.slice(0, 4) : [["State", He(t)]];
    return { big: u, lines: v };
  }
  function Gu(t) {
    var v, S, x, R, E, B, M;
    const e = k[t], a = d(), o = (v = a == null ? void 0 : a.entities) == null ? void 0 : v[t], r = o != null && o.device_id ? (S = a == null ? void 0 : a.devices) == null ? void 0 : S[o.device_id] : null, l = '<div class="tfMoreGraph"><div class="tfMoreGroupName">Last 24 hours</div><svg class="tfGraph tfDay" data-day="' + F(t) + '" role="img" aria-label="' + F(ht(t)) + ', last 24 hours"></svg></div>', c = (x = Vt.areaOf) == null ? void 0 : x.call(Vt, t), f = c && (((R = Vt.rooms.find((P) => P.id === c)) == null ? void 0 : R.name) || ((B = (E = a == null ? void 0 : a.areas) == null ? void 0 : E[c]) == null ? void 0 : B.name)) || "", u = [
      ...((M = tr[t.split(".")[0]]) == null ? void 0 : M.call(tr, zt(t))) || [],
      ["Changed", e.last_changed && Fn(Date.parse(e.last_changed))],
      ["Area", f],
      ["Device", r && (r.name_by_user || r.name)],
      ["Integration", (o == null ? void 0 : o.platform) && Wt(o.platform.replace(/_/g, " "))],
      ["Entity", t]
    ].filter(([, P]) => P != null && P !== "");
    return l + '<div class="tfMoreRows">' + u.map(([P, _]) => '<div class="tfMoreRow"><span>' + F(P) + "</span><span>" + F(_) + "</span></div>").join("") + "</div>" + Eu(t) + (r ? '<button class="tfDetailsBtn tfMoreLink" type="button" data-path="/config/devices/device/' + F(o.device_id) + '"><span>Device page</span>' + Kl + "</button>" : "");
  }
  const Uu = () => "";
  let ul = "";
  function hl(t) {
    var e;
    A && (A.details = t, ar(), (e = kt.querySelector(t ? "[data-details-close]" : "[data-details]")) == null || e.focus({ preventScroll: !0 }));
  }
  const Ii = (t) => {
    const e = k[t], a = Ma(t), o = cn(t);
    return { kind: zl(e), name: ht(t), text: He(t), pos: a, target: Math.abs(o - a) > 0.5 ? o : null, moving: e.state === "opening" || e.state === "closing", tilt: xr(t) ?? 100, canSet: ue(t, Ul) };
  };
  function ml(t) {
    t.querySelectorAll("[data-cover-art]").forEach((e) => {
      const a = e.dataset.coverArt, o = e.dataset.artKey || "more:" + a;
      let r = $e.get(o);
      r || (r = H0({ onMove: (l) => jr(a, l), onSet: (l) => {
        jr(a, l), zr("pos", a);
      } }), r.coverId = a, $e.set(o, r)), e.replaceWith(r.el), r.update(Ii(a));
    });
  }
  const dd = (t) => [...$e.values()].filter((e) => e.coverId === t), gl = () => $e.forEach((t) => {
    k[t.coverId] && t.update(Ii(t.coverId));
  }), pd = () => {
    $e.forEach((t, e) => {
      t.el.isConnected || (t.destroy(), $e.delete(e));
    }), gl();
  };
  function ar() {
    var l, c;
    if (!A || !(Pu(A.id) || k[A.id])) {
      kt.hidden = !0;
      return;
    }
    if (qt().some((f) => f.endsWith("|" + A.id))) {
      ie = !0, gl();
      return;
    }
    const t = Hu(A.id), e = kt.querySelector(".tfMore");
    if (!t) {
      Wi();
      return;
    }
    const a = nd(kt), o = Uu(A.id), r = A.frame ? A.frame.wide : A.id.startsWith("summary:") || A.id.startsWith("group:");
    if (kt.hidden || !e || t.length !== ao.length || e.classList.contains("wide") !== r) {
      const f = vl ? A.scroll || 0 : !kt.hidden && e ? e.scrollTop : 0;
      if (kt.innerHTML = '<div class="tfMorePair' + (kt.hidden ? "" : " still") + '" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (r ? " wide" : "") + '"' + (A.frame ? ' style="height:' + A.frame.h + 'px"' : "") + ' tabindex="-1">' + t.join("") + "</section></div>", ul = o, kt.classList.toggle("wide", r), kt.hidden = !1, cl(), ml(kt), wo(kt), ho(kt), kt.querySelectorAll("[data-day]").forEach((u) => bd(u.dataset.day, u, A.at)), hd(kt), f && (kt.querySelector(".tfMore").scrollTop = f), fd(), il(kt, a), !kt.contains(n.activeElement)) {
        const u = kt.querySelector("[data-more-close]");
        (l = u != null && u.offsetParent ? u : kt.querySelector(".tfMore")) == null || l.focus({ preventScroll: !0 });
      }
    } else {
      if (t.forEach((f, u) => {
        var R, E;
        if (f === ao[u] || f.includes("data-cover-art") || e.children[u].contains((E = (R = n.activeElement) == null ? void 0 : R.matches) != null && E.call(R, "input,select") ? n.activeElement : null)) return;
        if (qt().some((B) => e.children[u].querySelector('[data-drag="' + CSS.escape(B) + '"]'))) {
          ie = !0;
          return;
        }
        const v = document.createElement("div");
        v.innerHTML = f;
        const S = [...e.children[u].querySelectorAll(".tfMoreCtl,.tfMorePage")].map((B) => B.scrollTop), x = sl(e.children[u], v.firstElementChild);
        x.querySelectorAll(".tfMoreCtl,.tfMorePage").forEach((B, M) => {
          S[M] && (B.scrollTop = S[M]);
        }), ho(x), hd(x), wo(x);
      }), o !== ul) {
        const f = kt.querySelector(".tfMoreSideBody");
        f && (f.innerHTML = o), ul = o;
      }
      e.querySelectorAll("[data-day]").forEach((f) => {
        f.innerHTML || bd(f.dataset.day, f, A.at);
      }), fd(), kt.contains(n.activeElement) || il(kt, a);
    }
    (c = kt.querySelector(".tfMorePair")) == null || c.classList.toggle("details", !!(A.details && o)), ao = t, gl();
  }
  function fd() {
    const t = kt.querySelector("[data-more-pages]");
    !t || !A || (t.scrollTo({ left: (A.page || 0) * t.clientWidth, behavior: "instant" }), wl(), bl(t));
  }
  function bl(t) {
    const e = t.children[(A == null ? void 0 : A.page) || 0];
    e && (t.style.height = e.scrollHeight + "px");
  }
  function wl() {
    var e;
    const t = (A == null ? void 0 : A.page) || 0;
    kt.querySelectorAll("[data-more-page]").forEach((a) => {
      const o = Number(a.dataset.morePage) === t && (a.dataset.moreMode == null || a.dataset.moreMode === (A.mode || ""));
      if (a.hasAttribute("data-more-toggle")) {
        a.setAttribute("aria-pressed", String(o));
        return;
      }
      a.setAttribute("aria-selected", String(o)), a.tabIndex = o ? 0 : -1;
    }), (e = kt.querySelector("[data-more-pages]")) == null || e.classList.toggle("tfMoreHold", !!A.mode && t === 0);
  }
  function Yu(t, e) {
    var o, r;
    const a = kt.querySelector("[data-more-pages]");
    !a || !A || (A.page = Math.max(0, Math.min((A.pages || 2) - 1, t)), a.scrollTo({ left: A.page * a.clientWidth, behavior: (o = window.matchMedia) != null && o.call(window, "(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" }), wl(), bl(a), e && ((r = kt.querySelector('.tfMoreDots [aria-selected="true"]')) == null || r.focus({ preventScroll: !0 })));
  }
  function Fi(t, e, a) {
    A && (e != null && e !== (A.mode || "") && (A.mode = e, kt.querySelectorAll(".tfMorePage").forEach((o) => {
      o.dataset.mode = e;
    })), Yu(t, a));
  }
  let or = null;
  kt.addEventListener("touchstart", (t) => {
    var a, o, r, l;
    const e = t.touches[0];
    or = (o = (a = t.target).closest) != null && o.call(a, "[data-more-pages]") && !((l = (r = t.target).closest) != null && l.call(r, "[data-drag],[data-blocks],.tfDacPad,[data-cover-art]")) && t.touches.length === 1 ? { x: e.clientX, y: e.clientY } : null;
  }, { passive: !0 }), kt.addEventListener("touchend", (t) => {
    if (!or || !A || (A.page || 0) !== 0 || !kt.querySelector("[data-more-mode]")) {
      or = null;
      return;
    }
    const e = t.changedTouches[0], a = e.clientX - or.x, o = e.clientY - or.y;
    if (or = null, Math.abs(a) < 40 || Math.abs(a) < Math.abs(o) * 1.5) return;
    const r = [...kt.querySelectorAll(".tfMoreDots [data-more-mode]")].map((c) => c.dataset.moreMode), l = r.indexOf(A.mode || "");
    a > 0 && l > 0 ? Fi(0, r[l - 1]) : a < 0 && A.mode && l < r.length - 1 && Fi(0, r[l + 1]);
  }, { passive: !0 });
  let ud = 0;
  kt.addEventListener("scroll", (t) => {
    var a;
    const e = t.target;
    !((a = e.matches) != null && a.call(e, "[data-more-pages]")) || !A || (clearTimeout(ud), ud = setTimeout(() => {
      if (!A) return;
      const o = Math.round(e.scrollLeft / Math.max(1, e.clientWidth));
      o !== (A.page || 0) && (A.page = o, wl(), bl(e));
    }, 80));
  }, !0), kt.addEventListener("input", (t) => {
    var e, a;
    (a = (e = t.target).matches) != null && a.call(e, "[data-code]") && A && (A.code = t.target.value);
  }), kt.addEventListener("click", (t) => {
    const e = t.target.closest("[data-key]"), a = t.target.closest("[data-coded]");
    if (!A || !(e || a)) return;
    const o = kt.querySelector("[data-code]");
    if (e) {
      const u = e.dataset.key, v = A.code || "";
      A.code = u === "clear" ? "" : u === "back" ? v.slice(0, -1) : (v + u).slice(0, 12), o && (o.value = A.code);
      return;
    }
    const [r, l, c] = a.dataset.coded.split("|"), f = A.code;
    A.code = "", o && (o.value = ""), Vr(r, l, c, f ? { code: f } : null).catch(() => {
    });
  }), setInterval(() => {
    A && ar();
  }, 15 * 1e3);
  function qi(t, e) {
    var r, l;
    const a = !!(A && e && kt.contains(e)), o = a && kt.querySelector(".tfMore");
    if (a && (A.scroll = o.scrollTop), a && !A.under) {
      const c = kt.querySelector(".tfMorePair"), f = { more: A, parts: ao, opener: e };
      c.classList.add("still"), c.style.transform = "", c.inert = !0, Ga.innerHTML = "", Ga.appendChild(c), Ga.classList.toggle("wide", kt.classList.contains("wide")), Ga.hidden = !1, kt.hidden = !0, kt.innerHTML = "", A = { id: t, opener: e, back: null, frame: null, under: f, at: Number((r = e == null ? void 0 : e.dataset) == null ? void 0 : r.at) || null }, yl();
      return;
    }
    A = { id: t, opener: a ? A.opener : e, back: a ? A : null, frame: a ? A.frame || { wide: o.classList.contains("wide"), h: o.offsetHeight } : null, under: a ? A.under : null, at: Number((l = e == null ? void 0 : e.dataset) == null ? void 0 : l.at) || null }, yl();
  }
  let vl = !1;
  function yl() {
    ao = [], vl = !kt.hidden, $e.forEach((t, e) => {
      e !== A.id && kt.contains(t.el) && (t.destroy(), $e.delete(e));
    }), ar(), vl = !1;
  }
  function Wi() {
    if (!A) return;
    const t = A;
    ym(kt, () => {
      A === t && xl();
    });
  }
  function xl() {
    var o, r, l, c, f, u, v, S;
    const t = A == null ? void 0 : A.opener, e = A == null ? void 0 : A.under;
    A = null, $e.forEach((x, R) => {
      kt.contains(x.el) && (x.destroy(), $e.delete(R));
    }), Ye.forEach((x, R) => {
      /^more2?:/.test(R) && Ye.delete(R);
    }), kt.hidden = !0, kt.innerHTML = "";
    const a = { preventScroll: !0 };
    if (e) {
      const x = Ga.firstElementChild;
      A = e.more, ao = e.parts, x && (x.inert = !1, kt.appendChild(x)), kt.classList.toggle("wide", Ga.classList.contains("wide")), Ga.hidden = !0, Ga.innerHTML = "", kt.hidden = !1;
      const R = kt.querySelector(".tfMore");
      R && (R.scrollTop = A.scroll || 0), ar(), (r = (o = e.opener) != null && o.isConnected ? e.opener : kt.querySelector("[data-more-close]")) == null || r.focus(a);
      return;
    }
    t != null && t.isConnected ? t.focus(a) : (l = t == null ? void 0 : t.dataset) != null && l.more ? (c = H.querySelector('[data-more="' + CSS.escape(t.dataset.more) + '"]')) == null || c.focus(a) : (f = t == null ? void 0 : t.dataset) != null && f.summary ? (u = H.querySelector('[data-summary="' + CSS.escape(t.dataset.summary) + '"]')) == null || u.focus(a) : (v = t == null ? void 0 : t.hasAttribute) != null && v.call(t, "data-favs-edit") && ((S = H.querySelector("[data-favs-edit]")) == null || S.focus(a));
  }
  const Zu = { moisture: "moisture", light: "light", brightness: "light", temperature: "temperature", fertility: "fertility", conductivity: "fertility" };
  function Ku(t) {
    const e = String(zt(t).problem || ""), a = "sensor." + t.split(".")[1] + "_";
    return e === "none" ? [] : e.split(",").map((o) => o.trim().split(" ")).map(([o, r]) => {
      const l = Zu[o], c = a + l;
      if (!l || !k[c] || !Bn[l]) return "";
      const f = zt(c).unit_of_measurement || "", [u, v] = Bn[l], S = r === "low";
      return '<div class="tfMoreGroup tfPlantProblem"><div class="tfMoreGroupName">' + F(ht(c)) + '</div><svg class="tfGraph tfPlantGraph" data-plant-graph="' + F(c) + '" data-guide="' + (S ? u : v) + '" data-guide-word="' + F("Wants " + (S ? "" : "up to ") + (S ? u : v).toLocaleString() + (f === "%" ? "%" : f ? " " + f : "") + (S ? " or more" : "")) + '" role="img" aria-label="' + F(ht(c)) + ', last 24 hours"></svg></div>';
    }).filter(Boolean);
  }
  const hd = (t) => t.querySelectorAll("[data-plant-graph]").forEach((e) => vd(e.dataset.plantGraph, e, { guide: Number(e.dataset.guide), guideWord: e.dataset.guideWord }).then(() => fc(e)));
  function kl(t, e, a, o = {}) {
    const r = e.map((P) => P[1]).concat(o.guide != null ? [o.guide] : []), l = o.zero ? 0 : Math.min(...r), c = Math.max(...r), f = Math.max(120, t.clientWidth || 260), u = Math.max(60, t.clientHeight || 130), v = 8, S = u - 20, x = Date.now() - 24 * 3600 * 1e3, R = 24 * 3600 * 1e3, E = (P) => Math.max(0, Math.min(f, (P - x) / R * f)), B = (P) => c === l ? (v + S) / 2 : S - (P - l) / (c - l) * (S - v);
    let M = "M" + E(e[0][0]).toFixed(1) + " " + B(e[0][1]).toFixed(1);
    if (e.length > 2) M = ef(e.map((P) => [E(P[0]), B(P[1])]));
    else for (let P = 1; P < e.length; P++) M += o.smooth ? "L" + E(e[P][0]).toFixed(1) + " " + B(e[P][1]).toFixed(1) : "H" + E(e[P][0]).toFixed(1) + "V" + B(e[P][1]).toFixed(1);
    t.setAttribute("viewBox", "0 0 " + f + " " + u), t.setAttribute("aria-label", a), t.innerHTML = af(f, v, S) + '<path d="' + M + "V" + S + "H" + E(e[0][0]).toFixed(1) + 'Z" fill="' + (o.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + M + '" fill="none" stroke="' + (o.colour || "var(--primary)") + '" stroke-width="' + De.graphs.weight + '" stroke-linejoin="round" stroke-linecap="round"/><text x="0" y="' + (u - 4) + '">24 h ago</text><text x="' + f + '" y="' + (u - 4) + '" text-anchor="end">Now</text>' + (o.guide != null ? '<line class="tfGuide" x1="0" x2="' + f + '" y1="' + B(o.guide).toFixed(1) + '" y2="' + B(o.guide).toFixed(1) + '"/><text class="tfGuideWord" x="' + f + '" y="' + (B(o.guide) < 20 ? B(o.guide) + 14 : B(o.guide) - 5).toFixed(1) + '" text-anchor="end">' + F(o.guideWord || "") + "</text>" : "");
  }
  const md = { lock: ["unlocked", "open", "opening"], cover: ["open", "opening", "closing"], valve: ["open", "opening", "closing"], vacuum: ["cleaning", "returning"] }, Xu = (t, e) => {
    const a = t.split(".")[0];
    return md[a] ? md[a].includes(e) : a === "alarm_control_panel" || a === "climate" || a === "media_player" ? !["off", "standby", "disarmed", "unavailable", "unknown"].includes(e) : e === "on";
  }, $u = (t) => {
    const e = t.split(".")[0], a = zt(t).device_class;
    return e === "binary_sensor" ? { moisture: "Wet", smoke: "Smoke", gas: "Gas", carbon_monoxide: "Carbon monoxide", safety: "Unsafe" }[a] || (ns.includes(a) ? "Open" : "On") : { lock: "Unlocked", cover: "Open", valve: "Open", vacuum: "Cleaning", alarm_control_panel: "Armed" }[e] || "On";
  }, gd = /* @__PURE__ */ new Map();
  let Ju = 0;
  async function Qu(t) {
    var r;
    let e = gd.get(t);
    if (!e || Date.now() - e.at > 60 * 1e3) {
      let l = [];
      if (Ya(t) && Number.isFinite(Number((r = k[t]) == null ? void 0 : r.state))) l = wd(t).map(([c, f]) => [c, String(f)]);
      else try {
        const c = await D({ type: "history/history_during_period", start_time: new Date(Date.now() - 864e5).toISOString(), entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        l = ((c == null ? void 0 : c[t]) || []).map((f) => [f.lu != null ? f.lu * 1e3 : Date.parse(f.last_updated || f.last_changed), String(f.s ?? f.state)]).filter(([f]) => Number.isFinite(f));
      } catch {
      }
      l.length || (l = (Br || []).filter((c) => c.entity_id === t).map((c) => [c.when * 1e3, String(c.state)])), e = { at: Date.now(), pts: l }, gd.set(t, e);
    }
    const a = k[t], o = e.pts.slice().sort((l, c) => l[0] - c[0]);
    return a && (!o.length || o[o.length - 1][1] !== a.state) && o.push([Date.parse(a.last_changed) || Date.now(), a.state]), o;
  }
  async function bd(t, e, a) {
    const o = await Qu(t);
    if (!e.isConnected) return;
    const r = o.map(([C, rt]) => [C, Number(rt)]);
    if (o.length > 1 && r.every(([, C]) => Number.isFinite(C))) {
      kl(e, r, ht(t) + ", last 24 hours");
      return;
    }
    const l = Date.now(), c = l - 864e5, f = Math.max(200, e.clientWidth || 360), u = 62, v = (C) => Math.max(0, Math.min(f, (C - c) / 864e5 * f)), S = [];
    let x = null;
    o.forEach(([C, rt]) => {
      const Tt = Xu(t, rt);
      Tt && x == null ? x = Math.max(C, c) : !Tt && x != null && (S.push([x, Math.max(C, c)]), x = null);
    }), x != null && S.push([x, l]);
    const R = Ms(t) ? "var(--danger)" : t.startsWith("light.") ? "#ffaa00" : "var(--primary)", E = $u(t), B = "tfDayClip" + ++Ju, M = S.map(([C, rt]) => E + (rt >= l - 1e3 && C <= c + 1e3 ? " all day" : rt >= l - 1e3 ? " since " + $a(C) : C <= c + 1e3 ? " until " + $a(rt) : " " + $a(C) + "–" + $a(rt)));
    let P = "", _ = -1 / 0;
    S.forEach(([C], rt) => {
      const Tt = M[rt].length * 5.4, Bt = Math.min(v(C), f - Tt);
      Bt < _ + 8 || (P += '<text x="' + Bt.toFixed(1) + '" y="10">' + F(M[rt]) + "</text>", _ = Bt + Tt);
    });
    let j = '<text x="' + f + '" y="' + (u - 2) + '" text-anchor="end">Now</text>';
    [0, 6, 12, 18].forEach((C) => {
      let rt = new Date(l).setHours(C, 0, 0, 0);
      rt > l && (rt -= 864e5), v(rt) > 8 && v(rt) < f - 34 && (j += '<text x="' + v(rt).toFixed(1) + '" y="' + (u - 2) + '" text-anchor="middle">' + String(C).padStart(2, "0") + "</text>");
    }), e.setAttribute("viewBox", "0 0 " + f + " " + u), e.setAttribute("aria-label", ht(t) + ", last 24 hours: " + (M.length ? M.join(", ") : "no changes")), e.innerHTML = '<clipPath id="' + B + '"><rect x="0" y="18" width="' + f + '" height="26" rx="8"/></clipPath>' + P + '<rect x="0" y="18" width="' + f + '" height="26" rx="8" fill="var(--text)" fill-opacity=".1"/><g clip-path="url(#' + B + ')">' + S.map(([C, rt]) => '<rect x="' + v(C).toFixed(1) + '" y="18" width="' + Math.max(2, v(rt) - v(C)).toFixed(1) + '" height="26" fill="' + R + '"/>').join("") + "</g>" + (a && a >= c ? '<line x1="' + v(a).toFixed(1) + '" x2="' + v(a).toFixed(1) + '" y1="13" y2="49" stroke="var(--text)" stroke-width="2" stroke-linecap="round"/>' : "") + j;
  }
  function wd(t) {
    var o;
    const e = Number((o = k[t]) == null ? void 0 : o.state), a = Date.now();
    if (zt(t).state_class === "total_increasing") {
      const r = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), l = Math.max(1, a - r);
      return [...Array(49)].map((c, f) => r + l * f / 48).map((c) => [c, Math.round(e * Math.pow((c - r) / l, 1.3) * 100) / 100]);
    }
    if (Ya(t) && t.endsWith("_moisture")) return [...Array(48)].map((r, l) => [a - (48 - l) * 30 * 60 * 1e3, Math.round((e + 22 * Math.pow(1 - l / 48, 1.2)) * 10) / 10]);
    if (Ya(t) && t.endsWith("_light")) {
      const r = (c) => {
        const f = new Date(c).getHours() + new Date(c).getMinutes() / 60;
        return Math.max(0, Math.sin((f - 6) / 14 * Math.PI));
      }, l = (c) => 0.8 + 0.2 * r(c);
      return [...Array(48)].map((c, f) => a - (48 - f) * 30 * 60 * 1e3).map((c) => [c, Math.round(e * l(c) / l(a))]);
    }
    return [...Array(48)].map((r, l) => [a - (48 - l) * 30 * 60 * 1e3, Math.round(e * (0.96 + 0.04 * Math.sin(l / 6)) * 10) / 10]);
  }
  async function vd(t, e, a = {}) {
    var B, M;
    let o = ft.get(t);
    if (t.endsWith("_solar_power")) o = { at: Date.now(), points: Rd() };
    else if (Ya(t)) o = { at: Date.now(), points: wd(t) };
    else if (!o || Date.now() - o.at > 5 * 60 * 1e3) {
      try {
        const P = new Date(Date.now() - 864e5).toISOString(), _ = await D({ type: "history/history_during_period", start_time: P, entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), j = ((_ == null ? void 0 : _[t]) || []).map((C) => [C.lu != null ? C.lu * 1e3 : Date.parse(C.last_updated || C.last_changed), Number(C.s ?? C.state)]).filter(([C, rt]) => Number.isFinite(C) && Number.isFinite(rt));
        o = { at: Date.now(), points: j };
      } catch {
        o = { at: Date.now(), points: [] };
      }
      ft.set(t, o);
    }
    const r = e || H.querySelector('[data-graph="' + CSS.escape(t) + '"]');
    if (!r) return;
    const l = k[t], c = ((B = l == null ? void 0 : l.attributes) == null ? void 0 : B.unit_of_measurement) || "", f = o.points.slice(), u = Number(l == null ? void 0 : l.state);
    if (Number.isFinite(u) && !t.endsWith("_solar_power") && f.push([Date.now(), u]), f.length < 2) {
      r.setAttribute("aria-label", ht(t) + ": no history for the last 24 hours"), r.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const v = f.map((P) => P[1]), S = Math.min(...v), x = Math.max(...v), R = (P) => P.toLocaleString(void 0, { maximumFractionDigits: Math.abs(P) >= 100 ? 0 : 1 }), E = ((M = l == null ? void 0 : l.attributes) == null ? void 0 : M.state_class) === "total_increasing";
    kl(r, f, ht(t) + ", last 24 hours: " + (E ? "+" + R(v[v.length - 1] - v[0]) : S === x ? R(S) : R(S) + " to " + R(x)) + (c ? " " + c : ""), { smooth: t.endsWith("_solar_power"), zero: t.endsWith("_solar_power"), ...a });
  }
  function yd() {
    const t = H == null ? void 0 : H.querySelector("[data-solar]");
    if (!t) return;
    const e = Rd();
    kl(t, e, "Solar, last 24 hours: up to " + Re(Math.max(...e.map((a) => a[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function th(t, e) {
    const a = e.entity_id, o = fa.get(a) || {}, r = { open_cover: 100, close_cover: 0, set_cover_position: e.position, toggle: Ma(a) > 0 ? 0 : 100 }[t], l = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: e.tilt_position }[t];
    r != null && (o.pos = r), l != null && (o.tilt = l), t === "stop_cover" && (delete o.pos, delete o.tilt), t === "stop_cover_tilt" && delete o.tilt, o.at = Date.now(), fa.set(a, o);
  }
  function xd(t, e, a) {
    var r;
    const o = a == null ? void 0 : a.entity_id;
    return t !== "light" || typeof o != "string" || !bo[o] || !Xa(o) || a.brightness_pct != null || a.brightness != null ? [e, a] : e !== "turn_on" && !(e === "toggle" && ((r = k[o]) == null ? void 0 : r.state) !== "on") ? [e, a] : ["turn_on", { ...a, brightness_pct: bo[o] }];
  }
  function Vr(t, e, a, o) {
    let r = { entity_id: a, ...o || {} };
    return [e, r] = xd(t, e, r), t === "cover" && th(e, r), ya[a] = (ya[a] || 0) + 1, ro.set(Dp, JSON.stringify(ya)), oi.call(t, e, r) ? Promise.resolve() : Promise.resolve(O(t, e, r));
  }
  function Ml(t) {
    const [e, a, o, r] = t.split("|");
    Vr(e, a, o, r ? JSON.parse(r) : null).catch(() => {
    });
  }
  function jr(t, e) {
    st.set("pos|" + t, e), Mt("pos|" + t), ua.delete(t), ao = ao.map(() => ""), [H, kt].forEach((o) => o.querySelectorAll('[data-blocks="' + CSS.escape(t) + '"]').forEach((r) => ys(r, e)));
    const a = H.querySelector('.tfAction[data-k="' + CSS.escape(t) + '"] .tfName .activityRowMeta');
    if (a && (a.textContent = Math.round(e) + "%"), (A == null ? void 0 : A.id) === t) {
      const o = kt.querySelector(".tfMoreState"), r = kt.querySelector(".tfMoreSub");
      o && (o.textContent = Math.round(e) + "%", o.classList.add("live")), r && (r.textContent = "Currently " + Ma(t) + "%");
    }
    dd(t).forEach((o) => o.update(Ii(t)));
  }
  const eh = (t, e) => {
    const a = t.shiftKey ? 10 : 1, o = { ArrowUp: e + a, ArrowRight: e + a, ArrowDown: e - a, ArrowLeft: e - a, PageUp: e + 25, PageDown: e - 25, Home: 0, End: 100 }[t.key];
    return o == null ? null : Math.max(0, Math.min(100, Math.round(o)));
  };
  function ah(t, e) {
    var M;
    const a = t.dataset.blocks;
    (M = t.setPointerCapture) == null || M.call(t, e.pointerId), vt.add("pos|" + a), R("pos|" + a);
    const o = (P) => {
      const _ = t.getBoundingClientRect();
      return Math.max(0, Math.min(100, (P.clientX - _.left) / _.width * 100));
    }, r = o(e), l = e.clientX;
    let c = !1, f = cn(a), u = r, v = 0;
    const S = () => {
      f = Math.abs(u - f) < 0.2 ? u : f + (u - f) * 0.14, jr(a, f), v = requestAnimationFrame(S);
    }, x = () => {
      c || (c = !0, t.classList.add("fine"), v = requestAnimationFrame(S));
    }, R = setTimeout(x, 350), E = (P) => {
      u = o(P), Math.abs(P.clientX - l) > 6 && (clearTimeout(R), x());
    }, B = () => {
      clearTimeout(R), cancelAnimationFrame(v), t.removeEventListener("pointermove", E), t.removeEventListener("pointerup", B), t.removeEventListener("pointercancel", B), t.classList.remove("fine"), vt.delete("pos|" + a), jr(a, c ? Math.round(f) : (Math.min(3, Math.floor(r / 25)) + 1) * 25), zr("pos", a);
    };
    t.addEventListener("pointermove", E), t.addEventListener("pointerup", B), t.addEventListener("pointercancel", B);
  }
  function kd(t) {
    var e;
    q = t.dataset.area, H.querySelectorAll(".tfAreaPanel").forEach((a) => {
      var r;
      const o = a === t;
      a.classList.toggle("active", o), a.setAttribute("aria-expanded", String(o)), (r = a.querySelector(".panelExpanded")) == null || r.toggleAttribute("inert", !o);
    }), ua.set("areas", Z(((e = H.querySelector('[data-k="areas"]')) == null ? void 0 : e.style.order) || 1)), setTimeout(() => Ps(!0), 340);
  }
  function Md(t) {
    const e = H.querySelector('.tfAreas[data-k="areas"]');
    if (!e || !t || t === q) return;
    const a = e.querySelector(".tfAreaStage>.tfRoomTile"), o = a && !We() ? a.cloneNode(!0) : null, r = L().map((v) => v.id), l = r.indexOf(t) > r.indexOf(q) ? 1 : -1;
    q = t;
    const c = Z(e.style.order || 1);
    ua.set("areas", c), rd(e, c);
    const f = H.querySelector('.tfAreas[data-k="areas"] .tfAreaStage'), u = f == null ? void 0 : f.querySelector(":scope>.tfRoomTile");
    !f || We() || (f.style.setProperty("--dir", l), o && (o.classList.add("tfAreaGoing"), o.inert = !0, o.setAttribute("aria-hidden", "true"), f.appendChild(o), setTimeout(() => o.remove(), 340)), u && (u.classList.add("tfAreaLand"), u.addEventListener("animationend", () => u.classList.remove("tfAreaLand"), { once: !0 })));
  }
  const oh = 40;
  function nh(t) {
    var f, u;
    if (t.pointerType === "mouse" || !t.isPrimary || !((u = (f = t.target).closest) != null && u.call(f, ".tfAreaStage")) || !Mc.matches) return;
    const e = t.clientX, a = t.clientY, o = t.pointerId;
    let r = null;
    const l = (v) => {
      v.pointerId === o && !r && Math.hypot(v.clientX - e, v.clientY - a) >= pa && (r = Math.abs(v.clientX - e) > Math.abs(v.clientY - a) ? "x" : "y");
    }, c = (v) => {
      if (v.pointerId !== o) return;
      removeEventListener("pointermove", l, !0), removeEventListener("pointerup", c, !0), removeEventListener("pointercancel", c, !0);
      const S = v.clientX - e;
      if (v.type !== "pointerup" || r !== "x" || Math.abs(S) < oh) return;
      const x = (B) => {
        B.stopPropagation(), B.preventDefault();
      };
      n.addEventListener("click", x, { capture: !0, once: !0 }), setTimeout(() => n.removeEventListener("click", x, !0), 400);
      const R = L(), E = R[R.findIndex((B) => B.id === q) + (S < 0 ? 1 : -1)];
      E && Md(E.id);
    };
    addEventListener("pointermove", l, !0), addEventListener("pointerup", c, !0), addEventListener("pointercancel", c, !0);
  }
  const Vi = {
    bright: { value: (t, e) => Math.round(e * 100), text: (t, e) => e ? e + "%" : "Off", send: (t, e) => e > 0 ? ["light", "turn_on", { brightness_pct: e }] : ["light", "turn_off", {}] },
    ct: { value: (t, e) => {
      const [a, o] = In(t);
      return Math.round(a + e * (o - a));
    }, text: (t, e) => e.toLocaleString() + "k", send: (t, e) => ["light", "turn_on", { color_temp_kelvin: e }] },
    hue: { value: (t, e) => Math.round(e * 360), text: () => "Colour", send: (t, e) => {
      var a;
      return ["light", "turn_on", { hs_color: [e, Math.max(60, ((a = zt(t).hs_color) == null ? void 0 : a[1]) || 100)] }];
    } },
    pos: { value: (t, e) => Math.round(e * 100), text: (t, e) => Math.round(e) + "%", send: (t, e) => ["cover", "set_cover_position", { position: Math.round(e) }] },
    tilt: { value: (t, e) => Math.round(e * 100), text: (t, e) => "Tilt " + e + "%", send: (t, e) => ["cover", "set_cover_tilt_position", { tilt_position: e }] },
    vol: { value: (t, e) => Math.round(e * 100) / 100, text: (t, e) => Math.round(e * 100) + "%", send: (t, e) => ["media_player", "volume_set", { volume_level: e }] },
    // the redrawn popups' tracks (17 Nov): warmth flipped (cold at the left), a fan's speed, a valve's position, a
    // cover's tilt as a level
    ctf: { value: (t, e) => {
      const [a, o] = In(t);
      return Math.round(o - e * (o - a));
    }, text: (t, e) => e.toLocaleString() + "k", send: (t, e) => ["light", "turn_on", { color_temp_kelvin: e }] },
    fan: { value: (t, e) => {
      const a = zt(t).percentage_step || 1;
      return Math.round(e * 100 / a) * a;
    }, text: (t, e) => Math.round(e) + "%", send: (t, e) => ["fan", "set_percentage", { percentage: Math.round(e) }] },
    valve: { value: (t, e) => Math.round(e * 100), text: (t, e) => e + "%", send: (t, e) => ["valve", "set_valve_position", { position: e }] },
    tiltp: { value: (t, e) => Math.round(e * 100), text: (t, e) => e + "%", send: (t, e) => ["cover", "set_cover_tilt_position", { tilt_position: e }] },
    // the light popup's vertical colour (17 Nov): red at the top, through the spectrum, to red at the bottom
    huev: { value: (t, e) => Math.round((1 - e) * 360), text: () => "Colour", send: (t, e) => {
      var a;
      return ["light", "turn_on", { hs_color: [e, Math.max(60, ((a = zt(t).hs_color) == null ? void 0 : a[1]) || 100)] }];
    } }
  };
  function ji(t, e, a, o) {
    var v;
    const r = Vi[e].value(a, o);
    st.set(e + "|" + a, r), Mt(e + "|" + a);
    const l = Math.round(o * 100) + "%", c = t.querySelector("i");
    if (e === "tilt") {
      c.style.width = "calc((100% - 8px) * " + o + ")";
      const [S, x] = t.querySelectorAll("span");
      S.classList.toggle("lit", o > 0.08), x.classList.toggle("lit", o > 0.92), ua.delete(a), ao = ao.map(() => ""), dd(a).forEach((R) => R.update(Ii(a)));
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
    const f = t.querySelector(".tfBarVal");
    f && (f.textContent = Vi[e].text(a, r));
    const u = t.closest(".tfMore") ? t.closest(".tfMore").querySelector(".tfMoreState") : (v = t.closest(".tfAction")) == null ? void 0 : v.querySelector(".tfName .activityRowMeta");
    u && (u.textContent = Vi[e].text(a, r));
  }
  function zr(t, e) {
    const a = t + "|" + e, o = st.get(a), r = ut.get(a), [l, c, f] = Vi[t].send(e, o), u = () => setTimeout(() => {
      ut.get(a) === r && st.delete(a), Pe();
    }, 1500);
    Vr(l, c, e, f).then(u, u);
  }
  function Sd(t) {
    t.addEventListener("click", (e) => {
      var o;
      const a = e.target.closest("[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-fav-hide],[data-energy-pick],[data-more-page],[data-path],[data-area-pick],.tfAreaPanel");
      if (Qe && !e.target.closest(".tfBoardMenu,[data-board-more]") && to(), !(!a || !t.contains(a) || a.disabled))
        if (a.dataset.boardMore)
          (Qe == null ? void 0 : Qe.key) === a.dataset.boardMore ? to(!0) : ru(a.dataset.boardMore, a);
        else if (a.dataset.boardAct) iu(Qe.key, a.dataset.boardAct);
        else if (a.dataset.boardShow) Ws(a.dataset.boardShow);
        else if (a.dataset.favHide) jc(a.dataset.favHide, !1);
        else if (a.dataset.energyPick) cc(a.dataset.energyPick);
        else if (a.dataset.areaPick) Md(a.dataset.areaPick);
        else if (a.dataset.act) Ml(a.dataset.act);
        else if (a.hasAttribute("data-details")) hl(!(A != null && A.details));
        else if (a.hasAttribute("data-details-close")) hl(!1);
        else if (a.dataset.summary) Yn(a.dataset.summary, a);
        else if (a.dataset.star) ko(a.dataset.star);
        else if (a.hasAttribute("data-more-back")) {
          const r = A.id;
          A = A.back, yl(), (o = kt.querySelector('.tfMore [data-more="' + CSS.escape(r) + '"]')) == null || o.focus({ preventScroll: !0 });
        } else a.hasAttribute("data-favs-edit") ? qi("favourites", a) : a.dataset.acts ? JSON.parse(a.dataset.acts).forEach(([r, l, c, f]) => Vr(r, l, c, f).catch(() => {
        })) : a.dataset.more ? qi(a.dataset.more, a) : a.hasAttribute("data-more-close") ? Wi() : a.dataset.morePage ? Fi(a.hasAttribute("data-more-toggle") && ((A == null ? void 0 : A.page) || 0) === Number(a.dataset.morePage) ? 0 : Number(a.dataset.morePage), a.dataset.moreMode ?? null, !0) : a.dataset.path ? gn(a.dataset.path) : a.dataset.go ? ed("room:" + a.dataset.go) : a.hasAttribute("data-area-back") ? rl() : a.classList.contains("tfAreaPanel") && !a.classList.contains("active") && kd(a);
    }), t.addEventListener("keydown", (e) => {
      var o, r, l, c, f, u, v;
      const a = e.target;
      if ((o = a.dataset) != null && o.more && a.tagName !== "BUTTON" && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), qi(a.dataset.more, a)), (r = a.dataset) != null && r.energyPick && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), cc(a.dataset.energyPick)), (l = a.classList) != null && l.contains("tfAreaPanel") && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), kd(a)), (c = a.dataset) != null && c.summary && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), Yn(a.dataset.summary, a)), e.key === "Escape" && Qe && t === H) {
        e.preventDefault(), to(!0);
        return;
      }
      if (e.key === "Escape" && ia && t === H) {
        e.preventDefault(), qs(!1), (f = p("dashEditNav")) == null || f.focus();
        return;
      }
      if (e.key === "Escape" && Q && t === H && (e.preventDefault(), rl()), (u = a.dataset) != null && u.blocks) {
        const S = a.dataset.blocks, x = eh(e, Math.round(cn(S)));
        if (x == null) return;
        e.preventDefault(), jr(S, x), clearTimeout(Hn.get(S)), Hn.set(S, setTimeout(() => zr("pos", S), 500));
        return;
      }
      if ((v = a.dataset) != null && v.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
        e.preventDefault();
        const [S, x] = a.dataset.drag.split("|"), R = Number(a.getAttribute("aria-valuenow")) / 100, E = e.key === "Home" ? 0 : e.key === "End" ? 1 : Math.max(0, Math.min(1, R + (e.key === "ArrowLeft" || e.key === "ArrowDown" ? -0.05 : 0.05)));
        ji(a, S, x, E), zr(S, x);
      }
    }), t.addEventListener("pointerdown", (e) => {
      var Gt;
      const a = e.target.closest("[data-blocks]");
      if (a && e.button === 0) {
        e.preventDefault(), ah(a, e);
        return;
      }
      const o = e.target.closest("[data-drag]");
      if (!o || e.button > 0) return;
      const [r, l] = o.dataset.drag.split("|"), c = r === "bright" && !Xa(l), f = e.pointerType !== "mouse";
      if (c && !f) {
        Ml(Et("light", "toggle", l));
        return;
      }
      const u = r === "bright" && ((Gt = k[l]) == null ? void 0 : Gt.state) !== "on", v = r + "|" + l;
      vt.add(v), Mt(v);
      const S = r === "tilt" ? 4 : 0, x = o.dataset.axis === "y", R = () => x ? o.getBoundingClientRect().height : o.getBoundingClientRect().width - S * 2, E = (Ut) => {
        const Ct = o.getBoundingClientRect();
        return Math.max(0, Math.min(1, x ? 1 - (Ut.clientY - Ct.top) / R() : (Ut.clientX - Ct.left - S) / R()));
      };
      let B = f ? "waiting" : u ? "pressed" : "dragging", M = 0;
      const P = e.clientX, _ = e.clientY, j = (Ut, Ct) => Math.hypot(Ut.clientX - P, Ut.clientY - _) > Ct, C = () => {
        try {
          o.setPointerCapture(e.pointerId);
        } catch {
        }
      };
      f || (e.preventDefault(), C()), B === "dragging" && ji(o, r, l, E(e));
      const rt = () => {
        var Ut, Ct;
        B = "sliding", na = o, o.classList.add("held"), C(), (Ut = navigator.userActivation) != null && Ut.hasBeenActive && ((Ct = navigator.vibrate) == null || Ct.call(navigator, 8)), M = u ? (bo[l] ?? 100) / 100 : Number(o.getAttribute("aria-valuenow")) / 100;
      }, Tt = (Ut) => {
        B === "waiting" && j(Ut, pa) ? !c && (x ? Math.abs(Ut.clientY - _) > Math.abs(Ut.clientX - P) : Math.abs(Ut.clientX - P) > Math.abs(Ut.clientY - _)) ? rt() : B = "gone" : B === "pressed" && j(Ut, 4) && (B = "dragging"), B === "sliding" ? ji(o, r, l, Math.max(0, Math.min(1, M + (x ? _ - Ut.clientY : Ut.clientX - P) / R()))) : B === "dragging" && ji(o, r, l, E(Ut));
      }, Bt = (Ut) => {
        ["pointermove", "pointerup", "pointercancel"].forEach((Ct, Dt) => o.removeEventListener(Ct, Dt ? Bt : Tt)), o.classList.remove("held"), na === o && (na = null), vt.delete(v), B === "sliding" || B === "dragging" ? zr(r, l) : Ut.type === "pointerup" && c ? Ml(Et("light", "toggle", l)) : Ut.type === "pointerup" && u && (B === "waiting" || B === "pressed") && Vr("light", "turn_on", l).catch(() => {
        }), ie && B !== "sliding" && B !== "dragging" && Pe();
      };
      o.addEventListener("pointermove", Tt), o.addEventListener("pointerup", Bt), o.addEventListener("pointercancel", Bt);
    }), t.addEventListener("touchmove", (e) => {
      na && e.cancelable && e.preventDefault();
    }, { passive: !1 });
  }
  return H && w && (_i(), Sd(H), H.addEventListener("pointerdown", nh), Sd(kt), kt.addEventListener("click", (t) => {
    t.target === kt && Wi();
  }), (_d = n.getElementById("homeNav")) == null || _d.addEventListener("click", () => {
    Q && rl();
  }), (Cd = n.querySelector(".bottomNav")) == null || Cd.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + os + "</button>"), (Ad = p("dashEditNav")) == null || Ad.addEventListener("click", () => T ? tl(!Lo) : qs(!ia)), H.addEventListener("pointerdown", Cu), H.addEventListener("pointerdown", au), H.addEventListener("click", (t) => {
    T && Lo && t.target.closest(".tfBoardItem") && (t.preventDefault(), t.stopPropagation());
  }, !0), H.addEventListener("scroll", (t) => {
    var e;
    (e = t.target.classList) != null && e.contains("hcFadeList") && Lc(t.target);
  }, !0), new ResizeObserver(() => {
    g.classList.contains("tfDash") && As() !== _s ? Pe() : Li();
  }).observe(H), window.addEventListener("resize", Li, { passive: !0 }), kt.addEventListener("keydown", (t) => {
    var e, a;
    if (t.key === "Escape")
      t.stopPropagation(), A != null && A.details ? hl(!1) : Wi();
    else if ((t.key === "ArrowLeft" || t.key === "ArrowRight") && ((a = (e = t.target).closest) != null && a.call(e, ".tfMoreDots"))) {
      t.preventDefault();
      const o = [...kt.querySelectorAll(".tfMoreDots [data-more-page]")], r = o.findIndex((c) => c.getAttribute("aria-selected") === "true"), l = o[Math.max(0, Math.min(o.length - 1, r + (t.key === "ArrowRight" ? 1 : -1)))];
      l && Fi(Number(l.dataset.morePage), l.dataset.moreMode ?? null, !0);
    }
  })), Y(), {
    update(t) {
      if (!w) return;
      const e = !Object.keys(k).length;
      k = { ...Object.fromEntries(Object.entries(k).filter(([o]) => Ya(o))), ...t || {} };
      for (const o in k) o.startsWith("light.") && k[o].state === "on" && Xa(o) && Oe(o, fo(k[o]));
      e ? za() : Pe();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      sn = !0, xe == null || xe.destroy(), xe = null, Ce == null || Ce.forEach((t) => t.destroy()), Ce = null;
    },
    resume() {
      sn = !1, !(!w || !(H != null && H.querySelector("[data-tf]"))) && (ka.isConnected && ri(ka.style.order), si());
    }
  };
}
const eg = "0.13.4";
function ag() {
  if (document.getElementById("homecore-fonts")) return;
  const n = document.createElement("link");
  n.id = "homecore-fonts", n.rel = "stylesheet", n.href = "https://fonts.googleapis.com/css2?family=Geist:wght@200;300;400;500;600;700&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(n);
}
class og extends HTMLElement {
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
    ag();
    const i = this.shadowRoot || this.attachShadow({ mode: "open" });
    i.innerHTML = `<style>${dh}${ph}${fh}${uh}</style>${hh}`;
    const d = i.getElementById("app");
    d.style.opacity = "0", this._shell = bh(i, {
      setLight: (p) => this.classList.toggle("lightBody", p),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._test = tg(i, { config: this._config, getHass: () => this._hass }), this._test.update(this._hass.states), bm(i, d), vm(i), this.isConnected || this._test.suspend(), d.style.transition = "opacity .2s ease", d.style.opacity = "";
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
customElements.get("homecore-card") || (customElements.define("homecore-card", og), window.customCards = window.customCards || [], window.customCards.push({
  type: "homecore-card",
  name: "HomeCore",
  description: "A test environment for the HomeCore design language.",
  preview: !1
}), console.info(`%c HOMECORE %c ${eg} `, "background:#03a9f4;color:#090909;font-weight:700", ""));
