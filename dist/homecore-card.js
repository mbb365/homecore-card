const Jf = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-text-on-accent:#090909;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#26221e;--color-text-on-selected:#fbf9f6;--color-bg-segment-selected:#fbf9f6;--color-accent-primary:#0288d1;--color-border-focus:#0288d1;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.pill,.primary,.navBtn,.tab,.back{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.hcAreaGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.hcAreaPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.hcAreaPanel.active{flex:7 1 0;min-width:0;cursor:default}.hcAreaPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.hcAreaPanel:before,.hcAreaPanel:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.hcAreaPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.hcAreaPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}#app.light .hcAreaPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.hcAreaPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.hcAreaPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.hcAreaPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}@media (max-width:900px){.hcAreaGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.hcAreaPanel,.hcAreaPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.panelCollapsed{display:none}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.sectionLabel{margin:0 0 8px 22.4px}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.toggleList{display:grid;gap:9.6px}.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.grid{grid-template-columns:1fr}}@media (max-width:620px){#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}}.card,.panel,.tile{border-radius:var(--r-card)}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .hcAreaPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.grid>*{min-width:0}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}:host{--primary:#03A9F4;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.activityRowMeta{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.toggleRow strong,.primary,.tab,.themeBtn,.wxLayoutBtn,.toast{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.note,.settingsSelect,.pill{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.metaTable th,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.hcAreaGallery,.hcAreaPanel{height:340px}@media (max-width:900px){.hcAreaPanel,.hcAreaPanel.active{height:320px}}@media (max-width:900px){.hcAreaGallery{height:auto}.hcAreaPanel,.hcAreaPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel{margin-left:16px}.grid{gap:8px}.sectionLabel{margin-bottom:8px}.hcAreaGallery{gap:8px}.hcAreaPanel,.hcAreaPanel.active{flex:0 0 100%;min-width:100%}.card,.hcAreaPanel{padding:16px}.activityRows{gap:8px}.activityRow{padding:10px 12px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}@media (prefers-reduced-motion: reduce){.sheet{transition:none}}.card,.panel,.hcAreaPanel.active{padding:var(--inset)}.hcAreaPanel{border-radius:var(--r-tile);padding:var(--inset)}.hcAreaPanel.active,.activityRow{border-radius:var(--r-tile)}.activityRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.activityRowMeta{color:var(--text)}.activityRowMeta{margin-top:0}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}#app{--group-bg:var(--card)}.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .note{margin:0 4px 4px}#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}', Qf = `#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}:is(#homeView,.tfMoreBackdrop,.tfEditTray,.tfMiniPhone) .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)){transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .wxWide{gap:16px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}@media (max-width:620px){#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--text)}#app.house.light{--hc-icon:#e6e6e6;--hc-icon-ink:var(--title)}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house :is(.tfAreaHead,#settingsView>.settingsHeader) .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house :is(.tfAreaHead,#settingsView>.settingsHeader) .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}.tfCard .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfAction>.tfActionHead{margin-bottom:auto}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .toggleRow:has(>.themeChoice,>.settingsSelect){flex-direction:column;align-items:stretch;gap:12px}#housePane .toggleRow>.settingsSelect{width:100%}#housePane .themeChoice[hidden]{display:none}#housePane .houseTab>.card:has(>.tfSetGroup){gap:24px}#housePane .tfSetGroup{display:grid;gap:8px}#housePane .tfSetGroup>.sectionLabel{margin:0 16px}#housePane{container:housepane/inline-size}#housePane .tfLightCards{display:none}@container housepane (width < 720px){#housePane .houseTab .metaTableWrap{display:none}#housePane .tfLightCards{display:grid;gap:8px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDacPad{min-width:0}.tfDacPad>dual-controller-v3{display:block}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}:is(.tfStep,.tfSeg,.tfBlocks,.tfTilt,.tfChips){font-family:var(--font-tile)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:0 1 46px;min-width:32px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);cursor:pointer}.tfStep svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfStep output{flex:1 0 auto;white-space:nowrap;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}#housePane .themeChoice,.tfBoardMenu .tfHeightTabs,.wb .wbSegments{gap:4px;padding:4px;border:0;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}#housePane .themeChoice{display:flex;flex-wrap:nowrap;width:100%}#housePane .themeChoice>button{flex:1 1 0;overflow:hidden;text-overflow:ellipsis}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button){height:38px;min-width:0;min-height:0;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile)!important;white-space:nowrap;cursor:pointer}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button):hover:not(:disabled):not([aria-pressed=true]):not([aria-checked=true]):not(.active){background:transparent;color:var(--text)}:is(#housePane .themeChoice :is(.wxLayoutBtn[aria-pressed=true],.themeBtn.active),.tfBoardMenu .tfHeightTabs button[aria-checked=true],.wb .wbSegments button[aria-pressed=true]){background:var(--bright);color:var(--on-bright)}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none;container:blocks/inline-size}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:12px 4px 4px 12px}.tfBlocks>span:nth-child(4){border-radius:4px 12px 12px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 14px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b small{font:inherit}@container blocks (width < 164px){.tfBlocks b small{display:none}}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.tfTilt i{position:absolute;top:4px;bottom:4px;left:4px;border-radius:12px;background:var(--primary)}.tfTilt span{position:relative;padding:0 16px;color:var(--text);font:600 14px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns svg{fill:none}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}#app.house .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}#app.house .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-l);--g1:var(--g1-l);--g2:var(--g2-l)}#app.house .tfSum[data-summary=climate] .tfIcon svg path{fill:url(#hcClimateGrad)}.tfGradDefs{position:absolute;width:0;height:0;overflow:hidden;pointer-events:none}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMoreBackdrop.tfMoreUnder{z-index:179;pointer-events:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}.tfMoreTileHead .tfName{display:grid;flex:1;min-width:0;cursor:default}.tfMoreTileHead :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreTileHead .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfMoreTileHead div.tfIcon{cursor:default}.tfMoreTileHead.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreTileHead.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMorePages{display:grid;grid-auto-flow:column;grid-auto-columns:100%;align-items:start;gap:20px;flex:none;overflow-x:auto;overflow-y:hidden;overscroll-behavior-x:contain;scroll-snap-type:x mandatory;scrollbar-width:none;transition:height .25s cubic-bezier(.2,.7,.3,1)}@media (prefers-reduced-motion:reduce){.tfMorePages{transition:none}}.tfMorePages::-webkit-scrollbar{display:none}.tfMorePage{display:flex;flex-direction:column;gap:14px;min-width:0;scroll-snap-align:start;scroll-snap-stop:always}.tfMoreSpace{flex:none;display:flex;flex-direction:column;justify-content:space-between;gap:12px;height:224px;padding:18px;border-radius:16px;background:var(--tile);overflow:hidden}.tfMoreSpace.tfMoreFill{justify-content:center;align-items:center;height:auto;padding:0;background:none;border-radius:0}.tfMoreSpace.tfMoreFill>.tfCoverArt{width:100%;height:auto;max-width:none;align-self:center}.tfMoreSpace.tfMoreFill>.tfDacPad{width:100%;height:100%}.tfMoreBig{display:flex;align-items:baseline;min-width:0;font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfMoreBig.live{color:var(--primary)}.tfMoreNum{overflow:hidden;text-overflow:ellipsis}.tfMoreUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfMoreFacts{display:flex;flex:1;flex-direction:column;justify-content:space-evenly;min-height:0}.tfMoreFact{display:flex;justify-content:space-between;gap:16px;font:400 14px/20px var(--font)}.tfMoreFact span:first-child{color:var(--muted)}.tfMoreFact span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreGraph{display:flex;flex:none;flex-direction:column;gap:6px}.tfMoreGraph .tfMoreGroupName{margin:0}.tfMoreGraph .tfGraph.tfDay{width:100%}.tfMoreDots{display:flex;flex:none;justify-content:center;gap:4px;margin-top:-4px}.tfMoreDots button{display:grid;place-items:center;width:24px;height:24px;min-height:0;padding:0;border:0;background:none;cursor:pointer}.tfMoreDots button:before{content:"";width:8px;height:8px;border-radius:50%;background:var(--muted);opacity:.45;transition:opacity .15s ease,background .15s ease}.tfMoreDots button[aria-selected=true]:before{background:var(--text);opacity:1}.tfMoreDots.tfMorePageIcons{gap:3px;align-self:center;margin-top:0;padding:3px;border-radius:19px;background:var(--tile)}.tfMoreDots.tfMorePageIcons button{width:48px;height:32px;border-radius:16px;color:var(--muted);transition:background .15s ease,color .15s ease}.tfMoreDots.tfMorePageIcons button:before{display:none}.tfMoreDots.tfMorePageIcons button svg{width:20px;height:20px;fill:currentColor}.tfMoreDots.tfMorePageIcons button[aria-selected=true]{background:var(--text);color:var(--card)}.tfMoreDots.tfMorePageIcons button:not([aria-selected=true]):hover{color:var(--text)}#homeView .grid>.tfDashTiles>.tfAction.tfHeadOnly,#homeView .grid .tfAction.tfHeadOnly{align-self:start}.tfMoreLink{margin-top:auto}.tfMoreLink svg{transform:none!important}.tfMorePage .tfMoreRows{flex:none}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card.tfCard{container-type:inline-size}#homeView .card.tfCard .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMorePair.still{animation:none}#app[data-more=sheet] .tfMore{width:min(640px,100vw)}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}.tfAreaPanel .icon{width:22px;height:22px}#app .hcAreaPanel.tfAreaPanel{padding:0}#app .hcAreaPanel.tfAreaPanel.active{border-radius:28px}.tfAreaPanel .panelExpanded>.tfRoomTile{height:100%;box-sizing:border-box;background:none;box-shadow:none}#app.tfBoard .tfAreaPanel .tfRoomTile[data-rows="1"]{padding:10px}#app.tfBoard .tfAreas[data-rows="1"] .hcAreaPanel.tfAreaPanel.active{border-radius:24px}.tfAreaIcon{flex:none;border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}button.tfAreaIcon{cursor:pointer}.tfAreaGlyph{display:grid;place-items:center}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{display:grid;grid-template-columns:repeat(var(--peg-n),var(--peg-w));grid-auto-rows:60px;grid-auto-flow:row dense;align-items:stretch;gap:16px;max-width:none}#app.tfWeatherOpen .tfBento.tfPegs .wbItem{width:auto;min-height:0;align-self:stretch;display:flex;flex-direction:column}#app.tfWeatherOpen .tfBento.tfPegs .wbItem>*{flex:1;min-height:0}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=wide]{grid-column:span 2;grid-row:span 5}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=double]{grid-column:span 2;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=tile]{grid-column:span 1;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbCard.wbSquare{aspect-ratio:auto}#app.tfWeatherOpen .tfBento.tfPegs .wbWeather .wbNow{margin-bottom:auto}#app.tfWeatherOpen .tfBento.tfPegs :is(.wbStripScroll,.wbBars .wbDayBars,.wbBars.wbTabbed .wbDayBars){min-height:0}#app.tfBoard .tfAreas[data-rows="5"] .tfACMain{position:absolute;left:10px;right:10px;bottom:170.3px;max-width:none;text-align:center}#app.tfBoard .tfAreas[data-rows="4"] .tfACMain{position:absolute;left:10px;right:10px;bottom:164.1px;max-width:none;text-align:center}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:18px 0 10px;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:6px;max-width:calc(100% - 20px)}.tfACMain{max-width:calc(100% - 20px);font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px);min-height:60px}.tfACTiles:has(>:nth-child(3)){margin-top:-60px}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}.tfACTiles:has(>:nth-child(2)){margin-top:-60px}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{gap:28px;padding:40px;background:var(--bg)}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:-20px -20px 0 0}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead) .activityTitle{font-size:24px}@media (max-width:620px){#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:0}}@media (min-width:621px){#app:not([data-more=sheet]) .tfMoreBackdrop.wide{place-items:start center}}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px}.tfMoreActions .tfAction{grid-column:auto}.tfMoreBackdrop{grid-template-columns:minmax(0,1fr)}.tfMoreActions .tfAction{min-width:0}.tfMoreActions>.activityRow{align-self:start;display:grid;grid-auto-flow:column;grid-template-columns:auto minmax(0,1fr);align-items:center;align-content:start;gap:12px;min-width:0;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfMoreActions>.activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreActions>.tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreActions>.activityRow :is(.activityRowName,.activityRowMeta){display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreActions>.activityRow.alert .activityRowMeta{color:var(--danger)}@media (max-width:620px){.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash :is(.tfDash-aq,.tfDash-pollen,.tfDash-radar,.tfDash-hourly,.tfDash-sun,.tfDash-moon,.tfDash-uv,.tfDash-humidity,.tfDash-pressure,.tfDash-wind,.tfDash-visibility){order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app .tfNotAdded{display:none!important}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:0 0 var(--area-open,409px)}#app.tfDash .tfAreaPanel:not(.active){flex:1 0 128px}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;margin-top:auto;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(2,minmax(0,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app.house .tfDashBento .wbItem[data-size]{width:100%}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}.tfDash-wx .wbCondition{display:none}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .hcAreaGallery,#app.tfBoard .tfAreas .hcAreaPanel{height:100%;min-height:0}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;pointer-events:none;color:var(--text)}.tfBoardCells svg{display:block;overflow:visible}.tfBoardCells pattern circle{fill:currentColor;fill-opacity:.16}.tfBoardCells .tfGridCross{fill:none;stroke:currentColor;stroke-opacity:.45;stroke-width:1.5;stroke-linecap:round}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfHeight{display:grid;gap:6px;padding:6px 6px 8px}.tfHeightLabel{padding:0 6px;color:var(--muted);font:500 12px/16px var(--font)}.tfHeightTabs{display:grid;grid-template-columns:repeat(5,1fr)}.tfBoardMenu .tfHeightTabs button{justify-content:center}.tfBoardMenu .tfHeightTabs button:disabled{opacity:.35}.tfWidth{padding-top:0}.tfWidth .tfHeightTabs{grid-template-columns:repeat(3,auto)}.tfSourceList{display:grid;gap:2px}.tfBoardMenu .tfSourceList button[aria-checked=true]{background:var(--bright);color:var(--on-bright)}.tfBoardMenu .tfSourceList button[aria-checked=true]:hover{background:var(--bright)}.tfBoardMenu .tfWidth .tfHeightTabs button{white-space:nowrap}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows{grid-auto-rows:var(--fill-row,60px);margin-top:0}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows>.activityRow{min-height:0;height:var(--fill-row,60px);box-sizing:border-box}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]{padding:0;gap:0}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityHeader,#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.tfDashGraph{display:none}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityRows{margin:0;flex:1}#app.tfBoard .tfBoardItem.tfAction[data-rows="1"]{padding:10px;border-radius:24px}.tfRoomTile{cursor:pointer}.tfRoomTile .tfRoomIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomTile button.tfRoomIcon{cursor:pointer}.tfRoomInline,.tfRoomSub{display:none}.tfRoomReading{display:flex;flex-direction:column;align-items:flex-start;align-self:flex-start;gap:4px;min-width:0;max-width:100%;padding:0;border:0;border-radius:8px;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.tfRoomBig{overflow:hidden;color:var(--text);font:500 36.8px/36.8px var(--font-tile);letter-spacing:-.74px;white-space:nowrap;text-overflow:ellipsis}#app.tfBoard .tfRoomTile[data-rows="4"] .tfRoomBig{font-size:41.6px;line-height:41.6px;letter-spacing:-1.54px}#app.tfBoard .tfRoomTile[data-rows="5"] .tfRoomBig{font-size:51.2px;line-height:51.2px;letter-spacing:-1.54px}.tfRoomTile:not([data-rows="1"]) :is(.tfRoomDevices,.tfRoomHeads){margin-top:auto}.tfRoomTile>.tfActionHead{margin-bottom:0}.tfRoomSub{overflow:hidden;color:var(--muted);font:400 16px/19px var(--font);white-space:nowrap;text-overflow:ellipsis}.tfRoomDevices{display:flex;gap:12px}.tfRoomDevices .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfRoomDevices .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}#app.tfBoard .tfRoomTile[data-rows="1"] .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-rows="1"] :is(.tfRoomReading,.tfRoomDevices),#app.tfBoard .tfRoomTile[data-rows="2"] .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfActionHead .activityRowMeta{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfRoomSub{display:block}#app.tfBoard .tfRoomTile[data-cols="1"]:is([data-rows="3"],[data-rows="4"],[data-rows="5"]) .tfRoomDevices{display:grid;grid-template-columns:repeat(2,max-content)}#app.tfBoard .tfRoomTile[data-cols="1"][data-rows="3"]:has(.tfRoomDevices) .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-cols="1"][data-rows="3"]:has(.tfRoomDevices) .tfRoomReading{display:none}#app.tfBoard .tfRoomTile[data-cols="1"]:is([data-rows="4"],[data-rows="5"]) .tfRoomDevices{min-height:calc(2 * var(--chip-size) + 12px);align-content:start}.tfRoomHeads{display:none;gap:12px 16px}.tfRoomDev{position:relative;isolation:isolate;display:flex;align-items:center;gap:12px;min-width:0}.tfRoomDev:before{content:"";position:absolute;z-index:-1;top:-6px;right:-10px;bottom:-6px;left:-10px;border-radius:var(--r-tile);pointer-events:none;transition:background .15s ease,box-shadow .15s ease}@media (hover:hover){.tfRoomDev:hover:before{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}}.tfRoomDevName{padding:0;border:0;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.tfRoomDev .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfRoomDev .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfRoomDevName{display:flex;flex-direction:column;min-width:0}.tfRoomDevName>span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]){flex-direction:row;align-items:center;gap:12px}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"])>.tfActionHead{flex:1;margin-bottom:0}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]) .tfRoomDevices{display:flex}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomHeads{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-cols="2"]):not([data-rows="1"]) .tfRoomHeads{grid-template-columns:repeat(4,minmax(0,1fr))}#app.tfBoard .tfRoomTile[data-cols="2"][data-rows="2"] .tfRoomDev:nth-child(n+3){display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]):has(.tfRoomDevices) .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]):has(.tfRoomDevices) .tfRoomReading{display:none}#app.tfBoard .tfDashBento[data-rows="1"] .wbCard{padding:10px;border-radius:24px}#app.tfBoard .tfDashBento[data-rows="1"] .wbVisual{display:none}#app.tfBoard .tfDash-wx[data-rows="1"] .wbNow{margin:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbWx.wbS90{width:40px;height:40px;border-radius:12px}#app.tfBoard .tfDashBento[data-rows] :is(.wb,.wbBento,.wbItem){height:100%;min-height:0}#app.tfBoard .tfDashBento[data-rows] .wbCard{height:100%;min-height:0;box-sizing:border-box;aspect-ratio:auto}#app.tfBoard .tfDash-wx[data-rows="1"] .wbDeg{font-size:20px;letter-spacing:0;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbPlace{font-size:13px;line-height:18px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbUnit{font-size:14px;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbWx.wbS90{width:100px;height:100px;border-radius:31px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbDeg{font-size:80px;line-height:80px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbUnit{font-size:30px;line-height:38px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbWeather{flex-direction:row;align-items:center;gap:16px}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNow{flex:none}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNextHours{display:flex;flex:1 1 0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbWeather{justify-content:center;padding-top:0;padding-bottom:0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) :is(.wbNow,.wbSummary){display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbColumns{display:flex;flex:none;height:185px}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsDay{display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsNow{display:inline}#app.tfBoard .tfDash-wx[data-narrow] .wbCard.wbWeather{gap:12px;padding:18px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbWx.wbS90{width:64px;height:64px;border-radius:20px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbDeg{font-size:46px;line-height:46px;letter-spacing:-.92px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbUnit{font-size:20px;line-height:26px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-narrow] .wbHalves{display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="3"] .wbNextHours{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow] .wbHour:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;flex:none;height:auto;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumn:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbHalves{display:none}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx:not([data-narrow])[data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="4"]) .wbSummary{display:none}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) :is(.wbColumns,.wbHalves){display:none}#app.tfBoard .tfDash-wx[data-rows="4"] .wbColumns{flex:1 1 0;height:auto;min-height:0;margin-top:0}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn{justify-content:flex-start;gap:8px;padding:12px 0 16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn .wbWx{width:40px;height:40px;border-radius:16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbTemps{gap:4px}#app.tfBoard .tfDash-wx[data-rows="4"] .wbHalves>:nth-child(n+5){display:none}#app.tfBoard .tfDash-energy[data-rows="2"] .tfDashGraph{display:none}#app.tfBoard .tfDash-energy:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) .activityRows{grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr)}#app.tfBoard .tfDash-energy[data-rows="3"] .tfDashGraph{min-height:0}#app.tfBoard .tfDashBento[data-rows="2"] .wbBaseRows{display:none}#app.tfBoard .tfDashBento[data-rows="2"] :is(.wbRadar,.wbCompareBars,.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfDashBento[data-rows="3"] :is(.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfAreas[data-rows="1"] .tfACTop{display:contents}#app.tfBoard .tfAreas[data-rows="1"] .tfACTiles{display:none}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed{display:grid;grid-template-columns:40px minmax(0,1fr);column-gap:12px;align-content:center;padding:0}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfACName,.tfACMain){margin:0;font-size:14px;line-height:18px;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.tfBoard .tfAreas[data-rows="2"] .tfACTiles{display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTile:nth-child(n+3){display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACollapsed{justify-content:flex-start;gap:10px}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTiles{margin-top:auto}.tfEditTray{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px));right:0;bottom:0;z-index:160;display:flex;width:608px;max-width:calc(100vw - 56px);transform:translate(100%);transition:transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfEditTray.open{transform:none}.tfEditTray.open.tucked{transform:translate(100%)}.tfEditTray.open :is(.tfTrayInner,.tfTrayTuck){pointer-events:auto}.tfTrayTuck{position:absolute;top:20px;left:-52px;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border:0;border-radius:var(--r-inner);background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;--mdc-icon-size:22px}.tfTrayTuck svg{width:22px;height:22px}.tfEditTray:not(.open) .tfTrayTuck{visibility:hidden}.tfTrayInner{flex:1;min-width:0;display:flex;flex-direction:column;gap:20px;overflow:auto;overscroll-behavior:contain;padding:20px;border-radius:var(--r-card) 0 0 var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d}.tfTrayHead{display:flex;align-items:center;justify-content:space-between;gap:12px}.tfTraySection{display:flex;flex-direction:column;gap:8px}.tfTraySection .sectionLabel{margin:0}.tfTrayNote{margin:0;color:var(--muted);font:400 14px/1.3 var(--font)}.tfTrayCards{display:flex;flex-direction:column;gap:6px}.tfTrayCard{display:flex;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 14px 0 10px;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none}.tfTrayList{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}.tfTrayFav{display:grid;grid-template-columns:22px var(--chip-size) minmax(0,1fr) 36px 36px;align-items:center;gap:8px;min-height:var(--tile-min);padding:0 4px 0 6px;border-radius:var(--r-tile)}.tfTrayFav.off{cursor:grab;touch-action:none}.tfTrayFav.off :is(.tfIcon,.tfTrayName){opacity:.5}.tfTrayFav.moving{background:var(--tile)}.tfTrayGrip{display:grid;place-items:center;color:var(--muted);cursor:grab;touch-action:none}.tfTrayGrip svg{width:20px;height:20px;fill:currentColor}:is(.tfTrayFav,.tfTrayPickItem) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfTrayName{display:flex;flex-direction:column;min-width:0}.tfTrayName>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfTrayBtn{display:grid;place-items:center;width:36px;height:36px;min-height:0;padding:0;border:0;border-radius:12px;background:none;color:var(--text);cursor:pointer}.tfTrayBtn svg{width:20px;height:20px;fill:currentColor}.tfTrayBtn:hover{background:var(--tile)}.tfTrayAdd{align-self:flex-start}.tfTrayPick{display:flex;flex-direction:column;gap:6px}.tfTrayPick[hidden]{display:none}.tfTrayPickItem{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;width:100%;min-height:var(--tile-min);padding:0 10px;border:0;border-radius:var(--r-tile);background:none;color:var(--text);text-align:start;cursor:pointer}.tfTrayPickItem:hover{background:var(--tile)}.tfTraySuggest{margin-top:8px}.tfMiniPhone{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px) + 20px);bottom:20px;left:max(16px,calc(100vw - min(608px,100vw - 56px) - 380px));z-index:160;display:flex;flex-direction:column;gap:8px;width:324px;padding:12px;border-radius:44px;background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d;opacity:0;transform:translate(16px);transition:opacity .2s ease,transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfMiniPhone.open{opacity:1;transform:none;pointer-events:auto}.tfPhoneHead{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 4px 0 12px}.tfMiniPhone>.tfTrayNote{padding:0 12px 4px}.tfLinkBtn{min-height:0;padding:0;border:0;background:none;color:var(--primary);font:inherit;text-decoration:underline;cursor:pointer}.tfPhoneScreen{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;border-radius:34px;background:var(--bg);box-shadow:var(--hc-hair-all);padding:14px 0 24px}.tfPhoneList{display:flex;flex-wrap:wrap;gap:12.8px}.tfPhoneTitle{width:100%;padding:0 12.8px;color:var(--text);font:800 25.6px/1 var(--font);letter-spacing:-.055em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfPhoneBlock{display:flex;align-items:flex-start;gap:10px;width:100%;min-height:0;padding:12px;border:0;border-radius:27px;background:var(--card);box-shadow:var(--hc-hair);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.tfPhoneBlock.tile{width:calc((100% - 12.8px)/2);border-radius:22.4px}.tfPhoneBlock.fixed{align-items:center;color:var(--muted);cursor:default}.tfPhoneBlock.moving{box-shadow:var(--hc-hair),0 0 0 2px var(--primary);cursor:grabbing}.tfPhoneBlock:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfPhoneBlock .tfIcon{width:32px;height:32px;border-radius:13px;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}.tfPhoneName{min-width:0;padding-top:6px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tfTrayGhost{position:fixed;top:0;left:0;z-index:200;margin:0;pointer-events:none;opacity:.9;background:var(--tile);border-radius:var(--r-tile);box-shadow:0 8px 24px #00000059}.tfFavDrop{position:fixed;z-index:200;width:4px;border-radius:2px;background:var(--primary);pointer-events:none}.tfFavHides{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;pointer-events:none}.tfFavHide{position:absolute;display:grid;place-items:center;width:32px;height:32px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;pointer-events:auto}.tfFavHide svg{width:18px;height:18px;fill:currentColor}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.toast.tfToast{top:auto;right:auto;max-width:calc(100vw - 32px);transform:translate(-50%,6px)}.toast.tfToast.show{transform:translate(-50%)}.tfDash-act .activityRow.alert .activityRowName{color:var(--danger)}.activityRow .tfIcon.alert{background:#e53935;color:#fff}.tfGraph.tfDay{flex:none;height:62px;min-height:0}.tfGraph.tfDay text{font-size:10px}#housePane .rubberIndicator{background:var(--bright)}#housePane .tab.active{color:var(--on-bright)}#app.house .settingsSelect{border:1px solid var(--muted)}#app.house .addInput{display:block;width:100%;height:46px;min-height:0;box-sizing:border-box;margin:0;padding:0 10px;border:0;border-radius:var(--r-inner)!important;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:400 16px/18.4px Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;letter-spacing:-.32px;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}#app.house .addInput:hover{background:color-mix(in srgb,var(--text) 6%,var(--tile))}#app.house .addInput:focus-visible,#app.house .addInput:focus{background:var(--tile);box-shadow:inset 0 0 0 1.6px var(--primary)}#app.house .addInput::-webkit-search-decoration,#app.house .addInput::-webkit-search-cancel-button{-webkit-appearance:none;-moz-appearance:none;appearance:none}#app.house{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%23d9d9d9' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house.light{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%2326221e' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house select.settingsSelect{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 44px 0 16px;background-image:var(--select-chev);background-repeat:no-repeat;background-position:right 16px center;background-size:16px 16px}#app.house .addInput::placeholder{color:var(--muted);opacity:1}#app .activityRows :focus-visible{outline-offset:-2.4px}#app.house :is(button,a,input,select,[tabindex]){scroll-margin-bottom:96px}@media (max-width:620px){#app.house :is(.activityRowName,.activityRowMeta){white-space:normal;text-overflow:clip;overflow:visible;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}}.tfTooltip{position:fixed;z-index:500;max-width:min(320px,calc(100vw - 16px));padding:6px 10px;border-radius:10px;background:var(--bright);color:var(--on-bright);font:500 14px/18px var(--font);overflow-wrap:break-word;box-shadow:0 4px 16px #00000040}.tfTooltip[hidden]{display:none}.tfDashGraph rect{transform-box:fill-box;transform-origin:50% 100%}#app.house:is([data-names=cut],[data-names=scroll]) :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis;overflow-wrap:normal}#app.house[data-names=wrap] :is(.activityRowName,.activityRowMeta){display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:normal;overflow:hidden;text-overflow:ellipsis;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}#app.tfBoard .tfDash-favs>.activityRows{min-height:0;overflow-y:auto;scrollbar-width:thin}#app.house :is(.tfIcon,.tfAreaIcon,.tfRoomIcon){--chip-hi:.0375;background-image:linear-gradient(180deg,#ffffff08,#fff0)!important;box-shadow:inset 0 1px rgba(255,255,255,var(--chip-hi)),inset 0 -1px color-mix(in srgb,currentColor 3%,transparent),inset 0 -3px 6px color-mix(in srgb,currentColor 3.5%,transparent)}#app.house :is(.on[data-light] .tfIcon,.tfIcon.on[data-light],.tfACTile .tfIcon[data-light],.on[data-tone=alarm] .tfIcon,.tfIcon[data-light]){--chip-hi:.1375}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-xl]{grid-row:span 5}#app.tfBoard .tfDashBento:not([data-rows="5"]) .wbItem[data-xl] .wbCallouts{display:none}#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]) .wbZone{flex:1;height:auto;background:none;box-shadow:none;padding:0;align-items:flex-start}#app.tfBoard .tfDashBento[data-rows="3"] .wbItem[data-xl] .wbCallouts{display:flex;margin-top:0}#app.tfBoard .tfDashBento[data-rows="1"] :is(.wbZone,.wbCallouts){display:none}#app .wbZoneM{display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM){display:flex;align-items:flex-start;justify-content:flex-start}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM)>:not(.wbZoneM){display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZoneM{display:flex}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{grid-auto-flow:row}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-break]{grid-column-start:1}#app.house.tfWeatherOpen #homeView{max-width:none}#app.house #settingsView .toggleList{border-radius:var(--r-card);padding-block:4px}#app.house #settingsView .toggleRow{padding-left:18px;padding-right:18px}#app.house #settingsView .toggleRow:not([hidden])~.toggleRow:before{left:18px}#app.house .view{margin-left:0}#app.house #settingsView .toggleList>.tfCardTitle{display:flex;align-items:center;min-height:28px;padding:14px 18px 2px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfLightView{display:flex;padding:4px 0 14px}#housePane.tfLightCardsOn .houseTab .metaTableWrap,#housePane.tfLightCardsOn .houseTab .tfTableNote{display:none}#housePane.tfLightCardsOn .tfLightCards{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:8px}#housePane:not(.tfLightCardsOn) .tfLightCards{display:none}@container housepane (width < 720px){#housePane:not(.tfLightCardsOn) .houseTab .metaTableWrap{display:none}#housePane:not(.tfLightCardsOn) .tfLightCards{display:grid}}#app.house.light .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house .tfTrayInner{gap:32px}#app.house .tfTraySection{gap:12px}#app.house{--font:Geist,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-family:var(--font)}#app.house #housePane .toggleRow>:is(.themeChoice,.settingsSelect){align-self:flex-start;width:auto;max-width:100%}#app.house #housePane .themeChoice{display:inline-flex}#app.house #housePane .themeChoice>button{flex:0 1 auto;min-width:0;padding:0 16px;overflow:hidden;text-overflow:ellipsis}#app.house #housePane .toggleRow{min-width:0}#app.house #housePane .toggleRow>.settingsSelect{min-width:200px}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments){display:inline-flex;width:auto;align-self:flex-start}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments) button{flex:0 0 auto;padding:0 16px}@media (max-width:620px){#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid{display:flex!important;flex-wrap:wrap;align-items:flex-start;gap:var(--grid-gap);height:auto!important}#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid .tfBoardItem{position:relative!important;left:auto!important;top:auto!important}#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid>.tfBoardItem:not(.tfDash-favs){height:auto!important}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummary{flex:none;margin-top:0;container-type:normal}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummaryText{position:static}}#app.house :is(#housePane .themeChoice,.wb .wbSegments,.tfBoardMenu .tfHeightTabs){height:32px;padding:3px;gap:3px;box-sizing:border-box}#app.house :is(#housePane .themeChoice>button,.wb .wbSegments button,.tfBoardMenu .tfHeightTabs button){height:26px!important;padding:0 12px;border-radius:13px!important;font:600 12px/16px var(--font-tile)!important}.tfPlantProblem{flex:1 1 0;min-height:184px;flex-direction:column}.tfGraph.tfPlantGraph{flex:1 1 0;width:calc(100% - 20px);height:auto;min-height:160px;margin:0 10px}.tfGraph .tfGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:3 4;vector-effect:non-scaling-stroke}.tfGraph .tfGuideWord{font-size:11px}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){box-shadow:inset 0 0 0 1px var(--line)}.tfDashTitle .tfGreeting{display:block;margin-bottom:6px;font:500 20px/1.2 var(--font-tile);letter-spacing:0;color:var(--muted)}#app.light{--title:#55504a}#app.light :is(.activityTitle,.hcCardTitle,.wbTitle,.activityRowName,.hcRowName,.wbName){color:var(--title)}#app.light .tfRoomTile .tfActionHead .activityRowName{color:var(--text)}#app.light .tfRoomBig{color:var(--title)}#app.tfOverview.tfDash #homeView .tfSum:not([data-summary=alerts]) .tfIcon{background:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar{width:100%;max-width:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows{display:flex;justify-content:space-between}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRow{flex:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows{display:grid;grid-template-columns:repeat(var(--bar-cols,3),minmax(0,1fr))}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows>.activityRow{min-width:0}@media (max-width:620px){#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}}#app.tfOverview.tfDash #homeView .tfDash-favs{padding:10px;border-radius:var(--r-card)}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-auto-rows:60px;row-gap:25px;max-height:100%;margin:0;overflow-y:auto;scrollbar-width:none}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows::-webkit-scrollbar{display:none}.hcFadeList.hcMore{-webkit-mask-image:linear-gradient(to bottom,#000 calc(100% - 40px),transparent);mask-image:linear-gradient(to bottom,#000 calc(100% - 40px),transparent)}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{height:60px;min-height:0;padding:10px;box-sizing:border-box}#app.tfOverview.tfDash #homeView .tfDash-wx .wbCard.wbWeather{gap:0;padding:18px}#app.tfOverview.tfDash #homeView .tfDash-wx .wbCondition,#app.tfOverview.tfDash #homeView .tfDash-wx .wbNextHours,#app.tfOverview.tfDash #homeView .tfDash-wx .wbHalves{display:none!important}#app.tfOverview.tfDash #homeView .tfDash-wx .wbSummary{flex:none;height:auto;margin:18px 0 0;container:none}#app.tfOverview.tfDash #homeView .tfDash-wx .wbSummaryText{position:static;-webkit-line-clamp:1}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumns{display:flex!important;height:159px;margin-top:auto;border-radius:var(--r-tile)}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn{padding:8px 0;background:none}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn:hover{background:var(--tile)}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn .wbWx.wbS60{width:60px;height:60px;border-radius:20px}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar{width:max-content;max-width:100%}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar .activityRows{justify-content:flex-start}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows{grid-template-columns:repeat(var(--bar-cols,3),auto)}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs{height:auto!important;padding:10px;container-type:normal}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows{display:flex;justify-content:space-between;grid-auto-rows:auto;row-gap:0;max-height:none}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{flex:none;width:240px;height:60px}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows{display:grid;grid-template-columns:repeat(var(--bar-cols,3),minmax(0,1fr))}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows>.activityRow{width:auto;min-width:0}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs{width:max-content!important;max-width:100%}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs>.activityRows{justify-content:flex-start}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows{grid-template-columns:repeat(var(--bar-cols,3),240px)}@media (max-width:620px){#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{width:auto;min-width:0}}#app.tfOverview.tfBoard #homeView .hcFloor{position:absolute;z-index:1;display:flex;align-items:center;height:24px;margin:0;box-sizing:border-box}#app.tfOverview.tfBoard #homeView .hcFloorBox{position:absolute;z-index:0;border-radius:40px;background:color-mix(in srgb,var(--text) 5%,transparent);box-sizing:border-box;pointer-events:none}#app.tfOverview #homeView .hcFloorName{margin:0;font:500 16px/24px var(--font);color:var(--title,var(--text));white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.hcHomeEditing.tfOverview #homeView .tfBoardItem.tfRoomTile{cursor:default;outline:0}#app.hcHomeEditing.tfOverview #homeView .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfRoomTile){cursor:grab;-webkit-user-select:none;user-select:none;touch-action:none;outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.hcHomeEditing.tfBoardReady #homeView .tfBoardItem{transition:left .34s cubic-bezier(.2,1.35,.4,1),top .34s cubic-bezier(.2,1.35,.4,1)}@media (prefers-reduced-motion:reduce){#app.hcHomeEditing.tfBoardReady #homeView .tfBoardItem{transition:none}}#app.hcHomeEditing #homeView .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfEditTray .tfTrayInner{scrollbar-width:none}.tfEditTray .tfTrayInner::-webkit-scrollbar{display:none}.hcHeChoiceLine{flex-wrap:wrap;gap:8px 12px}.hcHeChoiceLine>.hcHeChoice{margin-left:auto}.hcHeChoice.themeChoice{display:inline-flex;flex-wrap:nowrap;height:32px;padding:3px;gap:3px;box-sizing:border-box;border-radius:16px;background:var(--control-2,var(--hc-icon))}#app .hcHeChoice>button{height:26px!important;min-height:0;padding:0 12px;border:0;border-radius:13px!important;background:none;color:var(--text);font:600 12px/16px var(--font-tile)!important;white-space:nowrap}#app .hcHeChoice>button[aria-pressed=true]{background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all)}.hcHeBody{display:flex;flex-direction:column;gap:12px}.hcHeBody>.tfTrayNote{margin:0 0 8px}.hcHeLabel{display:flex;align-items:center;gap:4px}.hcHeLine{display:flex;align-items:center;gap:4px;min-height:44px}.hcHeLine>.activityRowName{min-width:0}.hcHeLine>.switch{margin-left:auto}.hcHeLink{display:inline;min-height:0;padding:0;border:0;background:none;font:inherit;color:var(--primary);text-decoration:underline;cursor:pointer}.hcHeList{display:flex;flex-direction:column;gap:2px;margin:0;padding:0;list-style:none}.hcHeRow{display:grid;grid-template-columns:36px var(--chip-size) minmax(0,1fr) auto;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 4px;border-radius:var(--r-tile)}.hcHeRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.hcHeRow.moving{background:var(--card);box-shadow:var(--hc-hair-all)}:is(.hcHeRow,.tfTrayFav):is(.hcListDragging,.hcListLanding){position:relative;z-index:5;background:var(--card)}:is(.hcHeRow,.tfTrayFav).hcListDragging{filter:drop-shadow(0 10px 30px rgba(0,0,0,.35));cursor:grabbing}.hcHeGrip{color:var(--muted);cursor:grab;touch-action:none}.hcHeSum .tfIcon{color:var(--sum-ink,var(--hc-icon-ink))}#app .hcHeRow.hcHeSum .tfIcon{background-color:transparent}#app.house .hcHeSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .hcHeSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}.hcInfoBtn{display:grid;place-items:center;flex:none;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:var(--r-fine,12px);background:none;color:var(--muted);cursor:pointer}.hcInfoBtn svg{width:18px;height:18px;fill:currentColor}.hcInfoBtn:hover,.hcInfoBtn[aria-expanded=true]{background:var(--tile);color:var(--text)}.hcInfoPop{position:fixed;z-index:320;width:280px;max-width:calc(100vw - 16px);display:flex;flex-direction:column;gap:8px;padding:16px;border-radius:var(--r-inner);box-shadow:var(--hc-hair-all),0 8px 28px #0000002e}.hcInfoPop[hidden]{display:none}.hcInfoTitle{font:600 14px/20px var(--font-tile);color:var(--text)}.hcInfoText{font:400 14px/1.45 var(--font);color:var(--text)}.hcInfoText p{margin:0}.hcInfoText ul{margin:6px 0 0;padding-left:18px}.hcInfoMore{align-self:flex-start;font:600 14px/20px var(--font-tile);color:var(--primary);text-decoration:underline}#app .tfTrayAdd.hcAddBtn{display:inline-flex;align-items:center;gap:6px;height:32px;min-height:0;margin:10px 0 12px;padding:0 16px 0 12px;border:0;border-radius:16px!important;background:#03a9f4;color:#fff;font:600 14px/20px var(--font-tile);text-decoration:none!important}#app .tfTrayAdd.hcAddBtn svg{width:18px;height:18px;flex:none;fill:currentColor}#app .tfTrayAdd.hcAddBtn:hover{background:#0398dc}#app .tfTrayAdd.hcAddBtn[aria-expanded=true]{background:#0288d1}.tfEditTray:not(.hcHomeTray) .tfTraySection:not(.hcFirst){padding-top:20px;border-top:1px solid var(--line)}#app.house .tfEditTray:not(.hcHomeTray) .tfTrayInner{gap:20px}.hcHeRule{width:100%;height:0;margin:8px 0;border:0;border-top:1px solid var(--line)}.tfEditTray .hcTrayTabs{display:flex;align-self:stretch;margin:0 0 4px;flex:none}.tfEditTray .hcTrayTabs .tab{flex:1 1 0;min-height:36px;padding:0 10px;font:600 14px/20px var(--font-tile)}.tfEditTray .hcTrayTabs .rubberIndicator{background:var(--text)}.tfEditTray .hcTrayTabs .tab.active{color:var(--card)}.tfEditTray .tfTraySection[hidden]{display:none!important}.hcTrayList{display:grid;gap:0;padding:0}.hcTrayList .hcRow{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:12px;width:100%;min-height:60px;padding:10px 18px;border:0;border-radius:0;background:transparent;color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:pointer;box-sizing:border-box}.hcTrayList .hcRow+.hcRow{box-shadow:inset 0 1px var(--line)}.hcTrayList .hcRowText{display:grid;min-width:0}.hcTrayList .hcRowName{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.hcTrayList .hcRowEnd{display:grid;place-items:center;width:24px;height:24px;color:var(--muted)}.hcTrayList .hcRowEnd svg{display:block;width:20px;height:20px}#app .tfEditTray :is(.hcTrayList,.hcTrayBack){display:none}@media (max-width:620px){#app .tfEditTray .hcTrayTabs{display:none}#app .tfEditTray:not(.hcTrayIn) .hcTrayList{display:grid;flex:none;padding:0}#app .tfEditTray .hcTrayList .hcConfigRow{grid-template-columns:minmax(0,1fr) auto;margin-inline:-10px;width:calc(100% + 20px)}#app .tfEditTray:not(.hcTrayIn) :is(.tfTraySection,.hcHeTabBody){display:none!important}#app .tfEditTray.hcTrayIn .hcHeAreasNote{display:none}#app .tfEditTray.hcTrayIn .hcTrayBack{display:inline-flex;flex:none;width:40px;height:40px;margin-block:-4px}#app .tfEditTray.hcTrayIn .tfTrayHead{justify-content:flex-start;gap:12.8px}#app .tfEditTray.hcTrayIn .tfTrayHead>:last-child:not(.activityTitle){margin-left:auto}}.hcHeTabBody{display:flex;flex-direction:column;gap:8px}.hcHomeTray .hcTrayTabs{margin:0 0 8px}#homeView .grid.tfStack{grid-auto-rows:1px;row-gap:0}#homeView .grid.tfStack>*{align-self:start}.tfTrayPop{position:fixed;z-index:260;right:calc(min(608px,100vw - 56px) + 12px);width:300px;max-width:calc(100vw - 80px);display:grid;gap:2px;padding:10px!important;background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfTrayPop[hidden]{display:none}.tfTrayPopTitle{padding:4px 8px 8px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfTrayPopRow{display:flex;align-items:center;gap:12px;min-height:var(--tile-min);padding:0 8px}.tfTrayPopRow .tfIcon{background-color:var(--hc-icon)}.tfTrayPopName{flex:1;min-width:0;font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app .tfMoreBackdrop:not(.wide) .tfMore{height:min(600px,85dvh)}#app .tfMoreBackdrop:not(.wide) .tfMorePages{flex:1 1 auto;min-height:0;height:auto!important;align-items:stretch}#app .tfMoreBackdrop:not(.wide) .tfMorePage{overflow-y:auto;overscroll-behavior:contain;scrollbar-width:none}#app .tfMoreBackdrop:not(.wide) .tfMorePage[aria-label=Control]>:first-child{margin-top:auto}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace{flex:1 1 auto;height:auto;min-height:224px}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill{min-height:0;container-type:size}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill>.tfCoverArt{width:min(100%,100cqh);height:auto}.tfMorePage[aria-label=Control]>:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink)+:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink){margin-top:14px}.tfMoreSwitch{display:flex;align-items:center;justify-content:center;min-height:0;padding:0;border-radius:0;background:none}.tfMoreSwitch .tfIcon{width:min(240px,100%);height:min(240px,100%);aspect-ratio:1;min-height:0;border:0;padding:0;border-radius:40%;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer;--mdc-icon-size:204px}.tfMoreSwitch.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreSwitch.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}@media (max-width:620px){#app .tfMoreBackdrop{place-items:end center;padding:0 16px max(16px,env(safe-area-inset-bottom,0px))}#app .tfMoreBackdrop .tfMorePair{width:100%;max-height:85dvh}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){width:100%;border-radius:34px;box-shadow:inset 0 0 0 1px var(--line),0 10px 30px #00000047}#app .tfMoreBackdrop .tfMore{padding-top:10px;outline:none}#app .tfMoreBackdrop .tfMore:before{content:"";display:block;position:sticky;top:10px;z-index:2;flex:none;width:36px;height:5px;margin:0 auto;border-radius:3px;background:var(--line)}#app .tfMoreBackdrop .tfMore [data-more-close]{display:none}}#app .tfMoreBackdrop:not(.wide) .tfMore{height:min(604.4px,calc(100dvh - 32px))}#app .tfMoreBackdrop:not(.wide) .tfMorePages{transition:none}#app .tfMoreBackdrop:not(.wide) .tfMorePop>.tfMorePage:not([aria-label=Info]){display:flex;flex-direction:column;gap:14px;overflow:hidden}#app .tfMoreBackdrop:not(.wide) .tfMorePop>.tfMorePage>.tfMoreSpace{flex:1 0 224px;min-height:224px;margin-top:0}.tfMoreCtl{display:flex;flex-direction:column;gap:14px;flex:0 1 auto;min-height:0;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:none}.tfMoreCtl::-webkit-scrollbar{display:none}.tfMoreCtl:empty{display:none}#app .tfMoreBackdrop:not(.wide) .tfMorePages{margin:-14px;padding:14px;gap:28px;scroll-padding-inline:14px}#app .tfMoreBackdrop:not(.wide) .tfMorePop>.tfMorePage:not([aria-label=Info]){overflow:visible;min-height:0}#app .tfMoreBackdrop:not(.wide) :is(.tfMorePages:not(.tfMorePop)>.tfMorePage,.tfMorePop>.tfMorePage[aria-label=Info]){margin:-14px;padding:14px}.tfMoreCtl{margin:-14px;padding:14px}.tfMoreSwap{display:grid}.tfMoreSwap>*{grid-area:1/1}#app .tfMoreSwap>.tfBar{transition:opacity .26s cubic-bezier(.2,0,0,1),translate .32s cubic-bezier(.34,1.2,.64,1),visibility .32s,box-shadow var(--ab-out) var(--ab-ease),transform var(--ab-out) var(--ab-ease)}.tfMorePage[data-mode=colour] .tfMoreSwap>:not(.hue){opacity:0;translate:28px 0;visibility:hidden;pointer-events:none}.tfMorePage:not([data-mode=colour]) .tfMoreSwap>.hue{opacity:0;translate:-28px 0;visibility:hidden;pointer-events:none}@media (prefers-reduced-motion:reduce){#app .tfMoreSwap>.tfBar{transition:none}}#app .tfMorePages.tfMoreHold{overflow-x:hidden}#app .tfMoreBackdrop:not(.wide) .tfMorePop>.tfMorePage>.tfMoreSpace.tfLightSpace{position:relative;flex:1 0 224px;display:flex;align-items:center;justify-content:center;padding:0;border-radius:0;background:none;overflow:visible}.tfVCols{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;width:calc((100% - 16px)*.7 + 16px);height:70%;transition:opacity .22s ease,visibility .22s}.tfVCols:has(>:only-child){width:calc((100% - 16px)*.35)}.tfVCols:has(>:only-child){grid-template-columns:minmax(0,1fr)}.tfVCol,.tfVSwap>*{display:flex;flex-direction:column;gap:8px;min-height:0}.tfVSwap{display:grid;min-height:0}.tfVSwap>*{grid-area:1/1}#app .tfVBar{flex:1;height:auto;min-height:0;border-radius:24px;touch-action:none;box-shadow:var(--hc-hair-all)}#app .tfVBar.bright{background:var(--tile)}#app .tfVBar.bright i{inset:auto 0 0 0;width:auto;background:linear-gradient(180deg,#ffc247,#fa0)}.tfVBar .tfBarIcon{position:absolute;left:14px;top:14px;width:22px;height:22px;color:var(--text);pointer-events:none;--mdc-icon-size:22px}.tfVBar .tfBarIcon>*{width:22px;height:22px}#app .tfVBar.ctf{background:linear-gradient(180deg,#fa0,#ffc247 25%,#fff7ee 55%,#d7e7ff)}#app .tfVBar.huev{background:linear-gradient(180deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}#app .tfVBar b{left:50%;right:auto;bottom:auto;width:30px;height:4px;margin:-2px 0 0 -15px;border-radius:2px}#app .tfVSwap>*{transition:opacity .18s ease,visibility .18s}.tfMorePage[data-mode=colour] .tfVSwap>.tfVWarm{opacity:0;visibility:hidden;pointer-events:none}.tfMorePage:not([data-mode=colour]) .tfVSwap>.tfVColour{opacity:0;visibility:hidden;pointer-events:none}@keyframes tfVLand{0%{opacity:0;scale:.94}55%{opacity:1;scale:1.035}to{opacity:1;scale:1}}.tfMorePage[data-mode=colour] .tfVSwap>.tfVColour,.tfMorePage:not([data-mode=colour]):not([data-mode=dac]) .tfVSwap>.tfVWarm,.tfMorePage[data-mode=dac] .tfLightPad,.tfMorePage:not([data-mode=dac]) .tfVCols{animation:tfVLand .42s cubic-bezier(.34,1.46,.64,1) backwards}.tfVSwap>.tfVColour:only-child{opacity:1!important;translate:0 0!important;visibility:visible!important;pointer-events:auto!important}.tfLightPad{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:24px;overflow:hidden;--tf-dac-pad:100cqh;--tf-dac-max:none;container-type:size;transition:opacity .22s ease,visibility .22s}.tfLightPad>.tfDacPad{width:100%;height:100%}.tfMorePage:not([data-mode=dac]) .tfLightPad,.tfMorePage[data-mode=dac] .tfVCols{opacity:0;visibility:hidden;pointer-events:none}@media (prefers-reduced-motion:reduce){#app .tfVSwap>*,.tfVCols,.tfLightPad{transition:none;animation:none!important}}.tfMoreFoot{display:flex;flex:none;align-items:center;justify-content:space-between;height:40px}.tfMoreFootGap{flex:none;width:40px}.tfMoreFoot .tfMoreDots{margin:0}#app .tfMoreInfoBtn{display:grid;place-items:center;flex:none;width:40px;height:40px;min-height:0;padding:0;border:0;border-radius:20px;background:none;color:var(--muted);cursor:pointer}.tfMoreInfoBtn svg{width:20px;height:20px;fill:currentColor}#app .tfMoreInfoBtn[aria-pressed=true]{background:var(--tile);color:var(--text)}.tfMoreCtl>*{flex:none}.tfMoreField{display:flex;flex-direction:column;gap:6px}.tfMoreLabel{color:var(--muted);font:400 14px/20px var(--font)}.tfMoreRange{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}@media (max-width:620px){.tfMoreRange{grid-template-columns:1fr;gap:14px}}.tfPopBar{box-shadow:var(--hc-hair-all)}.tfPopBar i{overflow:visible}.tfPopBar .tfBarVal{position:absolute;right:14px;top:50%;translate:0 -50%;color:#26221e;font:600 15px/20px var(--font-tile);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.tfPopBar .tfBarVal.mid{left:50%;right:auto;translate:-50% -50%;z-index:1}.tfPopBar .tfBarIcon{position:absolute;left:13px;top:12px;width:22px;height:22px;color:#26221e;pointer-events:none;--mdc-icon-size:22px}.tfPopBar .tfBarIcon>*{width:22px;height:22px}.tfPopBar.fan i{background:linear-gradient(90deg,#4dd4ec,#00b2d6)}.tfPopBar.valve i{background:linear-gradient(90deg,#4aa8ff,#1a7fe6)}.tfPopBar.tiltp i{background:linear-gradient(90deg,#c9a7ef,#8e5cd9)}.tfPopBar.ctf{background:linear-gradient(90deg,#d7e7ff,#fff7ee 45%,#ffc247 75%,#fa0)}.tfPopBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfMoreSwitch .tfIcon{width:min(224px,100%);height:min(224px,100%);--mdc-icon-size:190px}.tfMoreSwitch:not(.on) .tfIcon{box-shadow:var(--hc-hair-all);color:var(--text)}.tfMorePad{--tf-dac-pad:337px;--tf-dac-max:none}.tfAction.tfDac{--tf-dac-max:none}.tfMoreSpace.tfMoreArt{justify-content:center;align-items:center;padding:8px;container-type:size}.tfMoreArt>.tfCoverArt{width:min(100%,100cqh);height:auto;max-width:none}#app .tfMoreCode{width:100%;height:46px;padding:0 16px;border:0;border-radius:16px!important;background:var(--tile);color:var(--text);box-shadow:var(--hc-hair-all);font:400 16px/20px var(--font);box-sizing:border-box}#app .tfMoreCode::placeholder{color:var(--muted);opacity:1}#app .tfMoreCode:focus{outline:2px solid var(--primary);outline-offset:-1px}.tfMoreSpace.tfMoreKeypad{justify-content:flex-start;gap:8px;padding:12px}.tfMoreKeypad .tfMoreCode{flex:none;background:var(--card)}.tfKeypad{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.tfKeypad button{height:46px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);font:500 18px/1 var(--font-tile);cursor:pointer}.tfKeypad button[data-key=clear]{color:var(--muted);font:400 14px/1 var(--font)}.tfKeypad svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfKeypad button:active{scale:.96}@media (max-width:620px){.tfMorePop .tfSeg:has(>:nth-child(5)){flex-wrap:wrap;height:auto}.tfMorePop .tfSeg:has(>:nth-child(5)) button{flex:0 0 auto;height:38px;padding:0 14px}}`, th = `.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:14px;aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:18px;border-radius:28px;overflow:hidden}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbChip{width:40px;height:40px;border-radius:16px}.wbSquare .wbName{font-size:14px;line-height:1.4}.wbSquare .wbSub{font-size:16px}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:10px}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846;border-radius:34px}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:1;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);fill-opacity:.14}.wbChart .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:24px minmax(0,1fr) 22px;grid-template-areas:". sun" "y plot" ". x";column-gap:8px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wb[data-style=smooth] :is(.wbWx,.wbSky):after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;border-radius:inherit;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1.3 0 0 0 -.15 1.3 0 0 0 -.15 1.3 0 0 0 -.15 0 0 0 0 1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:140px 140px;mix-blend-mode:overlay;opacity:.3}.wbBaseRows{display:flex;flex-direction:column;gap:4px;width:100%}.wbBaseRow{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbBaseRow>span:last-child{color:var(--text);white-space:nowrap}.wbBaseRow>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRadar{position:relative;flex:1;align-self:stretch;min-height:80px;border-radius:var(--r-inner);overflow:hidden;background-color:var(--tile);background-image:linear-gradient(color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px);background-size:24px 24px;background-position:center}.wbRadarRing{position:absolute;left:50%;top:50%;width:64%;aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 20%,transparent)}.wbRadarRing:after{content:"";position:absolute;top:25%;right:25%;bottom:25%;left:25%;border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 14%,transparent)}.wbRadarHome{position:absolute;left:50%;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 3px var(--tile)}.wbRadarMap,.wbRadarCam{background-image:none}.wbRadarLayer{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden}.wbRadarLayer img{position:absolute;width:256px;height:256px;max-width:none;pointer-events:none}.wbRadarLayer[hidden]{display:none}.wbRadarRain{opacity:.85}.wbRadarMap .wbRadarHome{z-index:2}.wbRadarTime,.wbRadarCredit{position:absolute;z-index:2;white-space:nowrap}.wbRadarTime{left:8px;bottom:6px;padding:1px 6px;border-radius:8px;background:color-mix(in srgb,var(--tile) 78%,transparent);color:var(--text);font:600 11px/16px var(--font-tile)}.wbRadarTime:empty{display:none}.wbRadarCredit{right:6px;top:4px;max-width:calc(100% - 12px);overflow:hidden;text-overflow:ellipsis;color:var(--muted);font:400 9px/12px var(--font)}.wbRadarNote{position:absolute;top:0;right:0;bottom:0;left:0;z-index:2;display:grid;place-items:center;padding:0 12px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbRadarCam img{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;object-fit:cover}.wbWx.wbLineIcon{display:grid;place-items:center;background:var(--tile);color:var(--text)}.wbWx.wbLineIcon>svg{width:64%;height:64%}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:18px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:14px 16px 12px 12px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbAsNow{display:none}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}.wbNextHours{display:none;justify-content:space-between;align-items:center;gap:8px;min-width:0}.wbHour{display:flex;flex-direction:column;align-items:center;gap:8px;min-width:0}.wbHourTime{color:var(--muted);font:400 14px/20px var(--font);white-space:nowrap}.wbHourTemp{font:400 18px/20px var(--font-tile);white-space:nowrap}.wbHour .wbWx.wbS40{width:40px;height:40px;border-radius:16px}.wbSummary{position:relative;flex:1 1 0;min-height:0;margin-top:-12px;container:wbsum/size}.wbSummaryText{position:absolute;top:12px;left:0;right:0;margin:0;color:var(--text);font:400 16px/22px var(--font);display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}@container wbsum (height < 56px){.wbSummaryText{-webkit-line-clamp:1}}@container wbsum (height < 34px){.wbSummaryText{display:none}}@container wb-card (width < 480px){.wbColumn .wbWx.wbS60{width:48px;height:48px;border-radius:16px}}@container wb-card (width < 400px){.wbCard.wbWeather{gap:16px;padding:18px 18px 10px}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumn .wbWx.wbS60{width:40px;height:40px;border-radius:14px}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbStripScroll.wbPaged{container-type:inline-size;scroll-snap-type:x mandatory;overscroll-behavior-x:contain}.wbStripScroll.wbPaged.wbHeld{scroll-snap-type:none}.wbPaged .wbStrip{position:relative;min-width:0;padding:0}.wbSnap{position:absolute;top:0;width:1px;height:1px;scroll-snap-align:start;pointer-events:none}.wbMark.wbLast{align-items:flex-end;transform:translate(-100%)}.wbPaged .wbTimes .wbMark.wbFirst{font:400 14px/20px var(--font)}.wbPaged .wbTimes .wbMark.wbNowMark{font:600 14px/20px var(--font-tile)}.wbSky .wbPast{position:absolute;top:0;bottom:0;left:0;background:var(--card);opacity:.45;pointer-events:none}.wbSky .wbNowLine{position:absolute;top:0;bottom:0;width:2px;margin-left:-1px;background:var(--text);opacity:.55;pointer-events:none}.wbSky.wbLineSky{background:var(--tile);color:var(--text)}.wbLineArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbLineArt .wbLineArc{fill:none;stroke:var(--text);stroke-width:1.5;stroke-linejoin:round;vector-effect:non-scaling-stroke;opacity:.7}.wbLineArt .wbLineHorizon{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.35}.wbLineArt .wbLineNight{fill:var(--text);opacity:.07}.wbLineArt .wbLineEdge{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.3}.wbLineTime{position:absolute;top:calc(80% + 4px);transform:translate(-50%);color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.wbLineNow{position:absolute;width:26px;height:26px;transform:translate(-50%,-50%);border-radius:50%;background:var(--tile);pointer-events:none}.wbLineNow>svg,.wbLineGlyph>svg{display:block;width:100%;height:100%}.wbLineGlyph{position:absolute;top:calc(50% - 14px);width:28px;height:28px;transform:translate(-50%);pointer-events:none}.wbLineGlyph.wbFirst{transform:none}.wbLineGlyph.wbLast{transform:translate(-100%)}.wbSky .wbMidnight{position:absolute;top:0;bottom:0;width:0;border-left:1.5px dashed var(--text);opacity:.5;pointer-events:none}.wbDays{position:absolute;top:36px;left:0;z-index:1;display:flex;pointer-events:none}.wbDaySpan{flex:none;min-width:0}.wbDayName{position:sticky;left:8px;margin-left:8px;height:26px;min-height:0;padding:0 10px;border:0;background:color-mix(in srgb,var(--card) 82%,transparent);color:var(--text);font:600 13px/26px var(--font-tile);white-space:nowrap;cursor:pointer;pointer-events:auto}.wb .wbDayName{border-radius:13px!important;font-family:var(--font-tile)!important}.wbViews button{padding:2px 10px;font-size:13px}.wbBars .wbDayBars{flex:1 1 0;min-height:160px;display:flex;flex-direction:column;padding:0 18px;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin}.wbBars.wbTabbed .wbDayBars{min-height:206px}.wbDayBar{flex:1 0 auto;display:grid;grid-template-columns:minmax(56px,auto) 40px 36px minmax(0,1fr) 36px;align-items:center;column-gap:12px;min-height:48px;box-shadow:inset 0 -.4px 0 var(--line)}.wbDayBar:last-child{box-shadow:none}.wbRangeDay{color:var(--text);font:600 14px/20px var(--font-tile);white-space:nowrap}.wbRangeLo{color:var(--muted);text-align:right;font:400 16px/20px var(--font);font-variant-numeric:tabular-nums}.wbRangeHi{color:var(--text);text-align:right;font:400 16px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbRangeTrack{position:relative;height:6px;border-radius:3px;background:var(--tile)}.wbRangeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:3px}.wbRangeNow{position:absolute;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:#fff;box-shadow:0 0 0 2px var(--card)}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbBars .wbDayBars{padding:0 8px;min-height:380px}.wbBars.wbTabbed .wbDayBars{min-height:426px}.wbDayBar{column-gap:8px}.wbStripScroll{min-height:380px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:16px;overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbSunTile .wbZone{display:block}.wbSunZone{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff;transition:background 1s ease}.wbSunTrack{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbSunBand{fill:#fff;fill-opacity:.1}.wbSunBand.wbSunDay{fill-opacity:.14}.wbSunBand.wbSunDone{fill-opacity:.85}.wbSunDot{fill:#ffd84a}.wbSunDot.wbSunNight{fill:#9aa3c7}.wbSunCount{position:absolute;top:22px;right:22px;bottom:22px;left:22px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;padding-bottom:14px}.wbSunLeft{font:500 clamp(28px,calc(16cqw * var(--wb-k,1)),36px)/1.1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums;white-space:nowrap}.wbSunWord{font:400 13px/18px var(--font);opacity:.85}.wbSunAt{position:absolute;bottom:32px;font:500 12px/16px var(--font);opacity:.85;font-variant-numeric:tabular-nums}.wbSunRise{left:32px}.wbSunSet{right:32px}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}.wbMoonCaption{gap:8px}.wbMoonCaption span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbMoonCaption span:last-child{flex:none}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbSea{position:relative;flex:1;min-height:0;border-radius:16px;overflow:hidden;--wb-sea-inset:clamp(8.88px,calc(4.76cqw * var(--wb-k,1)),12px)}.wbSeaArt{position:absolute;top:0;right:0;bottom:0;left:0;display:block;width:100%;height:100%;image-rendering:pixelated}.wbSeaFact{position:absolute;top:clamp(7px,calc(3.97cqw * var(--wb-k,1)),10px);inset-inline:var(--wb-sea-inset);color:#26221e;font:600 clamp(9.44px,calc(5.47cqw * var(--wb-k,1)),13.78px)/1.23 var(--font-tile)}.wbSeaValue{position:absolute;bottom:var(--wb-sea-inset);inset-inline-start:var(--wb-sea-inset);color:#fff;text-shadow:0 0 2px rgba(0,0,0,.6),0 1px 3px rgba(0,0,0,.5)}.wbSeaValue .wbUnitV{color:inherit}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbTrend{position:relative;width:100%;height:100%;min-height:0}.wbTrendPlot{position:absolute;top:22px;right:0;bottom:24px;left:0}.wbTrendPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbTrendLine{fill:none;stroke:var(--text);stroke-width:2;stroke-linejoin:round;stroke-linecap:round;opacity:.8}.wbTrendDot{position:absolute;width:7px;height:7px;margin:-3.5px 0 0 -3.5px;border-radius:50%;background:var(--card);box-shadow:0 0 0 2px var(--text)}.wbTrendDot.wbToday{width:11px;height:11px;margin:-5.5px 0 0 -5.5px;background:var(--primary);box-shadow:0 0 0 3px var(--card)}.wbAvgValue{position:absolute;transform:translate(-50%,calc(-100% - 8px));color:var(--muted);font:400 10px/1 var(--font-tile);white-space:nowrap}.wbAvgValue.wbToday{color:var(--text);font-size:12px;font-weight:600}.wbTrendAvg{position:absolute;right:0;transform:translateY(4px);color:var(--muted);font:400 10px/1 var(--font-tile)}.wbTrendDays{position:absolute;left:0;right:0;bottom:0;height:16px}.wbAvgDay{position:absolute;bottom:0;transform:translate(-50%);color:var(--muted);font:400 11px/16px var(--font-tile)}.wbAvgDay.wbToday{color:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}.wbZoned{gap:14px}.wbZone{position:relative;flex:none;height:198px;display:flex;align-items:center;justify-content:center;border-radius:16px;overflow:hidden}.wbCallouts{display:none;flex-direction:column;gap:4px;margin-top:-6px}.wbCallout{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbCallout>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbCallout>span:last-child{flex:none;color:var(--text);white-space:nowrap}.wbZone>.wbSunSky{flex:1;align-self:stretch;border-radius:0}.wbZone>.wbMoonBox{flex:none;height:150px}.wbBase .wbZone{align-items:flex-end;justify-content:flex-start}.wbZone>.wbTapeRow{align-self:stretch;height:100%}.wbItem[data-xl] .wbCallouts{display:flex}.wbUv .wbZone{display:block}.wbUvArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbUvBig{position:absolute;right:0;bottom:0;display:flex;flex-direction:column;align-items:flex-end}.wbUvNum{font:500 64px/.9 var(--font-tile);letter-spacing:-.03em;color:var(--text);font-variant-numeric:tabular-nums}.wbUvWord{margin-top:6px;font:400 14px/20px var(--font);color:var(--muted)}.wbAqSmile .wbZone{display:block}.wbAqFill{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff}.wbAqFace{position:absolute;left:12px;top:12px;width:min(140px,calc(100% - 60px));height:auto;aspect-ratio:1;fill:none;stroke:currentColor;stroke-width:3.4;stroke-linecap:round;stroke-linejoin:round}.wbAqFace .wbAqEyes{stroke-width:5}.wbAqBig{position:absolute;right:14px;bottom:12px;display:flex;flex-direction:column;align-items:flex-end}.wbAqNum{font:500 56px/.9 var(--font-tile);letter-spacing:-.03em;font-variant-numeric:tabular-nums}.wbAqUnit{margin-top:4px;font:500 14px/20px var(--font)}.wbPollenAir{position:absolute;top:0;right:0;bottom:62px;left:0;overflow:hidden;pointer-events:none}.wbFloat{position:absolute;left:-12%;animation:wbFloat linear infinite}.wbBob{display:block;animation:wbBob ease-in-out infinite alternate}@keyframes wbFloat{0%{left:-12%}to{left:106%}}@keyframes wbBob{0%{transform:translateY(-6px) rotate(-14deg)}to{transform:translateY(8px) rotate(16deg)}}.wbFloat svg{display:block}.wbSeed svg{width:calc(20px * var(--s));height:calc(28px * var(--s))}.wbGrain svg{width:calc(10px * var(--s));height:calc(10px * var(--s))}.wbStem svg{width:calc(9px * var(--s));height:calc(26px * var(--s))}.wbSeed{color:var(--text);opacity:.7}.wbGrain{color:#e9c46a;opacity:.85}.wbStem{color:#a3b18a;opacity:.75}#app.light .wbGrain{color:#c99a1e}#app.light .wbStem{color:#7d8c5f}@media (prefers-reduced-motion:reduce){.wbFloat,.wbBob{animation:none}.wbFloat{left:var(--x)}}.wbPush{display:block;transition:transform .35s cubic-bezier(.2,.8,.3,1)}.wbCallout.wbAdvice>span:first-child{color:var(--text)}.wbCard.wbSquare.wbGraphCard{height:100%;min-height:0}.wbGraphCard .wbHead .wbBack{margin:-4px -6px 0 auto}.wbGraphCard .wbRangeBtn{align-self:flex-start;display:inline-flex;align-items:center;gap:6px;max-width:100%;height:32px;padding:0 8px 0 10px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:600 12px/16px var(--font-tile);cursor:pointer}.wb button.wbRangeBtn{border-radius:12px!important}.wbRangeBtn>span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRangeBtn .wbIcon{flex:none;width:16px;height:16px;fill:currentColor}.wbRangeBtn[aria-expanded=true]{background:var(--bright);color:var(--on-bright)}.wbItem:has(.wbRangePick){position:relative;z-index:30}.wbRangePick{position:absolute;top:116px;left:18px;z-index:30;display:flex;flex-direction:column;gap:12px;width:248px;box-sizing:border-box;padding:12px;border-radius:24px;background:var(--card);box-shadow:var(--hc-hair-all),0 18px 40px #00000059}.wbRangePick.wbPickRight{left:auto;right:18px}.wbRangePresets{display:flex;flex-direction:column;gap:2px}.wb .wbRangePreset{height:32px;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--text);font:400 14px/20px var(--font);text-align:left;cursor:pointer}.wb .wbRangePreset:hover{background:var(--tile)}.wb .wbRangePreset[aria-pressed=true]{background:var(--bright);color:var(--on-bright);font-weight:600}.wbRangeDates{display:grid;grid-template-columns:1fr 1fr;gap:8px;padding-top:12px;box-shadow:inset 0 .4px 0 var(--line)}.wbRangeDates label{display:grid;gap:4px;min-width:0;color:var(--muted);font:400 12px/16px var(--font)}.wbRangeDates input{width:100%;min-width:0;height:32px;box-sizing:border-box;padding:0 6px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:400 12px/16px var(--font);color-scheme:inherit}.wb .wbRangeApply{height:32px;padding:0 14px;border:0;border-radius:999px!important;background:var(--bright);color:var(--on-bright);font:600 12px/16px var(--font-tile);cursor:pointer}.wbGraphCard .wbGraph{flex:1;height:auto;min-height:0}.wb.wbPopup{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073;overscroll-behavior:contain;container-type:normal}.wb.wbPopup[hidden]{display:none}.wbPopupBox{position:relative;width:520px;max-width:100%}.wbPopup .wbCard.wbSquare.wbGraphCard{height:auto;aspect-ratio:auto;box-shadow:var(--hc-hair-all)}.wbPopup .wbGraphCard .wbGraph{flex:none;height:auto}@media (max-width:620px){.wb.wbPopup{place-items:end stretch;padding:0}.wbPopupBox{width:100%}.wbPopup .wbCard.wbSquare.wbGraphCard{border-radius:28px 28px 0 0}}`, eh = '#app .mvPv{position:relative;transform:perspective(var(--pv-persp)) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) scale(var(--sc,1));transition:transform var(--pv-ret) var(--pv-ease)}#app .mvPv.mvMoving{transition:transform 70ms linear}#app .mvPv:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;opacity:0;mix-blend-mode:soft-light;background:radial-gradient(circle at var(--mx,50%) var(--my,50%),rgba(255,255,255,var(--pv-shine)),transparent var(--pv-size));transition:opacity var(--pv-ret) ease}#app .mvPv.mvLit:after{opacity:1}#app .tfBar{--mv-c:var(--light-soft,var(--primary));transform-origin:center;transition:box-shadow var(--ab-out) var(--ab-ease),transform var(--ab-out) var(--ab-ease)}#app .tfBar.mvHover{box-shadow:0 0 var(--ab-blur) var(--ab-spread) color-mix(in srgb,var(--mv-c) var(--ab-str),transparent);transition-duration:var(--ab-in)}#app .tfBar.mvHold{box-shadow:0 0 var(--ab-blur2) var(--ab-spread2) color-mix(in srgb,var(--mv-c) var(--ab-str2),transparent);transform:var(--ab-grow);transition-duration:var(--ab-in)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>:is(svg,ha-icon,ha-state-icon,span){transition:scale var(--ih-dur) var(--ih-ease)}@media (hover:hover){#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-s)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover:before{opacity:1}}:where(#app button.tfIcon,#app .tfBack,#app .tfEditChip,#app .tfTrayBtn,#app [data-wb=graph-close]){position:relative}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;background:color-mix(in srgb,currentColor var(--ih-tint),transparent);opacity:0;transition:opacity var(--ih-dur) var(--ih-ease)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):active>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-p)}#app .mvSegInd{position:absolute;z-index:0;pointer-events:none}#app .mvSegMoving>button{position:relative;z-index:1;background-color:transparent!important;box-shadow:none!important;transition:none!important}#app .tfMoreBackdrop{-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}#app .toast.tfToast{min-height:58px;box-sizing:border-box;padding:9px 18px 9px 9px;gap:14px;border-radius:29px;font-size:18px;line-height:1.2}#app .toast .mvTick{display:grid;place-items:center;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--mv-ok);color:#fff}#app .toast .mvTick svg{width:26px;height:26px;fill:none;stroke:currentColor;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}#app .toast .mvToastText{font-weight:600}#app .toast .toastAction{font-size:16px;margin-left:2px}#app .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}#app{--ol-l:68%;--mv-ok:#4cc38a}#app.light{--ol-l:48%;--mv-ok:#1f7a4d}#app .tfAreaPanel:has(>.mvEdge){isolation:isolate;position:relative}#app .tfRoomTile.tfBoardItem:has(>.mvEdge){isolation:isolate}#app .mvEdge,#app .mvEdgeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity var(--ol-in) ease-out}#app .mvEdgeFill{z-index:-1;background:hsl(var(--ol-h) 97% var(--ol-l));mix-blend-mode:soft-light;opacity:clamp(0,calc(var(--ol-fill) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-fill));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%)}#app .mvEdge{z-index:5}#app .mvEdge:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l));opacity:clamp(0,calc(var(--ol-border) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-border));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%));mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%))}#app .mvEdge>i{position:absolute;top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;border-radius:inherit;mix-blend-mode:plus-lighter;opacity:clamp(0,calc(var(--ol-glow) * (var(--edge-proximity,0) - var(--ol-esens)) / (100 - var(--ol-esens))),var(--ol-glow));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}#app .mvEdge>i:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;--s:var(--ol-size);box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l) / 60%),inset 0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),inset 0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),inset 0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(22.4px*var(--s)) calc(1.6px*var(--s)) hsl(var(--ol-h) 97% var(--ol-l) / 10%)}#app :not(.mvLitEdge)>:is(.mvEdge,.mvEdgeFill){opacity:0;transition:opacity var(--ol-out) ease-out}@media (prefers-reduced-motion:reduce){#app .mvPv{transform:none!important}#app .mvPv:after{display:none}#app .tfBar.mvHold{transform:none}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>*{scale:none!important}}#app .tfBoardItem.mvDrag{scale:none}#app.tfEditing.tfBoardReady .tfBoardItem:not(.tfDragging){transition:left .42s cubic-bezier(.34,1.46,.64,1),top .42s cubic-bezier(.34,1.46,.64,1),height .42s cubic-bezier(.34,1.46,.64,1)}', ah = `<main id="app"><div class="shell">
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
`, kd = "homecore-theme", oh = {
  home: '<path d="M3 10.5L12 3L21 10.5V21H3V10.5Z"/>',
  settings: '<path d="M21 4H14"/><path d="M10 4H3"/><path d="M21 12H12"/><path d="M8 12H3"/><path d="M21 20H16"/><path d="M12 20H3"/><path d="M14 2V6"/><path d="M8 10V14"/><path d="M16 18V22"/>',
  fullscreen: '<path d="M8 3H5C3.9 3 3 3.9 3 5V8"/><path d="M21 8V5C21 3.9 20.1 3 19 3H16"/><path d="M3 16V19C3 20.1 3.9 21 5 21H8"/><path d="M16 21H19C20.1 21 21 20.1 21 19V16"/>',
  back: '<path d="M15 18L9 12L15 6"/>'
}, nh = (n) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (oh[n] || "") + "</svg>", Sd = {
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
function rh(n, { setLight: r, fullscreenSupported: d, toggleFullscreen: p }) {
  const g = (et) => n.getElementById(et), v = g("app");
  n.querySelectorAll("[data-icon]").forEach((et) => {
    et.innerHTML = nh(et.dataset.icon);
  });
  const w = { home: g("homeView"), settings: g("settingsView") }, T = g("homeNav"), V = g("settingsNav");
  function M(et) {
    Object.entries(w).forEach(([at, X]) => X.classList.toggle("active", at === et)), T.classList.toggle("active", et === "home"), V.classList.toggle("active", et === "settings");
  }
  T.addEventListener("click", () => M("home")), V.addEventListener("click", () => M("settings")), g("settingsBack").addEventListener("click", () => M("home"));
  function D(et) {
    const at = et === "light";
    n.querySelectorAll(".themeBtn").forEach((X) => X.classList.toggle("active", X.dataset.theme === et)), v.classList.toggle("light", at), r(at);
  }
  D(Sd.get(kd) === "light" ? "light" : "dark"), n.querySelectorAll(".themeBtn").forEach((et) => et.addEventListener("click", () => {
    D(et.dataset.theme), Sd.set(kd, et.dataset.theme);
  }));
  const I = g("tvNav");
  d || (I.hidden = !0), I.addEventListener("click", () => p());
  let G;
  function J(et) {
    const at = g("toast");
    at && (at.textContent = et, at.classList.add("show"), clearTimeout(G), G = setTimeout(() => at.classList.remove("show"), 2600));
  }
  return { showView: M, toast: J };
}
const ih = /* @__PURE__ */ new Set(["roaming", "test_area"]), sh = {
  living_room: { climate: !0, cover: ["Curtains", "curtain", 62], temperature: 20.5, humidity: 44, motion: "Living room motion", plant: ["Monstera", 32, 4200, 21.4, 580] },
  kitchen: { temperature: 21.2, humidity: 48, door: "Back door", plant: ["Basil", 55, 900, 22.1, 910] },
  balcony: { solar: !0, door: "Balcony door", doorOpen: !0, valve: "Watering", valvePos: ["Garden valve", 40], plant: ["Tomatoes", 61, 18500, 14.2, 1240] },
  bedroom: { cover: ["Roller blind", "shade", 0], humidifier: !0, temperature: 18.9, humidity: 38, window: "Bedroom window", fan: ["Ceiling fan", 60] },
  office: { cover: ["Blinds", "blind", 60, 45], vacuum: !0, temperature: 21.8, humidity: 41, plant: ["Pothos", 47, 2600, 21.6, 640] },
  bathroom: { temperature: 22.4, humidity: 62, fan: ["Extractor fan"], waterHeater: !0, valvePos: ["Water valve", null] }
}, Dn = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, Me = "made_up_", Ya = (n) => {
  var r;
  return (r = String(n).split(".")[1]) == null ? void 0 : r.startsWith(Me);
}, Tn = (n) => n.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function Jl(n) {
  const r = n.getHours() + n.getMinutes() / 60, d = Math.max(0, Math.sin((r - 7) / 13 * Math.PI));
  return 2.4 * d * d;
}
function lh(n) {
  const r = new Date(n.getFullYear(), n.getMonth(), n.getDate());
  let d = 0;
  for (let p = +r; p < +n; p += 10 * 60 * 1e3) d += Jl(new Date(p)) / 6;
  return d;
}
function _d(n = /* @__PURE__ */ new Date()) {
  const r = [];
  for (let d = 0; d <= 96; d++) {
    const p = +n - (96 - d) * 15 * 60 * 1e3;
    r.push([p, Jl(new Date(p))]);
  }
  return r;
}
function ch({ onChange: n }) {
  const r = {}, d = {}, p = (X, N, nt, ct) => {
    r[X] = { entity_id: X, state: nt, attributes: ct, last_changed: new Date(Date.now() - 18e6).toISOString() }, d[X] = N;
  }, g = (X, N, nt) => {
    const ct = r[X], wt = N ?? ct.state;
    r[X] = { ...ct, state: wt, attributes: { ...ct.attributes, ...nt }, last_changed: wt === ct.state ? ct.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, v = (X, N, nt, ct) => p("binary_sensor." + Me + (X ? X + "_" : "") + Tn(N), X, ct ? "on" : "off", { friendly_name: N, device_class: nt });
  Object.entries(sh).forEach(([X, N]) => {
    if (N.temperature != null && p("sensor." + Me + X + "_temperature", X, String(N.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), N.humidity != null && p("sensor." + Me + X + "_humidity", X, String(N.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), N.vacuum && p("vacuum." + Me + "robot", X, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), N.climate && p("climate." + Me + X, X, "heat", {
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
      p("fan." + Me + X + "_" + Tn(nt), X, "on", ct != null ? { friendly_name: nt, percentage: ct, percentage_step: 10, oscillating: !0, direction: "forward", supported_features: 55 } : { friendly_name: nt, supported_features: 48 });
    }
    if (N.waterHeater && p("water_heater." + Me + X, X, "eco", { friendly_name: "Water heater", current_temperature: 55, temperature: 60, min_temp: 40, max_temp: 75, target_temp_step: 1, operation_mode: "eco", operation_list: ["off", "eco", "electric", "gas"], away_mode: "off" }), N.valvePos) {
      const [nt, ct] = N.valvePos;
      p("valve." + Me + X + "_" + Tn(nt), X, ct == null || ct ? "open" : "closed", { friendly_name: nt, device_class: "water", supported_features: 3 | (ct == null ? 0 : 12), ...ct == null ? {} : { current_position: ct } });
    }
    if (N.garage && p("cover." + Me + X + "_" + Tn(N.garage), X, "closed", { friendly_name: N.garage, device_class: "garage", supported_features: 3 }), N.cover) {
      const [nt, ct, wt, it] = N.cover;
      p("cover." + Me + X + "_" + Tn(nt), X, wt ? "open" : "closed", { friendly_name: nt, device_class: ct, current_position: wt, ...it != null ? { current_tilt_position: it } : {} });
    }
    if (N.humidifier && p("humidifier." + Me + X, X, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: N.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), N.solar && (p("sensor." + Me + X + "_solar_power", X, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), p("sensor." + Me + X + "_solar_today", X, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), N.valve && p("valve." + Me + X + "_" + Tn(N.valve), X, "closed", { friendly_name: N.valve, device_class: "water" }), N.door && v(X, N.door, "door", N.doorOpen), N.window && v(X, N.window, "window", !1), N.motion && v(X, N.motion, "motion", !1), N.plant) {
      const [nt, ct, wt, it, Z] = N.plant, Y = Me + Tn(nt), H = (Ht, lt, U, Wt, j) => p("sensor." + Y + "_" + Ht, X, String(U), { friendly_name: lt, device_class: j, state_class: "measurement", unit_of_measurement: Wt, plant_low: U < Dn[Ht][0], plant_high: U > Dn[Ht][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[Ht] });
      H("moisture", "Moisture", ct, "%", "moisture"), H("light", "Light", wt, "lx", "illuminance"), H("temperature", "Temperature", it, "°C", "temperature"), H("fertility", "Fertility", Z, "µS/cm", "conductivity");
      const yt = Object.entries({ moisture: ct, light: wt, temperature: it, fertility: Z }).filter(([Ht, lt]) => lt < Dn[Ht][0] || lt > Dn[Ht][1]).map(([Ht, lt]) => Ht + (lt < Dn[Ht][0] ? " low" : " high"));
      p("plant." + Y, X, yt.length ? "problem" : "ok", { friendly_name: nt, moisture: ct, brightness: wt, temperature: it, conductivity: Z, problem: yt.join(", ") || "none" });
    }
  }), p("alarm_control_panel." + Me + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 39, code_format: "number", code_arm_required: !1, changed_by: "Matt" }), v(null, "Front door", "door", !1), v(null, "Smoke alarm", "smoke", !1), p("sensor." + Me + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const w = {}, T = {};
  let V = null;
  function M() {
    const X = /* @__PURE__ */ new Date();
    Object.keys(r).forEach((N) => {
      N.endsWith("_solar_power") && (r[N] = { ...r[N], state: Jl(X).toFixed(2) }), N.endsWith("_solar_today") && (r[N] = { ...r[N], state: lh(X).toFixed(1) });
    });
  }
  M();
  let D = 0;
  function I() {
    let X = !1;
    const N = ++D % 10 === 0, nt = (it, Z, Y) => {
      g(it, Z, Y), X = !0;
    };
    Object.entries(w).forEach(([it, Z]) => {
      const Y = r[it].attributes.current_position, H = Y < Z ? Math.min(Z, Y + 10) : Math.max(Z, Y - 10);
      H === Z && delete w[it], nt(it, H === Z ? H === 0 ? "closed" : "open" : Z > Y ? "opening" : "closing", { current_position: H });
    }), Object.entries(T).forEach(([it, Z]) => {
      const Y = r[it].attributes.current_tilt_position, H = Y < Z ? Math.min(Z, Y + 25) : Math.max(Z, Y - 25);
      H === Z && delete T[it], nt(it, null, { current_tilt_position: H });
    }), Object.keys(r).filter((it) => it.startsWith("climate.")).forEach((it) => {
      const Z = r[it], Y = Z.attributes, H = Y.current_temperature, yt = (Z.state === "heat" || Z.state === "auto") && H < Y.temperature - 0.05, Ht = (Z.state === "cool" || Z.state === "auto") && H > Y.temperature + 0.05, lt = Z.state === "off" ? "off" : yt ? "heating" : Ht ? "cooling" : "idle", U = N ? Math.round((H + (yt ? 0.1 : Ht ? -0.1 : 0)) * 10) / 10 : H;
      (U !== H || lt !== Y.hvac_action) && nt(it, null, { current_temperature: U, hvac_action: lt });
    }), Object.keys(r).filter((it) => it.startsWith("humidifier.")).forEach((it) => {
      const Z = r[it], Y = Z.attributes, H = Y.current_humidity, yt = Z.state === "on" && H < Y.humidity, Ht = yt && N ? H + 1 : H, lt = Z.state !== "on" ? "off" : yt ? "humidifying" : "idle";
      if (Ht !== H || lt !== Y.action) {
        nt(it, null, { current_humidity: Ht, action: lt });
        const U = "sensor." + Me + d[it] + "_humidity";
        r[U] && nt(U, String(Ht));
      }
    });
    const ct = r["vacuum." + Me + "robot"], wt = ct.attributes;
    ct.state === "cleaning" && N && nt(ct.entity_id, null, { battery_level: Math.max(5, wt.battery_level - 1) }), ct.state === "returning" && nt(ct.entity_id, "docked", {}), ct.state === "docked" && wt.battery_level < 100 && nt(ct.entity_id, null, { battery_level: Math.min(100, wt.battery_level + 2) }), V && Date.now() - V.at > 5e3 && (nt("alarm_control_panel." + Me + "house", "armed_" + V.mode, {}), V = null), X && n();
  }
  const G = setInterval(I, 1e3), J = setInterval(() => {
    M(), n();
  }, 60 * 1e3);
  function et(X, N, nt) {
    const ct = nt == null ? void 0 : nt.entity_id;
    if (!r[ct]) return !1;
    const wt = r[ct], it = wt.attributes, Z = (Y, H) => g(ct, Y, H);
    if (X === "climate" && (N === "set_temperature" && nt.temperature != null && Z(null, { temperature: Math.max(it.min_temp, Math.min(it.max_temp, nt.temperature)) }), N === "set_hvac_mode" && Z(nt.hvac_mode, nt.hvac_mode === "off" ? { hvac_action: "off" } : {}), N === "toggle" && Z(wt.state === "off" ? "heat" : "off", wt.state === "off" ? {} : { hvac_action: "off" }), N === "set_temperature" && nt.target_temp_low != null && Z(null, { target_temp_low: nt.target_temp_low, target_temp_high: nt.target_temp_high }), N === "set_fan_mode" && Z(null, { fan_mode: nt.fan_mode }), N === "set_swing_mode" && Z(null, { swing_mode: nt.swing_mode }), N === "set_preset_mode" && Z(null, { preset_mode: nt.preset_mode }), N === "set_humidity" && Z(null, { humidity: Math.max(it.min_humidity, Math.min(it.max_humidity, nt.humidity)) })), X === "fan" && (N === "set_percentage" && Z(nt.percentage > 0 ? "on" : "off", { percentage: nt.percentage }), N === "oscillate" && Z(null, { oscillating: nt.oscillating }), N === "set_direction" && Z(null, { direction: nt.direction }), (N === "turn_on" || N === "turn_off" || N === "toggle") && Z(N === "turn_on" || N === "toggle" && wt.state !== "on" ? "on" : "off")), X === "water_heater" && (N === "set_temperature" && Z(null, { temperature: Math.max(it.min_temp, Math.min(it.max_temp, nt.temperature)) }), N === "set_operation_mode" && Z(nt.operation_mode, { operation_mode: nt.operation_mode }), N === "set_away_mode" && Z(null, { away_mode: nt.away_mode ? "on" : "off" }), N === "turn_on" || N === "turn_off" || N === "toggle")) {
      const Y = N === "turn_on" || N === "toggle" && wt.state === "off";
      Z(Y ? "eco" : "off", { operation_mode: Y ? "eco" : "off" });
    }
    if (X === "cover") {
      const Y = N === "open_cover" ? 100 : N === "close_cover" ? 0 : N === "set_cover_position" ? nt.position : N === "toggle" ? it.current_position > 0 ? 0 : 100 : null;
      N === "stop_cover" && (delete w[ct], delete T[ct], Z(it.current_position === 0 ? "closed" : "open")), Y != null && it.current_position == null ? Z(Y > 0 ? "open" : "closed") : Y != null && Y !== it.current_position && (w[ct] = Y, Z(Y > it.current_position ? "opening" : "closing"));
      const H = N === "open_cover_tilt" ? 100 : N === "close_cover_tilt" ? 0 : N === "set_cover_tilt_position" ? nt.tilt_position : null;
      N === "stop_cover_tilt" && delete T[ct], H != null && it.current_tilt_position != null && H !== it.current_tilt_position && (T[ct] = H);
    }
    if (X === "humidifier" && (N === "set_humidity" && Z(null, { humidity: Math.max(it.min_humidity, Math.min(it.max_humidity, nt.humidity)) }), N === "set_mode" && Z(null, { mode: nt.mode }), N === "turn_on" || N === "turn_off" || N === "toggle")) {
      const Y = N === "turn_on" || N === "toggle" && wt.state !== "on";
      Z(Y ? "on" : "off", { action: Y ? "idle" : "off" });
    }
    if (X === "vacuum" && (N === "start" && Z("cleaning", { rooms: nt.rooms || it.rooms }), N === "pause" && Z("paused"), N === "return_to_base" && Z("returning", { rooms: [] }), N === "locate" && Z(null, { located: Date.now() }), N === "set_rooms" && Z(null, { rooms: nt.rooms })), X === "valve") {
      const Y = N === "open_valve" || N === "toggle" && wt.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(N) && Z(Y ? "open" : "closed", it.current_position != null ? { current_position: Y ? 100 : 0 } : {}), N === "set_valve_position" && Z(nt.position > 0 ? "open" : "closed", { current_position: nt.position });
    }
    if (X === "alarm_control_panel") {
      N === "alarm_disarm" && (V = null, Z("disarmed", { changed_by: "Matt" }));
      const Y = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night", alarm_arm_vacation: "vacation" }[N];
      Y && (V = { mode: Y, at: Date.now() }, Z("arming", { changed_by: "Matt" }));
    }
    return n(), !0;
  }
  function at(X, { madeUp: N = !0 } = {}) {
    const nt = N ? r : {}, ct = (X == null ? void 0 : X.states) || {}, wt = (X == null ? void 0 : X.entities) || {}, it = (X == null ? void 0 : X.devices) || {}, Z = (ot) => {
      var xt;
      const st = wt[ot];
      return st && (st.area_id || st.device_id && ((xt = it[st.device_id]) == null ? void 0 : xt.area_id)) || null;
    }, Y = (ot) => {
      const st = wt[ot];
      return ct[ot] && ct[ot].state !== "unavailable" && !(st != null && st.hidden) && !(st != null && st.entity_category);
    }, H = {};
    Object.keys(ct).forEach((ot) => {
      const st = Z(ot);
      st && Y(ot) && (H[st] || (H[st] = [])).push(ot);
    });
    const yt = { ...ct, ...nt }, Ht = (ot) => {
      var st, xt;
      return (xt = (st = yt[ot]) == null ? void 0 : st.attributes) == null ? void 0 : xt.device_class;
    }, lt = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], U = Object.keys(ct).filter((ot) => ot.startsWith("vacuum.") && Y(ot)), Wt = Object.values((X == null ? void 0 : X.areas) || {}).filter((ot) => !ih.has(ot.area_id)).map((ot) => {
      const st = ot.area_id, xt = H[st] || [], ht = (Ct) => xt.filter((De) => De.startsWith(Ct + ".")), Mt = (Ct) => ht("sensor").filter((De) => Ht(De) === Ct), qt = (Ct) => Object.keys(nt).filter((De) => d[De] === st && Ct(De)), ce = (Ct, De) => Ct.length ? Ct : qt(De), mt = ce(Mt("temperature"), (Ct) => Ct.endsWith(st + "_temperature")), Xe = ce(Mt("humidity"), (Ct) => Ct.endsWith(st + "_humidity")), ho = Mt("power").filter((Ct) => /^(W|kW)$/.test(yt[Ct].attributes.unit_of_measurement || "")), ln = ht("binary_sensor").filter((Ct) => Ht(Ct) === "moisture"), qo = ce(ht("plant"), (Ct) => Ct.startsWith("plant.")).map((Ct) => ({ id: Ct, readings: qt((De) => De.startsWith("sensor." + Ct.split(".")[1] + "_")) })), Ka = [...ht("binary_sensor").filter((Ct) => lt.includes(Ht(Ct))), ...qt((Ct) => Ct.startsWith("binary_sensor."))];
      return {
        id: st,
        name: ot.name,
        icon: ot.icon,
        floor: ot.floor_id || null,
        readings: [...mt.slice(0, 1), ...Xe.slice(0, 1), ...ln],
        power: ho.length ? ho.reduce((Ct, De) => Ct + Number(yt[De].state) * (yt[De].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: ht("switch"),
        lights: ht("light"),
        actions: [
          ...ht("light"),
          ...ce(ht("climate"), (Ct) => Ct.startsWith("climate.")),
          ...ce(ht("cover"), (Ct) => Ct.startsWith("cover.")),
          ...ce(ht("humidifier"), (Ct) => Ct.startsWith("humidifier.")),
          ...ce(ht("valve"), (Ct) => Ct.startsWith("valve.")),
          ...ht("media_player"),
          ...ht("vacuum"),
          ...U.length ? [] : qt((Ct) => Ct.startsWith("vacuum.")),
          ...ht("fan"),
          ...qt((Ct) => Ct.startsWith("fan.")),
          ...ht("water_heater"),
          ...qt((Ct) => Ct.startsWith("water_heater."))
        ],
        solar: qt((Ct) => Ct.includes("_solar_")),
        plants: qo,
        openings: Ka,
        alerts: [...ln, ...Ka].filter((Ct) => {
          var De;
          return ((De = yt[Ct]) == null ? void 0 : De.state) === "on";
        })
      };
    }).filter((ot) => ot.readings.length || ot.plugs.length || ot.actions.length || ot.solar.length || ot.plants.length), j = Object.keys(ct).find((ot) => /^sensor\..*(p1_meter_power|grid_power)$/.test(ot) && ct[ot].state !== "unavailable") || null, Q = (ot) => Object.keys(ct).filter((st) => st.startsWith(ot + ".") && Y(st)), C = Q("alarm_control_panel"), ut = U.length ? U : N ? ["vacuum." + Me + "robot"] : [];
    return {
      states: yt,
      rooms: Wt,
      grid: j,
      // any device's room, hidden ones too (Maintenance's batteries are mostly diagnostic)
      areaOf: (ot) => nt[ot] ? d[ot] : Z(ot),
      vacuums: ut,
      homeVacuums: ut.filter((ot) => !Wt.some((st) => st.actions.includes(ot))),
      security: {
        alarms: C.length ? C : N ? ["alarm_control_panel." + Me + "house"] : [],
        locks: Q("lock"),
        openings: [...Object.keys(nt).filter((ot) => ot.startsWith("binary_sensor.")), ...N ? ["sensor." + Me + "doorbell"] : []]
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
}, Fr = (n) => n < 0 ? 0 : n > 1 ? 1 : n, Gl = (n) => {
  const r = String(n || "#000000").trim().replace("#", ""), d = r.length === 3 ? r.split("").map((p) => p + p).join("") : r;
  return [0, 2, 4].map((p) => parseInt(d.slice(p, p + 2), 16) || 0);
}, dh = (n) => "#" + n.map((r) => Math.round(Math.max(0, Math.min(255, r))).toString(16).padStart(2, "0")).join(""), Cd = {}, Ha = (n, r, d) => {
  const p = n + r + d;
  return Cd[p] || (Cd[p] = dh(Gl(n).map((g, v) => g + (Gl(r)[v] - g) * d)));
}, Ad = {}, kl = (n) => Ad[n] || (Ad[n] = Gl(n));
function Dp(n, r) {
  const d = String(n || "");
  return (d === "sunny" || d === "clear-night" ? "clear" : d === "partlycloudy" ? "partly" : d === "fog" ? "fog" : d === "lightning" || d === "lightning-rainy" ? "storm" : d === "snowy" || d === "snowy-rainy" ? "snow" : d === "rainy" || d === "pouring" || d === "hail" ? "rain" : "cloudy") + "/" + (d === "clear-night" || r ? "night" : "day");
}
function ph(n) {
  const r = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return r.partly = [Ha(r.clear[0], r.cloudy[0], 0.12), Ha(r.clear[1], r.cloudy[1], 0.12)], r.storm = [Ha(r.rain[0], "#000000", 0.22), Ha(r.rain[1], "#000000", 0.22)], r;
}
const Ul = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], Yl = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], Zl = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function uh(n, r = Oa) {
  const d = { ...Oa, ...r }, p = ph(d), g = String(n).split("/"), v = p[g[0]] ? g[0] : "clear", w = g[1] === "night", T = p[v][w ? 1 : 0], V = {
    night: w,
    clearness: v === "clear" ? 1 : v === "partly" ? 0.7 : 0.25,
    sky: T,
    skyStops: [T],
    skyT: 0,
    sun: { x: 45, y: w ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: w ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: w ? 1 : 0 },
    stars: Ul.map(() => ({ o: 0 })),
    rain: Yl.map(() => ({ o: 0, dy: -16 })),
    snow: Zl.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, M = (D) => Ul.map(() => ({ o: D }));
  return v === "clear" ? w ? (V.moon.o = 1, V.stars = M(1)) : V.sun.o = 1 : v === "partly" ? (V.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: w ? 1 : 0 }, w ? (V.moon = { x: 34, y: 33, d: 48, o: 1 }, V.stars = M(0.7)) : V.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : v === "cloudy" || v === "fog" ? (V.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: w ? 1 : 0 }, w ? V.moon = { x: 40, y: 36, d: 40, o: 0 } : V.sun = { x: 40, y: 36, r: 20, o: 0 }) : (V.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, w ? V.moon = { x: 38, y: 28, d: 36, o: 0 } : V.sun = { x: 38, y: 28, r: 18, o: 0 }, v === "snow" ? V.snow = Zl.map(() => ({ o: 1, dy: 0 })) : V.rain = Yl.map((D, I) => ({ o: v === "storm" && I === 1 ? 0 : 1, dy: 0 })), v === "storm" && (V.bolt = { o: 1, dy: 0 })), V;
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
], Ln = (n, r) => (fh[(r & 7) * 8 + (n & 7)] + 0.5) / 64, hh = 0, Ep = 1, Bp = 2, Rp = 3, Pp = 4, uo = 5, es = 6, rr = 7, Hp = 8, Td = (n, r) => r <= 0.6665 && ((n - 0.5) * (n - 0.5) + (r - 0.2877) * (r - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (r - 0.416) * (r - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (r - 0.458) * (r - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && r >= 0.416), mh = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], gh = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((n) => [n[0] * 13 / 11, n[1] * 28 / 24]), bh = (n, r, d) => {
  let p = !1;
  for (let g = 0, v = n.length - 1; g < n.length; v = g++) {
    const w = n[g], T = n[v];
    w[1] > d != T[1] > d && r < (T[0] - w[0]) * (d - w[1]) / (T[1] - w[1]) + w[0] && (p = !p);
  }
  return p;
};
function wh(n, { size: r = 90, px: d = 2, oneBit: p = !1, colors: g = Oa, ink: v = "#26221e", paper: w = "#fbf9f6", clock: T = 0, idle: V = !1 } = {}) {
  const M = { ...Oa, ...g }, D = Math.sin, I = Math.PI * 2, G = Math.max(6, Math.round(r / d)), J = G / 90, et = V ? Math.floor(T / 100) * 100 : 0, at = V ? D(I * et / 3600) : 0, X = V ? 1.8 * D(I * et / 6400) : 0, N = V ? 0.9 * D(I * et / 4100) : 0, nt = V ? 0.8 * D(I * et / 5200) : 0, ct = et / 3400 % 1, wt = V && n.bolt.o > 0.5 && (ct < 0.04 || ct > 0.08 && ct < 0.11), it = new Array(G * G), Z = new Uint8Array(G * G), Y = (j, Q, C, ut, ot) => {
    C == null || j < 0 || Q < 0 || j >= G || Q >= G || (ut >= 1 || ut > Ln(j + 5, Q + 3)) && (it[Q * G + j] = C, Z[Q * G + j] = ot);
  }, H = (j, Q, C, ut) => {
    for (let ot = Math.max(0, Math.floor(Q - C) - 1); ot <= Math.min(G - 1, Q + C + 1); ot++) for (let st = Math.max(0, Math.floor(j - C) - 1); st <= Math.min(G - 1, j + C + 1); st++) ut(st, ot, st + 0.5 - j, ot + 0.5 - Q);
  }, yt = n.skyStops || [n.sky], Ht = n.skyT || 0;
  for (let j = 0; j < G; j++) {
    const Q = n.night ? Fr(1 - (j + 0.5) / (G * 0.7)) * 0.85 : Fr(((j + 0.5) / G - 0.35) / 0.65) * 0.85;
    for (let C = 0; C < G; C++) {
      let ut = yt[0];
      if (yt.length > 1) {
        const ot = Ht * (yt.length - 1), st = Math.min(yt.length - 2, Math.floor(ot));
        ut = ot - st > Ln(C, j) ? yt[st + 1] : yt[st];
      }
      Q > Ln(C + 2, j + 5) && (ut = n.night ? Ha(ut, "#000000", 0.28) : Ha(ut, "#ffffff", 0.2)), it[j * G + C] = wt ? Ha(ut, "#ffffff", 0.25) : ut;
    }
  }
  if (n.sun.o > 0.01) {
    const j = n.sun.x * J, Q = n.sun.y * J, C = Math.max(1, n.sun.r * J);
    if (V) {
      const ut = C * (1.45 + 0.06 * at), ot = Ha(M.sun, "#ffffff", 0.55);
      if (H(j, Q, ut, (st, xt, ht, Mt) => {
        const qt = Math.sqrt(ht * ht + Mt * Mt);
        qt > C && qt < ut && Y(st, xt, ot, 0.26 * (1 - (qt - C) / (ut - C)) * n.sun.o, hh);
      }), n.sun.o > 0.5) {
        const st = Math.floor(et / 500) % 2, xt = Math.max(1, C * 0.22);
        for (let ht = 0; ht < 8; ht++) if (ht % 2 === st) for (let Mt = C + 1.5; Mt < C + 1.5 + xt; Mt += 0.7) Y(Math.floor(j + Math.cos(ht * Math.PI / 4) * Mt), Math.floor(Q + Math.sin(ht * Math.PI / 4) * Mt), M.sun, n.sun.o, Hp);
      }
    }
    H(j, Q, C, (ut, ot, st, xt) => {
      if (st * st + xt * xt > C * C) return;
      const ht = ((st * 0.643 + xt * 0.766) / C + 1) / 2;
      Y(ut, ot, Fr((ht - 0.62) / 0.38) > Ln(ut, ot) ? M.sunEdge : M.sun, n.sun.o, Ep);
    });
  }
  if (Ul.forEach((j, Q) => {
    const C = n.stars[Q].o;
    if (C < 0.01) return;
    const ut = Math.floor(j[0] * J), ot = Math.floor(j[1] * J), st = V ? (Math.floor(et / 300) + Q * 3) % 6 : 0;
    if (st === 5) return;
    const xt = Math.round(j[2] * J * (st === 4 ? 0.3 : st < 2 ? 1 : 0.6));
    Y(ut, ot, M.star, C, rr);
    for (let ht = 1; ht <= xt; ht++) {
      const Mt = ht === xt && xt > 1 ? Ha(M.star, n.sky, 0.5) : M.star;
      Y(ut - ht, ot, Mt, C, rr), Y(ut + ht, ot, Mt, C, rr), Y(ut, ot - ht, Mt, C, rr), Y(ut, ot + ht, Mt, C, rr);
    }
  }), n.moon.o > 0.01) {
    const j = Math.max(1.5, n.moon.d * J * 0.37), Q = n.moon.x * J, C = n.moon.y * J + (V && nt > 0.4 ? -1 : 0), ut = Q + 0.547 * j, ot = C - 0.503 * j, st = 0.82 * j, xt = Ha(M.moon, "#ffffff", 0.6);
    H(Q, C, j, (ht, Mt, qt, ce) => {
      if (qt * qt + ce * ce > j * j) return;
      const mt = ht + 0.5 - ut, Xe = Mt + 0.5 - ot;
      mt * mt + Xe * Xe <= st * st || Y(ht, Mt, Fr((ce + j) / (2 * j) * 1.1 - 0.1) > Ln(ht, Mt) ? M.moon : xt, n.moon.o, Bp);
    });
  }
  const lt = Math.max(2, Math.round(15.65 * J)), U = Math.max(1, Math.round(5.87 * J * 0.5));
  Yl.forEach((j, Q) => {
    const C = n.rain[Q];
    let ut = C.dy, ot = C.o;
    if (ot < 0.01) return;
    if (V) {
      const ht = (et / 950 + Q / 3) % 1;
      ut += -5 + ht * 14, ot *= ht < 0.18 ? ht / 0.18 : ht > 0.72 ? (1 - ht) / 0.28 : 1;
    }
    const st = (j[0] + 3 + X) * J, xt = (j[1] + ut) * J;
    for (let ht = 0; ht < lt; ht++) for (let Mt = 0; Mt < U; Mt++) Y(Math.floor(st - 0.208 * ht) + Mt, Math.floor(xt) + ht, M.rain, ot, Pp);
  });
  const Wt = Math.max(0, Math.round(7.34 * J / 2.6));
  if (Zl.forEach((j, Q) => {
    const C = n.snow[Q];
    let ut = C.dy, ot = 0, st = C.o;
    if (st < 0.01) return;
    if (V) {
      const Mt = (et / 3200 + Q / 5) % 1;
      ut += -6 + Mt * 14, ot = 1.5 * D(I * (Mt * 1.5 + Q / 5)), st *= Mt < 0.2 ? Mt / 0.2 : Mt > 0.75 ? (1 - Mt) / 0.25 : 1;
    }
    const xt = Math.floor((j[0] + 3.67 + ot + X) * J), ht = Math.floor((j[1] + 3.67 + ut) * J);
    Y(xt, ht, M.snow, st, uo);
    for (let Mt = 1; Mt <= Wt; Mt++)
      Y(xt - Mt, ht, M.snow, st, uo), Y(xt + Mt, ht, M.snow, st, uo), Y(xt, ht - Mt, M.snow, st, uo), Y(xt, ht + Mt, M.snow, st, uo), Wt > 1 && Mt < Wt && (Y(xt - Mt, ht - Mt, M.snow, st, uo), Y(xt + Mt, ht - Mt, M.snow, st, uo), Y(xt - Mt, ht + Mt, M.snow, st, uo), Y(xt + Mt, ht + Mt, M.snow, st, uo));
  }), n.bolt.o > 0.01)
    if (G >= 30) {
      const j = 39 + X, Q = 50 + n.bolt.dy;
      for (let C = Math.floor(Q * J); C <= (Q + 28) * J; C++) for (let ut = Math.floor(j * J); ut <= (j + 13) * J; ut++)
        bh(gh, (ut + 0.5) / J - j, (C + 0.5) / J - Q) && Y(ut, C, M.sun, n.bolt.o, es);
    } else {
      const j = G / 18, Q = 7, C = 10 + Math.round(n.bolt.dy * 0.2);
      mh.forEach((ut, ot) => ut.split("").forEach((st, xt) => {
        if (st !== "#") return;
        const ht = Math.floor((Q + xt) * j), Mt = Math.floor((C + ot) * j);
        for (let qt = Mt; qt < Math.max(Mt + 1, Math.floor((C + ot + 1) * j)); qt++) for (let ce = ht; ce < Math.max(ht + 1, Math.floor((Q + xt + 1) * j)); ce++) Y(ce, qt, M.sun, n.bolt.o, es);
      }));
    }
  if (n.cloud.o > 0.01) {
    const j = Math.max(3, n.cloud.w * J), Q = j * 0.6665, C = (n.cloud.x + X) * J - j / 2, ut = (n.cloud.y + N) * J - Q / 2, ot = Ha(M.cloudDay, M.cloudNight, Math.round(n.cloud.f * 4) / 4), st = Ha(ot, "#000000", 0.16);
    for (let xt = Math.max(0, Math.floor(ut) - 1); xt <= Math.min(G - 1, ut + Q + 1); xt++) for (let ht = Math.max(0, Math.floor(C) - 1); ht <= Math.min(G - 1, C + j + 1); ht++) {
      const Mt = (ht + 0.5 - C) / j, qt = (xt + 0.5 - ut) / j;
      Td(Mt, qt) && Y(ht, xt, !Td(Mt, qt + 1 / j) || Fr((qt - 0.42) / 0.25) * 0.8 > Ln(ht, xt) ? st : ot, n.cloud.o, Rp);
    }
  }
  return vh(it, Z, G, G, { oneBit: p, ink: v, paper: w, snowInk: !n.night });
}
function vh(n, r, d, p, { oneBit: g, ink: v, paper: w, snowInk: T }) {
  const V = new Uint8ClampedArray(d * p * 4), M = kl(v), D = kl(w);
  for (let I = 0; I < p; I++) for (let G = 0; G < d; G++) {
    const J = I * d + G, et = r[J];
    if (n[J] == null) continue;
    let at = kl(n[J]);
    if (g) {
      let X;
      et === Pp || et === Hp ? X = !0 : et === uo ? X = T : et === rr || et === es ? X = !1 : X = Math.round((0.2126 * at[0] + 0.7152 * at[1] + 0.0722 * at[2]) / 255 * 4) / 4 <= Ln(G, I), (et === Ep || et === Bp || et === Rp || et === es) && (G > 0 && r[J - 1] !== et || G < d - 1 && r[J + 1] !== et || I > 0 && r[J - d] !== et || I < p - 1 && r[J + d] !== et) && (X = !0), at = X ? M : D;
    }
    V[J * 4] = at[0], V[J * 4 + 1] = at[1], V[J * 4 + 2] = at[2], V[J * 4 + 3] = 255;
  }
  return { w: d, h: p, data: V };
}
const Oo = (n) => n < 0 ? 0 : n > 1 ? 1 : n, Kl = (n) => {
  const r = String(n || "#000000").trim().replace("#", ""), d = r.length === 3 ? r.split("").map((p) => p + p).join("") : r;
  return [0, 2, 4].map((p) => parseInt(d.slice(p, p + 2), 16) || 0);
}, yh = (n) => "#" + n.map((r) => Math.round(Math.max(0, Math.min(255, r))).toString(16).padStart(2, "0")).join(""), Ld = {}, Na = (n, r, d) => {
  const p = n + r + d;
  return Ld[p] || (Ld[p] = yh(Kl(n).map((g, v) => g + (Kl(r)[v] - g) * d)));
}, Dd = {}, $i = (n) => Dd[n] || (Dd[n] = Kl(n));
function xh(n) {
  const r = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return r.partly = [Na(r.clear[0], r.cloudy[0], 0.12), Na(r.clear[1], r.cloudy[1], 0.12)], r.storm = [Na(r.rain[0], "#000000", 0.22), Na(r.rain[1], "#000000", 0.22)], r;
}
const Mh = [
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
], Ho = (n, r) => (Mh[(r & 7) * 8 + (n & 7)] + 0.5) / 64, Np = 1, Op = 2, Ip = 3, Fp = 4, ir = 5, as = 6, Xl = 7, qp = 8, Ed = (n, r) => r <= 0.6665 && ((n - 0.5) * (n - 0.5) + (r - 0.2877) * (r - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (r - 0.416) * (r - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (r - 0.458) * (r - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && r >= 0.416), kh = (n, r, d) => {
  let p = !1;
  for (let g = 0, v = n.length - 1; g < n.length; v = g++) {
    const w = n[g], T = n[v];
    w[1] > d != T[1] > d && r < (T[0] - w[0]) * (d - w[1]) / (T[1] - w[1]) + w[0] && (p = !p);
  }
  return p;
};
function Sh(n, r, d, p, { oneBit: g, ink: v, paper: w, snowInk: T }) {
  const V = new Uint8ClampedArray(d * p * 4), M = $i(v), D = $i(w);
  for (let I = 0; I < p; I++) for (let G = 0; G < d; G++) {
    const J = I * d + G, et = r[J];
    if (n[J] == null) continue;
    let at = $i(n[J]);
    if (g) {
      let X;
      et === Fp || et === qp ? X = !0 : et === ir ? X = T : et === Xl || et === as ? X = !1 : X = Math.round((0.2126 * at[0] + 0.7152 * at[1] + 0.0722 * at[2]) / 255 * 4) / 4 <= Ho(G, I), (et === Np || et === Op || et === Ip || et === as) && (G > 0 && r[J - 1] !== et || G < d - 1 && r[J + 1] !== et || I > 0 && r[J - d] !== et || I < p - 1 && r[J + d] !== et) && (X = !0), at = X ? M : D;
    }
    V[J * 4] = at[0], V[J * 4 + 1] = at[1], V[J * 4 + 2] = at[2], V[J * 4 + 3] = 255;
  }
  return { w: d, h: p, data: V };
}
const _h = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, Ch = (n) => Dp(n, !1).split("/")[0], Sl = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let r = Math.imul(n ^ n >>> 15, 1 | n);
  return r = r + Math.imul(r ^ r >>> 7, 61 | r) ^ r, ((r ^ r >>> 14) >>> 0) / 4294967296;
}, Ah = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", Th = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", Lh = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", Dh = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", Eh = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], Bh = [".##", "##.", ".#.", "#.."];
function Wp(n, { width: r, height: d, colors: p, wave: g = 0.38, soft: v = 6, glow: w = 0.6, columns: T = 6 }) {
  const V = { ...Oa, dawn: "#e5a77e", ...p }, M = xh(V), D = r, I = d, G = D / T, J = G / 2, et = Math.PI * 2, at = n.length ? n : [{ cond: "cloudy", night: !1 }], X = [...Array(T * 2)].map((wt, it) => {
    const Z = at[Math.min(it, at.length - 1)], Y = Ch(Z.cond), H = it % 2 === 1;
    return { cond: Z.cond, k: Y, night: H, sky: M[Y][H ? 1 : 0], cover: _h[Y] };
  }), N = (wt) => I * (0.5 - g * Math.cos(et * (wt / G - 0.25)));
  return { C: V, S: X, W: D, H: I, cw: G, sw: J, TAU: et, yb: N, side: (wt, it, Z) => {
    const Y = (wt ? N(it) - Z : Z - N(it)) / Math.max(3, v * 1.4) + 0.5;
    return Y <= 0 ? 0 : Y >= 1 ? 1 : Y;
  }, glowAt: (wt) => {
    const it = ((wt / G - 0.25) % 1 + 1) % 1, Z = Math.max(0, Math.min(T - 1, Math.round(wt / G - 0.25))), Y = Math.max(0, Math.min(T - 1, Math.round(wt / G - 0.75))), H = 1 - (X[2 * Z].cover + X[2 * Y + 1].cover) / 2, yt = Math.sin(Math.PI * Math.min(1, Math.max(0, N(wt) / I)));
    return { c: it < 0.5 ? V.dusk : V.dawn, a: w * (0.2 + 0.8 * H) * yt * yt };
  }, soft: v, tw: G * 0.3, sy: I / 90 };
}
function Vp(n, { clock: r = 0, ambient: d = !1, seed: p = 1 }) {
  const { S: g, sw: v, side: w, C: T, TAU: V, sy: M, H: D } = n, I = r, G = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  g.forEach((at, X) => {
    const N = Sl(p * 977 + X * 131 + 7), nt = (X + 0.5) * v, ct = at.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[at.k] : 0;
    for (let wt = 0; wt < ct; wt++) {
      const it = nt + (N() - 0.5) * v * 1.6, Z = (6 + N() * 76) * M, Y = N() < 0.35, H = 1.8 + N() * 1.6, yt = w(!0, it, Z) * (Y ? 0.95 : 0.7) * (d ? 0.6 + 0.4 * Math.sin(V * I / 2600 + wt * 1.7 + X) : 1);
      yt >= 0.03 && G.stars.push({ x: it, y: Z, big: Y, size: H, o: yt });
    }
    if (!at.night && (at.k === "clear" || at.k === "partly")) {
      const wt = nt + (N() - 0.5) * v * 0.3, it = Math.min(15, v * 0.29);
      G.suns.push({ x: wt, y: 32 * M, rad: it, halo: it * 2.8 * (d ? 1 + 0.07 * Math.sin(V * I / 3600 + X) : 1) });
    }
    if (at.night && (at.k === "clear" || at.k === "partly")) {
      const wt = Math.min(0.78, v * 0.55 / 34), it = nt - 23 * wt + (N() - 0.5) * v * 0.2;
      G.moons.push({ x: it + 23 * wt, y: (4 + (d ? 0.8 * Math.sin(V * I / 5200 + X) : 0)) * M + 23 * wt, d: 46 * wt });
    }
  });
  const J = Math.max(56, Math.min(100, D * 0.45)), et = Math.max(1, v / (J * 2.4));
  return g.forEach((at, X) => {
    const N = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[at.k];
    if (!N) return;
    const nt = at.k === "partly" ? 1 : Math.round(N * et), ct = Sl(p * 577 + X * 71 + 3), wt = (X + 0.5) * v, it = at.k === "rain" || at.k === "storm" || at.night ? T.cloudNight : T.cloudDay, Z = at.night ? 0.82 : at.k === "storm" ? 0.75 : 1;
    for (let Y = 0; Y < nt; Y++) {
      const H = J / 46 * (at.k === "partly" ? 1 : 0.8 + ct() * 0.4), yt = wt + (at.k === "partly" ? v * 0.12 : ((Y + 0.5) / nt - 0.5) * v * 0.95 + (ct() - 0.5) * v * 0.5 / nt), Ht = (at.k === "partly" ? 40 : 6 + ct() * 26) * M, lt = d ? 2.5 * Math.sin(V * I / 9e3 + X * 1.3 + Y * 2.1) : 0, U = d ? 0.9 * Math.sin(V * I / 6100 + X + Y) : 0;
      G.clouds.push({ x: yt - 23 * H + lt, y: Ht - 15.33 * H + U, w: 46 * H, h: 30.66 * H, fill: it, o: Z * (nt > 1 && Y === 0 ? 0.85 : 1) });
    }
  }), g.forEach((at, X) => {
    const N = Sl(p * 313 + X * 29 + 11), nt = (X + 0.5) * v, ct = at.cond === "pouring" ? 16 : at.cond === "rainy" || at.cond === "hail" ? 9 : at.cond === "lightning-rainy" ? 12 : at.cond === "snowy-rainy" ? 5 : 0;
    for (let it = 0; it < ct; it++) {
      let Z = nt + (N() - 0.5) * v * 1.05, Y = 44 + N() * 36, H = 1;
      if (d) {
        const Ht = ((Y - 44 + I * 0.04) % 36 + 36) % 36;
        Z -= 0.21 * (Ht - (Y - 44)), Y = 44 + Ht, H = Math.min(1, Ht / 6, (36 - Ht) / 6);
      }
      Y *= M;
      const yt = w(at.night, Z, Y) * H;
      yt >= 0.05 && G.drops.push({ x: Z, y: Y, o: yt });
    }
    const wt = at.cond === "snowy" ? 11 : at.cond === "snowy-rainy" ? 6 : 0;
    for (let it = 0; it < wt; it++) {
      let Z = nt + (N() - 0.5) * v * 1.05, Y = 40 + N() * 44, H = 1;
      if (d) {
        const Ht = ((Y - 40 + I * 9e-3) % 44 + 44) % 44;
        Y = 40 + Ht, Z += 1.6 * Math.sin(V * I / 2800 + it * 1.9 + X), H = Math.min(1, Ht / 6, (44 - Ht) / 6);
      }
      Y *= M;
      const yt = w(at.night, Z, Y) * H;
      yt >= 0.05 && G.flakes.push({ x: Z, y: Y, o: yt });
    }
    if (at.k === "fog") {
      const it = at.night ? "#c8ccd6" : "#ffffff", Z = at.night ? 0.28 : 0.62, Y = d ? 4 * Math.sin(V * I / 8e3 + X) : 0;
      for (let H = 0; H < 4; H++) G.fogs.push({ x: nt - v * 0.75 + H % 2 * v * 0.18 + (H % 2 ? Y : -Y), y: (30 + H * 13) * M, w: v * 1.3, c: it, a: Z });
    }
    if (at.k === "storm") {
      const it = (I / 3400 + X * 0.37) % 1;
      G.bolts.push({ x: nt + (N() - 0.5) * v * 0.3 - 5, y: 36 * M, o: d && !(it < 0.05 || it > 0.09 && it < 0.12) ? 0.8 : 1 });
    }
  }), G;
}
function Rh(n, r, d, p, g, v, w, T) {
  const { S: V, C: M, cw: D, yb: I, glowAt: G, soft: J, tw: et, sy: at } = n, X = new Array(d * p), N = new Uint8Array(d * p), nt = new Uint8Array(d * p), ct = (j, Q, C, ut, ot) => {
    C == null || j < 0 || Q < 0 || j >= d || Q >= p || (ut >= 1 || ut > Ho(j + 5, Q + 3)) && (X[Q * d + j] = C, N[Q * d + j] = ot);
  }, wt = (j, Q, C, ut) => {
    for (let ot = Math.max(0, Math.floor(Q - C) - 1); ot <= Math.min(p - 1, Q + C + 1); ot++) for (let st = Math.max(0, Math.floor(j - C) - 1); st <= Math.min(d - 1, j + C + 1); st++) ut(st, ot, st + 0.5 - j, ot + 0.5 - Q);
  }, it = (j, Q, C) => {
    for (let ot = 0; ot < j.length - 1; ot++) {
      const st = (ot + Q) * D;
      if (C < st - et / 2) return [j[ot], j[ot], 0];
      if (C <= st + et / 2) return [j[ot], j[ot + 1], (C - st + et / 2) / et];
    }
    const ut = j[j.length - 1];
    return [ut, ut, 0];
  }, Z = V.filter((j) => !j.night).map((j) => j.sky), Y = V.filter((j) => j.night).map((j) => j.sky), H = J / v, yt = 16 * at / v;
  for (let j = 0; j < d; j++) {
    const Q = (j + 0.5) * g, C = I(Q) / v, ut = it(Z, 0.75, Q), ot = it(Y, 1.25, Q), st = G(Q);
    for (let xt = 0; xt < p; xt++) {
      const ht = Ho(j, xt), Mt = xt + 0.5 - C, qt = (H > 0.01 ? Oo(0.5 + Mt / H) : Mt > 0 ? 1 : 0) > ht;
      let ce = qt ? ut[2] > ht ? ut[1] : ut[0] : ot[2] > ht ? ot[1] : ot[0];
      (qt ? Oo(((xt + 0.5) / p - 0.45) / 0.55) * 0.7 : Oo(1 - (xt + 0.5) / (p * 0.55)) * 0.7) > Ho(j + 2, xt + 5) && (ce = qt ? Na(ce, "#ffffff", 0.18) : Na(ce, "#000000", 0.25)), qt && Mt >= 0 && Mt < yt && st.a * 1.3 * (1 - Mt / yt) > Ho(j + 6, xt + 1) && (ce = st.c), X[xt * d + j] = ce, nt[xt * d + j] = qt ? 0 : 1;
    }
  }
  const Ht = Na(M.sun, "#ffffff", 0.55), lt = Na(M.moon, "#ffffff", 0.6);
  r.stars.forEach((j) => {
    const Q = Math.floor(j.x / g), C = Math.floor(j.y / v);
    if (Q < 0 || C < 0 || Q >= d || C >= p || !nt[C * d + Q] || j.o < 0.15) return;
    const ut = j.o > 0.45 ? M.star : Na(M.star, X[C * d + Q], 0.5), ot = j.big && j.o > 0.6 ? Math.floor(j.size / g) : 0;
    ct(Q, C, ut, 1, Xl);
    for (let st = 1; st <= ot; st++) [[Q - st, C], [Q + st, C], [Q, C - st], [Q, C + st]].forEach((xt) => {
      xt[0] >= 0 && xt[1] >= 0 && xt[0] < d && xt[1] < p && nt[xt[1] * d + xt[0]] && ct(xt[0], xt[1], ut, 1, Xl);
    });
  }), r.suns.forEach((j) => {
    const Q = Math.max(1.5, j.rad / g), C = j.x / g, ut = j.y / v, ot = j.halo / g * 0.85;
    if (wt(C, ut, ot, (st, xt, ht, Mt) => {
      const qt = Math.sqrt(ht * ht + Mt * Mt);
      qt > Q && qt < ot && !nt[xt * d + st] && ct(st, xt, Ht, 0.3 * (1 - (qt - Q) / (ot - Q)), 0);
    }), T) {
      const st = Math.floor(w / 500) % 2, xt = Math.max(1, Q * 0.3);
      for (let ht = 0; ht < 8; ht++) if (ht % 2 === st) for (let Mt = Q + 1.2; Mt < Q + 1.2 + xt; Mt += 0.7) ct(Math.floor(C + Math.cos(ht * Math.PI / 4) * Mt), Math.floor(ut + Math.sin(ht * Math.PI / 4) * Mt), M.sun, 1, qp);
    }
    wt(C, ut, Q, (st, xt, ht, Mt) => {
      ht * ht + Mt * Mt <= Q * Q && ct(st, xt, Oo(((Mt / Q + 1) / 2 - 0.6) / 0.4) > Ho(st, xt) ? M.sunEdge : M.sun, 1, Np);
    });
  }), r.moons.forEach((j) => {
    const Q = Math.max(1.5, j.d * 0.37 / g), C = j.x / g, ut = j.y / v, ot = C + 0.547 * Q, st = ut - 0.503 * Q, xt = 0.82 * Q;
    wt(C, ut, Q, (ht, Mt, qt, ce) => {
      if (qt * qt + ce * ce > Q * Q) return;
      const mt = ht + 0.5 - ot, Xe = Mt + 0.5 - st;
      mt * mt + Xe * Xe > xt * xt && ct(ht, Mt, Oo((ce + Q) / (2 * Q) * 1.1 - 0.1) > Ho(ht, Mt) ? M.moon : lt, 1, Op);
    });
  }), r.clouds.forEach((j) => {
    const Q = Math.max(3, j.w / g), C = Q * 0.6665, ut = j.x / g, ot = j.y / v, st = Na(j.fill, "#000000", 0.16);
    for (let xt = Math.max(0, Math.floor(ot) - 1); xt <= Math.min(p - 1, ot + C + 1); xt++) for (let ht = Math.max(0, Math.floor(ut) - 1); ht <= Math.min(d - 1, ut + Q + 1); ht++) {
      const Mt = (ht + 0.5 - ut) / Q, qt = (xt + 0.5 - ot) / Q;
      Ed(Mt, qt) && ct(ht, xt, !Ed(Mt, qt + 1 / Q) || Oo((qt - 0.42) / 0.25) * 0.8 > Ho(ht, xt) ? st : j.fill, j.o, Ip);
    }
  }), r.fogs.forEach((j) => {
    const Q = Math.floor(j.y / v), C = Math.max(Q, Math.floor((j.y + 6 * at) / v) - 1), ut = Math.floor(j.x / g), ot = Math.floor((j.x + j.w) / g);
    for (let st = Q; st <= C; st++) for (let xt = ut; xt <= ot; xt++) {
      const ht = (xt - ut) / Math.max(1, ot - ut);
      ct(xt, st, j.c, j.a * (ht < 0.25 ? ht / 0.25 : ht > 0.75 ? (1 - ht) / 0.25 : 1), 0);
    }
  });
  const U = Math.max(2, Math.round(9 / v));
  r.drops.forEach((j) => {
    const Q = j.x / g, C = Math.floor(j.y / v);
    for (let ut = 0; ut < U; ut++) ct(Math.floor(Q - 0.208 * ut * v / g), C + ut, M.rain, j.o, Fp);
  });
  const Wt = Math.max(0, Math.round(4.4 / g / 2.6));
  return r.flakes.forEach((j) => {
    const Q = Math.floor(j.x / g), C = Math.floor(j.y / v);
    ct(Q, C, M.snow, j.o, ir);
    for (let ut = 1; ut <= Wt; ut++)
      ct(Q - ut, C, M.snow, j.o, ir), ct(Q + ut, C, M.snow, j.o, ir), ct(Q, C - ut, M.snow, j.o, ir), ct(Q, C + ut, M.snow, j.o, ir);
  }), r.bolts.forEach((j) => {
    if (g <= 3.5)
      for (let Q = Math.floor(j.y / v); Q <= (j.y + 24) / v; Q++) for (let C = Math.floor(j.x / g); C <= (j.x + 11) / g; C++)
        kh(Eh, (C + 0.5) * g - j.x, (Q + 0.5) * v - j.y) && ct(C, Q, M.sun, 1, as);
    else {
      const Q = Math.round(j.x / g), C = Math.round(j.y / v);
      Bh.forEach((ut, ot) => ut.split("").forEach((st, xt) => {
        st === "#" && ct(Q + xt, C + ot, M.sun, 1, as);
      }));
    }
  }), { col: X, ids: N };
}
function Ph(n, r) {
  const d = r.px, p = Math.max(6, Math.round(r.width / d)), g = Math.max(6, Math.round(r.height / d)), v = r.width / p, w = r.height / g, T = r.ambient ? Math.floor((r.clock || 0) / 100) * 100 : 0, V = (J) => {
    const et = Wp(J, r);
    return Rh(et, Vp(et, { clock: T, ambient: r.ambient, seed: r.seed }), p, g, v, w, T, r.ambient);
  }, M = V(n), D = r.reveal == null ? 1 : Oo(r.reveal);
  let I = M.col, G = M.ids;
  if (D < 1) {
    const J = r.prev ? V(r.prev) : null, et = D * (p + 12);
    I = new Array(p * g), G = new Uint8Array(p * g);
    for (let at = 0; at < p * g; at++) {
      const X = at % p, N = at / p | 0;
      (r.reduce ? D : Oo((et - X) / 12)) > Ho(X, N) ? (I[at] = M.col[at], G[at] = M.ids[at]) : J ? (I[at] = J.col[at], G[at] = J.ids[at]) : (I[at] = null, G[at] = 255);
    }
  }
  return Sh(I, G, p, g, { oneBit: r.oneBit, ink: r.ink || "#26221e", paper: r.paper || "#fbf9f6", snowInk: !1 });
}
function Hh(n, r, d) {
  const p = d.width, g = d.height, v = d.reveal == null ? 1 : Oo(d.reveal), w = (G, J) => {
    const et = Wp(J, d);
    Nh(G, et, Vp(et, d));
  };
  if (n.clearRect(0, 0, p, g), v >= 1) {
    w(n, r);
    return;
  }
  if (d.prev && w(n, d.prev), d.reduce) {
    n.save(), n.globalAlpha = v, w(n, r), n.restore();
    return;
  }
  const T = n.canvas, V = T.__wxOff || (T.__wxOff = document.createElement("canvas"));
  (V.width !== T.width || V.height !== T.height) && (V.width = T.width, V.height = T.height);
  const M = V.getContext("2d");
  M.setTransform(n.getTransform()), M.clearRect(0, 0, p, g), w(M, r);
  const D = v * (p + 64) - 64, I = M.createLinearGradient(D, 0, D + 64, 0);
  I.addColorStop(0, "rgba(0,0,0,1)"), I.addColorStop(1, "rgba(0,0,0,0)"), M.globalCompositeOperation = "destination-in", M.fillStyle = I, M.fillRect(0, 0, p, g), M.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(V, 0, 0), n.restore();
}
function Nh(n, r, d) {
  const { W: p, H: g, S: v, C: w, cw: T, yb: V, glowAt: M, soft: D, tw: I, sy: G } = r, J = n.getTransform().a || 1, et = (U) => {
    n.shadowColor = U ? "rgba(28,18,8,.22)" : "transparent", n.shadowBlur = U ? 4 * J : 0, n.shadowOffsetY = U ? 1.5 * J : 0;
  }, at = (U, Wt) => {
    const j = $i(U);
    return "rgba(" + j[0] + "," + j[1] + "," + j[2] + "," + Math.max(0, Math.min(1, Wt)).toFixed(3) + ")";
  }, X = (U, Wt) => {
    const j = n.createLinearGradient(0, 0, p, 0);
    j.addColorStop(0, U[0]);
    for (let Q = 0; Q < U.length - 1; Q++) {
      const C = (Q + Wt) * T, ut = (C - I / 2) / p, ot = (C + I / 2) / p;
      ut > 0 && ut < 1 && j.addColorStop(ut, U[Q]), ot > 0 && ot < 1 && j.addColorStop(ot, U[Q + 1]);
    }
    return j.addColorStop(1, U[U.length - 1]), j;
  }, N = Math.max(24, Math.ceil(p / 4)), nt = (U, Wt) => {
    n.beginPath();
    for (let j = 0; j <= N; j++) {
      const Q = p * j / N, C = U == null ? 0 : V(Q) + U;
      j ? n.lineTo(Q, C) : n.moveTo(Q, C);
    }
    for (let j = N; j >= 0; j--) {
      const Q = p * j / N;
      n.lineTo(Q, V(Q) + Wt);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = X(v.filter((U) => !U.night).map((U) => U.sky), 0.75), n.fillRect(0, 0, p, g);
  const ct = n.createLinearGradient(0, 0, p, 0);
  for (let U = 0; U <= 64; U++) {
    const Wt = M(p * U / 64);
    ct.addColorStop(U / 64, at(Wt.c, Math.min(1, Wt.a)));
  }
  n.fillStyle = ct;
  for (let U = 0; U < 8; U++)
    n.globalAlpha = 1 - U / 8, nt(U * 2 * G, (U + 1) * 2 * G);
  n.fillStyle = X(v.filter((U) => U.night).map((U) => U.sky), 1.25);
  const wt = Math.max(0.5, D), it = 6;
  n.globalAlpha = 1, nt(null, -wt);
  for (let U = 0; U < it; U++)
    n.globalAlpha = 1 - (U + 0.5) / it, nt(-wt + 2 * wt * U / it, -wt + 2 * wt * (U + 1) / it);
  n.globalAlpha = 1;
  const Z = new Path2D(Lh), Y = new Path2D(Th), H = new Path2D(Ah), yt = new Path2D(Dh);
  n.fillStyle = w.star, d.stars.forEach((U) => {
    n.globalAlpha = U.o, U.big ? (n.save(), n.translate(U.x, U.y), n.scale(U.size, U.size), n.fill(Z), n.restore()) : (n.beginPath(), n.arc(U.x, U.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const Ht = Na(w.sun, "#ffffff", 0.55);
  d.suns.forEach((U) => {
    const Wt = n.createRadialGradient(U.x, U.y, 0, U.x, U.y, U.halo);
    Wt.addColorStop(0, at(Ht, 0.42)), Wt.addColorStop(0.7, at(Ht, 0)), n.fillStyle = Wt, n.beginPath(), n.arc(U.x, U.y, U.halo, 0, Math.PI * 2), n.fill();
    const j = n.createLinearGradient(0, U.y - U.rad, 0, U.y + U.rad);
    j.addColorStop(0.6, w.sun), j.addColorStop(1, w.sunEdge), n.fillStyle = j, et(!0), n.beginPath(), n.arc(U.x, U.y, U.rad, 0, Math.PI * 2), n.fill(), et(!1);
  });
  const lt = Na(w.moon, "#ffffff", 0.6);
  d.moons.forEach((U) => {
    n.save(), n.translate(U.x - U.d / 2, U.y - U.d / 2), n.scale(U.d / 46, U.d / 46);
    const Wt = n.createLinearGradient(0, 6, 0, 40);
    Wt.addColorStop(0, lt), Wt.addColorStop(1, w.moon), n.fillStyle = Wt, et(!0), n.fill(Y), et(!1), n.restore();
  }), d.clouds.forEach((U) => {
    n.save(), n.globalAlpha = U.o, n.translate(U.x, U.y), n.scale(U.w / 46, U.h / 30.66), n.translate(-4, -9.67), n.fillStyle = U.fill, et(!0), n.fill(H), et(!1), n.restore();
  }), d.fogs.forEach((U) => {
    const Wt = n.createLinearGradient(U.x, 0, U.x + U.w, 0);
    Wt.addColorStop(0, at(U.c, 0)), Wt.addColorStop(0.25, at(U.c, U.a)), Wt.addColorStop(0.75, at(U.c, U.a)), Wt.addColorStop(1, at(U.c, 0)), n.fillStyle = Wt, n.fillRect(U.x, U.y, U.w, 6 * G);
  }), n.fillStyle = w.rain, d.drops.forEach((U) => {
    n.save(), n.globalAlpha = U.o, n.translate(U.x, U.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = w.snow, d.flakes.forEach((U) => {
    n.globalAlpha = U.o, n.beginPath(), n.arc(U.x, U.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = w.sun, d.bolts.forEach((U) => {
    n.save(), n.globalAlpha = U.o, n.translate(U.x, U.y), n.fill(yt), n.restore();
  }), n.restore();
}
const Oh = (n) => n === "sunny" ? "clear" : n === "clear-night" ? "night" : n === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(n) ? "rain" : ["snowy", "snowy-rainy"].includes(n) ? "snow" : "cloudy", er = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, Fi = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, _l = (n, r) => '<path class="' + r + '" d="' + n + '"/>', Ih = (n, r) => ' style="animation-delay:-' + Math.round(n * 137 % r) + 'ms"', Ra = (n, r, d, p) => {
  const g = d * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (p < 1 ? ' opacity="' + p + '"' : "") + Ih(n, 2400) + ' d="M' + n + " " + (r - d) + "L" + (n + g) + " " + (r - g) + "L" + (n + d) + " " + r + "L" + (n + g) + " " + (r + g) + "L" + n + " " + (r + d) + "L" + (n - g) + " " + (r + g) + "L" + (n - d) + " " + r + "L" + (n - g) + " " + (r - g) + 'Z"/>';
}, Bd = ([n, r, d], p) => '<path class="wbMoonPath" d="' + n + '" fill="url(#' + p + ')"/><defs><linearGradient id="' + p + '" x1="0" y1="' + r + '" x2="0" y2="' + d + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', Fh = (n, r) => r ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', qh = (n) => (n ? ["29.35", "43.04", "56.74"].map((r, d) => '<g class="wbDrop" style="animation-delay:-' + d * 317 + 'ms"><rect class="wbAccent" x="' + r + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + r + ' 60.65)"/></g>') : [19, 26, 33].map((r, d) => '<g class="wbDrop" style="animation-delay:-' + d * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + r + ' 38)"/></g>')).join(""), Wh = (n) => (n ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([r, d], p) => '<circle class="wbFlake" style="animation-delay:-' + p * 640 + 'ms" cx="' + r + '" cy="' + d + '" r="' + (n ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function Vh(n, r, d, p) {
  const g = (v) => '<g filter="url(#' + p + '-sh)">' + v + "</g>";
  return n === "clear" ? r ? g(Bd(d ? Fi.l : Fi.s, p)) + (d ? Ra(70, 20, 5.83, 1) + Ra(78.33, 41.67, 3.75, 0.8) + Ra(60, 71.67, 3.33, 0.6) : Ra(42, 12, 3.5, 1) + Ra(47, 25, 2.25, 0.8) + Ra(36, 43, 2, 0.6)) : g(Fh(p, d)) : n === "partly" ? g(r ? Bd(d ? Fi.lp : Fi.sp, p) : d ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + g(_l(d ? er.lp : er.sp, r ? "wbCloudLight" : "wbBright")) + (r ? d ? Ra(73.33, 16.67, 4.17, 0.9) : Ra(44, 10, 2.5, 0.9) : "") : n === "cloudy" ? g(_l(d ? er.lc : er.s, r ? "wbCloudLight" : "wbBright")) + (r ? d ? Ra(15, 15, 3.75, 0.8) + Ra(76.67, 13.33, 2.92, 0.6) : Ra(9, 9, 2.25, 0.8) + Ra(46, 8, 1.75, 0.6) : "") : g(_l(d ? er.lr : er.s, "wbCloudLight")) + (n === "rain" ? qh(d) : Wh(d));
}
const jh = (n, r) => '<defs><filter id="' + n + '-sh" x="-25%" y="-25%" width="150%" height="160%"><feDropShadow dx="0" dy="' + (r ? 1.6 : 1) + '" stdDeviation="' + (r ? 1.8 : 1.1) + '" flood-color="#1c1208" flood-opacity=".22"/></filter></defs>';
function zh(n, r, d, p) {
  let g = Oh(n);
  const v = g === "night" || !!d;
  g === "night" && (g = "clear");
  const w = r ? 90 : 54;
  return { k: g, night: v, svg: '<svg viewBox="0 0 ' + w + " " + w + '">' + jh(p, r) + Vh(g, v, r, p) + "</svg>" };
}
const Gh = [
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
], qi = (n, r) => (Gh[r % 8 * 8 + n % 8] + 0.5) / 64, Za = (n) => [parseInt(n.slice(1, 3), 16), parseInt(n.slice(3, 5), 16), parseInt(n.slice(5, 7), 16)], Ke = (n, r, d) => [Math.round(n[0] + (r[0] - n[0]) * d), Math.round(n[1] + (r[1] - n[1]) * d), Math.round(n[2] + (r[2] - n[2]) * d)], qr = (n) => n < 0 ? 0 : n > 1 ? 1 : n, Rd = (n, r) => {
  let d = n * 374761393 + r * 668265263 ^ 1540483477;
  return d = Math.imul(d ^ d >>> 13, 1274126177), ((d ^ d >>> 16) >>> 0) / 4294967296;
}, En = [255, 255, 255], aa = Za("#26221e"), Pd = Za("#0288d1"), Uh = Za("#01579b"), Cl = Za(Oa.cloudDay), Al = Za(Oa.cloudNight), Wi = Za(Oa.dusk), Tl = Za(Oa.sunEdge), Yh = Za(Oa.sun), Zh = 10, Hd = 0.3, Io = 56, jp = 21;
function Kh(n) {
  const r = Array.from({ length: jp }, () => new Array(Io).fill(void 0)), d = (w, T, V) => {
    r[T][w] = V;
  }, p = Ke(Wi, aa, 0.35), g = Ke(aa, En, 0.22);
  for (let w = 0; w <= 6; w++) {
    const T = w < 2 ? Io - 2 : Io - 1;
    for (let V = 6 - w; V <= T; V++) d(V, w, w < 2 ? p : w === 6 ? g : aa);
  }
  const v = [Wi, Tl, Al, Za(Oa.skyRainDay), Ke(Wi, aa, 0.2), Ke(n, aa, 0.35)];
  [2, 3, 2, 3, 3].forEach((w, T) => {
    const V = 9 + T * 6;
    for (let M = 0; M < w; M++) {
      const D = v[(T * 2 + M * 3) % v.length];
      for (let I = V; I < V + 5; I++)
        d(I, 7 + M * 2, Ke(D, aa, 0.12)), d(I, 8 + M * 2, M === w - 1 ? Ke(D, En, 0.3) : D);
      d(V + 5, 7 + M * 2, aa), d(V + 5, 8 + M * 2, aa);
    }
  });
  for (let w = 7; w <= 12; w++) d(5, w, aa);
  d(5, 13, Tl);
  for (let w = 7; w <= 14; w++) for (let T = 42; T <= 51; T++) d(T, w, T === 51 ? Al : Cl);
  for (let w = 43; w <= 50; w += 2)
    d(w, 12, aa), d(w, 9, Ke(aa, Cl, 0.4));
  for (let w = 40; w <= 53; w++) d(w, 14, w === 40 || w === 53 ? Al : Cl);
  for (let w = 15; w <= 18; w++) for (let T = 46; T <= 49; T++) d(T, w, w === 18 ? aa : w === 16 ? Tl : Wi);
  for (let w = 15; w <= 19; w++) d(44, w, aa);
  return d(44, 20, Yh), r;
}
function Xh(n, r, d, p) {
  const g = Math.max(1, Math.round(n)), v = Math.max(1, Math.round(r)), w = new Uint8ClampedArray(g * v * 4), T = Za(p.skyClearDay), V = Za(p.skyFogDay), M = Kh(T), D = Math.round(v * 0.55), I = qr(1 - Math.log(d / Hd) / Math.log(Zh / Hd)), G = Ke(T, V, I), J = (N) => qr((N - 0.1) / 0.9), et = qr((1 - Math.exp(-2 / d) - 0.2) / 0.8), at = Math.round(g / 2 - Io / 2), X = D + 3;
  for (let N = 0; N < v; N++) {
    const nt = X - 1 - N, ct = N - X;
    for (let wt = 0; wt < g; wt++) {
      const it = wt - at;
      let Z, Y;
      const H = nt >= 0 && nt < jp && it >= 0 && it < Io ? M[nt][it] : void 0;
      if (H)
        Z = H, Y = et;
      else if (nt >= 0 && nt <= 1 && it >= 4 - nt && it <= 5 - nt)
        Z = Ke(En, Pd, 0.15), Y = et;
      else if (N < D) {
        const lt = qr(((N + 0.5) / D - 0.15) / 0.85) * 3, U = Math.min(3, Math.floor(lt + qi(wt + 2, N + 5)));
        Z = Ke(G, En, U * 0.1), Y = I * 0.95;
      } else {
        const lt = (N - D + 0.5) / (v - D), U = Math.min(1.5, 6e-3 / (lt * lt)), Wt = qr(lt * 1.4) * 3, j = Math.min(3, Math.floor(Wt + qi(wt + 1, N + 6)));
        Z = Ke(Pd, Uh, j / 3);
        const Q = 1 + Math.round(lt * 7), C = Math.floor(wt / (Q * 3)), ut = 0.06 + 0.16 * lt, ot = wt % (Q * 3) < Q;
        ot && Rd(C, N) < ut ? Z = Ke(Z, En, 0.18 + 0.1 * (1 - lt)) : ot && lt > 0.5 && Rd(C, N - 1) < ut && (Z = Ke(Z, aa, 0.12)), Y = J(1 - Math.exp(-U / d)), ct === 0 && it >= 3 && it <= 8 ? (Z = Ke(Z, En, it < 6 ? 0.8 : 0.45), Y = et) : ct >= 0 && ct <= 2 && it >= Io && it < Io + 40 ? ((1 - (it - Io) / 40) * (ct === 1 ? 0.9 : 0.5) > qi(wt, N + 3) && (Z = Ke(Z, En, 0.5)), Y = et) : ct === 0 && it >= 6 && it < Io && (Z = Ke(Z, aa, it % 2 === 0 ? 0.35 : 0.2), Y = et);
      }
      const yt = Y > qi(wt, N) ? V : Z, Ht = (N * g + wt) * 4;
      w[Ht] = yt[0], w[Ht + 1] = yt[1], w[Ht + 2] = yt[2], w[Ht + 3] = 255;
    }
  }
  return { data: w, w: g, h: v };
}
const $h = {
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
}, Jh = 1.6;
function Qh(n, r) {
  const d = n ? $h[String(n).toUpperCase()] : void 0;
  if (!d || !(r > 0)) return;
  const p = (v) => Math.abs(Math.log(v[2] / r)), g = d.reduce((v, w) => p(w) < p(v) ? w : v);
  return p(g) <= Math.log(Jh) ? { from: g[0], to: g[1], km: g[2] } : void 0;
}
const tm = (n, r) => r === "mi" ? n * 1.609344 : r === "m" ? n / 1e3 : r === "ft" ? n * 3048e-7 : r === "yd" ? n * 9144e-7 : n, em = (n) => n < 1 ? "very_poor" : n < 4 ? "poor" : n < 10 ? "moderate" : n < 20 ? "good" : n < 40 ? "very_good" : "excellent", Te = {
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
}, Le = { standard: "cubic-bezier(.2,0,0,1)", land: "cubic-bezier(.34,1.46,.64,1)", spring: "cubic-bezier(.2,1.2,.4,1)", soft: "cubic-bezier(.4,0,.2,1)", exit: "cubic-bezier(.4,0,1,1)" }, Ue = () => {
  var n;
  return !!((n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches);
};
function am() {
  const { pivot: n, slider: r, iconbtn: d, warp: p, outline: g } = Te;
  return [
    ["--pv-persp", n.persp + "px"],
    ["--pv-shine", n.shine / 100],
    ["--pv-size", n.size + "%"],
    ["--pv-ret", n.ret + "ms"],
    ["--pv-ease", Le[n.ease]],
    ["--ab-blur", r.glow + "px"],
    ["--ab-spread", r.spread + "px"],
    ["--ab-str", r.strength + "%"],
    ["--ab-blur2", r.glow + r.hold + "px"],
    ["--ab-spread2", r.spread + r.hold / 4 + "px"],
    ["--ab-str2", r.holdStrength + "%"],
    ["--ab-grow", "scaleY(" + (1 + (r.grow / 100 - 1) * 3) + ")"],
    ["--ab-in", r.ein + "ms"],
    ["--ab-out", r.eout + "ms"],
    ["--ab-ease", Le[r.ease]],
    ["--ih-s", d.scale / 100],
    ["--ih-p", d.press / 100],
    ["--ih-dur", d.dur + "ms"],
    ["--ih-ease", Le[d.ease]],
    ["--ih-tint", "8%"],
    ["--wc-dur", p.cdur + "ms"],
    ["--wc-delay", p.cdelay + "ms"],
    ["--wc-ease", Le[p.ease]],
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
const Ll = ":is(button.primary,button.pill,.hcBtn,.wbRangeBtn,.activityRow.tap,.hcRow,a.hcRow)", om = "#homeView :is(.tfAreaPanel,.tfRoomTile.tfBoardItem)", nm = 300, Ji = (n) => Math.min(1, nm / Math.max(1, n)), Dl = (n, r) => 1 + (r / 100 - 1) * Ji(n.offsetWidth);
function rm(n, r) {
  r.style.cssText += ";" + am();
  let d = null;
  const p = (D) => {
    D.classList.remove("mvMoving", "mvLit"), D.style.setProperty("--rx", "0deg"), D.style.setProperty("--ry", "0deg"), D.style.setProperty("--sc", 1), D._down = !1;
  };
  n.addEventListener("pointermove", (D) => {
    var N, nt;
    const I = D.pointerType === "touch" || Ue() ? null : (nt = (N = D.target).closest) == null ? void 0 : nt.call(N, Ll);
    if (d && d !== I && p(d), d = I, !I || I.disabled) return;
    const G = Te.pivot, J = I.getBoundingClientRect(), et = (D.clientX - J.left) / J.width, at = (D.clientY - J.top) / J.height, X = 1;
    I.classList.add("mvPv", "mvMoving", "mvLit"), I.style.setProperty("--pv-persp", G.persp / Ji(Math.max(I.offsetWidth, I.offsetHeight)) + "px"), I.style.setProperty("--ry", (X * (et - 0.5) * 2 * G.tilt * Ji(I.offsetWidth)).toFixed(3) + "deg"), I.style.setProperty("--rx", (X * -(at - 0.5) * 2 * G.tilt * Ji(I.offsetHeight)).toFixed(3) + "deg"), I.style.setProperty("--mx", (et * 100).toFixed(1) + "%"), I.style.setProperty("--my", (at * 100).toFixed(1) + "%"), I._down || I.style.setProperty("--sc", Dl(I, G.lift));
  }, { passive: !0 }), n.addEventListener("pointerout", (D) => {
    d && !d.contains(D.relatedTarget) && (p(d), d = null);
  }), n.addEventListener("pointerdown", (D) => {
    var G, J;
    const I = Ue() ? null : (J = (G = D.target).closest) == null ? void 0 : J.call(G, Ll);
    I && (I._down = !0, I.classList.add("mvPv"), I.classList.remove("mvMoving"), I.style.setProperty("--sc", Dl(I, Te.pivot.press)));
  }), n.addEventListener("pointerup", (D) => {
    var G, J;
    const I = (J = (G = D.target).closest) == null ? void 0 : J.call(G, Ll);
    I && (I._down = !1, I.style.setProperty("--sc", D.pointerType === "touch" ? 1 : Dl(I, Te.pivot.lift)));
  });
  let g = null;
  n.addEventListener("pointerover", (D) => {
    var I, G, J;
    D.pointerType !== "touch" && ((J = (G = (I = D.target).closest) == null ? void 0 : G.call(I, ".tfBar")) == null || J.classList.add("mvHover"));
  }), n.addEventListener("pointerout", (D) => {
    var G, J;
    const I = (J = (G = D.target).closest) == null ? void 0 : J.call(G, ".tfBar");
    I && !I.contains(D.relatedTarget) && I !== g && I.classList.remove("mvHover");
  }), n.addEventListener("pointerdown", (D) => {
    var G, J;
    const I = (J = (G = D.target).closest) == null ? void 0 : J.call(G, ".tfBar");
    I && (g = I, I.classList.add("mvHold"));
  });
  const v = (D) => {
    if (!g) return;
    g.classList.remove("mvHold");
    const I = g.getBoundingClientRect();
    (D.pointerType === "touch" || D.clientX < I.left || D.clientX > I.right || D.clientY < I.top || D.clientY > I.bottom) && g.classList.remove("mvHover"), g = null;
  };
  window.addEventListener("pointerup", v, !0), window.addEventListener("pointercancel", v, !0), n.addEventListener("focusin", (D) => {
    var I, G;
    (G = (I = D.target).matches) != null && G.call(I, ".tfBar:focus-visible") && D.target.classList.add("mvHover");
  }), n.addEventListener("focusout", (D) => {
    var I;
    (I = D.target.classList) == null || I.remove("mvHover", "mvHold");
  }), n.addEventListener("keydown", (D) => {
    var G, J;
    const I = (J = (G = D.target).closest) == null ? void 0 : J.call(G, ".tfBar");
    !I || !["ArrowRight", "ArrowUp", "ArrowLeft", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(D.key) || (I.classList.add("mvHold"), clearTimeout(I._k), I._k = setTimeout(() => I.classList.remove("mvHold"), 350));
  }), n.addEventListener("click", (D) => {
    var G, J;
    const I = (J = (G = D.target).closest) == null ? void 0 : J.call(G, "button.tfIcon[data-act]");
    I && im(I);
  });
  let w = null;
  const T = (D, I, G) => {
    D.querySelector(":scope>.mvEdge") || D.insertAdjacentHTML("afterbegin", '<span class="mvEdgeFill" aria-hidden="true"></span><span class="mvEdge" aria-hidden="true"><i></i></span>');
    const J = D.getBoundingClientRect(), et = J.width / 2, at = J.height / 2, X = I.clientX - J.left - et, N = I.clientY - J.top - at, nt = X ? et / Math.abs(X) : 1 / 0, ct = N ? at / Math.abs(N) : 1 / 0, wt = Math.min(Math.max(1 / Math.min(nt, ct), 0), 1);
    let it = Math.atan2(N, X) * 180 / Math.PI + 90;
    it < 0 && (it += 360);
    const Z = G ? 100 : wt * 100;
    D.style.setProperty("--edge-proximity", Z.toFixed(3)), D.style.setProperty("--cursor-angle", it.toFixed(3) + "deg"), D.classList.toggle("mvLitEdge", G || Z >= Te.outline.lightAt);
  }, V = (D) => {
    D.classList.remove("mvLitEdge"), D.style.setProperty("--edge-proximity", "0"), D._down = !1;
  }, M = (D) => {
    var G;
    const I = (G = D.closest) == null ? void 0 : G.call(D, om);
    return I && !r.classList.contains("tfEditing") ? I : null;
  };
  n.addEventListener("pointermove", (D) => {
    if (D.pointerType === "touch") return;
    const I = M(D.target);
    w && w !== I && V(w), w = I, I && !I._down && T(I, D, !1);
  }, { passive: !0 }), n.addEventListener("pointerout", (D) => {
    w && !w.contains(D.relatedTarget) && (V(w), w = null);
  }), n.addEventListener("pointerdown", (D) => {
    const I = M(D.target);
    I && Te.outline.press && (I._down = !0, T(I, D, !0));
  }), n.addEventListener("pointerup", (D) => {
    const I = M(D.target);
    I && (I._down = !1, D.pointerType === "touch" ? V(I) : T(I, D, !1));
  }), new MutationObserver((D) => {
    var I;
    for (const G of D) {
      const J = G.target;
      if (G.type === "attributes") {
        (I = J.classList) != null && I.contains("tfMoreBackdrop") && !J.hidden && G.oldValue !== null && Nd(J);
        continue;
      }
      G.addedNodes.forEach((et) => {
        et.nodeType === 1 && et.classList.contains("tfMoreBackdrop") && !et.hidden && Nd(et);
      });
    }
  }).observe(r, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["hidden"], attributeOldValue: !0 });
}
const zp = (n) => n.closest("[data-k],.tfMore,.tfMorePair") || n.getRootNode();
function Gp(n, r) {
  const d = [];
  for (let p = n; p && p !== r && p.parentNode; p = p.parentNode) d.unshift([...p.parentNode.children].indexOf(p));
  return d;
}
const Up = (n, r) => r.reduce((d, p) => d == null ? void 0 : d.children[p], n);
function im(n) {
  var J;
  if (Ue() || n._warp) return;
  const r = Te.warp, d = r.amount / 100, p = n.firstElementChild;
  if (!p) return;
  const g = { squash: { scale: 1 + 0.35 * d + " " + (1 - 0.55 * d) }, pinch: { scale: String(1 - 0.5 * d) }, twist: { rotate: 140 * d + "deg", scale: String(1 - 0.35 * d) }, flip: { rotate: "y 90deg" } }[r.style], v = "blur(" + 2 * d + "px)", w = n.getRootNode(), T = zp(n), V = (J = T.dataset) == null ? void 0 : J.k, M = Gp(n, T), D = n.getAttribute("aria-pressed") + "|" + n.dataset.act;
  n._warp = 1;
  const I = p.animate([{ scale: "1", rotate: "none", filter: "blur(0px)" }, { ...g, filter: v }], { duration: r.win, easing: Le.exit, fill: "forwards" }), G = performance.now();
  I.finished.then(() => {
    const et = () => {
      var wt, it;
      const at = V ? T.isConnected ? T : (wt = w.querySelector) == null ? void 0 : wt.call(w, '[data-k="' + CSS.escape(V) + '"]') : T, X = at && Up(at, M);
      if (X === n && n.getAttribute("aria-pressed") + "|" + n.dataset.act === D && performance.now() - G < 420) {
        requestAnimationFrame(et);
        return;
      }
      (((it = X == null ? void 0 : X.matches) != null && it.call(X, "button.tfIcon") ? X : n).firstElementChild || p).animate([{ ...g, filter: v }, { scale: "1", rotate: "none", filter: "blur(0px)" }], { duration: r.wout, easing: Le[r.ease] }), I.cancel(), n._warp = 0;
    };
    et();
  });
}
const Yp = (n) => {
  let r = "M" + n[0][0].toFixed(1) + " " + n[0][1].toFixed(1);
  for (let d = 0; d < n.length - 1; d++) {
    const p = n[d - 1] || n[d], g = n[d], v = n[d + 1], w = n[d + 2] || v, T = [g[0] + (v[0] - p[0]) / 6, g[1] + (v[1] - p[1]) / 6], V = [v[0] - (w[0] - g[0]) / 6, v[1] - (w[1] - g[1]) / 6];
    r += "C" + T.map((M) => M.toFixed(1)).join(" ") + " " + V.map((M) => M.toFixed(1)).join(" ") + " " + v.map((M) => M.toFixed(1)).join(" ");
  }
  return r;
}, Zp = (n, r, d, p = "mvGrid") => [0, 1, 2].map((g) => {
  const v = (r + (d - r) * g / 2).toFixed(1);
  return '<line class="' + p + '" x1="0" x2="' + n + '" y1="' + v + '" y2="' + v + '"/>';
}).join("");
function Kp(n, r = n.querySelector(".mvLine"), d = n.querySelectorAll(".mvArea,.mvDot")) {
  if (Ue() || !(r != null && r.getTotalLength)) return;
  const p = Te.graphs, g = r.getTotalLength();
  r.animate([{ strokeDasharray: g, strokeDashoffset: g }, { strokeDasharray: g, strokeDashoffset: 0 }], { duration: p.draw, easing: Le.standard }), [...d].forEach((v, w) => v.animate([{ opacity: 0 }, { opacity: 1 }], { duration: p.draw * 0.6, delay: p.draw * 0.3 + w * 12, easing: Le.standard, fill: "backwards" }));
}
function Qi(n, r, d, p, g) {
  if (n.getAnimations().forEach((D) => D.cancel()), n.style.left = p + "px", n.style.width = g + "px", Ue() || r === p && d === g) return;
  const v = Te.tabs, w = v.stretch / 100, T = (D, I) => ({ left: D + "px", width: I + "px" }), M = p > r ? T(r + (p - r) * (0.15 * (1 - w)), p + g - (r + (p - r) * (0.15 * (1 - w)))) : T(p, r + d - p - (r - p) * (0.15 * (1 - w)));
  n.animate([T(r, d), { offset: 0.5, ...M }, T(p, g)], { duration: v.dur, easing: Le.standard });
}
function sm(n) {
  const r = ":is(.themeChoice,.wbSegments,.tfHeightTabs,.hcSeg,.tfSeg)", d = (g) => g.querySelector(':scope>[aria-pressed="true"],:scope>[aria-checked="true"],:scope>.active'), p = (g, v) => v ? [...g.children].indexOf(v) : -1;
  n.addEventListener("click", (g) => {
    var nt, ct, wt;
    const v = (ct = (nt = g.target).closest) == null ? void 0 : ct.call(nt, r + ">button"), w = v == null ? void 0 : v.parentElement;
    if (!w || Ue() || v.disabled) return;
    const T = d(w);
    if (!T || T === v) return;
    const V = p(w, T), M = w.getBoundingClientRect(), D = T.getBoundingClientRect(), I = getComputedStyle(T).borderRadius, G = w.getRootNode(), J = zp(w), et = (wt = J.dataset) == null ? void 0 : wt.k, at = Gp(w, J), X = performance.now(), N = () => {
      var U, Wt, j;
      const it = et && !J.isConnected ? (U = G.querySelector) == null ? void 0 : U.call(G, '[data-k="' + CSS.escape(et) + '"]') : J, Z = it && Up(it, at), Y = (Wt = Z == null ? void 0 : Z.matches) != null && Wt.call(Z, r) ? d(Z) : null;
      if (!Y || p(Z, Y) === V) {
        performance.now() - X < 700 && requestAnimationFrame(N);
        return;
      }
      const H = Z.getBoundingClientRect(), yt = Y.getBoundingClientRect(), Ht = getComputedStyle(Y);
      (j = Z.querySelector(":scope>.mvSegInd")) == null || j.remove();
      const lt = document.createElement("span");
      lt.className = "mvSegInd", lt.style.cssText = "top:" + (yt.top - H.top - Z.clientTop) + "px;height:" + yt.height + "px;border-radius:" + I + ";background:" + Ht.backgroundColor + ";box-shadow:" + Ht.boxShadow, getComputedStyle(Z).position === "static" && (Z.style.position = "relative"), Z.prepend(lt), Z.classList.add("mvSegMoving"), Qi(lt, D.left - M.left - Z.clientLeft, D.width, yt.left - H.left - Z.clientLeft, yt.width), clearTimeout(Z._seg), Z._seg = setTimeout(() => {
        lt.remove(), Z.classList.remove("mvSegMoving");
      }, Te.tabs.dur + 20);
    };
    requestAnimationFrame(N);
  }, !0);
}
const Xp = (n) => getComputedStyle(n).placeItems.startsWith("end");
function Nd(n) {
  const r = n.firstElementChild;
  if (Ue() || !r || r.classList.contains("still")) return;
  const d = Te.dialog;
  n.animate([{ opacity: 0, backdropFilter: "blur(0px)" }, { opacity: 1, backdropFilter: "blur(" + d.blur + "px)" }], { duration: d.open, easing: Le.standard }), r.style.animation = "none", r.animate(Xp(n) ? [{ transform: "translateY(100%)" }, { transform: "none" }] : [{ opacity: 0, transform: "scale(" + d.from / 100 + ")" }, { opacity: 1, transform: "none" }], { duration: d.open, easing: Le[d.ease] }), [...(r.classList.contains("tfMorePair") && r.querySelector(".tfMore") || r).children].forEach((g, v) => g.animate([{ opacity: 0 }, { opacity: 1 }], { duration: d.open * 0.6, delay: d.open * 0.35 + v * 40, easing: Le.standard, fill: "backwards" }));
}
function lm(n, r) {
  const d = n == null ? void 0 : n.firstElementChild;
  if (Ue() || !d || n.hidden || n._closing) {
    r();
    return;
  }
  const p = Te.dialog;
  n._closing = !0, n.style.pointerEvents = "none", n.animate([{ opacity: 1, backdropFilter: "blur(" + p.blur + "px)" }, { opacity: 0, backdropFilter: "blur(0px)" }], { duration: p.close, easing: Le.exit, fill: "forwards" });
  const g = d.animate(Xp(n) ? [{ transform: "none" }, { transform: "translateY(100%)" }] : [{ opacity: 1, transform: "none" }, { opacity: 0, transform: "scale(" + p.from / 100 + ")" }], { duration: p.close, easing: Le.exit, fill: "forwards" });
  let v = !1;
  const w = () => {
    v || (v = !0, n._closing = !1, n.style.pointerEvents = "", n.getAnimations().forEach((T) => T.cancel()), d.getAnimations().forEach((T) => T.cancel()), r());
  };
  g.finished.then(w, w), setTimeout(w, p.close + 80);
}
const cm = '<span class="mvTick" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M20 6L9 17L4 12" pathLength="1"/></svg></span>';
function dm(n, r) {
  n.replaceChildren(), n.insertAdjacentHTML("afterbegin", cm), n.appendChild(Object.assign(document.createElement("span"), { className: "mvToastText", textContent: r }));
}
function pm(n) {
  if (Ue()) return;
  const r = Te.confirm;
  n.animate([{ opacity: 0, translate: "0 18px" }, { opacity: 1, translate: "0 0" }], { duration: r.dur, easing: Le.spring });
  const d = n.querySelector(".mvTick path");
  d && r.draw && d.animate([{ strokeDasharray: "1", strokeDashoffset: "1" }, { strokeDasharray: "1", strokeDashoffset: "0" }], { duration: 420, delay: r.dur * 0.5, easing: Le.standard, fill: "backwards" });
}
const El = (n, r, d, p, g = 1) => (n + r * d * g) * Math.pow(p, g);
function Bl(n) {
  const r = Te.drag.squash / 100;
  !n || Ue() || !r || n.animate([{ transform: "scale(" + (1 + r * 0.4) + "," + (1 - r) + ")" }, { transform: "scale(" + (1 - r * 0.1) + "," + (1 + r * 0.24) + ")" }, { transform: "none" }], { duration: 340, easing: "ease-out" });
}
function Od(n) {
  if (!n || Ue()) return;
  const r = Te.expand;
  [...n.children].slice(1).forEach((d, p) => d.animate([{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "none" }], { duration: 260, delay: r.delay + p * r.stagger, easing: "cubic-bezier(.2,0,0,1)", fill: "backwards" }));
}
const Ie = 6e4, oe = 36e5, ha = 864e5, Gr = 1440, um = 6, fm = 10 * Ie, Id = 3, hm = 3, Vi = { day: [6, 22], waking: [7, 23], all: [0, 24] }, mm = [[-5, [91, 141, 239]], [5, [79, 195, 230]], [12, [95, 211, 160]], [18, [255, 211, 77]], [24, [255, 159, 67]], [30, [255, 91, 79]]], gm = "M6.5 18.5h11a4 4 0 0 0 .4-7.98 5.5 5.5 0 0 0-10.6-1.1A4.5 4.5 0 0 0 6.5 18.5Z", Fd = (n, r, d, p) => '<circle cx="' + n + '" cy="' + r + '" r="' + d + '"/><path d="' + [0, 45, 90, 135, 180, 225, 270, 315].map((g) => {
  const v = Math.cos(g * Math.PI / 180), w = Math.sin(g * Math.PI / 180), T = d + 2, V = d + 2 + p;
  return "M" + (n + v * T).toFixed(2) + " " + (r + w * T).toFixed(2) + "L" + (n + v * V).toFixed(2) + " " + (r + w * V).toFixed(2);
}).join("") + '"/>', Eo = (n) => '<path d="' + gm + '"' + (n ? ' transform="' + n + '"' : "") + "/>", Bo = (n) => '<path d="' + n + '"/>', qd = '<path d="M19.5 14.5A7.5 7.5 0 1 1 9.5 4.5a6 6 0 0 0 10 10Z"/>';
function bm(n, r) {
  const d = "translate(0,-3)";
  switch (n) {
    case "sunny":
      return r ? qd : Fd(12, 12, 4, 2.5);
    case "clear-night":
      return qd;
    case "partlycloudy":
      return (r ? '<path d="M11.5 9.5A4.5 4.5 0 1 1 6 4a3.6 3.6 0 0 0 5.5 5.5Z"/>' : Fd(7.5, 7.5, 2.6, 1.4)) + Eo("translate(3.6,3) scale(.85)");
    case "cloudy":
      return Eo();
    case "fog":
      return Bo("M4 8.5h16M3 12.5h18M5 16.5h14");
    case "rainy":
      return Eo(d) + Bo("M8.5 18.5 7.5 21M12.5 18.5l-1 2.5M16.5 18.5l-1 2.5");
    case "pouring":
      return Eo(d) + Bo("M7.5 18.5 6 22M11 18.5 9.5 22M14.5 18.5 13 22M18 18.5 16.5 22");
    case "snowy":
      return Eo(d) + Bo("M8 20h.01M12 21.5h.01M16 20h.01");
    case "snowy-rainy":
      return Eo(d) + Bo("M8.5 18.5 7.5 21M12 21h.01M16.5 18.5l-1 2.5");
    case "hail":
      return Eo(d) + '<circle cx="8" cy="20.5" r="1"/><circle cx="12" cy="21.5" r="1"/><circle cx="16" cy="20.5" r="1"/>';
    case "lightning":
      return Eo(d) + Bo("M12.5 16 10.5 19.5h3l-2 3");
    case "lightning-rainy":
      return Eo(d) + Bo("M12.5 16 10.5 19.5h3l-2 3M7.5 18.5l-1 2.5M17.5 18.5l-1 2.5");
    case "windy":
    case "windy-variant":
      return Bo("M3 8.5h10.5a2.5 2.5 0 1 0-2.5-2.5M3 12h15.5a2.5 2.5 0 1 1-2.5 2.5M3 15.5h8");
    default:
      return '<circle cx="12" cy="12" r="8"/>' + Bo("M12 8v5M12 16h.01");
  }
}
const Rl = (n, r) => '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + bm(n, r) + "</svg>", wm = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), vm = 30 * Ie, ym = 7, xm = 3, Wd = 1, Mm = Ie, km = 15 * Ie, Sm = 5, ne = {
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
}, $l = 7, Po = 256, _m = 3, Vd = 700, Cm = 1800, $p = 5 * Ie;
let ji = null, jd = 0, Wr = null;
function Am() {
  return ji && Date.now() - jd < $p ? Promise.resolve(ji) : Wr || (Wr = fetch("https://api.rainviewer.com/public/weather-maps.json").then((n) => n.ok ? n.json() : Promise.reject(new Error(String(n.status)))).then((n) => {
    var p, g;
    const r = (((p = n.radar) == null ? void 0 : p.past) || []).slice(-6), d = (((g = n.radar) == null ? void 0 : g.nowcast) || []).slice(0, _m);
    return ji = { host: n.host, frames: [...r.map((v) => ({ ...v, past: !0 })), ...d] }, jd = Date.now(), ji;
  }).finally(() => {
    Wr = null;
  }), Wr);
}
function Tm(n, r, d, p) {
  const g = $l, v = 2 ** g, w = n * Math.PI / 180, T = (r + 180) / 360 * v * Po, V = (1 - Math.log(Math.tan(w) + 1 / Math.cos(w)) / Math.PI) / 2 * v * Po, M = T - d / 2, D = V - p / 2, I = [];
  for (let G = Math.floor(M / Po); G <= Math.floor((M + d - 1) / Po); G++) for (let J = Math.floor(D / Po); J <= Math.floor((D + p - 1) / Po); J++)
    J < 0 || J >= v || I.push({ x: (G % v + v) % v, y: J, left: G * Po - M, top: J * Po - D });
  return I;
}
const Lm = {
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
}, Dm = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], Em = Object.keys(gt.phases), Bm = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)", extreme: "var(--purple-color, #926bc7)" }, zd = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, Jp = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], zi = 100, Gd = "µg/m³", Rm = "weather_alerts.air_quality_pollen", os = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], Pm = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, Hm = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], Nm = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, Om = { daily: 1, hourly: 2 }, vt = (n) => String(n ?? "").replace(/[&<>"']/g, (r) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[r]), Ze = (n, r) => n.replace(/\{(\w+)\}/g, (d, p) => r[p] ?? ""), No = (n) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + n + '"/></svg>', Ud = /* @__PURE__ */ new Map();
function Qp(n) {
  let r = Ud.get(n);
  if (r === void 0) {
    const d = "http://www.w3.org/2000/svg", p = document.createElementNS(d, "svg"), g = document.createElementNS(d, "path");
    p.setAttribute("viewBox", "0 0 24 24"), p.style.cssText = "position:absolute;width:24px;height:24px;visibility:hidden;pointer-events:none", g.setAttribute("d", n), p.append(g), document.body.append(p);
    const v = g.getBBox();
    p.remove();
    const w = Math.max(v.width, v.height), T = w ? 26 * 24 / w : 0, V = T / 24;
    r = w ? "width:" + T.toFixed(2) + "px;height:" + T.toFixed(2) + "px;translate:" + ((12 - v.x - v.width / 2) * V).toFixed(2) + "px " + ((12 - v.y - v.height / 2) * V).toFixed(2) + "px" : "", Ud.set(n, r);
  }
  return r ? '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true" style="' + r + '"><path d="' + n + '"/></svg>' : No(n);
}
const Im = () => {
  var n;
  return !!((n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches);
}, ue = (n) => n != null && n !== "" && Number.isFinite(Number(n)), Yd = /* @__PURE__ */ new Map(), Zd = /* @__PURE__ */ new Map(), Pl = /* @__PURE__ */ new WeakMap(), Fm = (n) => {
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
function $t(n, r, d) {
  const p = Number(n);
  if (Number.isNaN(p)) return String(n);
  const g = (r == null ? void 0 : r.number_format) === "none", v = { maximumFractionDigits: 2, ...d, ...g ? { useGrouping: !1 } : {} }, w = g ? "en-US" : Fm(r), T = JSON.stringify([w, v]);
  let V = Yd.get(T);
  if (!V) {
    try {
      V = new Intl.NumberFormat(w, v);
    } catch {
      V = new Intl.NumberFormat(void 0, v);
    }
    Yd.set(T, V);
  }
  return V.format(p);
}
const Ql = (n) => {
  var r;
  return ((r = n == null ? void 0 : n.locale) == null ? void 0 : r.language) || (n == null ? void 0 : n.language) || void 0;
};
function qm(n) {
  if (!n) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (Pl.has(n)) return Pl.get(n);
  const r = n.time_format, d = r === "language" || r === "system" || !r ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(r === "language" ? n.language : void 0).includes("10") : r === "12";
  return Pl.set(n, d), d;
}
const tu = (n) => {
  var r, d;
  return ((r = n == null ? void 0 : n.locale) == null ? void 0 : r.time_zone) === "server" && ((d = n == null ? void 0 : n.config) != null && d.time_zone) ? n.config.time_zone : void 0;
};
function eu(n, r) {
  const d = JSON.stringify([n, r]);
  let p = Zd.get(d);
  if (!p) {
    try {
      p = new Intl.DateTimeFormat(n, r);
    } catch {
      p = new Intl.DateTimeFormat(void 0, { ...r, timeZone: void 0 });
    }
    Zd.set(d, p);
  }
  return p;
}
const Ge = (n, r) => eu(Ql(r), { hour: "numeric", minute: "2-digit", hourCycle: qm(r == null ? void 0 : r.locale) ? "h12" : "h23", timeZone: tu(r) }).format(n), Kd = (n, r) => eu(Ql(r), { weekday: "short", timeZone: tu(r) }).format(n), Wm = (n, r) => n.toLocaleDateString(Ql(r), { weekday: "narrow" }), we = (n, r) => ue(r) ? $t(Math.round(Number(r)), n.locale) + "°" : "–", sn = (n) => {
  const r = new Date(n);
  return r.setHours(0, 0, 0, 0), r;
}, ar = (n, r) => n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth() && n.getDate() === r.getDate(), oa = Math.PI / 180, Vm = 2440588, jm = 2451545, ns = oa * 23.4397, zm = 149598e3, Gm = -0.833 * oa, Um = 0.133 * oa, Xd = 5 * Ie, au = (n) => n.getTime() / ha - 0.5 + Vm - jm, ou = (n, r) => Math.atan2(Math.sin(n) * Math.cos(ns) - Math.tan(r) * Math.sin(ns), Math.cos(n)), nu = (n, r) => Math.asin(Math.sin(r) * Math.cos(ns) + Math.cos(r) * Math.sin(ns) * Math.sin(n)), Ym = (n, r) => oa * (280.16 + 360.9856235 * n) - r, Zm = (n, r, d) => Math.asin(Math.sin(r) * Math.sin(d) + Math.cos(r) * Math.cos(d) * Math.cos(n));
function ru(n) {
  const r = oa * (357.5291 + 0.98560028 * n), d = oa * (1.9148 * Math.sin(r) + 0.02 * Math.sin(2 * r) + 3e-4 * Math.sin(3 * r)), p = r + d + oa * 102.9372 + Math.PI;
  return { ra: ou(p, 0), dec: nu(p, 0), dist: zm };
}
function iu(n) {
  const r = oa * (218.316 + 13.176396 * n), d = oa * (134.963 + 13.064993 * n), p = oa * (93.272 + 13.22935 * n), g = r + oa * 6.289 * Math.sin(d), v = oa * 5.128 * Math.sin(p);
  return { ra: ou(g, v), dec: nu(g, v), dist: 385001 - 20905 * Math.cos(d) };
}
const su = (n, r, d, p) => {
  const g = au(r), v = n(g);
  return Zm(Ym(g, oa * -p) - v.ra, oa * d, v.dec);
}, rs = (n, r, d) => su(ru, n, r, d), Km = (n, r, d) => su(iu, n, r, d);
function lu(n, r, d, p) {
  const g = {};
  let v = d.getTime(), w = n(d) - r;
  for (let T = v + Xd; T <= p.getTime(); T += Xd) {
    const V = n(new Date(T)) - r;
    if (w < 0 != V < 0) {
      const M = new Date(v + (T - v) * w / (w - V));
      V > 0 ? g.rise ?? (g.rise = M) : g.set ?? (g.set = M);
    }
    v = T, w = V;
  }
  return g;
}
const cu = (n) => {
  const r = sn(n);
  return [r, new Date(r.getTime() + ha)];
}, Xm = (n, r, d) => lu((p) => rs(p, r, d), Gm, ...cu(n)), $m = (n, r, d) => lu((p) => Km(p, r, d), Um, ...cu(n));
function Hl(n) {
  const r = au(n), d = ru(r), p = iu(r), g = Math.acos(Math.sin(d.dec) * Math.sin(p.dec) + Math.cos(d.dec) * Math.cos(p.dec) * Math.cos(d.ra - p.ra)), v = Math.atan2(d.dist * Math.sin(g), p.dist - d.dist * Math.cos(g)), w = Math.atan2(Math.cos(d.dec) * Math.sin(d.ra - p.ra), Math.sin(d.dec) * Math.cos(p.dec) - Math.cos(d.dec) * Math.sin(p.dec) * Math.cos(d.ra - p.ra));
  return { fraction: (1 + Math.cos(v)) / 2, phase: 0.5 + 0.5 * v * (w < 0 ? -1 : 1) / Math.PI };
}
const Jm = (n) => {
  const r = n * 28;
  return r < 0.5 || r > 27.5 ? "new_moon" : r < 6.5 ? "waxing_crescent" : r < 7.5 ? "first_quarter" : r < 13.5 ? "waxing_gibbous" : r < 14.5 ? "full_moon" : r < 20.5 ? "waning_gibbous" : r < 21.5 ? "last_quarter" : "waning_crescent";
}, sr = (n) => {
  const r = n == null ? void 0 : n.config;
  return r && ue(r.latitude) && ue(r.longitude) ? { lat: Number(r.latitude), lon: Number(r.longitude) } : null;
};
function or(n, r) {
  var M, D, I;
  const d = sr(n), p = d ? Xm(r, d.lat, d.lon) : {}, g = (M = n == null ? void 0 : n.states) == null ? void 0 : M["sun.sun"], v = sn(r).getTime(), w = (G) => {
    const J = G ? new Date(G) : null;
    return J && Number.isFinite(J.getTime()) && sn(J).getTime() === v ? J : null;
  }, T = w((D = g == null ? void 0 : g.attributes) == null ? void 0 : D.next_rising), V = w((I = g == null ? void 0 : g.attributes) == null ? void 0 : I.next_setting);
  return T && (p.rise = T), V && (p.set = V), p;
}
function Qm(n) {
  var p;
  const r = (p = n == null ? void 0 : n.states) == null ? void 0 : p["sun.sun"];
  if ((r == null ? void 0 : r.state) === "below_horizon" || (r == null ? void 0 : r.state) === "above_horizon") return r.state === "below_horizon";
  const d = sr(n);
  return d ? rs(/* @__PURE__ */ new Date(), d.lat, d.lon) < 0 : !1;
}
const Bn = (n) => !!n && n.state !== "unavailable" && n.state !== "unknown", lr = (n, r) => {
  var p;
  const d = (p = n.entities) == null ? void 0 : p[r];
  return !d || !d.hidden && !d.entity_category;
}, Ee = (n, r, d) => {
  var p, g;
  for (const v of r) {
    const w = (p = n.states) == null ? void 0 : p[v];
    if (!Bn(w)) continue;
    const T = (g = w.attributes) == null ? void 0 : g[d];
    if (T != null && T !== "") return { stateObj: w, value: T };
  }
}, t0 = (n, r) => r.map((d) => {
  var p;
  return (p = n.states) == null ? void 0 : p[d];
}).find(Bn), e0 = (n, r, d) => r.map((p) => {
  var g;
  return (g = n.states) == null ? void 0 : g[p];
}).find((p) => {
  var g;
  return Bn(p) && (((g = p.attributes) == null ? void 0 : g.supported_features) == null || Number(p.attributes.supported_features) & Om[d]);
});
function rn(n, r, d) {
  var v, w, T, V;
  const p = ((w = (v = n.config) == null ? void 0 : v.unit_system) == null ? void 0 : w.length) || "", g = (r == null ? void 0 : r.attributes) || {};
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
function ts(n, r, d, p) {
  try {
    if (typeof n.formatEntityAttributeValueToParts == "function") {
      const [g, ...v] = n.formatEntityAttributeValueToParts(r, d, p).map((w) => w.value);
      return { number: g, unit: v.join("").trim() };
    }
  } catch {
  }
  return { number: $t(p, n.locale), unit: rn(n, r, d) };
}
function $d(n, r, d, p) {
  try {
    if (typeof n.formatEntityAttributeValue == "function") return n.formatEntityAttributeValue(r, d, p);
  } catch {
  }
  const g = ts(n, r, d, p);
  return (g.number + " " + g.unit).trim();
}
function Ro(n, r) {
  var p;
  try {
    if (typeof n.formatEntityState == "function") return n.formatEntityState(r);
  } catch {
  }
  const d = (p = r.attributes) == null ? void 0 : p.unit_of_measurement;
  return Lm[r.state] || (d && ue(r.state) ? $t(r.state, n.locale) + " " + d : r.state);
}
function on(n, r) {
  var d;
  try {
    if (typeof n.formatEntityName == "function") return n.formatEntityName(r, { type: "entity" });
  } catch {
  }
  return ((d = r.attributes) == null ? void 0 : d.friendly_name) || r.entity_id;
}
const Jd = (n) => n < 3 ? "low" : n < 6 ? "moderate" : n < 8 ? "high" : n < 11 ? "very_high" : "extreme", Gi = (n) => Jp.find(([, r]) => n <= r)[0];
function a0(n, r) {
  if (r === "Beaufort") return Math.round(n);
  const d = r ? Pm[r] : void 0;
  if (d === void 0) return;
  const p = Hm.findIndex((g) => n * d < g);
  return p === -1 ? 12 : p;
}
const Qd = (n, r) => {
  const d = r ? Nm[r] : void 0;
  return d === void 0 ? void 0 : n * d;
}, tp = (n) => Object.keys(n.states || {}).find((r) => {
  var d, p;
  return r.startsWith("sensor.") && ((p = (d = n.entities) == null ? void 0 : d[r]) == null ? void 0 : p.platform) === "moon";
}), Nl = (n) => Object.values(n.states || {}).filter((r) => {
  var d, p;
  return r.entity_id.startsWith("sensor.") && ((d = r.attributes) == null ? void 0 : d.device_class) === "precipitation" && ["total", "total_increasing"].includes(((p = r.attributes) == null ? void 0 : p.state_class) ?? "") && lr(n, r.entity_id);
}).map((r) => r.entity_id).sort()[0];
function o0(n) {
  var d;
  const r = {};
  for (const [p, g] of Object.entries(((d = n == null ? void 0 : n.core) == null ? void 0 : d.integration) ?? {})) {
    if (g && "integration_type" in g) {
      r[p] = g.categories;
      continue;
    }
    for (const [v, w] of Object.entries((g == null ? void 0 : g.integrations) ?? {})) r[v] = w == null ? void 0 : w.categories;
  }
  return r;
}
const du = (n, r, d) => {
  var g, v, w;
  const p = (v = (g = n.entities) == null ? void 0 : g[d]) == null ? void 0 : v.platform;
  return !!p && !!((w = r[p]) != null && w.includes(Rm));
};
function n0(n, r) {
  const d = /* @__PURE__ */ new Map();
  return Object.values(n.states || {}).filter((p) => {
    var g;
    return p.entity_id.startsWith("sensor.") && os.includes(((g = p.attributes) == null ? void 0 : g.device_class) ?? "") && lr(n, p.entity_id) && du(n, r, p.entity_id);
  }).sort((p, g) => p.entity_id.localeCompare(g.entity_id)).forEach((p) => {
    d.has(p.attributes.device_class) || d.set(p.attributes.device_class, p.entity_id);
  }), os.map((p) => d.get(p)).filter(Boolean);
}
const r0 = (n, r) => Object.values(n.states || {}).filter((d) => {
  var p, g;
  return d.entity_id.startsWith("sensor.") && lr(n, d.entity_id) && du(n, r, d.entity_id) && (((g = (p = n.entities) == null ? void 0 : p[d.entity_id]) == null ? void 0 : g.translation_key) ?? d.entity_id).toLowerCase().includes("pollen");
}).map((d) => d.entity_id).sort();
function ep(n, r, d) {
  const p = Math.max(r - n, 1e-6), g = d[d.length - 1], v = d.find((M) => p / M <= 4) ?? g * Math.ceil(p / (4 * g)), w = Math.floor(n / v) * v;
  let T = Math.ceil(r / v) * v;
  T === w && (T = w + v);
  const V = [];
  for (let M = w; M <= T + v / 1e3; M += v) V.push(M);
  return { min: w, max: T, ticks: V };
}
const i0 = (n, r, d) => {
  const p = (w) => [1, 3, 5].map((T) => parseInt(w.slice(T, T + 2), 16)), g = p(n), v = p(r);
  return "rgb(" + g.map((w, T) => Math.round(w + (v[T] - w) * d)).join(", ") + ")";
}, s0 = (n, r, d, p) => {
  const g = d * Math.abs(1 - 2 * p), v = p < 0.5 ? 0 : 1;
  return "M " + n + " " + (r - d) + " A " + d + " " + d + " 0 0 0 " + n + " " + (r + d) + " A " + g + " " + d + " 0 0 " + v + " " + n + " " + (r - d) + " Z";
}, ea = ({ icon: n, name: r, sub: d, visual: p, double: g, backdrop: v, cls: w, zone: T, callouts: V }) => '<div class="wbCard wbSquare' + (g ? " wbDouble" : "") + (v ? " wbHasBackdrop" : "") + (T != null ? " wbZoned" : "") + (w ? " " + w : "") + '">' + (v ? '<div class="wbBackdrop" aria-hidden="true">' + v + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + Qp(n) + '</div><div class="wbText"><span class="wbName">' + vt(r) + "</span>" + (d ? '<span class="wbSub">' + vt(d) + "</span>" : "") + "</div></div>" + (T != null ? '<div class="wbZone">' + T + "</div>" + (V != null && V.length ? '<div class="wbCallouts">' + V.slice(0, 3).map((M) => Array.isArray(M) ? '<span class="wbCallout"><span>' + vt(M[0]) + "</span><span>" + vt(M[1]) + "</span></span>" : '<span class="wbCallout wbAdvice"><span>' + vt(M) + "</span></span>").join("") + "</div>" : "") : '<div class="wbVisual">' + p + "</div>") + "</div>", Ui = (n) => '<div class="wbZoneM">' + n + "</div>", Pa = (n, r) => '<div class="wbValue"><span class="wbNum">' + vt(n) + "</span>" + (r ? '<span class="wbUnitV">' + vt(r) + "</span>" : "") + "</div>";
function l0(n) {
  const r = n.max - n.min || 1, d = (T) => 100 - (Math.min(n.max, Math.max(n.min, T)) - n.min) / r * 100, p = (T) => T / Gr * 100 + "%", g = (T) => T.map((V) => V.t + "," + d(V.v)).join(" "), v = n.kind === "line" ? n.points : [];
  let w = '<div class="wbDayChart"><div class="wbDcSun">' + n.sun.map((T) => '<span class="wbDcSunMark" style="left:' + p(T.t) + '">' + No(T.rise ? ne.sunsetUp : ne.sunsetDown) + vt(T.label) + "</span>").join("") + "</div>";
  return w += '<div class="wbDcY">' + n.ticks.map((T) => '<span style="top:' + d(T) + '%">' + vt(n.format(T)) + "</span>").join("") + "</div>", w += '<div class="wbDcPlot"><svg viewBox="0 0 ' + Gr + ' 100" preserveAspectRatio="none">' + n.night.map(([T, V]) => '<rect class="wbDcNight" x="' + T + '" y="0" width="' + (V - T) + '" height="100"></rect>').join("") + n.ticks.map((T) => '<line class="wbDcGrid" x1="0" x2="' + Gr + '" y1="' + d(T) + '" y2="' + d(T) + '" vector-effect="non-scaling-stroke"></line>').join("") + n.sun.map((T) => '<line class="wbDcSunLine" x1="' + T.t + '" x2="' + T.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (n.past && n.past.length > 1 ? '<polyline class="wbDcPast" points="' + g(n.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (v.length > 1 ? '<polygon class="wbDcArea" points="' + v[0].t + ",100 " + g(v) + " " + v[v.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + g(v) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (n.now ? '<line class="wbDcNow" x1="' + n.now.t + '" x2="' + n.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (n.kind === "bars" ? n.points.filter((T) => T.v > 0).map((T) => '<i class="wbDcBar" style="left:' + p(T.t + 12) + ";width:" + p(36) + ";height:" + (100 - d(T.v)) + '%"></i>').join("") : "") + (n.now && n.kind === "line" ? '<i class="wbDcDot" style="left:' + p(n.now.t) + ";top:" + d(n.now.v) + '%"></i>' : "") + (n.peak ? '<span class="wbDcPeak" style="left:' + p(n.peak.t) + ";top:" + d(n.peak.v) + '%">' + vt(n.peak.label) + "</span>" : "") + (n.note ? '<span class="wbDcNote">' + vt(n.note) + "</span>" : "") + "</div>", w += '<div class="wbDcX">' + n.hours.map((T) => '<span class="' + (T.minor ? "wbMinor" : "") + '" style="left:' + p(T.t) + '">' + vt(T.label) + "</span>").join("") + "</div></div>", w;
}
function ap(n, r, d = 120, p = 300) {
  const w = n.map((N) => N.value), T = Math.min(...w), V = Math.max(...w), M = V - T || 1, D = (N) => N / (n.length - 1) * p, I = (N) => 18 + (1 - (N - T) / M) * (d - 18 - 18), G = n.map((N, nt) => [D(nt), I(N.value)]), J = G.length > 2 ? Yp(G) : "M" + G.map((N) => N[0].toFixed(1) + " " + N[1].toFixed(1)).join("L"), et = w.indexOf(V), at = w.indexOf(T), X = (N) => N === 0 ? "start" : N === n.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 ' + p + " " + d + '" aria-hidden="true">' + Zp(p, 18, d - 18) + ('<path class="wbArea" d="' + J + "L" + p + " " + (d - 18) + "L0 " + (d - 18) + 'Z"></path>') + '<path class="wbLine" d="' + J + '" vector-effect="non-scaling-stroke"></path><text x="' + D(et) + '" y="' + (I(V) - 6) + '" text-anchor="' + X(et) + '">' + vt(r(V)) + '</text><text x="' + D(at) + '" y="' + (I(T) + 14) + '" text-anchor="' + X(at) + '">' + vt(r(T)) + '</text><text x="0" y="' + d + '" text-anchor="start">' + vt(n[0].label) + '</text><text x="' + p + '" y="' + d + '" text-anchor="end">' + vt(n[n.length - 1].label) + "</text></svg>";
}
function c0(n, r) {
  const v = n.map((I) => I.value).concat([]), w = Math.min(...v) - 2, T = Math.max(...v) + 1, V = T - w || 1, M = 300 / n.length, D = (I) => (1 - (I - w) / V) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + n.map((I, G) => '<rect class="wbBar' + (I.now ? " wbNowBar" : "") + '" x="' + (G * M + M * 0.2) + '" y="' + D(I.value) + '" width="' + M * 0.6 + '" height="' + (104 - D(I.value)) + '" rx="6"></rect><text x="' + (G * M + M / 2) + '" y="120" text-anchor="middle">' + vt(I.label) + "</text>").join("") + "</svg>";
}
const d0 = [
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
], p0 = [[60, 92, 2.2], [72, 98, 1.6], [48, 100, 1.5], [85, 88, 1.8], [38, 92, 1.3], [66, 84, 1.2], [95, 80, 1.3], [25, 40, 1.4], [82, 30, 1.3], [55, 108, 1.2]], op = [[54.4, 95, 1.8], [44.5, 56.6, 1.5], [33.5, 56.6, 1.1], [23.7, 40.1, 1.1]], u0 = [[30, 62], [48, 48], [72, 60], [96, 82], [86, 112], [30, 108], [16, 86]];
let f0 = 0;
function np(n, { getHass: r, entityId: d, style: p = "bitmap", motion: g = !0, cards: v, onOpen: w, hoursWindow: T, radarSource: V } = {}) {
  var Jo, On;
  const M = "wb" + ++f0 + "-", D = document.createElement("div");
  D.className = "wb", D.dataset.style = p;
  const I = document.createElement("div");
  I.className = "wbBento", D.appendChild(I), n.replaceChildren(D);
  const G = document.createElement("div");
  G.className = "wb wbPopup", G.dataset.style = p, G.hidden = !0;
  const J = ["aq_tile", "pollen_tile", "radar_tile"], et = ["current", "hourly", "sun", "pollen_tile", "moon", "uv_index", "aq_tile", "humidity", "pressure", "wind", "visibility", "radar_tile", "compared_to_average", "precipitation", "air_quality"].filter((s) => !v || v.includes(s)), at = { current: "wide", hourly: "wide", compared_to_average: "double" }, X = ["sun", "moon", "uv_index", "aq_tile", "pollen_tile", "humidity", "pressure", "wind"], N = {};
  et.forEach((s) => {
    const h = document.createElement("div");
    h.className = "wbItem", h.dataset.card = s, h.dataset.size = at[s] || "tile", h.hidden = !0, X.includes(s) && (h.dataset.xl = ""), I.appendChild(h), N[s] = { el: h, html: null };
  });
  let nt = !1, ct = null, wt = 0, it = -1, Z = !1, Y = null, H = "";
  const yt = "homecore-next-view", Ht = (() => {
    try {
      return localStorage.getItem(yt);
    } catch {
      return null;
    }
  })(), lt = { graph: void 0, range: { preset: "day" }, picking: !1, openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", hourlyView: Ht === "bars" ? "bars" : "strip", aq: void 0 }, U = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let Wt = /* @__PURE__ */ new Date(), j = /* @__PURE__ */ new Date();
  const Q = {}, C = {}, ut = {}, ot = (s) => {
    var h;
    return ((h = ut[s]) == null ? void 0 : h.forecast) ?? [];
  }, st = (s, h) => {
    var m;
    return ut[h] ? (m = s.states) == null ? void 0 : m[ut[h].entityId] : void 0;
  };
  function xt(s) {
    const h = C[s];
    h && (h.unsub.then((m) => {
      typeof m == "function" && m();
    }).catch(() => {
    }), delete C[s]), ut[s] && delete ut[s];
  }
  function ht(s, h, m) {
    var E;
    if (typeof ((E = s.connection) == null ? void 0 : E.subscribeMessage) != "function") return;
    const b = { entityId: m };
    try {
      b.unsub = Promise.resolve(s.connection.subscribeMessage((O) => {
        nt || C[h] !== b || (O != null && O.forecast ? ut[h] = { entityId: m, forecast: O.forecast } : delete ut[h], mn());
      }, { type: "weather/subscribe_forecast", forecast_type: h, entity_id: m }));
    } catch (O) {
      b.unsub = Promise.reject(O);
    }
    b.unsub.catch(() => {
      C[h] === b && delete C[h];
    }), C[h] = b;
  }
  function Mt(s, h) {
    var m;
    for (const b of ["daily", "hourly"]) {
      const E = e0(s, h, b);
      ((m = C[b]) == null ? void 0 : m.entityId) !== (E == null ? void 0 : E.entity_id) && (xt(b), E && ht(s, b, E.entity_id));
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
  async function ce(s, h) {
    var F, K, W;
    const m = Ee(s, h, "pressure");
    if (!m) return;
    const b = m.stateObj.entity_id, E = await qt(s, b, new Date(Date.now() - 3 * oe)), O = (W = (K = (F = E == null ? void 0 : E[b]) == null ? void 0 : F.find(($) => {
      var tt;
      return typeof ((tt = $.a) == null ? void 0 : tt.pressure) == "number";
    })) == null ? void 0 : K.a) == null ? void 0 : W.pressure;
    U.pressureHistory = typeof O == "number" ? { entityId: b, value: O } : void 0;
  }
  async function mt(s, h) {
    var K;
    const m = Ee(s, h, "temperature");
    if (!m) return;
    const b = m.stateObj.entity_id, E = sn(/* @__PURE__ */ new Date()), O = await qt(s, b, new Date(E.getTime() - ym * ha)), F = /* @__PURE__ */ new Map();
    for (const W of (O == null ? void 0 : O[b]) ?? []) {
      const $ = (K = W.a) == null ? void 0 : K.temperature, tt = new Date((W.lc ?? W.lu) * 1e3);
      if (typeof $ != "number" || tt >= E) continue;
      const ft = tt.toDateString();
      F.set(ft, Math.max(F.get(ft) ?? -1 / 0, $));
    }
    U.temperatureHistory = { entityId: b, dailyHighs: [...F.values()], days: [...F.entries()].map(([W, $]) => ({ date: new Date(W), high: $ })) };
  }
  async function Xe(s) {
    const h = Nl(s);
    if (!h) return;
    const m = await s.callWS({ type: "recorder/statistic_during_period", statistic_id: h, rolling_window: { duration: { hours: 24 } } });
    U.rain = { entityId: h, change: (m == null ? void 0 : m.change) ?? void 0 };
  }
  function ho() {
    const s = r == null ? void 0 : r();
    if (!s || nt || typeof s.callWS != "function") return;
    const h = Ct(s);
    U.lastFetch = Date.now(), [ce(s, h), mt(s, h), Xe(s)].forEach((m) => m.then(() => mn(), () => {
    }));
  }
  async function ln() {
    const s = r == null ? void 0 : r();
    if (!s) return;
    const h = Ee(s, Ct(s), "temperature");
    if (!h) return;
    const m = h.stateObj.entity_id, b = sn(/* @__PURE__ */ new Date());
    try {
      const E = await qt(s, m, b), O = (F) => ((E == null ? void 0 : E[m]) ?? []).map((K) => {
        var W;
        return { time: K.lu * 1e3, value: (W = K.a) == null ? void 0 : W[F] };
      }).filter((K) => typeof K.value == "number");
      U.todayHistory = { day: b.toDateString(), fetched: Date.now(), temperature: O("temperature"), humidity: O("humidity") }, mn();
    } catch {
    }
  }
  async function qo(s) {
    const h = r == null ? void 0 : r();
    if (h)
      try {
        const m = await qt(h, s, new Date(Date.now() - 24 * oe), !0), b = ((m == null ? void 0 : m[s]) ?? []).filter((O) => ue(O.s)), E = Math.max(1, Math.ceil(b.length / 48));
        U.aqHistory = { entityId: s, points: b.filter((O, F) => F % E === 0).map((O) => ({ label: Ge(new Date(O.lu * 1e3), h), value: Number(O.s) })) }, mn();
      } catch {
      }
  }
  function Ka(s) {
    U.categories === void 0 && (U.categories = null, Promise.resolve().then(() => s.callWS({ type: "integration/descriptions" })).then((h) => {
      U.categories = o0(h);
    }, () => {
      U.categories = {};
    }).then(() => mn()));
  }
  function Ct(s) {
    var m;
    const h = Object.keys(s.states || {}).filter((b) => b.startsWith("weather.") && lr(s, b)).sort();
    return d && ((m = s.states) != null && m[d]) ? [d, ...h.filter((b) => b !== d)] : h;
  }
  const De = (s) => U.categories ? { air: n0(s, U.categories), pollen: r0(s, U.categories) } : { air: [], pollen: [] };
  function je(s, h, m, b) {
    if (p === "line") return '<span class="wbWx wbS' + h + ' wbLineIcon" aria-hidden="true">' + Rl(s, m || s === "clear-night") + "</span>";
    if (p === "smooth") {
      const E = zh(s, h === 90, m, M + "g-" + b);
      return '<span class="wbWx wbS' + h + " wb" + E.k[0].toUpperCase() + E.k.slice(1) + (E.night ? " wbNight" : "") + '" aria-hidden="true">' + E.svg + "</span>";
    }
    return '<span class="wbWx wbS' + h + '" aria-hidden="true"><canvas data-wb-wx="' + vt(Dp(s, m)) + '" data-size="' + h + '"></canvas></span>';
  }
  const Kt = () => ot("daily").filter((s) => s.templow != null).slice(0, um);
  function na(s, h) {
    const m = new Date(h.datetime), b = /* @__PURE__ */ new Date();
    return ar(m, b) ? gt.today : ar(m, new Date(b.getTime() + ha)) ? gt.tomorrow : Kd(m, s);
  }
  const cr = (s, h, m) => m === 0 ? na(s, h) : Kd(new Date(h.datetime), s);
  function zt(s, h) {
    var tt, ft, Ot, Lt;
    const m = t0(s, h);
    if (!m) return "";
    const b = Kt(), E = lt.openDay !== void 0 ? b[lt.openDay] : void 0, O = Ee(s, h, "temperature"), F = b[0], K = F && ar(new Date(F.datetime), /* @__PURE__ */ new Date()), W = ((ft = (tt = s.config) == null ? void 0 : tt.unit_system) == null ? void 0 : ft.temperature) || ((Ot = m.attributes) == null ? void 0 : Ot.temperature_unit) || "";
    let $ = '<div class="wbCard wbWeather' + (E ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (E ? " inert" : "") + '><div class="wbNow">' + (w ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + vt(gt.openPage) + '">' : '<div class="wbCurrent">') + je(m.state, 90, Qm(s), "now") + '<div class="wbTempBlock">' + (O && ue(O.value) ? '<div class="wbTemp"><span class="wbDeg">' + vt($t(Math.round(Number(O.value)), s.locale)) + '</span><span class="wbUnit">' + vt(W) + "</span></div>" : "") + '<div class="wbPlace">' + vt(((Lt = s.config) == null ? void 0 : Lt.location_name) ?? "") + "</div></div>" + (w ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + vt(Ro(s, m)) + "</div>" + (K && F.templow != null ? '<div class="wbRange">' + vt(Ze(gt.range, { high: we(s, F.temperature), low: we(s, F.templow) })) + "</div>" : "") + "</div></div>";
    if ($ += Sa(s) + ke(s), b.length) {
      const St = K && O && ue(O.value) ? we(s, O.value) : "", Vt = (Dt, dt, It) => Dt === 0 && St ? '<span class="wbAsDay">' + vt(dt) + '</span><span class="wbAsNow">' + vt(It) + "</span>" : vt(dt);
      $ += '<div class="wbColumns" role="list">' + b.map((Dt, dt) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + dt + '" data-wb-focus="col-' + dt + '"><span class="wbDay">' + Vt(dt, cr(s, Dt, dt), gt.now) + "</span>" + je(Dt.condition ?? "cloudy", 60, !1, "col" + dt) + '<span class="wbTemps"><span class="wbHi">' + Vt(dt, we(s, Dt.temperature), St) + '</span><span class="wbLo">' + vt(we(s, Dt.templow)) + "</span></span></button>").join("") + "</div>", $ += '<div class="wbHalves" role="list">' + b.map((Dt, dt) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + dt + '" data-wb-focus="half-' + dt + '">' + je(Dt.condition ?? "cloudy", 40, !1, "half" + dt) + '<span class="wbText"><span class="wbName">' + vt(na(s, Dt)) + '</span><span class="wbSub">' + vt(Ze(gt.highLow, { high: we(s, Dt.temperature), low: we(s, Dt.templow) })) + "</span></span></button>").join("") + "</div>";
    }
    return $ + "</div>" + (E ? Xr(s, h, E) : "") + "</div>";
  }
  const ka = {
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
  }, Yr = {
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
  function Zr(s) {
    const h = Date.now(), m = ot("hourly").filter((ft) => new Date(ft.datetime).getTime() > h - oe).slice(0, 13);
    if (m.length < 2) return "";
    const b = (ft) => Ge(new Date(ft.datetime), s), E = (ft) => ka[ft.condition] || "", O = (ft) => Yr[ft.condition] || ft.condition;
    let F = E(m[0]);
    if (!F) return "";
    let K = m[0], W = 0;
    for (const ft of m.slice(1))
      W === 2 || O(ft) === O(K) || !E(ft) || (F += (W ? " and " : ", ") + E(ft) + " from " + b(ft), K = ft, W++);
    const $ = Number(m[0].temperature), tt = m.filter((ft) => ue(ft.temperature));
    if (ue($) && tt.length) {
      const ft = tt.reduce((Lt, St) => Number(St.temperature) < Number(Lt.temperature) ? St : Lt), Ot = tt.reduce((Lt, St) => Number(St.temperature) > Number(Lt.temperature) ? St : Lt);
      $ - Number(ft.temperature) >= 3 ? F += ", down to " + we(s, ft.temperature) + " by " + b(ft) : Number(Ot.temperature) - $ >= 3 && (F += ", up to " + we(s, Ot.temperature) + " by " + b(Ot));
    }
    return F[0].toUpperCase() + F.slice(1) + ".";
  }
  const Sa = (s) => {
    const h = Zr(s);
    return h ? '<div class="wbSummary"><p class="wbSummaryText">' + vt(h) + "</p></div>" : "";
  };
  function ke(s) {
    const [h, m] = Vi[T == null ? void 0 : T()] || Vi.day, b = Date.now(), E = ot("hourly").filter((O) => {
      const F = new Date(O.datetime), K = F.getHours();
      return F.getTime() > b - oe / 2 && K >= h && K < m && ue(O.temperature);
    }).slice(0, 4);
    return E.length ? '<div class="wbNextHours" role="list">' + E.map((O, F) => '<div class="wbHour" role="listitem"><span class="wbHourTime">' + vt(Ge(new Date(O.datetime), s)) + "</span>" + je(O.condition ?? "cloudy", 40, O.is_daytime === !1, "hr" + F) + '<span class="wbHourTemp">' + vt(we(s, O.temperature)) + "</span></div>").join("") + "</div>" : "";
  }
  function Kr(s) {
    const h = s.getTime(), m = Date.now() - oe;
    return ot("hourly").filter((b) => {
      const E = new Date(b.datetime).getTime();
      return E >= h && E < h + ha && E > m;
    });
  }
  function cn(s) {
    if (!s.length) return ["temperature"];
    const h = ["temperature"];
    return s.some((m) => m.precipitation != null || m.precipitation_probability != null) && h.push("precipitation"), s.some((m) => m.humidity != null) && h.push("humidity"), h;
  }
  function Xr(s, h, m) {
    const b = sn(new Date(m.datetime)), E = Kr(b), O = cn(E), F = O.includes(lt.dayMode) ? lt.dayMode : "temperature", K = (W) => W === "humidity" ? gt.humidity : gt.modes[W];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + je(m.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + vt(na(s, m)) + '</span><span class="wbSub">' + vt(Ze(gt.highLow, { high: we(s, m.temperature), low: we(s, m.templow) })) + '</span></div><button class="wbBack" title="' + vt(gt.back) + '" data-wb="close-day" data-wb-focus="back-day">' + No(ne.back) + "</button></div>" + (O.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + O.map((W) => '<button aria-pressed="' + (W === F) + '" data-wb="day-mode" data-mode="' + W + '" data-wb-focus="day-mode-' + W + '">' + vt(K(W)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + l0(dr(s, h, b, E, F)) + "</div></div>";
  }
  function dr(s, h, m, b, E) {
    var _r;
    const O = m.getTime(), F = Date.now(), K = ar(m, /* @__PURE__ */ new Date()), W = (Jt) => (Jt - O) / Ie, $ = (Jt) => Ge(new Date(Jt), s), tt = (Jt) => new Date(Jt.datetime).getTime(), ft = [0, 3, 6, 9, 12, 15, 18, 21].map((Jt) => ({ t: Jt * 60, label: $(O + Jt * oe), minor: Jt % 6 !== 0 })), { rise: Ot, set: Lt } = or(s, m), St = [], Vt = [];
    Ot && (St.push({ t: W(Ot.getTime()), label: $(Ot.getTime()), rise: !0 }), Vt.push([0, W(Ot.getTime())])), Lt && (St.push({ t: W(Lt.getTime()), label: $(Lt.getTime()), rise: !1 }), Vt.push([W(Lt.getTime()), Gr]));
    const Dt = sr(s);
    !Ot && !Lt && Dt && rs(new Date(O + ha / 2), Dt.lat, Dt.lon) < 0 && Vt.push([0, Gr]);
    const dt = K ? W(F) : void 0, It = { hours: ft, sun: St, night: Vt };
    if (!b.length && !K) return { ...It, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: gt.noHourly };
    if (E === "precipitation") {
      const Jt = b.some((ca) => ca.precipitation_probability != null), va = b.map((ca) => ({ t: W(tt(ca)), v: Number((Jt ? ca.precipitation_probability : ca.precipitation) ?? 0) })), oo = rn(s, st(s, "hourly"), "precipitation"), Qo = Math.max(0, ...va.map((ca) => ca.v)), In = Jt ? 100 : ep(0, Math.max(Qo, 1), [0.5, 1, 2, 5, 10]).max, Fn = (ca) => Jt ? $t(ca, s.locale) + "%" : $t(ca, s.locale, { maximumFractionDigits: 1 }) + " " + oo, qn = va.find((ca) => ca.v === Qo);
      return {
        ...It,
        kind: "bars",
        points: va,
        min: 0,
        max: In,
        ticks: [0, In / 2, In],
        format: Fn,
        now: dt !== void 0 ? { t: dt, v: 0 } : void 0,
        peak: qn && Qo > 0 ? { t: qn.t + 30, v: qn.v, label: Fn(qn.v) } : void 0,
        note: Qo > 0 ? void 0 : gt.noRain
      };
    }
    const Ft = E === "humidity" ? "humidity" : "temperature", me = b.filter((Jt) => Jt[Ft] != null && (!K || tt(Jt) >= F)).map((Jt) => ({ t: W(tt(Jt)), v: Number(Jt[Ft]) }));
    let _t, ae = [];
    if (dt !== void 0) {
      const Jt = Ee(s, h, Ft);
      Jt && ue(Jt.value) && (_t = { t: dt, v: Number(Jt.value) }, me.unshift(_t)), ae = (((_r = U.todayHistory) == null ? void 0 : _r.day) === m.toDateString() ? U.todayHistory[Ft] : []).filter((oo) => oo.time <= F).map((oo) => ({ t: Math.max(0, W(oo.time)), v: oo.value })), _t && ae.length && ae.push(_t);
    }
    const de = [...ae, ...me];
    if (!de.length) return { ...It, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: gt.noHourly };
    const la = de.map((Jt) => Jt.v), ao = ep(Math.min(...la), Math.max(...la), Ft === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    Ft === "humidity" && (ao.min = Math.max(0, ao.min), ao.max = Math.min(100, ao.max), ao.ticks = ao.ticks.filter((Jt) => Jt >= 0 && Jt <= 100));
    const kr = Ft === "humidity" ? (Jt) => $t(Jt, s.locale) + "%" : (Jt) => we(s, Jt), Sr = Ft === "temperature" ? de.reduce((Jt, va) => va.v > Jt.v ? va : Jt) : void 0;
    return { ...It, kind: "line", points: me, past: ae, ...ao, format: kr, now: _t, peak: Sr ? { ...Sr, label: kr(Sr.v) } : void 0 };
  }
  function pr(s) {
    const h = ["temperature"];
    return s.some((m) => m.precipitation_probability != null || m.precipitation != null) && h.push("precipitation"), s.some((m) => m.wind_speed != null) && h.push("wind"), h;
  }
  function Wo(s, h, m = Id) {
    var O, F;
    const b = ot("daily"), E = [];
    for (let K = 0; K < m; K++) for (const W of [!1, !0]) {
      const $ = s.getTime() + (K * 24 + (W ? 12 : 0)) * oe, tt = $ + 12 * oe, ft = {};
      h.forEach((Lt) => {
        const St = new Date(Lt.datetime).getTime();
        Lt.condition && St >= $ && St < tt && (ft[Lt.condition] = (ft[Lt.condition] ?? 0) + (wm.has(Lt.condition) ? 2 : 1));
      });
      let Ot = (O = Object.entries(ft).sort((Lt, St) => St[1] - Lt[1])[0]) == null ? void 0 : O[0];
      if (!Ot) {
        const Lt = new Date($).toDateString();
        Ot = ((F = b.find((St) => new Date(St.datetime).toDateString() === Lt)) == null ? void 0 : F.condition) ?? "cloudy";
      }
      E.push({ cond: W && Ot === "sunny" ? "clear-night" : Ot, night: W });
    }
    return E;
  }
  function is(s, h, m) {
    const b = st(s, "hourly"), E = h.precipitation_probability != null ? $t(h.precipitation_probability, s.locale) + "%" : "", O = h.precipitation ? $t(h.precipitation, s.locale) + " " + rn(s, b, "precipitation") : "";
    switch (m) {
      case "precipitation":
        return E ? [E, O] : [O || "–", ""];
      case "wind":
        return h.wind_speed != null ? [$t(Math.round(h.wind_speed), s.locale), rn(s, b, "wind_speed")] : ["–", ""];
      default:
        return [we(s, h.temperature), (h.precipitation_probability ?? 0) >= 20 ? E : ""];
    }
  }
  function Xa(s, h, m) {
    const [b, E] = Vi[T == null ? void 0 : T()] || Vi.day, O = [];
    for (let F = 0; F < 4 && O.length < 3; F++) {
      const K = /* @__PURE__ */ new Date();
      K.setHours(0, 0, 0, 0), K.setDate(K.getDate() + F);
      const W = new Date(K);
      W.setHours(E, 0, 0, 0), K.setHours(b, 0, 0, 0), !(W.getTime() <= m || !h.some(($) => {
        const tt = new Date($.datetime).getTime();
        return tt >= K.getTime() && tt <= W.getTime();
      })) && O.push({ a: K.getTime(), b: W.getTime(), label: na(s, { datetime: K.toISOString() }) });
    }
    return O;
  }
  function Se(s, h, m, b, E, O) {
    const F = (m.b - h.a) / oe, K = (dt) => ((dt - h.a) / oe).toFixed(3), W = 80, $ = 32, tt = [];
    for (const dt = new Date(h.a - ha); dt.getTime() < m.b + ha; dt.setDate(dt.getDate() + 1)) {
      const { rise: It, set: Ft } = or(s, new Date(dt));
      It && Ft && tt.push({ rise: It.getTime(), set: Ft.getTime() });
    }
    const ft = (dt, It) => W - (W - $) * Math.sin(Math.PI * (It - dt.rise) / (dt.set - dt.rise)), Ot = (dt) => !tt.some((It) => dt >= It.rise && dt <= It.set);
    let Lt = "", St = "", Vt = "";
    tt.forEach((dt, It) => {
      const Ft = [];
      for (let _t = dt.rise; _t <= dt.set; _t += 15 * Ie) Ft.push(K(_t) + "," + ft(dt, _t).toFixed(2));
      Ft.push(K(dt.set) + "," + W), Lt += '<polyline class="wbLineArc" points="' + Ft.join(" ") + '"/>';
      const me = tt[It + 1];
      me && (Lt += '<rect class="wbLineNight" x="' + K(dt.set) + '" y="0" width="' + ((me.rise - dt.set) / oe).toFixed(3) + '" height="100"/>'), [[dt.rise, "↑"], [dt.set, "↓"]].forEach(([_t, ae]) => {
        _t < h.a || _t > m.b || (St += '<line class="wbLineEdge" x1="' + K(_t) + '" x2="' + K(_t) + '" y1="0" y2="100"/>', Vt += '<span class="wbLineTime" style="left:' + O(_t) + '">' + ae + " " + vt(Ge(new Date(_t), s)) + "</span>");
      });
    });
    const Dt = tt.find((dt) => E >= dt.rise && E <= dt.set);
    return '<svg class="wbLineArt" viewBox="0 0 ' + F + ' 100" preserveAspectRatio="none" aria-hidden="true">' + Lt + St + '<line class="wbLineHorizon" x1="0" x2="' + F + '" y1="' + W + '" y2="' + W + '"/></svg>' + Vt + (Dt ? '<span class="wbLineNow" style="left:' + O(E) + ";top:" + ft(Dt, E) + '%">' + Rl("sunny", !1) + "</span>" : "") + b.filter((dt) => dt.entry && !dt.now).map((dt) => '<span class="wbLineGlyph' + dt.edge + '" style="left:' + O(dt.t) + '">' + Rl(dt.entry.condition ?? "cloudy", Ot(dt.t)) + "</span>").join("");
  }
  function ur(s, h) {
    delete Q.hourly;
    const m = lt.hourlyView === "bars" ? "bars" : "strip", b = '<div class="wbHeader"><h2 class="wbTitle">' + vt(m === "bars" ? gt.nextDays : gt.nextHours) + '</h2><div class="wbSegments wbViews" role="group" aria-label="' + vt(gt.showAs) + '">' + ["strip", "bars"].map((_t) => '<button aria-pressed="' + (_t === m) + '" data-wb="hourly-view" data-view="' + _t + '" data-wb-focus="hourly-view-' + _t + '">' + vt(gt.views[_t]) + "</button>").join("") + "</div></div>";
    if (m === "bars") return fr(s, h, b);
    const E = ot("hourly"), O = Math.floor(Date.now() / Ie) * Ie, F = E.filter((_t) => new Date(_t.datetime).getTime() > O - oe);
    if (!F.length) return "";
    const K = pr(F), W = K.includes(lt.hourlyMode) ? lt.hourlyMode : "temperature", $ = Xa(s, E, O);
    if (!$.length) return "";
    const tt = $[0], ft = $[$.length - 1], Ot = (tt.b - tt.a) / oe, Lt = (_t) => "calc(var(--wb-u) * " + ((_t - tt.a) / oe).toFixed(3) + ")", St = new Date(tt.a);
    St.setHours(6, 0, 0, 0), St.getTime() > tt.a && St.setDate(St.getDate() - 1);
    const Vt = Math.ceil((ft.b - St.getTime()) / ha);
    p !== "line" && (Q.hourly = { segs: Wo(St, E, Vt), seed: St.getDate(), columns: Vt });
    const Dt = (_t) => _t === tt.a ? " wbFirst" : _t === ft.b ? " wbLast" : "", dt = [];
    for (let _t = tt.a; _t < ft.b; ) {
      const ae = new Date(_t);
      ae.setHours(24, 0, 0, 0);
      const de = Math.min(ae.getTime(), ft.b);
      dt.push({ a: _t, b: de, label: na(s, { datetime: new Date(_t).toISOString() }), page: $.find((la) => la.a >= _t && la.a < de) || $.find((la) => la.a < de && la.b > _t) }), _t = de;
    }
    const It = O > tt.a && O < ft.b ? Math.floor((O - tt.a) / (2 * oe)) * 2 : 0, Ft = [];
    for (let _t = tt.a; _t <= ft.b; _t += oe) {
      const ae = new Date(_t), de = Dt(_t);
      !de && ae.getHours() % hm || !de && (Math.abs(tt.a - _t) < 2 * oe || Math.abs(ft.b - _t) < 2 * oe) || O >= tt.a && Math.abs(_t - O) < 1.5 * oe && !de || Ft.push({ t: _t, edge: de, label: Ge(ae, s), entry: _t >= O - oe ? E.find((la) => new Date(la.datetime).getTime() === _t) : void 0 });
    }
    O > tt.a && O < tt.b && Ft.push({ t: O, edge: O - tt.a < oe ? " wbFirst" : tt.b - O < oe ? " wbLast" : "", label: gt.now, entry: F[0], now: !0 });
    const me = (_t, ae) => '<span class="wbMark' + _t.edge + (_t.now ? " wbNowMark" : "") + '" style="left:' + Lt(_t.t) + '">' + ae + "</span>";
    return '<div class="wbCard wbHc wbHourly">' + b + (K.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + K.map((_t) => '<button aria-pressed="' + (_t === W) + '" data-wb="hourly-mode" data-mode="' + _t + '" data-wb-focus="hourly-mode-' + _t + '">' + vt(gt.modes[_t]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll wbPaged" tabindex="0" aria-label="' + vt(gt.nextHours) + '" data-span="' + Ot + '" data-start="' + It + '"><div class="wbStrip" style="--wb-u:calc(100cqw / ' + Ot + ");width:calc(var(--wb-u) * " + (ft.b - tt.a) / oe + ')">' + // a stop every two hours (Matt, 1 Nov): a swipe settles on one, a flick runs on past several
    [...Array(Math.floor((ft.b - tt.a) / (2 * oe)) + 1)].map((_t, ae) => '<i class="wbSnap" style="left:' + Lt(tt.a + ae * 2 * oe) + '"></i>').join("") + '<div class="wbDays">' + dt.map((_t, ae) => {
      var de;
      return '<span class="wbDaySpan" style="width:calc(var(--wb-u) * ' + ((_t.b - _t.a) / oe).toFixed(3) + ')"><button class="wbDayName" data-wb="hours-day" data-hours="' + (ae === 0 ? It : ((((de = _t.page) == null ? void 0 : de.a) ?? _t.a) - tt.a) / oe) + '" data-wb-focus="hours-day-' + ae + '">' + vt(_t.label) + "</button></span>";
    }).join("") + '</div><div class="wbRow wbTimes">' + Ft.map((_t) => me(_t, vt(_t.label))).join("") + "</div>" + (p === "line" ? '<div class="wbSky wbLineSky">' + Se(s, tt, ft, Ft, O, Lt) : '<div class="wbSky"><div class="wbSkyArt" style="left:' + Lt(St.getTime()) + ";width:calc(var(--wb-u) * " + Vt * 24 + ')"><canvas data-wb-strip="hourly"' + (p === "smooth" ? "" : ' class="wbPixels"') + "></canvas></div>") + (O > tt.a ? '<i class="wbPast" style="width:' + Lt(Math.min(O, ft.b)) + '"></i><i class="wbNowLine" style="left:' + Lt(O) + '"></i>' : "") + dt.slice(1).map((_t) => '<i class="wbMidnight" style="left:' + Lt(_t.a) + '"></i>').join("") + '</div><div class="wbRow wbValues">' + Ft.map((_t) => {
      if (!_t.entry) return "";
      const [ae, de] = is(s, _t.entry, W);
      return me(_t, '<span class="wbPrimaryV">' + vt(ae) + '</span><span class="wbSecondary">' + vt(de) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function $r(s) {
    const h = mm, m = h.findIndex(([W]) => W >= s);
    if (m <= 0) return "rgb(" + h[m < 0 ? h.length - 1 : 0][1].join(",") + ")";
    const [b, E] = h[m - 1], [O, F] = h[m], K = (s - b) / (O - b);
    return "rgb(" + E.map((W, $) => Math.round(W + (F[$] - W) * K)).join(",") + ")";
  }
  function fr(s, h, m) {
    var Lt;
    const b = ot("daily").filter((St) => ue(St.templow) && ue(St.temperature)).slice(0, 7);
    if (!b.length) return "";
    const E = Math.min(...b.map((St) => Number(St.templow))), O = Math.max(...b.map((St) => Number(St.temperature))), F = Math.max(1, O - E), K = (St) => Math.max(0, Math.min(100, (St - E) / F * 100)).toFixed(2), W = /F/.test(rn(s, st(s, "daily"), "temperature")), $ = (St) => W ? (St - 32) / 1.8 : St, tt = "linear-gradient(90deg," + [0, 0.25, 0.5, 0.75, 1].map((St) => $r($(E + St * F)) + " " + St * 100 + "%").join(",") + ")", ft = (Lt = Ee(s, h, "temperature")) == null ? void 0 : Lt.value;
    return '<div class="wbCard wbHc wbHourly wbBars' + (pr(ot("hourly").filter((St) => new Date(St.datetime).getTime() > Date.now() - oe)).length > 1 ? " wbTabbed" : "") + '">' + m + '<div class="wbDayBars" role="list">' + b.map((St, Vt) => {
      const Dt = na(s, St), dt = ar(new Date(St.datetime), /* @__PURE__ */ new Date()), It = Number(St.templow), Ft = Number(St.temperature);
      return '<div class="wbDayBar" role="listitem" aria-label="' + vt(Ze(gt.rangeRow, { day: Dt, low: we(s, It), high: we(s, Ft) })) + '"><span class="wbRangeDay">' + vt(Dt) + "</span>" + je(St.condition, 40, !1, "r" + Vt) + '<span class="wbRangeLo">' + vt(we(s, It)) + '</span><span class="wbRangeTrack"><i class="wbRangeFill" style="background:' + tt + ";clip-path:inset(0 " + (100 - K(Ft)) + "% 0 " + K(It) + '% round 4px)"></i>' + (dt && ue(ft) ? '<i class="wbRangeNow" style="left:' + K(Number(ft)) + '%"></i>' : "") + '</span><span class="wbRangeHi">' + vt(we(s, Ft)) + "</span></div>";
    }).join("") + "</div></div>";
  }
  const Jr = [[-120, "#0d1530"], [-60, "#1c2550"], [-15, "#c9707a"], [30, "#f2a46a"], [60, "#b49bc8"], [90, "#5aa5e6"]], Qr = [[-90, "#5aa5e6"], [-60, "#a99bd0"], [-30, "#f0a54a"], [15, "#c45a5a"], [60, "#3a2a5c"], [120, "#0d1530"]], Gt = (s, h) => {
    if (h <= s[0][0]) return s[0][1];
    for (let m = 1; m < s.length; m++) if (h <= s[m][0]) {
      const [b, E] = s[m - 1], [O, F] = s[m];
      return i0(E, F, (h - b) / (O - b));
    }
    return s[s.length - 1][1];
  }, bt = (s, h, m) => {
    if (!h || !m) return Jr[5][1];
    const b = (s.getTime() - m.getTime()) / Ie;
    return b >= -90 ? Gt(Qr, b) : Gt(Jr, (s.getTime() - h.getTime()) / Ie);
  }, fe = (s) => (s >= 60 ? Math.floor(s / 60) + "h " : "") + s % 60 + "m";
  function jt(s) {
    const h = Wt, { rise: m, set: b } = or(s, h), E = m && b ? Math.round((b.getTime() - m.getTime()) / Ie) : 0, O = Math.floor(E / 60), F = E % 60, K = (me) => me ? Ge(me, s) : "–", W = new Date(h);
    W.setDate(W.getDate() + 1);
    const $ = or(s, W), tt = $.rise && $.set ? Math.round(($.set.getTime() - $.rise.getTime()) / Ie) : 0, ft = new Date(h);
    ft.setDate(ft.getDate() - 1);
    const Ot = !!(m && b && h >= m && h <= b), Lt = !!(m && h < m), St = Ot ? m : Lt ? or(s, ft).set : b, Vt = Ot ? b : Lt ? m : $.rise, Dt = St && Vt ? Math.min(1, Math.max(0, (h.getTime() - St.getTime()) / (Vt.getTime() - St.getTime()))) : 0, dt = Vt ? Math.max(0, Math.round((Vt.getTime() - h.getTime()) / Ie)) : 0, It = Vt ? fe(dt) : "–", Ft = Ot ? gt.untilSunset : gt.untilSunrise;
    return ea({
      icon: ne.sunny,
      name: gt.sun,
      sub: E ? Ze(gt.daylightShort, { hours: O, minutes: F }) : void 0,
      cls: "wbSunTile",
      callouts: [[gt.callout.riseTomorrow, K($.rise)], [gt.callout.setTomorrow, K($.set)], ...tt ? [[gt.callout.dayTomorrow, Math.floor(tt / 60) + "h " + tt % 60 + "m"]] : []],
      zone: '<div class="wbSunZone" style="background:' + bt(h, m, b) + '"><svg class="wbSunTrack" data-up="' + (Ot ? 1 : 0) + '" data-f="' + Dt.toFixed(4) + '" aria-hidden="true"></svg><div class="wbSunCount"><span class="wbSunLeft">' + vt(It) + '</span><span class="wbSunWord">' + vt(Ft) + '</span></div><span class="wbSunAt wbSunRise">' + vt(K(m)) + '</span><span class="wbSunAt wbSunSet">' + vt(K(b)) + "</span></div>" + // at M, the countdown alone (Matt, 10 Nov): M's zone has room for one line
      Ui(Pa(It, ""))
    });
  }
  const Be = 22;
  function $a(s) {
    const h = Math.round(s.clientWidth), m = Math.round(s.clientHeight), b = Be, E = b / 2, O = h + "x" + m + ":" + s.dataset.f + ":" + s.dataset.up;
    if (h < b * 3 || m < b * 3 || s.dataset.drawn === O) return;
    s.dataset.drawn = O;
    const F = "M" + E + " " + (m - b) + "V" + b + "A" + E + " " + E + " 0 0 1 " + b + " " + E + "H" + (h - b) + "A" + E + " " + E + " 0 0 1 " + (h - E) + " " + b + "V" + (m - b), K = "M" + (h - E) + " " + (m - b) + "A" + E + " " + E + " 0 0 1 " + (h - b) + " " + (m - E) + "H" + b + "A" + E + " " + E + " 0 0 1 " + E + " " + (m - b), W = 16, $ = 6, tt = "M" + W + " 0H" + (h - W) + "A" + W + " " + W + " 0 0 1 " + h + " " + W + "V" + (m - W) + "A" + W + " " + W + " 0 0 1 " + (h - W) + " " + m + "H" + W + "A" + W + " " + W + " 0 0 1 0 " + (m - W) + "V" + W + "A" + W + " " + W + " 0 0 1 " + W + " 0ZM" + (b + $) + " " + b + "A" + $ + " " + $ + " 0 0 0 " + b + " " + (b + $) + "V" + (m - b - $) + "A" + $ + " " + $ + " 0 0 0 " + (b + $) + " " + (m - b) + "H" + (h - b - $) + "A" + $ + " " + $ + " 0 0 0 " + (h - b) + " " + (m - b - $) + "V" + (b + $) + "A" + $ + " " + $ + " 0 0 0 " + (h - b - $) + " " + b + "Z", ft = s.dataset.up === "1", Ot = Number(s.dataset.f) || 0, Lt = "http://www.w3.org/2000/svg";
    s.setAttribute("viewBox", "0 0 " + h + " " + m);
    const St = document.createElementNS(Lt, "path");
    St.setAttribute("d", ft ? F : K), s.replaceChildren(St);
    const Vt = St.getTotalLength(), Dt = St.getPointAtLength(Vt * Ot), dt = ft ? Vt : 0;
    s.innerHTML = '<defs><mask id="' + M + 'sun-day"><path d="' + F + '" fill="none" stroke="#fff" stroke-width="' + b * 2 + '"></path></mask><mask id="' + M + 'sun-done"><path d="' + F + '" fill="none" stroke="#fff" stroke-width="' + b * 2 + '" stroke-dasharray="' + (ft ? (dt * Ot).toFixed(1) + " " + (dt + 1).toFixed(1) : "0 99999") + '"></path></mask></defs><path class="wbSunBand" fill-rule="evenodd" d="' + tt + '"></path><path class="wbSunBand wbSunDay" fill-rule="evenodd" d="' + tt + '" mask="url(#' + M + 'sun-day)"></path><path class="wbSunBand wbSunDone" fill-rule="evenodd" d="' + tt + '" mask="url(#' + M + 'sun-done)"></path><circle class="wbSunDot' + (ft ? "" : " wbSunNight") + '" cx="' + Dt.x.toFixed(1) + '" cy="' + Dt.y.toFixed(1) + '" r="' + E + '"></circle>';
  }
  const Ja = typeof ResizeObserver == "function" ? new ResizeObserver((s) => s.forEach((h) => $a(h.target))) : null;
  function ss() {
    Ja == null || Ja.disconnect(), D.querySelectorAll("svg.wbSunTrack").forEach((s) => {
      $a(s), Ja == null || Ja.observe(s);
    });
  }
  function hr(s, h, m) {
    const b = (F) => M + "moon-" + F, E = s > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + b("terminator") + ')" d="' + s0(61, 61, 57.9, s) + '"' + (h ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", O = (F, K, W, $, tt, ft) => '<filter id="' + b(F) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + K + '" numOctaves="' + W + '" seed="' + $ + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((Ot) => "<feFunc" + Ot + ' type="linear" slope="' + tt + '" intercept="' + ft + '"></feFunc' + Ot + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + b("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + b("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + b("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + b("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + b("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + O("mottle", "0.045", 4, 3, 1.8, -0.4) + O("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + b("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + b("fill") + ')"></circle><g' + (m ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + b("soften") + ')">' + d0.map(([F, K, W, $, tt, ft]) => '<ellipse cx="' + F + '" cy="' + K + '" rx="' + W + '" ry="' + $ + '" fill-opacity="' + ft + '" transform="rotate(' + tt + " " + F + " " + K + ')"></ellipse>').join("") + "</g>" + p0.map(([F, K, W]) => '<circle class="wbCrater" cx="' + F + '" cy="' + K + '" r="' + W + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + b("glow") + ')">' + u0.map(([F, K]) => '<line x1="54.4" y1="95" x2="' + F + '" y2="' + K + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + b("glow") + ')">' + op.map(([F, K, W]) => '<circle cx="' + F + '" cy="' + K + '" r="' + W * 2 + '"></circle>').join("") + "</g>" + op.map(([F, K, W]) => '<circle class="wbBrightCenter" cx="' + F + '" cy="' + K + '" r="' + W + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + b("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + b("grain") + ')"></rect>' + E + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function ti(s) {
    const h = j, m = sr(s), b = (m == null ? void 0 : m.lat) ?? 0, E = Hl(h), O = tp(s), F = O ? s.states[O] : void 0, K = Bn(F) && Em.includes(F.state) ? F.state : Jm(E.phase), { rise: W, set: $ } = m ? $m(h, m.lat, m.lon) : {}, tt = E.phase > 0.5 != b < 0, ft = $t(Math.round(E.fraction * 100), s.locale) + "%", Ot = W ?? $;
    return Ot && Ge(Ot, s), ea({
      icon: ne.night,
      name: gt.moon,
      sub: gt.phases[K],
      callouts: [...W ? [[gt.callout.moonrise, Ge(W, s)]] : [], ...$ ? [[gt.callout.moonset, Ge($, s)]] : [], [gt.callout.lit, ft]],
      // at M, how much of it is lit (Matt, 10 Nov)
      zone: '<div class="wbMoonBox">' + hr(E.fraction, tt, b < 0) + "</div>" + Ui(Pa($t(Math.round(E.fraction * 100), s.locale), "%"))
    });
  }
  function ls(s, h) {
    var St;
    const m = Ee(s, h, "wind_speed");
    if (!m || !ue(m.value)) return "";
    const b = Ee(s, h, "wind_gust_speed"), E = Ee(s, h, "wind_bearing"), O = E && ue(E.value) ? Number(E.value) : void 0, F = a0(Number(m.value), (St = m.stateObj.attributes) == null ? void 0 : St.wind_speed_unit), K = ts(s, m.stateObj, "wind_speed", m.value), W = O !== void 0 ? gt.cardinal[Dm[((O + 11.25) / 22.5 | 0) % 16]] : void 0, $ = b ? $d(s, b.stateObj, "wind_gust_speed", b.value) : void 0, tt = [W ? Ze(gt.windFrom, { direction: W }) : void 0, F !== void 0 ? F + " " + gt.beaufort : void 0].filter(Boolean).join(" · ") || $, ft = (Vt, Dt) => {
      const dt = (Vt - 90) * Math.PI / 180;
      return [100 + Dt * Math.cos(dt), 100 + Dt * Math.sin(dt)];
    }, Ot = Array.from({ length: 36 }, (Vt, Dt) => Dt * 10).map((Vt) => {
      const Dt = Vt % 90 === 0, [dt, It] = ft(Vt, 97), [Ft, me] = ft(Vt, Dt ? 83 : 89);
      return '<line class="wbTick' + (Dt ? " wbMajor" : "") + '" x1="' + dt + '" y1="' + It + '" x2="' + Ft + '" y2="' + me + '"></line>';
    }).join(""), Lt = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([Vt, Dt]) => {
      const [dt, It] = ft(Dt, 64);
      return '<text class="wbLetter' + (Vt === "n" ? " wbNorth" : "") + '" x="' + dt + '" y="' + It + '">' + vt(gt.cardinal[Vt]) + "</text>";
    }).join("");
    return ea({ icon: ne.windy, name: gt.wind, sub: tt, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + Ot + Lt + (O !== void 0 ? '<path class="wbMarker" transform="rotate(' + O + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + vt(K.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + vt(K.unit) + "</text></svg>" });
  }
  const cs = (s, h) => {
    if (s < 3) return gt.advice.fine;
    if (s < 8) return gt.advice.sunblock;
    const m = Date.now(), b = ot("hourly").find((E) => E.uv_index != null && new Date(E.datetime).getTime() > m && E.uv_index < 6);
    return b && new Date(b.datetime).toDateString() === (/* @__PURE__ */ new Date()).toDateString() ? Ze(gt.advice.avoidUntil, { time: Ge(new Date(b.datetime), h) }) : gt.advice.avoidToday;
  };
  function Vo(s, h) {
    const m = Ee(s, h, "uv_index");
    if (!m || !ue(m.value)) return "";
    const b = Number(m.value), E = gt.uvLevel[Jd(b)], O = /* @__PURE__ */ new Date();
    O.setHours(23, 59, 59, 999);
    const F = ot("hourly").filter((tt) => tt.uv_index != null && new Date(tt.datetime) > /* @__PURE__ */ new Date() && new Date(tt.datetime) <= O).reduce((tt, ft) => !tt || ft.uv_index > tt.uv ? { uv: ft.uv_index, time: new Date(ft.datetime) } : tt, void 0), K = Bm[Jd(b)], W = 216 * Math.min(1, Math.max(0.08, 0.4 + (b - 4.5) * (0.5 / 5.5))), $ = '<svg class="wbUvArt" viewBox="0 0 216 198" preserveAspectRatio="xMinYMin slice" aria-hidden="true"><defs><radialGradient id="' + M + 'uv-sun" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="' + W.toFixed(1) + '"><stop offset="0" style="stop-color:color-mix(in srgb, ' + K + ' 28%, #fff6dd)"></stop><stop offset=".62" style="stop-color:color-mix(in srgb, ' + K + ' 62%, #fff6dd)"></stop><stop offset="1" style="stop-color:' + K + '"></stop></radialGradient></defs><circle class="wbUvSun" cx="0" cy="0" r="' + W.toFixed(1) + '" fill="url(#' + M + 'uv-sun)"></circle></svg><div class="wbUvBig"><span class="wbUvNum">' + vt($t(Math.round(b), s.locale)) + '</span><span class="wbUvWord">' + vt(E) + "</span></div>" + Ui(Pa($t(Math.round(b), s.locale), ""));
    return ea({
      icon: ne.sunnyAlert,
      name: gt.metrics.uv_index,
      sub: F && F.uv > b ? Ze(gt.uvPeak, { level: E, uv_index: $t(Math.round(F.uv), s.locale), time: Ge(F.time, s) }) : E,
      zone: $,
      cls: "wbUv",
      callouts: [cs(b, s), [gt.callout.now, $t(Math.round(b), s.locale) + " · " + E], [gt.callout.peak, F && F.uv > b ? $t(Math.round(F.uv), s.locale) + " at " + Ge(F.time, s) : gt.callout.now]]
    });
  }
  function ei(s) {
    const h = ot("daily")[0], m = U.temperatureHistory;
    if (!h || new Date(h.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !ue(h.temperature) || !m || m.dailyHighs.length < xm) return "";
    const b = Number(h.temperature), E = m.dailyHighs.reduce((Dt, dt) => Dt + dt, 0) / m.dailyHighs.length, O = Math.round(b - E) || 0, F = O > 0 ? "above" : O < 0 ? "below" : "same", K = [...m.days, { date: /* @__PURE__ */ new Date(), high: b, today: !0 }], W = K.map((Dt) => Dt.high).concat(E), $ = Math.min(...W) - 1, tt = Math.max(...W) + 1, ft = (Dt) => (1 - (Dt - $) / (tt - $)) * 100, Ot = (Dt) => (Dt + 0.5) / K.length * 100, Lt = K.map((Dt, dt) => [Ot(dt), ft(Dt.high)]), St = Lt.map(([Dt, dt], It) => (It ? "L" : "M") + Dt.toFixed(2) + " " + dt.toFixed(2)).join(""), Vt = '<div class="wbCompareBars wbTrend" aria-hidden="true"><div class="wbTrendPlot"><svg viewBox="0 0 100 100" preserveAspectRatio="none"><defs><linearGradient id="' + M + 'trend" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--primary)" stop-opacity=".28"></stop><stop offset="1" style="stop-color:var(--primary)" stop-opacity="0"></stop></linearGradient></defs><path class="wbTrendArea" d="' + St + "L" + Lt[Lt.length - 1][0].toFixed(2) + " 100L" + Lt[0][0].toFixed(2) + ' 100Z" fill="url(#' + M + 'trend)"></path><line class="wbAvgLine" x1="0" x2="100" y1="' + ft(E).toFixed(2) + '" y2="' + ft(E).toFixed(2) + '" vector-effect="non-scaling-stroke"></line><path class="wbTrendLine" d="' + St + '" vector-effect="non-scaling-stroke"></path></svg><span class="wbTrendAvg" style="top:' + ft(E).toFixed(2) + '%">' + vt(we(s, E)) + "</span>" + K.map((Dt, dt) => {
      const It = Dt.today ? " wbToday" : "", Ft = "left:" + Ot(dt).toFixed(2) + "%;top:" + ft(Dt.high).toFixed(2) + "%";
      return '<i class="wbTrendDot' + It + '" style="' + Ft + '"></i><span class="wbAvgValue' + It + '" style="' + Ft + '">' + vt(we(s, Dt.high)) + "</span>";
    }).join("") + '</div><div class="wbTrendDays">' + K.map((Dt, dt) => '<span class="wbAvgDay' + (Dt.today ? " wbToday" : "") + '" style="left:' + Ot(dt).toFixed(2) + '%">' + vt(Wm(Dt.date, s)) + "</span>").join("") + "</div></div>";
    return ea({
      icon: ne.chartLine,
      name: gt.metrics.compared_to_average,
      double: !0,
      sub: Ze(gt.highsLastDays, { days: m.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (O > 0 ? "+" : "") + vt(we(s, O)) + '</div><div class="wbCompareWords">' + vt(gt.average[F]) + '</div><div class="wbCompareTemps">' + vt(Ze(gt.todayVsAverage, { today: we(s, b), average: we(s, E) })) + "</div></div>" + Vt + "</div>"
    });
  }
  function ds(s, h) {
    const m = Ee(s, h, "humidity");
    if (!m || !ue(m.value)) return "";
    const b = Ee(s, h, "dew_point"), E = Math.max(0, Math.min(100, Number(m.value)));
    return ea({
      icon: ne.waterPercent,
      name: gt.metrics.humidity,
      sub: b && ue(b.value) ? Ze(gt.dewPoint, { dew_point: we(s, b.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + E + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + Pa($t(Math.round(Number(m.value)), s.locale), "%") + "</div>"
    });
  }
  function dn(s, h) {
    var Dt, dt, It;
    const m = Ee(s, h, "pressure");
    if (!m || !ue(m.value)) return "";
    const b = Number(m.value), E = (Dt = m.stateObj.attributes) == null ? void 0 : Dt.pressure_unit, O = Qd(b, E), F = ((dt = U.pressureHistory) == null ? void 0 : dt.entityId) === m.stateObj.entity_id ? Qd(U.pressureHistory.value, E) : void 0;
    let K;
    if (O !== void 0 && F !== void 0) {
      const Ft = O - F;
      K = Ft >= Wd ? "rising" : Ft <= -Wd ? "falling" : "steady";
    }
    const W = ts(s, m.stateObj, "pressure", Math.round(b)), $ = m.stateObj, tt = (Ft) => E === "inHg" ? Math.round(Ft * 100) / 100 : Math.round(Ft), ft = (Ft) => $d(s, $, "pressure", tt(Ft)), Ot = F !== void 0 ? U.pressureHistory.value : void 0, Lt = Ot !== void 0 ? tt(b - Ot) : void 0, St = (It = $.entity_id) != null && It.startsWith("weather.") ? ot("hourly").find((Ft) => ue(Ft.pressure) && new Date(Ft.datetime).getTime() >= Date.now() + 3 * oe - 30 * Ie) : void 0, Vt = [
      ...K ? [gt.advice[K]] : [],
      ...Ot !== void 0 ? [[gt.callout.hoursAgo, ft(Ot)], [gt.callout.change, (Lt > 0 ? "+" : Lt < 0 ? "−" : "") + ft(Math.abs(Lt))]] : [],
      ...St ? [[gt.callout.inHours, ft(Number(St.pressure))]] : []
    ];
    return ea({
      icon: ne.gauge,
      name: gt.metrics.pressure,
      sub: K ? gt.pressure[K] : void 0,
      cls: "wbPressure",
      callouts: Vt,
      zone: '<div class="wbTapeRow"><div class="wbTapeValue">' + Pa(W.number) + '<span class="wbTapeUnit">' + vt(W.unit) + "</span></div>" + (O !== void 0 ? mr(s, O) : "") + "</div>"
    });
  }
  function mr(s, h) {
    const E = Math.floor(h) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (O, F) => E + F).map((O) => {
      const F = 100 - (O - h) * 9;
      if (F < 22 || F > 178) return "";
      const K = O % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(F - 100) / 100) + '"><line class="wbTapeTick" x1="' + (K ? 2 : 8) + '" x2="26" y1="' + F + '" y2="' + F + '"></line>' + (K ? '<text class="wbTapeLabel" x="33" y="' + F + '">' + vt($t(O, s.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + vt(gt.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + vt(gt.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function Rn(s) {
    var W, $;
    const h = Nl(s), m = h ? s.states[h] : void 0;
    if (!m || ((W = U.rain) == null ? void 0 : W.entityId) !== h || !ue(U.rain.change)) return "";
    const b = (($ = m.attributes) == null ? void 0 : $.unit_of_measurement) ?? "", E = st(s, "hourly"), O = Date.now() + ha, F = ot("hourly").filter((tt) => tt.precipitation != null && new Date(tt.datetime).getTime() <= O), K = F.reduce((tt, ft) => tt + Number(ft.precipitation), 0);
    return ea({
      icon: ne.rainy,
      name: gt.metrics.precipitation,
      sub: E && F.length ? Ze(gt.rainExpected, { amount: $t(K, s.locale, { maximumFractionDigits: 1 }) + " " + rn(s, E, "precipitation") }) : gt.rainLast24h,
      visual: Pa($t(U.rain.change, s.locale, { maximumFractionDigits: 1 }), b) + (F.length > 1 ? c0(F.map((tt) => ({ label: "", value: Number(tt.precipitation) }))) : "")
    });
  }
  function ai(s, h) {
    const m = Ee(s, h, "visibility");
    if (!m || !ue(m.value)) return "";
    const b = ts(s, m.stateObj, "visibility", m.value), E = tm(Number(m.value), rn(s, m.stateObj, "visibility"));
    return ea({
      icon: ne.eyeOutline,
      name: gt.metrics.visibility,
      sub: gt.visibilityLevel[em(E)],
      visual: '<div class="wbSea"><canvas class="wbSeaArt" data-wb-sea="' + E + '" aria-hidden="true"></canvas><div class="wbSeaFact">' + vt(ps(s, E)) + '</div><div class="wbSeaValue">' + Pa(b.number, b.unit) + "</div></div>"
    });
  }
  function ps(s, h) {
    var O;
    const m = Qh((O = s.config) == null ? void 0 : O.country, h);
    if (m) return Ze(gt.visibilityLandmarks, { from: m.from, to: m.to });
    const b = h / Sm * 60;
    if (b < 60) {
      const F = b < 5 ? Math.max(1, Math.round(b)) : 5 * Math.round(b / 5);
      if (F < 60) return Ze(gt.walkMinutes, { minutes: $t(F, s.locale) });
    }
    const E = Math.max(1, Math.round(b / 30) / 2);
    return E < 8 ? Ze(gt.walkHours, { hours: $t(E, s.locale) }) : gt.walkDay;
  }
  function us(s) {
    U.categories === void 0 && Ka(s);
    const h = De(s), m = (W) => W.map(($) => s.states[$]).filter(Bn), b = m(h.air), E = m(h.pollen);
    if (!b.length && !E.length) return "";
    const O = [...b, ...E], F = (W) => E.includes(W) ? ne.flower : ne.airFilter, K = O.find((W) => W.entity_id === lt.aq);
    return K ? mo(s, K, F(K)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + vt(gt.airQuality) + '</h2></div><div class="wbAqTiles">' + O.map((W) => '<button class="wbTile" data-wb="aq-open" data-entity="' + vt(W.entity_id) + '"><span class="wbChip">' + No(F(W)) + '</span><span class="wbText"><span class="wbName">' + vt(on(s, W)) + '</span><span class="wbSub">' + vt(Ro(s, W)) + "</span></span></button>").join("") + "</div></div>";
  }
  function mo(s, h, m) {
    var tt, ft, Ot;
    const b = ((tt = h.attributes) == null ? void 0 : tt.unit_of_measurement) ?? "", E = ((ft = h.attributes) == null ? void 0 : ft.device_class) === "pm25" && b === Gd && ue(h.state), O = Number(h.state), F = E ? Gi(O) : void 0, K = ((Ot = U.aqHistory) == null ? void 0 : Ot.entityId) === h.entity_id ? U.aqHistory.points : void 0, W = (Lt) => Math.min(100, Math.max(0, Lt / zi * 100));
    let $;
    if (K && K.length > 1) $ = ap(K, (Lt) => ($t(Lt, s.locale, { maximumFractionDigits: 1 }) + " " + b).trim());
    else if (F) {
      let Lt = 0;
      const St = Jp.map(([Vt, Dt]) => {
        const dt = W(Math.min(Dt, zi)), It = zd[Vt] + " " + Lt + "% " + dt + "%";
        return Lt = dt, It;
      });
      $ = '<div class="wbScale" role="meter" aria-label="' + vt(gt.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + zi + '" aria-valuenow="' + O + '" style="background:linear-gradient(to right, ' + St.join(", ") + ')"><i style="left:' + W(O) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + zi + " " + Gd + "</span></div>";
    } else $ = '<span class="wbGraphNote"><span>' + vt(Ro(s, h)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + No(m) + '</span><span class="wbText"><span class="wbName">' + vt(on(s, h)) + '</span><span class="wbSub">' + vt(Ro(s, h)) + (F ? " · " + vt(gt.aqLevel[F]) : "") + '</span></span><button class="wbBack" title="' + vt(gt.back) + '" data-wb="aq-close">' + No(ne.back) + '</button></div><div class="wbGraph">' + $ + "</div></div></div>";
  }
  const fs = { good: "Good", fair: "Fair", moderate: "Moderate", poor: "Poor", very_poor: "Very poor", extremely_poor: "Extremely poor" }, jo = (s) => s <= 50 ? "Good" : s <= 100 ? "Moderate" : s <= 150 ? "Unhealthy for some" : s <= 200 ? "Unhealthy" : s <= 300 ? "Very unhealthy" : "Hazardous";
  function $e(s) {
    const h = /* @__PURE__ */ new Map();
    return Object.values(s.states || {}).filter((m) => {
      var b;
      return m.entity_id.startsWith("sensor.") && os.includes(((b = m.attributes) == null ? void 0 : b.device_class) ?? "") && Bn(m) && lr(s, m.entity_id);
    }).sort((m, b) => m.entity_id.localeCompare(b.entity_id)).forEach((m) => {
      h.has(m.attributes.device_class) || h.set(m.attributes.device_class, m);
    }), os.map((m) => h.get(m)).filter(Boolean);
  }
  const zo = (s) => Object.values(s.states || {}).filter((h) => {
    var m, b;
    return h.entity_id.startsWith("sensor.") && Bn(h) && lr(s, h.entity_id) && (((b = (m = s.entities) == null ? void 0 : m[h.entity_id]) == null ? void 0 : b.translation_key) ?? h.entity_id).toLowerCase().includes("pollen");
  }), Ia = ["none", "very_low", "low", "moderate", "high", "very_high"], Go = (s) => ue(s.state) ? Number(s.state) : Ia.indexOf(String(s.state).toLowerCase().replace(/ /g, "_")), ma = (s) => {
    const h = String(s).replace(/_/g, " ");
    return h[0].toUpperCase() + h.slice(1);
  }, Uo = (s, h, m) => {
    const b = m ? s === "aqi" ? h <= 50 ? "good" : h <= 100 ? "moderate" : "poor" : s === "pm25" ? Gi(h) : null : null;
    return b === "good" || b === "fair" ? gt.advice.window : b === "moderate" || b === null ? gt.advice.fine : gt.advice.closed;
  }, gr = ["good", "fair", "moderate", "poor", "very_poor", "extremely_poor"], Re = (s) => gr[s <= 50 ? 0 : s <= 100 ? 1 : s <= 150 ? 2 : s <= 200 ? 3 : s <= 300 ? 4 : 5], Yo = "M43 43q1 8 0 10M77 42q1 8 -1 10", Qa = {
    good: [Yo, "M34 69Q61 98 86 67"],
    fair: [Yo, "M40 74Q61 89 81 72"],
    moderate: [Yo, "M41 79Q60 76 80 81"],
    poor: [Yo, "M41 85Q60 73 80 86"],
    very_poor: ["M36 38l13 5M84 37l-13 5M43 48q1 7 0 9M77 47q1 7 -1 9", "M37 90Q60 64 84 89"],
    extremely_poor: ["M37 41l12 11M49 41l-12 11M71 40l12 11M83 40l-12 11", "M36 84q6 -8 12 0t12 0t12 0t12 0"]
  }, oi = (s) => '<svg class="wbAqFace" viewBox="0 0 120 120" aria-hidden="true"><path d="M60 9C89 8 112 32 110 61C109 90 87 112 58 111C30 110 9 88 10 59C11 31 33 10 63 12"></path><path class="wbAqEyes" d="' + Qa[s][0] + '"></path><path d="' + Qa[s][1] + '"></path></svg>';
  function ni(s) {
    const h = $e(s), m = h[0];
    if (!m) return ea({ icon: ne.airFilter, name: gt.airQuality, sub: gt.noAir, visual: Pa("–", ""), cls: "wbBase" });
    const b = m.attributes.device_class, E = Number(m.state), O = ue(m.state), F = b === "aqi" && O ? jo(E) : b === "pm25" && O ? fs[Gi(E)] : Ro(s, m), K = O ? $t(Math.round(E), s.locale) : String(m.state), W = b === "aqi" ? "AQI" : m.attributes.unit_of_measurement || "", $ = O && b === "aqi" ? Re(E) : O && b === "pm25" ? Gi(E) : null;
    return ea($ ? {
      icon: ne.airFilter,
      name: gt.airQuality,
      sub: F,
      cls: "wbAqSmile",
      zone: '<div class="wbAqFill" style="background:' + zd[$] + '">' + oi($) + '<div class="wbAqBig"><span class="wbAqNum">' + vt(K) + "</span>" + (W ? '<span class="wbAqUnit">' + vt(W) + "</span>" : "") + "</div></div>" + Ui(Pa(K, W)),
      callouts: [Uo(b, E, O), ...h.slice(1, 3).map((tt) => [on(s, tt), Ro(s, tt)])]
    } : {
      icon: ne.airFilter,
      name: gt.airQuality,
      sub: F,
      cls: "wbBase",
      zone: Pa(K, W),
      callouts: [Uo(b, E, O), ...h.slice(1, 3).map((tt) => [on(s, tt), Ro(s, tt)])]
    });
  }
  const hs = [
    ["wbSeed", '<svg viewBox="0 0 22 30" aria-hidden="true"><path d="M11 28V11" fill="none" stroke="currentColor" stroke-width="1"></path><path d="M11 11L3 6M11 11L5 2.5M11 11L8.5 1M11 11L13.5 1M11 11L17 2.5M11 11L19 6" fill="none" stroke="currentColor" stroke-width=".8" stroke-linecap="round"></path><circle cx="11" cy="28.5" r="1.4" fill="currentColor"></circle></svg>'],
    ["wbGrain", '<svg viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="3.3" fill="currentColor"></circle><path d="M6 1.2v1.4M6 9.4v1.4M1.2 6h1.4M9.4 6h1.4M2.6 2.6l1 1M8.4 8.4l1 1M2.6 9.4l1-1M8.4 3.6l1-1" stroke="currentColor" stroke-width=".9" stroke-linecap="round"></path></svg>'],
    ["wbStem", '<svg viewBox="0 0 10 30" aria-hidden="true"><path d="M5 29Q3.6 18 5 8" fill="none" stroke="currentColor" stroke-width="1"></path><ellipse cx="5" cy="6" rx="2.3" ry="4.6" fill="currentColor"></ellipse></svg>']
  ], ms = (s) => {
    const h = [1, 3, 5, 7, 10, 13][Math.max(0, Math.min(5, Number.isFinite(s) ? Math.round(s) : 0))];
    return '<div class="wbPollenAir" aria-hidden="true">' + Array.from({ length: h }, (m, b) => {
      const [E, O] = hs[b % 3], F = 10 + b * 7 % 9, K = 2.6 + b * 5 % 4 * 0.4;
      return '<span class="wbFloat ' + E + '" style="top:' + (4 + b * 37 % 52) + "%;--x:" + (b * 29 % 90 + 4) + "%;--s:" + (0.8 + b * 13 % 5 / 10).toFixed(1) + ";animation-duration:" + F + "s;animation-delay:-" + (b * 2.3 % F).toFixed(1) + 's"><span class="wbPush"><span class="wbBob" style="animation-duration:' + K.toFixed(1) + "s;animation-delay:-" + (b * 0.7 % K).toFixed(1) + 's">' + O + "</span></span></span>";
    }).join("") + "</div>";
  };
  function gs(s) {
    const h = zo(s).sort((E, O) => Go(O) - Go(E));
    if (!h.length) return ea({ icon: ne.flower, name: gt.pollen, sub: gt.noPollen, visual: Pa("–", ""), cls: "wbBase" });
    const m = h[0], b = (E) => ue(E.state) ? Ro(s, E) : ma(E.state);
    return ea({
      icon: ne.flower,
      name: gt.pollen,
      sub: on(s, m) + " · " + b(m),
      cls: "wbBase wbPollen",
      zone: ms(Go(m)) + Pa(b(m), ""),
      callouts: h.slice(0, 3).map((E) => [on(s, E), b(E)])
    });
  }
  function Pn(s) {
    var K;
    const h = Date.now(), m = ot("hourly").filter((W) => {
      const $ = new Date(W.datetime).getTime();
      return $ > h - oe && $ < h + 12 * oe;
    }), b = m.find((W) => (W.precipitation_probability ?? 0) >= 50 || (W.precipitation ?? 0) >= 0.2), E = b ? Ze(gt.rainFrom, { time: Ge(new Date(Math.max(h, new Date(b.datetime).getTime())), s) }) : m.length ? gt.noRain12 : void 0, O = (V == null ? void 0 : V()) || "rainviewer";
    let F;
    if (O.startsWith("camera:")) {
      const W = s.states[O.slice(7)], $ = W && W.state !== "unavailable" && ((K = W.attributes) == null ? void 0 : K.entity_picture);
      F = $ ? '<div class="wbRadar wbRadarCam" aria-hidden="true"><img class="wbRadarImg" src="' + vt($) + '" data-src="' + vt($) + '" alt=""></div>' : '<div class="wbRadar" aria-hidden="true"><span class="wbRadarNote">' + vt(gt.cameraOff) + "</span></div>";
    } else {
      const W = sr(s);
      F = W ? '<div class="wbRadar wbRadarMap" aria-hidden="true" data-lat="' + W.lat + '" data-lon="' + W.lon + '"><i class="wbRadarHome"></i></div>' : '<div class="wbRadar" aria-hidden="true"><i class="wbRadarRing"></i><i class="wbRadarHome"></i><span class="wbRadarNote">' + vt(gt.noLocation) + "</span></div>";
    }
    return ea({ icon: ne.radar, name: gt.rainRadar, sub: E, cls: "wbBase wbRadarTile", visual: F });
  }
  const ri = {
    current: zt,
    hourly: ur,
    sun: jt,
    moon: ti,
    wind: ls,
    uv_index: Vo,
    compared_to_average: ei,
    humidity: ds,
    pressure: dn,
    precipitation: Rn,
    visibility: ai,
    air_quality: us,
    aq_tile: ni,
    pollen_tile: gs,
    radar_tile: Pn
  }, br = [["day", "Last 24 hours", 1], ["week", "Last 7 days", 7], ["month", "Last 30 days", 30]], pn = (s, h) => {
    var m;
    return h.toLocaleDateString((m = s.locale) == null ? void 0 : m.language, { day: "numeric", month: "short" });
  }, he = (s) => {
    const h = new Date(s);
    return h.setMinutes(h.getMinutes() - h.getTimezoneOffset()), h.toISOString().slice(0, 10);
  }, ga = () => {
    const s = lt.range, h = Date.now();
    if (s.preset !== "custom") {
      const E = br.find(([O]) => O === s.preset)[2];
      return [h - E * ha, h];
    }
    const m = sn(/* @__PURE__ */ new Date(s.from + "T00:00")).getTime(), b = Math.min(h, sn(/* @__PURE__ */ new Date(s.to + "T00:00")).getTime() + ha);
    return [Math.min(m, b - oe), b];
  }, Et = (s) => {
    const h = lt.range;
    if (h.preset !== "custom") return br.find(([E]) => E === h.preset)[1];
    const [m, b] = ga();
    return h.from === h.to ? pn(s, new Date(m)) : pn(s, new Date(m)) + " – " + pn(s, new Date(b - 1));
  }, go = () => lt.range.preset === "custom" ? lt.range.from + "_" + lt.range.to : lt.range.preset, Zo = (s, h) => h - s <= 2 * ha, wr = (s, h, m, b) => Zo(m, b) ? Ge(h, s) : pn(s, h), bo = (s, h = 60) => {
    const m = Math.max(1, Math.ceil(s.length / h));
    return s.filter((b, E) => E % m === 0 || E === s.length - 1);
  }, ii = (s, h, m, b, E = !1) => s.callWS({
    type: "history/history_during_period",
    start_time: new Date(m).toISOString(),
    end_time: new Date(b).toISOString(),
    entity_ids: [h],
    minimal_response: E,
    no_attributes: E,
    significant_changes_only: !1
  }), Ko = (s) => async (h, m, b, E) => {
    const O = Ee(h, m, s);
    if (!O) return [];
    const F = O.stateObj.entity_id, K = await ii(h, F, b, E);
    return bo(((K == null ? void 0 : K[F]) ?? []).map((W) => {
      var ft;
      const $ = ((ft = W.a) == null ? void 0 : ft[s]) ?? (ue(W.s) ? Number(W.s) : void 0), tt = (W.lu ?? W.lc) * 1e3;
      return typeof $ == "number" && tt >= b && tt <= E ? { t: new Date(tt), value: $ } : null;
    }).filter(Boolean)).map((W) => ({ label: wr(h, W.t, b, E), value: W.value }));
  }, si = (s, h) => async (m, b, E, O) => {
    const F = s(m);
    if (!F) return [];
    const K = F.entity_id, W = await ii(m, K, E, O, !0);
    return bo(((W == null ? void 0 : W[K]) ?? []).map(($) => {
      const tt = h($.s), ft = $.lu * 1e3;
      return tt == null || !Number.isFinite(tt) || ft < E || ft > O ? null : { t: new Date(ft), value: tt };
    }).filter(Boolean)).map(($) => ({ label: wr(m, $.t, E, O), value: $.value }));
  }, un = (s, h) => async (m, b, E, O) => {
    const F = sr(m);
    if (!F) return [];
    const K = [];
    if (Zo(E, O)) for (let W = E; W <= O; W += oe / 2) K.push({ label: Ge(new Date(W), m), value: s(new Date(W), F) });
    else for (let W = O; W >= E; W -= ha) {
      const $ = new Date(W), tt = h($, F, m);
      tt != null && K.unshift({ label: pn(m, $), value: tt });
    }
    return bo(K);
  }, fn = (s) => zo(s).sort((h, m) => Go(m) - Go(h))[0], ra = (s, h, m) => {
    const b = Ee(s, h, m);
    return b ? rn(s, b.stateObj, m) : "";
  }, hn = {
    current: { name: () => gt.modes.temperature, icon: () => ne.sunny, load: Ko("temperature"), fmt: (s, h, m) => we(s, m), now: (s, h) => {
      var m;
      return we(s, (m = Ee(s, h, "temperature")) == null ? void 0 : m.value);
    } },
    sun: {
      name: () => gt.sun,
      icon: () => ne.sunny,
      load: un((s, h) => Math.round(rs(s, h.lat, h.lon) / oa), (s, h, m) => {
        const b = or(m, s);
        return b.rise && b.set ? Math.round((b.set - b.rise) / oe * 10) / 10 : null;
      }),
      fmt: (s, h, m, b) => b ? $t(m, s.locale) + "°" : $t(m, s.locale) + " h",
      sub: (s) => s ? "How high the sun was" : "Hours of daylight a day"
    },
    moon: {
      name: () => gt.moon,
      icon: () => ne.night,
      load: un((s) => Math.round(Hl(s).fraction * 100), (s) => Math.round(Hl(s).fraction * 100)),
      fmt: (s, h, m) => $t(m, s.locale) + "%",
      sub: () => "How much of it was lit"
    },
    uv_index: { name: () => gt.metrics.uv_index, icon: () => ne.sunnyAlert, load: Ko("uv_index"), fmt: (s, h, m) => $t(Math.round(m * 10) / 10, s.locale), now: (s, h) => {
      const m = Ee(s, h, "uv_index");
      return m ? $t(Number(m.value), s.locale) : "";
    } },
    humidity: { name: () => gt.metrics.humidity, icon: () => ne.waterPercent, load: Ko("humidity"), fmt: (s, h, m) => $t(Math.round(m), s.locale) + "%", now: (s, h) => {
      const m = Ee(s, h, "humidity");
      return m ? $t(Math.round(Number(m.value)), s.locale) + "%" : "";
    } },
    pressure: { name: () => gt.metrics.pressure, icon: () => ne.gauge, load: Ko("pressure"), fmt: (s, h, m) => $t(Math.round(m), s.locale) + " " + ra(s, h, "pressure"), now: (s, h) => {
      const m = Ee(s, h, "pressure");
      return m ? $t(Math.round(Number(m.value)), s.locale) + " " + ra(s, h, "pressure") : "";
    } },
    wind: { name: () => gt.wind, icon: () => ne.windy, load: Ko("wind_speed"), fmt: (s, h, m) => $t(Math.round(m), s.locale) + " " + ra(s, h, "wind_speed"), now: (s, h) => {
      const m = Ee(s, h, "wind_speed");
      return m ? $t(Math.round(Number(m.value)), s.locale) + " " + ra(s, h, "wind_speed") : "";
    } },
    visibility: { name: () => gt.metrics.visibility, icon: () => ne.eyeOutline, load: Ko("visibility"), fmt: (s, h, m) => $t(Math.round(m * 10) / 10, s.locale) + " " + ra(s, h, "visibility"), now: (s, h) => {
      const m = Ee(s, h, "visibility");
      return m ? $t(Number(m.value), s.locale) + " " + ra(s, h, "visibility") : "";
    } },
    aq_tile: {
      name: (s) => $e(s)[0] ? on(s, $e(s)[0]) : gt.airQuality,
      icon: () => ne.airFilter,
      load: si((s) => $e(s)[0], (s) => ue(s) ? Number(s) : null),
      fmt: (s, h, m) => {
        var O, F;
        const b = $e(s)[0], E = (O = b == null ? void 0 : b.attributes) == null ? void 0 : O.device_class;
        return $t(Math.round(m * 10) / 10, s.locale) + (E === "aqi" ? " AQI" : (F = b == null ? void 0 : b.attributes) != null && F.unit_of_measurement ? " " + b.attributes.unit_of_measurement : "");
      },
      now: (s) => {
        const h = $e(s)[0];
        return h ? Ro(s, h) : "";
      }
    },
    pollen_tile: {
      name: (s) => fn(s) ? on(s, fn(s)) : gt.pollen,
      icon: () => ne.flower,
      load: si(fn, (s) => {
        const h = Go({ state: s });
        return h < 0 ? null : h;
      }),
      fmt: (s, h, m) => ma(Ia[Math.round(m)] || ""),
      now: (s) => {
        const h = fn(s);
        return h ? ma(h.state) : "";
      }
    }
  }, to = {};
  let ba = null;
  async function ia(s) {
    const h = r == null ? void 0 : r();
    if (!h || !hn[s]) return;
    const m = s + "|" + go(), [b, E] = ga();
    if (to[m] && Date.now() - to[m].at < 5 * Ie) return;
    to[m] = { at: Date.now(), points: null };
    try {
      to[m].points = await hn[s].load(h, Ct(h), b, E);
    } catch {
      to[m].points = [];
    }
    Ne(!0), ba === s && lt.graph === s && (ba = null, Od(G.querySelector(".wbGraphCard")));
    const O = lt.graph === s && G.querySelector(".wbGraph .wbChart");
    O && Kp(O, O.querySelector(".wbLine"), O.querySelectorAll(".wbArea"));
  }
  function li(s, h) {
    const m = lt.range, b = he(Date.now()), [E, O] = ga(), F = m.pickFrom || he(E), K = m.pickTo || he(O - 1);
    return '<div class="wbRangePick" role="dialog" aria-label="Choose date range"><div class="wbRangePresets">' + br.map(([W, $]) => '<button class="wbRangePreset" aria-pressed="' + (m.preset === W) + '" data-wb="graph-preset" data-range="' + W + '" data-wb-focus="graph-preset-' + W + '">' + vt($) + "</button>").join("") + '</div><div class="wbRangeDates"><label><span>From</span><input type="date" data-range-from value="' + F + '" max="' + b + '"></label><label><span>To</span><input type="date" data-range-to value="' + K + '" max="' + b + '"></label></div><button class="wbRangeApply" data-wb="graph-apply" data-wb-focus="graph-apply">Show these dates</button></div>';
  }
  function ci(s, h, m) {
    var ft;
    const b = hn[m], [E, O] = ga(), F = Zo(E, O), K = (ft = to[m + "|" + go()]) == null ? void 0 : ft.points, W = Math.max(120, Math.min(520, innerWidth - (innerWidth <= 620 ? 0 : 32)) - 2 * 18 - 32), tt = K ? K.length > 1 ? ap(K, (Ot) => b.fmt(s, h, Ot, F), 220, W) : '<span class="wbGraphNote"><span>No history for these dates</span></span>' : '<span class="wbGraphNote"><span>Loading…</span></span>';
    return '<div class="wbPopupBox"><div class="wbCard wbSquare wbGraphCard" role="dialog" aria-modal="true" aria-label="' + vt(b.name(s)) + '"><div class="wbHead"><div class="wbChip wbPlain">' + Qp(b.icon(s)) + '</div><div class="wbText"><span class="wbName">' + vt(b.name(s)) + '</span><span class="wbSub">' + vt(b.sub ? b.sub(F) : b.now ? b.now(s, h) : "") + '</span></div><button class="wbBack" title="Close" data-wb="graph-close" data-wb-focus="graph-close">' + No(ne.close) + '</button></div><button class="wbRangeBtn" aria-haspopup="dialog" aria-expanded="' + !!lt.picking + '" title="Choose date range" data-wb="graph-pick" data-wb-focus="graph-pick">' + No(ne.calendar) + "<span>" + vt(Et(s)) + "</span>" + No(ne.chevronDown) + '</button><div class="wbGraph">' + tt + "</div></div>" + (lt.picking ? li() : "") + "</div>";
  }
  function Ne(s) {
    var Ot, Lt, St, Vt, Dt;
    const h = r == null ? void 0 : r();
    if (!h || nt) return;
    const m = Ct(h);
    Mt(h, m), U.lastFetch || ho();
    const b = De(h), E = tp(h), O = Nl(h), F = [
      ...m.map((dt) => h.states[dt]),
      h.states["sun.sun"],
      E && h.states[E],
      O && h.states[O],
      ...b.air.map((dt) => h.states[dt]),
      ...b.pollen.map((dt) => h.states[dt]),
      ...et.some((dt) => J.includes(dt)) ? [...$e(h), ...zo(h)] : [],
      h.locale,
      h.config,
      h.entities,
      Math.floor(Date.now() / Ie)
    ];
    if (!s && ct && F.length === ct.length && F.every((dt, It) => dt === ct[It])) return;
    ct = F;
    const K = D.getRootNode(), W = K.activeElement || document.activeElement;
    for (const dt of et) {
      const It = N[dt];
      let Ft = "";
      try {
        Ft = ri[dt](h, m) || "";
      } catch {
        Ft = "";
      }
      if (Ft === It.html) continue;
      const me = W && It.el.contains(W) ? (Ot = W.dataset) == null ? void 0 : Ot.wbFocus : void 0, _t = It.el.querySelector(".wbStripScroll"), ae = _t ? _t.scrollLeft : null;
      It.html = Ft, It.el.hidden = !Ft, It.el.innerHTML = Ft;
      const de = It.el.querySelector(".wbStripScroll");
      de && ae != null ? de.scrollTo({ left: ae }) : de != null && de.dataset.start && de.scrollTo({ left: Number(de.dataset.start) * de.clientWidth / Number(de.dataset.span) }), me && !Y && ((Lt = It.el.querySelector('[data-wb-focus="' + me + '"]')) == null || Lt.focus());
    }
    let $ = "";
    if (lt.graph)
      try {
        $ = ci(h, m, lt.graph) || "";
      } catch {
        $ = "";
      }
    if ($ !== H) {
      const dt = W && G.contains(W) ? (St = W.dataset) == null ? void 0 : St.wbFocus : void 0;
      H = $, G.innerHTML = $, G.hidden = !$, $ && !G.isConnected && (D.closest("#app") || D).appendChild(G), dt && !Y && ((Vt = G.querySelector('[data-wb-focus="' + dt + '"]')) == null || Vt.focus({ preventScroll: !0 }));
    }
    ss(), D.querySelectorAll(".wbRadarMap").forEach((dt) => {
      dt._tiles || $o(dt);
    }), Y && ((Dt = D.querySelector('[data-wb-focus="' + Y + '"]') || G.querySelector('[data-wb-focus="' + Y + '"]')) == null || Dt.focus({ preventScroll: !0 }), Y = null);
    let tt = !1, ft = !1;
    for (const dt of et) {
      const It = N[dt], Ft = !It.el.hidden, me = at[dt] === "wide" || X.includes(dt), _t = et.indexOf(dt) >= et.indexOf("moon"), ae = Ft && (_t && me && !tt || !me && !ft);
      ae && me && (tt = !0), ae && !me && (ft = !0), It.el.toggleAttribute("data-break", ae);
    }
    wa(performance.now());
  }
  function mn() {
    Z || nt || (Z = !0, queueMicrotask(() => {
      Z = !1, Ne(!0);
    }));
  }
  function di() {
    const s = getComputedStyle(D), h = (F) => s.getPropertyValue(F).trim(), m = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([F, K]) => {
      h(K) && (m[F] = h(K));
    });
    const b = h("--color-text-primary") || "#f1f1f1", E = h("--color-bg-card") || "#222222", O = !!D.closest(".light");
    return { colors: { ...Oa, ...m }, ink: O ? b : E, paper: O ? E : b };
  }
  const vr = (s, h) => {
    var m;
    s.width !== h.w && (s.width = h.w), s.height !== h.h && (s.height = h.h), (m = s.getContext("2d")) == null || m.putImageData(new ImageData(h.data, h.w, h.h), 0, 0);
  }, eo = () => g && !Im();
  function pi(s, h) {
    D.querySelectorAll("canvas[data-wb-strip]").forEach((m) => yr(m, Q[m.dataset.wbStrip], s, h));
  }
  function yr(s, h, m, b) {
    if (!h || !s.getClientRects().length) return;
    const E = s.clientWidth, O = s.clientHeight;
    if (!E || !O) return;
    const F = { width: E, height: O, columns: h.columns || Id, colors: b.colors, clock: m, ambient: eo(), seed: h.seed, soft: 1.5 };
    if (p === "smooth") {
      const K = Math.min(2, window.devicePixelRatio || 1), W = Math.round(E * K), $ = Math.round(O * K);
      s.width !== W && (s.width = W), s.height !== $ && (s.height = $);
      const tt = s.getContext("2d");
      if (!tt) return;
      tt.setTransform(K, 0, 0, K, 0, 0), Hh(tt, h.segs, F);
    } else vr(s, Ph(h.segs, { ...F, px: 2, oneBit: p === "onebit", ink: b.ink, paper: b.paper }));
  }
  function wa(s) {
    if (nt) return;
    const h = di();
    if (p !== "smooth") {
      const m = eo();
      D.querySelectorAll("canvas[data-wb-wx]").forEach((b) => {
        b.getClientRects().length && vr(b, wh(uh(b.dataset.wbWx, h.colors), { size: Number(b.dataset.size) || 40, px: 2, oneBit: p === "onebit", colors: h.colors, ink: h.ink, paper: h.paper, clock: s, idle: m }));
      });
    }
    D.querySelectorAll("canvas[data-wb-sea]").forEach((m) => {
      const b = m.clientWidth, E = m.clientHeight, O = Number(m.dataset.wbSea), F = b + "x" + E + ":" + O + ":" + h.colors.skyClearDay;
      !b || !E || !(O > 0) || m.dataset.painted === F || (m.dataset.painted = F, vr(m, Xh(b, E, O, h.colors)));
    }), pi(s, h);
  }
  function ui(s) {
    if (wt = 0, !(nt || !eo())) {
      if (!document.hidden)
        if (p === "smooth") pi(s, di());
        else {
          const h = Math.floor(s / 100);
          h !== it && (it = h, wa(s));
        }
      wt = requestAnimationFrame(ui);
    }
  }
  function Xo() {
    D.classList.toggle("wbMotion", eo()), !wt && !nt && eo() && (wt = requestAnimationFrame(ui));
  }
  function Hn(s) {
    var m, b, E, O, F, K, W;
    if (s.target === G) {
      lt.graph = void 0, lt.picking = !1, Ne(!0);
      return;
    }
    const h = (b = (m = s.target).closest) == null ? void 0 : b.call(m, "[data-wb]");
    if (!h || !(D.contains(h) || G.contains(h))) {
      const $ = (O = (E = s.target).closest) == null ? void 0 : O.call(E, ".wbItem"), tt = $ == null ? void 0 : $.dataset.card;
      if (!$ || !D.contains($) || !hn[tt] || lt.graph === tt || D.closest(".tfEditing") || tt === "current" && w) return;
      lt.graph = tt, lt.picking = !1, Y = "graph-close", Ne(!0), (F = to[tt + "|" + go()]) != null && F.points ? Od(G.querySelector(".wbGraphCard")) : ba = tt, ia(tt);
      return;
    }
    switch (h.dataset.wb) {
      case "day": {
        lt.openDay = Number(h.dataset.index), lt.opener = h.dataset.wbFocus, Y = "back-day";
        const $ = Kt()[lt.openDay], tt = !U.todayHistory || U.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - U.todayHistory.fetched > fm;
        $ && ar(new Date($.datetime), /* @__PURE__ */ new Date()) && tt && ln();
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
          localStorage.setItem(yt, lt.hourlyView);
        } catch {
        }
        break;
      case "hours-day": {
        const $ = D.querySelector(".wbStripScroll");
        $ && $.scrollTo({ left: Number(h.dataset.hours) * $.clientWidth / Number($.dataset.span), behavior: "smooth" });
        return;
      }
      case "aq-open":
        lt.aq = h.dataset.entity, qo(lt.aq);
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
        lt.range = { preset: h.dataset.range }, lt.picking = !1, Y = "graph-pick", Ne(!0), ia(lt.graph);
        return;
      case "graph-apply": {
        let $ = lt.range.pickFrom || ((K = D.querySelector("[data-range-from]")) == null ? void 0 : K.value), tt = lt.range.pickTo || ((W = D.querySelector("[data-range-to]")) == null ? void 0 : W.value);
        if (!$ || !tt) return;
        $ > tt && ([$, tt] = [tt, $]), lt.range = { preset: "custom", from: $, to: tt }, lt.picking = !1, Y = "graph-pick", Ne(!0), ia(lt.graph);
        return;
      }
      default:
        return;
    }
    Ne(!0);
  }
  function Ye(s) {
    var h, m, b, E, O, F;
    s.key === "Escape" && lt.openDay !== void 0 && ((m = (h = s.target).closest) != null && m.call(h, '[data-wb-open="day"]')) ? (lt.openDay = void 0, Y = lt.opener, lt.opener = void 0, Ne(!0)) : s.key === "Escape" && lt.picking && ((E = (b = s.target).closest) != null && E.call(b, ".wbGraphCard")) ? (lt.picking = !1, Y = "graph-pick", Ne(!0)) : s.key === "Escape" && lt.graph && ((F = (O = s.target).closest) != null && F.call(O, ".wbGraphCard")) && (lt.graph = void 0, Ne(!0));
  }
  let _a = null;
  function Nn(s) {
    var m, b;
    const h = (b = (m = s.target).closest) == null ? void 0 : b.call(m, ".wbStripScroll");
    !h || s.button !== 0 || (_a = { startX: s.pageX, left: h.scrollLeft, moved: !1 }, h.classList.add("wbHeld"), window.addEventListener("mousemove", gn), window.addEventListener("mouseup", fi, { once: !0 }));
  }
  function gn(s) {
    const h = D.querySelector(".wbStripScroll");
    if (!_a || !h) return;
    const m = s.pageX - _a.startX;
    !_a.moved && Math.abs(m) > 1 && (_a.moved = !0, h.classList.add("wbDragging")), h.scrollLeft = _a.left - m;
  }
  function fi() {
    _a = null, window.removeEventListener("mousemove", gn);
    const s = D.querySelector(".wbStripScroll");
    if (!s) return;
    s.classList.remove("wbDragging", "wbHeld");
    const h = [...s.querySelectorAll(".wbSnap")];
    if (h.length) {
      const m = h.reduce((b, E) => Math.abs(E.offsetLeft - s.scrollLeft) < Math.abs(b.offsetLeft - s.scrollLeft) ? E : b);
      s.scrollTo({ left: m.offsetLeft, behavior: "smooth" });
    }
  }
  const bn = (s) => {
    var m, b;
    const h = s.target;
    (m = h.matches) != null && m.call(h, "[data-range-from]") ? lt.range.pickFrom = h.value : (b = h.matches) != null && b.call(h, "[data-range-to]") && (lt.range.pickTo = h.value);
  };
  D.addEventListener("change", bn), D.addEventListener("click", Hn), D.addEventListener("keydown", Ye), G.addEventListener("change", bn), G.addEventListener("click", Hn), G.addEventListener("keydown", Ye), D.addEventListener("mousedown", Nn);
  const hi = 64, bs = 30;
  let Ca = null, Fa = 0;
  const wo = () => {
    Fa = 0, D.querySelectorAll(".wbPollen .wbPush").forEach((s) => {
      let h = 0, m = 0;
      if (Ca) {
        const b = s.parentElement.getBoundingClientRect(), E = b.left + b.width / 2 - Ca.x, O = b.top + b.height / 2 - Ca.y, F = Math.hypot(E, O) || 1;
        if (F < hi) {
          const K = (1 - F / hi) * bs;
          h = E / F * K, m = O / F * K;
        }
      }
      s.style.transform = h || m ? "translate(" + h.toFixed(1) + "px," + m.toFixed(1) + "px)" : "";
    }), Ca && (Fa = requestAnimationFrame(wo));
  }, mi = (s) => {
    var m, b;
    if (!((b = (m = s.target).closest) == null ? void 0 : b.call(m, ".wbPollen")) || Fe != null && Fe.matches) {
      Ca && (Ca = null, Fa || (Fa = requestAnimationFrame(wo)));
      return;
    }
    Ca = { x: s.clientX, y: s.clientY }, Fa || (Fa = requestAnimationFrame(wo));
  }, ze = () => {
    Ca = null, Fa || (Fa = requestAnimationFrame(wo));
  };
  D.addEventListener("pointermove", mi), D.addEventListener("pointerleave", ze);
  const sa = typeof ResizeObserver == "function" ? new ResizeObserver(() => wa(performance.now())) : null;
  sa == null || sa.observe(D);
  const Aa = typeof ResizeObserver == "function" ? new ResizeObserver((s) => s.forEach((h) => {
    const m = h.target;
    m._tiles && (m.clientWidth !== m._w || m.clientHeight !== m._h) && $o(m);
  })) : null;
  function $o(s) {
    var F;
    const h = s.clientWidth, m = s.clientHeight;
    if (!h || !m || nt) return;
    const b = Tm(Number(s.dataset.lat), Number(s.dataset.lon), h, m), E = !!((F = D.closest("#app")) != null && F.classList.contains("light")), O = (K) => ' style="left:' + K.left + "px;top:" + K.top + 'px"';
    s._tiles = b, s._w = h, s._h = m, s._frames = null, s._built = Date.now(), s.innerHTML = '<div class="wbRadarLayer wbRadarBase">' + b.map((K) => '<img src="https://' + "abcd"[(K.x + K.y) % 4] + ".basemaps.cartocdn.com/" + (E ? "light_all" : "dark_all") + "/" + $l + "/" + K.x + "/" + K.y + '.png"' + O(K) + ' alt="">').join("") + '</div><div class="wbRadarFrames"></div><i class="wbRadarHome"></i><span class="wbRadarTime"></span><span class="wbRadarCredit">© OpenStreetMap · CARTO · RainViewer</span>', Aa == null || Aa.observe(s), Am().then((K) => {
      !s.isConnected || nt || s._tiles !== b || (s.querySelector(".wbRadarFrames").innerHTML = K.frames.map((W, $) => '<div class="wbRadarLayer wbRadarRain" data-i="' + $ + '" hidden>' + b.map((tt) => '<img src="' + K.host + W.path + "/" + Po + "/" + $l + "/" + tt.x + "/" + tt.y + '/2/1_1.png"' + O(tt) + ' alt="">').join("") + "</div>").join(""), s._frames = K.frames, s._hold = 0, xr(s, K.frames.findLastIndex((W) => W.past)));
    }).catch(() => {
      s.isConnected && (s.querySelector(".wbRadarTime").textContent = gt.radarOff);
    });
  }
  function xr(s, h) {
    const m = s._frames;
    if (!(m != null && m.length)) return;
    s._i = h, s.querySelectorAll(".wbRadarRain").forEach((E) => {
      E.hidden = Number(E.dataset.i) !== h;
    });
    const b = m[h];
    s.querySelector(".wbRadarTime").textContent = Ge(new Date(b.time * 1e3), r == null ? void 0 : r()) + (b.past ? "" : " · " + gt.forecastTag);
  }
  function ws() {
    D.querySelectorAll(".wbRadarMap").forEach((s) => {
      if (!s._frames) return;
      if (Date.now() - s._built > $p) {
        $o(s);
        return;
      }
      if (Fe != null && Fe.matches) return;
      if (s._hold > 0) {
        s._hold -= Vd;
        return;
      }
      const h = s._frames.length - 1, m = s._frames.findLastIndex((E) => E.past), b = s._i >= h ? 0 : s._i + 1;
      xr(s, b), (b === m || b === h) && (s._hold = Cm);
    });
  }
  const gi = () => D.querySelectorAll(".wbRadarImg").forEach((s) => {
    const h = s.dataset.src;
    s.src = h + (h.includes("?") ? "&" : "?") + "hc=" + Date.now();
  }), vo = typeof MutationObserver == "function" ? new MutationObserver(() => D.querySelectorAll(".wbRadarMap").forEach((s) => {
    s._tiles && $o(s);
  })) : null, Mr = D.closest("#app");
  Mr && (vo == null || vo.observe(Mr, { attributes: !0, attributeFilter: ["class"] }));
  const Fe = (Jo = window.matchMedia) == null ? void 0 : Jo.call(window, "(prefers-reduced-motion: reduce)"), bi = () => {
    Xo(), wa(performance.now());
  };
  (On = Fe == null ? void 0 : Fe.addEventListener) == null || On.call(Fe, "change", bi);
  const Je = [
    setInterval(() => {
      Wt = /* @__PURE__ */ new Date(), Ne(!0);
    }, Mm),
    setInterval(() => {
      j = /* @__PURE__ */ new Date(), Ne(!0);
    }, km),
    setInterval(ho, vm),
    setInterval(ws, Vd),
    setInterval(gi, Ie)
  ];
  return Ne(!0), Xo(), {
    update() {
      Ne(!1);
    },
    // a choice in Settings changed (Next hours' window)
    refresh() {
      Ne(!0);
    },
    setStyle(s) {
      !s || s === p || (p = s, D.dataset.style = p, G.dataset.style = p, Ne(!0), Xo());
    },
    destroy() {
      var s;
      cancelAnimationFrame(Fa), D.removeEventListener("pointermove", mi), D.removeEventListener("pointerleave", ze), nt = !0, Je.forEach(clearInterval), wt && cancelAnimationFrame(wt), wt = 0, sa == null || sa.disconnect(), Aa == null || Aa.disconnect(), vo == null || vo.disconnect(), (s = Fe == null ? void 0 : Fe.removeEventListener) == null || s.call(Fe, "change", bi), fi(), D.removeEventListener("click", Hn), D.removeEventListener("change", bn), D.removeEventListener("keydown", Ye), D.removeEventListener("mousedown", Nn), G.removeEventListener("click", Hn), G.removeEventListener("change", bn), G.removeEventListener("keydown", Ye), ["daily", "hourly"].forEach(xt), D.remove(), G.remove();
    }
  };
}
const Ur = "#E1E1E1", rp = "#F7F4F0", Ol = "#03a9f4", te = 14, ee = 172;
let h0 = 0;
const ye = (n) => Math.round(n * 100) / 100, fo = (n, r, d) => Math.max(r, Math.min(d, n)), Fo = (n, r, d, p, g, v) => '<rect x="' + ye(n) + '" y="' + ye(r) + '" width="' + ye(d) + '" height="' + ye(p) + '" fill="' + g + '"' + (v != null ? ' opacity="' + v + '"' : "") + "/>", Il = (n) => n.map((r, d) => (d ? "L" : "M") + ye(r[0]) + " " + ye(r[1])).join("");
function Fl(n) {
  const r = (n == null ? void 0 : n.attributes) || {};
  return r.device_class === "curtain" ? "curtain" : r.device_class === "blind" || r.current_tilt_position != null ? "venetian" : "blind";
}
const nn = [
  [2, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]],
  [6.5, ["#0B0F1C", "#2E7FD6", "#F2743B", "#F1B6C8", 0.95]],
  [9.5, ["#8FC4EC", "#4DA3E8", "#F4FAFF", "#2F7FCF", 0.7]],
  [13, ["#9ED3F6", "#3F97E6", "#FFFFFF", "#2B86D9", 0.65]],
  [17, ["#9FC2E4", "#4A8ED4", "#FFD9B8", "#5E8FD6", 0.75]],
  [19, ["#4B5E86", "#3B86E0", "#FF6A3D", "#B07CE8", 0.95]],
  [21.5, ["#1A2140", "#1F3F7A", "#B4506E", "#3E59A6", 0.8]],
  [26, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]]
];
function m0(n) {
  const r = n < 2 ? n + 24 : n;
  let d = nn[0], p = nn[nn.length - 1];
  for (let T = 0; T < nn.length - 1; T++) if (r >= nn[T][0] && r <= nn[T + 1][0]) {
    d = nn[T], p = nn[T + 1];
    break;
  }
  const g = (r - d[0]) / (p[0] - d[0]), v = g * g * (3 - 2 * g), w = (T, V) => {
    const M = parseInt(T.slice(1), 16), D = parseInt(V.slice(1), 16);
    return "#" + [16, 8, 0].map((I) => Math.round((M >> I & 255) + ((D >> I & 255) - (M >> I & 255)) * v).toString(16).padStart(2, "0")).join("");
  };
  return { top: w(d[1][0], p[1][0]), bot: w(d[1][1], p[1][1]), warm: w(d[1][2], p[1][2]), cool: w(d[1][3], p[1][3]), op: d[1][4] + (p[1][4] - d[1][4]) * v, t: r };
}
function g0(n) {
  const r = parseInt(n.slice(1), 16), d = (r >> 16 & 255) / 255, p = (r >> 8 & 255) / 255, g = (r & 255) / 255, v = Math.max(d, p, g), w = Math.min(d, p, g);
  let T = 0, V = 0;
  const M = (v + w) / 2;
  if (v !== w) {
    const D = v - w;
    V = M > 0.5 ? D / (2 - v - w) : D / (v + w), T = (v === d ? (p - g) / D + (p < g ? 6 : 0) : v === p ? (g - d) / D + 2 : (d - p) / D + 4) / 6;
  }
  return [T * 360, V * 100, M * 100];
}
function pu(n, r, d) {
  r = fo(r, 0, 100) / 100, d = fo(d, 0, 100) / 100;
  const p = (w) => (w + n / 30) % 12, g = r * Math.min(d, 1 - d), v = (w) => d - g * Math.max(-1, Math.min(p(w) - 3, Math.min(9 - p(w), 1)));
  return "#" + [v(0), v(8), v(4)].map((w) => Math.round(w * 255).toString(16).padStart(2, "0")).join("");
}
const [uu, fu, hu] = g0(Ur), ip = pu(uu, fu, Math.max(6, hu - 14)), b0 = pu(uu, fu, Math.min(96, hu + 16));
function w0(n, r, d, p, g) {
  const v = ee / 2, w = ee * 0.12, T = v - (v - w) * n, V = (et) => et ** 1.3, M = fo(d, -1.5, 1.5), D = (et) => -(Math.abs(M) * 4.6 * et ** 1.5) * Math.sign(M), I = n * 1.4, G = (et, at) => {
    const X = Math.min(4.8, Math.abs(d) * 2.6) * (at ? 1 : -1) * Math.sign(d || 1), N = at ? et + T : et, nt = at ? et : et + T, ct = (yt) => N + D(yt) + X * Math.sin(yt * Math.PI * 1.2 + p) * V(yt) * 1.4 + I * Math.sin(yt * Math.PI * 2 + p * 0.6) * V(yt) * (at ? 1 : -1), wt = [[nt, te]];
    for (let yt = 0; yt <= 12; yt++) wt.push([ct(yt / 12), te + ee * yt / 12]);
    wt.push([nt, te + ee]);
    let it = '<path d="' + Il(wt) + 'Z" fill="' + Ur + '"/>';
    if (g) return it;
    const Z = 1.35 + ((at ? d > 0 : d < 0) ? 0.35 : 0), Y = (yt) => {
      const Ht = yt / 7, lt = at ? 1 - Ht : Ht, U = (1 - lt) ** 1.3, Wt = et + T * Ht;
      return Array.from({ length: 13 }, (j, Q) => {
        const C = Q / 12;
        return [Wt + D(C) * U + X * Z * Math.sin(C * Math.PI * 1.2 + p - lt * 3.2) * V(C) * 1.4 * U + I * 1.6 * Math.sin(C * Math.PI * 2 + p * 0.6 - lt * 2.5) * V(C) * n * (0.4 + 0.6 * U), te + ee * C];
      });
    }, H = [1, 2, 3, 4, 5, 6].map(Y);
    for (let yt = 0; yt < 6; yt += 2) it += '<path d="' + Il(H[yt]) + Il(H[yt + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return it;
  }, J = v - (v - w) * r;
  return { body: G(te, !0) + G(te + ee - T, !1), rails: [{ x: te + J - 4, y: te, w: 4, h: ee }, { x: te + ee - J, y: te, w: 4, h: ee }], head: 6.4 };
}
function v0(n, r, d) {
  const p = ee * (1 - n);
  let g = "";
  if (p > 1 && (g += Fo(te, te, ee, p, Ur), !d))
    for (let v = 1; v < 7; v += 2) g += Fo(te + ee * v / 7, te, ee / 7, p, "#fff");
  return { body: g, rails: [{ x: te, y: te + ee * (1 - r) - 7, w: ee, h: 11 }], head: 10.4 };
}
function y0(n, r, d, p) {
  const g = 9 - 7 * (d / 100), v = te + ee * (1 - n), w = Math.ceil(ee / 10) + 1, T = te + g / 2, V = (te + ee - g / 2 - T) / (w - 1), M = 0.8, D = 0.6, I = Array.from({ length: w }, (et, at) => Math.max(T + at * D, Math.min(T + at * V, v - g / 2 - (w - 1 - at) * D))), G = I.slice(0, -1).map((et, at) => fo((I[at + 1] - et - D) / (V - D), 0, 1));
  G.push(G[w - 2]);
  let J = "";
  return I.forEach((et, at) => {
    const X = M + (g - M) * G[at], N = Math.max(0.5, X / 2), nt = Math.max(0.4, X * 0.114);
    J += Fo(te, et - N, ee, Math.max(1, X), Ur), !p && X > 2.2 && (J += Fo(te, et + N - nt, ee, nt, ip) + Fo(te, et - N, ee, nt * 0.55, b0, 0.75));
  }), p || [0.22, 0.78].forEach((et) => {
    J += Fo(te + ee * et - 0.7, te, 1.4, Math.max(0, I[w - 1] + 1 - te), ip, 0.85);
  }), { body: J, rails: [{ x: te, y: te + ee * (1 - r) - 8, w: ee, h: 8 }], head: 8.8 };
}
const sp = (n, r, d, p, g, v, w) => n === "curtain" ? w0(r, d, g, v, w) : n === "venetian" ? y0(r, d, p, w) : v0(r, d, w);
function x0(n, r) {
  let d = "", p = "";
  return r.forEach((g) => {
    const v = g.w > g.h, w = fo(v ? te + ee / 2 : g.x + g.w / 2, 17, 183), T = fo(v ? g.y + g.h / 2 : te + ee / 2, 17, 183);
    d += v ? Fo(te, fo(g.y + g.h / 2, te, te + ee) - 1, ee, 2, Ol) : Fo(fo(g.x + g.w / 2, te, te + ee) - 1, te, 2, ee, Ol);
    const V = v ? "M" + ye(w - 4) + " " + ye(T - 3) + "l4 -3l4 3M" + ye(w - 4) + " " + ye(T + 3) + "l4 3l4 -3" : "M" + ye(w - 3) + " " + ye(T - 4) + "l-3 4l3 4M" + ye(w + 3) + " " + ye(T - 4) + "l3 4l-3 4";
    p += '<circle cx="' + ye(w) + '" cy="' + ye(T) + '" r="11" fill="' + Ol + '" filter="url(#' + n + 's)"/><path d="' + V + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: d, knobs: p };
}
function M0(n, r) {
  const d = /* @__PURE__ */ new Date(), p = m0(d.getHours() + d.getMinutes() / 60), g = 42 + 18 * Math.sin(p.t * 0.5), v = p.t >= 5 && p.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (p.t - 5) / 15) : 80, w = sp(r.kind, r.pos / 100, r.bar / 100, r.tilt, r.vel, r.ph, !1), T = r.ghostAlpha > 4e-3 && r.ghost != null ? sp(r.kind, r.ghost / 100, r.ghost / 100, r.tilt, 0, 0, !0).body : "", V = r.grip > 4e-3 ? x0(n, w.rails) : null, M = (D) => Fo(te, te, ee, ee, D);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + n + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + n + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + p.top + '"/><stop offset="1" stop-color="' + p.bot + '"/></linearGradient><radialGradient id="' + n + 'w" cx="' + ye(g) + '%" cy="' + ye(v) + '%" r="58%"><stop offset="0" stop-color="' + p.warm + '" stop-opacity="' + ye(p.op * 0.8) + '"/><stop offset="1" stop-color="' + p.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + n + 'k" cx="' + ye(100 - g * 0.8) + '%" cy="' + ye(100 - v * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + p.cool + '" stop-opacity="' + ye(p.op * 0.64) + '"/><stop offset="1" stop-color="' + p.cool + '" stop-opacity="0"/></radialGradient><filter id="' + n + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + rp + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + n + 'c)">' + M("url(#" + n + "l)") + M("url(#" + n + "w)") + M("url(#" + n + "k)") + (T ? '<g opacity="' + ye(r.ghostAlpha) + '">' + T + "</g>" : "") + w.body + '<rect x="14" y="14" width="172" height="' + w.head + '" fill="' + Ur + '" filter="url(#' + n + 's)"/></g>' + (V ? '<g clip-path="url(#' + n + 'c)" opacity="' + ye(r.grip) + '">' + V.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + rp + '" stroke-width="3"/>' + (V ? '<g opacity="' + ye(r.grip) + '">' + V.knobs + "</g>" : "") + "</svg>";
}
function k0({ onMove: n, onSet: r }) {
  var it;
  const d = "cv" + ++h0, p = document.createElement("div");
  p.className = "tfCoverArt";
  const g = (it = window.matchMedia) == null ? void 0 : it.call(window, "(pointer: coarse)").matches;
  let v = null;
  const w = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let T = 0, V = !1, M = !1, D = null, I = 0, G = 0;
  const J = () => (v == null ? void 0 : v.kind) === "curtain" ? "x" : "y", et = () => D || V || M || v.moving || v.target != null ? 1 : g ? performance.now() < G ? 1 : 0.4 : 0, at = () => {
    p.innerHTML = M0(d, { kind: v.kind, pos: w.pos, bar: v.target ?? w.pos, tilt: w.tilt, vel: w.vel, ph: w.ph, ghost: w.gpos, ghostAlpha: w.ghost, grip: w.grip });
  };
  function X(Z) {
    T = 0;
    const Y = w.last ? Math.min(0.064, (Z - w.last) / 1e3) : 1 / 60, H = Y * 60;
    w.last = Z;
    const yt = v.pos - w.pos, Ht = w.pos;
    w.pos += Math.sign(yt) * Math.min(Math.abs(yt), Math.max(10.5, Math.abs(yt) * 1.4) * Y), Math.abs(v.pos - w.pos) < 0.03 && (w.pos = v.pos), w.vel = w.vel * 0.86 + (w.pos - Ht) / H * 0.14, Math.abs(w.vel) < 0.015 && w.pos === v.pos && (w.vel = 0), (w.pos !== Ht || w.vel) && (w.ph += (0.06 + Math.abs(w.vel) * 0.03) * H);
    const lt = v.tilt - w.tilt;
    w.tilt += Math.sign(lt) * Math.min(Math.abs(lt), Math.max(60, Math.abs(lt) * 4) * Y);
    const U = et();
    w.grip += (U - w.grip) * Math.min(1, Y * (U > w.grip ? 11 : 3.5)), Math.abs(U - w.grip) < 0.01 && (w.grip = U);
    const Wt = v.target != null && Math.abs(v.target - w.pos) > 0.5 ? 0.22 : 0;
    v.target != null && (w.gpos = v.target), w.ghost += (Wt - w.ghost) * Math.min(1, Y * (Wt > w.ghost ? 16 : 3)), Math.abs(Wt - w.ghost) < 4e-3 && (w.ghost = Wt), at(), w.pos !== v.pos || w.vel || w.tilt !== v.tilt || w.grip !== U || w.ghost !== Wt ? T = requestAnimationFrame(X) : w.last = 0;
  }
  const N = () => {
    v && !T && (T = requestAnimationFrame(X));
  }, nt = setInterval(() => {
    v && !T && at();
  }, 60 * 1e3), ct = (Z) => {
    const Y = p.getBoundingClientRect();
    return J() === "x" ? (Z.clientX - Y.left) / Y.width : (Z.clientY - Y.top) / Y.height;
  };
  p.addEventListener("pointerdown", (Z) => {
    var yt;
    if (!(v != null && v.canSet) || Z.button > 0) return;
    Z.preventDefault(), (yt = p.setPointerCapture) == null || yt.call(p, Z.pointerId);
    const Y = v.target ?? v.pos, H = p.getBoundingClientRect();
    D = { p0: ct(Z), from: Y, x0: Z.clientX, value: null, side: null }, v.kind === "curtain" && Y > 0 && (D.side = (Z.clientX - H.left) / H.width < 0.5 ? "L" : "R"), N();
  }), p.addEventListener("pointermove", (Z) => {
    if (!D) return;
    let Y;
    if (v.kind === "curtain") {
      if (!D.side) {
        const yt = Z.clientX - D.x0;
        if (Math.abs(yt) < 4) return;
        D.side = yt < 0 ? "L" : "R";
      }
      const H = (ee / 2 - ee * 0.12) / 200;
      Y = D.from + (D.side === "L" ? -1 : 1) * ((ct(Z) - D.p0) / H) * 100;
    } else Y = D.from - (ct(Z) - D.p0) / (ee / 200) * 100;
    D.value = fo(Y, 0, 100), n(D.value);
  });
  const wt = () => {
    if (!D) return;
    const Z = D.value;
    D = null, Z != null && r(Math.round(Z)), N();
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
    if (!(v != null && v.canSet)) return;
    const Y = Math.round(v.target ?? v.pos), H = Z.shiftKey ? 10 : 1, yt = { ArrowUp: Y + H, ArrowRight: Y + H, ArrowDown: Y - H, ArrowLeft: Y - H, PageUp: Y + 25, PageDown: Y - 25, Home: 0, End: 100 }[Z.key];
    if (yt == null) return;
    Z.preventDefault();
    const Ht = fo(yt, 0, 100);
    n(Ht), clearTimeout(I), I = setTimeout(() => r(Ht), 500);
  }), {
    el: p,
    update(Z) {
      const Y = !v;
      v = Z, Y && (w.pos = v.pos, w.tilt = v.tilt, G = performance.now() + 1500, g && setTimeout(N, 1600)), p.classList.toggle("x", J() === "x"), p.classList.toggle("y", J() === "y"), v.canSet ? (p.tabIndex = 0, p.setAttribute("role", "slider"), p.setAttribute("aria-valuemin", "0"), p.setAttribute("aria-valuemax", "100"), p.setAttribute("aria-valuenow", String(Math.round(v.target ?? v.pos))), p.setAttribute("aria-orientation", J() === "x" ? "horizontal" : "vertical")) : p.setAttribute("role", "img"), p.setAttribute("aria-label", v.name + (v.canSet ? " position" : "")), p.setAttribute("aria-valuetext", v.text), N();
    },
    destroy() {
      cancelAnimationFrame(T), T = 0, clearInterval(nt), clearTimeout(I), p.remove();
    }
  };
}
const lp = "homecore-density", co = {
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
}, q = (n) => String(n ?? "").replace(/[&<>"']/g, (r) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[r]), cp = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', ql = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', dp = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', Yi = {
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h2v12H6zM9.5 12L18 18V6z"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>'
}, pp = {
  down: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 11h14v2H5z"/></svg>',
  up: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z"/></svg>'
}, up = 1, S0 = 4, fp = 16, hp = 32, _0 = 128, C0 = 256, mp = 16384, gp = 1, bp = 2, Wl = 4, wp = 8, A0 = {
  open: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/></svg>',
  stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5" fill="currentColor"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l5 5-5 5"/><path d="M21 7l-5 5 5 5"/></svg>'
}, vp = { curtain: ["mdi:curtains", "mdi:curtains-closed"], blind: ["mdi:roller-shade", "mdi:roller-shade-closed"], venetian: ["mdi:blinds-horizontal", "mdi:blinds-horizontal-closed"] }, T0 = { curtain: "curtains", blind: "blind", venetian: "blinds" }, Vr = {
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
}, yp = ["covers", "people", "openings", "leaks", "vacuum"], xp = "homecore_house", Mp = "homecore-house-used", jr = ["switch", "fan", "input_boolean", "automation"], kp = "homecore-house-look", L0 = [["look", "Look"], ["house", "House page"], ["weather", "Weather"]], D0 = [["popup", "Popup"], ["sheet", "Sheet"]], E0 = [["auto", "Automatic"], ["cut", "Cut short"], ["wrap", "Two lines"], ["scroll", "Scroll"]], B0 = [["day", "Daytime 06–22"], ["waking", "Waking 07–23"], ["all", "All day"]], R0 = [["bitmap", "Pixel"], ["onebit", "1-bit"], ["smooth", "Smooth"], ["line", "Line"]], zr = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', P0 = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', H0 = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>', Sp = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"/></svg>', Vl = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>', fa = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 13C6.14 13 4.59 14.28 4.14 16H2V18H4.14C4.59 19.72 6.14 21 8 21S11.41 19.72 11.86 18H22V16H11.86C11.41 14.28 9.86 13 8 13M8 19C6.9 19 6 18.1 6 17C6 15.9 6.9 15 8 15S10 15.9 10 17C10 18.1 9.1 19 8 19M19.86 6C19.41 4.28 17.86 3 16 3S12.59 4.28 12.14 6H2V8H12.14C12.59 9.72 14.14 11 16 11S19.41 9.72 19.86 8H22V6H19.86M16 9C14.9 9 14 8.1 14 7C14 5.9 14.9 5 16 5S18 5.9 18 7C18 8.1 17.1 9 16 9Z"/></svg>', jl = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"/></svg>', Zi = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/></svg>', zl = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', mu = (n) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + n.map((r) => '<path d="' + r + '"/>').join("") + "</svg>", Ki = mu(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), _p = mu(["M20 6L9 17L4 12"]), po = (n, r = "") => '<span class="tfAreaGlyph" data-icon-for="' + q(n || "") + '"' + (r ? ' data-icon-name="' + q(r) + '"' : "") + "></span>", N0 = (n) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (n ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', Cp = 1, Ap = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], Tp = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, Xi = ["door", "window", "garage_door", "opening"], Lp = { moisture: ["detected water", "dry"], smoke: ["detected smoke", "clear"], gas: ["detected gas", "clear"], carbon_monoxide: ["detected carbon monoxide", "clear"], safety: ["became unsafe", "safe"] }, nr = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve", "water_heater"], O0 = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], I0 = 10, F0 = 20, q0 = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, W0 = ["living room", "bedroom", "office"];
function V0(n, { config: r, getHass: d }) {
  var bd, wd, vd;
  const p = (t) => n.getElementById(t), g = p("app"), v = r || {}, w = String(v.layout || "").toLowerCase().replace("_", "-") === "test-focus", T = String(v.page || "").toLowerCase() === "overview";
  let V = co.get(lp) === "1", M = {};
  const D = (t) => {
    var e;
    return (e = d()) == null ? void 0 : e.callWS(t);
  }, I = (t, e, a) => D({ type: "call_service", domain: t, service: e, service_data: a }), G = n.querySelector("#appearancePane .toggleList");
  G && !p("densityToggle") && (G.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), p("densityToggle").addEventListener("click", () => {
    V = !V, co.set(lp, V ? "1" : "0"), Y();
  }));
  const J = [
    ["weather", "Weather", "The forecast under Home.", (t) => t.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (t) => t.startsWith("sensor.") && Gt(t).device_class === "power" && /^(W|kW)$/.test(Gt(t).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm in the Security popup.", (t) => t.startsWith("alarm_control_panel.")]
  ], et = (t, e, a, o) => '<div class="themeChoice" id="' + t + '" role="group" aria-label="' + e + '">' + o.map(([i, l]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + a + '="' + i + '">' + l + "</button>").join("") + "</div>", at = (t, e, a, o) => '<div class="toggleRow"' + (o ? ' id="' + o + '"' : "") + "><div><strong>" + t + "</strong>" + (e ? '<div class="status">' + e + "</div>" : "") + "</div>" + a + "</div>";
  function X() {
    var P, L;
    if (!w || p("housePane")) return;
    const t = p("settingsView");
    t.querySelector(".settingsTitle").textContent = "HomeCore settings";
    const e = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], a = (B, k) => '<div class="houseTab' + (B === "look" ? " active" : "") + '" data-house-pane="' + B + '"><section class="card">' + k + "</section></div>";
    t.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + e.map(([B, k]) => '<button class="tab segBtn' + (B === "look" ? " active" : "") + '" type="button" data-house-tab="' + B + '">' + k + "</button>").join("") + "</div>" + // Appearance in groups (Matt, 8 Nov), each one's title inside its card as a card header (Matt, 9 Nov)
    a("look", L0.map(([B, k]) => '<div class="tfSetGroup"><div class="toggleList" data-look-group="' + B + '"><div class="tfCardTitle">' + k + "</div></div></div>").join("")) + // Lights as cards by default, with a Cards | Table choice (Matt, 9 Nov)
    a("lights", '<div class="tfLightView"><div class="themeChoice" role="group" aria-label="Show lights as"><button class="wxLayoutBtn" type="button" data-light-view="cards">Cards</button><button class="wxLayoutBtn" type="button" data-light-view="table">Table</button></div></div><p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div><div class="tfLightCards" id="lightCards"></div>') + a("sources", '<div class="toggleList">' + J.map(([B, k, R]) => at(k, R, '<select class="settingsSelect" data-source="' + B + '" aria-label="' + k + '"></select>')).join("") + "</div>") + a("sums", '<div class="toggleList">' + Object.entries(Vr).map(([B, k]) => at(k.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + B + '" aria-label="' + k.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const o = (B) => t.querySelector('[data-look-group="' + B + '"]'), i = (B) => B == null ? void 0 : B.closest(".toggleRow");
    [i(t.querySelector(".themeBtn"))].forEach((B) => B && o("look").appendChild(B));
    const l = i(p("densityToggle"));
    l && (l.hidden = !0), [i(p("moreInfoChoice")), i(p("namesChoice"))].forEach((B) => B && o("house").appendChild(B)), o("house").insertAdjacentHTML("beforeend", at("Lights", "How lights show on the house page.", et("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + at("Pad", "What the Dual Axis Controller’s pad sets on its tile.", et("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow")), [i(p("hoursChoice")), i(p("wxStyleChoice"))].forEach((B) => B && o("weather").appendChild(B));
    const c = p("housePane"), u = c.querySelector(".houseTabs"), f = u.querySelector(".rubberIndicator"), y = "homecore-light-view", S = (B) => {
      c.classList.toggle("tfLightCardsOn", B === "cards"), c.querySelectorAll("[data-light-view]").forEach((k) => k.setAttribute("aria-pressed", String(k.dataset.lightView === B))), co.set(y, B);
    };
    S(co.get(y) === "table" ? "table" : "cards"), c.querySelector(".tfLightView").addEventListener("click", (B) => {
      const k = B.target.closest("[data-light-view]");
      k && S(k.dataset.lightView);
    }), new ResizeObserver(() => nt()).observe(c), (L = (P = document.fonts) == null ? void 0 : P.ready) == null || L.then(() => nt());
    const x = (B) => {
      const k = u.querySelector(".tab.active");
      f.style.transition = "none", B ? Qi(f, f.offsetLeft, f.offsetWidth, k.offsetLeft, k.offsetWidth) : (f.style.left = k.offsetLeft + "px", f.style.width = k.offsetWidth + "px");
    };
    new ResizeObserver(() => x(!1)).observe(u), c.addEventListener("click", (B) => {
      const k = B.target.closest("[data-house-tab]");
      if (k) {
        u.querySelectorAll(".tab").forEach((A) => A.classList.toggle("active", A === k)), c.querySelectorAll(".houseTab").forEach((A) => A.classList.toggle("active", A.dataset.housePane === k.dataset.houseTab)), k.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), x(!0), nt();
        return;
      }
      const R = B.target.closest("[data-light-fav]");
      if (R) {
        la(R.dataset.lightFav);
        return;
      }
      const _ = B.target.closest("[data-light-pick]");
      if (_) {
        const [A, rt] = _.dataset.lightPick.split("|"), Tt = { ...Kt[A] };
        _.dataset.v ? Tt[rt] = _.dataset.v : delete Tt[rt], Kt[A] = Tt, na(), [...Ye.keys()].filter((Rt) => Rt.endsWith(":" + rt)).forEach((Rt) => Ye.delete(Rt)), za();
        return;
      }
      const z = B.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!z || z.disabled)) {
        if (z.dataset.lights && (Kt.lights = z.dataset.lights), z.dataset.dacPad && (Kt.dacPad = z.dataset.dacPad), (z.dataset.lights || z.dataset.dacPad) && (na(), Ye.clear()), z.dataset.sumToggle) {
          const A = z.dataset.sumToggle, rt = new Set(mt.hiddenSums || []);
          rt.has(A) ? rt.delete(A) : rt.add(A), mt = { ...mt, hiddenSums: [...rt] }, je();
        }
        za();
      }
    }), c.addEventListener("change", (B) => {
      const k = B.target;
      k.dataset.source && (mt = { ...mt, sources: { ...mt.sources || {}, [k.dataset.source]: k.value || void 0 } }, je());
      const R = k.dataset.lightStyle || k.dataset.lightPad;
      if (R) {
        const _ = k.dataset.lightStyle ? "lightStyles" : "lightPads", z = { ...Kt[_] };
        k.value ? z[R] = k.value : delete z[R], Kt[_] = z, na(), [...Ye.keys()].filter((A) => A.endsWith(":" + R)).forEach((A) => Ye.delete(A));
      }
      za();
    });
  }
  function N() {
    var x, P;
    Nn() && Hn();
    const t = p("housePane");
    if (!t) return;
    const e = !!customElements.get(wa);
    t.querySelectorAll("[data-lights]").forEach((L) => L.setAttribute("aria-pressed", String(L.dataset.lights === Kt.lights))), p("lightsRow").querySelector(".status").textContent = e || !Nn() ? "How lights show on the house page." : Xo === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", t.querySelectorAll("[data-dac-pad]").forEach((L) => L.setAttribute("aria-pressed", String(L.dataset.dacPad === Kt.dacPad))), p("dacPadRow").hidden = !Nn();
    for (const L of t.querySelectorAll("[data-source]")) {
      if (L === n.activeElement) continue;
      const [B] = J.find(([R]) => R === L.dataset.source), k = Object.keys(M).filter(J.find(([R]) => R === B)[3]).sort((R, _) => bt(R).localeCompare(bt(_)));
      L.dataset.sig !== k.join(",") && (L.innerHTML = '<option value="">Automatic</option>' + k.map((R) => '<option value="' + q(R) + '">' + q(bt(R)) + "</option>").join(""), L.dataset.sig = k.join(",")), L.value = k.includes((x = mt.sources) == null ? void 0 : x[B]) ? mt.sources[B] : "";
    }
    t.querySelectorAll("[data-sum-toggle]").forEach((L) => {
      const B = !(mt.hiddenSums || []).includes(L.dataset.sumToggle);
      L.classList.toggle("on", B), L.setAttribute("aria-checked", String(B));
    });
    const a = p("lightRows"), o = p("lightCards"), i = n.activeElement, l = a != null && a.contains(i) || o != null && o.contains(i) ? i : null;
    if (!a || l != null && l.matches("select")) {
      nt();
      return;
    }
    const c = new Set(F()), u = (L, B, k, R) => '<option value="' + L + '"' + (L === k ? " selected" : "") + ">" + B + "</option>", f = Object.keys(M).filter((L) => L.startsWith("light.")).sort((L, B) => !Ct.get(L) - !Ct.get(B) || (Ct.get(L) || "").localeCompare(Ct.get(B) || "") || bt(L).localeCompare(bt(B))).map((L) => {
      const B = Kt.lightStyles[L] || "", k = Kt.lightPads[L] || "", R = c.has(L), _ = q(bt(L));
      return "<tr><td><strong>" + _ + "</strong></td><td>" + q(Ct.get(L) || "—") + "</td><td>" + q(Re(L)) + '</td><td class="metaSwitchCol"><button class="switch' + (R ? " on" : "") + '" type="button" role="switch" aria-checked="' + R + '" data-light-fav="' + q(L) + '" aria-label="' + _ + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + q(L) + '" aria-label="' + _ + ' tile">' + u("", "Default", B) + u("tile", "HomeCore tile", B) + u("dac", "Dual Axis Controller", B) + '</select></td><td><select class="settingsSelect" data-light-pad="' + q(L) + '" aria-label="' + _ + ' pad"' + (_a(L) ? "" : " disabled") + ">" + u("", "Default", k) + u("temperature", "Temperature", k) + u("colour", "Colour", k) + "</select></td></tr>";
    }).join(""), y = (L, B, k, R, _) => '<div class="themeChoice" role="group" aria-label="' + k + '">' + R.map(([z, A]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (z === _) + '" data-light-pick="' + L + "|" + q(B) + '" data-v="' + z + '">' + A + "</button>").join("") + "</div>", S = Object.keys(M).filter((L) => L.startsWith("light.")).sort((L, B) => !Ct.get(L) - !Ct.get(B) || (Ct.get(L) || "").localeCompare(Ct.get(B) || "") || bt(L).localeCompare(bt(B))).map((L) => {
      const B = c.has(L), k = q(bt(L)), R = [Ct.get(L), Re(L)].filter(Boolean).map(q).join(" · ");
      return '<div class="toggleList"><div class="toggleRow"><div><strong>' + k + '</strong><div class="status">' + R + "</div></div></div>" + at("Favourite", "", '<button class="switch' + (B ? " on" : "") + '" type="button" role="switch" aria-checked="' + B + '" data-light-fav="' + q(L) + '" aria-label="' + k + ' is a favourite"></button>') + at("Tile", "", y("lightStyles", L, k + " tile", [["", "Default"], ["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]], Kt.lightStyles[L] || "")) + (_a(L) ? at("Pad", "", y("lightPads", L, k + " pad", [["", "Default"], ["temperature", "Temperature"], ["colour", "Colour"]], Kt.lightPads[L] || "")) : "") + "</div>";
    }).join("");
    a.dataset.html !== f && (a.innerHTML = f, a.dataset.html = f), o.dataset.html !== S && (o.innerHTML = S, o.dataset.html = S), l != null && l.dataset.lightFav && ((P = (o.contains(l) ? o : a).querySelector('[data-light-fav="' + CSS.escape(l.dataset.lightFav) + '"]')) == null || P.focus({ preventScroll: !0 })), nt();
  }
  function nt() {
    var e, a, o;
    const t = p("housePane");
    if (t)
      for (const i of t.querySelectorAll(".themeChoice")) {
        const l = [...i.querySelectorAll("button")];
        let c = (e = i.nextElementSibling) != null && e.classList.contains("tfChoiceList") ? i.nextElementSibling : null;
        if (!c) {
          c = document.createElement("select"), c.className = "settingsSelect tfChoiceList", c.setAttribute("aria-label", i.getAttribute("aria-label") || ((o = (a = i.closest(".toggleRow")) == null ? void 0 : a.querySelector("strong")) == null ? void 0 : o.textContent) || ""), c.addEventListener("change", () => {
            var x;
            return (x = l[Number(c.value)]) == null ? void 0 : x.click();
          }), i.after(c);
          const S = () => {
            c.innerHTML = l.map((P, L) => '<option value="' + L + '"' + (P.disabled ? " disabled" : "") + ">" + q(P.textContent) + "</option>").join("");
            const x = l.findIndex((P) => P.getAttribute("aria-pressed") === "true" || P.classList.contains("active"));
            x >= 0 && (c.value = String(x));
          };
          new MutationObserver(S).observe(i, { subtree: !0, attributes: !0, attributeFilter: ["aria-pressed", "class", "disabled"] }), S();
        }
        const u = (S) => {
          i.hidden !== !S && (i.hidden = !S), c.hidden !== S && (c.hidden = S);
        };
        if (l.length > 3) {
          u(!1);
          continue;
        }
        if (!i.getClientRects().length && !c.getClientRects().length) {
          c.dataset.fit || u(!0);
          continue;
        }
        const f = i.hidden;
        i.hidden = !1;
        const y = l.every((S) => S.scrollWidth <= S.clientWidth + 1);
        i.hidden = f, u(y), c.dataset.fit = "1";
      }
  }
  const ct = document.createElement("div");
  ct.className = "densityBadge", ct.setAttribute("aria-live", "polite"), ct.hidden = !0, g.appendChild(ct);
  let wt = 0;
  function it() {
    if (!V) return;
    const t = p("homeView"), e = (l) => l.offsetParent !== null && !l.closest("[hidden]");
    t.querySelectorAll(":scope .card, :scope .tfAction").forEach((l) => {
      e(l) && (l.dataset.h = Math.round(l.getBoundingClientRect().height) + " px");
    });
    const a = [...t.querySelectorAll(".activityRow, .tfAction, .wxNow")].filter(e), o = window.innerHeight, i = a.filter((l) => {
      const c = l.getBoundingClientRect();
      return c.height > 0 && c.top >= 0 && c.bottom <= o + 0.5;
    }).length;
    ct.hidden = !t.classList.contains("active"), ct.innerHTML = "<b>" + i + "</b><small>of " + a.length + " readings on screen</small>";
  }
  const Z = () => {
    V && requestAnimationFrame(it);
  };
  function Y() {
    var t;
    g.classList.toggle("showDensity", V), (t = p("densityToggle")) == null || t.classList.toggle("on", V), ct.hidden = !V, clearInterval(wt), V && (wt = setInterval(it, 1e3), it());
  }
  window.addEventListener("scroll", Z, { capture: !0, passive: !0 }), window.addEventListener("resize", Z, { passive: !0 });
  const H = n.querySelector("#homeView .grid"), yt = document.createElement("style");
  n.appendChild(yt);
  const Ht = new ResizeObserver(() => Wt()), lt = /* @__PURE__ */ new Set(), U = (t) => {
    const e = t.getBoundingClientRect().height;
    return Math.abs(e - t.offsetHeight) < 1 ? e : t.offsetHeight;
  };
  function Wt() {
    const t = g.classList.contains("tfAreaOpen") && !g.classList.contains("tfWeatherOpen");
    if (H.classList.toggle("tfStack", t), lt.forEach((f) => {
      (!t || !f.isConnected) && (Ht.unobserve(f), lt.delete(f));
    }), !t) {
      yt.textContent = "";
      return;
    }
    const e = getComputedStyle(H), a = parseFloat(e.columnGap) || 0, o = e.gridTemplateColumns.split(" ").length, i = [...H.children].filter((f) => f.dataset.k && f.offsetParent);
    yt.disabled = !0;
    const l = i.map((f) => {
      const y = getComputedStyle(f), S = /span (\d+)/.exec(y.gridColumnStart + " " + y.gridColumnEnd);
      return Math.min(o, S ? +S[1] : y.gridColumnEnd === "-1" ? o : 1);
    });
    yt.disabled = !1;
    let c = 0;
    const u = i.map((f, y) => {
      lt.has(f) || (lt.add(f), Ht.observe(f));
      const S = l[y];
      c + S > o && (c = 0);
      const x = c + 1;
      return c = (c + S) % o, '#homeView .grid.tfStack>[data-k="' + CSS.escape(f.dataset.k) + '"]{grid-column:' + x + " / span " + S + ";grid-row-end:span " + Math.max(1, Math.ceil(U(f) + a)) + "}";
    }).join(`
`);
    yt.textContent !== u && (yt.textContent = u);
  }
  new MutationObserver(Wt).observe(H, { childList: !0 }), new MutationObserver(Wt).observe(g, { attributes: !0, attributeFilter: ["class"] });
  let j = null, Q = null, C = null;
  const ut = /* @__PURE__ */ new Map(), ot = /* @__PURE__ */ new Map(), st = /* @__PURE__ */ new Map(), xt = 6;
  let ht = null;
  const Mt = /* @__PURE__ */ new Map(), qt = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map();
  let mt = { favourites: null }, Xe = {}, ho = {}, ln = [], qo = null;
  const Ka = (() => {
    try {
      return JSON.parse(co.get(Mp)) || {};
    } catch {
      return {};
    }
  })();
  let Ct = /* @__PURE__ */ new Map(), De = 0;
  function je() {
    clearTimeout(De), De = setTimeout(() => Promise.resolve(D({ type: "frontend/set_user_data", key: xp, value: mt })).catch(() => {
    }), 400);
  }
  const Kt = (() => {
    let t = {};
    try {
      t = JSON.parse(co.get(kp)) || {};
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
  })(), na = () => co.set(kp, JSON.stringify(Kt)), cr = () => {
    g.dataset.more = Kt.more, g.dataset.names = Kt.names, nl();
  };
  w && G && !p("moreInfoChoice") && (p("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + D0.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Kt.more === t) + '" data-more-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), p("moreInfoChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-more-style]");
    e && (Kt.more = e.dataset.moreStyle, na(), cr(), p("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  }), p("moreInfoChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Long names</strong><div class="status">How a name or state too long for its space shows.</div></div><div class="themeChoice" id="namesChoice" role="group" aria-label="Long names">' + E0.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Kt.names === t) + '" data-names-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), p("namesChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-names-style]");
    e && (Kt.names = e.dataset.namesStyle, Kt.namesPicked = !0, na(), cr(), p("namesChoice").querySelectorAll("[data-names-style]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  }), p("namesChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Next hours</strong><div class="status">The hours each day shows on the Weather page.</div></div><div class="themeChoice" id="hoursChoice" role="group" aria-label="Next hours">' + B0.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Kt.hoursWindow === t) + '" data-hours-window="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), p("hoursChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-hours-window]");
    e && (Kt.hoursWindow = e.dataset.hoursWindow, na(), ke == null || ke.refresh(), p("hoursChoice").querySelectorAll("[data-hours-window]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  }), p("hoursChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Weather art</strong><div class="status">How the weather and the sky are drawn.</div></div><div class="themeChoice" id="wxStyleChoice" role="group" aria-label="Weather art">' + R0.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Kt.wxStyle === t) + '" data-wx-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), p("wxStyleChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-wx-style]");
    e && (Kt.wxStyle = e.dataset.wxStyle, na(), ke == null || ke.setStyle(Kt.wxStyle), Se == null || Se.forEach((a) => a.setStyle(Kt.wxStyle)), p("wxStyleChoice").querySelectorAll("[data-wx-style]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  })), X();
  let zt = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const ka = /* @__PURE__ */ new Map();
  let Yr = "";
  const Zr = w ? ch({ onChange: () => Pe() }) : null;
  w && g.classList.add("house");
  const Sa = Object.assign(document.createElement("div"), { className: "tfBento" });
  let ke = null, Kr = null, cn = !1;
  function Xr(t) {
    const e = Vt();
    if (g.classList.toggle("houseBento", !!e), ke && (Kr !== e || t == null) && (ke.destroy(), ke = null), !e || t == null) {
      Sa.remove();
      return;
    }
    Sa.isConnected || H.append(Sa), Sa.style.order = t, !ke && !cn && (ke = np(Sa, { getHass: d, entityId: e, style: Kt.wxStyle, hoursWindow: () => Kt.hoursWindow, radarSource: fr }), Kr = e);
  }
  const dr = [
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
  ], pr = dr.map(([t]) => t), Wo = ["aq", "pollen", "radar", "hourly", "sun", "moon", "uv", "humidity", "pressure", "wind", "visibility"], is = { hourly: 2 }, Xa = Object.fromEntries(dr.map(([t]) => [t, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + t })]));
  let Se = null, ur = null;
  function $r(t) {
    const e = Vt();
    Se && ur !== e && (Se.forEach((a) => a.destroy()), Se = null), Object.values(Xa).forEach((a) => e ? !a.isConnected && H.append(a) : a.remove()), e && !Se && !cn && (Se = /* @__PURE__ */ new Map(), ur = e), Qr();
  }
  const fr = () => {
    var t;
    return ((t = re().opts.radar) == null ? void 0 : t.source) || "rainviewer";
  }, Jr = () => [["rainviewer", "RainViewer"], ...Object.values(M).filter((t) => t.entity_id.startsWith("camera.")).sort((t, e) => bt(t.entity_id).localeCompare(bt(e.entity_id))).map((t) => ["camera:" + t.entity_id, bt(t.entity_id)])];
  function Qr() {
    if (!Se || cn) return;
    const t = new Set(re().hidden);
    dr.forEach(([e, a]) => {
      Se.has(e) || t.has(e) && !(Qt != null && Qt.fromTray && Qt.key === e) || Se.set(e, np(Xa[e], { getHass: d, entityId: ur, style: Kt.wxStyle, cards: a, onOpen: e === "wx" ? () => Kc("weather") : void 0, radarSource: fr }));
    });
  }
  const Gt = (t) => {
    var e;
    return ((e = M[t]) == null ? void 0 : e.attributes) || {};
  }, bt = (t) => Gt(t).friendly_name || t, fe = (t, e) => Ya(t) || (Number(Gt(t).supported_features) & e) === e, jt = (t) => {
    const e = String(t ?? "").replace(/_/g, " ");
    return e.charAt(0).toUpperCase() + e.slice(1);
  }, Be = (t, e = 1) => Number(t).toLocaleString(void 0, { minimumFractionDigits: e, maximumFractionDigits: e }), $a = (t) => (t == null ? void 0 : t.state) === "on" ? t.attributes.brightness != null ? Math.max(1, Math.round(t.attributes.brightness / 2.55)) : 100 : 0, Ja = (t) => Gt(t).supported_color_modes || [], ss = (t, e) => [5, 3, 1].map((a) => {
    const o = (a + t / 60) % 6;
    return 255 * (1 - e / 100 * Math.max(0, Math.min(o, 4 - o, 1)));
  }), hr = (t) => (t /= 255, t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)), ti = (t) => 0.2126 * hr(t[0]) + 0.7152 * hr(t[1]) + 0.0722 * hr(t[2]), ls = (t, e) => {
    const a = ti(t), o = ti(e);
    return (Math.max(a, o) + 0.05) / (Math.min(a, o) + 0.05);
  }, cs = 0.55, Vo = ["hs", "xy", "rgb", "rgbw", "rgbww"], ei = (t) => {
    const e = Gt(t), a = Vo.includes(e.color_mode);
    return (a && e.rgb_color ? e.rgb_color : a && e.hs_color ? ss(...e.hs_color) : [255, 170, 0]).map((o) => Math.round(Math.max(0, Math.min(255, o))));
  }, ds = { heat: [255, 111, 34], cool: [33, 150, 243], heat_cool: [255, 193, 7], auto: [76, 175, 80], dry: [255, 152, 0], fan_only: [0, 188, 212] };
  function dn(t) {
    var o;
    const e = t.split(".")[0], a = (o = M[t]) == null ? void 0 : o.state;
    return !a || a === "unavailable" || a === "unknown" ? null : e === "light" ? a === "on" ? ei(t) : null : e === "climate" ? ds[a] || null : e === "cover" ? a !== "closed" ? [146, 107, 199] : null : e === "lock" ? a !== "locked" ? [244, 67, 54] : null : e === "media_player" ? ["playing", "paused", "on", "buffering"].includes(a) ? [3, 169, 244] : null : e === "humidifier" || e === "valve" ? ["on", "open", "opening", "closing"].includes(a) ? [33, 150, 243] : null : e === "vacuum" ? ["cleaning", "returning"].includes(a) ? [0, 150, 136] : null : e === "alarm_control_panel" ? a !== "disarmed" && a !== "triggered" ? [76, 175, 80] : null : e === "fan" ? a === "on" ? [0, 188, 212] : null : (e === "switch" || e === "input_boolean") && a === "on" ? [255, 193, 7] : null;
  }
  function mr(t, e, a = !1) {
    const [o, i, l] = t.map((B) => B / 255), c = Math.max(o, i, l), u = Math.min(o, i, l), f = c - u, y = f ? (c === o ? (i - l) / f + (i < l ? 6 : 0) : c === i ? (l - o) / f + 2 : (o - i) / f + 4) * 60 : 0, S = (c + u) / 2, x = f ? f / (1 - Math.abs(2 * S - 1)) : 0, P = f < 0.1 ? Math.min(x, 0.25) : 1, L = (B) => {
      const k = (_) => (_ + y / 30) % 12, R = P * Math.min(B, 1 - B);
      return [0, 8, 4].map((_) => Math.round(255 * (B - R * Math.max(-1, Math.min(k(_) - 3, 9 - k(_), 1)))));
    };
    for (let B = 0.5; a ? B < 0.96 : B > 0.04; B += a ? 0.01 : -0.01) {
      const k = L(B);
      if (ls(k, e) >= 3) return "rgb(" + k.join(",") + ")";
    }
    return a ? "#ffffff" : "#26221e";
  }
  const Rn = (t) => {
    const e = [1, 3, 5].map((a) => parseInt(t.slice(a, a + 2), 16));
    return Math.max(...e) - Math.min(...e) < 26 ? "" : ";--sum-d:" + mr(e, [58, 58, 58], !0) + ";--sum-l:" + mr(e, [230, 230, 230]);
  }, ai = { d: ["#ffb894", "#d2b4ff", "#9dcbff"], l: ["#f0946a", "#b48ae6", "#6fa8e8"] }, ps = () => [0, 1, 2].map((t) => "--g" + t + "-d:" + ai.d[t] + ";--g" + t + "-l:" + ai.l[t]).join(";"), us = '<svg class="tfGradDefs" aria-hidden="true" focusable="false"><defs><linearGradient id="hcClimateGrad" x1="0" y1="0" x2="0" y2="1">' + [0.15, 0.5, 0.85].map((t, e) => '<stop offset="' + t + '" style="stop-color:var(--g' + e + ')"/>').join("") + "</linearGradient></defs></svg>", mo = (t) => {
    const e = t.map((a) => Math.round(a + (255 - a) * cs));
    return "--light-soft:rgb(" + e.join(",") + ");--light-ink:" + mr(t, e);
  }, fs = (t) => mo(ei(t)), jo = (t) => {
    const e = dn(t);
    return e ? ' data-light style="' + mo(e) + '"' : "";
  }, $e = (t) => {
    const e = Ja(t);
    return e.length ? e.some((a) => a !== "onoff") : Gt(t).brightness != null;
  }, zo = (t) => [Gt(t).min_color_temp_kelvin || 2e3, Gt(t).max_color_temp_kelvin || 6500], Ia = (t) => new Date(t).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
  function Go(t) {
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
  const ma = (t) => {
    var e;
    return Gt(t).current_position ?? (((e = M[t]) == null ? void 0 : e.state) === "closed" ? 0 : 100);
  }, Uo = (t) => {
    var e;
    return ze("pos", t, ((e = Mt.get(t)) == null ? void 0 : e.pos) ?? ma(t));
  }, gr = (t) => {
    var e;
    return ze("tilt", t, ((e = Mt.get(t)) == null ? void 0 : e.tilt) ?? Gt(t).current_tilt_position);
  };
  function Re(t) {
    var c;
    const e = M[t];
    if (!e) return "Not found";
    if (e.state === "unavailable") return "Unavailable";
    const a = e.attributes, o = t.split(".")[0];
    if (o === "light") {
      if (e.state !== "on") return "Off";
      const u = a.color_temp_kelvin;
      return ($e(t) ? $a(e) + "%" : "On") + (a.color_mode === "color_temp" && u ? " · " + Number(u).toLocaleString() + "k" : Vo.includes(a.color_mode) ? " · Colour" : "");
    }
    if (o === "climate") return (e.state === "off" ? "Off" : jt(a.hvac_action || e.state)) + " · " + Be(a.current_temperature) + " °C now";
    if (o === "cover") {
      const u = ma(t), f = a.current_tilt_position;
      return e.state === "opening" || e.state === "closing" ? jt(e.state) + " - " + u + "%" : (u <= 0 ? "Closed" : u >= 100 ? "Open" : "Partially open") + (f > 0 && f < 100 ? " · tilted" : "");
    }
    if (o === "humidifier") return e.state !== "on" ? "Off" : jt(a.action || "on") + " · " + a.current_humidity + "% now";
    if (o === "vacuum") return jt(e.state) + (e.state === "cleaning" && ((c = a.rooms) != null && c.length) ? " · " + a.rooms.join(", ") : "") + (a.battery_level != null ? " · " + a.battery_level + "%" : "");
    if (o === "media_player") return e.state === "playing" || e.state === "paused" ? (e.state === "paused" ? "Paused · " : "") + (a.media_title || "Playing") : jt(e.state);
    if (o === "alarm_control_panel") return Tp[e.state] || jt(e.state);
    if (o === "lock" || o === "valve") return jt(e.state);
    if (o === "switch") return e.state === "on" ? "On" : "Off";
    if (o === "plant") return e.state === "ok" ? "Healthy" : jt(a.problem);
    if (o === "binary_sensor")
      return a.device_class === "battery" ? e.state === "on" ? "Low" : "Normal" : a.device_class === "problem" ? e.state === "on" ? "Problem" : "OK" : a.device_class === "moisture" ? e.state === "on" ? "Wet" : "Dry" : Xi.includes(a.device_class) ? e.state === "on" ? "Open" : "Closed" : e.state === "on" ? "Detected" : "Clear";
    if (a.rang) return "Rang at " + Ia(a.rang);
    const i = d();
    if (i != null && i.formatEntityState && !Ya(t))
      try {
        return i.formatEntityState(e);
      } catch {
      }
    const l = Number(e.state);
    if (e.state !== "" && Number.isFinite(l)) {
      const u = Math.abs(l) >= 100 ? 0 : Math.abs(l) >= 10 ? 1 : 2, f = a.unit_of_measurement ? a.unit_of_measurement === "%" ? "%" : " " + a.unit_of_measurement : "";
      return l.toLocaleString(void 0, { maximumFractionDigits: u }) + f + (a.plant_low ? " · Low" : a.plant_high ? " · High" : "");
    }
    return jt(e.state);
  }
  const Yo = (t) => t >= 1e3 ? Be(t / 1e3, 2) + " kW" : Math.round(t).toLocaleString() + " W";
  function Qa(t) {
    var a, o;
    const e = d();
    t.querySelectorAll("[data-icon-for]").forEach((i) => {
      var u;
      const l = M[i.dataset.iconFor], c = i.dataset.iconName || "";
      if (customElements.get("ha-state-icon") && l && !c) {
        let f = i.firstElementChild;
        (!f || f.localName !== "ha-state-icon") && (i.textContent = "", f = document.createElement("ha-state-icon"), i.appendChild(f)), f.hass = e, f.stateObj = l;
      } else if (customElements.get("ha-icon")) {
        let f = i.firstElementChild;
        (!f || f.localName !== "ha-icon") && (i.textContent = "", f = document.createElement("ha-icon"), i.appendChild(f)), f.icon = c || ((u = l == null ? void 0 : l.attributes) == null ? void 0 : u.icon) || "mdi:circle-medium";
      } else i.textContent || (i.textContent = (i.dataset.letter || bt(i.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    }), (a = t.querySelectorAll) == null || a.call(t, ".tfIcon").forEach(ni), (o = t.classList) != null && o.contains("tfIcon") && ni(t), br();
  }
  const oi = /* @__PURE__ */ new Map();
  function ni(t) {
    var l, c, u;
    const e = (((l = t.closest("[data-k]")) == null ? void 0 : l.dataset.k) || "") + "|" + (t.dataset.iconFor || ((c = t.querySelector("[data-icon-for]")) == null ? void 0 : c.dataset.iconFor) || t.getAttribute("aria-label") || ""), a = getComputedStyle(t), o = { backgroundColor: a.backgroundColor, color: a.color }, i = oi.get(e);
    oi.set(e, o), !(!i || i.backgroundColor === o.backgroundColor && i.color === o.color || (u = window.matchMedia) != null && u.call(window, "(prefers-reduced-motion: reduce)").matches) && t.animate([i, o], { duration: Te.warp.cdur, delay: Te.warp.cdelay, easing: Le[Te.warp.ease], fill: "backwards" });
  }
  const hs = "[data-icon-for]>:is(ha-state-icon,ha-icon),.tfIcon>svg", ms = (t) => {
    const e = [t];
    for (; e.length; ) {
      const a = e.shift();
      if (a.localName === "svg") return a;
      a.shadowRoot && e.push(...a.shadowRoot.children), e.push(...a.children);
    }
    return null;
  };
  function gs(t) {
    var L, B, k;
    const e = t.localName === "svg" ? t : ms(t), a = e ? [...e.querySelectorAll("path,rect,circle,ellipse,polygon,polyline,line")] : [];
    if (!a.length) return !e;
    const o = (L = t.closest(".tfIcon")) == null ? void 0 : L.offsetWidth;
    if (o === void 0) return !0;
    if (!o) return !1;
    const i = o + "|" + a.map((R) => R.getAttribute("d") || R.localName).join("|");
    if (t.dataset.fitted === i) return !0;
    let l = 1 / 0, c = 1 / 0, u = -1 / 0, f = -1 / 0;
    for (const R of a) {
      const _ = R.getBBox(), z = getComputedStyle(R), A = z.stroke !== "none" ? (parseFloat(z.strokeWidth) || 0) / 2 : 0;
      !_.width && !_.height || (l = Math.min(l, _.x - A), c = Math.min(c, _.y - A), u = Math.max(u, _.x + _.width + A), f = Math.max(f, _.y + _.height + A));
    }
    if (!(u > l)) return !1;
    const y = (k = (B = e.viewBox) == null ? void 0 : B.baseVal) != null && k.width ? e.viewBox.baseVal : { x: 0, y: 0, width: 24, height: 24 }, S = o > 40 ? o * (26 / 40) : o - 14, x = S * y.width / Math.max(u - l, f - c), P = x / y.width;
    return t.localName === "svg" ? (t.style.width = x + "px", t.style.height = x + "px") : t.style.setProperty("--mdc-icon-size", x + "px"), e.style.translate = ((y.x + y.width / 2 - (l + u) / 2) * P).toFixed(2) + "px " + ((y.y + y.height / 2 - (c + f) / 2) * P).toFixed(2) + "px", t.dataset.fitted = i, !0;
  }
  let Pn = 0;
  function ri(t = 0) {
    clearTimeout(Pn), [...n.querySelectorAll(hs)].filter((a) => !gs(a)).length && t < 5 && (Pn = setTimeout(() => ri(t + 1), 300));
  }
  function br() {
    clearTimeout(Pn), Pn = setTimeout(() => ri(), 60);
  }
  const pn = (t) => {
    var e, a, o;
    return t.startsWith("light.") && M[t] && !Gt(t).icon && !((o = (a = (e = d()) == null ? void 0 : e.entities) == null ? void 0 : a[t]) != null && o.icon) ? "mdi:lightbulb" : "";
  }, he = (t, e, a) => (e = e || pn(t), ' data-icon-for="' + q(t) + '"' + (e ? ' data-icon-name="' + q(e) + '"' : "") + (a ? ' data-letter="' + q(a) + '"' : "")), ga = (t) => t.endsWith("_solar_power") ? "mdi:solar-power-variant" : Gt(t).rang ? "mdi:doorbell" : "", Et = (t, e, a, o) => q([t, e, a, o ? JSON.stringify(o) : ""].join("|")), go = (t) => q(JSON.stringify(t));
  function Zo(t) {
    const e = q(bt(t) + ", " + Re(t));
    return '<div class="activityRow tap" role="button" tabindex="0" data-more="' + q(t) + '" aria-label="' + e + '. More info"><div class="tfIcon" aria-hidden="true"' + he(t, ga(t)) + '></div><div><div class="activityRowName">' + q(bt(t)) + '</div><div class="activityRowMeta">' + q(Re(t)) + "</div></div></div>";
  }
  const wr = (t, e, a) => '<div class="activityRow" aria-label="' + q(t + ", " + e) + '"><div class="tfIcon" aria-hidden="true"' + he("", a, t) + '></div><div><div class="activityRowName">' + q(t) + '</div><div class="activityRowMeta">' + q(e) + "</div></div></div>";
  function bo(t, e, a, o, i = "", l = null, c = "") {
    return '<section class="card tfCard' + (c ? " " + c : "") + '" data-tf data-k="' + q(t) + '" style="order:' + e + '" aria-label="' + q(a) + '"><div class="activityHeader">' + (l ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + q(l) + '" aria-label="' + q(a + (M[l] ? ", " + Re(l) : "") + ". More info") + '">' + q(a) + "</button>" : '<div class="activityTitle">' + q(a) + "</div>") + '</div><div class="activityRows">' + o.join("") + "</div>" + i + "</section>";
  }
  function ii(t, e) {
    const a = "readings:" + t.id, o = t.readings.map((i) => Zo(i));
    return t.power != null && o.push(wr("Power now", Yo(t.power), "mdi:flash")), bo(a, e, "Readings", o);
  }
  function Ko(t, e) {
    var u;
    const a = "energy:" + t.id, [o, i] = [t.solar.find((f) => f.endsWith("_power")), t.solar.find((f) => f.endsWith("_today"))], l = [o, i].filter(Boolean).map((f) => Zo(f)), c = Number(((u = M[o]) == null ? void 0 : u.state) || 0) * 1e3;
    return zt.grid && (l.push(Zo(zt.grid)), l.push(wr("House use", Yo(c + Number(M[zt.grid].state)), "mdi:home-lightning-bolt"))), bo(a, e, "Energy", l, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const si = (t, e) => bo("plant:" + t.id, e, bt(t.id), t.readings.map((a) => Zo(a)), "", t.id);
  function un(t, e, a, o, i, l, c = null) {
    const u = a == null ? null : Math.max(0, Math.min(1, a)), f = u == null ? 0 : Math.round(u * 100);
    return '<div class="tfBar ' + t + '" role="slider" tabindex="0" aria-label="' + q(o) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + f + '"' + (i ? ' aria-valuetext="' + q(i) + '"' : "") + ' data-drag="' + q(t + "|" + e) + '">' + (c != null ? '<span class="was" aria-hidden="true" style="left:' + c + '%"></span>' : "") + (l ? u == null ? "" : '<b style="left:' + f + '%"></b>' : '<i style="width:' + f + '%"></i>') + "</div>";
  }
  const fn = "homecore-house-last-bright", ra = (() => {
    try {
      return JSON.parse(co.get(fn)) || {};
    } catch {
      return {};
    }
  })();
  let hn = 0;
  const to = (t, e) => {
    !e || ra[t] === e || (ra[t] = e, clearTimeout(hn), hn = setTimeout(() => co.set(fn, JSON.stringify(ra)), 500));
  }, ba = (t, e, a, o) => '<div class="tfStep" role="group" aria-label="' + q(t) + '"><button type="button" data-act="' + a + '" aria-label="Lower ' + q(t.toLowerCase()) + '">' + pp.down + "</button><output>" + q(e) + '</output><button type="button" data-act="' + o + '" aria-label="Raise ' + q(t.toLowerCase()) + '">' + pp.up + "</button></div>", ia = (t, e, a) => '<div class="' + t + '" role="group" aria-label="' + q(e) + '">' + a.filter(Boolean).map((o) => '<button type="button" data-act="' + o.act + '"' + (o.pressed != null ? ' aria-pressed="' + o.pressed + '"' : "") + (o.disabled ? " disabled" : "") + (o.aria ? ' aria-label="' + q(o.aria) + '"' : "") + ">" + (o.html || q(o.label)) + "</button>").join("") + "</div>", li = (t, e) => "width:" + Math.round(Math.max(0, Math.min(1, (t - e * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * e / 3).toFixed(2), ci = (t) => "left:calc(4px + " + t / 100 + " * (100% - 8px))", Ne = (t, e) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + q(bt(t)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(e) + '" aria-valuetext="' + Math.round(e) + '% open" data-blocks="' + q(t) + '">' + [0, 1, 2, 3].map((a) => '<span><i style="' + li(e, a) + '"></i><b' + (e >= (a + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (a + 1) * 25 + "<small>%</small></b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + ci(e) + '">' + Math.round(e) + "%</output></div>";
  function mn(t, e) {
    t.querySelectorAll(":scope>span").forEach((o, i) => {
      o.firstElementChild.setAttribute("style", li(e, i)), o.lastElementChild.classList.toggle("lit", e >= (i + 1) * 25 - 12);
    });
    const a = t.querySelector(".tfTip");
    a.setAttribute("style", ci(e)), a.textContent = Math.round(e) + "%", t.setAttribute("aria-valuenow", String(Math.round(e))), t.setAttribute("aria-valuetext", Math.round(e) + "% open");
  }
  const di = (t, e) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + q(bt(t)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(e) + '" aria-valuetext="' + Math.round(e) + '% open" data-drag="tilt|' + q(t) + '"><i style="width:calc((100% - 8px) * ' + e / 100 + ')"></i><span' + (e > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (e > 92 ? ' class="lit"' : "") + ">Open</span></div>", vr = (t, e, a) => '<div class="tfSeg tfCoverBtns" role="group" aria-label="' + q(bt(t)) + '">' + [
    fe(t, gp) && ["open", "Open", "open_cover", e >= 100 && !a],
    fe(t, wp) && ["stop", "Stop", "stop_cover", !1],
    fe(t, bp) && ["close", "Close", "close_cover", e <= 0 && !a]
  ].filter(Boolean).map(([o, i, l, c]) => '<button type="button" data-act="' + Et("cover", l, t) + '" aria-label="' + i + '"' + (c ? " disabled" : "") + ">" + A0[o] + "</button>").join("") + "</div>", eo = (t, e) => '<button class="tfIcon' + (e.art ? " art" : "") + '" type="button" data-act="' + e.button.act + '" aria-label="' + q(e.button.label) + '"' + (e.art ? ' style="background-image:url(&quot;' + q(e.art) + '&quot;)"' : he(t, e.icon)) + "></button>", pi = (t) => '<button class="tfName" type="button" data-more="' + q(t) + '" aria-label="' + q(bt(t) + ", " + Re(t) + ". More info") + '"><span class="activityRowName">' + q(bt(t)) + '</span><span class="activityRowMeta">' + q(Re(t)) + "</span></button>";
  function yr(t, e = !1, a = null) {
    const o = sa(t), i = t.startsWith("light.") && gn(t) && !(a && Vn(t) < 3), l = a || (e && t.startsWith("light.") ? ["bright"] : null), c = i ? ['<div class="tfDacPad" data-dac="' + (e ? "more:" : a ? "dash:" : "tile:") + q(t) + '"></div>'] : o.sections.map((u, f) => u && (!l || l.includes((o.parts || [])[f])) ? u : "").filter(Boolean);
    return '<div class="tfAction' + (i ? " tfDac" : "") + (o.on ? " on" : "") + (!i && !c.length ? " tfHeadOnly" : "") + '" data-k="' + q(t) + '"' + (o.tone ? ' data-tone="' + o.tone + '"' : "") + jo(t) + '><div class="tfActionHead">' + eo(t, o) + pi(t) + "</div>" + c.join("") + "</div>";
  }
  const wa = "dual-controller-v3", ui = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.5/dist/dual-axis-controller-v4.js";
  let Xo = null;
  async function Hn() {
    if (Xo || customElements.get(wa)) return;
    Xo = "loading";
    const t = await Promise.resolve().then(() => D({ type: "lovelace/resources" })).catch(() => null), e = Array.isArray(t) && t.some((o) => /dual-axis-controller/i.test(o.url || ""));
    if (await Promise.race([customElements.whenDefined(wa), new Promise((o) => setTimeout(o, e ? 8e3 : 0))]), customElements.get(wa)) return;
    const a = Object.assign(document.createElement("script"), { src: ui });
    a.onerror = () => {
      Xo = "failed", N();
    }, document.head.appendChild(a);
  }
  const Ye = /* @__PURE__ */ new Map(), _a = (t) => (Kt.lightStyles[t] || Kt.lights) === "dac", Nn = () => Kt.lights === "dac" || Object.values(Kt.lightStyles).includes("dac");
  function gn(t) {
    return _a(t) && !!customElements.get(wa);
  }
  const fi = (t) => Kt.lightPads[t] || Kt.dacPad, bn = () => {
    const t = d();
    return t && {
      ...t,
      themes: { ...t.themes || {}, darkMode: !g.classList.contains("light") },
      callService: (e, a, o, ...i) => t.callService(e, ...hd(e, a, o), ...i)
    };
  }, hi = "ha-card,.hc.hcTile{padding:0!important;border:0!important;border-radius:0!important;background:none!important;box-shadow:none!important}.hcTileHead{display:none!important}.hc--dark{--hc-text:var(--color-text-primary,#f1f1f1)}.halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,198px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}.hc.hcTile{max-width:var(--tf-dac-max,280px)!important}", bs = (t) => {
    !t.shadowRoot || t.shadowRoot.querySelector("style[data-tf]") || (t.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: hi })).dataset.tf = "");
  }, Ca = /* @__PURE__ */ new Map(), Fa = new ResizeObserver((t) => t.forEach(({ target: e }) => {
    const a = e.parentElement;
    !a || !e.offsetHeight || (a.style.removeProperty("min-height"), Ca.set(a.dataset.dac, a.offsetHeight));
  }));
  function wo(t) {
    t.querySelectorAll("[data-dac]").forEach((e) => {
      const a = e.dataset.dac;
      let o = Ye.get(a);
      if (!o) {
        const i = a.slice(a.indexOf(":") + 1);
        o = document.createElement(wa), o.setConfig({ type: "custom:" + wa, entity: i, pad: fi(i), tap_action: { action: "none" } }), Ye.set(a, o);
      }
      o.hass = bn(), o.parentNode !== e && e.replaceChildren(o), !o.offsetHeight && Ca.has(a) && (e.style.minHeight = Ca.get(a) + "px"), Fa.observe(o), bs(o);
    });
  }
  function mi() {
    const t = bn();
    Ye.forEach((e, a) => {
      e.isConnected ? e.hass = t : Ye.delete(a);
    });
  }
  customElements.whenDefined(wa).then(() => {
    w && (H != null && H.querySelector("[data-tf]")) && $c(za);
  });
  const ze = (t, e, a) => st.has(t + "|" + e) ? st.get(t + "|" + e) : a;
  function sa(t) {
    var l, c;
    const e = M[t], a = e.attributes, o = t.split(".")[0], i = (u, f) => ({ act: Et(u, "toggle", t), label: f });
    if (o === "light") {
      const u = e.state === "on", f = Ja(t), [y, S] = zo(t), x = ze("bright", t, $a(e));
      u && to(t, $a(e));
      const P = ze("ct", t, u && a.color_mode === "color_temp" ? a.color_temp_kelvin : null), L = ze("hue", t, u && Vo.includes(a.color_mode) && a.hs_color ? a.hs_color[0] : null);
      return { on: u, button: i("light", "Turn " + bt(t) + (u ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        $e(t) && un("bright", t, x / 100, bt(t) + " brightness", x + "%", !1, u ? null : ra[t] ?? null),
        f.includes("color_temp") && un("ct", t, P == null ? null : (P - y) / (S - y), bt(t) + " warm to cool", P == null ? "" : Math.round(P) + " kelvin", !0),
        f.some((B) => Vo.includes(B)) && un("hue", t, L == null ? null : L / 360, bt(t) + " colour", "", !0)
      ] };
    }
    if (o === "climate") {
      const u = a.target_temp_step || 0.5, f = Number(a.temperature);
      return { on: e.state !== "off", tone: e.state === "cool" || a.hvac_action === "cooling" ? "cool" : "heat", button: i("climate", "Turn " + bt(t) + (e.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(f) && ba("Target temperature", Be(f) + " °C", Et("climate", "set_temperature", t, { temperature: f - u }), Et("climate", "set_temperature", t, { temperature: f + u })),
        ia("tfSeg", "Mode", (a.hvac_modes || []).map((y) => ({ label: jt(y), act: Et("climate", "set_hvac_mode", t, { hvac_mode: y }), pressed: e.state === y })))
      ] };
    }
    if (o === "cover") {
      const u = e.state === "opening" || e.state === "closing", f = e.state === "closed", y = Uo(t), S = gr(t);
      return { on: !f, tone: "blue", icon: vp[Fl(e)][f ? 1 : 0], button: i("cover", (f ? "Open " : "Close ") + bt(t)), parts: ["blocks", "tilt", "buttons"], sections: [
        fe(t, Wl) && Ne(t, y),
        S != null && di(t, S),
        vr(t, y, u)
      ] };
    }
    if (o === "humidifier") {
      const u = Number(a.humidity);
      return { on: e.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: i("humidifier", "Turn " + bt(t) + (e.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(u) && ba("Target humidity", u + "%", Et("humidifier", "set_humidity", t, { humidity: u - 1 }), Et("humidifier", "set_humidity", t, { humidity: u + 1 })),
        ((l = a.available_modes) == null ? void 0 : l.length) && ia("tfSeg", "Mode", a.available_modes.map((f) => ({ label: jt(f), act: Et("humidifier", "set_mode", t, { mode: f }), pressed: a.mode === f })))
      ] };
    }
    if (o === "media_player") {
      const u = e.state === "playing", f = e.state === "off" || e.state === "standby", y = ze("vol", t, a.volume_level), S = f ? { act: Et("media_player", fe(t, _0) ? "turn_on" : "toggle", t), label: "Turn " + bt(t) + " on" } : e.state === "playing" || e.state === "paused" ? { act: Et("media_player", "media_play_pause", t), label: (u ? "Pause " : "Play ") + bt(t) } : { act: Et("media_player", fe(t, C0) ? "turn_off" : "toggle", t), label: "Turn " + bt(t) + " off" };
      return { on: !f, tone: "blue", art: !f && a.entity_picture ? a.entity_picture : null, button: S, parts: ["playback", "volume"], sections: f ? [] : [
        (fe(t, fp) || fe(t, hp) || fe(t, up) || fe(t, mp)) && ia("tfSeg", "Playback", [
          { html: Yi.prev, aria: "Previous", act: Et("media_player", "media_previous_track", t), disabled: !fe(t, fp) },
          { html: u ? Yi.pause : Yi.play, aria: u ? "Pause" : "Play", act: Et("media_player", "media_play_pause", t), disabled: !(fe(t, up) || fe(t, mp)) },
          { html: Yi.next, aria: "Next", act: Et("media_player", "media_next_track", t), disabled: !fe(t, hp) }
        ]),
        fe(t, S0) && y != null && un("vol", t, y, bt(t) + " volume", Math.round(y * 100) + "%")
      ] };
    }
    if (o === "vacuum") {
      const u = e.state === "cleaning", f = a.rooms || [], y = (x) => f.includes(x) ? f.filter((P) => P !== x) : f.concat(x), S = Et("vacuum", u ? "pause" : "start", t, Ya(t) ? { rooms: f } : null);
      return { on: u || e.state === "returning", tone: "blue", button: { act: S, label: (u ? "Pause " : "Start ") + bt(t) }, parts: ["controls", "rooms"], sections: [
        ia("tfSeg", bt(t), [
          { label: u ? "Pause" : "Start", act: S },
          { label: "Dock", act: Et("vacuum", "return_to_base", t), disabled: e.state === "docked" },
          { label: "Locate", act: Et("vacuum", "locate", t) }
        ]),
        Ya(t) && ia("tfChips", "Rooms to clean", zt.rooms.filter((x) => x.id !== "balcony").map((x) => ({ label: x.name, act: Et("vacuum", "set_rooms", t, { rooms: y(x.name) }), pressed: f.includes(x.name) })))
      ] };
    }
    if (o === "lock") {
      const u = e.state === "locked";
      return { on: !u, tone: "heat", button: { act: Et("lock", u ? "unlock" : "lock", t), label: (u ? "Unlock " : "Lock ") + bt(t) }, parts: ["controls"], sections: [
        ia("tfSeg", bt(t), [
          { label: "Lock", act: Et("lock", "lock", t), pressed: u },
          { label: "Unlock", act: Et("lock", "unlock", t), pressed: e.state === "unlocked" },
          fe(t, Cp) && { label: "Open", act: Et("lock", "open", t), pressed: e.state === "open" }
        ])
      ] };
    }
    if (o === "alarm_control_panel") {
      const u = e.state === "disarmed";
      return { on: !u, tone: e.state === "triggered" ? "alarm" : "blue", button: { act: Et("alarm_control_panel", u ? "alarm_arm_away" : "alarm_disarm", t), label: u ? "Arm " + bt(t) + ", away" : "Disarm " + bt(t) }, parts: ["controls"], sections: [
        ia("tfSeg", bt(t), Ap.filter(([, , , f]) => !f || fe(t, f)).map(([f, y, S]) => ({ label: y, act: Et("alarm_control_panel", S, t), pressed: e.state === f })))
      ] };
    }
    if (o === "valve") {
      const u = e.state === "open";
      return { on: u, tone: "blue", icon: "mdi:sprinkler-variant", button: i("valve", (u ? "Close " : "Open ") + bt(t)), parts: ["controls"], sections: [
        ia("tfSeg", bt(t), [
          { label: "Open", act: Et("valve", "open_valve", t), pressed: u },
          { label: "Close", act: Et("valve", "close_valve", t), pressed: !u }
        ])
      ] };
    }
    if (o === "water_heater") {
      const u = Number(a.temperature), f = a.target_temp_step || 1, y = e.state !== "off";
      return { on: y, tone: "heat", icon: "mdi:water-boiler", button: { act: Et("water_heater", y ? "turn_off" : "turn_on", t), label: "Turn " + bt(t) + (y ? " off" : " on") }, parts: ["step", "modes"], sections: [
        Number.isFinite(u) && ba("Target temperature", u + " °C", Et("water_heater", "set_temperature", t, { temperature: u - f }), Et("water_heater", "set_temperature", t, { temperature: u + f })),
        ((c = a.operation_list) == null ? void 0 : c.length) && ia("tfSeg", "Mode", a.operation_list.map((S) => ({ label: jt(S), act: Et("water_heater", "set_operation_mode", t, { operation_mode: S }), pressed: (a.operation_mode || e.state) === S })))
      ] };
    }
    if (jr.includes(o)) {
      const u = e.state === "on";
      return { on: u, button: i(o, "Turn " + bt(t) + (u ? " off" : " on")), parts: [], sections: [] };
    }
    return { on: !1, button: { act: "", label: bt(t) }, sections: [] };
  }
  const Aa = (t) => (Number.isInteger(Number(t)) ? String(Number(t)) : Be(t)) + "°";
  function $o(t) {
    var R;
    const e = (_) => t.readings.find((z) => Gt(z).device_class === _), a = e("temperature"), o = e("humidity"), i = (_) => {
      var z;
      return Number((z = M[_]) == null ? void 0 : z.state);
    }, l = (_) => t.actions.filter((z) => _.test(z)), c = t.lights.filter((_) => {
      var z;
      return ((z = M[_]) == null ? void 0 : z.state) === "on";
    }), u = l(/^cover\./), f = u.filter((_) => {
      var z;
      return ((z = M[_]) == null ? void 0 : z.state) !== "closed";
    }), y = [...new Set(u.map((_) => Fl(M[_])))], S = l(/^climate\./)[0], x = l(/^humidifier\./)[0], P = l(/^media_player\./), L = P.find((_) => {
      var z;
      return ((z = M[_]) == null ? void 0 : z.state) === "playing";
    }) || P.find((_) => {
      var z;
      return ((z = M[_]) == null ? void 0 : z.state) === "paused";
    }), B = t.plugs.filter((_) => {
      var z;
      return ((z = M[_]) == null ? void 0 : z.state) === "on";
    }), k = [];
    if (a && Number.isFinite(i(a)) && k.push({ key: "temp", id: a, kind: "reading", icon: po(a), label: "Temperature", value: Be(i(a)) + "°" }), o && Number.isFinite(i(o)) && k.push({ key: "hum", id: o, kind: "reading", icon: po(o), label: "Humidity", value: Math.round(i(o)) + "%" }), t.lights.length && k.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: po("", "mdi:lightbulb"),
      label: "Lights",
      value: c.length ? c.length + " of " + t.lights.length + " on" : "All off",
      short: c.length ? c.length + " on" : "Off",
      on: c.length > 0,
      light: c.length ? fs(c[0]) : "",
      acts: t.lights.map((_) => ["light", c.length ? "turn_off" : "turn_on", _]),
      aria: (c.length ? "Turn off" : "Turn on") + " the lights in " + t.name
    }), u.length) {
      const _ = y.length === 1 ? T0[y[0]] : "covers", z = Math.round(u.reduce((A, rt) => A + ma(rt), 0) / u.length);
      k.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        light: f.length ? mo([146, 107, 199]) : "",
        icon: po("", ((R = vp[y[0]]) == null ? void 0 : R[f.length ? 0 : 1]) || "mdi:window-shutter"),
        label: jt(_),
        value: z <= 0 ? "Closed" : z >= 100 ? "Open" : z + "% open",
        short: z <= 0 ? "Closed" : z + "%",
        on: f.length > 0,
        acts: u.map((A) => ["cover", f.length ? "close_cover" : "open_cover", A]),
        aria: (f.length ? "Close the " : "Open the ") + _ + " in " + t.name
      });
    }
    if (S) {
      const _ = Gt(S), z = M[S].state === "off";
      k.push({
        key: "climate",
        kind: "control",
        tone: _.hvac_action === "cooling" ? "cool" : "heat",
        light: dn(S) ? mo(dn(S)) : "",
        icon: po(S),
        label: bt(S),
        value: z ? "Off" : jt(_.hvac_action || M[S].state) + " · " + Aa(_.temperature),
        short: z ? "Off" : Aa(_.temperature),
        on: !z,
        acts: [["climate", "toggle", S]],
        aria: "Turn " + bt(S) + (z ? " on" : " off")
      });
    }
    if (x) {
      const _ = M[x].state === "on";
      k.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        light: _ ? mo([33, 150, 243]) : "",
        icon: po("", "mdi:air-humidifier"),
        label: bt(x),
        value: _ ? "On · " + Gt(x).humidity + "%" : "Off",
        short: _ ? Gt(x).humidity + "%" : "Off",
        on: _,
        acts: [["humidifier", "toggle", x]],
        aria: "Turn " + bt(x) + (_ ? " off" : " on")
      });
    }
    if (P.length) {
      const _ = L || P[0], z = M[_], A = z.state === "playing";
      k.push({
        key: "media",
        kind: "control",
        tone: "blue",
        light: dn(_) ? mo(dn(_)) : "",
        icon: po(_),
        label: bt(_),
        value: Re(_),
        short: A ? "Playing" : z.state === "paused" ? "Paused" : jt(z.state),
        on: A,
        acts: [["media_player", z.state === "playing" || z.state === "paused" ? "media_play_pause" : "toggle", _]],
        aria: (A ? "Pause " : "Play ") + bt(_)
      });
    }
    return t.plugs.length && k.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      light: B.length ? mo([255, 193, 7]) : "",
      icon: po("", "mdi:power-plug"),
      label: "Plugs",
      value: B.length ? B.length + " of " + t.plugs.length + " on" : "All off",
      short: B.length ? B.length + " on" : "Off",
      on: B.length > 0,
      acts: t.plugs.map((_) => ["switch", B.length ? "turn_off" : "turn_on", _]),
      aria: (B.length ? "Turn off" : "Turn on") + " the plugs in " + t.name
    }), t.alerts.forEach((_) => k.push(Gt(_).device_class === "moisture" ? { key: "alert:" + _, kind: "alert", icon: po(_), label: "Water leak" } : { key: "note:" + _, kind: "note", icon: po(_), label: bt(_) + " " + Re(_).toLowerCase() })), k;
  }
  const xr = (t, e) => {
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
          var l;
          return ((l = M[i]) == null ? void 0 : l.state) === "playing";
        }) || o.find((i) => {
          var l;
          return ((l = M[i]) == null ? void 0 : l.state) === "paused";
        }) || o[0]].filter(Boolean);
      })()
    }[e] || [];
  };
  function ws(t, e, a = !1) {
    const o = e.find((u) => u.key === "lights"), i = !!(o != null && o.on), l = "", c = '<span class="tfAreaGlyph"' + he("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span>";
    return a || !o ? '<span class="tfIcon tfAreaIcon' + (i ? " on" : "") + '"' + l + ' aria-hidden="true">' + c + "</span>" : '<button class="tfIcon tfAreaIcon' + (i ? " on" : "") + '" type="button"' + l + ' data-acts="' + go(o.acts) + '" aria-label="' + q(o.aria) + '" aria-pressed="' + i + '">' + c + "</button>";
  }
  const gi = (t) => t.readings.find((e) => Gt(e).device_class === "temperature") || [...t.readings, ...t.solar, ...t.openings, ...t.actions, ...t.plugs].find((e) => M[e]) || null, vo = (t, e) => {
    const a = bt(e);
    return a.toLowerCase().startsWith(t.name.toLowerCase() + " ") ? jt(a.slice(t.name.length + 1)) : a;
  };
  function Mr(t) {
    const e = M[t], a = Gt(t), o = t.split(".")[0], i = Number(e.state);
    if (e.state === "unavailable") return { text: "Unavailable" };
    if (o === "sensor" && Number.isFinite(i)) {
      if (a.device_class === "temperature") return { text: Aa(i) };
      const l = a.unit_of_measurement || "";
      return l === "%" ? { text: Math.round(i) + "%" } : { text: Be(i, Number.isInteger(i) ? 0 : 1), unit: l };
    }
    if (o === "climate" && (a.current_temperature ?? a.temperature) != null) return { text: Aa(a.current_temperature ?? a.temperature) };
    if (o === "light") return { text: e.state !== "on" ? "Off" : $e(t) ? $a(e) + "%" : "On" };
    if (o === "cover") {
      const l = ma(t);
      return { text: l <= 0 ? "Closed" : l >= 100 ? "Open" : l + "%" };
    }
    return o === "humidifier" ? { text: e.state === "on" ? a.humidity + "%" : "Off" } : o === "media_player" ? { text: e.state === "playing" ? "Playing" : e.state === "paused" ? "Paused" : jt(e.state) } : { text: Re(t) };
  }
  const Fe = (t, e, a) => {
    const o = a.find((u) => u.key === "temp"), i = a.find((u) => u.key === "hum"), l = Gt(e), c = M[e].state === "off";
    return e.startsWith("climate.") ? [vo(t, e), c ? "Off" : jt(l.hvac_action || M[e].state) + (l.temperature != null ? " · " + Aa(l.temperature) : ""), i && i.value].filter(Boolean).join(" · ") : [!(o && o.id === e) && vo(t, e), o && o.id !== e && o.value, i && i.id !== e && i.value + (o ? "" : " humidity")].filter(Boolean).join(" · ");
  };
  function bi(t) {
    const e = t.id === j, a = $o(t), o = gi(t), i = o && Mr(o), l = [...a.filter((c) => c.kind === "control"), ...a.filter((c) => c.kind !== "control" && c.kind !== "reading")].slice(0, 4);
    return '<article class="hcAreaPanel tfAreaPanel' + (e ? " active" : "") + '" data-area="' + q(t.id) + '" tabindex="0" aria-expanded="' + e + '" aria-label="' + q(t.name) + '"><div class="panelExpanded"' + (e ? "" : " inert") + ">" + b(t, null, ' data-cols="2" data-rows="' + Vn("areas") + '"') + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop">' + ws(t, a, !0) + '<span class="tfACName">' + q(t.name) + '</span></div><span class="tfACMain">' + (i ? q(i.text + (i.unit ? " " + i.unit : "")) : "") + '</span><span class="tfACTiles" aria-hidden="true">' + l.map((c) => '<span class="tfACTile"><span class="tfIcon' + (c.kind === "alert" ? " alert" : "") + '"' + (c.on && c.light ? ' data-light style="' + c.light + '"' : "") + ">" + c.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let Je = [];
  const Jo = (t) => {
    const e = mt.areaOrder || [], a = (o) => {
      const i = e.indexOf(o.id);
      return i < 0 ? e.length + t.indexOf(o) : i;
    };
    return [...t].sort((o, i) => a(o) - a(i));
  }, On = () => {
    var e;
    const t = new Set(((e = mt.dash) == null ? void 0 : e.areasOff) || []);
    return Jo(Je).filter((a) => !t.has(a.id));
  }, s = (t) => {
    var a;
    const e = On();
    return e.some((o) => o.id === j) || (j = ((a = e[0]) == null ? void 0 : a.id) || null), '<div class="tfAreas" data-tf data-k="areas" style="order:' + t + '"><section class="hcAreaGallery tfAreaGallery" aria-label="Areas">' + e.map(bi).join("") + "</section></div>";
  }, h = (t) => t.startsWith("room:"), m = (t) => Je.find((e) => "room:" + e.id === t);
  function b(t, e, a = "") {
    const o = $o(t), i = gi(t), l = i && Mr(i), c = i ? Fe(t, i, o) : "", u = l ? l.text + (l.unit ? " " + l.unit : "") : "", f = (_) => {
      const z = xr(t, _.key);
      return z.length === 1 ? z[0] : "group:" + t.id + ":" + _.key;
    }, y = o.filter((_) => _.kind === "control").slice(0, 4), S = (_) => _.on && _.light ? ' data-light style="' + _.light + '"' : "", x = (_) => '<button class="tfIcon' + (_.on ? " on" : "") + '" type="button" data-tone="' + _.tone + '"' + S(_) + ' data-acts="' + go(_.acts) + '" aria-label="' + q(_.aria) + '" aria-pressed="' + _.on + '">' + _.icon + "</button>", P = y.map(x), L = y.map((_) => '<div class="tfRoomDev' + (_.on ? " on" : "") + '">' + x(_) + '<button class="tfName tfRoomDevName" type="button" data-more="' + q(f(_)) + '" aria-label="' + q(t.name + " " + _.label.toLowerCase() + ", " + _.value + ". Open") + '"><span class="activityRowName">' + q(_.label) + '</span><span class="activityRowMeta">' + q(_.value) + "</span></button></div>"), B = o.find((_) => _.key === "lights"), k = '<span class="tfAreaGlyph"' + he("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span>", R = B ? '<button class="tfIcon tfRoomIcon" type="button" data-acts="' + go(B.acts) + '" aria-label="' + q(B.aria) + '" aria-pressed="' + !!B.on + '">' + k + "</button>" : '<span class="tfIcon tfRoomIcon" aria-hidden="true">' + k + "</span>";
    return '<div class="tfAction tfRoomTile"' + (e ? ' data-k="' + q(e) + '"' : "") + a + ' data-go="' + q(t.id) + '"><div class="tfActionHead">' + R + '<button class="tfName" type="button" data-go="' + q(t.id) + '" aria-label="Open ' + q(t.name) + '"><span class="activityRowName">' + q(t.name) + "</span>" + (u || c ? '<span class="activityRowMeta">' + (u ? '<span class="tfRoomInline">' + q(u) + (c ? " · " : "") + "</span>" : "") + q(c) + "</span>" : "") + "</button></div>" + // the reading opens its more-info (the thermometer's, say)
    (u ? '<button class="tfRoomReading" type="button" data-more="' + q(i) + '" aria-label="' + q(bt(i) + ", " + Re(i) + ". More info") + '"><span class="tfRoomBig">' + q(u) + "</span>" + (c ? '<span class="tfRoomSub">' + q(c) + "</span>" : "") + "</button>" : "") + (P.length ? '<div class="tfRoomDevices">' + P.join("") + '</div><div class="tfRoomHeads">' + L.join("") + "</div>" : "") + "</div>";
  }
  const E = () => [
    { key: "home", name: "Home", ids: zt.homeVacuums },
    ...zt.rooms.map((t) => ({ key: "room:" + t.id, name: t.name, room: t, ids: t.actions }))
  ], O = (t, e, a) => t + " " + (t === 1 ? e : a), F = () => (mt.favourites ?? Xe.favorite_entities ?? []).filter((t) => M[t]);
  function K() {
    if (!qo) {
      const e = Object.entries(Ka).sort((o, i) => i[1] - o[1]).map(([o]) => o), a = zt.rooms.flatMap((o) => o.actions);
      qo = [.../* @__PURE__ */ new Set([...ln, ...e, ...a.filter((o) => sa(o).on), ...a])];
    }
    const t = F();
    return qo.filter((e) => M[e] && M[e].state !== "unavailable" && !t.includes(e));
  }
  let W = !1;
  const $ = 6;
  function tt() {
    if (!W || mt.favSeeded || !zt.rooms.length || T) return;
    const t = (a) => Object.keys(M).find((o) => Ya(o) && a(o)), e = [t((a) => a.startsWith("climate.")), t((a) => a.startsWith("cover.") && /curtain/.test(a)), t((a) => a.startsWith("valve.")), zt.security.locks[0]];
    mt = { ...mt, favourites: [.../* @__PURE__ */ new Set([...mt.favourites ?? Xe.favorite_entities ?? [], ...e.filter(Boolean)])].slice(0, $), favSeeded: !0 }, je();
  }
  const ft = () => mt.suggest ?? !Xe.hide_suggested_entities;
  function Ot() {
    const t = new Set(T ? [] : mt.favHidden || []), e = F().filter((i) => !t.has(i)), a = ft() ? K().filter((i) => !t.has(i) && xs(i)) : [], o = Math.max($, e.length);
    return [...e, ...a].slice(0, T && !Ti() ? o : Math.min(I0, o));
  }
  const Lt = (t) => {
    const e = F().includes(t);
    return '<button class="tfStar" type="button" data-star="' + q(t) + '" aria-pressed="' + e + '" aria-label="Favourite: ' + q(bt(t)) + '">' + N0(e) + "</button>";
  };
  function St(t, { area: e = !1, star: a = !1, plain: o = !1, say: i = null, alert: l = !1 } = {}) {
    var B, k, R, _, z, A;
    const c = o && ((z = (B = d()) == null ? void 0 : B.devices) == null ? void 0 : z[(_ = (R = (k = d()) == null ? void 0 : k.entities) == null ? void 0 : R[t]) == null ? void 0 : _.device_id]), u = c && (c.name_by_user || c.name) || bt(t), f = t.split(".")[0], y = !o && nr.includes(f) ? sa(t) : null, S = y ? y.on : ["on", "open", "playing"].includes((A = M[t]) == null ? void 0 : A.state), x = o ? null : y ? y.button : jr.includes(f) ? { act: Et(f, "toggle", t), label: "Turn " + bt(t) + (S ? " off" : " on") } : f === "scene" || f === "script" ? { act: Et(f, "turn_on", t), label: "Run " + bt(t) } : null, P = (i ?? Re(t)) + (e && Ct.get(t) ? " · " + Ct.get(t) : ""), L = (y == null ? void 0 : y.icon) || ga(t);
    return '<div class="activityRow' + (x ? " tfPlug" : "") + (S ? " on" : "") + (a ? " tfPick" : "") + (l ? " alert" : "") + '" data-k="' + q((e ? "fav:" : "row:") + t) + '" data-tone="' + (f === "light" ? "light" : (y == null ? void 0 : y.tone) || "blue") + '"' + jo(t) + ">" + (x && !a ? '<button class="tfIcon" type="button" data-act="' + x.act + '" aria-label="' + q(x.label) + '"' + he(t, L) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + he(t, L) + "></div>") + '<button class="tfName" type="button" data-more="' + q(t) + '" aria-label="' + q(u + ", " + P + ". More info") + '"><span class="activityRowName">' + q(u) + '</span><span class="activityRowMeta">' + q(P) + "</span></button>" + (a ? Lt(t) : "") + "</div>";
  }
  const Vt = () => {
    var t;
    return M[(t = mt.sources) == null ? void 0 : t.weather] ? mt.sources.weather : M["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(M).find((e) => e.startsWith("weather."));
  };
  function Dt() {
    var a;
    const t = (o) => Object.keys(M).filter((i) => i.startsWith("binary_sensor.") && o.includes(Gt(i).device_class));
    return ((a = ho.alert_entities) != null && a.length ? ho.alert_entities : [...t(["moisture", "smoke", "gas"]).map((o) => ({ entity: o, severity: "alert" })), ...t(Xi).map((o) => ({ entity: o, severity: "warning" }))]).filter((o) => M[o.entity]).map((o) => ({ ...o, on: ["on", "open", "unlocked", "triggered", "problem"].includes(M[o.entity].state) }));
  }
  function dt() {
    const t = Object.keys(Vr), e = /* @__PURE__ */ new Set(), a = [];
    (Xe.shortcuts || []).forEach((l) => {
      if (l.type === "summary") {
        if (!t.includes(l.key) || e.has(l.key)) return;
        e.add(l.key);
      }
      a.push(l);
    }), t.forEach((l) => {
      e.has(l) || a.push({ type: "summary", key: l });
    });
    const o = Ft().sumOrder || [], i = (l) => l.type === "summary" && o.includes(l.key) ? o.indexOf(l.key) : o.length;
    return o.length ? a.map((l, c) => [l, c]).sort((l, c) => i(l[0]) - i(c[0]) || l[1] - c[1]).map(([l]) => l) : a;
  }
  function It() {
    var R;
    const t = ((R = d()) == null ? void 0 : R.entities) || {}, e = (_) => Gt(_).device_class, a = Object.keys(M).filter((_) => _.startsWith("sensor.") && e(_) === "battery" || _.startsWith("binary_sensor.") && ["battery", "problem"].includes(e(_))), o = zt.rooms.flatMap((_) => _.plants.map((z) => z.id));
    if (!a.length && !o.length) return null;
    const i = (_) => {
      var A;
      const z = (A = t[_]) == null ? void 0 : A.device_id;
      return !!z && Object.keys(M).some((rt) => {
        var Tt;
        return rt.startsWith("binary_sensor.") && ((Tt = t[rt]) == null ? void 0 : Tt.device_id) === z && e(rt) === "battery_charging" && M[rt].state === "on";
      });
    }, l = (_) => _.startsWith("vacuum.") ? Gt(_).battery_level <= 20 && M[_].state !== "docked" : _.startsWith("binary_sensor.") ? e(_) === "battery" && M[_].state === "on" : parseFloat(M[_].state) <= 20 && !i(_), c = [...a, ...zt.vacuums].filter((_) => M[_] && l(_)), u = [...a.filter((_) => e(_) === "problem" && M[_].state === "on"), ...o.filter((_) => {
      var z;
      return ((z = M[_]) == null ? void 0 : z.state) === "problem";
    })], f = a.filter((_) => M[_].state === "unavailable"), y = [.../* @__PURE__ */ new Set([...c, ...u, ...f])], S = (_) => {
      const z = parseFloat(M[_].state);
      return e(_) === "battery" && Number.isFinite(z) ? z : 101;
    }, x = [...o, ...zt.vacuums, ...[...a].sort((_, z) => S(_) - S(z))].filter((_) => M[_] && !y.includes(_)), P = /* @__PURE__ */ new Map();
    x.forEach((_) => {
      var A;
      const z = ((A = zt.areaOf) == null ? void 0 : A.call(zt, _)) || "";
      P.set(z, [...P.get(z) || [], _]);
    });
    const L = (_) => {
      const z = zt.rooms.findIndex((A) => A.id === _);
      return _ === "" ? 1 / 0 : z < 0 ? zt.rooms.length : z;
    }, B = [...P.keys()].sort((_, z) => L(_) - L(z)), k = (_) => {
      var z, A, rt, Tt;
      return ((z = zt.rooms.find((Rt) => Rt.id === _)) == null ? void 0 : z.name) || ((Tt = (rt = (A = d()) == null ? void 0 : A.areas) == null ? void 0 : rt[_]) == null ? void 0 : Tt.name) || _;
    };
    return {
      value: [c.length && O(c.length, "low battery", "low batteries"), u.length && O(u.length, "problem", "problems"), f.length && O(f.length, "unavailable device", "unavailable devices")].filter(Boolean).join(", ") || "All good",
      plain: !0,
      groups: [{ name: "Needs attention", ids: y, alert: !0 }, ...B.map((_) => ({ name: _ ? k(_) : B.length > 1 ? "Other devices" : "Devices", ids: P.get(_) }))].filter((_) => _.ids.length)
    };
  }
  const Ft = () => T ? mt.home || {} : mt, me = (t) => yp.includes(t) ? (Ft().shownSums || []).includes(t) : !(Ft().hiddenSums || []).includes(t);
  function _t(t, e, a) {
    const o = t.flatMap((P) => a(P, /^cover\./)), i = o.filter((P) => {
      var L;
      return ["open", "opening"].includes((L = M[P]) == null ? void 0 : L.state);
    }).length, l = Object.keys(M).filter((P) => P.startsWith("person.")), c = l.filter((P) => {
      var L;
      return ((L = M[P]) == null ? void 0 : L.state) === "home";
    }).length, u = zt.security.openings.filter((P) => M[P]), f = u.filter((P) => M[P].state === "on").length, y = Object.keys(M).filter((P) => P.startsWith("binary_sensor.") && Gt(P).device_class === "moisture"), S = y.filter((P) => M[P].state === "on").length, x = zt.vacuums.filter((P) => M[P]);
    return {
      covers: o.length && { value: i ? i + " open" : "All closed", groups: e((P) => a(P, /^cover\./)) },
      people: l.length && { value: c ? c + " home" : "Nobody home", groups: [{ name: "People", ids: l }] },
      openings: u.length && { value: f ? f + " open" : "All closed", groups: [{ name: "Doors and windows", ids: u }] },
      leaks: y.length && { value: S ? O(S, "leak", "leaks") : "All dry", groups: [{ name: "Leak sensors", ids: y }] },
      vacuum: x.length && { value: jt(M[x[0]].state), groups: [{ name: "Vacuum", ids: x }] }
    };
  }
  function ae(t = !1) {
    var le;
    const e = zt.rooms, a = zt.security, o = (At, Bt) => At.actions.filter((ve) => Bt.test(ve)), i = (At) => e.map((Bt) => ({ name: Bt.name, ids: At(Bt) })).filter((Bt) => Bt.ids.length), l = e.flatMap((At) => At.lights), c = l.filter((At) => {
      var Bt;
      return ((Bt = M[At]) == null ? void 0 : Bt.state) === "on";
    }).length, u = e.map((At) => At.readings.find((Bt) => Gt(Bt).device_class === "temperature")).filter(Boolean).map((At) => Number(M[At].state)).filter(Number.isFinite), [f, y] = [Be(Math.min(...u)), Be(Math.max(...u))], S = e.flatMap((At) => o(At, /^media_player\./)), x = S.filter((At) => {
      var Bt;
      return ((Bt = M[At]) == null ? void 0 : Bt.state) === "playing";
    }).length, P = Dt(), L = P.filter((At) => At.severity === "warning" && At.on).length, B = a.locks.filter((At) => {
      var Bt;
      return ["unlocked", "jammed", "open"].includes((Bt = M[At]) == null ? void 0 : Bt.state);
    }).length, k = a.alarms.filter((At) => {
      var Bt;
      return ((Bt = M[At]) == null ? void 0 : Bt.state) === "disarmed";
    }).length, R = L ? O(L, "warning", "warnings") : null, _ = B ? B + " unlocked" : k ? k + " disarmed" : R ? null : "All secure", z = It(), A = e.flatMap((At) => At.solar), rt = A.find((At) => At.endsWith("_power")), Tt = {
      light: l.length && { value: c ? c + " on" : "All off", groups: i((At) => At.lights) },
      climate: u.length && { value: f === y ? f + "°" : f + " - " + y + "°", groups: i((At) => [...At.readings.filter((Bt) => ["temperature", "humidity"].includes(Gt(Bt).device_class)), ...o(At, /^(climate|humidifier)\./)]) },
      security: (a.alarms.length || a.locks.length) && { value: [R, _].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...a.alarms, ...a.locks] }, { name: "Doors and windows", ids: a.openings }].filter((At) => At.ids.length) },
      media_players: S.length && { value: x ? x + " playing" : "No media playing", groups: i((At) => o(At, /^media_player\./)) },
      maintenance: z,
      energy: zt.grid && { value: Yo(Number(((le = M[rt]) == null ? void 0 : le.state) || 0) * 1e3 + Number(M[zt.grid].state)) + " now", groups: [{ name: "Energy", ids: [...A, zt.grid] }] },
      ..._t(e, i, o)
    }, Rt = [], Pt = P.filter((At) => At.severity !== "warning" && At.on);
    return Pt.length && Rt.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: O(Pt.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: Pt.map((At) => At.entity) }] }), dt().forEach((At) => {
      At.type !== "summary" ? Rt.push({ key: "path:" + At.path, name: At.label || At.path, icon: At.icon || "mdi:link-variant", colour: "", value: "" }) : !At.hidden && Tt[At.key] && (t || me(At.key)) && Rt.push({ key: At.key, ...Vr[At.key], ...Tt[At.key] });
    }), Rt;
  }
  const de = (t) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + q(t.key) + '" data-k="sum:' + q(t.key) + '" aria-label="' + q(t.name + (t.value ? ", " + t.value : "")) + '"' + (t.key === "alerts" ? ' style="--sum:' + t.colour + ';--sum-ink:#ffffff"' : t.key === "climate" ? ' style="' + ps() + '"' : t.colour && Rn(t.colour) ? ' style="' + Rn(t.colour).slice(1) + '"' : "") + ">" + (t.key === "climate" ? us : "") + '<div class="tfIcon" aria-hidden="true"' + he(t.id || "", t.icon, t.name) + '></div><div><div class="activityRowName">' + q(t.name) + "</div>" + (t.value ? '<div class="activityRowMeta">' + q(t.value) + "</div>" : "") + "</div></div>";
  function la(t) {
    const e = F();
    mt = { ...mt, favourites: e.includes(t) ? e.filter((a) => a !== t) : [...e, t], favHidden: (mt.favHidden || []).filter((a) => a !== t) }, je(), Pe();
  }
  function ao(t) {
    document.querySelector("home-assistant") && (window.history.pushState(null, "", t), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function kr(t, e) {
    if (t.startsWith("path:")) {
      ao(t.slice(5));
      return;
    }
    Bi("summary:" + t, e);
  }
  async function Sr() {
    const t = (c) => Promise.resolve().then(() => D(c)).catch(() => null), [e, a, o, i] = await Promise.all([
      t({ type: "frontend/get_user_data", key: xp }),
      t({ type: "frontend/get_system_data", key: "home" }),
      t({ type: "frontend/get_system_data", key: "security" }),
      t({ type: "usage_prediction/common_control" })
    ]), l = (e == null ? void 0 : e.value) || {};
    mt = { favourites: l.favourites ?? null, sources: l.sources, hiddenSums: l.hiddenSums, shownSums: l.shownSums, home: l.home, dash: l.dash, named: l.named, favHidden: l.favHidden, suggest: l.suggest, favSeeded: l.favSeeded, favsTitle: l.favsTitle, areaOrder: l.areaOrder }, Xe = (a == null ? void 0 : a.value) || {}, ho = (o == null ? void 0 : o.value) || {}, ln = Array.isArray(i == null ? void 0 : i.entities) ? i.entities : [], qo = null, Object.keys(M).length && Pe(), Jt(), W = !0, tt();
  }
  const _r = "HomeCore";
  async function Jt() {
    var o, i, l;
    const t = location.pathname.split("/")[1], e = mt.named || [];
    if (!((i = (o = d()) == null ? void 0 : o.user) != null && i.is_admin) || !t || e.includes(t)) return;
    const a = () => {
      mt = { ...mt, named: [...e, t] }, je();
    };
    try {
      const c = (l = await D({ type: "lovelace/dashboards/list" })) == null ? void 0 : l.find((y) => y.url_path === t);
      if (!c || c.mode === "yaml") return;
      if (c.title === _r) {
        a();
        return;
      }
      const u = await D({ type: "lovelace/config", url_path: t }), f = ((u == null ? void 0 : u.views) || []).flatMap((y) => [...y.cards || [], ...(y.sections || []).flatMap((S) => S.cards || [])]);
      if (!f.length || !f.every((y) => (y == null ? void 0 : y.type) === "custom:homecore-card" && !y.page)) return;
      await D({ type: "lovelace/dashboards/update", dashboard_id: c.id, title: _r }), a();
    } catch {
    }
  }
  let va = null, oo = 0, Qo = !1;
  const In = (t) => {
    const e = t.split(".")[0], a = Gt(t).device_class;
    return O0.includes(e) && (e !== "binary_sensor" || Xi.includes(a) || !!Lp[a]);
  }, Fn = (t) => t.startsWith("binary_sensor.") ? Lp[Gt(t).device_class] : null;
  async function qn() {
    var t;
    if (!(Qo || Date.now() - oo < 30 * 1e3)) {
      Qo = !0, oo = Date.now();
      try {
        const e = Object.keys(((t = d()) == null ? void 0 : t.states) || {}).filter(In), a = e.length ? await D({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: e }) : null;
        va = Array.isArray(a) ? a.filter((o) => o.entity_id && o.state != null && o.when) : null;
      } catch {
        va = null;
      }
      Qo = !1, Pe();
    }
  }
  function ca() {
    const t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map(), a = (i) => {
      if (!M[i.entity_id] || !In(i.entity_id) || !xs(i.entity_id) || ["unavailable", "unknown"].includes(i.state)) return;
      if (Fn(i.entity_id)) {
        const c = e.get(i.entity_id);
        i.state === "on" ? (!c || i.when > c.when + 1) && e.set(i.entity_id, { ...i, alarm: !0, cleared: null }) : c && !c.cleared && i.when > c.when && (c.cleared = i.when);
        return;
      }
      const l = t.get(i.entity_id);
      (!l || i.when > l.when + 1) && t.set(i.entity_id, i);
    };
    [...va || []].sort((i, l) => i.when - l.when).forEach(a);
    const o = va ? oo / 1e3 - 5 : 0;
    return Object.keys(M).forEach((i) => {
      var u;
      const l = M[i], c = l.last_changed ? Date.parse(l.last_changed) / 1e3 : 0;
      c > o && a({ entity_id: i, state: l.state, when: c, context_user_id: (u = l.context) == null ? void 0 : u.user_id });
    }), [...t.values(), ...e.values()].sort((i, l) => l.when - i.when).slice(0, F0);
  }
  function gu(t) {
    var o;
    const e = t.context_user_id && Object.keys(M).find((i) => i.startsWith("person.") && Gt(i).user_id === t.context_user_id);
    if (e) return bt(e);
    const a = (o = d()) == null ? void 0 : o.user;
    return a && t.context_user_id === a.id ? a.name : ["automation", "script"].includes(t.context_domain) || t.context_event_type === "automation_triggered" ? t.context_name || "Home Assistant" : "";
  }
  function bu(t) {
    const e = t.entity_id.split(".")[0], a = String(t.state);
    return e === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[a] || jt(a).toLowerCase() : e === "cover" || e === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[a] || jt(a).toLowerCase() : e === "binary_sensor" ? a === "on" ? "opened" : "closed" : e === "climate" ? a === "off" ? "turned off" : "set to " + jt(a).toLowerCase() : e === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[a] || jt(a).toLowerCase() : e === "alarm_control_panel" ? (Tp[a] || jt(a)).toLowerCase() : e === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[a] || jt(a).toLowerCase() : a === "on" ? "turned on" : a === "off" ? "turned off" : jt(a).toLowerCase();
  }
  function wu(t) {
    const e = t.entity_id, a = t.alarm && Fn(e), o = bt(e) + " " + (a ? a[0] : bu(t)), i = a ? Ia(t.when * 1e3) + (t.cleared ? " · " + a[1] + " since " + Ia(t.cleared * 1e3) : "") : [gu(t), Ia(t.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow' + (a ? " alert" : "") + '"><div class="tfIcon' + (a ? " alert" : "") + '" aria-hidden="true"' + he(e, ga(e)) + '></div><button class="tfName" type="button" data-more="' + q(e) + '" data-at="' + Math.round(t.when * 1e3) + '" aria-label="' + q(o + ", " + i + ". More info") + '"><span class="activityRowName">' + q(o) + '</span><span class="activityRowMeta">' + q(i) + "</span></button></div>";
  }
  let qa = null, tc = 0;
  const vu = [["electricity", "Electricity", 4.3, "kWh"], ["solar", "Solar", 2.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function ec() {
    var e;
    if (Date.now() - tc < 5 * 60 * 1e3) return;
    tc = Date.now();
    const t = [];
    try {
      const a = ((e = await D({ type: "energy/get_prefs" })) == null ? void 0 : e.energy_sources) || [], o = (i) => a.filter((l) => l.type === i).flatMap((l) => i === "grid" ? (l.flow_from || []).map((c) => c.stat_energy_from) : [l.stat_energy_from]).filter(Boolean);
      for (const [i, l, c] of [["electricity", "Electricity", o("grid")], ["solar", "Solar", o("solar")], ["gas", "Gas", o("gas")], ["water", "Water", o("water")]]) {
        if (!c.length) continue;
        const u = await Promise.all(c.map((f) => Promise.resolve(D({ type: "recorder/statistic_during_period", statistic_id: f, calendar: { period: "day" }, types: ["change"] })).then((y) => Number(y == null ? void 0 : y.change) || 0, () => 0)));
        t.push({ key: i, name: l, id: c[0], ids: c, value: u.reduce((f, y) => f + y, 0), unit: Gt(c[0]).unit_of_measurement || (i === "gas" || i === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    qa = t, Pe();
  }
  let Wn = null, ac = [];
  function vs() {
    var l;
    const t = ac = qa != null && qa.length ? qa : vu.map(([c, u, f, y]) => {
      if (c === "solar") {
        const x = Object.keys(M).find((P) => P.endsWith("_solar_today") && !P.includes("made_up_energy"));
        x && Number.isFinite(Number(M[x].state)) && (f = Number(M[x].state));
      }
      const S = "sensor.made_up_energy_" + c;
      return M[S] = { entity_id: S, state: String(f), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: u + " today", unit_of_measurement: y, state_class: "total_increasing" } }, { key: c, name: u, id: S, value: f, unit: y };
    });
    ot.clear(), t.some((c) => c.id === Wn) || (Wn = t[0].id);
    const e = t.map((c) => {
      const u = Number(c.value).toLocaleString(void 0, { maximumFractionDigits: c.value < 10 ? 2 : 1 }) + " " + c.unit, f = q0[c.key], y = c.id === Wn;
      return ot.set(c.id, { name: c.name, text: u, icon: f }), '<div class="activityRow tap' + (y ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + q(c.id) + '" aria-pressed="' + y + '" aria-label="' + q(c.name + ", " + u) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + he("", f, c.name) + '></div><div><div class="activityRowName">' + q(c.name) + '</div><div class="activityRowMeta">' + q(u) + "</div></div></div>";
    }), a = t.find((c) => c.id === Wn), o = (((l = re().opts.energy) == null ? void 0 : l.graph) || "above") === "below", i = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + q(a.id) + '" role="img" aria-label="' + q(a.name) + ', last 24 hours"></svg></div>';
    return bo("dash:energy", 0, "Energy today", e, i, ae().some((c) => c.key === "energy") ? "summary:energy" : null, "tfDashCard tfDash-energy" + (o ? "" : " graphAbove"));
  }
  function oc(t) {
    const e = H.querySelector(".tfDash-energy"), a = e == null ? void 0 : e.querySelector(".tfDashGraph svg");
    !a || t === Wn || (Wn = t, e.querySelectorAll("[data-energy-pick]").forEach((o) => {
      const i = o.dataset.energyPick === t;
      o.classList.toggle("picked", i), o.setAttribute("aria-pressed", String(i));
    }), a.dataset.graph = t, a.dataset.drawn = "", ka.set("dash:energy", vs()), zc(!0));
  }
  const nc = {
    electricity: [15, 12, 10, 10, 10, 12, 25, 45, 40, 30, 25, 30, 35, 30, 25, 25, 35, 60, 80, 70, 55, 45, 30, 20],
    gas: [2, 2, 2, 2, 3, 8, 18, 20, 12, 6, 4, 4, 4, 4, 4, 5, 8, 14, 16, 14, 10, 6, 3, 2],
    water: [0, 0, 0, 0, 0, 2, 12, 18, 8, 4, 3, 4, 6, 3, 2, 3, 4, 6, 10, 8, 5, 5, 3, 1]
  }, rc = /* @__PURE__ */ new Map();
  async function yu(t) {
    const e = /* @__PURE__ */ new Date(), a = new Date(e).setHours(0, 0, 0, 0), o = e.getHours(), i = e.getMinutes() / 60, l = Array.from({ length: 24 }, (u, f) => f <= o ? 0 : null);
    if (!t.ids) {
      const u = nc[t.key] || nc.electricity, f = u.map((S, x) => x < o ? S : x === o ? S * i : 0), y = f.reduce((S, x) => S + x, 0) || 1;
      return l.map((S, x) => S == null ? null : t.value * f[x] / y);
    }
    const c = rc.get(t.id);
    if (c && c.day === a && Date.now() - c.at < 5 * 60 * 1e3) return c.hours;
    try {
      const u = await D({ type: "recorder/statistics_during_period", start_time: new Date(a).toISOString(), end_time: e.toISOString(), statistic_ids: t.ids, period: "hour", types: ["change"] });
      t.ids.forEach((S) => ((u == null ? void 0 : u[S]) || []).forEach((x) => {
        const P = typeof x.start == "number" ? x.start : Date.parse(x.start), L = new Date(P).getHours();
        P >= a && L < o && (l[L] += Number(x.change) || 0);
      }));
      const f = new Date(e).setMinutes(0, 0, 0), y = await Promise.all(t.ids.map((S) => Promise.resolve(D({ type: "recorder/statistic_during_period", statistic_id: S, fixed_period: { start_time: new Date(f).toISOString(), end_time: e.toISOString() }, types: ["change"] })).then((x) => Number(x == null ? void 0 : x.change) || 0, () => 0)));
      l[o] = y.reduce((S, x) => S + x, 0);
    } catch {
    }
    return rc.set(t.id, { at: Date.now(), day: a, hours: l }), l;
  }
  async function xu(t, e) {
    const a = await yu(e);
    if (!t.isConnected) return;
    const o = Math.max(120, t.clientWidth || 260), i = Math.max(60, t.clientHeight || 130), l = 18, c = i - 18, u = o / 24, f = u * 0.72, y = (/* @__PURE__ */ new Date()).getHours(), S = a.map((R) => R ?? 0), x = Math.max(0, ...S), P = (R) => c - (x > 0 ? R / x * (c - l) : 0), L = (R) => R.toLocaleString(void 0, { maximumFractionDigits: R < 10 ? 2 : 1 }) + " " + e.unit, B = (R) => String(R).padStart(2, "0") + ":00", k = x > 0 ? S.indexOf(x) : -1;
    t.setAttribute("viewBox", "0 0 " + o + " " + i), t.setAttribute("aria-label", e.name + " today by the hour: " + L(e.value) + (k >= 0 ? ", most " + L(x) + " at " + B(k) : "")), t.innerHTML = [l, (l + c) / 2, c].map((R) => '<line x1="0" x2="' + o + '" y1="' + R + '" y2="' + R + '" stroke="var(--line)" stroke-width="1"/>').join("") + a.map((R, _) => R > 0 ? '<rect x="' + (_ * u + (u - f) / 2).toFixed(1) + '" y="' + P(R).toFixed(1) + '" width="' + f.toFixed(1) + '" height="' + (c - P(R)).toFixed(1) + '" rx="2" fill="' + (_ === y ? "var(--primary)" : "var(--text)") + '"' + (_ === y ? "" : ' fill-opacity=".5"') + "/>" : "").join("") + [0, 6, 12, 18].map((R) => '<text x="' + (R * u).toFixed(1) + '" y="' + (i - 3) + '">' + String(R).padStart(2, "0") + "</text>").join("") + (k >= 0 ? '<text x="0" y="11">Most: ' + q(L(x)) + " at " + B(k) + "</text>" : "");
  }
  function Mu(t) {
    var e;
    (e = window.matchMedia) != null && e.call(window, "(prefers-reduced-motion: reduce)").matches || t.querySelectorAll("rect").forEach((a, o) => a.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], { duration: 500, delay: o * 18, easing: "cubic-bezier(.2,.7,.3,1)", fill: "backwards" }));
  }
  function ic(t) {
    var o;
    if ((o = window.matchMedia) != null && o.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [e, a] = t.querySelectorAll("path");
    Kp(t, a, [e].filter(Boolean));
  }
  let wi = null, ys = 0;
  const xs = (t) => !t.startsWith("light.") || W0.includes((Ct.get(t) || "").toLowerCase()), Ms = () => Math.max(2, en((H == null ? void 0 : H.clientWidth) || 0).n), sc = (t) => {
    const e = sa(t);
    return e.sections.map((a, o) => a && (e.parts || [])[o]).filter(Boolean);
  }, ku = (t) => sc(t).slice(0, Vn(t) - 1);
  function lc(t) {
    const e = re().tiles;
    if (e) return e.filter((o) => M[o] || m(o));
    if (!wi) {
      const o = (i) => {
        var l;
        return (((l = M[i]) == null ? void 0 : l.state) === "on" ? 1e6 : 0) + (Ka[i] || 0);
      };
      wi = {
        lights: zt.rooms.flatMap((i) => i.lights).filter((i) => {
          var l;
          return xs(i) && ((l = M[i]) == null ? void 0 : l.state) !== "unavailable";
        }).sort((i, l) => o(l) - o(i) || bt(i).localeCompare(bt(l))),
        climates: zt.rooms.flatMap((i) => i.actions.filter((l) => l.startsWith("climate.")))
      };
    }
    const a = wi.climates.filter((o) => M[o]).slice(0, t > 3 ? 2 : 1);
    return [...wi.lights.filter((o) => M[o]).slice(0, Math.max(0, t - a.length)), ...a];
  }
  const ks = () => {
    var t;
    return ((t = mt.home) == null ? void 0 : t.welcome) ?? !0;
  }, Su = () => {
    var e, a;
    const t = (e = d()) == null ? void 0 : e.user;
    return (t == null ? void 0 : t.name) || ((a = Object.values(M).find((o) => {
      var i;
      return o.entity_id.startsWith("person.") && (t == null ? void 0 : t.id) && ((i = o.attributes) == null ? void 0 : i.user_id) === t.id;
    })) == null ? void 0 : a.attributes.friendly_name) || "";
  }, _u = () => {
    const t = (/* @__PURE__ */ new Date()).getHours(), e = Su();
    return (t >= 5 && t < 12 ? "Good morning" : t >= 12 && t < 18 ? "Good afternoon" : "Good evening") + (e ? ", " + e : "");
  }, cc = (t, e, a, o) => (i) => '<section class="card tfCard tfDashCard ' + t + '" data-tf data-k="' + e + '" aria-label="' + a + '">' + (o ? '<div class="activityHeader">' + (e === "favs" ? '<button class="activityTitle tfTitleBtn" type="button" data-more="favourites" aria-label="Favourites. More info">' + a + "</button>" : '<div class="activityTitle">' + a + "</div>") + "</div>" : "") + '<div class="activityRows">' + i + "</div></section>";
  function Cu(t, e) {
    var l, c;
    t.dash = !0, t.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + ((T ? ks() : re().welcome) ? '<span class="tfGreeting">' + q(_u()) + "</span>" : "") + q(((c = (l = d()) == null ? void 0 : l.config) == null ? void 0 : c.location_name) || "Home") + "</h1>" }), e.length && t.push({ key: "sums", wrap: (u) => '<div class="tfDashBarRow" data-tf data-k="sums">' + cc("tfDash-bar", "sums-bar", "Summaries", !1)(u).replace(" data-tf", "") + "</div>", tiles: e.map((u) => ({ key: "sum:" + u.key, html: de(u) })) }), !T && On().length && t.push({ key: "areas", html: s(0) });
    const a = Ot();
    if (a.length && t.push({ key: "favs", wrap: cc("tfDash-favs", "favs", "Favourites", yi()), tiles: a.map((u) => ({ key: "fav:" + u, html: St(u, { area: !0 }) })) }), T)
      return ec(), xc() && t.push({ key: "dash:energy", html: vs() }), ys = Ms(), lc(0).forEach((u) => t.push({
        key: "dash:tile:" + u,
        wrap: (f) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + q(u) + '">' + f + "</div>",
        tiles: [{ key: u, html: b(m(u), u) }]
      })), t;
    const o = ca();
    t.push({ key: "dash:act", html: bo("dash:act", 0, "Activity", o.length ? o.map(wu) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), t.push({ key: "dash:energy", html: vs() });
    const i = Ms();
    return ys = i, lc(i >= 3 ? i : i * 2).forEach((u) => t.push({
      key: "dash:tile:" + u,
      wrap: (f) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + q(u) + '">' + f + "</div>",
      tiles: [{ key: u, html: h(u) ? b(m(u), u) : yr(u, !1, ku(u)) }]
    })), qn(), ec(), t;
  }
  const Cr = 252, pe = 16, Au = 200, Tu = Math.round(Cr * 1.25), Lu = 60, Wa = Lu + pe, Du = 3, dc = {
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
  }, Eu = ["wx", "favs", "act", "energy", "avg"], pc = ["XS", "S", "M", "L", "XL"], uc = pc.length, Bu = ["Narrow", "Wide", "Really wide"], Ru = { wx: 5, areas: 5, favs: 5, act: 5, energy: 4, avg: 4, aq: 4, pollen: 4, radar: 4, hourly: 4, sun: 4, moon: 4, uv: 4, humidity: 4, pressure: 4, wind: 4, visibility: 4 }, fc = (t) => !t.includes(".") || !M[t] || t.startsWith("light.") && _a(t) ? uc : Math.min(uc, sc(t).length + 1), Vn = (t) => {
    const e = re().opts[t] || {}, a = fc(t), o = Number(e.h) || (e.tall ? 5 : Ru[t] || hc);
    return Math.max(1, Math.min(a, o));
  }, hc = 2, Pu = 90, Hu = 56, Ta = (t) => {
    var e;
    return dc[t] || (t.startsWith("room:") ? ((e = Je.find((a) => "room:" + a.id === t)) == null ? void 0 : e.name) || "Area" : bt(t));
  }, Nu = 128;
  let da = !1, Qt = null, Qe = null, Ss = !1, wn = /* @__PURE__ */ new Map(), vi = 0, tn = 0;
  const yo = ["title", "sums"], en = (t) => {
    const e = Math.max(1, Math.floor((t + pe) / (Au + pe)));
    return { n: e, w: Math.max(1, Math.min(Tu, Math.floor((t - (e - 1) * pe) / e))) };
  }, _s = () => Jo(Je), Ou = () => {
    var e;
    const t = new Set(((e = mt.home) == null ? void 0 : e.areasOff) || []);
    return _s().filter((a) => !t.has(a.id)).map((a) => "room:" + a.id);
  };
  function Iu() {
    const t = Ou();
    return {
      cells: {},
      spans: { favs: 2 },
      hidden: Object.keys(dc).filter((e) => {
        var a, o;
        return !["title", ...((a = mt.home) == null ? void 0 : a.sums) === !1 ? [] : ["sums"], ...((o = mt.home) == null ? void 0 : o.favs) === !1 ? [] : ["favs"], ...Vu() ? ["wx"] : [], ...xc() ? ["energy"] : []].includes(e);
      }),
      opts: { favs: { h: 5 }, ...Object.fromEntries(t.map((e) => [e, { h: 5 }])) },
      tiles: t,
      known: Wo,
      areasOff: []
    };
  }
  const re = () => T ? Iu() : Cs(), Cs = () => {
    let t = { cells: {}, spans: {}, hidden: [], opts: {}, ...mt.dash || {} };
    t.sumsOff && (t = { ...t, hidden: [...t.hidden, "sums"] });
    const e = Wo.filter((a) => !(t.known || []).includes(a) && !t.hidden.includes(a));
    return e.length ? { ...t, hidden: [...t.hidden, ...e] } : t;
  };
  function vn(t) {
    T || (mt = { ...mt, dash: { ...t, known: Wo } }, je());
  }
  function yn() {
    const t = (e) => H.querySelector(e);
    return [
      ["title", t(".tfDashTitle"), "full"],
      ["sums", t(".tfDashBarRow"), "full"],
      ["wx", Xa.wx, 2],
      ["areas", t(".tfAreas"), "areas"],
      ["favs", t(".tfDash-favs"), 2],
      ["act", t(".tfDash-act"), 2],
      ["energy", t(".tfDash-energy"), 2],
      ["avg", Xa.avg, 2],
      ...Wo.map((e) => [e, Xa[e], is[e] || 1]),
      ...[...H.querySelectorAll(".tfDashTiles > [data-k]")].map((e) => [e.dataset.k, e, 1, !0])
    ].filter(([, e]) => e == null ? void 0 : e.isConnected).map(([e, a, o, i = !1]) => ({ key: e, el: a, span: o, tile: i }));
  }
  const mc = (t, e, a) => {
    var o;
    if (t.span === "full") return e;
    if (t.span === "areas") {
      const i = 2 * a + pe;
      t.el.style.setProperty("--area-open", i + "px");
      const l = Math.ceil((i + Math.max(0, On().length - 1) * (Nu + pe) + pe) / (a + pe));
      return Math.max(Math.min(e, 2), Math.min(l, e - (((o = re().cells.areas) == null ? void 0 : o.col) || 0)));
    }
    return Math.min(e, re().spans[t.key] ?? t.span);
  }, gc = (t) => Vn(t.key);
  function bc(t, e, a = null) {
    const o = re().cells, i = t.every((u) => !o[u.key] || o[u.key].col + u.cols <= e), l = (u) => o[u.key] || { row: 1e9, col: 0 };
    return (() => {
      const u = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map(), y = (k, R, _, z) => {
        for (let A = R; A < R + z; A++) for (let rt = k; rt < k + _; rt++) if (u.has(rt + "," + A)) return !1;
        return !0;
      }, S = (k, R, _) => {
        for (let z = _; z < _ + k.rows; z++) for (let A = R; A < R + k.cols; A++) u.add(A + "," + z);
        f.set(k.key, { col: R, row: _, cols: k.cols, rows: k.rows });
      }, x = (k, R, _) => {
        for (R = Math.max(0, Math.min(e - k.cols, R)), _ = Math.max(0, _); !y(R, _, k.cols, k.rows); ) _++;
        S(k, R, _);
      }, P = (k) => {
        for (let R = 0; ; R++) for (let _ = 0; _ <= e - k.cols; _++) if (y(_, R, k.cols, k.rows)) {
          S(k, _, R);
          return;
        }
      };
      a && x(a, Qt.col, Qt.row);
      const L = t.filter((k) => k !== a), B = (k, R) => l(k).row - l(R).row || l(k).col - l(R).col;
      return i ? (L.filter((k) => o[k.key]).sort(B).forEach((k) => x(k, o[k.key].col, o[k.key].row)), L.filter((k) => !o[k.key]).forEach(P), f) : ([...L].sort(B).forEach(P), f);
    })();
  }
  function Fu(t, e) {
    const a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map(), i = (l, c, u) => {
      for (let f = c; f < c + u.rows; f++) for (let y = l; y < l + u.cols; y++) if (a.has(y + "," + f)) return !1;
      return !0;
    };
    return t.forEach((l) => {
      for (let c = 0; ; c++) {
        let u = 0;
        for (; u <= e - l.cols && !i(u, c, l); ) u++;
        if (!(u > e - l.cols)) {
          for (let f = c; f < c + l.rows; f++) for (let y = u; y < u + l.cols; y++) a.add(y + "," + f);
          o.set(l.key, { col: u, row: c, cols: l.cols, rows: l.rows });
          return;
        }
      }
    }), o;
  }
  function As() {
    const t = re(), e = new Set(t.hidden), a = yn().filter((c) => !yo.includes(c.key));
    let o = wn;
    if (!o.size) {
      const c = t.pegs || 4, u = a.filter((f) => !e.has(f.key));
      u.forEach((f) => {
        f.cols = mc(f, c, Cr), f.rows = gc(f) ?? hc;
      }), o = bc(u, c);
    }
    const i = (c) => !e.has(c.key) && o.get(c.key) || { row: 1e9, col: 0 };
    a.sort((c, u) => i(c).row - i(u).row || i(c).col - i(u).col);
    const l = (t.phone || []).map((c) => a.find((u) => u.key === c && !e.has(c))).filter(Boolean);
    return [...l, ...a.filter((c) => !l.includes(c))];
  }
  const qu = () => {
    const t = As();
    t.forEach((e, a) => e.el.style.setProperty("--o", String(3 + a))), Ts([...yn().filter((e) => yo.includes(e.key)), ...t].map((e) => e.el));
  };
  function Ts(t) {
    if (Qt) return;
    const e = n.activeElement;
    let a = null;
    for (const o of new Set(t.map((i) => {
      for (; i && i.parentElement !== H; ) i = i.parentElement;
      return i;
    }).filter(Boolean))) {
      const i = a ? a.nextSibling : H.querySelector(":scope > [data-tf]");
      if (o !== i)
        try {
          H.moveBefore ? H.moveBefore(o, i) : H.insertBefore(o, i);
        } catch {
          H.insertBefore(o, i);
        }
      a = o;
    }
    e && e !== n.activeElement && e.isConnected && e.focus({ preventScroll: !0 });
  }
  const jn = (t, e) => vn({ ...t, cells: e, pegs: en(H.clientWidth).n });
  function Ls(t) {
    const e = H == null ? void 0 : H.querySelector('.tfAreas[data-k="areas"] .tfAreaGallery'), a = e == null ? void 0 : e.querySelector(".tfAreaPanel.active");
    if (!a || e.scrollWidth <= e.clientWidth) return;
    const o = e.getBoundingClientRect(), i = a.getBoundingClientRect(), l = i.right > o.right ? i.right - o.right : i.left < o.left ? i.left - o.left : 0;
    l && e.scrollBy({ left: l, behavior: t ? "smooth" : "auto" });
  }
  function qe() {
    var z;
    if (requestAnimationFrame(() => Ls(!1)), setTimeout(() => Ls(!1), 360), !w || !H) return;
    const t = H.clientWidth, e = t < 2 * Cr + pe, a = g.classList.contains("tfDash");
    T && (da = !1), g.classList.toggle("tfOverview", T);
    const { n: o, w: i } = e ? { n: 2, w: Math.floor((t - pe) / 2) } : en(t);
    Sa.classList.add("tfPegs"), Sa.style.setProperty("--peg-n", o), Sa.style.setProperty("--peg-w", i + "px");
    const l = new Set(re().hidden);
    Wo.forEach((A) => {
      var rt;
      return (rt = Xa[A]) == null ? void 0 : rt.classList.toggle("tfNotAdded", l.has(A) && !(Qt != null && Qt.fromTray && Qt.key === A));
    }), Qr(), g.classList.toggle("tfBoard", a), g.classList.toggle("tfEditing", a && da && !e);
    const c = p("dashEditNav");
    !a && Co && Ks(!1), c && T ? (c.hidden = !a, Co || (c.classList.remove("active"), c.setAttribute("aria-pressed", "false"), c.setAttribute("aria-label", "Edit Home page"), c.title = "Edit", c.innerHTML = Ki)) : c && (c.hidden = !a || e, c.classList.toggle("active", da), c.setAttribute("aria-pressed", String(da)), c.setAttribute("aria-label", da ? "Done editing" : "Edit custom dashboard"), c.title = da ? "Done" : "Edit", c.innerHTML = da ? _p : Ki);
    const u = a ? yn() : [];
    if ((!a || !T) && H.querySelectorAll(":scope > :is(.hcFloor,.hcFloorBox)").forEach((A) => A.remove()), !a) {
      H.style.height = "", H.querySelectorAll(".tfBoardItem").forEach((A) => {
        A.classList.remove("tfBoardItem", "tfBoardHidden"), A.style.left = A.style.top = A.style.width = A.style.height = "";
      }), (z = H.querySelector(".tfDash-act > .activityRows")) == null || z.style.removeProperty("max-height"), Rs(!1), g.classList.contains("tfDash") && qu(), _e();
      return;
    }
    if (T) {
      Gu(u, t, e);
      return;
    }
    H.style.setProperty("--peg-w", i + "px");
    const f = new Set(re().hidden), y = i + pe;
    Qt != null && Qt.fromTray && f.delete(Qt.key), u.forEach((A) => A.el.classList.toggle("tfBoardHidden", f.has(A.key)));
    const S = u.filter((A) => !f.has(A.key) && getComputedStyle(A.el).display !== "none");
    let x = 0;
    S.filter((A) => yo.includes(A.key)).forEach((A) => {
      A.el.classList.add("tfBoardItem"), Object.assign(A.el.style, { width: t + "px", height: "", left: "0px", top: x + "px" });
      const rt = A.key === "sums" && A.el.querySelector(".tfDash-bar"), Tt = rt ? rt.querySelectorAll(".activityRow").length : 0;
      rt && (rt.style.maxWidth = "none");
      for (let Rt = 1; rt && Rt <= Tt && (rt.style.setProperty("--bar-cols", String(Math.ceil(Tt / Rt))), !(rt.offsetWidth <= t)); Rt++)
        ;
      rt && (rt.style.maxWidth = ""), x += A.el.offsetHeight + pe;
    }), tn = x;
    const P = S.filter((A) => !yo.includes(A.key));
    P.forEach((A) => {
      A.cols = mc(A, o, i), A.el.classList.add("tfBoardItem"), A.el.style.width = (A.cols === o ? t : A.cols * i + (A.cols - 1) * pe) + "px", A.el.style.height = "", A.rows = gc(A) ?? Math.max(1, Math.ceil((A.el.offsetHeight + pe - 6) / Wa));
    });
    const L = Qt && P.find((A) => A.key === Qt.key), B = e && As().map((A) => A.key), k = (A) => B.includes(A.key) ? B.indexOf(A.key) : -1, R = e ? Fu([...P].sort((A, rt) => k(A) - k(rt)), o) : bc(P, o, L);
    R.forEach((A) => Object.assign(A, { x: A.cols === o ? 0 : A.col * y, y: tn + A.row * Wa, w: A.cols === o ? t : A.cols * i + (A.cols - 1) * pe, h: A.rows * Wa - pe })), P.forEach((A) => {
      const rt = R.get(A.key);
      A.el.style.height = rt.h + "px", A.el.dataset.rows = e && A.key === "wx" ? 5 : Vn(A.key), A.key === "areas" && A.el.querySelectorAll(".tfAreaPanel .tfRoomTile").forEach((Tt) => {
        Tt.dataset.rows = A.el.dataset.rows;
      }), A.el.toggleAttribute("data-narrow", !e && rt.cols === 1 && o > 1), A.el.dataset.cols = rt.cols, A.el.classList.contains("tfDac") && A.el.style.setProperty("--tf-dac-pad", rt.h - Pu + "px"), !(A === L && !Qt.fromTray) && (A.el.style.left = rt.x + "px", A.el.style.top = rt.y + "px");
    }), e || (wn = R), Ts([...S.filter((A) => yo.includes(A.key)), ...P.slice().sort((A, rt) => R.get(A.key).row - R.get(rt.key).row || R.get(A.key).col - R.get(rt.key).col)].map((A) => A.el)), [["favs", ".tfDash-favs"], ["act", ".tfDash-act"]].forEach(([A, rt]) => {
      const Tt = R.get(A), Rt = Tt && H.querySelector(rt), Pt = Rt == null ? void 0 : Rt.querySelector(":scope > .activityRows"), le = Rt == null ? void 0 : Rt.querySelector(":scope > .activityHeader");
      if (!Pt || !le) return;
      const At = Pt.getBoundingClientRect().top - Rt.getBoundingClientRect().top, Bt = Tt.rows === 1 ? Tt.h : Math.floor(Tt.h - At - parseFloat(getComputedStyle(Rt).paddingBottom)), ve = Math.max(1, Math.floor(Bt / Hu));
      Pt.style.setProperty("--fill-row", (Bt / ve).toFixed(2) + "px"), Pt.style.maxHeight = Bt + "px";
    }), vi = Math.max(0, ...[...R.values()].map((A) => A.row + A.rows));
    let _ = tn + vi * Wa - pe;
    _ = Rs(da && !e, P, R, _, o, i), H.style.height = _ + "px", requestAnimationFrame(() => g.classList.add("tfBoardReady")), u.forEach((A) => Bs.observe(A.el)), zc(), _e();
  }
  const xo = { row: 337, nameGap: 16, sumsGap: 16, full: 1336, floorTop: 12, floorHead: 24, floorGap: 16 }, wc = { s: { w: 252, h: 136, rows: 2 }, m: { w: 252, h: 212, rows: 3 }, l: { w: 252, h: 288, rows: 4 } }, vc = () => {
    var t;
    return wc[(t = mt.home) == null ? void 0 : t.areaSize] ? mt.home.areaSize : "s";
  }, Ds = () => {
    var t;
    return ["rows", "columns", "bento"].includes((t = mt.home) == null ? void 0 : t.areaLayout) ? mt.home.areaLayout : "bento";
  }, yc = () => {
    var t;
    return ((t = mt.home) == null ? void 0 : t.cardsAs) === "rows" ? "rows" : "stacked";
  }, Wu = { byFloor: !0, bentoBoxes: !0, bentoMixed: !1, favsTitle: !1 }, yi = () => T ? Mo("favsTitle") : mt.favsTitle !== !1, Vu = () => {
    var t;
    return !!((t = mt.home) != null && t.weather && Vt());
  }, xc = () => {
    var t;
    return !!((t = mt.home) != null && t.energy && (qa != null && qa.length));
  }, Mo = (t) => {
    var e;
    return ((e = mt.home) == null ? void 0 : e[t]) ?? Wu[t];
  };
  function ju() {
    var i;
    const t = Object.values(((i = d()) == null ? void 0 : i.floors) || {}), e = new Set(t.map((l) => l.floor_id)), a = t.map((l) => ({ id: l.floor_id, name: l.name, rooms: Je.filter((c) => c.floor === l.floor_id) })), o = Je.filter((l) => !e.has(l.floor));
    return o.length && a.push({ id: "", name: t.length ? "Other areas" : "", rooms: o }), a;
  }
  const Mc = (t) => t.classList.toggle("hcMore", t.scrollHeight - t.scrollTop - t.clientHeight > 1);
  let xe = null, kc = [], Ar = /* @__PURE__ */ new Map();
  function Es(t) {
    let e = H.querySelector(".hcHomeLand");
    if (!t) {
      e == null || e.remove();
      return;
    }
    e || (e = Object.assign(document.createElement("div"), { className: "tfBoardLand hcHomeLand" }), H.appendChild(e)), Object.assign(e.style, { left: t.x + "px", top: t.y + "px", width: t.w + "px", height: t.h + "px" });
  }
  function zu(t) {
    if (!T || !Co || t.button !== 0 || H.clientWidth < 2 * Cr + pe) return;
    const e = t.target.closest(".tfBoardItem"), a = e && yn().find((u) => u.el === e);
    if (!a || yo.includes(a.key) || h(a.key)) return;
    t.preventDefault();
    const o = H.getBoundingClientRect(), i = Ar.get(a.key);
    xe = { key: a.key, el: e, on: !1, x0: t.clientX, y0: t.clientY, left: i.x, top: i.y, order: [...kc] };
    const l = (u) => {
      const f = u.clientX - xe.x0, y = u.clientY - xe.y0;
      if (!xe.on && Math.hypot(f, y) < 5) return;
      xe.on || (xe.on = !0, e.classList.add("tfDragging"), Ue() || e.animate([{ scale: "1" }, { scale: "1.05" }, { scale: "1.02" }], { duration: 260, easing: "cubic-bezier(.2,1.35,.4,1)" })), Object.assign(e.style, { left: xe.left + f + "px", top: xe.top + y + "px" });
      const S = u.clientX - o.left, x = u.clientY - o.top + H.scrollTop;
      let P = null, L = 1 / 0;
      if (Ar.forEach((_, z) => {
        if (z === a.key || !xe.order.includes(z)) return;
        const A = Math.hypot(S - (_.x + _.w / 2), x - (_.y + _.h / 2));
        A < L && (L = A, P = { key: z, b: _ });
      }), !P) return;
      const B = xe.order.filter((_) => _ !== a.key), k = B.indexOf(P.key) + (S > P.b.x + P.b.w / 2 ? 1 : 0), R = [...B.slice(0, k), a.key, ...B.slice(k)];
      R.join() !== xe.order.join() ? (xe.order = R, qe()) : Es(Ar.get(a.key));
    }, c = () => {
      removeEventListener("pointermove", l), removeEventListener("pointerup", c), removeEventListener("pointercancel", c);
      const u = xe;
      xe = null, e.classList.remove("tfDragging"), u.on && xa({ order: u.order }), qe(), u.on && !Ue() && setTimeout(() => Bl(e), 340);
    };
    addEventListener("pointermove", l), addEventListener("pointerup", c), addEventListener("pointercancel", c);
  }
  function Gu(t, e, a) {
    var Md;
    const o = new Set(re().hidden);
    t.forEach((pt) => pt.el.classList.toggle("tfBoardHidden", o.has(pt.key)));
    const i = t.filter((pt) => !o.has(pt.key) && getComputedStyle(pt.el).display !== "none"), l = pe, c = a ? { w: Math.floor((e - l) / 2) } : en(e), u = Math.min(e, xo.full);
    let f = 0;
    const y = Ti();
    g.classList.toggle("hcSumsFit", Rc()), g.classList.toggle("hcFavStrip", y);
    const S = i.filter((pt) => yo.includes(pt.key) || y && pt.key === "favs");
    S.sort((pt, Nt) => ["title", "sums", "favs"].indexOf(pt.key) - ["title", "sums", "favs"].indexOf(Nt.key)), S.forEach((pt) => {
      pt.el.classList.add("tfBoardItem"), pt.el.toggleAttribute("data-narrow", !1), Object.assign(pt.el.style, { width: (pt.key === "title" ? e : u) + "px", height: "", left: "0px", top: f + "px" });
      const Nt = pt.key !== "title" && (pt.el.querySelector(".tfDash-bar>.activityRows") || pt.key === "favs" && pt.el.querySelector(":scope>.activityRows")), Ae = Nt ? Nt.children.length : 0;
      if (Nt && (Nt.classList.remove("hcBarRows"), !a && Nt.scrollWidth > Nt.clientWidth + 1))
        for (let Yt = 2; Yt <= Ae && (Nt.classList.add("hcBarRows"), Nt.style.setProperty("--bar-cols", String(Math.ceil(Ae / Yt))), !(Nt.scrollWidth <= Nt.clientWidth + 1)); Yt++)
          ;
      f += pt.el.offsetHeight + (pt.key === "title" ? xo.nameGap : xo.sumsGap);
    });
    const x = ["favs", "wx", "energy"], P = (xe == null ? void 0 : xe.order) || ((Md = mt.home) == null ? void 0 : Md.order), L = P ? [...P.filter((pt) => x.includes(pt)), ...x.filter((pt) => !P.includes(pt))] : x;
    kc = L;
    const B = i.filter((pt) => x.includes(pt.key) && !(y && pt.key === "favs")).sort((pt, Nt) => L.indexOf(pt.key) - L.indexOf(Nt.key));
    Ar = /* @__PURE__ */ new Map();
    const k = (pt, Nt) => {
      if (Ar.set(pt.key, Nt), Object.assign(pt.el.style, { width: Nt.w + "px", height: Nt.h + "px" }), xe != null && xe.on && xe.key === pt.key) {
        Es(Nt);
        return;
      }
      Object.assign(pt.el.style, { left: Nt.x + "px", top: Nt.y + "px" });
    }, R = a ? e : 2 * c.w + l, _ = xo.row, z = yc() === "stacked" && !a && B.length > 0;
    let A = 0, rt = 0, Tt = f;
    B.forEach((pt) => {
      pt.el.classList.add("tfBoardItem"), pt.el.dataset.rows = 5, pt.el.dataset.cols = 2, pt.el.toggleAttribute("data-narrow", !1), !z && A && A + R > e && (f += rt + l, A = 0, rt = 0);
      let Nt = _;
      if ((a || pt.key === "favs") && (Object.assign(pt.el.style, { width: R + "px", height: "" }), Nt = pt.el.offsetHeight), z) {
        k(pt, { x: 0, y: Tt, w: R, h: Nt }), Tt += Nt + l;
        return;
      }
      k(pt, { x: A, y: f, w: R, h: Nt }), A += R + l, rt = Math.max(rt, Nt);
    }), B.length && !z && (f += rt + l);
    const Rt = z ? R + l : 0, Pt = z ? e - R - l : e, le = a ? "l" : vc(), At = wc[le], Bt = Ds(), ve = Mo("byFloor"), Ce = c.w, He = At.h, Oe = a ? 2 : Math.max(1, Math.floor((Pt + l) / (Ce + l))), Qn = new Map(i.filter((pt) => h(pt.key)).map((pt) => [pt.key, pt])), Ba = (ve ? ju() : [{ id: "", name: "", icon: "", rooms: Je }]).map((pt) => ({ ...pt, cards: pt.rooms.map((Nt) => Qn.get("room:" + Nt.id)).filter(Boolean) })).filter((pt) => pt.cards.length), Ni = Bt === "bento", Oi = Ni && Mo("bentoMixed"), Yf = Ni && ve && Mo("bentoBoxes"), Zf = Bt === "columns" && ve && !a, Lo = 12, yd = (pt) => pt.name ? xo.floorHead + xo.floorGap : 0, Or = (pt, Nt, Ae) => {
      const Yt = /* @__PURE__ */ new Set(), ie = [];
      pt.cards.forEach((Xt, lo) => {
        const an = Oi && lo === 0 && Nt >= 2 && pt.cards.length > 1, Ve = an ? 2 : 1, Do = an && !a ? 2 : 1;
        Xt.el.classList.add("tfBoardItem"), Xt.el.dataset.cols = Ve, Xt.el.toggleAttribute("data-narrow", !1);
        for (let Cn = 0; ; Cn++) {
          const An = [...Array(Math.max(0, Nt - Ve + 1)).keys()].find((Ir) => [...Array(Ve).keys()].every((Ua) => [...Array(Do).keys()].every((Ii) => !Yt.has(Cn + Ii + "," + (Ir + Ua)))));
          if (An != null) {
            [...Array(Ve).keys()].forEach((Ir) => [...Array(Do).keys()].forEach((Ua) => Yt.add(Cn + Ua + "," + (An + Ir)))), ie.push({ it: Xt, r: Cn, c: An, sc: Ve, sr: Do });
            break;
          }
        }
      });
      const se = Math.max(0, ...ie.map((Xt) => Xt.r + Xt.sr));
      Ni && !a && ie.forEach((Xt) => {
        for (; Xt.r + Xt.sr < se && !Yt.has(Xt.r + Xt.sr + "," + Xt.c) && Xt.sc === 1; )
          Yt.add(Xt.r + Xt.sr + "," + Xt.c), Xt.sr++;
      }), ie.forEach((Xt) => {
        Xt.it.el.dataset.rows = Math.min(5, Xt.sr * At.rows), Object.assign(Xt.it.el.style, { width: Xt.sc * Ae + (Xt.sc - 1) * l + "px", height: Xt.sr * He + (Xt.sr - 1) * l + "px" });
      });
      const Zt = [...Array(se)].map(() => He), be = [];
      let Ma = yd(pt);
      return Zt.forEach((Xt, lo) => {
        be[lo] = Ma, Ma += Xt + l;
      }), { h: Ma - (se ? l : 0), places: ie.map((Xt) => ({ it: Xt.it, x: Xt.c * (Ae + l), y: be[Xt.r], w: Xt.sc * Ae + (Xt.sc - 1) * l, h: Zt.slice(Xt.r, Xt.r + Xt.sr).reduce((lo, an) => lo + an, 0) + (Xt.sr - 1) * l })) };
    }, vl = new Map([...H.querySelectorAll(":scope > .hcFloor")].map((pt) => [pt.dataset.floor, pt])), yl = new Map([...H.querySelectorAll(":scope > .hcFloorBox")].map((pt) => [pt.dataset.floor, pt])), xd = [], Kf = (pt, Nt, Ae, Yt) => {
      if (!pt.name) return;
      let ie = vl.get(pt.id);
      vl.delete(pt.id), ie || (ie = Object.assign(document.createElement("div"), { className: "hcFloor" }), ie.dataset.floor = pt.id, H.appendChild(ie)), ie.dataset.sig !== pt.name && (ie.dataset.sig = pt.name, ie.innerHTML = '<h2 class="hcFloorName">' + q(pt.name) + "</h2>"), Object.assign(ie.style, { left: Nt + "px", top: Ae + "px", width: Yt + "px" }), xd.push(ie);
    }, Xf = (pt, Nt, Ae, Yt, ie) => {
      let se = yl.get(pt.id);
      yl.delete(pt.id), se || (se = Object.assign(document.createElement("div"), { className: "hcFloorBox" }), se.dataset.floor = pt.id, se.setAttribute("aria-hidden", "true"), H.prepend(se)), Object.assign(se.style, { left: Nt + "px", top: Ae + "px", width: Yt + "px", height: ie + "px" });
    }, $f = (pt) => parseFloat(getComputedStyle(pt.cards[0].el).paddingLeft) || 0, xl = (pt, Nt, Ae, Yt, ie = 0) => {
      Kf(pt, Ae + ie, Yt, (Nt.w ?? e) - ie), Nt.places.forEach((se) => k(se.it, { x: Ae + se.x, y: Yt + se.y, w: se.w, h: se.h }));
    };
    if (Ba.length && B.length && !z && (f += xo.floorTop), Zf) {
      let pt = 0, Nt = f;
      Ba.forEach((Ae) => {
        const Yt = { ...Or(Ae, 1, Ce), w: Ce };
        pt && pt + Ce > Pt && (f = Nt + l + xo.floorTop, pt = 0), xl(Ae, Yt, Rt + pt, f), Nt = Math.max(Nt, f + Yt.h), pt += Ce + l;
      }), f = Nt + l;
    } else if (Yf) {
      let pt = [{ x0: 0, x1: Pt, t: f }];
      const Nt = (Yt, ie) => Math.max(...pt.filter((se) => se.x1 > Yt && se.x0 < ie).map((se) => se.t)), Ae = (Yt, ie, se) => {
        const Zt = [];
        pt.forEach((be) => {
          be.x1 <= Yt || be.x0 >= ie ? Zt.push(be) : (be.x0 < Yt && Zt.push({ x0: be.x0, x1: Yt, t: be.t }), be.x1 > ie && Zt.push({ x0: ie, x1: be.x1, t: be.t }));
        }), Zt.push({ x0: Yt, x1: ie, t: se }), pt = Zt.sort((be, Ma) => be.x0 - Ma.x0);
      };
      Ba.forEach((Yt) => {
        const ie = Yt.cards.length + (Oi && Yt.cards.length > 1 ? 3 : 0);
        let se = a ? 2 : Math.min(Oe, Math.max(Oi && Yt.cards.length > 1 ? 2 : 1, ie <= 3 ? ie : Math.ceil(ie / 2)));
        for (; !a && se > 1 && se * Ce + (se - 1) * l + 2 * Lo > Pt; ) se--;
        let Zt = null;
        for (let Ve = se; Ve >= (a ? se : 1); Ve--) {
          const Do = Math.min(Ce, Math.floor((Pt - 2 * Lo - (Ve - 1) * l) / Ve)), Cn = { ...Or(Yt, Ve, Do), w: Ve * Do + (Ve - 1) * l }, An = Cn.w + 2 * Lo, Ir = Cn.h + 2 * Lo;
          pt.map((Ua) => Ua.x0).filter((Ua) => Ua + An <= Pt + 0.5).forEach((Ua) => {
            const Ii = Nt(Ua, Ua + An);
            (!Zt || Ii < Zt.t - 0.5) && (Zt = { cc: Ve, inner: Do, bw: An, h: Ir, t: Ii, x: Ua });
          });
        }
        if (!Zt) {
          const Ve = Math.min(Ce, Pt - 2 * Lo), Do = Or(Yt, 1, Ve);
          Zt = { cc: 1, inner: Ve, bw: Ve + 2 * Lo, h: Do.h + 2 * Lo, t: Nt(0, Pt), x: 0 };
        }
        const be = { ...Or(Yt, Zt.cc, Zt.inner), w: Zt.cc * Zt.inner + (Zt.cc - 1) * l }, Ma = Zt.bw, Xt = Zt.h, lo = Zt.x, an = Zt.t;
        Xf(Yt, Rt + lo, an, Ma, Xt), xl(Yt, be, Rt + lo + Lo, an + Lo, $f(Yt)), Ae(lo, Math.min(Pt, lo + Ma + l), an + Xt + l);
      }), f = Math.max(...pt.map((Yt) => Yt.t));
    } else {
      const pt = (Nt) => {
        var se;
        if (!((se = mt.home) != null && se.fitTogether) || a) return Oe;
        const Ae = z ? Tt - l - f : null, Yt = (Zt) => {
          const be = Nt.cards.length + (Oi && Nt.cards.length > 1 && Zt >= 2 ? 3 : 0), Ma = Math.ceil(be / Zt);
          return { holes: Ma * Zt - be, rows: Ma, h: yd(Nt) + Ma * He + (Ma - 1) * l, w: Zt * Ce + (Zt - 1) * l };
        }, ie = (Zt) => Zt.holes === 0 || Ni && Zt.holes === 1 && Zt.rows > 1;
        for (let Zt = 1; Zt <= Oe; Zt++) {
          const be = Yt(Zt);
          if (ie(be) && be.h <= (Ae ?? be.w)) return Zt;
        }
        for (let Zt = 1; Zt <= Oe; Zt++) {
          const be = Yt(Zt);
          if (be.h <= (Ae ?? be.w)) return Zt;
        }
        return Oe;
      };
      Ba.forEach((Nt, Ae) => {
        Ae && (f += xo.floorTop);
        const Yt = Or(Nt, pt(Nt), Ce);
        xl(Nt, { ...Yt, w: Pt }, Rt, f), f += Yt.h + l;
      });
    }
    z && (f = Math.max(f, Tt)), vl.forEach((pt) => pt.remove()), yl.forEach((pt) => pt.remove()), xe != null && xe.on || Es(null), H.style.height = Math.max(0, f - l) + "px", Ts([...S.map((pt) => pt.el), ...B.map((pt) => pt.el), ...xd, ...Ba.flatMap((pt) => pt.cards.map((Nt) => Nt.el))]), Rs(!1), t.forEach((pt) => [...pt.el.children].forEach((Nt) => Nt.toggleAttribute("inert", Co)));
    const Ml = H.querySelector(".tfDash-favs>.activityRows");
    Ml && (Ml.classList.toggle("hcFadeList", !y), Mc(Ml)), requestAnimationFrame(() => g.classList.add("tfBoardReady")), t.forEach((pt) => Bs.observe(pt.el)), _e();
  }
  const xi = () => {
    Ss || (Ss = !0, requestAnimationFrame(() => {
      Ss = !1, qe();
    }));
  }, Bs = new ResizeObserver(() => {
    Qt || xi();
  });
  function Uu(t, e, a) {
    const o = a + pe, i = t * a + (t - 1) * pe, l = e * Wa - pe, c = pe / 2, u = o / Math.max(1, Math.round(o / (Wa / 4))), f = Wa / 4, y = 6;
    let S = "";
    for (let x = 0; x <= t; x++) for (let P = 0; P <= e; P++) {
      const L = x * o - c, B = P * Wa - c;
      S += "M" + (L - y) + " " + B + "H" + (L + y) + "M" + L + " " + (B - y) + "V" + (B + y);
    }
    return '<svg width="' + i + '" height="' + l + '" viewBox="0 0 ' + i + " " + l + '"><defs><pattern id="tfGridDots" patternUnits="userSpaceOnUse" x="' + -c + '" y="' + -c + '" width="' + u.toFixed(3) + '" height="' + f + '"><circle cx="0" cy="0" r="1.4"></circle><circle cx="' + u.toFixed(3) + '" cy="0" r="1.4"></circle><circle cx="0" cy="' + f + '" r="1.4"></circle><circle cx="' + u.toFixed(3) + '" cy="' + f + '" r="1.4"></circle></pattern></defs><rect class="tfGridDots" x="' + -c + '" y="' + -c + '" width="' + (i + pe) + '" height="' + (l + pe) + '" fill="url(#tfGridDots)"></rect><path class="tfGridCross" d="' + S + '"></path></svg>';
  }
  function Rs(t, e = [], a = /* @__PURE__ */ new Map(), o = 0, i = 1, l = Cr) {
    H.querySelectorAll(".tfEditChips").forEach((S) => {
      (!t || !S.closest(".tfBoardItem")) && S.remove();
    }), H.querySelectorAll(".tfFavHides").forEach((S) => S.remove()), H.querySelectorAll(".tfBoardItem").forEach((S) => [...S.children].forEach((x) => {
      x.classList.contains("tfEditChips") || x.toggleAttribute("inert", t);
    }));
    let c = H.querySelector(".tfBoardCells"), u = H.querySelector(".tfBoardLand");
    if (!t)
      return c == null || c.remove(), u == null || u.remove(), no(), o;
    const f = vi + Du;
    if (c || (c = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), c.setAttribute("aria-hidden", "true"), H.prepend(c)), c.style.top = tn + "px", c.dataset.size !== i + "x" + f + "x" + l && (c.dataset.size = i + "x" + f + "x" + l, c.innerHTML = Uu(i, f, l)), o = Math.max(o, tn + f * Wa - pe), e.forEach((S) => {
      const x = S.el;
      !x || x.querySelector(":scope > .tfEditChips") || x.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + zr + '</span><button class="tfEditChip" type="button" data-board-more="' + q(S.key) + '" aria-label="' + q(Ta(S.key)) + ' options" aria-haspopup="menu">' + P0 + "</button></div>");
    }), Qt && a.has(Qt.key)) {
      u || (u = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), H.appendChild(u));
      const S = a.get(Qt.key);
      Object.assign(u.style, { left: S.x + "px", top: S.y + "px", width: S.w + "px", height: S.h + "px" });
    } else u == null || u.remove();
    const y = H.querySelector(".tfDash-favs.tfBoardItem:not(.tfBoardHidden)");
    if (y) {
      const S = y.getBoundingClientRect();
      y.insertAdjacentHTML("beforeend", '<div class="tfFavHides">' + [...y.querySelectorAll('[data-k^="fav:"]')].map((x) => {
        const P = x.getBoundingClientRect(), L = x.dataset.k.slice(4);
        return '<button class="tfFavHide" type="button" data-fav-hide="' + q(L) + '" aria-label="Hide ' + q(bt(L)) + ' from the dashboard" style="left:' + Math.round(P.right - S.left - 42) + "px;top:" + Math.round(P.top - S.top + (P.height - 32) / 2) + 'px">' + Sp + "</button>";
      }).join("") + "</div>");
    }
    return o;
  }
  let Ps = "";
  function Hs(t) {
    da = t, t || (Qt = null, ko = So = !1, no()), qe(), t ? (Ps = JSON.stringify(mt), Un(Ut, "Edit custom dashboard", null)) : Ps && JSON.stringify(mt) !== Ps && La("Changes saved");
  }
  function Yu(t, e) {
    var R, _;
    no();
    const a = wn.get(t), { n: o } = en(H.clientWidth), i = re(), l = i.spans[t] ?? (h(t) ? 1 : 2);
    if (!a) return;
    const c = a.cols >= o, u = (z, A, rt) => '<button type="button" role="menuitem" data-board-act="' + z + '"' + (rt ? " disabled" : "") + ">" + A + "</button>", f = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    f.setAttribute("role", "menu"), f.setAttribute("aria-label", Ta(t) + " options");
    const y = H.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]'), S = fc(t), x = Vn(t), P = '<div class="tfHeight" role="group" aria-label="Height"><span class="tfHeightLabel" aria-hidden="true">Height</span><div class="tfHeightTabs">' + pc.map((z, A) => '<button type="button" role="menuitemradio" aria-checked="' + (A + 1 === x) + '" aria-label="' + z + ", " + (A + 1) + (A ? " rows" : " row") + '" data-board-act="h:' + (A + 1) + '"' + (A < S ? "" : " disabled") + ">" + z + "</button>").join("") + "</div></div>", L = Eu.includes(t) || h(t) ? '<div class="tfHeight tfWidth" role="group" aria-label="Width"><span class="tfHeightLabel" aria-hidden="true">Width</span><div class="tfHeightTabs">' + Bu.map((z, A) => '<button type="button" role="menuitemradio" aria-checked="' + (A + 1 === Math.min(l, o)) + '" aria-label="' + z + ", " + (A + 1) + (A ? " columns" : " column") + '" data-board-act="w:' + (A + 1) + '"' + (A < o ? "" : " disabled") + ">" + z + "</button>").join("") + "</div></div>" : "", B = t === "radar" ? '<div class="tfHeight tfSource" role="group" aria-label="Source"><span class="tfHeightLabel" aria-hidden="true">Source</span><div class="tfSourceList">' + Jr().map(([z, A]) => '<button type="button" role="menuitemradio" aria-checked="' + (z === fr()) + '" data-board-act="src:' + q(z) + '">' + q(A) + "</button>").join("") + "</div></div>" : "";
    f.innerHTML = P + L + B + (t === "energy" ? u("graph", (((R = i.opts.energy) == null ? void 0 : R.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + u("left", "Move left", c || a.col === 0) + u("right", "Move right", c || a.col + a.cols >= o) + u("up", "Move up", a.row <= 0) + u("down", "Move down") + (y ? u("remove", "Remove") : u("hide", "Hide")), H.appendChild(f);
    const k = Math.min(a.x + a.w - f.offsetWidth, H.clientWidth - f.offsetWidth);
    Object.assign(f.style, { left: Math.max(0, k) + "px", top: a.y + 28 + "px" }), Qe = { key: t, menu: f, opener: e }, (_ = f.querySelector("button:not([disabled])")) == null || _.focus();
  }
  function no(t) {
    if (!Qe) return;
    const { menu: e, opener: a } = Qe;
    Qe = null, e.remove(), t && (a == null || a.focus());
  }
  const xn = () => Object.fromEntries([...wn].map(([t, e]) => [t, { col: e.col, row: e.row }]));
  function Zu(t, e) {
    var u, f, y;
    if (e === "remove") {
      no(), Ku(t);
      return;
    }
    const a = mt, o = re(), i = xn(), l = i[t] || { col: 0, row: 0 };
    e.startsWith("w:") && (o.spans = { ...o.spans, [t]: e === "w:full" ? "full" : Number(e.slice(2)) }), e.startsWith("h:") && (o.opts = { ...o.opts, [t]: { ...o.opts[t] || {}, h: Number(e.slice(2)), tall: void 0 } }), e.startsWith("src:") && (o.opts = { ...o.opts, radar: { ...o.opts.radar || {}, source: e.slice(4) } }), e === "graph" && (o.opts = { ...o.opts, energy: { ...o.opts.energy || {}, graph: (((u = o.opts.energy) == null ? void 0 : u.graph) || "above") === "above" ? "below" : "above" } }), e === "left" && (i[t] = { ...l, col: l.col - 1 }), e === "right" && (i[t] = { ...l, col: l.col + 1 }), e === "up" && (i[t] = { ...l, row: l.row - 1 }), e === "down" && (i[t] = { ...l, row: l.row + 1 }), e === "hide" && (o.hidden = [.../* @__PURE__ */ new Set([...o.hidden, t])]), ["left", "right", "up", "down"].includes(e) && (Qt = { key: t, col: i[t].col, row: i[t].row }), jn(o, i), Qt && (qe(), Qt = null, jn(re(), xn()));
    const c = /^[hw]:/.test(e) && !Ue() && (Qe == null ? void 0 : Qe.menu.querySelector('[data-board-act="' + CSS.escape(e) + '"]'));
    if (c) {
      const S = Qe;
      c.parentElement.querySelectorAll("[aria-checked]").forEach((x) => x.setAttribute("aria-checked", String(x === c))), setTimeout(() => {
        Qe === S && no();
      }, Te.tabs.dur);
    } else no();
    e === "graph" && (ka.delete("dash:energy"), Pe()), e.startsWith("src:") && ((f = Se == null ? void 0 : Se.get("radar")) == null || f.refresh(), ke == null || ke.refresh()), e.startsWith("h:") && t.includes(".") && Pe(), qe(), e !== "hide" ? (y = H.querySelector('[data-board-more="' + CSS.escape(t) + '"]')) == null || y.focus() : La(Ta(t) + " hidden", Ai(a));
  }
  const Sc = (t) => {
    var e;
    return Wo.includes(t) && !(((e = mt.dash) == null ? void 0 : e.cells) || {})[t] ? " added" : " put back";
  };
  function Ns(t) {
    const e = re(), a = Ta(t) + Sc(t);
    vn({ ...e, hidden: e.hidden.filter((o) => o !== t) }), qe(), La(a);
  }
  const Mi = () => re().tiles || [...H.querySelectorAll(".tfDashTiles > [data-k]")].map((t) => t.dataset.k).filter((t) => !re().hidden.includes(t));
  function _c(t, e) {
    const a = re();
    jn({ ...a, tiles: t, hidden: a.hidden.filter((o) => !o.includes(".")) }, e), Pe(), _e();
  }
  const Cc = (t) => {
    _c([...Mi().filter((e) => e !== t), t], xn()), La(Ta(t) + " added"), Qu(t);
  }, Ku = (t) => {
    const e = mt, a = xn();
    delete a[t], _c(Mi().filter((o) => o !== t), a), La(Ta(t) + " removed", Ai(e));
  };
  let Os = 0;
  function La(t, e = null) {
    var c;
    const a = p("toast");
    if (!a) return;
    if (dm(a, t), e) {
      const u = Object.assign(document.createElement("button"), { type: "button", className: "toastAction", textContent: "Undo" });
      u.addEventListener("click", () => {
        clearTimeout(Os), a.classList.remove("show", "withAction"), e();
      }), a.appendChild(u);
    }
    const o = g.getBoundingClientRect(), i = (c = n.querySelector(".bottomNav")) == null ? void 0 : c.getBoundingClientRect(), l = Ut.classList.contains("open") && !ro ? Math.min(o.right, Ut.getBoundingClientRect().left) : o.right;
    a.style.left = (o.left + l) / 2 + "px", a.style.bottom = (i != null && i.height ? window.innerHeight - i.top + 12 : 26) + "px", a.classList.add("tfToast", "show"), a.classList.toggle("withAction", !!e), pm(a), clearTimeout(Os), Os = setTimeout(() => a.classList.remove("show", "withAction"), e ? 5e3 : Te.confirm.stay);
  }
  const Xu = 700, $u = 1e3, pa = Object.assign(document.createElement("div"), { className: "tfTooltip", hidden: !0 });
  pa.setAttribute("role", "tooltip"), pa.setAttribute("aria-hidden", "true"), g.appendChild(pa);
  let ki = null, Tr = 0, zn = 0, Ac = -1 / 0;
  const Is = (t) => {
    if (t.nodeType !== 1) return !1;
    const e = getComputedStyle(t);
    return e.textOverflow === "ellipsis" && t.scrollWidth > t.clientWidth + 1 || e.webkitLineClamp !== "none" && t.scrollHeight > t.clientHeight + 1;
  }, Ju = (t) => {
    for (let e = t; e && e !== g; e = e.parentElement) if (Is(e)) return e;
    return null;
  };
  function Tc(t, e) {
    clearTimeout(Tr), clearTimeout(zn);
    const a = () => {
      if (!t.isConnected) return;
      ki = t, pa.textContent = e, pa.hidden = !1;
      const o = t.getBoundingClientRect(), i = pa.getBoundingClientRect(), l = o.top - i.height - 8 >= 8 ? o.top - i.height - 8 : o.bottom + 8;
      pa.style.left = Math.max(8, Math.min(window.innerWidth - i.width - 8, o.left + o.width / 2 - i.width / 2)) + "px", pa.style.top = l + "px";
    };
    !pa.hidden || performance.now() - Ac < $u ? a() : Tr = setTimeout(a, Xu);
  }
  function Si() {
    clearTimeout(Tr), clearTimeout(zn), pa.hidden || (Ac = performance.now()), pa.hidden = !0, ki = null;
  }
  n.addEventListener("pointerover", (t) => {
    if (t.pointerType === "touch") return;
    if (pa.contains(t.target)) {
      clearTimeout(zn);
      return;
    }
    const e = Ju(t.target);
    if (e && Kt.names === "scroll" && e.matches(_i)) {
      Fs(e);
      return;
    }
    if (e) {
      e !== ki ? Tc(e, e.textContent.trim()) : clearTimeout(zn);
      return;
    }
    clearTimeout(Tr), clearTimeout(zn), zn = setTimeout(Si, 120);
  }), n.addEventListener("focusin", (t) => {
    var o;
    const e = t.target;
    if (!((o = e.matches) != null && o.call(e, ":focus-visible"))) return;
    let a = [e, ...e.querySelectorAll("*")].filter(Is);
    Kt.names === "scroll" && (a.filter((i) => i.matches(_i)).forEach(Fs), a = a.filter((i) => !i.matches(_i))), a.length && Tc(e, a.map((i) => i.textContent.trim()).join(" · "));
  }), n.addEventListener("focusout", (t) => {
    t.target === ki && Si();
  }), n.addEventListener("keydown", (t) => {
    t.key === "Escape" && !pa.hidden && (t.stopPropagation(), Si());
  }, !0), window.addEventListener("scroll", () => {
    (!pa.hidden || Tr) && Si();
  }, { capture: !0, passive: !0 });
  const _i = ".activityRowName,.activityRowMeta", Ci = /* @__PURE__ */ new WeakSet();
  function Fs(t) {
    var a;
    if (Kt.names !== "scroll" || Ci.has(t) || t.closest("[inert]") || (a = window.matchMedia) != null && a.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    Ci.add(t);
    const e = () => Promise.all([t.closest(".hcAreaPanel"), t.closest(".panelExpanded")].filter(Boolean).flatMap((o) => o.getAnimations()).map((o) => o.finished.catch(() => {
    })));
    setTimeout(async () => {
      await e();
      const o = t.isConnected && !t.closest("[inert]") ? t.scrollWidth - t.clientWidth : 0;
      if (o < 2) {
        Ci.delete(t);
        return;
      }
      const i = o / 30 * 1e3, l = i + 1e3 + i;
      t.style.textOverflow = "clip";
      const c = t.animate([
        { textIndent: "0px", offset: 0, easing: "ease-in-out" },
        { textIndent: -o + "px", offset: i / l },
        { textIndent: -o + "px", offset: (1e3 + i) / l, easing: "ease-in-out" },
        { textIndent: "0px", offset: 1 }
      ], { duration: l });
      c.onfinish = c.oncancel = () => {
        t.style.textOverflow = "", Ci.delete(t);
      };
    }, 600);
  }
  const Lc = new IntersectionObserver((t) => t.forEach((e) => {
    e.isIntersecting && !e.target.closest("[inert]") && (Lc.unobserve(e.target), Fs(e.target));
  }), { threshold: 1 });
  let qs = !1;
  new MutationObserver(() => {
    qs || Kt.names !== "scroll" || (qs = !0, setTimeout(() => {
      qs = !1, n.querySelectorAll(_i).forEach((t) => {
        !t.dataset.glided && Is(t) && (t.dataset.glided = "1", Lc.observe(t));
      });
    }, 300));
  }).observe(n, { childList: !0, subtree: !0 });
  const Ai = (t) => () => {
    mt = t, je(), Pe(), qe(), _e();
  };
  function Qu(t) {
    const e = () => H.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]');
    setTimeout(() => {
      var c;
      const a = e();
      if (!a) return;
      const o = (c = window.matchMedia) == null ? void 0 : c.call(window, "(prefers-reduced-motion: reduce)").matches, i = a.getBoundingClientRect();
      (i.top < 0 || i.bottom > window.innerHeight) && a.scrollIntoView({ behavior: o ? "auto" : "smooth", block: "center" });
      const l = (u) => "0 0 0 4px color-mix(in srgb,var(--primary) " + u + "%,transparent),0 0 24px color-mix(in srgb,var(--primary) " + u + "%,transparent)";
      a.animate([{ boxShadow: l(55) }, { boxShadow: l(0) }], { duration: 1500, easing: o ? "steps(1, end)" : "ease-out" });
    }, tf(t) ? 260 : 0);
  }
  function tf(t) {
    const e = wn.get(t);
    if (!e || !Ut.classList.contains("open") || ro) return !1;
    const { n: a, w: o } = en(H.clientWidth), i = Ut.getBoundingClientRect().left - H.getBoundingClientRect().left, l = (f) => f * (o + pe) + e.cols * o + (e.cols - 1) * pe <= i;
    if (l(e.col)) return !1;
    const c = /* @__PURE__ */ new Set();
    wn.forEach((f, y) => {
      if (y !== t) for (let S = f.row; S < f.row + f.rows; S++) for (let x = f.col; x < f.col + f.cols; x++) c.add(x + "," + S);
    });
    const u = (f, y) => {
      for (let S = y; S < y + e.rows; S++) for (let x = f; x < f + e.cols; x++) if (c.has(x + "," + S)) return !1;
      return !0;
    };
    for (let f = 0; f <= vi; f++) for (let y = 0; y + e.cols <= a && l(y); y++)
      if (u(y, f))
        return jn(re(), { ...xn(), [t]: { col: y, row: f } }), qe(), !0;
    return !1;
  }
  const Dc = /^(light|switch|cover|climate|fan|lock|valve|media_player|humidifier|vacuum|scene|script|alarm_control_panel|water_heater|input_boolean)\./, Ec = [["page", "Page"], ["cards", "Cards"], ["areas", "Areas"], ["favs", "Favourites"]];
  let Gn = "page";
  const ef = (t, e) => '<section class="hcRowsCard hcTrayList">' + t.map(([a, o]) => '<button class="hcRow hcConfigRow" type="button" ' + e + '="' + a + '"><span class="hcRowText"><span class="hcRowName">' + q(o) + '</span></span><span class="hcRowEnd">' + zl + "</span></button>").join("") + "</section>", Un = (t, e, a, o) => {
    t.classList.toggle("hcTrayIn", !!a), t.querySelector(".tfTrayHead .activityTitle").textContent = a ? o : e, t.querySelector(".tfTrayInner").scrollTop = 0;
  }, af = '<button class="back hcTrayBack" type="button" data-tray-back aria-label="Back">' + ql + "</button>", of = (t) => t.matches('[data-tray="welcome"],[data-tray="phone"]') ? "page" : t.querySelector("[data-room-add]") ? "areas" : t.querySelector('[data-tray="favs"]') ? "favs" : "cards";
  function Ws(t = !1) {
    const e = Ut.querySelector(".tfTrayInner"), a = Ut.querySelector(".hcTrayTabs"), o = a.querySelector(".rubberIndicator");
    let i = !0;
    e.querySelectorAll(":scope>.tfTraySection").forEach((c) => {
      c.hidden = of(c) !== Gn, c.classList.toggle("hcFirst", !c.hidden && i), c.hidden || (i = !1);
    }), a.querySelectorAll("[data-tray-tab]").forEach((c) => {
      const u = c.dataset.trayTab === Gn;
      c.classList.toggle("active", u), c.setAttribute("aria-selected", String(u));
    });
    const l = a.querySelector(".tab.active");
    l != null && l.offsetWidth && (o.style.transition = "none", t ? Qi(o, o.offsetLeft, o.offsetWidth, l.offsetLeft, l.offsetWidth) : (o.style.left = l.offsetLeft + "px", o.style.width = l.offsetWidth + "px"));
  }
  const Ut = Object.assign(document.createElement("aside"), { className: "tfEditTray" });
  Ut.setAttribute("aria-label", "Edit custom dashboard"), Ut.innerHTML = '<button class="tfTrayTuck" type="button" data-tray-tuck></button><div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit custom dashboard</div><button class="pill" type="button" data-tray-done>Done</button></div><div class="tabs rubberTabs hcTrayTabs" role="tablist" aria-label="Edit custom dashboard"><div class="rubberIndicator" aria-hidden="true"></div>' + Ec.map(([t, e], a) => '<button class="tab segBtn' + (a ? "" : " active") + '" type="button" role="tab" aria-selected="' + !a + '" data-tray-tab="' + t + '">' + e + "</button>").join("") + '</div><section class="tfTraySection" data-tray="welcome"></section><section class="tfTraySection" data-tray="cards"></section><section class="tfTraySection" data-tray="weather"></section><section class="tfTraySection"><div class="sectionLabel">Tiles</div><p class="tfTrayNote">Remove a tile from its ⋯.</p><button class="pill tfTrayAdd hcAddBtn" type="button" data-tile-add aria-expanded="false">' + Zi + '<span>Add tile</span></button><div class="tfTrayPick" data-pick="tiles" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-tile-search><ul class="tfTrayList" data-tray="tilepick"></ul></div></section><section class="tfTraySection"><div class="sectionLabel">Areas</div><p class="tfTrayNote">Which areas the Areas card shows. Drag to change their order, here and on Home.</p><button class="pill tfTrayAdd hcAddBtn" type="button" data-room-add aria-expanded="false">' + Zi + '<span>Add area</span></button><ul class="tfTrayList" data-tray="roompick" hidden></ul><ul class="tfTrayList hcHeList" data-tray="areas"></ul></section><section class="tfTraySection" data-tray="phone"></section><section class="tfTraySection"><div class="sectionLabel">Favourites</div><ul class="tfTrayList" data-tray="favs"></ul><button class="pill tfTrayAdd hcAddBtn" type="button" data-fav-add aria-expanded="false">' + Zi + '<span>Add favourite</span></button><div class="tfTrayPick" data-pick="favs" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-fav-search><ul class="tfTrayList" data-tray="pick"></ul></div><div class="toggleRow tfTraySuggest" data-tray="favtitle"></div><div class="toggleRow tfTraySuggest" data-tray="suggest"></div></section></div>', g.appendChild(Ut);
  let ro = !1, ko = !1, So = !1, Lr = !1, ta = null, _o = !1;
  const Vs = {}, Va = (t, e) => {
    if (Vs[t] === e) return;
    Vs[t] = e;
    const a = Ut.querySelector('[data-tray="' + t + '"]');
    a.innerHTML = e, Qa(a);
  }, js = (t, e) => '<span class="tfTrayName"><span class="activityRowName">' + q(bt(t)) + '</span><span class="activityRowMeta">' + q(e) + "</span></span>", nf = (t, e, a) => '<li class="tfTrayFav' + (e ? " off" : "") + '" data-tray-fav="' + q(t) + '"><span class="tfTrayGrip" aria-hidden="true">' + zr + '</span><span class="tfIcon"' + he(t, ga(t)) + "></span>" + js(t, e ? "Hidden" + (Ct.get(t) ? " · " + Ct.get(t) : "") : Ct.get(t) || Re(t)) + '<button class="tfTrayBtn" type="button" data-fav-eye="' + q(t) + '" aria-pressed="' + !e + '" aria-label="' + (e ? "Show " : "Hide ") + q(bt(t)) + ' on the dashboard">' + (e ? Sp : H0) + "</button>" + (a ? '<button class="tfTrayBtn" type="button" data-fav-remove="' + q(t) + '" aria-label="Remove ' + q(bt(t)) + ' from favourites">' + Vl + "</button>" : "<span></span>") + "</li>";
  function zs(t, e, a, o) {
    const i = t.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return Object.keys(M).filter((c) => e(c) && !a.has(c) && M[c].state !== "unavailable").filter((c) => {
      const u = (bt(c) + " " + (Ct.get(c) || "") + " " + c).toLowerCase();
      return i.every((f) => u.includes(f));
    }).sort((c, u) => (Ct.get(c) || "~").localeCompare(Ct.get(u) || "~") || bt(c).localeCompare(bt(u))).slice(0, 40).map((c) => '<li><button class="tfTrayPickItem" type="button" ' + o + '="' + q(c) + '"><span class="tfIcon"' + he(c, ga(c)) + "></span>" + js(c, Ct.get(c) || "—") + "</button></li>").join("") || '<li class="tfTrayNote">Nothing matches.</li>';
  }
  const rf = "https://www.home-assistant.io/dashboards/", Bc = {
    welcome: ["Welcome message", "<p>Shows a <strong>greeting</strong> above your home's name: good morning, afternoon or evening, then your name.</p>"],
    weather: ["Weather", "<p>The forecast card: now, the next hours in a sentence and the week ahead. Its <strong>Now</strong> opens the Weather page.</p>"],
    energy: ["Energy today", "<p>What your home has used and made today, hour by hour, with <strong>Electricity</strong>, <strong>Solar</strong>, <strong>Gas</strong> and <strong>Water</strong> under it. From your Energy dashboard.</p>"],
    favs: ["Favourite entities", "<p>The devices you use most, at the top of Home.</p><ul><li><strong>Drag</strong> one to change the order</li><li>Press <strong>×</strong> to take it off</li></ul>"],
    suggest: ["Suggested entities", "<p>Fills Favourites with devices you often use, after your own. They change as you use your home.</p>"],
    sums: ["Summaries", "<p>Each summary sums up one kind of thing across your home, like <strong>Lights</strong>: how many are on.</p><ul><li>Switch one off to hide it</li><li><strong>Drag</strong> one to change the order</li></ul>"]
  }, ge = Object.assign(document.createElement("aside"), { className: "tfEditTray hcHomeTray" });
  ge.setAttribute("aria-label", "Edit Home page"), ge.toggleAttribute("inert", !0);
  let Co = !1, Da = !1, Gs = "", Us = null, Yn = "page";
  function Ys(t, e) {
    const a = ge.querySelector(".hcTrayTabs"), o = a == null ? void 0 : a.querySelector(".rubberIndicator"), i = a == null ? void 0 : a.querySelector(".tab.active");
    if (!(i != null && i.offsetWidth)) {
      requestAnimationFrame(() => {
        var l;
        return ((l = ge.querySelector(".hcTrayTabs .tab.active")) == null ? void 0 : l.offsetWidth) && Ys(t, e);
      });
      return;
    }
    o.style.transition = "none", t && e ? Qi(o, e.left, e.width, i.offsetLeft, i.offsetWidth) : (o.style.left = i.offsetLeft + "px", o.style.width = i.offsetWidth + "px");
  }
  const Mn = (t) => '<button class="hcInfoBtn" type="button" data-info="' + t + '" aria-expanded="false" aria-label="About ' + q(Bc[t][0]) + '">' + jl + "</button>", ya = (t, e, a) => '<button class="switch' + (t ? " on" : "") + '" type="button" role="switch" aria-checked="' + t + '" aria-label="' + q(e) + '" ' + a + "></button>", Zs = (t) => '<button class="tfTrayBtn hcHeGrip" type="button" data-he-grip aria-label="Move ' + q(t) + '. Use the up and down arrows">' + zr + "</button>", Rc = () => {
    var t;
    return ((t = mt.home) == null ? void 0 : t.sumsWidth) === "fit";
  }, Ti = () => {
    var t;
    return ((t = mt.home) == null ? void 0 : t.favsAs) === "strip";
  }, Dr = (t, e, a, o) => '<div class="hcHeLine hcHeChoiceLine"><span class="activityRowName">' + t + '</span><div class="themeChoice hcHeChoice" role="group" aria-label="' + q(t) + '">' + o.map(([i, l]) => '<button class="wxLayoutBtn" type="button" ' + e + '="' + i + '" aria-pressed="' + (a === i) + '">' + l + "</button>").join("") + "</div></div>", Pc = () => ae(!0).filter((t) => Vr[t.key]).map((t) => t.key);
  function kn() {
    var f, y, S, x, P, L, B;
    if (!Co) return;
    const t = F(), e = (k) => '<li class="hcHeRow" data-he-id="' + q(k) + '">' + Zs(bt(k)) + '<span class="tfIcon"' + he(k, ga(k)) + "></span>" + js(k, Ct.get(k) || Re(k)) + '<button class="tfTrayBtn" type="button" data-he-remove="' + q(k) + '" aria-label="Take ' + q(bt(k)) + ' off Favourites">' + Vl + "</button></li>", a = (k) => {
      const R = Vr[k];
      return '<li class="hcHeRow hcHeSum" data-he-id="' + q(k) + '"' + (R.colour && Rn(R.colour) ? ' style="' + Rn(R.colour).slice(1) + '"' : "") + ">" + Zs(R.name) + '<span class="tfIcon"' + he("", R.icon, R.name) + '></span><span class="activityRowName">' + q(R.name) + "</span>" + ya(me(k), R.name, 'data-he-sum="' + q(k) + '"') + "</li>";
    }, o = ((f = ge.querySelector("[data-he-search]")) == null ? void 0 : f.value) || "", i = [["page", "Page"], ["favs", "Favourites"], ["sums", "Summaries"], ["areas", "Areas"]], l = new Set(((y = mt.home) == null ? void 0 : y.areasOff) || []), c = (k) => '<li class="hcHeRow" data-he-id="' + q(k.id) + '">' + Zs(k.name) + '<span class="tfIcon"><span class="tfAreaGlyph"' + he("area:" + k.id, k.icon || "mdi:texture-box", k.name) + '></span></span><span class="activityRowName">' + q(k.name) + "</span>" + ya(!l.has(k.id), "Show " + k.name + " on Home", 'data-he-area="' + q(k.id) + '"') + "</li>", u = {
      page: '<div class="hcHeLine"><span class="activityRowName">Welcome message</span>' + Mn("welcome") + ya(ks(), "Welcome message", "data-he-welcome") + "</div>" + // the weather card and Energy today, where the house has them
      (Vt() ? '<div class="hcHeLine"><span class="activityRowName">Weather</span>' + Mn("weather") + ya(!!((S = mt.home) != null && S.weather), "Weather", 'data-he-card="weather"') + "</div>" : "") + (qa != null && qa.length ? '<div class="hcHeLine"><span class="activityRowName">Energy today</span>' + Mn("energy") + ya(!!((x = mt.home) != null && x.energy), "Energy today", 'data-he-card="energy"') + "</div>" : "") + Dr("Cards", "data-he-cards-as", yc(), [["stacked", "Stacked"], ["rows", "Rows"]]) + '<hr class="hcHeRule"><div class="hcHeLine"><span class="activityRowName">Group by floor</span>' + ya(Mo("byFloor"), "Group by floor", 'data-he-flag="byFloor"') + "</div>" + Dr("Layout", "data-he-area-layout", Ds(), [["rows", "Rows"], ["columns", "Columns"], ["bento", "Bento"]]) + (Ds() === "bento" ? '<div class="hcHeLine"><span class="activityRowName">Floors as boxes</span>' + ya(Mo("bentoBoxes"), "Floors as boxes", 'data-he-flag="bentoBoxes"') + '</div><div class="hcHeLine"><span class="activityRowName">Mixed sizes</span>' + ya(Mo("bentoMixed"), "Mixed sizes", 'data-he-flag="bentoMixed"') + "</div>" : "") + Dr("Area cards", "data-he-area-size", vc(), [["s", "Small"], ["m", "Medium"], ["l", "Large"]]) + // Fit together (Matt, 17 Nov): the areas as a neat block, not spread over every column that fits
      '<div class="hcHeLine"><span class="activityRowName">Fit together</span>' + ya(!!((P = mt.home) != null && P.fitTogether), "Fit together", "data-he-fit") + "</div>",
      favs: '<div class="hcHeLine"><span class="activityRowName">Show favourites</span>' + ya(((L = mt.home) == null ? void 0 : L.favs) !== !1, "Show favourites", 'data-he-card="favs"') + '</div><hr class="hcHeRule"><div class="hcHeLabel"><span class="activityRowName">Favourite entities</span>' + Mn("favs") + "</div>" + Dr("Show as", "data-he-favs-as", Ti() ? "strip" : "card", [["card", "Card"], ["strip", "Strip"]]) + (Ti() ? "" : '<div class="hcHeLine"><span class="activityRowName">Title</span>' + ya(Mo("favsTitle"), "Title", 'data-he-flag="favsTitle"') + "</div>") + '<ul class="tfTrayList hcHeList" data-he-list="favs">' + (t.map(e).join("") || '<li class="tfTrayNote">No favourites yet.</li>') + '</ul><button class="pill tfTrayAdd hcAddBtn" type="button" data-he-add aria-expanded="' + Da + '">' + Zi + '<span>Add favourite</span></button><div class="tfTrayPick" data-he-pick' + (Da ? "" : " hidden") + '><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-he-search value="' + q(o) + '"><ul class="tfTrayList">' + (Da ? zs(o, (k) => Dc.test(k), new Set(t), "data-he-pick-id") : "") + '</ul></div><hr class="hcHeRule"><div class="hcHeLine"><span class="activityRowName">Suggested entities</span>' + Mn("suggest") + ya(ft(), "Suggested entities", "data-he-suggest") + "</div>",
      sums: '<div class="hcHeLine"><span class="activityRowName">Show summaries</span>' + Mn("sums") + ya(((B = mt.home) == null ? void 0 : B.sums) !== !1, "Show summaries", 'data-he-card="sums"') + "</div>" + Dr("Width", "data-he-sums-width", Rc() ? "fit" : "match", [["match", "Match the cards"], ["fit", "Fit the summaries"]]) + '<hr class="hcHeRule"><ul class="tfTrayList hcHeList" data-he-list="sums">' + Pc().map(a).join("") + "</ul>",
      areas: '<p class="tfTrayNote">Which areas show on Home. Drag to change their order, here and on the custom dashboard.</p><ul class="tfTrayList hcHeList" data-he-list="areas">' + _s().map(c).join("") + "</ul>"
    };
    ge.querySelector("[data-he-body]").innerHTML = // the note about the areas page first (Matt, 12 Nov: "to the top of the rollover"), as Home Assistant's dialog has it
    '<p class="tfTrayNote hcHeAreasNote">You can rearrange your floors and areas in the order that best represents your house on the <button type="button" class="hcHeLink" data-path="/config/areas/dashboard">areas page</button>.</p><div class="tabs rubberTabs hcTrayTabs" role="tablist" aria-label="Edit Home page"><div class="rubberIndicator" aria-hidden="true"></div>' + i.map(([k, R]) => '<button class="tab segBtn' + (k === Yn ? " active" : "") + '" type="button" role="tab" aria-selected="' + (k === Yn) + '" data-he-tab="' + k + '">' + R + "</button>").join("") + "</div>" + ef(i, "data-he-go") + '<div class="hcHeTabBody" role="tabpanel">' + u[Yn] + "</div>", Ys(!1), Qa(ge);
  }
  const Zn = (t) => {
    mt = { ...mt, ...t }, je(), Pe(), kn();
  }, xa = (t) => Zn({ home: { ...mt.home || {}, ...t } });
  function Ks(t) {
    Sn(), Co = t, Da = !1, ge.classList.toggle("open", t), ge.toggleAttribute("inert", !t), g.classList.toggle("hcHomeEditing", t), w && H && qe();
    const e = p("dashEditNav"), a = ge.querySelector(".tfTrayHead");
    e && t && (Us = e.parentElement, a.appendChild(e)), e && !t && Us && Us.appendChild(e), e && (e.classList.toggle("active", t), e.setAttribute("aria-pressed", String(t)), e.setAttribute("aria-label", t ? "Done editing Home" : "Edit Home page"), e.title = t ? "Done" : "Edit", e.innerHTML = t ? _p : Ki), t ? (Gs = JSON.stringify(mt), kn(), Un(ge, "Edit Home page", null)) : Gs && JSON.stringify(mt) !== Gs && La("Changes saved");
  }
  ge.innerHTML = '<div class="tfTrayInner"><div class="tfTrayHead">' + af + '<div class="activityTitle">Edit Home page</div></div><div class="hcHeBody" data-he-body></div></div>', g.appendChild(ge);
  let Ao = null;
  const ja = Object.assign(document.createElement("div"), { className: "card hcInfoPop", hidden: !0 });
  ja.setAttribute("role", "dialog"), g.appendChild(ja);
  function Sn() {
    Ao && (Ao.setAttribute("aria-expanded", "false"), Ao = null, ja.hidden = !0);
  }
  function Hc(t) {
    const e = Ao;
    if (Sn(), e === t) return;
    const [a, o] = Bc[t.dataset.info];
    ja.setAttribute("aria-label", a), ja.innerHTML = '<div class="hcInfoTitle">' + q(a) + '</div><div class="hcInfoText">' + o + '</div><a class="hcInfoMore" href="' + rf + '" target="_blank" rel="noopener">Learn more</a>', ja.hidden = !1, Ao = t, t.setAttribute("aria-expanded", "true");
    const i = t.getBoundingClientRect(), l = ja.offsetWidth, c = ja.offsetHeight;
    ja.style.left = Math.max(8, Math.min(innerWidth - l - 8, i.left + i.width / 2 - l / 2)) + "px", ja.style.top = (i.bottom + 8 + c > innerHeight - 8 ? Math.max(8, i.top - 8 - c) : i.bottom + 8) + "px";
  }
  n.addEventListener("pointerdown", (t) => {
    Ao && !t.composedPath().some((e) => e === ja || e === Ao) && Sn();
  }, !0), n.addEventListener("keydown", (t) => {
    var e;
    if (t.key === "Escape") {
      if (Ao) {
        t.stopPropagation();
        const a = Ao;
        Sn(), a.focus();
        return;
      }
      if (Da) {
        t.stopPropagation(), Da = !1, kn();
        return;
      }
      Co && (t.stopPropagation(), Ks(!1), (e = p("dashEditNav")) == null || e.focus());
    }
  }, !0);
  const sf = (t) => t.dataset.heList === "favs" ? F() : t.dataset.heList === "areas" ? _s().map((e) => e.id) : Pc(), Nc = (t, e) => t.dataset.heList === "favs" ? Zn({ favourites: e }) : t.dataset.heList === "areas" ? (Zn({ areaOrder: e }), qe()) : xa({ sumOrder: e });
  ge.addEventListener("keydown", (t) => {
    var u;
    const e = t.target.closest("[data-he-grip]");
    if (!e || !["ArrowUp", "ArrowDown"].includes(t.key)) return;
    t.preventDefault();
    const a = e.closest("[data-he-id]"), o = a.parentElement, i = sf(o), l = i.indexOf(a.dataset.heId), c = l + (t.key === "ArrowUp" ? -1 : 1);
    c < 0 || c >= i.length || (i.splice(c, 0, i.splice(l, 1)[0]), Nc(o, i), (u = ge.querySelector('[data-he-list="' + o.dataset.heList + '"] [data-he-id="' + CSS.escape(a.dataset.heId) + '"] [data-he-grip]')) == null || u.focus());
  }), ge.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-he-grip]");
    if (!e || t.button !== 0) return;
    const a = e.closest("[data-he-list]"), o = a.dataset.heList;
    Qs(t, e.closest("[data-he-id]"), "heId", (i) => Nc(a, i), (i) => ge.querySelector('[data-he-list="' + o + '"] [data-he-id="' + CSS.escape(i) + '"]'));
  }), ge.addEventListener("input", (t) => {
    if (t.target.matches("[data-he-search]")) {
      const e = t.target.selectionStart;
      kn();
      const a = ge.querySelector("[data-he-search]");
      a.focus(), a.setSelectionRange(e, e);
    }
  }), ge.addEventListener("click", (t) => {
    var R, _, z, A;
    const e = t.target, a = e.closest("[data-info]");
    if (a) {
      Hc(a);
      return;
    }
    const o = e.closest("[data-he-go]");
    if (o) {
      Yn = o.dataset.heGo, Da = !1, Sn(), kn(), Un(ge, "Edit Home page", Yn, o.textContent);
      return;
    }
    if (e.closest("[data-tray-back]")) {
      Sn(), Un(ge, "Edit Home page", null);
      return;
    }
    const i = e.closest("[data-he-tab]");
    if (i) {
      const rt = ge.querySelector(".hcTrayTabs .rubberIndicator"), Tt = { left: rt.offsetLeft, width: rt.offsetWidth };
      Yn = i.dataset.heTab, Da = !1, Sn(), kn(), Ys(!0, Tt), ge.querySelector(".tfTrayInner").scrollTop = 0;
      return;
    }
    if (e.closest("[data-he-welcome]")) {
      xa({ welcome: !ks() });
      return;
    }
    const l = e.closest("[data-he-card]");
    if (l) {
      const rt = l.dataset.heCard, Tt = ["sums", "favs"].includes(rt) ? ((R = mt.home) == null ? void 0 : R[rt]) !== !1 : !!((_ = mt.home) != null && _[rt]);
      xa({ [rt]: !Tt });
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
    const y = e.closest("[data-he-area-layout]");
    if (y) {
      xa({ areaLayout: y.dataset.heAreaLayout });
      return;
    }
    if (e.closest("[data-he-fit]")) {
      xa({ fitTogether: !((z = mt.home) != null && z.fitTogether) });
      return;
    }
    const S = e.closest("[data-he-cards-as]");
    if (S) {
      xa({ cardsAs: S.dataset.heCardsAs });
      return;
    }
    const x = e.closest("[data-he-flag]");
    if (x) {
      const rt = x.dataset.heFlag;
      xa({ [rt]: !Mo(rt) }), rt === "favsTitle" && za();
      return;
    }
    if (e.closest("[data-he-suggest]")) {
      Zn({ suggest: !ft() });
      return;
    }
    const P = e.closest("[data-he-area]");
    if (P) {
      const rt = new Set(((A = mt.home) == null ? void 0 : A.areasOff) || []), Tt = P.dataset.heArea;
      rt.has(Tt) ? rt.delete(Tt) : rt.add(Tt), xa({ areasOff: [...rt] });
      return;
    }
    const L = e.closest("[data-he-sum]");
    if (L) {
      const rt = L.dataset.heSum, Tt = !me(rt), Rt = mt.home || {};
      xa(yp.includes(rt) ? { shownSums: Tt ? [...Rt.shownSums || [], rt] : (Rt.shownSums || []).filter((Pt) => Pt !== rt) } : { hiddenSums: Tt ? (Rt.hiddenSums || []).filter((Pt) => Pt !== rt) : [...Rt.hiddenSums || [], rt] });
      return;
    }
    const B = e.closest("[data-he-remove]");
    if (B) {
      Zn({ favourites: F().filter((rt) => rt !== B.dataset.heRemove) });
      return;
    }
    if (e.closest("[data-he-add]")) {
      Da = !Da, kn(), Da && ge.querySelector("[data-he-search]").focus({ preventScroll: !0 });
      return;
    }
    const k = e.closest("[data-he-pick-id]");
    k && (Da = !1, ge.querySelector("[data-he-search]").value = "", Zn({ favourites: [...F(), k.dataset.hePickId] }));
  });
  function _e() {
    var S, x, P;
    const t = da && g.classList.contains("tfBoard");
    if (Ut.classList.toggle("open", t), Ut.classList.toggle("tucked", t && ro), Ut.toggleAttribute("inert", !t), t || (_o = !1), Vc(), !t) return;
    const e = Ut.querySelector("[data-tray-tuck]");
    e.innerHTML = ro ? ql : zl, e.setAttribute("aria-expanded", String(!ro)), e.setAttribute("aria-label", ro ? "Show the edit tray" : "Tuck the edit tray away");
    const a = re().hidden.filter((L) => !yo.includes(L) && yn().some((B) => B.key === L)), o = (L, B) => '<button class="tfTrayCard" type="button" data-tray-card="' + q(L) + '" aria-label="' + q(Ta(L)) + ": drag it onto the board, or press to " + B + '"><span class="tfTrayGrip" aria-hidden="true">' + zr + "</span>" + q(Ta(L)) + "</button>", i = a.filter((L) => !pr.includes(L)), l = pr.filter((L) => a.includes(L));
    Va("welcome", '<div class="hcHeLine"><span class="activityRowName">Welcome message</span>' + Mn("welcome") + '<button class="switch' + (re().welcome ? " on" : "") + '" type="button" role="switch" aria-checked="' + !!re().welcome + '" aria-label="Welcome message" data-dash-welcome></button></div><div class="hcHeLine"><span class="activityRowName">Show summaries</span><button class="switch' + ((S = mt.dash) != null && S.sumsOff ? "" : " on") + '" type="button" role="switch" aria-checked="' + !((x = mt.dash) != null && x.sumsOff) + '" aria-label="Show summaries" data-dash-sums></button></div>'), requestAnimationFrame(() => Ws(!1)), Va("cards", '<div class="sectionLabel">Hidden and new cards</div>' + (i.length ? '<div class="tfTrayCards">' + i.map((L) => o(L, "put it back")).join("") + "</div>" : '<p class="tfTrayNote">Cards you hide, and new ones, wait here.</p>')), Va("weather", '<div class="sectionLabel">Weather</div>' + (l.length ? `<p class="tfTrayNote">The Weather page's widgets. Drag one onto the board, or press to add it.</p><div class="tfTrayCards">` + l.map((L) => o(L, "add it")).join("") + "</div>" : '<p class="tfTrayNote">Every weather widget is on the board.</p>')), Va("phone", '<div class="sectionLabel">Phone</div><p class="tfTrayNote">' + (re().phone ? "Phones have an order of their own." : "Phones follow the board's order.") + '</p><button class="pill tfTrayAdd" type="button" data-phone-toggle aria-pressed="' + _o + '">' + (_o ? "Hide the phone" : "Show the phone") + "</button>");
    const c = new Set(mt.favHidden || []), u = F(), f = [...u, ...[...c].filter((L) => !u.includes(L) && M[L])];
    Va("favs", f.map((L) => nf(L, c.has(L), u.includes(L))).join("") || '<li class="tfTrayNote">No favourites yet.</li>'), Ut.querySelector('[data-pick="tiles"]').hidden = !So, Ut.querySelector("[data-tile-add]").setAttribute("aria-expanded", String(So)), So && Va("tilepick", zs(Ut.querySelector("[data-tile-search]").value, (L) => nr.includes(L.split(".")[0]), new Set(Mi()), "data-tile-pick")), Ut.querySelector('[data-tray="roompick"]').hidden = !Lr, Ut.querySelector("[data-room-add]").setAttribute("aria-expanded", String(Lr));
    const y = new Set(((P = mt.dash) == null ? void 0 : P.areasOff) || []);
    if (Va("areas", Jo(Je).map((L) => '<li class="hcHeRow" data-area-id="' + q(L.id) + '"><button class="tfTrayBtn hcHeGrip" type="button" data-area-grip aria-label="Move ' + q(L.name) + '. Use the up and down arrows">' + zr + '</button><span class="tfIcon"><span class="tfAreaGlyph"' + he("area:" + L.id, L.icon || "mdi:texture-box", L.name) + '></span></span><span class="activityRowName">' + q(L.name) + '</span><button class="switch' + (y.has(L.id) ? "" : " on") + '" type="button" role="switch" aria-checked="' + !y.has(L.id) + '" aria-label="Show ' + q(L.name) + ' in the Areas card" data-area-on="' + q(L.id) + '"></button></li>').join("")), Lr) {
      const L = new Set(Mi());
      Va("roompick", Jo(Je).filter((B) => !L.has("room:" + B.id)).map((B) => '<li><button class="tfTrayPickItem" type="button" data-room-pick="' + q(B.id) + '"><span class="tfIcon"><span class="tfAreaGlyph"' + he("area:" + B.id, B.icon || "mdi:texture-box", B.name) + '></span></span><span class="tfTrayName"><span class="activityRowName">' + q(B.name) + "</span></span></button></li>").join("") || '<li class="tfTrayNote">Every area is on the board.</li>');
    }
    Ut.querySelector('[data-pick="favs"]').hidden = !ko, Ut.querySelector("[data-fav-add]").setAttribute("aria-expanded", String(ko)), ko && Va("pick", zs(Ut.querySelector("[data-fav-search]").value, (L) => Dc.test(L), new Set(F()), "data-fav-pick")), Va("favtitle", '<div><strong>Title</strong><div class="status">Favourites, at the top of the card.</div></div><button class="switch' + (yi() ? " on" : "") + '" type="button" role="switch" aria-checked="' + yi() + '" data-fav-title aria-label="Title"></button>'), Va("suggest", '<div><strong>Show suggestions</strong><div class="status">Fills the card after your favourites.</div></div><button class="switch' + (ft() ? " on" : "") + '" type="button" role="switch" aria-checked="' + ft() + '" data-fav-suggest aria-label="Show suggestions"></button>');
  }
  const _n = (t) => {
    mt = { ...mt, ...t }, je(), Pe(), _e();
  };
  function Oc(t, e) {
    const a = mt, o = new Set(mt.favHidden || []);
    e ? o.delete(t) : o.add(t), _n({ favHidden: [...o] }), e ? La(bt(t) + " put back") : La(bt(t) + " hidden", Ai(a));
  }
  const lf = (t) => {
    const e = mt;
    _n({ favourites: F().filter((a) => a !== t), favHidden: (mt.favHidden || []).filter((a) => a !== t) }), La(bt(t) + " removed from favourites", Ai(e));
  }, cf = (t) => {
    _n({ favourites: [...F().filter((e) => e !== t), t], favHidden: (mt.favHidden || []).filter((e) => e !== t) }), La(bt(t) + " added to favourites");
  };
  Ut.addEventListener("click", (t) => {
    var a, o, i;
    const e = t.target.closest("button");
    if (e) {
      if (e.hasAttribute("data-tray-tab")) {
        Gn = e.dataset.trayTab, Ws(!0), Ut.querySelector(".tfTrayInner").scrollTop = 0;
        return;
      }
      if (e.hasAttribute("data-tray-go")) {
        Gn = e.dataset.trayGo, Ws(!1), Un(Ut, "Edit custom dashboard", Gn, Ec.find(([l]) => l === Gn)[1]);
        return;
      }
      if (e.hasAttribute("data-tray-back")) {
        Un(Ut, "Edit custom dashboard", null);
        return;
      }
      if (e.hasAttribute("data-tray-done")) Hs(!1);
      else if (e.hasAttribute("data-info")) Hc(e);
      else if (e.hasAttribute("data-dash-sums"))
        vn({ ...Cs(), hidden: Cs().hidden.filter((l) => l !== "sums"), sumsOff: !((a = mt.dash) != null && a.sumsOff) }), Pe(), _e();
      else if (e.hasAttribute("data-dash-welcome")) {
        const l = re();
        vn({ ...l, welcome: !l.welcome }), Pe(), _e();
      } else if (e.hasAttribute("data-tray-tuck"))
        ro = !ro, _e();
      else if (e.hasAttribute("data-phone-toggle"))
        _o = !_o, _e(), _o && ((o = ua.querySelector("[data-phone-key]")) == null || o.focus({ preventScroll: !0 }));
      else if (e.dataset.trayCard)
        t.detail === 0 && (Ns(e.dataset.trayCard), _e());
      else if (e.dataset.favEye) Oc(e.dataset.favEye, e.getAttribute("aria-pressed") !== "true");
      else if (e.dataset.favRemove) lf(e.dataset.favRemove);
      else if (e.hasAttribute("data-fav-add"))
        ko = !ko, _e(), ko && Ut.querySelector("[data-fav-search]").focus({ preventScroll: !0 });
      else if (e.dataset.favPick) cf(e.dataset.favPick);
      else if (e.hasAttribute("data-tile-add"))
        So = !So, _e(), So && Ut.querySelector("[data-tile-search]").focus({ preventScroll: !0 });
      else if (e.dataset.tilePick) Cc(e.dataset.tilePick);
      else if (e.hasAttribute("data-room-add"))
        Lr = !Lr, _e();
      else if (e.dataset.roomPick) Cc("room:" + e.dataset.roomPick);
      else if (e.dataset.areaOn) {
        const l = new Set(((i = mt.dash) == null ? void 0 : i.areasOff) || []);
        l.has(e.dataset.areaOn) ? l.delete(e.dataset.areaOn) : l.add(e.dataset.areaOn), vn({ ...re(), areasOff: [...l] }), Pe(), _e();
      } else e.hasAttribute("data-fav-suggest") ? _n({ suggest: !ft() }) : e.hasAttribute("data-fav-title") && (_n({ favsTitle: !yi() }), za());
    }
  }), Ut.addEventListener("input", (t) => {
    t.target.matches("[data-fav-search],[data-tile-search]") && _e();
  });
  const Ic = (t) => {
    mt = { ...mt, areaOrder: t }, je(), Pe(), _e();
  };
  Ut.addEventListener("keydown", (t) => {
    var c, u, f;
    const e = (u = (c = t.target).closest) == null ? void 0 : u.call(c, "[data-area-grip]");
    if (!e || !["ArrowUp", "ArrowDown"].includes(t.key)) return;
    t.preventDefault();
    const a = e.closest("[data-area-id]").dataset.areaId, o = Jo(Je).map((y) => y.id), i = o.indexOf(a), l = i + (t.key === "ArrowUp" ? -1 : 1);
    l < 0 || l >= o.length || (o.splice(l, 0, o.splice(i, 1)[0]), Ic(o), (f = Ut.querySelector('[data-area-id="' + CSS.escape(a) + '"] [data-area-grip]')) == null || f.focus());
  }), Ut.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-area-grip]");
    !e || t.button !== 0 || Qs(t, e.closest("[data-area-id]"), "areaId", Ic, (a) => Ut.querySelector('[data-area-id="' + CSS.escape(a) + '"]'));
  });
  const To = window.visualViewport, Xs = () => {
    if (!To) return;
    const t = Math.max(0, Math.round(window.innerHeight - To.height - To.offsetTop));
    Ut.style.bottom = t > 40 ? t + "px" : "";
  };
  To == null || To.addEventListener("resize", Xs), To == null || To.addEventListener("scroll", Xs), Ut.addEventListener("focusin", (t) => {
    var e, a;
    (a = (e = t.target).matches) != null && a.call(e, "input") && setTimeout(() => {
      Xs(), t.target.scrollIntoView({ block: "center", behavior: "smooth" });
    }, 350);
  }), Ut.addEventListener("keydown", (t) => {
    var a, o;
    const e = !!((o = (a = t.target).closest) != null && o.call(a, '[data-pick="tiles"],[data-tile-add]'));
    t.key !== "Escape" || !(e ? So : ko) || (t.stopPropagation(), e ? So = !1 : ko = !1, _e(), Ut.querySelector(e ? "[data-tile-add]" : "[data-fav-add]").focus({ preventScroll: !0 }));
  });
  function Fc(t, e, a, o) {
    t.preventDefault();
    const i = t.clientX, l = t.clientY;
    let c = null, u = 0;
    const f = Object.assign(document.createElement("div"), { className: "tfFavDrop" }), y = (x) => {
      if (!c) {
        if (Math.hypot(x.clientX - i, x.clientY - l) < 4) return;
        c = e.cloneNode(!0), c.classList.add("tfTrayGhost"), c.style.width = e.offsetWidth + "px", g.appendChild(c);
      }
      c.style.transform = "translate(" + (x.clientX - 24) + "px," + (x.clientY - 24) + "px)";
      const P = !ro && x.clientX >= Ut.getBoundingClientRect().left;
      if (a === "card") {
        const k = H.getBoundingClientRect(), { w: R } = en(H.clientWidth);
        Qt = !P && x.clientX >= k.left && x.clientX <= k.right && x.clientY >= k.top + tn ? { key: o, col: Math.max(0, Math.floor((x.clientX - k.left) / (R + pe))), row: Math.max(0, Math.floor((x.clientY - k.top - tn) / Wa)), fromTray: !0 } : null, u || (u = requestAnimationFrame(() => {
          u = 0, qe();
        }));
        return;
      }
      const L = H.querySelector(".tfDash-favs"), B = L == null ? void 0 : L.getBoundingClientRect();
      if (ta = null, B && !P && x.clientX >= B.left && x.clientX <= B.right && x.clientY >= B.top && x.clientY <= B.bottom) {
        let k = 1 / 0;
        L.querySelectorAll('[data-k^="fav:"]').forEach((R, _) => {
          const z = R.getBoundingClientRect(), A = Math.hypot(x.clientX - (z.left + z.width / 2), x.clientY - (z.top + z.height / 2));
          A < k && (k = A, ta = { i: _, r: z, after: x.clientX > z.left + z.width / 2 });
        }), ta || (ta = { i: 0, r: null, after: !1 });
      }
      ta != null && ta.r ? (f.isConnected || g.appendChild(f), Object.assign(f.style, { left: (ta.after ? ta.r.right : ta.r.left) - 2 + "px", top: ta.r.top + 8 + "px", height: ta.r.height - 16 + "px" })) : f.remove();
    }, S = () => {
      if (window.removeEventListener("pointermove", y), window.removeEventListener("pointerup", S), window.removeEventListener("pointercancel", S), cancelAnimationFrame(u), c == null || c.remove(), f.remove(), a === "card") {
        if (!c) Ns(o);
        else if (Qt != null && Qt.fromTray) {
          qe();
          const k = Ta(o) + Sc(o), R = re(), _ = xn();
          Qt = null, jn({ ...R, hidden: R.hidden.filter((z) => z !== o) }, _), La(k);
        }
        Qt = null, qe(), Pe(), _e();
        return;
      }
      if (!ta) return;
      const x = new Set(mt.favHidden || []);
      x.delete(o);
      const P = F().filter((k) => k !== o), L = P.filter((k) => !x.has(k)), B = L[Math.min(ta.i + (ta.after ? 1 : 0), L.length)];
      P.splice(B ? P.indexOf(B) : P.length, 0, o), ta = null, _n({ favourites: P, favHidden: [...x] }), La(bt(o) + " put back");
    };
    window.addEventListener("pointermove", y), window.addEventListener("pointerup", S), window.addEventListener("pointercancel", S);
  }
  const qc = {
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
  }, Wc = 136, df = 288, pf = 0.8, uf = { wx: "mdi:weather-partly-cloudy", areas: "mdi:home", favs: "mdi:star", act: "mdi:history", energy: "mdi:lightning-bolt", avg: "mdi:chart-line", aq: "mdi:air-filter", pollen: "mdi:flower-pollen", radar: "mdi:radar" }, ua = Object.assign(document.createElement("aside"), { className: "tfMiniPhone" });
  ua.setAttribute("aria-label", "Phone order"), ua.innerHTML = '<div class="tfPhoneHead"><div class="activityTitle">Phone</div><button class="tfTrayBtn" type="button" data-phone-close aria-label="Close the phone">' + Vl + '</button></div><p class="tfTrayNote" data-phone="note"></p><div class="tfPhoneScreen"><div class="tfPhoneList" data-phone="list"></div></div>', g.appendChild(ua);
  let $s = "";
  function Vc() {
    var u;
    const t = _o && da && g.classList.contains("tfBoard") && !ro;
    if (ua.classList.toggle("open", t), ua.toggleAttribute("inert", !t), !t) return;
    const e = As().filter((f) => !re().hidden.includes(f.key)), a = e.length, o = (f) => Math.round(f * pf * 10) / 10 + "px", i = (f, y) => {
      const S = f.el.classList.contains("tfDac"), x = f.tile ? S ? df : Wc : qc[f.key] || Wc;
      return '<button class="tfPhoneBlock' + (f.tile ? " tile" : "") + '" type="button" data-phone-key="' + q(f.key) + '" style="min-height:' + o(x) + '" aria-label="' + q(Ta(f.key) + ", " + (y + 1) + " of " + a + ". Drag, or use the arrow keys, to move it") + '"><span class="tfIcon"' + (f.tile ? he(f.key, ga(f.key)) : he(f.key, uf[f.key])) + '></span><span class="tfPhoneName">' + q(Ta(f.key)) + "</span></button>";
    }, l = '<div class="tfPhoneTitle">' + q(((u = H.querySelector(".tfDashTitle")) == null ? void 0 : u.textContent) || "") + '</div><div class="tfPhoneBlock fixed" style="min-height:' + o(qc.sums) + '"><span class="tfPhoneName">' + q(Ta("sums")) + "</span></div>" + e.map(i).join("");
    if (ua.querySelector('[data-phone="note"]').innerHTML = re().phone ? 'Phones use this order. <button class="tfLinkBtn" type="button" data-phone-reset>Follow the board</button>' : "Phones follow the board. Drag a card to give them an order of their own.", l === $s) return;
    $s = l;
    const c = ua.querySelector('[data-phone="list"]');
    c.innerHTML = l, Qa(c);
  }
  function jc(t, e) {
    var a;
    vn({ ...re(), phone: t }), _e(), e && ((a = ua.querySelector('[data-phone-key="' + CSS.escape(e) + '"]')) == null || a.focus({ preventScroll: !0 }));
  }
  const Js = () => [...ua.querySelectorAll("[data-phone-key]")].map((t) => t.dataset.phoneKey);
  function ff(t, e) {
    t.preventDefault();
    const a = e.parentElement, o = ua.querySelector(".tfPhoneScreen"), i = Js().join();
    e.classList.add("moving");
    const l = (u) => {
      const f = o.getBoundingClientRect();
      u.clientY > f.bottom - 40 ? o.scrollTop += 12 : u.clientY < f.top + 40 && (o.scrollTop -= 12);
      const y = [...a.querySelectorAll("[data-phone-key]")].find((P) => {
        const L = P.getBoundingClientRect();
        return P !== e && u.clientX >= L.left && u.clientX <= L.right && u.clientY >= L.top && u.clientY <= L.bottom;
      });
      if (!y) return;
      const S = y.getBoundingClientRect(), x = y.classList.contains("tile") ? u.clientX < S.left + S.width / 2 : u.clientY < S.top + S.height / 2;
      a.insertBefore(e, x ? y : y.nextSibling);
    }, c = () => {
      window.removeEventListener("pointermove", l), window.removeEventListener("pointerup", c), window.removeEventListener("pointercancel", c), e.classList.remove("moving");
      const u = Js();
      $s = "", u.join() !== i ? jc(u) : Vc();
    };
    window.addEventListener("pointermove", l), window.addEventListener("pointerup", c), window.addEventListener("pointercancel", c);
  }
  ua.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-phone-key]");
    e && t.button <= 0 && ff(t, e);
  }), ua.addEventListener("click", (t) => {
    var a;
    const e = t.target.closest("button");
    if (e != null && e.hasAttribute("data-phone-close"))
      _o = !1, _e(), (a = Ut.querySelector("[data-phone-toggle]")) == null || a.focus({ preventScroll: !0 });
    else if (e != null && e.hasAttribute("data-phone-reset")) {
      const { phone: o, ...i } = re();
      vn(i), _e();
    }
  }), ua.addEventListener("keydown", (t) => {
    var c, u, f, y;
    if (t.key === "Escape") {
      t.stopPropagation(), _o = !1, _e(), (c = Ut.querySelector("[data-phone-toggle]")) == null || c.focus({ preventScroll: !0 });
      return;
    }
    const e = (y = (f = (u = t.target).closest) == null ? void 0 : f.call(u, "[data-phone-key]")) == null ? void 0 : y.dataset.phoneKey, a = { ArrowUp: -1, ArrowLeft: -1, ArrowDown: 1, ArrowRight: 1 }[t.key];
    if (!e || !a) return;
    t.preventDefault();
    const o = Js(), i = o.indexOf(e), l = i + a;
    l < 0 || l >= o.length || ([o[i], o[l]] = [o[l], o[i]], jc(o, e));
  });
  function Qs(t, e, a, o, i) {
    t.preventDefault();
    const l = Te.drag, c = Ue(), u = 1 + l.lift / 100, f = [...e.parentElement.children].filter((Bt) => Bt.dataset[a]), y = f.indexOf(e), S = f.map((Bt) => Bt.getBoundingClientRect()), x = f.length - 1, P = S[y].height + (f.length > 1 ? S[1].top - S[0].bottom : 0), L = (Bt) => S[Bt].top + S[Bt].height / 2, B = t.clientY, k = S[0].top - S[y].top, R = S[x].top - S[y].top;
    let _ = 0, z = 0, A = 0, rt = 1, Tt = y, Rt = 0;
    e.classList.add("hcListDragging"), f.forEach((Bt) => {
      Bt !== e && (Bt.style.transition = c ? "none" : "transform " + l.gap + "ms " + Le.land);
    });
    const Pt = () => {
      if (Rt = requestAnimationFrame(Pt), c) {
        z = _, e.style.transform = "translateY(" + z + "px)";
        return;
      }
      A = El(A, _ - z, l.pull / 100, l.keep / 100), z += A, rt += (u - rt) * 0.25;
      const Bt = Math.min(Math.abs(A) / 48, 1);
      e.style.transform = "translateY(" + z.toFixed(2) + "px) scale(" + (rt * (1 - 0.063 * Bt)).toFixed(4) + "," + (rt * (1 + 0.1 * Bt)).toFixed(4) + ")";
    };
    Rt = requestAnimationFrame(Pt);
    const le = (Bt) => {
      _ = Math.max(k, Math.min(R, Bt.clientY - B));
      const ve = L(y) + _, Ce = f.filter((He, Oe) => Oe !== y && L(Oe) < ve).length;
      Ce !== Tt && (Tt = Ce, f.forEach((He, Oe) => {
        He !== e && (He.style.transform = y < Tt && Oe > y && Oe <= Tt ? "translateY(" + -P + "px)" : Tt < y && Oe >= Tt && Oe < y ? "translateY(" + P + "px)" : "");
      }));
    }, At = () => {
      window.removeEventListener("pointermove", le), window.removeEventListener("pointerup", At), window.removeEventListener("pointercancel", At), cancelAnimationFrame(Rt);
      const Bt = e.getBoundingClientRect(), ve = e.dataset[a];
      f.forEach((Ba) => {
        Ba.style.transition = "none", Ba.style.transform = "";
      }), e.classList.remove("hcListDragging");
      const Ce = f.map((Ba) => Ba.dataset[a]);
      Ce.splice(Tt, 0, Ce.splice(y, 1)[0]), o(Ce);
      const He = i(ve) || e;
      if (requestAnimationFrame(() => f.forEach((Ba) => {
        Ba.style.transition = "";
      })), c) return;
      const Oe = He.getBoundingClientRect(), Qn = Bt.top + Bt.height / 2 - (Oe.top + Oe.height / 2);
      He.classList.add("hcListLanding"), He.animate([{ transform: "translateY(" + Qn + "px) scale(" + rt + ")", filter: "drop-shadow(0 10px 30px rgba(0,0,0,.35))" }, { transform: "none", filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" }], { duration: l.slide, easing: Le.land }).finished.then(() => {
        He.classList.remove("hcListLanding"), Bl(He);
      }, () => He.classList.remove("hcListLanding"));
    };
    window.addEventListener("pointermove", le), window.addEventListener("pointerup", At), window.addEventListener("pointercancel", At);
  }
  function hf(t, e) {
    Qs(
      t,
      e,
      "trayFav",
      (a) => {
        const o = new Set(F());
        Vs.favs = null, _n({ favourites: a.filter((i) => o.has(i)) });
      },
      (a) => Ut.querySelector('[data-tray-fav="' + CSS.escape(a) + '"]')
    );
  }
  Ut.addEventListener("pointerdown", (t) => {
    if (t.button > 0) return;
    const e = t.target.closest("[data-tray-card]"), a = t.target.closest(".tfTrayFav");
    e ? Fc(t, e, "card", e.dataset.trayCard) : a && t.target.closest(".tfTrayGrip") ? hf(t, a) : a != null && a.classList.contains("off") && !t.target.closest("button") && Fc(t, a, "fav", a.dataset.trayFav);
  });
  function mf(t) {
    if (!da || t.button !== 0 || t.target.closest("[data-board-more],.tfBoardMenu,.tfFavHides")) return;
    const e = t.target.closest(".tfBoardItem"), a = e && yn().find((Pt) => Pt.el === e);
    if (!a || yo.includes(a.key)) return;
    const o = wn.get(a.key), { w: i } = en(H.clientWidth);
    if (!o) return;
    t.preventDefault(), no();
    const l = t.clientX, c = t.clientY;
    let u = !1, f = 0;
    const y = Te.drag, S = Ue();
    let x = 0, P = 0, L = 0, B = 0, k = 0, R = 0, _ = S || y.stick === 0, z = 0;
    const A = (Pt, le, At, Bt) => {
      e.style.transform = "translate(" + L.toFixed(2) + "px," + B.toFixed(2) + "px) rotate(" + Pt.toFixed(2) + "deg) rotate(" + le + "rad) scale(" + At.toFixed(4) + "," + Bt.toFixed(4) + ") rotate(" + -le + "rad)";
    }, rt = () => {
      if (z = requestAnimationFrame(rt), S) {
        L = x, B = P, A(0, 0, 1, 1);
        return;
      }
      if (!_) {
        const ve = Math.min(Math.hypot(x, P) / Math.max(1, y.stick), 1);
        L = x * 0.35, B = P * 0.35, A(0, Math.atan2(P, x), 1 + 0.155 * ve, 1 - 0.1 * ve);
        return;
      }
      k = El(k, x - L, y.pull / 100, y.keep / 100), R = El(R, P - B, y.pull / 100, y.keep / 100), L += k, B += R;
      const Pt = Math.hypot(k, R), le = Math.min(Pt / 48, 1), At = Math.max(-5, Math.min(y.tilt, k * 0.32)), Bt = 1 + y.lift / 100;
      A(At, Math.atan2(R, k), Bt * (1 + 0.1 * le), Bt * (1 - 0.063 * le));
    }, Tt = (Pt) => {
      if (x = Pt.clientX - l, P = Pt.clientY - c, !u) {
        if (Math.hypot(x, P) < 4) return;
        u = !0, Qt = { key: a.key, col: o.col, row: o.row }, e.classList.add("tfDragging", "mvDrag"), z = requestAnimationFrame(rt);
      }
      !_ && Math.hypot(x, P) > y.stick && (_ = !0, k = x * 0.085, R = P * 0.085), Qt.col = Math.round((o.x + x) / (i + pe)), Qt.row = Math.round((o.y + P - tn) / Wa), f || (f = requestAnimationFrame(() => {
        f = 0, qe();
      }));
    }, Rt = () => {
      var Qn;
      if (window.removeEventListener("pointermove", Tt), window.removeEventListener("pointerup", Rt), window.removeEventListener("pointercancel", Rt), !u) return;
      const Pt = (tr) => {
        tr.preventDefault(), tr.stopImmediatePropagation();
      };
      window.addEventListener("click", Pt, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", Pt, { capture: !0 }), 300), cancelAnimationFrame(f), cancelAnimationFrame(z);
      const le = e.getBoundingClientRect(), At = a.key;
      e.style.transition = "none", qe(), e.classList.remove("tfDragging", "mvDrag"), e.style.transform = "", Qt = null, jn(re(), xn()), qe(), Pe();
      const Bt = (Qn = yn().find((tr) => tr.key === At)) == null ? void 0 : Qn.el;
      if (requestAnimationFrame(() => {
        e.style.transition = "", Bt && (Bt.style.transition = "");
      }), !Bt || S) return;
      Bt.style.transition = "none";
      const ve = Bt.getBoundingClientRect(), Ce = le.left + le.width / 2 - (ve.left + ve.width / 2), He = le.top + le.height / 2 - (ve.top + ve.height / 2);
      Bt.style.zIndex = "20", Bt.animate([{ transform: "translate(" + Ce + "px," + He + "px) scale(" + (1 + y.lift / 100) + ")" }, { transform: "none" }], { duration: y.slide, easing: Le.land }).finished.then(() => {
        Bt.style.zIndex = "", Bl(Bt);
      }, () => {
        Bt.style.zIndex = "";
      });
    };
    window.addEventListener("pointermove", Tt), window.addEventListener("pointerup", Rt), window.addEventListener("pointercancel", Rt);
  }
  function zc(t = !1) {
    const e = H == null ? void 0 : H.querySelector(".tfDashGraph svg[data-graph]");
    if (!(e != null && e.clientWidth)) return;
    const a = e.dataset.graph + "@" + e.clientWidth + "x" + e.clientHeight + "@" + Math.floor(Date.now() / 3e5);
    if (e.dataset.drawn === a) return;
    const o = !e.dataset.drawn;
    e.dataset.drawn = a;
    const i = ac.find((l) => l.id === e.dataset.graph);
    i ? xu(e, i).then(() => {
      (t || o) && Mu(e);
    }) : ud(e.dataset.graph, e).then(() => {
      t && ic(e);
    });
  }
  function Gc() {
    var f, y, S;
    zt = Zr.model(d(), { madeUp: !T }), tt(), M = zt.states, M[(f = mt.sources) == null ? void 0 : f.grid] && (zt.grid = mt.sources.grid), M[(y = mt.sources) == null ? void 0 : y.alarm] && (zt.security.alarms = [mt.sources.alarm]), Mt.forEach((x, P) => {
      const L = M[P], B = (L == null ? void 0 : L.attributes) || {};
      if (!L || Date.now() - x.at > 2 * 60 * 1e3) {
        Mt.delete(P);
        return;
      }
      x.pos != null && L.state !== "opening" && L.state !== "closing" && Math.abs(ma(P) - x.pos) < 1 && delete x.pos, x.tilt != null && Math.abs((B.current_tilt_position ?? -1) - x.tilt) < 1 && delete x.tilt, x.pos == null && x.tilt == null && Mt.delete(P);
    });
    const t = [];
    let e = 0;
    const a = E();
    Je = a.filter((x) => x.room).map((x) => x.room), Je.some((x) => x.id === j) || (j = ((S = Je[0]) == null ? void 0 : S.id) || null);
    const o = Q === "weather" ? { key: "weather", name: "Weather" } : Q && a.find((x) => x.key === Q);
    if (o || (Q = null), g.classList.toggle("tfAreaOpen", !!o), g.classList.toggle("tfWeatherOpen", (o == null ? void 0 : o.key) === "weather"), g.classList.toggle("tfDash", !o), Ct = /* @__PURE__ */ new Map(), zt.rooms.forEach((x) => [...x.actions, ...x.plugs, ...x.readings, ...x.openings, ...x.solar, ...x.plants.flatMap((P) => [P.id, ...P.readings])].forEach((P) => Ct.set(P, x.name))), !o) return Cu(t, ae());
    if (t.push({ key: "areahead", html: gf(o, ++e) }), o.key === "weather")
      return t.weather = ++e, t;
    const i = o.ids, l = o.room ? o.room.id : o.key, c = o.room;
    c != null && c.solar.length && t.push({ key: "energy:" + c.id, html: Ko(c, ++e) }), c && (c.readings.length || c.power != null) && t.push({ key: "readings:" + c.id, html: ii(c, ++e) }), c == null || c.plants.forEach((x) => t.push({ key: "plant:" + x.id, html: si(x, ++e) }));
    const u = [...i, ...((c == null ? void 0 : c.plugs) || []).filter((x) => !i.includes(x))];
    return u.length && t.push({ key: "block:" + l, order: ++e, tiles: u.map((x) => ({ key: x, html: yr(x) })) }), t;
  }
  const gf = (t, e) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + e + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + ql + '</button><div class="settingsTitle">' + q(t.name) + "</div></div>";
  let Uc = 0, Yc = null;
  const Zc = (t) => t === "weather" ? Xa.wx : t.startsWith("room:") && H.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || H.querySelector(".tfAreas");
  function Kc(t) {
    var e, a;
    Q || (Uc = Br().scrollTop, Yc = ((e = Zc(t)) == null ? void 0 : e.getBoundingClientRect().top) ?? null), Q = t, t.startsWith("room:") && (j = t.slice(5)), za(), Br().scrollTop = 0, (a = H.querySelector("[data-area-back]")) == null || a.focus({ preventScroll: !0 });
  }
  let Er = null;
  function bf(t, e) {
    if (Er == null || Er(), e == null) return;
    const a = Br(), o = performance.now() + 1500, i = ["wheel", "touchstart", "pointerdown", "keydown"];
    let l = 0;
    const c = () => {
      cancelAnimationFrame(l), i.forEach((f) => window.removeEventListener(f, c, !0)), Er = null;
    }, u = () => {
      const f = t();
      if (f != null && f.isConnected) {
        const y = f.getBoundingClientRect().top - e;
        Math.abs(y) > 0.5 && (a.scrollTop += y);
      }
      performance.now() < o ? l = requestAnimationFrame(u) : c();
    };
    i.forEach((f) => window.addEventListener(f, c, { capture: !0, passive: !0 })), Er = c, u();
  }
  function tl() {
    var a;
    const t = Q;
    Q = null, za(), Br().scrollTop = Uc, bf(() => Zc(t), Yc);
    const e = t.startsWith("room:") ? H.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || H.querySelector('.tfAreaPanel[data-area="' + CSS.escape(t.slice(5)) + '"]') : t === "weather" ? Xa.wx.querySelector(".wbOpenPage") : H.querySelector('[data-k="sum:' + CSS.escape(t) + '"]');
    (a = (e == null ? void 0 : e.querySelector("[data-go]")) || e) == null || a.focus({ preventScroll: !0 });
  }
  const wf = (t) => t.wrap ? t.wrap(t.tiles.map((e) => e.html).join(""), t) : '<div class="tfBlock" data-tf data-k="' + q(t.key) + '" style="order:' + t.order + '"><div class="tfActions">' + t.tiles.map((e) => e.html).join("") + "</div></div>", Xc = (t) => t.map((e) => e.key + (e.tiles ? "(" + e.tiles.map((a) => a.key).join(",") + ")" : "")).join(";");
  function Br() {
    for (let t = g.parentElement || g.getRootNode().host; t; t = t.parentElement || t.getRootNode().host) {
      const e = getComputedStyle(t).overflowY;
      if ((e === "auto" || e === "scroll") && t.scrollHeight > t.clientHeight) return t;
    }
    return document.scrollingElement;
  }
  function $c(t) {
    const e = Br(), a = (u) => {
      const f = u.getBoundingClientRect();
      return f.height && f.bottom > 0 && f.top < window.innerHeight;
    }, o = [...H.children, ...H.querySelectorAll(".tfDashTiles > *")].find((u) => !u.matches(".tfDashTiles") && a(u)), i = o == null ? void 0 : o.dataset.k, l = o == null ? void 0 : o.getBoundingClientRect().top;
    t();
    const c = o != null && o.isConnected ? o : i && H.querySelector('[data-k="' + CSS.escape(i) + '"]');
    c != null && c.isConnected && l != null && (e.scrollTop += c.getBoundingClientRect().top - l);
  }
  function za() {
    if (!w || !H) return;
    const t = Gc(), e = (i) => {
      var l;
      return (((l = i.closest("[data-k]")) == null ? void 0 : l.dataset.k) || "") + "|" + i.dataset.iconFor + "|" + (i.dataset.iconName || "");
    }, a = /* @__PURE__ */ new Map();
    H.querySelectorAll("[data-tf] [data-icon-for]").forEach((i) => {
      i.firstElementChild && (a.get(e(i)) || a.set(e(i), []).get(e(i))).push(i.firstElementChild);
    }), H.querySelectorAll("[data-tf]").forEach((i) => i.remove()), ka.clear();
    const o = document.createElement("div");
    o.innerHTML = t.map((i) => i.tiles ? wf(i) : i.html).join(""), t.forEach((i) => i.tiles ? i.tiles.forEach((l) => ka.set(l.key, l.html)) : ka.set(i.key, i.html)), Yr = Xc(t), o.querySelectorAll("[data-icon-for]").forEach((i) => {
      var c;
      const l = !i.firstElementChild && ((c = a.get(e(i))) == null ? void 0 : c.shift());
      l && i.appendChild(l);
    }), H.append(...o.children), Xr(t.weather), $r(), Bs.disconnect(), qe(), Qa(H), dl(H), wo(H), N(), fd(), $n(), nd(), requestAnimationFrame(it);
  }
  const Jc = (t) => {
    var a;
    const e = n.activeElement && t.contains(n.activeElement) ? n.activeElement : null;
    return e && { label: e.getAttribute("aria-label"), act: (a = e.dataset) == null ? void 0 : a.act };
  }, el = (t, e) => {
    var a;
    e && ((a = e.label && t.querySelector('[aria-label="' + CSS.escape(e.label) + '"]') || e.act && t.querySelector('[data-act="' + CSS.escape(e.act) + '"]')) == null || a.focus({ preventScroll: !0 }));
  };
  function al(t, e) {
    if (!t.querySelector(".tfDacPad"))
      return t.replaceWith(e), e;
    const a = t.matches(".tfDac") && t.querySelector(":scope > .tfDacPad"), o = e.querySelector(":scope > .tfDacPad");
    if (a)
      return (o == null ? void 0 : o.dataset.dac) !== a.dataset.dac ? (t.replaceWith(e), e) : (t.querySelector(":scope > .tfActionHead").replaceWith(e.querySelector(":scope > .tfActionHead")), t.classList.toggle("on", e.classList.contains("on")), ["data-light", "data-tone"].forEach((c) => e.hasAttribute(c) ? t.setAttribute(c, e.getAttribute(c)) : t.removeAttribute(c)), [...t.style].filter((c) => c.startsWith("--") && !c.startsWith("--tf-")).forEach((c) => t.style.removeProperty(c)), [...e.style].forEach((c) => t.style.setProperty(c, e.style.getPropertyValue(c))), t);
    const i = (c) => {
      var u;
      return ((u = c.dataset) == null ? void 0 : u.iconFor) !== void 0;
    };
    if (i(t) && i(e) && !e.children.length && t.dataset.iconFor === e.dataset.iconFor && t.dataset.iconName === e.dataset.iconName && t.firstElementChild)
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
    return [...t.children].forEach((c, u) => al(c, l[u])), t;
  }
  function vf(t, e) {
    const a = document.createElement("div");
    a.innerHTML = e;
    const o = Jc(t), i = al(t, a.firstElementChild);
    Qa(i), dl(i), wo(i), el(i, o);
  }
  function Pe() {
    !w || !H || Qt || $c(yf);
  }
  function yf() {
    if (!H.querySelector("[data-tf]")) {
      za();
      return;
    }
    const t = Gc();
    if (Xc(t) !== Yr) {
      za();
      return;
    }
    const e = (a) => [...st.keys()].some((o) => {
      const i = o.slice(o.indexOf("|") + 1);
      return a === i || a.endsWith(":" + i);
    });
    t.forEach((a) => (a.tiles || [a]).forEach((o) => {
      if (ka.get(o.key) === o.html || e(o.key)) return;
      const i = H.querySelector('[data-k="' + CSS.escape(o.key) + '"]');
      i && (ka.set(o.key, o.html), vf(i, o.html), o.key.startsWith("energy:") && fd());
    })), $n(), nd(), mi(), N(), ke == null || ke.update(), Se == null || Se.forEach((a) => a.update()), g.classList.contains("tfDash") && xi(), requestAnimationFrame(it);
  }
  const Kn = {
    light: (t) => [["Brightness", t.brightness != null ? Math.round(t.brightness / 2.55) + "%" : null], ["Colour temperature", t.color_temp_kelvin ? Number(t.color_temp_kelvin).toLocaleString() + " K" : null], ["Colour mode", t.color_mode && jt(t.color_mode)]],
    climate: (t) => [["Current temperature", Be(t.current_temperature) + " °C"], ["Target", Be(t.temperature) + " °C"], ["Action", jt(t.hvac_action)]],
    cover: (t) => [["Position", t.current_position != null ? t.current_position + "% open" : null], ["Tilt", t.current_tilt_position != null ? t.current_tilt_position + "% open" : null]],
    humidifier: (t) => [["Current humidity", t.current_humidity + "%"], ["Target", t.humidity + "%"], ["Mode", jt(t.mode)]],
    media_player: (t) => [["Title", t.media_title], ["Artist", t.media_artist], ["Volume", t.volume_level != null ? Math.round(t.volume_level * 100) + "%" : null], ["Source", t.source]],
    vacuum: (t) => [["Battery", t.battery_level + "%"], ["Fan speed", jt(t.fan_speed)], ["Rooms", (t.rooms || []).join(", ") || null]],
    lock: (t) => [["Changed by", t.changed_by]],
    alarm_control_panel: (t) => [["Changed by", t.changed_by]],
    valve: (t) => [["Position", t.current_position != null ? t.current_position + "% open" : null]],
    fan: (t) => [["Speed", t.percentage != null ? t.percentage + "%" : null], ["Oscillating", t.oscillating != null ? t.oscillating ? "Yes" : "No" : null], ["Direction", t.direction && jt(t.direction)]],
    water_heater: (t) => [["Current temperature", t.current_temperature != null ? t.current_temperature + " °C" : null], ["Target", t.temperature != null ? t.temperature + " °C" : null], ["Mode", t.operation_mode && jt(t.operation_mode)], ["Away", t.away_mode && jt(t.away_mode)]],
    plant: (t) => [["Moisture", t.moisture + "%"], ["Light", Number(t.brightness).toLocaleString() + " lx"], ["Temperature", Be(t.temperature) + " °C"], ["Fertility", t.conductivity + " µS/cm"], ["Problems", t.problem === "none" ? "None" : jt(t.problem)]],
    weather: (t) => [["Temperature", t.temperature != null ? t.temperature + " " + (t.temperature_unit || "°C") : null], ["Humidity", t.humidity != null ? t.humidity + "%" : null], ["Wind", t.wind_speed != null ? t.wind_speed + " " + (t.wind_speed_unit || "km/h") : null], ["Pressure", t.pressure != null ? t.pressure + " " + (t.pressure_unit || "hPa") : null]]
  }, xf = (t) => Ya(t) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function Mf(t, e = {}, a = !1) {
    return '<div class="tfMoreList">' + t.map((o) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + q(o.name) + '</div><div class="tfMoreTiles' + (a ? " single" : "") + '">' + o.ids.map((i) => St(i, e)).join("") + "</div></div>").join("") + "</div>";
  }
  const kt = document.createElement("div");
  kt.className = "tfMoreBackdrop", kt.hidden = !0, g.appendChild(kt);
  const Ga = document.createElement("div");
  Ga.className = "tfMoreBackdrop tfMoreUnder", Ga.hidden = !0, g.insertBefore(Ga, kt);
  const ol = (t, e) => {
    for (let a = t; a && a !== kt; a = a.parentElement) {
      const o = getComputedStyle(a).overflowY;
      if ((o === "auto" || o === "scroll") && a.scrollHeight > a.clientHeight + 1 && (e < 0 ? a.scrollTop > 0 : a.scrollTop + a.clientHeight < a.scrollHeight - 1)) return !0;
    }
    return !1;
  };
  let Rr = null;
  kt.addEventListener("touchstart", (t) => {
    Rr = { x: t.touches[0].clientX, y: t.touches[0].clientY };
  }, { passive: !0 }), kt.addEventListener("touchmove", (t) => {
    var i, l;
    if (!Rr || t.touches.length > 1 || (l = (i = t.target).closest) != null && l.call(i, "input,textarea,select")) return;
    const e = t.touches[0], a = Rr.x - e.clientX, o = Rr.y - e.clientY;
    Rr = { x: e.clientX, y: e.clientY }, Math.abs(o) >= Math.abs(a) && !ol(t.target, o) && t.preventDefault();
  }, { passive: !1 }), kt.addEventListener("wheel", (t) => {
    var e, a;
    Math.abs(t.deltaX) > Math.abs(t.deltaY) && ((a = (e = t.target).closest) != null && a.call(e, "[data-more-pages]")) || ol(t.target, t.deltaY) || t.preventDefault();
  }, { passive: !1 });
  const kf = () => window.innerWidth <= 620;
  let We = null;
  kt.addEventListener("pointerdown", (t) => {
    const e = kt.querySelector(".tfMorePair");
    !kf() || !e || !e.contains(t.target) || !t.isPrimary || kt._closing || t.target.closest("input,textarea,select,.tfDacPad,[data-cover-art],.tfMoreSide") || (We = { x: t.clientX, y: t.clientY, t: performance.now(), dy: 0, v: 0, pair: e, from: t.target, grab: t.target.matches(".tfMore") || !!t.target.closest(".tfMoreHead") });
  }, !0), kt.addEventListener("pointermove", (t) => {
    if (!We || !t.isPrimary) return;
    const e = t.clientY - We.y, a = performance.now();
    if (!We.on) {
      if (Math.abs(t.clientX - We.x) > 8 || e < -8 || !We.grab && ol(We.from, -1)) {
        We = null;
        return;
      }
      if (e < 8) return;
      We.on = !0;
      try {
        kt.setPointerCapture(t.pointerId);
      } catch {
      }
    }
    We.v = (e - We.dy) / Math.max(1, a - We.t), We.dy = e, We.t = a, We.pair.style.transform = "translateY(" + Math.max(0, e) + "px)";
  });
  const Qc = (t) => {
    if (!We || !t.isPrimary) return;
    const e = We;
    if (We = null, !e.on) return;
    const a = (y) => {
      y.preventDefault(), y.stopImmediatePropagation();
    };
    window.addEventListener("click", a, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", a, { capture: !0 }), 300);
    const o = t.type === "pointerup" && (e.dy > 120 || e.v > 0.5), i = "translateY(" + Math.max(0, e.dy) + "px)";
    if (e.pair.style.transform = "", !o || Ue()) {
      o ? gl() : e.pair.animate([{ transform: i }, { transform: "none" }], { duration: 320, easing: Le.spring });
      return;
    }
    const l = C;
    kt._closing = !0, kt.style.pointerEvents = "none", kt.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220, easing: Le.exit, fill: "forwards" });
    const c = e.pair.animate([{ transform: i }, { transform: "translateY(calc(100% + 40px))" }], { duration: 220, easing: Le.exit, fill: "forwards" });
    let u = !1;
    const f = () => {
      u || (u = !0, kt._closing = !1, kt.style.pointerEvents = "", kt.getAnimations().forEach((y) => y.cancel()), e.pair.getAnimations().forEach((y) => y.cancel()), C === l && gl());
    };
    c.finished.then(f, f), setTimeout(f, 300);
  };
  kt.addEventListener("pointerup", Qc), kt.addEventListener("pointercancel", Qc);
  function nl() {
    const t = kt.querySelector(".tfMorePair"), e = kt.querySelector(".tfMore");
    t == null || t.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - e.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", nl, { passive: !0 }), w && cr();
  let io = [];
  const Sf = (t) => t === "favourites" || t.startsWith("summary:") || t.startsWith("group:");
  function _f(t) {
    const e = (k, R = "") => '<div class="tfMoreHead">' + (C != null && C.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + cp + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + q(k) + "</div>" + R + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + dp + "</button></div>", a = (k, R) => '<div class="tfMoreNow"><div class="tfMoreState">' + q(k) + "</div></div>", o = Mf;
    if (t === "favourites") {
      const k = F(), R = new Set(k), _ = [{ name: "Starred", ids: k }, { name: "Home", ids: zt.homeVacuums }, { name: "Security", ids: [...zt.security.alarms, ...zt.security.locks] }, ...zt.rooms.map((z) => ({ name: z.name, ids: [...z.actions, ...z.plugs] }))].map((z, A) => A ? { ...z, ids: z.ids.filter((rt) => !R.has(rt)) } : z).filter((z) => z.ids.length);
      return [e("Favourites"), a(k.length ? k.length + " starred" : "None starred"), o(_, { star: !0 }, !0)];
    }
    const i = (k, { name: R = "", alert: _ = !1, plain: z = !1 } = {}) => {
      const A = z ? [] : k.filter((Rt) => nr.includes(Rt.split(".")[0])), rt = k.filter((Rt) => !A.includes(Rt)), Tt = (Rt) => Rt.startsWith("vacuum.") && Gt(Rt).battery_level != null ? Gt(Rt).battery_level + "%" : null;
      return '<div class="tfMoreGroup">' + (R ? '<div class="tfMoreGroupName">' + q(R) + "</div>" : "") + '<div class="tfMoreActions">' + A.map((Rt) => yr(Rt, !0)).join("") + rt.map((Rt) => St(Rt, { plain: z, alert: _, say: z ? Tt(Rt) : null })).join("") + "</div></div>";
    };
    if (t.startsWith("summary:")) {
      const k = ae().find((A) => A.key === t.slice(8));
      if (!k) return null;
      const R = k.key === "light" ? (k.groups || []).flatMap((A) => A.ids) : [], _ = R.some((A) => {
        var rt;
        return ((rt = M[A]) == null ? void 0 : rt.state) === "on";
      }), z = R.length ? '<button class="primary" type="button" data-acts="' + go(R.map((A) => ["light", _ ? "turn_off" : "turn_on", A])) + '">' + (_ ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [e(k.name), '<div class="tfMoreNowRow">' + a(k.value) + z + "</div>", ...(k.groups || []).map((A) => i(A.ids, { name: A.name === k.name ? "" : A.name, alert: A.alert, plain: k.plain }))];
    }
    if (t.startsWith("group:")) {
      const [, k, R] = t.split(":"), _ = zt.rooms.find((rt) => rt.id === k), z = _ && $o(_).find((rt) => rt.key === R);
      if (!z) return null;
      const A = z.acts ? '<button class="primary" type="button" data-acts="' + go(z.acts) + '">' + (z.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [e(_.name + " " + z.label.toLowerCase()), '<div class="tfMoreNowRow">' + a(z.value) + A + "</div>", i(xr(_, R))];
    }
    const l = t.split(".")[0];
    M[t];
    const c = nr.includes(l) || jr.includes(l) ? sa(t) : rl(t), u = Rf(t), f = [...u ? u.pages.map((k) => ({ name: k.name, svg: k.svg, tabs: k.tabs, html: k.space + '<div class="tfMoreCtl"' + jo(t).replace(" data-light", "") + ">" + k.rows.filter(Boolean).join("") + "</div>" })) : [{ name: "Control", svg: fa, html: Lf(t) + (l === "plant" ? Ff(t).join("") : "") + c.sections.filter(Boolean).join("") }], { name: "Info", svg: jl, html: Hf(t) }];
    C && C.page == null && (C.page = 0), C && (C.pages = f.length);
    const y = (C == null ? void 0 : C.page) || 0, S = (C == null ? void 0 : C.mode) || "", x = f.length - 1, P = !!(u != null && u.infoButton), L = f.flatMap((k, R) => (P && R === x ? [] : k.tabs || [{ name: k.name, svg: k.svg }]).map((_) => ({ ..._, page: R }))), B = (k) => k.page === y && (k.mode == null || k.mode === S);
    return [
      Af(t, c),
      '<div class="tfMorePages' + (u ? " tfMorePop" : "") + (S && y === 0 ? " tfMoreHold" : "") + '" data-more-pages>' + f.map((k) => '<section class="tfMorePage" aria-label="' + k.name + '" data-mode="' + S + '">' + k.html + "</section>").join("") + "</div>",
      // the pages' icons in place of their dots (Matt, 12 Nov): Control's sliders and Info's (i); a light's Colour its palette first
      (P ? '<div class="tfMoreFoot"><span class="tfMoreFootGap"></span>' : "") + (L.length ? '<div class="tfMoreDots tfMorePageIcons" role="tablist" aria-label="' + (P ? "Views" : "Pages") + '">' + L.map((k) => '<button type="button" role="tab" aria-selected="' + B(k) + '" aria-label="' + k.name + '" title="' + k.name + '" data-more-page="' + k.page + '"' + (k.mode != null ? ' data-more-mode="' + k.mode + '"' : "") + (B(k) ? "" : ' tabindex="-1"') + ">" + k.svg + "</button>").join("") + "</div>" : "") + (P ? '<button class="tfMoreInfoBtn" type="button" aria-label="Info" title="Info" aria-pressed="' + (y === x) + '" data-more-page="' + x + '" data-more-toggle>' + jl + "</button></div>" : "")
    ];
  }
  const Cf = (t, e) => {
    const a = t.split(".")[0], o = M[t], i = o.attributes;
    if (a === "light") return Re(t);
    const l = a === "climate" ? jt(i.hvac_action || o.state) : a === "humidifier" ? jt(i.action || o.state) : a === "water_heater" ? jt(i.operation_mode || o.state) : a === "fan" && o.state === "on" && i.percentage != null ? i.percentage + "%" : (a === "valve" || a === "cover") && i.current_position != null && o.state !== "closed" ? i.current_position + "%" : Re(t);
    return [e, l].filter(Boolean).join(" · ");
  };
  function Af(t, e, a) {
    var c, u, f, y, S;
    const o = (c = zt.areaOf) == null ? void 0 : c.call(zt, t), i = o && (((u = zt.rooms.find((x) => x.id === o)) == null ? void 0 : u.name) || ((S = (y = (f = d()) == null ? void 0 : f.areas) == null ? void 0 : y[o]) == null ? void 0 : S.name)) || "", l = e.button ? eo(t, e) : '<div class="tfIcon"' + he(t, e.icon) + "></div>";
    return '<div class="tfMoreHead tfMoreTileHead' + (e.on ? " on" : "") + '"' + (e.tone ? ' data-tone="' + e.tone + '"' : "") + jo(t) + ">" + (C != null && C.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + cp + "</button>" : "") + l + '<div class="tfName"><span class="activityRowName" id="tfMoreTitle">' + q(bt(t)) + '</span><span class="activityRowMeta">' + q(Cf(t, i)) + '</span></div><button class="tfBack" type="button" data-more-close aria-label="Close">' + dp + "</button></div>";
  }
  const Tf = ["lock", "alarm_control_panel", "switch", "input_boolean", "fan", "valve", "media_player", "automation", "script", "scene", "button"];
  function rl(t) {
    var i;
    const e = t.split(".")[0], a = ((i = M[t]) == null ? void 0 : i.state) === "on", o = jr.includes(e) ? { act: Et(e, "toggle", t), label: "Turn " + bt(t) + (a ? " off" : " on") } : e === "scene" || e === "script" ? { act: Et(e, "turn_on", t), label: "Run " + bt(t) } : null;
    return { sections: [], on: a, button: o, icon: ga(t) };
  }
  function Lf(t) {
    const e = t.split(".")[0];
    if (Tf.includes(e) || e === "light" && !gn(t)) {
      const i = nr.includes(e) ? sa(t) : rl(t);
      return i != null && i.button ? '<div class="tfMoreSpace tfMoreSwitch' + (i.on ? " on" : "") + '"' + (i.tone ? ' data-tone="' + i.tone + '"' : "") + jo(t) + ">" + eo(t, i) + "</div>" : "";
    }
    if (e === "cover") return '<div class="tfMoreSpace tfMoreFill"><div data-cover-art="' + q(t) + '"></div></div>';
    if (e === "light" && gn(t)) return '<div class="tfMoreSpace tfMoreFill"><div class="tfDacPad" data-dac="more:' + q(t) + '"></div></div>';
    const { big: a, lines: o } = Pf(t);
    return '<div class="tfMoreSpace"><div class="tfMoreBig' + (ze("pos", t) != null ? " live" : "") + '"><span class="tfMoreNum">' + q(a[0]) + "</span>" + (a[1] ? '<span class="tfMoreUnit">' + q(a[1]) + "</span>" : "") + '</div><div class="tfMoreFacts">' + o.map(([i, l]) => '<div class="tfMoreFact"><span>' + q(i) + "</span><span>" + q(l) + "</span></div>").join("") + "</div></div>";
  }
  const Df = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z"/></svg>', Ef = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="5" width="14" height="14" rx="4"/></svg>', Bf = ["light", "climate", "fan", "humidifier", "water_heater", "alarm_control_panel", "cover", "lock", "valve", "switch", "input_boolean"], so = (t, e) => '<div class="tfMoreField"><div class="tfMoreLabel">' + q(t) + "</div>" + e + "</div>", Ea = (t, e) => ia("tfSeg", t, e), il = (t, e, a, o, i, l) => '<div class="tfBar tfPopBar ' + t + '" role="slider" tabindex="0" aria-label="' + q(o) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(a) + '" aria-valuetext="' + q(i) + '" data-drag="' + q(t + "|" + e) + '"><i style="width:' + Math.max(0, Math.min(100, a)) + '%"><output class="tfBarVal">' + q(i) + "</output></i>" + (l ? '<span class="tfBarIcon"' + he("", l, o) + "></span>" : "") + "</div>", Xn = (t, e) => '<div class="tfMoreSpace tfMoreSwitch' + (e.on ? " on" : "") + '"' + (e.tone ? ' data-tone="' + e.tone + '"' : "") + jo(t) + ">" + eo(t, e) + "</div>", sl = (t, e, a) => '<div class="tfMoreSpace"><div class="tfMoreBig"><span class="tfMoreNum">' + q(t) + "</span>" + (e ? '<span class="tfMoreUnit">' + q(e) + "</span>" : "") + '</div><div class="tfMoreFacts">' + a.filter(([, o]) => o != null && o !== "").map(([o, i]) => '<div class="tfMoreFact"><span>' + q(o) + "</span><span>" + q(i) + "</span></div>").join("") + "</div></div>", td = () => '<input class="tfMoreCode" type="password" inputmode="numeric" autocomplete="off" placeholder="Code" aria-label="Code" data-code value="' + q((C == null ? void 0 : C.code) || "") + '">', Li = (t, e, a, o, i) => ({ label: o, pressed: i, html: null, coded: [t, e, a].join("|") }), ed = (t, e) => '<div class="tfSeg" role="group" aria-label="' + q(t) + '">' + e.map((a) => '<button type="button" data-coded="' + q(a.coded) + '" aria-pressed="' + !!a.pressed + '">' + q(a.label) + "</button>").join("") + "</div>", ad = (t, e, a) => Ea(bt(t), [{ label: "Off", act: Et(e, "turn_off", t), pressed: !a }, { label: "On", act: Et(e, "turn_on", t), pressed: a }]);
  function Rf(t) {
    var l, c, u;
    const e = t.split(".")[0], a = M[t], o = a.attributes;
    if (!Bf.includes(e)) return null;
    const i = nr.includes(e) || jr.includes(e) ? sa(t) : rl(t);
    if (e === "light") {
      const f = a.state === "on", y = Ja(t), [S, x] = zo(t), P = ze("bright", t, f ? $a(a) : 0), L = ze("ctf", t, f && o.color_mode === "color_temp" ? o.color_temp_kelvin : null), B = ze("huev", t, f && Vo.includes(o.color_mode) && o.hs_color ? o.hs_color[0] : null), k = y.includes("color_temp"), R = y.some((ve) => Vo.includes(ve)), _ = gn(t), z = (ve, Ce, He, Oe) => '<div class="tfBar tfVBar ' + ve + '" data-axis="y" role="slider" tabindex="0" aria-orientation="vertical" aria-label="' + q(bt(t) + " " + Ce.toLowerCase()) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(He) + '" data-drag="' + ve + "|" + q(t) + '">' + Oe + "</div>", A = (ve, Ce, He = "") => '<div class="tfVCol' + He + '">' + Ce + "</div>", rt = A("Brightness", z("bright", "Brightness", P, '<i style="height:' + P + '%"></i><span class="tfBarIcon"' + he("", "mdi:white-balance-sunny", "Brightness") + "></span>")), Tt = L == null ? null : (x - L) / (x - S), Rt = k ? A("Warmth", z("ctf", "Warmth", Tt == null ? 0 : Tt * 100, Tt == null ? "" : '<b style="top:' + Math.round((1 - Tt) * 1e3) / 10 + '%"></b>'), " tfVWarm") : "", Pt = R ? A("Colour", z("huev", "Colour", B == null ? 0 : (1 - B / 360) * 100, B == null ? "" : '<b style="top:' + Math.round(B / 360 * 1e3) / 10 + '%"></b>'), " tfVColour") : "", le = '<div class="tfVCols">' + rt + (Rt || Pt ? '<div class="tfVSwap">' + Rt + Pt + "</div>" : "") + "</div>", At = _ ? '<div class="tfLightPad"><div class="tfDacPad" data-dac="more:' + q(t) + '"></div></div>' : "", Bt = [R && { name: "Colour", svg: Df, mode: "colour" }, _ && { name: "Dual Axis Controller", svg: Ef, mode: "dac" }, { name: "Sliders", svg: fa, mode: "" }].filter(Boolean);
      return { infoButton: !0, pages: [{ name: "Control", svg: fa, space: '<div class="tfMoreSpace tfLightSpace">' + le + At + "</div>", rows: [], tabs: Bt.length > 1 ? Bt : [] }] };
    }
    if (e === "climate") {
      const f = o.target_temp_step || 0.5, y = Number(o.temperature), S = Number(o.target_temp_low), x = Number(o.target_temp_high), P = (R) => Et("climate", "set_temperature", t, R), L = (R, _, z, A, rt) => (_ == null ? void 0 : _.length) && so(R, Ea(R, _.map((Tt) => ({ label: jt(Tt), act: Et("climate", A, t, { [rt]: Tt }), pressed: (z === "state" ? a.state : o[z]) === Tt })))), B = Number.isFinite(S) && Number.isFinite(x) && so("Range", '<div class="tfMoreRange">' + ba("Low", Be(S) + " °C", P({ target_temp_low: S - f, target_temp_high: x }), P({ target_temp_low: S + f, target_temp_high: x })) + ba("High", Be(x) + " °C", P({ target_temp_low: S, target_temp_high: x - f }), P({ target_temp_low: S, target_temp_high: x + f })) + "</div>"), k = Number(o.humidity);
      return { pages: [{
        name: "Control",
        svg: fa,
        space: sl(Be(o.current_temperature), "°C", [["Target", Number.isFinite(y) ? Be(y) + " °C" : null], ["Humidity", o.current_humidity != null ? o.current_humidity + "%" : null], ["Action", o.hvac_action && jt(o.hvac_action)]]),
        rows: [
          Number.isFinite(y) && ba("Target temperature", Be(y) + " °C", P({ temperature: y - f }), P({ temperature: y + f })),
          B,
          L("Mode", o.hvac_modes, "state", "set_hvac_mode", "hvac_mode"),
          L("Fan", o.fan_modes, "fan_mode", "set_fan_mode", "fan_mode"),
          L("Swing", o.swing_modes, "swing_mode", "set_swing_mode", "swing_mode"),
          L("Preset", o.preset_modes, "preset_mode", "set_preset_mode", "preset_mode"),
          Number.isFinite(k) && o.min_humidity != null && so("Humidity", ba("Target humidity", k + "%", Et("climate", "set_humidity", t, { humidity: k - 1 }), Et("climate", "set_humidity", t, { humidity: k + 1 })))
        ]
      }] };
    }
    if (e === "fan") {
      const f = a.state === "on", y = ze("fan", t, f && Number(o.percentage) || 0), S = o.percentage != null;
      return { pages: [{ name: "Control", svg: fa, space: Xn(t, i), rows: S ? [
        il("fan", t, y, bt(t) + " speed", y + "%", "mdi:fan"),
        o.oscillating != null && so("Oscillate", Ea("Oscillate", [{ label: "Off", act: Et("fan", "oscillate", t, { oscillating: !1 }), pressed: !o.oscillating }, { label: "On", act: Et("fan", "oscillate", t, { oscillating: !0 }), pressed: !!o.oscillating }])),
        o.direction && so("Direction", Ea("Direction", [["forward", "Forward"], ["reverse", "Reverse"]].map(([x, P]) => ({ label: P, act: Et("fan", "set_direction", t, { direction: x }), pressed: o.direction === x })))),
        ((l = o.preset_modes) == null ? void 0 : l.length) && so("Preset", Ea("Preset", o.preset_modes.map((x) => ({ label: jt(x), act: Et("fan", "set_preset_mode", t, { preset_mode: x }), pressed: o.preset_mode === x }))))
      ] : [ad(t, "fan", f)] }] };
    }
    if (e === "humidifier") {
      const f = Number(o.humidity);
      return { pages: [{ name: "Control", svg: fa, space: sl(String(o.current_humidity), "%", [["Target", Number.isFinite(f) ? f + "%" : null], ["Action", o.action && jt(o.action)]]), rows: [
        Number.isFinite(f) && ba("Target humidity", f + "%", Et("humidifier", "set_humidity", t, { humidity: f - 1 }), Et("humidifier", "set_humidity", t, { humidity: f + 1 })),
        ((c = o.available_modes) == null ? void 0 : c.length) && so("Mode", Ea("Mode", o.available_modes.map((y) => ({ label: jt(y), act: Et("humidifier", "set_mode", t, { mode: y }), pressed: o.mode === y }))))
      ] }] };
    }
    if (e === "water_heater") {
      const f = Number(o.temperature), y = o.target_temp_step || 1;
      return { pages: [{ name: "Control", svg: fa, space: sl(Be(o.current_temperature).replace(/\.0$/, ""), "°C", [["Target", Number.isFinite(f) ? String(f).replace(/\.0$/, "") + " °C" : null], ["Mode", jt(o.operation_mode || a.state)]]), rows: [
        Number.isFinite(f) && ba("Target temperature", f + " °C", Et("water_heater", "set_temperature", t, { temperature: f - y }), Et("water_heater", "set_temperature", t, { temperature: f + y })),
        ((u = o.operation_list) == null ? void 0 : u.length) && so("Mode", Ea("Mode", o.operation_list.map((S) => ({ label: jt(S), act: Et("water_heater", "set_operation_mode", t, { operation_mode: S }), pressed: (o.operation_mode || a.state) === S })))),
        o.away_mode != null && so("Away", Ea("Away", [{ label: "Off", act: Et("water_heater", "set_away_mode", t, { away_mode: !1 }), pressed: o.away_mode !== "on" }, { label: "On", act: Et("water_heater", "set_away_mode", t, { away_mode: !0 }), pressed: o.away_mode === "on" }]))
      ] }] };
    }
    if (e === "alarm_control_panel") {
      const f = [...Ap, ["armed_vacation", "Vacation", "alarm_arm_vacation", 32]].filter(([, , , x]) => !x || fe(t, x)), y = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "clear", "0", "back"], S = '<div class="tfMoreSpace tfMoreKeypad">' + td() + '<div class="tfKeypad">' + y.map((x) => '<button type="button" data-key="' + x + '"' + (x === "back" ? ' aria-label="Delete"' : "") + ">" + (x === "clear" ? "Clear" : x === "back" ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22,3H7C6.31,3 5.77,3.35 5.41,3.88L0,12L5.41,20.11C5.77,20.64 6.31,21 7,21H22A2,2 0 0,0 24,19V5A2,2 0 0,0 22,3M22,19H7.07L2.4,12L7.06,5H22V19M10.41,17L14,13.41L17.59,17L19,15.59L15.41,12L19,8.41L17.59,7L14,10.59L10.41,7L9,8.41L12.59,12L9,15.59L10.41,17Z"/></svg>' : x) + "</button>").join("") + "</div></div>";
      return { pages: [{ name: "Control", svg: fa, space: S, rows: [ed(bt(t), f.map(([x, P, L]) => Li("alarm_control_panel", L, t, P, a.state === x)))] }] };
    }
    if (e === "cover") {
      if (o.current_position == null) return { pages: [{ name: "Control", svg: fa, space: Xn(t, i), rows: [Ea(bt(t), [{ label: "Open", act: Et("cover", "open_cover", t), pressed: a.state !== "closed" }, { label: "Close", act: Et("cover", "close_cover", t), pressed: a.state === "closed" }])] }] };
      const f = a.state === "opening" || a.state === "closing", y = Uo(t), S = gr(t);
      return { pages: [{ name: "Control", svg: fa, space: '<div class="tfMoreSpace tfMoreArt"><div data-cover-art="' + q(t) + '"></div></div>', rows: [
        fe(t, Wl) && Ne(t, y),
        S != null && so("Tilt", il("tiltp", t, ze("tiltp", t, S), bt(t) + " tilt", Math.round(ze("tiltp", t, S)) + "%")),
        Ea(bt(t), [fe(t, gp) && { label: "Open", act: Et("cover", "open_cover", t), disabled: y >= 100 && !f }, fe(t, wp) && { label: "Stop", act: Et("cover", "stop_cover", t) }, fe(t, bp) && { label: "Close", act: Et("cover", "close_cover", t), disabled: y <= 0 && !f }])
      ] }] };
    }
    if (e === "lock")
      return { pages: [{ name: "Control", svg: fa, space: Xn(t, i), rows: [
        td(),
        ed(bt(t), [Li("lock", "lock", t, "Lock", a.state === "locked"), Li("lock", "unlock", t, "Unlock", a.state === "unlocked"), fe(t, Cp) && Li("lock", "open", t, "Open", a.state === "open")].filter(Boolean))
      ] }] };
    if (e === "valve") {
      const f = a.state === "open";
      if (o.current_position == null) return { pages: [{ name: "Control", svg: fa, space: Xn(t, i), rows: [Ea(bt(t), [{ label: "Open", act: Et("valve", "open_valve", t), pressed: f }, { label: "Close", act: Et("valve", "close_valve", t), pressed: !f }])] }] };
      const y = ze("valve", t, Number(o.current_position) || 0);
      return { pages: [{ name: "Control", svg: fa, space: Xn(t, i), rows: [
        il("valve", t, y, bt(t) + " position", Math.round(y) + "%", "mdi:valve"),
        Ea(bt(t), [{ label: "Open", act: Et("valve", "open_valve", t) }, fe(t, 8) && { label: "Stop", act: Et("valve", "stop_valve", t) }, { label: "Close", act: Et("valve", "close_valve", t) }])
      ] }] };
    }
    return { pages: [{ name: "Control", svg: fa, space: Xn(t, i), rows: [ad(t, e, a.state === "on")] }] };
  }
  function Pf(t) {
    var S;
    const e = M[t], a = Gt(t), o = t.split(".")[0], i = (((S = Kn[o]) == null ? void 0 : S.call(Kn, a)) || []).filter(([, x]) => x != null && x !== ""), l = (x) => {
      const P = i.findIndex(([L]) => L === x);
      return P < 0 ? null : i.splice(P, 1)[0][1];
    }, c = (x) => {
      const P = String(x).match(/^(-?[\d.,]+)\s*(.*)$/);
      return P ? [P[1], P[2]] : [String(x), ""];
    }, u = () => [jt(String(e.state).replace(/_/g, " ")), ""];
    let f;
    o === "light" ? (l("Brightness"), f = e.state === "on" && $e(t) ? [String($a(e)), "%"] : u()) : o === "climate" ? f = c(l("Current temperature") || Be(a.current_temperature) + " °C") : o === "cover" ? (l("Position"), f = a.current_position != null ? [String(ma(t)), "%"] : u()) : o === "humidifier" ? f = c(l("Current humidity") || e.state) : o === "vacuum" ? f = c(l("Battery") || e.state) : o === "plant" ? f = c(l("Moisture") || e.state) : ["media_player", "lock", "alarm_control_panel", "valve"].includes(o) ? f = u() : f = c(e.state + (a.unit_of_measurement ? " " + a.unit_of_measurement : ""));
    const y = i.length ? i.slice(0, 4) : [["State", Re(t)]];
    return { big: f, lines: y };
  }
  function Hf(t) {
    var y, S, x, P, L, B, k;
    const e = M[t], a = d(), o = (y = a == null ? void 0 : a.entities) == null ? void 0 : y[t], i = o != null && o.device_id ? (S = a == null ? void 0 : a.devices) == null ? void 0 : S[o.device_id] : null, l = '<div class="tfMoreGraph"><div class="tfMoreGroupName">Last 24 hours</div><svg class="tfGraph tfDay" data-day="' + q(t) + '" role="img" aria-label="' + q(bt(t)) + ', last 24 hours"></svg></div>', c = (x = zt.areaOf) == null ? void 0 : x.call(zt, t), u = c && (((P = zt.rooms.find((R) => R.id === c)) == null ? void 0 : P.name) || ((B = (L = a == null ? void 0 : a.areas) == null ? void 0 : L[c]) == null ? void 0 : B.name)) || "", f = [
      ...((k = Kn[t.split(".")[0]]) == null ? void 0 : k.call(Kn, Gt(t))) || [],
      ["Changed", e.last_changed && Go(Date.parse(e.last_changed))],
      ["Area", u],
      ["Device", i && (i.name_by_user || i.name)],
      ["Integration", (o == null ? void 0 : o.platform) && jt(o.platform.replace(/_/g, " "))],
      ["Entity", t]
    ].filter(([, R]) => R != null && R !== "");
    return l + '<div class="tfMoreRows">' + f.map(([R, _]) => '<div class="tfMoreRow"><span>' + q(R) + "</span><span>" + q(_) + "</span></div>").join("") + "</div>" + xf(t) + (i ? '<button class="tfDetailsBtn tfMoreLink" type="button" data-path="/config/devices/device/' + q(o.device_id) + '"><span>Device page</span>' + zl + "</button>" : "");
  }
  const Nf = () => "";
  let ll = "";
  function cl(t) {
    var e;
    C && (C.details = t, $n(), (e = kt.querySelector(t ? "[data-details-close]" : "[data-details]")) == null || e.focus({ preventScroll: !0 }));
  }
  const Di = (t) => {
    const e = M[t], a = ma(t), o = Uo(t);
    return { kind: Fl(e), name: bt(t), text: Re(t), pos: a, target: Math.abs(o - a) > 0.5 ? o : null, moving: e.state === "opening" || e.state === "closing", tilt: gr(t) ?? 100, canSet: fe(t, Wl) };
  };
  function dl(t) {
    t.querySelectorAll("[data-cover-art]").forEach((e) => {
      const a = e.dataset.coverArt, o = e.dataset.artKey || "more:" + a;
      let i = qt.get(o);
      i || (i = k0({ onMove: (l) => Hr(a, l), onSet: (l) => {
        Hr(a, l), Nr("pos", a);
      } }), i.coverId = a, qt.set(o, i)), e.replaceWith(i.el), i.update(Di(a));
    });
  }
  const od = (t) => [...qt.values()].filter((e) => e.coverId === t), pl = () => qt.forEach((t) => {
    M[t.coverId] && t.update(Di(t.coverId));
  }), nd = () => {
    qt.forEach((t, e) => {
      t.el.isConnected || (t.destroy(), qt.delete(e));
    }), pl();
  };
  function $n() {
    var l, c;
    if (!C || !(Sf(C.id) || M[C.id])) {
      kt.hidden = !0;
      return;
    }
    if ([...st.keys()].some((u) => u.endsWith("|" + C.id))) {
      pl();
      return;
    }
    const t = _f(C.id), e = kt.querySelector(".tfMore");
    if (!t) {
      Ri();
      return;
    }
    const a = Jc(kt), o = Nf(C.id), i = C.frame ? C.frame.wide : C.id.startsWith("summary:") || C.id.startsWith("group:");
    if (kt.hidden || !e || t.length !== io.length || e.classList.contains("wide") !== i) {
      const u = hl ? C.scroll || 0 : !kt.hidden && e ? e.scrollTop : 0;
      if (kt.innerHTML = '<div class="tfMorePair' + (kt.hidden ? "" : " still") + '" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (i ? " wide" : "") + '"' + (C.frame ? ' style="height:' + C.frame.h + 'px"' : "") + ' tabindex="-1">' + t.join("") + "</section></div>", ll = o, kt.classList.toggle("wide", i), kt.hidden = !1, nl(), dl(kt), wo(kt), Qa(kt), kt.querySelectorAll("[data-day]").forEach((f) => dd(f.dataset.day, f, C.at)), sd(kt), u && (kt.querySelector(".tfMore").scrollTop = u), rd(), el(kt, a), !kt.contains(n.activeElement)) {
        const f = kt.querySelector("[data-more-close]");
        (l = f != null && f.offsetParent ? f : kt.querySelector(".tfMore")) == null || l.focus({ preventScroll: !0 });
      }
    } else {
      if (t.forEach((u, f) => {
        var P, L;
        if (u === io[f] || u.includes("data-cover-art") || e.children[f].contains((L = (P = n.activeElement) == null ? void 0 : P.matches) != null && L.call(P, "input,select") ? n.activeElement : null) || [...st.keys()].some((B) => e.children[f].querySelector('[data-drag="' + CSS.escape(B) + '"]'))) return;
        const y = document.createElement("div");
        y.innerHTML = u;
        const S = [...e.children[f].querySelectorAll(".tfMoreCtl,.tfMorePage")].map((B) => B.scrollTop), x = al(e.children[f], y.firstElementChild);
        x.querySelectorAll(".tfMoreCtl,.tfMorePage").forEach((B, k) => {
          S[k] && (B.scrollTop = S[k]);
        }), Qa(x), sd(x), wo(x);
      }), o !== ll) {
        const u = kt.querySelector(".tfMoreSideBody");
        u && (u.innerHTML = o), ll = o;
      }
      e.querySelectorAll("[data-day]").forEach((u) => {
        u.innerHTML || dd(u.dataset.day, u, C.at);
      }), rd(), kt.contains(n.activeElement) || el(kt, a);
    }
    (c = kt.querySelector(".tfMorePair")) == null || c.classList.toggle("details", !!(C.details && o)), io = t, pl();
  }
  function rd() {
    const t = kt.querySelector("[data-more-pages]");
    !t || !C || (t.scrollTo({ left: (C.page || 0) * t.clientWidth, behavior: "instant" }), fl(), ul(t));
  }
  function ul(t) {
    const e = t.children[(C == null ? void 0 : C.page) || 0];
    e && (t.style.height = e.scrollHeight + "px");
  }
  function fl() {
    var e;
    const t = (C == null ? void 0 : C.page) || 0;
    kt.querySelectorAll("[data-more-page]").forEach((a) => {
      const o = Number(a.dataset.morePage) === t && (a.dataset.moreMode == null || a.dataset.moreMode === (C.mode || ""));
      if (a.hasAttribute("data-more-toggle")) {
        a.setAttribute("aria-pressed", String(o));
        return;
      }
      a.setAttribute("aria-selected", String(o)), a.tabIndex = o ? 0 : -1;
    }), (e = kt.querySelector("[data-more-pages]")) == null || e.classList.toggle("tfMoreHold", !!C.mode && t === 0);
  }
  function Of(t, e) {
    var o, i;
    const a = kt.querySelector("[data-more-pages]");
    !a || !C || (C.page = Math.max(0, Math.min((C.pages || 2) - 1, t)), a.scrollTo({ left: C.page * a.clientWidth, behavior: (o = window.matchMedia) != null && o.call(window, "(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" }), fl(), ul(a), e && ((i = kt.querySelector('.tfMoreDots [aria-selected="true"]')) == null || i.focus({ preventScroll: !0 })));
  }
  function Ei(t, e, a) {
    C && (e != null && e !== (C.mode || "") && (C.mode = e, kt.querySelectorAll(".tfMorePage").forEach((o) => {
      o.dataset.mode = e;
    })), Of(t, a));
  }
  let Jn = null;
  kt.addEventListener("touchstart", (t) => {
    var a, o;
    const e = t.touches[0];
    Jn = (o = (a = t.target).closest) != null && o.call(a, "[data-more-pages]") && t.touches.length === 1 ? { x: e.clientX, y: e.clientY } : null;
  }, { passive: !0 }), kt.addEventListener("touchend", (t) => {
    if (!Jn || !C || (C.page || 0) !== 0 || !kt.querySelector("[data-more-mode]")) {
      Jn = null;
      return;
    }
    const e = t.changedTouches[0], a = e.clientX - Jn.x, o = e.clientY - Jn.y;
    if (Jn = null, Math.abs(a) < 40 || Math.abs(a) < Math.abs(o) * 1.5) return;
    const i = [...kt.querySelectorAll(".tfMoreDots [data-more-mode]")].map((c) => c.dataset.moreMode), l = i.indexOf(C.mode || "");
    a > 0 && l > 0 ? Ei(0, i[l - 1]) : a < 0 && C.mode && l < i.length - 1 && Ei(0, i[l + 1]);
  }, { passive: !0 });
  let id = 0;
  kt.addEventListener("scroll", (t) => {
    var a;
    const e = t.target;
    !((a = e.matches) != null && a.call(e, "[data-more-pages]")) || !C || (clearTimeout(id), id = setTimeout(() => {
      if (!C) return;
      const o = Math.round(e.scrollLeft / Math.max(1, e.clientWidth));
      o !== (C.page || 0) && (C.page = o, fl(), ul(e));
    }, 80));
  }, !0), kt.addEventListener("input", (t) => {
    var e, a;
    (a = (e = t.target).matches) != null && a.call(e, "[data-code]") && C && (C.code = t.target.value);
  }), kt.addEventListener("click", (t) => {
    const e = t.target.closest("[data-key]"), a = t.target.closest("[data-coded]");
    if (!C || !(e || a)) return;
    const o = kt.querySelector("[data-code]");
    if (e) {
      const f = e.dataset.key, y = C.code || "";
      C.code = f === "clear" ? "" : f === "back" ? y.slice(0, -1) : (y + f).slice(0, 12), o && (o.value = C.code);
      return;
    }
    const [i, l, c] = a.dataset.coded.split("|"), u = C.code;
    C.code = "", o && (o.value = ""), Pr(i, l, c, u ? { code: u } : null).catch(() => {
    });
  }), setInterval(() => {
    C && $n();
  }, 15 * 1e3);
  function Bi(t, e) {
    var i, l;
    const a = !!(C && e && kt.contains(e)), o = a && kt.querySelector(".tfMore");
    if (a && (C.scroll = o.scrollTop), a && !C.under) {
      const c = kt.querySelector(".tfMorePair"), u = { more: C, parts: io, opener: e };
      c.classList.add("still"), c.style.transform = "", c.inert = !0, Ga.innerHTML = "", Ga.appendChild(c), Ga.classList.toggle("wide", kt.classList.contains("wide")), Ga.hidden = !1, kt.hidden = !0, kt.innerHTML = "", C = { id: t, opener: e, back: null, frame: null, under: u, at: Number((i = e == null ? void 0 : e.dataset) == null ? void 0 : i.at) || null }, ml();
      return;
    }
    C = { id: t, opener: a ? C.opener : e, back: a ? C : null, frame: a ? C.frame || { wide: o.classList.contains("wide"), h: o.offsetHeight } : null, under: a ? C.under : null, at: Number((l = e == null ? void 0 : e.dataset) == null ? void 0 : l.at) || null }, ml();
  }
  let hl = !1;
  function ml() {
    io = [], hl = !kt.hidden, qt.forEach((t, e) => {
      e !== C.id && kt.contains(t.el) && (t.destroy(), qt.delete(e));
    }), $n(), hl = !1;
  }
  function Ri() {
    if (!C) return;
    const t = C;
    lm(kt, () => {
      C === t && gl();
    });
  }
  function gl() {
    var o, i, l, c, u, f, y, S;
    const t = C == null ? void 0 : C.opener, e = C == null ? void 0 : C.under;
    C = null, qt.forEach((x, P) => {
      kt.contains(x.el) && (x.destroy(), qt.delete(P));
    }), Ye.forEach((x, P) => {
      /^more2?:/.test(P) && Ye.delete(P);
    }), kt.hidden = !0, kt.innerHTML = "";
    const a = { preventScroll: !0 };
    if (e) {
      const x = Ga.firstElementChild;
      C = e.more, io = e.parts, x && (x.inert = !1, kt.appendChild(x)), kt.classList.toggle("wide", Ga.classList.contains("wide")), Ga.hidden = !0, Ga.innerHTML = "", kt.hidden = !1;
      const P = kt.querySelector(".tfMore");
      P && (P.scrollTop = C.scroll || 0), $n(), (i = (o = e.opener) != null && o.isConnected ? e.opener : kt.querySelector("[data-more-close]")) == null || i.focus(a);
      return;
    }
    t != null && t.isConnected ? t.focus(a) : (l = t == null ? void 0 : t.dataset) != null && l.more ? (c = H.querySelector('[data-more="' + CSS.escape(t.dataset.more) + '"]')) == null || c.focus(a) : (u = t == null ? void 0 : t.dataset) != null && u.summary ? (f = H.querySelector('[data-summary="' + CSS.escape(t.dataset.summary) + '"]')) == null || f.focus(a) : (y = t == null ? void 0 : t.hasAttribute) != null && y.call(t, "data-favs-edit") && ((S = H.querySelector("[data-favs-edit]")) == null || S.focus(a));
  }
  const If = { moisture: "moisture", light: "light", brightness: "light", temperature: "temperature", fertility: "fertility", conductivity: "fertility" };
  function Ff(t) {
    const e = String(Gt(t).problem || ""), a = "sensor." + t.split(".")[1] + "_";
    return e === "none" ? [] : e.split(",").map((o) => o.trim().split(" ")).map(([o, i]) => {
      const l = If[o], c = a + l;
      if (!l || !M[c] || !Dn[l]) return "";
      const u = Gt(c).unit_of_measurement || "", [f, y] = Dn[l], S = i === "low";
      return '<div class="tfMoreGroup tfPlantProblem"><div class="tfMoreGroupName">' + q(bt(c)) + '</div><svg class="tfGraph tfPlantGraph" data-plant-graph="' + q(c) + '" data-guide="' + (S ? f : y) + '" data-guide-word="' + q("Wants " + (S ? "" : "up to ") + (S ? f : y).toLocaleString() + (u === "%" ? "%" : u ? " " + u : "") + (S ? " or more" : "")) + '" role="img" aria-label="' + q(bt(c)) + ', last 24 hours"></svg></div>';
    }).filter(Boolean);
  }
  const sd = (t) => t.querySelectorAll("[data-plant-graph]").forEach((e) => ud(e.dataset.plantGraph, e, { guide: Number(e.dataset.guide), guideWord: e.dataset.guideWord }).then(() => ic(e)));
  function bl(t, e, a, o = {}) {
    const i = e.map((R) => R[1]).concat(o.guide != null ? [o.guide] : []), l = o.zero ? 0 : Math.min(...i), c = Math.max(...i), u = Math.max(120, t.clientWidth || 260), f = Math.max(60, t.clientHeight || 130), y = 8, S = f - 20, x = Date.now() - 24 * 3600 * 1e3, P = 24 * 3600 * 1e3, L = (R) => Math.max(0, Math.min(u, (R - x) / P * u)), B = (R) => c === l ? (y + S) / 2 : S - (R - l) / (c - l) * (S - y);
    let k = "M" + L(e[0][0]).toFixed(1) + " " + B(e[0][1]).toFixed(1);
    if (e.length > 2) k = Yp(e.map((R) => [L(R[0]), B(R[1])]));
    else for (let R = 1; R < e.length; R++) k += o.smooth ? "L" + L(e[R][0]).toFixed(1) + " " + B(e[R][1]).toFixed(1) : "H" + L(e[R][0]).toFixed(1) + "V" + B(e[R][1]).toFixed(1);
    t.setAttribute("viewBox", "0 0 " + u + " " + f), t.setAttribute("aria-label", a), t.innerHTML = Zp(u, y, S) + '<path d="' + k + "V" + S + "H" + L(e[0][0]).toFixed(1) + 'Z" fill="' + (o.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + k + '" fill="none" stroke="' + (o.colour || "var(--primary)") + '" stroke-width="' + Te.graphs.weight + '" stroke-linejoin="round" stroke-linecap="round"/><text x="0" y="' + (f - 4) + '">24 h ago</text><text x="' + u + '" y="' + (f - 4) + '" text-anchor="end">Now</text>' + (o.guide != null ? '<line class="tfGuide" x1="0" x2="' + u + '" y1="' + B(o.guide).toFixed(1) + '" y2="' + B(o.guide).toFixed(1) + '"/><text class="tfGuideWord" x="' + u + '" y="' + (B(o.guide) < 20 ? B(o.guide) + 14 : B(o.guide) - 5).toFixed(1) + '" text-anchor="end">' + q(o.guideWord || "") + "</text>" : "");
  }
  const ld = { lock: ["unlocked", "open", "opening"], cover: ["open", "opening", "closing"], valve: ["open", "opening", "closing"], vacuum: ["cleaning", "returning"] }, qf = (t, e) => {
    const a = t.split(".")[0];
    return ld[a] ? ld[a].includes(e) : a === "alarm_control_panel" || a === "climate" || a === "media_player" ? !["off", "standby", "disarmed", "unavailable", "unknown"].includes(e) : e === "on";
  }, Wf = (t) => {
    const e = t.split(".")[0], a = Gt(t).device_class;
    return e === "binary_sensor" ? { moisture: "Wet", smoke: "Smoke", gas: "Gas", carbon_monoxide: "Carbon monoxide", safety: "Unsafe" }[a] || (Xi.includes(a) ? "Open" : "On") : { lock: "Unlocked", cover: "Open", valve: "Open", vacuum: "Cleaning", alarm_control_panel: "Armed" }[e] || "On";
  }, cd = /* @__PURE__ */ new Map();
  let Vf = 0;
  async function jf(t) {
    var i;
    let e = cd.get(t);
    if (!e || Date.now() - e.at > 60 * 1e3) {
      let l = [];
      if (Ya(t) && Number.isFinite(Number((i = M[t]) == null ? void 0 : i.state))) l = pd(t).map(([c, u]) => [c, String(u)]);
      else try {
        const c = await D({ type: "history/history_during_period", start_time: new Date(Date.now() - 864e5).toISOString(), entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        l = ((c == null ? void 0 : c[t]) || []).map((u) => [u.lu != null ? u.lu * 1e3 : Date.parse(u.last_updated || u.last_changed), String(u.s ?? u.state)]).filter(([u]) => Number.isFinite(u));
      } catch {
      }
      l.length || (l = (va || []).filter((c) => c.entity_id === t).map((c) => [c.when * 1e3, String(c.state)])), e = { at: Date.now(), pts: l }, cd.set(t, e);
    }
    const a = M[t], o = e.pts.slice().sort((l, c) => l[0] - c[0]);
    return a && (!o.length || o[o.length - 1][1] !== a.state) && o.push([Date.parse(a.last_changed) || Date.now(), a.state]), o;
  }
  async function dd(t, e, a) {
    const o = await jf(t);
    if (!e.isConnected) return;
    const i = o.map(([A, rt]) => [A, Number(rt)]);
    if (o.length > 1 && i.every(([, A]) => Number.isFinite(A))) {
      bl(e, i, bt(t) + ", last 24 hours");
      return;
    }
    const l = Date.now(), c = l - 864e5, u = Math.max(200, e.clientWidth || 360), f = 62, y = (A) => Math.max(0, Math.min(u, (A - c) / 864e5 * u)), S = [];
    let x = null;
    o.forEach(([A, rt]) => {
      const Tt = qf(t, rt);
      Tt && x == null ? x = Math.max(A, c) : !Tt && x != null && (S.push([x, Math.max(A, c)]), x = null);
    }), x != null && S.push([x, l]);
    const P = Fn(t) ? "var(--danger)" : t.startsWith("light.") ? "#ffaa00" : "var(--primary)", L = Wf(t), B = "tfDayClip" + ++Vf, k = S.map(([A, rt]) => L + (rt >= l - 1e3 && A <= c + 1e3 ? " all day" : rt >= l - 1e3 ? " since " + Ia(A) : A <= c + 1e3 ? " until " + Ia(rt) : " " + Ia(A) + "–" + Ia(rt)));
    let R = "", _ = -1 / 0;
    S.forEach(([A], rt) => {
      const Tt = k[rt].length * 5.4, Rt = Math.min(y(A), u - Tt);
      Rt < _ + 8 || (R += '<text x="' + Rt.toFixed(1) + '" y="10">' + q(k[rt]) + "</text>", _ = Rt + Tt);
    });
    let z = '<text x="' + u + '" y="' + (f - 2) + '" text-anchor="end">Now</text>';
    [0, 6, 12, 18].forEach((A) => {
      let rt = new Date(l).setHours(A, 0, 0, 0);
      rt > l && (rt -= 864e5), y(rt) > 8 && y(rt) < u - 34 && (z += '<text x="' + y(rt).toFixed(1) + '" y="' + (f - 2) + '" text-anchor="middle">' + String(A).padStart(2, "0") + "</text>");
    }), e.setAttribute("viewBox", "0 0 " + u + " " + f), e.setAttribute("aria-label", bt(t) + ", last 24 hours: " + (k.length ? k.join(", ") : "no changes")), e.innerHTML = '<clipPath id="' + B + '"><rect x="0" y="18" width="' + u + '" height="26" rx="8"/></clipPath>' + R + '<rect x="0" y="18" width="' + u + '" height="26" rx="8" fill="var(--text)" fill-opacity=".1"/><g clip-path="url(#' + B + ')">' + S.map(([A, rt]) => '<rect x="' + y(A).toFixed(1) + '" y="18" width="' + Math.max(2, y(rt) - y(A)).toFixed(1) + '" height="26" fill="' + P + '"/>').join("") + "</g>" + (a && a >= c ? '<line x1="' + y(a).toFixed(1) + '" x2="' + y(a).toFixed(1) + '" y1="13" y2="49" stroke="var(--text)" stroke-width="2" stroke-linecap="round"/>' : "") + z;
  }
  function pd(t) {
    var o;
    const e = Number((o = M[t]) == null ? void 0 : o.state), a = Date.now();
    if (Gt(t).state_class === "total_increasing") {
      const i = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), l = Math.max(1, a - i);
      return [...Array(49)].map((c, u) => i + l * u / 48).map((c) => [c, Math.round(e * Math.pow((c - i) / l, 1.3) * 100) / 100]);
    }
    if (Ya(t) && t.endsWith("_moisture")) return [...Array(48)].map((i, l) => [a - (48 - l) * 30 * 60 * 1e3, Math.round((e + 22 * Math.pow(1 - l / 48, 1.2)) * 10) / 10]);
    if (Ya(t) && t.endsWith("_light")) {
      const i = (c) => {
        const u = new Date(c).getHours() + new Date(c).getMinutes() / 60;
        return Math.max(0, Math.sin((u - 6) / 14 * Math.PI));
      }, l = (c) => 0.8 + 0.2 * i(c);
      return [...Array(48)].map((c, u) => a - (48 - u) * 30 * 60 * 1e3).map((c) => [c, Math.round(e * l(c) / l(a))]);
    }
    return [...Array(48)].map((i, l) => [a - (48 - l) * 30 * 60 * 1e3, Math.round(e * (0.96 + 0.04 * Math.sin(l / 6)) * 10) / 10]);
  }
  async function ud(t, e, a = {}) {
    var B, k;
    let o = ut.get(t);
    if (t.endsWith("_solar_power")) o = { at: Date.now(), points: _d() };
    else if (Ya(t)) o = { at: Date.now(), points: pd(t) };
    else if (!o || Date.now() - o.at > 5 * 60 * 1e3) {
      try {
        const R = new Date(Date.now() - 864e5).toISOString(), _ = await D({ type: "history/history_during_period", start_time: R, entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), z = ((_ == null ? void 0 : _[t]) || []).map((A) => [A.lu != null ? A.lu * 1e3 : Date.parse(A.last_updated || A.last_changed), Number(A.s ?? A.state)]).filter(([A, rt]) => Number.isFinite(A) && Number.isFinite(rt));
        o = { at: Date.now(), points: z };
      } catch {
        o = { at: Date.now(), points: [] };
      }
      ut.set(t, o);
    }
    const i = e || H.querySelector('[data-graph="' + CSS.escape(t) + '"]');
    if (!i) return;
    const l = M[t], c = ((B = l == null ? void 0 : l.attributes) == null ? void 0 : B.unit_of_measurement) || "", u = o.points.slice(), f = Number(l == null ? void 0 : l.state);
    if (Number.isFinite(f) && !t.endsWith("_solar_power") && u.push([Date.now(), f]), u.length < 2) {
      i.setAttribute("aria-label", bt(t) + ": no history for the last 24 hours"), i.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const y = u.map((R) => R[1]), S = Math.min(...y), x = Math.max(...y), P = (R) => R.toLocaleString(void 0, { maximumFractionDigits: Math.abs(R) >= 100 ? 0 : 1 }), L = ((k = l == null ? void 0 : l.attributes) == null ? void 0 : k.state_class) === "total_increasing";
    bl(i, u, bt(t) + ", last 24 hours: " + (L ? "+" + P(y[y.length - 1] - y[0]) : S === x ? P(S) : P(S) + " to " + P(x)) + (c ? " " + c : ""), { smooth: t.endsWith("_solar_power"), zero: t.endsWith("_solar_power"), ...a });
  }
  function fd() {
    const t = H == null ? void 0 : H.querySelector("[data-solar]");
    if (!t) return;
    const e = _d();
    bl(t, e, "Solar, last 24 hours: up to " + Be(Math.max(...e.map((a) => a[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function zf(t, e) {
    const a = e.entity_id, o = Mt.get(a) || {}, i = { open_cover: 100, close_cover: 0, set_cover_position: e.position, toggle: ma(a) > 0 ? 0 : 100 }[t], l = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: e.tilt_position }[t];
    i != null && (o.pos = i), l != null && (o.tilt = l), t === "stop_cover" && (delete o.pos, delete o.tilt), t === "stop_cover_tilt" && delete o.tilt, o.at = Date.now(), Mt.set(a, o);
  }
  function hd(t, e, a) {
    var i;
    const o = a == null ? void 0 : a.entity_id;
    return t !== "light" || typeof o != "string" || !ra[o] || !$e(o) || a.brightness_pct != null || a.brightness != null ? [e, a] : e !== "turn_on" && !(e === "toggle" && ((i = M[o]) == null ? void 0 : i.state) !== "on") ? [e, a] : ["turn_on", { ...a, brightness_pct: ra[o] }];
  }
  function Pr(t, e, a, o) {
    let i = { entity_id: a, ...o || {} };
    return [e, i] = hd(t, e, i), t === "cover" && zf(e, i), Ka[a] = (Ka[a] || 0) + 1, co.set(Mp, JSON.stringify(Ka)), Zr.call(t, e, i) ? Promise.resolve() : Promise.resolve(I(t, e, i));
  }
  function wl(t) {
    const [e, a, o, i] = t.split("|");
    Pr(e, a, o, i ? JSON.parse(i) : null).catch(() => {
    });
  }
  function Hr(t, e) {
    st.set("pos|" + t, e), ka.delete(t), io = io.map(() => ""), [H, kt].forEach((o) => o.querySelectorAll('[data-blocks="' + CSS.escape(t) + '"]').forEach((i) => mn(i, e)));
    const a = H.querySelector('.tfAction[data-k="' + CSS.escape(t) + '"] .tfName .activityRowMeta');
    if (a && (a.textContent = Math.round(e) + "%"), (C == null ? void 0 : C.id) === t) {
      const o = kt.querySelector(".tfMoreState"), i = kt.querySelector(".tfMoreSub");
      o && (o.textContent = Math.round(e) + "%", o.classList.add("live")), i && (i.textContent = "Currently " + ma(t) + "%");
    }
    od(t).forEach((o) => o.update(Di(t)));
  }
  const Gf = (t, e) => {
    const a = t.shiftKey ? 10 : 1, o = { ArrowUp: e + a, ArrowRight: e + a, ArrowDown: e - a, ArrowLeft: e - a, PageUp: e + 25, PageDown: e - 25, Home: 0, End: 100 }[t.key];
    return o == null ? null : Math.max(0, Math.min(100, Math.round(o)));
  };
  function Uf(t, e) {
    var k;
    const a = t.dataset.blocks;
    (k = t.setPointerCapture) == null || k.call(t, e.pointerId);
    const o = (R) => {
      const _ = t.getBoundingClientRect();
      return Math.max(0, Math.min(100, (R.clientX - _.left) / _.width * 100));
    }, i = o(e), l = e.clientX;
    let c = !1, u = Uo(a), f = i, y = 0;
    const S = () => {
      u = Math.abs(f - u) < 0.2 ? f : u + (f - u) * 0.14, Hr(a, u), y = requestAnimationFrame(S);
    }, x = () => {
      c || (c = !0, t.classList.add("fine"), y = requestAnimationFrame(S));
    }, P = setTimeout(x, 350), L = (R) => {
      f = o(R), Math.abs(R.clientX - l) > 6 && (clearTimeout(P), x());
    }, B = () => {
      clearTimeout(P), cancelAnimationFrame(y), t.removeEventListener("pointermove", L), t.removeEventListener("pointerup", B), t.removeEventListener("pointercancel", B), t.classList.remove("fine"), Hr(a, c ? Math.round(u) : (Math.min(3, Math.floor(i / 25)) + 1) * 25), Nr("pos", a);
    };
    t.addEventListener("pointermove", L), t.addEventListener("pointerup", B), t.addEventListener("pointercancel", B);
  }
  function md(t) {
    var e;
    j = t.dataset.area, H.querySelectorAll(".tfAreaPanel").forEach((a) => {
      var i;
      const o = a === t;
      a.classList.toggle("active", o), a.setAttribute("aria-expanded", String(o)), (i = a.querySelector(".panelExpanded")) == null || i.toggleAttribute("inert", !o);
    }), ka.set("areas", s(((e = H.querySelector('[data-k="areas"]')) == null ? void 0 : e.style.order) || 1)), setTimeout(() => Ls(!0), 340);
  }
  const Pi = {
    bright: { value: (t, e) => Math.round(e * 100), text: (t, e) => e ? e + "%" : "Off", send: (t, e) => e > 0 ? ["light", "turn_on", { brightness_pct: e }] : ["light", "turn_off", {}] },
    ct: { value: (t, e) => {
      const [a, o] = zo(t);
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
      const [a, o] = zo(t);
      return Math.round(o - e * (o - a));
    }, text: (t, e) => e.toLocaleString() + "k", send: (t, e) => ["light", "turn_on", { color_temp_kelvin: e }] },
    fan: { value: (t, e) => {
      const a = Gt(t).percentage_step || 1;
      return Math.round(e * 100 / a) * a;
    }, text: (t, e) => Math.round(e) + "%", send: (t, e) => ["fan", "set_percentage", { percentage: Math.round(e) }] },
    valve: { value: (t, e) => Math.round(e * 100), text: (t, e) => e + "%", send: (t, e) => ["valve", "set_valve_position", { position: e }] },
    tiltp: { value: (t, e) => Math.round(e * 100), text: (t, e) => e + "%", send: (t, e) => ["cover", "set_cover_tilt_position", { tilt_position: e }] },
    // the light popup's vertical colour (17 Nov): red at the top, through the spectrum, to red at the bottom
    huev: { value: (t, e) => Math.round((1 - e) * 360), text: () => "Colour", send: (t, e) => {
      var a;
      return ["light", "turn_on", { hs_color: [e, Math.max(60, ((a = Gt(t).hs_color) == null ? void 0 : a[1]) || 100)] }];
    } }
  };
  function Hi(t, e, a, o) {
    var y;
    const i = Pi[e].value(a, o);
    st.set(e + "|" + a, i);
    const l = Math.round(o * 100) + "%", c = t.querySelector("i");
    if (e === "tilt") {
      c.style.width = "calc((100% - 8px) * " + o + ")";
      const [S, x] = t.querySelectorAll("span");
      S.classList.toggle("lit", o > 0.08), x.classList.toggle("lit", o > 0.92), ka.delete(a), io = io.map(() => ""), od(a).forEach((P) => P.update(Di(a)));
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
    u && (u.textContent = Pi[e].text(a, i));
    const f = t.closest(".tfMore") ? t.closest(".tfMore").querySelector(".tfMoreState") : (y = t.closest(".tfAction")) == null ? void 0 : y.querySelector(".tfName .activityRowMeta");
    f && (f.textContent = Pi[e].text(a, i));
  }
  function Nr(t, e) {
    const a = st.get(t + "|" + e), [o, i, l] = Pi[t].send(e, a), c = () => setTimeout(() => {
      st.delete(t + "|" + e), Pe();
    }, 1500);
    Pr(o, i, e, l).then(c, c);
  }
  function gd(t) {
    t.addEventListener("click", (e) => {
      var o;
      const a = e.target.closest("[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-fav-hide],[data-energy-pick],[data-more-page],[data-path],.tfAreaPanel");
      if (Qe && !e.target.closest(".tfBoardMenu,[data-board-more]") && no(), !(!a || !t.contains(a) || a.disabled))
        if (a.dataset.boardMore)
          (Qe == null ? void 0 : Qe.key) === a.dataset.boardMore ? no(!0) : Yu(a.dataset.boardMore, a);
        else if (a.dataset.boardAct) Zu(Qe.key, a.dataset.boardAct);
        else if (a.dataset.boardShow) Ns(a.dataset.boardShow);
        else if (a.dataset.favHide) Oc(a.dataset.favHide, !1);
        else if (a.dataset.energyPick) oc(a.dataset.energyPick);
        else if (a.dataset.act) wl(a.dataset.act);
        else if (a.hasAttribute("data-details")) cl(!(C != null && C.details));
        else if (a.hasAttribute("data-details-close")) cl(!1);
        else if (a.dataset.summary) kr(a.dataset.summary, a);
        else if (a.dataset.star) la(a.dataset.star);
        else if (a.hasAttribute("data-more-back")) {
          const i = C.id;
          C = C.back, ml(), (o = kt.querySelector('.tfMore [data-more="' + CSS.escape(i) + '"]')) == null || o.focus({ preventScroll: !0 });
        } else a.hasAttribute("data-favs-edit") ? Bi("favourites", a) : a.dataset.acts ? JSON.parse(a.dataset.acts).forEach(([i, l, c, u]) => Pr(i, l, c, u).catch(() => {
        })) : a.dataset.more ? Bi(a.dataset.more, a) : a.hasAttribute("data-more-close") ? Ri() : a.dataset.morePage ? Ei(a.hasAttribute("data-more-toggle") && ((C == null ? void 0 : C.page) || 0) === Number(a.dataset.morePage) ? 0 : Number(a.dataset.morePage), a.dataset.moreMode ?? null, !0) : a.dataset.path ? ao(a.dataset.path) : a.dataset.go ? Kc("room:" + a.dataset.go) : a.hasAttribute("data-area-back") ? tl() : a.classList.contains("tfAreaPanel") && !a.classList.contains("active") && md(a);
    }), t.addEventListener("keydown", (e) => {
      var o, i, l, c, u, f, y;
      const a = e.target;
      if ((o = a.dataset) != null && o.more && a.tagName !== "BUTTON" && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), Bi(a.dataset.more, a)), (i = a.dataset) != null && i.energyPick && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), oc(a.dataset.energyPick)), (l = a.classList) != null && l.contains("tfAreaPanel") && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), md(a)), (c = a.dataset) != null && c.summary && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), kr(a.dataset.summary, a)), e.key === "Escape" && Qe && t === H) {
        e.preventDefault(), no(!0);
        return;
      }
      if (e.key === "Escape" && da && t === H) {
        e.preventDefault(), Hs(!1), (u = p("dashEditNav")) == null || u.focus();
        return;
      }
      if (e.key === "Escape" && Q && t === H && (e.preventDefault(), tl()), (f = a.dataset) != null && f.blocks) {
        const S = a.dataset.blocks, x = Gf(e, Math.round(Uo(S)));
        if (x == null) return;
        e.preventDefault(), Hr(S, x), clearTimeout(ce.get(S)), ce.set(S, setTimeout(() => Nr("pos", S), 500));
        return;
      }
      if ((y = a.dataset) != null && y.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
        e.preventDefault();
        const [S, x] = a.dataset.drag.split("|"), P = Number(a.getAttribute("aria-valuenow")) / 100, L = e.key === "Home" ? 0 : e.key === "End" ? 1 : Math.max(0, Math.min(1, P + (e.key === "ArrowLeft" || e.key === "ArrowDown" ? -0.05 : 0.05)));
        Hi(a, S, x, L), Nr(S, x);
      }
    }), t.addEventListener("pointerdown", (e) => {
      var Rt;
      const a = e.target.closest("[data-blocks]");
      if (a && e.button === 0) {
        e.preventDefault(), Uf(a, e);
        return;
      }
      const o = e.target.closest("[data-drag]");
      if (!o || e.button > 0) return;
      const [i, l] = o.dataset.drag.split("|"), c = i === "bright" && !$e(l), u = e.pointerType !== "mouse";
      if (c && !u) {
        wl(Et("light", "toggle", l));
        return;
      }
      const f = i === "bright" && ((Rt = M[l]) == null ? void 0 : Rt.state) !== "on", y = i === "tilt" ? 4 : 0, S = o.dataset.axis === "y", x = () => S ? o.getBoundingClientRect().height : o.getBoundingClientRect().width - y * 2, P = (Pt) => {
        const le = o.getBoundingClientRect();
        return Math.max(0, Math.min(1, S ? 1 - (Pt.clientY - le.top) / x() : (Pt.clientX - le.left - y) / x()));
      };
      let L = u ? "waiting" : f ? "pressed" : "dragging", B = 0;
      const k = e.clientX, R = e.clientY, _ = (Pt, le) => Math.hypot(Pt.clientX - k, Pt.clientY - R) > le, z = () => {
        try {
          o.setPointerCapture(e.pointerId);
        } catch {
        }
      };
      u || (e.preventDefault(), z()), L === "dragging" && Hi(o, i, l, P(e));
      const A = () => {
        var Pt, le;
        L = "sliding", ht = o, o.classList.add("held"), z(), (Pt = navigator.userActivation) != null && Pt.hasBeenActive && ((le = navigator.vibrate) == null || le.call(navigator, 8)), B = f ? (ra[l] ?? 100) / 100 : Number(o.getAttribute("aria-valuenow")) / 100;
      }, rt = (Pt) => {
        L === "waiting" && _(Pt, xt) ? !c && (S ? Math.abs(Pt.clientY - R) > Math.abs(Pt.clientX - k) : Math.abs(Pt.clientX - k) > Math.abs(Pt.clientY - R)) ? A() : L = "gone" : L === "pressed" && _(Pt, 4) && (L = "dragging"), L === "sliding" ? Hi(o, i, l, Math.max(0, Math.min(1, B + (S ? R - Pt.clientY : Pt.clientX - k) / x()))) : L === "dragging" && Hi(o, i, l, P(Pt));
      }, Tt = (Pt) => {
        ["pointermove", "pointerup", "pointercancel"].forEach((le, At) => o.removeEventListener(le, At ? Tt : rt)), o.classList.remove("held"), ht === o && (ht = null), L === "sliding" || L === "dragging" ? Nr(i, l) : Pt.type === "pointerup" && c ? wl(Et("light", "toggle", l)) : Pt.type === "pointerup" && f && (L === "waiting" || L === "pressed") && Pr("light", "turn_on", l).catch(() => {
        });
      };
      o.addEventListener("pointermove", rt), o.addEventListener("pointerup", Tt), o.addEventListener("pointercancel", Tt);
    }), t.addEventListener("touchmove", (e) => {
      ht && e.cancelable && e.preventDefault();
    }, { passive: !1 });
  }
  return H && w && (Sr(), gd(H), gd(kt), kt.addEventListener("click", (t) => {
    t.target === kt && Ri();
  }), (bd = n.getElementById("homeNav")) == null || bd.addEventListener("click", () => {
    Q && tl();
  }), (wd = n.querySelector(".bottomNav")) == null || wd.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + Ki + "</button>"), (vd = p("dashEditNav")) == null || vd.addEventListener("click", () => T ? Ks(!Co) : Hs(!da)), H.addEventListener("pointerdown", mf), H.addEventListener("pointerdown", zu), H.addEventListener("click", (t) => {
    T && Co && t.target.closest(".tfBoardItem") && (t.preventDefault(), t.stopPropagation());
  }, !0), H.addEventListener("scroll", (t) => {
    var e;
    (e = t.target.classList) != null && e.contains("hcFadeList") && Mc(t.target);
  }, !0), new ResizeObserver(() => {
    g.classList.contains("tfDash") && Ms() !== ys ? Pe() : xi();
  }).observe(H), window.addEventListener("resize", xi, { passive: !0 }), kt.addEventListener("keydown", (t) => {
    var e, a;
    if (t.key === "Escape")
      t.stopPropagation(), C != null && C.details ? cl(!1) : Ri();
    else if ((t.key === "ArrowLeft" || t.key === "ArrowRight") && ((a = (e = t.target).closest) != null && a.call(e, ".tfMoreDots"))) {
      t.preventDefault();
      const o = [...kt.querySelectorAll(".tfMoreDots [data-more-page]")], i = o.findIndex((c) => c.getAttribute("aria-selected") === "true"), l = o[Math.max(0, Math.min(o.length - 1, i + (t.key === "ArrowRight" ? 1 : -1)))];
      l && Ei(Number(l.dataset.morePage), l.dataset.moreMode ?? null, !0);
    }
  })), Y(), {
    update(t) {
      if (!w) return;
      const e = !Object.keys(M).length;
      M = { ...Object.fromEntries(Object.entries(M).filter(([o]) => Ya(o))), ...t || {} };
      for (const o in M) o.startsWith("light.") && M[o].state === "on" && $e(o) && to(o, $a(M[o]));
      e ? za() : Pe();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      cn = !0, ke == null || ke.destroy(), ke = null, Se == null || Se.forEach((t) => t.destroy()), Se = null;
    },
    resume() {
      cn = !1, !(!w || !(H != null && H.querySelector("[data-tf]"))) && (Sa.isConnected && Xr(Sa.style.order), $r());
    }
  };
}
const j0 = "0.13.2";
function z0() {
  if (document.getElementById("homecore-fonts")) return;
  const n = document.createElement("link");
  n.id = "homecore-fonts", n.rel = "stylesheet", n.href = "https://fonts.googleapis.com/css2?family=Geist:wght@200;300;400;500;600;700&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(n);
}
class G0 extends HTMLElement {
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
    z0();
    const r = this.shadowRoot || this.attachShadow({ mode: "open" });
    r.innerHTML = `<style>${Jf}${Qf}${th}${eh}</style>${ah}`;
    const d = r.getElementById("app");
    d.style.opacity = "0", this._shell = rh(r, {
      setLight: (p) => this.classList.toggle("lightBody", p),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._test = V0(r, { config: this._config, getHass: () => this._hass }), this._test.update(this._hass.states), rm(r, d), sm(r), this.isConnected || this._test.suspend(), d.style.transition = "opacity .2s ease", d.style.opacity = "";
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
customElements.get("homecore-card") || (customElements.define("homecore-card", G0), window.customCards = window.customCards || [], window.customCards.push({
  type: "homecore-card",
  name: "HomeCore",
  description: "A test environment for the HomeCore design language.",
  preview: !1
}), console.info(`%c HOMECORE %c ${j0} `, "background:#03a9f4;color:#090909;font-weight:700", ""));
