const Ch = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-text-on-accent:#090909;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#26221e;--color-text-on-selected:#fbf9f6;--color-bg-segment-selected:#fbf9f6;--color-accent-primary:#0288d1;--color-border-focus:#0288d1;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.pill,.primary,.navBtn,.tab,.back{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.hcAreaGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.hcAreaPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.hcAreaPanel.active{flex:7 1 0;min-width:0;cursor:default}.hcAreaPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.hcAreaPanel:before,.hcAreaPanel:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.hcAreaPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.hcAreaPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}#app.light .hcAreaPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.hcAreaPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.hcAreaPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.hcAreaPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}@media (max-width:900px){.hcAreaGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.hcAreaPanel,.hcAreaPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.panelCollapsed{display:none}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.sectionLabel{margin:0 0 8px 22.4px}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.toggleList{display:grid;gap:9.6px}.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.grid{grid-template-columns:1fr}}@media (max-width:620px){#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}}.card,.panel,.tile{border-radius:var(--r-card)}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .hcAreaPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.grid>*{min-width:0}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}:host{--primary:#03A9F4;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.activityRowMeta{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.toggleRow strong,.primary,.tab,.themeBtn,.wxLayoutBtn,.toast{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.note,.settingsSelect,.pill{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.metaTable th,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.hcAreaGallery,.hcAreaPanel{height:340px}@media (max-width:900px){.hcAreaPanel,.hcAreaPanel.active{height:320px}}@media (max-width:900px){.hcAreaGallery{height:auto}.hcAreaPanel,.hcAreaPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel{margin-left:16px}.grid{gap:8px}.sectionLabel{margin-bottom:8px}.hcAreaGallery{gap:8px}.hcAreaPanel,.hcAreaPanel.active{flex:0 0 100%;min-width:100%}.card,.hcAreaPanel{padding:16px}.activityRows{gap:8px}.activityRow{padding:10px 12px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}@media (prefers-reduced-motion: reduce){.sheet{transition:none}}.card,.panel,.hcAreaPanel.active{padding:var(--inset)}.hcAreaPanel{border-radius:var(--r-tile);padding:var(--inset)}.hcAreaPanel.active,.activityRow{border-radius:var(--r-tile)}.activityRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.activityRowMeta{color:var(--text)}.activityRowMeta{margin-top:0}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}#app{--group-bg:var(--card)}.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .note{margin:0 4px 4px}#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}', Ah = `#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}:is(#homeView,.tfMoreBackdrop,.tfEditTray,.tfMiniPhone) .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)){transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .wxWide{gap:16px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}@media (max-width:620px){#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--text)}#app.house.light{--hc-icon:#e6e6e6;--hc-icon-ink:var(--title)}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house :is(.tfAreaHead,#settingsView>.settingsHeader) .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house :is(.tfAreaHead,#settingsView>.settingsHeader) .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}.tfCard .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfAction>.tfActionHead{margin-bottom:auto}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .toggleRow:has(>.themeChoice,>.settingsSelect){flex-direction:column;align-items:stretch;gap:12px}#housePane .toggleRow>.settingsSelect{width:100%}#housePane .themeChoice[hidden]{display:none}#housePane .houseTab>.card:has(>.tfSetGroup){gap:24px}#housePane .tfSetGroup{display:grid;gap:8px}#housePane .tfSetGroup>.sectionLabel{margin:0 16px}#housePane{container:housepane/inline-size}#housePane .tfLightCards{display:none}@container housepane (width < 720px){#housePane .houseTab .metaTableWrap{display:none}#housePane .tfLightCards{display:grid;gap:8px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDacPad{min-width:0}.tfDacPad>dual-controller-v3{display:block}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}:is(.tfStep,.tfSeg,.tfBlocks,.tfTilt,.tfChips){font-family:var(--font-tile)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:0 1 46px;min-width:32px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);cursor:pointer}.tfStep svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfStep output{flex:1 0 auto;white-space:nowrap;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}#housePane .themeChoice,.tfBoardMenu .tfHeightTabs,.wb .wbSegments{gap:4px;padding:4px;border:0;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}#housePane .themeChoice{display:flex;flex-wrap:nowrap;width:100%}#housePane .themeChoice>button{flex:1 1 0;overflow:hidden;text-overflow:ellipsis}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button){height:38px;min-width:0;min-height:0;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile)!important;white-space:nowrap;cursor:pointer}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button):hover:not(:disabled):not([aria-pressed=true]):not([aria-checked=true]):not(.active){background:transparent;color:var(--text)}:is(#housePane .themeChoice :is(.wxLayoutBtn[aria-pressed=true],.themeBtn.active),.tfBoardMenu .tfHeightTabs button[aria-checked=true],.wb .wbSegments button[aria-pressed=true]){background:var(--bright);color:var(--on-bright)}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none;container:blocks/inline-size}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:12px 4px 4px 12px}.tfBlocks>span:nth-child(4){border-radius:4px 12px 12px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 14px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b small{font:inherit}@container blocks (width < 164px){.tfBlocks b small{display:none}}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.tfTilt i{position:absolute;top:4px;bottom:4px;left:4px;border-radius:12px;background:var(--primary)}.tfTilt span{position:relative;padding:0 16px;color:var(--text);font:600 14px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns svg{fill:none}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}#app.house .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}#app.house .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-l);--g1:var(--g1-l);--g2:var(--g2-l)}#app.house .tfSum[data-summary=climate] .tfIcon svg :is(path,circle,rect):not(mask *){fill:url(#hcClimateGrad)}.tfGradDefs{position:absolute;width:0;height:0;overflow:hidden;pointer-events:none}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMoreBackdrop.tfMoreUnder{z-index:179;pointer-events:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}.tfMoreTileHead .tfName{display:grid;flex:1;min-width:0;cursor:default}.tfMoreTileHead :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreTileHead .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfMoreTileHead div.tfIcon{cursor:default}.tfMoreTileHead.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreTileHead.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMorePages{display:grid;grid-auto-flow:column;grid-auto-columns:100%;align-items:start;gap:20px;flex:none;overflow-x:auto;overflow-y:hidden;overscroll-behavior-x:contain;scroll-snap-type:x mandatory;scrollbar-width:none;transition:height .25s cubic-bezier(.2,.7,.3,1)}@media (prefers-reduced-motion:reduce){.tfMorePages{transition:none}}.tfMorePages::-webkit-scrollbar{display:none}.tfMorePage{display:flex;flex-direction:column;gap:14px;min-width:0;scroll-snap-align:start;scroll-snap-stop:always}.tfMoreSpace{flex:none;display:flex;flex-direction:column;justify-content:space-between;gap:12px;height:224px;padding:18px;border-radius:16px;background:var(--tile);overflow:hidden}.tfMoreSpace.tfMoreFill{justify-content:center;align-items:center;height:auto;padding:0;background:none;border-radius:0}.tfMoreSpace.tfMoreFill>.tfCoverArt{width:100%;height:auto;max-width:none;align-self:center}.tfMoreSpace.tfMoreFill>.tfDacPad{width:100%;height:100%}.tfMoreBig{display:flex;align-items:baseline;min-width:0;font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfMoreBig.live{color:var(--primary)}.tfMoreNum{overflow:hidden;text-overflow:ellipsis}.tfMoreUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfMoreFacts{display:flex;flex:1;flex-direction:column;justify-content:space-evenly;min-height:0}.tfMoreFact{display:flex;justify-content:space-between;gap:16px;font:400 14px/20px var(--font)}.tfMoreFact span:first-child{color:var(--muted)}.tfMoreFact span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreGraph{display:flex;flex:none;flex-direction:column;gap:6px}.tfMoreGraph .tfMoreGroupName{margin:0}.tfMoreGraph .tfGraph.tfDay{width:100%}.tfMoreDots{display:flex;flex:none;justify-content:center;gap:4px;margin-top:-4px}.tfMoreDots button{display:grid;place-items:center;width:24px;height:24px;min-height:0;padding:0;border:0;background:none;cursor:pointer}.tfMoreDots button:before{content:"";width:8px;height:8px;border-radius:50%;background:var(--muted);opacity:.45;transition:opacity .15s ease,background .15s ease}.tfMoreDots button[aria-selected=true]:before{background:var(--text);opacity:1}.tfMoreDots.tfMorePageIcons{gap:3px;align-self:center;margin-top:0;padding:3px;border-radius:19px;background:var(--tile)}.tfMoreDots.tfMorePageIcons button{width:48px;height:32px;border-radius:16px;color:var(--muted);transition:background .15s ease,color .15s ease}.tfMoreDots.tfMorePageIcons button:before{display:none}.tfMoreDots.tfMorePageIcons button svg{width:20px;height:20px;fill:currentColor}.tfMoreDots.tfMorePageIcons button[aria-selected=true]{background:var(--text);color:var(--card)}.tfMoreDots.tfMorePageIcons button:not([aria-selected=true]):hover{color:var(--text)}#homeView .grid>.tfDashTiles>.tfAction.tfHeadOnly,#homeView .grid .tfAction.tfHeadOnly{align-self:start}.tfMoreLink{margin-top:auto}.tfMoreLink svg{transform:none!important}.tfMorePage .tfMoreRows{flex:none}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card.tfCard{container-type:inline-size}#homeView .card.tfCard .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMorePair.still{animation:none}#app[data-more=sheet] .tfMore{width:min(640px,100vw)}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}.tfAreaPanel .icon{width:22px;height:22px}#app .hcAreaPanel.tfAreaPanel{padding:0}#app .hcAreaPanel.tfAreaPanel.active{border-radius:28px}.tfAreaPanel .panelExpanded>.tfRoomTile{height:100%;box-sizing:border-box;background:none;box-shadow:none}#app.tfBoard .tfAreaPanel .tfRoomTile[data-rows="1"]{padding:10px}#app.tfBoard .tfAreas[data-rows="1"] .hcAreaPanel.tfAreaPanel.active{border-radius:24px}.tfAreaIcon{flex:none;border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}button.tfAreaIcon{cursor:pointer}.tfAreaGlyph{display:grid;place-items:center}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{display:grid;grid-template-columns:repeat(var(--peg-n),var(--peg-w));grid-auto-rows:60px;grid-auto-flow:row dense;align-items:stretch;gap:16px;max-width:none}#app.tfWeatherOpen .tfBento.tfPegs .wbItem{width:auto;min-height:0;align-self:stretch;display:flex;flex-direction:column}#app.tfWeatherOpen .tfBento.tfPegs .wbItem>*{flex:1;min-height:0}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=wide]{grid-column:span 2;grid-row:span 5}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=double]{grid-column:span 2;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=tile]{grid-column:span 1;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbCard.wbSquare{aspect-ratio:auto}#app.tfWeatherOpen .tfBento.tfPegs .wbWeather .wbNow{margin-bottom:auto}#app.tfWeatherOpen .tfBento.tfPegs :is(.wbStripScroll,.wbBars .wbDayBars,.wbBars.wbTabbed .wbDayBars){min-height:0}#app.tfBoard .tfAreas[data-rows="5"] .tfACMain{position:absolute;left:10px;right:10px;bottom:170.3px;max-width:none;text-align:center}#app.tfBoard .tfAreas[data-rows="4"] .tfACMain{position:absolute;left:10px;right:10px;bottom:164.1px;max-width:none;text-align:center}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:18px 0 10px;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:6px;max-width:calc(100% - 20px)}.tfACMain{max-width:calc(100% - 20px);font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px);min-height:60px}.tfACTiles:has(>:nth-child(3)){margin-top:-60px}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}.tfACTiles:has(>:nth-child(2)){margin-top:-60px}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{gap:28px;padding:40px;background:var(--bg)}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:-20px -20px 0 0}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead) .activityTitle{font-size:24px}@media (max-width:620px){#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:0}}@media (min-width:621px){#app:not([data-more=sheet]) .tfMoreBackdrop.wide{place-items:start center}}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px}.tfMoreActions .tfAction{grid-column:auto}.tfMoreBackdrop{grid-template-columns:minmax(0,1fr)}.tfMoreActions .tfAction{min-width:0}.tfMoreActions>.activityRow{align-self:start;display:grid;grid-auto-flow:column;grid-template-columns:auto minmax(0,1fr);align-items:center;align-content:start;gap:12px;min-width:0;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfMoreActions>.activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreActions>.tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreActions>.activityRow :is(.activityRowName,.activityRowMeta){display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreActions>.activityRow.alert .activityRowMeta{color:var(--danger)}@media (max-width:620px){.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash :is(.tfDash-aq,.tfDash-pollen,.tfDash-radar,.tfDash-hourly,.tfDash-sun,.tfDash-moon,.tfDash-uv,.tfDash-humidity,.tfDash-pressure,.tfDash-wind,.tfDash-visibility){order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app .tfNotAdded{display:none!important}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:0 0 var(--area-open,409px)}#app.tfDash .tfAreaPanel:not(.active){flex:1 0 128px}}.tfAreaPhone{display:none}@media (max-width:620px){#app .tfAreas .tfAreaGallery{display:none}#app .tfAreas .tfAreaPhone{display:flex;flex-direction:column;gap:14px}.tfAreaStage{position:relative;flex:none;aspect-ratio:1325/982;min-height:0;overflow:clip;touch-action:pan-y}.tfAreaStage>.tfRoomTile{height:100%;box-sizing:border-box;overflow:hidden}.tfAreaPicks{display:grid;grid-template-columns:repeat(8,minmax(0,1fr));gap:8px;padding:0 16px}#app .tfAreaPick{width:100%;height:auto;aspect-ratio:1;border:0;padding:0;border-radius:40%;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}#app .tfAreaPick.on[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfAreaStage>.tfAreaGoing{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;animation:tfAreaOut .32s cubic-bezier(.2,.7,.3,1) forwards}.tfAreaStage>.tfAreaLand{animation:tfAreaIn .32s cubic-bezier(.2,.7,.3,1) backwards}}@keyframes tfAreaOut{to{translate:calc(var(--dir,1) * (-100% - 16px)) 0}}@keyframes tfAreaIn{0%{translate:calc(var(--dir,1) * (100% + 16px)) 0}}@media (prefers-reduced-motion:reduce){.tfAreaStage>*{animation:none!important}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;margin-top:auto;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(2,minmax(0,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app.house .tfDashBento .wbItem[data-size]{width:100%}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}.tfDash-wx .wbCondition{display:none}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .hcAreaGallery,#app.tfBoard .tfAreas .hcAreaPanel{height:100%;min-height:0}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;pointer-events:none;color:var(--text)}.tfBoardCells svg{display:block;overflow:visible}.tfBoardCells pattern circle{fill:currentColor;fill-opacity:.16}.tfBoardCells .tfGridCross{fill:none;stroke:currentColor;stroke-opacity:.45;stroke-width:1.5;stroke-linecap:round}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfHeight{display:grid;gap:6px;padding:6px 6px 8px}.tfHeightLabel{padding:0 6px;color:var(--muted);font:500 12px/16px var(--font)}.tfHeightTabs{display:grid;grid-template-columns:repeat(5,1fr)}.tfBoardMenu .tfHeightTabs button{justify-content:center}.tfBoardMenu .tfHeightTabs button:disabled{opacity:.35}.tfWidth{padding-top:0}.tfWidth .tfHeightTabs{grid-template-columns:repeat(3,auto)}.tfSourceList{display:grid;gap:2px}.tfBoardMenu .tfSourceList button[aria-checked=true]{background:var(--bright);color:var(--on-bright)}.tfBoardMenu .tfSourceList button[aria-checked=true]:hover{background:var(--bright)}.tfBoardMenu .tfWidth .tfHeightTabs button{white-space:nowrap}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows{grid-auto-rows:var(--fill-row,60px);margin-top:0}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows>.activityRow{min-height:0;height:var(--fill-row,60px);box-sizing:border-box}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]{padding:0;gap:0}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityHeader,#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.tfDashGraph{display:none}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityRows{margin:0;flex:1}#app.tfBoard .tfBoardItem.tfAction[data-rows="1"]{padding:10px;border-radius:24px}.tfRoomTile{cursor:pointer}.tfRoomTile .tfRoomIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomTile button.tfRoomIcon{cursor:pointer}.tfRoomInline,.tfRoomSub{display:none}.tfRoomReading{display:flex;flex-direction:column;align-items:flex-start;align-self:flex-start;gap:4px;min-width:0;max-width:100%;padding:0;border:0;border-radius:8px;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.tfRoomBig{overflow:hidden;color:var(--text);font:500 36.8px/36.8px var(--font-tile);letter-spacing:-.74px;white-space:nowrap;text-overflow:ellipsis}#app.tfBoard .tfRoomTile[data-rows="4"] .tfRoomBig{font-size:41.6px;line-height:41.6px;letter-spacing:-1.54px}#app.tfBoard .tfRoomTile[data-rows="5"] .tfRoomBig{font-size:51.2px;line-height:51.2px;letter-spacing:-1.54px}.tfRoomTile:not([data-rows="1"]) :is(.tfRoomDevices,.tfRoomHeads){margin-top:auto}.tfRoomTile>.tfActionHead{margin-bottom:0}.tfRoomSub{overflow:hidden;color:var(--muted);font:400 16px/19px var(--font);white-space:nowrap;text-overflow:ellipsis}.tfRoomDevices{display:flex;gap:12px}.tfRoomDevices .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfRoomDevices .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}#app.tfBoard .tfRoomTile[data-rows="1"] .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-rows="1"] :is(.tfRoomReading,.tfRoomDevices),#app.tfBoard .tfRoomTile[data-rows="2"] .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfActionHead .activityRowMeta{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfRoomSub{display:block}#app.tfBoard .tfRoomTile[data-cols="1"]:is([data-rows="3"],[data-rows="4"],[data-rows="5"]) .tfRoomDevices{display:grid;grid-template-columns:repeat(2,max-content)}#app.tfBoard .tfRoomTile[data-cols="1"][data-rows="3"]:has(.tfRoomDevices) .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-cols="1"][data-rows="3"]:has(.tfRoomDevices) .tfRoomReading{display:none}#app.tfBoard .tfRoomTile[data-cols="1"]:is([data-rows="4"],[data-rows="5"]) .tfRoomDevices{min-height:calc(2 * var(--chip-size) + 12px);align-content:start}.tfRoomHeads{display:none;gap:12px 16px}.tfRoomDev{position:relative;isolation:isolate;display:flex;align-items:center;gap:12px;min-width:0;cursor:pointer}.tfRoomDev:before{content:"";position:absolute;z-index:-1;top:-6px;right:-10px;bottom:-6px;left:-10px;border-radius:var(--r-tile);pointer-events:none;transition:background .15s ease,box-shadow .15s ease}@media (hover:hover){.tfRoomDev:hover:before{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}}.tfRoomDevName{padding:0;border:0;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.tfRoomDev .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfRoomDev .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfRoomDevName{display:flex;flex-direction:column;min-width:0}.tfRoomDevName>span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]){flex-direction:row;align-items:center;gap:12px}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"])>.tfActionHead{flex:1;margin-bottom:0}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]) .tfRoomDevices{display:flex}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomHeads{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-cols="2"]):not([data-rows="1"]) .tfRoomHeads{grid-template-columns:repeat(4,minmax(0,1fr))}#app.tfBoard .tfRoomTile[data-cols="2"][data-rows="2"] .tfRoomDev:nth-child(n+3){display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]):has(.tfRoomDevices) .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]):has(.tfRoomDevices) .tfRoomReading{display:none}#app.tfBoard .tfDashBento[data-rows="1"] .wbCard{padding:10px;border-radius:24px}#app.tfBoard .tfDashBento[data-rows="1"] .wbVisual{display:none}#app.tfBoard .tfDash-wx[data-rows="1"] .wbNow{margin:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbWx.wbS90{width:40px;height:40px;border-radius:12px}#app.tfBoard .tfDashBento[data-rows] :is(.wb,.wbBento,.wbItem){height:100%;min-height:0}#app.tfBoard .tfDashBento[data-rows] .wbCard{height:100%;min-height:0;box-sizing:border-box;aspect-ratio:auto}#app.tfBoard .tfDash-wx[data-rows="1"] .wbDeg{font-size:20px;letter-spacing:0;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbPlace{font-size:13px;line-height:18px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbUnit{font-size:14px;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbWx.wbS90{width:100px;height:100px;border-radius:31px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbDeg{font-size:80px;line-height:80px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbUnit{font-size:30px;line-height:38px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbWeather{flex-direction:row;align-items:center;gap:16px}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNow{flex:none}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNextHours{display:flex;flex:1 1 0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbWeather{justify-content:center;padding-top:0;padding-bottom:0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) :is(.wbNow,.wbSummary){display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbColumns{display:flex;flex:none;height:185px}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsDay{display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsNow{display:inline}#app.tfBoard .tfDash-wx[data-narrow] .wbCard.wbWeather{gap:12px;padding:18px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbWx.wbS90{width:64px;height:64px;border-radius:20px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbDeg{font-size:46px;line-height:46px;letter-spacing:-.92px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbUnit{font-size:20px;line-height:26px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-narrow] .wbHalves{display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="3"] .wbNextHours{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow] .wbHour:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;flex:none;height:auto;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumn:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbHalves{display:none}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx:not([data-narrow])[data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="4"]) .wbSummary{display:none}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) :is(.wbColumns,.wbHalves){display:none}#app.tfBoard .tfDash-wx[data-rows="4"] .wbColumns{flex:1 1 0;height:auto;min-height:0;margin-top:0}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn{justify-content:flex-start;gap:8px;padding:12px 0 16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn .wbWx{width:40px;height:40px;border-radius:16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbTemps{gap:4px}#app.tfBoard .tfDash-wx[data-rows="4"] .wbHalves>:nth-child(n+5){display:none}#app.tfBoard .tfDash-energy[data-rows="2"] .tfDashGraph{display:none}#app.tfBoard .tfDash-energy:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) .activityRows{grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr)}#app.tfBoard .tfDash-energy[data-rows="3"] .tfDashGraph{min-height:0}#app.tfBoard .tfDashBento[data-rows="2"] .wbBaseRows{display:none}#app.tfBoard .tfDashBento[data-rows="2"] :is(.wbRadar,.wbCompareBars,.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfDashBento[data-rows="3"] :is(.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfAreas[data-rows="1"] .tfACTop{display:contents}#app.tfBoard .tfAreas[data-rows="1"] .tfACTiles{display:none}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed{display:grid;grid-template-columns:40px minmax(0,1fr);column-gap:12px;align-content:center;padding:0}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfACName,.tfACMain){margin:0;font-size:14px;line-height:18px;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.tfBoard .tfAreas[data-rows="2"] .tfACTiles{display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTile:nth-child(n+3){display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACollapsed{justify-content:flex-start;gap:10px}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTiles{margin-top:auto}.tfEditTray{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px));right:0;bottom:0;z-index:160;display:flex;width:608px;max-width:calc(100vw - 56px);transform:translate(100%);transition:transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfEditTray.open{transform:none}.tfEditTray.open.tucked{transform:translate(100%)}.tfEditTray.open :is(.tfTrayInner,.tfTrayTuck){pointer-events:auto}.tfTrayTuck{position:absolute;top:20px;left:-52px;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border:0;border-radius:var(--r-inner);background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;--mdc-icon-size:22px}.tfTrayTuck svg{width:22px;height:22px}.tfEditTray:not(.open) .tfTrayTuck{visibility:hidden}.tfTrayInner{flex:1;min-width:0;display:flex;flex-direction:column;gap:20px;overflow:auto;overscroll-behavior:contain;padding:20px;border-radius:var(--r-card) 0 0 var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d}.tfTrayHead{display:flex;align-items:center;justify-content:space-between;gap:12px}.tfTraySection{display:flex;flex-direction:column;gap:8px}.tfTraySection .sectionLabel{margin:0}.tfTrayNote{margin:0;color:var(--muted);font:400 14px/1.3 var(--font)}.tfTrayCards{display:flex;flex-direction:column;gap:6px}.tfTrayCard{display:flex;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 14px 0 10px;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none}.tfTrayList{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}.tfTrayFav{display:grid;grid-template-columns:22px var(--chip-size) minmax(0,1fr) 36px 36px;align-items:center;gap:8px;min-height:var(--tile-min);padding:0 4px 0 6px;border-radius:var(--r-tile)}.tfTrayFav.off{cursor:grab;touch-action:none}.tfTrayFav.off :is(.tfIcon,.tfTrayName){opacity:.5}.tfTrayFav.moving{background:var(--tile)}.tfTrayGrip{display:grid;place-items:center;color:var(--muted);cursor:grab;touch-action:none}.tfTrayGrip svg{width:20px;height:20px;fill:currentColor}:is(.tfTrayFav,.tfTrayPickItem) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfTrayName{display:flex;flex-direction:column;min-width:0}.tfTrayName>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfTrayBtn{display:grid;place-items:center;width:36px;height:36px;min-height:0;padding:0;border:0;border-radius:12px;background:none;color:var(--text);cursor:pointer}.tfTrayBtn svg{width:20px;height:20px;fill:currentColor}.tfTrayBtn:hover{background:var(--tile)}.tfTrayAdd{align-self:flex-start}.tfTrayPick{display:flex;flex-direction:column;gap:6px}.tfTrayPick[hidden]{display:none}.tfTrayPickItem{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;width:100%;min-height:var(--tile-min);padding:0 10px;border:0;border-radius:var(--r-tile);background:none;color:var(--text);text-align:start;cursor:pointer}.tfTrayPickItem:hover{background:var(--tile)}.tfTraySuggest{margin-top:8px}.tfMiniPhone{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px) + 20px);bottom:20px;left:max(16px,calc(100vw - min(608px,100vw - 56px) - 380px));z-index:160;display:flex;flex-direction:column;gap:8px;width:324px;padding:12px;border-radius:44px;background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d;opacity:0;transform:translate(16px);transition:opacity .2s ease,transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfMiniPhone.open{opacity:1;transform:none;pointer-events:auto}.tfPhoneHead{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 4px 0 12px}.tfMiniPhone>.tfTrayNote{padding:0 12px 4px}.tfLinkBtn{min-height:0;padding:0;border:0;background:none;color:var(--primary);font:inherit;text-decoration:underline;cursor:pointer}.tfPhoneScreen{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;border-radius:34px;background:var(--bg);box-shadow:var(--hc-hair-all);padding:14px 0 24px}.tfPhoneList{display:flex;flex-wrap:wrap;gap:12.8px}.tfPhoneTitle{width:100%;padding:0 12.8px;color:var(--text);font:800 25.6px/1 var(--font);letter-spacing:-.055em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfPhoneBlock{display:flex;align-items:flex-start;gap:10px;width:100%;min-height:0;padding:12px;border:0;border-radius:27px;background:var(--card);box-shadow:var(--hc-hair);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.tfPhoneBlock.tile{width:calc((100% - 12.8px)/2);border-radius:22.4px}.tfPhoneBlock.fixed{align-items:center;color:var(--muted);cursor:default}.tfPhoneBlock.moving{box-shadow:var(--hc-hair),0 0 0 2px var(--primary);cursor:grabbing}.tfPhoneBlock:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfPhoneBlock .tfIcon{width:32px;height:32px;border-radius:13px;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}.tfPhoneName{min-width:0;padding-top:6px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tfTrayGhost{position:fixed;top:0;left:0;z-index:200;margin:0;pointer-events:none;opacity:.9;background:var(--tile);border-radius:var(--r-tile);box-shadow:0 8px 24px #00000059}.tfFavDrop{position:fixed;z-index:200;width:4px;border-radius:2px;background:var(--primary);pointer-events:none}.tfFavHides{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;pointer-events:none}.tfFavHide{position:absolute;display:grid;place-items:center;width:32px;height:32px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;pointer-events:auto}.tfFavHide svg{width:18px;height:18px;fill:currentColor}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.toast.tfToast{top:auto;right:auto;max-width:calc(100vw - 32px);transform:translate(-50%,6px)}.toast.tfToast.show{transform:translate(-50%)}.tfDash-act .activityRow.alert .activityRowName{color:var(--danger)}.activityRow .tfIcon.alert{background:#e53935;color:#fff}.tfGraph.tfDay{flex:none;height:62px;min-height:0}.tfGraph.tfDay text{font-size:10px}#housePane .rubberIndicator{background:var(--bright)}#housePane .tab.active{color:var(--on-bright)}#app.house .settingsSelect{border:1px solid var(--muted)}#app.house .addInput{display:block;width:100%;height:46px;min-height:0;box-sizing:border-box;margin:0;padding:0 10px;border:0;border-radius:var(--r-inner)!important;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:400 16px/18.4px Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;letter-spacing:-.32px;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}#app.house .addInput:hover{background:color-mix(in srgb,var(--text) 6%,var(--tile))}#app.house .addInput:focus-visible,#app.house .addInput:focus{background:var(--tile);box-shadow:inset 0 0 0 1.6px var(--primary)}#app.house .addInput::-webkit-search-decoration,#app.house .addInput::-webkit-search-cancel-button{-webkit-appearance:none;-moz-appearance:none;appearance:none}#app.house{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%23d9d9d9' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house.light{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%2326221e' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house select.settingsSelect{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 44px 0 16px;background-image:var(--select-chev);background-repeat:no-repeat;background-position:right 16px center;background-size:16px 16px}#app.house .addInput::placeholder{color:var(--muted);opacity:1}#app .activityRows :focus-visible{outline-offset:-2.4px}#app.house :is(button,a,input,select,[tabindex]){scroll-margin-bottom:96px}@media (max-width:620px){#app.house :is(.activityRowName,.activityRowMeta){white-space:normal;text-overflow:clip;overflow:visible;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}}.tfTooltip{position:fixed;z-index:500;max-width:min(320px,calc(100vw - 16px));padding:6px 10px;border-radius:10px;background:var(--bright);color:var(--on-bright);font:500 14px/18px var(--font);overflow-wrap:break-word;box-shadow:0 4px 16px #00000040}.tfTooltip[hidden]{display:none}.tfDashGraph rect{transform-box:fill-box;transform-origin:50% 100%}#app.house:is([data-names=cut],[data-names=scroll]) :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis;overflow-wrap:normal}#app.house[data-names=wrap] :is(.activityRowName,.activityRowMeta){display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:normal;overflow:hidden;text-overflow:ellipsis;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}#app.tfBoard .tfDash-favs>.activityRows{min-height:0;overflow-y:auto;scrollbar-width:thin}#app.house :is(.tfIcon,.tfAreaIcon,.tfRoomIcon){--chip-hi:.0375;background-image:linear-gradient(180deg,#ffffff08,#fff0)!important;box-shadow:inset 0 1px rgba(255,255,255,var(--chip-hi)),inset 0 -1px color-mix(in srgb,currentColor 3%,transparent),inset 0 -3px 6px color-mix(in srgb,currentColor 3.5%,transparent)}#app.house :is(.on[data-light] .tfIcon,.tfIcon.on[data-light],.tfACTile .tfIcon[data-light],.on[data-tone=alarm] .tfIcon,.tfIcon[data-light]){--chip-hi:.1375}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-xl]{grid-row:span 5}#app.tfBoard .tfDashBento:not([data-rows="5"]) .wbItem[data-xl] .wbCallouts{display:none}#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]) .wbZone{flex:1;height:auto;background:none;box-shadow:none;padding:0;align-items:flex-start}#app.tfBoard .tfDashBento[data-rows="3"] .wbItem[data-xl] .wbCallouts{display:flex;margin-top:0}#app.tfBoard .tfDashBento[data-rows="1"] :is(.wbZone,.wbCallouts){display:none}#app .wbZoneM{display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM){display:flex;align-items:flex-start;justify-content:flex-start}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM)>:not(.wbZoneM){display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZoneM{display:flex}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{grid-auto-flow:row}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-break]{grid-column-start:1}#app.house.tfWeatherOpen #homeView{max-width:none}#app.house #settingsView .toggleList{border-radius:var(--r-card);padding-block:4px}#app.house #settingsView .toggleRow{padding-left:18px;padding-right:18px}#app.house #settingsView .toggleRow:not([hidden])~.toggleRow:before{left:18px}#app.house .view{margin-left:0}#app.house #settingsView .toggleList>.tfCardTitle{display:flex;align-items:center;min-height:28px;padding:14px 18px 2px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfLightView{display:flex;padding:4px 0 14px}#housePane.tfLightCardsOn .houseTab .metaTableWrap,#housePane.tfLightCardsOn .houseTab .tfTableNote{display:none}#housePane.tfLightCardsOn .tfLightCards{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:8px}#housePane:not(.tfLightCardsOn) .tfLightCards{display:none}@container housepane (width < 720px){#housePane:not(.tfLightCardsOn) .houseTab .metaTableWrap{display:none}#housePane:not(.tfLightCardsOn) .tfLightCards{display:grid}}#app.house.light .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house .tfTrayInner{gap:32px}#app.house .tfTraySection{gap:12px}#app.house{--font:Geist,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-family:var(--font)}#app.house #housePane .toggleRow>:is(.themeChoice,.settingsSelect){align-self:flex-start;width:auto;max-width:100%}#app.house #housePane .themeChoice{display:inline-flex}#app.house #housePane .themeChoice>button{flex:0 1 auto;min-width:0;padding:0 16px;overflow:hidden;text-overflow:ellipsis}#app.house #housePane .toggleRow{min-width:0}#app.house #housePane .toggleRow>.settingsSelect{min-width:200px}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments){display:inline-flex;width:auto;align-self:flex-start}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments) button{flex:0 0 auto;padding:0 16px}@media (max-width:620px){#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid{display:flex!important;flex-wrap:wrap;align-items:flex-start;gap:var(--grid-gap);height:auto!important}#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid .tfBoardItem{position:relative!important;left:auto!important;top:auto!important}#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid>.tfBoardItem:not(.tfDash-favs){height:auto!important}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummary{flex:none;margin-top:0;container-type:normal}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummaryText{position:static}}#app.house :is(#housePane .themeChoice,.wb .wbSegments,.tfBoardMenu .tfHeightTabs){height:32px;padding:3px;gap:3px;box-sizing:border-box}#app.house :is(#housePane .themeChoice>button,.wb .wbSegments button,.tfBoardMenu .tfHeightTabs button){height:26px!important;padding:0 12px;border-radius:13px!important;font:600 12px/16px var(--font-tile)!important}.tfPlantProblem{flex:1 1 0;min-height:184px;flex-direction:column}.tfGraph.tfPlantGraph{flex:1 1 0;width:calc(100% - 20px);height:auto;min-height:160px;margin:0 10px}.tfGraph .tfGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:3 4;vector-effect:non-scaling-stroke}.tfGraph .tfGuideWord{font-size:11px}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){box-shadow:inset 0 0 0 1px var(--line)}.tfDashTitle .tfGreeting{display:block;margin-bottom:6px;font:500 20px/1.2 var(--font-tile);letter-spacing:0;color:var(--muted)}#app.light{--title:#55504a}#app.light :is(.activityTitle,.hcCardTitle,.wbTitle,.activityRowName,.hcRowName,.wbName){color:var(--title)}#app.light .tfRoomTile .tfActionHead .activityRowName{color:var(--text)}#app.light .tfRoomBig{color:var(--title)}#app.tfOverview.tfDash #homeView .tfSum:not([data-summary=alerts]) .tfIcon{background:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar{width:100%;max-width:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows{display:flex;justify-content:space-between}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRow{flex:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows{display:grid;grid-template-columns:repeat(var(--bar-cols,3),minmax(0,1fr))}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows>.activityRow{min-width:0}@media (max-width:620px){#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}}#app.tfOverview.tfDash #homeView .tfDash-favs{padding:10px;border-radius:var(--r-card)}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-auto-rows:60px;row-gap:25px;max-height:100%;margin:0;overflow-y:auto;scrollbar-width:none}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows::-webkit-scrollbar{display:none}.hcFadeList.hcMore{-webkit-mask-image:linear-gradient(to bottom,#000 calc(100% - 40px),transparent);mask-image:linear-gradient(to bottom,#000 calc(100% - 40px),transparent)}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{height:60px;min-height:0;padding:10px;box-sizing:border-box}#app.tfOverview.tfDash #homeView .tfDash-wx .wbCard.wbWeather{gap:0;padding:18px}#app.tfOverview.tfDash #homeView .tfDash-wx .wbCondition,#app.tfOverview.tfDash #homeView .tfDash-wx .wbNextHours,#app.tfOverview.tfDash #homeView .tfDash-wx .wbHalves{display:none!important}#app.tfOverview.tfDash #homeView .tfDash-wx .wbSummary{flex:none;height:auto;margin:18px 0 0;container:none}#app.tfOverview.tfDash #homeView .tfDash-wx .wbSummaryText{position:static;-webkit-line-clamp:1}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumns{display:flex!important;height:159px;margin-top:auto;border-radius:var(--r-tile)}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn{padding:8px 0;background:none}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn:hover{background:var(--tile)}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn .wbWx.wbS60{width:60px;height:60px;border-radius:20px}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar{width:max-content;max-width:100%}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar .activityRows{justify-content:flex-start}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows{grid-template-columns:repeat(var(--bar-cols,3),auto)}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs{height:auto!important;padding:10px;container-type:normal}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows{display:flex;justify-content:space-between;grid-auto-rows:auto;row-gap:0;max-height:none}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{flex:none;width:240px;height:60px}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows{display:grid;grid-template-columns:repeat(var(--bar-cols,3),minmax(0,1fr))}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows>.activityRow{width:auto;min-width:0}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs{width:max-content!important;max-width:100%}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs>.activityRows{justify-content:flex-start}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows{grid-template-columns:repeat(var(--bar-cols,3),240px)}@media (max-width:620px){#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{width:auto;min-width:0}}#app.tfOverview.tfBoard #homeView .hcFloor{position:absolute;z-index:1;display:flex;align-items:center;height:24px;margin:0;box-sizing:border-box}#app.tfOverview.tfBoard #homeView .hcFloorBox{position:absolute;z-index:0;border-radius:40px;background:color-mix(in srgb,var(--text) 5%,transparent);box-sizing:border-box;pointer-events:none}#app.tfOverview #homeView .hcFloorName{margin:0;font:500 16px/24px var(--font);color:var(--title,var(--text));white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.hcHomeEditing.tfOverview #homeView .tfBoardItem.tfRoomTile{cursor:default;outline:0}#app.hcHomeEditing.tfOverview #homeView .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfRoomTile){cursor:grab;-webkit-user-select:none;user-select:none;touch-action:none;outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.hcHomeEditing.tfBoardReady #homeView .tfBoardItem{transition:left .34s cubic-bezier(.2,1.35,.4,1),top .34s cubic-bezier(.2,1.35,.4,1)}@media (prefers-reduced-motion:reduce){#app.hcHomeEditing.tfBoardReady #homeView .tfBoardItem{transition:none}}#app.hcHomeEditing #homeView .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfEditTray .tfTrayInner{scrollbar-width:none}.tfEditTray .tfTrayInner::-webkit-scrollbar{display:none}.hcHeChoiceLine{flex-wrap:wrap;gap:8px 12px}.hcHeChoiceLine>.hcHeChoice{margin-left:auto}.hcHeChoice.themeChoice{display:inline-flex;flex-wrap:nowrap;height:32px;padding:3px;gap:3px;box-sizing:border-box;border-radius:16px;background:var(--control-2,var(--hc-icon))}#app .hcHeChoice>button{height:26px!important;min-height:0;padding:0 12px;border:0;border-radius:13px!important;background:none;color:var(--text);font:600 12px/16px var(--font-tile)!important;white-space:nowrap}#app .hcHeChoice>button[aria-pressed=true]{background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all)}.hcHeBody{display:flex;flex-direction:column;gap:12px}.hcHeBody>.tfTrayNote{margin:0 0 8px}.hcHeLabel{display:flex;align-items:center;gap:4px}.hcHeLine{display:flex;align-items:center;gap:4px;min-height:44px}.hcHeLine>.activityRowName{min-width:0}.hcHeLine>.switch{margin-left:auto}.hcHeLink{display:inline;min-height:0;padding:0;border:0;background:none;font:inherit;color:var(--primary);text-decoration:underline;cursor:pointer}.hcHeList{display:flex;flex-direction:column;gap:2px;margin:0;padding:0;list-style:none}.hcHeRow{display:grid;grid-template-columns:36px var(--chip-size) minmax(0,1fr) auto;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 4px;border-radius:var(--r-tile)}.hcHeRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.hcHeRow.moving{background:var(--card);box-shadow:var(--hc-hair-all)}:is(.hcHeRow,.tfTrayFav):is(.hcListDragging,.hcListLanding){position:relative;z-index:5;background:var(--card)}:is(.hcHeRow,.tfTrayFav).hcListDragging{filter:drop-shadow(0 10px 30px rgba(0,0,0,.35));cursor:grabbing}.hcHeGrip{color:var(--muted);cursor:grab;touch-action:none}.hcHeSum .tfIcon{color:var(--sum-ink,var(--hc-icon-ink))}#app .hcHeRow.hcHeSum .tfIcon{background-color:transparent}#app.house .hcHeSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .hcHeSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}.hcInfoBtn{display:grid;place-items:center;flex:none;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:var(--r-fine,12px);background:none;color:var(--muted);cursor:pointer}.hcInfoBtn svg{width:18px;height:18px;fill:currentColor}.hcInfoBtn:hover,.hcInfoBtn[aria-expanded=true]{background:var(--tile);color:var(--text)}.hcInfoPop{position:fixed;z-index:320;width:280px;max-width:calc(100vw - 16px);display:flex;flex-direction:column;gap:8px;padding:16px;border-radius:var(--r-inner);box-shadow:var(--hc-hair-all),0 8px 28px #0000002e}.hcInfoPop[hidden]{display:none}.hcInfoTitle{font:600 14px/20px var(--font-tile);color:var(--text)}.hcInfoText{font:400 14px/1.45 var(--font);color:var(--text)}.hcInfoText p{margin:0}.hcInfoText ul{margin:6px 0 0;padding-left:18px}.hcInfoMore{align-self:flex-start;font:600 14px/20px var(--font-tile);color:var(--primary);text-decoration:underline}#app .tfTrayAdd.hcAddBtn{display:inline-flex;align-items:center;gap:6px;height:32px;min-height:0;margin:10px 0 12px;padding:0 16px 0 12px;border:0;border-radius:16px!important;background:#03a9f4;color:#fff;font:600 14px/20px var(--font-tile);text-decoration:none!important}#app .tfTrayAdd.hcAddBtn svg{width:18px;height:18px;flex:none;fill:currentColor}#app .tfTrayAdd.hcAddBtn:hover{background:#0398dc}#app .tfTrayAdd.hcAddBtn[aria-expanded=true]{background:#0288d1}.tfEditTray:not(.hcHomeTray) .tfTraySection:not(.hcFirst){padding-top:20px;border-top:1px solid var(--line)}#app.house .tfEditTray:not(.hcHomeTray) .tfTrayInner{gap:20px}.hcHeRule{width:100%;height:0;margin:8px 0;border:0;border-top:1px solid var(--line)}.tfEditTray .hcTrayTabs{display:flex;align-self:stretch;margin:0 0 4px;flex:none}.tfEditTray .hcTrayTabs .tab{flex:1 1 0;min-height:36px;padding:0 10px;font:600 14px/20px var(--font-tile)}.tfEditTray .hcTrayTabs .rubberIndicator{background:var(--text)}.tfEditTray .hcTrayTabs .tab.active{color:var(--card)}.tfEditTray .tfTraySection[hidden]{display:none!important}.hcTrayList{display:grid;gap:0;padding:0}.hcTrayList .hcRow{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:12px;width:100%;min-height:60px;padding:10px 18px;border:0;border-radius:0;background:transparent;color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:pointer;box-sizing:border-box}.hcTrayList .hcRow+.hcRow{box-shadow:inset 0 1px var(--line)}.hcTrayList .hcRowText{display:grid;min-width:0}.hcTrayList .hcRowName{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.hcTrayList .hcRowEnd{display:grid;place-items:center;width:24px;height:24px;color:var(--muted)}.hcTrayList .hcRowEnd svg{display:block;width:20px;height:20px}#app .tfEditTray :is(.hcTrayList,.hcTrayBack){display:none}@media (max-width:620px){#app .tfEditTray .hcTrayTabs{display:none}#app .tfEditTray:not(.hcTrayIn) .hcTrayList{display:grid;flex:none;padding:0}#app .tfEditTray .hcTrayList .hcConfigRow{grid-template-columns:minmax(0,1fr) auto;margin-inline:-10px;width:calc(100% + 20px)}#app .tfEditTray:not(.hcTrayIn) :is(.tfTraySection,.hcHeTabBody){display:none!important}#app .tfEditTray.hcTrayIn .hcHeAreasNote{display:none}#app .tfEditTray.hcTrayIn .hcTrayBack{display:inline-flex;flex:none;width:40px;height:40px;margin-block:-4px}#app .tfEditTray.hcTrayIn .tfTrayHead{justify-content:flex-start;gap:12.8px}#app .tfEditTray.hcTrayIn .tfTrayHead>:last-child:not(.activityTitle){margin-left:auto}}.hcHeTabBody{display:flex;flex-direction:column;gap:8px}.hcHomeTray .hcTrayTabs{margin:0 0 8px}#homeView .grid.tfStack{grid-auto-rows:1px;row-gap:0}#homeView .grid.tfStack>*{align-self:start}.tfTrayPop{position:fixed;z-index:260;right:calc(min(608px,100vw - 56px) + 12px);width:300px;max-width:calc(100vw - 80px);display:grid;gap:2px;padding:10px!important;background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfTrayPop[hidden]{display:none}.tfTrayPopTitle{padding:4px 8px 8px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfTrayPopRow{display:flex;align-items:center;gap:12px;min-height:var(--tile-min);padding:0 8px}.tfTrayPopRow .tfIcon{background-color:var(--hc-icon)}.tfTrayPopName{flex:1;min-width:0;font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app .tfMoreBackdrop:not(.wide) .tfMore{height:min(600px,85dvh)}#app .tfMoreBackdrop:not(.wide) .tfMorePages{flex:1 1 auto;min-height:0;height:auto!important;align-items:stretch}#app .tfMoreBackdrop:not(.wide) .tfMorePage{overflow-y:auto;overscroll-behavior:contain;scrollbar-width:none}#app .tfMoreBackdrop:not(.wide) .tfMorePage[aria-label=Control]>:first-child{margin-top:auto}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace{flex:1 1 auto;height:auto;min-height:224px}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill{min-height:0;container-type:size}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill>.tfCoverArt{width:min(100%,100cqh);height:auto}.tfMorePage[aria-label=Control]>:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink)+:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink){margin-top:14px}.tfMoreSwitch{display:flex;align-items:center;justify-content:center;min-height:0;padding:0;border-radius:0;background:none}.tfMoreSwitch .tfIcon{width:min(240px,100%);height:min(240px,100%);aspect-ratio:1;min-height:0;border:0;padding:0;border-radius:40%;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer;--mdc-icon-size:204px}.tfMoreSwitch.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreSwitch.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}@media (max-width:620px){#app .tfMoreBackdrop{place-items:end center;padding:0 16px max(16px,env(safe-area-inset-bottom,0px))}#app .tfMoreBackdrop .tfMorePair{width:100%;max-height:85dvh}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){width:100%;border-radius:34px;box-shadow:inset 0 0 0 1px var(--line),0 10px 30px #00000047}#app .tfMoreBackdrop .tfMore{padding-top:10px;outline:none}#app .tfMoreBackdrop .tfMore:before{content:"";display:block;position:sticky;top:10px;z-index:2;flex:none;width:36px;height:5px;margin:0 auto;border-radius:3px;background:var(--line)}#app .tfMoreBackdrop .tfMore [data-more-close]{display:none}}#app .tfMoreBackdrop:not(.wide) .tfMore{height:min(604.4px,calc(100dvh - 32px))}#app .tfMoreBackdrop:not(.wide) .tfMorePages{transition:none}#app .tfMoreBackdrop:not(.wide) .tfMorePop>.tfMorePage:not([aria-label=Info]){display:flex;flex-direction:column;gap:14px;overflow:hidden}#app .tfMoreBackdrop:not(.wide) .tfMorePop>.tfMorePage>.tfMoreSpace{flex:1 0 224px;min-height:224px;margin-top:0}.tfMoreCtl{display:flex;flex-direction:column;gap:14px;flex:0 1 auto;min-height:0;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:none}.tfMoreCtl::-webkit-scrollbar{display:none}.tfMoreCtl:empty{display:none}#app .tfMoreBackdrop:not(.wide) .tfMorePages{margin:-14px;padding:14px;gap:28px;scroll-padding-inline:14px}#app .tfMoreBackdrop:not(.wide) .tfMorePop>.tfMorePage:not([aria-label=Info]){overflow:visible;min-height:0}#app .tfMoreBackdrop:not(.wide) :is(.tfMorePages:not(.tfMorePop)>.tfMorePage,.tfMorePop>.tfMorePage[aria-label=Info]){margin:-14px;padding:14px}.tfMoreCtl{margin:-14px;padding:14px}.tfMoreSwap{display:grid}.tfMoreSwap>*{grid-area:1/1}#app .tfMoreSwap>.tfBar{transition:opacity .26s cubic-bezier(.2,0,0,1),translate .32s cubic-bezier(.34,1.2,.64,1),visibility .32s,box-shadow var(--ab-out) var(--ab-ease),transform var(--ab-out) var(--ab-ease)}.tfMorePage[data-mode=colour] .tfMoreSwap>:not(.hue){opacity:0;translate:28px 0;visibility:hidden;pointer-events:none}.tfMorePage:not([data-mode=colour]) .tfMoreSwap>.hue{opacity:0;translate:-28px 0;visibility:hidden;pointer-events:none}@media (prefers-reduced-motion:reduce){#app .tfMoreSwap>.tfBar{transition:none}}#app .tfMorePages.tfMoreHold{overflow-x:hidden}#app .tfMoreBackdrop:not(.wide) .tfMorePop>.tfMorePage>.tfMoreSpace.tfLightSpace{position:relative;flex:1 0 224px;display:flex;align-items:center;justify-content:center;padding:0;border-radius:0;background:none;overflow:visible}.tfVCols{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;width:calc((100% - 16px)*.7 + 16px);height:70%;transition:opacity .22s ease,visibility .22s}.tfVCols:has(>:only-child){width:calc((100% - 16px)*.35)}.tfVCols:has(>:only-child){grid-template-columns:minmax(0,1fr)}.tfVCol,.tfVSwap>*{display:flex;flex-direction:column;gap:8px;min-height:0}.tfVSwap{display:grid;min-height:0}.tfVSwap>*{grid-area:1/1}#app .tfVBar{flex:1;height:auto;min-height:0;border-radius:24px;touch-action:none;box-shadow:var(--hc-hair-all)}#app .tfVBar.bright{background:var(--tile)}#app .tfVBar.bright i{inset:auto 0 0 0;width:auto;background:linear-gradient(180deg,#ffc247,#fa0)}.tfVBar .tfBarIcon{position:absolute;left:14px;top:14px;width:22px;height:22px;color:var(--text);pointer-events:none;--mdc-icon-size:22px}.tfVBar .tfBarIcon>*{width:22px;height:22px}#app .tfVBar.ctf{background:linear-gradient(180deg,#fa0,#ffc247 25%,#fff7ee 55%,#d7e7ff)}#app .tfVBar.huev{background:linear-gradient(180deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}#app .tfVBar b{left:50%;right:auto;bottom:auto;width:30px;height:4px;margin:-2px 0 0 -15px;border-radius:2px}#app .tfVSwap>*{transition:opacity .18s ease,visibility .18s}.tfMorePage[data-mode=colour] .tfVSwap>.tfVWarm{opacity:0;visibility:hidden;pointer-events:none}.tfMorePage:not([data-mode=colour]) .tfVSwap>.tfVColour{opacity:0;visibility:hidden;pointer-events:none}@keyframes tfVLand{0%{opacity:0;scale:.94}55%{opacity:1;scale:1.035}to{opacity:1;scale:1}}.tfMorePage[data-mode=colour] .tfVSwap>.tfVColour,.tfMorePage:not([data-mode=colour]):not([data-mode=dac]) .tfVSwap>.tfVWarm,.tfMorePage[data-mode=dac] .tfLightPad,.tfMorePage:not([data-mode=dac]) .tfVCols{animation:tfVLand .42s cubic-bezier(.34,1.46,.64,1) backwards}.tfVSwap>.tfVColour:only-child{opacity:1!important;translate:0 0!important;visibility:visible!important;pointer-events:auto!important}.tfLightPad{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:24px;overflow:hidden;--tf-dac-pad:100cqh;--tf-dac-max:none;container-type:size;transition:opacity .22s ease,visibility .22s}.tfLightPad>.tfDacPad{width:100%;height:100%}.tfMorePage:not([data-mode=dac]) .tfLightPad,.tfMorePage[data-mode=dac] .tfVCols{opacity:0;visibility:hidden;pointer-events:none}@media (prefers-reduced-motion:reduce){#app .tfVSwap>*,.tfVCols,.tfLightPad{transition:none;animation:none!important}}.tfMoreFoot{display:flex;flex:none;align-items:center;justify-content:space-between;height:40px}.tfMoreFootGap{flex:none;width:40px}.tfMoreFoot .tfMoreDots{margin:0}#app .tfMoreInfoBtn{display:grid;place-items:center;flex:none;width:40px;height:40px;min-height:0;padding:0;border:0;border-radius:20px;background:none;color:var(--muted);cursor:pointer}.tfMoreInfoBtn svg{width:20px;height:20px;fill:currentColor}#app .tfMoreInfoBtn[aria-pressed=true]{background:var(--tile);color:var(--text)}.tfMoreCtl>*{flex:none}.tfMoreField{display:flex;flex-direction:column;gap:6px}.tfMoreLabel{color:var(--muted);font:400 14px/20px var(--font)}.tfMoreRange{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}@media (max-width:620px){.tfMoreRange{grid-template-columns:1fr;gap:14px}}.tfPopBar{box-shadow:var(--hc-hair-all)}.tfPopBar i{overflow:visible}.tfPopBar .tfBarVal{position:absolute;right:14px;top:50%;translate:0 -50%;color:#26221e;font:600 15px/20px var(--font-tile);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.tfPopBar .tfBarVal.mid{left:50%;right:auto;translate:-50% -50%;z-index:1}.tfPopBar .tfBarIcon{position:absolute;left:13px;top:12px;width:22px;height:22px;color:#26221e;pointer-events:none;--mdc-icon-size:22px}.tfPopBar .tfBarIcon>*{width:22px;height:22px}.tfPopBar.fan i{background:linear-gradient(90deg,#4dd4ec,#00b2d6)}.tfPopBar.valve i{background:linear-gradient(90deg,#4aa8ff,#1a7fe6)}.tfPopBar.tiltp i{background:linear-gradient(90deg,#c9a7ef,#8e5cd9)}.tfPopBar.ctf{background:linear-gradient(90deg,#d7e7ff,#fff7ee 45%,#ffc247 75%,#fa0)}.tfPopBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfMoreSwitch .tfIcon{width:min(224px,100%);height:min(224px,100%);--mdc-icon-size:190px}.tfMoreSwitch:not(.on) .tfIcon{box-shadow:var(--hc-hair-all);color:var(--text)}.tfMorePad{--tf-dac-pad:337px;--tf-dac-max:none}.tfAction.tfDac{--tf-dac-max:none}.tfMoreSpace.tfMoreArt{justify-content:center;align-items:center;padding:8px;container-type:size}.tfMoreArt>.tfCoverArt{width:min(100%,100cqh);height:auto;max-width:none}#app .tfMoreCode{width:100%;height:46px;padding:0 16px;border:0;border-radius:16px!important;background:var(--tile);color:var(--text);box-shadow:var(--hc-hair-all);font:400 16px/20px var(--font);box-sizing:border-box}#app .tfMoreCode::placeholder{color:var(--muted);opacity:1}#app .tfMoreCode:focus{outline:2px solid var(--primary);outline-offset:-1px}.tfMoreSpace.tfMoreKeypad{justify-content:flex-start;gap:8px;padding:12px}.tfMoreKeypad .tfMoreCode{flex:none;background:var(--card)}.tfKeypad{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.tfKeypad button{height:46px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);font:500 18px/1 var(--font-tile);cursor:pointer}.tfKeypad button[data-key=clear]{color:var(--muted);font:400 14px/1 var(--font)}.tfKeypad svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfKeypad button:active{scale:.96}@media (max-width:620px){.tfMorePop .tfSeg:has(>:nth-child(5)){flex-wrap:wrap;height:auto}.tfMorePop .tfSeg:has(>:nth-child(5)) button{flex:0 0 auto;height:38px;padding:0 14px}}[data-icon-for]>svg.hcGlyph{display:block;flex:none;width:var(--mdc-icon-size,24px);height:var(--mdc-icon-size,24px);overflow:visible}.tfMore,.tfMoreSideInner{--hc-pop-bg:var(--card);--hc-head-top:0px}.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{--hc-pop-bg:var(--bg);--hc-head-top:-20px}@media (max-width:620px){#app .tfMoreBackdrop .tfMore{--hc-head-top:19px}#app .tfMoreBackdrop .tfMore.wide{--hc-head-top:25px}#app .tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{--hc-head-top:0px}}:is(.tfMore,.tfMoreSideInner)>.tfMoreHead{position:sticky;top:var(--hc-head-top);z-index:1;flex:none;background:var(--hc-pop-bg)}:is(.tfMore,.tfMoreSideInner)>.tfMoreHead:before,:is(.tfMore,.tfMoreSideInner)>.tfMoreHead:after{content:"";position:absolute;left:0;right:0;pointer-events:none}:is(.tfMore,.tfMoreSideInner)>.tfMoreHead:before{bottom:100%;height:80px;background:var(--hc-pop-bg);box-shadow:-40px 0 0 var(--hc-pop-bg),40px 0 0 var(--hc-pop-bg)}:is(.tfMore,.tfMoreSideInner)>.tfMoreHead:after{top:100%;height:24px;background:linear-gradient(var(--hc-pop-bg),color-mix(in srgb,var(--hc-pop-bg) 0%,transparent));opacity:0}@keyframes hcHeadFade{to{opacity:1}}@supports (animation-timeline:scroll()){:is(.tfMore,.tfMoreSideInner)>.tfMoreHead:after{animation:hcHeadFade linear both;animation-timeline:scroll(nearest block);animation-range:0 24px}}@media (min-width:621px){#app .tfMoreBackdrop:not(.wide,.hcOops,.hcSearchPop) .tfMore{width:480px;height:min(660px,calc(100dvh - 32px))}}@media (max-width:620px){#app .tfMoreBackdrop:not(.wide,.hcOops,.hcSearchPop) .tfMore{height:85dvh}}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){box-shadow:none;border:1px solid var(--line)}@media (max-width:620px){#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){box-shadow:0 10px 30px #00000047}}`, Th = `.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:14px;aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:18px;border-radius:28px;overflow:hidden}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbChip{width:40px;height:40px;border-radius:16px}.wbSquare .wbName{font-size:14px;line-height:1.4}.wbSquare .wbSub{font-size:16px}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:10px}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846;border-radius:34px}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:1;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);fill-opacity:.14}.wbChart .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:24px minmax(0,1fr) 22px;grid-template-areas:". sun" "y plot" ". x";column-gap:8px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wb[data-style=smooth] :is(.wbWx,.wbSky):after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;border-radius:inherit;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1.3 0 0 0 -.15 1.3 0 0 0 -.15 1.3 0 0 0 -.15 0 0 0 0 1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:140px 140px;mix-blend-mode:overlay;opacity:.3}.wbBaseRows{display:flex;flex-direction:column;gap:4px;width:100%}.wbBaseRow{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbBaseRow>span:last-child{color:var(--text);white-space:nowrap}.wbBaseRow>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRadar{position:relative;flex:1;align-self:stretch;min-height:80px;border-radius:var(--r-inner);overflow:hidden;background-color:var(--tile);background-image:linear-gradient(color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px);background-size:24px 24px;background-position:center}.wbRadarRing{position:absolute;left:50%;top:50%;width:64%;aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 20%,transparent)}.wbRadarRing:after{content:"";position:absolute;top:25%;right:25%;bottom:25%;left:25%;border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 14%,transparent)}.wbRadarHome{position:absolute;left:50%;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 3px var(--tile)}.wbRadarMap,.wbRadarCam{background-image:none}.wbRadarLayer{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden}.wbRadarLayer img{position:absolute;width:256px;height:256px;max-width:none;pointer-events:none}.wbRadarLayer[hidden]{display:none}.wbRadarRain{opacity:.85}.wbRadarMap .wbRadarHome{z-index:2}.wbRadarTime,.wbRadarCredit{position:absolute;z-index:2;white-space:nowrap}.wbRadarTime{left:8px;bottom:6px;padding:1px 6px;border-radius:8px;background:color-mix(in srgb,var(--tile) 78%,transparent);color:var(--text);font:600 11px/16px var(--font-tile)}.wbRadarTime:empty{display:none}.wbRadarCredit{right:6px;top:4px;max-width:calc(100% - 12px);overflow:hidden;text-overflow:ellipsis;color:var(--muted);font:400 9px/12px var(--font)}.wbRadarNote{position:absolute;top:0;right:0;bottom:0;left:0;z-index:2;display:grid;place-items:center;padding:0 12px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbRadarCam img{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;object-fit:cover}.wbWx.wbLineIcon{display:grid;place-items:center;background:var(--tile);color:var(--text)}.wbWx.wbLineIcon>svg{width:64%;height:64%}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:18px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:14px 16px 12px 12px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbAsNow{display:none}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}.wbNextHours{display:none;justify-content:space-between;align-items:center;gap:8px;min-width:0}.wbHour{display:flex;flex-direction:column;align-items:center;gap:8px;min-width:0}.wbHourTime{color:var(--muted);font:400 14px/20px var(--font);white-space:nowrap}.wbHourTemp{font:400 18px/20px var(--font-tile);white-space:nowrap}.wbHour .wbWx.wbS40{width:40px;height:40px;border-radius:16px}.wbSummary{position:relative;flex:1 1 0;min-height:0;margin-top:-12px;container:wbsum/size}.wbSummaryText{position:absolute;top:12px;left:0;right:0;margin:0;color:var(--text);font:400 16px/22px var(--font);display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}@container wbsum (height < 56px){.wbSummaryText{-webkit-line-clamp:1}}@container wbsum (height < 34px){.wbSummaryText{display:none}}@container wb-card (width < 480px){.wbColumn .wbWx.wbS60{width:48px;height:48px;border-radius:16px}}@container wb-card (width < 400px){.wbCard.wbWeather{gap:16px;padding:18px 18px 10px}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumn .wbWx.wbS60{width:40px;height:40px;border-radius:14px}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbStripScroll.wbPaged{container-type:inline-size;scroll-snap-type:x mandatory;overscroll-behavior-x:contain}.wbStripScroll.wbPaged.wbHeld{scroll-snap-type:none}.wbPaged .wbStrip{position:relative;min-width:0;padding:0}.wbSnap{position:absolute;top:0;width:1px;height:1px;scroll-snap-align:start;pointer-events:none}.wbMark.wbLast{align-items:flex-end;transform:translate(-100%)}.wbPaged .wbTimes .wbMark.wbFirst{font:400 14px/20px var(--font)}.wbPaged .wbTimes .wbMark.wbNowMark{font:600 14px/20px var(--font-tile)}.wbSky .wbPast{position:absolute;top:0;bottom:0;left:0;background:var(--card);opacity:.45;pointer-events:none}.wbSky .wbNowLine{position:absolute;top:0;bottom:0;width:2px;margin-left:-1px;background:var(--text);opacity:.55;pointer-events:none}.wbSky.wbLineSky{background:var(--tile);color:var(--text)}.wbLineArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbLineArt .wbLineArc{fill:none;stroke:var(--text);stroke-width:1.5;stroke-linejoin:round;vector-effect:non-scaling-stroke;opacity:.7}.wbLineArt .wbLineHorizon{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.35}.wbLineArt .wbLineNight{fill:var(--text);opacity:.07}.wbLineArt .wbLineEdge{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.3}.wbLineTime{position:absolute;top:calc(80% + 4px);transform:translate(-50%);color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.wbLineNow{position:absolute;width:26px;height:26px;transform:translate(-50%,-50%);border-radius:50%;background:var(--tile);pointer-events:none}.wbLineNow>svg,.wbLineGlyph>svg{display:block;width:100%;height:100%}.wbLineGlyph{position:absolute;top:calc(50% - 14px);width:28px;height:28px;transform:translate(-50%);pointer-events:none}.wbLineGlyph.wbFirst{transform:none}.wbLineGlyph.wbLast{transform:translate(-100%)}.wbSky .wbMidnight{position:absolute;top:0;bottom:0;width:0;border-left:1.5px dashed var(--text);opacity:.5;pointer-events:none}.wbDays{position:absolute;top:36px;left:0;z-index:1;display:flex;pointer-events:none}.wbDaySpan{flex:none;min-width:0}.wbDayName{position:sticky;left:8px;margin-left:8px;height:26px;min-height:0;padding:0 10px;border:0;background:color-mix(in srgb,var(--card) 82%,transparent);color:var(--text);font:600 13px/26px var(--font-tile);white-space:nowrap;cursor:pointer;pointer-events:auto}.wb .wbDayName{border-radius:13px!important;font-family:var(--font-tile)!important}.wbViews button{padding:2px 10px;font-size:13px}.wbBars .wbDayBars{flex:1 1 0;min-height:160px;display:flex;flex-direction:column;padding:0 18px;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin}.wbBars.wbTabbed .wbDayBars{min-height:206px}.wbDayBar{flex:1 0 auto;display:grid;grid-template-columns:minmax(56px,auto) 40px 36px minmax(0,1fr) 36px;align-items:center;column-gap:12px;min-height:48px;box-shadow:inset 0 -.4px 0 var(--line)}.wbDayBar:last-child{box-shadow:none}.wbRangeDay{color:var(--text);font:600 14px/20px var(--font-tile);white-space:nowrap}.wbRangeLo{color:var(--muted);text-align:right;font:400 16px/20px var(--font);font-variant-numeric:tabular-nums}.wbRangeHi{color:var(--text);text-align:right;font:400 16px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbRangeTrack{position:relative;height:6px;border-radius:3px;background:var(--tile)}.wbRangeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:3px}.wbRangeNow{position:absolute;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:#fff;box-shadow:0 0 0 2px var(--card)}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbBars .wbDayBars{padding:0 8px;min-height:380px}.wbBars.wbTabbed .wbDayBars{min-height:426px}.wbDayBar{column-gap:8px}.wbStripScroll{min-height:380px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:16px;overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbSunTile .wbZone{display:block}.wbSunZone{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff;transition:background 1s ease}.wbSunTrack{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbSunBand{fill:#fff;fill-opacity:.1}.wbSunBand.wbSunDay{fill-opacity:.14}.wbSunBand.wbSunDone{fill-opacity:.85}.wbSunDot{fill:#ffd84a}.wbSunDot.wbSunNight{fill:#9aa3c7}.wbSunCount{position:absolute;top:22px;right:22px;bottom:22px;left:22px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;padding-bottom:14px}.wbSunLeft{font:500 clamp(28px,calc(16cqw * var(--wb-k,1)),36px)/1.1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums;white-space:nowrap}.wbSunWord{font:400 13px/18px var(--font);opacity:.85}.wbSunAt{position:absolute;bottom:32px;font:500 12px/16px var(--font);opacity:.85;font-variant-numeric:tabular-nums}.wbSunRise{left:32px}.wbSunSet{right:32px}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}.wbMoonCaption{gap:8px}.wbMoonCaption span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbMoonCaption span:last-child{flex:none}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbSea{position:relative;flex:1;min-height:0;border-radius:16px;overflow:hidden;--wb-sea-inset:clamp(8.88px,calc(4.76cqw * var(--wb-k,1)),12px)}.wbSeaArt{position:absolute;top:0;right:0;bottom:0;left:0;display:block;width:100%;height:100%;image-rendering:pixelated}.wbSeaFact{position:absolute;top:clamp(7px,calc(3.97cqw * var(--wb-k,1)),10px);inset-inline:var(--wb-sea-inset);color:#26221e;font:600 clamp(9.44px,calc(5.47cqw * var(--wb-k,1)),13.78px)/1.23 var(--font-tile)}.wbSeaValue{position:absolute;bottom:var(--wb-sea-inset);inset-inline-start:var(--wb-sea-inset);color:#fff;text-shadow:0 0 2px rgba(0,0,0,.6),0 1px 3px rgba(0,0,0,.5)}.wbSeaValue .wbUnitV{color:inherit}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbTrend{position:relative;width:100%;height:100%;min-height:0}.wbTrendPlot{position:absolute;top:22px;right:0;bottom:24px;left:0}.wbTrendPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbTrendLine{fill:none;stroke:var(--text);stroke-width:2;stroke-linejoin:round;stroke-linecap:round;opacity:.8}.wbTrendDot{position:absolute;width:7px;height:7px;margin:-3.5px 0 0 -3.5px;border-radius:50%;background:var(--card);box-shadow:0 0 0 2px var(--text)}.wbTrendDot.wbToday{width:11px;height:11px;margin:-5.5px 0 0 -5.5px;background:var(--primary);box-shadow:0 0 0 3px var(--card)}.wbAvgValue{position:absolute;transform:translate(-50%,calc(-100% - 8px));color:var(--muted);font:400 10px/1 var(--font-tile);white-space:nowrap}.wbAvgValue.wbToday{color:var(--text);font-size:12px;font-weight:600}.wbTrendAvg{position:absolute;right:0;transform:translateY(4px);color:var(--muted);font:400 10px/1 var(--font-tile)}.wbTrendDays{position:absolute;left:0;right:0;bottom:0;height:16px}.wbAvgDay{position:absolute;bottom:0;transform:translate(-50%);color:var(--muted);font:400 11px/16px var(--font-tile)}.wbAvgDay.wbToday{color:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}.wbZoned{gap:14px}.wbZone{position:relative;flex:none;height:198px;display:flex;align-items:center;justify-content:center;border-radius:16px;overflow:hidden}.wbCallouts{display:none;flex-direction:column;gap:4px;margin-top:-6px}.wbCallout{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbCallout>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbCallout>span:last-child{flex:none;color:var(--text);white-space:nowrap}.wbZone>.wbSunSky{flex:1;align-self:stretch;border-radius:0}.wbZone>.wbMoonBox{flex:none;height:150px}.wbBase .wbZone{align-items:flex-end;justify-content:flex-start}.wbZone>.wbTapeRow{align-self:stretch;height:100%}.wbItem[data-xl] .wbCallouts{display:flex}.wbUv .wbZone{display:block}.wbUvArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbUvBig{position:absolute;right:0;bottom:0;display:flex;flex-direction:column;align-items:flex-end}.wbUvNum{font:500 64px/.9 var(--font-tile);letter-spacing:-.03em;color:var(--text);font-variant-numeric:tabular-nums}.wbUvWord{margin-top:6px;font:400 14px/20px var(--font);color:var(--muted)}.wbAqSmile .wbZone{display:block}.wbAqFill{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff}.wbAqFace{position:absolute;left:12px;top:12px;width:min(140px,calc(100% - 60px));height:auto;aspect-ratio:1;fill:none;stroke:currentColor;stroke-width:3.4;stroke-linecap:round;stroke-linejoin:round}.wbAqFace .wbAqEyes{stroke-width:5}.wbAqBig{position:absolute;right:14px;bottom:12px;display:flex;flex-direction:column;align-items:flex-end}.wbAqNum{font:500 56px/.9 var(--font-tile);letter-spacing:-.03em;font-variant-numeric:tabular-nums}.wbAqUnit{margin-top:4px;font:500 14px/20px var(--font)}.wbPollenAir{position:absolute;top:0;right:0;bottom:62px;left:0;overflow:hidden;pointer-events:none}.wbFloat{position:absolute;left:-12%;animation:wbFloat linear infinite}.wbBob{display:block;animation:wbBob ease-in-out infinite alternate}@keyframes wbFloat{0%{left:-12%}to{left:106%}}@keyframes wbBob{0%{transform:translateY(-6px) rotate(-14deg)}to{transform:translateY(8px) rotate(16deg)}}.wbFloat svg{display:block}.wbSeed svg{width:calc(20px * var(--s));height:calc(28px * var(--s))}.wbGrain svg{width:calc(10px * var(--s));height:calc(10px * var(--s))}.wbStem svg{width:calc(9px * var(--s));height:calc(26px * var(--s))}.wbSeed{color:var(--text);opacity:.7}.wbGrain{color:#e9c46a;opacity:.85}.wbStem{color:#a3b18a;opacity:.75}#app.light .wbGrain{color:#c99a1e}#app.light .wbStem{color:#7d8c5f}@media (prefers-reduced-motion:reduce){.wbFloat,.wbBob{animation:none}.wbFloat{left:var(--x)}}.wbPush{display:block;transition:transform .35s cubic-bezier(.2,.8,.3,1)}.wbCallout.wbAdvice>span:first-child{color:var(--text)}.wbCard.wbSquare.wbGraphCard{height:100%;min-height:0}.wbGraphCard .wbHead .wbBack{margin:-4px -6px 0 auto}.wbGraphCard .wbRangeBtn{align-self:flex-start;display:inline-flex;align-items:center;gap:6px;max-width:100%;height:32px;padding:0 8px 0 10px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:600 12px/16px var(--font-tile);cursor:pointer}.wb button.wbRangeBtn{border-radius:12px!important}.wbRangeBtn>span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRangeBtn .wbIcon{flex:none;width:16px;height:16px;fill:currentColor}.wbRangeBtn[aria-expanded=true]{background:var(--bright);color:var(--on-bright)}.wbItem:has(.wbRangePick){position:relative;z-index:30}.wbRangePick{position:absolute;top:116px;left:18px;z-index:30;display:flex;flex-direction:column;gap:12px;width:248px;box-sizing:border-box;padding:12px;border-radius:24px;background:var(--card);box-shadow:var(--hc-hair-all),0 18px 40px #00000059}.wbRangePick.wbPickRight{left:auto;right:18px}.wbRangePresets{display:flex;flex-direction:column;gap:2px}.wb .wbRangePreset{height:32px;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--text);font:400 14px/20px var(--font);text-align:left;cursor:pointer}.wb .wbRangePreset:hover{background:var(--tile)}.wb .wbRangePreset[aria-pressed=true]{background:var(--bright);color:var(--on-bright);font-weight:600}.wbRangeDates{display:grid;grid-template-columns:1fr 1fr;gap:8px;padding-top:12px;box-shadow:inset 0 .4px 0 var(--line)}.wbRangeDates label{display:grid;gap:4px;min-width:0;color:var(--muted);font:400 12px/16px var(--font)}.wbRangeDates input{width:100%;min-width:0;height:32px;box-sizing:border-box;padding:0 6px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:400 12px/16px var(--font);color-scheme:inherit}.wb .wbRangeApply{height:32px;padding:0 14px;border:0;border-radius:999px!important;background:var(--bright);color:var(--on-bright);font:600 12px/16px var(--font-tile);cursor:pointer}.wbGraphCard .wbGraph{flex:1;height:auto;min-height:0}.wb.wbPopup{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073;overscroll-behavior:contain;container-type:normal}.wb.wbPopup[hidden]{display:none}.wbPopupBox{position:relative;width:520px;max-width:100%}.wbPopup .wbCard.wbSquare.wbGraphCard{height:auto;aspect-ratio:auto;box-shadow:var(--hc-hair-all)}.wbPopup .wbGraphCard .wbGraph{flex:none;height:auto}@media (max-width:620px){.wb.wbPopup{place-items:end stretch;padding:0}.wbPopupBox{width:100%}.wbPopup .wbCard.wbSquare.wbGraphCard{border-radius:28px 28px 0 0}}`, Lh = '#app .mvPv{position:relative;transform:perspective(var(--pv-persp)) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) scale(var(--sc,1));transition:transform var(--pv-ret) var(--pv-ease)}#app .mvPv.mvMoving{transition:transform 70ms linear}#app .mvPv:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;opacity:0;mix-blend-mode:soft-light;background:radial-gradient(circle at var(--mx,50%) var(--my,50%),rgba(255,255,255,var(--pv-shine)),transparent var(--pv-size));transition:opacity var(--pv-ret) ease}#app .mvPv.mvLit:after{opacity:1}#app .tfBar{--mv-c:var(--light-soft,var(--primary));transform-origin:center;transition:box-shadow var(--ab-out) var(--ab-ease),transform var(--ab-out) var(--ab-ease)}#app .tfBar.mvHover{box-shadow:0 0 var(--ab-blur) var(--ab-spread) color-mix(in srgb,var(--mv-c) var(--ab-str),transparent);transition-duration:var(--ab-in)}#app .tfBar.mvHold{box-shadow:0 0 var(--ab-blur2) var(--ab-spread2) color-mix(in srgb,var(--mv-c) var(--ab-str2),transparent);transform:var(--ab-grow);transition-duration:var(--ab-in)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>:is(svg,ha-icon,ha-state-icon,span){transition:scale var(--ih-dur) var(--ih-ease)}@media (hover:hover){#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-s)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover:before{opacity:1}}:where(#app button.tfIcon,#app .tfBack,#app .tfEditChip,#app .tfTrayBtn,#app [data-wb=graph-close]){position:relative}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;background:color-mix(in srgb,currentColor var(--ih-tint),transparent);opacity:0;transition:opacity var(--ih-dur) var(--ih-ease)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):active>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-p)}#app .mvSegInd{position:absolute;z-index:0;pointer-events:none}#app .mvSegMoving>button{position:relative;z-index:1;background-color:transparent!important;box-shadow:none!important;transition:none!important}#app .tfMoreBackdrop{-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}#app .toast.tfToast{min-height:58px;box-sizing:border-box;padding:9px 18px 9px 9px;gap:14px;border-radius:29px;font-size:18px;line-height:1.2}#app .toast .mvTick{display:grid;place-items:center;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--mv-ok);color:#fff}#app .toast .mvTick svg{width:26px;height:26px;fill:none;stroke:currentColor;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}#app .toast .mvToastText{font-weight:600}#app .toast .toastAction{font-size:16px;margin-left:2px}#app .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}#app{--ol-l:68%;--mv-ok:#4cc38a}#app.light{--ol-l:48%;--mv-ok:#1f7a4d}#app .tfAreaPanel:has(>.mvEdge){isolation:isolate;position:relative}#app .tfRoomTile.tfBoardItem:has(>.mvEdge){isolation:isolate}#app .mvEdge,#app .mvEdgeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity var(--ol-in) ease-out}#app .mvEdgeFill{z-index:-1;background:hsl(var(--ol-h) 97% var(--ol-l));mix-blend-mode:soft-light;opacity:clamp(0,calc(var(--ol-fill) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-fill));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%)}#app .mvEdge{z-index:5}#app .mvEdge:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l));opacity:clamp(0,calc(var(--ol-border) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-border));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%));mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%))}#app .mvEdge>i{position:absolute;top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;border-radius:inherit;mix-blend-mode:plus-lighter;opacity:clamp(0,calc(var(--ol-glow) * (var(--edge-proximity,0) - var(--ol-esens)) / (100 - var(--ol-esens))),var(--ol-glow));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}#app .mvEdge>i:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;--s:var(--ol-size);box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l) / 60%),inset 0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),inset 0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),inset 0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(22.4px*var(--s)) calc(1.6px*var(--s)) hsl(var(--ol-h) 97% var(--ol-l) / 10%)}#app :not(.mvLitEdge)>:is(.mvEdge,.mvEdgeFill){opacity:0;transition:opacity var(--ol-out) ease-out}@media (prefers-reduced-motion:reduce){#app .mvPv{transform:none!important}#app .mvPv:after{display:none}#app .tfBar.mvHold{transform:none}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>*{scale:none!important}}#app .tfBoardItem.mvDrag{scale:none}#app.tfEditing.tfBoardReady .tfBoardItem:not(.tfDragging){transition:left .42s cubic-bezier(.34,1.46,.64,1),top .42s cubic-bezier(.34,1.46,.64,1),height .42s cubic-bezier(.34,1.46,.64,1)}', Dh = `<main id="app"><div class="shell">
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
`, jd = "homecore-theme", Eh = {
  home: '<path d="M3 10.5L12 3L21 10.5V21H3V10.5Z"/>',
  settings: '<path d="M21 4H14"/><path d="M10 4H3"/><path d="M21 12H12"/><path d="M8 12H3"/><path d="M21 20H16"/><path d="M12 20H3"/><path d="M14 2V6"/><path d="M8 10V14"/><path d="M16 18V22"/>',
  fullscreen: '<path d="M8 3H5C3.9 3 3 3.9 3 5V8"/><path d="M21 8V5C21 3.9 20.1 3 19 3H16"/><path d="M3 16V19C3 20.1 3.9 21 5 21H8"/><path d="M16 21H19C20.1 21 21 20.1 21 19V16"/>',
  back: '<path d="M15 18L9 12L15 6"/>'
}, Bh = (n) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (Eh[n] || "") + "</svg>", zd = {
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
  const b = { home: g("homeView"), settings: g("settingsView") }, C = g("homeNav"), j = g("settingsNav");
  function M(ot) {
    Object.entries(b).forEach(([nt, K]) => K.classList.toggle("active", nt === ot)), C.classList.toggle("active", ot === "home"), j.classList.toggle("active", ot === "settings");
  }
  C.addEventListener("click", () => M("home")), j.addEventListener("click", () => M("settings")), g("settingsBack").addEventListener("click", () => M("home"));
  function T(ot) {
    const nt = ot === "light";
    n.querySelectorAll(".themeBtn").forEach((K) => K.classList.toggle("active", K.dataset.theme === ot)), y.classList.toggle("light", nt), i(nt);
  }
  T(zd.get(jd) === "light" ? "light" : "dark"), n.querySelectorAll(".themeBtn").forEach((ot) => ot.addEventListener("click", () => {
    T(ot.dataset.theme), zd.set(jd, ot.dataset.theme);
  }));
  const q = g("tvNav");
  d || (q.hidden = !0), q.addEventListener("click", () => p());
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
function Gd(n = /* @__PURE__ */ new Date()) {
  const i = [];
  for (let d = 0; d <= 96; d++) {
    const p = +n - (96 - d) * 15 * 60 * 1e3;
    i.push([p, pc(new Date(p))]);
  }
  return i;
}
function Oh({ onChange: n }) {
  const i = {}, d = {}, p = (K, O, it, dt) => {
    i[K] = { entity_id: K, state: it, attributes: dt, last_changed: new Date(Date.now() - 18e6).toISOString() }, d[K] = O;
  }, g = (K, O, it) => {
    const dt = i[K], wt = O ?? dt.state;
    i[K] = { ...dt, state: wt, attributes: { ...dt.attributes, ...it }, last_changed: wt === dt.state ? dt.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, y = (K, O, it, dt) => p("binary_sensor." + Ce + (K ? K + "_" : "") + Pn(O), K, dt ? "on" : "off", { friendly_name: O, device_class: it });
  Object.entries(Hh).forEach(([K, O]) => {
    if (O.temperature != null && p("sensor." + Ce + K + "_temperature", K, String(O.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), O.humidity != null && p("sensor." + Ce + K + "_humidity", K, String(O.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), O.vacuum && p("vacuum." + Ce + "robot", K, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), O.climate && p("climate." + Ce + K, K, "heat", {
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
      const [it, dt] = O.fan;
      p("fan." + Ce + K + "_" + Pn(it), K, "on", dt != null ? { friendly_name: it, percentage: dt, percentage_step: 10, oscillating: !0, direction: "forward", supported_features: 55 } : { friendly_name: it, supported_features: 48 });
    }
    if (O.waterHeater && p("water_heater." + Ce + K, K, "eco", { friendly_name: "Water heater", current_temperature: 55, temperature: 60, min_temp: 40, max_temp: 75, target_temp_step: 1, operation_mode: "eco", operation_list: ["off", "eco", "electric", "gas"], away_mode: "off" }), O.valvePos) {
      const [it, dt] = O.valvePos;
      p("valve." + Ce + K + "_" + Pn(it), K, dt == null || dt ? "open" : "closed", { friendly_name: it, device_class: "water", supported_features: 3 | (dt == null ? 0 : 12), ...dt == null ? {} : { current_position: dt } });
    }
    if (O.garage && p("cover." + Ce + K + "_" + Pn(O.garage), K, "closed", { friendly_name: O.garage, device_class: "garage", supported_features: 3 }), O.cover) {
      const [it, dt, wt, st] = O.cover;
      p("cover." + Ce + K + "_" + Pn(it), K, wt ? "open" : "closed", { friendly_name: it, device_class: dt, current_position: wt, ...st != null ? { current_tilt_position: st } : {} });
    }
    if (O.humidifier && p("humidifier." + Ce + K, K, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: O.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), O.solar && (p("sensor." + Ce + K + "_solar_power", K, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), p("sensor." + Ce + K + "_solar_today", K, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), O.valve && p("valve." + Ce + K + "_" + Pn(O.valve), K, "closed", { friendly_name: O.valve, device_class: "water" }), O.door && y(K, O.door, "door", O.doorOpen), O.window && y(K, O.window, "window", !1), O.motion && y(K, O.motion, "motion", !1), O.plant) {
      const [it, dt, wt, st, Z] = O.plant, Y = Ce + Pn(it), H = (Pt, ct, U, It, V) => p("sensor." + Y + "_" + Pt, K, String(U), { friendly_name: ct, device_class: V, state_class: "measurement", unit_of_measurement: It, plant_low: U < In[Pt][0], plant_high: U > In[Pt][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[Pt] });
      H("moisture", "Moisture", dt, "%", "moisture"), H("light", "Light", wt, "lx", "illuminance"), H("temperature", "Temperature", st, "°C", "temperature"), H("fertility", "Fertility", Z, "µS/cm", "conductivity");
      const xt = Object.entries({ moisture: dt, light: wt, temperature: st, fertility: Z }).filter(([Pt, ct]) => ct < In[Pt][0] || ct > In[Pt][1]).map(([Pt, ct]) => Pt + (ct < In[Pt][0] ? " low" : " high"));
      p("plant." + Y, K, xt.length ? "problem" : "ok", { friendly_name: it, moisture: dt, brightness: wt, temperature: st, conductivity: Z, problem: xt.join(", ") || "none" });
    }
  }), p("alarm_control_panel." + Ce + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 39, code_format: "number", code_arm_required: !1, changed_by: "Matt" }), y(null, "Front door", "door", !1), y(null, "Smoke alarm", "smoke", !1), p("sensor." + Ce + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const b = {}, C = {};
  let j = null;
  function M() {
    const K = /* @__PURE__ */ new Date();
    Object.keys(i).forEach((O) => {
      O.endsWith("_solar_power") && (i[O] = { ...i[O], state: pc(K).toFixed(2) }), O.endsWith("_solar_today") && (i[O] = { ...i[O], state: Nh(K).toFixed(1) });
    });
  }
  M();
  let T = 0;
  function q() {
    let K = !1;
    const O = ++T % 10 === 0, it = (st, Z, Y) => {
      g(st, Z, Y), K = !0;
    };
    Object.entries(b).forEach(([st, Z]) => {
      const Y = i[st].attributes.current_position, H = Y < Z ? Math.min(Z, Y + 10) : Math.max(Z, Y - 10);
      H === Z && delete b[st], it(st, H === Z ? H === 0 ? "closed" : "open" : Z > Y ? "opening" : "closing", { current_position: H });
    }), Object.entries(C).forEach(([st, Z]) => {
      const Y = i[st].attributes.current_tilt_position, H = Y < Z ? Math.min(Z, Y + 25) : Math.max(Z, Y - 25);
      H === Z && delete C[st], it(st, null, { current_tilt_position: H });
    }), Object.keys(i).filter((st) => st.startsWith("climate.")).forEach((st) => {
      const Z = i[st], Y = Z.attributes, H = Y.current_temperature, xt = (Z.state === "heat" || Z.state === "auto") && H < Y.temperature - 0.05, Pt = (Z.state === "cool" || Z.state === "auto") && H > Y.temperature + 0.05, ct = Z.state === "off" ? "off" : xt ? "heating" : Pt ? "cooling" : "idle", U = O ? Math.round((H + (xt ? 0.1 : Pt ? -0.1 : 0)) * 10) / 10 : H;
      (U !== H || ct !== Y.hvac_action) && it(st, null, { current_temperature: U, hvac_action: ct });
    }), Object.keys(i).filter((st) => st.startsWith("humidifier.")).forEach((st) => {
      const Z = i[st], Y = Z.attributes, H = Y.current_humidity, xt = Z.state === "on" && H < Y.humidity, Pt = xt && O ? H + 1 : H, ct = Z.state !== "on" ? "off" : xt ? "humidifying" : "idle";
      if (Pt !== H || ct !== Y.action) {
        it(st, null, { current_humidity: Pt, action: ct });
        const U = "sensor." + Ce + d[st] + "_humidity";
        i[U] && it(U, String(Pt));
      }
    });
    const dt = i["vacuum." + Ce + "robot"], wt = dt.attributes;
    dt.state === "cleaning" && O && it(dt.entity_id, null, { battery_level: Math.max(5, wt.battery_level - 1) }), dt.state === "returning" && it(dt.entity_id, "docked", {}), dt.state === "docked" && wt.battery_level < 100 && it(dt.entity_id, null, { battery_level: Math.min(100, wt.battery_level + 2) }), j && Date.now() - j.at > 5e3 && (it("alarm_control_panel." + Ce + "house", "armed_" + j.mode, {}), j = null), K && n();
  }
  const G = setInterval(q, 1e3), J = setInterval(() => {
    M(), n();
  }, 60 * 1e3);
  function ot(K, O, it) {
    const dt = it == null ? void 0 : it.entity_id;
    if (!i[dt]) return !1;
    const wt = i[dt], st = wt.attributes, Z = (Y, H) => g(dt, Y, H);
    if (K === "climate" && (O === "set_temperature" && it.temperature != null && Z(null, { temperature: Math.max(st.min_temp, Math.min(st.max_temp, it.temperature)) }), O === "set_hvac_mode" && Z(it.hvac_mode, it.hvac_mode === "off" ? { hvac_action: "off" } : {}), O === "toggle" && Z(wt.state === "off" ? "heat" : "off", wt.state === "off" ? {} : { hvac_action: "off" }), O === "set_temperature" && it.target_temp_low != null && Z(null, { target_temp_low: it.target_temp_low, target_temp_high: it.target_temp_high }), O === "set_fan_mode" && Z(null, { fan_mode: it.fan_mode }), O === "set_swing_mode" && Z(null, { swing_mode: it.swing_mode }), O === "set_preset_mode" && Z(null, { preset_mode: it.preset_mode }), O === "set_humidity" && Z(null, { humidity: Math.max(st.min_humidity, Math.min(st.max_humidity, it.humidity)) })), K === "fan" && (O === "set_percentage" && Z(it.percentage > 0 ? "on" : "off", { percentage: it.percentage }), O === "oscillate" && Z(null, { oscillating: it.oscillating }), O === "set_direction" && Z(null, { direction: it.direction }), (O === "turn_on" || O === "turn_off" || O === "toggle") && Z(O === "turn_on" || O === "toggle" && wt.state !== "on" ? "on" : "off")), K === "water_heater" && (O === "set_temperature" && Z(null, { temperature: Math.max(st.min_temp, Math.min(st.max_temp, it.temperature)) }), O === "set_operation_mode" && Z(it.operation_mode, { operation_mode: it.operation_mode }), O === "set_away_mode" && Z(null, { away_mode: it.away_mode ? "on" : "off" }), O === "turn_on" || O === "turn_off" || O === "toggle")) {
      const Y = O === "turn_on" || O === "toggle" && wt.state === "off";
      Z(Y ? "eco" : "off", { operation_mode: Y ? "eco" : "off" });
    }
    if (K === "cover") {
      const Y = O === "open_cover" ? 100 : O === "close_cover" ? 0 : O === "set_cover_position" ? it.position : O === "toggle" ? st.current_position > 0 ? 0 : 100 : null;
      O === "stop_cover" && (delete b[dt], delete C[dt], Z(st.current_position === 0 ? "closed" : "open")), Y != null && st.current_position == null ? Z(Y > 0 ? "open" : "closed") : Y != null && Y !== st.current_position && (b[dt] = Y, Z(Y > st.current_position ? "opening" : "closing"));
      const H = O === "open_cover_tilt" ? 100 : O === "close_cover_tilt" ? 0 : O === "set_cover_tilt_position" ? it.tilt_position : null;
      O === "stop_cover_tilt" && delete C[dt], H != null && st.current_tilt_position != null && H !== st.current_tilt_position && (C[dt] = H);
    }
    if (K === "humidifier" && (O === "set_humidity" && Z(null, { humidity: Math.max(st.min_humidity, Math.min(st.max_humidity, it.humidity)) }), O === "set_mode" && Z(null, { mode: it.mode }), O === "turn_on" || O === "turn_off" || O === "toggle")) {
      const Y = O === "turn_on" || O === "toggle" && wt.state !== "on";
      Z(Y ? "on" : "off", { action: Y ? "idle" : "off" });
    }
    if (K === "vacuum" && (O === "start" && Z("cleaning", { rooms: it.rooms || st.rooms }), O === "pause" && Z("paused"), O === "return_to_base" && Z("returning", { rooms: [] }), O === "locate" && Z(null, { located: Date.now() }), O === "set_rooms" && Z(null, { rooms: it.rooms })), K === "valve") {
      const Y = O === "open_valve" || O === "toggle" && wt.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(O) && Z(Y ? "open" : "closed", st.current_position != null ? { current_position: Y ? 100 : 0 } : {}), O === "set_valve_position" && Z(it.position > 0 ? "open" : "closed", { current_position: it.position });
    }
    if (K === "alarm_control_panel") {
      O === "alarm_disarm" && (j = null, Z("disarmed", { changed_by: "Matt" }));
      const Y = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night", alarm_arm_vacation: "vacation" }[O];
      Y && (j = { mode: Y, at: Date.now() }, Z("arming", { changed_by: "Matt" }));
    }
    return n(), !0;
  }
  function nt(K, { madeUp: O = !0 } = {}) {
    const it = O ? i : {}, dt = (K == null ? void 0 : K.states) || {}, wt = (K == null ? void 0 : K.entities) || {}, st = (K == null ? void 0 : K.devices) || {}, Z = (rt) => {
      var vt;
      const lt = wt[rt];
      return lt && (lt.area_id || lt.device_id && ((vt = st[lt.device_id]) == null ? void 0 : vt.area_id)) || null;
    }, Y = (rt) => {
      const lt = wt[rt];
      return dt[rt] && dt[rt].state !== "unavailable" && !(lt != null && lt.hidden) && !(lt != null && lt.entity_category);
    }, H = {};
    Object.keys(dt).forEach((rt) => {
      const lt = Z(rt);
      lt && Y(rt) && (H[lt] || (H[lt] = [])).push(rt);
    });
    const xt = { ...dt, ...it }, Pt = (rt) => {
      var lt, vt;
      return (vt = (lt = xt[rt]) == null ? void 0 : lt.attributes) == null ? void 0 : vt.device_class;
    }, ct = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], U = Object.keys(dt).filter((rt) => rt.startsWith("vacuum.") && Y(rt)), It = Object.values((K == null ? void 0 : K.areas) || {}).filter((rt) => !Ph.has(rt.area_id)).map((rt) => {
      const lt = rt.area_id, vt = H[lt] || [], ht = (et) => vt.filter((ye) => ye.startsWith(et + ".")), _t = (et) => ht("sensor").filter((ye) => Pt(ye) === et), Vt = (et) => Object.keys(it).filter((ye) => d[ye] === lt && et(ye)), ae = (et, ye) => et.length ? et : Vt(ye), Ke = ae(_t("temperature"), (et) => et.endsWith(lt + "_temperature")), _a = ae(_t("humidity"), (et) => et.endsWith(lt + "_humidity")), Xa = _t("power").filter((et) => /^(W|kW)$/.test(xt[et].attributes.unit_of_measurement || "")), Ca = ht("binary_sensor").filter((et) => Pt(et) === "moisture"), na = ae(ht("plant"), (et) => et.startsWith("plant.")).map((et) => ({ id: et, readings: Vt((ye) => ye.startsWith("sensor." + et.split(".")[1] + "_")) })), nn = [...ht("binary_sensor").filter((et) => ct.includes(Pt(et))), ...Vt((et) => et.startsWith("binary_sensor."))];
      return {
        id: lt,
        name: rt.name,
        icon: rt.icon,
        floor: rt.floor_id || null,
        readings: [...Ke.slice(0, 1), ..._a.slice(0, 1), ...Ca],
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
        alerts: [...Ca, ...nn].filter((et) => {
          var ye;
          return ((ye = xt[et]) == null ? void 0 : ye.state) === "on";
        })
      };
    }).filter((rt) => rt.readings.length || rt.plugs.length || rt.actions.length || rt.solar.length || rt.plants.length), V = Object.keys(dt).find((rt) => /^sensor\..*(p1_meter_power|grid_power)$/.test(rt) && dt[rt].state !== "unavailable") || null, Q = (rt) => Object.keys(dt).filter((lt) => lt.startsWith(rt + ".") && Y(lt)), A = Q("alarm_control_panel"), ft = U.length ? U : O ? ["vacuum." + Ce + "robot"] : [];
    return {
      states: xt,
      rooms: It,
      grid: V,
      // any device's room, hidden ones too (Maintenance's batteries are mostly diagnostic)
      areaOf: (rt) => it[rt] ? d[rt] : Z(rt),
      vacuums: ft,
      homeVacuums: ft.filter((rt) => !It.some((lt) => lt.actions.includes(rt))),
      security: {
        alarms: A.length ? A : O ? ["alarm_control_panel." + Ce + "house"] : [],
        locks: Q("lock"),
        openings: [...Object.keys(it).filter((rt) => rt.startsWith("binary_sensor.")), ...O ? ["sensor." + Ce + "doorbell"] : []]
      }
    };
  }
  return { model: nt, call: ot, stop() {
    clearInterval(G), clearInterval(J);
  } };
}
const Ud = (n) => +n.toFixed(2), Yd = (n) => n * Math.PI / 180, ri = (n, i, d, p) => [Ud(n + d * Math.cos(Yd(p))), Ud(i + d * Math.sin(Yd(p)))], cr = (n, i, d, p, g) => {
  const [y, b] = ri(n, i, d, p), [C, j] = ri(n, i, d, g);
  return `M${y} ${b}A${d} ${d} 0 ${g - p > 180 ? 1 : 0} 1 ${C} ${j}`;
}, Ge = (n, i, d, p, g, y = "") => `<rect x="${n}" y="${i}" width="${d}" height="${p}" rx="${g}"${y}/>`, Sa = (n, i, d, p = "") => `<circle cx="${n}" cy="${i}" r="${d}"${p}/>`, fa = (n, i = "") => `<path d="${n}"${i}/>`, cs = (n, i = 2.5) => fa(n, ` fill="none" stroke="currentColor" stroke-width="${i}" stroke-linecap="round" stroke-linejoin="round"`), Hn = (n, i = 1.5) => fa(n, ` stroke="currentColor" stroke-width="${i}" stroke-linejoin="round"`), Nn = (n) => n.replace(/\/>$/, ' fill="#000" stroke="none"/>'), Ih = (n, i, d, p = 0) => Array.from({ length: n }, (g, y) => {
  const b = p + 360 / n * y, [C, j] = ri(12, 12, i, b), [M, T] = ri(12, 12, d, b);
  return cs(`M${C} ${j}L${M} ${T}`, 2.2);
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
    s: Sa(12, 12, 9.6),
    c: fa(cr(12, 12, 6.2, 135, 405)) + fa(`M12 12L${ri(12, 12, 3.4, 300).join(" ")}`)
  },
  {
    id: "temperature",
    name: "Temperature",
    use: "temperature sensors",
    colour: "#ff5722",
    s: Ge(9.2, 2.4, 5.6, 14, 2.8) + Sa(12, 17.4, 4.4),
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
    s: [0, 120, 240].map((n) => fa(Fh, ` transform="rotate(${n} 12 12)"`)).join("") + Sa(12, 12, 2.6),
    c: Sa(12, 12, 3.6)
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
    c: Nn(Sa(12, 14.9, 1.7)) + fa("M12 15.2V17.9", ' stroke-width="1.9"')
  },
  {
    id: "door",
    name: "Door",
    use: "doors, openings",
    colour: "#ff9800",
    s: Ge(5, 2.4, 14, 19.2, 3.6),
    c: Nn(Sa(15.2, 12.4, 1.5))
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
    s: Sa(12, 7.2, 4.2) + Hn("M4.6 20.6A7.4 6.6 0 0 1 19.4 20.6V20.8H4.6Z", 1.4),
    c: ""
  },
  {
    id: "camera",
    name: "Camera",
    use: "cameras, doorbells",
    colour: "#607d8b",
    s: Ge(2.6, 5.4, 13.4, 8.6, 3.4) + Hn("M17.8 8.2L21.4 6.4V13L17.8 11.2Z", 1.4) + Ge(7.2, 14.6, 2.4, 4.2, 1.2) + Ge(3.4, 18.6, 10, 2.6, 1.3),
    c: Nn(Sa(6.8, 9.7, 1.4))
  },
  {
    id: "speaker",
    name: "Speaker",
    use: "media players, music",
    colour: "#2196f3",
    s: Ge(5, 2.4, 14, 19.2, 4.2),
    c: Sa(12, 14.6, 3.6) + Nn(Sa(12, 7.4, 1.5))
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
    s: Sa(12, 12, 9.6),
    c: fa("M5.6 8.6H18.4") + Sa(12, 14.4, 2.4)
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
    s: Sa(12, 12, 4.4) + Ih(8, 7.4, 9.6),
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
}, jh = (n) => "#" + n.map((i) => Math.round(Math.max(0, Math.min(255, i))).toString(16).padStart(2, "0")).join(""), Zd = {}, Oa = (n, i, d) => {
  const p = n + i + d;
  return Zd[p] || (Zd[p] = jh(nc(n).map((g, y) => g + (nc(i)[y] - g) * d)));
}, $d = {}, Nl = (n) => $d[n] || ($d[n] = nc(n));
function Jp(n, i) {
  const d = String(n || "");
  return (d === "sunny" || d === "clear-night" ? "clear" : d === "partlycloudy" ? "partly" : d === "fog" ? "fog" : d === "lightning" || d === "lightning-rainy" ? "storm" : d === "snowy" || d === "snowy-rainy" ? "snow" : d === "rainy" || d === "pouring" || d === "hail" ? "rain" : "cloudy") + "/" + (d === "clear-night" || i ? "night" : "day");
}
function zh(n) {
  const i = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return i.partly = [Oa(i.clear[0], i.cloudy[0], 0.12), Oa(i.clear[1], i.cloudy[1], 0.12)], i.storm = [Oa(i.rain[0], "#000000", 0.22), Oa(i.rain[1], "#000000", 0.22)], i;
}
const rc = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], ic = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], sc = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function Gh(n, i = Fa) {
  const d = { ...Fa, ...i }, p = zh(d), g = String(n).split("/"), y = p[g[0]] ? g[0] : "clear", b = g[1] === "night", C = p[y][b ? 1 : 0], j = {
    night: b,
    clearness: y === "clear" ? 1 : y === "partly" ? 0.7 : 0.25,
    sky: C,
    skyStops: [C],
    skyT: 0,
    sun: { x: 45, y: b ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: b ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: b ? 1 : 0 },
    stars: rc.map(() => ({ o: 0 })),
    rain: ic.map(() => ({ o: 0, dy: -16 })),
    snow: sc.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, M = (T) => rc.map(() => ({ o: T }));
  return y === "clear" ? b ? (j.moon.o = 1, j.stars = M(1)) : j.sun.o = 1 : y === "partly" ? (j.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: b ? 1 : 0 }, b ? (j.moon = { x: 34, y: 33, d: 48, o: 1 }, j.stars = M(0.7)) : j.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : y === "cloudy" || y === "fog" ? (j.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: b ? 1 : 0 }, b ? j.moon = { x: 40, y: 36, d: 40, o: 0 } : j.sun = { x: 40, y: 36, r: 20, o: 0 }) : (j.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, b ? j.moon = { x: 38, y: 28, d: 36, o: 0 } : j.sun = { x: 38, y: 28, r: 18, o: 0 }, y === "snow" ? j.snow = sc.map(() => ({ o: 1, dy: 0 })) : j.rain = ic.map((T, q) => ({ o: y === "storm" && q === 1 ? 0 : 1, dy: 0 })), y === "storm" && (j.bolt = { o: 1, dy: 0 })), j;
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
], On = (n, i) => (Uh[(i & 7) * 8 + (n & 7)] + 0.5) / 64, Yh = 0, Qp = 1, tu = 2, eu = 3, au = 4, ho = 5, hs = 6, hr = 7, ou = 8, Kd = (n, i) => i <= 0.6665 && ((n - 0.5) * (n - 0.5) + (i - 0.2877) * (i - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (i - 0.416) * (i - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (i - 0.458) * (i - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && i >= 0.416), Zh = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], $h = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((n) => [n[0] * 13 / 11, n[1] * 28 / 24]), Kh = (n, i, d) => {
  let p = !1;
  for (let g = 0, y = n.length - 1; g < n.length; y = g++) {
    const b = n[g], C = n[y];
    b[1] > d != C[1] > d && i < (C[0] - b[0]) * (d - b[1]) / (C[1] - b[1]) + b[0] && (p = !p);
  }
  return p;
};
function Xh(n, { size: i = 90, px: d = 2, oneBit: p = !1, colors: g = Fa, ink: y = "#26221e", paper: b = "#fbf9f6", clock: C = 0, idle: j = !1 } = {}) {
  const M = { ...Fa, ...g }, T = Math.sin, q = Math.PI * 2, G = Math.max(6, Math.round(i / d)), J = G / 90, ot = j ? Math.floor(C / 100) * 100 : 0, nt = j ? T(q * ot / 3600) : 0, K = j ? 1.8 * T(q * ot / 6400) : 0, O = j ? 0.9 * T(q * ot / 4100) : 0, it = j ? 0.8 * T(q * ot / 5200) : 0, dt = ot / 3400 % 1, wt = j && n.bolt.o > 0.5 && (dt < 0.04 || dt > 0.08 && dt < 0.11), st = new Array(G * G), Z = new Uint8Array(G * G), Y = (V, Q, A, ft, rt) => {
    A == null || V < 0 || Q < 0 || V >= G || Q >= G || (ft >= 1 || ft > On(V + 5, Q + 3)) && (st[Q * G + V] = A, Z[Q * G + V] = rt);
  }, H = (V, Q, A, ft) => {
    for (let rt = Math.max(0, Math.floor(Q - A) - 1); rt <= Math.min(G - 1, Q + A + 1); rt++) for (let lt = Math.max(0, Math.floor(V - A) - 1); lt <= Math.min(G - 1, V + A + 1); lt++) ft(lt, rt, lt + 0.5 - V, rt + 0.5 - Q);
  }, xt = n.skyStops || [n.sky], Pt = n.skyT || 0;
  for (let V = 0; V < G; V++) {
    const Q = n.night ? Jr(1 - (V + 0.5) / (G * 0.7)) * 0.85 : Jr(((V + 0.5) / G - 0.35) / 0.65) * 0.85;
    for (let A = 0; A < G; A++) {
      let ft = xt[0];
      if (xt.length > 1) {
        const rt = Pt * (xt.length - 1), lt = Math.min(xt.length - 2, Math.floor(rt));
        ft = rt - lt > On(A, V) ? xt[lt + 1] : xt[lt];
      }
      Q > On(A + 2, V + 5) && (ft = n.night ? Oa(ft, "#000000", 0.28) : Oa(ft, "#ffffff", 0.2)), st[V * G + A] = wt ? Oa(ft, "#ffffff", 0.25) : ft;
    }
  }
  if (n.sun.o > 0.01) {
    const V = n.sun.x * J, Q = n.sun.y * J, A = Math.max(1, n.sun.r * J);
    if (j) {
      const ft = A * (1.45 + 0.06 * nt), rt = Oa(M.sun, "#ffffff", 0.55);
      if (H(V, Q, ft, (lt, vt, ht, _t) => {
        const Vt = Math.sqrt(ht * ht + _t * _t);
        Vt > A && Vt < ft && Y(lt, vt, rt, 0.26 * (1 - (Vt - A) / (ft - A)) * n.sun.o, Yh);
      }), n.sun.o > 0.5) {
        const lt = Math.floor(ot / 500) % 2, vt = Math.max(1, A * 0.22);
        for (let ht = 0; ht < 8; ht++) if (ht % 2 === lt) for (let _t = A + 1.5; _t < A + 1.5 + vt; _t += 0.7) Y(Math.floor(V + Math.cos(ht * Math.PI / 4) * _t), Math.floor(Q + Math.sin(ht * Math.PI / 4) * _t), M.sun, n.sun.o, ou);
      }
    }
    H(V, Q, A, (ft, rt, lt, vt) => {
      if (lt * lt + vt * vt > A * A) return;
      const ht = ((lt * 0.643 + vt * 0.766) / A + 1) / 2;
      Y(ft, rt, Jr((ht - 0.62) / 0.38) > On(ft, rt) ? M.sunEdge : M.sun, n.sun.o, Qp);
    });
  }
  if (rc.forEach((V, Q) => {
    const A = n.stars[Q].o;
    if (A < 0.01) return;
    const ft = Math.floor(V[0] * J), rt = Math.floor(V[1] * J), lt = j ? (Math.floor(ot / 300) + Q * 3) % 6 : 0;
    if (lt === 5) return;
    const vt = Math.round(V[2] * J * (lt === 4 ? 0.3 : lt < 2 ? 1 : 0.6));
    Y(ft, rt, M.star, A, hr);
    for (let ht = 1; ht <= vt; ht++) {
      const _t = ht === vt && vt > 1 ? Oa(M.star, n.sky, 0.5) : M.star;
      Y(ft - ht, rt, _t, A, hr), Y(ft + ht, rt, _t, A, hr), Y(ft, rt - ht, _t, A, hr), Y(ft, rt + ht, _t, A, hr);
    }
  }), n.moon.o > 0.01) {
    const V = Math.max(1.5, n.moon.d * J * 0.37), Q = n.moon.x * J, A = n.moon.y * J + (j && it > 0.4 ? -1 : 0), ft = Q + 0.547 * V, rt = A - 0.503 * V, lt = 0.82 * V, vt = Oa(M.moon, "#ffffff", 0.6);
    H(Q, A, V, (ht, _t, Vt, ae) => {
      if (Vt * Vt + ae * ae > V * V) return;
      const Ke = ht + 0.5 - ft, _a = _t + 0.5 - rt;
      Ke * Ke + _a * _a <= lt * lt || Y(ht, _t, Jr((ae + V) / (2 * V) * 1.1 - 0.1) > On(ht, _t) ? M.moon : vt, n.moon.o, tu);
    });
  }
  const ct = Math.max(2, Math.round(15.65 * J)), U = Math.max(1, Math.round(5.87 * J * 0.5));
  ic.forEach((V, Q) => {
    const A = n.rain[Q];
    let ft = A.dy, rt = A.o;
    if (rt < 0.01) return;
    if (j) {
      const ht = (ot / 950 + Q / 3) % 1;
      ft += -5 + ht * 14, rt *= ht < 0.18 ? ht / 0.18 : ht > 0.72 ? (1 - ht) / 0.28 : 1;
    }
    const lt = (V[0] + 3 + K) * J, vt = (V[1] + ft) * J;
    for (let ht = 0; ht < ct; ht++) for (let _t = 0; _t < U; _t++) Y(Math.floor(lt - 0.208 * ht) + _t, Math.floor(vt) + ht, M.rain, rt, au);
  });
  const It = Math.max(0, Math.round(7.34 * J / 2.6));
  if (sc.forEach((V, Q) => {
    const A = n.snow[Q];
    let ft = A.dy, rt = 0, lt = A.o;
    if (lt < 0.01) return;
    if (j) {
      const _t = (ot / 3200 + Q / 5) % 1;
      ft += -6 + _t * 14, rt = 1.5 * T(q * (_t * 1.5 + Q / 5)), lt *= _t < 0.2 ? _t / 0.2 : _t > 0.75 ? (1 - _t) / 0.25 : 1;
    }
    const vt = Math.floor((V[0] + 3.67 + rt + K) * J), ht = Math.floor((V[1] + 3.67 + ft) * J);
    Y(vt, ht, M.snow, lt, ho);
    for (let _t = 1; _t <= It; _t++)
      Y(vt - _t, ht, M.snow, lt, ho), Y(vt + _t, ht, M.snow, lt, ho), Y(vt, ht - _t, M.snow, lt, ho), Y(vt, ht + _t, M.snow, lt, ho), It > 1 && _t < It && (Y(vt - _t, ht - _t, M.snow, lt, ho), Y(vt + _t, ht - _t, M.snow, lt, ho), Y(vt - _t, ht + _t, M.snow, lt, ho), Y(vt + _t, ht + _t, M.snow, lt, ho));
  }), n.bolt.o > 0.01)
    if (G >= 30) {
      const V = 39 + K, Q = 50 + n.bolt.dy;
      for (let A = Math.floor(Q * J); A <= (Q + 28) * J; A++) for (let ft = Math.floor(V * J); ft <= (V + 13) * J; ft++)
        Kh($h, (ft + 0.5) / J - V, (A + 0.5) / J - Q) && Y(ft, A, M.sun, n.bolt.o, hs);
    } else {
      const V = G / 18, Q = 7, A = 10 + Math.round(n.bolt.dy * 0.2);
      Zh.forEach((ft, rt) => ft.split("").forEach((lt, vt) => {
        if (lt !== "#") return;
        const ht = Math.floor((Q + vt) * V), _t = Math.floor((A + rt) * V);
        for (let Vt = _t; Vt < Math.max(_t + 1, Math.floor((A + rt + 1) * V)); Vt++) for (let ae = ht; ae < Math.max(ht + 1, Math.floor((Q + vt + 1) * V)); ae++) Y(ae, Vt, M.sun, n.bolt.o, hs);
      }));
    }
  if (n.cloud.o > 0.01) {
    const V = Math.max(3, n.cloud.w * J), Q = V * 0.6665, A = (n.cloud.x + K) * J - V / 2, ft = (n.cloud.y + O) * J - Q / 2, rt = Oa(M.cloudDay, M.cloudNight, Math.round(n.cloud.f * 4) / 4), lt = Oa(rt, "#000000", 0.16);
    for (let vt = Math.max(0, Math.floor(ft) - 1); vt <= Math.min(G - 1, ft + Q + 1); vt++) for (let ht = Math.max(0, Math.floor(A) - 1); ht <= Math.min(G - 1, A + V + 1); ht++) {
      const _t = (ht + 0.5 - A) / V, Vt = (vt + 0.5 - ft) / V;
      Kd(_t, Vt) && Y(ht, vt, !Kd(_t, Vt + 1 / V) || Jr((Vt - 0.42) / 0.25) * 0.8 > On(ht, vt) ? lt : rt, n.cloud.o, eu);
    }
  }
  return Jh(st, Z, G, G, { oneBit: p, ink: y, paper: b, snowInk: !n.night });
}
function Jh(n, i, d, p, { oneBit: g, ink: y, paper: b, snowInk: C }) {
  const j = new Uint8ClampedArray(d * p * 4), M = Nl(y), T = Nl(b);
  for (let q = 0; q < p; q++) for (let G = 0; G < d; G++) {
    const J = q * d + G, ot = i[J];
    if (n[J] == null) continue;
    let nt = Nl(n[J]);
    if (g) {
      let K;
      ot === au || ot === ou ? K = !0 : ot === ho ? K = C : ot === hr || ot === hs ? K = !1 : K = Math.round((0.2126 * nt[0] + 0.7152 * nt[1] + 0.0722 * nt[2]) / 255 * 4) / 4 <= On(G, q), (ot === Qp || ot === tu || ot === eu || ot === hs) && (G > 0 && i[J - 1] !== ot || G < d - 1 && i[J + 1] !== ot || q > 0 && i[J - d] !== ot || q < p - 1 && i[J + d] !== ot) && (K = !0), nt = K ? M : T;
    }
    j[J * 4] = nt[0], j[J * 4 + 1] = nt[1], j[J * 4 + 2] = nt[2], j[J * 4 + 3] = 255;
  }
  return { w: d, h: p, data: j };
}
const Vo = (n) => n < 0 ? 0 : n > 1 ? 1 : n, lc = (n) => {
  const i = String(n || "#000000").trim().replace("#", ""), d = i.length === 3 ? i.split("").map((p) => p + p).join("") : i;
  return [0, 2, 4].map((p) => parseInt(d.slice(p, p + 2), 16) || 0);
}, Qh = (n) => "#" + n.map((i) => Math.round(Math.max(0, Math.min(255, i))).toString(16).padStart(2, "0")).join(""), Xd = {}, Ia = (n, i, d) => {
  const p = n + i + d;
  return Xd[p] || (Xd[p] = Qh(lc(n).map((g, y) => g + (lc(i)[y] - g) * d)));
}, Jd = {}, ds = (n) => Jd[n] || (Jd[n] = lc(n));
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
], qo = (n, i) => (em[(i & 7) * 8 + (n & 7)] + 0.5) / 64, nu = 1, ru = 2, iu = 3, su = 4, mr = 5, ms = 6, cc = 7, lu = 8, Qd = (n, i) => i <= 0.6665 && ((n - 0.5) * (n - 0.5) + (i - 0.2877) * (i - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (i - 0.416) * (i - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (i - 0.458) * (i - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && i >= 0.416), am = (n, i, d) => {
  let p = !1;
  for (let g = 0, y = n.length - 1; g < n.length; y = g++) {
    const b = n[g], C = n[y];
    b[1] > d != C[1] > d && i < (C[0] - b[0]) * (d - b[1]) / (C[1] - b[1]) + b[0] && (p = !p);
  }
  return p;
};
function om(n, i, d, p, { oneBit: g, ink: y, paper: b, snowInk: C }) {
  const j = new Uint8ClampedArray(d * p * 4), M = ds(y), T = ds(b);
  for (let q = 0; q < p; q++) for (let G = 0; G < d; G++) {
    const J = q * d + G, ot = i[J];
    if (n[J] == null) continue;
    let nt = ds(n[J]);
    if (g) {
      let K;
      ot === su || ot === lu ? K = !0 : ot === mr ? K = C : ot === cc || ot === ms ? K = !1 : K = Math.round((0.2126 * nt[0] + 0.7152 * nt[1] + 0.0722 * nt[2]) / 255 * 4) / 4 <= qo(G, q), (ot === nu || ot === ru || ot === iu || ot === ms) && (G > 0 && i[J - 1] !== ot || G < d - 1 && i[J + 1] !== ot || q > 0 && i[J - d] !== ot || q < p - 1 && i[J + d] !== ot) && (K = !0), nt = K ? M : T;
    }
    j[J * 4] = nt[0], j[J * 4 + 1] = nt[1], j[J * 4 + 2] = nt[2], j[J * 4 + 3] = 255;
  }
  return { w: d, h: p, data: j };
}
const nm = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, rm = (n) => Jp(n, !1).split("/")[0], Ol = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let i = Math.imul(n ^ n >>> 15, 1 | n);
  return i = i + Math.imul(i ^ i >>> 7, 61 | i) ^ i, ((i ^ i >>> 14) >>> 0) / 4294967296;
}, im = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sm = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", lm = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", cm = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", dm = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], pm = [".##", "##.", ".#.", "#.."];
function cu(n, { width: i, height: d, colors: p, wave: g = 0.38, soft: y = 6, glow: b = 0.6, columns: C = 6 }) {
  const j = { ...Fa, dawn: "#e5a77e", ...p }, M = tm(j), T = i, q = d, G = T / C, J = G / 2, ot = Math.PI * 2, nt = n.length ? n : [{ cond: "cloudy", night: !1 }], K = [...Array(C * 2)].map((wt, st) => {
    const Z = nt[Math.min(st, nt.length - 1)], Y = rm(Z.cond), H = st % 2 === 1;
    return { cond: Z.cond, k: Y, night: H, sky: M[Y][H ? 1 : 0], cover: nm[Y] };
  }), O = (wt) => q * (0.5 - g * Math.cos(ot * (wt / G - 0.25)));
  return { C: j, S: K, W: T, H: q, cw: G, sw: J, TAU: ot, yb: O, side: (wt, st, Z) => {
    const Y = (wt ? O(st) - Z : Z - O(st)) / Math.max(3, y * 1.4) + 0.5;
    return Y <= 0 ? 0 : Y >= 1 ? 1 : Y;
  }, glowAt: (wt) => {
    const st = ((wt / G - 0.25) % 1 + 1) % 1, Z = Math.max(0, Math.min(C - 1, Math.round(wt / G - 0.25))), Y = Math.max(0, Math.min(C - 1, Math.round(wt / G - 0.75))), H = 1 - (K[2 * Z].cover + K[2 * Y + 1].cover) / 2, xt = Math.sin(Math.PI * Math.min(1, Math.max(0, O(wt) / q)));
    return { c: st < 0.5 ? j.dusk : j.dawn, a: b * (0.2 + 0.8 * H) * xt * xt };
  }, soft: y, tw: G * 0.3, sy: q / 90 };
}
function du(n, { clock: i = 0, ambient: d = !1, seed: p = 1 }) {
  const { S: g, sw: y, side: b, C, TAU: j, sy: M, H: T } = n, q = i, G = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  g.forEach((nt, K) => {
    const O = Ol(p * 977 + K * 131 + 7), it = (K + 0.5) * y, dt = nt.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[nt.k] : 0;
    for (let wt = 0; wt < dt; wt++) {
      const st = it + (O() - 0.5) * y * 1.6, Z = (6 + O() * 76) * M, Y = O() < 0.35, H = 1.8 + O() * 1.6, xt = b(!0, st, Z) * (Y ? 0.95 : 0.7) * (d ? 0.6 + 0.4 * Math.sin(j * q / 2600 + wt * 1.7 + K) : 1);
      xt >= 0.03 && G.stars.push({ x: st, y: Z, big: Y, size: H, o: xt });
    }
    if (!nt.night && (nt.k === "clear" || nt.k === "partly")) {
      const wt = it + (O() - 0.5) * y * 0.3, st = Math.min(15, y * 0.29);
      G.suns.push({ x: wt, y: 32 * M, rad: st, halo: st * 2.8 * (d ? 1 + 0.07 * Math.sin(j * q / 3600 + K) : 1) });
    }
    if (nt.night && (nt.k === "clear" || nt.k === "partly")) {
      const wt = Math.min(0.78, y * 0.55 / 34), st = it - 23 * wt + (O() - 0.5) * y * 0.2;
      G.moons.push({ x: st + 23 * wt, y: (4 + (d ? 0.8 * Math.sin(j * q / 5200 + K) : 0)) * M + 23 * wt, d: 46 * wt });
    }
  });
  const J = Math.max(56, Math.min(100, T * 0.45)), ot = Math.max(1, y / (J * 2.4));
  return g.forEach((nt, K) => {
    const O = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[nt.k];
    if (!O) return;
    const it = nt.k === "partly" ? 1 : Math.round(O * ot), dt = Ol(p * 577 + K * 71 + 3), wt = (K + 0.5) * y, st = nt.k === "rain" || nt.k === "storm" || nt.night ? C.cloudNight : C.cloudDay, Z = nt.night ? 0.82 : nt.k === "storm" ? 0.75 : 1;
    for (let Y = 0; Y < it; Y++) {
      const H = J / 46 * (nt.k === "partly" ? 1 : 0.8 + dt() * 0.4), xt = wt + (nt.k === "partly" ? y * 0.12 : ((Y + 0.5) / it - 0.5) * y * 0.95 + (dt() - 0.5) * y * 0.5 / it), Pt = (nt.k === "partly" ? 40 : 6 + dt() * 26) * M, ct = d ? 2.5 * Math.sin(j * q / 9e3 + K * 1.3 + Y * 2.1) : 0, U = d ? 0.9 * Math.sin(j * q / 6100 + K + Y) : 0;
      G.clouds.push({ x: xt - 23 * H + ct, y: Pt - 15.33 * H + U, w: 46 * H, h: 30.66 * H, fill: st, o: Z * (it > 1 && Y === 0 ? 0.85 : 1) });
    }
  }), g.forEach((nt, K) => {
    const O = Ol(p * 313 + K * 29 + 11), it = (K + 0.5) * y, dt = nt.cond === "pouring" ? 16 : nt.cond === "rainy" || nt.cond === "hail" ? 9 : nt.cond === "lightning-rainy" ? 12 : nt.cond === "snowy-rainy" ? 5 : 0;
    for (let st = 0; st < dt; st++) {
      let Z = it + (O() - 0.5) * y * 1.05, Y = 44 + O() * 36, H = 1;
      if (d) {
        const Pt = ((Y - 44 + q * 0.04) % 36 + 36) % 36;
        Z -= 0.21 * (Pt - (Y - 44)), Y = 44 + Pt, H = Math.min(1, Pt / 6, (36 - Pt) / 6);
      }
      Y *= M;
      const xt = b(nt.night, Z, Y) * H;
      xt >= 0.05 && G.drops.push({ x: Z, y: Y, o: xt });
    }
    const wt = nt.cond === "snowy" ? 11 : nt.cond === "snowy-rainy" ? 6 : 0;
    for (let st = 0; st < wt; st++) {
      let Z = it + (O() - 0.5) * y * 1.05, Y = 40 + O() * 44, H = 1;
      if (d) {
        const Pt = ((Y - 40 + q * 9e-3) % 44 + 44) % 44;
        Y = 40 + Pt, Z += 1.6 * Math.sin(j * q / 2800 + st * 1.9 + K), H = Math.min(1, Pt / 6, (44 - Pt) / 6);
      }
      Y *= M;
      const xt = b(nt.night, Z, Y) * H;
      xt >= 0.05 && G.flakes.push({ x: Z, y: Y, o: xt });
    }
    if (nt.k === "fog") {
      const st = nt.night ? "#c8ccd6" : "#ffffff", Z = nt.night ? 0.28 : 0.62, Y = d ? 4 * Math.sin(j * q / 8e3 + K) : 0;
      for (let H = 0; H < 4; H++) G.fogs.push({ x: it - y * 0.75 + H % 2 * y * 0.18 + (H % 2 ? Y : -Y), y: (30 + H * 13) * M, w: y * 1.3, c: st, a: Z });
    }
    if (nt.k === "storm") {
      const st = (q / 3400 + K * 0.37) % 1;
      G.bolts.push({ x: it + (O() - 0.5) * y * 0.3 - 5, y: 36 * M, o: d && !(st < 0.05 || st > 0.09 && st < 0.12) ? 0.8 : 1 });
    }
  }), G;
}
function um(n, i, d, p, g, y, b, C) {
  const { S: j, C: M, cw: T, yb: q, glowAt: G, soft: J, tw: ot, sy: nt } = n, K = new Array(d * p), O = new Uint8Array(d * p), it = new Uint8Array(d * p), dt = (V, Q, A, ft, rt) => {
    A == null || V < 0 || Q < 0 || V >= d || Q >= p || (ft >= 1 || ft > qo(V + 5, Q + 3)) && (K[Q * d + V] = A, O[Q * d + V] = rt);
  }, wt = (V, Q, A, ft) => {
    for (let rt = Math.max(0, Math.floor(Q - A) - 1); rt <= Math.min(p - 1, Q + A + 1); rt++) for (let lt = Math.max(0, Math.floor(V - A) - 1); lt <= Math.min(d - 1, V + A + 1); lt++) ft(lt, rt, lt + 0.5 - V, rt + 0.5 - Q);
  }, st = (V, Q, A) => {
    for (let rt = 0; rt < V.length - 1; rt++) {
      const lt = (rt + Q) * T;
      if (A < lt - ot / 2) return [V[rt], V[rt], 0];
      if (A <= lt + ot / 2) return [V[rt], V[rt + 1], (A - lt + ot / 2) / ot];
    }
    const ft = V[V.length - 1];
    return [ft, ft, 0];
  }, Z = j.filter((V) => !V.night).map((V) => V.sky), Y = j.filter((V) => V.night).map((V) => V.sky), H = J / y, xt = 16 * nt / y;
  for (let V = 0; V < d; V++) {
    const Q = (V + 0.5) * g, A = q(Q) / y, ft = st(Z, 0.75, Q), rt = st(Y, 1.25, Q), lt = G(Q);
    for (let vt = 0; vt < p; vt++) {
      const ht = qo(V, vt), _t = vt + 0.5 - A, Vt = (H > 0.01 ? Vo(0.5 + _t / H) : _t > 0 ? 1 : 0) > ht;
      let ae = Vt ? ft[2] > ht ? ft[1] : ft[0] : rt[2] > ht ? rt[1] : rt[0];
      (Vt ? Vo(((vt + 0.5) / p - 0.45) / 0.55) * 0.7 : Vo(1 - (vt + 0.5) / (p * 0.55)) * 0.7) > qo(V + 2, vt + 5) && (ae = Vt ? Ia(ae, "#ffffff", 0.18) : Ia(ae, "#000000", 0.25)), Vt && _t >= 0 && _t < xt && lt.a * 1.3 * (1 - _t / xt) > qo(V + 6, vt + 1) && (ae = lt.c), K[vt * d + V] = ae, it[vt * d + V] = Vt ? 0 : 1;
    }
  }
  const Pt = Ia(M.sun, "#ffffff", 0.55), ct = Ia(M.moon, "#ffffff", 0.6);
  i.stars.forEach((V) => {
    const Q = Math.floor(V.x / g), A = Math.floor(V.y / y);
    if (Q < 0 || A < 0 || Q >= d || A >= p || !it[A * d + Q] || V.o < 0.15) return;
    const ft = V.o > 0.45 ? M.star : Ia(M.star, K[A * d + Q], 0.5), rt = V.big && V.o > 0.6 ? Math.floor(V.size / g) : 0;
    dt(Q, A, ft, 1, cc);
    for (let lt = 1; lt <= rt; lt++) [[Q - lt, A], [Q + lt, A], [Q, A - lt], [Q, A + lt]].forEach((vt) => {
      vt[0] >= 0 && vt[1] >= 0 && vt[0] < d && vt[1] < p && it[vt[1] * d + vt[0]] && dt(vt[0], vt[1], ft, 1, cc);
    });
  }), i.suns.forEach((V) => {
    const Q = Math.max(1.5, V.rad / g), A = V.x / g, ft = V.y / y, rt = V.halo / g * 0.85;
    if (wt(A, ft, rt, (lt, vt, ht, _t) => {
      const Vt = Math.sqrt(ht * ht + _t * _t);
      Vt > Q && Vt < rt && !it[vt * d + lt] && dt(lt, vt, Pt, 0.3 * (1 - (Vt - Q) / (rt - Q)), 0);
    }), C) {
      const lt = Math.floor(b / 500) % 2, vt = Math.max(1, Q * 0.3);
      for (let ht = 0; ht < 8; ht++) if (ht % 2 === lt) for (let _t = Q + 1.2; _t < Q + 1.2 + vt; _t += 0.7) dt(Math.floor(A + Math.cos(ht * Math.PI / 4) * _t), Math.floor(ft + Math.sin(ht * Math.PI / 4) * _t), M.sun, 1, lu);
    }
    wt(A, ft, Q, (lt, vt, ht, _t) => {
      ht * ht + _t * _t <= Q * Q && dt(lt, vt, Vo(((_t / Q + 1) / 2 - 0.6) / 0.4) > qo(lt, vt) ? M.sunEdge : M.sun, 1, nu);
    });
  }), i.moons.forEach((V) => {
    const Q = Math.max(1.5, V.d * 0.37 / g), A = V.x / g, ft = V.y / y, rt = A + 0.547 * Q, lt = ft - 0.503 * Q, vt = 0.82 * Q;
    wt(A, ft, Q, (ht, _t, Vt, ae) => {
      if (Vt * Vt + ae * ae > Q * Q) return;
      const Ke = ht + 0.5 - rt, _a = _t + 0.5 - lt;
      Ke * Ke + _a * _a > vt * vt && dt(ht, _t, Vo((ae + Q) / (2 * Q) * 1.1 - 0.1) > qo(ht, _t) ? M.moon : ct, 1, ru);
    });
  }), i.clouds.forEach((V) => {
    const Q = Math.max(3, V.w / g), A = Q * 0.6665, ft = V.x / g, rt = V.y / y, lt = Ia(V.fill, "#000000", 0.16);
    for (let vt = Math.max(0, Math.floor(rt) - 1); vt <= Math.min(p - 1, rt + A + 1); vt++) for (let ht = Math.max(0, Math.floor(ft) - 1); ht <= Math.min(d - 1, ft + Q + 1); ht++) {
      const _t = (ht + 0.5 - ft) / Q, Vt = (vt + 0.5 - rt) / Q;
      Qd(_t, Vt) && dt(ht, vt, !Qd(_t, Vt + 1 / Q) || Vo((Vt - 0.42) / 0.25) * 0.8 > qo(ht, vt) ? lt : V.fill, V.o, iu);
    }
  }), i.fogs.forEach((V) => {
    const Q = Math.floor(V.y / y), A = Math.max(Q, Math.floor((V.y + 6 * nt) / y) - 1), ft = Math.floor(V.x / g), rt = Math.floor((V.x + V.w) / g);
    for (let lt = Q; lt <= A; lt++) for (let vt = ft; vt <= rt; vt++) {
      const ht = (vt - ft) / Math.max(1, rt - ft);
      dt(vt, lt, V.c, V.a * (ht < 0.25 ? ht / 0.25 : ht > 0.75 ? (1 - ht) / 0.25 : 1), 0);
    }
  });
  const U = Math.max(2, Math.round(9 / y));
  i.drops.forEach((V) => {
    const Q = V.x / g, A = Math.floor(V.y / y);
    for (let ft = 0; ft < U; ft++) dt(Math.floor(Q - 0.208 * ft * y / g), A + ft, M.rain, V.o, su);
  });
  const It = Math.max(0, Math.round(4.4 / g / 2.6));
  return i.flakes.forEach((V) => {
    const Q = Math.floor(V.x / g), A = Math.floor(V.y / y);
    dt(Q, A, M.snow, V.o, mr);
    for (let ft = 1; ft <= It; ft++)
      dt(Q - ft, A, M.snow, V.o, mr), dt(Q + ft, A, M.snow, V.o, mr), dt(Q, A - ft, M.snow, V.o, mr), dt(Q, A + ft, M.snow, V.o, mr);
  }), i.bolts.forEach((V) => {
    if (g <= 3.5)
      for (let Q = Math.floor(V.y / y); Q <= (V.y + 24) / y; Q++) for (let A = Math.floor(V.x / g); A <= (V.x + 11) / g; A++)
        am(dm, (A + 0.5) * g - V.x, (Q + 0.5) * y - V.y) && dt(A, Q, M.sun, 1, ms);
    else {
      const Q = Math.round(V.x / g), A = Math.round(V.y / y);
      pm.forEach((ft, rt) => ft.split("").forEach((lt, vt) => {
        lt === "#" && dt(Q + vt, A + rt, M.sun, 1, ms);
      }));
    }
  }), { col: K, ids: O };
}
function fm(n, i) {
  const d = i.px, p = Math.max(6, Math.round(i.width / d)), g = Math.max(6, Math.round(i.height / d)), y = i.width / p, b = i.height / g, C = i.ambient ? Math.floor((i.clock || 0) / 100) * 100 : 0, j = (J) => {
    const ot = cu(J, i);
    return um(ot, du(ot, { clock: C, ambient: i.ambient, seed: i.seed }), p, g, y, b, C, i.ambient);
  }, M = j(n), T = i.reveal == null ? 1 : Vo(i.reveal);
  let q = M.col, G = M.ids;
  if (T < 1) {
    const J = i.prev ? j(i.prev) : null, ot = T * (p + 12);
    q = new Array(p * g), G = new Uint8Array(p * g);
    for (let nt = 0; nt < p * g; nt++) {
      const K = nt % p, O = nt / p | 0;
      (i.reduce ? T : Vo((ot - K) / 12)) > qo(K, O) ? (q[nt] = M.col[nt], G[nt] = M.ids[nt]) : J ? (q[nt] = J.col[nt], G[nt] = J.ids[nt]) : (q[nt] = null, G[nt] = 255);
    }
  }
  return om(q, G, p, g, { oneBit: i.oneBit, ink: i.ink || "#26221e", paper: i.paper || "#fbf9f6", snowInk: !1 });
}
function hm(n, i, d) {
  const p = d.width, g = d.height, y = d.reveal == null ? 1 : Vo(d.reveal), b = (G, J) => {
    const ot = cu(J, d);
    mm(G, ot, du(ot, d));
  };
  if (n.clearRect(0, 0, p, g), y >= 1) {
    b(n, i);
    return;
  }
  if (d.prev && b(n, d.prev), d.reduce) {
    n.save(), n.globalAlpha = y, b(n, i), n.restore();
    return;
  }
  const C = n.canvas, j = C.__wxOff || (C.__wxOff = document.createElement("canvas"));
  (j.width !== C.width || j.height !== C.height) && (j.width = C.width, j.height = C.height);
  const M = j.getContext("2d");
  M.setTransform(n.getTransform()), M.clearRect(0, 0, p, g), b(M, i);
  const T = y * (p + 64) - 64, q = M.createLinearGradient(T, 0, T + 64, 0);
  q.addColorStop(0, "rgba(0,0,0,1)"), q.addColorStop(1, "rgba(0,0,0,0)"), M.globalCompositeOperation = "destination-in", M.fillStyle = q, M.fillRect(0, 0, p, g), M.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(j, 0, 0), n.restore();
}
function mm(n, i, d) {
  const { W: p, H: g, S: y, C: b, cw: C, yb: j, glowAt: M, soft: T, tw: q, sy: G } = i, J = n.getTransform().a || 1, ot = (U) => {
    n.shadowColor = U ? "rgba(28,18,8,.22)" : "transparent", n.shadowBlur = U ? 4 * J : 0, n.shadowOffsetY = U ? 1.5 * J : 0;
  }, nt = (U, It) => {
    const V = ds(U);
    return "rgba(" + V[0] + "," + V[1] + "," + V[2] + "," + Math.max(0, Math.min(1, It)).toFixed(3) + ")";
  }, K = (U, It) => {
    const V = n.createLinearGradient(0, 0, p, 0);
    V.addColorStop(0, U[0]);
    for (let Q = 0; Q < U.length - 1; Q++) {
      const A = (Q + It) * C, ft = (A - q / 2) / p, rt = (A + q / 2) / p;
      ft > 0 && ft < 1 && V.addColorStop(ft, U[Q]), rt > 0 && rt < 1 && V.addColorStop(rt, U[Q + 1]);
    }
    return V.addColorStop(1, U[U.length - 1]), V;
  }, O = Math.max(24, Math.ceil(p / 4)), it = (U, It) => {
    n.beginPath();
    for (let V = 0; V <= O; V++) {
      const Q = p * V / O, A = U == null ? 0 : j(Q) + U;
      V ? n.lineTo(Q, A) : n.moveTo(Q, A);
    }
    for (let V = O; V >= 0; V--) {
      const Q = p * V / O;
      n.lineTo(Q, j(Q) + It);
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
  const wt = Math.max(0.5, T), st = 6;
  n.globalAlpha = 1, it(null, -wt);
  for (let U = 0; U < st; U++)
    n.globalAlpha = 1 - (U + 0.5) / st, it(-wt + 2 * wt * U / st, -wt + 2 * wt * (U + 1) / st);
  n.globalAlpha = 1;
  const Z = new Path2D(lm), Y = new Path2D(sm), H = new Path2D(im), xt = new Path2D(cm);
  n.fillStyle = b.star, d.stars.forEach((U) => {
    n.globalAlpha = U.o, U.big ? (n.save(), n.translate(U.x, U.y), n.scale(U.size, U.size), n.fill(Z), n.restore()) : (n.beginPath(), n.arc(U.x, U.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const Pt = Ia(b.sun, "#ffffff", 0.55);
  d.suns.forEach((U) => {
    const It = n.createRadialGradient(U.x, U.y, 0, U.x, U.y, U.halo);
    It.addColorStop(0, nt(Pt, 0.42)), It.addColorStop(0.7, nt(Pt, 0)), n.fillStyle = It, n.beginPath(), n.arc(U.x, U.y, U.halo, 0, Math.PI * 2), n.fill();
    const V = n.createLinearGradient(0, U.y - U.rad, 0, U.y + U.rad);
    V.addColorStop(0.6, b.sun), V.addColorStop(1, b.sunEdge), n.fillStyle = V, ot(!0), n.beginPath(), n.arc(U.x, U.y, U.rad, 0, Math.PI * 2), n.fill(), ot(!1);
  });
  const ct = Ia(b.moon, "#ffffff", 0.6);
  d.moons.forEach((U) => {
    n.save(), n.translate(U.x - U.d / 2, U.y - U.d / 2), n.scale(U.d / 46, U.d / 46);
    const It = n.createLinearGradient(0, 6, 0, 40);
    It.addColorStop(0, ct), It.addColorStop(1, b.moon), n.fillStyle = It, ot(!0), n.fill(Y), ot(!1), n.restore();
  }), d.clouds.forEach((U) => {
    n.save(), n.globalAlpha = U.o, n.translate(U.x, U.y), n.scale(U.w / 46, U.h / 30.66), n.translate(-4, -9.67), n.fillStyle = U.fill, ot(!0), n.fill(H), ot(!1), n.restore();
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
}, tp = ([n, i, d], p) => '<path class="wbMoonPath" d="' + n + '" fill="url(#' + p + ')"/><defs><linearGradient id="' + p + '" x1="0" y1="' + i + '" x2="0" y2="' + d + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', wm = (n, i) => i ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', vm = (n) => (n ? ["29.35", "43.04", "56.74"].map((i, d) => '<g class="wbDrop" style="animation-delay:-' + d * 317 + 'ms"><rect class="wbAccent" x="' + i + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + i + ' 60.65)"/></g>') : [19, 26, 33].map((i, d) => '<g class="wbDrop" style="animation-delay:-' + d * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + i + ' 38)"/></g>')).join(""), ym = (n) => (n ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([i, d], p) => '<circle class="wbFlake" style="animation-delay:-' + p * 640 + 'ms" cx="' + i + '" cy="' + d + '" r="' + (n ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function xm(n, i, d, p) {
  const g = (y) => '<g filter="url(#' + p + '-sh)">' + y + "</g>";
  return n === "clear" ? i ? g(tp(d ? Xi.l : Xi.s, p)) + (d ? Ha(70, 20, 5.83, 1) + Ha(78.33, 41.67, 3.75, 0.8) + Ha(60, 71.67, 3.33, 0.6) : Ha(42, 12, 3.5, 1) + Ha(47, 25, 2.25, 0.8) + Ha(36, 43, 2, 0.6)) : g(wm(p, d)) : n === "partly" ? g(i ? tp(d ? Xi.lp : Xi.sp, p) : d ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + g(Il(d ? dr.lp : dr.sp, i ? "wbCloudLight" : "wbBright")) + (i ? d ? Ha(73.33, 16.67, 4.17, 0.9) : Ha(44, 10, 2.5, 0.9) : "") : n === "cloudy" ? g(Il(d ? dr.lc : dr.s, i ? "wbCloudLight" : "wbBright")) + (i ? d ? Ha(15, 15, 3.75, 0.8) + Ha(76.67, 13.33, 2.92, 0.6) : Ha(9, 9, 2.25, 0.8) + Ha(46, 8, 1.75, 0.6) : "") : g(Il(d ? dr.lr : dr.s, "wbCloudLight")) + (n === "rain" ? vm(d) : ym(d));
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
], Ji = (n, i) => (Sm[i % 8 * 8 + n % 8] + 0.5) / 64, Ka = (n) => [parseInt(n.slice(1, 3), 16), parseInt(n.slice(3, 5), 16), parseInt(n.slice(5, 7), 16)], $e = (n, i, d) => [Math.round(n[0] + (i[0] - n[0]) * d), Math.round(n[1] + (i[1] - n[1]) * d), Math.round(n[2] + (i[2] - n[2]) * d)], Qr = (n) => n < 0 ? 0 : n > 1 ? 1 : n, ep = (n, i) => {
  let d = n * 374761393 + i * 668265263 ^ 1540483477;
  return d = Math.imul(d ^ d >>> 13, 1274126177), ((d ^ d >>> 16) >>> 0) / 4294967296;
}, Fn = [255, 255, 255], aa = Ka("#26221e"), ap = Ka("#0288d1"), _m = Ka("#01579b"), Fl = Ka(Fa.cloudDay), ql = Ka(Fa.cloudNight), Qi = Ka(Fa.dusk), Wl = Ka(Fa.sunEdge), Cm = Ka(Fa.sun), Am = 10, op = 0.3, jo = 56, pu = 21;
function Tm(n) {
  const i = Array.from({ length: pu }, () => new Array(jo).fill(void 0)), d = (b, C, j) => {
    i[C][b] = j;
  }, p = $e(Qi, aa, 0.35), g = $e(aa, Fn, 0.22);
  for (let b = 0; b <= 6; b++) {
    const C = b < 2 ? jo - 2 : jo - 1;
    for (let j = 6 - b; j <= C; j++) d(j, b, b < 2 ? p : b === 6 ? g : aa);
  }
  const y = [Qi, Wl, ql, Ka(Fa.skyRainDay), $e(Qi, aa, 0.2), $e(n, aa, 0.35)];
  [2, 3, 2, 3, 3].forEach((b, C) => {
    const j = 9 + C * 6;
    for (let M = 0; M < b; M++) {
      const T = y[(C * 2 + M * 3) % y.length];
      for (let q = j; q < j + 5; q++)
        d(q, 7 + M * 2, $e(T, aa, 0.12)), d(q, 8 + M * 2, M === b - 1 ? $e(T, Fn, 0.3) : T);
      d(j + 5, 7 + M * 2, aa), d(j + 5, 8 + M * 2, aa);
    }
  });
  for (let b = 7; b <= 12; b++) d(5, b, aa);
  d(5, 13, Wl);
  for (let b = 7; b <= 14; b++) for (let C = 42; C <= 51; C++) d(C, b, C === 51 ? ql : Fl);
  for (let b = 43; b <= 50; b += 2)
    d(b, 12, aa), d(b, 9, $e(aa, Fl, 0.4));
  for (let b = 40; b <= 53; b++) d(b, 14, b === 40 || b === 53 ? ql : Fl);
  for (let b = 15; b <= 18; b++) for (let C = 46; C <= 49; C++) d(C, b, b === 18 ? aa : b === 16 ? Wl : Qi);
  for (let b = 15; b <= 19; b++) d(44, b, aa);
  return d(44, 20, Cm), i;
}
function Lm(n, i, d, p) {
  const g = Math.max(1, Math.round(n)), y = Math.max(1, Math.round(i)), b = new Uint8ClampedArray(g * y * 4), C = Ka(p.skyClearDay), j = Ka(p.skyFogDay), M = Tm(C), T = Math.round(y * 0.55), q = Qr(1 - Math.log(d / op) / Math.log(Am / op)), G = $e(C, j, q), J = (O) => Qr((O - 0.1) / 0.9), ot = Qr((1 - Math.exp(-2 / d) - 0.2) / 0.8), nt = Math.round(g / 2 - jo / 2), K = T + 3;
  for (let O = 0; O < y; O++) {
    const it = K - 1 - O, dt = O - K;
    for (let wt = 0; wt < g; wt++) {
      const st = wt - nt;
      let Z, Y;
      const H = it >= 0 && it < pu && st >= 0 && st < jo ? M[it][st] : void 0;
      if (H)
        Z = H, Y = ot;
      else if (it >= 0 && it <= 1 && st >= 4 - it && st <= 5 - it)
        Z = $e(Fn, ap, 0.15), Y = ot;
      else if (O < T) {
        const ct = Qr(((O + 0.5) / T - 0.15) / 0.85) * 3, U = Math.min(3, Math.floor(ct + Ji(wt + 2, O + 5)));
        Z = $e(G, Fn, U * 0.1), Y = q * 0.95;
      } else {
        const ct = (O - T + 0.5) / (y - T), U = Math.min(1.5, 6e-3 / (ct * ct)), It = Qr(ct * 1.4) * 3, V = Math.min(3, Math.floor(It + Ji(wt + 1, O + 6)));
        Z = $e(ap, _m, V / 3);
        const Q = 1 + Math.round(ct * 7), A = Math.floor(wt / (Q * 3)), ft = 0.06 + 0.16 * ct, rt = wt % (Q * 3) < Q;
        rt && ep(A, O) < ft ? Z = $e(Z, Fn, 0.18 + 0.1 * (1 - ct)) : rt && ct > 0.5 && ep(A, O - 1) < ft && (Z = $e(Z, aa, 0.12)), Y = J(1 - Math.exp(-U / d)), dt === 0 && st >= 3 && st <= 8 ? (Z = $e(Z, Fn, st < 6 ? 0.8 : 0.45), Y = ot) : dt >= 0 && dt <= 2 && st >= jo && st < jo + 40 ? ((1 - (st - jo) / 40) * (dt === 1 ? 0.9 : 0.5) > Ji(wt, O + 3) && (Z = $e(Z, Fn, 0.5)), Y = ot) : dt === 0 && st >= 6 && st < jo && (Z = $e(Z, aa, st % 2 === 0 ? 0.35 : 0.2), Y = ot);
      }
      const xt = Y > Ji(wt, O) ? j : Z, Pt = (O * g + wt) * 4;
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
  const p = (T) => {
    T.classList.remove("mvMoving", "mvLit"), T.style.setProperty("--rx", "0deg"), T.style.setProperty("--ry", "0deg"), T.style.setProperty("--sc", 1), T._down = !1;
  };
  n.addEventListener("pointermove", (T) => {
    var O, it;
    const q = T.pointerType === "touch" || Fe() ? null : (it = (O = T.target).closest) == null ? void 0 : it.call(O, Vl);
    if (d && d !== q && p(d), d = q, !q || q.disabled) return;
    const G = De.pivot, J = q.getBoundingClientRect(), ot = (T.clientX - J.left) / J.width, nt = (T.clientY - J.top) / J.height, K = 1;
    q.classList.add("mvPv", "mvMoving", "mvLit"), q.style.setProperty("--pv-persp", G.persp / ps(Math.max(q.offsetWidth, q.offsetHeight)) + "px"), q.style.setProperty("--ry", (K * (ot - 0.5) * 2 * G.tilt * ps(q.offsetWidth)).toFixed(3) + "deg"), q.style.setProperty("--rx", (K * -(nt - 0.5) * 2 * G.tilt * ps(q.offsetHeight)).toFixed(3) + "deg"), q.style.setProperty("--mx", (ot * 100).toFixed(1) + "%"), q.style.setProperty("--my", (nt * 100).toFixed(1) + "%"), q._down || q.style.setProperty("--sc", jl(q, G.lift));
  }, { passive: !0 }), n.addEventListener("pointerout", (T) => {
    d && !d.contains(T.relatedTarget) && (p(d), d = null);
  }), n.addEventListener("pointerdown", (T) => {
    var G, J;
    const q = Fe() ? null : (J = (G = T.target).closest) == null ? void 0 : J.call(G, Vl);
    q && (q._down = !0, q.classList.add("mvPv"), q.classList.remove("mvMoving"), q.style.setProperty("--sc", jl(q, De.pivot.press)));
  }), n.addEventListener("pointerup", (T) => {
    var G, J;
    const q = (J = (G = T.target).closest) == null ? void 0 : J.call(G, Vl);
    q && (q._down = !1, q.style.setProperty("--sc", T.pointerType === "touch" ? 1 : jl(q, De.pivot.lift)));
  });
  let g = null;
  n.addEventListener("pointerover", (T) => {
    var q, G, J;
    T.pointerType !== "touch" && ((J = (G = (q = T.target).closest) == null ? void 0 : G.call(q, ".tfBar")) == null || J.classList.add("mvHover"));
  }), n.addEventListener("pointerout", (T) => {
    var G, J;
    const q = (J = (G = T.target).closest) == null ? void 0 : J.call(G, ".tfBar");
    q && !q.contains(T.relatedTarget) && q !== g && q.classList.remove("mvHover");
  }), n.addEventListener("pointerdown", (T) => {
    var G, J;
    const q = (J = (G = T.target).closest) == null ? void 0 : J.call(G, ".tfBar");
    q && (g = q, q.classList.add("mvHold"));
  });
  const y = (T) => {
    if (!g) return;
    g.classList.remove("mvHold");
    const q = g.getBoundingClientRect();
    (T.pointerType === "touch" || T.clientX < q.left || T.clientX > q.right || T.clientY < q.top || T.clientY > q.bottom) && g.classList.remove("mvHover"), g = null;
  };
  window.addEventListener("pointerup", y, !0), window.addEventListener("pointercancel", y, !0), n.addEventListener("focusin", (T) => {
    var q, G;
    (G = (q = T.target).matches) != null && G.call(q, ".tfBar:focus-visible") && T.target.classList.add("mvHover");
  }), n.addEventListener("focusout", (T) => {
    var q;
    (q = T.target.classList) == null || q.remove("mvHover", "mvHold");
  }), n.addEventListener("keydown", (T) => {
    var G, J;
    const q = (J = (G = T.target).closest) == null ? void 0 : J.call(G, ".tfBar");
    !q || !["ArrowRight", "ArrowUp", "ArrowLeft", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(T.key) || (q.classList.add("mvHold"), clearTimeout(q._k), q._k = setTimeout(() => q.classList.remove("mvHold"), 350));
  }), n.addEventListener("click", (T) => {
    var G, J;
    const q = (J = (G = T.target).closest) == null ? void 0 : J.call(G, "button.tfIcon[data-act]");
    q && Fm(q);
  });
  let b = null;
  const C = (T, q, G) => {
    T.querySelector(":scope>.mvEdge") || T.insertAdjacentHTML("afterbegin", '<span class="mvEdgeFill" aria-hidden="true"></span><span class="mvEdge" aria-hidden="true"><i></i></span>');
    const J = T.getBoundingClientRect(), ot = J.width / 2, nt = J.height / 2, K = q.clientX - J.left - ot, O = q.clientY - J.top - nt, it = K ? ot / Math.abs(K) : 1 / 0, dt = O ? nt / Math.abs(O) : 1 / 0, wt = Math.min(Math.max(1 / Math.min(it, dt), 0), 1);
    let st = Math.atan2(O, K) * 180 / Math.PI + 90;
    st < 0 && (st += 360);
    const Z = G ? 100 : wt * 100;
    T.style.setProperty("--edge-proximity", Z.toFixed(3)), T.style.setProperty("--cursor-angle", st.toFixed(3) + "deg"), T.classList.toggle("mvLitEdge", G || Z >= De.outline.lightAt);
  }, j = (T) => {
    T.classList.remove("mvLitEdge"), T.style.setProperty("--edge-proximity", "0"), T._down = !1;
  }, M = (T) => {
    var G;
    const q = (G = T.closest) == null ? void 0 : G.call(T, Nm);
    return q && !i.classList.contains("tfEditing") ? q : null;
  };
  n.addEventListener("pointermove", (T) => {
    if (T.pointerType === "touch") return;
    const q = M(T.target);
    b && b !== q && j(b), b = q, q && !q._down && C(q, T, !1);
  }, { passive: !0 }), n.addEventListener("pointerout", (T) => {
    b && !b.contains(T.relatedTarget) && (j(b), b = null);
  }), n.addEventListener("pointerdown", (T) => {
    const q = M(T.target);
    q && De.outline.press && (q._down = !0, C(q, T, !0));
  }), n.addEventListener("pointerup", (T) => {
    const q = M(T.target);
    q && (q._down = !1, T.pointerType === "touch" ? j(q) : C(q, T, !1));
  }), new MutationObserver((T) => {
    var q;
    for (const G of T) {
      const J = G.target;
      if (G.type === "attributes") {
        (q = J.classList) != null && q.contains("tfMoreBackdrop") && !J.hidden && G.oldValue !== null && np(J);
        continue;
      }
      G.addedNodes.forEach((ot) => {
        ot.nodeType === 1 && ot.classList.contains("tfMoreBackdrop") && !ot.hidden && np(ot);
      });
    }
  }).observe(i, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["hidden"], attributeOldValue: !0 });
}
const uu = (n) => n.closest("[data-k],.tfMore,.tfMorePair") || n.getRootNode();
function fu(n, i) {
  const d = [];
  for (let p = n; p && p !== i && p.parentNode; p = p.parentNode) d.unshift([...p.parentNode.children].indexOf(p));
  return d;
}
const hu = (n, i) => i.reduce((d, p) => d == null ? void 0 : d.children[p], n);
function Fm(n) {
  var J;
  if (Fe() || n._warp) return;
  const i = De.warp, d = i.amount / 100, p = n.firstElementChild;
  if (!p) return;
  const g = { squash: { scale: 1 + 0.35 * d + " " + (1 - 0.55 * d) }, pinch: { scale: String(1 - 0.5 * d) }, twist: { rotate: 140 * d + "deg", scale: String(1 - 0.35 * d) }, flip: { rotate: "y 90deg" } }[i.style], y = "blur(" + 2 * d + "px)", b = n.getRootNode(), C = uu(n), j = (J = C.dataset) == null ? void 0 : J.k, M = fu(n, C), T = n.getAttribute("aria-pressed") + "|" + n.dataset.act;
  n._warp = 1;
  const q = p.animate([{ scale: "1", rotate: "none", filter: "blur(0px)" }, { ...g, filter: y }], { duration: i.win, easing: Ee.exit, fill: "forwards" }), G = performance.now();
  q.finished.then(() => {
    const ot = () => {
      var wt, st;
      const nt = j ? C.isConnected ? C : (wt = b.querySelector) == null ? void 0 : wt.call(b, '[data-k="' + CSS.escape(j) + '"]') : C, K = nt && hu(nt, M);
      if (K === n && n.getAttribute("aria-pressed") + "|" + n.dataset.act === T && performance.now() - G < 420) {
        requestAnimationFrame(ot);
        return;
      }
      (((st = K == null ? void 0 : K.matches) != null && st.call(K, "button.tfIcon") ? K : n).firstElementChild || p).animate([{ ...g, filter: y }, { scale: "1", rotate: "none", filter: "blur(0px)" }], { duration: i.wout, easing: Ee[i.ease] }), q.cancel(), n._warp = 0;
    };
    ot();
  });
}
const mu = (n) => {
  let i = "M" + n[0][0].toFixed(1) + " " + n[0][1].toFixed(1);
  for (let d = 0; d < n.length - 1; d++) {
    const p = n[d - 1] || n[d], g = n[d], y = n[d + 1], b = n[d + 2] || y, C = [g[0] + (y[0] - p[0]) / 6, g[1] + (y[1] - p[1]) / 6], j = [y[0] - (b[0] - g[0]) / 6, y[1] - (b[1] - g[1]) / 6];
    i += "C" + C.map((M) => M.toFixed(1)).join(" ") + " " + j.map((M) => M.toFixed(1)).join(" ") + " " + y.map((M) => M.toFixed(1)).join(" ");
  }
  return i;
}, gu = (n, i, d, p = "mvGrid") => [0, 1, 2].map((g) => {
  const y = (i + (d - i) * g / 2).toFixed(1);
  return '<line class="' + p + '" x1="0" x2="' + n + '" y1="' + y + '" y2="' + y + '"/>';
}).join("");
function bu(n, i = n.querySelector(".mvLine"), d = n.querySelectorAll(".mvArea,.mvDot")) {
  if (Fe() || !(i != null && i.getTotalLength)) return;
  const p = De.graphs, g = i.getTotalLength();
  i.animate([{ strokeDasharray: g, strokeDashoffset: g }, { strokeDasharray: g, strokeDashoffset: 0 }], { duration: p.draw, easing: Ee.standard }), [...d].forEach((y, b) => y.animate([{ opacity: 0 }, { opacity: 1 }], { duration: p.draw * 0.6, delay: p.draw * 0.3 + b * 12, easing: Ee.standard, fill: "backwards" }));
}
function us(n, i, d, p, g) {
  if (n.getAnimations().forEach((T) => T.cancel()), n.style.left = p + "px", n.style.width = g + "px", Fe() || i === p && d === g) return;
  const y = De.tabs, b = y.stretch / 100, C = (T, q) => ({ left: T + "px", width: q + "px" }), M = p > i ? C(i + (p - i) * (0.15 * (1 - b)), p + g - (i + (p - i) * (0.15 * (1 - b)))) : C(p, i + d - p - (i - p) * (0.15 * (1 - b)));
  n.animate([C(i, d), { offset: 0.5, ...M }, C(p, g)], { duration: y.dur, easing: Ee.standard });
}
function qm(n) {
  const i = ":is(.themeChoice,.wbSegments,.tfHeightTabs,.hcSeg,.tfSeg)", d = (g) => g.querySelector(':scope>[aria-pressed="true"],:scope>[aria-checked="true"],:scope>.active'), p = (g, y) => y ? [...g.children].indexOf(y) : -1;
  n.addEventListener("click", (g) => {
    var it, dt, wt;
    const y = (dt = (it = g.target).closest) == null ? void 0 : dt.call(it, i + ">button"), b = y == null ? void 0 : y.parentElement;
    if (!b || Fe() || y.disabled) return;
    const C = d(b);
    if (!C || C === y) return;
    const j = p(b, C), M = b.getBoundingClientRect(), T = C.getBoundingClientRect(), q = getComputedStyle(C).borderRadius, G = b.getRootNode(), J = uu(b), ot = (wt = J.dataset) == null ? void 0 : wt.k, nt = fu(b, J), K = performance.now(), O = () => {
      var U, It, V;
      const st = ot && !J.isConnected ? (U = G.querySelector) == null ? void 0 : U.call(G, '[data-k="' + CSS.escape(ot) + '"]') : J, Z = st && hu(st, nt), Y = (It = Z == null ? void 0 : Z.matches) != null && It.call(Z, i) ? d(Z) : null;
      if (!Y || p(Z, Y) === j) {
        performance.now() - K < 700 && requestAnimationFrame(O);
        return;
      }
      const H = Z.getBoundingClientRect(), xt = Y.getBoundingClientRect(), Pt = getComputedStyle(Y);
      (V = Z.querySelector(":scope>.mvSegInd")) == null || V.remove();
      const ct = document.createElement("span");
      ct.className = "mvSegInd", ct.style.cssText = "top:" + (xt.top - H.top - Z.clientTop) + "px;height:" + xt.height + "px;border-radius:" + q + ";background:" + Pt.backgroundColor + ";box-shadow:" + Pt.boxShadow, getComputedStyle(Z).position === "static" && (Z.style.position = "relative"), Z.prepend(ct), Z.classList.add("mvSegMoving"), us(ct, T.left - M.left - Z.clientLeft, T.width, xt.left - H.left - Z.clientLeft, xt.width), clearTimeout(Z._seg), Z._seg = setTimeout(() => {
        ct.remove(), Z.classList.remove("mvSegMoving");
      }, De.tabs.dur + 20);
    };
    requestAnimationFrame(O);
  }, !0);
}
const wu = (n) => getComputedStyle(n).placeItems.startsWith("end");
function np(n) {
  const i = n.firstElementChild;
  if (Fe() || !i || i.classList.contains("still")) return;
  const d = De.dialog;
  n.animate([{ opacity: 0, backdropFilter: "blur(0px)" }, { opacity: 1, backdropFilter: "blur(" + d.blur + "px)" }], { duration: d.open, easing: Ee.standard }), i.style.animation = "none", i.animate(wu(n) ? [{ transform: "translateY(100%)" }, { transform: "none" }] : [{ opacity: 0, transform: "scale(" + d.from / 100 + ")" }, { opacity: 1, transform: "none" }], { duration: d.open, easing: Ee[d.ease] }), [...(i.classList.contains("tfMorePair") && i.querySelector(".tfMore") || i).children].forEach((g, y) => g.animate([{ opacity: 0 }, { opacity: 1 }], { duration: d.open * 0.6, delay: d.open * 0.35 + y * 40, easing: Ee.standard, fill: "backwards" }));
}
function Wm(n, i) {
  const d = n == null ? void 0 : n.firstElementChild;
  if (Fe() || !d || n.hidden || n._closing) {
    i();
    return;
  }
  const p = De.dialog;
  n._closing = !0, n.style.pointerEvents = "none", n.animate([{ opacity: 1, backdropFilter: "blur(" + p.blur + "px)" }, { opacity: 0, backdropFilter: "blur(0px)" }], { duration: p.close, easing: Ee.exit, fill: "forwards" });
  const g = d.animate(wu(n) ? [{ transform: "none" }, { transform: "translateY(100%)" }] : [{ opacity: 1, transform: "none" }, { opacity: 0, transform: "scale(" + p.from / 100 + ")" }], { duration: p.close, easing: Ee.exit, fill: "forwards" });
  let y = !1;
  const b = () => {
    y || (y = !0, n._closing = !1, n.style.pointerEvents = "", n.getAnimations().forEach((C) => C.cancel()), d.getAnimations().forEach((C) => C.cancel()), i());
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
function rp(n) {
  if (!n || Fe()) return;
  const i = De.expand;
  [...n.children].slice(1).forEach((d, p) => d.animate([{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "none" }], { duration: 260, delay: i.delay + p * i.stagger, easing: "cubic-bezier(.2,0,0,1)", fill: "backwards" }));
}
const Ie = 6e4, oe = 36e5, ha = 864e5, ni = 1440, Gm = 6, Um = 10 * Ie, ip = 3, Ym = 3, ts = { day: [6, 22], waking: [7, 23], all: [0, 24] }, Zm = [[-5, [91, 141, 239]], [5, [79, 195, 230]], [12, [95, 211, 160]], [18, [255, 211, 77]], [24, [255, 159, 67]], [30, [255, 91, 79]]], $m = "M6.5 18.5h11a4 4 0 0 0 .4-7.98 5.5 5.5 0 0 0-10.6-1.1A4.5 4.5 0 0 0 6.5 18.5Z", sp = (n, i, d, p) => '<circle cx="' + n + '" cy="' + i + '" r="' + d + '"/><path d="' + [0, 45, 90, 135, 180, 225, 270, 315].map((g) => {
  const y = Math.cos(g * Math.PI / 180), b = Math.sin(g * Math.PI / 180), C = d + 2, j = d + 2 + p;
  return "M" + (n + y * C).toFixed(2) + " " + (i + b * C).toFixed(2) + "L" + (n + y * j).toFixed(2) + " " + (i + b * j).toFixed(2);
}).join("") + '"/>', No = (n) => '<path d="' + $m + '"' + (n ? ' transform="' + n + '"' : "") + "/>", Oo = (n) => '<path d="' + n + '"/>', lp = '<path d="M19.5 14.5A7.5 7.5 0 1 1 9.5 4.5a6 6 0 0 0 10 10Z"/>';
function Km(n, i) {
  const d = "translate(0,-3)";
  switch (n) {
    case "sunny":
      return i ? lp : sp(12, 12, 4, 2.5);
    case "clear-night":
      return lp;
    case "partlycloudy":
      return (i ? '<path d="M11.5 9.5A4.5 4.5 0 1 1 6 4a3.6 3.6 0 0 0 5.5 5.5Z"/>' : sp(7.5, 7.5, 2.6, 1.4)) + No("translate(3.6,3) scale(.85)");
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
const Ul = (n, i) => '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + Km(n, i) + "</svg>", Xm = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), Jm = 30 * Ie, Qm = 7, t1 = 3, cp = 1, e1 = Ie, a1 = 15 * Ie, o1 = 5, ne = {
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
}, dc = 7, Fo = 256, n1 = 3, dp = 700, r1 = 1800, vu = 5 * Ie;
let es = null, pp = 0, ti = null;
function i1() {
  return es && Date.now() - pp < vu ? Promise.resolve(es) : ti || (ti = fetch("https://api.rainviewer.com/public/weather-maps.json").then((n) => n.ok ? n.json() : Promise.reject(new Error(String(n.status)))).then((n) => {
    var p, g;
    const i = (((p = n.radar) == null ? void 0 : p.past) || []).slice(-6), d = (((g = n.radar) == null ? void 0 : g.nowcast) || []).slice(0, n1);
    return es = { host: n.host, frames: [...i.map((y) => ({ ...y, past: !0 })), ...d] }, pp = Date.now(), es;
  }).finally(() => {
    ti = null;
  }), ti);
}
function s1(n, i, d, p) {
  const g = dc, y = 2 ** g, b = n * Math.PI / 180, C = (i + 180) / 360 * y * Fo, j = (1 - Math.log(Math.tan(b) + 1 / Math.cos(b)) / Math.PI) / 2 * y * Fo, M = C - d / 2, T = j - p / 2, q = [];
  for (let G = Math.floor(M / Fo); G <= Math.floor((M + d - 1) / Fo); G++) for (let J = Math.floor(T / Fo); J <= Math.floor((T + p - 1) / Fo); J++)
    J < 0 || J >= y || q.push({ x: (G % y + y) % y, y: J, left: G * Fo - M, top: J * Fo - T });
  return q;
}
const l1 = {
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
}, c1 = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], d1 = Object.keys(gt.phases), p1 = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)", extreme: "var(--purple-color, #926bc7)" }, up = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, yu = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], as = 100, fp = "µg/m³", u1 = "weather_alerts.air_quality_pollen", gs = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], f1 = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, h1 = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], m1 = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, g1 = { daily: 1, hourly: 2 }, yt = (n) => String(n ?? "").replace(/[&<>"']/g, (i) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[i]), Ze = (n, i) => n.replace(/\{(\w+)\}/g, (d, p) => i[p] ?? ""), Wo = (n) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + n + '"/></svg>', hp = /* @__PURE__ */ new Map();
function xu(n) {
  let i = hp.get(n);
  if (i === void 0) {
    const d = "http://www.w3.org/2000/svg", p = document.createElementNS(d, "svg"), g = document.createElementNS(d, "path");
    p.setAttribute("viewBox", "0 0 24 24"), p.style.cssText = "position:absolute;width:24px;height:24px;visibility:hidden;pointer-events:none", g.setAttribute("d", n), p.append(g), document.body.append(p);
    const y = g.getBBox();
    p.remove();
    const b = Math.max(y.width, y.height), C = b ? 26 * 24 / b : 0, j = C / 24;
    i = b ? "width:" + C.toFixed(2) + "px;height:" + C.toFixed(2) + "px;translate:" + ((12 - y.x - y.width / 2) * j).toFixed(2) + "px " + ((12 - y.y - y.height / 2) * j).toFixed(2) + "px" : "", hp.set(n, i);
  }
  return i ? '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true" style="' + i + '"><path d="' + n + '"/></svg>' : Wo(n);
}
const b1 = () => {
  var n;
  return !!((n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches);
}, pe = (n) => n != null && n !== "" && Number.isFinite(Number(n)), mp = /* @__PURE__ */ new Map(), gp = /* @__PURE__ */ new Map(), Yl = /* @__PURE__ */ new WeakMap(), w1 = (n) => {
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
  const g = (i == null ? void 0 : i.number_format) === "none", y = { maximumFractionDigits: 2, ...d, ...g ? { useGrouping: !1 } : {} }, b = g ? "en-US" : w1(i), C = JSON.stringify([b, y]);
  let j = mp.get(C);
  if (!j) {
    try {
      j = new Intl.NumberFormat(b, y);
    } catch {
      j = new Intl.NumberFormat(void 0, y);
    }
    mp.set(C, j);
  }
  return j.format(p);
}
const uc = (n) => {
  var i;
  return ((i = n == null ? void 0 : n.locale) == null ? void 0 : i.language) || (n == null ? void 0 : n.language) || void 0;
};
function v1(n) {
  if (!n) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (Yl.has(n)) return Yl.get(n);
  const i = n.time_format, d = i === "language" || i === "system" || !i ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(i === "language" ? n.language : void 0).includes("10") : i === "12";
  return Yl.set(n, d), d;
}
const Mu = (n) => {
  var i, d;
  return ((i = n == null ? void 0 : n.locale) == null ? void 0 : i.time_zone) === "server" && ((d = n == null ? void 0 : n.config) != null && d.time_zone) ? n.config.time_zone : void 0;
};
function ku(n, i) {
  const d = JSON.stringify([n, i]);
  let p = gp.get(d);
  if (!p) {
    try {
      p = new Intl.DateTimeFormat(n, i);
    } catch {
      p = new Intl.DateTimeFormat(void 0, { ...i, timeZone: void 0 });
    }
    gp.set(d, p);
  }
  return p;
}
const Ue = (n, i) => ku(uc(i), { hour: "numeric", minute: "2-digit", hourCycle: v1(i == null ? void 0 : i.locale) ? "h12" : "h23", timeZone: Mu(i) }).format(n), bp = (n, i) => ku(uc(i), { weekday: "short", timeZone: Mu(i) }).format(n), y1 = (n, i) => n.toLocaleDateString(uc(i), { weekday: "narrow" }), ve = (n, i) => pe(i) ? Xt(Math.round(Number(i)), n.locale) + "°" : "–", on = (n) => {
  const i = new Date(n);
  return i.setHours(0, 0, 0, 0), i;
}, pr = (n, i) => n.getFullYear() === i.getFullYear() && n.getMonth() === i.getMonth() && n.getDate() === i.getDate(), oa = Math.PI / 180, x1 = 2440588, M1 = 2451545, bs = oa * 23.4397, k1 = 149598e3, S1 = -0.833 * oa, _1 = 0.133 * oa, wp = 5 * Ie, Su = (n) => n.getTime() / ha - 0.5 + x1 - M1, _u = (n, i) => Math.atan2(Math.sin(n) * Math.cos(bs) - Math.tan(i) * Math.sin(bs), Math.cos(n)), Cu = (n, i) => Math.asin(Math.sin(i) * Math.cos(bs) + Math.cos(i) * Math.sin(bs) * Math.sin(n)), C1 = (n, i) => oa * (280.16 + 360.9856235 * n) - i, A1 = (n, i, d) => Math.asin(Math.sin(i) * Math.sin(d) + Math.cos(i) * Math.cos(d) * Math.cos(n));
function Au(n) {
  const i = oa * (357.5291 + 0.98560028 * n), d = oa * (1.9148 * Math.sin(i) + 0.02 * Math.sin(2 * i) + 3e-4 * Math.sin(3 * i)), p = i + d + oa * 102.9372 + Math.PI;
  return { ra: _u(p, 0), dec: Cu(p, 0), dist: k1 };
}
function Tu(n) {
  const i = oa * (218.316 + 13.176396 * n), d = oa * (134.963 + 13.064993 * n), p = oa * (93.272 + 13.22935 * n), g = i + oa * 6.289 * Math.sin(d), y = oa * 5.128 * Math.sin(p);
  return { ra: _u(g, y), dec: Cu(g, y), dist: 385001 - 20905 * Math.cos(d) };
}
const Lu = (n, i, d, p) => {
  const g = Su(i), y = n(g);
  return A1(C1(g, oa * -p) - y.ra, oa * d, y.dec);
}, ws = (n, i, d) => Lu(Au, n, i, d), T1 = (n, i, d) => Lu(Tu, n, i, d);
function Du(n, i, d, p) {
  const g = {};
  let y = d.getTime(), b = n(d) - i;
  for (let C = y + wp; C <= p.getTime(); C += wp) {
    const j = n(new Date(C)) - i;
    if (b < 0 != j < 0) {
      const M = new Date(y + (C - y) * b / (b - j));
      j > 0 ? g.rise ?? (g.rise = M) : g.set ?? (g.set = M);
    }
    y = C, b = j;
  }
  return g;
}
const Eu = (n) => {
  const i = on(n);
  return [i, new Date(i.getTime() + ha)];
}, L1 = (n, i, d) => Du((p) => ws(p, i, d), S1, ...Eu(n)), D1 = (n, i, d) => Du((p) => T1(p, i, d), _1, ...Eu(n));
function Zl(n) {
  const i = Su(n), d = Au(i), p = Tu(i), g = Math.acos(Math.sin(d.dec) * Math.sin(p.dec) + Math.cos(d.dec) * Math.cos(p.dec) * Math.cos(d.ra - p.ra)), y = Math.atan2(d.dist * Math.sin(g), p.dist - d.dist * Math.cos(g)), b = Math.atan2(Math.cos(d.dec) * Math.sin(d.ra - p.ra), Math.sin(d.dec) * Math.cos(p.dec) - Math.cos(d.dec) * Math.sin(p.dec) * Math.cos(d.ra - p.ra));
  return { fraction: (1 + Math.cos(y)) / 2, phase: 0.5 + 0.5 * y * (b < 0 ? -1 : 1) / Math.PI };
}
const E1 = (n) => {
  const i = n * 28;
  return i < 0.5 || i > 27.5 ? "new_moon" : i < 6.5 ? "waxing_crescent" : i < 7.5 ? "first_quarter" : i < 13.5 ? "waxing_gibbous" : i < 14.5 ? "full_moon" : i < 20.5 ? "waning_gibbous" : i < 21.5 ? "last_quarter" : "waning_crescent";
}, gr = (n) => {
  const i = n == null ? void 0 : n.config;
  return i && pe(i.latitude) && pe(i.longitude) ? { lat: Number(i.latitude), lon: Number(i.longitude) } : null;
};
function ur(n, i) {
  var M, T, q;
  const d = gr(n), p = d ? L1(i, d.lat, d.lon) : {}, g = (M = n == null ? void 0 : n.states) == null ? void 0 : M["sun.sun"], y = on(i).getTime(), b = (G) => {
    const J = G ? new Date(G) : null;
    return J && Number.isFinite(J.getTime()) && on(J).getTime() === y ? J : null;
  }, C = b((T = g == null ? void 0 : g.attributes) == null ? void 0 : T.next_rising), j = b((q = g == null ? void 0 : g.attributes) == null ? void 0 : q.next_setting);
  return C && (p.rise = C), j && (p.set = j), p;
}
function B1(n) {
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
    const C = (g = b.attributes) == null ? void 0 : g[d];
    if (C != null && C !== "") return { stateObj: b, value: C };
  }
}, R1 = (n, i) => i.map((d) => {
  var p;
  return (p = n.states) == null ? void 0 : p[d];
}).find(qn), P1 = (n, i, d) => i.map((p) => {
  var g;
  return (g = n.states) == null ? void 0 : g[p];
}).find((p) => {
  var g;
  return qn(p) && (((g = p.attributes) == null ? void 0 : g.supported_features) == null || Number(p.attributes.supported_features) & g1[d]);
});
function an(n, i, d) {
  var y, b, C, j;
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
      return g.temperature_unit || ((j = (C = n.config) == null ? void 0 : C.unit_system) == null ? void 0 : j.temperature) || "";
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
function vp(n, i, d, p) {
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
  return l1[i.state] || (d && pe(i.state) ? Xt(i.state, n.locale) + " " + d : i.state);
}
function tn(n, i) {
  var d;
  try {
    if (typeof n.formatEntityName == "function") return n.formatEntityName(i, { type: "entity" });
  } catch {
  }
  return ((d = i.attributes) == null ? void 0 : d.friendly_name) || i.entity_id;
}
const yp = (n) => n < 3 ? "low" : n < 6 ? "moderate" : n < 8 ? "high" : n < 11 ? "very_high" : "extreme", os = (n) => yu.find(([, i]) => n <= i)[0];
function H1(n, i) {
  if (i === "Beaufort") return Math.round(n);
  const d = i ? f1[i] : void 0;
  if (d === void 0) return;
  const p = h1.findIndex((g) => n * d < g);
  return p === -1 ? 12 : p;
}
const xp = (n, i) => {
  const d = i ? m1[i] : void 0;
  return d === void 0 ? void 0 : n * d;
}, Mp = (n) => Object.keys(n.states || {}).find((i) => {
  var d, p;
  return i.startsWith("sensor.") && ((p = (d = n.entities) == null ? void 0 : d[i]) == null ? void 0 : p.platform) === "moon";
}), $l = (n) => Object.values(n.states || {}).filter((i) => {
  var d, p;
  return i.entity_id.startsWith("sensor.") && ((d = i.attributes) == null ? void 0 : d.device_class) === "precipitation" && ["total", "total_increasing"].includes(((p = i.attributes) == null ? void 0 : p.state_class) ?? "") && br(n, i.entity_id);
}).map((i) => i.entity_id).sort()[0];
function N1(n) {
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
const Bu = (n, i, d) => {
  var g, y, b;
  const p = (y = (g = n.entities) == null ? void 0 : g[d]) == null ? void 0 : y.platform;
  return !!p && !!((b = i[p]) != null && b.includes(u1));
};
function O1(n, i) {
  const d = /* @__PURE__ */ new Map();
  return Object.values(n.states || {}).filter((p) => {
    var g;
    return p.entity_id.startsWith("sensor.") && gs.includes(((g = p.attributes) == null ? void 0 : g.device_class) ?? "") && br(n, p.entity_id) && Bu(n, i, p.entity_id);
  }).sort((p, g) => p.entity_id.localeCompare(g.entity_id)).forEach((p) => {
    d.has(p.attributes.device_class) || d.set(p.attributes.device_class, p.entity_id);
  }), gs.map((p) => d.get(p)).filter(Boolean);
}
const I1 = (n, i) => Object.values(n.states || {}).filter((d) => {
  var p, g;
  return d.entity_id.startsWith("sensor.") && br(n, d.entity_id) && Bu(n, i, d.entity_id) && (((g = (p = n.entities) == null ? void 0 : p[d.entity_id]) == null ? void 0 : g.translation_key) ?? d.entity_id).toLowerCase().includes("pollen");
}).map((d) => d.entity_id).sort();
function kp(n, i, d) {
  const p = Math.max(i - n, 1e-6), g = d[d.length - 1], y = d.find((M) => p / M <= 4) ?? g * Math.ceil(p / (4 * g)), b = Math.floor(n / y) * y;
  let C = Math.ceil(i / y) * y;
  C === b && (C = b + y);
  const j = [];
  for (let M = b; M <= C + y / 1e3; M += y) j.push(M);
  return { min: b, max: C, ticks: j };
}
const F1 = (n, i, d) => {
  const p = (b) => [1, 3, 5].map((C) => parseInt(b.slice(C, C + 2), 16)), g = p(n), y = p(i);
  return "rgb(" + g.map((b, C) => Math.round(b + (y[C] - b) * d)).join(", ") + ")";
}, q1 = (n, i, d, p) => {
  const g = d * Math.abs(1 - 2 * p), y = p < 0.5 ? 0 : 1;
  return "M " + n + " " + (i - d) + " A " + d + " " + d + " 0 0 0 " + n + " " + (i + d) + " A " + g + " " + d + " 0 0 " + y + " " + n + " " + (i - d) + " Z";
}, ea = ({ icon: n, name: i, sub: d, visual: p, double: g, backdrop: y, cls: b, zone: C, callouts: j }) => '<div class="wbCard wbSquare' + (g ? " wbDouble" : "") + (y ? " wbHasBackdrop" : "") + (C != null ? " wbZoned" : "") + (b ? " " + b : "") + '">' + (y ? '<div class="wbBackdrop" aria-hidden="true">' + y + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + xu(n) + '</div><div class="wbText"><span class="wbName">' + yt(i) + "</span>" + (d ? '<span class="wbSub">' + yt(d) + "</span>" : "") + "</div></div>" + (C != null ? '<div class="wbZone">' + C + "</div>" + (j != null && j.length ? '<div class="wbCallouts">' + j.slice(0, 3).map((M) => Array.isArray(M) ? '<span class="wbCallout"><span>' + yt(M[0]) + "</span><span>" + yt(M[1]) + "</span></span>" : '<span class="wbCallout wbAdvice"><span>' + yt(M) + "</span></span>").join("") + "</div>" : "") : '<div class="wbVisual">' + p + "</div>") + "</div>", ns = (n) => '<div class="wbZoneM">' + n + "</div>", Na = (n, i) => '<div class="wbValue"><span class="wbNum">' + yt(n) + "</span>" + (i ? '<span class="wbUnitV">' + yt(i) + "</span>" : "") + "</div>";
function W1(n) {
  const i = n.max - n.min || 1, d = (C) => 100 - (Math.min(n.max, Math.max(n.min, C)) - n.min) / i * 100, p = (C) => C / ni * 100 + "%", g = (C) => C.map((j) => j.t + "," + d(j.v)).join(" "), y = n.kind === "line" ? n.points : [];
  let b = '<div class="wbDayChart"><div class="wbDcSun">' + n.sun.map((C) => '<span class="wbDcSunMark" style="left:' + p(C.t) + '">' + Wo(C.rise ? ne.sunsetUp : ne.sunsetDown) + yt(C.label) + "</span>").join("") + "</div>";
  return b += '<div class="wbDcY">' + n.ticks.map((C) => '<span style="top:' + d(C) + '%">' + yt(n.format(C)) + "</span>").join("") + "</div>", b += '<div class="wbDcPlot"><svg viewBox="0 0 ' + ni + ' 100" preserveAspectRatio="none">' + n.night.map(([C, j]) => '<rect class="wbDcNight" x="' + C + '" y="0" width="' + (j - C) + '" height="100"></rect>').join("") + n.ticks.map((C) => '<line class="wbDcGrid" x1="0" x2="' + ni + '" y1="' + d(C) + '" y2="' + d(C) + '" vector-effect="non-scaling-stroke"></line>').join("") + n.sun.map((C) => '<line class="wbDcSunLine" x1="' + C.t + '" x2="' + C.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (n.past && n.past.length > 1 ? '<polyline class="wbDcPast" points="' + g(n.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (y.length > 1 ? '<polygon class="wbDcArea" points="' + y[0].t + ",100 " + g(y) + " " + y[y.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + g(y) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (n.now ? '<line class="wbDcNow" x1="' + n.now.t + '" x2="' + n.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (n.kind === "bars" ? n.points.filter((C) => C.v > 0).map((C) => '<i class="wbDcBar" style="left:' + p(C.t + 12) + ";width:" + p(36) + ";height:" + (100 - d(C.v)) + '%"></i>').join("") : "") + (n.now && n.kind === "line" ? '<i class="wbDcDot" style="left:' + p(n.now.t) + ";top:" + d(n.now.v) + '%"></i>' : "") + (n.peak ? '<span class="wbDcPeak" style="left:' + p(n.peak.t) + ";top:" + d(n.peak.v) + '%">' + yt(n.peak.label) + "</span>" : "") + (n.note ? '<span class="wbDcNote">' + yt(n.note) + "</span>" : "") + "</div>", b += '<div class="wbDcX">' + n.hours.map((C) => '<span class="' + (C.minor ? "wbMinor" : "") + '" style="left:' + p(C.t) + '">' + yt(C.label) + "</span>").join("") + "</div></div>", b;
}
function Sp(n, i, d = 120, p = 300) {
  const b = n.map((O) => O.value), C = Math.min(...b), j = Math.max(...b), M = j - C || 1, T = (O) => O / (n.length - 1) * p, q = (O) => 18 + (1 - (O - C) / M) * (d - 18 - 18), G = n.map((O, it) => [T(it), q(O.value)]), J = G.length > 2 ? mu(G) : "M" + G.map((O) => O[0].toFixed(1) + " " + O[1].toFixed(1)).join("L"), ot = b.indexOf(j), nt = b.indexOf(C), K = (O) => O === 0 ? "start" : O === n.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 ' + p + " " + d + '" aria-hidden="true">' + gu(p, 18, d - 18) + ('<path class="wbArea" d="' + J + "L" + p + " " + (d - 18) + "L0 " + (d - 18) + 'Z"></path>') + '<path class="wbLine" d="' + J + '" vector-effect="non-scaling-stroke"></path><text x="' + T(ot) + '" y="' + (q(j) - 6) + '" text-anchor="' + K(ot) + '">' + yt(i(j)) + '</text><text x="' + T(nt) + '" y="' + (q(C) + 14) + '" text-anchor="' + K(nt) + '">' + yt(i(C)) + '</text><text x="0" y="' + d + '" text-anchor="start">' + yt(n[0].label) + '</text><text x="' + p + '" y="' + d + '" text-anchor="end">' + yt(n[n.length - 1].label) + "</text></svg>";
}
function V1(n, i) {
  const y = n.map((q) => q.value).concat([]), b = Math.min(...y) - 2, C = Math.max(...y) + 1, j = C - b || 1, M = 300 / n.length, T = (q) => (1 - (q - b) / j) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + n.map((q, G) => '<rect class="wbBar' + (q.now ? " wbNowBar" : "") + '" x="' + (G * M + M * 0.2) + '" y="' + T(q.value) + '" width="' + M * 0.6 + '" height="' + (104 - T(q.value)) + '" rx="6"></rect><text x="' + (G * M + M / 2) + '" y="120" text-anchor="middle">' + yt(q.label) + "</text>").join("") + "</svg>";
}
const j1 = [
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
], z1 = [[60, 92, 2.2], [72, 98, 1.6], [48, 100, 1.5], [85, 88, 1.8], [38, 92, 1.3], [66, 84, 1.2], [95, 80, 1.3], [25, 40, 1.4], [82, 30, 1.3], [55, 108, 1.2]], _p = [[54.4, 95, 1.8], [44.5, 56.6, 1.5], [33.5, 56.6, 1.1], [23.7, 40.1, 1.1]], G1 = [[30, 62], [48, 48], [72, 60], [96, 82], [86, 112], [30, 108], [16, 86]];
let U1 = 0;
function Cp(n, { getHass: i, entityId: d, style: p = "bitmap", motion: g = !0, cards: y, onOpen: b, hoursWindow: C, radarSource: j } = {}) {
  var ro, Zo;
  const M = "wb" + ++U1 + "-", T = document.createElement("div");
  T.className = "wb", T.dataset.style = p;
  const q = document.createElement("div");
  q.className = "wbBento", T.appendChild(q), n.replaceChildren(T);
  const G = document.createElement("div");
  G.className = "wb wbPopup", G.dataset.style = p, G.hidden = !0;
  const J = ["aq_tile", "pollen_tile", "radar_tile"], ot = ["current", "hourly", "sun", "pollen_tile", "moon", "uv_index", "aq_tile", "humidity", "pressure", "wind", "visibility", "radar_tile", "compared_to_average", "precipitation", "air_quality"].filter((s) => !y || y.includes(s)), nt = { current: "wide", hourly: "wide", compared_to_average: "double" }, K = ["sun", "moon", "uv_index", "aq_tile", "pollen_tile", "humidity", "pressure", "wind"], O = {};
  ot.forEach((s) => {
    const h = document.createElement("div");
    h.className = "wbItem", h.dataset.card = s, h.dataset.size = nt[s] || "tile", h.hidden = !0, K.includes(s) && (h.dataset.xl = ""), q.appendChild(h), O[s] = { el: h, html: null };
  });
  let it = !1, dt = null, wt = 0, st = -1, Z = !1, Y = null, H = "";
  const xt = "homecore-next-view", Pt = (() => {
    try {
      return localStorage.getItem(xt);
    } catch {
      return null;
    }
  })(), ct = { graph: void 0, range: { preset: "day" }, picking: !1, openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", hourlyView: Pt === "bars" ? "bars" : "strip", aq: void 0 }, U = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let It = /* @__PURE__ */ new Date(), V = /* @__PURE__ */ new Date();
  const Q = {}, A = {}, ft = {}, rt = (s) => {
    var h;
    return ((h = ft[s]) == null ? void 0 : h.forecast) ?? [];
  }, lt = (s, h) => {
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
  function ht(s, h, m) {
    var L;
    if (typeof ((L = s.connection) == null ? void 0 : L.subscribeMessage) != "function") return;
    const w = { entityId: m };
    try {
      w.unsub = Promise.resolve(s.connection.subscribeMessage((F) => {
        it || A[h] !== w || (F != null && F.forecast ? ft[h] = { entityId: m, forecast: F.forecast } : delete ft[h], fn());
      }, { type: "weather/subscribe_forecast", forecast_type: h, entity_id: m }));
    } catch (F) {
      w.unsub = Promise.reject(F);
    }
    w.unsub.catch(() => {
      A[h] === w && delete A[h];
    }), A[h] = w;
  }
  function _t(s, h) {
    var m;
    for (const w of ["daily", "hourly"]) {
      const L = P1(s, h, w);
      ((m = A[w]) == null ? void 0 : m.entityId) !== (L == null ? void 0 : L.entity_id) && (vt(w), L && ht(s, w, L.entity_id));
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
    var z, $, I;
    const m = Pe(s, h, "pressure");
    if (!m) return;
    const w = m.stateObj.entity_id, L = await Vt(s, w, new Date(Date.now() - 3 * oe)), F = (I = ($ = (z = L == null ? void 0 : L[w]) == null ? void 0 : z.find((X) => {
      var tt;
      return typeof ((tt = X.a) == null ? void 0 : tt.pressure) == "number";
    })) == null ? void 0 : $.a) == null ? void 0 : I.pressure;
    U.pressureHistory = typeof F == "number" ? { entityId: w, value: F } : void 0;
  }
  async function Ke(s, h) {
    var $;
    const m = Pe(s, h, "temperature");
    if (!m) return;
    const w = m.stateObj.entity_id, L = on(/* @__PURE__ */ new Date()), F = await Vt(s, w, new Date(L.getTime() - Qm * ha)), z = /* @__PURE__ */ new Map();
    for (const I of (F == null ? void 0 : F[w]) ?? []) {
      const X = ($ = I.a) == null ? void 0 : $.temperature, tt = new Date((I.lc ?? I.lu) * 1e3);
      if (typeof X != "number" || tt >= L) continue;
      const mt = tt.toDateString();
      z.set(mt, Math.max(z.get(mt) ?? -1 / 0, X));
    }
    U.temperatureHistory = { entityId: w, dailyHighs: [...z.values()], days: [...z.entries()].map(([I, X]) => ({ date: new Date(I), high: X })) };
  }
  async function _a(s) {
    const h = $l(s);
    if (!h) return;
    const m = await s.callWS({ type: "recorder/statistic_during_period", statistic_id: h, rolling_window: { duration: { hours: 24 } } });
    U.rain = { entityId: h, change: (m == null ? void 0 : m.change) ?? void 0 };
  }
  function Xa() {
    const s = i == null ? void 0 : i();
    if (!s || it || typeof s.callWS != "function") return;
    const h = et(s);
    U.lastFetch = Date.now(), [ae(s, h), Ke(s, h), _a(s)].forEach((m) => m.then(() => fn(), () => {
    }));
  }
  async function Ca() {
    const s = i == null ? void 0 : i();
    if (!s) return;
    const h = Pe(s, et(s), "temperature");
    if (!h) return;
    const m = h.stateObj.entity_id, w = on(/* @__PURE__ */ new Date());
    try {
      const L = await Vt(s, m, w), F = (z) => ((L == null ? void 0 : L[m]) ?? []).map(($) => {
        var I;
        return { time: $.lu * 1e3, value: (I = $.a) == null ? void 0 : I[z] };
      }).filter(($) => typeof $.value == "number");
      U.todayHistory = { day: w.toDateString(), fetched: Date.now(), temperature: F("temperature"), humidity: F("humidity") }, fn();
    } catch {
    }
  }
  async function na(s) {
    const h = i == null ? void 0 : i();
    if (h)
      try {
        const m = await Vt(h, s, new Date(Date.now() - 24 * oe), !0), w = ((m == null ? void 0 : m[s]) ?? []).filter((F) => pe(F.s)), L = Math.max(1, Math.ceil(w.length / 48));
        U.aqHistory = { entityId: s, points: w.filter((F, z) => z % L === 0).map((F) => ({ label: Ue(new Date(F.lu * 1e3), h), value: Number(F.s) })) }, fn();
      } catch {
      }
  }
  function nn(s) {
    U.categories === void 0 && (U.categories = null, Promise.resolve().then(() => s.callWS({ type: "integration/descriptions" })).then((h) => {
      U.categories = N1(h);
    }, () => {
      U.categories = {};
    }).then(() => fn()));
  }
  function et(s) {
    var m;
    const h = Object.keys(s.states || {}).filter((w) => w.startsWith("weather.") && br(s, w)).sort();
    return d && ((m = s.states) != null && m[d]) ? [d, ...h.filter((w) => w !== d)] : h;
  }
  const ye = (s) => U.categories ? { air: O1(s, U.categories), pollen: I1(s, U.categories) } : { air: [], pollen: [] };
  function Ja(s, h, m, w) {
    if (p === "line") return '<span class="wbWx wbS' + h + ' wbLineIcon" aria-hidden="true">' + Ul(s, m || s === "clear-night") + "</span>";
    if (p === "smooth") {
      const L = km(s, h === 90, m, M + "g-" + w);
      return '<span class="wbWx wbS' + h + " wb" + L.k[0].toUpperCase() + L.k.slice(1) + (L.night ? " wbNight" : "") + '" aria-hidden="true">' + L.svg + "</span>";
    }
    return '<span class="wbWx wbS' + h + '" aria-hidden="true"><canvas data-wb-wx="' + yt(Jp(s, m)) + '" data-size="' + h + '"></canvas></span>';
  }
  const wr = () => rt("daily").filter((s) => s.templow != null).slice(0, Gm);
  function qa(s, h) {
    const m = new Date(h.datetime), w = /* @__PURE__ */ new Date();
    return pr(m, w) ? gt.today : pr(m, new Date(w.getTime() + ha)) ? gt.tomorrow : bp(m, s);
  }
  const rn = (s, h, m) => m === 0 ? qa(s, h) : bp(new Date(h.datetime), s);
  function xe(s, h) {
    var tt, mt, Ot, Et;
    const m = R1(s, h);
    if (!m) return "";
    const w = wr(), L = ct.openDay !== void 0 ? w[ct.openDay] : void 0, F = Pe(s, h, "temperature"), z = w[0], $ = z && pr(new Date(z.datetime), /* @__PURE__ */ new Date()), I = ((mt = (tt = s.config) == null ? void 0 : tt.unit_system) == null ? void 0 : mt.temperature) || ((Ot = m.attributes) == null ? void 0 : Ot.temperature_unit) || "";
    let X = '<div class="wbCard wbWeather' + (L ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (L ? " inert" : "") + '><div class="wbNow">' + (b ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + yt(gt.openPage) + '">' : '<div class="wbCurrent">') + Ja(m.state, 90, B1(s), "now") + '<div class="wbTempBlock">' + (F && pe(F.value) ? '<div class="wbTemp"><span class="wbDeg">' + yt(Xt(Math.round(Number(F.value)), s.locale)) + '</span><span class="wbUnit">' + yt(I) + "</span></div>" : "") + '<div class="wbPlace">' + yt(((Et = s.config) == null ? void 0 : Et.location_name) ?? "") + "</div></div>" + (b ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + yt(Io(s, m)) + "</div>" + ($ && z.templow != null ? '<div class="wbRange">' + yt(Ze(gt.range, { high: ve(s, z.temperature), low: ve(s, z.templow) })) + "</div>" : "") + "</div></div>";
    if (X += go(s) + vr(s), w.length) {
      const Ct = $ && F && pe(F.value) ? ve(s, F.value) : "", zt = (Lt, pt, Ht) => Lt === 0 && Ct ? '<span class="wbAsDay">' + yt(pt) + '</span><span class="wbAsNow">' + yt(Ht) + "</span>" : yt(pt);
      X += '<div class="wbColumns" role="list">' + w.map((Lt, pt) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + pt + '" data-wb-focus="col-' + pt + '"><span class="wbDay">' + zt(pt, rn(s, Lt, pt), gt.now) + "</span>" + Ja(Lt.condition ?? "cloudy", 60, !1, "col" + pt) + '<span class="wbTemps"><span class="wbHi">' + zt(pt, ve(s, Lt.temperature), Ct) + '</span><span class="wbLo">' + yt(ve(s, Lt.templow)) + "</span></span></button>").join("") + "</div>", X += '<div class="wbHalves" role="list">' + w.map((Lt, pt) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + pt + '" data-wb-focus="half-' + pt + '">' + Ja(Lt.condition ?? "cloudy", 40, !1, "half" + pt) + '<span class="wbText"><span class="wbName">' + yt(qa(s, Lt)) + '</span><span class="wbSub">' + yt(Ze(gt.highLow, { high: ve(s, Lt.temperature), low: ve(s, Lt.templow) })) + "</span></span></button>").join("") + "</div>";
    }
    return X + "</div>" + (L ? li(s, h, L) : "") + "</div>";
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
  }, Aa = {
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
    const w = (mt) => Ue(new Date(mt.datetime), s), L = (mt) => si[mt.condition] || "", F = (mt) => Aa[mt.condition] || mt.condition;
    let z = L(m[0]);
    if (!z) return "";
    let $ = m[0], I = 0;
    for (const mt of m.slice(1))
      I === 2 || F(mt) === F($) || !L(mt) || (z += (I ? " and " : ", ") + L(mt) + " from " + w(mt), $ = mt, I++);
    const X = Number(m[0].temperature), tt = m.filter((mt) => pe(mt.temperature));
    if (pe(X) && tt.length) {
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
    const [h, m] = ts[C == null ? void 0 : C()] || ts.day, w = Date.now(), L = rt("hourly").filter((F) => {
      const z = new Date(F.datetime), $ = z.getHours();
      return z.getTime() > w - oe / 2 && $ >= h && $ < m && pe(F.temperature);
    }).slice(0, 4);
    return L.length ? '<div class="wbNextHours" role="list">' + L.map((F, z) => '<div class="wbHour" role="listitem"><span class="wbHourTime">' + yt(Ue(new Date(F.datetime), s)) + "</span>" + Ja(F.condition ?? "cloudy", 40, F.is_daytime === !1, "hr" + z) + '<span class="wbHourTemp">' + yt(ve(s, F.temperature)) + "</span></div>").join("") + "</div>" : "";
  }
  function Gt(s) {
    const h = s.getTime(), m = Date.now() - oe;
    return rt("hourly").filter((w) => {
      const L = new Date(w.datetime).getTime();
      return L >= h && L < h + ha && L > m;
    });
  }
  function ma(s) {
    if (!s.length) return ["temperature"];
    const h = ["temperature"];
    return s.some((m) => m.precipitation != null || m.precipitation_probability != null) && h.push("precipitation"), s.some((m) => m.humidity != null) && h.push("humidity"), h;
  }
  function li(s, h, m) {
    const w = on(new Date(m.datetime)), L = Gt(w), F = ma(L), z = F.includes(ct.dayMode) ? ct.dayMode : "temperature", $ = (I) => I === "humidity" ? gt.humidity : gt.modes[I];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + Ja(m.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + yt(qa(s, m)) + '</span><span class="wbSub">' + yt(Ze(gt.highLow, { high: ve(s, m.temperature), low: ve(s, m.templow) })) + '</span></div><button class="wbBack" title="' + yt(gt.back) + '" data-wb="close-day" data-wb-focus="back-day">' + Wo(ne.back) + "</button></div>" + (F.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + F.map((I) => '<button aria-pressed="' + (I === z) + '" data-wb="day-mode" data-mode="' + I + '" data-wb-focus="day-mode-' + I + '">' + yt($(I)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + W1(ci(s, h, w, L, z)) + "</div></div>";
  }
  function ci(s, h, m, w, L) {
    var yn;
    const F = m.getTime(), z = Date.now(), $ = pr(m, /* @__PURE__ */ new Date()), I = (Jt) => (Jt - F) / Ie, X = (Jt) => Ue(new Date(Jt), s), tt = (Jt) => new Date(Jt.datetime).getTime(), mt = [0, 3, 6, 9, 12, 15, 18, 21].map((Jt) => ({ t: Jt * 60, label: X(F + Jt * oe), minor: Jt % 6 !== 0 })), { rise: Ot, set: Et } = ur(s, m), Ct = [], zt = [];
    Ot && (Ct.push({ t: I(Ot.getTime()), label: X(Ot.getTime()), rise: !0 }), zt.push([0, I(Ot.getTime())])), Et && (Ct.push({ t: I(Et.getTime()), label: X(Et.getTime()), rise: !1 }), zt.push([I(Et.getTime()), ni]));
    const Lt = gr(s);
    !Ot && !Et && Lt && ws(new Date(F + ha / 2), Lt.lat, Lt.lon) < 0 && zt.push([0, ni]);
    const pt = $ ? I(z) : void 0, Ht = { hours: mt, sun: Ct, night: zt };
    if (!w.length && !$) return { ...Ht, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: gt.noHourly };
    if (L === "precipitation") {
      const Jt = w.some((la) => la.precipitation_probability != null), ko = w.map((la) => ({ t: I(tt(la)), v: Number((Jt ? la.precipitation_probability : la.precipitation) ?? 0) })), $o = an(s, lt(s, "hourly"), "precipitation"), Ko = Math.max(0, ...ko.map((la) => la.v)), xn = Jt ? 100 : kp(0, Math.max(Ko, 1), [0.5, 1, 2, 5, 10]).max, Li = (la) => Jt ? Xt(la, s.locale) + "%" : Xt(la, s.locale, { maximumFractionDigits: 1 }) + " " + $o, So = ko.find((la) => la.v === Ko);
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
    const Bt = L === "humidity" ? "humidity" : "temperature", Se = w.filter((Jt) => Jt[Bt] != null && (!$ || tt(Jt) >= z)).map((Jt) => ({ t: I(tt(Jt)), v: Number(Jt[Bt]) }));
    let At, le = [];
    if (pt !== void 0) {
      const Jt = Pe(s, h, Bt);
      Jt && pe(Jt.value) && (At = { t: pt, v: Number(Jt.value) }, Se.unshift(At)), le = (((yn = U.todayHistory) == null ? void 0 : yn.day) === m.toDateString() ? U.todayHistory[Bt] : []).filter(($o) => $o.time <= z).map(($o) => ({ t: Math.max(0, I($o.time)), v: $o.value })), At && le.length && le.push(At);
    }
    const ce = [...le, ...Se];
    if (!ce.length) return { ...Ht, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: gt.noHourly };
    const We = ce.map((Jt) => Jt.v), Mo = kp(Math.min(...We), Math.max(...We), Bt === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    Bt === "humidity" && (Mo.min = Math.max(0, Mo.min), Mo.max = Math.min(100, Mo.max), Mo.ticks = Mo.ticks.filter((Jt) => Jt >= 0 && Jt <= 100));
    const Ti = Bt === "humidity" ? (Jt) => Xt(Jt, s.locale) + "%" : (Jt) => ve(s, Jt), vn = Bt === "temperature" ? ce.reduce((Jt, ko) => ko.v > Jt.v ? ko : Jt) : void 0;
    return { ...Ht, kind: "line", points: Se, past: le, ...Mo, format: Ti, now: At, peak: vn ? { ...vn, label: Ti(vn.v) } : void 0 };
  }
  function ga(s) {
    const h = ["temperature"];
    return s.some((m) => m.precipitation_probability != null || m.precipitation != null) && h.push("precipitation"), s.some((m) => m.wind_speed != null) && h.push("wind"), h;
  }
  function Ae(s, h, m = ip) {
    var F, z;
    const w = rt("daily"), L = [];
    for (let $ = 0; $ < m; $++) for (const I of [!1, !0]) {
      const X = s.getTime() + ($ * 24 + (I ? 12 : 0)) * oe, tt = X + 12 * oe, mt = {};
      h.forEach((Et) => {
        const Ct = new Date(Et.datetime).getTime();
        Et.condition && Ct >= X && Ct < tt && (mt[Et.condition] = (mt[Et.condition] ?? 0) + (Xm.has(Et.condition) ? 2 : 1));
      });
      let Ot = (F = Object.entries(mt).sort((Et, Ct) => Ct[1] - Et[1])[0]) == null ? void 0 : F[0];
      if (!Ot) {
        const Et = new Date(X).toDateString();
        Ot = ((z = w.find((Ct) => new Date(Ct.datetime).toDateString() === Et)) == null ? void 0 : z.condition) ?? "cloudy";
      }
      L.push({ cond: I && Ot === "sunny" ? "clear-night" : Ot, night: I });
    }
    return L;
  }
  function di(s, h, m) {
    const w = lt(s, "hourly"), L = h.precipitation_probability != null ? Xt(h.precipitation_probability, s.locale) + "%" : "", F = h.precipitation ? Xt(h.precipitation, s.locale) + " " + an(s, w, "precipitation") : "";
    switch (m) {
      case "precipitation":
        return L ? [L, F] : [F || "–", ""];
      case "wind":
        return h.wind_speed != null ? [Xt(Math.round(h.wind_speed), s.locale), an(s, w, "wind_speed")] : ["–", ""];
      default:
        return [ve(s, h.temperature), (h.precipitation_probability ?? 0) >= 20 ? L : ""];
    }
  }
  function sn(s, h, m) {
    const [w, L] = ts[C == null ? void 0 : C()] || ts.day, F = [];
    for (let z = 0; z < 4 && F.length < 3; z++) {
      const $ = /* @__PURE__ */ new Date();
      $.setHours(0, 0, 0, 0), $.setDate($.getDate() + z);
      const I = new Date($);
      I.setHours(L, 0, 0, 0), $.setHours(w, 0, 0, 0), !(I.getTime() <= m || !h.some((X) => {
        const tt = new Date(X.datetime).getTime();
        return tt >= $.getTime() && tt <= I.getTime();
      })) && F.push({ a: $.getTime(), b: I.getTime(), label: qa(s, { datetime: $.toISOString() }) });
    }
    return F;
  }
  function pi(s, h, m, w, L, F) {
    const z = (m.b - h.a) / oe, $ = (pt) => ((pt - h.a) / oe).toFixed(3), I = 80, X = 32, tt = [];
    for (const pt = new Date(h.a - ha); pt.getTime() < m.b + ha; pt.setDate(pt.getDate() + 1)) {
      const { rise: Ht, set: Bt } = ur(s, new Date(pt));
      Ht && Bt && tt.push({ rise: Ht.getTime(), set: Bt.getTime() });
    }
    const mt = (pt, Ht) => I - (I - X) * Math.sin(Math.PI * (Ht - pt.rise) / (pt.set - pt.rise)), Ot = (pt) => !tt.some((Ht) => pt >= Ht.rise && pt <= Ht.set);
    let Et = "", Ct = "", zt = "";
    tt.forEach((pt, Ht) => {
      const Bt = [];
      for (let At = pt.rise; At <= pt.set; At += 15 * Ie) Bt.push($(At) + "," + mt(pt, At).toFixed(2));
      Bt.push($(pt.set) + "," + I), Et += '<polyline class="wbLineArc" points="' + Bt.join(" ") + '"/>';
      const Se = tt[Ht + 1];
      Se && (Et += '<rect class="wbLineNight" x="' + $(pt.set) + '" y="0" width="' + ((Se.rise - pt.set) / oe).toFixed(3) + '" height="100"/>'), [[pt.rise, "↑"], [pt.set, "↓"]].forEach(([At, le]) => {
        At < h.a || At > m.b || (Ct += '<line class="wbLineEdge" x1="' + $(At) + '" x2="' + $(At) + '" y1="0" y2="100"/>', zt += '<span class="wbLineTime" style="left:' + F(At) + '">' + le + " " + yt(Ue(new Date(At), s)) + "</span>");
      });
    });
    const Lt = tt.find((pt) => L >= pt.rise && L <= pt.set);
    return '<svg class="wbLineArt" viewBox="0 0 ' + z + ' 100" preserveAspectRatio="none" aria-hidden="true">' + Et + Ct + '<line class="wbLineHorizon" x1="0" x2="' + z + '" y1="' + I + '" y2="' + I + '"/></svg>' + zt + (Lt ? '<span class="wbLineNow" style="left:' + F(L) + ";top:" + mt(Lt, L) + '%">' + Ul("sunny", !1) + "</span>" : "") + w.filter((pt) => pt.entry && !pt.now).map((pt) => '<span class="wbLineGlyph' + pt.edge + '" style="left:' + F(pt.t) + '">' + Ul(pt.entry.condition ?? "cloudy", Ot(pt.t)) + "</span>").join("");
  }
  function yr(s, h) {
    delete Q.hourly;
    const m = ct.hourlyView === "bars" ? "bars" : "strip", w = '<div class="wbHeader"><h2 class="wbTitle">' + yt(m === "bars" ? gt.nextDays : gt.nextHours) + '</h2><div class="wbSegments wbViews" role="group" aria-label="' + yt(gt.showAs) + '">' + ["strip", "bars"].map((At) => '<button aria-pressed="' + (At === m) + '" data-wb="hourly-view" data-view="' + At + '" data-wb-focus="hourly-view-' + At + '">' + yt(gt.views[At]) + "</button>").join("") + "</div></div>";
    if (m === "bars") return Go(s, h, w);
    const L = rt("hourly"), F = Math.floor(Date.now() / Ie) * Ie, z = L.filter((At) => new Date(At.datetime).getTime() > F - oe);
    if (!z.length) return "";
    const $ = ga(z), I = $.includes(ct.hourlyMode) ? ct.hourlyMode : "temperature", X = sn(s, L, F);
    if (!X.length) return "";
    const tt = X[0], mt = X[X.length - 1], Ot = (tt.b - tt.a) / oe, Et = (At) => "calc(var(--wb-u) * " + ((At - tt.a) / oe).toFixed(3) + ")", Ct = new Date(tt.a);
    Ct.setHours(6, 0, 0, 0), Ct.getTime() > tt.a && Ct.setDate(Ct.getDate() - 1);
    const zt = Math.ceil((mt.b - Ct.getTime()) / ha);
    p !== "line" && (Q.hourly = { segs: Ae(Ct, L, zt), seed: Ct.getDate(), columns: zt });
    const Lt = (At) => At === tt.a ? " wbFirst" : At === mt.b ? " wbLast" : "", pt = [];
    for (let At = tt.a; At < mt.b; ) {
      const le = new Date(At);
      le.setHours(24, 0, 0, 0);
      const ce = Math.min(le.getTime(), mt.b);
      pt.push({ a: At, b: ce, label: qa(s, { datetime: new Date(At).toISOString() }), page: X.find((We) => We.a >= At && We.a < ce) || X.find((We) => We.a < ce && We.b > At) }), At = ce;
    }
    const Ht = F > tt.a && F < mt.b ? Math.floor((F - tt.a) / (2 * oe)) * 2 : 0, Bt = [];
    for (let At = tt.a; At <= mt.b; At += oe) {
      const le = new Date(At), ce = Lt(At);
      !ce && le.getHours() % Ym || !ce && (Math.abs(tt.a - At) < 2 * oe || Math.abs(mt.b - At) < 2 * oe) || F >= tt.a && Math.abs(At - F) < 1.5 * oe && !ce || Bt.push({ t: At, edge: ce, label: Ue(le, s), entry: At >= F - oe ? L.find((We) => new Date(We.datetime).getTime() === At) : void 0 });
    }
    F > tt.a && F < tt.b && Bt.push({ t: F, edge: F - tt.a < oe ? " wbFirst" : tt.b - F < oe ? " wbLast" : "", label: gt.now, entry: z[0], now: !0 });
    const Se = (At, le) => '<span class="wbMark' + At.edge + (At.now ? " wbNowMark" : "") + '" style="left:' + Et(At.t) + '">' + le + "</span>";
    return '<div class="wbCard wbHc wbHourly">' + w + ($.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + $.map((At) => '<button aria-pressed="' + (At === I) + '" data-wb="hourly-mode" data-mode="' + At + '" data-wb-focus="hourly-mode-' + At + '">' + yt(gt.modes[At]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll wbPaged" tabindex="0" aria-label="' + yt(gt.nextHours) + '" data-span="' + Ot + '" data-start="' + Ht + '"><div class="wbStrip" style="--wb-u:calc(100cqw / ' + Ot + ");width:calc(var(--wb-u) * " + (mt.b - tt.a) / oe + ')">' + // a stop every two hours (Matt, 1 Nov): a swipe settles on one, a flick runs on past several
    [...Array(Math.floor((mt.b - tt.a) / (2 * oe)) + 1)].map((At, le) => '<i class="wbSnap" style="left:' + Et(tt.a + le * 2 * oe) + '"></i>').join("") + '<div class="wbDays">' + pt.map((At, le) => {
      var ce;
      return '<span class="wbDaySpan" style="width:calc(var(--wb-u) * ' + ((At.b - At.a) / oe).toFixed(3) + ')"><button class="wbDayName" data-wb="hours-day" data-hours="' + (le === 0 ? Ht : ((((ce = At.page) == null ? void 0 : ce.a) ?? At.a) - tt.a) / oe) + '" data-wb-focus="hours-day-' + le + '">' + yt(At.label) + "</button></span>";
    }).join("") + '</div><div class="wbRow wbTimes">' + Bt.map((At) => Se(At, yt(At.label))).join("") + "</div>" + (p === "line" ? '<div class="wbSky wbLineSky">' + pi(s, tt, mt, Bt, F, Et) : '<div class="wbSky"><div class="wbSkyArt" style="left:' + Et(Ct.getTime()) + ";width:calc(var(--wb-u) * " + zt * 24 + ')"><canvas data-wb-strip="hourly"' + (p === "smooth" ? "" : ' class="wbPixels"') + "></canvas></div>") + (F > tt.a ? '<i class="wbPast" style="width:' + Et(Math.min(F, mt.b)) + '"></i><i class="wbNowLine" style="left:' + Et(F) + '"></i>' : "") + pt.slice(1).map((At) => '<i class="wbMidnight" style="left:' + Et(At.a) + '"></i>').join("") + '</div><div class="wbRow wbValues">' + Bt.map((At) => {
      if (!At.entry) return "";
      const [le, ce] = di(s, At.entry, I);
      return Se(At, '<span class="wbPrimaryV">' + yt(le) + '</span><span class="wbSecondary">' + yt(ce) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function ui(s) {
    const h = Zm, m = h.findIndex(([I]) => I >= s);
    if (m <= 0) return "rgb(" + h[m < 0 ? h.length - 1 : 0][1].join(",") + ")";
    const [w, L] = h[m - 1], [F, z] = h[m], $ = (s - w) / (F - w);
    return "rgb(" + L.map((I, X) => Math.round(I + (z[X] - I) * $)).join(",") + ")";
  }
  function Go(s, h, m) {
    var Et;
    const w = rt("daily").filter((Ct) => pe(Ct.templow) && pe(Ct.temperature)).slice(0, 7);
    if (!w.length) return "";
    const L = Math.min(...w.map((Ct) => Number(Ct.templow))), F = Math.max(...w.map((Ct) => Number(Ct.temperature))), z = Math.max(1, F - L), $ = (Ct) => Math.max(0, Math.min(100, (Ct - L) / z * 100)).toFixed(2), I = /F/.test(an(s, lt(s, "daily"), "temperature")), X = (Ct) => I ? (Ct - 32) / 1.8 : Ct, tt = "linear-gradient(90deg," + [0, 0.25, 0.5, 0.75, 1].map((Ct) => ui(X(L + Ct * z)) + " " + Ct * 100 + "%").join(",") + ")", mt = (Et = Pe(s, h, "temperature")) == null ? void 0 : Et.value;
    return '<div class="wbCard wbHc wbHourly wbBars' + (ga(rt("hourly").filter((Ct) => new Date(Ct.datetime).getTime() > Date.now() - oe)).length > 1 ? " wbTabbed" : "") + '">' + m + '<div class="wbDayBars" role="list">' + w.map((Ct, zt) => {
      const Lt = qa(s, Ct), pt = pr(new Date(Ct.datetime), /* @__PURE__ */ new Date()), Ht = Number(Ct.templow), Bt = Number(Ct.temperature);
      return '<div class="wbDayBar" role="listitem" aria-label="' + yt(Ze(gt.rangeRow, { day: Lt, low: ve(s, Ht), high: ve(s, Bt) })) + '"><span class="wbRangeDay">' + yt(Lt) + "</span>" + Ja(Ct.condition, 40, !1, "r" + zt) + '<span class="wbRangeLo">' + yt(ve(s, Ht)) + '</span><span class="wbRangeTrack"><i class="wbRangeFill" style="background:' + tt + ";clip-path:inset(0 " + (100 - $(Bt)) + "% 0 " + $(Ht) + '% round 4px)"></i>' + (pt && pe(mt) ? '<i class="wbRangeNow" style="left:' + $(Number(mt)) + '%"></i>' : "") + '</span><span class="wbRangeHi">' + yt(ve(s, Bt)) + "</span></div>";
    }).join("") + "</div></div>";
  }
  const fi = [[-120, "#0d1530"], [-60, "#1c2550"], [-15, "#c9707a"], [30, "#f2a46a"], [60, "#b49bc8"], [90, "#5aa5e6"]], Qa = [[-90, "#5aa5e6"], [-60, "#a99bd0"], [-30, "#f0a54a"], [15, "#c45a5a"], [60, "#3a2a5c"], [120, "#0d1530"]], ke = (s, h) => {
    if (h <= s[0][0]) return s[0][1];
    for (let m = 1; m < s.length; m++) if (h <= s[m][0]) {
      const [w, L] = s[m - 1], [F, z] = s[m];
      return F1(L, z, (h - w) / (F - w));
    }
    return s[s.length - 1][1];
  }, xr = (s, h, m) => {
    if (!h || !m) return fi[5][1];
    const w = (s.getTime() - m.getTime()) / Ie;
    return w >= -90 ? ke(Qa, w) : ke(fi, (s.getTime() - h.getTime()) / Ie);
  }, hi = (s) => (s >= 60 ? Math.floor(s / 60) + "h " : "") + s % 60 + "m";
  function Mr(s) {
    const h = It, { rise: m, set: w } = ur(s, h), L = m && w ? Math.round((w.getTime() - m.getTime()) / Ie) : 0, F = Math.floor(L / 60), z = L % 60, $ = (Se) => Se ? Ue(Se, s) : "–", I = new Date(h);
    I.setDate(I.getDate() + 1);
    const X = ur(s, I), tt = X.rise && X.set ? Math.round((X.set.getTime() - X.rise.getTime()) / Ie) : 0, mt = new Date(h);
    mt.setDate(mt.getDate() - 1);
    const Ot = !!(m && w && h >= m && h <= w), Et = !!(m && h < m), Ct = Ot ? m : Et ? ur(s, mt).set : w, zt = Ot ? w : Et ? m : X.rise, Lt = Ct && zt ? Math.min(1, Math.max(0, (h.getTime() - Ct.getTime()) / (zt.getTime() - Ct.getTime()))) : 0, pt = zt ? Math.max(0, Math.round((zt.getTime() - h.getTime()) / Ie)) : 0, Ht = zt ? hi(pt) : "–", Bt = Ot ? gt.untilSunset : gt.untilSunrise;
    return ea({
      icon: ne.sunny,
      name: gt.sun,
      sub: L ? Ze(gt.daylightShort, { hours: F, minutes: z }) : void 0,
      cls: "wbSunTile",
      callouts: [[gt.callout.riseTomorrow, $(X.rise)], [gt.callout.setTomorrow, $(X.set)], ...tt ? [[gt.callout.dayTomorrow, Math.floor(tt / 60) + "h " + tt % 60 + "m"]] : []],
      zone: '<div class="wbSunZone" style="background:' + xr(h, m, w) + '"><svg class="wbSunTrack" data-up="' + (Ot ? 1 : 0) + '" data-f="' + Lt.toFixed(4) + '" aria-hidden="true"></svg><div class="wbSunCount"><span class="wbSunLeft">' + yt(Ht) + '</span><span class="wbSunWord">' + yt(Bt) + '</span></div><span class="wbSunAt wbSunRise">' + yt($(m)) + '</span><span class="wbSunAt wbSunSet">' + yt($(w)) + "</span></div>" + // at M, the countdown alone (Matt, 10 Nov): M's zone has room for one line
      ns(Na(Ht, ""))
    });
  }
  const vs = 22;
  function kr(s) {
    const h = Math.round(s.clientWidth), m = Math.round(s.clientHeight), w = vs, L = w / 2, F = h + "x" + m + ":" + s.dataset.f + ":" + s.dataset.up;
    if (h < w * 3 || m < w * 3 || s.dataset.drawn === F) return;
    s.dataset.drawn = F;
    const z = "M" + L + " " + (m - w) + "V" + w + "A" + L + " " + L + " 0 0 1 " + w + " " + L + "H" + (h - w) + "A" + L + " " + L + " 0 0 1 " + (h - L) + " " + w + "V" + (m - w), $ = "M" + (h - L) + " " + (m - w) + "A" + L + " " + L + " 0 0 1 " + (h - w) + " " + (m - L) + "H" + w + "A" + L + " " + L + " 0 0 1 " + L + " " + (m - w), I = 16, X = 6, tt = "M" + I + " 0H" + (h - I) + "A" + I + " " + I + " 0 0 1 " + h + " " + I + "V" + (m - I) + "A" + I + " " + I + " 0 0 1 " + (h - I) + " " + m + "H" + I + "A" + I + " " + I + " 0 0 1 0 " + (m - I) + "V" + I + "A" + I + " " + I + " 0 0 1 " + I + " 0ZM" + (w + X) + " " + w + "A" + X + " " + X + " 0 0 0 " + w + " " + (w + X) + "V" + (m - w - X) + "A" + X + " " + X + " 0 0 0 " + (w + X) + " " + (m - w) + "H" + (h - w - X) + "A" + X + " " + X + " 0 0 0 " + (h - w) + " " + (m - w - X) + "V" + (w + X) + "A" + X + " " + X + " 0 0 0 " + (h - w - X) + " " + w + "Z", mt = s.dataset.up === "1", Ot = Number(s.dataset.f) || 0, Et = "http://www.w3.org/2000/svg";
    s.setAttribute("viewBox", "0 0 " + h + " " + m);
    const Ct = document.createElementNS(Et, "path");
    Ct.setAttribute("d", mt ? z : $), s.replaceChildren(Ct);
    const zt = Ct.getTotalLength(), Lt = Ct.getPointAtLength(zt * Ot), pt = mt ? zt : 0;
    s.innerHTML = '<defs><mask id="' + M + 'sun-day"><path d="' + z + '" fill="none" stroke="#fff" stroke-width="' + w * 2 + '"></path></mask><mask id="' + M + 'sun-done"><path d="' + z + '" fill="none" stroke="#fff" stroke-width="' + w * 2 + '" stroke-dasharray="' + (mt ? (pt * Ot).toFixed(1) + " " + (pt + 1).toFixed(1) : "0 99999") + '"></path></mask></defs><path class="wbSunBand" fill-rule="evenodd" d="' + tt + '"></path><path class="wbSunBand wbSunDay" fill-rule="evenodd" d="' + tt + '" mask="url(#' + M + 'sun-day)"></path><path class="wbSunBand wbSunDone" fill-rule="evenodd" d="' + tt + '" mask="url(#' + M + 'sun-done)"></path><circle class="wbSunDot' + (mt ? "" : " wbSunNight") + '" cx="' + Lt.x.toFixed(1) + '" cy="' + Lt.y.toFixed(1) + '" r="' + L + '"></circle>';
  }
  const qt = typeof ResizeObserver == "function" ? new ResizeObserver((s) => s.forEach((h) => kr(h.target))) : null;
  function bt() {
    qt == null || qt.disconnect(), T.querySelectorAll("svg.wbSunTrack").forEach((s) => {
      kr(s), qt == null || qt.observe(s);
    });
  }
  function he(s, h, m) {
    const w = (z) => M + "moon-" + z, L = s > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + w("terminator") + ')" d="' + q1(61, 61, 57.9, s) + '"' + (h ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", F = (z, $, I, X, tt, mt) => '<filter id="' + w(z) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + $ + '" numOctaves="' + I + '" seed="' + X + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((Ot) => "<feFunc" + Ot + ' type="linear" slope="' + tt + '" intercept="' + mt + '"></feFunc' + Ot + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + w("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + w("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + w("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + w("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + w("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + F("mottle", "0.045", 4, 3, 1.8, -0.4) + F("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + w("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + w("fill") + ')"></circle><g' + (m ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + w("soften") + ')">' + j1.map(([z, $, I, X, tt, mt]) => '<ellipse cx="' + z + '" cy="' + $ + '" rx="' + I + '" ry="' + X + '" fill-opacity="' + mt + '" transform="rotate(' + tt + " " + z + " " + $ + ')"></ellipse>').join("") + "</g>" + z1.map(([z, $, I]) => '<circle class="wbCrater" cx="' + z + '" cy="' + $ + '" r="' + I + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + w("glow") + ')">' + G1.map(([z, $]) => '<line x1="54.4" y1="95" x2="' + z + '" y2="' + $ + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + w("glow") + ')">' + _p.map(([z, $, I]) => '<circle cx="' + z + '" cy="' + $ + '" r="' + I * 2 + '"></circle>').join("") + "</g>" + _p.map(([z, $, I]) => '<circle class="wbBrightCenter" cx="' + z + '" cy="' + $ + '" r="' + I + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + w("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + w("grain") + ')"></rect>' + L + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function jt(s) {
    const h = V, m = gr(s), w = (m == null ? void 0 : m.lat) ?? 0, L = Zl(h), F = Mp(s), z = F ? s.states[F] : void 0, $ = qn(z) && d1.includes(z.state) ? z.state : E1(L.phase), { rise: I, set: X } = m ? D1(h, m.lat, m.lon) : {}, tt = L.phase > 0.5 != w < 0, mt = Xt(Math.round(L.fraction * 100), s.locale) + "%", Ot = I ?? X;
    return Ot && Ue(Ot, s), ea({
      icon: ne.night,
      name: gt.moon,
      sub: gt.phases[$],
      callouts: [...I ? [[gt.callout.moonrise, Ue(I, s)]] : [], ...X ? [[gt.callout.moonset, Ue(X, s)]] : [], [gt.callout.lit, mt]],
      // at M, how much of it is lit (Matt, 10 Nov)
      zone: '<div class="wbMoonBox">' + he(L.fraction, tt, w < 0) + "</div>" + ns(Na(Xt(Math.round(L.fraction * 100), s.locale), "%"))
    });
  }
  function He(s, h) {
    var Ct;
    const m = Pe(s, h, "wind_speed");
    if (!m || !pe(m.value)) return "";
    const w = Pe(s, h, "wind_gust_speed"), L = Pe(s, h, "wind_bearing"), F = L && pe(L.value) ? Number(L.value) : void 0, z = H1(Number(m.value), (Ct = m.stateObj.attributes) == null ? void 0 : Ct.wind_speed_unit), $ = fs(s, m.stateObj, "wind_speed", m.value), I = F !== void 0 ? gt.cardinal[c1[((F + 11.25) / 22.5 | 0) % 16]] : void 0, X = w ? vp(s, w.stateObj, "wind_gust_speed", w.value) : void 0, tt = [I ? Ze(gt.windFrom, { direction: I }) : void 0, z !== void 0 ? z + " " + gt.beaufort : void 0].filter(Boolean).join(" · ") || X, mt = (zt, Lt) => {
      const pt = (zt - 90) * Math.PI / 180;
      return [100 + Lt * Math.cos(pt), 100 + Lt * Math.sin(pt)];
    }, Ot = Array.from({ length: 36 }, (zt, Lt) => Lt * 10).map((zt) => {
      const Lt = zt % 90 === 0, [pt, Ht] = mt(zt, 97), [Bt, Se] = mt(zt, Lt ? 83 : 89);
      return '<line class="wbTick' + (Lt ? " wbMajor" : "") + '" x1="' + pt + '" y1="' + Ht + '" x2="' + Bt + '" y2="' + Se + '"></line>';
    }).join(""), Et = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([zt, Lt]) => {
      const [pt, Ht] = mt(Lt, 64);
      return '<text class="wbLetter' + (zt === "n" ? " wbNorth" : "") + '" x="' + pt + '" y="' + Ht + '">' + yt(gt.cardinal[zt]) + "</text>";
    }).join("");
    return ea({ icon: ne.windy, name: gt.wind, sub: tt, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + Ot + Et + (F !== void 0 ? '<path class="wbMarker" transform="rotate(' + F + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + yt($.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + yt($.unit) + "</text></svg>" });
  }
  const bo = (s, h) => {
    if (s < 3) return gt.advice.fine;
    if (s < 8) return gt.advice.sunblock;
    const m = Date.now(), w = rt("hourly").find((L) => L.uv_index != null && new Date(L.datetime).getTime() > m && L.uv_index < 6);
    return w && new Date(w.datetime).toDateString() === (/* @__PURE__ */ new Date()).toDateString() ? Ze(gt.advice.avoidUntil, { time: Ue(new Date(w.datetime), h) }) : gt.advice.avoidToday;
  };
  function Sr(s, h) {
    const m = Pe(s, h, "uv_index");
    if (!m || !pe(m.value)) return "";
    const w = Number(m.value), L = gt.uvLevel[yp(w)], F = /* @__PURE__ */ new Date();
    F.setHours(23, 59, 59, 999);
    const z = rt("hourly").filter((tt) => tt.uv_index != null && new Date(tt.datetime) > /* @__PURE__ */ new Date() && new Date(tt.datetime) <= F).reduce((tt, mt) => !tt || mt.uv_index > tt.uv ? { uv: mt.uv_index, time: new Date(mt.datetime) } : tt, void 0), $ = p1[yp(w)], I = 216 * Math.min(1, Math.max(0.08, 0.4 + (w - 4.5) * (0.5 / 5.5))), X = '<svg class="wbUvArt" viewBox="0 0 216 198" preserveAspectRatio="xMinYMin slice" aria-hidden="true"><defs><radialGradient id="' + M + 'uv-sun" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="' + I.toFixed(1) + '"><stop offset="0" style="stop-color:color-mix(in srgb, ' + $ + ' 28%, #fff6dd)"></stop><stop offset=".62" style="stop-color:color-mix(in srgb, ' + $ + ' 62%, #fff6dd)"></stop><stop offset="1" style="stop-color:' + $ + '"></stop></radialGradient></defs><circle class="wbUvSun" cx="0" cy="0" r="' + I.toFixed(1) + '" fill="url(#' + M + 'uv-sun)"></circle></svg><div class="wbUvBig"><span class="wbUvNum">' + yt(Xt(Math.round(w), s.locale)) + '</span><span class="wbUvWord">' + yt(L) + "</span></div>" + ns(Na(Xt(Math.round(w), s.locale), ""));
    return ea({
      icon: ne.sunnyAlert,
      name: gt.metrics.uv_index,
      sub: z && z.uv > w ? Ze(gt.uvPeak, { level: L, uv_index: Xt(Math.round(z.uv), s.locale), time: Ue(z.time, s) }) : L,
      zone: X,
      cls: "wbUv",
      callouts: [bo(w, s), [gt.callout.now, Xt(Math.round(w), s.locale) + " · " + L], [gt.callout.peak, z && z.uv > w ? Xt(Math.round(z.uv), s.locale) + " at " + Ue(z.time, s) : gt.callout.now]]
    });
  }
  function ys(s) {
    const h = rt("daily")[0], m = U.temperatureHistory;
    if (!h || new Date(h.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !pe(h.temperature) || !m || m.dailyHighs.length < t1) return "";
    const w = Number(h.temperature), L = m.dailyHighs.reduce((Lt, pt) => Lt + pt, 0) / m.dailyHighs.length, F = Math.round(w - L) || 0, z = F > 0 ? "above" : F < 0 ? "below" : "same", $ = [...m.days, { date: /* @__PURE__ */ new Date(), high: w, today: !0 }], I = $.map((Lt) => Lt.high).concat(L), X = Math.min(...I) - 1, tt = Math.max(...I) + 1, mt = (Lt) => (1 - (Lt - X) / (tt - X)) * 100, Ot = (Lt) => (Lt + 0.5) / $.length * 100, Et = $.map((Lt, pt) => [Ot(pt), mt(Lt.high)]), Ct = Et.map(([Lt, pt], Ht) => (Ht ? "L" : "M") + Lt.toFixed(2) + " " + pt.toFixed(2)).join(""), zt = '<div class="wbCompareBars wbTrend" aria-hidden="true"><div class="wbTrendPlot"><svg viewBox="0 0 100 100" preserveAspectRatio="none"><defs><linearGradient id="' + M + 'trend" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--primary)" stop-opacity=".28"></stop><stop offset="1" style="stop-color:var(--primary)" stop-opacity="0"></stop></linearGradient></defs><path class="wbTrendArea" d="' + Ct + "L" + Et[Et.length - 1][0].toFixed(2) + " 100L" + Et[0][0].toFixed(2) + ' 100Z" fill="url(#' + M + 'trend)"></path><line class="wbAvgLine" x1="0" x2="100" y1="' + mt(L).toFixed(2) + '" y2="' + mt(L).toFixed(2) + '" vector-effect="non-scaling-stroke"></line><path class="wbTrendLine" d="' + Ct + '" vector-effect="non-scaling-stroke"></path></svg><span class="wbTrendAvg" style="top:' + mt(L).toFixed(2) + '%">' + yt(ve(s, L)) + "</span>" + $.map((Lt, pt) => {
      const Ht = Lt.today ? " wbToday" : "", Bt = "left:" + Ot(pt).toFixed(2) + "%;top:" + mt(Lt.high).toFixed(2) + "%";
      return '<i class="wbTrendDot' + Ht + '" style="' + Bt + '"></i><span class="wbAvgValue' + Ht + '" style="' + Bt + '">' + yt(ve(s, Lt.high)) + "</span>";
    }).join("") + '</div><div class="wbTrendDays">' + $.map((Lt, pt) => '<span class="wbAvgDay' + (Lt.today ? " wbToday" : "") + '" style="left:' + Ot(pt).toFixed(2) + '%">' + yt(y1(Lt.date, s)) + "</span>").join("") + "</div></div>";
    return ea({
      icon: ne.chartLine,
      name: gt.metrics.compared_to_average,
      double: !0,
      sub: Ze(gt.highsLastDays, { days: m.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (F > 0 ? "+" : "") + yt(ve(s, F)) + '</div><div class="wbCompareWords">' + yt(gt.average[z]) + '</div><div class="wbCompareTemps">' + yt(Ze(gt.todayVsAverage, { today: ve(s, w), average: ve(s, L) })) + "</div></div>" + zt + "</div>"
    });
  }
  function _r(s, h) {
    const m = Pe(s, h, "humidity");
    if (!m || !pe(m.value)) return "";
    const w = Pe(s, h, "dew_point"), L = Math.max(0, Math.min(100, Number(m.value)));
    return ea({
      icon: ne.waterPercent,
      name: gt.metrics.humidity,
      sub: w && pe(w.value) ? Ze(gt.dewPoint, { dew_point: ve(s, w.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + L + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + Na(Xt(Math.round(Number(m.value)), s.locale), "%") + "</div>"
    });
  }
  function mi(s, h) {
    var Lt, pt, Ht;
    const m = Pe(s, h, "pressure");
    if (!m || !pe(m.value)) return "";
    const w = Number(m.value), L = (Lt = m.stateObj.attributes) == null ? void 0 : Lt.pressure_unit, F = xp(w, L), z = ((pt = U.pressureHistory) == null ? void 0 : pt.entityId) === m.stateObj.entity_id ? xp(U.pressureHistory.value, L) : void 0;
    let $;
    if (F !== void 0 && z !== void 0) {
      const Bt = F - z;
      $ = Bt >= cp ? "rising" : Bt <= -cp ? "falling" : "steady";
    }
    const I = fs(s, m.stateObj, "pressure", Math.round(w)), X = m.stateObj, tt = (Bt) => L === "inHg" ? Math.round(Bt * 100) / 100 : Math.round(Bt), mt = (Bt) => vp(s, X, "pressure", tt(Bt)), Ot = z !== void 0 ? U.pressureHistory.value : void 0, Et = Ot !== void 0 ? tt(w - Ot) : void 0, Ct = (Ht = X.entity_id) != null && Ht.startsWith("weather.") ? rt("hourly").find((Bt) => pe(Bt.pressure) && new Date(Bt.datetime).getTime() >= Date.now() + 3 * oe - 30 * Ie) : void 0, zt = [
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
      zone: '<div class="wbTapeRow"><div class="wbTapeValue">' + Na(I.number) + '<span class="wbTapeUnit">' + yt(I.unit) + "</span></div>" + (F !== void 0 ? xs(s, F) : "") + "</div>"
    });
  }
  function xs(s, h) {
    const L = Math.floor(h) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (F, z) => L + z).map((F) => {
      const z = 100 - (F - h) * 9;
      if (z < 22 || z > 178) return "";
      const $ = F % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(z - 100) / 100) + '"><line class="wbTapeTick" x1="' + ($ ? 2 : 8) + '" x2="26" y1="' + z + '" y2="' + z + '"></line>' + ($ ? '<text class="wbTapeLabel" x="33" y="' + z + '">' + yt(Xt(F, s.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + yt(gt.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + yt(gt.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function Ms(s) {
    var I, X;
    const h = $l(s), m = h ? s.states[h] : void 0;
    if (!m || ((I = U.rain) == null ? void 0 : I.entityId) !== h || !pe(U.rain.change)) return "";
    const w = ((X = m.attributes) == null ? void 0 : X.unit_of_measurement) ?? "", L = lt(s, "hourly"), F = Date.now() + ha, z = rt("hourly").filter((tt) => tt.precipitation != null && new Date(tt.datetime).getTime() <= F), $ = z.reduce((tt, mt) => tt + Number(mt.precipitation), 0);
    return ea({
      icon: ne.rainy,
      name: gt.metrics.precipitation,
      sub: L && z.length ? Ze(gt.rainExpected, { amount: Xt($, s.locale, { maximumFractionDigits: 1 }) + " " + an(s, L, "precipitation") }) : gt.rainLast24h,
      visual: Na(Xt(U.rain.change, s.locale, { maximumFractionDigits: 1 }), w) + (z.length > 1 ? V1(z.map((tt) => ({ label: "", value: Number(tt.precipitation) }))) : "")
    });
  }
  function Uo(s, h) {
    const m = Pe(s, h, "visibility");
    if (!m || !pe(m.value)) return "";
    const w = fs(s, m.stateObj, "visibility", m.value), L = Rm(Number(m.value), an(s, m.stateObj, "visibility"));
    return ea({
      icon: ne.eyeOutline,
      name: gt.metrics.visibility,
      sub: gt.visibilityLevel[Pm(L)],
      visual: '<div class="wbSea"><canvas class="wbSeaArt" data-wb-sea="' + L + '" aria-hidden="true"></canvas><div class="wbSeaFact">' + yt(gi(s, L)) + '</div><div class="wbSeaValue">' + Na(w.number, w.unit) + "</div></div>"
    });
  }
  function gi(s, h) {
    var F;
    const m = Bm((F = s.config) == null ? void 0 : F.country, h);
    if (m) return Ze(gt.visibilityLandmarks, { from: m.from, to: m.to });
    const w = h / o1 * 60;
    if (w < 60) {
      const z = w < 5 ? Math.max(1, Math.round(w)) : 5 * Math.round(w / 5);
      if (z < 60) return Ze(gt.walkMinutes, { minutes: Xt(z, s.locale) });
    }
    const L = Math.max(1, Math.round(w / 30) / 2);
    return L < 8 ? Ze(gt.walkHours, { hours: Xt(L, s.locale) }) : gt.walkDay;
  }
  function ks(s) {
    U.categories === void 0 && nn(s);
    const h = ye(s), m = (I) => I.map((X) => s.states[X]).filter(qn), w = m(h.air), L = m(h.pollen);
    if (!w.length && !L.length) return "";
    const F = [...w, ...L], z = (I) => L.includes(I) ? ne.flower : ne.airFilter, $ = F.find((I) => I.entity_id === ct.aq);
    return $ ? ln(s, $, z($)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + yt(gt.airQuality) + '</h2></div><div class="wbAqTiles">' + F.map((I) => '<button class="wbTile" data-wb="aq-open" data-entity="' + yt(I.entity_id) + '"><span class="wbChip">' + Wo(z(I)) + '</span><span class="wbText"><span class="wbName">' + yt(tn(s, I)) + '</span><span class="wbSub">' + yt(Io(s, I)) + "</span></span></button>").join("") + "</div></div>";
  }
  function ln(s, h, m) {
    var tt, mt, Ot;
    const w = ((tt = h.attributes) == null ? void 0 : tt.unit_of_measurement) ?? "", L = ((mt = h.attributes) == null ? void 0 : mt.device_class) === "pm25" && w === fp && pe(h.state), F = Number(h.state), z = L ? os(F) : void 0, $ = ((Ot = U.aqHistory) == null ? void 0 : Ot.entityId) === h.entity_id ? U.aqHistory.points : void 0, I = (Et) => Math.min(100, Math.max(0, Et / as * 100));
    let X;
    if ($ && $.length > 1) X = Sp($, (Et) => (Xt(Et, s.locale, { maximumFractionDigits: 1 }) + " " + w).trim());
    else if (z) {
      let Et = 0;
      const Ct = yu.map(([zt, Lt]) => {
        const pt = I(Math.min(Lt, as)), Ht = up[zt] + " " + Et + "% " + pt + "%";
        return Et = pt, Ht;
      });
      X = '<div class="wbScale" role="meter" aria-label="' + yt(gt.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + as + '" aria-valuenow="' + F + '" style="background:linear-gradient(to right, ' + Ct.join(", ") + ')"><i style="left:' + I(F) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + as + " " + fp + "</span></div>";
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
  }), bi = ["none", "very_low", "low", "moderate", "high", "very_high"], Xe = (s) => pe(s.state) ? Number(s.state) : bi.indexOf(String(s.state).toLowerCase().replace(/ /g, "_")), Tr = (s) => {
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
    const w = m.attributes.device_class, L = Number(m.state), F = pe(m.state), z = w === "aqi" && F ? Wn(L) : w === "pm25" && F ? Cr[os(L)] : Io(s, m), $ = F ? Xt(Math.round(L), s.locale) : String(m.state), I = w === "aqi" ? "AQI" : m.attributes.unit_of_measurement || "", X = F && w === "aqi" ? Vn(L) : F && w === "pm25" ? os(L) : null;
    return ea(X ? {
      icon: ne.airFilter,
      name: gt.airQuality,
      sub: z,
      cls: "wbAqSmile",
      zone: '<div class="wbAqFill" style="background:' + up[X] + '">' + Wa(X) + '<div class="wbAqBig"><span class="wbAqNum">' + yt($) + "</span>" + (I ? '<span class="wbAqUnit">' + yt(I) + "</span>" : "") + "</div></div>" + ns(Na($, I)),
      callouts: [wo(w, L, F), ...h.slice(1, 3).map((tt) => [tn(s, tt), Io(s, tt)])]
    } : {
      icon: ne.airFilter,
      name: gt.airQuality,
      sub: z,
      cls: "wbBase",
      zone: Na($, I),
      callouts: [wo(w, L, F), ...h.slice(1, 3).map((tt) => [tn(s, tt), Io(s, tt)])]
    });
  }
  const Lr = [
    ["wbSeed", '<svg viewBox="0 0 22 30" aria-hidden="true"><path d="M11 28V11" fill="none" stroke="currentColor" stroke-width="1"></path><path d="M11 11L3 6M11 11L5 2.5M11 11L8.5 1M11 11L13.5 1M11 11L17 2.5M11 11L19 6" fill="none" stroke="currentColor" stroke-width=".8" stroke-linecap="round"></path><circle cx="11" cy="28.5" r="1.4" fill="currentColor"></circle></svg>'],
    ["wbGrain", '<svg viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="3.3" fill="currentColor"></circle><path d="M6 1.2v1.4M6 9.4v1.4M1.2 6h1.4M9.4 6h1.4M2.6 2.6l1 1M8.4 8.4l1 1M2.6 9.4l1-1M8.4 3.6l1-1" stroke="currentColor" stroke-width=".9" stroke-linecap="round"></path></svg>'],
    ["wbStem", '<svg viewBox="0 0 10 30" aria-hidden="true"><path d="M5 29Q3.6 18 5 8" fill="none" stroke="currentColor" stroke-width="1"></path><ellipse cx="5" cy="6" rx="2.3" ry="4.6" fill="currentColor"></ellipse></svg>']
  ], Oe = (s) => {
    const h = [1, 3, 5, 7, 10, 13][Math.max(0, Math.min(5, Number.isFinite(s) ? Math.round(s) : 0))];
    return '<div class="wbPollenAir" aria-hidden="true">' + Array.from({ length: h }, (m, w) => {
      const [L, F] = Lr[w % 3], z = 10 + w * 7 % 9, $ = 2.6 + w * 5 % 4 * 0.4;
      return '<span class="wbFloat ' + L + '" style="top:' + (4 + w * 37 % 52) + "%;--x:" + (w * 29 % 90 + 4) + "%;--s:" + (0.8 + w * 13 % 5 / 10).toFixed(1) + ";animation-duration:" + z + "s;animation-delay:-" + (w * 2.3 % z).toFixed(1) + 's"><span class="wbPush"><span class="wbBob" style="animation-duration:' + $.toFixed(1) + "s;animation-delay:-" + (w * 0.7 % $).toFixed(1) + 's">' + F + "</span></span></span>";
    }).join("") + "</div>";
  };
  function Dr(s) {
    const h = Ar(s).sort((L, F) => Xe(F) - Xe(L));
    if (!h.length) return ea({ icon: ne.flower, name: gt.pollen, sub: gt.noPollen, visual: Na("–", ""), cls: "wbBase" });
    const m = h[0], w = (L) => pe(L.state) ? Io(s, L) : Tr(L.state);
    return ea({
      icon: ne.flower,
      name: gt.pollen,
      sub: tn(s, m) + " · " + w(m),
      cls: "wbBase wbPollen",
      zone: Oe(Xe(m)) + Na(w(m), ""),
      callouts: h.slice(0, 3).map((L) => [tn(s, L), w(L)])
    });
  }
  function Ss(s) {
    var $;
    const h = Date.now(), m = rt("hourly").filter((I) => {
      const X = new Date(I.datetime).getTime();
      return X > h - oe && X < h + 12 * oe;
    }), w = m.find((I) => (I.precipitation_probability ?? 0) >= 50 || (I.precipitation ?? 0) >= 0.2), L = w ? Ze(gt.rainFrom, { time: Ue(new Date(Math.max(h, new Date(w.datetime).getTime())), s) }) : m.length ? gt.noRain12 : void 0, F = (j == null ? void 0 : j()) || "rainviewer";
    let z;
    if (F.startsWith("camera:")) {
      const I = s.states[F.slice(7)], X = I && I.state !== "unavailable" && (($ = I.attributes) == null ? void 0 : $.entity_picture);
      z = X ? '<div class="wbRadar wbRadarCam" aria-hidden="true"><img class="wbRadarImg" src="' + yt(X) + '" data-src="' + yt(X) + '" alt=""></div>' : '<div class="wbRadar" aria-hidden="true"><span class="wbRadarNote">' + yt(gt.cameraOff) + "</span></div>";
    } else {
      const I = gr(s);
      z = I ? '<div class="wbRadar wbRadarMap" aria-hidden="true" data-lat="' + I.lat + '" data-lon="' + I.lon + '"><i class="wbRadarHome"></i></div>' : '<div class="wbRadar" aria-hidden="true"><i class="wbRadarRing"></i><i class="wbRadarHome"></i><span class="wbRadarNote">' + yt(gt.noLocation) + "</span></div>";
    }
    return ea({ icon: ne.radar, name: gt.rainRadar, sub: L, cls: "wbBase wbRadarTile", visual: z });
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
  }, Ta = () => {
    const s = ct.range, h = Date.now();
    if (s.preset !== "custom") {
      const L = Er.find(([F]) => F === s.preset)[2];
      return [h - L * ha, h];
    }
    const m = on(/* @__PURE__ */ new Date(s.from + "T00:00")).getTime(), w = Math.min(h, on(/* @__PURE__ */ new Date(s.to + "T00:00")).getTime() + ha);
    return [Math.min(m, w - oe), w];
  }, vi = (s) => {
    const h = ct.range;
    if (h.preset !== "custom") return Er.find(([L]) => L === h.preset)[1];
    const [m, w] = Ta();
    return h.from === h.to ? dn(s, new Date(m)) : dn(s, new Date(m)) + " – " + dn(s, new Date(w - 1));
  }, jn = () => ct.range.preset === "custom" ? ct.range.from + "_" + ct.range.to : ct.range.preset, Rr = (s, h) => h - s <= 2 * ha, yi = (s, h, m, w) => Rr(m, w) ? Ue(h, s) : dn(s, h), Pr = (s, h = 60) => {
    const m = Math.max(1, Math.ceil(s.length / h));
    return s.filter((w, L) => L % m === 0 || L === s.length - 1);
  }, pn = (s, h, m, w, L = !1) => s.callWS({
    type: "history/history_during_period",
    start_time: new Date(m).toISOString(),
    end_time: new Date(w).toISOString(),
    entity_ids: [h],
    minimal_response: L,
    no_attributes: L,
    significant_changes_only: !1
  }), yo = (s) => async (h, m, w, L) => {
    const F = Pe(h, m, s);
    if (!F) return [];
    const z = F.stateObj.entity_id, $ = await pn(h, z, w, L);
    return Pr((($ == null ? void 0 : $[z]) ?? []).map((I) => {
      var mt;
      const X = ((mt = I.a) == null ? void 0 : mt[s]) ?? (pe(I.s) ? Number(I.s) : void 0), tt = (I.lu ?? I.lc) * 1e3;
      return typeof X == "number" && tt >= w && tt <= L ? { t: new Date(tt), value: X } : null;
    }).filter(Boolean)).map((I) => ({ label: yi(h, I.t, w, L), value: I.value }));
  }, xi = (s, h) => async (m, w, L, F) => {
    const z = s(m);
    if (!z) return [];
    const $ = z.entity_id, I = await pn(m, $, L, F, !0);
    return Pr(((I == null ? void 0 : I[$]) ?? []).map((X) => {
      const tt = h(X.s), mt = X.lu * 1e3;
      return tt == null || !Number.isFinite(tt) || mt < L || mt > F ? null : { t: new Date(mt), value: tt };
    }).filter(Boolean)).map((X) => ({ label: yi(m, X.t, L, F), value: X.value }));
  }, Mi = (s, h) => async (m, w, L, F) => {
    const z = gr(m);
    if (!z) return [];
    const $ = [];
    if (Rr(L, F)) for (let I = L; I <= F; I += oe / 2) $.push({ label: Ue(new Date(I), m), value: s(new Date(I), z) });
    else for (let I = F; I >= L; I -= ha) {
      const X = new Date(I), tt = h(X, z, m);
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
      load: xi((s) => to(s)[0], (s) => pe(s) ? Number(s) : null),
      fmt: (s, h, m) => {
        var F, z;
        const w = to(s)[0], L = (F = w == null ? void 0 : w.attributes) == null ? void 0 : F.device_class;
        return Xt(Math.round(m * 10) / 10, s.locale) + (L === "aqi" ? " AQI" : (z = w == null ? void 0 : w.attributes) != null && z.unit_of_measurement ? " " + w.attributes.unit_of_measurement : "");
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
  }, wa = {};
  let Yo = null;
  async function zn(s) {
    const h = i == null ? void 0 : i();
    if (!h || !Dt[s]) return;
    const m = s + "|" + jn(), [w, L] = Ta();
    if (wa[m] && Date.now() - wa[m].at < 5 * Ie) return;
    wa[m] = { at: Date.now(), points: null };
    try {
      wa[m].points = await Dt[s].load(h, et(h), w, L);
    } catch {
      wa[m].points = [];
    }
    qe(!0), Yo === s && ct.graph === s && (Yo = null, rp(G.querySelector(".wbGraphCard")));
    const F = ct.graph === s && G.querySelector(".wbGraph .wbChart");
    F && bu(F, F.querySelector(".wbLine"), F.querySelectorAll(".wbArea"));
  }
  function un(s, h) {
    const m = ct.range, w = Br(Date.now()), [L, F] = Ta(), z = m.pickFrom || Br(L), $ = m.pickTo || Br(F - 1);
    return '<div class="wbRangePick" role="dialog" aria-label="Choose date range"><div class="wbRangePresets">' + Er.map(([I, X]) => '<button class="wbRangePreset" aria-pressed="' + (m.preset === I) + '" data-wb="graph-preset" data-range="' + I + '" data-wb-focus="graph-preset-' + I + '">' + yt(X) + "</button>").join("") + '</div><div class="wbRangeDates"><label><span>From</span><input type="date" data-range-from value="' + z + '" max="' + w + '"></label><label><span>To</span><input type="date" data-range-to value="' + $ + '" max="' + w + '"></label></div><button class="wbRangeApply" data-wb="graph-apply" data-wb-focus="graph-apply">Show these dates</button></div>';
  }
  function Cs(s, h, m) {
    var mt;
    const w = Dt[m], [L, F] = Ta(), z = Rr(L, F), $ = (mt = wa[m + "|" + jn()]) == null ? void 0 : mt.points, I = Math.max(120, Math.min(520, innerWidth - (innerWidth <= 620 ? 0 : 32)) - 2 * 18 - 32), tt = $ ? $.length > 1 ? Sp($, (Ot) => w.fmt(s, h, Ot, z), 220, I) : '<span class="wbGraphNote"><span>No history for these dates</span></span>' : '<span class="wbGraphNote"><span>Loading…</span></span>';
    return '<div class="wbPopupBox"><div class="wbCard wbSquare wbGraphCard" role="dialog" aria-modal="true" aria-label="' + yt(w.name(s)) + '"><div class="wbHead"><div class="wbChip wbPlain">' + xu(w.icon(s)) + '</div><div class="wbText"><span class="wbName">' + yt(w.name(s)) + '</span><span class="wbSub">' + yt(w.sub ? w.sub(z) : w.now ? w.now(s, h) : "") + '</span></div><button class="wbBack" title="Close" data-wb="graph-close" data-wb-focus="graph-close">' + Wo(ne.close) + '</button></div><button class="wbRangeBtn" aria-haspopup="dialog" aria-expanded="' + !!ct.picking + '" title="Choose date range" data-wb="graph-pick" data-wb-focus="graph-pick">' + Wo(ne.calendar) + "<span>" + yt(vi(s)) + "</span>" + Wo(ne.chevronDown) + '</button><div class="wbGraph">' + tt + "</div></div>" + (ct.picking ? un() : "") + "</div>";
  }
  function qe(s) {
    var Ot, Et, Ct, zt, Lt;
    const h = i == null ? void 0 : i();
    if (!h || it) return;
    const m = et(h);
    _t(h, m), U.lastFetch || Xa();
    const w = ye(h), L = Mp(h), F = $l(h), z = [
      ...m.map((pt) => h.states[pt]),
      h.states["sun.sun"],
      L && h.states[L],
      F && h.states[F],
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
    const $ = T.getRootNode(), I = $.activeElement || document.activeElement;
    for (const pt of ot) {
      const Ht = O[pt];
      let Bt = "";
      try {
        Bt = _s[pt](h, m) || "";
      } catch {
        Bt = "";
      }
      if (Bt === Ht.html) continue;
      const Se = I && Ht.el.contains(I) ? (Ot = I.dataset) == null ? void 0 : Ot.wbFocus : void 0, At = Ht.el.querySelector(".wbStripScroll"), le = At ? At.scrollLeft : null;
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
    if (X !== H) {
      const pt = I && G.contains(I) ? (Ct = I.dataset) == null ? void 0 : Ct.wbFocus : void 0;
      H = X, G.innerHTML = X, G.hidden = !X, X && !G.isConnected && (T.closest("#app") || T).appendChild(G), pt && !Y && ((zt = G.querySelector('[data-wb-focus="' + pt + '"]')) == null || zt.focus({ preventScroll: !0 }));
    }
    bt(), T.querySelectorAll(".wbRadarMap").forEach((pt) => {
      pt._tiles || Kn(pt);
    }), Y && ((Lt = T.querySelector('[data-wb-focus="' + Y + '"]') || G.querySelector('[data-wb-focus="' + Y + '"]')) == null || Lt.focus({ preventScroll: !0 }), Y = null);
    let tt = !1, mt = !1;
    for (const pt of ot) {
      const Ht = O[pt], Bt = !Ht.el.hidden, Se = nt[pt] === "wide" || K.includes(pt), At = ot.indexOf(pt) >= ot.indexOf("moon"), le = Bt && (At && Se && !tt || !Se && !mt);
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
    const s = getComputedStyle(T), h = (z) => s.getPropertyValue(z).trim(), m = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([z, $]) => {
      h($) && (m[z] = h($));
    });
    const w = h("--color-text-primary") || "#f1f1f1", L = h("--color-bg-card") || "#222222", F = !!T.closest(".light");
    return { colors: { ...Fa, ...m }, ink: F ? w : L, paper: F ? L : w };
  }
  const Gn = (s, h) => {
    var m;
    s.width !== h.w && (s.width = h.w), s.height !== h.h && (s.height = h.h), (m = s.getContext("2d")) == null || m.putImageData(new ImageData(h.data, h.w, h.h), 0, 0);
  }, va = () => g && !b1();
  function Hr(s, h) {
    T.querySelectorAll("canvas[data-wb-strip]").forEach((m) => ki(m, Q[m.dataset.wbStrip], s, h));
  }
  function ki(s, h, m, w) {
    if (!h || !s.getClientRects().length) return;
    const L = s.clientWidth, F = s.clientHeight;
    if (!L || !F) return;
    const z = { width: L, height: F, columns: h.columns || ip, colors: w.colors, clock: m, ambient: va(), seed: h.seed, soft: 1.5 };
    if (p === "smooth") {
      const $ = Math.min(2, window.devicePixelRatio || 1), I = Math.round(L * $), X = Math.round(F * $);
      s.width !== I && (s.width = I), s.height !== X && (s.height = X);
      const tt = s.getContext("2d");
      if (!tt) return;
      tt.setTransform($, 0, 0, $, 0, 0), hm(tt, h.segs, z);
    } else Gn(s, fm(h.segs, { ...z, px: 2, oneBit: p === "onebit", ink: w.ink, paper: w.paper }));
  }
  function ra(s) {
    if (it) return;
    const h = hn();
    if (p !== "smooth") {
      const m = va();
      T.querySelectorAll("canvas[data-wb-wx]").forEach((w) => {
        w.getClientRects().length && Gn(w, Xh(Gh(w.dataset.wbWx, h.colors), { size: Number(w.dataset.size) || 40, px: 2, oneBit: p === "onebit", colors: h.colors, ink: h.ink, paper: h.paper, clock: s, idle: m }));
      });
    }
    T.querySelectorAll("canvas[data-wb-sea]").forEach((m) => {
      const w = m.clientWidth, L = m.clientHeight, F = Number(m.dataset.wbSea), z = w + "x" + L + ":" + F + ":" + h.colors.skyClearDay;
      !w || !L || !(F > 0) || m.dataset.painted === z || (m.dataset.painted = z, Gn(m, Lm(w, L, F, h.colors)));
    }), Hr(s, h);
  }
  function ya(s) {
    if (wt = 0, !(it || !va())) {
      if (!document.hidden)
        if (p === "smooth") Hr(s, hn());
        else {
          const h = Math.floor(s / 100);
          h !== st && (st = h, ra(s));
        }
      wt = requestAnimationFrame(ya);
    }
  }
  function Un() {
    T.classList.toggle("wbMotion", va()), !wt && !it && va() && (wt = requestAnimationFrame(ya));
  }
  function mn(s) {
    var m, w, L, F, z, $, I;
    if (s.target === G) {
      ct.graph = void 0, ct.picking = !1, qe(!0);
      return;
    }
    const h = (w = (m = s.target).closest) == null ? void 0 : w.call(m, "[data-wb]");
    if (!h || !(T.contains(h) || G.contains(h))) {
      const X = (F = (L = s.target).closest) == null ? void 0 : F.call(L, ".wbItem"), tt = X == null ? void 0 : X.dataset.card;
      if (!X || !T.contains(X) || !Dt[tt] || ct.graph === tt || T.closest(".tfEditing") || tt === "current" && b) return;
      ct.graph = tt, ct.picking = !1, Y = "graph-close", qe(!0), (z = wa[tt + "|" + jn()]) != null && z.points ? rp(G.querySelector(".wbGraphCard")) : Yo = tt, zn(tt);
      return;
    }
    switch (h.dataset.wb) {
      case "day": {
        ct.openDay = Number(h.dataset.index), ct.opener = h.dataset.wbFocus, Y = "back-day";
        const X = wr()[ct.openDay], tt = !U.todayHistory || U.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - U.todayHistory.fetched > Um;
        X && pr(new Date(X.datetime), /* @__PURE__ */ new Date()) && tt && Ca();
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
        const X = T.querySelector(".wbStripScroll");
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
        let X = ct.range.pickFrom || (($ = T.querySelector("[data-range-from]")) == null ? void 0 : $.value), tt = ct.range.pickTo || ((I = T.querySelector("[data-range-to]")) == null ? void 0 : I.value);
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
    var h, m, w, L, F, z;
    s.key === "Escape" && ct.openDay !== void 0 && ((m = (h = s.target).closest) != null && m.call(h, '[data-wb-open="day"]')) ? (ct.openDay = void 0, Y = ct.opener, ct.opener = void 0, qe(!0)) : s.key === "Escape" && ct.picking && ((L = (w = s.target).closest) != null && L.call(w, ".wbGraphCard")) ? (ct.picking = !1, Y = "graph-pick", qe(!0)) : s.key === "Escape" && ct.graph && ((z = (F = s.target).closest) != null && z.call(F, ".wbGraphCard")) && (ct.graph = void 0, qe(!0));
  }
  let xo = null;
  function Si(s) {
    var m, w;
    const h = (w = (m = s.target).closest) == null ? void 0 : w.call(m, ".wbStripScroll");
    !h || s.button !== 0 || (xo = { startX: s.pageX, left: h.scrollLeft, moved: !1 }, h.classList.add("wbHeld"), window.addEventListener("mousemove", _i), window.addEventListener("mouseup", bn, { once: !0 }));
  }
  function _i(s) {
    const h = T.querySelector(".wbStripScroll");
    if (!xo || !h) return;
    const m = s.pageX - xo.startX;
    !xo.moved && Math.abs(m) > 1 && (xo.moved = !0, h.classList.add("wbDragging")), h.scrollLeft = xo.left - m;
  }
  function bn() {
    xo = null, window.removeEventListener("mousemove", _i);
    const s = T.querySelector(".wbStripScroll");
    if (!s) return;
    s.classList.remove("wbDragging", "wbHeld");
    const h = [...s.querySelectorAll(".wbSnap")];
    if (h.length) {
      const m = h.reduce((w, L) => Math.abs(L.offsetLeft - s.scrollLeft) < Math.abs(w.offsetLeft - s.scrollLeft) ? L : w);
      s.scrollTo({ left: m.offsetLeft, behavior: "smooth" });
    }
  }
  const Yn = (s) => {
    var m, w;
    const h = s.target;
    (m = h.matches) != null && m.call(h, "[data-range-from]") ? ct.range.pickFrom = h.value : (w = h.matches) != null && w.call(h, "[data-range-to]") && (ct.range.pickTo = h.value);
  };
  T.addEventListener("change", Yn), T.addEventListener("click", mn), T.addEventListener("keydown", gn), G.addEventListener("change", Yn), G.addEventListener("click", mn), G.addEventListener("keydown", gn), T.addEventListener("mousedown", Si);
  const Zn = 64, eo = 30;
  let ao = null, ia = 0;
  const $n = () => {
    ia = 0, T.querySelectorAll(".wbPollen .wbPush").forEach((s) => {
      let h = 0, m = 0;
      if (ao) {
        const w = s.parentElement.getBoundingClientRect(), L = w.left + w.width / 2 - ao.x, F = w.top + w.height / 2 - ao.y, z = Math.hypot(L, F) || 1;
        if (z < Zn) {
          const $ = (1 - z / Zn) * eo;
          h = L / z * $, m = F / z * $;
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
  T.addEventListener("pointermove", sa), T.addEventListener("pointerleave", wn);
  const oo = typeof ResizeObserver == "function" ? new ResizeObserver(() => ra(performance.now())) : null;
  oo == null || oo.observe(T);
  const Va = typeof ResizeObserver == "function" ? new ResizeObserver((s) => s.forEach((h) => {
    const m = h.target;
    m._tiles && (m.clientWidth !== m._w || m.clientHeight !== m._h) && Kn(m);
  })) : null;
  function Kn(s) {
    var z;
    const h = s.clientWidth, m = s.clientHeight;
    if (!h || !m || it) return;
    const w = s1(Number(s.dataset.lat), Number(s.dataset.lon), h, m), L = !!((z = T.closest("#app")) != null && z.classList.contains("light")), F = ($) => ' style="left:' + $.left + "px;top:" + $.top + 'px"';
    s._tiles = w, s._w = h, s._h = m, s._frames = null, s._built = Date.now(), s.innerHTML = '<div class="wbRadarLayer wbRadarBase">' + w.map(($) => '<img src="https://' + "abcd"[($.x + $.y) % 4] + ".basemaps.cartocdn.com/" + (L ? "light_all" : "dark_all") + "/" + dc + "/" + $.x + "/" + $.y + '.png"' + F($) + ' alt="">').join("") + '</div><div class="wbRadarFrames"></div><i class="wbRadarHome"></i><span class="wbRadarTime"></span><span class="wbRadarCredit">© OpenStreetMap · CARTO · RainViewer</span>', Va == null || Va.observe(s), i1().then(($) => {
      !s.isConnected || it || s._tiles !== w || (s.querySelector(".wbRadarFrames").innerHTML = $.frames.map((I, X) => '<div class="wbRadarLayer wbRadarRain" data-i="' + X + '" hidden>' + w.map((tt) => '<img src="' + $.host + I.path + "/" + Fo + "/" + dc + "/" + tt.x + "/" + tt.y + '/2/1_1.png"' + F(tt) + ' alt="">').join("") + "</div>").join(""), s._frames = $.frames, s._hold = 0, Nr(s, $.frames.findLastIndex((I) => I.past)));
    }).catch(() => {
      s.isConnected && (s.querySelector(".wbRadarTime").textContent = gt.radarOff);
    });
  }
  function Nr(s, h) {
    const m = s._frames;
    if (!(m != null && m.length)) return;
    s._i = h, s.querySelectorAll(".wbRadarRain").forEach((L) => {
      L.hidden = Number(L.dataset.i) !== h;
    });
    const w = m[h];
    s.querySelector(".wbRadarTime").textContent = Ue(new Date(w.time * 1e3), i == null ? void 0 : i()) + (w.past ? "" : " · " + gt.forecastTag);
  }
  function As() {
    T.querySelectorAll(".wbRadarMap").forEach((s) => {
      if (!s._frames) return;
      if (Date.now() - s._built > vu) {
        Kn(s);
        return;
      }
      if (Ne != null && Ne.matches) return;
      if (s._hold > 0) {
        s._hold -= dp;
        return;
      }
      const h = s._frames.length - 1, m = s._frames.findLastIndex((L) => L.past), w = s._i >= h ? 0 : s._i + 1;
      Nr(s, w), (w === m || w === h) && (s._hold = r1);
    });
  }
  const Ts = () => T.querySelectorAll(".wbRadarImg").forEach((s) => {
    const h = s.dataset.src;
    s.src = h + (h.includes("?") ? "&" : "?") + "hc=" + Date.now();
  }), no = typeof MutationObserver == "function" ? new MutationObserver(() => T.querySelectorAll(".wbRadarMap").forEach((s) => {
    s._tiles && Kn(s);
  })) : null, Ci = T.closest("#app");
  Ci && (no == null || no.observe(Ci, { attributes: !0, attributeFilter: ["class"] }));
  const Ne = (ro = window.matchMedia) == null ? void 0 : ro.call(window, "(prefers-reduced-motion: reduce)"), Ai = () => {
    Un(), ra(performance.now());
  };
  (Zo = Ne == null ? void 0 : Ne.addEventListener) == null || Zo.call(Ne, "change", Ai);
  const Ye = [
    setInterval(() => {
      It = /* @__PURE__ */ new Date(), qe(!0);
    }, e1),
    setInterval(() => {
      V = /* @__PURE__ */ new Date(), qe(!0);
    }, a1),
    setInterval(Xa, Jm),
    setInterval(As, dp),
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
      !s || s === p || (p = s, T.dataset.style = p, G.dataset.style = p, qe(!0), Un());
    },
    destroy() {
      var s;
      cancelAnimationFrame(ia), T.removeEventListener("pointermove", sa), T.removeEventListener("pointerleave", wn), it = !0, Ye.forEach(clearInterval), wt && cancelAnimationFrame(wt), wt = 0, oo == null || oo.disconnect(), Va == null || Va.disconnect(), no == null || no.disconnect(), (s = Ne == null ? void 0 : Ne.removeEventListener) == null || s.call(Ne, "change", Ai), bn(), T.removeEventListener("click", mn), T.removeEventListener("change", Yn), T.removeEventListener("keydown", gn), T.removeEventListener("mousedown", Si), G.removeEventListener("click", mn), G.removeEventListener("change", Yn), G.removeEventListener("keydown", gn), ["daily", "hourly"].forEach(vt), T.remove(), G.remove();
    }
  };
}
const ii = "#E1E1E1", Ap = "#F7F4F0", Kl = "#03a9f4", te = 14, ee = 172;
let Y1 = 0;
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
function Z1(n) {
  const i = n < 2 ? n + 24 : n;
  let d = en[0], p = en[en.length - 1];
  for (let C = 0; C < en.length - 1; C++) if (i >= en[C][0] && i <= en[C + 1][0]) {
    d = en[C], p = en[C + 1];
    break;
  }
  const g = (i - d[0]) / (p[0] - d[0]), y = g * g * (3 - 2 * g), b = (C, j) => {
    const M = parseInt(C.slice(1), 16), T = parseInt(j.slice(1), 16);
    return "#" + [16, 8, 0].map((q) => Math.round((M >> q & 255) + ((T >> q & 255) - (M >> q & 255)) * y).toString(16).padStart(2, "0")).join("");
  };
  return { top: b(d[1][0], p[1][0]), bot: b(d[1][1], p[1][1]), warm: b(d[1][2], p[1][2]), cool: b(d[1][3], p[1][3]), op: d[1][4] + (p[1][4] - d[1][4]) * y, t: i };
}
function $1(n) {
  const i = parseInt(n.slice(1), 16), d = (i >> 16 & 255) / 255, p = (i >> 8 & 255) / 255, g = (i & 255) / 255, y = Math.max(d, p, g), b = Math.min(d, p, g);
  let C = 0, j = 0;
  const M = (y + b) / 2;
  if (y !== b) {
    const T = y - b;
    j = M > 0.5 ? T / (2 - y - b) : T / (y + b), C = (y === d ? (p - g) / T + (p < g ? 6 : 0) : y === p ? (g - d) / T + 2 : (d - p) / T + 4) / 6;
  }
  return [C * 360, j * 100, M * 100];
}
function Ru(n, i, d) {
  i = mo(i, 0, 100) / 100, d = mo(d, 0, 100) / 100;
  const p = (b) => (b + n / 30) % 12, g = i * Math.min(d, 1 - d), y = (b) => d - g * Math.max(-1, Math.min(p(b) - 3, Math.min(9 - p(b), 1)));
  return "#" + [y(0), y(8), y(4)].map((b) => Math.round(b * 255).toString(16).padStart(2, "0")).join("");
}
const [Pu, Hu, Nu] = $1(ii), Tp = Ru(Pu, Hu, Math.max(6, Nu - 14)), K1 = Ru(Pu, Hu, Math.min(96, Nu + 16));
function X1(n, i, d, p, g) {
  const y = ee / 2, b = ee * 0.12, C = y - (y - b) * n, j = (ot) => ot ** 1.3, M = mo(d, -1.5, 1.5), T = (ot) => -(Math.abs(M) * 4.6 * ot ** 1.5) * Math.sign(M), q = n * 1.4, G = (ot, nt) => {
    const K = Math.min(4.8, Math.abs(d) * 2.6) * (nt ? 1 : -1) * Math.sign(d || 1), O = nt ? ot + C : ot, it = nt ? ot : ot + C, dt = (xt) => O + T(xt) + K * Math.sin(xt * Math.PI * 1.2 + p) * j(xt) * 1.4 + q * Math.sin(xt * Math.PI * 2 + p * 0.6) * j(xt) * (nt ? 1 : -1), wt = [[it, te]];
    for (let xt = 0; xt <= 12; xt++) wt.push([dt(xt / 12), te + ee * xt / 12]);
    wt.push([it, te + ee]);
    let st = '<path d="' + Xl(wt) + 'Z" fill="' + ii + '"/>';
    if (g) return st;
    const Z = 1.35 + ((nt ? d > 0 : d < 0) ? 0.35 : 0), Y = (xt) => {
      const Pt = xt / 7, ct = nt ? 1 - Pt : Pt, U = (1 - ct) ** 1.3, It = ot + C * Pt;
      return Array.from({ length: 13 }, (V, Q) => {
        const A = Q / 12;
        return [It + T(A) * U + K * Z * Math.sin(A * Math.PI * 1.2 + p - ct * 3.2) * j(A) * 1.4 * U + q * 1.6 * Math.sin(A * Math.PI * 2 + p * 0.6 - ct * 2.5) * j(A) * n * (0.4 + 0.6 * U), te + ee * A];
      });
    }, H = [1, 2, 3, 4, 5, 6].map(Y);
    for (let xt = 0; xt < 6; xt += 2) st += '<path d="' + Xl(H[xt]) + Xl(H[xt + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return st;
  }, J = y - (y - b) * i;
  return { body: G(te, !0) + G(te + ee - C, !1), rails: [{ x: te + J - 4, y: te, w: 4, h: ee }, { x: te + ee - J, y: te, w: 4, h: ee }], head: 6.4 };
}
function J1(n, i, d) {
  const p = ee * (1 - n);
  let g = "";
  if (p > 1 && (g += zo(te, te, ee, p, ii), !d))
    for (let y = 1; y < 7; y += 2) g += zo(te + ee * y / 7, te, ee / 7, p, "#fff");
  return { body: g, rails: [{ x: te, y: te + ee * (1 - i) - 7, w: ee, h: 11 }], head: 10.4 };
}
function Q1(n, i, d, p) {
  const g = 9 - 7 * (d / 100), y = te + ee * (1 - n), b = Math.ceil(ee / 10) + 1, C = te + g / 2, j = (te + ee - g / 2 - C) / (b - 1), M = 0.8, T = 0.6, q = Array.from({ length: b }, (ot, nt) => Math.max(C + nt * T, Math.min(C + nt * j, y - g / 2 - (b - 1 - nt) * T))), G = q.slice(0, -1).map((ot, nt) => mo((q[nt + 1] - ot - T) / (j - T), 0, 1));
  G.push(G[b - 2]);
  let J = "";
  return q.forEach((ot, nt) => {
    const K = M + (g - M) * G[nt], O = Math.max(0.5, K / 2), it = Math.max(0.4, K * 0.114);
    J += zo(te, ot - O, ee, Math.max(1, K), ii), !p && K > 2.2 && (J += zo(te, ot + O - it, ee, it, Tp) + zo(te, ot - O, ee, it * 0.55, K1, 0.75));
  }), p || [0.22, 0.78].forEach((ot) => {
    J += zo(te + ee * ot - 0.7, te, 1.4, Math.max(0, q[b - 1] + 1 - te), Tp, 0.85);
  }), { body: J, rails: [{ x: te, y: te + ee * (1 - i) - 8, w: ee, h: 8 }], head: 8.8 };
}
const Lp = (n, i, d, p, g, y, b) => n === "curtain" ? X1(i, d, g, y, b) : n === "venetian" ? Q1(i, d, p, b) : J1(i, d, b);
function t0(n, i) {
  let d = "", p = "";
  return i.forEach((g) => {
    const y = g.w > g.h, b = mo(y ? te + ee / 2 : g.x + g.w / 2, 17, 183), C = mo(y ? g.y + g.h / 2 : te + ee / 2, 17, 183);
    d += y ? zo(te, mo(g.y + g.h / 2, te, te + ee) - 1, ee, 2, Kl) : zo(mo(g.x + g.w / 2, te, te + ee) - 1, te, 2, ee, Kl);
    const j = y ? "M" + Me(b - 4) + " " + Me(C - 3) + "l4 -3l4 3M" + Me(b - 4) + " " + Me(C + 3) + "l4 3l4 -3" : "M" + Me(b - 3) + " " + Me(C - 4) + "l-3 4l3 4M" + Me(b + 3) + " " + Me(C - 4) + "l3 4l-3 4";
    p += '<circle cx="' + Me(b) + '" cy="' + Me(C) + '" r="11" fill="' + Kl + '" filter="url(#' + n + 's)"/><path d="' + j + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: d, knobs: p };
}
function e0(n, i) {
  const d = /* @__PURE__ */ new Date(), p = Z1(d.getHours() + d.getMinutes() / 60), g = 42 + 18 * Math.sin(p.t * 0.5), y = p.t >= 5 && p.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (p.t - 5) / 15) : 80, b = Lp(i.kind, i.pos / 100, i.bar / 100, i.tilt, i.vel, i.ph, !1), C = i.ghostAlpha > 4e-3 && i.ghost != null ? Lp(i.kind, i.ghost / 100, i.ghost / 100, i.tilt, 0, 0, !0).body : "", j = i.grip > 4e-3 ? t0(n, b.rails) : null, M = (T) => zo(te, te, ee, ee, T);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + n + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + n + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + p.top + '"/><stop offset="1" stop-color="' + p.bot + '"/></linearGradient><radialGradient id="' + n + 'w" cx="' + Me(g) + '%" cy="' + Me(y) + '%" r="58%"><stop offset="0" stop-color="' + p.warm + '" stop-opacity="' + Me(p.op * 0.8) + '"/><stop offset="1" stop-color="' + p.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + n + 'k" cx="' + Me(100 - g * 0.8) + '%" cy="' + Me(100 - y * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + p.cool + '" stop-opacity="' + Me(p.op * 0.64) + '"/><stop offset="1" stop-color="' + p.cool + '" stop-opacity="0"/></radialGradient><filter id="' + n + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + Ap + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + n + 'c)">' + M("url(#" + n + "l)") + M("url(#" + n + "w)") + M("url(#" + n + "k)") + (C ? '<g opacity="' + Me(i.ghostAlpha) + '">' + C + "</g>" : "") + b.body + '<rect x="14" y="14" width="172" height="' + b.head + '" fill="' + ii + '" filter="url(#' + n + 's)"/></g>' + (j ? '<g clip-path="url(#' + n + 'c)" opacity="' + Me(i.grip) + '">' + j.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + Ap + '" stroke-width="3"/>' + (j ? '<g opacity="' + Me(i.grip) + '">' + j.knobs + "</g>" : "") + "</svg>";
}
function a0({ onMove: n, onSet: i }) {
  var st;
  const d = "cv" + ++Y1, p = document.createElement("div");
  p.className = "tfCoverArt";
  const g = (st = window.matchMedia) == null ? void 0 : st.call(window, "(pointer: coarse)").matches;
  let y = null;
  const b = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let C = 0, j = !1, M = !1, T = null, q = 0, G = 0;
  const J = () => (y == null ? void 0 : y.kind) === "curtain" ? "x" : "y", ot = () => T || j || M || y.moving || y.target != null ? 1 : g ? performance.now() < G ? 1 : 0.4 : 0, nt = () => {
    p.innerHTML = e0(d, { kind: y.kind, pos: b.pos, bar: y.target ?? b.pos, tilt: b.tilt, vel: b.vel, ph: b.ph, ghost: b.gpos, ghostAlpha: b.ghost, grip: b.grip });
  };
  function K(Z) {
    C = 0;
    const Y = b.last ? Math.min(0.064, (Z - b.last) / 1e3) : 1 / 60, H = Y * 60;
    b.last = Z;
    const xt = y.pos - b.pos, Pt = b.pos;
    b.pos += Math.sign(xt) * Math.min(Math.abs(xt), Math.max(10.5, Math.abs(xt) * 1.4) * Y), Math.abs(y.pos - b.pos) < 0.03 && (b.pos = y.pos), b.vel = b.vel * 0.86 + (b.pos - Pt) / H * 0.14, Math.abs(b.vel) < 0.015 && b.pos === y.pos && (b.vel = 0), (b.pos !== Pt || b.vel) && (b.ph += (0.06 + Math.abs(b.vel) * 0.03) * H);
    const ct = y.tilt - b.tilt;
    b.tilt += Math.sign(ct) * Math.min(Math.abs(ct), Math.max(60, Math.abs(ct) * 4) * Y);
    const U = ot();
    b.grip += (U - b.grip) * Math.min(1, Y * (U > b.grip ? 11 : 3.5)), Math.abs(U - b.grip) < 0.01 && (b.grip = U);
    const It = y.target != null && Math.abs(y.target - b.pos) > 0.5 ? 0.22 : 0;
    y.target != null && (b.gpos = y.target), b.ghost += (It - b.ghost) * Math.min(1, Y * (It > b.ghost ? 16 : 3)), Math.abs(It - b.ghost) < 4e-3 && (b.ghost = It), nt(), b.pos !== y.pos || b.vel || b.tilt !== y.tilt || b.grip !== U || b.ghost !== It ? C = requestAnimationFrame(K) : b.last = 0;
  }
  const O = () => {
    y && !C && (C = requestAnimationFrame(K));
  }, it = setInterval(() => {
    y && !C && nt();
  }, 60 * 1e3), dt = (Z) => {
    const Y = p.getBoundingClientRect();
    return J() === "x" ? (Z.clientX - Y.left) / Y.width : (Z.clientY - Y.top) / Y.height;
  };
  p.addEventListener("pointerdown", (Z) => {
    var xt;
    if (!(y != null && y.canSet) || Z.button > 0) return;
    Z.preventDefault(), (xt = p.setPointerCapture) == null || xt.call(p, Z.pointerId);
    const Y = y.target ?? y.pos, H = p.getBoundingClientRect();
    T = { p0: dt(Z), from: Y, x0: Z.clientX, value: null, side: null }, y.kind === "curtain" && Y > 0 && (T.side = (Z.clientX - H.left) / H.width < 0.5 ? "L" : "R"), O();
  }), p.addEventListener("pointermove", (Z) => {
    if (!T) return;
    let Y;
    if (y.kind === "curtain") {
      if (!T.side) {
        const xt = Z.clientX - T.x0;
        if (Math.abs(xt) < 4) return;
        T.side = xt < 0 ? "L" : "R";
      }
      const H = (ee / 2 - ee * 0.12) / 200;
      Y = T.from + (T.side === "L" ? -1 : 1) * ((dt(Z) - T.p0) / H) * 100;
    } else Y = T.from - (dt(Z) - T.p0) / (ee / 200) * 100;
    T.value = mo(Y, 0, 100), n(T.value);
  });
  const wt = () => {
    if (!T) return;
    const Z = T.value;
    T = null, Z != null && i(Math.round(Z)), O();
  };
  return p.addEventListener("pointerup", wt), p.addEventListener("pointercancel", wt), p.addEventListener("lostpointercapture", wt), p.addEventListener("pointerenter", () => {
    j = !0, O();
  }), p.addEventListener("pointerleave", () => {
    j = !1, O();
  }), p.addEventListener("focus", () => {
    M = p.matches(":focus-visible"), O();
  }), p.addEventListener("blur", () => {
    M = !1, O();
  }), p.addEventListener("keydown", (Z) => {
    if (!(y != null && y.canSet)) return;
    const Y = Math.round(y.target ?? y.pos), H = Z.shiftKey ? 10 : 1, xt = { ArrowUp: Y + H, ArrowRight: Y + H, ArrowDown: Y - H, ArrowLeft: Y - H, PageUp: Y + 25, PageDown: Y - 25, Home: 0, End: 100 }[Z.key];
    if (xt == null) return;
    Z.preventDefault();
    const Pt = mo(xt, 0, 100);
    n(Pt), clearTimeout(q), q = setTimeout(() => i(Pt), 500);
  }), {
    el: p,
    update(Z) {
      const Y = !y;
      y = Z, Y && (b.pos = y.pos, b.tilt = y.tilt, G = performance.now() + 1500, g && setTimeout(O, 1600)), p.classList.toggle("x", J() === "x"), p.classList.toggle("y", J() === "y"), y.canSet ? (p.tabIndex = 0, p.setAttribute("role", "slider"), p.setAttribute("aria-valuemin", "0"), p.setAttribute("aria-valuemax", "100"), p.setAttribute("aria-valuenow", String(Math.round(y.target ?? y.pos))), p.setAttribute("aria-orientation", J() === "x" ? "horizontal" : "vertical")) : p.setAttribute("role", "img"), p.setAttribute("aria-label", y.name + (y.canSet ? " position" : "")), p.setAttribute("aria-valuetext", y.text), O();
    },
    destroy() {
      cancelAnimationFrame(C), C = 0, clearInterval(it), clearTimeout(q), p.remove();
    }
  };
}
const Dp = "homecore-density", uo = {
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
}, W = (n) => String(n ?? "").replace(/[&<>"']/g, (i) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[i]), Ep = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', Ql = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', Bp = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', rs = {
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h2v12H6zM9.5 12L18 18V6z"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>'
}, Rp = {
  down: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 11h14v2H5z"/></svg>',
  up: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z"/></svg>'
}, Pp = 1, o0 = 4, Hp = 16, Np = 32, n0 = 128, r0 = 256, Op = 16384, Ip = 1, Fp = 2, tc = 4, qp = 8, i0 = {
  open: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/></svg>',
  stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5" fill="currentColor"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l5 5-5 5"/><path d="M21 7l-5 5 5 5"/></svg>'
}, Wp = { curtain: ["mdi:curtains", "mdi:curtains-closed"], blind: ["mdi:roller-shade", "mdi:roller-shade-closed"], venetian: ["mdi:blinds-horizontal", "mdi:blinds-horizontal-closed"] }, s0 = { curtain: "curtains", blind: "blind", venetian: "blinds" }, ei = {
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
}, Vp = ["covers", "people", "openings", "leaks", "vacuum"], jp = "homecore_house", zp = "homecore-house-used", ai = ["switch", "fan", "input_boolean", "automation"], Gp = "homecore-house-look", l0 = [["look", "Look"], ["house", "House page"], ["weather", "Weather"]], c0 = [["popup", "Popup"], ["sheet", "Sheet"]], d0 = [["auto", "Automatic"], ["cut", "Cut short"], ["wrap", "Two lines"], ["scroll", "Scroll"]], p0 = [["day", "Daytime 06–22"], ["waking", "Waking 07–23"], ["all", "All day"]], u0 = [["bitmap", "Pixel"], ["onebit", "1-bit"], ["smooth", "Smooth"], ["line", "Line"]], oi = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', f0 = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', h0 = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>', Up = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"/></svg>', ec = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>', ua = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 13C6.14 13 4.59 14.28 4.14 16H2V18H4.14C4.59 19.72 6.14 21 8 21S11.41 19.72 11.86 18H22V16H11.86C11.41 14.28 9.86 13 8 13M8 19C6.9 19 6 18.1 6 17C6 15.9 6.9 15 8 15S10 15.9 10 17C10 18.1 9.1 19 8 19M19.86 6C19.41 4.28 17.86 3 16 3S12.59 4.28 12.14 6H2V8H12.14C12.59 9.72 14.14 11 16 11S19.41 9.72 19.86 8H22V6H19.86M16 9C14.9 9 14 8.1 14 7C14 5.9 14.9 5 16 5S18 5.9 18 7C18 8.1 17.1 9 16 9Z"/></svg>', ac = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"/></svg>', is = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/></svg>', oc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', Ou = (n) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + n.map((i) => '<path d="' + i + '"/>').join("") + "</svg>", ss = Ou(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), Yp = Ou(["M20 6L9 17L4 12"]), fo = (n, i = "") => '<span class="tfAreaGlyph" data-icon-for="' + W(n || "") + '"' + (i ? ' data-icon-name="' + W(i) + '"' : "") + "></span>", m0 = (n) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (n ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', Zp = 1, $p = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], Kp = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, ls = ["door", "window", "garage_door", "opening"], Xp = { moisture: ["detected water", "dry"], smoke: ["detected smoke", "clear"], gas: ["detected gas", "clear"], carbon_monoxide: ["detected carbon monoxide", "clear"], safety: ["became unsafe", "safe"] }, fr = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve", "water_heater"], g0 = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], b0 = 10, w0 = 20, v0 = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, y0 = ["living room", "bedroom", "office"];
function x0(n, { config: i, getHass: d }) {
  var Od, Id, Fd;
  const p = (t) => n.getElementById(t), g = p("app"), y = i || {}, b = String(y.layout || "").toLowerCase().replace("_", "-") === "test-focus", C = String(y.page || "").toLowerCase() === "overview";
  let j = uo.get(Dp) === "1", M = {};
  const T = (t) => {
    var e;
    return (e = d()) == null ? void 0 : e.callWS(t);
  }, q = (t, e, a) => T({ type: "call_service", domain: t, service: e, service_data: a }), G = n.querySelector("#appearancePane .toggleList");
  G && !p("densityToggle") && (G.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), p("densityToggle").addEventListener("click", () => {
    j = !j, uo.set(Dp, j ? "1" : "0"), Y();
  }));
  const J = [
    ["weather", "Weather", "The forecast under Home.", (t) => t.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (t) => t.startsWith("sensor.") && qt(t).device_class === "power" && /^(W|kW)$/.test(qt(t).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm in the Security popup.", (t) => t.startsWith("alarm_control_panel.")]
  ], ot = (t, e, a, o) => '<div class="themeChoice" id="' + t + '" role="group" aria-label="' + e + '">' + o.map(([r, l]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + a + '="' + r + '">' + l + "</button>").join("") + "</div>", nt = (t, e, a, o) => '<div class="toggleRow"' + (o ? ' id="' + o + '"' : "") + "><div><strong>" + t + "</strong>" + (e ? '<div class="status">' + e + "</div>" : "") + "</div>" + a + "</div>";
  function K() {
    var P, D;
    if (!b || p("housePane")) return;
    const t = p("settingsView");
    t.querySelector(".settingsTitle").textContent = "HomeCore settings";
    const e = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], a = (B, k) => '<div class="houseTab' + (B === "look" ? " active" : "") + '" data-house-pane="' + B + '"><section class="card">' + k + "</section></div>";
    t.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + e.map(([B, k]) => '<button class="tab segBtn' + (B === "look" ? " active" : "") + '" type="button" data-house-tab="' + B + '">' + k + "</button>").join("") + "</div>" + // Appearance in groups (Matt, 8 Nov), each one's title inside its card as a card header (Matt, 9 Nov)
    a("look", l0.map(([B, k]) => '<div class="tfSetGroup"><div class="toggleList" data-look-group="' + B + '"><div class="tfCardTitle">' + k + "</div></div></div>").join("")) + // Lights as cards by default, with a Cards | Table choice (Matt, 9 Nov)
    a("lights", '<div class="tfLightView"><div class="themeChoice" role="group" aria-label="Show lights as"><button class="wxLayoutBtn" type="button" data-light-view="cards">Cards</button><button class="wxLayoutBtn" type="button" data-light-view="table">Table</button></div></div><p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div><div class="tfLightCards" id="lightCards"></div>') + a("sources", '<div class="toggleList">' + J.map(([B, k, N]) => nt(k, N, '<select class="settingsSelect" data-source="' + B + '" aria-label="' + k + '"></select>')).join("") + "</div>") + a("sums", '<div class="toggleList">' + Object.entries(ei).map(([B, k]) => nt(k.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + B + '" aria-label="' + k.name + ' summary"></button>')).join("") + "</div>") + "</div>");
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
    }), new ResizeObserver(() => it()).observe(c), (D = (P = document.fonts) == null ? void 0 : P.ready) == null || D.then(() => it());
    const x = (B) => {
      const k = u.querySelector(".tab.active");
      f.style.transition = "none", B ? us(f, f.offsetLeft, f.offsetWidth, k.offsetLeft, k.offsetWidth) : (f.style.left = k.offsetLeft + "px", f.style.width = k.offsetWidth + "px");
    };
    new ResizeObserver(() => x(!1)).observe(u), c.addEventListener("click", (B) => {
      const k = B.target.closest("[data-house-tab]");
      if (k) {
        u.querySelectorAll(".tab").forEach((_) => _.classList.toggle("active", _ === k)), c.querySelectorAll(".houseTab").forEach((_) => _.classList.toggle("active", _.dataset.housePane === k.dataset.houseTab)), k.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), x(!0), it();
        return;
      }
      const N = B.target.closest("[data-light-fav]");
      if (N) {
        fc(N.dataset.lightFav);
        return;
      }
      const E = B.target.closest("[data-light-pick]");
      if (E) {
        const [_, at] = E.dataset.lightPick.split("|"), St = { ...$t[_] };
        E.dataset.v ? St[at] = E.dataset.v : delete St[at], $t[_] = St, go(), [...sa.keys()].filter((Rt) => Rt.endsWith(":" + at)).forEach((Rt) => sa.delete(Rt)), Ua();
        return;
      }
      const R = B.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!R || R.disabled)) {
        if (R.dataset.lights && ($t.lights = R.dataset.lights), R.dataset.dacPad && ($t.dacPad = R.dataset.dacPad), (R.dataset.lights || R.dataset.dacPad) && (go(), sa.clear()), R.dataset.sumToggle) {
          const _ = R.dataset.sumToggle, at = new Set(et.hiddenSums || []);
          at.has(_) ? at.delete(_) : at.add(_), et = { ...et, hiddenSums: [...at] }, Aa();
        }
        Ua();
      }
    }), c.addEventListener("change", (B) => {
      const k = B.target;
      k.dataset.source && (et = { ...et, sources: { ...et.sources || {}, [k.dataset.source]: k.value || void 0 } }, Aa());
      const N = k.dataset.lightStyle || k.dataset.lightPad;
      if (N) {
        const E = k.dataset.lightStyle ? "lightStyles" : "lightPads", R = { ...$t[E] };
        k.value ? R[N] = k.value : delete R[N], $t[E] = R, go(), [...sa.keys()].filter((_) => _.endsWith(":" + N)).forEach((_) => sa.delete(_));
      }
      Ua();
    });
  }
  function O() {
    var x, P;
    oo() && $n();
    const t = p("housePane");
    if (!t) return;
    const e = !!customElements.get(eo);
    t.querySelectorAll("[data-lights]").forEach((D) => D.setAttribute("aria-pressed", String(D.dataset.lights === $t.lights))), p("lightsRow").querySelector(".status").textContent = e || !oo() ? "How lights show on the house page." : ia === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", t.querySelectorAll("[data-dac-pad]").forEach((D) => D.setAttribute("aria-pressed", String(D.dataset.dacPad === $t.dacPad))), p("dacPadRow").hidden = !oo();
    for (const D of t.querySelectorAll("[data-source]")) {
      if (D === n.activeElement) continue;
      const [B] = J.find(([N]) => N === D.dataset.source), k = Object.keys(M).filter(J.find(([N]) => N === B)[3]).sort((N, E) => bt(N).localeCompare(bt(E)));
      D.dataset.sig !== k.join(",") && (D.innerHTML = '<option value="">Automatic</option>' + k.map((N) => '<option value="' + W(N) + '">' + W(bt(N)) + "</option>").join(""), D.dataset.sig = k.join(",")), D.value = k.includes((x = et.sources) == null ? void 0 : x[B]) ? et.sources[B] : "";
    }
    t.querySelectorAll("[data-sum-toggle]").forEach((D) => {
      const B = !(et.hiddenSums || []).includes(D.dataset.sumToggle);
      D.classList.toggle("on", B), D.setAttribute("aria-checked", String(B));
    });
    const a = p("lightRows"), o = p("lightCards"), r = n.activeElement, l = a != null && a.contains(r) || o != null && o.contains(r) ? r : null;
    if (!a || l != null && l.matches("select")) {
      it();
      return;
    }
    const c = new Set(Bt()), u = (D, B, k, N) => '<option value="' + D + '"' + (D === k ? " selected" : "") + ">" + B + "</option>", f = Object.keys(M).filter((D) => D.startsWith("light.")).sort((D, B) => !xe.get(D) - !xe.get(B) || (xe.get(D) || "").localeCompare(xe.get(B) || "") || bt(D).localeCompare(bt(B))).map((D) => {
      const B = $t.lightStyles[D] || "", k = $t.lightPads[D] || "", N = c.has(D), E = W(bt(D));
      return "<tr><td><strong>" + E + "</strong></td><td>" + W(xe.get(D) || "—") + "</td><td>" + W(Oe(D)) + '</td><td class="metaSwitchCol"><button class="switch' + (N ? " on" : "") + '" type="button" role="switch" aria-checked="' + N + '" data-light-fav="' + W(D) + '" aria-label="' + E + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + W(D) + '" aria-label="' + E + ' tile">' + u("", "Default", B) + u("tile", "HomeCore tile", B) + u("dac", "Dual Axis Controller", B) + '</select></td><td><select class="settingsSelect" data-light-pad="' + W(D) + '" aria-label="' + E + ' pad"' + (wn(D) ? "" : " disabled") + ">" + u("", "Default", k) + u("temperature", "Temperature", k) + u("colour", "Colour", k) + "</select></td></tr>";
    }).join(""), v = (D, B, k, N, E) => '<div class="themeChoice" role="group" aria-label="' + k + '">' + N.map(([R, _]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (R === E) + '" data-light-pick="' + D + "|" + W(B) + '" data-v="' + R + '">' + _ + "</button>").join("") + "</div>", S = Object.keys(M).filter((D) => D.startsWith("light.")).sort((D, B) => !xe.get(D) - !xe.get(B) || (xe.get(D) || "").localeCompare(xe.get(B) || "") || bt(D).localeCompare(bt(B))).map((D) => {
      const B = c.has(D), k = W(bt(D)), N = [xe.get(D), Oe(D)].filter(Boolean).map(W).join(" · ");
      return '<div class="toggleList"><div class="toggleRow"><div><strong>' + k + '</strong><div class="status">' + N + "</div></div></div>" + nt("Favourite", "", '<button class="switch' + (B ? " on" : "") + '" type="button" role="switch" aria-checked="' + B + '" data-light-fav="' + W(D) + '" aria-label="' + k + ' is a favourite"></button>') + nt("Tile", "", v("lightStyles", D, k + " tile", [["", "Default"], ["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]], $t.lightStyles[D] || "")) + (wn(D) ? nt("Pad", "", v("lightPads", D, k + " pad", [["", "Default"], ["temperature", "Temperature"], ["colour", "Colour"]], $t.lightPads[D] || "")) : "") + "</div>";
    }).join("");
    a.dataset.html !== f && (a.innerHTML = f, a.dataset.html = f), o.dataset.html !== S && (o.innerHTML = S, o.dataset.html = S), l != null && l.dataset.lightFav && ((P = (o.contains(l) ? o : a).querySelector('[data-light-fav="' + CSS.escape(l.dataset.lightFav) + '"]')) == null || P.focus({ preventScroll: !0 })), it();
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
            c.innerHTML = l.map((P, D) => '<option value="' + D + '"' + (P.disabled ? " disabled" : "") + ">" + W(P.textContent) + "</option>").join("");
            const x = l.findIndex((P) => P.getAttribute("aria-pressed") === "true" || P.classList.contains("active"));
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
    if (!j) return;
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
    j && requestAnimationFrame(st);
  };
  function Y() {
    var t;
    g.classList.toggle("showDensity", j), (t = p("densityToggle")) == null || t.classList.toggle("on", j), dt.hidden = !j, clearInterval(wt), j && (wt = setInterval(st, 1e3), st());
  }
  window.addEventListener("scroll", Z, { capture: !0, passive: !0 }), window.addEventListener("resize", Z, { passive: !0 });
  const H = n.querySelector("#homeView .grid"), xt = document.createElement("style");
  n.appendChild(xt);
  const Pt = new ResizeObserver(() => It()), ct = /* @__PURE__ */ new Set(), U = (t) => {
    const e = t.getBoundingClientRect().height;
    return Math.abs(e - t.offsetHeight) < 1 ? e : t.offsetHeight;
  };
  function It() {
    const t = g.classList.contains("tfAreaOpen") && !g.classList.contains("tfWeatherOpen");
    if (H.classList.toggle("tfStack", t), ct.forEach((f) => {
      (!t || !f.isConnected) && (Pt.unobserve(f), ct.delete(f));
    }), !t) {
      xt.textContent = "";
      return;
    }
    const e = getComputedStyle(H), a = parseFloat(e.columnGap) || 0, o = e.gridTemplateColumns.split(" ").length, r = [...H.children].filter((f) => f.dataset.k && f.offsetParent);
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
  new MutationObserver(It).observe(H, { childList: !0 }), new MutationObserver(It).observe(g, { attributes: !0, attributeFilter: ["class"] });
  let V = null, Q = null, A = null;
  const ft = /* @__PURE__ */ new Map(), rt = /* @__PURE__ */ new Map(), lt = /* @__PURE__ */ new Map(), vt = /* @__PURE__ */ new Set(), ht = /* @__PURE__ */ new Map(), _t = (t) => ht.set(t, (ht.get(t) || 0) + 1), Vt = () => [.../* @__PURE__ */ new Set([...lt.keys(), ...vt])];
  let ae = !1, Ke = 0;
  const _a = 6;
  let Xa = null;
  const Ca = /* @__PURE__ */ new Map(), na = /* @__PURE__ */ new Map(), nn = /* @__PURE__ */ new Map();
  let et = { favourites: null }, ye = {}, Ja = {}, wr = [], qa = null;
  const rn = (() => {
    try {
      return JSON.parse(uo.get(zp)) || {};
    } catch {
      return {};
    }
  })();
  let xe = /* @__PURE__ */ new Map(), si = 0;
  function Aa() {
    clearTimeout(si), si = setTimeout(() => Promise.resolve(T({ type: "frontend/set_user_data", key: jp, value: et })).catch(() => {
    }), 400);
  }
  const $t = (() => {
    let t = {};
    try {
      t = JSON.parse(uo.get(Gp)) || {};
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
  })(), go = () => uo.set(Gp, JSON.stringify($t)), vr = () => {
    g.dataset.more = $t.more, g.dataset.names = $t.names, bl();
  };
  b && G && !p("moreInfoChoice") && (p("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + c0.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + ($t.more === t) + '" data-more-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), p("moreInfoChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-more-style]");
    e && ($t.more = e.dataset.moreStyle, go(), vr(), p("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  }), p("moreInfoChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Long names</strong><div class="status">How a name or state too long for its space shows.</div></div><div class="themeChoice" id="namesChoice" role="group" aria-label="Long names">' + d0.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + ($t.names === t) + '" data-names-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), p("namesChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-names-style]");
    e && ($t.names = e.dataset.namesStyle, $t.namesPicked = !0, go(), vr(), p("namesChoice").querySelectorAll("[data-names-style]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  }), p("namesChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Next hours</strong><div class="status">The hours each day shows on the Weather page.</div></div><div class="themeChoice" id="hoursChoice" role="group" aria-label="Next hours">' + p0.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + ($t.hoursWindow === t) + '" data-hours-window="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), p("hoursChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-hours-window]");
    e && ($t.hoursWindow = e.dataset.hoursWindow, go(), Ae == null || Ae.refresh(), p("hoursChoice").querySelectorAll("[data-hours-window]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  }), p("hoursChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Weather art</strong><div class="status">How the weather and the sky are drawn.</div></div><div class="themeChoice" id="wxStyleChoice" role="group" aria-label="Weather art">' + u0.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + ($t.wxStyle === t) + '" data-wx-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
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
    ga.isConnected || H.append(ga), ga.style.order = t, !Ae && !sn && (Ae = Cp(ga, { getHass: d, entityId: e, style: $t.wxStyle, hoursWindow: () => $t.hoursWindow, radarSource: Mr }), di = e);
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
    ke && xr !== e && (ke.forEach((a) => a.destroy()), ke = null), Object.values(Qa).forEach((a) => e ? !a.isConnected && H.append(a) : a.remove()), e && !ke && !sn && (ke = /* @__PURE__ */ new Map(), xr = e), kr();
  }
  const Mr = () => {
    var t;
    return ((t = re().opts.radar) == null ? void 0 : t.source) || "rainviewer";
  }, vs = () => [["rainviewer", "RainViewer"], ...Object.values(M).filter((t) => t.entity_id.startsWith("camera.")).sort((t, e) => bt(t.entity_id).localeCompare(bt(e.entity_id))).map((t) => ["camera:" + t.entity_id, bt(t.entity_id)])];
  function kr() {
    if (!ke || sn) return;
    const t = new Set(re().hidden);
    yr.forEach(([e, a]) => {
      ke.has(e) || t.has(e) && !(Qt != null && Qt.fromTray && Qt.key === e) || ke.set(e, Cp(Qa[e], { getHass: d, entityId: xr, style: $t.wxStyle, cards: a, onOpen: e === "wx" ? () => fd("weather") : void 0, radarSource: Mr }));
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
    const [o, r, l] = t.map((B) => B / 255), c = Math.max(o, r, l), u = Math.min(o, r, l), f = c - u, v = f ? (c === o ? (r - l) / f + (r < l ? 6 : 0) : c === r ? (l - o) / f + 2 : (o - r) / f + 4) * 60 : 0, S = (c + u) / 2, x = f ? f / (1 - Math.abs(2 * S - 1)) : 0, P = f < 0.1 ? Math.min(x, 0.25) : 1, D = (B) => {
      const k = (E) => (E + v / 30) % 12, N = P * Math.min(B, 1 - B);
      return [0, 8, 4].map((E) => Math.round(255 * (B - N * Math.max(-1, Math.min(k(E) - 3, 9 - k(E), 1)))));
    };
    for (let B = 0.5; a ? B < 0.96 : B > 0.04; B += a ? 0.01 : -0.01) {
      const k = D(B);
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
    return Ye("pos", t, ((e = Ca.get(t)) == null ? void 0 : e.pos) ?? Wa(t));
  }, Lr = (t) => {
    var e;
    return Ye("tilt", t, ((e = Ca.get(t)) == null ? void 0 : e.tilt) ?? qt(t).current_tilt_position);
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
    if (o === "alarm_control_panel") return Kp[e.state] || jt(e.state);
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
  function Ta(t) {
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
    var D, B, k, N, E, R, _;
    const e = t.localName === "svg" ? t : yi(t), a = e ? [...e.querySelectorAll("path,rect,circle,ellipse,polygon,polyline,line")].filter((at) => !at.closest("defs,mask")) : [];
    if (!a.length) return !e;
    const o = (D = t.closest(".tfIcon")) == null ? void 0 : D.offsetWidth;
    if (o === void 0) return !0;
    if (!o) return !1;
    const r = o + "|" + a.map((at) => at.getAttribute("d") || at.localName).join("|");
    if (t.dataset.fitted === r) return !0;
    let l = 1 / 0, c = 1 / 0, u = -1 / 0, f = -1 / 0;
    for (const at of a) {
      const St = at.getBBox(), Rt = getComputedStyle(at), Wt = Rt.stroke !== "none" ? (parseFloat(Rt.strokeWidth) || 0) / 2 : 0;
      if (!St.width && !St.height) continue;
      const Ft = (E = (N = (k = (B = at.transform) == null ? void 0 : B.baseVal) == null ? void 0 : k.consolidate) == null ? void 0 : N.call(k)) == null ? void 0 : E.matrix, kt = Ft ? (() => {
        const Tt = [[St.x, St.y], [St.x + St.width, St.y], [St.x, St.y + St.height], [St.x + St.width, St.y + St.height]].map(([ge, Re]) => [Ft.a * ge + Ft.c * Re + Ft.e, Ft.b * ge + Ft.d * Re + Ft.f]), ue = Tt.map((ge) => ge[0]), me = Tt.map((ge) => ge[1]);
        return { x: Math.min(...ue), y: Math.min(...me), width: Math.max(...ue) - Math.min(...ue), height: Math.max(...me) - Math.min(...me) };
      })() : St;
      l = Math.min(l, kt.x - Wt), c = Math.min(c, kt.y - Wt), u = Math.max(u, kt.x + kt.width + Wt), f = Math.max(f, kt.y + kt.height + Wt);
    }
    if (!(u > l)) return !1;
    const v = (_ = (R = e.viewBox) == null ? void 0 : R.baseVal) != null && _.width ? e.viewBox.baseVal : { x: 0, y: 0, width: 24, height: 24 }, S = o > 40 ? o * (26 / 40) : o - 14, x = S * v.width / Math.max(u - l, f - c), P = x / v.width;
    return t.localName === "svg" ? (t.style.width = x + "px", t.style.height = x + "px") : t.style.setProperty("--mdc-icon-size", x + "px"), e.style.translate = ((v.x + v.width / 2 - (l + u) / 2) * P).toFixed(2) + "px " + ((v.y + v.height / 2 - (c + f) / 2) * P).toFixed(2) + "px", t.dataset.fitted = r, !0;
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
  }, fe = (t, e, a) => (e = e || Mi(t), ' data-icon-for="' + W(t) + '"' + (e ? ' data-icon-name="' + W(e) + '"' : "") + (a ? ' data-letter="' + W(a) + '"' : "")), Je = (t) => t.endsWith("_solar_power") ? "mdi:solar-power-variant" : qt(t).rang ? "mdi:doorbell" : "", Dt = (t, e, a, o) => W([t, e, a, o ? JSON.stringify(o) : ""].join("|")), wa = (t) => W(JSON.stringify(t));
  function Yo(t) {
    const e = W(bt(t) + ", " + Oe(t));
    return '<div class="activityRow tap" role="button" tabindex="0" data-more="' + W(t) + '" aria-label="' + e + '. More info"><div class="tfIcon" aria-hidden="true"' + fe(t, Je(t)) + '></div><div><div class="activityRowName">' + W(bt(t)) + '</div><div class="activityRowMeta">' + W(Oe(t)) + "</div></div></div>";
  }
  const zn = (t, e, a) => '<div class="activityRow" aria-label="' + W(t + ", " + e) + '"><div class="tfIcon" aria-hidden="true"' + fe("", a, t) + '></div><div><div class="activityRowName">' + W(t) + '</div><div class="activityRowMeta">' + W(e) + "</div></div></div>";
  function un(t, e, a, o, r = "", l = null, c = "") {
    return '<section class="card tfCard' + (c ? " " + c : "") + '" data-tf data-k="' + W(t) + '" style="order:' + e + '" aria-label="' + W(a) + '"><div class="activityHeader">' + (l ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + W(l) + '" aria-label="' + W(a + (M[l] ? ", " + Oe(l) : "") + ". More info") + '">' + W(a) + "</button>" : '<div class="activityTitle">' + W(a) + "</div>") + '</div><div class="activityRows">' + o.join("") + "</div>" + r + "</section>";
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
    return '<div class="tfBar ' + t + '" role="slider" tabindex="0" aria-label="' + W(o) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + f + '"' + (r ? ' aria-valuetext="' + W(r) + '"' : "") + ' data-drag="' + W(t + "|" + e) + '">' + (c != null ? '<span class="was" aria-hidden="true" style="left:' + c + '%"></span>' : "") + (l ? u == null ? "" : '<b style="left:' + f + '%"></b>' : '<i style="width:' + f + '%"></i>') + "</div>";
  }
  const Gn = "homecore-house-last-bright", va = (() => {
    try {
      return JSON.parse(uo.get(Gn)) || {};
    } catch {
      return {};
    }
  })();
  let Hr = 0;
  const ki = (t, e) => {
    !e || va[t] === e || (va[t] = e, clearTimeout(Hr), Hr = setTimeout(() => uo.set(Gn, JSON.stringify(va)), 500));
  }, ra = (t, e, a, o) => '<div class="tfStep" role="group" aria-label="' + W(t) + '"><button type="button" data-act="' + a + '" aria-label="Lower ' + W(t.toLowerCase()) + '">' + Rp.down + "</button><output>" + W(e) + '</output><button type="button" data-act="' + o + '" aria-label="Raise ' + W(t.toLowerCase()) + '">' + Rp.up + "</button></div>", ya = (t, e, a) => '<div class="' + t + '" role="group" aria-label="' + W(e) + '">' + a.filter(Boolean).map((o) => '<button type="button" data-act="' + o.act + '"' + (o.pressed != null ? ' aria-pressed="' + o.pressed + '"' : "") + (o.disabled ? " disabled" : "") + (o.aria ? ' aria-label="' + W(o.aria) + '"' : "") + ">" + (o.html || W(o.label)) + "</button>").join("") + "</div>", Un = (t, e) => "width:" + Math.round(Math.max(0, Math.min(1, (t - e * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * e / 3).toFixed(2), mn = (t) => "left:calc(4px + " + t / 100 + " * (100% - 8px))", gn = (t, e) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + W(bt(t)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(e) + '" aria-valuetext="' + Math.round(e) + '% open" data-blocks="' + W(t) + '">' + [0, 1, 2, 3].map((a) => '<span><i style="' + Un(e, a) + '"></i><b' + (e >= (a + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (a + 1) * 25 + "<small>%</small></b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + mn(e) + '">' + Math.round(e) + "%</output></div>";
  function xo(t, e) {
    t.querySelectorAll(":scope>span").forEach((o, r) => {
      o.firstElementChild.setAttribute("style", Un(e, r)), o.lastElementChild.classList.toggle("lit", e >= (r + 1) * 25 - 12);
    });
    const a = t.querySelector(".tfTip");
    a.setAttribute("style", mn(e)), a.textContent = Math.round(e) + "%", t.setAttribute("aria-valuenow", String(Math.round(e))), t.setAttribute("aria-valuetext", Math.round(e) + "% open");
  }
  const Si = (t, e) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + W(bt(t)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(e) + '" aria-valuetext="' + Math.round(e) + '% open" data-drag="tilt|' + W(t) + '"><i style="width:calc((100% - 8px) * ' + e / 100 + ')"></i><span' + (e > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (e > 92 ? ' class="lit"' : "") + ">Open</span></div>", _i = (t, e, a) => '<div class="tfSeg tfCoverBtns" role="group" aria-label="' + W(bt(t)) + '">' + [
    he(t, Ip) && ["open", "Open", "open_cover", e >= 100 && !a],
    he(t, qp) && ["stop", "Stop", "stop_cover", !1],
    he(t, Fp) && ["close", "Close", "close_cover", e <= 0 && !a]
  ].filter(Boolean).map(([o, r, l, c]) => '<button type="button" data-act="' + Dt("cover", l, t) + '" aria-label="' + r + '"' + (c ? " disabled" : "") + ">" + i0[o] + "</button>").join("") + "</div>", bn = (t, e) => '<button class="tfIcon' + (e.art ? " art" : "") + '" type="button" data-act="' + e.button.act + '" aria-label="' + W(e.button.label) + '"' + (e.art ? ' style="background-image:url(&quot;' + W(e.art) + '&quot;)"' : fe(t, e.icon)) + "></button>", Yn = (t) => '<button class="tfName" type="button" data-more="' + W(t) + '" aria-label="' + W(bt(t) + ", " + Oe(t) + ". More info") + '"><span class="activityRowName">' + W(bt(t)) + '</span><span class="activityRowMeta">' + W(Oe(t)) + "</span></button>";
  function Zn(t, e = !1, a = null) {
    const o = ro(t), r = t.startsWith("light.") && Va(t) && !(a && Mn(t) < 3), l = a || (e && t.startsWith("light.") ? ["bright"] : null), c = r ? ['<div class="tfDacPad" data-dac="' + (e ? "more:" : a ? "dash:" : "tile:") + W(t) + '"></div>'] : o.sections.map((u, f) => u && (!l || l.includes((o.parts || [])[f])) ? u : "").filter(Boolean);
    return '<div class="tfAction' + (r ? " tfDac" : "") + (o.on ? " on" : "") + (!r && !c.length ? " tfHeadOnly" : "") + '" data-k="' + W(t) + '"' + (o.tone ? ' data-tone="' + o.tone + '"' : "") + wo(t) + '><div class="tfActionHead">' + bn(t, o) + Yn(t) + "</div>" + c.join("") + "</div>";
  }
  const eo = "dual-controller-v3", ao = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.5/dist/dual-axis-controller-v4.js";
  let ia = null;
  async function $n() {
    if (ia || customElements.get(eo)) return;
    ia = "loading";
    const t = await Promise.resolve().then(() => T({ type: "lovelace/resources" })).catch(() => null), e = Array.isArray(t) && t.some((o) => /dual-axis-controller/i.test(o.url || ""));
    if (await Promise.race([customElements.whenDefined(eo), new Promise((o) => setTimeout(o, e ? 8e3 : 0))]), customElements.get(eo)) return;
    const a = Object.assign(document.createElement("script"), { src: ao });
    a.onerror = () => {
      ia = "failed", O();
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
      callService: (e, a, o, ...r) => t.callService(e, ...Rd(e, a, o), ...r)
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
    b && (H != null && H.querySelector("[data-tf]")) && md(Ua);
  });
  const Ye = (t, e, a) => lt.has(t + "|" + e) ? lt.get(t + "|" + e) : a;
  function ro(t) {
    var l, c;
    const e = M[t], a = e.attributes, o = t.split(".")[0], r = (u, f) => ({ act: Dt(u, "toggle", t), label: f });
    if (o === "light") {
      const u = e.state === "on", f = Sr(t), [v, S] = Vn(t), x = Ye("bright", t, bo(e));
      u && ki(t, bo(e));
      const P = Ye("ct", t, u && a.color_mode === "color_temp" ? a.color_temp_kelvin : null), D = Ye("hue", t, u && Uo.includes(a.color_mode) && a.hs_color ? a.hs_color[0] : null);
      return { on: u, button: r("light", "Turn " + bt(t) + (u ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        vo(t) && hn("bright", t, x / 100, bt(t) + " brightness", x + "%", !1, u ? null : va[t] ?? null),
        f.includes("color_temp") && hn("ct", t, P == null ? null : (P - v) / (S - v), bt(t) + " warm to cool", P == null ? "" : Math.round(P) + " kelvin", !0),
        f.some((B) => Uo.includes(B)) && hn("hue", t, D == null ? null : D / 360, bt(t) + " colour", "", !0)
      ] };
    }
    if (o === "climate") {
      const u = a.target_temp_step || 0.5, f = Number(a.temperature);
      return { on: e.state !== "off", tone: e.state === "cool" || a.hvac_action === "cooling" ? "cool" : "heat", button: r("climate", "Turn " + bt(t) + (e.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(f) && ra("Target temperature", He(f) + " °C", Dt("climate", "set_temperature", t, { temperature: f - u }), Dt("climate", "set_temperature", t, { temperature: f + u })),
        ya("tfSeg", "Mode", (a.hvac_modes || []).map((v) => ({ label: jt(v), act: Dt("climate", "set_hvac_mode", t, { hvac_mode: v }), pressed: e.state === v })))
      ] };
    }
    if (o === "cover") {
      const u = e.state === "opening" || e.state === "closing", f = e.state === "closed", v = cn(t), S = Lr(t);
      return { on: !f, tone: "blue", icon: Wp[Jl(e)][f ? 1 : 0], button: r("cover", (f ? "Open " : "Close ") + bt(t)), parts: ["blocks", "tilt", "buttons"], sections: [
        he(t, tc) && gn(t, v),
        S != null && Si(t, S),
        _i(t, v, u)
      ] };
    }
    if (o === "humidifier") {
      const u = Number(a.humidity);
      return { on: e.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: r("humidifier", "Turn " + bt(t) + (e.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(u) && ra("Target humidity", u + "%", Dt("humidifier", "set_humidity", t, { humidity: u - 1 }), Dt("humidifier", "set_humidity", t, { humidity: u + 1 })),
        ((l = a.available_modes) == null ? void 0 : l.length) && ya("tfSeg", "Mode", a.available_modes.map((f) => ({ label: jt(f), act: Dt("humidifier", "set_mode", t, { mode: f }), pressed: a.mode === f })))
      ] };
    }
    if (o === "media_player") {
      const u = e.state === "playing", f = e.state === "off" || e.state === "standby", v = Ye("vol", t, a.volume_level), S = f ? { act: Dt("media_player", he(t, n0) ? "turn_on" : "toggle", t), label: "Turn " + bt(t) + " on" } : e.state === "playing" || e.state === "paused" ? { act: Dt("media_player", "media_play_pause", t), label: (u ? "Pause " : "Play ") + bt(t) } : { act: Dt("media_player", he(t, r0) ? "turn_off" : "toggle", t), label: "Turn " + bt(t) + " off" };
      return { on: !f, tone: "blue", art: !f && a.entity_picture ? a.entity_picture : null, button: S, parts: ["playback", "volume"], sections: f ? [] : [
        (he(t, Hp) || he(t, Np) || he(t, Pp) || he(t, Op)) && ya("tfSeg", "Playback", [
          { html: rs.prev, aria: "Previous", act: Dt("media_player", "media_previous_track", t), disabled: !he(t, Hp) },
          { html: u ? rs.pause : rs.play, aria: u ? "Pause" : "Play", act: Dt("media_player", "media_play_pause", t), disabled: !(he(t, Pp) || he(t, Op)) },
          { html: rs.next, aria: "Next", act: Dt("media_player", "media_next_track", t), disabled: !he(t, Np) }
        ]),
        he(t, o0) && v != null && hn("vol", t, v, bt(t) + " volume", Math.round(v * 100) + "%")
      ] };
    }
    if (o === "vacuum") {
      const u = e.state === "cleaning", f = a.rooms || [], v = (x) => f.includes(x) ? f.filter((P) => P !== x) : f.concat(x), S = Dt("vacuum", u ? "pause" : "start", t, $a(t) ? { rooms: f } : null);
      return { on: u || e.state === "returning", tone: "blue", button: { act: S, label: (u ? "Pause " : "Start ") + bt(t) }, parts: ["controls", "rooms"], sections: [
        ya("tfSeg", bt(t), [
          { label: u ? "Pause" : "Start", act: S },
          { label: "Dock", act: Dt("vacuum", "return_to_base", t), disabled: e.state === "docked" },
          { label: "Locate", act: Dt("vacuum", "locate", t) }
        ]),
        $a(t) && ya("tfChips", "Rooms to clean", Gt.rooms.filter((x) => x.id !== "balcony").map((x) => ({ label: x.name, act: Dt("vacuum", "set_rooms", t, { rooms: v(x.name) }), pressed: f.includes(x.name) })))
      ] };
    }
    if (o === "lock") {
      const u = e.state === "locked";
      return { on: !u, tone: "heat", button: { act: Dt("lock", u ? "unlock" : "lock", t), label: (u ? "Unlock " : "Lock ") + bt(t) }, parts: ["controls"], sections: [
        ya("tfSeg", bt(t), [
          { label: "Lock", act: Dt("lock", "lock", t), pressed: u },
          { label: "Unlock", act: Dt("lock", "unlock", t), pressed: e.state === "unlocked" },
          he(t, Zp) && { label: "Open", act: Dt("lock", "open", t), pressed: e.state === "open" }
        ])
      ] };
    }
    if (o === "alarm_control_panel") {
      const u = e.state === "disarmed";
      return { on: !u, tone: e.state === "triggered" ? "alarm" : "blue", button: { act: Dt("alarm_control_panel", u ? "alarm_arm_away" : "alarm_disarm", t), label: u ? "Arm " + bt(t) + ", away" : "Disarm " + bt(t) }, parts: ["controls"], sections: [
        ya("tfSeg", bt(t), $p.filter(([, , , f]) => !f || he(t, f)).map(([f, v, S]) => ({ label: v, act: Dt("alarm_control_panel", S, t), pressed: e.state === f })))
      ] };
    }
    if (o === "valve") {
      const u = e.state === "open";
      return { on: u, tone: "blue", icon: "mdi:sprinkler-variant", button: r("valve", (u ? "Close " : "Open ") + bt(t)), parts: ["controls"], sections: [
        ya("tfSeg", bt(t), [
          { label: "Open", act: Dt("valve", "open_valve", t), pressed: u },
          { label: "Close", act: Dt("valve", "close_valve", t), pressed: !u }
        ])
      ] };
    }
    if (o === "water_heater") {
      const u = Number(a.temperature), f = a.target_temp_step || 1, v = e.state !== "off";
      return { on: v, tone: "heat", icon: "mdi:water-boiler", button: { act: Dt("water_heater", v ? "turn_off" : "turn_on", t), label: "Turn " + bt(t) + (v ? " off" : " on") }, parts: ["step", "modes"], sections: [
        Number.isFinite(u) && ra("Target temperature", u + " °C", Dt("water_heater", "set_temperature", t, { temperature: u - f }), Dt("water_heater", "set_temperature", t, { temperature: u + f })),
        ((c = a.operation_list) == null ? void 0 : c.length) && ya("tfSeg", "Mode", a.operation_list.map((S) => ({ label: jt(S), act: Dt("water_heater", "set_operation_mode", t, { operation_mode: S }), pressed: (a.operation_mode || e.state) === S })))
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
    var N;
    const e = (E) => t.readings.find((R) => qt(R).device_class === E), a = e("temperature"), o = e("humidity"), r = (E) => {
      var R;
      return Number((R = M[E]) == null ? void 0 : R.state);
    }, l = (E) => t.actions.filter((R) => E.test(R)), c = t.lights.filter((E) => {
      var R;
      return ((R = M[E]) == null ? void 0 : R.state) === "on";
    }), u = l(/^cover\./), f = u.filter((E) => {
      var R;
      return ((R = M[E]) == null ? void 0 : R.state) !== "closed";
    }), v = [...new Set(u.map((E) => Jl(M[E])))], S = l(/^climate\./)[0], x = l(/^humidifier\./)[0], P = l(/^media_player\./), D = P.find((E) => {
      var R;
      return ((R = M[E]) == null ? void 0 : R.state) === "playing";
    }) || P.find((E) => {
      var R;
      return ((R = M[E]) == null ? void 0 : R.state) === "paused";
    }), B = t.plugs.filter((E) => {
      var R;
      return ((R = M[E]) == null ? void 0 : R.state) === "on";
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
      acts: t.lights.map((E) => ["light", c.length ? "turn_off" : "turn_on", E]),
      aria: (c.length ? "Turn off" : "Turn on") + " the lights in " + t.name
    }), u.length) {
      const E = v.length === 1 ? s0[v[0]] : "covers", R = Math.round(u.reduce((_, at) => _ + Wa(at), 0) / u.length);
      k.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        light: f.length ? Xe([146, 107, 199]) : "",
        icon: fo("", ((N = Wp[v[0]]) == null ? void 0 : N[f.length ? 0 : 1]) || "mdi:window-shutter"),
        label: jt(E),
        value: R <= 0 ? "Closed" : R >= 100 ? "Open" : R + "% open",
        short: R <= 0 ? "Closed" : R + "%",
        on: f.length > 0,
        acts: u.map((_) => ["cover", f.length ? "close_cover" : "open_cover", _]),
        aria: (f.length ? "Close the " : "Open the ") + E + " in " + t.name
      });
    }
    if (S) {
      const E = qt(S), R = M[S].state === "off";
      k.push({
        key: "climate",
        kind: "control",
        tone: E.hvac_action === "cooling" ? "cool" : "heat",
        light: ln(S) ? Xe(ln(S)) : "",
        icon: fo(S),
        label: bt(S),
        value: R ? "Off" : jt(E.hvac_action || M[S].state) + " · " + Zo(E.temperature),
        short: R ? "Off" : Zo(E.temperature),
        on: !R,
        acts: [["climate", "toggle", S]],
        aria: "Turn " + bt(S) + (R ? " on" : " off")
      });
    }
    if (x) {
      const E = M[x].state === "on";
      k.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        light: E ? Xe([33, 150, 243]) : "",
        icon: fo("", "mdi:air-humidifier"),
        label: bt(x),
        value: E ? "On · " + qt(x).humidity + "%" : "Off",
        short: E ? qt(x).humidity + "%" : "Off",
        on: E,
        acts: [["humidifier", "toggle", x]],
        aria: "Turn " + bt(x) + (E ? " off" : " on")
      });
    }
    if (P.length) {
      const E = D || P[0], R = M[E], _ = R.state === "playing";
      k.push({
        key: "media",
        kind: "control",
        tone: "blue",
        light: ln(E) ? Xe(ln(E)) : "",
        icon: fo(E),
        label: bt(E),
        value: Oe(E),
        short: _ ? "Playing" : R.state === "paused" ? "Paused" : jt(R.state),
        on: _,
        acts: [["media_player", R.state === "playing" || R.state === "paused" ? "media_play_pause" : "toggle", E]],
        aria: (_ ? "Pause " : "Play ") + bt(E)
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
      acts: t.plugs.map((E) => ["switch", B.length ? "turn_off" : "turn_on", E]),
      aria: (B.length ? "Turn off" : "Turn on") + " the plugs in " + t.name
    }), t.alerts.forEach((E) => k.push(qt(E).device_class === "moisture" ? { key: "alert:" + E, kind: "alert", icon: fo(E), label: "Water leak" } : { key: "note:" + E, kind: "note", icon: fo(E), label: bt(E) + " " + Oe(E).toLowerCase() })), k;
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
    return a || !o ? '<span class="tfIcon tfAreaIcon' + (r ? " on" : "") + '"' + l + ' aria-hidden="true">' + c + "</span>" : '<button class="tfIcon tfAreaIcon' + (r ? " on" : "") + '" type="button"' + l + ' data-acts="' + wa(o.acts) + '" aria-label="' + W(o.aria) + '" aria-pressed="' + r + '">' + c + "</button>";
  }
  const w = (t) => t.readings.find((e) => qt(e).device_class === "temperature") || [...t.readings, ...t.solar, ...t.openings, ...t.actions, ...t.plugs].find((e) => M[e]) || null, L = (t, e) => {
    const a = bt(e);
    return a.toLowerCase().startsWith(t.name.toLowerCase() + " ") ? jt(a.slice(t.name.length + 1)) : a;
  };
  function F(t) {
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
    return e.startsWith("climate.") ? [L(t, e), c ? "Off" : jt(l.hvac_action || M[e].state) + (l.temperature != null ? " · " + Zo(l.temperature) : ""), r && r.value].filter(Boolean).join(" · ") : [!(o && o.id === e) && L(t, e), o && o.id !== e && o.value, r && r.id !== e && r.value + (o ? "" : " humidity")].filter(Boolean).join(" · ");
  };
  function $(t) {
    const e = t.id === V, a = s(t), o = w(t), r = o && F(o), l = [...a.filter((c) => c.kind === "control"), ...a.filter((c) => c.kind !== "control" && c.kind !== "reading")].slice(0, 4);
    return '<article class="hcAreaPanel tfAreaPanel' + (e ? " active" : "") + '" data-area="' + W(t.id) + '" tabindex="0" aria-expanded="' + e + '" aria-label="' + W(t.name) + '"><div class="panelExpanded"' + (e ? "" : " inert") + ">" + Lt(t, null, ' data-cols="2" data-rows="' + Mn("areas") + '"') + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop">' + m(t, a, !0) + '<span class="tfACName">' + W(t.name) + '</span></div><span class="tfACMain">' + (r ? W(r.text + (r.unit ? " " + r.unit : "")) : "") + '</span><span class="tfACTiles" aria-hidden="true">' + l.map((c) => '<span class="tfACTile"><span class="tfIcon' + (c.kind === "alert" ? " alert" : "") + '"' + (c.on && c.light ? ' data-light style="' + c.light + '"' : "") + ">" + c.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let I = [];
  const X = (t) => {
    const e = et.areaOrder || [], a = (o) => {
      const r = e.indexOf(o.id);
      return r < 0 ? e.length + t.indexOf(o) : r;
    };
    return [...t].sort((o, r) => a(o) - a(r));
  }, tt = () => {
    var e;
    const t = new Set(((e = et.dash) == null ? void 0 : e.areasOff) || []);
    return X(I).filter((a) => !t.has(a.id));
  }, mt = Xe([255, 162, 75]), Ot = (t) => {
    const e = t.id === V;
    return '<button class="tfIcon tfAreaPick' + (e ? " on" : "") + '" type="button" data-area-pick="' + W(t.id) + '"' + (e ? ' data-light style="' + mt + '"' : "") + ' aria-label="' + W(t.name) + '" aria-pressed="' + e + '"><span class="tfAreaGlyph"' + fe("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span></button>";
  }, Et = (t) => {
    var o;
    const e = tt();
    e.some((r) => r.id === V) || (V = ((o = e[0]) == null ? void 0 : o.id) || null);
    const a = e.find((r) => r.id === V);
    return '<div class="tfAreas" data-tf data-k="areas" style="order:' + t + '"><section class="hcAreaGallery tfAreaGallery" aria-label="Areas">' + e.map($).join("") + '</section><div class="tfAreaPhone"><div class="tfAreaStage">' + (a ? Lt(a, null, ' data-cols="2" data-rows="' + Mn("areas") + '"') : "") + '</div><div class="tfAreaPicks" role="group" aria-label="Areas">' + e.map(Ot).join("") + "</div></div></div>";
  }, Ct = (t) => t.startsWith("room:"), zt = (t) => I.find((e) => "room:" + e.id === t);
  function Lt(t, e, a = "") {
    const o = s(t), r = w(t), l = r && F(r), c = r ? z(t, r, o) : "", u = l ? l.text + (l.unit ? " " + l.unit : "") : "", f = (R) => {
      const _ = h(t, R.key);
      return _.length === 1 ? _[0] : "group:" + t.id + ":" + R.key;
    }, v = o.filter((R) => R.kind === "control").slice(0, 4), S = (R) => R.on && R.light ? ' data-light style="' + R.light + '"' : "", x = (R) => '<button class="tfIcon' + (R.on ? " on" : "") + '" type="button" data-tone="' + R.tone + '"' + S(R) + ' data-acts="' + wa(R.acts) + '" aria-label="' + W(R.aria) + '" aria-pressed="' + R.on + '">' + R.icon + "</button>", P = (R) => '<button class="tfIcon' + (R.on ? " on" : "") + '" type="button" data-tone="' + R.tone + '"' + S(R) + ' data-more="' + W(f(R)) + '" aria-label="' + W(t.name + " " + R.label.toLowerCase() + ", " + R.value + ". Open") + '">' + R.icon + "</button>", D = v.map(P), B = v.map((R) => '<div class="tfRoomDev' + (R.on ? " on" : "") + '" data-more="' + W(f(R)) + '">' + (R.acts ? x(R) : P(R)) + '<button class="tfName tfRoomDevName" type="button" data-more="' + W(f(R)) + '" aria-label="' + W(t.name + " " + R.label.toLowerCase() + ", " + R.value + ". Open") + '"><span class="activityRowName">' + W(R.label) + '</span><span class="activityRowMeta">' + W(R.value) + "</span></button></div>"), k = o.find((R) => R.key === "lights"), N = '<span class="tfAreaGlyph"' + fe("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span>", E = k ? '<button class="tfIcon tfRoomIcon" type="button" data-acts="' + wa(k.acts) + '" aria-label="' + W(k.aria) + '" aria-pressed="' + !!k.on + '">' + N + "</button>" : '<span class="tfIcon tfRoomIcon" aria-hidden="true">' + N + "</span>";
    return '<div class="tfAction tfRoomTile"' + (e ? ' data-k="' + W(e) + '"' : "") + a + ' data-go="' + W(t.id) + '"><div class="tfActionHead">' + E + '<button class="tfName" type="button" data-go="' + W(t.id) + '" aria-label="Open ' + W(t.name) + '"><span class="activityRowName">' + W(t.name) + "</span>" + (u || c ? '<span class="activityRowMeta">' + (u ? '<span class="tfRoomInline">' + W(u) + (c ? " · " : "") + "</span>" : "") + W(c) + "</span>" : "") + "</button></div>" + // the reading opens its more-info (the thermometer's, say)
    (u ? '<button class="tfRoomReading" type="button" data-more="' + W(r) + '" aria-label="' + W(bt(r) + ", " + Oe(r) + ". More info") + '"><span class="tfRoomBig">' + W(u) + "</span>" + (c ? '<span class="tfRoomSub">' + W(c) + "</span>" : "") + "</button>" : "") + (D.length ? '<div class="tfRoomDevices">' + D.join("") + '</div><div class="tfRoomHeads">' + B.join("") + "</div>" : "") + "</div>";
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
    if (!At || et.favSeeded || !Gt.rooms.length || C) return;
    const t = (a) => Object.keys(M).find((o) => $a(o) && a(o)), e = [t((a) => a.startsWith("climate.")), t((a) => a.startsWith("cover.") && /curtain/.test(a)), t((a) => a.startsWith("valve.")), Gt.security.locks[0]];
    et = { ...et, favourites: [.../* @__PURE__ */ new Set([...et.favourites ?? ye.favorite_entities ?? [], ...e.filter(Boolean)])].slice(0, le), favSeeded: !0 }, Aa();
  }
  const We = () => et.suggest ?? !ye.hide_suggested_entities;
  function Mo() {
    const t = new Set(C ? [] : et.favHidden || []), e = Bt().filter((r) => !t.has(r)), a = We() ? Se().filter((r) => !t.has(r) && Ps(r)) : [], o = Math.max(le, e.length);
    return [...e, ...a].slice(0, C && !qi() ? o : Math.min(b0, o));
  }
  const Ti = (t) => {
    const e = Bt().includes(t);
    return '<button class="tfStar" type="button" data-star="' + W(t) + '" aria-pressed="' + e + '" aria-label="Favourite: ' + W(bt(t)) + '">' + m0(e) + "</button>";
  };
  function vn(t, { area: e = !1, star: a = !1, plain: o = !1, say: r = null, alert: l = !1 } = {}) {
    var B, k, N, E, R, _;
    const c = o && ((R = (B = d()) == null ? void 0 : B.devices) == null ? void 0 : R[(E = (N = (k = d()) == null ? void 0 : k.entities) == null ? void 0 : N[t]) == null ? void 0 : E.device_id]), u = c && (c.name_by_user || c.name) || bt(t), f = t.split(".")[0], v = !o && fr.includes(f) ? ro(t) : null, S = v ? v.on : ["on", "open", "playing"].includes((_ = M[t]) == null ? void 0 : _.state), x = o ? null : v ? v.button : ai.includes(f) ? { act: Dt(f, "toggle", t), label: "Turn " + bt(t) + (S ? " off" : " on") } : f === "scene" || f === "script" ? { act: Dt(f, "turn_on", t), label: "Run " + bt(t) } : null, P = (r ?? Oe(t)) + (e && xe.get(t) ? " · " + xe.get(t) : ""), D = (v == null ? void 0 : v.icon) || Je(t);
    return '<div class="activityRow' + (x ? " tfPlug" : "") + (S ? " on" : "") + (a ? " tfPick" : "") + (l ? " alert" : "") + '" data-k="' + W((e ? "fav:" : "row:") + t) + '" data-tone="' + (f === "light" ? "light" : (v == null ? void 0 : v.tone) || "blue") + '"' + wo(t) + ">" + (x && !a ? '<button class="tfIcon" type="button" data-act="' + x.act + '" aria-label="' + W(x.label) + '"' + fe(t, D) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + fe(t, D) + "></div>") + '<button class="tfName" type="button" data-more="' + W(t) + '" aria-label="' + W(u + ", " + P + ". More info") + '"><span class="activityRowName">' + W(u) + '</span><span class="activityRowMeta">' + W(P) + "</span></button>" + (a ? Ti(t) : "") + "</div>";
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
    var N;
    const t = ((N = d()) == null ? void 0 : N.entities) || {}, e = (E) => qt(E).device_class, a = Object.keys(M).filter((E) => E.startsWith("sensor.") && e(E) === "battery" || E.startsWith("binary_sensor.") && ["battery", "problem"].includes(e(E))), o = Gt.rooms.flatMap((E) => E.plants.map((R) => R.id));
    if (!a.length && !o.length) return null;
    const r = (E) => {
      var _;
      const R = (_ = t[E]) == null ? void 0 : _.device_id;
      return !!R && Object.keys(M).some((at) => {
        var St;
        return at.startsWith("binary_sensor.") && ((St = t[at]) == null ? void 0 : St.device_id) === R && e(at) === "battery_charging" && M[at].state === "on";
      });
    }, l = (E) => E.startsWith("vacuum.") ? qt(E).battery_level <= 20 && M[E].state !== "docked" : E.startsWith("binary_sensor.") ? e(E) === "battery" && M[E].state === "on" : parseFloat(M[E].state) <= 20 && !r(E), c = [...a, ...Gt.vacuums].filter((E) => M[E] && l(E)), u = [...a.filter((E) => e(E) === "problem" && M[E].state === "on"), ...o.filter((E) => {
      var R;
      return ((R = M[E]) == null ? void 0 : R.state) === "problem";
    })], f = a.filter((E) => M[E].state === "unavailable"), v = [.../* @__PURE__ */ new Set([...c, ...u, ...f])], S = (E) => {
      const R = parseFloat(M[E].state);
      return e(E) === "battery" && Number.isFinite(R) ? R : 101;
    }, x = [...o, ...Gt.vacuums, ...[...a].sort((E, R) => S(E) - S(R))].filter((E) => M[E] && !v.includes(E)), P = /* @__PURE__ */ new Map();
    x.forEach((E) => {
      var _;
      const R = ((_ = Gt.areaOf) == null ? void 0 : _.call(Gt, E)) || "";
      P.set(R, [...P.get(R) || [], E]);
    });
    const D = (E) => {
      const R = Gt.rooms.findIndex((_) => _.id === E);
      return E === "" ? 1 / 0 : R < 0 ? Gt.rooms.length : R;
    }, B = [...P.keys()].sort((E, R) => D(E) - D(R)), k = (E) => {
      var R, _, at, St;
      return ((R = Gt.rooms.find((Rt) => Rt.id === E)) == null ? void 0 : R.name) || ((St = (at = (_ = d()) == null ? void 0 : _.areas) == null ? void 0 : at[E]) == null ? void 0 : St.name) || E;
    };
    return {
      value: [c.length && Ht(c.length, "low battery", "low batteries"), u.length && Ht(u.length, "problem", "problems"), f.length && Ht(f.length, "unavailable device", "unavailable devices")].filter(Boolean).join(", ") || "All good",
      plain: !0,
      groups: [{ name: "Needs attention", ids: v, alert: !0 }, ...B.map((E) => ({ name: E ? k(E) : B.length > 1 ? "Other devices" : "Devices", ids: P.get(E) }))].filter((E) => E.ids.length)
    };
  }
  const Ko = () => C ? et.home || {} : et, xn = (t) => Vp.includes(t) ? (Ko().shownSums || []).includes(t) : !(Ko().hiddenSums || []).includes(t);
  function Li(t, e, a) {
    const o = t.flatMap((P) => a(P, /^cover\./)), r = o.filter((P) => {
      var D;
      return ["open", "opening"].includes((D = M[P]) == null ? void 0 : D.state);
    }).length, l = Object.keys(M).filter((P) => P.startsWith("person.")), c = l.filter((P) => {
      var D;
      return ((D = M[P]) == null ? void 0 : D.state) === "home";
    }).length, u = Gt.security.openings.filter((P) => M[P]), f = u.filter((P) => M[P].state === "on").length, v = Object.keys(M).filter((P) => P.startsWith("binary_sensor.") && qt(P).device_class === "moisture"), S = v.filter((P) => M[P].state === "on").length, x = Gt.vacuums.filter((P) => M[P]);
    return {
      covers: o.length && { value: r ? r + " open" : "All closed", groups: e((P) => a(P, /^cover\./)) },
      people: l.length && { value: c ? c + " home" : "Nobody home", groups: [{ name: "People", ids: l }] },
      openings: u.length && { value: f ? f + " open" : "All closed", groups: [{ name: "Doors and windows", ids: u }] },
      leaks: v.length && { value: S ? Ht(S, "leak", "leaks") : "All dry", groups: [{ name: "Leak sensors", ids: v }] },
      vacuum: x.length && { value: jt(M[x[0]].state), groups: [{ name: "Vacuum", ids: x }] }
    };
  }
  function So(t = !1) {
    var Ft;
    const e = Gt.rooms, a = Gt.security, o = (kt, Tt) => kt.actions.filter((ue) => Tt.test(ue)), r = (kt) => e.map((Tt) => ({ name: Tt.name, ids: kt(Tt) })).filter((Tt) => Tt.ids.length), l = e.flatMap((kt) => kt.lights), c = l.filter((kt) => {
      var Tt;
      return ((Tt = M[kt]) == null ? void 0 : Tt.state) === "on";
    }).length, u = e.map((kt) => kt.readings.find((Tt) => qt(Tt).device_class === "temperature")).filter(Boolean).map((kt) => Number(M[kt].state)).filter(Number.isFinite), [f, v] = [He(Math.min(...u)), He(Math.max(...u))], S = e.flatMap((kt) => o(kt, /^media_player\./)), x = S.filter((kt) => {
      var Tt;
      return ((Tt = M[kt]) == null ? void 0 : Tt.state) === "playing";
    }).length, P = Jt(), D = P.filter((kt) => kt.severity === "warning" && kt.on).length, B = a.locks.filter((kt) => {
      var Tt;
      return ["unlocked", "jammed", "open"].includes((Tt = M[kt]) == null ? void 0 : Tt.state);
    }).length, k = a.alarms.filter((kt) => {
      var Tt;
      return ((Tt = M[kt]) == null ? void 0 : Tt.state) === "disarmed";
    }).length, N = D ? Ht(D, "warning", "warnings") : null, E = B ? B + " unlocked" : k ? k + " disarmed" : N ? null : "All secure", R = $o(), _ = e.flatMap((kt) => kt.solar), at = _.find((kt) => kt.endsWith("_power")), St = {
      light: l.length && { value: c ? c + " on" : "All off", groups: r((kt) => kt.lights) },
      climate: u.length && { value: f === v ? f + "°" : f + " - " + v + "°", groups: r((kt) => [...kt.readings.filter((Tt) => ["temperature", "humidity"].includes(qt(Tt).device_class)), ...o(kt, /^(climate|humidifier)\./)]) },
      security: (a.alarms.length || a.locks.length) && { value: [N, E].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...a.alarms, ...a.locks] }, { name: "Doors and windows", ids: a.openings }].filter((kt) => kt.ids.length) },
      media_players: S.length && { value: x ? x + " playing" : "No media playing", groups: r((kt) => o(kt, /^media_player\./)) },
      maintenance: R,
      energy: Gt.grid && { value: Dr(Number(((Ft = M[at]) == null ? void 0 : Ft.state) || 0) * 1e3 + Number(M[Gt.grid].state)) + " now", groups: [{ name: "Energy", ids: [..._, Gt.grid] }] },
      ...Li(e, r, o)
    }, Rt = [], Wt = P.filter((kt) => kt.severity !== "warning" && kt.on);
    return Wt.length && Rt.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: Ht(Wt.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: Wt.map((kt) => kt.entity) }] }), ko().forEach((kt) => {
      kt.type !== "summary" ? Rt.push({ key: "path:" + kt.path, name: kt.label || kt.path, icon: kt.icon || "mdi:link-variant", colour: "", value: "" }) : !kt.hidden && St[kt.key] && (t || xn(kt.key)) && Rt.push({ key: kt.key, ...ei[kt.key], ...St[kt.key] });
    }), Rt;
  }
  const la = (t) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + W(t.key) + '" data-k="sum:' + W(t.key) + '" aria-label="' + W(t.name + (t.value ? ", " + t.value : "")) + '"' + (t.key === "alerts" ? ' style="--sum:' + t.colour + ';--sum-ink:#ffffff"' : t.key === "climate" ? ' style="' + Ar() + '"' : t.colour && Wn(t.colour) ? ' style="' + Wn(t.colour).slice(1) + '"' : "") + ">" + (t.key === "climate" ? bi : "") + '<div class="tfIcon" aria-hidden="true"' + fe(t.id || "", t.icon, t.name) + '></div><div><div class="activityRowName">' + W(t.name) + "</div>" + (t.value ? '<div class="activityRowMeta">' + W(t.value) + "</div>" : "") + "</div></div>";
  function fc(t) {
    const e = Bt();
    et = { ...et, favourites: e.includes(t) ? e.filter((a) => a !== t) : [...e, t], favHidden: (et.favHidden || []).filter((a) => a !== t) }, Aa(), Be();
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
  async function Iu() {
    const t = (c) => Promise.resolve().then(() => T(c)).catch(() => null), [e, a, o, r] = await Promise.all([
      t({ type: "frontend/get_user_data", key: jp }),
      t({ type: "frontend/get_system_data", key: "home" }),
      t({ type: "frontend/get_system_data", key: "security" }),
      t({ type: "usage_prediction/common_control" })
    ]), l = (e == null ? void 0 : e.value) || {};
    et = { favourites: l.favourites ?? null, sources: l.sources, hiddenSums: l.hiddenSums, shownSums: l.shownSums, home: l.home, dash: l.dash, named: l.named, favHidden: l.favHidden, suggest: l.suggest, favSeeded: l.favSeeded, favsTitle: l.favsTitle, areaOrder: l.areaOrder }, ye = (a == null ? void 0 : a.value) || {}, Ja = (o == null ? void 0 : o.value) || {}, wr = Array.isArray(r == null ? void 0 : r.entities) ? r.entities : [], qa = null, Object.keys(M).length && Be(), Fu(), At = !0, ce();
  }
  const gc = "HomeCore";
  async function Fu() {
    var o, r, l;
    const t = location.pathname.split("/")[1], e = et.named || [];
    if (!((r = (o = d()) == null ? void 0 : o.user) != null && r.is_admin) || !t || e.includes(t)) return;
    const a = () => {
      et = { ...et, named: [...e, t] }, Aa();
    };
    try {
      const c = (l = await T({ type: "lovelace/dashboards/list" })) == null ? void 0 : l.find((v) => v.url_path === t);
      if (!c || c.mode === "yaml") return;
      if (c.title === gc) {
        a();
        return;
      }
      const u = await T({ type: "lovelace/config", url_path: t }), f = ((u == null ? void 0 : u.views) || []).flatMap((v) => [...v.cards || [], ...(v.sections || []).flatMap((S) => S.cards || [])]);
      if (!f.length || !f.every((v) => (v == null ? void 0 : v.type) === "custom:homecore-card" && !v.page)) return;
      await T({ type: "lovelace/dashboards/update", dashboard_id: c.id, title: gc }), a();
    } catch {
    }
  }
  let Or = null, Ls = 0, Ds = !1;
  const bc = (t) => {
    const e = t.split(".")[0], a = qt(t).device_class;
    return g0.includes(e) && (e !== "binary_sensor" || ls.includes(a) || !!Xp[a]);
  }, Es = (t) => t.startsWith("binary_sensor.") ? Xp[qt(t).device_class] : null;
  async function qu() {
    var t;
    if (!(Ds || Date.now() - Ls < 30 * 1e3)) {
      Ds = !0, Ls = Date.now();
      try {
        const e = Object.keys(((t = d()) == null ? void 0 : t.states) || {}).filter(bc), a = e.length ? await T({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: e }) : null;
        Or = Array.isArray(a) ? a.filter((o) => o.entity_id && o.state != null && o.when) : null;
      } catch {
        Or = null;
      }
      Ds = !1, Be();
    }
  }
  function Wu() {
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
    }), [...t.values(), ...e.values()].sort((r, l) => l.when - r.when).slice(0, w0);
  }
  function Vu(t) {
    var o;
    const e = t.context_user_id && Object.keys(M).find((r) => r.startsWith("person.") && qt(r).user_id === t.context_user_id);
    if (e) return bt(e);
    const a = (o = d()) == null ? void 0 : o.user;
    return a && t.context_user_id === a.id ? a.name : ["automation", "script"].includes(t.context_domain) || t.context_event_type === "automation_triggered" ? t.context_name || "Home Assistant" : "";
  }
  function ju(t) {
    const e = t.entity_id.split(".")[0], a = String(t.state);
    return e === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[a] || jt(a).toLowerCase() : e === "cover" || e === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[a] || jt(a).toLowerCase() : e === "binary_sensor" ? a === "on" ? "opened" : "closed" : e === "climate" ? a === "off" ? "turned off" : "set to " + jt(a).toLowerCase() : e === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[a] || jt(a).toLowerCase() : e === "alarm_control_panel" ? (Kp[a] || jt(a)).toLowerCase() : e === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[a] || jt(a).toLowerCase() : a === "on" ? "turned on" : a === "off" ? "turned off" : jt(a).toLowerCase();
  }
  function zu(t) {
    const e = t.entity_id, a = t.alarm && Es(e), o = bt(e) + " " + (a ? a[0] : ju(t)), r = a ? ba(t.when * 1e3) + (t.cleared ? " · " + a[1] + " since " + ba(t.cleared * 1e3) : "") : [Vu(t), ba(t.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow' + (a ? " alert" : "") + '"><div class="tfIcon' + (a ? " alert" : "") + '" aria-hidden="true"' + fe(e, Je(e)) + '></div><button class="tfName" type="button" data-more="' + W(e) + '" data-at="' + Math.round(t.when * 1e3) + '" aria-label="' + W(o + ", " + r + ". More info") + '"><span class="activityRowName">' + W(o) + '</span><span class="activityRowMeta">' + W(r) + "</span></button></div>";
  }
  let ja = null, wc = 0;
  const Gu = [["electricity", "Electricity", 4.3, "kWh"], ["solar", "Solar", 2.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function vc() {
    var e;
    if (Date.now() - wc < 5 * 60 * 1e3) return;
    wc = Date.now();
    const t = [];
    try {
      const a = ((e = await T({ type: "energy/get_prefs" })) == null ? void 0 : e.energy_sources) || [], o = (r) => a.filter((l) => l.type === r).flatMap((l) => r === "grid" ? (l.flow_from || []).map((c) => c.stat_energy_from) : [l.stat_energy_from]).filter(Boolean);
      for (const [r, l, c] of [["electricity", "Electricity", o("grid")], ["solar", "Solar", o("solar")], ["gas", "Gas", o("gas")], ["water", "Water", o("water")]]) {
        if (!c.length) continue;
        const u = await Promise.all(c.map((f) => Promise.resolve(T({ type: "recorder/statistic_during_period", statistic_id: f, calendar: { period: "day" }, types: ["change"] })).then((v) => Number(v == null ? void 0 : v.change) || 0, () => 0)));
        t.push({ key: r, name: l, id: c[0], ids: c, value: u.reduce((f, v) => f + v, 0), unit: qt(c[0]).unit_of_measurement || (r === "gas" || r === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    ja = t, Be();
  }
  let Xn = null, yc = [];
  function Bs() {
    var l;
    const t = yc = ja != null && ja.length ? ja : Gu.map(([c, u, f, v]) => {
      if (c === "solar") {
        const x = Object.keys(M).find((P) => P.endsWith("_solar_today") && !P.includes("made_up_energy"));
        x && Number.isFinite(Number(M[x].state)) && (f = Number(M[x].state));
      }
      const S = "sensor.made_up_energy_" + c;
      return M[S] = { entity_id: S, state: String(f), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: u + " today", unit_of_measurement: v, state_class: "total_increasing" } }, { key: c, name: u, id: S, value: f, unit: v };
    });
    rt.clear(), t.some((c) => c.id === Xn) || (Xn = t[0].id);
    const e = t.map((c) => {
      const u = Number(c.value).toLocaleString(void 0, { maximumFractionDigits: c.value < 10 ? 2 : 1 }) + " " + c.unit, f = v0[c.key], v = c.id === Xn;
      return rt.set(c.id, { name: c.name, text: u, icon: f }), '<div class="activityRow tap' + (v ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + W(c.id) + '" aria-pressed="' + v + '" aria-label="' + W(c.name + ", " + u) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + fe("", f, c.name) + '></div><div><div class="activityRowName">' + W(c.name) + '</div><div class="activityRowMeta">' + W(u) + "</div></div></div>";
    }), a = t.find((c) => c.id === Xn), o = (((l = re().opts.energy) == null ? void 0 : l.graph) || "above") === "below", r = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + W(a.id) + '" role="img" aria-label="' + W(a.name) + ', last 24 hours"></svg></div>';
    return un("dash:energy", 0, "Energy today", e, r, So().some((c) => c.key === "energy") ? "summary:energy" : null, "tfDashCard tfDash-energy" + (o ? "" : " graphAbove"));
  }
  function xc(t) {
    const e = H.querySelector(".tfDash-energy"), a = e == null ? void 0 : e.querySelector(".tfDashGraph svg");
    !a || t === Xn || (Xn = t, e.querySelectorAll("[data-energy-pick]").forEach((o) => {
      const r = o.dataset.energyPick === t;
      o.classList.toggle("picked", r), o.setAttribute("aria-pressed", String(r));
    }), a.dataset.graph = t, a.dataset.drawn = "", ma.set("dash:energy", Bs()), ld(!0));
  }
  const Mc = {
    electricity: [15, 12, 10, 10, 10, 12, 25, 45, 40, 30, 25, 30, 35, 30, 25, 25, 35, 60, 80, 70, 55, 45, 30, 20],
    gas: [2, 2, 2, 2, 3, 8, 18, 20, 12, 6, 4, 4, 4, 4, 4, 5, 8, 14, 16, 14, 10, 6, 3, 2],
    water: [0, 0, 0, 0, 0, 2, 12, 18, 8, 4, 3, 4, 6, 3, 2, 3, 4, 6, 10, 8, 5, 5, 3, 1]
  }, kc = /* @__PURE__ */ new Map();
  async function Uu(t) {
    const e = /* @__PURE__ */ new Date(), a = new Date(e).setHours(0, 0, 0, 0), o = e.getHours(), r = e.getMinutes() / 60, l = Array.from({ length: 24 }, (u, f) => f <= o ? 0 : null);
    if (!t.ids) {
      const u = Mc[t.key] || Mc.electricity, f = u.map((S, x) => x < o ? S : x === o ? S * r : 0), v = f.reduce((S, x) => S + x, 0) || 1;
      return l.map((S, x) => S == null ? null : t.value * f[x] / v);
    }
    const c = kc.get(t.id);
    if (c && c.day === a && Date.now() - c.at < 5 * 60 * 1e3) return c.hours;
    try {
      const u = await T({ type: "recorder/statistics_during_period", start_time: new Date(a).toISOString(), end_time: e.toISOString(), statistic_ids: t.ids, period: "hour", types: ["change"] });
      t.ids.forEach((S) => ((u == null ? void 0 : u[S]) || []).forEach((x) => {
        const P = typeof x.start == "number" ? x.start : Date.parse(x.start), D = new Date(P).getHours();
        P >= a && D < o && (l[D] += Number(x.change) || 0);
      }));
      const f = new Date(e).setMinutes(0, 0, 0), v = await Promise.all(t.ids.map((S) => Promise.resolve(T({ type: "recorder/statistic_during_period", statistic_id: S, fixed_period: { start_time: new Date(f).toISOString(), end_time: e.toISOString() }, types: ["change"] })).then((x) => Number(x == null ? void 0 : x.change) || 0, () => 0)));
      l[o] = v.reduce((S, x) => S + x, 0);
    } catch {
    }
    return kc.set(t.id, { at: Date.now(), day: a, hours: l }), l;
  }
  async function Yu(t, e) {
    const a = await Uu(e);
    if (!t.isConnected) return;
    const o = Math.max(120, t.clientWidth || 260), r = Math.max(60, t.clientHeight || 130), l = 18, c = r - 18, u = o / 24, f = u * 0.72, v = (/* @__PURE__ */ new Date()).getHours(), S = a.map((N) => N ?? 0), x = Math.max(0, ...S), P = (N) => c - (x > 0 ? N / x * (c - l) : 0), D = (N) => N.toLocaleString(void 0, { maximumFractionDigits: N < 10 ? 2 : 1 }) + " " + e.unit, B = (N) => String(N).padStart(2, "0") + ":00", k = x > 0 ? S.indexOf(x) : -1;
    t.setAttribute("viewBox", "0 0 " + o + " " + r), t.setAttribute("aria-label", e.name + " today by the hour: " + D(e.value) + (k >= 0 ? ", most " + D(x) + " at " + B(k) : "")), t.innerHTML = [l, (l + c) / 2, c].map((N) => '<line x1="0" x2="' + o + '" y1="' + N + '" y2="' + N + '" stroke="var(--line)" stroke-width="1"/>').join("") + a.map((N, E) => N > 0 ? '<rect x="' + (E * u + (u - f) / 2).toFixed(1) + '" y="' + P(N).toFixed(1) + '" width="' + f.toFixed(1) + '" height="' + (c - P(N)).toFixed(1) + '" rx="2" fill="' + (E === v ? "var(--primary)" : "var(--text)") + '"' + (E === v ? "" : ' fill-opacity=".5"') + "/>" : "").join("") + [0, 6, 12, 18].map((N) => '<text x="' + (N * u).toFixed(1) + '" y="' + (r - 3) + '">' + String(N).padStart(2, "0") + "</text>").join("") + (k >= 0 ? '<text x="0" y="11">Most: ' + W(D(x)) + " at " + B(k) + "</text>" : "");
  }
  function Zu(t) {
    var e;
    (e = window.matchMedia) != null && e.call(window, "(prefers-reduced-motion: reduce)").matches || t.querySelectorAll("rect").forEach((a, o) => a.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], { duration: 500, delay: o * 18, easing: "cubic-bezier(.2,.7,.3,1)", fill: "backwards" }));
  }
  function Sc(t) {
    var o;
    if ((o = window.matchMedia) != null && o.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [e, a] = t.querySelectorAll("path");
    bu(t, a, [e].filter(Boolean));
  }
  let Di = null, Rs = 0;
  const Ps = (t) => !t.startsWith("light.") || y0.includes((xe.get(t) || "").toLowerCase()), Hs = () => Math.max(2, Jo((H == null ? void 0 : H.clientWidth) || 0).n), _c = (t) => {
    const e = ro(t);
    return e.sections.map((a, o) => a && (e.parts || [])[o]).filter(Boolean);
  }, $u = (t) => _c(t).slice(0, Mn(t) - 1);
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
  }, Ku = () => {
    var e, a;
    const t = (e = d()) == null ? void 0 : e.user;
    return (t == null ? void 0 : t.name) || ((a = Object.values(M).find((o) => {
      var r;
      return o.entity_id.startsWith("person.") && (t == null ? void 0 : t.id) && ((r = o.attributes) == null ? void 0 : r.user_id) === t.id;
    })) == null ? void 0 : a.attributes.friendly_name) || "";
  }, Xu = () => {
    const t = (/* @__PURE__ */ new Date()).getHours(), e = Ku();
    return (t >= 5 && t < 12 ? "Good morning" : t >= 12 && t < 18 ? "Good afternoon" : "Good evening") + (e ? ", " + e : "");
  }, Ac = (t, e, a, o) => (r) => '<section class="card tfCard tfDashCard ' + t + '" data-tf data-k="' + e + '" aria-label="' + a + '">' + (o ? '<div class="activityHeader">' + (e === "favs" ? '<button class="activityTitle tfTitleBtn" type="button" data-more="favourites" aria-label="Favourites. More info">' + a + "</button>" : '<div class="activityTitle">' + a + "</div>") + "</div>" : "") + '<div class="activityRows">' + r + "</div></section>";
  function Ju(t, e) {
    var l, c;
    t.dash = !0, t.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + ((C ? Ns() : re().welcome) ? '<span class="tfGreeting">' + W(Xu()) + "</span>" : "") + W(((c = (l = d()) == null ? void 0 : l.config) == null ? void 0 : c.location_name) || "Home") + "</h1>" }), e.length && t.push({ key: "sums", wrap: (u) => '<div class="tfDashBarRow" data-tf data-k="sums">' + Ac("tfDash-bar", "sums-bar", "Summaries", !1)(u).replace(" data-tf", "") + "</div>", tiles: e.map((u) => ({ key: "sum:" + u.key, html: la(u) })) }), !C && tt().length && t.push({ key: "areas", html: Et(0) });
    const a = Mo();
    if (a.length && t.push({ key: "favs", wrap: Ac("tfDash-favs", "favs", "Favourites", Bi()), tiles: a.map((u) => ({ key: "fav:" + u, html: vn(u, { area: !0 }) })) }), C)
      return vc(), qc() && t.push({ key: "dash:energy", html: Bs() }), Rs = Hs(), Cc(0).forEach((u) => t.push({
        key: "dash:tile:" + u,
        wrap: (f) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + W(u) + '">' + f + "</div>",
        tiles: [{ key: u, html: Lt(zt(u), u) }]
      })), t;
    const o = Wu();
    t.push({ key: "dash:act", html: un("dash:act", 0, "Activity", o.length ? o.map(zu) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), t.push({ key: "dash:energy", html: Bs() });
    const r = Hs();
    return Rs = r, Cc(r >= 3 ? r : r * 2).forEach((u) => t.push({
      key: "dash:tile:" + u,
      wrap: (f) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + W(u) + '">' + f + "</div>",
      tiles: [{ key: u, html: Ct(u) ? Lt(zt(u), u) : Zn(u, !1, $u(u)) }]
    })), qu(), vc(), t;
  }
  const Ir = 252, de = 16, Qu = 200, tf = Math.round(Ir * 1.25), ef = 60, La = ef + de, af = 3, Tc = {
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
  }, of = ["wx", "favs", "act", "energy", "avg"], Lc = ["XS", "S", "M", "L", "XL"], Dc = Lc.length, nf = ["Narrow", "Wide", "Really wide"], rf = { wx: 5, areas: 5, favs: 5, act: 5, energy: 4, avg: 4, aq: 4, pollen: 4, radar: 4, hourly: 4, sun: 4, moon: 4, uv: 4, humidity: 4, pressure: 4, wind: 4, visibility: 4 }, Ec = (t) => !t.includes(".") || !M[t] || t.startsWith("light.") && wn(t) ? Dc : Math.min(Dc, _c(t).length + 1), Mn = (t) => {
    const e = re().opts[t] || {}, a = Ec(t), o = Number(e.h) || (e.tall ? 5 : rf[t] || Bc);
    return Math.max(1, Math.min(a, o));
  }, Bc = 2, sf = 90, lf = 56, Da = (t) => {
    var e;
    return Tc[t] || (t.startsWith("room:") ? ((e = I.find((a) => "room:" + a.id === t)) == null ? void 0 : e.name) || "Area" : bt(t));
  }, cf = 128;
  let ca = !1, Qt = null, Qe = null, Os = !1, kn = /* @__PURE__ */ new Map(), Ei = 0, Xo = 0;
  const _o = ["title", "sums"], Jo = (t) => {
    const e = Math.max(1, Math.floor((t + de) / (Qu + de)));
    return { n: e, w: Math.max(1, Math.min(tf, Math.floor((t - (e - 1) * de) / e))) };
  }, Is = () => X(I), df = () => {
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
        return !["title", ...((a = et.home) == null ? void 0 : a.sums) === !1 ? [] : ["sums"], ...((o = et.home) == null ? void 0 : o.favs) === !1 ? [] : ["favs"], ...gf() ? ["wx"] : [], ...qc() ? ["energy"] : []].includes(e);
      }),
      opts: { favs: { h: 5 }, ...Object.fromEntries(t.map((e) => [e, { h: 5 }])) },
      tiles: t,
      known: Go,
      areasOff: []
    };
  }
  const re = () => C ? pf() : Fs(), Fs = () => {
    let t = { cells: {}, spans: {}, hidden: [], opts: {}, ...et.dash || {} };
    t.sumsOff && (t = { ...t, hidden: [...t.hidden, "sums"] });
    const e = Go.filter((a) => !(t.known || []).includes(a) && !t.hidden.includes(a));
    return e.length ? { ...t, hidden: [...t.hidden, ...e] } : t;
  };
  function Sn(t) {
    C || (et = { ...et, dash: { ...t, known: Go } }, Aa());
  }
  function _n() {
    const t = (e) => H.querySelector(e);
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
      ...[...H.querySelectorAll(".tfDashTiles > [data-k]")].map((e) => [e.dataset.k, e, 1, !0])
    ].filter(([, e]) => e == null ? void 0 : e.isConnected).map(([e, a, o, r = !1]) => ({ key: e, el: a, span: o, tile: r }));
  }
  const Rc = (t, e, a) => {
    var o;
    if (t.span === "full") return e;
    if (t.span === "areas") {
      const r = 2 * a + de;
      t.el.style.setProperty("--area-open", r + "px");
      const l = Math.ceil((r + Math.max(0, tt().length - 1) * (cf + de) + de) / (a + de));
      return Math.max(Math.min(e, 2), Math.min(l, e - (((o = re().cells.areas) == null ? void 0 : o.col) || 0)));
    }
    return Math.min(e, re().spans[t.key] ?? t.span);
  }, Pc = (t) => Mn(t.key), Hc = window.matchMedia("(max-width: 620px)"), uf = (t) => {
    const e = (t - 32 - 56) / 8, a = Math.ceil(tt().length / 8);
    return Math.max(1, Math.ceil((t * 982 / 1325 + 14 + a * e + (a - 1) * 8 + de) / La));
  };
  function Nc(t, e, a = null) {
    const o = re().cells, r = t.every((u) => !o[u.key] || o[u.key].col + u.cols <= e), l = (u) => o[u.key] || { row: 1e9, col: 0 };
    return (() => {
      const u = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map(), v = (k, N, E, R) => {
        for (let _ = N; _ < N + R; _++) for (let at = k; at < k + E; at++) if (u.has(at + "," + _)) return !1;
        return !0;
      }, S = (k, N, E) => {
        for (let R = E; R < E + k.rows; R++) for (let _ = N; _ < N + k.cols; _++) u.add(_ + "," + R);
        f.set(k.key, { col: N, row: E, cols: k.cols, rows: k.rows });
      }, x = (k, N, E) => {
        for (N = Math.max(0, Math.min(e - k.cols, N)), E = Math.max(0, E); !v(N, E, k.cols, k.rows); ) E++;
        S(k, N, E);
      }, P = (k) => {
        for (let N = 0; ; N++) for (let E = 0; E <= e - k.cols; E++) if (v(E, N, k.cols, k.rows)) {
          S(k, E, N);
          return;
        }
      };
      a && x(a, Qt.col, Qt.row);
      const D = t.filter((k) => k !== a), B = (k, N) => l(k).row - l(N).row || l(k).col - l(N).col;
      return r ? (D.filter((k) => o[k.key]).sort(B).forEach((k) => x(k, o[k.key].col, o[k.key].row)), D.filter((k) => !o[k.key]).forEach(P), f) : ([...D].sort(B).forEach(P), f);
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
        f.cols = Rc(f, c, Ir), f.rows = Pc(f) ?? Bc;
      }), o = Nc(u, c);
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
  const Jn = (t, e) => Sn({ ...t, cells: e, pegs: Jo(H.clientWidth).n });
  function Vs(t) {
    const e = H == null ? void 0 : H.querySelector('.tfAreas[data-k="areas"] .tfAreaGallery'), a = e == null ? void 0 : e.querySelector(".tfAreaPanel.active");
    if (!a || e.scrollWidth <= e.clientWidth) return;
    const o = e.getBoundingClientRect(), r = a.getBoundingClientRect(), l = r.right > o.right ? r.right - o.right : r.left < o.left ? r.left - o.left : 0;
    l && e.scrollBy({ left: l, behavior: t ? "smooth" : "auto" });
  }
  function Ve() {
    var R;
    if (requestAnimationFrame(() => Vs(!1)), setTimeout(() => Vs(!1), 360), !b || !H) return;
    const t = H.clientWidth, e = t < 2 * Ir + de, a = g.classList.contains("tfDash");
    C && (ca = !1), g.classList.toggle("tfOverview", C);
    const { n: o, w: r } = e ? { n: 2, w: Math.floor((t - de) / 2) } : Jo(t);
    ga.classList.add("tfPegs"), ga.style.setProperty("--peg-n", o), ga.style.setProperty("--peg-w", r + "px");
    const l = new Set(re().hidden);
    Go.forEach((_) => {
      var at;
      return (at = Qa[_]) == null ? void 0 : at.classList.toggle("tfNotAdded", l.has(_) && !(Qt != null && Qt.fromTray && Qt.key === _));
    }), kr(), g.classList.toggle("tfBoard", a), g.classList.toggle("tfEditing", a && ca && !e);
    const c = p("dashEditNav");
    !a && Eo && ll(!1), c && C ? (c.hidden = !a, Eo || (c.classList.remove("active"), c.setAttribute("aria-pressed", "false"), c.setAttribute("aria-label", "Edit Home page"), c.title = "Edit", c.innerHTML = ss)) : c && (c.hidden = !a || e, c.classList.toggle("active", ca), c.setAttribute("aria-pressed", String(ca)), c.setAttribute("aria-label", ca ? "Done editing" : "Edit custom dashboard"), c.title = ca ? "Done" : "Edit", c.innerHTML = ca ? Yp : ss);
    const u = a ? _n() : [];
    if ((!a || !C) && H.querySelectorAll(":scope > :is(.hcFloor,.hcFloorBox)").forEach((_) => _.remove()), !a) {
      H.style.height = "", H.querySelectorAll(".tfBoardItem").forEach((_) => {
        _.classList.remove("tfBoardItem", "tfBoardHidden"), _.style.left = _.style.top = _.style.width = _.style.height = "";
      }), (R = H.querySelector(".tfDash-act > .activityRows")) == null || R.style.removeProperty("max-height"), Us(!1), g.classList.contains("tfDash") && hf(), Te();
      return;
    }
    if (C) {
      vf(u, t, e);
      return;
    }
    H.style.setProperty("--peg-w", r + "px");
    const f = new Set(re().hidden), v = r + de;
    Qt != null && Qt.fromTray && f.delete(Qt.key), u.forEach((_) => _.el.classList.toggle("tfBoardHidden", f.has(_.key)));
    const S = u.filter((_) => !f.has(_.key) && getComputedStyle(_.el).display !== "none");
    let x = 0;
    S.filter((_) => _o.includes(_.key)).forEach((_) => {
      _.el.classList.add("tfBoardItem"), Object.assign(_.el.style, { width: t + "px", height: "", left: "0px", top: x + "px" });
      const at = _.key === "sums" && _.el.querySelector(".tfDash-bar"), St = at ? at.querySelectorAll(".activityRow").length : 0;
      at && (at.style.maxWidth = "none");
      for (let Rt = 1; at && Rt <= St && (at.style.setProperty("--bar-cols", String(Math.ceil(St / Rt))), !(at.offsetWidth <= t)); Rt++)
        ;
      at && (at.style.maxWidth = ""), x += _.el.offsetHeight + de;
    }), Xo = x;
    const P = S.filter((_) => !_o.includes(_.key));
    P.forEach((_) => {
      _.cols = Rc(_, o, r), _.el.classList.add("tfBoardItem"), _.el.style.width = (_.cols === o ? t : _.cols * r + (_.cols - 1) * de) + "px", _.el.style.height = "", _.rows = Pc(_) ?? Math.max(1, Math.ceil((_.el.offsetHeight + de - 6) / La)), _.key === "areas" && Hc.matches && (_.rows = uf(parseFloat(_.el.style.width)));
    });
    const D = Qt && P.find((_) => _.key === Qt.key), B = e && qs().map((_) => _.key), k = (_) => B.includes(_.key) ? B.indexOf(_.key) : -1, N = e ? ff([...P].sort((_, at) => k(_) - k(at)), o) : Nc(P, o, D);
    N.forEach((_) => Object.assign(_, { x: _.cols === o ? 0 : _.col * v, y: Xo + _.row * La, w: _.cols === o ? t : _.cols * r + (_.cols - 1) * de, h: _.rows * La - de })), P.forEach((_) => {
      const at = N.get(_.key);
      _.el.style.height = at.h + "px", _.el.dataset.rows = e && _.key === "wx" ? 5 : Mn(_.key), _.key === "areas" && _.el.querySelectorAll(".tfAreaPanel .tfRoomTile, .tfAreaStage>.tfRoomTile").forEach((St) => {
        St.dataset.rows = _.el.dataset.rows;
      }), _.el.toggleAttribute("data-narrow", !e && at.cols === 1 && o > 1), _.el.dataset.cols = at.cols, _.el.classList.contains("tfDac") && _.el.style.setProperty("--tf-dac-pad", at.h - sf + "px"), !(_ === D && !Qt.fromTray) && (_.el.style.left = at.x + "px", _.el.style.top = at.y + "px");
    }), e || (kn = N), Ws([...S.filter((_) => _o.includes(_.key)), ...P.slice().sort((_, at) => N.get(_.key).row - N.get(at.key).row || N.get(_.key).col - N.get(at.key).col)].map((_) => _.el)), [["favs", ".tfDash-favs"], ["act", ".tfDash-act"]].forEach(([_, at]) => {
      const St = N.get(_), Rt = St && H.querySelector(at), Wt = Rt == null ? void 0 : Rt.querySelector(":scope > .activityRows"), Ft = Rt == null ? void 0 : Rt.querySelector(":scope > .activityHeader");
      if (!Wt || !Ft) return;
      const kt = Wt.getBoundingClientRect().top - Rt.getBoundingClientRect().top, Tt = St.rows === 1 ? St.h : Math.floor(St.h - kt - parseFloat(getComputedStyle(Rt).paddingBottom)), ue = Math.max(1, Math.floor(Tt / lf));
      Wt.style.setProperty("--fill-row", (Tt / ue).toFixed(2) + "px"), Wt.style.maxHeight = Tt + "px";
    }), Ei = Math.max(0, ...[...N.values()].map((_) => _.row + _.rows));
    let E = Xo + Ei * La - de;
    E = Us(ca && !e, P, N, E, o, r), H.style.height = E + "px", requestAnimationFrame(() => g.classList.add("tfBoardReady")), u.forEach((_) => Gs.observe(_.el)), ld(), Te();
  }
  const Co = { row: 337, nameGap: 16, sumsGap: 16, full: 1336, floorTop: 12, floorHead: 24, floorGap: 16 }, Oc = { s: { w: 252, h: 136, rows: 2 }, m: { w: 252, h: 212, rows: 3 }, l: { w: 252, h: 288, rows: 4 } }, Ic = () => {
    var t;
    return Oc[(t = et.home) == null ? void 0 : t.areaSize] ? et.home.areaSize : "s";
  }, js = () => {
    var t;
    return ["rows", "columns", "bento"].includes((t = et.home) == null ? void 0 : t.areaLayout) ? et.home.areaLayout : "bento";
  }, Fc = () => {
    var t;
    return ((t = et.home) == null ? void 0 : t.cardsAs) === "rows" ? "rows" : "stacked";
  }, mf = { byFloor: !0, bentoBoxes: !0, bentoMixed: !1, favsTitle: !1 }, Bi = () => C ? Ao("favsTitle") : et.favsTitle !== !1, gf = () => {
    var t;
    return !!((t = et.home) != null && t.weather && yn());
  }, qc = () => {
    var t;
    return !!((t = et.home) != null && t.energy && (ja != null && ja.length));
  }, Ao = (t) => {
    var e;
    return ((e = et.home) == null ? void 0 : e[t]) ?? mf[t];
  };
  function bf() {
    var r;
    const t = Object.values(((r = d()) == null ? void 0 : r.floors) || {}), e = new Set(t.map((l) => l.floor_id)), a = t.map((l) => ({ id: l.floor_id, name: l.name, rooms: I.filter((c) => c.floor === l.floor_id) })), o = I.filter((l) => !e.has(l.floor));
    return o.length && a.push({ id: "", name: t.length ? "Other areas" : "", rooms: o }), a;
  }
  const Wc = (t) => t.classList.toggle("hcMore", t.scrollHeight - t.scrollTop - t.clientHeight > 1);
  let _e = null, Vc = [], Fr = /* @__PURE__ */ new Map();
  function zs(t) {
    let e = H.querySelector(".hcHomeLand");
    if (!t) {
      e == null || e.remove();
      return;
    }
    e || (e = Object.assign(document.createElement("div"), { className: "tfBoardLand hcHomeLand" }), H.appendChild(e)), Object.assign(e.style, { left: t.x + "px", top: t.y + "px", width: t.w + "px", height: t.h + "px" });
  }
  function wf(t) {
    if (!C || !Eo || t.button !== 0 || H.clientWidth < 2 * Ir + de) return;
    const e = t.target.closest(".tfBoardItem"), a = e && _n().find((u) => u.el === e);
    if (!a || _o.includes(a.key) || Ct(a.key)) return;
    t.preventDefault();
    const o = H.getBoundingClientRect(), r = Fr.get(a.key);
    _e = { key: a.key, el: e, on: !1, x0: t.clientX, y0: t.clientY, left: r.x, top: r.y, order: [...Vc] };
    const l = (u) => {
      const f = u.clientX - _e.x0, v = u.clientY - _e.y0;
      if (!_e.on && Math.hypot(f, v) < 5) return;
      _e.on || (_e.on = !0, e.classList.add("tfDragging"), Fe() || e.animate([{ scale: "1" }, { scale: "1.05" }, { scale: "1.02" }], { duration: 260, easing: "cubic-bezier(.2,1.35,.4,1)" })), Object.assign(e.style, { left: _e.left + f + "px", top: _e.top + v + "px" });
      const S = u.clientX - o.left, x = u.clientY - o.top + H.scrollTop;
      let P = null, D = 1 / 0;
      if (Fr.forEach((E, R) => {
        if (R === a.key || !_e.order.includes(R)) return;
        const _ = Math.hypot(S - (E.x + E.w / 2), x - (E.y + E.h / 2));
        _ < D && (D = _, P = { key: R, b: E });
      }), !P) return;
      const B = _e.order.filter((E) => E !== a.key), k = B.indexOf(P.key) + (S > P.b.x + P.b.w / 2 ? 1 : 0), N = [...B.slice(0, k), a.key, ...B.slice(k)];
      N.join() !== _e.order.join() ? (_e.order = N, Ve()) : zs(Fr.get(a.key));
    }, c = () => {
      removeEventListener("pointermove", l), removeEventListener("pointerup", c), removeEventListener("pointercancel", c);
      const u = _e;
      _e = null, e.classList.remove("tfDragging"), u.on && Ma({ order: u.order }), Ve(), u.on && !Fe() && setTimeout(() => Gl(e), 340);
    };
    addEventListener("pointermove", l), addEventListener("pointerup", c), addEventListener("pointercancel", c);
  }
  function vf(t, e, a) {
    var Vd;
    const o = new Set(re().hidden);
    t.forEach((ut) => ut.el.classList.toggle("tfBoardHidden", o.has(ut.key)));
    const r = t.filter((ut) => !o.has(ut.key) && getComputedStyle(ut.el).display !== "none"), l = de, c = a ? { w: Math.floor((e - l) / 2) } : Jo(e), u = Math.min(e, Co.full);
    let f = 0;
    const v = qi();
    g.classList.toggle("hcSumsFit", Xc()), g.classList.toggle("hcFavStrip", v);
    const S = r.filter((ut) => _o.includes(ut.key) || v && ut.key === "favs");
    S.sort((ut, Nt) => ["title", "sums", "favs"].indexOf(ut.key) - ["title", "sums", "favs"].indexOf(Nt.key)), S.forEach((ut) => {
      ut.el.classList.add("tfBoardItem"), ut.el.toggleAttribute("data-narrow", !1), Object.assign(ut.el.style, { width: (ut.key === "title" ? e : u) + "px", height: "", left: "0px", top: f + "px" });
      const Nt = ut.key !== "title" && (ut.el.querySelector(".tfDash-bar>.activityRows") || ut.key === "favs" && ut.el.querySelector(":scope>.activityRows")), Le = Nt ? Nt.children.length : 0;
      if (Nt && (Nt.classList.remove("hcBarRows"), !a && Nt.scrollWidth > Nt.clientWidth + 1))
        for (let Yt = 2; Yt <= Le && (Nt.classList.add("hcBarRows"), Nt.style.setProperty("--bar-cols", String(Math.ceil(Le / Yt))), !(Nt.scrollWidth <= Nt.clientWidth + 1)); Yt++)
          ;
      f += ut.el.offsetHeight + (ut.key === "title" ? Co.nameGap : Co.sumsGap);
    });
    const x = ["favs", "wx", "energy"], P = (_e == null ? void 0 : _e.order) || ((Vd = et.home) == null ? void 0 : Vd.order), D = P ? [...P.filter((ut) => x.includes(ut)), ...x.filter((ut) => !P.includes(ut))] : x;
    Vc = D;
    const B = r.filter((ut) => x.includes(ut.key) && !(v && ut.key === "favs")).sort((ut, Nt) => D.indexOf(ut.key) - D.indexOf(Nt.key));
    Fr = /* @__PURE__ */ new Map();
    const k = (ut, Nt) => {
      if (Fr.set(ut.key, Nt), Object.assign(ut.el.style, { width: Nt.w + "px", height: Nt.h + "px" }), _e != null && _e.on && _e.key === ut.key) {
        zs(Nt);
        return;
      }
      Object.assign(ut.el.style, { left: Nt.x + "px", top: Nt.y + "px" });
    }, N = a ? e : 2 * c.w + l, E = Co.row, R = Fc() === "stacked" && !a && B.length > 0;
    let _ = 0, at = 0, St = f;
    B.forEach((ut) => {
      ut.el.classList.add("tfBoardItem"), ut.el.dataset.rows = 5, ut.el.dataset.cols = 2, ut.el.toggleAttribute("data-narrow", !1), !R && _ && _ + N > e && (f += at + l, _ = 0, at = 0);
      let Nt = E;
      if ((a || ut.key === "favs") && (Object.assign(ut.el.style, { width: N + "px", height: "" }), Nt = ut.el.offsetHeight), R) {
        k(ut, { x: 0, y: St, w: N, h: Nt }), St += Nt + l;
        return;
      }
      k(ut, { x: _, y: f, w: N, h: Nt }), _ += N + l, at = Math.max(at, Nt);
    }), B.length && !R && (f += at + l);
    const Rt = R ? N + l : 0, Wt = R ? e - N - l : e, Ft = a ? "l" : Ic(), kt = Oc[Ft], Tt = js(), ue = Ao("byFloor"), me = c.w, ge = kt.h, Re = a ? 2 : Math.max(1, Math.floor((Wt + l) / (me + l))), sr = new Map(r.filter((ut) => Ct(ut.key)).map((ut) => [ut.key, ut])), Pa = (ue ? bf() : [{ id: "", name: "", icon: "", rooms: I }]).map((ut) => ({ ...ut, cards: ut.rooms.map((Nt) => sr.get("room:" + Nt.id)).filter(Boolean) })).filter((ut) => ut.cards.length), Zi = Tt === "bento", $i = Zi && Ao("bentoMixed"), xh = Zi && ue && Ao("bentoBoxes"), Mh = Tt === "columns" && ue && !a, Po = 12, qd = (ut) => ut.name ? Co.floorHead + Co.floorGap : 0, Kr = (ut, Nt, Le) => {
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
      let ka = qd(ut);
      return Zt.forEach((Kt, po) => {
        we[po] = ka, ka += Kt + l;
      }), { h: ka - (se ? l : 0), places: ie.map((Kt) => ({ it: Kt.it, x: Kt.c * (Le + l), y: we[Kt.r], w: Kt.sc * Le + (Kt.sc - 1) * l, h: Zt.slice(Kt.r, Kt.r + Kt.sr).reduce((po, Qo) => po + Qo, 0) + (Kt.sr - 1) * l })) };
    }, Bl = new Map([...H.querySelectorAll(":scope > .hcFloor")].map((ut) => [ut.dataset.floor, ut])), Rl = new Map([...H.querySelectorAll(":scope > .hcFloorBox")].map((ut) => [ut.dataset.floor, ut])), Wd = [], kh = (ut, Nt, Le, Yt) => {
      if (!ut.name) return;
      let ie = Bl.get(ut.id);
      Bl.delete(ut.id), ie || (ie = Object.assign(document.createElement("div"), { className: "hcFloor" }), ie.dataset.floor = ut.id, H.appendChild(ie)), ie.dataset.sig !== ut.name && (ie.dataset.sig = ut.name, ie.innerHTML = '<h2 class="hcFloorName">' + W(ut.name) + "</h2>"), Object.assign(ie.style, { left: Nt + "px", top: Le + "px", width: Yt + "px" }), Wd.push(ie);
    }, Sh = (ut, Nt, Le, Yt, ie) => {
      let se = Rl.get(ut.id);
      Rl.delete(ut.id), se || (se = Object.assign(document.createElement("div"), { className: "hcFloorBox" }), se.dataset.floor = ut.id, se.setAttribute("aria-hidden", "true"), H.prepend(se)), Object.assign(se.style, { left: Nt + "px", top: Le + "px", width: Yt + "px", height: ie + "px" });
    }, _h = (ut) => parseFloat(getComputedStyle(ut.cards[0].el).paddingLeft) || 0, Pl = (ut, Nt, Le, Yt, ie = 0) => {
      kh(ut, Le + ie, Yt, (Nt.w ?? e) - ie), Nt.places.forEach((se) => k(se.it, { x: Le + se.x, y: Yt + se.y, w: se.w, h: se.h }));
    };
    if (Pa.length && B.length && !R && (f += Co.floorTop), Mh) {
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
        }), Zt.push({ x0: Yt, x1: ie, t: se }), ut = Zt.sort((we, ka) => we.x0 - ka.x0);
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
        const we = { ...Kr(Yt, Zt.cc, Zt.inner), w: Zt.cc * Zt.inner + (Zt.cc - 1) * l }, ka = Zt.bw, Kt = Zt.h, po = Zt.x, Qo = Zt.t;
        Sh(Yt, Rt + po, Qo, ka, Kt), Pl(Yt, we, Rt + po + Po, Qo + Po, _h(Yt)), Le(po, Math.min(Wt, po + ka + l), Qo + Kt + l);
      }), f = Math.max(...ut.map((Yt) => Yt.t));
    } else {
      const ut = (Nt) => {
        var se;
        if (!((se = et.home) != null && se.fitTogether) || a) return Re;
        const Le = R ? St - l - f : null, Yt = (Zt) => {
          const we = Nt.cards.length + ($i && Nt.cards.length > 1 && Zt >= 2 ? 3 : 0), ka = Math.ceil(we / Zt);
          return { holes: ka * Zt - we, rows: ka, h: qd(Nt) + ka * ge + (ka - 1) * l, w: Zt * me + (Zt - 1) * l };
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
    R && (f = Math.max(f, St)), Bl.forEach((ut) => ut.remove()), Rl.forEach((ut) => ut.remove()), _e != null && _e.on || zs(null), H.style.height = Math.max(0, f - l) + "px", Ws([...S.map((ut) => ut.el), ...B.map((ut) => ut.el), ...Wd, ...Pa.flatMap((ut) => ut.cards.map((Nt) => Nt.el))]), Us(!1), t.forEach((ut) => [...ut.el.children].forEach((Nt) => Nt.toggleAttribute("inert", Eo)));
    const Hl = H.querySelector(".tfDash-favs>.activityRows");
    Hl && (Hl.classList.toggle("hcFadeList", !v), Wc(Hl)), requestAnimationFrame(() => g.classList.add("tfBoardReady")), t.forEach((ut) => Gs.observe(ut.el)), Te();
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
    for (let x = 0; x <= t; x++) for (let P = 0; P <= e; P++) {
      const D = x * o - c, B = P * La - c;
      S += "M" + (D - v) + " " + B + "H" + (D + v) + "M" + D + " " + (B - v) + "V" + (B + v);
    }
    return '<svg width="' + r + '" height="' + l + '" viewBox="0 0 ' + r + " " + l + '"><defs><pattern id="tfGridDots" patternUnits="userSpaceOnUse" x="' + -c + '" y="' + -c + '" width="' + u.toFixed(3) + '" height="' + f + '"><circle cx="0" cy="0" r="1.4"></circle><circle cx="' + u.toFixed(3) + '" cy="0" r="1.4"></circle><circle cx="0" cy="' + f + '" r="1.4"></circle><circle cx="' + u.toFixed(3) + '" cy="' + f + '" r="1.4"></circle></pattern></defs><rect class="tfGridDots" x="' + -c + '" y="' + -c + '" width="' + (r + de) + '" height="' + (l + de) + '" fill="url(#tfGridDots)"></rect><path class="tfGridCross" d="' + S + '"></path></svg>';
  }
  function Us(t, e = [], a = /* @__PURE__ */ new Map(), o = 0, r = 1, l = Ir) {
    H.querySelectorAll(".tfEditChips").forEach((S) => {
      (!t || !S.closest(".tfBoardItem")) && S.remove();
    }), H.querySelectorAll(".tfFavHides").forEach((S) => S.remove()), H.querySelectorAll(".tfBoardItem").forEach((S) => [...S.children].forEach((x) => {
      x.classList.contains("tfEditChips") || x.toggleAttribute("inert", t);
    }));
    let c = H.querySelector(".tfBoardCells"), u = H.querySelector(".tfBoardLand");
    if (!t)
      return c == null || c.remove(), u == null || u.remove(), io(), o;
    const f = Ei + af;
    if (c || (c = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), c.setAttribute("aria-hidden", "true"), H.prepend(c)), c.style.top = Xo + "px", c.dataset.size !== r + "x" + f + "x" + l && (c.dataset.size = r + "x" + f + "x" + l, c.innerHTML = yf(r, f, l)), o = Math.max(o, Xo + f * La - de), e.forEach((S) => {
      const x = S.el;
      !x || x.querySelector(":scope > .tfEditChips") || x.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + oi + '</span><button class="tfEditChip" type="button" data-board-more="' + W(S.key) + '" aria-label="' + W(Da(S.key)) + ' options" aria-haspopup="menu">' + f0 + "</button></div>");
    }), Qt && a.has(Qt.key)) {
      u || (u = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), H.appendChild(u));
      const S = a.get(Qt.key);
      Object.assign(u.style, { left: S.x + "px", top: S.y + "px", width: S.w + "px", height: S.h + "px" });
    } else u == null || u.remove();
    const v = H.querySelector(".tfDash-favs.tfBoardItem:not(.tfBoardHidden)");
    if (v) {
      const S = v.getBoundingClientRect();
      v.insertAdjacentHTML("beforeend", '<div class="tfFavHides">' + [...v.querySelectorAll('[data-k^="fav:"]')].map((x) => {
        const P = x.getBoundingClientRect(), D = x.dataset.k.slice(4);
        return '<button class="tfFavHide" type="button" data-fav-hide="' + W(D) + '" aria-label="Hide ' + W(bt(D)) + ' from the dashboard" style="left:' + Math.round(P.right - S.left - 42) + "px;top:" + Math.round(P.top - S.top + (P.height - 32) / 2) + 'px">' + Up + "</button>";
      }).join("") + "</div>");
    }
    return o;
  }
  let Ys = "";
  function Zs(t) {
    ca = t, t || (Qt = null, To = Lo = !1, io()), Ve(), t ? (Ys = JSON.stringify(et), tr(Ut, "Edit custom dashboard", null)) : Ys && JSON.stringify(et) !== Ys && Ea("Changes saved");
  }
  function xf(t, e) {
    var N, E;
    io();
    const a = kn.get(t), { n: o } = Jo(H.clientWidth), r = re(), l = r.spans[t] ?? (Ct(t) ? 1 : 2);
    if (!a) return;
    const c = a.cols >= o, u = (R, _, at) => '<button type="button" role="menuitem" data-board-act="' + R + '"' + (at ? " disabled" : "") + ">" + _ + "</button>", f = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    f.setAttribute("role", "menu"), f.setAttribute("aria-label", Da(t) + " options");
    const v = H.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]'), S = Ec(t), x = Mn(t), P = '<div class="tfHeight" role="group" aria-label="Height"><span class="tfHeightLabel" aria-hidden="true">Height</span><div class="tfHeightTabs">' + Lc.map((R, _) => '<button type="button" role="menuitemradio" aria-checked="' + (_ + 1 === x) + '" aria-label="' + R + ", " + (_ + 1) + (_ ? " rows" : " row") + '" data-board-act="h:' + (_ + 1) + '"' + (_ < S ? "" : " disabled") + ">" + R + "</button>").join("") + "</div></div>", D = of.includes(t) || Ct(t) ? '<div class="tfHeight tfWidth" role="group" aria-label="Width"><span class="tfHeightLabel" aria-hidden="true">Width</span><div class="tfHeightTabs">' + nf.map((R, _) => '<button type="button" role="menuitemradio" aria-checked="' + (_ + 1 === Math.min(l, o)) + '" aria-label="' + R + ", " + (_ + 1) + (_ ? " columns" : " column") + '" data-board-act="w:' + (_ + 1) + '"' + (_ < o ? "" : " disabled") + ">" + R + "</button>").join("") + "</div></div>" : "", B = t === "radar" ? '<div class="tfHeight tfSource" role="group" aria-label="Source"><span class="tfHeightLabel" aria-hidden="true">Source</span><div class="tfSourceList">' + vs().map(([R, _]) => '<button type="button" role="menuitemradio" aria-checked="' + (R === Mr()) + '" data-board-act="src:' + W(R) + '">' + W(_) + "</button>").join("") + "</div></div>" : "";
    f.innerHTML = P + D + B + (t === "energy" ? u("graph", (((N = r.opts.energy) == null ? void 0 : N.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + u("left", "Move left", c || a.col === 0) + u("right", "Move right", c || a.col + a.cols >= o) + u("up", "Move up", a.row <= 0) + u("down", "Move down") + (v ? u("remove", "Remove") : u("hide", "Hide")), H.appendChild(f);
    const k = Math.min(a.x + a.w - f.offsetWidth, H.clientWidth - f.offsetWidth);
    Object.assign(f.style, { left: Math.max(0, k) + "px", top: a.y + 28 + "px" }), Qe = { key: t, menu: f, opener: e }, (E = f.querySelector("button:not([disabled])")) == null || E.focus();
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
    e === "graph" && (ma.delete("dash:energy"), Be()), e.startsWith("src:") && ((f = ke == null ? void 0 : ke.get("radar")) == null || f.refresh(), Ae == null || Ae.refresh()), e.startsWith("h:") && t.includes(".") && Be(), Ve(), e !== "hide" ? (v = H.querySelector('[data-board-more="' + CSS.escape(t) + '"]')) == null || v.focus() : Ea(Da(t) + " hidden", Fi(a));
  }
  const jc = (t) => {
    var e;
    return Go.includes(t) && !(((e = et.dash) == null ? void 0 : e.cells) || {})[t] ? " added" : " put back";
  };
  function $s(t) {
    const e = re(), a = Da(t) + jc(t);
    Sn({ ...e, hidden: e.hidden.filter((o) => o !== t) }), Ve(), Ea(a);
  }
  const Pi = () => re().tiles || [...H.querySelectorAll(".tfDashTiles > [data-k]")].map((t) => t.dataset.k).filter((t) => !re().hidden.includes(t));
  function zc(t, e) {
    const a = re();
    Jn({ ...a, tiles: t, hidden: a.hidden.filter((o) => !o.includes(".")) }, e), Be(), Te();
  }
  const Gc = (t) => {
    zc([...Pi().filter((e) => e !== t), t], Cn()), Ea(Da(t) + " added"), Af(t);
  }, kf = (t) => {
    const e = et, a = Cn();
    delete a[t], zc(Pi().filter((o) => o !== t), a), Ea(Da(t) + " removed", Fi(e));
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
  let qr = null, Wr = 0, An = 0, Uc = -1 / 0;
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
    !da.hidden || performance.now() - Uc < _f ? a() : Wr = setTimeout(a, Sf);
  }
  function Ni() {
    clearTimeout(Wr), clearTimeout(An), da.hidden || (Uc = performance.now()), da.hidden = !0, qr = null;
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
  const Yc = new IntersectionObserver((t) => t.forEach((e) => {
    e.isIntersecting && !e.target.closest("[inert]") && (Yc.unobserve(e.target), Js(e.target));
  }), { threshold: 1 });
  let Qs = !1;
  new MutationObserver(() => {
    Qs || $t.names !== "scroll" || (Qs = !0, setTimeout(() => {
      Qs = !1, n.querySelectorAll(Oi).forEach((t) => {
        !t.dataset.glided && Xs(t) && (t.dataset.glided = "1", Yc.observe(t));
      });
    }, 300));
  }).observe(n, { childList: !0, subtree: !0 });
  const Fi = (t) => () => {
    et = t, Aa(), Be(), Ve(), Te();
  };
  function Af(t) {
    const e = () => H.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]');
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
    const { n: a, w: o } = Jo(H.clientWidth), r = Ut.getBoundingClientRect().left - H.getBoundingClientRect().left, l = (f) => f * (o + de) + e.cols * o + (e.cols - 1) * de <= r;
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
  const Zc = /^(light|switch|cover|climate|fan|lock|valve|media_player|humidifier|vacuum|scene|script|alarm_control_panel|water_heater|input_boolean)\./, $c = [["page", "Page"], ["cards", "Cards"], ["areas", "Areas"], ["favs", "Favourites"]];
  let Qn = "page";
  const Lf = (t, e) => '<section class="hcRowsCard hcTrayList">' + t.map(([a, o]) => '<button class="hcRow hcConfigRow" type="button" ' + e + '="' + a + '"><span class="hcRowText"><span class="hcRowName">' + W(o) + '</span></span><span class="hcRowEnd">' + oc + "</span></button>").join("") + "</section>", tr = (t, e, a, o) => {
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
  Ut.setAttribute("aria-label", "Edit custom dashboard"), Ut.innerHTML = '<button class="tfTrayTuck" type="button" data-tray-tuck></button><div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit custom dashboard</div><button class="pill" type="button" data-tray-done>Done</button></div><div class="tabs rubberTabs hcTrayTabs" role="tablist" aria-label="Edit custom dashboard"><div class="rubberIndicator" aria-hidden="true"></div>' + $c.map(([t, e], a) => '<button class="tab segBtn' + (a ? "" : " active") + '" type="button" role="tab" aria-selected="' + !a + '" data-tray-tab="' + t + '">' + e + "</button>").join("") + '</div><section class="tfTraySection" data-tray="welcome"></section><section class="tfTraySection" data-tray="cards"></section><section class="tfTraySection" data-tray="weather"></section><section class="tfTraySection"><div class="sectionLabel">Tiles</div><p class="tfTrayNote">Remove a tile from its ⋯.</p><button class="pill tfTrayAdd hcAddBtn" type="button" data-tile-add aria-expanded="false">' + is + '<span>Add tile</span></button><div class="tfTrayPick" data-pick="tiles" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-tile-search><ul class="tfTrayList" data-tray="tilepick"></ul></div></section><section class="tfTraySection"><div class="sectionLabel">Areas</div><p class="tfTrayNote">Which areas the Areas card shows. Drag to change their order, here and on Home.</p><button class="pill tfTrayAdd hcAddBtn" type="button" data-room-add aria-expanded="false">' + is + '<span>Add area</span></button><ul class="tfTrayList" data-tray="roompick" hidden></ul><ul class="tfTrayList hcHeList" data-tray="areas"></ul></section><section class="tfTraySection" data-tray="phone"></section><section class="tfTraySection"><div class="sectionLabel">Favourites</div><ul class="tfTrayList" data-tray="favs"></ul><button class="pill tfTrayAdd hcAddBtn" type="button" data-fav-add aria-expanded="false">' + is + '<span>Add favourite</span></button><div class="tfTrayPick" data-pick="favs" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-fav-search><ul class="tfTrayList" data-tray="pick"></ul></div><div class="toggleRow tfTraySuggest" data-tray="favtitle"></div><div class="toggleRow tfTraySuggest" data-tray="suggest"></div></section></div>', g.appendChild(Ut);
  let so = !1, To = !1, Lo = !1, Vr = !1, ta = null, Do = !1;
  const el = {}, za = (t, e) => {
    if (el[t] === e) return;
    el[t] = e;
    const a = Ut.querySelector('[data-tray="' + t + '"]');
    a.innerHTML = e, Ta(a);
  }, al = (t, e) => '<span class="tfTrayName"><span class="activityRowName">' + W(bt(t)) + '</span><span class="activityRowMeta">' + W(e) + "</span></span>", Bf = (t, e, a) => '<li class="tfTrayFav' + (e ? " off" : "") + '" data-tray-fav="' + W(t) + '"><span class="tfTrayGrip" aria-hidden="true">' + oi + '</span><span class="tfIcon"' + fe(t, Je(t)) + "></span>" + al(t, e ? "Hidden" + (xe.get(t) ? " · " + xe.get(t) : "") : xe.get(t) || Oe(t)) + '<button class="tfTrayBtn" type="button" data-fav-eye="' + W(t) + '" aria-pressed="' + !e + '" aria-label="' + (e ? "Show " : "Hide ") + W(bt(t)) + ' on the dashboard">' + (e ? Up : h0) + "</button>" + (a ? '<button class="tfTrayBtn" type="button" data-fav-remove="' + W(t) + '" aria-label="Remove ' + W(bt(t)) + ' from favourites">' + ec + "</button>" : "<span></span>") + "</li>";
  function ol(t, e, a, o) {
    const r = t.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return Object.keys(M).filter((c) => e(c) && !a.has(c) && M[c].state !== "unavailable").filter((c) => {
      const u = (bt(c) + " " + (xe.get(c) || "") + " " + c).toLowerCase();
      return r.every((f) => u.includes(f));
    }).sort((c, u) => (xe.get(c) || "~").localeCompare(xe.get(u) || "~") || bt(c).localeCompare(bt(u))).slice(0, 40).map((c) => '<li><button class="tfTrayPickItem" type="button" ' + o + '="' + W(c) + '"><span class="tfIcon"' + fe(c, Je(c)) + "></span>" + al(c, xe.get(c) || "—") + "</button></li>").join("") || '<li class="tfTrayNote">Nothing matches.</li>';
  }
  const Rf = "https://www.home-assistant.io/dashboards/", Kc = {
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
  const Tn = (t) => '<button class="hcInfoBtn" type="button" data-info="' + t + '" aria-expanded="false" aria-label="About ' + W(Kc[t][0]) + '">' + ac + "</button>", xa = (t, e, a) => '<button class="switch' + (t ? " on" : "") + '" type="button" role="switch" aria-checked="' + t + '" aria-label="' + W(e) + '" ' + a + "></button>", sl = (t) => '<button class="tfTrayBtn hcHeGrip" type="button" data-he-grip aria-label="Move ' + W(t) + '. Use the up and down arrows">' + oi + "</button>", Xc = () => {
    var t;
    return ((t = et.home) == null ? void 0 : t.sumsWidth) === "fit";
  }, qi = () => {
    var t;
    return ((t = et.home) == null ? void 0 : t.favsAs) === "strip";
  }, jr = (t, e, a, o) => '<div class="hcHeLine hcHeChoiceLine"><span class="activityRowName">' + t + '</span><div class="themeChoice hcHeChoice" role="group" aria-label="' + W(t) + '">' + o.map(([r, l]) => '<button class="wxLayoutBtn" type="button" ' + e + '="' + r + '" aria-pressed="' + (a === r) + '">' + l + "</button>").join("") + "</div></div>", Jc = () => So(!0).filter((t) => ei[t.key]).map((t) => t.key);
  function Ln() {
    var f, v, S, x, P, D, B;
    if (!Eo) return;
    const t = Bt(), e = (k) => '<li class="hcHeRow" data-he-id="' + W(k) + '">' + sl(bt(k)) + '<span class="tfIcon"' + fe(k, Je(k)) + "></span>" + al(k, xe.get(k) || Oe(k)) + '<button class="tfTrayBtn" type="button" data-he-remove="' + W(k) + '" aria-label="Take ' + W(bt(k)) + ' off Favourites">' + ec + "</button></li>", a = (k) => {
      const N = ei[k];
      return '<li class="hcHeRow hcHeSum" data-he-id="' + W(k) + '"' + (N.colour && Wn(N.colour) ? ' style="' + Wn(N.colour).slice(1) + '"' : "") + ">" + sl(N.name) + '<span class="tfIcon"' + fe("", N.icon, N.name) + '></span><span class="activityRowName">' + W(N.name) + "</span>" + xa(xn(k), N.name, 'data-he-sum="' + W(k) + '"') + "</li>";
    }, o = ((f = be.querySelector("[data-he-search]")) == null ? void 0 : f.value) || "", r = [["page", "Page"], ["favs", "Favourites"], ["sums", "Summaries"], ["areas", "Areas"]], l = new Set(((v = et.home) == null ? void 0 : v.areasOff) || []), c = (k) => '<li class="hcHeRow" data-he-id="' + W(k.id) + '">' + sl(k.name) + '<span class="tfIcon"><span class="tfAreaGlyph"' + fe("area:" + k.id, k.icon || "mdi:texture-box", k.name) + '></span></span><span class="activityRowName">' + W(k.name) + "</span>" + xa(!l.has(k.id), "Show " + k.name + " on Home", 'data-he-area="' + W(k.id) + '"') + "</li>", u = {
      page: '<div class="hcHeLine"><span class="activityRowName">Welcome message</span>' + Tn("welcome") + xa(Ns(), "Welcome message", "data-he-welcome") + "</div>" + // the weather card and Energy today, where the house has them
      (yn() ? '<div class="hcHeLine"><span class="activityRowName">Weather</span>' + Tn("weather") + xa(!!((S = et.home) != null && S.weather), "Weather", 'data-he-card="weather"') + "</div>" : "") + (ja != null && ja.length ? '<div class="hcHeLine"><span class="activityRowName">Energy today</span>' + Tn("energy") + xa(!!((x = et.home) != null && x.energy), "Energy today", 'data-he-card="energy"') + "</div>" : "") + jr("Cards", "data-he-cards-as", Fc(), [["stacked", "Stacked"], ["rows", "Rows"]]) + '<hr class="hcHeRule"><div class="hcHeLine"><span class="activityRowName">Group by floor</span>' + xa(Ao("byFloor"), "Group by floor", 'data-he-flag="byFloor"') + "</div>" + jr("Layout", "data-he-area-layout", js(), [["rows", "Rows"], ["columns", "Columns"], ["bento", "Bento"]]) + (js() === "bento" ? '<div class="hcHeLine"><span class="activityRowName">Floors as boxes</span>' + xa(Ao("bentoBoxes"), "Floors as boxes", 'data-he-flag="bentoBoxes"') + '</div><div class="hcHeLine"><span class="activityRowName">Mixed sizes</span>' + xa(Ao("bentoMixed"), "Mixed sizes", 'data-he-flag="bentoMixed"') + "</div>" : "") + jr("Area cards", "data-he-area-size", Ic(), [["s", "Small"], ["m", "Medium"], ["l", "Large"]]) + // Fit together (Matt, 17 Nov): the areas as a neat block, not spread over every column that fits
      '<div class="hcHeLine"><span class="activityRowName">Fit together</span>' + xa(!!((P = et.home) != null && P.fitTogether), "Fit together", "data-he-fit") + "</div>",
      favs: '<div class="hcHeLine"><span class="activityRowName">Show favourites</span>' + xa(((D = et.home) == null ? void 0 : D.favs) !== !1, "Show favourites", 'data-he-card="favs"') + '</div><hr class="hcHeRule"><div class="hcHeLabel"><span class="activityRowName">Favourite entities</span>' + Tn("favs") + "</div>" + jr("Show as", "data-he-favs-as", qi() ? "strip" : "card", [["card", "Card"], ["strip", "Strip"]]) + (qi() ? "" : '<div class="hcHeLine"><span class="activityRowName">Title</span>' + xa(Ao("favsTitle"), "Title", 'data-he-flag="favsTitle"') + "</div>") + '<ul class="tfTrayList hcHeList" data-he-list="favs">' + (t.map(e).join("") || '<li class="tfTrayNote">No favourites yet.</li>') + '</ul><button class="pill tfTrayAdd hcAddBtn" type="button" data-he-add aria-expanded="' + Ba + '">' + is + '<span>Add favourite</span></button><div class="tfTrayPick" data-he-pick' + (Ba ? "" : " hidden") + '><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-he-search value="' + W(o) + '"><ul class="tfTrayList">' + (Ba ? ol(o, (k) => Zc.test(k), new Set(t), "data-he-pick-id") : "") + '</ul></div><hr class="hcHeRule"><div class="hcHeLine"><span class="activityRowName">Suggested entities</span>' + Tn("suggest") + xa(We(), "Suggested entities", "data-he-suggest") + "</div>",
      sums: '<div class="hcHeLine"><span class="activityRowName">Show summaries</span>' + Tn("sums") + xa(((B = et.home) == null ? void 0 : B.sums) !== !1, "Show summaries", 'data-he-card="sums"') + "</div>" + jr("Width", "data-he-sums-width", Xc() ? "fit" : "match", [["match", "Match the cards"], ["fit", "Fit the summaries"]]) + '<hr class="hcHeRule"><ul class="tfTrayList hcHeList" data-he-list="sums">' + Jc().map(a).join("") + "</ul>",
      areas: '<p class="tfTrayNote">Which areas show on Home. Drag to change their order, here and on the custom dashboard.</p><ul class="tfTrayList hcHeList" data-he-list="areas">' + Is().map(c).join("") + "</ul>"
    };
    be.querySelector("[data-he-body]").innerHTML = // the note about the areas page first (Matt, 12 Nov: "to the top of the rollover"), as Home Assistant's dialog has it
    '<p class="tfTrayNote hcHeAreasNote">You can rearrange your floors and areas in the order that best represents your house on the <button type="button" class="hcHeLink" data-path="/config/areas/dashboard">areas page</button>.</p><div class="tabs rubberTabs hcTrayTabs" role="tablist" aria-label="Edit Home page"><div class="rubberIndicator" aria-hidden="true"></div>' + r.map(([k, N]) => '<button class="tab segBtn' + (k === er ? " active" : "") + '" type="button" role="tab" aria-selected="' + (k === er) + '" data-he-tab="' + k + '">' + N + "</button>").join("") + "</div>" + Lf(r, "data-he-go") + '<div class="hcHeTabBody" role="tabpanel">' + u[er] + "</div>", il(!1), Ta(be);
  }
  const ar = (t) => {
    et = { ...et, ...t }, Aa(), Be(), Ln();
  }, Ma = (t) => ar({ home: { ...et.home || {}, ...t } });
  function ll(t) {
    Dn(), Eo = t, Ba = !1, be.classList.toggle("open", t), be.toggleAttribute("inert", !t), g.classList.toggle("hcHomeEditing", t), b && H && Ve();
    const e = p("dashEditNav"), a = be.querySelector(".tfTrayHead");
    e && t && (rl = e.parentElement, a.appendChild(e)), e && !t && rl && rl.appendChild(e), e && (e.classList.toggle("active", t), e.setAttribute("aria-pressed", String(t)), e.setAttribute("aria-label", t ? "Done editing Home" : "Edit Home page"), e.title = t ? "Done" : "Edit", e.innerHTML = t ? Yp : ss), t ? (nl = JSON.stringify(et), Ln(), tr(be, "Edit Home page", null)) : nl && JSON.stringify(et) !== nl && Ea("Changes saved");
  }
  be.innerHTML = '<div class="tfTrayInner"><div class="tfTrayHead">' + Df + '<div class="activityTitle">Edit Home page</div></div><div class="hcHeBody" data-he-body></div></div>', g.appendChild(be);
  let Bo = null;
  const Ga = Object.assign(document.createElement("div"), { className: "card hcInfoPop", hidden: !0 });
  Ga.setAttribute("role", "dialog"), g.appendChild(Ga);
  function Dn() {
    Bo && (Bo.setAttribute("aria-expanded", "false"), Bo = null, Ga.hidden = !0);
  }
  function Qc(t) {
    const e = Bo;
    if (Dn(), e === t) return;
    const [a, o] = Kc[t.dataset.info];
    Ga.setAttribute("aria-label", a), Ga.innerHTML = '<div class="hcInfoTitle">' + W(a) + '</div><div class="hcInfoText">' + o + '</div><a class="hcInfoMore" href="' + Rf + '" target="_blank" rel="noopener">Learn more</a>', Ga.hidden = !1, Bo = t, t.setAttribute("aria-expanded", "true");
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
  const Pf = (t) => t.dataset.heList === "favs" ? Bt() : t.dataset.heList === "areas" ? Is().map((e) => e.id) : Jc(), td = (t, e) => t.dataset.heList === "favs" ? ar({ favourites: e }) : t.dataset.heList === "areas" ? (ar({ areaOrder: e }), Ve()) : Ma({ sumOrder: e });
  be.addEventListener("keydown", (t) => {
    var u;
    const e = t.target.closest("[data-he-grip]");
    if (!e || !["ArrowUp", "ArrowDown"].includes(t.key)) return;
    t.preventDefault();
    const a = e.closest("[data-he-id]"), o = a.parentElement, r = Pf(o), l = r.indexOf(a.dataset.heId), c = l + (t.key === "ArrowUp" ? -1 : 1);
    c < 0 || c >= r.length || (r.splice(c, 0, r.splice(l, 1)[0]), td(o, r), (u = be.querySelector('[data-he-list="' + o.dataset.heList + '"] [data-he-id="' + CSS.escape(a.dataset.heId) + '"] [data-he-grip]')) == null || u.focus());
  }), be.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-he-grip]");
    if (!e || t.button !== 0) return;
    const a = e.closest("[data-he-list]"), o = a.dataset.heList;
    ul(t, e.closest("[data-he-id]"), "heId", (r) => td(a, r), (r) => be.querySelector('[data-he-list="' + o + '"] [data-he-id="' + CSS.escape(r) + '"]'));
  }), be.addEventListener("input", (t) => {
    if (t.target.matches("[data-he-search]")) {
      const e = t.target.selectionStart;
      Ln();
      const a = be.querySelector("[data-he-search]");
      a.focus(), a.setSelectionRange(e, e);
    }
  }), be.addEventListener("click", (t) => {
    var N, E, R, _;
    const e = t.target, a = e.closest("[data-info]");
    if (a) {
      Qc(a);
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
      Ma({ welcome: !Ns() });
      return;
    }
    const l = e.closest("[data-he-card]");
    if (l) {
      const at = l.dataset.heCard, St = ["sums", "favs"].includes(at) ? ((N = et.home) == null ? void 0 : N[at]) !== !1 : !!((E = et.home) != null && E[at]);
      Ma({ [at]: !St });
      return;
    }
    const c = e.closest("[data-he-favs-as]");
    if (c) {
      Ma({ favsAs: c.dataset.heFavsAs });
      return;
    }
    const u = e.closest("[data-he-sums-width]");
    if (u) {
      Ma({ sumsWidth: u.dataset.heSumsWidth });
      return;
    }
    const f = e.closest("[data-he-area-size]");
    if (f) {
      Ma({ areaSize: f.dataset.heAreaSize });
      return;
    }
    const v = e.closest("[data-he-area-layout]");
    if (v) {
      Ma({ areaLayout: v.dataset.heAreaLayout });
      return;
    }
    if (e.closest("[data-he-fit]")) {
      Ma({ fitTogether: !((R = et.home) != null && R.fitTogether) });
      return;
    }
    const S = e.closest("[data-he-cards-as]");
    if (S) {
      Ma({ cardsAs: S.dataset.heCardsAs });
      return;
    }
    const x = e.closest("[data-he-flag]");
    if (x) {
      const at = x.dataset.heFlag;
      Ma({ [at]: !Ao(at) }), at === "favsTitle" && Ua();
      return;
    }
    if (e.closest("[data-he-suggest]")) {
      ar({ suggest: !We() });
      return;
    }
    const P = e.closest("[data-he-area]");
    if (P) {
      const at = new Set(((_ = et.home) == null ? void 0 : _.areasOff) || []), St = P.dataset.heArea;
      at.has(St) ? at.delete(St) : at.add(St), Ma({ areasOff: [...at] });
      return;
    }
    const D = e.closest("[data-he-sum]");
    if (D) {
      const at = D.dataset.heSum, St = !xn(at), Rt = et.home || {};
      Ma(Vp.includes(at) ? { shownSums: St ? [...Rt.shownSums || [], at] : (Rt.shownSums || []).filter((Wt) => Wt !== at) } : { hiddenSums: St ? (Rt.hiddenSums || []).filter((Wt) => Wt !== at) : [...Rt.hiddenSums || [], at] });
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
    var S, x, P;
    const t = ca && g.classList.contains("tfBoard");
    if (Ut.classList.toggle("open", t), Ut.classList.toggle("tucked", t && so), Ut.toggleAttribute("inert", !t), t || (Do = !1), id(), !t) return;
    const e = Ut.querySelector("[data-tray-tuck]");
    e.innerHTML = so ? Ql : oc, e.setAttribute("aria-expanded", String(!so)), e.setAttribute("aria-label", so ? "Show the edit tray" : "Tuck the edit tray away");
    const a = re().hidden.filter((D) => !_o.includes(D) && _n().some((B) => B.key === D)), o = (D, B) => '<button class="tfTrayCard" type="button" data-tray-card="' + W(D) + '" aria-label="' + W(Da(D)) + ": drag it onto the board, or press to " + B + '"><span class="tfTrayGrip" aria-hidden="true">' + oi + "</span>" + W(Da(D)) + "</button>", r = a.filter((D) => !ui.includes(D)), l = ui.filter((D) => a.includes(D));
    za("welcome", '<div class="hcHeLine"><span class="activityRowName">Welcome message</span>' + Tn("welcome") + '<button class="switch' + (re().welcome ? " on" : "") + '" type="button" role="switch" aria-checked="' + !!re().welcome + '" aria-label="Welcome message" data-dash-welcome></button></div><div class="hcHeLine"><span class="activityRowName">Show summaries</span><button class="switch' + ((S = et.dash) != null && S.sumsOff ? "" : " on") + '" type="button" role="switch" aria-checked="' + !((x = et.dash) != null && x.sumsOff) + '" aria-label="Show summaries" data-dash-sums></button></div>'), requestAnimationFrame(() => tl(!1)), za("cards", '<div class="sectionLabel">Hidden and new cards</div>' + (r.length ? '<div class="tfTrayCards">' + r.map((D) => o(D, "put it back")).join("") + "</div>" : '<p class="tfTrayNote">Cards you hide, and new ones, wait here.</p>')), za("weather", '<div class="sectionLabel">Weather</div>' + (l.length ? `<p class="tfTrayNote">The Weather page's widgets. Drag one onto the board, or press to add it.</p><div class="tfTrayCards">` + l.map((D) => o(D, "add it")).join("") + "</div>" : '<p class="tfTrayNote">Every weather widget is on the board.</p>')), za("phone", '<div class="sectionLabel">Phone</div><p class="tfTrayNote">' + (re().phone ? "Phones have an order of their own." : "Phones follow the board's order.") + '</p><button class="pill tfTrayAdd" type="button" data-phone-toggle aria-pressed="' + Do + '">' + (Do ? "Hide the phone" : "Show the phone") + "</button>");
    const c = new Set(et.favHidden || []), u = Bt(), f = [...u, ...[...c].filter((D) => !u.includes(D) && M[D])];
    za("favs", f.map((D) => Bf(D, c.has(D), u.includes(D))).join("") || '<li class="tfTrayNote">No favourites yet.</li>'), Ut.querySelector('[data-pick="tiles"]').hidden = !Lo, Ut.querySelector("[data-tile-add]").setAttribute("aria-expanded", String(Lo)), Lo && za("tilepick", ol(Ut.querySelector("[data-tile-search]").value, (D) => fr.includes(D.split(".")[0]), new Set(Pi()), "data-tile-pick")), Ut.querySelector('[data-tray="roompick"]').hidden = !Vr, Ut.querySelector("[data-room-add]").setAttribute("aria-expanded", String(Vr));
    const v = new Set(((P = et.dash) == null ? void 0 : P.areasOff) || []);
    if (za("areas", X(I).map((D) => '<li class="hcHeRow" data-area-id="' + W(D.id) + '"><button class="tfTrayBtn hcHeGrip" type="button" data-area-grip aria-label="Move ' + W(D.name) + '. Use the up and down arrows">' + oi + '</button><span class="tfIcon"><span class="tfAreaGlyph"' + fe("area:" + D.id, D.icon || "mdi:texture-box", D.name) + '></span></span><span class="activityRowName">' + W(D.name) + '</span><button class="switch' + (v.has(D.id) ? "" : " on") + '" type="button" role="switch" aria-checked="' + !v.has(D.id) + '" aria-label="Show ' + W(D.name) + ' in the Areas card" data-area-on="' + W(D.id) + '"></button></li>').join("")), Vr) {
      const D = new Set(Pi());
      za("roompick", X(I).filter((B) => !D.has("room:" + B.id)).map((B) => '<li><button class="tfTrayPickItem" type="button" data-room-pick="' + W(B.id) + '"><span class="tfIcon"><span class="tfAreaGlyph"' + fe("area:" + B.id, B.icon || "mdi:texture-box", B.name) + '></span></span><span class="tfTrayName"><span class="activityRowName">' + W(B.name) + "</span></span></button></li>").join("") || '<li class="tfTrayNote">Every area is on the board.</li>');
    }
    Ut.querySelector('[data-pick="favs"]').hidden = !To, Ut.querySelector("[data-fav-add]").setAttribute("aria-expanded", String(To)), To && za("pick", ol(Ut.querySelector("[data-fav-search]").value, (D) => Zc.test(D), new Set(Bt()), "data-fav-pick")), za("favtitle", '<div><strong>Title</strong><div class="status">Favourites, at the top of the card.</div></div><button class="switch' + (Bi() ? " on" : "") + '" type="button" role="switch" aria-checked="' + Bi() + '" data-fav-title aria-label="Title"></button>'), za("suggest", '<div><strong>Show suggestions</strong><div class="status">Fills the card after your favourites.</div></div><button class="switch' + (We() ? " on" : "") + '" type="button" role="switch" aria-checked="' + We() + '" data-fav-suggest aria-label="Show suggestions"></button>');
  }
  const En = (t) => {
    et = { ...et, ...t }, Aa(), Be(), Te();
  };
  function ed(t, e) {
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
        Qn = e.dataset.trayGo, tl(!1), tr(Ut, "Edit custom dashboard", Qn, $c.find(([l]) => l === Qn)[1]);
        return;
      }
      if (e.hasAttribute("data-tray-back")) {
        tr(Ut, "Edit custom dashboard", null);
        return;
      }
      if (e.hasAttribute("data-tray-done")) Zs(!1);
      else if (e.hasAttribute("data-info")) Qc(e);
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
      else if (e.dataset.favEye) ed(e.dataset.favEye, e.getAttribute("aria-pressed") !== "true");
      else if (e.dataset.favRemove) Hf(e.dataset.favRemove);
      else if (e.hasAttribute("data-fav-add"))
        To = !To, Te(), To && Ut.querySelector("[data-fav-search]").focus({ preventScroll: !0 });
      else if (e.dataset.favPick) Nf(e.dataset.favPick);
      else if (e.hasAttribute("data-tile-add"))
        Lo = !Lo, Te(), Lo && Ut.querySelector("[data-tile-search]").focus({ preventScroll: !0 });
      else if (e.dataset.tilePick) Gc(e.dataset.tilePick);
      else if (e.hasAttribute("data-room-add"))
        Vr = !Vr, Te();
      else if (e.dataset.roomPick) Gc("room:" + e.dataset.roomPick);
      else if (e.dataset.areaOn) {
        const l = new Set(((r = et.dash) == null ? void 0 : r.areasOff) || []);
        l.has(e.dataset.areaOn) ? l.delete(e.dataset.areaOn) : l.add(e.dataset.areaOn), Sn({ ...re(), areasOff: [...l] }), Be(), Te();
      } else e.hasAttribute("data-fav-suggest") ? En({ suggest: !We() }) : e.hasAttribute("data-fav-title") && (En({ favsTitle: !Bi() }), Ua());
    }
  }), Ut.addEventListener("input", (t) => {
    t.target.matches("[data-fav-search],[data-tile-search]") && Te();
  });
  const ad = (t) => {
    et = { ...et, areaOrder: t }, Aa(), Be(), Te();
  };
  Ut.addEventListener("keydown", (t) => {
    var c, u, f;
    const e = (u = (c = t.target).closest) == null ? void 0 : u.call(c, "[data-area-grip]");
    if (!e || !["ArrowUp", "ArrowDown"].includes(t.key)) return;
    t.preventDefault();
    const a = e.closest("[data-area-id]").dataset.areaId, o = X(I).map((v) => v.id), r = o.indexOf(a), l = r + (t.key === "ArrowUp" ? -1 : 1);
    l < 0 || l >= o.length || (o.splice(l, 0, o.splice(r, 1)[0]), ad(o), (f = Ut.querySelector('[data-area-id="' + CSS.escape(a) + '"] [data-area-grip]')) == null || f.focus());
  }), Ut.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-area-grip]");
    !e || t.button !== 0 || ul(t, e.closest("[data-area-id]"), "areaId", ad, (a) => Ut.querySelector('[data-area-id="' + CSS.escape(a) + '"]'));
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
  function od(t, e, a, o) {
    t.preventDefault();
    const r = t.clientX, l = t.clientY;
    let c = null, u = 0;
    const f = Object.assign(document.createElement("div"), { className: "tfFavDrop" }), v = (x) => {
      if (!c) {
        if (Math.hypot(x.clientX - r, x.clientY - l) < 4) return;
        c = e.cloneNode(!0), c.classList.add("tfTrayGhost"), c.style.width = e.offsetWidth + "px", g.appendChild(c);
      }
      c.style.transform = "translate(" + (x.clientX - 24) + "px," + (x.clientY - 24) + "px)";
      const P = !so && x.clientX >= Ut.getBoundingClientRect().left;
      if (a === "card") {
        const k = H.getBoundingClientRect(), { w: N } = Jo(H.clientWidth);
        Qt = !P && x.clientX >= k.left && x.clientX <= k.right && x.clientY >= k.top + Xo ? { key: o, col: Math.max(0, Math.floor((x.clientX - k.left) / (N + de))), row: Math.max(0, Math.floor((x.clientY - k.top - Xo) / La)), fromTray: !0 } : null, u || (u = requestAnimationFrame(() => {
          u = 0, Ve();
        }));
        return;
      }
      const D = H.querySelector(".tfDash-favs"), B = D == null ? void 0 : D.getBoundingClientRect();
      if (ta = null, B && !P && x.clientX >= B.left && x.clientX <= B.right && x.clientY >= B.top && x.clientY <= B.bottom) {
        let k = 1 / 0;
        D.querySelectorAll('[data-k^="fav:"]').forEach((N, E) => {
          const R = N.getBoundingClientRect(), _ = Math.hypot(x.clientX - (R.left + R.width / 2), x.clientY - (R.top + R.height / 2));
          _ < k && (k = _, ta = { i: E, r: R, after: x.clientX > R.left + R.width / 2 });
        }), ta || (ta = { i: 0, r: null, after: !1 });
      }
      ta != null && ta.r ? (f.isConnected || g.appendChild(f), Object.assign(f.style, { left: (ta.after ? ta.r.right : ta.r.left) - 2 + "px", top: ta.r.top + 8 + "px", height: ta.r.height - 16 + "px" })) : f.remove();
    }, S = () => {
      if (window.removeEventListener("pointermove", v), window.removeEventListener("pointerup", S), window.removeEventListener("pointercancel", S), cancelAnimationFrame(u), c == null || c.remove(), f.remove(), a === "card") {
        if (!c) $s(o);
        else if (Qt != null && Qt.fromTray) {
          Ve();
          const k = Da(o) + jc(o), N = re(), E = Cn();
          Qt = null, Jn({ ...N, hidden: N.hidden.filter((R) => R !== o) }, E), Ea(k);
        }
        Qt = null, Ve(), Be(), Te();
        return;
      }
      if (!ta) return;
      const x = new Set(et.favHidden || []);
      x.delete(o);
      const P = Bt().filter((k) => k !== o), D = P.filter((k) => !x.has(k)), B = D[Math.min(ta.i + (ta.after ? 1 : 0), D.length)];
      P.splice(B ? P.indexOf(B) : P.length, 0, o), ta = null, En({ favourites: P, favHidden: [...x] }), Ea(bt(o) + " put back");
    };
    window.addEventListener("pointermove", v), window.addEventListener("pointerup", S), window.addEventListener("pointercancel", S);
  }
  const nd = {
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
  }, rd = 136, Of = 288, If = 0.8, Ff = { wx: "mdi:weather-partly-cloudy", areas: "mdi:home", favs: "mdi:star", act: "mdi:history", energy: "mdi:lightning-bolt", avg: "mdi:chart-line", aq: "mdi:air-filter", pollen: "mdi:flower-pollen", radar: "mdi:radar" }, pa = Object.assign(document.createElement("aside"), { className: "tfMiniPhone" });
  pa.setAttribute("aria-label", "Phone order"), pa.innerHTML = '<div class="tfPhoneHead"><div class="activityTitle">Phone</div><button class="tfTrayBtn" type="button" data-phone-close aria-label="Close the phone">' + ec + '</button></div><p class="tfTrayNote" data-phone="note"></p><div class="tfPhoneScreen"><div class="tfPhoneList" data-phone="list"></div></div>', g.appendChild(pa);
  let dl = "";
  function id() {
    var u;
    const t = Do && ca && g.classList.contains("tfBoard") && !so;
    if (pa.classList.toggle("open", t), pa.toggleAttribute("inert", !t), !t) return;
    const e = qs().filter((f) => !re().hidden.includes(f.key)), a = e.length, o = (f) => Math.round(f * If * 10) / 10 + "px", r = (f, v) => {
      const S = f.el.classList.contains("tfDac"), x = f.tile ? S ? Of : rd : nd[f.key] || rd;
      return '<button class="tfPhoneBlock' + (f.tile ? " tile" : "") + '" type="button" data-phone-key="' + W(f.key) + '" style="min-height:' + o(x) + '" aria-label="' + W(Da(f.key) + ", " + (v + 1) + " of " + a + ". Drag, or use the arrow keys, to move it") + '"><span class="tfIcon"' + (f.tile ? fe(f.key, Je(f.key)) : fe(f.key, Ff[f.key])) + '></span><span class="tfPhoneName">' + W(Da(f.key)) + "</span></button>";
    }, l = '<div class="tfPhoneTitle">' + W(((u = H.querySelector(".tfDashTitle")) == null ? void 0 : u.textContent) || "") + '</div><div class="tfPhoneBlock fixed" style="min-height:' + o(nd.sums) + '"><span class="tfPhoneName">' + W(Da("sums")) + "</span></div>" + e.map(r).join("");
    if (pa.querySelector('[data-phone="note"]').innerHTML = re().phone ? 'Phones use this order. <button class="tfLinkBtn" type="button" data-phone-reset>Follow the board</button>' : "Phones follow the board. Drag a card to give them an order of their own.", l === dl) return;
    dl = l;
    const c = pa.querySelector('[data-phone="list"]');
    c.innerHTML = l, Ta(c);
  }
  function sd(t, e) {
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
      const v = [...a.querySelectorAll("[data-phone-key]")].find((P) => {
        const D = P.getBoundingClientRect();
        return P !== e && u.clientX >= D.left && u.clientX <= D.right && u.clientY >= D.top && u.clientY <= D.bottom;
      });
      if (!v) return;
      const S = v.getBoundingClientRect(), x = v.classList.contains("tile") ? u.clientX < S.left + S.width / 2 : u.clientY < S.top + S.height / 2;
      a.insertBefore(e, x ? v : v.nextSibling);
    }, c = () => {
      window.removeEventListener("pointermove", l), window.removeEventListener("pointerup", c), window.removeEventListener("pointercancel", c), e.classList.remove("moving");
      const u = pl();
      dl = "", u.join() !== r ? sd(u) : id();
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
    l < 0 || l >= o.length || ([o[r], o[l]] = [o[l], o[r]], sd(o, e));
  });
  function ul(t, e, a, o, r) {
    t.preventDefault();
    const l = De.drag, c = Fe(), u = 1 + l.lift / 100, f = [...e.parentElement.children].filter((Tt) => Tt.dataset[a]), v = f.indexOf(e), S = f.map((Tt) => Tt.getBoundingClientRect()), x = f.length - 1, P = S[v].height + (f.length > 1 ? S[1].top - S[0].bottom : 0), D = (Tt) => S[Tt].top + S[Tt].height / 2, B = t.clientY, k = S[0].top - S[v].top, N = S[x].top - S[v].top;
    let E = 0, R = 0, _ = 0, at = 1, St = v, Rt = 0;
    e.classList.add("hcListDragging"), f.forEach((Tt) => {
      Tt !== e && (Tt.style.transition = c ? "none" : "transform " + l.gap + "ms " + Ee.land);
    });
    const Wt = () => {
      if (Rt = requestAnimationFrame(Wt), c) {
        R = E, e.style.transform = "translateY(" + R + "px)";
        return;
      }
      _ = zl(_, E - R, l.pull / 100, l.keep / 100), R += _, at += (u - at) * 0.25;
      const Tt = Math.min(Math.abs(_) / 48, 1);
      e.style.transform = "translateY(" + R.toFixed(2) + "px) scale(" + (at * (1 - 0.063 * Tt)).toFixed(4) + "," + (at * (1 + 0.1 * Tt)).toFixed(4) + ")";
    };
    Rt = requestAnimationFrame(Wt);
    const Ft = (Tt) => {
      E = Math.max(k, Math.min(N, Tt.clientY - B));
      const ue = D(v) + E, me = f.filter((ge, Re) => Re !== v && D(Re) < ue).length;
      me !== St && (St = me, f.forEach((ge, Re) => {
        ge !== e && (ge.style.transform = v < St && Re > v && Re <= St ? "translateY(" + -P + "px)" : St < v && Re >= St && Re < v ? "translateY(" + P + "px)" : "");
      }));
    }, kt = () => {
      window.removeEventListener("pointermove", Ft), window.removeEventListener("pointerup", kt), window.removeEventListener("pointercancel", kt), cancelAnimationFrame(Rt);
      const Tt = e.getBoundingClientRect(), ue = e.dataset[a];
      f.forEach((Pa) => {
        Pa.style.transition = "none", Pa.style.transform = "";
      }), e.classList.remove("hcListDragging");
      const me = f.map((Pa) => Pa.dataset[a]);
      me.splice(St, 0, me.splice(v, 1)[0]), o(me);
      const ge = r(ue) || e;
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
    e ? od(t, e, "card", e.dataset.trayCard) : a && t.target.closest(".tfTrayGrip") ? Wf(t, a) : a != null && a.classList.contains("off") && !t.target.closest("button") && od(t, a, "fav", a.dataset.trayFav);
  });
  function Vf(t) {
    if (!ca || t.button !== 0 || t.target.closest("[data-board-more],.tfBoardMenu,.tfFavHides")) return;
    const e = t.target.closest(".tfBoardItem"), a = e && _n().find((Wt) => Wt.el === e);
    if (!a || _o.includes(a.key)) return;
    const o = kn.get(a.key), { w: r } = Jo(H.clientWidth);
    if (!o) return;
    t.preventDefault(), io();
    const l = t.clientX, c = t.clientY;
    let u = !1, f = 0;
    const v = De.drag, S = Fe();
    let x = 0, P = 0, D = 0, B = 0, k = 0, N = 0, E = S || v.stick === 0, R = 0;
    const _ = (Wt, Ft, kt, Tt) => {
      e.style.transform = "translate(" + D.toFixed(2) + "px," + B.toFixed(2) + "px) rotate(" + Wt.toFixed(2) + "deg) rotate(" + Ft + "rad) scale(" + kt.toFixed(4) + "," + Tt.toFixed(4) + ") rotate(" + -Ft + "rad)";
    }, at = () => {
      if (R = requestAnimationFrame(at), S) {
        D = x, B = P, _(0, 0, 1, 1);
        return;
      }
      if (!E) {
        const ue = Math.min(Math.hypot(x, P) / Math.max(1, v.stick), 1);
        D = x * 0.35, B = P * 0.35, _(0, Math.atan2(P, x), 1 + 0.155 * ue, 1 - 0.1 * ue);
        return;
      }
      k = zl(k, x - D, v.pull / 100, v.keep / 100), N = zl(N, P - B, v.pull / 100, v.keep / 100), D += k, B += N;
      const Wt = Math.hypot(k, N), Ft = Math.min(Wt / 48, 1), kt = Math.max(-5, Math.min(v.tilt, k * 0.32)), Tt = 1 + v.lift / 100;
      _(kt, Math.atan2(N, k), Tt * (1 + 0.1 * Ft), Tt * (1 - 0.063 * Ft));
    }, St = (Wt) => {
      if (x = Wt.clientX - l, P = Wt.clientY - c, !u) {
        if (Math.hypot(x, P) < 4) return;
        u = !0, Qt = { key: a.key, col: o.col, row: o.row }, e.classList.add("tfDragging", "mvDrag"), R = requestAnimationFrame(at);
      }
      !E && Math.hypot(x, P) > v.stick && (E = !0, k = x * 0.085, N = P * 0.085), Qt.col = Math.round((o.x + x) / (r + de)), Qt.row = Math.round((o.y + P - Xo) / La), f || (f = requestAnimationFrame(() => {
        f = 0, Ve();
      }));
    }, Rt = () => {
      var sr;
      if (window.removeEventListener("pointermove", St), window.removeEventListener("pointerup", Rt), window.removeEventListener("pointercancel", Rt), !u) return;
      const Wt = (lr) => {
        lr.preventDefault(), lr.stopImmediatePropagation();
      };
      window.addEventListener("click", Wt, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", Wt, { capture: !0 }), 300), cancelAnimationFrame(f), cancelAnimationFrame(R);
      const Ft = e.getBoundingClientRect(), kt = a.key;
      e.style.transition = "none", Ve(), e.classList.remove("tfDragging", "mvDrag"), e.style.transform = "", Qt = null, Jn(re(), Cn()), Ve(), Be();
      const Tt = (sr = _n().find((lr) => lr.key === kt)) == null ? void 0 : sr.el;
      if (requestAnimationFrame(() => {
        e.style.transition = "", Tt && (Tt.style.transition = "");
      }), !Tt || S) return;
      Tt.style.transition = "none";
      const ue = Tt.getBoundingClientRect(), me = Ft.left + Ft.width / 2 - (ue.left + ue.width / 2), ge = Ft.top + Ft.height / 2 - (ue.top + ue.height / 2);
      Tt.style.zIndex = "20", Tt.animate([{ transform: "translate(" + me + "px," + ge + "px) scale(" + (1 + v.lift / 100) + ")" }, { transform: "none" }], { duration: v.slide, easing: Ee.land }).finished.then(() => {
        Tt.style.zIndex = "", Gl(Tt);
      }, () => {
        Tt.style.zIndex = "";
      });
    };
    window.addEventListener("pointermove", St), window.addEventListener("pointerup", Rt), window.addEventListener("pointercancel", Rt);
  }
  function ld(t = !1) {
    const e = H == null ? void 0 : H.querySelector(".tfDashGraph svg[data-graph]");
    if (!(e != null && e.clientWidth)) return;
    const a = e.dataset.graph + "@" + e.clientWidth + "x" + e.clientHeight + "@" + Math.floor(Date.now() / 3e5);
    if (e.dataset.drawn === a) return;
    const o = !e.dataset.drawn;
    e.dataset.drawn = a;
    const r = yc.find((l) => l.id === e.dataset.graph);
    r ? Yu(e, r).then(() => {
      (t || o) && Zu(e);
    }) : Ed(e.dataset.graph, e).then(() => {
      t && Sc(e);
    });
  }
  function cd() {
    var f, v, S;
    Gt = ci.model(d(), { madeUp: !C }), ce(), M = Gt.states, M[(f = et.sources) == null ? void 0 : f.grid] && (Gt.grid = et.sources.grid), M[(v = et.sources) == null ? void 0 : v.alarm] && (Gt.security.alarms = [et.sources.alarm]), Ca.forEach((x, P) => {
      const D = M[P], B = (D == null ? void 0 : D.attributes) || {};
      if (!D || Date.now() - x.at > 2 * 60 * 1e3) {
        Ca.delete(P);
        return;
      }
      x.pos != null && D.state !== "opening" && D.state !== "closing" && Math.abs(Wa(P) - x.pos) < 1 && delete x.pos, x.tilt != null && Math.abs((B.current_tilt_position ?? -1) - x.tilt) < 1 && delete x.tilt, x.pos == null && x.tilt == null && Ca.delete(P);
    });
    const t = [];
    let e = 0;
    const a = pt();
    I = a.filter((x) => x.room).map((x) => x.room), I.some((x) => x.id === V) || (V = ((S = I[0]) == null ? void 0 : S.id) || null);
    const o = Q === "weather" ? { key: "weather", name: "Weather" } : Q && a.find((x) => x.key === Q);
    if (o || (Q = null), g.classList.toggle("tfAreaOpen", !!o), g.classList.toggle("tfWeatherOpen", (o == null ? void 0 : o.key) === "weather"), g.classList.toggle("tfDash", !o), xe = /* @__PURE__ */ new Map(), Gt.rooms.forEach((x) => [...x.actions, ...x.plugs, ...x.readings, ...x.openings, ...x.solar, ...x.plants.flatMap((P) => [P.id, ...P.readings])].forEach((P) => xe.set(P, x.name))), !o) return Ju(t, So());
    if (t.push({ key: "areahead", html: jf(o, ++e) }), o.key === "weather")
      return t.weather = ++e, t;
    const r = o.ids, l = o.room ? o.room.id : o.key, c = o.room;
    c != null && c.solar.length && t.push({ key: "energy:" + c.id, html: qe(c, ++e) }), c && (c.readings.length || c.power != null) && t.push({ key: "readings:" + c.id, html: Cs(c, ++e) }), c == null || c.plants.forEach((x) => t.push({ key: "plant:" + x.id, html: fn(x, ++e) }));
    const u = [...r, ...((c == null ? void 0 : c.plugs) || []).filter((x) => !r.includes(x))];
    return u.length && t.push({ key: "block:" + l, order: ++e, tiles: u.map((x) => ({ key: x, html: Zn(x) })) }), t;
  }
  const jf = (t, e) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + e + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + Ql + '</button><div class="settingsTitle">' + W(t.name) + "</div></div>";
  let dd = 0, pd = null;
  const ud = (t) => t === "weather" ? Qa.wx : t.startsWith("room:") && H.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || H.querySelector(".tfAreas");
  function fd(t) {
    var e, a;
    Q || (dd = Gr().scrollTop, pd = ((e = ud(t)) == null ? void 0 : e.getBoundingClientRect().top) ?? null), Q = t, t.startsWith("room:") && (V = t.slice(5)), Ua(), Gr().scrollTop = 0, (a = H.querySelector("[data-area-back]")) == null || a.focus({ preventScroll: !0 });
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
    Q = null, Ua(), Gr().scrollTop = dd, zf(() => ud(t), pd);
    const e = t.startsWith("room:") ? H.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || H.querySelector('.tfAreaPanel[data-area="' + CSS.escape(t.slice(5)) + '"]') : t === "weather" ? Qa.wx.querySelector(".wbOpenPage") : H.querySelector('[data-k="sum:' + CSS.escape(t) + '"]');
    (a = (e == null ? void 0 : e.querySelector("[data-go]")) || e) == null || a.focus({ preventScroll: !0 });
  }
  const Gf = (t) => t.wrap ? t.wrap(t.tiles.map((e) => e.html).join(""), t) : '<div class="tfBlock" data-tf data-k="' + W(t.key) + '" style="order:' + t.order + '"><div class="tfActions">' + t.tiles.map((e) => e.html).join("") + "</div></div>", hd = (t) => t.map((e) => e.key + (e.tiles ? "(" + e.tiles.map((a) => a.key).join(",") + ")" : "")).join(";");
  function Gr() {
    for (let t = g.parentElement || g.getRootNode().host; t; t = t.parentElement || t.getRootNode().host) {
      const e = getComputedStyle(t).overflowY;
      if ((e === "auto" || e === "scroll") && t.scrollHeight > t.clientHeight) return t;
    }
    return document.scrollingElement;
  }
  function md(t) {
    const e = Gr(), a = (u) => {
      const f = u.getBoundingClientRect();
      return f.height && f.bottom > 0 && f.top < window.innerHeight;
    }, o = [...H.children, ...H.querySelectorAll(".tfDashTiles > *")].find((u) => !u.matches(".tfDashTiles") && a(u)), r = o == null ? void 0 : o.dataset.k, l = o == null ? void 0 : o.getBoundingClientRect().top;
    t();
    const c = o != null && o.isConnected ? o : r && H.querySelector('[data-k="' + CSS.escape(r) + '"]');
    c != null && c.isConnected && l != null && (e.scrollTop += c.getBoundingClientRect().top - l);
  }
  function Ua() {
    if (!b || !H) return;
    const t = cd(), e = (r) => {
      var l;
      return (((l = r.closest("[data-k]")) == null ? void 0 : l.dataset.k) || "") + "|" + r.dataset.iconFor + "|" + (r.dataset.iconName || "");
    }, a = /* @__PURE__ */ new Map();
    H.querySelectorAll("[data-tf] [data-icon-for]").forEach((r) => {
      r.firstElementChild && (a.get(e(r)) || a.set(e(r), []).get(e(r))).push(r.firstElementChild);
    }), H.querySelectorAll("[data-tf]").forEach((r) => r.remove()), ma.clear();
    const o = document.createElement("div");
    o.innerHTML = t.map((r) => r.tiles ? Gf(r) : r.html).join(""), t.forEach((r) => r.tiles ? r.tiles.forEach((l) => ma.set(l.key, l.html)) : ma.set(r.key, r.html)), li = hd(t), o.querySelectorAll("[data-icon-for]").forEach((r) => {
      var c;
      const l = !r.firstElementChild && ((c = a.get(e(r))) == null ? void 0 : c.shift());
      l && r.appendChild(l);
    }), H.append(...o.children), pi(t.weather), hi(), Gs.disconnect(), Ve(), Ta(H), kl(H), Ne(H), O(), Bd(), rr(), kd(), requestAnimationFrame(st);
  }
  const gd = (t) => {
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
  function bd(t, e) {
    const a = document.createElement("div");
    a.innerHTML = e;
    const o = gd(t), r = ml(t, a.firstElementChild);
    Ta(r), kl(r), Ne(r), hl(r, o);
  }
  function Be() {
    !b || !H || Qt || md(Uf);
  }
  function Uf() {
    if (ae = !1, !H.querySelector("[data-tf]")) {
      Ua();
      return;
    }
    const t = cd();
    if (hd(t) !== li) {
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
      const r = H.querySelector('[data-k="' + CSS.escape(o.key) + '"]');
      r && (ma.set(o.key, o.html), bd(r, o.html), o.key.startsWith("energy:") && Bd());
    })), rr(), kd(), Ai(), O(), Ae == null || Ae.update(), ke == null || ke.forEach((a) => a.update()), g.classList.contains("tfDash") && Ri(), requestAnimationFrame(st);
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
    return '<div class="tfMoreList">' + t.map((o) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + W(o.name) + '</div><div class="tfMoreTiles' + (a ? " single" : "") + '">' + o.ids.map((r) => vn(r, e)).join("") + "</div></div>").join("") + "</div>";
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
  const wd = (t) => {
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
    const l = A;
    Mt._closing = !0, Mt.style.pointerEvents = "none", Mt.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220, easing: Ee.exit, fill: "forwards" });
    const c = e.pair.animate([{ transform: r }, { transform: "translateY(calc(100% + 40px))" }], { duration: 220, easing: Ee.exit, fill: "forwards" });
    let u = !1;
    const f = () => {
      u || (u = !0, Mt._closing = !1, Mt.style.pointerEvents = "", Mt.getAnimations().forEach((v) => v.cancel()), e.pair.getAnimations().forEach((v) => v.cancel()), A === l && Ll());
    };
    c.finished.then(f, f), setTimeout(f, 300);
  };
  Mt.addEventListener("pointerup", wd), Mt.addEventListener("pointercancel", wd);
  function bl() {
    const t = Mt.querySelector(".tfMorePair"), e = Mt.querySelector(".tfMore");
    t == null || t.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - e.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", bl, { passive: !0 }), b && vr();
  let lo = [];
  const Kf = (t) => t === "favourites" || t.startsWith("summary:") || t.startsWith("group:");
  function Xf(t) {
    const e = (k, N = "") => '<div class="tfMoreHead">' + (A != null && A.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + Ep + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + W(k) + "</div>" + N + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + Bp + "</button></div>", a = (k, N) => '<div class="tfMoreNow"><div class="tfMoreState">' + W(k) + "</div></div>", o = Zf;
    if (t === "favourites") {
      const k = Bt(), N = new Set(k), E = [{ name: "Starred", ids: k }, { name: "Home", ids: Gt.homeVacuums }, { name: "Security", ids: [...Gt.security.alarms, ...Gt.security.locks] }, ...Gt.rooms.map((R) => ({ name: R.name, ids: [...R.actions, ...R.plugs] }))].map((R, _) => _ ? { ...R, ids: R.ids.filter((at) => !N.has(at)) } : R).filter((R) => R.ids.length);
      return [e("Favourites"), a(k.length ? k.length + " starred" : "None starred"), o(E, { star: !0 }, !0)];
    }
    const r = (k, { name: N = "", alert: E = !1, plain: R = !1 } = {}) => {
      const _ = R ? [] : k.filter((Rt) => fr.includes(Rt.split(".")[0])), at = k.filter((Rt) => !_.includes(Rt)), St = (Rt) => Rt.startsWith("vacuum.") && qt(Rt).battery_level != null ? qt(Rt).battery_level + "%" : null;
      return '<div class="tfMoreGroup">' + (N ? '<div class="tfMoreGroupName">' + W(N) + "</div>" : "") + '<div class="tfMoreActions">' + _.map((Rt) => Zn(Rt, !0)).join("") + at.map((Rt) => vn(Rt, { plain: R, alert: E, say: R ? St(Rt) : null })).join("") + "</div></div>";
    };
    if (t.startsWith("summary:")) {
      const k = So().find((_) => _.key === t.slice(8));
      if (!k) return null;
      const N = k.key === "light" ? (k.groups || []).flatMap((_) => _.ids) : [], E = N.some((_) => {
        var at;
        return ((at = M[_]) == null ? void 0 : at.state) === "on";
      }), R = N.length ? '<button class="primary" type="button" data-acts="' + wa(N.map((_) => ["light", E ? "turn_off" : "turn_on", _])) + '">' + (E ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [e(k.name), '<div class="tfMoreNowRow">' + a(k.value) + R + "</div>", ...(k.groups || []).map((_) => r(_.ids, { name: _.name === k.name ? "" : _.name, alert: _.alert, plain: k.plain }))];
    }
    if (t.startsWith("group:")) {
      const [, k, N] = t.split(":"), E = Gt.rooms.find((at) => at.id === k), R = E && s(E).find((at) => at.key === N);
      if (!R) return null;
      const _ = R.acts ? '<button class="primary" type="button" data-acts="' + wa(R.acts) + '">' + (R.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [e(E.name + " " + R.label.toLowerCase()), '<div class="tfMoreNowRow">' + a(R.value) + _ + "</div>", r(h(E, N))];
    }
    const l = t.split(".")[0];
    M[t];
    const c = fr.includes(l) || ai.includes(l) ? ro(t) : wl(t), u = rh(t), f = [...u ? u.pages.map((k) => ({ name: k.name, svg: k.svg, tabs: k.tabs, html: k.space + '<div class="tfMoreCtl"' + wo(t).replace(" data-light", "") + ">" + k.rows.filter(Boolean).join("") + "</div>" })) : [{ name: "Control", svg: ua, html: eh(t) + (l === "plant" ? ph(t).join("") : "") + c.sections.filter(Boolean).join("") }], { name: "Info", svg: ac, html: sh(t) }];
    A && A.page == null && (A.page = 0), A && (A.pages = f.length);
    const v = (A == null ? void 0 : A.page) || 0, S = (A == null ? void 0 : A.mode) || "", x = f.length - 1, P = !!(u != null && u.infoButton), D = f.flatMap((k, N) => (P && N === x ? [] : k.tabs || [{ name: k.name, svg: k.svg }]).map((E) => ({ ...E, page: N }))), B = (k) => k.page === v && (k.mode == null || k.mode === S);
    return [
      Qf(t, c),
      '<div class="tfMorePages' + (u ? " tfMorePop" : "") + (S && v === 0 ? " tfMoreHold" : "") + '" data-more-pages>' + f.map((k) => '<section class="tfMorePage" aria-label="' + k.name + '" data-mode="' + S + '">' + k.html + "</section>").join("") + "</div>",
      // the pages' icons in place of their dots (Matt, 12 Nov): Control's sliders and Info's (i); a light's Colour its palette first
      (P ? '<div class="tfMoreFoot"><span class="tfMoreFootGap"></span>' : "") + (D.length ? '<div class="tfMoreDots tfMorePageIcons" role="tablist" aria-label="' + (P ? "Views" : "Pages") + '">' + D.map((k) => '<button type="button" role="tab" aria-selected="' + B(k) + '" aria-label="' + k.name + '" title="' + k.name + '" data-more-page="' + k.page + '"' + (k.mode != null ? ' data-more-mode="' + k.mode + '"' : "") + (B(k) ? "" : ' tabindex="-1"') + ">" + k.svg + "</button>").join("") + "</div>" : "") + (P ? '<button class="tfMoreInfoBtn" type="button" aria-label="Info" title="Info" aria-pressed="' + (v === x) + '" data-more-page="' + x + '" data-more-toggle>' + ac + "</button></div>" : "")
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
    return '<div class="tfMoreHead tfMoreTileHead' + (e.on ? " on" : "") + '"' + (e.tone ? ' data-tone="' + e.tone + '"' : "") + wo(t) + ">" + (A != null && A.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + Ep + "</button>" : "") + l + '<div class="tfName"><span class="activityRowName" id="tfMoreTitle">' + W(bt(t)) + '</span><span class="activityRowMeta">' + W(Jf(t, r)) + '</span></div><button class="tfBack" type="button" data-more-close aria-label="Close">' + Bp + "</button></div>";
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
    if (e === "cover") return '<div class="tfMoreSpace tfMoreFill"><div data-cover-art="' + W(t) + '"></div></div>';
    if (e === "light" && Va(t)) return '<div class="tfMoreSpace tfMoreFill"><div class="tfDacPad" data-dac="more:' + W(t) + '"></div></div>';
    const { big: a, lines: o } = ih(t);
    return '<div class="tfMoreSpace"><div class="tfMoreBig' + (Ye("pos", t) != null ? " live" : "") + '"><span class="tfMoreNum">' + W(a[0]) + "</span>" + (a[1] ? '<span class="tfMoreUnit">' + W(a[1]) + "</span>" : "") + '</div><div class="tfMoreFacts">' + o.map(([r, l]) => '<div class="tfMoreFact"><span>' + W(r) + "</span><span>" + W(l) + "</span></div>").join("") + "</div></div>";
  }
  const ah = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z"/></svg>', oh = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="5" width="14" height="14" rx="4"/></svg>', nh = ["light", "climate", "fan", "humidifier", "water_heater", "alarm_control_panel", "cover", "lock", "valve", "switch", "input_boolean"], co = (t, e) => '<div class="tfMoreField"><div class="tfMoreLabel">' + W(t) + "</div>" + e + "</div>", Ra = (t, e) => ya("tfSeg", t, e), vl = (t, e, a, o, r, l) => '<div class="tfBar tfPopBar ' + t + '" role="slider" tabindex="0" aria-label="' + W(o) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(a) + '" aria-valuetext="' + W(r) + '" data-drag="' + W(t + "|" + e) + '"><i style="width:' + Math.max(0, Math.min(100, a)) + '%"><output class="tfBarVal">' + W(r) + "</output></i>" + (l ? '<span class="tfBarIcon"' + fe("", l, o) + "></span>" : "") + "</div>", nr = (t, e) => '<div class="tfMoreSpace tfMoreSwitch' + (e.on ? " on" : "") + '"' + (e.tone ? ' data-tone="' + e.tone + '"' : "") + wo(t) + ">" + bn(t, e) + "</div>", yl = (t, e, a) => '<div class="tfMoreSpace"><div class="tfMoreBig"><span class="tfMoreNum">' + W(t) + "</span>" + (e ? '<span class="tfMoreUnit">' + W(e) + "</span>" : "") + '</div><div class="tfMoreFacts">' + a.filter(([, o]) => o != null && o !== "").map(([o, r]) => '<div class="tfMoreFact"><span>' + W(o) + "</span><span>" + W(r) + "</span></div>").join("") + "</div></div>", vd = () => '<input class="tfMoreCode" type="password" inputmode="numeric" autocomplete="off" placeholder="Code" aria-label="Code" data-code value="' + W((A == null ? void 0 : A.code) || "") + '">', Wi = (t, e, a, o, r) => ({ label: o, pressed: r, html: null, coded: [t, e, a].join("|") }), yd = (t, e) => '<div class="tfSeg" role="group" aria-label="' + W(t) + '">' + e.map((a) => '<button type="button" data-coded="' + W(a.coded) + '" aria-pressed="' + !!a.pressed + '">' + W(a.label) + "</button>").join("") + "</div>", xd = (t, e, a) => Ra(bt(t), [{ label: "Off", act: Dt(e, "turn_off", t), pressed: !a }, { label: "On", act: Dt(e, "turn_on", t), pressed: a }]);
  function rh(t) {
    var l, c, u;
    const e = t.split(".")[0], a = M[t], o = a.attributes;
    if (!nh.includes(e)) return null;
    const r = fr.includes(e) || ai.includes(e) ? ro(t) : wl(t);
    if (e === "light") {
      const f = a.state === "on", v = Sr(t), [S, x] = Vn(t), P = Ye("bright", t, f ? bo(a) : 0), D = Ye("ctf", t, f && o.color_mode === "color_temp" ? o.color_temp_kelvin : null), B = Ye("huev", t, f && Uo.includes(o.color_mode) && o.hs_color ? o.hs_color[0] : null), k = v.includes("color_temp"), N = v.some((ue) => Uo.includes(ue)), E = Va(t), R = (ue, me, ge, Re) => '<div class="tfBar tfVBar ' + ue + '" data-axis="y" role="slider" tabindex="0" aria-orientation="vertical" aria-label="' + W(bt(t) + " " + me.toLowerCase()) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(ge) + '" data-drag="' + ue + "|" + W(t) + '">' + Re + "</div>", _ = (ue, me, ge = "") => '<div class="tfVCol' + ge + '">' + me + "</div>", at = _("Brightness", R("bright", "Brightness", P, '<i style="height:' + P + '%"></i><span class="tfBarIcon"' + fe("", "mdi:white-balance-sunny", "Brightness") + "></span>")), St = D == null ? null : (x - D) / (x - S), Rt = k ? _("Warmth", R("ctf", "Warmth", St == null ? 0 : St * 100, St == null ? "" : '<b style="top:' + Math.round((1 - St) * 1e3) / 10 + '%"></b>'), " tfVWarm") : "", Wt = N ? _("Colour", R("huev", "Colour", B == null ? 0 : (1 - B / 360) * 100, B == null ? "" : '<b style="top:' + Math.round(B / 360 * 1e3) / 10 + '%"></b>'), " tfVColour") : "", Ft = '<div class="tfVCols">' + at + (Rt || Wt ? '<div class="tfVSwap">' + Rt + Wt + "</div>" : "") + "</div>", kt = E ? '<div class="tfLightPad"><div class="tfDacPad" data-dac="more:' + W(t) + '"></div></div>' : "", Tt = [N && { name: "Colour", svg: ah, mode: "colour" }, E && { name: "Dual Axis Controller", svg: oh, mode: "dac" }, { name: "Sliders", svg: ua, mode: "" }].filter(Boolean);
      return { infoButton: !0, pages: [{ name: "Control", svg: ua, space: '<div class="tfMoreSpace tfLightSpace">' + Ft + kt + "</div>", rows: [], tabs: Tt.length > 1 ? Tt : [] }] };
    }
    if (e === "climate") {
      const f = o.target_temp_step || 0.5, v = Number(o.temperature), S = Number(o.target_temp_low), x = Number(o.target_temp_high), P = (N) => Dt("climate", "set_temperature", t, N), D = (N, E, R, _, at) => (E == null ? void 0 : E.length) && co(N, Ra(N, E.map((St) => ({ label: jt(St), act: Dt("climate", _, t, { [at]: St }), pressed: (R === "state" ? a.state : o[R]) === St })))), B = Number.isFinite(S) && Number.isFinite(x) && co("Range", '<div class="tfMoreRange">' + ra("Low", He(S) + " °C", P({ target_temp_low: S - f, target_temp_high: x }), P({ target_temp_low: S + f, target_temp_high: x })) + ra("High", He(x) + " °C", P({ target_temp_low: S, target_temp_high: x - f }), P({ target_temp_low: S, target_temp_high: x + f })) + "</div>"), k = Number(o.humidity);
      return { pages: [{
        name: "Control",
        svg: ua,
        space: yl(He(o.current_temperature), "°C", [["Target", Number.isFinite(v) ? He(v) + " °C" : null], ["Humidity", o.current_humidity != null ? o.current_humidity + "%" : null], ["Action", o.hvac_action && jt(o.hvac_action)]]),
        rows: [
          Number.isFinite(v) && ra("Target temperature", He(v) + " °C", P({ temperature: v - f }), P({ temperature: v + f })),
          B,
          D("Mode", o.hvac_modes, "state", "set_hvac_mode", "hvac_mode"),
          D("Fan", o.fan_modes, "fan_mode", "set_fan_mode", "fan_mode"),
          D("Swing", o.swing_modes, "swing_mode", "set_swing_mode", "swing_mode"),
          D("Preset", o.preset_modes, "preset_mode", "set_preset_mode", "preset_mode"),
          Number.isFinite(k) && o.min_humidity != null && co("Humidity", ra("Target humidity", k + "%", Dt("climate", "set_humidity", t, { humidity: k - 1 }), Dt("climate", "set_humidity", t, { humidity: k + 1 })))
        ]
      }] };
    }
    if (e === "fan") {
      const f = a.state === "on", v = Ye("fan", t, f && Number(o.percentage) || 0), S = o.percentage != null;
      return { pages: [{ name: "Control", svg: ua, space: nr(t, r), rows: S ? [
        vl("fan", t, v, bt(t) + " speed", v + "%", "mdi:fan"),
        o.oscillating != null && co("Oscillate", Ra("Oscillate", [{ label: "Off", act: Dt("fan", "oscillate", t, { oscillating: !1 }), pressed: !o.oscillating }, { label: "On", act: Dt("fan", "oscillate", t, { oscillating: !0 }), pressed: !!o.oscillating }])),
        o.direction && co("Direction", Ra("Direction", [["forward", "Forward"], ["reverse", "Reverse"]].map(([x, P]) => ({ label: P, act: Dt("fan", "set_direction", t, { direction: x }), pressed: o.direction === x })))),
        ((l = o.preset_modes) == null ? void 0 : l.length) && co("Preset", Ra("Preset", o.preset_modes.map((x) => ({ label: jt(x), act: Dt("fan", "set_preset_mode", t, { preset_mode: x }), pressed: o.preset_mode === x }))))
      ] : [xd(t, "fan", f)] }] };
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
      const f = [...$p, ["armed_vacation", "Vacation", "alarm_arm_vacation", 32]].filter(([, , , x]) => !x || he(t, x)), v = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "clear", "0", "back"], S = '<div class="tfMoreSpace tfMoreKeypad">' + vd() + '<div class="tfKeypad">' + v.map((x) => '<button type="button" data-key="' + x + '"' + (x === "back" ? ' aria-label="Delete"' : "") + ">" + (x === "clear" ? "Clear" : x === "back" ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22,3H7C6.31,3 5.77,3.35 5.41,3.88L0,12L5.41,20.11C5.77,20.64 6.31,21 7,21H22A2,2 0 0,0 24,19V5A2,2 0 0,0 22,3M22,19H7.07L2.4,12L7.06,5H22V19M10.41,17L14,13.41L17.59,17L19,15.59L15.41,12L19,8.41L17.59,7L14,10.59L10.41,7L9,8.41L12.59,12L9,15.59L10.41,17Z"/></svg>' : x) + "</button>").join("") + "</div></div>";
      return { pages: [{ name: "Control", svg: ua, space: S, rows: [yd(bt(t), f.map(([x, P, D]) => Wi("alarm_control_panel", D, t, P, a.state === x)))] }] };
    }
    if (e === "cover") {
      if (o.current_position == null) return { pages: [{ name: "Control", svg: ua, space: nr(t, r), rows: [Ra(bt(t), [{ label: "Open", act: Dt("cover", "open_cover", t), pressed: a.state !== "closed" }, { label: "Close", act: Dt("cover", "close_cover", t), pressed: a.state === "closed" }])] }] };
      const f = a.state === "opening" || a.state === "closing", v = cn(t), S = Lr(t);
      return { pages: [{ name: "Control", svg: ua, space: '<div class="tfMoreSpace tfMoreArt"><div data-cover-art="' + W(t) + '"></div></div>', rows: [
        he(t, tc) && gn(t, v),
        S != null && co("Tilt", vl("tiltp", t, Ye("tiltp", t, S), bt(t) + " tilt", Math.round(Ye("tiltp", t, S)) + "%")),
        Ra(bt(t), [he(t, Ip) && { label: "Open", act: Dt("cover", "open_cover", t), disabled: v >= 100 && !f }, he(t, qp) && { label: "Stop", act: Dt("cover", "stop_cover", t) }, he(t, Fp) && { label: "Close", act: Dt("cover", "close_cover", t), disabled: v <= 0 && !f }])
      ] }] };
    }
    if (e === "lock")
      return { pages: [{ name: "Control", svg: ua, space: nr(t, r), rows: [
        vd(),
        yd(bt(t), [Wi("lock", "lock", t, "Lock", a.state === "locked"), Wi("lock", "unlock", t, "Unlock", a.state === "unlocked"), he(t, Zp) && Wi("lock", "open", t, "Open", a.state === "open")].filter(Boolean))
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
    return { pages: [{ name: "Control", svg: ua, space: nr(t, r), rows: [xd(t, e, a.state === "on")] }] };
  }
  function ih(t) {
    var S;
    const e = M[t], a = qt(t), o = t.split(".")[0], r = (((S = or[o]) == null ? void 0 : S.call(or, a)) || []).filter(([, x]) => x != null && x !== ""), l = (x) => {
      const P = r.findIndex(([D]) => D === x);
      return P < 0 ? null : r.splice(P, 1)[0][1];
    }, c = (x) => {
      const P = String(x).match(/^(-?[\d.,]+)\s*(.*)$/);
      return P ? [P[1], P[2]] : [String(x), ""];
    }, u = () => [jt(String(e.state).replace(/_/g, " ")), ""];
    let f;
    o === "light" ? (l("Brightness"), f = e.state === "on" && vo(t) ? [String(bo(e)), "%"] : u()) : o === "climate" ? f = c(l("Current temperature") || He(a.current_temperature) + " °C") : o === "cover" ? (l("Position"), f = a.current_position != null ? [String(Wa(t)), "%"] : u()) : o === "humidifier" ? f = c(l("Current humidity") || e.state) : o === "vacuum" ? f = c(l("Battery") || e.state) : o === "plant" ? f = c(l("Moisture") || e.state) : ["media_player", "lock", "alarm_control_panel", "valve"].includes(o) ? f = u() : f = c(e.state + (a.unit_of_measurement ? " " + a.unit_of_measurement : ""));
    const v = r.length ? r.slice(0, 4) : [["State", Oe(t)]];
    return { big: f, lines: v };
  }
  function sh(t) {
    var v, S, x, P, D, B, k;
    const e = M[t], a = d(), o = (v = a == null ? void 0 : a.entities) == null ? void 0 : v[t], r = o != null && o.device_id ? (S = a == null ? void 0 : a.devices) == null ? void 0 : S[o.device_id] : null, l = '<div class="tfMoreGraph"><div class="tfMoreGroupName">Last 24 hours</div><svg class="tfGraph tfDay" data-day="' + W(t) + '" role="img" aria-label="' + W(bt(t)) + ', last 24 hours"></svg></div>', c = (x = Gt.areaOf) == null ? void 0 : x.call(Gt, t), u = c && (((P = Gt.rooms.find((N) => N.id === c)) == null ? void 0 : P.name) || ((B = (D = a == null ? void 0 : a.areas) == null ? void 0 : D[c]) == null ? void 0 : B.name)) || "", f = [
      ...((k = or[t.split(".")[0]]) == null ? void 0 : k.call(or, qt(t))) || [],
      ["Changed", e.last_changed && wi(Date.parse(e.last_changed))],
      ["Area", u],
      ["Device", r && (r.name_by_user || r.name)],
      ["Integration", (o == null ? void 0 : o.platform) && jt(o.platform.replace(/_/g, " "))],
      ["Entity", t]
    ].filter(([, N]) => N != null && N !== "");
    return l + '<div class="tfMoreRows">' + f.map(([N, E]) => '<div class="tfMoreRow"><span>' + W(N) + "</span><span>" + W(E) + "</span></div>").join("") + "</div>" + Yf(t) + (r ? '<button class="tfDetailsBtn tfMoreLink" type="button" data-path="/config/devices/device/' + W(o.device_id) + '"><span>Device page</span>' + oc + "</button>" : "");
  }
  const lh = () => "";
  let xl = "";
  function Ml(t) {
    var e;
    A && (A.details = t, rr(), (e = Mt.querySelector(t ? "[data-details-close]" : "[data-details]")) == null || e.focus({ preventScroll: !0 }));
  }
  const Vi = (t) => {
    const e = M[t], a = Wa(t), o = cn(t);
    return { kind: Jl(e), name: bt(t), text: Oe(t), pos: a, target: Math.abs(o - a) > 0.5 ? o : null, moving: e.state === "opening" || e.state === "closing", tilt: Lr(t) ?? 100, canSet: he(t, tc) };
  };
  function kl(t) {
    t.querySelectorAll("[data-cover-art]").forEach((e) => {
      const a = e.dataset.coverArt, o = e.dataset.artKey || "more:" + a;
      let r = na.get(o);
      r || (r = a0({ onMove: (l) => Zr(a, l), onSet: (l) => {
        Zr(a, l), $r("pos", a);
      } }), r.coverId = a, na.set(o, r)), e.replaceWith(r.el), r.update(Vi(a));
    });
  }
  const Md = (t) => [...na.values()].filter((e) => e.coverId === t), Sl = () => na.forEach((t) => {
    M[t.coverId] && t.update(Vi(t.coverId));
  }), kd = () => {
    na.forEach((t, e) => {
      t.el.isConnected || (t.destroy(), na.delete(e));
    }), Sl();
  };
  function rr() {
    var l, c;
    if (!A || !(Kf(A.id) || M[A.id])) {
      Mt.hidden = !0;
      return;
    }
    if (Vt().some((u) => u.endsWith("|" + A.id))) {
      ae = !0, Sl();
      return;
    }
    const t = Xf(A.id), e = Mt.querySelector(".tfMore");
    if (!t) {
      Gi();
      return;
    }
    const a = gd(Mt), o = lh(A.id), r = A.frame ? A.frame.wide : A.id.startsWith("summary:") || A.id.startsWith("group:");
    if (Mt.hidden || !e || t.length !== lo.length || e.classList.contains("wide") !== r) {
      const u = Al ? A.scroll || 0 : !Mt.hidden && e ? e.scrollTop : 0;
      if (Mt.innerHTML = '<div class="tfMorePair' + (Mt.hidden ? "" : " still") + '" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (r ? " wide" : "") + '"' + (A.frame ? ' style="height:' + A.frame.h + 'px"' : "") + ' tabindex="-1">' + t.join("") + "</section></div>", xl = o, Mt.classList.toggle("wide", r), Mt.hidden = !1, bl(), kl(Mt), Ne(Mt), Ta(Mt), Mt.querySelectorAll("[data-day]").forEach((f) => Ld(f.dataset.day, f, A.at)), Cd(Mt), u && (Mt.querySelector(".tfMore").scrollTop = u), Sd(), hl(Mt, a), !Mt.contains(n.activeElement)) {
        const f = Mt.querySelector("[data-more-close]");
        (l = f != null && f.offsetParent ? f : Mt.querySelector(".tfMore")) == null || l.focus({ preventScroll: !0 });
      }
    } else {
      if (t.forEach((u, f) => {
        var P, D;
        if (u === lo[f] || u.includes("data-cover-art") || e.children[f].contains((D = (P = n.activeElement) == null ? void 0 : P.matches) != null && D.call(P, "input,select") ? n.activeElement : null)) return;
        if (Vt().some((B) => e.children[f].querySelector('[data-drag="' + CSS.escape(B) + '"]'))) {
          ae = !0;
          return;
        }
        const v = document.createElement("div");
        v.innerHTML = u;
        const S = [...e.children[f].querySelectorAll(".tfMoreCtl,.tfMorePage")].map((B) => B.scrollTop), x = ml(e.children[f], v.firstElementChild);
        x.querySelectorAll(".tfMoreCtl,.tfMorePage").forEach((B, k) => {
          S[k] && (B.scrollTop = S[k]);
        }), Ta(x), Cd(x), Ne(x);
      }), o !== xl) {
        const u = Mt.querySelector(".tfMoreSideBody");
        u && (u.innerHTML = o), xl = o;
      }
      e.querySelectorAll("[data-day]").forEach((u) => {
        u.innerHTML || Ld(u.dataset.day, u, A.at);
      }), Sd(), Mt.contains(n.activeElement) || hl(Mt, a);
    }
    (c = Mt.querySelector(".tfMorePair")) == null || c.classList.toggle("details", !!(A.details && o)), lo = t, Sl();
  }
  function Sd() {
    const t = Mt.querySelector("[data-more-pages]");
    !t || !A || (t.scrollTo({ left: (A.page || 0) * t.clientWidth, behavior: "instant" }), Cl(), _l(t));
  }
  function _l(t) {
    const e = t.children[(A == null ? void 0 : A.page) || 0];
    e && (t.style.height = e.scrollHeight + "px");
  }
  function Cl() {
    var e;
    const t = (A == null ? void 0 : A.page) || 0;
    Mt.querySelectorAll("[data-more-page]").forEach((a) => {
      const o = Number(a.dataset.morePage) === t && (a.dataset.moreMode == null || a.dataset.moreMode === (A.mode || ""));
      if (a.hasAttribute("data-more-toggle")) {
        a.setAttribute("aria-pressed", String(o));
        return;
      }
      a.setAttribute("aria-selected", String(o)), a.tabIndex = o ? 0 : -1;
    }), (e = Mt.querySelector("[data-more-pages]")) == null || e.classList.toggle("tfMoreHold", !!A.mode && t === 0);
  }
  function ch(t, e) {
    var o, r;
    const a = Mt.querySelector("[data-more-pages]");
    !a || !A || (A.page = Math.max(0, Math.min((A.pages || 2) - 1, t)), a.scrollTo({ left: A.page * a.clientWidth, behavior: (o = window.matchMedia) != null && o.call(window, "(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" }), Cl(), _l(a), e && ((r = Mt.querySelector('.tfMoreDots [aria-selected="true"]')) == null || r.focus({ preventScroll: !0 })));
  }
  function ji(t, e, a) {
    A && (e != null && e !== (A.mode || "") && (A.mode = e, Mt.querySelectorAll(".tfMorePage").forEach((o) => {
      o.dataset.mode = e;
    })), ch(t, a));
  }
  let ir = null;
  Mt.addEventListener("touchstart", (t) => {
    var a, o, r, l;
    const e = t.touches[0];
    ir = (o = (a = t.target).closest) != null && o.call(a, "[data-more-pages]") && !((l = (r = t.target).closest) != null && l.call(r, "[data-drag],[data-blocks],.tfDacPad,[data-cover-art]")) && t.touches.length === 1 ? { x: e.clientX, y: e.clientY } : null;
  }, { passive: !0 }), Mt.addEventListener("touchend", (t) => {
    if (!ir || !A || (A.page || 0) !== 0 || !Mt.querySelector("[data-more-mode]")) {
      ir = null;
      return;
    }
    const e = t.changedTouches[0], a = e.clientX - ir.x, o = e.clientY - ir.y;
    if (ir = null, Math.abs(a) < 40 || Math.abs(a) < Math.abs(o) * 1.5) return;
    const r = [...Mt.querySelectorAll(".tfMoreDots [data-more-mode]")].map((c) => c.dataset.moreMode), l = r.indexOf(A.mode || "");
    a > 0 && l > 0 ? ji(0, r[l - 1]) : a < 0 && A.mode && l < r.length - 1 && ji(0, r[l + 1]);
  }, { passive: !0 });
  let _d = 0;
  Mt.addEventListener("scroll", (t) => {
    var a;
    const e = t.target;
    !((a = e.matches) != null && a.call(e, "[data-more-pages]")) || !A || (clearTimeout(_d), _d = setTimeout(() => {
      if (!A) return;
      const o = Math.round(e.scrollLeft / Math.max(1, e.clientWidth));
      o !== (A.page || 0) && (A.page = o, Cl(), _l(e));
    }, 80));
  }, !0), Mt.addEventListener("input", (t) => {
    var e, a;
    (a = (e = t.target).matches) != null && a.call(e, "[data-code]") && A && (A.code = t.target.value);
  }), Mt.addEventListener("click", (t) => {
    const e = t.target.closest("[data-key]"), a = t.target.closest("[data-coded]");
    if (!A || !(e || a)) return;
    const o = Mt.querySelector("[data-code]");
    if (e) {
      const f = e.dataset.key, v = A.code || "";
      A.code = f === "clear" ? "" : f === "back" ? v.slice(0, -1) : (v + f).slice(0, 12), o && (o.value = A.code);
      return;
    }
    const [r, l, c] = a.dataset.coded.split("|"), u = A.code;
    A.code = "", o && (o.value = ""), Yr(r, l, c, u ? { code: u } : null).catch(() => {
    });
  }), setInterval(() => {
    A && rr();
  }, 15 * 1e3);
  function zi(t, e) {
    var r, l;
    const a = !!(A && e && Mt.contains(e)), o = a && Mt.querySelector(".tfMore");
    if (a && (A.scroll = o.scrollTop), a && !A.under) {
      const c = Mt.querySelector(".tfMorePair"), u = { more: A, parts: lo, opener: e };
      c.classList.add("still"), c.style.transform = "", c.inert = !0, Ya.innerHTML = "", Ya.appendChild(c), Ya.classList.toggle("wide", Mt.classList.contains("wide")), Ya.hidden = !1, Mt.hidden = !0, Mt.innerHTML = "", A = { id: t, opener: e, back: null, frame: null, under: u, at: Number((r = e == null ? void 0 : e.dataset) == null ? void 0 : r.at) || null }, Tl();
      return;
    }
    A = { id: t, opener: a ? A.opener : e, back: a ? A : null, frame: a ? A.frame || { wide: o.classList.contains("wide"), h: o.offsetHeight } : null, under: a ? A.under : null, at: Number((l = e == null ? void 0 : e.dataset) == null ? void 0 : l.at) || null }, Tl();
  }
  let Al = !1;
  function Tl() {
    lo = [], Al = !Mt.hidden, na.forEach((t, e) => {
      e !== A.id && Mt.contains(t.el) && (t.destroy(), na.delete(e));
    }), rr(), Al = !1;
  }
  function Gi() {
    if (!A) return;
    const t = A;
    Wm(Mt, () => {
      A === t && Ll();
    });
  }
  function Ll() {
    var o, r, l, c, u, f, v, S;
    const t = A == null ? void 0 : A.opener, e = A == null ? void 0 : A.under;
    A = null, na.forEach((x, P) => {
      Mt.contains(x.el) && (x.destroy(), na.delete(P));
    }), sa.forEach((x, P) => {
      /^more2?:/.test(P) && sa.delete(P);
    }), Mt.hidden = !0, Mt.innerHTML = "";
    const a = { preventScroll: !0 };
    if (e) {
      const x = Ya.firstElementChild;
      A = e.more, lo = e.parts, x && (x.inert = !1, Mt.appendChild(x)), Mt.classList.toggle("wide", Ya.classList.contains("wide")), Ya.hidden = !0, Ya.innerHTML = "", Mt.hidden = !1;
      const P = Mt.querySelector(".tfMore");
      P && (P.scrollTop = A.scroll || 0), rr(), (r = (o = e.opener) != null && o.isConnected ? e.opener : Mt.querySelector("[data-more-close]")) == null || r.focus(a);
      return;
    }
    t != null && t.isConnected ? t.focus(a) : (l = t == null ? void 0 : t.dataset) != null && l.more ? (c = H.querySelector('[data-more="' + CSS.escape(t.dataset.more) + '"]')) == null || c.focus(a) : (u = t == null ? void 0 : t.dataset) != null && u.summary ? (f = H.querySelector('[data-summary="' + CSS.escape(t.dataset.summary) + '"]')) == null || f.focus(a) : (v = t == null ? void 0 : t.hasAttribute) != null && v.call(t, "data-favs-edit") && ((S = H.querySelector("[data-favs-edit]")) == null || S.focus(a));
  }
  const dh = { moisture: "moisture", light: "light", brightness: "light", temperature: "temperature", fertility: "fertility", conductivity: "fertility" };
  function ph(t) {
    const e = String(qt(t).problem || ""), a = "sensor." + t.split(".")[1] + "_";
    return e === "none" ? [] : e.split(",").map((o) => o.trim().split(" ")).map(([o, r]) => {
      const l = dh[o], c = a + l;
      if (!l || !M[c] || !In[l]) return "";
      const u = qt(c).unit_of_measurement || "", [f, v] = In[l], S = r === "low";
      return '<div class="tfMoreGroup tfPlantProblem"><div class="tfMoreGroupName">' + W(bt(c)) + '</div><svg class="tfGraph tfPlantGraph" data-plant-graph="' + W(c) + '" data-guide="' + (S ? f : v) + '" data-guide-word="' + W("Wants " + (S ? "" : "up to ") + (S ? f : v).toLocaleString() + (u === "%" ? "%" : u ? " " + u : "") + (S ? " or more" : "")) + '" role="img" aria-label="' + W(bt(c)) + ', last 24 hours"></svg></div>';
    }).filter(Boolean);
  }
  const Cd = (t) => t.querySelectorAll("[data-plant-graph]").forEach((e) => Ed(e.dataset.plantGraph, e, { guide: Number(e.dataset.guide), guideWord: e.dataset.guideWord }).then(() => Sc(e)));
  function Dl(t, e, a, o = {}) {
    const r = e.map((N) => N[1]).concat(o.guide != null ? [o.guide] : []), l = o.zero ? 0 : Math.min(...r), c = Math.max(...r), u = Math.max(120, t.clientWidth || 260), f = Math.max(60, t.clientHeight || 130), v = 8, S = f - 20, x = Date.now() - 24 * 3600 * 1e3, P = 24 * 3600 * 1e3, D = (N) => Math.max(0, Math.min(u, (N - x) / P * u)), B = (N) => c === l ? (v + S) / 2 : S - (N - l) / (c - l) * (S - v);
    let k = "M" + D(e[0][0]).toFixed(1) + " " + B(e[0][1]).toFixed(1);
    if (e.length > 2) k = mu(e.map((N) => [D(N[0]), B(N[1])]));
    else for (let N = 1; N < e.length; N++) k += o.smooth ? "L" + D(e[N][0]).toFixed(1) + " " + B(e[N][1]).toFixed(1) : "H" + D(e[N][0]).toFixed(1) + "V" + B(e[N][1]).toFixed(1);
    t.setAttribute("viewBox", "0 0 " + u + " " + f), t.setAttribute("aria-label", a), t.innerHTML = gu(u, v, S) + '<path d="' + k + "V" + S + "H" + D(e[0][0]).toFixed(1) + 'Z" fill="' + (o.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + k + '" fill="none" stroke="' + (o.colour || "var(--primary)") + '" stroke-width="' + De.graphs.weight + '" stroke-linejoin="round" stroke-linecap="round"/><text x="0" y="' + (f - 4) + '">24 h ago</text><text x="' + u + '" y="' + (f - 4) + '" text-anchor="end">Now</text>' + (o.guide != null ? '<line class="tfGuide" x1="0" x2="' + u + '" y1="' + B(o.guide).toFixed(1) + '" y2="' + B(o.guide).toFixed(1) + '"/><text class="tfGuideWord" x="' + u + '" y="' + (B(o.guide) < 20 ? B(o.guide) + 14 : B(o.guide) - 5).toFixed(1) + '" text-anchor="end">' + W(o.guideWord || "") + "</text>" : "");
  }
  const Ad = { lock: ["unlocked", "open", "opening"], cover: ["open", "opening", "closing"], valve: ["open", "opening", "closing"], vacuum: ["cleaning", "returning"] }, uh = (t, e) => {
    const a = t.split(".")[0];
    return Ad[a] ? Ad[a].includes(e) : a === "alarm_control_panel" || a === "climate" || a === "media_player" ? !["off", "standby", "disarmed", "unavailable", "unknown"].includes(e) : e === "on";
  }, fh = (t) => {
    const e = t.split(".")[0], a = qt(t).device_class;
    return e === "binary_sensor" ? { moisture: "Wet", smoke: "Smoke", gas: "Gas", carbon_monoxide: "Carbon monoxide", safety: "Unsafe" }[a] || (ls.includes(a) ? "Open" : "On") : { lock: "Unlocked", cover: "Open", valve: "Open", vacuum: "Cleaning", alarm_control_panel: "Armed" }[e] || "On";
  }, Td = /* @__PURE__ */ new Map();
  let hh = 0;
  async function mh(t) {
    var r;
    let e = Td.get(t);
    if (!e || Date.now() - e.at > 60 * 1e3) {
      let l = [];
      if ($a(t) && Number.isFinite(Number((r = M[t]) == null ? void 0 : r.state))) l = Dd(t).map(([c, u]) => [c, String(u)]);
      else try {
        const c = await T({ type: "history/history_during_period", start_time: new Date(Date.now() - 864e5).toISOString(), entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        l = ((c == null ? void 0 : c[t]) || []).map((u) => [u.lu != null ? u.lu * 1e3 : Date.parse(u.last_updated || u.last_changed), String(u.s ?? u.state)]).filter(([u]) => Number.isFinite(u));
      } catch {
      }
      l.length || (l = (Or || []).filter((c) => c.entity_id === t).map((c) => [c.when * 1e3, String(c.state)])), e = { at: Date.now(), pts: l }, Td.set(t, e);
    }
    const a = M[t], o = e.pts.slice().sort((l, c) => l[0] - c[0]);
    return a && (!o.length || o[o.length - 1][1] !== a.state) && o.push([Date.parse(a.last_changed) || Date.now(), a.state]), o;
  }
  async function Ld(t, e, a) {
    const o = await mh(t);
    if (!e.isConnected) return;
    const r = o.map(([_, at]) => [_, Number(at)]);
    if (o.length > 1 && r.every(([, _]) => Number.isFinite(_))) {
      Dl(e, r, bt(t) + ", last 24 hours");
      return;
    }
    const l = Date.now(), c = l - 864e5, u = Math.max(200, e.clientWidth || 360), f = 62, v = (_) => Math.max(0, Math.min(u, (_ - c) / 864e5 * u)), S = [];
    let x = null;
    o.forEach(([_, at]) => {
      const St = uh(t, at);
      St && x == null ? x = Math.max(_, c) : !St && x != null && (S.push([x, Math.max(_, c)]), x = null);
    }), x != null && S.push([x, l]);
    const P = Es(t) ? "var(--danger)" : t.startsWith("light.") ? "#ffaa00" : "var(--primary)", D = fh(t), B = "tfDayClip" + ++hh, k = S.map(([_, at]) => D + (at >= l - 1e3 && _ <= c + 1e3 ? " all day" : at >= l - 1e3 ? " since " + ba(_) : _ <= c + 1e3 ? " until " + ba(at) : " " + ba(_) + "–" + ba(at)));
    let N = "", E = -1 / 0;
    S.forEach(([_], at) => {
      const St = k[at].length * 5.4, Rt = Math.min(v(_), u - St);
      Rt < E + 8 || (N += '<text x="' + Rt.toFixed(1) + '" y="10">' + W(k[at]) + "</text>", E = Rt + St);
    });
    let R = '<text x="' + u + '" y="' + (f - 2) + '" text-anchor="end">Now</text>';
    [0, 6, 12, 18].forEach((_) => {
      let at = new Date(l).setHours(_, 0, 0, 0);
      at > l && (at -= 864e5), v(at) > 8 && v(at) < u - 34 && (R += '<text x="' + v(at).toFixed(1) + '" y="' + (f - 2) + '" text-anchor="middle">' + String(_).padStart(2, "0") + "</text>");
    }), e.setAttribute("viewBox", "0 0 " + u + " " + f), e.setAttribute("aria-label", bt(t) + ", last 24 hours: " + (k.length ? k.join(", ") : "no changes")), e.innerHTML = '<clipPath id="' + B + '"><rect x="0" y="18" width="' + u + '" height="26" rx="8"/></clipPath>' + N + '<rect x="0" y="18" width="' + u + '" height="26" rx="8" fill="var(--text)" fill-opacity=".1"/><g clip-path="url(#' + B + ')">' + S.map(([_, at]) => '<rect x="' + v(_).toFixed(1) + '" y="18" width="' + Math.max(2, v(at) - v(_)).toFixed(1) + '" height="26" fill="' + P + '"/>').join("") + "</g>" + (a && a >= c ? '<line x1="' + v(a).toFixed(1) + '" x2="' + v(a).toFixed(1) + '" y1="13" y2="49" stroke="var(--text)" stroke-width="2" stroke-linecap="round"/>' : "") + R;
  }
  function Dd(t) {
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
  async function Ed(t, e, a = {}) {
    var B, k;
    let o = ft.get(t);
    if (t.endsWith("_solar_power")) o = { at: Date.now(), points: Gd() };
    else if ($a(t)) o = { at: Date.now(), points: Dd(t) };
    else if (!o || Date.now() - o.at > 5 * 60 * 1e3) {
      try {
        const N = new Date(Date.now() - 864e5).toISOString(), E = await T({ type: "history/history_during_period", start_time: N, entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), R = ((E == null ? void 0 : E[t]) || []).map((_) => [_.lu != null ? _.lu * 1e3 : Date.parse(_.last_updated || _.last_changed), Number(_.s ?? _.state)]).filter(([_, at]) => Number.isFinite(_) && Number.isFinite(at));
        o = { at: Date.now(), points: R };
      } catch {
        o = { at: Date.now(), points: [] };
      }
      ft.set(t, o);
    }
    const r = e || H.querySelector('[data-graph="' + CSS.escape(t) + '"]');
    if (!r) return;
    const l = M[t], c = ((B = l == null ? void 0 : l.attributes) == null ? void 0 : B.unit_of_measurement) || "", u = o.points.slice(), f = Number(l == null ? void 0 : l.state);
    if (Number.isFinite(f) && !t.endsWith("_solar_power") && u.push([Date.now(), f]), u.length < 2) {
      r.setAttribute("aria-label", bt(t) + ": no history for the last 24 hours"), r.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const v = u.map((N) => N[1]), S = Math.min(...v), x = Math.max(...v), P = (N) => N.toLocaleString(void 0, { maximumFractionDigits: Math.abs(N) >= 100 ? 0 : 1 }), D = ((k = l == null ? void 0 : l.attributes) == null ? void 0 : k.state_class) === "total_increasing";
    Dl(r, u, bt(t) + ", last 24 hours: " + (D ? "+" + P(v[v.length - 1] - v[0]) : S === x ? P(S) : P(S) + " to " + P(x)) + (c ? " " + c : ""), { smooth: t.endsWith("_solar_power"), zero: t.endsWith("_solar_power"), ...a });
  }
  function Bd() {
    const t = H == null ? void 0 : H.querySelector("[data-solar]");
    if (!t) return;
    const e = Gd();
    Dl(t, e, "Solar, last 24 hours: up to " + He(Math.max(...e.map((a) => a[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function gh(t, e) {
    const a = e.entity_id, o = Ca.get(a) || {}, r = { open_cover: 100, close_cover: 0, set_cover_position: e.position, toggle: Wa(a) > 0 ? 0 : 100 }[t], l = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: e.tilt_position }[t];
    r != null && (o.pos = r), l != null && (o.tilt = l), t === "stop_cover" && (delete o.pos, delete o.tilt), t === "stop_cover_tilt" && delete o.tilt, o.at = Date.now(), Ca.set(a, o);
  }
  function Rd(t, e, a) {
    var r;
    const o = a == null ? void 0 : a.entity_id;
    return t !== "light" || typeof o != "string" || !va[o] || !vo(o) || a.brightness_pct != null || a.brightness != null ? [e, a] : e !== "turn_on" && !(e === "toggle" && ((r = M[o]) == null ? void 0 : r.state) !== "on") ? [e, a] : ["turn_on", { ...a, brightness_pct: va[o] }];
  }
  function Yr(t, e, a, o) {
    let r = { entity_id: a, ...o || {} };
    return [e, r] = Rd(t, e, r), t === "cover" && gh(e, r), rn[a] = (rn[a] || 0) + 1, uo.set(zp, JSON.stringify(rn)), ci.call(t, e, r) ? Promise.resolve() : Promise.resolve(q(t, e, r));
  }
  function El(t) {
    const [e, a, o, r] = t.split("|");
    Yr(e, a, o, r ? JSON.parse(r) : null).catch(() => {
    });
  }
  function Zr(t, e) {
    lt.set("pos|" + t, e), _t("pos|" + t), ma.delete(t), lo = lo.map(() => ""), [H, Mt].forEach((o) => o.querySelectorAll('[data-blocks="' + CSS.escape(t) + '"]').forEach((r) => xo(r, e)));
    const a = H.querySelector('.tfAction[data-k="' + CSS.escape(t) + '"] .tfName .activityRowMeta');
    if (a && (a.textContent = Math.round(e) + "%"), (A == null ? void 0 : A.id) === t) {
      const o = Mt.querySelector(".tfMoreState"), r = Mt.querySelector(".tfMoreSub");
      o && (o.textContent = Math.round(e) + "%", o.classList.add("live")), r && (r.textContent = "Currently " + Wa(t) + "%");
    }
    Md(t).forEach((o) => o.update(Vi(t)));
  }
  const bh = (t, e) => {
    const a = t.shiftKey ? 10 : 1, o = { ArrowUp: e + a, ArrowRight: e + a, ArrowDown: e - a, ArrowLeft: e - a, PageUp: e + 25, PageDown: e - 25, Home: 0, End: 100 }[t.key];
    return o == null ? null : Math.max(0, Math.min(100, Math.round(o)));
  };
  function wh(t, e) {
    var k;
    const a = t.dataset.blocks;
    (k = t.setPointerCapture) == null || k.call(t, e.pointerId), vt.add("pos|" + a), P("pos|" + a);
    const o = (N) => {
      const E = t.getBoundingClientRect();
      return Math.max(0, Math.min(100, (N.clientX - E.left) / E.width * 100));
    }, r = o(e), l = e.clientX;
    let c = !1, u = cn(a), f = r, v = 0;
    const S = () => {
      u = Math.abs(f - u) < 0.2 ? f : u + (f - u) * 0.14, Zr(a, u), v = requestAnimationFrame(S);
    }, x = () => {
      c || (c = !0, t.classList.add("fine"), v = requestAnimationFrame(S));
    }, P = setTimeout(x, 350), D = (N) => {
      f = o(N), Math.abs(N.clientX - l) > 6 && (clearTimeout(P), x());
    }, B = () => {
      clearTimeout(P), cancelAnimationFrame(v), t.removeEventListener("pointermove", D), t.removeEventListener("pointerup", B), t.removeEventListener("pointercancel", B), t.classList.remove("fine"), vt.delete("pos|" + a), Zr(a, c ? Math.round(u) : (Math.min(3, Math.floor(r / 25)) + 1) * 25), $r("pos", a);
    };
    t.addEventListener("pointermove", D), t.addEventListener("pointerup", B), t.addEventListener("pointercancel", B);
  }
  function Pd(t) {
    var e;
    V = t.dataset.area, H.querySelectorAll(".tfAreaPanel").forEach((a) => {
      var r;
      const o = a === t;
      a.classList.toggle("active", o), a.setAttribute("aria-expanded", String(o)), (r = a.querySelector(".panelExpanded")) == null || r.toggleAttribute("inert", !o);
    }), ma.set("areas", Et(((e = H.querySelector('[data-k="areas"]')) == null ? void 0 : e.style.order) || 1)), setTimeout(() => Vs(!0), 340);
  }
  function Hd(t) {
    const e = H.querySelector('.tfAreas[data-k="areas"]');
    if (!e || !t || t === V) return;
    const a = e.querySelector(".tfAreaStage>.tfRoomTile"), o = a && !Fe() ? a.cloneNode(!0) : null, r = tt().map((v) => v.id), l = r.indexOf(t) > r.indexOf(V) ? 1 : -1;
    V = t;
    const c = Et(e.style.order || 1);
    ma.set("areas", c), bd(e, c);
    const u = H.querySelector('.tfAreas[data-k="areas"] .tfAreaStage'), f = u == null ? void 0 : u.querySelector(":scope>.tfRoomTile");
    !u || Fe() || (u.style.setProperty("--dir", l), o && (o.classList.add("tfAreaGoing"), o.inert = !0, o.setAttribute("aria-hidden", "true"), u.appendChild(o), setTimeout(() => o.remove(), 340), clearTimeout(Ke), Ke = setTimeout(() => {
      Ke = 0, ae && Be();
    }, 340)), f && (f.classList.add("tfAreaLand"), f.addEventListener("animationend", () => f.classList.remove("tfAreaLand"), { once: !0 })));
  }
  const vh = 40;
  function yh(t) {
    var u, f;
    if (t.pointerType === "mouse" || !t.isPrimary || !((f = (u = t.target).closest) != null && f.call(u, ".tfAreaStage")) || !Hc.matches) return;
    const e = t.clientX, a = t.clientY, o = t.pointerId;
    let r = null;
    const l = (v) => {
      v.pointerId === o && !r && Math.hypot(v.clientX - e, v.clientY - a) >= _a && (r = Math.abs(v.clientX - e) > Math.abs(v.clientY - a) ? "x" : "y");
    }, c = (v) => {
      if (v.pointerId !== o) return;
      removeEventListener("pointermove", l, !0), removeEventListener("pointerup", c, !0), removeEventListener("pointercancel", c, !0);
      const S = v.clientX - e;
      if (v.type !== "pointerup" || r !== "x" || Math.abs(S) < vh) return;
      const x = (B) => {
        B.stopPropagation(), B.preventDefault();
      };
      n.addEventListener("click", x, { capture: !0, once: !0 }), setTimeout(() => n.removeEventListener("click", x, !0), 400);
      const P = tt(), D = P[P.findIndex((B) => B.id === V) + (S < 0 ? 1 : -1)];
      D && Hd(D.id);
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
      S.classList.toggle("lit", o > 0.08), x.classList.toggle("lit", o > 0.92), ma.delete(a), lo = lo.map(() => ""), Md(a).forEach((P) => P.update(Vi(a)));
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
  function Nd(t) {
    t.addEventListener("click", (e) => {
      var o;
      const a = e.target.closest("[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-fav-hide],[data-energy-pick],[data-more-page],[data-path],[data-area-pick],.tfAreaPanel");
      if (Qe && !e.target.closest(".tfBoardMenu,[data-board-more]") && io(), !(!a || !t.contains(a) || a.disabled))
        if (a.dataset.boardMore)
          (Qe == null ? void 0 : Qe.key) === a.dataset.boardMore ? io(!0) : xf(a.dataset.boardMore, a);
        else if (a.dataset.boardAct) Mf(Qe.key, a.dataset.boardAct);
        else if (a.dataset.boardShow) $s(a.dataset.boardShow);
        else if (a.dataset.favHide) ed(a.dataset.favHide, !1);
        else if (a.dataset.energyPick) xc(a.dataset.energyPick);
        else if (a.dataset.areaPick) Hd(a.dataset.areaPick);
        else if (a.dataset.act) El(a.dataset.act);
        else if (a.hasAttribute("data-details")) Ml(!(A != null && A.details));
        else if (a.hasAttribute("data-details-close")) Ml(!1);
        else if (a.dataset.summary) mc(a.dataset.summary, a);
        else if (a.dataset.star) fc(a.dataset.star);
        else if (a.hasAttribute("data-more-back")) {
          const r = A.id;
          A = A.back, Tl(), (o = Mt.querySelector('.tfMore [data-more="' + CSS.escape(r) + '"]')) == null || o.focus({ preventScroll: !0 });
        } else a.hasAttribute("data-favs-edit") ? zi("favourites", a) : a.dataset.acts ? JSON.parse(a.dataset.acts).forEach(([r, l, c, u]) => Yr(r, l, c, u).catch(() => {
        })) : a.dataset.more ? zi(a.dataset.more, a) : a.hasAttribute("data-more-close") ? Gi() : a.dataset.morePage ? ji(a.hasAttribute("data-more-toggle") && ((A == null ? void 0 : A.page) || 0) === Number(a.dataset.morePage) ? 0 : Number(a.dataset.morePage), a.dataset.moreMode ?? null, !0) : a.dataset.path ? hc(a.dataset.path) : a.dataset.go ? fd("room:" + a.dataset.go) : a.hasAttribute("data-area-back") ? fl() : a.classList.contains("tfAreaPanel") && !a.classList.contains("active") && Pd(a);
    }), t.addEventListener("keydown", (e) => {
      var o, r, l, c, u, f, v;
      const a = e.target;
      if ((o = a.dataset) != null && o.more && a.tagName !== "BUTTON" && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), zi(a.dataset.more, a)), (r = a.dataset) != null && r.energyPick && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), xc(a.dataset.energyPick)), (l = a.classList) != null && l.contains("tfAreaPanel") && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), Pd(a)), (c = a.dataset) != null && c.summary && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), mc(a.dataset.summary, a)), e.key === "Escape" && Qe && t === H) {
        e.preventDefault(), io(!0);
        return;
      }
      if (e.key === "Escape" && ca && t === H) {
        e.preventDefault(), Zs(!1), (u = p("dashEditNav")) == null || u.focus();
        return;
      }
      if (e.key === "Escape" && Q && t === H && (e.preventDefault(), fl()), (f = a.dataset) != null && f.blocks) {
        const S = a.dataset.blocks, x = bh(e, Math.round(cn(S)));
        if (x == null) return;
        e.preventDefault(), Zr(S, x), clearTimeout(nn.get(S)), nn.set(S, setTimeout(() => $r("pos", S), 500));
        return;
      }
      if ((v = a.dataset) != null && v.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
        e.preventDefault();
        const [S, x] = a.dataset.drag.split("|"), P = Number(a.getAttribute("aria-valuenow")) / 100, D = e.key === "Home" ? 0 : e.key === "End" ? 1 : Math.max(0, Math.min(1, P + (e.key === "ArrowLeft" || e.key === "ArrowDown" ? -0.05 : 0.05)));
        Yi(a, S, x, D), $r(S, x);
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
      const S = r === "tilt" ? 4 : 0, x = o.dataset.axis === "y", P = () => x ? o.getBoundingClientRect().height : o.getBoundingClientRect().width - S * 2, D = (Ft) => {
        const kt = o.getBoundingClientRect();
        return Math.max(0, Math.min(1, x ? 1 - (Ft.clientY - kt.top) / P() : (Ft.clientX - kt.left - S) / P()));
      };
      let B = u ? "waiting" : f ? "pressed" : "dragging", k = 0;
      const N = e.clientX, E = e.clientY, R = (Ft, kt) => Math.hypot(Ft.clientX - N, Ft.clientY - E) > kt, _ = () => {
        try {
          o.setPointerCapture(e.pointerId);
        } catch {
        }
      };
      u || (e.preventDefault(), _()), B === "dragging" && Yi(o, r, l, D(e));
      const at = () => {
        var Ft, kt;
        B = "sliding", Xa = o, o.classList.add("held"), _(), (Ft = navigator.userActivation) != null && Ft.hasBeenActive && ((kt = navigator.vibrate) == null || kt.call(navigator, 8)), k = f ? (va[l] ?? 100) / 100 : Number(o.getAttribute("aria-valuenow")) / 100;
      }, St = (Ft) => {
        B === "waiting" && R(Ft, _a) ? !c && (x ? Math.abs(Ft.clientY - E) > Math.abs(Ft.clientX - N) : Math.abs(Ft.clientX - N) > Math.abs(Ft.clientY - E)) ? at() : B = "gone" : B === "pressed" && R(Ft, 4) && (B = "dragging"), B === "sliding" ? Yi(o, r, l, Math.max(0, Math.min(1, k + (x ? E - Ft.clientY : Ft.clientX - N) / P()))) : B === "dragging" && Yi(o, r, l, D(Ft));
      }, Rt = (Ft) => {
        ["pointermove", "pointerup", "pointercancel"].forEach((kt, Tt) => o.removeEventListener(kt, Tt ? Rt : St)), o.classList.remove("held"), Xa === o && (Xa = null), vt.delete(v), B === "sliding" || B === "dragging" ? $r(r, l) : Ft.type === "pointerup" && c ? El(Dt("light", "toggle", l)) : Ft.type === "pointerup" && f && (B === "waiting" || B === "pressed") && Yr("light", "turn_on", l).catch(() => {
        }), ae && B !== "sliding" && B !== "dragging" && Be();
      };
      o.addEventListener("pointermove", St), o.addEventListener("pointerup", Rt), o.addEventListener("pointercancel", Rt);
    }), t.addEventListener("touchmove", (e) => {
      Xa && e.cancelable && e.preventDefault();
    }, { passive: !1 });
  }
  return H && b && (Iu(), Nd(H), H.addEventListener("pointerdown", yh), Nd(Mt), Mt.addEventListener("click", (t) => {
    t.target === Mt && Gi();
  }), (Od = n.getElementById("homeNav")) == null || Od.addEventListener("click", () => {
    Q && fl();
  }), (Id = n.querySelector(".bottomNav")) == null || Id.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + ss + "</button>"), (Fd = p("dashEditNav")) == null || Fd.addEventListener("click", () => C ? ll(!Eo) : Zs(!ca)), H.addEventListener("pointerdown", Vf), H.addEventListener("pointerdown", wf), H.addEventListener("click", (t) => {
    C && Eo && t.target.closest(".tfBoardItem") && (t.preventDefault(), t.stopPropagation());
  }, !0), H.addEventListener("scroll", (t) => {
    var e;
    (e = t.target.classList) != null && e.contains("hcFadeList") && Wc(t.target);
  }, !0), new ResizeObserver(() => {
    g.classList.contains("tfDash") && Hs() !== Rs ? Be() : Ri();
  }).observe(H), window.addEventListener("resize", Ri, { passive: !0 }), Mt.addEventListener("keydown", (t) => {
    var e, a;
    if (t.key === "Escape")
      t.stopPropagation(), A != null && A.details ? Ml(!1) : Gi();
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
      sn = !1, !(!b || !(H != null && H.querySelector("[data-tf]"))) && (ga.isConnected && pi(ga.style.order), hi());
    }
  };
}
const M0 = "0.14.1";
function k0() {
  if (document.getElementById("homecore-fonts")) return;
  const n = document.createElement("link");
  n.id = "homecore-fonts", n.rel = "stylesheet", n.href = "https://fonts.googleapis.com/css2?family=Geist:wght@200;300;400;500;600;700&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(n);
}
class S0 extends HTMLElement {
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
    k0();
    const i = this.shadowRoot || this.attachShadow({ mode: "open" });
    i.innerHTML = `<style>${Ch}${Ah}${Th}${Lh}</style>${Dh}`;
    const d = i.getElementById("app");
    d.style.opacity = "0", this._shell = Rh(i, {
      setLight: (p) => this.classList.toggle("lightBody", p),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._test = x0(i, { config: this._config, getHass: () => this._hass }), this._test.update(this._hass.states), Im(i, d), qm(i), this.isConnected || this._test.suspend(), d.style.transition = "opacity .2s ease", d.style.opacity = "";
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
customElements.get("homecore-card") || (customElements.define("homecore-card", S0), window.customCards = window.customCards || [], window.customCards.push({
  type: "homecore-card",
  name: "HomeCore",
  description: "A test environment for the HomeCore design language.",
  preview: !1
}), console.info(`%c HOMECORE %c ${M0} `, "background:#03a9f4;color:#090909;font-weight:700", ""));
