const Jf = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-text-on-accent:#090909;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#26221e;--color-text-on-selected:#fbf9f6;--color-bg-segment-selected:#fbf9f6;--color-accent-primary:#0288d1;--color-border-focus:#0288d1;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.pill,.primary,.navBtn,.tab,.back{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.hcAreaGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.hcAreaPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.hcAreaPanel.active{flex:7 1 0;min-width:0;cursor:default}.hcAreaPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.hcAreaPanel:before,.hcAreaPanel:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.hcAreaPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.hcAreaPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}#app.light .hcAreaPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.hcAreaPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.hcAreaPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.hcAreaPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}@media (max-width:900px){.hcAreaGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.hcAreaPanel,.hcAreaPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.panelCollapsed{display:none}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.sectionLabel{margin:0 0 8px 22.4px}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.toggleList{display:grid;gap:9.6px}.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.grid{grid-template-columns:1fr}}@media (max-width:620px){#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}}.card,.panel,.tile{border-radius:var(--r-card)}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .hcAreaPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.grid>*{min-width:0}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}:host{--primary:#03A9F4;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.activityRowMeta{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.toggleRow strong,.primary,.tab,.themeBtn,.wxLayoutBtn,.toast{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.note,.settingsSelect,.pill{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.metaTable th,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.hcAreaGallery,.hcAreaPanel{height:340px}@media (max-width:900px){.hcAreaPanel,.hcAreaPanel.active{height:320px}}@media (max-width:900px){.hcAreaGallery{height:auto}.hcAreaPanel,.hcAreaPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel{margin-left:16px}.grid{gap:8px}.sectionLabel{margin-bottom:8px}.hcAreaGallery{gap:8px}.hcAreaPanel,.hcAreaPanel.active{flex:0 0 100%;min-width:100%}.card,.hcAreaPanel{padding:16px}.activityRows{gap:8px}.activityRow{padding:10px 12px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}@media (prefers-reduced-motion: reduce){.sheet{transition:none}}.card,.panel,.hcAreaPanel.active{padding:var(--inset)}.hcAreaPanel{border-radius:var(--r-tile);padding:var(--inset)}.hcAreaPanel.active,.activityRow{border-radius:var(--r-tile)}.activityRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.activityRowMeta{color:var(--text)}.activityRowMeta{margin-top:0}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}#app{--group-bg:var(--card)}.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .note{margin:0 4px 4px}#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}', Qf = `#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}:is(#homeView,.tfMoreBackdrop,.tfEditTray,.tfMiniPhone) .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)){transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .wxWide{gap:16px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}@media (max-width:620px){#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--text)}#app.house.light{--hc-icon:#e6e6e6;--hc-icon-ink:var(--title)}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house :is(.tfAreaHead,#settingsView>.settingsHeader) .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house :is(.tfAreaHead,#settingsView>.settingsHeader) .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}.tfCard .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfAction>.tfActionHead{margin-bottom:auto}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .toggleRow:has(>.themeChoice,>.settingsSelect){flex-direction:column;align-items:stretch;gap:12px}#housePane .toggleRow>.settingsSelect{width:100%}#housePane .themeChoice[hidden]{display:none}#housePane .houseTab>.card:has(>.tfSetGroup){gap:24px}#housePane .tfSetGroup{display:grid;gap:8px}#housePane .tfSetGroup>.sectionLabel{margin:0 16px}#housePane{container:housepane/inline-size}#housePane .tfLightCards{display:none}@container housepane (width < 720px){#housePane .houseTab .metaTableWrap{display:none}#housePane .tfLightCards{display:grid;gap:8px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDacPad{min-width:0}.tfDacPad>dual-controller-v3{display:block}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}:is(.tfStep,.tfSeg,.tfBlocks,.tfTilt,.tfChips){font-family:var(--font-tile)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:0 1 46px;min-width:32px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);cursor:pointer}.tfStep svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfStep output{flex:1 0 auto;white-space:nowrap;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}#housePane .themeChoice,.tfBoardMenu .tfHeightTabs,.wb .wbSegments{gap:4px;padding:4px;border:0;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}#housePane .themeChoice{display:flex;flex-wrap:nowrap;width:100%}#housePane .themeChoice>button{flex:1 1 0;overflow:hidden;text-overflow:ellipsis}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button){height:38px;min-width:0;min-height:0;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile)!important;white-space:nowrap;cursor:pointer}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button):hover:not(:disabled):not([aria-pressed=true]):not([aria-checked=true]):not(.active){background:transparent;color:var(--text)}:is(#housePane .themeChoice :is(.wxLayoutBtn[aria-pressed=true],.themeBtn.active),.tfBoardMenu .tfHeightTabs button[aria-checked=true],.wb .wbSegments button[aria-pressed=true]){background:var(--bright);color:var(--on-bright)}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none;container:blocks/inline-size}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:12px 4px 4px 12px}.tfBlocks>span:nth-child(4){border-radius:4px 12px 12px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 14px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b small{font:inherit}@container blocks (width < 164px){.tfBlocks b small{display:none}}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.tfTilt i{position:absolute;top:4px;bottom:4px;left:4px;border-radius:12px;background:var(--primary)}.tfTilt span{position:relative;padding:0 16px;color:var(--text);font:600 14px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns svg{fill:none}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}#app.house .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}#app.house .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-l);--g1:var(--g1-l);--g2:var(--g2-l)}#app.house .tfSum[data-summary=climate] .tfIcon svg path{fill:url(#hcClimateGrad)}.tfGradDefs{position:absolute;width:0;height:0;overflow:hidden;pointer-events:none}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMoreBackdrop.tfMoreUnder{z-index:179;pointer-events:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}.tfMoreTileHead .tfName{display:grid;flex:1;min-width:0;cursor:default}.tfMoreTileHead :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreTileHead .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfMoreTileHead div.tfIcon{cursor:default}.tfMoreTileHead.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreTileHead.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMorePages{display:grid;grid-auto-flow:column;grid-auto-columns:100%;align-items:start;gap:20px;flex:none;overflow-x:auto;overflow-y:hidden;overscroll-behavior-x:contain;scroll-snap-type:x mandatory;scrollbar-width:none;transition:height .25s cubic-bezier(.2,.7,.3,1)}@media (prefers-reduced-motion:reduce){.tfMorePages{transition:none}}.tfMorePages::-webkit-scrollbar{display:none}.tfMorePage{display:flex;flex-direction:column;gap:14px;min-width:0;scroll-snap-align:start;scroll-snap-stop:always}.tfMoreSpace{flex:none;display:flex;flex-direction:column;justify-content:space-between;gap:12px;height:224px;padding:18px;border-radius:16px;background:var(--tile);overflow:hidden}.tfMoreSpace.tfMoreFill{justify-content:center;align-items:center;height:auto;padding:0;background:none;border-radius:0}.tfMoreSpace.tfMoreFill>.tfCoverArt{width:100%;height:auto;max-width:none;align-self:center}.tfMoreSpace.tfMoreFill>.tfDacPad{width:100%;height:100%}.tfMoreBig{display:flex;align-items:baseline;min-width:0;font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfMoreBig.live{color:var(--primary)}.tfMoreNum{overflow:hidden;text-overflow:ellipsis}.tfMoreUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfMoreFacts{display:flex;flex:1;flex-direction:column;justify-content:space-evenly;min-height:0}.tfMoreFact{display:flex;justify-content:space-between;gap:16px;font:400 14px/20px var(--font)}.tfMoreFact span:first-child{color:var(--muted)}.tfMoreFact span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreGraph{display:flex;flex:none;flex-direction:column;gap:6px}.tfMoreGraph .tfMoreGroupName{margin:0}.tfMoreGraph .tfGraph.tfDay{width:100%}.tfMoreDots{display:flex;flex:none;justify-content:center;gap:4px;margin-top:-4px}.tfMoreDots button{display:grid;place-items:center;width:24px;height:24px;min-height:0;padding:0;border:0;background:none;cursor:pointer}.tfMoreDots button:before{content:"";width:8px;height:8px;border-radius:50%;background:var(--muted);opacity:.45;transition:opacity .15s ease,background .15s ease}.tfMoreDots button[aria-selected=true]:before{background:var(--text);opacity:1}.tfMoreDots.tfMorePageIcons{gap:3px;align-self:center;margin-top:0;padding:3px;border-radius:19px;background:var(--tile)}.tfMoreDots.tfMorePageIcons button{width:48px;height:32px;border-radius:16px;color:var(--muted);transition:background .15s ease,color .15s ease}.tfMoreDots.tfMorePageIcons button:before{display:none}.tfMoreDots.tfMorePageIcons button svg{width:20px;height:20px;fill:currentColor}.tfMoreDots.tfMorePageIcons button[aria-selected=true]{background:var(--text);color:var(--card)}.tfMoreDots.tfMorePageIcons button:not([aria-selected=true]):hover{color:var(--text)}#homeView .grid>.tfDashTiles>.tfAction.tfHeadOnly,#homeView .grid .tfAction.tfHeadOnly{align-self:start}.tfMoreLink{margin-top:auto}.tfMoreLink svg{transform:none!important}.tfMorePage .tfMoreRows{flex:none}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card.tfCard{container-type:inline-size}#homeView .card.tfCard .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMorePair.still{animation:none}#app[data-more=sheet] .tfMore{width:min(640px,100vw)}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}.tfAreaPanel .icon{width:22px;height:22px}#app .hcAreaPanel.tfAreaPanel{padding:0}#app .hcAreaPanel.tfAreaPanel.active{border-radius:28px}.tfAreaPanel .panelExpanded>.tfRoomTile{height:100%;box-sizing:border-box;background:none;box-shadow:none}#app.tfBoard .tfAreaPanel .tfRoomTile[data-rows="1"]{padding:10px}#app.tfBoard .tfAreas[data-rows="1"] .hcAreaPanel.tfAreaPanel.active{border-radius:24px}.tfAreaIcon{flex:none;border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}button.tfAreaIcon{cursor:pointer}.tfAreaGlyph{display:grid;place-items:center}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{display:grid;grid-template-columns:repeat(var(--peg-n),var(--peg-w));grid-auto-rows:60px;grid-auto-flow:row dense;align-items:stretch;gap:16px;max-width:none}#app.tfWeatherOpen .tfBento.tfPegs .wbItem{width:auto;min-height:0;align-self:stretch;display:flex;flex-direction:column}#app.tfWeatherOpen .tfBento.tfPegs .wbItem>*{flex:1;min-height:0}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=wide]{grid-column:span 2;grid-row:span 5}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=double]{grid-column:span 2;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=tile]{grid-column:span 1;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbCard.wbSquare{aspect-ratio:auto}#app.tfWeatherOpen .tfBento.tfPegs .wbWeather .wbNow{margin-bottom:auto}#app.tfWeatherOpen .tfBento.tfPegs :is(.wbStripScroll,.wbBars .wbDayBars,.wbBars.wbTabbed .wbDayBars){min-height:0}#app.tfBoard .tfAreas[data-rows="5"] .tfACMain{position:absolute;left:10px;right:10px;bottom:170.3px;max-width:none;text-align:center}#app.tfBoard .tfAreas[data-rows="4"] .tfACMain{position:absolute;left:10px;right:10px;bottom:164.1px;max-width:none;text-align:center}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:18px 0 10px;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:6px;max-width:calc(100% - 20px)}.tfACMain{max-width:calc(100% - 20px);font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px);min-height:60px}.tfACTiles:has(>:nth-child(3)){margin-top:-60px}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}.tfACTiles:has(>:nth-child(2)){margin-top:-60px}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{gap:28px;padding:40px;background:var(--bg)}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:-20px -20px 0 0}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead) .activityTitle{font-size:24px}@media (max-width:620px){#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:0}}@media (min-width:621px){#app:not([data-more=sheet]) .tfMoreBackdrop.wide{place-items:start center}}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px}.tfMoreActions .tfAction{grid-column:auto}.tfMoreActions>.activityRow{align-self:start;display:grid;grid-auto-flow:column;grid-template-columns:auto minmax(0,1fr);align-items:center;align-content:start;gap:12px;min-width:0;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfMoreActions>.activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreActions>.tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreActions>.activityRow :is(.activityRowName,.activityRowMeta){display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreActions>.activityRow.alert .activityRowMeta{color:var(--danger)}@media (max-width:620px){.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash :is(.tfDash-aq,.tfDash-pollen,.tfDash-radar,.tfDash-hourly,.tfDash-sun,.tfDash-moon,.tfDash-uv,.tfDash-humidity,.tfDash-pressure,.tfDash-wind,.tfDash-visibility){order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app .tfNotAdded{display:none!important}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:0 0 var(--area-open,409px)}#app.tfDash .tfAreaPanel:not(.active){flex:1 0 128px}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;margin-top:auto;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(2,minmax(0,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app.house .tfDashBento .wbItem[data-size]{width:100%}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}.tfDash-wx .wbCondition{display:none}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .hcAreaGallery,#app.tfBoard .tfAreas .hcAreaPanel{height:100%;min-height:0}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;pointer-events:none;color:var(--text)}.tfBoardCells svg{display:block;overflow:visible}.tfBoardCells pattern circle{fill:currentColor;fill-opacity:.16}.tfBoardCells .tfGridCross{fill:none;stroke:currentColor;stroke-opacity:.45;stroke-width:1.5;stroke-linecap:round}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfHeight{display:grid;gap:6px;padding:6px 6px 8px}.tfHeightLabel{padding:0 6px;color:var(--muted);font:500 12px/16px var(--font)}.tfHeightTabs{display:grid;grid-template-columns:repeat(5,1fr)}.tfBoardMenu .tfHeightTabs button{justify-content:center}.tfBoardMenu .tfHeightTabs button:disabled{opacity:.35}.tfWidth{padding-top:0}.tfWidth .tfHeightTabs{grid-template-columns:repeat(3,auto)}.tfSourceList{display:grid;gap:2px}.tfBoardMenu .tfSourceList button[aria-checked=true]{background:var(--bright);color:var(--on-bright)}.tfBoardMenu .tfSourceList button[aria-checked=true]:hover{background:var(--bright)}.tfBoardMenu .tfWidth .tfHeightTabs button{white-space:nowrap}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows{grid-auto-rows:var(--fill-row,60px);margin-top:0}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows>.activityRow{min-height:0;height:var(--fill-row,60px);box-sizing:border-box}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]{padding:0;gap:0}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityHeader,#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.tfDashGraph{display:none}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityRows{margin:0;flex:1}#app.tfBoard .tfBoardItem.tfAction[data-rows="1"]{padding:10px;border-radius:24px}.tfRoomTile{cursor:pointer}.tfRoomTile .tfRoomIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomTile button.tfRoomIcon{cursor:pointer}.tfRoomInline,.tfRoomSub{display:none}.tfRoomReading{display:flex;flex-direction:column;align-items:flex-start;align-self:flex-start;gap:4px;min-width:0;max-width:100%;padding:0;border:0;border-radius:8px;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.tfRoomBig{overflow:hidden;color:var(--text);font:500 36.8px/36.8px var(--font-tile);letter-spacing:-.74px;white-space:nowrap;text-overflow:ellipsis}#app.tfBoard .tfRoomTile[data-rows="4"] .tfRoomBig{font-size:41.6px;line-height:41.6px;letter-spacing:-1.54px}#app.tfBoard .tfRoomTile[data-rows="5"] .tfRoomBig{font-size:51.2px;line-height:51.2px;letter-spacing:-1.54px}.tfRoomTile:not([data-rows="1"]) :is(.tfRoomDevices,.tfRoomHeads){margin-top:auto}.tfRoomTile>.tfActionHead{margin-bottom:0}.tfRoomSub{overflow:hidden;color:var(--muted);font:400 16px/19px var(--font);white-space:nowrap;text-overflow:ellipsis}.tfRoomDevices{display:flex;gap:12px}.tfRoomDevices .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfRoomDevices .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}#app.tfBoard .tfRoomTile[data-rows="1"] .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-rows="1"] :is(.tfRoomReading,.tfRoomDevices),#app.tfBoard .tfRoomTile[data-rows="2"] .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfActionHead .activityRowMeta{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfRoomSub{display:block}#app.tfBoard .tfRoomTile[data-cols="1"]:is([data-rows="3"],[data-rows="4"],[data-rows="5"]) .tfRoomDevices{display:grid;grid-template-columns:repeat(2,max-content)}#app.tfBoard .tfRoomTile[data-cols="1"][data-rows="3"]:has(.tfRoomDevices) .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-cols="1"][data-rows="3"]:has(.tfRoomDevices) .tfRoomReading{display:none}#app.tfBoard .tfRoomTile[data-cols="1"]:is([data-rows="4"],[data-rows="5"]) .tfRoomDevices{min-height:calc(2 * var(--chip-size) + 12px);align-content:start}.tfRoomHeads{display:none;gap:12px 16px}.tfRoomDev{position:relative;isolation:isolate;display:flex;align-items:center;gap:12px;min-width:0}.tfRoomDev:before{content:"";position:absolute;z-index:-1;top:-6px;right:-10px;bottom:-6px;left:-10px;border-radius:var(--r-tile);pointer-events:none;transition:background .15s ease,box-shadow .15s ease}@media (hover:hover){.tfRoomDev:hover:before{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}}.tfRoomDevName{padding:0;border:0;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.tfRoomDev .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfRoomDev .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfRoomDevName{display:flex;flex-direction:column;min-width:0}.tfRoomDevName>span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]){flex-direction:row;align-items:center;gap:12px}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"])>.tfActionHead{flex:1;margin-bottom:0}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]) .tfRoomDevices{display:flex}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomHeads{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-cols="2"]):not([data-rows="1"]) .tfRoomHeads{grid-template-columns:repeat(4,minmax(0,1fr))}#app.tfBoard .tfRoomTile[data-cols="2"][data-rows="2"] .tfRoomDev:nth-child(n+3){display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]):has(.tfRoomDevices) .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]):has(.tfRoomDevices) .tfRoomReading{display:none}#app.tfBoard .tfDashBento[data-rows="1"] .wbCard{padding:10px;border-radius:24px}#app.tfBoard .tfDashBento[data-rows="1"] .wbVisual{display:none}#app.tfBoard .tfDash-wx[data-rows="1"] .wbNow{margin:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbWx.wbS90{width:40px;height:40px;border-radius:12px}#app.tfBoard .tfDashBento[data-rows] :is(.wb,.wbBento,.wbItem){height:100%;min-height:0}#app.tfBoard .tfDashBento[data-rows] .wbCard{height:100%;min-height:0;box-sizing:border-box;aspect-ratio:auto}#app.tfBoard .tfDash-wx[data-rows="1"] .wbDeg{font-size:20px;letter-spacing:0;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbPlace{font-size:13px;line-height:18px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbUnit{font-size:14px;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbWx.wbS90{width:100px;height:100px;border-radius:31px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbDeg{font-size:80px;line-height:80px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbUnit{font-size:30px;line-height:38px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbWeather{flex-direction:row;align-items:center;gap:16px}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNow{flex:none}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNextHours{display:flex;flex:1 1 0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbWeather{justify-content:center;padding-top:0;padding-bottom:0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) :is(.wbNow,.wbSummary){display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbColumns{display:flex;flex:none;height:185px}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsDay{display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsNow{display:inline}#app.tfBoard .tfDash-wx[data-narrow] .wbCard.wbWeather{gap:12px;padding:18px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbWx.wbS90{width:64px;height:64px;border-radius:20px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbDeg{font-size:46px;line-height:46px;letter-spacing:-.92px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbUnit{font-size:20px;line-height:26px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-narrow] .wbHalves{display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="3"] .wbNextHours{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow] .wbHour:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;flex:none;height:auto;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumn:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbHalves{display:none}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx:not([data-narrow])[data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="4"]) .wbSummary{display:none}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) :is(.wbColumns,.wbHalves){display:none}#app.tfBoard .tfDash-wx[data-rows="4"] .wbColumns{flex:1 1 0;height:auto;min-height:0;margin-top:0}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn{justify-content:flex-start;gap:8px;padding:12px 0 16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn .wbWx{width:40px;height:40px;border-radius:16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbTemps{gap:4px}#app.tfBoard .tfDash-wx[data-rows="4"] .wbHalves>:nth-child(n+5){display:none}#app.tfBoard .tfDash-energy[data-rows="2"] .tfDashGraph{display:none}#app.tfBoard .tfDash-energy:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) .activityRows{grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr)}#app.tfBoard .tfDash-energy[data-rows="3"] .tfDashGraph{min-height:0}#app.tfBoard .tfDashBento[data-rows="2"] .wbBaseRows{display:none}#app.tfBoard .tfDashBento[data-rows="2"] :is(.wbRadar,.wbCompareBars,.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfDashBento[data-rows="3"] :is(.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfAreas[data-rows="1"] .tfACTop{display:contents}#app.tfBoard .tfAreas[data-rows="1"] .tfACTiles{display:none}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed{display:grid;grid-template-columns:40px minmax(0,1fr);column-gap:12px;align-content:center;padding:0}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfACName,.tfACMain){margin:0;font-size:14px;line-height:18px;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.tfBoard .tfAreas[data-rows="2"] .tfACTiles{display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTile:nth-child(n+3){display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACollapsed{justify-content:flex-start;gap:10px}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTiles{margin-top:auto}.tfEditTray{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px));right:0;bottom:0;z-index:160;display:flex;width:608px;max-width:calc(100vw - 56px);transform:translate(100%);transition:transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfEditTray.open{transform:none}.tfEditTray.open.tucked{transform:translate(100%)}.tfEditTray.open :is(.tfTrayInner,.tfTrayTuck){pointer-events:auto}.tfTrayTuck{position:absolute;top:20px;left:-52px;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border:0;border-radius:var(--r-inner);background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;--mdc-icon-size:22px}.tfTrayTuck svg{width:22px;height:22px}.tfEditTray:not(.open) .tfTrayTuck{visibility:hidden}.tfTrayInner{flex:1;min-width:0;display:flex;flex-direction:column;gap:20px;overflow:auto;overscroll-behavior:contain;padding:20px;border-radius:var(--r-card) 0 0 var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d}.tfTrayHead{display:flex;align-items:center;justify-content:space-between;gap:12px}.tfTraySection{display:flex;flex-direction:column;gap:8px}.tfTraySection .sectionLabel{margin:0}.tfTrayNote{margin:0;color:var(--muted);font:400 14px/1.3 var(--font)}.tfTrayCards{display:flex;flex-direction:column;gap:6px}.tfTrayCard{display:flex;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 14px 0 10px;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none}.tfTrayList{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}.tfTrayFav{display:grid;grid-template-columns:22px var(--chip-size) minmax(0,1fr) 36px 36px;align-items:center;gap:8px;min-height:var(--tile-min);padding:0 4px 0 6px;border-radius:var(--r-tile)}.tfTrayFav.off{cursor:grab;touch-action:none}.tfTrayFav.off :is(.tfIcon,.tfTrayName){opacity:.5}.tfTrayFav.moving{background:var(--tile)}.tfTrayGrip{display:grid;place-items:center;color:var(--muted);cursor:grab;touch-action:none}.tfTrayGrip svg{width:20px;height:20px;fill:currentColor}:is(.tfTrayFav,.tfTrayPickItem) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfTrayName{display:flex;flex-direction:column;min-width:0}.tfTrayName>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfTrayBtn{display:grid;place-items:center;width:36px;height:36px;min-height:0;padding:0;border:0;border-radius:12px;background:none;color:var(--text);cursor:pointer}.tfTrayBtn svg{width:20px;height:20px;fill:currentColor}.tfTrayBtn:hover{background:var(--tile)}.tfTrayAdd{align-self:flex-start}.tfTrayPick{display:flex;flex-direction:column;gap:6px}.tfTrayPick[hidden]{display:none}.tfTrayPickItem{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;width:100%;min-height:var(--tile-min);padding:0 10px;border:0;border-radius:var(--r-tile);background:none;color:var(--text);text-align:start;cursor:pointer}.tfTrayPickItem:hover{background:var(--tile)}.tfTraySuggest{margin-top:8px}.tfMiniPhone{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px) + 20px);bottom:20px;left:max(16px,calc(100vw - min(608px,100vw - 56px) - 380px));z-index:160;display:flex;flex-direction:column;gap:8px;width:324px;padding:12px;border-radius:44px;background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d;opacity:0;transform:translate(16px);transition:opacity .2s ease,transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfMiniPhone.open{opacity:1;transform:none;pointer-events:auto}.tfPhoneHead{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 4px 0 12px}.tfMiniPhone>.tfTrayNote{padding:0 12px 4px}.tfLinkBtn{min-height:0;padding:0;border:0;background:none;color:var(--primary);font:inherit;text-decoration:underline;cursor:pointer}.tfPhoneScreen{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;border-radius:34px;background:var(--bg);box-shadow:var(--hc-hair-all);padding:14px 0 24px}.tfPhoneList{display:flex;flex-wrap:wrap;gap:12.8px}.tfPhoneTitle{width:100%;padding:0 12.8px;color:var(--text);font:800 25.6px/1 var(--font);letter-spacing:-.055em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfPhoneBlock{display:flex;align-items:flex-start;gap:10px;width:100%;min-height:0;padding:12px;border:0;border-radius:27px;background:var(--card);box-shadow:var(--hc-hair);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.tfPhoneBlock.tile{width:calc((100% - 12.8px)/2);border-radius:22.4px}.tfPhoneBlock.fixed{align-items:center;color:var(--muted);cursor:default}.tfPhoneBlock.moving{box-shadow:var(--hc-hair),0 0 0 2px var(--primary);cursor:grabbing}.tfPhoneBlock:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfPhoneBlock .tfIcon{width:32px;height:32px;border-radius:13px;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}.tfPhoneName{min-width:0;padding-top:6px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tfTrayGhost{position:fixed;top:0;left:0;z-index:200;margin:0;pointer-events:none;opacity:.9;background:var(--tile);border-radius:var(--r-tile);box-shadow:0 8px 24px #00000059}.tfFavDrop{position:fixed;z-index:200;width:4px;border-radius:2px;background:var(--primary);pointer-events:none}.tfFavHides{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;pointer-events:none}.tfFavHide{position:absolute;display:grid;place-items:center;width:32px;height:32px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;pointer-events:auto}.tfFavHide svg{width:18px;height:18px;fill:currentColor}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.toast.tfToast{top:auto;right:auto;max-width:calc(100vw - 32px);transform:translate(-50%,6px)}.toast.tfToast.show{transform:translate(-50%)}.tfDash-act .activityRow.alert .activityRowName{color:var(--danger)}.activityRow .tfIcon.alert{background:#e53935;color:#fff}.tfGraph.tfDay{flex:none;height:62px;min-height:0}.tfGraph.tfDay text{font-size:10px}#housePane .rubberIndicator{background:var(--bright)}#housePane .tab.active{color:var(--on-bright)}#app.house .settingsSelect{border:1px solid var(--muted)}#app.house .addInput{display:block;width:100%;height:46px;min-height:0;box-sizing:border-box;margin:0;padding:0 10px;border:0;border-radius:var(--r-inner)!important;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:400 16px/18.4px Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;letter-spacing:-.32px;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}#app.house .addInput:hover{background:color-mix(in srgb,var(--text) 6%,var(--tile))}#app.house .addInput:focus-visible,#app.house .addInput:focus{background:var(--tile);box-shadow:inset 0 0 0 1.6px var(--primary)}#app.house .addInput::-webkit-search-decoration,#app.house .addInput::-webkit-search-cancel-button{-webkit-appearance:none;-moz-appearance:none;appearance:none}#app.house{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%23d9d9d9' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house.light{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%2326221e' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house select.settingsSelect{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 44px 0 16px;background-image:var(--select-chev);background-repeat:no-repeat;background-position:right 16px center;background-size:16px 16px}#app.house .addInput::placeholder{color:var(--muted);opacity:1}#app .activityRows :focus-visible{outline-offset:-2.4px}#app.house :is(button,a,input,select,[tabindex]){scroll-margin-bottom:96px}@media (max-width:620px){#app.house :is(.activityRowName,.activityRowMeta){white-space:normal;text-overflow:clip;overflow:visible;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}}.tfTooltip{position:fixed;z-index:500;max-width:min(320px,calc(100vw - 16px));padding:6px 10px;border-radius:10px;background:var(--bright);color:var(--on-bright);font:500 14px/18px var(--font);overflow-wrap:break-word;box-shadow:0 4px 16px #00000040}.tfTooltip[hidden]{display:none}.tfDashGraph rect{transform-box:fill-box;transform-origin:50% 100%}#app.house:is([data-names=cut],[data-names=scroll]) :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis;overflow-wrap:normal}#app.house[data-names=wrap] :is(.activityRowName,.activityRowMeta){display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:normal;overflow:hidden;text-overflow:ellipsis;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}#app.tfBoard .tfDash-favs>.activityRows{min-height:0;overflow-y:auto;scrollbar-width:thin}#app.house :is(.tfIcon,.tfAreaIcon,.tfRoomIcon){--chip-hi:.0375;background-image:linear-gradient(180deg,#ffffff08,#fff0)!important;box-shadow:inset 0 1px rgba(255,255,255,var(--chip-hi)),inset 0 -1px color-mix(in srgb,currentColor 3%,transparent),inset 0 -3px 6px color-mix(in srgb,currentColor 3.5%,transparent)}#app.house :is(.on[data-light] .tfIcon,.tfIcon.on[data-light],.tfACTile .tfIcon[data-light],.on[data-tone=alarm] .tfIcon,.tfIcon[data-light]){--chip-hi:.1375}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-xl]{grid-row:span 5}#app.tfBoard .tfDashBento:not([data-rows="5"]) .wbItem[data-xl] .wbCallouts{display:none}#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]) .wbZone{flex:1;height:auto;background:none;box-shadow:none;padding:0;align-items:flex-start}#app.tfBoard .tfDashBento[data-rows="3"] .wbItem[data-xl] .wbCallouts{display:flex;margin-top:0}#app.tfBoard .tfDashBento[data-rows="1"] :is(.wbZone,.wbCallouts){display:none}#app .wbZoneM{display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM){display:flex;align-items:flex-start;justify-content:flex-start}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM)>:not(.wbZoneM){display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZoneM{display:flex}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{grid-auto-flow:row}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-break]{grid-column-start:1}#app.house.tfWeatherOpen #homeView{max-width:none}#app.house #settingsView .toggleList{border-radius:var(--r-card);padding-block:4px}#app.house #settingsView .toggleRow{padding-left:18px;padding-right:18px}#app.house #settingsView .toggleRow:not([hidden])~.toggleRow:before{left:18px}#app.house .view{margin-left:0}#app.house #settingsView .toggleList>.tfCardTitle{display:flex;align-items:center;min-height:28px;padding:14px 18px 2px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfLightView{display:flex;padding:4px 0 14px}#housePane.tfLightCardsOn .houseTab .metaTableWrap,#housePane.tfLightCardsOn .houseTab .tfTableNote{display:none}#housePane.tfLightCardsOn .tfLightCards{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:8px}#housePane:not(.tfLightCardsOn) .tfLightCards{display:none}@container housepane (width < 720px){#housePane:not(.tfLightCardsOn) .houseTab .metaTableWrap{display:none}#housePane:not(.tfLightCardsOn) .tfLightCards{display:grid}}#app.house.light .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house .tfTrayInner{gap:32px}#app.house .tfTraySection{gap:12px}#app.house{--font:Geist,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-family:var(--font)}#app.house #housePane .toggleRow>:is(.themeChoice,.settingsSelect){align-self:flex-start;width:auto;max-width:100%}#app.house #housePane .themeChoice{display:inline-flex}#app.house #housePane .themeChoice>button{flex:0 1 auto;min-width:0;padding:0 16px;overflow:hidden;text-overflow:ellipsis}#app.house #housePane .toggleRow{min-width:0}#app.house #housePane .toggleRow>.settingsSelect{min-width:200px}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments){display:inline-flex;width:auto;align-self:flex-start}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments) button{flex:0 0 auto;padding:0 16px}@media (max-width:620px){#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid{display:flex!important;flex-wrap:wrap;align-items:flex-start;gap:var(--grid-gap);height:auto!important}#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid .tfBoardItem{position:relative!important;left:auto!important;top:auto!important}#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid>.tfBoardItem:not(.tfDash-favs){height:auto!important}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummary{flex:none;margin-top:0;container-type:normal}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummaryText{position:static}}#app.house :is(#housePane .themeChoice,.wb .wbSegments,.tfBoardMenu .tfHeightTabs){height:32px;padding:3px;gap:3px;box-sizing:border-box}#app.house :is(#housePane .themeChoice>button,.wb .wbSegments button,.tfBoardMenu .tfHeightTabs button){height:26px!important;padding:0 12px;border-radius:13px!important;font:600 12px/16px var(--font-tile)!important}.tfPlantProblem{flex:1 1 0;min-height:184px;flex-direction:column}.tfGraph.tfPlantGraph{flex:1 1 0;width:calc(100% - 20px);height:auto;min-height:160px;margin:0 10px}.tfGraph .tfGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:3 4;vector-effect:non-scaling-stroke}.tfGraph .tfGuideWord{font-size:11px}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){box-shadow:inset 0 0 0 1px var(--line)}.tfDashTitle .tfGreeting{display:block;margin-bottom:6px;font:500 20px/1.2 var(--font-tile);letter-spacing:0;color:var(--muted)}#app.light{--title:#55504a}#app.light :is(.activityTitle,.hcCardTitle,.wbTitle,.activityRowName,.hcRowName,.wbName){color:var(--title)}#app.light .tfRoomTile .tfActionHead .activityRowName{color:var(--text)}#app.light .tfRoomBig{color:var(--title)}#app.tfOverview.tfDash #homeView .tfSum:not([data-summary=alerts]) .tfIcon{background:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar{width:100%;max-width:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows{display:flex;justify-content:space-between}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRow{flex:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows{display:grid;grid-template-columns:repeat(var(--bar-cols,3),minmax(0,1fr))}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows>.activityRow{min-width:0}@media (max-width:620px){#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}}#app.tfOverview.tfDash #homeView .tfDash-favs{padding:10px;border-radius:var(--r-card)}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-auto-rows:60px;row-gap:25px;max-height:100%;margin:0;overflow-y:auto;scrollbar-width:none}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows::-webkit-scrollbar{display:none}.hcFadeList.hcMore{-webkit-mask-image:linear-gradient(to bottom,#000 calc(100% - 40px),transparent);mask-image:linear-gradient(to bottom,#000 calc(100% - 40px),transparent)}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{height:60px;min-height:0;padding:10px;box-sizing:border-box}#app.tfOverview.tfDash #homeView .tfDash-wx .wbCard.wbWeather{gap:0;padding:18px}#app.tfOverview.tfDash #homeView .tfDash-wx .wbCondition,#app.tfOverview.tfDash #homeView .tfDash-wx .wbNextHours,#app.tfOverview.tfDash #homeView .tfDash-wx .wbHalves{display:none!important}#app.tfOverview.tfDash #homeView .tfDash-wx .wbSummary{flex:none;height:auto;margin:18px 0 0;container:none}#app.tfOverview.tfDash #homeView .tfDash-wx .wbSummaryText{position:static;-webkit-line-clamp:1}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumns{display:flex!important;height:159px;margin-top:auto;border-radius:var(--r-tile)}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn{padding:8px 0;background:none}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn:hover{background:var(--tile)}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn .wbWx.wbS60{width:60px;height:60px;border-radius:20px}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar{width:max-content;max-width:100%}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar .activityRows{justify-content:flex-start}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows{grid-template-columns:repeat(var(--bar-cols,3),auto)}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs{height:auto!important;padding:10px;container-type:normal}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows{display:flex;justify-content:space-between;grid-auto-rows:auto;row-gap:0;max-height:none}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{flex:none;width:240px;height:60px}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows{display:grid;grid-template-columns:repeat(var(--bar-cols,3),minmax(0,1fr))}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows>.activityRow{width:auto;min-width:0}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs{width:max-content!important;max-width:100%}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs>.activityRows{justify-content:flex-start}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows{grid-template-columns:repeat(var(--bar-cols,3),240px)}@media (max-width:620px){#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{width:auto;min-width:0}}#app.tfOverview.tfBoard #homeView .hcFloor{position:absolute;z-index:1;display:flex;align-items:center;height:24px;margin:0;box-sizing:border-box}#app.tfOverview.tfBoard #homeView .hcFloorBox{position:absolute;z-index:0;border-radius:40px;background:color-mix(in srgb,var(--text) 5%,transparent);box-sizing:border-box;pointer-events:none}#app.tfOverview #homeView .hcFloorName{margin:0;font:500 16px/24px var(--font);color:var(--title,var(--text));white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.hcHomeEditing.tfOverview #homeView .tfBoardItem.tfRoomTile{cursor:default;outline:0}#app.hcHomeEditing.tfOverview #homeView .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfRoomTile){cursor:grab;-webkit-user-select:none;user-select:none;touch-action:none;outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.hcHomeEditing.tfBoardReady #homeView .tfBoardItem{transition:left .34s cubic-bezier(.2,1.35,.4,1),top .34s cubic-bezier(.2,1.35,.4,1)}@media (prefers-reduced-motion:reduce){#app.hcHomeEditing.tfBoardReady #homeView .tfBoardItem{transition:none}}#app.hcHomeEditing #homeView .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfEditTray .tfTrayInner{scrollbar-width:none}.tfEditTray .tfTrayInner::-webkit-scrollbar{display:none}.hcHeChoiceLine{flex-wrap:wrap;gap:8px 12px}.hcHeChoiceLine>.hcHeChoice{margin-left:auto}.hcHeChoice.themeChoice{display:inline-flex;flex-wrap:nowrap;height:32px;padding:3px;gap:3px;box-sizing:border-box;border-radius:16px;background:var(--control-2,var(--hc-icon))}#app .hcHeChoice>button{height:26px!important;min-height:0;padding:0 12px;border:0;border-radius:13px!important;background:none;color:var(--text);font:600 12px/16px var(--font-tile)!important;white-space:nowrap}#app .hcHeChoice>button[aria-pressed=true]{background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all)}.hcHeBody{display:flex;flex-direction:column;gap:12px}.hcHeBody>.tfTrayNote{margin:0 0 8px}.hcHeLabel{display:flex;align-items:center;gap:4px}.hcHeLine{display:flex;align-items:center;gap:4px;min-height:44px}.hcHeLine>.activityRowName{min-width:0}.hcHeLine>.switch{margin-left:auto}.hcHeLink{display:inline;min-height:0;padding:0;border:0;background:none;font:inherit;color:var(--primary);text-decoration:underline;cursor:pointer}.hcHeList{display:flex;flex-direction:column;gap:2px;margin:0;padding:0;list-style:none}.hcHeRow{display:grid;grid-template-columns:36px var(--chip-size) minmax(0,1fr) auto;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 4px;border-radius:var(--r-tile)}.hcHeRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.hcHeRow.moving{background:var(--card);box-shadow:var(--hc-hair-all)}:is(.hcHeRow,.tfTrayFav):is(.hcListDragging,.hcListLanding){position:relative;z-index:5;background:var(--card)}:is(.hcHeRow,.tfTrayFav).hcListDragging{filter:drop-shadow(0 10px 30px rgba(0,0,0,.35));cursor:grabbing}.hcHeGrip{color:var(--muted);cursor:grab;touch-action:none}.hcHeSum .tfIcon{color:var(--sum-ink,var(--hc-icon-ink))}#app .hcHeRow.hcHeSum .tfIcon{background-color:transparent}#app.house .hcHeSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .hcHeSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}.hcInfoBtn{display:grid;place-items:center;flex:none;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:var(--r-fine,12px);background:none;color:var(--muted);cursor:pointer}.hcInfoBtn svg{width:18px;height:18px;fill:currentColor}.hcInfoBtn:hover,.hcInfoBtn[aria-expanded=true]{background:var(--tile);color:var(--text)}.hcInfoPop{position:fixed;z-index:320;width:280px;max-width:calc(100vw - 16px);display:flex;flex-direction:column;gap:8px;padding:16px;border-radius:var(--r-inner);box-shadow:var(--hc-hair-all),0 8px 28px #0000002e}.hcInfoPop[hidden]{display:none}.hcInfoTitle{font:600 14px/20px var(--font-tile);color:var(--text)}.hcInfoText{font:400 14px/1.45 var(--font);color:var(--text)}.hcInfoText p{margin:0}.hcInfoText ul{margin:6px 0 0;padding-left:18px}.hcInfoMore{align-self:flex-start;font:600 14px/20px var(--font-tile);color:var(--primary);text-decoration:underline}#app .tfTrayAdd.hcAddBtn{display:inline-flex;align-items:center;gap:6px;height:32px;min-height:0;margin:10px 0 12px;padding:0 16px 0 12px;border:0;border-radius:16px!important;background:#03a9f4;color:#fff;font:600 14px/20px var(--font-tile);text-decoration:none!important}#app .tfTrayAdd.hcAddBtn svg{width:18px;height:18px;flex:none;fill:currentColor}#app .tfTrayAdd.hcAddBtn:hover{background:#0398dc}#app .tfTrayAdd.hcAddBtn[aria-expanded=true]{background:#0288d1}.tfEditTray:not(.hcHomeTray) .tfTraySection:not(.hcFirst){padding-top:20px;border-top:1px solid var(--line)}#app.house .tfEditTray:not(.hcHomeTray) .tfTrayInner{gap:20px}.hcHeRule{width:100%;height:0;margin:8px 0;border:0;border-top:1px solid var(--line)}.tfEditTray .hcTrayTabs{display:flex;align-self:stretch;margin:0 0 4px;flex:none}.tfEditTray .hcTrayTabs .tab{flex:1 1 0;min-height:36px;padding:0 10px;font:600 14px/20px var(--font-tile)}.tfEditTray .hcTrayTabs .rubberIndicator{background:var(--text)}.tfEditTray .hcTrayTabs .tab.active{color:var(--card)}.tfEditTray .tfTraySection[hidden]{display:none!important}.hcTrayList{display:grid;gap:0;padding:0}.hcTrayList .hcRow{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:12px;width:100%;min-height:60px;padding:10px 18px;border:0;border-radius:0;background:transparent;color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:pointer;box-sizing:border-box}.hcTrayList .hcRow+.hcRow{box-shadow:inset 0 1px var(--line)}.hcTrayList .hcRowText{display:grid;min-width:0}.hcTrayList .hcRowName{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.hcTrayList .hcRowEnd{display:grid;place-items:center;width:24px;height:24px;color:var(--muted)}.hcTrayList .hcRowEnd svg{display:block;width:20px;height:20px}#app .tfEditTray :is(.hcTrayList,.hcTrayBack){display:none}@media (max-width:620px){#app .tfEditTray .hcTrayTabs{display:none}#app .tfEditTray:not(.hcTrayIn) .hcTrayList{display:grid;flex:none;padding:0}#app .tfEditTray .hcTrayList .hcConfigRow{grid-template-columns:minmax(0,1fr) auto;margin-inline:-10px;width:calc(100% + 20px)}#app .tfEditTray:not(.hcTrayIn) :is(.tfTraySection,.hcHeTabBody){display:none!important}#app .tfEditTray.hcTrayIn .hcHeAreasNote{display:none}#app .tfEditTray.hcTrayIn .hcTrayBack{display:inline-flex;flex:none;width:40px;height:40px;margin-block:-4px}#app .tfEditTray.hcTrayIn .tfTrayHead{justify-content:flex-start;gap:12.8px}#app .tfEditTray.hcTrayIn .tfTrayHead>:last-child:not(.activityTitle){margin-left:auto}}.hcHeTabBody{display:flex;flex-direction:column;gap:8px}.hcHomeTray .hcTrayTabs{margin:0 0 8px}#homeView .grid.tfStack{grid-auto-rows:1px;row-gap:0}#homeView .grid.tfStack>*{align-self:start}.tfTrayPop{position:fixed;z-index:260;right:calc(min(608px,100vw - 56px) + 12px);width:300px;max-width:calc(100vw - 80px);display:grid;gap:2px;padding:10px!important;background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfTrayPop[hidden]{display:none}.tfTrayPopTitle{padding:4px 8px 8px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfTrayPopRow{display:flex;align-items:center;gap:12px;min-height:var(--tile-min);padding:0 8px}.tfTrayPopRow .tfIcon{background-color:var(--hc-icon)}.tfTrayPopName{flex:1;min-width:0;font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app .tfMoreBackdrop:not(.wide) .tfMore{height:min(600px,85dvh)}#app .tfMoreBackdrop:not(.wide) .tfMorePages{flex:1 1 auto;min-height:0;height:auto!important;align-items:stretch}#app .tfMoreBackdrop:not(.wide) .tfMorePage{overflow-y:auto;overscroll-behavior:contain;scrollbar-width:none}#app .tfMoreBackdrop:not(.wide) .tfMorePage[aria-label=Control]>:first-child{margin-top:auto}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace{flex:1 1 auto;height:auto;min-height:224px}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill{min-height:0;container-type:size}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill>.tfCoverArt{width:min(100%,100cqh);height:auto}.tfMorePage[aria-label=Control]>:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink)+:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink){margin-top:14px}.tfMoreSwitch{display:flex;align-items:center;justify-content:center;min-height:0;padding:0;border-radius:0;background:none}.tfMoreSwitch .tfIcon{width:min(240px,100%);height:min(240px,100%);aspect-ratio:1;min-height:0;border:0;padding:0;border-radius:40%;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer;--mdc-icon-size:204px}.tfMoreSwitch.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreSwitch.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}@media (max-width:620px){#app .tfMoreBackdrop{place-items:end center;padding:0 16px max(16px,env(safe-area-inset-bottom,0px))}#app .tfMoreBackdrop .tfMorePair{width:100%;max-height:85dvh}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){width:100%;border-radius:34px;box-shadow:inset 0 0 0 1px var(--line),0 10px 30px #00000047}#app .tfMoreBackdrop .tfMore{padding-top:10px;outline:none}#app .tfMoreBackdrop .tfMore:before{content:"";display:block;position:sticky;top:10px;z-index:2;flex:none;width:36px;height:5px;margin:0 auto;border-radius:3px;background:var(--line)}#app .tfMoreBackdrop .tfMore [data-more-close]{display:none}}#app .tfMoreBackdrop:not(.wide) .tfMore{height:min(604.4px,calc(100dvh - 32px))}#app .tfMoreBackdrop:not(.wide) .tfMorePages{transition:none}#app .tfMoreBackdrop:not(.wide) .tfMorePop>.tfMorePage:not([aria-label=Info]){display:flex;flex-direction:column;gap:14px;overflow:hidden}#app .tfMoreBackdrop:not(.wide) .tfMorePop>.tfMorePage>.tfMoreSpace{flex:1 0 224px;min-height:224px;margin-top:0}.tfMoreCtl{display:flex;flex-direction:column;gap:14px;flex:0 1 auto;min-height:0;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:none}.tfMoreCtl::-webkit-scrollbar{display:none}.tfMoreCtl:empty{display:none}#app .tfMoreBackdrop:not(.wide) .tfMorePages{margin:-14px;padding:14px;gap:28px;scroll-padding-inline:14px}#app .tfMoreBackdrop:not(.wide) .tfMorePop>.tfMorePage:not([aria-label=Info]){overflow:visible;min-height:0}#app .tfMoreBackdrop:not(.wide) :is(.tfMorePages:not(.tfMorePop)>.tfMorePage,.tfMorePop>.tfMorePage[aria-label=Info]){margin:-14px;padding:14px}.tfMoreCtl{margin:-14px;padding:14px}.tfMoreSwap{display:grid}.tfMoreSwap>*{grid-area:1/1}#app .tfMoreSwap>.tfBar{transition:opacity .26s cubic-bezier(.2,0,0,1),translate .32s cubic-bezier(.34,1.2,.64,1),visibility .32s,box-shadow var(--ab-out) var(--ab-ease),transform var(--ab-out) var(--ab-ease)}.tfMorePage[data-mode=colour] .tfMoreSwap>:not(.hue){opacity:0;translate:28px 0;visibility:hidden;pointer-events:none}.tfMorePage:not([data-mode=colour]) .tfMoreSwap>.hue{opacity:0;translate:-28px 0;visibility:hidden;pointer-events:none}@media (prefers-reduced-motion:reduce){#app .tfMoreSwap>.tfBar{transition:none}}#app .tfMorePages.tfMoreHold{overflow-x:hidden}.tfMoreCtl>*{flex:none}.tfMoreField{display:flex;flex-direction:column;gap:6px}.tfMoreLabel{color:var(--muted);font:400 14px/20px var(--font)}.tfMoreRange{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}@media (max-width:620px){.tfMoreRange{grid-template-columns:1fr;gap:14px}}.tfPopBar{box-shadow:var(--hc-hair-all)}.tfPopBar i{overflow:visible}.tfPopBar .tfBarVal{position:absolute;right:14px;top:50%;translate:0 -50%;color:#26221e;font:600 15px/20px var(--font-tile);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.tfPopBar .tfBarVal.mid{left:50%;right:auto;translate:-50% -50%;z-index:1}.tfPopBar .tfBarIcon{position:absolute;left:13px;top:12px;width:22px;height:22px;color:#26221e;pointer-events:none;--mdc-icon-size:22px}.tfPopBar .tfBarIcon>*{width:22px;height:22px}.tfPopBar.fan i{background:linear-gradient(90deg,#4dd4ec,#00b2d6)}.tfPopBar.valve i{background:linear-gradient(90deg,#4aa8ff,#1a7fe6)}.tfPopBar.tiltp i{background:linear-gradient(90deg,#c9a7ef,#8e5cd9)}.tfPopBar.ctf{background:linear-gradient(90deg,#d7e7ff,#fff7ee 45%,#ffc247 75%,#fa0)}.tfPopBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfMoreSwitch .tfIcon{width:min(224px,100%);height:min(224px,100%);--mdc-icon-size:190px}.tfMoreSwitch:not(.on) .tfIcon{box-shadow:var(--hc-hair-all);color:var(--text)}.tfMorePad{--tf-dac-pad:337px;--tf-dac-max:none}.tfAction.tfDac{--tf-dac-max:none}.tfMoreSpace.tfMoreArt{justify-content:center;align-items:center;padding:8px;container-type:size}.tfMoreArt>.tfCoverArt{width:min(100%,100cqh);height:auto;max-width:none}#app .tfMoreCode{width:100%;height:46px;padding:0 16px;border:0;border-radius:16px!important;background:var(--tile);color:var(--text);box-shadow:var(--hc-hair-all);font:400 16px/20px var(--font);box-sizing:border-box}#app .tfMoreCode::placeholder{color:var(--muted);opacity:1}#app .tfMoreCode:focus{outline:2px solid var(--primary);outline-offset:-1px}.tfMoreSpace.tfMoreKeypad{justify-content:flex-start;gap:8px;padding:12px}.tfMoreKeypad .tfMoreCode{flex:none;background:var(--card)}.tfKeypad{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.tfKeypad button{height:46px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);font:500 18px/1 var(--font-tile);cursor:pointer}.tfKeypad button[data-key=clear]{color:var(--muted);font:400 14px/1 var(--font)}.tfKeypad svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfKeypad button:active{scale:.96}@media (max-width:620px){.tfMorePop .tfSeg:has(>:nth-child(5)){flex-wrap:wrap;height:auto}.tfMorePop .tfSeg:has(>:nth-child(5)) button{flex:0 0 auto;height:38px;padding:0 14px}}`, th = `.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:14px;aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:18px;border-radius:28px;overflow:hidden}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbChip{width:40px;height:40px;border-radius:16px}.wbSquare .wbName{font-size:14px;line-height:1.4}.wbSquare .wbSub{font-size:16px}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:10px}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846;border-radius:34px}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:1;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);fill-opacity:.14}.wbChart .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:24px minmax(0,1fr) 22px;grid-template-areas:". sun" "y plot" ". x";column-gap:8px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wb[data-style=smooth] :is(.wbWx,.wbSky):after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;border-radius:inherit;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1.3 0 0 0 -.15 1.3 0 0 0 -.15 1.3 0 0 0 -.15 0 0 0 0 1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:140px 140px;mix-blend-mode:overlay;opacity:.3}.wbBaseRows{display:flex;flex-direction:column;gap:4px;width:100%}.wbBaseRow{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbBaseRow>span:last-child{color:var(--text);white-space:nowrap}.wbBaseRow>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRadar{position:relative;flex:1;align-self:stretch;min-height:80px;border-radius:var(--r-inner);overflow:hidden;background-color:var(--tile);background-image:linear-gradient(color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px);background-size:24px 24px;background-position:center}.wbRadarRing{position:absolute;left:50%;top:50%;width:64%;aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 20%,transparent)}.wbRadarRing:after{content:"";position:absolute;top:25%;right:25%;bottom:25%;left:25%;border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 14%,transparent)}.wbRadarHome{position:absolute;left:50%;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 3px var(--tile)}.wbRadarMap,.wbRadarCam{background-image:none}.wbRadarLayer{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden}.wbRadarLayer img{position:absolute;width:256px;height:256px;max-width:none;pointer-events:none}.wbRadarLayer[hidden]{display:none}.wbRadarRain{opacity:.85}.wbRadarMap .wbRadarHome{z-index:2}.wbRadarTime,.wbRadarCredit{position:absolute;z-index:2;white-space:nowrap}.wbRadarTime{left:8px;bottom:6px;padding:1px 6px;border-radius:8px;background:color-mix(in srgb,var(--tile) 78%,transparent);color:var(--text);font:600 11px/16px var(--font-tile)}.wbRadarTime:empty{display:none}.wbRadarCredit{right:6px;top:4px;max-width:calc(100% - 12px);overflow:hidden;text-overflow:ellipsis;color:var(--muted);font:400 9px/12px var(--font)}.wbRadarNote{position:absolute;top:0;right:0;bottom:0;left:0;z-index:2;display:grid;place-items:center;padding:0 12px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbRadarCam img{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;object-fit:cover}.wbWx.wbLineIcon{display:grid;place-items:center;background:var(--tile);color:var(--text)}.wbWx.wbLineIcon>svg{width:64%;height:64%}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:18px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:14px 16px 12px 12px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbAsNow{display:none}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}.wbNextHours{display:none;justify-content:space-between;align-items:center;gap:8px;min-width:0}.wbHour{display:flex;flex-direction:column;align-items:center;gap:8px;min-width:0}.wbHourTime{color:var(--muted);font:400 14px/20px var(--font);white-space:nowrap}.wbHourTemp{font:400 18px/20px var(--font-tile);white-space:nowrap}.wbHour .wbWx.wbS40{width:40px;height:40px;border-radius:16px}.wbSummary{position:relative;flex:1 1 0;min-height:0;margin-top:-12px;container:wbsum/size}.wbSummaryText{position:absolute;top:12px;left:0;right:0;margin:0;color:var(--text);font:400 16px/22px var(--font);display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}@container wbsum (height < 56px){.wbSummaryText{-webkit-line-clamp:1}}@container wbsum (height < 34px){.wbSummaryText{display:none}}@container wb-card (width < 480px){.wbColumn .wbWx.wbS60{width:48px;height:48px;border-radius:16px}}@container wb-card (width < 400px){.wbCard.wbWeather{gap:16px;padding:18px 18px 10px}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumn .wbWx.wbS60{width:40px;height:40px;border-radius:14px}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbStripScroll.wbPaged{container-type:inline-size;scroll-snap-type:x mandatory;overscroll-behavior-x:contain}.wbStripScroll.wbPaged.wbHeld{scroll-snap-type:none}.wbPaged .wbStrip{position:relative;min-width:0;padding:0}.wbSnap{position:absolute;top:0;width:1px;height:1px;scroll-snap-align:start;pointer-events:none}.wbMark.wbLast{align-items:flex-end;transform:translate(-100%)}.wbPaged .wbTimes .wbMark.wbFirst{font:400 14px/20px var(--font)}.wbPaged .wbTimes .wbMark.wbNowMark{font:600 14px/20px var(--font-tile)}.wbSky .wbPast{position:absolute;top:0;bottom:0;left:0;background:var(--card);opacity:.45;pointer-events:none}.wbSky .wbNowLine{position:absolute;top:0;bottom:0;width:2px;margin-left:-1px;background:var(--text);opacity:.55;pointer-events:none}.wbSky.wbLineSky{background:var(--tile);color:var(--text)}.wbLineArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbLineArt .wbLineArc{fill:none;stroke:var(--text);stroke-width:1.5;stroke-linejoin:round;vector-effect:non-scaling-stroke;opacity:.7}.wbLineArt .wbLineHorizon{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.35}.wbLineArt .wbLineNight{fill:var(--text);opacity:.07}.wbLineArt .wbLineEdge{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.3}.wbLineTime{position:absolute;top:calc(80% + 4px);transform:translate(-50%);color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.wbLineNow{position:absolute;width:26px;height:26px;transform:translate(-50%,-50%);border-radius:50%;background:var(--tile);pointer-events:none}.wbLineNow>svg,.wbLineGlyph>svg{display:block;width:100%;height:100%}.wbLineGlyph{position:absolute;top:calc(50% - 14px);width:28px;height:28px;transform:translate(-50%);pointer-events:none}.wbLineGlyph.wbFirst{transform:none}.wbLineGlyph.wbLast{transform:translate(-100%)}.wbSky .wbMidnight{position:absolute;top:0;bottom:0;width:0;border-left:1.5px dashed var(--text);opacity:.5;pointer-events:none}.wbDays{position:absolute;top:36px;left:0;z-index:1;display:flex;pointer-events:none}.wbDaySpan{flex:none;min-width:0}.wbDayName{position:sticky;left:8px;margin-left:8px;height:26px;min-height:0;padding:0 10px;border:0;background:color-mix(in srgb,var(--card) 82%,transparent);color:var(--text);font:600 13px/26px var(--font-tile);white-space:nowrap;cursor:pointer;pointer-events:auto}.wb .wbDayName{border-radius:13px!important;font-family:var(--font-tile)!important}.wbViews button{padding:2px 10px;font-size:13px}.wbBars .wbDayBars{flex:1 1 0;min-height:160px;display:flex;flex-direction:column;padding:0 18px;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin}.wbBars.wbTabbed .wbDayBars{min-height:206px}.wbDayBar{flex:1 0 auto;display:grid;grid-template-columns:minmax(56px,auto) 40px 36px minmax(0,1fr) 36px;align-items:center;column-gap:12px;min-height:48px;box-shadow:inset 0 -.4px 0 var(--line)}.wbDayBar:last-child{box-shadow:none}.wbRangeDay{color:var(--text);font:600 14px/20px var(--font-tile);white-space:nowrap}.wbRangeLo{color:var(--muted);text-align:right;font:400 16px/20px var(--font);font-variant-numeric:tabular-nums}.wbRangeHi{color:var(--text);text-align:right;font:400 16px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbRangeTrack{position:relative;height:6px;border-radius:3px;background:var(--tile)}.wbRangeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:3px}.wbRangeNow{position:absolute;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:#fff;box-shadow:0 0 0 2px var(--card)}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbBars .wbDayBars{padding:0 8px;min-height:380px}.wbBars.wbTabbed .wbDayBars{min-height:426px}.wbDayBar{column-gap:8px}.wbStripScroll{min-height:380px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:16px;overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbSunTile .wbZone{display:block}.wbSunZone{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff;transition:background 1s ease}.wbSunTrack{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbSunBand{fill:#fff;fill-opacity:.1}.wbSunBand.wbSunDay{fill-opacity:.14}.wbSunBand.wbSunDone{fill-opacity:.85}.wbSunDot{fill:#ffd84a}.wbSunDot.wbSunNight{fill:#9aa3c7}.wbSunCount{position:absolute;top:22px;right:22px;bottom:22px;left:22px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;padding-bottom:14px}.wbSunLeft{font:500 clamp(28px,calc(16cqw * var(--wb-k,1)),36px)/1.1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums;white-space:nowrap}.wbSunWord{font:400 13px/18px var(--font);opacity:.85}.wbSunAt{position:absolute;bottom:32px;font:500 12px/16px var(--font);opacity:.85;font-variant-numeric:tabular-nums}.wbSunRise{left:32px}.wbSunSet{right:32px}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}.wbMoonCaption{gap:8px}.wbMoonCaption span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbMoonCaption span:last-child{flex:none}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbSea{position:relative;flex:1;min-height:0;border-radius:16px;overflow:hidden;--wb-sea-inset:clamp(8.88px,calc(4.76cqw * var(--wb-k,1)),12px)}.wbSeaArt{position:absolute;top:0;right:0;bottom:0;left:0;display:block;width:100%;height:100%;image-rendering:pixelated}.wbSeaFact{position:absolute;top:clamp(7px,calc(3.97cqw * var(--wb-k,1)),10px);inset-inline:var(--wb-sea-inset);color:#26221e;font:600 clamp(9.44px,calc(5.47cqw * var(--wb-k,1)),13.78px)/1.23 var(--font-tile)}.wbSeaValue{position:absolute;bottom:var(--wb-sea-inset);inset-inline-start:var(--wb-sea-inset);color:#fff;text-shadow:0 0 2px rgba(0,0,0,.6),0 1px 3px rgba(0,0,0,.5)}.wbSeaValue .wbUnitV{color:inherit}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbTrend{position:relative;width:100%;height:100%;min-height:0}.wbTrendPlot{position:absolute;top:22px;right:0;bottom:24px;left:0}.wbTrendPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbTrendLine{fill:none;stroke:var(--text);stroke-width:2;stroke-linejoin:round;stroke-linecap:round;opacity:.8}.wbTrendDot{position:absolute;width:7px;height:7px;margin:-3.5px 0 0 -3.5px;border-radius:50%;background:var(--card);box-shadow:0 0 0 2px var(--text)}.wbTrendDot.wbToday{width:11px;height:11px;margin:-5.5px 0 0 -5.5px;background:var(--primary);box-shadow:0 0 0 3px var(--card)}.wbAvgValue{position:absolute;transform:translate(-50%,calc(-100% - 8px));color:var(--muted);font:400 10px/1 var(--font-tile);white-space:nowrap}.wbAvgValue.wbToday{color:var(--text);font-size:12px;font-weight:600}.wbTrendAvg{position:absolute;right:0;transform:translateY(4px);color:var(--muted);font:400 10px/1 var(--font-tile)}.wbTrendDays{position:absolute;left:0;right:0;bottom:0;height:16px}.wbAvgDay{position:absolute;bottom:0;transform:translate(-50%);color:var(--muted);font:400 11px/16px var(--font-tile)}.wbAvgDay.wbToday{color:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}.wbZoned{gap:14px}.wbZone{position:relative;flex:none;height:198px;display:flex;align-items:center;justify-content:center;border-radius:16px;overflow:hidden}.wbCallouts{display:none;flex-direction:column;gap:4px;margin-top:-6px}.wbCallout{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbCallout>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbCallout>span:last-child{flex:none;color:var(--text);white-space:nowrap}.wbZone>.wbSunSky{flex:1;align-self:stretch;border-radius:0}.wbZone>.wbMoonBox{flex:none;height:150px}.wbBase .wbZone{align-items:flex-end;justify-content:flex-start}.wbZone>.wbTapeRow{align-self:stretch;height:100%}.wbItem[data-xl] .wbCallouts{display:flex}.wbUv .wbZone{display:block}.wbUvArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbUvBig{position:absolute;right:0;bottom:0;display:flex;flex-direction:column;align-items:flex-end}.wbUvNum{font:500 64px/.9 var(--font-tile);letter-spacing:-.03em;color:var(--text);font-variant-numeric:tabular-nums}.wbUvWord{margin-top:6px;font:400 14px/20px var(--font);color:var(--muted)}.wbAqSmile .wbZone{display:block}.wbAqFill{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff}.wbAqFace{position:absolute;left:12px;top:12px;width:min(140px,calc(100% - 60px));height:auto;aspect-ratio:1;fill:none;stroke:currentColor;stroke-width:3.4;stroke-linecap:round;stroke-linejoin:round}.wbAqFace .wbAqEyes{stroke-width:5}.wbAqBig{position:absolute;right:14px;bottom:12px;display:flex;flex-direction:column;align-items:flex-end}.wbAqNum{font:500 56px/.9 var(--font-tile);letter-spacing:-.03em;font-variant-numeric:tabular-nums}.wbAqUnit{margin-top:4px;font:500 14px/20px var(--font)}.wbPollenAir{position:absolute;top:0;right:0;bottom:62px;left:0;overflow:hidden;pointer-events:none}.wbFloat{position:absolute;left:-12%;animation:wbFloat linear infinite}.wbBob{display:block;animation:wbBob ease-in-out infinite alternate}@keyframes wbFloat{0%{left:-12%}to{left:106%}}@keyframes wbBob{0%{transform:translateY(-6px) rotate(-14deg)}to{transform:translateY(8px) rotate(16deg)}}.wbFloat svg{display:block}.wbSeed svg{width:calc(20px * var(--s));height:calc(28px * var(--s))}.wbGrain svg{width:calc(10px * var(--s));height:calc(10px * var(--s))}.wbStem svg{width:calc(9px * var(--s));height:calc(26px * var(--s))}.wbSeed{color:var(--text);opacity:.7}.wbGrain{color:#e9c46a;opacity:.85}.wbStem{color:#a3b18a;opacity:.75}#app.light .wbGrain{color:#c99a1e}#app.light .wbStem{color:#7d8c5f}@media (prefers-reduced-motion:reduce){.wbFloat,.wbBob{animation:none}.wbFloat{left:var(--x)}}.wbPush{display:block;transition:transform .35s cubic-bezier(.2,.8,.3,1)}.wbCallout.wbAdvice>span:first-child{color:var(--text)}.wbCard.wbSquare.wbGraphCard{height:100%;min-height:0}.wbGraphCard .wbHead .wbBack{margin:-4px -6px 0 auto}.wbGraphCard .wbRangeBtn{align-self:flex-start;display:inline-flex;align-items:center;gap:6px;max-width:100%;height:32px;padding:0 8px 0 10px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:600 12px/16px var(--font-tile);cursor:pointer}.wb button.wbRangeBtn{border-radius:12px!important}.wbRangeBtn>span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRangeBtn .wbIcon{flex:none;width:16px;height:16px;fill:currentColor}.wbRangeBtn[aria-expanded=true]{background:var(--bright);color:var(--on-bright)}.wbItem:has(.wbRangePick){position:relative;z-index:30}.wbRangePick{position:absolute;top:116px;left:18px;z-index:30;display:flex;flex-direction:column;gap:12px;width:248px;box-sizing:border-box;padding:12px;border-radius:24px;background:var(--card);box-shadow:var(--hc-hair-all),0 18px 40px #00000059}.wbRangePick.wbPickRight{left:auto;right:18px}.wbRangePresets{display:flex;flex-direction:column;gap:2px}.wb .wbRangePreset{height:32px;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--text);font:400 14px/20px var(--font);text-align:left;cursor:pointer}.wb .wbRangePreset:hover{background:var(--tile)}.wb .wbRangePreset[aria-pressed=true]{background:var(--bright);color:var(--on-bright);font-weight:600}.wbRangeDates{display:grid;grid-template-columns:1fr 1fr;gap:8px;padding-top:12px;box-shadow:inset 0 .4px 0 var(--line)}.wbRangeDates label{display:grid;gap:4px;min-width:0;color:var(--muted);font:400 12px/16px var(--font)}.wbRangeDates input{width:100%;min-width:0;height:32px;box-sizing:border-box;padding:0 6px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:400 12px/16px var(--font);color-scheme:inherit}.wb .wbRangeApply{height:32px;padding:0 14px;border:0;border-radius:999px!important;background:var(--bright);color:var(--on-bright);font:600 12px/16px var(--font-tile);cursor:pointer}.wbGraphCard .wbGraph{flex:1;height:auto;min-height:0}.wb.wbPopup{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073;overscroll-behavior:contain;container-type:normal}.wb.wbPopup[hidden]{display:none}.wbPopupBox{position:relative;width:520px;max-width:100%}.wbPopup .wbCard.wbSquare.wbGraphCard{height:auto;aspect-ratio:auto;box-shadow:var(--hc-hair-all)}.wbPopup .wbGraphCard .wbGraph{flex:none;height:auto}@media (max-width:620px){.wb.wbPopup{place-items:end stretch;padding:0}.wbPopupBox{width:100%}.wbPopup .wbCard.wbSquare.wbGraphCard{border-radius:28px 28px 0 0}}`, eh = '#app .mvPv{position:relative;transform:perspective(var(--pv-persp)) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) scale(var(--sc,1));transition:transform var(--pv-ret) var(--pv-ease)}#app .mvPv.mvMoving{transition:transform 70ms linear}#app .mvPv:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;opacity:0;mix-blend-mode:soft-light;background:radial-gradient(circle at var(--mx,50%) var(--my,50%),rgba(255,255,255,var(--pv-shine)),transparent var(--pv-size));transition:opacity var(--pv-ret) ease}#app .mvPv.mvLit:after{opacity:1}#app .tfBar{--mv-c:var(--light-soft,var(--primary));transform-origin:center;transition:box-shadow var(--ab-out) var(--ab-ease),transform var(--ab-out) var(--ab-ease)}#app .tfBar.mvHover{box-shadow:0 0 var(--ab-blur) var(--ab-spread) color-mix(in srgb,var(--mv-c) var(--ab-str),transparent);transition-duration:var(--ab-in)}#app .tfBar.mvHold{box-shadow:0 0 var(--ab-blur2) var(--ab-spread2) color-mix(in srgb,var(--mv-c) var(--ab-str2),transparent);transform:var(--ab-grow);transition-duration:var(--ab-in)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>:is(svg,ha-icon,ha-state-icon,span){transition:scale var(--ih-dur) var(--ih-ease)}@media (hover:hover){#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-s)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover:before{opacity:1}}:where(#app button.tfIcon,#app .tfBack,#app .tfEditChip,#app .tfTrayBtn,#app [data-wb=graph-close]){position:relative}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;background:color-mix(in srgb,currentColor var(--ih-tint),transparent);opacity:0;transition:opacity var(--ih-dur) var(--ih-ease)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):active>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-p)}#app .mvSegInd{position:absolute;z-index:0;pointer-events:none}#app .mvSegMoving>button{position:relative;z-index:1;background-color:transparent!important;box-shadow:none!important;transition:none!important}#app .tfMoreBackdrop{-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}#app .toast.tfToast{min-height:58px;box-sizing:border-box;padding:9px 18px 9px 9px;gap:14px;border-radius:29px;font-size:18px;line-height:1.2}#app .toast .mvTick{display:grid;place-items:center;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--mv-ok);color:#fff}#app .toast .mvTick svg{width:26px;height:26px;fill:none;stroke:currentColor;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}#app .toast .mvToastText{font-weight:600}#app .toast .toastAction{font-size:16px;margin-left:2px}#app .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}#app{--ol-l:68%;--mv-ok:#4cc38a}#app.light{--ol-l:48%;--mv-ok:#1f7a4d}#app .tfAreaPanel:has(>.mvEdge){isolation:isolate;position:relative}#app .tfRoomTile.tfBoardItem:has(>.mvEdge){isolation:isolate}#app .mvEdge,#app .mvEdgeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity var(--ol-in) ease-out}#app .mvEdgeFill{z-index:-1;background:hsl(var(--ol-h) 97% var(--ol-l));mix-blend-mode:soft-light;opacity:clamp(0,calc(var(--ol-fill) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-fill));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%)}#app .mvEdge{z-index:5}#app .mvEdge:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l));opacity:clamp(0,calc(var(--ol-border) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-border));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%));mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%))}#app .mvEdge>i{position:absolute;top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;border-radius:inherit;mix-blend-mode:plus-lighter;opacity:clamp(0,calc(var(--ol-glow) * (var(--edge-proximity,0) - var(--ol-esens)) / (100 - var(--ol-esens))),var(--ol-glow));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}#app .mvEdge>i:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;--s:var(--ol-size);box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l) / 60%),inset 0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),inset 0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),inset 0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(22.4px*var(--s)) calc(1.6px*var(--s)) hsl(var(--ol-h) 97% var(--ol-l) / 10%)}#app :not(.mvLitEdge)>:is(.mvEdge,.mvEdgeFill){opacity:0;transition:opacity var(--ol-out) ease-out}@media (prefers-reduced-motion:reduce){#app .mvPv{transform:none!important}#app .mvPv:after{display:none}#app .tfBar.mvHold{transform:none}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>*{scale:none!important}}#app .tfBoardItem.mvDrag{scale:none}#app.tfEditing.tfBoardReady .tfBoardItem:not(.tfDragging){transition:left .42s cubic-bezier(.34,1.46,.64,1),top .42s cubic-bezier(.34,1.46,.64,1),height .42s cubic-bezier(.34,1.46,.64,1)}', ah = `<main id="app"><div class="shell">
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
`, Md = "homecore-theme", oh = {
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
  const w = { home: g("homeView"), settings: g("settingsView") }, C = g("homeNav"), j = g("settingsNav");
  function k(et) {
    Object.entries(w).forEach(([at, X]) => X.classList.toggle("active", at === et)), C.classList.toggle("active", et === "home"), j.classList.toggle("active", et === "settings");
  }
  C.addEventListener("click", () => k("home")), j.addEventListener("click", () => k("settings")), g("settingsBack").addEventListener("click", () => k("home"));
  function L(et) {
    const at = et === "light";
    n.querySelectorAll(".themeBtn").forEach((X) => X.classList.toggle("active", X.dataset.theme === et)), v.classList.toggle("light", at), r(at);
  }
  L(Sd.get(Md) === "light" ? "light" : "dark"), n.querySelectorAll(".themeBtn").forEach((et) => et.addEventListener("click", () => {
    L(et.dataset.theme), Sd.set(Md, et.dataset.theme);
  }));
  const I = g("tvNav");
  d || (I.hidden = !0), I.addEventListener("click", () => p());
  let z;
  function J(et) {
    const at = g("toast");
    at && (at.textContent = et, at.classList.add("show"), clearTimeout(z), z = setTimeout(() => at.classList.remove("show"), 2600));
  }
  return { showView: k, toast: J };
}
const ih = /* @__PURE__ */ new Set(["roaming", "test_area"]), sh = {
  living_room: { climate: !0, cover: ["Curtains", "curtain", 62], temperature: 20.5, humidity: 44, motion: "Living room motion", plant: ["Monstera", 32, 4200, 21.4, 580] },
  kitchen: { temperature: 21.2, humidity: 48, door: "Back door", plant: ["Basil", 55, 900, 22.1, 910] },
  balcony: { solar: !0, door: "Balcony door", doorOpen: !0, valve: "Watering", valvePos: ["Garden valve", 40], plant: ["Tomatoes", 61, 18500, 14.2, 1240] },
  bedroom: { cover: ["Roller blind", "shade", 0], humidifier: !0, temperature: 18.9, humidity: 38, window: "Bedroom window", fan: ["Ceiling fan", 60] },
  office: { cover: ["Blinds", "blind", 60, 45], vacuum: !0, temperature: 21.8, humidity: 41, plant: ["Pothos", 47, 2600, 21.6, 640] },
  bathroom: { temperature: 22.4, humidity: 62, fan: ["Extractor fan"], waterHeater: !0, valvePos: ["Water valve", null] }
}, En = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, ye = "made_up_", Ya = (n) => {
  var r;
  return (r = String(n).split(".")[1]) == null ? void 0 : r.startsWith(ye);
}, Ln = (n) => n.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function $l(n) {
  const r = n.getHours() + n.getMinutes() / 60, d = Math.max(0, Math.sin((r - 7) / 13 * Math.PI));
  return 2.4 * d * d;
}
function lh(n) {
  const r = new Date(n.getFullYear(), n.getMonth(), n.getDate());
  let d = 0;
  for (let p = +r; p < +n; p += 10 * 60 * 1e3) d += $l(new Date(p)) / 6;
  return d;
}
function _d(n = /* @__PURE__ */ new Date()) {
  const r = [];
  for (let d = 0; d <= 96; d++) {
    const p = +n - (96 - d) * 15 * 60 * 1e3;
    r.push([p, $l(new Date(p))]);
  }
  return r;
}
function ch({ onChange: n }) {
  const r = {}, d = {}, p = (X, N, nt, ct) => {
    r[X] = { entity_id: X, state: nt, attributes: ct, last_changed: new Date(Date.now() - 18e6).toISOString() }, d[X] = N;
  }, g = (X, N, nt) => {
    const ct = r[X], wt = N ?? ct.state;
    r[X] = { ...ct, state: wt, attributes: { ...ct.attributes, ...nt }, last_changed: wt === ct.state ? ct.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, v = (X, N, nt, ct) => p("binary_sensor." + ye + (X ? X + "_" : "") + Ln(N), X, ct ? "on" : "off", { friendly_name: N, device_class: nt });
  Object.entries(sh).forEach(([X, N]) => {
    if (N.temperature != null && p("sensor." + ye + X + "_temperature", X, String(N.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), N.humidity != null && p("sensor." + ye + X + "_humidity", X, String(N.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), N.vacuum && p("vacuum." + ye + "robot", X, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), N.climate && p("climate." + ye + X, X, "heat", {
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
      p("fan." + ye + X + "_" + Ln(nt), X, "on", ct != null ? { friendly_name: nt, percentage: ct, percentage_step: 10, oscillating: !0, direction: "forward", supported_features: 55 } : { friendly_name: nt, supported_features: 48 });
    }
    if (N.waterHeater && p("water_heater." + ye + X, X, "eco", { friendly_name: "Water heater", current_temperature: 55, temperature: 60, min_temp: 40, max_temp: 75, target_temp_step: 1, operation_mode: "eco", operation_list: ["off", "eco", "electric", "gas"], away_mode: "off" }), N.valvePos) {
      const [nt, ct] = N.valvePos;
      p("valve." + ye + X + "_" + Ln(nt), X, ct == null || ct ? "open" : "closed", { friendly_name: nt, device_class: "water", supported_features: 3 | (ct == null ? 0 : 12), ...ct == null ? {} : { current_position: ct } });
    }
    if (N.garage && p("cover." + ye + X + "_" + Ln(N.garage), X, "closed", { friendly_name: N.garage, device_class: "garage", supported_features: 3 }), N.cover) {
      const [nt, ct, wt, it] = N.cover;
      p("cover." + ye + X + "_" + Ln(nt), X, wt ? "open" : "closed", { friendly_name: nt, device_class: ct, current_position: wt, ...it != null ? { current_tilt_position: it } : {} });
    }
    if (N.humidifier && p("humidifier." + ye + X, X, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: N.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), N.solar && (p("sensor." + ye + X + "_solar_power", X, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), p("sensor." + ye + X + "_solar_today", X, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), N.valve && p("valve." + ye + X + "_" + Ln(N.valve), X, "closed", { friendly_name: N.valve, device_class: "water" }), N.door && v(X, N.door, "door", N.doorOpen), N.window && v(X, N.window, "window", !1), N.motion && v(X, N.motion, "motion", !1), N.plant) {
      const [nt, ct, wt, it, Z] = N.plant, U = ye + Ln(nt), H = (Rt, lt, G, qt, V) => p("sensor." + U + "_" + Rt, X, String(G), { friendly_name: lt, device_class: V, state_class: "measurement", unit_of_measurement: qt, plant_low: G < En[Rt][0], plant_high: G > En[Rt][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[Rt] });
      H("moisture", "Moisture", ct, "%", "moisture"), H("light", "Light", wt, "lx", "illuminance"), H("temperature", "Temperature", it, "°C", "temperature"), H("fertility", "Fertility", Z, "µS/cm", "conductivity");
      const yt = Object.entries({ moisture: ct, light: wt, temperature: it, fertility: Z }).filter(([Rt, lt]) => lt < En[Rt][0] || lt > En[Rt][1]).map(([Rt, lt]) => Rt + (lt < En[Rt][0] ? " low" : " high"));
      p("plant." + U, X, yt.length ? "problem" : "ok", { friendly_name: nt, moisture: ct, brightness: wt, temperature: it, conductivity: Z, problem: yt.join(", ") || "none" });
    }
  }), p("alarm_control_panel." + ye + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 39, code_format: "number", code_arm_required: !1, changed_by: "Matt" }), v(null, "Front door", "door", !1), v(null, "Smoke alarm", "smoke", !1), p("sensor." + ye + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const w = {}, C = {};
  let j = null;
  function k() {
    const X = /* @__PURE__ */ new Date();
    Object.keys(r).forEach((N) => {
      N.endsWith("_solar_power") && (r[N] = { ...r[N], state: $l(X).toFixed(2) }), N.endsWith("_solar_today") && (r[N] = { ...r[N], state: lh(X).toFixed(1) });
    });
  }
  k();
  let L = 0;
  function I() {
    let X = !1;
    const N = ++L % 10 === 0, nt = (it, Z, U) => {
      g(it, Z, U), X = !0;
    };
    Object.entries(w).forEach(([it, Z]) => {
      const U = r[it].attributes.current_position, H = U < Z ? Math.min(Z, U + 10) : Math.max(Z, U - 10);
      H === Z && delete w[it], nt(it, H === Z ? H === 0 ? "closed" : "open" : Z > U ? "opening" : "closing", { current_position: H });
    }), Object.entries(C).forEach(([it, Z]) => {
      const U = r[it].attributes.current_tilt_position, H = U < Z ? Math.min(Z, U + 25) : Math.max(Z, U - 25);
      H === Z && delete C[it], nt(it, null, { current_tilt_position: H });
    }), Object.keys(r).filter((it) => it.startsWith("climate.")).forEach((it) => {
      const Z = r[it], U = Z.attributes, H = U.current_temperature, yt = (Z.state === "heat" || Z.state === "auto") && H < U.temperature - 0.05, Rt = (Z.state === "cool" || Z.state === "auto") && H > U.temperature + 0.05, lt = Z.state === "off" ? "off" : yt ? "heating" : Rt ? "cooling" : "idle", G = N ? Math.round((H + (yt ? 0.1 : Rt ? -0.1 : 0)) * 10) / 10 : H;
      (G !== H || lt !== U.hvac_action) && nt(it, null, { current_temperature: G, hvac_action: lt });
    }), Object.keys(r).filter((it) => it.startsWith("humidifier.")).forEach((it) => {
      const Z = r[it], U = Z.attributes, H = U.current_humidity, yt = Z.state === "on" && H < U.humidity, Rt = yt && N ? H + 1 : H, lt = Z.state !== "on" ? "off" : yt ? "humidifying" : "idle";
      if (Rt !== H || lt !== U.action) {
        nt(it, null, { current_humidity: Rt, action: lt });
        const G = "sensor." + ye + d[it] + "_humidity";
        r[G] && nt(G, String(Rt));
      }
    });
    const ct = r["vacuum." + ye + "robot"], wt = ct.attributes;
    ct.state === "cleaning" && N && nt(ct.entity_id, null, { battery_level: Math.max(5, wt.battery_level - 1) }), ct.state === "returning" && nt(ct.entity_id, "docked", {}), ct.state === "docked" && wt.battery_level < 100 && nt(ct.entity_id, null, { battery_level: Math.min(100, wt.battery_level + 2) }), j && Date.now() - j.at > 5e3 && (nt("alarm_control_panel." + ye + "house", "armed_" + j.mode, {}), j = null), X && n();
  }
  const z = setInterval(I, 1e3), J = setInterval(() => {
    k(), n();
  }, 60 * 1e3);
  function et(X, N, nt) {
    const ct = nt == null ? void 0 : nt.entity_id;
    if (!r[ct]) return !1;
    const wt = r[ct], it = wt.attributes, Z = (U, H) => g(ct, U, H);
    if (X === "climate" && (N === "set_temperature" && nt.temperature != null && Z(null, { temperature: Math.max(it.min_temp, Math.min(it.max_temp, nt.temperature)) }), N === "set_hvac_mode" && Z(nt.hvac_mode, nt.hvac_mode === "off" ? { hvac_action: "off" } : {}), N === "toggle" && Z(wt.state === "off" ? "heat" : "off", wt.state === "off" ? {} : { hvac_action: "off" }), N === "set_temperature" && nt.target_temp_low != null && Z(null, { target_temp_low: nt.target_temp_low, target_temp_high: nt.target_temp_high }), N === "set_fan_mode" && Z(null, { fan_mode: nt.fan_mode }), N === "set_swing_mode" && Z(null, { swing_mode: nt.swing_mode }), N === "set_preset_mode" && Z(null, { preset_mode: nt.preset_mode }), N === "set_humidity" && Z(null, { humidity: Math.max(it.min_humidity, Math.min(it.max_humidity, nt.humidity)) })), X === "fan" && (N === "set_percentage" && Z(nt.percentage > 0 ? "on" : "off", { percentage: nt.percentage }), N === "oscillate" && Z(null, { oscillating: nt.oscillating }), N === "set_direction" && Z(null, { direction: nt.direction }), (N === "turn_on" || N === "turn_off" || N === "toggle") && Z(N === "turn_on" || N === "toggle" && wt.state !== "on" ? "on" : "off")), X === "water_heater" && (N === "set_temperature" && Z(null, { temperature: Math.max(it.min_temp, Math.min(it.max_temp, nt.temperature)) }), N === "set_operation_mode" && Z(nt.operation_mode, { operation_mode: nt.operation_mode }), N === "set_away_mode" && Z(null, { away_mode: nt.away_mode ? "on" : "off" }), N === "turn_on" || N === "turn_off" || N === "toggle")) {
      const U = N === "turn_on" || N === "toggle" && wt.state === "off";
      Z(U ? "eco" : "off", { operation_mode: U ? "eco" : "off" });
    }
    if (X === "cover") {
      const U = N === "open_cover" ? 100 : N === "close_cover" ? 0 : N === "set_cover_position" ? nt.position : N === "toggle" ? it.current_position > 0 ? 0 : 100 : null;
      N === "stop_cover" && (delete w[ct], delete C[ct], Z(it.current_position === 0 ? "closed" : "open")), U != null && it.current_position == null ? Z(U > 0 ? "open" : "closed") : U != null && U !== it.current_position && (w[ct] = U, Z(U > it.current_position ? "opening" : "closing"));
      const H = N === "open_cover_tilt" ? 100 : N === "close_cover_tilt" ? 0 : N === "set_cover_tilt_position" ? nt.tilt_position : null;
      N === "stop_cover_tilt" && delete C[ct], H != null && it.current_tilt_position != null && H !== it.current_tilt_position && (C[ct] = H);
    }
    if (X === "humidifier" && (N === "set_humidity" && Z(null, { humidity: Math.max(it.min_humidity, Math.min(it.max_humidity, nt.humidity)) }), N === "set_mode" && Z(null, { mode: nt.mode }), N === "turn_on" || N === "turn_off" || N === "toggle")) {
      const U = N === "turn_on" || N === "toggle" && wt.state !== "on";
      Z(U ? "on" : "off", { action: U ? "idle" : "off" });
    }
    if (X === "vacuum" && (N === "start" && Z("cleaning", { rooms: nt.rooms || it.rooms }), N === "pause" && Z("paused"), N === "return_to_base" && Z("returning", { rooms: [] }), N === "locate" && Z(null, { located: Date.now() }), N === "set_rooms" && Z(null, { rooms: nt.rooms })), X === "valve") {
      const U = N === "open_valve" || N === "toggle" && wt.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(N) && Z(U ? "open" : "closed", it.current_position != null ? { current_position: U ? 100 : 0 } : {}), N === "set_valve_position" && Z(nt.position > 0 ? "open" : "closed", { current_position: nt.position });
    }
    if (X === "alarm_control_panel") {
      N === "alarm_disarm" && (j = null, Z("disarmed", { changed_by: "Matt" }));
      const U = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night", alarm_arm_vacation: "vacation" }[N];
      U && (j = { mode: U, at: Date.now() }, Z("arming", { changed_by: "Matt" }));
    }
    return n(), !0;
  }
  function at(X, { madeUp: N = !0 } = {}) {
    const nt = N ? r : {}, ct = (X == null ? void 0 : X.states) || {}, wt = (X == null ? void 0 : X.entities) || {}, it = (X == null ? void 0 : X.devices) || {}, Z = (ot) => {
      var xt;
      const st = wt[ot];
      return st && (st.area_id || st.device_id && ((xt = it[st.device_id]) == null ? void 0 : xt.area_id)) || null;
    }, U = (ot) => {
      const st = wt[ot];
      return ct[ot] && ct[ot].state !== "unavailable" && !(st != null && st.hidden) && !(st != null && st.entity_category);
    }, H = {};
    Object.keys(ct).forEach((ot) => {
      const st = Z(ot);
      st && U(ot) && (H[st] || (H[st] = [])).push(ot);
    });
    const yt = { ...ct, ...nt }, Rt = (ot) => {
      var st, xt;
      return (xt = (st = yt[ot]) == null ? void 0 : st.attributes) == null ? void 0 : xt.device_class;
    }, lt = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], G = Object.keys(ct).filter((ot) => ot.startsWith("vacuum.") && U(ot)), qt = Object.values((X == null ? void 0 : X.areas) || {}).filter((ot) => !ih.has(ot.area_id)).map((ot) => {
      const st = ot.area_id, xt = H[st] || [], ht = (Ct) => xt.filter((Ae) => Ae.startsWith(Ct + ".")), kt = (Ct) => ht("sensor").filter((Ae) => Rt(Ae) === Ct), Ft = (Ct) => Object.keys(nt).filter((Ae) => d[Ae] === st && Ct(Ae)), le = (Ct, Ae) => Ct.length ? Ct : Ft(Ae), mt = le(kt("temperature"), (Ct) => Ct.endsWith(st + "_temperature")), $e = le(kt("humidity"), (Ct) => Ct.endsWith(st + "_humidity")), ho = kt("power").filter((Ct) => /^(W|kW)$/.test(yt[Ct].attributes.unit_of_measurement || "")), ln = ht("binary_sensor").filter((Ct) => Rt(Ct) === "moisture"), qo = le(ht("plant"), (Ct) => Ct.startsWith("plant.")).map((Ct) => ({ id: Ct, readings: Ft((Ae) => Ae.startsWith("sensor." + Ct.split(".")[1] + "_")) })), Ka = [...ht("binary_sensor").filter((Ct) => lt.includes(Rt(Ct))), ...Ft((Ct) => Ct.startsWith("binary_sensor."))];
      return {
        id: st,
        name: ot.name,
        icon: ot.icon,
        floor: ot.floor_id || null,
        readings: [...mt.slice(0, 1), ...$e.slice(0, 1), ...ln],
        power: ho.length ? ho.reduce((Ct, Ae) => Ct + Number(yt[Ae].state) * (yt[Ae].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: ht("switch"),
        lights: ht("light"),
        actions: [
          ...ht("light"),
          ...le(ht("climate"), (Ct) => Ct.startsWith("climate.")),
          ...le(ht("cover"), (Ct) => Ct.startsWith("cover.")),
          ...le(ht("humidifier"), (Ct) => Ct.startsWith("humidifier.")),
          ...le(ht("valve"), (Ct) => Ct.startsWith("valve.")),
          ...ht("media_player"),
          ...ht("vacuum"),
          ...G.length ? [] : Ft((Ct) => Ct.startsWith("vacuum.")),
          ...ht("fan"),
          ...Ft((Ct) => Ct.startsWith("fan.")),
          ...ht("water_heater"),
          ...Ft((Ct) => Ct.startsWith("water_heater."))
        ],
        solar: Ft((Ct) => Ct.includes("_solar_")),
        plants: qo,
        openings: Ka,
        alerts: [...ln, ...Ka].filter((Ct) => {
          var Ae;
          return ((Ae = yt[Ct]) == null ? void 0 : Ae.state) === "on";
        })
      };
    }).filter((ot) => ot.readings.length || ot.plugs.length || ot.actions.length || ot.solar.length || ot.plants.length), V = Object.keys(ct).find((ot) => /^sensor\..*(p1_meter_power|grid_power)$/.test(ot) && ct[ot].state !== "unavailable") || null, Q = (ot) => Object.keys(ct).filter((st) => st.startsWith(ot + ".") && U(st)), A = Q("alarm_control_panel"), ut = G.length ? G : N ? ["vacuum." + ye + "robot"] : [];
    return {
      states: yt,
      rooms: qt,
      grid: V,
      // any device's room, hidden ones too (Maintenance's batteries are mostly diagnostic)
      areaOf: (ot) => nt[ot] ? d[ot] : Z(ot),
      vacuums: ut,
      homeVacuums: ut.filter((ot) => !qt.some((st) => st.actions.includes(ot))),
      security: {
        alarms: A.length ? A : N ? ["alarm_control_panel." + ye + "house"] : [],
        locks: Q("lock"),
        openings: [...Object.keys(nt).filter((ot) => ot.startsWith("binary_sensor.")), ...N ? ["sensor." + ye + "doorbell"] : []]
      }
    };
  }
  return { model: at, call: et, stop() {
    clearInterval(z), clearInterval(J);
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
}, Fr = (n) => n < 0 ? 0 : n > 1 ? 1 : n, zl = (n) => {
  const r = String(n || "#000000").trim().replace("#", ""), d = r.length === 3 ? r.split("").map((p) => p + p).join("") : r;
  return [0, 2, 4].map((p) => parseInt(d.slice(p, p + 2), 16) || 0);
}, dh = (n) => "#" + n.map((r) => Math.round(Math.max(0, Math.min(255, r))).toString(16).padStart(2, "0")).join(""), Cd = {}, Ha = (n, r, d) => {
  const p = n + r + d;
  return Cd[p] || (Cd[p] = dh(zl(n).map((g, v) => g + (zl(r)[v] - g) * d)));
}, Ad = {}, Ml = (n) => Ad[n] || (Ad[n] = zl(n));
function Ep(n, r) {
  const d = String(n || "");
  return (d === "sunny" || d === "clear-night" ? "clear" : d === "partlycloudy" ? "partly" : d === "fog" ? "fog" : d === "lightning" || d === "lightning-rainy" ? "storm" : d === "snowy" || d === "snowy-rainy" ? "snow" : d === "rainy" || d === "pouring" || d === "hail" ? "rain" : "cloudy") + "/" + (d === "clear-night" || r ? "night" : "day");
}
function ph(n) {
  const r = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return r.partly = [Ha(r.clear[0], r.cloudy[0], 0.12), Ha(r.clear[1], r.cloudy[1], 0.12)], r.storm = [Ha(r.rain[0], "#000000", 0.22), Ha(r.rain[1], "#000000", 0.22)], r;
}
const Gl = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], Ul = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], Yl = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function uh(n, r = Oa) {
  const d = { ...Oa, ...r }, p = ph(d), g = String(n).split("/"), v = p[g[0]] ? g[0] : "clear", w = g[1] === "night", C = p[v][w ? 1 : 0], j = {
    night: w,
    clearness: v === "clear" ? 1 : v === "partly" ? 0.7 : 0.25,
    sky: C,
    skyStops: [C],
    skyT: 0,
    sun: { x: 45, y: w ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: w ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: w ? 1 : 0 },
    stars: Gl.map(() => ({ o: 0 })),
    rain: Ul.map(() => ({ o: 0, dy: -16 })),
    snow: Yl.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, k = (L) => Gl.map(() => ({ o: L }));
  return v === "clear" ? w ? (j.moon.o = 1, j.stars = k(1)) : j.sun.o = 1 : v === "partly" ? (j.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: w ? 1 : 0 }, w ? (j.moon = { x: 34, y: 33, d: 48, o: 1 }, j.stars = k(0.7)) : j.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : v === "cloudy" || v === "fog" ? (j.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: w ? 1 : 0 }, w ? j.moon = { x: 40, y: 36, d: 40, o: 0 } : j.sun = { x: 40, y: 36, r: 20, o: 0 }) : (j.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, w ? j.moon = { x: 38, y: 28, d: 36, o: 0 } : j.sun = { x: 38, y: 28, r: 18, o: 0 }, v === "snow" ? j.snow = Yl.map(() => ({ o: 1, dy: 0 })) : j.rain = Ul.map((L, I) => ({ o: v === "storm" && I === 1 ? 0 : 1, dy: 0 })), v === "storm" && (j.bolt = { o: 1, dy: 0 })), j;
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
], Dn = (n, r) => (fh[(r & 7) * 8 + (n & 7)] + 0.5) / 64, hh = 0, Bp = 1, Rp = 2, Pp = 3, Hp = 4, uo = 5, as = 6, rr = 7, Np = 8, Td = (n, r) => r <= 0.6665 && ((n - 0.5) * (n - 0.5) + (r - 0.2877) * (r - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (r - 0.416) * (r - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (r - 0.458) * (r - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && r >= 0.416), mh = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], gh = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((n) => [n[0] * 13 / 11, n[1] * 28 / 24]), bh = (n, r, d) => {
  let p = !1;
  for (let g = 0, v = n.length - 1; g < n.length; v = g++) {
    const w = n[g], C = n[v];
    w[1] > d != C[1] > d && r < (C[0] - w[0]) * (d - w[1]) / (C[1] - w[1]) + w[0] && (p = !p);
  }
  return p;
};
function wh(n, { size: r = 90, px: d = 2, oneBit: p = !1, colors: g = Oa, ink: v = "#26221e", paper: w = "#fbf9f6", clock: C = 0, idle: j = !1 } = {}) {
  const k = { ...Oa, ...g }, L = Math.sin, I = Math.PI * 2, z = Math.max(6, Math.round(r / d)), J = z / 90, et = j ? Math.floor(C / 100) * 100 : 0, at = j ? L(I * et / 3600) : 0, X = j ? 1.8 * L(I * et / 6400) : 0, N = j ? 0.9 * L(I * et / 4100) : 0, nt = j ? 0.8 * L(I * et / 5200) : 0, ct = et / 3400 % 1, wt = j && n.bolt.o > 0.5 && (ct < 0.04 || ct > 0.08 && ct < 0.11), it = new Array(z * z), Z = new Uint8Array(z * z), U = (V, Q, A, ut, ot) => {
    A == null || V < 0 || Q < 0 || V >= z || Q >= z || (ut >= 1 || ut > Dn(V + 5, Q + 3)) && (it[Q * z + V] = A, Z[Q * z + V] = ot);
  }, H = (V, Q, A, ut) => {
    for (let ot = Math.max(0, Math.floor(Q - A) - 1); ot <= Math.min(z - 1, Q + A + 1); ot++) for (let st = Math.max(0, Math.floor(V - A) - 1); st <= Math.min(z - 1, V + A + 1); st++) ut(st, ot, st + 0.5 - V, ot + 0.5 - Q);
  }, yt = n.skyStops || [n.sky], Rt = n.skyT || 0;
  for (let V = 0; V < z; V++) {
    const Q = n.night ? Fr(1 - (V + 0.5) / (z * 0.7)) * 0.85 : Fr(((V + 0.5) / z - 0.35) / 0.65) * 0.85;
    for (let A = 0; A < z; A++) {
      let ut = yt[0];
      if (yt.length > 1) {
        const ot = Rt * (yt.length - 1), st = Math.min(yt.length - 2, Math.floor(ot));
        ut = ot - st > Dn(A, V) ? yt[st + 1] : yt[st];
      }
      Q > Dn(A + 2, V + 5) && (ut = n.night ? Ha(ut, "#000000", 0.28) : Ha(ut, "#ffffff", 0.2)), it[V * z + A] = wt ? Ha(ut, "#ffffff", 0.25) : ut;
    }
  }
  if (n.sun.o > 0.01) {
    const V = n.sun.x * J, Q = n.sun.y * J, A = Math.max(1, n.sun.r * J);
    if (j) {
      const ut = A * (1.45 + 0.06 * at), ot = Ha(k.sun, "#ffffff", 0.55);
      if (H(V, Q, ut, (st, xt, ht, kt) => {
        const Ft = Math.sqrt(ht * ht + kt * kt);
        Ft > A && Ft < ut && U(st, xt, ot, 0.26 * (1 - (Ft - A) / (ut - A)) * n.sun.o, hh);
      }), n.sun.o > 0.5) {
        const st = Math.floor(et / 500) % 2, xt = Math.max(1, A * 0.22);
        for (let ht = 0; ht < 8; ht++) if (ht % 2 === st) for (let kt = A + 1.5; kt < A + 1.5 + xt; kt += 0.7) U(Math.floor(V + Math.cos(ht * Math.PI / 4) * kt), Math.floor(Q + Math.sin(ht * Math.PI / 4) * kt), k.sun, n.sun.o, Np);
      }
    }
    H(V, Q, A, (ut, ot, st, xt) => {
      if (st * st + xt * xt > A * A) return;
      const ht = ((st * 0.643 + xt * 0.766) / A + 1) / 2;
      U(ut, ot, Fr((ht - 0.62) / 0.38) > Dn(ut, ot) ? k.sunEdge : k.sun, n.sun.o, Bp);
    });
  }
  if (Gl.forEach((V, Q) => {
    const A = n.stars[Q].o;
    if (A < 0.01) return;
    const ut = Math.floor(V[0] * J), ot = Math.floor(V[1] * J), st = j ? (Math.floor(et / 300) + Q * 3) % 6 : 0;
    if (st === 5) return;
    const xt = Math.round(V[2] * J * (st === 4 ? 0.3 : st < 2 ? 1 : 0.6));
    U(ut, ot, k.star, A, rr);
    for (let ht = 1; ht <= xt; ht++) {
      const kt = ht === xt && xt > 1 ? Ha(k.star, n.sky, 0.5) : k.star;
      U(ut - ht, ot, kt, A, rr), U(ut + ht, ot, kt, A, rr), U(ut, ot - ht, kt, A, rr), U(ut, ot + ht, kt, A, rr);
    }
  }), n.moon.o > 0.01) {
    const V = Math.max(1.5, n.moon.d * J * 0.37), Q = n.moon.x * J, A = n.moon.y * J + (j && nt > 0.4 ? -1 : 0), ut = Q + 0.547 * V, ot = A - 0.503 * V, st = 0.82 * V, xt = Ha(k.moon, "#ffffff", 0.6);
    H(Q, A, V, (ht, kt, Ft, le) => {
      if (Ft * Ft + le * le > V * V) return;
      const mt = ht + 0.5 - ut, $e = kt + 0.5 - ot;
      mt * mt + $e * $e <= st * st || U(ht, kt, Fr((le + V) / (2 * V) * 1.1 - 0.1) > Dn(ht, kt) ? k.moon : xt, n.moon.o, Rp);
    });
  }
  const lt = Math.max(2, Math.round(15.65 * J)), G = Math.max(1, Math.round(5.87 * J * 0.5));
  Ul.forEach((V, Q) => {
    const A = n.rain[Q];
    let ut = A.dy, ot = A.o;
    if (ot < 0.01) return;
    if (j) {
      const ht = (et / 950 + Q / 3) % 1;
      ut += -5 + ht * 14, ot *= ht < 0.18 ? ht / 0.18 : ht > 0.72 ? (1 - ht) / 0.28 : 1;
    }
    const st = (V[0] + 3 + X) * J, xt = (V[1] + ut) * J;
    for (let ht = 0; ht < lt; ht++) for (let kt = 0; kt < G; kt++) U(Math.floor(st - 0.208 * ht) + kt, Math.floor(xt) + ht, k.rain, ot, Hp);
  });
  const qt = Math.max(0, Math.round(7.34 * J / 2.6));
  if (Yl.forEach((V, Q) => {
    const A = n.snow[Q];
    let ut = A.dy, ot = 0, st = A.o;
    if (st < 0.01) return;
    if (j) {
      const kt = (et / 3200 + Q / 5) % 1;
      ut += -6 + kt * 14, ot = 1.5 * L(I * (kt * 1.5 + Q / 5)), st *= kt < 0.2 ? kt / 0.2 : kt > 0.75 ? (1 - kt) / 0.25 : 1;
    }
    const xt = Math.floor((V[0] + 3.67 + ot + X) * J), ht = Math.floor((V[1] + 3.67 + ut) * J);
    U(xt, ht, k.snow, st, uo);
    for (let kt = 1; kt <= qt; kt++)
      U(xt - kt, ht, k.snow, st, uo), U(xt + kt, ht, k.snow, st, uo), U(xt, ht - kt, k.snow, st, uo), U(xt, ht + kt, k.snow, st, uo), qt > 1 && kt < qt && (U(xt - kt, ht - kt, k.snow, st, uo), U(xt + kt, ht - kt, k.snow, st, uo), U(xt - kt, ht + kt, k.snow, st, uo), U(xt + kt, ht + kt, k.snow, st, uo));
  }), n.bolt.o > 0.01)
    if (z >= 30) {
      const V = 39 + X, Q = 50 + n.bolt.dy;
      for (let A = Math.floor(Q * J); A <= (Q + 28) * J; A++) for (let ut = Math.floor(V * J); ut <= (V + 13) * J; ut++)
        bh(gh, (ut + 0.5) / J - V, (A + 0.5) / J - Q) && U(ut, A, k.sun, n.bolt.o, as);
    } else {
      const V = z / 18, Q = 7, A = 10 + Math.round(n.bolt.dy * 0.2);
      mh.forEach((ut, ot) => ut.split("").forEach((st, xt) => {
        if (st !== "#") return;
        const ht = Math.floor((Q + xt) * V), kt = Math.floor((A + ot) * V);
        for (let Ft = kt; Ft < Math.max(kt + 1, Math.floor((A + ot + 1) * V)); Ft++) for (let le = ht; le < Math.max(ht + 1, Math.floor((Q + xt + 1) * V)); le++) U(le, Ft, k.sun, n.bolt.o, as);
      }));
    }
  if (n.cloud.o > 0.01) {
    const V = Math.max(3, n.cloud.w * J), Q = V * 0.6665, A = (n.cloud.x + X) * J - V / 2, ut = (n.cloud.y + N) * J - Q / 2, ot = Ha(k.cloudDay, k.cloudNight, Math.round(n.cloud.f * 4) / 4), st = Ha(ot, "#000000", 0.16);
    for (let xt = Math.max(0, Math.floor(ut) - 1); xt <= Math.min(z - 1, ut + Q + 1); xt++) for (let ht = Math.max(0, Math.floor(A) - 1); ht <= Math.min(z - 1, A + V + 1); ht++) {
      const kt = (ht + 0.5 - A) / V, Ft = (xt + 0.5 - ut) / V;
      Td(kt, Ft) && U(ht, xt, !Td(kt, Ft + 1 / V) || Fr((Ft - 0.42) / 0.25) * 0.8 > Dn(ht, xt) ? st : ot, n.cloud.o, Pp);
    }
  }
  return vh(it, Z, z, z, { oneBit: p, ink: v, paper: w, snowInk: !n.night });
}
function vh(n, r, d, p, { oneBit: g, ink: v, paper: w, snowInk: C }) {
  const j = new Uint8ClampedArray(d * p * 4), k = Ml(v), L = Ml(w);
  for (let I = 0; I < p; I++) for (let z = 0; z < d; z++) {
    const J = I * d + z, et = r[J];
    if (n[J] == null) continue;
    let at = Ml(n[J]);
    if (g) {
      let X;
      et === Hp || et === Np ? X = !0 : et === uo ? X = C : et === rr || et === as ? X = !1 : X = Math.round((0.2126 * at[0] + 0.7152 * at[1] + 0.0722 * at[2]) / 255 * 4) / 4 <= Dn(z, I), (et === Bp || et === Rp || et === Pp || et === as) && (z > 0 && r[J - 1] !== et || z < d - 1 && r[J + 1] !== et || I > 0 && r[J - d] !== et || I < p - 1 && r[J + d] !== et) && (X = !0), at = X ? k : L;
    }
    j[J * 4] = at[0], j[J * 4 + 1] = at[1], j[J * 4 + 2] = at[2], j[J * 4 + 3] = 255;
  }
  return { w: d, h: p, data: j };
}
const Oo = (n) => n < 0 ? 0 : n > 1 ? 1 : n, Zl = (n) => {
  const r = String(n || "#000000").trim().replace("#", ""), d = r.length === 3 ? r.split("").map((p) => p + p).join("") : r;
  return [0, 2, 4].map((p) => parseInt(d.slice(p, p + 2), 16) || 0);
}, yh = (n) => "#" + n.map((r) => Math.round(Math.max(0, Math.min(255, r))).toString(16).padStart(2, "0")).join(""), Ld = {}, Na = (n, r, d) => {
  const p = n + r + d;
  return Ld[p] || (Ld[p] = yh(Zl(n).map((g, v) => g + (Zl(r)[v] - g) * d)));
}, Dd = {}, Ji = (n) => Dd[n] || (Dd[n] = Zl(n));
function xh(n) {
  const r = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return r.partly = [Na(r.clear[0], r.cloudy[0], 0.12), Na(r.clear[1], r.cloudy[1], 0.12)], r.storm = [Na(r.rain[0], "#000000", 0.22), Na(r.rain[1], "#000000", 0.22)], r;
}
const kh = [
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
], Ho = (n, r) => (kh[(r & 7) * 8 + (n & 7)] + 0.5) / 64, Op = 1, Ip = 2, Fp = 3, qp = 4, ir = 5, os = 6, Kl = 7, Wp = 8, Ed = (n, r) => r <= 0.6665 && ((n - 0.5) * (n - 0.5) + (r - 0.2877) * (r - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (r - 0.416) * (r - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (r - 0.458) * (r - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && r >= 0.416), Mh = (n, r, d) => {
  let p = !1;
  for (let g = 0, v = n.length - 1; g < n.length; v = g++) {
    const w = n[g], C = n[v];
    w[1] > d != C[1] > d && r < (C[0] - w[0]) * (d - w[1]) / (C[1] - w[1]) + w[0] && (p = !p);
  }
  return p;
};
function Sh(n, r, d, p, { oneBit: g, ink: v, paper: w, snowInk: C }) {
  const j = new Uint8ClampedArray(d * p * 4), k = Ji(v), L = Ji(w);
  for (let I = 0; I < p; I++) for (let z = 0; z < d; z++) {
    const J = I * d + z, et = r[J];
    if (n[J] == null) continue;
    let at = Ji(n[J]);
    if (g) {
      let X;
      et === qp || et === Wp ? X = !0 : et === ir ? X = C : et === Kl || et === os ? X = !1 : X = Math.round((0.2126 * at[0] + 0.7152 * at[1] + 0.0722 * at[2]) / 255 * 4) / 4 <= Ho(z, I), (et === Op || et === Ip || et === Fp || et === os) && (z > 0 && r[J - 1] !== et || z < d - 1 && r[J + 1] !== et || I > 0 && r[J - d] !== et || I < p - 1 && r[J + d] !== et) && (X = !0), at = X ? k : L;
    }
    j[J * 4] = at[0], j[J * 4 + 1] = at[1], j[J * 4 + 2] = at[2], j[J * 4 + 3] = 255;
  }
  return { w: d, h: p, data: j };
}
const _h = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, Ch = (n) => Ep(n, !1).split("/")[0], Sl = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let r = Math.imul(n ^ n >>> 15, 1 | n);
  return r = r + Math.imul(r ^ r >>> 7, 61 | r) ^ r, ((r ^ r >>> 14) >>> 0) / 4294967296;
}, Ah = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", Th = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", Lh = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", Dh = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", Eh = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], Bh = [".##", "##.", ".#.", "#.."];
function jp(n, { width: r, height: d, colors: p, wave: g = 0.38, soft: v = 6, glow: w = 0.6, columns: C = 6 }) {
  const j = { ...Oa, dawn: "#e5a77e", ...p }, k = xh(j), L = r, I = d, z = L / C, J = z / 2, et = Math.PI * 2, at = n.length ? n : [{ cond: "cloudy", night: !1 }], X = [...Array(C * 2)].map((wt, it) => {
    const Z = at[Math.min(it, at.length - 1)], U = Ch(Z.cond), H = it % 2 === 1;
    return { cond: Z.cond, k: U, night: H, sky: k[U][H ? 1 : 0], cover: _h[U] };
  }), N = (wt) => I * (0.5 - g * Math.cos(et * (wt / z - 0.25)));
  return { C: j, S: X, W: L, H: I, cw: z, sw: J, TAU: et, yb: N, side: (wt, it, Z) => {
    const U = (wt ? N(it) - Z : Z - N(it)) / Math.max(3, v * 1.4) + 0.5;
    return U <= 0 ? 0 : U >= 1 ? 1 : U;
  }, glowAt: (wt) => {
    const it = ((wt / z - 0.25) % 1 + 1) % 1, Z = Math.max(0, Math.min(C - 1, Math.round(wt / z - 0.25))), U = Math.max(0, Math.min(C - 1, Math.round(wt / z - 0.75))), H = 1 - (X[2 * Z].cover + X[2 * U + 1].cover) / 2, yt = Math.sin(Math.PI * Math.min(1, Math.max(0, N(wt) / I)));
    return { c: it < 0.5 ? j.dusk : j.dawn, a: w * (0.2 + 0.8 * H) * yt * yt };
  }, soft: v, tw: z * 0.3, sy: I / 90 };
}
function Vp(n, { clock: r = 0, ambient: d = !1, seed: p = 1 }) {
  const { S: g, sw: v, side: w, C, TAU: j, sy: k, H: L } = n, I = r, z = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  g.forEach((at, X) => {
    const N = Sl(p * 977 + X * 131 + 7), nt = (X + 0.5) * v, ct = at.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[at.k] : 0;
    for (let wt = 0; wt < ct; wt++) {
      const it = nt + (N() - 0.5) * v * 1.6, Z = (6 + N() * 76) * k, U = N() < 0.35, H = 1.8 + N() * 1.6, yt = w(!0, it, Z) * (U ? 0.95 : 0.7) * (d ? 0.6 + 0.4 * Math.sin(j * I / 2600 + wt * 1.7 + X) : 1);
      yt >= 0.03 && z.stars.push({ x: it, y: Z, big: U, size: H, o: yt });
    }
    if (!at.night && (at.k === "clear" || at.k === "partly")) {
      const wt = nt + (N() - 0.5) * v * 0.3, it = Math.min(15, v * 0.29);
      z.suns.push({ x: wt, y: 32 * k, rad: it, halo: it * 2.8 * (d ? 1 + 0.07 * Math.sin(j * I / 3600 + X) : 1) });
    }
    if (at.night && (at.k === "clear" || at.k === "partly")) {
      const wt = Math.min(0.78, v * 0.55 / 34), it = nt - 23 * wt + (N() - 0.5) * v * 0.2;
      z.moons.push({ x: it + 23 * wt, y: (4 + (d ? 0.8 * Math.sin(j * I / 5200 + X) : 0)) * k + 23 * wt, d: 46 * wt });
    }
  });
  const J = Math.max(56, Math.min(100, L * 0.45)), et = Math.max(1, v / (J * 2.4));
  return g.forEach((at, X) => {
    const N = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[at.k];
    if (!N) return;
    const nt = at.k === "partly" ? 1 : Math.round(N * et), ct = Sl(p * 577 + X * 71 + 3), wt = (X + 0.5) * v, it = at.k === "rain" || at.k === "storm" || at.night ? C.cloudNight : C.cloudDay, Z = at.night ? 0.82 : at.k === "storm" ? 0.75 : 1;
    for (let U = 0; U < nt; U++) {
      const H = J / 46 * (at.k === "partly" ? 1 : 0.8 + ct() * 0.4), yt = wt + (at.k === "partly" ? v * 0.12 : ((U + 0.5) / nt - 0.5) * v * 0.95 + (ct() - 0.5) * v * 0.5 / nt), Rt = (at.k === "partly" ? 40 : 6 + ct() * 26) * k, lt = d ? 2.5 * Math.sin(j * I / 9e3 + X * 1.3 + U * 2.1) : 0, G = d ? 0.9 * Math.sin(j * I / 6100 + X + U) : 0;
      z.clouds.push({ x: yt - 23 * H + lt, y: Rt - 15.33 * H + G, w: 46 * H, h: 30.66 * H, fill: it, o: Z * (nt > 1 && U === 0 ? 0.85 : 1) });
    }
  }), g.forEach((at, X) => {
    const N = Sl(p * 313 + X * 29 + 11), nt = (X + 0.5) * v, ct = at.cond === "pouring" ? 16 : at.cond === "rainy" || at.cond === "hail" ? 9 : at.cond === "lightning-rainy" ? 12 : at.cond === "snowy-rainy" ? 5 : 0;
    for (let it = 0; it < ct; it++) {
      let Z = nt + (N() - 0.5) * v * 1.05, U = 44 + N() * 36, H = 1;
      if (d) {
        const Rt = ((U - 44 + I * 0.04) % 36 + 36) % 36;
        Z -= 0.21 * (Rt - (U - 44)), U = 44 + Rt, H = Math.min(1, Rt / 6, (36 - Rt) / 6);
      }
      U *= k;
      const yt = w(at.night, Z, U) * H;
      yt >= 0.05 && z.drops.push({ x: Z, y: U, o: yt });
    }
    const wt = at.cond === "snowy" ? 11 : at.cond === "snowy-rainy" ? 6 : 0;
    for (let it = 0; it < wt; it++) {
      let Z = nt + (N() - 0.5) * v * 1.05, U = 40 + N() * 44, H = 1;
      if (d) {
        const Rt = ((U - 40 + I * 9e-3) % 44 + 44) % 44;
        U = 40 + Rt, Z += 1.6 * Math.sin(j * I / 2800 + it * 1.9 + X), H = Math.min(1, Rt / 6, (44 - Rt) / 6);
      }
      U *= k;
      const yt = w(at.night, Z, U) * H;
      yt >= 0.05 && z.flakes.push({ x: Z, y: U, o: yt });
    }
    if (at.k === "fog") {
      const it = at.night ? "#c8ccd6" : "#ffffff", Z = at.night ? 0.28 : 0.62, U = d ? 4 * Math.sin(j * I / 8e3 + X) : 0;
      for (let H = 0; H < 4; H++) z.fogs.push({ x: nt - v * 0.75 + H % 2 * v * 0.18 + (H % 2 ? U : -U), y: (30 + H * 13) * k, w: v * 1.3, c: it, a: Z });
    }
    if (at.k === "storm") {
      const it = (I / 3400 + X * 0.37) % 1;
      z.bolts.push({ x: nt + (N() - 0.5) * v * 0.3 - 5, y: 36 * k, o: d && !(it < 0.05 || it > 0.09 && it < 0.12) ? 0.8 : 1 });
    }
  }), z;
}
function Rh(n, r, d, p, g, v, w, C) {
  const { S: j, C: k, cw: L, yb: I, glowAt: z, soft: J, tw: et, sy: at } = n, X = new Array(d * p), N = new Uint8Array(d * p), nt = new Uint8Array(d * p), ct = (V, Q, A, ut, ot) => {
    A == null || V < 0 || Q < 0 || V >= d || Q >= p || (ut >= 1 || ut > Ho(V + 5, Q + 3)) && (X[Q * d + V] = A, N[Q * d + V] = ot);
  }, wt = (V, Q, A, ut) => {
    for (let ot = Math.max(0, Math.floor(Q - A) - 1); ot <= Math.min(p - 1, Q + A + 1); ot++) for (let st = Math.max(0, Math.floor(V - A) - 1); st <= Math.min(d - 1, V + A + 1); st++) ut(st, ot, st + 0.5 - V, ot + 0.5 - Q);
  }, it = (V, Q, A) => {
    for (let ot = 0; ot < V.length - 1; ot++) {
      const st = (ot + Q) * L;
      if (A < st - et / 2) return [V[ot], V[ot], 0];
      if (A <= st + et / 2) return [V[ot], V[ot + 1], (A - st + et / 2) / et];
    }
    const ut = V[V.length - 1];
    return [ut, ut, 0];
  }, Z = j.filter((V) => !V.night).map((V) => V.sky), U = j.filter((V) => V.night).map((V) => V.sky), H = J / v, yt = 16 * at / v;
  for (let V = 0; V < d; V++) {
    const Q = (V + 0.5) * g, A = I(Q) / v, ut = it(Z, 0.75, Q), ot = it(U, 1.25, Q), st = z(Q);
    for (let xt = 0; xt < p; xt++) {
      const ht = Ho(V, xt), kt = xt + 0.5 - A, Ft = (H > 0.01 ? Oo(0.5 + kt / H) : kt > 0 ? 1 : 0) > ht;
      let le = Ft ? ut[2] > ht ? ut[1] : ut[0] : ot[2] > ht ? ot[1] : ot[0];
      (Ft ? Oo(((xt + 0.5) / p - 0.45) / 0.55) * 0.7 : Oo(1 - (xt + 0.5) / (p * 0.55)) * 0.7) > Ho(V + 2, xt + 5) && (le = Ft ? Na(le, "#ffffff", 0.18) : Na(le, "#000000", 0.25)), Ft && kt >= 0 && kt < yt && st.a * 1.3 * (1 - kt / yt) > Ho(V + 6, xt + 1) && (le = st.c), X[xt * d + V] = le, nt[xt * d + V] = Ft ? 0 : 1;
    }
  }
  const Rt = Na(k.sun, "#ffffff", 0.55), lt = Na(k.moon, "#ffffff", 0.6);
  r.stars.forEach((V) => {
    const Q = Math.floor(V.x / g), A = Math.floor(V.y / v);
    if (Q < 0 || A < 0 || Q >= d || A >= p || !nt[A * d + Q] || V.o < 0.15) return;
    const ut = V.o > 0.45 ? k.star : Na(k.star, X[A * d + Q], 0.5), ot = V.big && V.o > 0.6 ? Math.floor(V.size / g) : 0;
    ct(Q, A, ut, 1, Kl);
    for (let st = 1; st <= ot; st++) [[Q - st, A], [Q + st, A], [Q, A - st], [Q, A + st]].forEach((xt) => {
      xt[0] >= 0 && xt[1] >= 0 && xt[0] < d && xt[1] < p && nt[xt[1] * d + xt[0]] && ct(xt[0], xt[1], ut, 1, Kl);
    });
  }), r.suns.forEach((V) => {
    const Q = Math.max(1.5, V.rad / g), A = V.x / g, ut = V.y / v, ot = V.halo / g * 0.85;
    if (wt(A, ut, ot, (st, xt, ht, kt) => {
      const Ft = Math.sqrt(ht * ht + kt * kt);
      Ft > Q && Ft < ot && !nt[xt * d + st] && ct(st, xt, Rt, 0.3 * (1 - (Ft - Q) / (ot - Q)), 0);
    }), C) {
      const st = Math.floor(w / 500) % 2, xt = Math.max(1, Q * 0.3);
      for (let ht = 0; ht < 8; ht++) if (ht % 2 === st) for (let kt = Q + 1.2; kt < Q + 1.2 + xt; kt += 0.7) ct(Math.floor(A + Math.cos(ht * Math.PI / 4) * kt), Math.floor(ut + Math.sin(ht * Math.PI / 4) * kt), k.sun, 1, Wp);
    }
    wt(A, ut, Q, (st, xt, ht, kt) => {
      ht * ht + kt * kt <= Q * Q && ct(st, xt, Oo(((kt / Q + 1) / 2 - 0.6) / 0.4) > Ho(st, xt) ? k.sunEdge : k.sun, 1, Op);
    });
  }), r.moons.forEach((V) => {
    const Q = Math.max(1.5, V.d * 0.37 / g), A = V.x / g, ut = V.y / v, ot = A + 0.547 * Q, st = ut - 0.503 * Q, xt = 0.82 * Q;
    wt(A, ut, Q, (ht, kt, Ft, le) => {
      if (Ft * Ft + le * le > Q * Q) return;
      const mt = ht + 0.5 - ot, $e = kt + 0.5 - st;
      mt * mt + $e * $e > xt * xt && ct(ht, kt, Oo((le + Q) / (2 * Q) * 1.1 - 0.1) > Ho(ht, kt) ? k.moon : lt, 1, Ip);
    });
  }), r.clouds.forEach((V) => {
    const Q = Math.max(3, V.w / g), A = Q * 0.6665, ut = V.x / g, ot = V.y / v, st = Na(V.fill, "#000000", 0.16);
    for (let xt = Math.max(0, Math.floor(ot) - 1); xt <= Math.min(p - 1, ot + A + 1); xt++) for (let ht = Math.max(0, Math.floor(ut) - 1); ht <= Math.min(d - 1, ut + Q + 1); ht++) {
      const kt = (ht + 0.5 - ut) / Q, Ft = (xt + 0.5 - ot) / Q;
      Ed(kt, Ft) && ct(ht, xt, !Ed(kt, Ft + 1 / Q) || Oo((Ft - 0.42) / 0.25) * 0.8 > Ho(ht, xt) ? st : V.fill, V.o, Fp);
    }
  }), r.fogs.forEach((V) => {
    const Q = Math.floor(V.y / v), A = Math.max(Q, Math.floor((V.y + 6 * at) / v) - 1), ut = Math.floor(V.x / g), ot = Math.floor((V.x + V.w) / g);
    for (let st = Q; st <= A; st++) for (let xt = ut; xt <= ot; xt++) {
      const ht = (xt - ut) / Math.max(1, ot - ut);
      ct(xt, st, V.c, V.a * (ht < 0.25 ? ht / 0.25 : ht > 0.75 ? (1 - ht) / 0.25 : 1), 0);
    }
  });
  const G = Math.max(2, Math.round(9 / v));
  r.drops.forEach((V) => {
    const Q = V.x / g, A = Math.floor(V.y / v);
    for (let ut = 0; ut < G; ut++) ct(Math.floor(Q - 0.208 * ut * v / g), A + ut, k.rain, V.o, qp);
  });
  const qt = Math.max(0, Math.round(4.4 / g / 2.6));
  return r.flakes.forEach((V) => {
    const Q = Math.floor(V.x / g), A = Math.floor(V.y / v);
    ct(Q, A, k.snow, V.o, ir);
    for (let ut = 1; ut <= qt; ut++)
      ct(Q - ut, A, k.snow, V.o, ir), ct(Q + ut, A, k.snow, V.o, ir), ct(Q, A - ut, k.snow, V.o, ir), ct(Q, A + ut, k.snow, V.o, ir);
  }), r.bolts.forEach((V) => {
    if (g <= 3.5)
      for (let Q = Math.floor(V.y / v); Q <= (V.y + 24) / v; Q++) for (let A = Math.floor(V.x / g); A <= (V.x + 11) / g; A++)
        Mh(Eh, (A + 0.5) * g - V.x, (Q + 0.5) * v - V.y) && ct(A, Q, k.sun, 1, os);
    else {
      const Q = Math.round(V.x / g), A = Math.round(V.y / v);
      Bh.forEach((ut, ot) => ut.split("").forEach((st, xt) => {
        st === "#" && ct(Q + xt, A + ot, k.sun, 1, os);
      }));
    }
  }), { col: X, ids: N };
}
function Ph(n, r) {
  const d = r.px, p = Math.max(6, Math.round(r.width / d)), g = Math.max(6, Math.round(r.height / d)), v = r.width / p, w = r.height / g, C = r.ambient ? Math.floor((r.clock || 0) / 100) * 100 : 0, j = (J) => {
    const et = jp(J, r);
    return Rh(et, Vp(et, { clock: C, ambient: r.ambient, seed: r.seed }), p, g, v, w, C, r.ambient);
  }, k = j(n), L = r.reveal == null ? 1 : Oo(r.reveal);
  let I = k.col, z = k.ids;
  if (L < 1) {
    const J = r.prev ? j(r.prev) : null, et = L * (p + 12);
    I = new Array(p * g), z = new Uint8Array(p * g);
    for (let at = 0; at < p * g; at++) {
      const X = at % p, N = at / p | 0;
      (r.reduce ? L : Oo((et - X) / 12)) > Ho(X, N) ? (I[at] = k.col[at], z[at] = k.ids[at]) : J ? (I[at] = J.col[at], z[at] = J.ids[at]) : (I[at] = null, z[at] = 255);
    }
  }
  return Sh(I, z, p, g, { oneBit: r.oneBit, ink: r.ink || "#26221e", paper: r.paper || "#fbf9f6", snowInk: !1 });
}
function Hh(n, r, d) {
  const p = d.width, g = d.height, v = d.reveal == null ? 1 : Oo(d.reveal), w = (z, J) => {
    const et = jp(J, d);
    Nh(z, et, Vp(et, d));
  };
  if (n.clearRect(0, 0, p, g), v >= 1) {
    w(n, r);
    return;
  }
  if (d.prev && w(n, d.prev), d.reduce) {
    n.save(), n.globalAlpha = v, w(n, r), n.restore();
    return;
  }
  const C = n.canvas, j = C.__wxOff || (C.__wxOff = document.createElement("canvas"));
  (j.width !== C.width || j.height !== C.height) && (j.width = C.width, j.height = C.height);
  const k = j.getContext("2d");
  k.setTransform(n.getTransform()), k.clearRect(0, 0, p, g), w(k, r);
  const L = v * (p + 64) - 64, I = k.createLinearGradient(L, 0, L + 64, 0);
  I.addColorStop(0, "rgba(0,0,0,1)"), I.addColorStop(1, "rgba(0,0,0,0)"), k.globalCompositeOperation = "destination-in", k.fillStyle = I, k.fillRect(0, 0, p, g), k.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(j, 0, 0), n.restore();
}
function Nh(n, r, d) {
  const { W: p, H: g, S: v, C: w, cw: C, yb: j, glowAt: k, soft: L, tw: I, sy: z } = r, J = n.getTransform().a || 1, et = (G) => {
    n.shadowColor = G ? "rgba(28,18,8,.22)" : "transparent", n.shadowBlur = G ? 4 * J : 0, n.shadowOffsetY = G ? 1.5 * J : 0;
  }, at = (G, qt) => {
    const V = Ji(G);
    return "rgba(" + V[0] + "," + V[1] + "," + V[2] + "," + Math.max(0, Math.min(1, qt)).toFixed(3) + ")";
  }, X = (G, qt) => {
    const V = n.createLinearGradient(0, 0, p, 0);
    V.addColorStop(0, G[0]);
    for (let Q = 0; Q < G.length - 1; Q++) {
      const A = (Q + qt) * C, ut = (A - I / 2) / p, ot = (A + I / 2) / p;
      ut > 0 && ut < 1 && V.addColorStop(ut, G[Q]), ot > 0 && ot < 1 && V.addColorStop(ot, G[Q + 1]);
    }
    return V.addColorStop(1, G[G.length - 1]), V;
  }, N = Math.max(24, Math.ceil(p / 4)), nt = (G, qt) => {
    n.beginPath();
    for (let V = 0; V <= N; V++) {
      const Q = p * V / N, A = G == null ? 0 : j(Q) + G;
      V ? n.lineTo(Q, A) : n.moveTo(Q, A);
    }
    for (let V = N; V >= 0; V--) {
      const Q = p * V / N;
      n.lineTo(Q, j(Q) + qt);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = X(v.filter((G) => !G.night).map((G) => G.sky), 0.75), n.fillRect(0, 0, p, g);
  const ct = n.createLinearGradient(0, 0, p, 0);
  for (let G = 0; G <= 64; G++) {
    const qt = k(p * G / 64);
    ct.addColorStop(G / 64, at(qt.c, Math.min(1, qt.a)));
  }
  n.fillStyle = ct;
  for (let G = 0; G < 8; G++)
    n.globalAlpha = 1 - G / 8, nt(G * 2 * z, (G + 1) * 2 * z);
  n.fillStyle = X(v.filter((G) => G.night).map((G) => G.sky), 1.25);
  const wt = Math.max(0.5, L), it = 6;
  n.globalAlpha = 1, nt(null, -wt);
  for (let G = 0; G < it; G++)
    n.globalAlpha = 1 - (G + 0.5) / it, nt(-wt + 2 * wt * G / it, -wt + 2 * wt * (G + 1) / it);
  n.globalAlpha = 1;
  const Z = new Path2D(Lh), U = new Path2D(Th), H = new Path2D(Ah), yt = new Path2D(Dh);
  n.fillStyle = w.star, d.stars.forEach((G) => {
    n.globalAlpha = G.o, G.big ? (n.save(), n.translate(G.x, G.y), n.scale(G.size, G.size), n.fill(Z), n.restore()) : (n.beginPath(), n.arc(G.x, G.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const Rt = Na(w.sun, "#ffffff", 0.55);
  d.suns.forEach((G) => {
    const qt = n.createRadialGradient(G.x, G.y, 0, G.x, G.y, G.halo);
    qt.addColorStop(0, at(Rt, 0.42)), qt.addColorStop(0.7, at(Rt, 0)), n.fillStyle = qt, n.beginPath(), n.arc(G.x, G.y, G.halo, 0, Math.PI * 2), n.fill();
    const V = n.createLinearGradient(0, G.y - G.rad, 0, G.y + G.rad);
    V.addColorStop(0.6, w.sun), V.addColorStop(1, w.sunEdge), n.fillStyle = V, et(!0), n.beginPath(), n.arc(G.x, G.y, G.rad, 0, Math.PI * 2), n.fill(), et(!1);
  });
  const lt = Na(w.moon, "#ffffff", 0.6);
  d.moons.forEach((G) => {
    n.save(), n.translate(G.x - G.d / 2, G.y - G.d / 2), n.scale(G.d / 46, G.d / 46);
    const qt = n.createLinearGradient(0, 6, 0, 40);
    qt.addColorStop(0, lt), qt.addColorStop(1, w.moon), n.fillStyle = qt, et(!0), n.fill(U), et(!1), n.restore();
  }), d.clouds.forEach((G) => {
    n.save(), n.globalAlpha = G.o, n.translate(G.x, G.y), n.scale(G.w / 46, G.h / 30.66), n.translate(-4, -9.67), n.fillStyle = G.fill, et(!0), n.fill(H), et(!1), n.restore();
  }), d.fogs.forEach((G) => {
    const qt = n.createLinearGradient(G.x, 0, G.x + G.w, 0);
    qt.addColorStop(0, at(G.c, 0)), qt.addColorStop(0.25, at(G.c, G.a)), qt.addColorStop(0.75, at(G.c, G.a)), qt.addColorStop(1, at(G.c, 0)), n.fillStyle = qt, n.fillRect(G.x, G.y, G.w, 6 * z);
  }), n.fillStyle = w.rain, d.drops.forEach((G) => {
    n.save(), n.globalAlpha = G.o, n.translate(G.x, G.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = w.snow, d.flakes.forEach((G) => {
    n.globalAlpha = G.o, n.beginPath(), n.arc(G.x, G.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = w.sun, d.bolts.forEach((G) => {
    n.save(), n.globalAlpha = G.o, n.translate(G.x, G.y), n.fill(yt), n.restore();
  }), n.restore();
}
const Oh = (n) => n === "sunny" ? "clear" : n === "clear-night" ? "night" : n === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(n) ? "rain" : ["snowy", "snowy-rainy"].includes(n) ? "snow" : "cloudy", er = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, qi = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, _l = (n, r) => '<path class="' + r + '" d="' + n + '"/>', Ih = (n, r) => ' style="animation-delay:-' + Math.round(n * 137 % r) + 'ms"', Ra = (n, r, d, p) => {
  const g = d * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (p < 1 ? ' opacity="' + p + '"' : "") + Ih(n, 2400) + ' d="M' + n + " " + (r - d) + "L" + (n + g) + " " + (r - g) + "L" + (n + d) + " " + r + "L" + (n + g) + " " + (r + g) + "L" + n + " " + (r + d) + "L" + (n - g) + " " + (r + g) + "L" + (n - d) + " " + r + "L" + (n - g) + " " + (r - g) + 'Z"/>';
}, Bd = ([n, r, d], p) => '<path class="wbMoonPath" d="' + n + '" fill="url(#' + p + ')"/><defs><linearGradient id="' + p + '" x1="0" y1="' + r + '" x2="0" y2="' + d + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', Fh = (n, r) => r ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', qh = (n) => (n ? ["29.35", "43.04", "56.74"].map((r, d) => '<g class="wbDrop" style="animation-delay:-' + d * 317 + 'ms"><rect class="wbAccent" x="' + r + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + r + ' 60.65)"/></g>') : [19, 26, 33].map((r, d) => '<g class="wbDrop" style="animation-delay:-' + d * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + r + ' 38)"/></g>')).join(""), Wh = (n) => (n ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([r, d], p) => '<circle class="wbFlake" style="animation-delay:-' + p * 640 + 'ms" cx="' + r + '" cy="' + d + '" r="' + (n ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function jh(n, r, d, p) {
  const g = (v) => '<g filter="url(#' + p + '-sh)">' + v + "</g>";
  return n === "clear" ? r ? g(Bd(d ? qi.l : qi.s, p)) + (d ? Ra(70, 20, 5.83, 1) + Ra(78.33, 41.67, 3.75, 0.8) + Ra(60, 71.67, 3.33, 0.6) : Ra(42, 12, 3.5, 1) + Ra(47, 25, 2.25, 0.8) + Ra(36, 43, 2, 0.6)) : g(Fh(p, d)) : n === "partly" ? g(r ? Bd(d ? qi.lp : qi.sp, p) : d ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + g(_l(d ? er.lp : er.sp, r ? "wbCloudLight" : "wbBright")) + (r ? d ? Ra(73.33, 16.67, 4.17, 0.9) : Ra(44, 10, 2.5, 0.9) : "") : n === "cloudy" ? g(_l(d ? er.lc : er.s, r ? "wbCloudLight" : "wbBright")) + (r ? d ? Ra(15, 15, 3.75, 0.8) + Ra(76.67, 13.33, 2.92, 0.6) : Ra(9, 9, 2.25, 0.8) + Ra(46, 8, 1.75, 0.6) : "") : g(_l(d ? er.lr : er.s, "wbCloudLight")) + (n === "rain" ? qh(d) : Wh(d));
}
const Vh = (n, r) => '<defs><filter id="' + n + '-sh" x="-25%" y="-25%" width="150%" height="160%"><feDropShadow dx="0" dy="' + (r ? 1.6 : 1) + '" stdDeviation="' + (r ? 1.8 : 1.1) + '" flood-color="#1c1208" flood-opacity=".22"/></filter></defs>';
function zh(n, r, d, p) {
  let g = Oh(n);
  const v = g === "night" || !!d;
  g === "night" && (g = "clear");
  const w = r ? 90 : 54;
  return { k: g, night: v, svg: '<svg viewBox="0 0 ' + w + " " + w + '">' + Vh(p, r) + jh(g, v, r, p) + "</svg>" };
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
], Wi = (n, r) => (Gh[r % 8 * 8 + n % 8] + 0.5) / 64, Za = (n) => [parseInt(n.slice(1, 3), 16), parseInt(n.slice(3, 5), 16), parseInt(n.slice(5, 7), 16)], Xe = (n, r, d) => [Math.round(n[0] + (r[0] - n[0]) * d), Math.round(n[1] + (r[1] - n[1]) * d), Math.round(n[2] + (r[2] - n[2]) * d)], qr = (n) => n < 0 ? 0 : n > 1 ? 1 : n, Rd = (n, r) => {
  let d = n * 374761393 + r * 668265263 ^ 1540483477;
  return d = Math.imul(d ^ d >>> 13, 1274126177), ((d ^ d >>> 16) >>> 0) / 4294967296;
}, Bn = [255, 255, 255], aa = Za("#26221e"), Pd = Za("#0288d1"), Uh = Za("#01579b"), Cl = Za(Oa.cloudDay), Al = Za(Oa.cloudNight), ji = Za(Oa.dusk), Tl = Za(Oa.sunEdge), Yh = Za(Oa.sun), Zh = 10, Hd = 0.3, Io = 56, zp = 21;
function Kh(n) {
  const r = Array.from({ length: zp }, () => new Array(Io).fill(void 0)), d = (w, C, j) => {
    r[C][w] = j;
  }, p = Xe(ji, aa, 0.35), g = Xe(aa, Bn, 0.22);
  for (let w = 0; w <= 6; w++) {
    const C = w < 2 ? Io - 2 : Io - 1;
    for (let j = 6 - w; j <= C; j++) d(j, w, w < 2 ? p : w === 6 ? g : aa);
  }
  const v = [ji, Tl, Al, Za(Oa.skyRainDay), Xe(ji, aa, 0.2), Xe(n, aa, 0.35)];
  [2, 3, 2, 3, 3].forEach((w, C) => {
    const j = 9 + C * 6;
    for (let k = 0; k < w; k++) {
      const L = v[(C * 2 + k * 3) % v.length];
      for (let I = j; I < j + 5; I++)
        d(I, 7 + k * 2, Xe(L, aa, 0.12)), d(I, 8 + k * 2, k === w - 1 ? Xe(L, Bn, 0.3) : L);
      d(j + 5, 7 + k * 2, aa), d(j + 5, 8 + k * 2, aa);
    }
  });
  for (let w = 7; w <= 12; w++) d(5, w, aa);
  d(5, 13, Tl);
  for (let w = 7; w <= 14; w++) for (let C = 42; C <= 51; C++) d(C, w, C === 51 ? Al : Cl);
  for (let w = 43; w <= 50; w += 2)
    d(w, 12, aa), d(w, 9, Xe(aa, Cl, 0.4));
  for (let w = 40; w <= 53; w++) d(w, 14, w === 40 || w === 53 ? Al : Cl);
  for (let w = 15; w <= 18; w++) for (let C = 46; C <= 49; C++) d(C, w, w === 18 ? aa : w === 16 ? Tl : ji);
  for (let w = 15; w <= 19; w++) d(44, w, aa);
  return d(44, 20, Yh), r;
}
function Xh(n, r, d, p) {
  const g = Math.max(1, Math.round(n)), v = Math.max(1, Math.round(r)), w = new Uint8ClampedArray(g * v * 4), C = Za(p.skyClearDay), j = Za(p.skyFogDay), k = Kh(C), L = Math.round(v * 0.55), I = qr(1 - Math.log(d / Hd) / Math.log(Zh / Hd)), z = Xe(C, j, I), J = (N) => qr((N - 0.1) / 0.9), et = qr((1 - Math.exp(-2 / d) - 0.2) / 0.8), at = Math.round(g / 2 - Io / 2), X = L + 3;
  for (let N = 0; N < v; N++) {
    const nt = X - 1 - N, ct = N - X;
    for (let wt = 0; wt < g; wt++) {
      const it = wt - at;
      let Z, U;
      const H = nt >= 0 && nt < zp && it >= 0 && it < Io ? k[nt][it] : void 0;
      if (H)
        Z = H, U = et;
      else if (nt >= 0 && nt <= 1 && it >= 4 - nt && it <= 5 - nt)
        Z = Xe(Bn, Pd, 0.15), U = et;
      else if (N < L) {
        const lt = qr(((N + 0.5) / L - 0.15) / 0.85) * 3, G = Math.min(3, Math.floor(lt + Wi(wt + 2, N + 5)));
        Z = Xe(z, Bn, G * 0.1), U = I * 0.95;
      } else {
        const lt = (N - L + 0.5) / (v - L), G = Math.min(1.5, 6e-3 / (lt * lt)), qt = qr(lt * 1.4) * 3, V = Math.min(3, Math.floor(qt + Wi(wt + 1, N + 6)));
        Z = Xe(Pd, Uh, V / 3);
        const Q = 1 + Math.round(lt * 7), A = Math.floor(wt / (Q * 3)), ut = 0.06 + 0.16 * lt, ot = wt % (Q * 3) < Q;
        ot && Rd(A, N) < ut ? Z = Xe(Z, Bn, 0.18 + 0.1 * (1 - lt)) : ot && lt > 0.5 && Rd(A, N - 1) < ut && (Z = Xe(Z, aa, 0.12)), U = J(1 - Math.exp(-G / d)), ct === 0 && it >= 3 && it <= 8 ? (Z = Xe(Z, Bn, it < 6 ? 0.8 : 0.45), U = et) : ct >= 0 && ct <= 2 && it >= Io && it < Io + 40 ? ((1 - (it - Io) / 40) * (ct === 1 ? 0.9 : 0.5) > Wi(wt, N + 3) && (Z = Xe(Z, Bn, 0.5)), U = et) : ct === 0 && it >= 6 && it < Io && (Z = Xe(Z, aa, it % 2 === 0 ? 0.35 : 0.2), U = et);
      }
      const yt = U > Wi(wt, N) ? j : Z, Rt = (N * g + wt) * 4;
      w[Rt] = yt[0], w[Rt + 1] = yt[1], w[Rt + 2] = yt[2], w[Rt + 3] = 255;
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
const tm = (n, r) => r === "mi" ? n * 1.609344 : r === "m" ? n / 1e3 : r === "ft" ? n * 3048e-7 : r === "yd" ? n * 9144e-7 : n, em = (n) => n < 1 ? "very_poor" : n < 4 ? "poor" : n < 10 ? "moderate" : n < 20 ? "good" : n < 40 ? "very_good" : "excellent", _e = {
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
}, Ce = { standard: "cubic-bezier(.2,0,0,1)", land: "cubic-bezier(.34,1.46,.64,1)", spring: "cubic-bezier(.2,1.2,.4,1)", soft: "cubic-bezier(.4,0,.2,1)", exit: "cubic-bezier(.4,0,1,1)" }, Ge = () => {
  var n;
  return !!((n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches);
};
function am() {
  const { pivot: n, slider: r, iconbtn: d, warp: p, outline: g } = _e;
  return [
    ["--pv-persp", n.persp + "px"],
    ["--pv-shine", n.shine / 100],
    ["--pv-size", n.size + "%"],
    ["--pv-ret", n.ret + "ms"],
    ["--pv-ease", Ce[n.ease]],
    ["--ab-blur", r.glow + "px"],
    ["--ab-spread", r.spread + "px"],
    ["--ab-str", r.strength + "%"],
    ["--ab-blur2", r.glow + r.hold + "px"],
    ["--ab-spread2", r.spread + r.hold / 4 + "px"],
    ["--ab-str2", r.holdStrength + "%"],
    ["--ab-grow", "scaleY(" + (1 + (r.grow / 100 - 1) * 3) + ")"],
    ["--ab-in", r.ein + "ms"],
    ["--ab-out", r.eout + "ms"],
    ["--ab-ease", Ce[r.ease]],
    ["--ih-s", d.scale / 100],
    ["--ih-p", d.press / 100],
    ["--ih-dur", d.dur + "ms"],
    ["--ih-ease", Ce[d.ease]],
    ["--ih-tint", "8%"],
    ["--wc-dur", p.cdur + "ms"],
    ["--wc-delay", p.cdelay + "ms"],
    ["--wc-ease", Ce[p.ease]],
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
const Ll = ":is(button.primary,button.pill,.hcBtn,.wbRangeBtn,.activityRow.tap,.hcRow,a.hcRow)", om = "#homeView :is(.tfAreaPanel,.tfRoomTile.tfBoardItem)", nm = 300, Qi = (n) => Math.min(1, nm / Math.max(1, n)), Dl = (n, r) => 1 + (r / 100 - 1) * Qi(n.offsetWidth);
function rm(n, r) {
  r.style.cssText += ";" + am();
  let d = null;
  const p = (L) => {
    L.classList.remove("mvMoving", "mvLit"), L.style.setProperty("--rx", "0deg"), L.style.setProperty("--ry", "0deg"), L.style.setProperty("--sc", 1), L._down = !1;
  };
  n.addEventListener("pointermove", (L) => {
    var N, nt;
    const I = L.pointerType === "touch" || Ge() ? null : (nt = (N = L.target).closest) == null ? void 0 : nt.call(N, Ll);
    if (d && d !== I && p(d), d = I, !I || I.disabled) return;
    const z = _e.pivot, J = I.getBoundingClientRect(), et = (L.clientX - J.left) / J.width, at = (L.clientY - J.top) / J.height, X = 1;
    I.classList.add("mvPv", "mvMoving", "mvLit"), I.style.setProperty("--pv-persp", z.persp / Qi(Math.max(I.offsetWidth, I.offsetHeight)) + "px"), I.style.setProperty("--ry", (X * (et - 0.5) * 2 * z.tilt * Qi(I.offsetWidth)).toFixed(3) + "deg"), I.style.setProperty("--rx", (X * -(at - 0.5) * 2 * z.tilt * Qi(I.offsetHeight)).toFixed(3) + "deg"), I.style.setProperty("--mx", (et * 100).toFixed(1) + "%"), I.style.setProperty("--my", (at * 100).toFixed(1) + "%"), I._down || I.style.setProperty("--sc", Dl(I, z.lift));
  }, { passive: !0 }), n.addEventListener("pointerout", (L) => {
    d && !d.contains(L.relatedTarget) && (p(d), d = null);
  }), n.addEventListener("pointerdown", (L) => {
    var z, J;
    const I = Ge() ? null : (J = (z = L.target).closest) == null ? void 0 : J.call(z, Ll);
    I && (I._down = !0, I.classList.add("mvPv"), I.classList.remove("mvMoving"), I.style.setProperty("--sc", Dl(I, _e.pivot.press)));
  }), n.addEventListener("pointerup", (L) => {
    var z, J;
    const I = (J = (z = L.target).closest) == null ? void 0 : J.call(z, Ll);
    I && (I._down = !1, I.style.setProperty("--sc", L.pointerType === "touch" ? 1 : Dl(I, _e.pivot.lift)));
  });
  let g = null;
  n.addEventListener("pointerover", (L) => {
    var I, z, J;
    L.pointerType !== "touch" && ((J = (z = (I = L.target).closest) == null ? void 0 : z.call(I, ".tfBar")) == null || J.classList.add("mvHover"));
  }), n.addEventListener("pointerout", (L) => {
    var z, J;
    const I = (J = (z = L.target).closest) == null ? void 0 : J.call(z, ".tfBar");
    I && !I.contains(L.relatedTarget) && I !== g && I.classList.remove("mvHover");
  }), n.addEventListener("pointerdown", (L) => {
    var z, J;
    const I = (J = (z = L.target).closest) == null ? void 0 : J.call(z, ".tfBar");
    I && (g = I, I.classList.add("mvHold"));
  });
  const v = (L) => {
    if (!g) return;
    g.classList.remove("mvHold");
    const I = g.getBoundingClientRect();
    (L.pointerType === "touch" || L.clientX < I.left || L.clientX > I.right || L.clientY < I.top || L.clientY > I.bottom) && g.classList.remove("mvHover"), g = null;
  };
  window.addEventListener("pointerup", v, !0), window.addEventListener("pointercancel", v, !0), n.addEventListener("focusin", (L) => {
    var I, z;
    (z = (I = L.target).matches) != null && z.call(I, ".tfBar:focus-visible") && L.target.classList.add("mvHover");
  }), n.addEventListener("focusout", (L) => {
    var I;
    (I = L.target.classList) == null || I.remove("mvHover", "mvHold");
  }), n.addEventListener("keydown", (L) => {
    var z, J;
    const I = (J = (z = L.target).closest) == null ? void 0 : J.call(z, ".tfBar");
    !I || !["ArrowRight", "ArrowUp", "ArrowLeft", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(L.key) || (I.classList.add("mvHold"), clearTimeout(I._k), I._k = setTimeout(() => I.classList.remove("mvHold"), 350));
  }), n.addEventListener("click", (L) => {
    var z, J;
    const I = (J = (z = L.target).closest) == null ? void 0 : J.call(z, "button.tfIcon[data-act]");
    I && im(I);
  });
  let w = null;
  const C = (L, I, z) => {
    L.querySelector(":scope>.mvEdge") || L.insertAdjacentHTML("afterbegin", '<span class="mvEdgeFill" aria-hidden="true"></span><span class="mvEdge" aria-hidden="true"><i></i></span>');
    const J = L.getBoundingClientRect(), et = J.width / 2, at = J.height / 2, X = I.clientX - J.left - et, N = I.clientY - J.top - at, nt = X ? et / Math.abs(X) : 1 / 0, ct = N ? at / Math.abs(N) : 1 / 0, wt = Math.min(Math.max(1 / Math.min(nt, ct), 0), 1);
    let it = Math.atan2(N, X) * 180 / Math.PI + 90;
    it < 0 && (it += 360);
    const Z = z ? 100 : wt * 100;
    L.style.setProperty("--edge-proximity", Z.toFixed(3)), L.style.setProperty("--cursor-angle", it.toFixed(3) + "deg"), L.classList.toggle("mvLitEdge", z || Z >= _e.outline.lightAt);
  }, j = (L) => {
    L.classList.remove("mvLitEdge"), L.style.setProperty("--edge-proximity", "0"), L._down = !1;
  }, k = (L) => {
    var z;
    const I = (z = L.closest) == null ? void 0 : z.call(L, om);
    return I && !r.classList.contains("tfEditing") ? I : null;
  };
  n.addEventListener("pointermove", (L) => {
    if (L.pointerType === "touch") return;
    const I = k(L.target);
    w && w !== I && j(w), w = I, I && !I._down && C(I, L, !1);
  }, { passive: !0 }), n.addEventListener("pointerout", (L) => {
    w && !w.contains(L.relatedTarget) && (j(w), w = null);
  }), n.addEventListener("pointerdown", (L) => {
    const I = k(L.target);
    I && _e.outline.press && (I._down = !0, C(I, L, !0));
  }), n.addEventListener("pointerup", (L) => {
    const I = k(L.target);
    I && (I._down = !1, L.pointerType === "touch" ? j(I) : C(I, L, !1));
  }), new MutationObserver((L) => {
    var I;
    for (const z of L) {
      const J = z.target;
      if (z.type === "attributes") {
        (I = J.classList) != null && I.contains("tfMoreBackdrop") && !J.hidden && z.oldValue !== null && Nd(J);
        continue;
      }
      z.addedNodes.forEach((et) => {
        et.nodeType === 1 && et.classList.contains("tfMoreBackdrop") && !et.hidden && Nd(et);
      });
    }
  }).observe(r, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["hidden"], attributeOldValue: !0 });
}
const Gp = (n) => n.closest("[data-k],.tfMore,.tfMorePair") || n.getRootNode();
function Up(n, r) {
  const d = [];
  for (let p = n; p && p !== r && p.parentNode; p = p.parentNode) d.unshift([...p.parentNode.children].indexOf(p));
  return d;
}
const Yp = (n, r) => r.reduce((d, p) => d == null ? void 0 : d.children[p], n);
function im(n) {
  var J;
  if (Ge() || n._warp) return;
  const r = _e.warp, d = r.amount / 100, p = n.firstElementChild;
  if (!p) return;
  const g = { squash: { scale: 1 + 0.35 * d + " " + (1 - 0.55 * d) }, pinch: { scale: String(1 - 0.5 * d) }, twist: { rotate: 140 * d + "deg", scale: String(1 - 0.35 * d) }, flip: { rotate: "y 90deg" } }[r.style], v = "blur(" + 2 * d + "px)", w = n.getRootNode(), C = Gp(n), j = (J = C.dataset) == null ? void 0 : J.k, k = Up(n, C), L = n.getAttribute("aria-pressed") + "|" + n.dataset.act;
  n._warp = 1;
  const I = p.animate([{ scale: "1", rotate: "none", filter: "blur(0px)" }, { ...g, filter: v }], { duration: r.win, easing: Ce.exit, fill: "forwards" }), z = performance.now();
  I.finished.then(() => {
    const et = () => {
      var wt, it;
      const at = j ? C.isConnected ? C : (wt = w.querySelector) == null ? void 0 : wt.call(w, '[data-k="' + CSS.escape(j) + '"]') : C, X = at && Yp(at, k);
      if (X === n && n.getAttribute("aria-pressed") + "|" + n.dataset.act === L && performance.now() - z < 420) {
        requestAnimationFrame(et);
        return;
      }
      (((it = X == null ? void 0 : X.matches) != null && it.call(X, "button.tfIcon") ? X : n).firstElementChild || p).animate([{ ...g, filter: v }, { scale: "1", rotate: "none", filter: "blur(0px)" }], { duration: r.wout, easing: Ce[r.ease] }), I.cancel(), n._warp = 0;
    };
    et();
  });
}
const Zp = (n) => {
  let r = "M" + n[0][0].toFixed(1) + " " + n[0][1].toFixed(1);
  for (let d = 0; d < n.length - 1; d++) {
    const p = n[d - 1] || n[d], g = n[d], v = n[d + 1], w = n[d + 2] || v, C = [g[0] + (v[0] - p[0]) / 6, g[1] + (v[1] - p[1]) / 6], j = [v[0] - (w[0] - g[0]) / 6, v[1] - (w[1] - g[1]) / 6];
    r += "C" + C.map((k) => k.toFixed(1)).join(" ") + " " + j.map((k) => k.toFixed(1)).join(" ") + " " + v.map((k) => k.toFixed(1)).join(" ");
  }
  return r;
}, Kp = (n, r, d, p = "mvGrid") => [0, 1, 2].map((g) => {
  const v = (r + (d - r) * g / 2).toFixed(1);
  return '<line class="' + p + '" x1="0" x2="' + n + '" y1="' + v + '" y2="' + v + '"/>';
}).join("");
function Xp(n, r = n.querySelector(".mvLine"), d = n.querySelectorAll(".mvArea,.mvDot")) {
  if (Ge() || !(r != null && r.getTotalLength)) return;
  const p = _e.graphs, g = r.getTotalLength();
  r.animate([{ strokeDasharray: g, strokeDashoffset: g }, { strokeDasharray: g, strokeDashoffset: 0 }], { duration: p.draw, easing: Ce.standard }), [...d].forEach((v, w) => v.animate([{ opacity: 0 }, { opacity: 1 }], { duration: p.draw * 0.6, delay: p.draw * 0.3 + w * 12, easing: Ce.standard, fill: "backwards" }));
}
function ts(n, r, d, p, g) {
  if (n.getAnimations().forEach((L) => L.cancel()), n.style.left = p + "px", n.style.width = g + "px", Ge() || r === p && d === g) return;
  const v = _e.tabs, w = v.stretch / 100, C = (L, I) => ({ left: L + "px", width: I + "px" }), k = p > r ? C(r + (p - r) * (0.15 * (1 - w)), p + g - (r + (p - r) * (0.15 * (1 - w)))) : C(p, r + d - p - (r - p) * (0.15 * (1 - w)));
  n.animate([C(r, d), { offset: 0.5, ...k }, C(p, g)], { duration: v.dur, easing: Ce.standard });
}
function sm(n) {
  const r = ":is(.themeChoice,.wbSegments,.tfHeightTabs,.hcSeg,.tfSeg)", d = (g) => g.querySelector(':scope>[aria-pressed="true"],:scope>[aria-checked="true"],:scope>.active'), p = (g, v) => v ? [...g.children].indexOf(v) : -1;
  n.addEventListener("click", (g) => {
    var nt, ct, wt;
    const v = (ct = (nt = g.target).closest) == null ? void 0 : ct.call(nt, r + ">button"), w = v == null ? void 0 : v.parentElement;
    if (!w || Ge() || v.disabled) return;
    const C = d(w);
    if (!C || C === v) return;
    const j = p(w, C), k = w.getBoundingClientRect(), L = C.getBoundingClientRect(), I = getComputedStyle(C).borderRadius, z = w.getRootNode(), J = Gp(w), et = (wt = J.dataset) == null ? void 0 : wt.k, at = Up(w, J), X = performance.now(), N = () => {
      var G, qt, V;
      const it = et && !J.isConnected ? (G = z.querySelector) == null ? void 0 : G.call(z, '[data-k="' + CSS.escape(et) + '"]') : J, Z = it && Yp(it, at), U = (qt = Z == null ? void 0 : Z.matches) != null && qt.call(Z, r) ? d(Z) : null;
      if (!U || p(Z, U) === j) {
        performance.now() - X < 700 && requestAnimationFrame(N);
        return;
      }
      const H = Z.getBoundingClientRect(), yt = U.getBoundingClientRect(), Rt = getComputedStyle(U);
      (V = Z.querySelector(":scope>.mvSegInd")) == null || V.remove();
      const lt = document.createElement("span");
      lt.className = "mvSegInd", lt.style.cssText = "top:" + (yt.top - H.top - Z.clientTop) + "px;height:" + yt.height + "px;border-radius:" + I + ";background:" + Rt.backgroundColor + ";box-shadow:" + Rt.boxShadow, getComputedStyle(Z).position === "static" && (Z.style.position = "relative"), Z.prepend(lt), Z.classList.add("mvSegMoving"), ts(lt, L.left - k.left - Z.clientLeft, L.width, yt.left - H.left - Z.clientLeft, yt.width), clearTimeout(Z._seg), Z._seg = setTimeout(() => {
        lt.remove(), Z.classList.remove("mvSegMoving");
      }, _e.tabs.dur + 20);
    };
    requestAnimationFrame(N);
  }, !0);
}
const $p = (n) => getComputedStyle(n).placeItems.startsWith("end");
function Nd(n) {
  const r = n.firstElementChild;
  if (Ge() || !r || r.classList.contains("still")) return;
  const d = _e.dialog;
  n.animate([{ opacity: 0, backdropFilter: "blur(0px)" }, { opacity: 1, backdropFilter: "blur(" + d.blur + "px)" }], { duration: d.open, easing: Ce.standard }), r.style.animation = "none", r.animate($p(n) ? [{ transform: "translateY(100%)" }, { transform: "none" }] : [{ opacity: 0, transform: "scale(" + d.from / 100 + ")" }, { opacity: 1, transform: "none" }], { duration: d.open, easing: Ce[d.ease] }), [...(r.classList.contains("tfMorePair") && r.querySelector(".tfMore") || r).children].forEach((g, v) => g.animate([{ opacity: 0 }, { opacity: 1 }], { duration: d.open * 0.6, delay: d.open * 0.35 + v * 40, easing: Ce.standard, fill: "backwards" }));
}
function lm(n, r) {
  const d = n == null ? void 0 : n.firstElementChild;
  if (Ge() || !d || n.hidden || n._closing) {
    r();
    return;
  }
  const p = _e.dialog;
  n._closing = !0, n.style.pointerEvents = "none", n.animate([{ opacity: 1, backdropFilter: "blur(" + p.blur + "px)" }, { opacity: 0, backdropFilter: "blur(0px)" }], { duration: p.close, easing: Ce.exit, fill: "forwards" });
  const g = d.animate($p(n) ? [{ transform: "none" }, { transform: "translateY(100%)" }] : [{ opacity: 1, transform: "none" }, { opacity: 0, transform: "scale(" + p.from / 100 + ")" }], { duration: p.close, easing: Ce.exit, fill: "forwards" });
  let v = !1;
  const w = () => {
    v || (v = !0, n._closing = !1, n.style.pointerEvents = "", n.getAnimations().forEach((C) => C.cancel()), d.getAnimations().forEach((C) => C.cancel()), r());
  };
  g.finished.then(w, w), setTimeout(w, p.close + 80);
}
const cm = '<span class="mvTick" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M20 6L9 17L4 12" pathLength="1"/></svg></span>';
function dm(n, r) {
  n.replaceChildren(), n.insertAdjacentHTML("afterbegin", cm), n.appendChild(Object.assign(document.createElement("span"), { className: "mvToastText", textContent: r }));
}
function pm(n) {
  if (Ge()) return;
  const r = _e.confirm;
  n.animate([{ opacity: 0, translate: "0 18px" }, { opacity: 1, translate: "0 0" }], { duration: r.dur, easing: Ce.spring });
  const d = n.querySelector(".mvTick path");
  d && r.draw && d.animate([{ strokeDasharray: "1", strokeDashoffset: "1" }, { strokeDasharray: "1", strokeDashoffset: "0" }], { duration: 420, delay: r.dur * 0.5, easing: Ce.standard, fill: "backwards" });
}
const El = (n, r, d, p, g = 1) => (n + r * d * g) * Math.pow(p, g);
function Bl(n) {
  const r = _e.drag.squash / 100;
  !n || Ge() || !r || n.animate([{ transform: "scale(" + (1 + r * 0.4) + "," + (1 - r) + ")" }, { transform: "scale(" + (1 - r * 0.1) + "," + (1 + r * 0.24) + ")" }, { transform: "none" }], { duration: 340, easing: "ease-out" });
}
function Od(n) {
  if (!n || Ge()) return;
  const r = _e.expand;
  [...n.children].slice(1).forEach((d, p) => d.animate([{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "none" }], { duration: 260, delay: r.delay + p * r.stagger, easing: "cubic-bezier(.2,0,0,1)", fill: "backwards" }));
}
const Ne = 6e4, oe = 36e5, ha = 864e5, Gr = 1440, um = 6, fm = 10 * Ne, Id = 3, hm = 3, Vi = { day: [6, 22], waking: [7, 23], all: [0, 24] }, mm = [[-5, [91, 141, 239]], [5, [79, 195, 230]], [12, [95, 211, 160]], [18, [255, 211, 77]], [24, [255, 159, 67]], [30, [255, 91, 79]]], gm = "M6.5 18.5h11a4 4 0 0 0 .4-7.98 5.5 5.5 0 0 0-10.6-1.1A4.5 4.5 0 0 0 6.5 18.5Z", Fd = (n, r, d, p) => '<circle cx="' + n + '" cy="' + r + '" r="' + d + '"/><path d="' + [0, 45, 90, 135, 180, 225, 270, 315].map((g) => {
  const v = Math.cos(g * Math.PI / 180), w = Math.sin(g * Math.PI / 180), C = d + 2, j = d + 2 + p;
  return "M" + (n + v * C).toFixed(2) + " " + (r + w * C).toFixed(2) + "L" + (n + v * j).toFixed(2) + " " + (r + w * j).toFixed(2);
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
const Rl = (n, r) => '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + bm(n, r) + "</svg>", wm = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), vm = 30 * Ne, ym = 7, xm = 3, Wd = 1, km = Ne, Mm = 15 * Ne, Sm = 5, ne = {
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
}, Xl = 7, Po = 256, _m = 3, jd = 700, Cm = 1800, Jp = 5 * Ne;
let zi = null, Vd = 0, Wr = null;
function Am() {
  return zi && Date.now() - Vd < Jp ? Promise.resolve(zi) : Wr || (Wr = fetch("https://api.rainviewer.com/public/weather-maps.json").then((n) => n.ok ? n.json() : Promise.reject(new Error(String(n.status)))).then((n) => {
    var p, g;
    const r = (((p = n.radar) == null ? void 0 : p.past) || []).slice(-6), d = (((g = n.radar) == null ? void 0 : g.nowcast) || []).slice(0, _m);
    return zi = { host: n.host, frames: [...r.map((v) => ({ ...v, past: !0 })), ...d] }, Vd = Date.now(), zi;
  }).finally(() => {
    Wr = null;
  }), Wr);
}
function Tm(n, r, d, p) {
  const g = Xl, v = 2 ** g, w = n * Math.PI / 180, C = (r + 180) / 360 * v * Po, j = (1 - Math.log(Math.tan(w) + 1 / Math.cos(w)) / Math.PI) / 2 * v * Po, k = C - d / 2, L = j - p / 2, I = [];
  for (let z = Math.floor(k / Po); z <= Math.floor((k + d - 1) / Po); z++) for (let J = Math.floor(L / Po); J <= Math.floor((L + p - 1) / Po); J++)
    J < 0 || J >= v || I.push({ x: (z % v + v) % v, y: J, left: z * Po - k, top: J * Po - L });
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
}, Dm = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], Em = Object.keys(gt.phases), Bm = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)", extreme: "var(--purple-color, #926bc7)" }, zd = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, Qp = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], Gi = 100, Gd = "µg/m³", Rm = "weather_alerts.air_quality_pollen", ns = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], Pm = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, Hm = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], Nm = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, Om = { daily: 1, hourly: 2 }, vt = (n) => String(n ?? "").replace(/[&<>"']/g, (r) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[r]), Ke = (n, r) => n.replace(/\{(\w+)\}/g, (d, p) => r[p] ?? ""), No = (n) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + n + '"/></svg>', Ud = /* @__PURE__ */ new Map();
function tu(n) {
  let r = Ud.get(n);
  if (r === void 0) {
    const d = "http://www.w3.org/2000/svg", p = document.createElementNS(d, "svg"), g = document.createElementNS(d, "path");
    p.setAttribute("viewBox", "0 0 24 24"), p.style.cssText = "position:absolute;width:24px;height:24px;visibility:hidden;pointer-events:none", g.setAttribute("d", n), p.append(g), document.body.append(p);
    const v = g.getBBox();
    p.remove();
    const w = Math.max(v.width, v.height), C = w ? 26 * 24 / w : 0, j = C / 24;
    r = w ? "width:" + C.toFixed(2) + "px;height:" + C.toFixed(2) + "px;translate:" + ((12 - v.x - v.width / 2) * j).toFixed(2) + "px " + ((12 - v.y - v.height / 2) * j).toFixed(2) + "px" : "", Ud.set(n, r);
  }
  return r ? '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true" style="' + r + '"><path d="' + n + '"/></svg>' : No(n);
}
const Im = () => {
  var n;
  return !!((n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches);
}, pe = (n) => n != null && n !== "" && Number.isFinite(Number(n)), Yd = /* @__PURE__ */ new Map(), Zd = /* @__PURE__ */ new Map(), Pl = /* @__PURE__ */ new WeakMap(), Fm = (n) => {
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
  const g = (r == null ? void 0 : r.number_format) === "none", v = { maximumFractionDigits: 2, ...d, ...g ? { useGrouping: !1 } : {} }, w = g ? "en-US" : Fm(r), C = JSON.stringify([w, v]);
  let j = Yd.get(C);
  if (!j) {
    try {
      j = new Intl.NumberFormat(w, v);
    } catch {
      j = new Intl.NumberFormat(void 0, v);
    }
    Yd.set(C, j);
  }
  return j.format(p);
}
const Jl = (n) => {
  var r;
  return ((r = n == null ? void 0 : n.locale) == null ? void 0 : r.language) || (n == null ? void 0 : n.language) || void 0;
};
function qm(n) {
  if (!n) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (Pl.has(n)) return Pl.get(n);
  const r = n.time_format, d = r === "language" || r === "system" || !r ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(r === "language" ? n.language : void 0).includes("10") : r === "12";
  return Pl.set(n, d), d;
}
const eu = (n) => {
  var r, d;
  return ((r = n == null ? void 0 : n.locale) == null ? void 0 : r.time_zone) === "server" && ((d = n == null ? void 0 : n.config) != null && d.time_zone) ? n.config.time_zone : void 0;
};
function au(n, r) {
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
const ze = (n, r) => au(Jl(r), { hour: "numeric", minute: "2-digit", hourCycle: qm(r == null ? void 0 : r.locale) ? "h12" : "h23", timeZone: eu(r) }).format(n), Kd = (n, r) => au(Jl(r), { weekday: "short", timeZone: eu(r) }).format(n), Wm = (n, r) => n.toLocaleDateString(Jl(r), { weekday: "narrow" }), ge = (n, r) => pe(r) ? $t(Math.round(Number(r)), n.locale) + "°" : "–", sn = (n) => {
  const r = new Date(n);
  return r.setHours(0, 0, 0, 0), r;
}, ar = (n, r) => n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth() && n.getDate() === r.getDate(), oa = Math.PI / 180, jm = 2440588, Vm = 2451545, rs = oa * 23.4397, zm = 149598e3, Gm = -0.833 * oa, Um = 0.133 * oa, Xd = 5 * Ne, ou = (n) => n.getTime() / ha - 0.5 + jm - Vm, nu = (n, r) => Math.atan2(Math.sin(n) * Math.cos(rs) - Math.tan(r) * Math.sin(rs), Math.cos(n)), ru = (n, r) => Math.asin(Math.sin(r) * Math.cos(rs) + Math.cos(r) * Math.sin(rs) * Math.sin(n)), Ym = (n, r) => oa * (280.16 + 360.9856235 * n) - r, Zm = (n, r, d) => Math.asin(Math.sin(r) * Math.sin(d) + Math.cos(r) * Math.cos(d) * Math.cos(n));
function iu(n) {
  const r = oa * (357.5291 + 0.98560028 * n), d = oa * (1.9148 * Math.sin(r) + 0.02 * Math.sin(2 * r) + 3e-4 * Math.sin(3 * r)), p = r + d + oa * 102.9372 + Math.PI;
  return { ra: nu(p, 0), dec: ru(p, 0), dist: zm };
}
function su(n) {
  const r = oa * (218.316 + 13.176396 * n), d = oa * (134.963 + 13.064993 * n), p = oa * (93.272 + 13.22935 * n), g = r + oa * 6.289 * Math.sin(d), v = oa * 5.128 * Math.sin(p);
  return { ra: nu(g, v), dec: ru(g, v), dist: 385001 - 20905 * Math.cos(d) };
}
const lu = (n, r, d, p) => {
  const g = ou(r), v = n(g);
  return Zm(Ym(g, oa * -p) - v.ra, oa * d, v.dec);
}, is = (n, r, d) => lu(iu, n, r, d), Km = (n, r, d) => lu(su, n, r, d);
function cu(n, r, d, p) {
  const g = {};
  let v = d.getTime(), w = n(d) - r;
  for (let C = v + Xd; C <= p.getTime(); C += Xd) {
    const j = n(new Date(C)) - r;
    if (w < 0 != j < 0) {
      const k = new Date(v + (C - v) * w / (w - j));
      j > 0 ? g.rise ?? (g.rise = k) : g.set ?? (g.set = k);
    }
    v = C, w = j;
  }
  return g;
}
const du = (n) => {
  const r = sn(n);
  return [r, new Date(r.getTime() + ha)];
}, Xm = (n, r, d) => cu((p) => is(p, r, d), Gm, ...du(n)), $m = (n, r, d) => cu((p) => Km(p, r, d), Um, ...du(n));
function Hl(n) {
  const r = ou(n), d = iu(r), p = su(r), g = Math.acos(Math.sin(d.dec) * Math.sin(p.dec) + Math.cos(d.dec) * Math.cos(p.dec) * Math.cos(d.ra - p.ra)), v = Math.atan2(d.dist * Math.sin(g), p.dist - d.dist * Math.cos(g)), w = Math.atan2(Math.cos(d.dec) * Math.sin(d.ra - p.ra), Math.sin(d.dec) * Math.cos(p.dec) - Math.cos(d.dec) * Math.sin(p.dec) * Math.cos(d.ra - p.ra));
  return { fraction: (1 + Math.cos(v)) / 2, phase: 0.5 + 0.5 * v * (w < 0 ? -1 : 1) / Math.PI };
}
const Jm = (n) => {
  const r = n * 28;
  return r < 0.5 || r > 27.5 ? "new_moon" : r < 6.5 ? "waxing_crescent" : r < 7.5 ? "first_quarter" : r < 13.5 ? "waxing_gibbous" : r < 14.5 ? "full_moon" : r < 20.5 ? "waning_gibbous" : r < 21.5 ? "last_quarter" : "waning_crescent";
}, sr = (n) => {
  const r = n == null ? void 0 : n.config;
  return r && pe(r.latitude) && pe(r.longitude) ? { lat: Number(r.latitude), lon: Number(r.longitude) } : null;
};
function or(n, r) {
  var k, L, I;
  const d = sr(n), p = d ? Xm(r, d.lat, d.lon) : {}, g = (k = n == null ? void 0 : n.states) == null ? void 0 : k["sun.sun"], v = sn(r).getTime(), w = (z) => {
    const J = z ? new Date(z) : null;
    return J && Number.isFinite(J.getTime()) && sn(J).getTime() === v ? J : null;
  }, C = w((L = g == null ? void 0 : g.attributes) == null ? void 0 : L.next_rising), j = w((I = g == null ? void 0 : g.attributes) == null ? void 0 : I.next_setting);
  return C && (p.rise = C), j && (p.set = j), p;
}
function Qm(n) {
  var p;
  const r = (p = n == null ? void 0 : n.states) == null ? void 0 : p["sun.sun"];
  if ((r == null ? void 0 : r.state) === "below_horizon" || (r == null ? void 0 : r.state) === "above_horizon") return r.state === "below_horizon";
  const d = sr(n);
  return d ? is(/* @__PURE__ */ new Date(), d.lat, d.lon) < 0 : !1;
}
const Rn = (n) => !!n && n.state !== "unavailable" && n.state !== "unknown", lr = (n, r) => {
  var p;
  const d = (p = n.entities) == null ? void 0 : p[r];
  return !d || !d.hidden && !d.entity_category;
}, Le = (n, r, d) => {
  var p, g;
  for (const v of r) {
    const w = (p = n.states) == null ? void 0 : p[v];
    if (!Rn(w)) continue;
    const C = (g = w.attributes) == null ? void 0 : g[d];
    if (C != null && C !== "") return { stateObj: w, value: C };
  }
}, t0 = (n, r) => r.map((d) => {
  var p;
  return (p = n.states) == null ? void 0 : p[d];
}).find(Rn), e0 = (n, r, d) => r.map((p) => {
  var g;
  return (g = n.states) == null ? void 0 : g[p];
}).find((p) => {
  var g;
  return Rn(p) && (((g = p.attributes) == null ? void 0 : g.supported_features) == null || Number(p.attributes.supported_features) & Om[d]);
});
function rn(n, r, d) {
  var v, w, C, j;
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
      return g.temperature_unit || ((j = (C = n.config) == null ? void 0 : C.unit_system) == null ? void 0 : j.temperature) || "";
  }
}
function es(n, r, d, p) {
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
  const g = es(n, r, d, p);
  return (g.number + " " + g.unit).trim();
}
function Ro(n, r) {
  var p;
  try {
    if (typeof n.formatEntityState == "function") return n.formatEntityState(r);
  } catch {
  }
  const d = (p = r.attributes) == null ? void 0 : p.unit_of_measurement;
  return Lm[r.state] || (d && pe(r.state) ? $t(r.state, n.locale) + " " + d : r.state);
}
function on(n, r) {
  var d;
  try {
    if (typeof n.formatEntityName == "function") return n.formatEntityName(r, { type: "entity" });
  } catch {
  }
  return ((d = r.attributes) == null ? void 0 : d.friendly_name) || r.entity_id;
}
const Jd = (n) => n < 3 ? "low" : n < 6 ? "moderate" : n < 8 ? "high" : n < 11 ? "very_high" : "extreme", Ui = (n) => Qp.find(([, r]) => n <= r)[0];
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
const pu = (n, r, d) => {
  var g, v, w;
  const p = (v = (g = n.entities) == null ? void 0 : g[d]) == null ? void 0 : v.platform;
  return !!p && !!((w = r[p]) != null && w.includes(Rm));
};
function n0(n, r) {
  const d = /* @__PURE__ */ new Map();
  return Object.values(n.states || {}).filter((p) => {
    var g;
    return p.entity_id.startsWith("sensor.") && ns.includes(((g = p.attributes) == null ? void 0 : g.device_class) ?? "") && lr(n, p.entity_id) && pu(n, r, p.entity_id);
  }).sort((p, g) => p.entity_id.localeCompare(g.entity_id)).forEach((p) => {
    d.has(p.attributes.device_class) || d.set(p.attributes.device_class, p.entity_id);
  }), ns.map((p) => d.get(p)).filter(Boolean);
}
const r0 = (n, r) => Object.values(n.states || {}).filter((d) => {
  var p, g;
  return d.entity_id.startsWith("sensor.") && lr(n, d.entity_id) && pu(n, r, d.entity_id) && (((g = (p = n.entities) == null ? void 0 : p[d.entity_id]) == null ? void 0 : g.translation_key) ?? d.entity_id).toLowerCase().includes("pollen");
}).map((d) => d.entity_id).sort();
function ep(n, r, d) {
  const p = Math.max(r - n, 1e-6), g = d[d.length - 1], v = d.find((k) => p / k <= 4) ?? g * Math.ceil(p / (4 * g)), w = Math.floor(n / v) * v;
  let C = Math.ceil(r / v) * v;
  C === w && (C = w + v);
  const j = [];
  for (let k = w; k <= C + v / 1e3; k += v) j.push(k);
  return { min: w, max: C, ticks: j };
}
const i0 = (n, r, d) => {
  const p = (w) => [1, 3, 5].map((C) => parseInt(w.slice(C, C + 2), 16)), g = p(n), v = p(r);
  return "rgb(" + g.map((w, C) => Math.round(w + (v[C] - w) * d)).join(", ") + ")";
}, s0 = (n, r, d, p) => {
  const g = d * Math.abs(1 - 2 * p), v = p < 0.5 ? 0 : 1;
  return "M " + n + " " + (r - d) + " A " + d + " " + d + " 0 0 0 " + n + " " + (r + d) + " A " + g + " " + d + " 0 0 " + v + " " + n + " " + (r - d) + " Z";
}, ea = ({ icon: n, name: r, sub: d, visual: p, double: g, backdrop: v, cls: w, zone: C, callouts: j }) => '<div class="wbCard wbSquare' + (g ? " wbDouble" : "") + (v ? " wbHasBackdrop" : "") + (C != null ? " wbZoned" : "") + (w ? " " + w : "") + '">' + (v ? '<div class="wbBackdrop" aria-hidden="true">' + v + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + tu(n) + '</div><div class="wbText"><span class="wbName">' + vt(r) + "</span>" + (d ? '<span class="wbSub">' + vt(d) + "</span>" : "") + "</div></div>" + (C != null ? '<div class="wbZone">' + C + "</div>" + (j != null && j.length ? '<div class="wbCallouts">' + j.slice(0, 3).map((k) => Array.isArray(k) ? '<span class="wbCallout"><span>' + vt(k[0]) + "</span><span>" + vt(k[1]) + "</span></span>" : '<span class="wbCallout wbAdvice"><span>' + vt(k) + "</span></span>").join("") + "</div>" : "") : '<div class="wbVisual">' + p + "</div>") + "</div>", Yi = (n) => '<div class="wbZoneM">' + n + "</div>", Pa = (n, r) => '<div class="wbValue"><span class="wbNum">' + vt(n) + "</span>" + (r ? '<span class="wbUnitV">' + vt(r) + "</span>" : "") + "</div>";
function l0(n) {
  const r = n.max - n.min || 1, d = (C) => 100 - (Math.min(n.max, Math.max(n.min, C)) - n.min) / r * 100, p = (C) => C / Gr * 100 + "%", g = (C) => C.map((j) => j.t + "," + d(j.v)).join(" "), v = n.kind === "line" ? n.points : [];
  let w = '<div class="wbDayChart"><div class="wbDcSun">' + n.sun.map((C) => '<span class="wbDcSunMark" style="left:' + p(C.t) + '">' + No(C.rise ? ne.sunsetUp : ne.sunsetDown) + vt(C.label) + "</span>").join("") + "</div>";
  return w += '<div class="wbDcY">' + n.ticks.map((C) => '<span style="top:' + d(C) + '%">' + vt(n.format(C)) + "</span>").join("") + "</div>", w += '<div class="wbDcPlot"><svg viewBox="0 0 ' + Gr + ' 100" preserveAspectRatio="none">' + n.night.map(([C, j]) => '<rect class="wbDcNight" x="' + C + '" y="0" width="' + (j - C) + '" height="100"></rect>').join("") + n.ticks.map((C) => '<line class="wbDcGrid" x1="0" x2="' + Gr + '" y1="' + d(C) + '" y2="' + d(C) + '" vector-effect="non-scaling-stroke"></line>').join("") + n.sun.map((C) => '<line class="wbDcSunLine" x1="' + C.t + '" x2="' + C.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (n.past && n.past.length > 1 ? '<polyline class="wbDcPast" points="' + g(n.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (v.length > 1 ? '<polygon class="wbDcArea" points="' + v[0].t + ",100 " + g(v) + " " + v[v.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + g(v) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (n.now ? '<line class="wbDcNow" x1="' + n.now.t + '" x2="' + n.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (n.kind === "bars" ? n.points.filter((C) => C.v > 0).map((C) => '<i class="wbDcBar" style="left:' + p(C.t + 12) + ";width:" + p(36) + ";height:" + (100 - d(C.v)) + '%"></i>').join("") : "") + (n.now && n.kind === "line" ? '<i class="wbDcDot" style="left:' + p(n.now.t) + ";top:" + d(n.now.v) + '%"></i>' : "") + (n.peak ? '<span class="wbDcPeak" style="left:' + p(n.peak.t) + ";top:" + d(n.peak.v) + '%">' + vt(n.peak.label) + "</span>" : "") + (n.note ? '<span class="wbDcNote">' + vt(n.note) + "</span>" : "") + "</div>", w += '<div class="wbDcX">' + n.hours.map((C) => '<span class="' + (C.minor ? "wbMinor" : "") + '" style="left:' + p(C.t) + '">' + vt(C.label) + "</span>").join("") + "</div></div>", w;
}
function ap(n, r, d = 120, p = 300) {
  const w = n.map((N) => N.value), C = Math.min(...w), j = Math.max(...w), k = j - C || 1, L = (N) => N / (n.length - 1) * p, I = (N) => 18 + (1 - (N - C) / k) * (d - 18 - 18), z = n.map((N, nt) => [L(nt), I(N.value)]), J = z.length > 2 ? Zp(z) : "M" + z.map((N) => N[0].toFixed(1) + " " + N[1].toFixed(1)).join("L"), et = w.indexOf(j), at = w.indexOf(C), X = (N) => N === 0 ? "start" : N === n.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 ' + p + " " + d + '" aria-hidden="true">' + Kp(p, 18, d - 18) + ('<path class="wbArea" d="' + J + "L" + p + " " + (d - 18) + "L0 " + (d - 18) + 'Z"></path>') + '<path class="wbLine" d="' + J + '" vector-effect="non-scaling-stroke"></path><text x="' + L(et) + '" y="' + (I(j) - 6) + '" text-anchor="' + X(et) + '">' + vt(r(j)) + '</text><text x="' + L(at) + '" y="' + (I(C) + 14) + '" text-anchor="' + X(at) + '">' + vt(r(C)) + '</text><text x="0" y="' + d + '" text-anchor="start">' + vt(n[0].label) + '</text><text x="' + p + '" y="' + d + '" text-anchor="end">' + vt(n[n.length - 1].label) + "</text></svg>";
}
function c0(n, r) {
  const v = n.map((I) => I.value).concat([]), w = Math.min(...v) - 2, C = Math.max(...v) + 1, j = C - w || 1, k = 300 / n.length, L = (I) => (1 - (I - w) / j) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + n.map((I, z) => '<rect class="wbBar' + (I.now ? " wbNowBar" : "") + '" x="' + (z * k + k * 0.2) + '" y="' + L(I.value) + '" width="' + k * 0.6 + '" height="' + (104 - L(I.value)) + '" rx="6"></rect><text x="' + (z * k + k / 2) + '" y="120" text-anchor="middle">' + vt(I.label) + "</text>").join("") + "</svg>";
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
function np(n, { getHass: r, entityId: d, style: p = "bitmap", motion: g = !0, cards: v, onOpen: w, hoursWindow: C, radarSource: j } = {}) {
  var Jo, In;
  const k = "wb" + ++f0 + "-", L = document.createElement("div");
  L.className = "wb", L.dataset.style = p;
  const I = document.createElement("div");
  I.className = "wbBento", L.appendChild(I), n.replaceChildren(L);
  const z = document.createElement("div");
  z.className = "wb wbPopup", z.dataset.style = p, z.hidden = !0;
  const J = ["aq_tile", "pollen_tile", "radar_tile"], et = ["current", "hourly", "sun", "pollen_tile", "moon", "uv_index", "aq_tile", "humidity", "pressure", "wind", "visibility", "radar_tile", "compared_to_average", "precipitation", "air_quality"].filter((s) => !v || v.includes(s)), at = { current: "wide", hourly: "wide", compared_to_average: "double" }, X = ["sun", "moon", "uv_index", "aq_tile", "pollen_tile", "humidity", "pressure", "wind"], N = {};
  et.forEach((s) => {
    const h = document.createElement("div");
    h.className = "wbItem", h.dataset.card = s, h.dataset.size = at[s] || "tile", h.hidden = !0, X.includes(s) && (h.dataset.xl = ""), I.appendChild(h), N[s] = { el: h, html: null };
  });
  let nt = !1, ct = null, wt = 0, it = -1, Z = !1, U = null, H = "";
  const yt = "homecore-next-view", Rt = (() => {
    try {
      return localStorage.getItem(yt);
    } catch {
      return null;
    }
  })(), lt = { graph: void 0, range: { preset: "day" }, picking: !1, openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", hourlyView: Rt === "bars" ? "bars" : "strip", aq: void 0 }, G = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let qt = /* @__PURE__ */ new Date(), V = /* @__PURE__ */ new Date();
  const Q = {}, A = {}, ut = {}, ot = (s) => {
    var h;
    return ((h = ut[s]) == null ? void 0 : h.forecast) ?? [];
  }, st = (s, h) => {
    var m;
    return ut[h] ? (m = s.states) == null ? void 0 : m[ut[h].entityId] : void 0;
  };
  function xt(s) {
    const h = A[s];
    h && (h.unsub.then((m) => {
      typeof m == "function" && m();
    }).catch(() => {
    }), delete A[s]), ut[s] && delete ut[s];
  }
  function ht(s, h, m) {
    var D;
    if (typeof ((D = s.connection) == null ? void 0 : D.subscribeMessage) != "function") return;
    const b = { entityId: m };
    try {
      b.unsub = Promise.resolve(s.connection.subscribeMessage((O) => {
        nt || A[h] !== b || (O != null && O.forecast ? ut[h] = { entityId: m, forecast: O.forecast } : delete ut[h], mn());
      }, { type: "weather/subscribe_forecast", forecast_type: h, entity_id: m }));
    } catch (O) {
      b.unsub = Promise.reject(O);
    }
    b.unsub.catch(() => {
      A[h] === b && delete A[h];
    }), A[h] = b;
  }
  function kt(s, h) {
    var m;
    for (const b of ["daily", "hourly"]) {
      const D = e0(s, h, b);
      ((m = A[b]) == null ? void 0 : m.entityId) !== (D == null ? void 0 : D.entity_id) && (xt(b), D && ht(s, b, D.entity_id));
    }
  }
  const Ft = (s, h, m, b = !1) => s.callWS({
    type: "history/history_during_period",
    start_time: m.toISOString(),
    end_time: (/* @__PURE__ */ new Date()).toISOString(),
    entity_ids: [h],
    minimal_response: b,
    no_attributes: b,
    significant_changes_only: !1
  });
  async function le(s, h) {
    var F, K, W;
    const m = Le(s, h, "pressure");
    if (!m) return;
    const b = m.stateObj.entity_id, D = await Ft(s, b, new Date(Date.now() - 3 * oe)), O = (W = (K = (F = D == null ? void 0 : D[b]) == null ? void 0 : F.find(($) => {
      var tt;
      return typeof ((tt = $.a) == null ? void 0 : tt.pressure) == "number";
    })) == null ? void 0 : K.a) == null ? void 0 : W.pressure;
    G.pressureHistory = typeof O == "number" ? { entityId: b, value: O } : void 0;
  }
  async function mt(s, h) {
    var K;
    const m = Le(s, h, "temperature");
    if (!m) return;
    const b = m.stateObj.entity_id, D = sn(/* @__PURE__ */ new Date()), O = await Ft(s, b, new Date(D.getTime() - ym * ha)), F = /* @__PURE__ */ new Map();
    for (const W of (O == null ? void 0 : O[b]) ?? []) {
      const $ = (K = W.a) == null ? void 0 : K.temperature, tt = new Date((W.lc ?? W.lu) * 1e3);
      if (typeof $ != "number" || tt >= D) continue;
      const ft = tt.toDateString();
      F.set(ft, Math.max(F.get(ft) ?? -1 / 0, $));
    }
    G.temperatureHistory = { entityId: b, dailyHighs: [...F.values()], days: [...F.entries()].map(([W, $]) => ({ date: new Date(W), high: $ })) };
  }
  async function $e(s) {
    const h = Nl(s);
    if (!h) return;
    const m = await s.callWS({ type: "recorder/statistic_during_period", statistic_id: h, rolling_window: { duration: { hours: 24 } } });
    G.rain = { entityId: h, change: (m == null ? void 0 : m.change) ?? void 0 };
  }
  function ho() {
    const s = r == null ? void 0 : r();
    if (!s || nt || typeof s.callWS != "function") return;
    const h = Ct(s);
    G.lastFetch = Date.now(), [le(s, h), mt(s, h), $e(s)].forEach((m) => m.then(() => mn(), () => {
    }));
  }
  async function ln() {
    const s = r == null ? void 0 : r();
    if (!s) return;
    const h = Le(s, Ct(s), "temperature");
    if (!h) return;
    const m = h.stateObj.entity_id, b = sn(/* @__PURE__ */ new Date());
    try {
      const D = await Ft(s, m, b), O = (F) => ((D == null ? void 0 : D[m]) ?? []).map((K) => {
        var W;
        return { time: K.lu * 1e3, value: (W = K.a) == null ? void 0 : W[F] };
      }).filter((K) => typeof K.value == "number");
      G.todayHistory = { day: b.toDateString(), fetched: Date.now(), temperature: O("temperature"), humidity: O("humidity") }, mn();
    } catch {
    }
  }
  async function qo(s) {
    const h = r == null ? void 0 : r();
    if (h)
      try {
        const m = await Ft(h, s, new Date(Date.now() - 24 * oe), !0), b = ((m == null ? void 0 : m[s]) ?? []).filter((O) => pe(O.s)), D = Math.max(1, Math.ceil(b.length / 48));
        G.aqHistory = { entityId: s, points: b.filter((O, F) => F % D === 0).map((O) => ({ label: ze(new Date(O.lu * 1e3), h), value: Number(O.s) })) }, mn();
      } catch {
      }
  }
  function Ka(s) {
    G.categories === void 0 && (G.categories = null, Promise.resolve().then(() => s.callWS({ type: "integration/descriptions" })).then((h) => {
      G.categories = o0(h);
    }, () => {
      G.categories = {};
    }).then(() => mn()));
  }
  function Ct(s) {
    var m;
    const h = Object.keys(s.states || {}).filter((b) => b.startsWith("weather.") && lr(s, b)).sort();
    return d && ((m = s.states) != null && m[d]) ? [d, ...h.filter((b) => b !== d)] : h;
  }
  const Ae = (s) => G.categories ? { air: n0(s, G.categories), pollen: r0(s, G.categories) } : { air: [], pollen: [] };
  function We(s, h, m, b) {
    if (p === "line") return '<span class="wbWx wbS' + h + ' wbLineIcon" aria-hidden="true">' + Rl(s, m || s === "clear-night") + "</span>";
    if (p === "smooth") {
      const D = zh(s, h === 90, m, k + "g-" + b);
      return '<span class="wbWx wbS' + h + " wb" + D.k[0].toUpperCase() + D.k.slice(1) + (D.night ? " wbNight" : "") + '" aria-hidden="true">' + D.svg + "</span>";
    }
    return '<span class="wbWx wbS' + h + '" aria-hidden="true"><canvas data-wb-wx="' + vt(Ep(s, m)) + '" data-size="' + h + '"></canvas></span>';
  }
  const Kt = () => ot("daily").filter((s) => s.templow != null).slice(0, um);
  function na(s, h) {
    const m = new Date(h.datetime), b = /* @__PURE__ */ new Date();
    return ar(m, b) ? gt.today : ar(m, new Date(b.getTime() + ha)) ? gt.tomorrow : Kd(m, s);
  }
  const cr = (s, h, m) => m === 0 ? na(s, h) : Kd(new Date(h.datetime), s);
  function Vt(s, h) {
    var tt, ft, Nt, Tt;
    const m = t0(s, h);
    if (!m) return "";
    const b = Kt(), D = lt.openDay !== void 0 ? b[lt.openDay] : void 0, O = Le(s, h, "temperature"), F = b[0], K = F && ar(new Date(F.datetime), /* @__PURE__ */ new Date()), W = ((ft = (tt = s.config) == null ? void 0 : tt.unit_system) == null ? void 0 : ft.temperature) || ((Nt = m.attributes) == null ? void 0 : Nt.temperature_unit) || "";
    let $ = '<div class="wbCard wbWeather' + (D ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (D ? " inert" : "") + '><div class="wbNow">' + (w ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + vt(gt.openPage) + '">' : '<div class="wbCurrent">') + We(m.state, 90, Qm(s), "now") + '<div class="wbTempBlock">' + (O && pe(O.value) ? '<div class="wbTemp"><span class="wbDeg">' + vt($t(Math.round(Number(O.value)), s.locale)) + '</span><span class="wbUnit">' + vt(W) + "</span></div>" : "") + '<div class="wbPlace">' + vt(((Tt = s.config) == null ? void 0 : Tt.location_name) ?? "") + "</div></div>" + (w ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + vt(Ro(s, m)) + "</div>" + (K && F.templow != null ? '<div class="wbRange">' + vt(Ke(gt.range, { high: ge(s, F.temperature), low: ge(s, F.templow) })) + "</div>" : "") + "</div></div>";
    if ($ += Sa(s) + xe(s), b.length) {
      const St = K && O && pe(O.value) ? ge(s, O.value) : "", Wt = (Lt, dt, Ot) => Lt === 0 && St ? '<span class="wbAsDay">' + vt(dt) + '</span><span class="wbAsNow">' + vt(Ot) + "</span>" : vt(dt);
      $ += '<div class="wbColumns" role="list">' + b.map((Lt, dt) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + dt + '" data-wb-focus="col-' + dt + '"><span class="wbDay">' + Wt(dt, cr(s, Lt, dt), gt.now) + "</span>" + We(Lt.condition ?? "cloudy", 60, !1, "col" + dt) + '<span class="wbTemps"><span class="wbHi">' + Wt(dt, ge(s, Lt.temperature), St) + '</span><span class="wbLo">' + vt(ge(s, Lt.templow)) + "</span></span></button>").join("") + "</div>", $ += '<div class="wbHalves" role="list">' + b.map((Lt, dt) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + dt + '" data-wb-focus="half-' + dt + '">' + We(Lt.condition ?? "cloudy", 40, !1, "half" + dt) + '<span class="wbText"><span class="wbName">' + vt(na(s, Lt)) + '</span><span class="wbSub">' + vt(Ke(gt.highLow, { high: ge(s, Lt.temperature), low: ge(s, Lt.templow) })) + "</span></span></button>").join("") + "</div>";
    }
    return $ + "</div>" + (D ? Xr(s, h, D) : "") + "</div>";
  }
  const Ma = {
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
    const b = (ft) => ze(new Date(ft.datetime), s), D = (ft) => Ma[ft.condition] || "", O = (ft) => Yr[ft.condition] || ft.condition;
    let F = D(m[0]);
    if (!F) return "";
    let K = m[0], W = 0;
    for (const ft of m.slice(1))
      W === 2 || O(ft) === O(K) || !D(ft) || (F += (W ? " and " : ", ") + D(ft) + " from " + b(ft), K = ft, W++);
    const $ = Number(m[0].temperature), tt = m.filter((ft) => pe(ft.temperature));
    if (pe($) && tt.length) {
      const ft = tt.reduce((Tt, St) => Number(St.temperature) < Number(Tt.temperature) ? St : Tt), Nt = tt.reduce((Tt, St) => Number(St.temperature) > Number(Tt.temperature) ? St : Tt);
      $ - Number(ft.temperature) >= 3 ? F += ", down to " + ge(s, ft.temperature) + " by " + b(ft) : Number(Nt.temperature) - $ >= 3 && (F += ", up to " + ge(s, Nt.temperature) + " by " + b(Nt));
    }
    return F[0].toUpperCase() + F.slice(1) + ".";
  }
  const Sa = (s) => {
    const h = Zr(s);
    return h ? '<div class="wbSummary"><p class="wbSummaryText">' + vt(h) + "</p></div>" : "";
  };
  function xe(s) {
    const [h, m] = Vi[C == null ? void 0 : C()] || Vi.day, b = Date.now(), D = ot("hourly").filter((O) => {
      const F = new Date(O.datetime), K = F.getHours();
      return F.getTime() > b - oe / 2 && K >= h && K < m && pe(O.temperature);
    }).slice(0, 4);
    return D.length ? '<div class="wbNextHours" role="list">' + D.map((O, F) => '<div class="wbHour" role="listitem"><span class="wbHourTime">' + vt(ze(new Date(O.datetime), s)) + "</span>" + We(O.condition ?? "cloudy", 40, O.is_daytime === !1, "hr" + F) + '<span class="wbHourTemp">' + vt(ge(s, O.temperature)) + "</span></div>").join("") + "</div>" : "";
  }
  function Kr(s) {
    const h = s.getTime(), m = Date.now() - oe;
    return ot("hourly").filter((b) => {
      const D = new Date(b.datetime).getTime();
      return D >= h && D < h + ha && D > m;
    });
  }
  function cn(s) {
    if (!s.length) return ["temperature"];
    const h = ["temperature"];
    return s.some((m) => m.precipitation != null || m.precipitation_probability != null) && h.push("precipitation"), s.some((m) => m.humidity != null) && h.push("humidity"), h;
  }
  function Xr(s, h, m) {
    const b = sn(new Date(m.datetime)), D = Kr(b), O = cn(D), F = O.includes(lt.dayMode) ? lt.dayMode : "temperature", K = (W) => W === "humidity" ? gt.humidity : gt.modes[W];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + We(m.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + vt(na(s, m)) + '</span><span class="wbSub">' + vt(Ke(gt.highLow, { high: ge(s, m.temperature), low: ge(s, m.templow) })) + '</span></div><button class="wbBack" title="' + vt(gt.back) + '" data-wb="close-day" data-wb-focus="back-day">' + No(ne.back) + "</button></div>" + (O.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + O.map((W) => '<button aria-pressed="' + (W === F) + '" data-wb="day-mode" data-mode="' + W + '" data-wb-focus="day-mode-' + W + '">' + vt(K(W)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + l0(dr(s, h, b, D, F)) + "</div></div>";
  }
  function dr(s, h, m, b, D) {
    var _r;
    const O = m.getTime(), F = Date.now(), K = ar(m, /* @__PURE__ */ new Date()), W = (Jt) => (Jt - O) / Ne, $ = (Jt) => ze(new Date(Jt), s), tt = (Jt) => new Date(Jt.datetime).getTime(), ft = [0, 3, 6, 9, 12, 15, 18, 21].map((Jt) => ({ t: Jt * 60, label: $(O + Jt * oe), minor: Jt % 6 !== 0 })), { rise: Nt, set: Tt } = or(s, m), St = [], Wt = [];
    Nt && (St.push({ t: W(Nt.getTime()), label: $(Nt.getTime()), rise: !0 }), Wt.push([0, W(Nt.getTime())])), Tt && (St.push({ t: W(Tt.getTime()), label: $(Tt.getTime()), rise: !1 }), Wt.push([W(Tt.getTime()), Gr]));
    const Lt = sr(s);
    !Nt && !Tt && Lt && is(new Date(O + ha / 2), Lt.lat, Lt.lon) < 0 && Wt.push([0, Gr]);
    const dt = K ? W(F) : void 0, Ot = { hours: ft, sun: St, night: Wt };
    if (!b.length && !K) return { ...Ot, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: gt.noHourly };
    if (D === "precipitation") {
      const Jt = b.some((ca) => ca.precipitation_probability != null), va = b.map((ca) => ({ t: W(tt(ca)), v: Number((Jt ? ca.precipitation_probability : ca.precipitation) ?? 0) })), oo = rn(s, st(s, "hourly"), "precipitation"), Qo = Math.max(0, ...va.map((ca) => ca.v)), Fn = Jt ? 100 : ep(0, Math.max(Qo, 1), [0.5, 1, 2, 5, 10]).max, qn = (ca) => Jt ? $t(ca, s.locale) + "%" : $t(ca, s.locale, { maximumFractionDigits: 1 }) + " " + oo, Wn = va.find((ca) => ca.v === Qo);
      return {
        ...Ot,
        kind: "bars",
        points: va,
        min: 0,
        max: Fn,
        ticks: [0, Fn / 2, Fn],
        format: qn,
        now: dt !== void 0 ? { t: dt, v: 0 } : void 0,
        peak: Wn && Qo > 0 ? { t: Wn.t + 30, v: Wn.v, label: qn(Wn.v) } : void 0,
        note: Qo > 0 ? void 0 : gt.noRain
      };
    }
    const It = D === "humidity" ? "humidity" : "temperature", fe = b.filter((Jt) => Jt[It] != null && (!K || tt(Jt) >= F)).map((Jt) => ({ t: W(tt(Jt)), v: Number(Jt[It]) }));
    let _t, ae = [];
    if (dt !== void 0) {
      const Jt = Le(s, h, It);
      Jt && pe(Jt.value) && (_t = { t: dt, v: Number(Jt.value) }, fe.unshift(_t)), ae = (((_r = G.todayHistory) == null ? void 0 : _r.day) === m.toDateString() ? G.todayHistory[It] : []).filter((oo) => oo.time <= F).map((oo) => ({ t: Math.max(0, W(oo.time)), v: oo.value })), _t && ae.length && ae.push(_t);
    }
    const ce = [...ae, ...fe];
    if (!ce.length) return { ...Ot, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: gt.noHourly };
    const la = ce.map((Jt) => Jt.v), ao = ep(Math.min(...la), Math.max(...la), It === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    It === "humidity" && (ao.min = Math.max(0, ao.min), ao.max = Math.min(100, ao.max), ao.ticks = ao.ticks.filter((Jt) => Jt >= 0 && Jt <= 100));
    const Mr = It === "humidity" ? (Jt) => $t(Jt, s.locale) + "%" : (Jt) => ge(s, Jt), Sr = It === "temperature" ? ce.reduce((Jt, va) => va.v > Jt.v ? va : Jt) : void 0;
    return { ...Ot, kind: "line", points: fe, past: ae, ...ao, format: Mr, now: _t, peak: Sr ? { ...Sr, label: Mr(Sr.v) } : void 0 };
  }
  function pr(s) {
    const h = ["temperature"];
    return s.some((m) => m.precipitation_probability != null || m.precipitation != null) && h.push("precipitation"), s.some((m) => m.wind_speed != null) && h.push("wind"), h;
  }
  function Wo(s, h, m = Id) {
    var O, F;
    const b = ot("daily"), D = [];
    for (let K = 0; K < m; K++) for (const W of [!1, !0]) {
      const $ = s.getTime() + (K * 24 + (W ? 12 : 0)) * oe, tt = $ + 12 * oe, ft = {};
      h.forEach((Tt) => {
        const St = new Date(Tt.datetime).getTime();
        Tt.condition && St >= $ && St < tt && (ft[Tt.condition] = (ft[Tt.condition] ?? 0) + (wm.has(Tt.condition) ? 2 : 1));
      });
      let Nt = (O = Object.entries(ft).sort((Tt, St) => St[1] - Tt[1])[0]) == null ? void 0 : O[0];
      if (!Nt) {
        const Tt = new Date($).toDateString();
        Nt = ((F = b.find((St) => new Date(St.datetime).toDateString() === Tt)) == null ? void 0 : F.condition) ?? "cloudy";
      }
      D.push({ cond: W && Nt === "sunny" ? "clear-night" : Nt, night: W });
    }
    return D;
  }
  function ss(s, h, m) {
    const b = st(s, "hourly"), D = h.precipitation_probability != null ? $t(h.precipitation_probability, s.locale) + "%" : "", O = h.precipitation ? $t(h.precipitation, s.locale) + " " + rn(s, b, "precipitation") : "";
    switch (m) {
      case "precipitation":
        return D ? [D, O] : [O || "–", ""];
      case "wind":
        return h.wind_speed != null ? [$t(Math.round(h.wind_speed), s.locale), rn(s, b, "wind_speed")] : ["–", ""];
      default:
        return [ge(s, h.temperature), (h.precipitation_probability ?? 0) >= 20 ? D : ""];
    }
  }
  function Xa(s, h, m) {
    const [b, D] = Vi[C == null ? void 0 : C()] || Vi.day, O = [];
    for (let F = 0; F < 4 && O.length < 3; F++) {
      const K = /* @__PURE__ */ new Date();
      K.setHours(0, 0, 0, 0), K.setDate(K.getDate() + F);
      const W = new Date(K);
      W.setHours(D, 0, 0, 0), K.setHours(b, 0, 0, 0), !(W.getTime() <= m || !h.some(($) => {
        const tt = new Date($.datetime).getTime();
        return tt >= K.getTime() && tt <= W.getTime();
      })) && O.push({ a: K.getTime(), b: W.getTime(), label: na(s, { datetime: K.toISOString() }) });
    }
    return O;
  }
  function ke(s, h, m, b, D, O) {
    const F = (m.b - h.a) / oe, K = (dt) => ((dt - h.a) / oe).toFixed(3), W = 80, $ = 32, tt = [];
    for (const dt = new Date(h.a - ha); dt.getTime() < m.b + ha; dt.setDate(dt.getDate() + 1)) {
      const { rise: Ot, set: It } = or(s, new Date(dt));
      Ot && It && tt.push({ rise: Ot.getTime(), set: It.getTime() });
    }
    const ft = (dt, Ot) => W - (W - $) * Math.sin(Math.PI * (Ot - dt.rise) / (dt.set - dt.rise)), Nt = (dt) => !tt.some((Ot) => dt >= Ot.rise && dt <= Ot.set);
    let Tt = "", St = "", Wt = "";
    tt.forEach((dt, Ot) => {
      const It = [];
      for (let _t = dt.rise; _t <= dt.set; _t += 15 * Ne) It.push(K(_t) + "," + ft(dt, _t).toFixed(2));
      It.push(K(dt.set) + "," + W), Tt += '<polyline class="wbLineArc" points="' + It.join(" ") + '"/>';
      const fe = tt[Ot + 1];
      fe && (Tt += '<rect class="wbLineNight" x="' + K(dt.set) + '" y="0" width="' + ((fe.rise - dt.set) / oe).toFixed(3) + '" height="100"/>'), [[dt.rise, "↑"], [dt.set, "↓"]].forEach(([_t, ae]) => {
        _t < h.a || _t > m.b || (St += '<line class="wbLineEdge" x1="' + K(_t) + '" x2="' + K(_t) + '" y1="0" y2="100"/>', Wt += '<span class="wbLineTime" style="left:' + O(_t) + '">' + ae + " " + vt(ze(new Date(_t), s)) + "</span>");
      });
    });
    const Lt = tt.find((dt) => D >= dt.rise && D <= dt.set);
    return '<svg class="wbLineArt" viewBox="0 0 ' + F + ' 100" preserveAspectRatio="none" aria-hidden="true">' + Tt + St + '<line class="wbLineHorizon" x1="0" x2="' + F + '" y1="' + W + '" y2="' + W + '"/></svg>' + Wt + (Lt ? '<span class="wbLineNow" style="left:' + O(D) + ";top:" + ft(Lt, D) + '%">' + Rl("sunny", !1) + "</span>" : "") + b.filter((dt) => dt.entry && !dt.now).map((dt) => '<span class="wbLineGlyph' + dt.edge + '" style="left:' + O(dt.t) + '">' + Rl(dt.entry.condition ?? "cloudy", Nt(dt.t)) + "</span>").join("");
  }
  function ur(s, h) {
    delete Q.hourly;
    const m = lt.hourlyView === "bars" ? "bars" : "strip", b = '<div class="wbHeader"><h2 class="wbTitle">' + vt(m === "bars" ? gt.nextDays : gt.nextHours) + '</h2><div class="wbSegments wbViews" role="group" aria-label="' + vt(gt.showAs) + '">' + ["strip", "bars"].map((_t) => '<button aria-pressed="' + (_t === m) + '" data-wb="hourly-view" data-view="' + _t + '" data-wb-focus="hourly-view-' + _t + '">' + vt(gt.views[_t]) + "</button>").join("") + "</div></div>";
    if (m === "bars") return fr(s, h, b);
    const D = ot("hourly"), O = Math.floor(Date.now() / Ne) * Ne, F = D.filter((_t) => new Date(_t.datetime).getTime() > O - oe);
    if (!F.length) return "";
    const K = pr(F), W = K.includes(lt.hourlyMode) ? lt.hourlyMode : "temperature", $ = Xa(s, D, O);
    if (!$.length) return "";
    const tt = $[0], ft = $[$.length - 1], Nt = (tt.b - tt.a) / oe, Tt = (_t) => "calc(var(--wb-u) * " + ((_t - tt.a) / oe).toFixed(3) + ")", St = new Date(tt.a);
    St.setHours(6, 0, 0, 0), St.getTime() > tt.a && St.setDate(St.getDate() - 1);
    const Wt = Math.ceil((ft.b - St.getTime()) / ha);
    p !== "line" && (Q.hourly = { segs: Wo(St, D, Wt), seed: St.getDate(), columns: Wt });
    const Lt = (_t) => _t === tt.a ? " wbFirst" : _t === ft.b ? " wbLast" : "", dt = [];
    for (let _t = tt.a; _t < ft.b; ) {
      const ae = new Date(_t);
      ae.setHours(24, 0, 0, 0);
      const ce = Math.min(ae.getTime(), ft.b);
      dt.push({ a: _t, b: ce, label: na(s, { datetime: new Date(_t).toISOString() }), page: $.find((la) => la.a >= _t && la.a < ce) || $.find((la) => la.a < ce && la.b > _t) }), _t = ce;
    }
    const Ot = O > tt.a && O < ft.b ? Math.floor((O - tt.a) / (2 * oe)) * 2 : 0, It = [];
    for (let _t = tt.a; _t <= ft.b; _t += oe) {
      const ae = new Date(_t), ce = Lt(_t);
      !ce && ae.getHours() % hm || !ce && (Math.abs(tt.a - _t) < 2 * oe || Math.abs(ft.b - _t) < 2 * oe) || O >= tt.a && Math.abs(_t - O) < 1.5 * oe && !ce || It.push({ t: _t, edge: ce, label: ze(ae, s), entry: _t >= O - oe ? D.find((la) => new Date(la.datetime).getTime() === _t) : void 0 });
    }
    O > tt.a && O < tt.b && It.push({ t: O, edge: O - tt.a < oe ? " wbFirst" : tt.b - O < oe ? " wbLast" : "", label: gt.now, entry: F[0], now: !0 });
    const fe = (_t, ae) => '<span class="wbMark' + _t.edge + (_t.now ? " wbNowMark" : "") + '" style="left:' + Tt(_t.t) + '">' + ae + "</span>";
    return '<div class="wbCard wbHc wbHourly">' + b + (K.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + K.map((_t) => '<button aria-pressed="' + (_t === W) + '" data-wb="hourly-mode" data-mode="' + _t + '" data-wb-focus="hourly-mode-' + _t + '">' + vt(gt.modes[_t]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll wbPaged" tabindex="0" aria-label="' + vt(gt.nextHours) + '" data-span="' + Nt + '" data-start="' + Ot + '"><div class="wbStrip" style="--wb-u:calc(100cqw / ' + Nt + ");width:calc(var(--wb-u) * " + (ft.b - tt.a) / oe + ')">' + // a stop every two hours (Matt, 1 Nov): a swipe settles on one, a flick runs on past several
    [...Array(Math.floor((ft.b - tt.a) / (2 * oe)) + 1)].map((_t, ae) => '<i class="wbSnap" style="left:' + Tt(tt.a + ae * 2 * oe) + '"></i>').join("") + '<div class="wbDays">' + dt.map((_t, ae) => {
      var ce;
      return '<span class="wbDaySpan" style="width:calc(var(--wb-u) * ' + ((_t.b - _t.a) / oe).toFixed(3) + ')"><button class="wbDayName" data-wb="hours-day" data-hours="' + (ae === 0 ? Ot : ((((ce = _t.page) == null ? void 0 : ce.a) ?? _t.a) - tt.a) / oe) + '" data-wb-focus="hours-day-' + ae + '">' + vt(_t.label) + "</button></span>";
    }).join("") + '</div><div class="wbRow wbTimes">' + It.map((_t) => fe(_t, vt(_t.label))).join("") + "</div>" + (p === "line" ? '<div class="wbSky wbLineSky">' + ke(s, tt, ft, It, O, Tt) : '<div class="wbSky"><div class="wbSkyArt" style="left:' + Tt(St.getTime()) + ";width:calc(var(--wb-u) * " + Wt * 24 + ')"><canvas data-wb-strip="hourly"' + (p === "smooth" ? "" : ' class="wbPixels"') + "></canvas></div>") + (O > tt.a ? '<i class="wbPast" style="width:' + Tt(Math.min(O, ft.b)) + '"></i><i class="wbNowLine" style="left:' + Tt(O) + '"></i>' : "") + dt.slice(1).map((_t) => '<i class="wbMidnight" style="left:' + Tt(_t.a) + '"></i>').join("") + '</div><div class="wbRow wbValues">' + It.map((_t) => {
      if (!_t.entry) return "";
      const [ae, ce] = ss(s, _t.entry, W);
      return fe(_t, '<span class="wbPrimaryV">' + vt(ae) + '</span><span class="wbSecondary">' + vt(ce) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function $r(s) {
    const h = mm, m = h.findIndex(([W]) => W >= s);
    if (m <= 0) return "rgb(" + h[m < 0 ? h.length - 1 : 0][1].join(",") + ")";
    const [b, D] = h[m - 1], [O, F] = h[m], K = (s - b) / (O - b);
    return "rgb(" + D.map((W, $) => Math.round(W + (F[$] - W) * K)).join(",") + ")";
  }
  function fr(s, h, m) {
    var Tt;
    const b = ot("daily").filter((St) => pe(St.templow) && pe(St.temperature)).slice(0, 7);
    if (!b.length) return "";
    const D = Math.min(...b.map((St) => Number(St.templow))), O = Math.max(...b.map((St) => Number(St.temperature))), F = Math.max(1, O - D), K = (St) => Math.max(0, Math.min(100, (St - D) / F * 100)).toFixed(2), W = /F/.test(rn(s, st(s, "daily"), "temperature")), $ = (St) => W ? (St - 32) / 1.8 : St, tt = "linear-gradient(90deg," + [0, 0.25, 0.5, 0.75, 1].map((St) => $r($(D + St * F)) + " " + St * 100 + "%").join(",") + ")", ft = (Tt = Le(s, h, "temperature")) == null ? void 0 : Tt.value;
    return '<div class="wbCard wbHc wbHourly wbBars' + (pr(ot("hourly").filter((St) => new Date(St.datetime).getTime() > Date.now() - oe)).length > 1 ? " wbTabbed" : "") + '">' + m + '<div class="wbDayBars" role="list">' + b.map((St, Wt) => {
      const Lt = na(s, St), dt = ar(new Date(St.datetime), /* @__PURE__ */ new Date()), Ot = Number(St.templow), It = Number(St.temperature);
      return '<div class="wbDayBar" role="listitem" aria-label="' + vt(Ke(gt.rangeRow, { day: Lt, low: ge(s, Ot), high: ge(s, It) })) + '"><span class="wbRangeDay">' + vt(Lt) + "</span>" + We(St.condition, 40, !1, "r" + Wt) + '<span class="wbRangeLo">' + vt(ge(s, Ot)) + '</span><span class="wbRangeTrack"><i class="wbRangeFill" style="background:' + tt + ";clip-path:inset(0 " + (100 - K(It)) + "% 0 " + K(Ot) + '% round 4px)"></i>' + (dt && pe(ft) ? '<i class="wbRangeNow" style="left:' + K(Number(ft)) + '%"></i>' : "") + '</span><span class="wbRangeHi">' + vt(ge(s, It)) + "</span></div>";
    }).join("") + "</div></div>";
  }
  const Jr = [[-120, "#0d1530"], [-60, "#1c2550"], [-15, "#c9707a"], [30, "#f2a46a"], [60, "#b49bc8"], [90, "#5aa5e6"]], Qr = [[-90, "#5aa5e6"], [-60, "#a99bd0"], [-30, "#f0a54a"], [15, "#c45a5a"], [60, "#3a2a5c"], [120, "#0d1530"]], Gt = (s, h) => {
    if (h <= s[0][0]) return s[0][1];
    for (let m = 1; m < s.length; m++) if (h <= s[m][0]) {
      const [b, D] = s[m - 1], [O, F] = s[m];
      return i0(D, F, (h - b) / (O - b));
    }
    return s[s.length - 1][1];
  }, bt = (s, h, m) => {
    if (!h || !m) return Jr[5][1];
    const b = (s.getTime() - m.getTime()) / Ne;
    return b >= -90 ? Gt(Qr, b) : Gt(Jr, (s.getTime() - h.getTime()) / Ne);
  }, ue = (s) => (s >= 60 ? Math.floor(s / 60) + "h " : "") + s % 60 + "m";
  function jt(s) {
    const h = qt, { rise: m, set: b } = or(s, h), D = m && b ? Math.round((b.getTime() - m.getTime()) / Ne) : 0, O = Math.floor(D / 60), F = D % 60, K = (fe) => fe ? ze(fe, s) : "–", W = new Date(h);
    W.setDate(W.getDate() + 1);
    const $ = or(s, W), tt = $.rise && $.set ? Math.round(($.set.getTime() - $.rise.getTime()) / Ne) : 0, ft = new Date(h);
    ft.setDate(ft.getDate() - 1);
    const Nt = !!(m && b && h >= m && h <= b), Tt = !!(m && h < m), St = Nt ? m : Tt ? or(s, ft).set : b, Wt = Nt ? b : Tt ? m : $.rise, Lt = St && Wt ? Math.min(1, Math.max(0, (h.getTime() - St.getTime()) / (Wt.getTime() - St.getTime()))) : 0, dt = Wt ? Math.max(0, Math.round((Wt.getTime() - h.getTime()) / Ne)) : 0, Ot = Wt ? ue(dt) : "–", It = Nt ? gt.untilSunset : gt.untilSunrise;
    return ea({
      icon: ne.sunny,
      name: gt.sun,
      sub: D ? Ke(gt.daylightShort, { hours: O, minutes: F }) : void 0,
      cls: "wbSunTile",
      callouts: [[gt.callout.riseTomorrow, K($.rise)], [gt.callout.setTomorrow, K($.set)], ...tt ? [[gt.callout.dayTomorrow, Math.floor(tt / 60) + "h " + tt % 60 + "m"]] : []],
      zone: '<div class="wbSunZone" style="background:' + bt(h, m, b) + '"><svg class="wbSunTrack" data-up="' + (Nt ? 1 : 0) + '" data-f="' + Lt.toFixed(4) + '" aria-hidden="true"></svg><div class="wbSunCount"><span class="wbSunLeft">' + vt(Ot) + '</span><span class="wbSunWord">' + vt(It) + '</span></div><span class="wbSunAt wbSunRise">' + vt(K(m)) + '</span><span class="wbSunAt wbSunSet">' + vt(K(b)) + "</span></div>" + // at M, the countdown alone (Matt, 10 Nov): M's zone has room for one line
      Yi(Pa(Ot, ""))
    });
  }
  const De = 22;
  function $a(s) {
    const h = Math.round(s.clientWidth), m = Math.round(s.clientHeight), b = De, D = b / 2, O = h + "x" + m + ":" + s.dataset.f + ":" + s.dataset.up;
    if (h < b * 3 || m < b * 3 || s.dataset.drawn === O) return;
    s.dataset.drawn = O;
    const F = "M" + D + " " + (m - b) + "V" + b + "A" + D + " " + D + " 0 0 1 " + b + " " + D + "H" + (h - b) + "A" + D + " " + D + " 0 0 1 " + (h - D) + " " + b + "V" + (m - b), K = "M" + (h - D) + " " + (m - b) + "A" + D + " " + D + " 0 0 1 " + (h - b) + " " + (m - D) + "H" + b + "A" + D + " " + D + " 0 0 1 " + D + " " + (m - b), W = 16, $ = 6, tt = "M" + W + " 0H" + (h - W) + "A" + W + " " + W + " 0 0 1 " + h + " " + W + "V" + (m - W) + "A" + W + " " + W + " 0 0 1 " + (h - W) + " " + m + "H" + W + "A" + W + " " + W + " 0 0 1 0 " + (m - W) + "V" + W + "A" + W + " " + W + " 0 0 1 " + W + " 0ZM" + (b + $) + " " + b + "A" + $ + " " + $ + " 0 0 0 " + b + " " + (b + $) + "V" + (m - b - $) + "A" + $ + " " + $ + " 0 0 0 " + (b + $) + " " + (m - b) + "H" + (h - b - $) + "A" + $ + " " + $ + " 0 0 0 " + (h - b) + " " + (m - b - $) + "V" + (b + $) + "A" + $ + " " + $ + " 0 0 0 " + (h - b - $) + " " + b + "Z", ft = s.dataset.up === "1", Nt = Number(s.dataset.f) || 0, Tt = "http://www.w3.org/2000/svg";
    s.setAttribute("viewBox", "0 0 " + h + " " + m);
    const St = document.createElementNS(Tt, "path");
    St.setAttribute("d", ft ? F : K), s.replaceChildren(St);
    const Wt = St.getTotalLength(), Lt = St.getPointAtLength(Wt * Nt), dt = ft ? Wt : 0;
    s.innerHTML = '<defs><mask id="' + k + 'sun-day"><path d="' + F + '" fill="none" stroke="#fff" stroke-width="' + b * 2 + '"></path></mask><mask id="' + k + 'sun-done"><path d="' + F + '" fill="none" stroke="#fff" stroke-width="' + b * 2 + '" stroke-dasharray="' + (ft ? (dt * Nt).toFixed(1) + " " + (dt + 1).toFixed(1) : "0 99999") + '"></path></mask></defs><path class="wbSunBand" fill-rule="evenodd" d="' + tt + '"></path><path class="wbSunBand wbSunDay" fill-rule="evenodd" d="' + tt + '" mask="url(#' + k + 'sun-day)"></path><path class="wbSunBand wbSunDone" fill-rule="evenodd" d="' + tt + '" mask="url(#' + k + 'sun-done)"></path><circle class="wbSunDot' + (ft ? "" : " wbSunNight") + '" cx="' + Lt.x.toFixed(1) + '" cy="' + Lt.y.toFixed(1) + '" r="' + D + '"></circle>';
  }
  const Ja = typeof ResizeObserver == "function" ? new ResizeObserver((s) => s.forEach((h) => $a(h.target))) : null;
  function ls() {
    Ja == null || Ja.disconnect(), L.querySelectorAll("svg.wbSunTrack").forEach((s) => {
      $a(s), Ja == null || Ja.observe(s);
    });
  }
  function hr(s, h, m) {
    const b = (F) => k + "moon-" + F, D = s > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + b("terminator") + ')" d="' + s0(61, 61, 57.9, s) + '"' + (h ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", O = (F, K, W, $, tt, ft) => '<filter id="' + b(F) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + K + '" numOctaves="' + W + '" seed="' + $ + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((Nt) => "<feFunc" + Nt + ' type="linear" slope="' + tt + '" intercept="' + ft + '"></feFunc' + Nt + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + b("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + b("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + b("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + b("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + b("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + O("mottle", "0.045", 4, 3, 1.8, -0.4) + O("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + b("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + b("fill") + ')"></circle><g' + (m ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + b("soften") + ')">' + d0.map(([F, K, W, $, tt, ft]) => '<ellipse cx="' + F + '" cy="' + K + '" rx="' + W + '" ry="' + $ + '" fill-opacity="' + ft + '" transform="rotate(' + tt + " " + F + " " + K + ')"></ellipse>').join("") + "</g>" + p0.map(([F, K, W]) => '<circle class="wbCrater" cx="' + F + '" cy="' + K + '" r="' + W + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + b("glow") + ')">' + u0.map(([F, K]) => '<line x1="54.4" y1="95" x2="' + F + '" y2="' + K + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + b("glow") + ')">' + op.map(([F, K, W]) => '<circle cx="' + F + '" cy="' + K + '" r="' + W * 2 + '"></circle>').join("") + "</g>" + op.map(([F, K, W]) => '<circle class="wbBrightCenter" cx="' + F + '" cy="' + K + '" r="' + W + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + b("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + b("grain") + ')"></rect>' + D + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function ti(s) {
    const h = V, m = sr(s), b = (m == null ? void 0 : m.lat) ?? 0, D = Hl(h), O = tp(s), F = O ? s.states[O] : void 0, K = Rn(F) && Em.includes(F.state) ? F.state : Jm(D.phase), { rise: W, set: $ } = m ? $m(h, m.lat, m.lon) : {}, tt = D.phase > 0.5 != b < 0, ft = $t(Math.round(D.fraction * 100), s.locale) + "%", Nt = W ?? $;
    return Nt && ze(Nt, s), ea({
      icon: ne.night,
      name: gt.moon,
      sub: gt.phases[K],
      callouts: [...W ? [[gt.callout.moonrise, ze(W, s)]] : [], ...$ ? [[gt.callout.moonset, ze($, s)]] : [], [gt.callout.lit, ft]],
      // at M, how much of it is lit (Matt, 10 Nov)
      zone: '<div class="wbMoonBox">' + hr(D.fraction, tt, b < 0) + "</div>" + Yi(Pa($t(Math.round(D.fraction * 100), s.locale), "%"))
    });
  }
  function cs(s, h) {
    var St;
    const m = Le(s, h, "wind_speed");
    if (!m || !pe(m.value)) return "";
    const b = Le(s, h, "wind_gust_speed"), D = Le(s, h, "wind_bearing"), O = D && pe(D.value) ? Number(D.value) : void 0, F = a0(Number(m.value), (St = m.stateObj.attributes) == null ? void 0 : St.wind_speed_unit), K = es(s, m.stateObj, "wind_speed", m.value), W = O !== void 0 ? gt.cardinal[Dm[((O + 11.25) / 22.5 | 0) % 16]] : void 0, $ = b ? $d(s, b.stateObj, "wind_gust_speed", b.value) : void 0, tt = [W ? Ke(gt.windFrom, { direction: W }) : void 0, F !== void 0 ? F + " " + gt.beaufort : void 0].filter(Boolean).join(" · ") || $, ft = (Wt, Lt) => {
      const dt = (Wt - 90) * Math.PI / 180;
      return [100 + Lt * Math.cos(dt), 100 + Lt * Math.sin(dt)];
    }, Nt = Array.from({ length: 36 }, (Wt, Lt) => Lt * 10).map((Wt) => {
      const Lt = Wt % 90 === 0, [dt, Ot] = ft(Wt, 97), [It, fe] = ft(Wt, Lt ? 83 : 89);
      return '<line class="wbTick' + (Lt ? " wbMajor" : "") + '" x1="' + dt + '" y1="' + Ot + '" x2="' + It + '" y2="' + fe + '"></line>';
    }).join(""), Tt = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([Wt, Lt]) => {
      const [dt, Ot] = ft(Lt, 64);
      return '<text class="wbLetter' + (Wt === "n" ? " wbNorth" : "") + '" x="' + dt + '" y="' + Ot + '">' + vt(gt.cardinal[Wt]) + "</text>";
    }).join("");
    return ea({ icon: ne.windy, name: gt.wind, sub: tt, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + Nt + Tt + (O !== void 0 ? '<path class="wbMarker" transform="rotate(' + O + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + vt(K.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + vt(K.unit) + "</text></svg>" });
  }
  const ds = (s, h) => {
    if (s < 3) return gt.advice.fine;
    if (s < 8) return gt.advice.sunblock;
    const m = Date.now(), b = ot("hourly").find((D) => D.uv_index != null && new Date(D.datetime).getTime() > m && D.uv_index < 6);
    return b && new Date(b.datetime).toDateString() === (/* @__PURE__ */ new Date()).toDateString() ? Ke(gt.advice.avoidUntil, { time: ze(new Date(b.datetime), h) }) : gt.advice.avoidToday;
  };
  function jo(s, h) {
    const m = Le(s, h, "uv_index");
    if (!m || !pe(m.value)) return "";
    const b = Number(m.value), D = gt.uvLevel[Jd(b)], O = /* @__PURE__ */ new Date();
    O.setHours(23, 59, 59, 999);
    const F = ot("hourly").filter((tt) => tt.uv_index != null && new Date(tt.datetime) > /* @__PURE__ */ new Date() && new Date(tt.datetime) <= O).reduce((tt, ft) => !tt || ft.uv_index > tt.uv ? { uv: ft.uv_index, time: new Date(ft.datetime) } : tt, void 0), K = Bm[Jd(b)], W = 216 * Math.min(1, Math.max(0.08, 0.4 + (b - 4.5) * (0.5 / 5.5))), $ = '<svg class="wbUvArt" viewBox="0 0 216 198" preserveAspectRatio="xMinYMin slice" aria-hidden="true"><defs><radialGradient id="' + k + 'uv-sun" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="' + W.toFixed(1) + '"><stop offset="0" style="stop-color:color-mix(in srgb, ' + K + ' 28%, #fff6dd)"></stop><stop offset=".62" style="stop-color:color-mix(in srgb, ' + K + ' 62%, #fff6dd)"></stop><stop offset="1" style="stop-color:' + K + '"></stop></radialGradient></defs><circle class="wbUvSun" cx="0" cy="0" r="' + W.toFixed(1) + '" fill="url(#' + k + 'uv-sun)"></circle></svg><div class="wbUvBig"><span class="wbUvNum">' + vt($t(Math.round(b), s.locale)) + '</span><span class="wbUvWord">' + vt(D) + "</span></div>" + Yi(Pa($t(Math.round(b), s.locale), ""));
    return ea({
      icon: ne.sunnyAlert,
      name: gt.metrics.uv_index,
      sub: F && F.uv > b ? Ke(gt.uvPeak, { level: D, uv_index: $t(Math.round(F.uv), s.locale), time: ze(F.time, s) }) : D,
      zone: $,
      cls: "wbUv",
      callouts: [ds(b, s), [gt.callout.now, $t(Math.round(b), s.locale) + " · " + D], [gt.callout.peak, F && F.uv > b ? $t(Math.round(F.uv), s.locale) + " at " + ze(F.time, s) : gt.callout.now]]
    });
  }
  function ei(s) {
    const h = ot("daily")[0], m = G.temperatureHistory;
    if (!h || new Date(h.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !pe(h.temperature) || !m || m.dailyHighs.length < xm) return "";
    const b = Number(h.temperature), D = m.dailyHighs.reduce((Lt, dt) => Lt + dt, 0) / m.dailyHighs.length, O = Math.round(b - D) || 0, F = O > 0 ? "above" : O < 0 ? "below" : "same", K = [...m.days, { date: /* @__PURE__ */ new Date(), high: b, today: !0 }], W = K.map((Lt) => Lt.high).concat(D), $ = Math.min(...W) - 1, tt = Math.max(...W) + 1, ft = (Lt) => (1 - (Lt - $) / (tt - $)) * 100, Nt = (Lt) => (Lt + 0.5) / K.length * 100, Tt = K.map((Lt, dt) => [Nt(dt), ft(Lt.high)]), St = Tt.map(([Lt, dt], Ot) => (Ot ? "L" : "M") + Lt.toFixed(2) + " " + dt.toFixed(2)).join(""), Wt = '<div class="wbCompareBars wbTrend" aria-hidden="true"><div class="wbTrendPlot"><svg viewBox="0 0 100 100" preserveAspectRatio="none"><defs><linearGradient id="' + k + 'trend" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--primary)" stop-opacity=".28"></stop><stop offset="1" style="stop-color:var(--primary)" stop-opacity="0"></stop></linearGradient></defs><path class="wbTrendArea" d="' + St + "L" + Tt[Tt.length - 1][0].toFixed(2) + " 100L" + Tt[0][0].toFixed(2) + ' 100Z" fill="url(#' + k + 'trend)"></path><line class="wbAvgLine" x1="0" x2="100" y1="' + ft(D).toFixed(2) + '" y2="' + ft(D).toFixed(2) + '" vector-effect="non-scaling-stroke"></line><path class="wbTrendLine" d="' + St + '" vector-effect="non-scaling-stroke"></path></svg><span class="wbTrendAvg" style="top:' + ft(D).toFixed(2) + '%">' + vt(ge(s, D)) + "</span>" + K.map((Lt, dt) => {
      const Ot = Lt.today ? " wbToday" : "", It = "left:" + Nt(dt).toFixed(2) + "%;top:" + ft(Lt.high).toFixed(2) + "%";
      return '<i class="wbTrendDot' + Ot + '" style="' + It + '"></i><span class="wbAvgValue' + Ot + '" style="' + It + '">' + vt(ge(s, Lt.high)) + "</span>";
    }).join("") + '</div><div class="wbTrendDays">' + K.map((Lt, dt) => '<span class="wbAvgDay' + (Lt.today ? " wbToday" : "") + '" style="left:' + Nt(dt).toFixed(2) + '%">' + vt(Wm(Lt.date, s)) + "</span>").join("") + "</div></div>";
    return ea({
      icon: ne.chartLine,
      name: gt.metrics.compared_to_average,
      double: !0,
      sub: Ke(gt.highsLastDays, { days: m.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (O > 0 ? "+" : "") + vt(ge(s, O)) + '</div><div class="wbCompareWords">' + vt(gt.average[F]) + '</div><div class="wbCompareTemps">' + vt(Ke(gt.todayVsAverage, { today: ge(s, b), average: ge(s, D) })) + "</div></div>" + Wt + "</div>"
    });
  }
  function ps(s, h) {
    const m = Le(s, h, "humidity");
    if (!m || !pe(m.value)) return "";
    const b = Le(s, h, "dew_point"), D = Math.max(0, Math.min(100, Number(m.value)));
    return ea({
      icon: ne.waterPercent,
      name: gt.metrics.humidity,
      sub: b && pe(b.value) ? Ke(gt.dewPoint, { dew_point: ge(s, b.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + D + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + Pa($t(Math.round(Number(m.value)), s.locale), "%") + "</div>"
    });
  }
  function dn(s, h) {
    var Lt, dt, Ot;
    const m = Le(s, h, "pressure");
    if (!m || !pe(m.value)) return "";
    const b = Number(m.value), D = (Lt = m.stateObj.attributes) == null ? void 0 : Lt.pressure_unit, O = Qd(b, D), F = ((dt = G.pressureHistory) == null ? void 0 : dt.entityId) === m.stateObj.entity_id ? Qd(G.pressureHistory.value, D) : void 0;
    let K;
    if (O !== void 0 && F !== void 0) {
      const It = O - F;
      K = It >= Wd ? "rising" : It <= -Wd ? "falling" : "steady";
    }
    const W = es(s, m.stateObj, "pressure", Math.round(b)), $ = m.stateObj, tt = (It) => D === "inHg" ? Math.round(It * 100) / 100 : Math.round(It), ft = (It) => $d(s, $, "pressure", tt(It)), Nt = F !== void 0 ? G.pressureHistory.value : void 0, Tt = Nt !== void 0 ? tt(b - Nt) : void 0, St = (Ot = $.entity_id) != null && Ot.startsWith("weather.") ? ot("hourly").find((It) => pe(It.pressure) && new Date(It.datetime).getTime() >= Date.now() + 3 * oe - 30 * Ne) : void 0, Wt = [
      ...K ? [gt.advice[K]] : [],
      ...Nt !== void 0 ? [[gt.callout.hoursAgo, ft(Nt)], [gt.callout.change, (Tt > 0 ? "+" : Tt < 0 ? "−" : "") + ft(Math.abs(Tt))]] : [],
      ...St ? [[gt.callout.inHours, ft(Number(St.pressure))]] : []
    ];
    return ea({
      icon: ne.gauge,
      name: gt.metrics.pressure,
      sub: K ? gt.pressure[K] : void 0,
      cls: "wbPressure",
      callouts: Wt,
      zone: '<div class="wbTapeRow"><div class="wbTapeValue">' + Pa(W.number) + '<span class="wbTapeUnit">' + vt(W.unit) + "</span></div>" + (O !== void 0 ? mr(s, O) : "") + "</div>"
    });
  }
  function mr(s, h) {
    const D = Math.floor(h) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (O, F) => D + F).map((O) => {
      const F = 100 - (O - h) * 9;
      if (F < 22 || F > 178) return "";
      const K = O % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(F - 100) / 100) + '"><line class="wbTapeTick" x1="' + (K ? 2 : 8) + '" x2="26" y1="' + F + '" y2="' + F + '"></line>' + (K ? '<text class="wbTapeLabel" x="33" y="' + F + '">' + vt($t(O, s.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + vt(gt.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + vt(gt.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function Pn(s) {
    var W, $;
    const h = Nl(s), m = h ? s.states[h] : void 0;
    if (!m || ((W = G.rain) == null ? void 0 : W.entityId) !== h || !pe(G.rain.change)) return "";
    const b = (($ = m.attributes) == null ? void 0 : $.unit_of_measurement) ?? "", D = st(s, "hourly"), O = Date.now() + ha, F = ot("hourly").filter((tt) => tt.precipitation != null && new Date(tt.datetime).getTime() <= O), K = F.reduce((tt, ft) => tt + Number(ft.precipitation), 0);
    return ea({
      icon: ne.rainy,
      name: gt.metrics.precipitation,
      sub: D && F.length ? Ke(gt.rainExpected, { amount: $t(K, s.locale, { maximumFractionDigits: 1 }) + " " + rn(s, D, "precipitation") }) : gt.rainLast24h,
      visual: Pa($t(G.rain.change, s.locale, { maximumFractionDigits: 1 }), b) + (F.length > 1 ? c0(F.map((tt) => ({ label: "", value: Number(tt.precipitation) }))) : "")
    });
  }
  function ai(s, h) {
    const m = Le(s, h, "visibility");
    if (!m || !pe(m.value)) return "";
    const b = es(s, m.stateObj, "visibility", m.value), D = tm(Number(m.value), rn(s, m.stateObj, "visibility"));
    return ea({
      icon: ne.eyeOutline,
      name: gt.metrics.visibility,
      sub: gt.visibilityLevel[em(D)],
      visual: '<div class="wbSea"><canvas class="wbSeaArt" data-wb-sea="' + D + '" aria-hidden="true"></canvas><div class="wbSeaFact">' + vt(us(s, D)) + '</div><div class="wbSeaValue">' + Pa(b.number, b.unit) + "</div></div>"
    });
  }
  function us(s, h) {
    var O;
    const m = Qh((O = s.config) == null ? void 0 : O.country, h);
    if (m) return Ke(gt.visibilityLandmarks, { from: m.from, to: m.to });
    const b = h / Sm * 60;
    if (b < 60) {
      const F = b < 5 ? Math.max(1, Math.round(b)) : 5 * Math.round(b / 5);
      if (F < 60) return Ke(gt.walkMinutes, { minutes: $t(F, s.locale) });
    }
    const D = Math.max(1, Math.round(b / 30) / 2);
    return D < 8 ? Ke(gt.walkHours, { hours: $t(D, s.locale) }) : gt.walkDay;
  }
  function fs(s) {
    G.categories === void 0 && Ka(s);
    const h = Ae(s), m = (W) => W.map(($) => s.states[$]).filter(Rn), b = m(h.air), D = m(h.pollen);
    if (!b.length && !D.length) return "";
    const O = [...b, ...D], F = (W) => D.includes(W) ? ne.flower : ne.airFilter, K = O.find((W) => W.entity_id === lt.aq);
    return K ? mo(s, K, F(K)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + vt(gt.airQuality) + '</h2></div><div class="wbAqTiles">' + O.map((W) => '<button class="wbTile" data-wb="aq-open" data-entity="' + vt(W.entity_id) + '"><span class="wbChip">' + No(F(W)) + '</span><span class="wbText"><span class="wbName">' + vt(on(s, W)) + '</span><span class="wbSub">' + vt(Ro(s, W)) + "</span></span></button>").join("") + "</div></div>";
  }
  function mo(s, h, m) {
    var tt, ft, Nt;
    const b = ((tt = h.attributes) == null ? void 0 : tt.unit_of_measurement) ?? "", D = ((ft = h.attributes) == null ? void 0 : ft.device_class) === "pm25" && b === Gd && pe(h.state), O = Number(h.state), F = D ? Ui(O) : void 0, K = ((Nt = G.aqHistory) == null ? void 0 : Nt.entityId) === h.entity_id ? G.aqHistory.points : void 0, W = (Tt) => Math.min(100, Math.max(0, Tt / Gi * 100));
    let $;
    if (K && K.length > 1) $ = ap(K, (Tt) => ($t(Tt, s.locale, { maximumFractionDigits: 1 }) + " " + b).trim());
    else if (F) {
      let Tt = 0;
      const St = Qp.map(([Wt, Lt]) => {
        const dt = W(Math.min(Lt, Gi)), Ot = zd[Wt] + " " + Tt + "% " + dt + "%";
        return Tt = dt, Ot;
      });
      $ = '<div class="wbScale" role="meter" aria-label="' + vt(gt.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + Gi + '" aria-valuenow="' + O + '" style="background:linear-gradient(to right, ' + St.join(", ") + ')"><i style="left:' + W(O) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + Gi + " " + Gd + "</span></div>";
    } else $ = '<span class="wbGraphNote"><span>' + vt(Ro(s, h)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + No(m) + '</span><span class="wbText"><span class="wbName">' + vt(on(s, h)) + '</span><span class="wbSub">' + vt(Ro(s, h)) + (F ? " · " + vt(gt.aqLevel[F]) : "") + '</span></span><button class="wbBack" title="' + vt(gt.back) + '" data-wb="aq-close">' + No(ne.back) + '</button></div><div class="wbGraph">' + $ + "</div></div></div>";
  }
  const hs = { good: "Good", fair: "Fair", moderate: "Moderate", poor: "Poor", very_poor: "Very poor", extremely_poor: "Extremely poor" }, Vo = (s) => s <= 50 ? "Good" : s <= 100 ? "Moderate" : s <= 150 ? "Unhealthy for some" : s <= 200 ? "Unhealthy" : s <= 300 ? "Very unhealthy" : "Hazardous";
  function Ue(s) {
    const h = /* @__PURE__ */ new Map();
    return Object.values(s.states || {}).filter((m) => {
      var b;
      return m.entity_id.startsWith("sensor.") && ns.includes(((b = m.attributes) == null ? void 0 : b.device_class) ?? "") && Rn(m) && lr(s, m.entity_id);
    }).sort((m, b) => m.entity_id.localeCompare(b.entity_id)).forEach((m) => {
      h.has(m.attributes.device_class) || h.set(m.attributes.device_class, m);
    }), ns.map((m) => h.get(m)).filter(Boolean);
  }
  const zo = (s) => Object.values(s.states || {}).filter((h) => {
    var m, b;
    return h.entity_id.startsWith("sensor.") && Rn(h) && lr(s, h.entity_id) && (((b = (m = s.entities) == null ? void 0 : m[h.entity_id]) == null ? void 0 : b.translation_key) ?? h.entity_id).toLowerCase().includes("pollen");
  }), Ia = ["none", "very_low", "low", "moderate", "high", "very_high"], Go = (s) => pe(s.state) ? Number(s.state) : Ia.indexOf(String(s.state).toLowerCase().replace(/ /g, "_")), ma = (s) => {
    const h = String(s).replace(/_/g, " ");
    return h[0].toUpperCase() + h.slice(1);
  }, Uo = (s, h, m) => {
    const b = m ? s === "aqi" ? h <= 50 ? "good" : h <= 100 ? "moderate" : "poor" : s === "pm25" ? Ui(h) : null : null;
    return b === "good" || b === "fair" ? gt.advice.window : b === "moderate" || b === null ? gt.advice.fine : gt.advice.closed;
  }, gr = ["good", "fair", "moderate", "poor", "very_poor", "extremely_poor"], Ee = (s) => gr[s <= 50 ? 0 : s <= 100 ? 1 : s <= 150 ? 2 : s <= 200 ? 3 : s <= 300 ? 4 : 5], Yo = "M43 43q1 8 0 10M77 42q1 8 -1 10", Qa = {
    good: [Yo, "M34 69Q61 98 86 67"],
    fair: [Yo, "M40 74Q61 89 81 72"],
    moderate: [Yo, "M41 79Q60 76 80 81"],
    poor: [Yo, "M41 85Q60 73 80 86"],
    very_poor: ["M36 38l13 5M84 37l-13 5M43 48q1 7 0 9M77 47q1 7 -1 9", "M37 90Q60 64 84 89"],
    extremely_poor: ["M37 41l12 11M49 41l-12 11M71 40l12 11M83 40l-12 11", "M36 84q6 -8 12 0t12 0t12 0t12 0"]
  }, oi = (s) => '<svg class="wbAqFace" viewBox="0 0 120 120" aria-hidden="true"><path d="M60 9C89 8 112 32 110 61C109 90 87 112 58 111C30 110 9 88 10 59C11 31 33 10 63 12"></path><path class="wbAqEyes" d="' + Qa[s][0] + '"></path><path d="' + Qa[s][1] + '"></path></svg>';
  function ni(s) {
    const h = Ue(s), m = h[0];
    if (!m) return ea({ icon: ne.airFilter, name: gt.airQuality, sub: gt.noAir, visual: Pa("–", ""), cls: "wbBase" });
    const b = m.attributes.device_class, D = Number(m.state), O = pe(m.state), F = b === "aqi" && O ? Vo(D) : b === "pm25" && O ? hs[Ui(D)] : Ro(s, m), K = O ? $t(Math.round(D), s.locale) : String(m.state), W = b === "aqi" ? "AQI" : m.attributes.unit_of_measurement || "", $ = O && b === "aqi" ? Ee(D) : O && b === "pm25" ? Ui(D) : null;
    return ea($ ? {
      icon: ne.airFilter,
      name: gt.airQuality,
      sub: F,
      cls: "wbAqSmile",
      zone: '<div class="wbAqFill" style="background:' + zd[$] + '">' + oi($) + '<div class="wbAqBig"><span class="wbAqNum">' + vt(K) + "</span>" + (W ? '<span class="wbAqUnit">' + vt(W) + "</span>" : "") + "</div></div>" + Yi(Pa(K, W)),
      callouts: [Uo(b, D, O), ...h.slice(1, 3).map((tt) => [on(s, tt), Ro(s, tt)])]
    } : {
      icon: ne.airFilter,
      name: gt.airQuality,
      sub: F,
      cls: "wbBase",
      zone: Pa(K, W),
      callouts: [Uo(b, D, O), ...h.slice(1, 3).map((tt) => [on(s, tt), Ro(s, tt)])]
    });
  }
  const ms = [
    ["wbSeed", '<svg viewBox="0 0 22 30" aria-hidden="true"><path d="M11 28V11" fill="none" stroke="currentColor" stroke-width="1"></path><path d="M11 11L3 6M11 11L5 2.5M11 11L8.5 1M11 11L13.5 1M11 11L17 2.5M11 11L19 6" fill="none" stroke="currentColor" stroke-width=".8" stroke-linecap="round"></path><circle cx="11" cy="28.5" r="1.4" fill="currentColor"></circle></svg>'],
    ["wbGrain", '<svg viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="3.3" fill="currentColor"></circle><path d="M6 1.2v1.4M6 9.4v1.4M1.2 6h1.4M9.4 6h1.4M2.6 2.6l1 1M8.4 8.4l1 1M2.6 9.4l1-1M8.4 3.6l1-1" stroke="currentColor" stroke-width=".9" stroke-linecap="round"></path></svg>'],
    ["wbStem", '<svg viewBox="0 0 10 30" aria-hidden="true"><path d="M5 29Q3.6 18 5 8" fill="none" stroke="currentColor" stroke-width="1"></path><ellipse cx="5" cy="6" rx="2.3" ry="4.6" fill="currentColor"></ellipse></svg>']
  ], gs = (s) => {
    const h = [1, 3, 5, 7, 10, 13][Math.max(0, Math.min(5, Number.isFinite(s) ? Math.round(s) : 0))];
    return '<div class="wbPollenAir" aria-hidden="true">' + Array.from({ length: h }, (m, b) => {
      const [D, O] = ms[b % 3], F = 10 + b * 7 % 9, K = 2.6 + b * 5 % 4 * 0.4;
      return '<span class="wbFloat ' + D + '" style="top:' + (4 + b * 37 % 52) + "%;--x:" + (b * 29 % 90 + 4) + "%;--s:" + (0.8 + b * 13 % 5 / 10).toFixed(1) + ";animation-duration:" + F + "s;animation-delay:-" + (b * 2.3 % F).toFixed(1) + 's"><span class="wbPush"><span class="wbBob" style="animation-duration:' + K.toFixed(1) + "s;animation-delay:-" + (b * 0.7 % K).toFixed(1) + 's">' + O + "</span></span></span>";
    }).join("") + "</div>";
  };
  function bs(s) {
    const h = zo(s).sort((D, O) => Go(O) - Go(D));
    if (!h.length) return ea({ icon: ne.flower, name: gt.pollen, sub: gt.noPollen, visual: Pa("–", ""), cls: "wbBase" });
    const m = h[0], b = (D) => pe(D.state) ? Ro(s, D) : ma(D.state);
    return ea({
      icon: ne.flower,
      name: gt.pollen,
      sub: on(s, m) + " · " + b(m),
      cls: "wbBase wbPollen",
      zone: gs(Go(m)) + Pa(b(m), ""),
      callouts: h.slice(0, 3).map((D) => [on(s, D), b(D)])
    });
  }
  function Hn(s) {
    var K;
    const h = Date.now(), m = ot("hourly").filter((W) => {
      const $ = new Date(W.datetime).getTime();
      return $ > h - oe && $ < h + 12 * oe;
    }), b = m.find((W) => (W.precipitation_probability ?? 0) >= 50 || (W.precipitation ?? 0) >= 0.2), D = b ? Ke(gt.rainFrom, { time: ze(new Date(Math.max(h, new Date(b.datetime).getTime())), s) }) : m.length ? gt.noRain12 : void 0, O = (j == null ? void 0 : j()) || "rainviewer";
    let F;
    if (O.startsWith("camera:")) {
      const W = s.states[O.slice(7)], $ = W && W.state !== "unavailable" && ((K = W.attributes) == null ? void 0 : K.entity_picture);
      F = $ ? '<div class="wbRadar wbRadarCam" aria-hidden="true"><img class="wbRadarImg" src="' + vt($) + '" data-src="' + vt($) + '" alt=""></div>' : '<div class="wbRadar" aria-hidden="true"><span class="wbRadarNote">' + vt(gt.cameraOff) + "</span></div>";
    } else {
      const W = sr(s);
      F = W ? '<div class="wbRadar wbRadarMap" aria-hidden="true" data-lat="' + W.lat + '" data-lon="' + W.lon + '"><i class="wbRadarHome"></i></div>' : '<div class="wbRadar" aria-hidden="true"><i class="wbRadarRing"></i><i class="wbRadarHome"></i><span class="wbRadarNote">' + vt(gt.noLocation) + "</span></div>";
    }
    return ea({ icon: ne.radar, name: gt.rainRadar, sub: D, cls: "wbBase wbRadarTile", visual: F });
  }
  const ri = {
    current: Vt,
    hourly: ur,
    sun: jt,
    moon: ti,
    wind: cs,
    uv_index: jo,
    compared_to_average: ei,
    humidity: ps,
    pressure: dn,
    precipitation: Pn,
    visibility: ai,
    air_quality: fs,
    aq_tile: ni,
    pollen_tile: bs,
    radar_tile: Hn
  }, br = [["day", "Last 24 hours", 1], ["week", "Last 7 days", 7], ["month", "Last 30 days", 30]], pn = (s, h) => {
    var m;
    return h.toLocaleDateString((m = s.locale) == null ? void 0 : m.language, { day: "numeric", month: "short" });
  }, be = (s) => {
    const h = new Date(s);
    return h.setMinutes(h.getMinutes() - h.getTimezoneOffset()), h.toISOString().slice(0, 10);
  }, ga = () => {
    const s = lt.range, h = Date.now();
    if (s.preset !== "custom") {
      const D = br.find(([O]) => O === s.preset)[2];
      return [h - D * ha, h];
    }
    const m = sn(/* @__PURE__ */ new Date(s.from + "T00:00")).getTime(), b = Math.min(h, sn(/* @__PURE__ */ new Date(s.to + "T00:00")).getTime() + ha);
    return [Math.min(m, b - oe), b];
  }, Dt = (s) => {
    const h = lt.range;
    if (h.preset !== "custom") return br.find(([D]) => D === h.preset)[1];
    const [m, b] = ga();
    return h.from === h.to ? pn(s, new Date(m)) : pn(s, new Date(m)) + " – " + pn(s, new Date(b - 1));
  }, go = () => lt.range.preset === "custom" ? lt.range.from + "_" + lt.range.to : lt.range.preset, Zo = (s, h) => h - s <= 2 * ha, wr = (s, h, m, b) => Zo(m, b) ? ze(h, s) : pn(s, h), bo = (s, h = 60) => {
    const m = Math.max(1, Math.ceil(s.length / h));
    return s.filter((b, D) => D % m === 0 || D === s.length - 1);
  }, ii = (s, h, m, b, D = !1) => s.callWS({
    type: "history/history_during_period",
    start_time: new Date(m).toISOString(),
    end_time: new Date(b).toISOString(),
    entity_ids: [h],
    minimal_response: D,
    no_attributes: D,
    significant_changes_only: !1
  }), Ko = (s) => async (h, m, b, D) => {
    const O = Le(h, m, s);
    if (!O) return [];
    const F = O.stateObj.entity_id, K = await ii(h, F, b, D);
    return bo(((K == null ? void 0 : K[F]) ?? []).map((W) => {
      var ft;
      const $ = ((ft = W.a) == null ? void 0 : ft[s]) ?? (pe(W.s) ? Number(W.s) : void 0), tt = (W.lu ?? W.lc) * 1e3;
      return typeof $ == "number" && tt >= b && tt <= D ? { t: new Date(tt), value: $ } : null;
    }).filter(Boolean)).map((W) => ({ label: wr(h, W.t, b, D), value: W.value }));
  }, si = (s, h) => async (m, b, D, O) => {
    const F = s(m);
    if (!F) return [];
    const K = F.entity_id, W = await ii(m, K, D, O, !0);
    return bo(((W == null ? void 0 : W[K]) ?? []).map(($) => {
      const tt = h($.s), ft = $.lu * 1e3;
      return tt == null || !Number.isFinite(tt) || ft < D || ft > O ? null : { t: new Date(ft), value: tt };
    }).filter(Boolean)).map(($) => ({ label: wr(m, $.t, D, O), value: $.value }));
  }, un = (s, h) => async (m, b, D, O) => {
    const F = sr(m);
    if (!F) return [];
    const K = [];
    if (Zo(D, O)) for (let W = D; W <= O; W += oe / 2) K.push({ label: ze(new Date(W), m), value: s(new Date(W), F) });
    else for (let W = O; W >= D; W -= ha) {
      const $ = new Date(W), tt = h($, F, m);
      tt != null && K.unshift({ label: pn(m, $), value: tt });
    }
    return bo(K);
  }, fn = (s) => zo(s).sort((h, m) => Go(m) - Go(h))[0], ra = (s, h, m) => {
    const b = Le(s, h, m);
    return b ? rn(s, b.stateObj, m) : "";
  }, hn = {
    current: { name: () => gt.modes.temperature, icon: () => ne.sunny, load: Ko("temperature"), fmt: (s, h, m) => ge(s, m), now: (s, h) => {
      var m;
      return ge(s, (m = Le(s, h, "temperature")) == null ? void 0 : m.value);
    } },
    sun: {
      name: () => gt.sun,
      icon: () => ne.sunny,
      load: un((s, h) => Math.round(is(s, h.lat, h.lon) / oa), (s, h, m) => {
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
      const m = Le(s, h, "uv_index");
      return m ? $t(Number(m.value), s.locale) : "";
    } },
    humidity: { name: () => gt.metrics.humidity, icon: () => ne.waterPercent, load: Ko("humidity"), fmt: (s, h, m) => $t(Math.round(m), s.locale) + "%", now: (s, h) => {
      const m = Le(s, h, "humidity");
      return m ? $t(Math.round(Number(m.value)), s.locale) + "%" : "";
    } },
    pressure: { name: () => gt.metrics.pressure, icon: () => ne.gauge, load: Ko("pressure"), fmt: (s, h, m) => $t(Math.round(m), s.locale) + " " + ra(s, h, "pressure"), now: (s, h) => {
      const m = Le(s, h, "pressure");
      return m ? $t(Math.round(Number(m.value)), s.locale) + " " + ra(s, h, "pressure") : "";
    } },
    wind: { name: () => gt.wind, icon: () => ne.windy, load: Ko("wind_speed"), fmt: (s, h, m) => $t(Math.round(m), s.locale) + " " + ra(s, h, "wind_speed"), now: (s, h) => {
      const m = Le(s, h, "wind_speed");
      return m ? $t(Math.round(Number(m.value)), s.locale) + " " + ra(s, h, "wind_speed") : "";
    } },
    visibility: { name: () => gt.metrics.visibility, icon: () => ne.eyeOutline, load: Ko("visibility"), fmt: (s, h, m) => $t(Math.round(m * 10) / 10, s.locale) + " " + ra(s, h, "visibility"), now: (s, h) => {
      const m = Le(s, h, "visibility");
      return m ? $t(Number(m.value), s.locale) + " " + ra(s, h, "visibility") : "";
    } },
    aq_tile: {
      name: (s) => Ue(s)[0] ? on(s, Ue(s)[0]) : gt.airQuality,
      icon: () => ne.airFilter,
      load: si((s) => Ue(s)[0], (s) => pe(s) ? Number(s) : null),
      fmt: (s, h, m) => {
        var O, F;
        const b = Ue(s)[0], D = (O = b == null ? void 0 : b.attributes) == null ? void 0 : O.device_class;
        return $t(Math.round(m * 10) / 10, s.locale) + (D === "aqi" ? " AQI" : (F = b == null ? void 0 : b.attributes) != null && F.unit_of_measurement ? " " + b.attributes.unit_of_measurement : "");
      },
      now: (s) => {
        const h = Ue(s)[0];
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
    const m = s + "|" + go(), [b, D] = ga();
    if (to[m] && Date.now() - to[m].at < 5 * Ne) return;
    to[m] = { at: Date.now(), points: null };
    try {
      to[m].points = await hn[s].load(h, Ct(h), b, D);
    } catch {
      to[m].points = [];
    }
    Re(!0), ba === s && lt.graph === s && (ba = null, Od(z.querySelector(".wbGraphCard")));
    const O = lt.graph === s && z.querySelector(".wbGraph .wbChart");
    O && Xp(O, O.querySelector(".wbLine"), O.querySelectorAll(".wbArea"));
  }
  function li(s, h) {
    const m = lt.range, b = be(Date.now()), [D, O] = ga(), F = m.pickFrom || be(D), K = m.pickTo || be(O - 1);
    return '<div class="wbRangePick" role="dialog" aria-label="Choose date range"><div class="wbRangePresets">' + br.map(([W, $]) => '<button class="wbRangePreset" aria-pressed="' + (m.preset === W) + '" data-wb="graph-preset" data-range="' + W + '" data-wb-focus="graph-preset-' + W + '">' + vt($) + "</button>").join("") + '</div><div class="wbRangeDates"><label><span>From</span><input type="date" data-range-from value="' + F + '" max="' + b + '"></label><label><span>To</span><input type="date" data-range-to value="' + K + '" max="' + b + '"></label></div><button class="wbRangeApply" data-wb="graph-apply" data-wb-focus="graph-apply">Show these dates</button></div>';
  }
  function ci(s, h, m) {
    var ft;
    const b = hn[m], [D, O] = ga(), F = Zo(D, O), K = (ft = to[m + "|" + go()]) == null ? void 0 : ft.points, W = Math.max(120, Math.min(520, innerWidth - (innerWidth <= 620 ? 0 : 32)) - 2 * 18 - 32), tt = K ? K.length > 1 ? ap(K, (Nt) => b.fmt(s, h, Nt, F), 220, W) : '<span class="wbGraphNote"><span>No history for these dates</span></span>' : '<span class="wbGraphNote"><span>Loading…</span></span>';
    return '<div class="wbPopupBox"><div class="wbCard wbSquare wbGraphCard" role="dialog" aria-modal="true" aria-label="' + vt(b.name(s)) + '"><div class="wbHead"><div class="wbChip wbPlain">' + tu(b.icon(s)) + '</div><div class="wbText"><span class="wbName">' + vt(b.name(s)) + '</span><span class="wbSub">' + vt(b.sub ? b.sub(F) : b.now ? b.now(s, h) : "") + '</span></div><button class="wbBack" title="Close" data-wb="graph-close" data-wb-focus="graph-close">' + No(ne.close) + '</button></div><button class="wbRangeBtn" aria-haspopup="dialog" aria-expanded="' + !!lt.picking + '" title="Choose date range" data-wb="graph-pick" data-wb-focus="graph-pick">' + No(ne.calendar) + "<span>" + vt(Dt(s)) + "</span>" + No(ne.chevronDown) + '</button><div class="wbGraph">' + tt + "</div></div>" + (lt.picking ? li() : "") + "</div>";
  }
  function Re(s) {
    var Nt, Tt, St, Wt, Lt;
    const h = r == null ? void 0 : r();
    if (!h || nt) return;
    const m = Ct(h);
    kt(h, m), G.lastFetch || ho();
    const b = Ae(h), D = tp(h), O = Nl(h), F = [
      ...m.map((dt) => h.states[dt]),
      h.states["sun.sun"],
      D && h.states[D],
      O && h.states[O],
      ...b.air.map((dt) => h.states[dt]),
      ...b.pollen.map((dt) => h.states[dt]),
      ...et.some((dt) => J.includes(dt)) ? [...Ue(h), ...zo(h)] : [],
      h.locale,
      h.config,
      h.entities,
      Math.floor(Date.now() / Ne)
    ];
    if (!s && ct && F.length === ct.length && F.every((dt, Ot) => dt === ct[Ot])) return;
    ct = F;
    const K = L.getRootNode(), W = K.activeElement || document.activeElement;
    for (const dt of et) {
      const Ot = N[dt];
      let It = "";
      try {
        It = ri[dt](h, m) || "";
      } catch {
        It = "";
      }
      if (It === Ot.html) continue;
      const fe = W && Ot.el.contains(W) ? (Nt = W.dataset) == null ? void 0 : Nt.wbFocus : void 0, _t = Ot.el.querySelector(".wbStripScroll"), ae = _t ? _t.scrollLeft : null;
      Ot.html = It, Ot.el.hidden = !It, Ot.el.innerHTML = It;
      const ce = Ot.el.querySelector(".wbStripScroll");
      ce && ae != null ? ce.scrollTo({ left: ae }) : ce != null && ce.dataset.start && ce.scrollTo({ left: Number(ce.dataset.start) * ce.clientWidth / Number(ce.dataset.span) }), fe && !U && ((Tt = Ot.el.querySelector('[data-wb-focus="' + fe + '"]')) == null || Tt.focus());
    }
    let $ = "";
    if (lt.graph)
      try {
        $ = ci(h, m, lt.graph) || "";
      } catch {
        $ = "";
      }
    if ($ !== H) {
      const dt = W && z.contains(W) ? (St = W.dataset) == null ? void 0 : St.wbFocus : void 0;
      H = $, z.innerHTML = $, z.hidden = !$, $ && !z.isConnected && (L.closest("#app") || L).appendChild(z), dt && !U && ((Wt = z.querySelector('[data-wb-focus="' + dt + '"]')) == null || Wt.focus({ preventScroll: !0 }));
    }
    ls(), L.querySelectorAll(".wbRadarMap").forEach((dt) => {
      dt._tiles || $o(dt);
    }), U && ((Lt = L.querySelector('[data-wb-focus="' + U + '"]') || z.querySelector('[data-wb-focus="' + U + '"]')) == null || Lt.focus({ preventScroll: !0 }), U = null);
    let tt = !1, ft = !1;
    for (const dt of et) {
      const Ot = N[dt], It = !Ot.el.hidden, fe = at[dt] === "wide" || X.includes(dt), _t = et.indexOf(dt) >= et.indexOf("moon"), ae = It && (_t && fe && !tt || !fe && !ft);
      ae && fe && (tt = !0), ae && !fe && (ft = !0), Ot.el.toggleAttribute("data-break", ae);
    }
    wa(performance.now());
  }
  function mn() {
    Z || nt || (Z = !0, queueMicrotask(() => {
      Z = !1, Re(!0);
    }));
  }
  function di() {
    const s = getComputedStyle(L), h = (F) => s.getPropertyValue(F).trim(), m = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([F, K]) => {
      h(K) && (m[F] = h(K));
    });
    const b = h("--color-text-primary") || "#f1f1f1", D = h("--color-bg-card") || "#222222", O = !!L.closest(".light");
    return { colors: { ...Oa, ...m }, ink: O ? b : D, paper: O ? D : b };
  }
  const vr = (s, h) => {
    var m;
    s.width !== h.w && (s.width = h.w), s.height !== h.h && (s.height = h.h), (m = s.getContext("2d")) == null || m.putImageData(new ImageData(h.data, h.w, h.h), 0, 0);
  }, eo = () => g && !Im();
  function pi(s, h) {
    L.querySelectorAll("canvas[data-wb-strip]").forEach((m) => yr(m, Q[m.dataset.wbStrip], s, h));
  }
  function yr(s, h, m, b) {
    if (!h || !s.getClientRects().length) return;
    const D = s.clientWidth, O = s.clientHeight;
    if (!D || !O) return;
    const F = { width: D, height: O, columns: h.columns || Id, colors: b.colors, clock: m, ambient: eo(), seed: h.seed, soft: 1.5 };
    if (p === "smooth") {
      const K = Math.min(2, window.devicePixelRatio || 1), W = Math.round(D * K), $ = Math.round(O * K);
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
      L.querySelectorAll("canvas[data-wb-wx]").forEach((b) => {
        b.getClientRects().length && vr(b, wh(uh(b.dataset.wbWx, h.colors), { size: Number(b.dataset.size) || 40, px: 2, oneBit: p === "onebit", colors: h.colors, ink: h.ink, paper: h.paper, clock: s, idle: m }));
      });
    }
    L.querySelectorAll("canvas[data-wb-sea]").forEach((m) => {
      const b = m.clientWidth, D = m.clientHeight, O = Number(m.dataset.wbSea), F = b + "x" + D + ":" + O + ":" + h.colors.skyClearDay;
      !b || !D || !(O > 0) || m.dataset.painted === F || (m.dataset.painted = F, vr(m, Xh(b, D, O, h.colors)));
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
    L.classList.toggle("wbMotion", eo()), !wt && !nt && eo() && (wt = requestAnimationFrame(ui));
  }
  function Nn(s) {
    var m, b, D, O, F, K, W;
    if (s.target === z) {
      lt.graph = void 0, lt.picking = !1, Re(!0);
      return;
    }
    const h = (b = (m = s.target).closest) == null ? void 0 : b.call(m, "[data-wb]");
    if (!h || !(L.contains(h) || z.contains(h))) {
      const $ = (O = (D = s.target).closest) == null ? void 0 : O.call(D, ".wbItem"), tt = $ == null ? void 0 : $.dataset.card;
      if (!$ || !L.contains($) || !hn[tt] || lt.graph === tt || L.closest(".tfEditing") || tt === "current" && w) return;
      lt.graph = tt, lt.picking = !1, U = "graph-close", Re(!0), (F = to[tt + "|" + go()]) != null && F.points ? Od(z.querySelector(".wbGraphCard")) : ba = tt, ia(tt);
      return;
    }
    switch (h.dataset.wb) {
      case "day": {
        lt.openDay = Number(h.dataset.index), lt.opener = h.dataset.wbFocus, U = "back-day";
        const $ = Kt()[lt.openDay], tt = !G.todayHistory || G.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - G.todayHistory.fetched > fm;
        $ && ar(new Date($.datetime), /* @__PURE__ */ new Date()) && tt && ln();
        break;
      }
      case "close-day":
        lt.openDay = void 0, U = lt.opener, lt.opener = void 0;
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
        const $ = L.querySelector(".wbStripScroll");
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
        lt.picking = !lt.picking, U = lt.picking ? "graph-preset-" + (lt.range.preset === "custom" ? "day" : lt.range.preset) : "graph-pick";
        break;
      case "graph-preset":
        lt.range = { preset: h.dataset.range }, lt.picking = !1, U = "graph-pick", Re(!0), ia(lt.graph);
        return;
      case "graph-apply": {
        let $ = lt.range.pickFrom || ((K = L.querySelector("[data-range-from]")) == null ? void 0 : K.value), tt = lt.range.pickTo || ((W = L.querySelector("[data-range-to]")) == null ? void 0 : W.value);
        if (!$ || !tt) return;
        $ > tt && ([$, tt] = [tt, $]), lt.range = { preset: "custom", from: $, to: tt }, lt.picking = !1, U = "graph-pick", Re(!0), ia(lt.graph);
        return;
      }
      default:
        return;
    }
    Re(!0);
  }
  function Ye(s) {
    var h, m, b, D, O, F;
    s.key === "Escape" && lt.openDay !== void 0 && ((m = (h = s.target).closest) != null && m.call(h, '[data-wb-open="day"]')) ? (lt.openDay = void 0, U = lt.opener, lt.opener = void 0, Re(!0)) : s.key === "Escape" && lt.picking && ((D = (b = s.target).closest) != null && D.call(b, ".wbGraphCard")) ? (lt.picking = !1, U = "graph-pick", Re(!0)) : s.key === "Escape" && lt.graph && ((F = (O = s.target).closest) != null && F.call(O, ".wbGraphCard")) && (lt.graph = void 0, Re(!0));
  }
  let _a = null;
  function On(s) {
    var m, b;
    const h = (b = (m = s.target).closest) == null ? void 0 : b.call(m, ".wbStripScroll");
    !h || s.button !== 0 || (_a = { startX: s.pageX, left: h.scrollLeft, moved: !1 }, h.classList.add("wbHeld"), window.addEventListener("mousemove", gn), window.addEventListener("mouseup", fi, { once: !0 }));
  }
  function gn(s) {
    const h = L.querySelector(".wbStripScroll");
    if (!_a || !h) return;
    const m = s.pageX - _a.startX;
    !_a.moved && Math.abs(m) > 1 && (_a.moved = !0, h.classList.add("wbDragging")), h.scrollLeft = _a.left - m;
  }
  function fi() {
    _a = null, window.removeEventListener("mousemove", gn);
    const s = L.querySelector(".wbStripScroll");
    if (!s) return;
    s.classList.remove("wbDragging", "wbHeld");
    const h = [...s.querySelectorAll(".wbSnap")];
    if (h.length) {
      const m = h.reduce((b, D) => Math.abs(D.offsetLeft - s.scrollLeft) < Math.abs(b.offsetLeft - s.scrollLeft) ? D : b);
      s.scrollTo({ left: m.offsetLeft, behavior: "smooth" });
    }
  }
  const bn = (s) => {
    var m, b;
    const h = s.target;
    (m = h.matches) != null && m.call(h, "[data-range-from]") ? lt.range.pickFrom = h.value : (b = h.matches) != null && b.call(h, "[data-range-to]") && (lt.range.pickTo = h.value);
  };
  L.addEventListener("change", bn), L.addEventListener("click", Nn), L.addEventListener("keydown", Ye), z.addEventListener("change", bn), z.addEventListener("click", Nn), z.addEventListener("keydown", Ye), L.addEventListener("mousedown", On);
  const hi = 64, ws = 30;
  let Ca = null, Fa = 0;
  const wo = () => {
    Fa = 0, L.querySelectorAll(".wbPollen .wbPush").forEach((s) => {
      let h = 0, m = 0;
      if (Ca) {
        const b = s.parentElement.getBoundingClientRect(), D = b.left + b.width / 2 - Ca.x, O = b.top + b.height / 2 - Ca.y, F = Math.hypot(D, O) || 1;
        if (F < hi) {
          const K = (1 - F / hi) * ws;
          h = D / F * K, m = O / F * K;
        }
      }
      s.style.transform = h || m ? "translate(" + h.toFixed(1) + "px," + m.toFixed(1) + "px)" : "";
    }), Ca && (Fa = requestAnimationFrame(wo));
  }, mi = (s) => {
    var m, b;
    if (!((b = (m = s.target).closest) == null ? void 0 : b.call(m, ".wbPollen")) || Oe != null && Oe.matches) {
      Ca && (Ca = null, Fa || (Fa = requestAnimationFrame(wo)));
      return;
    }
    Ca = { x: s.clientX, y: s.clientY }, Fa || (Fa = requestAnimationFrame(wo));
  }, je = () => {
    Ca = null, Fa || (Fa = requestAnimationFrame(wo));
  };
  L.addEventListener("pointermove", mi), L.addEventListener("pointerleave", je);
  const sa = typeof ResizeObserver == "function" ? new ResizeObserver(() => wa(performance.now())) : null;
  sa == null || sa.observe(L);
  const Aa = typeof ResizeObserver == "function" ? new ResizeObserver((s) => s.forEach((h) => {
    const m = h.target;
    m._tiles && (m.clientWidth !== m._w || m.clientHeight !== m._h) && $o(m);
  })) : null;
  function $o(s) {
    var F;
    const h = s.clientWidth, m = s.clientHeight;
    if (!h || !m || nt) return;
    const b = Tm(Number(s.dataset.lat), Number(s.dataset.lon), h, m), D = !!((F = L.closest("#app")) != null && F.classList.contains("light")), O = (K) => ' style="left:' + K.left + "px;top:" + K.top + 'px"';
    s._tiles = b, s._w = h, s._h = m, s._frames = null, s._built = Date.now(), s.innerHTML = '<div class="wbRadarLayer wbRadarBase">' + b.map((K) => '<img src="https://' + "abcd"[(K.x + K.y) % 4] + ".basemaps.cartocdn.com/" + (D ? "light_all" : "dark_all") + "/" + Xl + "/" + K.x + "/" + K.y + '.png"' + O(K) + ' alt="">').join("") + '</div><div class="wbRadarFrames"></div><i class="wbRadarHome"></i><span class="wbRadarTime"></span><span class="wbRadarCredit">© OpenStreetMap · CARTO · RainViewer</span>', Aa == null || Aa.observe(s), Am().then((K) => {
      !s.isConnected || nt || s._tiles !== b || (s.querySelector(".wbRadarFrames").innerHTML = K.frames.map((W, $) => '<div class="wbRadarLayer wbRadarRain" data-i="' + $ + '" hidden>' + b.map((tt) => '<img src="' + K.host + W.path + "/" + Po + "/" + Xl + "/" + tt.x + "/" + tt.y + '/2/1_1.png"' + O(tt) + ' alt="">').join("") + "</div>").join(""), s._frames = K.frames, s._hold = 0, xr(s, K.frames.findLastIndex((W) => W.past)));
    }).catch(() => {
      s.isConnected && (s.querySelector(".wbRadarTime").textContent = gt.radarOff);
    });
  }
  function xr(s, h) {
    const m = s._frames;
    if (!(m != null && m.length)) return;
    s._i = h, s.querySelectorAll(".wbRadarRain").forEach((D) => {
      D.hidden = Number(D.dataset.i) !== h;
    });
    const b = m[h];
    s.querySelector(".wbRadarTime").textContent = ze(new Date(b.time * 1e3), r == null ? void 0 : r()) + (b.past ? "" : " · " + gt.forecastTag);
  }
  function vs() {
    L.querySelectorAll(".wbRadarMap").forEach((s) => {
      if (!s._frames) return;
      if (Date.now() - s._built > Jp) {
        $o(s);
        return;
      }
      if (Oe != null && Oe.matches) return;
      if (s._hold > 0) {
        s._hold -= jd;
        return;
      }
      const h = s._frames.length - 1, m = s._frames.findLastIndex((D) => D.past), b = s._i >= h ? 0 : s._i + 1;
      xr(s, b), (b === m || b === h) && (s._hold = Cm);
    });
  }
  const gi = () => L.querySelectorAll(".wbRadarImg").forEach((s) => {
    const h = s.dataset.src;
    s.src = h + (h.includes("?") ? "&" : "?") + "hc=" + Date.now();
  }), vo = typeof MutationObserver == "function" ? new MutationObserver(() => L.querySelectorAll(".wbRadarMap").forEach((s) => {
    s._tiles && $o(s);
  })) : null, kr = L.closest("#app");
  kr && (vo == null || vo.observe(kr, { attributes: !0, attributeFilter: ["class"] }));
  const Oe = (Jo = window.matchMedia) == null ? void 0 : Jo.call(window, "(prefers-reduced-motion: reduce)"), bi = () => {
    Xo(), wa(performance.now());
  };
  (In = Oe == null ? void 0 : Oe.addEventListener) == null || In.call(Oe, "change", bi);
  const Je = [
    setInterval(() => {
      qt = /* @__PURE__ */ new Date(), Re(!0);
    }, km),
    setInterval(() => {
      V = /* @__PURE__ */ new Date(), Re(!0);
    }, Mm),
    setInterval(ho, vm),
    setInterval(vs, jd),
    setInterval(gi, Ne)
  ];
  return Re(!0), Xo(), {
    update() {
      Re(!1);
    },
    // a choice in Settings changed (Next hours' window)
    refresh() {
      Re(!0);
    },
    setStyle(s) {
      !s || s === p || (p = s, L.dataset.style = p, z.dataset.style = p, Re(!0), Xo());
    },
    destroy() {
      var s;
      cancelAnimationFrame(Fa), L.removeEventListener("pointermove", mi), L.removeEventListener("pointerleave", je), nt = !0, Je.forEach(clearInterval), wt && cancelAnimationFrame(wt), wt = 0, sa == null || sa.disconnect(), Aa == null || Aa.disconnect(), vo == null || vo.disconnect(), (s = Oe == null ? void 0 : Oe.removeEventListener) == null || s.call(Oe, "change", bi), fi(), L.removeEventListener("click", Nn), L.removeEventListener("change", bn), L.removeEventListener("keydown", Ye), L.removeEventListener("mousedown", On), z.removeEventListener("click", Nn), z.removeEventListener("change", bn), z.removeEventListener("keydown", Ye), ["daily", "hourly"].forEach(xt), L.remove(), z.remove();
    }
  };
}
const Ur = "#E1E1E1", rp = "#F7F4F0", Ol = "#03a9f4", te = 14, ee = 172;
let h0 = 0;
const we = (n) => Math.round(n * 100) / 100, fo = (n, r, d) => Math.max(r, Math.min(d, n)), Fo = (n, r, d, p, g, v) => '<rect x="' + we(n) + '" y="' + we(r) + '" width="' + we(d) + '" height="' + we(p) + '" fill="' + g + '"' + (v != null ? ' opacity="' + v + '"' : "") + "/>", Il = (n) => n.map((r, d) => (d ? "L" : "M") + we(r[0]) + " " + we(r[1])).join("");
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
  for (let C = 0; C < nn.length - 1; C++) if (r >= nn[C][0] && r <= nn[C + 1][0]) {
    d = nn[C], p = nn[C + 1];
    break;
  }
  const g = (r - d[0]) / (p[0] - d[0]), v = g * g * (3 - 2 * g), w = (C, j) => {
    const k = parseInt(C.slice(1), 16), L = parseInt(j.slice(1), 16);
    return "#" + [16, 8, 0].map((I) => Math.round((k >> I & 255) + ((L >> I & 255) - (k >> I & 255)) * v).toString(16).padStart(2, "0")).join("");
  };
  return { top: w(d[1][0], p[1][0]), bot: w(d[1][1], p[1][1]), warm: w(d[1][2], p[1][2]), cool: w(d[1][3], p[1][3]), op: d[1][4] + (p[1][4] - d[1][4]) * v, t: r };
}
function g0(n) {
  const r = parseInt(n.slice(1), 16), d = (r >> 16 & 255) / 255, p = (r >> 8 & 255) / 255, g = (r & 255) / 255, v = Math.max(d, p, g), w = Math.min(d, p, g);
  let C = 0, j = 0;
  const k = (v + w) / 2;
  if (v !== w) {
    const L = v - w;
    j = k > 0.5 ? L / (2 - v - w) : L / (v + w), C = (v === d ? (p - g) / L + (p < g ? 6 : 0) : v === p ? (g - d) / L + 2 : (d - p) / L + 4) / 6;
  }
  return [C * 360, j * 100, k * 100];
}
function uu(n, r, d) {
  r = fo(r, 0, 100) / 100, d = fo(d, 0, 100) / 100;
  const p = (w) => (w + n / 30) % 12, g = r * Math.min(d, 1 - d), v = (w) => d - g * Math.max(-1, Math.min(p(w) - 3, Math.min(9 - p(w), 1)));
  return "#" + [v(0), v(8), v(4)].map((w) => Math.round(w * 255).toString(16).padStart(2, "0")).join("");
}
const [fu, hu, mu] = g0(Ur), ip = uu(fu, hu, Math.max(6, mu - 14)), b0 = uu(fu, hu, Math.min(96, mu + 16));
function w0(n, r, d, p, g) {
  const v = ee / 2, w = ee * 0.12, C = v - (v - w) * n, j = (et) => et ** 1.3, k = fo(d, -1.5, 1.5), L = (et) => -(Math.abs(k) * 4.6 * et ** 1.5) * Math.sign(k), I = n * 1.4, z = (et, at) => {
    const X = Math.min(4.8, Math.abs(d) * 2.6) * (at ? 1 : -1) * Math.sign(d || 1), N = at ? et + C : et, nt = at ? et : et + C, ct = (yt) => N + L(yt) + X * Math.sin(yt * Math.PI * 1.2 + p) * j(yt) * 1.4 + I * Math.sin(yt * Math.PI * 2 + p * 0.6) * j(yt) * (at ? 1 : -1), wt = [[nt, te]];
    for (let yt = 0; yt <= 12; yt++) wt.push([ct(yt / 12), te + ee * yt / 12]);
    wt.push([nt, te + ee]);
    let it = '<path d="' + Il(wt) + 'Z" fill="' + Ur + '"/>';
    if (g) return it;
    const Z = 1.35 + ((at ? d > 0 : d < 0) ? 0.35 : 0), U = (yt) => {
      const Rt = yt / 7, lt = at ? 1 - Rt : Rt, G = (1 - lt) ** 1.3, qt = et + C * Rt;
      return Array.from({ length: 13 }, (V, Q) => {
        const A = Q / 12;
        return [qt + L(A) * G + X * Z * Math.sin(A * Math.PI * 1.2 + p - lt * 3.2) * j(A) * 1.4 * G + I * 1.6 * Math.sin(A * Math.PI * 2 + p * 0.6 - lt * 2.5) * j(A) * n * (0.4 + 0.6 * G), te + ee * A];
      });
    }, H = [1, 2, 3, 4, 5, 6].map(U);
    for (let yt = 0; yt < 6; yt += 2) it += '<path d="' + Il(H[yt]) + Il(H[yt + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return it;
  }, J = v - (v - w) * r;
  return { body: z(te, !0) + z(te + ee - C, !1), rails: [{ x: te + J - 4, y: te, w: 4, h: ee }, { x: te + ee - J, y: te, w: 4, h: ee }], head: 6.4 };
}
function v0(n, r, d) {
  const p = ee * (1 - n);
  let g = "";
  if (p > 1 && (g += Fo(te, te, ee, p, Ur), !d))
    for (let v = 1; v < 7; v += 2) g += Fo(te + ee * v / 7, te, ee / 7, p, "#fff");
  return { body: g, rails: [{ x: te, y: te + ee * (1 - r) - 7, w: ee, h: 11 }], head: 10.4 };
}
function y0(n, r, d, p) {
  const g = 9 - 7 * (d / 100), v = te + ee * (1 - n), w = Math.ceil(ee / 10) + 1, C = te + g / 2, j = (te + ee - g / 2 - C) / (w - 1), k = 0.8, L = 0.6, I = Array.from({ length: w }, (et, at) => Math.max(C + at * L, Math.min(C + at * j, v - g / 2 - (w - 1 - at) * L))), z = I.slice(0, -1).map((et, at) => fo((I[at + 1] - et - L) / (j - L), 0, 1));
  z.push(z[w - 2]);
  let J = "";
  return I.forEach((et, at) => {
    const X = k + (g - k) * z[at], N = Math.max(0.5, X / 2), nt = Math.max(0.4, X * 0.114);
    J += Fo(te, et - N, ee, Math.max(1, X), Ur), !p && X > 2.2 && (J += Fo(te, et + N - nt, ee, nt, ip) + Fo(te, et - N, ee, nt * 0.55, b0, 0.75));
  }), p || [0.22, 0.78].forEach((et) => {
    J += Fo(te + ee * et - 0.7, te, 1.4, Math.max(0, I[w - 1] + 1 - te), ip, 0.85);
  }), { body: J, rails: [{ x: te, y: te + ee * (1 - r) - 8, w: ee, h: 8 }], head: 8.8 };
}
const sp = (n, r, d, p, g, v, w) => n === "curtain" ? w0(r, d, g, v, w) : n === "venetian" ? y0(r, d, p, w) : v0(r, d, w);
function x0(n, r) {
  let d = "", p = "";
  return r.forEach((g) => {
    const v = g.w > g.h, w = fo(v ? te + ee / 2 : g.x + g.w / 2, 17, 183), C = fo(v ? g.y + g.h / 2 : te + ee / 2, 17, 183);
    d += v ? Fo(te, fo(g.y + g.h / 2, te, te + ee) - 1, ee, 2, Ol) : Fo(fo(g.x + g.w / 2, te, te + ee) - 1, te, 2, ee, Ol);
    const j = v ? "M" + we(w - 4) + " " + we(C - 3) + "l4 -3l4 3M" + we(w - 4) + " " + we(C + 3) + "l4 3l4 -3" : "M" + we(w - 3) + " " + we(C - 4) + "l-3 4l3 4M" + we(w + 3) + " " + we(C - 4) + "l3 4l-3 4";
    p += '<circle cx="' + we(w) + '" cy="' + we(C) + '" r="11" fill="' + Ol + '" filter="url(#' + n + 's)"/><path d="' + j + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: d, knobs: p };
}
function k0(n, r) {
  const d = /* @__PURE__ */ new Date(), p = m0(d.getHours() + d.getMinutes() / 60), g = 42 + 18 * Math.sin(p.t * 0.5), v = p.t >= 5 && p.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (p.t - 5) / 15) : 80, w = sp(r.kind, r.pos / 100, r.bar / 100, r.tilt, r.vel, r.ph, !1), C = r.ghostAlpha > 4e-3 && r.ghost != null ? sp(r.kind, r.ghost / 100, r.ghost / 100, r.tilt, 0, 0, !0).body : "", j = r.grip > 4e-3 ? x0(n, w.rails) : null, k = (L) => Fo(te, te, ee, ee, L);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + n + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + n + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + p.top + '"/><stop offset="1" stop-color="' + p.bot + '"/></linearGradient><radialGradient id="' + n + 'w" cx="' + we(g) + '%" cy="' + we(v) + '%" r="58%"><stop offset="0" stop-color="' + p.warm + '" stop-opacity="' + we(p.op * 0.8) + '"/><stop offset="1" stop-color="' + p.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + n + 'k" cx="' + we(100 - g * 0.8) + '%" cy="' + we(100 - v * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + p.cool + '" stop-opacity="' + we(p.op * 0.64) + '"/><stop offset="1" stop-color="' + p.cool + '" stop-opacity="0"/></radialGradient><filter id="' + n + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + rp + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + n + 'c)">' + k("url(#" + n + "l)") + k("url(#" + n + "w)") + k("url(#" + n + "k)") + (C ? '<g opacity="' + we(r.ghostAlpha) + '">' + C + "</g>" : "") + w.body + '<rect x="14" y="14" width="172" height="' + w.head + '" fill="' + Ur + '" filter="url(#' + n + 's)"/></g>' + (j ? '<g clip-path="url(#' + n + 'c)" opacity="' + we(r.grip) + '">' + j.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + rp + '" stroke-width="3"/>' + (j ? '<g opacity="' + we(r.grip) + '">' + j.knobs + "</g>" : "") + "</svg>";
}
function M0({ onMove: n, onSet: r }) {
  var it;
  const d = "cv" + ++h0, p = document.createElement("div");
  p.className = "tfCoverArt";
  const g = (it = window.matchMedia) == null ? void 0 : it.call(window, "(pointer: coarse)").matches;
  let v = null;
  const w = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let C = 0, j = !1, k = !1, L = null, I = 0, z = 0;
  const J = () => (v == null ? void 0 : v.kind) === "curtain" ? "x" : "y", et = () => L || j || k || v.moving || v.target != null ? 1 : g ? performance.now() < z ? 1 : 0.4 : 0, at = () => {
    p.innerHTML = k0(d, { kind: v.kind, pos: w.pos, bar: v.target ?? w.pos, tilt: w.tilt, vel: w.vel, ph: w.ph, ghost: w.gpos, ghostAlpha: w.ghost, grip: w.grip });
  };
  function X(Z) {
    C = 0;
    const U = w.last ? Math.min(0.064, (Z - w.last) / 1e3) : 1 / 60, H = U * 60;
    w.last = Z;
    const yt = v.pos - w.pos, Rt = w.pos;
    w.pos += Math.sign(yt) * Math.min(Math.abs(yt), Math.max(10.5, Math.abs(yt) * 1.4) * U), Math.abs(v.pos - w.pos) < 0.03 && (w.pos = v.pos), w.vel = w.vel * 0.86 + (w.pos - Rt) / H * 0.14, Math.abs(w.vel) < 0.015 && w.pos === v.pos && (w.vel = 0), (w.pos !== Rt || w.vel) && (w.ph += (0.06 + Math.abs(w.vel) * 0.03) * H);
    const lt = v.tilt - w.tilt;
    w.tilt += Math.sign(lt) * Math.min(Math.abs(lt), Math.max(60, Math.abs(lt) * 4) * U);
    const G = et();
    w.grip += (G - w.grip) * Math.min(1, U * (G > w.grip ? 11 : 3.5)), Math.abs(G - w.grip) < 0.01 && (w.grip = G);
    const qt = v.target != null && Math.abs(v.target - w.pos) > 0.5 ? 0.22 : 0;
    v.target != null && (w.gpos = v.target), w.ghost += (qt - w.ghost) * Math.min(1, U * (qt > w.ghost ? 16 : 3)), Math.abs(qt - w.ghost) < 4e-3 && (w.ghost = qt), at(), w.pos !== v.pos || w.vel || w.tilt !== v.tilt || w.grip !== G || w.ghost !== qt ? C = requestAnimationFrame(X) : w.last = 0;
  }
  const N = () => {
    v && !C && (C = requestAnimationFrame(X));
  }, nt = setInterval(() => {
    v && !C && at();
  }, 60 * 1e3), ct = (Z) => {
    const U = p.getBoundingClientRect();
    return J() === "x" ? (Z.clientX - U.left) / U.width : (Z.clientY - U.top) / U.height;
  };
  p.addEventListener("pointerdown", (Z) => {
    var yt;
    if (!(v != null && v.canSet) || Z.button > 0) return;
    Z.preventDefault(), (yt = p.setPointerCapture) == null || yt.call(p, Z.pointerId);
    const U = v.target ?? v.pos, H = p.getBoundingClientRect();
    L = { p0: ct(Z), from: U, x0: Z.clientX, value: null, side: null }, v.kind === "curtain" && U > 0 && (L.side = (Z.clientX - H.left) / H.width < 0.5 ? "L" : "R"), N();
  }), p.addEventListener("pointermove", (Z) => {
    if (!L) return;
    let U;
    if (v.kind === "curtain") {
      if (!L.side) {
        const yt = Z.clientX - L.x0;
        if (Math.abs(yt) < 4) return;
        L.side = yt < 0 ? "L" : "R";
      }
      const H = (ee / 2 - ee * 0.12) / 200;
      U = L.from + (L.side === "L" ? -1 : 1) * ((ct(Z) - L.p0) / H) * 100;
    } else U = L.from - (ct(Z) - L.p0) / (ee / 200) * 100;
    L.value = fo(U, 0, 100), n(L.value);
  });
  const wt = () => {
    if (!L) return;
    const Z = L.value;
    L = null, Z != null && r(Math.round(Z)), N();
  };
  return p.addEventListener("pointerup", wt), p.addEventListener("pointercancel", wt), p.addEventListener("lostpointercapture", wt), p.addEventListener("pointerenter", () => {
    j = !0, N();
  }), p.addEventListener("pointerleave", () => {
    j = !1, N();
  }), p.addEventListener("focus", () => {
    k = p.matches(":focus-visible"), N();
  }), p.addEventListener("blur", () => {
    k = !1, N();
  }), p.addEventListener("keydown", (Z) => {
    if (!(v != null && v.canSet)) return;
    const U = Math.round(v.target ?? v.pos), H = Z.shiftKey ? 10 : 1, yt = { ArrowUp: U + H, ArrowRight: U + H, ArrowDown: U - H, ArrowLeft: U - H, PageUp: U + 25, PageDown: U - 25, Home: 0, End: 100 }[Z.key];
    if (yt == null) return;
    Z.preventDefault();
    const Rt = fo(yt, 0, 100);
    n(Rt), clearTimeout(I), I = setTimeout(() => r(Rt), 500);
  }), {
    el: p,
    update(Z) {
      const U = !v;
      v = Z, U && (w.pos = v.pos, w.tilt = v.tilt, z = performance.now() + 1500, g && setTimeout(N, 1600)), p.classList.toggle("x", J() === "x"), p.classList.toggle("y", J() === "y"), v.canSet ? (p.tabIndex = 0, p.setAttribute("role", "slider"), p.setAttribute("aria-valuemin", "0"), p.setAttribute("aria-valuemax", "100"), p.setAttribute("aria-valuenow", String(Math.round(v.target ?? v.pos))), p.setAttribute("aria-orientation", J() === "x" ? "horizontal" : "vertical")) : p.setAttribute("role", "img"), p.setAttribute("aria-label", v.name + (v.canSet ? " position" : "")), p.setAttribute("aria-valuetext", v.text), N();
    },
    destroy() {
      cancelAnimationFrame(C), C = 0, clearInterval(nt), clearTimeout(I), p.remove();
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
}, q = (n) => String(n ?? "").replace(/[&<>"']/g, (r) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[r]), cp = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', ql = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', dp = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', Zi = {
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
}, vp = { curtain: ["mdi:curtains", "mdi:curtains-closed"], blind: ["mdi:roller-shade", "mdi:roller-shade-closed"], venetian: ["mdi:blinds-horizontal", "mdi:blinds-horizontal-closed"] }, T0 = { curtain: "curtains", blind: "blind", venetian: "blinds" }, jr = {
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
}, yp = ["covers", "people", "openings", "leaks", "vacuum"], xp = "homecore_house", kp = "homecore-house-used", Vr = ["switch", "fan", "input_boolean", "automation"], Mp = "homecore-house-look", L0 = [["look", "Look"], ["house", "House page"], ["weather", "Weather"]], D0 = [["popup", "Popup"], ["sheet", "Sheet"]], E0 = [["auto", "Automatic"], ["cut", "Cut short"], ["wrap", "Two lines"], ["scroll", "Scroll"]], B0 = [["day", "Daytime 06–22"], ["waking", "Waking 07–23"], ["all", "All day"]], R0 = [["bitmap", "Pixel"], ["onebit", "1-bit"], ["smooth", "Smooth"], ["line", "Line"]], zr = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', P0 = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', H0 = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>', Sp = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"/></svg>', jl = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>', fa = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 13C6.14 13 4.59 14.28 4.14 16H2V18H4.14C4.59 19.72 6.14 21 8 21S11.41 19.72 11.86 18H22V16H11.86C11.41 14.28 9.86 13 8 13M8 19C6.9 19 6 18.1 6 17C6 15.9 6.9 15 8 15S10 15.9 10 17C10 18.1 9.1 19 8 19M19.86 6C19.41 4.28 17.86 3 16 3S12.59 4.28 12.14 6H2V8H12.14C12.59 9.72 14.14 11 16 11S19.41 9.72 19.86 8H22V6H19.86M16 9C14.9 9 14 8.1 14 7C14 5.9 14.9 5 16 5S18 5.9 18 7C18 8.1 17.1 9 16 9Z"/></svg>', _p = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"/></svg>', Ki = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/></svg>', Vl = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', gu = (n) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + n.map((r) => '<path d="' + r + '"/>').join("") + "</svg>", Xi = gu(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), Cp = gu(["M20 6L9 17L4 12"]), po = (n, r = "") => '<span class="tfAreaGlyph" data-icon-for="' + q(n || "") + '"' + (r ? ' data-icon-name="' + q(r) + '"' : "") + "></span>", N0 = (n) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (n ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', Ap = 1, Tp = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], Lp = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, $i = ["door", "window", "garage_door", "opening"], Dp = { moisture: ["detected water", "dry"], smoke: ["detected smoke", "clear"], gas: ["detected gas", "clear"], carbon_monoxide: ["detected carbon monoxide", "clear"], safety: ["became unsafe", "safe"] }, nr = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve", "water_heater"], O0 = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], I0 = 10, F0 = 20, q0 = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, W0 = ["living room", "bedroom", "office"];
function j0(n, { config: r, getHass: d }) {
  var bd, wd, vd;
  const p = (t) => n.getElementById(t), g = p("app"), v = r || {}, w = String(v.layout || "").toLowerCase().replace("_", "-") === "test-focus", C = String(v.page || "").toLowerCase() === "overview";
  let j = co.get(lp) === "1", k = {};
  const L = (t) => {
    var e;
    return (e = d()) == null ? void 0 : e.callWS(t);
  }, I = (t, e, a) => L({ type: "call_service", domain: t, service: e, service_data: a }), z = n.querySelector("#appearancePane .toggleList");
  z && !p("densityToggle") && (z.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), p("densityToggle").addEventListener("click", () => {
    j = !j, co.set(lp, j ? "1" : "0"), U();
  }));
  const J = [
    ["weather", "Weather", "The forecast under Home.", (t) => t.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (t) => t.startsWith("sensor.") && Gt(t).device_class === "power" && /^(W|kW)$/.test(Gt(t).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm in the Security popup.", (t) => t.startsWith("alarm_control_panel.")]
  ], et = (t, e, a, o) => '<div class="themeChoice" id="' + t + '" role="group" aria-label="' + e + '">' + o.map(([i, l]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + a + '="' + i + '">' + l + "</button>").join("") + "</div>", at = (t, e, a, o) => '<div class="toggleRow"' + (o ? ' id="' + o + '"' : "") + "><div><strong>" + t + "</strong>" + (e ? '<div class="status">' + e + "</div>" : "") + "</div>" + a + "</div>";
  function X() {
    var R, M;
    if (!w || p("housePane")) return;
    const t = p("settingsView");
    t.querySelector(".settingsTitle").textContent = "HomeCore settings";
    const e = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], a = (E, T) => '<div class="houseTab' + (E === "look" ? " active" : "") + '" data-house-pane="' + E + '"><section class="card">' + T + "</section></div>";
    t.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + e.map(([E, T]) => '<button class="tab segBtn' + (E === "look" ? " active" : "") + '" type="button" data-house-tab="' + E + '">' + T + "</button>").join("") + "</div>" + // Appearance in groups (Matt, 8 Nov), each one's title inside its card as a card header (Matt, 9 Nov)
    a("look", L0.map(([E, T]) => '<div class="tfSetGroup"><div class="toggleList" data-look-group="' + E + '"><div class="tfCardTitle">' + T + "</div></div></div>").join("")) + // Lights as cards by default, with a Cards | Table choice (Matt, 9 Nov)
    a("lights", '<div class="tfLightView"><div class="themeChoice" role="group" aria-label="Show lights as"><button class="wxLayoutBtn" type="button" data-light-view="cards">Cards</button><button class="wxLayoutBtn" type="button" data-light-view="table">Table</button></div></div><p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div><div class="tfLightCards" id="lightCards"></div>') + a("sources", '<div class="toggleList">' + J.map(([E, T, P]) => at(T, P, '<select class="settingsSelect" data-source="' + E + '" aria-label="' + T + '"></select>')).join("") + "</div>") + a("sums", '<div class="toggleList">' + Object.entries(jr).map(([E, T]) => at(T.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + E + '" aria-label="' + T.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const o = (E) => t.querySelector('[data-look-group="' + E + '"]'), i = (E) => E == null ? void 0 : E.closest(".toggleRow");
    [i(t.querySelector(".themeBtn"))].forEach((E) => E && o("look").appendChild(E));
    const l = i(p("densityToggle"));
    l && (l.hidden = !0), [i(p("moreInfoChoice")), i(p("namesChoice"))].forEach((E) => E && o("house").appendChild(E)), o("house").insertAdjacentHTML("beforeend", at("Lights", "How lights show on the house page.", et("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + at("Pad", "What the Dual Axis Controller’s pad sets on its tile.", et("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow")), [i(p("hoursChoice")), i(p("wxStyleChoice"))].forEach((E) => E && o("weather").appendChild(E));
    const c = p("housePane"), u = c.querySelector(".houseTabs"), f = u.querySelector(".rubberIndicator"), y = "homecore-light-view", _ = (E) => {
      c.classList.toggle("tfLightCardsOn", E === "cards"), c.querySelectorAll("[data-light-view]").forEach((T) => T.setAttribute("aria-pressed", String(T.dataset.lightView === E))), co.set(y, E);
    };
    _(co.get(y) === "table" ? "table" : "cards"), c.querySelector(".tfLightView").addEventListener("click", (E) => {
      const T = E.target.closest("[data-light-view]");
      T && _(T.dataset.lightView);
    }), new ResizeObserver(() => nt()).observe(c), (M = (R = document.fonts) == null ? void 0 : R.ready) == null || M.then(() => nt());
    const x = (E) => {
      const T = u.querySelector(".tab.active");
      f.style.transition = "none", E ? ts(f, f.offsetLeft, f.offsetWidth, T.offsetLeft, T.offsetWidth) : (f.style.left = T.offsetLeft + "px", f.style.width = T.offsetWidth + "px");
    };
    new ResizeObserver(() => x(!1)).observe(u), c.addEventListener("click", (E) => {
      const T = E.target.closest("[data-house-tab]");
      if (T) {
        u.querySelectorAll(".tab").forEach((B) => B.classList.toggle("active", B === T)), c.querySelectorAll(".houseTab").forEach((B) => B.classList.toggle("active", B.dataset.housePane === T.dataset.houseTab)), T.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), x(!0), nt();
        return;
      }
      const P = E.target.closest("[data-light-fav]");
      if (P) {
        la(P.dataset.lightFav);
        return;
      }
      const S = E.target.closest("[data-light-pick]");
      if (S) {
        const [B, rt] = S.dataset.lightPick.split("|"), Pt = { ...Kt[B] };
        S.dataset.v ? Pt[rt] = S.dataset.v : delete Pt[rt], Kt[B] = Pt, na(), [...Ye.keys()].filter((Et) => Et.endsWith(":" + rt)).forEach((Et) => Ye.delete(Et)), za();
        return;
      }
      const Y = E.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!Y || Y.disabled)) {
        if (Y.dataset.lights && (Kt.lights = Y.dataset.lights), Y.dataset.dacPad && (Kt.dacPad = Y.dataset.dacPad), (Y.dataset.lights || Y.dataset.dacPad) && (na(), Ye.clear()), Y.dataset.sumToggle) {
          const B = Y.dataset.sumToggle, rt = new Set(mt.hiddenSums || []);
          rt.has(B) ? rt.delete(B) : rt.add(B), mt = { ...mt, hiddenSums: [...rt] }, We();
        }
        za();
      }
    }), c.addEventListener("change", (E) => {
      const T = E.target;
      T.dataset.source && (mt = { ...mt, sources: { ...mt.sources || {}, [T.dataset.source]: T.value || void 0 } }, We());
      const P = T.dataset.lightStyle || T.dataset.lightPad;
      if (P) {
        const S = T.dataset.lightStyle ? "lightStyles" : "lightPads", Y = { ...Kt[S] };
        T.value ? Y[P] = T.value : delete Y[P], Kt[S] = Y, na(), [...Ye.keys()].filter((B) => B.endsWith(":" + P)).forEach((B) => Ye.delete(B));
      }
      za();
    });
  }
  function N() {
    var x, R;
    On() && Nn();
    const t = p("housePane");
    if (!t) return;
    const e = !!customElements.get(wa);
    t.querySelectorAll("[data-lights]").forEach((M) => M.setAttribute("aria-pressed", String(M.dataset.lights === Kt.lights))), p("lightsRow").querySelector(".status").textContent = e || !On() ? "How lights show on the house page." : Xo === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", t.querySelectorAll("[data-dac-pad]").forEach((M) => M.setAttribute("aria-pressed", String(M.dataset.dacPad === Kt.dacPad))), p("dacPadRow").hidden = !On();
    for (const M of t.querySelectorAll("[data-source]")) {
      if (M === n.activeElement) continue;
      const [E] = J.find(([P]) => P === M.dataset.source), T = Object.keys(k).filter(J.find(([P]) => P === E)[3]).sort((P, S) => bt(P).localeCompare(bt(S)));
      M.dataset.sig !== T.join(",") && (M.innerHTML = '<option value="">Automatic</option>' + T.map((P) => '<option value="' + q(P) + '">' + q(bt(P)) + "</option>").join(""), M.dataset.sig = T.join(",")), M.value = T.includes((x = mt.sources) == null ? void 0 : x[E]) ? mt.sources[E] : "";
    }
    t.querySelectorAll("[data-sum-toggle]").forEach((M) => {
      const E = !(mt.hiddenSums || []).includes(M.dataset.sumToggle);
      M.classList.toggle("on", E), M.setAttribute("aria-checked", String(E));
    });
    const a = p("lightRows"), o = p("lightCards"), i = n.activeElement, l = a != null && a.contains(i) || o != null && o.contains(i) ? i : null;
    if (!a || l != null && l.matches("select")) {
      nt();
      return;
    }
    const c = new Set(F()), u = (M, E, T, P) => '<option value="' + M + '"' + (M === T ? " selected" : "") + ">" + E + "</option>", f = Object.keys(k).filter((M) => M.startsWith("light.")).sort((M, E) => !Ct.get(M) - !Ct.get(E) || (Ct.get(M) || "").localeCompare(Ct.get(E) || "") || bt(M).localeCompare(bt(E))).map((M) => {
      const E = Kt.lightStyles[M] || "", T = Kt.lightPads[M] || "", P = c.has(M), S = q(bt(M));
      return "<tr><td><strong>" + S + "</strong></td><td>" + q(Ct.get(M) || "—") + "</td><td>" + q(Ee(M)) + '</td><td class="metaSwitchCol"><button class="switch' + (P ? " on" : "") + '" type="button" role="switch" aria-checked="' + P + '" data-light-fav="' + q(M) + '" aria-label="' + S + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + q(M) + '" aria-label="' + S + ' tile">' + u("", "Default", E) + u("tile", "HomeCore tile", E) + u("dac", "Dual Axis Controller", E) + '</select></td><td><select class="settingsSelect" data-light-pad="' + q(M) + '" aria-label="' + S + ' pad"' + (_a(M) ? "" : " disabled") + ">" + u("", "Default", T) + u("temperature", "Temperature", T) + u("colour", "Colour", T) + "</select></td></tr>";
    }).join(""), y = (M, E, T, P, S) => '<div class="themeChoice" role="group" aria-label="' + T + '">' + P.map(([Y, B]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Y === S) + '" data-light-pick="' + M + "|" + q(E) + '" data-v="' + Y + '">' + B + "</button>").join("") + "</div>", _ = Object.keys(k).filter((M) => M.startsWith("light.")).sort((M, E) => !Ct.get(M) - !Ct.get(E) || (Ct.get(M) || "").localeCompare(Ct.get(E) || "") || bt(M).localeCompare(bt(E))).map((M) => {
      const E = c.has(M), T = q(bt(M)), P = [Ct.get(M), Ee(M)].filter(Boolean).map(q).join(" · ");
      return '<div class="toggleList"><div class="toggleRow"><div><strong>' + T + '</strong><div class="status">' + P + "</div></div></div>" + at("Favourite", "", '<button class="switch' + (E ? " on" : "") + '" type="button" role="switch" aria-checked="' + E + '" data-light-fav="' + q(M) + '" aria-label="' + T + ' is a favourite"></button>') + at("Tile", "", y("lightStyles", M, T + " tile", [["", "Default"], ["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]], Kt.lightStyles[M] || "")) + (_a(M) ? at("Pad", "", y("lightPads", M, T + " pad", [["", "Default"], ["temperature", "Temperature"], ["colour", "Colour"]], Kt.lightPads[M] || "")) : "") + "</div>";
    }).join("");
    a.dataset.html !== f && (a.innerHTML = f, a.dataset.html = f), o.dataset.html !== _ && (o.innerHTML = _, o.dataset.html = _), l != null && l.dataset.lightFav && ((R = (o.contains(l) ? o : a).querySelector('[data-light-fav="' + CSS.escape(l.dataset.lightFav) + '"]')) == null || R.focus({ preventScroll: !0 })), nt();
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
          const _ = () => {
            c.innerHTML = l.map((R, M) => '<option value="' + M + '"' + (R.disabled ? " disabled" : "") + ">" + q(R.textContent) + "</option>").join("");
            const x = l.findIndex((R) => R.getAttribute("aria-pressed") === "true" || R.classList.contains("active"));
            x >= 0 && (c.value = String(x));
          };
          new MutationObserver(_).observe(i, { subtree: !0, attributes: !0, attributeFilter: ["aria-pressed", "class", "disabled"] }), _();
        }
        const u = (_) => {
          i.hidden !== !_ && (i.hidden = !_), c.hidden !== _ && (c.hidden = _);
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
        const y = l.every((_) => _.scrollWidth <= _.clientWidth + 1);
        i.hidden = f, u(y), c.dataset.fit = "1";
      }
  }
  const ct = document.createElement("div");
  ct.className = "densityBadge", ct.setAttribute("aria-live", "polite"), ct.hidden = !0, g.appendChild(ct);
  let wt = 0;
  function it() {
    if (!j) return;
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
    j && requestAnimationFrame(it);
  };
  function U() {
    var t;
    g.classList.toggle("showDensity", j), (t = p("densityToggle")) == null || t.classList.toggle("on", j), ct.hidden = !j, clearInterval(wt), j && (wt = setInterval(it, 1e3), it());
  }
  window.addEventListener("scroll", Z, { capture: !0, passive: !0 }), window.addEventListener("resize", Z, { passive: !0 });
  const H = n.querySelector("#homeView .grid"), yt = document.createElement("style");
  n.appendChild(yt);
  const Rt = new ResizeObserver(() => qt()), lt = /* @__PURE__ */ new Set(), G = (t) => {
    const e = t.getBoundingClientRect().height;
    return Math.abs(e - t.offsetHeight) < 1 ? e : t.offsetHeight;
  };
  function qt() {
    const t = g.classList.contains("tfAreaOpen") && !g.classList.contains("tfWeatherOpen");
    if (H.classList.toggle("tfStack", t), lt.forEach((f) => {
      (!t || !f.isConnected) && (Rt.unobserve(f), lt.delete(f));
    }), !t) {
      yt.textContent = "";
      return;
    }
    const e = getComputedStyle(H), a = parseFloat(e.columnGap) || 0, o = e.gridTemplateColumns.split(" ").length, i = [...H.children].filter((f) => f.dataset.k && f.offsetParent);
    yt.disabled = !0;
    const l = i.map((f) => {
      const y = getComputedStyle(f), _ = /span (\d+)/.exec(y.gridColumnStart + " " + y.gridColumnEnd);
      return Math.min(o, _ ? +_[1] : y.gridColumnEnd === "-1" ? o : 1);
    });
    yt.disabled = !1;
    let c = 0;
    const u = i.map((f, y) => {
      lt.has(f) || (lt.add(f), Rt.observe(f));
      const _ = l[y];
      c + _ > o && (c = 0);
      const x = c + 1;
      return c = (c + _) % o, '#homeView .grid.tfStack>[data-k="' + CSS.escape(f.dataset.k) + '"]{grid-column:' + x + " / span " + _ + ";grid-row-end:span " + Math.max(1, Math.ceil(G(f) + a)) + "}";
    }).join(`
`);
    yt.textContent !== u && (yt.textContent = u);
  }
  new MutationObserver(qt).observe(H, { childList: !0 }), new MutationObserver(qt).observe(g, { attributes: !0, attributeFilter: ["class"] });
  let V = null, Q = null, A = null;
  const ut = /* @__PURE__ */ new Map(), ot = /* @__PURE__ */ new Map(), st = /* @__PURE__ */ new Map(), xt = 6;
  let ht = null;
  const kt = /* @__PURE__ */ new Map(), Ft = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Map();
  let mt = { favourites: null }, $e = {}, ho = {}, ln = [], qo = null;
  const Ka = (() => {
    try {
      return JSON.parse(co.get(kp)) || {};
    } catch {
      return {};
    }
  })();
  let Ct = /* @__PURE__ */ new Map(), Ae = 0;
  function We() {
    clearTimeout(Ae), Ae = setTimeout(() => Promise.resolve(L({ type: "frontend/set_user_data", key: xp, value: mt })).catch(() => {
    }), 400);
  }
  const Kt = (() => {
    let t = {};
    try {
      t = JSON.parse(co.get(Mp)) || {};
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
  })(), na = () => co.set(Mp, JSON.stringify(Kt)), cr = () => {
    g.dataset.more = Kt.more, g.dataset.names = Kt.names, rl();
  };
  w && z && !p("moreInfoChoice") && (p("densityToggle").closest(".toggleRow").insertAdjacentHTML(
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
    e && (Kt.hoursWindow = e.dataset.hoursWindow, na(), xe == null || xe.refresh(), p("hoursChoice").querySelectorAll("[data-hours-window]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  }), p("hoursChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Weather art</strong><div class="status">How the weather and the sky are drawn.</div></div><div class="themeChoice" id="wxStyleChoice" role="group" aria-label="Weather art">' + R0.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Kt.wxStyle === t) + '" data-wx-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), p("wxStyleChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-wx-style]");
    e && (Kt.wxStyle = e.dataset.wxStyle, na(), xe == null || xe.setStyle(Kt.wxStyle), ke == null || ke.forEach((a) => a.setStyle(Kt.wxStyle)), p("wxStyleChoice").querySelectorAll("[data-wx-style]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  })), X();
  let Vt = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const Ma = /* @__PURE__ */ new Map();
  let Yr = "";
  const Zr = w ? ch({ onChange: () => Be() }) : null;
  w && g.classList.add("house");
  const Sa = Object.assign(document.createElement("div"), { className: "tfBento" });
  let xe = null, Kr = null, cn = !1;
  function Xr(t) {
    const e = Wt();
    if (g.classList.toggle("houseBento", !!e), xe && (Kr !== e || t == null) && (xe.destroy(), xe = null), !e || t == null) {
      Sa.remove();
      return;
    }
    Sa.isConnected || H.append(Sa), Sa.style.order = t, !xe && !cn && (xe = np(Sa, { getHass: d, entityId: e, style: Kt.wxStyle, hoursWindow: () => Kt.hoursWindow, radarSource: fr }), Kr = e);
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
  ], pr = dr.map(([t]) => t), Wo = ["aq", "pollen", "radar", "hourly", "sun", "moon", "uv", "humidity", "pressure", "wind", "visibility"], ss = { hourly: 2 }, Xa = Object.fromEntries(dr.map(([t]) => [t, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + t })]));
  let ke = null, ur = null;
  function $r(t) {
    const e = Wt();
    ke && ur !== e && (ke.forEach((a) => a.destroy()), ke = null), Object.values(Xa).forEach((a) => e ? !a.isConnected && H.append(a) : a.remove()), e && !ke && !cn && (ke = /* @__PURE__ */ new Map(), ur = e), Qr();
  }
  const fr = () => {
    var t;
    return ((t = re().opts.radar) == null ? void 0 : t.source) || "rainviewer";
  }, Jr = () => [["rainviewer", "RainViewer"], ...Object.values(k).filter((t) => t.entity_id.startsWith("camera.")).sort((t, e) => bt(t.entity_id).localeCompare(bt(e.entity_id))).map((t) => ["camera:" + t.entity_id, bt(t.entity_id)])];
  function Qr() {
    if (!ke || cn) return;
    const t = new Set(re().hidden);
    dr.forEach(([e, a]) => {
      ke.has(e) || t.has(e) && !(Qt != null && Qt.fromTray && Qt.key === e) || ke.set(e, np(Xa[e], { getHass: d, entityId: ur, style: Kt.wxStyle, cards: a, onOpen: e === "wx" ? () => Zc("weather") : void 0, radarSource: fr }));
    });
  }
  const Gt = (t) => {
    var e;
    return ((e = k[t]) == null ? void 0 : e.attributes) || {};
  }, bt = (t) => Gt(t).friendly_name || t, ue = (t, e) => Ya(t) || (Number(Gt(t).supported_features) & e) === e, jt = (t) => {
    const e = String(t ?? "").replace(/_/g, " ");
    return e.charAt(0).toUpperCase() + e.slice(1);
  }, De = (t, e = 1) => Number(t).toLocaleString(void 0, { minimumFractionDigits: e, maximumFractionDigits: e }), $a = (t) => (t == null ? void 0 : t.state) === "on" ? t.attributes.brightness != null ? Math.max(1, Math.round(t.attributes.brightness / 2.55)) : 100 : 0, Ja = (t) => Gt(t).supported_color_modes || [], ls = (t, e) => [5, 3, 1].map((a) => {
    const o = (a + t / 60) % 6;
    return 255 * (1 - e / 100 * Math.max(0, Math.min(o, 4 - o, 1)));
  }), hr = (t) => (t /= 255, t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)), ti = (t) => 0.2126 * hr(t[0]) + 0.7152 * hr(t[1]) + 0.0722 * hr(t[2]), cs = (t, e) => {
    const a = ti(t), o = ti(e);
    return (Math.max(a, o) + 0.05) / (Math.min(a, o) + 0.05);
  }, ds = 0.55, jo = ["hs", "xy", "rgb", "rgbw", "rgbww"], ei = (t) => {
    const e = Gt(t), a = jo.includes(e.color_mode);
    return (a && e.rgb_color ? e.rgb_color : a && e.hs_color ? ls(...e.hs_color) : [255, 170, 0]).map((o) => Math.round(Math.max(0, Math.min(255, o))));
  }, ps = { heat: [255, 111, 34], cool: [33, 150, 243], heat_cool: [255, 193, 7], auto: [76, 175, 80], dry: [255, 152, 0], fan_only: [0, 188, 212] };
  function dn(t) {
    var o;
    const e = t.split(".")[0], a = (o = k[t]) == null ? void 0 : o.state;
    return !a || a === "unavailable" || a === "unknown" ? null : e === "light" ? a === "on" ? ei(t) : null : e === "climate" ? ps[a] || null : e === "cover" ? a !== "closed" ? [146, 107, 199] : null : e === "lock" ? a !== "locked" ? [244, 67, 54] : null : e === "media_player" ? ["playing", "paused", "on", "buffering"].includes(a) ? [3, 169, 244] : null : e === "humidifier" || e === "valve" ? ["on", "open", "opening", "closing"].includes(a) ? [33, 150, 243] : null : e === "vacuum" ? ["cleaning", "returning"].includes(a) ? [0, 150, 136] : null : e === "alarm_control_panel" ? a !== "disarmed" && a !== "triggered" ? [76, 175, 80] : null : e === "fan" ? a === "on" ? [0, 188, 212] : null : (e === "switch" || e === "input_boolean") && a === "on" ? [255, 193, 7] : null;
  }
  function mr(t, e, a = !1) {
    const [o, i, l] = t.map((E) => E / 255), c = Math.max(o, i, l), u = Math.min(o, i, l), f = c - u, y = f ? (c === o ? (i - l) / f + (i < l ? 6 : 0) : c === i ? (l - o) / f + 2 : (o - i) / f + 4) * 60 : 0, _ = (c + u) / 2, x = f ? f / (1 - Math.abs(2 * _ - 1)) : 0, R = f < 0.1 ? Math.min(x, 0.25) : 1, M = (E) => {
      const T = (S) => (S + y / 30) % 12, P = R * Math.min(E, 1 - E);
      return [0, 8, 4].map((S) => Math.round(255 * (E - P * Math.max(-1, Math.min(T(S) - 3, 9 - T(S), 1)))));
    };
    for (let E = 0.5; a ? E < 0.96 : E > 0.04; E += a ? 0.01 : -0.01) {
      const T = M(E);
      if (cs(T, e) >= 3) return "rgb(" + T.join(",") + ")";
    }
    return a ? "#ffffff" : "#26221e";
  }
  const Pn = (t) => {
    const e = [1, 3, 5].map((a) => parseInt(t.slice(a, a + 2), 16));
    return Math.max(...e) - Math.min(...e) < 26 ? "" : ";--sum-d:" + mr(e, [58, 58, 58], !0) + ";--sum-l:" + mr(e, [230, 230, 230]);
  }, ai = { d: ["#ffb894", "#d2b4ff", "#9dcbff"], l: ["#f0946a", "#b48ae6", "#6fa8e8"] }, us = () => [0, 1, 2].map((t) => "--g" + t + "-d:" + ai.d[t] + ";--g" + t + "-l:" + ai.l[t]).join(";"), fs = '<svg class="tfGradDefs" aria-hidden="true" focusable="false"><defs><linearGradient id="hcClimateGrad" x1="0" y1="0" x2="0" y2="1">' + [0.15, 0.5, 0.85].map((t, e) => '<stop offset="' + t + '" style="stop-color:var(--g' + e + ')"/>').join("") + "</linearGradient></defs></svg>", mo = (t) => {
    const e = t.map((a) => Math.round(a + (255 - a) * ds));
    return "--light-soft:rgb(" + e.join(",") + ");--light-ink:" + mr(t, e);
  }, hs = (t) => mo(ei(t)), Vo = (t) => {
    const e = dn(t);
    return e ? ' data-light style="' + mo(e) + '"' : "";
  }, Ue = (t) => {
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
    return Gt(t).current_position ?? (((e = k[t]) == null ? void 0 : e.state) === "closed" ? 0 : 100);
  }, Uo = (t) => {
    var e;
    return je("pos", t, ((e = kt.get(t)) == null ? void 0 : e.pos) ?? ma(t));
  }, gr = (t) => {
    var e;
    return je("tilt", t, ((e = kt.get(t)) == null ? void 0 : e.tilt) ?? Gt(t).current_tilt_position);
  };
  function Ee(t) {
    var c;
    const e = k[t];
    if (!e) return "Not found";
    if (e.state === "unavailable") return "Unavailable";
    const a = e.attributes, o = t.split(".")[0];
    if (o === "light") {
      if (e.state !== "on") return "Off";
      const u = a.color_temp_kelvin;
      return (Ue(t) ? $a(e) + "%" : "On") + (a.color_mode === "color_temp" && u ? " · " + Number(u).toLocaleString() + "k" : jo.includes(a.color_mode) ? " · Colour" : "");
    }
    if (o === "climate") return (e.state === "off" ? "Off" : jt(a.hvac_action || e.state)) + " · " + De(a.current_temperature) + " °C now";
    if (o === "cover") {
      const u = ma(t), f = a.current_tilt_position;
      return e.state === "opening" || e.state === "closing" ? jt(e.state) + " - " + u + "%" : (u <= 0 ? "Closed" : u >= 100 ? "Open" : "Partially open") + (f > 0 && f < 100 ? " · tilted" : "");
    }
    if (o === "humidifier") return e.state !== "on" ? "Off" : jt(a.action || "on") + " · " + a.current_humidity + "% now";
    if (o === "vacuum") return jt(e.state) + (e.state === "cleaning" && ((c = a.rooms) != null && c.length) ? " · " + a.rooms.join(", ") : "") + (a.battery_level != null ? " · " + a.battery_level + "%" : "");
    if (o === "media_player") return e.state === "playing" || e.state === "paused" ? (e.state === "paused" ? "Paused · " : "") + (a.media_title || "Playing") : jt(e.state);
    if (o === "alarm_control_panel") return Lp[e.state] || jt(e.state);
    if (o === "lock" || o === "valve") return jt(e.state);
    if (o === "switch") return e.state === "on" ? "On" : "Off";
    if (o === "plant") return e.state === "ok" ? "Healthy" : jt(a.problem);
    if (o === "binary_sensor")
      return a.device_class === "battery" ? e.state === "on" ? "Low" : "Normal" : a.device_class === "problem" ? e.state === "on" ? "Problem" : "OK" : a.device_class === "moisture" ? e.state === "on" ? "Wet" : "Dry" : $i.includes(a.device_class) ? e.state === "on" ? "Open" : "Closed" : e.state === "on" ? "Detected" : "Clear";
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
  const Yo = (t) => t >= 1e3 ? De(t / 1e3, 2) + " kW" : Math.round(t).toLocaleString() + " W";
  function Qa(t) {
    var a, o;
    const e = d();
    t.querySelectorAll("[data-icon-for]").forEach((i) => {
      var u;
      const l = k[i.dataset.iconFor], c = i.dataset.iconName || "";
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
    oi.set(e, o), !(!i || i.backgroundColor === o.backgroundColor && i.color === o.color || (u = window.matchMedia) != null && u.call(window, "(prefers-reduced-motion: reduce)").matches) && t.animate([i, o], { duration: _e.warp.cdur, delay: _e.warp.cdelay, easing: Ce[_e.warp.ease], fill: "backwards" });
  }
  const ms = "[data-icon-for]>:is(ha-state-icon,ha-icon),.tfIcon>svg", gs = (t) => {
    const e = [t];
    for (; e.length; ) {
      const a = e.shift();
      if (a.localName === "svg") return a;
      a.shadowRoot && e.push(...a.shadowRoot.children), e.push(...a.children);
    }
    return null;
  };
  function bs(t) {
    var M, E, T;
    const e = t.localName === "svg" ? t : gs(t), a = e ? [...e.querySelectorAll("path,rect,circle,ellipse,polygon,polyline,line")] : [];
    if (!a.length) return !e;
    const o = (M = t.closest(".tfIcon")) == null ? void 0 : M.offsetWidth;
    if (o === void 0) return !0;
    if (!o) return !1;
    const i = o + "|" + a.map((P) => P.getAttribute("d") || P.localName).join("|");
    if (t.dataset.fitted === i) return !0;
    let l = 1 / 0, c = 1 / 0, u = -1 / 0, f = -1 / 0;
    for (const P of a) {
      const S = P.getBBox(), Y = getComputedStyle(P), B = Y.stroke !== "none" ? (parseFloat(Y.strokeWidth) || 0) / 2 : 0;
      !S.width && !S.height || (l = Math.min(l, S.x - B), c = Math.min(c, S.y - B), u = Math.max(u, S.x + S.width + B), f = Math.max(f, S.y + S.height + B));
    }
    if (!(u > l)) return !1;
    const y = (T = (E = e.viewBox) == null ? void 0 : E.baseVal) != null && T.width ? e.viewBox.baseVal : { x: 0, y: 0, width: 24, height: 24 }, _ = o > 40 ? o * (26 / 40) : o - 14, x = _ * y.width / Math.max(u - l, f - c), R = x / y.width;
    return t.localName === "svg" ? (t.style.width = x + "px", t.style.height = x + "px") : t.style.setProperty("--mdc-icon-size", x + "px"), e.style.translate = ((y.x + y.width / 2 - (l + u) / 2) * R).toFixed(2) + "px " + ((y.y + y.height / 2 - (c + f) / 2) * R).toFixed(2) + "px", t.dataset.fitted = i, !0;
  }
  let Hn = 0;
  function ri(t = 0) {
    clearTimeout(Hn), [...n.querySelectorAll(ms)].filter((a) => !bs(a)).length && t < 5 && (Hn = setTimeout(() => ri(t + 1), 300));
  }
  function br() {
    clearTimeout(Hn), Hn = setTimeout(() => ri(), 60);
  }
  const pn = (t) => {
    var e, a, o;
    return t.startsWith("light.") && k[t] && !Gt(t).icon && !((o = (a = (e = d()) == null ? void 0 : e.entities) == null ? void 0 : a[t]) != null && o.icon) ? "mdi:lightbulb" : "";
  }, be = (t, e, a) => (e = e || pn(t), ' data-icon-for="' + q(t) + '"' + (e ? ' data-icon-name="' + q(e) + '"' : "") + (a ? ' data-letter="' + q(a) + '"' : "")), ga = (t) => t.endsWith("_solar_power") ? "mdi:solar-power-variant" : Gt(t).rang ? "mdi:doorbell" : "", Dt = (t, e, a, o) => q([t, e, a, o ? JSON.stringify(o) : ""].join("|")), go = (t) => q(JSON.stringify(t));
  function Zo(t) {
    const e = q(bt(t) + ", " + Ee(t));
    return '<div class="activityRow tap" role="button" tabindex="0" data-more="' + q(t) + '" aria-label="' + e + '. More info"><div class="tfIcon" aria-hidden="true"' + be(t, ga(t)) + '></div><div><div class="activityRowName">' + q(bt(t)) + '</div><div class="activityRowMeta">' + q(Ee(t)) + "</div></div></div>";
  }
  const wr = (t, e, a) => '<div class="activityRow" aria-label="' + q(t + ", " + e) + '"><div class="tfIcon" aria-hidden="true"' + be("", a, t) + '></div><div><div class="activityRowName">' + q(t) + '</div><div class="activityRowMeta">' + q(e) + "</div></div></div>";
  function bo(t, e, a, o, i = "", l = null, c = "") {
    return '<section class="card tfCard' + (c ? " " + c : "") + '" data-tf data-k="' + q(t) + '" style="order:' + e + '" aria-label="' + q(a) + '"><div class="activityHeader">' + (l ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + q(l) + '" aria-label="' + q(a + (k[l] ? ", " + Ee(l) : "") + ". More info") + '">' + q(a) + "</button>" : '<div class="activityTitle">' + q(a) + "</div>") + '</div><div class="activityRows">' + o.join("") + "</div>" + i + "</section>";
  }
  function ii(t, e) {
    const a = "readings:" + t.id, o = t.readings.map((i) => Zo(i));
    return t.power != null && o.push(wr("Power now", Yo(t.power), "mdi:flash")), bo(a, e, "Readings", o);
  }
  function Ko(t, e) {
    var u;
    const a = "energy:" + t.id, [o, i] = [t.solar.find((f) => f.endsWith("_power")), t.solar.find((f) => f.endsWith("_today"))], l = [o, i].filter(Boolean).map((f) => Zo(f)), c = Number(((u = k[o]) == null ? void 0 : u.state) || 0) * 1e3;
    return Vt.grid && (l.push(Zo(Vt.grid)), l.push(wr("House use", Yo(c + Number(k[Vt.grid].state)), "mdi:home-lightning-bolt"))), bo(a, e, "Energy", l, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
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
  }, ba = (t, e, a, o) => '<div class="tfStep" role="group" aria-label="' + q(t) + '"><button type="button" data-act="' + a + '" aria-label="Lower ' + q(t.toLowerCase()) + '">' + pp.down + "</button><output>" + q(e) + '</output><button type="button" data-act="' + o + '" aria-label="Raise ' + q(t.toLowerCase()) + '">' + pp.up + "</button></div>", ia = (t, e, a) => '<div class="' + t + '" role="group" aria-label="' + q(e) + '">' + a.filter(Boolean).map((o) => '<button type="button" data-act="' + o.act + '"' + (o.pressed != null ? ' aria-pressed="' + o.pressed + '"' : "") + (o.disabled ? " disabled" : "") + (o.aria ? ' aria-label="' + q(o.aria) + '"' : "") + ">" + (o.html || q(o.label)) + "</button>").join("") + "</div>", li = (t, e) => "width:" + Math.round(Math.max(0, Math.min(1, (t - e * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * e / 3).toFixed(2), ci = (t) => "left:calc(4px + " + t / 100 + " * (100% - 8px))", Re = (t, e) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + q(bt(t)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(e) + '" aria-valuetext="' + Math.round(e) + '% open" data-blocks="' + q(t) + '">' + [0, 1, 2, 3].map((a) => '<span><i style="' + li(e, a) + '"></i><b' + (e >= (a + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (a + 1) * 25 + "<small>%</small></b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + ci(e) + '">' + Math.round(e) + "%</output></div>";
  function mn(t, e) {
    t.querySelectorAll(":scope>span").forEach((o, i) => {
      o.firstElementChild.setAttribute("style", li(e, i)), o.lastElementChild.classList.toggle("lit", e >= (i + 1) * 25 - 12);
    });
    const a = t.querySelector(".tfTip");
    a.setAttribute("style", ci(e)), a.textContent = Math.round(e) + "%", t.setAttribute("aria-valuenow", String(Math.round(e))), t.setAttribute("aria-valuetext", Math.round(e) + "% open");
  }
  const di = (t, e) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + q(bt(t)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(e) + '" aria-valuetext="' + Math.round(e) + '% open" data-drag="tilt|' + q(t) + '"><i style="width:calc((100% - 8px) * ' + e / 100 + ')"></i><span' + (e > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (e > 92 ? ' class="lit"' : "") + ">Open</span></div>", vr = (t, e, a) => '<div class="tfSeg tfCoverBtns" role="group" aria-label="' + q(bt(t)) + '">' + [
    ue(t, gp) && ["open", "Open", "open_cover", e >= 100 && !a],
    ue(t, wp) && ["stop", "Stop", "stop_cover", !1],
    ue(t, bp) && ["close", "Close", "close_cover", e <= 0 && !a]
  ].filter(Boolean).map(([o, i, l, c]) => '<button type="button" data-act="' + Dt("cover", l, t) + '" aria-label="' + i + '"' + (c ? " disabled" : "") + ">" + A0[o] + "</button>").join("") + "</div>", eo = (t, e) => '<button class="tfIcon' + (e.art ? " art" : "") + '" type="button" data-act="' + e.button.act + '" aria-label="' + q(e.button.label) + '"' + (e.art ? ' style="background-image:url(&quot;' + q(e.art) + '&quot;)"' : be(t, e.icon)) + "></button>", pi = (t) => '<button class="tfName" type="button" data-more="' + q(t) + '" aria-label="' + q(bt(t) + ", " + Ee(t) + ". More info") + '"><span class="activityRowName">' + q(bt(t)) + '</span><span class="activityRowMeta">' + q(Ee(t)) + "</span></button>";
  function yr(t, e = !1, a = null) {
    const o = sa(t), i = t.startsWith("light.") && gn(t) && !(a && Vn(t) < 3), l = a || (e && t.startsWith("light.") ? ["bright"] : null), c = i ? ['<div class="tfDacPad" data-dac="' + (e ? "more:" : a ? "dash:" : "tile:") + q(t) + '"></div>'] : o.sections.map((u, f) => u && (!l || l.includes((o.parts || [])[f])) ? u : "").filter(Boolean);
    return '<div class="tfAction' + (i ? " tfDac" : "") + (o.on ? " on" : "") + (!i && !c.length ? " tfHeadOnly" : "") + '" data-k="' + q(t) + '"' + (o.tone ? ' data-tone="' + o.tone + '"' : "") + Vo(t) + '><div class="tfActionHead">' + eo(t, o) + pi(t) + "</div>" + c.join("") + "</div>";
  }
  const wa = "dual-controller-v3", ui = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.5/dist/dual-axis-controller-v4.js";
  let Xo = null;
  async function Nn() {
    if (Xo || customElements.get(wa)) return;
    Xo = "loading";
    const t = await Promise.resolve().then(() => L({ type: "lovelace/resources" })).catch(() => null), e = Array.isArray(t) && t.some((o) => /dual-axis-controller/i.test(o.url || ""));
    if (await Promise.race([customElements.whenDefined(wa), new Promise((o) => setTimeout(o, e ? 8e3 : 0))]), customElements.get(wa)) return;
    const a = Object.assign(document.createElement("script"), { src: ui });
    a.onerror = () => {
      Xo = "failed", N();
    }, document.head.appendChild(a);
  }
  const Ye = /* @__PURE__ */ new Map(), _a = (t) => (Kt.lightStyles[t] || Kt.lights) === "dac", On = () => Kt.lights === "dac" || Object.values(Kt.lightStyles).includes("dac");
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
  }, hi = "ha-card,.hc.hcTile{padding:0!important;border:0!important;border-radius:0!important;background:none!important;box-shadow:none!important}.hcTileHead{display:none!important}.hc--dark{--hc-text:var(--color-text-primary,#f1f1f1)}.halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,198px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}.hc.hcTile{max-width:var(--tf-dac-max,280px)!important}", ws = (t) => {
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
      o.hass = bn(), o.parentNode !== e && e.replaceChildren(o), !o.offsetHeight && Ca.has(a) && (e.style.minHeight = Ca.get(a) + "px"), Fa.observe(o), ws(o);
    });
  }
  function mi() {
    const t = bn();
    Ye.forEach((e, a) => {
      e.isConnected ? e.hass = t : Ye.delete(a);
    });
  }
  customElements.whenDefined(wa).then(() => {
    w && (H != null && H.querySelector("[data-tf]")) && Xc(za);
  });
  const je = (t, e, a) => st.has(t + "|" + e) ? st.get(t + "|" + e) : a;
  function sa(t) {
    var l, c;
    const e = k[t], a = e.attributes, o = t.split(".")[0], i = (u, f) => ({ act: Dt(u, "toggle", t), label: f });
    if (o === "light") {
      const u = e.state === "on", f = Ja(t), [y, _] = zo(t), x = je("bright", t, $a(e));
      u && to(t, $a(e));
      const R = je("ct", t, u && a.color_mode === "color_temp" ? a.color_temp_kelvin : null), M = je("hue", t, u && jo.includes(a.color_mode) && a.hs_color ? a.hs_color[0] : null);
      return { on: u, button: i("light", "Turn " + bt(t) + (u ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        Ue(t) && un("bright", t, x / 100, bt(t) + " brightness", x + "%", !1, u ? null : ra[t] ?? null),
        f.includes("color_temp") && un("ct", t, R == null ? null : (R - y) / (_ - y), bt(t) + " warm to cool", R == null ? "" : Math.round(R) + " kelvin", !0),
        f.some((E) => jo.includes(E)) && un("hue", t, M == null ? null : M / 360, bt(t) + " colour", "", !0)
      ] };
    }
    if (o === "climate") {
      const u = a.target_temp_step || 0.5, f = Number(a.temperature);
      return { on: e.state !== "off", tone: e.state === "cool" || a.hvac_action === "cooling" ? "cool" : "heat", button: i("climate", "Turn " + bt(t) + (e.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(f) && ba("Target temperature", De(f) + " °C", Dt("climate", "set_temperature", t, { temperature: f - u }), Dt("climate", "set_temperature", t, { temperature: f + u })),
        ia("tfSeg", "Mode", (a.hvac_modes || []).map((y) => ({ label: jt(y), act: Dt("climate", "set_hvac_mode", t, { hvac_mode: y }), pressed: e.state === y })))
      ] };
    }
    if (o === "cover") {
      const u = e.state === "opening" || e.state === "closing", f = e.state === "closed", y = Uo(t), _ = gr(t);
      return { on: !f, tone: "blue", icon: vp[Fl(e)][f ? 1 : 0], button: i("cover", (f ? "Open " : "Close ") + bt(t)), parts: ["blocks", "tilt", "buttons"], sections: [
        ue(t, Wl) && Re(t, y),
        _ != null && di(t, _),
        vr(t, y, u)
      ] };
    }
    if (o === "humidifier") {
      const u = Number(a.humidity);
      return { on: e.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: i("humidifier", "Turn " + bt(t) + (e.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(u) && ba("Target humidity", u + "%", Dt("humidifier", "set_humidity", t, { humidity: u - 1 }), Dt("humidifier", "set_humidity", t, { humidity: u + 1 })),
        ((l = a.available_modes) == null ? void 0 : l.length) && ia("tfSeg", "Mode", a.available_modes.map((f) => ({ label: jt(f), act: Dt("humidifier", "set_mode", t, { mode: f }), pressed: a.mode === f })))
      ] };
    }
    if (o === "media_player") {
      const u = e.state === "playing", f = e.state === "off" || e.state === "standby", y = je("vol", t, a.volume_level), _ = f ? { act: Dt("media_player", ue(t, _0) ? "turn_on" : "toggle", t), label: "Turn " + bt(t) + " on" } : e.state === "playing" || e.state === "paused" ? { act: Dt("media_player", "media_play_pause", t), label: (u ? "Pause " : "Play ") + bt(t) } : { act: Dt("media_player", ue(t, C0) ? "turn_off" : "toggle", t), label: "Turn " + bt(t) + " off" };
      return { on: !f, tone: "blue", art: !f && a.entity_picture ? a.entity_picture : null, button: _, parts: ["playback", "volume"], sections: f ? [] : [
        (ue(t, fp) || ue(t, hp) || ue(t, up) || ue(t, mp)) && ia("tfSeg", "Playback", [
          { html: Zi.prev, aria: "Previous", act: Dt("media_player", "media_previous_track", t), disabled: !ue(t, fp) },
          { html: u ? Zi.pause : Zi.play, aria: u ? "Pause" : "Play", act: Dt("media_player", "media_play_pause", t), disabled: !(ue(t, up) || ue(t, mp)) },
          { html: Zi.next, aria: "Next", act: Dt("media_player", "media_next_track", t), disabled: !ue(t, hp) }
        ]),
        ue(t, S0) && y != null && un("vol", t, y, bt(t) + " volume", Math.round(y * 100) + "%")
      ] };
    }
    if (o === "vacuum") {
      const u = e.state === "cleaning", f = a.rooms || [], y = (x) => f.includes(x) ? f.filter((R) => R !== x) : f.concat(x), _ = Dt("vacuum", u ? "pause" : "start", t, Ya(t) ? { rooms: f } : null);
      return { on: u || e.state === "returning", tone: "blue", button: { act: _, label: (u ? "Pause " : "Start ") + bt(t) }, parts: ["controls", "rooms"], sections: [
        ia("tfSeg", bt(t), [
          { label: u ? "Pause" : "Start", act: _ },
          { label: "Dock", act: Dt("vacuum", "return_to_base", t), disabled: e.state === "docked" },
          { label: "Locate", act: Dt("vacuum", "locate", t) }
        ]),
        Ya(t) && ia("tfChips", "Rooms to clean", Vt.rooms.filter((x) => x.id !== "balcony").map((x) => ({ label: x.name, act: Dt("vacuum", "set_rooms", t, { rooms: y(x.name) }), pressed: f.includes(x.name) })))
      ] };
    }
    if (o === "lock") {
      const u = e.state === "locked";
      return { on: !u, tone: "heat", button: { act: Dt("lock", u ? "unlock" : "lock", t), label: (u ? "Unlock " : "Lock ") + bt(t) }, parts: ["controls"], sections: [
        ia("tfSeg", bt(t), [
          { label: "Lock", act: Dt("lock", "lock", t), pressed: u },
          { label: "Unlock", act: Dt("lock", "unlock", t), pressed: e.state === "unlocked" },
          ue(t, Ap) && { label: "Open", act: Dt("lock", "open", t), pressed: e.state === "open" }
        ])
      ] };
    }
    if (o === "alarm_control_panel") {
      const u = e.state === "disarmed";
      return { on: !u, tone: e.state === "triggered" ? "alarm" : "blue", button: { act: Dt("alarm_control_panel", u ? "alarm_arm_away" : "alarm_disarm", t), label: u ? "Arm " + bt(t) + ", away" : "Disarm " + bt(t) }, parts: ["controls"], sections: [
        ia("tfSeg", bt(t), Tp.filter(([, , , f]) => !f || ue(t, f)).map(([f, y, _]) => ({ label: y, act: Dt("alarm_control_panel", _, t), pressed: e.state === f })))
      ] };
    }
    if (o === "valve") {
      const u = e.state === "open";
      return { on: u, tone: "blue", icon: "mdi:sprinkler-variant", button: i("valve", (u ? "Close " : "Open ") + bt(t)), parts: ["controls"], sections: [
        ia("tfSeg", bt(t), [
          { label: "Open", act: Dt("valve", "open_valve", t), pressed: u },
          { label: "Close", act: Dt("valve", "close_valve", t), pressed: !u }
        ])
      ] };
    }
    if (o === "water_heater") {
      const u = Number(a.temperature), f = a.target_temp_step || 1, y = e.state !== "off";
      return { on: y, tone: "heat", icon: "mdi:water-boiler", button: { act: Dt("water_heater", y ? "turn_off" : "turn_on", t), label: "Turn " + bt(t) + (y ? " off" : " on") }, parts: ["step", "modes"], sections: [
        Number.isFinite(u) && ba("Target temperature", u + " °C", Dt("water_heater", "set_temperature", t, { temperature: u - f }), Dt("water_heater", "set_temperature", t, { temperature: u + f })),
        ((c = a.operation_list) == null ? void 0 : c.length) && ia("tfSeg", "Mode", a.operation_list.map((_) => ({ label: jt(_), act: Dt("water_heater", "set_operation_mode", t, { operation_mode: _ }), pressed: (a.operation_mode || e.state) === _ })))
      ] };
    }
    if (Vr.includes(o)) {
      const u = e.state === "on";
      return { on: u, button: i(o, "Turn " + bt(t) + (u ? " off" : " on")), parts: [], sections: [] };
    }
    return { on: !1, button: { act: "", label: bt(t) }, sections: [] };
  }
  const Aa = (t) => (Number.isInteger(Number(t)) ? String(Number(t)) : De(t)) + "°";
  function $o(t) {
    var P;
    const e = (S) => t.readings.find((Y) => Gt(Y).device_class === S), a = e("temperature"), o = e("humidity"), i = (S) => {
      var Y;
      return Number((Y = k[S]) == null ? void 0 : Y.state);
    }, l = (S) => t.actions.filter((Y) => S.test(Y)), c = t.lights.filter((S) => {
      var Y;
      return ((Y = k[S]) == null ? void 0 : Y.state) === "on";
    }), u = l(/^cover\./), f = u.filter((S) => {
      var Y;
      return ((Y = k[S]) == null ? void 0 : Y.state) !== "closed";
    }), y = [...new Set(u.map((S) => Fl(k[S])))], _ = l(/^climate\./)[0], x = l(/^humidifier\./)[0], R = l(/^media_player\./), M = R.find((S) => {
      var Y;
      return ((Y = k[S]) == null ? void 0 : Y.state) === "playing";
    }) || R.find((S) => {
      var Y;
      return ((Y = k[S]) == null ? void 0 : Y.state) === "paused";
    }), E = t.plugs.filter((S) => {
      var Y;
      return ((Y = k[S]) == null ? void 0 : Y.state) === "on";
    }), T = [];
    if (a && Number.isFinite(i(a)) && T.push({ key: "temp", id: a, kind: "reading", icon: po(a), label: "Temperature", value: De(i(a)) + "°" }), o && Number.isFinite(i(o)) && T.push({ key: "hum", id: o, kind: "reading", icon: po(o), label: "Humidity", value: Math.round(i(o)) + "%" }), t.lights.length && T.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: po("", "mdi:lightbulb"),
      label: "Lights",
      value: c.length ? c.length + " of " + t.lights.length + " on" : "All off",
      short: c.length ? c.length + " on" : "Off",
      on: c.length > 0,
      light: c.length ? hs(c[0]) : "",
      acts: t.lights.map((S) => ["light", c.length ? "turn_off" : "turn_on", S]),
      aria: (c.length ? "Turn off" : "Turn on") + " the lights in " + t.name
    }), u.length) {
      const S = y.length === 1 ? T0[y[0]] : "covers", Y = Math.round(u.reduce((B, rt) => B + ma(rt), 0) / u.length);
      T.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        light: f.length ? mo([146, 107, 199]) : "",
        icon: po("", ((P = vp[y[0]]) == null ? void 0 : P[f.length ? 0 : 1]) || "mdi:window-shutter"),
        label: jt(S),
        value: Y <= 0 ? "Closed" : Y >= 100 ? "Open" : Y + "% open",
        short: Y <= 0 ? "Closed" : Y + "%",
        on: f.length > 0,
        acts: u.map((B) => ["cover", f.length ? "close_cover" : "open_cover", B]),
        aria: (f.length ? "Close the " : "Open the ") + S + " in " + t.name
      });
    }
    if (_) {
      const S = Gt(_), Y = k[_].state === "off";
      T.push({
        key: "climate",
        kind: "control",
        tone: S.hvac_action === "cooling" ? "cool" : "heat",
        light: dn(_) ? mo(dn(_)) : "",
        icon: po(_),
        label: bt(_),
        value: Y ? "Off" : jt(S.hvac_action || k[_].state) + " · " + Aa(S.temperature),
        short: Y ? "Off" : Aa(S.temperature),
        on: !Y,
        acts: [["climate", "toggle", _]],
        aria: "Turn " + bt(_) + (Y ? " on" : " off")
      });
    }
    if (x) {
      const S = k[x].state === "on";
      T.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        light: S ? mo([33, 150, 243]) : "",
        icon: po("", "mdi:air-humidifier"),
        label: bt(x),
        value: S ? "On · " + Gt(x).humidity + "%" : "Off",
        short: S ? Gt(x).humidity + "%" : "Off",
        on: S,
        acts: [["humidifier", "toggle", x]],
        aria: "Turn " + bt(x) + (S ? " off" : " on")
      });
    }
    if (R.length) {
      const S = M || R[0], Y = k[S], B = Y.state === "playing";
      T.push({
        key: "media",
        kind: "control",
        tone: "blue",
        light: dn(S) ? mo(dn(S)) : "",
        icon: po(S),
        label: bt(S),
        value: Ee(S),
        short: B ? "Playing" : Y.state === "paused" ? "Paused" : jt(Y.state),
        on: B,
        acts: [["media_player", Y.state === "playing" || Y.state === "paused" ? "media_play_pause" : "toggle", S]],
        aria: (B ? "Pause " : "Play ") + bt(S)
      });
    }
    return t.plugs.length && T.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      light: E.length ? mo([255, 193, 7]) : "",
      icon: po("", "mdi:power-plug"),
      label: "Plugs",
      value: E.length ? E.length + " of " + t.plugs.length + " on" : "All off",
      short: E.length ? E.length + " on" : "Off",
      on: E.length > 0,
      acts: t.plugs.map((S) => ["switch", E.length ? "turn_off" : "turn_on", S]),
      aria: (E.length ? "Turn off" : "Turn on") + " the plugs in " + t.name
    }), t.alerts.forEach((S) => T.push(Gt(S).device_class === "moisture" ? { key: "alert:" + S, kind: "alert", icon: po(S), label: "Water leak" } : { key: "note:" + S, kind: "note", icon: po(S), label: bt(S) + " " + Ee(S).toLowerCase() })), T;
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
          return ((l = k[i]) == null ? void 0 : l.state) === "playing";
        }) || o.find((i) => {
          var l;
          return ((l = k[i]) == null ? void 0 : l.state) === "paused";
        }) || o[0]].filter(Boolean);
      })()
    }[e] || [];
  };
  function vs(t, e, a = !1) {
    const o = e.find((u) => u.key === "lights"), i = !!(o != null && o.on), l = "", c = '<span class="tfAreaGlyph"' + be("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span>";
    return a || !o ? '<span class="tfIcon tfAreaIcon' + (i ? " on" : "") + '"' + l + ' aria-hidden="true">' + c + "</span>" : '<button class="tfIcon tfAreaIcon' + (i ? " on" : "") + '" type="button"' + l + ' data-acts="' + go(o.acts) + '" aria-label="' + q(o.aria) + '" aria-pressed="' + i + '">' + c + "</button>";
  }
  const gi = (t) => t.readings.find((e) => Gt(e).device_class === "temperature") || [...t.readings, ...t.solar, ...t.openings, ...t.actions, ...t.plugs].find((e) => k[e]) || null, vo = (t, e) => {
    const a = bt(e);
    return a.toLowerCase().startsWith(t.name.toLowerCase() + " ") ? jt(a.slice(t.name.length + 1)) : a;
  };
  function kr(t) {
    const e = k[t], a = Gt(t), o = t.split(".")[0], i = Number(e.state);
    if (e.state === "unavailable") return { text: "Unavailable" };
    if (o === "sensor" && Number.isFinite(i)) {
      if (a.device_class === "temperature") return { text: Aa(i) };
      const l = a.unit_of_measurement || "";
      return l === "%" ? { text: Math.round(i) + "%" } : { text: De(i, Number.isInteger(i) ? 0 : 1), unit: l };
    }
    if (o === "climate" && (a.current_temperature ?? a.temperature) != null) return { text: Aa(a.current_temperature ?? a.temperature) };
    if (o === "light") return { text: e.state !== "on" ? "Off" : Ue(t) ? $a(e) + "%" : "On" };
    if (o === "cover") {
      const l = ma(t);
      return { text: l <= 0 ? "Closed" : l >= 100 ? "Open" : l + "%" };
    }
    return o === "humidifier" ? { text: e.state === "on" ? a.humidity + "%" : "Off" } : o === "media_player" ? { text: e.state === "playing" ? "Playing" : e.state === "paused" ? "Paused" : jt(e.state) } : { text: Ee(t) };
  }
  const Oe = (t, e, a) => {
    const o = a.find((u) => u.key === "temp"), i = a.find((u) => u.key === "hum"), l = Gt(e), c = k[e].state === "off";
    return e.startsWith("climate.") ? [vo(t, e), c ? "Off" : jt(l.hvac_action || k[e].state) + (l.temperature != null ? " · " + Aa(l.temperature) : ""), i && i.value].filter(Boolean).join(" · ") : [!(o && o.id === e) && vo(t, e), o && o.id !== e && o.value, i && i.id !== e && i.value + (o ? "" : " humidity")].filter(Boolean).join(" · ");
  };
  function bi(t) {
    const e = t.id === V, a = $o(t), o = gi(t), i = o && kr(o), l = [...a.filter((c) => c.kind === "control"), ...a.filter((c) => c.kind !== "control" && c.kind !== "reading")].slice(0, 4);
    return '<article class="hcAreaPanel tfAreaPanel' + (e ? " active" : "") + '" data-area="' + q(t.id) + '" tabindex="0" aria-expanded="' + e + '" aria-label="' + q(t.name) + '"><div class="panelExpanded"' + (e ? "" : " inert") + ">" + b(t, null, ' data-cols="2" data-rows="' + Vn("areas") + '"') + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop">' + vs(t, a, !0) + '<span class="tfACName">' + q(t.name) + '</span></div><span class="tfACMain">' + (i ? q(i.text + (i.unit ? " " + i.unit : "")) : "") + '</span><span class="tfACTiles" aria-hidden="true">' + l.map((c) => '<span class="tfACTile"><span class="tfIcon' + (c.kind === "alert" ? " alert" : "") + '"' + (c.on && c.light ? ' data-light style="' + c.light + '"' : "") + ">" + c.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let Je = [];
  const Jo = (t) => {
    const e = mt.areaOrder || [], a = (o) => {
      const i = e.indexOf(o.id);
      return i < 0 ? e.length + t.indexOf(o) : i;
    };
    return [...t].sort((o, i) => a(o) - a(i));
  }, In = () => {
    var e;
    const t = new Set(((e = mt.dash) == null ? void 0 : e.areasOff) || []);
    return Jo(Je).filter((a) => !t.has(a.id));
  }, s = (t) => {
    var a;
    const e = In();
    return e.some((o) => o.id === V) || (V = ((a = e[0]) == null ? void 0 : a.id) || null), '<div class="tfAreas" data-tf data-k="areas" style="order:' + t + '"><section class="hcAreaGallery tfAreaGallery" aria-label="Areas">' + e.map(bi).join("") + "</section></div>";
  }, h = (t) => t.startsWith("room:"), m = (t) => Je.find((e) => "room:" + e.id === t);
  function b(t, e, a = "") {
    const o = $o(t), i = gi(t), l = i && kr(i), c = i ? Oe(t, i, o) : "", u = l ? l.text + (l.unit ? " " + l.unit : "") : "", f = (S) => {
      const Y = xr(t, S.key);
      return Y.length === 1 ? Y[0] : "group:" + t.id + ":" + S.key;
    }, y = o.filter((S) => S.kind === "control").slice(0, 4), _ = (S) => S.on && S.light ? ' data-light style="' + S.light + '"' : "", x = (S) => '<button class="tfIcon' + (S.on ? " on" : "") + '" type="button" data-tone="' + S.tone + '"' + _(S) + ' data-acts="' + go(S.acts) + '" aria-label="' + q(S.aria) + '" aria-pressed="' + S.on + '">' + S.icon + "</button>", R = y.map(x), M = y.map((S) => '<div class="tfRoomDev' + (S.on ? " on" : "") + '">' + x(S) + '<button class="tfName tfRoomDevName" type="button" data-more="' + q(f(S)) + '" aria-label="' + q(t.name + " " + S.label.toLowerCase() + ", " + S.value + ". Open") + '"><span class="activityRowName">' + q(S.label) + '</span><span class="activityRowMeta">' + q(S.value) + "</span></button></div>"), E = o.find((S) => S.key === "lights"), T = '<span class="tfAreaGlyph"' + be("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span>", P = E ? '<button class="tfIcon tfRoomIcon" type="button" data-acts="' + go(E.acts) + '" aria-label="' + q(E.aria) + '" aria-pressed="' + !!E.on + '">' + T + "</button>" : '<span class="tfIcon tfRoomIcon" aria-hidden="true">' + T + "</span>";
    return '<div class="tfAction tfRoomTile"' + (e ? ' data-k="' + q(e) + '"' : "") + a + ' data-go="' + q(t.id) + '"><div class="tfActionHead">' + P + '<button class="tfName" type="button" data-go="' + q(t.id) + '" aria-label="Open ' + q(t.name) + '"><span class="activityRowName">' + q(t.name) + "</span>" + (u || c ? '<span class="activityRowMeta">' + (u ? '<span class="tfRoomInline">' + q(u) + (c ? " · " : "") + "</span>" : "") + q(c) + "</span>" : "") + "</button></div>" + // the reading opens its more-info (the thermometer's, say)
    (u ? '<button class="tfRoomReading" type="button" data-more="' + q(i) + '" aria-label="' + q(bt(i) + ", " + Ee(i) + ". More info") + '"><span class="tfRoomBig">' + q(u) + "</span>" + (c ? '<span class="tfRoomSub">' + q(c) + "</span>" : "") + "</button>" : "") + (R.length ? '<div class="tfRoomDevices">' + R.join("") + '</div><div class="tfRoomHeads">' + M.join("") + "</div>" : "") + "</div>";
  }
  const D = () => [
    { key: "home", name: "Home", ids: Vt.homeVacuums },
    ...Vt.rooms.map((t) => ({ key: "room:" + t.id, name: t.name, room: t, ids: t.actions }))
  ], O = (t, e, a) => t + " " + (t === 1 ? e : a), F = () => (mt.favourites ?? $e.favorite_entities ?? []).filter((t) => k[t]);
  function K() {
    if (!qo) {
      const e = Object.entries(Ka).sort((o, i) => i[1] - o[1]).map(([o]) => o), a = Vt.rooms.flatMap((o) => o.actions);
      qo = [.../* @__PURE__ */ new Set([...ln, ...e, ...a.filter((o) => sa(o).on), ...a])];
    }
    const t = F();
    return qo.filter((e) => k[e] && k[e].state !== "unavailable" && !t.includes(e));
  }
  let W = !1;
  const $ = 6;
  function tt() {
    if (!W || mt.favSeeded || !Vt.rooms.length || C) return;
    const t = (a) => Object.keys(k).find((o) => Ya(o) && a(o)), e = [t((a) => a.startsWith("climate.")), t((a) => a.startsWith("cover.") && /curtain/.test(a)), t((a) => a.startsWith("valve.")), Vt.security.locks[0]];
    mt = { ...mt, favourites: [.../* @__PURE__ */ new Set([...mt.favourites ?? $e.favorite_entities ?? [], ...e.filter(Boolean)])].slice(0, $), favSeeded: !0 }, We();
  }
  const ft = () => mt.suggest ?? !$e.hide_suggested_entities;
  function Nt() {
    const t = new Set(C ? [] : mt.favHidden || []), e = F().filter((i) => !t.has(i)), a = ft() ? K().filter((i) => !t.has(i) && ks(i)) : [], o = Math.max($, e.length);
    return [...e, ...a].slice(0, C && !Ti() ? o : Math.min(I0, o));
  }
  const Tt = (t) => {
    const e = F().includes(t);
    return '<button class="tfStar" type="button" data-star="' + q(t) + '" aria-pressed="' + e + '" aria-label="Favourite: ' + q(bt(t)) + '">' + N0(e) + "</button>";
  };
  function St(t, { area: e = !1, star: a = !1, plain: o = !1, say: i = null, alert: l = !1 } = {}) {
    var E, T, P, S, Y, B;
    const c = o && ((Y = (E = d()) == null ? void 0 : E.devices) == null ? void 0 : Y[(S = (P = (T = d()) == null ? void 0 : T.entities) == null ? void 0 : P[t]) == null ? void 0 : S.device_id]), u = c && (c.name_by_user || c.name) || bt(t), f = t.split(".")[0], y = !o && nr.includes(f) ? sa(t) : null, _ = y ? y.on : ["on", "open", "playing"].includes((B = k[t]) == null ? void 0 : B.state), x = o ? null : y ? y.button : Vr.includes(f) ? { act: Dt(f, "toggle", t), label: "Turn " + bt(t) + (_ ? " off" : " on") } : f === "scene" || f === "script" ? { act: Dt(f, "turn_on", t), label: "Run " + bt(t) } : null, R = (i ?? Ee(t)) + (e && Ct.get(t) ? " · " + Ct.get(t) : ""), M = (y == null ? void 0 : y.icon) || ga(t);
    return '<div class="activityRow' + (x ? " tfPlug" : "") + (_ ? " on" : "") + (a ? " tfPick" : "") + (l ? " alert" : "") + '" data-k="' + q((e ? "fav:" : "row:") + t) + '" data-tone="' + (f === "light" ? "light" : (y == null ? void 0 : y.tone) || "blue") + '"' + Vo(t) + ">" + (x && !a ? '<button class="tfIcon" type="button" data-act="' + x.act + '" aria-label="' + q(x.label) + '"' + be(t, M) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + be(t, M) + "></div>") + '<button class="tfName" type="button" data-more="' + q(t) + '" aria-label="' + q(u + ", " + R + ". More info") + '"><span class="activityRowName">' + q(u) + '</span><span class="activityRowMeta">' + q(R) + "</span></button>" + (a ? Tt(t) : "") + "</div>";
  }
  const Wt = () => {
    var t;
    return k[(t = mt.sources) == null ? void 0 : t.weather] ? mt.sources.weather : k["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(k).find((e) => e.startsWith("weather."));
  };
  function Lt() {
    var a;
    const t = (o) => Object.keys(k).filter((i) => i.startsWith("binary_sensor.") && o.includes(Gt(i).device_class));
    return ((a = ho.alert_entities) != null && a.length ? ho.alert_entities : [...t(["moisture", "smoke", "gas"]).map((o) => ({ entity: o, severity: "alert" })), ...t($i).map((o) => ({ entity: o, severity: "warning" }))]).filter((o) => k[o.entity]).map((o) => ({ ...o, on: ["on", "open", "unlocked", "triggered", "problem"].includes(k[o.entity].state) }));
  }
  function dt() {
    const t = Object.keys(jr), e = /* @__PURE__ */ new Set(), a = [];
    ($e.shortcuts || []).forEach((l) => {
      if (l.type === "summary") {
        if (!t.includes(l.key) || e.has(l.key)) return;
        e.add(l.key);
      }
      a.push(l);
    }), t.forEach((l) => {
      e.has(l) || a.push({ type: "summary", key: l });
    });
    const o = It().sumOrder || [], i = (l) => l.type === "summary" && o.includes(l.key) ? o.indexOf(l.key) : o.length;
    return o.length ? a.map((l, c) => [l, c]).sort((l, c) => i(l[0]) - i(c[0]) || l[1] - c[1]).map(([l]) => l) : a;
  }
  function Ot() {
    var P;
    const t = ((P = d()) == null ? void 0 : P.entities) || {}, e = (S) => Gt(S).device_class, a = Object.keys(k).filter((S) => S.startsWith("sensor.") && e(S) === "battery" || S.startsWith("binary_sensor.") && ["battery", "problem"].includes(e(S))), o = Vt.rooms.flatMap((S) => S.plants.map((Y) => Y.id));
    if (!a.length && !o.length) return null;
    const i = (S) => {
      var B;
      const Y = (B = t[S]) == null ? void 0 : B.device_id;
      return !!Y && Object.keys(k).some((rt) => {
        var Pt;
        return rt.startsWith("binary_sensor.") && ((Pt = t[rt]) == null ? void 0 : Pt.device_id) === Y && e(rt) === "battery_charging" && k[rt].state === "on";
      });
    }, l = (S) => S.startsWith("vacuum.") ? Gt(S).battery_level <= 20 && k[S].state !== "docked" : S.startsWith("binary_sensor.") ? e(S) === "battery" && k[S].state === "on" : parseFloat(k[S].state) <= 20 && !i(S), c = [...a, ...Vt.vacuums].filter((S) => k[S] && l(S)), u = [...a.filter((S) => e(S) === "problem" && k[S].state === "on"), ...o.filter((S) => {
      var Y;
      return ((Y = k[S]) == null ? void 0 : Y.state) === "problem";
    })], f = a.filter((S) => k[S].state === "unavailable"), y = [.../* @__PURE__ */ new Set([...c, ...u, ...f])], _ = (S) => {
      const Y = parseFloat(k[S].state);
      return e(S) === "battery" && Number.isFinite(Y) ? Y : 101;
    }, x = [...o, ...Vt.vacuums, ...[...a].sort((S, Y) => _(S) - _(Y))].filter((S) => k[S] && !y.includes(S)), R = /* @__PURE__ */ new Map();
    x.forEach((S) => {
      var B;
      const Y = ((B = Vt.areaOf) == null ? void 0 : B.call(Vt, S)) || "";
      R.set(Y, [...R.get(Y) || [], S]);
    });
    const M = (S) => {
      const Y = Vt.rooms.findIndex((B) => B.id === S);
      return S === "" ? 1 / 0 : Y < 0 ? Vt.rooms.length : Y;
    }, E = [...R.keys()].sort((S, Y) => M(S) - M(Y)), T = (S) => {
      var Y, B, rt, Pt;
      return ((Y = Vt.rooms.find((Et) => Et.id === S)) == null ? void 0 : Y.name) || ((Pt = (rt = (B = d()) == null ? void 0 : B.areas) == null ? void 0 : rt[S]) == null ? void 0 : Pt.name) || S;
    };
    return {
      value: [c.length && O(c.length, "low battery", "low batteries"), u.length && O(u.length, "problem", "problems"), f.length && O(f.length, "unavailable device", "unavailable devices")].filter(Boolean).join(", ") || "All good",
      plain: !0,
      groups: [{ name: "Needs attention", ids: y, alert: !0 }, ...E.map((S) => ({ name: S ? T(S) : E.length > 1 ? "Other devices" : "Devices", ids: R.get(S) }))].filter((S) => S.ids.length)
    };
  }
  const It = () => C ? mt.home || {} : mt, fe = (t) => yp.includes(t) ? (It().shownSums || []).includes(t) : !(It().hiddenSums || []).includes(t);
  function _t(t, e, a) {
    const o = t.flatMap((R) => a(R, /^cover\./)), i = o.filter((R) => {
      var M;
      return ["open", "opening"].includes((M = k[R]) == null ? void 0 : M.state);
    }).length, l = Object.keys(k).filter((R) => R.startsWith("person.")), c = l.filter((R) => {
      var M;
      return ((M = k[R]) == null ? void 0 : M.state) === "home";
    }).length, u = Vt.security.openings.filter((R) => k[R]), f = u.filter((R) => k[R].state === "on").length, y = Object.keys(k).filter((R) => R.startsWith("binary_sensor.") && Gt(R).device_class === "moisture"), _ = y.filter((R) => k[R].state === "on").length, x = Vt.vacuums.filter((R) => k[R]);
    return {
      covers: o.length && { value: i ? i + " open" : "All closed", groups: e((R) => a(R, /^cover\./)) },
      people: l.length && { value: c ? c + " home" : "Nobody home", groups: [{ name: "People", ids: l }] },
      openings: u.length && { value: f ? f + " open" : "All closed", groups: [{ name: "Doors and windows", ids: u }] },
      leaks: y.length && { value: _ ? O(_, "leak", "leaks") : "All dry", groups: [{ name: "Leak sensors", ids: y }] },
      vacuum: x.length && { value: jt(k[x[0]].state), groups: [{ name: "Vacuum", ids: x }] }
    };
  }
  function ae(t = !1) {
    var Te;
    const e = Vt.rooms, a = Vt.security, o = (At, Bt) => At.actions.filter((Pe) => Bt.test(Pe)), i = (At) => e.map((Bt) => ({ name: Bt.name, ids: At(Bt) })).filter((Bt) => Bt.ids.length), l = e.flatMap((At) => At.lights), c = l.filter((At) => {
      var Bt;
      return ((Bt = k[At]) == null ? void 0 : Bt.state) === "on";
    }).length, u = e.map((At) => At.readings.find((Bt) => Gt(Bt).device_class === "temperature")).filter(Boolean).map((At) => Number(k[At].state)).filter(Number.isFinite), [f, y] = [De(Math.min(...u)), De(Math.max(...u))], _ = e.flatMap((At) => o(At, /^media_player\./)), x = _.filter((At) => {
      var Bt;
      return ((Bt = k[At]) == null ? void 0 : Bt.state) === "playing";
    }).length, R = Lt(), M = R.filter((At) => At.severity === "warning" && At.on).length, E = a.locks.filter((At) => {
      var Bt;
      return ["unlocked", "jammed", "open"].includes((Bt = k[At]) == null ? void 0 : Bt.state);
    }).length, T = a.alarms.filter((At) => {
      var Bt;
      return ((Bt = k[At]) == null ? void 0 : Bt.state) === "disarmed";
    }).length, P = M ? O(M, "warning", "warnings") : null, S = E ? E + " unlocked" : T ? T + " disarmed" : P ? null : "All secure", Y = Ot(), B = e.flatMap((At) => At.solar), rt = B.find((At) => At.endsWith("_power")), Pt = {
      light: l.length && { value: c ? c + " on" : "All off", groups: i((At) => At.lights) },
      climate: u.length && { value: f === y ? f + "°" : f + " - " + y + "°", groups: i((At) => [...At.readings.filter((Bt) => ["temperature", "humidity"].includes(Gt(Bt).device_class)), ...o(At, /^(climate|humidifier)\./)]) },
      security: (a.alarms.length || a.locks.length) && { value: [P, S].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...a.alarms, ...a.locks] }, { name: "Doors and windows", ids: a.openings }].filter((At) => At.ids.length) },
      media_players: _.length && { value: x ? x + " playing" : "No media playing", groups: i((At) => o(At, /^media_player\./)) },
      maintenance: Y,
      energy: Vt.grid && { value: Yo(Number(((Te = k[rt]) == null ? void 0 : Te.state) || 0) * 1e3 + Number(k[Vt.grid].state)) + " now", groups: [{ name: "Energy", ids: [...B, Vt.grid] }] },
      ..._t(e, i, o)
    }, Et = [], zt = R.filter((At) => At.severity !== "warning" && At.on);
    return zt.length && Et.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: O(zt.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: zt.map((At) => At.entity) }] }), dt().forEach((At) => {
      At.type !== "summary" ? Et.push({ key: "path:" + At.path, name: At.label || At.path, icon: At.icon || "mdi:link-variant", colour: "", value: "" }) : !At.hidden && Pt[At.key] && (t || fe(At.key)) && Et.push({ key: At.key, ...jr[At.key], ...Pt[At.key] });
    }), Et;
  }
  const ce = (t) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + q(t.key) + '" data-k="sum:' + q(t.key) + '" aria-label="' + q(t.name + (t.value ? ", " + t.value : "")) + '"' + (t.key === "alerts" ? ' style="--sum:' + t.colour + ';--sum-ink:#ffffff"' : t.key === "climate" ? ' style="' + us() + '"' : t.colour && Pn(t.colour) ? ' style="' + Pn(t.colour).slice(1) + '"' : "") + ">" + (t.key === "climate" ? fs : "") + '<div class="tfIcon" aria-hidden="true"' + be(t.id || "", t.icon, t.name) + '></div><div><div class="activityRowName">' + q(t.name) + "</div>" + (t.value ? '<div class="activityRowMeta">' + q(t.value) + "</div>" : "") + "</div></div>";
  function la(t) {
    const e = F();
    mt = { ...mt, favourites: e.includes(t) ? e.filter((a) => a !== t) : [...e, t], favHidden: (mt.favHidden || []).filter((a) => a !== t) }, We(), Be();
  }
  function ao(t) {
    document.querySelector("home-assistant") && (window.history.pushState(null, "", t), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function Mr(t, e) {
    if (t.startsWith("path:")) {
      ao(t.slice(5));
      return;
    }
    Ri("summary:" + t, e);
  }
  async function Sr() {
    const t = (c) => Promise.resolve().then(() => L(c)).catch(() => null), [e, a, o, i] = await Promise.all([
      t({ type: "frontend/get_user_data", key: xp }),
      t({ type: "frontend/get_system_data", key: "home" }),
      t({ type: "frontend/get_system_data", key: "security" }),
      t({ type: "usage_prediction/common_control" })
    ]), l = (e == null ? void 0 : e.value) || {};
    mt = { favourites: l.favourites ?? null, sources: l.sources, hiddenSums: l.hiddenSums, shownSums: l.shownSums, home: l.home, dash: l.dash, named: l.named, favHidden: l.favHidden, suggest: l.suggest, favSeeded: l.favSeeded, favsTitle: l.favsTitle, areaOrder: l.areaOrder }, $e = (a == null ? void 0 : a.value) || {}, ho = (o == null ? void 0 : o.value) || {}, ln = Array.isArray(i == null ? void 0 : i.entities) ? i.entities : [], qo = null, Object.keys(k).length && Be(), Jt(), W = !0, tt();
  }
  const _r = "HomeCore";
  async function Jt() {
    var o, i, l;
    const t = location.pathname.split("/")[1], e = mt.named || [];
    if (!((i = (o = d()) == null ? void 0 : o.user) != null && i.is_admin) || !t || e.includes(t)) return;
    const a = () => {
      mt = { ...mt, named: [...e, t] }, We();
    };
    try {
      const c = (l = await L({ type: "lovelace/dashboards/list" })) == null ? void 0 : l.find((y) => y.url_path === t);
      if (!c || c.mode === "yaml") return;
      if (c.title === _r) {
        a();
        return;
      }
      const u = await L({ type: "lovelace/config", url_path: t }), f = ((u == null ? void 0 : u.views) || []).flatMap((y) => [...y.cards || [], ...(y.sections || []).flatMap((_) => _.cards || [])]);
      if (!f.length || !f.every((y) => (y == null ? void 0 : y.type) === "custom:homecore-card" && !y.page)) return;
      await L({ type: "lovelace/dashboards/update", dashboard_id: c.id, title: _r }), a();
    } catch {
    }
  }
  let va = null, oo = 0, Qo = !1;
  const Fn = (t) => {
    const e = t.split(".")[0], a = Gt(t).device_class;
    return O0.includes(e) && (e !== "binary_sensor" || $i.includes(a) || !!Dp[a]);
  }, qn = (t) => t.startsWith("binary_sensor.") ? Dp[Gt(t).device_class] : null;
  async function Wn() {
    var t;
    if (!(Qo || Date.now() - oo < 30 * 1e3)) {
      Qo = !0, oo = Date.now();
      try {
        const e = Object.keys(((t = d()) == null ? void 0 : t.states) || {}).filter(Fn), a = e.length ? await L({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: e }) : null;
        va = Array.isArray(a) ? a.filter((o) => o.entity_id && o.state != null && o.when) : null;
      } catch {
        va = null;
      }
      Qo = !1, Be();
    }
  }
  function ca() {
    const t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map(), a = (i) => {
      if (!k[i.entity_id] || !Fn(i.entity_id) || !ks(i.entity_id) || ["unavailable", "unknown"].includes(i.state)) return;
      if (qn(i.entity_id)) {
        const c = e.get(i.entity_id);
        i.state === "on" ? (!c || i.when > c.when + 1) && e.set(i.entity_id, { ...i, alarm: !0, cleared: null }) : c && !c.cleared && i.when > c.when && (c.cleared = i.when);
        return;
      }
      const l = t.get(i.entity_id);
      (!l || i.when > l.when + 1) && t.set(i.entity_id, i);
    };
    [...va || []].sort((i, l) => i.when - l.when).forEach(a);
    const o = va ? oo / 1e3 - 5 : 0;
    return Object.keys(k).forEach((i) => {
      var u;
      const l = k[i], c = l.last_changed ? Date.parse(l.last_changed) / 1e3 : 0;
      c > o && a({ entity_id: i, state: l.state, when: c, context_user_id: (u = l.context) == null ? void 0 : u.user_id });
    }), [...t.values(), ...e.values()].sort((i, l) => l.when - i.when).slice(0, F0);
  }
  function bu(t) {
    var o;
    const e = t.context_user_id && Object.keys(k).find((i) => i.startsWith("person.") && Gt(i).user_id === t.context_user_id);
    if (e) return bt(e);
    const a = (o = d()) == null ? void 0 : o.user;
    return a && t.context_user_id === a.id ? a.name : ["automation", "script"].includes(t.context_domain) || t.context_event_type === "automation_triggered" ? t.context_name || "Home Assistant" : "";
  }
  function wu(t) {
    const e = t.entity_id.split(".")[0], a = String(t.state);
    return e === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[a] || jt(a).toLowerCase() : e === "cover" || e === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[a] || jt(a).toLowerCase() : e === "binary_sensor" ? a === "on" ? "opened" : "closed" : e === "climate" ? a === "off" ? "turned off" : "set to " + jt(a).toLowerCase() : e === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[a] || jt(a).toLowerCase() : e === "alarm_control_panel" ? (Lp[a] || jt(a)).toLowerCase() : e === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[a] || jt(a).toLowerCase() : a === "on" ? "turned on" : a === "off" ? "turned off" : jt(a).toLowerCase();
  }
  function vu(t) {
    const e = t.entity_id, a = t.alarm && qn(e), o = bt(e) + " " + (a ? a[0] : wu(t)), i = a ? Ia(t.when * 1e3) + (t.cleared ? " · " + a[1] + " since " + Ia(t.cleared * 1e3) : "") : [bu(t), Ia(t.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow' + (a ? " alert" : "") + '"><div class="tfIcon' + (a ? " alert" : "") + '" aria-hidden="true"' + be(e, ga(e)) + '></div><button class="tfName" type="button" data-more="' + q(e) + '" data-at="' + Math.round(t.when * 1e3) + '" aria-label="' + q(o + ", " + i + ". More info") + '"><span class="activityRowName">' + q(o) + '</span><span class="activityRowMeta">' + q(i) + "</span></button></div>";
  }
  let qa = null, Ql = 0;
  const yu = [["electricity", "Electricity", 4.3, "kWh"], ["solar", "Solar", 2.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function tc() {
    var e;
    if (Date.now() - Ql < 5 * 60 * 1e3) return;
    Ql = Date.now();
    const t = [];
    try {
      const a = ((e = await L({ type: "energy/get_prefs" })) == null ? void 0 : e.energy_sources) || [], o = (i) => a.filter((l) => l.type === i).flatMap((l) => i === "grid" ? (l.flow_from || []).map((c) => c.stat_energy_from) : [l.stat_energy_from]).filter(Boolean);
      for (const [i, l, c] of [["electricity", "Electricity", o("grid")], ["solar", "Solar", o("solar")], ["gas", "Gas", o("gas")], ["water", "Water", o("water")]]) {
        if (!c.length) continue;
        const u = await Promise.all(c.map((f) => Promise.resolve(L({ type: "recorder/statistic_during_period", statistic_id: f, calendar: { period: "day" }, types: ["change"] })).then((y) => Number(y == null ? void 0 : y.change) || 0, () => 0)));
        t.push({ key: i, name: l, id: c[0], ids: c, value: u.reduce((f, y) => f + y, 0), unit: Gt(c[0]).unit_of_measurement || (i === "gas" || i === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    qa = t, Be();
  }
  let jn = null, ec = [];
  function ys() {
    var l;
    const t = ec = qa != null && qa.length ? qa : yu.map(([c, u, f, y]) => {
      if (c === "solar") {
        const x = Object.keys(k).find((R) => R.endsWith("_solar_today") && !R.includes("made_up_energy"));
        x && Number.isFinite(Number(k[x].state)) && (f = Number(k[x].state));
      }
      const _ = "sensor.made_up_energy_" + c;
      return k[_] = { entity_id: _, state: String(f), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: u + " today", unit_of_measurement: y, state_class: "total_increasing" } }, { key: c, name: u, id: _, value: f, unit: y };
    });
    ot.clear(), t.some((c) => c.id === jn) || (jn = t[0].id);
    const e = t.map((c) => {
      const u = Number(c.value).toLocaleString(void 0, { maximumFractionDigits: c.value < 10 ? 2 : 1 }) + " " + c.unit, f = q0[c.key], y = c.id === jn;
      return ot.set(c.id, { name: c.name, text: u, icon: f }), '<div class="activityRow tap' + (y ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + q(c.id) + '" aria-pressed="' + y + '" aria-label="' + q(c.name + ", " + u) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + be("", f, c.name) + '></div><div><div class="activityRowName">' + q(c.name) + '</div><div class="activityRowMeta">' + q(u) + "</div></div></div>";
    }), a = t.find((c) => c.id === jn), o = (((l = re().opts.energy) == null ? void 0 : l.graph) || "above") === "below", i = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + q(a.id) + '" role="img" aria-label="' + q(a.name) + ', last 24 hours"></svg></div>';
    return bo("dash:energy", 0, "Energy today", e, i, ae().some((c) => c.key === "energy") ? "summary:energy" : null, "tfDashCard tfDash-energy" + (o ? "" : " graphAbove"));
  }
  function ac(t) {
    const e = H.querySelector(".tfDash-energy"), a = e == null ? void 0 : e.querySelector(".tfDashGraph svg");
    !a || t === jn || (jn = t, e.querySelectorAll("[data-energy-pick]").forEach((o) => {
      const i = o.dataset.energyPick === t;
      o.classList.toggle("picked", i), o.setAttribute("aria-pressed", String(i));
    }), a.dataset.graph = t, a.dataset.drawn = "", Ma.set("dash:energy", ys()), Vc(!0));
  }
  const oc = {
    electricity: [15, 12, 10, 10, 10, 12, 25, 45, 40, 30, 25, 30, 35, 30, 25, 25, 35, 60, 80, 70, 55, 45, 30, 20],
    gas: [2, 2, 2, 2, 3, 8, 18, 20, 12, 6, 4, 4, 4, 4, 4, 5, 8, 14, 16, 14, 10, 6, 3, 2],
    water: [0, 0, 0, 0, 0, 2, 12, 18, 8, 4, 3, 4, 6, 3, 2, 3, 4, 6, 10, 8, 5, 5, 3, 1]
  }, nc = /* @__PURE__ */ new Map();
  async function xu(t) {
    const e = /* @__PURE__ */ new Date(), a = new Date(e).setHours(0, 0, 0, 0), o = e.getHours(), i = e.getMinutes() / 60, l = Array.from({ length: 24 }, (u, f) => f <= o ? 0 : null);
    if (!t.ids) {
      const u = oc[t.key] || oc.electricity, f = u.map((_, x) => x < o ? _ : x === o ? _ * i : 0), y = f.reduce((_, x) => _ + x, 0) || 1;
      return l.map((_, x) => _ == null ? null : t.value * f[x] / y);
    }
    const c = nc.get(t.id);
    if (c && c.day === a && Date.now() - c.at < 5 * 60 * 1e3) return c.hours;
    try {
      const u = await L({ type: "recorder/statistics_during_period", start_time: new Date(a).toISOString(), end_time: e.toISOString(), statistic_ids: t.ids, period: "hour", types: ["change"] });
      t.ids.forEach((_) => ((u == null ? void 0 : u[_]) || []).forEach((x) => {
        const R = typeof x.start == "number" ? x.start : Date.parse(x.start), M = new Date(R).getHours();
        R >= a && M < o && (l[M] += Number(x.change) || 0);
      }));
      const f = new Date(e).setMinutes(0, 0, 0), y = await Promise.all(t.ids.map((_) => Promise.resolve(L({ type: "recorder/statistic_during_period", statistic_id: _, fixed_period: { start_time: new Date(f).toISOString(), end_time: e.toISOString() }, types: ["change"] })).then((x) => Number(x == null ? void 0 : x.change) || 0, () => 0)));
      l[o] = y.reduce((_, x) => _ + x, 0);
    } catch {
    }
    return nc.set(t.id, { at: Date.now(), day: a, hours: l }), l;
  }
  async function ku(t, e) {
    const a = await xu(e);
    if (!t.isConnected) return;
    const o = Math.max(120, t.clientWidth || 260), i = Math.max(60, t.clientHeight || 130), l = 18, c = i - 18, u = o / 24, f = u * 0.72, y = (/* @__PURE__ */ new Date()).getHours(), _ = a.map((P) => P ?? 0), x = Math.max(0, ..._), R = (P) => c - (x > 0 ? P / x * (c - l) : 0), M = (P) => P.toLocaleString(void 0, { maximumFractionDigits: P < 10 ? 2 : 1 }) + " " + e.unit, E = (P) => String(P).padStart(2, "0") + ":00", T = x > 0 ? _.indexOf(x) : -1;
    t.setAttribute("viewBox", "0 0 " + o + " " + i), t.setAttribute("aria-label", e.name + " today by the hour: " + M(e.value) + (T >= 0 ? ", most " + M(x) + " at " + E(T) : "")), t.innerHTML = [l, (l + c) / 2, c].map((P) => '<line x1="0" x2="' + o + '" y1="' + P + '" y2="' + P + '" stroke="var(--line)" stroke-width="1"/>').join("") + a.map((P, S) => P > 0 ? '<rect x="' + (S * u + (u - f) / 2).toFixed(1) + '" y="' + R(P).toFixed(1) + '" width="' + f.toFixed(1) + '" height="' + (c - R(P)).toFixed(1) + '" rx="2" fill="' + (S === y ? "var(--primary)" : "var(--text)") + '"' + (S === y ? "" : ' fill-opacity=".5"') + "/>" : "").join("") + [0, 6, 12, 18].map((P) => '<text x="' + (P * u).toFixed(1) + '" y="' + (i - 3) + '">' + String(P).padStart(2, "0") + "</text>").join("") + (T >= 0 ? '<text x="0" y="11">Most: ' + q(M(x)) + " at " + E(T) + "</text>" : "");
  }
  function Mu(t) {
    var e;
    (e = window.matchMedia) != null && e.call(window, "(prefers-reduced-motion: reduce)").matches || t.querySelectorAll("rect").forEach((a, o) => a.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], { duration: 500, delay: o * 18, easing: "cubic-bezier(.2,.7,.3,1)", fill: "backwards" }));
  }
  function rc(t) {
    var o;
    if ((o = window.matchMedia) != null && o.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [e, a] = t.querySelectorAll("path");
    Xp(t, a, [e].filter(Boolean));
  }
  let wi = null, xs = 0;
  const ks = (t) => !t.startsWith("light.") || W0.includes((Ct.get(t) || "").toLowerCase()), Ms = () => Math.max(2, en((H == null ? void 0 : H.clientWidth) || 0).n), ic = (t) => {
    const e = sa(t);
    return e.sections.map((a, o) => a && (e.parts || [])[o]).filter(Boolean);
  }, Su = (t) => ic(t).slice(0, Vn(t) - 1);
  function sc(t) {
    const e = re().tiles;
    if (e) return e.filter((o) => k[o] || m(o));
    if (!wi) {
      const o = (i) => {
        var l;
        return (((l = k[i]) == null ? void 0 : l.state) === "on" ? 1e6 : 0) + (Ka[i] || 0);
      };
      wi = {
        lights: Vt.rooms.flatMap((i) => i.lights).filter((i) => {
          var l;
          return ks(i) && ((l = k[i]) == null ? void 0 : l.state) !== "unavailable";
        }).sort((i, l) => o(l) - o(i) || bt(i).localeCompare(bt(l))),
        climates: Vt.rooms.flatMap((i) => i.actions.filter((l) => l.startsWith("climate.")))
      };
    }
    const a = wi.climates.filter((o) => k[o]).slice(0, t > 3 ? 2 : 1);
    return [...wi.lights.filter((o) => k[o]).slice(0, Math.max(0, t - a.length)), ...a];
  }
  const Ss = () => {
    var t;
    return ((t = mt.home) == null ? void 0 : t.welcome) ?? !0;
  }, _u = () => {
    var e, a;
    const t = (e = d()) == null ? void 0 : e.user;
    return (t == null ? void 0 : t.name) || ((a = Object.values(k).find((o) => {
      var i;
      return o.entity_id.startsWith("person.") && (t == null ? void 0 : t.id) && ((i = o.attributes) == null ? void 0 : i.user_id) === t.id;
    })) == null ? void 0 : a.attributes.friendly_name) || "";
  }, Cu = () => {
    const t = (/* @__PURE__ */ new Date()).getHours(), e = _u();
    return (t >= 5 && t < 12 ? "Good morning" : t >= 12 && t < 18 ? "Good afternoon" : "Good evening") + (e ? ", " + e : "");
  }, lc = (t, e, a, o) => (i) => '<section class="card tfCard tfDashCard ' + t + '" data-tf data-k="' + e + '" aria-label="' + a + '">' + (o ? '<div class="activityHeader">' + (e === "favs" ? '<button class="activityTitle tfTitleBtn" type="button" data-more="favourites" aria-label="Favourites. More info">' + a + "</button>" : '<div class="activityTitle">' + a + "</div>") + "</div>" : "") + '<div class="activityRows">' + i + "</div></section>";
  function Au(t, e) {
    var l, c;
    t.dash = !0, t.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + ((C ? Ss() : re().welcome) ? '<span class="tfGreeting">' + q(Cu()) + "</span>" : "") + q(((c = (l = d()) == null ? void 0 : l.config) == null ? void 0 : c.location_name) || "Home") + "</h1>" }), e.length && t.push({ key: "sums", wrap: (u) => '<div class="tfDashBarRow" data-tf data-k="sums">' + lc("tfDash-bar", "sums-bar", "Summaries", !1)(u).replace(" data-tf", "") + "</div>", tiles: e.map((u) => ({ key: "sum:" + u.key, html: ce(u) })) }), !C && In().length && t.push({ key: "areas", html: s(0) });
    const a = Nt();
    if (a.length && t.push({ key: "favs", wrap: lc("tfDash-favs", "favs", "Favourites", yi()), tiles: a.map((u) => ({ key: "fav:" + u, html: St(u, { area: !0 }) })) }), C)
      return tc(), yc() && t.push({ key: "dash:energy", html: ys() }), xs = Ms(), sc(0).forEach((u) => t.push({
        key: "dash:tile:" + u,
        wrap: (f) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + q(u) + '">' + f + "</div>",
        tiles: [{ key: u, html: b(m(u), u) }]
      })), t;
    const o = ca();
    t.push({ key: "dash:act", html: bo("dash:act", 0, "Activity", o.length ? o.map(vu) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), t.push({ key: "dash:energy", html: ys() });
    const i = Ms();
    return xs = i, sc(i >= 3 ? i : i * 2).forEach((u) => t.push({
      key: "dash:tile:" + u,
      wrap: (f) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + q(u) + '">' + f + "</div>",
      tiles: [{ key: u, html: h(u) ? b(m(u), u) : yr(u, !1, Su(u)) }]
    })), Wn(), tc(), t;
  }
  const Cr = 252, de = 16, Tu = 200, Lu = Math.round(Cr * 1.25), Du = 60, Wa = Du + de, Eu = 3, cc = {
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
  }, Bu = ["wx", "favs", "act", "energy", "avg"], dc = ["XS", "S", "M", "L", "XL"], pc = dc.length, Ru = ["Narrow", "Wide", "Really wide"], Pu = { wx: 5, areas: 5, favs: 5, act: 5, energy: 4, avg: 4, aq: 4, pollen: 4, radar: 4, hourly: 4, sun: 4, moon: 4, uv: 4, humidity: 4, pressure: 4, wind: 4, visibility: 4 }, uc = (t) => !t.includes(".") || !k[t] || t.startsWith("light.") && _a(t) ? pc : Math.min(pc, ic(t).length + 1), Vn = (t) => {
    const e = re().opts[t] || {}, a = uc(t), o = Number(e.h) || (e.tall ? 5 : Pu[t] || fc);
    return Math.max(1, Math.min(a, o));
  }, fc = 2, Hu = 90, Nu = 56, Ta = (t) => {
    var e;
    return cc[t] || (t.startsWith("room:") ? ((e = Je.find((a) => "room:" + a.id === t)) == null ? void 0 : e.name) || "Area" : bt(t));
  }, Ou = 128;
  let da = !1, Qt = null, Qe = null, _s = !1, wn = /* @__PURE__ */ new Map(), vi = 0, tn = 0;
  const yo = ["title", "sums"], en = (t) => {
    const e = Math.max(1, Math.floor((t + de) / (Tu + de)));
    return { n: e, w: Math.max(1, Math.min(Lu, Math.floor((t - (e - 1) * de) / e))) };
  }, Cs = () => Jo(Je), Iu = () => {
    var e;
    const t = new Set(((e = mt.home) == null ? void 0 : e.areasOff) || []);
    return Cs().filter((a) => !t.has(a.id)).map((a) => "room:" + a.id);
  };
  function Fu() {
    const t = Iu();
    return {
      cells: {},
      spans: { favs: 2 },
      hidden: Object.keys(cc).filter((e) => {
        var a, o;
        return !["title", ...((a = mt.home) == null ? void 0 : a.sums) === !1 ? [] : ["sums"], ...((o = mt.home) == null ? void 0 : o.favs) === !1 ? [] : ["favs"], ...Vu() ? ["wx"] : [], ...yc() ? ["energy"] : []].includes(e);
      }),
      opts: { favs: { h: 5 }, ...Object.fromEntries(t.map((e) => [e, { h: 5 }])) },
      tiles: t,
      known: Wo,
      areasOff: []
    };
  }
  const re = () => C ? Fu() : As(), As = () => {
    let t = { cells: {}, spans: {}, hidden: [], opts: {}, ...mt.dash || {} };
    t.sumsOff && (t = { ...t, hidden: [...t.hidden, "sums"] });
    const e = Wo.filter((a) => !(t.known || []).includes(a) && !t.hidden.includes(a));
    return e.length ? { ...t, hidden: [...t.hidden, ...e] } : t;
  };
  function vn(t) {
    C || (mt = { ...mt, dash: { ...t, known: Wo } }, We());
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
      ...Wo.map((e) => [e, Xa[e], ss[e] || 1]),
      ...[...H.querySelectorAll(".tfDashTiles > [data-k]")].map((e) => [e.dataset.k, e, 1, !0])
    ].filter(([, e]) => e == null ? void 0 : e.isConnected).map(([e, a, o, i = !1]) => ({ key: e, el: a, span: o, tile: i }));
  }
  const hc = (t, e, a) => {
    var o;
    if (t.span === "full") return e;
    if (t.span === "areas") {
      const i = 2 * a + de;
      t.el.style.setProperty("--area-open", i + "px");
      const l = Math.ceil((i + Math.max(0, In().length - 1) * (Ou + de) + de) / (a + de));
      return Math.max(Math.min(e, 2), Math.min(l, e - (((o = re().cells.areas) == null ? void 0 : o.col) || 0)));
    }
    return Math.min(e, re().spans[t.key] ?? t.span);
  }, mc = (t) => Vn(t.key);
  function gc(t, e, a = null) {
    const o = re().cells, i = t.every((u) => !o[u.key] || o[u.key].col + u.cols <= e), l = (u) => o[u.key] || { row: 1e9, col: 0 };
    return (() => {
      const u = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map(), y = (T, P, S, Y) => {
        for (let B = P; B < P + Y; B++) for (let rt = T; rt < T + S; rt++) if (u.has(rt + "," + B)) return !1;
        return !0;
      }, _ = (T, P, S) => {
        for (let Y = S; Y < S + T.rows; Y++) for (let B = P; B < P + T.cols; B++) u.add(B + "," + Y);
        f.set(T.key, { col: P, row: S, cols: T.cols, rows: T.rows });
      }, x = (T, P, S) => {
        for (P = Math.max(0, Math.min(e - T.cols, P)), S = Math.max(0, S); !y(P, S, T.cols, T.rows); ) S++;
        _(T, P, S);
      }, R = (T) => {
        for (let P = 0; ; P++) for (let S = 0; S <= e - T.cols; S++) if (y(S, P, T.cols, T.rows)) {
          _(T, S, P);
          return;
        }
      };
      a && x(a, Qt.col, Qt.row);
      const M = t.filter((T) => T !== a), E = (T, P) => l(T).row - l(P).row || l(T).col - l(P).col;
      return i ? (M.filter((T) => o[T.key]).sort(E).forEach((T) => x(T, o[T.key].col, o[T.key].row)), M.filter((T) => !o[T.key]).forEach(R), f) : ([...M].sort(E).forEach(R), f);
    })();
  }
  function qu(t, e) {
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
  function Ts() {
    const t = re(), e = new Set(t.hidden), a = yn().filter((c) => !yo.includes(c.key));
    let o = wn;
    if (!o.size) {
      const c = t.pegs || 4, u = a.filter((f) => !e.has(f.key));
      u.forEach((f) => {
        f.cols = hc(f, c, Cr), f.rows = mc(f) ?? fc;
      }), o = gc(u, c);
    }
    const i = (c) => !e.has(c.key) && o.get(c.key) || { row: 1e9, col: 0 };
    a.sort((c, u) => i(c).row - i(u).row || i(c).col - i(u).col);
    const l = (t.phone || []).map((c) => a.find((u) => u.key === c && !e.has(c))).filter(Boolean);
    return [...l, ...a.filter((c) => !l.includes(c))];
  }
  const Wu = () => {
    const t = Ts();
    t.forEach((e, a) => e.el.style.setProperty("--o", String(3 + a))), Ls([...yn().filter((e) => yo.includes(e.key)), ...t].map((e) => e.el));
  };
  function Ls(t) {
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
  const zn = (t, e) => vn({ ...t, cells: e, pegs: en(H.clientWidth).n });
  function Ds(t) {
    const e = H == null ? void 0 : H.querySelector('.tfAreas[data-k="areas"] .tfAreaGallery'), a = e == null ? void 0 : e.querySelector(".tfAreaPanel.active");
    if (!a || e.scrollWidth <= e.clientWidth) return;
    const o = e.getBoundingClientRect(), i = a.getBoundingClientRect(), l = i.right > o.right ? i.right - o.right : i.left < o.left ? i.left - o.left : 0;
    l && e.scrollBy({ left: l, behavior: t ? "smooth" : "auto" });
  }
  function Ie() {
    var Y;
    if (requestAnimationFrame(() => Ds(!1)), setTimeout(() => Ds(!1), 360), !w || !H) return;
    const t = H.clientWidth, e = t < 2 * Cr + de, a = g.classList.contains("tfDash");
    C && (da = !1), g.classList.toggle("tfOverview", C);
    const { n: o, w: i } = e ? { n: 2, w: Math.floor((t - de) / 2) } : en(t);
    Sa.classList.add("tfPegs"), Sa.style.setProperty("--peg-n", o), Sa.style.setProperty("--peg-w", i + "px");
    const l = new Set(re().hidden);
    Wo.forEach((B) => {
      var rt;
      return (rt = Xa[B]) == null ? void 0 : rt.classList.toggle("tfNotAdded", l.has(B) && !(Qt != null && Qt.fromTray && Qt.key === B));
    }), Qr(), g.classList.toggle("tfBoard", a), g.classList.toggle("tfEditing", a && da && !e);
    const c = p("dashEditNav");
    !a && Co && Xs(!1), c && C ? (c.hidden = !a, Co || (c.classList.remove("active"), c.setAttribute("aria-pressed", "false"), c.setAttribute("aria-label", "Edit Home page"), c.title = "Edit", c.innerHTML = Xi)) : c && (c.hidden = !a || e, c.classList.toggle("active", da), c.setAttribute("aria-pressed", String(da)), c.setAttribute("aria-label", da ? "Done editing" : "Edit custom dashboard"), c.title = da ? "Done" : "Edit", c.innerHTML = da ? Cp : Xi);
    const u = a ? yn() : [];
    if ((!a || !C) && H.querySelectorAll(":scope > :is(.hcFloor,.hcFloorBox)").forEach((B) => B.remove()), !a) {
      H.style.height = "", H.querySelectorAll(".tfBoardItem").forEach((B) => {
        B.classList.remove("tfBoardItem", "tfBoardHidden"), B.style.left = B.style.top = B.style.width = B.style.height = "";
      }), (Y = H.querySelector(".tfDash-act > .activityRows")) == null || Y.style.removeProperty("max-height"), Ps(!1), g.classList.contains("tfDash") && Wu(), Me();
      return;
    }
    if (C) {
      Uu(u, t, e);
      return;
    }
    H.style.setProperty("--peg-w", i + "px");
    const f = new Set(re().hidden), y = i + de;
    Qt != null && Qt.fromTray && f.delete(Qt.key), u.forEach((B) => B.el.classList.toggle("tfBoardHidden", f.has(B.key)));
    const _ = u.filter((B) => !f.has(B.key) && getComputedStyle(B.el).display !== "none");
    let x = 0;
    _.filter((B) => yo.includes(B.key)).forEach((B) => {
      B.el.classList.add("tfBoardItem"), Object.assign(B.el.style, { width: t + "px", height: "", left: "0px", top: x + "px" });
      const rt = B.key === "sums" && B.el.querySelector(".tfDash-bar"), Pt = rt ? rt.querySelectorAll(".activityRow").length : 0;
      rt && (rt.style.maxWidth = "none");
      for (let Et = 1; rt && Et <= Pt && (rt.style.setProperty("--bar-cols", String(Math.ceil(Pt / Et))), !(rt.offsetWidth <= t)); Et++)
        ;
      rt && (rt.style.maxWidth = ""), x += B.el.offsetHeight + de;
    }), tn = x;
    const R = _.filter((B) => !yo.includes(B.key));
    R.forEach((B) => {
      B.cols = hc(B, o, i), B.el.classList.add("tfBoardItem"), B.el.style.width = (B.cols === o ? t : B.cols * i + (B.cols - 1) * de) + "px", B.el.style.height = "", B.rows = mc(B) ?? Math.max(1, Math.ceil((B.el.offsetHeight + de - 6) / Wa));
    });
    const M = Qt && R.find((B) => B.key === Qt.key), E = e && Ts().map((B) => B.key), T = (B) => E.includes(B.key) ? E.indexOf(B.key) : -1, P = e ? qu([...R].sort((B, rt) => T(B) - T(rt)), o) : gc(R, o, M);
    P.forEach((B) => Object.assign(B, { x: B.cols === o ? 0 : B.col * y, y: tn + B.row * Wa, w: B.cols === o ? t : B.cols * i + (B.cols - 1) * de, h: B.rows * Wa - de })), R.forEach((B) => {
      const rt = P.get(B.key);
      B.el.style.height = rt.h + "px", B.el.dataset.rows = e && B.key === "wx" ? 5 : Vn(B.key), B.key === "areas" && B.el.querySelectorAll(".tfAreaPanel .tfRoomTile").forEach((Pt) => {
        Pt.dataset.rows = B.el.dataset.rows;
      }), B.el.toggleAttribute("data-narrow", !e && rt.cols === 1 && o > 1), B.el.dataset.cols = rt.cols, B.el.classList.contains("tfDac") && B.el.style.setProperty("--tf-dac-pad", rt.h - Hu + "px"), !(B === M && !Qt.fromTray) && (B.el.style.left = rt.x + "px", B.el.style.top = rt.y + "px");
    }), e || (wn = P), Ls([..._.filter((B) => yo.includes(B.key)), ...R.slice().sort((B, rt) => P.get(B.key).row - P.get(rt.key).row || P.get(B.key).col - P.get(rt.key).col)].map((B) => B.el)), [["favs", ".tfDash-favs"], ["act", ".tfDash-act"]].forEach(([B, rt]) => {
      const Pt = P.get(B), Et = Pt && H.querySelector(rt), zt = Et == null ? void 0 : Et.querySelector(":scope > .activityRows"), Te = Et == null ? void 0 : Et.querySelector(":scope > .activityHeader");
      if (!zt || !Te) return;
      const At = zt.getBoundingClientRect().top - Et.getBoundingClientRect().top, Bt = Pt.rows === 1 ? Pt.h : Math.floor(Pt.h - At - parseFloat(getComputedStyle(Et).paddingBottom)), Pe = Math.max(1, Math.floor(Bt / Nu));
      zt.style.setProperty("--fill-row", (Bt / Pe).toFixed(2) + "px"), zt.style.maxHeight = Bt + "px";
    }), vi = Math.max(0, ...[...P.values()].map((B) => B.row + B.rows));
    let S = tn + vi * Wa - de;
    S = Ps(da && !e, R, P, S, o, i), H.style.height = S + "px", requestAnimationFrame(() => g.classList.add("tfBoardReady")), u.forEach((B) => Rs.observe(B.el)), Vc(), Me();
  }
  const xo = { row: 337, nameGap: 16, sumsGap: 16, full: 1336, floorTop: 12, floorHead: 24, floorGap: 16 }, bc = { s: { w: 252, h: 136, rows: 2 }, m: { w: 252, h: 212, rows: 3 }, l: { w: 252, h: 288, rows: 4 } }, wc = () => {
    var t;
    return bc[(t = mt.home) == null ? void 0 : t.areaSize] ? mt.home.areaSize : window.innerWidth <= 620 ? "l" : "s";
  }, Es = () => {
    var t;
    return ["rows", "columns", "bento"].includes((t = mt.home) == null ? void 0 : t.areaLayout) ? mt.home.areaLayout : "bento";
  }, vc = () => {
    var t;
    return ((t = mt.home) == null ? void 0 : t.cardsAs) === "rows" ? "rows" : "stacked";
  }, ju = { byFloor: !0, bentoBoxes: !0, bentoMixed: !1, favsTitle: !1 }, yi = () => C ? ko("favsTitle") : mt.favsTitle !== !1, Vu = () => {
    var t;
    return !!((t = mt.home) != null && t.weather && Wt());
  }, yc = () => {
    var t;
    return !!((t = mt.home) != null && t.energy && (qa != null && qa.length));
  }, ko = (t) => {
    var e;
    return ((e = mt.home) == null ? void 0 : e[t]) ?? ju[t];
  };
  function zu() {
    var i;
    const t = Object.values(((i = d()) == null ? void 0 : i.floors) || {}), e = new Set(t.map((l) => l.floor_id)), a = t.map((l) => ({ id: l.floor_id, name: l.name, rooms: Je.filter((c) => c.floor === l.floor_id) })), o = Je.filter((l) => !e.has(l.floor));
    return o.length && a.push({ id: "", name: t.length ? "Other areas" : "", rooms: o }), a;
  }
  const xc = (t) => t.classList.toggle("hcMore", t.scrollHeight - t.scrollTop - t.clientHeight > 1);
  let ve = null, kc = [], Ar = /* @__PURE__ */ new Map();
  function Bs(t) {
    let e = H.querySelector(".hcHomeLand");
    if (!t) {
      e == null || e.remove();
      return;
    }
    e || (e = Object.assign(document.createElement("div"), { className: "tfBoardLand hcHomeLand" }), H.appendChild(e)), Object.assign(e.style, { left: t.x + "px", top: t.y + "px", width: t.w + "px", height: t.h + "px" });
  }
  function Gu(t) {
    if (!C || !Co || t.button !== 0 || H.clientWidth < 2 * Cr + de) return;
    const e = t.target.closest(".tfBoardItem"), a = e && yn().find((u) => u.el === e);
    if (!a || yo.includes(a.key) || h(a.key)) return;
    t.preventDefault();
    const o = H.getBoundingClientRect(), i = Ar.get(a.key);
    ve = { key: a.key, el: e, on: !1, x0: t.clientX, y0: t.clientY, left: i.x, top: i.y, order: [...kc] };
    const l = (u) => {
      const f = u.clientX - ve.x0, y = u.clientY - ve.y0;
      if (!ve.on && Math.hypot(f, y) < 5) return;
      ve.on || (ve.on = !0, e.classList.add("tfDragging"), Ge() || e.animate([{ scale: "1" }, { scale: "1.05" }, { scale: "1.02" }], { duration: 260, easing: "cubic-bezier(.2,1.35,.4,1)" })), Object.assign(e.style, { left: ve.left + f + "px", top: ve.top + y + "px" });
      const _ = u.clientX - o.left, x = u.clientY - o.top + H.scrollTop;
      let R = null, M = 1 / 0;
      if (Ar.forEach((S, Y) => {
        if (Y === a.key || !ve.order.includes(Y)) return;
        const B = Math.hypot(_ - (S.x + S.w / 2), x - (S.y + S.h / 2));
        B < M && (M = B, R = { key: Y, b: S });
      }), !R) return;
      const E = ve.order.filter((S) => S !== a.key), T = E.indexOf(R.key) + (_ > R.b.x + R.b.w / 2 ? 1 : 0), P = [...E.slice(0, T), a.key, ...E.slice(T)];
      P.join() !== ve.order.join() ? (ve.order = P, Ie()) : Bs(Ar.get(a.key));
    }, c = () => {
      removeEventListener("pointermove", l), removeEventListener("pointerup", c), removeEventListener("pointercancel", c);
      const u = ve;
      ve = null, e.classList.remove("tfDragging"), u.on && xa({ order: u.order }), Ie(), u.on && !Ge() && setTimeout(() => Bl(e), 340);
    };
    addEventListener("pointermove", l), addEventListener("pointerup", c), addEventListener("pointercancel", c);
  }
  function Uu(t, e, a) {
    var kd;
    const o = new Set(re().hidden);
    t.forEach((pt) => pt.el.classList.toggle("tfBoardHidden", o.has(pt.key)));
    const i = t.filter((pt) => !o.has(pt.key) && getComputedStyle(pt.el).display !== "none"), l = de, c = a ? { w: Math.floor((e - l) / 2) } : en(e), u = Math.min(e, xo.full);
    let f = 0;
    const y = Ti();
    g.classList.toggle("hcSumsFit", Bc()), g.classList.toggle("hcFavStrip", y);
    const _ = i.filter((pt) => yo.includes(pt.key) || y && pt.key === "favs");
    _.sort((pt, Ht) => ["title", "sums", "favs"].indexOf(pt.key) - ["title", "sums", "favs"].indexOf(Ht.key)), _.forEach((pt) => {
      pt.el.classList.add("tfBoardItem"), pt.el.toggleAttribute("data-narrow", !1), Object.assign(pt.el.style, { width: (pt.key === "title" ? e : u) + "px", height: "", left: "0px", top: f + "px" });
      const Ht = pt.key !== "title" && (pt.el.querySelector(".tfDash-bar>.activityRows") || pt.key === "favs" && pt.el.querySelector(":scope>.activityRows")), Se = Ht ? Ht.children.length : 0;
      if (Ht && (Ht.classList.remove("hcBarRows"), !a && Ht.scrollWidth > Ht.clientWidth + 1))
        for (let Yt = 2; Yt <= Se && (Ht.classList.add("hcBarRows"), Ht.style.setProperty("--bar-cols", String(Math.ceil(Se / Yt))), !(Ht.scrollWidth <= Ht.clientWidth + 1)); Yt++)
          ;
      f += pt.el.offsetHeight + (pt.key === "title" ? xo.nameGap : xo.sumsGap);
    });
    const x = ["favs", "wx", "energy"], R = (ve == null ? void 0 : ve.order) || ((kd = mt.home) == null ? void 0 : kd.order), M = R ? [...R.filter((pt) => x.includes(pt)), ...x.filter((pt) => !R.includes(pt))] : x;
    kc = M;
    const E = i.filter((pt) => x.includes(pt.key) && !(y && pt.key === "favs")).sort((pt, Ht) => M.indexOf(pt.key) - M.indexOf(Ht.key));
    Ar = /* @__PURE__ */ new Map();
    const T = (pt, Ht) => {
      if (Ar.set(pt.key, Ht), Object.assign(pt.el.style, { width: Ht.w + "px", height: Ht.h + "px" }), ve != null && ve.on && ve.key === pt.key) {
        Bs(Ht);
        return;
      }
      Object.assign(pt.el.style, { left: Ht.x + "px", top: Ht.y + "px" });
    }, P = a ? e : 2 * c.w + l, S = xo.row, Y = vc() === "stacked" && !a && E.length > 0;
    let B = 0, rt = 0, Pt = f;
    E.forEach((pt) => {
      pt.el.classList.add("tfBoardItem"), pt.el.dataset.rows = 5, pt.el.dataset.cols = 2, pt.el.toggleAttribute("data-narrow", !1), !Y && B && B + P > e && (f += rt + l, B = 0, rt = 0);
      let Ht = S;
      if ((a || pt.key === "favs") && (Object.assign(pt.el.style, { width: P + "px", height: "" }), Ht = pt.el.offsetHeight), Y) {
        T(pt, { x: 0, y: Pt, w: P, h: Ht }), Pt += Ht + l;
        return;
      }
      T(pt, { x: B, y: f, w: P, h: Ht }), B += P + l, rt = Math.max(rt, Ht);
    }), E.length && !Y && (f += rt + l);
    const Et = Y ? P + l : 0, zt = Y ? e - P - l : e, Te = wc(), At = bc[Te], Bt = Es(), Pe = ko("byFloor"), He = c.w, Ze = At.h, Ve = a ? 2 : Math.max(1, Math.floor((zt + l) / (He + l))), Qn = new Map(i.filter((pt) => h(pt.key)).map((pt) => [pt.key, pt])), Ba = (Pe ? zu() : [{ id: "", name: "", icon: "", rooms: Je }]).map((pt) => ({ ...pt, cards: pt.rooms.map((Ht) => Qn.get("room:" + Ht.id)).filter(Boolean) })).filter((pt) => pt.cards.length), Oi = Bt === "bento", Ii = Oi && ko("bentoMixed"), Yf = Oi && Pe && ko("bentoBoxes"), Zf = Bt === "columns" && Pe && !a, Lo = 12, yd = (pt) => pt.name ? xo.floorHead + xo.floorGap : 0, Or = (pt, Ht, Se) => {
      const Yt = /* @__PURE__ */ new Set(), ie = [];
      pt.cards.forEach((Xt, lo) => {
        const an = Ii && lo === 0 && Ht >= 2 && pt.cards.length > 1, qe = an ? 2 : 1, Do = an && !a ? 2 : 1;
        Xt.el.classList.add("tfBoardItem"), Xt.el.dataset.cols = qe, Xt.el.toggleAttribute("data-narrow", !1);
        for (let An = 0; ; An++) {
          const Tn = [...Array(Math.max(0, Ht - qe + 1)).keys()].find((Ir) => [...Array(qe).keys()].every((Ua) => [...Array(Do).keys()].every((Fi) => !Yt.has(An + Fi + "," + (Ir + Ua)))));
          if (Tn != null) {
            [...Array(qe).keys()].forEach((Ir) => [...Array(Do).keys()].forEach((Ua) => Yt.add(An + Ua + "," + (Tn + Ir)))), ie.push({ it: Xt, r: An, c: Tn, sc: qe, sr: Do });
            break;
          }
        }
      });
      const se = Math.max(0, ...ie.map((Xt) => Xt.r + Xt.sr));
      Oi && !a && ie.forEach((Xt) => {
        for (; Xt.r + Xt.sr < se && !Yt.has(Xt.r + Xt.sr + "," + Xt.c) && Xt.sc === 1; )
          Yt.add(Xt.r + Xt.sr + "," + Xt.c), Xt.sr++;
      }), ie.forEach((Xt) => {
        Xt.it.el.dataset.rows = Math.min(5, Xt.sr * At.rows), Object.assign(Xt.it.el.style, { width: Xt.sc * Se + (Xt.sc - 1) * l + "px", height: Xt.sr * Ze + (Xt.sr - 1) * l + "px" });
      });
      const Zt = [...Array(se)].map(() => Ze), me = [];
      let ka = yd(pt);
      return Zt.forEach((Xt, lo) => {
        me[lo] = ka, ka += Xt + l;
      }), { h: ka - (se ? l : 0), places: ie.map((Xt) => ({ it: Xt.it, x: Xt.c * (Se + l), y: me[Xt.r], w: Xt.sc * Se + (Xt.sc - 1) * l, h: Zt.slice(Xt.r, Xt.r + Xt.sr).reduce((lo, an) => lo + an, 0) + (Xt.sr - 1) * l })) };
    }, vl = new Map([...H.querySelectorAll(":scope > .hcFloor")].map((pt) => [pt.dataset.floor, pt])), yl = new Map([...H.querySelectorAll(":scope > .hcFloorBox")].map((pt) => [pt.dataset.floor, pt])), xd = [], Kf = (pt, Ht, Se, Yt) => {
      if (!pt.name) return;
      let ie = vl.get(pt.id);
      vl.delete(pt.id), ie || (ie = Object.assign(document.createElement("div"), { className: "hcFloor" }), ie.dataset.floor = pt.id, H.appendChild(ie)), ie.dataset.sig !== pt.name && (ie.dataset.sig = pt.name, ie.innerHTML = '<h2 class="hcFloorName">' + q(pt.name) + "</h2>"), Object.assign(ie.style, { left: Ht + "px", top: Se + "px", width: Yt + "px" }), xd.push(ie);
    }, Xf = (pt, Ht, Se, Yt, ie) => {
      let se = yl.get(pt.id);
      yl.delete(pt.id), se || (se = Object.assign(document.createElement("div"), { className: "hcFloorBox" }), se.dataset.floor = pt.id, se.setAttribute("aria-hidden", "true"), H.prepend(se)), Object.assign(se.style, { left: Ht + "px", top: Se + "px", width: Yt + "px", height: ie + "px" });
    }, $f = (pt) => parseFloat(getComputedStyle(pt.cards[0].el).paddingLeft) || 0, xl = (pt, Ht, Se, Yt, ie = 0) => {
      Kf(pt, Se + ie, Yt, (Ht.w ?? e) - ie), Ht.places.forEach((se) => T(se.it, { x: Se + se.x, y: Yt + se.y, w: se.w, h: se.h }));
    };
    if (Ba.length && E.length && !Y && (f += xo.floorTop), Zf) {
      let pt = 0, Ht = f;
      Ba.forEach((Se) => {
        const Yt = { ...Or(Se, 1, He), w: He };
        pt && pt + He > zt && (f = Ht + l + xo.floorTop, pt = 0), xl(Se, Yt, Et + pt, f), Ht = Math.max(Ht, f + Yt.h), pt += He + l;
      }), f = Ht + l;
    } else if (Yf) {
      let pt = [{ x0: 0, x1: zt, t: f }];
      const Ht = (Yt, ie) => Math.max(...pt.filter((se) => se.x1 > Yt && se.x0 < ie).map((se) => se.t)), Se = (Yt, ie, se) => {
        const Zt = [];
        pt.forEach((me) => {
          me.x1 <= Yt || me.x0 >= ie ? Zt.push(me) : (me.x0 < Yt && Zt.push({ x0: me.x0, x1: Yt, t: me.t }), me.x1 > ie && Zt.push({ x0: ie, x1: me.x1, t: me.t }));
        }), Zt.push({ x0: Yt, x1: ie, t: se }), pt = Zt.sort((me, ka) => me.x0 - ka.x0);
      };
      Ba.forEach((Yt) => {
        const ie = Yt.cards.length + (Ii && Yt.cards.length > 1 ? 3 : 0);
        let se = a ? 2 : Math.min(Ve, Math.max(Ii && Yt.cards.length > 1 ? 2 : 1, ie <= 3 ? ie : Math.ceil(ie / 2)));
        for (; !a && se > 1 && se * He + (se - 1) * l + 2 * Lo > zt; ) se--;
        let Zt = null;
        for (let qe = se; qe >= (a ? se : 1); qe--) {
          const Do = Math.min(He, Math.floor((zt - 2 * Lo - (qe - 1) * l) / qe)), An = { ...Or(Yt, qe, Do), w: qe * Do + (qe - 1) * l }, Tn = An.w + 2 * Lo, Ir = An.h + 2 * Lo;
          pt.map((Ua) => Ua.x0).filter((Ua) => Ua + Tn <= zt + 0.5).forEach((Ua) => {
            const Fi = Ht(Ua, Ua + Tn);
            (!Zt || Fi < Zt.t - 0.5) && (Zt = { cc: qe, inner: Do, bw: Tn, h: Ir, t: Fi, x: Ua });
          });
        }
        if (!Zt) {
          const qe = Math.min(He, zt - 2 * Lo), Do = Or(Yt, 1, qe);
          Zt = { cc: 1, inner: qe, bw: qe + 2 * Lo, h: Do.h + 2 * Lo, t: Ht(0, zt), x: 0 };
        }
        const me = { ...Or(Yt, Zt.cc, Zt.inner), w: Zt.cc * Zt.inner + (Zt.cc - 1) * l }, ka = Zt.bw, Xt = Zt.h, lo = Zt.x, an = Zt.t;
        Xf(Yt, Et + lo, an, ka, Xt), xl(Yt, me, Et + lo + Lo, an + Lo, $f(Yt)), Se(lo, Math.min(zt, lo + ka + l), an + Xt + l);
      }), f = Math.max(...pt.map((Yt) => Yt.t));
    } else {
      const pt = (Ht) => {
        var se;
        if (!((se = mt.home) != null && se.fitTogether) || a) return Ve;
        const Se = Y ? Pt - l - f : null, Yt = (Zt) => {
          const me = Ht.cards.length + (Ii && Ht.cards.length > 1 && Zt >= 2 ? 3 : 0), ka = Math.ceil(me / Zt);
          return { holes: ka * Zt - me, rows: ka, h: yd(Ht) + ka * Ze + (ka - 1) * l, w: Zt * He + (Zt - 1) * l };
        }, ie = (Zt) => Zt.holes === 0 || Oi && Zt.holes === 1 && Zt.rows > 1;
        for (let Zt = 1; Zt <= Ve; Zt++) {
          const me = Yt(Zt);
          if (ie(me) && me.h <= (Se ?? me.w)) return Zt;
        }
        for (let Zt = 1; Zt <= Ve; Zt++) {
          const me = Yt(Zt);
          if (me.h <= (Se ?? me.w)) return Zt;
        }
        return Ve;
      };
      Ba.forEach((Ht, Se) => {
        Se && (f += xo.floorTop);
        const Yt = Or(Ht, pt(Ht), He);
        xl(Ht, { ...Yt, w: zt }, Et, f), f += Yt.h + l;
      });
    }
    Y && (f = Math.max(f, Pt)), vl.forEach((pt) => pt.remove()), yl.forEach((pt) => pt.remove()), ve != null && ve.on || Bs(null), H.style.height = Math.max(0, f - l) + "px", Ls([..._.map((pt) => pt.el), ...E.map((pt) => pt.el), ...xd, ...Ba.flatMap((pt) => pt.cards.map((Ht) => Ht.el))]), Ps(!1), t.forEach((pt) => [...pt.el.children].forEach((Ht) => Ht.toggleAttribute("inert", Co)));
    const kl = H.querySelector(".tfDash-favs>.activityRows");
    kl && (kl.classList.toggle("hcFadeList", !y), xc(kl)), requestAnimationFrame(() => g.classList.add("tfBoardReady")), t.forEach((pt) => Rs.observe(pt.el)), Me();
  }
  const xi = () => {
    _s || (_s = !0, requestAnimationFrame(() => {
      _s = !1, Ie();
    }));
  }, Rs = new ResizeObserver(() => {
    Qt || xi();
  });
  function Yu(t, e, a) {
    const o = a + de, i = t * a + (t - 1) * de, l = e * Wa - de, c = de / 2, u = o / Math.max(1, Math.round(o / (Wa / 4))), f = Wa / 4, y = 6;
    let _ = "";
    for (let x = 0; x <= t; x++) for (let R = 0; R <= e; R++) {
      const M = x * o - c, E = R * Wa - c;
      _ += "M" + (M - y) + " " + E + "H" + (M + y) + "M" + M + " " + (E - y) + "V" + (E + y);
    }
    return '<svg width="' + i + '" height="' + l + '" viewBox="0 0 ' + i + " " + l + '"><defs><pattern id="tfGridDots" patternUnits="userSpaceOnUse" x="' + -c + '" y="' + -c + '" width="' + u.toFixed(3) + '" height="' + f + '"><circle cx="0" cy="0" r="1.4"></circle><circle cx="' + u.toFixed(3) + '" cy="0" r="1.4"></circle><circle cx="0" cy="' + f + '" r="1.4"></circle><circle cx="' + u.toFixed(3) + '" cy="' + f + '" r="1.4"></circle></pattern></defs><rect class="tfGridDots" x="' + -c + '" y="' + -c + '" width="' + (i + de) + '" height="' + (l + de) + '" fill="url(#tfGridDots)"></rect><path class="tfGridCross" d="' + _ + '"></path></svg>';
  }
  function Ps(t, e = [], a = /* @__PURE__ */ new Map(), o = 0, i = 1, l = Cr) {
    H.querySelectorAll(".tfEditChips").forEach((_) => {
      (!t || !_.closest(".tfBoardItem")) && _.remove();
    }), H.querySelectorAll(".tfFavHides").forEach((_) => _.remove()), H.querySelectorAll(".tfBoardItem").forEach((_) => [..._.children].forEach((x) => {
      x.classList.contains("tfEditChips") || x.toggleAttribute("inert", t);
    }));
    let c = H.querySelector(".tfBoardCells"), u = H.querySelector(".tfBoardLand");
    if (!t)
      return c == null || c.remove(), u == null || u.remove(), no(), o;
    const f = vi + Eu;
    if (c || (c = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), c.setAttribute("aria-hidden", "true"), H.prepend(c)), c.style.top = tn + "px", c.dataset.size !== i + "x" + f + "x" + l && (c.dataset.size = i + "x" + f + "x" + l, c.innerHTML = Yu(i, f, l)), o = Math.max(o, tn + f * Wa - de), e.forEach((_) => {
      const x = _.el;
      !x || x.querySelector(":scope > .tfEditChips") || x.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + zr + '</span><button class="tfEditChip" type="button" data-board-more="' + q(_.key) + '" aria-label="' + q(Ta(_.key)) + ' options" aria-haspopup="menu">' + P0 + "</button></div>");
    }), Qt && a.has(Qt.key)) {
      u || (u = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), H.appendChild(u));
      const _ = a.get(Qt.key);
      Object.assign(u.style, { left: _.x + "px", top: _.y + "px", width: _.w + "px", height: _.h + "px" });
    } else u == null || u.remove();
    const y = H.querySelector(".tfDash-favs.tfBoardItem:not(.tfBoardHidden)");
    if (y) {
      const _ = y.getBoundingClientRect();
      y.insertAdjacentHTML("beforeend", '<div class="tfFavHides">' + [...y.querySelectorAll('[data-k^="fav:"]')].map((x) => {
        const R = x.getBoundingClientRect(), M = x.dataset.k.slice(4);
        return '<button class="tfFavHide" type="button" data-fav-hide="' + q(M) + '" aria-label="Hide ' + q(bt(M)) + ' from the dashboard" style="left:' + Math.round(R.right - _.left - 42) + "px;top:" + Math.round(R.top - _.top + (R.height - 32) / 2) + 'px">' + Sp + "</button>";
      }).join("") + "</div>");
    }
    return o;
  }
  let Hs = "";
  function Ns(t) {
    da = t, t || (Qt = null, Mo = So = !1, no()), Ie(), t ? (Hs = JSON.stringify(mt), Yn(Ut, "Edit custom dashboard", null)) : Hs && JSON.stringify(mt) !== Hs && La("Changes saved");
  }
  function Zu(t, e) {
    var P, S;
    no();
    const a = wn.get(t), { n: o } = en(H.clientWidth), i = re(), l = i.spans[t] ?? (h(t) ? 1 : 2);
    if (!a) return;
    const c = a.cols >= o, u = (Y, B, rt) => '<button type="button" role="menuitem" data-board-act="' + Y + '"' + (rt ? " disabled" : "") + ">" + B + "</button>", f = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    f.setAttribute("role", "menu"), f.setAttribute("aria-label", Ta(t) + " options");
    const y = H.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]'), _ = uc(t), x = Vn(t), R = '<div class="tfHeight" role="group" aria-label="Height"><span class="tfHeightLabel" aria-hidden="true">Height</span><div class="tfHeightTabs">' + dc.map((Y, B) => '<button type="button" role="menuitemradio" aria-checked="' + (B + 1 === x) + '" aria-label="' + Y + ", " + (B + 1) + (B ? " rows" : " row") + '" data-board-act="h:' + (B + 1) + '"' + (B < _ ? "" : " disabled") + ">" + Y + "</button>").join("") + "</div></div>", M = Bu.includes(t) || h(t) ? '<div class="tfHeight tfWidth" role="group" aria-label="Width"><span class="tfHeightLabel" aria-hidden="true">Width</span><div class="tfHeightTabs">' + Ru.map((Y, B) => '<button type="button" role="menuitemradio" aria-checked="' + (B + 1 === Math.min(l, o)) + '" aria-label="' + Y + ", " + (B + 1) + (B ? " columns" : " column") + '" data-board-act="w:' + (B + 1) + '"' + (B < o ? "" : " disabled") + ">" + Y + "</button>").join("") + "</div></div>" : "", E = t === "radar" ? '<div class="tfHeight tfSource" role="group" aria-label="Source"><span class="tfHeightLabel" aria-hidden="true">Source</span><div class="tfSourceList">' + Jr().map(([Y, B]) => '<button type="button" role="menuitemradio" aria-checked="' + (Y === fr()) + '" data-board-act="src:' + q(Y) + '">' + q(B) + "</button>").join("") + "</div></div>" : "";
    f.innerHTML = R + M + E + (t === "energy" ? u("graph", (((P = i.opts.energy) == null ? void 0 : P.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + u("left", "Move left", c || a.col === 0) + u("right", "Move right", c || a.col + a.cols >= o) + u("up", "Move up", a.row <= 0) + u("down", "Move down") + (y ? u("remove", "Remove") : u("hide", "Hide")), H.appendChild(f);
    const T = Math.min(a.x + a.w - f.offsetWidth, H.clientWidth - f.offsetWidth);
    Object.assign(f.style, { left: Math.max(0, T) + "px", top: a.y + 28 + "px" }), Qe = { key: t, menu: f, opener: e }, (S = f.querySelector("button:not([disabled])")) == null || S.focus();
  }
  function no(t) {
    if (!Qe) return;
    const { menu: e, opener: a } = Qe;
    Qe = null, e.remove(), t && (a == null || a.focus());
  }
  const xn = () => Object.fromEntries([...wn].map(([t, e]) => [t, { col: e.col, row: e.row }]));
  function Ku(t, e) {
    var u, f, y;
    if (e === "remove") {
      no(), Xu(t);
      return;
    }
    const a = mt, o = re(), i = xn(), l = i[t] || { col: 0, row: 0 };
    e.startsWith("w:") && (o.spans = { ...o.spans, [t]: e === "w:full" ? "full" : Number(e.slice(2)) }), e.startsWith("h:") && (o.opts = { ...o.opts, [t]: { ...o.opts[t] || {}, h: Number(e.slice(2)), tall: void 0 } }), e.startsWith("src:") && (o.opts = { ...o.opts, radar: { ...o.opts.radar || {}, source: e.slice(4) } }), e === "graph" && (o.opts = { ...o.opts, energy: { ...o.opts.energy || {}, graph: (((u = o.opts.energy) == null ? void 0 : u.graph) || "above") === "above" ? "below" : "above" } }), e === "left" && (i[t] = { ...l, col: l.col - 1 }), e === "right" && (i[t] = { ...l, col: l.col + 1 }), e === "up" && (i[t] = { ...l, row: l.row - 1 }), e === "down" && (i[t] = { ...l, row: l.row + 1 }), e === "hide" && (o.hidden = [.../* @__PURE__ */ new Set([...o.hidden, t])]), ["left", "right", "up", "down"].includes(e) && (Qt = { key: t, col: i[t].col, row: i[t].row }), zn(o, i), Qt && (Ie(), Qt = null, zn(re(), xn()));
    const c = /^[hw]:/.test(e) && !Ge() && (Qe == null ? void 0 : Qe.menu.querySelector('[data-board-act="' + CSS.escape(e) + '"]'));
    if (c) {
      const _ = Qe;
      c.parentElement.querySelectorAll("[aria-checked]").forEach((x) => x.setAttribute("aria-checked", String(x === c))), setTimeout(() => {
        Qe === _ && no();
      }, _e.tabs.dur);
    } else no();
    e === "graph" && (Ma.delete("dash:energy"), Be()), e.startsWith("src:") && ((f = ke == null ? void 0 : ke.get("radar")) == null || f.refresh(), xe == null || xe.refresh()), e.startsWith("h:") && t.includes(".") && Be(), Ie(), e !== "hide" ? (y = H.querySelector('[data-board-more="' + CSS.escape(t) + '"]')) == null || y.focus() : La(Ta(t) + " hidden", Ai(a));
  }
  const Mc = (t) => {
    var e;
    return Wo.includes(t) && !(((e = mt.dash) == null ? void 0 : e.cells) || {})[t] ? " added" : " put back";
  };
  function Os(t) {
    const e = re(), a = Ta(t) + Mc(t);
    vn({ ...e, hidden: e.hidden.filter((o) => o !== t) }), Ie(), La(a);
  }
  const ki = () => re().tiles || [...H.querySelectorAll(".tfDashTiles > [data-k]")].map((t) => t.dataset.k).filter((t) => !re().hidden.includes(t));
  function Sc(t, e) {
    const a = re();
    zn({ ...a, tiles: t, hidden: a.hidden.filter((o) => !o.includes(".")) }, e), Be(), Me();
  }
  const _c = (t) => {
    Sc([...ki().filter((e) => e !== t), t], xn()), La(Ta(t) + " added"), tf(t);
  }, Xu = (t) => {
    const e = mt, a = xn();
    delete a[t], Sc(ki().filter((o) => o !== t), a), La(Ta(t) + " removed", Ai(e));
  };
  let Is = 0;
  function La(t, e = null) {
    var c;
    const a = p("toast");
    if (!a) return;
    if (dm(a, t), e) {
      const u = Object.assign(document.createElement("button"), { type: "button", className: "toastAction", textContent: "Undo" });
      u.addEventListener("click", () => {
        clearTimeout(Is), a.classList.remove("show", "withAction"), e();
      }), a.appendChild(u);
    }
    const o = g.getBoundingClientRect(), i = (c = n.querySelector(".bottomNav")) == null ? void 0 : c.getBoundingClientRect(), l = Ut.classList.contains("open") && !ro ? Math.min(o.right, Ut.getBoundingClientRect().left) : o.right;
    a.style.left = (o.left + l) / 2 + "px", a.style.bottom = (i != null && i.height ? window.innerHeight - i.top + 12 : 26) + "px", a.classList.add("tfToast", "show"), a.classList.toggle("withAction", !!e), pm(a), clearTimeout(Is), Is = setTimeout(() => a.classList.remove("show", "withAction"), e ? 5e3 : _e.confirm.stay);
  }
  const $u = 700, Ju = 1e3, pa = Object.assign(document.createElement("div"), { className: "tfTooltip", hidden: !0 });
  pa.setAttribute("role", "tooltip"), pa.setAttribute("aria-hidden", "true"), g.appendChild(pa);
  let Mi = null, Tr = 0, Gn = 0, Cc = -1 / 0;
  const Fs = (t) => {
    if (t.nodeType !== 1) return !1;
    const e = getComputedStyle(t);
    return e.textOverflow === "ellipsis" && t.scrollWidth > t.clientWidth + 1 || e.webkitLineClamp !== "none" && t.scrollHeight > t.clientHeight + 1;
  }, Qu = (t) => {
    for (let e = t; e && e !== g; e = e.parentElement) if (Fs(e)) return e;
    return null;
  };
  function Ac(t, e) {
    clearTimeout(Tr), clearTimeout(Gn);
    const a = () => {
      if (!t.isConnected) return;
      Mi = t, pa.textContent = e, pa.hidden = !1;
      const o = t.getBoundingClientRect(), i = pa.getBoundingClientRect(), l = o.top - i.height - 8 >= 8 ? o.top - i.height - 8 : o.bottom + 8;
      pa.style.left = Math.max(8, Math.min(window.innerWidth - i.width - 8, o.left + o.width / 2 - i.width / 2)) + "px", pa.style.top = l + "px";
    };
    !pa.hidden || performance.now() - Cc < Ju ? a() : Tr = setTimeout(a, $u);
  }
  function Si() {
    clearTimeout(Tr), clearTimeout(Gn), pa.hidden || (Cc = performance.now()), pa.hidden = !0, Mi = null;
  }
  n.addEventListener("pointerover", (t) => {
    if (t.pointerType === "touch") return;
    if (pa.contains(t.target)) {
      clearTimeout(Gn);
      return;
    }
    const e = Qu(t.target);
    if (e && Kt.names === "scroll" && e.matches(_i)) {
      qs(e);
      return;
    }
    if (e) {
      e !== Mi ? Ac(e, e.textContent.trim()) : clearTimeout(Gn);
      return;
    }
    clearTimeout(Tr), clearTimeout(Gn), Gn = setTimeout(Si, 120);
  }), n.addEventListener("focusin", (t) => {
    var o;
    const e = t.target;
    if (!((o = e.matches) != null && o.call(e, ":focus-visible"))) return;
    let a = [e, ...e.querySelectorAll("*")].filter(Fs);
    Kt.names === "scroll" && (a.filter((i) => i.matches(_i)).forEach(qs), a = a.filter((i) => !i.matches(_i))), a.length && Ac(e, a.map((i) => i.textContent.trim()).join(" · "));
  }), n.addEventListener("focusout", (t) => {
    t.target === Mi && Si();
  }), n.addEventListener("keydown", (t) => {
    t.key === "Escape" && !pa.hidden && (t.stopPropagation(), Si());
  }, !0), window.addEventListener("scroll", () => {
    (!pa.hidden || Tr) && Si();
  }, { capture: !0, passive: !0 });
  const _i = ".activityRowName,.activityRowMeta", Ci = /* @__PURE__ */ new WeakSet();
  function qs(t) {
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
  const Tc = new IntersectionObserver((t) => t.forEach((e) => {
    e.isIntersecting && !e.target.closest("[inert]") && (Tc.unobserve(e.target), qs(e.target));
  }), { threshold: 1 });
  let Ws = !1;
  new MutationObserver(() => {
    Ws || Kt.names !== "scroll" || (Ws = !0, setTimeout(() => {
      Ws = !1, n.querySelectorAll(_i).forEach((t) => {
        !t.dataset.glided && Fs(t) && (t.dataset.glided = "1", Tc.observe(t));
      });
    }, 300));
  }).observe(n, { childList: !0, subtree: !0 });
  const Ai = (t) => () => {
    mt = t, We(), Be(), Ie(), Me();
  };
  function tf(t) {
    const e = () => H.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]');
    setTimeout(() => {
      var c;
      const a = e();
      if (!a) return;
      const o = (c = window.matchMedia) == null ? void 0 : c.call(window, "(prefers-reduced-motion: reduce)").matches, i = a.getBoundingClientRect();
      (i.top < 0 || i.bottom > window.innerHeight) && a.scrollIntoView({ behavior: o ? "auto" : "smooth", block: "center" });
      const l = (u) => "0 0 0 4px color-mix(in srgb,var(--primary) " + u + "%,transparent),0 0 24px color-mix(in srgb,var(--primary) " + u + "%,transparent)";
      a.animate([{ boxShadow: l(55) }, { boxShadow: l(0) }], { duration: 1500, easing: o ? "steps(1, end)" : "ease-out" });
    }, ef(t) ? 260 : 0);
  }
  function ef(t) {
    const e = wn.get(t);
    if (!e || !Ut.classList.contains("open") || ro) return !1;
    const { n: a, w: o } = en(H.clientWidth), i = Ut.getBoundingClientRect().left - H.getBoundingClientRect().left, l = (f) => f * (o + de) + e.cols * o + (e.cols - 1) * de <= i;
    if (l(e.col)) return !1;
    const c = /* @__PURE__ */ new Set();
    wn.forEach((f, y) => {
      if (y !== t) for (let _ = f.row; _ < f.row + f.rows; _++) for (let x = f.col; x < f.col + f.cols; x++) c.add(x + "," + _);
    });
    const u = (f, y) => {
      for (let _ = y; _ < y + e.rows; _++) for (let x = f; x < f + e.cols; x++) if (c.has(x + "," + _)) return !1;
      return !0;
    };
    for (let f = 0; f <= vi; f++) for (let y = 0; y + e.cols <= a && l(y); y++)
      if (u(y, f))
        return zn(re(), { ...xn(), [t]: { col: y, row: f } }), Ie(), !0;
    return !1;
  }
  const Lc = /^(light|switch|cover|climate|fan|lock|valve|media_player|humidifier|vacuum|scene|script|alarm_control_panel|water_heater|input_boolean)\./, Dc = [["page", "Page"], ["cards", "Cards"], ["areas", "Areas"], ["favs", "Favourites"]];
  let Un = "page";
  const af = (t, e) => '<section class="hcRowsCard hcTrayList">' + t.map(([a, o]) => '<button class="hcRow hcConfigRow" type="button" ' + e + '="' + a + '"><span class="hcRowText"><span class="hcRowName">' + q(o) + '</span></span><span class="hcRowEnd">' + Vl + "</span></button>").join("") + "</section>", Yn = (t, e, a, o) => {
    t.classList.toggle("hcTrayIn", !!a), t.querySelector(".tfTrayHead .activityTitle").textContent = a ? o : e, t.querySelector(".tfTrayInner").scrollTop = 0;
  }, of = '<button class="back hcTrayBack" type="button" data-tray-back aria-label="Back">' + ql + "</button>", nf = (t) => t.matches('[data-tray="welcome"],[data-tray="phone"]') ? "page" : t.querySelector("[data-room-add]") ? "areas" : t.querySelector('[data-tray="favs"]') ? "favs" : "cards";
  function js(t = !1) {
    const e = Ut.querySelector(".tfTrayInner"), a = Ut.querySelector(".hcTrayTabs"), o = a.querySelector(".rubberIndicator");
    let i = !0;
    e.querySelectorAll(":scope>.tfTraySection").forEach((c) => {
      c.hidden = nf(c) !== Un, c.classList.toggle("hcFirst", !c.hidden && i), c.hidden || (i = !1);
    }), a.querySelectorAll("[data-tray-tab]").forEach((c) => {
      const u = c.dataset.trayTab === Un;
      c.classList.toggle("active", u), c.setAttribute("aria-selected", String(u));
    });
    const l = a.querySelector(".tab.active");
    l != null && l.offsetWidth && (o.style.transition = "none", t ? ts(o, o.offsetLeft, o.offsetWidth, l.offsetLeft, l.offsetWidth) : (o.style.left = l.offsetLeft + "px", o.style.width = l.offsetWidth + "px"));
  }
  const Ut = Object.assign(document.createElement("aside"), { className: "tfEditTray" });
  Ut.setAttribute("aria-label", "Edit custom dashboard"), Ut.innerHTML = '<button class="tfTrayTuck" type="button" data-tray-tuck></button><div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit custom dashboard</div><button class="pill" type="button" data-tray-done>Done</button></div><div class="tabs rubberTabs hcTrayTabs" role="tablist" aria-label="Edit custom dashboard"><div class="rubberIndicator" aria-hidden="true"></div>' + Dc.map(([t, e], a) => '<button class="tab segBtn' + (a ? "" : " active") + '" type="button" role="tab" aria-selected="' + !a + '" data-tray-tab="' + t + '">' + e + "</button>").join("") + '</div><section class="tfTraySection" data-tray="welcome"></section><section class="tfTraySection" data-tray="cards"></section><section class="tfTraySection" data-tray="weather"></section><section class="tfTraySection"><div class="sectionLabel">Tiles</div><p class="tfTrayNote">Remove a tile from its ⋯.</p><button class="pill tfTrayAdd hcAddBtn" type="button" data-tile-add aria-expanded="false">' + Ki + '<span>Add tile</span></button><div class="tfTrayPick" data-pick="tiles" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-tile-search><ul class="tfTrayList" data-tray="tilepick"></ul></div></section><section class="tfTraySection"><div class="sectionLabel">Areas</div><p class="tfTrayNote">Which areas the Areas card shows. Drag to change their order, here and on Home.</p><button class="pill tfTrayAdd hcAddBtn" type="button" data-room-add aria-expanded="false">' + Ki + '<span>Add area</span></button><ul class="tfTrayList" data-tray="roompick" hidden></ul><ul class="tfTrayList hcHeList" data-tray="areas"></ul></section><section class="tfTraySection" data-tray="phone"></section><section class="tfTraySection"><div class="sectionLabel">Favourites</div><ul class="tfTrayList" data-tray="favs"></ul><button class="pill tfTrayAdd hcAddBtn" type="button" data-fav-add aria-expanded="false">' + Ki + '<span>Add favourite</span></button><div class="tfTrayPick" data-pick="favs" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-fav-search><ul class="tfTrayList" data-tray="pick"></ul></div><div class="toggleRow tfTraySuggest" data-tray="favtitle"></div><div class="toggleRow tfTraySuggest" data-tray="suggest"></div></section></div>', g.appendChild(Ut);
  let ro = !1, Mo = !1, So = !1, Lr = !1, ta = null, _o = !1;
  const Vs = {}, ja = (t, e) => {
    if (Vs[t] === e) return;
    Vs[t] = e;
    const a = Ut.querySelector('[data-tray="' + t + '"]');
    a.innerHTML = e, Qa(a);
  }, zs = (t, e) => '<span class="tfTrayName"><span class="activityRowName">' + q(bt(t)) + '</span><span class="activityRowMeta">' + q(e) + "</span></span>", rf = (t, e, a) => '<li class="tfTrayFav' + (e ? " off" : "") + '" data-tray-fav="' + q(t) + '"><span class="tfTrayGrip" aria-hidden="true">' + zr + '</span><span class="tfIcon"' + be(t, ga(t)) + "></span>" + zs(t, e ? "Hidden" + (Ct.get(t) ? " · " + Ct.get(t) : "") : Ct.get(t) || Ee(t)) + '<button class="tfTrayBtn" type="button" data-fav-eye="' + q(t) + '" aria-pressed="' + !e + '" aria-label="' + (e ? "Show " : "Hide ") + q(bt(t)) + ' on the dashboard">' + (e ? Sp : H0) + "</button>" + (a ? '<button class="tfTrayBtn" type="button" data-fav-remove="' + q(t) + '" aria-label="Remove ' + q(bt(t)) + ' from favourites">' + jl + "</button>" : "<span></span>") + "</li>";
  function Gs(t, e, a, o) {
    const i = t.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return Object.keys(k).filter((c) => e(c) && !a.has(c) && k[c].state !== "unavailable").filter((c) => {
      const u = (bt(c) + " " + (Ct.get(c) || "") + " " + c).toLowerCase();
      return i.every((f) => u.includes(f));
    }).sort((c, u) => (Ct.get(c) || "~").localeCompare(Ct.get(u) || "~") || bt(c).localeCompare(bt(u))).slice(0, 40).map((c) => '<li><button class="tfTrayPickItem" type="button" ' + o + '="' + q(c) + '"><span class="tfIcon"' + be(c, ga(c)) + "></span>" + zs(c, Ct.get(c) || "—") + "</button></li>").join("") || '<li class="tfTrayNote">Nothing matches.</li>';
  }
  const sf = "https://www.home-assistant.io/dashboards/", Ec = {
    welcome: ["Welcome message", "<p>Shows a <strong>greeting</strong> above your home's name: good morning, afternoon or evening, then your name.</p>"],
    weather: ["Weather", "<p>The forecast card: now, the next hours in a sentence and the week ahead. Its <strong>Now</strong> opens the Weather page.</p>"],
    energy: ["Energy today", "<p>What your home has used and made today, hour by hour, with <strong>Electricity</strong>, <strong>Solar</strong>, <strong>Gas</strong> and <strong>Water</strong> under it. From your Energy dashboard.</p>"],
    favs: ["Favourite entities", "<p>The devices you use most, at the top of Home.</p><ul><li><strong>Drag</strong> one to change the order</li><li>Press <strong>×</strong> to take it off</li></ul>"],
    suggest: ["Suggested entities", "<p>Fills Favourites with devices you often use, after your own. They change as you use your home.</p>"],
    sums: ["Summaries", "<p>Each summary sums up one kind of thing across your home, like <strong>Lights</strong>: how many are on.</p><ul><li>Switch one off to hide it</li><li><strong>Drag</strong> one to change the order</li></ul>"]
  }, he = Object.assign(document.createElement("aside"), { className: "tfEditTray hcHomeTray" });
  he.setAttribute("aria-label", "Edit Home page"), he.toggleAttribute("inert", !0);
  let Co = !1, Da = !1, Us = "", Ys = null, Zn = "page";
  function Zs(t, e) {
    const a = he.querySelector(".hcTrayTabs"), o = a == null ? void 0 : a.querySelector(".rubberIndicator"), i = a == null ? void 0 : a.querySelector(".tab.active");
    if (!(i != null && i.offsetWidth)) {
      requestAnimationFrame(() => {
        var l;
        return ((l = he.querySelector(".hcTrayTabs .tab.active")) == null ? void 0 : l.offsetWidth) && Zs(t, e);
      });
      return;
    }
    o.style.transition = "none", t && e ? ts(o, e.left, e.width, i.offsetLeft, i.offsetWidth) : (o.style.left = i.offsetLeft + "px", o.style.width = i.offsetWidth + "px");
  }
  const kn = (t) => '<button class="hcInfoBtn" type="button" data-info="' + t + '" aria-expanded="false" aria-label="About ' + q(Ec[t][0]) + '">' + _p + "</button>", ya = (t, e, a) => '<button class="switch' + (t ? " on" : "") + '" type="button" role="switch" aria-checked="' + t + '" aria-label="' + q(e) + '" ' + a + "></button>", Ks = (t) => '<button class="tfTrayBtn hcHeGrip" type="button" data-he-grip aria-label="Move ' + q(t) + '. Use the up and down arrows">' + zr + "</button>", Bc = () => {
    var t;
    return ((t = mt.home) == null ? void 0 : t.sumsWidth) === "fit";
  }, Ti = () => {
    var t;
    return ((t = mt.home) == null ? void 0 : t.favsAs) === "strip";
  }, Dr = (t, e, a, o) => '<div class="hcHeLine hcHeChoiceLine"><span class="activityRowName">' + t + '</span><div class="themeChoice hcHeChoice" role="group" aria-label="' + q(t) + '">' + o.map(([i, l]) => '<button class="wxLayoutBtn" type="button" ' + e + '="' + i + '" aria-pressed="' + (a === i) + '">' + l + "</button>").join("") + "</div></div>", Rc = () => ae(!0).filter((t) => jr[t.key]).map((t) => t.key);
  function Mn() {
    var f, y, _, x, R, M, E;
    if (!Co) return;
    const t = F(), e = (T) => '<li class="hcHeRow" data-he-id="' + q(T) + '">' + Ks(bt(T)) + '<span class="tfIcon"' + be(T, ga(T)) + "></span>" + zs(T, Ct.get(T) || Ee(T)) + '<button class="tfTrayBtn" type="button" data-he-remove="' + q(T) + '" aria-label="Take ' + q(bt(T)) + ' off Favourites">' + jl + "</button></li>", a = (T) => {
      const P = jr[T];
      return '<li class="hcHeRow hcHeSum" data-he-id="' + q(T) + '"' + (P.colour && Pn(P.colour) ? ' style="' + Pn(P.colour).slice(1) + '"' : "") + ">" + Ks(P.name) + '<span class="tfIcon"' + be("", P.icon, P.name) + '></span><span class="activityRowName">' + q(P.name) + "</span>" + ya(fe(T), P.name, 'data-he-sum="' + q(T) + '"') + "</li>";
    }, o = ((f = he.querySelector("[data-he-search]")) == null ? void 0 : f.value) || "", i = [["page", "Page"], ["favs", "Favourites"], ["sums", "Summaries"], ["areas", "Areas"]], l = new Set(((y = mt.home) == null ? void 0 : y.areasOff) || []), c = (T) => '<li class="hcHeRow" data-he-id="' + q(T.id) + '">' + Ks(T.name) + '<span class="tfIcon"><span class="tfAreaGlyph"' + be("area:" + T.id, T.icon || "mdi:texture-box", T.name) + '></span></span><span class="activityRowName">' + q(T.name) + "</span>" + ya(!l.has(T.id), "Show " + T.name + " on Home", 'data-he-area="' + q(T.id) + '"') + "</li>", u = {
      page: '<div class="hcHeLine"><span class="activityRowName">Welcome message</span>' + kn("welcome") + ya(Ss(), "Welcome message", "data-he-welcome") + "</div>" + // the weather card and Energy today, where the house has them
      (Wt() ? '<div class="hcHeLine"><span class="activityRowName">Weather</span>' + kn("weather") + ya(!!((_ = mt.home) != null && _.weather), "Weather", 'data-he-card="weather"') + "</div>" : "") + (qa != null && qa.length ? '<div class="hcHeLine"><span class="activityRowName">Energy today</span>' + kn("energy") + ya(!!((x = mt.home) != null && x.energy), "Energy today", 'data-he-card="energy"') + "</div>" : "") + Dr("Cards", "data-he-cards-as", vc(), [["stacked", "Stacked"], ["rows", "Rows"]]) + '<hr class="hcHeRule"><div class="hcHeLine"><span class="activityRowName">Group by floor</span>' + ya(ko("byFloor"), "Group by floor", 'data-he-flag="byFloor"') + "</div>" + Dr("Layout", "data-he-area-layout", Es(), [["rows", "Rows"], ["columns", "Columns"], ["bento", "Bento"]]) + (Es() === "bento" ? '<div class="hcHeLine"><span class="activityRowName">Floors as boxes</span>' + ya(ko("bentoBoxes"), "Floors as boxes", 'data-he-flag="bentoBoxes"') + '</div><div class="hcHeLine"><span class="activityRowName">Mixed sizes</span>' + ya(ko("bentoMixed"), "Mixed sizes", 'data-he-flag="bentoMixed"') + "</div>" : "") + Dr("Area cards", "data-he-area-size", wc(), [["s", "Small"], ["m", "Medium"], ["l", "Large"]]) + // Fit together (Matt, 17 Nov): the areas as a neat block, not spread over every column that fits
      '<div class="hcHeLine"><span class="activityRowName">Fit together</span>' + ya(!!((R = mt.home) != null && R.fitTogether), "Fit together", "data-he-fit") + "</div>",
      favs: '<div class="hcHeLine"><span class="activityRowName">Show favourites</span>' + ya(((M = mt.home) == null ? void 0 : M.favs) !== !1, "Show favourites", 'data-he-card="favs"') + '</div><hr class="hcHeRule"><div class="hcHeLabel"><span class="activityRowName">Favourite entities</span>' + kn("favs") + "</div>" + Dr("Show as", "data-he-favs-as", Ti() ? "strip" : "card", [["card", "Card"], ["strip", "Strip"]]) + (Ti() ? "" : '<div class="hcHeLine"><span class="activityRowName">Title</span>' + ya(ko("favsTitle"), "Title", 'data-he-flag="favsTitle"') + "</div>") + '<ul class="tfTrayList hcHeList" data-he-list="favs">' + (t.map(e).join("") || '<li class="tfTrayNote">No favourites yet.</li>') + '</ul><button class="pill tfTrayAdd hcAddBtn" type="button" data-he-add aria-expanded="' + Da + '">' + Ki + '<span>Add favourite</span></button><div class="tfTrayPick" data-he-pick' + (Da ? "" : " hidden") + '><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-he-search value="' + q(o) + '"><ul class="tfTrayList">' + (Da ? Gs(o, (T) => Lc.test(T), new Set(t), "data-he-pick-id") : "") + '</ul></div><hr class="hcHeRule"><div class="hcHeLine"><span class="activityRowName">Suggested entities</span>' + kn("suggest") + ya(ft(), "Suggested entities", "data-he-suggest") + "</div>",
      sums: '<div class="hcHeLine"><span class="activityRowName">Show summaries</span>' + kn("sums") + ya(((E = mt.home) == null ? void 0 : E.sums) !== !1, "Show summaries", 'data-he-card="sums"') + "</div>" + Dr("Width", "data-he-sums-width", Bc() ? "fit" : "match", [["match", "Match the cards"], ["fit", "Fit the summaries"]]) + '<hr class="hcHeRule"><ul class="tfTrayList hcHeList" data-he-list="sums">' + Rc().map(a).join("") + "</ul>",
      areas: '<p class="tfTrayNote">Which areas show on Home. Drag to change their order, here and on the custom dashboard.</p><ul class="tfTrayList hcHeList" data-he-list="areas">' + Cs().map(c).join("") + "</ul>"
    };
    he.querySelector("[data-he-body]").innerHTML = // the note about the areas page first (Matt, 12 Nov: "to the top of the rollover"), as Home Assistant's dialog has it
    '<p class="tfTrayNote hcHeAreasNote">You can rearrange your floors and areas in the order that best represents your house on the <button type="button" class="hcHeLink" data-path="/config/areas/dashboard">areas page</button>.</p><div class="tabs rubberTabs hcTrayTabs" role="tablist" aria-label="Edit Home page"><div class="rubberIndicator" aria-hidden="true"></div>' + i.map(([T, P]) => '<button class="tab segBtn' + (T === Zn ? " active" : "") + '" type="button" role="tab" aria-selected="' + (T === Zn) + '" data-he-tab="' + T + '">' + P + "</button>").join("") + "</div>" + af(i, "data-he-go") + '<div class="hcHeTabBody" role="tabpanel">' + u[Zn] + "</div>", Zs(!1), Qa(he);
  }
  const Kn = (t) => {
    mt = { ...mt, ...t }, We(), Be(), Mn();
  }, xa = (t) => Kn({ home: { ...mt.home || {}, ...t } });
  function Xs(t) {
    Sn(), Co = t, Da = !1, he.classList.toggle("open", t), he.toggleAttribute("inert", !t), g.classList.toggle("hcHomeEditing", t), w && H && Ie();
    const e = p("dashEditNav"), a = he.querySelector(".tfTrayHead");
    e && t && (Ys = e.parentElement, a.appendChild(e)), e && !t && Ys && Ys.appendChild(e), e && (e.classList.toggle("active", t), e.setAttribute("aria-pressed", String(t)), e.setAttribute("aria-label", t ? "Done editing Home" : "Edit Home page"), e.title = t ? "Done" : "Edit", e.innerHTML = t ? Cp : Xi), t ? (Us = JSON.stringify(mt), Mn(), Yn(he, "Edit Home page", null)) : Us && JSON.stringify(mt) !== Us && La("Changes saved");
  }
  he.innerHTML = '<div class="tfTrayInner"><div class="tfTrayHead">' + of + '<div class="activityTitle">Edit Home page</div></div><div class="hcHeBody" data-he-body></div></div>', g.appendChild(he);
  let Ao = null;
  const Va = Object.assign(document.createElement("div"), { className: "card hcInfoPop", hidden: !0 });
  Va.setAttribute("role", "dialog"), g.appendChild(Va);
  function Sn() {
    Ao && (Ao.setAttribute("aria-expanded", "false"), Ao = null, Va.hidden = !0);
  }
  function Pc(t) {
    const e = Ao;
    if (Sn(), e === t) return;
    const [a, o] = Ec[t.dataset.info];
    Va.setAttribute("aria-label", a), Va.innerHTML = '<div class="hcInfoTitle">' + q(a) + '</div><div class="hcInfoText">' + o + '</div><a class="hcInfoMore" href="' + sf + '" target="_blank" rel="noopener">Learn more</a>', Va.hidden = !1, Ao = t, t.setAttribute("aria-expanded", "true");
    const i = t.getBoundingClientRect(), l = Va.offsetWidth, c = Va.offsetHeight;
    Va.style.left = Math.max(8, Math.min(innerWidth - l - 8, i.left + i.width / 2 - l / 2)) + "px", Va.style.top = (i.bottom + 8 + c > innerHeight - 8 ? Math.max(8, i.top - 8 - c) : i.bottom + 8) + "px";
  }
  n.addEventListener("pointerdown", (t) => {
    Ao && !t.composedPath().some((e) => e === Va || e === Ao) && Sn();
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
        t.stopPropagation(), Da = !1, Mn();
        return;
      }
      Co && (t.stopPropagation(), Xs(!1), (e = p("dashEditNav")) == null || e.focus());
    }
  }, !0);
  const lf = (t) => t.dataset.heList === "favs" ? F() : t.dataset.heList === "areas" ? Cs().map((e) => e.id) : Rc(), Hc = (t, e) => t.dataset.heList === "favs" ? Kn({ favourites: e }) : t.dataset.heList === "areas" ? (Kn({ areaOrder: e }), Ie()) : xa({ sumOrder: e });
  he.addEventListener("keydown", (t) => {
    var u;
    const e = t.target.closest("[data-he-grip]");
    if (!e || !["ArrowUp", "ArrowDown"].includes(t.key)) return;
    t.preventDefault();
    const a = e.closest("[data-he-id]"), o = a.parentElement, i = lf(o), l = i.indexOf(a.dataset.heId), c = l + (t.key === "ArrowUp" ? -1 : 1);
    c < 0 || c >= i.length || (i.splice(c, 0, i.splice(l, 1)[0]), Hc(o, i), (u = he.querySelector('[data-he-list="' + o.dataset.heList + '"] [data-he-id="' + CSS.escape(a.dataset.heId) + '"] [data-he-grip]')) == null || u.focus());
  }), he.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-he-grip]");
    if (!e || t.button !== 0) return;
    const a = e.closest("[data-he-list]"), o = a.dataset.heList;
    tl(t, e.closest("[data-he-id]"), "heId", (i) => Hc(a, i), (i) => he.querySelector('[data-he-list="' + o + '"] [data-he-id="' + CSS.escape(i) + '"]'));
  }), he.addEventListener("input", (t) => {
    if (t.target.matches("[data-he-search]")) {
      const e = t.target.selectionStart;
      Mn();
      const a = he.querySelector("[data-he-search]");
      a.focus(), a.setSelectionRange(e, e);
    }
  }), he.addEventListener("click", (t) => {
    var P, S, Y, B;
    const e = t.target, a = e.closest("[data-info]");
    if (a) {
      Pc(a);
      return;
    }
    const o = e.closest("[data-he-go]");
    if (o) {
      Zn = o.dataset.heGo, Da = !1, Sn(), Mn(), Yn(he, "Edit Home page", Zn, o.textContent);
      return;
    }
    if (e.closest("[data-tray-back]")) {
      Sn(), Yn(he, "Edit Home page", null);
      return;
    }
    const i = e.closest("[data-he-tab]");
    if (i) {
      const rt = he.querySelector(".hcTrayTabs .rubberIndicator"), Pt = { left: rt.offsetLeft, width: rt.offsetWidth };
      Zn = i.dataset.heTab, Da = !1, Sn(), Mn(), Zs(!0, Pt), he.querySelector(".tfTrayInner").scrollTop = 0;
      return;
    }
    if (e.closest("[data-he-welcome]")) {
      xa({ welcome: !Ss() });
      return;
    }
    const l = e.closest("[data-he-card]");
    if (l) {
      const rt = l.dataset.heCard, Pt = ["sums", "favs"].includes(rt) ? ((P = mt.home) == null ? void 0 : P[rt]) !== !1 : !!((S = mt.home) != null && S[rt]);
      xa({ [rt]: !Pt });
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
      xa({ fitTogether: !((Y = mt.home) != null && Y.fitTogether) });
      return;
    }
    const _ = e.closest("[data-he-cards-as]");
    if (_) {
      xa({ cardsAs: _.dataset.heCardsAs });
      return;
    }
    const x = e.closest("[data-he-flag]");
    if (x) {
      const rt = x.dataset.heFlag;
      xa({ [rt]: !ko(rt) }), rt === "favsTitle" && za();
      return;
    }
    if (e.closest("[data-he-suggest]")) {
      Kn({ suggest: !ft() });
      return;
    }
    const R = e.closest("[data-he-area]");
    if (R) {
      const rt = new Set(((B = mt.home) == null ? void 0 : B.areasOff) || []), Pt = R.dataset.heArea;
      rt.has(Pt) ? rt.delete(Pt) : rt.add(Pt), xa({ areasOff: [...rt] });
      return;
    }
    const M = e.closest("[data-he-sum]");
    if (M) {
      const rt = M.dataset.heSum, Pt = !fe(rt), Et = mt.home || {};
      xa(yp.includes(rt) ? { shownSums: Pt ? [...Et.shownSums || [], rt] : (Et.shownSums || []).filter((zt) => zt !== rt) } : { hiddenSums: Pt ? (Et.hiddenSums || []).filter((zt) => zt !== rt) : [...Et.hiddenSums || [], rt] });
      return;
    }
    const E = e.closest("[data-he-remove]");
    if (E) {
      Kn({ favourites: F().filter((rt) => rt !== E.dataset.heRemove) });
      return;
    }
    if (e.closest("[data-he-add]")) {
      Da = !Da, Mn(), Da && he.querySelector("[data-he-search]").focus({ preventScroll: !0 });
      return;
    }
    const T = e.closest("[data-he-pick-id]");
    T && (Da = !1, he.querySelector("[data-he-search]").value = "", Kn({ favourites: [...F(), T.dataset.hePickId] }));
  });
  function Me() {
    var _, x, R;
    const t = da && g.classList.contains("tfBoard");
    if (Ut.classList.toggle("open", t), Ut.classList.toggle("tucked", t && ro), Ut.toggleAttribute("inert", !t), t || (_o = !1), Wc(), !t) return;
    const e = Ut.querySelector("[data-tray-tuck]");
    e.innerHTML = ro ? ql : Vl, e.setAttribute("aria-expanded", String(!ro)), e.setAttribute("aria-label", ro ? "Show the edit tray" : "Tuck the edit tray away");
    const a = re().hidden.filter((M) => !yo.includes(M) && yn().some((E) => E.key === M)), o = (M, E) => '<button class="tfTrayCard" type="button" data-tray-card="' + q(M) + '" aria-label="' + q(Ta(M)) + ": drag it onto the board, or press to " + E + '"><span class="tfTrayGrip" aria-hidden="true">' + zr + "</span>" + q(Ta(M)) + "</button>", i = a.filter((M) => !pr.includes(M)), l = pr.filter((M) => a.includes(M));
    ja("welcome", '<div class="hcHeLine"><span class="activityRowName">Welcome message</span>' + kn("welcome") + '<button class="switch' + (re().welcome ? " on" : "") + '" type="button" role="switch" aria-checked="' + !!re().welcome + '" aria-label="Welcome message" data-dash-welcome></button></div><div class="hcHeLine"><span class="activityRowName">Show summaries</span><button class="switch' + ((_ = mt.dash) != null && _.sumsOff ? "" : " on") + '" type="button" role="switch" aria-checked="' + !((x = mt.dash) != null && x.sumsOff) + '" aria-label="Show summaries" data-dash-sums></button></div>'), requestAnimationFrame(() => js(!1)), ja("cards", '<div class="sectionLabel">Hidden and new cards</div>' + (i.length ? '<div class="tfTrayCards">' + i.map((M) => o(M, "put it back")).join("") + "</div>" : '<p class="tfTrayNote">Cards you hide, and new ones, wait here.</p>')), ja("weather", '<div class="sectionLabel">Weather</div>' + (l.length ? `<p class="tfTrayNote">The Weather page's widgets. Drag one onto the board, or press to add it.</p><div class="tfTrayCards">` + l.map((M) => o(M, "add it")).join("") + "</div>" : '<p class="tfTrayNote">Every weather widget is on the board.</p>')), ja("phone", '<div class="sectionLabel">Phone</div><p class="tfTrayNote">' + (re().phone ? "Phones have an order of their own." : "Phones follow the board's order.") + '</p><button class="pill tfTrayAdd" type="button" data-phone-toggle aria-pressed="' + _o + '">' + (_o ? "Hide the phone" : "Show the phone") + "</button>");
    const c = new Set(mt.favHidden || []), u = F(), f = [...u, ...[...c].filter((M) => !u.includes(M) && k[M])];
    ja("favs", f.map((M) => rf(M, c.has(M), u.includes(M))).join("") || '<li class="tfTrayNote">No favourites yet.</li>'), Ut.querySelector('[data-pick="tiles"]').hidden = !So, Ut.querySelector("[data-tile-add]").setAttribute("aria-expanded", String(So)), So && ja("tilepick", Gs(Ut.querySelector("[data-tile-search]").value, (M) => nr.includes(M.split(".")[0]), new Set(ki()), "data-tile-pick")), Ut.querySelector('[data-tray="roompick"]').hidden = !Lr, Ut.querySelector("[data-room-add]").setAttribute("aria-expanded", String(Lr));
    const y = new Set(((R = mt.dash) == null ? void 0 : R.areasOff) || []);
    if (ja("areas", Jo(Je).map((M) => '<li class="hcHeRow" data-area-id="' + q(M.id) + '"><button class="tfTrayBtn hcHeGrip" type="button" data-area-grip aria-label="Move ' + q(M.name) + '. Use the up and down arrows">' + zr + '</button><span class="tfIcon"><span class="tfAreaGlyph"' + be("area:" + M.id, M.icon || "mdi:texture-box", M.name) + '></span></span><span class="activityRowName">' + q(M.name) + '</span><button class="switch' + (y.has(M.id) ? "" : " on") + '" type="button" role="switch" aria-checked="' + !y.has(M.id) + '" aria-label="Show ' + q(M.name) + ' in the Areas card" data-area-on="' + q(M.id) + '"></button></li>').join("")), Lr) {
      const M = new Set(ki());
      ja("roompick", Jo(Je).filter((E) => !M.has("room:" + E.id)).map((E) => '<li><button class="tfTrayPickItem" type="button" data-room-pick="' + q(E.id) + '"><span class="tfIcon"><span class="tfAreaGlyph"' + be("area:" + E.id, E.icon || "mdi:texture-box", E.name) + '></span></span><span class="tfTrayName"><span class="activityRowName">' + q(E.name) + "</span></span></button></li>").join("") || '<li class="tfTrayNote">Every area is on the board.</li>');
    }
    Ut.querySelector('[data-pick="favs"]').hidden = !Mo, Ut.querySelector("[data-fav-add]").setAttribute("aria-expanded", String(Mo)), Mo && ja("pick", Gs(Ut.querySelector("[data-fav-search]").value, (M) => Lc.test(M), new Set(F()), "data-fav-pick")), ja("favtitle", '<div><strong>Title</strong><div class="status">Favourites, at the top of the card.</div></div><button class="switch' + (yi() ? " on" : "") + '" type="button" role="switch" aria-checked="' + yi() + '" data-fav-title aria-label="Title"></button>'), ja("suggest", '<div><strong>Show suggestions</strong><div class="status">Fills the card after your favourites.</div></div><button class="switch' + (ft() ? " on" : "") + '" type="button" role="switch" aria-checked="' + ft() + '" data-fav-suggest aria-label="Show suggestions"></button>');
  }
  const _n = (t) => {
    mt = { ...mt, ...t }, We(), Be(), Me();
  };
  function Nc(t, e) {
    const a = mt, o = new Set(mt.favHidden || []);
    e ? o.delete(t) : o.add(t), _n({ favHidden: [...o] }), e ? La(bt(t) + " put back") : La(bt(t) + " hidden", Ai(a));
  }
  const cf = (t) => {
    const e = mt;
    _n({ favourites: F().filter((a) => a !== t), favHidden: (mt.favHidden || []).filter((a) => a !== t) }), La(bt(t) + " removed from favourites", Ai(e));
  }, df = (t) => {
    _n({ favourites: [...F().filter((e) => e !== t), t], favHidden: (mt.favHidden || []).filter((e) => e !== t) }), La(bt(t) + " added to favourites");
  };
  Ut.addEventListener("click", (t) => {
    var a, o, i;
    const e = t.target.closest("button");
    if (e) {
      if (e.hasAttribute("data-tray-tab")) {
        Un = e.dataset.trayTab, js(!0), Ut.querySelector(".tfTrayInner").scrollTop = 0;
        return;
      }
      if (e.hasAttribute("data-tray-go")) {
        Un = e.dataset.trayGo, js(!1), Yn(Ut, "Edit custom dashboard", Un, Dc.find(([l]) => l === Un)[1]);
        return;
      }
      if (e.hasAttribute("data-tray-back")) {
        Yn(Ut, "Edit custom dashboard", null);
        return;
      }
      if (e.hasAttribute("data-tray-done")) Ns(!1);
      else if (e.hasAttribute("data-info")) Pc(e);
      else if (e.hasAttribute("data-dash-sums"))
        vn({ ...As(), hidden: As().hidden.filter((l) => l !== "sums"), sumsOff: !((a = mt.dash) != null && a.sumsOff) }), Be(), Me();
      else if (e.hasAttribute("data-dash-welcome")) {
        const l = re();
        vn({ ...l, welcome: !l.welcome }), Be(), Me();
      } else if (e.hasAttribute("data-tray-tuck"))
        ro = !ro, Me();
      else if (e.hasAttribute("data-phone-toggle"))
        _o = !_o, Me(), _o && ((o = ua.querySelector("[data-phone-key]")) == null || o.focus({ preventScroll: !0 }));
      else if (e.dataset.trayCard)
        t.detail === 0 && (Os(e.dataset.trayCard), Me());
      else if (e.dataset.favEye) Nc(e.dataset.favEye, e.getAttribute("aria-pressed") !== "true");
      else if (e.dataset.favRemove) cf(e.dataset.favRemove);
      else if (e.hasAttribute("data-fav-add"))
        Mo = !Mo, Me(), Mo && Ut.querySelector("[data-fav-search]").focus({ preventScroll: !0 });
      else if (e.dataset.favPick) df(e.dataset.favPick);
      else if (e.hasAttribute("data-tile-add"))
        So = !So, Me(), So && Ut.querySelector("[data-tile-search]").focus({ preventScroll: !0 });
      else if (e.dataset.tilePick) _c(e.dataset.tilePick);
      else if (e.hasAttribute("data-room-add"))
        Lr = !Lr, Me();
      else if (e.dataset.roomPick) _c("room:" + e.dataset.roomPick);
      else if (e.dataset.areaOn) {
        const l = new Set(((i = mt.dash) == null ? void 0 : i.areasOff) || []);
        l.has(e.dataset.areaOn) ? l.delete(e.dataset.areaOn) : l.add(e.dataset.areaOn), vn({ ...re(), areasOff: [...l] }), Be(), Me();
      } else e.hasAttribute("data-fav-suggest") ? _n({ suggest: !ft() }) : e.hasAttribute("data-fav-title") && (_n({ favsTitle: !yi() }), za());
    }
  }), Ut.addEventListener("input", (t) => {
    t.target.matches("[data-fav-search],[data-tile-search]") && Me();
  });
  const Oc = (t) => {
    mt = { ...mt, areaOrder: t }, We(), Be(), Me();
  };
  Ut.addEventListener("keydown", (t) => {
    var c, u, f;
    const e = (u = (c = t.target).closest) == null ? void 0 : u.call(c, "[data-area-grip]");
    if (!e || !["ArrowUp", "ArrowDown"].includes(t.key)) return;
    t.preventDefault();
    const a = e.closest("[data-area-id]").dataset.areaId, o = Jo(Je).map((y) => y.id), i = o.indexOf(a), l = i + (t.key === "ArrowUp" ? -1 : 1);
    l < 0 || l >= o.length || (o.splice(l, 0, o.splice(i, 1)[0]), Oc(o), (f = Ut.querySelector('[data-area-id="' + CSS.escape(a) + '"] [data-area-grip]')) == null || f.focus());
  }), Ut.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-area-grip]");
    !e || t.button !== 0 || tl(t, e.closest("[data-area-id]"), "areaId", Oc, (a) => Ut.querySelector('[data-area-id="' + CSS.escape(a) + '"]'));
  });
  const To = window.visualViewport, $s = () => {
    if (!To) return;
    const t = Math.max(0, Math.round(window.innerHeight - To.height - To.offsetTop));
    Ut.style.bottom = t > 40 ? t + "px" : "";
  };
  To == null || To.addEventListener("resize", $s), To == null || To.addEventListener("scroll", $s), Ut.addEventListener("focusin", (t) => {
    var e, a;
    (a = (e = t.target).matches) != null && a.call(e, "input") && setTimeout(() => {
      $s(), t.target.scrollIntoView({ block: "center", behavior: "smooth" });
    }, 350);
  }), Ut.addEventListener("keydown", (t) => {
    var a, o;
    const e = !!((o = (a = t.target).closest) != null && o.call(a, '[data-pick="tiles"],[data-tile-add]'));
    t.key !== "Escape" || !(e ? So : Mo) || (t.stopPropagation(), e ? So = !1 : Mo = !1, Me(), Ut.querySelector(e ? "[data-tile-add]" : "[data-fav-add]").focus({ preventScroll: !0 }));
  });
  function Ic(t, e, a, o) {
    t.preventDefault();
    const i = t.clientX, l = t.clientY;
    let c = null, u = 0;
    const f = Object.assign(document.createElement("div"), { className: "tfFavDrop" }), y = (x) => {
      if (!c) {
        if (Math.hypot(x.clientX - i, x.clientY - l) < 4) return;
        c = e.cloneNode(!0), c.classList.add("tfTrayGhost"), c.style.width = e.offsetWidth + "px", g.appendChild(c);
      }
      c.style.transform = "translate(" + (x.clientX - 24) + "px," + (x.clientY - 24) + "px)";
      const R = !ro && x.clientX >= Ut.getBoundingClientRect().left;
      if (a === "card") {
        const T = H.getBoundingClientRect(), { w: P } = en(H.clientWidth);
        Qt = !R && x.clientX >= T.left && x.clientX <= T.right && x.clientY >= T.top + tn ? { key: o, col: Math.max(0, Math.floor((x.clientX - T.left) / (P + de))), row: Math.max(0, Math.floor((x.clientY - T.top - tn) / Wa)), fromTray: !0 } : null, u || (u = requestAnimationFrame(() => {
          u = 0, Ie();
        }));
        return;
      }
      const M = H.querySelector(".tfDash-favs"), E = M == null ? void 0 : M.getBoundingClientRect();
      if (ta = null, E && !R && x.clientX >= E.left && x.clientX <= E.right && x.clientY >= E.top && x.clientY <= E.bottom) {
        let T = 1 / 0;
        M.querySelectorAll('[data-k^="fav:"]').forEach((P, S) => {
          const Y = P.getBoundingClientRect(), B = Math.hypot(x.clientX - (Y.left + Y.width / 2), x.clientY - (Y.top + Y.height / 2));
          B < T && (T = B, ta = { i: S, r: Y, after: x.clientX > Y.left + Y.width / 2 });
        }), ta || (ta = { i: 0, r: null, after: !1 });
      }
      ta != null && ta.r ? (f.isConnected || g.appendChild(f), Object.assign(f.style, { left: (ta.after ? ta.r.right : ta.r.left) - 2 + "px", top: ta.r.top + 8 + "px", height: ta.r.height - 16 + "px" })) : f.remove();
    }, _ = () => {
      if (window.removeEventListener("pointermove", y), window.removeEventListener("pointerup", _), window.removeEventListener("pointercancel", _), cancelAnimationFrame(u), c == null || c.remove(), f.remove(), a === "card") {
        if (!c) Os(o);
        else if (Qt != null && Qt.fromTray) {
          Ie();
          const T = Ta(o) + Mc(o), P = re(), S = xn();
          Qt = null, zn({ ...P, hidden: P.hidden.filter((Y) => Y !== o) }, S), La(T);
        }
        Qt = null, Ie(), Be(), Me();
        return;
      }
      if (!ta) return;
      const x = new Set(mt.favHidden || []);
      x.delete(o);
      const R = F().filter((T) => T !== o), M = R.filter((T) => !x.has(T)), E = M[Math.min(ta.i + (ta.after ? 1 : 0), M.length)];
      R.splice(E ? R.indexOf(E) : R.length, 0, o), ta = null, _n({ favourites: R, favHidden: [...x] }), La(bt(o) + " put back");
    };
    window.addEventListener("pointermove", y), window.addEventListener("pointerup", _), window.addEventListener("pointercancel", _);
  }
  const Fc = {
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
  }, qc = 136, pf = 288, uf = 0.8, ff = { wx: "mdi:weather-partly-cloudy", areas: "mdi:home", favs: "mdi:star", act: "mdi:history", energy: "mdi:lightning-bolt", avg: "mdi:chart-line", aq: "mdi:air-filter", pollen: "mdi:flower-pollen", radar: "mdi:radar" }, ua = Object.assign(document.createElement("aside"), { className: "tfMiniPhone" });
  ua.setAttribute("aria-label", "Phone order"), ua.innerHTML = '<div class="tfPhoneHead"><div class="activityTitle">Phone</div><button class="tfTrayBtn" type="button" data-phone-close aria-label="Close the phone">' + jl + '</button></div><p class="tfTrayNote" data-phone="note"></p><div class="tfPhoneScreen"><div class="tfPhoneList" data-phone="list"></div></div>', g.appendChild(ua);
  let Js = "";
  function Wc() {
    var u;
    const t = _o && da && g.classList.contains("tfBoard") && !ro;
    if (ua.classList.toggle("open", t), ua.toggleAttribute("inert", !t), !t) return;
    const e = Ts().filter((f) => !re().hidden.includes(f.key)), a = e.length, o = (f) => Math.round(f * uf * 10) / 10 + "px", i = (f, y) => {
      const _ = f.el.classList.contains("tfDac"), x = f.tile ? _ ? pf : qc : Fc[f.key] || qc;
      return '<button class="tfPhoneBlock' + (f.tile ? " tile" : "") + '" type="button" data-phone-key="' + q(f.key) + '" style="min-height:' + o(x) + '" aria-label="' + q(Ta(f.key) + ", " + (y + 1) + " of " + a + ". Drag, or use the arrow keys, to move it") + '"><span class="tfIcon"' + (f.tile ? be(f.key, ga(f.key)) : be(f.key, ff[f.key])) + '></span><span class="tfPhoneName">' + q(Ta(f.key)) + "</span></button>";
    }, l = '<div class="tfPhoneTitle">' + q(((u = H.querySelector(".tfDashTitle")) == null ? void 0 : u.textContent) || "") + '</div><div class="tfPhoneBlock fixed" style="min-height:' + o(Fc.sums) + '"><span class="tfPhoneName">' + q(Ta("sums")) + "</span></div>" + e.map(i).join("");
    if (ua.querySelector('[data-phone="note"]').innerHTML = re().phone ? 'Phones use this order. <button class="tfLinkBtn" type="button" data-phone-reset>Follow the board</button>' : "Phones follow the board. Drag a card to give them an order of their own.", l === Js) return;
    Js = l;
    const c = ua.querySelector('[data-phone="list"]');
    c.innerHTML = l, Qa(c);
  }
  function jc(t, e) {
    var a;
    vn({ ...re(), phone: t }), Me(), e && ((a = ua.querySelector('[data-phone-key="' + CSS.escape(e) + '"]')) == null || a.focus({ preventScroll: !0 }));
  }
  const Qs = () => [...ua.querySelectorAll("[data-phone-key]")].map((t) => t.dataset.phoneKey);
  function hf(t, e) {
    t.preventDefault();
    const a = e.parentElement, o = ua.querySelector(".tfPhoneScreen"), i = Qs().join();
    e.classList.add("moving");
    const l = (u) => {
      const f = o.getBoundingClientRect();
      u.clientY > f.bottom - 40 ? o.scrollTop += 12 : u.clientY < f.top + 40 && (o.scrollTop -= 12);
      const y = [...a.querySelectorAll("[data-phone-key]")].find((R) => {
        const M = R.getBoundingClientRect();
        return R !== e && u.clientX >= M.left && u.clientX <= M.right && u.clientY >= M.top && u.clientY <= M.bottom;
      });
      if (!y) return;
      const _ = y.getBoundingClientRect(), x = y.classList.contains("tile") ? u.clientX < _.left + _.width / 2 : u.clientY < _.top + _.height / 2;
      a.insertBefore(e, x ? y : y.nextSibling);
    }, c = () => {
      window.removeEventListener("pointermove", l), window.removeEventListener("pointerup", c), window.removeEventListener("pointercancel", c), e.classList.remove("moving");
      const u = Qs();
      Js = "", u.join() !== i ? jc(u) : Wc();
    };
    window.addEventListener("pointermove", l), window.addEventListener("pointerup", c), window.addEventListener("pointercancel", c);
  }
  ua.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-phone-key]");
    e && t.button <= 0 && hf(t, e);
  }), ua.addEventListener("click", (t) => {
    var a;
    const e = t.target.closest("button");
    if (e != null && e.hasAttribute("data-phone-close"))
      _o = !1, Me(), (a = Ut.querySelector("[data-phone-toggle]")) == null || a.focus({ preventScroll: !0 });
    else if (e != null && e.hasAttribute("data-phone-reset")) {
      const { phone: o, ...i } = re();
      vn(i), Me();
    }
  }), ua.addEventListener("keydown", (t) => {
    var c, u, f, y;
    if (t.key === "Escape") {
      t.stopPropagation(), _o = !1, Me(), (c = Ut.querySelector("[data-phone-toggle]")) == null || c.focus({ preventScroll: !0 });
      return;
    }
    const e = (y = (f = (u = t.target).closest) == null ? void 0 : f.call(u, "[data-phone-key]")) == null ? void 0 : y.dataset.phoneKey, a = { ArrowUp: -1, ArrowLeft: -1, ArrowDown: 1, ArrowRight: 1 }[t.key];
    if (!e || !a) return;
    t.preventDefault();
    const o = Qs(), i = o.indexOf(e), l = i + a;
    l < 0 || l >= o.length || ([o[i], o[l]] = [o[l], o[i]], jc(o, e));
  });
  function tl(t, e, a, o, i) {
    t.preventDefault();
    const l = _e.drag, c = Ge(), u = 1 + l.lift / 100, f = [...e.parentElement.children].filter((Bt) => Bt.dataset[a]), y = f.indexOf(e), _ = f.map((Bt) => Bt.getBoundingClientRect()), x = f.length - 1, R = _[y].height + (f.length > 1 ? _[1].top - _[0].bottom : 0), M = (Bt) => _[Bt].top + _[Bt].height / 2, E = t.clientY, T = _[0].top - _[y].top, P = _[x].top - _[y].top;
    let S = 0, Y = 0, B = 0, rt = 1, Pt = y, Et = 0;
    e.classList.add("hcListDragging"), f.forEach((Bt) => {
      Bt !== e && (Bt.style.transition = c ? "none" : "transform " + l.gap + "ms " + Ce.land);
    });
    const zt = () => {
      if (Et = requestAnimationFrame(zt), c) {
        Y = S, e.style.transform = "translateY(" + Y + "px)";
        return;
      }
      B = El(B, S - Y, l.pull / 100, l.keep / 100), Y += B, rt += (u - rt) * 0.25;
      const Bt = Math.min(Math.abs(B) / 48, 1);
      e.style.transform = "translateY(" + Y.toFixed(2) + "px) scale(" + (rt * (1 - 0.063 * Bt)).toFixed(4) + "," + (rt * (1 + 0.1 * Bt)).toFixed(4) + ")";
    };
    Et = requestAnimationFrame(zt);
    const Te = (Bt) => {
      S = Math.max(T, Math.min(P, Bt.clientY - E));
      const Pe = M(y) + S, He = f.filter((Ze, Ve) => Ve !== y && M(Ve) < Pe).length;
      He !== Pt && (Pt = He, f.forEach((Ze, Ve) => {
        Ze !== e && (Ze.style.transform = y < Pt && Ve > y && Ve <= Pt ? "translateY(" + -R + "px)" : Pt < y && Ve >= Pt && Ve < y ? "translateY(" + R + "px)" : "");
      }));
    }, At = () => {
      window.removeEventListener("pointermove", Te), window.removeEventListener("pointerup", At), window.removeEventListener("pointercancel", At), cancelAnimationFrame(Et);
      const Bt = e.getBoundingClientRect(), Pe = e.dataset[a];
      f.forEach((Ba) => {
        Ba.style.transition = "none", Ba.style.transform = "";
      }), e.classList.remove("hcListDragging");
      const He = f.map((Ba) => Ba.dataset[a]);
      He.splice(Pt, 0, He.splice(y, 1)[0]), o(He);
      const Ze = i(Pe) || e;
      if (requestAnimationFrame(() => f.forEach((Ba) => {
        Ba.style.transition = "";
      })), c) return;
      const Ve = Ze.getBoundingClientRect(), Qn = Bt.top + Bt.height / 2 - (Ve.top + Ve.height / 2);
      Ze.classList.add("hcListLanding"), Ze.animate([{ transform: "translateY(" + Qn + "px) scale(" + rt + ")", filter: "drop-shadow(0 10px 30px rgba(0,0,0,.35))" }, { transform: "none", filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" }], { duration: l.slide, easing: Ce.land }).finished.then(() => {
        Ze.classList.remove("hcListLanding"), Bl(Ze);
      }, () => Ze.classList.remove("hcListLanding"));
    };
    window.addEventListener("pointermove", Te), window.addEventListener("pointerup", At), window.addEventListener("pointercancel", At);
  }
  function mf(t, e) {
    tl(
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
    e ? Ic(t, e, "card", e.dataset.trayCard) : a && t.target.closest(".tfTrayGrip") ? mf(t, a) : a != null && a.classList.contains("off") && !t.target.closest("button") && Ic(t, a, "fav", a.dataset.trayFav);
  });
  function gf(t) {
    if (!da || t.button !== 0 || t.target.closest("[data-board-more],.tfBoardMenu,.tfFavHides")) return;
    const e = t.target.closest(".tfBoardItem"), a = e && yn().find((zt) => zt.el === e);
    if (!a || yo.includes(a.key)) return;
    const o = wn.get(a.key), { w: i } = en(H.clientWidth);
    if (!o) return;
    t.preventDefault(), no();
    const l = t.clientX, c = t.clientY;
    let u = !1, f = 0;
    const y = _e.drag, _ = Ge();
    let x = 0, R = 0, M = 0, E = 0, T = 0, P = 0, S = _ || y.stick === 0, Y = 0;
    const B = (zt, Te, At, Bt) => {
      e.style.transform = "translate(" + M.toFixed(2) + "px," + E.toFixed(2) + "px) rotate(" + zt.toFixed(2) + "deg) rotate(" + Te + "rad) scale(" + At.toFixed(4) + "," + Bt.toFixed(4) + ") rotate(" + -Te + "rad)";
    }, rt = () => {
      if (Y = requestAnimationFrame(rt), _) {
        M = x, E = R, B(0, 0, 1, 1);
        return;
      }
      if (!S) {
        const Pe = Math.min(Math.hypot(x, R) / Math.max(1, y.stick), 1);
        M = x * 0.35, E = R * 0.35, B(0, Math.atan2(R, x), 1 + 0.155 * Pe, 1 - 0.1 * Pe);
        return;
      }
      T = El(T, x - M, y.pull / 100, y.keep / 100), P = El(P, R - E, y.pull / 100, y.keep / 100), M += T, E += P;
      const zt = Math.hypot(T, P), Te = Math.min(zt / 48, 1), At = Math.max(-5, Math.min(y.tilt, T * 0.32)), Bt = 1 + y.lift / 100;
      B(At, Math.atan2(P, T), Bt * (1 + 0.1 * Te), Bt * (1 - 0.063 * Te));
    }, Pt = (zt) => {
      if (x = zt.clientX - l, R = zt.clientY - c, !u) {
        if (Math.hypot(x, R) < 4) return;
        u = !0, Qt = { key: a.key, col: o.col, row: o.row }, e.classList.add("tfDragging", "mvDrag"), Y = requestAnimationFrame(rt);
      }
      !S && Math.hypot(x, R) > y.stick && (S = !0, T = x * 0.085, P = R * 0.085), Qt.col = Math.round((o.x + x) / (i + de)), Qt.row = Math.round((o.y + R - tn) / Wa), f || (f = requestAnimationFrame(() => {
        f = 0, Ie();
      }));
    }, Et = () => {
      var Qn;
      if (window.removeEventListener("pointermove", Pt), window.removeEventListener("pointerup", Et), window.removeEventListener("pointercancel", Et), !u) return;
      const zt = (tr) => {
        tr.preventDefault(), tr.stopImmediatePropagation();
      };
      window.addEventListener("click", zt, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", zt, { capture: !0 }), 300), cancelAnimationFrame(f), cancelAnimationFrame(Y);
      const Te = e.getBoundingClientRect(), At = a.key;
      e.style.transition = "none", Ie(), e.classList.remove("tfDragging", "mvDrag"), e.style.transform = "", Qt = null, zn(re(), xn()), Ie(), Be();
      const Bt = (Qn = yn().find((tr) => tr.key === At)) == null ? void 0 : Qn.el;
      if (requestAnimationFrame(() => {
        e.style.transition = "", Bt && (Bt.style.transition = "");
      }), !Bt || _) return;
      Bt.style.transition = "none";
      const Pe = Bt.getBoundingClientRect(), He = Te.left + Te.width / 2 - (Pe.left + Pe.width / 2), Ze = Te.top + Te.height / 2 - (Pe.top + Pe.height / 2);
      Bt.style.zIndex = "20", Bt.animate([{ transform: "translate(" + He + "px," + Ze + "px) scale(" + (1 + y.lift / 100) + ")" }, { transform: "none" }], { duration: y.slide, easing: Ce.land }).finished.then(() => {
        Bt.style.zIndex = "", Bl(Bt);
      }, () => {
        Bt.style.zIndex = "";
      });
    };
    window.addEventListener("pointermove", Pt), window.addEventListener("pointerup", Et), window.addEventListener("pointercancel", Et);
  }
  function Vc(t = !1) {
    const e = H == null ? void 0 : H.querySelector(".tfDashGraph svg[data-graph]");
    if (!(e != null && e.clientWidth)) return;
    const a = e.dataset.graph + "@" + e.clientWidth + "x" + e.clientHeight + "@" + Math.floor(Date.now() / 3e5);
    if (e.dataset.drawn === a) return;
    const o = !e.dataset.drawn;
    e.dataset.drawn = a;
    const i = ec.find((l) => l.id === e.dataset.graph);
    i ? ku(e, i).then(() => {
      (t || o) && Mu(e);
    }) : ud(e.dataset.graph, e).then(() => {
      t && rc(e);
    });
  }
  function zc() {
    var f, y, _;
    Vt = Zr.model(d(), { madeUp: !C }), tt(), k = Vt.states, k[(f = mt.sources) == null ? void 0 : f.grid] && (Vt.grid = mt.sources.grid), k[(y = mt.sources) == null ? void 0 : y.alarm] && (Vt.security.alarms = [mt.sources.alarm]), kt.forEach((x, R) => {
      const M = k[R], E = (M == null ? void 0 : M.attributes) || {};
      if (!M || Date.now() - x.at > 2 * 60 * 1e3) {
        kt.delete(R);
        return;
      }
      x.pos != null && M.state !== "opening" && M.state !== "closing" && Math.abs(ma(R) - x.pos) < 1 && delete x.pos, x.tilt != null && Math.abs((E.current_tilt_position ?? -1) - x.tilt) < 1 && delete x.tilt, x.pos == null && x.tilt == null && kt.delete(R);
    });
    const t = [];
    let e = 0;
    const a = D();
    Je = a.filter((x) => x.room).map((x) => x.room), Je.some((x) => x.id === V) || (V = ((_ = Je[0]) == null ? void 0 : _.id) || null);
    const o = Q === "weather" ? { key: "weather", name: "Weather" } : Q && a.find((x) => x.key === Q);
    if (o || (Q = null), g.classList.toggle("tfAreaOpen", !!o), g.classList.toggle("tfWeatherOpen", (o == null ? void 0 : o.key) === "weather"), g.classList.toggle("tfDash", !o), Ct = /* @__PURE__ */ new Map(), Vt.rooms.forEach((x) => [...x.actions, ...x.plugs, ...x.readings, ...x.openings, ...x.solar, ...x.plants.flatMap((R) => [R.id, ...R.readings])].forEach((R) => Ct.set(R, x.name))), !o) return Au(t, ae());
    if (t.push({ key: "areahead", html: bf(o, ++e) }), o.key === "weather")
      return t.weather = ++e, t;
    const i = o.ids, l = o.room ? o.room.id : o.key, c = o.room;
    c != null && c.solar.length && t.push({ key: "energy:" + c.id, html: Ko(c, ++e) }), c && (c.readings.length || c.power != null) && t.push({ key: "readings:" + c.id, html: ii(c, ++e) }), c == null || c.plants.forEach((x) => t.push({ key: "plant:" + x.id, html: si(x, ++e) }));
    const u = [...i, ...((c == null ? void 0 : c.plugs) || []).filter((x) => !i.includes(x))];
    return u.length && t.push({ key: "block:" + l, order: ++e, tiles: u.map((x) => ({ key: x, html: yr(x) })) }), t;
  }
  const bf = (t, e) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + e + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + ql + '</button><div class="settingsTitle">' + q(t.name) + "</div></div>";
  let Gc = 0, Uc = null;
  const Yc = (t) => t === "weather" ? Xa.wx : t.startsWith("room:") && H.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || H.querySelector(".tfAreas");
  function Zc(t) {
    var e, a;
    Q || (Gc = Br().scrollTop, Uc = ((e = Yc(t)) == null ? void 0 : e.getBoundingClientRect().top) ?? null), Q = t, t.startsWith("room:") && (V = t.slice(5)), za(), Br().scrollTop = 0, (a = H.querySelector("[data-area-back]")) == null || a.focus({ preventScroll: !0 });
  }
  let Er = null;
  function wf(t, e) {
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
  function el() {
    var a;
    const t = Q;
    Q = null, za(), Br().scrollTop = Gc, wf(() => Yc(t), Uc);
    const e = t.startsWith("room:") ? H.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || H.querySelector('.tfAreaPanel[data-area="' + CSS.escape(t.slice(5)) + '"]') : t === "weather" ? Xa.wx.querySelector(".wbOpenPage") : H.querySelector('[data-k="sum:' + CSS.escape(t) + '"]');
    (a = (e == null ? void 0 : e.querySelector("[data-go]")) || e) == null || a.focus({ preventScroll: !0 });
  }
  const vf = (t) => t.wrap ? t.wrap(t.tiles.map((e) => e.html).join(""), t) : '<div class="tfBlock" data-tf data-k="' + q(t.key) + '" style="order:' + t.order + '"><div class="tfActions">' + t.tiles.map((e) => e.html).join("") + "</div></div>", Kc = (t) => t.map((e) => e.key + (e.tiles ? "(" + e.tiles.map((a) => a.key).join(",") + ")" : "")).join(";");
  function Br() {
    for (let t = g.parentElement || g.getRootNode().host; t; t = t.parentElement || t.getRootNode().host) {
      const e = getComputedStyle(t).overflowY;
      if ((e === "auto" || e === "scroll") && t.scrollHeight > t.clientHeight) return t;
    }
    return document.scrollingElement;
  }
  function Xc(t) {
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
    const t = zc(), e = (i) => {
      var l;
      return (((l = i.closest("[data-k]")) == null ? void 0 : l.dataset.k) || "") + "|" + i.dataset.iconFor + "|" + (i.dataset.iconName || "");
    }, a = /* @__PURE__ */ new Map();
    H.querySelectorAll("[data-tf] [data-icon-for]").forEach((i) => {
      i.firstElementChild && (a.get(e(i)) || a.set(e(i), []).get(e(i))).push(i.firstElementChild);
    }), H.querySelectorAll("[data-tf]").forEach((i) => i.remove()), Ma.clear();
    const o = document.createElement("div");
    o.innerHTML = t.map((i) => i.tiles ? vf(i) : i.html).join(""), t.forEach((i) => i.tiles ? i.tiles.forEach((l) => Ma.set(l.key, l.html)) : Ma.set(i.key, i.html)), Yr = Kc(t), o.querySelectorAll("[data-icon-for]").forEach((i) => {
      var c;
      const l = !i.firstElementChild && ((c = a.get(e(i))) == null ? void 0 : c.shift());
      l && i.appendChild(l);
    }), H.append(...o.children), Xr(t.weather), $r(), Rs.disconnect(), Ie(), Qa(H), dl(H), wo(H), N(), fd(), $n(), nd(), requestAnimationFrame(it);
  }
  const $c = (t) => {
    var a;
    const e = n.activeElement && t.contains(n.activeElement) ? n.activeElement : null;
    return e && { label: e.getAttribute("aria-label"), act: (a = e.dataset) == null ? void 0 : a.act };
  }, al = (t, e) => {
    var a;
    e && ((a = e.label && t.querySelector('[aria-label="' + CSS.escape(e.label) + '"]') || e.act && t.querySelector('[data-act="' + CSS.escape(e.act) + '"]')) == null || a.focus({ preventScroll: !0 }));
  };
  function ol(t, e) {
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
    return [...t.children].forEach((c, u) => ol(c, l[u])), t;
  }
  function yf(t, e) {
    const a = document.createElement("div");
    a.innerHTML = e;
    const o = $c(t), i = ol(t, a.firstElementChild);
    Qa(i), dl(i), wo(i), al(i, o);
  }
  function Be() {
    !w || !H || Qt || Xc(xf);
  }
  function xf() {
    if (!H.querySelector("[data-tf]")) {
      za();
      return;
    }
    const t = zc();
    if (Kc(t) !== Yr) {
      za();
      return;
    }
    const e = (a) => [...st.keys()].some((o) => {
      const i = o.slice(o.indexOf("|") + 1);
      return a === i || a.endsWith(":" + i);
    });
    t.forEach((a) => (a.tiles || [a]).forEach((o) => {
      if (Ma.get(o.key) === o.html || e(o.key)) return;
      const i = H.querySelector('[data-k="' + CSS.escape(o.key) + '"]');
      i && (Ma.set(o.key, o.html), yf(i, o.html), o.key.startsWith("energy:") && fd());
    })), $n(), nd(), mi(), N(), xe == null || xe.update(), ke == null || ke.forEach((a) => a.update()), g.classList.contains("tfDash") && xi(), requestAnimationFrame(it);
  }
  const Xn = {
    light: (t) => [["Brightness", t.brightness != null ? Math.round(t.brightness / 2.55) + "%" : null], ["Colour temperature", t.color_temp_kelvin ? Number(t.color_temp_kelvin).toLocaleString() + " K" : null], ["Colour mode", t.color_mode && jt(t.color_mode)]],
    climate: (t) => [["Current temperature", De(t.current_temperature) + " °C"], ["Target", De(t.temperature) + " °C"], ["Action", jt(t.hvac_action)]],
    cover: (t) => [["Position", t.current_position != null ? t.current_position + "% open" : null], ["Tilt", t.current_tilt_position != null ? t.current_tilt_position + "% open" : null]],
    humidifier: (t) => [["Current humidity", t.current_humidity + "%"], ["Target", t.humidity + "%"], ["Mode", jt(t.mode)]],
    media_player: (t) => [["Title", t.media_title], ["Artist", t.media_artist], ["Volume", t.volume_level != null ? Math.round(t.volume_level * 100) + "%" : null], ["Source", t.source]],
    vacuum: (t) => [["Battery", t.battery_level + "%"], ["Fan speed", jt(t.fan_speed)], ["Rooms", (t.rooms || []).join(", ") || null]],
    lock: (t) => [["Changed by", t.changed_by]],
    alarm_control_panel: (t) => [["Changed by", t.changed_by]],
    valve: (t) => [["Position", t.current_position != null ? t.current_position + "% open" : null]],
    fan: (t) => [["Speed", t.percentage != null ? t.percentage + "%" : null], ["Oscillating", t.oscillating != null ? t.oscillating ? "Yes" : "No" : null], ["Direction", t.direction && jt(t.direction)]],
    water_heater: (t) => [["Current temperature", t.current_temperature != null ? t.current_temperature + " °C" : null], ["Target", t.temperature != null ? t.temperature + " °C" : null], ["Mode", t.operation_mode && jt(t.operation_mode)], ["Away", t.away_mode && jt(t.away_mode)]],
    plant: (t) => [["Moisture", t.moisture + "%"], ["Light", Number(t.brightness).toLocaleString() + " lx"], ["Temperature", De(t.temperature) + " °C"], ["Fertility", t.conductivity + " µS/cm"], ["Problems", t.problem === "none" ? "None" : jt(t.problem)]],
    weather: (t) => [["Temperature", t.temperature != null ? t.temperature + " " + (t.temperature_unit || "°C") : null], ["Humidity", t.humidity != null ? t.humidity + "%" : null], ["Wind", t.wind_speed != null ? t.wind_speed + " " + (t.wind_speed_unit || "km/h") : null], ["Pressure", t.pressure != null ? t.pressure + " " + (t.pressure_unit || "hPa") : null]]
  }, kf = (t) => Ya(t) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function Mf(t, e = {}, a = !1) {
    return '<div class="tfMoreList">' + t.map((o) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + q(o.name) + '</div><div class="tfMoreTiles' + (a ? " single" : "") + '">' + o.ids.map((i) => St(i, e)).join("") + "</div></div>").join("") + "</div>";
  }
  const Mt = document.createElement("div");
  Mt.className = "tfMoreBackdrop", Mt.hidden = !0, g.appendChild(Mt);
  const Ga = document.createElement("div");
  Ga.className = "tfMoreBackdrop tfMoreUnder", Ga.hidden = !0, g.insertBefore(Ga, Mt);
  const nl = (t, e) => {
    for (let a = t; a && a !== Mt; a = a.parentElement) {
      const o = getComputedStyle(a).overflowY;
      if ((o === "auto" || o === "scroll") && a.scrollHeight > a.clientHeight + 1 && (e < 0 ? a.scrollTop > 0 : a.scrollTop + a.clientHeight < a.scrollHeight - 1)) return !0;
    }
    return !1;
  };
  let Rr = null;
  Mt.addEventListener("touchstart", (t) => {
    Rr = { x: t.touches[0].clientX, y: t.touches[0].clientY };
  }, { passive: !0 }), Mt.addEventListener("touchmove", (t) => {
    var i, l;
    if (!Rr || t.touches.length > 1 || (l = (i = t.target).closest) != null && l.call(i, "input,textarea,select")) return;
    const e = t.touches[0], a = Rr.x - e.clientX, o = Rr.y - e.clientY;
    Rr = { x: e.clientX, y: e.clientY }, Math.abs(o) >= Math.abs(a) && !nl(t.target, o) && t.preventDefault();
  }, { passive: !1 }), Mt.addEventListener("wheel", (t) => {
    var e, a;
    Math.abs(t.deltaX) > Math.abs(t.deltaY) && ((a = (e = t.target).closest) != null && a.call(e, "[data-more-pages]")) || nl(t.target, t.deltaY) || t.preventDefault();
  }, { passive: !1 });
  const Sf = () => window.innerWidth <= 620;
  let Fe = null;
  Mt.addEventListener("pointerdown", (t) => {
    const e = Mt.querySelector(".tfMorePair");
    !Sf() || !e || !e.contains(t.target) || !t.isPrimary || Mt._closing || t.target.closest("input,textarea,select,.tfDacPad,[data-cover-art],.tfMoreSide") || (Fe = { x: t.clientX, y: t.clientY, t: performance.now(), dy: 0, v: 0, pair: e, from: t.target, grab: t.target.matches(".tfMore") || !!t.target.closest(".tfMoreHead") });
  }, !0), Mt.addEventListener("pointermove", (t) => {
    if (!Fe || !t.isPrimary) return;
    const e = t.clientY - Fe.y, a = performance.now();
    if (!Fe.on) {
      if (Math.abs(t.clientX - Fe.x) > 8 || e < -8 || !Fe.grab && nl(Fe.from, -1)) {
        Fe = null;
        return;
      }
      if (e < 8) return;
      Fe.on = !0;
      try {
        Mt.setPointerCapture(t.pointerId);
      } catch {
      }
    }
    Fe.v = (e - Fe.dy) / Math.max(1, a - Fe.t), Fe.dy = e, Fe.t = a, Fe.pair.style.transform = "translateY(" + Math.max(0, e) + "px)";
  });
  const Jc = (t) => {
    if (!Fe || !t.isPrimary) return;
    const e = Fe;
    if (Fe = null, !e.on) return;
    const a = (y) => {
      y.preventDefault(), y.stopImmediatePropagation();
    };
    window.addEventListener("click", a, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", a, { capture: !0 }), 300);
    const o = t.type === "pointerup" && (e.dy > 120 || e.v > 0.5), i = "translateY(" + Math.max(0, e.dy) + "px)";
    if (e.pair.style.transform = "", !o || Ge()) {
      o ? gl() : e.pair.animate([{ transform: i }, { transform: "none" }], { duration: 320, easing: Ce.spring });
      return;
    }
    const l = A;
    Mt._closing = !0, Mt.style.pointerEvents = "none", Mt.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220, easing: Ce.exit, fill: "forwards" });
    const c = e.pair.animate([{ transform: i }, { transform: "translateY(calc(100% + 40px))" }], { duration: 220, easing: Ce.exit, fill: "forwards" });
    let u = !1;
    const f = () => {
      u || (u = !0, Mt._closing = !1, Mt.style.pointerEvents = "", Mt.getAnimations().forEach((y) => y.cancel()), e.pair.getAnimations().forEach((y) => y.cancel()), A === l && gl());
    };
    c.finished.then(f, f), setTimeout(f, 300);
  };
  Mt.addEventListener("pointerup", Jc), Mt.addEventListener("pointercancel", Jc);
  function rl() {
    const t = Mt.querySelector(".tfMorePair"), e = Mt.querySelector(".tfMore");
    t == null || t.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - e.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", rl, { passive: !0 }), w && cr();
  let io = [];
  const _f = (t) => t === "favourites" || t.startsWith("summary:") || t.startsWith("group:");
  function Cf(t) {
    const e = (M, E = "") => '<div class="tfMoreHead">' + (A != null && A.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + cp + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + q(M) + "</div>" + E + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + dp + "</button></div>", a = (M, E) => '<div class="tfMoreNow"><div class="tfMoreState">' + q(M) + "</div></div>", o = Mf;
    if (t === "favourites") {
      const M = F(), E = new Set(M), T = [{ name: "Starred", ids: M }, { name: "Home", ids: Vt.homeVacuums }, { name: "Security", ids: [...Vt.security.alarms, ...Vt.security.locks] }, ...Vt.rooms.map((P) => ({ name: P.name, ids: [...P.actions, ...P.plugs] }))].map((P, S) => S ? { ...P, ids: P.ids.filter((Y) => !E.has(Y)) } : P).filter((P) => P.ids.length);
      return [e("Favourites"), a(M.length ? M.length + " starred" : "None starred"), o(T, { star: !0 }, !0)];
    }
    const i = (M, { name: E = "", alert: T = !1, plain: P = !1 } = {}) => {
      const S = P ? [] : M.filter((rt) => nr.includes(rt.split(".")[0])), Y = M.filter((rt) => !S.includes(rt)), B = (rt) => rt.startsWith("vacuum.") && Gt(rt).battery_level != null ? Gt(rt).battery_level + "%" : null;
      return '<div class="tfMoreGroup">' + (E ? '<div class="tfMoreGroupName">' + q(E) + "</div>" : "") + '<div class="tfMoreActions">' + S.map((rt) => yr(rt, !0)).join("") + Y.map((rt) => St(rt, { plain: P, alert: T, say: P ? B(rt) : null })).join("") + "</div></div>";
    };
    if (t.startsWith("summary:")) {
      const M = ae().find((S) => S.key === t.slice(8));
      if (!M) return null;
      const E = M.key === "light" ? (M.groups || []).flatMap((S) => S.ids) : [], T = E.some((S) => {
        var Y;
        return ((Y = k[S]) == null ? void 0 : Y.state) === "on";
      }), P = E.length ? '<button class="primary" type="button" data-acts="' + go(E.map((S) => ["light", T ? "turn_off" : "turn_on", S])) + '">' + (T ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [e(M.name), '<div class="tfMoreNowRow">' + a(M.value) + P + "</div>", ...(M.groups || []).map((S) => i(S.ids, { name: S.name === M.name ? "" : S.name, alert: S.alert, plain: M.plain }))];
    }
    if (t.startsWith("group:")) {
      const [, M, E] = t.split(":"), T = Vt.rooms.find((Y) => Y.id === M), P = T && $o(T).find((Y) => Y.key === E);
      if (!P) return null;
      const S = P.acts ? '<button class="primary" type="button" data-acts="' + go(P.acts) + '">' + (P.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [e(T.name + " " + P.label.toLowerCase()), '<div class="tfMoreNowRow">' + a(P.value) + S + "</div>", i(xr(T, E))];
    }
    const l = t.split(".")[0];
    k[t];
    const c = nr.includes(l) || Vr.includes(l) ? sa(t) : il(t), u = Rf(t), f = [...u ? u.pages.map((M) => ({ name: M.name, svg: M.svg, tabs: M.tabs, html: M.space + '<div class="tfMoreCtl"' + Vo(t).replace(" data-light", "") + ">" + M.rows.filter(Boolean).join("") + "</div>" })) : [{ name: "Control", svg: fa, html: Df(t) + (l === "plant" ? Ff(t).join("") : "") + c.sections.filter(Boolean).join("") }], { name: "Info", svg: _p, html: Hf(t) }];
    A && A.page == null && (A.page = 0), A && (A.pages = f.length);
    const y = (A == null ? void 0 : A.page) || 0, _ = (A == null ? void 0 : A.mode) || "", x = f.flatMap((M, E) => (M.tabs || [{ name: M.name, svg: M.svg }]).map((T) => ({ ...T, page: E }))), R = (M) => M.page === y && (M.mode == null || M.mode === _);
    return [
      Tf(t, c),
      '<div class="tfMorePages' + (u ? " tfMorePop" : "") + (_ === "colour" && y === 0 ? " tfMoreHold" : "") + '" data-more-pages>' + f.map((M) => '<section class="tfMorePage" aria-label="' + M.name + '" data-mode="' + _ + '">' + M.html + "</section>").join("") + "</div>",
      // the pages' icons in place of their dots (Matt, 12 Nov): Control's sliders and Info's (i); a light's Colour its palette first
      '<div class="tfMoreDots tfMorePageIcons" role="tablist" aria-label="Pages">' + x.map((M) => '<button type="button" role="tab" aria-selected="' + R(M) + '" aria-label="' + M.name + '" title="' + M.name + '" data-more-page="' + M.page + '"' + (M.mode != null ? ' data-more-mode="' + M.mode + '"' : "") + (R(M) ? "" : ' tabindex="-1"') + ">" + M.svg + "</button>").join("") + "</div>"
    ];
  }
  const Af = (t, e) => {
    const a = t.split(".")[0], o = k[t], i = o.attributes;
    if (a === "light") return Ee(t);
    const l = a === "climate" ? jt(i.hvac_action || o.state) : a === "humidifier" ? jt(i.action || o.state) : a === "water_heater" ? jt(i.operation_mode || o.state) : a === "fan" && o.state === "on" && i.percentage != null ? i.percentage + "%" : (a === "valve" || a === "cover") && i.current_position != null && o.state !== "closed" ? i.current_position + "%" : Ee(t);
    return [e, l].filter(Boolean).join(" · ");
  };
  function Tf(t, e, a) {
    var c, u, f, y, _;
    const o = (c = Vt.areaOf) == null ? void 0 : c.call(Vt, t), i = o && (((u = Vt.rooms.find((x) => x.id === o)) == null ? void 0 : u.name) || ((_ = (y = (f = d()) == null ? void 0 : f.areas) == null ? void 0 : y[o]) == null ? void 0 : _.name)) || "", l = e.button ? eo(t, e) : '<div class="tfIcon"' + be(t, e.icon) + "></div>";
    return '<div class="tfMoreHead tfMoreTileHead' + (e.on ? " on" : "") + '"' + (e.tone ? ' data-tone="' + e.tone + '"' : "") + Vo(t) + ">" + (A != null && A.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + cp + "</button>" : "") + l + '<div class="tfName"><span class="activityRowName" id="tfMoreTitle">' + q(bt(t)) + '</span><span class="activityRowMeta">' + q(Af(t, i)) + '</span></div><button class="tfBack" type="button" data-more-close aria-label="Close">' + dp + "</button></div>";
  }
  const Lf = ["lock", "alarm_control_panel", "switch", "input_boolean", "fan", "valve", "media_player", "automation", "script", "scene", "button"];
  function il(t) {
    var i;
    const e = t.split(".")[0], a = ((i = k[t]) == null ? void 0 : i.state) === "on", o = Vr.includes(e) ? { act: Dt(e, "toggle", t), label: "Turn " + bt(t) + (a ? " off" : " on") } : e === "scene" || e === "script" ? { act: Dt(e, "turn_on", t), label: "Run " + bt(t) } : null;
    return { sections: [], on: a, button: o, icon: ga(t) };
  }
  function Df(t) {
    const e = t.split(".")[0];
    if (Lf.includes(e) || e === "light" && !gn(t)) {
      const i = nr.includes(e) ? sa(t) : il(t);
      return i != null && i.button ? '<div class="tfMoreSpace tfMoreSwitch' + (i.on ? " on" : "") + '"' + (i.tone ? ' data-tone="' + i.tone + '"' : "") + Vo(t) + ">" + eo(t, i) + "</div>" : "";
    }
    if (e === "cover") return '<div class="tfMoreSpace tfMoreFill"><div data-cover-art="' + q(t) + '"></div></div>';
    if (e === "light" && gn(t)) return '<div class="tfMoreSpace tfMoreFill"><div class="tfDacPad" data-dac="more:' + q(t) + '"></div></div>';
    const { big: a, lines: o } = Pf(t);
    return '<div class="tfMoreSpace"><div class="tfMoreBig' + (je("pos", t) != null ? " live" : "") + '"><span class="tfMoreNum">' + q(a[0]) + "</span>" + (a[1] ? '<span class="tfMoreUnit">' + q(a[1]) + "</span>" : "") + '</div><div class="tfMoreFacts">' + o.map(([i, l]) => '<div class="tfMoreFact"><span>' + q(i) + "</span><span>" + q(l) + "</span></div>").join("") + "</div></div>";
  }
  const Ef = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z"/></svg>', Bf = ["light", "climate", "fan", "humidifier", "water_heater", "alarm_control_panel", "cover", "lock", "valve", "switch", "input_boolean"], so = (t, e) => '<div class="tfMoreField"><div class="tfMoreLabel">' + q(t) + "</div>" + e + "</div>", Ea = (t, e) => ia("tfSeg", t, e), Li = (t, e, a, o, i, l) => '<div class="tfBar tfPopBar ' + t + '" role="slider" tabindex="0" aria-label="' + q(o) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(a) + '" aria-valuetext="' + q(i) + '" data-drag="' + q(t + "|" + e) + '"><i style="width:' + Math.max(0, Math.min(100, a)) + '%"><output class="tfBarVal">' + q(i) + "</output></i>" + (l ? '<span class="tfBarIcon"' + be("", l, o) + "></span>" : "") + "</div>", Qc = (t, e, a, o, i) => '<div class="tfBar tfPopBar ' + t + '" role="slider" tabindex="0" aria-label="' + q(o) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(a ?? 0) + '"' + (i ? ' aria-valuetext="' + q(i) + '"' : "") + ' data-drag="' + q(t + "|" + e) + '">' + (i ? '<output class="tfBarVal mid">' + q(i) + "</output>" : "") + (a == null ? "" : '<b style="left:' + a + '%"></b>') + "</div>", Cn = (t, e) => '<div class="tfMoreSpace tfMoreSwitch' + (e.on ? " on" : "") + '"' + (e.tone ? ' data-tone="' + e.tone + '"' : "") + Vo(t) + ">" + eo(t, e) + "</div>", sl = (t, e, a) => '<div class="tfMoreSpace"><div class="tfMoreBig"><span class="tfMoreNum">' + q(t) + "</span>" + (e ? '<span class="tfMoreUnit">' + q(e) + "</span>" : "") + '</div><div class="tfMoreFacts">' + a.filter(([, o]) => o != null && o !== "").map(([o, i]) => '<div class="tfMoreFact"><span>' + q(o) + "</span><span>" + q(i) + "</span></div>").join("") + "</div></div>", td = () => '<input class="tfMoreCode" type="password" inputmode="numeric" autocomplete="off" placeholder="Code" aria-label="Code" data-code value="' + q((A == null ? void 0 : A.code) || "") + '">', Di = (t, e, a, o, i) => ({ label: o, pressed: i, html: null, coded: [t, e, a].join("|") }), ed = (t, e) => '<div class="tfSeg" role="group" aria-label="' + q(t) + '">' + e.map((a) => '<button type="button" data-coded="' + q(a.coded) + '" aria-pressed="' + !!a.pressed + '">' + q(a.label) + "</button>").join("") + "</div>", ad = (t, e, a) => Ea(bt(t), [{ label: "Off", act: Dt(e, "turn_off", t), pressed: !a }, { label: "On", act: Dt(e, "turn_on", t), pressed: a }]);
  function Rf(t) {
    var l, c, u;
    const e = t.split(".")[0], a = k[t], o = a.attributes;
    if (!Bf.includes(e)) return null;
    const i = nr.includes(e) || Vr.includes(e) ? sa(t) : il(t);
    if (e === "light") {
      const f = a.state === "on", y = Ja(t), [_, x] = zo(t), R = je("bright", t, f ? $a(a) : 0), M = je("ctf", t, f && o.color_mode === "color_temp" ? o.color_temp_kelvin : null), E = je("hue", t, f && jo.includes(o.color_mode) && o.hs_color ? o.hs_color[0] : null), T = Ue(t) && Li("bright", t, R, bt(t) + " brightness", R + "%", "mdi:white-balance-sunny"), P = y.includes("color_temp") && Qc("ctf", t, M == null ? null : Math.round((x - M) / (x - _) * 1e3) / 10, bt(t) + " warmth", M == null ? "" : Math.round(M).toLocaleString() + "k"), S = y.some((B) => jo.includes(B)) && Qc("hue", t, E == null ? null : Math.round(E / 360 * 1e3) / 10, bt(t) + " colour", ""), Y = gn(t) ? '<div class="tfMoreSpace tfMoreFill tfMorePad"><div class="tfDacPad" data-dac="more:' + q(t) + '"></div></div>' : Cn(t, i);
      return { pages: [{
        name: "Control",
        svg: fa,
        space: Y,
        rows: [T, S ? '<div class="tfMoreSwap">' + (P || "") + S + "</div>" : P],
        tabs: S ? [{ name: "Colour", svg: Ef, mode: "colour" }, { name: "Controls", svg: fa, mode: "" }] : null
      }] };
    }
    if (e === "climate") {
      const f = o.target_temp_step || 0.5, y = Number(o.temperature), _ = Number(o.target_temp_low), x = Number(o.target_temp_high), R = (P) => Dt("climate", "set_temperature", t, P), M = (P, S, Y, B, rt) => (S == null ? void 0 : S.length) && so(P, Ea(P, S.map((Pt) => ({ label: jt(Pt), act: Dt("climate", B, t, { [rt]: Pt }), pressed: (Y === "state" ? a.state : o[Y]) === Pt })))), E = Number.isFinite(_) && Number.isFinite(x) && so("Range", '<div class="tfMoreRange">' + ba("Low", De(_) + " °C", R({ target_temp_low: _ - f, target_temp_high: x }), R({ target_temp_low: _ + f, target_temp_high: x })) + ba("High", De(x) + " °C", R({ target_temp_low: _, target_temp_high: x - f }), R({ target_temp_low: _, target_temp_high: x + f })) + "</div>"), T = Number(o.humidity);
      return { pages: [{
        name: "Control",
        svg: fa,
        space: sl(De(o.current_temperature), "°C", [["Target", Number.isFinite(y) ? De(y) + " °C" : null], ["Humidity", o.current_humidity != null ? o.current_humidity + "%" : null], ["Action", o.hvac_action && jt(o.hvac_action)]]),
        rows: [
          Number.isFinite(y) && ba("Target temperature", De(y) + " °C", R({ temperature: y - f }), R({ temperature: y + f })),
          E,
          M("Mode", o.hvac_modes, "state", "set_hvac_mode", "hvac_mode"),
          M("Fan", o.fan_modes, "fan_mode", "set_fan_mode", "fan_mode"),
          M("Swing", o.swing_modes, "swing_mode", "set_swing_mode", "swing_mode"),
          M("Preset", o.preset_modes, "preset_mode", "set_preset_mode", "preset_mode"),
          Number.isFinite(T) && o.min_humidity != null && so("Humidity", ba("Target humidity", T + "%", Dt("climate", "set_humidity", t, { humidity: T - 1 }), Dt("climate", "set_humidity", t, { humidity: T + 1 })))
        ]
      }] };
    }
    if (e === "fan") {
      const f = a.state === "on", y = je("fan", t, f && Number(o.percentage) || 0), _ = o.percentage != null;
      return { pages: [{ name: "Control", svg: fa, space: Cn(t, i), rows: _ ? [
        Li("fan", t, y, bt(t) + " speed", y + "%", "mdi:fan"),
        o.oscillating != null && so("Oscillate", Ea("Oscillate", [{ label: "Off", act: Dt("fan", "oscillate", t, { oscillating: !1 }), pressed: !o.oscillating }, { label: "On", act: Dt("fan", "oscillate", t, { oscillating: !0 }), pressed: !!o.oscillating }])),
        o.direction && so("Direction", Ea("Direction", [["forward", "Forward"], ["reverse", "Reverse"]].map(([x, R]) => ({ label: R, act: Dt("fan", "set_direction", t, { direction: x }), pressed: o.direction === x })))),
        ((l = o.preset_modes) == null ? void 0 : l.length) && so("Preset", Ea("Preset", o.preset_modes.map((x) => ({ label: jt(x), act: Dt("fan", "set_preset_mode", t, { preset_mode: x }), pressed: o.preset_mode === x }))))
      ] : [ad(t, "fan", f)] }] };
    }
    if (e === "humidifier") {
      const f = Number(o.humidity);
      return { pages: [{ name: "Control", svg: fa, space: sl(String(o.current_humidity), "%", [["Target", Number.isFinite(f) ? f + "%" : null], ["Action", o.action && jt(o.action)]]), rows: [
        Number.isFinite(f) && ba("Target humidity", f + "%", Dt("humidifier", "set_humidity", t, { humidity: f - 1 }), Dt("humidifier", "set_humidity", t, { humidity: f + 1 })),
        ((c = o.available_modes) == null ? void 0 : c.length) && so("Mode", Ea("Mode", o.available_modes.map((y) => ({ label: jt(y), act: Dt("humidifier", "set_mode", t, { mode: y }), pressed: o.mode === y }))))
      ] }] };
    }
    if (e === "water_heater") {
      const f = Number(o.temperature), y = o.target_temp_step || 1;
      return { pages: [{ name: "Control", svg: fa, space: sl(De(o.current_temperature).replace(/\.0$/, ""), "°C", [["Target", Number.isFinite(f) ? String(f).replace(/\.0$/, "") + " °C" : null], ["Mode", jt(o.operation_mode || a.state)]]), rows: [
        Number.isFinite(f) && ba("Target temperature", f + " °C", Dt("water_heater", "set_temperature", t, { temperature: f - y }), Dt("water_heater", "set_temperature", t, { temperature: f + y })),
        ((u = o.operation_list) == null ? void 0 : u.length) && so("Mode", Ea("Mode", o.operation_list.map((_) => ({ label: jt(_), act: Dt("water_heater", "set_operation_mode", t, { operation_mode: _ }), pressed: (o.operation_mode || a.state) === _ })))),
        o.away_mode != null && so("Away", Ea("Away", [{ label: "Off", act: Dt("water_heater", "set_away_mode", t, { away_mode: !1 }), pressed: o.away_mode !== "on" }, { label: "On", act: Dt("water_heater", "set_away_mode", t, { away_mode: !0 }), pressed: o.away_mode === "on" }]))
      ] }] };
    }
    if (e === "alarm_control_panel") {
      const f = [...Tp, ["armed_vacation", "Vacation", "alarm_arm_vacation", 32]].filter(([, , , x]) => !x || ue(t, x)), y = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "clear", "0", "back"], _ = '<div class="tfMoreSpace tfMoreKeypad">' + td() + '<div class="tfKeypad">' + y.map((x) => '<button type="button" data-key="' + x + '"' + (x === "back" ? ' aria-label="Delete"' : "") + ">" + (x === "clear" ? "Clear" : x === "back" ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22,3H7C6.31,3 5.77,3.35 5.41,3.88L0,12L5.41,20.11C5.77,20.64 6.31,21 7,21H22A2,2 0 0,0 24,19V5A2,2 0 0,0 22,3M22,19H7.07L2.4,12L7.06,5H22V19M10.41,17L14,13.41L17.59,17L19,15.59L15.41,12L19,8.41L17.59,7L14,10.59L10.41,7L9,8.41L12.59,12L9,15.59L10.41,17Z"/></svg>' : x) + "</button>").join("") + "</div></div>";
      return { pages: [{ name: "Control", svg: fa, space: _, rows: [ed(bt(t), f.map(([x, R, M]) => Di("alarm_control_panel", M, t, R, a.state === x)))] }] };
    }
    if (e === "cover") {
      if (o.current_position == null) return { pages: [{ name: "Control", svg: fa, space: Cn(t, i), rows: [Ea(bt(t), [{ label: "Open", act: Dt("cover", "open_cover", t), pressed: a.state !== "closed" }, { label: "Close", act: Dt("cover", "close_cover", t), pressed: a.state === "closed" }])] }] };
      const f = a.state === "opening" || a.state === "closing", y = Uo(t), _ = gr(t);
      return { pages: [{ name: "Control", svg: fa, space: '<div class="tfMoreSpace tfMoreArt"><div data-cover-art="' + q(t) + '"></div></div>', rows: [
        ue(t, Wl) && Re(t, y),
        _ != null && so("Tilt", Li("tiltp", t, je("tiltp", t, _), bt(t) + " tilt", Math.round(je("tiltp", t, _)) + "%")),
        Ea(bt(t), [ue(t, gp) && { label: "Open", act: Dt("cover", "open_cover", t), disabled: y >= 100 && !f }, ue(t, wp) && { label: "Stop", act: Dt("cover", "stop_cover", t) }, ue(t, bp) && { label: "Close", act: Dt("cover", "close_cover", t), disabled: y <= 0 && !f }])
      ] }] };
    }
    if (e === "lock")
      return { pages: [{ name: "Control", svg: fa, space: Cn(t, i), rows: [
        td(),
        ed(bt(t), [Di("lock", "lock", t, "Lock", a.state === "locked"), Di("lock", "unlock", t, "Unlock", a.state === "unlocked"), ue(t, Ap) && Di("lock", "open", t, "Open", a.state === "open")].filter(Boolean))
      ] }] };
    if (e === "valve") {
      const f = a.state === "open";
      if (o.current_position == null) return { pages: [{ name: "Control", svg: fa, space: Cn(t, i), rows: [Ea(bt(t), [{ label: "Open", act: Dt("valve", "open_valve", t), pressed: f }, { label: "Close", act: Dt("valve", "close_valve", t), pressed: !f }])] }] };
      const y = je("valve", t, Number(o.current_position) || 0);
      return { pages: [{ name: "Control", svg: fa, space: Cn(t, i), rows: [
        Li("valve", t, y, bt(t) + " position", Math.round(y) + "%", "mdi:valve"),
        Ea(bt(t), [{ label: "Open", act: Dt("valve", "open_valve", t) }, ue(t, 8) && { label: "Stop", act: Dt("valve", "stop_valve", t) }, { label: "Close", act: Dt("valve", "close_valve", t) }])
      ] }] };
    }
    return { pages: [{ name: "Control", svg: fa, space: Cn(t, i), rows: [ad(t, e, a.state === "on")] }] };
  }
  function Pf(t) {
    var _;
    const e = k[t], a = Gt(t), o = t.split(".")[0], i = (((_ = Xn[o]) == null ? void 0 : _.call(Xn, a)) || []).filter(([, x]) => x != null && x !== ""), l = (x) => {
      const R = i.findIndex(([M]) => M === x);
      return R < 0 ? null : i.splice(R, 1)[0][1];
    }, c = (x) => {
      const R = String(x).match(/^(-?[\d.,]+)\s*(.*)$/);
      return R ? [R[1], R[2]] : [String(x), ""];
    }, u = () => [jt(String(e.state).replace(/_/g, " ")), ""];
    let f;
    o === "light" ? (l("Brightness"), f = e.state === "on" && Ue(t) ? [String($a(e)), "%"] : u()) : o === "climate" ? f = c(l("Current temperature") || De(a.current_temperature) + " °C") : o === "cover" ? (l("Position"), f = a.current_position != null ? [String(ma(t)), "%"] : u()) : o === "humidifier" ? f = c(l("Current humidity") || e.state) : o === "vacuum" ? f = c(l("Battery") || e.state) : o === "plant" ? f = c(l("Moisture") || e.state) : ["media_player", "lock", "alarm_control_panel", "valve"].includes(o) ? f = u() : f = c(e.state + (a.unit_of_measurement ? " " + a.unit_of_measurement : ""));
    const y = i.length ? i.slice(0, 4) : [["State", Ee(t)]];
    return { big: f, lines: y };
  }
  function Hf(t) {
    var y, _, x, R, M, E, T;
    const e = k[t], a = d(), o = (y = a == null ? void 0 : a.entities) == null ? void 0 : y[t], i = o != null && o.device_id ? (_ = a == null ? void 0 : a.devices) == null ? void 0 : _[o.device_id] : null, l = '<div class="tfMoreGraph"><div class="tfMoreGroupName">Last 24 hours</div><svg class="tfGraph tfDay" data-day="' + q(t) + '" role="img" aria-label="' + q(bt(t)) + ', last 24 hours"></svg></div>', c = (x = Vt.areaOf) == null ? void 0 : x.call(Vt, t), u = c && (((R = Vt.rooms.find((P) => P.id === c)) == null ? void 0 : R.name) || ((E = (M = a == null ? void 0 : a.areas) == null ? void 0 : M[c]) == null ? void 0 : E.name)) || "", f = [
      ...((T = Xn[t.split(".")[0]]) == null ? void 0 : T.call(Xn, Gt(t))) || [],
      ["Changed", e.last_changed && Go(Date.parse(e.last_changed))],
      ["Area", u],
      ["Device", i && (i.name_by_user || i.name)],
      ["Integration", (o == null ? void 0 : o.platform) && jt(o.platform.replace(/_/g, " "))],
      ["Entity", t]
    ].filter(([, P]) => P != null && P !== "");
    return l + '<div class="tfMoreRows">' + f.map(([P, S]) => '<div class="tfMoreRow"><span>' + q(P) + "</span><span>" + q(S) + "</span></div>").join("") + "</div>" + kf(t) + (i ? '<button class="tfDetailsBtn tfMoreLink" type="button" data-path="/config/devices/device/' + q(o.device_id) + '"><span>Device page</span>' + Vl + "</button>" : "");
  }
  const Nf = () => "";
  let ll = "";
  function cl(t) {
    var e;
    A && (A.details = t, $n(), (e = Mt.querySelector(t ? "[data-details-close]" : "[data-details]")) == null || e.focus({ preventScroll: !0 }));
  }
  const Ei = (t) => {
    const e = k[t], a = ma(t), o = Uo(t);
    return { kind: Fl(e), name: bt(t), text: Ee(t), pos: a, target: Math.abs(o - a) > 0.5 ? o : null, moving: e.state === "opening" || e.state === "closing", tilt: gr(t) ?? 100, canSet: ue(t, Wl) };
  };
  function dl(t) {
    t.querySelectorAll("[data-cover-art]").forEach((e) => {
      const a = e.dataset.coverArt, o = e.dataset.artKey || "more:" + a;
      let i = Ft.get(o);
      i || (i = M0({ onMove: (l) => Hr(a, l), onSet: (l) => {
        Hr(a, l), Nr("pos", a);
      } }), i.coverId = a, Ft.set(o, i)), e.replaceWith(i.el), i.update(Ei(a));
    });
  }
  const od = (t) => [...Ft.values()].filter((e) => e.coverId === t), pl = () => Ft.forEach((t) => {
    k[t.coverId] && t.update(Ei(t.coverId));
  }), nd = () => {
    Ft.forEach((t, e) => {
      t.el.isConnected || (t.destroy(), Ft.delete(e));
    }), pl();
  };
  function $n() {
    var l, c;
    if (!A || !(_f(A.id) || k[A.id])) {
      Mt.hidden = !0;
      return;
    }
    if ([...st.keys()].some((u) => u.endsWith("|" + A.id))) {
      pl();
      return;
    }
    const t = Cf(A.id), e = Mt.querySelector(".tfMore");
    if (!t) {
      Pi();
      return;
    }
    const a = $c(Mt), o = Nf(A.id), i = A.frame ? A.frame.wide : A.id.startsWith("summary:") || A.id.startsWith("group:");
    if (Mt.hidden || !e || t.length !== io.length || e.classList.contains("wide") !== i) {
      const u = hl ? A.scroll || 0 : !Mt.hidden && e ? e.scrollTop : 0;
      if (Mt.innerHTML = '<div class="tfMorePair' + (Mt.hidden ? "" : " still") + '" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (i ? " wide" : "") + '"' + (A.frame ? ' style="height:' + A.frame.h + 'px"' : "") + ' tabindex="-1">' + t.join("") + "</section></div>", ll = o, Mt.classList.toggle("wide", i), Mt.hidden = !1, rl(), dl(Mt), wo(Mt), Qa(Mt), Mt.querySelectorAll("[data-day]").forEach((f) => dd(f.dataset.day, f, A.at)), sd(Mt), u && (Mt.querySelector(".tfMore").scrollTop = u), rd(), al(Mt, a), !Mt.contains(n.activeElement)) {
        const f = Mt.querySelector("[data-more-close]");
        (l = f != null && f.offsetParent ? f : Mt.querySelector(".tfMore")) == null || l.focus({ preventScroll: !0 });
      }
    } else {
      if (t.forEach((u, f) => {
        var R, M;
        if (u === io[f] || u.includes("data-cover-art") || e.children[f].contains((M = (R = n.activeElement) == null ? void 0 : R.matches) != null && M.call(R, "input,select") ? n.activeElement : null) || [...st.keys()].some((E) => e.children[f].querySelector('[data-drag="' + CSS.escape(E) + '"]'))) return;
        const y = document.createElement("div");
        y.innerHTML = u;
        const _ = [...e.children[f].querySelectorAll(".tfMoreCtl,.tfMorePage")].map((E) => E.scrollTop), x = ol(e.children[f], y.firstElementChild);
        x.querySelectorAll(".tfMoreCtl,.tfMorePage").forEach((E, T) => {
          _[T] && (E.scrollTop = _[T]);
        }), Qa(x), sd(x), wo(x);
      }), o !== ll) {
        const u = Mt.querySelector(".tfMoreSideBody");
        u && (u.innerHTML = o), ll = o;
      }
      e.querySelectorAll("[data-day]").forEach((u) => {
        u.innerHTML || dd(u.dataset.day, u, A.at);
      }), rd(), Mt.contains(n.activeElement) || al(Mt, a);
    }
    (c = Mt.querySelector(".tfMorePair")) == null || c.classList.toggle("details", !!(A.details && o)), io = t, pl();
  }
  function rd() {
    const t = Mt.querySelector("[data-more-pages]");
    !t || !A || (t.scrollTo({ left: (A.page || 0) * t.clientWidth, behavior: "instant" }), fl(), ul(t));
  }
  function ul(t) {
    const e = t.children[(A == null ? void 0 : A.page) || 0];
    e && (t.style.height = e.scrollHeight + "px");
  }
  function fl() {
    var e;
    const t = (A == null ? void 0 : A.page) || 0;
    Mt.querySelectorAll("[data-more-page]").forEach((a) => {
      const o = Number(a.dataset.morePage) === t && (a.dataset.moreMode == null || a.dataset.moreMode === (A.mode || ""));
      a.setAttribute("aria-selected", String(o)), a.tabIndex = o ? 0 : -1;
    }), (e = Mt.querySelector("[data-more-pages]")) == null || e.classList.toggle("tfMoreHold", A.mode === "colour" && t === 0);
  }
  function Of(t, e) {
    var o, i;
    const a = Mt.querySelector("[data-more-pages]");
    !a || !A || (A.page = Math.max(0, Math.min((A.pages || 2) - 1, t)), a.scrollTo({ left: A.page * a.clientWidth, behavior: (o = window.matchMedia) != null && o.call(window, "(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" }), fl(), ul(a), e && ((i = Mt.querySelector('.tfMoreDots [aria-selected="true"]')) == null || i.focus({ preventScroll: !0 })));
  }
  function Bi(t, e, a) {
    A && (e != null && e !== (A.mode || "") && (A.mode = e, Mt.querySelectorAll(".tfMorePage").forEach((o) => {
      o.dataset.mode = e;
    })), Of(t, a));
  }
  let Jn = null;
  Mt.addEventListener("touchstart", (t) => {
    var a, o;
    const e = t.touches[0];
    Jn = (o = (a = t.target).closest) != null && o.call(a, "[data-more-pages]") && t.touches.length === 1 ? { x: e.clientX, y: e.clientY } : null;
  }, { passive: !0 }), Mt.addEventListener("touchend", (t) => {
    if (!Jn || !A || (A.page || 0) !== 0 || !Mt.querySelector("[data-more-mode]")) {
      Jn = null;
      return;
    }
    const e = t.changedTouches[0], a = e.clientX - Jn.x, o = e.clientY - Jn.y;
    Jn = null, !(Math.abs(a) < 40 || Math.abs(a) < Math.abs(o) * 1.5) && (a > 0 && A.mode !== "colour" ? Bi(0, "colour") : a < 0 && A.mode === "colour" && Bi(0, ""));
  }, { passive: !0 });
  let id = 0;
  Mt.addEventListener("scroll", (t) => {
    var a;
    const e = t.target;
    !((a = e.matches) != null && a.call(e, "[data-more-pages]")) || !A || (clearTimeout(id), id = setTimeout(() => {
      if (!A) return;
      const o = Math.round(e.scrollLeft / Math.max(1, e.clientWidth));
      o !== (A.page || 0) && (A.page = o, fl(), ul(e));
    }, 80));
  }, !0), Mt.addEventListener("input", (t) => {
    var e, a;
    (a = (e = t.target).matches) != null && a.call(e, "[data-code]") && A && (A.code = t.target.value);
  }), Mt.addEventListener("click", (t) => {
    const e = t.target.closest("[data-key]"), a = t.target.closest("[data-coded]");
    if (!A || !(e || a)) return;
    const o = Mt.querySelector("[data-code]");
    if (e) {
      const f = e.dataset.key, y = A.code || "";
      A.code = f === "clear" ? "" : f === "back" ? y.slice(0, -1) : (y + f).slice(0, 12), o && (o.value = A.code);
      return;
    }
    const [i, l, c] = a.dataset.coded.split("|"), u = A.code;
    A.code = "", o && (o.value = ""), Pr(i, l, c, u ? { code: u } : null).catch(() => {
    });
  }), setInterval(() => {
    A && $n();
  }, 15 * 1e3);
  function Ri(t, e) {
    var i, l;
    const a = !!(A && e && Mt.contains(e)), o = a && Mt.querySelector(".tfMore");
    if (a && (A.scroll = o.scrollTop), a && !A.under) {
      const c = Mt.querySelector(".tfMorePair"), u = { more: A, parts: io, opener: e };
      c.classList.add("still"), c.style.transform = "", c.inert = !0, Ga.innerHTML = "", Ga.appendChild(c), Ga.classList.toggle("wide", Mt.classList.contains("wide")), Ga.hidden = !1, Mt.hidden = !0, Mt.innerHTML = "", A = { id: t, opener: e, back: null, frame: null, under: u, at: Number((i = e == null ? void 0 : e.dataset) == null ? void 0 : i.at) || null }, ml();
      return;
    }
    A = { id: t, opener: a ? A.opener : e, back: a ? A : null, frame: a ? A.frame || { wide: o.classList.contains("wide"), h: o.offsetHeight } : null, under: a ? A.under : null, at: Number((l = e == null ? void 0 : e.dataset) == null ? void 0 : l.at) || null }, ml();
  }
  let hl = !1;
  function ml() {
    io = [], hl = !Mt.hidden, Ft.forEach((t, e) => {
      e !== A.id && Mt.contains(t.el) && (t.destroy(), Ft.delete(e));
    }), $n(), hl = !1;
  }
  function Pi() {
    if (!A) return;
    const t = A;
    lm(Mt, () => {
      A === t && gl();
    });
  }
  function gl() {
    var o, i, l, c, u, f, y, _;
    const t = A == null ? void 0 : A.opener, e = A == null ? void 0 : A.under;
    A = null, Ft.forEach((x, R) => {
      Mt.contains(x.el) && (x.destroy(), Ft.delete(R));
    }), Ye.forEach((x, R) => {
      /^more2?:/.test(R) && Ye.delete(R);
    }), Mt.hidden = !0, Mt.innerHTML = "";
    const a = { preventScroll: !0 };
    if (e) {
      const x = Ga.firstElementChild;
      A = e.more, io = e.parts, x && (x.inert = !1, Mt.appendChild(x)), Mt.classList.toggle("wide", Ga.classList.contains("wide")), Ga.hidden = !0, Ga.innerHTML = "", Mt.hidden = !1;
      const R = Mt.querySelector(".tfMore");
      R && (R.scrollTop = A.scroll || 0), $n(), (i = (o = e.opener) != null && o.isConnected ? e.opener : Mt.querySelector("[data-more-close]")) == null || i.focus(a);
      return;
    }
    t != null && t.isConnected ? t.focus(a) : (l = t == null ? void 0 : t.dataset) != null && l.more ? (c = H.querySelector('[data-more="' + CSS.escape(t.dataset.more) + '"]')) == null || c.focus(a) : (u = t == null ? void 0 : t.dataset) != null && u.summary ? (f = H.querySelector('[data-summary="' + CSS.escape(t.dataset.summary) + '"]')) == null || f.focus(a) : (y = t == null ? void 0 : t.hasAttribute) != null && y.call(t, "data-favs-edit") && ((_ = H.querySelector("[data-favs-edit]")) == null || _.focus(a));
  }
  const If = { moisture: "moisture", light: "light", brightness: "light", temperature: "temperature", fertility: "fertility", conductivity: "fertility" };
  function Ff(t) {
    const e = String(Gt(t).problem || ""), a = "sensor." + t.split(".")[1] + "_";
    return e === "none" ? [] : e.split(",").map((o) => o.trim().split(" ")).map(([o, i]) => {
      const l = If[o], c = a + l;
      if (!l || !k[c] || !En[l]) return "";
      const u = Gt(c).unit_of_measurement || "", [f, y] = En[l], _ = i === "low";
      return '<div class="tfMoreGroup tfPlantProblem"><div class="tfMoreGroupName">' + q(bt(c)) + '</div><svg class="tfGraph tfPlantGraph" data-plant-graph="' + q(c) + '" data-guide="' + (_ ? f : y) + '" data-guide-word="' + q("Wants " + (_ ? "" : "up to ") + (_ ? f : y).toLocaleString() + (u === "%" ? "%" : u ? " " + u : "") + (_ ? " or more" : "")) + '" role="img" aria-label="' + q(bt(c)) + ', last 24 hours"></svg></div>';
    }).filter(Boolean);
  }
  const sd = (t) => t.querySelectorAll("[data-plant-graph]").forEach((e) => ud(e.dataset.plantGraph, e, { guide: Number(e.dataset.guide), guideWord: e.dataset.guideWord }).then(() => rc(e)));
  function bl(t, e, a, o = {}) {
    const i = e.map((P) => P[1]).concat(o.guide != null ? [o.guide] : []), l = o.zero ? 0 : Math.min(...i), c = Math.max(...i), u = Math.max(120, t.clientWidth || 260), f = Math.max(60, t.clientHeight || 130), y = 8, _ = f - 20, x = Date.now() - 24 * 3600 * 1e3, R = 24 * 3600 * 1e3, M = (P) => Math.max(0, Math.min(u, (P - x) / R * u)), E = (P) => c === l ? (y + _) / 2 : _ - (P - l) / (c - l) * (_ - y);
    let T = "M" + M(e[0][0]).toFixed(1) + " " + E(e[0][1]).toFixed(1);
    if (e.length > 2) T = Zp(e.map((P) => [M(P[0]), E(P[1])]));
    else for (let P = 1; P < e.length; P++) T += o.smooth ? "L" + M(e[P][0]).toFixed(1) + " " + E(e[P][1]).toFixed(1) : "H" + M(e[P][0]).toFixed(1) + "V" + E(e[P][1]).toFixed(1);
    t.setAttribute("viewBox", "0 0 " + u + " " + f), t.setAttribute("aria-label", a), t.innerHTML = Kp(u, y, _) + '<path d="' + T + "V" + _ + "H" + M(e[0][0]).toFixed(1) + 'Z" fill="' + (o.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + T + '" fill="none" stroke="' + (o.colour || "var(--primary)") + '" stroke-width="' + _e.graphs.weight + '" stroke-linejoin="round" stroke-linecap="round"/><text x="0" y="' + (f - 4) + '">24 h ago</text><text x="' + u + '" y="' + (f - 4) + '" text-anchor="end">Now</text>' + (o.guide != null ? '<line class="tfGuide" x1="0" x2="' + u + '" y1="' + E(o.guide).toFixed(1) + '" y2="' + E(o.guide).toFixed(1) + '"/><text class="tfGuideWord" x="' + u + '" y="' + (E(o.guide) < 20 ? E(o.guide) + 14 : E(o.guide) - 5).toFixed(1) + '" text-anchor="end">' + q(o.guideWord || "") + "</text>" : "");
  }
  const ld = { lock: ["unlocked", "open", "opening"], cover: ["open", "opening", "closing"], valve: ["open", "opening", "closing"], vacuum: ["cleaning", "returning"] }, qf = (t, e) => {
    const a = t.split(".")[0];
    return ld[a] ? ld[a].includes(e) : a === "alarm_control_panel" || a === "climate" || a === "media_player" ? !["off", "standby", "disarmed", "unavailable", "unknown"].includes(e) : e === "on";
  }, Wf = (t) => {
    const e = t.split(".")[0], a = Gt(t).device_class;
    return e === "binary_sensor" ? { moisture: "Wet", smoke: "Smoke", gas: "Gas", carbon_monoxide: "Carbon monoxide", safety: "Unsafe" }[a] || ($i.includes(a) ? "Open" : "On") : { lock: "Unlocked", cover: "Open", valve: "Open", vacuum: "Cleaning", alarm_control_panel: "Armed" }[e] || "On";
  }, cd = /* @__PURE__ */ new Map();
  let jf = 0;
  async function Vf(t) {
    var i;
    let e = cd.get(t);
    if (!e || Date.now() - e.at > 60 * 1e3) {
      let l = [];
      if (Ya(t) && Number.isFinite(Number((i = k[t]) == null ? void 0 : i.state))) l = pd(t).map(([c, u]) => [c, String(u)]);
      else try {
        const c = await L({ type: "history/history_during_period", start_time: new Date(Date.now() - 864e5).toISOString(), entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        l = ((c == null ? void 0 : c[t]) || []).map((u) => [u.lu != null ? u.lu * 1e3 : Date.parse(u.last_updated || u.last_changed), String(u.s ?? u.state)]).filter(([u]) => Number.isFinite(u));
      } catch {
      }
      l.length || (l = (va || []).filter((c) => c.entity_id === t).map((c) => [c.when * 1e3, String(c.state)])), e = { at: Date.now(), pts: l }, cd.set(t, e);
    }
    const a = k[t], o = e.pts.slice().sort((l, c) => l[0] - c[0]);
    return a && (!o.length || o[o.length - 1][1] !== a.state) && o.push([Date.parse(a.last_changed) || Date.now(), a.state]), o;
  }
  async function dd(t, e, a) {
    const o = await Vf(t);
    if (!e.isConnected) return;
    const i = o.map(([B, rt]) => [B, Number(rt)]);
    if (o.length > 1 && i.every(([, B]) => Number.isFinite(B))) {
      bl(e, i, bt(t) + ", last 24 hours");
      return;
    }
    const l = Date.now(), c = l - 864e5, u = Math.max(200, e.clientWidth || 360), f = 62, y = (B) => Math.max(0, Math.min(u, (B - c) / 864e5 * u)), _ = [];
    let x = null;
    o.forEach(([B, rt]) => {
      const Pt = qf(t, rt);
      Pt && x == null ? x = Math.max(B, c) : !Pt && x != null && (_.push([x, Math.max(B, c)]), x = null);
    }), x != null && _.push([x, l]);
    const R = qn(t) ? "var(--danger)" : t.startsWith("light.") ? "#ffaa00" : "var(--primary)", M = Wf(t), E = "tfDayClip" + ++jf, T = _.map(([B, rt]) => M + (rt >= l - 1e3 && B <= c + 1e3 ? " all day" : rt >= l - 1e3 ? " since " + Ia(B) : B <= c + 1e3 ? " until " + Ia(rt) : " " + Ia(B) + "–" + Ia(rt)));
    let P = "", S = -1 / 0;
    _.forEach(([B], rt) => {
      const Pt = T[rt].length * 5.4, Et = Math.min(y(B), u - Pt);
      Et < S + 8 || (P += '<text x="' + Et.toFixed(1) + '" y="10">' + q(T[rt]) + "</text>", S = Et + Pt);
    });
    let Y = '<text x="' + u + '" y="' + (f - 2) + '" text-anchor="end">Now</text>';
    [0, 6, 12, 18].forEach((B) => {
      let rt = new Date(l).setHours(B, 0, 0, 0);
      rt > l && (rt -= 864e5), y(rt) > 8 && y(rt) < u - 34 && (Y += '<text x="' + y(rt).toFixed(1) + '" y="' + (f - 2) + '" text-anchor="middle">' + String(B).padStart(2, "0") + "</text>");
    }), e.setAttribute("viewBox", "0 0 " + u + " " + f), e.setAttribute("aria-label", bt(t) + ", last 24 hours: " + (T.length ? T.join(", ") : "no changes")), e.innerHTML = '<clipPath id="' + E + '"><rect x="0" y="18" width="' + u + '" height="26" rx="8"/></clipPath>' + P + '<rect x="0" y="18" width="' + u + '" height="26" rx="8" fill="var(--text)" fill-opacity=".1"/><g clip-path="url(#' + E + ')">' + _.map(([B, rt]) => '<rect x="' + y(B).toFixed(1) + '" y="18" width="' + Math.max(2, y(rt) - y(B)).toFixed(1) + '" height="26" fill="' + R + '"/>').join("") + "</g>" + (a && a >= c ? '<line x1="' + y(a).toFixed(1) + '" x2="' + y(a).toFixed(1) + '" y1="13" y2="49" stroke="var(--text)" stroke-width="2" stroke-linecap="round"/>' : "") + Y;
  }
  function pd(t) {
    var o;
    const e = Number((o = k[t]) == null ? void 0 : o.state), a = Date.now();
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
    var E, T;
    let o = ut.get(t);
    if (t.endsWith("_solar_power")) o = { at: Date.now(), points: _d() };
    else if (Ya(t)) o = { at: Date.now(), points: pd(t) };
    else if (!o || Date.now() - o.at > 5 * 60 * 1e3) {
      try {
        const P = new Date(Date.now() - 864e5).toISOString(), S = await L({ type: "history/history_during_period", start_time: P, entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), Y = ((S == null ? void 0 : S[t]) || []).map((B) => [B.lu != null ? B.lu * 1e3 : Date.parse(B.last_updated || B.last_changed), Number(B.s ?? B.state)]).filter(([B, rt]) => Number.isFinite(B) && Number.isFinite(rt));
        o = { at: Date.now(), points: Y };
      } catch {
        o = { at: Date.now(), points: [] };
      }
      ut.set(t, o);
    }
    const i = e || H.querySelector('[data-graph="' + CSS.escape(t) + '"]');
    if (!i) return;
    const l = k[t], c = ((E = l == null ? void 0 : l.attributes) == null ? void 0 : E.unit_of_measurement) || "", u = o.points.slice(), f = Number(l == null ? void 0 : l.state);
    if (Number.isFinite(f) && !t.endsWith("_solar_power") && u.push([Date.now(), f]), u.length < 2) {
      i.setAttribute("aria-label", bt(t) + ": no history for the last 24 hours"), i.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const y = u.map((P) => P[1]), _ = Math.min(...y), x = Math.max(...y), R = (P) => P.toLocaleString(void 0, { maximumFractionDigits: Math.abs(P) >= 100 ? 0 : 1 }), M = ((T = l == null ? void 0 : l.attributes) == null ? void 0 : T.state_class) === "total_increasing";
    bl(i, u, bt(t) + ", last 24 hours: " + (M ? "+" + R(y[y.length - 1] - y[0]) : _ === x ? R(_) : R(_) + " to " + R(x)) + (c ? " " + c : ""), { smooth: t.endsWith("_solar_power"), zero: t.endsWith("_solar_power"), ...a });
  }
  function fd() {
    const t = H == null ? void 0 : H.querySelector("[data-solar]");
    if (!t) return;
    const e = _d();
    bl(t, e, "Solar, last 24 hours: up to " + De(Math.max(...e.map((a) => a[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function zf(t, e) {
    const a = e.entity_id, o = kt.get(a) || {}, i = { open_cover: 100, close_cover: 0, set_cover_position: e.position, toggle: ma(a) > 0 ? 0 : 100 }[t], l = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: e.tilt_position }[t];
    i != null && (o.pos = i), l != null && (o.tilt = l), t === "stop_cover" && (delete o.pos, delete o.tilt), t === "stop_cover_tilt" && delete o.tilt, o.at = Date.now(), kt.set(a, o);
  }
  function hd(t, e, a) {
    var i;
    const o = a == null ? void 0 : a.entity_id;
    return t !== "light" || typeof o != "string" || !ra[o] || !Ue(o) || a.brightness_pct != null || a.brightness != null ? [e, a] : e !== "turn_on" && !(e === "toggle" && ((i = k[o]) == null ? void 0 : i.state) !== "on") ? [e, a] : ["turn_on", { ...a, brightness_pct: ra[o] }];
  }
  function Pr(t, e, a, o) {
    let i = { entity_id: a, ...o || {} };
    return [e, i] = hd(t, e, i), t === "cover" && zf(e, i), Ka[a] = (Ka[a] || 0) + 1, co.set(kp, JSON.stringify(Ka)), Zr.call(t, e, i) ? Promise.resolve() : Promise.resolve(I(t, e, i));
  }
  function wl(t) {
    const [e, a, o, i] = t.split("|");
    Pr(e, a, o, i ? JSON.parse(i) : null).catch(() => {
    });
  }
  function Hr(t, e) {
    st.set("pos|" + t, e), Ma.delete(t), io = io.map(() => ""), [H, Mt].forEach((o) => o.querySelectorAll('[data-blocks="' + CSS.escape(t) + '"]').forEach((i) => mn(i, e)));
    const a = H.querySelector('.tfAction[data-k="' + CSS.escape(t) + '"] .tfName .activityRowMeta');
    if (a && (a.textContent = Math.round(e) + "%"), (A == null ? void 0 : A.id) === t) {
      const o = Mt.querySelector(".tfMoreState"), i = Mt.querySelector(".tfMoreSub");
      o && (o.textContent = Math.round(e) + "%", o.classList.add("live")), i && (i.textContent = "Currently " + ma(t) + "%");
    }
    od(t).forEach((o) => o.update(Ei(t)));
  }
  const Gf = (t, e) => {
    const a = t.shiftKey ? 10 : 1, o = { ArrowUp: e + a, ArrowRight: e + a, ArrowDown: e - a, ArrowLeft: e - a, PageUp: e + 25, PageDown: e - 25, Home: 0, End: 100 }[t.key];
    return o == null ? null : Math.max(0, Math.min(100, Math.round(o)));
  };
  function Uf(t, e) {
    var T;
    const a = t.dataset.blocks;
    (T = t.setPointerCapture) == null || T.call(t, e.pointerId);
    const o = (P) => {
      const S = t.getBoundingClientRect();
      return Math.max(0, Math.min(100, (P.clientX - S.left) / S.width * 100));
    }, i = o(e), l = e.clientX;
    let c = !1, u = Uo(a), f = i, y = 0;
    const _ = () => {
      u = Math.abs(f - u) < 0.2 ? f : u + (f - u) * 0.14, Hr(a, u), y = requestAnimationFrame(_);
    }, x = () => {
      c || (c = !0, t.classList.add("fine"), y = requestAnimationFrame(_));
    }, R = setTimeout(x, 350), M = (P) => {
      f = o(P), Math.abs(P.clientX - l) > 6 && (clearTimeout(R), x());
    }, E = () => {
      clearTimeout(R), cancelAnimationFrame(y), t.removeEventListener("pointermove", M), t.removeEventListener("pointerup", E), t.removeEventListener("pointercancel", E), t.classList.remove("fine"), Hr(a, c ? Math.round(u) : (Math.min(3, Math.floor(i / 25)) + 1) * 25), Nr("pos", a);
    };
    t.addEventListener("pointermove", M), t.addEventListener("pointerup", E), t.addEventListener("pointercancel", E);
  }
  function md(t) {
    var e;
    V = t.dataset.area, H.querySelectorAll(".tfAreaPanel").forEach((a) => {
      var i;
      const o = a === t;
      a.classList.toggle("active", o), a.setAttribute("aria-expanded", String(o)), (i = a.querySelector(".panelExpanded")) == null || i.toggleAttribute("inert", !o);
    }), Ma.set("areas", s(((e = H.querySelector('[data-k="areas"]')) == null ? void 0 : e.style.order) || 1)), setTimeout(() => Ds(!0), 340);
  }
  const Hi = {
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
    tiltp: { value: (t, e) => Math.round(e * 100), text: (t, e) => e + "%", send: (t, e) => ["cover", "set_cover_tilt_position", { tilt_position: e }] }
  };
  function Ni(t, e, a, o) {
    var y;
    const i = Hi[e].value(a, o);
    st.set(e + "|" + a, i);
    const l = Math.round(o * 100) + "%", c = t.querySelector("i");
    if (e === "tilt") {
      c.style.width = "calc((100% - 8px) * " + o + ")";
      const [_, x] = t.querySelectorAll("span");
      _.classList.toggle("lit", o > 0.08), x.classList.toggle("lit", o > 0.92), Ma.delete(a), io = io.map(() => ""), od(a).forEach((R) => R.update(Ei(a)));
    } else if (c) c.style.width = l;
    else {
      let _ = t.querySelector("b");
      _ || (_ = document.createElement("b"), t.appendChild(_)), _.style.left = l;
    }
    t.setAttribute("aria-valuenow", String(Math.round(o * 100)));
    const u = t.querySelector(".tfBarVal");
    u && (u.textContent = Hi[e].text(a, i));
    const f = t.closest(".tfMore") ? t.closest(".tfMore").querySelector(".tfMoreState") : (y = t.closest(".tfAction")) == null ? void 0 : y.querySelector(".tfName .activityRowMeta");
    f && (f.textContent = Hi[e].text(a, i));
  }
  function Nr(t, e) {
    const a = st.get(t + "|" + e), [o, i, l] = Hi[t].send(e, a), c = () => setTimeout(() => {
      st.delete(t + "|" + e), Be();
    }, 1500);
    Pr(o, i, e, l).then(c, c);
  }
  function gd(t) {
    t.addEventListener("click", (e) => {
      var o;
      const a = e.target.closest("[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-fav-hide],[data-energy-pick],[data-more-page],[data-path],.tfAreaPanel");
      if (Qe && !e.target.closest(".tfBoardMenu,[data-board-more]") && no(), !(!a || !t.contains(a) || a.disabled))
        if (a.dataset.boardMore)
          (Qe == null ? void 0 : Qe.key) === a.dataset.boardMore ? no(!0) : Zu(a.dataset.boardMore, a);
        else if (a.dataset.boardAct) Ku(Qe.key, a.dataset.boardAct);
        else if (a.dataset.boardShow) Os(a.dataset.boardShow);
        else if (a.dataset.favHide) Nc(a.dataset.favHide, !1);
        else if (a.dataset.energyPick) ac(a.dataset.energyPick);
        else if (a.dataset.act) wl(a.dataset.act);
        else if (a.hasAttribute("data-details")) cl(!(A != null && A.details));
        else if (a.hasAttribute("data-details-close")) cl(!1);
        else if (a.dataset.summary) Mr(a.dataset.summary, a);
        else if (a.dataset.star) la(a.dataset.star);
        else if (a.hasAttribute("data-more-back")) {
          const i = A.id;
          A = A.back, ml(), (o = Mt.querySelector('.tfMore [data-more="' + CSS.escape(i) + '"]')) == null || o.focus({ preventScroll: !0 });
        } else a.hasAttribute("data-favs-edit") ? Ri("favourites", a) : a.dataset.acts ? JSON.parse(a.dataset.acts).forEach(([i, l, c, u]) => Pr(i, l, c, u).catch(() => {
        })) : a.dataset.more ? Ri(a.dataset.more, a) : a.hasAttribute("data-more-close") ? Pi() : a.dataset.morePage ? Bi(Number(a.dataset.morePage), a.dataset.moreMode ?? null, !0) : a.dataset.path ? ao(a.dataset.path) : a.dataset.go ? Zc("room:" + a.dataset.go) : a.hasAttribute("data-area-back") ? el() : a.classList.contains("tfAreaPanel") && !a.classList.contains("active") && md(a);
    }), t.addEventListener("keydown", (e) => {
      var o, i, l, c, u, f, y;
      const a = e.target;
      if ((o = a.dataset) != null && o.more && a.tagName !== "BUTTON" && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), Ri(a.dataset.more, a)), (i = a.dataset) != null && i.energyPick && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), ac(a.dataset.energyPick)), (l = a.classList) != null && l.contains("tfAreaPanel") && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), md(a)), (c = a.dataset) != null && c.summary && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), Mr(a.dataset.summary, a)), e.key === "Escape" && Qe && t === H) {
        e.preventDefault(), no(!0);
        return;
      }
      if (e.key === "Escape" && da && t === H) {
        e.preventDefault(), Ns(!1), (u = p("dashEditNav")) == null || u.focus();
        return;
      }
      if (e.key === "Escape" && Q && t === H && (e.preventDefault(), el()), (f = a.dataset) != null && f.blocks) {
        const _ = a.dataset.blocks, x = Gf(e, Math.round(Uo(_)));
        if (x == null) return;
        e.preventDefault(), Hr(_, x), clearTimeout(le.get(_)), le.set(_, setTimeout(() => Nr("pos", _), 500));
        return;
      }
      if ((y = a.dataset) != null && y.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
        e.preventDefault();
        const [_, x] = a.dataset.drag.split("|"), R = Number(a.getAttribute("aria-valuenow")) / 100, M = e.key === "Home" ? 0 : e.key === "End" ? 1 : Math.max(0, Math.min(1, R + (e.key === "ArrowLeft" || e.key === "ArrowDown" ? -0.05 : 0.05)));
        Ni(a, _, x, M), Nr(_, x);
      }
    }), t.addEventListener("pointerdown", (e) => {
      var Pt;
      const a = e.target.closest("[data-blocks]");
      if (a && e.button === 0) {
        e.preventDefault(), Uf(a, e);
        return;
      }
      const o = e.target.closest("[data-drag]");
      if (!o || e.button > 0) return;
      const [i, l] = o.dataset.drag.split("|"), c = i === "bright" && !Ue(l), u = e.pointerType !== "mouse";
      if (c && !u) {
        wl(Dt("light", "toggle", l));
        return;
      }
      const f = i === "bright" && ((Pt = k[l]) == null ? void 0 : Pt.state) !== "on", y = i === "tilt" ? 4 : 0, _ = () => o.getBoundingClientRect().width - y * 2, x = (Et) => {
        const zt = o.getBoundingClientRect();
        return Math.max(0, Math.min(1, (Et.clientX - zt.left - y) / _()));
      };
      let R = u ? "waiting" : f ? "pressed" : "dragging", M = 0;
      const E = e.clientX, T = e.clientY, P = (Et, zt) => Math.hypot(Et.clientX - E, Et.clientY - T) > zt, S = () => {
        try {
          o.setPointerCapture(e.pointerId);
        } catch {
        }
      };
      u || (e.preventDefault(), S()), R === "dragging" && Ni(o, i, l, x(e));
      const Y = () => {
        var Et, zt;
        R = "sliding", ht = o, o.classList.add("held"), S(), (Et = navigator.userActivation) != null && Et.hasBeenActive && ((zt = navigator.vibrate) == null || zt.call(navigator, 8)), M = f ? (ra[l] ?? 100) / 100 : Number(o.getAttribute("aria-valuenow")) / 100;
      }, B = (Et) => {
        R === "waiting" && P(Et, xt) ? !c && Math.abs(Et.clientX - E) > Math.abs(Et.clientY - T) ? Y() : R = "gone" : R === "pressed" && P(Et, 4) && (R = "dragging"), R === "sliding" ? Ni(o, i, l, Math.max(0, Math.min(1, M + (Et.clientX - E) / _()))) : R === "dragging" && Ni(o, i, l, x(Et));
      }, rt = (Et) => {
        ["pointermove", "pointerup", "pointercancel"].forEach((zt, Te) => o.removeEventListener(zt, Te ? rt : B)), o.classList.remove("held"), ht === o && (ht = null), R === "sliding" || R === "dragging" ? Nr(i, l) : Et.type === "pointerup" && c ? wl(Dt("light", "toggle", l)) : Et.type === "pointerup" && f && (R === "waiting" || R === "pressed") && Pr("light", "turn_on", l).catch(() => {
        });
      };
      o.addEventListener("pointermove", B), o.addEventListener("pointerup", rt), o.addEventListener("pointercancel", rt);
    }), t.addEventListener("touchmove", (e) => {
      ht && e.cancelable && e.preventDefault();
    }, { passive: !1 });
  }
  return H && w && (Sr(), gd(H), gd(Mt), Mt.addEventListener("click", (t) => {
    t.target === Mt && Pi();
  }), (bd = n.getElementById("homeNav")) == null || bd.addEventListener("click", () => {
    Q && el();
  }), (wd = n.querySelector(".bottomNav")) == null || wd.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + Xi + "</button>"), (vd = p("dashEditNav")) == null || vd.addEventListener("click", () => C ? Xs(!Co) : Ns(!da)), H.addEventListener("pointerdown", gf), H.addEventListener("pointerdown", Gu), H.addEventListener("click", (t) => {
    C && Co && t.target.closest(".tfBoardItem") && (t.preventDefault(), t.stopPropagation());
  }, !0), H.addEventListener("scroll", (t) => {
    var e;
    (e = t.target.classList) != null && e.contains("hcFadeList") && xc(t.target);
  }, !0), new ResizeObserver(() => {
    g.classList.contains("tfDash") && Ms() !== xs ? Be() : xi();
  }).observe(H), window.addEventListener("resize", xi, { passive: !0 }), Mt.addEventListener("keydown", (t) => {
    var e, a;
    if (t.key === "Escape")
      t.stopPropagation(), A != null && A.details ? cl(!1) : Pi();
    else if ((t.key === "ArrowLeft" || t.key === "ArrowRight") && ((a = (e = t.target).closest) != null && a.call(e, ".tfMoreDots"))) {
      t.preventDefault();
      const o = [...Mt.querySelectorAll(".tfMoreDots [data-more-page]")], i = o.findIndex((c) => c.getAttribute("aria-selected") === "true"), l = o[Math.max(0, Math.min(o.length - 1, i + (t.key === "ArrowRight" ? 1 : -1)))];
      l && Bi(Number(l.dataset.morePage), l.dataset.moreMode ?? null, !0);
    }
  })), U(), {
    update(t) {
      if (!w) return;
      const e = !Object.keys(k).length;
      k = { ...Object.fromEntries(Object.entries(k).filter(([o]) => Ya(o))), ...t || {} };
      for (const o in k) o.startsWith("light.") && k[o].state === "on" && Ue(o) && to(o, $a(k[o]));
      e ? za() : Be();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      cn = !0, xe == null || xe.destroy(), xe = null, ke == null || ke.forEach((t) => t.destroy()), ke = null;
    },
    resume() {
      cn = !1, !(!w || !(H != null && H.querySelector("[data-tf]"))) && (Sa.isConnected && Xr(Sa.style.order), $r());
    }
  };
}
const V0 = "0.12.1";
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
    }), this._lastStates = this._hass.states, this._test = j0(r, { config: this._config, getHass: () => this._hass }), this._test.update(this._hass.states), rm(r, d), sm(r), this.isConnected || this._test.suspend(), d.style.transition = "opacity .2s ease", d.style.opacity = "";
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
}), console.info(`%c HOMECORE %c ${V0} `, "background:#03a9f4;color:#090909;font-weight:700", ""));
