const $u = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-text-on-accent:#090909;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#26221e;--color-text-on-selected:#fbf9f6;--color-bg-segment-selected:#fbf9f6;--color-accent-primary:#0288d1;--color-border-focus:#0288d1;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.pill,.primary,.navBtn,.tab,.back{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.hcAreaGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.hcAreaPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.hcAreaPanel.active{flex:7 1 0;min-width:0;cursor:default}.hcAreaPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.hcAreaPanel:before,.hcAreaPanel:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.hcAreaPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.hcAreaPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}#app.light .hcAreaPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.hcAreaPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.hcAreaPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.hcAreaPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}@media (max-width:900px){.hcAreaGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.hcAreaPanel,.hcAreaPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.panelCollapsed{display:none}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.sectionLabel{margin:0 0 8px 22.4px}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.toggleList{display:grid;gap:9.6px}.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.grid{grid-template-columns:1fr}}@media (max-width:620px){#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}}.card,.panel,.tile{border-radius:var(--r-card)}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .hcAreaPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.grid>*{min-width:0}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}:host{--primary:#03A9F4;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.activityRowMeta{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.toggleRow strong,.primary,.tab,.themeBtn,.wxLayoutBtn,.toast{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.note,.settingsSelect,.pill{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.metaTable th,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.hcAreaGallery,.hcAreaPanel{height:340px}@media (max-width:900px){.hcAreaPanel,.hcAreaPanel.active{height:320px}}@media (max-width:900px){.hcAreaGallery{height:auto}.hcAreaPanel,.hcAreaPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel{margin-left:16px}.grid{gap:8px}.sectionLabel{margin-bottom:8px}.hcAreaGallery{gap:8px}.hcAreaPanel,.hcAreaPanel.active{flex:0 0 100%;min-width:100%}.card,.hcAreaPanel{padding:16px}.activityRows{gap:8px}.activityRow{padding:10px 12px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}@media (prefers-reduced-motion: reduce){.sheet{transition:none}}.card,.panel,.hcAreaPanel.active{padding:var(--inset)}.hcAreaPanel{border-radius:var(--r-tile);padding:var(--inset)}.hcAreaPanel.active,.activityRow{border-radius:var(--r-tile)}.activityRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.activityRowMeta{color:var(--text)}.activityRowMeta{margin-top:0}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}#app{--group-bg:var(--card)}.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .note{margin:0 4px 4px}#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}', Ju = `#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}:is(#homeView,.tfMoreBackdrop,.tfEditTray,.tfMiniPhone) .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)),#homeView .tfATile{transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover,#homeView .tfATile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .wxWide{gap:16px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}@media (max-width:620px){#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--text)}#app.house.light{--hc-icon:#e6e6e6}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house .tfAreaHead .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house .tfAreaHead .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}.tfCard .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfAction>.tfActionHead{margin-bottom:auto}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .toggleRow:has(>.themeChoice,>.settingsSelect){flex-direction:column;align-items:stretch;gap:12px}#housePane .toggleRow>.settingsSelect{width:100%}#housePane .themeChoice[hidden]{display:none}#housePane .houseTab>.card:has(>.tfSetGroup){gap:24px}#housePane .tfSetGroup{display:grid;gap:8px}#housePane .tfSetGroup>.sectionLabel{margin:0 16px}#housePane{container:housepane/inline-size}#housePane .tfLightCards{display:none}@container housepane (width < 720px){#housePane .houseTab .metaTableWrap{display:none}#housePane .tfLightCards{display:grid;gap:8px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDacPad{min-width:0}.tfDacPad>dual-controller-v3{display:block}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}:is(.tfStep,.tfSeg,.tfBlocks,.tfTilt,.tfChips){font-family:var(--font-tile)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:0 1 46px;min-width:32px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);cursor:pointer}.tfStep svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfStep output{flex:1 0 auto;white-space:nowrap;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}#housePane .themeChoice,.tfBoardMenu .tfHeightTabs,.wb .wbSegments{gap:4px;padding:4px;border:0;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}#housePane .themeChoice{display:flex;flex-wrap:nowrap;width:100%}#housePane .themeChoice>button{flex:1 1 0;overflow:hidden;text-overflow:ellipsis}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button){height:38px;min-width:0;min-height:0;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile)!important;white-space:nowrap;cursor:pointer}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button):hover:not(:disabled):not([aria-pressed=true]):not([aria-checked=true]):not(.active){background:transparent;color:var(--text)}:is(#housePane .themeChoice :is(.wxLayoutBtn[aria-pressed=true],.themeBtn.active),.tfBoardMenu .tfHeightTabs button[aria-checked=true],.wb .wbSegments button[aria-pressed=true]){background:var(--bright);color:var(--on-bright)}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfAreaPanel .hcAreaPanelTop>div{min-width:0}.tfATags{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:4px;margin-left:auto;min-width:0}.tfATags .sourceTag{display:block;margin:0;max-width:100%;padding:6px 12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none;container:blocks/inline-size}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:12px 4px 4px 12px}.tfBlocks>span:nth-child(4){border-radius:4px 12px 12px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 14px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b small{font:inherit}@container blocks (width < 164px){.tfBlocks b small{display:none}}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.tfTilt i{position:absolute;top:4px;bottom:4px;left:4px;border-radius:12px;background:var(--primary)}.tfTilt span{position:relative;padding:0 16px;color:var(--text);font:600 14px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns svg{fill:none}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}#app.house .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}#app.house .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-l);--g1:var(--g1-l);--g2:var(--g2-l)}#app.house .tfSum[data-summary=climate] .tfIcon svg path{fill:url(#hcClimateGrad)}.tfGradDefs{position:absolute;width:0;height:0;overflow:hidden;pointer-events:none}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMoreBackdrop.tfMoreUnder{z-index:179;pointer-events:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}.tfMoreTileHead .tfName{display:grid;flex:1;min-width:0;cursor:default}.tfMoreTileHead :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreTileHead .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfMoreTileHead div.tfIcon{cursor:default}.tfMoreTileHead.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreTileHead.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMorePages{display:grid;grid-auto-flow:column;grid-auto-columns:100%;align-items:start;gap:20px;flex:none;overflow-x:auto;overflow-y:hidden;overscroll-behavior-x:contain;scroll-snap-type:x mandatory;scrollbar-width:none;transition:height .25s cubic-bezier(.2,.7,.3,1)}@media (prefers-reduced-motion:reduce){.tfMorePages{transition:none}}.tfMorePages::-webkit-scrollbar{display:none}.tfMorePage{display:flex;flex-direction:column;gap:14px;min-width:0;scroll-snap-align:start;scroll-snap-stop:always}.tfMoreSpace{flex:none;display:flex;flex-direction:column;justify-content:space-between;gap:12px;height:224px;padding:18px;border-radius:16px;background:var(--tile);overflow:hidden}.tfMoreSpace.tfMoreFill{justify-content:center;align-items:center;height:auto;padding:0;background:none;border-radius:0}.tfMoreSpace.tfMoreFill>.tfCoverArt{width:100%;height:auto;max-width:none;align-self:center}.tfMoreSpace.tfMoreFill>.tfDacPad{width:100%;height:100%}.tfMoreBig{display:flex;align-items:baseline;min-width:0;font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfMoreBig.live{color:var(--primary)}.tfMoreNum{overflow:hidden;text-overflow:ellipsis}.tfMoreUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfMoreFacts{display:flex;flex:1;flex-direction:column;justify-content:space-evenly;min-height:0}.tfMoreFact{display:flex;justify-content:space-between;gap:16px;font:400 14px/20px var(--font)}.tfMoreFact span:first-child{color:var(--muted)}.tfMoreFact span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreGraph{display:flex;flex:none;flex-direction:column;gap:6px}.tfMoreGraph .tfMoreGroupName{margin:0}.tfMoreGraph .tfGraph.tfDay{width:100%}.tfMoreDots{display:flex;flex:none;justify-content:center;gap:4px;margin-top:-4px}.tfMoreDots button{display:grid;place-items:center;width:24px;height:24px;min-height:0;padding:0;border:0;background:none;cursor:pointer}.tfMoreDots button:before{content:"";width:8px;height:8px;border-radius:50%;background:var(--muted);opacity:.45;transition:opacity .15s ease,background .15s ease}.tfMoreDots button[aria-selected=true]:before{background:var(--text);opacity:1}.tfMoreDots.tfMorePageIcons{gap:3px;align-self:center;margin-top:0;padding:3px;border-radius:19px;background:var(--tile)}.tfMoreDots.tfMorePageIcons button{width:48px;height:32px;border-radius:16px;color:var(--muted);transition:background .15s ease,color .15s ease}.tfMoreDots.tfMorePageIcons button:before{display:none}.tfMoreDots.tfMorePageIcons button svg{width:20px;height:20px;fill:currentColor}.tfMoreDots.tfMorePageIcons button[aria-selected=true]{background:var(--text);color:var(--card)}.tfMoreDots.tfMorePageIcons button:not([aria-selected=true]):hover{color:var(--text)}#homeView .grid>.tfDashTiles>.tfAction.tfHeadOnly,#homeView .grid .tfAction.tfHeadOnly{align-self:start}.tfMoreLink{margin-top:auto}.tfMoreLink svg{transform:none!important}.tfMorePage .tfMoreRows{flex:none}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card.tfCard{container-type:inline-size}#homeView .card.tfCard .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMorePair.still{animation:none}#app[data-more=sheet] .tfMore{width:min(640px,100vw)}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}#homeView .hcAreaPanel.tfAreaPanel{padding:18px 20px 10px}.tfAreaPanel .tfATiles{margin-inline:-10px}.tfAreaPanel .hcAreaPanelTop{justify-content:flex-start;gap:14px;padding:0}.tfAreaPanel .panelExpanded{justify-content:flex-start;gap:16px}.tfAreaPanel .icon{width:22px;height:22px}.tfATitle{display:flex;flex-direction:column;align-items:flex-start;min-width:0}#app .tfAName{max-width:100%;min-height:0;padding:0;border:0;border-radius:6px;background:none;color:var(--text);font:700 24px/1.2 var(--font-tile);letter-spacing:-.01em;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.tfAreaIcon{flex:none;border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}button.tfAreaIcon{cursor:pointer}.tfAreaGlyph{display:grid;place-items:center}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{display:grid;grid-template-columns:repeat(var(--peg-n),var(--peg-w));grid-auto-rows:60px;grid-auto-flow:row dense;align-items:stretch;gap:16px;max-width:none}#app.tfWeatherOpen .tfBento.tfPegs .wbItem{width:auto;min-height:0;align-self:stretch;display:flex;flex-direction:column}#app.tfWeatherOpen .tfBento.tfPegs .wbItem>*{flex:1;min-height:0}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=wide]{grid-column:span 2;grid-row:span 5}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=double]{grid-column:span 2;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=tile]{grid-column:span 1;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbCard.wbSquare{aspect-ratio:auto}#app.tfWeatherOpen .tfBento.tfPegs .wbWeather .wbNow{margin-bottom:auto}#app.tfWeatherOpen .tfBento.tfPegs :is(.wbStripScroll,.wbBars .wbDayBars,.wbBars.wbTabbed .wbDayBars){min-height:0}.tfABig{display:flex;flex-direction:column;align-items:flex-start;gap:4px;margin-top:auto;min-height:0;height:auto;padding:0;border:0;border-radius:8px;background:none;color:var(--text);text-align:start;cursor:pointer}.tfABigMain{font:200 32px/38.5px var(--font-tile);letter-spacing:0;white-space:nowrap}.tfABigUnit{margin-inline-start:.25em;font-size:inherit;letter-spacing:0}.tfABigSub{max-width:100%;overflow:hidden;color:var(--muted);font:400 16px/1.2 var(--font);white-space:nowrap;text-overflow:ellipsis}.tfATiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));min-height:calc(2 * var(--tile-min));align-content:end}.tfABig{max-width:100%}.panelExpanded:not(:has(.tfATiles)) .tfABig{margin-bottom:calc(2 * var(--tile-min) + 16px)}#app.tfBoard .tfAreas[data-rows="5"] .tfACMain{position:absolute;left:10px;right:10px;bottom:170.3px;max-width:none;text-align:center}#app.tfBoard .tfAreas[data-rows="4"] .tfACMain{position:absolute;left:10px;right:10px;bottom:164.1px;max-width:none;text-align:center}#app.tfBoard .tfAreas[data-rows="4"] .panelExpanded:not(:has(.tfATiles)) .tfABig{margin-bottom:calc(2 * var(--tile-min) + 12px)}.tfATile{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile)}.tfATile>:is(div,.tfName):last-child{min-width:0}.tfATile .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfATile.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfATile :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:18px 0 10px;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:6px;max-width:calc(100% - 20px)}.tfACMain{max-width:calc(100% - 20px);font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px);min-height:60px}.tfACTiles:has(>:nth-child(3)){margin-top:-60px}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}.tfACTiles:has(>:nth-child(2)){margin-top:-60px}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{gap:28px;padding:40px;background:var(--bg)}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:-20px -20px 0 0}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead) .activityTitle{font-size:24px}@media (max-width:620px){#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:0}}@media (min-width:621px){#app:not([data-more=sheet]) .tfMoreBackdrop.wide{place-items:start center}}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px}.tfMoreActions .tfAction{grid-column:auto}.tfMoreActions>.activityRow{align-self:start;display:grid;grid-auto-flow:column;grid-template-columns:auto minmax(0,1fr);align-items:center;align-content:start;gap:12px;min-width:0;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfMoreActions>.activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreActions>.tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreActions>.activityRow :is(.activityRowName,.activityRowMeta){display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreActions>.activityRow.alert .activityRowMeta{color:var(--danger)}@media (max-width:620px){.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash :is(.tfDash-aq,.tfDash-pollen,.tfDash-radar,.tfDash-hourly,.tfDash-sun,.tfDash-moon,.tfDash-uv,.tfDash-humidity,.tfDash-pressure,.tfDash-wind,.tfDash-visibility){order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app .tfNotAdded{display:none!important}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:1 0 409px}#app.tfDash .tfAreaPanel:not(.active){flex:0 0 128px}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;margin-top:auto;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(2,minmax(0,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app.house .tfDashBento .wbItem[data-size]{width:100%}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}.tfDash-wx .wbCondition{display:none}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .hcAreaGallery,#app.tfBoard .tfAreas .hcAreaPanel{height:100%;min-height:0}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;pointer-events:none;color:var(--text)}.tfBoardCells svg{display:block;overflow:visible}.tfBoardCells pattern circle{fill:currentColor;fill-opacity:.16}.tfBoardCells .tfGridCross{fill:none;stroke:currentColor;stroke-opacity:.45;stroke-width:1.5;stroke-linecap:round}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfHeight{display:grid;gap:6px;padding:6px 6px 8px}.tfHeightLabel{padding:0 6px;color:var(--muted);font:500 12px/16px var(--font)}.tfHeightTabs{display:grid;grid-template-columns:repeat(5,1fr)}.tfBoardMenu .tfHeightTabs button{justify-content:center}.tfBoardMenu .tfHeightTabs button:disabled{opacity:.35}.tfWidth{padding-top:0}.tfWidth .tfHeightTabs{grid-template-columns:repeat(3,auto)}.tfSourceList{display:grid;gap:2px}.tfBoardMenu .tfSourceList button[aria-checked=true]{background:var(--bright);color:var(--on-bright)}.tfBoardMenu .tfSourceList button[aria-checked=true]:hover{background:var(--bright)}.tfBoardMenu .tfWidth .tfHeightTabs button{white-space:nowrap}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows{grid-auto-rows:var(--fill-row,60px);margin-top:0}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows>.activityRow{min-height:0;height:var(--fill-row,60px);box-sizing:border-box}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]{padding:0;gap:0}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityHeader,#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.tfDashGraph{display:none}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityRows{margin:0;flex:1}#app.tfBoard .tfBoardItem.tfAction[data-rows="1"]{padding:10px;border-radius:24px}.tfRoomTile{cursor:pointer}.tfRoomTile .tfRoomIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomInline,.tfRoomSub{display:none}.tfRoomReading{display:flex;flex-direction:column;gap:4px;min-width:0}.tfRoomBig{overflow:hidden;color:var(--text);font:200 32px/38.5px var(--font-tile);letter-spacing:0;white-space:nowrap;text-overflow:ellipsis}.tfRoomSub{overflow:hidden;color:var(--muted);font:400 16px/19px var(--font);white-space:nowrap;text-overflow:ellipsis}.tfRoomDevices{display:flex;gap:12px}.tfRoomDevices .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfRoomDevices .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}#app.tfBoard .tfRoomTile[data-rows="1"] .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-rows="1"] :is(.tfRoomReading,.tfRoomDevices),#app.tfBoard .tfRoomTile[data-rows="2"] .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfActionHead .activityRowMeta{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfRoomSub{display:block}#app.tfBoard .tfRoomTile[data-cols="1"]:is([data-rows="3"],[data-rows="4"],[data-rows="5"]) .tfRoomDevices{display:grid;grid-template-columns:repeat(2,max-content)}#app.tfBoard .tfRoomTile[data-cols="1"][data-rows="3"]:has(.tfRoomDevices) .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-cols="1"][data-rows="3"]:has(.tfRoomDevices) .tfRoomReading{display:none}#app.tfBoard .tfRoomTile[data-cols="1"]:is([data-rows="4"],[data-rows="5"]) .tfRoomDevices{min-height:calc(2 * var(--chip-size) + 12px);align-content:start}.tfRoomHeads{display:none;gap:12px 16px}.tfRoomDev{display:flex;align-items:center;gap:12px;min-width:0;padding:0;border:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfRoomDev .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomDev .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfRoomDevName{display:flex;flex-direction:column;min-width:0}.tfRoomDevName>span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]){flex-direction:row;align-items:center;gap:12px}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"])>.tfActionHead{flex:1;margin-bottom:0}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]) .tfRoomDevices{display:flex}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomHeads{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-cols="2"]):not([data-rows="1"]) .tfRoomHeads{grid-template-columns:repeat(4,minmax(0,1fr))}#app.tfBoard .tfRoomTile[data-cols="2"][data-rows="2"] .tfRoomDev:nth-child(n+3){display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]):has(.tfRoomDevices) .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]):has(.tfRoomDevices) .tfRoomReading{display:none}#app.tfBoard .tfDashBento[data-rows="1"] .wbCard{padding:10px;border-radius:24px}#app.tfBoard .tfDashBento[data-rows="1"] .wbVisual{display:none}#app.tfBoard .tfDash-wx[data-rows="1"] .wbNow{margin:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbWx.wbS90{width:40px;height:40px;border-radius:12px}#app.tfBoard .tfDashBento[data-rows] :is(.wb,.wbBento,.wbItem){height:100%;min-height:0}#app.tfBoard .tfDashBento[data-rows] .wbCard{height:100%;min-height:0;box-sizing:border-box;aspect-ratio:auto}#app.tfBoard .tfDash-wx[data-rows="1"] .wbDeg{font-size:20px;letter-spacing:0;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbPlace{font-size:13px;line-height:18px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbUnit{font-size:14px;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbWx.wbS90{width:100px;height:100px;border-radius:31px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbDeg{font-size:80px;line-height:80px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbUnit{font-size:30px;line-height:38px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbWeather{flex-direction:row;align-items:center;gap:16px}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNow{flex:none}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNextHours{display:flex;flex:1 1 0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbWeather{justify-content:center;padding-top:0;padding-bottom:0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) :is(.wbNow,.wbSummary){display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbColumns{display:flex;flex:none;height:185px}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsDay{display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsNow{display:inline}#app.tfBoard .tfDash-wx[data-narrow] .wbCard.wbWeather{gap:12px;padding:18px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbWx.wbS90{width:64px;height:64px;border-radius:20px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbDeg{font-size:46px;line-height:46px;letter-spacing:-.92px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbUnit{font-size:20px;line-height:26px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-narrow] .wbHalves{display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="3"] .wbNextHours{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow] .wbHour:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;flex:none;height:auto;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumn:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbHalves{display:none}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx:not([data-narrow])[data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="4"]) .wbSummary{display:none}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) :is(.wbColumns,.wbHalves){display:none}#app.tfBoard .tfDash-wx[data-rows="4"] .wbColumns{flex:1 1 0;height:auto;min-height:0;margin-top:0}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn{justify-content:flex-start;gap:8px;padding:12px 0 16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn .wbWx{width:40px;height:40px;border-radius:16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbTemps{gap:4px}#app.tfBoard .tfDash-wx[data-rows="4"] .wbHalves>:nth-child(n+5){display:none}#app.tfBoard .tfDash-energy[data-rows="2"] .tfDashGraph{display:none}#app.tfBoard .tfDash-energy:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) .activityRows{grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr)}#app.tfBoard .tfDash-energy[data-rows="3"] .tfDashGraph{min-height:0}#app.tfBoard .tfDashBento[data-rows="2"] .wbBaseRows{display:none}#app.tfBoard .tfDashBento[data-rows="2"] :is(.wbRadar,.wbCompareBars,.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfDashBento[data-rows="3"] :is(.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfAreas[data-rows="1"] .hcAreaPanel.tfAreaPanel{padding:10px}#app.tfBoard .tfAreas[data-rows="1"] .panelExpanded{display:grid;grid-template-columns:40px minmax(0,1fr);gap:0 12px;align-content:center}#app.tfBoard .tfAreas[data-rows="1"] :is(.panelExpanded>.hcAreaPanelTop,.tfACTop){display:contents}#app.tfBoard .tfAreas[data-rows="1"] .panelExpanded .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] .tfATitle .tfAName{font-size:14px;line-height:20px;height:auto}#app.tfBoard .tfAreas[data-rows="1"] .tfABig{margin:0;flex-direction:row}#app.tfBoard .tfAreas[data-rows="1"] .tfABigMain{font-size:14px;line-height:18px;letter-spacing:0}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfABigUnit){font-size:14px}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfABigSub,.tfATiles,.tfACTiles,.sourceTag){display:none}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed{display:grid;grid-template-columns:40px minmax(0,1fr);column-gap:12px;align-content:center;padding:0}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfACName,.tfACMain){margin:0;font-size:14px;line-height:18px;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.tfBoard .tfAreas:is([data-rows="2"],[data-rows="3"]) .tfABig{display:none}#app.tfBoard .tfAreas[data-rows="4"] .tfABig{flex:none;margin-top:auto;margin-bottom:auto}#app.tfBoard .tfAreas[data-rows="4"] .tfATiles{margin-top:0}#app.tfBoard .tfAreas[data-rows="4"] .panelExpanded{row-gap:12px}#app.tfBoard .tfAreas:is([data-rows="2"],[data-rows="3"],[data-rows="4"]) .tfATiles{margin-top:auto}#app.tfBoard .tfAreas[data-rows="2"] .tfATile:nth-child(n+3),#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfATile:nth-child(n+5){display:none}#app.tfBoard .tfAreas[data-rows="2"] .tfACTiles{display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTile:nth-child(n+3){display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACollapsed{justify-content:flex-start;gap:10px}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTiles{margin-top:auto}.tfEditTray{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px));right:0;bottom:0;z-index:160;display:flex;width:608px;max-width:calc(100vw - 56px);transform:translate(100%);transition:transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfEditTray.open{transform:none}.tfEditTray.open.tucked{transform:translate(100%)}.tfEditTray.open :is(.tfTrayInner,.tfTrayTuck){pointer-events:auto}.tfTrayTuck{position:absolute;top:20px;left:-52px;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border:0;border-radius:var(--r-inner);background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;--mdc-icon-size:22px}.tfTrayTuck svg{width:22px;height:22px}.tfEditTray:not(.open) .tfTrayTuck{visibility:hidden}.tfTrayInner{flex:1;min-width:0;display:flex;flex-direction:column;gap:20px;overflow:auto;overscroll-behavior:contain;padding:20px;border-radius:var(--r-card) 0 0 var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d}.tfTrayHead{display:flex;align-items:center;justify-content:space-between;gap:12px}.tfTraySection{display:flex;flex-direction:column;gap:8px}.tfTraySection .sectionLabel{margin:0}.tfTrayNote{margin:0;color:var(--muted);font:400 14px/1.3 var(--font)}.tfTrayCards{display:flex;flex-direction:column;gap:6px}.tfTrayCard{display:flex;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 14px 0 10px;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none}.tfTrayList{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}.tfTrayFav{display:grid;grid-template-columns:22px var(--chip-size) minmax(0,1fr) 36px 36px;align-items:center;gap:8px;min-height:var(--tile-min);padding:0 4px 0 6px;border-radius:var(--r-tile)}.tfTrayFav.off{cursor:grab;touch-action:none}.tfTrayFav.off :is(.tfIcon,.tfTrayName){opacity:.5}.tfTrayFav.moving{background:var(--tile)}.tfTrayGrip{display:grid;place-items:center;color:var(--muted);cursor:grab;touch-action:none}.tfTrayGrip svg{width:20px;height:20px;fill:currentColor}:is(.tfTrayFav,.tfTrayPickItem) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfTrayName{display:flex;flex-direction:column;min-width:0}.tfTrayName>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfTrayBtn{display:grid;place-items:center;width:36px;height:36px;min-height:0;padding:0;border:0;border-radius:12px;background:none;color:var(--text);cursor:pointer}.tfTrayBtn svg{width:20px;height:20px;fill:currentColor}.tfTrayBtn:hover{background:var(--tile)}.tfTrayAdd{align-self:flex-start}.tfTrayPick{display:flex;flex-direction:column;gap:6px}.tfTrayPick[hidden]{display:none}.tfTrayPickItem{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;width:100%;min-height:var(--tile-min);padding:0 10px;border:0;border-radius:var(--r-tile);background:none;color:var(--text);text-align:start;cursor:pointer}.tfTrayPickItem:hover{background:var(--tile)}.tfTraySuggest{margin-top:8px}.tfMiniPhone{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px) + 20px);bottom:20px;left:max(16px,calc(100vw - min(608px,100vw - 56px) - 380px));z-index:160;display:flex;flex-direction:column;gap:8px;width:324px;padding:12px;border-radius:44px;background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d;opacity:0;transform:translate(16px);transition:opacity .2s ease,transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfMiniPhone.open{opacity:1;transform:none;pointer-events:auto}.tfPhoneHead{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 4px 0 12px}.tfMiniPhone>.tfTrayNote{padding:0 12px 4px}.tfLinkBtn{min-height:0;padding:0;border:0;background:none;color:var(--primary);font:inherit;text-decoration:underline;cursor:pointer}.tfPhoneScreen{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;border-radius:34px;background:var(--bg);box-shadow:var(--hc-hair-all);padding:14px 0 24px}.tfPhoneList{display:flex;flex-wrap:wrap;gap:12.8px}.tfPhoneTitle{width:100%;padding:0 12.8px;color:var(--text);font:800 25.6px/1 var(--font);letter-spacing:-.055em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfPhoneBlock{display:flex;align-items:flex-start;gap:10px;width:100%;min-height:0;padding:12px;border:0;border-radius:27px;background:var(--card);box-shadow:var(--hc-hair);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.tfPhoneBlock.tile{width:calc((100% - 12.8px)/2);border-radius:22.4px}.tfPhoneBlock.fixed{align-items:center;color:var(--muted);cursor:default}.tfPhoneBlock.moving{box-shadow:var(--hc-hair),0 0 0 2px var(--primary);cursor:grabbing}.tfPhoneBlock:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfPhoneBlock .tfIcon{width:32px;height:32px;border-radius:13px;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}.tfPhoneName{min-width:0;padding-top:6px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tfTrayGhost{position:fixed;top:0;left:0;z-index:200;margin:0;pointer-events:none;opacity:.9;background:var(--tile);border-radius:var(--r-tile);box-shadow:0 8px 24px #00000059}.tfFavDrop{position:fixed;z-index:200;width:4px;border-radius:2px;background:var(--primary);pointer-events:none}.tfFavHides{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;pointer-events:none}.tfFavHide{position:absolute;display:grid;place-items:center;width:32px;height:32px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;pointer-events:auto}.tfFavHide svg{width:18px;height:18px;fill:currentColor}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.toast.tfToast{top:auto;right:auto;max-width:calc(100vw - 32px);transform:translate(-50%,6px)}.toast.tfToast.show{transform:translate(-50%)}.tfDash-act .activityRow.alert .activityRowName{color:var(--danger)}.activityRow .tfIcon.alert{background:#e53935;color:#fff}.tfGraph.tfDay{flex:none;height:62px;min-height:0}.tfGraph.tfDay text{font-size:10px}#housePane .rubberIndicator{background:var(--bright)}#housePane .tab.active{color:var(--on-bright)}#app.house .settingsSelect{border:1px solid var(--muted)}#app.house .addInput{display:block;width:100%;height:46px;min-height:0;box-sizing:border-box;margin:0;padding:0 10px;border:0;border-radius:var(--r-inner)!important;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:400 16px/18.4px Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;letter-spacing:-.32px;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}#app.house .addInput:hover{background:color-mix(in srgb,var(--text) 6%,var(--tile))}#app.house .addInput:focus-visible,#app.house .addInput:focus{background:var(--tile);box-shadow:inset 0 0 0 1.6px var(--primary)}#app.house .addInput::-webkit-search-decoration,#app.house .addInput::-webkit-search-cancel-button{-webkit-appearance:none;-moz-appearance:none;appearance:none}#app.house{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%23d9d9d9' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house.light{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%2326221e' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house select.settingsSelect{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 44px 0 16px;background-image:var(--select-chev);background-repeat:no-repeat;background-position:right 16px center;background-size:16px 16px}#app.house .addInput::placeholder{color:var(--muted);opacity:1}#app .activityRows :focus-visible{outline-offset:-2.4px}#app.house :is(button,a,input,select,[tabindex]){scroll-margin-bottom:96px}@media (max-width:620px){#app.house :is(.activityRowName,.activityRowMeta){white-space:normal;text-overflow:clip;overflow:visible;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}}.tfTooltip{position:fixed;z-index:500;max-width:min(320px,calc(100vw - 16px));padding:6px 10px;border-radius:10px;background:var(--bright);color:var(--on-bright);font:500 14px/18px var(--font);overflow-wrap:break-word;box-shadow:0 4px 16px #00000040}.tfTooltip[hidden]{display:none}.tfDashGraph rect{transform-box:fill-box;transform-origin:50% 100%}#app.house:is([data-names=cut],[data-names=scroll]) :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis;overflow-wrap:normal}#app.house[data-names=wrap] :is(.activityRowName,.activityRowMeta){display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:normal;overflow:hidden;text-overflow:ellipsis;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}#app.tfBoard .tfDash-favs>.activityRows{min-height:0;overflow-y:auto;scrollbar-width:thin}#app.house :is(.tfIcon,.tfAreaIcon,.tfRoomIcon){--chip-hi:.0375;background-image:linear-gradient(180deg,#ffffff08,#fff0)!important;box-shadow:inset 0 1px rgba(255,255,255,var(--chip-hi)),inset 0 -1px color-mix(in srgb,currentColor 3%,transparent),inset 0 -3px 6px color-mix(in srgb,currentColor 3.5%,transparent)}#app.house :is(.on[data-light] .tfIcon,.tfIcon.on[data-light],.tfACTile .tfIcon[data-light],.on[data-tone=alarm] .tfIcon,.tfIcon[data-light]){--chip-hi:.1375}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-xl]{grid-row:span 5}#app.tfBoard .tfDashBento:not([data-rows="5"]) .wbItem[data-xl] .wbCallouts{display:none}#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]) .wbZone{flex:1;height:auto;background:none;box-shadow:none;padding:0;align-items:flex-start}#app.tfBoard .tfDashBento[data-rows="3"] .wbItem[data-xl] .wbCallouts{display:flex;margin-top:0}#app.tfBoard .tfDashBento[data-rows="1"] :is(.wbZone,.wbCallouts){display:none}#app .wbZoneM{display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM){display:flex;align-items:flex-start;justify-content:flex-start}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM)>:not(.wbZoneM){display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZoneM{display:flex}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{grid-auto-flow:row}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-break]{grid-column-start:1}#app.house.tfWeatherOpen #homeView{max-width:none}#app.house #settingsView .toggleList{border-radius:var(--r-card);padding-block:4px}#app.house #settingsView .toggleRow{padding-left:18px;padding-right:18px}#app.house #settingsView .toggleRow:not([hidden])~.toggleRow:before{left:18px}#app.house .view{margin-left:0}#app.house #settingsView .toggleList>.tfCardTitle{display:flex;align-items:center;min-height:28px;padding:14px 18px 2px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfLightView{display:flex;padding:4px 0 14px}#housePane.tfLightCardsOn .houseTab .metaTableWrap,#housePane.tfLightCardsOn .houseTab .tfTableNote{display:none}#housePane.tfLightCardsOn .tfLightCards{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:8px}#housePane:not(.tfLightCardsOn) .tfLightCards{display:none}@container housepane (width < 720px){#housePane:not(.tfLightCardsOn) .houseTab .metaTableWrap{display:none}#housePane:not(.tfLightCardsOn) .tfLightCards{display:grid}}#app.house.light .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house .tfTrayInner{gap:32px}#app.house .tfTraySection{gap:12px}#app.house{--font:Geist,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-family:var(--font)}#app.house #housePane .toggleRow>:is(.themeChoice,.settingsSelect){align-self:flex-start;width:auto;max-width:100%}#app.house #housePane .themeChoice{display:inline-flex}#app.house #housePane .themeChoice>button{flex:0 1 auto;min-width:0;padding:0 16px;overflow:hidden;text-overflow:ellipsis}#app.house #housePane .toggleRow{min-width:0}#app.house #housePane .toggleRow>.settingsSelect{min-width:200px}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments){display:inline-flex;width:auto;align-self:flex-start}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments) button{flex:0 0 auto;padding:0 16px}@media (max-width:620px){#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid{display:flex!important;flex-wrap:wrap;align-items:flex-start;gap:var(--grid-gap);height:auto!important}#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid .tfBoardItem{position:relative!important;left:auto!important;top:auto!important}#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid>.tfBoardItem:not(.tfDash-favs){height:auto!important}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummary{flex:none;margin-top:0;container-type:normal}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummaryText{position:static}}#app.house :is(#housePane .themeChoice,.wb .wbSegments,.tfBoardMenu .tfHeightTabs){height:32px;padding:3px;gap:3px;box-sizing:border-box}#app.house :is(#housePane .themeChoice>button,.wb .wbSegments button,.tfBoardMenu .tfHeightTabs button){height:26px!important;padding:0 12px;border-radius:13px!important;font:600 12px/16px var(--font-tile)!important}.tfPlantProblem{flex:1 1 0;min-height:184px;flex-direction:column}.tfGraph.tfPlantGraph{flex:1 1 0;width:calc(100% - 20px);height:auto;min-height:160px;margin:0 10px}.tfGraph .tfGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:3 4;vector-effect:non-scaling-stroke}.tfGraph .tfGuideWord{font-size:11px}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){box-shadow:inset 0 0 0 1px var(--line)}.tfDashTitle .tfGreeting{display:block;margin-bottom:6px;font:500 20px/1.2 var(--font-tile);letter-spacing:0;color:var(--muted)}#app.light{--title:#55504a}#app.light :is(.activityTitle,.hcCardTitle,.wbTitle,.activityRowName,.hcRowName,.wbName){color:var(--title)}#app.light .tfRoomTile .tfActionHead .activityRowName{color:var(--text)}#app.light .tfRoomBig{color:var(--title)}#app.tfOverview.tfDash #homeView .tfSum:not([data-summary=alerts]) .tfIcon{background:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar{width:100%;max-width:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows{display:flex;justify-content:space-between}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRow{flex:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows{display:grid;grid-template-columns:repeat(var(--bar-cols,3),minmax(0,1fr))}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows>.activityRow{min-width:0}@media (max-width:620px){#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}}#app.tfOverview.tfDash #homeView .tfDash-favs{padding:10px;border-radius:var(--r-card)}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-auto-rows:60px;row-gap:25px;max-height:100%;margin:0;overflow-y:auto;scrollbar-width:none}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows::-webkit-scrollbar{display:none}.hcFadeList.hcMore{-webkit-mask-image:linear-gradient(to bottom,#000 calc(100% - 40px),transparent);mask-image:linear-gradient(to bottom,#000 calc(100% - 40px),transparent)}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{height:60px;min-height:0;padding:10px;box-sizing:border-box}#app.tfOverview.tfDash #homeView .tfDash-wx .wbCard.wbWeather{gap:0;padding:18px}#app.tfOverview.tfDash #homeView .tfDash-wx .wbCondition,#app.tfOverview.tfDash #homeView .tfDash-wx .wbNextHours,#app.tfOverview.tfDash #homeView .tfDash-wx .wbHalves{display:none!important}#app.tfOverview.tfDash #homeView .tfDash-wx .wbSummary{flex:none;height:auto;margin:18px 0 0;container:none}#app.tfOverview.tfDash #homeView .tfDash-wx .wbSummaryText{position:static;-webkit-line-clamp:1}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumns{display:flex!important;height:159px;margin-top:auto;border-radius:var(--r-tile)}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn{padding:8px 0;background:none}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn:hover{background:var(--tile)}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn .wbWx.wbS60{width:60px;height:60px;border-radius:20px}#app.tfOverview.tfDash #homeView .tfRoomTile{padding:18px;gap:0;border-radius:28px}#app.tfOverview.tfDash #homeView .tfRoomTile>.tfActionHead{margin-bottom:0}#app.tfOverview.tfDash #homeView .tfRoomTile .tfActionHead .activityRowMeta{display:none}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomReading{margin-top:14px;gap:4px}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomSub{display:block;font:400 16px/19px var(--font-tile)}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomDevices{display:flex;justify-content:flex-start;gap:12px;min-height:0;margin-top:auto;padding-top:14px}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomHeads{display:none}#app.light.tfOverview.tfDash #homeView .tfRoomTile .tfRoomIcon{background-color:#acacac;color:#fff}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar{width:max-content;max-width:100%}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar .activityRows{justify-content:flex-start}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows{grid-template-columns:repeat(var(--bar-cols,3),auto)}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs{height:auto!important;padding:10px;container-type:normal}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows{display:flex;justify-content:space-between;grid-auto-rows:auto;row-gap:0;max-height:none}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{flex:none;width:240px;height:60px}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows{display:grid;grid-template-columns:repeat(var(--bar-cols,3),minmax(0,1fr))}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows>.activityRow{width:auto;min-width:0}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs{width:max-content!important;max-width:100%}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs>.activityRows{justify-content:flex-start}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows{grid-template-columns:repeat(var(--bar-cols,3),240px)}@media (max-width:620px){#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{width:auto;min-width:0}}#app.tfOverview.tfBoard #homeView .hcFloor{position:absolute;z-index:1;display:flex;align-items:center;height:24px;margin:0;box-sizing:border-box}#app.tfOverview.tfBoard #homeView .hcFloorBox{position:absolute;z-index:0;border-radius:40px;background:color-mix(in srgb,var(--text) 5%,transparent);box-sizing:border-box;pointer-events:none}#app.tfOverview #homeView .hcFloorName{margin:0;font:500 16px/24px var(--font);color:var(--title,var(--text));white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.tfOverview.tfDash #homeView .tfRoomTile{overflow:hidden}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomBig{font:500 calc(36.8px * var(--hc-k,1))/1 var(--font-tile);letter-spacing:calc(-.74px * var(--hc-k,1))}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaL .tfRoomBig{font-size:calc(41.6px * var(--hc-k,1));letter-spacing:calc(-1.54px * var(--hc-k,1))}#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaS,.hcAreaM) .tfRoomSub{display:none}#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaS,.hcAreaM) .tfRoomDevices{flex-wrap:wrap;height:var(--chip-size);overflow:hidden}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaBig .tfRoomBig{font-size:calc(51.2px * var(--hc-k,1));letter-spacing:calc(-1.54px * var(--hc-k,1))}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaBig .tfRoomSub{display:block}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaBig .tfRoomDevices{display:none!important}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaBig .tfRoomHeads{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));margin-top:auto;padding-top:14px}#app.hcHomeEditing.tfOverview #homeView .tfBoardItem.tfRoomTile{cursor:default;outline:0}#app.hcHomeEditing.tfOverview #homeView .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfRoomTile){cursor:grab;-webkit-user-select:none;user-select:none;touch-action:none;outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.hcHomeEditing.tfOverview #homeView .tfBoardItem.tfRoomTile{border-radius:28px}#app.hcHomeEditing.tfBoardReady #homeView .tfBoardItem{transition:left .34s cubic-bezier(.2,1.35,.4,1),top .34s cubic-bezier(.2,1.35,.4,1)}@media (prefers-reduced-motion:reduce){#app.hcHomeEditing.tfBoardReady #homeView .tfBoardItem{transition:none}}#app.hcHomeEditing #homeView .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}@media (max-width:620px){#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomDevices{display:grid;grid-template-columns:repeat(2,max-content);gap:12px;justify-content:start}}.tfEditTray .tfTrayInner{scrollbar-width:none}.tfEditTray .tfTrayInner::-webkit-scrollbar{display:none}.hcHeChoiceLine{flex-wrap:wrap;gap:8px 12px}.hcHeChoiceLine>.hcHeChoice{margin-left:auto}.hcHeChoice.themeChoice{display:inline-flex;flex-wrap:nowrap;height:32px;padding:3px;gap:3px;box-sizing:border-box;border-radius:16px;background:var(--control-2,var(--hc-icon))}#app .hcHeChoice>button{height:26px!important;min-height:0;padding:0 12px;border:0;border-radius:13px!important;background:none;color:var(--text);font:600 12px/16px var(--font-tile)!important;white-space:nowrap}#app .hcHeChoice>button[aria-pressed=true]{background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all)}.hcHeBody{display:flex;flex-direction:column;gap:12px}.hcHeBody>.tfTrayNote{margin:0 0 8px}.hcHeLabel{display:flex;align-items:center;gap:4px}.hcHeLine{display:flex;align-items:center;gap:4px;min-height:44px}.hcHeLine>.activityRowName{min-width:0}.hcHeLine>.switch{margin-left:auto}.hcHeLink{display:inline;min-height:0;padding:0;border:0;background:none;font:inherit;color:var(--primary);text-decoration:underline;cursor:pointer}.hcHeList{display:flex;flex-direction:column;gap:2px;margin:0;padding:0;list-style:none}.hcHeRow{display:grid;grid-template-columns:36px var(--chip-size) minmax(0,1fr) auto;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 4px;border-radius:var(--r-tile)}.hcHeRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.hcHeRow.moving{background:var(--card);box-shadow:var(--hc-hair-all)}:is(.hcHeRow,.tfTrayFav):is(.hcListDragging,.hcListLanding){position:relative;z-index:5;background:var(--card)}:is(.hcHeRow,.tfTrayFav).hcListDragging{filter:drop-shadow(0 10px 30px rgba(0,0,0,.35));cursor:grabbing}.hcHeGrip{color:var(--muted);cursor:grab;touch-action:none}.hcHeSum .tfIcon{color:var(--sum-ink,var(--hc-icon-ink))}#app .hcHeRow.hcHeSum .tfIcon{background-color:transparent}#app.house .hcHeSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .hcHeSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}.hcInfoBtn{display:grid;place-items:center;flex:none;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:var(--r-fine,12px);background:none;color:var(--muted);cursor:pointer}.hcInfoBtn svg{width:18px;height:18px;fill:currentColor}.hcInfoBtn:hover,.hcInfoBtn[aria-expanded=true]{background:var(--tile);color:var(--text)}.hcInfoPop{position:fixed;z-index:320;width:280px;max-width:calc(100vw - 16px);display:flex;flex-direction:column;gap:8px;padding:16px;border-radius:var(--r-inner);box-shadow:var(--hc-hair-all),0 8px 28px #0000002e}.hcInfoPop[hidden]{display:none}.hcInfoTitle{font:600 14px/20px var(--font-tile);color:var(--text)}.hcInfoText{font:400 14px/1.45 var(--font);color:var(--text)}.hcInfoText p{margin:0}.hcInfoText ul{margin:6px 0 0;padding-left:18px}.hcInfoMore{align-self:flex-start;font:600 14px/20px var(--font-tile);color:var(--primary);text-decoration:underline}#app .tfTrayAdd.hcAddBtn{display:inline-flex;align-items:center;gap:6px;height:32px;min-height:0;margin:10px 0 12px;padding:0 16px 0 12px;border:0;border-radius:16px!important;background:#03a9f4;color:#fff;font:600 14px/20px var(--font-tile);text-decoration:none!important}#app .tfTrayAdd.hcAddBtn svg{width:18px;height:18px;flex:none;fill:currentColor}#app .tfTrayAdd.hcAddBtn:hover{background:#0398dc}#app .tfTrayAdd.hcAddBtn[aria-expanded=true]{background:#0288d1}.tfEditTray:not(.hcHomeTray) .tfTraySection:not(.hcFirst){padding-top:20px;border-top:1px solid var(--line)}#app.house .tfEditTray:not(.hcHomeTray) .tfTrayInner{gap:20px}.hcHeRule{width:100%;height:0;margin:8px 0;border:0;border-top:1px solid var(--line)}.tfEditTray .hcTrayTabs{display:flex;align-self:stretch;margin:0 0 4px;flex:none}.tfEditTray .hcTrayTabs .tab{flex:1 1 0;min-height:36px;padding:0 10px;font:600 14px/20px var(--font-tile)}.tfEditTray .hcTrayTabs .rubberIndicator{background:var(--text)}.tfEditTray .hcTrayTabs .tab.active{color:var(--card)}.tfEditTray .tfTraySection[hidden]{display:none!important}.hcHeTabBody{display:flex;flex-direction:column;gap:8px}.hcHomeTray .hcTrayTabs{margin:0 0 8px}#homeView .grid.tfStack{grid-auto-rows:1px;row-gap:0}#homeView .grid.tfStack>*{align-self:start}.tfTrayPop{position:fixed;z-index:260;right:calc(min(608px,100vw - 56px) + 12px);width:300px;max-width:calc(100vw - 80px);display:grid;gap:2px;padding:10px!important;background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfTrayPop[hidden]{display:none}.tfTrayPopTitle{padding:4px 8px 8px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfTrayPopRow{display:flex;align-items:center;gap:12px;min-height:var(--tile-min);padding:0 8px}.tfTrayPopRow .tfIcon{background-color:var(--hc-icon)}.tfTrayPopName{flex:1;min-width:0;font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app .tfMoreBackdrop:not(.wide) .tfMore{height:min(600px,85dvh)}#app .tfMoreBackdrop:not(.wide) .tfMorePages{flex:1 1 auto;min-height:0;height:auto!important;align-items:stretch}#app .tfMoreBackdrop:not(.wide) .tfMorePage{overflow-y:auto;overscroll-behavior:contain;scrollbar-width:none}#app .tfMoreBackdrop:not(.wide) .tfMorePage[aria-label=Control]>:first-child{margin-top:auto}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace{flex:1 1 auto;height:auto;min-height:224px}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill{min-height:0;container-type:size}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill>.tfCoverArt{width:min(100%,100cqh);height:auto}.tfMorePage[aria-label=Control]>:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink)+:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink){margin-top:14px}.tfMoreSwitch{display:flex;align-items:center;justify-content:center;min-height:0;padding:0;border-radius:0;background:none}.tfMoreSwitch .tfIcon{width:min(240px,100%);height:min(240px,100%);aspect-ratio:1;min-height:0;border:0;padding:0;border-radius:40%;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer;--mdc-icon-size:204px}.tfMoreSwitch.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreSwitch.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}@media (max-width:620px){#app .tfMoreBackdrop{place-items:end center;padding:0 16px max(16px,env(safe-area-inset-bottom,0px))}#app .tfMoreBackdrop .tfMorePair{width:100%;max-height:85dvh}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){width:100%;border-radius:34px;box-shadow:inset 0 0 0 1px var(--line),0 10px 30px #00000047}#app .tfMoreBackdrop .tfMore{padding-top:10px;outline:none}#app .tfMoreBackdrop .tfMore:before{content:"";display:block;position:sticky;top:10px;z-index:2;flex:none;width:36px;height:5px;margin:0 auto;border-radius:3px;background:var(--line)}#app .tfMoreBackdrop .tfMore [data-more-close]{display:none}}#app .tfMoreBackdrop:not(.wide) .tfMore{height:min(604.4px,calc(100dvh - 32px))}#app .tfMoreBackdrop:not(.wide) .tfMorePages{transition:none}#app .tfMoreBackdrop:not(.wide) .tfMorePop>.tfMorePage:not([aria-label=Info]){display:flex;flex-direction:column;gap:14px;overflow:hidden}#app .tfMoreBackdrop:not(.wide) .tfMorePop>.tfMorePage>.tfMoreSpace{flex:1 0 224px;min-height:224px;margin-top:0}.tfMoreCtl{display:flex;flex-direction:column;gap:14px;flex:0 1 auto;min-height:0;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:none}.tfMoreCtl::-webkit-scrollbar{display:none}.tfMoreCtl:empty{display:none}#app .tfMoreBackdrop:not(.wide) .tfMorePages{margin:-14px;padding:14px;gap:28px;scroll-padding-inline:14px}#app .tfMoreBackdrop:not(.wide) .tfMorePop>.tfMorePage:not([aria-label=Info]){overflow:visible}#app .tfMoreBackdrop:not(.wide) :is(.tfMorePages:not(.tfMorePop)>.tfMorePage,.tfMorePop>.tfMorePage[aria-label=Info]){margin:-14px;padding:14px}.tfMoreCtl{margin:-14px;padding:14px}.tfMoreCtl>*{flex:none}.tfMoreField{display:flex;flex-direction:column;gap:6px}.tfMoreLabel{color:var(--muted);font:400 14px/20px var(--font)}.tfMoreRange{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}@media (max-width:620px){.tfMoreRange{grid-template-columns:1fr;gap:14px}}.tfPopBar{box-shadow:var(--hc-hair-all)}.tfPopBar i{overflow:visible}.tfPopBar .tfBarVal{position:absolute;right:14px;top:50%;translate:0 -50%;color:#26221e;font:600 15px/20px var(--font-tile);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.tfPopBar .tfBarVal.mid{left:50%;right:auto;translate:-50% -50%;z-index:1}.tfPopBar .tfBarIcon{position:absolute;left:13px;top:12px;width:22px;height:22px;color:#26221e;pointer-events:none;--mdc-icon-size:22px}.tfPopBar .tfBarIcon>*{width:22px;height:22px}.tfPopBar.fan i{background:linear-gradient(90deg,#4dd4ec,#00b2d6)}.tfPopBar.valve i{background:linear-gradient(90deg,#4aa8ff,#1a7fe6)}.tfPopBar.tiltp i{background:linear-gradient(90deg,#c9a7ef,#8e5cd9)}.tfPopBar.ctf{background:linear-gradient(90deg,#d7e7ff,#fff7ee 45%,#ffc247 75%,#fa0)}.tfPopBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfMoreSwitch .tfIcon{width:min(224px,100%);height:min(224px,100%);--mdc-icon-size:190px}.tfMoreSwitch:not(.on) .tfIcon{box-shadow:var(--hc-hair-all);color:var(--text)}.tfMorePad{--tf-dac-pad:337px;--tf-dac-max:none}.tfAction.tfDac{--tf-dac-max:none}.tfMoreSpace.tfMoreArt{justify-content:center;align-items:center;padding:8px;container-type:size}.tfMoreArt>.tfCoverArt{width:min(100%,100cqh);height:auto;max-width:none}#app .tfMoreCode{width:100%;height:46px;padding:0 16px;border:0;border-radius:16px!important;background:var(--tile);color:var(--text);box-shadow:var(--hc-hair-all);font:400 16px/20px var(--font);box-sizing:border-box}#app .tfMoreCode::placeholder{color:var(--muted);opacity:1}#app .tfMoreCode:focus{outline:2px solid var(--primary);outline-offset:-1px}.tfMoreSpace.tfMoreKeypad{justify-content:flex-start;gap:8px;padding:12px}.tfMoreKeypad .tfMoreCode{flex:none;background:var(--card)}.tfKeypad{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.tfKeypad button{height:46px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);font:500 18px/1 var(--font-tile);cursor:pointer}.tfKeypad button[data-key=clear]{color:var(--muted);font:400 14px/1 var(--font)}.tfKeypad svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfKeypad button:active{scale:.96}@media (max-width:620px){.tfMorePop .tfSeg:has(>:nth-child(5)){flex-wrap:wrap;height:auto}.tfMorePop .tfSeg:has(>:nth-child(5)) button{flex:0 0 auto;height:38px;padding:0 14px}}`, Qu = `.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:14px;aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:18px;border-radius:28px;overflow:hidden}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbChip{width:40px;height:40px;border-radius:16px}.wbSquare .wbName{font-size:14px;line-height:1.4}.wbSquare .wbSub{font-size:16px}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:10px}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846;border-radius:34px}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:1;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);fill-opacity:.14}.wbChart .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:24px minmax(0,1fr) 22px;grid-template-areas:". sun" "y plot" ". x";column-gap:8px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wb[data-style=smooth] :is(.wbWx,.wbSky):after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;border-radius:inherit;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1.3 0 0 0 -.15 1.3 0 0 0 -.15 1.3 0 0 0 -.15 0 0 0 0 1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:140px 140px;mix-blend-mode:overlay;opacity:.3}.wbBaseRows{display:flex;flex-direction:column;gap:4px;width:100%}.wbBaseRow{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbBaseRow>span:last-child{color:var(--text);white-space:nowrap}.wbBaseRow>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRadar{position:relative;flex:1;align-self:stretch;min-height:80px;border-radius:var(--r-inner);overflow:hidden;background-color:var(--tile);background-image:linear-gradient(color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px);background-size:24px 24px;background-position:center}.wbRadarRing{position:absolute;left:50%;top:50%;width:64%;aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 20%,transparent)}.wbRadarRing:after{content:"";position:absolute;top:25%;right:25%;bottom:25%;left:25%;border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 14%,transparent)}.wbRadarHome{position:absolute;left:50%;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 3px var(--tile)}.wbRadarMap,.wbRadarCam{background-image:none}.wbRadarLayer{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden}.wbRadarLayer img{position:absolute;width:256px;height:256px;max-width:none;pointer-events:none}.wbRadarLayer[hidden]{display:none}.wbRadarRain{opacity:.85}.wbRadarMap .wbRadarHome{z-index:2}.wbRadarTime,.wbRadarCredit{position:absolute;z-index:2;white-space:nowrap}.wbRadarTime{left:8px;bottom:6px;padding:1px 6px;border-radius:8px;background:color-mix(in srgb,var(--tile) 78%,transparent);color:var(--text);font:600 11px/16px var(--font-tile)}.wbRadarTime:empty{display:none}.wbRadarCredit{right:6px;top:4px;max-width:calc(100% - 12px);overflow:hidden;text-overflow:ellipsis;color:var(--muted);font:400 9px/12px var(--font)}.wbRadarNote{position:absolute;top:0;right:0;bottom:0;left:0;z-index:2;display:grid;place-items:center;padding:0 12px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbRadarCam img{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;object-fit:cover}.wbWx.wbLineIcon{display:grid;place-items:center;background:var(--tile);color:var(--text)}.wbWx.wbLineIcon>svg{width:64%;height:64%}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:18px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:14px 16px 12px 12px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbAsNow{display:none}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}.wbNextHours{display:none;justify-content:space-between;align-items:center;gap:8px;min-width:0}.wbHour{display:flex;flex-direction:column;align-items:center;gap:8px;min-width:0}.wbHourTime{color:var(--muted);font:400 14px/20px var(--font);white-space:nowrap}.wbHourTemp{font:400 18px/20px var(--font-tile);white-space:nowrap}.wbHour .wbWx.wbS40{width:40px;height:40px;border-radius:16px}.wbSummary{position:relative;flex:1 1 0;min-height:0;margin-top:-12px;container:wbsum/size}.wbSummaryText{position:absolute;top:12px;left:0;right:0;margin:0;color:var(--text);font:400 16px/22px var(--font);display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}@container wbsum (height < 56px){.wbSummaryText{-webkit-line-clamp:1}}@container wbsum (height < 34px){.wbSummaryText{display:none}}@container wb-card (width < 480px){.wbColumn .wbWx.wbS60{width:48px;height:48px;border-radius:16px}}@container wb-card (width < 400px){.wbCard.wbWeather{gap:16px;padding:18px 18px 10px}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumn .wbWx.wbS60{width:40px;height:40px;border-radius:14px}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbStripScroll.wbPaged{container-type:inline-size;scroll-snap-type:x mandatory;overscroll-behavior-x:contain}.wbStripScroll.wbPaged.wbHeld{scroll-snap-type:none}.wbPaged .wbStrip{position:relative;min-width:0;padding:0}.wbSnap{position:absolute;top:0;width:1px;height:1px;scroll-snap-align:start;pointer-events:none}.wbMark.wbLast{align-items:flex-end;transform:translate(-100%)}.wbPaged .wbTimes .wbMark.wbFirst{font:400 14px/20px var(--font)}.wbPaged .wbTimes .wbMark.wbNowMark{font:600 14px/20px var(--font-tile)}.wbSky .wbPast{position:absolute;top:0;bottom:0;left:0;background:var(--card);opacity:.45;pointer-events:none}.wbSky .wbNowLine{position:absolute;top:0;bottom:0;width:2px;margin-left:-1px;background:var(--text);opacity:.55;pointer-events:none}.wbSky.wbLineSky{background:var(--tile);color:var(--text)}.wbLineArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbLineArt .wbLineArc{fill:none;stroke:var(--text);stroke-width:1.5;stroke-linejoin:round;vector-effect:non-scaling-stroke;opacity:.7}.wbLineArt .wbLineHorizon{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.35}.wbLineArt .wbLineNight{fill:var(--text);opacity:.07}.wbLineArt .wbLineEdge{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.3}.wbLineTime{position:absolute;top:calc(80% + 4px);transform:translate(-50%);color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.wbLineNow{position:absolute;width:26px;height:26px;transform:translate(-50%,-50%);border-radius:50%;background:var(--tile);pointer-events:none}.wbLineNow>svg,.wbLineGlyph>svg{display:block;width:100%;height:100%}.wbLineGlyph{position:absolute;top:calc(50% - 14px);width:28px;height:28px;transform:translate(-50%);pointer-events:none}.wbLineGlyph.wbFirst{transform:none}.wbLineGlyph.wbLast{transform:translate(-100%)}.wbSky .wbMidnight{position:absolute;top:0;bottom:0;width:0;border-left:1.5px dashed var(--text);opacity:.5;pointer-events:none}.wbDays{position:absolute;top:36px;left:0;z-index:1;display:flex;pointer-events:none}.wbDaySpan{flex:none;min-width:0}.wbDayName{position:sticky;left:8px;margin-left:8px;height:26px;min-height:0;padding:0 10px;border:0;background:color-mix(in srgb,var(--card) 82%,transparent);color:var(--text);font:600 13px/26px var(--font-tile);white-space:nowrap;cursor:pointer;pointer-events:auto}.wb .wbDayName{border-radius:13px!important;font-family:var(--font-tile)!important}.wbViews button{padding:2px 10px;font-size:13px}.wbBars .wbDayBars{flex:1 1 0;min-height:160px;display:flex;flex-direction:column;padding:0 18px;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin}.wbBars.wbTabbed .wbDayBars{min-height:206px}.wbDayBar{flex:1 0 auto;display:grid;grid-template-columns:minmax(56px,auto) 40px 36px minmax(0,1fr) 36px;align-items:center;column-gap:12px;min-height:48px;box-shadow:inset 0 -.4px 0 var(--line)}.wbDayBar:last-child{box-shadow:none}.wbRangeDay{color:var(--text);font:600 14px/20px var(--font-tile);white-space:nowrap}.wbRangeLo{color:var(--muted);text-align:right;font:400 16px/20px var(--font);font-variant-numeric:tabular-nums}.wbRangeHi{color:var(--text);text-align:right;font:400 16px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbRangeTrack{position:relative;height:6px;border-radius:3px;background:var(--tile)}.wbRangeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:3px}.wbRangeNow{position:absolute;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:#fff;box-shadow:0 0 0 2px var(--card)}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbBars .wbDayBars{padding:0 8px;min-height:380px}.wbBars.wbTabbed .wbDayBars{min-height:426px}.wbDayBar{column-gap:8px}.wbStripScroll{min-height:380px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:16px;overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbSunTile .wbZone{display:block}.wbSunZone{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff;transition:background 1s ease}.wbSunTrack{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbSunBand{fill:#fff;fill-opacity:.1}.wbSunBand.wbSunDay{fill-opacity:.14}.wbSunBand.wbSunDone{fill-opacity:.85}.wbSunDot{fill:#ffd84a}.wbSunDot.wbSunNight{fill:#9aa3c7}.wbSunCount{position:absolute;top:22px;right:22px;bottom:22px;left:22px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;padding-bottom:14px}.wbSunLeft{font:500 clamp(28px,calc(16cqw * var(--wb-k,1)),36px)/1.1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums;white-space:nowrap}.wbSunWord{font:400 13px/18px var(--font);opacity:.85}.wbSunAt{position:absolute;bottom:32px;font:500 12px/16px var(--font);opacity:.85;font-variant-numeric:tabular-nums}.wbSunRise{left:32px}.wbSunSet{right:32px}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}.wbMoonCaption{gap:8px}.wbMoonCaption span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbMoonCaption span:last-child{flex:none}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbSea{position:relative;flex:1;min-height:0;border-radius:16px;overflow:hidden;--wb-sea-inset:clamp(8.88px,calc(4.76cqw * var(--wb-k,1)),12px)}.wbSeaArt{position:absolute;top:0;right:0;bottom:0;left:0;display:block;width:100%;height:100%;image-rendering:pixelated}.wbSeaFact{position:absolute;top:clamp(7px,calc(3.97cqw * var(--wb-k,1)),10px);inset-inline:var(--wb-sea-inset);color:#26221e;font:600 clamp(9.44px,calc(5.47cqw * var(--wb-k,1)),13.78px)/1.23 var(--font-tile)}.wbSeaValue{position:absolute;bottom:var(--wb-sea-inset);inset-inline-start:var(--wb-sea-inset);color:#fff;text-shadow:0 0 2px rgba(0,0,0,.6),0 1px 3px rgba(0,0,0,.5)}.wbSeaValue .wbUnitV{color:inherit}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbTrend{position:relative;width:100%;height:100%;min-height:0}.wbTrendPlot{position:absolute;top:22px;right:0;bottom:24px;left:0}.wbTrendPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbTrendLine{fill:none;stroke:var(--text);stroke-width:2;stroke-linejoin:round;stroke-linecap:round;opacity:.8}.wbTrendDot{position:absolute;width:7px;height:7px;margin:-3.5px 0 0 -3.5px;border-radius:50%;background:var(--card);box-shadow:0 0 0 2px var(--text)}.wbTrendDot.wbToday{width:11px;height:11px;margin:-5.5px 0 0 -5.5px;background:var(--primary);box-shadow:0 0 0 3px var(--card)}.wbAvgValue{position:absolute;transform:translate(-50%,calc(-100% - 8px));color:var(--muted);font:400 10px/1 var(--font-tile);white-space:nowrap}.wbAvgValue.wbToday{color:var(--text);font-size:12px;font-weight:600}.wbTrendAvg{position:absolute;right:0;transform:translateY(4px);color:var(--muted);font:400 10px/1 var(--font-tile)}.wbTrendDays{position:absolute;left:0;right:0;bottom:0;height:16px}.wbAvgDay{position:absolute;bottom:0;transform:translate(-50%);color:var(--muted);font:400 11px/16px var(--font-tile)}.wbAvgDay.wbToday{color:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}.wbZoned{gap:14px}.wbZone{position:relative;flex:none;height:198px;display:flex;align-items:center;justify-content:center;border-radius:16px;overflow:hidden}.wbCallouts{display:none;flex-direction:column;gap:4px;margin-top:-6px}.wbCallout{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbCallout>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbCallout>span:last-child{flex:none;color:var(--text);white-space:nowrap}.wbZone>.wbSunSky{flex:1;align-self:stretch;border-radius:0}.wbZone>.wbMoonBox{flex:none;height:150px}.wbBase .wbZone{align-items:flex-end;justify-content:flex-start}.wbZone>.wbTapeRow{align-self:stretch;height:100%}.wbItem[data-xl] .wbCallouts{display:flex}.wbUv .wbZone{display:block}.wbUvArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbUvBig{position:absolute;right:0;bottom:0;display:flex;flex-direction:column;align-items:flex-end}.wbUvNum{font:500 64px/.9 var(--font-tile);letter-spacing:-.03em;color:var(--text);font-variant-numeric:tabular-nums}.wbUvWord{margin-top:6px;font:400 14px/20px var(--font);color:var(--muted)}.wbAqSmile .wbZone{display:block}.wbAqFill{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff}.wbAqFace{position:absolute;left:12px;top:12px;width:min(140px,calc(100% - 60px));height:auto;aspect-ratio:1;fill:none;stroke:currentColor;stroke-width:3.4;stroke-linecap:round;stroke-linejoin:round}.wbAqFace .wbAqEyes{stroke-width:5}.wbAqBig{position:absolute;right:14px;bottom:12px;display:flex;flex-direction:column;align-items:flex-end}.wbAqNum{font:500 56px/.9 var(--font-tile);letter-spacing:-.03em;font-variant-numeric:tabular-nums}.wbAqUnit{margin-top:4px;font:500 14px/20px var(--font)}.wbPollenAir{position:absolute;top:0;right:0;bottom:62px;left:0;overflow:hidden;pointer-events:none}.wbFloat{position:absolute;left:-12%;animation:wbFloat linear infinite}.wbBob{display:block;animation:wbBob ease-in-out infinite alternate}@keyframes wbFloat{0%{left:-12%}to{left:106%}}@keyframes wbBob{0%{transform:translateY(-6px) rotate(-14deg)}to{transform:translateY(8px) rotate(16deg)}}.wbFloat svg{display:block}.wbSeed svg{width:calc(20px * var(--s));height:calc(28px * var(--s))}.wbGrain svg{width:calc(10px * var(--s));height:calc(10px * var(--s))}.wbStem svg{width:calc(9px * var(--s));height:calc(26px * var(--s))}.wbSeed{color:var(--text);opacity:.7}.wbGrain{color:#e9c46a;opacity:.85}.wbStem{color:#a3b18a;opacity:.75}#app.light .wbGrain{color:#c99a1e}#app.light .wbStem{color:#7d8c5f}@media (prefers-reduced-motion:reduce){.wbFloat,.wbBob{animation:none}.wbFloat{left:var(--x)}}.wbPush{display:block;transition:transform .35s cubic-bezier(.2,.8,.3,1)}.wbCallout.wbAdvice>span:first-child{color:var(--text)}.wbCard.wbSquare.wbGraphCard{height:100%;min-height:0}.wbGraphCard .wbHead .wbBack{margin:-4px -6px 0 auto}.wbGraphCard .wbRangeBtn{align-self:flex-start;display:inline-flex;align-items:center;gap:6px;max-width:100%;height:32px;padding:0 8px 0 10px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:600 12px/16px var(--font-tile);cursor:pointer}.wb button.wbRangeBtn{border-radius:12px!important}.wbRangeBtn>span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRangeBtn .wbIcon{flex:none;width:16px;height:16px;fill:currentColor}.wbRangeBtn[aria-expanded=true]{background:var(--bright);color:var(--on-bright)}.wbItem:has(.wbRangePick){position:relative;z-index:30}.wbRangePick{position:absolute;top:116px;left:18px;z-index:30;display:flex;flex-direction:column;gap:12px;width:248px;box-sizing:border-box;padding:12px;border-radius:24px;background:var(--card);box-shadow:var(--hc-hair-all),0 18px 40px #00000059}.wbRangePick.wbPickRight{left:auto;right:18px}.wbRangePresets{display:flex;flex-direction:column;gap:2px}.wb .wbRangePreset{height:32px;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--text);font:400 14px/20px var(--font);text-align:left;cursor:pointer}.wb .wbRangePreset:hover{background:var(--tile)}.wb .wbRangePreset[aria-pressed=true]{background:var(--bright);color:var(--on-bright);font-weight:600}.wbRangeDates{display:grid;grid-template-columns:1fr 1fr;gap:8px;padding-top:12px;box-shadow:inset 0 .4px 0 var(--line)}.wbRangeDates label{display:grid;gap:4px;min-width:0;color:var(--muted);font:400 12px/16px var(--font)}.wbRangeDates input{width:100%;min-width:0;height:32px;box-sizing:border-box;padding:0 6px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:400 12px/16px var(--font);color-scheme:inherit}.wb .wbRangeApply{height:32px;padding:0 14px;border:0;border-radius:999px!important;background:var(--bright);color:var(--on-bright);font:600 12px/16px var(--font-tile);cursor:pointer}.wbGraphCard .wbGraph{flex:1;height:auto;min-height:0}.wb.wbPopup{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073;overscroll-behavior:contain;container-type:normal}.wb.wbPopup[hidden]{display:none}.wbPopupBox{position:relative;width:520px;max-width:100%}.wbPopup .wbCard.wbSquare.wbGraphCard{height:auto;aspect-ratio:auto;box-shadow:var(--hc-hair-all)}.wbPopup .wbGraphCard .wbGraph{flex:none;height:auto}@media (max-width:620px){.wb.wbPopup{place-items:end stretch;padding:0}.wbPopupBox{width:100%}.wbPopup .wbCard.wbSquare.wbGraphCard{border-radius:28px 28px 0 0}}`, th = '#app .mvPv{position:relative;transform:perspective(var(--pv-persp)) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) scale(var(--sc,1));transition:transform var(--pv-ret) var(--pv-ease)}#app .mvPv.mvMoving{transition:transform 70ms linear}#app .mvPv:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;opacity:0;mix-blend-mode:soft-light;background:radial-gradient(circle at var(--mx,50%) var(--my,50%),rgba(255,255,255,var(--pv-shine)),transparent var(--pv-size));transition:opacity var(--pv-ret) ease}#app .mvPv.mvLit:after{opacity:1}#app .tfBar{--mv-c:var(--light-soft,var(--primary));transform-origin:center;transition:box-shadow var(--ab-out) var(--ab-ease),transform var(--ab-out) var(--ab-ease)}#app .tfBar.mvHover{box-shadow:0 0 var(--ab-blur) var(--ab-spread) color-mix(in srgb,var(--mv-c) var(--ab-str),transparent);transition-duration:var(--ab-in)}#app .tfBar.mvHold{box-shadow:0 0 var(--ab-blur2) var(--ab-spread2) color-mix(in srgb,var(--mv-c) var(--ab-str2),transparent);transform:var(--ab-grow);transition-duration:var(--ab-in)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>:is(svg,ha-icon,ha-state-icon,span){transition:scale var(--ih-dur) var(--ih-ease)}@media (hover:hover){#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-s)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover:before{opacity:1}}:where(#app button.tfIcon,#app .tfBack,#app .tfEditChip,#app .tfTrayBtn,#app [data-wb=graph-close]){position:relative}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;background:color-mix(in srgb,currentColor var(--ih-tint),transparent);opacity:0;transition:opacity var(--ih-dur) var(--ih-ease)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):active>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-p)}#app .mvSegInd{position:absolute;z-index:0;pointer-events:none}#app .mvSegMoving>button{position:relative;z-index:1;background-color:transparent!important;box-shadow:none!important;transition:none!important}#app .tfMoreBackdrop{-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}#app .toast.tfToast{min-height:58px;box-sizing:border-box;padding:9px 18px 9px 9px;gap:14px;border-radius:29px;font-size:18px;line-height:1.2}#app .toast .mvTick{display:grid;place-items:center;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--mv-ok);color:#fff}#app .toast .mvTick svg{width:26px;height:26px;fill:none;stroke:currentColor;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}#app .toast .mvToastText{font-weight:600}#app .toast .toastAction{font-size:16px;margin-left:2px}#app .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}#app{--ol-l:68%;--mv-ok:#4cc38a}#app.light{--ol-l:48%;--mv-ok:#1f7a4d}#app .tfAreaPanel:has(>.mvEdge){isolation:isolate;position:relative}#app .mvEdge,#app .mvEdgeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity var(--ol-in) ease-out}#app .mvEdgeFill{z-index:-1;background:hsl(var(--ol-h) 97% var(--ol-l));mix-blend-mode:soft-light;opacity:clamp(0,calc(var(--ol-fill) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-fill));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%)}#app .mvEdge{z-index:5}#app .mvEdge:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l));opacity:clamp(0,calc(var(--ol-border) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-border));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%));mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%))}#app .mvEdge>i{position:absolute;top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;border-radius:inherit;mix-blend-mode:plus-lighter;opacity:clamp(0,calc(var(--ol-glow) * (var(--edge-proximity,0) - var(--ol-esens)) / (100 - var(--ol-esens))),var(--ol-glow));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}#app .mvEdge>i:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;--s:var(--ol-size);box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l) / 60%),inset 0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),inset 0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),inset 0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(22.4px*var(--s)) calc(1.6px*var(--s)) hsl(var(--ol-h) 97% var(--ol-l) / 10%)}#app :not(.mvLitEdge)>:is(.mvEdge,.mvEdgeFill){opacity:0;transition:opacity var(--ol-out) ease-out}@media (prefers-reduced-motion:reduce){#app .mvPv{transform:none!important}#app .mvPv:after{display:none}#app .tfBar.mvHold{transform:none}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>*{scale:none!important}}#app .tfBoardItem.mvDrag{scale:none}#app.tfEditing.tfBoardReady .tfBoardItem:not(.tfDragging){transition:left .42s cubic-bezier(.34,1.46,.64,1),top .42s cubic-bezier(.34,1.46,.64,1),height .42s cubic-bezier(.34,1.46,.64,1)}', eh = `<main id="app"><div class="shell">
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
`, bd = "homecore-theme", ah = {
  home: '<path d="M3 10.5L12 3L21 10.5V21H3V10.5Z"/>',
  settings: '<path d="M21 4H14"/><path d="M10 4H3"/><path d="M21 12H12"/><path d="M8 12H3"/><path d="M21 20H16"/><path d="M12 20H3"/><path d="M14 2V6"/><path d="M8 10V14"/><path d="M16 18V22"/>',
  fullscreen: '<path d="M8 3H5C3.9 3 3 3.9 3 5V8"/><path d="M21 8V5C21 3.9 20.1 3 19 3H16"/><path d="M3 16V19C3 20.1 3.9 21 5 21H8"/><path d="M16 21H19C20.1 21 21 20.1 21 19V16"/>',
  back: '<path d="M15 18L9 12L15 6"/>'
}, oh = (n) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (ah[n] || "") + "</svg>", wd = {
  get: (n) => {
    try {
      return localStorage.getItem(n);
    } catch {
      return null;
    }
  },
  set: (n, r) => {
    try {
      localStorage.setItem(n, r);
    } catch {
    }
  }
};
function nh(n, { setLight: r, fullscreenSupported: d, toggleFullscreen: p }) {
  const g = (et) => n.getElementById(et), y = g("app");
  n.querySelectorAll("[data-icon]").forEach((et) => {
    et.innerHTML = oh(et.dataset.icon);
  });
  const w = { home: g("homeView"), settings: g("settingsView") }, A = g("homeNav"), q = g("settingsNav");
  function M(et) {
    Object.entries(w).forEach(([at, X]) => X.classList.toggle("active", at === et)), A.classList.toggle("active", et === "home"), q.classList.toggle("active", et === "settings");
  }
  A.addEventListener("click", () => M("home")), q.addEventListener("click", () => M("settings")), g("settingsBack").addEventListener("click", () => M("home"));
  function D(et) {
    const at = et === "light";
    n.querySelectorAll(".themeBtn").forEach((X) => X.classList.toggle("active", X.dataset.theme === et)), y.classList.toggle("light", at), r(at);
  }
  D(wd.get(bd) === "light" ? "light" : "dark"), n.querySelectorAll(".themeBtn").forEach((et) => et.addEventListener("click", () => {
    D(et.dataset.theme), wd.set(bd, et.dataset.theme);
  }));
  const I = g("tvNav");
  d || (I.hidden = !0), I.addEventListener("click", () => p());
  let z;
  function Q(et) {
    const at = g("toast");
    at && (at.textContent = et, at.classList.add("show"), clearTimeout(z), z = setTimeout(() => at.classList.remove("show"), 2600));
  }
  return { showView: M, toast: Q };
}
const rh = /* @__PURE__ */ new Set(["roaming", "test_area"]), ih = {
  living_room: { climate: !0, cover: ["Curtains", "curtain", 62], temperature: 20.5, humidity: 44, motion: "Living room motion", plant: ["Monstera", 32, 4200, 21.4, 580] },
  kitchen: { temperature: 21.2, humidity: 48, door: "Back door", plant: ["Basil", 55, 900, 22.1, 910] },
  balcony: { solar: !0, door: "Balcony door", doorOpen: !0, valve: "Watering", valvePos: ["Garden valve", 40], plant: ["Tomatoes", 61, 18500, 14.2, 1240] },
  bedroom: { cover: ["Roller blind", "shade", 0], humidifier: !0, temperature: 18.9, humidity: 38, window: "Bedroom window", fan: ["Ceiling fan", 60] },
  office: { cover: ["Blinds", "blind", 60, 45], vacuum: !0, temperature: 21.8, humidity: 41, plant: ["Pothos", 47, 2600, 21.6, 640] },
  bathroom: { temperature: 22.4, humidity: 62, fan: ["Extractor fan"], waterHeater: !0, valvePos: ["Water valve", null] }
}, _n = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, be = "made_up_", Va = (n) => {
  var r;
  return (r = String(n).split(".")[1]) == null ? void 0 : r.startsWith(be);
}, Mn = (n) => n.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function zl(n) {
  const r = n.getHours() + n.getMinutes() / 60, d = Math.max(0, Math.sin((r - 7) / 13 * Math.PI));
  return 2.4 * d * d;
}
function sh(n) {
  const r = new Date(n.getFullYear(), n.getMonth(), n.getDate());
  let d = 0;
  for (let p = +r; p < +n; p += 10 * 60 * 1e3) d += zl(new Date(p)) / 6;
  return d;
}
function vd(n = /* @__PURE__ */ new Date()) {
  const r = [];
  for (let d = 0; d <= 96; d++) {
    const p = +n - (96 - d) * 15 * 60 * 1e3;
    r.push([p, zl(new Date(p))]);
  }
  return r;
}
function lh({ onChange: n }) {
  const r = {}, d = {}, p = (X, H, nt, lt) => {
    r[X] = { entity_id: X, state: nt, attributes: lt, last_changed: new Date(Date.now() - 18e6).toISOString() }, d[X] = H;
  }, g = (X, H, nt) => {
    const lt = r[X], bt = H ?? lt.state;
    r[X] = { ...lt, state: bt, attributes: { ...lt.attributes, ...nt }, last_changed: bt === lt.state ? lt.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, y = (X, H, nt, lt) => p("binary_sensor." + be + (X ? X + "_" : "") + Mn(H), X, lt ? "on" : "off", { friendly_name: H, device_class: nt });
  Object.entries(ih).forEach(([X, H]) => {
    if (H.temperature != null && p("sensor." + be + X + "_temperature", X, String(H.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), H.humidity != null && p("sensor." + be + X + "_humidity", X, String(H.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), H.vacuum && p("vacuum." + be + "robot", X, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), H.climate && p("climate." + be + X, X, "heat", {
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
      const [nt, lt] = H.fan;
      p("fan." + be + X + "_" + Mn(nt), X, "on", lt != null ? { friendly_name: nt, percentage: lt, percentage_step: 10, oscillating: !0, direction: "forward", supported_features: 55 } : { friendly_name: nt, supported_features: 48 });
    }
    if (H.waterHeater && p("water_heater." + be + X, X, "eco", { friendly_name: "Water heater", current_temperature: 55, temperature: 60, min_temp: 40, max_temp: 75, target_temp_step: 1, operation_mode: "eco", operation_list: ["off", "eco", "electric", "gas"], away_mode: "off" }), H.valvePos) {
      const [nt, lt] = H.valvePos;
      p("valve." + be + X + "_" + Mn(nt), X, lt == null || lt ? "open" : "closed", { friendly_name: nt, device_class: "water", supported_features: 3 | (lt == null ? 0 : 12), ...lt == null ? {} : { current_position: lt } });
    }
    if (H.garage && p("cover." + be + X + "_" + Mn(H.garage), X, "closed", { friendly_name: H.garage, device_class: "garage", supported_features: 3 }), H.cover) {
      const [nt, lt, bt, rt] = H.cover;
      p("cover." + be + X + "_" + Mn(nt), X, bt ? "open" : "closed", { friendly_name: nt, device_class: lt, current_position: bt, ...rt != null ? { current_tilt_position: rt } : {} });
    }
    if (H.humidifier && p("humidifier." + be + X, X, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: H.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), H.solar && (p("sensor." + be + X + "_solar_power", X, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), p("sensor." + be + X + "_solar_today", X, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), H.valve && p("valve." + be + X + "_" + Mn(H.valve), X, "closed", { friendly_name: H.valve, device_class: "water" }), H.door && y(X, H.door, "door", H.doorOpen), H.window && y(X, H.window, "window", !1), H.motion && y(X, H.motion, "motion", !1), H.plant) {
      const [nt, lt, bt, rt, K] = H.plant, Y = be + Mn(nt), N = (Rt, st, U, qt, W) => p("sensor." + Y + "_" + Rt, X, String(U), { friendly_name: st, device_class: W, state_class: "measurement", unit_of_measurement: qt, plant_low: U < _n[Rt][0], plant_high: U > _n[Rt][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[Rt] });
      N("moisture", "Moisture", lt, "%", "moisture"), N("light", "Light", bt, "lx", "illuminance"), N("temperature", "Temperature", rt, "°C", "temperature"), N("fertility", "Fertility", K, "µS/cm", "conductivity");
      const yt = Object.entries({ moisture: lt, light: bt, temperature: rt, fertility: K }).filter(([Rt, st]) => st < _n[Rt][0] || st > _n[Rt][1]).map(([Rt, st]) => Rt + (st < _n[Rt][0] ? " low" : " high"));
      p("plant." + Y, X, yt.length ? "problem" : "ok", { friendly_name: nt, moisture: lt, brightness: bt, temperature: rt, conductivity: K, problem: yt.join(", ") || "none" });
    }
  }), p("alarm_control_panel." + be + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 39, code_format: "number", code_arm_required: !1, changed_by: "Matt" }), y(null, "Front door", "door", !1), y(null, "Smoke alarm", "smoke", !1), p("sensor." + be + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const w = {}, A = {};
  let q = null;
  function M() {
    const X = /* @__PURE__ */ new Date();
    Object.keys(r).forEach((H) => {
      H.endsWith("_solar_power") && (r[H] = { ...r[H], state: zl(X).toFixed(2) }), H.endsWith("_solar_today") && (r[H] = { ...r[H], state: sh(X).toFixed(1) });
    });
  }
  M();
  let D = 0;
  function I() {
    let X = !1;
    const H = ++D % 10 === 0, nt = (rt, K, Y) => {
      g(rt, K, Y), X = !0;
    };
    Object.entries(w).forEach(([rt, K]) => {
      const Y = r[rt].attributes.current_position, N = Y < K ? Math.min(K, Y + 10) : Math.max(K, Y - 10);
      N === K && delete w[rt], nt(rt, N === K ? N === 0 ? "closed" : "open" : K > Y ? "opening" : "closing", { current_position: N });
    }), Object.entries(A).forEach(([rt, K]) => {
      const Y = r[rt].attributes.current_tilt_position, N = Y < K ? Math.min(K, Y + 25) : Math.max(K, Y - 25);
      N === K && delete A[rt], nt(rt, null, { current_tilt_position: N });
    }), Object.keys(r).filter((rt) => rt.startsWith("climate.")).forEach((rt) => {
      const K = r[rt], Y = K.attributes, N = Y.current_temperature, yt = (K.state === "heat" || K.state === "auto") && N < Y.temperature - 0.05, Rt = (K.state === "cool" || K.state === "auto") && N > Y.temperature + 0.05, st = K.state === "off" ? "off" : yt ? "heating" : Rt ? "cooling" : "idle", U = H ? Math.round((N + (yt ? 0.1 : Rt ? -0.1 : 0)) * 10) / 10 : N;
      (U !== N || st !== Y.hvac_action) && nt(rt, null, { current_temperature: U, hvac_action: st });
    }), Object.keys(r).filter((rt) => rt.startsWith("humidifier.")).forEach((rt) => {
      const K = r[rt], Y = K.attributes, N = Y.current_humidity, yt = K.state === "on" && N < Y.humidity, Rt = yt && H ? N + 1 : N, st = K.state !== "on" ? "off" : yt ? "humidifying" : "idle";
      if (Rt !== N || st !== Y.action) {
        nt(rt, null, { current_humidity: Rt, action: st });
        const U = "sensor." + be + d[rt] + "_humidity";
        r[U] && nt(U, String(Rt));
      }
    });
    const lt = r["vacuum." + be + "robot"], bt = lt.attributes;
    lt.state === "cleaning" && H && nt(lt.entity_id, null, { battery_level: Math.max(5, bt.battery_level - 1) }), lt.state === "returning" && nt(lt.entity_id, "docked", {}), lt.state === "docked" && bt.battery_level < 100 && nt(lt.entity_id, null, { battery_level: Math.min(100, bt.battery_level + 2) }), q && Date.now() - q.at > 5e3 && (nt("alarm_control_panel." + be + "house", "armed_" + q.mode, {}), q = null), X && n();
  }
  const z = setInterval(I, 1e3), Q = setInterval(() => {
    M(), n();
  }, 60 * 1e3);
  function et(X, H, nt) {
    const lt = nt == null ? void 0 : nt.entity_id;
    if (!r[lt]) return !1;
    const bt = r[lt], rt = bt.attributes, K = (Y, N) => g(lt, Y, N);
    if (X === "climate" && (H === "set_temperature" && nt.temperature != null && K(null, { temperature: Math.max(rt.min_temp, Math.min(rt.max_temp, nt.temperature)) }), H === "set_hvac_mode" && K(nt.hvac_mode, nt.hvac_mode === "off" ? { hvac_action: "off" } : {}), H === "toggle" && K(bt.state === "off" ? "heat" : "off", bt.state === "off" ? {} : { hvac_action: "off" }), H === "set_temperature" && nt.target_temp_low != null && K(null, { target_temp_low: nt.target_temp_low, target_temp_high: nt.target_temp_high }), H === "set_fan_mode" && K(null, { fan_mode: nt.fan_mode }), H === "set_swing_mode" && K(null, { swing_mode: nt.swing_mode }), H === "set_preset_mode" && K(null, { preset_mode: nt.preset_mode }), H === "set_humidity" && K(null, { humidity: Math.max(rt.min_humidity, Math.min(rt.max_humidity, nt.humidity)) })), X === "fan" && (H === "set_percentage" && K(nt.percentage > 0 ? "on" : "off", { percentage: nt.percentage }), H === "oscillate" && K(null, { oscillating: nt.oscillating }), H === "set_direction" && K(null, { direction: nt.direction }), (H === "turn_on" || H === "turn_off" || H === "toggle") && K(H === "turn_on" || H === "toggle" && bt.state !== "on" ? "on" : "off")), X === "water_heater" && (H === "set_temperature" && K(null, { temperature: Math.max(rt.min_temp, Math.min(rt.max_temp, nt.temperature)) }), H === "set_operation_mode" && K(nt.operation_mode, { operation_mode: nt.operation_mode }), H === "set_away_mode" && K(null, { away_mode: nt.away_mode ? "on" : "off" }), H === "turn_on" || H === "turn_off" || H === "toggle")) {
      const Y = H === "turn_on" || H === "toggle" && bt.state === "off";
      K(Y ? "eco" : "off", { operation_mode: Y ? "eco" : "off" });
    }
    if (X === "cover") {
      const Y = H === "open_cover" ? 100 : H === "close_cover" ? 0 : H === "set_cover_position" ? nt.position : H === "toggle" ? rt.current_position > 0 ? 0 : 100 : null;
      H === "stop_cover" && (delete w[lt], delete A[lt], K(rt.current_position === 0 ? "closed" : "open")), Y != null && rt.current_position == null ? K(Y > 0 ? "open" : "closed") : Y != null && Y !== rt.current_position && (w[lt] = Y, K(Y > rt.current_position ? "opening" : "closing"));
      const N = H === "open_cover_tilt" ? 100 : H === "close_cover_tilt" ? 0 : H === "set_cover_tilt_position" ? nt.tilt_position : null;
      H === "stop_cover_tilt" && delete A[lt], N != null && rt.current_tilt_position != null && N !== rt.current_tilt_position && (A[lt] = N);
    }
    if (X === "humidifier" && (H === "set_humidity" && K(null, { humidity: Math.max(rt.min_humidity, Math.min(rt.max_humidity, nt.humidity)) }), H === "set_mode" && K(null, { mode: nt.mode }), H === "turn_on" || H === "turn_off" || H === "toggle")) {
      const Y = H === "turn_on" || H === "toggle" && bt.state !== "on";
      K(Y ? "on" : "off", { action: Y ? "idle" : "off" });
    }
    if (X === "vacuum" && (H === "start" && K("cleaning", { rooms: nt.rooms || rt.rooms }), H === "pause" && K("paused"), H === "return_to_base" && K("returning", { rooms: [] }), H === "locate" && K(null, { located: Date.now() }), H === "set_rooms" && K(null, { rooms: nt.rooms })), X === "valve") {
      const Y = H === "open_valve" || H === "toggle" && bt.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(H) && K(Y ? "open" : "closed", rt.current_position != null ? { current_position: Y ? 100 : 0 } : {}), H === "set_valve_position" && K(nt.position > 0 ? "open" : "closed", { current_position: nt.position });
    }
    if (X === "alarm_control_panel") {
      H === "alarm_disarm" && (q = null, K("disarmed", { changed_by: "Matt" }));
      const Y = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night", alarm_arm_vacation: "vacation" }[H];
      Y && (q = { mode: Y, at: Date.now() }, K("arming", { changed_by: "Matt" }));
    }
    return n(), !0;
  }
  function at(X, { madeUp: H = !0 } = {}) {
    const nt = H ? r : {}, lt = (X == null ? void 0 : X.states) || {}, bt = (X == null ? void 0 : X.entities) || {}, rt = (X == null ? void 0 : X.devices) || {}, K = (ot) => {
      var xt;
      const it = bt[ot];
      return it && (it.area_id || it.device_id && ((xt = rt[it.device_id]) == null ? void 0 : xt.area_id)) || null;
    }, Y = (ot) => {
      const it = bt[ot];
      return lt[ot] && lt[ot].state !== "unavailable" && !(it != null && it.hidden) && !(it != null && it.entity_category);
    }, N = {};
    Object.keys(lt).forEach((ot) => {
      const it = K(ot);
      it && Y(ot) && (N[it] || (N[it] = [])).push(ot);
    });
    const yt = { ...lt, ...nt }, Rt = (ot) => {
      var it, xt;
      return (xt = (it = yt[ot]) == null ? void 0 : it.attributes) == null ? void 0 : xt.device_class;
    }, st = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], U = Object.keys(lt).filter((ot) => ot.startsWith("vacuum.") && Y(ot)), qt = Object.values((X == null ? void 0 : X.areas) || {}).filter((ot) => !rh.has(ot.area_id)).map((ot) => {
      const it = ot.area_id, xt = N[it] || [], ft = (Ct) => xt.filter((_e) => _e.startsWith(Ct + ".")), kt = (Ct) => ft("sensor").filter((_e) => Rt(_e) === Ct), It = (Ct) => Object.keys(nt).filter((_e) => d[_e] === it && Ct(_e)), re = (Ct, _e) => Ct.length ? Ct : It(_e), gt = re(kt("temperature"), (Ct) => Ct.endsWith(it + "_temperature")), Ke = re(kt("humidity"), (Ct) => Ct.endsWith(it + "_humidity")), so = kt("power").filter((Ct) => /^(W|kW)$/.test(yt[Ct].attributes.unit_of_measurement || "")), en = ft("binary_sensor").filter((Ct) => Rt(Ct) === "moisture"), Eo = re(ft("plant"), (Ct) => Ct.startsWith("plant.")).map((Ct) => ({ id: Ct, readings: It((_e) => _e.startsWith("sensor." + Ct.split(".")[1] + "_")) })), Ga = [...ft("binary_sensor").filter((Ct) => st.includes(Rt(Ct))), ...It((Ct) => Ct.startsWith("binary_sensor."))];
      return {
        id: it,
        name: ot.name,
        icon: ot.icon,
        floor: ot.floor_id || null,
        readings: [...gt.slice(0, 1), ...Ke.slice(0, 1), ...en],
        power: so.length ? so.reduce((Ct, _e) => Ct + Number(yt[_e].state) * (yt[_e].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: ft("switch"),
        lights: ft("light"),
        actions: [
          ...ft("light"),
          ...re(ft("climate"), (Ct) => Ct.startsWith("climate.")),
          ...re(ft("cover"), (Ct) => Ct.startsWith("cover.")),
          ...re(ft("humidifier"), (Ct) => Ct.startsWith("humidifier.")),
          ...re(ft("valve"), (Ct) => Ct.startsWith("valve.")),
          ...ft("media_player"),
          ...ft("vacuum"),
          ...U.length ? [] : It((Ct) => Ct.startsWith("vacuum.")),
          ...ft("fan"),
          ...It((Ct) => Ct.startsWith("fan.")),
          ...ft("water_heater"),
          ...It((Ct) => Ct.startsWith("water_heater."))
        ],
        solar: It((Ct) => Ct.includes("_solar_")),
        plants: Eo,
        openings: Ga,
        alerts: [...en, ...Ga].filter((Ct) => {
          var _e;
          return ((_e = yt[Ct]) == null ? void 0 : _e.state) === "on";
        })
      };
    }).filter((ot) => ot.readings.length || ot.plugs.length || ot.actions.length || ot.solar.length || ot.plants.length), W = Object.keys(lt).find((ot) => /^sensor\..*(p1_meter_power|grid_power)$/.test(ot) && lt[ot].state !== "unavailable") || null, tt = (ot) => Object.keys(lt).filter((it) => it.startsWith(ot + ".") && Y(it)), B = tt("alarm_control_panel"), pt = U.length ? U : H ? ["vacuum." + be + "robot"] : [];
    return {
      states: yt,
      rooms: qt,
      grid: W,
      // any device's room, hidden ones too (Maintenance's batteries are mostly diagnostic)
      areaOf: (ot) => nt[ot] ? d[ot] : K(ot),
      vacuums: pt,
      homeVacuums: pt.filter((ot) => !qt.some((it) => it.actions.includes(ot))),
      security: {
        alarms: B.length ? B : H ? ["alarm_control_panel." + be + "house"] : [],
        locks: tt("lock"),
        openings: [...Object.keys(nt).filter((ot) => ot.startsWith("binary_sensor.")), ...H ? ["sensor." + be + "doorbell"] : []]
      }
    };
  }
  return { model: at, call: et, stop() {
    clearInterval(z), clearInterval(Q);
  } };
}
const Ra = {
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
}, Tr = (n) => n < 0 ? 0 : n > 1 ? 1 : n, Ol = (n) => {
  const r = String(n || "#000000").trim().replace("#", ""), d = r.length === 3 ? r.split("").map((p) => p + p).join("") : r;
  return [0, 2, 4].map((p) => parseInt(d.slice(p, p + 2), 16) || 0);
}, ch = (n) => "#" + n.map((r) => Math.round(Math.max(0, Math.min(255, r))).toString(16).padStart(2, "0")).join(""), yd = {}, Ba = (n, r, d) => {
  const p = n + r + d;
  return yd[p] || (yd[p] = ch(Ol(n).map((g, y) => g + (Ol(r)[y] - g) * d)));
}, xd = {}, wl = (n) => xd[n] || (xd[n] = Ol(n));
function Ap(n, r) {
  const d = String(n || "");
  return (d === "sunny" || d === "clear-night" ? "clear" : d === "partlycloudy" ? "partly" : d === "fog" ? "fog" : d === "lightning" || d === "lightning-rainy" ? "storm" : d === "snowy" || d === "snowy-rainy" ? "snow" : d === "rainy" || d === "pouring" || d === "hail" ? "rain" : "cloudy") + "/" + (d === "clear-night" || r ? "night" : "day");
}
function dh(n) {
  const r = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return r.partly = [Ba(r.clear[0], r.cloudy[0], 0.12), Ba(r.clear[1], r.cloudy[1], 0.12)], r.storm = [Ba(r.rain[0], "#000000", 0.22), Ba(r.rain[1], "#000000", 0.22)], r;
}
const Il = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], Fl = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], ql = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function ph(n, r = Ra) {
  const d = { ...Ra, ...r }, p = dh(d), g = String(n).split("/"), y = p[g[0]] ? g[0] : "clear", w = g[1] === "night", A = p[y][w ? 1 : 0], q = {
    night: w,
    clearness: y === "clear" ? 1 : y === "partly" ? 0.7 : 0.25,
    sky: A,
    skyStops: [A],
    skyT: 0,
    sun: { x: 45, y: w ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: w ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: w ? 1 : 0 },
    stars: Il.map(() => ({ o: 0 })),
    rain: Fl.map(() => ({ o: 0, dy: -16 })),
    snow: ql.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, M = (D) => Il.map(() => ({ o: D }));
  return y === "clear" ? w ? (q.moon.o = 1, q.stars = M(1)) : q.sun.o = 1 : y === "partly" ? (q.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: w ? 1 : 0 }, w ? (q.moon = { x: 34, y: 33, d: 48, o: 1 }, q.stars = M(0.7)) : q.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : y === "cloudy" || y === "fog" ? (q.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: w ? 1 : 0 }, w ? q.moon = { x: 40, y: 36, d: 40, o: 0 } : q.sun = { x: 40, y: 36, r: 20, o: 0 }) : (q.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, w ? q.moon = { x: 38, y: 28, d: 36, o: 0 } : q.sun = { x: 38, y: 28, r: 18, o: 0 }, y === "snow" ? q.snow = ql.map(() => ({ o: 1, dy: 0 })) : q.rain = Fl.map((D, I) => ({ o: y === "storm" && I === 1 ? 0 : 1, dy: 0 })), y === "storm" && (q.bolt = { o: 1, dy: 0 })), q;
}
const fh = [
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
], Sn = (n, r) => (fh[(r & 7) * 8 + (n & 7)] + 0.5) / 64, uh = 0, Tp = 1, Lp = 2, Dp = 3, Bp = 4, ro = 5, zi = 6, Un = 7, Ep = 8, kd = (n, r) => r <= 0.6665 && ((n - 0.5) * (n - 0.5) + (r - 0.2877) * (r - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (r - 0.416) * (r - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (r - 0.458) * (r - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && r >= 0.416), hh = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], mh = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((n) => [n[0] * 13 / 11, n[1] * 28 / 24]), gh = (n, r, d) => {
  let p = !1;
  for (let g = 0, y = n.length - 1; g < n.length; y = g++) {
    const w = n[g], A = n[y];
    w[1] > d != A[1] > d && r < (A[0] - w[0]) * (d - w[1]) / (A[1] - w[1]) + w[0] && (p = !p);
  }
  return p;
};
function bh(n, { size: r = 90, px: d = 2, oneBit: p = !1, colors: g = Ra, ink: y = "#26221e", paper: w = "#fbf9f6", clock: A = 0, idle: q = !1 } = {}) {
  const M = { ...Ra, ...g }, D = Math.sin, I = Math.PI * 2, z = Math.max(6, Math.round(r / d)), Q = z / 90, et = q ? Math.floor(A / 100) * 100 : 0, at = q ? D(I * et / 3600) : 0, X = q ? 1.8 * D(I * et / 6400) : 0, H = q ? 0.9 * D(I * et / 4100) : 0, nt = q ? 0.8 * D(I * et / 5200) : 0, lt = et / 3400 % 1, bt = q && n.bolt.o > 0.5 && (lt < 0.04 || lt > 0.08 && lt < 0.11), rt = new Array(z * z), K = new Uint8Array(z * z), Y = (W, tt, B, pt, ot) => {
    B == null || W < 0 || tt < 0 || W >= z || tt >= z || (pt >= 1 || pt > Sn(W + 5, tt + 3)) && (rt[tt * z + W] = B, K[tt * z + W] = ot);
  }, N = (W, tt, B, pt) => {
    for (let ot = Math.max(0, Math.floor(tt - B) - 1); ot <= Math.min(z - 1, tt + B + 1); ot++) for (let it = Math.max(0, Math.floor(W - B) - 1); it <= Math.min(z - 1, W + B + 1); it++) pt(it, ot, it + 0.5 - W, ot + 0.5 - tt);
  }, yt = n.skyStops || [n.sky], Rt = n.skyT || 0;
  for (let W = 0; W < z; W++) {
    const tt = n.night ? Tr(1 - (W + 0.5) / (z * 0.7)) * 0.85 : Tr(((W + 0.5) / z - 0.35) / 0.65) * 0.85;
    for (let B = 0; B < z; B++) {
      let pt = yt[0];
      if (yt.length > 1) {
        const ot = Rt * (yt.length - 1), it = Math.min(yt.length - 2, Math.floor(ot));
        pt = ot - it > Sn(B, W) ? yt[it + 1] : yt[it];
      }
      tt > Sn(B + 2, W + 5) && (pt = n.night ? Ba(pt, "#000000", 0.28) : Ba(pt, "#ffffff", 0.2)), rt[W * z + B] = bt ? Ba(pt, "#ffffff", 0.25) : pt;
    }
  }
  if (n.sun.o > 0.01) {
    const W = n.sun.x * Q, tt = n.sun.y * Q, B = Math.max(1, n.sun.r * Q);
    if (q) {
      const pt = B * (1.45 + 0.06 * at), ot = Ba(M.sun, "#ffffff", 0.55);
      if (N(W, tt, pt, (it, xt, ft, kt) => {
        const It = Math.sqrt(ft * ft + kt * kt);
        It > B && It < pt && Y(it, xt, ot, 0.26 * (1 - (It - B) / (pt - B)) * n.sun.o, uh);
      }), n.sun.o > 0.5) {
        const it = Math.floor(et / 500) % 2, xt = Math.max(1, B * 0.22);
        for (let ft = 0; ft < 8; ft++) if (ft % 2 === it) for (let kt = B + 1.5; kt < B + 1.5 + xt; kt += 0.7) Y(Math.floor(W + Math.cos(ft * Math.PI / 4) * kt), Math.floor(tt + Math.sin(ft * Math.PI / 4) * kt), M.sun, n.sun.o, Ep);
      }
    }
    N(W, tt, B, (pt, ot, it, xt) => {
      if (it * it + xt * xt > B * B) return;
      const ft = ((it * 0.643 + xt * 0.766) / B + 1) / 2;
      Y(pt, ot, Tr((ft - 0.62) / 0.38) > Sn(pt, ot) ? M.sunEdge : M.sun, n.sun.o, Tp);
    });
  }
  if (Il.forEach((W, tt) => {
    const B = n.stars[tt].o;
    if (B < 0.01) return;
    const pt = Math.floor(W[0] * Q), ot = Math.floor(W[1] * Q), it = q ? (Math.floor(et / 300) + tt * 3) % 6 : 0;
    if (it === 5) return;
    const xt = Math.round(W[2] * Q * (it === 4 ? 0.3 : it < 2 ? 1 : 0.6));
    Y(pt, ot, M.star, B, Un);
    for (let ft = 1; ft <= xt; ft++) {
      const kt = ft === xt && xt > 1 ? Ba(M.star, n.sky, 0.5) : M.star;
      Y(pt - ft, ot, kt, B, Un), Y(pt + ft, ot, kt, B, Un), Y(pt, ot - ft, kt, B, Un), Y(pt, ot + ft, kt, B, Un);
    }
  }), n.moon.o > 0.01) {
    const W = Math.max(1.5, n.moon.d * Q * 0.37), tt = n.moon.x * Q, B = n.moon.y * Q + (q && nt > 0.4 ? -1 : 0), pt = tt + 0.547 * W, ot = B - 0.503 * W, it = 0.82 * W, xt = Ba(M.moon, "#ffffff", 0.6);
    N(tt, B, W, (ft, kt, It, re) => {
      if (It * It + re * re > W * W) return;
      const gt = ft + 0.5 - pt, Ke = kt + 0.5 - ot;
      gt * gt + Ke * Ke <= it * it || Y(ft, kt, Tr((re + W) / (2 * W) * 1.1 - 0.1) > Sn(ft, kt) ? M.moon : xt, n.moon.o, Lp);
    });
  }
  const st = Math.max(2, Math.round(15.65 * Q)), U = Math.max(1, Math.round(5.87 * Q * 0.5));
  Fl.forEach((W, tt) => {
    const B = n.rain[tt];
    let pt = B.dy, ot = B.o;
    if (ot < 0.01) return;
    if (q) {
      const ft = (et / 950 + tt / 3) % 1;
      pt += -5 + ft * 14, ot *= ft < 0.18 ? ft / 0.18 : ft > 0.72 ? (1 - ft) / 0.28 : 1;
    }
    const it = (W[0] + 3 + X) * Q, xt = (W[1] + pt) * Q;
    for (let ft = 0; ft < st; ft++) for (let kt = 0; kt < U; kt++) Y(Math.floor(it - 0.208 * ft) + kt, Math.floor(xt) + ft, M.rain, ot, Bp);
  });
  const qt = Math.max(0, Math.round(7.34 * Q / 2.6));
  if (ql.forEach((W, tt) => {
    const B = n.snow[tt];
    let pt = B.dy, ot = 0, it = B.o;
    if (it < 0.01) return;
    if (q) {
      const kt = (et / 3200 + tt / 5) % 1;
      pt += -6 + kt * 14, ot = 1.5 * D(I * (kt * 1.5 + tt / 5)), it *= kt < 0.2 ? kt / 0.2 : kt > 0.75 ? (1 - kt) / 0.25 : 1;
    }
    const xt = Math.floor((W[0] + 3.67 + ot + X) * Q), ft = Math.floor((W[1] + 3.67 + pt) * Q);
    Y(xt, ft, M.snow, it, ro);
    for (let kt = 1; kt <= qt; kt++)
      Y(xt - kt, ft, M.snow, it, ro), Y(xt + kt, ft, M.snow, it, ro), Y(xt, ft - kt, M.snow, it, ro), Y(xt, ft + kt, M.snow, it, ro), qt > 1 && kt < qt && (Y(xt - kt, ft - kt, M.snow, it, ro), Y(xt + kt, ft - kt, M.snow, it, ro), Y(xt - kt, ft + kt, M.snow, it, ro), Y(xt + kt, ft + kt, M.snow, it, ro));
  }), n.bolt.o > 0.01)
    if (z >= 30) {
      const W = 39 + X, tt = 50 + n.bolt.dy;
      for (let B = Math.floor(tt * Q); B <= (tt + 28) * Q; B++) for (let pt = Math.floor(W * Q); pt <= (W + 13) * Q; pt++)
        gh(mh, (pt + 0.5) / Q - W, (B + 0.5) / Q - tt) && Y(pt, B, M.sun, n.bolt.o, zi);
    } else {
      const W = z / 18, tt = 7, B = 10 + Math.round(n.bolt.dy * 0.2);
      hh.forEach((pt, ot) => pt.split("").forEach((it, xt) => {
        if (it !== "#") return;
        const ft = Math.floor((tt + xt) * W), kt = Math.floor((B + ot) * W);
        for (let It = kt; It < Math.max(kt + 1, Math.floor((B + ot + 1) * W)); It++) for (let re = ft; re < Math.max(ft + 1, Math.floor((tt + xt + 1) * W)); re++) Y(re, It, M.sun, n.bolt.o, zi);
      }));
    }
  if (n.cloud.o > 0.01) {
    const W = Math.max(3, n.cloud.w * Q), tt = W * 0.6665, B = (n.cloud.x + X) * Q - W / 2, pt = (n.cloud.y + H) * Q - tt / 2, ot = Ba(M.cloudDay, M.cloudNight, Math.round(n.cloud.f * 4) / 4), it = Ba(ot, "#000000", 0.16);
    for (let xt = Math.max(0, Math.floor(pt) - 1); xt <= Math.min(z - 1, pt + tt + 1); xt++) for (let ft = Math.max(0, Math.floor(B) - 1); ft <= Math.min(z - 1, B + W + 1); ft++) {
      const kt = (ft + 0.5 - B) / W, It = (xt + 0.5 - pt) / W;
      kd(kt, It) && Y(ft, xt, !kd(kt, It + 1 / W) || Tr((It - 0.42) / 0.25) * 0.8 > Sn(ft, xt) ? it : ot, n.cloud.o, Dp);
    }
  }
  return wh(rt, K, z, z, { oneBit: p, ink: y, paper: w, snowInk: !n.night });
}
function wh(n, r, d, p, { oneBit: g, ink: y, paper: w, snowInk: A }) {
  const q = new Uint8ClampedArray(d * p * 4), M = wl(y), D = wl(w);
  for (let I = 0; I < p; I++) for (let z = 0; z < d; z++) {
    const Q = I * d + z, et = r[Q];
    if (n[Q] == null) continue;
    let at = wl(n[Q]);
    if (g) {
      let X;
      et === Bp || et === Ep ? X = !0 : et === ro ? X = A : et === Un || et === zi ? X = !1 : X = Math.round((0.2126 * at[0] + 0.7152 * at[1] + 0.0722 * at[2]) / 255 * 4) / 4 <= Sn(z, I), (et === Tp || et === Lp || et === Dp || et === zi) && (z > 0 && r[Q - 1] !== et || z < d - 1 && r[Q + 1] !== et || I > 0 && r[Q - d] !== et || I < p - 1 && r[Q + d] !== et) && (X = !0), at = X ? M : D;
    }
    q[Q * 4] = at[0], q[Q * 4 + 1] = at[1], q[Q * 4 + 2] = at[2], q[Q * 4 + 3] = 255;
  }
  return { w: d, h: p, data: q };
}
const Lo = (n) => n < 0 ? 0 : n > 1 ? 1 : n, Wl = (n) => {
  const r = String(n || "#000000").trim().replace("#", ""), d = r.length === 3 ? r.split("").map((p) => p + p).join("") : r;
  return [0, 2, 4].map((p) => parseInt(d.slice(p, p + 2), 16) || 0);
}, vh = (n) => "#" + n.map((r) => Math.round(Math.max(0, Math.min(255, r))).toString(16).padStart(2, "0")).join(""), Md = {}, Ea = (n, r, d) => {
  const p = n + r + d;
  return Md[p] || (Md[p] = vh(Wl(n).map((g, y) => g + (Wl(r)[y] - g) * d)));
}, Sd = {}, qi = (n) => Sd[n] || (Sd[n] = Wl(n));
function yh(n) {
  const r = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return r.partly = [Ea(r.clear[0], r.cloudy[0], 0.12), Ea(r.clear[1], r.cloudy[1], 0.12)], r.storm = [Ea(r.rain[0], "#000000", 0.22), Ea(r.rain[1], "#000000", 0.22)], r;
}
const xh = [
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
], Ao = (n, r) => (xh[(r & 7) * 8 + (n & 7)] + 0.5) / 64, Rp = 1, Pp = 2, Hp = 3, Np = 4, Yn = 5, Gi = 6, jl = 7, Op = 8, _d = (n, r) => r <= 0.6665 && ((n - 0.5) * (n - 0.5) + (r - 0.2877) * (r - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (r - 0.416) * (r - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (r - 0.458) * (r - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && r >= 0.416), kh = (n, r, d) => {
  let p = !1;
  for (let g = 0, y = n.length - 1; g < n.length; y = g++) {
    const w = n[g], A = n[y];
    w[1] > d != A[1] > d && r < (A[0] - w[0]) * (d - w[1]) / (A[1] - w[1]) + w[0] && (p = !p);
  }
  return p;
};
function Mh(n, r, d, p, { oneBit: g, ink: y, paper: w, snowInk: A }) {
  const q = new Uint8ClampedArray(d * p * 4), M = qi(y), D = qi(w);
  for (let I = 0; I < p; I++) for (let z = 0; z < d; z++) {
    const Q = I * d + z, et = r[Q];
    if (n[Q] == null) continue;
    let at = qi(n[Q]);
    if (g) {
      let X;
      et === Np || et === Op ? X = !0 : et === Yn ? X = A : et === jl || et === Gi ? X = !1 : X = Math.round((0.2126 * at[0] + 0.7152 * at[1] + 0.0722 * at[2]) / 255 * 4) / 4 <= Ao(z, I), (et === Rp || et === Pp || et === Hp || et === Gi) && (z > 0 && r[Q - 1] !== et || z < d - 1 && r[Q + 1] !== et || I > 0 && r[Q - d] !== et || I < p - 1 && r[Q + d] !== et) && (X = !0), at = X ? M : D;
    }
    q[Q * 4] = at[0], q[Q * 4 + 1] = at[1], q[Q * 4 + 2] = at[2], q[Q * 4 + 3] = 255;
  }
  return { w: d, h: p, data: q };
}
const Sh = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, _h = (n) => Ap(n, !1).split("/")[0], vl = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let r = Math.imul(n ^ n >>> 15, 1 | n);
  return r = r + Math.imul(r ^ r >>> 7, 61 | r) ^ r, ((r ^ r >>> 14) >>> 0) / 4294967296;
}, Ch = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", Ah = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", Th = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", Lh = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", Dh = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], Bh = [".##", "##.", ".#.", "#.."];
function Ip(n, { width: r, height: d, colors: p, wave: g = 0.38, soft: y = 6, glow: w = 0.6, columns: A = 6 }) {
  const q = { ...Ra, dawn: "#e5a77e", ...p }, M = yh(q), D = r, I = d, z = D / A, Q = z / 2, et = Math.PI * 2, at = n.length ? n : [{ cond: "cloudy", night: !1 }], X = [...Array(A * 2)].map((bt, rt) => {
    const K = at[Math.min(rt, at.length - 1)], Y = _h(K.cond), N = rt % 2 === 1;
    return { cond: K.cond, k: Y, night: N, sky: M[Y][N ? 1 : 0], cover: Sh[Y] };
  }), H = (bt) => I * (0.5 - g * Math.cos(et * (bt / z - 0.25)));
  return { C: q, S: X, W: D, H: I, cw: z, sw: Q, TAU: et, yb: H, side: (bt, rt, K) => {
    const Y = (bt ? H(rt) - K : K - H(rt)) / Math.max(3, y * 1.4) + 0.5;
    return Y <= 0 ? 0 : Y >= 1 ? 1 : Y;
  }, glowAt: (bt) => {
    const rt = ((bt / z - 0.25) % 1 + 1) % 1, K = Math.max(0, Math.min(A - 1, Math.round(bt / z - 0.25))), Y = Math.max(0, Math.min(A - 1, Math.round(bt / z - 0.75))), N = 1 - (X[2 * K].cover + X[2 * Y + 1].cover) / 2, yt = Math.sin(Math.PI * Math.min(1, Math.max(0, H(bt) / I)));
    return { c: rt < 0.5 ? q.dusk : q.dawn, a: w * (0.2 + 0.8 * N) * yt * yt };
  }, soft: y, tw: z * 0.3, sy: I / 90 };
}
function Fp(n, { clock: r = 0, ambient: d = !1, seed: p = 1 }) {
  const { S: g, sw: y, side: w, C: A, TAU: q, sy: M, H: D } = n, I = r, z = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  g.forEach((at, X) => {
    const H = vl(p * 977 + X * 131 + 7), nt = (X + 0.5) * y, lt = at.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[at.k] : 0;
    for (let bt = 0; bt < lt; bt++) {
      const rt = nt + (H() - 0.5) * y * 1.6, K = (6 + H() * 76) * M, Y = H() < 0.35, N = 1.8 + H() * 1.6, yt = w(!0, rt, K) * (Y ? 0.95 : 0.7) * (d ? 0.6 + 0.4 * Math.sin(q * I / 2600 + bt * 1.7 + X) : 1);
      yt >= 0.03 && z.stars.push({ x: rt, y: K, big: Y, size: N, o: yt });
    }
    if (!at.night && (at.k === "clear" || at.k === "partly")) {
      const bt = nt + (H() - 0.5) * y * 0.3, rt = Math.min(15, y * 0.29);
      z.suns.push({ x: bt, y: 32 * M, rad: rt, halo: rt * 2.8 * (d ? 1 + 0.07 * Math.sin(q * I / 3600 + X) : 1) });
    }
    if (at.night && (at.k === "clear" || at.k === "partly")) {
      const bt = Math.min(0.78, y * 0.55 / 34), rt = nt - 23 * bt + (H() - 0.5) * y * 0.2;
      z.moons.push({ x: rt + 23 * bt, y: (4 + (d ? 0.8 * Math.sin(q * I / 5200 + X) : 0)) * M + 23 * bt, d: 46 * bt });
    }
  });
  const Q = Math.max(56, Math.min(100, D * 0.45)), et = Math.max(1, y / (Q * 2.4));
  return g.forEach((at, X) => {
    const H = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[at.k];
    if (!H) return;
    const nt = at.k === "partly" ? 1 : Math.round(H * et), lt = vl(p * 577 + X * 71 + 3), bt = (X + 0.5) * y, rt = at.k === "rain" || at.k === "storm" || at.night ? A.cloudNight : A.cloudDay, K = at.night ? 0.82 : at.k === "storm" ? 0.75 : 1;
    for (let Y = 0; Y < nt; Y++) {
      const N = Q / 46 * (at.k === "partly" ? 1 : 0.8 + lt() * 0.4), yt = bt + (at.k === "partly" ? y * 0.12 : ((Y + 0.5) / nt - 0.5) * y * 0.95 + (lt() - 0.5) * y * 0.5 / nt), Rt = (at.k === "partly" ? 40 : 6 + lt() * 26) * M, st = d ? 2.5 * Math.sin(q * I / 9e3 + X * 1.3 + Y * 2.1) : 0, U = d ? 0.9 * Math.sin(q * I / 6100 + X + Y) : 0;
      z.clouds.push({ x: yt - 23 * N + st, y: Rt - 15.33 * N + U, w: 46 * N, h: 30.66 * N, fill: rt, o: K * (nt > 1 && Y === 0 ? 0.85 : 1) });
    }
  }), g.forEach((at, X) => {
    const H = vl(p * 313 + X * 29 + 11), nt = (X + 0.5) * y, lt = at.cond === "pouring" ? 16 : at.cond === "rainy" || at.cond === "hail" ? 9 : at.cond === "lightning-rainy" ? 12 : at.cond === "snowy-rainy" ? 5 : 0;
    for (let rt = 0; rt < lt; rt++) {
      let K = nt + (H() - 0.5) * y * 1.05, Y = 44 + H() * 36, N = 1;
      if (d) {
        const Rt = ((Y - 44 + I * 0.04) % 36 + 36) % 36;
        K -= 0.21 * (Rt - (Y - 44)), Y = 44 + Rt, N = Math.min(1, Rt / 6, (36 - Rt) / 6);
      }
      Y *= M;
      const yt = w(at.night, K, Y) * N;
      yt >= 0.05 && z.drops.push({ x: K, y: Y, o: yt });
    }
    const bt = at.cond === "snowy" ? 11 : at.cond === "snowy-rainy" ? 6 : 0;
    for (let rt = 0; rt < bt; rt++) {
      let K = nt + (H() - 0.5) * y * 1.05, Y = 40 + H() * 44, N = 1;
      if (d) {
        const Rt = ((Y - 40 + I * 9e-3) % 44 + 44) % 44;
        Y = 40 + Rt, K += 1.6 * Math.sin(q * I / 2800 + rt * 1.9 + X), N = Math.min(1, Rt / 6, (44 - Rt) / 6);
      }
      Y *= M;
      const yt = w(at.night, K, Y) * N;
      yt >= 0.05 && z.flakes.push({ x: K, y: Y, o: yt });
    }
    if (at.k === "fog") {
      const rt = at.night ? "#c8ccd6" : "#ffffff", K = at.night ? 0.28 : 0.62, Y = d ? 4 * Math.sin(q * I / 8e3 + X) : 0;
      for (let N = 0; N < 4; N++) z.fogs.push({ x: nt - y * 0.75 + N % 2 * y * 0.18 + (N % 2 ? Y : -Y), y: (30 + N * 13) * M, w: y * 1.3, c: rt, a: K });
    }
    if (at.k === "storm") {
      const rt = (I / 3400 + X * 0.37) % 1;
      z.bolts.push({ x: nt + (H() - 0.5) * y * 0.3 - 5, y: 36 * M, o: d && !(rt < 0.05 || rt > 0.09 && rt < 0.12) ? 0.8 : 1 });
    }
  }), z;
}
function Eh(n, r, d, p, g, y, w, A) {
  const { S: q, C: M, cw: D, yb: I, glowAt: z, soft: Q, tw: et, sy: at } = n, X = new Array(d * p), H = new Uint8Array(d * p), nt = new Uint8Array(d * p), lt = (W, tt, B, pt, ot) => {
    B == null || W < 0 || tt < 0 || W >= d || tt >= p || (pt >= 1 || pt > Ao(W + 5, tt + 3)) && (X[tt * d + W] = B, H[tt * d + W] = ot);
  }, bt = (W, tt, B, pt) => {
    for (let ot = Math.max(0, Math.floor(tt - B) - 1); ot <= Math.min(p - 1, tt + B + 1); ot++) for (let it = Math.max(0, Math.floor(W - B) - 1); it <= Math.min(d - 1, W + B + 1); it++) pt(it, ot, it + 0.5 - W, ot + 0.5 - tt);
  }, rt = (W, tt, B) => {
    for (let ot = 0; ot < W.length - 1; ot++) {
      const it = (ot + tt) * D;
      if (B < it - et / 2) return [W[ot], W[ot], 0];
      if (B <= it + et / 2) return [W[ot], W[ot + 1], (B - it + et / 2) / et];
    }
    const pt = W[W.length - 1];
    return [pt, pt, 0];
  }, K = q.filter((W) => !W.night).map((W) => W.sky), Y = q.filter((W) => W.night).map((W) => W.sky), N = Q / y, yt = 16 * at / y;
  for (let W = 0; W < d; W++) {
    const tt = (W + 0.5) * g, B = I(tt) / y, pt = rt(K, 0.75, tt), ot = rt(Y, 1.25, tt), it = z(tt);
    for (let xt = 0; xt < p; xt++) {
      const ft = Ao(W, xt), kt = xt + 0.5 - B, It = (N > 0.01 ? Lo(0.5 + kt / N) : kt > 0 ? 1 : 0) > ft;
      let re = It ? pt[2] > ft ? pt[1] : pt[0] : ot[2] > ft ? ot[1] : ot[0];
      (It ? Lo(((xt + 0.5) / p - 0.45) / 0.55) * 0.7 : Lo(1 - (xt + 0.5) / (p * 0.55)) * 0.7) > Ao(W + 2, xt + 5) && (re = It ? Ea(re, "#ffffff", 0.18) : Ea(re, "#000000", 0.25)), It && kt >= 0 && kt < yt && it.a * 1.3 * (1 - kt / yt) > Ao(W + 6, xt + 1) && (re = it.c), X[xt * d + W] = re, nt[xt * d + W] = It ? 0 : 1;
    }
  }
  const Rt = Ea(M.sun, "#ffffff", 0.55), st = Ea(M.moon, "#ffffff", 0.6);
  r.stars.forEach((W) => {
    const tt = Math.floor(W.x / g), B = Math.floor(W.y / y);
    if (tt < 0 || B < 0 || tt >= d || B >= p || !nt[B * d + tt] || W.o < 0.15) return;
    const pt = W.o > 0.45 ? M.star : Ea(M.star, X[B * d + tt], 0.5), ot = W.big && W.o > 0.6 ? Math.floor(W.size / g) : 0;
    lt(tt, B, pt, 1, jl);
    for (let it = 1; it <= ot; it++) [[tt - it, B], [tt + it, B], [tt, B - it], [tt, B + it]].forEach((xt) => {
      xt[0] >= 0 && xt[1] >= 0 && xt[0] < d && xt[1] < p && nt[xt[1] * d + xt[0]] && lt(xt[0], xt[1], pt, 1, jl);
    });
  }), r.suns.forEach((W) => {
    const tt = Math.max(1.5, W.rad / g), B = W.x / g, pt = W.y / y, ot = W.halo / g * 0.85;
    if (bt(B, pt, ot, (it, xt, ft, kt) => {
      const It = Math.sqrt(ft * ft + kt * kt);
      It > tt && It < ot && !nt[xt * d + it] && lt(it, xt, Rt, 0.3 * (1 - (It - tt) / (ot - tt)), 0);
    }), A) {
      const it = Math.floor(w / 500) % 2, xt = Math.max(1, tt * 0.3);
      for (let ft = 0; ft < 8; ft++) if (ft % 2 === it) for (let kt = tt + 1.2; kt < tt + 1.2 + xt; kt += 0.7) lt(Math.floor(B + Math.cos(ft * Math.PI / 4) * kt), Math.floor(pt + Math.sin(ft * Math.PI / 4) * kt), M.sun, 1, Op);
    }
    bt(B, pt, tt, (it, xt, ft, kt) => {
      ft * ft + kt * kt <= tt * tt && lt(it, xt, Lo(((kt / tt + 1) / 2 - 0.6) / 0.4) > Ao(it, xt) ? M.sunEdge : M.sun, 1, Rp);
    });
  }), r.moons.forEach((W) => {
    const tt = Math.max(1.5, W.d * 0.37 / g), B = W.x / g, pt = W.y / y, ot = B + 0.547 * tt, it = pt - 0.503 * tt, xt = 0.82 * tt;
    bt(B, pt, tt, (ft, kt, It, re) => {
      if (It * It + re * re > tt * tt) return;
      const gt = ft + 0.5 - ot, Ke = kt + 0.5 - it;
      gt * gt + Ke * Ke > xt * xt && lt(ft, kt, Lo((re + tt) / (2 * tt) * 1.1 - 0.1) > Ao(ft, kt) ? M.moon : st, 1, Pp);
    });
  }), r.clouds.forEach((W) => {
    const tt = Math.max(3, W.w / g), B = tt * 0.6665, pt = W.x / g, ot = W.y / y, it = Ea(W.fill, "#000000", 0.16);
    for (let xt = Math.max(0, Math.floor(ot) - 1); xt <= Math.min(p - 1, ot + B + 1); xt++) for (let ft = Math.max(0, Math.floor(pt) - 1); ft <= Math.min(d - 1, pt + tt + 1); ft++) {
      const kt = (ft + 0.5 - pt) / tt, It = (xt + 0.5 - ot) / tt;
      _d(kt, It) && lt(ft, xt, !_d(kt, It + 1 / tt) || Lo((It - 0.42) / 0.25) * 0.8 > Ao(ft, xt) ? it : W.fill, W.o, Hp);
    }
  }), r.fogs.forEach((W) => {
    const tt = Math.floor(W.y / y), B = Math.max(tt, Math.floor((W.y + 6 * at) / y) - 1), pt = Math.floor(W.x / g), ot = Math.floor((W.x + W.w) / g);
    for (let it = tt; it <= B; it++) for (let xt = pt; xt <= ot; xt++) {
      const ft = (xt - pt) / Math.max(1, ot - pt);
      lt(xt, it, W.c, W.a * (ft < 0.25 ? ft / 0.25 : ft > 0.75 ? (1 - ft) / 0.25 : 1), 0);
    }
  });
  const U = Math.max(2, Math.round(9 / y));
  r.drops.forEach((W) => {
    const tt = W.x / g, B = Math.floor(W.y / y);
    for (let pt = 0; pt < U; pt++) lt(Math.floor(tt - 0.208 * pt * y / g), B + pt, M.rain, W.o, Np);
  });
  const qt = Math.max(0, Math.round(4.4 / g / 2.6));
  return r.flakes.forEach((W) => {
    const tt = Math.floor(W.x / g), B = Math.floor(W.y / y);
    lt(tt, B, M.snow, W.o, Yn);
    for (let pt = 1; pt <= qt; pt++)
      lt(tt - pt, B, M.snow, W.o, Yn), lt(tt + pt, B, M.snow, W.o, Yn), lt(tt, B - pt, M.snow, W.o, Yn), lt(tt, B + pt, M.snow, W.o, Yn);
  }), r.bolts.forEach((W) => {
    if (g <= 3.5)
      for (let tt = Math.floor(W.y / y); tt <= (W.y + 24) / y; tt++) for (let B = Math.floor(W.x / g); B <= (W.x + 11) / g; B++)
        kh(Dh, (B + 0.5) * g - W.x, (tt + 0.5) * y - W.y) && lt(B, tt, M.sun, 1, Gi);
    else {
      const tt = Math.round(W.x / g), B = Math.round(W.y / y);
      Bh.forEach((pt, ot) => pt.split("").forEach((it, xt) => {
        it === "#" && lt(tt + xt, B + ot, M.sun, 1, Gi);
      }));
    }
  }), { col: X, ids: H };
}
function Rh(n, r) {
  const d = r.px, p = Math.max(6, Math.round(r.width / d)), g = Math.max(6, Math.round(r.height / d)), y = r.width / p, w = r.height / g, A = r.ambient ? Math.floor((r.clock || 0) / 100) * 100 : 0, q = (Q) => {
    const et = Ip(Q, r);
    return Eh(et, Fp(et, { clock: A, ambient: r.ambient, seed: r.seed }), p, g, y, w, A, r.ambient);
  }, M = q(n), D = r.reveal == null ? 1 : Lo(r.reveal);
  let I = M.col, z = M.ids;
  if (D < 1) {
    const Q = r.prev ? q(r.prev) : null, et = D * (p + 12);
    I = new Array(p * g), z = new Uint8Array(p * g);
    for (let at = 0; at < p * g; at++) {
      const X = at % p, H = at / p | 0;
      (r.reduce ? D : Lo((et - X) / 12)) > Ao(X, H) ? (I[at] = M.col[at], z[at] = M.ids[at]) : Q ? (I[at] = Q.col[at], z[at] = Q.ids[at]) : (I[at] = null, z[at] = 255);
    }
  }
  return Mh(I, z, p, g, { oneBit: r.oneBit, ink: r.ink || "#26221e", paper: r.paper || "#fbf9f6", snowInk: !1 });
}
function Ph(n, r, d) {
  const p = d.width, g = d.height, y = d.reveal == null ? 1 : Lo(d.reveal), w = (z, Q) => {
    const et = Ip(Q, d);
    Hh(z, et, Fp(et, d));
  };
  if (n.clearRect(0, 0, p, g), y >= 1) {
    w(n, r);
    return;
  }
  if (d.prev && w(n, d.prev), d.reduce) {
    n.save(), n.globalAlpha = y, w(n, r), n.restore();
    return;
  }
  const A = n.canvas, q = A.__wxOff || (A.__wxOff = document.createElement("canvas"));
  (q.width !== A.width || q.height !== A.height) && (q.width = A.width, q.height = A.height);
  const M = q.getContext("2d");
  M.setTransform(n.getTransform()), M.clearRect(0, 0, p, g), w(M, r);
  const D = y * (p + 64) - 64, I = M.createLinearGradient(D, 0, D + 64, 0);
  I.addColorStop(0, "rgba(0,0,0,1)"), I.addColorStop(1, "rgba(0,0,0,0)"), M.globalCompositeOperation = "destination-in", M.fillStyle = I, M.fillRect(0, 0, p, g), M.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(q, 0, 0), n.restore();
}
function Hh(n, r, d) {
  const { W: p, H: g, S: y, C: w, cw: A, yb: q, glowAt: M, soft: D, tw: I, sy: z } = r, Q = n.getTransform().a || 1, et = (U) => {
    n.shadowColor = U ? "rgba(28,18,8,.22)" : "transparent", n.shadowBlur = U ? 4 * Q : 0, n.shadowOffsetY = U ? 1.5 * Q : 0;
  }, at = (U, qt) => {
    const W = qi(U);
    return "rgba(" + W[0] + "," + W[1] + "," + W[2] + "," + Math.max(0, Math.min(1, qt)).toFixed(3) + ")";
  }, X = (U, qt) => {
    const W = n.createLinearGradient(0, 0, p, 0);
    W.addColorStop(0, U[0]);
    for (let tt = 0; tt < U.length - 1; tt++) {
      const B = (tt + qt) * A, pt = (B - I / 2) / p, ot = (B + I / 2) / p;
      pt > 0 && pt < 1 && W.addColorStop(pt, U[tt]), ot > 0 && ot < 1 && W.addColorStop(ot, U[tt + 1]);
    }
    return W.addColorStop(1, U[U.length - 1]), W;
  }, H = Math.max(24, Math.ceil(p / 4)), nt = (U, qt) => {
    n.beginPath();
    for (let W = 0; W <= H; W++) {
      const tt = p * W / H, B = U == null ? 0 : q(tt) + U;
      W ? n.lineTo(tt, B) : n.moveTo(tt, B);
    }
    for (let W = H; W >= 0; W--) {
      const tt = p * W / H;
      n.lineTo(tt, q(tt) + qt);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = X(y.filter((U) => !U.night).map((U) => U.sky), 0.75), n.fillRect(0, 0, p, g);
  const lt = n.createLinearGradient(0, 0, p, 0);
  for (let U = 0; U <= 64; U++) {
    const qt = M(p * U / 64);
    lt.addColorStop(U / 64, at(qt.c, Math.min(1, qt.a)));
  }
  n.fillStyle = lt;
  for (let U = 0; U < 8; U++)
    n.globalAlpha = 1 - U / 8, nt(U * 2 * z, (U + 1) * 2 * z);
  n.fillStyle = X(y.filter((U) => U.night).map((U) => U.sky), 1.25);
  const bt = Math.max(0.5, D), rt = 6;
  n.globalAlpha = 1, nt(null, -bt);
  for (let U = 0; U < rt; U++)
    n.globalAlpha = 1 - (U + 0.5) / rt, nt(-bt + 2 * bt * U / rt, -bt + 2 * bt * (U + 1) / rt);
  n.globalAlpha = 1;
  const K = new Path2D(Th), Y = new Path2D(Ah), N = new Path2D(Ch), yt = new Path2D(Lh);
  n.fillStyle = w.star, d.stars.forEach((U) => {
    n.globalAlpha = U.o, U.big ? (n.save(), n.translate(U.x, U.y), n.scale(U.size, U.size), n.fill(K), n.restore()) : (n.beginPath(), n.arc(U.x, U.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const Rt = Ea(w.sun, "#ffffff", 0.55);
  d.suns.forEach((U) => {
    const qt = n.createRadialGradient(U.x, U.y, 0, U.x, U.y, U.halo);
    qt.addColorStop(0, at(Rt, 0.42)), qt.addColorStop(0.7, at(Rt, 0)), n.fillStyle = qt, n.beginPath(), n.arc(U.x, U.y, U.halo, 0, Math.PI * 2), n.fill();
    const W = n.createLinearGradient(0, U.y - U.rad, 0, U.y + U.rad);
    W.addColorStop(0.6, w.sun), W.addColorStop(1, w.sunEdge), n.fillStyle = W, et(!0), n.beginPath(), n.arc(U.x, U.y, U.rad, 0, Math.PI * 2), n.fill(), et(!1);
  });
  const st = Ea(w.moon, "#ffffff", 0.6);
  d.moons.forEach((U) => {
    n.save(), n.translate(U.x - U.d / 2, U.y - U.d / 2), n.scale(U.d / 46, U.d / 46);
    const qt = n.createLinearGradient(0, 6, 0, 40);
    qt.addColorStop(0, st), qt.addColorStop(1, w.moon), n.fillStyle = qt, et(!0), n.fill(Y), et(!1), n.restore();
  }), d.clouds.forEach((U) => {
    n.save(), n.globalAlpha = U.o, n.translate(U.x, U.y), n.scale(U.w / 46, U.h / 30.66), n.translate(-4, -9.67), n.fillStyle = U.fill, et(!0), n.fill(N), et(!1), n.restore();
  }), d.fogs.forEach((U) => {
    const qt = n.createLinearGradient(U.x, 0, U.x + U.w, 0);
    qt.addColorStop(0, at(U.c, 0)), qt.addColorStop(0.25, at(U.c, U.a)), qt.addColorStop(0.75, at(U.c, U.a)), qt.addColorStop(1, at(U.c, 0)), n.fillStyle = qt, n.fillRect(U.x, U.y, U.w, 6 * z);
  }), n.fillStyle = w.rain, d.drops.forEach((U) => {
    n.save(), n.globalAlpha = U.o, n.translate(U.x, U.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = w.snow, d.flakes.forEach((U) => {
    n.globalAlpha = U.o, n.beginPath(), n.arc(U.x, U.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = w.sun, d.bolts.forEach((U) => {
    n.save(), n.globalAlpha = U.o, n.translate(U.x, U.y), n.fill(yt), n.restore();
  }), n.restore();
}
const Nh = (n) => n === "sunny" ? "clear" : n === "clear-night" ? "night" : n === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(n) ? "rain" : ["snowy", "snowy-rainy"].includes(n) ? "snow" : "cloudy", jn = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, Ti = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, yl = (n, r) => '<path class="' + r + '" d="' + n + '"/>', Oh = (n, r) => ' style="animation-delay:-' + Math.round(n * 137 % r) + 'ms"', La = (n, r, d, p) => {
  const g = d * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (p < 1 ? ' opacity="' + p + '"' : "") + Oh(n, 2400) + ' d="M' + n + " " + (r - d) + "L" + (n + g) + " " + (r - g) + "L" + (n + d) + " " + r + "L" + (n + g) + " " + (r + g) + "L" + n + " " + (r + d) + "L" + (n - g) + " " + (r + g) + "L" + (n - d) + " " + r + "L" + (n - g) + " " + (r - g) + 'Z"/>';
}, Cd = ([n, r, d], p) => '<path class="wbMoonPath" d="' + n + '" fill="url(#' + p + ')"/><defs><linearGradient id="' + p + '" x1="0" y1="' + r + '" x2="0" y2="' + d + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', Ih = (n, r) => r ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', Fh = (n) => (n ? ["29.35", "43.04", "56.74"].map((r, d) => '<g class="wbDrop" style="animation-delay:-' + d * 317 + 'ms"><rect class="wbAccent" x="' + r + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + r + ' 60.65)"/></g>') : [19, 26, 33].map((r, d) => '<g class="wbDrop" style="animation-delay:-' + d * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + r + ' 38)"/></g>')).join(""), qh = (n) => (n ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([r, d], p) => '<circle class="wbFlake" style="animation-delay:-' + p * 640 + 'ms" cx="' + r + '" cy="' + d + '" r="' + (n ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function Wh(n, r, d, p) {
  const g = (y) => '<g filter="url(#' + p + '-sh)">' + y + "</g>";
  return n === "clear" ? r ? g(Cd(d ? Ti.l : Ti.s, p)) + (d ? La(70, 20, 5.83, 1) + La(78.33, 41.67, 3.75, 0.8) + La(60, 71.67, 3.33, 0.6) : La(42, 12, 3.5, 1) + La(47, 25, 2.25, 0.8) + La(36, 43, 2, 0.6)) : g(Ih(p, d)) : n === "partly" ? g(r ? Cd(d ? Ti.lp : Ti.sp, p) : d ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + g(yl(d ? jn.lp : jn.sp, r ? "wbCloudLight" : "wbBright")) + (r ? d ? La(73.33, 16.67, 4.17, 0.9) : La(44, 10, 2.5, 0.9) : "") : n === "cloudy" ? g(yl(d ? jn.lc : jn.s, r ? "wbCloudLight" : "wbBright")) + (r ? d ? La(15, 15, 3.75, 0.8) + La(76.67, 13.33, 2.92, 0.6) : La(9, 9, 2.25, 0.8) + La(46, 8, 1.75, 0.6) : "") : g(yl(d ? jn.lr : jn.s, "wbCloudLight")) + (n === "rain" ? Fh(d) : qh(d));
}
const jh = (n, r) => '<defs><filter id="' + n + '-sh" x="-25%" y="-25%" width="150%" height="160%"><feDropShadow dx="0" dy="' + (r ? 1.6 : 1) + '" stdDeviation="' + (r ? 1.8 : 1.1) + '" flood-color="#1c1208" flood-opacity=".22"/></filter></defs>';
function Vh(n, r, d, p) {
  let g = Nh(n);
  const y = g === "night" || !!d;
  g === "night" && (g = "clear");
  const w = r ? 90 : 54;
  return { k: g, night: y, svg: '<svg viewBox="0 0 ' + w + " " + w + '">' + jh(p, r) + Wh(g, y, r, p) + "</svg>" };
}
const zh = [
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
], Li = (n, r) => (zh[r % 8 * 8 + n % 8] + 0.5) / 64, za = (n) => [parseInt(n.slice(1, 3), 16), parseInt(n.slice(3, 5), 16), parseInt(n.slice(5, 7), 16)], Ze = (n, r, d) => [Math.round(n[0] + (r[0] - n[0]) * d), Math.round(n[1] + (r[1] - n[1]) * d), Math.round(n[2] + (r[2] - n[2]) * d)], Lr = (n) => n < 0 ? 0 : n > 1 ? 1 : n, Ad = (n, r) => {
  let d = n * 374761393 + r * 668265263 ^ 1540483477;
  return d = Math.imul(d ^ d >>> 13, 1274126177), ((d ^ d >>> 16) >>> 0) / 4294967296;
}, Cn = [255, 255, 255], ea = za("#26221e"), Td = za("#0288d1"), Gh = za("#01579b"), xl = za(Ra.cloudDay), kl = za(Ra.cloudNight), Di = za(Ra.dusk), Ml = za(Ra.sunEdge), Uh = za(Ra.sun), Yh = 10, Ld = 0.3, Do = 56, qp = 21;
function Zh(n) {
  const r = Array.from({ length: qp }, () => new Array(Do).fill(void 0)), d = (w, A, q) => {
    r[A][w] = q;
  }, p = Ze(Di, ea, 0.35), g = Ze(ea, Cn, 0.22);
  for (let w = 0; w <= 6; w++) {
    const A = w < 2 ? Do - 2 : Do - 1;
    for (let q = 6 - w; q <= A; q++) d(q, w, w < 2 ? p : w === 6 ? g : ea);
  }
  const y = [Di, Ml, kl, za(Ra.skyRainDay), Ze(Di, ea, 0.2), Ze(n, ea, 0.35)];
  [2, 3, 2, 3, 3].forEach((w, A) => {
    const q = 9 + A * 6;
    for (let M = 0; M < w; M++) {
      const D = y[(A * 2 + M * 3) % y.length];
      for (let I = q; I < q + 5; I++)
        d(I, 7 + M * 2, Ze(D, ea, 0.12)), d(I, 8 + M * 2, M === w - 1 ? Ze(D, Cn, 0.3) : D);
      d(q + 5, 7 + M * 2, ea), d(q + 5, 8 + M * 2, ea);
    }
  });
  for (let w = 7; w <= 12; w++) d(5, w, ea);
  d(5, 13, Ml);
  for (let w = 7; w <= 14; w++) for (let A = 42; A <= 51; A++) d(A, w, A === 51 ? kl : xl);
  for (let w = 43; w <= 50; w += 2)
    d(w, 12, ea), d(w, 9, Ze(ea, xl, 0.4));
  for (let w = 40; w <= 53; w++) d(w, 14, w === 40 || w === 53 ? kl : xl);
  for (let w = 15; w <= 18; w++) for (let A = 46; A <= 49; A++) d(A, w, w === 18 ? ea : w === 16 ? Ml : Di);
  for (let w = 15; w <= 19; w++) d(44, w, ea);
  return d(44, 20, Uh), r;
}
function Kh(n, r, d, p) {
  const g = Math.max(1, Math.round(n)), y = Math.max(1, Math.round(r)), w = new Uint8ClampedArray(g * y * 4), A = za(p.skyClearDay), q = za(p.skyFogDay), M = Zh(A), D = Math.round(y * 0.55), I = Lr(1 - Math.log(d / Ld) / Math.log(Yh / Ld)), z = Ze(A, q, I), Q = (H) => Lr((H - 0.1) / 0.9), et = Lr((1 - Math.exp(-2 / d) - 0.2) / 0.8), at = Math.round(g / 2 - Do / 2), X = D + 3;
  for (let H = 0; H < y; H++) {
    const nt = X - 1 - H, lt = H - X;
    for (let bt = 0; bt < g; bt++) {
      const rt = bt - at;
      let K, Y;
      const N = nt >= 0 && nt < qp && rt >= 0 && rt < Do ? M[nt][rt] : void 0;
      if (N)
        K = N, Y = et;
      else if (nt >= 0 && nt <= 1 && rt >= 4 - nt && rt <= 5 - nt)
        K = Ze(Cn, Td, 0.15), Y = et;
      else if (H < D) {
        const st = Lr(((H + 0.5) / D - 0.15) / 0.85) * 3, U = Math.min(3, Math.floor(st + Li(bt + 2, H + 5)));
        K = Ze(z, Cn, U * 0.1), Y = I * 0.95;
      } else {
        const st = (H - D + 0.5) / (y - D), U = Math.min(1.5, 6e-3 / (st * st)), qt = Lr(st * 1.4) * 3, W = Math.min(3, Math.floor(qt + Li(bt + 1, H + 6)));
        K = Ze(Td, Gh, W / 3);
        const tt = 1 + Math.round(st * 7), B = Math.floor(bt / (tt * 3)), pt = 0.06 + 0.16 * st, ot = bt % (tt * 3) < tt;
        ot && Ad(B, H) < pt ? K = Ze(K, Cn, 0.18 + 0.1 * (1 - st)) : ot && st > 0.5 && Ad(B, H - 1) < pt && (K = Ze(K, ea, 0.12)), Y = Q(1 - Math.exp(-U / d)), lt === 0 && rt >= 3 && rt <= 8 ? (K = Ze(K, Cn, rt < 6 ? 0.8 : 0.45), Y = et) : lt >= 0 && lt <= 2 && rt >= Do && rt < Do + 40 ? ((1 - (rt - Do) / 40) * (lt === 1 ? 0.9 : 0.5) > Li(bt, H + 3) && (K = Ze(K, Cn, 0.5)), Y = et) : lt === 0 && rt >= 6 && rt < Do && (K = Ze(K, ea, rt % 2 === 0 ? 0.35 : 0.2), Y = et);
      }
      const yt = Y > Li(bt, H) ? q : K, Rt = (H * g + bt) * 4;
      w[Rt] = yt[0], w[Rt + 1] = yt[1], w[Rt + 2] = yt[2], w[Rt + 3] = 255;
    }
  }
  return { data: w, w: g, h: y };
}
const Xh = {
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
}, $h = 1.6;
function Jh(n, r) {
  const d = n ? Xh[String(n).toUpperCase()] : void 0;
  if (!d || !(r > 0)) return;
  const p = (y) => Math.abs(Math.log(y[2] / r)), g = d.reduce((y, w) => p(w) < p(y) ? w : y);
  return p(g) <= Math.log($h) ? { from: g[0], to: g[1], km: g[2] } : void 0;
}
const Qh = (n, r) => r === "mi" ? n * 1.609344 : r === "m" ? n / 1e3 : r === "ft" ? n * 3048e-7 : r === "yd" ? n * 9144e-7 : n, tm = (n) => n < 1 ? "very_poor" : n < 4 ? "poor" : n < 10 ? "moderate" : n < 20 ? "good" : n < 40 ? "very_good" : "excellent", Me = {
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
}, Se = { standard: "cubic-bezier(.2,0,0,1)", land: "cubic-bezier(.34,1.46,.64,1)", spring: "cubic-bezier(.2,1.2,.4,1)", soft: "cubic-bezier(.4,0,.2,1)", exit: "cubic-bezier(.4,0,1,1)" }, je = () => {
  var n;
  return !!((n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches);
};
function em() {
  const { pivot: n, slider: r, iconbtn: d, warp: p, outline: g } = Me;
  return [
    ["--pv-persp", n.persp + "px"],
    ["--pv-shine", n.shine / 100],
    ["--pv-size", n.size + "%"],
    ["--pv-ret", n.ret + "ms"],
    ["--pv-ease", Se[n.ease]],
    ["--ab-blur", r.glow + "px"],
    ["--ab-spread", r.spread + "px"],
    ["--ab-str", r.strength + "%"],
    ["--ab-blur2", r.glow + r.hold + "px"],
    ["--ab-spread2", r.spread + r.hold / 4 + "px"],
    ["--ab-str2", r.holdStrength + "%"],
    ["--ab-grow", "scaleY(" + (1 + (r.grow / 100 - 1) * 3) + ")"],
    ["--ab-in", r.ein + "ms"],
    ["--ab-out", r.eout + "ms"],
    ["--ab-ease", Se[r.ease]],
    ["--ih-s", d.scale / 100],
    ["--ih-p", d.press / 100],
    ["--ih-dur", d.dur + "ms"],
    ["--ih-ease", Se[d.ease]],
    ["--ih-tint", "8%"],
    ["--wc-dur", p.cdur + "ms"],
    ["--wc-delay", p.cdelay + "ms"],
    ["--wc-ease", Se[p.ease]],
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
const Sl = ":is(button.primary,button.pill,.hcBtn,.wbRangeBtn,.activityRow.tap,.hcRow,a.hcRow)", am = "#homeView .tfAreaPanel", om = 300, Wi = (n) => Math.min(1, om / Math.max(1, n)), _l = (n, r) => 1 + (r / 100 - 1) * Wi(n.offsetWidth);
function nm(n, r) {
  r.style.cssText += ";" + em();
  let d = null;
  const p = (D) => {
    D.classList.remove("mvMoving", "mvLit"), D.style.setProperty("--rx", "0deg"), D.style.setProperty("--ry", "0deg"), D.style.setProperty("--sc", 1), D._down = !1;
  };
  n.addEventListener("pointermove", (D) => {
    var H, nt;
    const I = D.pointerType === "touch" || je() ? null : (nt = (H = D.target).closest) == null ? void 0 : nt.call(H, Sl);
    if (d && d !== I && p(d), d = I, !I || I.disabled) return;
    const z = Me.pivot, Q = I.getBoundingClientRect(), et = (D.clientX - Q.left) / Q.width, at = (D.clientY - Q.top) / Q.height, X = 1;
    I.classList.add("mvPv", "mvMoving", "mvLit"), I.style.setProperty("--pv-persp", z.persp / Wi(Math.max(I.offsetWidth, I.offsetHeight)) + "px"), I.style.setProperty("--ry", (X * (et - 0.5) * 2 * z.tilt * Wi(I.offsetWidth)).toFixed(3) + "deg"), I.style.setProperty("--rx", (X * -(at - 0.5) * 2 * z.tilt * Wi(I.offsetHeight)).toFixed(3) + "deg"), I.style.setProperty("--mx", (et * 100).toFixed(1) + "%"), I.style.setProperty("--my", (at * 100).toFixed(1) + "%"), I._down || I.style.setProperty("--sc", _l(I, z.lift));
  }, { passive: !0 }), n.addEventListener("pointerout", (D) => {
    d && !d.contains(D.relatedTarget) && (p(d), d = null);
  }), n.addEventListener("pointerdown", (D) => {
    var z, Q;
    const I = je() ? null : (Q = (z = D.target).closest) == null ? void 0 : Q.call(z, Sl);
    I && (I._down = !0, I.classList.add("mvPv"), I.classList.remove("mvMoving"), I.style.setProperty("--sc", _l(I, Me.pivot.press)));
  }), n.addEventListener("pointerup", (D) => {
    var z, Q;
    const I = (Q = (z = D.target).closest) == null ? void 0 : Q.call(z, Sl);
    I && (I._down = !1, I.style.setProperty("--sc", D.pointerType === "touch" ? 1 : _l(I, Me.pivot.lift)));
  });
  let g = null;
  n.addEventListener("pointerover", (D) => {
    var I, z, Q;
    D.pointerType !== "touch" && ((Q = (z = (I = D.target).closest) == null ? void 0 : z.call(I, ".tfBar")) == null || Q.classList.add("mvHover"));
  }), n.addEventListener("pointerout", (D) => {
    var z, Q;
    const I = (Q = (z = D.target).closest) == null ? void 0 : Q.call(z, ".tfBar");
    I && !I.contains(D.relatedTarget) && I !== g && I.classList.remove("mvHover");
  }), n.addEventListener("pointerdown", (D) => {
    var z, Q;
    const I = (Q = (z = D.target).closest) == null ? void 0 : Q.call(z, ".tfBar");
    I && (g = I, I.classList.add("mvHold"));
  });
  const y = (D) => {
    if (!g) return;
    g.classList.remove("mvHold");
    const I = g.getBoundingClientRect();
    (D.pointerType === "touch" || D.clientX < I.left || D.clientX > I.right || D.clientY < I.top || D.clientY > I.bottom) && g.classList.remove("mvHover"), g = null;
  };
  window.addEventListener("pointerup", y, !0), window.addEventListener("pointercancel", y, !0), n.addEventListener("focusin", (D) => {
    var I, z;
    (z = (I = D.target).matches) != null && z.call(I, ".tfBar:focus-visible") && D.target.classList.add("mvHover");
  }), n.addEventListener("focusout", (D) => {
    var I;
    (I = D.target.classList) == null || I.remove("mvHover", "mvHold");
  }), n.addEventListener("keydown", (D) => {
    var z, Q;
    const I = (Q = (z = D.target).closest) == null ? void 0 : Q.call(z, ".tfBar");
    !I || !["ArrowRight", "ArrowUp", "ArrowLeft", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(D.key) || (I.classList.add("mvHold"), clearTimeout(I._k), I._k = setTimeout(() => I.classList.remove("mvHold"), 350));
  }), n.addEventListener("click", (D) => {
    var z, Q;
    const I = (Q = (z = D.target).closest) == null ? void 0 : Q.call(z, "button.tfIcon[data-act]");
    I && rm(I);
  });
  let w = null;
  const A = (D, I, z) => {
    D.querySelector(":scope>.mvEdge") || D.insertAdjacentHTML("afterbegin", '<span class="mvEdgeFill" aria-hidden="true"></span><span class="mvEdge" aria-hidden="true"><i></i></span>');
    const Q = D.getBoundingClientRect(), et = Q.width / 2, at = Q.height / 2, X = I.clientX - Q.left - et, H = I.clientY - Q.top - at, nt = X ? et / Math.abs(X) : 1 / 0, lt = H ? at / Math.abs(H) : 1 / 0, bt = Math.min(Math.max(1 / Math.min(nt, lt), 0), 1);
    let rt = Math.atan2(H, X) * 180 / Math.PI + 90;
    rt < 0 && (rt += 360);
    const K = z ? 100 : bt * 100;
    D.style.setProperty("--edge-proximity", K.toFixed(3)), D.style.setProperty("--cursor-angle", rt.toFixed(3) + "deg"), D.classList.toggle("mvLitEdge", z || K >= Me.outline.lightAt);
  }, q = (D) => {
    D.classList.remove("mvLitEdge"), D.style.setProperty("--edge-proximity", "0"), D._down = !1;
  }, M = (D) => {
    var z;
    const I = (z = D.closest) == null ? void 0 : z.call(D, am);
    return I && !r.classList.contains("tfEditing") ? I : null;
  };
  n.addEventListener("pointermove", (D) => {
    if (D.pointerType === "touch") return;
    const I = M(D.target);
    w && w !== I && q(w), w = I, I && !I._down && A(I, D, !1);
  }, { passive: !0 }), n.addEventListener("pointerout", (D) => {
    w && !w.contains(D.relatedTarget) && (q(w), w = null);
  }), n.addEventListener("pointerdown", (D) => {
    const I = M(D.target);
    I && Me.outline.press && (I._down = !0, A(I, D, !0));
  }), n.addEventListener("pointerup", (D) => {
    const I = M(D.target);
    I && (I._down = !1, D.pointerType === "touch" ? q(I) : A(I, D, !1));
  }), new MutationObserver((D) => {
    var I;
    for (const z of D) {
      const Q = z.target;
      if (z.type === "attributes") {
        (I = Q.classList) != null && I.contains("tfMoreBackdrop") && !Q.hidden && z.oldValue !== null && Dd(Q);
        continue;
      }
      z.addedNodes.forEach((et) => {
        et.nodeType === 1 && et.classList.contains("tfMoreBackdrop") && !et.hidden && Dd(et);
      });
    }
  }).observe(r, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["hidden"], attributeOldValue: !0 });
}
const Wp = (n) => n.closest("[data-k],.tfMore,.tfMorePair") || n.getRootNode();
function jp(n, r) {
  const d = [];
  for (let p = n; p && p !== r && p.parentNode; p = p.parentNode) d.unshift([...p.parentNode.children].indexOf(p));
  return d;
}
const Vp = (n, r) => r.reduce((d, p) => d == null ? void 0 : d.children[p], n);
function rm(n) {
  var Q;
  if (je() || n._warp) return;
  const r = Me.warp, d = r.amount / 100, p = n.firstElementChild;
  if (!p) return;
  const g = { squash: { scale: 1 + 0.35 * d + " " + (1 - 0.55 * d) }, pinch: { scale: String(1 - 0.5 * d) }, twist: { rotate: 140 * d + "deg", scale: String(1 - 0.35 * d) }, flip: { rotate: "y 90deg" } }[r.style], y = "blur(" + 2 * d + "px)", w = n.getRootNode(), A = Wp(n), q = (Q = A.dataset) == null ? void 0 : Q.k, M = jp(n, A), D = n.getAttribute("aria-pressed") + "|" + n.dataset.act;
  n._warp = 1;
  const I = p.animate([{ scale: "1", rotate: "none", filter: "blur(0px)" }, { ...g, filter: y }], { duration: r.win, easing: Se.exit, fill: "forwards" }), z = performance.now();
  I.finished.then(() => {
    const et = () => {
      var bt, rt;
      const at = q ? A.isConnected ? A : (bt = w.querySelector) == null ? void 0 : bt.call(w, '[data-k="' + CSS.escape(q) + '"]') : A, X = at && Vp(at, M);
      if (X === n && n.getAttribute("aria-pressed") + "|" + n.dataset.act === D && performance.now() - z < 420) {
        requestAnimationFrame(et);
        return;
      }
      (((rt = X == null ? void 0 : X.matches) != null && rt.call(X, "button.tfIcon") ? X : n).firstElementChild || p).animate([{ ...g, filter: y }, { scale: "1", rotate: "none", filter: "blur(0px)" }], { duration: r.wout, easing: Se[r.ease] }), I.cancel(), n._warp = 0;
    };
    et();
  });
}
const zp = (n) => {
  let r = "M" + n[0][0].toFixed(1) + " " + n[0][1].toFixed(1);
  for (let d = 0; d < n.length - 1; d++) {
    const p = n[d - 1] || n[d], g = n[d], y = n[d + 1], w = n[d + 2] || y, A = [g[0] + (y[0] - p[0]) / 6, g[1] + (y[1] - p[1]) / 6], q = [y[0] - (w[0] - g[0]) / 6, y[1] - (w[1] - g[1]) / 6];
    r += "C" + A.map((M) => M.toFixed(1)).join(" ") + " " + q.map((M) => M.toFixed(1)).join(" ") + " " + y.map((M) => M.toFixed(1)).join(" ");
  }
  return r;
}, Gp = (n, r, d, p = "mvGrid") => [0, 1, 2].map((g) => {
  const y = (r + (d - r) * g / 2).toFixed(1);
  return '<line class="' + p + '" x1="0" x2="' + n + '" y1="' + y + '" y2="' + y + '"/>';
}).join("");
function Up(n, r = n.querySelector(".mvLine"), d = n.querySelectorAll(".mvArea,.mvDot")) {
  if (je() || !(r != null && r.getTotalLength)) return;
  const p = Me.graphs, g = r.getTotalLength();
  r.animate([{ strokeDasharray: g, strokeDashoffset: g }, { strokeDasharray: g, strokeDashoffset: 0 }], { duration: p.draw, easing: Se.standard }), [...d].forEach((y, w) => y.animate([{ opacity: 0 }, { opacity: 1 }], { duration: p.draw * 0.6, delay: p.draw * 0.3 + w * 12, easing: Se.standard, fill: "backwards" }));
}
function ji(n, r, d, p, g) {
  if (n.getAnimations().forEach((D) => D.cancel()), n.style.left = p + "px", n.style.width = g + "px", je() || r === p && d === g) return;
  const y = Me.tabs, w = y.stretch / 100, A = (D, I) => ({ left: D + "px", width: I + "px" }), M = p > r ? A(r + (p - r) * (0.15 * (1 - w)), p + g - (r + (p - r) * (0.15 * (1 - w)))) : A(p, r + d - p - (r - p) * (0.15 * (1 - w)));
  n.animate([A(r, d), { offset: 0.5, ...M }, A(p, g)], { duration: y.dur, easing: Se.standard });
}
function im(n) {
  const r = ":is(.themeChoice,.wbSegments,.tfHeightTabs,.hcSeg,.tfSeg)", d = (g) => g.querySelector(':scope>[aria-pressed="true"],:scope>[aria-checked="true"],:scope>.active'), p = (g, y) => y ? [...g.children].indexOf(y) : -1;
  n.addEventListener("click", (g) => {
    var nt, lt, bt;
    const y = (lt = (nt = g.target).closest) == null ? void 0 : lt.call(nt, r + ">button"), w = y == null ? void 0 : y.parentElement;
    if (!w || je() || y.disabled) return;
    const A = d(w);
    if (!A || A === y) return;
    const q = p(w, A), M = w.getBoundingClientRect(), D = A.getBoundingClientRect(), I = getComputedStyle(A).borderRadius, z = w.getRootNode(), Q = Wp(w), et = (bt = Q.dataset) == null ? void 0 : bt.k, at = jp(w, Q), X = performance.now(), H = () => {
      var U, qt, W;
      const rt = et && !Q.isConnected ? (U = z.querySelector) == null ? void 0 : U.call(z, '[data-k="' + CSS.escape(et) + '"]') : Q, K = rt && Vp(rt, at), Y = (qt = K == null ? void 0 : K.matches) != null && qt.call(K, r) ? d(K) : null;
      if (!Y || p(K, Y) === q) {
        performance.now() - X < 700 && requestAnimationFrame(H);
        return;
      }
      const N = K.getBoundingClientRect(), yt = Y.getBoundingClientRect(), Rt = getComputedStyle(Y);
      (W = K.querySelector(":scope>.mvSegInd")) == null || W.remove();
      const st = document.createElement("span");
      st.className = "mvSegInd", st.style.cssText = "top:" + (yt.top - N.top - K.clientTop) + "px;height:" + yt.height + "px;border-radius:" + I + ";background:" + Rt.backgroundColor + ";box-shadow:" + Rt.boxShadow, getComputedStyle(K).position === "static" && (K.style.position = "relative"), K.prepend(st), K.classList.add("mvSegMoving"), ji(st, D.left - M.left - K.clientLeft, D.width, yt.left - N.left - K.clientLeft, yt.width), clearTimeout(K._seg), K._seg = setTimeout(() => {
        st.remove(), K.classList.remove("mvSegMoving");
      }, Me.tabs.dur + 20);
    };
    requestAnimationFrame(H);
  }, !0);
}
const Yp = (n) => getComputedStyle(n).placeItems.startsWith("end");
function Dd(n) {
  const r = n.firstElementChild;
  if (je() || !r || r.classList.contains("still")) return;
  const d = Me.dialog;
  n.animate([{ opacity: 0, backdropFilter: "blur(0px)" }, { opacity: 1, backdropFilter: "blur(" + d.blur + "px)" }], { duration: d.open, easing: Se.standard }), r.style.animation = "none", r.animate(Yp(n) ? [{ transform: "translateY(100%)" }, { transform: "none" }] : [{ opacity: 0, transform: "scale(" + d.from / 100 + ")" }, { opacity: 1, transform: "none" }], { duration: d.open, easing: Se[d.ease] }), [...(r.classList.contains("tfMorePair") && r.querySelector(".tfMore") || r).children].forEach((g, y) => g.animate([{ opacity: 0 }, { opacity: 1 }], { duration: d.open * 0.6, delay: d.open * 0.35 + y * 40, easing: Se.standard, fill: "backwards" }));
}
function sm(n, r) {
  const d = n == null ? void 0 : n.firstElementChild;
  if (je() || !d || n.hidden || n._closing) {
    r();
    return;
  }
  const p = Me.dialog;
  n._closing = !0, n.style.pointerEvents = "none", n.animate([{ opacity: 1, backdropFilter: "blur(" + p.blur + "px)" }, { opacity: 0, backdropFilter: "blur(0px)" }], { duration: p.close, easing: Se.exit, fill: "forwards" });
  const g = d.animate(Yp(n) ? [{ transform: "none" }, { transform: "translateY(100%)" }] : [{ opacity: 1, transform: "none" }, { opacity: 0, transform: "scale(" + p.from / 100 + ")" }], { duration: p.close, easing: Se.exit, fill: "forwards" });
  let y = !1;
  const w = () => {
    y || (y = !0, n._closing = !1, n.style.pointerEvents = "", n.getAnimations().forEach((A) => A.cancel()), d.getAnimations().forEach((A) => A.cancel()), r());
  };
  g.finished.then(w, w), setTimeout(w, p.close + 80);
}
const lm = '<span class="mvTick" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M20 6L9 17L4 12" pathLength="1"/></svg></span>';
function cm(n, r) {
  n.replaceChildren(), n.insertAdjacentHTML("afterbegin", lm), n.appendChild(Object.assign(document.createElement("span"), { className: "mvToastText", textContent: r }));
}
function dm(n) {
  if (je()) return;
  const r = Me.confirm;
  n.animate([{ opacity: 0, translate: "0 18px" }, { opacity: 1, translate: "0 0" }], { duration: r.dur, easing: Se.spring });
  const d = n.querySelector(".mvTick path");
  d && r.draw && d.animate([{ strokeDasharray: "1", strokeDashoffset: "1" }, { strokeDasharray: "1", strokeDashoffset: "0" }], { duration: 420, delay: r.dur * 0.5, easing: Se.standard, fill: "backwards" });
}
const Cl = (n, r, d, p, g = 1) => (n + r * d * g) * Math.pow(p, g);
function Al(n) {
  const r = Me.drag.squash / 100;
  !n || je() || !r || n.animate([{ transform: "scale(" + (1 + r * 0.4) + "," + (1 - r) + ")" }, { transform: "scale(" + (1 - r * 0.1) + "," + (1 + r * 0.24) + ")" }, { transform: "none" }], { duration: 340, easing: "ease-out" });
}
function Bd(n) {
  if (!n || je()) return;
  const r = Me.expand;
  [...n.children].slice(1).forEach((d, p) => d.animate([{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "none" }], { duration: 260, delay: r.delay + p * r.stagger, easing: "cubic-bezier(.2,0,0,1)", fill: "backwards" }));
}
const Re = 6e4, te = 36e5, pa = 864e5, Pr = 1440, pm = 6, fm = 10 * Re, Ed = 3, um = 3, Bi = { day: [6, 22], waking: [7, 23], all: [0, 24] }, hm = [[-5, [91, 141, 239]], [5, [79, 195, 230]], [12, [95, 211, 160]], [18, [255, 211, 77]], [24, [255, 159, 67]], [30, [255, 91, 79]]], mm = "M6.5 18.5h11a4 4 0 0 0 .4-7.98 5.5 5.5 0 0 0-10.6-1.1A4.5 4.5 0 0 0 6.5 18.5Z", Rd = (n, r, d, p) => '<circle cx="' + n + '" cy="' + r + '" r="' + d + '"/><path d="' + [0, 45, 90, 135, 180, 225, 270, 315].map((g) => {
  const y = Math.cos(g * Math.PI / 180), w = Math.sin(g * Math.PI / 180), A = d + 2, q = d + 2 + p;
  return "M" + (n + y * A).toFixed(2) + " " + (r + w * A).toFixed(2) + "L" + (n + y * q).toFixed(2) + " " + (r + w * q).toFixed(2);
}).join("") + '"/>', Mo = (n) => '<path d="' + mm + '"' + (n ? ' transform="' + n + '"' : "") + "/>", So = (n) => '<path d="' + n + '"/>', Pd = '<path d="M19.5 14.5A7.5 7.5 0 1 1 9.5 4.5a6 6 0 0 0 10 10Z"/>';
function gm(n, r) {
  const d = "translate(0,-3)";
  switch (n) {
    case "sunny":
      return r ? Pd : Rd(12, 12, 4, 2.5);
    case "clear-night":
      return Pd;
    case "partlycloudy":
      return (r ? '<path d="M11.5 9.5A4.5 4.5 0 1 1 6 4a3.6 3.6 0 0 0 5.5 5.5Z"/>' : Rd(7.5, 7.5, 2.6, 1.4)) + Mo("translate(3.6,3) scale(.85)");
    case "cloudy":
      return Mo();
    case "fog":
      return So("M4 8.5h16M3 12.5h18M5 16.5h14");
    case "rainy":
      return Mo(d) + So("M8.5 18.5 7.5 21M12.5 18.5l-1 2.5M16.5 18.5l-1 2.5");
    case "pouring":
      return Mo(d) + So("M7.5 18.5 6 22M11 18.5 9.5 22M14.5 18.5 13 22M18 18.5 16.5 22");
    case "snowy":
      return Mo(d) + So("M8 20h.01M12 21.5h.01M16 20h.01");
    case "snowy-rainy":
      return Mo(d) + So("M8.5 18.5 7.5 21M12 21h.01M16.5 18.5l-1 2.5");
    case "hail":
      return Mo(d) + '<circle cx="8" cy="20.5" r="1"/><circle cx="12" cy="21.5" r="1"/><circle cx="16" cy="20.5" r="1"/>';
    case "lightning":
      return Mo(d) + So("M12.5 16 10.5 19.5h3l-2 3");
    case "lightning-rainy":
      return Mo(d) + So("M12.5 16 10.5 19.5h3l-2 3M7.5 18.5l-1 2.5M17.5 18.5l-1 2.5");
    case "windy":
    case "windy-variant":
      return So("M3 8.5h10.5a2.5 2.5 0 1 0-2.5-2.5M3 12h15.5a2.5 2.5 0 1 1-2.5 2.5M3 15.5h8");
    default:
      return '<circle cx="12" cy="12" r="8"/>' + So("M12 8v5M12 16h.01");
  }
}
const Tl = (n, r) => '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + gm(n, r) + "</svg>", bm = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), wm = 30 * Re, vm = 7, ym = 3, Hd = 1, xm = Re, km = 15 * Re, Mm = 5, ee = {
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
}, Vl = 7, Co = 256, Sm = 3, Nd = 700, _m = 1800, Zp = 5 * Re;
let Ei = null, Od = 0, Dr = null;
function Cm() {
  return Ei && Date.now() - Od < Zp ? Promise.resolve(Ei) : Dr || (Dr = fetch("https://api.rainviewer.com/public/weather-maps.json").then((n) => n.ok ? n.json() : Promise.reject(new Error(String(n.status)))).then((n) => {
    var p, g;
    const r = (((p = n.radar) == null ? void 0 : p.past) || []).slice(-6), d = (((g = n.radar) == null ? void 0 : g.nowcast) || []).slice(0, Sm);
    return Ei = { host: n.host, frames: [...r.map((y) => ({ ...y, past: !0 })), ...d] }, Od = Date.now(), Ei;
  }).finally(() => {
    Dr = null;
  }), Dr);
}
function Am(n, r, d, p) {
  const g = Vl, y = 2 ** g, w = n * Math.PI / 180, A = (r + 180) / 360 * y * Co, q = (1 - Math.log(Math.tan(w) + 1 / Math.cos(w)) / Math.PI) / 2 * y * Co, M = A - d / 2, D = q - p / 2, I = [];
  for (let z = Math.floor(M / Co); z <= Math.floor((M + d - 1) / Co); z++) for (let Q = Math.floor(D / Co); Q <= Math.floor((D + p - 1) / Co); Q++)
    Q < 0 || Q >= y || I.push({ x: (z % y + y) % y, y: Q, left: z * Co - M, top: Q * Co - D });
  return I;
}
const Tm = {
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
}, Lm = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], Dm = Object.keys(ht.phases), Bm = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)", extreme: "var(--purple-color, #926bc7)" }, Id = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, Kp = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], Ri = 100, Fd = "µg/m³", Em = "weather_alerts.air_quality_pollen", Ui = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], Rm = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, Pm = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], Hm = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, Nm = { daily: 1, hourly: 2 }, vt = (n) => String(n ?? "").replace(/[&<>"']/g, (r) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[r]), Ye = (n, r) => n.replace(/\{(\w+)\}/g, (d, p) => r[p] ?? ""), To = (n) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + n + '"/></svg>', qd = /* @__PURE__ */ new Map();
function Xp(n) {
  let r = qd.get(n);
  if (r === void 0) {
    const d = "http://www.w3.org/2000/svg", p = document.createElementNS(d, "svg"), g = document.createElementNS(d, "path");
    p.setAttribute("viewBox", "0 0 24 24"), p.style.cssText = "position:absolute;width:24px;height:24px;visibility:hidden;pointer-events:none", g.setAttribute("d", n), p.append(g), document.body.append(p);
    const y = g.getBBox();
    p.remove();
    const w = Math.max(y.width, y.height), A = w ? 26 * 24 / w : 0, q = A / 24;
    r = w ? "width:" + A.toFixed(2) + "px;height:" + A.toFixed(2) + "px;translate:" + ((12 - y.x - y.width / 2) * q).toFixed(2) + "px " + ((12 - y.y - y.height / 2) * q).toFixed(2) + "px" : "", qd.set(n, r);
  }
  return r ? '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true" style="' + r + '"><path d="' + n + '"/></svg>' : To(n);
}
const Om = () => {
  var n;
  return !!((n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches);
}, ie = (n) => n != null && n !== "" && Number.isFinite(Number(n)), Wd = /* @__PURE__ */ new Map(), jd = /* @__PURE__ */ new Map(), Ll = /* @__PURE__ */ new WeakMap(), Im = (n) => {
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
function Zt(n, r, d) {
  const p = Number(n);
  if (Number.isNaN(p)) return String(n);
  const g = (r == null ? void 0 : r.number_format) === "none", y = { maximumFractionDigits: 2, ...d, ...g ? { useGrouping: !1 } : {} }, w = g ? "en-US" : Im(r), A = JSON.stringify([w, y]);
  let q = Wd.get(A);
  if (!q) {
    try {
      q = new Intl.NumberFormat(w, y);
    } catch {
      q = new Intl.NumberFormat(void 0, y);
    }
    Wd.set(A, q);
  }
  return q.format(p);
}
const Gl = (n) => {
  var r;
  return ((r = n == null ? void 0 : n.locale) == null ? void 0 : r.language) || (n == null ? void 0 : n.language) || void 0;
};
function Fm(n) {
  if (!n) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (Ll.has(n)) return Ll.get(n);
  const r = n.time_format, d = r === "language" || r === "system" || !r ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(r === "language" ? n.language : void 0).includes("10") : r === "12";
  return Ll.set(n, d), d;
}
const $p = (n) => {
  var r, d;
  return ((r = n == null ? void 0 : n.locale) == null ? void 0 : r.time_zone) === "server" && ((d = n == null ? void 0 : n.config) != null && d.time_zone) ? n.config.time_zone : void 0;
};
function Jp(n, r) {
  const d = JSON.stringify([n, r]);
  let p = jd.get(d);
  if (!p) {
    try {
      p = new Intl.DateTimeFormat(n, r);
    } catch {
      p = new Intl.DateTimeFormat(void 0, { ...r, timeZone: void 0 });
    }
    jd.set(d, p);
  }
  return p;
}
const We = (n, r) => Jp(Gl(r), { hour: "numeric", minute: "2-digit", hourCycle: Fm(r == null ? void 0 : r.locale) ? "h12" : "h23", timeZone: $p(r) }).format(n), Vd = (n, r) => Jp(Gl(r), { weekday: "short", timeZone: $p(r) }).format(n), qm = (n, r) => n.toLocaleDateString(Gl(r), { weekday: "narrow" }), fe = (n, r) => ie(r) ? Zt(Math.round(Number(r)), n.locale) + "°" : "–", tn = (n) => {
  const r = new Date(n);
  return r.setHours(0, 0, 0, 0), r;
}, Vn = (n, r) => n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth() && n.getDate() === r.getDate(), aa = Math.PI / 180, Wm = 2440588, jm = 2451545, Yi = aa * 23.4397, Vm = 149598e3, zm = -0.833 * aa, Gm = 0.133 * aa, zd = 5 * Re, Qp = (n) => n.getTime() / pa - 0.5 + Wm - jm, tf = (n, r) => Math.atan2(Math.sin(n) * Math.cos(Yi) - Math.tan(r) * Math.sin(Yi), Math.cos(n)), ef = (n, r) => Math.asin(Math.sin(r) * Math.cos(Yi) + Math.cos(r) * Math.sin(Yi) * Math.sin(n)), Um = (n, r) => aa * (280.16 + 360.9856235 * n) - r, Ym = (n, r, d) => Math.asin(Math.sin(r) * Math.sin(d) + Math.cos(r) * Math.cos(d) * Math.cos(n));
function af(n) {
  const r = aa * (357.5291 + 0.98560028 * n), d = aa * (1.9148 * Math.sin(r) + 0.02 * Math.sin(2 * r) + 3e-4 * Math.sin(3 * r)), p = r + d + aa * 102.9372 + Math.PI;
  return { ra: tf(p, 0), dec: ef(p, 0), dist: Vm };
}
function of(n) {
  const r = aa * (218.316 + 13.176396 * n), d = aa * (134.963 + 13.064993 * n), p = aa * (93.272 + 13.22935 * n), g = r + aa * 6.289 * Math.sin(d), y = aa * 5.128 * Math.sin(p);
  return { ra: tf(g, y), dec: ef(g, y), dist: 385001 - 20905 * Math.cos(d) };
}
const nf = (n, r, d, p) => {
  const g = Qp(r), y = n(g);
  return Ym(Um(g, aa * -p) - y.ra, aa * d, y.dec);
}, Zi = (n, r, d) => nf(af, n, r, d), Zm = (n, r, d) => nf(of, n, r, d);
function rf(n, r, d, p) {
  const g = {};
  let y = d.getTime(), w = n(d) - r;
  for (let A = y + zd; A <= p.getTime(); A += zd) {
    const q = n(new Date(A)) - r;
    if (w < 0 != q < 0) {
      const M = new Date(y + (A - y) * w / (w - q));
      q > 0 ? g.rise ?? (g.rise = M) : g.set ?? (g.set = M);
    }
    y = A, w = q;
  }
  return g;
}
const sf = (n) => {
  const r = tn(n);
  return [r, new Date(r.getTime() + pa)];
}, Km = (n, r, d) => rf((p) => Zi(p, r, d), zm, ...sf(n)), Xm = (n, r, d) => rf((p) => Zm(p, r, d), Gm, ...sf(n));
function Dl(n) {
  const r = Qp(n), d = af(r), p = of(r), g = Math.acos(Math.sin(d.dec) * Math.sin(p.dec) + Math.cos(d.dec) * Math.cos(p.dec) * Math.cos(d.ra - p.ra)), y = Math.atan2(d.dist * Math.sin(g), p.dist - d.dist * Math.cos(g)), w = Math.atan2(Math.cos(d.dec) * Math.sin(d.ra - p.ra), Math.sin(d.dec) * Math.cos(p.dec) - Math.cos(d.dec) * Math.sin(p.dec) * Math.cos(d.ra - p.ra));
  return { fraction: (1 + Math.cos(y)) / 2, phase: 0.5 + 0.5 * y * (w < 0 ? -1 : 1) / Math.PI };
}
const $m = (n) => {
  const r = n * 28;
  return r < 0.5 || r > 27.5 ? "new_moon" : r < 6.5 ? "waxing_crescent" : r < 7.5 ? "first_quarter" : r < 13.5 ? "waxing_gibbous" : r < 14.5 ? "full_moon" : r < 20.5 ? "waning_gibbous" : r < 21.5 ? "last_quarter" : "waning_crescent";
}, Zn = (n) => {
  const r = n == null ? void 0 : n.config;
  return r && ie(r.latitude) && ie(r.longitude) ? { lat: Number(r.latitude), lon: Number(r.longitude) } : null;
};
function zn(n, r) {
  var M, D, I;
  const d = Zn(n), p = d ? Km(r, d.lat, d.lon) : {}, g = (M = n == null ? void 0 : n.states) == null ? void 0 : M["sun.sun"], y = tn(r).getTime(), w = (z) => {
    const Q = z ? new Date(z) : null;
    return Q && Number.isFinite(Q.getTime()) && tn(Q).getTime() === y ? Q : null;
  }, A = w((D = g == null ? void 0 : g.attributes) == null ? void 0 : D.next_rising), q = w((I = g == null ? void 0 : g.attributes) == null ? void 0 : I.next_setting);
  return A && (p.rise = A), q && (p.set = q), p;
}
function Jm(n) {
  var p;
  const r = (p = n == null ? void 0 : n.states) == null ? void 0 : p["sun.sun"];
  if ((r == null ? void 0 : r.state) === "below_horizon" || (r == null ? void 0 : r.state) === "above_horizon") return r.state === "below_horizon";
  const d = Zn(n);
  return d ? Zi(/* @__PURE__ */ new Date(), d.lat, d.lon) < 0 : !1;
}
const An = (n) => !!n && n.state !== "unavailable" && n.state !== "unknown", Kn = (n, r) => {
  var p;
  const d = (p = n.entities) == null ? void 0 : p[r];
  return !d || !d.hidden && !d.entity_category;
}, Ce = (n, r, d) => {
  var p, g;
  for (const y of r) {
    const w = (p = n.states) == null ? void 0 : p[y];
    if (!An(w)) continue;
    const A = (g = w.attributes) == null ? void 0 : g[d];
    if (A != null && A !== "") return { stateObj: w, value: A };
  }
}, Qm = (n, r) => r.map((d) => {
  var p;
  return (p = n.states) == null ? void 0 : p[d];
}).find(An), t0 = (n, r, d) => r.map((p) => {
  var g;
  return (g = n.states) == null ? void 0 : g[p];
}).find((p) => {
  var g;
  return An(p) && (((g = p.attributes) == null ? void 0 : g.supported_features) == null || Number(p.attributes.supported_features) & Nm[d]);
});
function Qo(n, r, d) {
  var y, w, A, q;
  const p = ((w = (y = n.config) == null ? void 0 : y.unit_system) == null ? void 0 : w.length) || "", g = (r == null ? void 0 : r.attributes) || {};
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
      return g.temperature_unit || ((q = (A = n.config) == null ? void 0 : A.unit_system) == null ? void 0 : q.temperature) || "";
  }
}
function Vi(n, r, d, p) {
  try {
    if (typeof n.formatEntityAttributeValueToParts == "function") {
      const [g, ...y] = n.formatEntityAttributeValueToParts(r, d, p).map((w) => w.value);
      return { number: g, unit: y.join("").trim() };
    }
  } catch {
  }
  return { number: Zt(p, n.locale), unit: Qo(n, r, d) };
}
function Gd(n, r, d, p) {
  try {
    if (typeof n.formatEntityAttributeValue == "function") return n.formatEntityAttributeValue(r, d, p);
  } catch {
  }
  const g = Vi(n, r, d, p);
  return (g.number + " " + g.unit).trim();
}
function _o(n, r) {
  var p;
  try {
    if (typeof n.formatEntityState == "function") return n.formatEntityState(r);
  } catch {
  }
  const d = (p = r.attributes) == null ? void 0 : p.unit_of_measurement;
  return Tm[r.state] || (d && ie(r.state) ? Zt(r.state, n.locale) + " " + d : r.state);
}
function $o(n, r) {
  var d;
  try {
    if (typeof n.formatEntityName == "function") return n.formatEntityName(r, { type: "entity" });
  } catch {
  }
  return ((d = r.attributes) == null ? void 0 : d.friendly_name) || r.entity_id;
}
const Ud = (n) => n < 3 ? "low" : n < 6 ? "moderate" : n < 8 ? "high" : n < 11 ? "very_high" : "extreme", Pi = (n) => Kp.find(([, r]) => n <= r)[0];
function e0(n, r) {
  if (r === "Beaufort") return Math.round(n);
  const d = r ? Rm[r] : void 0;
  if (d === void 0) return;
  const p = Pm.findIndex((g) => n * d < g);
  return p === -1 ? 12 : p;
}
const Yd = (n, r) => {
  const d = r ? Hm[r] : void 0;
  return d === void 0 ? void 0 : n * d;
}, Zd = (n) => Object.keys(n.states || {}).find((r) => {
  var d, p;
  return r.startsWith("sensor.") && ((p = (d = n.entities) == null ? void 0 : d[r]) == null ? void 0 : p.platform) === "moon";
}), Bl = (n) => Object.values(n.states || {}).filter((r) => {
  var d, p;
  return r.entity_id.startsWith("sensor.") && ((d = r.attributes) == null ? void 0 : d.device_class) === "precipitation" && ["total", "total_increasing"].includes(((p = r.attributes) == null ? void 0 : p.state_class) ?? "") && Kn(n, r.entity_id);
}).map((r) => r.entity_id).sort()[0];
function a0(n) {
  var d;
  const r = {};
  for (const [p, g] of Object.entries(((d = n == null ? void 0 : n.core) == null ? void 0 : d.integration) ?? {})) {
    if (g && "integration_type" in g) {
      r[p] = g.categories;
      continue;
    }
    for (const [y, w] of Object.entries((g == null ? void 0 : g.integrations) ?? {})) r[y] = w == null ? void 0 : w.categories;
  }
  return r;
}
const lf = (n, r, d) => {
  var g, y, w;
  const p = (y = (g = n.entities) == null ? void 0 : g[d]) == null ? void 0 : y.platform;
  return !!p && !!((w = r[p]) != null && w.includes(Em));
};
function o0(n, r) {
  const d = /* @__PURE__ */ new Map();
  return Object.values(n.states || {}).filter((p) => {
    var g;
    return p.entity_id.startsWith("sensor.") && Ui.includes(((g = p.attributes) == null ? void 0 : g.device_class) ?? "") && Kn(n, p.entity_id) && lf(n, r, p.entity_id);
  }).sort((p, g) => p.entity_id.localeCompare(g.entity_id)).forEach((p) => {
    d.has(p.attributes.device_class) || d.set(p.attributes.device_class, p.entity_id);
  }), Ui.map((p) => d.get(p)).filter(Boolean);
}
const n0 = (n, r) => Object.values(n.states || {}).filter((d) => {
  var p, g;
  return d.entity_id.startsWith("sensor.") && Kn(n, d.entity_id) && lf(n, r, d.entity_id) && (((g = (p = n.entities) == null ? void 0 : p[d.entity_id]) == null ? void 0 : g.translation_key) ?? d.entity_id).toLowerCase().includes("pollen");
}).map((d) => d.entity_id).sort();
function Kd(n, r, d) {
  const p = Math.max(r - n, 1e-6), g = d[d.length - 1], y = d.find((M) => p / M <= 4) ?? g * Math.ceil(p / (4 * g)), w = Math.floor(n / y) * y;
  let A = Math.ceil(r / y) * y;
  A === w && (A = w + y);
  const q = [];
  for (let M = w; M <= A + y / 1e3; M += y) q.push(M);
  return { min: w, max: A, ticks: q };
}
const r0 = (n, r, d) => {
  const p = (w) => [1, 3, 5].map((A) => parseInt(w.slice(A, A + 2), 16)), g = p(n), y = p(r);
  return "rgb(" + g.map((w, A) => Math.round(w + (y[A] - w) * d)).join(", ") + ")";
}, i0 = (n, r, d, p) => {
  const g = d * Math.abs(1 - 2 * p), y = p < 0.5 ? 0 : 1;
  return "M " + n + " " + (r - d) + " A " + d + " " + d + " 0 0 0 " + n + " " + (r + d) + " A " + g + " " + d + " 0 0 " + y + " " + n + " " + (r - d) + " Z";
}, ta = ({ icon: n, name: r, sub: d, visual: p, double: g, backdrop: y, cls: w, zone: A, callouts: q }) => '<div class="wbCard wbSquare' + (g ? " wbDouble" : "") + (y ? " wbHasBackdrop" : "") + (A != null ? " wbZoned" : "") + (w ? " " + w : "") + '">' + (y ? '<div class="wbBackdrop" aria-hidden="true">' + y + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + Xp(n) + '</div><div class="wbText"><span class="wbName">' + vt(r) + "</span>" + (d ? '<span class="wbSub">' + vt(d) + "</span>" : "") + "</div></div>" + (A != null ? '<div class="wbZone">' + A + "</div>" + (q != null && q.length ? '<div class="wbCallouts">' + q.slice(0, 3).map((M) => Array.isArray(M) ? '<span class="wbCallout"><span>' + vt(M[0]) + "</span><span>" + vt(M[1]) + "</span></span>" : '<span class="wbCallout wbAdvice"><span>' + vt(M) + "</span></span>").join("") + "</div>" : "") : '<div class="wbVisual">' + p + "</div>") + "</div>", Hi = (n) => '<div class="wbZoneM">' + n + "</div>", Da = (n, r) => '<div class="wbValue"><span class="wbNum">' + vt(n) + "</span>" + (r ? '<span class="wbUnitV">' + vt(r) + "</span>" : "") + "</div>";
function s0(n) {
  const r = n.max - n.min || 1, d = (A) => 100 - (Math.min(n.max, Math.max(n.min, A)) - n.min) / r * 100, p = (A) => A / Pr * 100 + "%", g = (A) => A.map((q) => q.t + "," + d(q.v)).join(" "), y = n.kind === "line" ? n.points : [];
  let w = '<div class="wbDayChart"><div class="wbDcSun">' + n.sun.map((A) => '<span class="wbDcSunMark" style="left:' + p(A.t) + '">' + To(A.rise ? ee.sunsetUp : ee.sunsetDown) + vt(A.label) + "</span>").join("") + "</div>";
  return w += '<div class="wbDcY">' + n.ticks.map((A) => '<span style="top:' + d(A) + '%">' + vt(n.format(A)) + "</span>").join("") + "</div>", w += '<div class="wbDcPlot"><svg viewBox="0 0 ' + Pr + ' 100" preserveAspectRatio="none">' + n.night.map(([A, q]) => '<rect class="wbDcNight" x="' + A + '" y="0" width="' + (q - A) + '" height="100"></rect>').join("") + n.ticks.map((A) => '<line class="wbDcGrid" x1="0" x2="' + Pr + '" y1="' + d(A) + '" y2="' + d(A) + '" vector-effect="non-scaling-stroke"></line>').join("") + n.sun.map((A) => '<line class="wbDcSunLine" x1="' + A.t + '" x2="' + A.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (n.past && n.past.length > 1 ? '<polyline class="wbDcPast" points="' + g(n.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (y.length > 1 ? '<polygon class="wbDcArea" points="' + y[0].t + ",100 " + g(y) + " " + y[y.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + g(y) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (n.now ? '<line class="wbDcNow" x1="' + n.now.t + '" x2="' + n.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (n.kind === "bars" ? n.points.filter((A) => A.v > 0).map((A) => '<i class="wbDcBar" style="left:' + p(A.t + 12) + ";width:" + p(36) + ";height:" + (100 - d(A.v)) + '%"></i>').join("") : "") + (n.now && n.kind === "line" ? '<i class="wbDcDot" style="left:' + p(n.now.t) + ";top:" + d(n.now.v) + '%"></i>' : "") + (n.peak ? '<span class="wbDcPeak" style="left:' + p(n.peak.t) + ";top:" + d(n.peak.v) + '%">' + vt(n.peak.label) + "</span>" : "") + (n.note ? '<span class="wbDcNote">' + vt(n.note) + "</span>" : "") + "</div>", w += '<div class="wbDcX">' + n.hours.map((A) => '<span class="' + (A.minor ? "wbMinor" : "") + '" style="left:' + p(A.t) + '">' + vt(A.label) + "</span>").join("") + "</div></div>", w;
}
function Xd(n, r, d = 120, p = 300) {
  const w = n.map((H) => H.value), A = Math.min(...w), q = Math.max(...w), M = q - A || 1, D = (H) => H / (n.length - 1) * p, I = (H) => 18 + (1 - (H - A) / M) * (d - 18 - 18), z = n.map((H, nt) => [D(nt), I(H.value)]), Q = z.length > 2 ? zp(z) : "M" + z.map((H) => H[0].toFixed(1) + " " + H[1].toFixed(1)).join("L"), et = w.indexOf(q), at = w.indexOf(A), X = (H) => H === 0 ? "start" : H === n.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 ' + p + " " + d + '" aria-hidden="true">' + Gp(p, 18, d - 18) + ('<path class="wbArea" d="' + Q + "L" + p + " " + (d - 18) + "L0 " + (d - 18) + 'Z"></path>') + '<path class="wbLine" d="' + Q + '" vector-effect="non-scaling-stroke"></path><text x="' + D(et) + '" y="' + (I(q) - 6) + '" text-anchor="' + X(et) + '">' + vt(r(q)) + '</text><text x="' + D(at) + '" y="' + (I(A) + 14) + '" text-anchor="' + X(at) + '">' + vt(r(A)) + '</text><text x="0" y="' + d + '" text-anchor="start">' + vt(n[0].label) + '</text><text x="' + p + '" y="' + d + '" text-anchor="end">' + vt(n[n.length - 1].label) + "</text></svg>";
}
function l0(n, r) {
  const y = n.map((I) => I.value).concat([]), w = Math.min(...y) - 2, A = Math.max(...y) + 1, q = A - w || 1, M = 300 / n.length, D = (I) => (1 - (I - w) / q) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + n.map((I, z) => '<rect class="wbBar' + (I.now ? " wbNowBar" : "") + '" x="' + (z * M + M * 0.2) + '" y="' + D(I.value) + '" width="' + M * 0.6 + '" height="' + (104 - D(I.value)) + '" rx="6"></rect><text x="' + (z * M + M / 2) + '" y="120" text-anchor="middle">' + vt(I.label) + "</text>").join("") + "</svg>";
}
const c0 = [
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
], d0 = [[60, 92, 2.2], [72, 98, 1.6], [48, 100, 1.5], [85, 88, 1.8], [38, 92, 1.3], [66, 84, 1.2], [95, 80, 1.3], [25, 40, 1.4], [82, 30, 1.3], [55, 108, 1.2]], $d = [[54.4, 95, 1.8], [44.5, 56.6, 1.5], [33.5, 56.6, 1.1], [23.7, 40.1, 1.1]], p0 = [[30, 62], [48, 48], [72, 60], [96, 82], [86, 112], [30, 108], [16, 86]];
let f0 = 0;
function Jd(n, { getHass: r, entityId: d, style: p = "bitmap", motion: g = !0, cards: y, onOpen: w, hoursWindow: A, radarSource: q } = {}) {
  var dr, ii;
  const M = "wb" + ++f0 + "-", D = document.createElement("div");
  D.className = "wb", D.dataset.style = p;
  const I = document.createElement("div");
  I.className = "wbBento", D.appendChild(I), n.replaceChildren(D);
  const z = document.createElement("div");
  z.className = "wb wbPopup", z.dataset.style = p, z.hidden = !0;
  const Q = ["aq_tile", "pollen_tile", "radar_tile"], et = ["current", "hourly", "sun", "pollen_tile", "moon", "uv_index", "aq_tile", "humidity", "pressure", "wind", "visibility", "radar_tile", "compared_to_average", "precipitation", "air_quality"].filter((s) => !y || y.includes(s)), at = { current: "wide", hourly: "wide", compared_to_average: "double" }, X = ["sun", "moon", "uv_index", "aq_tile", "pollen_tile", "humidity", "pressure", "wind"], H = {};
  et.forEach((s) => {
    const u = document.createElement("div");
    u.className = "wbItem", u.dataset.card = s, u.dataset.size = at[s] || "tile", u.hidden = !0, X.includes(s) && (u.dataset.xl = ""), I.appendChild(u), H[s] = { el: u, html: null };
  });
  let nt = !1, lt = null, bt = 0, rt = -1, K = !1, Y = null, N = "";
  const yt = "homecore-next-view", Rt = (() => {
    try {
      return localStorage.getItem(yt);
    } catch {
      return null;
    }
  })(), st = { graph: void 0, range: { preset: "day" }, picking: !1, openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", hourlyView: Rt === "bars" ? "bars" : "strip", aq: void 0 }, U = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let qt = /* @__PURE__ */ new Date(), W = /* @__PURE__ */ new Date();
  const tt = {}, B = {}, pt = {}, ot = (s) => {
    var u;
    return ((u = pt[s]) == null ? void 0 : u.forecast) ?? [];
  }, it = (s, u) => {
    var m;
    return pt[u] ? (m = s.states) == null ? void 0 : m[pt[u].entityId] : void 0;
  };
  function xt(s) {
    const u = B[s];
    u && (u.unsub.then((m) => {
      typeof m == "function" && m();
    }).catch(() => {
    }), delete B[s]), pt[s] && delete pt[s];
  }
  function ft(s, u, m) {
    var T;
    if (typeof ((T = s.connection) == null ? void 0 : T.subscribeMessage) != "function") return;
    const b = { entityId: m };
    try {
      b.unsub = Promise.resolve(s.connection.subscribeMessage((O) => {
        nt || B[u] !== b || (O != null && O.forecast ? pt[u] = { entityId: m, forecast: O.forecast } : delete pt[u], cn());
      }, { type: "weather/subscribe_forecast", forecast_type: u, entity_id: m }));
    } catch (O) {
      b.unsub = Promise.reject(O);
    }
    b.unsub.catch(() => {
      B[u] === b && delete B[u];
    }), B[u] = b;
  }
  function kt(s, u) {
    var m;
    for (const b of ["daily", "hourly"]) {
      const T = t0(s, u, b);
      ((m = B[b]) == null ? void 0 : m.entityId) !== (T == null ? void 0 : T.entity_id) && (xt(b), T && ft(s, b, T.entity_id));
    }
  }
  const It = (s, u, m, b = !1) => s.callWS({
    type: "history/history_during_period",
    start_time: m.toISOString(),
    end_time: (/* @__PURE__ */ new Date()).toISOString(),
    entity_ids: [u],
    minimal_response: b,
    no_attributes: b,
    significant_changes_only: !1
  });
  async function re(s, u) {
    var j, Z, F;
    const m = Ce(s, u, "pressure");
    if (!m) return;
    const b = m.stateObj.entity_id, T = await It(s, b, new Date(Date.now() - 3 * te)), O = (F = (Z = (j = T == null ? void 0 : T[b]) == null ? void 0 : j.find(($) => {
      var J;
      return typeof ((J = $.a) == null ? void 0 : J.pressure) == "number";
    })) == null ? void 0 : Z.a) == null ? void 0 : F.pressure;
    U.pressureHistory = typeof O == "number" ? { entityId: b, value: O } : void 0;
  }
  async function gt(s, u) {
    var Z;
    const m = Ce(s, u, "temperature");
    if (!m) return;
    const b = m.stateObj.entity_id, T = tn(/* @__PURE__ */ new Date()), O = await It(s, b, new Date(T.getTime() - vm * pa)), j = /* @__PURE__ */ new Map();
    for (const F of (O == null ? void 0 : O[b]) ?? []) {
      const $ = (Z = F.a) == null ? void 0 : Z.temperature, J = new Date((F.lc ?? F.lu) * 1e3);
      if (typeof $ != "number" || J >= T) continue;
      const ut = J.toDateString();
      j.set(ut, Math.max(j.get(ut) ?? -1 / 0, $));
    }
    U.temperatureHistory = { entityId: b, dailyHighs: [...j.values()], days: [...j.entries()].map(([F, $]) => ({ date: new Date(F), high: $ })) };
  }
  async function Ke(s) {
    const u = Bl(s);
    if (!u) return;
    const m = await s.callWS({ type: "recorder/statistic_during_period", statistic_id: u, rolling_window: { duration: { hours: 24 } } });
    U.rain = { entityId: u, change: (m == null ? void 0 : m.change) ?? void 0 };
  }
  function so() {
    const s = r == null ? void 0 : r();
    if (!s || nt || typeof s.callWS != "function") return;
    const u = Ct(s);
    U.lastFetch = Date.now(), [re(s, u), gt(s, u), Ke(s)].forEach((m) => m.then(() => cn(), () => {
    }));
  }
  async function en() {
    const s = r == null ? void 0 : r();
    if (!s) return;
    const u = Ce(s, Ct(s), "temperature");
    if (!u) return;
    const m = u.stateObj.entity_id, b = tn(/* @__PURE__ */ new Date());
    try {
      const T = await It(s, m, b), O = (j) => ((T == null ? void 0 : T[m]) ?? []).map((Z) => {
        var F;
        return { time: Z.lu * 1e3, value: (F = Z.a) == null ? void 0 : F[j] };
      }).filter((Z) => typeof Z.value == "number");
      U.todayHistory = { day: b.toDateString(), fetched: Date.now(), temperature: O("temperature"), humidity: O("humidity") }, cn();
    } catch {
    }
  }
  async function Eo(s) {
    const u = r == null ? void 0 : r();
    if (u)
      try {
        const m = await It(u, s, new Date(Date.now() - 24 * te), !0), b = ((m == null ? void 0 : m[s]) ?? []).filter((O) => ie(O.s)), T = Math.max(1, Math.ceil(b.length / 48));
        U.aqHistory = { entityId: s, points: b.filter((O, j) => j % T === 0).map((O) => ({ label: We(new Date(O.lu * 1e3), u), value: Number(O.s) })) }, cn();
      } catch {
      }
  }
  function Ga(s) {
    U.categories === void 0 && (U.categories = null, Promise.resolve().then(() => s.callWS({ type: "integration/descriptions" })).then((u) => {
      U.categories = a0(u);
    }, () => {
      U.categories = {};
    }).then(() => cn()));
  }
  function Ct(s) {
    var m;
    const u = Object.keys(s.states || {}).filter((b) => b.startsWith("weather.") && Kn(s, b)).sort();
    return d && ((m = s.states) != null && m[d]) ? [d, ...u.filter((b) => b !== d)] : u;
  }
  const _e = (s) => U.categories ? { air: o0(s, U.categories), pollen: n0(s, U.categories) } : { air: [], pollen: [] };
  function Oe(s, u, m, b) {
    if (p === "line") return '<span class="wbWx wbS' + u + ' wbLineIcon" aria-hidden="true">' + Tl(s, m || s === "clear-night") + "</span>";
    if (p === "smooth") {
      const T = Vh(s, u === 90, m, M + "g-" + b);
      return '<span class="wbWx wbS' + u + " wb" + T.k[0].toUpperCase() + T.k.slice(1) + (T.night ? " wbNight" : "") + '" aria-hidden="true">' + T.svg + "</span>";
    }
    return '<span class="wbWx wbS' + u + '" aria-hidden="true"><canvas data-wb-wx="' + vt(Ap(s, m)) + '" data-size="' + u + '"></canvas></span>';
  }
  const Ut = () => ot("daily").filter((s) => s.templow != null).slice(0, pm);
  function oa(s, u) {
    const m = new Date(u.datetime), b = /* @__PURE__ */ new Date();
    return Vn(m, b) ? ht.today : Vn(m, new Date(b.getTime() + pa)) ? ht.tomorrow : Vd(m, s);
  }
  const Xn = (s, u, m) => m === 0 ? oa(s, u) : Vd(new Date(u.datetime), s);
  function zt(s, u) {
    var J, ut, Pt, Tt;
    const m = Qm(s, u);
    if (!m) return "";
    const b = Ut(), T = st.openDay !== void 0 ? b[st.openDay] : void 0, O = Ce(s, u, "temperature"), j = b[0], Z = j && Vn(new Date(j.datetime), /* @__PURE__ */ new Date()), F = ((ut = (J = s.config) == null ? void 0 : J.unit_system) == null ? void 0 : ut.temperature) || ((Pt = m.attributes) == null ? void 0 : Pt.temperature_unit) || "";
    let $ = '<div class="wbCard wbWeather' + (T ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (T ? " inert" : "") + '><div class="wbNow">' + (w ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + vt(ht.openPage) + '">' : '<div class="wbCurrent">') + Oe(m.state, 90, Jm(s), "now") + '<div class="wbTempBlock">' + (O && ie(O.value) ? '<div class="wbTemp"><span class="wbDeg">' + vt(Zt(Math.round(Number(O.value)), s.locale)) + '</span><span class="wbUnit">' + vt(F) + "</span></div>" : "") + '<div class="wbPlace">' + vt(((Tt = s.config) == null ? void 0 : Tt.location_name) ?? "") + "</div></div>" + (w ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + vt(_o(s, m)) + "</div>" + (Z && j.templow != null ? '<div class="wbRange">' + vt(Ye(ht.range, { high: fe(s, j.temperature), low: fe(s, j.templow) })) + "</div>" : "") + "</div></div>";
    if ($ += wa(s) + we(s), b.length) {
      const Mt = Z && O && ie(O.value) ? fe(s, O.value) : "", jt = (Lt, ct, Ht) => Lt === 0 && Mt ? '<span class="wbAsDay">' + vt(ct) + '</span><span class="wbAsNow">' + vt(Ht) + "</span>" : vt(ct);
      $ += '<div class="wbColumns" role="list">' + b.map((Lt, ct) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + ct + '" data-wb-focus="col-' + ct + '"><span class="wbDay">' + jt(ct, Xn(s, Lt, ct), ht.now) + "</span>" + Oe(Lt.condition ?? "cloudy", 60, !1, "col" + ct) + '<span class="wbTemps"><span class="wbHi">' + jt(ct, fe(s, Lt.temperature), Mt) + '</span><span class="wbLo">' + vt(fe(s, Lt.templow)) + "</span></span></button>").join("") + "</div>", $ += '<div class="wbHalves" role="list">' + b.map((Lt, ct) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + ct + '" data-wb-focus="half-' + ct + '">' + Oe(Lt.condition ?? "cloudy", 40, !1, "half" + ct) + '<span class="wbText"><span class="wbName">' + vt(oa(s, Lt)) + '</span><span class="wbSub">' + vt(Ye(ht.highLow, { high: fe(s, Lt.temperature), low: fe(s, Lt.templow) })) + "</span></span></button>").join("") + "</div>";
    }
    return $ + "</div>" + (T ? Fr(s, u, T) : "") + "</div>";
  }
  const ba = {
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
  }, Nr = {
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
  function Or(s) {
    const u = Date.now(), m = ot("hourly").filter((ut) => new Date(ut.datetime).getTime() > u - te).slice(0, 13);
    if (m.length < 2) return "";
    const b = (ut) => We(new Date(ut.datetime), s), T = (ut) => ba[ut.condition] || "", O = (ut) => Nr[ut.condition] || ut.condition;
    let j = T(m[0]);
    if (!j) return "";
    let Z = m[0], F = 0;
    for (const ut of m.slice(1))
      F === 2 || O(ut) === O(Z) || !T(ut) || (j += (F ? " and " : ", ") + T(ut) + " from " + b(ut), Z = ut, F++);
    const $ = Number(m[0].temperature), J = m.filter((ut) => ie(ut.temperature));
    if (ie($) && J.length) {
      const ut = J.reduce((Tt, Mt) => Number(Mt.temperature) < Number(Tt.temperature) ? Mt : Tt), Pt = J.reduce((Tt, Mt) => Number(Mt.temperature) > Number(Tt.temperature) ? Mt : Tt);
      $ - Number(ut.temperature) >= 3 ? j += ", down to " + fe(s, ut.temperature) + " by " + b(ut) : Number(Pt.temperature) - $ >= 3 && (j += ", up to " + fe(s, Pt.temperature) + " by " + b(Pt));
    }
    return j[0].toUpperCase() + j.slice(1) + ".";
  }
  const wa = (s) => {
    const u = Or(s);
    return u ? '<div class="wbSummary"><p class="wbSummaryText">' + vt(u) + "</p></div>" : "";
  };
  function we(s) {
    const [u, m] = Bi[A == null ? void 0 : A()] || Bi.day, b = Date.now(), T = ot("hourly").filter((O) => {
      const j = new Date(O.datetime), Z = j.getHours();
      return j.getTime() > b - te / 2 && Z >= u && Z < m && ie(O.temperature);
    }).slice(0, 4);
    return T.length ? '<div class="wbNextHours" role="list">' + T.map((O, j) => '<div class="wbHour" role="listitem"><span class="wbHourTime">' + vt(We(new Date(O.datetime), s)) + "</span>" + Oe(O.condition ?? "cloudy", 40, O.is_daytime === !1, "hr" + j) + '<span class="wbHourTemp">' + vt(fe(s, O.temperature)) + "</span></div>").join("") + "</div>" : "";
  }
  function Ir(s) {
    const u = s.getTime(), m = Date.now() - te;
    return ot("hourly").filter((b) => {
      const T = new Date(b.datetime).getTime();
      return T >= u && T < u + pa && T > m;
    });
  }
  function an(s) {
    if (!s.length) return ["temperature"];
    const u = ["temperature"];
    return s.some((m) => m.precipitation != null || m.precipitation_probability != null) && u.push("precipitation"), s.some((m) => m.humidity != null) && u.push("humidity"), u;
  }
  function Fr(s, u, m) {
    const b = tn(new Date(m.datetime)), T = Ir(b), O = an(T), j = O.includes(st.dayMode) ? st.dayMode : "temperature", Z = (F) => F === "humidity" ? ht.humidity : ht.modes[F];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + Oe(m.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + vt(oa(s, m)) + '</span><span class="wbSub">' + vt(Ye(ht.highLow, { high: fe(s, m.temperature), low: fe(s, m.templow) })) + '</span></div><button class="wbBack" title="' + vt(ht.back) + '" data-wb="close-day" data-wb-focus="back-day">' + To(ee.back) + "</button></div>" + (O.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + O.map((F) => '<button aria-pressed="' + (F === j) + '" data-wb="day-mode" data-mode="' + F + '" data-wb-focus="day-mode-' + F + '">' + vt(Z(F)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + s0($n(s, u, b, T, j)) + "</div></div>";
  }
  function $n(s, u, m, b, T) {
    var fr;
    const O = m.getTime(), j = Date.now(), Z = Vn(m, /* @__PURE__ */ new Date()), F = (Kt) => (Kt - O) / Re, $ = (Kt) => We(new Date(Kt), s), J = (Kt) => new Date(Kt.datetime).getTime(), ut = [0, 3, 6, 9, 12, 15, 18, 21].map((Kt) => ({ t: Kt * 60, label: $(O + Kt * te), minor: Kt % 6 !== 0 })), { rise: Pt, set: Tt } = zn(s, m), Mt = [], jt = [];
    Pt && (Mt.push({ t: F(Pt.getTime()), label: $(Pt.getTime()), rise: !0 }), jt.push([0, F(Pt.getTime())])), Tt && (Mt.push({ t: F(Tt.getTime()), label: $(Tt.getTime()), rise: !1 }), jt.push([F(Tt.getTime()), Pr]));
    const Lt = Zn(s);
    !Pt && !Tt && Lt && Zi(new Date(O + pa / 2), Lt.lat, Lt.lon) < 0 && jt.push([0, Pr]);
    const ct = Z ? F(j) : void 0, Ht = { hours: ut, sun: Mt, night: jt };
    if (!b.length && !Z) return { ...Ht, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: ht.noHourly };
    if (T === "precipitation") {
      const Kt = b.some((Ge) => Ge.precipitation_probability != null), Ja = b.map((Ge) => ({ t: F(J(Ge)), v: Number((Kt ? Ge.precipitation_probability : Ge.precipitation) ?? 0) })), Go = Qo(s, it(s, "hourly"), "precipitation"), un = Math.max(0, ...Ja.map((Ge) => Ge.v)), ur = Kt ? 100 : Kd(0, Math.max(un, 1), [0.5, 1, 2, 5, 10]).max, Uo = (Ge) => Kt ? Zt(Ge, s.locale) + "%" : Zt(Ge, s.locale, { maximumFractionDigits: 1 }) + " " + Go, Yo = Ja.find((Ge) => Ge.v === un);
      return {
        ...Ht,
        kind: "bars",
        points: Ja,
        min: 0,
        max: ur,
        ticks: [0, ur / 2, ur],
        format: Uo,
        now: ct !== void 0 ? { t: ct, v: 0 } : void 0,
        peak: Yo && un > 0 ? { t: Yo.t + 30, v: Yo.v, label: Uo(Yo.v) } : void 0,
        note: un > 0 ? void 0 : ht.noRain
      };
    }
    const Ot = T === "humidity" ? "humidity" : "temperature", me = b.filter((Kt) => Kt[Ot] != null && (!Z || J(Kt) >= j)).map((Kt) => ({ t: F(J(Kt)), v: Number(Kt[Ot]) }));
    let St, ne = [];
    if (ct !== void 0) {
      const Kt = Ce(s, u, Ot);
      Kt && ie(Kt.value) && (St = { t: ct, v: Number(Kt.value) }, me.unshift(St)), ne = (((fr = U.todayHistory) == null ? void 0 : fr.day) === m.toDateString() ? U.todayHistory[Ot] : []).filter((Go) => Go.time <= j).map((Go) => ({ t: Math.max(0, F(Go.time)), v: Go.value })), St && ne.length && ne.push(St);
    }
    const oe = [...ne, ...me];
    if (!oe.length) return { ...Ht, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: ht.noHourly };
    const Xe = oe.map((Kt) => Kt.v), uo = Kd(Math.min(...Xe), Math.max(...Xe), Ot === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    Ot === "humidity" && (uo.min = Math.max(0, uo.min), uo.max = Math.min(100, uo.max), uo.ticks = uo.ticks.filter((Kt) => Kt >= 0 && Kt <= 100));
    const fn = Ot === "humidity" ? (Kt) => Zt(Kt, s.locale) + "%" : (Kt) => fe(s, Kt), pr = Ot === "temperature" ? oe.reduce((Kt, Ja) => Ja.v > Kt.v ? Ja : Kt) : void 0;
    return { ...Ht, kind: "line", points: me, past: ne, ...uo, format: fn, now: St, peak: pr ? { ...pr, label: fn(pr.v) } : void 0 };
  }
  function Jn(s) {
    const u = ["temperature"];
    return s.some((m) => m.precipitation_probability != null || m.precipitation != null) && u.push("precipitation"), s.some((m) => m.wind_speed != null) && u.push("wind"), u;
  }
  function Ro(s, u, m = Ed) {
    var O, j;
    const b = ot("daily"), T = [];
    for (let Z = 0; Z < m; Z++) for (const F of [!1, !0]) {
      const $ = s.getTime() + (Z * 24 + (F ? 12 : 0)) * te, J = $ + 12 * te, ut = {};
      u.forEach((Tt) => {
        const Mt = new Date(Tt.datetime).getTime();
        Tt.condition && Mt >= $ && Mt < J && (ut[Tt.condition] = (ut[Tt.condition] ?? 0) + (bm.has(Tt.condition) ? 2 : 1));
      });
      let Pt = (O = Object.entries(ut).sort((Tt, Mt) => Mt[1] - Tt[1])[0]) == null ? void 0 : O[0];
      if (!Pt) {
        const Tt = new Date($).toDateString();
        Pt = ((j = b.find((Mt) => new Date(Mt.datetime).toDateString() === Tt)) == null ? void 0 : j.condition) ?? "cloudy";
      }
      T.push({ cond: F && Pt === "sunny" ? "clear-night" : Pt, night: F });
    }
    return T;
  }
  function Ki(s, u, m) {
    const b = it(s, "hourly"), T = u.precipitation_probability != null ? Zt(u.precipitation_probability, s.locale) + "%" : "", O = u.precipitation ? Zt(u.precipitation, s.locale) + " " + Qo(s, b, "precipitation") : "";
    switch (m) {
      case "precipitation":
        return T ? [T, O] : [O || "–", ""];
      case "wind":
        return u.wind_speed != null ? [Zt(Math.round(u.wind_speed), s.locale), Qo(s, b, "wind_speed")] : ["–", ""];
      default:
        return [fe(s, u.temperature), (u.precipitation_probability ?? 0) >= 20 ? T : ""];
    }
  }
  function Ua(s, u, m) {
    const [b, T] = Bi[A == null ? void 0 : A()] || Bi.day, O = [];
    for (let j = 0; j < 4 && O.length < 3; j++) {
      const Z = /* @__PURE__ */ new Date();
      Z.setHours(0, 0, 0, 0), Z.setDate(Z.getDate() + j);
      const F = new Date(Z);
      F.setHours(T, 0, 0, 0), Z.setHours(b, 0, 0, 0), !(F.getTime() <= m || !u.some(($) => {
        const J = new Date($.datetime).getTime();
        return J >= Z.getTime() && J <= F.getTime();
      })) && O.push({ a: Z.getTime(), b: F.getTime(), label: oa(s, { datetime: Z.toISOString() }) });
    }
    return O;
  }
  function ve(s, u, m, b, T, O) {
    const j = (m.b - u.a) / te, Z = (ct) => ((ct - u.a) / te).toFixed(3), F = 80, $ = 32, J = [];
    for (const ct = new Date(u.a - pa); ct.getTime() < m.b + pa; ct.setDate(ct.getDate() + 1)) {
      const { rise: Ht, set: Ot } = zn(s, new Date(ct));
      Ht && Ot && J.push({ rise: Ht.getTime(), set: Ot.getTime() });
    }
    const ut = (ct, Ht) => F - (F - $) * Math.sin(Math.PI * (Ht - ct.rise) / (ct.set - ct.rise)), Pt = (ct) => !J.some((Ht) => ct >= Ht.rise && ct <= Ht.set);
    let Tt = "", Mt = "", jt = "";
    J.forEach((ct, Ht) => {
      const Ot = [];
      for (let St = ct.rise; St <= ct.set; St += 15 * Re) Ot.push(Z(St) + "," + ut(ct, St).toFixed(2));
      Ot.push(Z(ct.set) + "," + F), Tt += '<polyline class="wbLineArc" points="' + Ot.join(" ") + '"/>';
      const me = J[Ht + 1];
      me && (Tt += '<rect class="wbLineNight" x="' + Z(ct.set) + '" y="0" width="' + ((me.rise - ct.set) / te).toFixed(3) + '" height="100"/>'), [[ct.rise, "↑"], [ct.set, "↓"]].forEach(([St, ne]) => {
        St < u.a || St > m.b || (Mt += '<line class="wbLineEdge" x1="' + Z(St) + '" x2="' + Z(St) + '" y1="0" y2="100"/>', jt += '<span class="wbLineTime" style="left:' + O(St) + '">' + ne + " " + vt(We(new Date(St), s)) + "</span>");
      });
    });
    const Lt = J.find((ct) => T >= ct.rise && T <= ct.set);
    return '<svg class="wbLineArt" viewBox="0 0 ' + j + ' 100" preserveAspectRatio="none" aria-hidden="true">' + Tt + Mt + '<line class="wbLineHorizon" x1="0" x2="' + j + '" y1="' + F + '" y2="' + F + '"/></svg>' + jt + (Lt ? '<span class="wbLineNow" style="left:' + O(T) + ";top:" + ut(Lt, T) + '%">' + Tl("sunny", !1) + "</span>" : "") + b.filter((ct) => ct.entry && !ct.now).map((ct) => '<span class="wbLineGlyph' + ct.edge + '" style="left:' + O(ct.t) + '">' + Tl(ct.entry.condition ?? "cloudy", Pt(ct.t)) + "</span>").join("");
  }
  function Qn(s, u) {
    delete tt.hourly;
    const m = st.hourlyView === "bars" ? "bars" : "strip", b = '<div class="wbHeader"><h2 class="wbTitle">' + vt(m === "bars" ? ht.nextDays : ht.nextHours) + '</h2><div class="wbSegments wbViews" role="group" aria-label="' + vt(ht.showAs) + '">' + ["strip", "bars"].map((St) => '<button aria-pressed="' + (St === m) + '" data-wb="hourly-view" data-view="' + St + '" data-wb-focus="hourly-view-' + St + '">' + vt(ht.views[St]) + "</button>").join("") + "</div></div>";
    if (m === "bars") return tr(s, u, b);
    const T = ot("hourly"), O = Math.floor(Date.now() / Re) * Re, j = T.filter((St) => new Date(St.datetime).getTime() > O - te);
    if (!j.length) return "";
    const Z = Jn(j), F = Z.includes(st.hourlyMode) ? st.hourlyMode : "temperature", $ = Ua(s, T, O);
    if (!$.length) return "";
    const J = $[0], ut = $[$.length - 1], Pt = (J.b - J.a) / te, Tt = (St) => "calc(var(--wb-u) * " + ((St - J.a) / te).toFixed(3) + ")", Mt = new Date(J.a);
    Mt.setHours(6, 0, 0, 0), Mt.getTime() > J.a && Mt.setDate(Mt.getDate() - 1);
    const jt = Math.ceil((ut.b - Mt.getTime()) / pa);
    p !== "line" && (tt.hourly = { segs: Ro(Mt, T, jt), seed: Mt.getDate(), columns: jt });
    const Lt = (St) => St === J.a ? " wbFirst" : St === ut.b ? " wbLast" : "", ct = [];
    for (let St = J.a; St < ut.b; ) {
      const ne = new Date(St);
      ne.setHours(24, 0, 0, 0);
      const oe = Math.min(ne.getTime(), ut.b);
      ct.push({ a: St, b: oe, label: oa(s, { datetime: new Date(St).toISOString() }), page: $.find((Xe) => Xe.a >= St && Xe.a < oe) || $.find((Xe) => Xe.a < oe && Xe.b > St) }), St = oe;
    }
    const Ht = O > J.a && O < ut.b ? Math.floor((O - J.a) / (2 * te)) * 2 : 0, Ot = [];
    for (let St = J.a; St <= ut.b; St += te) {
      const ne = new Date(St), oe = Lt(St);
      !oe && ne.getHours() % um || !oe && (Math.abs(J.a - St) < 2 * te || Math.abs(ut.b - St) < 2 * te) || O >= J.a && Math.abs(St - O) < 1.5 * te && !oe || Ot.push({ t: St, edge: oe, label: We(ne, s), entry: St >= O - te ? T.find((Xe) => new Date(Xe.datetime).getTime() === St) : void 0 });
    }
    O > J.a && O < J.b && Ot.push({ t: O, edge: O - J.a < te ? " wbFirst" : J.b - O < te ? " wbLast" : "", label: ht.now, entry: j[0], now: !0 });
    const me = (St, ne) => '<span class="wbMark' + St.edge + (St.now ? " wbNowMark" : "") + '" style="left:' + Tt(St.t) + '">' + ne + "</span>";
    return '<div class="wbCard wbHc wbHourly">' + b + (Z.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + Z.map((St) => '<button aria-pressed="' + (St === F) + '" data-wb="hourly-mode" data-mode="' + St + '" data-wb-focus="hourly-mode-' + St + '">' + vt(ht.modes[St]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll wbPaged" tabindex="0" aria-label="' + vt(ht.nextHours) + '" data-span="' + Pt + '" data-start="' + Ht + '"><div class="wbStrip" style="--wb-u:calc(100cqw / ' + Pt + ");width:calc(var(--wb-u) * " + (ut.b - J.a) / te + ')">' + // a stop every two hours (Matt, 1 Nov): a swipe settles on one, a flick runs on past several
    [...Array(Math.floor((ut.b - J.a) / (2 * te)) + 1)].map((St, ne) => '<i class="wbSnap" style="left:' + Tt(J.a + ne * 2 * te) + '"></i>').join("") + '<div class="wbDays">' + ct.map((St, ne) => {
      var oe;
      return '<span class="wbDaySpan" style="width:calc(var(--wb-u) * ' + ((St.b - St.a) / te).toFixed(3) + ')"><button class="wbDayName" data-wb="hours-day" data-hours="' + (ne === 0 ? Ht : ((((oe = St.page) == null ? void 0 : oe.a) ?? St.a) - J.a) / te) + '" data-wb-focus="hours-day-' + ne + '">' + vt(St.label) + "</button></span>";
    }).join("") + '</div><div class="wbRow wbTimes">' + Ot.map((St) => me(St, vt(St.label))).join("") + "</div>" + (p === "line" ? '<div class="wbSky wbLineSky">' + ve(s, J, ut, Ot, O, Tt) : '<div class="wbSky"><div class="wbSkyArt" style="left:' + Tt(Mt.getTime()) + ";width:calc(var(--wb-u) * " + jt * 24 + ')"><canvas data-wb-strip="hourly"' + (p === "smooth" ? "" : ' class="wbPixels"') + "></canvas></div>") + (O > J.a ? '<i class="wbPast" style="width:' + Tt(Math.min(O, ut.b)) + '"></i><i class="wbNowLine" style="left:' + Tt(O) + '"></i>' : "") + ct.slice(1).map((St) => '<i class="wbMidnight" style="left:' + Tt(St.a) + '"></i>').join("") + '</div><div class="wbRow wbValues">' + Ot.map((St) => {
      if (!St.entry) return "";
      const [ne, oe] = Ki(s, St.entry, F);
      return me(St, '<span class="wbPrimaryV">' + vt(ne) + '</span><span class="wbSecondary">' + vt(oe) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function qr(s) {
    const u = hm, m = u.findIndex(([F]) => F >= s);
    if (m <= 0) return "rgb(" + u[m < 0 ? u.length - 1 : 0][1].join(",") + ")";
    const [b, T] = u[m - 1], [O, j] = u[m], Z = (s - b) / (O - b);
    return "rgb(" + T.map((F, $) => Math.round(F + (j[$] - F) * Z)).join(",") + ")";
  }
  function tr(s, u, m) {
    var Tt;
    const b = ot("daily").filter((Mt) => ie(Mt.templow) && ie(Mt.temperature)).slice(0, 7);
    if (!b.length) return "";
    const T = Math.min(...b.map((Mt) => Number(Mt.templow))), O = Math.max(...b.map((Mt) => Number(Mt.temperature))), j = Math.max(1, O - T), Z = (Mt) => Math.max(0, Math.min(100, (Mt - T) / j * 100)).toFixed(2), F = /F/.test(Qo(s, it(s, "daily"), "temperature")), $ = (Mt) => F ? (Mt - 32) / 1.8 : Mt, J = "linear-gradient(90deg," + [0, 0.25, 0.5, 0.75, 1].map((Mt) => qr($(T + Mt * j)) + " " + Mt * 100 + "%").join(",") + ")", ut = (Tt = Ce(s, u, "temperature")) == null ? void 0 : Tt.value;
    return '<div class="wbCard wbHc wbHourly wbBars' + (Jn(ot("hourly").filter((Mt) => new Date(Mt.datetime).getTime() > Date.now() - te)).length > 1 ? " wbTabbed" : "") + '">' + m + '<div class="wbDayBars" role="list">' + b.map((Mt, jt) => {
      const Lt = oa(s, Mt), ct = Vn(new Date(Mt.datetime), /* @__PURE__ */ new Date()), Ht = Number(Mt.templow), Ot = Number(Mt.temperature);
      return '<div class="wbDayBar" role="listitem" aria-label="' + vt(Ye(ht.rangeRow, { day: Lt, low: fe(s, Ht), high: fe(s, Ot) })) + '"><span class="wbRangeDay">' + vt(Lt) + "</span>" + Oe(Mt.condition, 40, !1, "r" + jt) + '<span class="wbRangeLo">' + vt(fe(s, Ht)) + '</span><span class="wbRangeTrack"><i class="wbRangeFill" style="background:' + J + ";clip-path:inset(0 " + (100 - Z(Ot)) + "% 0 " + Z(Ht) + '% round 4px)"></i>' + (ct && ie(ut) ? '<i class="wbRangeNow" style="left:' + Z(Number(ut)) + '%"></i>' : "") + '</span><span class="wbRangeHi">' + vt(fe(s, Ot)) + "</span></div>";
    }).join("") + "</div></div>";
  }
  const Wr = [[-120, "#0d1530"], [-60, "#1c2550"], [-15, "#c9707a"], [30, "#f2a46a"], [60, "#b49bc8"], [90, "#5aa5e6"]], jr = [[-90, "#5aa5e6"], [-60, "#a99bd0"], [-30, "#f0a54a"], [15, "#c45a5a"], [60, "#3a2a5c"], [120, "#0d1530"]], Gt = (s, u) => {
    if (u <= s[0][0]) return s[0][1];
    for (let m = 1; m < s.length; m++) if (u <= s[m][0]) {
      const [b, T] = s[m - 1], [O, j] = s[m];
      return r0(T, j, (u - b) / (O - b));
    }
    return s[s.length - 1][1];
  }, mt = (s, u, m) => {
    if (!u || !m) return Wr[5][1];
    const b = (s.getTime() - m.getTime()) / Re;
    return b >= -90 ? Gt(jr, b) : Gt(Wr, (s.getTime() - u.getTime()) / Re);
  }, le = (s) => (s >= 60 ? Math.floor(s / 60) + "h " : "") + s % 60 + "m";
  function Vt(s) {
    const u = qt, { rise: m, set: b } = zn(s, u), T = m && b ? Math.round((b.getTime() - m.getTime()) / Re) : 0, O = Math.floor(T / 60), j = T % 60, Z = (me) => me ? We(me, s) : "–", F = new Date(u);
    F.setDate(F.getDate() + 1);
    const $ = zn(s, F), J = $.rise && $.set ? Math.round(($.set.getTime() - $.rise.getTime()) / Re) : 0, ut = new Date(u);
    ut.setDate(ut.getDate() - 1);
    const Pt = !!(m && b && u >= m && u <= b), Tt = !!(m && u < m), Mt = Pt ? m : Tt ? zn(s, ut).set : b, jt = Pt ? b : Tt ? m : $.rise, Lt = Mt && jt ? Math.min(1, Math.max(0, (u.getTime() - Mt.getTime()) / (jt.getTime() - Mt.getTime()))) : 0, ct = jt ? Math.max(0, Math.round((jt.getTime() - u.getTime()) / Re)) : 0, Ht = jt ? le(ct) : "–", Ot = Pt ? ht.untilSunset : ht.untilSunrise;
    return ta({
      icon: ee.sunny,
      name: ht.sun,
      sub: T ? Ye(ht.daylightShort, { hours: O, minutes: j }) : void 0,
      cls: "wbSunTile",
      callouts: [[ht.callout.riseTomorrow, Z($.rise)], [ht.callout.setTomorrow, Z($.set)], ...J ? [[ht.callout.dayTomorrow, Math.floor(J / 60) + "h " + J % 60 + "m"]] : []],
      zone: '<div class="wbSunZone" style="background:' + mt(u, m, b) + '"><svg class="wbSunTrack" data-up="' + (Pt ? 1 : 0) + '" data-f="' + Lt.toFixed(4) + '" aria-hidden="true"></svg><div class="wbSunCount"><span class="wbSunLeft">' + vt(Ht) + '</span><span class="wbSunWord">' + vt(Ot) + '</span></div><span class="wbSunAt wbSunRise">' + vt(Z(m)) + '</span><span class="wbSunAt wbSunSet">' + vt(Z(b)) + "</span></div>" + // at M, the countdown alone (Matt, 10 Nov): M's zone has room for one line
      Hi(Da(Ht, ""))
    });
  }
  const Ae = 22;
  function Ya(s) {
    const u = Math.round(s.clientWidth), m = Math.round(s.clientHeight), b = Ae, T = b / 2, O = u + "x" + m + ":" + s.dataset.f + ":" + s.dataset.up;
    if (u < b * 3 || m < b * 3 || s.dataset.drawn === O) return;
    s.dataset.drawn = O;
    const j = "M" + T + " " + (m - b) + "V" + b + "A" + T + " " + T + " 0 0 1 " + b + " " + T + "H" + (u - b) + "A" + T + " " + T + " 0 0 1 " + (u - T) + " " + b + "V" + (m - b), Z = "M" + (u - T) + " " + (m - b) + "A" + T + " " + T + " 0 0 1 " + (u - b) + " " + (m - T) + "H" + b + "A" + T + " " + T + " 0 0 1 " + T + " " + (m - b), F = 16, $ = 6, J = "M" + F + " 0H" + (u - F) + "A" + F + " " + F + " 0 0 1 " + u + " " + F + "V" + (m - F) + "A" + F + " " + F + " 0 0 1 " + (u - F) + " " + m + "H" + F + "A" + F + " " + F + " 0 0 1 0 " + (m - F) + "V" + F + "A" + F + " " + F + " 0 0 1 " + F + " 0ZM" + (b + $) + " " + b + "A" + $ + " " + $ + " 0 0 0 " + b + " " + (b + $) + "V" + (m - b - $) + "A" + $ + " " + $ + " 0 0 0 " + (b + $) + " " + (m - b) + "H" + (u - b - $) + "A" + $ + " " + $ + " 0 0 0 " + (u - b) + " " + (m - b - $) + "V" + (b + $) + "A" + $ + " " + $ + " 0 0 0 " + (u - b - $) + " " + b + "Z", ut = s.dataset.up === "1", Pt = Number(s.dataset.f) || 0, Tt = "http://www.w3.org/2000/svg";
    s.setAttribute("viewBox", "0 0 " + u + " " + m);
    const Mt = document.createElementNS(Tt, "path");
    Mt.setAttribute("d", ut ? j : Z), s.replaceChildren(Mt);
    const jt = Mt.getTotalLength(), Lt = Mt.getPointAtLength(jt * Pt), ct = ut ? jt : 0;
    s.innerHTML = '<defs><mask id="' + M + 'sun-day"><path d="' + j + '" fill="none" stroke="#fff" stroke-width="' + b * 2 + '"></path></mask><mask id="' + M + 'sun-done"><path d="' + j + '" fill="none" stroke="#fff" stroke-width="' + b * 2 + '" stroke-dasharray="' + (ut ? (ct * Pt).toFixed(1) + " " + (ct + 1).toFixed(1) : "0 99999") + '"></path></mask></defs><path class="wbSunBand" fill-rule="evenodd" d="' + J + '"></path><path class="wbSunBand wbSunDay" fill-rule="evenodd" d="' + J + '" mask="url(#' + M + 'sun-day)"></path><path class="wbSunBand wbSunDone" fill-rule="evenodd" d="' + J + '" mask="url(#' + M + 'sun-done)"></path><circle class="wbSunDot' + (ut ? "" : " wbSunNight") + '" cx="' + Lt.x.toFixed(1) + '" cy="' + Lt.y.toFixed(1) + '" r="' + T + '"></circle>';
  }
  const Za = typeof ResizeObserver == "function" ? new ResizeObserver((s) => s.forEach((u) => Ya(u.target))) : null;
  function Xi() {
    Za == null || Za.disconnect(), D.querySelectorAll("svg.wbSunTrack").forEach((s) => {
      Ya(s), Za == null || Za.observe(s);
    });
  }
  function er(s, u, m) {
    const b = (j) => M + "moon-" + j, T = s > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + b("terminator") + ')" d="' + i0(61, 61, 57.9, s) + '"' + (u ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", O = (j, Z, F, $, J, ut) => '<filter id="' + b(j) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + Z + '" numOctaves="' + F + '" seed="' + $ + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((Pt) => "<feFunc" + Pt + ' type="linear" slope="' + J + '" intercept="' + ut + '"></feFunc' + Pt + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + b("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + b("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + b("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + b("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + b("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + O("mottle", "0.045", 4, 3, 1.8, -0.4) + O("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + b("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + b("fill") + ')"></circle><g' + (m ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + b("soften") + ')">' + c0.map(([j, Z, F, $, J, ut]) => '<ellipse cx="' + j + '" cy="' + Z + '" rx="' + F + '" ry="' + $ + '" fill-opacity="' + ut + '" transform="rotate(' + J + " " + j + " " + Z + ')"></ellipse>').join("") + "</g>" + d0.map(([j, Z, F]) => '<circle class="wbCrater" cx="' + j + '" cy="' + Z + '" r="' + F + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + b("glow") + ')">' + p0.map(([j, Z]) => '<line x1="54.4" y1="95" x2="' + j + '" y2="' + Z + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + b("glow") + ')">' + $d.map(([j, Z, F]) => '<circle cx="' + j + '" cy="' + Z + '" r="' + F * 2 + '"></circle>').join("") + "</g>" + $d.map(([j, Z, F]) => '<circle class="wbBrightCenter" cx="' + j + '" cy="' + Z + '" r="' + F + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + b("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + b("grain") + ')"></rect>' + T + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function Vr(s) {
    const u = W, m = Zn(s), b = (m == null ? void 0 : m.lat) ?? 0, T = Dl(u), O = Zd(s), j = O ? s.states[O] : void 0, Z = An(j) && Dm.includes(j.state) ? j.state : $m(T.phase), { rise: F, set: $ } = m ? Xm(u, m.lat, m.lon) : {}, J = T.phase > 0.5 != b < 0, ut = Zt(Math.round(T.fraction * 100), s.locale) + "%", Pt = F ?? $;
    return Pt && We(Pt, s), ta({
      icon: ee.night,
      name: ht.moon,
      sub: ht.phases[Z],
      callouts: [...F ? [[ht.callout.moonrise, We(F, s)]] : [], ...$ ? [[ht.callout.moonset, We($, s)]] : [], [ht.callout.lit, ut]],
      // at M, how much of it is lit (Matt, 10 Nov)
      zone: '<div class="wbMoonBox">' + er(T.fraction, J, b < 0) + "</div>" + Hi(Da(Zt(Math.round(T.fraction * 100), s.locale), "%"))
    });
  }
  function $i(s, u) {
    var Mt;
    const m = Ce(s, u, "wind_speed");
    if (!m || !ie(m.value)) return "";
    const b = Ce(s, u, "wind_gust_speed"), T = Ce(s, u, "wind_bearing"), O = T && ie(T.value) ? Number(T.value) : void 0, j = e0(Number(m.value), (Mt = m.stateObj.attributes) == null ? void 0 : Mt.wind_speed_unit), Z = Vi(s, m.stateObj, "wind_speed", m.value), F = O !== void 0 ? ht.cardinal[Lm[((O + 11.25) / 22.5 | 0) % 16]] : void 0, $ = b ? Gd(s, b.stateObj, "wind_gust_speed", b.value) : void 0, J = [F ? Ye(ht.windFrom, { direction: F }) : void 0, j !== void 0 ? j + " " + ht.beaufort : void 0].filter(Boolean).join(" · ") || $, ut = (jt, Lt) => {
      const ct = (jt - 90) * Math.PI / 180;
      return [100 + Lt * Math.cos(ct), 100 + Lt * Math.sin(ct)];
    }, Pt = Array.from({ length: 36 }, (jt, Lt) => Lt * 10).map((jt) => {
      const Lt = jt % 90 === 0, [ct, Ht] = ut(jt, 97), [Ot, me] = ut(jt, Lt ? 83 : 89);
      return '<line class="wbTick' + (Lt ? " wbMajor" : "") + '" x1="' + ct + '" y1="' + Ht + '" x2="' + Ot + '" y2="' + me + '"></line>';
    }).join(""), Tt = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([jt, Lt]) => {
      const [ct, Ht] = ut(Lt, 64);
      return '<text class="wbLetter' + (jt === "n" ? " wbNorth" : "") + '" x="' + ct + '" y="' + Ht + '">' + vt(ht.cardinal[jt]) + "</text>";
    }).join("");
    return ta({ icon: ee.windy, name: ht.wind, sub: J, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + Pt + Tt + (O !== void 0 ? '<path class="wbMarker" transform="rotate(' + O + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + vt(Z.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + vt(Z.unit) + "</text></svg>" });
  }
  const Ji = (s, u) => {
    if (s < 3) return ht.advice.fine;
    if (s < 8) return ht.advice.sunblock;
    const m = Date.now(), b = ot("hourly").find((T) => T.uv_index != null && new Date(T.datetime).getTime() > m && T.uv_index < 6);
    return b && new Date(b.datetime).toDateString() === (/* @__PURE__ */ new Date()).toDateString() ? Ye(ht.advice.avoidUntil, { time: We(new Date(b.datetime), u) }) : ht.advice.avoidToday;
  };
  function Po(s, u) {
    const m = Ce(s, u, "uv_index");
    if (!m || !ie(m.value)) return "";
    const b = Number(m.value), T = ht.uvLevel[Ud(b)], O = /* @__PURE__ */ new Date();
    O.setHours(23, 59, 59, 999);
    const j = ot("hourly").filter((J) => J.uv_index != null && new Date(J.datetime) > /* @__PURE__ */ new Date() && new Date(J.datetime) <= O).reduce((J, ut) => !J || ut.uv_index > J.uv ? { uv: ut.uv_index, time: new Date(ut.datetime) } : J, void 0), Z = Bm[Ud(b)], F = 216 * Math.min(1, Math.max(0.08, 0.4 + (b - 4.5) * (0.5 / 5.5))), $ = '<svg class="wbUvArt" viewBox="0 0 216 198" preserveAspectRatio="xMinYMin slice" aria-hidden="true"><defs><radialGradient id="' + M + 'uv-sun" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="' + F.toFixed(1) + '"><stop offset="0" style="stop-color:color-mix(in srgb, ' + Z + ' 28%, #fff6dd)"></stop><stop offset=".62" style="stop-color:color-mix(in srgb, ' + Z + ' 62%, #fff6dd)"></stop><stop offset="1" style="stop-color:' + Z + '"></stop></radialGradient></defs><circle class="wbUvSun" cx="0" cy="0" r="' + F.toFixed(1) + '" fill="url(#' + M + 'uv-sun)"></circle></svg><div class="wbUvBig"><span class="wbUvNum">' + vt(Zt(Math.round(b), s.locale)) + '</span><span class="wbUvWord">' + vt(T) + "</span></div>" + Hi(Da(Zt(Math.round(b), s.locale), ""));
    return ta({
      icon: ee.sunnyAlert,
      name: ht.metrics.uv_index,
      sub: j && j.uv > b ? Ye(ht.uvPeak, { level: T, uv_index: Zt(Math.round(j.uv), s.locale), time: We(j.time, s) }) : T,
      zone: $,
      cls: "wbUv",
      callouts: [Ji(b, s), [ht.callout.now, Zt(Math.round(b), s.locale) + " · " + T], [ht.callout.peak, j && j.uv > b ? Zt(Math.round(j.uv), s.locale) + " at " + We(j.time, s) : ht.callout.now]]
    });
  }
  function zr(s) {
    const u = ot("daily")[0], m = U.temperatureHistory;
    if (!u || new Date(u.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !ie(u.temperature) || !m || m.dailyHighs.length < ym) return "";
    const b = Number(u.temperature), T = m.dailyHighs.reduce((Lt, ct) => Lt + ct, 0) / m.dailyHighs.length, O = Math.round(b - T) || 0, j = O > 0 ? "above" : O < 0 ? "below" : "same", Z = [...m.days, { date: /* @__PURE__ */ new Date(), high: b, today: !0 }], F = Z.map((Lt) => Lt.high).concat(T), $ = Math.min(...F) - 1, J = Math.max(...F) + 1, ut = (Lt) => (1 - (Lt - $) / (J - $)) * 100, Pt = (Lt) => (Lt + 0.5) / Z.length * 100, Tt = Z.map((Lt, ct) => [Pt(ct), ut(Lt.high)]), Mt = Tt.map(([Lt, ct], Ht) => (Ht ? "L" : "M") + Lt.toFixed(2) + " " + ct.toFixed(2)).join(""), jt = '<div class="wbCompareBars wbTrend" aria-hidden="true"><div class="wbTrendPlot"><svg viewBox="0 0 100 100" preserveAspectRatio="none"><defs><linearGradient id="' + M + 'trend" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--primary)" stop-opacity=".28"></stop><stop offset="1" style="stop-color:var(--primary)" stop-opacity="0"></stop></linearGradient></defs><path class="wbTrendArea" d="' + Mt + "L" + Tt[Tt.length - 1][0].toFixed(2) + " 100L" + Tt[0][0].toFixed(2) + ' 100Z" fill="url(#' + M + 'trend)"></path><line class="wbAvgLine" x1="0" x2="100" y1="' + ut(T).toFixed(2) + '" y2="' + ut(T).toFixed(2) + '" vector-effect="non-scaling-stroke"></line><path class="wbTrendLine" d="' + Mt + '" vector-effect="non-scaling-stroke"></path></svg><span class="wbTrendAvg" style="top:' + ut(T).toFixed(2) + '%">' + vt(fe(s, T)) + "</span>" + Z.map((Lt, ct) => {
      const Ht = Lt.today ? " wbToday" : "", Ot = "left:" + Pt(ct).toFixed(2) + "%;top:" + ut(Lt.high).toFixed(2) + "%";
      return '<i class="wbTrendDot' + Ht + '" style="' + Ot + '"></i><span class="wbAvgValue' + Ht + '" style="' + Ot + '">' + vt(fe(s, Lt.high)) + "</span>";
    }).join("") + '</div><div class="wbTrendDays">' + Z.map((Lt, ct) => '<span class="wbAvgDay' + (Lt.today ? " wbToday" : "") + '" style="left:' + Pt(ct).toFixed(2) + '%">' + vt(qm(Lt.date, s)) + "</span>").join("") + "</div></div>";
    return ta({
      icon: ee.chartLine,
      name: ht.metrics.compared_to_average,
      double: !0,
      sub: Ye(ht.highsLastDays, { days: m.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (O > 0 ? "+" : "") + vt(fe(s, O)) + '</div><div class="wbCompareWords">' + vt(ht.average[j]) + '</div><div class="wbCompareTemps">' + vt(Ye(ht.todayVsAverage, { today: fe(s, b), average: fe(s, T) })) + "</div></div>" + jt + "</div>"
    });
  }
  function Qi(s, u) {
    const m = Ce(s, u, "humidity");
    if (!m || !ie(m.value)) return "";
    const b = Ce(s, u, "dew_point"), T = Math.max(0, Math.min(100, Number(m.value)));
    return ta({
      icon: ee.waterPercent,
      name: ht.metrics.humidity,
      sub: b && ie(b.value) ? Ye(ht.dewPoint, { dew_point: fe(s, b.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + T + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + Da(Zt(Math.round(Number(m.value)), s.locale), "%") + "</div>"
    });
  }
  function on(s, u) {
    var Lt, ct, Ht;
    const m = Ce(s, u, "pressure");
    if (!m || !ie(m.value)) return "";
    const b = Number(m.value), T = (Lt = m.stateObj.attributes) == null ? void 0 : Lt.pressure_unit, O = Yd(b, T), j = ((ct = U.pressureHistory) == null ? void 0 : ct.entityId) === m.stateObj.entity_id ? Yd(U.pressureHistory.value, T) : void 0;
    let Z;
    if (O !== void 0 && j !== void 0) {
      const Ot = O - j;
      Z = Ot >= Hd ? "rising" : Ot <= -Hd ? "falling" : "steady";
    }
    const F = Vi(s, m.stateObj, "pressure", Math.round(b)), $ = m.stateObj, J = (Ot) => T === "inHg" ? Math.round(Ot * 100) / 100 : Math.round(Ot), ut = (Ot) => Gd(s, $, "pressure", J(Ot)), Pt = j !== void 0 ? U.pressureHistory.value : void 0, Tt = Pt !== void 0 ? J(b - Pt) : void 0, Mt = (Ht = $.entity_id) != null && Ht.startsWith("weather.") ? ot("hourly").find((Ot) => ie(Ot.pressure) && new Date(Ot.datetime).getTime() >= Date.now() + 3 * te - 30 * Re) : void 0, jt = [
      ...Z ? [ht.advice[Z]] : [],
      ...Pt !== void 0 ? [[ht.callout.hoursAgo, ut(Pt)], [ht.callout.change, (Tt > 0 ? "+" : Tt < 0 ? "−" : "") + ut(Math.abs(Tt))]] : [],
      ...Mt ? [[ht.callout.inHours, ut(Number(Mt.pressure))]] : []
    ];
    return ta({
      icon: ee.gauge,
      name: ht.metrics.pressure,
      sub: Z ? ht.pressure[Z] : void 0,
      cls: "wbPressure",
      callouts: jt,
      zone: '<div class="wbTapeRow"><div class="wbTapeValue">' + Da(F.number) + '<span class="wbTapeUnit">' + vt(F.unit) + "</span></div>" + (O !== void 0 ? ar(s, O) : "") + "</div>"
    });
  }
  function ar(s, u) {
    const T = Math.floor(u) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (O, j) => T + j).map((O) => {
      const j = 100 - (O - u) * 9;
      if (j < 22 || j > 178) return "";
      const Z = O % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(j - 100) / 100) + '"><line class="wbTapeTick" x1="' + (Z ? 2 : 8) + '" x2="26" y1="' + j + '" y2="' + j + '"></line>' + (Z ? '<text class="wbTapeLabel" x="33" y="' + j + '">' + vt(Zt(O, s.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + vt(ht.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + vt(ht.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function Tn(s) {
    var F, $;
    const u = Bl(s), m = u ? s.states[u] : void 0;
    if (!m || ((F = U.rain) == null ? void 0 : F.entityId) !== u || !ie(U.rain.change)) return "";
    const b = (($ = m.attributes) == null ? void 0 : $.unit_of_measurement) ?? "", T = it(s, "hourly"), O = Date.now() + pa, j = ot("hourly").filter((J) => J.precipitation != null && new Date(J.datetime).getTime() <= O), Z = j.reduce((J, ut) => J + Number(ut.precipitation), 0);
    return ta({
      icon: ee.rainy,
      name: ht.metrics.precipitation,
      sub: T && j.length ? Ye(ht.rainExpected, { amount: Zt(Z, s.locale, { maximumFractionDigits: 1 }) + " " + Qo(s, T, "precipitation") }) : ht.rainLast24h,
      visual: Da(Zt(U.rain.change, s.locale, { maximumFractionDigits: 1 }), b) + (j.length > 1 ? l0(j.map((J) => ({ label: "", value: Number(J.precipitation) }))) : "")
    });
  }
  function Gr(s, u) {
    const m = Ce(s, u, "visibility");
    if (!m || !ie(m.value)) return "";
    const b = Vi(s, m.stateObj, "visibility", m.value), T = Qh(Number(m.value), Qo(s, m.stateObj, "visibility"));
    return ta({
      icon: ee.eyeOutline,
      name: ht.metrics.visibility,
      sub: ht.visibilityLevel[tm(T)],
      visual: '<div class="wbSea"><canvas class="wbSeaArt" data-wb-sea="' + T + '" aria-hidden="true"></canvas><div class="wbSeaFact">' + vt(ts(s, T)) + '</div><div class="wbSeaValue">' + Da(b.number, b.unit) + "</div></div>"
    });
  }
  function ts(s, u) {
    var O;
    const m = Jh((O = s.config) == null ? void 0 : O.country, u);
    if (m) return Ye(ht.visibilityLandmarks, { from: m.from, to: m.to });
    const b = u / Mm * 60;
    if (b < 60) {
      const j = b < 5 ? Math.max(1, Math.round(b)) : 5 * Math.round(b / 5);
      if (j < 60) return Ye(ht.walkMinutes, { minutes: Zt(j, s.locale) });
    }
    const T = Math.max(1, Math.round(b / 30) / 2);
    return T < 8 ? Ye(ht.walkHours, { hours: Zt(T, s.locale) }) : ht.walkDay;
  }
  function es(s) {
    U.categories === void 0 && Ga(s);
    const u = _e(s), m = (F) => F.map(($) => s.states[$]).filter(An), b = m(u.air), T = m(u.pollen);
    if (!b.length && !T.length) return "";
    const O = [...b, ...T], j = (F) => T.includes(F) ? ee.flower : ee.airFilter, Z = O.find((F) => F.entity_id === st.aq);
    return Z ? lo(s, Z, j(Z)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + vt(ht.airQuality) + '</h2></div><div class="wbAqTiles">' + O.map((F) => '<button class="wbTile" data-wb="aq-open" data-entity="' + vt(F.entity_id) + '"><span class="wbChip">' + To(j(F)) + '</span><span class="wbText"><span class="wbName">' + vt($o(s, F)) + '</span><span class="wbSub">' + vt(_o(s, F)) + "</span></span></button>").join("") + "</div></div>";
  }
  function lo(s, u, m) {
    var J, ut, Pt;
    const b = ((J = u.attributes) == null ? void 0 : J.unit_of_measurement) ?? "", T = ((ut = u.attributes) == null ? void 0 : ut.device_class) === "pm25" && b === Fd && ie(u.state), O = Number(u.state), j = T ? Pi(O) : void 0, Z = ((Pt = U.aqHistory) == null ? void 0 : Pt.entityId) === u.entity_id ? U.aqHistory.points : void 0, F = (Tt) => Math.min(100, Math.max(0, Tt / Ri * 100));
    let $;
    if (Z && Z.length > 1) $ = Xd(Z, (Tt) => (Zt(Tt, s.locale, { maximumFractionDigits: 1 }) + " " + b).trim());
    else if (j) {
      let Tt = 0;
      const Mt = Kp.map(([jt, Lt]) => {
        const ct = F(Math.min(Lt, Ri)), Ht = Id[jt] + " " + Tt + "% " + ct + "%";
        return Tt = ct, Ht;
      });
      $ = '<div class="wbScale" role="meter" aria-label="' + vt(ht.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + Ri + '" aria-valuenow="' + O + '" style="background:linear-gradient(to right, ' + Mt.join(", ") + ')"><i style="left:' + F(O) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + Ri + " " + Fd + "</span></div>";
    } else $ = '<span class="wbGraphNote"><span>' + vt(_o(s, u)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + To(m) + '</span><span class="wbText"><span class="wbName">' + vt($o(s, u)) + '</span><span class="wbSub">' + vt(_o(s, u)) + (j ? " · " + vt(ht.aqLevel[j]) : "") + '</span></span><button class="wbBack" title="' + vt(ht.back) + '" data-wb="aq-close">' + To(ee.back) + '</button></div><div class="wbGraph">' + $ + "</div></div></div>";
  }
  const as = { good: "Good", fair: "Fair", moderate: "Moderate", poor: "Poor", very_poor: "Very poor", extremely_poor: "Extremely poor" }, Ho = (s) => s <= 50 ? "Good" : s <= 100 ? "Moderate" : s <= 150 ? "Unhealthy for some" : s <= 200 ? "Unhealthy" : s <= 300 ? "Very unhealthy" : "Hazardous";
  function Ve(s) {
    const u = /* @__PURE__ */ new Map();
    return Object.values(s.states || {}).filter((m) => {
      var b;
      return m.entity_id.startsWith("sensor.") && Ui.includes(((b = m.attributes) == null ? void 0 : b.device_class) ?? "") && An(m) && Kn(s, m.entity_id);
    }).sort((m, b) => m.entity_id.localeCompare(b.entity_id)).forEach((m) => {
      u.has(m.attributes.device_class) || u.set(m.attributes.device_class, m);
    }), Ui.map((m) => u.get(m)).filter(Boolean);
  }
  const No = (s) => Object.values(s.states || {}).filter((u) => {
    var m, b;
    return u.entity_id.startsWith("sensor.") && An(u) && Kn(s, u.entity_id) && (((b = (m = s.entities) == null ? void 0 : m[u.entity_id]) == null ? void 0 : b.translation_key) ?? u.entity_id).toLowerCase().includes("pollen");
  }), Pa = ["none", "very_low", "low", "moderate", "high", "very_high"], Oo = (s) => ie(s.state) ? Number(s.state) : Pa.indexOf(String(s.state).toLowerCase().replace(/ /g, "_")), fa = (s) => {
    const u = String(s).replace(/_/g, " ");
    return u[0].toUpperCase() + u.slice(1);
  }, Io = (s, u, m) => {
    const b = m ? s === "aqi" ? u <= 50 ? "good" : u <= 100 ? "moderate" : "poor" : s === "pm25" ? Pi(u) : null : null;
    return b === "good" || b === "fair" ? ht.advice.window : b === "moderate" || b === null ? ht.advice.fine : ht.advice.closed;
  }, or = ["good", "fair", "moderate", "poor", "very_poor", "extremely_poor"], Te = (s) => or[s <= 50 ? 0 : s <= 100 ? 1 : s <= 150 ? 2 : s <= 200 ? 3 : s <= 300 ? 4 : 5], Fo = "M43 43q1 8 0 10M77 42q1 8 -1 10", Ka = {
    good: [Fo, "M34 69Q61 98 86 67"],
    fair: [Fo, "M40 74Q61 89 81 72"],
    moderate: [Fo, "M41 79Q60 76 80 81"],
    poor: [Fo, "M41 85Q60 73 80 86"],
    very_poor: ["M36 38l13 5M84 37l-13 5M43 48q1 7 0 9M77 47q1 7 -1 9", "M37 90Q60 64 84 89"],
    extremely_poor: ["M37 41l12 11M49 41l-12 11M71 40l12 11M83 40l-12 11", "M36 84q6 -8 12 0t12 0t12 0t12 0"]
  }, Ur = (s) => '<svg class="wbAqFace" viewBox="0 0 120 120" aria-hidden="true"><path d="M60 9C89 8 112 32 110 61C109 90 87 112 58 111C30 110 9 88 10 59C11 31 33 10 63 12"></path><path class="wbAqEyes" d="' + Ka[s][0] + '"></path><path d="' + Ka[s][1] + '"></path></svg>';
  function Yr(s) {
    const u = Ve(s), m = u[0];
    if (!m) return ta({ icon: ee.airFilter, name: ht.airQuality, sub: ht.noAir, visual: Da("–", ""), cls: "wbBase" });
    const b = m.attributes.device_class, T = Number(m.state), O = ie(m.state), j = b === "aqi" && O ? Ho(T) : b === "pm25" && O ? as[Pi(T)] : _o(s, m), Z = O ? Zt(Math.round(T), s.locale) : String(m.state), F = b === "aqi" ? "AQI" : m.attributes.unit_of_measurement || "", $ = O && b === "aqi" ? Te(T) : O && b === "pm25" ? Pi(T) : null;
    return ta($ ? {
      icon: ee.airFilter,
      name: ht.airQuality,
      sub: j,
      cls: "wbAqSmile",
      zone: '<div class="wbAqFill" style="background:' + Id[$] + '">' + Ur($) + '<div class="wbAqBig"><span class="wbAqNum">' + vt(Z) + "</span>" + (F ? '<span class="wbAqUnit">' + vt(F) + "</span>" : "") + "</div></div>" + Hi(Da(Z, F)),
      callouts: [Io(b, T, O), ...u.slice(1, 3).map((J) => [$o(s, J), _o(s, J)])]
    } : {
      icon: ee.airFilter,
      name: ht.airQuality,
      sub: j,
      cls: "wbBase",
      zone: Da(Z, F),
      callouts: [Io(b, T, O), ...u.slice(1, 3).map((J) => [$o(s, J), _o(s, J)])]
    });
  }
  const os = [
    ["wbSeed", '<svg viewBox="0 0 22 30" aria-hidden="true"><path d="M11 28V11" fill="none" stroke="currentColor" stroke-width="1"></path><path d="M11 11L3 6M11 11L5 2.5M11 11L8.5 1M11 11L13.5 1M11 11L17 2.5M11 11L19 6" fill="none" stroke="currentColor" stroke-width=".8" stroke-linecap="round"></path><circle cx="11" cy="28.5" r="1.4" fill="currentColor"></circle></svg>'],
    ["wbGrain", '<svg viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="3.3" fill="currentColor"></circle><path d="M6 1.2v1.4M6 9.4v1.4M1.2 6h1.4M9.4 6h1.4M2.6 2.6l1 1M8.4 8.4l1 1M2.6 9.4l1-1M8.4 3.6l1-1" stroke="currentColor" stroke-width=".9" stroke-linecap="round"></path></svg>'],
    ["wbStem", '<svg viewBox="0 0 10 30" aria-hidden="true"><path d="M5 29Q3.6 18 5 8" fill="none" stroke="currentColor" stroke-width="1"></path><ellipse cx="5" cy="6" rx="2.3" ry="4.6" fill="currentColor"></ellipse></svg>']
  ], ns = (s) => {
    const u = [1, 3, 5, 7, 10, 13][Math.max(0, Math.min(5, Number.isFinite(s) ? Math.round(s) : 0))];
    return '<div class="wbPollenAir" aria-hidden="true">' + Array.from({ length: u }, (m, b) => {
      const [T, O] = os[b % 3], j = 10 + b * 7 % 9, Z = 2.6 + b * 5 % 4 * 0.4;
      return '<span class="wbFloat ' + T + '" style="top:' + (4 + b * 37 % 52) + "%;--x:" + (b * 29 % 90 + 4) + "%;--s:" + (0.8 + b * 13 % 5 / 10).toFixed(1) + ";animation-duration:" + j + "s;animation-delay:-" + (b * 2.3 % j).toFixed(1) + 's"><span class="wbPush"><span class="wbBob" style="animation-duration:' + Z.toFixed(1) + "s;animation-delay:-" + (b * 0.7 % Z).toFixed(1) + 's">' + O + "</span></span></span>";
    }).join("") + "</div>";
  };
  function rs(s) {
    const u = No(s).sort((T, O) => Oo(O) - Oo(T));
    if (!u.length) return ta({ icon: ee.flower, name: ht.pollen, sub: ht.noPollen, visual: Da("–", ""), cls: "wbBase" });
    const m = u[0], b = (T) => ie(T.state) ? _o(s, T) : fa(T.state);
    return ta({
      icon: ee.flower,
      name: ht.pollen,
      sub: $o(s, m) + " · " + b(m),
      cls: "wbBase wbPollen",
      zone: ns(Oo(m)) + Da(b(m), ""),
      callouts: u.slice(0, 3).map((T) => [$o(s, T), b(T)])
    });
  }
  function Ln(s) {
    var Z;
    const u = Date.now(), m = ot("hourly").filter((F) => {
      const $ = new Date(F.datetime).getTime();
      return $ > u - te && $ < u + 12 * te;
    }), b = m.find((F) => (F.precipitation_probability ?? 0) >= 50 || (F.precipitation ?? 0) >= 0.2), T = b ? Ye(ht.rainFrom, { time: We(new Date(Math.max(u, new Date(b.datetime).getTime())), s) }) : m.length ? ht.noRain12 : void 0, O = (q == null ? void 0 : q()) || "rainviewer";
    let j;
    if (O.startsWith("camera:")) {
      const F = s.states[O.slice(7)], $ = F && F.state !== "unavailable" && ((Z = F.attributes) == null ? void 0 : Z.entity_picture);
      j = $ ? '<div class="wbRadar wbRadarCam" aria-hidden="true"><img class="wbRadarImg" src="' + vt($) + '" data-src="' + vt($) + '" alt=""></div>' : '<div class="wbRadar" aria-hidden="true"><span class="wbRadarNote">' + vt(ht.cameraOff) + "</span></div>";
    } else {
      const F = Zn(s);
      j = F ? '<div class="wbRadar wbRadarMap" aria-hidden="true" data-lat="' + F.lat + '" data-lon="' + F.lon + '"><i class="wbRadarHome"></i></div>' : '<div class="wbRadar" aria-hidden="true"><i class="wbRadarRing"></i><i class="wbRadarHome"></i><span class="wbRadarNote">' + vt(ht.noLocation) + "</span></div>";
    }
    return ta({ icon: ee.radar, name: ht.rainRadar, sub: T, cls: "wbBase wbRadarTile", visual: j });
  }
  const Zr = {
    current: zt,
    hourly: Qn,
    sun: Vt,
    moon: Vr,
    wind: $i,
    uv_index: Po,
    compared_to_average: zr,
    humidity: Qi,
    pressure: on,
    precipitation: Tn,
    visibility: Gr,
    air_quality: es,
    aq_tile: Yr,
    pollen_tile: rs,
    radar_tile: Ln
  }, nr = [["day", "Last 24 hours", 1], ["week", "Last 7 days", 7], ["month", "Last 30 days", 30]], nn = (s, u) => {
    var m;
    return u.toLocaleDateString((m = s.locale) == null ? void 0 : m.language, { day: "numeric", month: "short" });
  }, ue = (s) => {
    const u = new Date(s);
    return u.setMinutes(u.getMinutes() - u.getTimezoneOffset()), u.toISOString().slice(0, 10);
  }, ua = () => {
    const s = st.range, u = Date.now();
    if (s.preset !== "custom") {
      const T = nr.find(([O]) => O === s.preset)[2];
      return [u - T * pa, u];
    }
    const m = tn(/* @__PURE__ */ new Date(s.from + "T00:00")).getTime(), b = Math.min(u, tn(/* @__PURE__ */ new Date(s.to + "T00:00")).getTime() + pa);
    return [Math.min(m, b - te), b];
  }, Dt = (s) => {
    const u = st.range;
    if (u.preset !== "custom") return nr.find(([T]) => T === u.preset)[1];
    const [m, b] = ua();
    return u.from === u.to ? nn(s, new Date(m)) : nn(s, new Date(m)) + " – " + nn(s, new Date(b - 1));
  }, qo = () => st.range.preset === "custom" ? st.range.from + "_" + st.range.to : st.range.preset, Wo = (s, u) => u - s <= 2 * pa, rr = (s, u, m, b) => Wo(m, b) ? We(u, s) : nn(s, u), co = (s, u = 60) => {
    const m = Math.max(1, Math.ceil(s.length / u));
    return s.filter((b, T) => T % m === 0 || T === s.length - 1);
  }, Kr = (s, u, m, b, T = !1) => s.callWS({
    type: "history/history_during_period",
    start_time: new Date(m).toISOString(),
    end_time: new Date(b).toISOString(),
    entity_ids: [u],
    minimal_response: T,
    no_attributes: T,
    significant_changes_only: !1
  }), jo = (s) => async (u, m, b, T) => {
    const O = Ce(u, m, s);
    if (!O) return [];
    const j = O.stateObj.entity_id, Z = await Kr(u, j, b, T);
    return co(((Z == null ? void 0 : Z[j]) ?? []).map((F) => {
      var ut;
      const $ = ((ut = F.a) == null ? void 0 : ut[s]) ?? (ie(F.s) ? Number(F.s) : void 0), J = (F.lu ?? F.lc) * 1e3;
      return typeof $ == "number" && J >= b && J <= T ? { t: new Date(J), value: $ } : null;
    }).filter(Boolean)).map((F) => ({ label: rr(u, F.t, b, T), value: F.value }));
  }, Xr = (s, u) => async (m, b, T, O) => {
    const j = s(m);
    if (!j) return [];
    const Z = j.entity_id, F = await Kr(m, Z, T, O, !0);
    return co(((F == null ? void 0 : F[Z]) ?? []).map(($) => {
      const J = u($.s), ut = $.lu * 1e3;
      return J == null || !Number.isFinite(J) || ut < T || ut > O ? null : { t: new Date(ut), value: J };
    }).filter(Boolean)).map(($) => ({ label: rr(m, $.t, T, O), value: $.value }));
  }, rn = (s, u) => async (m, b, T, O) => {
    const j = Zn(m);
    if (!j) return [];
    const Z = [];
    if (Wo(T, O)) for (let F = T; F <= O; F += te / 2) Z.push({ label: We(new Date(F), m), value: s(new Date(F), j) });
    else for (let F = O; F >= T; F -= pa) {
      const $ = new Date(F), J = u($, j, m);
      J != null && Z.unshift({ label: nn(m, $), value: J });
    }
    return co(Z);
  }, sn = (s) => No(s).sort((u, m) => Oo(m) - Oo(u))[0], na = (s, u, m) => {
    const b = Ce(s, u, m);
    return b ? Qo(s, b.stateObj, m) : "";
  }, ln = {
    current: { name: () => ht.modes.temperature, icon: () => ee.sunny, load: jo("temperature"), fmt: (s, u, m) => fe(s, m), now: (s, u) => {
      var m;
      return fe(s, (m = Ce(s, u, "temperature")) == null ? void 0 : m.value);
    } },
    sun: {
      name: () => ht.sun,
      icon: () => ee.sunny,
      load: rn((s, u) => Math.round(Zi(s, u.lat, u.lon) / aa), (s, u, m) => {
        const b = zn(m, s);
        return b.rise && b.set ? Math.round((b.set - b.rise) / te * 10) / 10 : null;
      }),
      fmt: (s, u, m, b) => b ? Zt(m, s.locale) + "°" : Zt(m, s.locale) + " h",
      sub: (s) => s ? "How high the sun was" : "Hours of daylight a day"
    },
    moon: {
      name: () => ht.moon,
      icon: () => ee.night,
      load: rn((s) => Math.round(Dl(s).fraction * 100), (s) => Math.round(Dl(s).fraction * 100)),
      fmt: (s, u, m) => Zt(m, s.locale) + "%",
      sub: () => "How much of it was lit"
    },
    uv_index: { name: () => ht.metrics.uv_index, icon: () => ee.sunnyAlert, load: jo("uv_index"), fmt: (s, u, m) => Zt(Math.round(m * 10) / 10, s.locale), now: (s, u) => {
      const m = Ce(s, u, "uv_index");
      return m ? Zt(Number(m.value), s.locale) : "";
    } },
    humidity: { name: () => ht.metrics.humidity, icon: () => ee.waterPercent, load: jo("humidity"), fmt: (s, u, m) => Zt(Math.round(m), s.locale) + "%", now: (s, u) => {
      const m = Ce(s, u, "humidity");
      return m ? Zt(Math.round(Number(m.value)), s.locale) + "%" : "";
    } },
    pressure: { name: () => ht.metrics.pressure, icon: () => ee.gauge, load: jo("pressure"), fmt: (s, u, m) => Zt(Math.round(m), s.locale) + " " + na(s, u, "pressure"), now: (s, u) => {
      const m = Ce(s, u, "pressure");
      return m ? Zt(Math.round(Number(m.value)), s.locale) + " " + na(s, u, "pressure") : "";
    } },
    wind: { name: () => ht.wind, icon: () => ee.windy, load: jo("wind_speed"), fmt: (s, u, m) => Zt(Math.round(m), s.locale) + " " + na(s, u, "wind_speed"), now: (s, u) => {
      const m = Ce(s, u, "wind_speed");
      return m ? Zt(Math.round(Number(m.value)), s.locale) + " " + na(s, u, "wind_speed") : "";
    } },
    visibility: { name: () => ht.metrics.visibility, icon: () => ee.eyeOutline, load: jo("visibility"), fmt: (s, u, m) => Zt(Math.round(m * 10) / 10, s.locale) + " " + na(s, u, "visibility"), now: (s, u) => {
      const m = Ce(s, u, "visibility");
      return m ? Zt(Number(m.value), s.locale) + " " + na(s, u, "visibility") : "";
    } },
    aq_tile: {
      name: (s) => Ve(s)[0] ? $o(s, Ve(s)[0]) : ht.airQuality,
      icon: () => ee.airFilter,
      load: Xr((s) => Ve(s)[0], (s) => ie(s) ? Number(s) : null),
      fmt: (s, u, m) => {
        var O, j;
        const b = Ve(s)[0], T = (O = b == null ? void 0 : b.attributes) == null ? void 0 : O.device_class;
        return Zt(Math.round(m * 10) / 10, s.locale) + (T === "aqi" ? " AQI" : (j = b == null ? void 0 : b.attributes) != null && j.unit_of_measurement ? " " + b.attributes.unit_of_measurement : "");
      },
      now: (s) => {
        const u = Ve(s)[0];
        return u ? _o(s, u) : "";
      }
    },
    pollen_tile: {
      name: (s) => sn(s) ? $o(s, sn(s)) : ht.pollen,
      icon: () => ee.flower,
      load: Xr(sn, (s) => {
        const u = Oo({ state: s });
        return u < 0 ? null : u;
      }),
      fmt: (s, u, m) => fa(Pa[Math.round(m)] || ""),
      now: (s) => {
        const u = sn(s);
        return u ? fa(u.state) : "";
      }
    }
  }, Xa = {};
  let ha = null;
  async function ra(s) {
    const u = r == null ? void 0 : r();
    if (!u || !ln[s]) return;
    const m = s + "|" + qo(), [b, T] = ua();
    if (Xa[m] && Date.now() - Xa[m].at < 5 * Re) return;
    Xa[m] = { at: Date.now(), points: null };
    try {
      Xa[m].points = await ln[s].load(u, Ct(u), b, T);
    } catch {
      Xa[m].points = [];
    }
    De(!0), ha === s && st.graph === s && (ha = null, Bd(z.querySelector(".wbGraphCard")));
    const O = st.graph === s && z.querySelector(".wbGraph .wbChart");
    O && Up(O, O.querySelector(".wbLine"), O.querySelectorAll(".wbArea"));
  }
  function $r(s, u) {
    const m = st.range, b = ue(Date.now()), [T, O] = ua(), j = m.pickFrom || ue(T), Z = m.pickTo || ue(O - 1);
    return '<div class="wbRangePick" role="dialog" aria-label="Choose date range"><div class="wbRangePresets">' + nr.map(([F, $]) => '<button class="wbRangePreset" aria-pressed="' + (m.preset === F) + '" data-wb="graph-preset" data-range="' + F + '" data-wb-focus="graph-preset-' + F + '">' + vt($) + "</button>").join("") + '</div><div class="wbRangeDates"><label><span>From</span><input type="date" data-range-from value="' + j + '" max="' + b + '"></label><label><span>To</span><input type="date" data-range-to value="' + Z + '" max="' + b + '"></label></div><button class="wbRangeApply" data-wb="graph-apply" data-wb-focus="graph-apply">Show these dates</button></div>';
  }
  function Jr(s, u, m) {
    var ut;
    const b = ln[m], [T, O] = ua(), j = Wo(T, O), Z = (ut = Xa[m + "|" + qo()]) == null ? void 0 : ut.points, F = Math.max(120, Math.min(520, innerWidth - (innerWidth <= 620 ? 0 : 32)) - 2 * 18 - 32), J = Z ? Z.length > 1 ? Xd(Z, (Pt) => b.fmt(s, u, Pt, j), 220, F) : '<span class="wbGraphNote"><span>No history for these dates</span></span>' : '<span class="wbGraphNote"><span>Loading…</span></span>';
    return '<div class="wbPopupBox"><div class="wbCard wbSquare wbGraphCard" role="dialog" aria-modal="true" aria-label="' + vt(b.name(s)) + '"><div class="wbHead"><div class="wbChip wbPlain">' + Xp(b.icon(s)) + '</div><div class="wbText"><span class="wbName">' + vt(b.name(s)) + '</span><span class="wbSub">' + vt(b.sub ? b.sub(j) : b.now ? b.now(s, u) : "") + '</span></div><button class="wbBack" title="Close" data-wb="graph-close" data-wb-focus="graph-close">' + To(ee.close) + '</button></div><button class="wbRangeBtn" aria-haspopup="dialog" aria-expanded="' + !!st.picking + '" title="Choose date range" data-wb="graph-pick" data-wb-focus="graph-pick">' + To(ee.calendar) + "<span>" + vt(Dt(s)) + "</span>" + To(ee.chevronDown) + '</button><div class="wbGraph">' + J + "</div></div>" + (st.picking ? $r() : "") + "</div>";
  }
  function De(s) {
    var Pt, Tt, Mt, jt, Lt;
    const u = r == null ? void 0 : r();
    if (!u || nt) return;
    const m = Ct(u);
    kt(u, m), U.lastFetch || so();
    const b = _e(u), T = Zd(u), O = Bl(u), j = [
      ...m.map((ct) => u.states[ct]),
      u.states["sun.sun"],
      T && u.states[T],
      O && u.states[O],
      ...b.air.map((ct) => u.states[ct]),
      ...b.pollen.map((ct) => u.states[ct]),
      ...et.some((ct) => Q.includes(ct)) ? [...Ve(u), ...No(u)] : [],
      u.locale,
      u.config,
      u.entities,
      Math.floor(Date.now() / Re)
    ];
    if (!s && lt && j.length === lt.length && j.every((ct, Ht) => ct === lt[Ht])) return;
    lt = j;
    const Z = D.getRootNode(), F = Z.activeElement || document.activeElement;
    for (const ct of et) {
      const Ht = H[ct];
      let Ot = "";
      try {
        Ot = Zr[ct](u, m) || "";
      } catch {
        Ot = "";
      }
      if (Ot === Ht.html) continue;
      const me = F && Ht.el.contains(F) ? (Pt = F.dataset) == null ? void 0 : Pt.wbFocus : void 0, St = Ht.el.querySelector(".wbStripScroll"), ne = St ? St.scrollLeft : null;
      Ht.html = Ot, Ht.el.hidden = !Ot, Ht.el.innerHTML = Ot;
      const oe = Ht.el.querySelector(".wbStripScroll");
      oe && ne != null ? oe.scrollTo({ left: ne }) : oe != null && oe.dataset.start && oe.scrollTo({ left: Number(oe.dataset.start) * oe.clientWidth / Number(oe.dataset.span) }), me && !Y && ((Tt = Ht.el.querySelector('[data-wb-focus="' + me + '"]')) == null || Tt.focus());
    }
    let $ = "";
    if (st.graph)
      try {
        $ = Jr(u, m, st.graph) || "";
      } catch {
        $ = "";
      }
    if ($ !== N) {
      const ct = F && z.contains(F) ? (Mt = F.dataset) == null ? void 0 : Mt.wbFocus : void 0;
      N = $, z.innerHTML = $, z.hidden = !$, $ && !z.isConnected && (D.closest("#app") || D).appendChild(z), ct && !Y && ((jt = z.querySelector('[data-wb-focus="' + ct + '"]')) == null || jt.focus({ preventScroll: !0 }));
    }
    Xi(), D.querySelectorAll(".wbRadarMap").forEach((ct) => {
      ct._tiles || zo(ct);
    }), Y && ((Lt = D.querySelector('[data-wb-focus="' + Y + '"]') || z.querySelector('[data-wb-focus="' + Y + '"]')) == null || Lt.focus({ preventScroll: !0 }), Y = null);
    let J = !1, ut = !1;
    for (const ct of et) {
      const Ht = H[ct], Ot = !Ht.el.hidden, me = at[ct] === "wide" || X.includes(ct), St = et.indexOf(ct) >= et.indexOf("moon"), ne = Ot && (St && me && !J || !me && !ut);
      ne && me && (J = !0), ne && !me && (ut = !0), Ht.el.toggleAttribute("data-break", ne);
    }
    ma(performance.now());
  }
  function cn() {
    K || nt || (K = !0, queueMicrotask(() => {
      K = !1, De(!0);
    }));
  }
  function Qr() {
    const s = getComputedStyle(D), u = (j) => s.getPropertyValue(j).trim(), m = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([j, Z]) => {
      u(Z) && (m[j] = u(Z));
    });
    const b = u("--color-text-primary") || "#f1f1f1", T = u("--color-bg-card") || "#222222", O = !!D.closest(".light");
    return { colors: { ...Ra, ...m }, ink: O ? b : T, paper: O ? T : b };
  }
  const ir = (s, u) => {
    var m;
    s.width !== u.w && (s.width = u.w), s.height !== u.h && (s.height = u.h), (m = s.getContext("2d")) == null || m.putImageData(new ImageData(u.data, u.w, u.h), 0, 0);
  }, $a = () => g && !Om();
  function ti(s, u) {
    D.querySelectorAll("canvas[data-wb-strip]").forEach((m) => sr(m, tt[m.dataset.wbStrip], s, u));
  }
  function sr(s, u, m, b) {
    if (!u || !s.getClientRects().length) return;
    const T = s.clientWidth, O = s.clientHeight;
    if (!T || !O) return;
    const j = { width: T, height: O, columns: u.columns || Ed, colors: b.colors, clock: m, ambient: $a(), seed: u.seed, soft: 1.5 };
    if (p === "smooth") {
      const Z = Math.min(2, window.devicePixelRatio || 1), F = Math.round(T * Z), $ = Math.round(O * Z);
      s.width !== F && (s.width = F), s.height !== $ && (s.height = $);
      const J = s.getContext("2d");
      if (!J) return;
      J.setTransform(Z, 0, 0, Z, 0, 0), Ph(J, u.segs, j);
    } else ir(s, Rh(u.segs, { ...j, px: 2, oneBit: p === "onebit", ink: b.ink, paper: b.paper }));
  }
  function ma(s) {
    if (nt) return;
    const u = Qr();
    if (p !== "smooth") {
      const m = $a();
      D.querySelectorAll("canvas[data-wb-wx]").forEach((b) => {
        b.getClientRects().length && ir(b, bh(ph(b.dataset.wbWx, u.colors), { size: Number(b.dataset.size) || 40, px: 2, oneBit: p === "onebit", colors: u.colors, ink: u.ink, paper: u.paper, clock: s, idle: m }));
      });
    }
    D.querySelectorAll("canvas[data-wb-sea]").forEach((m) => {
      const b = m.clientWidth, T = m.clientHeight, O = Number(m.dataset.wbSea), j = b + "x" + T + ":" + O + ":" + u.colors.skyClearDay;
      !b || !T || !(O > 0) || m.dataset.painted === j || (m.dataset.painted = j, ir(m, Kh(b, T, O, u.colors)));
    }), ti(s, u);
  }
  function ei(s) {
    if (bt = 0, !(nt || !$a())) {
      if (!document.hidden)
        if (p === "smooth") ti(s, Qr());
        else {
          const u = Math.floor(s / 100);
          u !== rt && (rt = u, ma(s));
        }
      bt = requestAnimationFrame(ei);
    }
  }
  function Vo() {
    D.classList.toggle("wbMotion", $a()), !bt && !nt && $a() && (bt = requestAnimationFrame(ei));
  }
  function Dn(s) {
    var m, b, T, O, j, Z, F;
    if (s.target === z) {
      st.graph = void 0, st.picking = !1, De(!0);
      return;
    }
    const u = (b = (m = s.target).closest) == null ? void 0 : b.call(m, "[data-wb]");
    if (!u || !(D.contains(u) || z.contains(u))) {
      const $ = (O = (T = s.target).closest) == null ? void 0 : O.call(T, ".wbItem"), J = $ == null ? void 0 : $.dataset.card;
      if (!$ || !D.contains($) || !ln[J] || st.graph === J || D.closest(".tfEditing") || J === "current" && w) return;
      st.graph = J, st.picking = !1, Y = "graph-close", De(!0), (j = Xa[J + "|" + qo()]) != null && j.points ? Bd(z.querySelector(".wbGraphCard")) : ha = J, ra(J);
      return;
    }
    switch (u.dataset.wb) {
      case "day": {
        st.openDay = Number(u.dataset.index), st.opener = u.dataset.wbFocus, Y = "back-day";
        const $ = Ut()[st.openDay], J = !U.todayHistory || U.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - U.todayHistory.fetched > fm;
        $ && Vn(new Date($.datetime), /* @__PURE__ */ new Date()) && J && en();
        break;
      }
      case "close-day":
        st.openDay = void 0, Y = st.opener, st.opener = void 0;
        break;
      case "open-page":
        w == null || w();
        return;
      case "day-mode":
        st.dayMode = u.dataset.mode;
        break;
      case "hourly-mode":
        st.hourlyMode = u.dataset.mode;
        break;
      case "hourly-view":
        st.hourlyView = u.dataset.view;
        try {
          localStorage.setItem(yt, st.hourlyView);
        } catch {
        }
        break;
      case "hours-day": {
        const $ = D.querySelector(".wbStripScroll");
        $ && $.scrollTo({ left: Number(u.dataset.hours) * $.clientWidth / Number($.dataset.span), behavior: "smooth" });
        return;
      }
      case "aq-open":
        st.aq = u.dataset.entity, Eo(st.aq);
        break;
      case "aq-close":
        st.aq = void 0;
        break;
      case "graph-close":
        st.graph = void 0, st.picking = !1;
        break;
      case "graph-pick":
        st.picking = !st.picking, Y = st.picking ? "graph-preset-" + (st.range.preset === "custom" ? "day" : st.range.preset) : "graph-pick";
        break;
      case "graph-preset":
        st.range = { preset: u.dataset.range }, st.picking = !1, Y = "graph-pick", De(!0), ra(st.graph);
        return;
      case "graph-apply": {
        let $ = st.range.pickFrom || ((Z = D.querySelector("[data-range-from]")) == null ? void 0 : Z.value), J = st.range.pickTo || ((F = D.querySelector("[data-range-to]")) == null ? void 0 : F.value);
        if (!$ || !J) return;
        $ > J && ([$, J] = [J, $]), st.range = { preset: "custom", from: $, to: J }, st.picking = !1, Y = "graph-pick", De(!0), ra(st.graph);
        return;
      }
      default:
        return;
    }
    De(!0);
  }
  function ze(s) {
    var u, m, b, T, O, j;
    s.key === "Escape" && st.openDay !== void 0 && ((m = (u = s.target).closest) != null && m.call(u, '[data-wb-open="day"]')) ? (st.openDay = void 0, Y = st.opener, st.opener = void 0, De(!0)) : s.key === "Escape" && st.picking && ((T = (b = s.target).closest) != null && T.call(b, ".wbGraphCard")) ? (st.picking = !1, Y = "graph-pick", De(!0)) : s.key === "Escape" && st.graph && ((j = (O = s.target).closest) != null && j.call(O, ".wbGraphCard")) && (st.graph = void 0, De(!0));
  }
  let va = null;
  function Bn(s) {
    var m, b;
    const u = (b = (m = s.target).closest) == null ? void 0 : b.call(m, ".wbStripScroll");
    !u || s.button !== 0 || (va = { startX: s.pageX, left: u.scrollLeft, moved: !1 }, u.classList.add("wbHeld"), window.addEventListener("mousemove", dn), window.addEventListener("mouseup", ai, { once: !0 }));
  }
  function dn(s) {
    const u = D.querySelector(".wbStripScroll");
    if (!va || !u) return;
    const m = s.pageX - va.startX;
    !va.moved && Math.abs(m) > 1 && (va.moved = !0, u.classList.add("wbDragging")), u.scrollLeft = va.left - m;
  }
  function ai() {
    va = null, window.removeEventListener("mousemove", dn);
    const s = D.querySelector(".wbStripScroll");
    if (!s) return;
    s.classList.remove("wbDragging", "wbHeld");
    const u = [...s.querySelectorAll(".wbSnap")];
    if (u.length) {
      const m = u.reduce((b, T) => Math.abs(T.offsetLeft - s.scrollLeft) < Math.abs(b.offsetLeft - s.scrollLeft) ? T : b);
      s.scrollTo({ left: m.offsetLeft, behavior: "smooth" });
    }
  }
  const pn = (s) => {
    var m, b;
    const u = s.target;
    (m = u.matches) != null && m.call(u, "[data-range-from]") ? st.range.pickFrom = u.value : (b = u.matches) != null && b.call(u, "[data-range-to]") && (st.range.pickTo = u.value);
  };
  D.addEventListener("change", pn), D.addEventListener("click", Dn), D.addEventListener("keydown", ze), z.addEventListener("change", pn), z.addEventListener("click", Dn), z.addEventListener("keydown", ze), D.addEventListener("mousedown", Bn);
  const oi = 64, is = 30;
  let ya = null, Ha = 0;
  const po = () => {
    Ha = 0, D.querySelectorAll(".wbPollen .wbPush").forEach((s) => {
      let u = 0, m = 0;
      if (ya) {
        const b = s.parentElement.getBoundingClientRect(), T = b.left + b.width / 2 - ya.x, O = b.top + b.height / 2 - ya.y, j = Math.hypot(T, O) || 1;
        if (j < oi) {
          const Z = (1 - j / oi) * is;
          u = T / j * Z, m = O / j * Z;
        }
      }
      s.style.transform = u || m ? "translate(" + u.toFixed(1) + "px," + m.toFixed(1) + "px)" : "";
    }), ya && (Ha = requestAnimationFrame(po));
  }, ni = (s) => {
    var m, b;
    if (!((b = (m = s.target).closest) == null ? void 0 : b.call(m, ".wbPollen")) || Be != null && Be.matches) {
      ya && (ya = null, Ha || (Ha = requestAnimationFrame(po)));
      return;
    }
    ya = { x: s.clientX, y: s.clientY }, Ha || (Ha = requestAnimationFrame(po));
  }, Ie = () => {
    ya = null, Ha || (Ha = requestAnimationFrame(po));
  };
  D.addEventListener("pointermove", ni), D.addEventListener("pointerleave", Ie);
  const ia = typeof ResizeObserver == "function" ? new ResizeObserver(() => ma(performance.now())) : null;
  ia == null || ia.observe(D);
  const xa = typeof ResizeObserver == "function" ? new ResizeObserver((s) => s.forEach((u) => {
    const m = u.target;
    m._tiles && (m.clientWidth !== m._w || m.clientHeight !== m._h) && zo(m);
  })) : null;
  function zo(s) {
    var j;
    const u = s.clientWidth, m = s.clientHeight;
    if (!u || !m || nt) return;
    const b = Am(Number(s.dataset.lat), Number(s.dataset.lon), u, m), T = !!((j = D.closest("#app")) != null && j.classList.contains("light")), O = (Z) => ' style="left:' + Z.left + "px;top:" + Z.top + 'px"';
    s._tiles = b, s._w = u, s._h = m, s._frames = null, s._built = Date.now(), s.innerHTML = '<div class="wbRadarLayer wbRadarBase">' + b.map((Z) => '<img src="https://' + "abcd"[(Z.x + Z.y) % 4] + ".basemaps.cartocdn.com/" + (T ? "light_all" : "dark_all") + "/" + Vl + "/" + Z.x + "/" + Z.y + '.png"' + O(Z) + ' alt="">').join("") + '</div><div class="wbRadarFrames"></div><i class="wbRadarHome"></i><span class="wbRadarTime"></span><span class="wbRadarCredit">© OpenStreetMap · CARTO · RainViewer</span>', xa == null || xa.observe(s), Cm().then((Z) => {
      !s.isConnected || nt || s._tiles !== b || (s.querySelector(".wbRadarFrames").innerHTML = Z.frames.map((F, $) => '<div class="wbRadarLayer wbRadarRain" data-i="' + $ + '" hidden>' + b.map((J) => '<img src="' + Z.host + F.path + "/" + Co + "/" + Vl + "/" + J.x + "/" + J.y + '/2/1_1.png"' + O(J) + ' alt="">').join("") + "</div>").join(""), s._frames = Z.frames, s._hold = 0, En(s, Z.frames.findLastIndex((F) => F.past)));
    }).catch(() => {
      s.isConnected && (s.querySelector(".wbRadarTime").textContent = ht.radarOff);
    });
  }
  function En(s, u) {
    const m = s._frames;
    if (!(m != null && m.length)) return;
    s._i = u, s.querySelectorAll(".wbRadarRain").forEach((T) => {
      T.hidden = Number(T.dataset.i) !== u;
    });
    const b = m[u];
    s.querySelector(".wbRadarTime").textContent = We(new Date(b.time * 1e3), r == null ? void 0 : r()) + (b.past ? "" : " · " + ht.forecastTag);
  }
  function ss() {
    D.querySelectorAll(".wbRadarMap").forEach((s) => {
      if (!s._frames) return;
      if (Date.now() - s._built > Zp) {
        zo(s);
        return;
      }
      if (Be != null && Be.matches) return;
      if (s._hold > 0) {
        s._hold -= Nd;
        return;
      }
      const u = s._frames.length - 1, m = s._frames.findLastIndex((T) => T.past), b = s._i >= u ? 0 : s._i + 1;
      En(s, b), (b === m || b === u) && (s._hold = _m);
    });
  }
  const ls = () => D.querySelectorAll(".wbRadarImg").forEach((s) => {
    const u = s.dataset.src;
    s.src = u + (u.includes("?") ? "&" : "?") + "hc=" + Date.now();
  }), fo = typeof MutationObserver == "function" ? new MutationObserver(() => D.querySelectorAll(".wbRadarMap").forEach((s) => {
    s._tiles && zo(s);
  })) : null, ri = D.closest("#app");
  ri && (fo == null || fo.observe(ri, { attributes: !0, attributeFilter: ["class"] }));
  const Be = (dr = window.matchMedia) == null ? void 0 : dr.call(window, "(prefers-reduced-motion: reduce)"), lr = () => {
    Vo(), ma(performance.now());
  };
  (ii = Be == null ? void 0 : Be.addEventListener) == null || ii.call(Be, "change", lr);
  const cr = [
    setInterval(() => {
      qt = /* @__PURE__ */ new Date(), De(!0);
    }, xm),
    setInterval(() => {
      W = /* @__PURE__ */ new Date(), De(!0);
    }, km),
    setInterval(so, wm),
    setInterval(ss, Nd),
    setInterval(ls, Re)
  ];
  return De(!0), Vo(), {
    update() {
      De(!1);
    },
    // a choice in Settings changed (Next hours' window)
    refresh() {
      De(!0);
    },
    setStyle(s) {
      !s || s === p || (p = s, D.dataset.style = p, z.dataset.style = p, De(!0), Vo());
    },
    destroy() {
      var s;
      cancelAnimationFrame(Ha), D.removeEventListener("pointermove", ni), D.removeEventListener("pointerleave", Ie), nt = !0, cr.forEach(clearInterval), bt && cancelAnimationFrame(bt), bt = 0, ia == null || ia.disconnect(), xa == null || xa.disconnect(), fo == null || fo.disconnect(), (s = Be == null ? void 0 : Be.removeEventListener) == null || s.call(Be, "change", lr), ai(), D.removeEventListener("click", Dn), D.removeEventListener("change", pn), D.removeEventListener("keydown", ze), D.removeEventListener("mousedown", Bn), z.removeEventListener("click", Dn), z.removeEventListener("change", pn), z.removeEventListener("keydown", ze), ["daily", "hourly"].forEach(xt), D.remove(), z.remove();
    }
  };
}
const Hr = "#E1E1E1", Qd = "#F7F4F0", El = "#03a9f4", Jt = 14, Qt = 172;
let u0 = 0;
const he = (n) => Math.round(n * 100) / 100, io = (n, r, d) => Math.max(r, Math.min(d, n)), Bo = (n, r, d, p, g, y) => '<rect x="' + he(n) + '" y="' + he(r) + '" width="' + he(d) + '" height="' + he(p) + '" fill="' + g + '"' + (y != null ? ' opacity="' + y + '"' : "") + "/>", Rl = (n) => n.map((r, d) => (d ? "L" : "M") + he(r[0]) + " " + he(r[1])).join("");
function Pl(n) {
  const r = (n == null ? void 0 : n.attributes) || {};
  return r.device_class === "curtain" ? "curtain" : r.device_class === "blind" || r.current_tilt_position != null ? "venetian" : "blind";
}
const Jo = [
  [2, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]],
  [6.5, ["#0B0F1C", "#2E7FD6", "#F2743B", "#F1B6C8", 0.95]],
  [9.5, ["#8FC4EC", "#4DA3E8", "#F4FAFF", "#2F7FCF", 0.7]],
  [13, ["#9ED3F6", "#3F97E6", "#FFFFFF", "#2B86D9", 0.65]],
  [17, ["#9FC2E4", "#4A8ED4", "#FFD9B8", "#5E8FD6", 0.75]],
  [19, ["#4B5E86", "#3B86E0", "#FF6A3D", "#B07CE8", 0.95]],
  [21.5, ["#1A2140", "#1F3F7A", "#B4506E", "#3E59A6", 0.8]],
  [26, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]]
];
function h0(n) {
  const r = n < 2 ? n + 24 : n;
  let d = Jo[0], p = Jo[Jo.length - 1];
  for (let A = 0; A < Jo.length - 1; A++) if (r >= Jo[A][0] && r <= Jo[A + 1][0]) {
    d = Jo[A], p = Jo[A + 1];
    break;
  }
  const g = (r - d[0]) / (p[0] - d[0]), y = g * g * (3 - 2 * g), w = (A, q) => {
    const M = parseInt(A.slice(1), 16), D = parseInt(q.slice(1), 16);
    return "#" + [16, 8, 0].map((I) => Math.round((M >> I & 255) + ((D >> I & 255) - (M >> I & 255)) * y).toString(16).padStart(2, "0")).join("");
  };
  return { top: w(d[1][0], p[1][0]), bot: w(d[1][1], p[1][1]), warm: w(d[1][2], p[1][2]), cool: w(d[1][3], p[1][3]), op: d[1][4] + (p[1][4] - d[1][4]) * y, t: r };
}
function m0(n) {
  const r = parseInt(n.slice(1), 16), d = (r >> 16 & 255) / 255, p = (r >> 8 & 255) / 255, g = (r & 255) / 255, y = Math.max(d, p, g), w = Math.min(d, p, g);
  let A = 0, q = 0;
  const M = (y + w) / 2;
  if (y !== w) {
    const D = y - w;
    q = M > 0.5 ? D / (2 - y - w) : D / (y + w), A = (y === d ? (p - g) / D + (p < g ? 6 : 0) : y === p ? (g - d) / D + 2 : (d - p) / D + 4) / 6;
  }
  return [A * 360, q * 100, M * 100];
}
function cf(n, r, d) {
  r = io(r, 0, 100) / 100, d = io(d, 0, 100) / 100;
  const p = (w) => (w + n / 30) % 12, g = r * Math.min(d, 1 - d), y = (w) => d - g * Math.max(-1, Math.min(p(w) - 3, Math.min(9 - p(w), 1)));
  return "#" + [y(0), y(8), y(4)].map((w) => Math.round(w * 255).toString(16).padStart(2, "0")).join("");
}
const [df, pf, ff] = m0(Hr), tp = cf(df, pf, Math.max(6, ff - 14)), g0 = cf(df, pf, Math.min(96, ff + 16));
function b0(n, r, d, p, g) {
  const y = Qt / 2, w = Qt * 0.12, A = y - (y - w) * n, q = (et) => et ** 1.3, M = io(d, -1.5, 1.5), D = (et) => -(Math.abs(M) * 4.6 * et ** 1.5) * Math.sign(M), I = n * 1.4, z = (et, at) => {
    const X = Math.min(4.8, Math.abs(d) * 2.6) * (at ? 1 : -1) * Math.sign(d || 1), H = at ? et + A : et, nt = at ? et : et + A, lt = (yt) => H + D(yt) + X * Math.sin(yt * Math.PI * 1.2 + p) * q(yt) * 1.4 + I * Math.sin(yt * Math.PI * 2 + p * 0.6) * q(yt) * (at ? 1 : -1), bt = [[nt, Jt]];
    for (let yt = 0; yt <= 12; yt++) bt.push([lt(yt / 12), Jt + Qt * yt / 12]);
    bt.push([nt, Jt + Qt]);
    let rt = '<path d="' + Rl(bt) + 'Z" fill="' + Hr + '"/>';
    if (g) return rt;
    const K = 1.35 + ((at ? d > 0 : d < 0) ? 0.35 : 0), Y = (yt) => {
      const Rt = yt / 7, st = at ? 1 - Rt : Rt, U = (1 - st) ** 1.3, qt = et + A * Rt;
      return Array.from({ length: 13 }, (W, tt) => {
        const B = tt / 12;
        return [qt + D(B) * U + X * K * Math.sin(B * Math.PI * 1.2 + p - st * 3.2) * q(B) * 1.4 * U + I * 1.6 * Math.sin(B * Math.PI * 2 + p * 0.6 - st * 2.5) * q(B) * n * (0.4 + 0.6 * U), Jt + Qt * B];
      });
    }, N = [1, 2, 3, 4, 5, 6].map(Y);
    for (let yt = 0; yt < 6; yt += 2) rt += '<path d="' + Rl(N[yt]) + Rl(N[yt + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return rt;
  }, Q = y - (y - w) * r;
  return { body: z(Jt, !0) + z(Jt + Qt - A, !1), rails: [{ x: Jt + Q - 4, y: Jt, w: 4, h: Qt }, { x: Jt + Qt - Q, y: Jt, w: 4, h: Qt }], head: 6.4 };
}
function w0(n, r, d) {
  const p = Qt * (1 - n);
  let g = "";
  if (p > 1 && (g += Bo(Jt, Jt, Qt, p, Hr), !d))
    for (let y = 1; y < 7; y += 2) g += Bo(Jt + Qt * y / 7, Jt, Qt / 7, p, "#fff");
  return { body: g, rails: [{ x: Jt, y: Jt + Qt * (1 - r) - 7, w: Qt, h: 11 }], head: 10.4 };
}
function v0(n, r, d, p) {
  const g = 9 - 7 * (d / 100), y = Jt + Qt * (1 - n), w = Math.ceil(Qt / 10) + 1, A = Jt + g / 2, q = (Jt + Qt - g / 2 - A) / (w - 1), M = 0.8, D = 0.6, I = Array.from({ length: w }, (et, at) => Math.max(A + at * D, Math.min(A + at * q, y - g / 2 - (w - 1 - at) * D))), z = I.slice(0, -1).map((et, at) => io((I[at + 1] - et - D) / (q - D), 0, 1));
  z.push(z[w - 2]);
  let Q = "";
  return I.forEach((et, at) => {
    const X = M + (g - M) * z[at], H = Math.max(0.5, X / 2), nt = Math.max(0.4, X * 0.114);
    Q += Bo(Jt, et - H, Qt, Math.max(1, X), Hr), !p && X > 2.2 && (Q += Bo(Jt, et + H - nt, Qt, nt, tp) + Bo(Jt, et - H, Qt, nt * 0.55, g0, 0.75));
  }), p || [0.22, 0.78].forEach((et) => {
    Q += Bo(Jt + Qt * et - 0.7, Jt, 1.4, Math.max(0, I[w - 1] + 1 - Jt), tp, 0.85);
  }), { body: Q, rails: [{ x: Jt, y: Jt + Qt * (1 - r) - 8, w: Qt, h: 8 }], head: 8.8 };
}
const ep = (n, r, d, p, g, y, w) => n === "curtain" ? b0(r, d, g, y, w) : n === "venetian" ? v0(r, d, p, w) : w0(r, d, w);
function y0(n, r) {
  let d = "", p = "";
  return r.forEach((g) => {
    const y = g.w > g.h, w = io(y ? Jt + Qt / 2 : g.x + g.w / 2, 17, 183), A = io(y ? g.y + g.h / 2 : Jt + Qt / 2, 17, 183);
    d += y ? Bo(Jt, io(g.y + g.h / 2, Jt, Jt + Qt) - 1, Qt, 2, El) : Bo(io(g.x + g.w / 2, Jt, Jt + Qt) - 1, Jt, 2, Qt, El);
    const q = y ? "M" + he(w - 4) + " " + he(A - 3) + "l4 -3l4 3M" + he(w - 4) + " " + he(A + 3) + "l4 3l4 -3" : "M" + he(w - 3) + " " + he(A - 4) + "l-3 4l3 4M" + he(w + 3) + " " + he(A - 4) + "l3 4l-3 4";
    p += '<circle cx="' + he(w) + '" cy="' + he(A) + '" r="11" fill="' + El + '" filter="url(#' + n + 's)"/><path d="' + q + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: d, knobs: p };
}
function x0(n, r) {
  const d = /* @__PURE__ */ new Date(), p = h0(d.getHours() + d.getMinutes() / 60), g = 42 + 18 * Math.sin(p.t * 0.5), y = p.t >= 5 && p.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (p.t - 5) / 15) : 80, w = ep(r.kind, r.pos / 100, r.bar / 100, r.tilt, r.vel, r.ph, !1), A = r.ghostAlpha > 4e-3 && r.ghost != null ? ep(r.kind, r.ghost / 100, r.ghost / 100, r.tilt, 0, 0, !0).body : "", q = r.grip > 4e-3 ? y0(n, w.rails) : null, M = (D) => Bo(Jt, Jt, Qt, Qt, D);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + n + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + n + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + p.top + '"/><stop offset="1" stop-color="' + p.bot + '"/></linearGradient><radialGradient id="' + n + 'w" cx="' + he(g) + '%" cy="' + he(y) + '%" r="58%"><stop offset="0" stop-color="' + p.warm + '" stop-opacity="' + he(p.op * 0.8) + '"/><stop offset="1" stop-color="' + p.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + n + 'k" cx="' + he(100 - g * 0.8) + '%" cy="' + he(100 - y * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + p.cool + '" stop-opacity="' + he(p.op * 0.64) + '"/><stop offset="1" stop-color="' + p.cool + '" stop-opacity="0"/></radialGradient><filter id="' + n + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + Qd + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + n + 'c)">' + M("url(#" + n + "l)") + M("url(#" + n + "w)") + M("url(#" + n + "k)") + (A ? '<g opacity="' + he(r.ghostAlpha) + '">' + A + "</g>" : "") + w.body + '<rect x="14" y="14" width="172" height="' + w.head + '" fill="' + Hr + '" filter="url(#' + n + 's)"/></g>' + (q ? '<g clip-path="url(#' + n + 'c)" opacity="' + he(r.grip) + '">' + q.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + Qd + '" stroke-width="3"/>' + (q ? '<g opacity="' + he(r.grip) + '">' + q.knobs + "</g>" : "") + "</svg>";
}
function k0({ onMove: n, onSet: r }) {
  var rt;
  const d = "cv" + ++u0, p = document.createElement("div");
  p.className = "tfCoverArt";
  const g = (rt = window.matchMedia) == null ? void 0 : rt.call(window, "(pointer: coarse)").matches;
  let y = null;
  const w = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let A = 0, q = !1, M = !1, D = null, I = 0, z = 0;
  const Q = () => (y == null ? void 0 : y.kind) === "curtain" ? "x" : "y", et = () => D || q || M || y.moving || y.target != null ? 1 : g ? performance.now() < z ? 1 : 0.4 : 0, at = () => {
    p.innerHTML = x0(d, { kind: y.kind, pos: w.pos, bar: y.target ?? w.pos, tilt: w.tilt, vel: w.vel, ph: w.ph, ghost: w.gpos, ghostAlpha: w.ghost, grip: w.grip });
  };
  function X(K) {
    A = 0;
    const Y = w.last ? Math.min(0.064, (K - w.last) / 1e3) : 1 / 60, N = Y * 60;
    w.last = K;
    const yt = y.pos - w.pos, Rt = w.pos;
    w.pos += Math.sign(yt) * Math.min(Math.abs(yt), Math.max(10.5, Math.abs(yt) * 1.4) * Y), Math.abs(y.pos - w.pos) < 0.03 && (w.pos = y.pos), w.vel = w.vel * 0.86 + (w.pos - Rt) / N * 0.14, Math.abs(w.vel) < 0.015 && w.pos === y.pos && (w.vel = 0), (w.pos !== Rt || w.vel) && (w.ph += (0.06 + Math.abs(w.vel) * 0.03) * N);
    const st = y.tilt - w.tilt;
    w.tilt += Math.sign(st) * Math.min(Math.abs(st), Math.max(60, Math.abs(st) * 4) * Y);
    const U = et();
    w.grip += (U - w.grip) * Math.min(1, Y * (U > w.grip ? 11 : 3.5)), Math.abs(U - w.grip) < 0.01 && (w.grip = U);
    const qt = y.target != null && Math.abs(y.target - w.pos) > 0.5 ? 0.22 : 0;
    y.target != null && (w.gpos = y.target), w.ghost += (qt - w.ghost) * Math.min(1, Y * (qt > w.ghost ? 16 : 3)), Math.abs(qt - w.ghost) < 4e-3 && (w.ghost = qt), at(), w.pos !== y.pos || w.vel || w.tilt !== y.tilt || w.grip !== U || w.ghost !== qt ? A = requestAnimationFrame(X) : w.last = 0;
  }
  const H = () => {
    y && !A && (A = requestAnimationFrame(X));
  }, nt = setInterval(() => {
    y && !A && at();
  }, 60 * 1e3), lt = (K) => {
    const Y = p.getBoundingClientRect();
    return Q() === "x" ? (K.clientX - Y.left) / Y.width : (K.clientY - Y.top) / Y.height;
  };
  p.addEventListener("pointerdown", (K) => {
    var yt;
    if (!(y != null && y.canSet) || K.button > 0) return;
    K.preventDefault(), (yt = p.setPointerCapture) == null || yt.call(p, K.pointerId);
    const Y = y.target ?? y.pos, N = p.getBoundingClientRect();
    D = { p0: lt(K), from: Y, x0: K.clientX, value: null, side: null }, y.kind === "curtain" && Y > 0 && (D.side = (K.clientX - N.left) / N.width < 0.5 ? "L" : "R"), H();
  }), p.addEventListener("pointermove", (K) => {
    if (!D) return;
    let Y;
    if (y.kind === "curtain") {
      if (!D.side) {
        const yt = K.clientX - D.x0;
        if (Math.abs(yt) < 4) return;
        D.side = yt < 0 ? "L" : "R";
      }
      const N = (Qt / 2 - Qt * 0.12) / 200;
      Y = D.from + (D.side === "L" ? -1 : 1) * ((lt(K) - D.p0) / N) * 100;
    } else Y = D.from - (lt(K) - D.p0) / (Qt / 200) * 100;
    D.value = io(Y, 0, 100), n(D.value);
  });
  const bt = () => {
    if (!D) return;
    const K = D.value;
    D = null, K != null && r(Math.round(K)), H();
  };
  return p.addEventListener("pointerup", bt), p.addEventListener("pointercancel", bt), p.addEventListener("lostpointercapture", bt), p.addEventListener("pointerenter", () => {
    q = !0, H();
  }), p.addEventListener("pointerleave", () => {
    q = !1, H();
  }), p.addEventListener("focus", () => {
    M = p.matches(":focus-visible"), H();
  }), p.addEventListener("blur", () => {
    M = !1, H();
  }), p.addEventListener("keydown", (K) => {
    if (!(y != null && y.canSet)) return;
    const Y = Math.round(y.target ?? y.pos), N = K.shiftKey ? 10 : 1, yt = { ArrowUp: Y + N, ArrowRight: Y + N, ArrowDown: Y - N, ArrowLeft: Y - N, PageUp: Y + 25, PageDown: Y - 25, Home: 0, End: 100 }[K.key];
    if (yt == null) return;
    K.preventDefault();
    const Rt = io(yt, 0, 100);
    n(Rt), clearTimeout(I), I = setTimeout(() => r(Rt), 500);
  }), {
    el: p,
    update(K) {
      const Y = !y;
      y = K, Y && (w.pos = y.pos, w.tilt = y.tilt, z = performance.now() + 1500, g && setTimeout(H, 1600)), p.classList.toggle("x", Q() === "x"), p.classList.toggle("y", Q() === "y"), y.canSet ? (p.tabIndex = 0, p.setAttribute("role", "slider"), p.setAttribute("aria-valuemin", "0"), p.setAttribute("aria-valuemax", "100"), p.setAttribute("aria-valuenow", String(Math.round(y.target ?? y.pos))), p.setAttribute("aria-orientation", Q() === "x" ? "horizontal" : "vertical")) : p.setAttribute("role", "img"), p.setAttribute("aria-label", y.name + (y.canSet ? " position" : "")), p.setAttribute("aria-valuetext", y.text), H();
    },
    destroy() {
      cancelAnimationFrame(A), A = 0, clearInterval(nt), clearTimeout(I), p.remove();
    }
  };
}
const ap = "homecore-density", oo = {
  get(n) {
    try {
      return localStorage.getItem(n);
    } catch {
      return null;
    }
  },
  set(n, r) {
    try {
      localStorage.setItem(n, r);
    } catch {
    }
  }
}, P = (n) => String(n ?? "").replace(/[&<>"']/g, (r) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[r]), op = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', np = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', rp = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', Ni = {
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h2v12H6zM9.5 12L18 18V6z"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>'
}, ip = {
  down: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 11h14v2H5z"/></svg>',
  up: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z"/></svg>'
}, sp = 1, M0 = 4, lp = 16, cp = 32, S0 = 128, _0 = 256, dp = 16384, pp = 1, fp = 2, Hl = 4, up = 8, C0 = {
  open: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/></svg>',
  stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5" fill="currentColor"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l5 5-5 5"/><path d="M21 7l-5 5 5 5"/></svg>'
}, hp = { curtain: ["mdi:curtains", "mdi:curtains-closed"], blind: ["mdi:roller-shade", "mdi:roller-shade-closed"], venetian: ["mdi:blinds-horizontal", "mdi:blinds-horizontal-closed"] }, A0 = { curtain: "curtains", blind: "blind", venetian: "blinds" }, Br = {
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
}, mp = ["covers", "people", "openings", "leaks", "vacuum"], gp = "homecore_house", bp = "homecore-house-used", Er = ["switch", "fan", "input_boolean", "automation"], wp = "homecore-house-look", T0 = [["look", "Look"], ["house", "House page"], ["weather", "Weather"]], L0 = [["popup", "Popup"], ["sheet", "Sheet"]], D0 = [["auto", "Automatic"], ["cut", "Cut short"], ["wrap", "Two lines"], ["scroll", "Scroll"]], B0 = [["day", "Daytime 06–22"], ["waking", "Waking 07–23"], ["all", "All day"]], E0 = [["bitmap", "Pixel"], ["onebit", "1-bit"], ["smooth", "Smooth"], ["line", "Line"]], Rr = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', R0 = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', P0 = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>', vp = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"/></svg>', Nl = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>', ga = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 13C6.14 13 4.59 14.28 4.14 16H2V18H4.14C4.59 19.72 6.14 21 8 21S11.41 19.72 11.86 18H22V16H11.86C11.41 14.28 9.86 13 8 13M8 19C6.9 19 6 18.1 6 17C6 15.9 6.9 15 8 15S10 15.9 10 17C10 18.1 9.1 19 8 19M19.86 6C19.41 4.28 17.86 3 16 3S12.59 4.28 12.14 6H2V8H12.14C12.59 9.72 14.14 11 16 11S19.41 9.72 19.86 8H22V6H19.86M16 9C14.9 9 14 8.1 14 7C14 5.9 14.9 5 16 5S18 5.9 18 7C18 8.1 17.1 9 16 9Z"/></svg>', yp = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"/></svg>', Oi = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/></svg>', xp = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', uf = (n) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + n.map((r) => '<path d="' + r + '"/>').join("") + "</svg>", Ii = uf(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), kp = uf(["M20 6L9 17L4 12"]), no = (n, r = "") => '<span class="tfAreaGlyph" data-icon-for="' + P(n || "") + '"' + (r ? ' data-icon-name="' + P(r) + '"' : "") + "></span>", H0 = (n) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (n ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', Mp = 1, Sp = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], _p = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, Fi = ["door", "window", "garage_door", "opening"], Cp = { moisture: ["detected water", "dry"], smoke: ["detected smoke", "clear"], gas: ["detected gas", "clear"], carbon_monoxide: ["detected carbon monoxide", "clear"], safety: ["became unsafe", "safe"] }, Gn = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve", "water_heater"], N0 = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], O0 = 10, I0 = 20, F0 = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, q0 = ["living room", "bedroom", "office"];
function W0(n, { config: r, getHass: d }) {
  var fd, ud, hd;
  const p = (t) => n.getElementById(t), g = p("app"), y = r || {}, w = String(y.layout || "").toLowerCase().replace("_", "-") === "test-focus", A = String(y.page || "").toLowerCase() === "overview";
  let q = oo.get(ap) === "1", M = {};
  const D = (t) => {
    var e;
    return (e = d()) == null ? void 0 : e.callWS(t);
  }, I = (t, e, a) => D({ type: "call_service", domain: t, service: e, service_data: a }), z = n.querySelector("#appearancePane .toggleList");
  z && !p("densityToggle") && (z.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), p("densityToggle").addEventListener("click", () => {
    q = !q, oo.set(ap, q ? "1" : "0"), Y();
  }));
  const Q = [
    ["weather", "Weather", "The forecast under Home.", (t) => t.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (t) => t.startsWith("sensor.") && Gt(t).device_class === "power" && /^(W|kW)$/.test(Gt(t).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm in the Security popup.", (t) => t.startsWith("alarm_control_panel.")]
  ], et = (t, e, a, o) => '<div class="themeChoice" id="' + t + '" role="group" aria-label="' + e + '">' + o.map(([i, c]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + a + '="' + i + '">' + c + "</button>").join("") + "</div>", at = (t, e, a, o) => '<div class="toggleRow"' + (o ? ' id="' + o + '"' : "") + "><div><strong>" + t + "</strong>" + (e ? '<div class="status">' + e + "</div>" : "") + "</div>" + a + "</div>";
  function X() {
    var _, S;
    if (!w || p("housePane")) return;
    const t = p("settingsView");
    t.querySelector(".settingsTitle").textContent = "HomeCore settings";
    const e = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], a = (C, R) => '<div class="houseTab' + (C === "look" ? " active" : "") + '" data-house-pane="' + C + '"><section class="card">' + R + "</section></div>";
    t.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + e.map(([C, R]) => '<button class="tab segBtn' + (C === "look" ? " active" : "") + '" type="button" data-house-tab="' + C + '">' + R + "</button>").join("") + "</div>" + // Appearance in groups (Matt, 8 Nov), each one's title inside its card as a card header (Matt, 9 Nov)
    a("look", T0.map(([C, R]) => '<div class="tfSetGroup"><div class="toggleList" data-look-group="' + C + '"><div class="tfCardTitle">' + R + "</div></div></div>").join("")) + // Lights as cards by default, with a Cards | Table choice (Matt, 9 Nov)
    a("lights", '<div class="tfLightView"><div class="themeChoice" role="group" aria-label="Show lights as"><button class="wxLayoutBtn" type="button" data-light-view="cards">Cards</button><button class="wxLayoutBtn" type="button" data-light-view="table">Table</button></div></div><p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div><div class="tfLightCards" id="lightCards"></div>') + a("sources", '<div class="toggleList">' + Q.map(([C, R, V]) => at(R, V, '<select class="settingsSelect" data-source="' + C + '" aria-label="' + R + '"></select>')).join("") + "</div>") + a("sums", '<div class="toggleList">' + Object.entries(Br).map(([C, R]) => at(R.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + C + '" aria-label="' + R.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const o = (C) => t.querySelector('[data-look-group="' + C + '"]'), i = (C) => C == null ? void 0 : C.closest(".toggleRow");
    [i(t.querySelector(".themeBtn"))].forEach((C) => C && o("look").appendChild(C));
    const c = i(p("densityToggle"));
    c && (c.hidden = !0), [i(p("moreInfoChoice")), i(p("namesChoice"))].forEach((C) => C && o("house").appendChild(C)), o("house").insertAdjacentHTML("beforeend", at("Lights", "How lights show on the house page.", et("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + at("Pad", "What the Dual Axis Controller’s pad sets on its tile.", et("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow")), [i(p("hoursChoice")), i(p("wxStyleChoice"))].forEach((C) => C && o("weather").appendChild(C));
    const l = p("housePane"), f = l.querySelector(".houseTabs"), h = f.querySelector(".rubberIndicator"), x = "homecore-light-view", k = (C) => {
      l.classList.toggle("tfLightCardsOn", C === "cards"), l.querySelectorAll("[data-light-view]").forEach((R) => R.setAttribute("aria-pressed", String(R.dataset.lightView === C))), oo.set(x, C);
    };
    k(oo.get(x) === "table" ? "table" : "cards"), l.querySelector(".tfLightView").addEventListener("click", (C) => {
      const R = C.target.closest("[data-light-view]");
      R && k(R.dataset.lightView);
    }), new ResizeObserver(() => nt()).observe(l), (S = (_ = document.fonts) == null ? void 0 : _.ready) == null || S.then(() => nt());
    const v = (C) => {
      const R = f.querySelector(".tab.active");
      h.style.transition = "none", C ? ji(h, h.offsetLeft, h.offsetWidth, R.offsetLeft, R.offsetWidth) : (h.style.left = R.offsetLeft + "px", h.style.width = R.offsetWidth + "px");
    };
    new ResizeObserver(() => v(!1)).observe(f), l.addEventListener("click", (C) => {
      const R = C.target.closest("[data-house-tab]");
      if (R) {
        f.querySelectorAll(".tab").forEach((E) => E.classList.toggle("active", E === R)), l.querySelectorAll(".houseTab").forEach((E) => E.classList.toggle("active", E.dataset.housePane === R.dataset.houseTab)), R.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), v(!0), nt();
        return;
      }
      const V = C.target.closest("[data-light-fav]");
      if (V) {
        fr(V.dataset.lightFav);
        return;
      }
      const L = C.target.closest("[data-light-pick]");
      if (L) {
        const [E, wt] = L.dataset.lightPick.split("|"), Wt = { ...Ut[E] };
        L.dataset.v ? Wt[wt] = L.dataset.v : delete Wt[wt], Ut[E] = Wt, oa(), [...ze.keys()].filter((Bt) => Bt.endsWith(":" + wt)).forEach((Bt) => ze.delete(Bt)), Wa();
        return;
      }
      const G = C.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!G || G.disabled)) {
        if (G.dataset.lights && (Ut.lights = G.dataset.lights), G.dataset.dacPad && (Ut.dacPad = G.dataset.dacPad), (G.dataset.lights || G.dataset.dacPad) && (oa(), ze.clear()), G.dataset.sumToggle) {
          const E = G.dataset.sumToggle, wt = new Set(gt.hiddenSums || []);
          wt.has(E) ? wt.delete(E) : wt.add(E), gt = { ...gt, hiddenSums: [...wt] }, Oe();
        }
        Wa();
      }
    }), l.addEventListener("change", (C) => {
      const R = C.target;
      R.dataset.source && (gt = { ...gt, sources: { ...gt.sources || {}, [R.dataset.source]: R.value || void 0 } }, Oe());
      const V = R.dataset.lightStyle || R.dataset.lightPad;
      if (V) {
        const L = R.dataset.lightStyle ? "lightStyles" : "lightPads", G = { ...Ut[L] };
        R.value ? G[V] = R.value : delete G[V], Ut[L] = G, oa(), [...ze.keys()].filter((E) => E.endsWith(":" + V)).forEach((E) => ze.delete(E));
      }
      Wa();
    });
  }
  function H() {
    var v, _;
    Bn() && Dn();
    const t = p("housePane");
    if (!t) return;
    const e = !!customElements.get(ma);
    t.querySelectorAll("[data-lights]").forEach((S) => S.setAttribute("aria-pressed", String(S.dataset.lights === Ut.lights))), p("lightsRow").querySelector(".status").textContent = e || !Bn() ? "How lights show on the house page." : Vo === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", t.querySelectorAll("[data-dac-pad]").forEach((S) => S.setAttribute("aria-pressed", String(S.dataset.dacPad === Ut.dacPad))), p("dacPadRow").hidden = !Bn();
    for (const S of t.querySelectorAll("[data-source]")) {
      if (S === n.activeElement) continue;
      const [C] = Q.find(([V]) => V === S.dataset.source), R = Object.keys(M).filter(Q.find(([V]) => V === C)[3]).sort((V, L) => mt(V).localeCompare(mt(L)));
      S.dataset.sig !== R.join(",") && (S.innerHTML = '<option value="">Automatic</option>' + R.map((V) => '<option value="' + P(V) + '">' + P(mt(V)) + "</option>").join(""), S.dataset.sig = R.join(",")), S.value = R.includes((v = gt.sources) == null ? void 0 : v[C]) ? gt.sources[C] : "";
    }
    t.querySelectorAll("[data-sum-toggle]").forEach((S) => {
      const C = !(gt.hiddenSums || []).includes(S.dataset.sumToggle);
      S.classList.toggle("on", C), S.setAttribute("aria-checked", String(C));
    });
    const a = p("lightRows"), o = p("lightCards"), i = n.activeElement, c = a != null && a.contains(i) || o != null && o.contains(i) ? i : null;
    if (!a || c != null && c.matches("select")) {
      nt();
      return;
    }
    const l = new Set(J()), f = (S, C, R, V) => '<option value="' + S + '"' + (S === R ? " selected" : "") + ">" + C + "</option>", h = Object.keys(M).filter((S) => S.startsWith("light.")).sort((S, C) => !Ct.get(S) - !Ct.get(C) || (Ct.get(S) || "").localeCompare(Ct.get(C) || "") || mt(S).localeCompare(mt(C))).map((S) => {
      const C = Ut.lightStyles[S] || "", R = Ut.lightPads[S] || "", V = l.has(S), L = P(mt(S));
      return "<tr><td><strong>" + L + "</strong></td><td>" + P(Ct.get(S) || "—") + "</td><td>" + P(Te(S)) + '</td><td class="metaSwitchCol"><button class="switch' + (V ? " on" : "") + '" type="button" role="switch" aria-checked="' + V + '" data-light-fav="' + P(S) + '" aria-label="' + L + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + P(S) + '" aria-label="' + L + ' tile">' + f("", "Default", C) + f("tile", "HomeCore tile", C) + f("dac", "Dual Axis Controller", C) + '</select></td><td><select class="settingsSelect" data-light-pad="' + P(S) + '" aria-label="' + L + ' pad"' + (va(S) ? "" : " disabled") + ">" + f("", "Default", R) + f("temperature", "Temperature", R) + f("colour", "Colour", R) + "</select></td></tr>";
    }).join(""), x = (S, C, R, V, L) => '<div class="themeChoice" role="group" aria-label="' + R + '">' + V.map(([G, E]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (G === L) + '" data-light-pick="' + S + "|" + P(C) + '" data-v="' + G + '">' + E + "</button>").join("") + "</div>", k = Object.keys(M).filter((S) => S.startsWith("light.")).sort((S, C) => !Ct.get(S) - !Ct.get(C) || (Ct.get(S) || "").localeCompare(Ct.get(C) || "") || mt(S).localeCompare(mt(C))).map((S) => {
      const C = l.has(S), R = P(mt(S)), V = [Ct.get(S), Te(S)].filter(Boolean).map(P).join(" · ");
      return '<div class="toggleList"><div class="toggleRow"><div><strong>' + R + '</strong><div class="status">' + V + "</div></div></div>" + at("Favourite", "", '<button class="switch' + (C ? " on" : "") + '" type="button" role="switch" aria-checked="' + C + '" data-light-fav="' + P(S) + '" aria-label="' + R + ' is a favourite"></button>') + at("Tile", "", x("lightStyles", S, R + " tile", [["", "Default"], ["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]], Ut.lightStyles[S] || "")) + (va(S) ? at("Pad", "", x("lightPads", S, R + " pad", [["", "Default"], ["temperature", "Temperature"], ["colour", "Colour"]], Ut.lightPads[S] || "")) : "") + "</div>";
    }).join("");
    a.dataset.html !== h && (a.innerHTML = h, a.dataset.html = h), o.dataset.html !== k && (o.innerHTML = k, o.dataset.html = k), c != null && c.dataset.lightFav && ((_ = (o.contains(c) ? o : a).querySelector('[data-light-fav="' + CSS.escape(c.dataset.lightFav) + '"]')) == null || _.focus({ preventScroll: !0 })), nt();
  }
  function nt() {
    var e, a, o;
    const t = p("housePane");
    if (t)
      for (const i of t.querySelectorAll(".themeChoice")) {
        const c = [...i.querySelectorAll("button")];
        let l = (e = i.nextElementSibling) != null && e.classList.contains("tfChoiceList") ? i.nextElementSibling : null;
        if (!l) {
          l = document.createElement("select"), l.className = "settingsSelect tfChoiceList", l.setAttribute("aria-label", i.getAttribute("aria-label") || ((o = (a = i.closest(".toggleRow")) == null ? void 0 : a.querySelector("strong")) == null ? void 0 : o.textContent) || ""), l.addEventListener("change", () => {
            var v;
            return (v = c[Number(l.value)]) == null ? void 0 : v.click();
          }), i.after(l);
          const k = () => {
            l.innerHTML = c.map((_, S) => '<option value="' + S + '"' + (_.disabled ? " disabled" : "") + ">" + P(_.textContent) + "</option>").join("");
            const v = c.findIndex((_) => _.getAttribute("aria-pressed") === "true" || _.classList.contains("active"));
            v >= 0 && (l.value = String(v));
          };
          new MutationObserver(k).observe(i, { subtree: !0, attributes: !0, attributeFilter: ["aria-pressed", "class", "disabled"] }), k();
        }
        const f = (k) => {
          i.hidden !== !k && (i.hidden = !k), l.hidden !== k && (l.hidden = k);
        };
        if (c.length > 3) {
          f(!1);
          continue;
        }
        if (!i.getClientRects().length && !l.getClientRects().length) {
          l.dataset.fit || f(!0);
          continue;
        }
        const h = i.hidden;
        i.hidden = !1;
        const x = c.every((k) => k.scrollWidth <= k.clientWidth + 1);
        i.hidden = h, f(x), l.dataset.fit = "1";
      }
  }
  const lt = document.createElement("div");
  lt.className = "densityBadge", lt.setAttribute("aria-live", "polite"), lt.hidden = !0, g.appendChild(lt);
  let bt = 0;
  function rt() {
    if (!q) return;
    const t = p("homeView"), e = (c) => c.offsetParent !== null && !c.closest("[hidden]");
    t.querySelectorAll(":scope .card, :scope .tfAction").forEach((c) => {
      e(c) && (c.dataset.h = Math.round(c.getBoundingClientRect().height) + " px");
    });
    const a = [...t.querySelectorAll(".activityRow, .tfAction, .wxNow")].filter(e), o = window.innerHeight, i = a.filter((c) => {
      const l = c.getBoundingClientRect();
      return l.height > 0 && l.top >= 0 && l.bottom <= o + 0.5;
    }).length;
    lt.hidden = !t.classList.contains("active"), lt.innerHTML = "<b>" + i + "</b><small>of " + a.length + " readings on screen</small>";
  }
  const K = () => {
    q && requestAnimationFrame(rt);
  };
  function Y() {
    var t;
    g.classList.toggle("showDensity", q), (t = p("densityToggle")) == null || t.classList.toggle("on", q), lt.hidden = !q, clearInterval(bt), q && (bt = setInterval(rt, 1e3), rt());
  }
  window.addEventListener("scroll", K, { capture: !0, passive: !0 }), window.addEventListener("resize", K, { passive: !0 });
  const N = n.querySelector("#homeView .grid"), yt = document.createElement("style");
  n.appendChild(yt);
  const Rt = new ResizeObserver(() => qt()), st = /* @__PURE__ */ new Set(), U = (t) => {
    const e = t.getBoundingClientRect().height;
    return Math.abs(e - t.offsetHeight) < 1 ? e : t.offsetHeight;
  };
  function qt() {
    const t = g.classList.contains("tfAreaOpen") && !g.classList.contains("tfWeatherOpen");
    if (N.classList.toggle("tfStack", t), st.forEach((h) => {
      (!t || !h.isConnected) && (Rt.unobserve(h), st.delete(h));
    }), !t) {
      yt.textContent = "";
      return;
    }
    const e = getComputedStyle(N), a = parseFloat(e.columnGap) || 0, o = e.gridTemplateColumns.split(" ").length, i = [...N.children].filter((h) => h.dataset.k && h.offsetParent);
    yt.disabled = !0;
    const c = i.map((h) => {
      const x = getComputedStyle(h), k = /span (\d+)/.exec(x.gridColumnStart + " " + x.gridColumnEnd);
      return Math.min(o, k ? +k[1] : x.gridColumnEnd === "-1" ? o : 1);
    });
    yt.disabled = !1;
    let l = 0;
    const f = i.map((h, x) => {
      st.has(h) || (st.add(h), Rt.observe(h));
      const k = c[x];
      l + k > o && (l = 0);
      const v = l + 1;
      return l = (l + k) % o, '#homeView .grid.tfStack>[data-k="' + CSS.escape(h.dataset.k) + '"]{grid-column:' + v + " / span " + k + ";grid-row-end:span " + Math.max(1, Math.ceil(U(h) + a)) + "}";
    }).join(`
`);
    yt.textContent !== f && (yt.textContent = f);
  }
  new MutationObserver(qt).observe(N, { childList: !0 }), new MutationObserver(qt).observe(g, { attributes: !0, attributeFilter: ["class"] });
  let W = null, tt = null, B = null;
  const pt = /* @__PURE__ */ new Map(), ot = /* @__PURE__ */ new Map(), it = /* @__PURE__ */ new Map(), xt = 6;
  let ft = null;
  const kt = /* @__PURE__ */ new Map(), It = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map();
  let gt = { favourites: null }, Ke = {}, so = {}, en = [], Eo = null;
  const Ga = (() => {
    try {
      return JSON.parse(oo.get(bp)) || {};
    } catch {
      return {};
    }
  })();
  let Ct = /* @__PURE__ */ new Map(), _e = 0;
  function Oe() {
    clearTimeout(_e), _e = setTimeout(() => Promise.resolve(D({ type: "frontend/set_user_data", key: gp, value: gt })).catch(() => {
    }), 400);
  }
  const Ut = (() => {
    let t = {};
    try {
      t = JSON.parse(oo.get(wp)) || {};
    } catch {
    }
    const e = (a, o) => Object.fromEntries(Object.entries(a || {}).filter(([, i]) => o.includes(i)));
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
  })(), oa = () => oo.set(wp, JSON.stringify(Ut)), Xn = () => {
    g.dataset.more = Ut.more, g.dataset.names = Ut.names, Zs();
  };
  w && z && !p("moreInfoChoice") && (p("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + L0.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Ut.more === t) + '" data-more-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), p("moreInfoChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-more-style]");
    e && (Ut.more = e.dataset.moreStyle, oa(), Xn(), p("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  }), p("moreInfoChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Long names</strong><div class="status">How a name or state too long for its space shows.</div></div><div class="themeChoice" id="namesChoice" role="group" aria-label="Long names">' + D0.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Ut.names === t) + '" data-names-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), p("namesChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-names-style]");
    e && (Ut.names = e.dataset.namesStyle, Ut.namesPicked = !0, oa(), Xn(), p("namesChoice").querySelectorAll("[data-names-style]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  }), p("namesChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Next hours</strong><div class="status">The hours each day shows on the Weather page.</div></div><div class="themeChoice" id="hoursChoice" role="group" aria-label="Next hours">' + B0.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Ut.hoursWindow === t) + '" data-hours-window="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), p("hoursChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-hours-window]");
    e && (Ut.hoursWindow = e.dataset.hoursWindow, oa(), we == null || we.refresh(), p("hoursChoice").querySelectorAll("[data-hours-window]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  }), p("hoursChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Weather art</strong><div class="status">How the weather and the sky are drawn.</div></div><div class="themeChoice" id="wxStyleChoice" role="group" aria-label="Weather art">' + E0.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Ut.wxStyle === t) + '" data-wx-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), p("wxStyleChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-wx-style]");
    e && (Ut.wxStyle = e.dataset.wxStyle, oa(), we == null || we.setStyle(Ut.wxStyle), ve == null || ve.forEach((a) => a.setStyle(Ut.wxStyle)), p("wxStyleChoice").querySelectorAll("[data-wx-style]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  })), X();
  let zt = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const ba = /* @__PURE__ */ new Map();
  let Nr = "";
  const Or = w ? lh({ onChange: () => Le() }) : null;
  w && g.classList.add("house");
  const wa = Object.assign(document.createElement("div"), { className: "tfBento" });
  let we = null, Ir = null, an = !1;
  function Fr(t) {
    const e = Ot();
    if (g.classList.toggle("houseBento", !!e), we && (Ir !== e || t == null) && (we.destroy(), we = null), !e || t == null) {
      wa.remove();
      return;
    }
    wa.isConnected || N.append(wa), wa.style.order = t, !we && !an && (we = Jd(wa, { getHass: d, entityId: e, style: Ut.wxStyle, hoursWindow: () => Ut.hoursWindow, radarSource: tr }), Ir = e);
  }
  const $n = [
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
  ], Jn = $n.map(([t]) => t), Ro = ["aq", "pollen", "radar", "hourly", "sun", "moon", "uv", "humidity", "pressure", "wind", "visibility"], Ki = { hourly: 2 }, Ua = Object.fromEntries($n.map(([t]) => [t, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + t })]));
  let ve = null, Qn = null;
  function qr(t) {
    const e = Ot();
    ve && Qn !== e && (ve.forEach((a) => a.destroy()), ve = null), Object.values(Ua).forEach((a) => e ? !a.isConnected && N.append(a) : a.remove()), e && !ve && !an && (ve = /* @__PURE__ */ new Map(), Qn = e), jr();
  }
  const tr = () => {
    var t;
    return ((t = ae().opts.radar) == null ? void 0 : t.source) || "rainviewer";
  }, Wr = () => [["rainviewer", "RainViewer"], ...Object.values(M).filter((t) => t.entity_id.startsWith("camera.")).sort((t, e) => mt(t.entity_id).localeCompare(mt(e.entity_id))).map((t) => ["camera:" + t.entity_id, mt(t.entity_id)])];
  function jr() {
    if (!ve || an) return;
    const t = new Set(ae().hidden);
    $n.forEach(([e, a]) => {
      ve.has(e) || t.has(e) && !($t != null && $t.fromTray && $t.key === e) || ve.set(e, Jd(Ua[e], { getHass: d, entityId: Qn, style: Ut.wxStyle, cards: a, onOpen: e === "wx" ? () => jc("weather") : void 0, radarSource: tr }));
    });
  }
  const Gt = (t) => {
    var e;
    return ((e = M[t]) == null ? void 0 : e.attributes) || {};
  }, mt = (t) => Gt(t).friendly_name || t, le = (t, e) => Va(t) || (Number(Gt(t).supported_features) & e) === e, Vt = (t) => {
    const e = String(t ?? "").replace(/_/g, " ");
    return e.charAt(0).toUpperCase() + e.slice(1);
  }, Ae = (t, e = 1) => Number(t).toLocaleString(void 0, { minimumFractionDigits: e, maximumFractionDigits: e }), Ya = (t) => (t == null ? void 0 : t.state) === "on" ? t.attributes.brightness != null ? Math.max(1, Math.round(t.attributes.brightness / 2.55)) : 100 : 0, Za = (t) => Gt(t).supported_color_modes || [], Xi = (t, e) => [5, 3, 1].map((a) => {
    const o = (a + t / 60) % 6;
    return 255 * (1 - e / 100 * Math.max(0, Math.min(o, 4 - o, 1)));
  }), er = (t) => (t /= 255, t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)), Vr = (t) => 0.2126 * er(t[0]) + 0.7152 * er(t[1]) + 0.0722 * er(t[2]), $i = (t, e) => {
    const a = Vr(t), o = Vr(e);
    return (Math.max(a, o) + 0.05) / (Math.min(a, o) + 0.05);
  }, Ji = 0.55, Po = ["hs", "xy", "rgb", "rgbw", "rgbww"], zr = (t) => {
    const e = Gt(t), a = Po.includes(e.color_mode);
    return (a && e.rgb_color ? e.rgb_color : a && e.hs_color ? Xi(...e.hs_color) : [255, 170, 0]).map((o) => Math.round(Math.max(0, Math.min(255, o))));
  }, Qi = { heat: [255, 111, 34], cool: [33, 150, 243], heat_cool: [255, 193, 7], auto: [76, 175, 80], dry: [255, 152, 0], fan_only: [0, 188, 212] };
  function on(t) {
    var o;
    const e = t.split(".")[0], a = (o = M[t]) == null ? void 0 : o.state;
    return !a || a === "unavailable" || a === "unknown" ? null : e === "light" ? a === "on" ? zr(t) : null : e === "climate" ? Qi[a] || null : e === "cover" ? a !== "closed" ? [146, 107, 199] : null : e === "lock" ? a !== "locked" ? [244, 67, 54] : null : e === "media_player" ? ["playing", "paused", "on", "buffering"].includes(a) ? [3, 169, 244] : null : e === "humidifier" || e === "valve" ? ["on", "open", "opening", "closing"].includes(a) ? [33, 150, 243] : null : e === "vacuum" ? ["cleaning", "returning"].includes(a) ? [0, 150, 136] : null : e === "alarm_control_panel" ? a !== "disarmed" && a !== "triggered" ? [76, 175, 80] : null : e === "fan" ? a === "on" ? [0, 188, 212] : null : (e === "switch" || e === "input_boolean") && a === "on" ? [255, 193, 7] : null;
  }
  function ar(t, e, a = !1) {
    const [o, i, c] = t.map((C) => C / 255), l = Math.max(o, i, c), f = Math.min(o, i, c), h = l - f, x = h ? (l === o ? (i - c) / h + (i < c ? 6 : 0) : l === i ? (c - o) / h + 2 : (o - i) / h + 4) * 60 : 0, k = (l + f) / 2, v = h ? h / (1 - Math.abs(2 * k - 1)) : 0, _ = h < 0.1 ? Math.min(v, 0.25) : 1, S = (C) => {
      const R = (L) => (L + x / 30) % 12, V = _ * Math.min(C, 1 - C);
      return [0, 8, 4].map((L) => Math.round(255 * (C - V * Math.max(-1, Math.min(R(L) - 3, 9 - R(L), 1)))));
    };
    for (let C = 0.5; a ? C < 0.96 : C > 0.04; C += a ? 0.01 : -0.01) {
      const R = S(C);
      if ($i(R, e) >= 3) return "rgb(" + R.join(",") + ")";
    }
    return a ? "#ffffff" : "#26221e";
  }
  const Tn = (t) => {
    const e = [1, 3, 5].map((a) => parseInt(t.slice(a, a + 2), 16));
    return Math.max(...e) - Math.min(...e) < 26 ? "" : ";--sum-d:" + ar(e, [58, 58, 58], !0) + ";--sum-l:" + ar(e, [230, 230, 230]);
  }, Gr = { d: ["#ffb894", "#d2b4ff", "#9dcbff"], l: ["#f0946a", "#b48ae6", "#6fa8e8"] }, ts = () => [0, 1, 2].map((t) => "--g" + t + "-d:" + Gr.d[t] + ";--g" + t + "-l:" + Gr.l[t]).join(";"), es = '<svg class="tfGradDefs" aria-hidden="true" focusable="false"><defs><linearGradient id="hcClimateGrad" x1="0" y1="0" x2="0" y2="1">' + [0.15, 0.5, 0.85].map((t, e) => '<stop offset="' + t + '" style="stop-color:var(--g' + e + ')"/>').join("") + "</linearGradient></defs></svg>", lo = (t) => {
    const e = t.map((a) => Math.round(a + (255 - a) * Ji));
    return "--light-soft:rgb(" + e.join(",") + ");--light-ink:" + ar(t, e);
  }, as = (t) => lo(zr(t)), Ho = (t) => {
    const e = on(t);
    return e ? ' data-light style="' + lo(e) + '"' : "";
  }, Ve = (t) => {
    const e = Za(t);
    return e.length ? e.some((a) => a !== "onoff") : Gt(t).brightness != null;
  }, No = (t) => [Gt(t).min_color_temp_kelvin || 2e3, Gt(t).max_color_temp_kelvin || 6500], Pa = (t) => new Date(t).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
  function Oo(t) {
    const e = Math.max(1, Math.round((Date.now() - t) / 1e3));
    if (e < 10) return "Just now";
    if (e < 60) return e + " seconds ago";
    const a = Math.round(e / 60);
    if (a < 60) return a + (a === 1 ? " minute ago" : " minutes ago");
    const o = Math.round(a / 60);
    if (o < 24) return o + (o === 1 ? " hour ago" : " hours ago");
    const i = Math.round(o / 24);
    return i + (i === 1 ? " day ago" : " days ago");
  }
  const fa = (t) => {
    var e;
    return Gt(t).current_position ?? (((e = M[t]) == null ? void 0 : e.state) === "closed" ? 0 : 100);
  }, Io = (t) => {
    var e;
    return Ie("pos", t, ((e = kt.get(t)) == null ? void 0 : e.pos) ?? fa(t));
  }, or = (t) => {
    var e;
    return Ie("tilt", t, ((e = kt.get(t)) == null ? void 0 : e.tilt) ?? Gt(t).current_tilt_position);
  };
  function Te(t) {
    var l;
    const e = M[t];
    if (!e) return "Not found";
    if (e.state === "unavailable") return "Unavailable";
    const a = e.attributes, o = t.split(".")[0];
    if (o === "light") {
      if (e.state !== "on") return "Off";
      const f = a.color_temp_kelvin;
      return (Ve(t) ? Ya(e) + "%" : "On") + (a.color_mode === "color_temp" && f ? " · " + Number(f).toLocaleString() + "k" : Po.includes(a.color_mode) ? " · Colour" : "");
    }
    if (o === "climate") return (e.state === "off" ? "Off" : Vt(a.hvac_action || e.state)) + " · " + Ae(a.current_temperature) + " °C now";
    if (o === "cover") {
      const f = fa(t), h = a.current_tilt_position;
      return e.state === "opening" || e.state === "closing" ? Vt(e.state) + " - " + f + "%" : (f <= 0 ? "Closed" : f >= 100 ? "Open" : "Partially open") + (h > 0 && h < 100 ? " · tilted" : "");
    }
    if (o === "humidifier") return e.state !== "on" ? "Off" : Vt(a.action || "on") + " · " + a.current_humidity + "% now";
    if (o === "vacuum") return Vt(e.state) + (e.state === "cleaning" && ((l = a.rooms) != null && l.length) ? " · " + a.rooms.join(", ") : "") + (a.battery_level != null ? " · " + a.battery_level + "%" : "");
    if (o === "media_player") return e.state === "playing" || e.state === "paused" ? (e.state === "paused" ? "Paused · " : "") + (a.media_title || "Playing") : Vt(e.state);
    if (o === "alarm_control_panel") return _p[e.state] || Vt(e.state);
    if (o === "lock" || o === "valve") return Vt(e.state);
    if (o === "switch") return e.state === "on" ? "On" : "Off";
    if (o === "plant") return e.state === "ok" ? "Healthy" : Vt(a.problem);
    if (o === "binary_sensor")
      return a.device_class === "battery" ? e.state === "on" ? "Low" : "Normal" : a.device_class === "problem" ? e.state === "on" ? "Problem" : "OK" : a.device_class === "moisture" ? e.state === "on" ? "Wet" : "Dry" : Fi.includes(a.device_class) ? e.state === "on" ? "Open" : "Closed" : e.state === "on" ? "Detected" : "Clear";
    if (a.rang) return "Rang at " + Pa(a.rang);
    const i = d();
    if (i != null && i.formatEntityState && !Va(t))
      try {
        return i.formatEntityState(e);
      } catch {
      }
    const c = Number(e.state);
    if (e.state !== "" && Number.isFinite(c)) {
      const f = Math.abs(c) >= 100 ? 0 : Math.abs(c) >= 10 ? 1 : 2, h = a.unit_of_measurement ? a.unit_of_measurement === "%" ? "%" : " " + a.unit_of_measurement : "";
      return c.toLocaleString(void 0, { maximumFractionDigits: f }) + h + (a.plant_low ? " · Low" : a.plant_high ? " · High" : "");
    }
    return Vt(e.state);
  }
  const Fo = (t) => t >= 1e3 ? Ae(t / 1e3, 2) + " kW" : Math.round(t).toLocaleString() + " W";
  function Ka(t) {
    var a, o;
    const e = d();
    t.querySelectorAll("[data-icon-for]").forEach((i) => {
      var f;
      const c = M[i.dataset.iconFor], l = i.dataset.iconName || "";
      if (customElements.get("ha-state-icon") && c && !l) {
        let h = i.firstElementChild;
        (!h || h.localName !== "ha-state-icon") && (i.textContent = "", h = document.createElement("ha-state-icon"), i.appendChild(h)), h.hass = e, h.stateObj = c;
      } else if (customElements.get("ha-icon")) {
        let h = i.firstElementChild;
        (!h || h.localName !== "ha-icon") && (i.textContent = "", h = document.createElement("ha-icon"), i.appendChild(h)), h.icon = l || ((f = c == null ? void 0 : c.attributes) == null ? void 0 : f.icon) || "mdi:circle-medium";
      } else i.textContent || (i.textContent = (i.dataset.letter || mt(i.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    }), (a = t.querySelectorAll) == null || a.call(t, ".tfIcon").forEach(Yr), (o = t.classList) != null && o.contains("tfIcon") && Yr(t), nr();
  }
  const Ur = /* @__PURE__ */ new Map();
  function Yr(t) {
    var c, l, f;
    const e = (((c = t.closest("[data-k]")) == null ? void 0 : c.dataset.k) || "") + "|" + (t.dataset.iconFor || ((l = t.querySelector("[data-icon-for]")) == null ? void 0 : l.dataset.iconFor) || t.getAttribute("aria-label") || ""), a = getComputedStyle(t), o = { backgroundColor: a.backgroundColor, color: a.color }, i = Ur.get(e);
    Ur.set(e, o), !(!i || i.backgroundColor === o.backgroundColor && i.color === o.color || (f = window.matchMedia) != null && f.call(window, "(prefers-reduced-motion: reduce)").matches) && t.animate([i, o], { duration: Me.warp.cdur, delay: Me.warp.cdelay, easing: Se[Me.warp.ease], fill: "backwards" });
  }
  const os = "[data-icon-for]>:is(ha-state-icon,ha-icon),.tfIcon>svg", ns = (t) => {
    const e = [t];
    for (; e.length; ) {
      const a = e.shift();
      if (a.localName === "svg") return a;
      a.shadowRoot && e.push(...a.shadowRoot.children), e.push(...a.children);
    }
    return null;
  };
  function rs(t) {
    var S, C, R;
    const e = t.localName === "svg" ? t : ns(t), a = e ? [...e.querySelectorAll("path,rect,circle,ellipse,polygon,polyline,line")] : [];
    if (!a.length) return !e;
    const o = (S = t.closest(".tfIcon")) == null ? void 0 : S.offsetWidth;
    if (o === void 0) return !0;
    if (!o) return !1;
    const i = o + "|" + a.map((V) => V.getAttribute("d") || V.localName).join("|");
    if (t.dataset.fitted === i) return !0;
    let c = 1 / 0, l = 1 / 0, f = -1 / 0, h = -1 / 0;
    for (const V of a) {
      const L = V.getBBox(), G = getComputedStyle(V), E = G.stroke !== "none" ? (parseFloat(G.strokeWidth) || 0) / 2 : 0;
      !L.width && !L.height || (c = Math.min(c, L.x - E), l = Math.min(l, L.y - E), f = Math.max(f, L.x + L.width + E), h = Math.max(h, L.y + L.height + E));
    }
    if (!(f > c)) return !1;
    const x = (R = (C = e.viewBox) == null ? void 0 : C.baseVal) != null && R.width ? e.viewBox.baseVal : { x: 0, y: 0, width: 24, height: 24 }, k = o > 40 ? o * (26 / 40) : o - 14, v = k * x.width / Math.max(f - c, h - l), _ = v / x.width;
    return t.localName === "svg" ? (t.style.width = v + "px", t.style.height = v + "px") : t.style.setProperty("--mdc-icon-size", v + "px"), e.style.translate = ((x.x + x.width / 2 - (c + f) / 2) * _).toFixed(2) + "px " + ((x.y + x.height / 2 - (l + h) / 2) * _).toFixed(2) + "px", t.dataset.fitted = i, !0;
  }
  let Ln = 0;
  function Zr(t = 0) {
    clearTimeout(Ln), [...n.querySelectorAll(os)].filter((a) => !rs(a)).length && t < 5 && (Ln = setTimeout(() => Zr(t + 1), 300));
  }
  function nr() {
    clearTimeout(Ln), Ln = setTimeout(() => Zr(), 60);
  }
  const nn = (t) => {
    var e, a, o;
    return t.startsWith("light.") && M[t] && !Gt(t).icon && !((o = (a = (e = d()) == null ? void 0 : e.entities) == null ? void 0 : a[t]) != null && o.icon) ? "mdi:lightbulb" : "";
  }, ue = (t, e, a) => (e = e || nn(t), ' data-icon-for="' + P(t) + '"' + (e ? ' data-icon-name="' + P(e) + '"' : "") + (a ? ' data-letter="' + P(a) + '"' : "")), ua = (t) => t.endsWith("_solar_power") ? "mdi:solar-power-variant" : Gt(t).rang ? "mdi:doorbell" : "", Dt = (t, e, a, o) => P([t, e, a, o ? JSON.stringify(o) : ""].join("|")), qo = (t) => P(JSON.stringify(t));
  function Wo(t) {
    const e = P(mt(t) + ", " + Te(t));
    return '<div class="activityRow tap" role="button" tabindex="0" data-more="' + P(t) + '" aria-label="' + e + '. More info"><div class="tfIcon" aria-hidden="true"' + ue(t, ua(t)) + '></div><div><div class="activityRowName">' + P(mt(t)) + '</div><div class="activityRowMeta">' + P(Te(t)) + "</div></div></div>";
  }
  const rr = (t, e, a) => '<div class="activityRow" aria-label="' + P(t + ", " + e) + '"><div class="tfIcon" aria-hidden="true"' + ue("", a, t) + '></div><div><div class="activityRowName">' + P(t) + '</div><div class="activityRowMeta">' + P(e) + "</div></div></div>";
  function co(t, e, a, o, i = "", c = null, l = "") {
    return '<section class="card tfCard' + (l ? " " + l : "") + '" data-tf data-k="' + P(t) + '" style="order:' + e + '" aria-label="' + P(a) + '"><div class="activityHeader">' + (c ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + P(c) + '" aria-label="' + P(a + (M[c] ? ", " + Te(c) : "") + ". More info") + '">' + P(a) + "</button>" : '<div class="activityTitle">' + P(a) + "</div>") + '</div><div class="activityRows">' + o.join("") + "</div>" + i + "</section>";
  }
  function Kr(t, e) {
    const a = "readings:" + t.id, o = t.readings.map((i) => Wo(i));
    return t.power != null && o.push(rr("Power now", Fo(t.power), "mdi:flash")), co(a, e, "Readings", o);
  }
  function jo(t, e) {
    var f;
    const a = "energy:" + t.id, [o, i] = [t.solar.find((h) => h.endsWith("_power")), t.solar.find((h) => h.endsWith("_today"))], c = [o, i].filter(Boolean).map((h) => Wo(h)), l = Number(((f = M[o]) == null ? void 0 : f.state) || 0) * 1e3;
    return zt.grid && (c.push(Wo(zt.grid)), c.push(rr("House use", Fo(l + Number(M[zt.grid].state)), "mdi:home-lightning-bolt"))), co(a, e, "Energy", c, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const Xr = (t, e) => co("plant:" + t.id, e, mt(t.id), t.readings.map((a) => Wo(a)), "", t.id);
  function rn(t, e, a, o, i, c, l = null) {
    const f = a == null ? null : Math.max(0, Math.min(1, a)), h = f == null ? 0 : Math.round(f * 100);
    return '<div class="tfBar ' + t + '" role="slider" tabindex="0" aria-label="' + P(o) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + h + '"' + (i ? ' aria-valuetext="' + P(i) + '"' : "") + ' data-drag="' + P(t + "|" + e) + '">' + (l != null ? '<span class="was" aria-hidden="true" style="left:' + l + '%"></span>' : "") + (c ? f == null ? "" : '<b style="left:' + h + '%"></b>' : '<i style="width:' + h + '%"></i>') + "</div>";
  }
  const sn = "homecore-house-last-bright", na = (() => {
    try {
      return JSON.parse(oo.get(sn)) || {};
    } catch {
      return {};
    }
  })();
  let ln = 0;
  const Xa = (t, e) => {
    !e || na[t] === e || (na[t] = e, clearTimeout(ln), ln = setTimeout(() => oo.set(sn, JSON.stringify(na)), 500));
  }, ha = (t, e, a, o) => '<div class="tfStep" role="group" aria-label="' + P(t) + '"><button type="button" data-act="' + a + '" aria-label="Lower ' + P(t.toLowerCase()) + '">' + ip.down + "</button><output>" + P(e) + '</output><button type="button" data-act="' + o + '" aria-label="Raise ' + P(t.toLowerCase()) + '">' + ip.up + "</button></div>", ra = (t, e, a) => '<div class="' + t + '" role="group" aria-label="' + P(e) + '">' + a.filter(Boolean).map((o) => '<button type="button" data-act="' + o.act + '"' + (o.pressed != null ? ' aria-pressed="' + o.pressed + '"' : "") + (o.disabled ? " disabled" : "") + (o.aria ? ' aria-label="' + P(o.aria) + '"' : "") + ">" + (o.html || P(o.label)) + "</button>").join("") + "</div>", $r = (t, e) => "width:" + Math.round(Math.max(0, Math.min(1, (t - e * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * e / 3).toFixed(2), Jr = (t) => "left:calc(4px + " + t / 100 + " * (100% - 8px))", De = (t, e) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + P(mt(t)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(e) + '" aria-valuetext="' + Math.round(e) + '% open" data-blocks="' + P(t) + '">' + [0, 1, 2, 3].map((a) => '<span><i style="' + $r(e, a) + '"></i><b' + (e >= (a + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (a + 1) * 25 + "<small>%</small></b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + Jr(e) + '">' + Math.round(e) + "%</output></div>";
  function cn(t, e) {
    t.querySelectorAll(":scope>span").forEach((o, i) => {
      o.firstElementChild.setAttribute("style", $r(e, i)), o.lastElementChild.classList.toggle("lit", e >= (i + 1) * 25 - 12);
    });
    const a = t.querySelector(".tfTip");
    a.setAttribute("style", Jr(e)), a.textContent = Math.round(e) + "%", t.setAttribute("aria-valuenow", String(Math.round(e))), t.setAttribute("aria-valuetext", Math.round(e) + "% open");
  }
  const Qr = (t, e) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + P(mt(t)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(e) + '" aria-valuetext="' + Math.round(e) + '% open" data-drag="tilt|' + P(t) + '"><i style="width:calc((100% - 8px) * ' + e / 100 + ')"></i><span' + (e > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (e > 92 ? ' class="lit"' : "") + ">Open</span></div>", ir = (t, e, a) => '<div class="tfSeg tfCoverBtns" role="group" aria-label="' + P(mt(t)) + '">' + [
    le(t, pp) && ["open", "Open", "open_cover", e >= 100 && !a],
    le(t, up) && ["stop", "Stop", "stop_cover", !1],
    le(t, fp) && ["close", "Close", "close_cover", e <= 0 && !a]
  ].filter(Boolean).map(([o, i, c, l]) => '<button type="button" data-act="' + Dt("cover", c, t) + '" aria-label="' + i + '"' + (l ? " disabled" : "") + ">" + C0[o] + "</button>").join("") + "</div>", $a = (t, e) => '<button class="tfIcon' + (e.art ? " art" : "") + '" type="button" data-act="' + e.button.act + '" aria-label="' + P(e.button.label) + '"' + (e.art ? ' style="background-image:url(&quot;' + P(e.art) + '&quot;)"' : ue(t, e.icon)) + "></button>", ti = (t) => '<button class="tfName" type="button" data-more="' + P(t) + '" aria-label="' + P(mt(t) + ", " + Te(t) + ". More info") + '"><span class="activityRowName">' + P(mt(t)) + '</span><span class="activityRowMeta">' + P(Te(t)) + "</span></button>";
  function sr(t, e = !1, a = null) {
    const o = ia(t), i = t.startsWith("light.") && dn(t) && !(a && mr(t) < 3), c = a || (e && t.startsWith("light.") ? ["bright"] : null), l = i ? ['<div class="tfDacPad" data-dac="' + (e ? "more:" : a ? "dash:" : "tile:") + P(t) + '"></div>'] : o.sections.map((f, h) => f && (!c || c.includes((o.parts || [])[h])) ? f : "").filter(Boolean);
    return '<div class="tfAction' + (i ? " tfDac" : "") + (o.on ? " on" : "") + (!i && !l.length ? " tfHeadOnly" : "") + '" data-k="' + P(t) + '"' + (o.tone ? ' data-tone="' + o.tone + '"' : "") + Ho(t) + '><div class="tfActionHead">' + $a(t, o) + ti(t) + "</div>" + l.join("") + "</div>";
  }
  const ma = "dual-controller-v3", ei = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.5/dist/dual-axis-controller-v4.js";
  let Vo = null;
  async function Dn() {
    if (Vo || customElements.get(ma)) return;
    Vo = "loading";
    const t = await Promise.resolve().then(() => D({ type: "lovelace/resources" })).catch(() => null), e = Array.isArray(t) && t.some((o) => /dual-axis-controller/i.test(o.url || ""));
    if (await Promise.race([customElements.whenDefined(ma), new Promise((o) => setTimeout(o, e ? 8e3 : 0))]), customElements.get(ma)) return;
    const a = Object.assign(document.createElement("script"), { src: ei });
    a.onerror = () => {
      Vo = "failed", H();
    }, document.head.appendChild(a);
  }
  const ze = /* @__PURE__ */ new Map(), va = (t) => (Ut.lightStyles[t] || Ut.lights) === "dac", Bn = () => Ut.lights === "dac" || Object.values(Ut.lightStyles).includes("dac");
  function dn(t) {
    return va(t) && !!customElements.get(ma);
  }
  const ai = (t) => Ut.lightPads[t] || Ut.dacPad, pn = () => {
    const t = d();
    return t && {
      ...t,
      themes: { ...t.themes || {}, darkMode: !g.classList.contains("light") },
      callService: (e, a, o, ...i) => t.callService(e, ...cd(e, a, o), ...i)
    };
  }, oi = "ha-card,.hc.hcTile{padding:0!important;border:0!important;border-radius:0!important;background:none!important;box-shadow:none!important}.hcTileHead{display:none!important}.hc--dark{--hc-text:var(--color-text-primary,#f1f1f1)}.halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,198px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}.hc.hcTile{max-width:var(--tf-dac-max,280px)!important}", is = (t) => {
    !t.shadowRoot || t.shadowRoot.querySelector("style[data-tf]") || (t.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: oi })).dataset.tf = "");
  }, ya = /* @__PURE__ */ new Map(), Ha = new ResizeObserver((t) => t.forEach(({ target: e }) => {
    const a = e.parentElement;
    !a || !e.offsetHeight || (a.style.removeProperty("min-height"), ya.set(a.dataset.dac, a.offsetHeight));
  }));
  function po(t) {
    t.querySelectorAll("[data-dac]").forEach((e) => {
      const a = e.dataset.dac;
      let o = ze.get(a);
      if (!o) {
        const i = a.slice(a.indexOf(":") + 1);
        o = document.createElement(ma), o.setConfig({ type: "custom:" + ma, entity: i, pad: ai(i), tap_action: { action: "none" } }), ze.set(a, o);
      }
      o.hass = pn(), o.parentNode !== e && e.replaceChildren(o), !o.offsetHeight && ya.has(a) && (e.style.minHeight = ya.get(a) + "px"), Ha.observe(o), is(o);
    });
  }
  function ni() {
    const t = pn();
    ze.forEach((e, a) => {
      e.isConnected ? e.hass = t : ze.delete(a);
    });
  }
  customElements.whenDefined(ma).then(() => {
    w && (N != null && N.querySelector("[data-tf]")) && zc(Wa);
  });
  const Ie = (t, e, a) => it.has(t + "|" + e) ? it.get(t + "|" + e) : a;
  function ia(t) {
    var c, l;
    const e = M[t], a = e.attributes, o = t.split(".")[0], i = (f, h) => ({ act: Dt(f, "toggle", t), label: h });
    if (o === "light") {
      const f = e.state === "on", h = Za(t), [x, k] = No(t), v = Ie("bright", t, Ya(e));
      f && Xa(t, Ya(e));
      const _ = Ie("ct", t, f && a.color_mode === "color_temp" ? a.color_temp_kelvin : null), S = Ie("hue", t, f && Po.includes(a.color_mode) && a.hs_color ? a.hs_color[0] : null);
      return { on: f, button: i("light", "Turn " + mt(t) + (f ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        Ve(t) && rn("bright", t, v / 100, mt(t) + " brightness", v + "%", !1, f ? null : na[t] ?? null),
        h.includes("color_temp") && rn("ct", t, _ == null ? null : (_ - x) / (k - x), mt(t) + " warm to cool", _ == null ? "" : Math.round(_) + " kelvin", !0),
        h.some((C) => Po.includes(C)) && rn("hue", t, S == null ? null : S / 360, mt(t) + " colour", "", !0)
      ] };
    }
    if (o === "climate") {
      const f = a.target_temp_step || 0.5, h = Number(a.temperature);
      return { on: e.state !== "off", tone: e.state === "cool" || a.hvac_action === "cooling" ? "cool" : "heat", button: i("climate", "Turn " + mt(t) + (e.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(h) && ha("Target temperature", Ae(h) + " °C", Dt("climate", "set_temperature", t, { temperature: h - f }), Dt("climate", "set_temperature", t, { temperature: h + f })),
        ra("tfSeg", "Mode", (a.hvac_modes || []).map((x) => ({ label: Vt(x), act: Dt("climate", "set_hvac_mode", t, { hvac_mode: x }), pressed: e.state === x })))
      ] };
    }
    if (o === "cover") {
      const f = e.state === "opening" || e.state === "closing", h = e.state === "closed", x = Io(t), k = or(t);
      return { on: !h, tone: "blue", icon: hp[Pl(e)][h ? 1 : 0], button: i("cover", (h ? "Open " : "Close ") + mt(t)), parts: ["blocks", "tilt", "buttons"], sections: [
        le(t, Hl) && De(t, x),
        k != null && Qr(t, k),
        ir(t, x, f)
      ] };
    }
    if (o === "humidifier") {
      const f = Number(a.humidity);
      return { on: e.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: i("humidifier", "Turn " + mt(t) + (e.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(f) && ha("Target humidity", f + "%", Dt("humidifier", "set_humidity", t, { humidity: f - 1 }), Dt("humidifier", "set_humidity", t, { humidity: f + 1 })),
        ((c = a.available_modes) == null ? void 0 : c.length) && ra("tfSeg", "Mode", a.available_modes.map((h) => ({ label: Vt(h), act: Dt("humidifier", "set_mode", t, { mode: h }), pressed: a.mode === h })))
      ] };
    }
    if (o === "media_player") {
      const f = e.state === "playing", h = e.state === "off" || e.state === "standby", x = Ie("vol", t, a.volume_level), k = h ? { act: Dt("media_player", le(t, S0) ? "turn_on" : "toggle", t), label: "Turn " + mt(t) + " on" } : e.state === "playing" || e.state === "paused" ? { act: Dt("media_player", "media_play_pause", t), label: (f ? "Pause " : "Play ") + mt(t) } : { act: Dt("media_player", le(t, _0) ? "turn_off" : "toggle", t), label: "Turn " + mt(t) + " off" };
      return { on: !h, tone: "blue", art: !h && a.entity_picture ? a.entity_picture : null, button: k, parts: ["playback", "volume"], sections: h ? [] : [
        (le(t, lp) || le(t, cp) || le(t, sp) || le(t, dp)) && ra("tfSeg", "Playback", [
          { html: Ni.prev, aria: "Previous", act: Dt("media_player", "media_previous_track", t), disabled: !le(t, lp) },
          { html: f ? Ni.pause : Ni.play, aria: f ? "Pause" : "Play", act: Dt("media_player", "media_play_pause", t), disabled: !(le(t, sp) || le(t, dp)) },
          { html: Ni.next, aria: "Next", act: Dt("media_player", "media_next_track", t), disabled: !le(t, cp) }
        ]),
        le(t, M0) && x != null && rn("vol", t, x, mt(t) + " volume", Math.round(x * 100) + "%")
      ] };
    }
    if (o === "vacuum") {
      const f = e.state === "cleaning", h = a.rooms || [], x = (v) => h.includes(v) ? h.filter((_) => _ !== v) : h.concat(v), k = Dt("vacuum", f ? "pause" : "start", t, Va(t) ? { rooms: h } : null);
      return { on: f || e.state === "returning", tone: "blue", button: { act: k, label: (f ? "Pause " : "Start ") + mt(t) }, parts: ["controls", "rooms"], sections: [
        ra("tfSeg", mt(t), [
          { label: f ? "Pause" : "Start", act: k },
          { label: "Dock", act: Dt("vacuum", "return_to_base", t), disabled: e.state === "docked" },
          { label: "Locate", act: Dt("vacuum", "locate", t) }
        ]),
        Va(t) && ra("tfChips", "Rooms to clean", zt.rooms.filter((v) => v.id !== "balcony").map((v) => ({ label: v.name, act: Dt("vacuum", "set_rooms", t, { rooms: x(v.name) }), pressed: h.includes(v.name) })))
      ] };
    }
    if (o === "lock") {
      const f = e.state === "locked";
      return { on: !f, tone: "heat", button: { act: Dt("lock", f ? "unlock" : "lock", t), label: (f ? "Unlock " : "Lock ") + mt(t) }, parts: ["controls"], sections: [
        ra("tfSeg", mt(t), [
          { label: "Lock", act: Dt("lock", "lock", t), pressed: f },
          { label: "Unlock", act: Dt("lock", "unlock", t), pressed: e.state === "unlocked" },
          le(t, Mp) && { label: "Open", act: Dt("lock", "open", t), pressed: e.state === "open" }
        ])
      ] };
    }
    if (o === "alarm_control_panel") {
      const f = e.state === "disarmed";
      return { on: !f, tone: e.state === "triggered" ? "alarm" : "blue", button: { act: Dt("alarm_control_panel", f ? "alarm_arm_away" : "alarm_disarm", t), label: f ? "Arm " + mt(t) + ", away" : "Disarm " + mt(t) }, parts: ["controls"], sections: [
        ra("tfSeg", mt(t), Sp.filter(([, , , h]) => !h || le(t, h)).map(([h, x, k]) => ({ label: x, act: Dt("alarm_control_panel", k, t), pressed: e.state === h })))
      ] };
    }
    if (o === "valve") {
      const f = e.state === "open";
      return { on: f, tone: "blue", icon: "mdi:sprinkler-variant", button: i("valve", (f ? "Close " : "Open ") + mt(t)), parts: ["controls"], sections: [
        ra("tfSeg", mt(t), [
          { label: "Open", act: Dt("valve", "open_valve", t), pressed: f },
          { label: "Close", act: Dt("valve", "close_valve", t), pressed: !f }
        ])
      ] };
    }
    if (o === "water_heater") {
      const f = Number(a.temperature), h = a.target_temp_step || 1, x = e.state !== "off";
      return { on: x, tone: "heat", icon: "mdi:water-boiler", button: { act: Dt("water_heater", x ? "turn_off" : "turn_on", t), label: "Turn " + mt(t) + (x ? " off" : " on") }, parts: ["step", "modes"], sections: [
        Number.isFinite(f) && ha("Target temperature", f + " °C", Dt("water_heater", "set_temperature", t, { temperature: f - h }), Dt("water_heater", "set_temperature", t, { temperature: f + h })),
        ((l = a.operation_list) == null ? void 0 : l.length) && ra("tfSeg", "Mode", a.operation_list.map((k) => ({ label: Vt(k), act: Dt("water_heater", "set_operation_mode", t, { operation_mode: k }), pressed: (a.operation_mode || e.state) === k })))
      ] };
    }
    if (Er.includes(o)) {
      const f = e.state === "on";
      return { on: f, button: i(o, "Turn " + mt(t) + (f ? " off" : " on")), parts: [], sections: [] };
    }
    return { on: !1, button: { act: "", label: mt(t) }, sections: [] };
  }
  const xa = (t) => (Number.isInteger(Number(t)) ? String(Number(t)) : Ae(t)) + "°";
  function zo(t) {
    var V;
    const e = (L) => t.readings.find((G) => Gt(G).device_class === L), a = e("temperature"), o = e("humidity"), i = (L) => {
      var G;
      return Number((G = M[L]) == null ? void 0 : G.state);
    }, c = (L) => t.actions.filter((G) => L.test(G)), l = t.lights.filter((L) => {
      var G;
      return ((G = M[L]) == null ? void 0 : G.state) === "on";
    }), f = c(/^cover\./), h = f.filter((L) => {
      var G;
      return ((G = M[L]) == null ? void 0 : G.state) !== "closed";
    }), x = [...new Set(f.map((L) => Pl(M[L])))], k = c(/^climate\./)[0], v = c(/^humidifier\./)[0], _ = c(/^media_player\./), S = _.find((L) => {
      var G;
      return ((G = M[L]) == null ? void 0 : G.state) === "playing";
    }) || _.find((L) => {
      var G;
      return ((G = M[L]) == null ? void 0 : G.state) === "paused";
    }), C = t.plugs.filter((L) => {
      var G;
      return ((G = M[L]) == null ? void 0 : G.state) === "on";
    }), R = [];
    if (a && Number.isFinite(i(a)) && R.push({ key: "temp", id: a, kind: "reading", icon: no(a), label: "Temperature", value: Ae(i(a)) + "°" }), o && Number.isFinite(i(o)) && R.push({ key: "hum", id: o, kind: "reading", icon: no(o), label: "Humidity", value: Math.round(i(o)) + "%" }), t.lights.length && R.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: no("", "mdi:lightbulb"),
      label: "Lights",
      value: l.length ? l.length + " of " + t.lights.length + " on" : "All off",
      short: l.length ? l.length + " on" : "Off",
      on: l.length > 0,
      light: l.length ? as(l[0]) : "",
      acts: t.lights.map((L) => ["light", l.length ? "turn_off" : "turn_on", L]),
      aria: (l.length ? "Turn off" : "Turn on") + " the lights in " + t.name
    }), f.length) {
      const L = x.length === 1 ? A0[x[0]] : "covers", G = Math.round(f.reduce((E, wt) => E + fa(wt), 0) / f.length);
      R.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        light: h.length ? lo([146, 107, 199]) : "",
        icon: no("", ((V = hp[x[0]]) == null ? void 0 : V[h.length ? 0 : 1]) || "mdi:window-shutter"),
        label: Vt(L),
        value: G <= 0 ? "Closed" : G >= 100 ? "Open" : G + "% open",
        short: G <= 0 ? "Closed" : G + "%",
        on: h.length > 0,
        acts: f.map((E) => ["cover", h.length ? "close_cover" : "open_cover", E]),
        aria: (h.length ? "Close the " : "Open the ") + L + " in " + t.name
      });
    }
    if (k) {
      const L = Gt(k), G = M[k].state === "off";
      R.push({
        key: "climate",
        kind: "control",
        tone: L.hvac_action === "cooling" ? "cool" : "heat",
        light: on(k) ? lo(on(k)) : "",
        icon: no(k),
        label: mt(k),
        value: G ? "Off" : Vt(L.hvac_action || M[k].state) + " · " + xa(L.temperature),
        short: G ? "Off" : xa(L.temperature),
        on: !G,
        acts: [["climate", "toggle", k]],
        aria: "Turn " + mt(k) + (G ? " on" : " off")
      });
    }
    if (v) {
      const L = M[v].state === "on";
      R.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        light: L ? lo([33, 150, 243]) : "",
        icon: no("", "mdi:air-humidifier"),
        label: mt(v),
        value: L ? "On · " + Gt(v).humidity + "%" : "Off",
        short: L ? Gt(v).humidity + "%" : "Off",
        on: L,
        acts: [["humidifier", "toggle", v]],
        aria: "Turn " + mt(v) + (L ? " off" : " on")
      });
    }
    if (_.length) {
      const L = S || _[0], G = M[L], E = G.state === "playing";
      R.push({
        key: "media",
        kind: "control",
        tone: "blue",
        light: on(L) ? lo(on(L)) : "",
        icon: no(L),
        label: mt(L),
        value: Te(L),
        short: E ? "Playing" : G.state === "paused" ? "Paused" : Vt(G.state),
        on: E,
        acts: [["media_player", G.state === "playing" || G.state === "paused" ? "media_play_pause" : "toggle", L]],
        aria: (E ? "Pause " : "Play ") + mt(L)
      });
    }
    return t.plugs.length && R.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      light: C.length ? lo([255, 193, 7]) : "",
      icon: no("", "mdi:power-plug"),
      label: "Plugs",
      value: C.length ? C.length + " of " + t.plugs.length + " on" : "All off",
      short: C.length ? C.length + " on" : "Off",
      on: C.length > 0,
      acts: t.plugs.map((L) => ["switch", C.length ? "turn_off" : "turn_on", L]),
      aria: (C.length ? "Turn off" : "Turn on") + " the plugs in " + t.name
    }), t.alerts.forEach((L) => R.push(Gt(L).device_class === "moisture" ? { key: "alert:" + L, kind: "alert", icon: no(L), label: "Water leak" } : { key: "note:" + L, kind: "note", icon: no(L), label: mt(L) + " " + Te(L).toLowerCase() })), R;
  }
  const En = (t, e) => {
    const a = (o) => t.actions.filter((i) => o.test(i));
    return {
      lights: t.lights,
      covers: a(/^cover\./),
      climate: a(/^climate\./).slice(0, 1),
      humidifier: a(/^humidifier\./).slice(0, 1),
      plugs: t.plugs,
      media: (() => {
        const o = a(/^media_player\./);
        return [o.find((i) => {
          var c;
          return ((c = M[i]) == null ? void 0 : c.state) === "playing";
        }) || o.find((i) => {
          var c;
          return ((c = M[i]) == null ? void 0 : c.state) === "paused";
        }) || o[0]].filter(Boolean);
      })()
    }[e] || [];
  }, ss = (t, e, a) => '<button class="' + e + (t.on ? " on" : "") + '" type="button" data-tone="' + t.tone + '" data-acts="' + qo(t.acts) + '" aria-label="' + P(t.aria) + '" aria-pressed="' + t.on + '">' + a + "</button>", ls = (t) => '<button class="tfAName" type="button" data-go="' + P(t.id) + '" aria-label="Open ' + P(t.name) + '">' + P(t.name) + "</button>";
  function fo(t, e, a = !1) {
    const o = e.find((f) => f.key === "lights"), i = !!(o != null && o.on), c = "", l = '<span class="tfAreaGlyph"' + ue("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span>";
    return a || !o ? '<span class="tfIcon tfAreaIcon' + (i ? " on" : "") + '"' + c + ' aria-hidden="true">' + l + "</span>" : '<button class="tfIcon tfAreaIcon' + (i ? " on" : "") + '" type="button"' + c + ' data-acts="' + qo(o.acts) + '" aria-label="' + P(o.aria) + '" aria-pressed="' + i + '">' + l + "</button>";
  }
  const ri = (t) => t.filter((e) => e.kind === "alert" || e.kind === "note").map((e) => '<span class="sourceTag">' + P(e.label) + "</span>").join(" "), Be = (t) => t.readings.find((e) => Gt(e).device_class === "temperature") || [...t.readings, ...t.solar, ...t.openings, ...t.actions, ...t.plugs].find((e) => M[e]) || null, lr = (t, e) => {
    const a = mt(e);
    return a.toLowerCase().startsWith(t.name.toLowerCase() + " ") ? Vt(a.slice(t.name.length + 1)) : a;
  };
  function cr(t) {
    const e = M[t], a = Gt(t), o = t.split(".")[0], i = Number(e.state);
    if (e.state === "unavailable") return { text: "Unavailable" };
    if (o === "sensor" && Number.isFinite(i)) {
      if (a.device_class === "temperature") return { text: xa(i) };
      const c = a.unit_of_measurement || "";
      return c === "%" ? { text: Math.round(i) + "%" } : { text: Ae(i, Number.isInteger(i) ? 0 : 1), unit: c };
    }
    if (o === "climate" && (a.current_temperature ?? a.temperature) != null) return { text: xa(a.current_temperature ?? a.temperature) };
    if (o === "light") return { text: e.state !== "on" ? "Off" : Ve(t) ? Ya(e) + "%" : "On" };
    if (o === "cover") {
      const c = fa(t);
      return { text: c <= 0 ? "Closed" : c >= 100 ? "Open" : c + "%" };
    }
    return o === "humidifier" ? { text: e.state === "on" ? a.humidity + "%" : "Off" } : o === "media_player" ? { text: e.state === "playing" ? "Playing" : e.state === "paused" ? "Paused" : Vt(e.state) } : { text: Te(t) };
  }
  const dr = (t, e, a) => {
    const o = a.find((f) => f.key === "temp"), i = a.find((f) => f.key === "hum"), c = Gt(e), l = M[e].state === "off";
    return e.startsWith("climate.") ? [lr(t, e), l ? "Off" : Vt(c.hvac_action || M[e].state) + (c.temperature != null ? " · " + xa(c.temperature) : ""), i && i.value + " humidity"].filter(Boolean).join(" · ") : [!(o && o.id === e) && lr(t, e), o && o.id !== e && o.value, i && i.id !== e && i.value + " humidity"].filter(Boolean).join(" · ");
  };
  function ii(t, e, a) {
    const o = a && cr(a), i = a ? dr(t, a, e) : "", c = (h) => {
      const x = En(t, h.key);
      return x.length === 1 ? x[0] : "group:" + t.id + ":" + h.key;
    }, l = e.filter((h) => h.kind === "control").slice(0, 4).map((h) => '<div class="tfATile' + (h.on ? " on" : "") + '" data-tone="' + h.tone + '"' + (h.light ? ' data-light style="' + h.light + '"' : "") + ">" + ss(h, "tfIcon", h.icon) + '<button class="tfName" type="button" data-more="' + P(c(h)) + '" aria-label="' + P(t.name + " " + h.label.toLowerCase() + ", " + h.value + ". Open") + '"><span class="activityRowName">' + P(h.label) + '</span><span class="activityRowMeta">' + P(h.value) + "</span></button></div>"), f = ri(e);
    return '<div class="hcAreaPanelTop">' + fo(t, e) + '<div class="tfATitle">' + ls(t) + "</div>" + (f ? '<div class="tfATags">' + f + "</div>" : "") + "</div>" + (a ? '<button class="tfABig" type="button" data-more="' + P(a) + '" aria-label="' + P(mt(a) + ", " + Te(a) + ". More info") + '"><span class="tfABigMain' + (o.text.length > 7 ? " long" : "") + '">' + P(o.text) + (o.unit ? '<span class="tfABigUnit">' + P(o.unit) + "</span>" : "") + "</span>" + (i ? '<span class="tfABigSub">' + P(i) + "</span>" : "") + "</button>" : "") + (l.length ? '<div class="tfATiles">' + l.join("") + "</div>" : "");
  }
  function s(t) {
    const e = t.id === W, a = zo(t), o = Be(t), i = o && cr(o), c = [...a.filter((l) => l.kind === "control"), ...a.filter((l) => l.kind !== "control" && l.kind !== "reading")].slice(0, 4);
    return '<article class="hcAreaPanel tfAreaPanel' + (e ? " active" : "") + '" data-area="' + P(t.id) + '" tabindex="0" aria-expanded="' + e + '" aria-label="' + P(t.name) + '"><div class="panelExpanded"' + (e ? "" : " inert") + ">" + ii(t, a, o) + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop">' + fo(t, a, !0) + '<span class="tfACName">' + P(t.name) + '</span></div><span class="tfACMain">' + (i ? P(i.text + (i.unit ? " " + i.unit : "")) : "") + '</span><span class="tfACTiles" aria-hidden="true">' + c.map((l) => '<span class="tfACTile"><span class="tfIcon' + (l.kind === "alert" ? " alert" : "") + '"' + (l.on && l.light ? ' data-light style="' + l.light + '"' : "") + ">" + l.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let u = [];
  const m = (t) => {
    const e = gt.areaOrder || [], a = (o) => {
      const i = e.indexOf(o.id);
      return i < 0 ? e.length + t.indexOf(o) : i;
    };
    return [...t].sort((o, i) => a(o) - a(i));
  }, b = () => {
    var e;
    const t = new Set(((e = gt.dash) == null ? void 0 : e.areasOff) || []);
    return m(u).filter((a) => !t.has(a.id));
  }, T = (t) => {
    var a;
    const e = b();
    return e.some((o) => o.id === W) || (W = ((a = e[0]) == null ? void 0 : a.id) || null), '<div class="tfAreas" data-tf data-k="areas" style="order:' + t + '"><section class="hcAreaGallery tfAreaGallery" aria-label="Areas">' + e.map(s).join("") + "</section></div>";
  }, O = (t) => t.startsWith("room:"), j = (t) => u.find((e) => "room:" + e.id === t);
  function Z(t, e) {
    const a = zo(t), o = Be(t), i = o && cr(o), c = o ? dr(t, o, a) : "", l = i ? i.text + (i.unit ? " " + i.unit : "") : "", f = (_) => {
      const S = En(t, _.key);
      return S.length === 1 ? S[0] : "group:" + t.id + ":" + _.key;
    }, h = a.filter((_) => _.kind === "control").slice(0, 4), x = (_) => _.on && _.light ? ' data-light style="' + _.light + '"' : "", k = h.map((_) => '<button class="tfIcon' + (_.on ? " on" : "") + '" type="button" data-tone="' + _.tone + '"' + x(_) + ' data-more="' + P(f(_)) + '" aria-label="' + P(_.label + ", " + _.value + ". Open its controls") + '">' + _.icon + "</button>"), v = h.map((_) => '<button class="tfRoomDev" type="button" data-more="' + P(f(_)) + '" aria-label="' + P(_.label + ", " + _.value + ". Open its controls") + '"><span class="tfIcon' + (_.on ? " on" : "") + '" data-tone="' + _.tone + '"' + x(_) + ">" + _.icon + '</span><span class="tfRoomDevName"><span class="activityRowName">' + P(_.label) + '</span><span class="activityRowMeta">' + P(_.value) + "</span></span></button>");
    return '<div class="tfAction tfRoomTile" data-k="' + P(e) + '" data-go="' + P(t.id) + '"><div class="tfActionHead"><span class="tfIcon tfRoomIcon" aria-hidden="true"><span class="tfAreaGlyph"' + ue("area:" + t.id, t.icon || "mdi:texture-box", t.name) + '></span></span><button class="tfName" type="button" data-go="' + P(t.id) + '" aria-label="Open ' + P(t.name) + '"><span class="activityRowName">' + P(t.name) + "</span>" + (l || c ? '<span class="activityRowMeta">' + (l ? '<span class="tfRoomInline">' + P(l) + (c ? " · " : "") + "</span>" : "") + P(c) + "</span>" : "") + "</button></div>" + (l ? '<div class="tfRoomReading" aria-hidden="true"><span class="tfRoomBig">' + P(l) + "</span>" + (c ? '<span class="tfRoomSub">' + P(c) + "</span>" : "") + "</div>" : "") + (k.length ? '<div class="tfRoomDevices">' + k.join("") + '</div><div class="tfRoomHeads">' + v.join("") + "</div>" : "") + "</div>";
  }
  const F = () => [
    { key: "home", name: "Home", ids: zt.homeVacuums },
    ...zt.rooms.map((t) => ({ key: "room:" + t.id, name: t.name, room: t, ids: t.actions }))
  ], $ = (t, e, a) => t + " " + (t === 1 ? e : a), J = () => (gt.favourites ?? Ke.favorite_entities ?? []).filter((t) => M[t]);
  function ut() {
    if (!Eo) {
      const e = Object.entries(Ga).sort((o, i) => i[1] - o[1]).map(([o]) => o), a = zt.rooms.flatMap((o) => o.actions);
      Eo = [.../* @__PURE__ */ new Set([...en, ...e, ...a.filter((o) => ia(o).on), ...a])];
    }
    const t = J();
    return Eo.filter((e) => M[e] && M[e].state !== "unavailable" && !t.includes(e));
  }
  let Pt = !1;
  const Tt = 6;
  function Mt() {
    if (!Pt || gt.favSeeded || !zt.rooms.length || A) return;
    const t = (a) => Object.keys(M).find((o) => Va(o) && a(o)), e = [t((a) => a.startsWith("climate.")), t((a) => a.startsWith("cover.") && /curtain/.test(a)), t((a) => a.startsWith("valve.")), zt.security.locks[0]];
    gt = { ...gt, favourites: [.../* @__PURE__ */ new Set([...gt.favourites ?? Ke.favorite_entities ?? [], ...e.filter(Boolean)])].slice(0, Tt), favSeeded: !0 }, Oe();
  }
  const jt = () => gt.suggest ?? !Ke.hide_suggested_entities;
  function Lt() {
    const t = new Set(A ? [] : gt.favHidden || []), e = J().filter((i) => !t.has(i)), a = jt() ? ut().filter((i) => !t.has(i) && fs(i)) : [], o = Math.max(Tt, e.length);
    return [...e, ...a].slice(0, A && !wi() ? o : Math.min(O0, o));
  }
  const ct = (t) => {
    const e = J().includes(t);
    return '<button class="tfStar" type="button" data-star="' + P(t) + '" aria-pressed="' + e + '" aria-label="Favourite: ' + P(mt(t)) + '">' + H0(e) + "</button>";
  };
  function Ht(t, { area: e = !1, star: a = !1, plain: o = !1, say: i = null, alert: c = !1 } = {}) {
    var C, R, V, L, G, E;
    const l = o && ((G = (C = d()) == null ? void 0 : C.devices) == null ? void 0 : G[(L = (V = (R = d()) == null ? void 0 : R.entities) == null ? void 0 : V[t]) == null ? void 0 : L.device_id]), f = l && (l.name_by_user || l.name) || mt(t), h = t.split(".")[0], x = !o && Gn.includes(h) ? ia(t) : null, k = x ? x.on : ["on", "open", "playing"].includes((E = M[t]) == null ? void 0 : E.state), v = o ? null : x ? x.button : Er.includes(h) ? { act: Dt(h, "toggle", t), label: "Turn " + mt(t) + (k ? " off" : " on") } : h === "scene" || h === "script" ? { act: Dt(h, "turn_on", t), label: "Run " + mt(t) } : null, _ = (i ?? Te(t)) + (e && Ct.get(t) ? " · " + Ct.get(t) : ""), S = (x == null ? void 0 : x.icon) || ua(t);
    return '<div class="activityRow' + (v ? " tfPlug" : "") + (k ? " on" : "") + (a ? " tfPick" : "") + (c ? " alert" : "") + '" data-k="' + P((e ? "fav:" : "row:") + t) + '" data-tone="' + (h === "light" ? "light" : (x == null ? void 0 : x.tone) || "blue") + '"' + Ho(t) + ">" + (v && !a ? '<button class="tfIcon" type="button" data-act="' + v.act + '" aria-label="' + P(v.label) + '"' + ue(t, S) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + ue(t, S) + "></div>") + '<button class="tfName" type="button" data-more="' + P(t) + '" aria-label="' + P(f + ", " + _ + ". More info") + '"><span class="activityRowName">' + P(f) + '</span><span class="activityRowMeta">' + P(_) + "</span></button>" + (a ? ct(t) : "") + "</div>";
  }
  const Ot = () => {
    var t;
    return M[(t = gt.sources) == null ? void 0 : t.weather] ? gt.sources.weather : M["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(M).find((e) => e.startsWith("weather."));
  };
  function me() {
    var a;
    const t = (o) => Object.keys(M).filter((i) => i.startsWith("binary_sensor.") && o.includes(Gt(i).device_class));
    return ((a = so.alert_entities) != null && a.length ? so.alert_entities : [...t(["moisture", "smoke", "gas"]).map((o) => ({ entity: o, severity: "alert" })), ...t(Fi).map((o) => ({ entity: o, severity: "warning" }))]).filter((o) => M[o.entity]).map((o) => ({ ...o, on: ["on", "open", "unlocked", "triggered", "problem"].includes(M[o.entity].state) }));
  }
  function St() {
    const t = Object.keys(Br), e = /* @__PURE__ */ new Set(), a = [];
    (Ke.shortcuts || []).forEach((c) => {
      if (c.type === "summary") {
        if (!t.includes(c.key) || e.has(c.key)) return;
        e.add(c.key);
      }
      a.push(c);
    }), t.forEach((c) => {
      e.has(c) || a.push({ type: "summary", key: c });
    });
    const o = oe().sumOrder || [], i = (c) => c.type === "summary" && o.includes(c.key) ? o.indexOf(c.key) : o.length;
    return o.length ? a.map((c, l) => [c, l]).sort((c, l) => i(c[0]) - i(l[0]) || c[1] - l[1]).map(([c]) => c) : a;
  }
  function ne() {
    var V;
    const t = ((V = d()) == null ? void 0 : V.entities) || {}, e = (L) => Gt(L).device_class, a = Object.keys(M).filter((L) => L.startsWith("sensor.") && e(L) === "battery" || L.startsWith("binary_sensor.") && ["battery", "problem"].includes(e(L))), o = zt.rooms.flatMap((L) => L.plants.map((G) => G.id));
    if (!a.length && !o.length) return null;
    const i = (L) => {
      var E;
      const G = (E = t[L]) == null ? void 0 : E.device_id;
      return !!G && Object.keys(M).some((wt) => {
        var Wt;
        return wt.startsWith("binary_sensor.") && ((Wt = t[wt]) == null ? void 0 : Wt.device_id) === G && e(wt) === "battery_charging" && M[wt].state === "on";
      });
    }, c = (L) => L.startsWith("vacuum.") ? Gt(L).battery_level <= 20 && M[L].state !== "docked" : L.startsWith("binary_sensor.") ? e(L) === "battery" && M[L].state === "on" : parseFloat(M[L].state) <= 20 && !i(L), l = [...a, ...zt.vacuums].filter((L) => M[L] && c(L)), f = [...a.filter((L) => e(L) === "problem" && M[L].state === "on"), ...o.filter((L) => {
      var G;
      return ((G = M[L]) == null ? void 0 : G.state) === "problem";
    })], h = a.filter((L) => M[L].state === "unavailable"), x = [.../* @__PURE__ */ new Set([...l, ...f, ...h])], k = (L) => {
      const G = parseFloat(M[L].state);
      return e(L) === "battery" && Number.isFinite(G) ? G : 101;
    }, v = [...o, ...zt.vacuums, ...[...a].sort((L, G) => k(L) - k(G))].filter((L) => M[L] && !x.includes(L)), _ = /* @__PURE__ */ new Map();
    v.forEach((L) => {
      var E;
      const G = ((E = zt.areaOf) == null ? void 0 : E.call(zt, L)) || "";
      _.set(G, [..._.get(G) || [], L]);
    });
    const S = (L) => {
      const G = zt.rooms.findIndex((E) => E.id === L);
      return L === "" ? 1 / 0 : G < 0 ? zt.rooms.length : G;
    }, C = [..._.keys()].sort((L, G) => S(L) - S(G)), R = (L) => {
      var G, E, wt, Wt;
      return ((G = zt.rooms.find((Bt) => Bt.id === L)) == null ? void 0 : G.name) || ((Wt = (wt = (E = d()) == null ? void 0 : E.areas) == null ? void 0 : wt[L]) == null ? void 0 : Wt.name) || L;
    };
    return {
      value: [l.length && $(l.length, "low battery", "low batteries"), f.length && $(f.length, "problem", "problems"), h.length && $(h.length, "unavailable device", "unavailable devices")].filter(Boolean).join(", ") || "All good",
      plain: !0,
      groups: [{ name: "Needs attention", ids: x, alert: !0 }, ...C.map((L) => ({ name: L ? R(L) : C.length > 1 ? "Other devices" : "Devices", ids: _.get(L) }))].filter((L) => L.ids.length)
    };
  }
  const oe = () => A ? gt.home || {} : gt, Xe = (t) => mp.includes(t) ? (oe().shownSums || []).includes(t) : !(oe().hiddenSums || []).includes(t);
  function uo(t, e, a) {
    const o = t.flatMap((_) => a(_, /^cover\./)), i = o.filter((_) => {
      var S;
      return ["open", "opening"].includes((S = M[_]) == null ? void 0 : S.state);
    }).length, c = Object.keys(M).filter((_) => _.startsWith("person.")), l = c.filter((_) => {
      var S;
      return ((S = M[_]) == null ? void 0 : S.state) === "home";
    }).length, f = zt.security.openings.filter((_) => M[_]), h = f.filter((_) => M[_].state === "on").length, x = Object.keys(M).filter((_) => _.startsWith("binary_sensor.") && Gt(_).device_class === "moisture"), k = x.filter((_) => M[_].state === "on").length, v = zt.vacuums.filter((_) => M[_]);
    return {
      covers: o.length && { value: i ? i + " open" : "All closed", groups: e((_) => a(_, /^cover\./)) },
      people: c.length && { value: l ? l + " home" : "Nobody home", groups: [{ name: "People", ids: c }] },
      openings: f.length && { value: h ? h + " open" : "All closed", groups: [{ name: "Doors and windows", ids: f }] },
      leaks: x.length && { value: k ? $(k, "leak", "leaks") : "All dry", groups: [{ name: "Leak sensors", ids: x }] },
      vacuum: v.length && { value: Vt(M[v[0]].state), groups: [{ name: "Vacuum", ids: v }] }
    };
  }
  function fn(t = !1) {
    var ce;
    const e = zt.rooms, a = zt.security, o = (At, Et) => At.actions.filter((Ee) => Et.test(Ee)), i = (At) => e.map((Et) => ({ name: Et.name, ids: At(Et) })).filter((Et) => Et.ids.length), c = e.flatMap((At) => At.lights), l = c.filter((At) => {
      var Et;
      return ((Et = M[At]) == null ? void 0 : Et.state) === "on";
    }).length, f = e.map((At) => At.readings.find((Et) => Gt(Et).device_class === "temperature")).filter(Boolean).map((At) => Number(M[At].state)).filter(Number.isFinite), [h, x] = [Ae(Math.min(...f)), Ae(Math.max(...f))], k = e.flatMap((At) => o(At, /^media_player\./)), v = k.filter((At) => {
      var Et;
      return ((Et = M[At]) == null ? void 0 : Et.state) === "playing";
    }).length, _ = me(), S = _.filter((At) => At.severity === "warning" && At.on).length, C = a.locks.filter((At) => {
      var Et;
      return ["unlocked", "jammed", "open"].includes((Et = M[At]) == null ? void 0 : Et.state);
    }).length, R = a.alarms.filter((At) => {
      var Et;
      return ((Et = M[At]) == null ? void 0 : Et.state) === "disarmed";
    }).length, V = S ? $(S, "warning", "warnings") : null, L = C ? C + " unlocked" : R ? R + " disarmed" : V ? null : "All secure", G = ne(), E = e.flatMap((At) => At.solar), wt = E.find((At) => At.endsWith("_power")), Wt = {
      light: c.length && { value: l ? l + " on" : "All off", groups: i((At) => At.lights) },
      climate: f.length && { value: h === x ? h + "°" : h + " - " + x + "°", groups: i((At) => [...At.readings.filter((Et) => ["temperature", "humidity"].includes(Gt(Et).device_class)), ...o(At, /^(climate|humidifier)\./)]) },
      security: (a.alarms.length || a.locks.length) && { value: [V, L].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...a.alarms, ...a.locks] }, { name: "Doors and windows", ids: a.openings }].filter((At) => At.ids.length) },
      media_players: k.length && { value: v ? v + " playing" : "No media playing", groups: i((At) => o(At, /^media_player\./)) },
      maintenance: G,
      energy: zt.grid && { value: Fo(Number(((ce = M[wt]) == null ? void 0 : ce.state) || 0) * 1e3 + Number(M[zt.grid].state)) + " now", groups: [{ name: "Energy", ids: [...E, zt.grid] }] },
      ...uo(e, i, o)
    }, Bt = [], Xt = _.filter((At) => At.severity !== "warning" && At.on);
    return Xt.length && Bt.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: $(Xt.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: Xt.map((At) => At.entity) }] }), St().forEach((At) => {
      At.type !== "summary" ? Bt.push({ key: "path:" + At.path, name: At.label || At.path, icon: At.icon || "mdi:link-variant", colour: "", value: "" }) : !At.hidden && Wt[At.key] && (t || Xe(At.key)) && Bt.push({ key: At.key, ...Br[At.key], ...Wt[At.key] });
    }), Bt;
  }
  const pr = (t) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + P(t.key) + '" data-k="sum:' + P(t.key) + '" aria-label="' + P(t.name + (t.value ? ", " + t.value : "")) + '"' + (t.key === "alerts" ? ' style="--sum:' + t.colour + ';--sum-ink:#ffffff"' : t.key === "climate" ? ' style="' + ts() + '"' : t.colour && Tn(t.colour) ? ' style="' + Tn(t.colour).slice(1) + '"' : "") + ">" + (t.key === "climate" ? es : "") + '<div class="tfIcon" aria-hidden="true"' + ue(t.id || "", t.icon, t.name) + '></div><div><div class="activityRowName">' + P(t.name) + "</div>" + (t.value ? '<div class="activityRowMeta">' + P(t.value) + "</div>" : "") + "</div></div>";
  function fr(t) {
    const e = J();
    gt = { ...gt, favourites: e.includes(t) ? e.filter((a) => a !== t) : [...e, t], favHidden: (gt.favHidden || []).filter((a) => a !== t) }, Oe(), Le();
  }
  function Kt(t) {
    document.querySelector("home-assistant") && (window.history.pushState(null, "", t), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function Ja(t, e) {
    if (t.startsWith("path:")) {
      Kt(t.slice(5));
      return;
    }
    ki("summary:" + t, e);
  }
  async function Go() {
    const t = (l) => Promise.resolve().then(() => D(l)).catch(() => null), [e, a, o, i] = await Promise.all([
      t({ type: "frontend/get_user_data", key: gp }),
      t({ type: "frontend/get_system_data", key: "home" }),
      t({ type: "frontend/get_system_data", key: "security" }),
      t({ type: "usage_prediction/common_control" })
    ]), c = (e == null ? void 0 : e.value) || {};
    gt = { favourites: c.favourites ?? null, sources: c.sources, hiddenSums: c.hiddenSums, shownSums: c.shownSums, home: c.home, dash: c.dash, named: c.named, favHidden: c.favHidden, suggest: c.suggest, favSeeded: c.favSeeded, favsTitle: c.favsTitle, areaOrder: c.areaOrder }, Ke = (a == null ? void 0 : a.value) || {}, so = (o == null ? void 0 : o.value) || {}, en = Array.isArray(i == null ? void 0 : i.entities) ? i.entities : [], Eo = null, Object.keys(M).length && Le(), ur(), Pt = !0, Mt();
  }
  const un = "HomeCore";
  async function ur() {
    var o, i, c;
    const t = location.pathname.split("/")[1], e = gt.named || [];
    if (!((i = (o = d()) == null ? void 0 : o.user) != null && i.is_admin) || !t || e.includes(t)) return;
    const a = () => {
      gt = { ...gt, named: [...e, t] }, Oe();
    };
    try {
      const l = (c = await D({ type: "lovelace/dashboards/list" })) == null ? void 0 : c.find((x) => x.url_path === t);
      if (!l || l.mode === "yaml") return;
      if (l.title === un) {
        a();
        return;
      }
      const f = await D({ type: "lovelace/config", url_path: t }), h = ((f == null ? void 0 : f.views) || []).flatMap((x) => [...x.cards || [], ...(x.sections || []).flatMap((k) => k.cards || [])]);
      if (!h.length || !h.every((x) => (x == null ? void 0 : x.type) === "custom:homecore-card" && !x.page)) return;
      await D({ type: "lovelace/dashboards/update", dashboard_id: l.id, title: un }), a();
    } catch {
    }
  }
  let Uo = null, Yo = 0, Ge = !1;
  const Ul = (t) => {
    const e = t.split(".")[0], a = Gt(t).device_class;
    return N0.includes(e) && (e !== "binary_sensor" || Fi.includes(a) || !!Cp[a]);
  }, cs = (t) => t.startsWith("binary_sensor.") ? Cp[Gt(t).device_class] : null;
  async function hf() {
    var t;
    if (!(Ge || Date.now() - Yo < 30 * 1e3)) {
      Ge = !0, Yo = Date.now();
      try {
        const e = Object.keys(((t = d()) == null ? void 0 : t.states) || {}).filter(Ul), a = e.length ? await D({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: e }) : null;
        Uo = Array.isArray(a) ? a.filter((o) => o.entity_id && o.state != null && o.when) : null;
      } catch {
        Uo = null;
      }
      Ge = !1, Le();
    }
  }
  function mf() {
    const t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map(), a = (i) => {
      if (!M[i.entity_id] || !Ul(i.entity_id) || !fs(i.entity_id) || ["unavailable", "unknown"].includes(i.state)) return;
      if (cs(i.entity_id)) {
        const l = e.get(i.entity_id);
        i.state === "on" ? (!l || i.when > l.when + 1) && e.set(i.entity_id, { ...i, alarm: !0, cleared: null }) : l && !l.cleared && i.when > l.when && (l.cleared = i.when);
        return;
      }
      const c = t.get(i.entity_id);
      (!c || i.when > c.when + 1) && t.set(i.entity_id, i);
    };
    [...Uo || []].sort((i, c) => i.when - c.when).forEach(a);
    const o = Uo ? Yo / 1e3 - 5 : 0;
    return Object.keys(M).forEach((i) => {
      var f;
      const c = M[i], l = c.last_changed ? Date.parse(c.last_changed) / 1e3 : 0;
      l > o && a({ entity_id: i, state: c.state, when: l, context_user_id: (f = c.context) == null ? void 0 : f.user_id });
    }), [...t.values(), ...e.values()].sort((i, c) => c.when - i.when).slice(0, I0);
  }
  function gf(t) {
    var o;
    const e = t.context_user_id && Object.keys(M).find((i) => i.startsWith("person.") && Gt(i).user_id === t.context_user_id);
    if (e) return mt(e);
    const a = (o = d()) == null ? void 0 : o.user;
    return a && t.context_user_id === a.id ? a.name : ["automation", "script"].includes(t.context_domain) || t.context_event_type === "automation_triggered" ? t.context_name || "Home Assistant" : "";
  }
  function bf(t) {
    const e = t.entity_id.split(".")[0], a = String(t.state);
    return e === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[a] || Vt(a).toLowerCase() : e === "cover" || e === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[a] || Vt(a).toLowerCase() : e === "binary_sensor" ? a === "on" ? "opened" : "closed" : e === "climate" ? a === "off" ? "turned off" : "set to " + Vt(a).toLowerCase() : e === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[a] || Vt(a).toLowerCase() : e === "alarm_control_panel" ? (_p[a] || Vt(a)).toLowerCase() : e === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[a] || Vt(a).toLowerCase() : a === "on" ? "turned on" : a === "off" ? "turned off" : Vt(a).toLowerCase();
  }
  function wf(t) {
    const e = t.entity_id, a = t.alarm && cs(e), o = mt(e) + " " + (a ? a[0] : bf(t)), i = a ? Pa(t.when * 1e3) + (t.cleared ? " · " + a[1] + " since " + Pa(t.cleared * 1e3) : "") : [gf(t), Pa(t.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow' + (a ? " alert" : "") + '"><div class="tfIcon' + (a ? " alert" : "") + '" aria-hidden="true"' + ue(e, ua(e)) + '></div><button class="tfName" type="button" data-more="' + P(e) + '" data-at="' + Math.round(t.when * 1e3) + '" aria-label="' + P(o + ", " + i + ". More info") + '"><span class="activityRowName">' + P(o) + '</span><span class="activityRowMeta">' + P(i) + "</span></button></div>";
  }
  let Na = null, Yl = 0;
  const vf = [["electricity", "Electricity", 4.3, "kWh"], ["solar", "Solar", 2.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function Zl() {
    var e;
    if (Date.now() - Yl < 5 * 60 * 1e3) return;
    Yl = Date.now();
    const t = [];
    try {
      const a = ((e = await D({ type: "energy/get_prefs" })) == null ? void 0 : e.energy_sources) || [], o = (i) => a.filter((c) => c.type === i).flatMap((c) => i === "grid" ? (c.flow_from || []).map((l) => l.stat_energy_from) : [c.stat_energy_from]).filter(Boolean);
      for (const [i, c, l] of [["electricity", "Electricity", o("grid")], ["solar", "Solar", o("solar")], ["gas", "Gas", o("gas")], ["water", "Water", o("water")]]) {
        if (!l.length) continue;
        const f = await Promise.all(l.map((h) => Promise.resolve(D({ type: "recorder/statistic_during_period", statistic_id: h, calendar: { period: "day" }, types: ["change"] })).then((x) => Number(x == null ? void 0 : x.change) || 0, () => 0)));
        t.push({ key: i, name: c, id: l[0], ids: l, value: f.reduce((h, x) => h + x, 0), unit: Gt(l[0]).unit_of_measurement || (i === "gas" || i === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    Na = t, Le();
  }
  let Rn = null, Kl = [];
  function ds() {
    var c;
    const t = Kl = Na != null && Na.length ? Na : vf.map(([l, f, h, x]) => {
      if (l === "solar") {
        const v = Object.keys(M).find((_) => _.endsWith("_solar_today") && !_.includes("made_up_energy"));
        v && Number.isFinite(Number(M[v].state)) && (h = Number(M[v].state));
      }
      const k = "sensor.made_up_energy_" + l;
      return M[k] = { entity_id: k, state: String(h), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: f + " today", unit_of_measurement: x, state_class: "total_increasing" } }, { key: l, name: f, id: k, value: h, unit: x };
    });
    ot.clear(), t.some((l) => l.id === Rn) || (Rn = t[0].id);
    const e = t.map((l) => {
      const f = Number(l.value).toLocaleString(void 0, { maximumFractionDigits: l.value < 10 ? 2 : 1 }) + " " + l.unit, h = F0[l.key], x = l.id === Rn;
      return ot.set(l.id, { name: l.name, text: f, icon: h }), '<div class="activityRow tap' + (x ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + P(l.id) + '" aria-pressed="' + x + '" aria-label="' + P(l.name + ", " + f) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + ue("", h, l.name) + '></div><div><div class="activityRowName">' + P(l.name) + '</div><div class="activityRowMeta">' + P(f) + "</div></div></div>";
    }), a = t.find((l) => l.id === Rn), o = (((c = ae().opts.energy) == null ? void 0 : c.graph) || "above") === "below", i = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + P(a.id) + '" role="img" aria-label="' + P(a.name) + ', last 24 hours"></svg></div>';
    return co("dash:energy", 0, "Energy today", e, i, fn().some((l) => l.key === "energy") ? "summary:energy" : null, "tfDashCard tfDash-energy" + (o ? "" : " graphAbove"));
  }
  function Xl(t) {
    const e = N.querySelector(".tfDash-energy"), a = e == null ? void 0 : e.querySelector(".tfDashGraph svg");
    !a || t === Rn || (Rn = t, e.querySelectorAll("[data-energy-pick]").forEach((o) => {
      const i = o.dataset.energyPick === t;
      o.classList.toggle("picked", i), o.setAttribute("aria-pressed", String(i));
    }), a.dataset.graph = t, a.dataset.drawn = "", ba.set("dash:energy", ds()), Oc(!0));
  }
  const $l = {
    electricity: [15, 12, 10, 10, 10, 12, 25, 45, 40, 30, 25, 30, 35, 30, 25, 25, 35, 60, 80, 70, 55, 45, 30, 20],
    gas: [2, 2, 2, 2, 3, 8, 18, 20, 12, 6, 4, 4, 4, 4, 4, 5, 8, 14, 16, 14, 10, 6, 3, 2],
    water: [0, 0, 0, 0, 0, 2, 12, 18, 8, 4, 3, 4, 6, 3, 2, 3, 4, 6, 10, 8, 5, 5, 3, 1]
  }, Jl = /* @__PURE__ */ new Map();
  async function yf(t) {
    const e = /* @__PURE__ */ new Date(), a = new Date(e).setHours(0, 0, 0, 0), o = e.getHours(), i = e.getMinutes() / 60, c = Array.from({ length: 24 }, (f, h) => h <= o ? 0 : null);
    if (!t.ids) {
      const f = $l[t.key] || $l.electricity, h = f.map((k, v) => v < o ? k : v === o ? k * i : 0), x = h.reduce((k, v) => k + v, 0) || 1;
      return c.map((k, v) => k == null ? null : t.value * h[v] / x);
    }
    const l = Jl.get(t.id);
    if (l && l.day === a && Date.now() - l.at < 5 * 60 * 1e3) return l.hours;
    try {
      const f = await D({ type: "recorder/statistics_during_period", start_time: new Date(a).toISOString(), end_time: e.toISOString(), statistic_ids: t.ids, period: "hour", types: ["change"] });
      t.ids.forEach((k) => ((f == null ? void 0 : f[k]) || []).forEach((v) => {
        const _ = typeof v.start == "number" ? v.start : Date.parse(v.start), S = new Date(_).getHours();
        _ >= a && S < o && (c[S] += Number(v.change) || 0);
      }));
      const h = new Date(e).setMinutes(0, 0, 0), x = await Promise.all(t.ids.map((k) => Promise.resolve(D({ type: "recorder/statistic_during_period", statistic_id: k, fixed_period: { start_time: new Date(h).toISOString(), end_time: e.toISOString() }, types: ["change"] })).then((v) => Number(v == null ? void 0 : v.change) || 0, () => 0)));
      c[o] = x.reduce((k, v) => k + v, 0);
    } catch {
    }
    return Jl.set(t.id, { at: Date.now(), day: a, hours: c }), c;
  }
  async function xf(t, e) {
    const a = await yf(e);
    if (!t.isConnected) return;
    const o = Math.max(120, t.clientWidth || 260), i = Math.max(60, t.clientHeight || 130), c = 18, l = i - 18, f = o / 24, h = f * 0.72, x = (/* @__PURE__ */ new Date()).getHours(), k = a.map((V) => V ?? 0), v = Math.max(0, ...k), _ = (V) => l - (v > 0 ? V / v * (l - c) : 0), S = (V) => V.toLocaleString(void 0, { maximumFractionDigits: V < 10 ? 2 : 1 }) + " " + e.unit, C = (V) => String(V).padStart(2, "0") + ":00", R = v > 0 ? k.indexOf(v) : -1;
    t.setAttribute("viewBox", "0 0 " + o + " " + i), t.setAttribute("aria-label", e.name + " today by the hour: " + S(e.value) + (R >= 0 ? ", most " + S(v) + " at " + C(R) : "")), t.innerHTML = [c, (c + l) / 2, l].map((V) => '<line x1="0" x2="' + o + '" y1="' + V + '" y2="' + V + '" stroke="var(--line)" stroke-width="1"/>').join("") + a.map((V, L) => V > 0 ? '<rect x="' + (L * f + (f - h) / 2).toFixed(1) + '" y="' + _(V).toFixed(1) + '" width="' + h.toFixed(1) + '" height="' + (l - _(V)).toFixed(1) + '" rx="2" fill="' + (L === x ? "var(--primary)" : "var(--text)") + '"' + (L === x ? "" : ' fill-opacity=".5"') + "/>" : "").join("") + [0, 6, 12, 18].map((V) => '<text x="' + (V * f).toFixed(1) + '" y="' + (i - 3) + '">' + String(V).padStart(2, "0") + "</text>").join("") + (R >= 0 ? '<text x="0" y="11">Most: ' + P(S(v)) + " at " + C(R) + "</text>" : "");
  }
  function kf(t) {
    var e;
    (e = window.matchMedia) != null && e.call(window, "(prefers-reduced-motion: reduce)").matches || t.querySelectorAll("rect").forEach((a, o) => a.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], { duration: 500, delay: o * 18, easing: "cubic-bezier(.2,.7,.3,1)", fill: "backwards" }));
  }
  function Ql(t) {
    var o;
    if ((o = window.matchMedia) != null && o.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [e, a] = t.querySelectorAll("path");
    Up(t, a, [e].filter(Boolean));
  }
  let si = null, ps = 0;
  const fs = (t) => !t.startsWith("light.") || q0.includes((Ct.get(t) || "").toLowerCase()), us = () => Math.max(2, mn((N == null ? void 0 : N.clientWidth) || 0).n), tc = (t) => {
    const e = ia(t);
    return e.sections.map((a, o) => a && (e.parts || [])[o]).filter(Boolean);
  }, Mf = (t) => tc(t).slice(0, mr(t) - 1);
  function ec(t) {
    const e = ae().tiles;
    if (e) return e.filter((o) => M[o] || j(o));
    if (!si) {
      const o = (i) => {
        var c;
        return (((c = M[i]) == null ? void 0 : c.state) === "on" ? 1e6 : 0) + (Ga[i] || 0);
      };
      si = {
        lights: zt.rooms.flatMap((i) => i.lights).filter((i) => {
          var c;
          return fs(i) && ((c = M[i]) == null ? void 0 : c.state) !== "unavailable";
        }).sort((i, c) => o(c) - o(i) || mt(i).localeCompare(mt(c))),
        climates: zt.rooms.flatMap((i) => i.actions.filter((c) => c.startsWith("climate.")))
      };
    }
    const a = si.climates.filter((o) => M[o]).slice(0, t > 3 ? 2 : 1);
    return [...si.lights.filter((o) => M[o]).slice(0, Math.max(0, t - a.length)), ...a];
  }
  const hs = () => {
    var t;
    return ((t = gt.home) == null ? void 0 : t.welcome) ?? !0;
  }, Sf = () => {
    var e, a;
    const t = (e = d()) == null ? void 0 : e.user;
    return (t == null ? void 0 : t.name) || ((a = Object.values(M).find((o) => {
      var i;
      return o.entity_id.startsWith("person.") && (t == null ? void 0 : t.id) && ((i = o.attributes) == null ? void 0 : i.user_id) === t.id;
    })) == null ? void 0 : a.attributes.friendly_name) || "";
  }, _f = () => {
    const t = (/* @__PURE__ */ new Date()).getHours(), e = Sf();
    return (t >= 5 && t < 12 ? "Good morning" : t >= 12 && t < 18 ? "Good afternoon" : "Good evening") + (e ? ", " + e : "");
  }, ac = (t, e, a, o) => (i) => '<section class="card tfCard tfDashCard ' + t + '" data-tf data-k="' + e + '" aria-label="' + a + '">' + (o ? '<div class="activityHeader">' + (e === "favs" ? '<button class="activityTitle tfTitleBtn" type="button" data-more="favourites" aria-label="Favourites. More info">' + a + "</button>" : '<div class="activityTitle">' + a + "</div>") + "</div>" : "") + '<div class="activityRows">' + i + "</div></section>";
  function Cf(t, e) {
    var c, l;
    t.dash = !0, t.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + ((A ? hs() : ae().welcome) ? '<span class="tfGreeting">' + P(_f()) + "</span>" : "") + P(((l = (c = d()) == null ? void 0 : c.config) == null ? void 0 : l.location_name) || "Home") + "</h1>" }), e.length && t.push({ key: "sums", wrap: (f) => '<div class="tfDashBarRow" data-tf data-k="sums">' + ac("tfDash-bar", "sums-bar", "Summaries", !1)(f).replace(" data-tf", "") + "</div>", tiles: e.map((f) => ({ key: "sum:" + f.key, html: pr(f) })) }), !A && b().length && t.push({ key: "areas", html: T(0) });
    const a = Lt();
    if (a.length && t.push({ key: "favs", wrap: ac("tfDash-favs", "favs", "Favourites", ci()), tiles: a.map((f) => ({ key: "fav:" + f, html: Ht(f, { area: !0 }) })) }), A)
      return Zl(), hc() && t.push({ key: "dash:energy", html: ds() }), ps = us(), ec(0).forEach((f) => t.push({
        key: "dash:tile:" + f,
        wrap: (h) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + P(f) + '">' + h + "</div>",
        tiles: [{ key: f, html: Z(j(f), f) }]
      })), t;
    const o = mf();
    t.push({ key: "dash:act", html: co("dash:act", 0, "Activity", o.length ? o.map(wf) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), t.push({ key: "dash:energy", html: ds() });
    const i = us();
    return ps = i, ec(i >= 3 ? i : i * 2).forEach((f) => t.push({
      key: "dash:tile:" + f,
      wrap: (h) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + P(f) + '">' + h + "</div>",
      tiles: [{ key: f, html: O(f) ? Z(j(f), f) : sr(f, !1, Mf(f)) }]
    })), hf(), Zl(), t;
  }
  const hr = 252, se = 16, Af = 200, Tf = Math.round(hr * 1.25), Lf = 60, Oa = Lf + se, Df = 3, oc = {
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
  }, Bf = ["wx", "favs", "act", "energy", "avg"], nc = ["XS", "S", "M", "L", "XL"], rc = nc.length, Ef = ["Narrow", "Wide", "Really wide"], Rf = { wx: 5, areas: 5, favs: 5, act: 5, energy: 4, avg: 4, aq: 4, pollen: 4, radar: 4, hourly: 4, sun: 4, moon: 4, uv: 4, humidity: 4, pressure: 4, wind: 4, visibility: 4 }, ic = (t) => !t.includes(".") || !M[t] || t.startsWith("light.") && va(t) ? rc : Math.min(rc, tc(t).length + 1), mr = (t) => {
    const e = ae().opts[t] || {}, a = ic(t), o = Number(e.h) || (e.tall ? 5 : Rf[t] || sc);
    return Math.max(1, Math.min(a, o));
  }, sc = 2, Pf = 90, Hf = 56, ka = (t) => {
    var e;
    return oc[t] || (t.startsWith("room:") ? ((e = u.find((a) => "room:" + a.id === t)) == null ? void 0 : e.name) || "Area" : mt(t));
  }, Nf = 409, Of = 128;
  let sa = !1, $t = null, $e = null, ms = !1, hn = /* @__PURE__ */ new Map(), li = 0, Zo = 0;
  const ho = ["title", "sums"], mn = (t) => {
    const e = Math.max(1, Math.floor((t + se) / (Af + se)));
    return { n: e, w: Math.max(1, Math.min(Tf, Math.floor((t - (e - 1) * se) / e))) };
  }, gs = () => m(u), If = () => {
    var e;
    const t = new Set(((e = gt.home) == null ? void 0 : e.areasOff) || []);
    return gs().filter((a) => !t.has(a.id)).map((a) => "room:" + a.id);
  };
  function Ff() {
    const t = If();
    return {
      cells: {},
      spans: { favs: 2 },
      hidden: Object.keys(oc).filter((e) => {
        var a, o;
        return !["title", ...((a = gt.home) == null ? void 0 : a.sums) === !1 ? [] : ["sums"], ...((o = gt.home) == null ? void 0 : o.favs) === !1 ? [] : ["favs"], ...Vf() ? ["wx"] : [], ...hc() ? ["energy"] : []].includes(e);
      }),
      opts: { favs: { h: 5 }, ...Object.fromEntries(t.map((e) => [e, { h: 5 }])) },
      tiles: t,
      known: Ro,
      areasOff: []
    };
  }
  const ae = () => A ? Ff() : bs(), bs = () => {
    let t = { cells: {}, spans: {}, hidden: [], opts: {}, ...gt.dash || {} };
    t.sumsOff && (t = { ...t, hidden: [...t.hidden, "sums"] });
    const e = Ro.filter((a) => !(t.known || []).includes(a) && !t.hidden.includes(a));
    return e.length ? { ...t, hidden: [...t.hidden, ...e] } : t;
  };
  function gn(t) {
    A || (gt = { ...gt, dash: { ...t, known: Ro } }, Oe());
  }
  function bn() {
    const t = (e) => N.querySelector(e);
    return [
      ["title", t(".tfDashTitle"), "full"],
      ["sums", t(".tfDashBarRow"), "full"],
      ["wx", Ua.wx, 2],
      ["areas", t(".tfAreas"), "areas"],
      ["favs", t(".tfDash-favs"), 2],
      ["act", t(".tfDash-act"), 2],
      ["energy", t(".tfDash-energy"), 2],
      ["avg", Ua.avg, 2],
      ...Ro.map((e) => [e, Ua[e], Ki[e] || 1]),
      ...[...N.querySelectorAll(".tfDashTiles > [data-k]")].map((e) => [e.dataset.k, e, 1, !0])
    ].filter(([, e]) => e == null ? void 0 : e.isConnected).map(([e, a, o, i = !1]) => ({ key: e, el: a, span: o, tile: i }));
  }
  const lc = (t, e, a) => {
    var o;
    if (t.span === "full") return e;
    if (t.span === "areas") {
      const i = Math.ceil((Nf + Math.max(0, b().length - 1) * (Of + se) + se) / (a + se));
      return Math.max(Math.min(e, 2), Math.min(i, e - (((o = ae().cells.areas) == null ? void 0 : o.col) || 0)));
    }
    return Math.min(e, ae().spans[t.key] ?? t.span);
  }, cc = (t) => mr(t.key);
  function dc(t, e, a = null) {
    const o = ae().cells, i = t.every((f) => !o[f.key] || o[f.key].col + f.cols <= e), c = (f) => o[f.key] || { row: 1e9, col: 0 };
    return (() => {
      const f = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Map(), x = (R, V, L, G) => {
        for (let E = V; E < V + G; E++) for (let wt = R; wt < R + L; wt++) if (f.has(wt + "," + E)) return !1;
        return !0;
      }, k = (R, V, L) => {
        for (let G = L; G < L + R.rows; G++) for (let E = V; E < V + R.cols; E++) f.add(E + "," + G);
        h.set(R.key, { col: V, row: L, cols: R.cols, rows: R.rows });
      }, v = (R, V, L) => {
        for (V = Math.max(0, Math.min(e - R.cols, V)), L = Math.max(0, L); !x(V, L, R.cols, R.rows); ) L++;
        k(R, V, L);
      }, _ = (R) => {
        for (let V = 0; ; V++) for (let L = 0; L <= e - R.cols; L++) if (x(L, V, R.cols, R.rows)) {
          k(R, L, V);
          return;
        }
      };
      a && v(a, $t.col, $t.row);
      const S = t.filter((R) => R !== a), C = (R, V) => c(R).row - c(V).row || c(R).col - c(V).col;
      return i ? (S.filter((R) => o[R.key]).sort(C).forEach((R) => v(R, o[R.key].col, o[R.key].row)), S.filter((R) => !o[R.key]).forEach(_), h) : ([...S].sort(C).forEach(_), h);
    })();
  }
  function qf(t, e) {
    const a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map(), i = (c, l, f) => {
      for (let h = l; h < l + f.rows; h++) for (let x = c; x < c + f.cols; x++) if (a.has(x + "," + h)) return !1;
      return !0;
    };
    return t.forEach((c) => {
      for (let l = 0; ; l++) {
        let f = 0;
        for (; f <= e - c.cols && !i(f, l, c); ) f++;
        if (!(f > e - c.cols)) {
          for (let h = l; h < l + c.rows; h++) for (let x = f; x < f + c.cols; x++) a.add(x + "," + h);
          o.set(c.key, { col: f, row: l, cols: c.cols, rows: c.rows });
          return;
        }
      }
    }), o;
  }
  function ws() {
    const t = ae(), e = new Set(t.hidden), a = bn().filter((l) => !ho.includes(l.key));
    let o = hn;
    if (!o.size) {
      const l = t.pegs || 4, f = a.filter((h) => !e.has(h.key));
      f.forEach((h) => {
        h.cols = lc(h, l, hr), h.rows = cc(h) ?? sc;
      }), o = dc(f, l);
    }
    const i = (l) => !e.has(l.key) && o.get(l.key) || { row: 1e9, col: 0 };
    a.sort((l, f) => i(l).row - i(f).row || i(l).col - i(f).col);
    const c = (t.phone || []).map((l) => a.find((f) => f.key === l && !e.has(l))).filter(Boolean);
    return [...c, ...a.filter((l) => !c.includes(l))];
  }
  const Wf = () => {
    const t = ws();
    t.forEach((e, a) => e.el.style.setProperty("--o", String(3 + a))), vs([...bn().filter((e) => ho.includes(e.key)), ...t].map((e) => e.el));
  };
  function vs(t) {
    if ($t) return;
    const e = n.activeElement;
    let a = null;
    for (const o of new Set(t.map((i) => {
      for (; i && i.parentElement !== N; ) i = i.parentElement;
      return i;
    }).filter(Boolean))) {
      const i = a ? a.nextSibling : N.querySelector(":scope > [data-tf]");
      if (o !== i)
        try {
          N.moveBefore ? N.moveBefore(o, i) : N.insertBefore(o, i);
        } catch {
          N.insertBefore(o, i);
        }
      a = o;
    }
    e && e !== n.activeElement && e.isConnected && e.focus({ preventScroll: !0 });
  }
  const Pn = (t, e) => gn({ ...t, cells: e, pegs: mn(N.clientWidth).n });
  function Pe() {
    var G;
    if (!w || !N) return;
    const t = N.clientWidth, e = t < 2 * hr + se, a = g.classList.contains("tfDash");
    A && (sa = !1), g.classList.toggle("tfOverview", A);
    const { n: o, w: i } = e ? { n: 2, w: Math.floor((t - se) / 2) } : mn(t);
    wa.classList.add("tfPegs"), wa.style.setProperty("--peg-n", o), wa.style.setProperty("--peg-w", i + "px");
    const c = new Set(ae().hidden);
    Ro.forEach((E) => {
      var wt;
      return (wt = Ua[E]) == null ? void 0 : wt.classList.toggle("tfNotAdded", c.has(E) && !($t != null && $t.fromTray && $t.key === E));
    }), jr(), g.classList.toggle("tfBoard", a), g.classList.toggle("tfEditing", a && sa && !e);
    const l = p("dashEditNav");
    !a && vo && Fs(!1), l && A ? (l.hidden = !a, vo || (l.classList.remove("active"), l.setAttribute("aria-pressed", "false"), l.setAttribute("aria-label", "Edit Home page"), l.title = "Edit", l.innerHTML = Ii)) : l && (l.hidden = !a || e, l.classList.toggle("active", sa), l.setAttribute("aria-pressed", String(sa)), l.setAttribute("aria-label", sa ? "Done editing" : "Edit custom dashboard"), l.title = sa ? "Done" : "Edit", l.innerHTML = sa ? kp : Ii);
    const f = a ? bn() : [];
    if ((!a || !A) && N.querySelectorAll(":scope > :is(.hcFloor,.hcFloorBox)").forEach((E) => E.remove()), !a) {
      N.style.height = "", N.querySelectorAll(".tfBoardItem").forEach((E) => {
        E.classList.remove("tfBoardItem", "tfBoardHidden"), E.style.left = E.style.top = E.style.width = E.style.height = "";
      }), (G = N.querySelector(".tfDash-act > .activityRows")) == null || G.style.removeProperty("max-height"), Ms(!1), g.classList.contains("tfDash") && Wf(), xe();
      return;
    }
    if (A) {
      Uf(f, t, e);
      return;
    }
    N.style.setProperty("--peg-w", i + "px");
    const h = new Set(ae().hidden), x = i + se;
    $t != null && $t.fromTray && h.delete($t.key), f.forEach((E) => E.el.classList.toggle("tfBoardHidden", h.has(E.key)));
    const k = f.filter((E) => !h.has(E.key) && getComputedStyle(E.el).display !== "none");
    let v = 0;
    k.filter((E) => ho.includes(E.key)).forEach((E) => {
      E.el.classList.add("tfBoardItem"), Object.assign(E.el.style, { width: t + "px", height: "", left: "0px", top: v + "px" });
      const wt = E.key === "sums" && E.el.querySelector(".tfDash-bar"), Wt = wt ? wt.querySelectorAll(".activityRow").length : 0;
      wt && (wt.style.maxWidth = "none");
      for (let Bt = 1; wt && Bt <= Wt && (wt.style.setProperty("--bar-cols", String(Math.ceil(Wt / Bt))), !(wt.offsetWidth <= t)); Bt++)
        ;
      wt && (wt.style.maxWidth = ""), v += E.el.offsetHeight + se;
    }), Zo = v;
    const _ = k.filter((E) => !ho.includes(E.key));
    _.forEach((E) => {
      E.cols = lc(E, o, i), E.el.classList.add("tfBoardItem"), E.el.style.width = (E.cols === o ? t : E.cols * i + (E.cols - 1) * se) + "px", E.el.style.height = "", E.rows = cc(E) ?? Math.max(1, Math.ceil((E.el.offsetHeight + se - 6) / Oa));
    });
    const S = $t && _.find((E) => E.key === $t.key), C = e && ws().map((E) => E.key), R = (E) => C.includes(E.key) ? C.indexOf(E.key) : -1, V = e ? qf([..._].sort((E, wt) => R(E) - R(wt)), o) : dc(_, o, S);
    V.forEach((E) => Object.assign(E, { x: E.cols === o ? 0 : E.col * x, y: Zo + E.row * Oa, w: E.cols === o ? t : E.cols * i + (E.cols - 1) * se, h: E.rows * Oa - se })), _.forEach((E) => {
      const wt = V.get(E.key);
      E.el.style.height = wt.h + "px", E.el.dataset.rows = e && E.key === "wx" ? 5 : mr(E.key), E.el.toggleAttribute("data-narrow", !e && wt.cols === 1 && o > 1), E.el.dataset.cols = wt.cols, E.el.classList.contains("tfDac") && E.el.style.setProperty("--tf-dac-pad", wt.h - Pf + "px"), !(E === S && !$t.fromTray) && (E.el.style.left = wt.x + "px", E.el.style.top = wt.y + "px");
    }), e || (hn = V), vs([...k.filter((E) => ho.includes(E.key)), ..._.slice().sort((E, wt) => V.get(E.key).row - V.get(wt.key).row || V.get(E.key).col - V.get(wt.key).col)].map((E) => E.el)), [["favs", ".tfDash-favs"], ["act", ".tfDash-act"]].forEach(([E, wt]) => {
      const Wt = V.get(E), Bt = Wt && N.querySelector(wt), Xt = Bt == null ? void 0 : Bt.querySelector(":scope > .activityRows"), ce = Bt == null ? void 0 : Bt.querySelector(":scope > .activityHeader");
      if (!Xt || !ce) return;
      const At = Xt.getBoundingClientRect().top - Bt.getBoundingClientRect().top, Et = Wt.rows === 1 ? Wt.h : Math.floor(Wt.h - At - parseFloat(getComputedStyle(Bt).paddingBottom)), Ee = Math.max(1, Math.floor(Et / Hf));
      Xt.style.setProperty("--fill-row", (Et / Ee).toFixed(2) + "px"), Xt.style.maxHeight = Et + "px";
    }), li = Math.max(0, ...[...V.values()].map((E) => E.row + E.rows));
    let L = Zo + li * Oa - se;
    L = Ms(sa && !e, _, V, L, o, i), N.style.height = L + "px", requestAnimationFrame(() => g.classList.add("tfBoardReady")), f.forEach((E) => ks.observe(E.el)), Oc(), xe();
  }
  const la = { gap: 20, phoneGap: 16, inner: 16, col: 252, row: 337, nameGap: 16, sumsGap: 16, full: 1336, floorTop: 12, floorHead: 24, floorGap: 16 }, pc = { s: { w: 160, h: 192 }, m: { w: 200, h: 240 }, l: { w: 252, h: 337 } }, fc = () => {
    var t;
    return pc[(t = gt.home) == null ? void 0 : t.areaSize] ? gt.home.areaSize : "s";
  }, ys = () => {
    var t;
    return ["rows", "columns", "bento"].includes((t = gt.home) == null ? void 0 : t.areaLayout) ? gt.home.areaLayout : "bento";
  }, uc = () => {
    var t;
    return ((t = gt.home) == null ? void 0 : t.cardsAs) === "rows" ? "rows" : "stacked";
  }, jf = { byFloor: !0, bentoBoxes: !0, bentoMixed: !1, favsTitle: !1 }, ci = () => A ? mo("favsTitle") : gt.favsTitle !== !1, Vf = () => {
    var t;
    return !!((t = gt.home) != null && t.weather && Ot());
  }, hc = () => {
    var t;
    return !!((t = gt.home) != null && t.energy && (Na != null && Na.length));
  }, mo = (t) => {
    var e;
    return ((e = gt.home) == null ? void 0 : e[t]) ?? jf[t];
  };
  function zf() {
    var i;
    const t = Object.values(((i = d()) == null ? void 0 : i.floors) || {}), e = new Set(t.map((c) => c.floor_id)), a = t.map((c) => ({ id: c.floor_id, name: c.name, rooms: u.filter((l) => l.floor === c.floor_id) })), o = u.filter((c) => !e.has(c.floor));
    return o.length && a.push({ id: "", name: t.length ? "Other areas" : "", rooms: o }), a;
  }
  const mc = (t) => t.classList.toggle("hcMore", t.scrollHeight - t.scrollTop - t.clientHeight > 1);
  let ge = null, gc = [], gr = /* @__PURE__ */ new Map();
  function xs(t) {
    let e = N.querySelector(".hcHomeLand");
    if (!t) {
      e == null || e.remove();
      return;
    }
    e || (e = Object.assign(document.createElement("div"), { className: "tfBoardLand hcHomeLand" }), N.appendChild(e)), Object.assign(e.style, { left: t.x + "px", top: t.y + "px", width: t.w + "px", height: t.h + "px" });
  }
  function Gf(t) {
    if (!A || !vo || t.button !== 0 || N.clientWidth < 2 * hr + se) return;
    const e = t.target.closest(".tfBoardItem"), a = e && bn().find((f) => f.el === e);
    if (!a || ho.includes(a.key) || O(a.key)) return;
    t.preventDefault();
    const o = N.getBoundingClientRect(), i = gr.get(a.key);
    ge = { key: a.key, el: e, on: !1, x0: t.clientX, y0: t.clientY, left: i.x, top: i.y, order: [...gc] };
    const c = (f) => {
      const h = f.clientX - ge.x0, x = f.clientY - ge.y0;
      if (!ge.on && Math.hypot(h, x) < 5) return;
      ge.on || (ge.on = !0, e.classList.add("tfDragging"), je() || e.animate([{ scale: "1" }, { scale: "1.05" }, { scale: "1.02" }], { duration: 260, easing: "cubic-bezier(.2,1.35,.4,1)" })), Object.assign(e.style, { left: ge.left + h + "px", top: ge.top + x + "px" });
      const k = f.clientX - o.left, v = f.clientY - o.top + N.scrollTop;
      let _ = null, S = 1 / 0;
      if (gr.forEach((L, G) => {
        if (G === a.key || !ge.order.includes(G)) return;
        const E = Math.hypot(k - (L.x + L.w / 2), v - (L.y + L.h / 2));
        E < S && (S = E, _ = { key: G, b: L });
      }), !_) return;
      const C = ge.order.filter((L) => L !== a.key), R = C.indexOf(_.key) + (k > _.b.x + _.b.w / 2 ? 1 : 0), V = [...C.slice(0, R), a.key, ...C.slice(R)];
      V.join() !== ge.order.join() ? (ge.order = V, Pe()) : xs(gr.get(a.key));
    }, l = () => {
      removeEventListener("pointermove", c), removeEventListener("pointerup", l), removeEventListener("pointercancel", l);
      const f = ge;
      ge = null, e.classList.remove("tfDragging"), f.on && _a({ order: f.order }), Pe(), f.on && !je() && setTimeout(() => Al(e), 340);
    };
    addEventListener("pointermove", c), addEventListener("pointerup", l), addEventListener("pointercancel", l);
  }
  function Uf(t, e, a) {
    var gd;
    const o = new Set(ae().hidden);
    t.forEach((dt) => dt.el.classList.toggle("tfBoardHidden", o.has(dt.key)));
    const i = t.filter((dt) => !o.has(dt.key) && getComputedStyle(dt.el).display !== "none"), c = a ? la.phoneGap : la.gap, l = Math.min(e, la.full);
    let f = 0;
    const h = wi();
    g.classList.toggle("hcSumsFit", Cc()), g.classList.toggle("hcFavStrip", h);
    const x = i.filter((dt) => ho.includes(dt.key) || h && dt.key === "favs");
    x.sort((dt, Nt) => ["title", "sums", "favs"].indexOf(dt.key) - ["title", "sums", "favs"].indexOf(Nt.key)), x.forEach((dt) => {
      dt.el.classList.add("tfBoardItem"), dt.el.toggleAttribute("data-narrow", !1), Object.assign(dt.el.style, { width: (dt.key === "title" ? e : l) + "px", height: "", left: "0px", top: f + "px" });
      const Nt = dt.key !== "title" && (dt.el.querySelector(".tfDash-bar>.activityRows") || dt.key === "favs" && dt.el.querySelector(":scope>.activityRows")), ke = Nt ? Nt.children.length : 0;
      if (Nt && (Nt.classList.remove("hcBarRows"), !a && Nt.scrollWidth > Nt.clientWidth + 1))
        for (let de = 2; de <= ke && (Nt.classList.add("hcBarRows"), Nt.style.setProperty("--bar-cols", String(Math.ceil(ke / de))), !(Nt.scrollWidth <= Nt.clientWidth + 1)); de++)
          ;
      f += dt.el.offsetHeight + (dt.key === "title" ? la.nameGap : la.sumsGap);
    });
    const k = a ? 1 : Math.max(0.85, Math.min(1, e / la.full)), v = ["favs", "wx", "energy"], _ = (ge == null ? void 0 : ge.order) || ((gd = gt.home) == null ? void 0 : gd.order), S = _ ? [..._.filter((dt) => v.includes(dt)), ...v.filter((dt) => !_.includes(dt))] : v;
    gc = S;
    const C = i.filter((dt) => v.includes(dt.key) && !(h && dt.key === "favs")).sort((dt, Nt) => S.indexOf(dt.key) - S.indexOf(Nt.key));
    gr = /* @__PURE__ */ new Map();
    const R = (dt, Nt) => {
      if (gr.set(dt.key, Nt), Object.assign(dt.el.style, { width: Nt.w + "px", height: Nt.h + "px" }), ge != null && ge.on && ge.key === dt.key) {
        xs(Nt);
        return;
      }
      Object.assign(dt.el.style, { left: Nt.x + "px", top: Nt.y + "px" });
    }, V = a ? e : Math.round((2 * la.col + la.inner) * k), L = Math.round(la.row * k), G = fc(), E = pc[G], wt = ys(), Wt = mo("byFloor"), Bt = uc() === "stacked" && !a && C.length > 0;
    let Xt = 0, ce = 0, At = f;
    C.forEach((dt) => {
      dt.el.classList.add("tfBoardItem"), dt.el.dataset.rows = 5, dt.el.dataset.cols = 2, dt.el.toggleAttribute("data-narrow", !1);
      let Nt = L;
      if ((a || dt.key === "favs") && (Object.assign(dt.el.style, { width: V + "px", height: "" }), Nt = dt.el.offsetHeight), Bt) {
        R(dt, { x: 0, y: At, w: V, h: Nt }), At += Nt + c;
        return;
      }
      Xt && Xt + V > e && (f += ce + c, Xt = 0, ce = 0), R(dt, { x: Xt, y: f, w: V, h: Nt }), Xt += V + c, ce = Math.max(ce, Nt);
    }), C.length && !Bt && (f += ce + c);
    const Et = Bt ? V + c : 0, Ee = Bt ? e - V - c : e, Fe = a ? Math.floor((e - c) / 2) : Math.round(E.w * k), Qe = Math.round(E.h * k), Ue = a ? 2 : Math.max(1, Math.floor((Ee + c) / (Fe + c))), qn = new Map(i.filter((dt) => O(dt.key)).map((dt) => [dt.key, dt])), Aa = (Wt ? zf() : [{ id: "", name: "", rooms: u }]).map((dt) => ({ ...dt, cards: dt.rooms.map((Nt) => qn.get("room:" + Nt.id)).filter(Boolean) })).filter((dt) => dt.cards.length), ll = wt === "bento", cl = ll && mo("bentoMixed"), zu = ll && Wt && mo("bentoBoxes"), Gu = wt === "columns" && Wt && !a, Ar = 12, Uu = (dt) => dt.name ? la.floorHead + la.floorGap : 0, dl = (dt, Nt, ke) => {
      const de = /* @__PURE__ */ new Set(), pe = [];
      dt.cards.forEach((Ft, Ta) => {
        const qe = cl && Ta === 0 && Nt >= 2 && dt.cards.length > 1, Xo = qe ? 2 : 1, Ci = qe && !a && !Bt ? 2 : 1;
        Ft.el.classList.remove("hcAreaS", "hcAreaM", "hcAreaL", "hcAreaBig"), Ft.el.classList.add("hcArea" + G.toUpperCase()), Ft.el.classList.toggle("hcAreaBig", qe), Ft.el.style.setProperty("--hc-k", String(k)), Ft.el.classList.add("tfBoardItem"), Ft.el.dataset.rows = Ci > 1 ? 10 : 5, Ft.el.dataset.cols = Xo, Ft.el.toggleAttribute("data-narrow", !1);
        for (let Ai = 0; ; Ai++) {
          const ml = [...Array(Math.max(0, Nt - Xo + 1)).keys()].find((gl) => [...Array(Xo).keys()].every((bl) => [...Array(Ci).keys()].every((Xu) => !de.has(Ai + Xu + "," + (gl + bl)))));
          if (ml != null) {
            [...Array(Xo).keys()].forEach((gl) => [...Array(Ci).keys()].forEach((bl) => de.add(Ai + bl + "," + (ml + gl)))), pe.push({ it: Ft, r: Ai, c: ml, sc: Xo, sr: Ci });
            break;
          }
        }
      });
      const Ne = Math.max(0, ...pe.map((Ft) => Ft.r + Ft.sr));
      ll && !a && !Bt && pe.forEach((Ft) => {
        for (; Ft.r + Ft.sr < Ne && !de.has(Ft.r + Ft.sr + "," + Ft.c) && Ft.sc === 1; )
          de.add(Ft.r + Ft.sr + "," + Ft.c), Ft.sr++;
      }), pe.forEach((Ft) => Object.assign(Ft.it.el.style, { width: Ft.sc * ke + (Ft.sc - 1) * c + "px", height: a ? "" : Ft.sr * Qe + (Ft.sr - 1) * c + "px" }));
      const Ko = [...Array(Ne)].map((Ft, Ta) => a ? 0 : Bt && Ta === 0 ? L : Qe);
      a ? pe.forEach((Ft) => {
        Ko[Ft.r] = Math.max(Ko[Ft.r], Ft.it.el.offsetHeight);
      }) : pe.forEach((Ft) => {
        Ft.it.el.style.height = Ko.slice(Ft.r, Ft.r + Ft.sr).reduce((Ta, qe) => Ta + qe, 0) + (Ft.sr - 1) * c + "px";
      });
      const kn = [];
      let ko = Uu(dt);
      return Ko.forEach((Ft, Ta) => {
        kn[Ta] = ko, ko += Ft + c;
      }), { h: ko - (Ne ? c : 0), places: pe.map((Ft) => ({ it: Ft.it, x: Ft.c * (ke + c), y: kn[Ft.r], w: Ft.sc * ke + (Ft.sc - 1) * c, h: Ko.slice(Ft.r, Ft.r + Ft.sr).reduce((Ta, qe) => Ta + qe, 0) + (Ft.sr - 1) * c })) };
    }, pl = new Map([...N.querySelectorAll(":scope > .hcFloor")].map((dt) => [dt.dataset.floor, dt])), fl = new Map([...N.querySelectorAll(":scope > .hcFloorBox")].map((dt) => [dt.dataset.floor, dt])), md = [], Yu = (dt, Nt, ke, de) => {
      if (!dt.name) return;
      let pe = pl.get(dt.id);
      pl.delete(dt.id), pe || (pe = Object.assign(document.createElement("div"), { className: "hcFloor" }), pe.dataset.floor = dt.id, N.appendChild(pe)), pe.dataset.sig !== dt.name && (pe.dataset.sig = dt.name, pe.innerHTML = '<h2 class="hcFloorName">' + P(dt.name) + "</h2>"), Object.assign(pe.style, { left: Nt + "px", top: ke + "px", width: de + "px" }), md.push(pe);
    }, Zu = (dt, Nt, ke, de, pe) => {
      let Ne = fl.get(dt.id);
      fl.delete(dt.id), Ne || (Ne = Object.assign(document.createElement("div"), { className: "hcFloorBox" }), Ne.dataset.floor = dt.id, Ne.setAttribute("aria-hidden", "true"), N.prepend(Ne)), Object.assign(Ne.style, { left: Nt + "px", top: ke + "px", width: de + "px", height: pe + "px" });
    }, Ku = (dt) => parseFloat(getComputedStyle(dt.cards[0].el).paddingLeft) || 0, ul = (dt, Nt, ke, de, pe = 0) => {
      Yu(dt, ke + pe, de, (Nt.w ?? e) - pe), Nt.places.forEach((Ne) => R(Ne.it, { x: ke + Ne.x, y: de + Ne.y, w: Ne.w, h: Ne.h }));
    };
    if (Aa.length && C.length && !Bt && (f += la.floorTop), Gu) {
      let dt = 0, Nt = f;
      Aa.forEach((ke) => {
        const de = { ...dl(ke, 1, Fe), w: Fe };
        dt && dt + Fe > Ee && (f = Nt + c + la.floorTop, dt = 0), ul(ke, de, Et + dt, f), Nt = Math.max(Nt, f + de.h), dt += Fe + c;
      }), f = Nt + c;
    } else if (zu) {
      const dt = Array(Ue).fill(f);
      Aa.forEach((Nt) => {
        const ke = Nt.cards.length + (cl && Nt.cards.length > 1 ? 3 : 0), de = a ? 2 : Math.min(Ue, Math.max(cl && Nt.cards.length > 1 ? 2 : 1, ke <= 3 ? ke : Math.ceil(ke / 2))), pe = de * (Fe + c) - c, Ne = Math.floor((pe - 2 * Ar - (de - 1) * c) / de), Ko = { ...dl(Nt, de, Ne), w: pe - 2 * Ar };
        let kn = 0, ko = 1 / 0;
        for (let qe = 0; qe + de <= Ue; qe++) {
          const Xo = Math.max(...dt.slice(qe, qe + de));
          Xo < ko && (ko = Xo, kn = qe);
        }
        const Ft = Et + kn * (Fe + c), Ta = Ko.h + 2 * Ar;
        Zu(Nt, Ft, ko, pe, Ta), ul(Nt, Ko, Ft + Ar, ko + Ar, Ku(Nt));
        for (let qe = kn; qe < kn + de; qe++) dt[qe] = ko + Ta + c;
      }), f = Math.max(f, ...dt);
    } else
      Aa.forEach((dt, Nt) => {
        Nt && (f += la.floorTop);
        const ke = dl(dt, Ue, Fe);
        ul(dt, { ...ke, w: Ee }, Et, f), f += ke.h + c;
      });
    Bt && (f = Math.max(f, At)), pl.forEach((dt) => dt.remove()), fl.forEach((dt) => dt.remove()), ge != null && ge.on || xs(null), N.style.height = Math.max(0, f - c) + "px", vs([...x.map((dt) => dt.el), ...C.map((dt) => dt.el), ...md, ...Aa.flatMap((dt) => dt.cards.map((Nt) => Nt.el))]), Ms(!1), t.forEach((dt) => [...dt.el.children].forEach((Nt) => Nt.toggleAttribute("inert", vo)));
    const hl = N.querySelector(".tfDash-favs>.activityRows");
    hl && (hl.classList.toggle("hcFadeList", !h), mc(hl)), requestAnimationFrame(() => g.classList.add("tfBoardReady")), t.forEach((dt) => ks.observe(dt.el)), xe();
  }
  const di = () => {
    ms || (ms = !0, requestAnimationFrame(() => {
      ms = !1, Pe();
    }));
  }, ks = new ResizeObserver(() => {
    $t || di();
  });
  function Yf(t, e, a) {
    const o = a + se, i = t * a + (t - 1) * se, c = e * Oa - se, l = se / 2, f = o / Math.max(1, Math.round(o / (Oa / 4))), h = Oa / 4, x = 6;
    let k = "";
    for (let v = 0; v <= t; v++) for (let _ = 0; _ <= e; _++) {
      const S = v * o - l, C = _ * Oa - l;
      k += "M" + (S - x) + " " + C + "H" + (S + x) + "M" + S + " " + (C - x) + "V" + (C + x);
    }
    return '<svg width="' + i + '" height="' + c + '" viewBox="0 0 ' + i + " " + c + '"><defs><pattern id="tfGridDots" patternUnits="userSpaceOnUse" x="' + -l + '" y="' + -l + '" width="' + f.toFixed(3) + '" height="' + h + '"><circle cx="0" cy="0" r="1.4"></circle><circle cx="' + f.toFixed(3) + '" cy="0" r="1.4"></circle><circle cx="0" cy="' + h + '" r="1.4"></circle><circle cx="' + f.toFixed(3) + '" cy="' + h + '" r="1.4"></circle></pattern></defs><rect class="tfGridDots" x="' + -l + '" y="' + -l + '" width="' + (i + se) + '" height="' + (c + se) + '" fill="url(#tfGridDots)"></rect><path class="tfGridCross" d="' + k + '"></path></svg>';
  }
  function Ms(t, e = [], a = /* @__PURE__ */ new Map(), o = 0, i = 1, c = hr) {
    N.querySelectorAll(".tfEditChips").forEach((k) => {
      (!t || !k.closest(".tfBoardItem")) && k.remove();
    }), N.querySelectorAll(".tfFavHides").forEach((k) => k.remove()), N.querySelectorAll(".tfBoardItem").forEach((k) => [...k.children].forEach((v) => {
      v.classList.contains("tfEditChips") || v.toggleAttribute("inert", t);
    }));
    let l = N.querySelector(".tfBoardCells"), f = N.querySelector(".tfBoardLand");
    if (!t)
      return l == null || l.remove(), f == null || f.remove(), Qa(), o;
    const h = li + Df;
    if (l || (l = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), l.setAttribute("aria-hidden", "true"), N.prepend(l)), l.style.top = Zo + "px", l.dataset.size !== i + "x" + h + "x" + c && (l.dataset.size = i + "x" + h + "x" + c, l.innerHTML = Yf(i, h, c)), o = Math.max(o, Zo + h * Oa - se), e.forEach((k) => {
      const v = k.el;
      !v || v.querySelector(":scope > .tfEditChips") || v.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + Rr + '</span><button class="tfEditChip" type="button" data-board-more="' + P(k.key) + '" aria-label="' + P(ka(k.key)) + ' options" aria-haspopup="menu">' + R0 + "</button></div>");
    }), $t && a.has($t.key)) {
      f || (f = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), N.appendChild(f));
      const k = a.get($t.key);
      Object.assign(f.style, { left: k.x + "px", top: k.y + "px", width: k.w + "px", height: k.h + "px" });
    } else f == null || f.remove();
    const x = N.querySelector(".tfDash-favs.tfBoardItem:not(.tfBoardHidden)");
    if (x) {
      const k = x.getBoundingClientRect();
      x.insertAdjacentHTML("beforeend", '<div class="tfFavHides">' + [...x.querySelectorAll('[data-k^="fav:"]')].map((v) => {
        const _ = v.getBoundingClientRect(), S = v.dataset.k.slice(4);
        return '<button class="tfFavHide" type="button" data-fav-hide="' + P(S) + '" aria-label="Hide ' + P(mt(S)) + ' from the dashboard" style="left:' + Math.round(_.right - k.left - 42) + "px;top:" + Math.round(_.top - k.top + (_.height - 32) / 2) + 'px">' + vp + "</button>";
      }).join("") + "</div>");
    }
    return o;
  }
  let Ss = "";
  function _s(t) {
    sa = t, t || ($t = null, go = bo = !1, Qa()), Pe(), t ? Ss = JSON.stringify(gt) : Ss && JSON.stringify(gt) !== Ss && Ma("Changes saved");
  }
  function Zf(t, e) {
    var V, L;
    Qa();
    const a = hn.get(t), { n: o } = mn(N.clientWidth), i = ae(), c = i.spans[t] ?? (O(t) ? 1 : 2);
    if (!a) return;
    const l = a.cols >= o, f = (G, E, wt) => '<button type="button" role="menuitem" data-board-act="' + G + '"' + (wt ? " disabled" : "") + ">" + E + "</button>", h = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    h.setAttribute("role", "menu"), h.setAttribute("aria-label", ka(t) + " options");
    const x = N.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]'), k = ic(t), v = mr(t), _ = '<div class="tfHeight" role="group" aria-label="Height"><span class="tfHeightLabel" aria-hidden="true">Height</span><div class="tfHeightTabs">' + nc.map((G, E) => '<button type="button" role="menuitemradio" aria-checked="' + (E + 1 === v) + '" aria-label="' + G + ", " + (E + 1) + (E ? " rows" : " row") + '" data-board-act="h:' + (E + 1) + '"' + (E < k ? "" : " disabled") + ">" + G + "</button>").join("") + "</div></div>", S = Bf.includes(t) || O(t) ? '<div class="tfHeight tfWidth" role="group" aria-label="Width"><span class="tfHeightLabel" aria-hidden="true">Width</span><div class="tfHeightTabs">' + Ef.map((G, E) => '<button type="button" role="menuitemradio" aria-checked="' + (E + 1 === Math.min(c, o)) + '" aria-label="' + G + ", " + (E + 1) + (E ? " columns" : " column") + '" data-board-act="w:' + (E + 1) + '"' + (E < o ? "" : " disabled") + ">" + G + "</button>").join("") + "</div></div>" : "", C = t === "radar" ? '<div class="tfHeight tfSource" role="group" aria-label="Source"><span class="tfHeightLabel" aria-hidden="true">Source</span><div class="tfSourceList">' + Wr().map(([G, E]) => '<button type="button" role="menuitemradio" aria-checked="' + (G === tr()) + '" data-board-act="src:' + P(G) + '">' + P(E) + "</button>").join("") + "</div></div>" : "";
    h.innerHTML = _ + S + C + (t === "energy" ? f("graph", (((V = i.opts.energy) == null ? void 0 : V.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + f("left", "Move left", l || a.col === 0) + f("right", "Move right", l || a.col + a.cols >= o) + f("up", "Move up", a.row <= 0) + f("down", "Move down") + (x ? f("remove", "Remove") : f("hide", "Hide")), N.appendChild(h);
    const R = Math.min(a.x + a.w - h.offsetWidth, N.clientWidth - h.offsetWidth);
    Object.assign(h.style, { left: Math.max(0, R) + "px", top: a.y + 28 + "px" }), $e = { key: t, menu: h, opener: e }, (L = h.querySelector("button:not([disabled])")) == null || L.focus();
  }
  function Qa(t) {
    if (!$e) return;
    const { menu: e, opener: a } = $e;
    $e = null, e.remove(), t && (a == null || a.focus());
  }
  const wn = () => Object.fromEntries([...hn].map(([t, e]) => [t, { col: e.col, row: e.row }]));
  function Kf(t, e) {
    var f, h, x;
    if (e === "remove") {
      Qa(), Xf(t);
      return;
    }
    const a = gt, o = ae(), i = wn(), c = i[t] || { col: 0, row: 0 };
    e.startsWith("w:") && (o.spans = { ...o.spans, [t]: e === "w:full" ? "full" : Number(e.slice(2)) }), e.startsWith("h:") && (o.opts = { ...o.opts, [t]: { ...o.opts[t] || {}, h: Number(e.slice(2)), tall: void 0 } }), e.startsWith("src:") && (o.opts = { ...o.opts, radar: { ...o.opts.radar || {}, source: e.slice(4) } }), e === "graph" && (o.opts = { ...o.opts, energy: { ...o.opts.energy || {}, graph: (((f = o.opts.energy) == null ? void 0 : f.graph) || "above") === "above" ? "below" : "above" } }), e === "left" && (i[t] = { ...c, col: c.col - 1 }), e === "right" && (i[t] = { ...c, col: c.col + 1 }), e === "up" && (i[t] = { ...c, row: c.row - 1 }), e === "down" && (i[t] = { ...c, row: c.row + 1 }), e === "hide" && (o.hidden = [.../* @__PURE__ */ new Set([...o.hidden, t])]), ["left", "right", "up", "down"].includes(e) && ($t = { key: t, col: i[t].col, row: i[t].row }), Pn(o, i), $t && (Pe(), $t = null, Pn(ae(), wn()));
    const l = /^[hw]:/.test(e) && !je() && ($e == null ? void 0 : $e.menu.querySelector('[data-board-act="' + CSS.escape(e) + '"]'));
    if (l) {
      const k = $e;
      l.parentElement.querySelectorAll("[aria-checked]").forEach((v) => v.setAttribute("aria-checked", String(v === l))), setTimeout(() => {
        $e === k && Qa();
      }, Me.tabs.dur);
    } else Qa();
    e === "graph" && (ba.delete("dash:energy"), Le()), e.startsWith("src:") && ((h = ve == null ? void 0 : ve.get("radar")) == null || h.refresh(), we == null || we.refresh()), e.startsWith("h:") && t.includes(".") && Le(), Pe(), e !== "hide" ? (x = N.querySelector('[data-board-more="' + CSS.escape(t) + '"]')) == null || x.focus() : Ma(ka(t) + " hidden", gi(a));
  }
  const bc = (t) => {
    var e;
    return Ro.includes(t) && !(((e = gt.dash) == null ? void 0 : e.cells) || {})[t] ? " added" : " put back";
  };
  function Cs(t) {
    const e = ae(), a = ka(t) + bc(t);
    gn({ ...e, hidden: e.hidden.filter((o) => o !== t) }), Pe(), Ma(a);
  }
  const pi = () => ae().tiles || [...N.querySelectorAll(".tfDashTiles > [data-k]")].map((t) => t.dataset.k).filter((t) => !ae().hidden.includes(t));
  function wc(t, e) {
    const a = ae();
    Pn({ ...a, tiles: t, hidden: a.hidden.filter((o) => !o.includes(".")) }, e), Le(), xe();
  }
  const vc = (t) => {
    wc([...pi().filter((e) => e !== t), t], wn()), Ma(ka(t) + " added"), tu(t);
  }, Xf = (t) => {
    const e = gt, a = wn();
    delete a[t], wc(pi().filter((o) => o !== t), a), Ma(ka(t) + " removed", gi(e));
  };
  let As = 0;
  function Ma(t, e = null) {
    var l;
    const a = p("toast");
    if (!a) return;
    if (cm(a, t), e) {
      const f = Object.assign(document.createElement("button"), { type: "button", className: "toastAction", textContent: "Undo" });
      f.addEventListener("click", () => {
        clearTimeout(As), a.classList.remove("show", "withAction"), e();
      }), a.appendChild(f);
    }
    const o = g.getBoundingClientRect(), i = (l = n.querySelector(".bottomNav")) == null ? void 0 : l.getBoundingClientRect(), c = Yt.classList.contains("open") && !to ? Math.min(o.right, Yt.getBoundingClientRect().left) : o.right;
    a.style.left = (o.left + c) / 2 + "px", a.style.bottom = (i != null && i.height ? window.innerHeight - i.top + 12 : 26) + "px", a.classList.add("tfToast", "show"), a.classList.toggle("withAction", !!e), dm(a), clearTimeout(As), As = setTimeout(() => a.classList.remove("show", "withAction"), e ? 5e3 : Me.confirm.stay);
  }
  const $f = 700, Jf = 1e3, ca = Object.assign(document.createElement("div"), { className: "tfTooltip", hidden: !0 });
  ca.setAttribute("role", "tooltip"), ca.setAttribute("aria-hidden", "true"), g.appendChild(ca);
  let fi = null, br = 0, Hn = 0, yc = -1 / 0;
  const Ts = (t) => {
    if (t.nodeType !== 1) return !1;
    const e = getComputedStyle(t);
    return e.textOverflow === "ellipsis" && t.scrollWidth > t.clientWidth + 1 || e.webkitLineClamp !== "none" && t.scrollHeight > t.clientHeight + 1;
  }, Qf = (t) => {
    for (let e = t; e && e !== g; e = e.parentElement) if (Ts(e)) return e;
    return null;
  };
  function xc(t, e) {
    clearTimeout(br), clearTimeout(Hn);
    const a = () => {
      if (!t.isConnected) return;
      fi = t, ca.textContent = e, ca.hidden = !1;
      const o = t.getBoundingClientRect(), i = ca.getBoundingClientRect(), c = o.top - i.height - 8 >= 8 ? o.top - i.height - 8 : o.bottom + 8;
      ca.style.left = Math.max(8, Math.min(window.innerWidth - i.width - 8, o.left + o.width / 2 - i.width / 2)) + "px", ca.style.top = c + "px";
    };
    !ca.hidden || performance.now() - yc < Jf ? a() : br = setTimeout(a, $f);
  }
  function ui() {
    clearTimeout(br), clearTimeout(Hn), ca.hidden || (yc = performance.now()), ca.hidden = !0, fi = null;
  }
  n.addEventListener("pointerover", (t) => {
    if (t.pointerType === "touch") return;
    if (ca.contains(t.target)) {
      clearTimeout(Hn);
      return;
    }
    const e = Qf(t.target);
    if (e && Ut.names === "scroll" && e.matches(hi)) {
      Ls(e);
      return;
    }
    if (e) {
      e !== fi ? xc(e, e.textContent.trim()) : clearTimeout(Hn);
      return;
    }
    clearTimeout(br), clearTimeout(Hn), Hn = setTimeout(ui, 120);
  }), n.addEventListener("focusin", (t) => {
    var o;
    const e = t.target;
    if (!((o = e.matches) != null && o.call(e, ":focus-visible"))) return;
    let a = [e, ...e.querySelectorAll("*")].filter(Ts);
    Ut.names === "scroll" && (a.filter((i) => i.matches(hi)).forEach(Ls), a = a.filter((i) => !i.matches(hi))), a.length && xc(e, a.map((i) => i.textContent.trim()).join(" · "));
  }), n.addEventListener("focusout", (t) => {
    t.target === fi && ui();
  }), n.addEventListener("keydown", (t) => {
    t.key === "Escape" && !ca.hidden && (t.stopPropagation(), ui());
  }, !0), window.addEventListener("scroll", () => {
    (!ca.hidden || br) && ui();
  }, { capture: !0, passive: !0 });
  const hi = ".activityRowName,.activityRowMeta", mi = /* @__PURE__ */ new WeakSet();
  function Ls(t) {
    var a;
    if (Ut.names !== "scroll" || mi.has(t) || t.closest("[inert]") || (a = window.matchMedia) != null && a.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    mi.add(t);
    const e = () => Promise.all([t.closest(".hcAreaPanel"), t.closest(".panelExpanded")].filter(Boolean).flatMap((o) => o.getAnimations()).map((o) => o.finished.catch(() => {
    })));
    setTimeout(async () => {
      await e();
      const o = t.isConnected && !t.closest("[inert]") ? t.scrollWidth - t.clientWidth : 0;
      if (o < 2) {
        mi.delete(t);
        return;
      }
      const i = o / 30 * 1e3, c = i + 1e3 + i;
      t.style.textOverflow = "clip";
      const l = t.animate([
        { textIndent: "0px", offset: 0, easing: "ease-in-out" },
        { textIndent: -o + "px", offset: i / c },
        { textIndent: -o + "px", offset: (1e3 + i) / c, easing: "ease-in-out" },
        { textIndent: "0px", offset: 1 }
      ], { duration: c });
      l.onfinish = l.oncancel = () => {
        t.style.textOverflow = "", mi.delete(t);
      };
    }, 600);
  }
  const kc = new IntersectionObserver((t) => t.forEach((e) => {
    e.isIntersecting && !e.target.closest("[inert]") && (kc.unobserve(e.target), Ls(e.target));
  }), { threshold: 1 });
  let Ds = !1;
  new MutationObserver(() => {
    Ds || Ut.names !== "scroll" || (Ds = !0, setTimeout(() => {
      Ds = !1, n.querySelectorAll(hi).forEach((t) => {
        !t.dataset.glided && Ts(t) && (t.dataset.glided = "1", kc.observe(t));
      });
    }, 300));
  }).observe(n, { childList: !0, subtree: !0 });
  const gi = (t) => () => {
    gt = t, Oe(), Le(), Pe(), xe();
  };
  function tu(t) {
    const e = () => N.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]');
    setTimeout(() => {
      var l;
      const a = e();
      if (!a) return;
      const o = (l = window.matchMedia) == null ? void 0 : l.call(window, "(prefers-reduced-motion: reduce)").matches, i = a.getBoundingClientRect();
      (i.top < 0 || i.bottom > window.innerHeight) && a.scrollIntoView({ behavior: o ? "auto" : "smooth", block: "center" });
      const c = (f) => "0 0 0 4px color-mix(in srgb,var(--primary) " + f + "%,transparent),0 0 24px color-mix(in srgb,var(--primary) " + f + "%,transparent)";
      a.animate([{ boxShadow: c(55) }, { boxShadow: c(0) }], { duration: 1500, easing: o ? "steps(1, end)" : "ease-out" });
    }, eu(t) ? 260 : 0);
  }
  function eu(t) {
    const e = hn.get(t);
    if (!e || !Yt.classList.contains("open") || to) return !1;
    const { n: a, w: o } = mn(N.clientWidth), i = Yt.getBoundingClientRect().left - N.getBoundingClientRect().left, c = (h) => h * (o + se) + e.cols * o + (e.cols - 1) * se <= i;
    if (c(e.col)) return !1;
    const l = /* @__PURE__ */ new Set();
    hn.forEach((h, x) => {
      if (x !== t) for (let k = h.row; k < h.row + h.rows; k++) for (let v = h.col; v < h.col + h.cols; v++) l.add(v + "," + k);
    });
    const f = (h, x) => {
      for (let k = x; k < x + e.rows; k++) for (let v = h; v < h + e.cols; v++) if (l.has(v + "," + k)) return !1;
      return !0;
    };
    for (let h = 0; h <= li; h++) for (let x = 0; x + e.cols <= a && c(x); x++)
      if (f(x, h))
        return Pn(ae(), { ...wn(), [t]: { col: x, row: h } }), Pe(), !0;
    return !1;
  }
  const Mc = /^(light|switch|cover|climate|fan|lock|valve|media_player|humidifier|vacuum|scene|script|alarm_control_panel|water_heater|input_boolean)\./, au = [["page", "Page"], ["cards", "Cards"], ["areas", "Areas"], ["favs", "Favourites"]];
  let Bs = "page";
  const ou = (t) => t.matches('[data-tray="welcome"],[data-tray="phone"]') ? "page" : t.querySelector("[data-room-add]") ? "areas" : t.querySelector('[data-tray="favs"]') ? "favs" : "cards";
  function Sc(t = !1) {
    const e = Yt.querySelector(".tfTrayInner"), a = Yt.querySelector(".hcTrayTabs"), o = a.querySelector(".rubberIndicator");
    let i = !0;
    e.querySelectorAll(":scope>.tfTraySection").forEach((l) => {
      l.hidden = ou(l) !== Bs, l.classList.toggle("hcFirst", !l.hidden && i), l.hidden || (i = !1);
    }), a.querySelectorAll("[data-tray-tab]").forEach((l) => {
      const f = l.dataset.trayTab === Bs;
      l.classList.toggle("active", f), l.setAttribute("aria-selected", String(f));
    });
    const c = a.querySelector(".tab.active");
    c != null && c.offsetWidth && (o.style.transition = "none", t ? ji(o, o.offsetLeft, o.offsetWidth, c.offsetLeft, c.offsetWidth) : (o.style.left = c.offsetLeft + "px", o.style.width = c.offsetWidth + "px"));
  }
  const Yt = Object.assign(document.createElement("aside"), { className: "tfEditTray" });
  Yt.setAttribute("aria-label", "Edit custom dashboard"), Yt.innerHTML = '<button class="tfTrayTuck" type="button" data-tray-tuck></button><div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit custom dashboard</div><button class="pill" type="button" data-tray-done>Done</button></div><div class="tabs rubberTabs hcTrayTabs" role="tablist" aria-label="Edit custom dashboard"><div class="rubberIndicator" aria-hidden="true"></div>' + au.map(([t, e], a) => '<button class="tab segBtn' + (a ? "" : " active") + '" type="button" role="tab" aria-selected="' + !a + '" data-tray-tab="' + t + '">' + e + "</button>").join("") + '</div><section class="tfTraySection" data-tray="welcome"></section><section class="tfTraySection" data-tray="cards"></section><section class="tfTraySection" data-tray="weather"></section><section class="tfTraySection"><div class="sectionLabel">Tiles</div><p class="tfTrayNote">Remove a tile from its ⋯.</p><button class="pill tfTrayAdd hcAddBtn" type="button" data-tile-add aria-expanded="false">' + Oi + '<span>Add tile</span></button><div class="tfTrayPick" data-pick="tiles" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-tile-search><ul class="tfTrayList" data-tray="tilepick"></ul></div></section><section class="tfTraySection"><div class="sectionLabel">Areas</div><p class="tfTrayNote">Which areas the Areas card shows. Drag to change their order, here and on Home.</p><ul class="tfTrayList hcHeList" data-tray="areas"></ul><button class="pill tfTrayAdd hcAddBtn" type="button" data-room-add aria-expanded="false">' + Oi + '<span>Add area</span></button><ul class="tfTrayList" data-tray="roompick" hidden></ul></section><section class="tfTraySection" data-tray="phone"></section><section class="tfTraySection"><div class="sectionLabel">Favourites</div><ul class="tfTrayList" data-tray="favs"></ul><button class="pill tfTrayAdd hcAddBtn" type="button" data-fav-add aria-expanded="false">' + Oi + '<span>Add favourite</span></button><div class="tfTrayPick" data-pick="favs" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-fav-search><ul class="tfTrayList" data-tray="pick"></ul></div><div class="toggleRow tfTraySuggest" data-tray="favtitle"></div><div class="toggleRow tfTraySuggest" data-tray="suggest"></div></section></div>', g.appendChild(Yt);
  let to = !1, go = !1, bo = !1, wr = !1, Je = null, wo = !1;
  const Es = {}, Ia = (t, e) => {
    if (Es[t] === e) return;
    Es[t] = e;
    const a = Yt.querySelector('[data-tray="' + t + '"]');
    a.innerHTML = e, Ka(a);
  }, Rs = (t, e) => '<span class="tfTrayName"><span class="activityRowName">' + P(mt(t)) + '</span><span class="activityRowMeta">' + P(e) + "</span></span>", nu = (t, e, a) => '<li class="tfTrayFav' + (e ? " off" : "") + '" data-tray-fav="' + P(t) + '"><span class="tfTrayGrip" aria-hidden="true">' + Rr + '</span><span class="tfIcon"' + ue(t, ua(t)) + "></span>" + Rs(t, e ? "Hidden" + (Ct.get(t) ? " · " + Ct.get(t) : "") : Ct.get(t) || Te(t)) + '<button class="tfTrayBtn" type="button" data-fav-eye="' + P(t) + '" aria-pressed="' + !e + '" aria-label="' + (e ? "Show " : "Hide ") + P(mt(t)) + ' on the dashboard">' + (e ? vp : P0) + "</button>" + (a ? '<button class="tfTrayBtn" type="button" data-fav-remove="' + P(t) + '" aria-label="Remove ' + P(mt(t)) + ' from favourites">' + Nl + "</button>" : "<span></span>") + "</li>";
  function Ps(t, e, a, o) {
    const i = t.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return Object.keys(M).filter((l) => e(l) && !a.has(l) && M[l].state !== "unavailable").filter((l) => {
      const f = (mt(l) + " " + (Ct.get(l) || "") + " " + l).toLowerCase();
      return i.every((h) => f.includes(h));
    }).sort((l, f) => (Ct.get(l) || "~").localeCompare(Ct.get(f) || "~") || mt(l).localeCompare(mt(f))).slice(0, 40).map((l) => '<li><button class="tfTrayPickItem" type="button" ' + o + '="' + P(l) + '"><span class="tfIcon"' + ue(l, ua(l)) + "></span>" + Rs(l, Ct.get(l) || "—") + "</button></li>").join("") || '<li class="tfTrayNote">Nothing matches.</li>';
  }
  const ru = "https://www.home-assistant.io/dashboards/", _c = {
    welcome: ["Welcome message", "<p>Shows a <strong>greeting</strong> above your home's name: good morning, afternoon or evening, then your name.</p>"],
    weather: ["Weather", "<p>The forecast card: now, the next hours in a sentence and the week ahead. Its <strong>Now</strong> opens the Weather page.</p>"],
    energy: ["Energy today", "<p>What your home has used and made today, hour by hour, with <strong>Electricity</strong>, <strong>Solar</strong>, <strong>Gas</strong> and <strong>Water</strong> under it. From your Energy dashboard.</p>"],
    favs: ["Favourite entities", "<p>The devices you use most, at the top of Home.</p><ul><li><strong>Drag</strong> one to change the order</li><li>Press <strong>×</strong> to take it off</li></ul>"],
    suggest: ["Suggested entities", "<p>Fills Favourites with devices you often use, after your own. They change as you use your home.</p>"],
    sums: ["Summaries", "<p>Each summary sums up one kind of thing across your home, like <strong>Lights</strong>: how many are on.</p><ul><li>Switch one off to hide it</li><li><strong>Drag</strong> one to change the order</li></ul>"]
  }, ye = Object.assign(document.createElement("aside"), { className: "tfEditTray hcHomeTray" });
  ye.setAttribute("aria-label", "Edit Home page"), ye.toggleAttribute("inert", !0);
  let vo = !1, Fa = !1, Hs = "", Ns = null, bi = "page";
  function Os(t, e) {
    const a = ye.querySelector(".hcTrayTabs"), o = a == null ? void 0 : a.querySelector(".rubberIndicator"), i = a == null ? void 0 : a.querySelector(".tab.active");
    if (!(i != null && i.offsetWidth)) {
      requestAnimationFrame(() => {
        var c;
        return ((c = ye.querySelector(".hcTrayTabs .tab.active")) == null ? void 0 : c.offsetWidth) && Os(t, e);
      });
      return;
    }
    o.style.transition = "none", t && e ? ji(o, e.left, e.width, i.offsetLeft, i.offsetWidth) : (o.style.left = i.offsetLeft + "px", o.style.width = i.offsetWidth + "px");
  }
  const vn = (t) => '<button class="hcInfoBtn" type="button" data-info="' + t + '" aria-expanded="false" aria-label="About ' + P(_c[t][0]) + '">' + yp + "</button>", Sa = (t, e, a) => '<button class="switch' + (t ? " on" : "") + '" type="button" role="switch" aria-checked="' + t + '" aria-label="' + P(e) + '" ' + a + "></button>", Is = (t) => '<button class="tfTrayBtn hcHeGrip" type="button" data-he-grip aria-label="Move ' + P(t) + '. Use the up and down arrows">' + Rr + "</button>", Cc = () => {
    var t;
    return ((t = gt.home) == null ? void 0 : t.sumsWidth) === "fit";
  }, wi = () => {
    var t;
    return ((t = gt.home) == null ? void 0 : t.favsAs) === "strip";
  }, vr = (t, e, a, o) => '<div class="hcHeLine hcHeChoiceLine"><span class="activityRowName">' + t + '</span><div class="themeChoice hcHeChoice" role="group" aria-label="' + P(t) + '">' + o.map(([i, c]) => '<button class="wxLayoutBtn" type="button" ' + e + '="' + i + '" aria-pressed="' + (a === i) + '">' + c + "</button>").join("") + "</div></div>", Ac = () => fn(!0).filter((t) => Br[t.key]).map((t) => t.key);
  function Nn() {
    var h, x, k, v, _, S;
    if (!vo) return;
    const t = J(), e = (C) => '<li class="hcHeRow" data-he-id="' + P(C) + '">' + Is(mt(C)) + '<span class="tfIcon"' + ue(C, ua(C)) + "></span>" + Rs(C, Ct.get(C) || Te(C)) + '<button class="tfTrayBtn" type="button" data-he-remove="' + P(C) + '" aria-label="Take ' + P(mt(C)) + ' off Favourites">' + Nl + "</button></li>", a = (C) => {
      const R = Br[C];
      return '<li class="hcHeRow hcHeSum" data-he-id="' + P(C) + '"' + (R.colour && Tn(R.colour) ? ' style="' + Tn(R.colour).slice(1) + '"' : "") + ">" + Is(R.name) + '<span class="tfIcon"' + ue("", R.icon, R.name) + '></span><span class="activityRowName">' + P(R.name) + "</span>" + Sa(Xe(C), R.name, 'data-he-sum="' + P(C) + '"') + "</li>";
    }, o = ((h = ye.querySelector("[data-he-search]")) == null ? void 0 : h.value) || "", i = [["page", "Page"], ["favs", "Favourites"], ["sums", "Summaries"], ["areas", "Areas"]], c = new Set(((x = gt.home) == null ? void 0 : x.areasOff) || []), l = (C) => '<li class="hcHeRow" data-he-id="' + P(C.id) + '">' + Is(C.name) + '<span class="tfIcon"><span class="tfAreaGlyph"' + ue("area:" + C.id, C.icon || "mdi:texture-box", C.name) + '></span></span><span class="activityRowName">' + P(C.name) + "</span>" + Sa(!c.has(C.id), "Show " + C.name + " on Home", 'data-he-area="' + P(C.id) + '"') + "</li>", f = {
      page: '<div class="hcHeLine"><span class="activityRowName">Welcome message</span>' + vn("welcome") + Sa(hs(), "Welcome message", "data-he-welcome") + "</div>" + // the weather card and Energy today, where the house has them
      (Ot() ? '<div class="hcHeLine"><span class="activityRowName">Weather</span>' + vn("weather") + Sa(!!((k = gt.home) != null && k.weather), "Weather", 'data-he-card="weather"') + "</div>" : "") + (Na != null && Na.length ? '<div class="hcHeLine"><span class="activityRowName">Energy today</span>' + vn("energy") + Sa(!!((v = gt.home) != null && v.energy), "Energy today", 'data-he-card="energy"') + "</div>" : "") + vr("Cards", "data-he-cards-as", uc(), [["stacked", "Stacked"], ["rows", "Rows"]]) + '<hr class="hcHeRule"><div class="hcHeLine"><span class="activityRowName">Group by floor</span>' + Sa(mo("byFloor"), "Group by floor", 'data-he-flag="byFloor"') + "</div>" + vr("Layout", "data-he-area-layout", ys(), [["rows", "Rows"], ["columns", "Columns"], ["bento", "Bento"]]) + (ys() === "bento" ? '<div class="hcHeLine"><span class="activityRowName">Floors as boxes</span>' + Sa(mo("bentoBoxes"), "Floors as boxes", 'data-he-flag="bentoBoxes"') + '</div><div class="hcHeLine"><span class="activityRowName">Mixed sizes</span>' + Sa(mo("bentoMixed"), "Mixed sizes", 'data-he-flag="bentoMixed"') + "</div>" : "") + vr("Area cards", "data-he-area-size", fc(), [["s", "Small"], ["m", "Medium"], ["l", "Large"]]),
      favs: '<div class="hcHeLine"><span class="activityRowName">Show favourites</span>' + Sa(((_ = gt.home) == null ? void 0 : _.favs) !== !1, "Show favourites", 'data-he-card="favs"') + '</div><hr class="hcHeRule"><div class="hcHeLabel"><span class="activityRowName">Favourite entities</span>' + vn("favs") + "</div>" + vr("Show as", "data-he-favs-as", wi() ? "strip" : "card", [["card", "Card"], ["strip", "Strip"]]) + (wi() ? "" : '<div class="hcHeLine"><span class="activityRowName">Title</span>' + Sa(mo("favsTitle"), "Title", 'data-he-flag="favsTitle"') + "</div>") + '<ul class="tfTrayList hcHeList" data-he-list="favs">' + (t.map(e).join("") || '<li class="tfTrayNote">No favourites yet.</li>') + '</ul><button class="pill tfTrayAdd hcAddBtn" type="button" data-he-add aria-expanded="' + Fa + '">' + Oi + '<span>Add favourite</span></button><div class="tfTrayPick" data-he-pick' + (Fa ? "" : " hidden") + '><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-he-search value="' + P(o) + '"><ul class="tfTrayList">' + (Fa ? Ps(o, (C) => Mc.test(C), new Set(t), "data-he-pick-id") : "") + '</ul></div><hr class="hcHeRule"><div class="hcHeLine"><span class="activityRowName">Suggested entities</span>' + vn("suggest") + Sa(jt(), "Suggested entities", "data-he-suggest") + "</div>",
      sums: '<div class="hcHeLine"><span class="activityRowName">Show summaries</span>' + vn("sums") + Sa(((S = gt.home) == null ? void 0 : S.sums) !== !1, "Show summaries", 'data-he-card="sums"') + "</div>" + vr("Width", "data-he-sums-width", Cc() ? "fit" : "match", [["match", "Match the cards"], ["fit", "Fit the summaries"]]) + '<hr class="hcHeRule"><ul class="tfTrayList hcHeList" data-he-list="sums">' + Ac().map(a).join("") + "</ul>",
      areas: '<p class="tfTrayNote">Which areas show on Home. Drag to change their order, here and on the custom dashboard.</p><ul class="tfTrayList hcHeList" data-he-list="areas">' + gs().map(l).join("") + "</ul>"
    };
    ye.querySelector("[data-he-body]").innerHTML = // the note about the areas page first (Matt, 12 Nov: "to the top of the rollover"), as Home Assistant's dialog has it
    '<p class="tfTrayNote hcHeAreasNote">You can rearrange your floors and areas in the order that best represents your house on the <button type="button" class="hcHeLink" data-path="/config/areas/dashboard">areas page</button>.</p><div class="tabs rubberTabs hcTrayTabs" role="tablist" aria-label="Edit Home page"><div class="rubberIndicator" aria-hidden="true"></div>' + i.map(([C, R]) => '<button class="tab segBtn' + (C === bi ? " active" : "") + '" type="button" role="tab" aria-selected="' + (C === bi) + '" data-he-tab="' + C + '">' + R + "</button>").join("") + '</div><div class="hcHeTabBody" role="tabpanel">' + f[bi] + "</div>", Os(!1), Ka(ye);
  }
  const On = (t) => {
    gt = { ...gt, ...t }, Oe(), Le(), Nn();
  }, _a = (t) => On({ home: { ...gt.home || {}, ...t } });
  function Fs(t) {
    yr(), vo = t, Fa = !1, ye.classList.toggle("open", t), ye.toggleAttribute("inert", !t), g.classList.toggle("hcHomeEditing", t), w && N && Pe();
    const e = p("dashEditNav"), a = ye.querySelector(".tfTrayHead");
    e && t && (Ns = e.parentElement, a.appendChild(e)), e && !t && Ns && Ns.appendChild(e), e && (e.classList.toggle("active", t), e.setAttribute("aria-pressed", String(t)), e.setAttribute("aria-label", t ? "Done editing Home" : "Edit Home page"), e.title = t ? "Done" : "Edit", e.innerHTML = t ? kp : Ii), t ? (Hs = JSON.stringify(gt), Nn()) : Hs && JSON.stringify(gt) !== Hs && Ma("Changes saved");
  }
  ye.innerHTML = '<div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit Home page</div></div><div class="hcHeBody" data-he-body></div></div>', g.appendChild(ye);
  let yo = null;
  const qa = Object.assign(document.createElement("div"), { className: "card hcInfoPop", hidden: !0 });
  qa.setAttribute("role", "dialog"), g.appendChild(qa);
  function yr() {
    yo && (yo.setAttribute("aria-expanded", "false"), yo = null, qa.hidden = !0);
  }
  function Tc(t) {
    const e = yo;
    if (yr(), e === t) return;
    const [a, o] = _c[t.dataset.info];
    qa.setAttribute("aria-label", a), qa.innerHTML = '<div class="hcInfoTitle">' + P(a) + '</div><div class="hcInfoText">' + o + '</div><a class="hcInfoMore" href="' + ru + '" target="_blank" rel="noopener">Learn more</a>', qa.hidden = !1, yo = t, t.setAttribute("aria-expanded", "true");
    const i = t.getBoundingClientRect(), c = qa.offsetWidth, l = qa.offsetHeight;
    qa.style.left = Math.max(8, Math.min(innerWidth - c - 8, i.left + i.width / 2 - c / 2)) + "px", qa.style.top = (i.bottom + 8 + l > innerHeight - 8 ? Math.max(8, i.top - 8 - l) : i.bottom + 8) + "px";
  }
  n.addEventListener("pointerdown", (t) => {
    yo && !t.composedPath().some((e) => e === qa || e === yo) && yr();
  }, !0), n.addEventListener("keydown", (t) => {
    var e;
    if (t.key === "Escape") {
      if (yo) {
        t.stopPropagation();
        const a = yo;
        yr(), a.focus();
        return;
      }
      if (Fa) {
        t.stopPropagation(), Fa = !1, Nn();
        return;
      }
      vo && (t.stopPropagation(), Fs(!1), (e = p("dashEditNav")) == null || e.focus());
    }
  }, !0);
  const iu = (t) => t.dataset.heList === "favs" ? J() : t.dataset.heList === "areas" ? gs().map((e) => e.id) : Ac(), Lc = (t, e) => t.dataset.heList === "favs" ? On({ favourites: e }) : t.dataset.heList === "areas" ? (On({ areaOrder: e }), Pe()) : _a({ sumOrder: e });
  ye.addEventListener("keydown", (t) => {
    var f;
    const e = t.target.closest("[data-he-grip]");
    if (!e || !["ArrowUp", "ArrowDown"].includes(t.key)) return;
    t.preventDefault();
    const a = e.closest("[data-he-id]"), o = a.parentElement, i = iu(o), c = i.indexOf(a.dataset.heId), l = c + (t.key === "ArrowUp" ? -1 : 1);
    l < 0 || l >= i.length || (i.splice(l, 0, i.splice(c, 1)[0]), Lc(o, i), (f = ye.querySelector('[data-he-list="' + o.dataset.heList + '"] [data-he-id="' + CSS.escape(a.dataset.heId) + '"] [data-he-grip]')) == null || f.focus());
  }), ye.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-he-grip]");
    if (!e || t.button !== 0) return;
    const a = e.closest("[data-he-list]"), o = a.dataset.heList;
    Vs(t, e.closest("[data-he-id]"), "heId", (i) => Lc(a, i), (i) => ye.querySelector('[data-he-list="' + o + '"] [data-he-id="' + CSS.escape(i) + '"]'));
  }), ye.addEventListener("input", (t) => {
    if (t.target.matches("[data-he-search]")) {
      const e = t.target.selectionStart;
      Nn();
      const a = ye.querySelector("[data-he-search]");
      a.focus(), a.setSelectionRange(e, e);
    }
  }), ye.addEventListener("click", (t) => {
    var R, V, L;
    const e = t.target, a = e.closest("[data-info]");
    if (a) {
      Tc(a);
      return;
    }
    const o = e.closest("[data-he-tab]");
    if (o) {
      const G = ye.querySelector(".hcTrayTabs .rubberIndicator"), E = { left: G.offsetLeft, width: G.offsetWidth };
      bi = o.dataset.heTab, Fa = !1, yr(), Nn(), Os(!0, E), ye.querySelector(".tfTrayInner").scrollTop = 0;
      return;
    }
    if (e.closest("[data-he-welcome]")) {
      _a({ welcome: !hs() });
      return;
    }
    const i = e.closest("[data-he-card]");
    if (i) {
      const G = i.dataset.heCard, E = ["sums", "favs"].includes(G) ? ((R = gt.home) == null ? void 0 : R[G]) !== !1 : !!((V = gt.home) != null && V[G]);
      _a({ [G]: !E });
      return;
    }
    const c = e.closest("[data-he-favs-as]");
    if (c) {
      _a({ favsAs: c.dataset.heFavsAs });
      return;
    }
    const l = e.closest("[data-he-sums-width]");
    if (l) {
      _a({ sumsWidth: l.dataset.heSumsWidth });
      return;
    }
    const f = e.closest("[data-he-area-size]");
    if (f) {
      _a({ areaSize: f.dataset.heAreaSize });
      return;
    }
    const h = e.closest("[data-he-area-layout]");
    if (h) {
      _a({ areaLayout: h.dataset.heAreaLayout });
      return;
    }
    const x = e.closest("[data-he-cards-as]");
    if (x) {
      _a({ cardsAs: x.dataset.heCardsAs });
      return;
    }
    const k = e.closest("[data-he-flag]");
    if (k) {
      const G = k.dataset.heFlag;
      _a({ [G]: !mo(G) }), G === "favsTitle" && Wa();
      return;
    }
    if (e.closest("[data-he-suggest]")) {
      On({ suggest: !jt() });
      return;
    }
    const v = e.closest("[data-he-area]");
    if (v) {
      const G = new Set(((L = gt.home) == null ? void 0 : L.areasOff) || []), E = v.dataset.heArea;
      G.has(E) ? G.delete(E) : G.add(E), _a({ areasOff: [...G] });
      return;
    }
    const _ = e.closest("[data-he-sum]");
    if (_) {
      const G = _.dataset.heSum, E = !Xe(G), wt = gt.home || {};
      _a(mp.includes(G) ? { shownSums: E ? [...wt.shownSums || [], G] : (wt.shownSums || []).filter((Wt) => Wt !== G) } : { hiddenSums: E ? (wt.hiddenSums || []).filter((Wt) => Wt !== G) : [...wt.hiddenSums || [], G] });
      return;
    }
    const S = e.closest("[data-he-remove]");
    if (S) {
      On({ favourites: J().filter((G) => G !== S.dataset.heRemove) });
      return;
    }
    if (e.closest("[data-he-add]")) {
      Fa = !Fa, Nn(), Fa && ye.querySelector("[data-he-search]").focus({ preventScroll: !0 });
      return;
    }
    const C = e.closest("[data-he-pick-id]");
    C && (Fa = !1, ye.querySelector("[data-he-search]").value = "", On({ favourites: [...J(), C.dataset.hePickId] }));
  });
  function xe() {
    var k, v, _;
    const t = sa && g.classList.contains("tfBoard");
    if (Yt.classList.toggle("open", t), Yt.classList.toggle("tucked", t && to), Yt.toggleAttribute("inert", !t), t || (wo = !1), Hc(), !t) return;
    const e = Yt.querySelector("[data-tray-tuck]");
    e.innerHTML = to ? np : xp, e.setAttribute("aria-expanded", String(!to)), e.setAttribute("aria-label", to ? "Show the edit tray" : "Tuck the edit tray away");
    const a = ae().hidden.filter((S) => !ho.includes(S) && bn().some((C) => C.key === S)), o = (S, C) => '<button class="tfTrayCard" type="button" data-tray-card="' + P(S) + '" aria-label="' + P(ka(S)) + ": drag it onto the board, or press to " + C + '"><span class="tfTrayGrip" aria-hidden="true">' + Rr + "</span>" + P(ka(S)) + "</button>", i = a.filter((S) => !Jn.includes(S)), c = Jn.filter((S) => a.includes(S));
    Ia("welcome", '<div class="hcHeLine"><span class="activityRowName">Welcome message</span>' + vn("welcome") + '<button class="switch' + (ae().welcome ? " on" : "") + '" type="button" role="switch" aria-checked="' + !!ae().welcome + '" aria-label="Welcome message" data-dash-welcome></button></div><div class="hcHeLine"><span class="activityRowName">Show summaries</span><button class="switch' + ((k = gt.dash) != null && k.sumsOff ? "" : " on") + '" type="button" role="switch" aria-checked="' + !((v = gt.dash) != null && v.sumsOff) + '" aria-label="Show summaries" data-dash-sums></button></div>'), requestAnimationFrame(() => Sc(!1)), Ia("cards", '<div class="sectionLabel">Hidden and new cards</div>' + (i.length ? '<div class="tfTrayCards">' + i.map((S) => o(S, "put it back")).join("") + "</div>" : '<p class="tfTrayNote">Cards you hide, and new ones, wait here.</p>')), Ia("weather", '<div class="sectionLabel">Weather</div>' + (c.length ? `<p class="tfTrayNote">The Weather page's widgets. Drag one onto the board, or press to add it.</p><div class="tfTrayCards">` + c.map((S) => o(S, "add it")).join("") + "</div>" : '<p class="tfTrayNote">Every weather widget is on the board.</p>')), Ia("phone", '<div class="sectionLabel">Phone</div><p class="tfTrayNote">' + (ae().phone ? "Phones have an order of their own." : "Phones follow the board's order.") + '</p><button class="pill tfTrayAdd" type="button" data-phone-toggle aria-pressed="' + wo + '">' + (wo ? "Hide the phone" : "Show the phone") + "</button>");
    const l = new Set(gt.favHidden || []), f = J(), h = [...f, ...[...l].filter((S) => !f.includes(S) && M[S])];
    Ia("favs", h.map((S) => nu(S, l.has(S), f.includes(S))).join("") || '<li class="tfTrayNote">No favourites yet.</li>'), Yt.querySelector('[data-pick="tiles"]').hidden = !bo, Yt.querySelector("[data-tile-add]").setAttribute("aria-expanded", String(bo)), bo && Ia("tilepick", Ps(Yt.querySelector("[data-tile-search]").value, (S) => Gn.includes(S.split(".")[0]), new Set(pi()), "data-tile-pick")), Yt.querySelector('[data-tray="roompick"]').hidden = !wr, Yt.querySelector("[data-room-add]").setAttribute("aria-expanded", String(wr));
    const x = new Set(((_ = gt.dash) == null ? void 0 : _.areasOff) || []);
    if (Ia("areas", m(u).map((S) => '<li class="hcHeRow" data-area-id="' + P(S.id) + '"><button class="tfTrayBtn hcHeGrip" type="button" data-area-grip aria-label="Move ' + P(S.name) + '. Use the up and down arrows">' + Rr + '</button><span class="tfIcon"><span class="tfAreaGlyph"' + ue("area:" + S.id, S.icon || "mdi:texture-box", S.name) + '></span></span><span class="activityRowName">' + P(S.name) + '</span><button class="switch' + (x.has(S.id) ? "" : " on") + '" type="button" role="switch" aria-checked="' + !x.has(S.id) + '" aria-label="Show ' + P(S.name) + ' in the Areas card" data-area-on="' + P(S.id) + '"></button></li>').join("")), wr) {
      const S = new Set(pi());
      Ia("roompick", m(u).filter((C) => !S.has("room:" + C.id)).map((C) => '<li><button class="tfTrayPickItem" type="button" data-room-pick="' + P(C.id) + '"><span class="tfIcon"><span class="tfAreaGlyph"' + ue("area:" + C.id, C.icon || "mdi:texture-box", C.name) + '></span></span><span class="tfTrayName"><span class="activityRowName">' + P(C.name) + "</span></span></button></li>").join("") || '<li class="tfTrayNote">Every area is on the board.</li>');
    }
    Yt.querySelector('[data-pick="favs"]').hidden = !go, Yt.querySelector("[data-fav-add]").setAttribute("aria-expanded", String(go)), go && Ia("pick", Ps(Yt.querySelector("[data-fav-search]").value, (S) => Mc.test(S), new Set(J()), "data-fav-pick")), Ia("favtitle", '<div><strong>Title</strong><div class="status">Favourites, at the top of the card.</div></div><button class="switch' + (ci() ? " on" : "") + '" type="button" role="switch" aria-checked="' + ci() + '" data-fav-title aria-label="Title"></button>'), Ia("suggest", '<div><strong>Show suggestions</strong><div class="status">Fills the card after your favourites.</div></div><button class="switch' + (jt() ? " on" : "") + '" type="button" role="switch" aria-checked="' + jt() + '" data-fav-suggest aria-label="Show suggestions"></button>');
  }
  const yn = (t) => {
    gt = { ...gt, ...t }, Oe(), Le(), xe();
  };
  function Dc(t, e) {
    const a = gt, o = new Set(gt.favHidden || []);
    e ? o.delete(t) : o.add(t), yn({ favHidden: [...o] }), e ? Ma(mt(t) + " put back") : Ma(mt(t) + " hidden", gi(a));
  }
  const su = (t) => {
    const e = gt;
    yn({ favourites: J().filter((a) => a !== t), favHidden: (gt.favHidden || []).filter((a) => a !== t) }), Ma(mt(t) + " removed from favourites", gi(e));
  }, lu = (t) => {
    yn({ favourites: [...J().filter((e) => e !== t), t], favHidden: (gt.favHidden || []).filter((e) => e !== t) }), Ma(mt(t) + " added to favourites");
  };
  Yt.addEventListener("click", (t) => {
    var a, o, i;
    const e = t.target.closest("button");
    if (e) {
      if (e.hasAttribute("data-tray-tab")) {
        Bs = e.dataset.trayTab, Sc(!0), Yt.querySelector(".tfTrayInner").scrollTop = 0;
        return;
      }
      if (e.hasAttribute("data-tray-done")) _s(!1);
      else if (e.hasAttribute("data-info")) Tc(e);
      else if (e.hasAttribute("data-dash-sums"))
        gn({ ...bs(), hidden: bs().hidden.filter((c) => c !== "sums"), sumsOff: !((a = gt.dash) != null && a.sumsOff) }), Le(), xe();
      else if (e.hasAttribute("data-dash-welcome")) {
        const c = ae();
        gn({ ...c, welcome: !c.welcome }), Le(), xe();
      } else if (e.hasAttribute("data-tray-tuck"))
        to = !to, xe();
      else if (e.hasAttribute("data-phone-toggle"))
        wo = !wo, xe(), wo && ((o = da.querySelector("[data-phone-key]")) == null || o.focus({ preventScroll: !0 }));
      else if (e.dataset.trayCard)
        t.detail === 0 && (Cs(e.dataset.trayCard), xe());
      else if (e.dataset.favEye) Dc(e.dataset.favEye, e.getAttribute("aria-pressed") !== "true");
      else if (e.dataset.favRemove) su(e.dataset.favRemove);
      else if (e.hasAttribute("data-fav-add"))
        go = !go, xe(), go && Yt.querySelector("[data-fav-search]").focus({ preventScroll: !0 });
      else if (e.dataset.favPick) lu(e.dataset.favPick);
      else if (e.hasAttribute("data-tile-add"))
        bo = !bo, xe(), bo && Yt.querySelector("[data-tile-search]").focus({ preventScroll: !0 });
      else if (e.dataset.tilePick) vc(e.dataset.tilePick);
      else if (e.hasAttribute("data-room-add"))
        wr = !wr, xe();
      else if (e.dataset.roomPick) vc("room:" + e.dataset.roomPick);
      else if (e.dataset.areaOn) {
        const c = new Set(((i = gt.dash) == null ? void 0 : i.areasOff) || []);
        c.has(e.dataset.areaOn) ? c.delete(e.dataset.areaOn) : c.add(e.dataset.areaOn), gn({ ...ae(), areasOff: [...c] }), Le(), xe();
      } else e.hasAttribute("data-fav-suggest") ? yn({ suggest: !jt() }) : e.hasAttribute("data-fav-title") && (yn({ favsTitle: !ci() }), Wa());
    }
  }), Yt.addEventListener("input", (t) => {
    t.target.matches("[data-fav-search],[data-tile-search]") && xe();
  });
  const Bc = (t) => {
    gt = { ...gt, areaOrder: t }, Oe(), Le(), xe();
  };
  Yt.addEventListener("keydown", (t) => {
    var l, f, h;
    const e = (f = (l = t.target).closest) == null ? void 0 : f.call(l, "[data-area-grip]");
    if (!e || !["ArrowUp", "ArrowDown"].includes(t.key)) return;
    t.preventDefault();
    const a = e.closest("[data-area-id]").dataset.areaId, o = m(u).map((x) => x.id), i = o.indexOf(a), c = i + (t.key === "ArrowUp" ? -1 : 1);
    c < 0 || c >= o.length || (o.splice(c, 0, o.splice(i, 1)[0]), Bc(o), (h = Yt.querySelector('[data-area-id="' + CSS.escape(a) + '"] [data-area-grip]')) == null || h.focus());
  }), Yt.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-area-grip]");
    !e || t.button !== 0 || Vs(t, e.closest("[data-area-id]"), "areaId", Bc, (a) => Yt.querySelector('[data-area-id="' + CSS.escape(a) + '"]'));
  });
  const xo = window.visualViewport, qs = () => {
    if (!xo) return;
    const t = Math.max(0, Math.round(window.innerHeight - xo.height - xo.offsetTop));
    Yt.style.bottom = t > 40 ? t + "px" : "";
  };
  xo == null || xo.addEventListener("resize", qs), xo == null || xo.addEventListener("scroll", qs), Yt.addEventListener("focusin", (t) => {
    var e, a;
    (a = (e = t.target).matches) != null && a.call(e, "input") && setTimeout(() => {
      qs(), t.target.scrollIntoView({ block: "center", behavior: "smooth" });
    }, 350);
  }), Yt.addEventListener("keydown", (t) => {
    var a, o;
    const e = !!((o = (a = t.target).closest) != null && o.call(a, '[data-pick="tiles"],[data-tile-add]'));
    t.key !== "Escape" || !(e ? bo : go) || (t.stopPropagation(), e ? bo = !1 : go = !1, xe(), Yt.querySelector(e ? "[data-tile-add]" : "[data-fav-add]").focus({ preventScroll: !0 }));
  });
  function Ec(t, e, a, o) {
    t.preventDefault();
    const i = t.clientX, c = t.clientY;
    let l = null, f = 0;
    const h = Object.assign(document.createElement("div"), { className: "tfFavDrop" }), x = (v) => {
      if (!l) {
        if (Math.hypot(v.clientX - i, v.clientY - c) < 4) return;
        l = e.cloneNode(!0), l.classList.add("tfTrayGhost"), l.style.width = e.offsetWidth + "px", g.appendChild(l);
      }
      l.style.transform = "translate(" + (v.clientX - 24) + "px," + (v.clientY - 24) + "px)";
      const _ = !to && v.clientX >= Yt.getBoundingClientRect().left;
      if (a === "card") {
        const R = N.getBoundingClientRect(), { w: V } = mn(N.clientWidth);
        $t = !_ && v.clientX >= R.left && v.clientX <= R.right && v.clientY >= R.top + Zo ? { key: o, col: Math.max(0, Math.floor((v.clientX - R.left) / (V + se))), row: Math.max(0, Math.floor((v.clientY - R.top - Zo) / Oa)), fromTray: !0 } : null, f || (f = requestAnimationFrame(() => {
          f = 0, Pe();
        }));
        return;
      }
      const S = N.querySelector(".tfDash-favs"), C = S == null ? void 0 : S.getBoundingClientRect();
      if (Je = null, C && !_ && v.clientX >= C.left && v.clientX <= C.right && v.clientY >= C.top && v.clientY <= C.bottom) {
        let R = 1 / 0;
        S.querySelectorAll('[data-k^="fav:"]').forEach((V, L) => {
          const G = V.getBoundingClientRect(), E = Math.hypot(v.clientX - (G.left + G.width / 2), v.clientY - (G.top + G.height / 2));
          E < R && (R = E, Je = { i: L, r: G, after: v.clientX > G.left + G.width / 2 });
        }), Je || (Je = { i: 0, r: null, after: !1 });
      }
      Je != null && Je.r ? (h.isConnected || g.appendChild(h), Object.assign(h.style, { left: (Je.after ? Je.r.right : Je.r.left) - 2 + "px", top: Je.r.top + 8 + "px", height: Je.r.height - 16 + "px" })) : h.remove();
    }, k = () => {
      if (window.removeEventListener("pointermove", x), window.removeEventListener("pointerup", k), window.removeEventListener("pointercancel", k), cancelAnimationFrame(f), l == null || l.remove(), h.remove(), a === "card") {
        if (!l) Cs(o);
        else if ($t != null && $t.fromTray) {
          Pe();
          const R = ka(o) + bc(o), V = ae(), L = wn();
          $t = null, Pn({ ...V, hidden: V.hidden.filter((G) => G !== o) }, L), Ma(R);
        }
        $t = null, Pe(), Le(), xe();
        return;
      }
      if (!Je) return;
      const v = new Set(gt.favHidden || []);
      v.delete(o);
      const _ = J().filter((R) => R !== o), S = _.filter((R) => !v.has(R)), C = S[Math.min(Je.i + (Je.after ? 1 : 0), S.length)];
      _.splice(C ? _.indexOf(C) : _.length, 0, o), Je = null, yn({ favourites: _, favHidden: [...v] }), Ma(mt(o) + " put back");
    };
    window.addEventListener("pointermove", x), window.addEventListener("pointerup", k), window.addEventListener("pointercancel", k);
  }
  const Rc = {
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
  }, Pc = 136, cu = 288, du = 0.8, pu = { wx: "mdi:weather-partly-cloudy", areas: "mdi:home", favs: "mdi:star", act: "mdi:history", energy: "mdi:lightning-bolt", avg: "mdi:chart-line", aq: "mdi:air-filter", pollen: "mdi:flower-pollen", radar: "mdi:radar" }, da = Object.assign(document.createElement("aside"), { className: "tfMiniPhone" });
  da.setAttribute("aria-label", "Phone order"), da.innerHTML = '<div class="tfPhoneHead"><div class="activityTitle">Phone</div><button class="tfTrayBtn" type="button" data-phone-close aria-label="Close the phone">' + Nl + '</button></div><p class="tfTrayNote" data-phone="note"></p><div class="tfPhoneScreen"><div class="tfPhoneList" data-phone="list"></div></div>', g.appendChild(da);
  let Ws = "";
  function Hc() {
    var f;
    const t = wo && sa && g.classList.contains("tfBoard") && !to;
    if (da.classList.toggle("open", t), da.toggleAttribute("inert", !t), !t) return;
    const e = ws().filter((h) => !ae().hidden.includes(h.key)), a = e.length, o = (h) => Math.round(h * du * 10) / 10 + "px", i = (h, x) => {
      const k = h.el.classList.contains("tfDac"), v = h.tile ? k ? cu : Pc : Rc[h.key] || Pc;
      return '<button class="tfPhoneBlock' + (h.tile ? " tile" : "") + '" type="button" data-phone-key="' + P(h.key) + '" style="min-height:' + o(v) + '" aria-label="' + P(ka(h.key) + ", " + (x + 1) + " of " + a + ". Drag, or use the arrow keys, to move it") + '"><span class="tfIcon"' + (h.tile ? ue(h.key, ua(h.key)) : ue(h.key, pu[h.key])) + '></span><span class="tfPhoneName">' + P(ka(h.key)) + "</span></button>";
    }, c = '<div class="tfPhoneTitle">' + P(((f = N.querySelector(".tfDashTitle")) == null ? void 0 : f.textContent) || "") + '</div><div class="tfPhoneBlock fixed" style="min-height:' + o(Rc.sums) + '"><span class="tfPhoneName">' + P(ka("sums")) + "</span></div>" + e.map(i).join("");
    if (da.querySelector('[data-phone="note"]').innerHTML = ae().phone ? 'Phones use this order. <button class="tfLinkBtn" type="button" data-phone-reset>Follow the board</button>' : "Phones follow the board. Drag a card to give them an order of their own.", c === Ws) return;
    Ws = c;
    const l = da.querySelector('[data-phone="list"]');
    l.innerHTML = c, Ka(l);
  }
  function Nc(t, e) {
    var a;
    gn({ ...ae(), phone: t }), xe(), e && ((a = da.querySelector('[data-phone-key="' + CSS.escape(e) + '"]')) == null || a.focus({ preventScroll: !0 }));
  }
  const js = () => [...da.querySelectorAll("[data-phone-key]")].map((t) => t.dataset.phoneKey);
  function fu(t, e) {
    t.preventDefault();
    const a = e.parentElement, o = da.querySelector(".tfPhoneScreen"), i = js().join();
    e.classList.add("moving");
    const c = (f) => {
      const h = o.getBoundingClientRect();
      f.clientY > h.bottom - 40 ? o.scrollTop += 12 : f.clientY < h.top + 40 && (o.scrollTop -= 12);
      const x = [...a.querySelectorAll("[data-phone-key]")].find((_) => {
        const S = _.getBoundingClientRect();
        return _ !== e && f.clientX >= S.left && f.clientX <= S.right && f.clientY >= S.top && f.clientY <= S.bottom;
      });
      if (!x) return;
      const k = x.getBoundingClientRect(), v = x.classList.contains("tile") ? f.clientX < k.left + k.width / 2 : f.clientY < k.top + k.height / 2;
      a.insertBefore(e, v ? x : x.nextSibling);
    }, l = () => {
      window.removeEventListener("pointermove", c), window.removeEventListener("pointerup", l), window.removeEventListener("pointercancel", l), e.classList.remove("moving");
      const f = js();
      Ws = "", f.join() !== i ? Nc(f) : Hc();
    };
    window.addEventListener("pointermove", c), window.addEventListener("pointerup", l), window.addEventListener("pointercancel", l);
  }
  da.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-phone-key]");
    e && t.button <= 0 && fu(t, e);
  }), da.addEventListener("click", (t) => {
    var a;
    const e = t.target.closest("button");
    if (e != null && e.hasAttribute("data-phone-close"))
      wo = !1, xe(), (a = Yt.querySelector("[data-phone-toggle]")) == null || a.focus({ preventScroll: !0 });
    else if (e != null && e.hasAttribute("data-phone-reset")) {
      const { phone: o, ...i } = ae();
      gn(i), xe();
    }
  }), da.addEventListener("keydown", (t) => {
    var l, f, h, x;
    if (t.key === "Escape") {
      t.stopPropagation(), wo = !1, xe(), (l = Yt.querySelector("[data-phone-toggle]")) == null || l.focus({ preventScroll: !0 });
      return;
    }
    const e = (x = (h = (f = t.target).closest) == null ? void 0 : h.call(f, "[data-phone-key]")) == null ? void 0 : x.dataset.phoneKey, a = { ArrowUp: -1, ArrowLeft: -1, ArrowDown: 1, ArrowRight: 1 }[t.key];
    if (!e || !a) return;
    t.preventDefault();
    const o = js(), i = o.indexOf(e), c = i + a;
    c < 0 || c >= o.length || ([o[i], o[c]] = [o[c], o[i]], Nc(o, e));
  });
  function Vs(t, e, a, o, i) {
    t.preventDefault();
    const c = Me.drag, l = je(), f = 1 + c.lift / 100, h = [...e.parentElement.children].filter((Et) => Et.dataset[a]), x = h.indexOf(e), k = h.map((Et) => Et.getBoundingClientRect()), v = h.length - 1, _ = k[x].height + (h.length > 1 ? k[1].top - k[0].bottom : 0), S = (Et) => k[Et].top + k[Et].height / 2, C = t.clientY, R = k[0].top - k[x].top, V = k[v].top - k[x].top;
    let L = 0, G = 0, E = 0, wt = 1, Wt = x, Bt = 0;
    e.classList.add("hcListDragging"), h.forEach((Et) => {
      Et !== e && (Et.style.transition = l ? "none" : "transform " + c.gap + "ms " + Se.land);
    });
    const Xt = () => {
      if (Bt = requestAnimationFrame(Xt), l) {
        G = L, e.style.transform = "translateY(" + G + "px)";
        return;
      }
      E = Cl(E, L - G, c.pull / 100, c.keep / 100), G += E, wt += (f - wt) * 0.25;
      const Et = Math.min(Math.abs(E) / 48, 1);
      e.style.transform = "translateY(" + G.toFixed(2) + "px) scale(" + (wt * (1 - 0.063 * Et)).toFixed(4) + "," + (wt * (1 + 0.1 * Et)).toFixed(4) + ")";
    };
    Bt = requestAnimationFrame(Xt);
    const ce = (Et) => {
      L = Math.max(R, Math.min(V, Et.clientY - C));
      const Ee = S(x) + L, Fe = h.filter((Qe, Ue) => Ue !== x && S(Ue) < Ee).length;
      Fe !== Wt && (Wt = Fe, h.forEach((Qe, Ue) => {
        Qe !== e && (Qe.style.transform = x < Wt && Ue > x && Ue <= Wt ? "translateY(" + -_ + "px)" : Wt < x && Ue >= Wt && Ue < x ? "translateY(" + _ + "px)" : "");
      }));
    }, At = () => {
      window.removeEventListener("pointermove", ce), window.removeEventListener("pointerup", At), window.removeEventListener("pointercancel", At), cancelAnimationFrame(Bt);
      const Et = e.getBoundingClientRect(), Ee = e.dataset[a];
      h.forEach((Aa) => {
        Aa.style.transition = "none", Aa.style.transform = "";
      }), e.classList.remove("hcListDragging");
      const Fe = h.map((Aa) => Aa.dataset[a]);
      Fe.splice(Wt, 0, Fe.splice(x, 1)[0]), o(Fe);
      const Qe = i(Ee) || e;
      if (requestAnimationFrame(() => h.forEach((Aa) => {
        Aa.style.transition = "";
      })), l) return;
      const Ue = Qe.getBoundingClientRect(), qn = Et.top + Et.height / 2 - (Ue.top + Ue.height / 2);
      Qe.classList.add("hcListLanding"), Qe.animate([{ transform: "translateY(" + qn + "px) scale(" + wt + ")", filter: "drop-shadow(0 10px 30px rgba(0,0,0,.35))" }, { transform: "none", filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" }], { duration: c.slide, easing: Se.land }).finished.then(() => {
        Qe.classList.remove("hcListLanding"), Al(Qe);
      }, () => Qe.classList.remove("hcListLanding"));
    };
    window.addEventListener("pointermove", ce), window.addEventListener("pointerup", At), window.addEventListener("pointercancel", At);
  }
  function uu(t, e) {
    Vs(
      t,
      e,
      "trayFav",
      (a) => {
        const o = new Set(J());
        Es.favs = null, yn({ favourites: a.filter((i) => o.has(i)) });
      },
      (a) => Yt.querySelector('[data-tray-fav="' + CSS.escape(a) + '"]')
    );
  }
  Yt.addEventListener("pointerdown", (t) => {
    if (t.button > 0) return;
    const e = t.target.closest("[data-tray-card]"), a = t.target.closest(".tfTrayFav");
    e ? Ec(t, e, "card", e.dataset.trayCard) : a && t.target.closest(".tfTrayGrip") ? uu(t, a) : a != null && a.classList.contains("off") && !t.target.closest("button") && Ec(t, a, "fav", a.dataset.trayFav);
  });
  function hu(t) {
    if (!sa || t.button !== 0 || t.target.closest("[data-board-more],.tfBoardMenu,.tfFavHides")) return;
    const e = t.target.closest(".tfBoardItem"), a = e && bn().find((Xt) => Xt.el === e);
    if (!a || ho.includes(a.key)) return;
    const o = hn.get(a.key), { w: i } = mn(N.clientWidth);
    if (!o) return;
    t.preventDefault(), Qa();
    const c = t.clientX, l = t.clientY;
    let f = !1, h = 0;
    const x = Me.drag, k = je();
    let v = 0, _ = 0, S = 0, C = 0, R = 0, V = 0, L = k || x.stick === 0, G = 0;
    const E = (Xt, ce, At, Et) => {
      e.style.transform = "translate(" + S.toFixed(2) + "px," + C.toFixed(2) + "px) rotate(" + Xt.toFixed(2) + "deg) rotate(" + ce + "rad) scale(" + At.toFixed(4) + "," + Et.toFixed(4) + ") rotate(" + -ce + "rad)";
    }, wt = () => {
      if (G = requestAnimationFrame(wt), k) {
        S = v, C = _, E(0, 0, 1, 1);
        return;
      }
      if (!L) {
        const Ee = Math.min(Math.hypot(v, _) / Math.max(1, x.stick), 1);
        S = v * 0.35, C = _ * 0.35, E(0, Math.atan2(_, v), 1 + 0.155 * Ee, 1 - 0.1 * Ee);
        return;
      }
      R = Cl(R, v - S, x.pull / 100, x.keep / 100), V = Cl(V, _ - C, x.pull / 100, x.keep / 100), S += R, C += V;
      const Xt = Math.hypot(R, V), ce = Math.min(Xt / 48, 1), At = Math.max(-5, Math.min(x.tilt, R * 0.32)), Et = 1 + x.lift / 100;
      E(At, Math.atan2(V, R), Et * (1 + 0.1 * ce), Et * (1 - 0.063 * ce));
    }, Wt = (Xt) => {
      if (v = Xt.clientX - c, _ = Xt.clientY - l, !f) {
        if (Math.hypot(v, _) < 4) return;
        f = !0, $t = { key: a.key, col: o.col, row: o.row }, e.classList.add("tfDragging", "mvDrag"), G = requestAnimationFrame(wt);
      }
      !L && Math.hypot(v, _) > x.stick && (L = !0, R = v * 0.085, V = _ * 0.085), $t.col = Math.round((o.x + v) / (i + se)), $t.row = Math.round((o.y + _ - Zo) / Oa), h || (h = requestAnimationFrame(() => {
        h = 0, Pe();
      }));
    }, Bt = () => {
      var qn;
      if (window.removeEventListener("pointermove", Wt), window.removeEventListener("pointerup", Bt), window.removeEventListener("pointercancel", Bt), !f) return;
      const Xt = (Wn) => {
        Wn.preventDefault(), Wn.stopImmediatePropagation();
      };
      window.addEventListener("click", Xt, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", Xt, { capture: !0 }), 300), cancelAnimationFrame(h), cancelAnimationFrame(G);
      const ce = e.getBoundingClientRect(), At = a.key;
      e.style.transition = "none", Pe(), e.classList.remove("tfDragging", "mvDrag"), e.style.transform = "", $t = null, Pn(ae(), wn()), Pe(), Le();
      const Et = (qn = bn().find((Wn) => Wn.key === At)) == null ? void 0 : qn.el;
      if (requestAnimationFrame(() => {
        e.style.transition = "", Et && (Et.style.transition = "");
      }), !Et || k) return;
      Et.style.transition = "none";
      const Ee = Et.getBoundingClientRect(), Fe = ce.left + ce.width / 2 - (Ee.left + Ee.width / 2), Qe = ce.top + ce.height / 2 - (Ee.top + Ee.height / 2);
      Et.style.zIndex = "20", Et.animate([{ transform: "translate(" + Fe + "px," + Qe + "px) scale(" + (1 + x.lift / 100) + ")" }, { transform: "none" }], { duration: x.slide, easing: Se.land }).finished.then(() => {
        Et.style.zIndex = "", Al(Et);
      }, () => {
        Et.style.zIndex = "";
      });
    };
    window.addEventListener("pointermove", Wt), window.addEventListener("pointerup", Bt), window.addEventListener("pointercancel", Bt);
  }
  function Oc(t = !1) {
    const e = N == null ? void 0 : N.querySelector(".tfDashGraph svg[data-graph]");
    if (!(e != null && e.clientWidth)) return;
    const a = e.dataset.graph + "@" + e.clientWidth + "x" + e.clientHeight + "@" + Math.floor(Date.now() / 3e5);
    if (e.dataset.drawn === a) return;
    const o = !e.dataset.drawn;
    e.dataset.drawn = a;
    const i = Kl.find((c) => c.id === e.dataset.graph);
    i ? xf(e, i).then(() => {
      (t || o) && kf(e);
    }) : sd(e.dataset.graph, e).then(() => {
      t && Ql(e);
    });
  }
  function Ic() {
    var h, x, k;
    zt = Or.model(d(), { madeUp: !A }), Mt(), M = zt.states, M[(h = gt.sources) == null ? void 0 : h.grid] && (zt.grid = gt.sources.grid), M[(x = gt.sources) == null ? void 0 : x.alarm] && (zt.security.alarms = [gt.sources.alarm]), kt.forEach((v, _) => {
      const S = M[_], C = (S == null ? void 0 : S.attributes) || {};
      if (!S || Date.now() - v.at > 2 * 60 * 1e3) {
        kt.delete(_);
        return;
      }
      v.pos != null && S.state !== "opening" && S.state !== "closing" && Math.abs(fa(_) - v.pos) < 1 && delete v.pos, v.tilt != null && Math.abs((C.current_tilt_position ?? -1) - v.tilt) < 1 && delete v.tilt, v.pos == null && v.tilt == null && kt.delete(_);
    });
    const t = [];
    let e = 0;
    const a = F();
    u = a.filter((v) => v.room).map((v) => v.room), u.some((v) => v.id === W) || (W = ((k = u[0]) == null ? void 0 : k.id) || null);
    const o = tt === "weather" ? { key: "weather", name: "Weather" } : tt && a.find((v) => v.key === tt);
    if (o || (tt = null), g.classList.toggle("tfAreaOpen", !!o), g.classList.toggle("tfWeatherOpen", (o == null ? void 0 : o.key) === "weather"), g.classList.toggle("tfDash", !o), Ct = /* @__PURE__ */ new Map(), zt.rooms.forEach((v) => [...v.actions, ...v.plugs, ...v.readings, ...v.openings, ...v.solar, ...v.plants.flatMap((_) => [_.id, ..._.readings])].forEach((_) => Ct.set(_, v.name))), !o) return Cf(t, fn());
    if (t.push({ key: "areahead", html: mu(o, ++e) }), o.key === "weather")
      return t.weather = ++e, t;
    const i = o.ids, c = o.room ? o.room.id : o.key, l = o.room;
    l != null && l.solar.length && t.push({ key: "energy:" + l.id, html: jo(l, ++e) }), l && (l.readings.length || l.power != null) && t.push({ key: "readings:" + l.id, html: Kr(l, ++e) }), l == null || l.plants.forEach((v) => t.push({ key: "plant:" + v.id, html: Xr(v, ++e) }));
    const f = [...i, ...((l == null ? void 0 : l.plugs) || []).filter((v) => !i.includes(v))];
    return f.length && t.push({ key: "block:" + c, order: ++e, tiles: f.map((v) => ({ key: v, html: sr(v) })) }), t;
  }
  const mu = (t, e) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + e + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + np + '</button><div class="settingsTitle">' + P(t.name) + "</div></div>";
  let Fc = 0, qc = null;
  const Wc = (t) => t === "weather" ? Ua.wx : t.startsWith("room:") && N.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || N.querySelector(".tfAreas");
  function jc(t) {
    var e, a;
    tt || (Fc = kr().scrollTop, qc = ((e = Wc(t)) == null ? void 0 : e.getBoundingClientRect().top) ?? null), tt = t, t.startsWith("room:") && (W = t.slice(5)), Wa(), kr().scrollTop = 0, (a = N.querySelector("[data-area-back]")) == null || a.focus({ preventScroll: !0 });
  }
  let xr = null;
  function gu(t, e) {
    if (xr == null || xr(), e == null) return;
    const a = kr(), o = performance.now() + 1500, i = ["wheel", "touchstart", "pointerdown", "keydown"];
    let c = 0;
    const l = () => {
      cancelAnimationFrame(c), i.forEach((h) => window.removeEventListener(h, l, !0)), xr = null;
    }, f = () => {
      const h = t();
      if (h != null && h.isConnected) {
        const x = h.getBoundingClientRect().top - e;
        Math.abs(x) > 0.5 && (a.scrollTop += x);
      }
      performance.now() < o ? c = requestAnimationFrame(f) : l();
    };
    i.forEach((h) => window.addEventListener(h, l, { capture: !0, passive: !0 })), xr = l, f();
  }
  function zs() {
    var a;
    const t = tt;
    tt = null, Wa(), kr().scrollTop = Fc, gu(() => Wc(t), qc);
    const e = t.startsWith("room:") ? N.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || N.querySelector('.tfAreaPanel[data-area="' + CSS.escape(t.slice(5)) + '"]') : t === "weather" ? Ua.wx.querySelector(".wbOpenPage") : N.querySelector('[data-k="sum:' + CSS.escape(t) + '"]');
    (a = (e == null ? void 0 : e.querySelector("[data-go]")) || e) == null || a.focus({ preventScroll: !0 });
  }
  const bu = (t) => t.wrap ? t.wrap(t.tiles.map((e) => e.html).join(""), t) : '<div class="tfBlock" data-tf data-k="' + P(t.key) + '" style="order:' + t.order + '"><div class="tfActions">' + t.tiles.map((e) => e.html).join("") + "</div></div>", Vc = (t) => t.map((e) => e.key + (e.tiles ? "(" + e.tiles.map((a) => a.key).join(",") + ")" : "")).join(";");
  function kr() {
    for (let t = g.parentElement || g.getRootNode().host; t; t = t.parentElement || t.getRootNode().host) {
      const e = getComputedStyle(t).overflowY;
      if ((e === "auto" || e === "scroll") && t.scrollHeight > t.clientHeight) return t;
    }
    return document.scrollingElement;
  }
  function zc(t) {
    const e = kr(), a = (f) => {
      const h = f.getBoundingClientRect();
      return h.height && h.bottom > 0 && h.top < window.innerHeight;
    }, o = [...N.children, ...N.querySelectorAll(".tfDashTiles > *")].find((f) => !f.matches(".tfDashTiles") && a(f)), i = o == null ? void 0 : o.dataset.k, c = o == null ? void 0 : o.getBoundingClientRect().top;
    t();
    const l = o != null && o.isConnected ? o : i && N.querySelector('[data-k="' + CSS.escape(i) + '"]');
    l != null && l.isConnected && c != null && (e.scrollTop += l.getBoundingClientRect().top - c);
  }
  function Wa() {
    if (!w || !N) return;
    const t = Ic(), e = (i) => {
      var c;
      return (((c = i.closest("[data-k]")) == null ? void 0 : c.dataset.k) || "") + "|" + i.dataset.iconFor + "|" + (i.dataset.iconName || "");
    }, a = /* @__PURE__ */ new Map();
    N.querySelectorAll("[data-tf] [data-icon-for]").forEach((i) => {
      i.firstElementChild && (a.get(e(i)) || a.set(e(i), []).get(e(i))).push(i.firstElementChild);
    }), N.querySelectorAll("[data-tf]").forEach((i) => i.remove()), ba.clear();
    const o = document.createElement("div");
    o.innerHTML = t.map((i) => i.tiles ? bu(i) : i.html).join(""), t.forEach((i) => i.tiles ? i.tiles.forEach((c) => ba.set(c.key, c.html)) : ba.set(i.key, i.html)), Nr = Vc(t), o.querySelectorAll("[data-icon-for]").forEach((i) => {
      var l;
      const c = !i.firstElementChild && ((l = a.get(e(i))) == null ? void 0 : l.shift());
      c && i.appendChild(c);
    }), N.append(...o.children), Fr(t.weather), qr(), ks.disconnect(), Pe(), Ka(N), Qs(N), po(N), H(), ld(), Fn(), Jc(), requestAnimationFrame(rt);
  }
  const Gc = (t) => {
    var a;
    const e = n.activeElement && t.contains(n.activeElement) ? n.activeElement : null;
    return e && { label: e.getAttribute("aria-label"), act: (a = e.dataset) == null ? void 0 : a.act };
  }, Gs = (t, e) => {
    var a;
    e && ((a = e.label && t.querySelector('[aria-label="' + CSS.escape(e.label) + '"]') || e.act && t.querySelector('[data-act="' + CSS.escape(e.act) + '"]')) == null || a.focus({ preventScroll: !0 }));
  };
  function Us(t, e) {
    if (!t.querySelector(".tfDacPad"))
      return t.replaceWith(e), e;
    const a = t.matches(".tfDac") && t.querySelector(":scope > .tfDacPad"), o = e.querySelector(":scope > .tfDacPad");
    if (a)
      return (o == null ? void 0 : o.dataset.dac) !== a.dataset.dac ? (t.replaceWith(e), e) : (t.querySelector(":scope > .tfActionHead").replaceWith(e.querySelector(":scope > .tfActionHead")), t.classList.toggle("on", e.classList.contains("on")), ["data-light", "data-tone"].forEach((l) => e.hasAttribute(l) ? t.setAttribute(l, e.getAttribute(l)) : t.removeAttribute(l)), [...t.style].filter((l) => l.startsWith("--") && !l.startsWith("--tf-")).forEach((l) => t.style.removeProperty(l)), [...e.style].forEach((l) => t.style.setProperty(l, e.style.getPropertyValue(l))), t);
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
    const c = [...e.children];
    return [...t.children].forEach((l, f) => Us(l, c[f])), t;
  }
  function wu(t, e) {
    const a = document.createElement("div");
    a.innerHTML = e;
    const o = Gc(t), i = Us(t, a.firstElementChild);
    Ka(i), Qs(i), po(i), Gs(i, o);
  }
  function Le() {
    !w || !N || $t || zc(vu);
  }
  function vu() {
    if (!N.querySelector("[data-tf]")) {
      Wa();
      return;
    }
    const t = Ic();
    if (Vc(t) !== Nr) {
      Wa();
      return;
    }
    const e = (a) => [...it.keys()].some((o) => {
      const i = o.slice(o.indexOf("|") + 1);
      return a === i || a.endsWith(":" + i);
    });
    t.forEach((a) => (a.tiles || [a]).forEach((o) => {
      if (ba.get(o.key) === o.html || e(o.key)) return;
      const i = N.querySelector('[data-k="' + CSS.escape(o.key) + '"]');
      i && (ba.set(o.key, o.html), wu(i, o.html), o.key.startsWith("energy:") && ld());
    })), Fn(), Jc(), ni(), H(), we == null || we.update(), ve == null || ve.forEach((a) => a.update()), g.classList.contains("tfDash") && di(), requestAnimationFrame(rt);
  }
  const In = {
    light: (t) => [["Brightness", t.brightness != null ? Math.round(t.brightness / 2.55) + "%" : null], ["Colour temperature", t.color_temp_kelvin ? Number(t.color_temp_kelvin).toLocaleString() + " K" : null], ["Colour mode", t.color_mode && Vt(t.color_mode)]],
    climate: (t) => [["Current temperature", Ae(t.current_temperature) + " °C"], ["Target", Ae(t.temperature) + " °C"], ["Action", Vt(t.hvac_action)]],
    cover: (t) => [["Position", t.current_position != null ? t.current_position + "% open" : null], ["Tilt", t.current_tilt_position != null ? t.current_tilt_position + "% open" : null]],
    humidifier: (t) => [["Current humidity", t.current_humidity + "%"], ["Target", t.humidity + "%"], ["Mode", Vt(t.mode)]],
    media_player: (t) => [["Title", t.media_title], ["Artist", t.media_artist], ["Volume", t.volume_level != null ? Math.round(t.volume_level * 100) + "%" : null], ["Source", t.source]],
    vacuum: (t) => [["Battery", t.battery_level + "%"], ["Fan speed", Vt(t.fan_speed)], ["Rooms", (t.rooms || []).join(", ") || null]],
    lock: (t) => [["Changed by", t.changed_by]],
    alarm_control_panel: (t) => [["Changed by", t.changed_by]],
    valve: (t) => [["Position", t.current_position != null ? t.current_position + "% open" : null]],
    fan: (t) => [["Speed", t.percentage != null ? t.percentage + "%" : null], ["Oscillating", t.oscillating != null ? t.oscillating ? "Yes" : "No" : null], ["Direction", t.direction && Vt(t.direction)]],
    water_heater: (t) => [["Current temperature", t.current_temperature != null ? t.current_temperature + " °C" : null], ["Target", t.temperature != null ? t.temperature + " °C" : null], ["Mode", t.operation_mode && Vt(t.operation_mode)], ["Away", t.away_mode && Vt(t.away_mode)]],
    plant: (t) => [["Moisture", t.moisture + "%"], ["Light", Number(t.brightness).toLocaleString() + " lx"], ["Temperature", Ae(t.temperature) + " °C"], ["Fertility", t.conductivity + " µS/cm"], ["Problems", t.problem === "none" ? "None" : Vt(t.problem)]],
    weather: (t) => [["Temperature", t.temperature != null ? t.temperature + " " + (t.temperature_unit || "°C") : null], ["Humidity", t.humidity != null ? t.humidity + "%" : null], ["Wind", t.wind_speed != null ? t.wind_speed + " " + (t.wind_speed_unit || "km/h") : null], ["Pressure", t.pressure != null ? t.pressure + " " + (t.pressure_unit || "hPa") : null]]
  }, yu = (t) => Va(t) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function xu(t, e = {}, a = !1) {
    return '<div class="tfMoreList">' + t.map((o) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + P(o.name) + '</div><div class="tfMoreTiles' + (a ? " single" : "") + '">' + o.ids.map((i) => Ht(i, e)).join("") + "</div></div>").join("") + "</div>";
  }
  const _t = document.createElement("div");
  _t.className = "tfMoreBackdrop", _t.hidden = !0, g.appendChild(_t);
  const ja = document.createElement("div");
  ja.className = "tfMoreBackdrop tfMoreUnder", ja.hidden = !0, g.insertBefore(ja, _t);
  const Ys = (t, e) => {
    for (let a = t; a && a !== _t; a = a.parentElement) {
      const o = getComputedStyle(a).overflowY;
      if ((o === "auto" || o === "scroll") && a.scrollHeight > a.clientHeight + 1 && (e < 0 ? a.scrollTop > 0 : a.scrollTop + a.clientHeight < a.scrollHeight - 1)) return !0;
    }
    return !1;
  };
  let Mr = null;
  _t.addEventListener("touchstart", (t) => {
    Mr = { x: t.touches[0].clientX, y: t.touches[0].clientY };
  }, { passive: !0 }), _t.addEventListener("touchmove", (t) => {
    var i, c;
    if (!Mr || t.touches.length > 1 || (c = (i = t.target).closest) != null && c.call(i, "input,textarea,select")) return;
    const e = t.touches[0], a = Mr.x - e.clientX, o = Mr.y - e.clientY;
    Mr = { x: e.clientX, y: e.clientY }, Math.abs(o) >= Math.abs(a) && !Ys(t.target, o) && t.preventDefault();
  }, { passive: !1 }), _t.addEventListener("wheel", (t) => {
    var e, a;
    Math.abs(t.deltaX) > Math.abs(t.deltaY) && ((a = (e = t.target).closest) != null && a.call(e, "[data-more-pages]")) || Ys(t.target, t.deltaY) || t.preventDefault();
  }, { passive: !1 });
  const ku = () => window.innerWidth <= 620;
  let He = null;
  _t.addEventListener("pointerdown", (t) => {
    const e = _t.querySelector(".tfMorePair");
    !ku() || !e || !e.contains(t.target) || !t.isPrimary || _t._closing || t.target.closest("input,textarea,select,.tfDacPad,[data-cover-art],.tfMoreSide") || (He = { x: t.clientX, y: t.clientY, t: performance.now(), dy: 0, v: 0, pair: e, from: t.target, grab: t.target.matches(".tfMore") || !!t.target.closest(".tfMoreHead") });
  }, !0), _t.addEventListener("pointermove", (t) => {
    if (!He || !t.isPrimary) return;
    const e = t.clientY - He.y, a = performance.now();
    if (!He.on) {
      if (Math.abs(t.clientX - He.x) > 8 || e < -8 || !He.grab && Ys(He.from, -1)) {
        He = null;
        return;
      }
      if (e < 8) return;
      He.on = !0;
      try {
        _t.setPointerCapture(t.pointerId);
      } catch {
      }
    }
    He.v = (e - He.dy) / Math.max(1, a - He.t), He.dy = e, He.t = a, He.pair.style.transform = "translateY(" + Math.max(0, e) + "px)";
  });
  const Uc = (t) => {
    if (!He || !t.isPrimary) return;
    const e = He;
    if (He = null, !e.on) return;
    const a = (x) => {
      x.preventDefault(), x.stopImmediatePropagation();
    };
    window.addEventListener("click", a, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", a, { capture: !0 }), 300);
    const o = t.type === "pointerup" && (e.dy > 120 || e.v > 0.5), i = "translateY(" + Math.max(0, e.dy) + "px)";
    if (e.pair.style.transform = "", !o || je()) {
      o ? rl() : e.pair.animate([{ transform: i }, { transform: "none" }], { duration: 320, easing: Se.spring });
      return;
    }
    const c = B;
    _t._closing = !0, _t.style.pointerEvents = "none", _t.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220, easing: Se.exit, fill: "forwards" });
    const l = e.pair.animate([{ transform: i }, { transform: "translateY(calc(100% + 40px))" }], { duration: 220, easing: Se.exit, fill: "forwards" });
    let f = !1;
    const h = () => {
      f || (f = !0, _t._closing = !1, _t.style.pointerEvents = "", _t.getAnimations().forEach((x) => x.cancel()), e.pair.getAnimations().forEach((x) => x.cancel()), B === c && rl());
    };
    l.finished.then(h, h), setTimeout(h, 300);
  };
  _t.addEventListener("pointerup", Uc), _t.addEventListener("pointercancel", Uc);
  function Zs() {
    const t = _t.querySelector(".tfMorePair"), e = _t.querySelector(".tfMore");
    t == null || t.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - e.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", Zs, { passive: !0 }), w && Xn();
  let eo = [];
  const Mu = (t) => t === "favourites" || t.startsWith("summary:") || t.startsWith("group:");
  function Su(t) {
    const e = (k, v = "") => '<div class="tfMoreHead">' + (B != null && B.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + op + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + P(k) + "</div>" + v + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + rp + "</button></div>", a = (k, v) => '<div class="tfMoreNow"><div class="tfMoreState">' + P(k) + "</div></div>", o = xu;
    if (t === "favourites") {
      const k = J(), v = new Set(k), _ = [{ name: "Starred", ids: k }, { name: "Home", ids: zt.homeVacuums }, { name: "Security", ids: [...zt.security.alarms, ...zt.security.locks] }, ...zt.rooms.map((S) => ({ name: S.name, ids: [...S.actions, ...S.plugs] }))].map((S, C) => C ? { ...S, ids: S.ids.filter((R) => !v.has(R)) } : S).filter((S) => S.ids.length);
      return [e("Favourites"), a(k.length ? k.length + " starred" : "None starred"), o(_, { star: !0 }, !0)];
    }
    const i = (k, { name: v = "", alert: _ = !1, plain: S = !1 } = {}) => {
      const C = S ? [] : k.filter((L) => Gn.includes(L.split(".")[0])), R = k.filter((L) => !C.includes(L)), V = (L) => L.startsWith("vacuum.") && Gt(L).battery_level != null ? Gt(L).battery_level + "%" : null;
      return '<div class="tfMoreGroup">' + (v ? '<div class="tfMoreGroupName">' + P(v) + "</div>" : "") + '<div class="tfMoreActions">' + C.map((L) => sr(L, !0)).join("") + R.map((L) => Ht(L, { plain: S, alert: _, say: S ? V(L) : null })).join("") + "</div></div>";
    };
    if (t.startsWith("summary:")) {
      const k = fn().find((C) => C.key === t.slice(8));
      if (!k) return null;
      const v = k.key === "light" ? (k.groups || []).flatMap((C) => C.ids) : [], _ = v.some((C) => {
        var R;
        return ((R = M[C]) == null ? void 0 : R.state) === "on";
      }), S = v.length ? '<button class="primary" type="button" data-acts="' + qo(v.map((C) => ["light", _ ? "turn_off" : "turn_on", C])) + '">' + (_ ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [e(k.name), '<div class="tfMoreNowRow">' + a(k.value) + S + "</div>", ...(k.groups || []).map((C) => i(C.ids, { name: C.name === k.name ? "" : C.name, alert: C.alert, plain: k.plain }))];
    }
    if (t.startsWith("group:")) {
      const [, k, v] = t.split(":"), _ = zt.rooms.find((R) => R.id === k), S = _ && zo(_).find((R) => R.key === v);
      if (!S) return null;
      const C = S.acts ? '<button class="primary" type="button" data-acts="' + qo(S.acts) + '">' + (S.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [e(_.name + " " + S.label.toLowerCase()), '<div class="tfMoreNowRow">' + a(S.value) + C + "</div>", i(En(_, v))];
    }
    const c = t.split(".")[0];
    M[t];
    const l = Gn.includes(c) || Er.includes(c) ? ia(t) : Ks(t), f = Bu(t), h = [...f ? f.pages.map((k) => ({ name: k.name, svg: k.svg, html: k.space + '<div class="tfMoreCtl"' + Ho(t).replace(" data-light", "") + ">" + k.rows.filter(Boolean).join("") + "</div>" })) : [{ name: "Control", svg: ga, html: Tu(t) + (c === "plant" ? Nu(t).join("") : "") + l.sections.filter(Boolean).join("") }], { name: "Info", svg: yp, html: Ru(t) }];
    B && B.page == null && (B.page = (f == null ? void 0 : f.start) || 0), B && (B.pages = h.length);
    const x = (B == null ? void 0 : B.page) || 0;
    return [
      Cu(t, l),
      '<div class="tfMorePages' + (f ? " tfMorePop" : "") + '" data-more-pages>' + h.map((k) => '<section class="tfMorePage" aria-label="' + k.name + '">' + k.html + "</section>").join("") + "</div>",
      // the pages' icons in place of their dots (Matt, 12 Nov): Control's sliders and Info's (i); a light's Colour its palette first
      '<div class="tfMoreDots tfMorePageIcons" role="tablist" aria-label="Pages">' + h.map((k, v) => '<button type="button" role="tab" aria-selected="' + (v === x) + '" aria-label="' + k.name + '" title="' + k.name + '" data-more-page="' + v + '"' + (v === x ? "" : ' tabindex="-1"') + ">" + k.svg + "</button>").join("") + "</div>"
    ];
  }
  const _u = (t, e) => {
    const a = t.split(".")[0], o = M[t], i = o.attributes;
    if (a === "light") return Te(t);
    const c = a === "climate" ? Vt(i.hvac_action || o.state) : a === "humidifier" ? Vt(i.action || o.state) : a === "water_heater" ? Vt(i.operation_mode || o.state) : a === "fan" && o.state === "on" && i.percentage != null ? i.percentage + "%" : (a === "valve" || a === "cover") && i.current_position != null && o.state !== "closed" ? i.current_position + "%" : Te(t);
    return [e, c].filter(Boolean).join(" · ");
  };
  function Cu(t, e, a) {
    var l, f, h, x, k;
    const o = (l = zt.areaOf) == null ? void 0 : l.call(zt, t), i = o && (((f = zt.rooms.find((v) => v.id === o)) == null ? void 0 : f.name) || ((k = (x = (h = d()) == null ? void 0 : h.areas) == null ? void 0 : x[o]) == null ? void 0 : k.name)) || "", c = e.button ? $a(t, e) : '<div class="tfIcon"' + ue(t, e.icon) + "></div>";
    return '<div class="tfMoreHead tfMoreTileHead' + (e.on ? " on" : "") + '"' + (e.tone ? ' data-tone="' + e.tone + '"' : "") + Ho(t) + ">" + (B != null && B.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + op + "</button>" : "") + c + '<div class="tfName"><span class="activityRowName" id="tfMoreTitle">' + P(mt(t)) + '</span><span class="activityRowMeta">' + P(_u(t, i)) + '</span></div><button class="tfBack" type="button" data-more-close aria-label="Close">' + rp + "</button></div>";
  }
  const Au = ["lock", "alarm_control_panel", "switch", "input_boolean", "fan", "valve", "media_player", "automation", "script", "scene", "button"];
  function Ks(t) {
    var i;
    const e = t.split(".")[0], a = ((i = M[t]) == null ? void 0 : i.state) === "on", o = Er.includes(e) ? { act: Dt(e, "toggle", t), label: "Turn " + mt(t) + (a ? " off" : " on") } : e === "scene" || e === "script" ? { act: Dt(e, "turn_on", t), label: "Run " + mt(t) } : null;
    return { sections: [], on: a, button: o, icon: ua(t) };
  }
  function Tu(t) {
    const e = t.split(".")[0];
    if (Au.includes(e) || e === "light" && !dn(t)) {
      const i = Gn.includes(e) ? ia(t) : Ks(t);
      return i != null && i.button ? '<div class="tfMoreSpace tfMoreSwitch' + (i.on ? " on" : "") + '"' + (i.tone ? ' data-tone="' + i.tone + '"' : "") + Ho(t) + ">" + $a(t, i) + "</div>" : "";
    }
    if (e === "cover") return '<div class="tfMoreSpace tfMoreFill"><div data-cover-art="' + P(t) + '"></div></div>';
    if (e === "light" && dn(t)) return '<div class="tfMoreSpace tfMoreFill"><div class="tfDacPad" data-dac="more:' + P(t) + '"></div></div>';
    const { big: a, lines: o } = Eu(t);
    return '<div class="tfMoreSpace"><div class="tfMoreBig' + (Ie("pos", t) != null ? " live" : "") + '"><span class="tfMoreNum">' + P(a[0]) + "</span>" + (a[1] ? '<span class="tfMoreUnit">' + P(a[1]) + "</span>" : "") + '</div><div class="tfMoreFacts">' + o.map(([i, c]) => '<div class="tfMoreFact"><span>' + P(i) + "</span><span>" + P(c) + "</span></div>").join("") + "</div></div>";
  }
  const Lu = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z"/></svg>', Du = ["light", "climate", "fan", "humidifier", "water_heater", "alarm_control_panel", "cover", "lock", "valve", "switch", "input_boolean"], ao = (t, e) => '<div class="tfMoreField"><div class="tfMoreLabel">' + P(t) + "</div>" + e + "</div>", Ca = (t, e) => ra("tfSeg", t, e), vi = (t, e, a, o, i, c) => '<div class="tfBar tfPopBar ' + t + '" role="slider" tabindex="0" aria-label="' + P(o) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(a) + '" aria-valuetext="' + P(i) + '" data-drag="' + P(t + "|" + e) + '"><i style="width:' + Math.max(0, Math.min(100, a)) + '%"><output class="tfBarVal">' + P(i) + "</output></i>" + (c ? '<span class="tfBarIcon"' + ue("", c, o) + "></span>" : "") + "</div>", Yc = (t, e, a, o, i) => '<div class="tfBar tfPopBar ' + t + '" role="slider" tabindex="0" aria-label="' + P(o) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(a ?? 0) + '"' + (i ? ' aria-valuetext="' + P(i) + '"' : "") + ' data-drag="' + P(t + "|" + e) + '">' + (i ? '<output class="tfBarVal mid">' + P(i) + "</output>" : "") + (a == null ? "" : '<b style="left:' + a + '%"></b>') + "</div>", xn = (t, e) => '<div class="tfMoreSpace tfMoreSwitch' + (e.on ? " on" : "") + '"' + (e.tone ? ' data-tone="' + e.tone + '"' : "") + Ho(t) + ">" + $a(t, e) + "</div>", Xs = (t, e, a) => '<div class="tfMoreSpace"><div class="tfMoreBig"><span class="tfMoreNum">' + P(t) + "</span>" + (e ? '<span class="tfMoreUnit">' + P(e) + "</span>" : "") + '</div><div class="tfMoreFacts">' + a.filter(([, o]) => o != null && o !== "").map(([o, i]) => '<div class="tfMoreFact"><span>' + P(o) + "</span><span>" + P(i) + "</span></div>").join("") + "</div></div>", Zc = () => '<input class="tfMoreCode" type="password" inputmode="numeric" autocomplete="off" placeholder="Code" aria-label="Code" data-code value="' + P((B == null ? void 0 : B.code) || "") + '">', yi = (t, e, a, o, i) => ({ label: o, pressed: i, html: null, coded: [t, e, a].join("|") }), Kc = (t, e) => '<div class="tfSeg" role="group" aria-label="' + P(t) + '">' + e.map((a) => '<button type="button" data-coded="' + P(a.coded) + '" aria-pressed="' + !!a.pressed + '">' + P(a.label) + "</button>").join("") + "</div>", Xc = (t, e, a) => Ca(mt(t), [{ label: "Off", act: Dt(e, "turn_off", t), pressed: !a }, { label: "On", act: Dt(e, "turn_on", t), pressed: a }]);
  function Bu(t) {
    var c, l, f;
    const e = t.split(".")[0], a = M[t], o = a.attributes;
    if (!Du.includes(e)) return null;
    const i = Gn.includes(e) || Er.includes(e) ? ia(t) : Ks(t);
    if (e === "light") {
      const h = a.state === "on", x = Za(t), [k, v] = No(t), _ = Ie("bright", t, h ? Ya(a) : 0), S = Ie("ctf", t, h && o.color_mode === "color_temp" ? o.color_temp_kelvin : null), C = Ie("hue", t, h && Po.includes(o.color_mode) && o.hs_color ? o.hs_color[0] : null), R = Ve(t) && vi("bright", t, _, mt(t) + " brightness", _ + "%", "mdi:white-balance-sunny"), V = x.includes("color_temp") && Yc("ctf", t, S == null ? null : Math.round((v - S) / (v - k) * 1e3) / 10, mt(t) + " warmth", S == null ? "" : Math.round(S).toLocaleString() + "k"), L = x.some((E) => Po.includes(E)) && Yc("hue", t, C == null ? null : Math.round(C / 360 * 1e3) / 10, mt(t) + " colour", ""), G = (E) => dn(t) ? '<div class="tfMoreSpace tfMoreFill tfMorePad"><div class="tfDacPad" data-dac="' + E + ":" + P(t) + '"></div></div>' : xn(t, i);
      return { pages: [
        L && { name: "Colour", svg: Lu, space: G("more2"), rows: [R, L] },
        { name: "Control", svg: ga, space: G("more"), rows: [R, V] }
      ].filter(Boolean), start: L ? 1 : 0 };
    }
    if (e === "climate") {
      const h = o.target_temp_step || 0.5, x = Number(o.temperature), k = Number(o.target_temp_low), v = Number(o.target_temp_high), _ = (V) => Dt("climate", "set_temperature", t, V), S = (V, L, G, E, wt) => (L == null ? void 0 : L.length) && ao(V, Ca(V, L.map((Wt) => ({ label: Vt(Wt), act: Dt("climate", E, t, { [wt]: Wt }), pressed: (G === "state" ? a.state : o[G]) === Wt })))), C = Number.isFinite(k) && Number.isFinite(v) && ao("Range", '<div class="tfMoreRange">' + ha("Low", Ae(k) + " °C", _({ target_temp_low: k - h, target_temp_high: v }), _({ target_temp_low: k + h, target_temp_high: v })) + ha("High", Ae(v) + " °C", _({ target_temp_low: k, target_temp_high: v - h }), _({ target_temp_low: k, target_temp_high: v + h })) + "</div>"), R = Number(o.humidity);
      return { pages: [{
        name: "Control",
        svg: ga,
        space: Xs(Ae(o.current_temperature), "°C", [["Target", Number.isFinite(x) ? Ae(x) + " °C" : null], ["Humidity", o.current_humidity != null ? o.current_humidity + "%" : null], ["Action", o.hvac_action && Vt(o.hvac_action)]]),
        rows: [
          Number.isFinite(x) && ha("Target temperature", Ae(x) + " °C", _({ temperature: x - h }), _({ temperature: x + h })),
          C,
          S("Mode", o.hvac_modes, "state", "set_hvac_mode", "hvac_mode"),
          S("Fan", o.fan_modes, "fan_mode", "set_fan_mode", "fan_mode"),
          S("Swing", o.swing_modes, "swing_mode", "set_swing_mode", "swing_mode"),
          S("Preset", o.preset_modes, "preset_mode", "set_preset_mode", "preset_mode"),
          Number.isFinite(R) && o.min_humidity != null && ao("Humidity", ha("Target humidity", R + "%", Dt("climate", "set_humidity", t, { humidity: R - 1 }), Dt("climate", "set_humidity", t, { humidity: R + 1 })))
        ]
      }] };
    }
    if (e === "fan") {
      const h = a.state === "on", x = Ie("fan", t, h && Number(o.percentage) || 0), k = o.percentage != null;
      return { pages: [{ name: "Control", svg: ga, space: xn(t, i), rows: k ? [
        vi("fan", t, x, mt(t) + " speed", x + "%", "mdi:fan"),
        o.oscillating != null && ao("Oscillate", Ca("Oscillate", [{ label: "Off", act: Dt("fan", "oscillate", t, { oscillating: !1 }), pressed: !o.oscillating }, { label: "On", act: Dt("fan", "oscillate", t, { oscillating: !0 }), pressed: !!o.oscillating }])),
        o.direction && ao("Direction", Ca("Direction", [["forward", "Forward"], ["reverse", "Reverse"]].map(([v, _]) => ({ label: _, act: Dt("fan", "set_direction", t, { direction: v }), pressed: o.direction === v })))),
        ((c = o.preset_modes) == null ? void 0 : c.length) && ao("Preset", Ca("Preset", o.preset_modes.map((v) => ({ label: Vt(v), act: Dt("fan", "set_preset_mode", t, { preset_mode: v }), pressed: o.preset_mode === v }))))
      ] : [Xc(t, "fan", h)] }] };
    }
    if (e === "humidifier") {
      const h = Number(o.humidity);
      return { pages: [{ name: "Control", svg: ga, space: Xs(String(o.current_humidity), "%", [["Target", Number.isFinite(h) ? h + "%" : null], ["Action", o.action && Vt(o.action)]]), rows: [
        Number.isFinite(h) && ha("Target humidity", h + "%", Dt("humidifier", "set_humidity", t, { humidity: h - 1 }), Dt("humidifier", "set_humidity", t, { humidity: h + 1 })),
        ((l = o.available_modes) == null ? void 0 : l.length) && ao("Mode", Ca("Mode", o.available_modes.map((x) => ({ label: Vt(x), act: Dt("humidifier", "set_mode", t, { mode: x }), pressed: o.mode === x }))))
      ] }] };
    }
    if (e === "water_heater") {
      const h = Number(o.temperature), x = o.target_temp_step || 1;
      return { pages: [{ name: "Control", svg: ga, space: Xs(Ae(o.current_temperature).replace(/\.0$/, ""), "°C", [["Target", Number.isFinite(h) ? String(h).replace(/\.0$/, "") + " °C" : null], ["Mode", Vt(o.operation_mode || a.state)]]), rows: [
        Number.isFinite(h) && ha("Target temperature", h + " °C", Dt("water_heater", "set_temperature", t, { temperature: h - x }), Dt("water_heater", "set_temperature", t, { temperature: h + x })),
        ((f = o.operation_list) == null ? void 0 : f.length) && ao("Mode", Ca("Mode", o.operation_list.map((k) => ({ label: Vt(k), act: Dt("water_heater", "set_operation_mode", t, { operation_mode: k }), pressed: (o.operation_mode || a.state) === k })))),
        o.away_mode != null && ao("Away", Ca("Away", [{ label: "Off", act: Dt("water_heater", "set_away_mode", t, { away_mode: !1 }), pressed: o.away_mode !== "on" }, { label: "On", act: Dt("water_heater", "set_away_mode", t, { away_mode: !0 }), pressed: o.away_mode === "on" }]))
      ] }] };
    }
    if (e === "alarm_control_panel") {
      const h = [...Sp, ["armed_vacation", "Vacation", "alarm_arm_vacation", 32]].filter(([, , , v]) => !v || le(t, v)), x = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "clear", "0", "back"], k = '<div class="tfMoreSpace tfMoreKeypad">' + Zc() + '<div class="tfKeypad">' + x.map((v) => '<button type="button" data-key="' + v + '"' + (v === "back" ? ' aria-label="Delete"' : "") + ">" + (v === "clear" ? "Clear" : v === "back" ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22,3H7C6.31,3 5.77,3.35 5.41,3.88L0,12L5.41,20.11C5.77,20.64 6.31,21 7,21H22A2,2 0 0,0 24,19V5A2,2 0 0,0 22,3M22,19H7.07L2.4,12L7.06,5H22V19M10.41,17L14,13.41L17.59,17L19,15.59L15.41,12L19,8.41L17.59,7L14,10.59L10.41,7L9,8.41L12.59,12L9,15.59L10.41,17Z"/></svg>' : v) + "</button>").join("") + "</div></div>";
      return { pages: [{ name: "Control", svg: ga, space: k, rows: [Kc(mt(t), h.map(([v, _, S]) => yi("alarm_control_panel", S, t, _, a.state === v)))] }] };
    }
    if (e === "cover") {
      if (o.current_position == null) return { pages: [{ name: "Control", svg: ga, space: xn(t, i), rows: [Ca(mt(t), [{ label: "Open", act: Dt("cover", "open_cover", t), pressed: a.state !== "closed" }, { label: "Close", act: Dt("cover", "close_cover", t), pressed: a.state === "closed" }])] }] };
      const h = a.state === "opening" || a.state === "closing", x = Io(t), k = or(t);
      return { pages: [{ name: "Control", svg: ga, space: '<div class="tfMoreSpace tfMoreArt"><div data-cover-art="' + P(t) + '"></div></div>', rows: [
        le(t, Hl) && De(t, x),
        k != null && ao("Tilt", vi("tiltp", t, Ie("tiltp", t, k), mt(t) + " tilt", Math.round(Ie("tiltp", t, k)) + "%")),
        Ca(mt(t), [le(t, pp) && { label: "Open", act: Dt("cover", "open_cover", t), disabled: x >= 100 && !h }, le(t, up) && { label: "Stop", act: Dt("cover", "stop_cover", t) }, le(t, fp) && { label: "Close", act: Dt("cover", "close_cover", t), disabled: x <= 0 && !h }])
      ] }] };
    }
    if (e === "lock")
      return { pages: [{ name: "Control", svg: ga, space: xn(t, i), rows: [
        Zc(),
        Kc(mt(t), [yi("lock", "lock", t, "Lock", a.state === "locked"), yi("lock", "unlock", t, "Unlock", a.state === "unlocked"), le(t, Mp) && yi("lock", "open", t, "Open", a.state === "open")].filter(Boolean))
      ] }] };
    if (e === "valve") {
      const h = a.state === "open";
      if (o.current_position == null) return { pages: [{ name: "Control", svg: ga, space: xn(t, i), rows: [Ca(mt(t), [{ label: "Open", act: Dt("valve", "open_valve", t), pressed: h }, { label: "Close", act: Dt("valve", "close_valve", t), pressed: !h }])] }] };
      const x = Ie("valve", t, Number(o.current_position) || 0);
      return { pages: [{ name: "Control", svg: ga, space: xn(t, i), rows: [
        vi("valve", t, x, mt(t) + " position", Math.round(x) + "%", "mdi:valve"),
        Ca(mt(t), [{ label: "Open", act: Dt("valve", "open_valve", t) }, le(t, 8) && { label: "Stop", act: Dt("valve", "stop_valve", t) }, { label: "Close", act: Dt("valve", "close_valve", t) }])
      ] }] };
    }
    return { pages: [{ name: "Control", svg: ga, space: xn(t, i), rows: [Xc(t, e, a.state === "on")] }] };
  }
  function Eu(t) {
    var k;
    const e = M[t], a = Gt(t), o = t.split(".")[0], i = (((k = In[o]) == null ? void 0 : k.call(In, a)) || []).filter(([, v]) => v != null && v !== ""), c = (v) => {
      const _ = i.findIndex(([S]) => S === v);
      return _ < 0 ? null : i.splice(_, 1)[0][1];
    }, l = (v) => {
      const _ = String(v).match(/^(-?[\d.,]+)\s*(.*)$/);
      return _ ? [_[1], _[2]] : [String(v), ""];
    }, f = () => [Vt(String(e.state).replace(/_/g, " ")), ""];
    let h;
    o === "light" ? (c("Brightness"), h = e.state === "on" && Ve(t) ? [String(Ya(e)), "%"] : f()) : o === "climate" ? h = l(c("Current temperature") || Ae(a.current_temperature) + " °C") : o === "cover" ? (c("Position"), h = a.current_position != null ? [String(fa(t)), "%"] : f()) : o === "humidifier" ? h = l(c("Current humidity") || e.state) : o === "vacuum" ? h = l(c("Battery") || e.state) : o === "plant" ? h = l(c("Moisture") || e.state) : ["media_player", "lock", "alarm_control_panel", "valve"].includes(o) ? h = f() : h = l(e.state + (a.unit_of_measurement ? " " + a.unit_of_measurement : ""));
    const x = i.length ? i.slice(0, 4) : [["State", Te(t)]];
    return { big: h, lines: x };
  }
  function Ru(t) {
    var x, k, v, _, S, C, R;
    const e = M[t], a = d(), o = (x = a == null ? void 0 : a.entities) == null ? void 0 : x[t], i = o != null && o.device_id ? (k = a == null ? void 0 : a.devices) == null ? void 0 : k[o.device_id] : null, c = '<div class="tfMoreGraph"><div class="tfMoreGroupName">Last 24 hours</div><svg class="tfGraph tfDay" data-day="' + P(t) + '" role="img" aria-label="' + P(mt(t)) + ', last 24 hours"></svg></div>', l = (v = zt.areaOf) == null ? void 0 : v.call(zt, t), f = l && (((_ = zt.rooms.find((V) => V.id === l)) == null ? void 0 : _.name) || ((C = (S = a == null ? void 0 : a.areas) == null ? void 0 : S[l]) == null ? void 0 : C.name)) || "", h = [
      ...((R = In[t.split(".")[0]]) == null ? void 0 : R.call(In, Gt(t))) || [],
      ["Changed", e.last_changed && Oo(Date.parse(e.last_changed))],
      ["Area", f],
      ["Device", i && (i.name_by_user || i.name)],
      ["Integration", (o == null ? void 0 : o.platform) && Vt(o.platform.replace(/_/g, " "))],
      ["Entity", t]
    ].filter(([, V]) => V != null && V !== "");
    return c + '<div class="tfMoreRows">' + h.map(([V, L]) => '<div class="tfMoreRow"><span>' + P(V) + "</span><span>" + P(L) + "</span></div>").join("") + "</div>" + yu(t) + (i ? '<button class="tfDetailsBtn tfMoreLink" type="button" data-path="/config/devices/device/' + P(o.device_id) + '"><span>Device page</span>' + xp + "</button>" : "");
  }
  const Pu = () => "";
  let $s = "";
  function Js(t) {
    var e;
    B && (B.details = t, Fn(), (e = _t.querySelector(t ? "[data-details-close]" : "[data-details]")) == null || e.focus({ preventScroll: !0 }));
  }
  const xi = (t) => {
    const e = M[t], a = fa(t), o = Io(t);
    return { kind: Pl(e), name: mt(t), text: Te(t), pos: a, target: Math.abs(o - a) > 0.5 ? o : null, moving: e.state === "opening" || e.state === "closing", tilt: or(t) ?? 100, canSet: le(t, Hl) };
  };
  function Qs(t) {
    t.querySelectorAll("[data-cover-art]").forEach((e) => {
      const a = e.dataset.coverArt, o = e.dataset.artKey || "more:" + a;
      let i = It.get(o);
      i || (i = k0({ onMove: (c) => _r(a, c), onSet: (c) => {
        _r(a, c), Cr("pos", a);
      } }), i.coverId = a, It.set(o, i)), e.replaceWith(i.el), i.update(xi(a));
    });
  }
  const $c = (t) => [...It.values()].filter((e) => e.coverId === t), tl = () => It.forEach((t) => {
    M[t.coverId] && t.update(xi(t.coverId));
  }), Jc = () => {
    It.forEach((t, e) => {
      t.el.isConnected || (t.destroy(), It.delete(e));
    }), tl();
  };
  function Fn() {
    var c, l;
    if (!B || !(Mu(B.id) || M[B.id])) {
      _t.hidden = !0;
      return;
    }
    if ([...it.keys()].some((f) => f.endsWith("|" + B.id))) {
      tl();
      return;
    }
    const t = Su(B.id), e = _t.querySelector(".tfMore");
    if (!t) {
      Mi();
      return;
    }
    const a = Gc(_t), o = Pu(B.id), i = B.frame ? B.frame.wide : B.id.startsWith("summary:") || B.id.startsWith("group:");
    if (_t.hidden || !e || t.length !== eo.length || e.classList.contains("wide") !== i) {
      const f = ol ? B.scroll || 0 : !_t.hidden && e ? e.scrollTop : 0;
      if (_t.innerHTML = '<div class="tfMorePair' + (_t.hidden ? "" : " still") + '" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (i ? " wide" : "") + '"' + (B.frame ? ' style="height:' + B.frame.h + 'px"' : "") + ' tabindex="-1">' + t.join("") + "</section></div>", $s = o, _t.classList.toggle("wide", i), _t.hidden = !1, Zs(), Qs(_t), po(_t), Ka(_t), _t.querySelectorAll("[data-day]").forEach((h) => rd(h.dataset.day, h, B.at)), ad(_t), f && (_t.querySelector(".tfMore").scrollTop = f), Qc(), Gs(_t, a), !_t.contains(n.activeElement)) {
        const h = _t.querySelector("[data-more-close]");
        (c = h != null && h.offsetParent ? h : _t.querySelector(".tfMore")) == null || c.focus({ preventScroll: !0 });
      }
    } else {
      if (t.forEach((f, h) => {
        var v, _;
        if (f === eo[h] || f.includes("data-cover-art") || e.children[h].contains((_ = (v = n.activeElement) == null ? void 0 : v.matches) != null && _.call(v, "input,select") ? n.activeElement : null) || [...it.keys()].some((S) => e.children[h].querySelector('[data-drag="' + CSS.escape(S) + '"]'))) return;
        const x = document.createElement("div");
        x.innerHTML = f;
        const k = Us(e.children[h], x.firstElementChild);
        Ka(k), ad(k), po(k);
      }), o !== $s) {
        const f = _t.querySelector(".tfMoreSideBody");
        f && (f.innerHTML = o), $s = o;
      }
      e.querySelectorAll("[data-day]").forEach((f) => {
        f.innerHTML || rd(f.dataset.day, f, B.at);
      }), Qc(), _t.contains(n.activeElement) || Gs(_t, a);
    }
    (l = _t.querySelector(".tfMorePair")) == null || l.classList.toggle("details", !!(B.details && o)), eo = t, tl();
  }
  function Qc() {
    const t = _t.querySelector("[data-more-pages]");
    !t || !B || (t.scrollTo({ left: (B.page || 0) * t.clientWidth, behavior: "instant" }), al(), el(t));
  }
  function el(t) {
    const e = t.children[(B == null ? void 0 : B.page) || 0];
    e && (t.style.height = e.scrollHeight + "px");
  }
  function al() {
    const t = (B == null ? void 0 : B.page) || 0;
    _t.querySelectorAll("[data-more-page]").forEach((e) => {
      const a = Number(e.dataset.morePage) === t;
      e.setAttribute("aria-selected", String(a)), e.tabIndex = a ? 0 : -1;
    });
  }
  function td(t, e) {
    var o, i;
    const a = _t.querySelector("[data-more-pages]");
    !a || !B || (B.page = Math.max(0, Math.min((B.pages || 2) - 1, t)), a.scrollTo({ left: B.page * a.clientWidth, behavior: (o = window.matchMedia) != null && o.call(window, "(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" }), al(), el(a), (i = _t.querySelector('[data-more-page="' + B.page + '"]')) == null || i.focus({ preventScroll: !0 }));
  }
  let ed = 0;
  _t.addEventListener("scroll", (t) => {
    var a;
    const e = t.target;
    !((a = e.matches) != null && a.call(e, "[data-more-pages]")) || !B || (clearTimeout(ed), ed = setTimeout(() => {
      if (!B) return;
      const o = Math.round(e.scrollLeft / Math.max(1, e.clientWidth));
      o !== (B.page || 0) && (B.page = o, al(), el(e));
    }, 80));
  }, !0), _t.addEventListener("input", (t) => {
    var e, a;
    (a = (e = t.target).matches) != null && a.call(e, "[data-code]") && B && (B.code = t.target.value);
  }), _t.addEventListener("click", (t) => {
    const e = t.target.closest("[data-key]"), a = t.target.closest("[data-coded]");
    if (!B || !(e || a)) return;
    const o = _t.querySelector("[data-code]");
    if (e) {
      const h = e.dataset.key, x = B.code || "";
      B.code = h === "clear" ? "" : h === "back" ? x.slice(0, -1) : (x + h).slice(0, 12), o && (o.value = B.code);
      return;
    }
    const [i, c, l] = a.dataset.coded.split("|"), f = B.code;
    B.code = "", o && (o.value = ""), Sr(i, c, l, f ? { code: f } : null).catch(() => {
    });
  }), setInterval(() => {
    B && Fn();
  }, 15 * 1e3);
  function ki(t, e) {
    var i, c;
    const a = !!(B && e && _t.contains(e)), o = a && _t.querySelector(".tfMore");
    if (a && (B.scroll = o.scrollTop), a && !B.under) {
      const l = _t.querySelector(".tfMorePair"), f = { more: B, parts: eo, opener: e };
      l.classList.add("still"), l.style.transform = "", l.inert = !0, ja.innerHTML = "", ja.appendChild(l), ja.classList.toggle("wide", _t.classList.contains("wide")), ja.hidden = !1, _t.hidden = !0, _t.innerHTML = "", B = { id: t, opener: e, back: null, frame: null, under: f, at: Number((i = e == null ? void 0 : e.dataset) == null ? void 0 : i.at) || null }, nl();
      return;
    }
    B = { id: t, opener: a ? B.opener : e, back: a ? B : null, frame: a ? B.frame || { wide: o.classList.contains("wide"), h: o.offsetHeight } : null, under: a ? B.under : null, at: Number((c = e == null ? void 0 : e.dataset) == null ? void 0 : c.at) || null }, nl();
  }
  let ol = !1;
  function nl() {
    eo = [], ol = !_t.hidden, It.forEach((t, e) => {
      e !== B.id && _t.contains(t.el) && (t.destroy(), It.delete(e));
    }), Fn(), ol = !1;
  }
  function Mi() {
    if (!B) return;
    const t = B;
    sm(_t, () => {
      B === t && rl();
    });
  }
  function rl() {
    var o, i, c, l, f, h, x, k;
    const t = B == null ? void 0 : B.opener, e = B == null ? void 0 : B.under;
    B = null, It.forEach((v, _) => {
      _t.contains(v.el) && (v.destroy(), It.delete(_));
    }), ze.forEach((v, _) => {
      /^more2?:/.test(_) && ze.delete(_);
    }), _t.hidden = !0, _t.innerHTML = "";
    const a = { preventScroll: !0 };
    if (e) {
      const v = ja.firstElementChild;
      B = e.more, eo = e.parts, v && (v.inert = !1, _t.appendChild(v)), _t.classList.toggle("wide", ja.classList.contains("wide")), ja.hidden = !0, ja.innerHTML = "", _t.hidden = !1;
      const _ = _t.querySelector(".tfMore");
      _ && (_.scrollTop = B.scroll || 0), Fn(), (i = (o = e.opener) != null && o.isConnected ? e.opener : _t.querySelector("[data-more-close]")) == null || i.focus(a);
      return;
    }
    t != null && t.isConnected ? t.focus(a) : (c = t == null ? void 0 : t.dataset) != null && c.more ? (l = N.querySelector('[data-more="' + CSS.escape(t.dataset.more) + '"]')) == null || l.focus(a) : (f = t == null ? void 0 : t.dataset) != null && f.summary ? (h = N.querySelector('[data-summary="' + CSS.escape(t.dataset.summary) + '"]')) == null || h.focus(a) : (x = t == null ? void 0 : t.hasAttribute) != null && x.call(t, "data-favs-edit") && ((k = N.querySelector("[data-favs-edit]")) == null || k.focus(a));
  }
  const Hu = { moisture: "moisture", light: "light", brightness: "light", temperature: "temperature", fertility: "fertility", conductivity: "fertility" };
  function Nu(t) {
    const e = String(Gt(t).problem || ""), a = "sensor." + t.split(".")[1] + "_";
    return e === "none" ? [] : e.split(",").map((o) => o.trim().split(" ")).map(([o, i]) => {
      const c = Hu[o], l = a + c;
      if (!c || !M[l] || !_n[c]) return "";
      const f = Gt(l).unit_of_measurement || "", [h, x] = _n[c], k = i === "low";
      return '<div class="tfMoreGroup tfPlantProblem"><div class="tfMoreGroupName">' + P(mt(l)) + '</div><svg class="tfGraph tfPlantGraph" data-plant-graph="' + P(l) + '" data-guide="' + (k ? h : x) + '" data-guide-word="' + P("Wants " + (k ? "" : "up to ") + (k ? h : x).toLocaleString() + (f === "%" ? "%" : f ? " " + f : "") + (k ? " or more" : "")) + '" role="img" aria-label="' + P(mt(l)) + ', last 24 hours"></svg></div>';
    }).filter(Boolean);
  }
  const ad = (t) => t.querySelectorAll("[data-plant-graph]").forEach((e) => sd(e.dataset.plantGraph, e, { guide: Number(e.dataset.guide), guideWord: e.dataset.guideWord }).then(() => Ql(e)));
  function il(t, e, a, o = {}) {
    const i = e.map((V) => V[1]).concat(o.guide != null ? [o.guide] : []), c = o.zero ? 0 : Math.min(...i), l = Math.max(...i), f = Math.max(120, t.clientWidth || 260), h = Math.max(60, t.clientHeight || 130), x = 8, k = h - 20, v = Date.now() - 24 * 3600 * 1e3, _ = 24 * 3600 * 1e3, S = (V) => Math.max(0, Math.min(f, (V - v) / _ * f)), C = (V) => l === c ? (x + k) / 2 : k - (V - c) / (l - c) * (k - x);
    let R = "M" + S(e[0][0]).toFixed(1) + " " + C(e[0][1]).toFixed(1);
    if (e.length > 2) R = zp(e.map((V) => [S(V[0]), C(V[1])]));
    else for (let V = 1; V < e.length; V++) R += o.smooth ? "L" + S(e[V][0]).toFixed(1) + " " + C(e[V][1]).toFixed(1) : "H" + S(e[V][0]).toFixed(1) + "V" + C(e[V][1]).toFixed(1);
    t.setAttribute("viewBox", "0 0 " + f + " " + h), t.setAttribute("aria-label", a), t.innerHTML = Gp(f, x, k) + '<path d="' + R + "V" + k + "H" + S(e[0][0]).toFixed(1) + 'Z" fill="' + (o.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + R + '" fill="none" stroke="' + (o.colour || "var(--primary)") + '" stroke-width="' + Me.graphs.weight + '" stroke-linejoin="round" stroke-linecap="round"/><text x="0" y="' + (h - 4) + '">24 h ago</text><text x="' + f + '" y="' + (h - 4) + '" text-anchor="end">Now</text>' + (o.guide != null ? '<line class="tfGuide" x1="0" x2="' + f + '" y1="' + C(o.guide).toFixed(1) + '" y2="' + C(o.guide).toFixed(1) + '"/><text class="tfGuideWord" x="' + f + '" y="' + (C(o.guide) < 20 ? C(o.guide) + 14 : C(o.guide) - 5).toFixed(1) + '" text-anchor="end">' + P(o.guideWord || "") + "</text>" : "");
  }
  const od = { lock: ["unlocked", "open", "opening"], cover: ["open", "opening", "closing"], valve: ["open", "opening", "closing"], vacuum: ["cleaning", "returning"] }, Ou = (t, e) => {
    const a = t.split(".")[0];
    return od[a] ? od[a].includes(e) : a === "alarm_control_panel" || a === "climate" || a === "media_player" ? !["off", "standby", "disarmed", "unavailable", "unknown"].includes(e) : e === "on";
  }, Iu = (t) => {
    const e = t.split(".")[0], a = Gt(t).device_class;
    return e === "binary_sensor" ? { moisture: "Wet", smoke: "Smoke", gas: "Gas", carbon_monoxide: "Carbon monoxide", safety: "Unsafe" }[a] || (Fi.includes(a) ? "Open" : "On") : { lock: "Unlocked", cover: "Open", valve: "Open", vacuum: "Cleaning", alarm_control_panel: "Armed" }[e] || "On";
  }, nd = /* @__PURE__ */ new Map();
  let Fu = 0;
  async function qu(t) {
    var i;
    let e = nd.get(t);
    if (!e || Date.now() - e.at > 60 * 1e3) {
      let c = [];
      if (Va(t) && Number.isFinite(Number((i = M[t]) == null ? void 0 : i.state))) c = id(t).map(([l, f]) => [l, String(f)]);
      else try {
        const l = await D({ type: "history/history_during_period", start_time: new Date(Date.now() - 864e5).toISOString(), entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        c = ((l == null ? void 0 : l[t]) || []).map((f) => [f.lu != null ? f.lu * 1e3 : Date.parse(f.last_updated || f.last_changed), String(f.s ?? f.state)]).filter(([f]) => Number.isFinite(f));
      } catch {
      }
      c.length || (c = (Uo || []).filter((l) => l.entity_id === t).map((l) => [l.when * 1e3, String(l.state)])), e = { at: Date.now(), pts: c }, nd.set(t, e);
    }
    const a = M[t], o = e.pts.slice().sort((c, l) => c[0] - l[0]);
    return a && (!o.length || o[o.length - 1][1] !== a.state) && o.push([Date.parse(a.last_changed) || Date.now(), a.state]), o;
  }
  async function rd(t, e, a) {
    const o = await qu(t);
    if (!e.isConnected) return;
    const i = o.map(([E, wt]) => [E, Number(wt)]);
    if (o.length > 1 && i.every(([, E]) => Number.isFinite(E))) {
      il(e, i, mt(t) + ", last 24 hours");
      return;
    }
    const c = Date.now(), l = c - 864e5, f = Math.max(200, e.clientWidth || 360), h = 62, x = (E) => Math.max(0, Math.min(f, (E - l) / 864e5 * f)), k = [];
    let v = null;
    o.forEach(([E, wt]) => {
      const Wt = Ou(t, wt);
      Wt && v == null ? v = Math.max(E, l) : !Wt && v != null && (k.push([v, Math.max(E, l)]), v = null);
    }), v != null && k.push([v, c]);
    const _ = cs(t) ? "var(--danger)" : t.startsWith("light.") ? "#ffaa00" : "var(--primary)", S = Iu(t), C = "tfDayClip" + ++Fu, R = k.map(([E, wt]) => S + (wt >= c - 1e3 && E <= l + 1e3 ? " all day" : wt >= c - 1e3 ? " since " + Pa(E) : E <= l + 1e3 ? " until " + Pa(wt) : " " + Pa(E) + "–" + Pa(wt)));
    let V = "", L = -1 / 0;
    k.forEach(([E], wt) => {
      const Wt = R[wt].length * 5.4, Bt = Math.min(x(E), f - Wt);
      Bt < L + 8 || (V += '<text x="' + Bt.toFixed(1) + '" y="10">' + P(R[wt]) + "</text>", L = Bt + Wt);
    });
    let G = '<text x="' + f + '" y="' + (h - 2) + '" text-anchor="end">Now</text>';
    [0, 6, 12, 18].forEach((E) => {
      let wt = new Date(c).setHours(E, 0, 0, 0);
      wt > c && (wt -= 864e5), x(wt) > 8 && x(wt) < f - 34 && (G += '<text x="' + x(wt).toFixed(1) + '" y="' + (h - 2) + '" text-anchor="middle">' + String(E).padStart(2, "0") + "</text>");
    }), e.setAttribute("viewBox", "0 0 " + f + " " + h), e.setAttribute("aria-label", mt(t) + ", last 24 hours: " + (R.length ? R.join(", ") : "no changes")), e.innerHTML = '<clipPath id="' + C + '"><rect x="0" y="18" width="' + f + '" height="26" rx="8"/></clipPath>' + V + '<rect x="0" y="18" width="' + f + '" height="26" rx="8" fill="var(--text)" fill-opacity=".1"/><g clip-path="url(#' + C + ')">' + k.map(([E, wt]) => '<rect x="' + x(E).toFixed(1) + '" y="18" width="' + Math.max(2, x(wt) - x(E)).toFixed(1) + '" height="26" fill="' + _ + '"/>').join("") + "</g>" + (a && a >= l ? '<line x1="' + x(a).toFixed(1) + '" x2="' + x(a).toFixed(1) + '" y1="13" y2="49" stroke="var(--text)" stroke-width="2" stroke-linecap="round"/>' : "") + G;
  }
  function id(t) {
    var o;
    const e = Number((o = M[t]) == null ? void 0 : o.state), a = Date.now();
    if (Gt(t).state_class === "total_increasing") {
      const i = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), c = Math.max(1, a - i);
      return [...Array(49)].map((l, f) => i + c * f / 48).map((l) => [l, Math.round(e * Math.pow((l - i) / c, 1.3) * 100) / 100]);
    }
    if (Va(t) && t.endsWith("_moisture")) return [...Array(48)].map((i, c) => [a - (48 - c) * 30 * 60 * 1e3, Math.round((e + 22 * Math.pow(1 - c / 48, 1.2)) * 10) / 10]);
    if (Va(t) && t.endsWith("_light")) {
      const i = (l) => {
        const f = new Date(l).getHours() + new Date(l).getMinutes() / 60;
        return Math.max(0, Math.sin((f - 6) / 14 * Math.PI));
      }, c = (l) => 0.8 + 0.2 * i(l);
      return [...Array(48)].map((l, f) => a - (48 - f) * 30 * 60 * 1e3).map((l) => [l, Math.round(e * c(l) / c(a))]);
    }
    return [...Array(48)].map((i, c) => [a - (48 - c) * 30 * 60 * 1e3, Math.round(e * (0.96 + 0.04 * Math.sin(c / 6)) * 10) / 10]);
  }
  async function sd(t, e, a = {}) {
    var C, R;
    let o = pt.get(t);
    if (t.endsWith("_solar_power")) o = { at: Date.now(), points: vd() };
    else if (Va(t)) o = { at: Date.now(), points: id(t) };
    else if (!o || Date.now() - o.at > 5 * 60 * 1e3) {
      try {
        const V = new Date(Date.now() - 864e5).toISOString(), L = await D({ type: "history/history_during_period", start_time: V, entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), G = ((L == null ? void 0 : L[t]) || []).map((E) => [E.lu != null ? E.lu * 1e3 : Date.parse(E.last_updated || E.last_changed), Number(E.s ?? E.state)]).filter(([E, wt]) => Number.isFinite(E) && Number.isFinite(wt));
        o = { at: Date.now(), points: G };
      } catch {
        o = { at: Date.now(), points: [] };
      }
      pt.set(t, o);
    }
    const i = e || N.querySelector('[data-graph="' + CSS.escape(t) + '"]');
    if (!i) return;
    const c = M[t], l = ((C = c == null ? void 0 : c.attributes) == null ? void 0 : C.unit_of_measurement) || "", f = o.points.slice(), h = Number(c == null ? void 0 : c.state);
    if (Number.isFinite(h) && !t.endsWith("_solar_power") && f.push([Date.now(), h]), f.length < 2) {
      i.setAttribute("aria-label", mt(t) + ": no history for the last 24 hours"), i.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const x = f.map((V) => V[1]), k = Math.min(...x), v = Math.max(...x), _ = (V) => V.toLocaleString(void 0, { maximumFractionDigits: Math.abs(V) >= 100 ? 0 : 1 }), S = ((R = c == null ? void 0 : c.attributes) == null ? void 0 : R.state_class) === "total_increasing";
    il(i, f, mt(t) + ", last 24 hours: " + (S ? "+" + _(x[x.length - 1] - x[0]) : k === v ? _(k) : _(k) + " to " + _(v)) + (l ? " " + l : ""), { smooth: t.endsWith("_solar_power"), zero: t.endsWith("_solar_power"), ...a });
  }
  function ld() {
    const t = N == null ? void 0 : N.querySelector("[data-solar]");
    if (!t) return;
    const e = vd();
    il(t, e, "Solar, last 24 hours: up to " + Ae(Math.max(...e.map((a) => a[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function Wu(t, e) {
    const a = e.entity_id, o = kt.get(a) || {}, i = { open_cover: 100, close_cover: 0, set_cover_position: e.position, toggle: fa(a) > 0 ? 0 : 100 }[t], c = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: e.tilt_position }[t];
    i != null && (o.pos = i), c != null && (o.tilt = c), t === "stop_cover" && (delete o.pos, delete o.tilt), t === "stop_cover_tilt" && delete o.tilt, o.at = Date.now(), kt.set(a, o);
  }
  function cd(t, e, a) {
    var i;
    const o = a == null ? void 0 : a.entity_id;
    return t !== "light" || typeof o != "string" || !na[o] || !Ve(o) || a.brightness_pct != null || a.brightness != null ? [e, a] : e !== "turn_on" && !(e === "toggle" && ((i = M[o]) == null ? void 0 : i.state) !== "on") ? [e, a] : ["turn_on", { ...a, brightness_pct: na[o] }];
  }
  function Sr(t, e, a, o) {
    let i = { entity_id: a, ...o || {} };
    return [e, i] = cd(t, e, i), t === "cover" && Wu(e, i), Ga[a] = (Ga[a] || 0) + 1, oo.set(bp, JSON.stringify(Ga)), Or.call(t, e, i) ? Promise.resolve() : Promise.resolve(I(t, e, i));
  }
  function sl(t) {
    const [e, a, o, i] = t.split("|");
    Sr(e, a, o, i ? JSON.parse(i) : null).catch(() => {
    });
  }
  function _r(t, e) {
    it.set("pos|" + t, e), ba.delete(t), eo = eo.map(() => ""), [N, _t].forEach((o) => o.querySelectorAll('[data-blocks="' + CSS.escape(t) + '"]').forEach((i) => cn(i, e)));
    const a = N.querySelector('.tfAction[data-k="' + CSS.escape(t) + '"] .tfName .activityRowMeta');
    if (a && (a.textContent = Math.round(e) + "%"), (B == null ? void 0 : B.id) === t) {
      const o = _t.querySelector(".tfMoreState"), i = _t.querySelector(".tfMoreSub");
      o && (o.textContent = Math.round(e) + "%", o.classList.add("live")), i && (i.textContent = "Currently " + fa(t) + "%");
    }
    $c(t).forEach((o) => o.update(xi(t)));
  }
  const ju = (t, e) => {
    const a = t.shiftKey ? 10 : 1, o = { ArrowUp: e + a, ArrowRight: e + a, ArrowDown: e - a, ArrowLeft: e - a, PageUp: e + 25, PageDown: e - 25, Home: 0, End: 100 }[t.key];
    return o == null ? null : Math.max(0, Math.min(100, Math.round(o)));
  };
  function Vu(t, e) {
    var R;
    const a = t.dataset.blocks;
    (R = t.setPointerCapture) == null || R.call(t, e.pointerId);
    const o = (V) => {
      const L = t.getBoundingClientRect();
      return Math.max(0, Math.min(100, (V.clientX - L.left) / L.width * 100));
    }, i = o(e), c = e.clientX;
    let l = !1, f = Io(a), h = i, x = 0;
    const k = () => {
      f = Math.abs(h - f) < 0.2 ? h : f + (h - f) * 0.14, _r(a, f), x = requestAnimationFrame(k);
    }, v = () => {
      l || (l = !0, t.classList.add("fine"), x = requestAnimationFrame(k));
    }, _ = setTimeout(v, 350), S = (V) => {
      h = o(V), Math.abs(V.clientX - c) > 6 && (clearTimeout(_), v());
    }, C = () => {
      clearTimeout(_), cancelAnimationFrame(x), t.removeEventListener("pointermove", S), t.removeEventListener("pointerup", C), t.removeEventListener("pointercancel", C), t.classList.remove("fine"), _r(a, l ? Math.round(f) : (Math.min(3, Math.floor(i / 25)) + 1) * 25), Cr("pos", a);
    };
    t.addEventListener("pointermove", S), t.addEventListener("pointerup", C), t.addEventListener("pointercancel", C);
  }
  function dd(t) {
    var e;
    W = t.dataset.area, N.querySelectorAll(".tfAreaPanel").forEach((a) => {
      var i;
      const o = a === t;
      a.classList.toggle("active", o), a.setAttribute("aria-expanded", String(o)), (i = a.querySelector(".panelExpanded")) == null || i.toggleAttribute("inert", !o);
    }), ba.set("areas", T(((e = N.querySelector('[data-k="areas"]')) == null ? void 0 : e.style.order) || 1));
  }
  const Si = {
    bright: { value: (t, e) => Math.round(e * 100), text: (t, e) => e ? e + "%" : "Off", send: (t, e) => e > 0 ? ["light", "turn_on", { brightness_pct: e }] : ["light", "turn_off", {}] },
    ct: { value: (t, e) => {
      const [a, o] = No(t);
      return Math.round(a + e * (o - a));
    }, text: (t, e) => e.toLocaleString() + "k", send: (t, e) => ["light", "turn_on", { color_temp_kelvin: e }] },
    hue: { value: (t, e) => Math.round(e * 360), text: () => "Colour", send: (t, e) => {
      var a;
      return ["light", "turn_on", { hs_color: [e, Math.max(60, ((a = Gt(t).hs_color) == null ? void 0 : a[1]) || 100)] }];
    } },
    pos: { value: (t, e) => Math.round(e * 100), text: (t, e) => Math.round(e) + "%", send: (t, e) => ["cover", "set_cover_position", { position: Math.round(e) }] },
    tilt: { value: (t, e) => Math.round(e * 100), text: (t, e) => "Tilt " + e + "%", send: (t, e) => ["cover", "set_cover_tilt_position", { tilt_position: e }] },
    vol: { value: (t, e) => Math.round(e * 100) / 100, text: (t, e) => Math.round(e * 100) + "%", send: (t, e) => ["media_player", "volume_set", { volume_level: e }] },
    // the redrawn popups' tracks (17 Nov): warmth flipped (cold at the left), a fan's speed, a valve's position, a
    // cover's tilt as a level
    ctf: { value: (t, e) => {
      const [a, o] = No(t);
      return Math.round(o - e * (o - a));
    }, text: (t, e) => e.toLocaleString() + "k", send: (t, e) => ["light", "turn_on", { color_temp_kelvin: e }] },
    fan: { value: (t, e) => {
      const a = Gt(t).percentage_step || 1;
      return Math.round(e * 100 / a) * a;
    }, text: (t, e) => Math.round(e) + "%", send: (t, e) => ["fan", "set_percentage", { percentage: Math.round(e) }] },
    valve: { value: (t, e) => Math.round(e * 100), text: (t, e) => e + "%", send: (t, e) => ["valve", "set_valve_position", { position: e }] },
    tiltp: { value: (t, e) => Math.round(e * 100), text: (t, e) => e + "%", send: (t, e) => ["cover", "set_cover_tilt_position", { tilt_position: e }] }
  };
  function _i(t, e, a, o) {
    var x;
    const i = Si[e].value(a, o);
    it.set(e + "|" + a, i);
    const c = Math.round(o * 100) + "%", l = t.querySelector("i");
    if (e === "tilt") {
      l.style.width = "calc((100% - 8px) * " + o + ")";
      const [k, v] = t.querySelectorAll("span");
      k.classList.toggle("lit", o > 0.08), v.classList.toggle("lit", o > 0.92), ba.delete(a), eo = eo.map(() => ""), $c(a).forEach((_) => _.update(xi(a)));
    } else if (l) l.style.width = c;
    else {
      let k = t.querySelector("b");
      k || (k = document.createElement("b"), t.appendChild(k)), k.style.left = c;
    }
    t.setAttribute("aria-valuenow", String(Math.round(o * 100)));
    const f = t.querySelector(".tfBarVal");
    f && (f.textContent = Si[e].text(a, i));
    const h = t.closest(".tfMore") ? t.closest(".tfMore").querySelector(".tfMoreState") : (x = t.closest(".tfAction")) == null ? void 0 : x.querySelector(".tfName .activityRowMeta");
    h && (h.textContent = Si[e].text(a, i));
  }
  function Cr(t, e) {
    const a = it.get(t + "|" + e), [o, i, c] = Si[t].send(e, a), l = () => setTimeout(() => {
      it.delete(t + "|" + e), Le();
    }, 1500);
    Sr(o, i, e, c).then(l, l);
  }
  function pd(t) {
    t.addEventListener("click", (e) => {
      var o;
      const a = e.target.closest("[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-fav-hide],[data-energy-pick],[data-more-page],[data-path],.tfAreaPanel");
      if ($e && !e.target.closest(".tfBoardMenu,[data-board-more]") && Qa(), !(!a || !t.contains(a) || a.disabled))
        if (a.dataset.boardMore)
          ($e == null ? void 0 : $e.key) === a.dataset.boardMore ? Qa(!0) : Zf(a.dataset.boardMore, a);
        else if (a.dataset.boardAct) Kf($e.key, a.dataset.boardAct);
        else if (a.dataset.boardShow) Cs(a.dataset.boardShow);
        else if (a.dataset.favHide) Dc(a.dataset.favHide, !1);
        else if (a.dataset.energyPick) Xl(a.dataset.energyPick);
        else if (a.dataset.act) sl(a.dataset.act);
        else if (a.hasAttribute("data-details")) Js(!(B != null && B.details));
        else if (a.hasAttribute("data-details-close")) Js(!1);
        else if (a.dataset.summary) Ja(a.dataset.summary, a);
        else if (a.dataset.star) fr(a.dataset.star);
        else if (a.hasAttribute("data-more-back")) {
          const i = B.id;
          B = B.back, nl(), (o = _t.querySelector('.tfMore [data-more="' + CSS.escape(i) + '"]')) == null || o.focus({ preventScroll: !0 });
        } else a.hasAttribute("data-favs-edit") ? ki("favourites", a) : a.dataset.acts ? JSON.parse(a.dataset.acts).forEach(([i, c, l, f]) => Sr(i, c, l, f).catch(() => {
        })) : a.dataset.more ? ki(a.dataset.more, a) : a.hasAttribute("data-more-close") ? Mi() : a.dataset.morePage ? td(Number(a.dataset.morePage)) : a.dataset.path ? Kt(a.dataset.path) : a.dataset.go ? jc("room:" + a.dataset.go) : a.hasAttribute("data-area-back") ? zs() : a.classList.contains("tfAreaPanel") && !a.classList.contains("active") && dd(a);
    }), t.addEventListener("keydown", (e) => {
      var o, i, c, l, f, h, x;
      const a = e.target;
      if ((o = a.dataset) != null && o.more && a.tagName !== "BUTTON" && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), ki(a.dataset.more, a)), (i = a.dataset) != null && i.energyPick && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), Xl(a.dataset.energyPick)), (c = a.classList) != null && c.contains("tfAreaPanel") && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), dd(a)), (l = a.dataset) != null && l.summary && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), Ja(a.dataset.summary, a)), e.key === "Escape" && $e && t === N) {
        e.preventDefault(), Qa(!0);
        return;
      }
      if (e.key === "Escape" && sa && t === N) {
        e.preventDefault(), _s(!1), (f = p("dashEditNav")) == null || f.focus();
        return;
      }
      if (e.key === "Escape" && tt && t === N && (e.preventDefault(), zs()), (h = a.dataset) != null && h.blocks) {
        const k = a.dataset.blocks, v = ju(e, Math.round(Io(k)));
        if (v == null) return;
        e.preventDefault(), _r(k, v), clearTimeout(re.get(k)), re.set(k, setTimeout(() => Cr("pos", k), 500));
        return;
      }
      if ((x = a.dataset) != null && x.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
        e.preventDefault();
        const [k, v] = a.dataset.drag.split("|"), _ = Number(a.getAttribute("aria-valuenow")) / 100, S = e.key === "Home" ? 0 : e.key === "End" ? 1 : Math.max(0, Math.min(1, _ + (e.key === "ArrowLeft" || e.key === "ArrowDown" ? -0.05 : 0.05)));
        _i(a, k, v, S), Cr(k, v);
      }
    }), t.addEventListener("pointerdown", (e) => {
      var Wt;
      const a = e.target.closest("[data-blocks]");
      if (a && e.button === 0) {
        e.preventDefault(), Vu(a, e);
        return;
      }
      const o = e.target.closest("[data-drag]");
      if (!o || e.button > 0) return;
      const [i, c] = o.dataset.drag.split("|"), l = i === "bright" && !Ve(c), f = e.pointerType !== "mouse";
      if (l && !f) {
        sl(Dt("light", "toggle", c));
        return;
      }
      const h = i === "bright" && ((Wt = M[c]) == null ? void 0 : Wt.state) !== "on", x = i === "tilt" ? 4 : 0, k = () => o.getBoundingClientRect().width - x * 2, v = (Bt) => {
        const Xt = o.getBoundingClientRect();
        return Math.max(0, Math.min(1, (Bt.clientX - Xt.left - x) / k()));
      };
      let _ = f ? "waiting" : h ? "pressed" : "dragging", S = 0;
      const C = e.clientX, R = e.clientY, V = (Bt, Xt) => Math.hypot(Bt.clientX - C, Bt.clientY - R) > Xt, L = () => {
        try {
          o.setPointerCapture(e.pointerId);
        } catch {
        }
      };
      f || (e.preventDefault(), L()), _ === "dragging" && _i(o, i, c, v(e));
      const G = () => {
        var Bt, Xt;
        _ = "sliding", ft = o, o.classList.add("held"), L(), (Bt = navigator.userActivation) != null && Bt.hasBeenActive && ((Xt = navigator.vibrate) == null || Xt.call(navigator, 8)), S = h ? (na[c] ?? 100) / 100 : Number(o.getAttribute("aria-valuenow")) / 100;
      }, E = (Bt) => {
        _ === "waiting" && V(Bt, xt) ? !l && Math.abs(Bt.clientX - C) > Math.abs(Bt.clientY - R) ? G() : _ = "gone" : _ === "pressed" && V(Bt, 4) && (_ = "dragging"), _ === "sliding" ? _i(o, i, c, Math.max(0, Math.min(1, S + (Bt.clientX - C) / k()))) : _ === "dragging" && _i(o, i, c, v(Bt));
      }, wt = (Bt) => {
        ["pointermove", "pointerup", "pointercancel"].forEach((Xt, ce) => o.removeEventListener(Xt, ce ? wt : E)), o.classList.remove("held"), ft === o && (ft = null), _ === "sliding" || _ === "dragging" ? Cr(i, c) : Bt.type === "pointerup" && l ? sl(Dt("light", "toggle", c)) : Bt.type === "pointerup" && h && (_ === "waiting" || _ === "pressed") && Sr("light", "turn_on", c).catch(() => {
        });
      };
      o.addEventListener("pointermove", E), o.addEventListener("pointerup", wt), o.addEventListener("pointercancel", wt);
    }), t.addEventListener("touchmove", (e) => {
      ft && e.cancelable && e.preventDefault();
    }, { passive: !1 });
  }
  return N && w && (Go(), pd(N), pd(_t), _t.addEventListener("click", (t) => {
    t.target === _t && Mi();
  }), (fd = n.getElementById("homeNav")) == null || fd.addEventListener("click", () => {
    tt && zs();
  }), (ud = n.querySelector(".bottomNav")) == null || ud.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + Ii + "</button>"), (hd = p("dashEditNav")) == null || hd.addEventListener("click", () => A ? Fs(!vo) : _s(!sa)), N.addEventListener("pointerdown", hu), N.addEventListener("pointerdown", Gf), N.addEventListener("click", (t) => {
    A && vo && t.target.closest(".tfBoardItem") && (t.preventDefault(), t.stopPropagation());
  }, !0), N.addEventListener("scroll", (t) => {
    var e;
    (e = t.target.classList) != null && e.contains("hcFadeList") && mc(t.target);
  }, !0), new ResizeObserver(() => {
    g.classList.contains("tfDash") && us() !== ps ? Le() : di();
  }).observe(N), window.addEventListener("resize", di, { passive: !0 }), _t.addEventListener("keydown", (t) => {
    var e, a;
    t.key === "Escape" ? (t.stopPropagation(), B != null && B.details ? Js(!1) : Mi()) : (t.key === "ArrowLeft" || t.key === "ArrowRight") && ((a = (e = t.target).closest) != null && a.call(e, ".tfMoreDots")) && (t.preventDefault(), td(((B == null ? void 0 : B.page) || 0) + (t.key === "ArrowRight" ? 1 : -1)));
  })), Y(), {
    update(t) {
      if (!w) return;
      const e = !Object.keys(M).length;
      M = { ...Object.fromEntries(Object.entries(M).filter(([o]) => Va(o))), ...t || {} };
      for (const o in M) o.startsWith("light.") && M[o].state === "on" && Ve(o) && Xa(o, Ya(M[o]));
      e ? Wa() : Le();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      an = !0, we == null || we.destroy(), we = null, ve == null || ve.forEach((t) => t.destroy()), ve = null;
    },
    resume() {
      an = !1, !(!w || !(N != null && N.querySelector("[data-tf]"))) && (wa.isConnected && Fr(wa.style.order), qr());
    }
  };
}
const j0 = "0.11.0";
function V0() {
  if (document.getElementById("homecore-fonts")) return;
  const n = document.createElement("link");
  n.id = "homecore-fonts", n.rel = "stylesheet", n.href = "https://fonts.googleapis.com/css2?family=Geist:wght@200;300;400;500;600;700&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(n);
}
class z0 extends HTMLElement {
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
    const d = !this._hass;
    if (this._hass = r, d) {
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
    V0();
    const r = this.shadowRoot || this.attachShadow({ mode: "open" });
    r.innerHTML = `<style>${$u}${Ju}${Qu}${th}</style>${eh}`;
    const d = r.getElementById("app");
    d.style.opacity = "0", this._shell = nh(r, {
      setLight: (p) => this.classList.toggle("lightBody", p),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._test = W0(r, { config: this._config, getHass: () => this._hass }), this._test.update(this._hass.states), nm(r, d), im(r), this.isConnected || this._test.suspend(), d.style.transition = "opacity .2s ease", d.style.opacity = "";
  }
  _toggleFullscreen() {
    const r = document;
    if (r.fullscreenElement || r.webkitFullscreenElement) {
      (r.exitFullscreen || r.webkitExitFullscreen).call(r);
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
customElements.get("homecore-card") || (customElements.define("homecore-card", z0), window.customCards = window.customCards || [], window.customCards.push({
  type: "homecore-card",
  name: "HomeCore",
  description: "A test environment for the HomeCore design language.",
  preview: !1
}), console.info(`%c HOMECORE %c ${j0} `, "background:#03a9f4;color:#090909;font-weight:700", ""));
