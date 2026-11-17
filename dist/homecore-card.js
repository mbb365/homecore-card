const Eu = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-text-on-accent:#090909;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#26221e;--color-text-on-selected:#fbf9f6;--color-bg-segment-selected:#fbf9f6;--color-accent-primary:#0288d1;--color-border-focus:#0288d1;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.pill,.primary,.navBtn,.tab,.back{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.hcAreaGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.hcAreaPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.hcAreaPanel.active{flex:7 1 0;min-width:0;cursor:default}.hcAreaPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.hcAreaPanel:before,.hcAreaPanel:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.hcAreaPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.hcAreaPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}#app.light .hcAreaPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.hcAreaPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.hcAreaPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.hcAreaPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}@media (max-width:900px){.hcAreaGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.hcAreaPanel,.hcAreaPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.panelCollapsed{display:none}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.sectionLabel{margin:0 0 8px 22.4px}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.toggleList{display:grid;gap:9.6px}.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.grid{grid-template-columns:1fr}}@media (max-width:620px){#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}}.card,.panel,.tile{border-radius:var(--r-card)}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .hcAreaPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.grid>*{min-width:0}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}:host{--primary:#03A9F4;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.activityRowMeta{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.toggleRow strong,.primary,.tab,.themeBtn,.wxLayoutBtn,.toast{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.note,.settingsSelect,.pill{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.metaTable th,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.hcAreaGallery,.hcAreaPanel{height:340px}@media (max-width:900px){.hcAreaPanel,.hcAreaPanel.active{height:320px}}@media (max-width:900px){.hcAreaGallery{height:auto}.hcAreaPanel,.hcAreaPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel{margin-left:16px}.grid{gap:8px}.sectionLabel{margin-bottom:8px}.hcAreaGallery{gap:8px}.hcAreaPanel,.hcAreaPanel.active{flex:0 0 100%;min-width:100%}.card,.hcAreaPanel{padding:16px}.activityRows{gap:8px}.activityRow{padding:10px 12px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}@media (prefers-reduced-motion: reduce){.sheet{transition:none}}.card,.panel,.hcAreaPanel.active{padding:var(--inset)}.hcAreaPanel{border-radius:var(--r-tile);padding:var(--inset)}.hcAreaPanel.active,.activityRow{border-radius:var(--r-tile)}.activityRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.activityRowMeta{color:var(--text)}.activityRowMeta{margin-top:0}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}#app{--group-bg:var(--card)}.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .note{margin:0 4px 4px}#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}', Bu = `#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}:is(#homeView,.tfMoreBackdrop,.tfEditTray,.tfMiniPhone) .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)),#homeView .tfATile{transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover,#homeView .tfATile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .wxWide{gap:16px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}@media (max-width:620px){#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--text)}#app.house.light{--hc-icon:#e6e6e6}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house .tfAreaHead .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house .tfAreaHead .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}.tfCard .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfAction>.tfActionHead{margin-bottom:auto}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .toggleRow:has(>.themeChoice,>.settingsSelect){flex-direction:column;align-items:stretch;gap:12px}#housePane .toggleRow>.settingsSelect{width:100%}#housePane .themeChoice[hidden]{display:none}#housePane .houseTab>.card:has(>.tfSetGroup){gap:24px}#housePane .tfSetGroup{display:grid;gap:8px}#housePane .tfSetGroup>.sectionLabel{margin:0 16px}#housePane{container:housepane/inline-size}#housePane .tfLightCards{display:none}@container housepane (width < 720px){#housePane .houseTab .metaTableWrap{display:none}#housePane .tfLightCards{display:grid;gap:8px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDacPad{min-width:0}.tfDacPad>dual-controller-v3{display:block}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}:is(.tfStep,.tfSeg,.tfBlocks,.tfTilt,.tfChips){font-family:var(--font-tile)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:0 1 46px;min-width:32px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);cursor:pointer}.tfStep svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfStep output{flex:1 0 auto;white-space:nowrap;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}#housePane .themeChoice,.tfBoardMenu .tfHeightTabs,.wb .wbSegments{gap:4px;padding:4px;border:0;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}#housePane .themeChoice{display:flex;flex-wrap:nowrap;width:100%}#housePane .themeChoice>button{flex:1 1 0;overflow:hidden;text-overflow:ellipsis}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button){height:38px;min-width:0;min-height:0;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile)!important;white-space:nowrap;cursor:pointer}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button):hover:not(:disabled):not([aria-pressed=true]):not([aria-checked=true]):not(.active){background:transparent;color:var(--text)}:is(#housePane .themeChoice :is(.wxLayoutBtn[aria-pressed=true],.themeBtn.active),.tfBoardMenu .tfHeightTabs button[aria-checked=true],.wb .wbSegments button[aria-pressed=true]){background:var(--bright);color:var(--on-bright)}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfAreaPanel .hcAreaPanelTop>div{min-width:0}.tfATags{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:4px;margin-left:auto;min-width:0}.tfATags .sourceTag{display:block;margin:0;max-width:100%;padding:6px 12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none;container:blocks/inline-size}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:12px 4px 4px 12px}.tfBlocks>span:nth-child(4){border-radius:4px 12px 12px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 14px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b small{font:inherit}@container blocks (width < 164px){.tfBlocks b small{display:none}}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.tfTilt i{position:absolute;top:4px;bottom:4px;left:4px;border-radius:12px;background:var(--primary)}.tfTilt span{position:relative;padding:0 16px;color:var(--text);font:600 14px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns svg{fill:none}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}#app.house .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}#app.house .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-l);--g1:var(--g1-l);--g2:var(--g2-l)}#app.house .tfSum[data-summary=climate] .tfIcon svg path{fill:url(#hcClimateGrad)}.tfGradDefs{position:absolute;width:0;height:0;overflow:hidden;pointer-events:none}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMoreBackdrop.tfMoreUnder{z-index:179;pointer-events:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}.tfMoreTileHead .tfName{display:grid;flex:1;min-width:0;cursor:default}.tfMoreTileHead :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreTileHead .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfMoreTileHead div.tfIcon{cursor:default}.tfMoreTileHead.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreTileHead.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMorePages{display:grid;grid-auto-flow:column;grid-auto-columns:100%;align-items:start;gap:20px;flex:none;overflow-x:auto;overflow-y:hidden;overscroll-behavior-x:contain;scroll-snap-type:x mandatory;scrollbar-width:none;transition:height .25s cubic-bezier(.2,.7,.3,1)}@media (prefers-reduced-motion:reduce){.tfMorePages{transition:none}}.tfMorePages::-webkit-scrollbar{display:none}.tfMorePage{display:flex;flex-direction:column;gap:14px;min-width:0;scroll-snap-align:start;scroll-snap-stop:always}.tfMoreSpace{flex:none;display:flex;flex-direction:column;justify-content:space-between;gap:12px;height:224px;padding:18px;border-radius:16px;background:var(--tile);overflow:hidden}.tfMoreSpace.tfMoreFill{justify-content:center;align-items:center;height:auto;padding:0;background:none;border-radius:0}.tfMoreSpace.tfMoreFill>.tfCoverArt{width:100%;height:auto;max-width:none;align-self:center}.tfMoreSpace.tfMoreFill>.tfDacPad{width:100%;height:100%}.tfMoreBig{display:flex;align-items:baseline;min-width:0;font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfMoreBig.live{color:var(--primary)}.tfMoreNum{overflow:hidden;text-overflow:ellipsis}.tfMoreUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfMoreFacts{display:flex;flex:1;flex-direction:column;justify-content:space-evenly;min-height:0}.tfMoreFact{display:flex;justify-content:space-between;gap:16px;font:400 14px/20px var(--font)}.tfMoreFact span:first-child{color:var(--muted)}.tfMoreFact span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreGraph{display:flex;flex:none;flex-direction:column;gap:6px}.tfMoreGraph .tfMoreGroupName{margin:0}.tfMoreGraph .tfGraph.tfDay{width:100%}.tfMoreDots{display:flex;flex:none;justify-content:center;gap:4px;margin-top:-4px}.tfMoreDots button{display:grid;place-items:center;width:24px;height:24px;min-height:0;padding:0;border:0;background:none;cursor:pointer}.tfMoreDots button:before{content:"";width:8px;height:8px;border-radius:50%;background:var(--muted);opacity:.45;transition:opacity .15s ease,background .15s ease}.tfMoreDots button[aria-selected=true]:before{background:var(--text);opacity:1}.tfMoreDots.tfMorePageIcons{gap:3px;align-self:center;margin-top:0;padding:3px;border-radius:19px;background:var(--tile)}.tfMoreDots.tfMorePageIcons button{width:48px;height:32px;border-radius:16px;color:var(--muted);transition:background .15s ease,color .15s ease}.tfMoreDots.tfMorePageIcons button:before{display:none}.tfMoreDots.tfMorePageIcons button svg{width:20px;height:20px;fill:currentColor}.tfMoreDots.tfMorePageIcons button[aria-selected=true]{background:var(--text);color:var(--card)}.tfMoreDots.tfMorePageIcons button:not([aria-selected=true]):hover{color:var(--text)}#homeView .grid>.tfDashTiles>.tfAction.tfHeadOnly,#homeView .grid .tfAction.tfHeadOnly{align-self:start}.tfMoreLink{margin-top:auto}.tfMoreLink svg{transform:none!important}.tfMorePage .tfMoreRows{flex:none}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card.tfCard{container-type:inline-size}#homeView .card.tfCard .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMorePair.still{animation:none}#app[data-more=sheet] .tfMore{width:min(640px,100vw)}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}#homeView .hcAreaPanel.tfAreaPanel{padding:18px 20px 10px}.tfAreaPanel .tfATiles{margin-inline:-10px}.tfAreaPanel .hcAreaPanelTop{justify-content:flex-start;gap:14px;padding:0}.tfAreaPanel .panelExpanded{justify-content:flex-start;gap:16px}.tfAreaPanel .icon{width:22px;height:22px}.tfATitle{display:flex;flex-direction:column;align-items:flex-start;min-width:0}#app .tfAName{max-width:100%;min-height:0;padding:0;border:0;border-radius:6px;background:none;color:var(--text);font:700 24px/1.2 var(--font-tile);letter-spacing:-.01em;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.tfAreaIcon{flex:none;border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}button.tfAreaIcon{cursor:pointer}.tfAreaGlyph{display:grid;place-items:center}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{display:grid;grid-template-columns:repeat(var(--peg-n),var(--peg-w));grid-auto-rows:60px;grid-auto-flow:row dense;align-items:stretch;gap:16px;max-width:none}#app.tfWeatherOpen .tfBento.tfPegs .wbItem{width:auto;min-height:0;align-self:stretch;display:flex;flex-direction:column}#app.tfWeatherOpen .tfBento.tfPegs .wbItem>*{flex:1;min-height:0}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=wide]{grid-column:span 2;grid-row:span 5}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=double]{grid-column:span 2;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=tile]{grid-column:span 1;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbCard.wbSquare{aspect-ratio:auto}#app.tfWeatherOpen .tfBento.tfPegs .wbWeather .wbNow{margin-bottom:auto}#app.tfWeatherOpen .tfBento.tfPegs :is(.wbStripScroll,.wbBars .wbDayBars,.wbBars.wbTabbed .wbDayBars){min-height:0}.tfABig{display:flex;flex-direction:column;align-items:flex-start;gap:4px;margin-top:auto;min-height:0;height:auto;padding:0;border:0;border-radius:8px;background:none;color:var(--text);text-align:start;cursor:pointer}.tfABigMain{font:200 32px/38.5px var(--font-tile);letter-spacing:0;white-space:nowrap}.tfABigUnit{margin-inline-start:.25em;font-size:inherit;letter-spacing:0}.tfABigSub{max-width:100%;overflow:hidden;color:var(--muted);font:400 16px/1.2 var(--font);white-space:nowrap;text-overflow:ellipsis}.tfATiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));min-height:calc(2 * var(--tile-min));align-content:end}.tfABig{max-width:100%}.panelExpanded:not(:has(.tfATiles)) .tfABig{margin-bottom:calc(2 * var(--tile-min) + 16px)}#app.tfBoard .tfAreas[data-rows="5"] .tfACMain{position:absolute;left:10px;right:10px;bottom:170.3px;max-width:none;text-align:center}#app.tfBoard .tfAreas[data-rows="4"] .tfACMain{position:absolute;left:10px;right:10px;bottom:164.1px;max-width:none;text-align:center}#app.tfBoard .tfAreas[data-rows="4"] .panelExpanded:not(:has(.tfATiles)) .tfABig{margin-bottom:calc(2 * var(--tile-min) + 12px)}.tfATile{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile)}.tfATile>:is(div,.tfName):last-child{min-width:0}.tfATile .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfATile.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfATile :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:18px 0 10px;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:6px;max-width:calc(100% - 20px)}.tfACMain{max-width:calc(100% - 20px);font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px);min-height:60px}.tfACTiles:has(>:nth-child(3)){margin-top:-60px}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}.tfACTiles:has(>:nth-child(2)){margin-top:-60px}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{gap:28px;padding:40px;background:var(--bg)}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:-20px -20px 0 0}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead) .activityTitle{font-size:24px}@media (max-width:620px){#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:0}}@media (min-width:621px){#app:not([data-more=sheet]) .tfMoreBackdrop.wide{place-items:start center}}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px}.tfMoreActions .tfAction{grid-column:auto}.tfMoreActions>.activityRow{align-self:start;display:grid;grid-auto-flow:column;grid-template-columns:auto minmax(0,1fr);align-items:center;align-content:start;gap:12px;min-width:0;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfMoreActions>.activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreActions>.tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreActions>.activityRow :is(.activityRowName,.activityRowMeta){display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreActions>.activityRow.alert .activityRowMeta{color:var(--danger)}@media (max-width:620px){.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash :is(.tfDash-aq,.tfDash-pollen,.tfDash-radar,.tfDash-hourly,.tfDash-sun,.tfDash-moon,.tfDash-uv,.tfDash-humidity,.tfDash-pressure,.tfDash-wind,.tfDash-visibility){order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app .tfNotAdded{display:none!important}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:1 0 409px}#app.tfDash .tfAreaPanel:not(.active){flex:0 0 128px}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;margin-top:auto;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(2,minmax(0,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app.house .tfDashBento .wbItem[data-size]{width:100%}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}.tfDash-wx .wbCondition{display:none}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .hcAreaGallery,#app.tfBoard .tfAreas .hcAreaPanel{height:100%;min-height:0}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;pointer-events:none;color:var(--text)}.tfBoardCells svg{display:block;overflow:visible}.tfBoardCells pattern circle{fill:currentColor;fill-opacity:.16}.tfBoardCells .tfGridCross{fill:none;stroke:currentColor;stroke-opacity:.45;stroke-width:1.5;stroke-linecap:round}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfHeight{display:grid;gap:6px;padding:6px 6px 8px}.tfHeightLabel{padding:0 6px;color:var(--muted);font:500 12px/16px var(--font)}.tfHeightTabs{display:grid;grid-template-columns:repeat(5,1fr)}.tfBoardMenu .tfHeightTabs button{justify-content:center}.tfBoardMenu .tfHeightTabs button:disabled{opacity:.35}.tfWidth{padding-top:0}.tfWidth .tfHeightTabs{grid-template-columns:repeat(3,auto)}.tfSourceList{display:grid;gap:2px}.tfBoardMenu .tfSourceList button[aria-checked=true]{background:var(--bright);color:var(--on-bright)}.tfBoardMenu .tfSourceList button[aria-checked=true]:hover{background:var(--bright)}.tfBoardMenu .tfWidth .tfHeightTabs button{white-space:nowrap}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows{grid-auto-rows:var(--fill-row,60px);margin-top:0}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows>.activityRow{min-height:0;height:var(--fill-row,60px);box-sizing:border-box}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]{padding:0;gap:0}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityHeader,#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.tfDashGraph{display:none}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityRows{margin:0;flex:1}#app.tfBoard .tfBoardItem.tfAction[data-rows="1"]{padding:10px;border-radius:24px}.tfRoomTile{cursor:pointer}.tfRoomTile .tfRoomIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomInline,.tfRoomSub{display:none}.tfRoomReading{display:flex;flex-direction:column;gap:4px;min-width:0}.tfRoomBig{overflow:hidden;color:var(--text);font:200 32px/38.5px var(--font-tile);letter-spacing:0;white-space:nowrap;text-overflow:ellipsis}.tfRoomSub{overflow:hidden;color:var(--muted);font:400 16px/19px var(--font);white-space:nowrap;text-overflow:ellipsis}.tfRoomDevices{display:flex;gap:12px}.tfRoomDevices .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfRoomDevices .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}#app.tfBoard .tfRoomTile[data-rows="1"] .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-rows="1"] :is(.tfRoomReading,.tfRoomDevices),#app.tfBoard .tfRoomTile[data-rows="2"] .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfActionHead .activityRowMeta{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfRoomSub{display:block}#app.tfBoard .tfRoomTile[data-cols="1"]:is([data-rows="3"],[data-rows="4"],[data-rows="5"]) .tfRoomDevices{display:grid;grid-template-columns:repeat(2,max-content)}#app.tfBoard .tfRoomTile[data-cols="1"][data-rows="3"]:has(.tfRoomDevices) .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-cols="1"][data-rows="3"]:has(.tfRoomDevices) .tfRoomReading{display:none}#app.tfBoard .tfRoomTile[data-cols="1"]:is([data-rows="4"],[data-rows="5"]) .tfRoomDevices{min-height:calc(2 * var(--chip-size) + 12px);align-content:start}.tfRoomHeads{display:none;gap:12px 16px}.tfRoomDev{display:flex;align-items:center;gap:12px;min-width:0;padding:0;border:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfRoomDev .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomDev .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfRoomDevName{display:flex;flex-direction:column;min-width:0}.tfRoomDevName>span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]){flex-direction:row;align-items:center;gap:12px}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"])>.tfActionHead{flex:1;margin-bottom:0}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]) .tfRoomDevices{display:flex}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomHeads{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-cols="2"]):not([data-rows="1"]) .tfRoomHeads{grid-template-columns:repeat(4,minmax(0,1fr))}#app.tfBoard .tfRoomTile[data-cols="2"][data-rows="2"] .tfRoomDev:nth-child(n+3){display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]):has(.tfRoomDevices) .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]):has(.tfRoomDevices) .tfRoomReading{display:none}#app.tfBoard .tfDashBento[data-rows="1"] .wbCard{padding:10px;border-radius:24px}#app.tfBoard .tfDashBento[data-rows="1"] .wbVisual{display:none}#app.tfBoard .tfDash-wx[data-rows="1"] .wbNow{margin:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbWx.wbS90{width:40px;height:40px;border-radius:12px}#app.tfBoard .tfDashBento[data-rows] :is(.wb,.wbBento,.wbItem){height:100%;min-height:0}#app.tfBoard .tfDashBento[data-rows] .wbCard{height:100%;min-height:0;box-sizing:border-box;aspect-ratio:auto}#app.tfBoard .tfDash-wx[data-rows="1"] .wbDeg{font-size:20px;letter-spacing:0;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbPlace{font-size:13px;line-height:18px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbUnit{font-size:14px;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbWx.wbS90{width:100px;height:100px;border-radius:31px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbDeg{font-size:80px;line-height:80px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbUnit{font-size:30px;line-height:38px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbWeather{flex-direction:row;align-items:center;gap:16px}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNow{flex:none}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNextHours{display:flex;flex:1 1 0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbWeather{justify-content:center;padding-top:0;padding-bottom:0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) :is(.wbNow,.wbSummary){display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbColumns{display:flex;flex:none;height:185px}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsDay{display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsNow{display:inline}#app.tfBoard .tfDash-wx[data-narrow] .wbCard.wbWeather{gap:12px;padding:18px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbWx.wbS90{width:64px;height:64px;border-radius:20px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbDeg{font-size:46px;line-height:46px;letter-spacing:-.92px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbUnit{font-size:20px;line-height:26px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-narrow] .wbHalves{display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="3"] .wbNextHours{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow] .wbHour:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;flex:none;height:auto;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumn:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbHalves{display:none}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx:not([data-narrow])[data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="4"]) .wbSummary{display:none}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) :is(.wbColumns,.wbHalves){display:none}#app.tfBoard .tfDash-wx[data-rows="4"] .wbColumns{flex:1 1 0;height:auto;min-height:0;margin-top:0}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn{justify-content:flex-start;gap:8px;padding:12px 0 16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn .wbWx{width:40px;height:40px;border-radius:16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbTemps{gap:4px}#app.tfBoard .tfDash-wx[data-rows="4"] .wbHalves>:nth-child(n+5){display:none}#app.tfBoard .tfDash-energy[data-rows="2"] .tfDashGraph{display:none}#app.tfBoard .tfDash-energy:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) .activityRows{grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr)}#app.tfBoard .tfDash-energy[data-rows="3"] .tfDashGraph{min-height:0}#app.tfBoard .tfDashBento[data-rows="2"] .wbBaseRows{display:none}#app.tfBoard .tfDashBento[data-rows="2"] :is(.wbRadar,.wbCompareBars,.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfDashBento[data-rows="3"] :is(.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfAreas[data-rows="1"] .hcAreaPanel.tfAreaPanel{padding:10px}#app.tfBoard .tfAreas[data-rows="1"] .panelExpanded{display:grid;grid-template-columns:40px minmax(0,1fr);gap:0 12px;align-content:center}#app.tfBoard .tfAreas[data-rows="1"] :is(.panelExpanded>.hcAreaPanelTop,.tfACTop){display:contents}#app.tfBoard .tfAreas[data-rows="1"] .panelExpanded .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] .tfATitle .tfAName{font-size:14px;line-height:20px;height:auto}#app.tfBoard .tfAreas[data-rows="1"] .tfABig{margin:0;flex-direction:row}#app.tfBoard .tfAreas[data-rows="1"] .tfABigMain{font-size:14px;line-height:18px;letter-spacing:0}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfABigUnit){font-size:14px}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfABigSub,.tfATiles,.tfACTiles,.sourceTag){display:none}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed{display:grid;grid-template-columns:40px minmax(0,1fr);column-gap:12px;align-content:center;padding:0}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfACName,.tfACMain){margin:0;font-size:14px;line-height:18px;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.tfBoard .tfAreas:is([data-rows="2"],[data-rows="3"]) .tfABig{display:none}#app.tfBoard .tfAreas[data-rows="4"] .tfABig{flex:none;margin-top:auto;margin-bottom:auto}#app.tfBoard .tfAreas[data-rows="4"] .tfATiles{margin-top:0}#app.tfBoard .tfAreas[data-rows="4"] .panelExpanded{row-gap:12px}#app.tfBoard .tfAreas:is([data-rows="2"],[data-rows="3"],[data-rows="4"]) .tfATiles{margin-top:auto}#app.tfBoard .tfAreas[data-rows="2"] .tfATile:nth-child(n+3),#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfATile:nth-child(n+5){display:none}#app.tfBoard .tfAreas[data-rows="2"] .tfACTiles{display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTile:nth-child(n+3){display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACollapsed{justify-content:flex-start;gap:10px}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTiles{margin-top:auto}.tfEditTray{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px));right:0;bottom:0;z-index:160;display:flex;width:608px;max-width:calc(100vw - 56px);transform:translate(100%);transition:transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfEditTray.open{transform:none}.tfEditTray.open.tucked{transform:translate(100%)}.tfEditTray.open :is(.tfTrayInner,.tfTrayTuck){pointer-events:auto}.tfTrayTuck{position:absolute;top:20px;left:-52px;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border:0;border-radius:var(--r-inner);background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;--mdc-icon-size:22px}.tfTrayTuck svg{width:22px;height:22px}.tfEditTray:not(.open) .tfTrayTuck{visibility:hidden}.tfTrayInner{flex:1;min-width:0;display:flex;flex-direction:column;gap:20px;overflow:auto;overscroll-behavior:contain;padding:20px;border-radius:var(--r-card) 0 0 var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d}.tfTrayHead{display:flex;align-items:center;justify-content:space-between;gap:12px}.tfTraySection{display:flex;flex-direction:column;gap:8px}.tfTraySection .sectionLabel{margin:0}.tfTrayNote{margin:0;color:var(--muted);font:400 14px/1.3 var(--font)}.tfTrayCards{display:flex;flex-direction:column;gap:6px}.tfTrayCard{display:flex;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 14px 0 10px;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none}.tfTrayList{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}.tfTrayFav{display:grid;grid-template-columns:22px var(--chip-size) minmax(0,1fr) 36px 36px;align-items:center;gap:8px;min-height:var(--tile-min);padding:0 4px 0 6px;border-radius:var(--r-tile)}.tfTrayFav.off{cursor:grab;touch-action:none}.tfTrayFav.off :is(.tfIcon,.tfTrayName){opacity:.5}.tfTrayFav.moving{background:var(--tile)}.tfTrayGrip{display:grid;place-items:center;color:var(--muted);cursor:grab;touch-action:none}.tfTrayGrip svg{width:20px;height:20px;fill:currentColor}:is(.tfTrayFav,.tfTrayPickItem) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfTrayName{display:flex;flex-direction:column;min-width:0}.tfTrayName>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfTrayBtn{display:grid;place-items:center;width:36px;height:36px;min-height:0;padding:0;border:0;border-radius:12px;background:none;color:var(--text);cursor:pointer}.tfTrayBtn svg{width:20px;height:20px;fill:currentColor}.tfTrayBtn:hover{background:var(--tile)}.tfTrayAdd{align-self:flex-start}.tfTrayPick{display:flex;flex-direction:column;gap:6px}.tfTrayPick[hidden]{display:none}.tfTrayPickItem{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;width:100%;min-height:var(--tile-min);padding:0 10px;border:0;border-radius:var(--r-tile);background:none;color:var(--text);text-align:start;cursor:pointer}.tfTrayPickItem:hover{background:var(--tile)}.tfTraySuggest{margin-top:8px}.tfMiniPhone{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px) + 20px);bottom:20px;left:max(16px,calc(100vw - min(608px,100vw - 56px) - 380px));z-index:160;display:flex;flex-direction:column;gap:8px;width:324px;padding:12px;border-radius:44px;background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d;opacity:0;transform:translate(16px);transition:opacity .2s ease,transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfMiniPhone.open{opacity:1;transform:none;pointer-events:auto}.tfPhoneHead{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 4px 0 12px}.tfMiniPhone>.tfTrayNote{padding:0 12px 4px}.tfLinkBtn{min-height:0;padding:0;border:0;background:none;color:var(--primary);font:inherit;text-decoration:underline;cursor:pointer}.tfPhoneScreen{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;border-radius:34px;background:var(--bg);box-shadow:var(--hc-hair-all);padding:14px 0 24px}.tfPhoneList{display:flex;flex-wrap:wrap;gap:12.8px}.tfPhoneTitle{width:100%;padding:0 12.8px;color:var(--text);font:800 25.6px/1 var(--font);letter-spacing:-.055em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfPhoneBlock{display:flex;align-items:flex-start;gap:10px;width:100%;min-height:0;padding:12px;border:0;border-radius:27px;background:var(--card);box-shadow:var(--hc-hair);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.tfPhoneBlock.tile{width:calc((100% - 12.8px)/2);border-radius:22.4px}.tfPhoneBlock.fixed{align-items:center;color:var(--muted);cursor:default}.tfPhoneBlock.moving{box-shadow:var(--hc-hair),0 0 0 2px var(--primary);cursor:grabbing}.tfPhoneBlock:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfPhoneBlock .tfIcon{width:32px;height:32px;border-radius:13px;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}.tfPhoneName{min-width:0;padding-top:6px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tfTrayGhost{position:fixed;top:0;left:0;z-index:200;margin:0;pointer-events:none;opacity:.9;background:var(--tile);border-radius:var(--r-tile);box-shadow:0 8px 24px #00000059}.tfFavDrop{position:fixed;z-index:200;width:4px;border-radius:2px;background:var(--primary);pointer-events:none}.tfFavHides{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;pointer-events:none}.tfFavHide{position:absolute;display:grid;place-items:center;width:32px;height:32px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;pointer-events:auto}.tfFavHide svg{width:18px;height:18px;fill:currentColor}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.toast.tfToast{top:auto;right:auto;max-width:calc(100vw - 32px);transform:translate(-50%,6px)}.toast.tfToast.show{transform:translate(-50%)}.tfDash-act .activityRow.alert .activityRowName{color:var(--danger)}.activityRow .tfIcon.alert{background:#e53935;color:#fff}.tfGraph.tfDay{flex:none;height:62px;min-height:0}.tfGraph.tfDay text{font-size:10px}#housePane .rubberIndicator{background:var(--bright)}#housePane .tab.active{color:var(--on-bright)}#app.house .settingsSelect{border:1px solid var(--muted)}#app.house .addInput{display:block;width:100%;height:46px;min-height:0;box-sizing:border-box;margin:0;padding:0 10px;border:0;border-radius:var(--r-inner)!important;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:400 16px/18.4px Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;letter-spacing:-.32px;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}#app.house .addInput:hover{background:color-mix(in srgb,var(--text) 6%,var(--tile))}#app.house .addInput:focus-visible,#app.house .addInput:focus{background:var(--tile);box-shadow:inset 0 0 0 1.6px var(--primary)}#app.house .addInput::-webkit-search-decoration,#app.house .addInput::-webkit-search-cancel-button{-webkit-appearance:none;-moz-appearance:none;appearance:none}#app.house{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%23d9d9d9' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house.light{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%2326221e' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house select.settingsSelect{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 44px 0 16px;background-image:var(--select-chev);background-repeat:no-repeat;background-position:right 16px center;background-size:16px 16px}#app.house .addInput::placeholder{color:var(--muted);opacity:1}#app .activityRows :focus-visible{outline-offset:-2.4px}#app.house :is(button,a,input,select,[tabindex]){scroll-margin-bottom:96px}@media (max-width:620px){#app.house :is(.activityRowName,.activityRowMeta){white-space:normal;text-overflow:clip;overflow:visible;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}}.tfTooltip{position:fixed;z-index:500;max-width:min(320px,calc(100vw - 16px));padding:6px 10px;border-radius:10px;background:var(--bright);color:var(--on-bright);font:500 14px/18px var(--font);overflow-wrap:break-word;box-shadow:0 4px 16px #00000040}.tfTooltip[hidden]{display:none}.tfDashGraph rect{transform-box:fill-box;transform-origin:50% 100%}#app.house:is([data-names=cut],[data-names=scroll]) :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis;overflow-wrap:normal}#app.house[data-names=wrap] :is(.activityRowName,.activityRowMeta){display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:normal;overflow:hidden;text-overflow:ellipsis;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}#app.tfBoard .tfDash-favs>.activityRows{min-height:0;overflow-y:auto;scrollbar-width:thin}#app.house :is(.tfIcon,.tfAreaIcon,.tfRoomIcon){--chip-hi:.0375;background-image:linear-gradient(180deg,#ffffff08,#fff0)!important;box-shadow:inset 0 1px rgba(255,255,255,var(--chip-hi)),inset 0 -1px color-mix(in srgb,currentColor 3%,transparent),inset 0 -3px 6px color-mix(in srgb,currentColor 3.5%,transparent)}#app.house :is(.on[data-light] .tfIcon,.tfIcon.on[data-light],.tfACTile .tfIcon[data-light],.on[data-tone=alarm] .tfIcon,.tfIcon[data-light]){--chip-hi:.1375}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-xl]{grid-row:span 5}#app.tfBoard .tfDashBento:not([data-rows="5"]) .wbItem[data-xl] .wbCallouts{display:none}#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]) .wbZone{flex:1;height:auto;background:none;box-shadow:none;padding:0;align-items:flex-start}#app.tfBoard .tfDashBento[data-rows="3"] .wbItem[data-xl] .wbCallouts{display:flex;margin-top:0}#app.tfBoard .tfDashBento[data-rows="1"] :is(.wbZone,.wbCallouts){display:none}#app .wbZoneM{display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM){display:flex;align-items:flex-start;justify-content:flex-start}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM)>:not(.wbZoneM){display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZoneM{display:flex}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{grid-auto-flow:row}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-break]{grid-column-start:1}#app.house.tfWeatherOpen #homeView{max-width:none}#app.house #settingsView .toggleList{border-radius:var(--r-card);padding-block:4px}#app.house #settingsView .toggleRow{padding-left:18px;padding-right:18px}#app.house #settingsView .toggleRow:not([hidden])~.toggleRow:before{left:18px}#app.house .view{margin-left:0}#app.house #settingsView .toggleList>.tfCardTitle{display:flex;align-items:center;min-height:28px;padding:14px 18px 2px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfLightView{display:flex;padding:4px 0 14px}#housePane.tfLightCardsOn .houseTab .metaTableWrap,#housePane.tfLightCardsOn .houseTab .tfTableNote{display:none}#housePane.tfLightCardsOn .tfLightCards{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:8px}#housePane:not(.tfLightCardsOn) .tfLightCards{display:none}@container housepane (width < 720px){#housePane:not(.tfLightCardsOn) .houseTab .metaTableWrap{display:none}#housePane:not(.tfLightCardsOn) .tfLightCards{display:grid}}#app.house.light .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house .tfTrayInner{gap:32px}#app.house .tfTraySection{gap:12px}#app.house{--font:Geist,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-family:var(--font)}#app.house #housePane .toggleRow>:is(.themeChoice,.settingsSelect){align-self:flex-start;width:auto;max-width:100%}#app.house #housePane .themeChoice{display:inline-flex}#app.house #housePane .themeChoice>button{flex:0 1 auto;min-width:0;padding:0 16px;overflow:hidden;text-overflow:ellipsis}#app.house #housePane .toggleRow{min-width:0}#app.house #housePane .toggleRow>.settingsSelect{min-width:200px}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments){display:inline-flex;width:auto;align-self:flex-start}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments) button{flex:0 0 auto;padding:0 16px}@media (max-width:620px){#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid{display:flex!important;flex-wrap:wrap;align-items:flex-start;gap:var(--grid-gap);height:auto!important}#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid .tfBoardItem{position:relative!important;left:auto!important;top:auto!important}#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid>.tfBoardItem:not(.tfDash-favs){height:auto!important}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummary{flex:none;margin-top:0;container-type:normal}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummaryText{position:static}}#app.house :is(#housePane .themeChoice,.wb .wbSegments,.tfBoardMenu .tfHeightTabs){height:32px;padding:3px;gap:3px;box-sizing:border-box}#app.house :is(#housePane .themeChoice>button,.wb .wbSegments button,.tfBoardMenu .tfHeightTabs button){height:26px!important;padding:0 12px;border-radius:13px!important;font:600 12px/16px var(--font-tile)!important}.tfPlantProblem{flex:1 1 0;min-height:184px;flex-direction:column}.tfGraph.tfPlantGraph{flex:1 1 0;width:calc(100% - 20px);height:auto;min-height:160px;margin:0 10px}.tfGraph .tfGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:3 4;vector-effect:non-scaling-stroke}.tfGraph .tfGuideWord{font-size:11px}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){box-shadow:inset 0 0 0 1px var(--line)}.tfDashTitle .tfGreeting{display:block;margin-bottom:6px;font:500 20px/1.2 var(--font-tile);letter-spacing:0;color:var(--muted)}#app.light{--title:#55504a}#app.light :is(.activityTitle,.hcCardTitle,.wbTitle,.activityRowName,.hcRowName,.wbName){color:var(--title)}#app.light .tfRoomTile .tfActionHead .activityRowName{color:var(--text)}#app.light .tfRoomBig{color:var(--title)}#app.tfOverview.tfDash #homeView .tfSum:not([data-summary=alerts]) .tfIcon{background:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar{width:100%;max-width:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows{display:flex;justify-content:space-between}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRow{flex:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows{display:grid;grid-template-columns:repeat(var(--bar-cols,3),minmax(0,1fr))}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows>.activityRow{min-width:0}@media (max-width:620px){#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}}#app.tfOverview.tfDash #homeView .tfDash-favs{padding:10px;border-radius:var(--r-card)}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-auto-rows:60px;row-gap:25px;max-height:100%;margin:0;overflow-y:auto;scrollbar-width:none}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows::-webkit-scrollbar{display:none}.hcFadeList.hcMore{-webkit-mask-image:linear-gradient(to bottom,#000 calc(100% - 40px),transparent);mask-image:linear-gradient(to bottom,#000 calc(100% - 40px),transparent)}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{height:60px;min-height:0;padding:10px;box-sizing:border-box}#app.tfOverview.tfDash #homeView .tfDash-wx .wbCard.wbWeather{gap:0;padding:18px}#app.tfOverview.tfDash #homeView .tfDash-wx .wbCondition,#app.tfOverview.tfDash #homeView .tfDash-wx .wbNextHours,#app.tfOverview.tfDash #homeView .tfDash-wx .wbHalves{display:none!important}#app.tfOverview.tfDash #homeView .tfDash-wx .wbSummary{flex:none;height:auto;margin:18px 0 0;container:none}#app.tfOverview.tfDash #homeView .tfDash-wx .wbSummaryText{position:static;-webkit-line-clamp:1}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumns{display:flex!important;height:159px;margin-top:auto;border-radius:var(--r-tile)}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn{padding:8px 0;background:none}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn:hover{background:var(--tile)}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn .wbWx.wbS60{width:60px;height:60px;border-radius:20px}#app.tfOverview.tfDash #homeView .tfRoomTile{padding:18px;gap:0;border-radius:28px}#app.tfOverview.tfDash #homeView .tfRoomTile>.tfActionHead{margin-bottom:0}#app.tfOverview.tfDash #homeView .tfRoomTile .tfActionHead .activityRowMeta{display:none}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomReading{margin-top:35px;gap:0}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomSub{display:block;margin-top:-7px;font:400 16px/19px var(--font)}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomDevices{display:flex;justify-content:space-between;min-height:0;margin-top:auto;padding-top:16px}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomHeads{display:none}#app.tfOverview.tfDash #homeView .tfRoomTile:not(:has(.tfRoomDevices :nth-child(4))) .tfRoomDevices{justify-content:flex-start;gap:18.67px}#app.light.tfOverview.tfDash #homeView .tfRoomTile .tfRoomIcon{background-color:#acacac;color:#fff}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar{width:max-content;max-width:100%}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar .activityRows{justify-content:flex-start}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows{grid-template-columns:repeat(var(--bar-cols,3),auto)}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs{height:auto!important;padding:10px;container-type:normal}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows{display:flex;justify-content:space-between;grid-auto-rows:auto;row-gap:0;max-height:none}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{flex:none;width:240px;height:60px}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows{display:grid;grid-template-columns:repeat(var(--bar-cols,3),minmax(0,1fr))}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows>.activityRow{width:auto;min-width:0}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs{width:max-content!important;max-width:100%}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs>.activityRows{justify-content:flex-start}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows{grid-template-columns:repeat(var(--bar-cols,3),240px)}@media (max-width:620px){#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{width:auto;min-width:0}}#app.tfOverview.tfBoard #homeView .hcFloor{position:absolute;z-index:1;display:flex;align-items:center;height:24px;margin:0;box-sizing:border-box}#app.tfOverview.tfBoard #homeView .hcFloorBox{position:absolute;z-index:0;border-radius:40px;background:color-mix(in srgb,var(--text) 5%,transparent);box-sizing:border-box;pointer-events:none}#app.tfOverview #homeView .hcFloorName{margin:0;font:500 16px/24px var(--font);color:var(--title,var(--text));white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.tfOverview.tfDash #homeView .tfRoomTile{overflow:hidden}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaL .tfRoomReading{margin-top:calc(35px * var(--hc-k,1))}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaM .tfRoomReading{margin-top:calc(14px * var(--hc-k,1))}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaM .tfRoomSub{margin-top:-6px}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaS{padding:12px}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaS .tfRoomReading{margin-top:calc(8px * var(--hc-k,1))}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaS .tfRoomSub{display:none}#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaM,.hcAreaS) .tfRoomDevices,#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaM,.hcAreaS):not(:has(.tfRoomDevices :nth-child(4))) .tfRoomDevices{display:flex;flex-wrap:wrap;justify-content:flex-start;gap:0 8px;height:var(--chip-size);overflow:hidden;padding-top:0;margin-top:auto}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaS .tfRoomReading{flex:none}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomReading{margin-bottom:12px}#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaS,.hcAreaM,.hcAreaL).hcAreaBig .tfRoomReading{margin-top:calc(35px * var(--hc-k,1))}#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaS,.hcAreaM,.hcAreaL).hcAreaBig .tfRoomSub{display:block}#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaS,.hcAreaM,.hcAreaL).hcAreaBig .tfRoomDevices{display:none!important}#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaS,.hcAreaM,.hcAreaL).hcAreaBig .tfRoomHeads{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));margin-top:auto}#app.hcHomeEditing.tfOverview #homeView .tfBoardItem.tfRoomTile{cursor:default;outline:0}#app.hcHomeEditing.tfOverview #homeView .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfRoomTile){cursor:grab;-webkit-user-select:none;user-select:none;touch-action:none;outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.hcHomeEditing.tfOverview #homeView .tfBoardItem.tfRoomTile{border-radius:28px}#app.hcHomeEditing.tfBoardReady #homeView .tfBoardItem{transition:left .34s cubic-bezier(.2,1.35,.4,1),top .34s cubic-bezier(.2,1.35,.4,1)}@media (prefers-reduced-motion:reduce){#app.hcHomeEditing.tfBoardReady #homeView .tfBoardItem{transition:none}}#app.hcHomeEditing #homeView .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}@media (max-width:620px){#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomDevices{display:grid;grid-template-columns:repeat(2,max-content);gap:12px;justify-content:start}}.tfEditTray .tfTrayInner{scrollbar-width:none}.tfEditTray .tfTrayInner::-webkit-scrollbar{display:none}.hcHeChoiceLine{flex-wrap:wrap;gap:8px 12px}.hcHeChoiceLine>.hcHeChoice{margin-left:auto}.hcHeChoice.themeChoice{display:inline-flex;flex-wrap:nowrap;height:32px;padding:3px;gap:3px;box-sizing:border-box;border-radius:16px;background:var(--control-2,var(--hc-icon))}#app .hcHeChoice>button{height:26px!important;min-height:0;padding:0 12px;border:0;border-radius:13px!important;background:none;color:var(--text);font:600 12px/16px var(--font-tile)!important;white-space:nowrap}#app .hcHeChoice>button[aria-pressed=true]{background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all)}.hcHeBody{display:flex;flex-direction:column;gap:12px}.hcHeBody>.tfTrayNote{margin:0 0 8px}.hcHeLabel{display:flex;align-items:center;gap:4px}.hcHeLine{display:flex;align-items:center;gap:4px;min-height:44px}.hcHeLine>.activityRowName{min-width:0}.hcHeLine>.switch{margin-left:auto}.hcHeLink{display:inline;min-height:0;padding:0;border:0;background:none;font:inherit;color:var(--primary);text-decoration:underline;cursor:pointer}.hcHeList{display:flex;flex-direction:column;gap:2px;margin:0;padding:0;list-style:none}.hcHeRow{display:grid;grid-template-columns:36px var(--chip-size) minmax(0,1fr) auto;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 4px;border-radius:var(--r-tile)}.hcHeRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.hcHeRow.moving{background:var(--card);box-shadow:var(--hc-hair-all)}:is(.hcHeRow,.tfTrayFav):is(.hcListDragging,.hcListLanding){position:relative;z-index:5;background:var(--card)}:is(.hcHeRow,.tfTrayFav).hcListDragging{filter:drop-shadow(0 10px 30px rgba(0,0,0,.35));cursor:grabbing}.hcHeGrip{color:var(--muted);cursor:grab;touch-action:none}.hcHeSum .tfIcon{color:var(--sum-ink,var(--hc-icon-ink))}#app .hcHeRow.hcHeSum .tfIcon{background-color:transparent}#app.house .hcHeSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .hcHeSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}.hcInfoBtn{display:grid;place-items:center;flex:none;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:var(--r-fine,12px);background:none;color:var(--muted);cursor:pointer}.hcInfoBtn svg{width:18px;height:18px;fill:currentColor}.hcInfoBtn:hover,.hcInfoBtn[aria-expanded=true]{background:var(--tile);color:var(--text)}.hcInfoPop{position:fixed;z-index:320;width:280px;max-width:calc(100vw - 16px);display:flex;flex-direction:column;gap:8px;padding:16px;border-radius:var(--r-inner);box-shadow:var(--hc-hair-all),0 8px 28px #0000002e}.hcInfoPop[hidden]{display:none}.hcInfoTitle{font:600 14px/20px var(--font-tile);color:var(--text)}.hcInfoText{font:400 14px/1.45 var(--font);color:var(--text)}.hcInfoText p{margin:0}.hcInfoText ul{margin:6px 0 0;padding-left:18px}.hcInfoMore{align-self:flex-start;font:600 14px/20px var(--font-tile);color:var(--primary);text-decoration:underline}#app .tfTrayAdd.hcAddBtn{display:inline-flex;align-items:center;gap:6px;height:32px;min-height:0;margin:10px 0 12px;padding:0 16px 0 12px;border:0;border-radius:16px!important;background:#03a9f4;color:#fff;font:600 14px/20px var(--font-tile);text-decoration:none!important}#app .tfTrayAdd.hcAddBtn svg{width:18px;height:18px;flex:none;fill:currentColor}#app .tfTrayAdd.hcAddBtn:hover{background:#0398dc}#app .tfTrayAdd.hcAddBtn[aria-expanded=true]{background:#0288d1}.tfEditTray:not(.hcHomeTray) .tfTraySection:not(.hcFirst){padding-top:20px;border-top:1px solid var(--line)}#app.house .tfEditTray:not(.hcHomeTray) .tfTrayInner{gap:20px}.hcHeRule{width:100%;height:0;margin:8px 0;border:0;border-top:1px solid var(--line)}.tfEditTray .hcTrayTabs{display:flex;align-self:stretch;margin:0 0 4px;flex:none}.tfEditTray .hcTrayTabs .tab{flex:1 1 0;min-height:36px;padding:0 10px;font:600 14px/20px var(--font-tile)}.tfEditTray .hcTrayTabs .rubberIndicator{background:var(--text)}.tfEditTray .hcTrayTabs .tab.active{color:var(--card)}.tfEditTray .tfTraySection[hidden]{display:none!important}.hcHeTabBody{display:flex;flex-direction:column;gap:8px}.hcHomeTray .hcTrayTabs{margin:0 0 8px}#homeView .grid.tfStack{grid-auto-rows:1px;row-gap:0}#homeView .grid.tfStack>*{align-self:start}.tfTrayPop{position:fixed;z-index:260;right:calc(min(608px,100vw - 56px) + 12px);width:300px;max-width:calc(100vw - 80px);display:grid;gap:2px;padding:10px!important;background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfTrayPop[hidden]{display:none}.tfTrayPopTitle{padding:4px 8px 8px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfTrayPopRow{display:flex;align-items:center;gap:12px;min-height:var(--tile-min);padding:0 8px}.tfTrayPopRow .tfIcon{background-color:var(--hc-icon)}.tfTrayPopName{flex:1;min-width:0;font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app .tfMoreBackdrop:not(.wide) .tfMore{height:min(600px,85dvh)}#app .tfMoreBackdrop:not(.wide) .tfMorePages{flex:1 1 auto;min-height:0;height:auto!important;align-items:stretch}#app .tfMoreBackdrop:not(.wide) .tfMorePage{overflow-y:auto;overscroll-behavior:contain;scrollbar-width:none}#app .tfMoreBackdrop:not(.wide) .tfMorePage[aria-label=Control]>:first-child{margin-top:auto}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace{flex:1 1 auto;height:auto;min-height:224px}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill{min-height:0;container-type:size}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill>.tfCoverArt{width:min(100%,100cqh);height:auto}.tfMorePage[aria-label=Control]>:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink)+:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink){margin-top:14px}.tfMoreSwitch{display:flex;align-items:center;justify-content:center;min-height:0;padding:0;border-radius:0;background:none}.tfMoreSwitch .tfIcon{width:min(240px,100%);height:min(240px,100%);aspect-ratio:1;min-height:0;border:0;padding:0;border-radius:40%;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer;--mdc-icon-size:204px}.tfMoreSwitch.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreSwitch.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}@media (max-width:620px){#app .tfMoreBackdrop{place-items:end center;padding:0 16px max(16px,env(safe-area-inset-bottom,0px))}#app .tfMoreBackdrop .tfMorePair{width:100%;max-height:85dvh}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){width:100%;border-radius:34px;box-shadow:inset 0 0 0 1px var(--line),0 10px 30px #00000047}#app .tfMoreBackdrop .tfMore{padding-top:10px;outline:none}#app .tfMoreBackdrop .tfMore:before{content:"";display:block;position:sticky;top:10px;z-index:2;flex:none;width:36px;height:5px;margin:0 auto;border-radius:3px;background:var(--line)}#app .tfMoreBackdrop .tfMore [data-more-close]{display:none}}`, Ru = `.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:14px;aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:18px;border-radius:28px;overflow:hidden}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbChip{width:40px;height:40px;border-radius:16px}.wbSquare .wbName{font-size:14px;line-height:1.4}.wbSquare .wbSub{font-size:16px}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:10px}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846;border-radius:34px}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:1;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);fill-opacity:.14}.wbChart .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:24px minmax(0,1fr) 22px;grid-template-areas:". sun" "y plot" ". x";column-gap:8px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wb[data-style=smooth] :is(.wbWx,.wbSky):after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;border-radius:inherit;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1.3 0 0 0 -.15 1.3 0 0 0 -.15 1.3 0 0 0 -.15 0 0 0 0 1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:140px 140px;mix-blend-mode:overlay;opacity:.3}.wbBaseRows{display:flex;flex-direction:column;gap:4px;width:100%}.wbBaseRow{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbBaseRow>span:last-child{color:var(--text);white-space:nowrap}.wbBaseRow>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRadar{position:relative;flex:1;align-self:stretch;min-height:80px;border-radius:var(--r-inner);overflow:hidden;background-color:var(--tile);background-image:linear-gradient(color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px);background-size:24px 24px;background-position:center}.wbRadarRing{position:absolute;left:50%;top:50%;width:64%;aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 20%,transparent)}.wbRadarRing:after{content:"";position:absolute;top:25%;right:25%;bottom:25%;left:25%;border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 14%,transparent)}.wbRadarHome{position:absolute;left:50%;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 3px var(--tile)}.wbRadarMap,.wbRadarCam{background-image:none}.wbRadarLayer{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden}.wbRadarLayer img{position:absolute;width:256px;height:256px;max-width:none;pointer-events:none}.wbRadarLayer[hidden]{display:none}.wbRadarRain{opacity:.85}.wbRadarMap .wbRadarHome{z-index:2}.wbRadarTime,.wbRadarCredit{position:absolute;z-index:2;white-space:nowrap}.wbRadarTime{left:8px;bottom:6px;padding:1px 6px;border-radius:8px;background:color-mix(in srgb,var(--tile) 78%,transparent);color:var(--text);font:600 11px/16px var(--font-tile)}.wbRadarTime:empty{display:none}.wbRadarCredit{right:6px;top:4px;max-width:calc(100% - 12px);overflow:hidden;text-overflow:ellipsis;color:var(--muted);font:400 9px/12px var(--font)}.wbRadarNote{position:absolute;top:0;right:0;bottom:0;left:0;z-index:2;display:grid;place-items:center;padding:0 12px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbRadarCam img{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;object-fit:cover}.wbWx.wbLineIcon{display:grid;place-items:center;background:var(--tile);color:var(--text)}.wbWx.wbLineIcon>svg{width:64%;height:64%}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:18px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:14px 16px 12px 12px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbAsNow{display:none}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}.wbNextHours{display:none;justify-content:space-between;align-items:center;gap:8px;min-width:0}.wbHour{display:flex;flex-direction:column;align-items:center;gap:8px;min-width:0}.wbHourTime{color:var(--muted);font:400 14px/20px var(--font);white-space:nowrap}.wbHourTemp{font:400 18px/20px var(--font-tile);white-space:nowrap}.wbHour .wbWx.wbS40{width:40px;height:40px;border-radius:16px}.wbSummary{position:relative;flex:1 1 0;min-height:0;margin-top:-12px;container:wbsum/size}.wbSummaryText{position:absolute;top:12px;left:0;right:0;margin:0;color:var(--text);font:400 16px/22px var(--font);display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}@container wbsum (height < 56px){.wbSummaryText{-webkit-line-clamp:1}}@container wbsum (height < 34px){.wbSummaryText{display:none}}@container wb-card (width < 480px){.wbColumn .wbWx.wbS60{width:48px;height:48px;border-radius:16px}}@container wb-card (width < 400px){.wbCard.wbWeather{gap:16px;padding:18px 18px 10px}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumn .wbWx.wbS60{width:40px;height:40px;border-radius:14px}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbStripScroll.wbPaged{container-type:inline-size;scroll-snap-type:x mandatory;overscroll-behavior-x:contain}.wbStripScroll.wbPaged.wbHeld{scroll-snap-type:none}.wbPaged .wbStrip{position:relative;min-width:0;padding:0}.wbSnap{position:absolute;top:0;width:1px;height:1px;scroll-snap-align:start;pointer-events:none}.wbMark.wbLast{align-items:flex-end;transform:translate(-100%)}.wbPaged .wbTimes .wbMark.wbFirst{font:400 14px/20px var(--font)}.wbPaged .wbTimes .wbMark.wbNowMark{font:600 14px/20px var(--font-tile)}.wbSky .wbPast{position:absolute;top:0;bottom:0;left:0;background:var(--card);opacity:.45;pointer-events:none}.wbSky .wbNowLine{position:absolute;top:0;bottom:0;width:2px;margin-left:-1px;background:var(--text);opacity:.55;pointer-events:none}.wbSky.wbLineSky{background:var(--tile);color:var(--text)}.wbLineArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbLineArt .wbLineArc{fill:none;stroke:var(--text);stroke-width:1.5;stroke-linejoin:round;vector-effect:non-scaling-stroke;opacity:.7}.wbLineArt .wbLineHorizon{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.35}.wbLineArt .wbLineNight{fill:var(--text);opacity:.07}.wbLineArt .wbLineEdge{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.3}.wbLineTime{position:absolute;top:calc(80% + 4px);transform:translate(-50%);color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.wbLineNow{position:absolute;width:26px;height:26px;transform:translate(-50%,-50%);border-radius:50%;background:var(--tile);pointer-events:none}.wbLineNow>svg,.wbLineGlyph>svg{display:block;width:100%;height:100%}.wbLineGlyph{position:absolute;top:calc(50% - 14px);width:28px;height:28px;transform:translate(-50%);pointer-events:none}.wbLineGlyph.wbFirst{transform:none}.wbLineGlyph.wbLast{transform:translate(-100%)}.wbSky .wbMidnight{position:absolute;top:0;bottom:0;width:0;border-left:1.5px dashed var(--text);opacity:.5;pointer-events:none}.wbDays{position:absolute;top:36px;left:0;z-index:1;display:flex;pointer-events:none}.wbDaySpan{flex:none;min-width:0}.wbDayName{position:sticky;left:8px;margin-left:8px;height:26px;min-height:0;padding:0 10px;border:0;background:color-mix(in srgb,var(--card) 82%,transparent);color:var(--text);font:600 13px/26px var(--font-tile);white-space:nowrap;cursor:pointer;pointer-events:auto}.wb .wbDayName{border-radius:13px!important;font-family:var(--font-tile)!important}.wbViews button{padding:2px 10px;font-size:13px}.wbBars .wbDayBars{flex:1 1 0;min-height:160px;display:flex;flex-direction:column;padding:0 18px;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin}.wbBars.wbTabbed .wbDayBars{min-height:206px}.wbDayBar{flex:1 0 auto;display:grid;grid-template-columns:minmax(56px,auto) 40px 36px minmax(0,1fr) 36px;align-items:center;column-gap:12px;min-height:48px;box-shadow:inset 0 -.4px 0 var(--line)}.wbDayBar:last-child{box-shadow:none}.wbRangeDay{color:var(--text);font:600 14px/20px var(--font-tile);white-space:nowrap}.wbRangeLo{color:var(--muted);text-align:right;font:400 16px/20px var(--font);font-variant-numeric:tabular-nums}.wbRangeHi{color:var(--text);text-align:right;font:400 16px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbRangeTrack{position:relative;height:6px;border-radius:3px;background:var(--tile)}.wbRangeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:3px}.wbRangeNow{position:absolute;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:#fff;box-shadow:0 0 0 2px var(--card)}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbBars .wbDayBars{padding:0 8px;min-height:380px}.wbBars.wbTabbed .wbDayBars{min-height:426px}.wbDayBar{column-gap:8px}.wbStripScroll{min-height:380px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:16px;overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbSunTile .wbZone{display:block}.wbSunZone{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff;transition:background 1s ease}.wbSunTrack{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbSunBand{fill:#fff;fill-opacity:.1}.wbSunBand.wbSunDay{fill-opacity:.14}.wbSunBand.wbSunDone{fill-opacity:.85}.wbSunDot{fill:#ffd84a}.wbSunDot.wbSunNight{fill:#9aa3c7}.wbSunCount{position:absolute;top:22px;right:22px;bottom:22px;left:22px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;padding-bottom:14px}.wbSunLeft{font:500 clamp(28px,calc(16cqw * var(--wb-k,1)),36px)/1.1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums;white-space:nowrap}.wbSunWord{font:400 13px/18px var(--font);opacity:.85}.wbSunAt{position:absolute;bottom:32px;font:500 12px/16px var(--font);opacity:.85;font-variant-numeric:tabular-nums}.wbSunRise{left:32px}.wbSunSet{right:32px}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}.wbMoonCaption{gap:8px}.wbMoonCaption span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbMoonCaption span:last-child{flex:none}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbSea{position:relative;flex:1;min-height:0;border-radius:16px;overflow:hidden;--wb-sea-inset:clamp(8.88px,calc(4.76cqw * var(--wb-k,1)),12px)}.wbSeaArt{position:absolute;top:0;right:0;bottom:0;left:0;display:block;width:100%;height:100%;image-rendering:pixelated}.wbSeaFact{position:absolute;top:clamp(7px,calc(3.97cqw * var(--wb-k,1)),10px);inset-inline:var(--wb-sea-inset);color:#26221e;font:600 clamp(9.44px,calc(5.47cqw * var(--wb-k,1)),13.78px)/1.23 var(--font-tile)}.wbSeaValue{position:absolute;bottom:var(--wb-sea-inset);inset-inline-start:var(--wb-sea-inset);color:#fff;text-shadow:0 0 2px rgba(0,0,0,.6),0 1px 3px rgba(0,0,0,.5)}.wbSeaValue .wbUnitV{color:inherit}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbTrend{position:relative;width:100%;height:100%;min-height:0}.wbTrendPlot{position:absolute;top:22px;right:0;bottom:24px;left:0}.wbTrendPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbTrendLine{fill:none;stroke:var(--text);stroke-width:2;stroke-linejoin:round;stroke-linecap:round;opacity:.8}.wbTrendDot{position:absolute;width:7px;height:7px;margin:-3.5px 0 0 -3.5px;border-radius:50%;background:var(--card);box-shadow:0 0 0 2px var(--text)}.wbTrendDot.wbToday{width:11px;height:11px;margin:-5.5px 0 0 -5.5px;background:var(--primary);box-shadow:0 0 0 3px var(--card)}.wbAvgValue{position:absolute;transform:translate(-50%,calc(-100% - 8px));color:var(--muted);font:400 10px/1 var(--font-tile);white-space:nowrap}.wbAvgValue.wbToday{color:var(--text);font-size:12px;font-weight:600}.wbTrendAvg{position:absolute;right:0;transform:translateY(4px);color:var(--muted);font:400 10px/1 var(--font-tile)}.wbTrendDays{position:absolute;left:0;right:0;bottom:0;height:16px}.wbAvgDay{position:absolute;bottom:0;transform:translate(-50%);color:var(--muted);font:400 11px/16px var(--font-tile)}.wbAvgDay.wbToday{color:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}.wbZoned{gap:14px}.wbZone{position:relative;flex:none;height:198px;display:flex;align-items:center;justify-content:center;border-radius:16px;overflow:hidden}.wbCallouts{display:none;flex-direction:column;gap:4px;margin-top:-6px}.wbCallout{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbCallout>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbCallout>span:last-child{flex:none;color:var(--text);white-space:nowrap}.wbZone>.wbSunSky{flex:1;align-self:stretch;border-radius:0}.wbZone>.wbMoonBox{flex:none;height:150px}.wbBase .wbZone{align-items:flex-end;justify-content:flex-start}.wbZone>.wbTapeRow{align-self:stretch;height:100%}.wbItem[data-xl] .wbCallouts{display:flex}.wbUv .wbZone{display:block}.wbUvArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbUvBig{position:absolute;right:0;bottom:0;display:flex;flex-direction:column;align-items:flex-end}.wbUvNum{font:500 64px/.9 var(--font-tile);letter-spacing:-.03em;color:var(--text);font-variant-numeric:tabular-nums}.wbUvWord{margin-top:6px;font:400 14px/20px var(--font);color:var(--muted)}.wbAqSmile .wbZone{display:block}.wbAqFill{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff}.wbAqFace{position:absolute;left:12px;top:12px;width:min(140px,calc(100% - 60px));height:auto;aspect-ratio:1;fill:none;stroke:currentColor;stroke-width:3.4;stroke-linecap:round;stroke-linejoin:round}.wbAqFace .wbAqEyes{stroke-width:5}.wbAqBig{position:absolute;right:14px;bottom:12px;display:flex;flex-direction:column;align-items:flex-end}.wbAqNum{font:500 56px/.9 var(--font-tile);letter-spacing:-.03em;font-variant-numeric:tabular-nums}.wbAqUnit{margin-top:4px;font:500 14px/20px var(--font)}.wbPollenAir{position:absolute;top:0;right:0;bottom:62px;left:0;overflow:hidden;pointer-events:none}.wbFloat{position:absolute;left:-12%;animation:wbFloat linear infinite}.wbBob{display:block;animation:wbBob ease-in-out infinite alternate}@keyframes wbFloat{0%{left:-12%}to{left:106%}}@keyframes wbBob{0%{transform:translateY(-6px) rotate(-14deg)}to{transform:translateY(8px) rotate(16deg)}}.wbFloat svg{display:block}.wbSeed svg{width:calc(20px * var(--s));height:calc(28px * var(--s))}.wbGrain svg{width:calc(10px * var(--s));height:calc(10px * var(--s))}.wbStem svg{width:calc(9px * var(--s));height:calc(26px * var(--s))}.wbSeed{color:var(--text);opacity:.7}.wbGrain{color:#e9c46a;opacity:.85}.wbStem{color:#a3b18a;opacity:.75}#app.light .wbGrain{color:#c99a1e}#app.light .wbStem{color:#7d8c5f}@media (prefers-reduced-motion:reduce){.wbFloat,.wbBob{animation:none}.wbFloat{left:var(--x)}}.wbPush{display:block;transition:transform .35s cubic-bezier(.2,.8,.3,1)}.wbCallout.wbAdvice>span:first-child{color:var(--text)}.wbCard.wbSquare.wbGraphCard{height:100%;min-height:0}.wbGraphCard .wbHead .wbBack{margin:-4px -6px 0 auto}.wbGraphCard .wbRangeBtn{align-self:flex-start;display:inline-flex;align-items:center;gap:6px;max-width:100%;height:32px;padding:0 8px 0 10px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:600 12px/16px var(--font-tile);cursor:pointer}.wb button.wbRangeBtn{border-radius:12px!important}.wbRangeBtn>span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRangeBtn .wbIcon{flex:none;width:16px;height:16px;fill:currentColor}.wbRangeBtn[aria-expanded=true]{background:var(--bright);color:var(--on-bright)}.wbItem:has(.wbRangePick){position:relative;z-index:30}.wbRangePick{position:absolute;top:116px;left:18px;z-index:30;display:flex;flex-direction:column;gap:12px;width:248px;box-sizing:border-box;padding:12px;border-radius:24px;background:var(--card);box-shadow:var(--hc-hair-all),0 18px 40px #00000059}.wbRangePick.wbPickRight{left:auto;right:18px}.wbRangePresets{display:flex;flex-direction:column;gap:2px}.wb .wbRangePreset{height:32px;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--text);font:400 14px/20px var(--font);text-align:left;cursor:pointer}.wb .wbRangePreset:hover{background:var(--tile)}.wb .wbRangePreset[aria-pressed=true]{background:var(--bright);color:var(--on-bright);font-weight:600}.wbRangeDates{display:grid;grid-template-columns:1fr 1fr;gap:8px;padding-top:12px;box-shadow:inset 0 .4px 0 var(--line)}.wbRangeDates label{display:grid;gap:4px;min-width:0;color:var(--muted);font:400 12px/16px var(--font)}.wbRangeDates input{width:100%;min-width:0;height:32px;box-sizing:border-box;padding:0 6px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:400 12px/16px var(--font);color-scheme:inherit}.wb .wbRangeApply{height:32px;padding:0 14px;border:0;border-radius:999px!important;background:var(--bright);color:var(--on-bright);font:600 12px/16px var(--font-tile);cursor:pointer}.wbGraphCard .wbGraph{flex:1;height:auto;min-height:0}.wb.wbPopup{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073;overscroll-behavior:contain;container-type:normal}.wb.wbPopup[hidden]{display:none}.wbPopupBox{position:relative;width:520px;max-width:100%}.wbPopup .wbCard.wbSquare.wbGraphCard{height:auto;aspect-ratio:auto;box-shadow:var(--hc-hair-all)}.wbPopup .wbGraphCard .wbGraph{flex:none;height:auto}@media (max-width:620px){.wb.wbPopup{place-items:end stretch;padding:0}.wbPopupBox{width:100%}.wbPopup .wbCard.wbSquare.wbGraphCard{border-radius:28px 28px 0 0}}`, Pu = '#app .mvPv{position:relative;transform:perspective(var(--pv-persp)) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) scale(var(--sc,1));transition:transform var(--pv-ret) var(--pv-ease)}#app .mvPv.mvMoving{transition:transform 70ms linear}#app .mvPv:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;opacity:0;mix-blend-mode:soft-light;background:radial-gradient(circle at var(--mx,50%) var(--my,50%),rgba(255,255,255,var(--pv-shine)),transparent var(--pv-size));transition:opacity var(--pv-ret) ease}#app .mvPv.mvLit:after{opacity:1}#app .tfBar{--mv-c:var(--light-soft,var(--primary));transform-origin:center;transition:box-shadow var(--ab-out) var(--ab-ease),transform var(--ab-out) var(--ab-ease)}#app .tfBar.mvHover{box-shadow:0 0 var(--ab-blur) var(--ab-spread) color-mix(in srgb,var(--mv-c) var(--ab-str),transparent);transition-duration:var(--ab-in)}#app .tfBar.mvHold{box-shadow:0 0 var(--ab-blur2) var(--ab-spread2) color-mix(in srgb,var(--mv-c) var(--ab-str2),transparent);transform:var(--ab-grow);transition-duration:var(--ab-in)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>:is(svg,ha-icon,ha-state-icon,span){transition:scale var(--ih-dur) var(--ih-ease)}@media (hover:hover){#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-s)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover:before{opacity:1}}:where(#app button.tfIcon,#app .tfBack,#app .tfEditChip,#app .tfTrayBtn,#app [data-wb=graph-close]){position:relative}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;background:color-mix(in srgb,currentColor var(--ih-tint),transparent);opacity:0;transition:opacity var(--ih-dur) var(--ih-ease)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):active>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-p)}#app .mvSegInd{position:absolute;z-index:0;pointer-events:none}#app .mvSegMoving>button{position:relative;z-index:1;background-color:transparent!important;box-shadow:none!important;transition:none!important}#app .tfMoreBackdrop{-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}#app .toast.tfToast{min-height:58px;box-sizing:border-box;padding:9px 18px 9px 9px;gap:14px;border-radius:29px;font-size:18px;line-height:1.2}#app .toast .mvTick{display:grid;place-items:center;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--mv-ok);color:#fff}#app .toast .mvTick svg{width:26px;height:26px;fill:none;stroke:currentColor;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}#app .toast .mvToastText{font-weight:600}#app .toast .toastAction{font-size:16px;margin-left:2px}#app .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}#app{--ol-l:68%;--mv-ok:#4cc38a}#app.light{--ol-l:48%;--mv-ok:#1f7a4d}#app .tfAreaPanel:has(>.mvEdge){isolation:isolate;position:relative}#app .mvEdge,#app .mvEdgeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity var(--ol-in) ease-out}#app .mvEdgeFill{z-index:-1;background:hsl(var(--ol-h) 97% var(--ol-l));mix-blend-mode:soft-light;opacity:clamp(0,calc(var(--ol-fill) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-fill));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%)}#app .mvEdge{z-index:5}#app .mvEdge:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l));opacity:clamp(0,calc(var(--ol-border) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-border));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%));mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%))}#app .mvEdge>i{position:absolute;top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;border-radius:inherit;mix-blend-mode:plus-lighter;opacity:clamp(0,calc(var(--ol-glow) * (var(--edge-proximity,0) - var(--ol-esens)) / (100 - var(--ol-esens))),var(--ol-glow));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}#app .mvEdge>i:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;--s:var(--ol-size);box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l) / 60%),inset 0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),inset 0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),inset 0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(22.4px*var(--s)) calc(1.6px*var(--s)) hsl(var(--ol-h) 97% var(--ol-l) / 10%)}#app :not(.mvLitEdge)>:is(.mvEdge,.mvEdgeFill){opacity:0;transition:opacity var(--ol-out) ease-out}@media (prefers-reduced-motion:reduce){#app .mvPv{transform:none!important}#app .mvPv:after{display:none}#app .tfBar.mvHold{transform:none}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>*{scale:none!important}}#app .tfBoardItem.mvDrag{scale:none}#app.tfEditing.tfBoardReady .tfBoardItem:not(.tfDragging){transition:left .42s cubic-bezier(.34,1.46,.64,1),top .42s cubic-bezier(.34,1.46,.64,1),height .42s cubic-bezier(.34,1.46,.64,1)}', Hu = `<main id="app"><div class="shell">
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
`, rd = "homecore-theme", Ou = {
  home: '<path d="M3 10.5L12 3L21 10.5V21H3V10.5Z"/>',
  settings: '<path d="M21 4H14"/><path d="M10 4H3"/><path d="M21 12H12"/><path d="M8 12H3"/><path d="M21 20H16"/><path d="M12 20H3"/><path d="M14 2V6"/><path d="M8 10V14"/><path d="M16 18V22"/>',
  fullscreen: '<path d="M8 3H5C3.9 3 3 3.9 3 5V8"/><path d="M21 8V5C21 3.9 20.1 3 19 3H16"/><path d="M3 16V19C3 20.1 3.9 21 5 21H8"/><path d="M16 21H19C20.1 21 21 20.1 21 19V16"/>',
  back: '<path d="M15 18L9 12L15 6"/>'
}, Nu = (o) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (Ou[o] || "") + "</svg>", id = {
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
function Iu(o, { setLight: r, fullscreenSupported: c, toggleFullscreen: p }) {
  const g = (et) => o.getElementById(et), v = g("app");
  o.querySelectorAll("[data-icon]").forEach((et) => {
    et.innerHTML = Nu(et.dataset.icon);
  });
  const w = { home: g("homeView"), settings: g("settingsView") }, S = g("homeNav"), I = g("settingsNav");
  function y(et) {
    Object.entries(w).forEach(([at, X]) => X.classList.toggle("active", at === et)), S.classList.toggle("active", et === "home"), I.classList.toggle("active", et === "settings");
  }
  S.addEventListener("click", () => y("home")), I.addEventListener("click", () => y("settings")), g("settingsBack").addEventListener("click", () => y("home"));
  function _(et) {
    const at = et === "light";
    o.querySelectorAll(".themeBtn").forEach((X) => X.classList.toggle("active", X.dataset.theme === et)), v.classList.toggle("light", at), r(at);
  }
  _(id.get(rd) === "light" ? "light" : "dark"), o.querySelectorAll(".themeBtn").forEach((et) => et.addEventListener("click", () => {
    _(et.dataset.theme), id.set(rd, et.dataset.theme);
  }));
  const O = g("tvNav");
  c || (O.hidden = !0), O.addEventListener("click", () => p());
  let V;
  function Q(et) {
    const at = g("toast");
    at && (at.textContent = et, at.classList.add("show"), clearTimeout(V), V = setTimeout(() => at.classList.remove("show"), 2600));
  }
  return { showView: y, toast: Q };
}
const Fu = /* @__PURE__ */ new Set(["roaming", "test_area"]), qu = {
  living_room: { climate: !0, cover: ["Curtains", "curtain", 62], temperature: 20.5, humidity: 44, motion: "Living room motion", plant: ["Monstera", 32, 4200, 21.4, 580] },
  kitchen: { temperature: 21.2, humidity: 48, door: "Back door", plant: ["Basil", 55, 900, 22.1, 910] },
  balcony: { solar: !0, door: "Balcony door", doorOpen: !0, valve: "Watering", plant: ["Tomatoes", 61, 18500, 14.2, 1240] },
  bedroom: { cover: ["Roller blind", "shade", 0], humidifier: !0, temperature: 18.9, humidity: 38, window: "Bedroom window" },
  office: { cover: ["Blinds", "blind", 60, 45], vacuum: !0, temperature: 21.8, humidity: 41, plant: ["Pothos", 47, 2600, 21.6, 640] },
  bathroom: { temperature: 22.4, humidity: 62 }
}, mn = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, _e = "made_up_", Fa = (o) => {
  var r;
  return (r = String(o).split(".")[1]) == null ? void 0 : r.startsWith(_e);
}, vi = (o) => o.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function Hl(o) {
  const r = o.getHours() + o.getMinutes() / 60, c = Math.max(0, Math.sin((r - 7) / 13 * Math.PI));
  return 2.4 * c * c;
}
function Wu(o) {
  const r = new Date(o.getFullYear(), o.getMonth(), o.getDate());
  let c = 0;
  for (let p = +r; p < +o; p += 10 * 60 * 1e3) c += Hl(new Date(p)) / 6;
  return c;
}
function sd(o = /* @__PURE__ */ new Date()) {
  const r = [];
  for (let c = 0; c <= 96; c++) {
    const p = +o - (96 - c) * 15 * 60 * 1e3;
    r.push([p, Hl(new Date(p))]);
  }
  return r;
}
function ju({ onChange: o }) {
  const r = {}, c = {}, p = (X, j, lt, pt) => {
    r[X] = { entity_id: X, state: lt, attributes: pt, last_changed: new Date(Date.now() - 18e6).toISOString() }, c[X] = j;
  }, g = (X, j, lt) => {
    const pt = r[X], gt = j ?? pt.state;
    r[X] = { ...pt, state: gt, attributes: { ...pt.attributes, ...lt }, last_changed: gt === pt.state ? pt.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, v = (X, j, lt, pt) => p("binary_sensor." + _e + (X ? X + "_" : "") + vi(j), X, pt ? "on" : "off", { friendly_name: j, device_class: lt });
  Object.entries(qu).forEach(([X, j]) => {
    if (j.temperature != null && p("sensor." + _e + X + "_temperature", X, String(j.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), j.humidity != null && p("sensor." + _e + X + "_humidity", X, String(j.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), j.vacuum && p("vacuum." + _e + "robot", X, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), j.climate && p("climate." + _e + X, X, "heat", { friendly_name: "Thermostat", hvac_modes: ["off", "heat", "cool", "auto"], hvac_action: "heating", current_temperature: j.temperature, temperature: 21, min_temp: 7, max_temp: 30, target_temp_step: 0.5 }), j.cover) {
      const [lt, pt, gt, nt] = j.cover;
      p("cover." + _e + X + "_" + vi(lt), X, gt ? "open" : "closed", { friendly_name: lt, device_class: pt, current_position: gt, ...nt != null ? { current_tilt_position: nt } : {} });
    }
    if (j.humidifier && p("humidifier." + _e + X, X, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: j.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), j.solar && (p("sensor." + _e + X + "_solar_power", X, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), p("sensor." + _e + X + "_solar_today", X, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), j.valve && p("valve." + _e + X + "_" + vi(j.valve), X, "closed", { friendly_name: j.valve, device_class: "water" }), j.door && v(X, j.door, "door", j.doorOpen), j.window && v(X, j.window, "window", !1), j.motion && v(X, j.motion, "motion", !1), j.plant) {
      const [lt, pt, gt, nt, J] = j.plant, Z = _e + vi(lt), P = (Bt, it, z, It, F) => p("sensor." + Z + "_" + Bt, X, String(z), { friendly_name: it, device_class: F, state_class: "measurement", unit_of_measurement: It, plant_low: z < mn[Bt][0], plant_high: z > mn[Bt][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[Bt] });
      P("moisture", "Moisture", pt, "%", "moisture"), P("light", "Light", gt, "lx", "illuminance"), P("temperature", "Temperature", nt, "°C", "temperature"), P("fertility", "Fertility", J, "µS/cm", "conductivity");
      const vt = Object.entries({ moisture: pt, light: gt, temperature: nt, fertility: J }).filter(([Bt, it]) => it < mn[Bt][0] || it > mn[Bt][1]).map(([Bt, it]) => Bt + (it < mn[Bt][0] ? " low" : " high"));
      p("plant." + Z, X, vt.length ? "problem" : "ok", { friendly_name: lt, moisture: pt, brightness: gt, temperature: nt, conductivity: J, problem: vt.join(", ") || "none" });
    }
  }), p("alarm_control_panel." + _e + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 7, code_format: null, changed_by: "Matt" }), v(null, "Front door", "door", !1), v(null, "Smoke alarm", "smoke", !1), p("sensor." + _e + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const w = {}, S = {};
  let I = null;
  function y() {
    const X = /* @__PURE__ */ new Date();
    Object.keys(r).forEach((j) => {
      j.endsWith("_solar_power") && (r[j] = { ...r[j], state: Hl(X).toFixed(2) }), j.endsWith("_solar_today") && (r[j] = { ...r[j], state: Wu(X).toFixed(1) });
    });
  }
  y();
  let _ = 0;
  function O() {
    let X = !1;
    const j = ++_ % 10 === 0, lt = (nt, J, Z) => {
      g(nt, J, Z), X = !0;
    };
    Object.entries(w).forEach(([nt, J]) => {
      const Z = r[nt].attributes.current_position, P = Z < J ? Math.min(J, Z + 10) : Math.max(J, Z - 10);
      P === J && delete w[nt], lt(nt, P === J ? P === 0 ? "closed" : "open" : J > Z ? "opening" : "closing", { current_position: P });
    }), Object.entries(S).forEach(([nt, J]) => {
      const Z = r[nt].attributes.current_tilt_position, P = Z < J ? Math.min(J, Z + 25) : Math.max(J, Z - 25);
      P === J && delete S[nt], lt(nt, null, { current_tilt_position: P });
    }), Object.keys(r).filter((nt) => nt.startsWith("climate.")).forEach((nt) => {
      const J = r[nt], Z = J.attributes, P = Z.current_temperature, vt = (J.state === "heat" || J.state === "auto") && P < Z.temperature - 0.05, Bt = (J.state === "cool" || J.state === "auto") && P > Z.temperature + 0.05, it = J.state === "off" ? "off" : vt ? "heating" : Bt ? "cooling" : "idle", z = j ? Math.round((P + (vt ? 0.1 : Bt ? -0.1 : 0)) * 10) / 10 : P;
      (z !== P || it !== Z.hvac_action) && lt(nt, null, { current_temperature: z, hvac_action: it });
    }), Object.keys(r).filter((nt) => nt.startsWith("humidifier.")).forEach((nt) => {
      const J = r[nt], Z = J.attributes, P = Z.current_humidity, vt = J.state === "on" && P < Z.humidity, Bt = vt && j ? P + 1 : P, it = J.state !== "on" ? "off" : vt ? "humidifying" : "idle";
      if (Bt !== P || it !== Z.action) {
        lt(nt, null, { current_humidity: Bt, action: it });
        const z = "sensor." + _e + c[nt] + "_humidity";
        r[z] && lt(z, String(Bt));
      }
    });
    const pt = r["vacuum." + _e + "robot"], gt = pt.attributes;
    pt.state === "cleaning" && j && lt(pt.entity_id, null, { battery_level: Math.max(5, gt.battery_level - 1) }), pt.state === "returning" && lt(pt.entity_id, "docked", {}), pt.state === "docked" && gt.battery_level < 100 && lt(pt.entity_id, null, { battery_level: Math.min(100, gt.battery_level + 2) }), I && Date.now() - I.at > 5e3 && (lt("alarm_control_panel." + _e + "house", "armed_" + I.mode, {}), I = null), X && o();
  }
  const V = setInterval(O, 1e3), Q = setInterval(() => {
    y(), o();
  }, 60 * 1e3);
  function et(X, j, lt) {
    const pt = lt == null ? void 0 : lt.entity_id;
    if (!r[pt]) return !1;
    const gt = r[pt], nt = gt.attributes, J = (Z, P) => g(pt, Z, P);
    if (X === "climate" && (j === "set_temperature" && J(null, { temperature: Math.max(nt.min_temp, Math.min(nt.max_temp, lt.temperature)) }), j === "set_hvac_mode" && J(lt.hvac_mode, lt.hvac_mode === "off" ? { hvac_action: "off" } : {}), j === "toggle" && J(gt.state === "off" ? "heat" : "off", gt.state === "off" ? {} : { hvac_action: "off" })), X === "cover") {
      const Z = j === "open_cover" ? 100 : j === "close_cover" ? 0 : j === "set_cover_position" ? lt.position : j === "toggle" ? nt.current_position > 0 ? 0 : 100 : null;
      j === "stop_cover" && (delete w[pt], delete S[pt], J(nt.current_position === 0 ? "closed" : "open")), Z != null && Z !== nt.current_position && (w[pt] = Z, J(Z > nt.current_position ? "opening" : "closing"));
      const P = j === "open_cover_tilt" ? 100 : j === "close_cover_tilt" ? 0 : j === "set_cover_tilt_position" ? lt.tilt_position : null;
      j === "stop_cover_tilt" && delete S[pt], P != null && nt.current_tilt_position != null && P !== nt.current_tilt_position && (S[pt] = P);
    }
    if (X === "humidifier" && (j === "set_humidity" && J(null, { humidity: Math.max(nt.min_humidity, Math.min(nt.max_humidity, lt.humidity)) }), j === "set_mode" && J(null, { mode: lt.mode }), j === "turn_on" || j === "turn_off" || j === "toggle")) {
      const Z = j === "turn_on" || j === "toggle" && gt.state !== "on";
      J(Z ? "on" : "off", { action: Z ? "idle" : "off" });
    }
    if (X === "vacuum" && (j === "start" && J("cleaning", { rooms: lt.rooms || nt.rooms }), j === "pause" && J("paused"), j === "return_to_base" && J("returning", { rooms: [] }), j === "locate" && J(null, { located: Date.now() }), j === "set_rooms" && J(null, { rooms: lt.rooms })), X === "valve") {
      const Z = j === "open_valve" || j === "toggle" && gt.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(j) && J(Z ? "open" : "closed");
    }
    if (X === "alarm_control_panel") {
      j === "alarm_disarm" && (I = null, J("disarmed", { changed_by: "Matt" }));
      const Z = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night" }[j];
      Z && (I = { mode: Z, at: Date.now() }, J("arming", { changed_by: "Matt" }));
    }
    return o(), !0;
  }
  function at(X, { madeUp: j = !0 } = {}) {
    const lt = j ? r : {}, pt = (X == null ? void 0 : X.states) || {}, gt = (X == null ? void 0 : X.entities) || {}, nt = (X == null ? void 0 : X.devices) || {}, J = (ot) => {
      var yt;
      const rt = gt[ot];
      return rt && (rt.area_id || rt.device_id && ((yt = nt[rt.device_id]) == null ? void 0 : yt.area_id)) || null;
    }, Z = (ot) => {
      const rt = gt[ot];
      return pt[ot] && pt[ot].state !== "unavailable" && !(rt != null && rt.hidden) && !(rt != null && rt.entity_category);
    }, P = {};
    Object.keys(pt).forEach((ot) => {
      const rt = J(ot);
      rt && Z(ot) && (P[rt] || (P[rt] = [])).push(ot);
    });
    const vt = { ...pt, ...lt }, Bt = (ot) => {
      var rt, yt;
      return (yt = (rt = vt[ot]) == null ? void 0 : rt.attributes) == null ? void 0 : yt.device_class;
    }, it = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], z = Object.keys(pt).filter((ot) => ot.startsWith("vacuum.") && Z(ot)), It = Object.values((X == null ? void 0 : X.areas) || {}).filter((ot) => !Fu.has(ot.area_id)).map((ot) => {
      const rt = ot.area_id, yt = P[rt] || [], ft = (Ct) => yt.filter((Me) => Me.startsWith(Ct + ".")), xt = (Ct) => ft("sensor").filter((Me) => Bt(Me) === Ct), Ft = (Ct) => Object.keys(lt).filter((Me) => c[Me] === rt && Ct(Me)), re = (Ct, Me) => Ct.length ? Ct : Ft(Me), mt = re(xt("temperature"), (Ct) => Ct.endsWith(rt + "_temperature")), Ue = re(xt("humidity"), (Ct) => Ct.endsWith(rt + "_humidity")), to = xt("power").filter((Ct) => /^(W|kW)$/.test(vt[Ct].attributes.unit_of_measurement || "")), Yo = ft("binary_sensor").filter((Ct) => Bt(Ct) === "moisture"), To = re(ft("plant"), (Ct) => Ct.startsWith("plant.")).map((Ct) => ({ id: Ct, readings: Ft((Me) => Me.startsWith("sensor." + Ct.split(".")[1] + "_")) })), Wa = [...ft("binary_sensor").filter((Ct) => it.includes(Bt(Ct))), ...Ft((Ct) => Ct.startsWith("binary_sensor."))];
      return {
        id: rt,
        name: ot.name,
        icon: ot.icon,
        floor: ot.floor_id || null,
        readings: [...mt.slice(0, 1), ...Ue.slice(0, 1), ...Yo],
        power: to.length ? to.reduce((Ct, Me) => Ct + Number(vt[Me].state) * (vt[Me].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: ft("switch"),
        lights: ft("light"),
        actions: [...ft("light"), ...re(ft("climate"), (Ct) => Ct.startsWith("climate.")), ...re(ft("cover"), (Ct) => Ct.startsWith("cover.")), ...re(ft("humidifier"), (Ct) => Ct.startsWith("humidifier.")), ...re(ft("valve"), (Ct) => Ct.startsWith("valve.")), ...ft("media_player"), ...ft("vacuum"), ...z.length ? [] : Ft((Ct) => Ct.startsWith("vacuum."))],
        solar: Ft((Ct) => Ct.includes("_solar_")),
        plants: To,
        openings: Wa,
        alerts: [...Yo, ...Wa].filter((Ct) => {
          var Me;
          return ((Me = vt[Ct]) == null ? void 0 : Me.state) === "on";
        })
      };
    }).filter((ot) => ot.readings.length || ot.plugs.length || ot.actions.length || ot.solar.length || ot.plants.length), F = Object.keys(pt).find((ot) => /^sensor\..*(p1_meter_power|grid_power)$/.test(ot) && pt[ot].state !== "unavailable") || null, tt = (ot) => Object.keys(pt).filter((rt) => rt.startsWith(ot + ".") && Z(rt)), E = tt("alarm_control_panel"), dt = z.length ? z : j ? ["vacuum." + _e + "robot"] : [];
    return {
      states: vt,
      rooms: It,
      grid: F,
      // any device's room, hidden ones too (Maintenance's batteries are mostly diagnostic)
      areaOf: (ot) => lt[ot] ? c[ot] : J(ot),
      vacuums: dt,
      homeVacuums: dt.filter((ot) => !It.some((rt) => rt.actions.includes(ot))),
      security: {
        alarms: E.length ? E : j ? ["alarm_control_panel." + _e + "house"] : [],
        locks: tt("lock"),
        openings: [...Object.keys(lt).filter((ot) => ot.startsWith("binary_sensor.")), ...j ? ["sensor." + _e + "doorbell"] : []]
      }
    };
  }
  return { model: at, call: et, stop() {
    clearInterval(V), clearInterval(Q);
  } };
}
const La = {
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
}, yr = (o) => o < 0 ? 0 : o > 1 ? 1 : o, Tl = (o) => {
  const r = String(o || "#000000").trim().replace("#", ""), c = r.length === 3 ? r.split("").map((p) => p + p).join("") : r;
  return [0, 2, 4].map((p) => parseInt(c.slice(p, p + 2), 16) || 0);
}, Vu = (o) => "#" + o.map((r) => Math.round(Math.max(0, Math.min(255, r))).toString(16).padStart(2, "0")).join(""), ld = {}, _a = (o, r, c) => {
  const p = o + r + c;
  return ld[p] || (ld[p] = Vu(Tl(o).map((g, v) => g + (Tl(r)[v] - g) * c)));
}, cd = {}, cl = (o) => cd[o] || (cd[o] = Tl(o));
function pp(o, r) {
  const c = String(o || "");
  return (c === "sunny" || c === "clear-night" ? "clear" : c === "partlycloudy" ? "partly" : c === "fog" ? "fog" : c === "lightning" || c === "lightning-rainy" ? "storm" : c === "snowy" || c === "snowy-rainy" ? "snow" : c === "rainy" || c === "pouring" || c === "hail" ? "rain" : "cloudy") + "/" + (c === "clear-night" || r ? "night" : "day");
}
function zu(o) {
  const r = { clear: [o.skyClearDay, o.skyClearNight], cloudy: [o.skyCloudyDay, o.skyCloudyNight], rain: [o.skyRainDay, o.skyRainNight], snow: [o.skySnowDay, o.skySnowNight], fog: [o.skyFogDay, o.skyFogNight] };
  return r.partly = [_a(r.clear[0], r.cloudy[0], 0.12), _a(r.clear[1], r.cloudy[1], 0.12)], r.storm = [_a(r.rain[0], "#000000", 0.22), _a(r.rain[1], "#000000", 0.22)], r;
}
const Ll = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], Dl = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], El = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function Gu(o, r = La) {
  const c = { ...La, ...r }, p = zu(c), g = String(o).split("/"), v = p[g[0]] ? g[0] : "clear", w = g[1] === "night", S = p[v][w ? 1 : 0], I = {
    night: w,
    clearness: v === "clear" ? 1 : v === "partly" ? 0.7 : 0.25,
    sky: S,
    skyStops: [S],
    skyT: 0,
    sun: { x: 45, y: w ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: w ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: w ? 1 : 0 },
    stars: Ll.map(() => ({ o: 0 })),
    rain: Dl.map(() => ({ o: 0, dy: -16 })),
    snow: El.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, y = (_) => Ll.map(() => ({ o: _ }));
  return v === "clear" ? w ? (I.moon.o = 1, I.stars = y(1)) : I.sun.o = 1 : v === "partly" ? (I.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: w ? 1 : 0 }, w ? (I.moon = { x: 34, y: 33, d: 48, o: 1 }, I.stars = y(0.7)) : I.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : v === "cloudy" || v === "fog" ? (I.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: w ? 1 : 0 }, w ? I.moon = { x: 40, y: 36, d: 40, o: 0 } : I.sun = { x: 40, y: 36, r: 20, o: 0 }) : (I.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, w ? I.moon = { x: 38, y: 28, d: 36, o: 0 } : I.sun = { x: 38, y: 28, r: 18, o: 0 }, v === "snow" ? I.snow = El.map(() => ({ o: 1, dy: 0 })) : I.rain = Dl.map((_, O) => ({ o: v === "storm" && O === 1 ? 0 : 1, dy: 0 })), v === "storm" && (I.bolt = { o: 1, dy: 0 })), I;
}
const Uu = [
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
], hn = (o, r) => (Uu[(r & 7) * 8 + (o & 7)] + 0.5) / 64, Yu = 0, fp = 1, up = 2, hp = 3, mp = 4, Ja = 5, Oi = 6, qn = 7, gp = 8, dd = (o, r) => r <= 0.6665 && ((o - 0.5) * (o - 0.5) + (r - 0.2877) * (r - 0.2877) <= 0.0824 || (o - 0.25) * (o - 0.25) + (r - 0.416) * (r - 0.416) <= 0.0625 || (o - 0.791) * (o - 0.791) + (r - 0.458) * (r - 0.458) <= 0.0437 || o >= 0.25 && o <= 0.791 && r >= 0.416), Zu = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], Ku = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((o) => [o[0] * 13 / 11, o[1] * 28 / 24]), Xu = (o, r, c) => {
  let p = !1;
  for (let g = 0, v = o.length - 1; g < o.length; v = g++) {
    const w = o[g], S = o[v];
    w[1] > c != S[1] > c && r < (S[0] - w[0]) * (c - w[1]) / (S[1] - w[1]) + w[0] && (p = !p);
  }
  return p;
};
function $u(o, { size: r = 90, px: c = 2, oneBit: p = !1, colors: g = La, ink: v = "#26221e", paper: w = "#fbf9f6", clock: S = 0, idle: I = !1 } = {}) {
  const y = { ...La, ...g }, _ = Math.sin, O = Math.PI * 2, V = Math.max(6, Math.round(r / c)), Q = V / 90, et = I ? Math.floor(S / 100) * 100 : 0, at = I ? _(O * et / 3600) : 0, X = I ? 1.8 * _(O * et / 6400) : 0, j = I ? 0.9 * _(O * et / 4100) : 0, lt = I ? 0.8 * _(O * et / 5200) : 0, pt = et / 3400 % 1, gt = I && o.bolt.o > 0.5 && (pt < 0.04 || pt > 0.08 && pt < 0.11), nt = new Array(V * V), J = new Uint8Array(V * V), Z = (F, tt, E, dt, ot) => {
    E == null || F < 0 || tt < 0 || F >= V || tt >= V || (dt >= 1 || dt > hn(F + 5, tt + 3)) && (nt[tt * V + F] = E, J[tt * V + F] = ot);
  }, P = (F, tt, E, dt) => {
    for (let ot = Math.max(0, Math.floor(tt - E) - 1); ot <= Math.min(V - 1, tt + E + 1); ot++) for (let rt = Math.max(0, Math.floor(F - E) - 1); rt <= Math.min(V - 1, F + E + 1); rt++) dt(rt, ot, rt + 0.5 - F, ot + 0.5 - tt);
  }, vt = o.skyStops || [o.sky], Bt = o.skyT || 0;
  for (let F = 0; F < V; F++) {
    const tt = o.night ? yr(1 - (F + 0.5) / (V * 0.7)) * 0.85 : yr(((F + 0.5) / V - 0.35) / 0.65) * 0.85;
    for (let E = 0; E < V; E++) {
      let dt = vt[0];
      if (vt.length > 1) {
        const ot = Bt * (vt.length - 1), rt = Math.min(vt.length - 2, Math.floor(ot));
        dt = ot - rt > hn(E, F) ? vt[rt + 1] : vt[rt];
      }
      tt > hn(E + 2, F + 5) && (dt = o.night ? _a(dt, "#000000", 0.28) : _a(dt, "#ffffff", 0.2)), nt[F * V + E] = gt ? _a(dt, "#ffffff", 0.25) : dt;
    }
  }
  if (o.sun.o > 0.01) {
    const F = o.sun.x * Q, tt = o.sun.y * Q, E = Math.max(1, o.sun.r * Q);
    if (I) {
      const dt = E * (1.45 + 0.06 * at), ot = _a(y.sun, "#ffffff", 0.55);
      if (P(F, tt, dt, (rt, yt, ft, xt) => {
        const Ft = Math.sqrt(ft * ft + xt * xt);
        Ft > E && Ft < dt && Z(rt, yt, ot, 0.26 * (1 - (Ft - E) / (dt - E)) * o.sun.o, Yu);
      }), o.sun.o > 0.5) {
        const rt = Math.floor(et / 500) % 2, yt = Math.max(1, E * 0.22);
        for (let ft = 0; ft < 8; ft++) if (ft % 2 === rt) for (let xt = E + 1.5; xt < E + 1.5 + yt; xt += 0.7) Z(Math.floor(F + Math.cos(ft * Math.PI / 4) * xt), Math.floor(tt + Math.sin(ft * Math.PI / 4) * xt), y.sun, o.sun.o, gp);
      }
    }
    P(F, tt, E, (dt, ot, rt, yt) => {
      if (rt * rt + yt * yt > E * E) return;
      const ft = ((rt * 0.643 + yt * 0.766) / E + 1) / 2;
      Z(dt, ot, yr((ft - 0.62) / 0.38) > hn(dt, ot) ? y.sunEdge : y.sun, o.sun.o, fp);
    });
  }
  if (Ll.forEach((F, tt) => {
    const E = o.stars[tt].o;
    if (E < 0.01) return;
    const dt = Math.floor(F[0] * Q), ot = Math.floor(F[1] * Q), rt = I ? (Math.floor(et / 300) + tt * 3) % 6 : 0;
    if (rt === 5) return;
    const yt = Math.round(F[2] * Q * (rt === 4 ? 0.3 : rt < 2 ? 1 : 0.6));
    Z(dt, ot, y.star, E, qn);
    for (let ft = 1; ft <= yt; ft++) {
      const xt = ft === yt && yt > 1 ? _a(y.star, o.sky, 0.5) : y.star;
      Z(dt - ft, ot, xt, E, qn), Z(dt + ft, ot, xt, E, qn), Z(dt, ot - ft, xt, E, qn), Z(dt, ot + ft, xt, E, qn);
    }
  }), o.moon.o > 0.01) {
    const F = Math.max(1.5, o.moon.d * Q * 0.37), tt = o.moon.x * Q, E = o.moon.y * Q + (I && lt > 0.4 ? -1 : 0), dt = tt + 0.547 * F, ot = E - 0.503 * F, rt = 0.82 * F, yt = _a(y.moon, "#ffffff", 0.6);
    P(tt, E, F, (ft, xt, Ft, re) => {
      if (Ft * Ft + re * re > F * F) return;
      const mt = ft + 0.5 - dt, Ue = xt + 0.5 - ot;
      mt * mt + Ue * Ue <= rt * rt || Z(ft, xt, yr((re + F) / (2 * F) * 1.1 - 0.1) > hn(ft, xt) ? y.moon : yt, o.moon.o, up);
    });
  }
  const it = Math.max(2, Math.round(15.65 * Q)), z = Math.max(1, Math.round(5.87 * Q * 0.5));
  Dl.forEach((F, tt) => {
    const E = o.rain[tt];
    let dt = E.dy, ot = E.o;
    if (ot < 0.01) return;
    if (I) {
      const ft = (et / 950 + tt / 3) % 1;
      dt += -5 + ft * 14, ot *= ft < 0.18 ? ft / 0.18 : ft > 0.72 ? (1 - ft) / 0.28 : 1;
    }
    const rt = (F[0] + 3 + X) * Q, yt = (F[1] + dt) * Q;
    for (let ft = 0; ft < it; ft++) for (let xt = 0; xt < z; xt++) Z(Math.floor(rt - 0.208 * ft) + xt, Math.floor(yt) + ft, y.rain, ot, mp);
  });
  const It = Math.max(0, Math.round(7.34 * Q / 2.6));
  if (El.forEach((F, tt) => {
    const E = o.snow[tt];
    let dt = E.dy, ot = 0, rt = E.o;
    if (rt < 0.01) return;
    if (I) {
      const xt = (et / 3200 + tt / 5) % 1;
      dt += -6 + xt * 14, ot = 1.5 * _(O * (xt * 1.5 + tt / 5)), rt *= xt < 0.2 ? xt / 0.2 : xt > 0.75 ? (1 - xt) / 0.25 : 1;
    }
    const yt = Math.floor((F[0] + 3.67 + ot + X) * Q), ft = Math.floor((F[1] + 3.67 + dt) * Q);
    Z(yt, ft, y.snow, rt, Ja);
    for (let xt = 1; xt <= It; xt++)
      Z(yt - xt, ft, y.snow, rt, Ja), Z(yt + xt, ft, y.snow, rt, Ja), Z(yt, ft - xt, y.snow, rt, Ja), Z(yt, ft + xt, y.snow, rt, Ja), It > 1 && xt < It && (Z(yt - xt, ft - xt, y.snow, rt, Ja), Z(yt + xt, ft - xt, y.snow, rt, Ja), Z(yt - xt, ft + xt, y.snow, rt, Ja), Z(yt + xt, ft + xt, y.snow, rt, Ja));
  }), o.bolt.o > 0.01)
    if (V >= 30) {
      const F = 39 + X, tt = 50 + o.bolt.dy;
      for (let E = Math.floor(tt * Q); E <= (tt + 28) * Q; E++) for (let dt = Math.floor(F * Q); dt <= (F + 13) * Q; dt++)
        Xu(Ku, (dt + 0.5) / Q - F, (E + 0.5) / Q - tt) && Z(dt, E, y.sun, o.bolt.o, Oi);
    } else {
      const F = V / 18, tt = 7, E = 10 + Math.round(o.bolt.dy * 0.2);
      Zu.forEach((dt, ot) => dt.split("").forEach((rt, yt) => {
        if (rt !== "#") return;
        const ft = Math.floor((tt + yt) * F), xt = Math.floor((E + ot) * F);
        for (let Ft = xt; Ft < Math.max(xt + 1, Math.floor((E + ot + 1) * F)); Ft++) for (let re = ft; re < Math.max(ft + 1, Math.floor((tt + yt + 1) * F)); re++) Z(re, Ft, y.sun, o.bolt.o, Oi);
      }));
    }
  if (o.cloud.o > 0.01) {
    const F = Math.max(3, o.cloud.w * Q), tt = F * 0.6665, E = (o.cloud.x + X) * Q - F / 2, dt = (o.cloud.y + j) * Q - tt / 2, ot = _a(y.cloudDay, y.cloudNight, Math.round(o.cloud.f * 4) / 4), rt = _a(ot, "#000000", 0.16);
    for (let yt = Math.max(0, Math.floor(dt) - 1); yt <= Math.min(V - 1, dt + tt + 1); yt++) for (let ft = Math.max(0, Math.floor(E) - 1); ft <= Math.min(V - 1, E + F + 1); ft++) {
      const xt = (ft + 0.5 - E) / F, Ft = (yt + 0.5 - dt) / F;
      dd(xt, Ft) && Z(ft, yt, !dd(xt, Ft + 1 / F) || yr((Ft - 0.42) / 0.25) * 0.8 > hn(ft, yt) ? rt : ot, o.cloud.o, hp);
    }
  }
  return Ju(nt, J, V, V, { oneBit: p, ink: v, paper: w, snowInk: !o.night });
}
function Ju(o, r, c, p, { oneBit: g, ink: v, paper: w, snowInk: S }) {
  const I = new Uint8ClampedArray(c * p * 4), y = cl(v), _ = cl(w);
  for (let O = 0; O < p; O++) for (let V = 0; V < c; V++) {
    const Q = O * c + V, et = r[Q];
    if (o[Q] == null) continue;
    let at = cl(o[Q]);
    if (g) {
      let X;
      et === mp || et === gp ? X = !0 : et === Ja ? X = S : et === qn || et === Oi ? X = !1 : X = Math.round((0.2126 * at[0] + 0.7152 * at[1] + 0.0722 * at[2]) / 255 * 4) / 4 <= hn(V, O), (et === fp || et === up || et === hp || et === Oi) && (V > 0 && r[Q - 1] !== et || V < c - 1 && r[Q + 1] !== et || O > 0 && r[Q - c] !== et || O < p - 1 && r[Q + c] !== et) && (X = !0), at = X ? y : _;
    }
    I[Q * 4] = at[0], I[Q * 4 + 1] = at[1], I[Q * 4 + 2] = at[2], I[Q * 4 + 3] = 255;
  }
  return { w: c, h: p, data: I };
}
const Ao = (o) => o < 0 ? 0 : o > 1 ? 1 : o, Bl = (o) => {
  const r = String(o || "#000000").trim().replace("#", ""), c = r.length === 3 ? r.split("").map((p) => p + p).join("") : r;
  return [0, 2, 4].map((p) => parseInt(c.slice(p, p + 2), 16) || 0);
}, Qu = (o) => "#" + o.map((r) => Math.round(Math.max(0, Math.min(255, r))).toString(16).padStart(2, "0")).join(""), pd = {}, Ta = (o, r, c) => {
  const p = o + r + c;
  return pd[p] || (pd[p] = Qu(Bl(o).map((g, v) => g + (Bl(r)[v] - g) * c)));
}, fd = {}, Bi = (o) => fd[o] || (fd[o] = Bl(o));
function th(o) {
  const r = { clear: [o.skyClearDay, o.skyClearNight], cloudy: [o.skyCloudyDay, o.skyCloudyNight], rain: [o.skyRainDay, o.skyRainNight], snow: [o.skySnowDay, o.skySnowNight], fog: [o.skyFogDay, o.skyFogNight] };
  return r.partly = [Ta(r.clear[0], r.cloudy[0], 0.12), Ta(r.clear[1], r.cloudy[1], 0.12)], r.storm = [Ta(r.rain[0], "#000000", 0.22), Ta(r.rain[1], "#000000", 0.22)], r;
}
const eh = [
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
], Mo = (o, r) => (eh[(r & 7) * 8 + (o & 7)] + 0.5) / 64, bp = 1, wp = 2, vp = 3, yp = 4, Wn = 5, Ni = 6, Rl = 7, xp = 8, ud = (o, r) => r <= 0.6665 && ((o - 0.5) * (o - 0.5) + (r - 0.2877) * (r - 0.2877) <= 0.0824 || (o - 0.25) * (o - 0.25) + (r - 0.416) * (r - 0.416) <= 0.0625 || (o - 0.791) * (o - 0.791) + (r - 0.458) * (r - 0.458) <= 0.0437 || o >= 0.25 && o <= 0.791 && r >= 0.416), ah = (o, r, c) => {
  let p = !1;
  for (let g = 0, v = o.length - 1; g < o.length; v = g++) {
    const w = o[g], S = o[v];
    w[1] > c != S[1] > c && r < (S[0] - w[0]) * (c - w[1]) / (S[1] - w[1]) + w[0] && (p = !p);
  }
  return p;
};
function oh(o, r, c, p, { oneBit: g, ink: v, paper: w, snowInk: S }) {
  const I = new Uint8ClampedArray(c * p * 4), y = Bi(v), _ = Bi(w);
  for (let O = 0; O < p; O++) for (let V = 0; V < c; V++) {
    const Q = O * c + V, et = r[Q];
    if (o[Q] == null) continue;
    let at = Bi(o[Q]);
    if (g) {
      let X;
      et === yp || et === xp ? X = !0 : et === Wn ? X = S : et === Rl || et === Ni ? X = !1 : X = Math.round((0.2126 * at[0] + 0.7152 * at[1] + 0.0722 * at[2]) / 255 * 4) / 4 <= Mo(V, O), (et === bp || et === wp || et === vp || et === Ni) && (V > 0 && r[Q - 1] !== et || V < c - 1 && r[Q + 1] !== et || O > 0 && r[Q - c] !== et || O < p - 1 && r[Q + c] !== et) && (X = !0), at = X ? y : _;
    }
    I[Q * 4] = at[0], I[Q * 4 + 1] = at[1], I[Q * 4 + 2] = at[2], I[Q * 4 + 3] = 255;
  }
  return { w: c, h: p, data: I };
}
const nh = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, rh = (o) => pp(o, !1).split("/")[0], dl = (o) => () => {
  o |= 0, o = o + 1831565813 | 0;
  let r = Math.imul(o ^ o >>> 15, 1 | o);
  return r = r + Math.imul(r ^ r >>> 7, 61 | r) ^ r, ((r ^ r >>> 14) >>> 0) / 4294967296;
}, ih = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sh = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", lh = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", ch = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", dh = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], ph = [".##", "##.", ".#.", "#.."];
function kp(o, { width: r, height: c, colors: p, wave: g = 0.38, soft: v = 6, glow: w = 0.6, columns: S = 6 }) {
  const I = { ...La, dawn: "#e5a77e", ...p }, y = th(I), _ = r, O = c, V = _ / S, Q = V / 2, et = Math.PI * 2, at = o.length ? o : [{ cond: "cloudy", night: !1 }], X = [...Array(S * 2)].map((gt, nt) => {
    const J = at[Math.min(nt, at.length - 1)], Z = rh(J.cond), P = nt % 2 === 1;
    return { cond: J.cond, k: Z, night: P, sky: y[Z][P ? 1 : 0], cover: nh[Z] };
  }), j = (gt) => O * (0.5 - g * Math.cos(et * (gt / V - 0.25)));
  return { C: I, S: X, W: _, H: O, cw: V, sw: Q, TAU: et, yb: j, side: (gt, nt, J) => {
    const Z = (gt ? j(nt) - J : J - j(nt)) / Math.max(3, v * 1.4) + 0.5;
    return Z <= 0 ? 0 : Z >= 1 ? 1 : Z;
  }, glowAt: (gt) => {
    const nt = ((gt / V - 0.25) % 1 + 1) % 1, J = Math.max(0, Math.min(S - 1, Math.round(gt / V - 0.25))), Z = Math.max(0, Math.min(S - 1, Math.round(gt / V - 0.75))), P = 1 - (X[2 * J].cover + X[2 * Z + 1].cover) / 2, vt = Math.sin(Math.PI * Math.min(1, Math.max(0, j(gt) / O)));
    return { c: nt < 0.5 ? I.dusk : I.dawn, a: w * (0.2 + 0.8 * P) * vt * vt };
  }, soft: v, tw: V * 0.3, sy: O / 90 };
}
function Mp(o, { clock: r = 0, ambient: c = !1, seed: p = 1 }) {
  const { S: g, sw: v, side: w, C: S, TAU: I, sy: y, H: _ } = o, O = r, V = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  g.forEach((at, X) => {
    const j = dl(p * 977 + X * 131 + 7), lt = (X + 0.5) * v, pt = at.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[at.k] : 0;
    for (let gt = 0; gt < pt; gt++) {
      const nt = lt + (j() - 0.5) * v * 1.6, J = (6 + j() * 76) * y, Z = j() < 0.35, P = 1.8 + j() * 1.6, vt = w(!0, nt, J) * (Z ? 0.95 : 0.7) * (c ? 0.6 + 0.4 * Math.sin(I * O / 2600 + gt * 1.7 + X) : 1);
      vt >= 0.03 && V.stars.push({ x: nt, y: J, big: Z, size: P, o: vt });
    }
    if (!at.night && (at.k === "clear" || at.k === "partly")) {
      const gt = lt + (j() - 0.5) * v * 0.3, nt = Math.min(15, v * 0.29);
      V.suns.push({ x: gt, y: 32 * y, rad: nt, halo: nt * 2.8 * (c ? 1 + 0.07 * Math.sin(I * O / 3600 + X) : 1) });
    }
    if (at.night && (at.k === "clear" || at.k === "partly")) {
      const gt = Math.min(0.78, v * 0.55 / 34), nt = lt - 23 * gt + (j() - 0.5) * v * 0.2;
      V.moons.push({ x: nt + 23 * gt, y: (4 + (c ? 0.8 * Math.sin(I * O / 5200 + X) : 0)) * y + 23 * gt, d: 46 * gt });
    }
  });
  const Q = Math.max(56, Math.min(100, _ * 0.45)), et = Math.max(1, v / (Q * 2.4));
  return g.forEach((at, X) => {
    const j = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[at.k];
    if (!j) return;
    const lt = at.k === "partly" ? 1 : Math.round(j * et), pt = dl(p * 577 + X * 71 + 3), gt = (X + 0.5) * v, nt = at.k === "rain" || at.k === "storm" || at.night ? S.cloudNight : S.cloudDay, J = at.night ? 0.82 : at.k === "storm" ? 0.75 : 1;
    for (let Z = 0; Z < lt; Z++) {
      const P = Q / 46 * (at.k === "partly" ? 1 : 0.8 + pt() * 0.4), vt = gt + (at.k === "partly" ? v * 0.12 : ((Z + 0.5) / lt - 0.5) * v * 0.95 + (pt() - 0.5) * v * 0.5 / lt), Bt = (at.k === "partly" ? 40 : 6 + pt() * 26) * y, it = c ? 2.5 * Math.sin(I * O / 9e3 + X * 1.3 + Z * 2.1) : 0, z = c ? 0.9 * Math.sin(I * O / 6100 + X + Z) : 0;
      V.clouds.push({ x: vt - 23 * P + it, y: Bt - 15.33 * P + z, w: 46 * P, h: 30.66 * P, fill: nt, o: J * (lt > 1 && Z === 0 ? 0.85 : 1) });
    }
  }), g.forEach((at, X) => {
    const j = dl(p * 313 + X * 29 + 11), lt = (X + 0.5) * v, pt = at.cond === "pouring" ? 16 : at.cond === "rainy" || at.cond === "hail" ? 9 : at.cond === "lightning-rainy" ? 12 : at.cond === "snowy-rainy" ? 5 : 0;
    for (let nt = 0; nt < pt; nt++) {
      let J = lt + (j() - 0.5) * v * 1.05, Z = 44 + j() * 36, P = 1;
      if (c) {
        const Bt = ((Z - 44 + O * 0.04) % 36 + 36) % 36;
        J -= 0.21 * (Bt - (Z - 44)), Z = 44 + Bt, P = Math.min(1, Bt / 6, (36 - Bt) / 6);
      }
      Z *= y;
      const vt = w(at.night, J, Z) * P;
      vt >= 0.05 && V.drops.push({ x: J, y: Z, o: vt });
    }
    const gt = at.cond === "snowy" ? 11 : at.cond === "snowy-rainy" ? 6 : 0;
    for (let nt = 0; nt < gt; nt++) {
      let J = lt + (j() - 0.5) * v * 1.05, Z = 40 + j() * 44, P = 1;
      if (c) {
        const Bt = ((Z - 40 + O * 9e-3) % 44 + 44) % 44;
        Z = 40 + Bt, J += 1.6 * Math.sin(I * O / 2800 + nt * 1.9 + X), P = Math.min(1, Bt / 6, (44 - Bt) / 6);
      }
      Z *= y;
      const vt = w(at.night, J, Z) * P;
      vt >= 0.05 && V.flakes.push({ x: J, y: Z, o: vt });
    }
    if (at.k === "fog") {
      const nt = at.night ? "#c8ccd6" : "#ffffff", J = at.night ? 0.28 : 0.62, Z = c ? 4 * Math.sin(I * O / 8e3 + X) : 0;
      for (let P = 0; P < 4; P++) V.fogs.push({ x: lt - v * 0.75 + P % 2 * v * 0.18 + (P % 2 ? Z : -Z), y: (30 + P * 13) * y, w: v * 1.3, c: nt, a: J });
    }
    if (at.k === "storm") {
      const nt = (O / 3400 + X * 0.37) % 1;
      V.bolts.push({ x: lt + (j() - 0.5) * v * 0.3 - 5, y: 36 * y, o: c && !(nt < 0.05 || nt > 0.09 && nt < 0.12) ? 0.8 : 1 });
    }
  }), V;
}
function fh(o, r, c, p, g, v, w, S) {
  const { S: I, C: y, cw: _, yb: O, glowAt: V, soft: Q, tw: et, sy: at } = o, X = new Array(c * p), j = new Uint8Array(c * p), lt = new Uint8Array(c * p), pt = (F, tt, E, dt, ot) => {
    E == null || F < 0 || tt < 0 || F >= c || tt >= p || (dt >= 1 || dt > Mo(F + 5, tt + 3)) && (X[tt * c + F] = E, j[tt * c + F] = ot);
  }, gt = (F, tt, E, dt) => {
    for (let ot = Math.max(0, Math.floor(tt - E) - 1); ot <= Math.min(p - 1, tt + E + 1); ot++) for (let rt = Math.max(0, Math.floor(F - E) - 1); rt <= Math.min(c - 1, F + E + 1); rt++) dt(rt, ot, rt + 0.5 - F, ot + 0.5 - tt);
  }, nt = (F, tt, E) => {
    for (let ot = 0; ot < F.length - 1; ot++) {
      const rt = (ot + tt) * _;
      if (E < rt - et / 2) return [F[ot], F[ot], 0];
      if (E <= rt + et / 2) return [F[ot], F[ot + 1], (E - rt + et / 2) / et];
    }
    const dt = F[F.length - 1];
    return [dt, dt, 0];
  }, J = I.filter((F) => !F.night).map((F) => F.sky), Z = I.filter((F) => F.night).map((F) => F.sky), P = Q / v, vt = 16 * at / v;
  for (let F = 0; F < c; F++) {
    const tt = (F + 0.5) * g, E = O(tt) / v, dt = nt(J, 0.75, tt), ot = nt(Z, 1.25, tt), rt = V(tt);
    for (let yt = 0; yt < p; yt++) {
      const ft = Mo(F, yt), xt = yt + 0.5 - E, Ft = (P > 0.01 ? Ao(0.5 + xt / P) : xt > 0 ? 1 : 0) > ft;
      let re = Ft ? dt[2] > ft ? dt[1] : dt[0] : ot[2] > ft ? ot[1] : ot[0];
      (Ft ? Ao(((yt + 0.5) / p - 0.45) / 0.55) * 0.7 : Ao(1 - (yt + 0.5) / (p * 0.55)) * 0.7) > Mo(F + 2, yt + 5) && (re = Ft ? Ta(re, "#ffffff", 0.18) : Ta(re, "#000000", 0.25)), Ft && xt >= 0 && xt < vt && rt.a * 1.3 * (1 - xt / vt) > Mo(F + 6, yt + 1) && (re = rt.c), X[yt * c + F] = re, lt[yt * c + F] = Ft ? 0 : 1;
    }
  }
  const Bt = Ta(y.sun, "#ffffff", 0.55), it = Ta(y.moon, "#ffffff", 0.6);
  r.stars.forEach((F) => {
    const tt = Math.floor(F.x / g), E = Math.floor(F.y / v);
    if (tt < 0 || E < 0 || tt >= c || E >= p || !lt[E * c + tt] || F.o < 0.15) return;
    const dt = F.o > 0.45 ? y.star : Ta(y.star, X[E * c + tt], 0.5), ot = F.big && F.o > 0.6 ? Math.floor(F.size / g) : 0;
    pt(tt, E, dt, 1, Rl);
    for (let rt = 1; rt <= ot; rt++) [[tt - rt, E], [tt + rt, E], [tt, E - rt], [tt, E + rt]].forEach((yt) => {
      yt[0] >= 0 && yt[1] >= 0 && yt[0] < c && yt[1] < p && lt[yt[1] * c + yt[0]] && pt(yt[0], yt[1], dt, 1, Rl);
    });
  }), r.suns.forEach((F) => {
    const tt = Math.max(1.5, F.rad / g), E = F.x / g, dt = F.y / v, ot = F.halo / g * 0.85;
    if (gt(E, dt, ot, (rt, yt, ft, xt) => {
      const Ft = Math.sqrt(ft * ft + xt * xt);
      Ft > tt && Ft < ot && !lt[yt * c + rt] && pt(rt, yt, Bt, 0.3 * (1 - (Ft - tt) / (ot - tt)), 0);
    }), S) {
      const rt = Math.floor(w / 500) % 2, yt = Math.max(1, tt * 0.3);
      for (let ft = 0; ft < 8; ft++) if (ft % 2 === rt) for (let xt = tt + 1.2; xt < tt + 1.2 + yt; xt += 0.7) pt(Math.floor(E + Math.cos(ft * Math.PI / 4) * xt), Math.floor(dt + Math.sin(ft * Math.PI / 4) * xt), y.sun, 1, xp);
    }
    gt(E, dt, tt, (rt, yt, ft, xt) => {
      ft * ft + xt * xt <= tt * tt && pt(rt, yt, Ao(((xt / tt + 1) / 2 - 0.6) / 0.4) > Mo(rt, yt) ? y.sunEdge : y.sun, 1, bp);
    });
  }), r.moons.forEach((F) => {
    const tt = Math.max(1.5, F.d * 0.37 / g), E = F.x / g, dt = F.y / v, ot = E + 0.547 * tt, rt = dt - 0.503 * tt, yt = 0.82 * tt;
    gt(E, dt, tt, (ft, xt, Ft, re) => {
      if (Ft * Ft + re * re > tt * tt) return;
      const mt = ft + 0.5 - ot, Ue = xt + 0.5 - rt;
      mt * mt + Ue * Ue > yt * yt && pt(ft, xt, Ao((re + tt) / (2 * tt) * 1.1 - 0.1) > Mo(ft, xt) ? y.moon : it, 1, wp);
    });
  }), r.clouds.forEach((F) => {
    const tt = Math.max(3, F.w / g), E = tt * 0.6665, dt = F.x / g, ot = F.y / v, rt = Ta(F.fill, "#000000", 0.16);
    for (let yt = Math.max(0, Math.floor(ot) - 1); yt <= Math.min(p - 1, ot + E + 1); yt++) for (let ft = Math.max(0, Math.floor(dt) - 1); ft <= Math.min(c - 1, dt + tt + 1); ft++) {
      const xt = (ft + 0.5 - dt) / tt, Ft = (yt + 0.5 - ot) / tt;
      ud(xt, Ft) && pt(ft, yt, !ud(xt, Ft + 1 / tt) || Ao((Ft - 0.42) / 0.25) * 0.8 > Mo(ft, yt) ? rt : F.fill, F.o, vp);
    }
  }), r.fogs.forEach((F) => {
    const tt = Math.floor(F.y / v), E = Math.max(tt, Math.floor((F.y + 6 * at) / v) - 1), dt = Math.floor(F.x / g), ot = Math.floor((F.x + F.w) / g);
    for (let rt = tt; rt <= E; rt++) for (let yt = dt; yt <= ot; yt++) {
      const ft = (yt - dt) / Math.max(1, ot - dt);
      pt(yt, rt, F.c, F.a * (ft < 0.25 ? ft / 0.25 : ft > 0.75 ? (1 - ft) / 0.25 : 1), 0);
    }
  });
  const z = Math.max(2, Math.round(9 / v));
  r.drops.forEach((F) => {
    const tt = F.x / g, E = Math.floor(F.y / v);
    for (let dt = 0; dt < z; dt++) pt(Math.floor(tt - 0.208 * dt * v / g), E + dt, y.rain, F.o, yp);
  });
  const It = Math.max(0, Math.round(4.4 / g / 2.6));
  return r.flakes.forEach((F) => {
    const tt = Math.floor(F.x / g), E = Math.floor(F.y / v);
    pt(tt, E, y.snow, F.o, Wn);
    for (let dt = 1; dt <= It; dt++)
      pt(tt - dt, E, y.snow, F.o, Wn), pt(tt + dt, E, y.snow, F.o, Wn), pt(tt, E - dt, y.snow, F.o, Wn), pt(tt, E + dt, y.snow, F.o, Wn);
  }), r.bolts.forEach((F) => {
    if (g <= 3.5)
      for (let tt = Math.floor(F.y / v); tt <= (F.y + 24) / v; tt++) for (let E = Math.floor(F.x / g); E <= (F.x + 11) / g; E++)
        ah(dh, (E + 0.5) * g - F.x, (tt + 0.5) * v - F.y) && pt(E, tt, y.sun, 1, Ni);
    else {
      const tt = Math.round(F.x / g), E = Math.round(F.y / v);
      ph.forEach((dt, ot) => dt.split("").forEach((rt, yt) => {
        rt === "#" && pt(tt + yt, E + ot, y.sun, 1, Ni);
      }));
    }
  }), { col: X, ids: j };
}
function uh(o, r) {
  const c = r.px, p = Math.max(6, Math.round(r.width / c)), g = Math.max(6, Math.round(r.height / c)), v = r.width / p, w = r.height / g, S = r.ambient ? Math.floor((r.clock || 0) / 100) * 100 : 0, I = (Q) => {
    const et = kp(Q, r);
    return fh(et, Mp(et, { clock: S, ambient: r.ambient, seed: r.seed }), p, g, v, w, S, r.ambient);
  }, y = I(o), _ = r.reveal == null ? 1 : Ao(r.reveal);
  let O = y.col, V = y.ids;
  if (_ < 1) {
    const Q = r.prev ? I(r.prev) : null, et = _ * (p + 12);
    O = new Array(p * g), V = new Uint8Array(p * g);
    for (let at = 0; at < p * g; at++) {
      const X = at % p, j = at / p | 0;
      (r.reduce ? _ : Ao((et - X) / 12)) > Mo(X, j) ? (O[at] = y.col[at], V[at] = y.ids[at]) : Q ? (O[at] = Q.col[at], V[at] = Q.ids[at]) : (O[at] = null, V[at] = 255);
    }
  }
  return oh(O, V, p, g, { oneBit: r.oneBit, ink: r.ink || "#26221e", paper: r.paper || "#fbf9f6", snowInk: !1 });
}
function hh(o, r, c) {
  const p = c.width, g = c.height, v = c.reveal == null ? 1 : Ao(c.reveal), w = (V, Q) => {
    const et = kp(Q, c);
    mh(V, et, Mp(et, c));
  };
  if (o.clearRect(0, 0, p, g), v >= 1) {
    w(o, r);
    return;
  }
  if (c.prev && w(o, c.prev), c.reduce) {
    o.save(), o.globalAlpha = v, w(o, r), o.restore();
    return;
  }
  const S = o.canvas, I = S.__wxOff || (S.__wxOff = document.createElement("canvas"));
  (I.width !== S.width || I.height !== S.height) && (I.width = S.width, I.height = S.height);
  const y = I.getContext("2d");
  y.setTransform(o.getTransform()), y.clearRect(0, 0, p, g), w(y, r);
  const _ = v * (p + 64) - 64, O = y.createLinearGradient(_, 0, _ + 64, 0);
  O.addColorStop(0, "rgba(0,0,0,1)"), O.addColorStop(1, "rgba(0,0,0,0)"), y.globalCompositeOperation = "destination-in", y.fillStyle = O, y.fillRect(0, 0, p, g), y.globalCompositeOperation = "source-over", o.save(), o.setTransform(1, 0, 0, 1, 0, 0), o.drawImage(I, 0, 0), o.restore();
}
function mh(o, r, c) {
  const { W: p, H: g, S: v, C: w, cw: S, yb: I, glowAt: y, soft: _, tw: O, sy: V } = r, Q = o.getTransform().a || 1, et = (z) => {
    o.shadowColor = z ? "rgba(28,18,8,.22)" : "transparent", o.shadowBlur = z ? 4 * Q : 0, o.shadowOffsetY = z ? 1.5 * Q : 0;
  }, at = (z, It) => {
    const F = Bi(z);
    return "rgba(" + F[0] + "," + F[1] + "," + F[2] + "," + Math.max(0, Math.min(1, It)).toFixed(3) + ")";
  }, X = (z, It) => {
    const F = o.createLinearGradient(0, 0, p, 0);
    F.addColorStop(0, z[0]);
    for (let tt = 0; tt < z.length - 1; tt++) {
      const E = (tt + It) * S, dt = (E - O / 2) / p, ot = (E + O / 2) / p;
      dt > 0 && dt < 1 && F.addColorStop(dt, z[tt]), ot > 0 && ot < 1 && F.addColorStop(ot, z[tt + 1]);
    }
    return F.addColorStop(1, z[z.length - 1]), F;
  }, j = Math.max(24, Math.ceil(p / 4)), lt = (z, It) => {
    o.beginPath();
    for (let F = 0; F <= j; F++) {
      const tt = p * F / j, E = z == null ? 0 : I(tt) + z;
      F ? o.lineTo(tt, E) : o.moveTo(tt, E);
    }
    for (let F = j; F >= 0; F--) {
      const tt = p * F / j;
      o.lineTo(tt, I(tt) + It);
    }
    o.closePath(), o.fill();
  };
  o.save(), o.fillStyle = X(v.filter((z) => !z.night).map((z) => z.sky), 0.75), o.fillRect(0, 0, p, g);
  const pt = o.createLinearGradient(0, 0, p, 0);
  for (let z = 0; z <= 64; z++) {
    const It = y(p * z / 64);
    pt.addColorStop(z / 64, at(It.c, Math.min(1, It.a)));
  }
  o.fillStyle = pt;
  for (let z = 0; z < 8; z++)
    o.globalAlpha = 1 - z / 8, lt(z * 2 * V, (z + 1) * 2 * V);
  o.fillStyle = X(v.filter((z) => z.night).map((z) => z.sky), 1.25);
  const gt = Math.max(0.5, _), nt = 6;
  o.globalAlpha = 1, lt(null, -gt);
  for (let z = 0; z < nt; z++)
    o.globalAlpha = 1 - (z + 0.5) / nt, lt(-gt + 2 * gt * z / nt, -gt + 2 * gt * (z + 1) / nt);
  o.globalAlpha = 1;
  const J = new Path2D(lh), Z = new Path2D(sh), P = new Path2D(ih), vt = new Path2D(ch);
  o.fillStyle = w.star, c.stars.forEach((z) => {
    o.globalAlpha = z.o, z.big ? (o.save(), o.translate(z.x, z.y), o.scale(z.size, z.size), o.fill(J), o.restore()) : (o.beginPath(), o.arc(z.x, z.y, 0.8, 0, Math.PI * 2), o.fill());
  }), o.globalAlpha = 1;
  const Bt = Ta(w.sun, "#ffffff", 0.55);
  c.suns.forEach((z) => {
    const It = o.createRadialGradient(z.x, z.y, 0, z.x, z.y, z.halo);
    It.addColorStop(0, at(Bt, 0.42)), It.addColorStop(0.7, at(Bt, 0)), o.fillStyle = It, o.beginPath(), o.arc(z.x, z.y, z.halo, 0, Math.PI * 2), o.fill();
    const F = o.createLinearGradient(0, z.y - z.rad, 0, z.y + z.rad);
    F.addColorStop(0.6, w.sun), F.addColorStop(1, w.sunEdge), o.fillStyle = F, et(!0), o.beginPath(), o.arc(z.x, z.y, z.rad, 0, Math.PI * 2), o.fill(), et(!1);
  });
  const it = Ta(w.moon, "#ffffff", 0.6);
  c.moons.forEach((z) => {
    o.save(), o.translate(z.x - z.d / 2, z.y - z.d / 2), o.scale(z.d / 46, z.d / 46);
    const It = o.createLinearGradient(0, 6, 0, 40);
    It.addColorStop(0, it), It.addColorStop(1, w.moon), o.fillStyle = It, et(!0), o.fill(Z), et(!1), o.restore();
  }), c.clouds.forEach((z) => {
    o.save(), o.globalAlpha = z.o, o.translate(z.x, z.y), o.scale(z.w / 46, z.h / 30.66), o.translate(-4, -9.67), o.fillStyle = z.fill, et(!0), o.fill(P), et(!1), o.restore();
  }), c.fogs.forEach((z) => {
    const It = o.createLinearGradient(z.x, 0, z.x + z.w, 0);
    It.addColorStop(0, at(z.c, 0)), It.addColorStop(0.25, at(z.c, z.a)), It.addColorStop(0.75, at(z.c, z.a)), It.addColorStop(1, at(z.c, 0)), o.fillStyle = It, o.fillRect(z.x, z.y, z.w, 6 * V);
  }), o.fillStyle = w.rain, c.drops.forEach((z) => {
    o.save(), o.globalAlpha = z.o, o.translate(z.x, z.y), o.rotate(12 * Math.PI / 180), o.fillRect(-1.5, 0, 3, 9), o.restore();
  }), o.fillStyle = w.snow, c.flakes.forEach((z) => {
    o.globalAlpha = z.o, o.beginPath(), o.arc(z.x, z.y, 2.2, 0, Math.PI * 2), o.fill();
  }), o.fillStyle = w.sun, c.bolts.forEach((z) => {
    o.save(), o.globalAlpha = z.o, o.translate(z.x, z.y), o.fill(vt), o.restore();
  }), o.restore();
}
const gh = (o) => o === "sunny" ? "clear" : o === "clear-night" ? "night" : o === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(o) ? "rain" : ["snowy", "snowy-rainy"].includes(o) ? "snow" : "cloudy", Nn = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, yi = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, pl = (o, r) => '<path class="' + r + '" d="' + o + '"/>', bh = (o, r) => ' style="animation-delay:-' + Math.round(o * 137 % r) + 'ms"', Aa = (o, r, c, p) => {
  const g = c * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (p < 1 ? ' opacity="' + p + '"' : "") + bh(o, 2400) + ' d="M' + o + " " + (r - c) + "L" + (o + g) + " " + (r - g) + "L" + (o + c) + " " + r + "L" + (o + g) + " " + (r + g) + "L" + o + " " + (r + c) + "L" + (o - g) + " " + (r + g) + "L" + (o - c) + " " + r + "L" + (o - g) + " " + (r - g) + 'Z"/>';
}, hd = ([o, r, c], p) => '<path class="wbMoonPath" d="' + o + '" fill="url(#' + p + ')"/><defs><linearGradient id="' + p + '" x1="0" y1="' + r + '" x2="0" y2="' + c + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', wh = (o, r) => r ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + o + ')"/><defs><linearGradient id="' + o + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + o + ')"/><defs><linearGradient id="' + o + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', vh = (o) => (o ? ["29.35", "43.04", "56.74"].map((r, c) => '<g class="wbDrop" style="animation-delay:-' + c * 317 + 'ms"><rect class="wbAccent" x="' + r + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + r + ' 60.65)"/></g>') : [19, 26, 33].map((r, c) => '<g class="wbDrop" style="animation-delay:-' + c * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + r + ' 38)"/></g>')).join(""), yh = (o) => (o ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([r, c], p) => '<circle class="wbFlake" style="animation-delay:-' + p * 640 + 'ms" cx="' + r + '" cy="' + c + '" r="' + (o ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function xh(o, r, c, p) {
  const g = (v) => '<g filter="url(#' + p + '-sh)">' + v + "</g>";
  return o === "clear" ? r ? g(hd(c ? yi.l : yi.s, p)) + (c ? Aa(70, 20, 5.83, 1) + Aa(78.33, 41.67, 3.75, 0.8) + Aa(60, 71.67, 3.33, 0.6) : Aa(42, 12, 3.5, 1) + Aa(47, 25, 2.25, 0.8) + Aa(36, 43, 2, 0.6)) : g(wh(p, c)) : o === "partly" ? g(r ? hd(c ? yi.lp : yi.sp, p) : c ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + g(pl(c ? Nn.lp : Nn.sp, r ? "wbCloudLight" : "wbBright")) + (r ? c ? Aa(73.33, 16.67, 4.17, 0.9) : Aa(44, 10, 2.5, 0.9) : "") : o === "cloudy" ? g(pl(c ? Nn.lc : Nn.s, r ? "wbCloudLight" : "wbBright")) + (r ? c ? Aa(15, 15, 3.75, 0.8) + Aa(76.67, 13.33, 2.92, 0.6) : Aa(9, 9, 2.25, 0.8) + Aa(46, 8, 1.75, 0.6) : "") : g(pl(c ? Nn.lr : Nn.s, "wbCloudLight")) + (o === "rain" ? vh(c) : yh(c));
}
const kh = (o, r) => '<defs><filter id="' + o + '-sh" x="-25%" y="-25%" width="150%" height="160%"><feDropShadow dx="0" dy="' + (r ? 1.6 : 1) + '" stdDeviation="' + (r ? 1.8 : 1.1) + '" flood-color="#1c1208" flood-opacity=".22"/></filter></defs>';
function Mh(o, r, c, p) {
  let g = gh(o);
  const v = g === "night" || !!c;
  g === "night" && (g = "clear");
  const w = r ? 90 : 54;
  return { k: g, night: v, svg: '<svg viewBox="0 0 ' + w + " " + w + '">' + kh(p, r) + xh(g, v, r, p) + "</svg>" };
}
const Sh = [
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
], xi = (o, r) => (Sh[r % 8 * 8 + o % 8] + 0.5) / 64, qa = (o) => [parseInt(o.slice(1, 3), 16), parseInt(o.slice(3, 5), 16), parseInt(o.slice(5, 7), 16)], Ge = (o, r, c) => [Math.round(o[0] + (r[0] - o[0]) * c), Math.round(o[1] + (r[1] - o[1]) * c), Math.round(o[2] + (r[2] - o[2]) * c)], xr = (o) => o < 0 ? 0 : o > 1 ? 1 : o, md = (o, r) => {
  let c = o * 374761393 + r * 668265263 ^ 1540483477;
  return c = Math.imul(c ^ c >>> 13, 1274126177), ((c ^ c >>> 16) >>> 0) / 4294967296;
}, gn = [255, 255, 255], ta = qa("#26221e"), gd = qa("#0288d1"), Ah = qa("#01579b"), fl = qa(La.cloudDay), ul = qa(La.cloudNight), ki = qa(La.dusk), hl = qa(La.sunEdge), Ch = qa(La.sun), _h = 10, bd = 0.3, Co = 56, Sp = 21;
function Th(o) {
  const r = Array.from({ length: Sp }, () => new Array(Co).fill(void 0)), c = (w, S, I) => {
    r[S][w] = I;
  }, p = Ge(ki, ta, 0.35), g = Ge(ta, gn, 0.22);
  for (let w = 0; w <= 6; w++) {
    const S = w < 2 ? Co - 2 : Co - 1;
    for (let I = 6 - w; I <= S; I++) c(I, w, w < 2 ? p : w === 6 ? g : ta);
  }
  const v = [ki, hl, ul, qa(La.skyRainDay), Ge(ki, ta, 0.2), Ge(o, ta, 0.35)];
  [2, 3, 2, 3, 3].forEach((w, S) => {
    const I = 9 + S * 6;
    for (let y = 0; y < w; y++) {
      const _ = v[(S * 2 + y * 3) % v.length];
      for (let O = I; O < I + 5; O++)
        c(O, 7 + y * 2, Ge(_, ta, 0.12)), c(O, 8 + y * 2, y === w - 1 ? Ge(_, gn, 0.3) : _);
      c(I + 5, 7 + y * 2, ta), c(I + 5, 8 + y * 2, ta);
    }
  });
  for (let w = 7; w <= 12; w++) c(5, w, ta);
  c(5, 13, hl);
  for (let w = 7; w <= 14; w++) for (let S = 42; S <= 51; S++) c(S, w, S === 51 ? ul : fl);
  for (let w = 43; w <= 50; w += 2)
    c(w, 12, ta), c(w, 9, Ge(ta, fl, 0.4));
  for (let w = 40; w <= 53; w++) c(w, 14, w === 40 || w === 53 ? ul : fl);
  for (let w = 15; w <= 18; w++) for (let S = 46; S <= 49; S++) c(S, w, w === 18 ? ta : w === 16 ? hl : ki);
  for (let w = 15; w <= 19; w++) c(44, w, ta);
  return c(44, 20, Ch), r;
}
function Lh(o, r, c, p) {
  const g = Math.max(1, Math.round(o)), v = Math.max(1, Math.round(r)), w = new Uint8ClampedArray(g * v * 4), S = qa(p.skyClearDay), I = qa(p.skyFogDay), y = Th(S), _ = Math.round(v * 0.55), O = xr(1 - Math.log(c / bd) / Math.log(_h / bd)), V = Ge(S, I, O), Q = (j) => xr((j - 0.1) / 0.9), et = xr((1 - Math.exp(-2 / c) - 0.2) / 0.8), at = Math.round(g / 2 - Co / 2), X = _ + 3;
  for (let j = 0; j < v; j++) {
    const lt = X - 1 - j, pt = j - X;
    for (let gt = 0; gt < g; gt++) {
      const nt = gt - at;
      let J, Z;
      const P = lt >= 0 && lt < Sp && nt >= 0 && nt < Co ? y[lt][nt] : void 0;
      if (P)
        J = P, Z = et;
      else if (lt >= 0 && lt <= 1 && nt >= 4 - lt && nt <= 5 - lt)
        J = Ge(gn, gd, 0.15), Z = et;
      else if (j < _) {
        const it = xr(((j + 0.5) / _ - 0.15) / 0.85) * 3, z = Math.min(3, Math.floor(it + xi(gt + 2, j + 5)));
        J = Ge(V, gn, z * 0.1), Z = O * 0.95;
      } else {
        const it = (j - _ + 0.5) / (v - _), z = Math.min(1.5, 6e-3 / (it * it)), It = xr(it * 1.4) * 3, F = Math.min(3, Math.floor(It + xi(gt + 1, j + 6)));
        J = Ge(gd, Ah, F / 3);
        const tt = 1 + Math.round(it * 7), E = Math.floor(gt / (tt * 3)), dt = 0.06 + 0.16 * it, ot = gt % (tt * 3) < tt;
        ot && md(E, j) < dt ? J = Ge(J, gn, 0.18 + 0.1 * (1 - it)) : ot && it > 0.5 && md(E, j - 1) < dt && (J = Ge(J, ta, 0.12)), Z = Q(1 - Math.exp(-z / c)), pt === 0 && nt >= 3 && nt <= 8 ? (J = Ge(J, gn, nt < 6 ? 0.8 : 0.45), Z = et) : pt >= 0 && pt <= 2 && nt >= Co && nt < Co + 40 ? ((1 - (nt - Co) / 40) * (pt === 1 ? 0.9 : 0.5) > xi(gt, j + 3) && (J = Ge(J, gn, 0.5)), Z = et) : pt === 0 && nt >= 6 && nt < Co && (J = Ge(J, ta, nt % 2 === 0 ? 0.35 : 0.2), Z = et);
      }
      const vt = Z > xi(gt, j) ? I : J, Bt = (j * g + gt) * 4;
      w[Bt] = vt[0], w[Bt + 1] = vt[1], w[Bt + 2] = vt[2], w[Bt + 3] = 255;
    }
  }
  return { data: w, w: g, h: v };
}
const Dh = {
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
}, Eh = 1.6;
function Bh(o, r) {
  const c = o ? Dh[String(o).toUpperCase()] : void 0;
  if (!c || !(r > 0)) return;
  const p = (v) => Math.abs(Math.log(v[2] / r)), g = c.reduce((v, w) => p(w) < p(v) ? w : v);
  return p(g) <= Math.log(Eh) ? { from: g[0], to: g[1], km: g[2] } : void 0;
}
const Rh = (o, r) => r === "mi" ? o * 1.609344 : r === "m" ? o / 1e3 : r === "ft" ? o * 3048e-7 : r === "yd" ? o * 9144e-7 : o, Ph = (o) => o < 1 ? "very_poor" : o < 4 ? "poor" : o < 10 ? "moderate" : o < 20 ? "good" : o < 40 ? "very_good" : "excellent", xe = {
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
}, ke = { standard: "cubic-bezier(.2,0,0,1)", land: "cubic-bezier(.34,1.46,.64,1)", spring: "cubic-bezier(.2,1.2,.4,1)", soft: "cubic-bezier(.4,0,.2,1)", exit: "cubic-bezier(.4,0,1,1)" }, qe = () => {
  var o;
  return !!((o = window.matchMedia) != null && o.call(window, "(prefers-reduced-motion: reduce)").matches);
};
function Hh() {
  const { pivot: o, slider: r, iconbtn: c, warp: p, outline: g } = xe;
  return [
    ["--pv-persp", o.persp + "px"],
    ["--pv-shine", o.shine / 100],
    ["--pv-size", o.size + "%"],
    ["--pv-ret", o.ret + "ms"],
    ["--pv-ease", ke[o.ease]],
    ["--ab-blur", r.glow + "px"],
    ["--ab-spread", r.spread + "px"],
    ["--ab-str", r.strength + "%"],
    ["--ab-blur2", r.glow + r.hold + "px"],
    ["--ab-spread2", r.spread + r.hold / 4 + "px"],
    ["--ab-str2", r.holdStrength + "%"],
    ["--ab-grow", "scaleY(" + (1 + (r.grow / 100 - 1) * 3) + ")"],
    ["--ab-in", r.ein + "ms"],
    ["--ab-out", r.eout + "ms"],
    ["--ab-ease", ke[r.ease]],
    ["--ih-s", c.scale / 100],
    ["--ih-p", c.press / 100],
    ["--ih-dur", c.dur + "ms"],
    ["--ih-ease", ke[c.ease]],
    ["--ih-tint", "8%"],
    ["--wc-dur", p.cdur + "ms"],
    ["--wc-delay", p.cdelay + "ms"],
    ["--wc-ease", ke[p.ease]],
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
  ].map(([v, w]) => v + ":" + w).join(";");
}
const ml = ":is(button.primary,button.pill,.hcBtn,.wbRangeBtn,.activityRow.tap,.hcRow,a.hcRow)", Oh = "#homeView .tfAreaPanel", Nh = 300, Ri = (o) => Math.min(1, Nh / Math.max(1, o)), gl = (o, r) => 1 + (r / 100 - 1) * Ri(o.offsetWidth);
function Ih(o, r) {
  r.style.cssText += ";" + Hh();
  let c = null;
  const p = (_) => {
    _.classList.remove("mvMoving", "mvLit"), _.style.setProperty("--rx", "0deg"), _.style.setProperty("--ry", "0deg"), _.style.setProperty("--sc", 1), _._down = !1;
  };
  o.addEventListener("pointermove", (_) => {
    var j, lt;
    const O = _.pointerType === "touch" || qe() ? null : (lt = (j = _.target).closest) == null ? void 0 : lt.call(j, ml);
    if (c && c !== O && p(c), c = O, !O || O.disabled) return;
    const V = xe.pivot, Q = O.getBoundingClientRect(), et = (_.clientX - Q.left) / Q.width, at = (_.clientY - Q.top) / Q.height, X = 1;
    O.classList.add("mvPv", "mvMoving", "mvLit"), O.style.setProperty("--pv-persp", V.persp / Ri(Math.max(O.offsetWidth, O.offsetHeight)) + "px"), O.style.setProperty("--ry", (X * (et - 0.5) * 2 * V.tilt * Ri(O.offsetWidth)).toFixed(3) + "deg"), O.style.setProperty("--rx", (X * -(at - 0.5) * 2 * V.tilt * Ri(O.offsetHeight)).toFixed(3) + "deg"), O.style.setProperty("--mx", (et * 100).toFixed(1) + "%"), O.style.setProperty("--my", (at * 100).toFixed(1) + "%"), O._down || O.style.setProperty("--sc", gl(O, V.lift));
  }, { passive: !0 }), o.addEventListener("pointerout", (_) => {
    c && !c.contains(_.relatedTarget) && (p(c), c = null);
  }), o.addEventListener("pointerdown", (_) => {
    var V, Q;
    const O = qe() ? null : (Q = (V = _.target).closest) == null ? void 0 : Q.call(V, ml);
    O && (O._down = !0, O.classList.add("mvPv"), O.classList.remove("mvMoving"), O.style.setProperty("--sc", gl(O, xe.pivot.press)));
  }), o.addEventListener("pointerup", (_) => {
    var V, Q;
    const O = (Q = (V = _.target).closest) == null ? void 0 : Q.call(V, ml);
    O && (O._down = !1, O.style.setProperty("--sc", _.pointerType === "touch" ? 1 : gl(O, xe.pivot.lift)));
  });
  let g = null;
  o.addEventListener("pointerover", (_) => {
    var O, V, Q;
    _.pointerType !== "touch" && ((Q = (V = (O = _.target).closest) == null ? void 0 : V.call(O, ".tfBar")) == null || Q.classList.add("mvHover"));
  }), o.addEventListener("pointerout", (_) => {
    var V, Q;
    const O = (Q = (V = _.target).closest) == null ? void 0 : Q.call(V, ".tfBar");
    O && !O.contains(_.relatedTarget) && O !== g && O.classList.remove("mvHover");
  }), o.addEventListener("pointerdown", (_) => {
    var V, Q;
    const O = (Q = (V = _.target).closest) == null ? void 0 : Q.call(V, ".tfBar");
    O && (g = O, O.classList.add("mvHold"));
  });
  const v = (_) => {
    if (!g) return;
    g.classList.remove("mvHold");
    const O = g.getBoundingClientRect();
    (_.pointerType === "touch" || _.clientX < O.left || _.clientX > O.right || _.clientY < O.top || _.clientY > O.bottom) && g.classList.remove("mvHover"), g = null;
  };
  window.addEventListener("pointerup", v, !0), window.addEventListener("pointercancel", v, !0), o.addEventListener("focusin", (_) => {
    var O, V;
    (V = (O = _.target).matches) != null && V.call(O, ".tfBar:focus-visible") && _.target.classList.add("mvHover");
  }), o.addEventListener("focusout", (_) => {
    var O;
    (O = _.target.classList) == null || O.remove("mvHover", "mvHold");
  }), o.addEventListener("keydown", (_) => {
    var V, Q;
    const O = (Q = (V = _.target).closest) == null ? void 0 : Q.call(V, ".tfBar");
    !O || !["ArrowRight", "ArrowUp", "ArrowLeft", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(_.key) || (O.classList.add("mvHold"), clearTimeout(O._k), O._k = setTimeout(() => O.classList.remove("mvHold"), 350));
  }), o.addEventListener("click", (_) => {
    var V, Q;
    const O = (Q = (V = _.target).closest) == null ? void 0 : Q.call(V, "button.tfIcon[data-act]");
    O && Fh(O);
  });
  let w = null;
  const S = (_, O, V) => {
    _.querySelector(":scope>.mvEdge") || _.insertAdjacentHTML("afterbegin", '<span class="mvEdgeFill" aria-hidden="true"></span><span class="mvEdge" aria-hidden="true"><i></i></span>');
    const Q = _.getBoundingClientRect(), et = Q.width / 2, at = Q.height / 2, X = O.clientX - Q.left - et, j = O.clientY - Q.top - at, lt = X ? et / Math.abs(X) : 1 / 0, pt = j ? at / Math.abs(j) : 1 / 0, gt = Math.min(Math.max(1 / Math.min(lt, pt), 0), 1);
    let nt = Math.atan2(j, X) * 180 / Math.PI + 90;
    nt < 0 && (nt += 360);
    const J = V ? 100 : gt * 100;
    _.style.setProperty("--edge-proximity", J.toFixed(3)), _.style.setProperty("--cursor-angle", nt.toFixed(3) + "deg"), _.classList.toggle("mvLitEdge", V || J >= xe.outline.lightAt);
  }, I = (_) => {
    _.classList.remove("mvLitEdge"), _.style.setProperty("--edge-proximity", "0"), _._down = !1;
  }, y = (_) => {
    var V;
    const O = (V = _.closest) == null ? void 0 : V.call(_, Oh);
    return O && !r.classList.contains("tfEditing") ? O : null;
  };
  o.addEventListener("pointermove", (_) => {
    if (_.pointerType === "touch") return;
    const O = y(_.target);
    w && w !== O && I(w), w = O, O && !O._down && S(O, _, !1);
  }, { passive: !0 }), o.addEventListener("pointerout", (_) => {
    w && !w.contains(_.relatedTarget) && (I(w), w = null);
  }), o.addEventListener("pointerdown", (_) => {
    const O = y(_.target);
    O && xe.outline.press && (O._down = !0, S(O, _, !0));
  }), o.addEventListener("pointerup", (_) => {
    const O = y(_.target);
    O && (O._down = !1, _.pointerType === "touch" ? I(O) : S(O, _, !1));
  }), new MutationObserver((_) => {
    var O;
    for (const V of _) {
      const Q = V.target;
      if (V.type === "attributes") {
        (O = Q.classList) != null && O.contains("tfMoreBackdrop") && !Q.hidden && V.oldValue !== null && wd(Q);
        continue;
      }
      V.addedNodes.forEach((et) => {
        et.nodeType === 1 && et.classList.contains("tfMoreBackdrop") && !et.hidden && wd(et);
      });
    }
  }).observe(r, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["hidden"], attributeOldValue: !0 });
}
const Ap = (o) => o.closest("[data-k],.tfMore,.tfMorePair") || o.getRootNode();
function Cp(o, r) {
  const c = [];
  for (let p = o; p && p !== r && p.parentNode; p = p.parentNode) c.unshift([...p.parentNode.children].indexOf(p));
  return c;
}
const _p = (o, r) => r.reduce((c, p) => c == null ? void 0 : c.children[p], o);
function Fh(o) {
  var Q;
  if (qe() || o._warp) return;
  const r = xe.warp, c = r.amount / 100, p = o.firstElementChild;
  if (!p) return;
  const g = { squash: { scale: 1 + 0.35 * c + " " + (1 - 0.55 * c) }, pinch: { scale: String(1 - 0.5 * c) }, twist: { rotate: 140 * c + "deg", scale: String(1 - 0.35 * c) }, flip: { rotate: "y 90deg" } }[r.style], v = "blur(" + 2 * c + "px)", w = o.getRootNode(), S = Ap(o), I = (Q = S.dataset) == null ? void 0 : Q.k, y = Cp(o, S), _ = o.getAttribute("aria-pressed") + "|" + o.dataset.act;
  o._warp = 1;
  const O = p.animate([{ scale: "1", rotate: "none", filter: "blur(0px)" }, { ...g, filter: v }], { duration: r.win, easing: ke.exit, fill: "forwards" }), V = performance.now();
  O.finished.then(() => {
    const et = () => {
      var gt, nt;
      const at = I ? S.isConnected ? S : (gt = w.querySelector) == null ? void 0 : gt.call(w, '[data-k="' + CSS.escape(I) + '"]') : S, X = at && _p(at, y);
      if (X === o && o.getAttribute("aria-pressed") + "|" + o.dataset.act === _ && performance.now() - V < 420) {
        requestAnimationFrame(et);
        return;
      }
      (((nt = X == null ? void 0 : X.matches) != null && nt.call(X, "button.tfIcon") ? X : o).firstElementChild || p).animate([{ ...g, filter: v }, { scale: "1", rotate: "none", filter: "blur(0px)" }], { duration: r.wout, easing: ke[r.ease] }), O.cancel(), o._warp = 0;
    };
    et();
  });
}
const Tp = (o) => {
  let r = "M" + o[0][0].toFixed(1) + " " + o[0][1].toFixed(1);
  for (let c = 0; c < o.length - 1; c++) {
    const p = o[c - 1] || o[c], g = o[c], v = o[c + 1], w = o[c + 2] || v, S = [g[0] + (v[0] - p[0]) / 6, g[1] + (v[1] - p[1]) / 6], I = [v[0] - (w[0] - g[0]) / 6, v[1] - (w[1] - g[1]) / 6];
    r += "C" + S.map((y) => y.toFixed(1)).join(" ") + " " + I.map((y) => y.toFixed(1)).join(" ") + " " + v.map((y) => y.toFixed(1)).join(" ");
  }
  return r;
}, Lp = (o, r, c, p = "mvGrid") => [0, 1, 2].map((g) => {
  const v = (r + (c - r) * g / 2).toFixed(1);
  return '<line class="' + p + '" x1="0" x2="' + o + '" y1="' + v + '" y2="' + v + '"/>';
}).join("");
function Dp(o, r = o.querySelector(".mvLine"), c = o.querySelectorAll(".mvArea,.mvDot")) {
  if (qe() || !(r != null && r.getTotalLength)) return;
  const p = xe.graphs, g = r.getTotalLength();
  r.animate([{ strokeDasharray: g, strokeDashoffset: g }, { strokeDasharray: g, strokeDashoffset: 0 }], { duration: p.draw, easing: ke.standard }), [...c].forEach((v, w) => v.animate([{ opacity: 0 }, { opacity: 1 }], { duration: p.draw * 0.6, delay: p.draw * 0.3 + w * 12, easing: ke.standard, fill: "backwards" }));
}
function Pi(o, r, c, p, g) {
  if (o.getAnimations().forEach((_) => _.cancel()), o.style.left = p + "px", o.style.width = g + "px", qe() || r === p && c === g) return;
  const v = xe.tabs, w = v.stretch / 100, S = (_, O) => ({ left: _ + "px", width: O + "px" }), y = p > r ? S(r + (p - r) * (0.15 * (1 - w)), p + g - (r + (p - r) * (0.15 * (1 - w)))) : S(p, r + c - p - (r - p) * (0.15 * (1 - w)));
  o.animate([S(r, c), { offset: 0.5, ...y }, S(p, g)], { duration: v.dur, easing: ke.standard });
}
function qh(o) {
  const r = ":is(.themeChoice,.wbSegments,.tfHeightTabs,.hcSeg,.tfSeg)", c = (g) => g.querySelector(':scope>[aria-pressed="true"],:scope>[aria-checked="true"],:scope>.active'), p = (g, v) => v ? [...g.children].indexOf(v) : -1;
  o.addEventListener("click", (g) => {
    var lt, pt, gt;
    const v = (pt = (lt = g.target).closest) == null ? void 0 : pt.call(lt, r + ">button"), w = v == null ? void 0 : v.parentElement;
    if (!w || qe() || v.disabled) return;
    const S = c(w);
    if (!S || S === v) return;
    const I = p(w, S), y = w.getBoundingClientRect(), _ = S.getBoundingClientRect(), O = getComputedStyle(S).borderRadius, V = w.getRootNode(), Q = Ap(w), et = (gt = Q.dataset) == null ? void 0 : gt.k, at = Cp(w, Q), X = performance.now(), j = () => {
      var z, It, F;
      const nt = et && !Q.isConnected ? (z = V.querySelector) == null ? void 0 : z.call(V, '[data-k="' + CSS.escape(et) + '"]') : Q, J = nt && _p(nt, at), Z = (It = J == null ? void 0 : J.matches) != null && It.call(J, r) ? c(J) : null;
      if (!Z || p(J, Z) === I) {
        performance.now() - X < 700 && requestAnimationFrame(j);
        return;
      }
      const P = J.getBoundingClientRect(), vt = Z.getBoundingClientRect(), Bt = getComputedStyle(Z);
      (F = J.querySelector(":scope>.mvSegInd")) == null || F.remove();
      const it = document.createElement("span");
      it.className = "mvSegInd", it.style.cssText = "top:" + (vt.top - P.top - J.clientTop) + "px;height:" + vt.height + "px;border-radius:" + O + ";background:" + Bt.backgroundColor + ";box-shadow:" + Bt.boxShadow, getComputedStyle(J).position === "static" && (J.style.position = "relative"), J.prepend(it), J.classList.add("mvSegMoving"), Pi(it, _.left - y.left - J.clientLeft, _.width, vt.left - P.left - J.clientLeft, vt.width), clearTimeout(J._seg), J._seg = setTimeout(() => {
        it.remove(), J.classList.remove("mvSegMoving");
      }, xe.tabs.dur + 20);
    };
    requestAnimationFrame(j);
  }, !0);
}
const Ep = (o) => getComputedStyle(o).placeItems.startsWith("end");
function wd(o) {
  const r = o.firstElementChild;
  if (qe() || !r || r.classList.contains("still")) return;
  const c = xe.dialog;
  o.animate([{ opacity: 0, backdropFilter: "blur(0px)" }, { opacity: 1, backdropFilter: "blur(" + c.blur + "px)" }], { duration: c.open, easing: ke.standard }), r.style.animation = "none", r.animate(Ep(o) ? [{ transform: "translateY(100%)" }, { transform: "none" }] : [{ opacity: 0, transform: "scale(" + c.from / 100 + ")" }, { opacity: 1, transform: "none" }], { duration: c.open, easing: ke[c.ease] }), [...(r.classList.contains("tfMorePair") && r.querySelector(".tfMore") || r).children].forEach((g, v) => g.animate([{ opacity: 0 }, { opacity: 1 }], { duration: c.open * 0.6, delay: c.open * 0.35 + v * 40, easing: ke.standard, fill: "backwards" }));
}
function Wh(o, r) {
  const c = o == null ? void 0 : o.firstElementChild;
  if (qe() || !c || o.hidden || o._closing) {
    r();
    return;
  }
  const p = xe.dialog;
  o._closing = !0, o.style.pointerEvents = "none", o.animate([{ opacity: 1, backdropFilter: "blur(" + p.blur + "px)" }, { opacity: 0, backdropFilter: "blur(0px)" }], { duration: p.close, easing: ke.exit, fill: "forwards" });
  const g = c.animate(Ep(o) ? [{ transform: "none" }, { transform: "translateY(100%)" }] : [{ opacity: 1, transform: "none" }, { opacity: 0, transform: "scale(" + p.from / 100 + ")" }], { duration: p.close, easing: ke.exit, fill: "forwards" });
  let v = !1;
  const w = () => {
    v || (v = !0, o._closing = !1, o.style.pointerEvents = "", o.getAnimations().forEach((S) => S.cancel()), c.getAnimations().forEach((S) => S.cancel()), r());
  };
  g.finished.then(w, w), setTimeout(w, p.close + 80);
}
const jh = '<span class="mvTick" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M20 6L9 17L4 12" pathLength="1"/></svg></span>';
function Vh(o, r) {
  o.replaceChildren(), o.insertAdjacentHTML("afterbegin", jh), o.appendChild(Object.assign(document.createElement("span"), { className: "mvToastText", textContent: r }));
}
function zh(o) {
  if (qe()) return;
  const r = xe.confirm;
  o.animate([{ opacity: 0, translate: "0 18px" }, { opacity: 1, translate: "0 0" }], { duration: r.dur, easing: ke.spring });
  const c = o.querySelector(".mvTick path");
  c && r.draw && c.animate([{ strokeDasharray: "1", strokeDashoffset: "1" }, { strokeDasharray: "1", strokeDashoffset: "0" }], { duration: 420, delay: r.dur * 0.5, easing: ke.standard, fill: "backwards" });
}
const bl = (o, r, c, p, g = 1) => (o + r * c * g) * Math.pow(p, g);
function wl(o) {
  const r = xe.drag.squash / 100;
  !o || qe() || !r || o.animate([{ transform: "scale(" + (1 + r * 0.4) + "," + (1 - r) + ")" }, { transform: "scale(" + (1 - r * 0.1) + "," + (1 + r * 0.24) + ")" }, { transform: "none" }], { duration: 340, easing: "ease-out" });
}
function vd(o) {
  if (!o || qe()) return;
  const r = xe.expand;
  [...o.children].slice(1).forEach((c, p) => c.animate([{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "none" }], { duration: 260, delay: r.delay + p * r.stagger, easing: "cubic-bezier(.2,0,0,1)", fill: "backwards" }));
}
const De = 6e4, te = 36e5, la = 864e5, Cr = 1440, Gh = 6, Uh = 10 * De, yd = 3, Yh = 3, Mi = { day: [6, 22], waking: [7, 23], all: [0, 24] }, Zh = [[-5, [91, 141, 239]], [5, [79, 195, 230]], [12, [95, 211, 160]], [18, [255, 211, 77]], [24, [255, 159, 67]], [30, [255, 91, 79]]], Kh = "M6.5 18.5h11a4 4 0 0 0 .4-7.98 5.5 5.5 0 0 0-10.6-1.1A4.5 4.5 0 0 0 6.5 18.5Z", xd = (o, r, c, p) => '<circle cx="' + o + '" cy="' + r + '" r="' + c + '"/><path d="' + [0, 45, 90, 135, 180, 225, 270, 315].map((g) => {
  const v = Math.cos(g * Math.PI / 180), w = Math.sin(g * Math.PI / 180), S = c + 2, I = c + 2 + p;
  return "M" + (o + v * S).toFixed(2) + " " + (r + w * S).toFixed(2) + "L" + (o + v * I).toFixed(2) + " " + (r + w * I).toFixed(2);
}).join("") + '"/>', vo = (o) => '<path d="' + Kh + '"' + (o ? ' transform="' + o + '"' : "") + "/>", yo = (o) => '<path d="' + o + '"/>', kd = '<path d="M19.5 14.5A7.5 7.5 0 1 1 9.5 4.5a6 6 0 0 0 10 10Z"/>';
function Xh(o, r) {
  const c = "translate(0,-3)";
  switch (o) {
    case "sunny":
      return r ? kd : xd(12, 12, 4, 2.5);
    case "clear-night":
      return kd;
    case "partlycloudy":
      return (r ? '<path d="M11.5 9.5A4.5 4.5 0 1 1 6 4a3.6 3.6 0 0 0 5.5 5.5Z"/>' : xd(7.5, 7.5, 2.6, 1.4)) + vo("translate(3.6,3) scale(.85)");
    case "cloudy":
      return vo();
    case "fog":
      return yo("M4 8.5h16M3 12.5h18M5 16.5h14");
    case "rainy":
      return vo(c) + yo("M8.5 18.5 7.5 21M12.5 18.5l-1 2.5M16.5 18.5l-1 2.5");
    case "pouring":
      return vo(c) + yo("M7.5 18.5 6 22M11 18.5 9.5 22M14.5 18.5 13 22M18 18.5 16.5 22");
    case "snowy":
      return vo(c) + yo("M8 20h.01M12 21.5h.01M16 20h.01");
    case "snowy-rainy":
      return vo(c) + yo("M8.5 18.5 7.5 21M12 21h.01M16.5 18.5l-1 2.5");
    case "hail":
      return vo(c) + '<circle cx="8" cy="20.5" r="1"/><circle cx="12" cy="21.5" r="1"/><circle cx="16" cy="20.5" r="1"/>';
    case "lightning":
      return vo(c) + yo("M12.5 16 10.5 19.5h3l-2 3");
    case "lightning-rainy":
      return vo(c) + yo("M12.5 16 10.5 19.5h3l-2 3M7.5 18.5l-1 2.5M17.5 18.5l-1 2.5");
    case "windy":
    case "windy-variant":
      return yo("M3 8.5h10.5a2.5 2.5 0 1 0-2.5-2.5M3 12h15.5a2.5 2.5 0 1 1-2.5 2.5M3 15.5h8");
    default:
      return '<circle cx="12" cy="12" r="8"/>' + yo("M12 8v5M12 16h.01");
  }
}
const vl = (o, r) => '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + Xh(o, r) + "</svg>", $h = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), Jh = 30 * De, Qh = 7, tm = 3, Md = 1, em = De, am = 15 * De, om = 5, ee = {
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
}, ht = {
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
}, Pl = 7, ko = 256, nm = 3, Sd = 700, rm = 1800, Bp = 5 * De;
let Si = null, Ad = 0, kr = null;
function im() {
  return Si && Date.now() - Ad < Bp ? Promise.resolve(Si) : kr || (kr = fetch("https://api.rainviewer.com/public/weather-maps.json").then((o) => o.ok ? o.json() : Promise.reject(new Error(String(o.status)))).then((o) => {
    var p, g;
    const r = (((p = o.radar) == null ? void 0 : p.past) || []).slice(-6), c = (((g = o.radar) == null ? void 0 : g.nowcast) || []).slice(0, nm);
    return Si = { host: o.host, frames: [...r.map((v) => ({ ...v, past: !0 })), ...c] }, Ad = Date.now(), Si;
  }).finally(() => {
    kr = null;
  }), kr);
}
function sm(o, r, c, p) {
  const g = Pl, v = 2 ** g, w = o * Math.PI / 180, S = (r + 180) / 360 * v * ko, I = (1 - Math.log(Math.tan(w) + 1 / Math.cos(w)) / Math.PI) / 2 * v * ko, y = S - c / 2, _ = I - p / 2, O = [];
  for (let V = Math.floor(y / ko); V <= Math.floor((y + c - 1) / ko); V++) for (let Q = Math.floor(_ / ko); Q <= Math.floor((_ + p - 1) / ko); Q++)
    Q < 0 || Q >= v || O.push({ x: (V % v + v) % v, y: Q, left: V * ko - y, top: Q * ko - _ });
  return O;
}
const lm = {
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
}, cm = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], dm = Object.keys(ht.phases), pm = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)", extreme: "var(--purple-color, #926bc7)" }, Cd = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, Rp = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], Ai = 100, _d = "µg/m³", fm = "weather_alerts.air_quality_pollen", Ii = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], um = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, hm = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], mm = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, gm = { daily: 1, hourly: 2 }, wt = (o) => String(o ?? "").replace(/[&<>"']/g, (r) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[r]), ze = (o, r) => o.replace(/\{(\w+)\}/g, (c, p) => r[p] ?? ""), So = (o) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + o + '"/></svg>', Td = /* @__PURE__ */ new Map();
function Pp(o) {
  let r = Td.get(o);
  if (r === void 0) {
    const c = "http://www.w3.org/2000/svg", p = document.createElementNS(c, "svg"), g = document.createElementNS(c, "path");
    p.setAttribute("viewBox", "0 0 24 24"), p.style.cssText = "position:absolute;width:24px;height:24px;visibility:hidden;pointer-events:none", g.setAttribute("d", o), p.append(g), document.body.append(p);
    const v = g.getBBox();
    p.remove();
    const w = Math.max(v.width, v.height), S = w ? 26 * 24 / w : 0, I = S / 24;
    r = w ? "width:" + S.toFixed(2) + "px;height:" + S.toFixed(2) + "px;translate:" + ((12 - v.x - v.width / 2) * I).toFixed(2) + "px " + ((12 - v.y - v.height / 2) * I).toFixed(2) + "px" : "", Td.set(o, r);
  }
  return r ? '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true" style="' + r + '"><path d="' + o + '"/></svg>' : So(o);
}
const bm = () => {
  var o;
  return !!((o = window.matchMedia) != null && o.call(window, "(prefers-reduced-motion: reduce)").matches);
}, ie = (o) => o != null && o !== "" && Number.isFinite(Number(o)), Ld = /* @__PURE__ */ new Map(), Dd = /* @__PURE__ */ new Map(), yl = /* @__PURE__ */ new WeakMap(), wm = (o) => {
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
function Ut(o, r, c) {
  const p = Number(o);
  if (Number.isNaN(p)) return String(o);
  const g = (r == null ? void 0 : r.number_format) === "none", v = { maximumFractionDigits: 2, ...c, ...g ? { useGrouping: !1 } : {} }, w = g ? "en-US" : wm(r), S = JSON.stringify([w, v]);
  let I = Ld.get(S);
  if (!I) {
    try {
      I = new Intl.NumberFormat(w, v);
    } catch {
      I = new Intl.NumberFormat(void 0, v);
    }
    Ld.set(S, I);
  }
  return I.format(p);
}
const Ol = (o) => {
  var r;
  return ((r = o == null ? void 0 : o.locale) == null ? void 0 : r.language) || (o == null ? void 0 : o.language) || void 0;
};
function vm(o) {
  if (!o) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (yl.has(o)) return yl.get(o);
  const r = o.time_format, c = r === "language" || r === "system" || !r ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(r === "language" ? o.language : void 0).includes("10") : r === "12";
  return yl.set(o, c), c;
}
const Hp = (o) => {
  var r, c;
  return ((r = o == null ? void 0 : o.locale) == null ? void 0 : r.time_zone) === "server" && ((c = o == null ? void 0 : o.config) != null && c.time_zone) ? o.config.time_zone : void 0;
};
function Op(o, r) {
  const c = JSON.stringify([o, r]);
  let p = Dd.get(c);
  if (!p) {
    try {
      p = new Intl.DateTimeFormat(o, r);
    } catch {
      p = new Intl.DateTimeFormat(void 0, { ...r, timeZone: void 0 });
    }
    Dd.set(c, p);
  }
  return p;
}
const Fe = (o, r) => Op(Ol(r), { hour: "numeric", minute: "2-digit", hourCycle: vm(r == null ? void 0 : r.locale) ? "h12" : "h23", timeZone: Hp(r) }).format(o), Ed = (o, r) => Op(Ol(r), { weekday: "short", timeZone: Hp(r) }).format(o), ym = (o, r) => o.toLocaleDateString(Ol(r), { weekday: "narrow" }), pe = (o, r) => ie(r) ? Ut(Math.round(Number(r)), o.locale) + "°" : "–", Uo = (o) => {
  const r = new Date(o);
  return r.setHours(0, 0, 0, 0), r;
}, In = (o, r) => o.getFullYear() === r.getFullYear() && o.getMonth() === r.getMonth() && o.getDate() === r.getDate(), ea = Math.PI / 180, xm = 2440588, km = 2451545, Fi = ea * 23.4397, Mm = 149598e3, Sm = -0.833 * ea, Am = 0.133 * ea, Bd = 5 * De, Np = (o) => o.getTime() / la - 0.5 + xm - km, Ip = (o, r) => Math.atan2(Math.sin(o) * Math.cos(Fi) - Math.tan(r) * Math.sin(Fi), Math.cos(o)), Fp = (o, r) => Math.asin(Math.sin(r) * Math.cos(Fi) + Math.cos(r) * Math.sin(Fi) * Math.sin(o)), Cm = (o, r) => ea * (280.16 + 360.9856235 * o) - r, _m = (o, r, c) => Math.asin(Math.sin(r) * Math.sin(c) + Math.cos(r) * Math.cos(c) * Math.cos(o));
function qp(o) {
  const r = ea * (357.5291 + 0.98560028 * o), c = ea * (1.9148 * Math.sin(r) + 0.02 * Math.sin(2 * r) + 3e-4 * Math.sin(3 * r)), p = r + c + ea * 102.9372 + Math.PI;
  return { ra: Ip(p, 0), dec: Fp(p, 0), dist: Mm };
}
function Wp(o) {
  const r = ea * (218.316 + 13.176396 * o), c = ea * (134.963 + 13.064993 * o), p = ea * (93.272 + 13.22935 * o), g = r + ea * 6.289 * Math.sin(c), v = ea * 5.128 * Math.sin(p);
  return { ra: Ip(g, v), dec: Fp(g, v), dist: 385001 - 20905 * Math.cos(c) };
}
const jp = (o, r, c, p) => {
  const g = Np(r), v = o(g);
  return _m(Cm(g, ea * -p) - v.ra, ea * c, v.dec);
}, qi = (o, r, c) => jp(qp, o, r, c), Tm = (o, r, c) => jp(Wp, o, r, c);
function Vp(o, r, c, p) {
  const g = {};
  let v = c.getTime(), w = o(c) - r;
  for (let S = v + Bd; S <= p.getTime(); S += Bd) {
    const I = o(new Date(S)) - r;
    if (w < 0 != I < 0) {
      const y = new Date(v + (S - v) * w / (w - I));
      I > 0 ? g.rise ?? (g.rise = y) : g.set ?? (g.set = y);
    }
    v = S, w = I;
  }
  return g;
}
const zp = (o) => {
  const r = Uo(o);
  return [r, new Date(r.getTime() + la)];
}, Lm = (o, r, c) => Vp((p) => qi(p, r, c), Sm, ...zp(o)), Dm = (o, r, c) => Vp((p) => Tm(p, r, c), Am, ...zp(o));
function xl(o) {
  const r = Np(o), c = qp(r), p = Wp(r), g = Math.acos(Math.sin(c.dec) * Math.sin(p.dec) + Math.cos(c.dec) * Math.cos(p.dec) * Math.cos(c.ra - p.ra)), v = Math.atan2(c.dist * Math.sin(g), p.dist - c.dist * Math.cos(g)), w = Math.atan2(Math.cos(c.dec) * Math.sin(c.ra - p.ra), Math.sin(c.dec) * Math.cos(p.dec) - Math.cos(c.dec) * Math.sin(p.dec) * Math.cos(c.ra - p.ra));
  return { fraction: (1 + Math.cos(v)) / 2, phase: 0.5 + 0.5 * v * (w < 0 ? -1 : 1) / Math.PI };
}
const Em = (o) => {
  const r = o * 28;
  return r < 0.5 || r > 27.5 ? "new_moon" : r < 6.5 ? "waxing_crescent" : r < 7.5 ? "first_quarter" : r < 13.5 ? "waxing_gibbous" : r < 14.5 ? "full_moon" : r < 20.5 ? "waning_gibbous" : r < 21.5 ? "last_quarter" : "waning_crescent";
}, jn = (o) => {
  const r = o == null ? void 0 : o.config;
  return r && ie(r.latitude) && ie(r.longitude) ? { lat: Number(r.latitude), lon: Number(r.longitude) } : null;
};
function Fn(o, r) {
  var y, _, O;
  const c = jn(o), p = c ? Lm(r, c.lat, c.lon) : {}, g = (y = o == null ? void 0 : o.states) == null ? void 0 : y["sun.sun"], v = Uo(r).getTime(), w = (V) => {
    const Q = V ? new Date(V) : null;
    return Q && Number.isFinite(Q.getTime()) && Uo(Q).getTime() === v ? Q : null;
  }, S = w((_ = g == null ? void 0 : g.attributes) == null ? void 0 : _.next_rising), I = w((O = g == null ? void 0 : g.attributes) == null ? void 0 : O.next_setting);
  return S && (p.rise = S), I && (p.set = I), p;
}
function Bm(o) {
  var p;
  const r = (p = o == null ? void 0 : o.states) == null ? void 0 : p["sun.sun"];
  if ((r == null ? void 0 : r.state) === "below_horizon" || (r == null ? void 0 : r.state) === "above_horizon") return r.state === "below_horizon";
  const c = jn(o);
  return c ? qi(/* @__PURE__ */ new Date(), c.lat, c.lon) < 0 : !1;
}
const bn = (o) => !!o && o.state !== "unavailable" && o.state !== "unknown", Vn = (o, r) => {
  var p;
  const c = (p = o.entities) == null ? void 0 : p[r];
  return !c || !c.hidden && !c.entity_category;
}, Se = (o, r, c) => {
  var p, g;
  for (const v of r) {
    const w = (p = o.states) == null ? void 0 : p[v];
    if (!bn(w)) continue;
    const S = (g = w.attributes) == null ? void 0 : g[c];
    if (S != null && S !== "") return { stateObj: w, value: S };
  }
}, Rm = (o, r) => r.map((c) => {
  var p;
  return (p = o.states) == null ? void 0 : p[c];
}).find(bn), Pm = (o, r, c) => r.map((p) => {
  var g;
  return (g = o.states) == null ? void 0 : g[p];
}).find((p) => {
  var g;
  return bn(p) && (((g = p.attributes) == null ? void 0 : g.supported_features) == null || Number(p.attributes.supported_features) & gm[c]);
});
function Go(o, r, c) {
  var v, w, S, I;
  const p = ((w = (v = o.config) == null ? void 0 : v.unit_system) == null ? void 0 : w.length) || "", g = (r == null ? void 0 : r.attributes) || {};
  switch (c) {
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
      return g.temperature_unit || ((I = (S = o.config) == null ? void 0 : S.unit_system) == null ? void 0 : I.temperature) || "";
  }
}
function Hi(o, r, c, p) {
  try {
    if (typeof o.formatEntityAttributeValueToParts == "function") {
      const [g, ...v] = o.formatEntityAttributeValueToParts(r, c, p).map((w) => w.value);
      return { number: g, unit: v.join("").trim() };
    }
  } catch {
  }
  return { number: Ut(p, o.locale), unit: Go(o, r, c) };
}
function Rd(o, r, c, p) {
  try {
    if (typeof o.formatEntityAttributeValue == "function") return o.formatEntityAttributeValue(r, c, p);
  } catch {
  }
  const g = Hi(o, r, c, p);
  return (g.number + " " + g.unit).trim();
}
function xo(o, r) {
  var p;
  try {
    if (typeof o.formatEntityState == "function") return o.formatEntityState(r);
  } catch {
  }
  const c = (p = r.attributes) == null ? void 0 : p.unit_of_measurement;
  return lm[r.state] || (c && ie(r.state) ? Ut(r.state, o.locale) + " " + c : r.state);
}
function Vo(o, r) {
  var c;
  try {
    if (typeof o.formatEntityName == "function") return o.formatEntityName(r, { type: "entity" });
  } catch {
  }
  return ((c = r.attributes) == null ? void 0 : c.friendly_name) || r.entity_id;
}
const Pd = (o) => o < 3 ? "low" : o < 6 ? "moderate" : o < 8 ? "high" : o < 11 ? "very_high" : "extreme", Ci = (o) => Rp.find(([, r]) => o <= r)[0];
function Hm(o, r) {
  if (r === "Beaufort") return Math.round(o);
  const c = r ? um[r] : void 0;
  if (c === void 0) return;
  const p = hm.findIndex((g) => o * c < g);
  return p === -1 ? 12 : p;
}
const Hd = (o, r) => {
  const c = r ? mm[r] : void 0;
  return c === void 0 ? void 0 : o * c;
}, Od = (o) => Object.keys(o.states || {}).find((r) => {
  var c, p;
  return r.startsWith("sensor.") && ((p = (c = o.entities) == null ? void 0 : c[r]) == null ? void 0 : p.platform) === "moon";
}), kl = (o) => Object.values(o.states || {}).filter((r) => {
  var c, p;
  return r.entity_id.startsWith("sensor.") && ((c = r.attributes) == null ? void 0 : c.device_class) === "precipitation" && ["total", "total_increasing"].includes(((p = r.attributes) == null ? void 0 : p.state_class) ?? "") && Vn(o, r.entity_id);
}).map((r) => r.entity_id).sort()[0];
function Om(o) {
  var c;
  const r = {};
  for (const [p, g] of Object.entries(((c = o == null ? void 0 : o.core) == null ? void 0 : c.integration) ?? {})) {
    if (g && "integration_type" in g) {
      r[p] = g.categories;
      continue;
    }
    for (const [v, w] of Object.entries((g == null ? void 0 : g.integrations) ?? {})) r[v] = w == null ? void 0 : w.categories;
  }
  return r;
}
const Gp = (o, r, c) => {
  var g, v, w;
  const p = (v = (g = o.entities) == null ? void 0 : g[c]) == null ? void 0 : v.platform;
  return !!p && !!((w = r[p]) != null && w.includes(fm));
};
function Nm(o, r) {
  const c = /* @__PURE__ */ new Map();
  return Object.values(o.states || {}).filter((p) => {
    var g;
    return p.entity_id.startsWith("sensor.") && Ii.includes(((g = p.attributes) == null ? void 0 : g.device_class) ?? "") && Vn(o, p.entity_id) && Gp(o, r, p.entity_id);
  }).sort((p, g) => p.entity_id.localeCompare(g.entity_id)).forEach((p) => {
    c.has(p.attributes.device_class) || c.set(p.attributes.device_class, p.entity_id);
  }), Ii.map((p) => c.get(p)).filter(Boolean);
}
const Im = (o, r) => Object.values(o.states || {}).filter((c) => {
  var p, g;
  return c.entity_id.startsWith("sensor.") && Vn(o, c.entity_id) && Gp(o, r, c.entity_id) && (((g = (p = o.entities) == null ? void 0 : p[c.entity_id]) == null ? void 0 : g.translation_key) ?? c.entity_id).toLowerCase().includes("pollen");
}).map((c) => c.entity_id).sort();
function Nd(o, r, c) {
  const p = Math.max(r - o, 1e-6), g = c[c.length - 1], v = c.find((y) => p / y <= 4) ?? g * Math.ceil(p / (4 * g)), w = Math.floor(o / v) * v;
  let S = Math.ceil(r / v) * v;
  S === w && (S = w + v);
  const I = [];
  for (let y = w; y <= S + v / 1e3; y += v) I.push(y);
  return { min: w, max: S, ticks: I };
}
const Fm = (o, r, c) => {
  const p = (w) => [1, 3, 5].map((S) => parseInt(w.slice(S, S + 2), 16)), g = p(o), v = p(r);
  return "rgb(" + g.map((w, S) => Math.round(w + (v[S] - w) * c)).join(", ") + ")";
}, qm = (o, r, c, p) => {
  const g = c * Math.abs(1 - 2 * p), v = p < 0.5 ? 0 : 1;
  return "M " + o + " " + (r - c) + " A " + c + " " + c + " 0 0 0 " + o + " " + (r + c) + " A " + g + " " + c + " 0 0 " + v + " " + o + " " + (r - c) + " Z";
}, Qe = ({ icon: o, name: r, sub: c, visual: p, double: g, backdrop: v, cls: w, zone: S, callouts: I }) => '<div class="wbCard wbSquare' + (g ? " wbDouble" : "") + (v ? " wbHasBackdrop" : "") + (S != null ? " wbZoned" : "") + (w ? " " + w : "") + '">' + (v ? '<div class="wbBackdrop" aria-hidden="true">' + v + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + Pp(o) + '</div><div class="wbText"><span class="wbName">' + wt(r) + "</span>" + (c ? '<span class="wbSub">' + wt(c) + "</span>" : "") + "</div></div>" + (S != null ? '<div class="wbZone">' + S + "</div>" + (I != null && I.length ? '<div class="wbCallouts">' + I.slice(0, 3).map((y) => Array.isArray(y) ? '<span class="wbCallout"><span>' + wt(y[0]) + "</span><span>" + wt(y[1]) + "</span></span>" : '<span class="wbCallout wbAdvice"><span>' + wt(y) + "</span></span>").join("") + "</div>" : "") : '<div class="wbVisual">' + p + "</div>") + "</div>", _i = (o) => '<div class="wbZoneM">' + o + "</div>", Ca = (o, r) => '<div class="wbValue"><span class="wbNum">' + wt(o) + "</span>" + (r ? '<span class="wbUnitV">' + wt(r) + "</span>" : "") + "</div>";
function Wm(o) {
  const r = o.max - o.min || 1, c = (S) => 100 - (Math.min(o.max, Math.max(o.min, S)) - o.min) / r * 100, p = (S) => S / Cr * 100 + "%", g = (S) => S.map((I) => I.t + "," + c(I.v)).join(" "), v = o.kind === "line" ? o.points : [];
  let w = '<div class="wbDayChart"><div class="wbDcSun">' + o.sun.map((S) => '<span class="wbDcSunMark" style="left:' + p(S.t) + '">' + So(S.rise ? ee.sunsetUp : ee.sunsetDown) + wt(S.label) + "</span>").join("") + "</div>";
  return w += '<div class="wbDcY">' + o.ticks.map((S) => '<span style="top:' + c(S) + '%">' + wt(o.format(S)) + "</span>").join("") + "</div>", w += '<div class="wbDcPlot"><svg viewBox="0 0 ' + Cr + ' 100" preserveAspectRatio="none">' + o.night.map(([S, I]) => '<rect class="wbDcNight" x="' + S + '" y="0" width="' + (I - S) + '" height="100"></rect>').join("") + o.ticks.map((S) => '<line class="wbDcGrid" x1="0" x2="' + Cr + '" y1="' + c(S) + '" y2="' + c(S) + '" vector-effect="non-scaling-stroke"></line>').join("") + o.sun.map((S) => '<line class="wbDcSunLine" x1="' + S.t + '" x2="' + S.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (o.past && o.past.length > 1 ? '<polyline class="wbDcPast" points="' + g(o.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (v.length > 1 ? '<polygon class="wbDcArea" points="' + v[0].t + ",100 " + g(v) + " " + v[v.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + g(v) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (o.now ? '<line class="wbDcNow" x1="' + o.now.t + '" x2="' + o.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (o.kind === "bars" ? o.points.filter((S) => S.v > 0).map((S) => '<i class="wbDcBar" style="left:' + p(S.t + 12) + ";width:" + p(36) + ";height:" + (100 - c(S.v)) + '%"></i>').join("") : "") + (o.now && o.kind === "line" ? '<i class="wbDcDot" style="left:' + p(o.now.t) + ";top:" + c(o.now.v) + '%"></i>' : "") + (o.peak ? '<span class="wbDcPeak" style="left:' + p(o.peak.t) + ";top:" + c(o.peak.v) + '%">' + wt(o.peak.label) + "</span>" : "") + (o.note ? '<span class="wbDcNote">' + wt(o.note) + "</span>" : "") + "</div>", w += '<div class="wbDcX">' + o.hours.map((S) => '<span class="' + (S.minor ? "wbMinor" : "") + '" style="left:' + p(S.t) + '">' + wt(S.label) + "</span>").join("") + "</div></div>", w;
}
function Id(o, r, c = 120, p = 300) {
  const w = o.map((j) => j.value), S = Math.min(...w), I = Math.max(...w), y = I - S || 1, _ = (j) => j / (o.length - 1) * p, O = (j) => 18 + (1 - (j - S) / y) * (c - 18 - 18), V = o.map((j, lt) => [_(lt), O(j.value)]), Q = V.length > 2 ? Tp(V) : "M" + V.map((j) => j[0].toFixed(1) + " " + j[1].toFixed(1)).join("L"), et = w.indexOf(I), at = w.indexOf(S), X = (j) => j === 0 ? "start" : j === o.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 ' + p + " " + c + '" aria-hidden="true">' + Lp(p, 18, c - 18) + ('<path class="wbArea" d="' + Q + "L" + p + " " + (c - 18) + "L0 " + (c - 18) + 'Z"></path>') + '<path class="wbLine" d="' + Q + '" vector-effect="non-scaling-stroke"></path><text x="' + _(et) + '" y="' + (O(I) - 6) + '" text-anchor="' + X(et) + '">' + wt(r(I)) + '</text><text x="' + _(at) + '" y="' + (O(S) + 14) + '" text-anchor="' + X(at) + '">' + wt(r(S)) + '</text><text x="0" y="' + c + '" text-anchor="start">' + wt(o[0].label) + '</text><text x="' + p + '" y="' + c + '" text-anchor="end">' + wt(o[o.length - 1].label) + "</text></svg>";
}
function jm(o, r) {
  const v = o.map((O) => O.value).concat([]), w = Math.min(...v) - 2, S = Math.max(...v) + 1, I = S - w || 1, y = 300 / o.length, _ = (O) => (1 - (O - w) / I) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + o.map((O, V) => '<rect class="wbBar' + (O.now ? " wbNowBar" : "") + '" x="' + (V * y + y * 0.2) + '" y="' + _(O.value) + '" width="' + y * 0.6 + '" height="' + (104 - _(O.value)) + '" rx="6"></rect><text x="' + (V * y + y / 2) + '" y="120" text-anchor="middle">' + wt(O.label) + "</text>").join("") + "</svg>";
}
const Vm = [
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
], zm = [[60, 92, 2.2], [72, 98, 1.6], [48, 100, 1.5], [85, 88, 1.8], [38, 92, 1.3], [66, 84, 1.2], [95, 80, 1.3], [25, 40, 1.4], [82, 30, 1.3], [55, 108, 1.2]], Fd = [[54.4, 95, 1.8], [44.5, 56.6, 1.5], [33.5, 56.6, 1.1], [23.7, 40.1, 1.1]], Gm = [[30, 62], [48, 48], [72, 60], [96, 82], [86, 112], [30, 108], [16, 86]];
let Um = 0;
function qd(o, { getHass: r, entityId: c, style: p = "bitmap", motion: g = !0, cards: v, onOpen: w, hoursWindow: S, radarSource: I } = {}) {
  var or, Qr;
  const y = "wb" + ++Um + "-", _ = document.createElement("div");
  _.className = "wb", _.dataset.style = p;
  const O = document.createElement("div");
  O.className = "wbBento", _.appendChild(O), o.replaceChildren(_);
  const V = document.createElement("div");
  V.className = "wb wbPopup", V.dataset.style = p, V.hidden = !0;
  const Q = ["aq_tile", "pollen_tile", "radar_tile"], et = ["current", "hourly", "sun", "pollen_tile", "moon", "uv_index", "aq_tile", "humidity", "pressure", "wind", "visibility", "radar_tile", "compared_to_average", "precipitation", "air_quality"].filter((s) => !v || v.includes(s)), at = { current: "wide", hourly: "wide", compared_to_average: "double" }, X = ["sun", "moon", "uv_index", "aq_tile", "pollen_tile", "humidity", "pressure", "wind"], j = {};
  et.forEach((s) => {
    const u = document.createElement("div");
    u.className = "wbItem", u.dataset.card = s, u.dataset.size = at[s] || "tile", u.hidden = !0, X.includes(s) && (u.dataset.xl = ""), O.appendChild(u), j[s] = { el: u, html: null };
  });
  let lt = !1, pt = null, gt = 0, nt = -1, J = !1, Z = null, P = "";
  const vt = "homecore-next-view", Bt = (() => {
    try {
      return localStorage.getItem(vt);
    } catch {
      return null;
    }
  })(), it = { graph: void 0, range: { preset: "day" }, picking: !1, openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", hourlyView: Bt === "bars" ? "bars" : "strip", aq: void 0 }, z = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let It = /* @__PURE__ */ new Date(), F = /* @__PURE__ */ new Date();
  const tt = {}, E = {}, dt = {}, ot = (s) => {
    var u;
    return ((u = dt[s]) == null ? void 0 : u.forecast) ?? [];
  }, rt = (s, u) => {
    var m;
    return dt[u] ? (m = s.states) == null ? void 0 : m[dt[u].entityId] : void 0;
  };
  function yt(s) {
    const u = E[s];
    u && (u.unsub.then((m) => {
      typeof m == "function" && m();
    }).catch(() => {
    }), delete E[s]), dt[s] && delete dt[s];
  }
  function ft(s, u, m) {
    var A;
    if (typeof ((A = s.connection) == null ? void 0 : A.subscribeMessage) != "function") return;
    const b = { entityId: m };
    try {
      b.unsub = Promise.resolve(s.connection.subscribeMessage((H) => {
        lt || E[u] !== b || (H != null && H.forecast ? dt[u] = { entityId: m, forecast: H.forecast } : delete dt[u], en());
      }, { type: "weather/subscribe_forecast", forecast_type: u, entity_id: m }));
    } catch (H) {
      b.unsub = Promise.reject(H);
    }
    b.unsub.catch(() => {
      E[u] === b && delete E[u];
    }), E[u] = b;
  }
  function xt(s, u) {
    var m;
    for (const b of ["daily", "hourly"]) {
      const A = Pm(s, u, b);
      ((m = E[b]) == null ? void 0 : m.entityId) !== (A == null ? void 0 : A.entity_id) && (yt(b), A && ft(s, b, A.entity_id));
    }
  }
  const Ft = (s, u, m, b = !1) => s.callWS({
    type: "history/history_during_period",
    start_time: m.toISOString(),
    end_time: (/* @__PURE__ */ new Date()).toISOString(),
    entity_ids: [u],
    minimal_response: b,
    no_attributes: b,
    significant_changes_only: !1
  });
  async function re(s, u) {
    var W, U, N;
    const m = Se(s, u, "pressure");
    if (!m) return;
    const b = m.stateObj.entity_id, A = await Ft(s, b, new Date(Date.now() - 3 * te)), H = (N = (U = (W = A == null ? void 0 : A[b]) == null ? void 0 : W.find((K) => {
      var $;
      return typeof (($ = K.a) == null ? void 0 : $.pressure) == "number";
    })) == null ? void 0 : U.a) == null ? void 0 : N.pressure;
    z.pressureHistory = typeof H == "number" ? { entityId: b, value: H } : void 0;
  }
  async function mt(s, u) {
    var U;
    const m = Se(s, u, "temperature");
    if (!m) return;
    const b = m.stateObj.entity_id, A = Uo(/* @__PURE__ */ new Date()), H = await Ft(s, b, new Date(A.getTime() - Qh * la)), W = /* @__PURE__ */ new Map();
    for (const N of (H == null ? void 0 : H[b]) ?? []) {
      const K = (U = N.a) == null ? void 0 : U.temperature, $ = new Date((N.lc ?? N.lu) * 1e3);
      if (typeof K != "number" || $ >= A) continue;
      const ut = $.toDateString();
      W.set(ut, Math.max(W.get(ut) ?? -1 / 0, K));
    }
    z.temperatureHistory = { entityId: b, dailyHighs: [...W.values()], days: [...W.entries()].map(([N, K]) => ({ date: new Date(N), high: K })) };
  }
  async function Ue(s) {
    const u = kl(s);
    if (!u) return;
    const m = await s.callWS({ type: "recorder/statistic_during_period", statistic_id: u, rolling_window: { duration: { hours: 24 } } });
    z.rain = { entityId: u, change: (m == null ? void 0 : m.change) ?? void 0 };
  }
  function to() {
    const s = r == null ? void 0 : r();
    if (!s || lt || typeof s.callWS != "function") return;
    const u = Ct(s);
    z.lastFetch = Date.now(), [re(s, u), mt(s, u), Ue(s)].forEach((m) => m.then(() => en(), () => {
    }));
  }
  async function Yo() {
    const s = r == null ? void 0 : r();
    if (!s) return;
    const u = Se(s, Ct(s), "temperature");
    if (!u) return;
    const m = u.stateObj.entity_id, b = Uo(/* @__PURE__ */ new Date());
    try {
      const A = await Ft(s, m, b), H = (W) => ((A == null ? void 0 : A[m]) ?? []).map((U) => {
        var N;
        return { time: U.lu * 1e3, value: (N = U.a) == null ? void 0 : N[W] };
      }).filter((U) => typeof U.value == "number");
      z.todayHistory = { day: b.toDateString(), fetched: Date.now(), temperature: H("temperature"), humidity: H("humidity") }, en();
    } catch {
    }
  }
  async function To(s) {
    const u = r == null ? void 0 : r();
    if (u)
      try {
        const m = await Ft(u, s, new Date(Date.now() - 24 * te), !0), b = ((m == null ? void 0 : m[s]) ?? []).filter((H) => ie(H.s)), A = Math.max(1, Math.ceil(b.length / 48));
        z.aqHistory = { entityId: s, points: b.filter((H, W) => W % A === 0).map((H) => ({ label: Fe(new Date(H.lu * 1e3), u), value: Number(H.s) })) }, en();
      } catch {
      }
  }
  function Wa(s) {
    z.categories === void 0 && (z.categories = null, Promise.resolve().then(() => s.callWS({ type: "integration/descriptions" })).then((u) => {
      z.categories = Om(u);
    }, () => {
      z.categories = {};
    }).then(() => en()));
  }
  function Ct(s) {
    var m;
    const u = Object.keys(s.states || {}).filter((b) => b.startsWith("weather.") && Vn(s, b)).sort();
    return c && ((m = s.states) != null && m[c]) ? [c, ...u.filter((b) => b !== c)] : u;
  }
  const Me = (s) => z.categories ? { air: Nm(s, z.categories), pollen: Im(s, z.categories) } : { air: [], pollen: [] };
  function Oe(s, u, m, b) {
    if (p === "line") return '<span class="wbWx wbS' + u + ' wbLineIcon" aria-hidden="true">' + vl(s, m || s === "clear-night") + "</span>";
    if (p === "smooth") {
      const A = Mh(s, u === 90, m, y + "g-" + b);
      return '<span class="wbWx wbS' + u + " wb" + A.k[0].toUpperCase() + A.k.slice(1) + (A.night ? " wbNight" : "") + '" aria-hidden="true">' + A.svg + "</span>";
    }
    return '<span class="wbWx wbS' + u + '" aria-hidden="true"><canvas data-wb-wx="' + wt(pp(s, m)) + '" data-size="' + u + '"></canvas></span>';
  }
  const zt = () => ot("daily").filter((s) => s.templow != null).slice(0, Gh);
  function aa(s, u) {
    const m = new Date(u.datetime), b = /* @__PURE__ */ new Date();
    return In(m, b) ? ht.today : In(m, new Date(b.getTime() + la)) ? ht.tomorrow : Ed(m, s);
  }
  const zn = (s, u, m) => m === 0 ? aa(s, u) : Ed(new Date(u.datetime), s);
  function jt(s, u) {
    var $, ut, Rt, Tt;
    const m = Rm(s, u);
    if (!m) return "";
    const b = zt(), A = it.openDay !== void 0 ? b[it.openDay] : void 0, H = Se(s, u, "temperature"), W = b[0], U = W && In(new Date(W.datetime), /* @__PURE__ */ new Date()), N = ((ut = ($ = s.config) == null ? void 0 : $.unit_system) == null ? void 0 : ut.temperature) || ((Rt = m.attributes) == null ? void 0 : Rt.temperature_unit) || "";
    let K = '<div class="wbCard wbWeather' + (A ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (A ? " inert" : "") + '><div class="wbNow">' + (w ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + wt(ht.openPage) + '">' : '<div class="wbCurrent">') + Oe(m.state, 90, Bm(s), "now") + '<div class="wbTempBlock">' + (H && ie(H.value) ? '<div class="wbTemp"><span class="wbDeg">' + wt(Ut(Math.round(Number(H.value)), s.locale)) + '</span><span class="wbUnit">' + wt(N) + "</span></div>" : "") + '<div class="wbPlace">' + wt(((Tt = s.config) == null ? void 0 : Tt.location_name) ?? "") + "</div></div>" + (w ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + wt(xo(s, m)) + "</div>" + (U && W.templow != null ? '<div class="wbRange">' + wt(ze(ht.range, { high: pe(s, W.temperature), low: pe(s, W.templow) })) + "</div>" : "") + "</div></div>";
    if (K += ha(s) + ge(s), b.length) {
      const Mt = U && H && ie(H.value) ? pe(s, H.value) : "", qt = (Lt, st, Pt) => Lt === 0 && Mt ? '<span class="wbAsDay">' + wt(st) + '</span><span class="wbAsNow">' + wt(Pt) + "</span>" : wt(st);
      K += '<div class="wbColumns" role="list">' + b.map((Lt, st) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + st + '" data-wb-focus="col-' + st + '"><span class="wbDay">' + qt(st, zn(s, Lt, st), ht.now) + "</span>" + Oe(Lt.condition ?? "cloudy", 60, !1, "col" + st) + '<span class="wbTemps"><span class="wbHi">' + qt(st, pe(s, Lt.temperature), Mt) + '</span><span class="wbLo">' + wt(pe(s, Lt.templow)) + "</span></span></button>").join("") + "</div>", K += '<div class="wbHalves" role="list">' + b.map((Lt, st) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + st + '" data-wb-focus="half-' + st + '">' + Oe(Lt.condition ?? "cloudy", 40, !1, "half" + st) + '<span class="wbText"><span class="wbName">' + wt(aa(s, Lt)) + '</span><span class="wbSub">' + wt(ze(ht.highLow, { high: pe(s, Lt.temperature), low: pe(s, Lt.templow) })) + "</span></span></button>").join("") + "</div>";
    }
    return K + "</div>" + (A ? Er(s, u, A) : "") + "</div>";
  }
  const ua = {
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
  }, Tr = {
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
  function Lr(s) {
    const u = Date.now(), m = ot("hourly").filter((ut) => new Date(ut.datetime).getTime() > u - te).slice(0, 13);
    if (m.length < 2) return "";
    const b = (ut) => Fe(new Date(ut.datetime), s), A = (ut) => ua[ut.condition] || "", H = (ut) => Tr[ut.condition] || ut.condition;
    let W = A(m[0]);
    if (!W) return "";
    let U = m[0], N = 0;
    for (const ut of m.slice(1))
      N === 2 || H(ut) === H(U) || !A(ut) || (W += (N ? " and " : ", ") + A(ut) + " from " + b(ut), U = ut, N++);
    const K = Number(m[0].temperature), $ = m.filter((ut) => ie(ut.temperature));
    if (ie(K) && $.length) {
      const ut = $.reduce((Tt, Mt) => Number(Mt.temperature) < Number(Tt.temperature) ? Mt : Tt), Rt = $.reduce((Tt, Mt) => Number(Mt.temperature) > Number(Tt.temperature) ? Mt : Tt);
      K - Number(ut.temperature) >= 3 ? W += ", down to " + pe(s, ut.temperature) + " by " + b(ut) : Number(Rt.temperature) - K >= 3 && (W += ", up to " + pe(s, Rt.temperature) + " by " + b(Rt));
    }
    return W[0].toUpperCase() + W.slice(1) + ".";
  }
  const ha = (s) => {
    const u = Lr(s);
    return u ? '<div class="wbSummary"><p class="wbSummaryText">' + wt(u) + "</p></div>" : "";
  };
  function ge(s) {
    const [u, m] = Mi[S == null ? void 0 : S()] || Mi.day, b = Date.now(), A = ot("hourly").filter((H) => {
      const W = new Date(H.datetime), U = W.getHours();
      return W.getTime() > b - te / 2 && U >= u && U < m && ie(H.temperature);
    }).slice(0, 4);
    return A.length ? '<div class="wbNextHours" role="list">' + A.map((H, W) => '<div class="wbHour" role="listitem"><span class="wbHourTime">' + wt(Fe(new Date(H.datetime), s)) + "</span>" + Oe(H.condition ?? "cloudy", 40, H.is_daytime === !1, "hr" + W) + '<span class="wbHourTemp">' + wt(pe(s, H.temperature)) + "</span></div>").join("") + "</div>" : "";
  }
  function Dr(s) {
    const u = s.getTime(), m = Date.now() - te;
    return ot("hourly").filter((b) => {
      const A = new Date(b.datetime).getTime();
      return A >= u && A < u + la && A > m;
    });
  }
  function Zo(s) {
    if (!s.length) return ["temperature"];
    const u = ["temperature"];
    return s.some((m) => m.precipitation != null || m.precipitation_probability != null) && u.push("precipitation"), s.some((m) => m.humidity != null) && u.push("humidity"), u;
  }
  function Er(s, u, m) {
    const b = Uo(new Date(m.datetime)), A = Dr(b), H = Zo(A), W = H.includes(it.dayMode) ? it.dayMode : "temperature", U = (N) => N === "humidity" ? ht.humidity : ht.modes[N];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + Oe(m.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + wt(aa(s, m)) + '</span><span class="wbSub">' + wt(ze(ht.highLow, { high: pe(s, m.temperature), low: pe(s, m.templow) })) + '</span></div><button class="wbBack" title="' + wt(ht.back) + '" data-wb="close-day" data-wb-focus="back-day">' + So(ee.back) + "</button></div>" + (H.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + H.map((N) => '<button aria-pressed="' + (N === W) + '" data-wb="day-mode" data-mode="' + N + '" data-wb-focus="day-mode-' + N + '">' + wt(U(N)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + Wm(Gn(s, u, b, A, W)) + "</div></div>";
  }
  function Gn(s, u, m, b, A) {
    var rr;
    const H = m.getTime(), W = Date.now(), U = In(m, /* @__PURE__ */ new Date()), N = (Yt) => (Yt - H) / De, K = (Yt) => Fe(new Date(Yt), s), $ = (Yt) => new Date(Yt.datetime).getTime(), ut = [0, 3, 6, 9, 12, 15, 18, 21].map((Yt) => ({ t: Yt * 60, label: K(H + Yt * te), minor: Yt % 6 !== 0 })), { rise: Rt, set: Tt } = Fn(s, m), Mt = [], qt = [];
    Rt && (Mt.push({ t: N(Rt.getTime()), label: K(Rt.getTime()), rise: !0 }), qt.push([0, N(Rt.getTime())])), Tt && (Mt.push({ t: N(Tt.getTime()), label: K(Tt.getTime()), rise: !1 }), qt.push([N(Tt.getTime()), Cr]));
    const Lt = jn(s);
    !Rt && !Tt && Lt && qi(new Date(H + la / 2), Lt.lat, Lt.lon) < 0 && qt.push([0, Cr]);
    const st = U ? N(W) : void 0, Pt = { hours: ut, sun: Mt, night: qt };
    if (!b.length && !U) return { ...Pt, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: ht.noHourly };
    if (A === "precipitation") {
      const Yt = b.some((je) => je.precipitation_probability != null), Ua = b.map((je) => ({ t: N($(je)), v: Number((Yt ? je.precipitation_probability : je.precipitation) ?? 0) })), No = Go(s, rt(s, "hourly"), "precipitation"), nn = Math.max(0, ...Ua.map((je) => je.v)), ir = Yt ? 100 : Nd(0, Math.max(nn, 1), [0.5, 1, 2, 5, 10]).max, Io = (je) => Yt ? Ut(je, s.locale) + "%" : Ut(je, s.locale, { maximumFractionDigits: 1 }) + " " + No, Fo = Ua.find((je) => je.v === nn);
      return {
        ...Pt,
        kind: "bars",
        points: Ua,
        min: 0,
        max: ir,
        ticks: [0, ir / 2, ir],
        format: Io,
        now: st !== void 0 ? { t: st, v: 0 } : void 0,
        peak: Fo && nn > 0 ? { t: Fo.t + 30, v: Fo.v, label: Io(Fo.v) } : void 0,
        note: nn > 0 ? void 0 : ht.noRain
      };
    }
    const Ot = A === "humidity" ? "humidity" : "temperature", he = b.filter((Yt) => Yt[Ot] != null && (!U || $(Yt) >= W)).map((Yt) => ({ t: N($(Yt)), v: Number(Yt[Ot]) }));
    let St, ne = [];
    if (st !== void 0) {
      const Yt = Se(s, u, Ot);
      Yt && ie(Yt.value) && (St = { t: st, v: Number(Yt.value) }, he.unshift(St)), ne = (((rr = z.todayHistory) == null ? void 0 : rr.day) === m.toDateString() ? z.todayHistory[Ot] : []).filter((No) => No.time <= W).map((No) => ({ t: Math.max(0, N(No.time)), v: No.value })), St && ne.length && ne.push(St);
    }
    const oe = [...ne, ...he];
    if (!oe.length) return { ...Pt, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: ht.noHourly };
    const Ke = oe.map((Yt) => Yt.v), lo = Nd(Math.min(...Ke), Math.max(...Ke), Ot === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    Ot === "humidity" && (lo.min = Math.max(0, lo.min), lo.max = Math.min(100, lo.max), lo.ticks = lo.ticks.filter((Yt) => Yt >= 0 && Yt <= 100));
    const on = Ot === "humidity" ? (Yt) => Ut(Yt, s.locale) + "%" : (Yt) => pe(s, Yt), nr = Ot === "temperature" ? oe.reduce((Yt, Ua) => Ua.v > Yt.v ? Ua : Yt) : void 0;
    return { ...Pt, kind: "line", points: he, past: ne, ...lo, format: on, now: St, peak: nr ? { ...nr, label: on(nr.v) } : void 0 };
  }
  function Un(s) {
    const u = ["temperature"];
    return s.some((m) => m.precipitation_probability != null || m.precipitation != null) && u.push("precipitation"), s.some((m) => m.wind_speed != null) && u.push("wind"), u;
  }
  function Lo(s, u, m = yd) {
    var H, W;
    const b = ot("daily"), A = [];
    for (let U = 0; U < m; U++) for (const N of [!1, !0]) {
      const K = s.getTime() + (U * 24 + (N ? 12 : 0)) * te, $ = K + 12 * te, ut = {};
      u.forEach((Tt) => {
        const Mt = new Date(Tt.datetime).getTime();
        Tt.condition && Mt >= K && Mt < $ && (ut[Tt.condition] = (ut[Tt.condition] ?? 0) + ($h.has(Tt.condition) ? 2 : 1));
      });
      let Rt = (H = Object.entries(ut).sort((Tt, Mt) => Mt[1] - Tt[1])[0]) == null ? void 0 : H[0];
      if (!Rt) {
        const Tt = new Date(K).toDateString();
        Rt = ((W = b.find((Mt) => new Date(Mt.datetime).toDateString() === Tt)) == null ? void 0 : W.condition) ?? "cloudy";
      }
      A.push({ cond: N && Rt === "sunny" ? "clear-night" : Rt, night: N });
    }
    return A;
  }
  function Wi(s, u, m) {
    const b = rt(s, "hourly"), A = u.precipitation_probability != null ? Ut(u.precipitation_probability, s.locale) + "%" : "", H = u.precipitation ? Ut(u.precipitation, s.locale) + " " + Go(s, b, "precipitation") : "";
    switch (m) {
      case "precipitation":
        return A ? [A, H] : [H || "–", ""];
      case "wind":
        return u.wind_speed != null ? [Ut(Math.round(u.wind_speed), s.locale), Go(s, b, "wind_speed")] : ["–", ""];
      default:
        return [pe(s, u.temperature), (u.precipitation_probability ?? 0) >= 20 ? A : ""];
    }
  }
  function ja(s, u, m) {
    const [b, A] = Mi[S == null ? void 0 : S()] || Mi.day, H = [];
    for (let W = 0; W < 4 && H.length < 3; W++) {
      const U = /* @__PURE__ */ new Date();
      U.setHours(0, 0, 0, 0), U.setDate(U.getDate() + W);
      const N = new Date(U);
      N.setHours(A, 0, 0, 0), U.setHours(b, 0, 0, 0), !(N.getTime() <= m || !u.some((K) => {
        const $ = new Date(K.datetime).getTime();
        return $ >= U.getTime() && $ <= N.getTime();
      })) && H.push({ a: U.getTime(), b: N.getTime(), label: aa(s, { datetime: U.toISOString() }) });
    }
    return H;
  }
  function be(s, u, m, b, A, H) {
    const W = (m.b - u.a) / te, U = (st) => ((st - u.a) / te).toFixed(3), N = 80, K = 32, $ = [];
    for (const st = new Date(u.a - la); st.getTime() < m.b + la; st.setDate(st.getDate() + 1)) {
      const { rise: Pt, set: Ot } = Fn(s, new Date(st));
      Pt && Ot && $.push({ rise: Pt.getTime(), set: Ot.getTime() });
    }
    const ut = (st, Pt) => N - (N - K) * Math.sin(Math.PI * (Pt - st.rise) / (st.set - st.rise)), Rt = (st) => !$.some((Pt) => st >= Pt.rise && st <= Pt.set);
    let Tt = "", Mt = "", qt = "";
    $.forEach((st, Pt) => {
      const Ot = [];
      for (let St = st.rise; St <= st.set; St += 15 * De) Ot.push(U(St) + "," + ut(st, St).toFixed(2));
      Ot.push(U(st.set) + "," + N), Tt += '<polyline class="wbLineArc" points="' + Ot.join(" ") + '"/>';
      const he = $[Pt + 1];
      he && (Tt += '<rect class="wbLineNight" x="' + U(st.set) + '" y="0" width="' + ((he.rise - st.set) / te).toFixed(3) + '" height="100"/>'), [[st.rise, "↑"], [st.set, "↓"]].forEach(([St, ne]) => {
        St < u.a || St > m.b || (Mt += '<line class="wbLineEdge" x1="' + U(St) + '" x2="' + U(St) + '" y1="0" y2="100"/>', qt += '<span class="wbLineTime" style="left:' + H(St) + '">' + ne + " " + wt(Fe(new Date(St), s)) + "</span>");
      });
    });
    const Lt = $.find((st) => A >= st.rise && A <= st.set);
    return '<svg class="wbLineArt" viewBox="0 0 ' + W + ' 100" preserveAspectRatio="none" aria-hidden="true">' + Tt + Mt + '<line class="wbLineHorizon" x1="0" x2="' + W + '" y1="' + N + '" y2="' + N + '"/></svg>' + qt + (Lt ? '<span class="wbLineNow" style="left:' + H(A) + ";top:" + ut(Lt, A) + '%">' + vl("sunny", !1) + "</span>" : "") + b.filter((st) => st.entry && !st.now).map((st) => '<span class="wbLineGlyph' + st.edge + '" style="left:' + H(st.t) + '">' + vl(st.entry.condition ?? "cloudy", Rt(st.t)) + "</span>").join("");
  }
  function Yn(s, u) {
    delete tt.hourly;
    const m = it.hourlyView === "bars" ? "bars" : "strip", b = '<div class="wbHeader"><h2 class="wbTitle">' + wt(m === "bars" ? ht.nextDays : ht.nextHours) + '</h2><div class="wbSegments wbViews" role="group" aria-label="' + wt(ht.showAs) + '">' + ["strip", "bars"].map((St) => '<button aria-pressed="' + (St === m) + '" data-wb="hourly-view" data-view="' + St + '" data-wb-focus="hourly-view-' + St + '">' + wt(ht.views[St]) + "</button>").join("") + "</div></div>";
    if (m === "bars") return Zn(s, u, b);
    const A = ot("hourly"), H = Math.floor(Date.now() / De) * De, W = A.filter((St) => new Date(St.datetime).getTime() > H - te);
    if (!W.length) return "";
    const U = Un(W), N = U.includes(it.hourlyMode) ? it.hourlyMode : "temperature", K = ja(s, A, H);
    if (!K.length) return "";
    const $ = K[0], ut = K[K.length - 1], Rt = ($.b - $.a) / te, Tt = (St) => "calc(var(--wb-u) * " + ((St - $.a) / te).toFixed(3) + ")", Mt = new Date($.a);
    Mt.setHours(6, 0, 0, 0), Mt.getTime() > $.a && Mt.setDate(Mt.getDate() - 1);
    const qt = Math.ceil((ut.b - Mt.getTime()) / la);
    p !== "line" && (tt.hourly = { segs: Lo(Mt, A, qt), seed: Mt.getDate(), columns: qt });
    const Lt = (St) => St === $.a ? " wbFirst" : St === ut.b ? " wbLast" : "", st = [];
    for (let St = $.a; St < ut.b; ) {
      const ne = new Date(St);
      ne.setHours(24, 0, 0, 0);
      const oe = Math.min(ne.getTime(), ut.b);
      st.push({ a: St, b: oe, label: aa(s, { datetime: new Date(St).toISOString() }), page: K.find((Ke) => Ke.a >= St && Ke.a < oe) || K.find((Ke) => Ke.a < oe && Ke.b > St) }), St = oe;
    }
    const Pt = H > $.a && H < ut.b ? Math.floor((H - $.a) / (2 * te)) * 2 : 0, Ot = [];
    for (let St = $.a; St <= ut.b; St += te) {
      const ne = new Date(St), oe = Lt(St);
      !oe && ne.getHours() % Yh || !oe && (Math.abs($.a - St) < 2 * te || Math.abs(ut.b - St) < 2 * te) || H >= $.a && Math.abs(St - H) < 1.5 * te && !oe || Ot.push({ t: St, edge: oe, label: Fe(ne, s), entry: St >= H - te ? A.find((Ke) => new Date(Ke.datetime).getTime() === St) : void 0 });
    }
    H > $.a && H < $.b && Ot.push({ t: H, edge: H - $.a < te ? " wbFirst" : $.b - H < te ? " wbLast" : "", label: ht.now, entry: W[0], now: !0 });
    const he = (St, ne) => '<span class="wbMark' + St.edge + (St.now ? " wbNowMark" : "") + '" style="left:' + Tt(St.t) + '">' + ne + "</span>";
    return '<div class="wbCard wbHc wbHourly">' + b + (U.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + U.map((St) => '<button aria-pressed="' + (St === N) + '" data-wb="hourly-mode" data-mode="' + St + '" data-wb-focus="hourly-mode-' + St + '">' + wt(ht.modes[St]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll wbPaged" tabindex="0" aria-label="' + wt(ht.nextHours) + '" data-span="' + Rt + '" data-start="' + Pt + '"><div class="wbStrip" style="--wb-u:calc(100cqw / ' + Rt + ");width:calc(var(--wb-u) * " + (ut.b - $.a) / te + ')">' + // a stop every two hours (Matt, 1 Nov): a swipe settles on one, a flick runs on past several
    [...Array(Math.floor((ut.b - $.a) / (2 * te)) + 1)].map((St, ne) => '<i class="wbSnap" style="left:' + Tt($.a + ne * 2 * te) + '"></i>').join("") + '<div class="wbDays">' + st.map((St, ne) => {
      var oe;
      return '<span class="wbDaySpan" style="width:calc(var(--wb-u) * ' + ((St.b - St.a) / te).toFixed(3) + ')"><button class="wbDayName" data-wb="hours-day" data-hours="' + (ne === 0 ? Pt : ((((oe = St.page) == null ? void 0 : oe.a) ?? St.a) - $.a) / te) + '" data-wb-focus="hours-day-' + ne + '">' + wt(St.label) + "</button></span>";
    }).join("") + '</div><div class="wbRow wbTimes">' + Ot.map((St) => he(St, wt(St.label))).join("") + "</div>" + (p === "line" ? '<div class="wbSky wbLineSky">' + be(s, $, ut, Ot, H, Tt) : '<div class="wbSky"><div class="wbSkyArt" style="left:' + Tt(Mt.getTime()) + ";width:calc(var(--wb-u) * " + qt * 24 + ')"><canvas data-wb-strip="hourly"' + (p === "smooth" ? "" : ' class="wbPixels"') + "></canvas></div>") + (H > $.a ? '<i class="wbPast" style="width:' + Tt(Math.min(H, ut.b)) + '"></i><i class="wbNowLine" style="left:' + Tt(H) + '"></i>' : "") + st.slice(1).map((St) => '<i class="wbMidnight" style="left:' + Tt(St.a) + '"></i>').join("") + '</div><div class="wbRow wbValues">' + Ot.map((St) => {
      if (!St.entry) return "";
      const [ne, oe] = Wi(s, St.entry, N);
      return he(St, '<span class="wbPrimaryV">' + wt(ne) + '</span><span class="wbSecondary">' + wt(oe) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function Br(s) {
    const u = Zh, m = u.findIndex(([N]) => N >= s);
    if (m <= 0) return "rgb(" + u[m < 0 ? u.length - 1 : 0][1].join(",") + ")";
    const [b, A] = u[m - 1], [H, W] = u[m], U = (s - b) / (H - b);
    return "rgb(" + A.map((N, K) => Math.round(N + (W[K] - N) * U)).join(",") + ")";
  }
  function Zn(s, u, m) {
    var Tt;
    const b = ot("daily").filter((Mt) => ie(Mt.templow) && ie(Mt.temperature)).slice(0, 7);
    if (!b.length) return "";
    const A = Math.min(...b.map((Mt) => Number(Mt.templow))), H = Math.max(...b.map((Mt) => Number(Mt.temperature))), W = Math.max(1, H - A), U = (Mt) => Math.max(0, Math.min(100, (Mt - A) / W * 100)).toFixed(2), N = /F/.test(Go(s, rt(s, "daily"), "temperature")), K = (Mt) => N ? (Mt - 32) / 1.8 : Mt, $ = "linear-gradient(90deg," + [0, 0.25, 0.5, 0.75, 1].map((Mt) => Br(K(A + Mt * W)) + " " + Mt * 100 + "%").join(",") + ")", ut = (Tt = Se(s, u, "temperature")) == null ? void 0 : Tt.value;
    return '<div class="wbCard wbHc wbHourly wbBars' + (Un(ot("hourly").filter((Mt) => new Date(Mt.datetime).getTime() > Date.now() - te)).length > 1 ? " wbTabbed" : "") + '">' + m + '<div class="wbDayBars" role="list">' + b.map((Mt, qt) => {
      const Lt = aa(s, Mt), st = In(new Date(Mt.datetime), /* @__PURE__ */ new Date()), Pt = Number(Mt.templow), Ot = Number(Mt.temperature);
      return '<div class="wbDayBar" role="listitem" aria-label="' + wt(ze(ht.rangeRow, { day: Lt, low: pe(s, Pt), high: pe(s, Ot) })) + '"><span class="wbRangeDay">' + wt(Lt) + "</span>" + Oe(Mt.condition, 40, !1, "r" + qt) + '<span class="wbRangeLo">' + wt(pe(s, Pt)) + '</span><span class="wbRangeTrack"><i class="wbRangeFill" style="background:' + $ + ";clip-path:inset(0 " + (100 - U(Ot)) + "% 0 " + U(Pt) + '% round 4px)"></i>' + (st && ie(ut) ? '<i class="wbRangeNow" style="left:' + U(Number(ut)) + '%"></i>' : "") + '</span><span class="wbRangeHi">' + wt(pe(s, Ot)) + "</span></div>";
    }).join("") + "</div></div>";
  }
  const Rr = [[-120, "#0d1530"], [-60, "#1c2550"], [-15, "#c9707a"], [30, "#f2a46a"], [60, "#b49bc8"], [90, "#5aa5e6"]], Pr = [[-90, "#5aa5e6"], [-60, "#a99bd0"], [-30, "#f0a54a"], [15, "#c45a5a"], [60, "#3a2a5c"], [120, "#0d1530"]], Vt = (s, u) => {
    if (u <= s[0][0]) return s[0][1];
    for (let m = 1; m < s.length; m++) if (u <= s[m][0]) {
      const [b, A] = s[m - 1], [H, W] = s[m];
      return Fm(A, W, (u - b) / (H - b));
    }
    return s[s.length - 1][1];
  }, kt = (s, u, m) => {
    if (!u || !m) return Rr[5][1];
    const b = (s.getTime() - m.getTime()) / De;
    return b >= -90 ? Vt(Pr, b) : Vt(Rr, (s.getTime() - u.getTime()) / De);
  }, Ae = (s) => (s >= 60 ? Math.floor(s / 60) + "h " : "") + s % 60 + "m";
  function Jt(s) {
    const u = It, { rise: m, set: b } = Fn(s, u), A = m && b ? Math.round((b.getTime() - m.getTime()) / De) : 0, H = Math.floor(A / 60), W = A % 60, U = (he) => he ? Fe(he, s) : "–", N = new Date(u);
    N.setDate(N.getDate() + 1);
    const K = Fn(s, N), $ = K.rise && K.set ? Math.round((K.set.getTime() - K.rise.getTime()) / De) : 0, ut = new Date(u);
    ut.setDate(ut.getDate() - 1);
    const Rt = !!(m && b && u >= m && u <= b), Tt = !!(m && u < m), Mt = Rt ? m : Tt ? Fn(s, ut).set : b, qt = Rt ? b : Tt ? m : K.rise, Lt = Mt && qt ? Math.min(1, Math.max(0, (u.getTime() - Mt.getTime()) / (qt.getTime() - Mt.getTime()))) : 0, st = qt ? Math.max(0, Math.round((qt.getTime() - u.getTime()) / De)) : 0, Pt = qt ? Ae(st) : "–", Ot = Rt ? ht.untilSunset : ht.untilSunrise;
    return Qe({
      icon: ee.sunny,
      name: ht.sun,
      sub: A ? ze(ht.daylightShort, { hours: H, minutes: W }) : void 0,
      cls: "wbSunTile",
      callouts: [[ht.callout.riseTomorrow, U(K.rise)], [ht.callout.setTomorrow, U(K.set)], ...$ ? [[ht.callout.dayTomorrow, Math.floor($ / 60) + "h " + $ % 60 + "m"]] : []],
      zone: '<div class="wbSunZone" style="background:' + kt(u, m, b) + '"><svg class="wbSunTrack" data-up="' + (Rt ? 1 : 0) + '" data-f="' + Lt.toFixed(4) + '" aria-hidden="true"></svg><div class="wbSunCount"><span class="wbSunLeft">' + wt(Pt) + '</span><span class="wbSunWord">' + wt(Ot) + '</span></div><span class="wbSunAt wbSunRise">' + wt(U(m)) + '</span><span class="wbSunAt wbSunSet">' + wt(U(b)) + "</span></div>" + // at M, the countdown alone (Matt, 10 Nov): M's zone has room for one line
      _i(Ca(Pt, ""))
    });
  }
  const Ye = 22;
  function eo(s) {
    const u = Math.round(s.clientWidth), m = Math.round(s.clientHeight), b = Ye, A = b / 2, H = u + "x" + m + ":" + s.dataset.f + ":" + s.dataset.up;
    if (u < b * 3 || m < b * 3 || s.dataset.drawn === H) return;
    s.dataset.drawn = H;
    const W = "M" + A + " " + (m - b) + "V" + b + "A" + A + " " + A + " 0 0 1 " + b + " " + A + "H" + (u - b) + "A" + A + " " + A + " 0 0 1 " + (u - A) + " " + b + "V" + (m - b), U = "M" + (u - A) + " " + (m - b) + "A" + A + " " + A + " 0 0 1 " + (u - b) + " " + (m - A) + "H" + b + "A" + A + " " + A + " 0 0 1 " + A + " " + (m - b), N = 16, K = 6, $ = "M" + N + " 0H" + (u - N) + "A" + N + " " + N + " 0 0 1 " + u + " " + N + "V" + (m - N) + "A" + N + " " + N + " 0 0 1 " + (u - N) + " " + m + "H" + N + "A" + N + " " + N + " 0 0 1 0 " + (m - N) + "V" + N + "A" + N + " " + N + " 0 0 1 " + N + " 0ZM" + (b + K) + " " + b + "A" + K + " " + K + " 0 0 0 " + b + " " + (b + K) + "V" + (m - b - K) + "A" + K + " " + K + " 0 0 0 " + (b + K) + " " + (m - b) + "H" + (u - b - K) + "A" + K + " " + K + " 0 0 0 " + (u - b) + " " + (m - b - K) + "V" + (b + K) + "A" + K + " " + K + " 0 0 0 " + (u - b - K) + " " + b + "Z", ut = s.dataset.up === "1", Rt = Number(s.dataset.f) || 0, Tt = "http://www.w3.org/2000/svg";
    s.setAttribute("viewBox", "0 0 " + u + " " + m);
    const Mt = document.createElementNS(Tt, "path");
    Mt.setAttribute("d", ut ? W : U), s.replaceChildren(Mt);
    const qt = Mt.getTotalLength(), Lt = Mt.getPointAtLength(qt * Rt), st = ut ? qt : 0;
    s.innerHTML = '<defs><mask id="' + y + 'sun-day"><path d="' + W + '" fill="none" stroke="#fff" stroke-width="' + b * 2 + '"></path></mask><mask id="' + y + 'sun-done"><path d="' + W + '" fill="none" stroke="#fff" stroke-width="' + b * 2 + '" stroke-dasharray="' + (ut ? (st * Rt).toFixed(1) + " " + (st + 1).toFixed(1) : "0 99999") + '"></path></mask></defs><path class="wbSunBand" fill-rule="evenodd" d="' + $ + '"></path><path class="wbSunBand wbSunDay" fill-rule="evenodd" d="' + $ + '" mask="url(#' + y + 'sun-day)"></path><path class="wbSunBand wbSunDone" fill-rule="evenodd" d="' + $ + '" mask="url(#' + y + 'sun-done)"></path><circle class="wbSunDot' + (ut ? "" : " wbSunNight") + '" cx="' + Lt.x.toFixed(1) + '" cy="' + Lt.y.toFixed(1) + '" r="' + A + '"></circle>';
  }
  const ao = typeof ResizeObserver == "function" ? new ResizeObserver((s) => s.forEach((u) => eo(u.target))) : null;
  function ji() {
    ao == null || ao.disconnect(), _.querySelectorAll("svg.wbSunTrack").forEach((s) => {
      eo(s), ao == null || ao.observe(s);
    });
  }
  function Kn(s, u, m) {
    const b = (W) => y + "moon-" + W, A = s > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + b("terminator") + ')" d="' + qm(61, 61, 57.9, s) + '"' + (u ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", H = (W, U, N, K, $, ut) => '<filter id="' + b(W) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + U + '" numOctaves="' + N + '" seed="' + K + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((Rt) => "<feFunc" + Rt + ' type="linear" slope="' + $ + '" intercept="' + ut + '"></feFunc' + Rt + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + b("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + b("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + b("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + b("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + b("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + H("mottle", "0.045", 4, 3, 1.8, -0.4) + H("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + b("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + b("fill") + ')"></circle><g' + (m ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + b("soften") + ')">' + Vm.map(([W, U, N, K, $, ut]) => '<ellipse cx="' + W + '" cy="' + U + '" rx="' + N + '" ry="' + K + '" fill-opacity="' + ut + '" transform="rotate(' + $ + " " + W + " " + U + ')"></ellipse>').join("") + "</g>" + zm.map(([W, U, N]) => '<circle class="wbCrater" cx="' + W + '" cy="' + U + '" r="' + N + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + b("glow") + ')">' + Gm.map(([W, U]) => '<line x1="54.4" y1="95" x2="' + W + '" y2="' + U + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + b("glow") + ')">' + Fd.map(([W, U, N]) => '<circle cx="' + W + '" cy="' + U + '" r="' + N * 2 + '"></circle>').join("") + "</g>" + Fd.map(([W, U, N]) => '<circle class="wbBrightCenter" cx="' + W + '" cy="' + U + '" r="' + N + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + b("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + b("grain") + ')"></rect>' + A + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function Hr(s) {
    const u = F, m = jn(s), b = (m == null ? void 0 : m.lat) ?? 0, A = xl(u), H = Od(s), W = H ? s.states[H] : void 0, U = bn(W) && dm.includes(W.state) ? W.state : Em(A.phase), { rise: N, set: K } = m ? Dm(u, m.lat, m.lon) : {}, $ = A.phase > 0.5 != b < 0, ut = Ut(Math.round(A.fraction * 100), s.locale) + "%", Rt = N ?? K;
    return Rt && Fe(Rt, s), Qe({
      icon: ee.night,
      name: ht.moon,
      sub: ht.phases[U],
      callouts: [...N ? [[ht.callout.moonrise, Fe(N, s)]] : [], ...K ? [[ht.callout.moonset, Fe(K, s)]] : [], [ht.callout.lit, ut]],
      // at M, how much of it is lit (Matt, 10 Nov)
      zone: '<div class="wbMoonBox">' + Kn(A.fraction, $, b < 0) + "</div>" + _i(Ca(Ut(Math.round(A.fraction * 100), s.locale), "%"))
    });
  }
  function Vi(s, u) {
    var Mt;
    const m = Se(s, u, "wind_speed");
    if (!m || !ie(m.value)) return "";
    const b = Se(s, u, "wind_gust_speed"), A = Se(s, u, "wind_bearing"), H = A && ie(A.value) ? Number(A.value) : void 0, W = Hm(Number(m.value), (Mt = m.stateObj.attributes) == null ? void 0 : Mt.wind_speed_unit), U = Hi(s, m.stateObj, "wind_speed", m.value), N = H !== void 0 ? ht.cardinal[cm[((H + 11.25) / 22.5 | 0) % 16]] : void 0, K = b ? Rd(s, b.stateObj, "wind_gust_speed", b.value) : void 0, $ = [N ? ze(ht.windFrom, { direction: N }) : void 0, W !== void 0 ? W + " " + ht.beaufort : void 0].filter(Boolean).join(" · ") || K, ut = (qt, Lt) => {
      const st = (qt - 90) * Math.PI / 180;
      return [100 + Lt * Math.cos(st), 100 + Lt * Math.sin(st)];
    }, Rt = Array.from({ length: 36 }, (qt, Lt) => Lt * 10).map((qt) => {
      const Lt = qt % 90 === 0, [st, Pt] = ut(qt, 97), [Ot, he] = ut(qt, Lt ? 83 : 89);
      return '<line class="wbTick' + (Lt ? " wbMajor" : "") + '" x1="' + st + '" y1="' + Pt + '" x2="' + Ot + '" y2="' + he + '"></line>';
    }).join(""), Tt = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([qt, Lt]) => {
      const [st, Pt] = ut(Lt, 64);
      return '<text class="wbLetter' + (qt === "n" ? " wbNorth" : "") + '" x="' + st + '" y="' + Pt + '">' + wt(ht.cardinal[qt]) + "</text>";
    }).join("");
    return Qe({ icon: ee.windy, name: ht.wind, sub: $, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + Rt + Tt + (H !== void 0 ? '<path class="wbMarker" transform="rotate(' + H + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + wt(U.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + wt(U.unit) + "</text></svg>" });
  }
  const zi = (s, u) => {
    if (s < 3) return ht.advice.fine;
    if (s < 8) return ht.advice.sunblock;
    const m = Date.now(), b = ot("hourly").find((A) => A.uv_index != null && new Date(A.datetime).getTime() > m && A.uv_index < 6);
    return b && new Date(b.datetime).toDateString() === (/* @__PURE__ */ new Date()).toDateString() ? ze(ht.advice.avoidUntil, { time: Fe(new Date(b.datetime), u) }) : ht.advice.avoidToday;
  };
  function wn(s, u) {
    const m = Se(s, u, "uv_index");
    if (!m || !ie(m.value)) return "";
    const b = Number(m.value), A = ht.uvLevel[Pd(b)], H = /* @__PURE__ */ new Date();
    H.setHours(23, 59, 59, 999);
    const W = ot("hourly").filter(($) => $.uv_index != null && new Date($.datetime) > /* @__PURE__ */ new Date() && new Date($.datetime) <= H).reduce(($, ut) => !$ || ut.uv_index > $.uv ? { uv: ut.uv_index, time: new Date(ut.datetime) } : $, void 0), U = pm[Pd(b)], N = 216 * Math.min(1, Math.max(0.08, 0.4 + (b - 4.5) * (0.5 / 5.5))), K = '<svg class="wbUvArt" viewBox="0 0 216 198" preserveAspectRatio="xMinYMin slice" aria-hidden="true"><defs><radialGradient id="' + y + 'uv-sun" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="' + N.toFixed(1) + '"><stop offset="0" style="stop-color:color-mix(in srgb, ' + U + ' 28%, #fff6dd)"></stop><stop offset=".62" style="stop-color:color-mix(in srgb, ' + U + ' 62%, #fff6dd)"></stop><stop offset="1" style="stop-color:' + U + '"></stop></radialGradient></defs><circle class="wbUvSun" cx="0" cy="0" r="' + N.toFixed(1) + '" fill="url(#' + y + 'uv-sun)"></circle></svg><div class="wbUvBig"><span class="wbUvNum">' + wt(Ut(Math.round(b), s.locale)) + '</span><span class="wbUvWord">' + wt(A) + "</span></div>" + _i(Ca(Ut(Math.round(b), s.locale), ""));
    return Qe({
      icon: ee.sunnyAlert,
      name: ht.metrics.uv_index,
      sub: W && W.uv > b ? ze(ht.uvPeak, { level: A, uv_index: Ut(Math.round(W.uv), s.locale), time: Fe(W.time, s) }) : A,
      zone: K,
      cls: "wbUv",
      callouts: [zi(b, s), [ht.callout.now, Ut(Math.round(b), s.locale) + " · " + A], [ht.callout.peak, W && W.uv > b ? Ut(Math.round(W.uv), s.locale) + " at " + Fe(W.time, s) : ht.callout.now]]
    });
  }
  function Or(s) {
    const u = ot("daily")[0], m = z.temperatureHistory;
    if (!u || new Date(u.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !ie(u.temperature) || !m || m.dailyHighs.length < tm) return "";
    const b = Number(u.temperature), A = m.dailyHighs.reduce((Lt, st) => Lt + st, 0) / m.dailyHighs.length, H = Math.round(b - A) || 0, W = H > 0 ? "above" : H < 0 ? "below" : "same", U = [...m.days, { date: /* @__PURE__ */ new Date(), high: b, today: !0 }], N = U.map((Lt) => Lt.high).concat(A), K = Math.min(...N) - 1, $ = Math.max(...N) + 1, ut = (Lt) => (1 - (Lt - K) / ($ - K)) * 100, Rt = (Lt) => (Lt + 0.5) / U.length * 100, Tt = U.map((Lt, st) => [Rt(st), ut(Lt.high)]), Mt = Tt.map(([Lt, st], Pt) => (Pt ? "L" : "M") + Lt.toFixed(2) + " " + st.toFixed(2)).join(""), qt = '<div class="wbCompareBars wbTrend" aria-hidden="true"><div class="wbTrendPlot"><svg viewBox="0 0 100 100" preserveAspectRatio="none"><defs><linearGradient id="' + y + 'trend" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--primary)" stop-opacity=".28"></stop><stop offset="1" style="stop-color:var(--primary)" stop-opacity="0"></stop></linearGradient></defs><path class="wbTrendArea" d="' + Mt + "L" + Tt[Tt.length - 1][0].toFixed(2) + " 100L" + Tt[0][0].toFixed(2) + ' 100Z" fill="url(#' + y + 'trend)"></path><line class="wbAvgLine" x1="0" x2="100" y1="' + ut(A).toFixed(2) + '" y2="' + ut(A).toFixed(2) + '" vector-effect="non-scaling-stroke"></line><path class="wbTrendLine" d="' + Mt + '" vector-effect="non-scaling-stroke"></path></svg><span class="wbTrendAvg" style="top:' + ut(A).toFixed(2) + '%">' + wt(pe(s, A)) + "</span>" + U.map((Lt, st) => {
      const Pt = Lt.today ? " wbToday" : "", Ot = "left:" + Rt(st).toFixed(2) + "%;top:" + ut(Lt.high).toFixed(2) + "%";
      return '<i class="wbTrendDot' + Pt + '" style="' + Ot + '"></i><span class="wbAvgValue' + Pt + '" style="' + Ot + '">' + wt(pe(s, Lt.high)) + "</span>";
    }).join("") + '</div><div class="wbTrendDays">' + U.map((Lt, st) => '<span class="wbAvgDay' + (Lt.today ? " wbToday" : "") + '" style="left:' + Rt(st).toFixed(2) + '%">' + wt(ym(Lt.date, s)) + "</span>").join("") + "</div></div>";
    return Qe({
      icon: ee.chartLine,
      name: ht.metrics.compared_to_average,
      double: !0,
      sub: ze(ht.highsLastDays, { days: m.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (H > 0 ? "+" : "") + wt(pe(s, H)) + '</div><div class="wbCompareWords">' + wt(ht.average[W]) + '</div><div class="wbCompareTemps">' + wt(ze(ht.todayVsAverage, { today: pe(s, b), average: pe(s, A) })) + "</div></div>" + qt + "</div>"
    });
  }
  function Gi(s, u) {
    const m = Se(s, u, "humidity");
    if (!m || !ie(m.value)) return "";
    const b = Se(s, u, "dew_point"), A = Math.max(0, Math.min(100, Number(m.value)));
    return Qe({
      icon: ee.waterPercent,
      name: ht.metrics.humidity,
      sub: b && ie(b.value) ? ze(ht.dewPoint, { dew_point: pe(s, b.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + A + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + Ca(Ut(Math.round(Number(m.value)), s.locale), "%") + "</div>"
    });
  }
  function Ko(s, u) {
    var Lt, st, Pt;
    const m = Se(s, u, "pressure");
    if (!m || !ie(m.value)) return "";
    const b = Number(m.value), A = (Lt = m.stateObj.attributes) == null ? void 0 : Lt.pressure_unit, H = Hd(b, A), W = ((st = z.pressureHistory) == null ? void 0 : st.entityId) === m.stateObj.entity_id ? Hd(z.pressureHistory.value, A) : void 0;
    let U;
    if (H !== void 0 && W !== void 0) {
      const Ot = H - W;
      U = Ot >= Md ? "rising" : Ot <= -Md ? "falling" : "steady";
    }
    const N = Hi(s, m.stateObj, "pressure", Math.round(b)), K = m.stateObj, $ = (Ot) => A === "inHg" ? Math.round(Ot * 100) / 100 : Math.round(Ot), ut = (Ot) => Rd(s, K, "pressure", $(Ot)), Rt = W !== void 0 ? z.pressureHistory.value : void 0, Tt = Rt !== void 0 ? $(b - Rt) : void 0, Mt = (Pt = K.entity_id) != null && Pt.startsWith("weather.") ? ot("hourly").find((Ot) => ie(Ot.pressure) && new Date(Ot.datetime).getTime() >= Date.now() + 3 * te - 30 * De) : void 0, qt = [
      ...U ? [ht.advice[U]] : [],
      ...Rt !== void 0 ? [[ht.callout.hoursAgo, ut(Rt)], [ht.callout.change, (Tt > 0 ? "+" : Tt < 0 ? "−" : "") + ut(Math.abs(Tt))]] : [],
      ...Mt ? [[ht.callout.inHours, ut(Number(Mt.pressure))]] : []
    ];
    return Qe({
      icon: ee.gauge,
      name: ht.metrics.pressure,
      sub: U ? ht.pressure[U] : void 0,
      cls: "wbPressure",
      callouts: qt,
      zone: '<div class="wbTapeRow"><div class="wbTapeValue">' + Ca(N.number) + '<span class="wbTapeUnit">' + wt(N.unit) + "</span></div>" + (H !== void 0 ? Xn(s, H) : "") + "</div>"
    });
  }
  function Xn(s, u) {
    const A = Math.floor(u) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (H, W) => A + W).map((H) => {
      const W = 100 - (H - u) * 9;
      if (W < 22 || W > 178) return "";
      const U = H % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(W - 100) / 100) + '"><line class="wbTapeTick" x1="' + (U ? 2 : 8) + '" x2="26" y1="' + W + '" y2="' + W + '"></line>' + (U ? '<text class="wbTapeLabel" x="33" y="' + W + '">' + wt(Ut(H, s.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + wt(ht.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + wt(ht.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function vn(s) {
    var N, K;
    const u = kl(s), m = u ? s.states[u] : void 0;
    if (!m || ((N = z.rain) == null ? void 0 : N.entityId) !== u || !ie(z.rain.change)) return "";
    const b = ((K = m.attributes) == null ? void 0 : K.unit_of_measurement) ?? "", A = rt(s, "hourly"), H = Date.now() + la, W = ot("hourly").filter(($) => $.precipitation != null && new Date($.datetime).getTime() <= H), U = W.reduce(($, ut) => $ + Number(ut.precipitation), 0);
    return Qe({
      icon: ee.rainy,
      name: ht.metrics.precipitation,
      sub: A && W.length ? ze(ht.rainExpected, { amount: Ut(U, s.locale, { maximumFractionDigits: 1 }) + " " + Go(s, A, "precipitation") }) : ht.rainLast24h,
      visual: Ca(Ut(z.rain.change, s.locale, { maximumFractionDigits: 1 }), b) + (W.length > 1 ? jm(W.map(($) => ({ label: "", value: Number($.precipitation) }))) : "")
    });
  }
  function Nr(s, u) {
    const m = Se(s, u, "visibility");
    if (!m || !ie(m.value)) return "";
    const b = Hi(s, m.stateObj, "visibility", m.value), A = Rh(Number(m.value), Go(s, m.stateObj, "visibility"));
    return Qe({
      icon: ee.eyeOutline,
      name: ht.metrics.visibility,
      sub: ht.visibilityLevel[Ph(A)],
      visual: '<div class="wbSea"><canvas class="wbSeaArt" data-wb-sea="' + A + '" aria-hidden="true"></canvas><div class="wbSeaFact">' + wt(Ui(s, A)) + '</div><div class="wbSeaValue">' + Ca(b.number, b.unit) + "</div></div>"
    });
  }
  function Ui(s, u) {
    var H;
    const m = Bh((H = s.config) == null ? void 0 : H.country, u);
    if (m) return ze(ht.visibilityLandmarks, { from: m.from, to: m.to });
    const b = u / om * 60;
    if (b < 60) {
      const W = b < 5 ? Math.max(1, Math.round(b)) : 5 * Math.round(b / 5);
      if (W < 60) return ze(ht.walkMinutes, { minutes: Ut(W, s.locale) });
    }
    const A = Math.max(1, Math.round(b / 30) / 2);
    return A < 8 ? ze(ht.walkHours, { hours: Ut(A, s.locale) }) : ht.walkDay;
  }
  function Yi(s) {
    z.categories === void 0 && Wa(s);
    const u = Me(s), m = (N) => N.map((K) => s.states[K]).filter(bn), b = m(u.air), A = m(u.pollen);
    if (!b.length && !A.length) return "";
    const H = [...b, ...A], W = (N) => A.includes(N) ? ee.flower : ee.airFilter, U = H.find((N) => N.entity_id === it.aq);
    return U ? oo(s, U, W(U)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + wt(ht.airQuality) + '</h2></div><div class="wbAqTiles">' + H.map((N) => '<button class="wbTile" data-wb="aq-open" data-entity="' + wt(N.entity_id) + '"><span class="wbChip">' + So(W(N)) + '</span><span class="wbText"><span class="wbName">' + wt(Vo(s, N)) + '</span><span class="wbSub">' + wt(xo(s, N)) + "</span></span></button>").join("") + "</div></div>";
  }
  function oo(s, u, m) {
    var $, ut, Rt;
    const b = (($ = u.attributes) == null ? void 0 : $.unit_of_measurement) ?? "", A = ((ut = u.attributes) == null ? void 0 : ut.device_class) === "pm25" && b === _d && ie(u.state), H = Number(u.state), W = A ? Ci(H) : void 0, U = ((Rt = z.aqHistory) == null ? void 0 : Rt.entityId) === u.entity_id ? z.aqHistory.points : void 0, N = (Tt) => Math.min(100, Math.max(0, Tt / Ai * 100));
    let K;
    if (U && U.length > 1) K = Id(U, (Tt) => (Ut(Tt, s.locale, { maximumFractionDigits: 1 }) + " " + b).trim());
    else if (W) {
      let Tt = 0;
      const Mt = Rp.map(([qt, Lt]) => {
        const st = N(Math.min(Lt, Ai)), Pt = Cd[qt] + " " + Tt + "% " + st + "%";
        return Tt = st, Pt;
      });
      K = '<div class="wbScale" role="meter" aria-label="' + wt(ht.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + Ai + '" aria-valuenow="' + H + '" style="background:linear-gradient(to right, ' + Mt.join(", ") + ')"><i style="left:' + N(H) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + Ai + " " + _d + "</span></div>";
    } else K = '<span class="wbGraphNote"><span>' + wt(xo(s, u)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + So(m) + '</span><span class="wbText"><span class="wbName">' + wt(Vo(s, u)) + '</span><span class="wbSub">' + wt(xo(s, u)) + (W ? " · " + wt(ht.aqLevel[W]) : "") + '</span></span><button class="wbBack" title="' + wt(ht.back) + '" data-wb="aq-close">' + So(ee.back) + '</button></div><div class="wbGraph">' + K + "</div></div></div>";
  }
  const Zi = { good: "Good", fair: "Fair", moderate: "Moderate", poor: "Poor", very_poor: "Very poor", extremely_poor: "Extremely poor" }, yn = (s) => s <= 50 ? "Good" : s <= 100 ? "Moderate" : s <= 150 ? "Unhealthy for some" : s <= 200 ? "Unhealthy" : s <= 300 ? "Very unhealthy" : "Hazardous";
  function Ze(s) {
    const u = /* @__PURE__ */ new Map();
    return Object.values(s.states || {}).filter((m) => {
      var b;
      return m.entity_id.startsWith("sensor.") && Ii.includes(((b = m.attributes) == null ? void 0 : b.device_class) ?? "") && bn(m) && Vn(s, m.entity_id);
    }).sort((m, b) => m.entity_id.localeCompare(b.entity_id)).forEach((m) => {
      u.has(m.attributes.device_class) || u.set(m.attributes.device_class, m);
    }), Ii.map((m) => u.get(m)).filter(Boolean);
  }
  const xn = (s) => Object.values(s.states || {}).filter((u) => {
    var m, b;
    return u.entity_id.startsWith("sensor.") && bn(u) && Vn(s, u.entity_id) && (((b = (m = s.entities) == null ? void 0 : m[u.entity_id]) == null ? void 0 : b.translation_key) ?? u.entity_id).toLowerCase().includes("pollen");
  }), Da = ["none", "very_low", "low", "moderate", "high", "very_high"], Do = (s) => ie(s.state) ? Number(s.state) : Da.indexOf(String(s.state).toLowerCase().replace(/ /g, "_")), ca = (s) => {
    const u = String(s).replace(/_/g, " ");
    return u[0].toUpperCase() + u.slice(1);
  }, Xo = (s, u, m) => {
    const b = m ? s === "aqi" ? u <= 50 ? "good" : u <= 100 ? "moderate" : "poor" : s === "pm25" ? Ci(u) : null : null;
    return b === "good" || b === "fair" ? ht.advice.window : b === "moderate" || b === null ? ht.advice.fine : ht.advice.closed;
  }, Ir = ["good", "fair", "moderate", "poor", "very_poor", "extremely_poor"], Ee = (s) => Ir[s <= 50 ? 0 : s <= 100 ? 1 : s <= 150 ? 2 : s <= 200 ? 3 : s <= 300 ? 4 : 5], Eo = "M43 43q1 8 0 10M77 42q1 8 -1 10", Va = {
    good: [Eo, "M34 69Q61 98 86 67"],
    fair: [Eo, "M40 74Q61 89 81 72"],
    moderate: [Eo, "M41 79Q60 76 80 81"],
    poor: [Eo, "M41 85Q60 73 80 86"],
    very_poor: ["M36 38l13 5M84 37l-13 5M43 48q1 7 0 9M77 47q1 7 -1 9", "M37 90Q60 64 84 89"],
    extremely_poor: ["M37 41l12 11M49 41l-12 11M71 40l12 11M83 40l-12 11", "M36 84q6 -8 12 0t12 0t12 0t12 0"]
  }, Fr = (s) => '<svg class="wbAqFace" viewBox="0 0 120 120" aria-hidden="true"><path d="M60 9C89 8 112 32 110 61C109 90 87 112 58 111C30 110 9 88 10 59C11 31 33 10 63 12"></path><path class="wbAqEyes" d="' + Va[s][0] + '"></path><path d="' + Va[s][1] + '"></path></svg>';
  function qr(s) {
    const u = Ze(s), m = u[0];
    if (!m) return Qe({ icon: ee.airFilter, name: ht.airQuality, sub: ht.noAir, visual: Ca("–", ""), cls: "wbBase" });
    const b = m.attributes.device_class, A = Number(m.state), H = ie(m.state), W = b === "aqi" && H ? yn(A) : b === "pm25" && H ? Zi[Ci(A)] : xo(s, m), U = H ? Ut(Math.round(A), s.locale) : String(m.state), N = b === "aqi" ? "AQI" : m.attributes.unit_of_measurement || "", K = H && b === "aqi" ? Ee(A) : H && b === "pm25" ? Ci(A) : null;
    return Qe(K ? {
      icon: ee.airFilter,
      name: ht.airQuality,
      sub: W,
      cls: "wbAqSmile",
      zone: '<div class="wbAqFill" style="background:' + Cd[K] + '">' + Fr(K) + '<div class="wbAqBig"><span class="wbAqNum">' + wt(U) + "</span>" + (N ? '<span class="wbAqUnit">' + wt(N) + "</span>" : "") + "</div></div>" + _i(Ca(U, N)),
      callouts: [Xo(b, A, H), ...u.slice(1, 3).map(($) => [Vo(s, $), xo(s, $)])]
    } : {
      icon: ee.airFilter,
      name: ht.airQuality,
      sub: W,
      cls: "wbBase",
      zone: Ca(U, N),
      callouts: [Xo(b, A, H), ...u.slice(1, 3).map(($) => [Vo(s, $), xo(s, $)])]
    });
  }
  const Ki = [
    ["wbSeed", '<svg viewBox="0 0 22 30" aria-hidden="true"><path d="M11 28V11" fill="none" stroke="currentColor" stroke-width="1"></path><path d="M11 11L3 6M11 11L5 2.5M11 11L8.5 1M11 11L13.5 1M11 11L17 2.5M11 11L19 6" fill="none" stroke="currentColor" stroke-width=".8" stroke-linecap="round"></path><circle cx="11" cy="28.5" r="1.4" fill="currentColor"></circle></svg>'],
    ["wbGrain", '<svg viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="3.3" fill="currentColor"></circle><path d="M6 1.2v1.4M6 9.4v1.4M1.2 6h1.4M9.4 6h1.4M2.6 2.6l1 1M8.4 8.4l1 1M2.6 9.4l1-1M8.4 3.6l1-1" stroke="currentColor" stroke-width=".9" stroke-linecap="round"></path></svg>'],
    ["wbStem", '<svg viewBox="0 0 10 30" aria-hidden="true"><path d="M5 29Q3.6 18 5 8" fill="none" stroke="currentColor" stroke-width="1"></path><ellipse cx="5" cy="6" rx="2.3" ry="4.6" fill="currentColor"></ellipse></svg>']
  ], Xi = (s) => {
    const u = [1, 3, 5, 7, 10, 13][Math.max(0, Math.min(5, Number.isFinite(s) ? Math.round(s) : 0))];
    return '<div class="wbPollenAir" aria-hidden="true">' + Array.from({ length: u }, (m, b) => {
      const [A, H] = Ki[b % 3], W = 10 + b * 7 % 9, U = 2.6 + b * 5 % 4 * 0.4;
      return '<span class="wbFloat ' + A + '" style="top:' + (4 + b * 37 % 52) + "%;--x:" + (b * 29 % 90 + 4) + "%;--s:" + (0.8 + b * 13 % 5 / 10).toFixed(1) + ";animation-duration:" + W + "s;animation-delay:-" + (b * 2.3 % W).toFixed(1) + 's"><span class="wbPush"><span class="wbBob" style="animation-duration:' + U.toFixed(1) + "s;animation-delay:-" + (b * 0.7 % U).toFixed(1) + 's">' + H + "</span></span></span>";
    }).join("") + "</div>";
  };
  function $i(s) {
    const u = xn(s).sort((A, H) => Do(H) - Do(A));
    if (!u.length) return Qe({ icon: ee.flower, name: ht.pollen, sub: ht.noPollen, visual: Ca("–", ""), cls: "wbBase" });
    const m = u[0], b = (A) => ie(A.state) ? xo(s, A) : ca(A.state);
    return Qe({
      icon: ee.flower,
      name: ht.pollen,
      sub: Vo(s, m) + " · " + b(m),
      cls: "wbBase wbPollen",
      zone: Xi(Do(m)) + Ca(b(m), ""),
      callouts: u.slice(0, 3).map((A) => [Vo(s, A), b(A)])
    });
  }
  function kn(s) {
    var U;
    const u = Date.now(), m = ot("hourly").filter((N) => {
      const K = new Date(N.datetime).getTime();
      return K > u - te && K < u + 12 * te;
    }), b = m.find((N) => (N.precipitation_probability ?? 0) >= 50 || (N.precipitation ?? 0) >= 0.2), A = b ? ze(ht.rainFrom, { time: Fe(new Date(Math.max(u, new Date(b.datetime).getTime())), s) }) : m.length ? ht.noRain12 : void 0, H = (I == null ? void 0 : I()) || "rainviewer";
    let W;
    if (H.startsWith("camera:")) {
      const N = s.states[H.slice(7)], K = N && N.state !== "unavailable" && ((U = N.attributes) == null ? void 0 : U.entity_picture);
      W = K ? '<div class="wbRadar wbRadarCam" aria-hidden="true"><img class="wbRadarImg" src="' + wt(K) + '" data-src="' + wt(K) + '" alt=""></div>' : '<div class="wbRadar" aria-hidden="true"><span class="wbRadarNote">' + wt(ht.cameraOff) + "</span></div>";
    } else {
      const N = jn(s);
      W = N ? '<div class="wbRadar wbRadarMap" aria-hidden="true" data-lat="' + N.lat + '" data-lon="' + N.lon + '"><i class="wbRadarHome"></i></div>' : '<div class="wbRadar" aria-hidden="true"><i class="wbRadarRing"></i><i class="wbRadarHome"></i><span class="wbRadarNote">' + wt(ht.noLocation) + "</span></div>";
    }
    return Qe({ icon: ee.radar, name: ht.rainRadar, sub: A, cls: "wbBase wbRadarTile", visual: W });
  }
  const Wr = {
    current: jt,
    hourly: Yn,
    sun: Jt,
    moon: Hr,
    wind: Vi,
    uv_index: wn,
    compared_to_average: Or,
    humidity: Gi,
    pressure: Ko,
    precipitation: vn,
    visibility: Nr,
    air_quality: Yi,
    aq_tile: qr,
    pollen_tile: $i,
    radar_tile: kn
  }, $n = [["day", "Last 24 hours", 1], ["week", "Last 7 days", 7], ["month", "Last 30 days", 30]], $o = (s, u) => {
    var m;
    return u.toLocaleDateString((m = s.locale) == null ? void 0 : m.language, { day: "numeric", month: "short" });
  }, ue = (s) => {
    const u = new Date(s);
    return u.setMinutes(u.getMinutes() - u.getTimezoneOffset()), u.toISOString().slice(0, 10);
  }, da = () => {
    const s = it.range, u = Date.now();
    if (s.preset !== "custom") {
      const A = $n.find(([H]) => H === s.preset)[2];
      return [u - A * la, u];
    }
    const m = Uo(/* @__PURE__ */ new Date(s.from + "T00:00")).getTime(), b = Math.min(u, Uo(/* @__PURE__ */ new Date(s.to + "T00:00")).getTime() + la);
    return [Math.min(m, b - te), b];
  }, Qt = (s) => {
    const u = it.range;
    if (u.preset !== "custom") return $n.find(([A]) => A === u.preset)[1];
    const [m, b] = da();
    return u.from === u.to ? $o(s, new Date(m)) : $o(s, new Date(m)) + " – " + $o(s, new Date(b - 1));
  }, Bo = () => it.range.preset === "custom" ? it.range.from + "_" + it.range.to : it.range.preset, Ro = (s, u) => u - s <= 2 * la, Jn = (s, u, m, b) => Ro(m, b) ? Fe(u, s) : $o(s, u), no = (s, u = 60) => {
    const m = Math.max(1, Math.ceil(s.length / u));
    return s.filter((b, A) => A % m === 0 || A === s.length - 1);
  }, jr = (s, u, m, b, A = !1) => s.callWS({
    type: "history/history_during_period",
    start_time: new Date(m).toISOString(),
    end_time: new Date(b).toISOString(),
    entity_ids: [u],
    minimal_response: A,
    no_attributes: A,
    significant_changes_only: !1
  }), Po = (s) => async (u, m, b, A) => {
    const H = Se(u, m, s);
    if (!H) return [];
    const W = H.stateObj.entity_id, U = await jr(u, W, b, A);
    return no(((U == null ? void 0 : U[W]) ?? []).map((N) => {
      var ut;
      const K = ((ut = N.a) == null ? void 0 : ut[s]) ?? (ie(N.s) ? Number(N.s) : void 0), $ = (N.lu ?? N.lc) * 1e3;
      return typeof K == "number" && $ >= b && $ <= A ? { t: new Date($), value: K } : null;
    }).filter(Boolean)).map((N) => ({ label: Jn(u, N.t, b, A), value: N.value }));
  }, Vr = (s, u) => async (m, b, A, H) => {
    const W = s(m);
    if (!W) return [];
    const U = W.entity_id, N = await jr(m, U, A, H, !0);
    return no(((N == null ? void 0 : N[U]) ?? []).map((K) => {
      const $ = u(K.s), ut = K.lu * 1e3;
      return $ == null || !Number.isFinite($) || ut < A || ut > H ? null : { t: new Date(ut), value: $ };
    }).filter(Boolean)).map((K) => ({ label: Jn(m, K.t, A, H), value: K.value }));
  }, Jo = (s, u) => async (m, b, A, H) => {
    const W = jn(m);
    if (!W) return [];
    const U = [];
    if (Ro(A, H)) for (let N = A; N <= H; N += te / 2) U.push({ label: Fe(new Date(N), m), value: s(new Date(N), W) });
    else for (let N = H; N >= A; N -= la) {
      const K = new Date(N), $ = u(K, W, m);
      $ != null && U.unshift({ label: $o(m, K), value: $ });
    }
    return no(U);
  }, Qo = (s) => xn(s).sort((u, m) => Do(m) - Do(u))[0], oa = (s, u, m) => {
    const b = Se(s, u, m);
    return b ? Go(s, b.stateObj, m) : "";
  }, tn = {
    current: { name: () => ht.modes.temperature, icon: () => ee.sunny, load: Po("temperature"), fmt: (s, u, m) => pe(s, m), now: (s, u) => {
      var m;
      return pe(s, (m = Se(s, u, "temperature")) == null ? void 0 : m.value);
    } },
    sun: {
      name: () => ht.sun,
      icon: () => ee.sunny,
      load: Jo((s, u) => Math.round(qi(s, u.lat, u.lon) / ea), (s, u, m) => {
        const b = Fn(m, s);
        return b.rise && b.set ? Math.round((b.set - b.rise) / te * 10) / 10 : null;
      }),
      fmt: (s, u, m, b) => b ? Ut(m, s.locale) + "°" : Ut(m, s.locale) + " h",
      sub: (s) => s ? "How high the sun was" : "Hours of daylight a day"
    },
    moon: {
      name: () => ht.moon,
      icon: () => ee.night,
      load: Jo((s) => Math.round(xl(s).fraction * 100), (s) => Math.round(xl(s).fraction * 100)),
      fmt: (s, u, m) => Ut(m, s.locale) + "%",
      sub: () => "How much of it was lit"
    },
    uv_index: { name: () => ht.metrics.uv_index, icon: () => ee.sunnyAlert, load: Po("uv_index"), fmt: (s, u, m) => Ut(Math.round(m * 10) / 10, s.locale), now: (s, u) => {
      const m = Se(s, u, "uv_index");
      return m ? Ut(Number(m.value), s.locale) : "";
    } },
    humidity: { name: () => ht.metrics.humidity, icon: () => ee.waterPercent, load: Po("humidity"), fmt: (s, u, m) => Ut(Math.round(m), s.locale) + "%", now: (s, u) => {
      const m = Se(s, u, "humidity");
      return m ? Ut(Math.round(Number(m.value)), s.locale) + "%" : "";
    } },
    pressure: { name: () => ht.metrics.pressure, icon: () => ee.gauge, load: Po("pressure"), fmt: (s, u, m) => Ut(Math.round(m), s.locale) + " " + oa(s, u, "pressure"), now: (s, u) => {
      const m = Se(s, u, "pressure");
      return m ? Ut(Math.round(Number(m.value)), s.locale) + " " + oa(s, u, "pressure") : "";
    } },
    wind: { name: () => ht.wind, icon: () => ee.windy, load: Po("wind_speed"), fmt: (s, u, m) => Ut(Math.round(m), s.locale) + " " + oa(s, u, "wind_speed"), now: (s, u) => {
      const m = Se(s, u, "wind_speed");
      return m ? Ut(Math.round(Number(m.value)), s.locale) + " " + oa(s, u, "wind_speed") : "";
    } },
    visibility: { name: () => ht.metrics.visibility, icon: () => ee.eyeOutline, load: Po("visibility"), fmt: (s, u, m) => Ut(Math.round(m * 10) / 10, s.locale) + " " + oa(s, u, "visibility"), now: (s, u) => {
      const m = Se(s, u, "visibility");
      return m ? Ut(Number(m.value), s.locale) + " " + oa(s, u, "visibility") : "";
    } },
    aq_tile: {
      name: (s) => Ze(s)[0] ? Vo(s, Ze(s)[0]) : ht.airQuality,
      icon: () => ee.airFilter,
      load: Vr((s) => Ze(s)[0], (s) => ie(s) ? Number(s) : null),
      fmt: (s, u, m) => {
        var H, W;
        const b = Ze(s)[0], A = (H = b == null ? void 0 : b.attributes) == null ? void 0 : H.device_class;
        return Ut(Math.round(m * 10) / 10, s.locale) + (A === "aqi" ? " AQI" : (W = b == null ? void 0 : b.attributes) != null && W.unit_of_measurement ? " " + b.attributes.unit_of_measurement : "");
      },
      now: (s) => {
        const u = Ze(s)[0];
        return u ? xo(s, u) : "";
      }
    },
    pollen_tile: {
      name: (s) => Qo(s) ? Vo(s, Qo(s)) : ht.pollen,
      icon: () => ee.flower,
      load: Vr(Qo, (s) => {
        const u = Do({ state: s });
        return u < 0 ? null : u;
      }),
      fmt: (s, u, m) => ca(Da[Math.round(m)] || ""),
      now: (s) => {
        const u = Qo(s);
        return u ? ca(u.state) : "";
      }
    }
  }, za = {};
  let Mn = null;
  async function ma(s) {
    const u = r == null ? void 0 : r();
    if (!u || !tn[s]) return;
    const m = s + "|" + Bo(), [b, A] = da();
    if (za[m] && Date.now() - za[m].at < 5 * De) return;
    za[m] = { at: Date.now(), points: null };
    try {
      za[m].points = await tn[s].load(u, Ct(u), b, A);
    } catch {
      za[m].points = [];
    }
    Be(!0), Mn === s && it.graph === s && (Mn = null, vd(V.querySelector(".wbGraphCard")));
    const H = it.graph === s && V.querySelector(".wbGraph .wbChart");
    H && Dp(H, H.querySelector(".wbLine"), H.querySelectorAll(".wbArea"));
  }
  function zr(s, u) {
    const m = it.range, b = ue(Date.now()), [A, H] = da(), W = m.pickFrom || ue(A), U = m.pickTo || ue(H - 1);
    return '<div class="wbRangePick" role="dialog" aria-label="Choose date range"><div class="wbRangePresets">' + $n.map(([N, K]) => '<button class="wbRangePreset" aria-pressed="' + (m.preset === N) + '" data-wb="graph-preset" data-range="' + N + '" data-wb-focus="graph-preset-' + N + '">' + wt(K) + "</button>").join("") + '</div><div class="wbRangeDates"><label><span>From</span><input type="date" data-range-from value="' + W + '" max="' + b + '"></label><label><span>To</span><input type="date" data-range-to value="' + U + '" max="' + b + '"></label></div><button class="wbRangeApply" data-wb="graph-apply" data-wb-focus="graph-apply">Show these dates</button></div>';
  }
  function Gr(s, u, m) {
    var ut;
    const b = tn[m], [A, H] = da(), W = Ro(A, H), U = (ut = za[m + "|" + Bo()]) == null ? void 0 : ut.points, N = Math.max(120, Math.min(520, innerWidth - (innerWidth <= 620 ? 0 : 32)) - 2 * 18 - 32), $ = U ? U.length > 1 ? Id(U, (Rt) => b.fmt(s, u, Rt, W), 220, N) : '<span class="wbGraphNote"><span>No history for these dates</span></span>' : '<span class="wbGraphNote"><span>Loading…</span></span>';
    return '<div class="wbPopupBox"><div class="wbCard wbSquare wbGraphCard" role="dialog" aria-modal="true" aria-label="' + wt(b.name(s)) + '"><div class="wbHead"><div class="wbChip wbPlain">' + Pp(b.icon(s)) + '</div><div class="wbText"><span class="wbName">' + wt(b.name(s)) + '</span><span class="wbSub">' + wt(b.sub ? b.sub(W) : b.now ? b.now(s, u) : "") + '</span></div><button class="wbBack" title="Close" data-wb="graph-close" data-wb-focus="graph-close">' + So(ee.close) + '</button></div><button class="wbRangeBtn" aria-haspopup="dialog" aria-expanded="' + !!it.picking + '" title="Choose date range" data-wb="graph-pick" data-wb-focus="graph-pick">' + So(ee.calendar) + "<span>" + wt(Qt(s)) + "</span>" + So(ee.chevronDown) + '</button><div class="wbGraph">' + $ + "</div></div>" + (it.picking ? zr() : "") + "</div>";
  }
  function Be(s) {
    var Rt, Tt, Mt, qt, Lt;
    const u = r == null ? void 0 : r();
    if (!u || lt) return;
    const m = Ct(u);
    xt(u, m), z.lastFetch || to();
    const b = Me(u), A = Od(u), H = kl(u), W = [
      ...m.map((st) => u.states[st]),
      u.states["sun.sun"],
      A && u.states[A],
      H && u.states[H],
      ...b.air.map((st) => u.states[st]),
      ...b.pollen.map((st) => u.states[st]),
      ...et.some((st) => Q.includes(st)) ? [...Ze(u), ...xn(u)] : [],
      u.locale,
      u.config,
      u.entities,
      Math.floor(Date.now() / De)
    ];
    if (!s && pt && W.length === pt.length && W.every((st, Pt) => st === pt[Pt])) return;
    pt = W;
    const U = _.getRootNode(), N = U.activeElement || document.activeElement;
    for (const st of et) {
      const Pt = j[st];
      let Ot = "";
      try {
        Ot = Wr[st](u, m) || "";
      } catch {
        Ot = "";
      }
      if (Ot === Pt.html) continue;
      const he = N && Pt.el.contains(N) ? (Rt = N.dataset) == null ? void 0 : Rt.wbFocus : void 0, St = Pt.el.querySelector(".wbStripScroll"), ne = St ? St.scrollLeft : null;
      Pt.html = Ot, Pt.el.hidden = !Ot, Pt.el.innerHTML = Ot;
      const oe = Pt.el.querySelector(".wbStripScroll");
      oe && ne != null ? oe.scrollTo({ left: ne }) : oe != null && oe.dataset.start && oe.scrollTo({ left: Number(oe.dataset.start) * oe.clientWidth / Number(oe.dataset.span) }), he && !Z && ((Tt = Pt.el.querySelector('[data-wb-focus="' + he + '"]')) == null || Tt.focus());
    }
    let K = "";
    if (it.graph)
      try {
        K = Gr(u, m, it.graph) || "";
      } catch {
        K = "";
      }
    if (K !== P) {
      const st = N && V.contains(N) ? (Mt = N.dataset) == null ? void 0 : Mt.wbFocus : void 0;
      P = K, V.innerHTML = K, V.hidden = !K, K && !V.isConnected && (_.closest("#app") || _).appendChild(V), st && !Z && ((qt = V.querySelector('[data-wb-focus="' + st + '"]')) == null || qt.focus({ preventScroll: !0 }));
    }
    ji(), _.querySelectorAll(".wbRadarMap").forEach((st) => {
      st._tiles || Oo(st);
    }), Z && ((Lt = _.querySelector('[data-wb-focus="' + Z + '"]') || V.querySelector('[data-wb-focus="' + Z + '"]')) == null || Lt.focus({ preventScroll: !0 }), Z = null);
    let $ = !1, ut = !1;
    for (const st of et) {
      const Pt = j[st], Ot = !Pt.el.hidden, he = at[st] === "wide" || X.includes(st), St = et.indexOf(st) >= et.indexOf("moon"), ne = Ot && (St && he && !$ || !he && !ut);
      ne && he && ($ = !0), ne && !he && (ut = !0), Pt.el.toggleAttribute("data-break", ne);
    }
    pa(performance.now());
  }
  function en() {
    J || lt || (J = !0, queueMicrotask(() => {
      J = !1, Be(!0);
    }));
  }
  function Ur() {
    const s = getComputedStyle(_), u = (W) => s.getPropertyValue(W).trim(), m = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([W, U]) => {
      u(U) && (m[W] = u(U));
    });
    const b = u("--color-text-primary") || "#f1f1f1", A = u("--color-bg-card") || "#222222", H = !!_.closest(".light");
    return { colors: { ...La, ...m }, ink: H ? b : A, paper: H ? A : b };
  }
  const Qn = (s, u) => {
    var m;
    s.width !== u.w && (s.width = u.w), s.height !== u.h && (s.height = u.h), (m = s.getContext("2d")) == null || m.putImageData(new ImageData(u.data, u.w, u.h), 0, 0);
  }, ro = () => g && !bm();
  function Yr(s, u) {
    _.querySelectorAll("canvas[data-wb-strip]").forEach((m) => tr(m, tt[m.dataset.wbStrip], s, u));
  }
  function tr(s, u, m, b) {
    if (!u || !s.getClientRects().length) return;
    const A = s.clientWidth, H = s.clientHeight;
    if (!A || !H) return;
    const W = { width: A, height: H, columns: u.columns || yd, colors: b.colors, clock: m, ambient: ro(), seed: u.seed, soft: 1.5 };
    if (p === "smooth") {
      const U = Math.min(2, window.devicePixelRatio || 1), N = Math.round(A * U), K = Math.round(H * U);
      s.width !== N && (s.width = N), s.height !== K && (s.height = K);
      const $ = s.getContext("2d");
      if (!$) return;
      $.setTransform(U, 0, 0, U, 0, 0), hh($, u.segs, W);
    } else Qn(s, uh(u.segs, { ...W, px: 2, oneBit: p === "onebit", ink: b.ink, paper: b.paper }));
  }
  function pa(s) {
    if (lt) return;
    const u = Ur();
    if (p !== "smooth") {
      const m = ro();
      _.querySelectorAll("canvas[data-wb-wx]").forEach((b) => {
        b.getClientRects().length && Qn(b, $u(Gu(b.dataset.wbWx, u.colors), { size: Number(b.dataset.size) || 40, px: 2, oneBit: p === "onebit", colors: u.colors, ink: u.ink, paper: u.paper, clock: s, idle: m }));
      });
    }
    _.querySelectorAll("canvas[data-wb-sea]").forEach((m) => {
      const b = m.clientWidth, A = m.clientHeight, H = Number(m.dataset.wbSea), W = b + "x" + A + ":" + H + ":" + u.colors.skyClearDay;
      !b || !A || !(H > 0) || m.dataset.painted === W || (m.dataset.painted = W, Qn(m, Lh(b, A, H, u.colors)));
    }), Yr(s, u);
  }
  function Zr(s) {
    if (gt = 0, !(lt || !ro())) {
      if (!document.hidden)
        if (p === "smooth") Yr(s, Ur());
        else {
          const u = Math.floor(s / 100);
          u !== nt && (nt = u, pa(s));
        }
      gt = requestAnimationFrame(Zr);
    }
  }
  function Ho() {
    _.classList.toggle("wbMotion", ro()), !gt && !lt && ro() && (gt = requestAnimationFrame(Zr));
  }
  function Sn(s) {
    var m, b, A, H, W, U, N;
    if (s.target === V) {
      it.graph = void 0, it.picking = !1, Be(!0);
      return;
    }
    const u = (b = (m = s.target).closest) == null ? void 0 : b.call(m, "[data-wb]");
    if (!u || !(_.contains(u) || V.contains(u))) {
      const K = (H = (A = s.target).closest) == null ? void 0 : H.call(A, ".wbItem"), $ = K == null ? void 0 : K.dataset.card;
      if (!K || !_.contains(K) || !tn[$] || it.graph === $ || _.closest(".tfEditing") || $ === "current" && w) return;
      it.graph = $, it.picking = !1, Z = "graph-close", Be(!0), (W = za[$ + "|" + Bo()]) != null && W.points ? vd(V.querySelector(".wbGraphCard")) : Mn = $, ma($);
      return;
    }
    switch (u.dataset.wb) {
      case "day": {
        it.openDay = Number(u.dataset.index), it.opener = u.dataset.wbFocus, Z = "back-day";
        const K = zt()[it.openDay], $ = !z.todayHistory || z.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - z.todayHistory.fetched > Uh;
        K && In(new Date(K.datetime), /* @__PURE__ */ new Date()) && $ && Yo();
        break;
      }
      case "close-day":
        it.openDay = void 0, Z = it.opener, it.opener = void 0;
        break;
      case "open-page":
        w == null || w();
        return;
      case "day-mode":
        it.dayMode = u.dataset.mode;
        break;
      case "hourly-mode":
        it.hourlyMode = u.dataset.mode;
        break;
      case "hourly-view":
        it.hourlyView = u.dataset.view;
        try {
          localStorage.setItem(vt, it.hourlyView);
        } catch {
        }
        break;
      case "hours-day": {
        const K = _.querySelector(".wbStripScroll");
        K && K.scrollTo({ left: Number(u.dataset.hours) * K.clientWidth / Number(K.dataset.span), behavior: "smooth" });
        return;
      }
      case "aq-open":
        it.aq = u.dataset.entity, To(it.aq);
        break;
      case "aq-close":
        it.aq = void 0;
        break;
      case "graph-close":
        it.graph = void 0, it.picking = !1;
        break;
      case "graph-pick":
        it.picking = !it.picking, Z = it.picking ? "graph-preset-" + (it.range.preset === "custom" ? "day" : it.range.preset) : "graph-pick";
        break;
      case "graph-preset":
        it.range = { preset: u.dataset.range }, it.picking = !1, Z = "graph-pick", Be(!0), ma(it.graph);
        return;
      case "graph-apply": {
        let K = it.range.pickFrom || ((U = _.querySelector("[data-range-from]")) == null ? void 0 : U.value), $ = it.range.pickTo || ((N = _.querySelector("[data-range-to]")) == null ? void 0 : N.value);
        if (!K || !$) return;
        K > $ && ([K, $] = [$, K]), it.range = { preset: "custom", from: K, to: $ }, it.picking = !1, Z = "graph-pick", Be(!0), ma(it.graph);
        return;
      }
      default:
        return;
    }
    Be(!0);
  }
  function We(s) {
    var u, m, b, A, H, W;
    s.key === "Escape" && it.openDay !== void 0 && ((m = (u = s.target).closest) != null && m.call(u, '[data-wb-open="day"]')) ? (it.openDay = void 0, Z = it.opener, it.opener = void 0, Be(!0)) : s.key === "Escape" && it.picking && ((A = (b = s.target).closest) != null && A.call(b, ".wbGraphCard")) ? (it.picking = !1, Z = "graph-pick", Be(!0)) : s.key === "Escape" && it.graph && ((W = (H = s.target).closest) != null && W.call(H, ".wbGraphCard")) && (it.graph = void 0, Be(!0));
  }
  let ga = null;
  function An(s) {
    var m, b;
    const u = (b = (m = s.target).closest) == null ? void 0 : b.call(m, ".wbStripScroll");
    !u || s.button !== 0 || (ga = { startX: s.pageX, left: u.scrollLeft, moved: !1 }, u.classList.add("wbHeld"), window.addEventListener("mousemove", Cn), window.addEventListener("mouseup", Kr, { once: !0 }));
  }
  function Cn(s) {
    const u = _.querySelector(".wbStripScroll");
    if (!ga || !u) return;
    const m = s.pageX - ga.startX;
    !ga.moved && Math.abs(m) > 1 && (ga.moved = !0, u.classList.add("wbDragging")), u.scrollLeft = ga.left - m;
  }
  function Kr() {
    ga = null, window.removeEventListener("mousemove", Cn);
    const s = _.querySelector(".wbStripScroll");
    if (!s) return;
    s.classList.remove("wbDragging", "wbHeld");
    const u = [...s.querySelectorAll(".wbSnap")];
    if (u.length) {
      const m = u.reduce((b, A) => Math.abs(A.offsetLeft - s.scrollLeft) < Math.abs(b.offsetLeft - s.scrollLeft) ? A : b);
      s.scrollTo({ left: m.offsetLeft, behavior: "smooth" });
    }
  }
  const an = (s) => {
    var m, b;
    const u = s.target;
    (m = u.matches) != null && m.call(u, "[data-range-from]") ? it.range.pickFrom = u.value : (b = u.matches) != null && b.call(u, "[data-range-to]") && (it.range.pickTo = u.value);
  };
  _.addEventListener("change", an), _.addEventListener("click", Sn), _.addEventListener("keydown", We), V.addEventListener("change", an), V.addEventListener("click", Sn), V.addEventListener("keydown", We), _.addEventListener("mousedown", An);
  const Xr = 64, Ji = 30;
  let ba = null, Ea = 0;
  const io = () => {
    Ea = 0, _.querySelectorAll(".wbPollen .wbPush").forEach((s) => {
      let u = 0, m = 0;
      if (ba) {
        const b = s.parentElement.getBoundingClientRect(), A = b.left + b.width / 2 - ba.x, H = b.top + b.height / 2 - ba.y, W = Math.hypot(A, H) || 1;
        if (W < Xr) {
          const U = (1 - W / Xr) * Ji;
          u = A / W * U, m = H / W * U;
        }
      }
      s.style.transform = u || m ? "translate(" + u.toFixed(1) + "px," + m.toFixed(1) + "px)" : "";
    }), ba && (Ea = requestAnimationFrame(io));
  }, $r = (s) => {
    var m, b;
    if (!((b = (m = s.target).closest) == null ? void 0 : b.call(m, ".wbPollen")) || Te != null && Te.matches) {
      ba && (ba = null, Ea || (Ea = requestAnimationFrame(io)));
      return;
    }
    ba = { x: s.clientX, y: s.clientY }, Ea || (Ea = requestAnimationFrame(io));
  }, Ga = () => {
    ba = null, Ea || (Ea = requestAnimationFrame(io));
  };
  _.addEventListener("pointermove", $r), _.addEventListener("pointerleave", Ga);
  const fa = typeof ResizeObserver == "function" ? new ResizeObserver(() => pa(performance.now())) : null;
  fa == null || fa.observe(_);
  const wa = typeof ResizeObserver == "function" ? new ResizeObserver((s) => s.forEach((u) => {
    const m = u.target;
    m._tiles && (m.clientWidth !== m._w || m.clientHeight !== m._h) && Oo(m);
  })) : null;
  function Oo(s) {
    var W;
    const u = s.clientWidth, m = s.clientHeight;
    if (!u || !m || lt) return;
    const b = sm(Number(s.dataset.lat), Number(s.dataset.lon), u, m), A = !!((W = _.closest("#app")) != null && W.classList.contains("light")), H = (U) => ' style="left:' + U.left + "px;top:" + U.top + 'px"';
    s._tiles = b, s._w = u, s._h = m, s._frames = null, s._built = Date.now(), s.innerHTML = '<div class="wbRadarLayer wbRadarBase">' + b.map((U) => '<img src="https://' + "abcd"[(U.x + U.y) % 4] + ".basemaps.cartocdn.com/" + (A ? "light_all" : "dark_all") + "/" + Pl + "/" + U.x + "/" + U.y + '.png"' + H(U) + ' alt="">').join("") + '</div><div class="wbRadarFrames"></div><i class="wbRadarHome"></i><span class="wbRadarTime"></span><span class="wbRadarCredit">© OpenStreetMap · CARTO · RainViewer</span>', wa == null || wa.observe(s), im().then((U) => {
      !s.isConnected || lt || s._tiles !== b || (s.querySelector(".wbRadarFrames").innerHTML = U.frames.map((N, K) => '<div class="wbRadarLayer wbRadarRain" data-i="' + K + '" hidden>' + b.map(($) => '<img src="' + U.host + N.path + "/" + ko + "/" + Pl + "/" + $.x + "/" + $.y + '/2/1_1.png"' + H($) + ' alt="">').join("") + "</div>").join(""), s._frames = U.frames, s._hold = 0, _n(s, U.frames.findLastIndex((N) => N.past)));
    }).catch(() => {
      s.isConnected && (s.querySelector(".wbRadarTime").textContent = ht.radarOff);
    });
  }
  function _n(s, u) {
    const m = s._frames;
    if (!(m != null && m.length)) return;
    s._i = u, s.querySelectorAll(".wbRadarRain").forEach((A) => {
      A.hidden = Number(A.dataset.i) !== u;
    });
    const b = m[u];
    s.querySelector(".wbRadarTime").textContent = Fe(new Date(b.time * 1e3), r == null ? void 0 : r()) + (b.past ? "" : " · " + ht.forecastTag);
  }
  function Qi() {
    _.querySelectorAll(".wbRadarMap").forEach((s) => {
      if (!s._frames) return;
      if (Date.now() - s._built > Bp) {
        Oo(s);
        return;
      }
      if (Te != null && Te.matches) return;
      if (s._hold > 0) {
        s._hold -= Sd;
        return;
      }
      const u = s._frames.length - 1, m = s._frames.findLastIndex((A) => A.past), b = s._i >= u ? 0 : s._i + 1;
      _n(s, b), (b === m || b === u) && (s._hold = rm);
    });
  }
  const ts = () => _.querySelectorAll(".wbRadarImg").forEach((s) => {
    const u = s.dataset.src;
    s.src = u + (u.includes("?") ? "&" : "?") + "hc=" + Date.now();
  }), so = typeof MutationObserver == "function" ? new MutationObserver(() => _.querySelectorAll(".wbRadarMap").forEach((s) => {
    s._tiles && Oo(s);
  })) : null, Jr = _.closest("#app");
  Jr && (so == null || so.observe(Jr, { attributes: !0, attributeFilter: ["class"] }));
  const Te = (or = window.matchMedia) == null ? void 0 : or.call(window, "(prefers-reduced-motion: reduce)"), er = () => {
    Ho(), pa(performance.now());
  };
  (Qr = Te == null ? void 0 : Te.addEventListener) == null || Qr.call(Te, "change", er);
  const ar = [
    setInterval(() => {
      It = /* @__PURE__ */ new Date(), Be(!0);
    }, em),
    setInterval(() => {
      F = /* @__PURE__ */ new Date(), Be(!0);
    }, am),
    setInterval(to, Jh),
    setInterval(Qi, Sd),
    setInterval(ts, De)
  ];
  return Be(!0), Ho(), {
    update() {
      Be(!1);
    },
    // a choice in Settings changed (Next hours' window)
    refresh() {
      Be(!0);
    },
    setStyle(s) {
      !s || s === p || (p = s, _.dataset.style = p, V.dataset.style = p, Be(!0), Ho());
    },
    destroy() {
      var s;
      cancelAnimationFrame(Ea), _.removeEventListener("pointermove", $r), _.removeEventListener("pointerleave", Ga), lt = !0, ar.forEach(clearInterval), gt && cancelAnimationFrame(gt), gt = 0, fa == null || fa.disconnect(), wa == null || wa.disconnect(), so == null || so.disconnect(), (s = Te == null ? void 0 : Te.removeEventListener) == null || s.call(Te, "change", er), Kr(), _.removeEventListener("click", Sn), _.removeEventListener("change", an), _.removeEventListener("keydown", We), _.removeEventListener("mousedown", An), V.removeEventListener("click", Sn), V.removeEventListener("change", an), V.removeEventListener("keydown", We), ["daily", "hourly"].forEach(yt), _.remove(), V.remove();
    }
  };
}
const _r = "#E1E1E1", Wd = "#F7F4F0", Ml = "#03a9f4", Xt = 14, $t = 172;
let Ym = 0;
const fe = (o) => Math.round(o * 100) / 100, Qa = (o, r, c) => Math.max(r, Math.min(c, o)), _o = (o, r, c, p, g, v) => '<rect x="' + fe(o) + '" y="' + fe(r) + '" width="' + fe(c) + '" height="' + fe(p) + '" fill="' + g + '"' + (v != null ? ' opacity="' + v + '"' : "") + "/>", Sl = (o) => o.map((r, c) => (c ? "L" : "M") + fe(r[0]) + " " + fe(r[1])).join("");
function Al(o) {
  const r = (o == null ? void 0 : o.attributes) || {};
  return r.device_class === "curtain" ? "curtain" : r.device_class === "blind" || r.current_tilt_position != null ? "venetian" : "blind";
}
const zo = [
  [2, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]],
  [6.5, ["#0B0F1C", "#2E7FD6", "#F2743B", "#F1B6C8", 0.95]],
  [9.5, ["#8FC4EC", "#4DA3E8", "#F4FAFF", "#2F7FCF", 0.7]],
  [13, ["#9ED3F6", "#3F97E6", "#FFFFFF", "#2B86D9", 0.65]],
  [17, ["#9FC2E4", "#4A8ED4", "#FFD9B8", "#5E8FD6", 0.75]],
  [19, ["#4B5E86", "#3B86E0", "#FF6A3D", "#B07CE8", 0.95]],
  [21.5, ["#1A2140", "#1F3F7A", "#B4506E", "#3E59A6", 0.8]],
  [26, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]]
];
function Zm(o) {
  const r = o < 2 ? o + 24 : o;
  let c = zo[0], p = zo[zo.length - 1];
  for (let S = 0; S < zo.length - 1; S++) if (r >= zo[S][0] && r <= zo[S + 1][0]) {
    c = zo[S], p = zo[S + 1];
    break;
  }
  const g = (r - c[0]) / (p[0] - c[0]), v = g * g * (3 - 2 * g), w = (S, I) => {
    const y = parseInt(S.slice(1), 16), _ = parseInt(I.slice(1), 16);
    return "#" + [16, 8, 0].map((O) => Math.round((y >> O & 255) + ((_ >> O & 255) - (y >> O & 255)) * v).toString(16).padStart(2, "0")).join("");
  };
  return { top: w(c[1][0], p[1][0]), bot: w(c[1][1], p[1][1]), warm: w(c[1][2], p[1][2]), cool: w(c[1][3], p[1][3]), op: c[1][4] + (p[1][4] - c[1][4]) * v, t: r };
}
function Km(o) {
  const r = parseInt(o.slice(1), 16), c = (r >> 16 & 255) / 255, p = (r >> 8 & 255) / 255, g = (r & 255) / 255, v = Math.max(c, p, g), w = Math.min(c, p, g);
  let S = 0, I = 0;
  const y = (v + w) / 2;
  if (v !== w) {
    const _ = v - w;
    I = y > 0.5 ? _ / (2 - v - w) : _ / (v + w), S = (v === c ? (p - g) / _ + (p < g ? 6 : 0) : v === p ? (g - c) / _ + 2 : (c - p) / _ + 4) / 6;
  }
  return [S * 360, I * 100, y * 100];
}
function Up(o, r, c) {
  r = Qa(r, 0, 100) / 100, c = Qa(c, 0, 100) / 100;
  const p = (w) => (w + o / 30) % 12, g = r * Math.min(c, 1 - c), v = (w) => c - g * Math.max(-1, Math.min(p(w) - 3, Math.min(9 - p(w), 1)));
  return "#" + [v(0), v(8), v(4)].map((w) => Math.round(w * 255).toString(16).padStart(2, "0")).join("");
}
const [Yp, Zp, Kp] = Km(_r), jd = Up(Yp, Zp, Math.max(6, Kp - 14)), Xm = Up(Yp, Zp, Math.min(96, Kp + 16));
function $m(o, r, c, p, g) {
  const v = $t / 2, w = $t * 0.12, S = v - (v - w) * o, I = (et) => et ** 1.3, y = Qa(c, -1.5, 1.5), _ = (et) => -(Math.abs(y) * 4.6 * et ** 1.5) * Math.sign(y), O = o * 1.4, V = (et, at) => {
    const X = Math.min(4.8, Math.abs(c) * 2.6) * (at ? 1 : -1) * Math.sign(c || 1), j = at ? et + S : et, lt = at ? et : et + S, pt = (vt) => j + _(vt) + X * Math.sin(vt * Math.PI * 1.2 + p) * I(vt) * 1.4 + O * Math.sin(vt * Math.PI * 2 + p * 0.6) * I(vt) * (at ? 1 : -1), gt = [[lt, Xt]];
    for (let vt = 0; vt <= 12; vt++) gt.push([pt(vt / 12), Xt + $t * vt / 12]);
    gt.push([lt, Xt + $t]);
    let nt = '<path d="' + Sl(gt) + 'Z" fill="' + _r + '"/>';
    if (g) return nt;
    const J = 1.35 + ((at ? c > 0 : c < 0) ? 0.35 : 0), Z = (vt) => {
      const Bt = vt / 7, it = at ? 1 - Bt : Bt, z = (1 - it) ** 1.3, It = et + S * Bt;
      return Array.from({ length: 13 }, (F, tt) => {
        const E = tt / 12;
        return [It + _(E) * z + X * J * Math.sin(E * Math.PI * 1.2 + p - it * 3.2) * I(E) * 1.4 * z + O * 1.6 * Math.sin(E * Math.PI * 2 + p * 0.6 - it * 2.5) * I(E) * o * (0.4 + 0.6 * z), Xt + $t * E];
      });
    }, P = [1, 2, 3, 4, 5, 6].map(Z);
    for (let vt = 0; vt < 6; vt += 2) nt += '<path d="' + Sl(P[vt]) + Sl(P[vt + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return nt;
  }, Q = v - (v - w) * r;
  return { body: V(Xt, !0) + V(Xt + $t - S, !1), rails: [{ x: Xt + Q - 4, y: Xt, w: 4, h: $t }, { x: Xt + $t - Q, y: Xt, w: 4, h: $t }], head: 6.4 };
}
function Jm(o, r, c) {
  const p = $t * (1 - o);
  let g = "";
  if (p > 1 && (g += _o(Xt, Xt, $t, p, _r), !c))
    for (let v = 1; v < 7; v += 2) g += _o(Xt + $t * v / 7, Xt, $t / 7, p, "#fff");
  return { body: g, rails: [{ x: Xt, y: Xt + $t * (1 - r) - 7, w: $t, h: 11 }], head: 10.4 };
}
function Qm(o, r, c, p) {
  const g = 9 - 7 * (c / 100), v = Xt + $t * (1 - o), w = Math.ceil($t / 10) + 1, S = Xt + g / 2, I = (Xt + $t - g / 2 - S) / (w - 1), y = 0.8, _ = 0.6, O = Array.from({ length: w }, (et, at) => Math.max(S + at * _, Math.min(S + at * I, v - g / 2 - (w - 1 - at) * _))), V = O.slice(0, -1).map((et, at) => Qa((O[at + 1] - et - _) / (I - _), 0, 1));
  V.push(V[w - 2]);
  let Q = "";
  return O.forEach((et, at) => {
    const X = y + (g - y) * V[at], j = Math.max(0.5, X / 2), lt = Math.max(0.4, X * 0.114);
    Q += _o(Xt, et - j, $t, Math.max(1, X), _r), !p && X > 2.2 && (Q += _o(Xt, et + j - lt, $t, lt, jd) + _o(Xt, et - j, $t, lt * 0.55, Xm, 0.75));
  }), p || [0.22, 0.78].forEach((et) => {
    Q += _o(Xt + $t * et - 0.7, Xt, 1.4, Math.max(0, O[w - 1] + 1 - Xt), jd, 0.85);
  }), { body: Q, rails: [{ x: Xt, y: Xt + $t * (1 - r) - 8, w: $t, h: 8 }], head: 8.8 };
}
const Vd = (o, r, c, p, g, v, w) => o === "curtain" ? $m(r, c, g, v, w) : o === "venetian" ? Qm(r, c, p, w) : Jm(r, c, w);
function t0(o, r) {
  let c = "", p = "";
  return r.forEach((g) => {
    const v = g.w > g.h, w = Qa(v ? Xt + $t / 2 : g.x + g.w / 2, 17, 183), S = Qa(v ? g.y + g.h / 2 : Xt + $t / 2, 17, 183);
    c += v ? _o(Xt, Qa(g.y + g.h / 2, Xt, Xt + $t) - 1, $t, 2, Ml) : _o(Qa(g.x + g.w / 2, Xt, Xt + $t) - 1, Xt, 2, $t, Ml);
    const I = v ? "M" + fe(w - 4) + " " + fe(S - 3) + "l4 -3l4 3M" + fe(w - 4) + " " + fe(S + 3) + "l4 3l4 -3" : "M" + fe(w - 3) + " " + fe(S - 4) + "l-3 4l3 4M" + fe(w + 3) + " " + fe(S - 4) + "l3 4l-3 4";
    p += '<circle cx="' + fe(w) + '" cy="' + fe(S) + '" r="11" fill="' + Ml + '" filter="url(#' + o + 's)"/><path d="' + I + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: c, knobs: p };
}
function e0(o, r) {
  const c = /* @__PURE__ */ new Date(), p = Zm(c.getHours() + c.getMinutes() / 60), g = 42 + 18 * Math.sin(p.t * 0.5), v = p.t >= 5 && p.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (p.t - 5) / 15) : 80, w = Vd(r.kind, r.pos / 100, r.bar / 100, r.tilt, r.vel, r.ph, !1), S = r.ghostAlpha > 4e-3 && r.ghost != null ? Vd(r.kind, r.ghost / 100, r.ghost / 100, r.tilt, 0, 0, !0).body : "", I = r.grip > 4e-3 ? t0(o, w.rails) : null, y = (_) => _o(Xt, Xt, $t, $t, _);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + o + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + o + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + p.top + '"/><stop offset="1" stop-color="' + p.bot + '"/></linearGradient><radialGradient id="' + o + 'w" cx="' + fe(g) + '%" cy="' + fe(v) + '%" r="58%"><stop offset="0" stop-color="' + p.warm + '" stop-opacity="' + fe(p.op * 0.8) + '"/><stop offset="1" stop-color="' + p.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + o + 'k" cx="' + fe(100 - g * 0.8) + '%" cy="' + fe(100 - v * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + p.cool + '" stop-opacity="' + fe(p.op * 0.64) + '"/><stop offset="1" stop-color="' + p.cool + '" stop-opacity="0"/></radialGradient><filter id="' + o + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + Wd + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + o + 'c)">' + y("url(#" + o + "l)") + y("url(#" + o + "w)") + y("url(#" + o + "k)") + (S ? '<g opacity="' + fe(r.ghostAlpha) + '">' + S + "</g>" : "") + w.body + '<rect x="14" y="14" width="172" height="' + w.head + '" fill="' + _r + '" filter="url(#' + o + 's)"/></g>' + (I ? '<g clip-path="url(#' + o + 'c)" opacity="' + fe(r.grip) + '">' + I.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + Wd + '" stroke-width="3"/>' + (I ? '<g opacity="' + fe(r.grip) + '">' + I.knobs + "</g>" : "") + "</svg>";
}
function a0({ onMove: o, onSet: r }) {
  var nt;
  const c = "cv" + ++Ym, p = document.createElement("div");
  p.className = "tfCoverArt";
  const g = (nt = window.matchMedia) == null ? void 0 : nt.call(window, "(pointer: coarse)").matches;
  let v = null;
  const w = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let S = 0, I = !1, y = !1, _ = null, O = 0, V = 0;
  const Q = () => (v == null ? void 0 : v.kind) === "curtain" ? "x" : "y", et = () => _ || I || y || v.moving || v.target != null ? 1 : g ? performance.now() < V ? 1 : 0.4 : 0, at = () => {
    p.innerHTML = e0(c, { kind: v.kind, pos: w.pos, bar: v.target ?? w.pos, tilt: w.tilt, vel: w.vel, ph: w.ph, ghost: w.gpos, ghostAlpha: w.ghost, grip: w.grip });
  };
  function X(J) {
    S = 0;
    const Z = w.last ? Math.min(0.064, (J - w.last) / 1e3) : 1 / 60, P = Z * 60;
    w.last = J;
    const vt = v.pos - w.pos, Bt = w.pos;
    w.pos += Math.sign(vt) * Math.min(Math.abs(vt), Math.max(10.5, Math.abs(vt) * 1.4) * Z), Math.abs(v.pos - w.pos) < 0.03 && (w.pos = v.pos), w.vel = w.vel * 0.86 + (w.pos - Bt) / P * 0.14, Math.abs(w.vel) < 0.015 && w.pos === v.pos && (w.vel = 0), (w.pos !== Bt || w.vel) && (w.ph += (0.06 + Math.abs(w.vel) * 0.03) * P);
    const it = v.tilt - w.tilt;
    w.tilt += Math.sign(it) * Math.min(Math.abs(it), Math.max(60, Math.abs(it) * 4) * Z);
    const z = et();
    w.grip += (z - w.grip) * Math.min(1, Z * (z > w.grip ? 11 : 3.5)), Math.abs(z - w.grip) < 0.01 && (w.grip = z);
    const It = v.target != null && Math.abs(v.target - w.pos) > 0.5 ? 0.22 : 0;
    v.target != null && (w.gpos = v.target), w.ghost += (It - w.ghost) * Math.min(1, Z * (It > w.ghost ? 16 : 3)), Math.abs(It - w.ghost) < 4e-3 && (w.ghost = It), at(), w.pos !== v.pos || w.vel || w.tilt !== v.tilt || w.grip !== z || w.ghost !== It ? S = requestAnimationFrame(X) : w.last = 0;
  }
  const j = () => {
    v && !S && (S = requestAnimationFrame(X));
  }, lt = setInterval(() => {
    v && !S && at();
  }, 60 * 1e3), pt = (J) => {
    const Z = p.getBoundingClientRect();
    return Q() === "x" ? (J.clientX - Z.left) / Z.width : (J.clientY - Z.top) / Z.height;
  };
  p.addEventListener("pointerdown", (J) => {
    var vt;
    if (!(v != null && v.canSet) || J.button > 0) return;
    J.preventDefault(), (vt = p.setPointerCapture) == null || vt.call(p, J.pointerId);
    const Z = v.target ?? v.pos, P = p.getBoundingClientRect();
    _ = { p0: pt(J), from: Z, x0: J.clientX, value: null, side: null }, v.kind === "curtain" && Z > 0 && (_.side = (J.clientX - P.left) / P.width < 0.5 ? "L" : "R"), j();
  }), p.addEventListener("pointermove", (J) => {
    if (!_) return;
    let Z;
    if (v.kind === "curtain") {
      if (!_.side) {
        const vt = J.clientX - _.x0;
        if (Math.abs(vt) < 4) return;
        _.side = vt < 0 ? "L" : "R";
      }
      const P = ($t / 2 - $t * 0.12) / 200;
      Z = _.from + (_.side === "L" ? -1 : 1) * ((pt(J) - _.p0) / P) * 100;
    } else Z = _.from - (pt(J) - _.p0) / ($t / 200) * 100;
    _.value = Qa(Z, 0, 100), o(_.value);
  });
  const gt = () => {
    if (!_) return;
    const J = _.value;
    _ = null, J != null && r(Math.round(J)), j();
  };
  return p.addEventListener("pointerup", gt), p.addEventListener("pointercancel", gt), p.addEventListener("lostpointercapture", gt), p.addEventListener("pointerenter", () => {
    I = !0, j();
  }), p.addEventListener("pointerleave", () => {
    I = !1, j();
  }), p.addEventListener("focus", () => {
    y = p.matches(":focus-visible"), j();
  }), p.addEventListener("blur", () => {
    y = !1, j();
  }), p.addEventListener("keydown", (J) => {
    if (!(v != null && v.canSet)) return;
    const Z = Math.round(v.target ?? v.pos), P = J.shiftKey ? 10 : 1, vt = { ArrowUp: Z + P, ArrowRight: Z + P, ArrowDown: Z - P, ArrowLeft: Z - P, PageUp: Z + 25, PageDown: Z - 25, Home: 0, End: 100 }[J.key];
    if (vt == null) return;
    J.preventDefault();
    const Bt = Qa(vt, 0, 100);
    o(Bt), clearTimeout(O), O = setTimeout(() => r(Bt), 500);
  }), {
    el: p,
    update(J) {
      const Z = !v;
      v = J, Z && (w.pos = v.pos, w.tilt = v.tilt, V = performance.now() + 1500, g && setTimeout(j, 1600)), p.classList.toggle("x", Q() === "x"), p.classList.toggle("y", Q() === "y"), v.canSet ? (p.tabIndex = 0, p.setAttribute("role", "slider"), p.setAttribute("aria-valuemin", "0"), p.setAttribute("aria-valuemax", "100"), p.setAttribute("aria-valuenow", String(Math.round(v.target ?? v.pos))), p.setAttribute("aria-orientation", Q() === "x" ? "horizontal" : "vertical")) : p.setAttribute("role", "img"), p.setAttribute("aria-label", v.name + (v.canSet ? " position" : "")), p.setAttribute("aria-valuetext", v.text), j();
    },
    destroy() {
      cancelAnimationFrame(S), S = 0, clearInterval(lt), clearTimeout(O), p.remove();
    }
  };
}
const zd = "homecore-density", Xa = {
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
}, q = (o) => String(o ?? "").replace(/[&<>"']/g, (r) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[r]), Gd = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', Ud = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', Yd = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', Ti = {
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h2v12H6zM9.5 12L18 18V6z"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>'
}, Zd = {
  down: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 11h14v2H5z"/></svg>',
  up: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z"/></svg>'
}, Kd = 1, o0 = 4, Xd = 16, $d = 32, n0 = 128, r0 = 256, Jd = 16384, i0 = 1, s0 = 2, Qd = 4, l0 = 8, c0 = {
  open: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/></svg>',
  stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5" fill="currentColor"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l5 5-5 5"/><path d="M21 7l-5 5 5 5"/></svg>'
}, tp = { curtain: ["mdi:curtains", "mdi:curtains-closed"], blind: ["mdi:roller-shade", "mdi:roller-shade-closed"], venetian: ["mdi:blinds-horizontal", "mdi:blinds-horizontal-closed"] }, d0 = { curtain: "curtains", blind: "blind", venetian: "blinds" }, Mr = {
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
}, ep = ["covers", "people", "openings", "leaks", "vacuum"], ap = "homecore_house", op = "homecore-house-used", Cl = ["switch", "fan", "input_boolean", "automation"], np = "homecore-house-look", p0 = [["look", "Look"], ["house", "House page"], ["weather", "Weather"]], f0 = [["popup", "Popup"], ["sheet", "Sheet"]], u0 = [["auto", "Automatic"], ["cut", "Cut short"], ["wrap", "Two lines"], ["scroll", "Scroll"]], h0 = [["day", "Daytime 06–22"], ["waking", "Waking 07–23"], ["all", "All day"]], m0 = [["bitmap", "Pixel"], ["onebit", "1-bit"], ["smooth", "Smooth"], ["line", "Line"]], Sr = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', g0 = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', b0 = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>', rp = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"/></svg>', _l = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>', w0 = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 13C6.14 13 4.59 14.28 4.14 16H2V18H4.14C4.59 19.72 6.14 21 8 21S11.41 19.72 11.86 18H22V16H11.86C11.41 14.28 9.86 13 8 13M8 19C6.9 19 6 18.1 6 17C6 15.9 6.9 15 8 15S10 15.9 10 17C10 18.1 9.1 19 8 19M19.86 6C19.41 4.28 17.86 3 16 3S12.59 4.28 12.14 6H2V8H12.14C12.59 9.72 14.14 11 16 11S19.41 9.72 19.86 8H22V6H19.86M16 9C14.9 9 14 8.1 14 7C14 5.9 14.9 5 16 5S18 5.9 18 7C18 8.1 17.1 9 16 9Z"/></svg>', ip = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"/></svg>', Li = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/></svg>', sp = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', Xp = (o) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + o.map((r) => '<path d="' + r + '"/>').join("") + "</svg>", Di = Xp(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), lp = Xp(["M20 6L9 17L4 12"]), $a = (o, r = "") => '<span class="tfAreaGlyph" data-icon-for="' + q(o || "") + '"' + (r ? ' data-icon-name="' + q(r) + '"' : "") + "></span>", v0 = (o) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (o ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', y0 = 1, x0 = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], cp = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, Ei = ["door", "window", "garage_door", "opening"], dp = { moisture: ["detected water", "dry"], smoke: ["detected smoke", "clear"], gas: ["detected gas", "clear"], carbon_monoxide: ["detected carbon monoxide", "clear"], safety: ["became unsafe", "safe"] }, Ar = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve"], k0 = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], M0 = 10, S0 = 20, A0 = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, C0 = ["living room", "bedroom", "office"];
function _0(o, { config: r, getHass: c }) {
  var td, ed, ad;
  const p = (t) => o.getElementById(t), g = p("app"), v = r || {}, w = String(v.layout || "").toLowerCase().replace("_", "-") === "test-focus", S = String(v.page || "").toLowerCase() === "overview";
  let I = Xa.get(zd) === "1", y = {};
  const _ = (t) => {
    var e;
    return (e = c()) == null ? void 0 : e.callWS(t);
  }, O = (t, e, a) => _({ type: "call_service", domain: t, service: e, service_data: a }), V = o.querySelector("#appearancePane .toggleList");
  V && !p("densityToggle") && (V.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), p("densityToggle").addEventListener("click", () => {
    I = !I, Xa.set(zd, I ? "1" : "0"), Z();
  }));
  const Q = [
    ["weather", "Weather", "The forecast under Home.", (t) => t.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (t) => t.startsWith("sensor.") && Vt(t).device_class === "power" && /^(W|kW)$/.test(Vt(t).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm in the Security popup.", (t) => t.startsWith("alarm_control_panel.")]
  ], et = (t, e, a, n) => '<div class="themeChoice" id="' + t + '" role="group" aria-label="' + e + '">' + n.map(([i, d]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + a + '="' + i + '">' + d + "</button>").join("") + "</div>", at = (t, e, a, n) => '<div class="toggleRow"' + (n ? ' id="' + n + '"' : "") + "><div><strong>" + t + "</strong>" + (e ? '<div class="status">' + e + "</div>" : "") + "</div>" + a + "</div>";
  function X() {
    var C, T;
    if (!w || p("housePane")) return;
    const t = p("settingsView");
    t.querySelector(".settingsTitle").textContent = "HomeCore settings";
    const e = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], a = (D, R) => '<div class="houseTab' + (D === "look" ? " active" : "") + '" data-house-pane="' + D + '"><section class="card">' + R + "</section></div>";
    t.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + e.map(([D, R]) => '<button class="tab segBtn' + (D === "look" ? " active" : "") + '" type="button" data-house-tab="' + D + '">' + R + "</button>").join("") + "</div>" + // Appearance in groups (Matt, 8 Nov), each one's title inside its card as a card header (Matt, 9 Nov)
    a("look", p0.map(([D, R]) => '<div class="tfSetGroup"><div class="toggleList" data-look-group="' + D + '"><div class="tfCardTitle">' + R + "</div></div></div>").join("")) + // Lights as cards by default, with a Cards | Table choice (Matt, 9 Nov)
    a("lights", '<div class="tfLightView"><div class="themeChoice" role="group" aria-label="Show lights as"><button class="wxLayoutBtn" type="button" data-light-view="cards">Cards</button><button class="wxLayoutBtn" type="button" data-light-view="table">Table</button></div></div><p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div><div class="tfLightCards" id="lightCards"></div>') + a("sources", '<div class="toggleList">' + Q.map(([D, R, G]) => at(R, G, '<select class="settingsSelect" data-source="' + D + '" aria-label="' + R + '"></select>')).join("") + "</div>") + a("sums", '<div class="toggleList">' + Object.entries(Mr).map(([D, R]) => at(R.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + D + '" aria-label="' + R.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const n = (D) => t.querySelector('[data-look-group="' + D + '"]'), i = (D) => D == null ? void 0 : D.closest(".toggleRow");
    [i(t.querySelector(".themeBtn"))].forEach((D) => D && n("look").appendChild(D));
    const d = i(p("densityToggle"));
    d && (d.hidden = !0), [i(p("moreInfoChoice")), i(p("namesChoice"))].forEach((D) => D && n("house").appendChild(D)), n("house").insertAdjacentHTML("beforeend", at("Lights", "How lights show on the house page.", et("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + at("Pad", "What the Dual Axis Controller’s pad sets on its tile.", et("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow")), [i(p("hoursChoice")), i(p("wxStyleChoice"))].forEach((D) => D && n("weather").appendChild(D));
    const l = p("housePane"), f = l.querySelector(".houseTabs"), h = f.querySelector(".rubberIndicator"), k = "homecore-light-view", M = (D) => {
      l.classList.toggle("tfLightCardsOn", D === "cards"), l.querySelectorAll("[data-light-view]").forEach((R) => R.setAttribute("aria-pressed", String(R.dataset.lightView === D))), Xa.set(k, D);
    };
    M(Xa.get(k) === "table" ? "table" : "cards"), l.querySelector(".tfLightView").addEventListener("click", (D) => {
      const R = D.target.closest("[data-light-view]");
      R && M(R.dataset.lightView);
    }), new ResizeObserver(() => lt()).observe(l), (T = (C = document.fonts) == null ? void 0 : C.ready) == null || T.then(() => lt());
    const x = (D) => {
      const R = f.querySelector(".tab.active");
      h.style.transition = "none", D ? Pi(h, h.offsetLeft, h.offsetWidth, R.offsetLeft, R.offsetWidth) : (h.style.left = R.offsetLeft + "px", h.style.width = R.offsetWidth + "px");
    };
    new ResizeObserver(() => x(!1)).observe(f), l.addEventListener("click", (D) => {
      const R = D.target.closest("[data-house-tab]");
      if (R) {
        f.querySelectorAll(".tab").forEach((L) => L.classList.toggle("active", L === R)), l.querySelectorAll(".houseTab").forEach((L) => L.classList.toggle("active", L.dataset.housePane === R.dataset.houseTab)), R.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), x(!0), lt();
        return;
      }
      const G = D.target.closest("[data-light-fav]");
      if (G) {
        rr(G.dataset.lightFav);
        return;
      }
      const B = D.target.closest("[data-light-pick]");
      if (B) {
        const [L, bt] = B.dataset.lightPick.split("|"), Wt = { ...zt[L] };
        B.dataset.v ? Wt[bt] = B.dataset.v : delete Wt[bt], zt[L] = Wt, aa(), [...We.keys()].filter((Dt) => Dt.endsWith(":" + bt)).forEach((Dt) => We.delete(Dt)), Na();
        return;
      }
      const Y = D.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!Y || Y.disabled)) {
        if (Y.dataset.lights && (zt.lights = Y.dataset.lights), Y.dataset.dacPad && (zt.dacPad = Y.dataset.dacPad), (Y.dataset.lights || Y.dataset.dacPad) && (aa(), We.clear()), Y.dataset.sumToggle) {
          const L = Y.dataset.sumToggle, bt = new Set(mt.hiddenSums || []);
          bt.has(L) ? bt.delete(L) : bt.add(L), mt = { ...mt, hiddenSums: [...bt] }, Oe();
        }
        Na();
      }
    }), l.addEventListener("change", (D) => {
      const R = D.target;
      R.dataset.source && (mt = { ...mt, sources: { ...mt.sources || {}, [R.dataset.source]: R.value || void 0 } }, Oe());
      const G = R.dataset.lightStyle || R.dataset.lightPad;
      if (G) {
        const B = R.dataset.lightStyle ? "lightStyles" : "lightPads", Y = { ...zt[B] };
        R.value ? Y[G] = R.value : delete Y[G], zt[B] = Y, aa(), [...We.keys()].filter((L) => L.endsWith(":" + G)).forEach((L) => We.delete(L));
      }
      Na();
    });
  }
  function j() {
    var x, C;
    An() && Sn();
    const t = p("housePane");
    if (!t) return;
    const e = !!customElements.get(pa);
    t.querySelectorAll("[data-lights]").forEach((T) => T.setAttribute("aria-pressed", String(T.dataset.lights === zt.lights))), p("lightsRow").querySelector(".status").textContent = e || !An() ? "How lights show on the house page." : Ho === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", t.querySelectorAll("[data-dac-pad]").forEach((T) => T.setAttribute("aria-pressed", String(T.dataset.dacPad === zt.dacPad))), p("dacPadRow").hidden = !An();
    for (const T of t.querySelectorAll("[data-source]")) {
      if (T === o.activeElement) continue;
      const [D] = Q.find(([G]) => G === T.dataset.source), R = Object.keys(y).filter(Q.find(([G]) => G === D)[3]).sort((G, B) => kt(G).localeCompare(kt(B)));
      T.dataset.sig !== R.join(",") && (T.innerHTML = '<option value="">Automatic</option>' + R.map((G) => '<option value="' + q(G) + '">' + q(kt(G)) + "</option>").join(""), T.dataset.sig = R.join(",")), T.value = R.includes((x = mt.sources) == null ? void 0 : x[D]) ? mt.sources[D] : "";
    }
    t.querySelectorAll("[data-sum-toggle]").forEach((T) => {
      const D = !(mt.hiddenSums || []).includes(T.dataset.sumToggle);
      T.classList.toggle("on", D), T.setAttribute("aria-checked", String(D));
    });
    const a = p("lightRows"), n = p("lightCards"), i = o.activeElement, d = a != null && a.contains(i) || n != null && n.contains(i) ? i : null;
    if (!a || d != null && d.matches("select")) {
      lt();
      return;
    }
    const l = new Set($()), f = (T, D, R, G) => '<option value="' + T + '"' + (T === R ? " selected" : "") + ">" + D + "</option>", h = Object.keys(y).filter((T) => T.startsWith("light.")).sort((T, D) => !Ct.get(T) - !Ct.get(D) || (Ct.get(T) || "").localeCompare(Ct.get(D) || "") || kt(T).localeCompare(kt(D))).map((T) => {
      const D = zt.lightStyles[T] || "", R = zt.lightPads[T] || "", G = l.has(T), B = q(kt(T));
      return "<tr><td><strong>" + B + "</strong></td><td>" + q(Ct.get(T) || "—") + "</td><td>" + q(Ee(T)) + '</td><td class="metaSwitchCol"><button class="switch' + (G ? " on" : "") + '" type="button" role="switch" aria-checked="' + G + '" data-light-fav="' + q(T) + '" aria-label="' + B + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + q(T) + '" aria-label="' + B + ' tile">' + f("", "Default", D) + f("tile", "HomeCore tile", D) + f("dac", "Dual Axis Controller", D) + '</select></td><td><select class="settingsSelect" data-light-pad="' + q(T) + '" aria-label="' + B + ' pad"' + (ga(T) ? "" : " disabled") + ">" + f("", "Default", R) + f("temperature", "Temperature", R) + f("colour", "Colour", R) + "</select></td></tr>";
    }).join(""), k = (T, D, R, G, B) => '<div class="themeChoice" role="group" aria-label="' + R + '">' + G.map(([Y, L]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Y === B) + '" data-light-pick="' + T + "|" + q(D) + '" data-v="' + Y + '">' + L + "</button>").join("") + "</div>", M = Object.keys(y).filter((T) => T.startsWith("light.")).sort((T, D) => !Ct.get(T) - !Ct.get(D) || (Ct.get(T) || "").localeCompare(Ct.get(D) || "") || kt(T).localeCompare(kt(D))).map((T) => {
      const D = l.has(T), R = q(kt(T)), G = [Ct.get(T), Ee(T)].filter(Boolean).map(q).join(" · ");
      return '<div class="toggleList"><div class="toggleRow"><div><strong>' + R + '</strong><div class="status">' + G + "</div></div></div>" + at("Favourite", "", '<button class="switch' + (D ? " on" : "") + '" type="button" role="switch" aria-checked="' + D + '" data-light-fav="' + q(T) + '" aria-label="' + R + ' is a favourite"></button>') + at("Tile", "", k("lightStyles", T, R + " tile", [["", "Default"], ["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]], zt.lightStyles[T] || "")) + (ga(T) ? at("Pad", "", k("lightPads", T, R + " pad", [["", "Default"], ["temperature", "Temperature"], ["colour", "Colour"]], zt.lightPads[T] || "")) : "") + "</div>";
    }).join("");
    a.dataset.html !== h && (a.innerHTML = h, a.dataset.html = h), n.dataset.html !== M && (n.innerHTML = M, n.dataset.html = M), d != null && d.dataset.lightFav && ((C = (n.contains(d) ? n : a).querySelector('[data-light-fav="' + CSS.escape(d.dataset.lightFav) + '"]')) == null || C.focus({ preventScroll: !0 })), lt();
  }
  function lt() {
    var e, a, n;
    const t = p("housePane");
    if (t)
      for (const i of t.querySelectorAll(".themeChoice")) {
        const d = [...i.querySelectorAll("button")];
        let l = (e = i.nextElementSibling) != null && e.classList.contains("tfChoiceList") ? i.nextElementSibling : null;
        if (!l) {
          l = document.createElement("select"), l.className = "settingsSelect tfChoiceList", l.setAttribute("aria-label", i.getAttribute("aria-label") || ((n = (a = i.closest(".toggleRow")) == null ? void 0 : a.querySelector("strong")) == null ? void 0 : n.textContent) || ""), l.addEventListener("change", () => {
            var x;
            return (x = d[Number(l.value)]) == null ? void 0 : x.click();
          }), i.after(l);
          const M = () => {
            l.innerHTML = d.map((C, T) => '<option value="' + T + '"' + (C.disabled ? " disabled" : "") + ">" + q(C.textContent) + "</option>").join("");
            const x = d.findIndex((C) => C.getAttribute("aria-pressed") === "true" || C.classList.contains("active"));
            x >= 0 && (l.value = String(x));
          };
          new MutationObserver(M).observe(i, { subtree: !0, attributes: !0, attributeFilter: ["aria-pressed", "class", "disabled"] }), M();
        }
        const f = (M) => {
          i.hidden !== !M && (i.hidden = !M), l.hidden !== M && (l.hidden = M);
        };
        if (d.length > 3) {
          f(!1);
          continue;
        }
        if (!i.getClientRects().length && !l.getClientRects().length) {
          l.dataset.fit || f(!0);
          continue;
        }
        const h = i.hidden;
        i.hidden = !1;
        const k = d.every((M) => M.scrollWidth <= M.clientWidth + 1);
        i.hidden = h, f(k), l.dataset.fit = "1";
      }
  }
  const pt = document.createElement("div");
  pt.className = "densityBadge", pt.setAttribute("aria-live", "polite"), pt.hidden = !0, g.appendChild(pt);
  let gt = 0;
  function nt() {
    if (!I) return;
    const t = p("homeView"), e = (d) => d.offsetParent !== null && !d.closest("[hidden]");
    t.querySelectorAll(":scope .card, :scope .tfAction").forEach((d) => {
      e(d) && (d.dataset.h = Math.round(d.getBoundingClientRect().height) + " px");
    });
    const a = [...t.querySelectorAll(".activityRow, .tfAction, .wxNow")].filter(e), n = window.innerHeight, i = a.filter((d) => {
      const l = d.getBoundingClientRect();
      return l.height > 0 && l.top >= 0 && l.bottom <= n + 0.5;
    }).length;
    pt.hidden = !t.classList.contains("active"), pt.innerHTML = "<b>" + i + "</b><small>of " + a.length + " readings on screen</small>";
  }
  const J = () => {
    I && requestAnimationFrame(nt);
  };
  function Z() {
    var t;
    g.classList.toggle("showDensity", I), (t = p("densityToggle")) == null || t.classList.toggle("on", I), pt.hidden = !I, clearInterval(gt), I && (gt = setInterval(nt, 1e3), nt());
  }
  window.addEventListener("scroll", J, { capture: !0, passive: !0 }), window.addEventListener("resize", J, { passive: !0 });
  const P = o.querySelector("#homeView .grid"), vt = document.createElement("style");
  o.appendChild(vt);
  const Bt = new ResizeObserver(() => It()), it = /* @__PURE__ */ new Set(), z = (t) => {
    const e = t.getBoundingClientRect().height;
    return Math.abs(e - t.offsetHeight) < 1 ? e : t.offsetHeight;
  };
  function It() {
    const t = g.classList.contains("tfAreaOpen") && !g.classList.contains("tfWeatherOpen");
    if (P.classList.toggle("tfStack", t), it.forEach((h) => {
      (!t || !h.isConnected) && (Bt.unobserve(h), it.delete(h));
    }), !t) {
      vt.textContent = "";
      return;
    }
    const e = getComputedStyle(P), a = parseFloat(e.columnGap) || 0, n = e.gridTemplateColumns.split(" ").length, i = [...P.children].filter((h) => h.dataset.k && h.offsetParent);
    vt.disabled = !0;
    const d = i.map((h) => {
      const k = getComputedStyle(h), M = /span (\d+)/.exec(k.gridColumnStart + " " + k.gridColumnEnd);
      return Math.min(n, M ? +M[1] : k.gridColumnEnd === "-1" ? n : 1);
    });
    vt.disabled = !1;
    let l = 0;
    const f = i.map((h, k) => {
      it.has(h) || (it.add(h), Bt.observe(h));
      const M = d[k];
      l + M > n && (l = 0);
      const x = l + 1;
      return l = (l + M) % n, '#homeView .grid.tfStack>[data-k="' + CSS.escape(h.dataset.k) + '"]{grid-column:' + x + " / span " + M + ";grid-row-end:span " + Math.max(1, Math.ceil(z(h) + a)) + "}";
    }).join(`
`);
    vt.textContent !== f && (vt.textContent = f);
  }
  new MutationObserver(It).observe(P, { childList: !0 }), new MutationObserver(It).observe(g, { attributes: !0, attributeFilter: ["class"] });
  let F = null, tt = null, E = null;
  const dt = /* @__PURE__ */ new Map(), ot = /* @__PURE__ */ new Map(), rt = /* @__PURE__ */ new Map(), yt = 6;
  let ft = null;
  const xt = /* @__PURE__ */ new Map(), Ft = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map();
  let mt = { favourites: null }, Ue = {}, to = {}, Yo = [], To = null;
  const Wa = (() => {
    try {
      return JSON.parse(Xa.get(op)) || {};
    } catch {
      return {};
    }
  })();
  let Ct = /* @__PURE__ */ new Map(), Me = 0;
  function Oe() {
    clearTimeout(Me), Me = setTimeout(() => Promise.resolve(_({ type: "frontend/set_user_data", key: ap, value: mt })).catch(() => {
    }), 400);
  }
  const zt = (() => {
    let t = {};
    try {
      t = JSON.parse(Xa.get(np)) || {};
    } catch {
    }
    const e = (a, n) => Object.fromEntries(Object.entries(a || {}).filter(([, i]) => n.includes(i)));
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
  })(), aa = () => Xa.set(np, JSON.stringify(zt)), zn = () => {
    g.dataset.more = zt.more, g.dataset.names = zt.names, qs();
  };
  w && V && !p("moreInfoChoice") && (p("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + f0.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (zt.more === t) + '" data-more-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), p("moreInfoChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-more-style]");
    e && (zt.more = e.dataset.moreStyle, aa(), zn(), p("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  }), p("moreInfoChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Long names</strong><div class="status">How a name or state too long for its space shows.</div></div><div class="themeChoice" id="namesChoice" role="group" aria-label="Long names">' + u0.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (zt.names === t) + '" data-names-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), p("namesChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-names-style]");
    e && (zt.names = e.dataset.namesStyle, zt.namesPicked = !0, aa(), zn(), p("namesChoice").querySelectorAll("[data-names-style]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  }), p("namesChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Next hours</strong><div class="status">The hours each day shows on the Weather page.</div></div><div class="themeChoice" id="hoursChoice" role="group" aria-label="Next hours">' + h0.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (zt.hoursWindow === t) + '" data-hours-window="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), p("hoursChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-hours-window]");
    e && (zt.hoursWindow = e.dataset.hoursWindow, aa(), ge == null || ge.refresh(), p("hoursChoice").querySelectorAll("[data-hours-window]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  }), p("hoursChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Weather art</strong><div class="status">How the weather and the sky are drawn.</div></div><div class="themeChoice" id="wxStyleChoice" role="group" aria-label="Weather art">' + m0.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (zt.wxStyle === t) + '" data-wx-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), p("wxStyleChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-wx-style]");
    e && (zt.wxStyle = e.dataset.wxStyle, aa(), ge == null || ge.setStyle(zt.wxStyle), be == null || be.forEach((a) => a.setStyle(zt.wxStyle)), p("wxStyleChoice").querySelectorAll("[data-wx-style]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  })), X();
  let jt = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const ua = /* @__PURE__ */ new Map();
  let Tr = "";
  const Lr = w ? ju({ onChange: () => Ce() }) : null;
  w && g.classList.add("house");
  const ha = Object.assign(document.createElement("div"), { className: "tfBento" });
  let ge = null, Dr = null, Zo = !1;
  function Er(t) {
    const e = Ot();
    if (g.classList.toggle("houseBento", !!e), ge && (Dr !== e || t == null) && (ge.destroy(), ge = null), !e || t == null) {
      ha.remove();
      return;
    }
    ha.isConnected || P.append(ha), ha.style.order = t, !ge && !Zo && (ge = qd(ha, { getHass: c, entityId: e, style: zt.wxStyle, hoursWindow: () => zt.hoursWindow, radarSource: Zn }), Dr = e);
  }
  const Gn = [
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
  ], Un = Gn.map(([t]) => t), Lo = ["aq", "pollen", "radar", "hourly", "sun", "moon", "uv", "humidity", "pressure", "wind", "visibility"], Wi = { hourly: 2 }, ja = Object.fromEntries(Gn.map(([t]) => [t, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + t })]));
  let be = null, Yn = null;
  function Br(t) {
    const e = Ot();
    be && Yn !== e && (be.forEach((a) => a.destroy()), be = null), Object.values(ja).forEach((a) => e ? !a.isConnected && P.append(a) : a.remove()), e && !be && !Zo && (be = /* @__PURE__ */ new Map(), Yn = e), Pr();
  }
  const Zn = () => {
    var t;
    return ((t = ae().opts.radar) == null ? void 0 : t.source) || "rainviewer";
  }, Rr = () => [["rainviewer", "RainViewer"], ...Object.values(y).filter((t) => t.entity_id.startsWith("camera.")).sort((t, e) => kt(t.entity_id).localeCompare(kt(e.entity_id))).map((t) => ["camera:" + t.entity_id, kt(t.entity_id)])];
  function Pr() {
    if (!be || Zo) return;
    const t = new Set(ae().hidden);
    Gn.forEach(([e, a]) => {
      be.has(e) || t.has(e) && !(Kt != null && Kt.fromTray && Kt.key === e) || be.set(e, qd(ja[e], { getHass: c, entityId: Yn, style: zt.wxStyle, cards: a, onOpen: e === "wx" ? () => Rc("weather") : void 0, radarSource: Zn }));
    });
  }
  const Vt = (t) => {
    var e;
    return ((e = y[t]) == null ? void 0 : e.attributes) || {};
  }, kt = (t) => Vt(t).friendly_name || t, Ae = (t, e) => Fa(t) || (Number(Vt(t).supported_features) & e) === e, Jt = (t) => {
    const e = String(t ?? "").replace(/_/g, " ");
    return e.charAt(0).toUpperCase() + e.slice(1);
  }, Ye = (t, e = 1) => Number(t).toLocaleString(void 0, { minimumFractionDigits: e, maximumFractionDigits: e }), eo = (t) => (t == null ? void 0 : t.state) === "on" ? t.attributes.brightness != null ? Math.max(1, Math.round(t.attributes.brightness / 2.55)) : 100 : 0, ao = (t) => Vt(t).supported_color_modes || [], ji = (t, e) => [5, 3, 1].map((a) => {
    const n = (a + t / 60) % 6;
    return 255 * (1 - e / 100 * Math.max(0, Math.min(n, 4 - n, 1)));
  }), Kn = (t) => (t /= 255, t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)), Hr = (t) => 0.2126 * Kn(t[0]) + 0.7152 * Kn(t[1]) + 0.0722 * Kn(t[2]), Vi = (t, e) => {
    const a = Hr(t), n = Hr(e);
    return (Math.max(a, n) + 0.05) / (Math.min(a, n) + 0.05);
  }, zi = 0.55, wn = ["hs", "xy", "rgb", "rgbw", "rgbww"], Or = (t) => {
    const e = Vt(t), a = wn.includes(e.color_mode);
    return (a && e.rgb_color ? e.rgb_color : a && e.hs_color ? ji(...e.hs_color) : [255, 170, 0]).map((n) => Math.round(Math.max(0, Math.min(255, n))));
  }, Gi = { heat: [255, 111, 34], cool: [33, 150, 243], heat_cool: [255, 193, 7], auto: [76, 175, 80], dry: [255, 152, 0], fan_only: [0, 188, 212] };
  function Ko(t) {
    var n;
    const e = t.split(".")[0], a = (n = y[t]) == null ? void 0 : n.state;
    return !a || a === "unavailable" || a === "unknown" ? null : e === "light" ? a === "on" ? Or(t) : null : e === "climate" ? Gi[a] || null : e === "cover" ? a !== "closed" ? [146, 107, 199] : null : e === "lock" ? a !== "locked" ? [244, 67, 54] : null : e === "media_player" ? ["playing", "paused", "on", "buffering"].includes(a) ? [3, 169, 244] : null : e === "humidifier" || e === "valve" ? ["on", "open", "opening", "closing"].includes(a) ? [33, 150, 243] : null : e === "vacuum" ? ["cleaning", "returning"].includes(a) ? [0, 150, 136] : null : e === "alarm_control_panel" ? a !== "disarmed" && a !== "triggered" ? [76, 175, 80] : null : e === "fan" ? a === "on" ? [0, 188, 212] : null : (e === "switch" || e === "input_boolean") && a === "on" ? [255, 193, 7] : null;
  }
  function Xn(t, e, a = !1) {
    const [n, i, d] = t.map((D) => D / 255), l = Math.max(n, i, d), f = Math.min(n, i, d), h = l - f, k = h ? (l === n ? (i - d) / h + (i < d ? 6 : 0) : l === i ? (d - n) / h + 2 : (n - i) / h + 4) * 60 : 0, M = (l + f) / 2, x = h ? h / (1 - Math.abs(2 * M - 1)) : 0, C = h < 0.1 ? Math.min(x, 0.25) : 1, T = (D) => {
      const R = (B) => (B + k / 30) % 12, G = C * Math.min(D, 1 - D);
      return [0, 8, 4].map((B) => Math.round(255 * (D - G * Math.max(-1, Math.min(R(B) - 3, 9 - R(B), 1)))));
    };
    for (let D = 0.5; a ? D < 0.96 : D > 0.04; D += a ? 0.01 : -0.01) {
      const R = T(D);
      if (Vi(R, e) >= 3) return "rgb(" + R.join(",") + ")";
    }
    return a ? "#ffffff" : "#26221e";
  }
  const vn = (t) => {
    const e = [1, 3, 5].map((a) => parseInt(t.slice(a, a + 2), 16));
    return Math.max(...e) - Math.min(...e) < 26 ? "" : ";--sum-d:" + Xn(e, [58, 58, 58], !0) + ";--sum-l:" + Xn(e, [230, 230, 230]);
  }, Nr = { d: ["#ffb894", "#d2b4ff", "#9dcbff"], l: ["#f0946a", "#b48ae6", "#6fa8e8"] }, Ui = () => [0, 1, 2].map((t) => "--g" + t + "-d:" + Nr.d[t] + ";--g" + t + "-l:" + Nr.l[t]).join(";"), Yi = '<svg class="tfGradDefs" aria-hidden="true" focusable="false"><defs><linearGradient id="hcClimateGrad" x1="0" y1="0" x2="0" y2="1">' + [0.15, 0.5, 0.85].map((t, e) => '<stop offset="' + t + '" style="stop-color:var(--g' + e + ')"/>').join("") + "</linearGradient></defs></svg>", oo = (t) => {
    const e = t.map((a) => Math.round(a + (255 - a) * zi));
    return "--light-soft:rgb(" + e.join(",") + ");--light-ink:" + Xn(t, e);
  }, Zi = (t) => oo(Or(t)), yn = (t) => {
    const e = Ko(t);
    return e ? ' data-light style="' + oo(e) + '"' : "";
  }, Ze = (t) => {
    const e = ao(t);
    return e.length ? e.some((a) => a !== "onoff") : Vt(t).brightness != null;
  }, xn = (t) => [Vt(t).min_color_temp_kelvin || 2e3, Vt(t).max_color_temp_kelvin || 6500], Da = (t) => new Date(t).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
  function Do(t) {
    const e = Math.max(1, Math.round((Date.now() - t) / 1e3));
    if (e < 10) return "Just now";
    if (e < 60) return e + " seconds ago";
    const a = Math.round(e / 60);
    if (a < 60) return a + (a === 1 ? " minute ago" : " minutes ago");
    const n = Math.round(a / 60);
    if (n < 24) return n + (n === 1 ? " hour ago" : " hours ago");
    const i = Math.round(n / 24);
    return i + (i === 1 ? " day ago" : " days ago");
  }
  const ca = (t) => {
    var e;
    return Vt(t).current_position ?? (((e = y[t]) == null ? void 0 : e.state) === "closed" ? 0 : 100);
  }, Xo = (t) => {
    var e;
    return Ga("pos", t, ((e = xt.get(t)) == null ? void 0 : e.pos) ?? ca(t));
  }, Ir = (t) => {
    var e;
    return Ga("tilt", t, ((e = xt.get(t)) == null ? void 0 : e.tilt) ?? Vt(t).current_tilt_position);
  };
  function Ee(t) {
    var l;
    const e = y[t];
    if (!e) return "Not found";
    if (e.state === "unavailable") return "Unavailable";
    const a = e.attributes, n = t.split(".")[0];
    if (n === "light") {
      if (e.state !== "on") return "Off";
      const f = a.color_temp_kelvin;
      return (Ze(t) ? eo(e) + "%" : "On") + (a.color_mode === "color_temp" && f ? " · " + Number(f).toLocaleString() + "k" : wn.includes(a.color_mode) ? " · Colour" : "");
    }
    if (n === "climate") return (e.state === "off" ? "Off" : Jt(a.hvac_action || e.state)) + " · " + Ye(a.current_temperature) + " °C now";
    if (n === "cover") {
      const f = ca(t), h = a.current_tilt_position;
      return e.state === "opening" || e.state === "closing" ? Jt(e.state) + " - " + f + "%" : (f <= 0 ? "Closed" : f >= 100 ? "Open" : "Partially open") + (h > 0 && h < 100 ? " · tilted" : "");
    }
    if (n === "humidifier") return e.state !== "on" ? "Off" : Jt(a.action || "on") + " · " + a.current_humidity + "% now";
    if (n === "vacuum") return Jt(e.state) + (e.state === "cleaning" && ((l = a.rooms) != null && l.length) ? " · " + a.rooms.join(", ") : "") + (a.battery_level != null ? " · " + a.battery_level + "%" : "");
    if (n === "media_player") return e.state === "playing" || e.state === "paused" ? (e.state === "paused" ? "Paused · " : "") + (a.media_title || "Playing") : Jt(e.state);
    if (n === "alarm_control_panel") return cp[e.state] || Jt(e.state);
    if (n === "lock" || n === "valve") return Jt(e.state);
    if (n === "switch") return e.state === "on" ? "On" : "Off";
    if (n === "plant") return e.state === "ok" ? "Healthy" : Jt(a.problem);
    if (n === "binary_sensor")
      return a.device_class === "battery" ? e.state === "on" ? "Low" : "Normal" : a.device_class === "problem" ? e.state === "on" ? "Problem" : "OK" : a.device_class === "moisture" ? e.state === "on" ? "Wet" : "Dry" : Ei.includes(a.device_class) ? e.state === "on" ? "Open" : "Closed" : e.state === "on" ? "Detected" : "Clear";
    if (a.rang) return "Rang at " + Da(a.rang);
    const i = c();
    if (i != null && i.formatEntityState && !Fa(t))
      try {
        return i.formatEntityState(e);
      } catch {
      }
    const d = Number(e.state);
    if (e.state !== "" && Number.isFinite(d)) {
      const f = Math.abs(d) >= 100 ? 0 : Math.abs(d) >= 10 ? 1 : 2, h = a.unit_of_measurement ? a.unit_of_measurement === "%" ? "%" : " " + a.unit_of_measurement : "";
      return d.toLocaleString(void 0, { maximumFractionDigits: f }) + h + (a.plant_low ? " · Low" : a.plant_high ? " · High" : "");
    }
    return Jt(e.state);
  }
  const Eo = (t) => t >= 1e3 ? Ye(t / 1e3, 2) + " kW" : Math.round(t).toLocaleString() + " W";
  function Va(t) {
    var a, n;
    const e = c();
    t.querySelectorAll("[data-icon-for]").forEach((i) => {
      var f;
      const d = y[i.dataset.iconFor], l = i.dataset.iconName || "";
      if (customElements.get("ha-state-icon") && d && !l) {
        let h = i.firstElementChild;
        (!h || h.localName !== "ha-state-icon") && (i.textContent = "", h = document.createElement("ha-state-icon"), i.appendChild(h)), h.hass = e, h.stateObj = d;
      } else if (customElements.get("ha-icon")) {
        let h = i.firstElementChild;
        (!h || h.localName !== "ha-icon") && (i.textContent = "", h = document.createElement("ha-icon"), i.appendChild(h)), h.icon = l || ((f = d == null ? void 0 : d.attributes) == null ? void 0 : f.icon) || "mdi:circle-medium";
      } else i.textContent || (i.textContent = (i.dataset.letter || kt(i.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    }), (a = t.querySelectorAll) == null || a.call(t, ".tfIcon").forEach(qr), (n = t.classList) != null && n.contains("tfIcon") && qr(t), $n();
  }
  const Fr = /* @__PURE__ */ new Map();
  function qr(t) {
    var d, l, f;
    const e = (((d = t.closest("[data-k]")) == null ? void 0 : d.dataset.k) || "") + "|" + (t.dataset.iconFor || ((l = t.querySelector("[data-icon-for]")) == null ? void 0 : l.dataset.iconFor) || t.getAttribute("aria-label") || ""), a = getComputedStyle(t), n = { backgroundColor: a.backgroundColor, color: a.color }, i = Fr.get(e);
    Fr.set(e, n), !(!i || i.backgroundColor === n.backgroundColor && i.color === n.color || (f = window.matchMedia) != null && f.call(window, "(prefers-reduced-motion: reduce)").matches) && t.animate([i, n], { duration: xe.warp.cdur, delay: xe.warp.cdelay, easing: ke[xe.warp.ease], fill: "backwards" });
  }
  const Ki = "[data-icon-for]>:is(ha-state-icon,ha-icon),.tfIcon>svg", Xi = (t) => {
    const e = [t];
    for (; e.length; ) {
      const a = e.shift();
      if (a.localName === "svg") return a;
      a.shadowRoot && e.push(...a.shadowRoot.children), e.push(...a.children);
    }
    return null;
  };
  function $i(t) {
    var T, D, R;
    const e = t.localName === "svg" ? t : Xi(t), a = e ? [...e.querySelectorAll("path,rect,circle,ellipse,polygon,polyline,line")] : [];
    if (!a.length) return !e;
    const n = (T = t.closest(".tfIcon")) == null ? void 0 : T.offsetWidth;
    if (n === void 0) return !0;
    if (!n) return !1;
    const i = n + "|" + a.map((G) => G.getAttribute("d") || G.localName).join("|");
    if (t.dataset.fitted === i) return !0;
    let d = 1 / 0, l = 1 / 0, f = -1 / 0, h = -1 / 0;
    for (const G of a) {
      const B = G.getBBox(), Y = getComputedStyle(G), L = Y.stroke !== "none" ? (parseFloat(Y.strokeWidth) || 0) / 2 : 0;
      !B.width && !B.height || (d = Math.min(d, B.x - L), l = Math.min(l, B.y - L), f = Math.max(f, B.x + B.width + L), h = Math.max(h, B.y + B.height + L));
    }
    if (!(f > d)) return !1;
    const k = (R = (D = e.viewBox) == null ? void 0 : D.baseVal) != null && R.width ? e.viewBox.baseVal : { x: 0, y: 0, width: 24, height: 24 }, M = n > 40 ? n * (26 / 40) : n - 14, x = M * k.width / Math.max(f - d, h - l), C = x / k.width;
    return t.localName === "svg" ? (t.style.width = x + "px", t.style.height = x + "px") : t.style.setProperty("--mdc-icon-size", x + "px"), e.style.translate = ((k.x + k.width / 2 - (d + f) / 2) * C).toFixed(2) + "px " + ((k.y + k.height / 2 - (l + h) / 2) * C).toFixed(2) + "px", t.dataset.fitted = i, !0;
  }
  let kn = 0;
  function Wr(t = 0) {
    clearTimeout(kn), [...o.querySelectorAll(Ki)].filter((a) => !$i(a)).length && t < 5 && (kn = setTimeout(() => Wr(t + 1), 300));
  }
  function $n() {
    clearTimeout(kn), kn = setTimeout(() => Wr(), 60);
  }
  const $o = (t) => {
    var e, a, n;
    return t.startsWith("light.") && y[t] && !Vt(t).icon && !((n = (a = (e = c()) == null ? void 0 : e.entities) == null ? void 0 : a[t]) != null && n.icon) ? "mdi:lightbulb" : "";
  }, ue = (t, e, a) => (e = e || $o(t), ' data-icon-for="' + q(t) + '"' + (e ? ' data-icon-name="' + q(e) + '"' : "") + (a ? ' data-letter="' + q(a) + '"' : "")), da = (t) => t.endsWith("_solar_power") ? "mdi:solar-power-variant" : Vt(t).rang ? "mdi:doorbell" : "", Qt = (t, e, a, n) => q([t, e, a, n ? JSON.stringify(n) : ""].join("|")), Bo = (t) => q(JSON.stringify(t));
  function Ro(t) {
    const e = q(kt(t) + ", " + Ee(t));
    return '<div class="activityRow tap" role="button" tabindex="0" data-more="' + q(t) + '" aria-label="' + e + '. More info"><div class="tfIcon" aria-hidden="true"' + ue(t, da(t)) + '></div><div><div class="activityRowName">' + q(kt(t)) + '</div><div class="activityRowMeta">' + q(Ee(t)) + "</div></div></div>";
  }
  const Jn = (t, e, a) => '<div class="activityRow" aria-label="' + q(t + ", " + e) + '"><div class="tfIcon" aria-hidden="true"' + ue("", a, t) + '></div><div><div class="activityRowName">' + q(t) + '</div><div class="activityRowMeta">' + q(e) + "</div></div></div>";
  function no(t, e, a, n, i = "", d = null, l = "") {
    return '<section class="card tfCard' + (l ? " " + l : "") + '" data-tf data-k="' + q(t) + '" style="order:' + e + '" aria-label="' + q(a) + '"><div class="activityHeader">' + (d ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + q(d) + '" aria-label="' + q(a + (y[d] ? ", " + Ee(d) : "") + ". More info") + '">' + q(a) + "</button>" : '<div class="activityTitle">' + q(a) + "</div>") + '</div><div class="activityRows">' + n.join("") + "</div>" + i + "</section>";
  }
  function jr(t, e) {
    const a = "readings:" + t.id, n = t.readings.map((i) => Ro(i));
    return t.power != null && n.push(Jn("Power now", Eo(t.power), "mdi:flash")), no(a, e, "Readings", n);
  }
  function Po(t, e) {
    var f;
    const a = "energy:" + t.id, [n, i] = [t.solar.find((h) => h.endsWith("_power")), t.solar.find((h) => h.endsWith("_today"))], d = [n, i].filter(Boolean).map((h) => Ro(h)), l = Number(((f = y[n]) == null ? void 0 : f.state) || 0) * 1e3;
    return jt.grid && (d.push(Ro(jt.grid)), d.push(Jn("House use", Eo(l + Number(y[jt.grid].state)), "mdi:home-lightning-bolt"))), no(a, e, "Energy", d, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const Vr = (t, e) => no("plant:" + t.id, e, kt(t.id), t.readings.map((a) => Ro(a)), "", t.id);
  function Jo(t, e, a, n, i, d, l = null) {
    const f = a == null ? null : Math.max(0, Math.min(1, a)), h = f == null ? 0 : Math.round(f * 100);
    return '<div class="tfBar ' + t + '" role="slider" tabindex="0" aria-label="' + q(n) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + h + '"' + (i ? ' aria-valuetext="' + q(i) + '"' : "") + ' data-drag="' + q(t + "|" + e) + '">' + (l != null ? '<span class="was" aria-hidden="true" style="left:' + l + '%"></span>' : "") + (d ? f == null ? "" : '<b style="left:' + h + '%"></b>' : '<i style="width:' + h + '%"></i>') + "</div>";
  }
  const Qo = "homecore-house-last-bright", oa = (() => {
    try {
      return JSON.parse(Xa.get(Qo)) || {};
    } catch {
      return {};
    }
  })();
  let tn = 0;
  const za = (t, e) => {
    !e || oa[t] === e || (oa[t] = e, clearTimeout(tn), tn = setTimeout(() => Xa.set(Qo, JSON.stringify(oa)), 500));
  }, Mn = (t, e, a, n) => '<div class="tfStep" role="group" aria-label="' + q(t) + '"><button type="button" data-act="' + a + '" aria-label="Lower ' + q(t.toLowerCase()) + '">' + Zd.down + "</button><output>" + q(e) + '</output><button type="button" data-act="' + n + '" aria-label="Raise ' + q(t.toLowerCase()) + '">' + Zd.up + "</button></div>", ma = (t, e, a) => '<div class="' + t + '" role="group" aria-label="' + q(e) + '">' + a.filter(Boolean).map((n) => '<button type="button" data-act="' + n.act + '"' + (n.pressed != null ? ' aria-pressed="' + n.pressed + '"' : "") + (n.disabled ? " disabled" : "") + (n.aria ? ' aria-label="' + q(n.aria) + '"' : "") + ">" + (n.html || q(n.label)) + "</button>").join("") + "</div>", zr = (t, e) => "width:" + Math.round(Math.max(0, Math.min(1, (t - e * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * e / 3).toFixed(2), Gr = (t) => "left:calc(4px + " + t / 100 + " * (100% - 8px))", Be = (t, e) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + q(kt(t)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(e) + '" aria-valuetext="' + Math.round(e) + '% open" data-blocks="' + q(t) + '">' + [0, 1, 2, 3].map((a) => '<span><i style="' + zr(e, a) + '"></i><b' + (e >= (a + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (a + 1) * 25 + "<small>%</small></b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + Gr(e) + '">' + Math.round(e) + "%</output></div>";
  function en(t, e) {
    t.querySelectorAll(":scope>span").forEach((n, i) => {
      n.firstElementChild.setAttribute("style", zr(e, i)), n.lastElementChild.classList.toggle("lit", e >= (i + 1) * 25 - 12);
    });
    const a = t.querySelector(".tfTip");
    a.setAttribute("style", Gr(e)), a.textContent = Math.round(e) + "%", t.setAttribute("aria-valuenow", String(Math.round(e))), t.setAttribute("aria-valuetext", Math.round(e) + "% open");
  }
  const Ur = (t, e) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + q(kt(t)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(e) + '" aria-valuetext="' + Math.round(e) + '% open" data-drag="tilt|' + q(t) + '"><i style="width:calc((100% - 8px) * ' + e / 100 + ')"></i><span' + (e > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (e > 92 ? ' class="lit"' : "") + ">Open</span></div>", Qn = (t, e, a) => '<div class="tfSeg tfCoverBtns" role="group" aria-label="' + q(kt(t)) + '">' + [
    Ae(t, i0) && ["open", "Open", "open_cover", e >= 100 && !a],
    Ae(t, l0) && ["stop", "Stop", "stop_cover", !1],
    Ae(t, s0) && ["close", "Close", "close_cover", e <= 0 && !a]
  ].filter(Boolean).map(([n, i, d, l]) => '<button type="button" data-act="' + Qt("cover", d, t) + '" aria-label="' + i + '"' + (l ? " disabled" : "") + ">" + c0[n] + "</button>").join("") + "</div>", ro = (t, e) => '<button class="tfIcon' + (e.art ? " art" : "") + '" type="button" data-act="' + e.button.act + '" aria-label="' + q(e.button.label) + '"' + (e.art ? ' style="background-image:url(&quot;' + q(e.art) + '&quot;)"' : ue(t, e.icon)) + "></button>", Yr = (t) => '<button class="tfName" type="button" data-more="' + q(t) + '" aria-label="' + q(kt(t) + ", " + Ee(t) + ". More info") + '"><span class="activityRowName">' + q(kt(t)) + '</span><span class="activityRowMeta">' + q(Ee(t)) + "</span></button>";
  function tr(t, e = !1, a = null) {
    const n = fa(t), i = t.startsWith("light.") && Cn(t) && !(a && lr(t) < 3), d = a || (e && t.startsWith("light.") ? ["bright"] : null), l = i ? ['<div class="tfDacPad" data-dac="' + (e ? "more:" : a ? "dash:" : "tile:") + q(t) + '"></div>'] : n.sections.map((f, h) => f && (!d || d.includes((n.parts || [])[h])) ? f : "").filter(Boolean);
    return '<div class="tfAction' + (i ? " tfDac" : "") + (n.on ? " on" : "") + (!i && !l.length ? " tfHeadOnly" : "") + '" data-k="' + q(t) + '"' + (n.tone ? ' data-tone="' + n.tone + '"' : "") + yn(t) + '><div class="tfActionHead">' + ro(t, n) + Yr(t) + "</div>" + l.join("") + "</div>";
  }
  const pa = "dual-controller-v3", Zr = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.5/dist/dual-axis-controller-v4.js";
  let Ho = null;
  async function Sn() {
    if (Ho || customElements.get(pa)) return;
    Ho = "loading";
    const t = await Promise.resolve().then(() => _({ type: "lovelace/resources" })).catch(() => null), e = Array.isArray(t) && t.some((n) => /dual-axis-controller/i.test(n.url || ""));
    if (await Promise.race([customElements.whenDefined(pa), new Promise((n) => setTimeout(n, e ? 8e3 : 0))]), customElements.get(pa)) return;
    const a = Object.assign(document.createElement("script"), { src: Zr });
    a.onerror = () => {
      Ho = "failed", j();
    }, document.head.appendChild(a);
  }
  const We = /* @__PURE__ */ new Map(), ga = (t) => (zt.lightStyles[t] || zt.lights) === "dac", An = () => zt.lights === "dac" || Object.values(zt.lightStyles).includes("dac");
  function Cn(t) {
    return ga(t) && !!customElements.get(pa);
  }
  const Kr = (t) => zt.lightPads[t] || zt.dacPad, an = () => {
    const t = c();
    return t && {
      ...t,
      themes: { ...t.themes || {}, darkMode: !g.classList.contains("light") },
      callService: (e, a, n, ...i) => t.callService(e, ...$c(e, a, n), ...i)
    };
  }, Xr = "ha-card,.hc.hcTile{padding:0!important;border:0!important;border-radius:0!important;background:none!important;box-shadow:none!important}.hcTileHead{display:none!important}.hc--dark{--hc-text:var(--color-text-primary,#f1f1f1)}.halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,198px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}", Ji = (t) => {
    !t.shadowRoot || t.shadowRoot.querySelector("style[data-tf]") || (t.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: Xr })).dataset.tf = "");
  }, ba = /* @__PURE__ */ new Map(), Ea = new ResizeObserver((t) => t.forEach(({ target: e }) => {
    const a = e.parentElement;
    !a || !e.offsetHeight || (a.style.removeProperty("min-height"), ba.set(a.dataset.dac, a.offsetHeight));
  }));
  function io(t) {
    t.querySelectorAll("[data-dac]").forEach((e) => {
      const a = e.dataset.dac;
      let n = We.get(a);
      if (!n) {
        const i = a.slice(a.indexOf(":") + 1);
        n = document.createElement(pa), n.setConfig({ type: "custom:" + pa, entity: i, pad: Kr(i), tap_action: { action: "none" } }), We.set(a, n);
      }
      n.hass = an(), n.parentNode !== e && e.replaceChildren(n), !n.offsetHeight && ba.has(a) && (e.style.minHeight = ba.get(a) + "px"), Ea.observe(n), Ji(n);
    });
  }
  function $r() {
    const t = an();
    We.forEach((e, a) => {
      e.isConnected ? e.hass = t : We.delete(a);
    });
  }
  customElements.whenDefined(pa).then(() => {
    w && (P != null && P.querySelector("[data-tf]")) && Hc(Na);
  });
  const Ga = (t, e, a) => rt.has(t + "|" + e) ? rt.get(t + "|" + e) : a;
  function fa(t) {
    var d;
    const e = y[t], a = e.attributes, n = t.split(".")[0], i = (l, f) => ({ act: Qt(l, "toggle", t), label: f });
    if (n === "light") {
      const l = e.state === "on", f = ao(t), [h, k] = xn(t), M = Ga("bright", t, eo(e));
      l && za(t, eo(e));
      const x = Ga("ct", t, l && a.color_mode === "color_temp" ? a.color_temp_kelvin : null), C = Ga("hue", t, l && wn.includes(a.color_mode) && a.hs_color ? a.hs_color[0] : null);
      return { on: l, button: i("light", "Turn " + kt(t) + (l ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        Ze(t) && Jo("bright", t, M / 100, kt(t) + " brightness", M + "%", !1, l ? null : oa[t] ?? null),
        f.includes("color_temp") && Jo("ct", t, x == null ? null : (x - h) / (k - h), kt(t) + " warm to cool", x == null ? "" : Math.round(x) + " kelvin", !0),
        f.some((T) => wn.includes(T)) && Jo("hue", t, C == null ? null : C / 360, kt(t) + " colour", "", !0)
      ] };
    }
    if (n === "climate") {
      const l = a.target_temp_step || 0.5, f = Number(a.temperature);
      return { on: e.state !== "off", tone: e.state === "cool" || a.hvac_action === "cooling" ? "cool" : "heat", button: i("climate", "Turn " + kt(t) + (e.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(f) && Mn("Target temperature", Ye(f) + " °C", Qt("climate", "set_temperature", t, { temperature: f - l }), Qt("climate", "set_temperature", t, { temperature: f + l })),
        ma("tfSeg", "Mode", (a.hvac_modes || []).map((h) => ({ label: Jt(h), act: Qt("climate", "set_hvac_mode", t, { hvac_mode: h }), pressed: e.state === h })))
      ] };
    }
    if (n === "cover") {
      const l = e.state === "opening" || e.state === "closing", f = e.state === "closed", h = Xo(t), k = Ir(t);
      return { on: !f, tone: "blue", icon: tp[Al(e)][f ? 1 : 0], button: i("cover", (f ? "Open " : "Close ") + kt(t)), parts: ["blocks", "tilt", "buttons"], sections: [
        Ae(t, Qd) && Be(t, h),
        k != null && Ur(t, k),
        Qn(t, h, l)
      ] };
    }
    if (n === "humidifier") {
      const l = Number(a.humidity);
      return { on: e.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: i("humidifier", "Turn " + kt(t) + (e.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(l) && Mn("Target humidity", l + "%", Qt("humidifier", "set_humidity", t, { humidity: l - 1 }), Qt("humidifier", "set_humidity", t, { humidity: l + 1 })),
        ((d = a.available_modes) == null ? void 0 : d.length) && ma("tfSeg", "Mode", a.available_modes.map((f) => ({ label: Jt(f), act: Qt("humidifier", "set_mode", t, { mode: f }), pressed: a.mode === f })))
      ] };
    }
    if (n === "media_player") {
      const l = e.state === "playing", f = e.state === "off" || e.state === "standby", h = Ga("vol", t, a.volume_level), k = f ? { act: Qt("media_player", Ae(t, n0) ? "turn_on" : "toggle", t), label: "Turn " + kt(t) + " on" } : e.state === "playing" || e.state === "paused" ? { act: Qt("media_player", "media_play_pause", t), label: (l ? "Pause " : "Play ") + kt(t) } : { act: Qt("media_player", Ae(t, r0) ? "turn_off" : "toggle", t), label: "Turn " + kt(t) + " off" };
      return { on: !f, tone: "blue", art: !f && a.entity_picture ? a.entity_picture : null, button: k, parts: ["playback", "volume"], sections: f ? [] : [
        (Ae(t, Xd) || Ae(t, $d) || Ae(t, Kd) || Ae(t, Jd)) && ma("tfSeg", "Playback", [
          { html: Ti.prev, aria: "Previous", act: Qt("media_player", "media_previous_track", t), disabled: !Ae(t, Xd) },
          { html: l ? Ti.pause : Ti.play, aria: l ? "Pause" : "Play", act: Qt("media_player", "media_play_pause", t), disabled: !(Ae(t, Kd) || Ae(t, Jd)) },
          { html: Ti.next, aria: "Next", act: Qt("media_player", "media_next_track", t), disabled: !Ae(t, $d) }
        ]),
        Ae(t, o0) && h != null && Jo("vol", t, h, kt(t) + " volume", Math.round(h * 100) + "%")
      ] };
    }
    if (n === "vacuum") {
      const l = e.state === "cleaning", f = a.rooms || [], h = (M) => f.includes(M) ? f.filter((x) => x !== M) : f.concat(M), k = Qt("vacuum", l ? "pause" : "start", t, Fa(t) ? { rooms: f } : null);
      return { on: l || e.state === "returning", tone: "blue", button: { act: k, label: (l ? "Pause " : "Start ") + kt(t) }, parts: ["controls", "rooms"], sections: [
        ma("tfSeg", kt(t), [
          { label: l ? "Pause" : "Start", act: k },
          { label: "Dock", act: Qt("vacuum", "return_to_base", t), disabled: e.state === "docked" },
          { label: "Locate", act: Qt("vacuum", "locate", t) }
        ]),
        Fa(t) && ma("tfChips", "Rooms to clean", jt.rooms.filter((M) => M.id !== "balcony").map((M) => ({ label: M.name, act: Qt("vacuum", "set_rooms", t, { rooms: h(M.name) }), pressed: f.includes(M.name) })))
      ] };
    }
    if (n === "lock") {
      const l = e.state === "locked";
      return { on: !l, tone: "heat", button: { act: Qt("lock", l ? "unlock" : "lock", t), label: (l ? "Unlock " : "Lock ") + kt(t) }, parts: ["controls"], sections: [
        ma("tfSeg", kt(t), [
          { label: "Lock", act: Qt("lock", "lock", t), pressed: l },
          { label: "Unlock", act: Qt("lock", "unlock", t), pressed: e.state === "unlocked" },
          Ae(t, y0) && { label: "Open", act: Qt("lock", "open", t), pressed: e.state === "open" }
        ])
      ] };
    }
    if (n === "alarm_control_panel") {
      const l = e.state === "disarmed";
      return { on: !l, tone: e.state === "triggered" ? "alarm" : "blue", button: { act: Qt("alarm_control_panel", l ? "alarm_arm_away" : "alarm_disarm", t), label: l ? "Arm " + kt(t) + ", away" : "Disarm " + kt(t) }, parts: ["controls"], sections: [
        ma("tfSeg", kt(t), x0.filter(([, , , f]) => !f || Ae(t, f)).map(([f, h, k]) => ({ label: h, act: Qt("alarm_control_panel", k, t), pressed: e.state === f })))
      ] };
    }
    if (n === "valve") {
      const l = e.state === "open";
      return { on: l, tone: "blue", icon: "mdi:sprinkler-variant", button: i("valve", (l ? "Close " : "Open ") + kt(t)), parts: ["controls"], sections: [
        ma("tfSeg", kt(t), [
          { label: "Open", act: Qt("valve", "open_valve", t), pressed: l },
          { label: "Close", act: Qt("valve", "close_valve", t), pressed: !l }
        ])
      ] };
    }
    if (Cl.includes(n)) {
      const l = e.state === "on";
      return { on: l, button: i(n, "Turn " + kt(t) + (l ? " off" : " on")), parts: [], sections: [] };
    }
    return { on: !1, button: { act: "", label: kt(t) }, sections: [] };
  }
  const wa = (t) => (Number.isInteger(Number(t)) ? String(Number(t)) : Ye(t)) + "°";
  function Oo(t) {
    var G;
    const e = (B) => t.readings.find((Y) => Vt(Y).device_class === B), a = e("temperature"), n = e("humidity"), i = (B) => {
      var Y;
      return Number((Y = y[B]) == null ? void 0 : Y.state);
    }, d = (B) => t.actions.filter((Y) => B.test(Y)), l = t.lights.filter((B) => {
      var Y;
      return ((Y = y[B]) == null ? void 0 : Y.state) === "on";
    }), f = d(/^cover\./), h = f.filter((B) => {
      var Y;
      return ((Y = y[B]) == null ? void 0 : Y.state) !== "closed";
    }), k = [...new Set(f.map((B) => Al(y[B])))], M = d(/^climate\./)[0], x = d(/^humidifier\./)[0], C = d(/^media_player\./), T = C.find((B) => {
      var Y;
      return ((Y = y[B]) == null ? void 0 : Y.state) === "playing";
    }) || C.find((B) => {
      var Y;
      return ((Y = y[B]) == null ? void 0 : Y.state) === "paused";
    }), D = t.plugs.filter((B) => {
      var Y;
      return ((Y = y[B]) == null ? void 0 : Y.state) === "on";
    }), R = [];
    if (a && Number.isFinite(i(a)) && R.push({ key: "temp", id: a, kind: "reading", icon: $a(a), label: "Temperature", value: Ye(i(a)) + "°" }), n && Number.isFinite(i(n)) && R.push({ key: "hum", id: n, kind: "reading", icon: $a(n), label: "Humidity", value: Math.round(i(n)) + "%" }), t.lights.length && R.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: $a("", "mdi:lightbulb"),
      label: "Lights",
      value: l.length ? l.length + " of " + t.lights.length + " on" : "All off",
      short: l.length ? l.length + " on" : "Off",
      on: l.length > 0,
      light: l.length ? Zi(l[0]) : "",
      acts: t.lights.map((B) => ["light", l.length ? "turn_off" : "turn_on", B]),
      aria: (l.length ? "Turn off" : "Turn on") + " the lights in " + t.name
    }), f.length) {
      const B = k.length === 1 ? d0[k[0]] : "covers", Y = Math.round(f.reduce((L, bt) => L + ca(bt), 0) / f.length);
      R.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        light: h.length ? oo([146, 107, 199]) : "",
        icon: $a("", ((G = tp[k[0]]) == null ? void 0 : G[h.length ? 0 : 1]) || "mdi:window-shutter"),
        label: Jt(B),
        value: Y <= 0 ? "Closed" : Y >= 100 ? "Open" : Y + "% open",
        short: Y <= 0 ? "Closed" : Y + "%",
        on: h.length > 0,
        acts: f.map((L) => ["cover", h.length ? "close_cover" : "open_cover", L]),
        aria: (h.length ? "Close the " : "Open the ") + B + " in " + t.name
      });
    }
    if (M) {
      const B = Vt(M), Y = y[M].state === "off";
      R.push({
        key: "climate",
        kind: "control",
        tone: B.hvac_action === "cooling" ? "cool" : "heat",
        light: Ko(M) ? oo(Ko(M)) : "",
        icon: $a(M),
        label: kt(M),
        value: Y ? "Off" : Jt(B.hvac_action || y[M].state) + " · " + wa(B.temperature),
        short: Y ? "Off" : wa(B.temperature),
        on: !Y,
        acts: [["climate", "toggle", M]],
        aria: "Turn " + kt(M) + (Y ? " on" : " off")
      });
    }
    if (x) {
      const B = y[x].state === "on";
      R.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        light: B ? oo([33, 150, 243]) : "",
        icon: $a("", "mdi:air-humidifier"),
        label: kt(x),
        value: B ? "On · " + Vt(x).humidity + "%" : "Off",
        short: B ? Vt(x).humidity + "%" : "Off",
        on: B,
        acts: [["humidifier", "toggle", x]],
        aria: "Turn " + kt(x) + (B ? " off" : " on")
      });
    }
    if (C.length) {
      const B = T || C[0], Y = y[B], L = Y.state === "playing";
      R.push({
        key: "media",
        kind: "control",
        tone: "blue",
        light: Ko(B) ? oo(Ko(B)) : "",
        icon: $a(B),
        label: kt(B),
        value: Ee(B),
        short: L ? "Playing" : Y.state === "paused" ? "Paused" : Jt(Y.state),
        on: L,
        acts: [["media_player", Y.state === "playing" || Y.state === "paused" ? "media_play_pause" : "toggle", B]],
        aria: (L ? "Pause " : "Play ") + kt(B)
      });
    }
    return t.plugs.length && R.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      light: D.length ? oo([255, 193, 7]) : "",
      icon: $a("", "mdi:power-plug"),
      label: "Plugs",
      value: D.length ? D.length + " of " + t.plugs.length + " on" : "All off",
      short: D.length ? D.length + " on" : "Off",
      on: D.length > 0,
      acts: t.plugs.map((B) => ["switch", D.length ? "turn_off" : "turn_on", B]),
      aria: (D.length ? "Turn off" : "Turn on") + " the plugs in " + t.name
    }), t.alerts.forEach((B) => R.push(Vt(B).device_class === "moisture" ? { key: "alert:" + B, kind: "alert", icon: $a(B), label: "Water leak" } : { key: "note:" + B, kind: "note", icon: $a(B), label: kt(B) + " " + Ee(B).toLowerCase() })), R;
  }
  const _n = (t, e) => {
    const a = (n) => t.actions.filter((i) => n.test(i));
    return {
      lights: t.lights,
      covers: a(/^cover\./),
      climate: a(/^climate\./).slice(0, 1),
      humidifier: a(/^humidifier\./).slice(0, 1),
      plugs: t.plugs,
      media: (() => {
        const n = a(/^media_player\./);
        return [n.find((i) => {
          var d;
          return ((d = y[i]) == null ? void 0 : d.state) === "playing";
        }) || n.find((i) => {
          var d;
          return ((d = y[i]) == null ? void 0 : d.state) === "paused";
        }) || n[0]].filter(Boolean);
      })()
    }[e] || [];
  }, Qi = (t, e, a) => '<button class="' + e + (t.on ? " on" : "") + '" type="button" data-tone="' + t.tone + '" data-acts="' + Bo(t.acts) + '" aria-label="' + q(t.aria) + '" aria-pressed="' + t.on + '">' + a + "</button>", ts = (t) => '<button class="tfAName" type="button" data-go="' + q(t.id) + '" aria-label="Open ' + q(t.name) + '">' + q(t.name) + "</button>";
  function so(t, e, a = !1) {
    const n = e.find((f) => f.key === "lights"), i = !!(n != null && n.on), d = "", l = '<span class="tfAreaGlyph"' + ue("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span>";
    return a || !n ? '<span class="tfIcon tfAreaIcon' + (i ? " on" : "") + '"' + d + ' aria-hidden="true">' + l + "</span>" : '<button class="tfIcon tfAreaIcon' + (i ? " on" : "") + '" type="button"' + d + ' data-acts="' + Bo(n.acts) + '" aria-label="' + q(n.aria) + '" aria-pressed="' + i + '">' + l + "</button>";
  }
  const Jr = (t) => t.filter((e) => e.kind === "alert" || e.kind === "note").map((e) => '<span class="sourceTag">' + q(e.label) + "</span>").join(" "), Te = (t) => t.readings.find((e) => Vt(e).device_class === "temperature") || [...t.readings, ...t.solar, ...t.openings, ...t.actions, ...t.plugs].find((e) => y[e]) || null, er = (t, e) => {
    const a = kt(e);
    return a.toLowerCase().startsWith(t.name.toLowerCase() + " ") ? Jt(a.slice(t.name.length + 1)) : a;
  };
  function ar(t) {
    const e = y[t], a = Vt(t), n = t.split(".")[0], i = Number(e.state);
    if (e.state === "unavailable") return { text: "Unavailable" };
    if (n === "sensor" && Number.isFinite(i)) {
      if (a.device_class === "temperature") return { text: wa(i) };
      const d = a.unit_of_measurement || "";
      return d === "%" ? { text: Math.round(i) + "%" } : { text: Ye(i, Number.isInteger(i) ? 0 : 1), unit: d };
    }
    if (n === "climate" && (a.current_temperature ?? a.temperature) != null) return { text: wa(a.current_temperature ?? a.temperature) };
    if (n === "light") return { text: e.state !== "on" ? "Off" : Ze(t) ? eo(e) + "%" : "On" };
    if (n === "cover") {
      const d = ca(t);
      return { text: d <= 0 ? "Closed" : d >= 100 ? "Open" : d + "%" };
    }
    return n === "humidifier" ? { text: e.state === "on" ? a.humidity + "%" : "Off" } : n === "media_player" ? { text: e.state === "playing" ? "Playing" : e.state === "paused" ? "Paused" : Jt(e.state) } : { text: Ee(t) };
  }
  const or = (t, e, a) => {
    const n = a.find((f) => f.key === "temp"), i = a.find((f) => f.key === "hum"), d = Vt(e), l = y[e].state === "off";
    return e.startsWith("climate.") ? [er(t, e), l ? "Off" : Jt(d.hvac_action || y[e].state) + (d.temperature != null ? " · " + wa(d.temperature) : ""), i && i.value + " humidity"].filter(Boolean).join(" · ") : [!(n && n.id === e) && er(t, e), n && n.id !== e && n.value, i && i.id !== e && i.value + " humidity"].filter(Boolean).join(" · ");
  };
  function Qr(t, e, a) {
    const n = a && ar(a), i = a ? or(t, a, e) : "", d = (h) => {
      const k = _n(t, h.key);
      return k.length === 1 ? k[0] : "group:" + t.id + ":" + h.key;
    }, l = e.filter((h) => h.kind === "control").slice(0, 4).map((h) => '<div class="tfATile' + (h.on ? " on" : "") + '" data-tone="' + h.tone + '"' + (h.light ? ' data-light style="' + h.light + '"' : "") + ">" + Qi(h, "tfIcon", h.icon) + '<button class="tfName" type="button" data-more="' + q(d(h)) + '" aria-label="' + q(t.name + " " + h.label.toLowerCase() + ", " + h.value + ". Open") + '"><span class="activityRowName">' + q(h.label) + '</span><span class="activityRowMeta">' + q(h.value) + "</span></button></div>"), f = Jr(e);
    return '<div class="hcAreaPanelTop">' + so(t, e) + '<div class="tfATitle">' + ts(t) + "</div>" + (f ? '<div class="tfATags">' + f + "</div>" : "") + "</div>" + (a ? '<button class="tfABig" type="button" data-more="' + q(a) + '" aria-label="' + q(kt(a) + ", " + Ee(a) + ". More info") + '"><span class="tfABigMain' + (n.text.length > 7 ? " long" : "") + '">' + q(n.text) + (n.unit ? '<span class="tfABigUnit">' + q(n.unit) + "</span>" : "") + "</span>" + (i ? '<span class="tfABigSub">' + q(i) + "</span>" : "") + "</button>" : "") + (l.length ? '<div class="tfATiles">' + l.join("") + "</div>" : "");
  }
  function s(t) {
    const e = t.id === F, a = Oo(t), n = Te(t), i = n && ar(n), d = [...a.filter((l) => l.kind === "control"), ...a.filter((l) => l.kind !== "control" && l.kind !== "reading")].slice(0, 4);
    return '<article class="hcAreaPanel tfAreaPanel' + (e ? " active" : "") + '" data-area="' + q(t.id) + '" tabindex="0" aria-expanded="' + e + '" aria-label="' + q(t.name) + '"><div class="panelExpanded"' + (e ? "" : " inert") + ">" + Qr(t, a, n) + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop">' + so(t, a, !0) + '<span class="tfACName">' + q(t.name) + '</span></div><span class="tfACMain">' + (i ? q(i.text + (i.unit ? " " + i.unit : "")) : "") + '</span><span class="tfACTiles" aria-hidden="true">' + d.map((l) => '<span class="tfACTile"><span class="tfIcon' + (l.kind === "alert" ? " alert" : "") + '"' + (l.on && l.light ? ' data-light style="' + l.light + '"' : "") + ">" + l.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let u = [];
  const m = (t) => {
    const e = mt.areaOrder || [], a = (n) => {
      const i = e.indexOf(n.id);
      return i < 0 ? e.length + t.indexOf(n) : i;
    };
    return [...t].sort((n, i) => a(n) - a(i));
  }, b = () => {
    var e;
    const t = new Set(((e = mt.dash) == null ? void 0 : e.areasOff) || []);
    return m(u).filter((a) => !t.has(a.id));
  }, A = (t) => {
    var a;
    const e = b();
    return e.some((n) => n.id === F) || (F = ((a = e[0]) == null ? void 0 : a.id) || null), '<div class="tfAreas" data-tf data-k="areas" style="order:' + t + '"><section class="hcAreaGallery tfAreaGallery" aria-label="Areas">' + e.map(s).join("") + "</section></div>";
  }, H = (t) => t.startsWith("room:"), W = (t) => u.find((e) => "room:" + e.id === t);
  function U(t, e) {
    const a = Oo(t), n = Te(t), i = n && ar(n), d = n ? or(t, n, a) : "", l = i ? i.text + (i.unit ? " " + i.unit : "") : "", f = (C) => {
      const T = _n(t, C.key);
      return T.length === 1 ? T[0] : "group:" + t.id + ":" + C.key;
    }, h = a.filter((C) => C.kind === "control").slice(0, 4), k = (C) => C.on && C.light ? ' data-light style="' + C.light + '"' : "", M = h.map((C) => '<button class="tfIcon' + (C.on ? " on" : "") + '" type="button" data-tone="' + C.tone + '"' + k(C) + ' data-more="' + q(f(C)) + '" aria-label="' + q(C.label + ", " + C.value + ". Open its controls") + '">' + C.icon + "</button>"), x = h.map((C) => '<button class="tfRoomDev" type="button" data-more="' + q(f(C)) + '" aria-label="' + q(C.label + ", " + C.value + ". Open its controls") + '"><span class="tfIcon' + (C.on ? " on" : "") + '" data-tone="' + C.tone + '"' + k(C) + ">" + C.icon + '</span><span class="tfRoomDevName"><span class="activityRowName">' + q(C.label) + '</span><span class="activityRowMeta">' + q(C.value) + "</span></span></button>");
    return '<div class="tfAction tfRoomTile" data-k="' + q(e) + '" data-go="' + q(t.id) + '"><div class="tfActionHead"><span class="tfIcon tfRoomIcon" aria-hidden="true"><span class="tfAreaGlyph"' + ue("area:" + t.id, t.icon || "mdi:texture-box", t.name) + '></span></span><button class="tfName" type="button" data-go="' + q(t.id) + '" aria-label="Open ' + q(t.name) + '"><span class="activityRowName">' + q(t.name) + "</span>" + (l || d ? '<span class="activityRowMeta">' + (l ? '<span class="tfRoomInline">' + q(l) + (d ? " · " : "") + "</span>" : "") + q(d) + "</span>" : "") + "</button></div>" + (l ? '<div class="tfRoomReading" aria-hidden="true"><span class="tfRoomBig">' + q(l) + "</span>" + (d ? '<span class="tfRoomSub">' + q(d) + "</span>" : "") + "</div>" : "") + (M.length ? '<div class="tfRoomDevices">' + M.join("") + '</div><div class="tfRoomHeads">' + x.join("") + "</div>" : "") + "</div>";
  }
  const N = () => [
    { key: "home", name: "Home", ids: jt.homeVacuums },
    ...jt.rooms.map((t) => ({ key: "room:" + t.id, name: t.name, room: t, ids: t.actions }))
  ], K = (t, e, a) => t + " " + (t === 1 ? e : a), $ = () => (mt.favourites ?? Ue.favorite_entities ?? []).filter((t) => y[t]);
  function ut() {
    if (!To) {
      const e = Object.entries(Wa).sort((n, i) => i[1] - n[1]).map(([n]) => n), a = jt.rooms.flatMap((n) => n.actions);
      To = [.../* @__PURE__ */ new Set([...Yo, ...e, ...a.filter((n) => fa(n).on), ...a])];
    }
    const t = $();
    return To.filter((e) => y[e] && y[e].state !== "unavailable" && !t.includes(e));
  }
  let Rt = !1;
  const Tt = 6;
  function Mt() {
    if (!Rt || mt.favSeeded || !jt.rooms.length || S) return;
    const t = (a) => Object.keys(y).find((n) => Fa(n) && a(n)), e = [t((a) => a.startsWith("climate.")), t((a) => a.startsWith("cover.") && /curtain/.test(a)), t((a) => a.startsWith("valve.")), jt.security.locks[0]];
    mt = { ...mt, favourites: [.../* @__PURE__ */ new Set([...mt.favourites ?? Ue.favorite_entities ?? [], ...e.filter(Boolean)])].slice(0, Tt), favSeeded: !0 }, Oe();
  }
  const qt = () => mt.suggest ?? !Ue.hide_suggested_entities;
  function Lt() {
    const t = new Set(S ? [] : mt.favHidden || []), e = $().filter((i) => !t.has(i)), a = qt() ? ut().filter((i) => !t.has(i) && ns(i)) : [], n = Math.max(Tt, e.length);
    return [...e, ...a].slice(0, S && !pi() ? n : Math.min(M0, n));
  }
  const st = (t) => {
    const e = $().includes(t);
    return '<button class="tfStar" type="button" data-star="' + q(t) + '" aria-pressed="' + e + '" aria-label="Favourite: ' + q(kt(t)) + '">' + v0(e) + "</button>";
  };
  function Pt(t, { area: e = !1, star: a = !1, plain: n = !1, say: i = null, alert: d = !1 } = {}) {
    var D, R, G, B, Y, L;
    const l = n && ((Y = (D = c()) == null ? void 0 : D.devices) == null ? void 0 : Y[(B = (G = (R = c()) == null ? void 0 : R.entities) == null ? void 0 : G[t]) == null ? void 0 : B.device_id]), f = l && (l.name_by_user || l.name) || kt(t), h = t.split(".")[0], k = !n && Ar.includes(h) ? fa(t) : null, M = k ? k.on : ["on", "open", "playing"].includes((L = y[t]) == null ? void 0 : L.state), x = n ? null : k ? k.button : Cl.includes(h) ? { act: Qt(h, "toggle", t), label: "Turn " + kt(t) + (M ? " off" : " on") } : h === "scene" || h === "script" ? { act: Qt(h, "turn_on", t), label: "Run " + kt(t) } : null, C = (i ?? Ee(t)) + (e && Ct.get(t) ? " · " + Ct.get(t) : ""), T = (k == null ? void 0 : k.icon) || da(t);
    return '<div class="activityRow' + (x ? " tfPlug" : "") + (M ? " on" : "") + (a ? " tfPick" : "") + (d ? " alert" : "") + '" data-k="' + q((e ? "fav:" : "row:") + t) + '" data-tone="' + (h === "light" ? "light" : (k == null ? void 0 : k.tone) || "blue") + '"' + yn(t) + ">" + (x && !a ? '<button class="tfIcon" type="button" data-act="' + x.act + '" aria-label="' + q(x.label) + '"' + ue(t, T) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + ue(t, T) + "></div>") + '<button class="tfName" type="button" data-more="' + q(t) + '" aria-label="' + q(f + ", " + C + ". More info") + '"><span class="activityRowName">' + q(f) + '</span><span class="activityRowMeta">' + q(C) + "</span></button>" + (a ? st(t) : "") + "</div>";
  }
  const Ot = () => {
    var t;
    return y[(t = mt.sources) == null ? void 0 : t.weather] ? mt.sources.weather : y["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(y).find((e) => e.startsWith("weather."));
  };
  function he() {
    var a;
    const t = (n) => Object.keys(y).filter((i) => i.startsWith("binary_sensor.") && n.includes(Vt(i).device_class));
    return ((a = to.alert_entities) != null && a.length ? to.alert_entities : [...t(["moisture", "smoke", "gas"]).map((n) => ({ entity: n, severity: "alert" })), ...t(Ei).map((n) => ({ entity: n, severity: "warning" }))]).filter((n) => y[n.entity]).map((n) => ({ ...n, on: ["on", "open", "unlocked", "triggered", "problem"].includes(y[n.entity].state) }));
  }
  function St() {
    const t = Object.keys(Mr), e = /* @__PURE__ */ new Set(), a = [];
    (Ue.shortcuts || []).forEach((d) => {
      if (d.type === "summary") {
        if (!t.includes(d.key) || e.has(d.key)) return;
        e.add(d.key);
      }
      a.push(d);
    }), t.forEach((d) => {
      e.has(d) || a.push({ type: "summary", key: d });
    });
    const n = oe().sumOrder || [], i = (d) => d.type === "summary" && n.includes(d.key) ? n.indexOf(d.key) : n.length;
    return n.length ? a.map((d, l) => [d, l]).sort((d, l) => i(d[0]) - i(l[0]) || d[1] - l[1]).map(([d]) => d) : a;
  }
  function ne() {
    var G;
    const t = ((G = c()) == null ? void 0 : G.entities) || {}, e = (B) => Vt(B).device_class, a = Object.keys(y).filter((B) => B.startsWith("sensor.") && e(B) === "battery" || B.startsWith("binary_sensor.") && ["battery", "problem"].includes(e(B))), n = jt.rooms.flatMap((B) => B.plants.map((Y) => Y.id));
    if (!a.length && !n.length) return null;
    const i = (B) => {
      var L;
      const Y = (L = t[B]) == null ? void 0 : L.device_id;
      return !!Y && Object.keys(y).some((bt) => {
        var Wt;
        return bt.startsWith("binary_sensor.") && ((Wt = t[bt]) == null ? void 0 : Wt.device_id) === Y && e(bt) === "battery_charging" && y[bt].state === "on";
      });
    }, d = (B) => B.startsWith("vacuum.") ? Vt(B).battery_level <= 20 && y[B].state !== "docked" : B.startsWith("binary_sensor.") ? e(B) === "battery" && y[B].state === "on" : parseFloat(y[B].state) <= 20 && !i(B), l = [...a, ...jt.vacuums].filter((B) => y[B] && d(B)), f = [...a.filter((B) => e(B) === "problem" && y[B].state === "on"), ...n.filter((B) => {
      var Y;
      return ((Y = y[B]) == null ? void 0 : Y.state) === "problem";
    })], h = a.filter((B) => y[B].state === "unavailable"), k = [.../* @__PURE__ */ new Set([...l, ...f, ...h])], M = (B) => {
      const Y = parseFloat(y[B].state);
      return e(B) === "battery" && Number.isFinite(Y) ? Y : 101;
    }, x = [...n, ...jt.vacuums, ...[...a].sort((B, Y) => M(B) - M(Y))].filter((B) => y[B] && !k.includes(B)), C = /* @__PURE__ */ new Map();
    x.forEach((B) => {
      var L;
      const Y = ((L = jt.areaOf) == null ? void 0 : L.call(jt, B)) || "";
      C.set(Y, [...C.get(Y) || [], B]);
    });
    const T = (B) => {
      const Y = jt.rooms.findIndex((L) => L.id === B);
      return B === "" ? 1 / 0 : Y < 0 ? jt.rooms.length : Y;
    }, D = [...C.keys()].sort((B, Y) => T(B) - T(Y)), R = (B) => {
      var Y, L, bt, Wt;
      return ((Y = jt.rooms.find((Dt) => Dt.id === B)) == null ? void 0 : Y.name) || ((Wt = (bt = (L = c()) == null ? void 0 : L.areas) == null ? void 0 : bt[B]) == null ? void 0 : Wt.name) || B;
    };
    return {
      value: [l.length && K(l.length, "low battery", "low batteries"), f.length && K(f.length, "problem", "problems"), h.length && K(h.length, "unavailable device", "unavailable devices")].filter(Boolean).join(", ") || "All good",
      plain: !0,
      groups: [{ name: "Needs attention", ids: k, alert: !0 }, ...D.map((B) => ({ name: B ? R(B) : D.length > 1 ? "Other devices" : "Devices", ids: C.get(B) }))].filter((B) => B.ids.length)
    };
  }
  const oe = () => S ? mt.home || {} : mt, Ke = (t) => ep.includes(t) ? (oe().shownSums || []).includes(t) : !(oe().hiddenSums || []).includes(t);
  function lo(t, e, a) {
    const n = t.flatMap((C) => a(C, /^cover\./)), i = n.filter((C) => {
      var T;
      return ["open", "opening"].includes((T = y[C]) == null ? void 0 : T.state);
    }).length, d = Object.keys(y).filter((C) => C.startsWith("person.")), l = d.filter((C) => {
      var T;
      return ((T = y[C]) == null ? void 0 : T.state) === "home";
    }).length, f = jt.security.openings.filter((C) => y[C]), h = f.filter((C) => y[C].state === "on").length, k = Object.keys(y).filter((C) => C.startsWith("binary_sensor.") && Vt(C).device_class === "moisture"), M = k.filter((C) => y[C].state === "on").length, x = jt.vacuums.filter((C) => y[C]);
    return {
      covers: n.length && { value: i ? i + " open" : "All closed", groups: e((C) => a(C, /^cover\./)) },
      people: d.length && { value: l ? l + " home" : "Nobody home", groups: [{ name: "People", ids: d }] },
      openings: f.length && { value: h ? h + " open" : "All closed", groups: [{ name: "Doors and windows", ids: f }] },
      leaks: k.length && { value: M ? K(M, "leak", "leaks") : "All dry", groups: [{ name: "Leak sensors", ids: k }] },
      vacuum: x.length && { value: Jt(y[x[0]].state), groups: [{ name: "Vacuum", ids: x }] }
    };
  }
  function on(t = !1) {
    var le;
    const e = jt.rooms, a = jt.security, n = (_t, Et) => _t.actions.filter((Le) => Et.test(Le)), i = (_t) => e.map((Et) => ({ name: Et.name, ids: _t(Et) })).filter((Et) => Et.ids.length), d = e.flatMap((_t) => _t.lights), l = d.filter((_t) => {
      var Et;
      return ((Et = y[_t]) == null ? void 0 : Et.state) === "on";
    }).length, f = e.map((_t) => _t.readings.find((Et) => Vt(Et).device_class === "temperature")).filter(Boolean).map((_t) => Number(y[_t].state)).filter(Number.isFinite), [h, k] = [Ye(Math.min(...f)), Ye(Math.max(...f))], M = e.flatMap((_t) => n(_t, /^media_player\./)), x = M.filter((_t) => {
      var Et;
      return ((Et = y[_t]) == null ? void 0 : Et.state) === "playing";
    }).length, C = he(), T = C.filter((_t) => _t.severity === "warning" && _t.on).length, D = a.locks.filter((_t) => {
      var Et;
      return ["unlocked", "jammed", "open"].includes((Et = y[_t]) == null ? void 0 : Et.state);
    }).length, R = a.alarms.filter((_t) => {
      var Et;
      return ((Et = y[_t]) == null ? void 0 : Et.state) === "disarmed";
    }).length, G = T ? K(T, "warning", "warnings") : null, B = D ? D + " unlocked" : R ? R + " disarmed" : G ? null : "All secure", Y = ne(), L = e.flatMap((_t) => _t.solar), bt = L.find((_t) => _t.endsWith("_power")), Wt = {
      light: d.length && { value: l ? l + " on" : "All off", groups: i((_t) => _t.lights) },
      climate: f.length && { value: h === k ? h + "°" : h + " - " + k + "°", groups: i((_t) => [..._t.readings.filter((Et) => ["temperature", "humidity"].includes(Vt(Et).device_class)), ...n(_t, /^(climate|humidifier)\./)]) },
      security: (a.alarms.length || a.locks.length) && { value: [G, B].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...a.alarms, ...a.locks] }, { name: "Doors and windows", ids: a.openings }].filter((_t) => _t.ids.length) },
      media_players: M.length && { value: x ? x + " playing" : "No media playing", groups: i((_t) => n(_t, /^media_player\./)) },
      maintenance: Y,
      energy: jt.grid && { value: Eo(Number(((le = y[bt]) == null ? void 0 : le.state) || 0) * 1e3 + Number(y[jt.grid].state)) + " now", groups: [{ name: "Energy", ids: [...L, jt.grid] }] },
      ...lo(e, i, n)
    }, Dt = [], Zt = C.filter((_t) => _t.severity !== "warning" && _t.on);
    return Zt.length && Dt.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: K(Zt.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: Zt.map((_t) => _t.entity) }] }), St().forEach((_t) => {
      _t.type !== "summary" ? Dt.push({ key: "path:" + _t.path, name: _t.label || _t.path, icon: _t.icon || "mdi:link-variant", colour: "", value: "" }) : !_t.hidden && Wt[_t.key] && (t || Ke(_t.key)) && Dt.push({ key: _t.key, ...Mr[_t.key], ...Wt[_t.key] });
    }), Dt;
  }
  const nr = (t) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + q(t.key) + '" data-k="sum:' + q(t.key) + '" aria-label="' + q(t.name + (t.value ? ", " + t.value : "")) + '"' + (t.key === "alerts" ? ' style="--sum:' + t.colour + ';--sum-ink:#ffffff"' : t.key === "climate" ? ' style="' + Ui() + '"' : t.colour && vn(t.colour) ? ' style="' + vn(t.colour).slice(1) + '"' : "") + ">" + (t.key === "climate" ? Yi : "") + '<div class="tfIcon" aria-hidden="true"' + ue(t.id || "", t.icon, t.name) + '></div><div><div class="activityRowName">' + q(t.name) + "</div>" + (t.value ? '<div class="activityRowMeta">' + q(t.value) + "</div>" : "") + "</div></div>";
  function rr(t) {
    const e = $();
    mt = { ...mt, favourites: e.includes(t) ? e.filter((a) => a !== t) : [...e, t], favHidden: (mt.favHidden || []).filter((a) => a !== t) }, Oe(), Ce();
  }
  function Yt(t) {
    document.querySelector("home-assistant") && (window.history.pushState(null, "", t), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function Ua(t, e) {
    if (t.startsWith("path:")) {
      Yt(t.slice(5));
      return;
    }
    ui("summary:" + t, e);
  }
  async function No() {
    const t = (l) => Promise.resolve().then(() => _(l)).catch(() => null), [e, a, n, i] = await Promise.all([
      t({ type: "frontend/get_user_data", key: ap }),
      t({ type: "frontend/get_system_data", key: "home" }),
      t({ type: "frontend/get_system_data", key: "security" }),
      t({ type: "usage_prediction/common_control" })
    ]), d = (e == null ? void 0 : e.value) || {};
    mt = { favourites: d.favourites ?? null, sources: d.sources, hiddenSums: d.hiddenSums, shownSums: d.shownSums, home: d.home, dash: d.dash, named: d.named, favHidden: d.favHidden, suggest: d.suggest, favSeeded: d.favSeeded, favsTitle: d.favsTitle, areaOrder: d.areaOrder }, Ue = (a == null ? void 0 : a.value) || {}, to = (n == null ? void 0 : n.value) || {}, Yo = Array.isArray(i == null ? void 0 : i.entities) ? i.entities : [], To = null, Object.keys(y).length && Ce(), ir(), Rt = !0, Mt();
  }
  const nn = "HomeCore";
  async function ir() {
    var n, i, d;
    const t = location.pathname.split("/")[1], e = mt.named || [];
    if (!((i = (n = c()) == null ? void 0 : n.user) != null && i.is_admin) || !t || e.includes(t)) return;
    const a = () => {
      mt = { ...mt, named: [...e, t] }, Oe();
    };
    try {
      const l = (d = await _({ type: "lovelace/dashboards/list" })) == null ? void 0 : d.find((k) => k.url_path === t);
      if (!l || l.mode === "yaml") return;
      if (l.title === nn) {
        a();
        return;
      }
      const f = await _({ type: "lovelace/config", url_path: t }), h = ((f == null ? void 0 : f.views) || []).flatMap((k) => [...k.cards || [], ...(k.sections || []).flatMap((M) => M.cards || [])]);
      if (!h.length || !h.every((k) => (k == null ? void 0 : k.type) === "custom:homecore-card" && !k.page)) return;
      await _({ type: "lovelace/dashboards/update", dashboard_id: l.id, title: nn }), a();
    } catch {
    }
  }
  let Io = null, Fo = 0, je = !1;
  const Nl = (t) => {
    const e = t.split(".")[0], a = Vt(t).device_class;
    return k0.includes(e) && (e !== "binary_sensor" || Ei.includes(a) || !!dp[a]);
  }, es = (t) => t.startsWith("binary_sensor.") ? dp[Vt(t).device_class] : null;
  async function $p() {
    var t;
    if (!(je || Date.now() - Fo < 30 * 1e3)) {
      je = !0, Fo = Date.now();
      try {
        const e = Object.keys(((t = c()) == null ? void 0 : t.states) || {}).filter(Nl), a = e.length ? await _({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: e }) : null;
        Io = Array.isArray(a) ? a.filter((n) => n.entity_id && n.state != null && n.when) : null;
      } catch {
        Io = null;
      }
      je = !1, Ce();
    }
  }
  function Jp() {
    const t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map(), a = (i) => {
      if (!y[i.entity_id] || !Nl(i.entity_id) || !ns(i.entity_id) || ["unavailable", "unknown"].includes(i.state)) return;
      if (es(i.entity_id)) {
        const l = e.get(i.entity_id);
        i.state === "on" ? (!l || i.when > l.when + 1) && e.set(i.entity_id, { ...i, alarm: !0, cleared: null }) : l && !l.cleared && i.when > l.when && (l.cleared = i.when);
        return;
      }
      const d = t.get(i.entity_id);
      (!d || i.when > d.when + 1) && t.set(i.entity_id, i);
    };
    [...Io || []].sort((i, d) => i.when - d.when).forEach(a);
    const n = Io ? Fo / 1e3 - 5 : 0;
    return Object.keys(y).forEach((i) => {
      var f;
      const d = y[i], l = d.last_changed ? Date.parse(d.last_changed) / 1e3 : 0;
      l > n && a({ entity_id: i, state: d.state, when: l, context_user_id: (f = d.context) == null ? void 0 : f.user_id });
    }), [...t.values(), ...e.values()].sort((i, d) => d.when - i.when).slice(0, S0);
  }
  function Qp(t) {
    var n;
    const e = t.context_user_id && Object.keys(y).find((i) => i.startsWith("person.") && Vt(i).user_id === t.context_user_id);
    if (e) return kt(e);
    const a = (n = c()) == null ? void 0 : n.user;
    return a && t.context_user_id === a.id ? a.name : ["automation", "script"].includes(t.context_domain) || t.context_event_type === "automation_triggered" ? t.context_name || "Home Assistant" : "";
  }
  function tf(t) {
    const e = t.entity_id.split(".")[0], a = String(t.state);
    return e === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[a] || Jt(a).toLowerCase() : e === "cover" || e === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[a] || Jt(a).toLowerCase() : e === "binary_sensor" ? a === "on" ? "opened" : "closed" : e === "climate" ? a === "off" ? "turned off" : "set to " + Jt(a).toLowerCase() : e === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[a] || Jt(a).toLowerCase() : e === "alarm_control_panel" ? (cp[a] || Jt(a)).toLowerCase() : e === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[a] || Jt(a).toLowerCase() : a === "on" ? "turned on" : a === "off" ? "turned off" : Jt(a).toLowerCase();
  }
  function ef(t) {
    const e = t.entity_id, a = t.alarm && es(e), n = kt(e) + " " + (a ? a[0] : tf(t)), i = a ? Da(t.when * 1e3) + (t.cleared ? " · " + a[1] + " since " + Da(t.cleared * 1e3) : "") : [Qp(t), Da(t.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow' + (a ? " alert" : "") + '"><div class="tfIcon' + (a ? " alert" : "") + '" aria-hidden="true"' + ue(e, da(e)) + '></div><button class="tfName" type="button" data-more="' + q(e) + '" data-at="' + Math.round(t.when * 1e3) + '" aria-label="' + q(n + ", " + i + ". More info") + '"><span class="activityRowName">' + q(n) + '</span><span class="activityRowMeta">' + q(i) + "</span></button></div>";
  }
  let Ba = null, Il = 0;
  const af = [["electricity", "Electricity", 4.3, "kWh"], ["solar", "Solar", 2.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function Fl() {
    var e;
    if (Date.now() - Il < 5 * 60 * 1e3) return;
    Il = Date.now();
    const t = [];
    try {
      const a = ((e = await _({ type: "energy/get_prefs" })) == null ? void 0 : e.energy_sources) || [], n = (i) => a.filter((d) => d.type === i).flatMap((d) => i === "grid" ? (d.flow_from || []).map((l) => l.stat_energy_from) : [d.stat_energy_from]).filter(Boolean);
      for (const [i, d, l] of [["electricity", "Electricity", n("grid")], ["solar", "Solar", n("solar")], ["gas", "Gas", n("gas")], ["water", "Water", n("water")]]) {
        if (!l.length) continue;
        const f = await Promise.all(l.map((h) => Promise.resolve(_({ type: "recorder/statistic_during_period", statistic_id: h, calendar: { period: "day" }, types: ["change"] })).then((k) => Number(k == null ? void 0 : k.change) || 0, () => 0)));
        t.push({ key: i, name: d, id: l[0], ids: l, value: f.reduce((h, k) => h + k, 0), unit: Vt(l[0]).unit_of_measurement || (i === "gas" || i === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    Ba = t, Ce();
  }
  let Tn = null, ql = [];
  function as() {
    var d;
    const t = ql = Ba != null && Ba.length ? Ba : af.map(([l, f, h, k]) => {
      if (l === "solar") {
        const x = Object.keys(y).find((C) => C.endsWith("_solar_today") && !C.includes("made_up_energy"));
        x && Number.isFinite(Number(y[x].state)) && (h = Number(y[x].state));
      }
      const M = "sensor.made_up_energy_" + l;
      return y[M] = { entity_id: M, state: String(h), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: f + " today", unit_of_measurement: k, state_class: "total_increasing" } }, { key: l, name: f, id: M, value: h, unit: k };
    });
    ot.clear(), t.some((l) => l.id === Tn) || (Tn = t[0].id);
    const e = t.map((l) => {
      const f = Number(l.value).toLocaleString(void 0, { maximumFractionDigits: l.value < 10 ? 2 : 1 }) + " " + l.unit, h = A0[l.key], k = l.id === Tn;
      return ot.set(l.id, { name: l.name, text: f, icon: h }), '<div class="activityRow tap' + (k ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + q(l.id) + '" aria-pressed="' + k + '" aria-label="' + q(l.name + ", " + f) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + ue("", h, l.name) + '></div><div><div class="activityRowName">' + q(l.name) + '</div><div class="activityRowMeta">' + q(f) + "</div></div></div>";
    }), a = t.find((l) => l.id === Tn), n = (((d = ae().opts.energy) == null ? void 0 : d.graph) || "above") === "below", i = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + q(a.id) + '" role="img" aria-label="' + q(a.name) + ', last 24 hours"></svg></div>';
    return no("dash:energy", 0, "Energy today", e, i, on().some((l) => l.key === "energy") ? "summary:energy" : null, "tfDashCard tfDash-energy" + (n ? "" : " graphAbove"));
  }
  function Wl(t) {
    const e = P.querySelector(".tfDash-energy"), a = e == null ? void 0 : e.querySelector(".tfDashGraph svg");
    !a || t === Tn || (Tn = t, e.querySelectorAll("[data-energy-pick]").forEach((n) => {
      const i = n.dataset.energyPick === t;
      n.classList.toggle("picked", i), n.setAttribute("aria-pressed", String(i));
    }), a.dataset.graph = t, a.dataset.drawn = "", ua.set("dash:energy", as()), Tc(!0));
  }
  const jl = {
    electricity: [15, 12, 10, 10, 10, 12, 25, 45, 40, 30, 25, 30, 35, 30, 25, 25, 35, 60, 80, 70, 55, 45, 30, 20],
    gas: [2, 2, 2, 2, 3, 8, 18, 20, 12, 6, 4, 4, 4, 4, 4, 5, 8, 14, 16, 14, 10, 6, 3, 2],
    water: [0, 0, 0, 0, 0, 2, 12, 18, 8, 4, 3, 4, 6, 3, 2, 3, 4, 6, 10, 8, 5, 5, 3, 1]
  }, Vl = /* @__PURE__ */ new Map();
  async function of(t) {
    const e = /* @__PURE__ */ new Date(), a = new Date(e).setHours(0, 0, 0, 0), n = e.getHours(), i = e.getMinutes() / 60, d = Array.from({ length: 24 }, (f, h) => h <= n ? 0 : null);
    if (!t.ids) {
      const f = jl[t.key] || jl.electricity, h = f.map((M, x) => x < n ? M : x === n ? M * i : 0), k = h.reduce((M, x) => M + x, 0) || 1;
      return d.map((M, x) => M == null ? null : t.value * h[x] / k);
    }
    const l = Vl.get(t.id);
    if (l && l.day === a && Date.now() - l.at < 5 * 60 * 1e3) return l.hours;
    try {
      const f = await _({ type: "recorder/statistics_during_period", start_time: new Date(a).toISOString(), end_time: e.toISOString(), statistic_ids: t.ids, period: "hour", types: ["change"] });
      t.ids.forEach((M) => ((f == null ? void 0 : f[M]) || []).forEach((x) => {
        const C = typeof x.start == "number" ? x.start : Date.parse(x.start), T = new Date(C).getHours();
        C >= a && T < n && (d[T] += Number(x.change) || 0);
      }));
      const h = new Date(e).setMinutes(0, 0, 0), k = await Promise.all(t.ids.map((M) => Promise.resolve(_({ type: "recorder/statistic_during_period", statistic_id: M, fixed_period: { start_time: new Date(h).toISOString(), end_time: e.toISOString() }, types: ["change"] })).then((x) => Number(x == null ? void 0 : x.change) || 0, () => 0)));
      d[n] = k.reduce((M, x) => M + x, 0);
    } catch {
    }
    return Vl.set(t.id, { at: Date.now(), day: a, hours: d }), d;
  }
  async function nf(t, e) {
    const a = await of(e);
    if (!t.isConnected) return;
    const n = Math.max(120, t.clientWidth || 260), i = Math.max(60, t.clientHeight || 130), d = 18, l = i - 18, f = n / 24, h = f * 0.72, k = (/* @__PURE__ */ new Date()).getHours(), M = a.map((G) => G ?? 0), x = Math.max(0, ...M), C = (G) => l - (x > 0 ? G / x * (l - d) : 0), T = (G) => G.toLocaleString(void 0, { maximumFractionDigits: G < 10 ? 2 : 1 }) + " " + e.unit, D = (G) => String(G).padStart(2, "0") + ":00", R = x > 0 ? M.indexOf(x) : -1;
    t.setAttribute("viewBox", "0 0 " + n + " " + i), t.setAttribute("aria-label", e.name + " today by the hour: " + T(e.value) + (R >= 0 ? ", most " + T(x) + " at " + D(R) : "")), t.innerHTML = [d, (d + l) / 2, l].map((G) => '<line x1="0" x2="' + n + '" y1="' + G + '" y2="' + G + '" stroke="var(--line)" stroke-width="1"/>').join("") + a.map((G, B) => G > 0 ? '<rect x="' + (B * f + (f - h) / 2).toFixed(1) + '" y="' + C(G).toFixed(1) + '" width="' + h.toFixed(1) + '" height="' + (l - C(G)).toFixed(1) + '" rx="2" fill="' + (B === k ? "var(--primary)" : "var(--text)") + '"' + (B === k ? "" : ' fill-opacity=".5"') + "/>" : "").join("") + [0, 6, 12, 18].map((G) => '<text x="' + (G * f).toFixed(1) + '" y="' + (i - 3) + '">' + String(G).padStart(2, "0") + "</text>").join("") + (R >= 0 ? '<text x="0" y="11">Most: ' + q(T(x)) + " at " + D(R) + "</text>" : "");
  }
  function rf(t) {
    var e;
    (e = window.matchMedia) != null && e.call(window, "(prefers-reduced-motion: reduce)").matches || t.querySelectorAll("rect").forEach((a, n) => a.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], { duration: 500, delay: n * 18, easing: "cubic-bezier(.2,.7,.3,1)", fill: "backwards" }));
  }
  function zl(t) {
    var n;
    if ((n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [e, a] = t.querySelectorAll("path");
    Dp(t, a, [e].filter(Boolean));
  }
  let ti = null, os = 0;
  const ns = (t) => !t.startsWith("light.") || C0.includes((Ct.get(t) || "").toLowerCase()), rs = () => Math.max(2, sn((P == null ? void 0 : P.clientWidth) || 0).n), Gl = (t) => {
    const e = fa(t);
    return e.sections.map((a, n) => a && (e.parts || [])[n]).filter(Boolean);
  }, sf = (t) => Gl(t).slice(0, lr(t) - 1);
  function Ul(t) {
    const e = ae().tiles;
    if (e) return e.filter((n) => y[n] || W(n));
    if (!ti) {
      const n = (i) => {
        var d;
        return (((d = y[i]) == null ? void 0 : d.state) === "on" ? 1e6 : 0) + (Wa[i] || 0);
      };
      ti = {
        lights: jt.rooms.flatMap((i) => i.lights).filter((i) => {
          var d;
          return ns(i) && ((d = y[i]) == null ? void 0 : d.state) !== "unavailable";
        }).sort((i, d) => n(d) - n(i) || kt(i).localeCompare(kt(d))),
        climates: jt.rooms.flatMap((i) => i.actions.filter((d) => d.startsWith("climate.")))
      };
    }
    const a = ti.climates.filter((n) => y[n]).slice(0, t > 3 ? 2 : 1);
    return [...ti.lights.filter((n) => y[n]).slice(0, Math.max(0, t - a.length)), ...a];
  }
  const is = () => {
    var t;
    return ((t = mt.home) == null ? void 0 : t.welcome) ?? !0;
  }, lf = () => {
    var e, a;
    const t = (e = c()) == null ? void 0 : e.user;
    return (t == null ? void 0 : t.name) || ((a = Object.values(y).find((n) => {
      var i;
      return n.entity_id.startsWith("person.") && (t == null ? void 0 : t.id) && ((i = n.attributes) == null ? void 0 : i.user_id) === t.id;
    })) == null ? void 0 : a.attributes.friendly_name) || "";
  }, cf = () => {
    const t = (/* @__PURE__ */ new Date()).getHours(), e = lf();
    return (t >= 5 && t < 12 ? "Good morning" : t >= 12 && t < 18 ? "Good afternoon" : "Good evening") + (e ? ", " + e : "");
  }, Yl = (t, e, a, n) => (i) => '<section class="card tfCard tfDashCard ' + t + '" data-tf data-k="' + e + '" aria-label="' + a + '">' + (n ? '<div class="activityHeader">' + (e === "favs" ? '<button class="activityTitle tfTitleBtn" type="button" data-more="favourites" aria-label="Favourites. More info">' + a + "</button>" : '<div class="activityTitle">' + a + "</div>") + "</div>" : "") + '<div class="activityRows">' + i + "</div></section>";
  function df(t, e) {
    var d, l;
    t.dash = !0, t.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + ((S ? is() : ae().welcome) ? '<span class="tfGreeting">' + q(cf()) + "</span>" : "") + q(((l = (d = c()) == null ? void 0 : d.config) == null ? void 0 : l.location_name) || "Home") + "</h1>" }), e.length && t.push({ key: "sums", wrap: (f) => '<div class="tfDashBarRow" data-tf data-k="sums">' + Yl("tfDash-bar", "sums-bar", "Summaries", !1)(f).replace(" data-tf", "") + "</div>", tiles: e.map((f) => ({ key: "sum:" + f.key, html: nr(f) })) }), !S && b().length && t.push({ key: "areas", html: A(0) });
    const a = Lt();
    if (a.length && t.push({ key: "favs", wrap: Yl("tfDash-favs", "favs", "Favourites", ai()), tiles: a.map((f) => ({ key: "fav:" + f, html: Pt(f, { area: !0 }) })) }), S)
      return Fl(), rc() && t.push({ key: "dash:energy", html: as() }), os = rs(), Ul(0).forEach((f) => t.push({
        key: "dash:tile:" + f,
        wrap: (h) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + q(f) + '">' + h + "</div>",
        tiles: [{ key: f, html: U(W(f), f) }]
      })), t;
    const n = Jp();
    t.push({ key: "dash:act", html: no("dash:act", 0, "Activity", n.length ? n.map(ef) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), t.push({ key: "dash:energy", html: as() });
    const i = rs();
    return os = i, Ul(i >= 3 ? i : i * 2).forEach((f) => t.push({
      key: "dash:tile:" + f,
      wrap: (h) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + q(f) + '">' + h + "</div>",
      tiles: [{ key: f, html: H(f) ? U(W(f), f) : tr(f, !1, sf(f)) }]
    })), $p(), Fl(), t;
  }
  const sr = 252, se = 16, pf = 200, ff = Math.round(sr * 1.25), uf = 60, Ra = uf + se, hf = 3, Zl = {
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
  }, mf = ["wx", "favs", "act", "energy", "avg"], Kl = ["XS", "S", "M", "L", "XL"], Xl = Kl.length, gf = ["Narrow", "Wide", "Really wide"], bf = { wx: 5, areas: 5, favs: 5, act: 5, energy: 4, avg: 4, aq: 4, pollen: 4, radar: 4, hourly: 4, sun: 4, moon: 4, uv: 4, humidity: 4, pressure: 4, wind: 4, visibility: 4 }, $l = (t) => !t.includes(".") || !y[t] || t.startsWith("light.") && ga(t) ? Xl : Math.min(Xl, Gl(t).length + 1), lr = (t) => {
    const e = ae().opts[t] || {}, a = $l(t), n = Number(e.h) || (e.tall ? 5 : bf[t] || Jl);
    return Math.max(1, Math.min(a, n));
  }, Jl = 2, wf = 90, vf = 56, va = (t) => {
    var e;
    return Zl[t] || (t.startsWith("room:") ? ((e = u.find((a) => "room:" + a.id === t)) == null ? void 0 : e.name) || "Area" : kt(t));
  }, yf = 409, xf = 128;
  let na = !1, Kt = null, Xe = null, ss = !1, rn = /* @__PURE__ */ new Map(), ei = 0, qo = 0;
  const co = ["title", "sums"], sn = (t) => {
    const e = Math.max(1, Math.floor((t + se) / (pf + se)));
    return { n: e, w: Math.max(1, Math.min(ff, Math.floor((t - (e - 1) * se) / e))) };
  }, ls = () => m(u), kf = () => {
    var e;
    const t = new Set(((e = mt.home) == null ? void 0 : e.areasOff) || []);
    return ls().filter((a) => !t.has(a.id)).map((a) => "room:" + a.id);
  };
  function Mf() {
    const t = kf();
    return {
      cells: {},
      spans: { favs: 2 },
      hidden: Object.keys(Zl).filter((e) => {
        var a, n;
        return !["title", ...((a = mt.home) == null ? void 0 : a.sums) === !1 ? [] : ["sums"], ...((n = mt.home) == null ? void 0 : n.favs) === !1 ? [] : ["favs"], ..._f() ? ["wx"] : [], ...rc() ? ["energy"] : []].includes(e);
      }),
      opts: { favs: { h: 5 }, ...Object.fromEntries(t.map((e) => [e, { h: 5 }])) },
      tiles: t,
      known: Lo,
      areasOff: []
    };
  }
  const ae = () => S ? Mf() : cs(), cs = () => {
    let t = { cells: {}, spans: {}, hidden: [], opts: {}, ...mt.dash || {} };
    t.sumsOff && (t = { ...t, hidden: [...t.hidden, "sums"] });
    const e = Lo.filter((a) => !(t.known || []).includes(a) && !t.hidden.includes(a));
    return e.length ? { ...t, hidden: [...t.hidden, ...e] } : t;
  };
  function ln(t) {
    S || (mt = { ...mt, dash: { ...t, known: Lo } }, Oe());
  }
  function cn() {
    const t = (e) => P.querySelector(e);
    return [
      ["title", t(".tfDashTitle"), "full"],
      ["sums", t(".tfDashBarRow"), "full"],
      ["wx", ja.wx, 2],
      ["areas", t(".tfAreas"), "areas"],
      ["favs", t(".tfDash-favs"), 2],
      ["act", t(".tfDash-act"), 2],
      ["energy", t(".tfDash-energy"), 2],
      ["avg", ja.avg, 2],
      ...Lo.map((e) => [e, ja[e], Wi[e] || 1]),
      ...[...P.querySelectorAll(".tfDashTiles > [data-k]")].map((e) => [e.dataset.k, e, 1, !0])
    ].filter(([, e]) => e == null ? void 0 : e.isConnected).map(([e, a, n, i = !1]) => ({ key: e, el: a, span: n, tile: i }));
  }
  const Ql = (t, e, a) => {
    var n;
    if (t.span === "full") return e;
    if (t.span === "areas") {
      const i = Math.ceil((yf + Math.max(0, b().length - 1) * (xf + se) + se) / (a + se));
      return Math.max(Math.min(e, 2), Math.min(i, e - (((n = ae().cells.areas) == null ? void 0 : n.col) || 0)));
    }
    return Math.min(e, ae().spans[t.key] ?? t.span);
  }, tc = (t) => lr(t.key);
  function ec(t, e, a = null) {
    const n = ae().cells, i = t.every((f) => !n[f.key] || n[f.key].col + f.cols <= e), d = (f) => n[f.key] || { row: 1e9, col: 0 };
    return (() => {
      const f = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Map(), k = (R, G, B, Y) => {
        for (let L = G; L < G + Y; L++) for (let bt = R; bt < R + B; bt++) if (f.has(bt + "," + L)) return !1;
        return !0;
      }, M = (R, G, B) => {
        for (let Y = B; Y < B + R.rows; Y++) for (let L = G; L < G + R.cols; L++) f.add(L + "," + Y);
        h.set(R.key, { col: G, row: B, cols: R.cols, rows: R.rows });
      }, x = (R, G, B) => {
        for (G = Math.max(0, Math.min(e - R.cols, G)), B = Math.max(0, B); !k(G, B, R.cols, R.rows); ) B++;
        M(R, G, B);
      }, C = (R) => {
        for (let G = 0; ; G++) for (let B = 0; B <= e - R.cols; B++) if (k(B, G, R.cols, R.rows)) {
          M(R, B, G);
          return;
        }
      };
      a && x(a, Kt.col, Kt.row);
      const T = t.filter((R) => R !== a), D = (R, G) => d(R).row - d(G).row || d(R).col - d(G).col;
      return i ? (T.filter((R) => n[R.key]).sort(D).forEach((R) => x(R, n[R.key].col, n[R.key].row)), T.filter((R) => !n[R.key]).forEach(C), h) : ([...T].sort(D).forEach(C), h);
    })();
  }
  function Sf(t, e) {
    const a = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Map(), i = (d, l, f) => {
      for (let h = l; h < l + f.rows; h++) for (let k = d; k < d + f.cols; k++) if (a.has(k + "," + h)) return !1;
      return !0;
    };
    return t.forEach((d) => {
      for (let l = 0; ; l++) {
        let f = 0;
        for (; f <= e - d.cols && !i(f, l, d); ) f++;
        if (!(f > e - d.cols)) {
          for (let h = l; h < l + d.rows; h++) for (let k = f; k < f + d.cols; k++) a.add(k + "," + h);
          n.set(d.key, { col: f, row: l, cols: d.cols, rows: d.rows });
          return;
        }
      }
    }), n;
  }
  function ds() {
    const t = ae(), e = new Set(t.hidden), a = cn().filter((l) => !co.includes(l.key));
    let n = rn;
    if (!n.size) {
      const l = t.pegs || 4, f = a.filter((h) => !e.has(h.key));
      f.forEach((h) => {
        h.cols = Ql(h, l, sr), h.rows = tc(h) ?? Jl;
      }), n = ec(f, l);
    }
    const i = (l) => !e.has(l.key) && n.get(l.key) || { row: 1e9, col: 0 };
    a.sort((l, f) => i(l).row - i(f).row || i(l).col - i(f).col);
    const d = (t.phone || []).map((l) => a.find((f) => f.key === l && !e.has(l))).filter(Boolean);
    return [...d, ...a.filter((l) => !d.includes(l))];
  }
  const Af = () => {
    const t = ds();
    t.forEach((e, a) => e.el.style.setProperty("--o", String(3 + a))), ps([...cn().filter((e) => co.includes(e.key)), ...t].map((e) => e.el));
  };
  function ps(t) {
    if (Kt) return;
    const e = o.activeElement;
    let a = null;
    for (const n of new Set(t.map((i) => {
      for (; i && i.parentElement !== P; ) i = i.parentElement;
      return i;
    }).filter(Boolean))) {
      const i = a ? a.nextSibling : P.querySelector(":scope > [data-tf]");
      if (n !== i)
        try {
          P.moveBefore ? P.moveBefore(n, i) : P.insertBefore(n, i);
        } catch {
          P.insertBefore(n, i);
        }
      a = n;
    }
    e && e !== o.activeElement && e.isConnected && e.focus({ preventScroll: !0 });
  }
  const Ln = (t, e) => ln({ ...t, cells: e, pegs: sn(P.clientWidth).n });
  function Re() {
    var Y;
    if (!w || !P) return;
    const t = P.clientWidth, e = t < 2 * sr + se, a = g.classList.contains("tfDash");
    S && (na = !1), g.classList.toggle("tfOverview", S);
    const { n, w: i } = e ? { n: 2, w: Math.floor((t - se) / 2) } : sn(t);
    ha.classList.add("tfPegs"), ha.style.setProperty("--peg-n", n), ha.style.setProperty("--peg-w", i + "px");
    const d = new Set(ae().hidden);
    Lo.forEach((L) => {
      var bt;
      return (bt = ja[L]) == null ? void 0 : bt.classList.toggle("tfNotAdded", d.has(L) && !(Kt != null && Kt.fromTray && Kt.key === L));
    }), Pr(), g.classList.toggle("tfBoard", a), g.classList.toggle("tfEditing", a && na && !e);
    const l = p("dashEditNav");
    !a && mo && Es(!1), l && S ? (l.hidden = !a, mo || (l.classList.remove("active"), l.setAttribute("aria-pressed", "false"), l.setAttribute("aria-label", "Edit Home page"), l.title = "Edit", l.innerHTML = Di)) : l && (l.hidden = !a || e, l.classList.toggle("active", na), l.setAttribute("aria-pressed", String(na)), l.setAttribute("aria-label", na ? "Done editing" : "Edit custom dashboard"), l.title = na ? "Done" : "Edit", l.innerHTML = na ? lp : Di);
    const f = a ? cn() : [];
    if ((!a || !S) && P.querySelectorAll(":scope > :is(.hcFloor,.hcFloorBox)").forEach((L) => L.remove()), !a) {
      P.style.height = "", P.querySelectorAll(".tfBoardItem").forEach((L) => {
        L.classList.remove("tfBoardItem", "tfBoardHidden"), L.style.left = L.style.top = L.style.width = L.style.height = "";
      }), (Y = P.querySelector(".tfDash-act > .activityRows")) == null || Y.style.removeProperty("max-height"), ms(!1), g.classList.contains("tfDash") && Af(), ve();
      return;
    }
    if (S) {
      Df(f, t, e);
      return;
    }
    P.style.setProperty("--peg-w", i + "px");
    const h = new Set(ae().hidden), k = i + se;
    Kt != null && Kt.fromTray && h.delete(Kt.key), f.forEach((L) => L.el.classList.toggle("tfBoardHidden", h.has(L.key)));
    const M = f.filter((L) => !h.has(L.key) && getComputedStyle(L.el).display !== "none");
    let x = 0;
    M.filter((L) => co.includes(L.key)).forEach((L) => {
      L.el.classList.add("tfBoardItem"), Object.assign(L.el.style, { width: t + "px", height: "", left: "0px", top: x + "px" });
      const bt = L.key === "sums" && L.el.querySelector(".tfDash-bar"), Wt = bt ? bt.querySelectorAll(".activityRow").length : 0;
      bt && (bt.style.maxWidth = "none");
      for (let Dt = 1; bt && Dt <= Wt && (bt.style.setProperty("--bar-cols", String(Math.ceil(Wt / Dt))), !(bt.offsetWidth <= t)); Dt++)
        ;
      bt && (bt.style.maxWidth = ""), x += L.el.offsetHeight + se;
    }), qo = x;
    const C = M.filter((L) => !co.includes(L.key));
    C.forEach((L) => {
      L.cols = Ql(L, n, i), L.el.classList.add("tfBoardItem"), L.el.style.width = (L.cols === n ? t : L.cols * i + (L.cols - 1) * se) + "px", L.el.style.height = "", L.rows = tc(L) ?? Math.max(1, Math.ceil((L.el.offsetHeight + se - 6) / Ra));
    });
    const T = Kt && C.find((L) => L.key === Kt.key), D = e && ds().map((L) => L.key), R = (L) => D.includes(L.key) ? D.indexOf(L.key) : -1, G = e ? Sf([...C].sort((L, bt) => R(L) - R(bt)), n) : ec(C, n, T);
    G.forEach((L) => Object.assign(L, { x: L.cols === n ? 0 : L.col * k, y: qo + L.row * Ra, w: L.cols === n ? t : L.cols * i + (L.cols - 1) * se, h: L.rows * Ra - se })), C.forEach((L) => {
      const bt = G.get(L.key);
      L.el.style.height = bt.h + "px", L.el.dataset.rows = e && L.key === "wx" ? 5 : lr(L.key), L.el.toggleAttribute("data-narrow", !e && bt.cols === 1 && n > 1), L.el.dataset.cols = bt.cols, L.el.classList.contains("tfDac") && L.el.style.setProperty("--tf-dac-pad", bt.h - wf + "px"), !(L === T && !Kt.fromTray) && (L.el.style.left = bt.x + "px", L.el.style.top = bt.y + "px");
    }), e || (rn = G), ps([...M.filter((L) => co.includes(L.key)), ...C.slice().sort((L, bt) => G.get(L.key).row - G.get(bt.key).row || G.get(L.key).col - G.get(bt.key).col)].map((L) => L.el)), [["favs", ".tfDash-favs"], ["act", ".tfDash-act"]].forEach(([L, bt]) => {
      const Wt = G.get(L), Dt = Wt && P.querySelector(bt), Zt = Dt == null ? void 0 : Dt.querySelector(":scope > .activityRows"), le = Dt == null ? void 0 : Dt.querySelector(":scope > .activityHeader");
      if (!Zt || !le) return;
      const _t = Zt.getBoundingClientRect().top - Dt.getBoundingClientRect().top, Et = Wt.rows === 1 ? Wt.h : Math.floor(Wt.h - _t - parseFloat(getComputedStyle(Dt).paddingBottom)), Le = Math.max(1, Math.floor(Et / vf));
      Zt.style.setProperty("--fill-row", (Et / Le).toFixed(2) + "px"), Zt.style.maxHeight = Et + "px";
    }), ei = Math.max(0, ...[...G.values()].map((L) => L.row + L.rows));
    let B = qo + ei * Ra - se;
    B = ms(na && !e, C, G, B, n, i), P.style.height = B + "px", requestAnimationFrame(() => g.classList.add("tfBoardReady")), f.forEach((L) => hs.observe(L.el)), Tc(), ve();
  }
  const ra = { gap: 20, phoneGap: 16, inner: 16, col: 252, row: 337, nameGap: 16, sumsGap: 16, full: 1336, floorTop: 12, floorHead: 24, floorGap: 16 }, ac = { s: { w: 160, h: 192 }, m: { w: 200, h: 240 }, l: { w: 252, h: 337 } }, oc = () => {
    var t;
    return ac[(t = mt.home) == null ? void 0 : t.areaSize] ? mt.home.areaSize : "s";
  }, fs = () => {
    var t;
    return ["rows", "columns", "bento"].includes((t = mt.home) == null ? void 0 : t.areaLayout) ? mt.home.areaLayout : "bento";
  }, nc = () => {
    var t;
    return ((t = mt.home) == null ? void 0 : t.cardsAs) === "rows" ? "rows" : "stacked";
  }, Cf = { byFloor: !0, bentoBoxes: !0, bentoMixed: !1, favsTitle: !1 }, ai = () => S ? po("favsTitle") : mt.favsTitle !== !1, _f = () => {
    var t;
    return !!((t = mt.home) != null && t.weather && Ot());
  }, rc = () => {
    var t;
    return !!((t = mt.home) != null && t.energy && (Ba != null && Ba.length));
  }, po = (t) => {
    var e;
    return ((e = mt.home) == null ? void 0 : e[t]) ?? Cf[t];
  };
  function Tf() {
    var i;
    const t = Object.values(((i = c()) == null ? void 0 : i.floors) || {}), e = new Set(t.map((d) => d.floor_id)), a = t.map((d) => ({ id: d.floor_id, name: d.name, rooms: u.filter((l) => l.floor === d.floor_id) })), n = u.filter((d) => !e.has(d.floor));
    return n.length && a.push({ id: "", name: t.length ? "Other areas" : "", rooms: n }), a;
  }
  const ic = (t) => t.classList.toggle("hcMore", t.scrollHeight - t.scrollTop - t.clientHeight > 1);
  let me = null, sc = [], cr = /* @__PURE__ */ new Map();
  function us(t) {
    let e = P.querySelector(".hcHomeLand");
    if (!t) {
      e == null || e.remove();
      return;
    }
    e || (e = Object.assign(document.createElement("div"), { className: "tfBoardLand hcHomeLand" }), P.appendChild(e)), Object.assign(e.style, { left: t.x + "px", top: t.y + "px", width: t.w + "px", height: t.h + "px" });
  }
  function Lf(t) {
    if (!S || !mo || t.button !== 0 || P.clientWidth < 2 * sr + se) return;
    const e = t.target.closest(".tfBoardItem"), a = e && cn().find((f) => f.el === e);
    if (!a || co.includes(a.key) || H(a.key)) return;
    t.preventDefault();
    const n = P.getBoundingClientRect(), i = cr.get(a.key);
    me = { key: a.key, el: e, on: !1, x0: t.clientX, y0: t.clientY, left: i.x, top: i.y, order: [...sc] };
    const d = (f) => {
      const h = f.clientX - me.x0, k = f.clientY - me.y0;
      if (!me.on && Math.hypot(h, k) < 5) return;
      me.on || (me.on = !0, e.classList.add("tfDragging"), qe() || e.animate([{ scale: "1" }, { scale: "1.05" }, { scale: "1.02" }], { duration: 260, easing: "cubic-bezier(.2,1.35,.4,1)" })), Object.assign(e.style, { left: me.left + h + "px", top: me.top + k + "px" });
      const M = f.clientX - n.left, x = f.clientY - n.top + P.scrollTop;
      let C = null, T = 1 / 0;
      if (cr.forEach((B, Y) => {
        if (Y === a.key || !me.order.includes(Y)) return;
        const L = Math.hypot(M - (B.x + B.w / 2), x - (B.y + B.h / 2));
        L < T && (T = L, C = { key: Y, b: B });
      }), !C) return;
      const D = me.order.filter((B) => B !== a.key), R = D.indexOf(C.key) + (M > C.b.x + C.b.w / 2 ? 1 : 0), G = [...D.slice(0, R), a.key, ...D.slice(R)];
      G.join() !== me.order.join() ? (me.order = G, Re()) : us(cr.get(a.key));
    }, l = () => {
      removeEventListener("pointermove", d), removeEventListener("pointerup", l), removeEventListener("pointercancel", l);
      const f = me;
      me = null, e.classList.remove("tfDragging"), f.on && ka({ order: f.order }), Re(), f.on && !qe() && setTimeout(() => wl(e), 340);
    };
    addEventListener("pointermove", d), addEventListener("pointerup", l), addEventListener("pointercancel", l);
  }
  function Df(t, e, a) {
    var nd;
    const n = new Set(ae().hidden);
    t.forEach((ct) => ct.el.classList.toggle("tfBoardHidden", n.has(ct.key)));
    const i = t.filter((ct) => !n.has(ct.key) && getComputedStyle(ct.el).display !== "none"), d = a ? ra.phoneGap : ra.gap, l = Math.min(e, ra.full);
    let f = 0;
    const h = pi();
    g.classList.toggle("hcSumsFit", bc()), g.classList.toggle("hcFavStrip", h);
    const k = i.filter((ct) => co.includes(ct.key) || h && ct.key === "favs");
    k.sort((ct, Ht) => ["title", "sums", "favs"].indexOf(ct.key) - ["title", "sums", "favs"].indexOf(Ht.key)), k.forEach((ct) => {
      ct.el.classList.add("tfBoardItem"), ct.el.toggleAttribute("data-narrow", !1), Object.assign(ct.el.style, { width: (ct.key === "title" ? e : l) + "px", height: "", left: "0px", top: f + "px" });
      const Ht = ct.key !== "title" && (ct.el.querySelector(".tfDash-bar>.activityRows") || ct.key === "favs" && ct.el.querySelector(":scope>.activityRows")), ye = Ht ? Ht.children.length : 0;
      if (Ht && (Ht.classList.remove("hcBarRows"), !a && Ht.scrollWidth > Ht.clientWidth + 1))
        for (let ce = 2; ce <= ye && (Ht.classList.add("hcBarRows"), Ht.style.setProperty("--bar-cols", String(Math.ceil(ye / ce))), !(Ht.scrollWidth <= Ht.clientWidth + 1)); ce++)
          ;
      f += ct.el.offsetHeight + (ct.key === "title" ? ra.nameGap : ra.sumsGap);
    });
    const M = a ? 1 : Math.max(0.85, Math.min(1, e / ra.full)), x = ["favs", "wx", "energy"], C = (me == null ? void 0 : me.order) || ((nd = mt.home) == null ? void 0 : nd.order), T = C ? [...C.filter((ct) => x.includes(ct)), ...x.filter((ct) => !C.includes(ct))] : x;
    sc = T;
    const D = i.filter((ct) => x.includes(ct.key) && !(h && ct.key === "favs")).sort((ct, Ht) => T.indexOf(ct.key) - T.indexOf(Ht.key));
    cr = /* @__PURE__ */ new Map();
    const R = (ct, Ht) => {
      if (cr.set(ct.key, Ht), Object.assign(ct.el.style, { width: Ht.w + "px", height: Ht.h + "px" }), me != null && me.on && me.key === ct.key) {
        us(Ht);
        return;
      }
      Object.assign(ct.el.style, { left: Ht.x + "px", top: Ht.y + "px" });
    }, G = a ? e : Math.round((2 * ra.col + ra.inner) * M), B = Math.round(ra.row * M), Y = oc(), L = ac[Y], bt = fs(), Wt = po("byFloor"), Dt = nc() === "stacked" && !a && D.length > 0;
    let Zt = 0, le = 0, _t = f;
    D.forEach((ct) => {
      ct.el.classList.add("tfBoardItem"), ct.el.dataset.rows = 5, ct.el.dataset.cols = 2, ct.el.toggleAttribute("data-narrow", !1);
      let Ht = B;
      if ((a || ct.key === "favs") && (Object.assign(ct.el.style, { width: G + "px", height: "" }), Ht = ct.el.offsetHeight), Dt) {
        R(ct, { x: 0, y: _t, w: G, h: Ht }), _t += Ht + d;
        return;
      }
      Zt && Zt + G > e && (f += le + d, Zt = 0, le = 0), R(ct, { x: Zt, y: f, w: G, h: Ht }), Zt += G + d, le = Math.max(le, Ht);
    }), D.length && !Dt && (f += le + d);
    const Et = Dt ? G + d : 0, Le = Dt ? e - G - d : e, Ne = a ? Math.floor((e - d) / 2) : Math.round(L.w * M), Je = Math.round(L.h * M), Ve = a ? 2 : Math.max(1, Math.floor((Le + d) / (Ne + d))), Hn = new Map(i.filter((ct) => H(ct.key)).map((ct) => [ct.key, ct])), Ma = (Wt ? Tf() : [{ id: "", name: "", rooms: u }]).map((ct) => ({ ...ct, cards: ct.rooms.map((Ht) => Hn.get("room:" + Ht.id)).filter(Boolean) })).filter((ct) => ct.cards.length), Qs = bt === "bento", tl = Qs && po("bentoMixed"), Su = Qs && Wt && po("bentoBoxes"), Au = bt === "columns" && Wt && !a, vr = 12, Cu = (ct) => ct.name ? ra.floorHead + ra.floorGap : 0, el = (ct, Ht, ye) => {
      const ce = /* @__PURE__ */ new Set(), de = [];
      ct.cards.forEach((Nt, Sa) => {
        const Ie = tl && Sa === 0 && Ht >= 2 && ct.cards.length > 1, jo = Ie ? 2 : 1, bi = Ie && !a && !Dt ? 2 : 1;
        Nt.el.classList.remove("hcAreaS", "hcAreaM", "hcAreaL", "hcAreaBig"), Nt.el.classList.add("hcArea" + Y.toUpperCase()), Nt.el.classList.toggle("hcAreaBig", Ie), Nt.el.style.setProperty("--hc-k", String(M)), Nt.el.classList.add("tfBoardItem"), Nt.el.dataset.rows = bi > 1 ? 10 : 5, Nt.el.dataset.cols = jo, Nt.el.toggleAttribute("data-narrow", !1);
        for (let wi = 0; ; wi++) {
          const il = [...Array(Math.max(0, Ht - jo + 1)).keys()].find((sl) => [...Array(jo).keys()].every((ll) => [...Array(bi).keys()].every((Du) => !ce.has(wi + Du + "," + (sl + ll)))));
          if (il != null) {
            [...Array(jo).keys()].forEach((sl) => [...Array(bi).keys()].forEach((ll) => ce.add(wi + ll + "," + (il + sl)))), de.push({ it: Nt, r: wi, c: il, sc: jo, sr: bi });
            break;
          }
        }
      });
      const He = Math.max(0, ...de.map((Nt) => Nt.r + Nt.sr));
      Qs && !a && !Dt && de.forEach((Nt) => {
        for (; Nt.r + Nt.sr < He && !ce.has(Nt.r + Nt.sr + "," + Nt.c) && Nt.sc === 1; )
          ce.add(Nt.r + Nt.sr + "," + Nt.c), Nt.sr++;
      }), de.forEach((Nt) => Object.assign(Nt.it.el.style, { width: Nt.sc * ye + (Nt.sc - 1) * d + "px", height: a ? "" : Nt.sr * Je + (Nt.sr - 1) * d + "px" }));
      const Wo = [...Array(He)].map((Nt, Sa) => a ? 0 : Dt && Sa === 0 ? B : Je);
      a ? de.forEach((Nt) => {
        Wo[Nt.r] = Math.max(Wo[Nt.r], Nt.it.el.offsetHeight);
      }) : de.forEach((Nt) => {
        Nt.it.el.style.height = Wo.slice(Nt.r, Nt.r + Nt.sr).reduce((Sa, Ie) => Sa + Ie, 0) + (Nt.sr - 1) * d + "px";
      });
      const un = [];
      let wo = Cu(ct);
      return Wo.forEach((Nt, Sa) => {
        un[Sa] = wo, wo += Nt + d;
      }), { h: wo - (He ? d : 0), places: de.map((Nt) => ({ it: Nt.it, x: Nt.c * (ye + d), y: un[Nt.r], w: Nt.sc * ye + (Nt.sc - 1) * d, h: Wo.slice(Nt.r, Nt.r + Nt.sr).reduce((Sa, Ie) => Sa + Ie, 0) + (Nt.sr - 1) * d })) };
    }, al = new Map([...P.querySelectorAll(":scope > .hcFloor")].map((ct) => [ct.dataset.floor, ct])), ol = new Map([...P.querySelectorAll(":scope > .hcFloorBox")].map((ct) => [ct.dataset.floor, ct])), od = [], _u = (ct, Ht, ye, ce) => {
      if (!ct.name) return;
      let de = al.get(ct.id);
      al.delete(ct.id), de || (de = Object.assign(document.createElement("div"), { className: "hcFloor" }), de.dataset.floor = ct.id, P.appendChild(de)), de.dataset.sig !== ct.name && (de.dataset.sig = ct.name, de.innerHTML = '<h2 class="hcFloorName">' + q(ct.name) + "</h2>"), Object.assign(de.style, { left: Ht + "px", top: ye + "px", width: ce + "px" }), od.push(de);
    }, Tu = (ct, Ht, ye, ce, de) => {
      let He = ol.get(ct.id);
      ol.delete(ct.id), He || (He = Object.assign(document.createElement("div"), { className: "hcFloorBox" }), He.dataset.floor = ct.id, He.setAttribute("aria-hidden", "true"), P.prepend(He)), Object.assign(He.style, { left: Ht + "px", top: ye + "px", width: ce + "px", height: de + "px" });
    }, Lu = (ct) => parseFloat(getComputedStyle(ct.cards[0].el).paddingLeft) || 0, nl = (ct, Ht, ye, ce, de = 0) => {
      _u(ct, ye + de, ce, (Ht.w ?? e) - de), Ht.places.forEach((He) => R(He.it, { x: ye + He.x, y: ce + He.y, w: He.w, h: He.h }));
    };
    if (Ma.length && D.length && !Dt && (f += ra.floorTop), Au) {
      let ct = 0, Ht = f;
      Ma.forEach((ye) => {
        const ce = { ...el(ye, 1, Ne), w: Ne };
        ct && ct + Ne > Le && (f = Ht + d + ra.floorTop, ct = 0), nl(ye, ce, Et + ct, f), Ht = Math.max(Ht, f + ce.h), ct += Ne + d;
      }), f = Ht + d;
    } else if (Su) {
      const ct = Array(Ve).fill(f);
      Ma.forEach((Ht) => {
        const ye = Ht.cards.length + (tl && Ht.cards.length > 1 ? 3 : 0), ce = a ? 2 : Math.min(Ve, Math.max(tl && Ht.cards.length > 1 ? 2 : 1, ye <= 3 ? ye : Math.ceil(ye / 2))), de = ce * (Ne + d) - d, He = Math.floor((de - 2 * vr - (ce - 1) * d) / ce), Wo = { ...el(Ht, ce, He), w: de - 2 * vr };
        let un = 0, wo = 1 / 0;
        for (let Ie = 0; Ie + ce <= Ve; Ie++) {
          const jo = Math.max(...ct.slice(Ie, Ie + ce));
          jo < wo && (wo = jo, un = Ie);
        }
        const Nt = Et + un * (Ne + d), Sa = Wo.h + 2 * vr;
        Tu(Ht, Nt, wo, de, Sa), nl(Ht, Wo, Nt + vr, wo + vr, Lu(Ht));
        for (let Ie = un; Ie < un + ce; Ie++) ct[Ie] = wo + Sa + d;
      }), f = Math.max(f, ...ct);
    } else
      Ma.forEach((ct, Ht) => {
        Ht && (f += ra.floorTop);
        const ye = el(ct, Ve, Ne);
        nl(ct, { ...ye, w: Le }, Et, f), f += ye.h + d;
      });
    Dt && (f = Math.max(f, _t)), al.forEach((ct) => ct.remove()), ol.forEach((ct) => ct.remove()), me != null && me.on || us(null), P.style.height = Math.max(0, f - d) + "px", ps([...k.map((ct) => ct.el), ...D.map((ct) => ct.el), ...od, ...Ma.flatMap((ct) => ct.cards.map((Ht) => Ht.el))]), ms(!1), t.forEach((ct) => [...ct.el.children].forEach((Ht) => Ht.toggleAttribute("inert", mo)));
    const rl = P.querySelector(".tfDash-favs>.activityRows");
    rl && (rl.classList.toggle("hcFadeList", !h), ic(rl)), requestAnimationFrame(() => g.classList.add("tfBoardReady")), t.forEach((ct) => hs.observe(ct.el)), ve();
  }
  const oi = () => {
    ss || (ss = !0, requestAnimationFrame(() => {
      ss = !1, Re();
    }));
  }, hs = new ResizeObserver(() => {
    Kt || oi();
  });
  function Ef(t, e, a) {
    const n = a + se, i = t * a + (t - 1) * se, d = e * Ra - se, l = se / 2, f = n / Math.max(1, Math.round(n / (Ra / 4))), h = Ra / 4, k = 6;
    let M = "";
    for (let x = 0; x <= t; x++) for (let C = 0; C <= e; C++) {
      const T = x * n - l, D = C * Ra - l;
      M += "M" + (T - k) + " " + D + "H" + (T + k) + "M" + T + " " + (D - k) + "V" + (D + k);
    }
    return '<svg width="' + i + '" height="' + d + '" viewBox="0 0 ' + i + " " + d + '"><defs><pattern id="tfGridDots" patternUnits="userSpaceOnUse" x="' + -l + '" y="' + -l + '" width="' + f.toFixed(3) + '" height="' + h + '"><circle cx="0" cy="0" r="1.4"></circle><circle cx="' + f.toFixed(3) + '" cy="0" r="1.4"></circle><circle cx="0" cy="' + h + '" r="1.4"></circle><circle cx="' + f.toFixed(3) + '" cy="' + h + '" r="1.4"></circle></pattern></defs><rect class="tfGridDots" x="' + -l + '" y="' + -l + '" width="' + (i + se) + '" height="' + (d + se) + '" fill="url(#tfGridDots)"></rect><path class="tfGridCross" d="' + M + '"></path></svg>';
  }
  function ms(t, e = [], a = /* @__PURE__ */ new Map(), n = 0, i = 1, d = sr) {
    P.querySelectorAll(".tfEditChips").forEach((M) => {
      (!t || !M.closest(".tfBoardItem")) && M.remove();
    }), P.querySelectorAll(".tfFavHides").forEach((M) => M.remove()), P.querySelectorAll(".tfBoardItem").forEach((M) => [...M.children].forEach((x) => {
      x.classList.contains("tfEditChips") || x.toggleAttribute("inert", t);
    }));
    let l = P.querySelector(".tfBoardCells"), f = P.querySelector(".tfBoardLand");
    if (!t)
      return l == null || l.remove(), f == null || f.remove(), Ya(), n;
    const h = ei + hf;
    if (l || (l = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), l.setAttribute("aria-hidden", "true"), P.prepend(l)), l.style.top = qo + "px", l.dataset.size !== i + "x" + h + "x" + d && (l.dataset.size = i + "x" + h + "x" + d, l.innerHTML = Ef(i, h, d)), n = Math.max(n, qo + h * Ra - se), e.forEach((M) => {
      const x = M.el;
      !x || x.querySelector(":scope > .tfEditChips") || x.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + Sr + '</span><button class="tfEditChip" type="button" data-board-more="' + q(M.key) + '" aria-label="' + q(va(M.key)) + ' options" aria-haspopup="menu">' + g0 + "</button></div>");
    }), Kt && a.has(Kt.key)) {
      f || (f = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), P.appendChild(f));
      const M = a.get(Kt.key);
      Object.assign(f.style, { left: M.x + "px", top: M.y + "px", width: M.w + "px", height: M.h + "px" });
    } else f == null || f.remove();
    const k = P.querySelector(".tfDash-favs.tfBoardItem:not(.tfBoardHidden)");
    if (k) {
      const M = k.getBoundingClientRect();
      k.insertAdjacentHTML("beforeend", '<div class="tfFavHides">' + [...k.querySelectorAll('[data-k^="fav:"]')].map((x) => {
        const C = x.getBoundingClientRect(), T = x.dataset.k.slice(4);
        return '<button class="tfFavHide" type="button" data-fav-hide="' + q(T) + '" aria-label="Hide ' + q(kt(T)) + ' from the dashboard" style="left:' + Math.round(C.right - M.left - 42) + "px;top:" + Math.round(C.top - M.top + (C.height - 32) / 2) + 'px">' + rp + "</button>";
      }).join("") + "</div>");
    }
    return n;
  }
  let gs = "";
  function bs(t) {
    na = t, t || (Kt = null, fo = uo = !1, Ya()), Re(), t ? gs = JSON.stringify(mt) : gs && JSON.stringify(mt) !== gs && ya("Changes saved");
  }
  function Bf(t, e) {
    var G, B;
    Ya();
    const a = rn.get(t), { n } = sn(P.clientWidth), i = ae(), d = i.spans[t] ?? (H(t) ? 1 : 2);
    if (!a) return;
    const l = a.cols >= n, f = (Y, L, bt) => '<button type="button" role="menuitem" data-board-act="' + Y + '"' + (bt ? " disabled" : "") + ">" + L + "</button>", h = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    h.setAttribute("role", "menu"), h.setAttribute("aria-label", va(t) + " options");
    const k = P.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]'), M = $l(t), x = lr(t), C = '<div class="tfHeight" role="group" aria-label="Height"><span class="tfHeightLabel" aria-hidden="true">Height</span><div class="tfHeightTabs">' + Kl.map((Y, L) => '<button type="button" role="menuitemradio" aria-checked="' + (L + 1 === x) + '" aria-label="' + Y + ", " + (L + 1) + (L ? " rows" : " row") + '" data-board-act="h:' + (L + 1) + '"' + (L < M ? "" : " disabled") + ">" + Y + "</button>").join("") + "</div></div>", T = mf.includes(t) || H(t) ? '<div class="tfHeight tfWidth" role="group" aria-label="Width"><span class="tfHeightLabel" aria-hidden="true">Width</span><div class="tfHeightTabs">' + gf.map((Y, L) => '<button type="button" role="menuitemradio" aria-checked="' + (L + 1 === Math.min(d, n)) + '" aria-label="' + Y + ", " + (L + 1) + (L ? " columns" : " column") + '" data-board-act="w:' + (L + 1) + '"' + (L < n ? "" : " disabled") + ">" + Y + "</button>").join("") + "</div></div>" : "", D = t === "radar" ? '<div class="tfHeight tfSource" role="group" aria-label="Source"><span class="tfHeightLabel" aria-hidden="true">Source</span><div class="tfSourceList">' + Rr().map(([Y, L]) => '<button type="button" role="menuitemradio" aria-checked="' + (Y === Zn()) + '" data-board-act="src:' + q(Y) + '">' + q(L) + "</button>").join("") + "</div></div>" : "";
    h.innerHTML = C + T + D + (t === "energy" ? f("graph", (((G = i.opts.energy) == null ? void 0 : G.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + f("left", "Move left", l || a.col === 0) + f("right", "Move right", l || a.col + a.cols >= n) + f("up", "Move up", a.row <= 0) + f("down", "Move down") + (k ? f("remove", "Remove") : f("hide", "Hide")), P.appendChild(h);
    const R = Math.min(a.x + a.w - h.offsetWidth, P.clientWidth - h.offsetWidth);
    Object.assign(h.style, { left: Math.max(0, R) + "px", top: a.y + 28 + "px" }), Xe = { key: t, menu: h, opener: e }, (B = h.querySelector("button:not([disabled])")) == null || B.focus();
  }
  function Ya(t) {
    if (!Xe) return;
    const { menu: e, opener: a } = Xe;
    Xe = null, e.remove(), t && (a == null || a.focus());
  }
  const dn = () => Object.fromEntries([...rn].map(([t, e]) => [t, { col: e.col, row: e.row }]));
  function Rf(t, e) {
    var f, h, k;
    if (e === "remove") {
      Ya(), Pf(t);
      return;
    }
    const a = mt, n = ae(), i = dn(), d = i[t] || { col: 0, row: 0 };
    e.startsWith("w:") && (n.spans = { ...n.spans, [t]: e === "w:full" ? "full" : Number(e.slice(2)) }), e.startsWith("h:") && (n.opts = { ...n.opts, [t]: { ...n.opts[t] || {}, h: Number(e.slice(2)), tall: void 0 } }), e.startsWith("src:") && (n.opts = { ...n.opts, radar: { ...n.opts.radar || {}, source: e.slice(4) } }), e === "graph" && (n.opts = { ...n.opts, energy: { ...n.opts.energy || {}, graph: (((f = n.opts.energy) == null ? void 0 : f.graph) || "above") === "above" ? "below" : "above" } }), e === "left" && (i[t] = { ...d, col: d.col - 1 }), e === "right" && (i[t] = { ...d, col: d.col + 1 }), e === "up" && (i[t] = { ...d, row: d.row - 1 }), e === "down" && (i[t] = { ...d, row: d.row + 1 }), e === "hide" && (n.hidden = [.../* @__PURE__ */ new Set([...n.hidden, t])]), ["left", "right", "up", "down"].includes(e) && (Kt = { key: t, col: i[t].col, row: i[t].row }), Ln(n, i), Kt && (Re(), Kt = null, Ln(ae(), dn()));
    const l = /^[hw]:/.test(e) && !qe() && (Xe == null ? void 0 : Xe.menu.querySelector('[data-board-act="' + CSS.escape(e) + '"]'));
    if (l) {
      const M = Xe;
      l.parentElement.querySelectorAll("[aria-checked]").forEach((x) => x.setAttribute("aria-checked", String(x === l))), setTimeout(() => {
        Xe === M && Ya();
      }, xe.tabs.dur);
    } else Ya();
    e === "graph" && (ua.delete("dash:energy"), Ce()), e.startsWith("src:") && ((h = be == null ? void 0 : be.get("radar")) == null || h.refresh(), ge == null || ge.refresh()), e.startsWith("h:") && t.includes(".") && Ce(), Re(), e !== "hide" ? (k = P.querySelector('[data-board-more="' + CSS.escape(t) + '"]')) == null || k.focus() : ya(va(t) + " hidden", ci(a));
  }
  const lc = (t) => {
    var e;
    return Lo.includes(t) && !(((e = mt.dash) == null ? void 0 : e.cells) || {})[t] ? " added" : " put back";
  };
  function ws(t) {
    const e = ae(), a = va(t) + lc(t);
    ln({ ...e, hidden: e.hidden.filter((n) => n !== t) }), Re(), ya(a);
  }
  const ni = () => ae().tiles || [...P.querySelectorAll(".tfDashTiles > [data-k]")].map((t) => t.dataset.k).filter((t) => !ae().hidden.includes(t));
  function cc(t, e) {
    const a = ae();
    Ln({ ...a, tiles: t, hidden: a.hidden.filter((n) => !n.includes(".")) }, e), Ce(), ve();
  }
  const dc = (t) => {
    cc([...ni().filter((e) => e !== t), t], dn()), ya(va(t) + " added"), If(t);
  }, Pf = (t) => {
    const e = mt, a = dn();
    delete a[t], cc(ni().filter((n) => n !== t), a), ya(va(t) + " removed", ci(e));
  };
  let vs = 0;
  function ya(t, e = null) {
    var l;
    const a = p("toast");
    if (!a) return;
    if (Vh(a, t), e) {
      const f = Object.assign(document.createElement("button"), { type: "button", className: "toastAction", textContent: "Undo" });
      f.addEventListener("click", () => {
        clearTimeout(vs), a.classList.remove("show", "withAction"), e();
      }), a.appendChild(f);
    }
    const n = g.getBoundingClientRect(), i = (l = o.querySelector(".bottomNav")) == null ? void 0 : l.getBoundingClientRect(), d = Gt.classList.contains("open") && !Za ? Math.min(n.right, Gt.getBoundingClientRect().left) : n.right;
    a.style.left = (n.left + d) / 2 + "px", a.style.bottom = (i != null && i.height ? window.innerHeight - i.top + 12 : 26) + "px", a.classList.add("tfToast", "show"), a.classList.toggle("withAction", !!e), zh(a), clearTimeout(vs), vs = setTimeout(() => a.classList.remove("show", "withAction"), e ? 5e3 : xe.confirm.stay);
  }
  const Hf = 700, Of = 1e3, ia = Object.assign(document.createElement("div"), { className: "tfTooltip", hidden: !0 });
  ia.setAttribute("role", "tooltip"), ia.setAttribute("aria-hidden", "true"), g.appendChild(ia);
  let ri = null, dr = 0, Dn = 0, pc = -1 / 0;
  const ys = (t) => {
    if (t.nodeType !== 1) return !1;
    const e = getComputedStyle(t);
    return e.textOverflow === "ellipsis" && t.scrollWidth > t.clientWidth + 1 || e.webkitLineClamp !== "none" && t.scrollHeight > t.clientHeight + 1;
  }, Nf = (t) => {
    for (let e = t; e && e !== g; e = e.parentElement) if (ys(e)) return e;
    return null;
  };
  function fc(t, e) {
    clearTimeout(dr), clearTimeout(Dn);
    const a = () => {
      if (!t.isConnected) return;
      ri = t, ia.textContent = e, ia.hidden = !1;
      const n = t.getBoundingClientRect(), i = ia.getBoundingClientRect(), d = n.top - i.height - 8 >= 8 ? n.top - i.height - 8 : n.bottom + 8;
      ia.style.left = Math.max(8, Math.min(window.innerWidth - i.width - 8, n.left + n.width / 2 - i.width / 2)) + "px", ia.style.top = d + "px";
    };
    !ia.hidden || performance.now() - pc < Of ? a() : dr = setTimeout(a, Hf);
  }
  function ii() {
    clearTimeout(dr), clearTimeout(Dn), ia.hidden || (pc = performance.now()), ia.hidden = !0, ri = null;
  }
  o.addEventListener("pointerover", (t) => {
    if (t.pointerType === "touch") return;
    if (ia.contains(t.target)) {
      clearTimeout(Dn);
      return;
    }
    const e = Nf(t.target);
    if (e && zt.names === "scroll" && e.matches(si)) {
      xs(e);
      return;
    }
    if (e) {
      e !== ri ? fc(e, e.textContent.trim()) : clearTimeout(Dn);
      return;
    }
    clearTimeout(dr), clearTimeout(Dn), Dn = setTimeout(ii, 120);
  }), o.addEventListener("focusin", (t) => {
    var n;
    const e = t.target;
    if (!((n = e.matches) != null && n.call(e, ":focus-visible"))) return;
    let a = [e, ...e.querySelectorAll("*")].filter(ys);
    zt.names === "scroll" && (a.filter((i) => i.matches(si)).forEach(xs), a = a.filter((i) => !i.matches(si))), a.length && fc(e, a.map((i) => i.textContent.trim()).join(" · "));
  }), o.addEventListener("focusout", (t) => {
    t.target === ri && ii();
  }), o.addEventListener("keydown", (t) => {
    t.key === "Escape" && !ia.hidden && (t.stopPropagation(), ii());
  }, !0), window.addEventListener("scroll", () => {
    (!ia.hidden || dr) && ii();
  }, { capture: !0, passive: !0 });
  const si = ".activityRowName,.activityRowMeta", li = /* @__PURE__ */ new WeakSet();
  function xs(t) {
    var a;
    if (zt.names !== "scroll" || li.has(t) || t.closest("[inert]") || (a = window.matchMedia) != null && a.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    li.add(t);
    const e = () => Promise.all([t.closest(".hcAreaPanel"), t.closest(".panelExpanded")].filter(Boolean).flatMap((n) => n.getAnimations()).map((n) => n.finished.catch(() => {
    })));
    setTimeout(async () => {
      await e();
      const n = t.isConnected && !t.closest("[inert]") ? t.scrollWidth - t.clientWidth : 0;
      if (n < 2) {
        li.delete(t);
        return;
      }
      const i = n / 30 * 1e3, d = i + 1e3 + i;
      t.style.textOverflow = "clip";
      const l = t.animate([
        { textIndent: "0px", offset: 0, easing: "ease-in-out" },
        { textIndent: -n + "px", offset: i / d },
        { textIndent: -n + "px", offset: (1e3 + i) / d, easing: "ease-in-out" },
        { textIndent: "0px", offset: 1 }
      ], { duration: d });
      l.onfinish = l.oncancel = () => {
        t.style.textOverflow = "", li.delete(t);
      };
    }, 600);
  }
  const uc = new IntersectionObserver((t) => t.forEach((e) => {
    e.isIntersecting && !e.target.closest("[inert]") && (uc.unobserve(e.target), xs(e.target));
  }), { threshold: 1 });
  let ks = !1;
  new MutationObserver(() => {
    ks || zt.names !== "scroll" || (ks = !0, setTimeout(() => {
      ks = !1, o.querySelectorAll(si).forEach((t) => {
        !t.dataset.glided && ys(t) && (t.dataset.glided = "1", uc.observe(t));
      });
    }, 300));
  }).observe(o, { childList: !0, subtree: !0 });
  const ci = (t) => () => {
    mt = t, Oe(), Ce(), Re(), ve();
  };
  function If(t) {
    const e = () => P.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]');
    setTimeout(() => {
      var l;
      const a = e();
      if (!a) return;
      const n = (l = window.matchMedia) == null ? void 0 : l.call(window, "(prefers-reduced-motion: reduce)").matches, i = a.getBoundingClientRect();
      (i.top < 0 || i.bottom > window.innerHeight) && a.scrollIntoView({ behavior: n ? "auto" : "smooth", block: "center" });
      const d = (f) => "0 0 0 4px color-mix(in srgb,var(--primary) " + f + "%,transparent),0 0 24px color-mix(in srgb,var(--primary) " + f + "%,transparent)";
      a.animate([{ boxShadow: d(55) }, { boxShadow: d(0) }], { duration: 1500, easing: n ? "steps(1, end)" : "ease-out" });
    }, Ff(t) ? 260 : 0);
  }
  function Ff(t) {
    const e = rn.get(t);
    if (!e || !Gt.classList.contains("open") || Za) return !1;
    const { n: a, w: n } = sn(P.clientWidth), i = Gt.getBoundingClientRect().left - P.getBoundingClientRect().left, d = (h) => h * (n + se) + e.cols * n + (e.cols - 1) * se <= i;
    if (d(e.col)) return !1;
    const l = /* @__PURE__ */ new Set();
    rn.forEach((h, k) => {
      if (k !== t) for (let M = h.row; M < h.row + h.rows; M++) for (let x = h.col; x < h.col + h.cols; x++) l.add(x + "," + M);
    });
    const f = (h, k) => {
      for (let M = k; M < k + e.rows; M++) for (let x = h; x < h + e.cols; x++) if (l.has(x + "," + M)) return !1;
      return !0;
    };
    for (let h = 0; h <= ei; h++) for (let k = 0; k + e.cols <= a && d(k); k++)
      if (f(k, h))
        return Ln(ae(), { ...dn(), [t]: { col: k, row: h } }), Re(), !0;
    return !1;
  }
  const hc = /^(light|switch|cover|climate|fan|lock|valve|media_player|humidifier|vacuum|scene|script|alarm_control_panel|water_heater|input_boolean)\./, qf = [["page", "Page"], ["cards", "Cards"], ["areas", "Areas"], ["favs", "Favourites"]];
  let Ms = "page";
  const Wf = (t) => t.matches('[data-tray="welcome"],[data-tray="phone"]') ? "page" : t.querySelector("[data-room-add]") ? "areas" : t.querySelector('[data-tray="favs"]') ? "favs" : "cards";
  function mc(t = !1) {
    const e = Gt.querySelector(".tfTrayInner"), a = Gt.querySelector(".hcTrayTabs"), n = a.querySelector(".rubberIndicator");
    let i = !0;
    e.querySelectorAll(":scope>.tfTraySection").forEach((l) => {
      l.hidden = Wf(l) !== Ms, l.classList.toggle("hcFirst", !l.hidden && i), l.hidden || (i = !1);
    }), a.querySelectorAll("[data-tray-tab]").forEach((l) => {
      const f = l.dataset.trayTab === Ms;
      l.classList.toggle("active", f), l.setAttribute("aria-selected", String(f));
    });
    const d = a.querySelector(".tab.active");
    d != null && d.offsetWidth && (n.style.transition = "none", t ? Pi(n, n.offsetLeft, n.offsetWidth, d.offsetLeft, d.offsetWidth) : (n.style.left = d.offsetLeft + "px", n.style.width = d.offsetWidth + "px"));
  }
  const Gt = Object.assign(document.createElement("aside"), { className: "tfEditTray" });
  Gt.setAttribute("aria-label", "Edit custom dashboard"), Gt.innerHTML = '<button class="tfTrayTuck" type="button" data-tray-tuck></button><div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit custom dashboard</div><button class="pill" type="button" data-tray-done>Done</button></div><div class="tabs rubberTabs hcTrayTabs" role="tablist" aria-label="Edit custom dashboard"><div class="rubberIndicator" aria-hidden="true"></div>' + qf.map(([t, e], a) => '<button class="tab segBtn' + (a ? "" : " active") + '" type="button" role="tab" aria-selected="' + !a + '" data-tray-tab="' + t + '">' + e + "</button>").join("") + '</div><section class="tfTraySection" data-tray="welcome"></section><section class="tfTraySection" data-tray="cards"></section><section class="tfTraySection" data-tray="weather"></section><section class="tfTraySection"><div class="sectionLabel">Tiles</div><p class="tfTrayNote">Remove a tile from its ⋯.</p><button class="pill tfTrayAdd hcAddBtn" type="button" data-tile-add aria-expanded="false">' + Li + '<span>Add tile</span></button><div class="tfTrayPick" data-pick="tiles" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-tile-search><ul class="tfTrayList" data-tray="tilepick"></ul></div></section><section class="tfTraySection"><div class="sectionLabel">Areas</div><p class="tfTrayNote">Which areas the Areas card shows. Drag to change their order, here and on Home.</p><ul class="tfTrayList hcHeList" data-tray="areas"></ul><button class="pill tfTrayAdd hcAddBtn" type="button" data-room-add aria-expanded="false">' + Li + '<span>Add area</span></button><ul class="tfTrayList" data-tray="roompick" hidden></ul></section><section class="tfTraySection" data-tray="phone"></section><section class="tfTraySection"><div class="sectionLabel">Favourites</div><ul class="tfTrayList" data-tray="favs"></ul><button class="pill tfTrayAdd hcAddBtn" type="button" data-fav-add aria-expanded="false">' + Li + '<span>Add favourite</span></button><div class="tfTrayPick" data-pick="favs" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-fav-search><ul class="tfTrayList" data-tray="pick"></ul></div><div class="toggleRow tfTraySuggest" data-tray="favtitle"></div><div class="toggleRow tfTraySuggest" data-tray="suggest"></div></section></div>', g.appendChild(Gt);
  let Za = !1, fo = !1, uo = !1, pr = !1, $e = null, ho = !1;
  const Ss = {}, Pa = (t, e) => {
    if (Ss[t] === e) return;
    Ss[t] = e;
    const a = Gt.querySelector('[data-tray="' + t + '"]');
    a.innerHTML = e, Va(a);
  }, As = (t, e) => '<span class="tfTrayName"><span class="activityRowName">' + q(kt(t)) + '</span><span class="activityRowMeta">' + q(e) + "</span></span>", jf = (t, e, a) => '<li class="tfTrayFav' + (e ? " off" : "") + '" data-tray-fav="' + q(t) + '"><span class="tfTrayGrip" aria-hidden="true">' + Sr + '</span><span class="tfIcon"' + ue(t, da(t)) + "></span>" + As(t, e ? "Hidden" + (Ct.get(t) ? " · " + Ct.get(t) : "") : Ct.get(t) || Ee(t)) + '<button class="tfTrayBtn" type="button" data-fav-eye="' + q(t) + '" aria-pressed="' + !e + '" aria-label="' + (e ? "Show " : "Hide ") + q(kt(t)) + ' on the dashboard">' + (e ? rp : b0) + "</button>" + (a ? '<button class="tfTrayBtn" type="button" data-fav-remove="' + q(t) + '" aria-label="Remove ' + q(kt(t)) + ' from favourites">' + _l + "</button>" : "<span></span>") + "</li>";
  function Cs(t, e, a, n) {
    const i = t.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return Object.keys(y).filter((l) => e(l) && !a.has(l) && y[l].state !== "unavailable").filter((l) => {
      const f = (kt(l) + " " + (Ct.get(l) || "") + " " + l).toLowerCase();
      return i.every((h) => f.includes(h));
    }).sort((l, f) => (Ct.get(l) || "~").localeCompare(Ct.get(f) || "~") || kt(l).localeCompare(kt(f))).slice(0, 40).map((l) => '<li><button class="tfTrayPickItem" type="button" ' + n + '="' + q(l) + '"><span class="tfIcon"' + ue(l, da(l)) + "></span>" + As(l, Ct.get(l) || "—") + "</button></li>").join("") || '<li class="tfTrayNote">Nothing matches.</li>';
  }
  const Vf = "https://www.home-assistant.io/dashboards/", gc = {
    welcome: ["Welcome message", "<p>Shows a <strong>greeting</strong> above your home's name: good morning, afternoon or evening, then your name.</p>"],
    weather: ["Weather", "<p>The forecast card: now, the next hours in a sentence and the week ahead. Its <strong>Now</strong> opens the Weather page.</p>"],
    energy: ["Energy today", "<p>What your home has used and made today, hour by hour, with <strong>Electricity</strong>, <strong>Solar</strong>, <strong>Gas</strong> and <strong>Water</strong> under it. From your Energy dashboard.</p>"],
    favs: ["Favourite entities", "<p>The devices you use most, at the top of Home.</p><ul><li><strong>Drag</strong> one to change the order</li><li>Press <strong>×</strong> to take it off</li></ul>"],
    suggest: ["Suggested entities", "<p>Fills Favourites with devices you often use, after your own. They change as you use your home.</p>"],
    sums: ["Summaries", "<p>Each summary sums up one kind of thing across your home, like <strong>Lights</strong>: how many are on.</p><ul><li>Switch one off to hide it</li><li><strong>Drag</strong> one to change the order</li></ul>"]
  }, we = Object.assign(document.createElement("aside"), { className: "tfEditTray hcHomeTray" });
  we.setAttribute("aria-label", "Edit Home page"), we.toggleAttribute("inert", !0);
  let mo = !1, Ha = !1, _s = "", Ts = null, di = "page";
  function Ls(t, e) {
    const a = we.querySelector(".hcTrayTabs"), n = a == null ? void 0 : a.querySelector(".rubberIndicator"), i = a == null ? void 0 : a.querySelector(".tab.active");
    if (!(i != null && i.offsetWidth)) {
      requestAnimationFrame(() => {
        var d;
        return ((d = we.querySelector(".hcTrayTabs .tab.active")) == null ? void 0 : d.offsetWidth) && Ls(t, e);
      });
      return;
    }
    n.style.transition = "none", t && e ? Pi(n, e.left, e.width, i.offsetLeft, i.offsetWidth) : (n.style.left = i.offsetLeft + "px", n.style.width = i.offsetWidth + "px");
  }
  const pn = (t) => '<button class="hcInfoBtn" type="button" data-info="' + t + '" aria-expanded="false" aria-label="About ' + q(gc[t][0]) + '">' + ip + "</button>", xa = (t, e, a) => '<button class="switch' + (t ? " on" : "") + '" type="button" role="switch" aria-checked="' + t + '" aria-label="' + q(e) + '" ' + a + "></button>", Ds = (t) => '<button class="tfTrayBtn hcHeGrip" type="button" data-he-grip aria-label="Move ' + q(t) + '. Use the up and down arrows">' + Sr + "</button>", bc = () => {
    var t;
    return ((t = mt.home) == null ? void 0 : t.sumsWidth) === "fit";
  }, pi = () => {
    var t;
    return ((t = mt.home) == null ? void 0 : t.favsAs) === "strip";
  }, fr = (t, e, a, n) => '<div class="hcHeLine hcHeChoiceLine"><span class="activityRowName">' + t + '</span><div class="themeChoice hcHeChoice" role="group" aria-label="' + q(t) + '">' + n.map(([i, d]) => '<button class="wxLayoutBtn" type="button" ' + e + '="' + i + '" aria-pressed="' + (a === i) + '">' + d + "</button>").join("") + "</div></div>", wc = () => on(!0).filter((t) => Mr[t.key]).map((t) => t.key);
  function En() {
    var h, k, M, x, C, T;
    if (!mo) return;
    const t = $(), e = (D) => '<li class="hcHeRow" data-he-id="' + q(D) + '">' + Ds(kt(D)) + '<span class="tfIcon"' + ue(D, da(D)) + "></span>" + As(D, Ct.get(D) || Ee(D)) + '<button class="tfTrayBtn" type="button" data-he-remove="' + q(D) + '" aria-label="Take ' + q(kt(D)) + ' off Favourites">' + _l + "</button></li>", a = (D) => {
      const R = Mr[D];
      return '<li class="hcHeRow hcHeSum" data-he-id="' + q(D) + '"' + (R.colour && vn(R.colour) ? ' style="' + vn(R.colour).slice(1) + '"' : "") + ">" + Ds(R.name) + '<span class="tfIcon"' + ue("", R.icon, R.name) + '></span><span class="activityRowName">' + q(R.name) + "</span>" + xa(Ke(D), R.name, 'data-he-sum="' + q(D) + '"') + "</li>";
    }, n = ((h = we.querySelector("[data-he-search]")) == null ? void 0 : h.value) || "", i = [["page", "Page"], ["favs", "Favourites"], ["sums", "Summaries"], ["areas", "Areas"]], d = new Set(((k = mt.home) == null ? void 0 : k.areasOff) || []), l = (D) => '<li class="hcHeRow" data-he-id="' + q(D.id) + '">' + Ds(D.name) + '<span class="tfIcon"><span class="tfAreaGlyph"' + ue("area:" + D.id, D.icon || "mdi:texture-box", D.name) + '></span></span><span class="activityRowName">' + q(D.name) + "</span>" + xa(!d.has(D.id), "Show " + D.name + " on Home", 'data-he-area="' + q(D.id) + '"') + "</li>", f = {
      page: '<div class="hcHeLine"><span class="activityRowName">Welcome message</span>' + pn("welcome") + xa(is(), "Welcome message", "data-he-welcome") + "</div>" + // the weather card and Energy today, where the house has them
      (Ot() ? '<div class="hcHeLine"><span class="activityRowName">Weather</span>' + pn("weather") + xa(!!((M = mt.home) != null && M.weather), "Weather", 'data-he-card="weather"') + "</div>" : "") + (Ba != null && Ba.length ? '<div class="hcHeLine"><span class="activityRowName">Energy today</span>' + pn("energy") + xa(!!((x = mt.home) != null && x.energy), "Energy today", 'data-he-card="energy"') + "</div>" : "") + fr("Cards", "data-he-cards-as", nc(), [["stacked", "Stacked"], ["rows", "Rows"]]) + '<hr class="hcHeRule"><div class="hcHeLine"><span class="activityRowName">Group by floor</span>' + xa(po("byFloor"), "Group by floor", 'data-he-flag="byFloor"') + "</div>" + fr("Layout", "data-he-area-layout", fs(), [["rows", "Rows"], ["columns", "Columns"], ["bento", "Bento"]]) + (fs() === "bento" ? '<div class="hcHeLine"><span class="activityRowName">Floors as boxes</span>' + xa(po("bentoBoxes"), "Floors as boxes", 'data-he-flag="bentoBoxes"') + '</div><div class="hcHeLine"><span class="activityRowName">Mixed sizes</span>' + xa(po("bentoMixed"), "Mixed sizes", 'data-he-flag="bentoMixed"') + "</div>" : "") + fr("Area cards", "data-he-area-size", oc(), [["s", "Small"], ["m", "Medium"], ["l", "Large"]]),
      favs: '<div class="hcHeLine"><span class="activityRowName">Show favourites</span>' + xa(((C = mt.home) == null ? void 0 : C.favs) !== !1, "Show favourites", 'data-he-card="favs"') + '</div><hr class="hcHeRule"><div class="hcHeLabel"><span class="activityRowName">Favourite entities</span>' + pn("favs") + "</div>" + fr("Show as", "data-he-favs-as", pi() ? "strip" : "card", [["card", "Card"], ["strip", "Strip"]]) + (pi() ? "" : '<div class="hcHeLine"><span class="activityRowName">Title</span>' + xa(po("favsTitle"), "Title", 'data-he-flag="favsTitle"') + "</div>") + '<ul class="tfTrayList hcHeList" data-he-list="favs">' + (t.map(e).join("") || '<li class="tfTrayNote">No favourites yet.</li>') + '</ul><button class="pill tfTrayAdd hcAddBtn" type="button" data-he-add aria-expanded="' + Ha + '">' + Li + '<span>Add favourite</span></button><div class="tfTrayPick" data-he-pick' + (Ha ? "" : " hidden") + '><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-he-search value="' + q(n) + '"><ul class="tfTrayList">' + (Ha ? Cs(n, (D) => hc.test(D), new Set(t), "data-he-pick-id") : "") + '</ul></div><hr class="hcHeRule"><div class="hcHeLine"><span class="activityRowName">Suggested entities</span>' + pn("suggest") + xa(qt(), "Suggested entities", "data-he-suggest") + "</div>",
      sums: '<div class="hcHeLine"><span class="activityRowName">Show summaries</span>' + pn("sums") + xa(((T = mt.home) == null ? void 0 : T.sums) !== !1, "Show summaries", 'data-he-card="sums"') + "</div>" + fr("Width", "data-he-sums-width", bc() ? "fit" : "match", [["match", "Match the cards"], ["fit", "Fit the summaries"]]) + '<hr class="hcHeRule"><ul class="tfTrayList hcHeList" data-he-list="sums">' + wc().map(a).join("") + "</ul>",
      areas: '<p class="tfTrayNote">Which areas show on Home. Drag to change their order, here and on the custom dashboard.</p><ul class="tfTrayList hcHeList" data-he-list="areas">' + ls().map(l).join("") + "</ul>"
    };
    we.querySelector("[data-he-body]").innerHTML = // the note about the areas page first (Matt, 12 Nov: "to the top of the rollover"), as Home Assistant's dialog has it
    '<p class="tfTrayNote hcHeAreasNote">You can rearrange your floors and areas in the order that best represents your house on the <button type="button" class="hcHeLink" data-path="/config/areas/dashboard">areas page</button>.</p><div class="tabs rubberTabs hcTrayTabs" role="tablist" aria-label="Edit Home page"><div class="rubberIndicator" aria-hidden="true"></div>' + i.map(([D, R]) => '<button class="tab segBtn' + (D === di ? " active" : "") + '" type="button" role="tab" aria-selected="' + (D === di) + '" data-he-tab="' + D + '">' + R + "</button>").join("") + '</div><div class="hcHeTabBody" role="tabpanel">' + f[di] + "</div>", Ls(!1), Va(we);
  }
  const Bn = (t) => {
    mt = { ...mt, ...t }, Oe(), Ce(), En();
  }, ka = (t) => Bn({ home: { ...mt.home || {}, ...t } });
  function Es(t) {
    ur(), mo = t, Ha = !1, we.classList.toggle("open", t), we.toggleAttribute("inert", !t), g.classList.toggle("hcHomeEditing", t), w && P && Re();
    const e = p("dashEditNav"), a = we.querySelector(".tfTrayHead");
    e && t && (Ts = e.parentElement, a.appendChild(e)), e && !t && Ts && Ts.appendChild(e), e && (e.classList.toggle("active", t), e.setAttribute("aria-pressed", String(t)), e.setAttribute("aria-label", t ? "Done editing Home" : "Edit Home page"), e.title = t ? "Done" : "Edit", e.innerHTML = t ? lp : Di), t ? (_s = JSON.stringify(mt), En()) : _s && JSON.stringify(mt) !== _s && ya("Changes saved");
  }
  we.innerHTML = '<div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit Home page</div></div><div class="hcHeBody" data-he-body></div></div>', g.appendChild(we);
  let go = null;
  const Oa = Object.assign(document.createElement("div"), { className: "card hcInfoPop", hidden: !0 });
  Oa.setAttribute("role", "dialog"), g.appendChild(Oa);
  function ur() {
    go && (go.setAttribute("aria-expanded", "false"), go = null, Oa.hidden = !0);
  }
  function vc(t) {
    const e = go;
    if (ur(), e === t) return;
    const [a, n] = gc[t.dataset.info];
    Oa.setAttribute("aria-label", a), Oa.innerHTML = '<div class="hcInfoTitle">' + q(a) + '</div><div class="hcInfoText">' + n + '</div><a class="hcInfoMore" href="' + Vf + '" target="_blank" rel="noopener">Learn more</a>', Oa.hidden = !1, go = t, t.setAttribute("aria-expanded", "true");
    const i = t.getBoundingClientRect(), d = Oa.offsetWidth, l = Oa.offsetHeight;
    Oa.style.left = Math.max(8, Math.min(innerWidth - d - 8, i.left + i.width / 2 - d / 2)) + "px", Oa.style.top = (i.bottom + 8 + l > innerHeight - 8 ? Math.max(8, i.top - 8 - l) : i.bottom + 8) + "px";
  }
  o.addEventListener("pointerdown", (t) => {
    go && !t.composedPath().some((e) => e === Oa || e === go) && ur();
  }, !0), o.addEventListener("keydown", (t) => {
    var e;
    if (t.key === "Escape") {
      if (go) {
        t.stopPropagation();
        const a = go;
        ur(), a.focus();
        return;
      }
      if (Ha) {
        t.stopPropagation(), Ha = !1, En();
        return;
      }
      mo && (t.stopPropagation(), Es(!1), (e = p("dashEditNav")) == null || e.focus());
    }
  }, !0);
  const zf = (t) => t.dataset.heList === "favs" ? $() : t.dataset.heList === "areas" ? ls().map((e) => e.id) : wc(), yc = (t, e) => t.dataset.heList === "favs" ? Bn({ favourites: e }) : t.dataset.heList === "areas" ? (Bn({ areaOrder: e }), Re()) : ka({ sumOrder: e });
  we.addEventListener("keydown", (t) => {
    var f;
    const e = t.target.closest("[data-he-grip]");
    if (!e || !["ArrowUp", "ArrowDown"].includes(t.key)) return;
    t.preventDefault();
    const a = e.closest("[data-he-id]"), n = a.parentElement, i = zf(n), d = i.indexOf(a.dataset.heId), l = d + (t.key === "ArrowUp" ? -1 : 1);
    l < 0 || l >= i.length || (i.splice(l, 0, i.splice(d, 1)[0]), yc(n, i), (f = we.querySelector('[data-he-list="' + n.dataset.heList + '"] [data-he-id="' + CSS.escape(a.dataset.heId) + '"] [data-he-grip]')) == null || f.focus());
  }), we.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-he-grip]");
    if (!e || t.button !== 0) return;
    const a = e.closest("[data-he-list]"), n = a.dataset.heList;
    Hs(t, e.closest("[data-he-id]"), "heId", (i) => yc(a, i), (i) => we.querySelector('[data-he-list="' + n + '"] [data-he-id="' + CSS.escape(i) + '"]'));
  }), we.addEventListener("input", (t) => {
    if (t.target.matches("[data-he-search]")) {
      const e = t.target.selectionStart;
      En();
      const a = we.querySelector("[data-he-search]");
      a.focus(), a.setSelectionRange(e, e);
    }
  }), we.addEventListener("click", (t) => {
    var R, G, B;
    const e = t.target, a = e.closest("[data-info]");
    if (a) {
      vc(a);
      return;
    }
    const n = e.closest("[data-he-tab]");
    if (n) {
      const Y = we.querySelector(".hcTrayTabs .rubberIndicator"), L = { left: Y.offsetLeft, width: Y.offsetWidth };
      di = n.dataset.heTab, Ha = !1, ur(), En(), Ls(!0, L), we.querySelector(".tfTrayInner").scrollTop = 0;
      return;
    }
    if (e.closest("[data-he-welcome]")) {
      ka({ welcome: !is() });
      return;
    }
    const i = e.closest("[data-he-card]");
    if (i) {
      const Y = i.dataset.heCard, L = ["sums", "favs"].includes(Y) ? ((R = mt.home) == null ? void 0 : R[Y]) !== !1 : !!((G = mt.home) != null && G[Y]);
      ka({ [Y]: !L });
      return;
    }
    const d = e.closest("[data-he-favs-as]");
    if (d) {
      ka({ favsAs: d.dataset.heFavsAs });
      return;
    }
    const l = e.closest("[data-he-sums-width]");
    if (l) {
      ka({ sumsWidth: l.dataset.heSumsWidth });
      return;
    }
    const f = e.closest("[data-he-area-size]");
    if (f) {
      ka({ areaSize: f.dataset.heAreaSize });
      return;
    }
    const h = e.closest("[data-he-area-layout]");
    if (h) {
      ka({ areaLayout: h.dataset.heAreaLayout });
      return;
    }
    const k = e.closest("[data-he-cards-as]");
    if (k) {
      ka({ cardsAs: k.dataset.heCardsAs });
      return;
    }
    const M = e.closest("[data-he-flag]");
    if (M) {
      const Y = M.dataset.heFlag;
      ka({ [Y]: !po(Y) }), Y === "favsTitle" && Na();
      return;
    }
    if (e.closest("[data-he-suggest]")) {
      Bn({ suggest: !qt() });
      return;
    }
    const x = e.closest("[data-he-area]");
    if (x) {
      const Y = new Set(((B = mt.home) == null ? void 0 : B.areasOff) || []), L = x.dataset.heArea;
      Y.has(L) ? Y.delete(L) : Y.add(L), ka({ areasOff: [...Y] });
      return;
    }
    const C = e.closest("[data-he-sum]");
    if (C) {
      const Y = C.dataset.heSum, L = !Ke(Y), bt = mt.home || {};
      ka(ep.includes(Y) ? { shownSums: L ? [...bt.shownSums || [], Y] : (bt.shownSums || []).filter((Wt) => Wt !== Y) } : { hiddenSums: L ? (bt.hiddenSums || []).filter((Wt) => Wt !== Y) : [...bt.hiddenSums || [], Y] });
      return;
    }
    const T = e.closest("[data-he-remove]");
    if (T) {
      Bn({ favourites: $().filter((Y) => Y !== T.dataset.heRemove) });
      return;
    }
    if (e.closest("[data-he-add]")) {
      Ha = !Ha, En(), Ha && we.querySelector("[data-he-search]").focus({ preventScroll: !0 });
      return;
    }
    const D = e.closest("[data-he-pick-id]");
    D && (Ha = !1, we.querySelector("[data-he-search]").value = "", Bn({ favourites: [...$(), D.dataset.hePickId] }));
  });
  function ve() {
    var M, x, C;
    const t = na && g.classList.contains("tfBoard");
    if (Gt.classList.toggle("open", t), Gt.classList.toggle("tucked", t && Za), Gt.toggleAttribute("inert", !t), t || (ho = !1), Cc(), !t) return;
    const e = Gt.querySelector("[data-tray-tuck]");
    e.innerHTML = Za ? Ud : sp, e.setAttribute("aria-expanded", String(!Za)), e.setAttribute("aria-label", Za ? "Show the edit tray" : "Tuck the edit tray away");
    const a = ae().hidden.filter((T) => !co.includes(T) && cn().some((D) => D.key === T)), n = (T, D) => '<button class="tfTrayCard" type="button" data-tray-card="' + q(T) + '" aria-label="' + q(va(T)) + ": drag it onto the board, or press to " + D + '"><span class="tfTrayGrip" aria-hidden="true">' + Sr + "</span>" + q(va(T)) + "</button>", i = a.filter((T) => !Un.includes(T)), d = Un.filter((T) => a.includes(T));
    Pa("welcome", '<div class="hcHeLine"><span class="activityRowName">Welcome message</span>' + pn("welcome") + '<button class="switch' + (ae().welcome ? " on" : "") + '" type="button" role="switch" aria-checked="' + !!ae().welcome + '" aria-label="Welcome message" data-dash-welcome></button></div><div class="hcHeLine"><span class="activityRowName">Show summaries</span><button class="switch' + ((M = mt.dash) != null && M.sumsOff ? "" : " on") + '" type="button" role="switch" aria-checked="' + !((x = mt.dash) != null && x.sumsOff) + '" aria-label="Show summaries" data-dash-sums></button></div>'), requestAnimationFrame(() => mc(!1)), Pa("cards", '<div class="sectionLabel">Hidden and new cards</div>' + (i.length ? '<div class="tfTrayCards">' + i.map((T) => n(T, "put it back")).join("") + "</div>" : '<p class="tfTrayNote">Cards you hide, and new ones, wait here.</p>')), Pa("weather", '<div class="sectionLabel">Weather</div>' + (d.length ? `<p class="tfTrayNote">The Weather page's widgets. Drag one onto the board, or press to add it.</p><div class="tfTrayCards">` + d.map((T) => n(T, "add it")).join("") + "</div>" : '<p class="tfTrayNote">Every weather widget is on the board.</p>')), Pa("phone", '<div class="sectionLabel">Phone</div><p class="tfTrayNote">' + (ae().phone ? "Phones have an order of their own." : "Phones follow the board's order.") + '</p><button class="pill tfTrayAdd" type="button" data-phone-toggle aria-pressed="' + ho + '">' + (ho ? "Hide the phone" : "Show the phone") + "</button>");
    const l = new Set(mt.favHidden || []), f = $(), h = [...f, ...[...l].filter((T) => !f.includes(T) && y[T])];
    Pa("favs", h.map((T) => jf(T, l.has(T), f.includes(T))).join("") || '<li class="tfTrayNote">No favourites yet.</li>'), Gt.querySelector('[data-pick="tiles"]').hidden = !uo, Gt.querySelector("[data-tile-add]").setAttribute("aria-expanded", String(uo)), uo && Pa("tilepick", Cs(Gt.querySelector("[data-tile-search]").value, (T) => Ar.includes(T.split(".")[0]), new Set(ni()), "data-tile-pick")), Gt.querySelector('[data-tray="roompick"]').hidden = !pr, Gt.querySelector("[data-room-add]").setAttribute("aria-expanded", String(pr));
    const k = new Set(((C = mt.dash) == null ? void 0 : C.areasOff) || []);
    if (Pa("areas", m(u).map((T) => '<li class="hcHeRow" data-area-id="' + q(T.id) + '"><button class="tfTrayBtn hcHeGrip" type="button" data-area-grip aria-label="Move ' + q(T.name) + '. Use the up and down arrows">' + Sr + '</button><span class="tfIcon"><span class="tfAreaGlyph"' + ue("area:" + T.id, T.icon || "mdi:texture-box", T.name) + '></span></span><span class="activityRowName">' + q(T.name) + '</span><button class="switch' + (k.has(T.id) ? "" : " on") + '" type="button" role="switch" aria-checked="' + !k.has(T.id) + '" aria-label="Show ' + q(T.name) + ' in the Areas card" data-area-on="' + q(T.id) + '"></button></li>').join("")), pr) {
      const T = new Set(ni());
      Pa("roompick", m(u).filter((D) => !T.has("room:" + D.id)).map((D) => '<li><button class="tfTrayPickItem" type="button" data-room-pick="' + q(D.id) + '"><span class="tfIcon"><span class="tfAreaGlyph"' + ue("area:" + D.id, D.icon || "mdi:texture-box", D.name) + '></span></span><span class="tfTrayName"><span class="activityRowName">' + q(D.name) + "</span></span></button></li>").join("") || '<li class="tfTrayNote">Every area is on the board.</li>');
    }
    Gt.querySelector('[data-pick="favs"]').hidden = !fo, Gt.querySelector("[data-fav-add]").setAttribute("aria-expanded", String(fo)), fo && Pa("pick", Cs(Gt.querySelector("[data-fav-search]").value, (T) => hc.test(T), new Set($()), "data-fav-pick")), Pa("favtitle", '<div><strong>Title</strong><div class="status">Favourites, at the top of the card.</div></div><button class="switch' + (ai() ? " on" : "") + '" type="button" role="switch" aria-checked="' + ai() + '" data-fav-title aria-label="Title"></button>'), Pa("suggest", '<div><strong>Show suggestions</strong><div class="status">Fills the card after your favourites.</div></div><button class="switch' + (qt() ? " on" : "") + '" type="button" role="switch" aria-checked="' + qt() + '" data-fav-suggest aria-label="Show suggestions"></button>');
  }
  const fn = (t) => {
    mt = { ...mt, ...t }, Oe(), Ce(), ve();
  };
  function xc(t, e) {
    const a = mt, n = new Set(mt.favHidden || []);
    e ? n.delete(t) : n.add(t), fn({ favHidden: [...n] }), e ? ya(kt(t) + " put back") : ya(kt(t) + " hidden", ci(a));
  }
  const Gf = (t) => {
    const e = mt;
    fn({ favourites: $().filter((a) => a !== t), favHidden: (mt.favHidden || []).filter((a) => a !== t) }), ya(kt(t) + " removed from favourites", ci(e));
  }, Uf = (t) => {
    fn({ favourites: [...$().filter((e) => e !== t), t], favHidden: (mt.favHidden || []).filter((e) => e !== t) }), ya(kt(t) + " added to favourites");
  };
  Gt.addEventListener("click", (t) => {
    var a, n, i;
    const e = t.target.closest("button");
    if (e) {
      if (e.hasAttribute("data-tray-tab")) {
        Ms = e.dataset.trayTab, mc(!0), Gt.querySelector(".tfTrayInner").scrollTop = 0;
        return;
      }
      if (e.hasAttribute("data-tray-done")) bs(!1);
      else if (e.hasAttribute("data-info")) vc(e);
      else if (e.hasAttribute("data-dash-sums"))
        ln({ ...cs(), hidden: cs().hidden.filter((d) => d !== "sums"), sumsOff: !((a = mt.dash) != null && a.sumsOff) }), Ce(), ve();
      else if (e.hasAttribute("data-dash-welcome")) {
        const d = ae();
        ln({ ...d, welcome: !d.welcome }), Ce(), ve();
      } else if (e.hasAttribute("data-tray-tuck"))
        Za = !Za, ve();
      else if (e.hasAttribute("data-phone-toggle"))
        ho = !ho, ve(), ho && ((n = sa.querySelector("[data-phone-key]")) == null || n.focus({ preventScroll: !0 }));
      else if (e.dataset.trayCard)
        t.detail === 0 && (ws(e.dataset.trayCard), ve());
      else if (e.dataset.favEye) xc(e.dataset.favEye, e.getAttribute("aria-pressed") !== "true");
      else if (e.dataset.favRemove) Gf(e.dataset.favRemove);
      else if (e.hasAttribute("data-fav-add"))
        fo = !fo, ve(), fo && Gt.querySelector("[data-fav-search]").focus({ preventScroll: !0 });
      else if (e.dataset.favPick) Uf(e.dataset.favPick);
      else if (e.hasAttribute("data-tile-add"))
        uo = !uo, ve(), uo && Gt.querySelector("[data-tile-search]").focus({ preventScroll: !0 });
      else if (e.dataset.tilePick) dc(e.dataset.tilePick);
      else if (e.hasAttribute("data-room-add"))
        pr = !pr, ve();
      else if (e.dataset.roomPick) dc("room:" + e.dataset.roomPick);
      else if (e.dataset.areaOn) {
        const d = new Set(((i = mt.dash) == null ? void 0 : i.areasOff) || []);
        d.has(e.dataset.areaOn) ? d.delete(e.dataset.areaOn) : d.add(e.dataset.areaOn), ln({ ...ae(), areasOff: [...d] }), Ce(), ve();
      } else e.hasAttribute("data-fav-suggest") ? fn({ suggest: !qt() }) : e.hasAttribute("data-fav-title") && (fn({ favsTitle: !ai() }), Na());
    }
  }), Gt.addEventListener("input", (t) => {
    t.target.matches("[data-fav-search],[data-tile-search]") && ve();
  });
  const kc = (t) => {
    mt = { ...mt, areaOrder: t }, Oe(), Ce(), ve();
  };
  Gt.addEventListener("keydown", (t) => {
    var l, f, h;
    const e = (f = (l = t.target).closest) == null ? void 0 : f.call(l, "[data-area-grip]");
    if (!e || !["ArrowUp", "ArrowDown"].includes(t.key)) return;
    t.preventDefault();
    const a = e.closest("[data-area-id]").dataset.areaId, n = m(u).map((k) => k.id), i = n.indexOf(a), d = i + (t.key === "ArrowUp" ? -1 : 1);
    d < 0 || d >= n.length || (n.splice(d, 0, n.splice(i, 1)[0]), kc(n), (h = Gt.querySelector('[data-area-id="' + CSS.escape(a) + '"] [data-area-grip]')) == null || h.focus());
  }), Gt.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-area-grip]");
    !e || t.button !== 0 || Hs(t, e.closest("[data-area-id]"), "areaId", kc, (a) => Gt.querySelector('[data-area-id="' + CSS.escape(a) + '"]'));
  });
  const bo = window.visualViewport, Bs = () => {
    if (!bo) return;
    const t = Math.max(0, Math.round(window.innerHeight - bo.height - bo.offsetTop));
    Gt.style.bottom = t > 40 ? t + "px" : "";
  };
  bo == null || bo.addEventListener("resize", Bs), bo == null || bo.addEventListener("scroll", Bs), Gt.addEventListener("focusin", (t) => {
    var e, a;
    (a = (e = t.target).matches) != null && a.call(e, "input") && setTimeout(() => {
      Bs(), t.target.scrollIntoView({ block: "center", behavior: "smooth" });
    }, 350);
  }), Gt.addEventListener("keydown", (t) => {
    var a, n;
    const e = !!((n = (a = t.target).closest) != null && n.call(a, '[data-pick="tiles"],[data-tile-add]'));
    t.key !== "Escape" || !(e ? uo : fo) || (t.stopPropagation(), e ? uo = !1 : fo = !1, ve(), Gt.querySelector(e ? "[data-tile-add]" : "[data-fav-add]").focus({ preventScroll: !0 }));
  });
  function Mc(t, e, a, n) {
    t.preventDefault();
    const i = t.clientX, d = t.clientY;
    let l = null, f = 0;
    const h = Object.assign(document.createElement("div"), { className: "tfFavDrop" }), k = (x) => {
      if (!l) {
        if (Math.hypot(x.clientX - i, x.clientY - d) < 4) return;
        l = e.cloneNode(!0), l.classList.add("tfTrayGhost"), l.style.width = e.offsetWidth + "px", g.appendChild(l);
      }
      l.style.transform = "translate(" + (x.clientX - 24) + "px," + (x.clientY - 24) + "px)";
      const C = !Za && x.clientX >= Gt.getBoundingClientRect().left;
      if (a === "card") {
        const R = P.getBoundingClientRect(), { w: G } = sn(P.clientWidth);
        Kt = !C && x.clientX >= R.left && x.clientX <= R.right && x.clientY >= R.top + qo ? { key: n, col: Math.max(0, Math.floor((x.clientX - R.left) / (G + se))), row: Math.max(0, Math.floor((x.clientY - R.top - qo) / Ra)), fromTray: !0 } : null, f || (f = requestAnimationFrame(() => {
          f = 0, Re();
        }));
        return;
      }
      const T = P.querySelector(".tfDash-favs"), D = T == null ? void 0 : T.getBoundingClientRect();
      if ($e = null, D && !C && x.clientX >= D.left && x.clientX <= D.right && x.clientY >= D.top && x.clientY <= D.bottom) {
        let R = 1 / 0;
        T.querySelectorAll('[data-k^="fav:"]').forEach((G, B) => {
          const Y = G.getBoundingClientRect(), L = Math.hypot(x.clientX - (Y.left + Y.width / 2), x.clientY - (Y.top + Y.height / 2));
          L < R && (R = L, $e = { i: B, r: Y, after: x.clientX > Y.left + Y.width / 2 });
        }), $e || ($e = { i: 0, r: null, after: !1 });
      }
      $e != null && $e.r ? (h.isConnected || g.appendChild(h), Object.assign(h.style, { left: ($e.after ? $e.r.right : $e.r.left) - 2 + "px", top: $e.r.top + 8 + "px", height: $e.r.height - 16 + "px" })) : h.remove();
    }, M = () => {
      if (window.removeEventListener("pointermove", k), window.removeEventListener("pointerup", M), window.removeEventListener("pointercancel", M), cancelAnimationFrame(f), l == null || l.remove(), h.remove(), a === "card") {
        if (!l) ws(n);
        else if (Kt != null && Kt.fromTray) {
          Re();
          const R = va(n) + lc(n), G = ae(), B = dn();
          Kt = null, Ln({ ...G, hidden: G.hidden.filter((Y) => Y !== n) }, B), ya(R);
        }
        Kt = null, Re(), Ce(), ve();
        return;
      }
      if (!$e) return;
      const x = new Set(mt.favHidden || []);
      x.delete(n);
      const C = $().filter((R) => R !== n), T = C.filter((R) => !x.has(R)), D = T[Math.min($e.i + ($e.after ? 1 : 0), T.length)];
      C.splice(D ? C.indexOf(D) : C.length, 0, n), $e = null, fn({ favourites: C, favHidden: [...x] }), ya(kt(n) + " put back");
    };
    window.addEventListener("pointermove", k), window.addEventListener("pointerup", M), window.addEventListener("pointercancel", M);
  }
  const Sc = {
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
  }, Ac = 136, Yf = 288, Zf = 0.8, Kf = { wx: "mdi:weather-partly-cloudy", areas: "mdi:home", favs: "mdi:star", act: "mdi:history", energy: "mdi:lightning-bolt", avg: "mdi:chart-line", aq: "mdi:air-filter", pollen: "mdi:flower-pollen", radar: "mdi:radar" }, sa = Object.assign(document.createElement("aside"), { className: "tfMiniPhone" });
  sa.setAttribute("aria-label", "Phone order"), sa.innerHTML = '<div class="tfPhoneHead"><div class="activityTitle">Phone</div><button class="tfTrayBtn" type="button" data-phone-close aria-label="Close the phone">' + _l + '</button></div><p class="tfTrayNote" data-phone="note"></p><div class="tfPhoneScreen"><div class="tfPhoneList" data-phone="list"></div></div>', g.appendChild(sa);
  let Rs = "";
  function Cc() {
    var f;
    const t = ho && na && g.classList.contains("tfBoard") && !Za;
    if (sa.classList.toggle("open", t), sa.toggleAttribute("inert", !t), !t) return;
    const e = ds().filter((h) => !ae().hidden.includes(h.key)), a = e.length, n = (h) => Math.round(h * Zf * 10) / 10 + "px", i = (h, k) => {
      const M = h.el.classList.contains("tfDac"), x = h.tile ? M ? Yf : Ac : Sc[h.key] || Ac;
      return '<button class="tfPhoneBlock' + (h.tile ? " tile" : "") + '" type="button" data-phone-key="' + q(h.key) + '" style="min-height:' + n(x) + '" aria-label="' + q(va(h.key) + ", " + (k + 1) + " of " + a + ". Drag, or use the arrow keys, to move it") + '"><span class="tfIcon"' + (h.tile ? ue(h.key, da(h.key)) : ue(h.key, Kf[h.key])) + '></span><span class="tfPhoneName">' + q(va(h.key)) + "</span></button>";
    }, d = '<div class="tfPhoneTitle">' + q(((f = P.querySelector(".tfDashTitle")) == null ? void 0 : f.textContent) || "") + '</div><div class="tfPhoneBlock fixed" style="min-height:' + n(Sc.sums) + '"><span class="tfPhoneName">' + q(va("sums")) + "</span></div>" + e.map(i).join("");
    if (sa.querySelector('[data-phone="note"]').innerHTML = ae().phone ? 'Phones use this order. <button class="tfLinkBtn" type="button" data-phone-reset>Follow the board</button>' : "Phones follow the board. Drag a card to give them an order of their own.", d === Rs) return;
    Rs = d;
    const l = sa.querySelector('[data-phone="list"]');
    l.innerHTML = d, Va(l);
  }
  function _c(t, e) {
    var a;
    ln({ ...ae(), phone: t }), ve(), e && ((a = sa.querySelector('[data-phone-key="' + CSS.escape(e) + '"]')) == null || a.focus({ preventScroll: !0 }));
  }
  const Ps = () => [...sa.querySelectorAll("[data-phone-key]")].map((t) => t.dataset.phoneKey);
  function Xf(t, e) {
    t.preventDefault();
    const a = e.parentElement, n = sa.querySelector(".tfPhoneScreen"), i = Ps().join();
    e.classList.add("moving");
    const d = (f) => {
      const h = n.getBoundingClientRect();
      f.clientY > h.bottom - 40 ? n.scrollTop += 12 : f.clientY < h.top + 40 && (n.scrollTop -= 12);
      const k = [...a.querySelectorAll("[data-phone-key]")].find((C) => {
        const T = C.getBoundingClientRect();
        return C !== e && f.clientX >= T.left && f.clientX <= T.right && f.clientY >= T.top && f.clientY <= T.bottom;
      });
      if (!k) return;
      const M = k.getBoundingClientRect(), x = k.classList.contains("tile") ? f.clientX < M.left + M.width / 2 : f.clientY < M.top + M.height / 2;
      a.insertBefore(e, x ? k : k.nextSibling);
    }, l = () => {
      window.removeEventListener("pointermove", d), window.removeEventListener("pointerup", l), window.removeEventListener("pointercancel", l), e.classList.remove("moving");
      const f = Ps();
      Rs = "", f.join() !== i ? _c(f) : Cc();
    };
    window.addEventListener("pointermove", d), window.addEventListener("pointerup", l), window.addEventListener("pointercancel", l);
  }
  sa.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-phone-key]");
    e && t.button <= 0 && Xf(t, e);
  }), sa.addEventListener("click", (t) => {
    var a;
    const e = t.target.closest("button");
    if (e != null && e.hasAttribute("data-phone-close"))
      ho = !1, ve(), (a = Gt.querySelector("[data-phone-toggle]")) == null || a.focus({ preventScroll: !0 });
    else if (e != null && e.hasAttribute("data-phone-reset")) {
      const { phone: n, ...i } = ae();
      ln(i), ve();
    }
  }), sa.addEventListener("keydown", (t) => {
    var l, f, h, k;
    if (t.key === "Escape") {
      t.stopPropagation(), ho = !1, ve(), (l = Gt.querySelector("[data-phone-toggle]")) == null || l.focus({ preventScroll: !0 });
      return;
    }
    const e = (k = (h = (f = t.target).closest) == null ? void 0 : h.call(f, "[data-phone-key]")) == null ? void 0 : k.dataset.phoneKey, a = { ArrowUp: -1, ArrowLeft: -1, ArrowDown: 1, ArrowRight: 1 }[t.key];
    if (!e || !a) return;
    t.preventDefault();
    const n = Ps(), i = n.indexOf(e), d = i + a;
    d < 0 || d >= n.length || ([n[i], n[d]] = [n[d], n[i]], _c(n, e));
  });
  function Hs(t, e, a, n, i) {
    t.preventDefault();
    const d = xe.drag, l = qe(), f = 1 + d.lift / 100, h = [...e.parentElement.children].filter((Et) => Et.dataset[a]), k = h.indexOf(e), M = h.map((Et) => Et.getBoundingClientRect()), x = h.length - 1, C = M[k].height + (h.length > 1 ? M[1].top - M[0].bottom : 0), T = (Et) => M[Et].top + M[Et].height / 2, D = t.clientY, R = M[0].top - M[k].top, G = M[x].top - M[k].top;
    let B = 0, Y = 0, L = 0, bt = 1, Wt = k, Dt = 0;
    e.classList.add("hcListDragging"), h.forEach((Et) => {
      Et !== e && (Et.style.transition = l ? "none" : "transform " + d.gap + "ms " + ke.land);
    });
    const Zt = () => {
      if (Dt = requestAnimationFrame(Zt), l) {
        Y = B, e.style.transform = "translateY(" + Y + "px)";
        return;
      }
      L = bl(L, B - Y, d.pull / 100, d.keep / 100), Y += L, bt += (f - bt) * 0.25;
      const Et = Math.min(Math.abs(L) / 48, 1);
      e.style.transform = "translateY(" + Y.toFixed(2) + "px) scale(" + (bt * (1 - 0.063 * Et)).toFixed(4) + "," + (bt * (1 + 0.1 * Et)).toFixed(4) + ")";
    };
    Dt = requestAnimationFrame(Zt);
    const le = (Et) => {
      B = Math.max(R, Math.min(G, Et.clientY - D));
      const Le = T(k) + B, Ne = h.filter((Je, Ve) => Ve !== k && T(Ve) < Le).length;
      Ne !== Wt && (Wt = Ne, h.forEach((Je, Ve) => {
        Je !== e && (Je.style.transform = k < Wt && Ve > k && Ve <= Wt ? "translateY(" + -C + "px)" : Wt < k && Ve >= Wt && Ve < k ? "translateY(" + C + "px)" : "");
      }));
    }, _t = () => {
      window.removeEventListener("pointermove", le), window.removeEventListener("pointerup", _t), window.removeEventListener("pointercancel", _t), cancelAnimationFrame(Dt);
      const Et = e.getBoundingClientRect(), Le = e.dataset[a];
      h.forEach((Ma) => {
        Ma.style.transition = "none", Ma.style.transform = "";
      }), e.classList.remove("hcListDragging");
      const Ne = h.map((Ma) => Ma.dataset[a]);
      Ne.splice(Wt, 0, Ne.splice(k, 1)[0]), n(Ne);
      const Je = i(Le) || e;
      if (requestAnimationFrame(() => h.forEach((Ma) => {
        Ma.style.transition = "";
      })), l) return;
      const Ve = Je.getBoundingClientRect(), Hn = Et.top + Et.height / 2 - (Ve.top + Ve.height / 2);
      Je.classList.add("hcListLanding"), Je.animate([{ transform: "translateY(" + Hn + "px) scale(" + bt + ")", filter: "drop-shadow(0 10px 30px rgba(0,0,0,.35))" }, { transform: "none", filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" }], { duration: d.slide, easing: ke.land }).finished.then(() => {
        Je.classList.remove("hcListLanding"), wl(Je);
      }, () => Je.classList.remove("hcListLanding"));
    };
    window.addEventListener("pointermove", le), window.addEventListener("pointerup", _t), window.addEventListener("pointercancel", _t);
  }
  function $f(t, e) {
    Hs(
      t,
      e,
      "trayFav",
      (a) => {
        const n = new Set($());
        Ss.favs = null, fn({ favourites: a.filter((i) => n.has(i)) });
      },
      (a) => Gt.querySelector('[data-tray-fav="' + CSS.escape(a) + '"]')
    );
  }
  Gt.addEventListener("pointerdown", (t) => {
    if (t.button > 0) return;
    const e = t.target.closest("[data-tray-card]"), a = t.target.closest(".tfTrayFav");
    e ? Mc(t, e, "card", e.dataset.trayCard) : a && t.target.closest(".tfTrayGrip") ? $f(t, a) : a != null && a.classList.contains("off") && !t.target.closest("button") && Mc(t, a, "fav", a.dataset.trayFav);
  });
  function Jf(t) {
    if (!na || t.button !== 0 || t.target.closest("[data-board-more],.tfBoardMenu,.tfFavHides")) return;
    const e = t.target.closest(".tfBoardItem"), a = e && cn().find((Zt) => Zt.el === e);
    if (!a || co.includes(a.key)) return;
    const n = rn.get(a.key), { w: i } = sn(P.clientWidth);
    if (!n) return;
    t.preventDefault(), Ya();
    const d = t.clientX, l = t.clientY;
    let f = !1, h = 0;
    const k = xe.drag, M = qe();
    let x = 0, C = 0, T = 0, D = 0, R = 0, G = 0, B = M || k.stick === 0, Y = 0;
    const L = (Zt, le, _t, Et) => {
      e.style.transform = "translate(" + T.toFixed(2) + "px," + D.toFixed(2) + "px) rotate(" + Zt.toFixed(2) + "deg) rotate(" + le + "rad) scale(" + _t.toFixed(4) + "," + Et.toFixed(4) + ") rotate(" + -le + "rad)";
    }, bt = () => {
      if (Y = requestAnimationFrame(bt), M) {
        T = x, D = C, L(0, 0, 1, 1);
        return;
      }
      if (!B) {
        const Le = Math.min(Math.hypot(x, C) / Math.max(1, k.stick), 1);
        T = x * 0.35, D = C * 0.35, L(0, Math.atan2(C, x), 1 + 0.155 * Le, 1 - 0.1 * Le);
        return;
      }
      R = bl(R, x - T, k.pull / 100, k.keep / 100), G = bl(G, C - D, k.pull / 100, k.keep / 100), T += R, D += G;
      const Zt = Math.hypot(R, G), le = Math.min(Zt / 48, 1), _t = Math.max(-5, Math.min(k.tilt, R * 0.32)), Et = 1 + k.lift / 100;
      L(_t, Math.atan2(G, R), Et * (1 + 0.1 * le), Et * (1 - 0.063 * le));
    }, Wt = (Zt) => {
      if (x = Zt.clientX - d, C = Zt.clientY - l, !f) {
        if (Math.hypot(x, C) < 4) return;
        f = !0, Kt = { key: a.key, col: n.col, row: n.row }, e.classList.add("tfDragging", "mvDrag"), Y = requestAnimationFrame(bt);
      }
      !B && Math.hypot(x, C) > k.stick && (B = !0, R = x * 0.085, G = C * 0.085), Kt.col = Math.round((n.x + x) / (i + se)), Kt.row = Math.round((n.y + C - qo) / Ra), h || (h = requestAnimationFrame(() => {
        h = 0, Re();
      }));
    }, Dt = () => {
      var Hn;
      if (window.removeEventListener("pointermove", Wt), window.removeEventListener("pointerup", Dt), window.removeEventListener("pointercancel", Dt), !f) return;
      const Zt = (On) => {
        On.preventDefault(), On.stopImmediatePropagation();
      };
      window.addEventListener("click", Zt, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", Zt, { capture: !0 }), 300), cancelAnimationFrame(h), cancelAnimationFrame(Y);
      const le = e.getBoundingClientRect(), _t = a.key;
      e.style.transition = "none", Re(), e.classList.remove("tfDragging", "mvDrag"), e.style.transform = "", Kt = null, Ln(ae(), dn()), Re(), Ce();
      const Et = (Hn = cn().find((On) => On.key === _t)) == null ? void 0 : Hn.el;
      if (requestAnimationFrame(() => {
        e.style.transition = "", Et && (Et.style.transition = "");
      }), !Et || M) return;
      Et.style.transition = "none";
      const Le = Et.getBoundingClientRect(), Ne = le.left + le.width / 2 - (Le.left + Le.width / 2), Je = le.top + le.height / 2 - (Le.top + Le.height / 2);
      Et.style.zIndex = "20", Et.animate([{ transform: "translate(" + Ne + "px," + Je + "px) scale(" + (1 + k.lift / 100) + ")" }, { transform: "none" }], { duration: k.slide, easing: ke.land }).finished.then(() => {
        Et.style.zIndex = "", wl(Et);
      }, () => {
        Et.style.zIndex = "";
      });
    };
    window.addEventListener("pointermove", Wt), window.addEventListener("pointerup", Dt), window.addEventListener("pointercancel", Dt);
  }
  function Tc(t = !1) {
    const e = P == null ? void 0 : P.querySelector(".tfDashGraph svg[data-graph]");
    if (!(e != null && e.clientWidth)) return;
    const a = e.dataset.graph + "@" + e.clientWidth + "x" + e.clientHeight + "@" + Math.floor(Date.now() / 3e5);
    if (e.dataset.drawn === a) return;
    const n = !e.dataset.drawn;
    e.dataset.drawn = a;
    const i = ql.find((d) => d.id === e.dataset.graph);
    i ? nf(e, i).then(() => {
      (t || n) && rf(e);
    }) : Kc(e.dataset.graph, e).then(() => {
      t && zl(e);
    });
  }
  function Lc() {
    var h, k, M;
    jt = Lr.model(c(), { madeUp: !S }), Mt(), y = jt.states, y[(h = mt.sources) == null ? void 0 : h.grid] && (jt.grid = mt.sources.grid), y[(k = mt.sources) == null ? void 0 : k.alarm] && (jt.security.alarms = [mt.sources.alarm]), xt.forEach((x, C) => {
      const T = y[C], D = (T == null ? void 0 : T.attributes) || {};
      if (!T || Date.now() - x.at > 2 * 60 * 1e3) {
        xt.delete(C);
        return;
      }
      x.pos != null && T.state !== "opening" && T.state !== "closing" && Math.abs(ca(C) - x.pos) < 1 && delete x.pos, x.tilt != null && Math.abs((D.current_tilt_position ?? -1) - x.tilt) < 1 && delete x.tilt, x.pos == null && x.tilt == null && xt.delete(C);
    });
    const t = [];
    let e = 0;
    const a = N();
    u = a.filter((x) => x.room).map((x) => x.room), u.some((x) => x.id === F) || (F = ((M = u[0]) == null ? void 0 : M.id) || null);
    const n = tt === "weather" ? { key: "weather", name: "Weather" } : tt && a.find((x) => x.key === tt);
    if (n || (tt = null), g.classList.toggle("tfAreaOpen", !!n), g.classList.toggle("tfWeatherOpen", (n == null ? void 0 : n.key) === "weather"), g.classList.toggle("tfDash", !n), Ct = /* @__PURE__ */ new Map(), jt.rooms.forEach((x) => [...x.actions, ...x.plugs, ...x.readings, ...x.openings, ...x.solar, ...x.plants.flatMap((C) => [C.id, ...C.readings])].forEach((C) => Ct.set(C, x.name))), !n) return df(t, on());
    if (t.push({ key: "areahead", html: Qf(n, ++e) }), n.key === "weather")
      return t.weather = ++e, t;
    const i = n.ids, d = n.room ? n.room.id : n.key, l = n.room;
    l != null && l.solar.length && t.push({ key: "energy:" + l.id, html: Po(l, ++e) }), l && (l.readings.length || l.power != null) && t.push({ key: "readings:" + l.id, html: jr(l, ++e) }), l == null || l.plants.forEach((x) => t.push({ key: "plant:" + x.id, html: Vr(x, ++e) }));
    const f = [...i, ...((l == null ? void 0 : l.plugs) || []).filter((x) => !i.includes(x))];
    return f.length && t.push({ key: "block:" + d, order: ++e, tiles: f.map((x) => ({ key: x, html: tr(x) })) }), t;
  }
  const Qf = (t, e) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + e + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + Ud + '</button><div class="settingsTitle">' + q(t.name) + "</div></div>";
  let Dc = 0, Ec = null;
  const Bc = (t) => t === "weather" ? ja.wx : t.startsWith("room:") && P.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || P.querySelector(".tfAreas");
  function Rc(t) {
    var e, a;
    tt || (Dc = mr().scrollTop, Ec = ((e = Bc(t)) == null ? void 0 : e.getBoundingClientRect().top) ?? null), tt = t, t.startsWith("room:") && (F = t.slice(5)), Na(), mr().scrollTop = 0, (a = P.querySelector("[data-area-back]")) == null || a.focus({ preventScroll: !0 });
  }
  let hr = null;
  function tu(t, e) {
    if (hr == null || hr(), e == null) return;
    const a = mr(), n = performance.now() + 1500, i = ["wheel", "touchstart", "pointerdown", "keydown"];
    let d = 0;
    const l = () => {
      cancelAnimationFrame(d), i.forEach((h) => window.removeEventListener(h, l, !0)), hr = null;
    }, f = () => {
      const h = t();
      if (h != null && h.isConnected) {
        const k = h.getBoundingClientRect().top - e;
        Math.abs(k) > 0.5 && (a.scrollTop += k);
      }
      performance.now() < n ? d = requestAnimationFrame(f) : l();
    };
    i.forEach((h) => window.addEventListener(h, l, { capture: !0, passive: !0 })), hr = l, f();
  }
  function Os() {
    var a;
    const t = tt;
    tt = null, Na(), mr().scrollTop = Dc, tu(() => Bc(t), Ec);
    const e = t.startsWith("room:") ? P.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || P.querySelector('.tfAreaPanel[data-area="' + CSS.escape(t.slice(5)) + '"]') : t === "weather" ? ja.wx.querySelector(".wbOpenPage") : P.querySelector('[data-k="sum:' + CSS.escape(t) + '"]');
    (a = (e == null ? void 0 : e.querySelector("[data-go]")) || e) == null || a.focus({ preventScroll: !0 });
  }
  const eu = (t) => t.wrap ? t.wrap(t.tiles.map((e) => e.html).join(""), t) : '<div class="tfBlock" data-tf data-k="' + q(t.key) + '" style="order:' + t.order + '"><div class="tfActions">' + t.tiles.map((e) => e.html).join("") + "</div></div>", Pc = (t) => t.map((e) => e.key + (e.tiles ? "(" + e.tiles.map((a) => a.key).join(",") + ")" : "")).join(";");
  function mr() {
    for (let t = g.parentElement || g.getRootNode().host; t; t = t.parentElement || t.getRootNode().host) {
      const e = getComputedStyle(t).overflowY;
      if ((e === "auto" || e === "scroll") && t.scrollHeight > t.clientHeight) return t;
    }
    return document.scrollingElement;
  }
  function Hc(t) {
    const e = mr(), a = (f) => {
      const h = f.getBoundingClientRect();
      return h.height && h.bottom > 0 && h.top < window.innerHeight;
    }, n = [...P.children, ...P.querySelectorAll(".tfDashTiles > *")].find((f) => !f.matches(".tfDashTiles") && a(f)), i = n == null ? void 0 : n.dataset.k, d = n == null ? void 0 : n.getBoundingClientRect().top;
    t();
    const l = n != null && n.isConnected ? n : i && P.querySelector('[data-k="' + CSS.escape(i) + '"]');
    l != null && l.isConnected && d != null && (e.scrollTop += l.getBoundingClientRect().top - d);
  }
  function Na() {
    if (!w || !P) return;
    const t = Lc(), e = (i) => {
      var d;
      return (((d = i.closest("[data-k]")) == null ? void 0 : d.dataset.k) || "") + "|" + i.dataset.iconFor + "|" + (i.dataset.iconName || "");
    }, a = /* @__PURE__ */ new Map();
    P.querySelectorAll("[data-tf] [data-icon-for]").forEach((i) => {
      i.firstElementChild && (a.get(e(i)) || a.set(e(i), []).get(e(i))).push(i.firstElementChild);
    }), P.querySelectorAll("[data-tf]").forEach((i) => i.remove()), ua.clear();
    const n = document.createElement("div");
    n.innerHTML = t.map((i) => i.tiles ? eu(i) : i.html).join(""), t.forEach((i) => i.tiles ? i.tiles.forEach((d) => ua.set(d.key, d.html)) : ua.set(i.key, i.html)), Tr = Pc(t), n.querySelectorAll("[data-icon-for]").forEach((i) => {
      var l;
      const d = !i.firstElementChild && ((l = a.get(e(i))) == null ? void 0 : l.shift());
      d && i.appendChild(d);
    }), P.append(...n.children), Er(t.weather), Br(), hs.disconnect(), Re(), Va(P), Vs(P), io(P), j(), Xc(), Pn(), qc(), requestAnimationFrame(nt);
  }
  const Oc = (t) => {
    var a;
    const e = o.activeElement && t.contains(o.activeElement) ? o.activeElement : null;
    return e && { label: e.getAttribute("aria-label"), act: (a = e.dataset) == null ? void 0 : a.act };
  }, Ns = (t, e) => {
    var a;
    e && ((a = e.label && t.querySelector('[aria-label="' + CSS.escape(e.label) + '"]') || e.act && t.querySelector('[data-act="' + CSS.escape(e.act) + '"]')) == null || a.focus({ preventScroll: !0 }));
  };
  function Is(t, e) {
    if (!t.querySelector(".tfDacPad"))
      return t.replaceWith(e), e;
    const a = t.matches(".tfDac") && t.querySelector(":scope > .tfDacPad"), n = e.querySelector(":scope > .tfDacPad");
    if (a)
      return (n == null ? void 0 : n.dataset.dac) !== a.dataset.dac ? (t.replaceWith(e), e) : (t.querySelector(":scope > .tfActionHead").replaceWith(e.querySelector(":scope > .tfActionHead")), t.classList.toggle("on", e.classList.contains("on")), ["data-light", "data-tone"].forEach((l) => e.hasAttribute(l) ? t.setAttribute(l, e.getAttribute(l)) : t.removeAttribute(l)), [...t.style].filter((l) => l.startsWith("--") && !l.startsWith("--tf-")).forEach((l) => t.style.removeProperty(l)), [...e.style].forEach((l) => t.style.setProperty(l, e.style.getPropertyValue(l))), t);
    const i = (l) => {
      var f;
      return ((f = l.dataset) == null ? void 0 : f.iconFor) !== void 0;
    };
    if (i(t) && i(e) && !e.children.length && t.dataset.iconFor === e.dataset.iconFor && t.dataset.iconName === e.dataset.iconName && t.firstElementChild)
      return [...t.attributes].forEach((l) => {
        e.hasAttribute(l.name) || t.removeAttribute(l.name);
      }), [...e.attributes].forEach((l) => {
        t.getAttribute(l.name) !== l.value && t.setAttribute(l.name, l.value);
      }), t;
    if (t.tagName !== e.tagName || t.children.length !== e.children.length)
      return t.replaceWith(e), e;
    [...t.attributes].forEach((l) => {
      e.hasAttribute(l.name) || t.removeAttribute(l.name);
    }), [...e.attributes].forEach((l) => t.setAttribute(l.name, l.value));
    const d = [...e.children];
    return [...t.children].forEach((l, f) => Is(l, d[f])), t;
  }
  function au(t, e) {
    const a = document.createElement("div");
    a.innerHTML = e;
    const n = Oc(t), i = Is(t, a.firstElementChild);
    Va(i), Vs(i), io(i), Ns(i, n);
  }
  function Ce() {
    !w || !P || Kt || Hc(ou);
  }
  function ou() {
    if (!P.querySelector("[data-tf]")) {
      Na();
      return;
    }
    const t = Lc();
    if (Pc(t) !== Tr) {
      Na();
      return;
    }
    const e = (a) => [...rt.keys()].some((n) => {
      const i = n.slice(n.indexOf("|") + 1);
      return a === i || a.endsWith(":" + i);
    });
    t.forEach((a) => (a.tiles || [a]).forEach((n) => {
      if (ua.get(n.key) === n.html || e(n.key)) return;
      const i = P.querySelector('[data-k="' + CSS.escape(n.key) + '"]');
      i && (ua.set(n.key, n.html), au(i, n.html), n.key.startsWith("energy:") && Xc());
    })), Pn(), qc(), $r(), j(), ge == null || ge.update(), be == null || be.forEach((a) => a.update()), g.classList.contains("tfDash") && oi(), requestAnimationFrame(nt);
  }
  const Rn = {
    light: (t) => [["Brightness", t.brightness != null ? Math.round(t.brightness / 2.55) + "%" : null], ["Colour temperature", t.color_temp_kelvin ? Number(t.color_temp_kelvin).toLocaleString() + " K" : null], ["Colour mode", t.color_mode && Jt(t.color_mode)]],
    climate: (t) => [["Current temperature", Ye(t.current_temperature) + " °C"], ["Target", Ye(t.temperature) + " °C"], ["Action", Jt(t.hvac_action)]],
    cover: (t) => [["Position", t.current_position != null ? t.current_position + "% open" : null], ["Tilt", t.current_tilt_position != null ? t.current_tilt_position + "% open" : null]],
    humidifier: (t) => [["Current humidity", t.current_humidity + "%"], ["Target", t.humidity + "%"], ["Mode", Jt(t.mode)]],
    media_player: (t) => [["Title", t.media_title], ["Artist", t.media_artist], ["Volume", t.volume_level != null ? Math.round(t.volume_level * 100) + "%" : null], ["Source", t.source]],
    vacuum: (t) => [["Battery", t.battery_level + "%"], ["Fan speed", Jt(t.fan_speed)], ["Rooms", (t.rooms || []).join(", ") || null]],
    lock: (t) => [["Changed by", t.changed_by]],
    alarm_control_panel: (t) => [["Changed by", t.changed_by]],
    valve: () => [],
    plant: (t) => [["Moisture", t.moisture + "%"], ["Light", Number(t.brightness).toLocaleString() + " lx"], ["Temperature", Ye(t.temperature) + " °C"], ["Fertility", t.conductivity + " µS/cm"], ["Problems", t.problem === "none" ? "None" : Jt(t.problem)]],
    weather: (t) => [["Temperature", t.temperature != null ? t.temperature + " " + (t.temperature_unit || "°C") : null], ["Humidity", t.humidity != null ? t.humidity + "%" : null], ["Wind", t.wind_speed != null ? t.wind_speed + " " + (t.wind_speed_unit || "km/h") : null], ["Pressure", t.pressure != null ? t.pressure + " " + (t.pressure_unit || "hPa") : null]]
  }, nu = (t) => Fa(t) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function ru(t, e = {}, a = !1) {
    return '<div class="tfMoreList">' + t.map((n) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + q(n.name) + '</div><div class="tfMoreTiles' + (a ? " single" : "") + '">' + n.ids.map((i) => Pt(i, e)).join("") + "</div></div>").join("") + "</div>";
  }
  const At = document.createElement("div");
  At.className = "tfMoreBackdrop", At.hidden = !0, g.appendChild(At);
  const Ia = document.createElement("div");
  Ia.className = "tfMoreBackdrop tfMoreUnder", Ia.hidden = !0, g.insertBefore(Ia, At);
  const Fs = (t, e) => {
    for (let a = t; a && a !== At; a = a.parentElement) {
      const n = getComputedStyle(a).overflowY;
      if ((n === "auto" || n === "scroll") && a.scrollHeight > a.clientHeight + 1 && (e < 0 ? a.scrollTop > 0 : a.scrollTop + a.clientHeight < a.scrollHeight - 1)) return !0;
    }
    return !1;
  };
  let gr = null;
  At.addEventListener("touchstart", (t) => {
    gr = { x: t.touches[0].clientX, y: t.touches[0].clientY };
  }, { passive: !0 }), At.addEventListener("touchmove", (t) => {
    var i, d;
    if (!gr || t.touches.length > 1 || (d = (i = t.target).closest) != null && d.call(i, "input,textarea,select")) return;
    const e = t.touches[0], a = gr.x - e.clientX, n = gr.y - e.clientY;
    gr = { x: e.clientX, y: e.clientY }, Math.abs(n) >= Math.abs(a) && !Fs(t.target, n) && t.preventDefault();
  }, { passive: !1 }), At.addEventListener("wheel", (t) => {
    var e, a;
    Math.abs(t.deltaX) > Math.abs(t.deltaY) && ((a = (e = t.target).closest) != null && a.call(e, "[data-more-pages]")) || Fs(t.target, t.deltaY) || t.preventDefault();
  }, { passive: !1 });
  const iu = () => window.innerWidth <= 620;
  let Pe = null;
  At.addEventListener("pointerdown", (t) => {
    const e = At.querySelector(".tfMorePair");
    !iu() || !e || !e.contains(t.target) || !t.isPrimary || At._closing || t.target.closest("input,textarea,select,.tfDacPad,[data-cover-art],.tfMoreSide") || (Pe = { x: t.clientX, y: t.clientY, t: performance.now(), dy: 0, v: 0, pair: e, from: t.target, grab: t.target.matches(".tfMore") || !!t.target.closest(".tfMoreHead") });
  }, !0), At.addEventListener("pointermove", (t) => {
    if (!Pe || !t.isPrimary) return;
    const e = t.clientY - Pe.y, a = performance.now();
    if (!Pe.on) {
      if (Math.abs(t.clientX - Pe.x) > 8 || e < -8 || !Pe.grab && Fs(Pe.from, -1)) {
        Pe = null;
        return;
      }
      if (e < 8) return;
      Pe.on = !0;
      try {
        At.setPointerCapture(t.pointerId);
      } catch {
      }
    }
    Pe.v = (e - Pe.dy) / Math.max(1, a - Pe.t), Pe.dy = e, Pe.t = a, Pe.pair.style.transform = "translateY(" + Math.max(0, e) + "px)";
  });
  const Nc = (t) => {
    if (!Pe || !t.isPrimary) return;
    const e = Pe;
    if (Pe = null, !e.on) return;
    const a = (k) => {
      k.preventDefault(), k.stopImmediatePropagation();
    };
    window.addEventListener("click", a, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", a, { capture: !0 }), 300);
    const n = t.type === "pointerup" && (e.dy > 120 || e.v > 0.5), i = "translateY(" + Math.max(0, e.dy) + "px)";
    if (e.pair.style.transform = "", !n || qe()) {
      n ? Ks() : e.pair.animate([{ transform: i }, { transform: "none" }], { duration: 320, easing: ke.spring });
      return;
    }
    const d = E;
    At._closing = !0, At.style.pointerEvents = "none", At.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220, easing: ke.exit, fill: "forwards" });
    const l = e.pair.animate([{ transform: i }, { transform: "translateY(calc(100% + 40px))" }], { duration: 220, easing: ke.exit, fill: "forwards" });
    let f = !1;
    const h = () => {
      f || (f = !0, At._closing = !1, At.style.pointerEvents = "", At.getAnimations().forEach((k) => k.cancel()), e.pair.getAnimations().forEach((k) => k.cancel()), E === d && Ks());
    };
    l.finished.then(h, h), setTimeout(h, 300);
  };
  At.addEventListener("pointerup", Nc), At.addEventListener("pointercancel", Nc);
  function qs() {
    const t = At.querySelector(".tfMorePair"), e = At.querySelector(".tfMore");
    t == null || t.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - e.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", qs, { passive: !0 }), w && zn();
  let Ka = [];
  const su = (t) => t === "favourites" || t.startsWith("summary:") || t.startsWith("group:");
  function lu(t) {
    const e = (h, k = "") => '<div class="tfMoreHead">' + (E != null && E.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + Gd + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + q(h) + "</div>" + k + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + Yd + "</button></div>", a = (h, k) => '<div class="tfMoreNow"><div class="tfMoreState">' + q(h) + "</div></div>", n = ru;
    if (t === "favourites") {
      const h = $(), k = new Set(h), M = [{ name: "Starred", ids: h }, { name: "Home", ids: jt.homeVacuums }, { name: "Security", ids: [...jt.security.alarms, ...jt.security.locks] }, ...jt.rooms.map((x) => ({ name: x.name, ids: [...x.actions, ...x.plugs] }))].map((x, C) => C ? { ...x, ids: x.ids.filter((T) => !k.has(T)) } : x).filter((x) => x.ids.length);
      return [e("Favourites"), a(h.length ? h.length + " starred" : "None starred"), n(M, { star: !0 }, !0)];
    }
    const i = (h, { name: k = "", alert: M = !1, plain: x = !1 } = {}) => {
      const C = x ? [] : h.filter((R) => Ar.includes(R.split(".")[0])), T = h.filter((R) => !C.includes(R)), D = (R) => R.startsWith("vacuum.") && Vt(R).battery_level != null ? Vt(R).battery_level + "%" : null;
      return '<div class="tfMoreGroup">' + (k ? '<div class="tfMoreGroupName">' + q(k) + "</div>" : "") + '<div class="tfMoreActions">' + C.map((R) => tr(R, !0)).join("") + T.map((R) => Pt(R, { plain: x, alert: M, say: x ? D(R) : null })).join("") + "</div></div>";
    };
    if (t.startsWith("summary:")) {
      const h = on().find((C) => C.key === t.slice(8));
      if (!h) return null;
      const k = h.key === "light" ? (h.groups || []).flatMap((C) => C.ids) : [], M = k.some((C) => {
        var T;
        return ((T = y[C]) == null ? void 0 : T.state) === "on";
      }), x = k.length ? '<button class="primary" type="button" data-acts="' + Bo(k.map((C) => ["light", M ? "turn_off" : "turn_on", C])) + '">' + (M ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [e(h.name), '<div class="tfMoreNowRow">' + a(h.value) + x + "</div>", ...(h.groups || []).map((C) => i(C.ids, { name: C.name === h.name ? "" : C.name, alert: C.alert, plain: h.plain }))];
    }
    if (t.startsWith("group:")) {
      const [, h, k] = t.split(":"), M = jt.rooms.find((T) => T.id === h), x = M && Oo(M).find((T) => T.key === k);
      if (!x) return null;
      const C = x.acts ? '<button class="primary" type="button" data-acts="' + Bo(x.acts) + '">' + (x.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [e(M.name + " " + x.label.toLowerCase()), '<div class="tfMoreNowRow">' + a(x.value) + C + "</div>", i(_n(M, k))];
    }
    const d = t.split(".")[0];
    y[t];
    const l = Ar.includes(d) ? fa(t) : Ic(t), f = (E == null ? void 0 : E.page) || 0;
    return [
      cu(t, l),
      '<div class="tfMorePages" data-more-pages><section class="tfMorePage" aria-label="Control">' + pu(t) + (d === "plant" ? gu(t).join("") : "") + l.sections.filter(Boolean).join("") + '</section><section class="tfMorePage" aria-label="Info">' + uu(t) + "</section></div>",
      // the pages' icons in place of their dots (Matt, 12 Nov): Control's sliders and Info's (i), a small segmented pair
      '<div class="tfMoreDots tfMorePageIcons" role="tablist" aria-label="Pages">' + [["Control", w0], ["Info", ip]].map(([h, k], M) => '<button type="button" role="tab" aria-selected="' + (M === f) + '" aria-label="' + h + '" title="' + h + '" data-more-page="' + M + '"' + (M === f ? "" : ' tabindex="-1"') + ">" + k + "</button>").join("") + "</div>"
    ];
  }
  function cu(t, e, a) {
    var l, f, h, k, M;
    const n = (l = jt.areaOf) == null ? void 0 : l.call(jt, t), i = n && (((f = jt.rooms.find((x) => x.id === n)) == null ? void 0 : f.name) || ((M = (k = (h = c()) == null ? void 0 : h.areas) == null ? void 0 : k[n]) == null ? void 0 : M.name)) || "", d = e.button ? ro(t, e) : '<div class="tfIcon"' + ue(t, e.icon) + "></div>";
    return '<div class="tfMoreHead tfMoreTileHead' + (e.on ? " on" : "") + '"' + (e.tone ? ' data-tone="' + e.tone + '"' : "") + yn(t) + ">" + (E != null && E.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + Gd + "</button>" : "") + d + '<div class="tfName"><span class="activityRowName" id="tfMoreTitle">' + q(kt(t)) + "</span>" + (i ? '<span class="activityRowMeta">' + q(i) + "</span>" : "") + '</div><button class="tfBack" type="button" data-more-close aria-label="Close">' + Yd + "</button></div>";
  }
  const du = ["lock", "alarm_control_panel", "switch", "input_boolean", "fan", "valve", "media_player", "automation", "script", "scene", "button"];
  function Ic(t) {
    var i;
    const e = t.split(".")[0], a = ((i = y[t]) == null ? void 0 : i.state) === "on", n = Cl.includes(e) ? { act: Qt(e, "toggle", t), label: "Turn " + kt(t) + (a ? " off" : " on") } : e === "scene" || e === "script" ? { act: Qt(e, "turn_on", t), label: "Run " + kt(t) } : null;
    return { sections: [], on: a, button: n, icon: da(t) };
  }
  function pu(t) {
    const e = t.split(".")[0];
    if (du.includes(e) || e === "light" && !Cn(t)) {
      const i = Ar.includes(e) ? fa(t) : Ic(t);
      return i != null && i.button ? '<div class="tfMoreSpace tfMoreSwitch' + (i.on ? " on" : "") + '"' + (i.tone ? ' data-tone="' + i.tone + '"' : "") + yn(t) + ">" + ro(t, i) + "</div>" : "";
    }
    if (e === "cover") return '<div class="tfMoreSpace tfMoreFill"><div data-cover-art="' + q(t) + '"></div></div>';
    if (e === "light" && Cn(t)) return '<div class="tfMoreSpace tfMoreFill"><div class="tfDacPad" data-dac="more:' + q(t) + '"></div></div>';
    const { big: a, lines: n } = fu(t);
    return '<div class="tfMoreSpace"><div class="tfMoreBig' + (Ga("pos", t) != null ? " live" : "") + '"><span class="tfMoreNum">' + q(a[0]) + "</span>" + (a[1] ? '<span class="tfMoreUnit">' + q(a[1]) + "</span>" : "") + '</div><div class="tfMoreFacts">' + n.map(([i, d]) => '<div class="tfMoreFact"><span>' + q(i) + "</span><span>" + q(d) + "</span></div>").join("") + "</div></div>";
  }
  function fu(t) {
    var M;
    const e = y[t], a = Vt(t), n = t.split(".")[0], i = (((M = Rn[n]) == null ? void 0 : M.call(Rn, a)) || []).filter(([, x]) => x != null && x !== ""), d = (x) => {
      const C = i.findIndex(([T]) => T === x);
      return C < 0 ? null : i.splice(C, 1)[0][1];
    }, l = (x) => {
      const C = String(x).match(/^(-?[\d.,]+)\s*(.*)$/);
      return C ? [C[1], C[2]] : [String(x), ""];
    }, f = () => [Jt(String(e.state).replace(/_/g, " ")), ""];
    let h;
    n === "light" ? (d("Brightness"), h = e.state === "on" && Ze(t) ? [String(eo(e)), "%"] : f()) : n === "climate" ? h = l(d("Current temperature") || Ye(a.current_temperature) + " °C") : n === "cover" ? (d("Position"), h = a.current_position != null ? [String(ca(t)), "%"] : f()) : n === "humidifier" ? h = l(d("Current humidity") || e.state) : n === "vacuum" ? h = l(d("Battery") || e.state) : n === "plant" ? h = l(d("Moisture") || e.state) : ["media_player", "lock", "alarm_control_panel", "valve"].includes(n) ? h = f() : h = l(e.state + (a.unit_of_measurement ? " " + a.unit_of_measurement : ""));
    const k = i.length ? i.slice(0, 4) : [["State", Ee(t)]];
    return { big: h, lines: k };
  }
  function uu(t) {
    var k, M, x, C, T, D, R;
    const e = y[t], a = c(), n = (k = a == null ? void 0 : a.entities) == null ? void 0 : k[t], i = n != null && n.device_id ? (M = a == null ? void 0 : a.devices) == null ? void 0 : M[n.device_id] : null, d = '<div class="tfMoreGraph"><div class="tfMoreGroupName">Last 24 hours</div><svg class="tfGraph tfDay" data-day="' + q(t) + '" role="img" aria-label="' + q(kt(t)) + ', last 24 hours"></svg></div>', l = (x = jt.areaOf) == null ? void 0 : x.call(jt, t), f = l && (((C = jt.rooms.find((G) => G.id === l)) == null ? void 0 : C.name) || ((D = (T = a == null ? void 0 : a.areas) == null ? void 0 : T[l]) == null ? void 0 : D.name)) || "", h = [
      ...((R = Rn[t.split(".")[0]]) == null ? void 0 : R.call(Rn, Vt(t))) || [],
      ["Changed", e.last_changed && Do(Date.parse(e.last_changed))],
      ["Area", f],
      ["Device", i && (i.name_by_user || i.name)],
      ["Integration", (n == null ? void 0 : n.platform) && Jt(n.platform.replace(/_/g, " "))],
      ["Entity", t]
    ].filter(([, G]) => G != null && G !== "");
    return d + '<div class="tfMoreRows">' + h.map(([G, B]) => '<div class="tfMoreRow"><span>' + q(G) + "</span><span>" + q(B) + "</span></div>").join("") + "</div>" + nu(t) + (i ? '<button class="tfDetailsBtn tfMoreLink" type="button" data-path="/config/devices/device/' + q(n.device_id) + '"><span>Device page</span>' + sp + "</button>" : "");
  }
  const hu = () => "";
  let Ws = "";
  function js(t) {
    var e;
    E && (E.details = t, Pn(), (e = At.querySelector(t ? "[data-details-close]" : "[data-details]")) == null || e.focus({ preventScroll: !0 }));
  }
  const fi = (t) => {
    const e = y[t], a = ca(t), n = Xo(t);
    return { kind: Al(e), name: kt(t), text: Ee(t), pos: a, target: Math.abs(n - a) > 0.5 ? n : null, moving: e.state === "opening" || e.state === "closing", tilt: Ir(t) ?? 100, canSet: Ae(t, Qd) };
  };
  function Vs(t) {
    t.querySelectorAll("[data-cover-art]").forEach((e) => {
      const a = e.dataset.coverArt, n = e.dataset.artKey || "more:" + a;
      let i = Ft.get(n);
      i || (i = a0({ onMove: (d) => br(a, d), onSet: (d) => {
        br(a, d), wr("pos", a);
      } }), i.coverId = a, Ft.set(n, i)), e.replaceWith(i.el), i.update(fi(a));
    });
  }
  const Fc = (t) => [...Ft.values()].filter((e) => e.coverId === t), zs = () => Ft.forEach((t) => {
    y[t.coverId] && t.update(fi(t.coverId));
  }), qc = () => {
    Ft.forEach((t, e) => {
      t.el.isConnected || (t.destroy(), Ft.delete(e));
    }), zs();
  };
  function Pn() {
    var d, l;
    if (!E || !(su(E.id) || y[E.id])) {
      At.hidden = !0;
      return;
    }
    if ([...rt.keys()].some((f) => f.endsWith("|" + E.id))) {
      zs();
      return;
    }
    const t = lu(E.id), e = At.querySelector(".tfMore");
    if (!t) {
      hi();
      return;
    }
    const a = Oc(At), n = hu(E.id), i = E.frame ? E.frame.wide : E.id.startsWith("summary:") || E.id.startsWith("group:");
    if (At.hidden || !e || t.length !== Ka.length || e.classList.contains("wide") !== i) {
      const f = Ys ? E.scroll || 0 : !At.hidden && e ? e.scrollTop : 0;
      if (At.innerHTML = '<div class="tfMorePair' + (At.hidden ? "" : " still") + '" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (i ? " wide" : "") + '"' + (E.frame ? ' style="height:' + E.frame.h + 'px"' : "") + ' tabindex="-1">' + t.join("") + "</section></div>", Ws = n, At.classList.toggle("wide", i), At.hidden = !1, qs(), Vs(At), io(At), Va(At), At.querySelectorAll("[data-day]").forEach((h) => Yc(h.dataset.day, h, E.at)), zc(At), f && (At.querySelector(".tfMore").scrollTop = f), Wc(), Ns(At, a), !At.contains(o.activeElement)) {
        const h = At.querySelector("[data-more-close]");
        (d = h != null && h.offsetParent ? h : At.querySelector(".tfMore")) == null || d.focus({ preventScroll: !0 });
      }
    } else {
      if (t.forEach((f, h) => {
        var x, C;
        if (f === Ka[h] || f.includes("data-cover-art") || e.children[h].contains((C = (x = o.activeElement) == null ? void 0 : x.matches) != null && C.call(x, "input,select") ? o.activeElement : null) || [...rt.keys()].some((T) => e.children[h].querySelector('[data-drag="' + CSS.escape(T) + '"]'))) return;
        const k = document.createElement("div");
        k.innerHTML = f;
        const M = Is(e.children[h], k.firstElementChild);
        Va(M), zc(M), io(M);
      }), n !== Ws) {
        const f = At.querySelector(".tfMoreSideBody");
        f && (f.innerHTML = n), Ws = n;
      }
      e.querySelectorAll("[data-day]").forEach((f) => {
        f.innerHTML || Yc(f.dataset.day, f, E.at);
      }), Wc(), At.contains(o.activeElement) || Ns(At, a);
    }
    (l = At.querySelector(".tfMorePair")) == null || l.classList.toggle("details", !!(E.details && n)), Ka = t, zs();
  }
  function Wc() {
    const t = At.querySelector("[data-more-pages]");
    !t || !E || (t.scrollTo({ left: (E.page || 0) * t.clientWidth, behavior: "instant" }), Us(), Gs(t));
  }
  function Gs(t) {
    const e = t.children[(E == null ? void 0 : E.page) || 0];
    e && (t.style.height = e.scrollHeight + "px");
  }
  function Us() {
    const t = (E == null ? void 0 : E.page) || 0;
    At.querySelectorAll("[data-more-page]").forEach((e) => {
      const a = Number(e.dataset.morePage) === t;
      e.setAttribute("aria-selected", String(a)), e.tabIndex = a ? 0 : -1;
    });
  }
  function jc(t, e) {
    var n, i;
    const a = At.querySelector("[data-more-pages]");
    !a || !E || (E.page = Math.max(0, Math.min(1, t)), a.scrollTo({ left: E.page * a.clientWidth, behavior: (n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" }), Us(), Gs(a), (i = At.querySelector('[data-more-page="' + E.page + '"]')) == null || i.focus({ preventScroll: !0 }));
  }
  let Vc = 0;
  At.addEventListener("scroll", (t) => {
    var a;
    const e = t.target;
    !((a = e.matches) != null && a.call(e, "[data-more-pages]")) || !E || (clearTimeout(Vc), Vc = setTimeout(() => {
      if (!E) return;
      const n = Math.round(e.scrollLeft / Math.max(1, e.clientWidth));
      n !== (E.page || 0) && (E.page = n, Us(), Gs(e));
    }, 80));
  }, !0), setInterval(() => {
    E && Pn();
  }, 15 * 1e3);
  function ui(t, e) {
    var i, d;
    const a = !!(E && e && At.contains(e)), n = a && At.querySelector(".tfMore");
    if (a && (E.scroll = n.scrollTop), a && !E.under) {
      const l = At.querySelector(".tfMorePair"), f = { more: E, parts: Ka, opener: e };
      l.classList.add("still"), l.style.transform = "", l.inert = !0, Ia.innerHTML = "", Ia.appendChild(l), Ia.classList.toggle("wide", At.classList.contains("wide")), Ia.hidden = !1, At.hidden = !0, At.innerHTML = "", E = { id: t, opener: e, back: null, frame: null, under: f, at: Number((i = e == null ? void 0 : e.dataset) == null ? void 0 : i.at) || null }, Zs();
      return;
    }
    E = { id: t, opener: a ? E.opener : e, back: a ? E : null, frame: a ? E.frame || { wide: n.classList.contains("wide"), h: n.offsetHeight } : null, under: a ? E.under : null, at: Number((d = e == null ? void 0 : e.dataset) == null ? void 0 : d.at) || null }, Zs();
  }
  let Ys = !1;
  function Zs() {
    Ka = [], Ys = !At.hidden, Ft.forEach((t, e) => {
      e !== E.id && At.contains(t.el) && (t.destroy(), Ft.delete(e));
    }), Pn(), Ys = !1;
  }
  function hi() {
    if (!E) return;
    const t = E;
    Wh(At, () => {
      E === t && Ks();
    });
  }
  function Ks() {
    var n, i, d, l, f, h, k, M;
    const t = E == null ? void 0 : E.opener, e = E == null ? void 0 : E.under;
    E = null, Ft.forEach((x, C) => {
      At.contains(x.el) && (x.destroy(), Ft.delete(C));
    }), We.forEach((x, C) => {
      C.startsWith("more:") && We.delete(C);
    }), At.hidden = !0, At.innerHTML = "";
    const a = { preventScroll: !0 };
    if (e) {
      const x = Ia.firstElementChild;
      E = e.more, Ka = e.parts, x && (x.inert = !1, At.appendChild(x)), At.classList.toggle("wide", Ia.classList.contains("wide")), Ia.hidden = !0, Ia.innerHTML = "", At.hidden = !1;
      const C = At.querySelector(".tfMore");
      C && (C.scrollTop = E.scroll || 0), Pn(), (i = (n = e.opener) != null && n.isConnected ? e.opener : At.querySelector("[data-more-close]")) == null || i.focus(a);
      return;
    }
    t != null && t.isConnected ? t.focus(a) : (d = t == null ? void 0 : t.dataset) != null && d.more ? (l = P.querySelector('[data-more="' + CSS.escape(t.dataset.more) + '"]')) == null || l.focus(a) : (f = t == null ? void 0 : t.dataset) != null && f.summary ? (h = P.querySelector('[data-summary="' + CSS.escape(t.dataset.summary) + '"]')) == null || h.focus(a) : (k = t == null ? void 0 : t.hasAttribute) != null && k.call(t, "data-favs-edit") && ((M = P.querySelector("[data-favs-edit]")) == null || M.focus(a));
  }
  const mu = { moisture: "moisture", light: "light", brightness: "light", temperature: "temperature", fertility: "fertility", conductivity: "fertility" };
  function gu(t) {
    const e = String(Vt(t).problem || ""), a = "sensor." + t.split(".")[1] + "_";
    return e === "none" ? [] : e.split(",").map((n) => n.trim().split(" ")).map(([n, i]) => {
      const d = mu[n], l = a + d;
      if (!d || !y[l] || !mn[d]) return "";
      const f = Vt(l).unit_of_measurement || "", [h, k] = mn[d], M = i === "low";
      return '<div class="tfMoreGroup tfPlantProblem"><div class="tfMoreGroupName">' + q(kt(l)) + '</div><svg class="tfGraph tfPlantGraph" data-plant-graph="' + q(l) + '" data-guide="' + (M ? h : k) + '" data-guide-word="' + q("Wants " + (M ? "" : "up to ") + (M ? h : k).toLocaleString() + (f === "%" ? "%" : f ? " " + f : "") + (M ? " or more" : "")) + '" role="img" aria-label="' + q(kt(l)) + ', last 24 hours"></svg></div>';
    }).filter(Boolean);
  }
  const zc = (t) => t.querySelectorAll("[data-plant-graph]").forEach((e) => Kc(e.dataset.plantGraph, e, { guide: Number(e.dataset.guide), guideWord: e.dataset.guideWord }).then(() => zl(e)));
  function Xs(t, e, a, n = {}) {
    const i = e.map((G) => G[1]).concat(n.guide != null ? [n.guide] : []), d = n.zero ? 0 : Math.min(...i), l = Math.max(...i), f = Math.max(120, t.clientWidth || 260), h = Math.max(60, t.clientHeight || 130), k = 8, M = h - 20, x = Date.now() - 24 * 3600 * 1e3, C = 24 * 3600 * 1e3, T = (G) => Math.max(0, Math.min(f, (G - x) / C * f)), D = (G) => l === d ? (k + M) / 2 : M - (G - d) / (l - d) * (M - k);
    let R = "M" + T(e[0][0]).toFixed(1) + " " + D(e[0][1]).toFixed(1);
    if (e.length > 2) R = Tp(e.map((G) => [T(G[0]), D(G[1])]));
    else for (let G = 1; G < e.length; G++) R += n.smooth ? "L" + T(e[G][0]).toFixed(1) + " " + D(e[G][1]).toFixed(1) : "H" + T(e[G][0]).toFixed(1) + "V" + D(e[G][1]).toFixed(1);
    t.setAttribute("viewBox", "0 0 " + f + " " + h), t.setAttribute("aria-label", a), t.innerHTML = Lp(f, k, M) + '<path d="' + R + "V" + M + "H" + T(e[0][0]).toFixed(1) + 'Z" fill="' + (n.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + R + '" fill="none" stroke="' + (n.colour || "var(--primary)") + '" stroke-width="' + xe.graphs.weight + '" stroke-linejoin="round" stroke-linecap="round"/><text x="0" y="' + (h - 4) + '">24 h ago</text><text x="' + f + '" y="' + (h - 4) + '" text-anchor="end">Now</text>' + (n.guide != null ? '<line class="tfGuide" x1="0" x2="' + f + '" y1="' + D(n.guide).toFixed(1) + '" y2="' + D(n.guide).toFixed(1) + '"/><text class="tfGuideWord" x="' + f + '" y="' + (D(n.guide) < 20 ? D(n.guide) + 14 : D(n.guide) - 5).toFixed(1) + '" text-anchor="end">' + q(n.guideWord || "") + "</text>" : "");
  }
  const Gc = { lock: ["unlocked", "open", "opening"], cover: ["open", "opening", "closing"], valve: ["open", "opening", "closing"], vacuum: ["cleaning", "returning"] }, bu = (t, e) => {
    const a = t.split(".")[0];
    return Gc[a] ? Gc[a].includes(e) : a === "alarm_control_panel" || a === "climate" || a === "media_player" ? !["off", "standby", "disarmed", "unavailable", "unknown"].includes(e) : e === "on";
  }, wu = (t) => {
    const e = t.split(".")[0], a = Vt(t).device_class;
    return e === "binary_sensor" ? { moisture: "Wet", smoke: "Smoke", gas: "Gas", carbon_monoxide: "Carbon monoxide", safety: "Unsafe" }[a] || (Ei.includes(a) ? "Open" : "On") : { lock: "Unlocked", cover: "Open", valve: "Open", vacuum: "Cleaning", alarm_control_panel: "Armed" }[e] || "On";
  }, Uc = /* @__PURE__ */ new Map();
  let vu = 0;
  async function yu(t) {
    var i;
    let e = Uc.get(t);
    if (!e || Date.now() - e.at > 60 * 1e3) {
      let d = [];
      if (Fa(t) && Number.isFinite(Number((i = y[t]) == null ? void 0 : i.state))) d = Zc(t).map(([l, f]) => [l, String(f)]);
      else try {
        const l = await _({ type: "history/history_during_period", start_time: new Date(Date.now() - 864e5).toISOString(), entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        d = ((l == null ? void 0 : l[t]) || []).map((f) => [f.lu != null ? f.lu * 1e3 : Date.parse(f.last_updated || f.last_changed), String(f.s ?? f.state)]).filter(([f]) => Number.isFinite(f));
      } catch {
      }
      d.length || (d = (Io || []).filter((l) => l.entity_id === t).map((l) => [l.when * 1e3, String(l.state)])), e = { at: Date.now(), pts: d }, Uc.set(t, e);
    }
    const a = y[t], n = e.pts.slice().sort((d, l) => d[0] - l[0]);
    return a && (!n.length || n[n.length - 1][1] !== a.state) && n.push([Date.parse(a.last_changed) || Date.now(), a.state]), n;
  }
  async function Yc(t, e, a) {
    const n = await yu(t);
    if (!e.isConnected) return;
    const i = n.map(([L, bt]) => [L, Number(bt)]);
    if (n.length > 1 && i.every(([, L]) => Number.isFinite(L))) {
      Xs(e, i, kt(t) + ", last 24 hours");
      return;
    }
    const d = Date.now(), l = d - 864e5, f = Math.max(200, e.clientWidth || 360), h = 62, k = (L) => Math.max(0, Math.min(f, (L - l) / 864e5 * f)), M = [];
    let x = null;
    n.forEach(([L, bt]) => {
      const Wt = bu(t, bt);
      Wt && x == null ? x = Math.max(L, l) : !Wt && x != null && (M.push([x, Math.max(L, l)]), x = null);
    }), x != null && M.push([x, d]);
    const C = es(t) ? "var(--danger)" : t.startsWith("light.") ? "#ffaa00" : "var(--primary)", T = wu(t), D = "tfDayClip" + ++vu, R = M.map(([L, bt]) => T + (bt >= d - 1e3 && L <= l + 1e3 ? " all day" : bt >= d - 1e3 ? " since " + Da(L) : L <= l + 1e3 ? " until " + Da(bt) : " " + Da(L) + "–" + Da(bt)));
    let G = "", B = -1 / 0;
    M.forEach(([L], bt) => {
      const Wt = R[bt].length * 5.4, Dt = Math.min(k(L), f - Wt);
      Dt < B + 8 || (G += '<text x="' + Dt.toFixed(1) + '" y="10">' + q(R[bt]) + "</text>", B = Dt + Wt);
    });
    let Y = '<text x="' + f + '" y="' + (h - 2) + '" text-anchor="end">Now</text>';
    [0, 6, 12, 18].forEach((L) => {
      let bt = new Date(d).setHours(L, 0, 0, 0);
      bt > d && (bt -= 864e5), k(bt) > 8 && k(bt) < f - 34 && (Y += '<text x="' + k(bt).toFixed(1) + '" y="' + (h - 2) + '" text-anchor="middle">' + String(L).padStart(2, "0") + "</text>");
    }), e.setAttribute("viewBox", "0 0 " + f + " " + h), e.setAttribute("aria-label", kt(t) + ", last 24 hours: " + (R.length ? R.join(", ") : "no changes")), e.innerHTML = '<clipPath id="' + D + '"><rect x="0" y="18" width="' + f + '" height="26" rx="8"/></clipPath>' + G + '<rect x="0" y="18" width="' + f + '" height="26" rx="8" fill="var(--text)" fill-opacity=".1"/><g clip-path="url(#' + D + ')">' + M.map(([L, bt]) => '<rect x="' + k(L).toFixed(1) + '" y="18" width="' + Math.max(2, k(bt) - k(L)).toFixed(1) + '" height="26" fill="' + C + '"/>').join("") + "</g>" + (a && a >= l ? '<line x1="' + k(a).toFixed(1) + '" x2="' + k(a).toFixed(1) + '" y1="13" y2="49" stroke="var(--text)" stroke-width="2" stroke-linecap="round"/>' : "") + Y;
  }
  function Zc(t) {
    var n;
    const e = Number((n = y[t]) == null ? void 0 : n.state), a = Date.now();
    if (Vt(t).state_class === "total_increasing") {
      const i = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), d = Math.max(1, a - i);
      return [...Array(49)].map((l, f) => i + d * f / 48).map((l) => [l, Math.round(e * Math.pow((l - i) / d, 1.3) * 100) / 100]);
    }
    if (Fa(t) && t.endsWith("_moisture")) return [...Array(48)].map((i, d) => [a - (48 - d) * 30 * 60 * 1e3, Math.round((e + 22 * Math.pow(1 - d / 48, 1.2)) * 10) / 10]);
    if (Fa(t) && t.endsWith("_light")) {
      const i = (l) => {
        const f = new Date(l).getHours() + new Date(l).getMinutes() / 60;
        return Math.max(0, Math.sin((f - 6) / 14 * Math.PI));
      }, d = (l) => 0.8 + 0.2 * i(l);
      return [...Array(48)].map((l, f) => a - (48 - f) * 30 * 60 * 1e3).map((l) => [l, Math.round(e * d(l) / d(a))]);
    }
    return [...Array(48)].map((i, d) => [a - (48 - d) * 30 * 60 * 1e3, Math.round(e * (0.96 + 0.04 * Math.sin(d / 6)) * 10) / 10]);
  }
  async function Kc(t, e, a = {}) {
    var D, R;
    let n = dt.get(t);
    if (t.endsWith("_solar_power")) n = { at: Date.now(), points: sd() };
    else if (Fa(t)) n = { at: Date.now(), points: Zc(t) };
    else if (!n || Date.now() - n.at > 5 * 60 * 1e3) {
      try {
        const G = new Date(Date.now() - 864e5).toISOString(), B = await _({ type: "history/history_during_period", start_time: G, entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), Y = ((B == null ? void 0 : B[t]) || []).map((L) => [L.lu != null ? L.lu * 1e3 : Date.parse(L.last_updated || L.last_changed), Number(L.s ?? L.state)]).filter(([L, bt]) => Number.isFinite(L) && Number.isFinite(bt));
        n = { at: Date.now(), points: Y };
      } catch {
        n = { at: Date.now(), points: [] };
      }
      dt.set(t, n);
    }
    const i = e || P.querySelector('[data-graph="' + CSS.escape(t) + '"]');
    if (!i) return;
    const d = y[t], l = ((D = d == null ? void 0 : d.attributes) == null ? void 0 : D.unit_of_measurement) || "", f = n.points.slice(), h = Number(d == null ? void 0 : d.state);
    if (Number.isFinite(h) && !t.endsWith("_solar_power") && f.push([Date.now(), h]), f.length < 2) {
      i.setAttribute("aria-label", kt(t) + ": no history for the last 24 hours"), i.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const k = f.map((G) => G[1]), M = Math.min(...k), x = Math.max(...k), C = (G) => G.toLocaleString(void 0, { maximumFractionDigits: Math.abs(G) >= 100 ? 0 : 1 }), T = ((R = d == null ? void 0 : d.attributes) == null ? void 0 : R.state_class) === "total_increasing";
    Xs(i, f, kt(t) + ", last 24 hours: " + (T ? "+" + C(k[k.length - 1] - k[0]) : M === x ? C(M) : C(M) + " to " + C(x)) + (l ? " " + l : ""), { smooth: t.endsWith("_solar_power"), zero: t.endsWith("_solar_power"), ...a });
  }
  function Xc() {
    const t = P == null ? void 0 : P.querySelector("[data-solar]");
    if (!t) return;
    const e = sd();
    Xs(t, e, "Solar, last 24 hours: up to " + Ye(Math.max(...e.map((a) => a[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function xu(t, e) {
    const a = e.entity_id, n = xt.get(a) || {}, i = { open_cover: 100, close_cover: 0, set_cover_position: e.position, toggle: ca(a) > 0 ? 0 : 100 }[t], d = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: e.tilt_position }[t];
    i != null && (n.pos = i), d != null && (n.tilt = d), t === "stop_cover" && (delete n.pos, delete n.tilt), t === "stop_cover_tilt" && delete n.tilt, n.at = Date.now(), xt.set(a, n);
  }
  function $c(t, e, a) {
    var i;
    const n = a == null ? void 0 : a.entity_id;
    return t !== "light" || typeof n != "string" || !oa[n] || !Ze(n) || a.brightness_pct != null || a.brightness != null ? [e, a] : e !== "turn_on" && !(e === "toggle" && ((i = y[n]) == null ? void 0 : i.state) !== "on") ? [e, a] : ["turn_on", { ...a, brightness_pct: oa[n] }];
  }
  function mi(t, e, a, n) {
    let i = { entity_id: a, ...n || {} };
    return [e, i] = $c(t, e, i), t === "cover" && xu(e, i), Wa[a] = (Wa[a] || 0) + 1, Xa.set(op, JSON.stringify(Wa)), Lr.call(t, e, i) ? Promise.resolve() : Promise.resolve(O(t, e, i));
  }
  function $s(t) {
    const [e, a, n, i] = t.split("|");
    mi(e, a, n, i ? JSON.parse(i) : null).catch(() => {
    });
  }
  function br(t, e) {
    rt.set("pos|" + t, e), ua.delete(t), Ka = Ka.map(() => ""), [P, At].forEach((n) => n.querySelectorAll('[data-blocks="' + CSS.escape(t) + '"]').forEach((i) => en(i, e)));
    const a = P.querySelector('.tfAction[data-k="' + CSS.escape(t) + '"] .tfName .activityRowMeta');
    if (a && (a.textContent = Math.round(e) + "%"), (E == null ? void 0 : E.id) === t) {
      const n = At.querySelector(".tfMoreState"), i = At.querySelector(".tfMoreSub");
      n && (n.textContent = Math.round(e) + "%", n.classList.add("live")), i && (i.textContent = "Currently " + ca(t) + "%");
    }
    Fc(t).forEach((n) => n.update(fi(t)));
  }
  const ku = (t, e) => {
    const a = t.shiftKey ? 10 : 1, n = { ArrowUp: e + a, ArrowRight: e + a, ArrowDown: e - a, ArrowLeft: e - a, PageUp: e + 25, PageDown: e - 25, Home: 0, End: 100 }[t.key];
    return n == null ? null : Math.max(0, Math.min(100, Math.round(n)));
  };
  function Mu(t, e) {
    var R;
    const a = t.dataset.blocks;
    (R = t.setPointerCapture) == null || R.call(t, e.pointerId);
    const n = (G) => {
      const B = t.getBoundingClientRect();
      return Math.max(0, Math.min(100, (G.clientX - B.left) / B.width * 100));
    }, i = n(e), d = e.clientX;
    let l = !1, f = Xo(a), h = i, k = 0;
    const M = () => {
      f = Math.abs(h - f) < 0.2 ? h : f + (h - f) * 0.14, br(a, f), k = requestAnimationFrame(M);
    }, x = () => {
      l || (l = !0, t.classList.add("fine"), k = requestAnimationFrame(M));
    }, C = setTimeout(x, 350), T = (G) => {
      h = n(G), Math.abs(G.clientX - d) > 6 && (clearTimeout(C), x());
    }, D = () => {
      clearTimeout(C), cancelAnimationFrame(k), t.removeEventListener("pointermove", T), t.removeEventListener("pointerup", D), t.removeEventListener("pointercancel", D), t.classList.remove("fine"), br(a, l ? Math.round(f) : (Math.min(3, Math.floor(i / 25)) + 1) * 25), wr("pos", a);
    };
    t.addEventListener("pointermove", T), t.addEventListener("pointerup", D), t.addEventListener("pointercancel", D);
  }
  function Jc(t) {
    var e;
    F = t.dataset.area, P.querySelectorAll(".tfAreaPanel").forEach((a) => {
      var i;
      const n = a === t;
      a.classList.toggle("active", n), a.setAttribute("aria-expanded", String(n)), (i = a.querySelector(".panelExpanded")) == null || i.toggleAttribute("inert", !n);
    }), ua.set("areas", A(((e = P.querySelector('[data-k="areas"]')) == null ? void 0 : e.style.order) || 1));
  }
  const Js = {
    bright: { value: (t, e) => Math.round(e * 100), text: (t, e) => e ? e + "%" : "Off", send: (t, e) => e > 0 ? ["light", "turn_on", { brightness_pct: e }] : ["light", "turn_off", {}] },
    ct: { value: (t, e) => {
      const [a, n] = xn(t);
      return Math.round(a + e * (n - a));
    }, text: (t, e) => e.toLocaleString() + "k", send: (t, e) => ["light", "turn_on", { color_temp_kelvin: e }] },
    hue: { value: (t, e) => Math.round(e * 360), text: () => "Colour", send: (t, e) => {
      var a;
      return ["light", "turn_on", { hs_color: [e, Math.max(60, ((a = Vt(t).hs_color) == null ? void 0 : a[1]) || 100)] }];
    } },
    pos: { value: (t, e) => Math.round(e * 100), text: (t, e) => Math.round(e) + "%", send: (t, e) => ["cover", "set_cover_position", { position: Math.round(e) }] },
    tilt: { value: (t, e) => Math.round(e * 100), text: (t, e) => "Tilt " + e + "%", send: (t, e) => ["cover", "set_cover_tilt_position", { tilt_position: e }] },
    vol: { value: (t, e) => Math.round(e * 100) / 100, text: (t, e) => Math.round(e * 100) + "%", send: (t, e) => ["media_player", "volume_set", { volume_level: e }] }
  };
  function gi(t, e, a, n) {
    var h;
    const i = Js[e].value(a, n);
    rt.set(e + "|" + a, i);
    const d = Math.round(n * 100) + "%", l = t.querySelector("i");
    if (e === "tilt") {
      l.style.width = "calc((100% - 8px) * " + n + ")";
      const [k, M] = t.querySelectorAll("span");
      k.classList.toggle("lit", n > 0.08), M.classList.toggle("lit", n > 0.92), ua.delete(a), Ka = Ka.map(() => ""), Fc(a).forEach((x) => x.update(fi(a)));
    } else if (l) l.style.width = d;
    else {
      let k = t.querySelector("b");
      k || (k = document.createElement("b"), t.appendChild(k)), k.style.left = d;
    }
    t.setAttribute("aria-valuenow", String(Math.round(n * 100)));
    const f = (h = t.closest(".tfAction") || t.closest(".tfMore")) == null ? void 0 : h.querySelector(".tfName .activityRowMeta, .tfMoreState");
    f && (f.textContent = Js[e].text(a, i));
  }
  function wr(t, e) {
    const a = rt.get(t + "|" + e), [n, i, d] = Js[t].send(e, a), l = () => setTimeout(() => {
      rt.delete(t + "|" + e), Ce();
    }, 1500);
    mi(n, i, e, d).then(l, l);
  }
  function Qc(t) {
    t.addEventListener("click", (e) => {
      var n;
      const a = e.target.closest("[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-fav-hide],[data-energy-pick],[data-more-page],[data-path],.tfAreaPanel");
      if (Xe && !e.target.closest(".tfBoardMenu,[data-board-more]") && Ya(), !(!a || !t.contains(a) || a.disabled))
        if (a.dataset.boardMore)
          (Xe == null ? void 0 : Xe.key) === a.dataset.boardMore ? Ya(!0) : Bf(a.dataset.boardMore, a);
        else if (a.dataset.boardAct) Rf(Xe.key, a.dataset.boardAct);
        else if (a.dataset.boardShow) ws(a.dataset.boardShow);
        else if (a.dataset.favHide) xc(a.dataset.favHide, !1);
        else if (a.dataset.energyPick) Wl(a.dataset.energyPick);
        else if (a.dataset.act) $s(a.dataset.act);
        else if (a.hasAttribute("data-details")) js(!(E != null && E.details));
        else if (a.hasAttribute("data-details-close")) js(!1);
        else if (a.dataset.summary) Ua(a.dataset.summary, a);
        else if (a.dataset.star) rr(a.dataset.star);
        else if (a.hasAttribute("data-more-back")) {
          const i = E.id;
          E = E.back, Zs(), (n = At.querySelector('.tfMore [data-more="' + CSS.escape(i) + '"]')) == null || n.focus({ preventScroll: !0 });
        } else a.hasAttribute("data-favs-edit") ? ui("favourites", a) : a.dataset.acts ? JSON.parse(a.dataset.acts).forEach(([i, d, l, f]) => mi(i, d, l, f).catch(() => {
        })) : a.dataset.more ? ui(a.dataset.more, a) : a.hasAttribute("data-more-close") ? hi() : a.dataset.morePage ? jc(Number(a.dataset.morePage)) : a.dataset.path ? Yt(a.dataset.path) : a.dataset.go ? Rc("room:" + a.dataset.go) : a.hasAttribute("data-area-back") ? Os() : a.classList.contains("tfAreaPanel") && !a.classList.contains("active") && Jc(a);
    }), t.addEventListener("keydown", (e) => {
      var n, i, d, l, f, h, k;
      const a = e.target;
      if ((n = a.dataset) != null && n.more && a.tagName !== "BUTTON" && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), ui(a.dataset.more, a)), (i = a.dataset) != null && i.energyPick && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), Wl(a.dataset.energyPick)), (d = a.classList) != null && d.contains("tfAreaPanel") && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), Jc(a)), (l = a.dataset) != null && l.summary && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), Ua(a.dataset.summary, a)), e.key === "Escape" && Xe && t === P) {
        e.preventDefault(), Ya(!0);
        return;
      }
      if (e.key === "Escape" && na && t === P) {
        e.preventDefault(), bs(!1), (f = p("dashEditNav")) == null || f.focus();
        return;
      }
      if (e.key === "Escape" && tt && t === P && (e.preventDefault(), Os()), (h = a.dataset) != null && h.blocks) {
        const M = a.dataset.blocks, x = ku(e, Math.round(Xo(M)));
        if (x == null) return;
        e.preventDefault(), br(M, x), clearTimeout(re.get(M)), re.set(M, setTimeout(() => wr("pos", M), 500));
        return;
      }
      if ((k = a.dataset) != null && k.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
        e.preventDefault();
        const [M, x] = a.dataset.drag.split("|"), C = Number(a.getAttribute("aria-valuenow")) / 100, T = e.key === "Home" ? 0 : e.key === "End" ? 1 : Math.max(0, Math.min(1, C + (e.key === "ArrowLeft" || e.key === "ArrowDown" ? -0.05 : 0.05)));
        gi(a, M, x, T), wr(M, x);
      }
    }), t.addEventListener("pointerdown", (e) => {
      var Wt;
      const a = e.target.closest("[data-blocks]");
      if (a && e.button === 0) {
        e.preventDefault(), Mu(a, e);
        return;
      }
      const n = e.target.closest("[data-drag]");
      if (!n || e.button > 0) return;
      const [i, d] = n.dataset.drag.split("|"), l = i === "bright" && !Ze(d), f = e.pointerType !== "mouse";
      if (l && !f) {
        $s(Qt("light", "toggle", d));
        return;
      }
      const h = i === "bright" && ((Wt = y[d]) == null ? void 0 : Wt.state) !== "on", k = i === "tilt" ? 4 : 0, M = () => n.getBoundingClientRect().width - k * 2, x = (Dt) => {
        const Zt = n.getBoundingClientRect();
        return Math.max(0, Math.min(1, (Dt.clientX - Zt.left - k) / M()));
      };
      let C = f ? "waiting" : h ? "pressed" : "dragging", T = 0;
      const D = e.clientX, R = e.clientY, G = (Dt, Zt) => Math.hypot(Dt.clientX - D, Dt.clientY - R) > Zt, B = () => {
        try {
          n.setPointerCapture(e.pointerId);
        } catch {
        }
      };
      f || (e.preventDefault(), B()), C === "dragging" && gi(n, i, d, x(e));
      const Y = () => {
        var Dt, Zt;
        C = "sliding", ft = n, n.classList.add("held"), B(), (Dt = navigator.userActivation) != null && Dt.hasBeenActive && ((Zt = navigator.vibrate) == null || Zt.call(navigator, 8)), T = h ? (oa[d] ?? 100) / 100 : Number(n.getAttribute("aria-valuenow")) / 100;
      }, L = (Dt) => {
        C === "waiting" && G(Dt, yt) ? !l && Math.abs(Dt.clientX - D) > Math.abs(Dt.clientY - R) ? Y() : C = "gone" : C === "pressed" && G(Dt, 4) && (C = "dragging"), C === "sliding" ? gi(n, i, d, Math.max(0, Math.min(1, T + (Dt.clientX - D) / M()))) : C === "dragging" && gi(n, i, d, x(Dt));
      }, bt = (Dt) => {
        ["pointermove", "pointerup", "pointercancel"].forEach((Zt, le) => n.removeEventListener(Zt, le ? bt : L)), n.classList.remove("held"), ft === n && (ft = null), C === "sliding" || C === "dragging" ? wr(i, d) : Dt.type === "pointerup" && l ? $s(Qt("light", "toggle", d)) : Dt.type === "pointerup" && h && (C === "waiting" || C === "pressed") && mi("light", "turn_on", d).catch(() => {
        });
      };
      n.addEventListener("pointermove", L), n.addEventListener("pointerup", bt), n.addEventListener("pointercancel", bt);
    }), t.addEventListener("touchmove", (e) => {
      ft && e.cancelable && e.preventDefault();
    }, { passive: !1 });
  }
  return P && w && (No(), Qc(P), Qc(At), At.addEventListener("click", (t) => {
    t.target === At && hi();
  }), (td = o.getElementById("homeNav")) == null || td.addEventListener("click", () => {
    tt && Os();
  }), (ed = o.querySelector(".bottomNav")) == null || ed.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + Di + "</button>"), (ad = p("dashEditNav")) == null || ad.addEventListener("click", () => S ? Es(!mo) : bs(!na)), P.addEventListener("pointerdown", Jf), P.addEventListener("pointerdown", Lf), P.addEventListener("click", (t) => {
    S && mo && t.target.closest(".tfBoardItem") && (t.preventDefault(), t.stopPropagation());
  }, !0), P.addEventListener("scroll", (t) => {
    var e;
    (e = t.target.classList) != null && e.contains("hcFadeList") && ic(t.target);
  }, !0), new ResizeObserver(() => {
    g.classList.contains("tfDash") && rs() !== os ? Ce() : oi();
  }).observe(P), window.addEventListener("resize", oi, { passive: !0 }), At.addEventListener("keydown", (t) => {
    var e, a;
    t.key === "Escape" ? (t.stopPropagation(), E != null && E.details ? js(!1) : hi()) : (t.key === "ArrowLeft" || t.key === "ArrowRight") && ((a = (e = t.target).closest) != null && a.call(e, ".tfMoreDots")) && (t.preventDefault(), jc(((E == null ? void 0 : E.page) || 0) + (t.key === "ArrowRight" ? 1 : -1)));
  })), Z(), {
    update(t) {
      if (!w) return;
      const e = !Object.keys(y).length;
      y = { ...Object.fromEntries(Object.entries(y).filter(([n]) => Fa(n))), ...t || {} };
      for (const n in y) n.startsWith("light.") && y[n].state === "on" && Ze(n) && za(n, eo(y[n]));
      e ? Na() : Ce();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      Zo = !0, ge == null || ge.destroy(), ge = null, be == null || be.forEach((t) => t.destroy()), be = null;
    },
    resume() {
      Zo = !1, !(!w || !(P != null && P.querySelector("[data-tf]"))) && (ha.isConnected && Er(ha.style.order), Br());
    }
  };
}
const T0 = "0.9.1";
function L0() {
  if (document.getElementById("homecore-fonts")) return;
  const o = document.createElement("link");
  o.id = "homecore-fonts", o.rel = "stylesheet", o.href = "https://fonts.googleapis.com/css2?family=Geist:wght@200;300;400;500;600;700&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(o);
}
class D0 extends HTMLElement {
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
    const c = !this._hass;
    if (this._hass = r, c) {
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
    L0();
    const r = this.shadowRoot || this.attachShadow({ mode: "open" });
    r.innerHTML = `<style>${Eu}${Bu}${Ru}${Pu}</style>${Hu}`;
    const c = r.getElementById("app");
    c.style.opacity = "0", this._shell = Iu(r, {
      setLight: (p) => this.classList.toggle("lightBody", p),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._test = _0(r, { config: this._config, getHass: () => this._hass }), this._test.update(this._hass.states), Ih(r, c), qh(r), this.isConnected || this._test.suspend(), c.style.transition = "opacity .2s ease", c.style.opacity = "";
  }
  _toggleFullscreen() {
    const r = document;
    if (r.fullscreenElement || r.webkitFullscreenElement) {
      (r.exitFullscreen || r.webkitExitFullscreen).call(r);
      return;
    }
    const c = this.requestFullscreen || this.webkitRequestFullscreen;
    Promise.resolve(c.call(this)).catch(
      () => {
        var p;
        return (p = this._shell) == null ? void 0 : p.toast("Full screen isn't available here");
      }
    );
  }
}
customElements.get("homecore-card") || (customElements.define("homecore-card", D0), window.customCards = window.customCards || [], window.customCards.push({
  type: "homecore-card",
  name: "HomeCore",
  description: "A test environment for the HomeCore design language.",
  preview: !1
}), console.info(`%c HOMECORE %c ${T0} `, "background:#03a9f4;color:#090909;font-weight:700", ""));
