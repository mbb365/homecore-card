const oh = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-text-on-accent:#090909;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#26221e;--color-text-on-selected:#fbf9f6;--color-bg-segment-selected:#fbf9f6;--color-accent-primary:#0288d1;--color-border-focus:#0288d1;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.pill,.primary,.navBtn,.tab,.back{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.hcAreaGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.hcAreaPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.hcAreaPanel.active{flex:7 1 0;min-width:0;cursor:default}.hcAreaPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.hcAreaPanel:before,.hcAreaPanel:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.hcAreaPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.hcAreaPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}#app.light .hcAreaPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.hcAreaPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.hcAreaPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.hcAreaPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}@media (max-width:900px){.hcAreaGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.hcAreaPanel,.hcAreaPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.panelCollapsed{display:none}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.sectionLabel{margin:0 0 8px 22.4px}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.toggleList{display:grid;gap:9.6px}.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.grid{grid-template-columns:1fr}}@media (max-width:620px){#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}}.card,.panel,.tile{border-radius:var(--r-card)}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .hcAreaPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.grid>*{min-width:0}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}:host{--primary:#03A9F4;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.activityRowMeta{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.toggleRow strong,.primary,.tab,.themeBtn,.wxLayoutBtn,.toast{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.note,.settingsSelect,.pill{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.metaTable th,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.hcAreaGallery,.hcAreaPanel{height:340px}@media (max-width:900px){.hcAreaPanel,.hcAreaPanel.active{height:320px}}@media (max-width:900px){.hcAreaGallery{height:auto}.hcAreaPanel,.hcAreaPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel{margin-left:16px}.grid{gap:8px}.sectionLabel{margin-bottom:8px}.hcAreaGallery{gap:8px}.hcAreaPanel,.hcAreaPanel.active{flex:0 0 100%;min-width:100%}.card,.hcAreaPanel{padding:16px}.activityRows{gap:8px}.activityRow{padding:10px 12px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}@media (prefers-reduced-motion: reduce){.sheet{transition:none}}.card,.panel,.hcAreaPanel.active{padding:var(--inset)}.hcAreaPanel{border-radius:var(--r-tile);padding:var(--inset)}.hcAreaPanel.active,.activityRow{border-radius:var(--r-tile)}.activityRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.activityRowMeta{color:var(--text)}.activityRowMeta{margin-top:0}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}#app{--group-bg:var(--card)}.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .note{margin:0 4px 4px}#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}', nh = `#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}:is(#homeView,.tfMoreBackdrop,.tfEditTray,.tfMiniPhone) .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)){transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .wxWide{gap:16px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}@media (max-width:620px){#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--text)}#app.house.light{--hc-icon:#e6e6e6;--hc-icon-ink:var(--title)}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house :is(.tfAreaHead,#settingsView>.settingsHeader) .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house :is(.tfAreaHead,#settingsView>.settingsHeader) .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}.tfCard .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfAction>.tfActionHead{margin-bottom:auto}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .toggleRow:has(>.themeChoice,>.settingsSelect){flex-direction:column;align-items:stretch;gap:12px}#housePane .toggleRow>.settingsSelect{width:100%}#housePane .themeChoice[hidden]{display:none}#housePane .houseTab>.card:has(>.tfSetGroup){gap:24px}#housePane .tfSetGroup{display:grid;gap:8px}#housePane .tfSetGroup>.sectionLabel{margin:0 16px}#housePane{container:housepane/inline-size}#housePane .tfLightCards{display:none}@container housepane (width < 720px){#housePane .houseTab .metaTableWrap{display:none}#housePane .tfLightCards{display:grid;gap:8px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDacPad{min-width:0}.tfDacPad>dual-controller-v3{display:block}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}:is(.tfStep,.tfSeg,.tfBlocks,.tfTilt,.tfChips){font-family:var(--font-tile)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:0 1 46px;min-width:32px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);cursor:pointer}.tfStep svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfStep output{flex:1 0 auto;white-space:nowrap;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}#housePane .themeChoice,.tfBoardMenu .tfHeightTabs,.wb .wbSegments{gap:4px;padding:4px;border:0;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}#housePane .themeChoice{display:flex;flex-wrap:nowrap;width:100%}#housePane .themeChoice>button{flex:1 1 0;overflow:hidden;text-overflow:ellipsis}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button){height:38px;min-width:0;min-height:0;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile)!important;white-space:nowrap;cursor:pointer}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button):hover:not(:disabled):not([aria-pressed=true]):not([aria-checked=true]):not(.active){background:transparent;color:var(--text)}:is(#housePane .themeChoice :is(.wxLayoutBtn[aria-pressed=true],.themeBtn.active),.tfBoardMenu .tfHeightTabs button[aria-checked=true],.wb .wbSegments button[aria-pressed=true]){background:var(--bright);color:var(--on-bright)}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none;container:blocks/inline-size}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:12px 4px 4px 12px}.tfBlocks>span:nth-child(4){border-radius:4px 12px 12px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 14px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b small{font:inherit}@container blocks (width < 164px){.tfBlocks b small{display:none}}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.tfTilt i{position:absolute;top:4px;bottom:4px;left:4px;border-radius:12px;background:var(--primary)}.tfTilt span{position:relative;padding:0 16px;color:var(--text);font:600 14px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns svg{fill:none}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}#app.house .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}#app.house .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-l);--g1:var(--g1-l);--g2:var(--g2-l)}#app.house .tfSum[data-summary=climate] .tfIcon svg path{fill:url(#hcClimateGrad)}.tfGradDefs{position:absolute;width:0;height:0;overflow:hidden;pointer-events:none}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMoreBackdrop.tfMoreUnder{z-index:179;pointer-events:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}.tfMoreTileHead .tfName{display:grid;flex:1;min-width:0;cursor:default}.tfMoreTileHead :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreTileHead .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfMoreTileHead div.tfIcon{cursor:default}.tfMoreTileHead.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreTileHead.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMorePages{display:grid;grid-auto-flow:column;grid-auto-columns:100%;align-items:start;gap:20px;flex:none;overflow-x:auto;overflow-y:hidden;overscroll-behavior-x:contain;scroll-snap-type:x mandatory;scrollbar-width:none;transition:height .25s cubic-bezier(.2,.7,.3,1)}@media (prefers-reduced-motion:reduce){.tfMorePages{transition:none}}.tfMorePages::-webkit-scrollbar{display:none}.tfMorePage{display:flex;flex-direction:column;gap:14px;min-width:0;scroll-snap-align:start;scroll-snap-stop:always}.tfMoreSpace{flex:none;display:flex;flex-direction:column;justify-content:space-between;gap:12px;height:224px;padding:18px;border-radius:16px;background:var(--tile);overflow:hidden}.tfMoreSpace.tfMoreFill{justify-content:center;align-items:center;height:auto;padding:0;background:none;border-radius:0}.tfMoreSpace.tfMoreFill>.tfCoverArt{width:100%;height:auto;max-width:none;align-self:center}.tfMoreSpace.tfMoreFill>.tfDacPad{width:100%;height:100%}.tfMoreBig{display:flex;align-items:baseline;min-width:0;font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfMoreBig.live{color:var(--primary)}.tfMoreNum{overflow:hidden;text-overflow:ellipsis}.tfMoreUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfMoreFacts{display:flex;flex:1;flex-direction:column;justify-content:space-evenly;min-height:0}.tfMoreFact{display:flex;justify-content:space-between;gap:16px;font:400 14px/20px var(--font)}.tfMoreFact span:first-child{color:var(--muted)}.tfMoreFact span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreGraph{display:flex;flex:none;flex-direction:column;gap:6px}.tfMoreGraph .tfMoreGroupName{margin:0}.tfMoreGraph .tfGraph.tfDay{width:100%}.tfMoreDots{display:flex;flex:none;justify-content:center;gap:4px;margin-top:-4px}.tfMoreDots button{display:grid;place-items:center;width:24px;height:24px;min-height:0;padding:0;border:0;background:none;cursor:pointer}.tfMoreDots button:before{content:"";width:8px;height:8px;border-radius:50%;background:var(--muted);opacity:.45;transition:opacity .15s ease,background .15s ease}.tfMoreDots button[aria-selected=true]:before{background:var(--text);opacity:1}.tfMoreDots.tfMorePageIcons{gap:3px;align-self:center;margin-top:0;padding:3px;border-radius:19px;background:var(--tile)}.tfMoreDots.tfMorePageIcons button{width:48px;height:32px;border-radius:16px;color:var(--muted);transition:background .15s ease,color .15s ease}.tfMoreDots.tfMorePageIcons button:before{display:none}.tfMoreDots.tfMorePageIcons button svg{width:20px;height:20px;fill:currentColor}.tfMoreDots.tfMorePageIcons button[aria-selected=true]{background:var(--text);color:var(--card)}.tfMoreDots.tfMorePageIcons button:not([aria-selected=true]):hover{color:var(--text)}#homeView .grid>.tfDashTiles>.tfAction.tfHeadOnly,#homeView .grid .tfAction.tfHeadOnly{align-self:start}.tfMoreLink{margin-top:auto}.tfMoreLink svg{transform:none!important}.tfMorePage .tfMoreRows{flex:none}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card.tfCard{container-type:inline-size}#homeView .card.tfCard .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMorePair.still{animation:none}#app[data-more=sheet] .tfMore{width:min(640px,100vw)}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}.tfAreaPanel .icon{width:22px;height:22px}#app .hcAreaPanel.tfAreaPanel{padding:0}#app .hcAreaPanel.tfAreaPanel.active{border-radius:28px}.tfAreaPanel .panelExpanded>.tfRoomTile{height:100%;box-sizing:border-box;background:none;box-shadow:none}#app.tfBoard .tfAreaPanel .tfRoomTile[data-rows="1"]{padding:10px}#app.tfBoard .tfAreas[data-rows="1"] .hcAreaPanel.tfAreaPanel.active{border-radius:24px}.tfAreaIcon{flex:none;border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}button.tfAreaIcon{cursor:pointer}.tfAreaGlyph{display:grid;place-items:center}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{display:grid;grid-template-columns:repeat(var(--peg-n),var(--peg-w));grid-auto-rows:60px;grid-auto-flow:row dense;align-items:stretch;gap:16px;max-width:none}#app.tfWeatherOpen .tfBento.tfPegs .wbItem{width:auto;min-height:0;align-self:stretch;display:flex;flex-direction:column}#app.tfWeatherOpen .tfBento.tfPegs .wbItem>*{flex:1;min-height:0}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=wide]{grid-column:span 2;grid-row:span 5}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=double]{grid-column:span 2;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=tile]{grid-column:span 1;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbCard.wbSquare{aspect-ratio:auto}#app.tfWeatherOpen .tfBento.tfPegs .wbWeather .wbNow{margin-bottom:auto}#app.tfWeatherOpen .tfBento.tfPegs :is(.wbStripScroll,.wbBars .wbDayBars,.wbBars.wbTabbed .wbDayBars){min-height:0}#app.tfBoard .tfAreas[data-rows="5"] .tfACMain{position:absolute;left:10px;right:10px;bottom:170.3px;max-width:none;text-align:center}#app.tfBoard .tfAreas[data-rows="4"] .tfACMain{position:absolute;left:10px;right:10px;bottom:164.1px;max-width:none;text-align:center}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:18px 0 10px;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:6px;max-width:calc(100% - 20px)}.tfACMain{max-width:calc(100% - 20px);font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px);min-height:60px}.tfACTiles:has(>:nth-child(3)){margin-top:-60px}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}.tfACTiles:has(>:nth-child(2)){margin-top:-60px}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{gap:28px;padding:40px;background:var(--bg)}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:-20px -20px 0 0}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead) .activityTitle{font-size:24px}@media (max-width:620px){#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:0}}@media (min-width:621px){#app:not([data-more=sheet]) .tfMoreBackdrop.wide{place-items:start center}}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px}.tfMoreActions .tfAction{grid-column:auto}.tfMoreBackdrop{grid-template-columns:minmax(0,1fr)}.tfMoreActions .tfAction{min-width:0}.tfMoreActions>.activityRow{align-self:start;display:grid;grid-auto-flow:column;grid-template-columns:auto minmax(0,1fr);align-items:center;align-content:start;gap:12px;min-width:0;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfMoreActions>.activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreActions>.tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreActions>.activityRow :is(.activityRowName,.activityRowMeta){display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreActions>.activityRow.alert .activityRowMeta{color:var(--danger)}@media (max-width:620px){.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash :is(.tfDash-aq,.tfDash-pollen,.tfDash-radar,.tfDash-hourly,.tfDash-sun,.tfDash-moon,.tfDash-uv,.tfDash-humidity,.tfDash-pressure,.tfDash-wind,.tfDash-visibility){order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app .tfNotAdded{display:none!important}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:0 0 var(--area-open,409px)}#app.tfDash .tfAreaPanel:not(.active){flex:1 0 128px}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;margin-top:auto;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(2,minmax(0,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app.house .tfDashBento .wbItem[data-size]{width:100%}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}.tfDash-wx .wbCondition{display:none}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .hcAreaGallery,#app.tfBoard .tfAreas .hcAreaPanel{height:100%;min-height:0}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;pointer-events:none;color:var(--text)}.tfBoardCells svg{display:block;overflow:visible}.tfBoardCells pattern circle{fill:currentColor;fill-opacity:.16}.tfBoardCells .tfGridCross{fill:none;stroke:currentColor;stroke-opacity:.45;stroke-width:1.5;stroke-linecap:round}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfHeight{display:grid;gap:6px;padding:6px 6px 8px}.tfHeightLabel{padding:0 6px;color:var(--muted);font:500 12px/16px var(--font)}.tfHeightTabs{display:grid;grid-template-columns:repeat(5,1fr)}.tfBoardMenu .tfHeightTabs button{justify-content:center}.tfBoardMenu .tfHeightTabs button:disabled{opacity:.35}.tfWidth{padding-top:0}.tfWidth .tfHeightTabs{grid-template-columns:repeat(3,auto)}.tfSourceList{display:grid;gap:2px}.tfBoardMenu .tfSourceList button[aria-checked=true]{background:var(--bright);color:var(--on-bright)}.tfBoardMenu .tfSourceList button[aria-checked=true]:hover{background:var(--bright)}.tfBoardMenu .tfWidth .tfHeightTabs button{white-space:nowrap}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows{grid-auto-rows:var(--fill-row,60px);margin-top:0}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows>.activityRow{min-height:0;height:var(--fill-row,60px);box-sizing:border-box}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]{padding:0;gap:0}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityHeader,#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.tfDashGraph{display:none}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityRows{margin:0;flex:1}#app.tfBoard .tfBoardItem.tfAction[data-rows="1"]{padding:10px;border-radius:24px}.tfRoomTile{cursor:pointer}.tfRoomTile .tfRoomIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomTile button.tfRoomIcon{cursor:pointer}.tfRoomInline,.tfRoomSub{display:none}.tfRoomReading{display:flex;flex-direction:column;align-items:flex-start;align-self:flex-start;gap:4px;min-width:0;max-width:100%;padding:0;border:0;border-radius:8px;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.tfRoomBig{overflow:hidden;color:var(--text);font:500 36.8px/36.8px var(--font-tile);letter-spacing:-.74px;white-space:nowrap;text-overflow:ellipsis}#app.tfBoard .tfRoomTile[data-rows="4"] .tfRoomBig{font-size:41.6px;line-height:41.6px;letter-spacing:-1.54px}#app.tfBoard .tfRoomTile[data-rows="5"] .tfRoomBig{font-size:51.2px;line-height:51.2px;letter-spacing:-1.54px}.tfRoomTile:not([data-rows="1"]) :is(.tfRoomDevices,.tfRoomHeads){margin-top:auto}.tfRoomTile>.tfActionHead{margin-bottom:0}.tfRoomSub{overflow:hidden;color:var(--muted);font:400 16px/19px var(--font);white-space:nowrap;text-overflow:ellipsis}.tfRoomDevices{display:flex;gap:12px}.tfRoomDevices .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfRoomDevices .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}#app.tfBoard .tfRoomTile[data-rows="1"] .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-rows="1"] :is(.tfRoomReading,.tfRoomDevices),#app.tfBoard .tfRoomTile[data-rows="2"] .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfActionHead .activityRowMeta{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfRoomSub{display:block}#app.tfBoard .tfRoomTile[data-cols="1"]:is([data-rows="3"],[data-rows="4"],[data-rows="5"]) .tfRoomDevices{display:grid;grid-template-columns:repeat(2,max-content)}#app.tfBoard .tfRoomTile[data-cols="1"][data-rows="3"]:has(.tfRoomDevices) .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-cols="1"][data-rows="3"]:has(.tfRoomDevices) .tfRoomReading{display:none}#app.tfBoard .tfRoomTile[data-cols="1"]:is([data-rows="4"],[data-rows="5"]) .tfRoomDevices{min-height:calc(2 * var(--chip-size) + 12px);align-content:start}.tfRoomHeads{display:none;gap:12px 16px}.tfRoomDev{position:relative;isolation:isolate;display:flex;align-items:center;gap:12px;min-width:0}.tfRoomDev:before{content:"";position:absolute;z-index:-1;top:-6px;right:-10px;bottom:-6px;left:-10px;border-radius:var(--r-tile);pointer-events:none;transition:background .15s ease,box-shadow .15s ease}@media (hover:hover){.tfRoomDev:hover:before{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}}.tfRoomDevName{padding:0;border:0;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.tfRoomDev .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfRoomDev .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfRoomDevName{display:flex;flex-direction:column;min-width:0}.tfRoomDevName>span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]){flex-direction:row;align-items:center;gap:12px}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"])>.tfActionHead{flex:1;margin-bottom:0}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]) .tfRoomDevices{display:flex}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomHeads{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-cols="2"]):not([data-rows="1"]) .tfRoomHeads{grid-template-columns:repeat(4,minmax(0,1fr))}#app.tfBoard .tfRoomTile[data-cols="2"][data-rows="2"] .tfRoomDev:nth-child(n+3){display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]):has(.tfRoomDevices) .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]):has(.tfRoomDevices) .tfRoomReading{display:none}#app.tfBoard .tfDashBento[data-rows="1"] .wbCard{padding:10px;border-radius:24px}#app.tfBoard .tfDashBento[data-rows="1"] .wbVisual{display:none}#app.tfBoard .tfDash-wx[data-rows="1"] .wbNow{margin:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbWx.wbS90{width:40px;height:40px;border-radius:12px}#app.tfBoard .tfDashBento[data-rows] :is(.wb,.wbBento,.wbItem){height:100%;min-height:0}#app.tfBoard .tfDashBento[data-rows] .wbCard{height:100%;min-height:0;box-sizing:border-box;aspect-ratio:auto}#app.tfBoard .tfDash-wx[data-rows="1"] .wbDeg{font-size:20px;letter-spacing:0;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbPlace{font-size:13px;line-height:18px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbUnit{font-size:14px;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbWx.wbS90{width:100px;height:100px;border-radius:31px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbDeg{font-size:80px;line-height:80px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbUnit{font-size:30px;line-height:38px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbWeather{flex-direction:row;align-items:center;gap:16px}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNow{flex:none}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNextHours{display:flex;flex:1 1 0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbWeather{justify-content:center;padding-top:0;padding-bottom:0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) :is(.wbNow,.wbSummary){display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbColumns{display:flex;flex:none;height:185px}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsDay{display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsNow{display:inline}#app.tfBoard .tfDash-wx[data-narrow] .wbCard.wbWeather{gap:12px;padding:18px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbWx.wbS90{width:64px;height:64px;border-radius:20px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbDeg{font-size:46px;line-height:46px;letter-spacing:-.92px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbUnit{font-size:20px;line-height:26px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-narrow] .wbHalves{display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="3"] .wbNextHours{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow] .wbHour:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;flex:none;height:auto;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumn:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbHalves{display:none}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx:not([data-narrow])[data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="4"]) .wbSummary{display:none}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) :is(.wbColumns,.wbHalves){display:none}#app.tfBoard .tfDash-wx[data-rows="4"] .wbColumns{flex:1 1 0;height:auto;min-height:0;margin-top:0}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn{justify-content:flex-start;gap:8px;padding:12px 0 16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn .wbWx{width:40px;height:40px;border-radius:16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbTemps{gap:4px}#app.tfBoard .tfDash-wx[data-rows="4"] .wbHalves>:nth-child(n+5){display:none}#app.tfBoard .tfDash-energy[data-rows="2"] .tfDashGraph{display:none}#app.tfBoard .tfDash-energy:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) .activityRows{grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr)}#app.tfBoard .tfDash-energy[data-rows="3"] .tfDashGraph{min-height:0}#app.tfBoard .tfDashBento[data-rows="2"] .wbBaseRows{display:none}#app.tfBoard .tfDashBento[data-rows="2"] :is(.wbRadar,.wbCompareBars,.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfDashBento[data-rows="3"] :is(.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfAreas[data-rows="1"] .tfACTop{display:contents}#app.tfBoard .tfAreas[data-rows="1"] .tfACTiles{display:none}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed{display:grid;grid-template-columns:40px minmax(0,1fr);column-gap:12px;align-content:center;padding:0}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfACName,.tfACMain){margin:0;font-size:14px;line-height:18px;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.tfBoard .tfAreas[data-rows="2"] .tfACTiles{display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTile:nth-child(n+3){display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACollapsed{justify-content:flex-start;gap:10px}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTiles{margin-top:auto}.tfEditTray{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px));right:0;bottom:0;z-index:160;display:flex;width:608px;max-width:calc(100vw - 56px);transform:translate(100%);transition:transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfEditTray.open{transform:none}.tfEditTray.open.tucked{transform:translate(100%)}.tfEditTray.open :is(.tfTrayInner,.tfTrayTuck){pointer-events:auto}.tfTrayTuck{position:absolute;top:20px;left:-52px;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border:0;border-radius:var(--r-inner);background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;--mdc-icon-size:22px}.tfTrayTuck svg{width:22px;height:22px}.tfEditTray:not(.open) .tfTrayTuck{visibility:hidden}.tfTrayInner{flex:1;min-width:0;display:flex;flex-direction:column;gap:20px;overflow:auto;overscroll-behavior:contain;padding:20px;border-radius:var(--r-card) 0 0 var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d}.tfTrayHead{display:flex;align-items:center;justify-content:space-between;gap:12px}.tfTraySection{display:flex;flex-direction:column;gap:8px}.tfTraySection .sectionLabel{margin:0}.tfTrayNote{margin:0;color:var(--muted);font:400 14px/1.3 var(--font)}.tfTrayCards{display:flex;flex-direction:column;gap:6px}.tfTrayCard{display:flex;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 14px 0 10px;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none}.tfTrayList{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}.tfTrayFav{display:grid;grid-template-columns:22px var(--chip-size) minmax(0,1fr) 36px 36px;align-items:center;gap:8px;min-height:var(--tile-min);padding:0 4px 0 6px;border-radius:var(--r-tile)}.tfTrayFav.off{cursor:grab;touch-action:none}.tfTrayFav.off :is(.tfIcon,.tfTrayName){opacity:.5}.tfTrayFav.moving{background:var(--tile)}.tfTrayGrip{display:grid;place-items:center;color:var(--muted);cursor:grab;touch-action:none}.tfTrayGrip svg{width:20px;height:20px;fill:currentColor}:is(.tfTrayFav,.tfTrayPickItem) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfTrayName{display:flex;flex-direction:column;min-width:0}.tfTrayName>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfTrayBtn{display:grid;place-items:center;width:36px;height:36px;min-height:0;padding:0;border:0;border-radius:12px;background:none;color:var(--text);cursor:pointer}.tfTrayBtn svg{width:20px;height:20px;fill:currentColor}.tfTrayBtn:hover{background:var(--tile)}.tfTrayAdd{align-self:flex-start}.tfTrayPick{display:flex;flex-direction:column;gap:6px}.tfTrayPick[hidden]{display:none}.tfTrayPickItem{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;width:100%;min-height:var(--tile-min);padding:0 10px;border:0;border-radius:var(--r-tile);background:none;color:var(--text);text-align:start;cursor:pointer}.tfTrayPickItem:hover{background:var(--tile)}.tfTraySuggest{margin-top:8px}.tfMiniPhone{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px) + 20px);bottom:20px;left:max(16px,calc(100vw - min(608px,100vw - 56px) - 380px));z-index:160;display:flex;flex-direction:column;gap:8px;width:324px;padding:12px;border-radius:44px;background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d;opacity:0;transform:translate(16px);transition:opacity .2s ease,transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfMiniPhone.open{opacity:1;transform:none;pointer-events:auto}.tfPhoneHead{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 4px 0 12px}.tfMiniPhone>.tfTrayNote{padding:0 12px 4px}.tfLinkBtn{min-height:0;padding:0;border:0;background:none;color:var(--primary);font:inherit;text-decoration:underline;cursor:pointer}.tfPhoneScreen{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;border-radius:34px;background:var(--bg);box-shadow:var(--hc-hair-all);padding:14px 0 24px}.tfPhoneList{display:flex;flex-wrap:wrap;gap:12.8px}.tfPhoneTitle{width:100%;padding:0 12.8px;color:var(--text);font:800 25.6px/1 var(--font);letter-spacing:-.055em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfPhoneBlock{display:flex;align-items:flex-start;gap:10px;width:100%;min-height:0;padding:12px;border:0;border-radius:27px;background:var(--card);box-shadow:var(--hc-hair);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.tfPhoneBlock.tile{width:calc((100% - 12.8px)/2);border-radius:22.4px}.tfPhoneBlock.fixed{align-items:center;color:var(--muted);cursor:default}.tfPhoneBlock.moving{box-shadow:var(--hc-hair),0 0 0 2px var(--primary);cursor:grabbing}.tfPhoneBlock:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfPhoneBlock .tfIcon{width:32px;height:32px;border-radius:13px;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}.tfPhoneName{min-width:0;padding-top:6px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tfTrayGhost{position:fixed;top:0;left:0;z-index:200;margin:0;pointer-events:none;opacity:.9;background:var(--tile);border-radius:var(--r-tile);box-shadow:0 8px 24px #00000059}.tfFavDrop{position:fixed;z-index:200;width:4px;border-radius:2px;background:var(--primary);pointer-events:none}.tfFavHides{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;pointer-events:none}.tfFavHide{position:absolute;display:grid;place-items:center;width:32px;height:32px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;pointer-events:auto}.tfFavHide svg{width:18px;height:18px;fill:currentColor}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.toast.tfToast{top:auto;right:auto;max-width:calc(100vw - 32px);transform:translate(-50%,6px)}.toast.tfToast.show{transform:translate(-50%)}.tfDash-act .activityRow.alert .activityRowName{color:var(--danger)}.activityRow .tfIcon.alert{background:#e53935;color:#fff}.tfGraph.tfDay{flex:none;height:62px;min-height:0}.tfGraph.tfDay text{font-size:10px}#housePane .rubberIndicator{background:var(--bright)}#housePane .tab.active{color:var(--on-bright)}#app.house .settingsSelect{border:1px solid var(--muted)}#app.house .addInput{display:block;width:100%;height:46px;min-height:0;box-sizing:border-box;margin:0;padding:0 10px;border:0;border-radius:var(--r-inner)!important;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:400 16px/18.4px Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;letter-spacing:-.32px;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}#app.house .addInput:hover{background:color-mix(in srgb,var(--text) 6%,var(--tile))}#app.house .addInput:focus-visible,#app.house .addInput:focus{background:var(--tile);box-shadow:inset 0 0 0 1.6px var(--primary)}#app.house .addInput::-webkit-search-decoration,#app.house .addInput::-webkit-search-cancel-button{-webkit-appearance:none;-moz-appearance:none;appearance:none}#app.house{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%23d9d9d9' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house.light{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%2326221e' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house select.settingsSelect{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 44px 0 16px;background-image:var(--select-chev);background-repeat:no-repeat;background-position:right 16px center;background-size:16px 16px}#app.house .addInput::placeholder{color:var(--muted);opacity:1}#app .activityRows :focus-visible{outline-offset:-2.4px}#app.house :is(button,a,input,select,[tabindex]){scroll-margin-bottom:96px}@media (max-width:620px){#app.house :is(.activityRowName,.activityRowMeta){white-space:normal;text-overflow:clip;overflow:visible;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}}.tfTooltip{position:fixed;z-index:500;max-width:min(320px,calc(100vw - 16px));padding:6px 10px;border-radius:10px;background:var(--bright);color:var(--on-bright);font:500 14px/18px var(--font);overflow-wrap:break-word;box-shadow:0 4px 16px #00000040}.tfTooltip[hidden]{display:none}.tfDashGraph rect{transform-box:fill-box;transform-origin:50% 100%}#app.house:is([data-names=cut],[data-names=scroll]) :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis;overflow-wrap:normal}#app.house[data-names=wrap] :is(.activityRowName,.activityRowMeta){display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:normal;overflow:hidden;text-overflow:ellipsis;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}#app.tfBoard .tfDash-favs>.activityRows{min-height:0;overflow-y:auto;scrollbar-width:thin}#app.house :is(.tfIcon,.tfAreaIcon,.tfRoomIcon){--chip-hi:.0375;background-image:linear-gradient(180deg,#ffffff08,#fff0)!important;box-shadow:inset 0 1px rgba(255,255,255,var(--chip-hi)),inset 0 -1px color-mix(in srgb,currentColor 3%,transparent),inset 0 -3px 6px color-mix(in srgb,currentColor 3.5%,transparent)}#app.house :is(.on[data-light] .tfIcon,.tfIcon.on[data-light],.tfACTile .tfIcon[data-light],.on[data-tone=alarm] .tfIcon,.tfIcon[data-light]){--chip-hi:.1375}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-xl]{grid-row:span 5}#app.tfBoard .tfDashBento:not([data-rows="5"]) .wbItem[data-xl] .wbCallouts{display:none}#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]) .wbZone{flex:1;height:auto;background:none;box-shadow:none;padding:0;align-items:flex-start}#app.tfBoard .tfDashBento[data-rows="3"] .wbItem[data-xl] .wbCallouts{display:flex;margin-top:0}#app.tfBoard .tfDashBento[data-rows="1"] :is(.wbZone,.wbCallouts){display:none}#app .wbZoneM{display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM){display:flex;align-items:flex-start;justify-content:flex-start}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM)>:not(.wbZoneM){display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZoneM{display:flex}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{grid-auto-flow:row}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-break]{grid-column-start:1}#app.house.tfWeatherOpen #homeView{max-width:none}#app.house #settingsView .toggleList{border-radius:var(--r-card);padding-block:4px}#app.house #settingsView .toggleRow{padding-left:18px;padding-right:18px}#app.house #settingsView .toggleRow:not([hidden])~.toggleRow:before{left:18px}#app.house .view{margin-left:0}#app.house #settingsView .toggleList>.tfCardTitle{display:flex;align-items:center;min-height:28px;padding:14px 18px 2px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfLightView{display:flex;padding:4px 0 14px}#housePane.tfLightCardsOn .houseTab .metaTableWrap,#housePane.tfLightCardsOn .houseTab .tfTableNote{display:none}#housePane.tfLightCardsOn .tfLightCards{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:8px}#housePane:not(.tfLightCardsOn) .tfLightCards{display:none}@container housepane (width < 720px){#housePane:not(.tfLightCardsOn) .houseTab .metaTableWrap{display:none}#housePane:not(.tfLightCardsOn) .tfLightCards{display:grid}}#app.house.light .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house .tfTrayInner{gap:32px}#app.house .tfTraySection{gap:12px}#app.house{--font:Geist,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-family:var(--font)}#app.house #housePane .toggleRow>:is(.themeChoice,.settingsSelect){align-self:flex-start;width:auto;max-width:100%}#app.house #housePane .themeChoice{display:inline-flex}#app.house #housePane .themeChoice>button{flex:0 1 auto;min-width:0;padding:0 16px;overflow:hidden;text-overflow:ellipsis}#app.house #housePane .toggleRow{min-width:0}#app.house #housePane .toggleRow>.settingsSelect{min-width:200px}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments){display:inline-flex;width:auto;align-self:flex-start}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments) button{flex:0 0 auto;padding:0 16px}@media (max-width:620px){#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid{display:flex!important;flex-wrap:wrap;align-items:flex-start;gap:var(--grid-gap);height:auto!important}#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid .tfBoardItem{position:relative!important;left:auto!important;top:auto!important}#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid>.tfBoardItem:not(.tfDash-favs){height:auto!important}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummary{flex:none;margin-top:0;container-type:normal}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummaryText{position:static}}#app.house :is(#housePane .themeChoice,.wb .wbSegments,.tfBoardMenu .tfHeightTabs){height:32px;padding:3px;gap:3px;box-sizing:border-box}#app.house :is(#housePane .themeChoice>button,.wb .wbSegments button,.tfBoardMenu .tfHeightTabs button){height:26px!important;padding:0 12px;border-radius:13px!important;font:600 12px/16px var(--font-tile)!important}.tfPlantProblem{flex:1 1 0;min-height:184px;flex-direction:column}.tfGraph.tfPlantGraph{flex:1 1 0;width:calc(100% - 20px);height:auto;min-height:160px;margin:0 10px}.tfGraph .tfGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:3 4;vector-effect:non-scaling-stroke}.tfGraph .tfGuideWord{font-size:11px}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){box-shadow:inset 0 0 0 1px var(--line)}.tfDashTitle .tfGreeting{display:block;margin-bottom:6px;font:500 20px/1.2 var(--font-tile);letter-spacing:0;color:var(--muted)}#app.light{--title:#55504a}#app.light :is(.activityTitle,.hcCardTitle,.wbTitle,.activityRowName,.hcRowName,.wbName){color:var(--title)}#app.light .tfRoomTile .tfActionHead .activityRowName{color:var(--text)}#app.light .tfRoomBig{color:var(--title)}#app.tfOverview.tfDash #homeView .tfSum:not([data-summary=alerts]) .tfIcon{background:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar{width:100%;max-width:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows{display:flex;justify-content:space-between}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRow{flex:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows{display:grid;grid-template-columns:repeat(var(--bar-cols,3),minmax(0,1fr))}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows>.activityRow{min-width:0}@media (max-width:620px){#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}}#app.tfOverview.tfDash #homeView .tfDash-favs{padding:10px;border-radius:var(--r-card)}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-auto-rows:60px;row-gap:25px;max-height:100%;margin:0;overflow-y:auto;scrollbar-width:none}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows::-webkit-scrollbar{display:none}.hcFadeList.hcMore{-webkit-mask-image:linear-gradient(to bottom,#000 calc(100% - 40px),transparent);mask-image:linear-gradient(to bottom,#000 calc(100% - 40px),transparent)}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{height:60px;min-height:0;padding:10px;box-sizing:border-box}#app.tfOverview.tfDash #homeView .tfDash-wx .wbCard.wbWeather{gap:0;padding:18px}#app.tfOverview.tfDash #homeView .tfDash-wx .wbCondition,#app.tfOverview.tfDash #homeView .tfDash-wx .wbNextHours,#app.tfOverview.tfDash #homeView .tfDash-wx .wbHalves{display:none!important}#app.tfOverview.tfDash #homeView .tfDash-wx .wbSummary{flex:none;height:auto;margin:18px 0 0;container:none}#app.tfOverview.tfDash #homeView .tfDash-wx .wbSummaryText{position:static;-webkit-line-clamp:1}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumns{display:flex!important;height:159px;margin-top:auto;border-radius:var(--r-tile)}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn{padding:8px 0;background:none}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn:hover{background:var(--tile)}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn .wbWx.wbS60{width:60px;height:60px;border-radius:20px}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar{width:max-content;max-width:100%}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar .activityRows{justify-content:flex-start}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows{grid-template-columns:repeat(var(--bar-cols,3),auto)}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs{height:auto!important;padding:10px;container-type:normal}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows{display:flex;justify-content:space-between;grid-auto-rows:auto;row-gap:0;max-height:none}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{flex:none;width:240px;height:60px}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows{display:grid;grid-template-columns:repeat(var(--bar-cols,3),minmax(0,1fr))}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows>.activityRow{width:auto;min-width:0}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs{width:max-content!important;max-width:100%}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs>.activityRows{justify-content:flex-start}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows{grid-template-columns:repeat(var(--bar-cols,3),240px)}@media (max-width:620px){#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{width:auto;min-width:0}}#app.tfOverview.tfBoard #homeView .hcFloor{position:absolute;z-index:1;display:flex;align-items:center;height:24px;margin:0;box-sizing:border-box}#app.tfOverview.tfBoard #homeView .hcFloorBox{position:absolute;z-index:0;border-radius:40px;background:color-mix(in srgb,var(--text) 5%,transparent);box-sizing:border-box;pointer-events:none}#app.tfOverview #homeView .hcFloorName{margin:0;font:500 16px/24px var(--font);color:var(--title,var(--text));white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.hcHomeEditing.tfOverview #homeView .tfBoardItem.tfRoomTile{cursor:default;outline:0}#app.hcHomeEditing.tfOverview #homeView .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfRoomTile){cursor:grab;-webkit-user-select:none;user-select:none;touch-action:none;outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.hcHomeEditing.tfBoardReady #homeView .tfBoardItem{transition:left .34s cubic-bezier(.2,1.35,.4,1),top .34s cubic-bezier(.2,1.35,.4,1)}@media (prefers-reduced-motion:reduce){#app.hcHomeEditing.tfBoardReady #homeView .tfBoardItem{transition:none}}#app.hcHomeEditing #homeView .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfEditTray .tfTrayInner{scrollbar-width:none}.tfEditTray .tfTrayInner::-webkit-scrollbar{display:none}.hcHeChoiceLine{flex-wrap:wrap;gap:8px 12px}.hcHeChoiceLine>.hcHeChoice{margin-left:auto}.hcHeChoice.themeChoice{display:inline-flex;flex-wrap:nowrap;height:32px;padding:3px;gap:3px;box-sizing:border-box;border-radius:16px;background:var(--control-2,var(--hc-icon))}#app .hcHeChoice>button{height:26px!important;min-height:0;padding:0 12px;border:0;border-radius:13px!important;background:none;color:var(--text);font:600 12px/16px var(--font-tile)!important;white-space:nowrap}#app .hcHeChoice>button[aria-pressed=true]{background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all)}.hcHeBody{display:flex;flex-direction:column;gap:12px}.hcHeBody>.tfTrayNote{margin:0 0 8px}.hcHeLabel{display:flex;align-items:center;gap:4px}.hcHeLine{display:flex;align-items:center;gap:4px;min-height:44px}.hcHeLine>.activityRowName{min-width:0}.hcHeLine>.switch{margin-left:auto}.hcHeLink{display:inline;min-height:0;padding:0;border:0;background:none;font:inherit;color:var(--primary);text-decoration:underline;cursor:pointer}.hcHeList{display:flex;flex-direction:column;gap:2px;margin:0;padding:0;list-style:none}.hcHeRow{display:grid;grid-template-columns:36px var(--chip-size) minmax(0,1fr) auto;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 4px;border-radius:var(--r-tile)}.hcHeRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.hcHeRow.moving{background:var(--card);box-shadow:var(--hc-hair-all)}:is(.hcHeRow,.tfTrayFav):is(.hcListDragging,.hcListLanding){position:relative;z-index:5;background:var(--card)}:is(.hcHeRow,.tfTrayFav).hcListDragging{filter:drop-shadow(0 10px 30px rgba(0,0,0,.35));cursor:grabbing}.hcHeGrip{color:var(--muted);cursor:grab;touch-action:none}.hcHeSum .tfIcon{color:var(--sum-ink,var(--hc-icon-ink))}#app .hcHeRow.hcHeSum .tfIcon{background-color:transparent}#app.house .hcHeSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .hcHeSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}.hcInfoBtn{display:grid;place-items:center;flex:none;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:var(--r-fine,12px);background:none;color:var(--muted);cursor:pointer}.hcInfoBtn svg{width:18px;height:18px;fill:currentColor}.hcInfoBtn:hover,.hcInfoBtn[aria-expanded=true]{background:var(--tile);color:var(--text)}.hcInfoPop{position:fixed;z-index:320;width:280px;max-width:calc(100vw - 16px);display:flex;flex-direction:column;gap:8px;padding:16px;border-radius:var(--r-inner);box-shadow:var(--hc-hair-all),0 8px 28px #0000002e}.hcInfoPop[hidden]{display:none}.hcInfoTitle{font:600 14px/20px var(--font-tile);color:var(--text)}.hcInfoText{font:400 14px/1.45 var(--font);color:var(--text)}.hcInfoText p{margin:0}.hcInfoText ul{margin:6px 0 0;padding-left:18px}.hcInfoMore{align-self:flex-start;font:600 14px/20px var(--font-tile);color:var(--primary);text-decoration:underline}#app .tfTrayAdd.hcAddBtn{display:inline-flex;align-items:center;gap:6px;height:32px;min-height:0;margin:10px 0 12px;padding:0 16px 0 12px;border:0;border-radius:16px!important;background:#03a9f4;color:#fff;font:600 14px/20px var(--font-tile);text-decoration:none!important}#app .tfTrayAdd.hcAddBtn svg{width:18px;height:18px;flex:none;fill:currentColor}#app .tfTrayAdd.hcAddBtn:hover{background:#0398dc}#app .tfTrayAdd.hcAddBtn[aria-expanded=true]{background:#0288d1}.tfEditTray:not(.hcHomeTray) .tfTraySection:not(.hcFirst){padding-top:20px;border-top:1px solid var(--line)}#app.house .tfEditTray:not(.hcHomeTray) .tfTrayInner{gap:20px}.hcHeRule{width:100%;height:0;margin:8px 0;border:0;border-top:1px solid var(--line)}.tfEditTray .hcTrayTabs{display:flex;align-self:stretch;margin:0 0 4px;flex:none}.tfEditTray .hcTrayTabs .tab{flex:1 1 0;min-height:36px;padding:0 10px;font:600 14px/20px var(--font-tile)}.tfEditTray .hcTrayTabs .rubberIndicator{background:var(--text)}.tfEditTray .hcTrayTabs .tab.active{color:var(--card)}.tfEditTray .tfTraySection[hidden]{display:none!important}.hcTrayList{display:grid;gap:0;padding:0}.hcTrayList .hcRow{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:12px;width:100%;min-height:60px;padding:10px 18px;border:0;border-radius:0;background:transparent;color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:pointer;box-sizing:border-box}.hcTrayList .hcRow+.hcRow{box-shadow:inset 0 1px var(--line)}.hcTrayList .hcRowText{display:grid;min-width:0}.hcTrayList .hcRowName{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.hcTrayList .hcRowEnd{display:grid;place-items:center;width:24px;height:24px;color:var(--muted)}.hcTrayList .hcRowEnd svg{display:block;width:20px;height:20px}#app .tfEditTray :is(.hcTrayList,.hcTrayBack){display:none}@media (max-width:620px){#app .tfEditTray .hcTrayTabs{display:none}#app .tfEditTray:not(.hcTrayIn) .hcTrayList{display:grid;flex:none;padding:0}#app .tfEditTray .hcTrayList .hcConfigRow{grid-template-columns:minmax(0,1fr) auto;margin-inline:-10px;width:calc(100% + 20px)}#app .tfEditTray:not(.hcTrayIn) :is(.tfTraySection,.hcHeTabBody){display:none!important}#app .tfEditTray.hcTrayIn .hcHeAreasNote{display:none}#app .tfEditTray.hcTrayIn .hcTrayBack{display:inline-flex;flex:none;width:40px;height:40px;margin-block:-4px}#app .tfEditTray.hcTrayIn .tfTrayHead{justify-content:flex-start;gap:12.8px}#app .tfEditTray.hcTrayIn .tfTrayHead>:last-child:not(.activityTitle){margin-left:auto}}.hcHeTabBody{display:flex;flex-direction:column;gap:8px}.hcHomeTray .hcTrayTabs{margin:0 0 8px}#homeView .grid.tfStack{grid-auto-rows:1px;row-gap:0}#homeView .grid.tfStack>*{align-self:start}.tfTrayPop{position:fixed;z-index:260;right:calc(min(608px,100vw - 56px) + 12px);width:300px;max-width:calc(100vw - 80px);display:grid;gap:2px;padding:10px!important;background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfTrayPop[hidden]{display:none}.tfTrayPopTitle{padding:4px 8px 8px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfTrayPopRow{display:flex;align-items:center;gap:12px;min-height:var(--tile-min);padding:0 8px}.tfTrayPopRow .tfIcon{background-color:var(--hc-icon)}.tfTrayPopName{flex:1;min-width:0;font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app .tfMoreBackdrop:not(.wide) .tfMore{height:min(600px,85dvh)}#app .tfMoreBackdrop:not(.wide) .tfMorePages{flex:1 1 auto;min-height:0;height:auto!important;align-items:stretch}#app .tfMoreBackdrop:not(.wide) .tfMorePage{overflow-y:auto;overscroll-behavior:contain;scrollbar-width:none}#app .tfMoreBackdrop:not(.wide) .tfMorePage[aria-label=Control]>:first-child{margin-top:auto}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace{flex:1 1 auto;height:auto;min-height:224px}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill{min-height:0;container-type:size}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill>.tfCoverArt{width:min(100%,100cqh);height:auto}.tfMorePage[aria-label=Control]>:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink)+:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink){margin-top:14px}.tfMoreSwitch{display:flex;align-items:center;justify-content:center;min-height:0;padding:0;border-radius:0;background:none}.tfMoreSwitch .tfIcon{width:min(240px,100%);height:min(240px,100%);aspect-ratio:1;min-height:0;border:0;padding:0;border-radius:40%;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer;--mdc-icon-size:204px}.tfMoreSwitch.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreSwitch.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}@media (max-width:620px){#app .tfMoreBackdrop{place-items:end center;padding:0 16px max(16px,env(safe-area-inset-bottom,0px))}#app .tfMoreBackdrop .tfMorePair{width:100%;max-height:85dvh}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){width:100%;border-radius:34px;box-shadow:inset 0 0 0 1px var(--line),0 10px 30px #00000047}#app .tfMoreBackdrop .tfMore{padding-top:10px;outline:none}#app .tfMoreBackdrop .tfMore:before{content:"";display:block;position:sticky;top:10px;z-index:2;flex:none;width:36px;height:5px;margin:0 auto;border-radius:3px;background:var(--line)}#app .tfMoreBackdrop .tfMore [data-more-close]{display:none}}#app .tfMoreBackdrop:not(.wide) .tfMore{height:min(604.4px,calc(100dvh - 32px))}#app .tfMoreBackdrop:not(.wide) .tfMorePages{transition:none}#app .tfMoreBackdrop:not(.wide) .tfMorePop>.tfMorePage:not([aria-label=Info]){display:flex;flex-direction:column;gap:14px;overflow:hidden}#app .tfMoreBackdrop:not(.wide) .tfMorePop>.tfMorePage>.tfMoreSpace{flex:1 0 224px;min-height:224px;margin-top:0}.tfMoreCtl{display:flex;flex-direction:column;gap:14px;flex:0 1 auto;min-height:0;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:none}.tfMoreCtl::-webkit-scrollbar{display:none}.tfMoreCtl:empty{display:none}#app .tfMoreBackdrop:not(.wide) .tfMorePages{margin:-14px;padding:14px;gap:28px;scroll-padding-inline:14px}#app .tfMoreBackdrop:not(.wide) .tfMorePop>.tfMorePage:not([aria-label=Info]){overflow:visible;min-height:0}#app .tfMoreBackdrop:not(.wide) :is(.tfMorePages:not(.tfMorePop)>.tfMorePage,.tfMorePop>.tfMorePage[aria-label=Info]){margin:-14px;padding:14px}.tfMoreCtl{margin:-14px;padding:14px}.tfMoreSwap{display:grid}.tfMoreSwap>*{grid-area:1/1}#app .tfMoreSwap>.tfBar{transition:opacity .26s cubic-bezier(.2,0,0,1),translate .32s cubic-bezier(.34,1.2,.64,1),visibility .32s,box-shadow var(--ab-out) var(--ab-ease),transform var(--ab-out) var(--ab-ease)}.tfMorePage[data-mode=colour] .tfMoreSwap>:not(.hue){opacity:0;translate:28px 0;visibility:hidden;pointer-events:none}.tfMorePage:not([data-mode=colour]) .tfMoreSwap>.hue{opacity:0;translate:-28px 0;visibility:hidden;pointer-events:none}@media (prefers-reduced-motion:reduce){#app .tfMoreSwap>.tfBar{transition:none}}#app .tfMorePages.tfMoreHold{overflow-x:hidden}#app .tfMoreBackdrop:not(.wide) .tfMorePop>.tfMorePage>.tfMoreSpace.tfLightSpace{position:relative;flex:1 0 224px;display:flex;align-items:center;justify-content:center;padding:0;border-radius:0;background:none;overflow:visible}.tfVCols{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;width:calc((100% - 16px)*.7 + 16px);height:70%;transition:opacity .22s ease,visibility .22s}.tfVCols:has(>:only-child){width:calc((100% - 16px)*.35)}.tfVCols:has(>:only-child){grid-template-columns:minmax(0,1fr)}.tfVCol,.tfVSwap>*{display:flex;flex-direction:column;gap:8px;min-height:0}.tfVSwap{display:grid;min-height:0}.tfVSwap>*{grid-area:1/1}#app .tfVBar{flex:1;height:auto;min-height:0;border-radius:24px;touch-action:none;box-shadow:var(--hc-hair-all)}#app .tfVBar.bright{background:var(--tile)}#app .tfVBar.bright i{inset:auto 0 0 0;width:auto;background:linear-gradient(180deg,#ffc247,#fa0)}.tfVBar .tfBarIcon{position:absolute;left:14px;top:14px;width:22px;height:22px;color:var(--text);pointer-events:none;--mdc-icon-size:22px}.tfVBar .tfBarIcon>*{width:22px;height:22px}#app .tfVBar.ctf{background:linear-gradient(180deg,#fa0,#ffc247 25%,#fff7ee 55%,#d7e7ff)}#app .tfVBar.huev{background:linear-gradient(180deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}#app .tfVBar b{left:50%;right:auto;bottom:auto;width:30px;height:4px;margin:-2px 0 0 -15px;border-radius:2px}#app .tfVSwap>*{transition:opacity .18s ease,visibility .18s}.tfMorePage[data-mode=colour] .tfVSwap>.tfVWarm{opacity:0;visibility:hidden;pointer-events:none}.tfMorePage:not([data-mode=colour]) .tfVSwap>.tfVColour{opacity:0;visibility:hidden;pointer-events:none}@keyframes tfVLand{0%{opacity:0;scale:.94}55%{opacity:1;scale:1.035}to{opacity:1;scale:1}}.tfMorePage[data-mode=colour] .tfVSwap>.tfVColour,.tfMorePage:not([data-mode=colour]):not([data-mode=dac]) .tfVSwap>.tfVWarm,.tfMorePage[data-mode=dac] .tfLightPad,.tfMorePage:not([data-mode=dac]) .tfVCols{animation:tfVLand .42s cubic-bezier(.34,1.46,.64,1) backwards}.tfVSwap>.tfVColour:only-child{opacity:1!important;translate:0 0!important;visibility:visible!important;pointer-events:auto!important}.tfLightPad{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:24px;overflow:hidden;--tf-dac-pad:100cqh;--tf-dac-max:none;container-type:size;transition:opacity .22s ease,visibility .22s}.tfLightPad>.tfDacPad{width:100%;height:100%}.tfMorePage:not([data-mode=dac]) .tfLightPad,.tfMorePage[data-mode=dac] .tfVCols{opacity:0;visibility:hidden;pointer-events:none}@media (prefers-reduced-motion:reduce){#app .tfVSwap>*,.tfVCols,.tfLightPad{transition:none;animation:none!important}}.tfMoreFoot{display:flex;flex:none;align-items:center;justify-content:space-between;height:40px}.tfMoreFootGap{flex:none;width:40px}.tfMoreFoot .tfMoreDots{margin:0}#app .tfMoreInfoBtn{display:grid;place-items:center;flex:none;width:40px;height:40px;min-height:0;padding:0;border:0;border-radius:20px;background:none;color:var(--muted);cursor:pointer}.tfMoreInfoBtn svg{width:20px;height:20px;fill:currentColor}#app .tfMoreInfoBtn[aria-pressed=true]{background:var(--tile);color:var(--text)}.tfMoreCtl>*{flex:none}.tfMoreField{display:flex;flex-direction:column;gap:6px}.tfMoreLabel{color:var(--muted);font:400 14px/20px var(--font)}.tfMoreRange{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}@media (max-width:620px){.tfMoreRange{grid-template-columns:1fr;gap:14px}}.tfPopBar{box-shadow:var(--hc-hair-all)}.tfPopBar i{overflow:visible}.tfPopBar .tfBarVal{position:absolute;right:14px;top:50%;translate:0 -50%;color:#26221e;font:600 15px/20px var(--font-tile);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.tfPopBar .tfBarVal.mid{left:50%;right:auto;translate:-50% -50%;z-index:1}.tfPopBar .tfBarIcon{position:absolute;left:13px;top:12px;width:22px;height:22px;color:#26221e;pointer-events:none;--mdc-icon-size:22px}.tfPopBar .tfBarIcon>*{width:22px;height:22px}.tfPopBar.fan i{background:linear-gradient(90deg,#4dd4ec,#00b2d6)}.tfPopBar.valve i{background:linear-gradient(90deg,#4aa8ff,#1a7fe6)}.tfPopBar.tiltp i{background:linear-gradient(90deg,#c9a7ef,#8e5cd9)}.tfPopBar.ctf{background:linear-gradient(90deg,#d7e7ff,#fff7ee 45%,#ffc247 75%,#fa0)}.tfPopBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfMoreSwitch .tfIcon{width:min(224px,100%);height:min(224px,100%);--mdc-icon-size:190px}.tfMoreSwitch:not(.on) .tfIcon{box-shadow:var(--hc-hair-all);color:var(--text)}.tfMorePad{--tf-dac-pad:337px;--tf-dac-max:none}.tfAction.tfDac{--tf-dac-max:none}.tfMoreSpace.tfMoreArt{justify-content:center;align-items:center;padding:8px;container-type:size}.tfMoreArt>.tfCoverArt{width:min(100%,100cqh);height:auto;max-width:none}#app .tfMoreCode{width:100%;height:46px;padding:0 16px;border:0;border-radius:16px!important;background:var(--tile);color:var(--text);box-shadow:var(--hc-hair-all);font:400 16px/20px var(--font);box-sizing:border-box}#app .tfMoreCode::placeholder{color:var(--muted);opacity:1}#app .tfMoreCode:focus{outline:2px solid var(--primary);outline-offset:-1px}.tfMoreSpace.tfMoreKeypad{justify-content:flex-start;gap:8px;padding:12px}.tfMoreKeypad .tfMoreCode{flex:none;background:var(--card)}.tfKeypad{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.tfKeypad button{height:46px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);font:500 18px/1 var(--font-tile);cursor:pointer}.tfKeypad button[data-key=clear]{color:var(--muted);font:400 14px/1 var(--font)}.tfKeypad svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfKeypad button:active{scale:.96}@media (max-width:620px){.tfMorePop .tfSeg:has(>:nth-child(5)){flex-wrap:wrap;height:auto}.tfMorePop .tfSeg:has(>:nth-child(5)) button{flex:0 0 auto;height:38px;padding:0 14px}}`, rh = `.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:14px;aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:18px;border-radius:28px;overflow:hidden}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbChip{width:40px;height:40px;border-radius:16px}.wbSquare .wbName{font-size:14px;line-height:1.4}.wbSquare .wbSub{font-size:16px}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:10px}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846;border-radius:34px}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:1;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);fill-opacity:.14}.wbChart .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:24px minmax(0,1fr) 22px;grid-template-areas:". sun" "y plot" ". x";column-gap:8px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wb[data-style=smooth] :is(.wbWx,.wbSky):after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;border-radius:inherit;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1.3 0 0 0 -.15 1.3 0 0 0 -.15 1.3 0 0 0 -.15 0 0 0 0 1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:140px 140px;mix-blend-mode:overlay;opacity:.3}.wbBaseRows{display:flex;flex-direction:column;gap:4px;width:100%}.wbBaseRow{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbBaseRow>span:last-child{color:var(--text);white-space:nowrap}.wbBaseRow>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRadar{position:relative;flex:1;align-self:stretch;min-height:80px;border-radius:var(--r-inner);overflow:hidden;background-color:var(--tile);background-image:linear-gradient(color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px);background-size:24px 24px;background-position:center}.wbRadarRing{position:absolute;left:50%;top:50%;width:64%;aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 20%,transparent)}.wbRadarRing:after{content:"";position:absolute;top:25%;right:25%;bottom:25%;left:25%;border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 14%,transparent)}.wbRadarHome{position:absolute;left:50%;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 3px var(--tile)}.wbRadarMap,.wbRadarCam{background-image:none}.wbRadarLayer{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden}.wbRadarLayer img{position:absolute;width:256px;height:256px;max-width:none;pointer-events:none}.wbRadarLayer[hidden]{display:none}.wbRadarRain{opacity:.85}.wbRadarMap .wbRadarHome{z-index:2}.wbRadarTime,.wbRadarCredit{position:absolute;z-index:2;white-space:nowrap}.wbRadarTime{left:8px;bottom:6px;padding:1px 6px;border-radius:8px;background:color-mix(in srgb,var(--tile) 78%,transparent);color:var(--text);font:600 11px/16px var(--font-tile)}.wbRadarTime:empty{display:none}.wbRadarCredit{right:6px;top:4px;max-width:calc(100% - 12px);overflow:hidden;text-overflow:ellipsis;color:var(--muted);font:400 9px/12px var(--font)}.wbRadarNote{position:absolute;top:0;right:0;bottom:0;left:0;z-index:2;display:grid;place-items:center;padding:0 12px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbRadarCam img{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;object-fit:cover}.wbWx.wbLineIcon{display:grid;place-items:center;background:var(--tile);color:var(--text)}.wbWx.wbLineIcon>svg{width:64%;height:64%}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:18px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:14px 16px 12px 12px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbAsNow{display:none}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}.wbNextHours{display:none;justify-content:space-between;align-items:center;gap:8px;min-width:0}.wbHour{display:flex;flex-direction:column;align-items:center;gap:8px;min-width:0}.wbHourTime{color:var(--muted);font:400 14px/20px var(--font);white-space:nowrap}.wbHourTemp{font:400 18px/20px var(--font-tile);white-space:nowrap}.wbHour .wbWx.wbS40{width:40px;height:40px;border-radius:16px}.wbSummary{position:relative;flex:1 1 0;min-height:0;margin-top:-12px;container:wbsum/size}.wbSummaryText{position:absolute;top:12px;left:0;right:0;margin:0;color:var(--text);font:400 16px/22px var(--font);display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}@container wbsum (height < 56px){.wbSummaryText{-webkit-line-clamp:1}}@container wbsum (height < 34px){.wbSummaryText{display:none}}@container wb-card (width < 480px){.wbColumn .wbWx.wbS60{width:48px;height:48px;border-radius:16px}}@container wb-card (width < 400px){.wbCard.wbWeather{gap:16px;padding:18px 18px 10px}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumn .wbWx.wbS60{width:40px;height:40px;border-radius:14px}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbStripScroll.wbPaged{container-type:inline-size;scroll-snap-type:x mandatory;overscroll-behavior-x:contain}.wbStripScroll.wbPaged.wbHeld{scroll-snap-type:none}.wbPaged .wbStrip{position:relative;min-width:0;padding:0}.wbSnap{position:absolute;top:0;width:1px;height:1px;scroll-snap-align:start;pointer-events:none}.wbMark.wbLast{align-items:flex-end;transform:translate(-100%)}.wbPaged .wbTimes .wbMark.wbFirst{font:400 14px/20px var(--font)}.wbPaged .wbTimes .wbMark.wbNowMark{font:600 14px/20px var(--font-tile)}.wbSky .wbPast{position:absolute;top:0;bottom:0;left:0;background:var(--card);opacity:.45;pointer-events:none}.wbSky .wbNowLine{position:absolute;top:0;bottom:0;width:2px;margin-left:-1px;background:var(--text);opacity:.55;pointer-events:none}.wbSky.wbLineSky{background:var(--tile);color:var(--text)}.wbLineArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbLineArt .wbLineArc{fill:none;stroke:var(--text);stroke-width:1.5;stroke-linejoin:round;vector-effect:non-scaling-stroke;opacity:.7}.wbLineArt .wbLineHorizon{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.35}.wbLineArt .wbLineNight{fill:var(--text);opacity:.07}.wbLineArt .wbLineEdge{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.3}.wbLineTime{position:absolute;top:calc(80% + 4px);transform:translate(-50%);color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.wbLineNow{position:absolute;width:26px;height:26px;transform:translate(-50%,-50%);border-radius:50%;background:var(--tile);pointer-events:none}.wbLineNow>svg,.wbLineGlyph>svg{display:block;width:100%;height:100%}.wbLineGlyph{position:absolute;top:calc(50% - 14px);width:28px;height:28px;transform:translate(-50%);pointer-events:none}.wbLineGlyph.wbFirst{transform:none}.wbLineGlyph.wbLast{transform:translate(-100%)}.wbSky .wbMidnight{position:absolute;top:0;bottom:0;width:0;border-left:1.5px dashed var(--text);opacity:.5;pointer-events:none}.wbDays{position:absolute;top:36px;left:0;z-index:1;display:flex;pointer-events:none}.wbDaySpan{flex:none;min-width:0}.wbDayName{position:sticky;left:8px;margin-left:8px;height:26px;min-height:0;padding:0 10px;border:0;background:color-mix(in srgb,var(--card) 82%,transparent);color:var(--text);font:600 13px/26px var(--font-tile);white-space:nowrap;cursor:pointer;pointer-events:auto}.wb .wbDayName{border-radius:13px!important;font-family:var(--font-tile)!important}.wbViews button{padding:2px 10px;font-size:13px}.wbBars .wbDayBars{flex:1 1 0;min-height:160px;display:flex;flex-direction:column;padding:0 18px;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin}.wbBars.wbTabbed .wbDayBars{min-height:206px}.wbDayBar{flex:1 0 auto;display:grid;grid-template-columns:minmax(56px,auto) 40px 36px minmax(0,1fr) 36px;align-items:center;column-gap:12px;min-height:48px;box-shadow:inset 0 -.4px 0 var(--line)}.wbDayBar:last-child{box-shadow:none}.wbRangeDay{color:var(--text);font:600 14px/20px var(--font-tile);white-space:nowrap}.wbRangeLo{color:var(--muted);text-align:right;font:400 16px/20px var(--font);font-variant-numeric:tabular-nums}.wbRangeHi{color:var(--text);text-align:right;font:400 16px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbRangeTrack{position:relative;height:6px;border-radius:3px;background:var(--tile)}.wbRangeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:3px}.wbRangeNow{position:absolute;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:#fff;box-shadow:0 0 0 2px var(--card)}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbBars .wbDayBars{padding:0 8px;min-height:380px}.wbBars.wbTabbed .wbDayBars{min-height:426px}.wbDayBar{column-gap:8px}.wbStripScroll{min-height:380px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:16px;overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbSunTile .wbZone{display:block}.wbSunZone{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff;transition:background 1s ease}.wbSunTrack{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbSunBand{fill:#fff;fill-opacity:.1}.wbSunBand.wbSunDay{fill-opacity:.14}.wbSunBand.wbSunDone{fill-opacity:.85}.wbSunDot{fill:#ffd84a}.wbSunDot.wbSunNight{fill:#9aa3c7}.wbSunCount{position:absolute;top:22px;right:22px;bottom:22px;left:22px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;padding-bottom:14px}.wbSunLeft{font:500 clamp(28px,calc(16cqw * var(--wb-k,1)),36px)/1.1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums;white-space:nowrap}.wbSunWord{font:400 13px/18px var(--font);opacity:.85}.wbSunAt{position:absolute;bottom:32px;font:500 12px/16px var(--font);opacity:.85;font-variant-numeric:tabular-nums}.wbSunRise{left:32px}.wbSunSet{right:32px}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}.wbMoonCaption{gap:8px}.wbMoonCaption span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbMoonCaption span:last-child{flex:none}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbSea{position:relative;flex:1;min-height:0;border-radius:16px;overflow:hidden;--wb-sea-inset:clamp(8.88px,calc(4.76cqw * var(--wb-k,1)),12px)}.wbSeaArt{position:absolute;top:0;right:0;bottom:0;left:0;display:block;width:100%;height:100%;image-rendering:pixelated}.wbSeaFact{position:absolute;top:clamp(7px,calc(3.97cqw * var(--wb-k,1)),10px);inset-inline:var(--wb-sea-inset);color:#26221e;font:600 clamp(9.44px,calc(5.47cqw * var(--wb-k,1)),13.78px)/1.23 var(--font-tile)}.wbSeaValue{position:absolute;bottom:var(--wb-sea-inset);inset-inline-start:var(--wb-sea-inset);color:#fff;text-shadow:0 0 2px rgba(0,0,0,.6),0 1px 3px rgba(0,0,0,.5)}.wbSeaValue .wbUnitV{color:inherit}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbTrend{position:relative;width:100%;height:100%;min-height:0}.wbTrendPlot{position:absolute;top:22px;right:0;bottom:24px;left:0}.wbTrendPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbTrendLine{fill:none;stroke:var(--text);stroke-width:2;stroke-linejoin:round;stroke-linecap:round;opacity:.8}.wbTrendDot{position:absolute;width:7px;height:7px;margin:-3.5px 0 0 -3.5px;border-radius:50%;background:var(--card);box-shadow:0 0 0 2px var(--text)}.wbTrendDot.wbToday{width:11px;height:11px;margin:-5.5px 0 0 -5.5px;background:var(--primary);box-shadow:0 0 0 3px var(--card)}.wbAvgValue{position:absolute;transform:translate(-50%,calc(-100% - 8px));color:var(--muted);font:400 10px/1 var(--font-tile);white-space:nowrap}.wbAvgValue.wbToday{color:var(--text);font-size:12px;font-weight:600}.wbTrendAvg{position:absolute;right:0;transform:translateY(4px);color:var(--muted);font:400 10px/1 var(--font-tile)}.wbTrendDays{position:absolute;left:0;right:0;bottom:0;height:16px}.wbAvgDay{position:absolute;bottom:0;transform:translate(-50%);color:var(--muted);font:400 11px/16px var(--font-tile)}.wbAvgDay.wbToday{color:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}.wbZoned{gap:14px}.wbZone{position:relative;flex:none;height:198px;display:flex;align-items:center;justify-content:center;border-radius:16px;overflow:hidden}.wbCallouts{display:none;flex-direction:column;gap:4px;margin-top:-6px}.wbCallout{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbCallout>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbCallout>span:last-child{flex:none;color:var(--text);white-space:nowrap}.wbZone>.wbSunSky{flex:1;align-self:stretch;border-radius:0}.wbZone>.wbMoonBox{flex:none;height:150px}.wbBase .wbZone{align-items:flex-end;justify-content:flex-start}.wbZone>.wbTapeRow{align-self:stretch;height:100%}.wbItem[data-xl] .wbCallouts{display:flex}.wbUv .wbZone{display:block}.wbUvArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbUvBig{position:absolute;right:0;bottom:0;display:flex;flex-direction:column;align-items:flex-end}.wbUvNum{font:500 64px/.9 var(--font-tile);letter-spacing:-.03em;color:var(--text);font-variant-numeric:tabular-nums}.wbUvWord{margin-top:6px;font:400 14px/20px var(--font);color:var(--muted)}.wbAqSmile .wbZone{display:block}.wbAqFill{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff}.wbAqFace{position:absolute;left:12px;top:12px;width:min(140px,calc(100% - 60px));height:auto;aspect-ratio:1;fill:none;stroke:currentColor;stroke-width:3.4;stroke-linecap:round;stroke-linejoin:round}.wbAqFace .wbAqEyes{stroke-width:5}.wbAqBig{position:absolute;right:14px;bottom:12px;display:flex;flex-direction:column;align-items:flex-end}.wbAqNum{font:500 56px/.9 var(--font-tile);letter-spacing:-.03em;font-variant-numeric:tabular-nums}.wbAqUnit{margin-top:4px;font:500 14px/20px var(--font)}.wbPollenAir{position:absolute;top:0;right:0;bottom:62px;left:0;overflow:hidden;pointer-events:none}.wbFloat{position:absolute;left:-12%;animation:wbFloat linear infinite}.wbBob{display:block;animation:wbBob ease-in-out infinite alternate}@keyframes wbFloat{0%{left:-12%}to{left:106%}}@keyframes wbBob{0%{transform:translateY(-6px) rotate(-14deg)}to{transform:translateY(8px) rotate(16deg)}}.wbFloat svg{display:block}.wbSeed svg{width:calc(20px * var(--s));height:calc(28px * var(--s))}.wbGrain svg{width:calc(10px * var(--s));height:calc(10px * var(--s))}.wbStem svg{width:calc(9px * var(--s));height:calc(26px * var(--s))}.wbSeed{color:var(--text);opacity:.7}.wbGrain{color:#e9c46a;opacity:.85}.wbStem{color:#a3b18a;opacity:.75}#app.light .wbGrain{color:#c99a1e}#app.light .wbStem{color:#7d8c5f}@media (prefers-reduced-motion:reduce){.wbFloat,.wbBob{animation:none}.wbFloat{left:var(--x)}}.wbPush{display:block;transition:transform .35s cubic-bezier(.2,.8,.3,1)}.wbCallout.wbAdvice>span:first-child{color:var(--text)}.wbCard.wbSquare.wbGraphCard{height:100%;min-height:0}.wbGraphCard .wbHead .wbBack{margin:-4px -6px 0 auto}.wbGraphCard .wbRangeBtn{align-self:flex-start;display:inline-flex;align-items:center;gap:6px;max-width:100%;height:32px;padding:0 8px 0 10px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:600 12px/16px var(--font-tile);cursor:pointer}.wb button.wbRangeBtn{border-radius:12px!important}.wbRangeBtn>span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRangeBtn .wbIcon{flex:none;width:16px;height:16px;fill:currentColor}.wbRangeBtn[aria-expanded=true]{background:var(--bright);color:var(--on-bright)}.wbItem:has(.wbRangePick){position:relative;z-index:30}.wbRangePick{position:absolute;top:116px;left:18px;z-index:30;display:flex;flex-direction:column;gap:12px;width:248px;box-sizing:border-box;padding:12px;border-radius:24px;background:var(--card);box-shadow:var(--hc-hair-all),0 18px 40px #00000059}.wbRangePick.wbPickRight{left:auto;right:18px}.wbRangePresets{display:flex;flex-direction:column;gap:2px}.wb .wbRangePreset{height:32px;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--text);font:400 14px/20px var(--font);text-align:left;cursor:pointer}.wb .wbRangePreset:hover{background:var(--tile)}.wb .wbRangePreset[aria-pressed=true]{background:var(--bright);color:var(--on-bright);font-weight:600}.wbRangeDates{display:grid;grid-template-columns:1fr 1fr;gap:8px;padding-top:12px;box-shadow:inset 0 .4px 0 var(--line)}.wbRangeDates label{display:grid;gap:4px;min-width:0;color:var(--muted);font:400 12px/16px var(--font)}.wbRangeDates input{width:100%;min-width:0;height:32px;box-sizing:border-box;padding:0 6px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:400 12px/16px var(--font);color-scheme:inherit}.wb .wbRangeApply{height:32px;padding:0 14px;border:0;border-radius:999px!important;background:var(--bright);color:var(--on-bright);font:600 12px/16px var(--font-tile);cursor:pointer}.wbGraphCard .wbGraph{flex:1;height:auto;min-height:0}.wb.wbPopup{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073;overscroll-behavior:contain;container-type:normal}.wb.wbPopup[hidden]{display:none}.wbPopupBox{position:relative;width:520px;max-width:100%}.wbPopup .wbCard.wbSquare.wbGraphCard{height:auto;aspect-ratio:auto;box-shadow:var(--hc-hair-all)}.wbPopup .wbGraphCard .wbGraph{flex:none;height:auto}@media (max-width:620px){.wb.wbPopup{place-items:end stretch;padding:0}.wbPopupBox{width:100%}.wbPopup .wbCard.wbSquare.wbGraphCard{border-radius:28px 28px 0 0}}`, ih = '#app .mvPv{position:relative;transform:perspective(var(--pv-persp)) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) scale(var(--sc,1));transition:transform var(--pv-ret) var(--pv-ease)}#app .mvPv.mvMoving{transition:transform 70ms linear}#app .mvPv:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;opacity:0;mix-blend-mode:soft-light;background:radial-gradient(circle at var(--mx,50%) var(--my,50%),rgba(255,255,255,var(--pv-shine)),transparent var(--pv-size));transition:opacity var(--pv-ret) ease}#app .mvPv.mvLit:after{opacity:1}#app .tfBar{--mv-c:var(--light-soft,var(--primary));transform-origin:center;transition:box-shadow var(--ab-out) var(--ab-ease),transform var(--ab-out) var(--ab-ease)}#app .tfBar.mvHover{box-shadow:0 0 var(--ab-blur) var(--ab-spread) color-mix(in srgb,var(--mv-c) var(--ab-str),transparent);transition-duration:var(--ab-in)}#app .tfBar.mvHold{box-shadow:0 0 var(--ab-blur2) var(--ab-spread2) color-mix(in srgb,var(--mv-c) var(--ab-str2),transparent);transform:var(--ab-grow);transition-duration:var(--ab-in)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>:is(svg,ha-icon,ha-state-icon,span){transition:scale var(--ih-dur) var(--ih-ease)}@media (hover:hover){#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-s)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover:before{opacity:1}}:where(#app button.tfIcon,#app .tfBack,#app .tfEditChip,#app .tfTrayBtn,#app [data-wb=graph-close]){position:relative}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;background:color-mix(in srgb,currentColor var(--ih-tint),transparent);opacity:0;transition:opacity var(--ih-dur) var(--ih-ease)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):active>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-p)}#app .mvSegInd{position:absolute;z-index:0;pointer-events:none}#app .mvSegMoving>button{position:relative;z-index:1;background-color:transparent!important;box-shadow:none!important;transition:none!important}#app .tfMoreBackdrop{-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}#app .toast.tfToast{min-height:58px;box-sizing:border-box;padding:9px 18px 9px 9px;gap:14px;border-radius:29px;font-size:18px;line-height:1.2}#app .toast .mvTick{display:grid;place-items:center;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--mv-ok);color:#fff}#app .toast .mvTick svg{width:26px;height:26px;fill:none;stroke:currentColor;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}#app .toast .mvToastText{font-weight:600}#app .toast .toastAction{font-size:16px;margin-left:2px}#app .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}#app{--ol-l:68%;--mv-ok:#4cc38a}#app.light{--ol-l:48%;--mv-ok:#1f7a4d}#app .tfAreaPanel:has(>.mvEdge){isolation:isolate;position:relative}#app .tfRoomTile.tfBoardItem:has(>.mvEdge){isolation:isolate}#app .mvEdge,#app .mvEdgeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity var(--ol-in) ease-out}#app .mvEdgeFill{z-index:-1;background:hsl(var(--ol-h) 97% var(--ol-l));mix-blend-mode:soft-light;opacity:clamp(0,calc(var(--ol-fill) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-fill));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%)}#app .mvEdge{z-index:5}#app .mvEdge:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l));opacity:clamp(0,calc(var(--ol-border) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-border));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%));mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%))}#app .mvEdge>i{position:absolute;top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;border-radius:inherit;mix-blend-mode:plus-lighter;opacity:clamp(0,calc(var(--ol-glow) * (var(--edge-proximity,0) - var(--ol-esens)) / (100 - var(--ol-esens))),var(--ol-glow));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}#app .mvEdge>i:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;--s:var(--ol-size);box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l) / 60%),inset 0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),inset 0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),inset 0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(22.4px*var(--s)) calc(1.6px*var(--s)) hsl(var(--ol-h) 97% var(--ol-l) / 10%)}#app :not(.mvLitEdge)>:is(.mvEdge,.mvEdgeFill){opacity:0;transition:opacity var(--ol-out) ease-out}@media (prefers-reduced-motion:reduce){#app .mvPv{transform:none!important}#app .mvPv:after{display:none}#app .tfBar.mvHold{transform:none}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>*{scale:none!important}}#app .tfBoardItem.mvDrag{scale:none}#app.tfEditing.tfBoardReady .tfBoardItem:not(.tfDragging){transition:left .42s cubic-bezier(.34,1.46,.64,1),top .42s cubic-bezier(.34,1.46,.64,1),height .42s cubic-bezier(.34,1.46,.64,1)}', sh = `<main id="app"><div class="shell">
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
`, Cd = "homecore-theme", lh = {
  home: '<path d="M3 10.5L12 3L21 10.5V21H3V10.5Z"/>',
  settings: '<path d="M21 4H14"/><path d="M10 4H3"/><path d="M21 12H12"/><path d="M8 12H3"/><path d="M21 20H16"/><path d="M12 20H3"/><path d="M14 2V6"/><path d="M8 10V14"/><path d="M16 18V22"/>',
  fullscreen: '<path d="M8 3H5C3.9 3 3 3.9 3 5V8"/><path d="M21 8V5C21 3.9 20.1 3 19 3H16"/><path d="M3 16V19C3 20.1 3.9 21 5 21H8"/><path d="M16 21H19C20.1 21 21 20.1 21 19V16"/>',
  back: '<path d="M15 18L9 12L15 6"/>'
}, ch = (n) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (lh[n] || "") + "</svg>", Ad = {
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
function dh(n, { setLight: r, fullscreenSupported: d, toggleFullscreen: p }) {
  const g = (et) => n.getElementById(et), v = g("app");
  n.querySelectorAll("[data-icon]").forEach((et) => {
    et.innerHTML = ch(et.dataset.icon);
  });
  const w = { home: g("homeView"), settings: g("settingsView") }, T = g("homeNav"), W = g("settingsNav");
  function M(et) {
    Object.entries(w).forEach(([at, X]) => X.classList.toggle("active", at === et)), T.classList.toggle("active", et === "home"), W.classList.toggle("active", et === "settings");
  }
  T.addEventListener("click", () => M("home")), W.addEventListener("click", () => M("settings")), g("settingsBack").addEventListener("click", () => M("home"));
  function D(et) {
    const at = et === "light";
    n.querySelectorAll(".themeBtn").forEach((X) => X.classList.toggle("active", X.dataset.theme === et)), v.classList.toggle("light", at), r(at);
  }
  D(Ad.get(Cd) === "light" ? "light" : "dark"), n.querySelectorAll(".themeBtn").forEach((et) => et.addEventListener("click", () => {
    D(et.dataset.theme), Ad.set(Cd, et.dataset.theme);
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
const ph = /* @__PURE__ */ new Set(["roaming", "test_area"]), uh = {
  living_room: { climate: !0, cover: ["Curtains", "curtain", 62], temperature: 20.5, humidity: 44, motion: "Living room motion", plant: ["Monstera", 32, 4200, 21.4, 580] },
  kitchen: { temperature: 21.2, humidity: 48, door: "Back door", plant: ["Basil", 55, 900, 22.1, 910] },
  balcony: { solar: !0, door: "Balcony door", doorOpen: !0, valve: "Watering", valvePos: ["Garden valve", 40], plant: ["Tomatoes", 61, 18500, 14.2, 1240] },
  bedroom: { cover: ["Roller blind", "shade", 0], humidifier: !0, temperature: 18.9, humidity: 38, window: "Bedroom window", fan: ["Ceiling fan", 60] },
  office: { cover: ["Blinds", "blind", 60, 45], vacuum: !0, temperature: 21.8, humidity: 41, plant: ["Pothos", 47, 2600, 21.6, 640] },
  bathroom: { temperature: 22.4, humidity: 62, fan: ["Extractor fan"], waterHeater: !0, valvePos: ["Water valve", null] }
}, Ln = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, Se = "made_up_", Ya = (n) => {
  var r;
  return (r = String(n).split(".")[1]) == null ? void 0 : r.startsWith(Se);
}, An = (n) => n.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function tc(n) {
  const r = n.getHours() + n.getMinutes() / 60, d = Math.max(0, Math.sin((r - 7) / 13 * Math.PI));
  return 2.4 * d * d;
}
function fh(n) {
  const r = new Date(n.getFullYear(), n.getMonth(), n.getDate());
  let d = 0;
  for (let p = +r; p < +n; p += 10 * 60 * 1e3) d += tc(new Date(p)) / 6;
  return d;
}
function Td(n = /* @__PURE__ */ new Date()) {
  const r = [];
  for (let d = 0; d <= 96; d++) {
    const p = +n - (96 - d) * 15 * 60 * 1e3;
    r.push([p, tc(new Date(p))]);
  }
  return r;
}
function hh({ onChange: n }) {
  const r = {}, d = {}, p = (X, N, nt, dt) => {
    r[X] = { entity_id: X, state: nt, attributes: dt, last_changed: new Date(Date.now() - 18e6).toISOString() }, d[X] = N;
  }, g = (X, N, nt) => {
    const dt = r[X], bt = N ?? dt.state;
    r[X] = { ...dt, state: bt, attributes: { ...dt.attributes, ...nt }, last_changed: bt === dt.state ? dt.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, v = (X, N, nt, dt) => p("binary_sensor." + Se + (X ? X + "_" : "") + An(N), X, dt ? "on" : "off", { friendly_name: N, device_class: nt });
  Object.entries(uh).forEach(([X, N]) => {
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
      const [nt, dt] = N.fan;
      p("fan." + Se + X + "_" + An(nt), X, "on", dt != null ? { friendly_name: nt, percentage: dt, percentage_step: 10, oscillating: !0, direction: "forward", supported_features: 55 } : { friendly_name: nt, supported_features: 48 });
    }
    if (N.waterHeater && p("water_heater." + Se + X, X, "eco", { friendly_name: "Water heater", current_temperature: 55, temperature: 60, min_temp: 40, max_temp: 75, target_temp_step: 1, operation_mode: "eco", operation_list: ["off", "eco", "electric", "gas"], away_mode: "off" }), N.valvePos) {
      const [nt, dt] = N.valvePos;
      p("valve." + Se + X + "_" + An(nt), X, dt == null || dt ? "open" : "closed", { friendly_name: nt, device_class: "water", supported_features: 3 | (dt == null ? 0 : 12), ...dt == null ? {} : { current_position: dt } });
    }
    if (N.garage && p("cover." + Se + X + "_" + An(N.garage), X, "closed", { friendly_name: N.garage, device_class: "garage", supported_features: 3 }), N.cover) {
      const [nt, dt, bt, it] = N.cover;
      p("cover." + Se + X + "_" + An(nt), X, bt ? "open" : "closed", { friendly_name: nt, device_class: dt, current_position: bt, ...it != null ? { current_tilt_position: it } : {} });
    }
    if (N.humidifier && p("humidifier." + Se + X, X, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: N.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), N.solar && (p("sensor." + Se + X + "_solar_power", X, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), p("sensor." + Se + X + "_solar_today", X, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), N.valve && p("valve." + Se + X + "_" + An(N.valve), X, "closed", { friendly_name: N.valve, device_class: "water" }), N.door && v(X, N.door, "door", N.doorOpen), N.window && v(X, N.window, "window", !1), N.motion && v(X, N.motion, "motion", !1), N.plant) {
      const [nt, dt, bt, it, K] = N.plant, Y = Se + An(nt), H = (Rt, ct, U, Ft, V) => p("sensor." + Y + "_" + Rt, X, String(U), { friendly_name: ct, device_class: V, state_class: "measurement", unit_of_measurement: Ft, plant_low: U < Ln[Rt][0], plant_high: U > Ln[Rt][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[Rt] });
      H("moisture", "Moisture", dt, "%", "moisture"), H("light", "Light", bt, "lx", "illuminance"), H("temperature", "Temperature", it, "°C", "temperature"), H("fertility", "Fertility", K, "µS/cm", "conductivity");
      const xt = Object.entries({ moisture: dt, light: bt, temperature: it, fertility: K }).filter(([Rt, ct]) => ct < Ln[Rt][0] || ct > Ln[Rt][1]).map(([Rt, ct]) => Rt + (ct < Ln[Rt][0] ? " low" : " high"));
      p("plant." + Y, X, xt.length ? "problem" : "ok", { friendly_name: nt, moisture: dt, brightness: bt, temperature: it, conductivity: K, problem: xt.join(", ") || "none" });
    }
  }), p("alarm_control_panel." + Se + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 39, code_format: "number", code_arm_required: !1, changed_by: "Matt" }), v(null, "Front door", "door", !1), v(null, "Smoke alarm", "smoke", !1), p("sensor." + Se + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const w = {}, T = {};
  let W = null;
  function M() {
    const X = /* @__PURE__ */ new Date();
    Object.keys(r).forEach((N) => {
      N.endsWith("_solar_power") && (r[N] = { ...r[N], state: tc(X).toFixed(2) }), N.endsWith("_solar_today") && (r[N] = { ...r[N], state: fh(X).toFixed(1) });
    });
  }
  M();
  let D = 0;
  function I() {
    let X = !1;
    const N = ++D % 10 === 0, nt = (it, K, Y) => {
      g(it, K, Y), X = !0;
    };
    Object.entries(w).forEach(([it, K]) => {
      const Y = r[it].attributes.current_position, H = Y < K ? Math.min(K, Y + 10) : Math.max(K, Y - 10);
      H === K && delete w[it], nt(it, H === K ? H === 0 ? "closed" : "open" : K > Y ? "opening" : "closing", { current_position: H });
    }), Object.entries(T).forEach(([it, K]) => {
      const Y = r[it].attributes.current_tilt_position, H = Y < K ? Math.min(K, Y + 25) : Math.max(K, Y - 25);
      H === K && delete T[it], nt(it, null, { current_tilt_position: H });
    }), Object.keys(r).filter((it) => it.startsWith("climate.")).forEach((it) => {
      const K = r[it], Y = K.attributes, H = Y.current_temperature, xt = (K.state === "heat" || K.state === "auto") && H < Y.temperature - 0.05, Rt = (K.state === "cool" || K.state === "auto") && H > Y.temperature + 0.05, ct = K.state === "off" ? "off" : xt ? "heating" : Rt ? "cooling" : "idle", U = N ? Math.round((H + (xt ? 0.1 : Rt ? -0.1 : 0)) * 10) / 10 : H;
      (U !== H || ct !== Y.hvac_action) && nt(it, null, { current_temperature: U, hvac_action: ct });
    }), Object.keys(r).filter((it) => it.startsWith("humidifier.")).forEach((it) => {
      const K = r[it], Y = K.attributes, H = Y.current_humidity, xt = K.state === "on" && H < Y.humidity, Rt = xt && N ? H + 1 : H, ct = K.state !== "on" ? "off" : xt ? "humidifying" : "idle";
      if (Rt !== H || ct !== Y.action) {
        nt(it, null, { current_humidity: Rt, action: ct });
        const U = "sensor." + Se + d[it] + "_humidity";
        r[U] && nt(U, String(Rt));
      }
    });
    const dt = r["vacuum." + Se + "robot"], bt = dt.attributes;
    dt.state === "cleaning" && N && nt(dt.entity_id, null, { battery_level: Math.max(5, bt.battery_level - 1) }), dt.state === "returning" && nt(dt.entity_id, "docked", {}), dt.state === "docked" && bt.battery_level < 100 && nt(dt.entity_id, null, { battery_level: Math.min(100, bt.battery_level + 2) }), W && Date.now() - W.at > 5e3 && (nt("alarm_control_panel." + Se + "house", "armed_" + W.mode, {}), W = null), X && n();
  }
  const G = setInterval(I, 1e3), J = setInterval(() => {
    M(), n();
  }, 60 * 1e3);
  function et(X, N, nt) {
    const dt = nt == null ? void 0 : nt.entity_id;
    if (!r[dt]) return !1;
    const bt = r[dt], it = bt.attributes, K = (Y, H) => g(dt, Y, H);
    if (X === "climate" && (N === "set_temperature" && nt.temperature != null && K(null, { temperature: Math.max(it.min_temp, Math.min(it.max_temp, nt.temperature)) }), N === "set_hvac_mode" && K(nt.hvac_mode, nt.hvac_mode === "off" ? { hvac_action: "off" } : {}), N === "toggle" && K(bt.state === "off" ? "heat" : "off", bt.state === "off" ? {} : { hvac_action: "off" }), N === "set_temperature" && nt.target_temp_low != null && K(null, { target_temp_low: nt.target_temp_low, target_temp_high: nt.target_temp_high }), N === "set_fan_mode" && K(null, { fan_mode: nt.fan_mode }), N === "set_swing_mode" && K(null, { swing_mode: nt.swing_mode }), N === "set_preset_mode" && K(null, { preset_mode: nt.preset_mode }), N === "set_humidity" && K(null, { humidity: Math.max(it.min_humidity, Math.min(it.max_humidity, nt.humidity)) })), X === "fan" && (N === "set_percentage" && K(nt.percentage > 0 ? "on" : "off", { percentage: nt.percentage }), N === "oscillate" && K(null, { oscillating: nt.oscillating }), N === "set_direction" && K(null, { direction: nt.direction }), (N === "turn_on" || N === "turn_off" || N === "toggle") && K(N === "turn_on" || N === "toggle" && bt.state !== "on" ? "on" : "off")), X === "water_heater" && (N === "set_temperature" && K(null, { temperature: Math.max(it.min_temp, Math.min(it.max_temp, nt.temperature)) }), N === "set_operation_mode" && K(nt.operation_mode, { operation_mode: nt.operation_mode }), N === "set_away_mode" && K(null, { away_mode: nt.away_mode ? "on" : "off" }), N === "turn_on" || N === "turn_off" || N === "toggle")) {
      const Y = N === "turn_on" || N === "toggle" && bt.state === "off";
      K(Y ? "eco" : "off", { operation_mode: Y ? "eco" : "off" });
    }
    if (X === "cover") {
      const Y = N === "open_cover" ? 100 : N === "close_cover" ? 0 : N === "set_cover_position" ? nt.position : N === "toggle" ? it.current_position > 0 ? 0 : 100 : null;
      N === "stop_cover" && (delete w[dt], delete T[dt], K(it.current_position === 0 ? "closed" : "open")), Y != null && it.current_position == null ? K(Y > 0 ? "open" : "closed") : Y != null && Y !== it.current_position && (w[dt] = Y, K(Y > it.current_position ? "opening" : "closing"));
      const H = N === "open_cover_tilt" ? 100 : N === "close_cover_tilt" ? 0 : N === "set_cover_tilt_position" ? nt.tilt_position : null;
      N === "stop_cover_tilt" && delete T[dt], H != null && it.current_tilt_position != null && H !== it.current_tilt_position && (T[dt] = H);
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
      N === "alarm_disarm" && (W = null, K("disarmed", { changed_by: "Matt" }));
      const Y = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night", alarm_arm_vacation: "vacation" }[N];
      Y && (W = { mode: Y, at: Date.now() }, K("arming", { changed_by: "Matt" }));
    }
    return n(), !0;
  }
  function at(X, { madeUp: N = !0 } = {}) {
    const nt = N ? r : {}, dt = (X == null ? void 0 : X.states) || {}, bt = (X == null ? void 0 : X.entities) || {}, it = (X == null ? void 0 : X.devices) || {}, K = (ot) => {
      var vt;
      const st = bt[ot];
      return st && (st.area_id || st.device_id && ((vt = it[st.device_id]) == null ? void 0 : vt.area_id)) || null;
    }, Y = (ot) => {
      const st = bt[ot];
      return dt[ot] && dt[ot].state !== "unavailable" && !(st != null && st.hidden) && !(st != null && st.entity_category);
    }, H = {};
    Object.keys(dt).forEach((ot) => {
      const st = K(ot);
      st && Y(ot) && (H[st] || (H[st] = [])).push(ot);
    });
    const xt = { ...dt, ...nt }, Rt = (ot) => {
      var st, vt;
      return (vt = (st = xt[ot]) == null ? void 0 : st.attributes) == null ? void 0 : vt.device_class;
    }, ct = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], U = Object.keys(dt).filter((ot) => ot.startsWith("vacuum.") && Y(ot)), Ft = Object.values((X == null ? void 0 : X.areas) || {}).filter((ot) => !ph.has(ot.area_id)).map((ot) => {
      const st = ot.area_id, vt = H[st] || [], ht = (Nt) => vt.filter((_e) => _e.startsWith(Nt + ".")), kt = (Nt) => ht("sensor").filter((_e) => Rt(_e) === Nt), qt = (Nt) => Object.keys(nt).filter((_e) => d[_e] === st && Nt(_e)), re = (Nt, _e) => Nt.length ? Nt : qt(_e), wa = re(kt("temperature"), (Nt) => Nt.endsWith(st + "_temperature")), ia = re(kt("humidity"), (Nt) => Nt.endsWith(st + "_humidity")), ua = kt("power").filter((Nt) => /^(W|kW)$/.test(xt[Nt].attributes.unit_of_measurement || "")), Je = ht("binary_sensor").filter((Nt) => Rt(Nt) === "moisture"), Bn = re(ht("plant"), (Nt) => Nt.startsWith("plant.")).map((Nt) => ({ id: Nt, readings: qt((_e) => _e.startsWith("sensor." + Nt.split(".")[1] + "_")) })), wt = [...ht("binary_sensor").filter((Nt) => ct.includes(Rt(Nt))), ...qt((Nt) => Nt.startsWith("binary_sensor."))];
      return {
        id: st,
        name: ot.name,
        icon: ot.icon,
        floor: ot.floor_id || null,
        readings: [...wa.slice(0, 1), ...ia.slice(0, 1), ...Je],
        power: ua.length ? ua.reduce((Nt, _e) => Nt + Number(xt[_e].state) * (xt[_e].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: ht("switch"),
        lights: ht("light"),
        actions: [
          ...ht("light"),
          ...re(ht("climate"), (Nt) => Nt.startsWith("climate.")),
          ...re(ht("cover"), (Nt) => Nt.startsWith("cover.")),
          ...re(ht("humidifier"), (Nt) => Nt.startsWith("humidifier.")),
          ...re(ht("valve"), (Nt) => Nt.startsWith("valve.")),
          ...ht("media_player"),
          ...ht("vacuum"),
          ...U.length ? [] : qt((Nt) => Nt.startsWith("vacuum.")),
          ...ht("fan"),
          ...qt((Nt) => Nt.startsWith("fan.")),
          ...ht("water_heater"),
          ...qt((Nt) => Nt.startsWith("water_heater."))
        ],
        solar: qt((Nt) => Nt.includes("_solar_")),
        plants: Bn,
        openings: wt,
        alerts: [...Je, ...wt].filter((Nt) => {
          var _e;
          return ((_e = xt[Nt]) == null ? void 0 : _e.state) === "on";
        })
      };
    }).filter((ot) => ot.readings.length || ot.plugs.length || ot.actions.length || ot.solar.length || ot.plants.length), V = Object.keys(dt).find((ot) => /^sensor\..*(p1_meter_power|grid_power)$/.test(ot) && dt[ot].state !== "unavailable") || null, Q = (ot) => Object.keys(dt).filter((st) => st.startsWith(ot + ".") && Y(st)), A = Q("alarm_control_panel"), ft = U.length ? U : N ? ["vacuum." + Se + "robot"] : [];
    return {
      states: xt,
      rooms: Ft,
      grid: V,
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
const Na = {
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
}, zr = (n) => n < 0 ? 0 : n > 1 ? 1 : n, Yl = (n) => {
  const r = String(n || "#000000").trim().replace("#", ""), d = r.length === 3 ? r.split("").map((p) => p + p).join("") : r;
  return [0, 2, 4].map((p) => parseInt(d.slice(p, p + 2), 16) || 0);
}, mh = (n) => "#" + n.map((r) => Math.round(Math.max(0, Math.min(255, r))).toString(16).padStart(2, "0")).join(""), Ld = {}, Pa = (n, r, d) => {
  const p = n + r + d;
  return Ld[p] || (Ld[p] = mh(Yl(n).map((g, v) => g + (Yl(r)[v] - g) * d)));
}, Dd = {}, _l = (n) => Dd[n] || (Dd[n] = Yl(n));
function Rp(n, r) {
  const d = String(n || "");
  return (d === "sunny" || d === "clear-night" ? "clear" : d === "partlycloudy" ? "partly" : d === "fog" ? "fog" : d === "lightning" || d === "lightning-rainy" ? "storm" : d === "snowy" || d === "snowy-rainy" ? "snow" : d === "rainy" || d === "pouring" || d === "hail" ? "rain" : "cloudy") + "/" + (d === "clear-night" || r ? "night" : "day");
}
function gh(n) {
  const r = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return r.partly = [Pa(r.clear[0], r.cloudy[0], 0.12), Pa(r.clear[1], r.cloudy[1], 0.12)], r.storm = [Pa(r.rain[0], "#000000", 0.22), Pa(r.rain[1], "#000000", 0.22)], r;
}
const Zl = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], Kl = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], Xl = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function bh(n, r = Na) {
  const d = { ...Na, ...r }, p = gh(d), g = String(n).split("/"), v = p[g[0]] ? g[0] : "clear", w = g[1] === "night", T = p[v][w ? 1 : 0], W = {
    night: w,
    clearness: v === "clear" ? 1 : v === "partly" ? 0.7 : 0.25,
    sky: T,
    skyStops: [T],
    skyT: 0,
    sun: { x: 45, y: w ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: w ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: w ? 1 : 0 },
    stars: Zl.map(() => ({ o: 0 })),
    rain: Kl.map(() => ({ o: 0, dy: -16 })),
    snow: Xl.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, M = (D) => Zl.map(() => ({ o: D }));
  return v === "clear" ? w ? (W.moon.o = 1, W.stars = M(1)) : W.sun.o = 1 : v === "partly" ? (W.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: w ? 1 : 0 }, w ? (W.moon = { x: 34, y: 33, d: 48, o: 1 }, W.stars = M(0.7)) : W.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : v === "cloudy" || v === "fog" ? (W.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: w ? 1 : 0 }, w ? W.moon = { x: 40, y: 36, d: 40, o: 0 } : W.sun = { x: 40, y: 36, r: 20, o: 0 }) : (W.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, w ? W.moon = { x: 38, y: 28, d: 36, o: 0 } : W.sun = { x: 38, y: 28, r: 18, o: 0 }, v === "snow" ? W.snow = Xl.map(() => ({ o: 1, dy: 0 })) : W.rain = Kl.map((D, I) => ({ o: v === "storm" && I === 1 ? 0 : 1, dy: 0 })), v === "storm" && (W.bolt = { o: 1, dy: 0 })), W;
}
const wh = [
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
], Tn = (n, r) => (wh[(r & 7) * 8 + (n & 7)] + 0.5) / 64, vh = 0, Pp = 1, Hp = 2, Np = 3, Op = 4, po = 5, ss = 6, cr = 7, Ip = 8, Ed = (n, r) => r <= 0.6665 && ((n - 0.5) * (n - 0.5) + (r - 0.2877) * (r - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (r - 0.416) * (r - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (r - 0.458) * (r - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && r >= 0.416), yh = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], xh = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((n) => [n[0] * 13 / 11, n[1] * 28 / 24]), Mh = (n, r, d) => {
  let p = !1;
  for (let g = 0, v = n.length - 1; g < n.length; v = g++) {
    const w = n[g], T = n[v];
    w[1] > d != T[1] > d && r < (T[0] - w[0]) * (d - w[1]) / (T[1] - w[1]) + w[0] && (p = !p);
  }
  return p;
};
function kh(n, { size: r = 90, px: d = 2, oneBit: p = !1, colors: g = Na, ink: v = "#26221e", paper: w = "#fbf9f6", clock: T = 0, idle: W = !1 } = {}) {
  const M = { ...Na, ...g }, D = Math.sin, I = Math.PI * 2, G = Math.max(6, Math.round(r / d)), J = G / 90, et = W ? Math.floor(T / 100) * 100 : 0, at = W ? D(I * et / 3600) : 0, X = W ? 1.8 * D(I * et / 6400) : 0, N = W ? 0.9 * D(I * et / 4100) : 0, nt = W ? 0.8 * D(I * et / 5200) : 0, dt = et / 3400 % 1, bt = W && n.bolt.o > 0.5 && (dt < 0.04 || dt > 0.08 && dt < 0.11), it = new Array(G * G), K = new Uint8Array(G * G), Y = (V, Q, A, ft, ot) => {
    A == null || V < 0 || Q < 0 || V >= G || Q >= G || (ft >= 1 || ft > Tn(V + 5, Q + 3)) && (it[Q * G + V] = A, K[Q * G + V] = ot);
  }, H = (V, Q, A, ft) => {
    for (let ot = Math.max(0, Math.floor(Q - A) - 1); ot <= Math.min(G - 1, Q + A + 1); ot++) for (let st = Math.max(0, Math.floor(V - A) - 1); st <= Math.min(G - 1, V + A + 1); st++) ft(st, ot, st + 0.5 - V, ot + 0.5 - Q);
  }, xt = n.skyStops || [n.sky], Rt = n.skyT || 0;
  for (let V = 0; V < G; V++) {
    const Q = n.night ? zr(1 - (V + 0.5) / (G * 0.7)) * 0.85 : zr(((V + 0.5) / G - 0.35) / 0.65) * 0.85;
    for (let A = 0; A < G; A++) {
      let ft = xt[0];
      if (xt.length > 1) {
        const ot = Rt * (xt.length - 1), st = Math.min(xt.length - 2, Math.floor(ot));
        ft = ot - st > Tn(A, V) ? xt[st + 1] : xt[st];
      }
      Q > Tn(A + 2, V + 5) && (ft = n.night ? Pa(ft, "#000000", 0.28) : Pa(ft, "#ffffff", 0.2)), it[V * G + A] = bt ? Pa(ft, "#ffffff", 0.25) : ft;
    }
  }
  if (n.sun.o > 0.01) {
    const V = n.sun.x * J, Q = n.sun.y * J, A = Math.max(1, n.sun.r * J);
    if (W) {
      const ft = A * (1.45 + 0.06 * at), ot = Pa(M.sun, "#ffffff", 0.55);
      if (H(V, Q, ft, (st, vt, ht, kt) => {
        const qt = Math.sqrt(ht * ht + kt * kt);
        qt > A && qt < ft && Y(st, vt, ot, 0.26 * (1 - (qt - A) / (ft - A)) * n.sun.o, vh);
      }), n.sun.o > 0.5) {
        const st = Math.floor(et / 500) % 2, vt = Math.max(1, A * 0.22);
        for (let ht = 0; ht < 8; ht++) if (ht % 2 === st) for (let kt = A + 1.5; kt < A + 1.5 + vt; kt += 0.7) Y(Math.floor(V + Math.cos(ht * Math.PI / 4) * kt), Math.floor(Q + Math.sin(ht * Math.PI / 4) * kt), M.sun, n.sun.o, Ip);
      }
    }
    H(V, Q, A, (ft, ot, st, vt) => {
      if (st * st + vt * vt > A * A) return;
      const ht = ((st * 0.643 + vt * 0.766) / A + 1) / 2;
      Y(ft, ot, zr((ht - 0.62) / 0.38) > Tn(ft, ot) ? M.sunEdge : M.sun, n.sun.o, Pp);
    });
  }
  if (Zl.forEach((V, Q) => {
    const A = n.stars[Q].o;
    if (A < 0.01) return;
    const ft = Math.floor(V[0] * J), ot = Math.floor(V[1] * J), st = W ? (Math.floor(et / 300) + Q * 3) % 6 : 0;
    if (st === 5) return;
    const vt = Math.round(V[2] * J * (st === 4 ? 0.3 : st < 2 ? 1 : 0.6));
    Y(ft, ot, M.star, A, cr);
    for (let ht = 1; ht <= vt; ht++) {
      const kt = ht === vt && vt > 1 ? Pa(M.star, n.sky, 0.5) : M.star;
      Y(ft - ht, ot, kt, A, cr), Y(ft + ht, ot, kt, A, cr), Y(ft, ot - ht, kt, A, cr), Y(ft, ot + ht, kt, A, cr);
    }
  }), n.moon.o > 0.01) {
    const V = Math.max(1.5, n.moon.d * J * 0.37), Q = n.moon.x * J, A = n.moon.y * J + (W && nt > 0.4 ? -1 : 0), ft = Q + 0.547 * V, ot = A - 0.503 * V, st = 0.82 * V, vt = Pa(M.moon, "#ffffff", 0.6);
    H(Q, A, V, (ht, kt, qt, re) => {
      if (qt * qt + re * re > V * V) return;
      const wa = ht + 0.5 - ft, ia = kt + 0.5 - ot;
      wa * wa + ia * ia <= st * st || Y(ht, kt, zr((re + V) / (2 * V) * 1.1 - 0.1) > Tn(ht, kt) ? M.moon : vt, n.moon.o, Hp);
    });
  }
  const ct = Math.max(2, Math.round(15.65 * J)), U = Math.max(1, Math.round(5.87 * J * 0.5));
  Kl.forEach((V, Q) => {
    const A = n.rain[Q];
    let ft = A.dy, ot = A.o;
    if (ot < 0.01) return;
    if (W) {
      const ht = (et / 950 + Q / 3) % 1;
      ft += -5 + ht * 14, ot *= ht < 0.18 ? ht / 0.18 : ht > 0.72 ? (1 - ht) / 0.28 : 1;
    }
    const st = (V[0] + 3 + X) * J, vt = (V[1] + ft) * J;
    for (let ht = 0; ht < ct; ht++) for (let kt = 0; kt < U; kt++) Y(Math.floor(st - 0.208 * ht) + kt, Math.floor(vt) + ht, M.rain, ot, Op);
  });
  const Ft = Math.max(0, Math.round(7.34 * J / 2.6));
  if (Xl.forEach((V, Q) => {
    const A = n.snow[Q];
    let ft = A.dy, ot = 0, st = A.o;
    if (st < 0.01) return;
    if (W) {
      const kt = (et / 3200 + Q / 5) % 1;
      ft += -6 + kt * 14, ot = 1.5 * D(I * (kt * 1.5 + Q / 5)), st *= kt < 0.2 ? kt / 0.2 : kt > 0.75 ? (1 - kt) / 0.25 : 1;
    }
    const vt = Math.floor((V[0] + 3.67 + ot + X) * J), ht = Math.floor((V[1] + 3.67 + ft) * J);
    Y(vt, ht, M.snow, st, po);
    for (let kt = 1; kt <= Ft; kt++)
      Y(vt - kt, ht, M.snow, st, po), Y(vt + kt, ht, M.snow, st, po), Y(vt, ht - kt, M.snow, st, po), Y(vt, ht + kt, M.snow, st, po), Ft > 1 && kt < Ft && (Y(vt - kt, ht - kt, M.snow, st, po), Y(vt + kt, ht - kt, M.snow, st, po), Y(vt - kt, ht + kt, M.snow, st, po), Y(vt + kt, ht + kt, M.snow, st, po));
  }), n.bolt.o > 0.01)
    if (G >= 30) {
      const V = 39 + X, Q = 50 + n.bolt.dy;
      for (let A = Math.floor(Q * J); A <= (Q + 28) * J; A++) for (let ft = Math.floor(V * J); ft <= (V + 13) * J; ft++)
        Mh(xh, (ft + 0.5) / J - V, (A + 0.5) / J - Q) && Y(ft, A, M.sun, n.bolt.o, ss);
    } else {
      const V = G / 18, Q = 7, A = 10 + Math.round(n.bolt.dy * 0.2);
      yh.forEach((ft, ot) => ft.split("").forEach((st, vt) => {
        if (st !== "#") return;
        const ht = Math.floor((Q + vt) * V), kt = Math.floor((A + ot) * V);
        for (let qt = kt; qt < Math.max(kt + 1, Math.floor((A + ot + 1) * V)); qt++) for (let re = ht; re < Math.max(ht + 1, Math.floor((Q + vt + 1) * V)); re++) Y(re, qt, M.sun, n.bolt.o, ss);
      }));
    }
  if (n.cloud.o > 0.01) {
    const V = Math.max(3, n.cloud.w * J), Q = V * 0.6665, A = (n.cloud.x + X) * J - V / 2, ft = (n.cloud.y + N) * J - Q / 2, ot = Pa(M.cloudDay, M.cloudNight, Math.round(n.cloud.f * 4) / 4), st = Pa(ot, "#000000", 0.16);
    for (let vt = Math.max(0, Math.floor(ft) - 1); vt <= Math.min(G - 1, ft + Q + 1); vt++) for (let ht = Math.max(0, Math.floor(A) - 1); ht <= Math.min(G - 1, A + V + 1); ht++) {
      const kt = (ht + 0.5 - A) / V, qt = (vt + 0.5 - ft) / V;
      Ed(kt, qt) && Y(ht, vt, !Ed(kt, qt + 1 / V) || zr((qt - 0.42) / 0.25) * 0.8 > Tn(ht, vt) ? st : ot, n.cloud.o, Np);
    }
  }
  return Sh(it, K, G, G, { oneBit: p, ink: v, paper: w, snowInk: !n.night });
}
function Sh(n, r, d, p, { oneBit: g, ink: v, paper: w, snowInk: T }) {
  const W = new Uint8ClampedArray(d * p * 4), M = _l(v), D = _l(w);
  for (let I = 0; I < p; I++) for (let G = 0; G < d; G++) {
    const J = I * d + G, et = r[J];
    if (n[J] == null) continue;
    let at = _l(n[J]);
    if (g) {
      let X;
      et === Op || et === Ip ? X = !0 : et === po ? X = T : et === cr || et === ss ? X = !1 : X = Math.round((0.2126 * at[0] + 0.7152 * at[1] + 0.0722 * at[2]) / 255 * 4) / 4 <= Tn(G, I), (et === Pp || et === Hp || et === Np || et === ss) && (G > 0 && r[J - 1] !== et || G < d - 1 && r[J + 1] !== et || I > 0 && r[J - d] !== et || I < p - 1 && r[J + d] !== et) && (X = !0), at = X ? M : D;
    }
    W[J * 4] = at[0], W[J * 4 + 1] = at[1], W[J * 4 + 2] = at[2], W[J * 4 + 3] = 255;
  }
  return { w: d, h: p, data: W };
}
const Wo = (n) => n < 0 ? 0 : n > 1 ? 1 : n, $l = (n) => {
  const r = String(n || "#000000").trim().replace("#", ""), d = r.length === 3 ? r.split("").map((p) => p + p).join("") : r;
  return [0, 2, 4].map((p) => parseInt(d.slice(p, p + 2), 16) || 0);
}, _h = (n) => "#" + n.map((r) => Math.round(Math.max(0, Math.min(255, r))).toString(16).padStart(2, "0")).join(""), Bd = {}, Ha = (n, r, d) => {
  const p = n + r + d;
  return Bd[p] || (Bd[p] = _h($l(n).map((g, v) => g + ($l(r)[v] - g) * d)));
}, Rd = {}, os = (n) => Rd[n] || (Rd[n] = $l(n));
function Ch(n) {
  const r = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return r.partly = [Ha(r.clear[0], r.cloudy[0], 0.12), Ha(r.clear[1], r.cloudy[1], 0.12)], r.storm = [Ha(r.rain[0], "#000000", 0.22), Ha(r.rain[1], "#000000", 0.22)], r;
}
const Ah = [
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
], Fo = (n, r) => (Ah[(r & 7) * 8 + (n & 7)] + 0.5) / 64, Fp = 1, qp = 2, Wp = 3, Vp = 4, dr = 5, ls = 6, Jl = 7, jp = 8, Pd = (n, r) => r <= 0.6665 && ((n - 0.5) * (n - 0.5) + (r - 0.2877) * (r - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (r - 0.416) * (r - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (r - 0.458) * (r - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && r >= 0.416), Th = (n, r, d) => {
  let p = !1;
  for (let g = 0, v = n.length - 1; g < n.length; v = g++) {
    const w = n[g], T = n[v];
    w[1] > d != T[1] > d && r < (T[0] - w[0]) * (d - w[1]) / (T[1] - w[1]) + w[0] && (p = !p);
  }
  return p;
};
function Lh(n, r, d, p, { oneBit: g, ink: v, paper: w, snowInk: T }) {
  const W = new Uint8ClampedArray(d * p * 4), M = os(v), D = os(w);
  for (let I = 0; I < p; I++) for (let G = 0; G < d; G++) {
    const J = I * d + G, et = r[J];
    if (n[J] == null) continue;
    let at = os(n[J]);
    if (g) {
      let X;
      et === Vp || et === jp ? X = !0 : et === dr ? X = T : et === Jl || et === ls ? X = !1 : X = Math.round((0.2126 * at[0] + 0.7152 * at[1] + 0.0722 * at[2]) / 255 * 4) / 4 <= Fo(G, I), (et === Fp || et === qp || et === Wp || et === ls) && (G > 0 && r[J - 1] !== et || G < d - 1 && r[J + 1] !== et || I > 0 && r[J - d] !== et || I < p - 1 && r[J + d] !== et) && (X = !0), at = X ? M : D;
    }
    W[J * 4] = at[0], W[J * 4 + 1] = at[1], W[J * 4 + 2] = at[2], W[J * 4 + 3] = 255;
  }
  return { w: d, h: p, data: W };
}
const Dh = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, Eh = (n) => Rp(n, !1).split("/")[0], Cl = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let r = Math.imul(n ^ n >>> 15, 1 | n);
  return r = r + Math.imul(r ^ r >>> 7, 61 | r) ^ r, ((r ^ r >>> 14) >>> 0) / 4294967296;
}, Bh = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", Rh = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", Ph = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", Hh = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", Nh = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], Oh = [".##", "##.", ".#.", "#.."];
function zp(n, { width: r, height: d, colors: p, wave: g = 0.38, soft: v = 6, glow: w = 0.6, columns: T = 6 }) {
  const W = { ...Na, dawn: "#e5a77e", ...p }, M = Ch(W), D = r, I = d, G = D / T, J = G / 2, et = Math.PI * 2, at = n.length ? n : [{ cond: "cloudy", night: !1 }], X = [...Array(T * 2)].map((bt, it) => {
    const K = at[Math.min(it, at.length - 1)], Y = Eh(K.cond), H = it % 2 === 1;
    return { cond: K.cond, k: Y, night: H, sky: M[Y][H ? 1 : 0], cover: Dh[Y] };
  }), N = (bt) => I * (0.5 - g * Math.cos(et * (bt / G - 0.25)));
  return { C: W, S: X, W: D, H: I, cw: G, sw: J, TAU: et, yb: N, side: (bt, it, K) => {
    const Y = (bt ? N(it) - K : K - N(it)) / Math.max(3, v * 1.4) + 0.5;
    return Y <= 0 ? 0 : Y >= 1 ? 1 : Y;
  }, glowAt: (bt) => {
    const it = ((bt / G - 0.25) % 1 + 1) % 1, K = Math.max(0, Math.min(T - 1, Math.round(bt / G - 0.25))), Y = Math.max(0, Math.min(T - 1, Math.round(bt / G - 0.75))), H = 1 - (X[2 * K].cover + X[2 * Y + 1].cover) / 2, xt = Math.sin(Math.PI * Math.min(1, Math.max(0, N(bt) / I)));
    return { c: it < 0.5 ? W.dusk : W.dawn, a: w * (0.2 + 0.8 * H) * xt * xt };
  }, soft: v, tw: G * 0.3, sy: I / 90 };
}
function Gp(n, { clock: r = 0, ambient: d = !1, seed: p = 1 }) {
  const { S: g, sw: v, side: w, C: T, TAU: W, sy: M, H: D } = n, I = r, G = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  g.forEach((at, X) => {
    const N = Cl(p * 977 + X * 131 + 7), nt = (X + 0.5) * v, dt = at.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[at.k] : 0;
    for (let bt = 0; bt < dt; bt++) {
      const it = nt + (N() - 0.5) * v * 1.6, K = (6 + N() * 76) * M, Y = N() < 0.35, H = 1.8 + N() * 1.6, xt = w(!0, it, K) * (Y ? 0.95 : 0.7) * (d ? 0.6 + 0.4 * Math.sin(W * I / 2600 + bt * 1.7 + X) : 1);
      xt >= 0.03 && G.stars.push({ x: it, y: K, big: Y, size: H, o: xt });
    }
    if (!at.night && (at.k === "clear" || at.k === "partly")) {
      const bt = nt + (N() - 0.5) * v * 0.3, it = Math.min(15, v * 0.29);
      G.suns.push({ x: bt, y: 32 * M, rad: it, halo: it * 2.8 * (d ? 1 + 0.07 * Math.sin(W * I / 3600 + X) : 1) });
    }
    if (at.night && (at.k === "clear" || at.k === "partly")) {
      const bt = Math.min(0.78, v * 0.55 / 34), it = nt - 23 * bt + (N() - 0.5) * v * 0.2;
      G.moons.push({ x: it + 23 * bt, y: (4 + (d ? 0.8 * Math.sin(W * I / 5200 + X) : 0)) * M + 23 * bt, d: 46 * bt });
    }
  });
  const J = Math.max(56, Math.min(100, D * 0.45)), et = Math.max(1, v / (J * 2.4));
  return g.forEach((at, X) => {
    const N = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[at.k];
    if (!N) return;
    const nt = at.k === "partly" ? 1 : Math.round(N * et), dt = Cl(p * 577 + X * 71 + 3), bt = (X + 0.5) * v, it = at.k === "rain" || at.k === "storm" || at.night ? T.cloudNight : T.cloudDay, K = at.night ? 0.82 : at.k === "storm" ? 0.75 : 1;
    for (let Y = 0; Y < nt; Y++) {
      const H = J / 46 * (at.k === "partly" ? 1 : 0.8 + dt() * 0.4), xt = bt + (at.k === "partly" ? v * 0.12 : ((Y + 0.5) / nt - 0.5) * v * 0.95 + (dt() - 0.5) * v * 0.5 / nt), Rt = (at.k === "partly" ? 40 : 6 + dt() * 26) * M, ct = d ? 2.5 * Math.sin(W * I / 9e3 + X * 1.3 + Y * 2.1) : 0, U = d ? 0.9 * Math.sin(W * I / 6100 + X + Y) : 0;
      G.clouds.push({ x: xt - 23 * H + ct, y: Rt - 15.33 * H + U, w: 46 * H, h: 30.66 * H, fill: it, o: K * (nt > 1 && Y === 0 ? 0.85 : 1) });
    }
  }), g.forEach((at, X) => {
    const N = Cl(p * 313 + X * 29 + 11), nt = (X + 0.5) * v, dt = at.cond === "pouring" ? 16 : at.cond === "rainy" || at.cond === "hail" ? 9 : at.cond === "lightning-rainy" ? 12 : at.cond === "snowy-rainy" ? 5 : 0;
    for (let it = 0; it < dt; it++) {
      let K = nt + (N() - 0.5) * v * 1.05, Y = 44 + N() * 36, H = 1;
      if (d) {
        const Rt = ((Y - 44 + I * 0.04) % 36 + 36) % 36;
        K -= 0.21 * (Rt - (Y - 44)), Y = 44 + Rt, H = Math.min(1, Rt / 6, (36 - Rt) / 6);
      }
      Y *= M;
      const xt = w(at.night, K, Y) * H;
      xt >= 0.05 && G.drops.push({ x: K, y: Y, o: xt });
    }
    const bt = at.cond === "snowy" ? 11 : at.cond === "snowy-rainy" ? 6 : 0;
    for (let it = 0; it < bt; it++) {
      let K = nt + (N() - 0.5) * v * 1.05, Y = 40 + N() * 44, H = 1;
      if (d) {
        const Rt = ((Y - 40 + I * 9e-3) % 44 + 44) % 44;
        Y = 40 + Rt, K += 1.6 * Math.sin(W * I / 2800 + it * 1.9 + X), H = Math.min(1, Rt / 6, (44 - Rt) / 6);
      }
      Y *= M;
      const xt = w(at.night, K, Y) * H;
      xt >= 0.05 && G.flakes.push({ x: K, y: Y, o: xt });
    }
    if (at.k === "fog") {
      const it = at.night ? "#c8ccd6" : "#ffffff", K = at.night ? 0.28 : 0.62, Y = d ? 4 * Math.sin(W * I / 8e3 + X) : 0;
      for (let H = 0; H < 4; H++) G.fogs.push({ x: nt - v * 0.75 + H % 2 * v * 0.18 + (H % 2 ? Y : -Y), y: (30 + H * 13) * M, w: v * 1.3, c: it, a: K });
    }
    if (at.k === "storm") {
      const it = (I / 3400 + X * 0.37) % 1;
      G.bolts.push({ x: nt + (N() - 0.5) * v * 0.3 - 5, y: 36 * M, o: d && !(it < 0.05 || it > 0.09 && it < 0.12) ? 0.8 : 1 });
    }
  }), G;
}
function Ih(n, r, d, p, g, v, w, T) {
  const { S: W, C: M, cw: D, yb: I, glowAt: G, soft: J, tw: et, sy: at } = n, X = new Array(d * p), N = new Uint8Array(d * p), nt = new Uint8Array(d * p), dt = (V, Q, A, ft, ot) => {
    A == null || V < 0 || Q < 0 || V >= d || Q >= p || (ft >= 1 || ft > Fo(V + 5, Q + 3)) && (X[Q * d + V] = A, N[Q * d + V] = ot);
  }, bt = (V, Q, A, ft) => {
    for (let ot = Math.max(0, Math.floor(Q - A) - 1); ot <= Math.min(p - 1, Q + A + 1); ot++) for (let st = Math.max(0, Math.floor(V - A) - 1); st <= Math.min(d - 1, V + A + 1); st++) ft(st, ot, st + 0.5 - V, ot + 0.5 - Q);
  }, it = (V, Q, A) => {
    for (let ot = 0; ot < V.length - 1; ot++) {
      const st = (ot + Q) * D;
      if (A < st - et / 2) return [V[ot], V[ot], 0];
      if (A <= st + et / 2) return [V[ot], V[ot + 1], (A - st + et / 2) / et];
    }
    const ft = V[V.length - 1];
    return [ft, ft, 0];
  }, K = W.filter((V) => !V.night).map((V) => V.sky), Y = W.filter((V) => V.night).map((V) => V.sky), H = J / v, xt = 16 * at / v;
  for (let V = 0; V < d; V++) {
    const Q = (V + 0.5) * g, A = I(Q) / v, ft = it(K, 0.75, Q), ot = it(Y, 1.25, Q), st = G(Q);
    for (let vt = 0; vt < p; vt++) {
      const ht = Fo(V, vt), kt = vt + 0.5 - A, qt = (H > 0.01 ? Wo(0.5 + kt / H) : kt > 0 ? 1 : 0) > ht;
      let re = qt ? ft[2] > ht ? ft[1] : ft[0] : ot[2] > ht ? ot[1] : ot[0];
      (qt ? Wo(((vt + 0.5) / p - 0.45) / 0.55) * 0.7 : Wo(1 - (vt + 0.5) / (p * 0.55)) * 0.7) > Fo(V + 2, vt + 5) && (re = qt ? Ha(re, "#ffffff", 0.18) : Ha(re, "#000000", 0.25)), qt && kt >= 0 && kt < xt && st.a * 1.3 * (1 - kt / xt) > Fo(V + 6, vt + 1) && (re = st.c), X[vt * d + V] = re, nt[vt * d + V] = qt ? 0 : 1;
    }
  }
  const Rt = Ha(M.sun, "#ffffff", 0.55), ct = Ha(M.moon, "#ffffff", 0.6);
  r.stars.forEach((V) => {
    const Q = Math.floor(V.x / g), A = Math.floor(V.y / v);
    if (Q < 0 || A < 0 || Q >= d || A >= p || !nt[A * d + Q] || V.o < 0.15) return;
    const ft = V.o > 0.45 ? M.star : Ha(M.star, X[A * d + Q], 0.5), ot = V.big && V.o > 0.6 ? Math.floor(V.size / g) : 0;
    dt(Q, A, ft, 1, Jl);
    for (let st = 1; st <= ot; st++) [[Q - st, A], [Q + st, A], [Q, A - st], [Q, A + st]].forEach((vt) => {
      vt[0] >= 0 && vt[1] >= 0 && vt[0] < d && vt[1] < p && nt[vt[1] * d + vt[0]] && dt(vt[0], vt[1], ft, 1, Jl);
    });
  }), r.suns.forEach((V) => {
    const Q = Math.max(1.5, V.rad / g), A = V.x / g, ft = V.y / v, ot = V.halo / g * 0.85;
    if (bt(A, ft, ot, (st, vt, ht, kt) => {
      const qt = Math.sqrt(ht * ht + kt * kt);
      qt > Q && qt < ot && !nt[vt * d + st] && dt(st, vt, Rt, 0.3 * (1 - (qt - Q) / (ot - Q)), 0);
    }), T) {
      const st = Math.floor(w / 500) % 2, vt = Math.max(1, Q * 0.3);
      for (let ht = 0; ht < 8; ht++) if (ht % 2 === st) for (let kt = Q + 1.2; kt < Q + 1.2 + vt; kt += 0.7) dt(Math.floor(A + Math.cos(ht * Math.PI / 4) * kt), Math.floor(ft + Math.sin(ht * Math.PI / 4) * kt), M.sun, 1, jp);
    }
    bt(A, ft, Q, (st, vt, ht, kt) => {
      ht * ht + kt * kt <= Q * Q && dt(st, vt, Wo(((kt / Q + 1) / 2 - 0.6) / 0.4) > Fo(st, vt) ? M.sunEdge : M.sun, 1, Fp);
    });
  }), r.moons.forEach((V) => {
    const Q = Math.max(1.5, V.d * 0.37 / g), A = V.x / g, ft = V.y / v, ot = A + 0.547 * Q, st = ft - 0.503 * Q, vt = 0.82 * Q;
    bt(A, ft, Q, (ht, kt, qt, re) => {
      if (qt * qt + re * re > Q * Q) return;
      const wa = ht + 0.5 - ot, ia = kt + 0.5 - st;
      wa * wa + ia * ia > vt * vt && dt(ht, kt, Wo((re + Q) / (2 * Q) * 1.1 - 0.1) > Fo(ht, kt) ? M.moon : ct, 1, qp);
    });
  }), r.clouds.forEach((V) => {
    const Q = Math.max(3, V.w / g), A = Q * 0.6665, ft = V.x / g, ot = V.y / v, st = Ha(V.fill, "#000000", 0.16);
    for (let vt = Math.max(0, Math.floor(ot) - 1); vt <= Math.min(p - 1, ot + A + 1); vt++) for (let ht = Math.max(0, Math.floor(ft) - 1); ht <= Math.min(d - 1, ft + Q + 1); ht++) {
      const kt = (ht + 0.5 - ft) / Q, qt = (vt + 0.5 - ot) / Q;
      Pd(kt, qt) && dt(ht, vt, !Pd(kt, qt + 1 / Q) || Wo((qt - 0.42) / 0.25) * 0.8 > Fo(ht, vt) ? st : V.fill, V.o, Wp);
    }
  }), r.fogs.forEach((V) => {
    const Q = Math.floor(V.y / v), A = Math.max(Q, Math.floor((V.y + 6 * at) / v) - 1), ft = Math.floor(V.x / g), ot = Math.floor((V.x + V.w) / g);
    for (let st = Q; st <= A; st++) for (let vt = ft; vt <= ot; vt++) {
      const ht = (vt - ft) / Math.max(1, ot - ft);
      dt(vt, st, V.c, V.a * (ht < 0.25 ? ht / 0.25 : ht > 0.75 ? (1 - ht) / 0.25 : 1), 0);
    }
  });
  const U = Math.max(2, Math.round(9 / v));
  r.drops.forEach((V) => {
    const Q = V.x / g, A = Math.floor(V.y / v);
    for (let ft = 0; ft < U; ft++) dt(Math.floor(Q - 0.208 * ft * v / g), A + ft, M.rain, V.o, Vp);
  });
  const Ft = Math.max(0, Math.round(4.4 / g / 2.6));
  return r.flakes.forEach((V) => {
    const Q = Math.floor(V.x / g), A = Math.floor(V.y / v);
    dt(Q, A, M.snow, V.o, dr);
    for (let ft = 1; ft <= Ft; ft++)
      dt(Q - ft, A, M.snow, V.o, dr), dt(Q + ft, A, M.snow, V.o, dr), dt(Q, A - ft, M.snow, V.o, dr), dt(Q, A + ft, M.snow, V.o, dr);
  }), r.bolts.forEach((V) => {
    if (g <= 3.5)
      for (let Q = Math.floor(V.y / v); Q <= (V.y + 24) / v; Q++) for (let A = Math.floor(V.x / g); A <= (V.x + 11) / g; A++)
        Th(Nh, (A + 0.5) * g - V.x, (Q + 0.5) * v - V.y) && dt(A, Q, M.sun, 1, ls);
    else {
      const Q = Math.round(V.x / g), A = Math.round(V.y / v);
      Oh.forEach((ft, ot) => ft.split("").forEach((st, vt) => {
        st === "#" && dt(Q + vt, A + ot, M.sun, 1, ls);
      }));
    }
  }), { col: X, ids: N };
}
function Fh(n, r) {
  const d = r.px, p = Math.max(6, Math.round(r.width / d)), g = Math.max(6, Math.round(r.height / d)), v = r.width / p, w = r.height / g, T = r.ambient ? Math.floor((r.clock || 0) / 100) * 100 : 0, W = (J) => {
    const et = zp(J, r);
    return Ih(et, Gp(et, { clock: T, ambient: r.ambient, seed: r.seed }), p, g, v, w, T, r.ambient);
  }, M = W(n), D = r.reveal == null ? 1 : Wo(r.reveal);
  let I = M.col, G = M.ids;
  if (D < 1) {
    const J = r.prev ? W(r.prev) : null, et = D * (p + 12);
    I = new Array(p * g), G = new Uint8Array(p * g);
    for (let at = 0; at < p * g; at++) {
      const X = at % p, N = at / p | 0;
      (r.reduce ? D : Wo((et - X) / 12)) > Fo(X, N) ? (I[at] = M.col[at], G[at] = M.ids[at]) : J ? (I[at] = J.col[at], G[at] = J.ids[at]) : (I[at] = null, G[at] = 255);
    }
  }
  return Lh(I, G, p, g, { oneBit: r.oneBit, ink: r.ink || "#26221e", paper: r.paper || "#fbf9f6", snowInk: !1 });
}
function qh(n, r, d) {
  const p = d.width, g = d.height, v = d.reveal == null ? 1 : Wo(d.reveal), w = (G, J) => {
    const et = zp(J, d);
    Wh(G, et, Gp(et, d));
  };
  if (n.clearRect(0, 0, p, g), v >= 1) {
    w(n, r);
    return;
  }
  if (d.prev && w(n, d.prev), d.reduce) {
    n.save(), n.globalAlpha = v, w(n, r), n.restore();
    return;
  }
  const T = n.canvas, W = T.__wxOff || (T.__wxOff = document.createElement("canvas"));
  (W.width !== T.width || W.height !== T.height) && (W.width = T.width, W.height = T.height);
  const M = W.getContext("2d");
  M.setTransform(n.getTransform()), M.clearRect(0, 0, p, g), w(M, r);
  const D = v * (p + 64) - 64, I = M.createLinearGradient(D, 0, D + 64, 0);
  I.addColorStop(0, "rgba(0,0,0,1)"), I.addColorStop(1, "rgba(0,0,0,0)"), M.globalCompositeOperation = "destination-in", M.fillStyle = I, M.fillRect(0, 0, p, g), M.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(W, 0, 0), n.restore();
}
function Wh(n, r, d) {
  const { W: p, H: g, S: v, C: w, cw: T, yb: W, glowAt: M, soft: D, tw: I, sy: G } = r, J = n.getTransform().a || 1, et = (U) => {
    n.shadowColor = U ? "rgba(28,18,8,.22)" : "transparent", n.shadowBlur = U ? 4 * J : 0, n.shadowOffsetY = U ? 1.5 * J : 0;
  }, at = (U, Ft) => {
    const V = os(U);
    return "rgba(" + V[0] + "," + V[1] + "," + V[2] + "," + Math.max(0, Math.min(1, Ft)).toFixed(3) + ")";
  }, X = (U, Ft) => {
    const V = n.createLinearGradient(0, 0, p, 0);
    V.addColorStop(0, U[0]);
    for (let Q = 0; Q < U.length - 1; Q++) {
      const A = (Q + Ft) * T, ft = (A - I / 2) / p, ot = (A + I / 2) / p;
      ft > 0 && ft < 1 && V.addColorStop(ft, U[Q]), ot > 0 && ot < 1 && V.addColorStop(ot, U[Q + 1]);
    }
    return V.addColorStop(1, U[U.length - 1]), V;
  }, N = Math.max(24, Math.ceil(p / 4)), nt = (U, Ft) => {
    n.beginPath();
    for (let V = 0; V <= N; V++) {
      const Q = p * V / N, A = U == null ? 0 : W(Q) + U;
      V ? n.lineTo(Q, A) : n.moveTo(Q, A);
    }
    for (let V = N; V >= 0; V--) {
      const Q = p * V / N;
      n.lineTo(Q, W(Q) + Ft);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = X(v.filter((U) => !U.night).map((U) => U.sky), 0.75), n.fillRect(0, 0, p, g);
  const dt = n.createLinearGradient(0, 0, p, 0);
  for (let U = 0; U <= 64; U++) {
    const Ft = M(p * U / 64);
    dt.addColorStop(U / 64, at(Ft.c, Math.min(1, Ft.a)));
  }
  n.fillStyle = dt;
  for (let U = 0; U < 8; U++)
    n.globalAlpha = 1 - U / 8, nt(U * 2 * G, (U + 1) * 2 * G);
  n.fillStyle = X(v.filter((U) => U.night).map((U) => U.sky), 1.25);
  const bt = Math.max(0.5, D), it = 6;
  n.globalAlpha = 1, nt(null, -bt);
  for (let U = 0; U < it; U++)
    n.globalAlpha = 1 - (U + 0.5) / it, nt(-bt + 2 * bt * U / it, -bt + 2 * bt * (U + 1) / it);
  n.globalAlpha = 1;
  const K = new Path2D(Ph), Y = new Path2D(Rh), H = new Path2D(Bh), xt = new Path2D(Hh);
  n.fillStyle = w.star, d.stars.forEach((U) => {
    n.globalAlpha = U.o, U.big ? (n.save(), n.translate(U.x, U.y), n.scale(U.size, U.size), n.fill(K), n.restore()) : (n.beginPath(), n.arc(U.x, U.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const Rt = Ha(w.sun, "#ffffff", 0.55);
  d.suns.forEach((U) => {
    const Ft = n.createRadialGradient(U.x, U.y, 0, U.x, U.y, U.halo);
    Ft.addColorStop(0, at(Rt, 0.42)), Ft.addColorStop(0.7, at(Rt, 0)), n.fillStyle = Ft, n.beginPath(), n.arc(U.x, U.y, U.halo, 0, Math.PI * 2), n.fill();
    const V = n.createLinearGradient(0, U.y - U.rad, 0, U.y + U.rad);
    V.addColorStop(0.6, w.sun), V.addColorStop(1, w.sunEdge), n.fillStyle = V, et(!0), n.beginPath(), n.arc(U.x, U.y, U.rad, 0, Math.PI * 2), n.fill(), et(!1);
  });
  const ct = Ha(w.moon, "#ffffff", 0.6);
  d.moons.forEach((U) => {
    n.save(), n.translate(U.x - U.d / 2, U.y - U.d / 2), n.scale(U.d / 46, U.d / 46);
    const Ft = n.createLinearGradient(0, 6, 0, 40);
    Ft.addColorStop(0, ct), Ft.addColorStop(1, w.moon), n.fillStyle = Ft, et(!0), n.fill(Y), et(!1), n.restore();
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
const Vh = (n) => n === "sunny" ? "clear" : n === "clear-night" ? "night" : n === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(n) ? "rain" : ["snowy", "snowy-rainy"].includes(n) ? "snow" : "cloudy", rr = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, Gi = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, Al = (n, r) => '<path class="' + r + '" d="' + n + '"/>', jh = (n, r) => ' style="animation-delay:-' + Math.round(n * 137 % r) + 'ms"', Ba = (n, r, d, p) => {
  const g = d * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (p < 1 ? ' opacity="' + p + '"' : "") + jh(n, 2400) + ' d="M' + n + " " + (r - d) + "L" + (n + g) + " " + (r - g) + "L" + (n + d) + " " + r + "L" + (n + g) + " " + (r + g) + "L" + n + " " + (r + d) + "L" + (n - g) + " " + (r + g) + "L" + (n - d) + " " + r + "L" + (n - g) + " " + (r - g) + 'Z"/>';
}, Hd = ([n, r, d], p) => '<path class="wbMoonPath" d="' + n + '" fill="url(#' + p + ')"/><defs><linearGradient id="' + p + '" x1="0" y1="' + r + '" x2="0" y2="' + d + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', zh = (n, r) => r ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', Gh = (n) => (n ? ["29.35", "43.04", "56.74"].map((r, d) => '<g class="wbDrop" style="animation-delay:-' + d * 317 + 'ms"><rect class="wbAccent" x="' + r + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + r + ' 60.65)"/></g>') : [19, 26, 33].map((r, d) => '<g class="wbDrop" style="animation-delay:-' + d * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + r + ' 38)"/></g>')).join(""), Uh = (n) => (n ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([r, d], p) => '<circle class="wbFlake" style="animation-delay:-' + p * 640 + 'ms" cx="' + r + '" cy="' + d + '" r="' + (n ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function Yh(n, r, d, p) {
  const g = (v) => '<g filter="url(#' + p + '-sh)">' + v + "</g>";
  return n === "clear" ? r ? g(Hd(d ? Gi.l : Gi.s, p)) + (d ? Ba(70, 20, 5.83, 1) + Ba(78.33, 41.67, 3.75, 0.8) + Ba(60, 71.67, 3.33, 0.6) : Ba(42, 12, 3.5, 1) + Ba(47, 25, 2.25, 0.8) + Ba(36, 43, 2, 0.6)) : g(zh(p, d)) : n === "partly" ? g(r ? Hd(d ? Gi.lp : Gi.sp, p) : d ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + g(Al(d ? rr.lp : rr.sp, r ? "wbCloudLight" : "wbBright")) + (r ? d ? Ba(73.33, 16.67, 4.17, 0.9) : Ba(44, 10, 2.5, 0.9) : "") : n === "cloudy" ? g(Al(d ? rr.lc : rr.s, r ? "wbCloudLight" : "wbBright")) + (r ? d ? Ba(15, 15, 3.75, 0.8) + Ba(76.67, 13.33, 2.92, 0.6) : Ba(9, 9, 2.25, 0.8) + Ba(46, 8, 1.75, 0.6) : "") : g(Al(d ? rr.lr : rr.s, "wbCloudLight")) + (n === "rain" ? Gh(d) : Uh(d));
}
const Zh = (n, r) => '<defs><filter id="' + n + '-sh" x="-25%" y="-25%" width="150%" height="160%"><feDropShadow dx="0" dy="' + (r ? 1.6 : 1) + '" stdDeviation="' + (r ? 1.8 : 1.1) + '" flood-color="#1c1208" flood-opacity=".22"/></filter></defs>';
function Kh(n, r, d, p) {
  let g = Vh(n);
  const v = g === "night" || !!d;
  g === "night" && (g = "clear");
  const w = r ? 90 : 54;
  return { k: g, night: v, svg: '<svg viewBox="0 0 ' + w + " " + w + '">' + Zh(p, r) + Yh(g, v, r, p) + "</svg>" };
}
const Xh = [
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
], Ui = (n, r) => (Xh[r % 8 * 8 + n % 8] + 0.5) / 64, Za = (n) => [parseInt(n.slice(1, 3), 16), parseInt(n.slice(3, 5), 16), parseInt(n.slice(5, 7), 16)], $e = (n, r, d) => [Math.round(n[0] + (r[0] - n[0]) * d), Math.round(n[1] + (r[1] - n[1]) * d), Math.round(n[2] + (r[2] - n[2]) * d)], Gr = (n) => n < 0 ? 0 : n > 1 ? 1 : n, Nd = (n, r) => {
  let d = n * 374761393 + r * 668265263 ^ 1540483477;
  return d = Math.imul(d ^ d >>> 13, 1274126177), ((d ^ d >>> 16) >>> 0) / 4294967296;
}, Dn = [255, 255, 255], na = Za("#26221e"), Od = Za("#0288d1"), $h = Za("#01579b"), Tl = Za(Na.cloudDay), Ll = Za(Na.cloudNight), Yi = Za(Na.dusk), Dl = Za(Na.sunEdge), Jh = Za(Na.sun), Qh = 10, Id = 0.3, Vo = 56, Up = 21;
function tm(n) {
  const r = Array.from({ length: Up }, () => new Array(Vo).fill(void 0)), d = (w, T, W) => {
    r[T][w] = W;
  }, p = $e(Yi, na, 0.35), g = $e(na, Dn, 0.22);
  for (let w = 0; w <= 6; w++) {
    const T = w < 2 ? Vo - 2 : Vo - 1;
    for (let W = 6 - w; W <= T; W++) d(W, w, w < 2 ? p : w === 6 ? g : na);
  }
  const v = [Yi, Dl, Ll, Za(Na.skyRainDay), $e(Yi, na, 0.2), $e(n, na, 0.35)];
  [2, 3, 2, 3, 3].forEach((w, T) => {
    const W = 9 + T * 6;
    for (let M = 0; M < w; M++) {
      const D = v[(T * 2 + M * 3) % v.length];
      for (let I = W; I < W + 5; I++)
        d(I, 7 + M * 2, $e(D, na, 0.12)), d(I, 8 + M * 2, M === w - 1 ? $e(D, Dn, 0.3) : D);
      d(W + 5, 7 + M * 2, na), d(W + 5, 8 + M * 2, na);
    }
  });
  for (let w = 7; w <= 12; w++) d(5, w, na);
  d(5, 13, Dl);
  for (let w = 7; w <= 14; w++) for (let T = 42; T <= 51; T++) d(T, w, T === 51 ? Ll : Tl);
  for (let w = 43; w <= 50; w += 2)
    d(w, 12, na), d(w, 9, $e(na, Tl, 0.4));
  for (let w = 40; w <= 53; w++) d(w, 14, w === 40 || w === 53 ? Ll : Tl);
  for (let w = 15; w <= 18; w++) for (let T = 46; T <= 49; T++) d(T, w, w === 18 ? na : w === 16 ? Dl : Yi);
  for (let w = 15; w <= 19; w++) d(44, w, na);
  return d(44, 20, Jh), r;
}
function em(n, r, d, p) {
  const g = Math.max(1, Math.round(n)), v = Math.max(1, Math.round(r)), w = new Uint8ClampedArray(g * v * 4), T = Za(p.skyClearDay), W = Za(p.skyFogDay), M = tm(T), D = Math.round(v * 0.55), I = Gr(1 - Math.log(d / Id) / Math.log(Qh / Id)), G = $e(T, W, I), J = (N) => Gr((N - 0.1) / 0.9), et = Gr((1 - Math.exp(-2 / d) - 0.2) / 0.8), at = Math.round(g / 2 - Vo / 2), X = D + 3;
  for (let N = 0; N < v; N++) {
    const nt = X - 1 - N, dt = N - X;
    for (let bt = 0; bt < g; bt++) {
      const it = bt - at;
      let K, Y;
      const H = nt >= 0 && nt < Up && it >= 0 && it < Vo ? M[nt][it] : void 0;
      if (H)
        K = H, Y = et;
      else if (nt >= 0 && nt <= 1 && it >= 4 - nt && it <= 5 - nt)
        K = $e(Dn, Od, 0.15), Y = et;
      else if (N < D) {
        const ct = Gr(((N + 0.5) / D - 0.15) / 0.85) * 3, U = Math.min(3, Math.floor(ct + Ui(bt + 2, N + 5)));
        K = $e(G, Dn, U * 0.1), Y = I * 0.95;
      } else {
        const ct = (N - D + 0.5) / (v - D), U = Math.min(1.5, 6e-3 / (ct * ct)), Ft = Gr(ct * 1.4) * 3, V = Math.min(3, Math.floor(Ft + Ui(bt + 1, N + 6)));
        K = $e(Od, $h, V / 3);
        const Q = 1 + Math.round(ct * 7), A = Math.floor(bt / (Q * 3)), ft = 0.06 + 0.16 * ct, ot = bt % (Q * 3) < Q;
        ot && Nd(A, N) < ft ? K = $e(K, Dn, 0.18 + 0.1 * (1 - ct)) : ot && ct > 0.5 && Nd(A, N - 1) < ft && (K = $e(K, na, 0.12)), Y = J(1 - Math.exp(-U / d)), dt === 0 && it >= 3 && it <= 8 ? (K = $e(K, Dn, it < 6 ? 0.8 : 0.45), Y = et) : dt >= 0 && dt <= 2 && it >= Vo && it < Vo + 40 ? ((1 - (it - Vo) / 40) * (dt === 1 ? 0.9 : 0.5) > Ui(bt, N + 3) && (K = $e(K, Dn, 0.5)), Y = et) : dt === 0 && it >= 6 && it < Vo && (K = $e(K, na, it % 2 === 0 ? 0.35 : 0.2), Y = et);
      }
      const xt = Y > Ui(bt, N) ? W : K, Rt = (N * g + bt) * 4;
      w[Rt] = xt[0], w[Rt + 1] = xt[1], w[Rt + 2] = xt[2], w[Rt + 3] = 255;
    }
  }
  return { data: w, w: g, h: v };
}
const am = {
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
}, om = 1.6;
function nm(n, r) {
  const d = n ? am[String(n).toUpperCase()] : void 0;
  if (!d || !(r > 0)) return;
  const p = (v) => Math.abs(Math.log(v[2] / r)), g = d.reduce((v, w) => p(w) < p(v) ? w : v);
  return p(g) <= Math.log(om) ? { from: g[0], to: g[1], km: g[2] } : void 0;
}
const rm = (n, r) => r === "mi" ? n * 1.609344 : r === "m" ? n / 1e3 : r === "ft" ? n * 3048e-7 : r === "yd" ? n * 9144e-7 : n, im = (n) => n < 1 ? "very_poor" : n < 4 ? "poor" : n < 10 ? "moderate" : n < 20 ? "good" : n < 40 ? "very_good" : "excellent", De = {
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
}, Ee = { standard: "cubic-bezier(.2,0,0,1)", land: "cubic-bezier(.34,1.46,.64,1)", spring: "cubic-bezier(.2,1.2,.4,1)", soft: "cubic-bezier(.4,0,.2,1)", exit: "cubic-bezier(.4,0,1,1)" }, Ge = () => {
  var n;
  return !!((n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches);
};
function sm() {
  const { pivot: n, slider: r, iconbtn: d, warp: p, outline: g } = De;
  return [
    ["--pv-persp", n.persp + "px"],
    ["--pv-shine", n.shine / 100],
    ["--pv-size", n.size + "%"],
    ["--pv-ret", n.ret + "ms"],
    ["--pv-ease", Ee[n.ease]],
    ["--ab-blur", r.glow + "px"],
    ["--ab-spread", r.spread + "px"],
    ["--ab-str", r.strength + "%"],
    ["--ab-blur2", r.glow + r.hold + "px"],
    ["--ab-spread2", r.spread + r.hold / 4 + "px"],
    ["--ab-str2", r.holdStrength + "%"],
    ["--ab-grow", "scaleY(" + (1 + (r.grow / 100 - 1) * 3) + ")"],
    ["--ab-in", r.ein + "ms"],
    ["--ab-out", r.eout + "ms"],
    ["--ab-ease", Ee[r.ease]],
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
  ].map(([v, w]) => v + ":" + w).join(";");
}
const El = ":is(button.primary,button.pill,.hcBtn,.wbRangeBtn,.activityRow.tap,.hcRow,a.hcRow)", lm = "#homeView :is(.tfAreaPanel,.tfRoomTile.tfBoardItem)", cm = 300, ns = (n) => Math.min(1, cm / Math.max(1, n)), Bl = (n, r) => 1 + (r / 100 - 1) * ns(n.offsetWidth);
function dm(n, r) {
  r.style.cssText += ";" + sm();
  let d = null;
  const p = (D) => {
    D.classList.remove("mvMoving", "mvLit"), D.style.setProperty("--rx", "0deg"), D.style.setProperty("--ry", "0deg"), D.style.setProperty("--sc", 1), D._down = !1;
  };
  n.addEventListener("pointermove", (D) => {
    var N, nt;
    const I = D.pointerType === "touch" || Ge() ? null : (nt = (N = D.target).closest) == null ? void 0 : nt.call(N, El);
    if (d && d !== I && p(d), d = I, !I || I.disabled) return;
    const G = De.pivot, J = I.getBoundingClientRect(), et = (D.clientX - J.left) / J.width, at = (D.clientY - J.top) / J.height, X = 1;
    I.classList.add("mvPv", "mvMoving", "mvLit"), I.style.setProperty("--pv-persp", G.persp / ns(Math.max(I.offsetWidth, I.offsetHeight)) + "px"), I.style.setProperty("--ry", (X * (et - 0.5) * 2 * G.tilt * ns(I.offsetWidth)).toFixed(3) + "deg"), I.style.setProperty("--rx", (X * -(at - 0.5) * 2 * G.tilt * ns(I.offsetHeight)).toFixed(3) + "deg"), I.style.setProperty("--mx", (et * 100).toFixed(1) + "%"), I.style.setProperty("--my", (at * 100).toFixed(1) + "%"), I._down || I.style.setProperty("--sc", Bl(I, G.lift));
  }, { passive: !0 }), n.addEventListener("pointerout", (D) => {
    d && !d.contains(D.relatedTarget) && (p(d), d = null);
  }), n.addEventListener("pointerdown", (D) => {
    var G, J;
    const I = Ge() ? null : (J = (G = D.target).closest) == null ? void 0 : J.call(G, El);
    I && (I._down = !0, I.classList.add("mvPv"), I.classList.remove("mvMoving"), I.style.setProperty("--sc", Bl(I, De.pivot.press)));
  }), n.addEventListener("pointerup", (D) => {
    var G, J;
    const I = (J = (G = D.target).closest) == null ? void 0 : J.call(G, El);
    I && (I._down = !1, I.style.setProperty("--sc", D.pointerType === "touch" ? 1 : Bl(I, De.pivot.lift)));
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
    I && pm(I);
  });
  let w = null;
  const T = (D, I, G) => {
    D.querySelector(":scope>.mvEdge") || D.insertAdjacentHTML("afterbegin", '<span class="mvEdgeFill" aria-hidden="true"></span><span class="mvEdge" aria-hidden="true"><i></i></span>');
    const J = D.getBoundingClientRect(), et = J.width / 2, at = J.height / 2, X = I.clientX - J.left - et, N = I.clientY - J.top - at, nt = X ? et / Math.abs(X) : 1 / 0, dt = N ? at / Math.abs(N) : 1 / 0, bt = Math.min(Math.max(1 / Math.min(nt, dt), 0), 1);
    let it = Math.atan2(N, X) * 180 / Math.PI + 90;
    it < 0 && (it += 360);
    const K = G ? 100 : bt * 100;
    D.style.setProperty("--edge-proximity", K.toFixed(3)), D.style.setProperty("--cursor-angle", it.toFixed(3) + "deg"), D.classList.toggle("mvLitEdge", G || K >= De.outline.lightAt);
  }, W = (D) => {
    D.classList.remove("mvLitEdge"), D.style.setProperty("--edge-proximity", "0"), D._down = !1;
  }, M = (D) => {
    var G;
    const I = (G = D.closest) == null ? void 0 : G.call(D, lm);
    return I && !r.classList.contains("tfEditing") ? I : null;
  };
  n.addEventListener("pointermove", (D) => {
    if (D.pointerType === "touch") return;
    const I = M(D.target);
    w && w !== I && W(w), w = I, I && !I._down && T(I, D, !1);
  }, { passive: !0 }), n.addEventListener("pointerout", (D) => {
    w && !w.contains(D.relatedTarget) && (W(w), w = null);
  }), n.addEventListener("pointerdown", (D) => {
    const I = M(D.target);
    I && De.outline.press && (I._down = !0, T(I, D, !0));
  }), n.addEventListener("pointerup", (D) => {
    const I = M(D.target);
    I && (I._down = !1, D.pointerType === "touch" ? W(I) : T(I, D, !1));
  }), new MutationObserver((D) => {
    var I;
    for (const G of D) {
      const J = G.target;
      if (G.type === "attributes") {
        (I = J.classList) != null && I.contains("tfMoreBackdrop") && !J.hidden && G.oldValue !== null && Fd(J);
        continue;
      }
      G.addedNodes.forEach((et) => {
        et.nodeType === 1 && et.classList.contains("tfMoreBackdrop") && !et.hidden && Fd(et);
      });
    }
  }).observe(r, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["hidden"], attributeOldValue: !0 });
}
const Yp = (n) => n.closest("[data-k],.tfMore,.tfMorePair") || n.getRootNode();
function Zp(n, r) {
  const d = [];
  for (let p = n; p && p !== r && p.parentNode; p = p.parentNode) d.unshift([...p.parentNode.children].indexOf(p));
  return d;
}
const Kp = (n, r) => r.reduce((d, p) => d == null ? void 0 : d.children[p], n);
function pm(n) {
  var J;
  if (Ge() || n._warp) return;
  const r = De.warp, d = r.amount / 100, p = n.firstElementChild;
  if (!p) return;
  const g = { squash: { scale: 1 + 0.35 * d + " " + (1 - 0.55 * d) }, pinch: { scale: String(1 - 0.5 * d) }, twist: { rotate: 140 * d + "deg", scale: String(1 - 0.35 * d) }, flip: { rotate: "y 90deg" } }[r.style], v = "blur(" + 2 * d + "px)", w = n.getRootNode(), T = Yp(n), W = (J = T.dataset) == null ? void 0 : J.k, M = Zp(n, T), D = n.getAttribute("aria-pressed") + "|" + n.dataset.act;
  n._warp = 1;
  const I = p.animate([{ scale: "1", rotate: "none", filter: "blur(0px)" }, { ...g, filter: v }], { duration: r.win, easing: Ee.exit, fill: "forwards" }), G = performance.now();
  I.finished.then(() => {
    const et = () => {
      var bt, it;
      const at = W ? T.isConnected ? T : (bt = w.querySelector) == null ? void 0 : bt.call(w, '[data-k="' + CSS.escape(W) + '"]') : T, X = at && Kp(at, M);
      if (X === n && n.getAttribute("aria-pressed") + "|" + n.dataset.act === D && performance.now() - G < 420) {
        requestAnimationFrame(et);
        return;
      }
      (((it = X == null ? void 0 : X.matches) != null && it.call(X, "button.tfIcon") ? X : n).firstElementChild || p).animate([{ ...g, filter: v }, { scale: "1", rotate: "none", filter: "blur(0px)" }], { duration: r.wout, easing: Ee[r.ease] }), I.cancel(), n._warp = 0;
    };
    et();
  });
}
const Xp = (n) => {
  let r = "M" + n[0][0].toFixed(1) + " " + n[0][1].toFixed(1);
  for (let d = 0; d < n.length - 1; d++) {
    const p = n[d - 1] || n[d], g = n[d], v = n[d + 1], w = n[d + 2] || v, T = [g[0] + (v[0] - p[0]) / 6, g[1] + (v[1] - p[1]) / 6], W = [v[0] - (w[0] - g[0]) / 6, v[1] - (w[1] - g[1]) / 6];
    r += "C" + T.map((M) => M.toFixed(1)).join(" ") + " " + W.map((M) => M.toFixed(1)).join(" ") + " " + v.map((M) => M.toFixed(1)).join(" ");
  }
  return r;
}, $p = (n, r, d, p = "mvGrid") => [0, 1, 2].map((g) => {
  const v = (r + (d - r) * g / 2).toFixed(1);
  return '<line class="' + p + '" x1="0" x2="' + n + '" y1="' + v + '" y2="' + v + '"/>';
}).join("");
function Jp(n, r = n.querySelector(".mvLine"), d = n.querySelectorAll(".mvArea,.mvDot")) {
  if (Ge() || !(r != null && r.getTotalLength)) return;
  const p = De.graphs, g = r.getTotalLength();
  r.animate([{ strokeDasharray: g, strokeDashoffset: g }, { strokeDasharray: g, strokeDashoffset: 0 }], { duration: p.draw, easing: Ee.standard }), [...d].forEach((v, w) => v.animate([{ opacity: 0 }, { opacity: 1 }], { duration: p.draw * 0.6, delay: p.draw * 0.3 + w * 12, easing: Ee.standard, fill: "backwards" }));
}
function rs(n, r, d, p, g) {
  if (n.getAnimations().forEach((D) => D.cancel()), n.style.left = p + "px", n.style.width = g + "px", Ge() || r === p && d === g) return;
  const v = De.tabs, w = v.stretch / 100, T = (D, I) => ({ left: D + "px", width: I + "px" }), M = p > r ? T(r + (p - r) * (0.15 * (1 - w)), p + g - (r + (p - r) * (0.15 * (1 - w)))) : T(p, r + d - p - (r - p) * (0.15 * (1 - w)));
  n.animate([T(r, d), { offset: 0.5, ...M }, T(p, g)], { duration: v.dur, easing: Ee.standard });
}
function um(n) {
  const r = ":is(.themeChoice,.wbSegments,.tfHeightTabs,.hcSeg,.tfSeg)", d = (g) => g.querySelector(':scope>[aria-pressed="true"],:scope>[aria-checked="true"],:scope>.active'), p = (g, v) => v ? [...g.children].indexOf(v) : -1;
  n.addEventListener("click", (g) => {
    var nt, dt, bt;
    const v = (dt = (nt = g.target).closest) == null ? void 0 : dt.call(nt, r + ">button"), w = v == null ? void 0 : v.parentElement;
    if (!w || Ge() || v.disabled) return;
    const T = d(w);
    if (!T || T === v) return;
    const W = p(w, T), M = w.getBoundingClientRect(), D = T.getBoundingClientRect(), I = getComputedStyle(T).borderRadius, G = w.getRootNode(), J = Yp(w), et = (bt = J.dataset) == null ? void 0 : bt.k, at = Zp(w, J), X = performance.now(), N = () => {
      var U, Ft, V;
      const it = et && !J.isConnected ? (U = G.querySelector) == null ? void 0 : U.call(G, '[data-k="' + CSS.escape(et) + '"]') : J, K = it && Kp(it, at), Y = (Ft = K == null ? void 0 : K.matches) != null && Ft.call(K, r) ? d(K) : null;
      if (!Y || p(K, Y) === W) {
        performance.now() - X < 700 && requestAnimationFrame(N);
        return;
      }
      const H = K.getBoundingClientRect(), xt = Y.getBoundingClientRect(), Rt = getComputedStyle(Y);
      (V = K.querySelector(":scope>.mvSegInd")) == null || V.remove();
      const ct = document.createElement("span");
      ct.className = "mvSegInd", ct.style.cssText = "top:" + (xt.top - H.top - K.clientTop) + "px;height:" + xt.height + "px;border-radius:" + I + ";background:" + Rt.backgroundColor + ";box-shadow:" + Rt.boxShadow, getComputedStyle(K).position === "static" && (K.style.position = "relative"), K.prepend(ct), K.classList.add("mvSegMoving"), rs(ct, D.left - M.left - K.clientLeft, D.width, xt.left - H.left - K.clientLeft, xt.width), clearTimeout(K._seg), K._seg = setTimeout(() => {
        ct.remove(), K.classList.remove("mvSegMoving");
      }, De.tabs.dur + 20);
    };
    requestAnimationFrame(N);
  }, !0);
}
const Qp = (n) => getComputedStyle(n).placeItems.startsWith("end");
function Fd(n) {
  const r = n.firstElementChild;
  if (Ge() || !r || r.classList.contains("still")) return;
  const d = De.dialog;
  n.animate([{ opacity: 0, backdropFilter: "blur(0px)" }, { opacity: 1, backdropFilter: "blur(" + d.blur + "px)" }], { duration: d.open, easing: Ee.standard }), r.style.animation = "none", r.animate(Qp(n) ? [{ transform: "translateY(100%)" }, { transform: "none" }] : [{ opacity: 0, transform: "scale(" + d.from / 100 + ")" }, { opacity: 1, transform: "none" }], { duration: d.open, easing: Ee[d.ease] }), [...(r.classList.contains("tfMorePair") && r.querySelector(".tfMore") || r).children].forEach((g, v) => g.animate([{ opacity: 0 }, { opacity: 1 }], { duration: d.open * 0.6, delay: d.open * 0.35 + v * 40, easing: Ee.standard, fill: "backwards" }));
}
function fm(n, r) {
  const d = n == null ? void 0 : n.firstElementChild;
  if (Ge() || !d || n.hidden || n._closing) {
    r();
    return;
  }
  const p = De.dialog;
  n._closing = !0, n.style.pointerEvents = "none", n.animate([{ opacity: 1, backdropFilter: "blur(" + p.blur + "px)" }, { opacity: 0, backdropFilter: "blur(0px)" }], { duration: p.close, easing: Ee.exit, fill: "forwards" });
  const g = d.animate(Qp(n) ? [{ transform: "none" }, { transform: "translateY(100%)" }] : [{ opacity: 1, transform: "none" }, { opacity: 0, transform: "scale(" + p.from / 100 + ")" }], { duration: p.close, easing: Ee.exit, fill: "forwards" });
  let v = !1;
  const w = () => {
    v || (v = !0, n._closing = !1, n.style.pointerEvents = "", n.getAnimations().forEach((T) => T.cancel()), d.getAnimations().forEach((T) => T.cancel()), r());
  };
  g.finished.then(w, w), setTimeout(w, p.close + 80);
}
const hm = '<span class="mvTick" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M20 6L9 17L4 12" pathLength="1"/></svg></span>';
function mm(n, r) {
  n.replaceChildren(), n.insertAdjacentHTML("afterbegin", hm), n.appendChild(Object.assign(document.createElement("span"), { className: "mvToastText", textContent: r }));
}
function gm(n) {
  if (Ge()) return;
  const r = De.confirm;
  n.animate([{ opacity: 0, translate: "0 18px" }, { opacity: 1, translate: "0 0" }], { duration: r.dur, easing: Ee.spring });
  const d = n.querySelector(".mvTick path");
  d && r.draw && d.animate([{ strokeDasharray: "1", strokeDashoffset: "1" }, { strokeDasharray: "1", strokeDashoffset: "0" }], { duration: 420, delay: r.dur * 0.5, easing: Ee.standard, fill: "backwards" });
}
const Rl = (n, r, d, p, g = 1) => (n + r * d * g) * Math.pow(p, g);
function Pl(n) {
  const r = De.drag.squash / 100;
  !n || Ge() || !r || n.animate([{ transform: "scale(" + (1 + r * 0.4) + "," + (1 - r) + ")" }, { transform: "scale(" + (1 - r * 0.1) + "," + (1 + r * 0.24) + ")" }, { transform: "none" }], { duration: 340, easing: "ease-out" });
}
function qd(n) {
  if (!n || Ge()) return;
  const r = De.expand;
  [...n.children].slice(1).forEach((d, p) => d.animate([{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "none" }], { duration: 260, delay: r.delay + p * r.stagger, easing: "cubic-bezier(.2,0,0,1)", fill: "backwards" }));
}
const qe = 6e4, oe = 36e5, pa = 864e5, Xr = 1440, bm = 6, wm = 10 * qe, Wd = 3, vm = 3, Zi = { day: [6, 22], waking: [7, 23], all: [0, 24] }, ym = [[-5, [91, 141, 239]], [5, [79, 195, 230]], [12, [95, 211, 160]], [18, [255, 211, 77]], [24, [255, 159, 67]], [30, [255, 91, 79]]], xm = "M6.5 18.5h11a4 4 0 0 0 .4-7.98 5.5 5.5 0 0 0-10.6-1.1A4.5 4.5 0 0 0 6.5 18.5Z", Vd = (n, r, d, p) => '<circle cx="' + n + '" cy="' + r + '" r="' + d + '"/><path d="' + [0, 45, 90, 135, 180, 225, 270, 315].map((g) => {
  const v = Math.cos(g * Math.PI / 180), w = Math.sin(g * Math.PI / 180), T = d + 2, W = d + 2 + p;
  return "M" + (n + v * T).toFixed(2) + " " + (r + w * T).toFixed(2) + "L" + (n + v * W).toFixed(2) + " " + (r + w * W).toFixed(2);
}).join("") + '"/>', Ho = (n) => '<path d="' + xm + '"' + (n ? ' transform="' + n + '"' : "") + "/>", No = (n) => '<path d="' + n + '"/>', jd = '<path d="M19.5 14.5A7.5 7.5 0 1 1 9.5 4.5a6 6 0 0 0 10 10Z"/>';
function Mm(n, r) {
  const d = "translate(0,-3)";
  switch (n) {
    case "sunny":
      return r ? jd : Vd(12, 12, 4, 2.5);
    case "clear-night":
      return jd;
    case "partlycloudy":
      return (r ? '<path d="M11.5 9.5A4.5 4.5 0 1 1 6 4a3.6 3.6 0 0 0 5.5 5.5Z"/>' : Vd(7.5, 7.5, 2.6, 1.4)) + Ho("translate(3.6,3) scale(.85)");
    case "cloudy":
      return Ho();
    case "fog":
      return No("M4 8.5h16M3 12.5h18M5 16.5h14");
    case "rainy":
      return Ho(d) + No("M8.5 18.5 7.5 21M12.5 18.5l-1 2.5M16.5 18.5l-1 2.5");
    case "pouring":
      return Ho(d) + No("M7.5 18.5 6 22M11 18.5 9.5 22M14.5 18.5 13 22M18 18.5 16.5 22");
    case "snowy":
      return Ho(d) + No("M8 20h.01M12 21.5h.01M16 20h.01");
    case "snowy-rainy":
      return Ho(d) + No("M8.5 18.5 7.5 21M12 21h.01M16.5 18.5l-1 2.5");
    case "hail":
      return Ho(d) + '<circle cx="8" cy="20.5" r="1"/><circle cx="12" cy="21.5" r="1"/><circle cx="16" cy="20.5" r="1"/>';
    case "lightning":
      return Ho(d) + No("M12.5 16 10.5 19.5h3l-2 3");
    case "lightning-rainy":
      return Ho(d) + No("M12.5 16 10.5 19.5h3l-2 3M7.5 18.5l-1 2.5M17.5 18.5l-1 2.5");
    case "windy":
    case "windy-variant":
      return No("M3 8.5h10.5a2.5 2.5 0 1 0-2.5-2.5M3 12h15.5a2.5 2.5 0 1 1-2.5 2.5M3 15.5h8");
    default:
      return '<circle cx="12" cy="12" r="8"/>' + No("M12 8v5M12 16h.01");
  }
}
const Hl = (n, r) => '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + Mm(n, r) + "</svg>", km = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), Sm = 30 * qe, _m = 7, Cm = 3, zd = 1, Am = qe, Tm = 15 * qe, Lm = 5, ne = {
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
}, Ql = 7, Io = 256, Dm = 3, Gd = 700, Em = 1800, tu = 5 * qe;
let Ki = null, Ud = 0, Ur = null;
function Bm() {
  return Ki && Date.now() - Ud < tu ? Promise.resolve(Ki) : Ur || (Ur = fetch("https://api.rainviewer.com/public/weather-maps.json").then((n) => n.ok ? n.json() : Promise.reject(new Error(String(n.status)))).then((n) => {
    var p, g;
    const r = (((p = n.radar) == null ? void 0 : p.past) || []).slice(-6), d = (((g = n.radar) == null ? void 0 : g.nowcast) || []).slice(0, Dm);
    return Ki = { host: n.host, frames: [...r.map((v) => ({ ...v, past: !0 })), ...d] }, Ud = Date.now(), Ki;
  }).finally(() => {
    Ur = null;
  }), Ur);
}
function Rm(n, r, d, p) {
  const g = Ql, v = 2 ** g, w = n * Math.PI / 180, T = (r + 180) / 360 * v * Io, W = (1 - Math.log(Math.tan(w) + 1 / Math.cos(w)) / Math.PI) / 2 * v * Io, M = T - d / 2, D = W - p / 2, I = [];
  for (let G = Math.floor(M / Io); G <= Math.floor((M + d - 1) / Io); G++) for (let J = Math.floor(D / Io); J <= Math.floor((D + p - 1) / Io); J++)
    J < 0 || J >= v || I.push({ x: (G % v + v) % v, y: J, left: G * Io - M, top: J * Io - D });
  return I;
}
const Pm = {
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
}, Hm = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], Nm = Object.keys(gt.phases), Om = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)", extreme: "var(--purple-color, #926bc7)" }, Yd = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, eu = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], Xi = 100, Zd = "µg/m³", Im = "weather_alerts.air_quality_pollen", cs = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], Fm = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, qm = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], Wm = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, Vm = { daily: 1, hourly: 2 }, yt = (n) => String(n ?? "").replace(/[&<>"']/g, (r) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[r]), Xe = (n, r) => n.replace(/\{(\w+)\}/g, (d, p) => r[p] ?? ""), qo = (n) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + n + '"/></svg>', Kd = /* @__PURE__ */ new Map();
function au(n) {
  let r = Kd.get(n);
  if (r === void 0) {
    const d = "http://www.w3.org/2000/svg", p = document.createElementNS(d, "svg"), g = document.createElementNS(d, "path");
    p.setAttribute("viewBox", "0 0 24 24"), p.style.cssText = "position:absolute;width:24px;height:24px;visibility:hidden;pointer-events:none", g.setAttribute("d", n), p.append(g), document.body.append(p);
    const v = g.getBBox();
    p.remove();
    const w = Math.max(v.width, v.height), T = w ? 26 * 24 / w : 0, W = T / 24;
    r = w ? "width:" + T.toFixed(2) + "px;height:" + T.toFixed(2) + "px;translate:" + ((12 - v.x - v.width / 2) * W).toFixed(2) + "px " + ((12 - v.y - v.height / 2) * W).toFixed(2) + "px" : "", Kd.set(n, r);
  }
  return r ? '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true" style="' + r + '"><path d="' + n + '"/></svg>' : qo(n);
}
const jm = () => {
  var n;
  return !!((n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches);
}, ue = (n) => n != null && n !== "" && Number.isFinite(Number(n)), Xd = /* @__PURE__ */ new Map(), $d = /* @__PURE__ */ new Map(), Nl = /* @__PURE__ */ new WeakMap(), zm = (n) => {
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
function Jt(n, r, d) {
  const p = Number(n);
  if (Number.isNaN(p)) return String(n);
  const g = (r == null ? void 0 : r.number_format) === "none", v = { maximumFractionDigits: 2, ...d, ...g ? { useGrouping: !1 } : {} }, w = g ? "en-US" : zm(r), T = JSON.stringify([w, v]);
  let W = Xd.get(T);
  if (!W) {
    try {
      W = new Intl.NumberFormat(w, v);
    } catch {
      W = new Intl.NumberFormat(void 0, v);
    }
    Xd.set(T, W);
  }
  return W.format(p);
}
const ec = (n) => {
  var r;
  return ((r = n == null ? void 0 : n.locale) == null ? void 0 : r.language) || (n == null ? void 0 : n.language) || void 0;
};
function Gm(n) {
  if (!n) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (Nl.has(n)) return Nl.get(n);
  const r = n.time_format, d = r === "language" || r === "system" || !r ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(r === "language" ? n.language : void 0).includes("10") : r === "12";
  return Nl.set(n, d), d;
}
const ou = (n) => {
  var r, d;
  return ((r = n == null ? void 0 : n.locale) == null ? void 0 : r.time_zone) === "server" && ((d = n == null ? void 0 : n.config) != null && d.time_zone) ? n.config.time_zone : void 0;
};
function nu(n, r) {
  const d = JSON.stringify([n, r]);
  let p = $d.get(d);
  if (!p) {
    try {
      p = new Intl.DateTimeFormat(n, r);
    } catch {
      p = new Intl.DateTimeFormat(void 0, { ...r, timeZone: void 0 });
    }
    $d.set(d, p);
  }
  return p;
}
const ze = (n, r) => nu(ec(r), { hour: "numeric", minute: "2-digit", hourCycle: Gm(r == null ? void 0 : r.locale) ? "h12" : "h23", timeZone: ou(r) }).format(n), Jd = (n, r) => nu(ec(r), { weekday: "short", timeZone: ou(r) }).format(n), Um = (n, r) => n.toLocaleDateString(ec(r), { weekday: "narrow" }), be = (n, r) => ue(r) ? Jt(Math.round(Number(r)), n.locale) + "°" : "–", sn = (n) => {
  const r = new Date(n);
  return r.setHours(0, 0, 0, 0), r;
}, ir = (n, r) => n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth() && n.getDate() === r.getDate(), ra = Math.PI / 180, Ym = 2440588, Zm = 2451545, ds = ra * 23.4397, Km = 149598e3, Xm = -0.833 * ra, $m = 0.133 * ra, Qd = 5 * qe, ru = (n) => n.getTime() / pa - 0.5 + Ym - Zm, iu = (n, r) => Math.atan2(Math.sin(n) * Math.cos(ds) - Math.tan(r) * Math.sin(ds), Math.cos(n)), su = (n, r) => Math.asin(Math.sin(r) * Math.cos(ds) + Math.cos(r) * Math.sin(ds) * Math.sin(n)), Jm = (n, r) => ra * (280.16 + 360.9856235 * n) - r, Qm = (n, r, d) => Math.asin(Math.sin(r) * Math.sin(d) + Math.cos(r) * Math.cos(d) * Math.cos(n));
function lu(n) {
  const r = ra * (357.5291 + 0.98560028 * n), d = ra * (1.9148 * Math.sin(r) + 0.02 * Math.sin(2 * r) + 3e-4 * Math.sin(3 * r)), p = r + d + ra * 102.9372 + Math.PI;
  return { ra: iu(p, 0), dec: su(p, 0), dist: Km };
}
function cu(n) {
  const r = ra * (218.316 + 13.176396 * n), d = ra * (134.963 + 13.064993 * n), p = ra * (93.272 + 13.22935 * n), g = r + ra * 6.289 * Math.sin(d), v = ra * 5.128 * Math.sin(p);
  return { ra: iu(g, v), dec: su(g, v), dist: 385001 - 20905 * Math.cos(d) };
}
const du = (n, r, d, p) => {
  const g = ru(r), v = n(g);
  return Qm(Jm(g, ra * -p) - v.ra, ra * d, v.dec);
}, ps = (n, r, d) => du(lu, n, r, d), t0 = (n, r, d) => du(cu, n, r, d);
function pu(n, r, d, p) {
  const g = {};
  let v = d.getTime(), w = n(d) - r;
  for (let T = v + Qd; T <= p.getTime(); T += Qd) {
    const W = n(new Date(T)) - r;
    if (w < 0 != W < 0) {
      const M = new Date(v + (T - v) * w / (w - W));
      W > 0 ? g.rise ?? (g.rise = M) : g.set ?? (g.set = M);
    }
    v = T, w = W;
  }
  return g;
}
const uu = (n) => {
  const r = sn(n);
  return [r, new Date(r.getTime() + pa)];
}, e0 = (n, r, d) => pu((p) => ps(p, r, d), Xm, ...uu(n)), a0 = (n, r, d) => pu((p) => t0(p, r, d), $m, ...uu(n));
function Ol(n) {
  const r = ru(n), d = lu(r), p = cu(r), g = Math.acos(Math.sin(d.dec) * Math.sin(p.dec) + Math.cos(d.dec) * Math.cos(p.dec) * Math.cos(d.ra - p.ra)), v = Math.atan2(d.dist * Math.sin(g), p.dist - d.dist * Math.cos(g)), w = Math.atan2(Math.cos(d.dec) * Math.sin(d.ra - p.ra), Math.sin(d.dec) * Math.cos(p.dec) - Math.cos(d.dec) * Math.sin(p.dec) * Math.cos(d.ra - p.ra));
  return { fraction: (1 + Math.cos(v)) / 2, phase: 0.5 + 0.5 * v * (w < 0 ? -1 : 1) / Math.PI };
}
const o0 = (n) => {
  const r = n * 28;
  return r < 0.5 || r > 27.5 ? "new_moon" : r < 6.5 ? "waxing_crescent" : r < 7.5 ? "first_quarter" : r < 13.5 ? "waxing_gibbous" : r < 14.5 ? "full_moon" : r < 20.5 ? "waning_gibbous" : r < 21.5 ? "last_quarter" : "waning_crescent";
}, pr = (n) => {
  const r = n == null ? void 0 : n.config;
  return r && ue(r.latitude) && ue(r.longitude) ? { lat: Number(r.latitude), lon: Number(r.longitude) } : null;
};
function sr(n, r) {
  var M, D, I;
  const d = pr(n), p = d ? e0(r, d.lat, d.lon) : {}, g = (M = n == null ? void 0 : n.states) == null ? void 0 : M["sun.sun"], v = sn(r).getTime(), w = (G) => {
    const J = G ? new Date(G) : null;
    return J && Number.isFinite(J.getTime()) && sn(J).getTime() === v ? J : null;
  }, T = w((D = g == null ? void 0 : g.attributes) == null ? void 0 : D.next_rising), W = w((I = g == null ? void 0 : g.attributes) == null ? void 0 : I.next_setting);
  return T && (p.rise = T), W && (p.set = W), p;
}
function n0(n) {
  var p;
  const r = (p = n == null ? void 0 : n.states) == null ? void 0 : p["sun.sun"];
  if ((r == null ? void 0 : r.state) === "below_horizon" || (r == null ? void 0 : r.state) === "above_horizon") return r.state === "below_horizon";
  const d = pr(n);
  return d ? ps(/* @__PURE__ */ new Date(), d.lat, d.lon) < 0 : !1;
}
const En = (n) => !!n && n.state !== "unavailable" && n.state !== "unknown", ur = (n, r) => {
  var p;
  const d = (p = n.entities) == null ? void 0 : p[r];
  return !d || !d.hidden && !d.entity_category;
}, Be = (n, r, d) => {
  var p, g;
  for (const v of r) {
    const w = (p = n.states) == null ? void 0 : p[v];
    if (!En(w)) continue;
    const T = (g = w.attributes) == null ? void 0 : g[d];
    if (T != null && T !== "") return { stateObj: w, value: T };
  }
}, r0 = (n, r) => r.map((d) => {
  var p;
  return (p = n.states) == null ? void 0 : p[d];
}).find(En), i0 = (n, r, d) => r.map((p) => {
  var g;
  return (g = n.states) == null ? void 0 : g[p];
}).find((p) => {
  var g;
  return En(p) && (((g = p.attributes) == null ? void 0 : g.supported_features) == null || Number(p.attributes.supported_features) & Vm[d]);
});
function rn(n, r, d) {
  var v, w, T, W;
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
      return g.temperature_unit || ((W = (T = n.config) == null ? void 0 : T.unit_system) == null ? void 0 : W.temperature) || "";
  }
}
function is(n, r, d, p) {
  try {
    if (typeof n.formatEntityAttributeValueToParts == "function") {
      const [g, ...v] = n.formatEntityAttributeValueToParts(r, d, p).map((w) => w.value);
      return { number: g, unit: v.join("").trim() };
    }
  } catch {
  }
  return { number: Jt(p, n.locale), unit: rn(n, r, d) };
}
function tp(n, r, d, p) {
  try {
    if (typeof n.formatEntityAttributeValue == "function") return n.formatEntityAttributeValue(r, d, p);
  } catch {
  }
  const g = is(n, r, d, p);
  return (g.number + " " + g.unit).trim();
}
function Oo(n, r) {
  var p;
  try {
    if (typeof n.formatEntityState == "function") return n.formatEntityState(r);
  } catch {
  }
  const d = (p = r.attributes) == null ? void 0 : p.unit_of_measurement;
  return Pm[r.state] || (d && ue(r.state) ? Jt(r.state, n.locale) + " " + d : r.state);
}
function on(n, r) {
  var d;
  try {
    if (typeof n.formatEntityName == "function") return n.formatEntityName(r, { type: "entity" });
  } catch {
  }
  return ((d = r.attributes) == null ? void 0 : d.friendly_name) || r.entity_id;
}
const ep = (n) => n < 3 ? "low" : n < 6 ? "moderate" : n < 8 ? "high" : n < 11 ? "very_high" : "extreme", $i = (n) => eu.find(([, r]) => n <= r)[0];
function s0(n, r) {
  if (r === "Beaufort") return Math.round(n);
  const d = r ? Fm[r] : void 0;
  if (d === void 0) return;
  const p = qm.findIndex((g) => n * d < g);
  return p === -1 ? 12 : p;
}
const ap = (n, r) => {
  const d = r ? Wm[r] : void 0;
  return d === void 0 ? void 0 : n * d;
}, op = (n) => Object.keys(n.states || {}).find((r) => {
  var d, p;
  return r.startsWith("sensor.") && ((p = (d = n.entities) == null ? void 0 : d[r]) == null ? void 0 : p.platform) === "moon";
}), Il = (n) => Object.values(n.states || {}).filter((r) => {
  var d, p;
  return r.entity_id.startsWith("sensor.") && ((d = r.attributes) == null ? void 0 : d.device_class) === "precipitation" && ["total", "total_increasing"].includes(((p = r.attributes) == null ? void 0 : p.state_class) ?? "") && ur(n, r.entity_id);
}).map((r) => r.entity_id).sort()[0];
function l0(n) {
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
const fu = (n, r, d) => {
  var g, v, w;
  const p = (v = (g = n.entities) == null ? void 0 : g[d]) == null ? void 0 : v.platform;
  return !!p && !!((w = r[p]) != null && w.includes(Im));
};
function c0(n, r) {
  const d = /* @__PURE__ */ new Map();
  return Object.values(n.states || {}).filter((p) => {
    var g;
    return p.entity_id.startsWith("sensor.") && cs.includes(((g = p.attributes) == null ? void 0 : g.device_class) ?? "") && ur(n, p.entity_id) && fu(n, r, p.entity_id);
  }).sort((p, g) => p.entity_id.localeCompare(g.entity_id)).forEach((p) => {
    d.has(p.attributes.device_class) || d.set(p.attributes.device_class, p.entity_id);
  }), cs.map((p) => d.get(p)).filter(Boolean);
}
const d0 = (n, r) => Object.values(n.states || {}).filter((d) => {
  var p, g;
  return d.entity_id.startsWith("sensor.") && ur(n, d.entity_id) && fu(n, r, d.entity_id) && (((g = (p = n.entities) == null ? void 0 : p[d.entity_id]) == null ? void 0 : g.translation_key) ?? d.entity_id).toLowerCase().includes("pollen");
}).map((d) => d.entity_id).sort();
function np(n, r, d) {
  const p = Math.max(r - n, 1e-6), g = d[d.length - 1], v = d.find((M) => p / M <= 4) ?? g * Math.ceil(p / (4 * g)), w = Math.floor(n / v) * v;
  let T = Math.ceil(r / v) * v;
  T === w && (T = w + v);
  const W = [];
  for (let M = w; M <= T + v / 1e3; M += v) W.push(M);
  return { min: w, max: T, ticks: W };
}
const p0 = (n, r, d) => {
  const p = (w) => [1, 3, 5].map((T) => parseInt(w.slice(T, T + 2), 16)), g = p(n), v = p(r);
  return "rgb(" + g.map((w, T) => Math.round(w + (v[T] - w) * d)).join(", ") + ")";
}, u0 = (n, r, d, p) => {
  const g = d * Math.abs(1 - 2 * p), v = p < 0.5 ? 0 : 1;
  return "M " + n + " " + (r - d) + " A " + d + " " + d + " 0 0 0 " + n + " " + (r + d) + " A " + g + " " + d + " 0 0 " + v + " " + n + " " + (r - d) + " Z";
}, oa = ({ icon: n, name: r, sub: d, visual: p, double: g, backdrop: v, cls: w, zone: T, callouts: W }) => '<div class="wbCard wbSquare' + (g ? " wbDouble" : "") + (v ? " wbHasBackdrop" : "") + (T != null ? " wbZoned" : "") + (w ? " " + w : "") + '">' + (v ? '<div class="wbBackdrop" aria-hidden="true">' + v + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + au(n) + '</div><div class="wbText"><span class="wbName">' + yt(r) + "</span>" + (d ? '<span class="wbSub">' + yt(d) + "</span>" : "") + "</div></div>" + (T != null ? '<div class="wbZone">' + T + "</div>" + (W != null && W.length ? '<div class="wbCallouts">' + W.slice(0, 3).map((M) => Array.isArray(M) ? '<span class="wbCallout"><span>' + yt(M[0]) + "</span><span>" + yt(M[1]) + "</span></span>" : '<span class="wbCallout wbAdvice"><span>' + yt(M) + "</span></span>").join("") + "</div>" : "") : '<div class="wbVisual">' + p + "</div>") + "</div>", Ji = (n) => '<div class="wbZoneM">' + n + "</div>", Ra = (n, r) => '<div class="wbValue"><span class="wbNum">' + yt(n) + "</span>" + (r ? '<span class="wbUnitV">' + yt(r) + "</span>" : "") + "</div>";
function f0(n) {
  const r = n.max - n.min || 1, d = (T) => 100 - (Math.min(n.max, Math.max(n.min, T)) - n.min) / r * 100, p = (T) => T / Xr * 100 + "%", g = (T) => T.map((W) => W.t + "," + d(W.v)).join(" "), v = n.kind === "line" ? n.points : [];
  let w = '<div class="wbDayChart"><div class="wbDcSun">' + n.sun.map((T) => '<span class="wbDcSunMark" style="left:' + p(T.t) + '">' + qo(T.rise ? ne.sunsetUp : ne.sunsetDown) + yt(T.label) + "</span>").join("") + "</div>";
  return w += '<div class="wbDcY">' + n.ticks.map((T) => '<span style="top:' + d(T) + '%">' + yt(n.format(T)) + "</span>").join("") + "</div>", w += '<div class="wbDcPlot"><svg viewBox="0 0 ' + Xr + ' 100" preserveAspectRatio="none">' + n.night.map(([T, W]) => '<rect class="wbDcNight" x="' + T + '" y="0" width="' + (W - T) + '" height="100"></rect>').join("") + n.ticks.map((T) => '<line class="wbDcGrid" x1="0" x2="' + Xr + '" y1="' + d(T) + '" y2="' + d(T) + '" vector-effect="non-scaling-stroke"></line>').join("") + n.sun.map((T) => '<line class="wbDcSunLine" x1="' + T.t + '" x2="' + T.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (n.past && n.past.length > 1 ? '<polyline class="wbDcPast" points="' + g(n.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (v.length > 1 ? '<polygon class="wbDcArea" points="' + v[0].t + ",100 " + g(v) + " " + v[v.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + g(v) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (n.now ? '<line class="wbDcNow" x1="' + n.now.t + '" x2="' + n.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (n.kind === "bars" ? n.points.filter((T) => T.v > 0).map((T) => '<i class="wbDcBar" style="left:' + p(T.t + 12) + ";width:" + p(36) + ";height:" + (100 - d(T.v)) + '%"></i>').join("") : "") + (n.now && n.kind === "line" ? '<i class="wbDcDot" style="left:' + p(n.now.t) + ";top:" + d(n.now.v) + '%"></i>' : "") + (n.peak ? '<span class="wbDcPeak" style="left:' + p(n.peak.t) + ";top:" + d(n.peak.v) + '%">' + yt(n.peak.label) + "</span>" : "") + (n.note ? '<span class="wbDcNote">' + yt(n.note) + "</span>" : "") + "</div>", w += '<div class="wbDcX">' + n.hours.map((T) => '<span class="' + (T.minor ? "wbMinor" : "") + '" style="left:' + p(T.t) + '">' + yt(T.label) + "</span>").join("") + "</div></div>", w;
}
function rp(n, r, d = 120, p = 300) {
  const w = n.map((N) => N.value), T = Math.min(...w), W = Math.max(...w), M = W - T || 1, D = (N) => N / (n.length - 1) * p, I = (N) => 18 + (1 - (N - T) / M) * (d - 18 - 18), G = n.map((N, nt) => [D(nt), I(N.value)]), J = G.length > 2 ? Xp(G) : "M" + G.map((N) => N[0].toFixed(1) + " " + N[1].toFixed(1)).join("L"), et = w.indexOf(W), at = w.indexOf(T), X = (N) => N === 0 ? "start" : N === n.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 ' + p + " " + d + '" aria-hidden="true">' + $p(p, 18, d - 18) + ('<path class="wbArea" d="' + J + "L" + p + " " + (d - 18) + "L0 " + (d - 18) + 'Z"></path>') + '<path class="wbLine" d="' + J + '" vector-effect="non-scaling-stroke"></path><text x="' + D(et) + '" y="' + (I(W) - 6) + '" text-anchor="' + X(et) + '">' + yt(r(W)) + '</text><text x="' + D(at) + '" y="' + (I(T) + 14) + '" text-anchor="' + X(at) + '">' + yt(r(T)) + '</text><text x="0" y="' + d + '" text-anchor="start">' + yt(n[0].label) + '</text><text x="' + p + '" y="' + d + '" text-anchor="end">' + yt(n[n.length - 1].label) + "</text></svg>";
}
function h0(n, r) {
  const v = n.map((I) => I.value).concat([]), w = Math.min(...v) - 2, T = Math.max(...v) + 1, W = T - w || 1, M = 300 / n.length, D = (I) => (1 - (I - w) / W) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + n.map((I, G) => '<rect class="wbBar' + (I.now ? " wbNowBar" : "") + '" x="' + (G * M + M * 0.2) + '" y="' + D(I.value) + '" width="' + M * 0.6 + '" height="' + (104 - D(I.value)) + '" rx="6"></rect><text x="' + (G * M + M / 2) + '" y="120" text-anchor="middle">' + yt(I.label) + "</text>").join("") + "</svg>";
}
const m0 = [
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
], g0 = [[60, 92, 2.2], [72, 98, 1.6], [48, 100, 1.5], [85, 88, 1.8], [38, 92, 1.3], [66, 84, 1.2], [95, 80, 1.3], [25, 40, 1.4], [82, 30, 1.3], [55, 108, 1.2]], ip = [[54.4, 95, 1.8], [44.5, 56.6, 1.5], [33.5, 56.6, 1.1], [23.7, 40.1, 1.1]], b0 = [[30, 62], [48, 48], [72, 60], [96, 82], [86, 112], [30, 108], [16, 86]];
let w0 = 0;
function sp(n, { getHass: r, entityId: d, style: p = "bitmap", motion: g = !0, cards: v, onOpen: w, hoursWindow: T, radarSource: W } = {}) {
  var Lr, Dr;
  const M = "wb" + ++w0 + "-", D = document.createElement("div");
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
  let nt = !1, dt = null, bt = 0, it = -1, K = !1, Y = null, H = "";
  const xt = "homecore-next-view", Rt = (() => {
    try {
      return localStorage.getItem(xt);
    } catch {
      return null;
    }
  })(), ct = { graph: void 0, range: { preset: "day" }, picking: !1, openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", hourlyView: Rt === "bars" ? "bars" : "strip", aq: void 0 }, U = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let Ft = /* @__PURE__ */ new Date(), V = /* @__PURE__ */ new Date();
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
  function ht(s, h, m) {
    var L;
    if (typeof ((L = s.connection) == null ? void 0 : L.subscribeMessage) != "function") return;
    const b = { entityId: m };
    try {
      b.unsub = Promise.resolve(s.connection.subscribeMessage((O) => {
        nt || A[h] !== b || (O != null && O.forecast ? ft[h] = { entityId: m, forecast: O.forecast } : delete ft[h], Qe());
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
      const L = i0(s, h, b);
      ((m = A[b]) == null ? void 0 : m.entityId) !== (L == null ? void 0 : L.entity_id) && (vt(b), L && ht(s, b, L.entity_id));
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
  async function re(s, h) {
    var j, Z, q;
    const m = Be(s, h, "pressure");
    if (!m) return;
    const b = m.stateObj.entity_id, L = await qt(s, b, new Date(Date.now() - 3 * oe)), O = (q = (Z = (j = L == null ? void 0 : L[b]) == null ? void 0 : j.find(($) => {
      var tt;
      return typeof ((tt = $.a) == null ? void 0 : tt.pressure) == "number";
    })) == null ? void 0 : Z.a) == null ? void 0 : q.pressure;
    U.pressureHistory = typeof O == "number" ? { entityId: b, value: O } : void 0;
  }
  async function wa(s, h) {
    var Z;
    const m = Be(s, h, "temperature");
    if (!m) return;
    const b = m.stateObj.entity_id, L = sn(/* @__PURE__ */ new Date()), O = await qt(s, b, new Date(L.getTime() - _m * pa)), j = /* @__PURE__ */ new Map();
    for (const q of (O == null ? void 0 : O[b]) ?? []) {
      const $ = (Z = q.a) == null ? void 0 : Z.temperature, tt = new Date((q.lc ?? q.lu) * 1e3);
      if (typeof $ != "number" || tt >= L) continue;
      const lt = tt.toDateString();
      j.set(lt, Math.max(j.get(lt) ?? -1 / 0, $));
    }
    U.temperatureHistory = { entityId: b, dailyHighs: [...j.values()], days: [...j.entries()].map(([q, $]) => ({ date: new Date(q), high: $ })) };
  }
  async function ia(s) {
    const h = Il(s);
    if (!h) return;
    const m = await s.callWS({ type: "recorder/statistic_during_period", statistic_id: h, rolling_window: { duration: { hours: 24 } } });
    U.rain = { entityId: h, change: (m == null ? void 0 : m.change) ?? void 0 };
  }
  function ua() {
    const s = r == null ? void 0 : r();
    if (!s || nt || typeof s.callWS != "function") return;
    const h = Nt(s);
    U.lastFetch = Date.now(), [re(s, h), wa(s, h), ia(s)].forEach((m) => m.then(() => Qe(), () => {
    }));
  }
  async function Je() {
    const s = r == null ? void 0 : r();
    if (!s) return;
    const h = Be(s, Nt(s), "temperature");
    if (!h) return;
    const m = h.stateObj.entity_id, b = sn(/* @__PURE__ */ new Date());
    try {
      const L = await qt(s, m, b), O = (j) => ((L == null ? void 0 : L[m]) ?? []).map((Z) => {
        var q;
        return { time: Z.lu * 1e3, value: (q = Z.a) == null ? void 0 : q[j] };
      }).filter((Z) => typeof Z.value == "number");
      U.todayHistory = { day: b.toDateString(), fetched: Date.now(), temperature: O("temperature"), humidity: O("humidity") }, Qe();
    } catch {
    }
  }
  async function Bn(s) {
    const h = r == null ? void 0 : r();
    if (h)
      try {
        const m = await qt(h, s, new Date(Date.now() - 24 * oe), !0), b = ((m == null ? void 0 : m[s]) ?? []).filter((O) => ue(O.s)), L = Math.max(1, Math.ceil(b.length / 48));
        U.aqHistory = { entityId: s, points: b.filter((O, j) => j % L === 0).map((O) => ({ label: ze(new Date(O.lu * 1e3), h), value: Number(O.s) })) }, Qe();
      } catch {
      }
  }
  function wt(s) {
    U.categories === void 0 && (U.categories = null, Promise.resolve().then(() => s.callWS({ type: "integration/descriptions" })).then((h) => {
      U.categories = l0(h);
    }, () => {
      U.categories = {};
    }).then(() => Qe()));
  }
  function Nt(s) {
    var m;
    const h = Object.keys(s.states || {}).filter((b) => b.startsWith("weather.") && ur(s, b)).sort();
    return d && ((m = s.states) != null && m[d]) ? [d, ...h.filter((b) => b !== d)] : h;
  }
  const _e = (s) => U.categories ? { air: c0(s, U.categories), pollen: d0(s, U.categories) } : { air: [], pollen: [] };
  function fo(s, h, m, b) {
    if (p === "line") return '<span class="wbWx wbS' + h + ' wbLineIcon" aria-hidden="true">' + Hl(s, m || s === "clear-night") + "</span>";
    if (p === "smooth") {
      const L = Kh(s, h === 90, m, M + "g-" + b);
      return '<span class="wbWx wbS' + h + " wb" + L.k[0].toUpperCase() + L.k.slice(1) + (L.night ? " wbNight" : "") + '" aria-hidden="true">' + L.svg + "</span>";
    }
    return '<span class="wbWx wbS' + h + '" aria-hidden="true"><canvas data-wb-wx="' + yt(Rp(s, m)) + '" data-size="' + h + '"></canvas></span>';
  }
  const ln = () => ot("daily").filter((s) => s.templow != null).slice(0, bm);
  function va(s, h) {
    const m = new Date(h.datetime), b = /* @__PURE__ */ new Date();
    return ir(m, b) ? gt.today : ir(m, new Date(b.getTime() + pa)) ? gt.tomorrow : Jd(m, s);
  }
  const we = (s, h, m) => m === 0 ? va(s, h) : Jd(new Date(h.datetime), s);
  function Jr(s, h) {
    var tt, lt, Ht, Lt;
    const m = r0(s, h);
    if (!m) return "";
    const b = ln(), L = ct.openDay !== void 0 ? b[ct.openDay] : void 0, O = Be(s, h, "temperature"), j = b[0], Z = j && ir(new Date(j.datetime), /* @__PURE__ */ new Date()), q = ((lt = (tt = s.config) == null ? void 0 : tt.unit_system) == null ? void 0 : lt.temperature) || ((Ht = m.attributes) == null ? void 0 : Ht.temperature_unit) || "";
    let $ = '<div class="wbCard wbWeather' + (L ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (L ? " inert" : "") + '><div class="wbNow">' + (w ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + yt(gt.openPage) + '">' : '<div class="wbCurrent">') + fo(m.state, 90, n0(s), "now") + '<div class="wbTempBlock">' + (O && ue(O.value) ? '<div class="wbTemp"><span class="wbDeg">' + yt(Jt(Math.round(Number(O.value)), s.locale)) + '</span><span class="wbUnit">' + yt(q) + "</span></div>" : "") + '<div class="wbPlace">' + yt(((Lt = s.config) == null ? void 0 : Lt.location_name) ?? "") + "</div></div>" + (w ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + yt(Oo(s, m)) + "</div>" + (Z && j.templow != null ? '<div class="wbRange">' + yt(Xe(gt.range, { high: be(s, j.temperature), low: be(s, j.templow) })) + "</div>" : "") + "</div></div>";
    if ($ += fr(s) + Vt(s), b.length) {
      const St = Z && O && ue(O.value) ? be(s, O.value) : "", jt = (At, pt, Ot) => At === 0 && St ? '<span class="wbAsDay">' + yt(pt) + '</span><span class="wbAsNow">' + yt(Ot) + "</span>" : yt(pt);
      $ += '<div class="wbColumns" role="list">' + b.map((At, pt) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + pt + '" data-wb-focus="col-' + pt + '"><span class="wbDay">' + jt(pt, we(s, At, pt), gt.now) + "</span>" + fo(At.condition ?? "cloudy", 60, !1, "col" + pt) + '<span class="wbTemps"><span class="wbHi">' + jt(pt, be(s, At.temperature), St) + '</span><span class="wbLo">' + yt(be(s, At.templow)) + "</span></span></button>").join("") + "</div>", $ += '<div class="wbHalves" role="list">' + b.map((At, pt) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + pt + '" data-wb-focus="half-' + pt + '">' + fo(At.condition ?? "cloudy", 40, !1, "half" + pt) + '<span class="wbText"><span class="wbName">' + yt(va(s, At)) + '</span><span class="wbSub">' + yt(Xe(gt.highLow, { high: be(s, At.temperature), low: be(s, At.templow) })) + "</span></span></button>").join("") + "</div>";
    }
    return $ + "</div>" + (L ? ti(s, h, L) : "") + "</div>";
  }
  const ya = {
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
  function ho(s) {
    const h = Date.now(), m = ot("hourly").filter((lt) => new Date(lt.datetime).getTime() > h - oe).slice(0, 13);
    if (m.length < 2) return "";
    const b = (lt) => ze(new Date(lt.datetime), s), L = (lt) => ya[lt.condition] || "", O = (lt) => Xt[lt.condition] || lt.condition;
    let j = L(m[0]);
    if (!j) return "";
    let Z = m[0], q = 0;
    for (const lt of m.slice(1))
      q === 2 || O(lt) === O(Z) || !L(lt) || (j += (q ? " and " : ", ") + L(lt) + " from " + b(lt), Z = lt, q++);
    const $ = Number(m[0].temperature), tt = m.filter((lt) => ue(lt.temperature));
    if (ue($) && tt.length) {
      const lt = tt.reduce((Lt, St) => Number(St.temperature) < Number(Lt.temperature) ? St : Lt), Ht = tt.reduce((Lt, St) => Number(St.temperature) > Number(Lt.temperature) ? St : Lt);
      $ - Number(lt.temperature) >= 3 ? j += ", down to " + be(s, lt.temperature) + " by " + b(lt) : Number(Ht.temperature) - $ >= 3 && (j += ", up to " + be(s, Ht.temperature) + " by " + b(Ht));
    }
    return j[0].toUpperCase() + j.slice(1) + ".";
  }
  const fr = (s) => {
    const h = ho(s);
    return h ? '<div class="wbSummary"><p class="wbSummaryText">' + yt(h) + "</p></div>" : "";
  };
  function Vt(s) {
    const [h, m] = Zi[T == null ? void 0 : T()] || Zi.day, b = Date.now(), L = ot("hourly").filter((O) => {
      const j = new Date(O.datetime), Z = j.getHours();
      return j.getTime() > b - oe / 2 && Z >= h && Z < m && ue(O.temperature);
    }).slice(0, 4);
    return L.length ? '<div class="wbNextHours" role="list">' + L.map((O, j) => '<div class="wbHour" role="listitem"><span class="wbHourTime">' + yt(ze(new Date(O.datetime), s)) + "</span>" + fo(O.condition ?? "cloudy", 40, O.is_daytime === !1, "hr" + j) + '<span class="wbHourTemp">' + yt(be(s, O.temperature)) + "</span></div>").join("") + "</div>" : "";
  }
  function xa(s) {
    const h = s.getTime(), m = Date.now() - oe;
    return ot("hourly").filter((b) => {
      const L = new Date(b.datetime).getTime();
      return L >= h && L < h + pa && L > m;
    });
  }
  function Qr(s) {
    if (!s.length) return ["temperature"];
    const h = ["temperature"];
    return s.some((m) => m.precipitation != null || m.precipitation_probability != null) && h.push("precipitation"), s.some((m) => m.humidity != null) && h.push("humidity"), h;
  }
  function ti(s, h, m) {
    const b = sn(new Date(m.datetime)), L = xa(b), O = Qr(L), j = O.includes(ct.dayMode) ? ct.dayMode : "temperature", Z = (q) => q === "humidity" ? gt.humidity : gt.modes[q];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + fo(m.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + yt(va(s, m)) + '</span><span class="wbSub">' + yt(Xe(gt.highLow, { high: be(s, m.temperature), low: be(s, m.templow) })) + '</span></div><button class="wbBack" title="' + yt(gt.back) + '" data-wb="close-day" data-wb-focus="back-day">' + qo(ne.back) + "</button></div>" + (O.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + O.map((q) => '<button aria-pressed="' + (q === j) + '" data-wb="day-mode" data-mode="' + q + '" data-wb-focus="day-mode-' + q + '">' + yt(Z(q)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + f0(Ma(s, h, b, L, j)) + "</div></div>";
  }
  function Ma(s, h, m, b, L) {
    var Mi;
    const O = m.getTime(), j = Date.now(), Z = ir(m, /* @__PURE__ */ new Date()), q = (Qt) => (Qt - O) / qe, $ = (Qt) => ze(new Date(Qt), s), tt = (Qt) => new Date(Qt.datetime).getTime(), lt = [0, 3, 6, 9, 12, 15, 18, 21].map((Qt) => ({ t: Qt * 60, label: $(O + Qt * oe), minor: Qt % 6 !== 0 })), { rise: Ht, set: Lt } = sr(s, m), St = [], jt = [];
    Ht && (St.push({ t: q(Ht.getTime()), label: $(Ht.getTime()), rise: !0 }), jt.push([0, q(Ht.getTime())])), Lt && (St.push({ t: q(Lt.getTime()), label: $(Lt.getTime()), rise: !1 }), jt.push([q(Lt.getTime()), Xr]));
    const At = pr(s);
    !Ht && !Lt && At && ps(new Date(O + pa / 2), At.lat, At.lon) < 0 && jt.push([0, Xr]);
    const pt = Z ? q(j) : void 0, Ot = { hours: lt, sun: St, night: jt };
    if (!b.length && !Z) return { ...Ot, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: gt.noHourly };
    if (L === "precipitation") {
      const Qt = b.some((Ke) => Ke.precipitation_probability != null), eo = b.map((Ke) => ({ t: q(tt(Ke)), v: Number((Qt ? Ke.precipitation_probability : Ke.precipitation) ?? 0) })), ko = rn(s, st(s, "hourly"), "precipitation"), jn = Math.max(0, ...eo.map((Ke) => Ke.v)), zn = Qt ? 100 : np(0, Math.max(jn, 1), [0.5, 1, 2, 5, 10]).max, ki = (Ke) => Qt ? Jt(Ke, s.locale) + "%" : Jt(Ke, s.locale, { maximumFractionDigits: 1 }) + " " + ko, ao = eo.find((Ke) => Ke.v === jn);
      return {
        ...Ot,
        kind: "bars",
        points: eo,
        min: 0,
        max: zn,
        ticks: [0, zn / 2, zn],
        format: ki,
        now: pt !== void 0 ? { t: pt, v: 0 } : void 0,
        peak: ao && jn > 0 ? { t: ao.t + 30, v: ao.v, label: ki(ao.v) } : void 0,
        note: jn > 0 ? void 0 : gt.noRain
      };
    }
    const It = L === "humidity" ? "humidity" : "temperature", he = b.filter((Qt) => Qt[It] != null && (!Z || tt(Qt) >= j)).map((Qt) => ({ t: q(tt(Qt)), v: Number(Qt[It]) }));
    let _t, ce = [];
    if (pt !== void 0) {
      const Qt = Be(s, h, It);
      Qt && ue(Qt.value) && (_t = { t: pt, v: Number(Qt.value) }, he.unshift(_t)), ce = (((Mi = U.todayHistory) == null ? void 0 : Mi.day) === m.toDateString() ? U.todayHistory[It] : []).filter((ko) => ko.time <= j).map((ko) => ({ t: Math.max(0, q(ko.time)), v: ko.value })), _t && ce.length && ce.push(_t);
    }
    const de = [...ce, ...he];
    if (!de.length) return { ...Ot, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: gt.noHourly };
    const ta = de.map((Qt) => Qt.v), Fa = np(Math.min(...ta), Math.max(...ta), It === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    It === "humidity" && (Fa.min = Math.max(0, Fa.min), Fa.max = Math.min(100, Fa.max), Fa.ticks = Fa.ticks.filter((Qt) => Qt >= 0 && Qt <= 100));
    const xi = It === "humidity" ? (Qt) => Jt(Qt, s.locale) + "%" : (Qt) => be(s, Qt), Qo = It === "temperature" ? de.reduce((Qt, eo) => eo.v > Qt.v ? eo : Qt) : void 0;
    return { ...Ot, kind: "line", points: he, past: ce, ...Fa, format: xi, now: _t, peak: Qo ? { ...Qo, label: xi(Qo.v) } : void 0 };
  }
  function Me(s) {
    const h = ["temperature"];
    return s.some((m) => m.precipitation_probability != null || m.precipitation != null) && h.push("precipitation"), s.some((m) => m.wind_speed != null) && h.push("wind"), h;
  }
  function ei(s, h, m = Wd) {
    var O, j;
    const b = ot("daily"), L = [];
    for (let Z = 0; Z < m; Z++) for (const q of [!1, !0]) {
      const $ = s.getTime() + (Z * 24 + (q ? 12 : 0)) * oe, tt = $ + 12 * oe, lt = {};
      h.forEach((Lt) => {
        const St = new Date(Lt.datetime).getTime();
        Lt.condition && St >= $ && St < tt && (lt[Lt.condition] = (lt[Lt.condition] ?? 0) + (km.has(Lt.condition) ? 2 : 1));
      });
      let Ht = (O = Object.entries(lt).sort((Lt, St) => St[1] - Lt[1])[0]) == null ? void 0 : O[0];
      if (!Ht) {
        const Lt = new Date($).toDateString();
        Ht = ((j = b.find((St) => new Date(St.datetime).toDateString() === Lt)) == null ? void 0 : j.condition) ?? "cloudy";
      }
      L.push({ cond: q && Ht === "sunny" ? "clear-night" : Ht, night: q });
    }
    return L;
  }
  function cn(s, h, m) {
    const b = st(s, "hourly"), L = h.precipitation_probability != null ? Jt(h.precipitation_probability, s.locale) + "%" : "", O = h.precipitation ? Jt(h.precipitation, s.locale) + " " + rn(s, b, "precipitation") : "";
    switch (m) {
      case "precipitation":
        return L ? [L, O] : [O || "–", ""];
      case "wind":
        return h.wind_speed != null ? [Jt(Math.round(h.wind_speed), s.locale), rn(s, b, "wind_speed")] : ["–", ""];
      default:
        return [be(s, h.temperature), (h.precipitation_probability ?? 0) >= 20 ? L : ""];
    }
  }
  function ai(s, h, m) {
    const [b, L] = Zi[T == null ? void 0 : T()] || Zi.day, O = [];
    for (let j = 0; j < 4 && O.length < 3; j++) {
      const Z = /* @__PURE__ */ new Date();
      Z.setHours(0, 0, 0, 0), Z.setDate(Z.getDate() + j);
      const q = new Date(Z);
      q.setHours(L, 0, 0, 0), Z.setHours(b, 0, 0, 0), !(q.getTime() <= m || !h.some(($) => {
        const tt = new Date($.datetime).getTime();
        return tt >= Z.getTime() && tt <= q.getTime();
      })) && O.push({ a: Z.getTime(), b: q.getTime(), label: va(s, { datetime: Z.toISOString() }) });
    }
    return O;
  }
  function hr(s, h, m, b, L, O) {
    const j = (m.b - h.a) / oe, Z = (pt) => ((pt - h.a) / oe).toFixed(3), q = 80, $ = 32, tt = [];
    for (const pt = new Date(h.a - pa); pt.getTime() < m.b + pa; pt.setDate(pt.getDate() + 1)) {
      const { rise: Ot, set: It } = sr(s, new Date(pt));
      Ot && It && tt.push({ rise: Ot.getTime(), set: It.getTime() });
    }
    const lt = (pt, Ot) => q - (q - $) * Math.sin(Math.PI * (Ot - pt.rise) / (pt.set - pt.rise)), Ht = (pt) => !tt.some((Ot) => pt >= Ot.rise && pt <= Ot.set);
    let Lt = "", St = "", jt = "";
    tt.forEach((pt, Ot) => {
      const It = [];
      for (let _t = pt.rise; _t <= pt.set; _t += 15 * qe) It.push(Z(_t) + "," + lt(pt, _t).toFixed(2));
      It.push(Z(pt.set) + "," + q), Lt += '<polyline class="wbLineArc" points="' + It.join(" ") + '"/>';
      const he = tt[Ot + 1];
      he && (Lt += '<rect class="wbLineNight" x="' + Z(pt.set) + '" y="0" width="' + ((he.rise - pt.set) / oe).toFixed(3) + '" height="100"/>'), [[pt.rise, "↑"], [pt.set, "↓"]].forEach(([_t, ce]) => {
        _t < h.a || _t > m.b || (St += '<line class="wbLineEdge" x1="' + Z(_t) + '" x2="' + Z(_t) + '" y1="0" y2="100"/>', jt += '<span class="wbLineTime" style="left:' + O(_t) + '">' + ce + " " + yt(ze(new Date(_t), s)) + "</span>");
      });
    });
    const At = tt.find((pt) => L >= pt.rise && L <= pt.set);
    return '<svg class="wbLineArt" viewBox="0 0 ' + j + ' 100" preserveAspectRatio="none" aria-hidden="true">' + Lt + St + '<line class="wbLineHorizon" x1="0" x2="' + j + '" y1="' + q + '" y2="' + q + '"/></svg>' + jt + (At ? '<span class="wbLineNow" style="left:' + O(L) + ";top:" + lt(At, L) + '%">' + Hl("sunny", !1) + "</span>" : "") + b.filter((pt) => pt.entry && !pt.now).map((pt) => '<span class="wbLineGlyph' + pt.edge + '" style="left:' + O(pt.t) + '">' + Hl(pt.entry.condition ?? "cloudy", Ht(pt.t)) + "</span>").join("");
  }
  function oi(s, h) {
    delete Q.hourly;
    const m = ct.hourlyView === "bars" ? "bars" : "strip", b = '<div class="wbHeader"><h2 class="wbTitle">' + yt(m === "bars" ? gt.nextDays : gt.nextHours) + '</h2><div class="wbSegments wbViews" role="group" aria-label="' + yt(gt.showAs) + '">' + ["strip", "bars"].map((_t) => '<button aria-pressed="' + (_t === m) + '" data-wb="hourly-view" data-view="' + _t + '" data-wb-focus="hourly-view-' + _t + '">' + yt(gt.views[_t]) + "</button>").join("") + "</div></div>";
    if (m === "bars") return us(s, h, b);
    const L = ot("hourly"), O = Math.floor(Date.now() / qe) * qe, j = L.filter((_t) => new Date(_t.datetime).getTime() > O - oe);
    if (!j.length) return "";
    const Z = Me(j), q = Z.includes(ct.hourlyMode) ? ct.hourlyMode : "temperature", $ = ai(s, L, O);
    if (!$.length) return "";
    const tt = $[0], lt = $[$.length - 1], Ht = (tt.b - tt.a) / oe, Lt = (_t) => "calc(var(--wb-u) * " + ((_t - tt.a) / oe).toFixed(3) + ")", St = new Date(tt.a);
    St.setHours(6, 0, 0, 0), St.getTime() > tt.a && St.setDate(St.getDate() - 1);
    const jt = Math.ceil((lt.b - St.getTime()) / pa);
    p !== "line" && (Q.hourly = { segs: ei(St, L, jt), seed: St.getDate(), columns: jt });
    const At = (_t) => _t === tt.a ? " wbFirst" : _t === lt.b ? " wbLast" : "", pt = [];
    for (let _t = tt.a; _t < lt.b; ) {
      const ce = new Date(_t);
      ce.setHours(24, 0, 0, 0);
      const de = Math.min(ce.getTime(), lt.b);
      pt.push({ a: _t, b: de, label: va(s, { datetime: new Date(_t).toISOString() }), page: $.find((ta) => ta.a >= _t && ta.a < de) || $.find((ta) => ta.a < de && ta.b > _t) }), _t = de;
    }
    const Ot = O > tt.a && O < lt.b ? Math.floor((O - tt.a) / (2 * oe)) * 2 : 0, It = [];
    for (let _t = tt.a; _t <= lt.b; _t += oe) {
      const ce = new Date(_t), de = At(_t);
      !de && ce.getHours() % vm || !de && (Math.abs(tt.a - _t) < 2 * oe || Math.abs(lt.b - _t) < 2 * oe) || O >= tt.a && Math.abs(_t - O) < 1.5 * oe && !de || It.push({ t: _t, edge: de, label: ze(ce, s), entry: _t >= O - oe ? L.find((ta) => new Date(ta.datetime).getTime() === _t) : void 0 });
    }
    O > tt.a && O < tt.b && It.push({ t: O, edge: O - tt.a < oe ? " wbFirst" : tt.b - O < oe ? " wbLast" : "", label: gt.now, entry: j[0], now: !0 });
    const he = (_t, ce) => '<span class="wbMark' + _t.edge + (_t.now ? " wbNowMark" : "") + '" style="left:' + Lt(_t.t) + '">' + ce + "</span>";
    return '<div class="wbCard wbHc wbHourly">' + b + (Z.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + Z.map((_t) => '<button aria-pressed="' + (_t === q) + '" data-wb="hourly-mode" data-mode="' + _t + '" data-wb-focus="hourly-mode-' + _t + '">' + yt(gt.modes[_t]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll wbPaged" tabindex="0" aria-label="' + yt(gt.nextHours) + '" data-span="' + Ht + '" data-start="' + Ot + '"><div class="wbStrip" style="--wb-u:calc(100cqw / ' + Ht + ");width:calc(var(--wb-u) * " + (lt.b - tt.a) / oe + ')">' + // a stop every two hours (Matt, 1 Nov): a swipe settles on one, a flick runs on past several
    [...Array(Math.floor((lt.b - tt.a) / (2 * oe)) + 1)].map((_t, ce) => '<i class="wbSnap" style="left:' + Lt(tt.a + ce * 2 * oe) + '"></i>').join("") + '<div class="wbDays">' + pt.map((_t, ce) => {
      var de;
      return '<span class="wbDaySpan" style="width:calc(var(--wb-u) * ' + ((_t.b - _t.a) / oe).toFixed(3) + ')"><button class="wbDayName" data-wb="hours-day" data-hours="' + (ce === 0 ? Ot : ((((de = _t.page) == null ? void 0 : de.a) ?? _t.a) - tt.a) / oe) + '" data-wb-focus="hours-day-' + ce + '">' + yt(_t.label) + "</button></span>";
    }).join("") + '</div><div class="wbRow wbTimes">' + It.map((_t) => he(_t, yt(_t.label))).join("") + "</div>" + (p === "line" ? '<div class="wbSky wbLineSky">' + hr(s, tt, lt, It, O, Lt) : '<div class="wbSky"><div class="wbSkyArt" style="left:' + Lt(St.getTime()) + ";width:calc(var(--wb-u) * " + jt * 24 + ')"><canvas data-wb-strip="hourly"' + (p === "smooth" ? "" : ' class="wbPixels"') + "></canvas></div>") + (O > tt.a ? '<i class="wbPast" style="width:' + Lt(Math.min(O, lt.b)) + '"></i><i class="wbNowLine" style="left:' + Lt(O) + '"></i>' : "") + pt.slice(1).map((_t) => '<i class="wbMidnight" style="left:' + Lt(_t.a) + '"></i>').join("") + '</div><div class="wbRow wbValues">' + It.map((_t) => {
      if (!_t.entry) return "";
      const [ce, de] = cn(s, _t.entry, q);
      return he(_t, '<span class="wbPrimaryV">' + yt(ce) + '</span><span class="wbSecondary">' + yt(de) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function zo(s) {
    const h = ym, m = h.findIndex(([q]) => q >= s);
    if (m <= 0) return "rgb(" + h[m < 0 ? h.length - 1 : 0][1].join(",") + ")";
    const [b, L] = h[m - 1], [O, j] = h[m], Z = (s - b) / (O - b);
    return "rgb(" + L.map((q, $) => Math.round(q + (j[$] - q) * Z)).join(",") + ")";
  }
  function us(s, h, m) {
    var Lt;
    const b = ot("daily").filter((St) => ue(St.templow) && ue(St.temperature)).slice(0, 7);
    if (!b.length) return "";
    const L = Math.min(...b.map((St) => Number(St.templow))), O = Math.max(...b.map((St) => Number(St.temperature))), j = Math.max(1, O - L), Z = (St) => Math.max(0, Math.min(100, (St - L) / j * 100)).toFixed(2), q = /F/.test(rn(s, st(s, "daily"), "temperature")), $ = (St) => q ? (St - 32) / 1.8 : St, tt = "linear-gradient(90deg," + [0, 0.25, 0.5, 0.75, 1].map((St) => zo($(L + St * j)) + " " + St * 100 + "%").join(",") + ")", lt = (Lt = Be(s, h, "temperature")) == null ? void 0 : Lt.value;
    return '<div class="wbCard wbHc wbHourly wbBars' + (Me(ot("hourly").filter((St) => new Date(St.datetime).getTime() > Date.now() - oe)).length > 1 ? " wbTabbed" : "") + '">' + m + '<div class="wbDayBars" role="list">' + b.map((St, jt) => {
      const At = va(s, St), pt = ir(new Date(St.datetime), /* @__PURE__ */ new Date()), Ot = Number(St.templow), It = Number(St.temperature);
      return '<div class="wbDayBar" role="listitem" aria-label="' + yt(Xe(gt.rangeRow, { day: At, low: be(s, Ot), high: be(s, It) })) + '"><span class="wbRangeDay">' + yt(At) + "</span>" + fo(St.condition, 40, !1, "r" + jt) + '<span class="wbRangeLo">' + yt(be(s, Ot)) + '</span><span class="wbRangeTrack"><i class="wbRangeFill" style="background:' + tt + ";clip-path:inset(0 " + (100 - Z(It)) + "% 0 " + Z(Ot) + '% round 4px)"></i>' + (pt && ue(lt) ? '<i class="wbRangeNow" style="left:' + Z(Number(lt)) + '%"></i>' : "") + '</span><span class="wbRangeHi">' + yt(be(s, It)) + "</span></div>";
    }).join("") + "</div></div>";
  }
  const Oa = [[-120, "#0d1530"], [-60, "#1c2550"], [-15, "#c9707a"], [30, "#f2a46a"], [60, "#b49bc8"], [90, "#5aa5e6"]], Ce = [[-90, "#5aa5e6"], [-60, "#a99bd0"], [-30, "#f0a54a"], [15, "#c45a5a"], [60, "#3a2a5c"], [120, "#0d1530"]], Rn = (s, h) => {
    if (h <= s[0][0]) return s[0][1];
    for (let m = 1; m < s.length; m++) if (h <= s[m][0]) {
      const [b, L] = s[m - 1], [O, j] = s[m];
      return p0(L, j, (h - b) / (O - b));
    }
    return s[s.length - 1][1];
  }, ni = (s, h, m) => {
    if (!h || !m) return Oa[5][1];
    const b = (s.getTime() - m.getTime()) / qe;
    return b >= -90 ? Rn(Ce, b) : Rn(Oa, (s.getTime() - h.getTime()) / qe);
  }, mr = (s) => (s >= 60 ? Math.floor(s / 60) + "h " : "") + s % 60 + "m";
  function fs(s) {
    const h = Ft, { rise: m, set: b } = sr(s, h), L = m && b ? Math.round((b.getTime() - m.getTime()) / qe) : 0, O = Math.floor(L / 60), j = L % 60, Z = (he) => he ? ze(he, s) : "–", q = new Date(h);
    q.setDate(q.getDate() + 1);
    const $ = sr(s, q), tt = $.rise && $.set ? Math.round(($.set.getTime() - $.rise.getTime()) / qe) : 0, lt = new Date(h);
    lt.setDate(lt.getDate() - 1);
    const Ht = !!(m && b && h >= m && h <= b), Lt = !!(m && h < m), St = Ht ? m : Lt ? sr(s, lt).set : b, jt = Ht ? b : Lt ? m : $.rise, At = St && jt ? Math.min(1, Math.max(0, (h.getTime() - St.getTime()) / (jt.getTime() - St.getTime()))) : 0, pt = jt ? Math.max(0, Math.round((jt.getTime() - h.getTime()) / qe)) : 0, Ot = jt ? mr(pt) : "–", It = Ht ? gt.untilSunset : gt.untilSunrise;
    return oa({
      icon: ne.sunny,
      name: gt.sun,
      sub: L ? Xe(gt.daylightShort, { hours: O, minutes: j }) : void 0,
      cls: "wbSunTile",
      callouts: [[gt.callout.riseTomorrow, Z($.rise)], [gt.callout.setTomorrow, Z($.set)], ...tt ? [[gt.callout.dayTomorrow, Math.floor(tt / 60) + "h " + tt % 60 + "m"]] : []],
      zone: '<div class="wbSunZone" style="background:' + ni(h, m, b) + '"><svg class="wbSunTrack" data-up="' + (Ht ? 1 : 0) + '" data-f="' + At.toFixed(4) + '" aria-hidden="true"></svg><div class="wbSunCount"><span class="wbSunLeft">' + yt(Ot) + '</span><span class="wbSunWord">' + yt(It) + '</span></div><span class="wbSunAt wbSunRise">' + yt(Z(m)) + '</span><span class="wbSunAt wbSunSet">' + yt(Z(b)) + "</span></div>" + // at M, the countdown alone (Matt, 10 Nov): M's zone has room for one line
      Ji(Ra(Ot, ""))
    });
  }
  const ri = 22;
  function zt(s) {
    const h = Math.round(s.clientWidth), m = Math.round(s.clientHeight), b = ri, L = b / 2, O = h + "x" + m + ":" + s.dataset.f + ":" + s.dataset.up;
    if (h < b * 3 || m < b * 3 || s.dataset.drawn === O) return;
    s.dataset.drawn = O;
    const j = "M" + L + " " + (m - b) + "V" + b + "A" + L + " " + L + " 0 0 1 " + b + " " + L + "H" + (h - b) + "A" + L + " " + L + " 0 0 1 " + (h - L) + " " + b + "V" + (m - b), Z = "M" + (h - L) + " " + (m - b) + "A" + L + " " + L + " 0 0 1 " + (h - b) + " " + (m - L) + "H" + b + "A" + L + " " + L + " 0 0 1 " + L + " " + (m - b), q = 16, $ = 6, tt = "M" + q + " 0H" + (h - q) + "A" + q + " " + q + " 0 0 1 " + h + " " + q + "V" + (m - q) + "A" + q + " " + q + " 0 0 1 " + (h - q) + " " + m + "H" + q + "A" + q + " " + q + " 0 0 1 0 " + (m - q) + "V" + q + "A" + q + " " + q + " 0 0 1 " + q + " 0ZM" + (b + $) + " " + b + "A" + $ + " " + $ + " 0 0 0 " + b + " " + (b + $) + "V" + (m - b - $) + "A" + $ + " " + $ + " 0 0 0 " + (b + $) + " " + (m - b) + "H" + (h - b - $) + "A" + $ + " " + $ + " 0 0 0 " + (h - b) + " " + (m - b - $) + "V" + (b + $) + "A" + $ + " " + $ + " 0 0 0 " + (h - b - $) + " " + b + "Z", lt = s.dataset.up === "1", Ht = Number(s.dataset.f) || 0, Lt = "http://www.w3.org/2000/svg";
    s.setAttribute("viewBox", "0 0 " + h + " " + m);
    const St = document.createElementNS(Lt, "path");
    St.setAttribute("d", lt ? j : Z), s.replaceChildren(St);
    const jt = St.getTotalLength(), At = St.getPointAtLength(jt * Ht), pt = lt ? jt : 0;
    s.innerHTML = '<defs><mask id="' + M + 'sun-day"><path d="' + j + '" fill="none" stroke="#fff" stroke-width="' + b * 2 + '"></path></mask><mask id="' + M + 'sun-done"><path d="' + j + '" fill="none" stroke="#fff" stroke-width="' + b * 2 + '" stroke-dasharray="' + (lt ? (pt * Ht).toFixed(1) + " " + (pt + 1).toFixed(1) : "0 99999") + '"></path></mask></defs><path class="wbSunBand" fill-rule="evenodd" d="' + tt + '"></path><path class="wbSunBand wbSunDay" fill-rule="evenodd" d="' + tt + '" mask="url(#' + M + 'sun-day)"></path><path class="wbSunBand wbSunDone" fill-rule="evenodd" d="' + tt + '" mask="url(#' + M + 'sun-done)"></path><circle class="wbSunDot' + (lt ? "" : " wbSunNight") + '" cx="' + At.x.toFixed(1) + '" cy="' + At.y.toFixed(1) + '" r="' + L + '"></circle>';
  }
  const mt = typeof ResizeObserver == "function" ? new ResizeObserver((s) => s.forEach((h) => zt(h.target))) : null;
  function fe() {
    mt == null || mt.disconnect(), D.querySelectorAll("svg.wbSunTrack").forEach((s) => {
      zt(s), mt == null || mt.observe(s);
    });
  }
  function Wt(s, h, m) {
    const b = (j) => M + "moon-" + j, L = s > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + b("terminator") + ')" d="' + u0(61, 61, 57.9, s) + '"' + (h ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", O = (j, Z, q, $, tt, lt) => '<filter id="' + b(j) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + Z + '" numOctaves="' + q + '" seed="' + $ + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((Ht) => "<feFunc" + Ht + ' type="linear" slope="' + tt + '" intercept="' + lt + '"></feFunc' + Ht + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + b("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + b("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + b("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + b("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + b("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + O("mottle", "0.045", 4, 3, 1.8, -0.4) + O("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + b("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + b("fill") + ')"></circle><g' + (m ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + b("soften") + ')">' + m0.map(([j, Z, q, $, tt, lt]) => '<ellipse cx="' + j + '" cy="' + Z + '" rx="' + q + '" ry="' + $ + '" fill-opacity="' + lt + '" transform="rotate(' + tt + " " + j + " " + Z + ')"></ellipse>').join("") + "</g>" + g0.map(([j, Z, q]) => '<circle class="wbCrater" cx="' + j + '" cy="' + Z + '" r="' + q + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + b("glow") + ')">' + b0.map(([j, Z]) => '<line x1="54.4" y1="95" x2="' + j + '" y2="' + Z + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + b("glow") + ')">' + ip.map(([j, Z, q]) => '<circle cx="' + j + '" cy="' + Z + '" r="' + q * 2 + '"></circle>').join("") + "</g>" + ip.map(([j, Z, q]) => '<circle class="wbBrightCenter" cx="' + j + '" cy="' + Z + '" r="' + q + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + b("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + b("grain") + ')"></rect>' + L + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function Re(s) {
    const h = V, m = pr(s), b = (m == null ? void 0 : m.lat) ?? 0, L = Ol(h), O = op(s), j = O ? s.states[O] : void 0, Z = En(j) && Nm.includes(j.state) ? j.state : o0(L.phase), { rise: q, set: $ } = m ? a0(h, m.lat, m.lon) : {}, tt = L.phase > 0.5 != b < 0, lt = Jt(Math.round(L.fraction * 100), s.locale) + "%", Ht = q ?? $;
    return Ht && ze(Ht, s), oa({
      icon: ne.night,
      name: gt.moon,
      sub: gt.phases[Z],
      callouts: [...q ? [[gt.callout.moonrise, ze(q, s)]] : [], ...$ ? [[gt.callout.moonset, ze($, s)]] : [], [gt.callout.lit, lt]],
      // at M, how much of it is lit (Matt, 10 Nov)
      zone: '<div class="wbMoonBox">' + Wt(L.fraction, tt, b < 0) + "</div>" + Ji(Ra(Jt(Math.round(L.fraction * 100), s.locale), "%"))
    });
  }
  function mo(s, h) {
    var St;
    const m = Be(s, h, "wind_speed");
    if (!m || !ue(m.value)) return "";
    const b = Be(s, h, "wind_gust_speed"), L = Be(s, h, "wind_bearing"), O = L && ue(L.value) ? Number(L.value) : void 0, j = s0(Number(m.value), (St = m.stateObj.attributes) == null ? void 0 : St.wind_speed_unit), Z = is(s, m.stateObj, "wind_speed", m.value), q = O !== void 0 ? gt.cardinal[Hm[((O + 11.25) / 22.5 | 0) % 16]] : void 0, $ = b ? tp(s, b.stateObj, "wind_gust_speed", b.value) : void 0, tt = [q ? Xe(gt.windFrom, { direction: q }) : void 0, j !== void 0 ? j + " " + gt.beaufort : void 0].filter(Boolean).join(" · ") || $, lt = (jt, At) => {
      const pt = (jt - 90) * Math.PI / 180;
      return [100 + At * Math.cos(pt), 100 + At * Math.sin(pt)];
    }, Ht = Array.from({ length: 36 }, (jt, At) => At * 10).map((jt) => {
      const At = jt % 90 === 0, [pt, Ot] = lt(jt, 97), [It, he] = lt(jt, At ? 83 : 89);
      return '<line class="wbTick' + (At ? " wbMajor" : "") + '" x1="' + pt + '" y1="' + Ot + '" x2="' + It + '" y2="' + he + '"></line>';
    }).join(""), Lt = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([jt, At]) => {
      const [pt, Ot] = lt(At, 64);
      return '<text class="wbLetter' + (jt === "n" ? " wbNorth" : "") + '" x="' + pt + '" y="' + Ot + '">' + yt(gt.cardinal[jt]) + "</text>";
    }).join("");
    return oa({ icon: ne.windy, name: gt.wind, sub: tt, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + Ht + Lt + (O !== void 0 ? '<path class="wbMarker" transform="rotate(' + O + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + yt(Z.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + yt(Z.unit) + "</text></svg>" });
  }
  const gr = (s, h) => {
    if (s < 3) return gt.advice.fine;
    if (s < 8) return gt.advice.sunblock;
    const m = Date.now(), b = ot("hourly").find((L) => L.uv_index != null && new Date(L.datetime).getTime() > m && L.uv_index < 6);
    return b && new Date(b.datetime).toDateString() === (/* @__PURE__ */ new Date()).toDateString() ? Xe(gt.advice.avoidUntil, { time: ze(new Date(b.datetime), h) }) : gt.advice.avoidToday;
  };
  function hs(s, h) {
    const m = Be(s, h, "uv_index");
    if (!m || !ue(m.value)) return "";
    const b = Number(m.value), L = gt.uvLevel[ep(b)], O = /* @__PURE__ */ new Date();
    O.setHours(23, 59, 59, 999);
    const j = ot("hourly").filter((tt) => tt.uv_index != null && new Date(tt.datetime) > /* @__PURE__ */ new Date() && new Date(tt.datetime) <= O).reduce((tt, lt) => !tt || lt.uv_index > tt.uv ? { uv: lt.uv_index, time: new Date(lt.datetime) } : tt, void 0), Z = Om[ep(b)], q = 216 * Math.min(1, Math.max(0.08, 0.4 + (b - 4.5) * (0.5 / 5.5))), $ = '<svg class="wbUvArt" viewBox="0 0 216 198" preserveAspectRatio="xMinYMin slice" aria-hidden="true"><defs><radialGradient id="' + M + 'uv-sun" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="' + q.toFixed(1) + '"><stop offset="0" style="stop-color:color-mix(in srgb, ' + Z + ' 28%, #fff6dd)"></stop><stop offset=".62" style="stop-color:color-mix(in srgb, ' + Z + ' 62%, #fff6dd)"></stop><stop offset="1" style="stop-color:' + Z + '"></stop></radialGradient></defs><circle class="wbUvSun" cx="0" cy="0" r="' + q.toFixed(1) + '" fill="url(#' + M + 'uv-sun)"></circle></svg><div class="wbUvBig"><span class="wbUvNum">' + yt(Jt(Math.round(b), s.locale)) + '</span><span class="wbUvWord">' + yt(L) + "</span></div>" + Ji(Ra(Jt(Math.round(b), s.locale), ""));
    return oa({
      icon: ne.sunnyAlert,
      name: gt.metrics.uv_index,
      sub: j && j.uv > b ? Xe(gt.uvPeak, { level: L, uv_index: Jt(Math.round(j.uv), s.locale), time: ze(j.time, s) }) : L,
      zone: $,
      cls: "wbUv",
      callouts: [gr(b, s), [gt.callout.now, Jt(Math.round(b), s.locale) + " · " + L], [gt.callout.peak, j && j.uv > b ? Jt(Math.round(j.uv), s.locale) + " at " + ze(j.time, s) : gt.callout.now]]
    });
  }
  function br(s) {
    const h = ot("daily")[0], m = U.temperatureHistory;
    if (!h || new Date(h.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !ue(h.temperature) || !m || m.dailyHighs.length < Cm) return "";
    const b = Number(h.temperature), L = m.dailyHighs.reduce((At, pt) => At + pt, 0) / m.dailyHighs.length, O = Math.round(b - L) || 0, j = O > 0 ? "above" : O < 0 ? "below" : "same", Z = [...m.days, { date: /* @__PURE__ */ new Date(), high: b, today: !0 }], q = Z.map((At) => At.high).concat(L), $ = Math.min(...q) - 1, tt = Math.max(...q) + 1, lt = (At) => (1 - (At - $) / (tt - $)) * 100, Ht = (At) => (At + 0.5) / Z.length * 100, Lt = Z.map((At, pt) => [Ht(pt), lt(At.high)]), St = Lt.map(([At, pt], Ot) => (Ot ? "L" : "M") + At.toFixed(2) + " " + pt.toFixed(2)).join(""), jt = '<div class="wbCompareBars wbTrend" aria-hidden="true"><div class="wbTrendPlot"><svg viewBox="0 0 100 100" preserveAspectRatio="none"><defs><linearGradient id="' + M + 'trend" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--primary)" stop-opacity=".28"></stop><stop offset="1" style="stop-color:var(--primary)" stop-opacity="0"></stop></linearGradient></defs><path class="wbTrendArea" d="' + St + "L" + Lt[Lt.length - 1][0].toFixed(2) + " 100L" + Lt[0][0].toFixed(2) + ' 100Z" fill="url(#' + M + 'trend)"></path><line class="wbAvgLine" x1="0" x2="100" y1="' + lt(L).toFixed(2) + '" y2="' + lt(L).toFixed(2) + '" vector-effect="non-scaling-stroke"></line><path class="wbTrendLine" d="' + St + '" vector-effect="non-scaling-stroke"></path></svg><span class="wbTrendAvg" style="top:' + lt(L).toFixed(2) + '%">' + yt(be(s, L)) + "</span>" + Z.map((At, pt) => {
      const Ot = At.today ? " wbToday" : "", It = "left:" + Ht(pt).toFixed(2) + "%;top:" + lt(At.high).toFixed(2) + "%";
      return '<i class="wbTrendDot' + Ot + '" style="' + It + '"></i><span class="wbAvgValue' + Ot + '" style="' + It + '">' + yt(be(s, At.high)) + "</span>";
    }).join("") + '</div><div class="wbTrendDays">' + Z.map((At, pt) => '<span class="wbAvgDay' + (At.today ? " wbToday" : "") + '" style="left:' + Ht(pt).toFixed(2) + '%">' + yt(Um(At.date, s)) + "</span>").join("") + "</div></div>";
    return oa({
      icon: ne.chartLine,
      name: gt.metrics.compared_to_average,
      double: !0,
      sub: Xe(gt.highsLastDays, { days: m.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (O > 0 ? "+" : "") + yt(be(s, O)) + '</div><div class="wbCompareWords">' + yt(gt.average[j]) + '</div><div class="wbCompareTemps">' + yt(Xe(gt.todayVsAverage, { today: be(s, b), average: be(s, L) })) + "</div></div>" + jt + "</div>"
    });
  }
  function ii(s, h) {
    const m = Be(s, h, "humidity");
    if (!m || !ue(m.value)) return "";
    const b = Be(s, h, "dew_point"), L = Math.max(0, Math.min(100, Number(m.value)));
    return oa({
      icon: ne.waterPercent,
      name: gt.metrics.humidity,
      sub: b && ue(b.value) ? Xe(gt.dewPoint, { dew_point: be(s, b.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + L + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + Ra(Jt(Math.round(Number(m.value)), s.locale), "%") + "</div>"
    });
  }
  function ms(s, h) {
    var At, pt, Ot;
    const m = Be(s, h, "pressure");
    if (!m || !ue(m.value)) return "";
    const b = Number(m.value), L = (At = m.stateObj.attributes) == null ? void 0 : At.pressure_unit, O = ap(b, L), j = ((pt = U.pressureHistory) == null ? void 0 : pt.entityId) === m.stateObj.entity_id ? ap(U.pressureHistory.value, L) : void 0;
    let Z;
    if (O !== void 0 && j !== void 0) {
      const It = O - j;
      Z = It >= zd ? "rising" : It <= -zd ? "falling" : "steady";
    }
    const q = is(s, m.stateObj, "pressure", Math.round(b)), $ = m.stateObj, tt = (It) => L === "inHg" ? Math.round(It * 100) / 100 : Math.round(It), lt = (It) => tp(s, $, "pressure", tt(It)), Ht = j !== void 0 ? U.pressureHistory.value : void 0, Lt = Ht !== void 0 ? tt(b - Ht) : void 0, St = (Ot = $.entity_id) != null && Ot.startsWith("weather.") ? ot("hourly").find((It) => ue(It.pressure) && new Date(It.datetime).getTime() >= Date.now() + 3 * oe - 30 * qe) : void 0, jt = [
      ...Z ? [gt.advice[Z]] : [],
      ...Ht !== void 0 ? [[gt.callout.hoursAgo, lt(Ht)], [gt.callout.change, (Lt > 0 ? "+" : Lt < 0 ? "−" : "") + lt(Math.abs(Lt))]] : [],
      ...St ? [[gt.callout.inHours, lt(Number(St.pressure))]] : []
    ];
    return oa({
      icon: ne.gauge,
      name: gt.metrics.pressure,
      sub: Z ? gt.pressure[Z] : void 0,
      cls: "wbPressure",
      callouts: jt,
      zone: '<div class="wbTapeRow"><div class="wbTapeValue">' + Ra(q.number) + '<span class="wbTapeUnit">' + yt(q.unit) + "</span></div>" + (O !== void 0 ? gs(s, O) : "") + "</div>"
    });
  }
  function gs(s, h) {
    const L = Math.floor(h) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (O, j) => L + j).map((O) => {
      const j = 100 - (O - h) * 9;
      if (j < 22 || j > 178) return "";
      const Z = O % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(j - 100) / 100) + '"><line class="wbTapeTick" x1="' + (Z ? 2 : 8) + '" x2="26" y1="' + j + '" y2="' + j + '"></line>' + (Z ? '<text class="wbTapeLabel" x="33" y="' + j + '">' + yt(Jt(O, s.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + yt(gt.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + yt(gt.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function Go(s) {
    var q, $;
    const h = Il(s), m = h ? s.states[h] : void 0;
    if (!m || ((q = U.rain) == null ? void 0 : q.entityId) !== h || !ue(U.rain.change)) return "";
    const b = (($ = m.attributes) == null ? void 0 : $.unit_of_measurement) ?? "", L = st(s, "hourly"), O = Date.now() + pa, j = ot("hourly").filter((tt) => tt.precipitation != null && new Date(tt.datetime).getTime() <= O), Z = j.reduce((tt, lt) => tt + Number(lt.precipitation), 0);
    return oa({
      icon: ne.rainy,
      name: gt.metrics.precipitation,
      sub: L && j.length ? Xe(gt.rainExpected, { amount: Jt(Z, s.locale, { maximumFractionDigits: 1 }) + " " + rn(s, L, "precipitation") }) : gt.rainLast24h,
      visual: Ra(Jt(U.rain.change, s.locale, { maximumFractionDigits: 1 }), b) + (j.length > 1 ? h0(j.map((tt) => ({ label: "", value: Number(tt.precipitation) }))) : "")
    });
  }
  function si(s, h) {
    const m = Be(s, h, "visibility");
    if (!m || !ue(m.value)) return "";
    const b = is(s, m.stateObj, "visibility", m.value), L = rm(Number(m.value), rn(s, m.stateObj, "visibility"));
    return oa({
      icon: ne.eyeOutline,
      name: gt.metrics.visibility,
      sub: gt.visibilityLevel[im(L)],
      visual: '<div class="wbSea"><canvas class="wbSeaArt" data-wb-sea="' + L + '" aria-hidden="true"></canvas><div class="wbSeaFact">' + yt(bs(s, L)) + '</div><div class="wbSeaValue">' + Ra(b.number, b.unit) + "</div></div>"
    });
  }
  function bs(s, h) {
    var O;
    const m = nm((O = s.config) == null ? void 0 : O.country, h);
    if (m) return Xe(gt.visibilityLandmarks, { from: m.from, to: m.to });
    const b = h / Lm * 60;
    if (b < 60) {
      const j = b < 5 ? Math.max(1, Math.round(b)) : 5 * Math.round(b / 5);
      if (j < 60) return Xe(gt.walkMinutes, { minutes: Jt(j, s.locale) });
    }
    const L = Math.max(1, Math.round(b / 30) / 2);
    return L < 8 ? Xe(gt.walkHours, { hours: Jt(L, s.locale) }) : gt.walkDay;
  }
  function dn(s) {
    U.categories === void 0 && wt(s);
    const h = _e(s), m = (q) => q.map(($) => s.states[$]).filter(En), b = m(h.air), L = m(h.pollen);
    if (!b.length && !L.length) return "";
    const O = [...b, ...L], j = (q) => L.includes(q) ? ne.flower : ne.airFilter, Z = O.find((q) => q.entity_id === ct.aq);
    return Z ? wr(s, Z, j(Z)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + yt(gt.airQuality) + '</h2></div><div class="wbAqTiles">' + O.map((q) => '<button class="wbTile" data-wb="aq-open" data-entity="' + yt(q.entity_id) + '"><span class="wbChip">' + qo(j(q)) + '</span><span class="wbText"><span class="wbName">' + yt(on(s, q)) + '</span><span class="wbSub">' + yt(Oo(s, q)) + "</span></span></button>").join("") + "</div></div>";
  }
  function wr(s, h, m) {
    var tt, lt, Ht;
    const b = ((tt = h.attributes) == null ? void 0 : tt.unit_of_measurement) ?? "", L = ((lt = h.attributes) == null ? void 0 : lt.device_class) === "pm25" && b === Zd && ue(h.state), O = Number(h.state), j = L ? $i(O) : void 0, Z = ((Ht = U.aqHistory) == null ? void 0 : Ht.entityId) === h.entity_id ? U.aqHistory.points : void 0, q = (Lt) => Math.min(100, Math.max(0, Lt / Xi * 100));
    let $;
    if (Z && Z.length > 1) $ = rp(Z, (Lt) => (Jt(Lt, s.locale, { maximumFractionDigits: 1 }) + " " + b).trim());
    else if (j) {
      let Lt = 0;
      const St = eu.map(([jt, At]) => {
        const pt = q(Math.min(At, Xi)), Ot = Yd[jt] + " " + Lt + "% " + pt + "%";
        return Lt = pt, Ot;
      });
      $ = '<div class="wbScale" role="meter" aria-label="' + yt(gt.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + Xi + '" aria-valuenow="' + O + '" style="background:linear-gradient(to right, ' + St.join(", ") + ')"><i style="left:' + q(O) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + Xi + " " + Zd + "</span></div>";
    } else $ = '<span class="wbGraphNote"><span>' + yt(Oo(s, h)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + qo(m) + '</span><span class="wbText"><span class="wbName">' + yt(on(s, h)) + '</span><span class="wbSub">' + yt(Oo(s, h)) + (j ? " · " + yt(gt.aqLevel[j]) : "") + '</span></span><button class="wbBack" title="' + yt(gt.back) + '" data-wb="aq-close">' + qo(ne.back) + '</button></div><div class="wbGraph">' + $ + "</div></div></div>";
  }
  const Pn = { good: "Good", fair: "Fair", moderate: "Moderate", poor: "Poor", very_poor: "Very poor", extremely_poor: "Extremely poor" }, li = (s) => s <= 50 ? "Good" : s <= 100 ? "Moderate" : s <= 150 ? "Unhealthy for some" : s <= 200 ? "Unhealthy" : s <= 300 ? "Very unhealthy" : "Hazardous";
  function go(s) {
    const h = /* @__PURE__ */ new Map();
    return Object.values(s.states || {}).filter((m) => {
      var b;
      return m.entity_id.startsWith("sensor.") && cs.includes(((b = m.attributes) == null ? void 0 : b.device_class) ?? "") && En(m) && ur(s, m.entity_id);
    }).sort((m, b) => m.entity_id.localeCompare(b.entity_id)).forEach((m) => {
      h.has(m.attributes.device_class) || h.set(m.attributes.device_class, m);
    }), cs.map((m) => h.get(m)).filter(Boolean);
  }
  const vr = (s) => Object.values(s.states || {}).filter((h) => {
    var m, b;
    return h.entity_id.startsWith("sensor.") && En(h) && ur(s, h.entity_id) && (((b = (m = s.entities) == null ? void 0 : m[h.entity_id]) == null ? void 0 : b.translation_key) ?? h.entity_id).toLowerCase().includes("pollen");
  }), Ka = ["none", "very_low", "low", "moderate", "high", "very_high"], Uo = (s) => ue(s.state) ? Number(s.state) : Ka.indexOf(String(s.state).toLowerCase().replace(/ /g, "_")), Xa = (s) => {
    const h = String(s).replace(/_/g, " ");
    return h[0].toUpperCase() + h.slice(1);
  }, $a = (s, h, m) => {
    const b = m ? s === "aqi" ? h <= 50 ? "good" : h <= 100 ? "moderate" : "poor" : s === "pm25" ? $i(h) : null : null;
    return b === "good" || b === "fair" ? gt.advice.window : b === "moderate" || b === null ? gt.advice.fine : gt.advice.closed;
  }, Hn = ["good", "fair", "moderate", "poor", "very_poor", "extremely_poor"], Ja = (s) => Hn[s <= 50 ? 0 : s <= 100 ? 1 : s <= 150 ? 2 : s <= 200 ? 3 : s <= 300 ? 4 : 5], Nn = "M43 43q1 8 0 10M77 42q1 8 -1 10", ka = {
    good: [Nn, "M34 69Q61 98 86 67"],
    fair: [Nn, "M40 74Q61 89 81 72"],
    moderate: [Nn, "M41 79Q60 76 80 81"],
    poor: [Nn, "M41 85Q60 73 80 86"],
    very_poor: ["M36 38l13 5M84 37l-13 5M43 48q1 7 0 9M77 47q1 7 -1 9", "M37 90Q60 64 84 89"],
    extremely_poor: ["M37 41l12 11M49 41l-12 11M71 40l12 11M83 40l-12 11", "M36 84q6 -8 12 0t12 0t12 0t12 0"]
  }, pn = (s) => '<svg class="wbAqFace" viewBox="0 0 120 120" aria-hidden="true"><path d="M60 9C89 8 112 32 110 61C109 90 87 112 58 111C30 110 9 88 10 59C11 31 33 10 63 12"></path><path class="wbAqEyes" d="' + ka[s][0] + '"></path><path d="' + ka[s][1] + '"></path></svg>';
  function yr(s) {
    const h = go(s), m = h[0];
    if (!m) return oa({ icon: ne.airFilter, name: gt.airQuality, sub: gt.noAir, visual: Ra("–", ""), cls: "wbBase" });
    const b = m.attributes.device_class, L = Number(m.state), O = ue(m.state), j = b === "aqi" && O ? li(L) : b === "pm25" && O ? Pn[$i(L)] : Oo(s, m), Z = O ? Jt(Math.round(L), s.locale) : String(m.state), q = b === "aqi" ? "AQI" : m.attributes.unit_of_measurement || "", $ = O && b === "aqi" ? Ja(L) : O && b === "pm25" ? $i(L) : null;
    return oa($ ? {
      icon: ne.airFilter,
      name: gt.airQuality,
      sub: j,
      cls: "wbAqSmile",
      zone: '<div class="wbAqFill" style="background:' + Yd[$] + '">' + pn($) + '<div class="wbAqBig"><span class="wbAqNum">' + yt(Z) + "</span>" + (q ? '<span class="wbAqUnit">' + yt(q) + "</span>" : "") + "</div></div>" + Ji(Ra(Z, q)),
      callouts: [$a(b, L, O), ...h.slice(1, 3).map((tt) => [on(s, tt), Oo(s, tt)])]
    } : {
      icon: ne.airFilter,
      name: gt.airQuality,
      sub: j,
      cls: "wbBase",
      zone: Ra(Z, q),
      callouts: [$a(b, L, O), ...h.slice(1, 3).map((tt) => [on(s, tt), Oo(s, tt)])]
    });
  }
  const He = [
    ["wbSeed", '<svg viewBox="0 0 22 30" aria-hidden="true"><path d="M11 28V11" fill="none" stroke="currentColor" stroke-width="1"></path><path d="M11 11L3 6M11 11L5 2.5M11 11L8.5 1M11 11L13.5 1M11 11L17 2.5M11 11L19 6" fill="none" stroke="currentColor" stroke-width=".8" stroke-linecap="round"></path><circle cx="11" cy="28.5" r="1.4" fill="currentColor"></circle></svg>'],
    ["wbGrain", '<svg viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="3.3" fill="currentColor"></circle><path d="M6 1.2v1.4M6 9.4v1.4M1.2 6h1.4M9.4 6h1.4M2.6 2.6l1 1M8.4 8.4l1 1M2.6 9.4l1-1M8.4 3.6l1-1" stroke="currentColor" stroke-width=".9" stroke-linecap="round"></path></svg>'],
    ["wbStem", '<svg viewBox="0 0 10 30" aria-hidden="true"><path d="M5 29Q3.6 18 5 8" fill="none" stroke="currentColor" stroke-width="1"></path><ellipse cx="5" cy="6" rx="2.3" ry="4.6" fill="currentColor"></ellipse></svg>']
  ], xr = (s) => {
    const h = [1, 3, 5, 7, 10, 13][Math.max(0, Math.min(5, Number.isFinite(s) ? Math.round(s) : 0))];
    return '<div class="wbPollenAir" aria-hidden="true">' + Array.from({ length: h }, (m, b) => {
      const [L, O] = He[b % 3], j = 10 + b * 7 % 9, Z = 2.6 + b * 5 % 4 * 0.4;
      return '<span class="wbFloat ' + L + '" style="top:' + (4 + b * 37 % 52) + "%;--x:" + (b * 29 % 90 + 4) + "%;--s:" + (0.8 + b * 13 % 5 / 10).toFixed(1) + ";animation-duration:" + j + "s;animation-delay:-" + (b * 2.3 % j).toFixed(1) + 's"><span class="wbPush"><span class="wbBob" style="animation-duration:' + Z.toFixed(1) + "s;animation-delay:-" + (b * 0.7 % Z).toFixed(1) + 's">' + O + "</span></span></span>";
    }).join("") + "</div>";
  };
  function bo(s) {
    const h = vr(s).sort((L, O) => Uo(O) - Uo(L));
    if (!h.length) return oa({ icon: ne.flower, name: gt.pollen, sub: gt.noPollen, visual: Ra("–", ""), cls: "wbBase" });
    const m = h[0], b = (L) => ue(L.state) ? Oo(s, L) : Xa(L.state);
    return oa({
      icon: ne.flower,
      name: gt.pollen,
      sub: on(s, m) + " · " + b(m),
      cls: "wbBase wbPollen",
      zone: xr(Uo(m)) + Ra(b(m), ""),
      callouts: h.slice(0, 3).map((L) => [on(s, L), b(L)])
    });
  }
  function ci(s) {
    var Z;
    const h = Date.now(), m = ot("hourly").filter((q) => {
      const $ = new Date(q.datetime).getTime();
      return $ > h - oe && $ < h + 12 * oe;
    }), b = m.find((q) => (q.precipitation_probability ?? 0) >= 50 || (q.precipitation ?? 0) >= 0.2), L = b ? Xe(gt.rainFrom, { time: ze(new Date(Math.max(h, new Date(b.datetime).getTime())), s) }) : m.length ? gt.noRain12 : void 0, O = (W == null ? void 0 : W()) || "rainviewer";
    let j;
    if (O.startsWith("camera:")) {
      const q = s.states[O.slice(7)], $ = q && q.state !== "unavailable" && ((Z = q.attributes) == null ? void 0 : Z.entity_picture);
      j = $ ? '<div class="wbRadar wbRadarCam" aria-hidden="true"><img class="wbRadarImg" src="' + yt($) + '" data-src="' + yt($) + '" alt=""></div>' : '<div class="wbRadar" aria-hidden="true"><span class="wbRadarNote">' + yt(gt.cameraOff) + "</span></div>";
    } else {
      const q = pr(s);
      j = q ? '<div class="wbRadar wbRadarMap" aria-hidden="true" data-lat="' + q.lat + '" data-lon="' + q.lon + '"><i class="wbRadarHome"></i></div>' : '<div class="wbRadar" aria-hidden="true"><i class="wbRadarRing"></i><i class="wbRadarHome"></i><span class="wbRadarNote">' + yt(gt.noLocation) + "</span></div>";
    }
    return oa({ icon: ne.radar, name: gt.rainRadar, sub: L, cls: "wbBase wbRadarTile", visual: j });
  }
  const di = {
    current: Jr,
    hourly: oi,
    sun: fs,
    moon: Re,
    wind: mo,
    uv_index: hs,
    compared_to_average: br,
    humidity: ii,
    pressure: ms,
    precipitation: Go,
    visibility: si,
    air_quality: dn,
    aq_tile: yr,
    pollen_tile: bo,
    radar_tile: ci
  }, Mr = [["day", "Last 24 hours", 1], ["week", "Last 7 days", 7], ["month", "Last 30 days", 30]], un = (s, h) => {
    var m;
    return h.toLocaleDateString((m = s.locale) == null ? void 0 : m.language, { day: "numeric", month: "short" });
  }, kr = (s) => {
    const h = new Date(s);
    return h.setMinutes(h.getMinutes() - h.getTimezoneOffset()), h.toISOString().slice(0, 10);
  }, wo = () => {
    const s = ct.range, h = Date.now();
    if (s.preset !== "custom") {
      const L = Mr.find(([O]) => O === s.preset)[2];
      return [h - L * pa, h];
    }
    const m = sn(/* @__PURE__ */ new Date(s.from + "T00:00")).getTime(), b = Math.min(h, sn(/* @__PURE__ */ new Date(s.to + "T00:00")).getTime() + pa);
    return [Math.min(m, b - oe), b];
  }, pi = (s) => {
    const h = ct.range;
    if (h.preset !== "custom") return Mr.find(([L]) => L === h.preset)[1];
    const [m, b] = wo();
    return h.from === h.to ? un(s, new Date(m)) : un(s, new Date(m)) + " – " + un(s, new Date(b - 1));
  }, Sr = () => ct.range.preset === "custom" ? ct.range.from + "_" + ct.range.to : ct.range.preset, _r = (s, h) => h - s <= 2 * pa, ve = (s, h, m, b) => _r(m, b) ? ze(h, s) : un(s, h), Sa = (s, h = 60) => {
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
    const O = Be(h, m, s);
    if (!O) return [];
    const j = O.stateObj.entity_id, Z = await Et(h, j, b, L);
    return Sa(((Z == null ? void 0 : Z[j]) ?? []).map((q) => {
      var lt;
      const $ = ((lt = q.a) == null ? void 0 : lt[s]) ?? (ue(q.s) ? Number(q.s) : void 0), tt = (q.lu ?? q.lc) * 1e3;
      return typeof $ == "number" && tt >= b && tt <= L ? { t: new Date(tt), value: $ } : null;
    }).filter(Boolean)).map((q) => ({ label: ve(h, q.t, b, L), value: q.value }));
  }, fn = (s, h) => async (m, b, L, O) => {
    const j = s(m);
    if (!j) return [];
    const Z = j.entity_id, q = await Et(m, Z, L, O, !0);
    return Sa(((q == null ? void 0 : q[Z]) ?? []).map(($) => {
      const tt = h($.s), lt = $.lu * 1e3;
      return tt == null || !Number.isFinite(tt) || lt < L || lt > O ? null : { t: new Date(lt), value: tt };
    }).filter(Boolean)).map(($) => ({ label: ve(m, $.t, L, O), value: $.value }));
  }, Cr = (s, h) => async (m, b, L, O) => {
    const j = pr(m);
    if (!j) return [];
    const Z = [];
    if (_r(L, O)) for (let q = L; q <= O; q += oe / 2) Z.push({ label: ze(new Date(q), m), value: s(new Date(q), j) });
    else for (let q = O; q >= L; q -= pa) {
      const $ = new Date(q), tt = h($, j, m);
      tt != null && Z.unshift({ label: un(m, $), value: tt });
    }
    return Sa(Z);
  }, Qa = (s) => vr(s).sort((h, m) => Uo(m) - Uo(h))[0], Yo = (s, h, m) => {
    const b = Be(s, h, m);
    return b ? rn(s, b.stateObj, m) : "";
  }, On = {
    current: { name: () => gt.modes.temperature, icon: () => ne.sunny, load: _a("temperature"), fmt: (s, h, m) => be(s, m), now: (s, h) => {
      var m;
      return be(s, (m = Be(s, h, "temperature")) == null ? void 0 : m.value);
    } },
    sun: {
      name: () => gt.sun,
      icon: () => ne.sunny,
      load: Cr((s, h) => Math.round(ps(s, h.lat, h.lon) / ra), (s, h, m) => {
        const b = sr(m, s);
        return b.rise && b.set ? Math.round((b.set - b.rise) / oe * 10) / 10 : null;
      }),
      fmt: (s, h, m, b) => b ? Jt(m, s.locale) + "°" : Jt(m, s.locale) + " h",
      sub: (s) => s ? "How high the sun was" : "Hours of daylight a day"
    },
    moon: {
      name: () => gt.moon,
      icon: () => ne.night,
      load: Cr((s) => Math.round(Ol(s).fraction * 100), (s) => Math.round(Ol(s).fraction * 100)),
      fmt: (s, h, m) => Jt(m, s.locale) + "%",
      sub: () => "How much of it was lit"
    },
    uv_index: { name: () => gt.metrics.uv_index, icon: () => ne.sunnyAlert, load: _a("uv_index"), fmt: (s, h, m) => Jt(Math.round(m * 10) / 10, s.locale), now: (s, h) => {
      const m = Be(s, h, "uv_index");
      return m ? Jt(Number(m.value), s.locale) : "";
    } },
    humidity: { name: () => gt.metrics.humidity, icon: () => ne.waterPercent, load: _a("humidity"), fmt: (s, h, m) => Jt(Math.round(m), s.locale) + "%", now: (s, h) => {
      const m = Be(s, h, "humidity");
      return m ? Jt(Math.round(Number(m.value)), s.locale) + "%" : "";
    } },
    pressure: { name: () => gt.metrics.pressure, icon: () => ne.gauge, load: _a("pressure"), fmt: (s, h, m) => Jt(Math.round(m), s.locale) + " " + Yo(s, h, "pressure"), now: (s, h) => {
      const m = Be(s, h, "pressure");
      return m ? Jt(Math.round(Number(m.value)), s.locale) + " " + Yo(s, h, "pressure") : "";
    } },
    wind: { name: () => gt.wind, icon: () => ne.windy, load: _a("wind_speed"), fmt: (s, h, m) => Jt(Math.round(m), s.locale) + " " + Yo(s, h, "wind_speed"), now: (s, h) => {
      const m = Be(s, h, "wind_speed");
      return m ? Jt(Math.round(Number(m.value)), s.locale) + " " + Yo(s, h, "wind_speed") : "";
    } },
    visibility: { name: () => gt.metrics.visibility, icon: () => ne.eyeOutline, load: _a("visibility"), fmt: (s, h, m) => Jt(Math.round(m * 10) / 10, s.locale) + " " + Yo(s, h, "visibility"), now: (s, h) => {
      const m = Be(s, h, "visibility");
      return m ? Jt(Number(m.value), s.locale) + " " + Yo(s, h, "visibility") : "";
    } },
    aq_tile: {
      name: (s) => go(s)[0] ? on(s, go(s)[0]) : gt.airQuality,
      icon: () => ne.airFilter,
      load: fn((s) => go(s)[0], (s) => ue(s) ? Number(s) : null),
      fmt: (s, h, m) => {
        var O, j;
        const b = go(s)[0], L = (O = b == null ? void 0 : b.attributes) == null ? void 0 : O.device_class;
        return Jt(Math.round(m * 10) / 10, s.locale) + (L === "aqi" ? " AQI" : (j = b == null ? void 0 : b.attributes) != null && j.unit_of_measurement ? " " + b.attributes.unit_of_measurement : "");
      },
      now: (s) => {
        const h = go(s)[0];
        return h ? Oo(s, h) : "";
      }
    },
    pollen_tile: {
      name: (s) => Qa(s) ? on(s, Qa(s)) : gt.pollen,
      icon: () => ne.flower,
      load: fn(Qa, (s) => {
        const h = Uo({ state: s });
        return h < 0 ? null : h;
      }),
      fmt: (s, h, m) => Xa(Ka[Math.round(m)] || ""),
      now: (s) => {
        const h = Qa(s);
        return h ? Xa(h.state) : "";
      }
    }
  }, vo = {};
  let Zo = null;
  async function In(s) {
    const h = r == null ? void 0 : r();
    if (!h || !On[s]) return;
    const m = s + "|" + Sr(), [b, L] = wo();
    if (vo[m] && Date.now() - vo[m].at < 5 * qe) return;
    vo[m] = { at: Date.now(), points: null };
    try {
      vo[m].points = await On[s].load(h, Nt(h), b, L);
    } catch {
      vo[m].points = [];
    }
    Oe(!0), Zo === s && ct.graph === s && (Zo = null, qd(G.querySelector(".wbGraphCard")));
    const O = ct.graph === s && G.querySelector(".wbGraph .wbChart");
    O && Jp(O, O.querySelector(".wbLine"), O.querySelectorAll(".wbArea"));
  }
  function yo(s, h) {
    const m = ct.range, b = kr(Date.now()), [L, O] = wo(), j = m.pickFrom || kr(L), Z = m.pickTo || kr(O - 1);
    return '<div class="wbRangePick" role="dialog" aria-label="Choose date range"><div class="wbRangePresets">' + Mr.map(([q, $]) => '<button class="wbRangePreset" aria-pressed="' + (m.preset === q) + '" data-wb="graph-preset" data-range="' + q + '" data-wb-focus="graph-preset-' + q + '">' + yt($) + "</button>").join("") + '</div><div class="wbRangeDates"><label><span>From</span><input type="date" data-range-from value="' + j + '" max="' + b + '"></label><label><span>To</span><input type="date" data-range-to value="' + Z + '" max="' + b + '"></label></div><button class="wbRangeApply" data-wb="graph-apply" data-wb-focus="graph-apply">Show these dates</button></div>';
  }
  function ui(s, h, m) {
    var lt;
    const b = On[m], [L, O] = wo(), j = _r(L, O), Z = (lt = vo[m + "|" + Sr()]) == null ? void 0 : lt.points, q = Math.max(120, Math.min(520, innerWidth - (innerWidth <= 620 ? 0 : 32)) - 2 * 18 - 32), tt = Z ? Z.length > 1 ? rp(Z, (Ht) => b.fmt(s, h, Ht, j), 220, q) : '<span class="wbGraphNote"><span>No history for these dates</span></span>' : '<span class="wbGraphNote"><span>Loading…</span></span>';
    return '<div class="wbPopupBox"><div class="wbCard wbSquare wbGraphCard" role="dialog" aria-modal="true" aria-label="' + yt(b.name(s)) + '"><div class="wbHead"><div class="wbChip wbPlain">' + au(b.icon(s)) + '</div><div class="wbText"><span class="wbName">' + yt(b.name(s)) + '</span><span class="wbSub">' + yt(b.sub ? b.sub(j) : b.now ? b.now(s, h) : "") + '</span></div><button class="wbBack" title="Close" data-wb="graph-close" data-wb-focus="graph-close">' + qo(ne.close) + '</button></div><button class="wbRangeBtn" aria-haspopup="dialog" aria-expanded="' + !!ct.picking + '" title="Choose date range" data-wb="graph-pick" data-wb-focus="graph-pick">' + qo(ne.calendar) + "<span>" + yt(pi(s)) + "</span>" + qo(ne.chevronDown) + '</button><div class="wbGraph">' + tt + "</div></div>" + (ct.picking ? yo() : "") + "</div>";
  }
  function Oe(s) {
    var Ht, Lt, St, jt, At;
    const h = r == null ? void 0 : r();
    if (!h || nt) return;
    const m = Nt(h);
    kt(h, m), U.lastFetch || ua();
    const b = _e(h), L = op(h), O = Il(h), j = [
      ...m.map((pt) => h.states[pt]),
      h.states["sun.sun"],
      L && h.states[L],
      O && h.states[O],
      ...b.air.map((pt) => h.states[pt]),
      ...b.pollen.map((pt) => h.states[pt]),
      ...et.some((pt) => J.includes(pt)) ? [...go(h), ...vr(h)] : [],
      h.locale,
      h.config,
      h.entities,
      Math.floor(Date.now() / qe)
    ];
    if (!s && dt && j.length === dt.length && j.every((pt, Ot) => pt === dt[Ot])) return;
    dt = j;
    const Z = D.getRootNode(), q = Z.activeElement || document.activeElement;
    for (const pt of et) {
      const Ot = N[pt];
      let It = "";
      try {
        It = di[pt](h, m) || "";
      } catch {
        It = "";
      }
      if (It === Ot.html) continue;
      const he = q && Ot.el.contains(q) ? (Ht = q.dataset) == null ? void 0 : Ht.wbFocus : void 0, _t = Ot.el.querySelector(".wbStripScroll"), ce = _t ? _t.scrollLeft : null;
      Ot.html = It, Ot.el.hidden = !It, Ot.el.innerHTML = It;
      const de = Ot.el.querySelector(".wbStripScroll");
      de && ce != null ? de.scrollTo({ left: ce }) : de != null && de.dataset.start && de.scrollTo({ left: Number(de.dataset.start) * de.clientWidth / Number(de.dataset.span) }), he && !Y && ((Lt = Ot.el.querySelector('[data-wb-focus="' + he + '"]')) == null || Lt.focus());
    }
    let $ = "";
    if (ct.graph)
      try {
        $ = ui(h, m, ct.graph) || "";
      } catch {
        $ = "";
      }
    if ($ !== H) {
      const pt = q && G.contains(q) ? (St = q.dataset) == null ? void 0 : St.wbFocus : void 0;
      H = $, G.innerHTML = $, G.hidden = !$, $ && !G.isConnected && (D.closest("#app") || D).appendChild(G), pt && !Y && ((jt = G.querySelector('[data-wb-focus="' + pt + '"]')) == null || jt.focus({ preventScroll: !0 }));
    }
    fe(), D.querySelectorAll(".wbRadarMap").forEach((pt) => {
      pt._tiles || xo(pt);
    }), Y && ((At = D.querySelector('[data-wb-focus="' + Y + '"]') || G.querySelector('[data-wb-focus="' + Y + '"]')) == null || At.focus({ preventScroll: !0 }), Y = null);
    let tt = !1, lt = !1;
    for (const pt of et) {
      const Ot = N[pt], It = !Ot.el.hidden, he = at[pt] === "wide" || X.includes(pt), _t = et.indexOf(pt) >= et.indexOf("moon"), ce = It && (_t && he && !tt || !he && !lt);
      ce && he && (tt = !0), ce && !he && (lt = !0), Ot.el.toggleAttribute("data-break", ce);
    }
    qn(performance.now());
  }
  function Qe() {
    K || nt || (K = !0, queueMicrotask(() => {
      K = !1, Oe(!0);
    }));
  }
  function fa() {
    const s = getComputedStyle(D), h = (j) => s.getPropertyValue(j).trim(), m = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([j, Z]) => {
      h(Z) && (m[j] = h(Z));
    });
    const b = h("--color-text-primary") || "#f1f1f1", L = h("--color-bg-card") || "#222222", O = !!D.closest(".light");
    return { colors: { ...Na, ...m }, ink: O ? b : L, paper: O ? L : b };
  }
  const Fn = (s, h) => {
    var m;
    s.width !== h.w && (s.width = h.w), s.height !== h.h && (s.height = h.h), (m = s.getContext("2d")) == null || m.putImageData(new ImageData(h.data, h.w, h.h), 0, 0);
  }, Ko = () => g && !jm();
  function Ar(s, h) {
    D.querySelectorAll("canvas[data-wb-strip]").forEach((m) => ws(m, Q[m.dataset.wbStrip], s, h));
  }
  function ws(s, h, m, b) {
    if (!h || !s.getClientRects().length) return;
    const L = s.clientWidth, O = s.clientHeight;
    if (!L || !O) return;
    const j = { width: L, height: O, columns: h.columns || Wd, colors: b.colors, clock: m, ambient: Ko(), seed: h.seed, soft: 1.5 };
    if (p === "smooth") {
      const Z = Math.min(2, window.devicePixelRatio || 1), q = Math.round(L * Z), $ = Math.round(O * Z);
      s.width !== q && (s.width = q), s.height !== $ && (s.height = $);
      const tt = s.getContext("2d");
      if (!tt) return;
      tt.setTransform(Z, 0, 0, Z, 0, 0), qh(tt, h.segs, j);
    } else Fn(s, Fh(h.segs, { ...j, px: 2, oneBit: p === "onebit", ink: b.ink, paper: b.paper }));
  }
  function qn(s) {
    if (nt) return;
    const h = fa();
    if (p !== "smooth") {
      const m = Ko();
      D.querySelectorAll("canvas[data-wb-wx]").forEach((b) => {
        b.getClientRects().length && Fn(b, kh(bh(b.dataset.wbWx, h.colors), { size: Number(b.dataset.size) || 40, px: 2, oneBit: p === "onebit", colors: h.colors, ink: h.ink, paper: h.paper, clock: s, idle: m }));
      });
    }
    D.querySelectorAll("canvas[data-wb-sea]").forEach((m) => {
      const b = m.clientWidth, L = m.clientHeight, O = Number(m.dataset.wbSea), j = b + "x" + L + ":" + O + ":" + h.colors.skyClearDay;
      !b || !L || !(O > 0) || m.dataset.painted === j || (m.dataset.painted = j, Fn(m, em(b, L, O, h.colors)));
    }), Ar(s, h);
  }
  function fi(s) {
    if (bt = 0, !(nt || !Ko())) {
      if (!document.hidden)
        if (p === "smooth") Ar(s, fa());
        else {
          const h = Math.floor(s / 100);
          h !== it && (it = h, qn(s));
        }
      bt = requestAnimationFrame(fi);
    }
  }
  function Xo() {
    D.classList.toggle("wbMotion", Ko()), !bt && !nt && Ko() && (bt = requestAnimationFrame(fi));
  }
  function Wn(s) {
    var m, b, L, O, j, Z, q;
    if (s.target === G) {
      ct.graph = void 0, ct.picking = !1, Oe(!0);
      return;
    }
    const h = (b = (m = s.target).closest) == null ? void 0 : b.call(m, "[data-wb]");
    if (!h || !(D.contains(h) || G.contains(h))) {
      const $ = (O = (L = s.target).closest) == null ? void 0 : O.call(L, ".wbItem"), tt = $ == null ? void 0 : $.dataset.card;
      if (!$ || !D.contains($) || !On[tt] || ct.graph === tt || D.closest(".tfEditing") || tt === "current" && w) return;
      ct.graph = tt, ct.picking = !1, Y = "graph-close", Oe(!0), (j = vo[tt + "|" + Sr()]) != null && j.points ? qd(G.querySelector(".wbGraphCard")) : Zo = tt, In(tt);
      return;
    }
    switch (h.dataset.wb) {
      case "day": {
        ct.openDay = Number(h.dataset.index), ct.opener = h.dataset.wbFocus, Y = "back-day";
        const $ = ln()[ct.openDay], tt = !U.todayHistory || U.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - U.todayHistory.fetched > wm;
        $ && ir(new Date($.datetime), /* @__PURE__ */ new Date()) && tt && Je();
        break;
      }
      case "close-day":
        ct.openDay = void 0, Y = ct.opener, ct.opener = void 0;
        break;
      case "open-page":
        w == null || w();
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
        const $ = D.querySelector(".wbStripScroll");
        $ && $.scrollTo({ left: Number(h.dataset.hours) * $.clientWidth / Number($.dataset.span), behavior: "smooth" });
        return;
      }
      case "aq-open":
        ct.aq = h.dataset.entity, Bn(ct.aq);
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
        ct.range = { preset: h.dataset.range }, ct.picking = !1, Y = "graph-pick", Oe(!0), In(ct.graph);
        return;
      case "graph-apply": {
        let $ = ct.range.pickFrom || ((Z = D.querySelector("[data-range-from]")) == null ? void 0 : Z.value), tt = ct.range.pickTo || ((q = D.querySelector("[data-range-to]")) == null ? void 0 : q.value);
        if (!$ || !tt) return;
        $ > tt && ([$, tt] = [tt, $]), ct.range = { preset: "custom", from: $, to: tt }, ct.picking = !1, Y = "graph-pick", Oe(!0), In(ct.graph);
        return;
      }
      default:
        return;
    }
    Oe(!0);
  }
  function $o(s) {
    var h, m, b, L, O, j;
    s.key === "Escape" && ct.openDay !== void 0 && ((m = (h = s.target).closest) != null && m.call(h, '[data-wb-open="day"]')) ? (ct.openDay = void 0, Y = ct.opener, ct.opener = void 0, Oe(!0)) : s.key === "Escape" && ct.picking && ((L = (b = s.target).closest) != null && L.call(b, ".wbGraphCard")) ? (ct.picking = !1, Y = "graph-pick", Oe(!0)) : s.key === "Escape" && ct.graph && ((j = (O = s.target).closest) != null && j.call(O, ".wbGraphCard")) && (ct.graph = void 0, Oe(!0));
  }
  let Ue = null;
  function hi(s) {
    var m, b;
    const h = (b = (m = s.target).closest) == null ? void 0 : b.call(m, ".wbStripScroll");
    !h || s.button !== 0 || (Ue = { startX: s.pageX, left: h.scrollLeft, moved: !1 }, h.classList.add("wbHeld"), window.addEventListener("mousemove", hn), window.addEventListener("mouseup", mi, { once: !0 }));
  }
  function hn(s) {
    const h = D.querySelector(".wbStripScroll");
    if (!Ue || !h) return;
    const m = s.pageX - Ue.startX;
    !Ue.moved && Math.abs(m) > 1 && (Ue.moved = !0, h.classList.add("wbDragging")), h.scrollLeft = Ue.left - m;
  }
  function mi() {
    Ue = null, window.removeEventListener("mousemove", hn);
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
    (m = h.matches) != null && m.call(h, "[data-range-from]") ? ct.range.pickFrom = h.value : (b = h.matches) != null && b.call(h, "[data-range-to]") && (ct.range.pickTo = h.value);
  };
  D.addEventListener("change", Ye), D.addEventListener("click", Wn), D.addEventListener("keydown", $o), G.addEventListener("change", Ye), G.addEventListener("click", Wn), G.addEventListener("keydown", $o), D.addEventListener("mousedown", hi);
  const mn = 64, Tr = 30;
  let ha = null, Ia = 0;
  const gn = () => {
    Ia = 0, D.querySelectorAll(".wbPollen .wbPush").forEach((s) => {
      let h = 0, m = 0;
      if (ha) {
        const b = s.parentElement.getBoundingClientRect(), L = b.left + b.width / 2 - ha.x, O = b.top + b.height / 2 - ha.y, j = Math.hypot(L, O) || 1;
        if (j < mn) {
          const Z = (1 - j / mn) * Tr;
          h = L / j * Z, m = O / j * Z;
        }
      }
      s.style.transform = h || m ? "translate(" + h.toFixed(1) + "px," + m.toFixed(1) + "px)" : "";
    }), ha && (Ia = requestAnimationFrame(gn));
  }, gi = (s) => {
    var m, b;
    if (!((b = (m = s.target).closest) == null ? void 0 : b.call(m, ".wbPollen")) || Ie != null && Ie.matches) {
      ha && (ha = null, Ia || (Ia = requestAnimationFrame(gn)));
      return;
    }
    ha = { x: s.clientX, y: s.clientY }, Ia || (Ia = requestAnimationFrame(gn));
  }, bi = () => {
    ha = null, Ia || (Ia = requestAnimationFrame(gn));
  };
  D.addEventListener("pointermove", gi), D.addEventListener("pointerleave", bi);
  const to = typeof ResizeObserver == "function" ? new ResizeObserver(() => qn(performance.now())) : null;
  to == null || to.observe(D);
  const Jo = typeof ResizeObserver == "function" ? new ResizeObserver((s) => s.forEach((h) => {
    const m = h.target;
    m._tiles && (m.clientWidth !== m._w || m.clientHeight !== m._h) && xo(m);
  })) : null;
  function xo(s) {
    var j;
    const h = s.clientWidth, m = s.clientHeight;
    if (!h || !m || nt) return;
    const b = Rm(Number(s.dataset.lat), Number(s.dataset.lon), h, m), L = !!((j = D.closest("#app")) != null && j.classList.contains("light")), O = (Z) => ' style="left:' + Z.left + "px;top:" + Z.top + 'px"';
    s._tiles = b, s._w = h, s._h = m, s._frames = null, s._built = Date.now(), s.innerHTML = '<div class="wbRadarLayer wbRadarBase">' + b.map((Z) => '<img src="https://' + "abcd"[(Z.x + Z.y) % 4] + ".basemaps.cartocdn.com/" + (L ? "light_all" : "dark_all") + "/" + Ql + "/" + Z.x + "/" + Z.y + '.png"' + O(Z) + ' alt="">').join("") + '</div><div class="wbRadarFrames"></div><i class="wbRadarHome"></i><span class="wbRadarTime"></span><span class="wbRadarCredit">© OpenStreetMap · CARTO · RainViewer</span>', Jo == null || Jo.observe(s), Bm().then((Z) => {
      !s.isConnected || nt || s._tiles !== b || (s.querySelector(".wbRadarFrames").innerHTML = Z.frames.map((q, $) => '<div class="wbRadarLayer wbRadarRain" data-i="' + $ + '" hidden>' + b.map((tt) => '<img src="' + Z.host + q.path + "/" + Io + "/" + Ql + "/" + tt.x + "/" + tt.y + '/2/1_1.png"' + O(tt) + ' alt="">').join("") + "</div>").join(""), s._frames = Z.frames, s._hold = 0, wi(s, Z.frames.findLastIndex((q) => q.past)));
    }).catch(() => {
      s.isConnected && (s.querySelector(".wbRadarTime").textContent = gt.radarOff);
    });
  }
  function wi(s, h) {
    const m = s._frames;
    if (!(m != null && m.length)) return;
    s._i = h, s.querySelectorAll(".wbRadarRain").forEach((L) => {
      L.hidden = Number(L.dataset.i) !== h;
    });
    const b = m[h];
    s.querySelector(".wbRadarTime").textContent = ze(new Date(b.time * 1e3), r == null ? void 0 : r()) + (b.past ? "" : " · " + gt.forecastTag);
  }
  function Ze() {
    D.querySelectorAll(".wbRadarMap").forEach((s) => {
      if (!s._frames) return;
      if (Date.now() - s._built > tu) {
        xo(s);
        return;
      }
      if (Ie != null && Ie.matches) return;
      if (s._hold > 0) {
        s._hold -= Gd;
        return;
      }
      const h = s._frames.length - 1, m = s._frames.findLastIndex((L) => L.past), b = s._i >= h ? 0 : s._i + 1;
      wi(s, b), (b === m || b === h) && (s._hold = Em);
    });
  }
  const Mo = () => D.querySelectorAll(".wbRadarImg").forEach((s) => {
    const h = s.dataset.src;
    s.src = h + (h.includes("?") ? "&" : "?") + "hc=" + Date.now();
  }), Ca = typeof MutationObserver == "function" ? new MutationObserver(() => D.querySelectorAll(".wbRadarMap").forEach((s) => {
    s._tiles && xo(s);
  })) : null, Vn = D.closest("#app");
  Vn && (Ca == null || Ca.observe(Vn, { attributes: !0, attributeFilter: ["class"] }));
  const Ie = (Lr = window.matchMedia) == null ? void 0 : Lr.call(window, "(prefers-reduced-motion: reduce)"), vi = () => {
    Xo(), qn(performance.now());
  };
  (Dr = Ie == null ? void 0 : Ie.addEventListener) == null || Dr.call(Ie, "change", vi);
  const yi = [
    setInterval(() => {
      Ft = /* @__PURE__ */ new Date(), Oe(!0);
    }, Am),
    setInterval(() => {
      V = /* @__PURE__ */ new Date(), Oe(!0);
    }, Tm),
    setInterval(ua, Sm),
    setInterval(Ze, Gd),
    setInterval(Mo, qe)
  ];
  return Oe(!0), Xo(), {
    update() {
      Oe(!1);
    },
    // a choice in Settings changed (Next hours' window)
    refresh() {
      Oe(!0);
    },
    setStyle(s) {
      !s || s === p || (p = s, D.dataset.style = p, G.dataset.style = p, Oe(!0), Xo());
    },
    destroy() {
      var s;
      cancelAnimationFrame(Ia), D.removeEventListener("pointermove", gi), D.removeEventListener("pointerleave", bi), nt = !0, yi.forEach(clearInterval), bt && cancelAnimationFrame(bt), bt = 0, to == null || to.disconnect(), Jo == null || Jo.disconnect(), Ca == null || Ca.disconnect(), (s = Ie == null ? void 0 : Ie.removeEventListener) == null || s.call(Ie, "change", vi), mi(), D.removeEventListener("click", Wn), D.removeEventListener("change", Ye), D.removeEventListener("keydown", $o), D.removeEventListener("mousedown", hi), G.removeEventListener("click", Wn), G.removeEventListener("change", Ye), G.removeEventListener("keydown", $o), ["daily", "hourly"].forEach(vt), D.remove(), G.remove();
    }
  };
}
const $r = "#E1E1E1", lp = "#F7F4F0", Fl = "#03a9f4", ee = 14, ae = 172;
let v0 = 0;
const xe = (n) => Math.round(n * 100) / 100, uo = (n, r, d) => Math.max(r, Math.min(d, n)), jo = (n, r, d, p, g, v) => '<rect x="' + xe(n) + '" y="' + xe(r) + '" width="' + xe(d) + '" height="' + xe(p) + '" fill="' + g + '"' + (v != null ? ' opacity="' + v + '"' : "") + "/>", ql = (n) => n.map((r, d) => (d ? "L" : "M") + xe(r[0]) + " " + xe(r[1])).join("");
function Wl(n) {
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
function y0(n) {
  const r = n < 2 ? n + 24 : n;
  let d = nn[0], p = nn[nn.length - 1];
  for (let T = 0; T < nn.length - 1; T++) if (r >= nn[T][0] && r <= nn[T + 1][0]) {
    d = nn[T], p = nn[T + 1];
    break;
  }
  const g = (r - d[0]) / (p[0] - d[0]), v = g * g * (3 - 2 * g), w = (T, W) => {
    const M = parseInt(T.slice(1), 16), D = parseInt(W.slice(1), 16);
    return "#" + [16, 8, 0].map((I) => Math.round((M >> I & 255) + ((D >> I & 255) - (M >> I & 255)) * v).toString(16).padStart(2, "0")).join("");
  };
  return { top: w(d[1][0], p[1][0]), bot: w(d[1][1], p[1][1]), warm: w(d[1][2], p[1][2]), cool: w(d[1][3], p[1][3]), op: d[1][4] + (p[1][4] - d[1][4]) * v, t: r };
}
function x0(n) {
  const r = parseInt(n.slice(1), 16), d = (r >> 16 & 255) / 255, p = (r >> 8 & 255) / 255, g = (r & 255) / 255, v = Math.max(d, p, g), w = Math.min(d, p, g);
  let T = 0, W = 0;
  const M = (v + w) / 2;
  if (v !== w) {
    const D = v - w;
    W = M > 0.5 ? D / (2 - v - w) : D / (v + w), T = (v === d ? (p - g) / D + (p < g ? 6 : 0) : v === p ? (g - d) / D + 2 : (d - p) / D + 4) / 6;
  }
  return [T * 360, W * 100, M * 100];
}
function hu(n, r, d) {
  r = uo(r, 0, 100) / 100, d = uo(d, 0, 100) / 100;
  const p = (w) => (w + n / 30) % 12, g = r * Math.min(d, 1 - d), v = (w) => d - g * Math.max(-1, Math.min(p(w) - 3, Math.min(9 - p(w), 1)));
  return "#" + [v(0), v(8), v(4)].map((w) => Math.round(w * 255).toString(16).padStart(2, "0")).join("");
}
const [mu, gu, bu] = x0($r), cp = hu(mu, gu, Math.max(6, bu - 14)), M0 = hu(mu, gu, Math.min(96, bu + 16));
function k0(n, r, d, p, g) {
  const v = ae / 2, w = ae * 0.12, T = v - (v - w) * n, W = (et) => et ** 1.3, M = uo(d, -1.5, 1.5), D = (et) => -(Math.abs(M) * 4.6 * et ** 1.5) * Math.sign(M), I = n * 1.4, G = (et, at) => {
    const X = Math.min(4.8, Math.abs(d) * 2.6) * (at ? 1 : -1) * Math.sign(d || 1), N = at ? et + T : et, nt = at ? et : et + T, dt = (xt) => N + D(xt) + X * Math.sin(xt * Math.PI * 1.2 + p) * W(xt) * 1.4 + I * Math.sin(xt * Math.PI * 2 + p * 0.6) * W(xt) * (at ? 1 : -1), bt = [[nt, ee]];
    for (let xt = 0; xt <= 12; xt++) bt.push([dt(xt / 12), ee + ae * xt / 12]);
    bt.push([nt, ee + ae]);
    let it = '<path d="' + ql(bt) + 'Z" fill="' + $r + '"/>';
    if (g) return it;
    const K = 1.35 + ((at ? d > 0 : d < 0) ? 0.35 : 0), Y = (xt) => {
      const Rt = xt / 7, ct = at ? 1 - Rt : Rt, U = (1 - ct) ** 1.3, Ft = et + T * Rt;
      return Array.from({ length: 13 }, (V, Q) => {
        const A = Q / 12;
        return [Ft + D(A) * U + X * K * Math.sin(A * Math.PI * 1.2 + p - ct * 3.2) * W(A) * 1.4 * U + I * 1.6 * Math.sin(A * Math.PI * 2 + p * 0.6 - ct * 2.5) * W(A) * n * (0.4 + 0.6 * U), ee + ae * A];
      });
    }, H = [1, 2, 3, 4, 5, 6].map(Y);
    for (let xt = 0; xt < 6; xt += 2) it += '<path d="' + ql(H[xt]) + ql(H[xt + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return it;
  }, J = v - (v - w) * r;
  return { body: G(ee, !0) + G(ee + ae - T, !1), rails: [{ x: ee + J - 4, y: ee, w: 4, h: ae }, { x: ee + ae - J, y: ee, w: 4, h: ae }], head: 6.4 };
}
function S0(n, r, d) {
  const p = ae * (1 - n);
  let g = "";
  if (p > 1 && (g += jo(ee, ee, ae, p, $r), !d))
    for (let v = 1; v < 7; v += 2) g += jo(ee + ae * v / 7, ee, ae / 7, p, "#fff");
  return { body: g, rails: [{ x: ee, y: ee + ae * (1 - r) - 7, w: ae, h: 11 }], head: 10.4 };
}
function _0(n, r, d, p) {
  const g = 9 - 7 * (d / 100), v = ee + ae * (1 - n), w = Math.ceil(ae / 10) + 1, T = ee + g / 2, W = (ee + ae - g / 2 - T) / (w - 1), M = 0.8, D = 0.6, I = Array.from({ length: w }, (et, at) => Math.max(T + at * D, Math.min(T + at * W, v - g / 2 - (w - 1 - at) * D))), G = I.slice(0, -1).map((et, at) => uo((I[at + 1] - et - D) / (W - D), 0, 1));
  G.push(G[w - 2]);
  let J = "";
  return I.forEach((et, at) => {
    const X = M + (g - M) * G[at], N = Math.max(0.5, X / 2), nt = Math.max(0.4, X * 0.114);
    J += jo(ee, et - N, ae, Math.max(1, X), $r), !p && X > 2.2 && (J += jo(ee, et + N - nt, ae, nt, cp) + jo(ee, et - N, ae, nt * 0.55, M0, 0.75));
  }), p || [0.22, 0.78].forEach((et) => {
    J += jo(ee + ae * et - 0.7, ee, 1.4, Math.max(0, I[w - 1] + 1 - ee), cp, 0.85);
  }), { body: J, rails: [{ x: ee, y: ee + ae * (1 - r) - 8, w: ae, h: 8 }], head: 8.8 };
}
const dp = (n, r, d, p, g, v, w) => n === "curtain" ? k0(r, d, g, v, w) : n === "venetian" ? _0(r, d, p, w) : S0(r, d, w);
function C0(n, r) {
  let d = "", p = "";
  return r.forEach((g) => {
    const v = g.w > g.h, w = uo(v ? ee + ae / 2 : g.x + g.w / 2, 17, 183), T = uo(v ? g.y + g.h / 2 : ee + ae / 2, 17, 183);
    d += v ? jo(ee, uo(g.y + g.h / 2, ee, ee + ae) - 1, ae, 2, Fl) : jo(uo(g.x + g.w / 2, ee, ee + ae) - 1, ee, 2, ae, Fl);
    const W = v ? "M" + xe(w - 4) + " " + xe(T - 3) + "l4 -3l4 3M" + xe(w - 4) + " " + xe(T + 3) + "l4 3l4 -3" : "M" + xe(w - 3) + " " + xe(T - 4) + "l-3 4l3 4M" + xe(w + 3) + " " + xe(T - 4) + "l3 4l-3 4";
    p += '<circle cx="' + xe(w) + '" cy="' + xe(T) + '" r="11" fill="' + Fl + '" filter="url(#' + n + 's)"/><path d="' + W + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: d, knobs: p };
}
function A0(n, r) {
  const d = /* @__PURE__ */ new Date(), p = y0(d.getHours() + d.getMinutes() / 60), g = 42 + 18 * Math.sin(p.t * 0.5), v = p.t >= 5 && p.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (p.t - 5) / 15) : 80, w = dp(r.kind, r.pos / 100, r.bar / 100, r.tilt, r.vel, r.ph, !1), T = r.ghostAlpha > 4e-3 && r.ghost != null ? dp(r.kind, r.ghost / 100, r.ghost / 100, r.tilt, 0, 0, !0).body : "", W = r.grip > 4e-3 ? C0(n, w.rails) : null, M = (D) => jo(ee, ee, ae, ae, D);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + n + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + n + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + p.top + '"/><stop offset="1" stop-color="' + p.bot + '"/></linearGradient><radialGradient id="' + n + 'w" cx="' + xe(g) + '%" cy="' + xe(v) + '%" r="58%"><stop offset="0" stop-color="' + p.warm + '" stop-opacity="' + xe(p.op * 0.8) + '"/><stop offset="1" stop-color="' + p.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + n + 'k" cx="' + xe(100 - g * 0.8) + '%" cy="' + xe(100 - v * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + p.cool + '" stop-opacity="' + xe(p.op * 0.64) + '"/><stop offset="1" stop-color="' + p.cool + '" stop-opacity="0"/></radialGradient><filter id="' + n + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + lp + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + n + 'c)">' + M("url(#" + n + "l)") + M("url(#" + n + "w)") + M("url(#" + n + "k)") + (T ? '<g opacity="' + xe(r.ghostAlpha) + '">' + T + "</g>" : "") + w.body + '<rect x="14" y="14" width="172" height="' + w.head + '" fill="' + $r + '" filter="url(#' + n + 's)"/></g>' + (W ? '<g clip-path="url(#' + n + 'c)" opacity="' + xe(r.grip) + '">' + W.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + lp + '" stroke-width="3"/>' + (W ? '<g opacity="' + xe(r.grip) + '">' + W.knobs + "</g>" : "") + "</svg>";
}
function T0({ onMove: n, onSet: r }) {
  var it;
  const d = "cv" + ++v0, p = document.createElement("div");
  p.className = "tfCoverArt";
  const g = (it = window.matchMedia) == null ? void 0 : it.call(window, "(pointer: coarse)").matches;
  let v = null;
  const w = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let T = 0, W = !1, M = !1, D = null, I = 0, G = 0;
  const J = () => (v == null ? void 0 : v.kind) === "curtain" ? "x" : "y", et = () => D || W || M || v.moving || v.target != null ? 1 : g ? performance.now() < G ? 1 : 0.4 : 0, at = () => {
    p.innerHTML = A0(d, { kind: v.kind, pos: w.pos, bar: v.target ?? w.pos, tilt: w.tilt, vel: w.vel, ph: w.ph, ghost: w.gpos, ghostAlpha: w.ghost, grip: w.grip });
  };
  function X(K) {
    T = 0;
    const Y = w.last ? Math.min(0.064, (K - w.last) / 1e3) : 1 / 60, H = Y * 60;
    w.last = K;
    const xt = v.pos - w.pos, Rt = w.pos;
    w.pos += Math.sign(xt) * Math.min(Math.abs(xt), Math.max(10.5, Math.abs(xt) * 1.4) * Y), Math.abs(v.pos - w.pos) < 0.03 && (w.pos = v.pos), w.vel = w.vel * 0.86 + (w.pos - Rt) / H * 0.14, Math.abs(w.vel) < 0.015 && w.pos === v.pos && (w.vel = 0), (w.pos !== Rt || w.vel) && (w.ph += (0.06 + Math.abs(w.vel) * 0.03) * H);
    const ct = v.tilt - w.tilt;
    w.tilt += Math.sign(ct) * Math.min(Math.abs(ct), Math.max(60, Math.abs(ct) * 4) * Y);
    const U = et();
    w.grip += (U - w.grip) * Math.min(1, Y * (U > w.grip ? 11 : 3.5)), Math.abs(U - w.grip) < 0.01 && (w.grip = U);
    const Ft = v.target != null && Math.abs(v.target - w.pos) > 0.5 ? 0.22 : 0;
    v.target != null && (w.gpos = v.target), w.ghost += (Ft - w.ghost) * Math.min(1, Y * (Ft > w.ghost ? 16 : 3)), Math.abs(Ft - w.ghost) < 4e-3 && (w.ghost = Ft), at(), w.pos !== v.pos || w.vel || w.tilt !== v.tilt || w.grip !== U || w.ghost !== Ft ? T = requestAnimationFrame(X) : w.last = 0;
  }
  const N = () => {
    v && !T && (T = requestAnimationFrame(X));
  }, nt = setInterval(() => {
    v && !T && at();
  }, 60 * 1e3), dt = (K) => {
    const Y = p.getBoundingClientRect();
    return J() === "x" ? (K.clientX - Y.left) / Y.width : (K.clientY - Y.top) / Y.height;
  };
  p.addEventListener("pointerdown", (K) => {
    var xt;
    if (!(v != null && v.canSet) || K.button > 0) return;
    K.preventDefault(), (xt = p.setPointerCapture) == null || xt.call(p, K.pointerId);
    const Y = v.target ?? v.pos, H = p.getBoundingClientRect();
    D = { p0: dt(K), from: Y, x0: K.clientX, value: null, side: null }, v.kind === "curtain" && Y > 0 && (D.side = (K.clientX - H.left) / H.width < 0.5 ? "L" : "R"), N();
  }), p.addEventListener("pointermove", (K) => {
    if (!D) return;
    let Y;
    if (v.kind === "curtain") {
      if (!D.side) {
        const xt = K.clientX - D.x0;
        if (Math.abs(xt) < 4) return;
        D.side = xt < 0 ? "L" : "R";
      }
      const H = (ae / 2 - ae * 0.12) / 200;
      Y = D.from + (D.side === "L" ? -1 : 1) * ((dt(K) - D.p0) / H) * 100;
    } else Y = D.from - (dt(K) - D.p0) / (ae / 200) * 100;
    D.value = uo(Y, 0, 100), n(D.value);
  });
  const bt = () => {
    if (!D) return;
    const K = D.value;
    D = null, K != null && r(Math.round(K)), N();
  };
  return p.addEventListener("pointerup", bt), p.addEventListener("pointercancel", bt), p.addEventListener("lostpointercapture", bt), p.addEventListener("pointerenter", () => {
    W = !0, N();
  }), p.addEventListener("pointerleave", () => {
    W = !1, N();
  }), p.addEventListener("focus", () => {
    M = p.matches(":focus-visible"), N();
  }), p.addEventListener("blur", () => {
    M = !1, N();
  }), p.addEventListener("keydown", (K) => {
    if (!(v != null && v.canSet)) return;
    const Y = Math.round(v.target ?? v.pos), H = K.shiftKey ? 10 : 1, xt = { ArrowUp: Y + H, ArrowRight: Y + H, ArrowDown: Y - H, ArrowLeft: Y - H, PageUp: Y + 25, PageDown: Y - 25, Home: 0, End: 100 }[K.key];
    if (xt == null) return;
    K.preventDefault();
    const Rt = uo(xt, 0, 100);
    n(Rt), clearTimeout(I), I = setTimeout(() => r(Rt), 500);
  }), {
    el: p,
    update(K) {
      const Y = !v;
      v = K, Y && (w.pos = v.pos, w.tilt = v.tilt, G = performance.now() + 1500, g && setTimeout(N, 1600)), p.classList.toggle("x", J() === "x"), p.classList.toggle("y", J() === "y"), v.canSet ? (p.tabIndex = 0, p.setAttribute("role", "slider"), p.setAttribute("aria-valuemin", "0"), p.setAttribute("aria-valuemax", "100"), p.setAttribute("aria-valuenow", String(Math.round(v.target ?? v.pos))), p.setAttribute("aria-orientation", J() === "x" ? "horizontal" : "vertical")) : p.setAttribute("role", "img"), p.setAttribute("aria-label", v.name + (v.canSet ? " position" : "")), p.setAttribute("aria-valuetext", v.text), N();
    },
    destroy() {
      cancelAnimationFrame(T), T = 0, clearInterval(nt), clearTimeout(I), p.remove();
    }
  };
}
const pp = "homecore-density", lo = {
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
}, F = (n) => String(n ?? "").replace(/[&<>"']/g, (r) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[r]), up = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', Vl = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', fp = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', Qi = {
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h2v12H6zM9.5 12L18 18V6z"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>'
}, hp = {
  down: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 11h14v2H5z"/></svg>',
  up: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z"/></svg>'
}, mp = 1, L0 = 4, gp = 16, bp = 32, D0 = 128, E0 = 256, wp = 16384, vp = 1, yp = 2, jl = 4, xp = 8, B0 = {
  open: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/></svg>',
  stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5" fill="currentColor"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l5 5-5 5"/><path d="M21 7l-5 5 5 5"/></svg>'
}, Mp = { curtain: ["mdi:curtains", "mdi:curtains-closed"], blind: ["mdi:roller-shade", "mdi:roller-shade-closed"], venetian: ["mdi:blinds-horizontal", "mdi:blinds-horizontal-closed"] }, R0 = { curtain: "curtains", blind: "blind", venetian: "blinds" }, Yr = {
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
}, kp = ["covers", "people", "openings", "leaks", "vacuum"], Sp = "homecore_house", _p = "homecore-house-used", Zr = ["switch", "fan", "input_boolean", "automation"], Cp = "homecore-house-look", P0 = [["look", "Look"], ["house", "House page"], ["weather", "Weather"]], H0 = [["popup", "Popup"], ["sheet", "Sheet"]], N0 = [["auto", "Automatic"], ["cut", "Cut short"], ["wrap", "Two lines"], ["scroll", "Scroll"]], O0 = [["day", "Daytime 06–22"], ["waking", "Waking 07–23"], ["all", "All day"]], I0 = [["bitmap", "Pixel"], ["onebit", "1-bit"], ["smooth", "Smooth"], ["line", "Line"]], Kr = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', F0 = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', q0 = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>', Ap = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"/></svg>', zl = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>', da = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 13C6.14 13 4.59 14.28 4.14 16H2V18H4.14C4.59 19.72 6.14 21 8 21S11.41 19.72 11.86 18H22V16H11.86C11.41 14.28 9.86 13 8 13M8 19C6.9 19 6 18.1 6 17C6 15.9 6.9 15 8 15S10 15.9 10 17C10 18.1 9.1 19 8 19M19.86 6C19.41 4.28 17.86 3 16 3S12.59 4.28 12.14 6H2V8H12.14C12.59 9.72 14.14 11 16 11S19.41 9.72 19.86 8H22V6H19.86M16 9C14.9 9 14 8.1 14 7C14 5.9 14.9 5 16 5S18 5.9 18 7C18 8.1 17.1 9 16 9Z"/></svg>', Gl = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"/></svg>', ts = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/></svg>', Ul = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', wu = (n) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + n.map((r) => '<path d="' + r + '"/>').join("") + "</svg>", es = wu(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), Tp = wu(["M20 6L9 17L4 12"]), co = (n, r = "") => '<span class="tfAreaGlyph" data-icon-for="' + F(n || "") + '"' + (r ? ' data-icon-name="' + F(r) + '"' : "") + "></span>", W0 = (n) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (n ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', Lp = 1, Dp = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], Ep = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, as = ["door", "window", "garage_door", "opening"], Bp = { moisture: ["detected water", "dry"], smoke: ["detected smoke", "clear"], gas: ["detected gas", "clear"], carbon_monoxide: ["detected carbon monoxide", "clear"], safety: ["became unsafe", "safe"] }, lr = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve", "water_heater"], V0 = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], j0 = 10, z0 = 20, G0 = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, U0 = ["living room", "bedroom", "office"];
function Y0(n, { config: r, getHass: d }) {
  var yd, xd, Md;
  const p = (t) => n.getElementById(t), g = p("app"), v = r || {}, w = String(v.layout || "").toLowerCase().replace("_", "-") === "test-focus", T = String(v.page || "").toLowerCase() === "overview";
  let W = lo.get(pp) === "1", M = {};
  const D = (t) => {
    var e;
    return (e = d()) == null ? void 0 : e.callWS(t);
  }, I = (t, e, a) => D({ type: "call_service", domain: t, service: e, service_data: a }), G = n.querySelector("#appearancePane .toggleList");
  G && !p("densityToggle") && (G.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), p("densityToggle").addEventListener("click", () => {
    W = !W, lo.set(pp, W ? "1" : "0"), Y();
  }));
  const J = [
    ["weather", "Weather", "The forecast under Home.", (t) => t.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (t) => t.startsWith("sensor.") && zt(t).device_class === "power" && /^(W|kW)$/.test(zt(t).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm in the Security popup.", (t) => t.startsWith("alarm_control_panel.")]
  ], et = (t, e, a, o) => '<div class="themeChoice" id="' + t + '" role="group" aria-label="' + e + '">' + o.map(([i, l]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + a + '="' + i + '">' + l + "</button>").join("") + "</div>", at = (t, e, a, o) => '<div class="toggleRow"' + (o ? ' id="' + o + '"' : "") + "><div><strong>" + t + "</strong>" + (e ? '<div class="status">' + e + "</div>" : "") + "</div>" + a + "</div>";
  function X() {
    var R, E;
    if (!w || p("housePane")) return;
    const t = p("settingsView");
    t.querySelector(".settingsTitle").textContent = "HomeCore settings";
    const e = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], a = (B, k) => '<div class="houseTab' + (B === "look" ? " active" : "") + '" data-house-pane="' + B + '"><section class="card">' + k + "</section></div>";
    t.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + e.map(([B, k]) => '<button class="tab segBtn' + (B === "look" ? " active" : "") + '" type="button" data-house-tab="' + B + '">' + k + "</button>").join("") + "</div>" + // Appearance in groups (Matt, 8 Nov), each one's title inside its card as a card header (Matt, 9 Nov)
    a("look", P0.map(([B, k]) => '<div class="tfSetGroup"><div class="toggleList" data-look-group="' + B + '"><div class="tfCardTitle">' + k + "</div></div></div>").join("")) + // Lights as cards by default, with a Cards | Table choice (Matt, 9 Nov)
    a("lights", '<div class="tfLightView"><div class="themeChoice" role="group" aria-label="Show lights as"><button class="wxLayoutBtn" type="button" data-light-view="cards">Cards</button><button class="wxLayoutBtn" type="button" data-light-view="table">Table</button></div></div><p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div><div class="tfLightCards" id="lightCards"></div>') + a("sources", '<div class="toggleList">' + J.map(([B, k, P]) => at(k, P, '<select class="settingsSelect" data-source="' + B + '" aria-label="' + k + '"></select>')).join("") + "</div>") + a("sums", '<div class="toggleList">' + Object.entries(Yr).map(([B, k]) => at(k.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + B + '" aria-label="' + k.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const o = (B) => t.querySelector('[data-look-group="' + B + '"]'), i = (B) => B == null ? void 0 : B.closest(".toggleRow");
    [i(t.querySelector(".themeBtn"))].forEach((B) => B && o("look").appendChild(B));
    const l = i(p("densityToggle"));
    l && (l.hidden = !0), [i(p("moreInfoChoice")), i(p("namesChoice"))].forEach((B) => B && o("house").appendChild(B)), o("house").insertAdjacentHTML("beforeend", at("Lights", "How lights show on the house page.", et("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + at("Pad", "What the Dual Axis Controller’s pad sets on its tile.", et("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow")), [i(p("hoursChoice")), i(p("wxStyleChoice"))].forEach((B) => B && o("weather").appendChild(B));
    const c = p("housePane"), u = c.querySelector(".houseTabs"), f = u.querySelector(".rubberIndicator"), y = "homecore-light-view", S = (B) => {
      c.classList.toggle("tfLightCardsOn", B === "cards"), c.querySelectorAll("[data-light-view]").forEach((k) => k.setAttribute("aria-pressed", String(k.dataset.lightView === B))), lo.set(y, B);
    };
    S(lo.get(y) === "table" ? "table" : "cards"), c.querySelector(".tfLightView").addEventListener("click", (B) => {
      const k = B.target.closest("[data-light-view]");
      k && S(k.dataset.lightView);
    }), new ResizeObserver(() => nt()).observe(c), (E = (R = document.fonts) == null ? void 0 : R.ready) == null || E.then(() => nt());
    const x = (B) => {
      const k = u.querySelector(".tab.active");
      f.style.transition = "none", B ? rs(f, f.offsetLeft, f.offsetWidth, k.offsetLeft, k.offsetWidth) : (f.style.left = k.offsetLeft + "px", f.style.width = k.offsetWidth + "px");
    };
    new ResizeObserver(() => x(!1)).observe(u), c.addEventListener("click", (B) => {
      const k = B.target.closest("[data-house-tab]");
      if (k) {
        u.querySelectorAll(".tab").forEach((C) => C.classList.toggle("active", C === k)), c.querySelectorAll(".houseTab").forEach((C) => C.classList.toggle("active", C.dataset.housePane === k.dataset.houseTab)), k.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), x(!0), nt();
        return;
      }
      const P = B.target.closest("[data-light-fav]");
      if (P) {
        Qt(P.dataset.lightFav);
        return;
      }
      const _ = B.target.closest("[data-light-pick]");
      if (_) {
        const [C, rt] = _.dataset.lightPick.split("|"), Tt = { ...Xt[C] };
        _.dataset.v ? Tt[rt] = _.dataset.v : delete Tt[rt], Xt[C] = Tt, ho(), [...Ye.keys()].filter((Bt) => Bt.endsWith(":" + rt)).forEach((Bt) => Ye.delete(Bt)), za();
        return;
      }
      const z = B.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!z || z.disabled)) {
        if (z.dataset.lights && (Xt.lights = z.dataset.lights), z.dataset.dacPad && (Xt.dacPad = z.dataset.dacPad), (z.dataset.lights || z.dataset.dacPad) && (ho(), Ye.clear()), z.dataset.sumToggle) {
          const C = z.dataset.sumToggle, rt = new Set(wt.hiddenSums || []);
          rt.has(C) ? rt.delete(C) : rt.add(C), wt = { ...wt, hiddenSums: [...rt] }, ya();
        }
        za();
      }
    }), c.addEventListener("change", (B) => {
      const k = B.target;
      k.dataset.source && (wt = { ...wt, sources: { ...wt.sources || {}, [k.dataset.source]: k.value || void 0 } }, ya());
      const P = k.dataset.lightStyle || k.dataset.lightPad;
      if (P) {
        const _ = k.dataset.lightStyle ? "lightStyles" : "lightPads", z = { ...Xt[_] };
        k.value ? z[P] = k.value : delete z[P], Xt[_] = z, ho(), [...Ye.keys()].filter((C) => C.endsWith(":" + P)).forEach((C) => Ye.delete(C));
      }
      za();
    });
  }
  function N() {
    var x, R;
    Tr() && mi();
    const t = p("housePane");
    if (!t) return;
    const e = !!customElements.get(Ue);
    t.querySelectorAll("[data-lights]").forEach((E) => E.setAttribute("aria-pressed", String(E.dataset.lights === Xt.lights))), p("lightsRow").querySelector(".status").textContent = e || !Tr() ? "How lights show on the house page." : hn === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", t.querySelectorAll("[data-dac-pad]").forEach((E) => E.setAttribute("aria-pressed", String(E.dataset.dacPad === Xt.dacPad))), p("dacPadRow").hidden = !Tr();
    for (const E of t.querySelectorAll("[data-source]")) {
      if (E === n.activeElement) continue;
      const [B] = J.find(([P]) => P === E.dataset.source), k = Object.keys(M).filter(J.find(([P]) => P === B)[3]).sort((P, _) => mt(P).localeCompare(mt(_)));
      E.dataset.sig !== k.join(",") && (E.innerHTML = '<option value="">Automatic</option>' + k.map((P) => '<option value="' + F(P) + '">' + F(mt(P)) + "</option>").join(""), E.dataset.sig = k.join(",")), E.value = k.includes((x = wt.sources) == null ? void 0 : x[B]) ? wt.sources[B] : "";
    }
    t.querySelectorAll("[data-sum-toggle]").forEach((E) => {
      const B = !(wt.hiddenSums || []).includes(E.dataset.sumToggle);
      E.classList.toggle("on", B), E.setAttribute("aria-checked", String(B));
    });
    const a = p("lightRows"), o = p("lightCards"), i = n.activeElement, l = a != null && a.contains(i) || o != null && o.contains(i) ? i : null;
    if (!a || l != null && l.matches("select")) {
      nt();
      return;
    }
    const c = new Set(lt()), u = (E, B, k, P) => '<option value="' + E + '"' + (E === k ? " selected" : "") + ">" + B + "</option>", f = Object.keys(M).filter((E) => E.startsWith("light.")).sort((E, B) => !we.get(E) - !we.get(B) || (we.get(E) || "").localeCompare(we.get(B) || "") || mt(E).localeCompare(mt(B))).map((E) => {
      const B = Xt.lightStyles[E] || "", k = Xt.lightPads[E] || "", P = c.has(E), _ = F(mt(E));
      return "<tr><td><strong>" + _ + "</strong></td><td>" + F(we.get(E) || "—") + "</td><td>" + F(He(E)) + '</td><td class="metaSwitchCol"><button class="switch' + (P ? " on" : "") + '" type="button" role="switch" aria-checked="' + P + '" data-light-fav="' + F(E) + '" aria-label="' + _ + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + F(E) + '" aria-label="' + _ + ' tile">' + u("", "Default", B) + u("tile", "HomeCore tile", B) + u("dac", "Dual Axis Controller", B) + '</select></td><td><select class="settingsSelect" data-light-pad="' + F(E) + '" aria-label="' + _ + ' pad"' + (mn(E) ? "" : " disabled") + ">" + u("", "Default", k) + u("temperature", "Temperature", k) + u("colour", "Colour", k) + "</select></td></tr>";
    }).join(""), y = (E, B, k, P, _) => '<div class="themeChoice" role="group" aria-label="' + k + '">' + P.map(([z, C]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (z === _) + '" data-light-pick="' + E + "|" + F(B) + '" data-v="' + z + '">' + C + "</button>").join("") + "</div>", S = Object.keys(M).filter((E) => E.startsWith("light.")).sort((E, B) => !we.get(E) - !we.get(B) || (we.get(E) || "").localeCompare(we.get(B) || "") || mt(E).localeCompare(mt(B))).map((E) => {
      const B = c.has(E), k = F(mt(E)), P = [we.get(E), He(E)].filter(Boolean).map(F).join(" · ");
      return '<div class="toggleList"><div class="toggleRow"><div><strong>' + k + '</strong><div class="status">' + P + "</div></div></div>" + at("Favourite", "", '<button class="switch' + (B ? " on" : "") + '" type="button" role="switch" aria-checked="' + B + '" data-light-fav="' + F(E) + '" aria-label="' + k + ' is a favourite"></button>') + at("Tile", "", y("lightStyles", E, k + " tile", [["", "Default"], ["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]], Xt.lightStyles[E] || "")) + (mn(E) ? at("Pad", "", y("lightPads", E, k + " pad", [["", "Default"], ["temperature", "Temperature"], ["colour", "Colour"]], Xt.lightPads[E] || "")) : "") + "</div>";
    }).join("");
    a.dataset.html !== f && (a.innerHTML = f, a.dataset.html = f), o.dataset.html !== S && (o.innerHTML = S, o.dataset.html = S), l != null && l.dataset.lightFav && ((R = (o.contains(l) ? o : a).querySelector('[data-light-fav="' + CSS.escape(l.dataset.lightFav) + '"]')) == null || R.focus({ preventScroll: !0 })), nt();
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
            c.innerHTML = l.map((R, E) => '<option value="' + E + '"' + (R.disabled ? " disabled" : "") + ">" + F(R.textContent) + "</option>").join("");
            const x = l.findIndex((R) => R.getAttribute("aria-pressed") === "true" || R.classList.contains("active"));
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
  const dt = document.createElement("div");
  dt.className = "densityBadge", dt.setAttribute("aria-live", "polite"), dt.hidden = !0, g.appendChild(dt);
  let bt = 0;
  function it() {
    if (!W) return;
    const t = p("homeView"), e = (l) => l.offsetParent !== null && !l.closest("[hidden]");
    t.querySelectorAll(":scope .card, :scope .tfAction").forEach((l) => {
      e(l) && (l.dataset.h = Math.round(l.getBoundingClientRect().height) + " px");
    });
    const a = [...t.querySelectorAll(".activityRow, .tfAction, .wxNow")].filter(e), o = window.innerHeight, i = a.filter((l) => {
      const c = l.getBoundingClientRect();
      return c.height > 0 && c.top >= 0 && c.bottom <= o + 0.5;
    }).length;
    dt.hidden = !t.classList.contains("active"), dt.innerHTML = "<b>" + i + "</b><small>of " + a.length + " readings on screen</small>";
  }
  const K = () => {
    W && requestAnimationFrame(it);
  };
  function Y() {
    var t;
    g.classList.toggle("showDensity", W), (t = p("densityToggle")) == null || t.classList.toggle("on", W), dt.hidden = !W, clearInterval(bt), W && (bt = setInterval(it, 1e3), it());
  }
  window.addEventListener("scroll", K, { capture: !0, passive: !0 }), window.addEventListener("resize", K, { passive: !0 });
  const H = n.querySelector("#homeView .grid"), xt = document.createElement("style");
  n.appendChild(xt);
  const Rt = new ResizeObserver(() => Ft()), ct = /* @__PURE__ */ new Set(), U = (t) => {
    const e = t.getBoundingClientRect().height;
    return Math.abs(e - t.offsetHeight) < 1 ? e : t.offsetHeight;
  };
  function Ft() {
    const t = g.classList.contains("tfAreaOpen") && !g.classList.contains("tfWeatherOpen");
    if (H.classList.toggle("tfStack", t), ct.forEach((f) => {
      (!t || !f.isConnected) && (Rt.unobserve(f), ct.delete(f));
    }), !t) {
      xt.textContent = "";
      return;
    }
    const e = getComputedStyle(H), a = parseFloat(e.columnGap) || 0, o = e.gridTemplateColumns.split(" ").length, i = [...H.children].filter((f) => f.dataset.k && f.offsetParent);
    xt.disabled = !0;
    const l = i.map((f) => {
      const y = getComputedStyle(f), S = /span (\d+)/.exec(y.gridColumnStart + " " + y.gridColumnEnd);
      return Math.min(o, S ? +S[1] : y.gridColumnEnd === "-1" ? o : 1);
    });
    xt.disabled = !1;
    let c = 0;
    const u = i.map((f, y) => {
      ct.has(f) || (ct.add(f), Rt.observe(f));
      const S = l[y];
      c + S > o && (c = 0);
      const x = c + 1;
      return c = (c + S) % o, '#homeView .grid.tfStack>[data-k="' + CSS.escape(f.dataset.k) + '"]{grid-column:' + x + " / span " + S + ";grid-row-end:span " + Math.max(1, Math.ceil(U(f) + a)) + "}";
    }).join(`
`);
    xt.textContent !== u && (xt.textContent = u);
  }
  new MutationObserver(Ft).observe(H, { childList: !0 }), new MutationObserver(Ft).observe(g, { attributes: !0, attributeFilter: ["class"] });
  let V = null, Q = null, A = null;
  const ft = /* @__PURE__ */ new Map(), ot = /* @__PURE__ */ new Map(), st = /* @__PURE__ */ new Map(), vt = /* @__PURE__ */ new Set(), ht = /* @__PURE__ */ new Map(), kt = (t) => ht.set(t, (ht.get(t) || 0) + 1), qt = () => [.../* @__PURE__ */ new Set([...st.keys(), ...vt])];
  let re = !1;
  const wa = 6;
  let ia = null;
  const ua = /* @__PURE__ */ new Map(), Je = /* @__PURE__ */ new Map(), Bn = /* @__PURE__ */ new Map();
  let wt = { favourites: null }, Nt = {}, _e = {}, fo = [], ln = null;
  const va = (() => {
    try {
      return JSON.parse(lo.get(_p)) || {};
    } catch {
      return {};
    }
  })();
  let we = /* @__PURE__ */ new Map(), Jr = 0;
  function ya() {
    clearTimeout(Jr), Jr = setTimeout(() => Promise.resolve(D({ type: "frontend/set_user_data", key: Sp, value: wt })).catch(() => {
    }), 400);
  }
  const Xt = (() => {
    let t = {};
    try {
      t = JSON.parse(lo.get(Cp)) || {};
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
  })(), ho = () => lo.set(Cp, JSON.stringify(Xt)), fr = () => {
    g.dataset.more = Xt.more, g.dataset.names = Xt.names, il();
  };
  w && G && !p("moreInfoChoice") && (p("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + H0.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Xt.more === t) + '" data-more-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), p("moreInfoChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-more-style]");
    e && (Xt.more = e.dataset.moreStyle, ho(), fr(), p("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  }), p("moreInfoChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Long names</strong><div class="status">How a name or state too long for its space shows.</div></div><div class="themeChoice" id="namesChoice" role="group" aria-label="Long names">' + N0.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Xt.names === t) + '" data-names-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), p("namesChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-names-style]");
    e && (Xt.names = e.dataset.namesStyle, Xt.namesPicked = !0, ho(), fr(), p("namesChoice").querySelectorAll("[data-names-style]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  }), p("namesChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Next hours</strong><div class="status">The hours each day shows on the Weather page.</div></div><div class="themeChoice" id="hoursChoice" role="group" aria-label="Next hours">' + O0.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Xt.hoursWindow === t) + '" data-hours-window="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), p("hoursChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-hours-window]");
    e && (Xt.hoursWindow = e.dataset.hoursWindow, ho(), Me == null || Me.refresh(), p("hoursChoice").querySelectorAll("[data-hours-window]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  }), p("hoursChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Weather art</strong><div class="status">How the weather and the sky are drawn.</div></div><div class="themeChoice" id="wxStyleChoice" role="group" aria-label="Weather art">' + I0.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Xt.wxStyle === t) + '" data-wx-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), p("wxStyleChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-wx-style]");
    e && (Xt.wxStyle = e.dataset.wxStyle, ho(), Me == null || Me.setStyle(Xt.wxStyle), Ce == null || Ce.forEach((a) => a.setStyle(Xt.wxStyle)), p("wxStyleChoice").querySelectorAll("[data-wx-style]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  })), X();
  let Vt = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const xa = /* @__PURE__ */ new Map();
  let Qr = "";
  const ti = w ? hh({ onChange: () => Pe() }) : null;
  w && g.classList.add("house");
  const Ma = Object.assign(document.createElement("div"), { className: "tfBento" });
  let Me = null, ei = null, cn = !1;
  function ai(t) {
    const e = he();
    if (g.classList.toggle("houseBento", !!e), Me && (ei !== e || t == null) && (Me.destroy(), Me = null), !e || t == null) {
      Ma.remove();
      return;
    }
    Ma.isConnected || H.append(Ma), Ma.style.order = t, !Me && !cn && (Me = sp(Ma, { getHass: d, entityId: e, style: Xt.wxStyle, hoursWindow: () => Xt.hoursWindow, radarSource: mr }), ei = e);
  }
  const hr = [
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
  ], oi = hr.map(([t]) => t), zo = ["aq", "pollen", "radar", "hourly", "sun", "moon", "uv", "humidity", "pressure", "wind", "visibility"], us = { hourly: 2 }, Oa = Object.fromEntries(hr.map(([t]) => [t, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + t })]));
  let Ce = null, Rn = null;
  function ni(t) {
    const e = he();
    Ce && Rn !== e && (Ce.forEach((a) => a.destroy()), Ce = null), Object.values(Oa).forEach((a) => e ? !a.isConnected && H.append(a) : a.remove()), e && !Ce && !cn && (Ce = /* @__PURE__ */ new Map(), Rn = e), ri();
  }
  const mr = () => {
    var t;
    return ((t = ie().opts.radar) == null ? void 0 : t.source) || "rainviewer";
  }, fs = () => [["rainviewer", "RainViewer"], ...Object.values(M).filter((t) => t.entity_id.startsWith("camera.")).sort((t, e) => mt(t.entity_id).localeCompare(mt(e.entity_id))).map((t) => ["camera:" + t.entity_id, mt(t.entity_id)])];
  function ri() {
    if (!Ce || cn) return;
    const t = new Set(ie().hidden);
    hr.forEach(([e, a]) => {
      Ce.has(e) || t.has(e) && !(te != null && te.fromTray && te.key === e) || Ce.set(e, sp(Oa[e], { getHass: d, entityId: Rn, style: Xt.wxStyle, cards: a, onOpen: e === "wx" ? () => Jc("weather") : void 0, radarSource: mr }));
    });
  }
  const zt = (t) => {
    var e;
    return ((e = M[t]) == null ? void 0 : e.attributes) || {};
  }, mt = (t) => zt(t).friendly_name || t, fe = (t, e) => Ya(t) || (Number(zt(t).supported_features) & e) === e, Wt = (t) => {
    const e = String(t ?? "").replace(/_/g, " ");
    return e.charAt(0).toUpperCase() + e.slice(1);
  }, Re = (t, e = 1) => Number(t).toLocaleString(void 0, { minimumFractionDigits: e, maximumFractionDigits: e }), mo = (t) => (t == null ? void 0 : t.state) === "on" ? t.attributes.brightness != null ? Math.max(1, Math.round(t.attributes.brightness / 2.55)) : 100 : 0, gr = (t) => zt(t).supported_color_modes || [], hs = (t, e) => [5, 3, 1].map((a) => {
    const o = (a + t / 60) % 6;
    return 255 * (1 - e / 100 * Math.max(0, Math.min(o, 4 - o, 1)));
  }), br = (t) => (t /= 255, t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)), ii = (t) => 0.2126 * br(t[0]) + 0.7152 * br(t[1]) + 0.0722 * br(t[2]), ms = (t, e) => {
    const a = ii(t), o = ii(e);
    return (Math.max(a, o) + 0.05) / (Math.min(a, o) + 0.05);
  }, gs = 0.55, Go = ["hs", "xy", "rgb", "rgbw", "rgbww"], si = (t) => {
    const e = zt(t), a = Go.includes(e.color_mode);
    return (a && e.rgb_color ? e.rgb_color : a && e.hs_color ? hs(...e.hs_color) : [255, 170, 0]).map((o) => Math.round(Math.max(0, Math.min(255, o))));
  }, bs = { heat: [255, 111, 34], cool: [33, 150, 243], heat_cool: [255, 193, 7], auto: [76, 175, 80], dry: [255, 152, 0], fan_only: [0, 188, 212] };
  function dn(t) {
    var o;
    const e = t.split(".")[0], a = (o = M[t]) == null ? void 0 : o.state;
    return !a || a === "unavailable" || a === "unknown" ? null : e === "light" ? a === "on" ? si(t) : null : e === "climate" ? bs[a] || null : e === "cover" ? a !== "closed" ? [146, 107, 199] : null : e === "lock" ? a !== "locked" ? [244, 67, 54] : null : e === "media_player" ? ["playing", "paused", "on", "buffering"].includes(a) ? [3, 169, 244] : null : e === "humidifier" || e === "valve" ? ["on", "open", "opening", "closing"].includes(a) ? [33, 150, 243] : null : e === "vacuum" ? ["cleaning", "returning"].includes(a) ? [0, 150, 136] : null : e === "alarm_control_panel" ? a !== "disarmed" && a !== "triggered" ? [76, 175, 80] : null : e === "fan" ? a === "on" ? [0, 188, 212] : null : (e === "switch" || e === "input_boolean") && a === "on" ? [255, 193, 7] : null;
  }
  function wr(t, e, a = !1) {
    const [o, i, l] = t.map((B) => B / 255), c = Math.max(o, i, l), u = Math.min(o, i, l), f = c - u, y = f ? (c === o ? (i - l) / f + (i < l ? 6 : 0) : c === i ? (l - o) / f + 2 : (o - i) / f + 4) * 60 : 0, S = (c + u) / 2, x = f ? f / (1 - Math.abs(2 * S - 1)) : 0, R = f < 0.1 ? Math.min(x, 0.25) : 1, E = (B) => {
      const k = (_) => (_ + y / 30) % 12, P = R * Math.min(B, 1 - B);
      return [0, 8, 4].map((_) => Math.round(255 * (B - P * Math.max(-1, Math.min(k(_) - 3, 9 - k(_), 1)))));
    };
    for (let B = 0.5; a ? B < 0.96 : B > 0.04; B += a ? 0.01 : -0.01) {
      const k = E(B);
      if (ms(k, e) >= 3) return "rgb(" + k.join(",") + ")";
    }
    return a ? "#ffffff" : "#26221e";
  }
  const Pn = (t) => {
    const e = [1, 3, 5].map((a) => parseInt(t.slice(a, a + 2), 16));
    return Math.max(...e) - Math.min(...e) < 26 ? "" : ";--sum-d:" + wr(e, [58, 58, 58], !0) + ";--sum-l:" + wr(e, [230, 230, 230]);
  }, li = { d: ["#ffb894", "#d2b4ff", "#9dcbff"], l: ["#f0946a", "#b48ae6", "#6fa8e8"] }, go = () => [0, 1, 2].map((t) => "--g" + t + "-d:" + li.d[t] + ";--g" + t + "-l:" + li.l[t]).join(";"), vr = '<svg class="tfGradDefs" aria-hidden="true" focusable="false"><defs><linearGradient id="hcClimateGrad" x1="0" y1="0" x2="0" y2="1">' + [0.15, 0.5, 0.85].map((t, e) => '<stop offset="' + t + '" style="stop-color:var(--g' + e + ')"/>').join("") + "</linearGradient></defs></svg>", Ka = (t) => {
    const e = t.map((a) => Math.round(a + (255 - a) * gs));
    return "--light-soft:rgb(" + e.join(",") + ");--light-ink:" + wr(t, e);
  }, Uo = (t) => Ka(si(t)), Xa = (t) => {
    const e = dn(t);
    return e ? ' data-light style="' + Ka(e) + '"' : "";
  }, $a = (t) => {
    const e = gr(t);
    return e.length ? e.some((a) => a !== "onoff") : zt(t).brightness != null;
  }, Hn = (t) => [zt(t).min_color_temp_kelvin || 2e3, zt(t).max_color_temp_kelvin || 6500], Ja = (t) => new Date(t).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
  function Nn(t) {
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
  const ka = (t) => {
    var e;
    return zt(t).current_position ?? (((e = M[t]) == null ? void 0 : e.state) === "closed" ? 0 : 100);
  }, pn = (t) => {
    var e;
    return Ze("pos", t, ((e = ua.get(t)) == null ? void 0 : e.pos) ?? ka(t));
  }, yr = (t) => {
    var e;
    return Ze("tilt", t, ((e = ua.get(t)) == null ? void 0 : e.tilt) ?? zt(t).current_tilt_position);
  };
  function He(t) {
    var c;
    const e = M[t];
    if (!e) return "Not found";
    if (e.state === "unavailable") return "Unavailable";
    const a = e.attributes, o = t.split(".")[0];
    if (o === "light") {
      if (e.state !== "on") return "Off";
      const u = a.color_temp_kelvin;
      return ($a(t) ? mo(e) + "%" : "On") + (a.color_mode === "color_temp" && u ? " · " + Number(u).toLocaleString() + "k" : Go.includes(a.color_mode) ? " · Colour" : "");
    }
    if (o === "climate") return (e.state === "off" ? "Off" : Wt(a.hvac_action || e.state)) + " · " + Re(a.current_temperature) + " °C now";
    if (o === "cover") {
      const u = ka(t), f = a.current_tilt_position;
      return e.state === "opening" || e.state === "closing" ? Wt(e.state) + " - " + u + "%" : (u <= 0 ? "Closed" : u >= 100 ? "Open" : "Partially open") + (f > 0 && f < 100 ? " · tilted" : "");
    }
    if (o === "humidifier") return e.state !== "on" ? "Off" : Wt(a.action || "on") + " · " + a.current_humidity + "% now";
    if (o === "vacuum") return Wt(e.state) + (e.state === "cleaning" && ((c = a.rooms) != null && c.length) ? " · " + a.rooms.join(", ") : "") + (a.battery_level != null ? " · " + a.battery_level + "%" : "");
    if (o === "media_player") return e.state === "playing" || e.state === "paused" ? (e.state === "paused" ? "Paused · " : "") + (a.media_title || "Playing") : Wt(e.state);
    if (o === "alarm_control_panel") return Ep[e.state] || Wt(e.state);
    if (o === "lock" || o === "valve") return Wt(e.state);
    if (o === "switch") return e.state === "on" ? "On" : "Off";
    if (o === "plant") return e.state === "ok" ? "Healthy" : Wt(a.problem);
    if (o === "binary_sensor")
      return a.device_class === "battery" ? e.state === "on" ? "Low" : "Normal" : a.device_class === "problem" ? e.state === "on" ? "Problem" : "OK" : a.device_class === "moisture" ? e.state === "on" ? "Wet" : "Dry" : as.includes(a.device_class) ? e.state === "on" ? "Open" : "Closed" : e.state === "on" ? "Detected" : "Clear";
    if (a.rang) return "Rang at " + Ja(a.rang);
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
    return Wt(e.state);
  }
  const xr = (t) => t >= 1e3 ? Re(t / 1e3, 2) + " kW" : Math.round(t).toLocaleString() + " W";
  function bo(t) {
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
      } else i.textContent || (i.textContent = (i.dataset.letter || mt(i.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    }), (a = t.querySelectorAll) == null || a.call(t, ".tfIcon").forEach(di), (o = t.classList) != null && o.contains("tfIcon") && di(t), Sr();
  }
  const ci = /* @__PURE__ */ new Map();
  function di(t) {
    var l, c, u;
    const e = (((l = t.closest("[data-k]")) == null ? void 0 : l.dataset.k) || "") + "|" + (t.dataset.iconFor || ((c = t.querySelector("[data-icon-for]")) == null ? void 0 : c.dataset.iconFor) || t.getAttribute("aria-label") || ""), a = getComputedStyle(t), o = { backgroundColor: a.backgroundColor, color: a.color }, i = ci.get(e);
    ci.set(e, o), !(!i || i.backgroundColor === o.backgroundColor && i.color === o.color || (u = window.matchMedia) != null && u.call(window, "(prefers-reduced-motion: reduce)").matches) && t.animate([i, o], { duration: De.warp.cdur, delay: De.warp.cdelay, easing: Ee[De.warp.ease], fill: "backwards" });
  }
  const Mr = "[data-icon-for]>:is(ha-state-icon,ha-icon),.tfIcon>svg", un = (t) => {
    const e = [t];
    for (; e.length; ) {
      const a = e.shift();
      if (a.localName === "svg") return a;
      a.shadowRoot && e.push(...a.shadowRoot.children), e.push(...a.children);
    }
    return null;
  };
  function kr(t) {
    var E, B, k;
    const e = t.localName === "svg" ? t : un(t), a = e ? [...e.querySelectorAll("path,rect,circle,ellipse,polygon,polyline,line")] : [];
    if (!a.length) return !e;
    const o = (E = t.closest(".tfIcon")) == null ? void 0 : E.offsetWidth;
    if (o === void 0) return !0;
    if (!o) return !1;
    const i = o + "|" + a.map((P) => P.getAttribute("d") || P.localName).join("|");
    if (t.dataset.fitted === i) return !0;
    let l = 1 / 0, c = 1 / 0, u = -1 / 0, f = -1 / 0;
    for (const P of a) {
      const _ = P.getBBox(), z = getComputedStyle(P), C = z.stroke !== "none" ? (parseFloat(z.strokeWidth) || 0) / 2 : 0;
      !_.width && !_.height || (l = Math.min(l, _.x - C), c = Math.min(c, _.y - C), u = Math.max(u, _.x + _.width + C), f = Math.max(f, _.y + _.height + C));
    }
    if (!(u > l)) return !1;
    const y = (k = (B = e.viewBox) == null ? void 0 : B.baseVal) != null && k.width ? e.viewBox.baseVal : { x: 0, y: 0, width: 24, height: 24 }, S = o > 40 ? o * (26 / 40) : o - 14, x = S * y.width / Math.max(u - l, f - c), R = x / y.width;
    return t.localName === "svg" ? (t.style.width = x + "px", t.style.height = x + "px") : t.style.setProperty("--mdc-icon-size", x + "px"), e.style.translate = ((y.x + y.width / 2 - (l + u) / 2) * R).toFixed(2) + "px " + ((y.y + y.height / 2 - (c + f) / 2) * R).toFixed(2) + "px", t.dataset.fitted = i, !0;
  }
  let wo = 0;
  function pi(t = 0) {
    clearTimeout(wo), [...n.querySelectorAll(Mr)].filter((a) => !kr(a)).length && t < 5 && (wo = setTimeout(() => pi(t + 1), 300));
  }
  function Sr() {
    clearTimeout(wo), wo = setTimeout(() => pi(), 60);
  }
  const _r = (t) => {
    var e, a, o;
    return t.startsWith("light.") && M[t] && !zt(t).icon && !((o = (a = (e = d()) == null ? void 0 : e.entities) == null ? void 0 : a[t]) != null && o.icon) ? "mdi:lightbulb" : "";
  }, ve = (t, e, a) => (e = e || _r(t), ' data-icon-for="' + F(t) + '"' + (e ? ' data-icon-name="' + F(e) + '"' : "") + (a ? ' data-letter="' + F(a) + '"' : "")), Sa = (t) => t.endsWith("_solar_power") ? "mdi:solar-power-variant" : zt(t).rang ? "mdi:doorbell" : "", Et = (t, e, a, o) => F([t, e, a, o ? JSON.stringify(o) : ""].join("|")), _a = (t) => F(JSON.stringify(t));
  function fn(t) {
    const e = F(mt(t) + ", " + He(t));
    return '<div class="activityRow tap" role="button" tabindex="0" data-more="' + F(t) + '" aria-label="' + e + '. More info"><div class="tfIcon" aria-hidden="true"' + ve(t, Sa(t)) + '></div><div><div class="activityRowName">' + F(mt(t)) + '</div><div class="activityRowMeta">' + F(He(t)) + "</div></div></div>";
  }
  const Cr = (t, e, a) => '<div class="activityRow" aria-label="' + F(t + ", " + e) + '"><div class="tfIcon" aria-hidden="true"' + ve("", a, t) + '></div><div><div class="activityRowName">' + F(t) + '</div><div class="activityRowMeta">' + F(e) + "</div></div></div>";
  function Qa(t, e, a, o, i = "", l = null, c = "") {
    return '<section class="card tfCard' + (c ? " " + c : "") + '" data-tf data-k="' + F(t) + '" style="order:' + e + '" aria-label="' + F(a) + '"><div class="activityHeader">' + (l ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + F(l) + '" aria-label="' + F(a + (M[l] ? ", " + He(l) : "") + ". More info") + '">' + F(a) + "</button>" : '<div class="activityTitle">' + F(a) + "</div>") + '</div><div class="activityRows">' + o.join("") + "</div>" + i + "</section>";
  }
  function Yo(t, e) {
    const a = "readings:" + t.id, o = t.readings.map((i) => fn(i));
    return t.power != null && o.push(Cr("Power now", xr(t.power), "mdi:flash")), Qa(a, e, "Readings", o);
  }
  function On(t, e) {
    var u;
    const a = "energy:" + t.id, [o, i] = [t.solar.find((f) => f.endsWith("_power")), t.solar.find((f) => f.endsWith("_today"))], l = [o, i].filter(Boolean).map((f) => fn(f)), c = Number(((u = M[o]) == null ? void 0 : u.state) || 0) * 1e3;
    return Vt.grid && (l.push(fn(Vt.grid)), l.push(Cr("House use", xr(c + Number(M[Vt.grid].state)), "mdi:home-lightning-bolt"))), Qa(a, e, "Energy", l, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const vo = (t, e) => Qa("plant:" + t.id, e, mt(t.id), t.readings.map((a) => fn(a)), "", t.id);
  function Zo(t, e, a, o, i, l, c = null) {
    const u = a == null ? null : Math.max(0, Math.min(1, a)), f = u == null ? 0 : Math.round(u * 100);
    return '<div class="tfBar ' + t + '" role="slider" tabindex="0" aria-label="' + F(o) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + f + '"' + (i ? ' aria-valuetext="' + F(i) + '"' : "") + ' data-drag="' + F(t + "|" + e) + '">' + (c != null ? '<span class="was" aria-hidden="true" style="left:' + c + '%"></span>' : "") + (l ? u == null ? "" : '<b style="left:' + f + '%"></b>' : '<i style="width:' + f + '%"></i>') + "</div>";
  }
  const In = "homecore-house-last-bright", yo = (() => {
    try {
      return JSON.parse(lo.get(In)) || {};
    } catch {
      return {};
    }
  })();
  let ui = 0;
  const Oe = (t, e) => {
    !e || yo[t] === e || (yo[t] = e, clearTimeout(ui), ui = setTimeout(() => lo.set(In, JSON.stringify(yo)), 500));
  }, Qe = (t, e, a, o) => '<div class="tfStep" role="group" aria-label="' + F(t) + '"><button type="button" data-act="' + a + '" aria-label="Lower ' + F(t.toLowerCase()) + '">' + hp.down + "</button><output>" + F(e) + '</output><button type="button" data-act="' + o + '" aria-label="Raise ' + F(t.toLowerCase()) + '">' + hp.up + "</button></div>", fa = (t, e, a) => '<div class="' + t + '" role="group" aria-label="' + F(e) + '">' + a.filter(Boolean).map((o) => '<button type="button" data-act="' + o.act + '"' + (o.pressed != null ? ' aria-pressed="' + o.pressed + '"' : "") + (o.disabled ? " disabled" : "") + (o.aria ? ' aria-label="' + F(o.aria) + '"' : "") + ">" + (o.html || F(o.label)) + "</button>").join("") + "</div>", Fn = (t, e) => "width:" + Math.round(Math.max(0, Math.min(1, (t - e * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * e / 3).toFixed(2), Ko = (t) => "left:calc(4px + " + t / 100 + " * (100% - 8px))", Ar = (t, e) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + F(mt(t)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(e) + '" aria-valuetext="' + Math.round(e) + '% open" data-blocks="' + F(t) + '">' + [0, 1, 2, 3].map((a) => '<span><i style="' + Fn(e, a) + '"></i><b' + (e >= (a + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (a + 1) * 25 + "<small>%</small></b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + Ko(e) + '">' + Math.round(e) + "%</output></div>";
  function ws(t, e) {
    t.querySelectorAll(":scope>span").forEach((o, i) => {
      o.firstElementChild.setAttribute("style", Fn(e, i)), o.lastElementChild.classList.toggle("lit", e >= (i + 1) * 25 - 12);
    });
    const a = t.querySelector(".tfTip");
    a.setAttribute("style", Ko(e)), a.textContent = Math.round(e) + "%", t.setAttribute("aria-valuenow", String(Math.round(e))), t.setAttribute("aria-valuetext", Math.round(e) + "% open");
  }
  const qn = (t, e) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + F(mt(t)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(e) + '" aria-valuetext="' + Math.round(e) + '% open" data-drag="tilt|' + F(t) + '"><i style="width:calc((100% - 8px) * ' + e / 100 + ')"></i><span' + (e > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (e > 92 ? ' class="lit"' : "") + ">Open</span></div>", fi = (t, e, a) => '<div class="tfSeg tfCoverBtns" role="group" aria-label="' + F(mt(t)) + '">' + [
    fe(t, vp) && ["open", "Open", "open_cover", e >= 100 && !a],
    fe(t, xp) && ["stop", "Stop", "stop_cover", !1],
    fe(t, yp) && ["close", "Close", "close_cover", e <= 0 && !a]
  ].filter(Boolean).map(([o, i, l, c]) => '<button type="button" data-act="' + Et("cover", l, t) + '" aria-label="' + i + '"' + (c ? " disabled" : "") + ">" + B0[o] + "</button>").join("") + "</div>", Xo = (t, e) => '<button class="tfIcon' + (e.art ? " art" : "") + '" type="button" data-act="' + e.button.act + '" aria-label="' + F(e.button.label) + '"' + (e.art ? ' style="background-image:url(&quot;' + F(e.art) + '&quot;)"' : ve(t, e.icon)) + "></button>", Wn = (t) => '<button class="tfName" type="button" data-more="' + F(t) + '" aria-label="' + F(mt(t) + ", " + He(t) + ". More info") + '"><span class="activityRowName">' + F(mt(t)) + '</span><span class="activityRowMeta">' + F(He(t)) + "</span></button>";
  function $o(t, e = !1, a = null) {
    const o = Mo(t), i = t.startsWith("light.") && ha(t) && !(a && Un(t) < 3), l = a || (e && t.startsWith("light.") ? ["bright"] : null), c = i ? ['<div class="tfDacPad" data-dac="' + (e ? "more:" : a ? "dash:" : "tile:") + F(t) + '"></div>'] : o.sections.map((u, f) => u && (!l || l.includes((o.parts || [])[f])) ? u : "").filter(Boolean);
    return '<div class="tfAction' + (i ? " tfDac" : "") + (o.on ? " on" : "") + (!i && !c.length ? " tfHeadOnly" : "") + '" data-k="' + F(t) + '"' + (o.tone ? ' data-tone="' + o.tone + '"' : "") + Xa(t) + '><div class="tfActionHead">' + Xo(t, o) + Wn(t) + "</div>" + c.join("") + "</div>";
  }
  const Ue = "dual-controller-v3", hi = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.5/dist/dual-axis-controller-v4.js";
  let hn = null;
  async function mi() {
    if (hn || customElements.get(Ue)) return;
    hn = "loading";
    const t = await Promise.resolve().then(() => D({ type: "lovelace/resources" })).catch(() => null), e = Array.isArray(t) && t.some((o) => /dual-axis-controller/i.test(o.url || ""));
    if (await Promise.race([customElements.whenDefined(Ue), new Promise((o) => setTimeout(o, e ? 8e3 : 0))]), customElements.get(Ue)) return;
    const a = Object.assign(document.createElement("script"), { src: hi });
    a.onerror = () => {
      hn = "failed", N();
    }, document.head.appendChild(a);
  }
  const Ye = /* @__PURE__ */ new Map(), mn = (t) => (Xt.lightStyles[t] || Xt.lights) === "dac", Tr = () => Xt.lights === "dac" || Object.values(Xt.lightStyles).includes("dac");
  function ha(t) {
    return mn(t) && !!customElements.get(Ue);
  }
  const Ia = (t) => Xt.lightPads[t] || Xt.dacPad, gn = () => {
    const t = d();
    return t && {
      ...t,
      themes: { ...t.themes || {}, darkMode: !g.classList.contains("light") },
      callService: (e, a, o, ...i) => t.callService(e, ...bd(e, a, o), ...i)
    };
  }, gi = "ha-card,.hc.hcTile{padding:0!important;border:0!important;border-radius:0!important;background:none!important;box-shadow:none!important}.hcTileHead{display:none!important}.hc--dark{--hc-text:var(--color-text-primary,#f1f1f1)}.halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,198px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}.hc.hcTile{max-width:var(--tf-dac-max,280px)!important}", bi = (t) => {
    !t.shadowRoot || t.shadowRoot.querySelector("style[data-tf]") || (t.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: gi })).dataset.tf = "");
  }, to = /* @__PURE__ */ new Map(), Jo = new ResizeObserver((t) => t.forEach(({ target: e }) => {
    const a = e.parentElement;
    !a || !e.offsetHeight || (a.style.removeProperty("min-height"), to.set(a.dataset.dac, a.offsetHeight));
  }));
  function xo(t) {
    t.querySelectorAll("[data-dac]").forEach((e) => {
      const a = e.dataset.dac;
      let o = Ye.get(a);
      if (!o) {
        const i = a.slice(a.indexOf(":") + 1);
        o = document.createElement(Ue), o.setConfig({ type: "custom:" + Ue, entity: i, pad: Ia(i), tap_action: { action: "none" } }), Ye.set(a, o);
      }
      o.hass = gn(), o.parentNode !== e && e.replaceChildren(o), !o.offsetHeight && to.has(a) && (e.style.minHeight = to.get(a) + "px"), Jo.observe(o), bi(o);
    });
  }
  function wi() {
    const t = gn();
    Ye.forEach((e, a) => {
      e.isConnected ? e.hass = t : Ye.delete(a);
    });
  }
  customElements.whenDefined(Ue).then(() => {
    w && (H != null && H.querySelector("[data-tf]")) && td(za);
  });
  const Ze = (t, e, a) => st.has(t + "|" + e) ? st.get(t + "|" + e) : a;
  function Mo(t) {
    var l, c;
    const e = M[t], a = e.attributes, o = t.split(".")[0], i = (u, f) => ({ act: Et(u, "toggle", t), label: f });
    if (o === "light") {
      const u = e.state === "on", f = gr(t), [y, S] = Hn(t), x = Ze("bright", t, mo(e));
      u && Oe(t, mo(e));
      const R = Ze("ct", t, u && a.color_mode === "color_temp" ? a.color_temp_kelvin : null), E = Ze("hue", t, u && Go.includes(a.color_mode) && a.hs_color ? a.hs_color[0] : null);
      return { on: u, button: i("light", "Turn " + mt(t) + (u ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        $a(t) && Zo("bright", t, x / 100, mt(t) + " brightness", x + "%", !1, u ? null : yo[t] ?? null),
        f.includes("color_temp") && Zo("ct", t, R == null ? null : (R - y) / (S - y), mt(t) + " warm to cool", R == null ? "" : Math.round(R) + " kelvin", !0),
        f.some((B) => Go.includes(B)) && Zo("hue", t, E == null ? null : E / 360, mt(t) + " colour", "", !0)
      ] };
    }
    if (o === "climate") {
      const u = a.target_temp_step || 0.5, f = Number(a.temperature);
      return { on: e.state !== "off", tone: e.state === "cool" || a.hvac_action === "cooling" ? "cool" : "heat", button: i("climate", "Turn " + mt(t) + (e.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(f) && Qe("Target temperature", Re(f) + " °C", Et("climate", "set_temperature", t, { temperature: f - u }), Et("climate", "set_temperature", t, { temperature: f + u })),
        fa("tfSeg", "Mode", (a.hvac_modes || []).map((y) => ({ label: Wt(y), act: Et("climate", "set_hvac_mode", t, { hvac_mode: y }), pressed: e.state === y })))
      ] };
    }
    if (o === "cover") {
      const u = e.state === "opening" || e.state === "closing", f = e.state === "closed", y = pn(t), S = yr(t);
      return { on: !f, tone: "blue", icon: Mp[Wl(e)][f ? 1 : 0], button: i("cover", (f ? "Open " : "Close ") + mt(t)), parts: ["blocks", "tilt", "buttons"], sections: [
        fe(t, jl) && Ar(t, y),
        S != null && qn(t, S),
        fi(t, y, u)
      ] };
    }
    if (o === "humidifier") {
      const u = Number(a.humidity);
      return { on: e.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: i("humidifier", "Turn " + mt(t) + (e.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(u) && Qe("Target humidity", u + "%", Et("humidifier", "set_humidity", t, { humidity: u - 1 }), Et("humidifier", "set_humidity", t, { humidity: u + 1 })),
        ((l = a.available_modes) == null ? void 0 : l.length) && fa("tfSeg", "Mode", a.available_modes.map((f) => ({ label: Wt(f), act: Et("humidifier", "set_mode", t, { mode: f }), pressed: a.mode === f })))
      ] };
    }
    if (o === "media_player") {
      const u = e.state === "playing", f = e.state === "off" || e.state === "standby", y = Ze("vol", t, a.volume_level), S = f ? { act: Et("media_player", fe(t, D0) ? "turn_on" : "toggle", t), label: "Turn " + mt(t) + " on" } : e.state === "playing" || e.state === "paused" ? { act: Et("media_player", "media_play_pause", t), label: (u ? "Pause " : "Play ") + mt(t) } : { act: Et("media_player", fe(t, E0) ? "turn_off" : "toggle", t), label: "Turn " + mt(t) + " off" };
      return { on: !f, tone: "blue", art: !f && a.entity_picture ? a.entity_picture : null, button: S, parts: ["playback", "volume"], sections: f ? [] : [
        (fe(t, gp) || fe(t, bp) || fe(t, mp) || fe(t, wp)) && fa("tfSeg", "Playback", [
          { html: Qi.prev, aria: "Previous", act: Et("media_player", "media_previous_track", t), disabled: !fe(t, gp) },
          { html: u ? Qi.pause : Qi.play, aria: u ? "Pause" : "Play", act: Et("media_player", "media_play_pause", t), disabled: !(fe(t, mp) || fe(t, wp)) },
          { html: Qi.next, aria: "Next", act: Et("media_player", "media_next_track", t), disabled: !fe(t, bp) }
        ]),
        fe(t, L0) && y != null && Zo("vol", t, y, mt(t) + " volume", Math.round(y * 100) + "%")
      ] };
    }
    if (o === "vacuum") {
      const u = e.state === "cleaning", f = a.rooms || [], y = (x) => f.includes(x) ? f.filter((R) => R !== x) : f.concat(x), S = Et("vacuum", u ? "pause" : "start", t, Ya(t) ? { rooms: f } : null);
      return { on: u || e.state === "returning", tone: "blue", button: { act: S, label: (u ? "Pause " : "Start ") + mt(t) }, parts: ["controls", "rooms"], sections: [
        fa("tfSeg", mt(t), [
          { label: u ? "Pause" : "Start", act: S },
          { label: "Dock", act: Et("vacuum", "return_to_base", t), disabled: e.state === "docked" },
          { label: "Locate", act: Et("vacuum", "locate", t) }
        ]),
        Ya(t) && fa("tfChips", "Rooms to clean", Vt.rooms.filter((x) => x.id !== "balcony").map((x) => ({ label: x.name, act: Et("vacuum", "set_rooms", t, { rooms: y(x.name) }), pressed: f.includes(x.name) })))
      ] };
    }
    if (o === "lock") {
      const u = e.state === "locked";
      return { on: !u, tone: "heat", button: { act: Et("lock", u ? "unlock" : "lock", t), label: (u ? "Unlock " : "Lock ") + mt(t) }, parts: ["controls"], sections: [
        fa("tfSeg", mt(t), [
          { label: "Lock", act: Et("lock", "lock", t), pressed: u },
          { label: "Unlock", act: Et("lock", "unlock", t), pressed: e.state === "unlocked" },
          fe(t, Lp) && { label: "Open", act: Et("lock", "open", t), pressed: e.state === "open" }
        ])
      ] };
    }
    if (o === "alarm_control_panel") {
      const u = e.state === "disarmed";
      return { on: !u, tone: e.state === "triggered" ? "alarm" : "blue", button: { act: Et("alarm_control_panel", u ? "alarm_arm_away" : "alarm_disarm", t), label: u ? "Arm " + mt(t) + ", away" : "Disarm " + mt(t) }, parts: ["controls"], sections: [
        fa("tfSeg", mt(t), Dp.filter(([, , , f]) => !f || fe(t, f)).map(([f, y, S]) => ({ label: y, act: Et("alarm_control_panel", S, t), pressed: e.state === f })))
      ] };
    }
    if (o === "valve") {
      const u = e.state === "open";
      return { on: u, tone: "blue", icon: "mdi:sprinkler-variant", button: i("valve", (u ? "Close " : "Open ") + mt(t)), parts: ["controls"], sections: [
        fa("tfSeg", mt(t), [
          { label: "Open", act: Et("valve", "open_valve", t), pressed: u },
          { label: "Close", act: Et("valve", "close_valve", t), pressed: !u }
        ])
      ] };
    }
    if (o === "water_heater") {
      const u = Number(a.temperature), f = a.target_temp_step || 1, y = e.state !== "off";
      return { on: y, tone: "heat", icon: "mdi:water-boiler", button: { act: Et("water_heater", y ? "turn_off" : "turn_on", t), label: "Turn " + mt(t) + (y ? " off" : " on") }, parts: ["step", "modes"], sections: [
        Number.isFinite(u) && Qe("Target temperature", u + " °C", Et("water_heater", "set_temperature", t, { temperature: u - f }), Et("water_heater", "set_temperature", t, { temperature: u + f })),
        ((c = a.operation_list) == null ? void 0 : c.length) && fa("tfSeg", "Mode", a.operation_list.map((S) => ({ label: Wt(S), act: Et("water_heater", "set_operation_mode", t, { operation_mode: S }), pressed: (a.operation_mode || e.state) === S })))
      ] };
    }
    if (Zr.includes(o)) {
      const u = e.state === "on";
      return { on: u, button: i(o, "Turn " + mt(t) + (u ? " off" : " on")), parts: [], sections: [] };
    }
    return { on: !1, button: { act: "", label: mt(t) }, sections: [] };
  }
  const Ca = (t) => (Number.isInteger(Number(t)) ? String(Number(t)) : Re(t)) + "°";
  function Vn(t) {
    var P;
    const e = (_) => t.readings.find((z) => zt(z).device_class === _), a = e("temperature"), o = e("humidity"), i = (_) => {
      var z;
      return Number((z = M[_]) == null ? void 0 : z.state);
    }, l = (_) => t.actions.filter((z) => _.test(z)), c = t.lights.filter((_) => {
      var z;
      return ((z = M[_]) == null ? void 0 : z.state) === "on";
    }), u = l(/^cover\./), f = u.filter((_) => {
      var z;
      return ((z = M[_]) == null ? void 0 : z.state) !== "closed";
    }), y = [...new Set(u.map((_) => Wl(M[_])))], S = l(/^climate\./)[0], x = l(/^humidifier\./)[0], R = l(/^media_player\./), E = R.find((_) => {
      var z;
      return ((z = M[_]) == null ? void 0 : z.state) === "playing";
    }) || R.find((_) => {
      var z;
      return ((z = M[_]) == null ? void 0 : z.state) === "paused";
    }), B = t.plugs.filter((_) => {
      var z;
      return ((z = M[_]) == null ? void 0 : z.state) === "on";
    }), k = [];
    if (a && Number.isFinite(i(a)) && k.push({ key: "temp", id: a, kind: "reading", icon: co(a), label: "Temperature", value: Re(i(a)) + "°" }), o && Number.isFinite(i(o)) && k.push({ key: "hum", id: o, kind: "reading", icon: co(o), label: "Humidity", value: Math.round(i(o)) + "%" }), t.lights.length && k.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: co("", "mdi:lightbulb"),
      label: "Lights",
      value: c.length ? c.length + " of " + t.lights.length + " on" : "All off",
      short: c.length ? c.length + " on" : "Off",
      on: c.length > 0,
      light: c.length ? Uo(c[0]) : "",
      acts: t.lights.map((_) => ["light", c.length ? "turn_off" : "turn_on", _]),
      aria: (c.length ? "Turn off" : "Turn on") + " the lights in " + t.name
    }), u.length) {
      const _ = y.length === 1 ? R0[y[0]] : "covers", z = Math.round(u.reduce((C, rt) => C + ka(rt), 0) / u.length);
      k.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        light: f.length ? Ka([146, 107, 199]) : "",
        icon: co("", ((P = Mp[y[0]]) == null ? void 0 : P[f.length ? 0 : 1]) || "mdi:window-shutter"),
        label: Wt(_),
        value: z <= 0 ? "Closed" : z >= 100 ? "Open" : z + "% open",
        short: z <= 0 ? "Closed" : z + "%",
        on: f.length > 0,
        acts: u.map((C) => ["cover", f.length ? "close_cover" : "open_cover", C]),
        aria: (f.length ? "Close the " : "Open the ") + _ + " in " + t.name
      });
    }
    if (S) {
      const _ = zt(S), z = M[S].state === "off";
      k.push({
        key: "climate",
        kind: "control",
        tone: _.hvac_action === "cooling" ? "cool" : "heat",
        light: dn(S) ? Ka(dn(S)) : "",
        icon: co(S),
        label: mt(S),
        value: z ? "Off" : Wt(_.hvac_action || M[S].state) + " · " + Ca(_.temperature),
        short: z ? "Off" : Ca(_.temperature),
        on: !z,
        acts: [["climate", "toggle", S]],
        aria: "Turn " + mt(S) + (z ? " on" : " off")
      });
    }
    if (x) {
      const _ = M[x].state === "on";
      k.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        light: _ ? Ka([33, 150, 243]) : "",
        icon: co("", "mdi:air-humidifier"),
        label: mt(x),
        value: _ ? "On · " + zt(x).humidity + "%" : "Off",
        short: _ ? zt(x).humidity + "%" : "Off",
        on: _,
        acts: [["humidifier", "toggle", x]],
        aria: "Turn " + mt(x) + (_ ? " off" : " on")
      });
    }
    if (R.length) {
      const _ = E || R[0], z = M[_], C = z.state === "playing";
      k.push({
        key: "media",
        kind: "control",
        tone: "blue",
        light: dn(_) ? Ka(dn(_)) : "",
        icon: co(_),
        label: mt(_),
        value: He(_),
        short: C ? "Playing" : z.state === "paused" ? "Paused" : Wt(z.state),
        on: C,
        acts: [["media_player", z.state === "playing" || z.state === "paused" ? "media_play_pause" : "toggle", _]],
        aria: (C ? "Pause " : "Play ") + mt(_)
      });
    }
    return t.plugs.length && k.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      light: B.length ? Ka([255, 193, 7]) : "",
      icon: co("", "mdi:power-plug"),
      label: "Plugs",
      value: B.length ? B.length + " of " + t.plugs.length + " on" : "All off",
      short: B.length ? B.length + " on" : "Off",
      on: B.length > 0,
      acts: t.plugs.map((_) => ["switch", B.length ? "turn_off" : "turn_on", _]),
      aria: (B.length ? "Turn off" : "Turn on") + " the plugs in " + t.name
    }), t.alerts.forEach((_) => k.push(zt(_).device_class === "moisture" ? { key: "alert:" + _, kind: "alert", icon: co(_), label: "Water leak" } : { key: "note:" + _, kind: "note", icon: co(_), label: mt(_) + " " + He(_).toLowerCase() })), k;
  }
  const Ie = (t, e) => {
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
  function vi(t, e, a = !1) {
    const o = e.find((u) => u.key === "lights"), i = !!(o != null && o.on), l = "", c = '<span class="tfAreaGlyph"' + ve("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span>";
    return a || !o ? '<span class="tfIcon tfAreaIcon' + (i ? " on" : "") + '"' + l + ' aria-hidden="true">' + c + "</span>" : '<button class="tfIcon tfAreaIcon' + (i ? " on" : "") + '" type="button"' + l + ' data-acts="' + _a(o.acts) + '" aria-label="' + F(o.aria) + '" aria-pressed="' + i + '">' + c + "</button>";
  }
  const yi = (t) => t.readings.find((e) => zt(e).device_class === "temperature") || [...t.readings, ...t.solar, ...t.openings, ...t.actions, ...t.plugs].find((e) => M[e]) || null, Lr = (t, e) => {
    const a = mt(e);
    return a.toLowerCase().startsWith(t.name.toLowerCase() + " ") ? Wt(a.slice(t.name.length + 1)) : a;
  };
  function Dr(t) {
    const e = M[t], a = zt(t), o = t.split(".")[0], i = Number(e.state);
    if (e.state === "unavailable") return { text: "Unavailable" };
    if (o === "sensor" && Number.isFinite(i)) {
      if (a.device_class === "temperature") return { text: Ca(i) };
      const l = a.unit_of_measurement || "";
      return l === "%" ? { text: Math.round(i) + "%" } : { text: Re(i, Number.isInteger(i) ? 0 : 1), unit: l };
    }
    if (o === "climate" && (a.current_temperature ?? a.temperature) != null) return { text: Ca(a.current_temperature ?? a.temperature) };
    if (o === "light") return { text: e.state !== "on" ? "Off" : $a(t) ? mo(e) + "%" : "On" };
    if (o === "cover") {
      const l = ka(t);
      return { text: l <= 0 ? "Closed" : l >= 100 ? "Open" : l + "%" };
    }
    return o === "humidifier" ? { text: e.state === "on" ? a.humidity + "%" : "Off" } : o === "media_player" ? { text: e.state === "playing" ? "Playing" : e.state === "paused" ? "Paused" : Wt(e.state) } : { text: He(t) };
  }
  const s = (t, e, a) => {
    const o = a.find((u) => u.key === "temp"), i = a.find((u) => u.key === "hum"), l = zt(e), c = M[e].state === "off";
    return e.startsWith("climate.") ? [Lr(t, e), c ? "Off" : Wt(l.hvac_action || M[e].state) + (l.temperature != null ? " · " + Ca(l.temperature) : ""), i && i.value].filter(Boolean).join(" · ") : [!(o && o.id === e) && Lr(t, e), o && o.id !== e && o.value, i && i.id !== e && i.value + (o ? "" : " humidity")].filter(Boolean).join(" · ");
  };
  function h(t) {
    const e = t.id === V, a = Vn(t), o = yi(t), i = o && Dr(o), l = [...a.filter((c) => c.kind === "control"), ...a.filter((c) => c.kind !== "control" && c.kind !== "reading")].slice(0, 4);
    return '<article class="hcAreaPanel tfAreaPanel' + (e ? " active" : "") + '" data-area="' + F(t.id) + '" tabindex="0" aria-expanded="' + e + '" aria-label="' + F(t.name) + '"><div class="panelExpanded"' + (e ? "" : " inert") + ">" + q(t, null, ' data-cols="2" data-rows="' + Un("areas") + '"') + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop">' + vi(t, a, !0) + '<span class="tfACName">' + F(t.name) + '</span></div><span class="tfACMain">' + (i ? F(i.text + (i.unit ? " " + i.unit : "")) : "") + '</span><span class="tfACTiles" aria-hidden="true">' + l.map((c) => '<span class="tfACTile"><span class="tfIcon' + (c.kind === "alert" ? " alert" : "") + '"' + (c.on && c.light ? ' data-light style="' + c.light + '"' : "") + ">" + c.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let m = [];
  const b = (t) => {
    const e = wt.areaOrder || [], a = (o) => {
      const i = e.indexOf(o.id);
      return i < 0 ? e.length + t.indexOf(o) : i;
    };
    return [...t].sort((o, i) => a(o) - a(i));
  }, L = () => {
    var e;
    const t = new Set(((e = wt.dash) == null ? void 0 : e.areasOff) || []);
    return b(m).filter((a) => !t.has(a.id));
  }, O = (t) => {
    var a;
    const e = L();
    return e.some((o) => o.id === V) || (V = ((a = e[0]) == null ? void 0 : a.id) || null), '<div class="tfAreas" data-tf data-k="areas" style="order:' + t + '"><section class="hcAreaGallery tfAreaGallery" aria-label="Areas">' + e.map(h).join("") + "</section></div>";
  }, j = (t) => t.startsWith("room:"), Z = (t) => m.find((e) => "room:" + e.id === t);
  function q(t, e, a = "") {
    const o = Vn(t), i = yi(t), l = i && Dr(i), c = i ? s(t, i, o) : "", u = l ? l.text + (l.unit ? " " + l.unit : "") : "", f = (_) => {
      const z = Ie(t, _.key);
      return z.length === 1 ? z[0] : "group:" + t.id + ":" + _.key;
    }, y = o.filter((_) => _.kind === "control").slice(0, 4), S = (_) => _.on && _.light ? ' data-light style="' + _.light + '"' : "", x = (_) => '<button class="tfIcon' + (_.on ? " on" : "") + '" type="button" data-tone="' + _.tone + '"' + S(_) + ' data-acts="' + _a(_.acts) + '" aria-label="' + F(_.aria) + '" aria-pressed="' + _.on + '">' + _.icon + "</button>", R = y.map(x), E = y.map((_) => '<div class="tfRoomDev' + (_.on ? " on" : "") + '">' + x(_) + '<button class="tfName tfRoomDevName" type="button" data-more="' + F(f(_)) + '" aria-label="' + F(t.name + " " + _.label.toLowerCase() + ", " + _.value + ". Open") + '"><span class="activityRowName">' + F(_.label) + '</span><span class="activityRowMeta">' + F(_.value) + "</span></button></div>"), B = o.find((_) => _.key === "lights"), k = '<span class="tfAreaGlyph"' + ve("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span>", P = B ? '<button class="tfIcon tfRoomIcon" type="button" data-acts="' + _a(B.acts) + '" aria-label="' + F(B.aria) + '" aria-pressed="' + !!B.on + '">' + k + "</button>" : '<span class="tfIcon tfRoomIcon" aria-hidden="true">' + k + "</span>";
    return '<div class="tfAction tfRoomTile"' + (e ? ' data-k="' + F(e) + '"' : "") + a + ' data-go="' + F(t.id) + '"><div class="tfActionHead">' + P + '<button class="tfName" type="button" data-go="' + F(t.id) + '" aria-label="Open ' + F(t.name) + '"><span class="activityRowName">' + F(t.name) + "</span>" + (u || c ? '<span class="activityRowMeta">' + (u ? '<span class="tfRoomInline">' + F(u) + (c ? " · " : "") + "</span>" : "") + F(c) + "</span>" : "") + "</button></div>" + // the reading opens its more-info (the thermometer's, say)
    (u ? '<button class="tfRoomReading" type="button" data-more="' + F(i) + '" aria-label="' + F(mt(i) + ", " + He(i) + ". More info") + '"><span class="tfRoomBig">' + F(u) + "</span>" + (c ? '<span class="tfRoomSub">' + F(c) + "</span>" : "") + "</button>" : "") + (R.length ? '<div class="tfRoomDevices">' + R.join("") + '</div><div class="tfRoomHeads">' + E.join("") + "</div>" : "") + "</div>";
  }
  const $ = () => [
    { key: "home", name: "Home", ids: Vt.homeVacuums },
    ...Vt.rooms.map((t) => ({ key: "room:" + t.id, name: t.name, room: t, ids: t.actions }))
  ], tt = (t, e, a) => t + " " + (t === 1 ? e : a), lt = () => (wt.favourites ?? Nt.favorite_entities ?? []).filter((t) => M[t]);
  function Ht() {
    if (!ln) {
      const e = Object.entries(va).sort((o, i) => i[1] - o[1]).map(([o]) => o), a = Vt.rooms.flatMap((o) => o.actions);
      ln = [.../* @__PURE__ */ new Set([...fo, ...e, ...a.filter((o) => Mo(o).on), ...a])];
    }
    const t = lt();
    return ln.filter((e) => M[e] && M[e].state !== "unavailable" && !t.includes(e));
  }
  let Lt = !1;
  const St = 6;
  function jt() {
    if (!Lt || wt.favSeeded || !Vt.rooms.length || T) return;
    const t = (a) => Object.keys(M).find((o) => Ya(o) && a(o)), e = [t((a) => a.startsWith("climate.")), t((a) => a.startsWith("cover.") && /curtain/.test(a)), t((a) => a.startsWith("valve.")), Vt.security.locks[0]];
    wt = { ...wt, favourites: [.../* @__PURE__ */ new Set([...wt.favourites ?? Nt.favorite_entities ?? [], ...e.filter(Boolean)])].slice(0, St), favSeeded: !0 }, ya();
  }
  const At = () => wt.suggest ?? !Nt.hide_suggested_entities;
  function pt() {
    const t = new Set(T ? [] : wt.favHidden || []), e = lt().filter((i) => !t.has(i)), a = At() ? Ht().filter((i) => !t.has(i) && ks(i)) : [], o = Math.max(St, e.length);
    return [...e, ...a].slice(0, T && !Pi() ? o : Math.min(j0, o));
  }
  const Ot = (t) => {
    const e = lt().includes(t);
    return '<button class="tfStar" type="button" data-star="' + F(t) + '" aria-pressed="' + e + '" aria-label="Favourite: ' + F(mt(t)) + '">' + W0(e) + "</button>";
  };
  function It(t, { area: e = !1, star: a = !1, plain: o = !1, say: i = null, alert: l = !1 } = {}) {
    var B, k, P, _, z, C;
    const c = o && ((z = (B = d()) == null ? void 0 : B.devices) == null ? void 0 : z[(_ = (P = (k = d()) == null ? void 0 : k.entities) == null ? void 0 : P[t]) == null ? void 0 : _.device_id]), u = c && (c.name_by_user || c.name) || mt(t), f = t.split(".")[0], y = !o && lr.includes(f) ? Mo(t) : null, S = y ? y.on : ["on", "open", "playing"].includes((C = M[t]) == null ? void 0 : C.state), x = o ? null : y ? y.button : Zr.includes(f) ? { act: Et(f, "toggle", t), label: "Turn " + mt(t) + (S ? " off" : " on") } : f === "scene" || f === "script" ? { act: Et(f, "turn_on", t), label: "Run " + mt(t) } : null, R = (i ?? He(t)) + (e && we.get(t) ? " · " + we.get(t) : ""), E = (y == null ? void 0 : y.icon) || Sa(t);
    return '<div class="activityRow' + (x ? " tfPlug" : "") + (S ? " on" : "") + (a ? " tfPick" : "") + (l ? " alert" : "") + '" data-k="' + F((e ? "fav:" : "row:") + t) + '" data-tone="' + (f === "light" ? "light" : (y == null ? void 0 : y.tone) || "blue") + '"' + Xa(t) + ">" + (x && !a ? '<button class="tfIcon" type="button" data-act="' + x.act + '" aria-label="' + F(x.label) + '"' + ve(t, E) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + ve(t, E) + "></div>") + '<button class="tfName" type="button" data-more="' + F(t) + '" aria-label="' + F(u + ", " + R + ". More info") + '"><span class="activityRowName">' + F(u) + '</span><span class="activityRowMeta">' + F(R) + "</span></button>" + (a ? Ot(t) : "") + "</div>";
  }
  const he = () => {
    var t;
    return M[(t = wt.sources) == null ? void 0 : t.weather] ? wt.sources.weather : M["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(M).find((e) => e.startsWith("weather."));
  };
  function _t() {
    var a;
    const t = (o) => Object.keys(M).filter((i) => i.startsWith("binary_sensor.") && o.includes(zt(i).device_class));
    return ((a = _e.alert_entities) != null && a.length ? _e.alert_entities : [...t(["moisture", "smoke", "gas"]).map((o) => ({ entity: o, severity: "alert" })), ...t(as).map((o) => ({ entity: o, severity: "warning" }))]).filter((o) => M[o.entity]).map((o) => ({ ...o, on: ["on", "open", "unlocked", "triggered", "problem"].includes(M[o.entity].state) }));
  }
  function ce() {
    const t = Object.keys(Yr), e = /* @__PURE__ */ new Set(), a = [];
    (Nt.shortcuts || []).forEach((l) => {
      if (l.type === "summary") {
        if (!t.includes(l.key) || e.has(l.key)) return;
        e.add(l.key);
      }
      a.push(l);
    }), t.forEach((l) => {
      e.has(l) || a.push({ type: "summary", key: l });
    });
    const o = ta().sumOrder || [], i = (l) => l.type === "summary" && o.includes(l.key) ? o.indexOf(l.key) : o.length;
    return o.length ? a.map((l, c) => [l, c]).sort((l, c) => i(l[0]) - i(c[0]) || l[1] - c[1]).map(([l]) => l) : a;
  }
  function de() {
    var P;
    const t = ((P = d()) == null ? void 0 : P.entities) || {}, e = (_) => zt(_).device_class, a = Object.keys(M).filter((_) => _.startsWith("sensor.") && e(_) === "battery" || _.startsWith("binary_sensor.") && ["battery", "problem"].includes(e(_))), o = Vt.rooms.flatMap((_) => _.plants.map((z) => z.id));
    if (!a.length && !o.length) return null;
    const i = (_) => {
      var C;
      const z = (C = t[_]) == null ? void 0 : C.device_id;
      return !!z && Object.keys(M).some((rt) => {
        var Tt;
        return rt.startsWith("binary_sensor.") && ((Tt = t[rt]) == null ? void 0 : Tt.device_id) === z && e(rt) === "battery_charging" && M[rt].state === "on";
      });
    }, l = (_) => _.startsWith("vacuum.") ? zt(_).battery_level <= 20 && M[_].state !== "docked" : _.startsWith("binary_sensor.") ? e(_) === "battery" && M[_].state === "on" : parseFloat(M[_].state) <= 20 && !i(_), c = [...a, ...Vt.vacuums].filter((_) => M[_] && l(_)), u = [...a.filter((_) => e(_) === "problem" && M[_].state === "on"), ...o.filter((_) => {
      var z;
      return ((z = M[_]) == null ? void 0 : z.state) === "problem";
    })], f = a.filter((_) => M[_].state === "unavailable"), y = [.../* @__PURE__ */ new Set([...c, ...u, ...f])], S = (_) => {
      const z = parseFloat(M[_].state);
      return e(_) === "battery" && Number.isFinite(z) ? z : 101;
    }, x = [...o, ...Vt.vacuums, ...[...a].sort((_, z) => S(_) - S(z))].filter((_) => M[_] && !y.includes(_)), R = /* @__PURE__ */ new Map();
    x.forEach((_) => {
      var C;
      const z = ((C = Vt.areaOf) == null ? void 0 : C.call(Vt, _)) || "";
      R.set(z, [...R.get(z) || [], _]);
    });
    const E = (_) => {
      const z = Vt.rooms.findIndex((C) => C.id === _);
      return _ === "" ? 1 / 0 : z < 0 ? Vt.rooms.length : z;
    }, B = [...R.keys()].sort((_, z) => E(_) - E(z)), k = (_) => {
      var z, C, rt, Tt;
      return ((z = Vt.rooms.find((Bt) => Bt.id === _)) == null ? void 0 : z.name) || ((Tt = (rt = (C = d()) == null ? void 0 : C.areas) == null ? void 0 : rt[_]) == null ? void 0 : Tt.name) || _;
    };
    return {
      value: [c.length && tt(c.length, "low battery", "low batteries"), u.length && tt(u.length, "problem", "problems"), f.length && tt(f.length, "unavailable device", "unavailable devices")].filter(Boolean).join(", ") || "All good",
      plain: !0,
      groups: [{ name: "Needs attention", ids: y, alert: !0 }, ...B.map((_) => ({ name: _ ? k(_) : B.length > 1 ? "Other devices" : "Devices", ids: R.get(_) }))].filter((_) => _.ids.length)
    };
  }
  const ta = () => T ? wt.home || {} : wt, Fa = (t) => kp.includes(t) ? (ta().shownSums || []).includes(t) : !(ta().hiddenSums || []).includes(t);
  function xi(t, e, a) {
    const o = t.flatMap((R) => a(R, /^cover\./)), i = o.filter((R) => {
      var E;
      return ["open", "opening"].includes((E = M[R]) == null ? void 0 : E.state);
    }).length, l = Object.keys(M).filter((R) => R.startsWith("person.")), c = l.filter((R) => {
      var E;
      return ((E = M[R]) == null ? void 0 : E.state) === "home";
    }).length, u = Vt.security.openings.filter((R) => M[R]), f = u.filter((R) => M[R].state === "on").length, y = Object.keys(M).filter((R) => R.startsWith("binary_sensor.") && zt(R).device_class === "moisture"), S = y.filter((R) => M[R].state === "on").length, x = Vt.vacuums.filter((R) => M[R]);
    return {
      covers: o.length && { value: i ? i + " open" : "All closed", groups: e((R) => a(R, /^cover\./)) },
      people: l.length && { value: c ? c + " home" : "Nobody home", groups: [{ name: "People", ids: l }] },
      openings: u.length && { value: f ? f + " open" : "All closed", groups: [{ name: "Doors and windows", ids: u }] },
      leaks: y.length && { value: S ? tt(S, "leak", "leaks") : "All dry", groups: [{ name: "Leak sensors", ids: y }] },
      vacuum: x.length && { value: Wt(M[x[0]].state), groups: [{ name: "Vacuum", ids: x }] }
    };
  }
  function Qo(t = !1) {
    var Ut;
    const e = Vt.rooms, a = Vt.security, o = (Ct, Dt) => Ct.actions.filter((ye) => Dt.test(ye)), i = (Ct) => e.map((Dt) => ({ name: Dt.name, ids: Ct(Dt) })).filter((Dt) => Dt.ids.length), l = e.flatMap((Ct) => Ct.lights), c = l.filter((Ct) => {
      var Dt;
      return ((Dt = M[Ct]) == null ? void 0 : Dt.state) === "on";
    }).length, u = e.map((Ct) => Ct.readings.find((Dt) => zt(Dt).device_class === "temperature")).filter(Boolean).map((Ct) => Number(M[Ct].state)).filter(Number.isFinite), [f, y] = [Re(Math.min(...u)), Re(Math.max(...u))], S = e.flatMap((Ct) => o(Ct, /^media_player\./)), x = S.filter((Ct) => {
      var Dt;
      return ((Dt = M[Ct]) == null ? void 0 : Dt.state) === "playing";
    }).length, R = _t(), E = R.filter((Ct) => Ct.severity === "warning" && Ct.on).length, B = a.locks.filter((Ct) => {
      var Dt;
      return ["unlocked", "jammed", "open"].includes((Dt = M[Ct]) == null ? void 0 : Dt.state);
    }).length, k = a.alarms.filter((Ct) => {
      var Dt;
      return ((Dt = M[Ct]) == null ? void 0 : Dt.state) === "disarmed";
    }).length, P = E ? tt(E, "warning", "warnings") : null, _ = B ? B + " unlocked" : k ? k + " disarmed" : P ? null : "All secure", z = de(), C = e.flatMap((Ct) => Ct.solar), rt = C.find((Ct) => Ct.endsWith("_power")), Tt = {
      light: l.length && { value: c ? c + " on" : "All off", groups: i((Ct) => Ct.lights) },
      climate: u.length && { value: f === y ? f + "°" : f + " - " + y + "°", groups: i((Ct) => [...Ct.readings.filter((Dt) => ["temperature", "humidity"].includes(zt(Dt).device_class)), ...o(Ct, /^(climate|humidifier)\./)]) },
      security: (a.alarms.length || a.locks.length) && { value: [P, _].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...a.alarms, ...a.locks] }, { name: "Doors and windows", ids: a.openings }].filter((Ct) => Ct.ids.length) },
      media_players: S.length && { value: x ? x + " playing" : "No media playing", groups: i((Ct) => o(Ct, /^media_player\./)) },
      maintenance: z,
      energy: Vt.grid && { value: xr(Number(((Ut = M[rt]) == null ? void 0 : Ut.state) || 0) * 1e3 + Number(M[Vt.grid].state)) + " now", groups: [{ name: "Energy", ids: [...C, Vt.grid] }] },
      ...xi(e, i, o)
    }, Bt = [], Gt = R.filter((Ct) => Ct.severity !== "warning" && Ct.on);
    return Gt.length && Bt.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: tt(Gt.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: Gt.map((Ct) => Ct.entity) }] }), ce().forEach((Ct) => {
      Ct.type !== "summary" ? Bt.push({ key: "path:" + Ct.path, name: Ct.label || Ct.path, icon: Ct.icon || "mdi:link-variant", colour: "", value: "" }) : !Ct.hidden && Tt[Ct.key] && (t || Fa(Ct.key)) && Bt.push({ key: Ct.key, ...Yr[Ct.key], ...Tt[Ct.key] });
    }), Bt;
  }
  const Mi = (t) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + F(t.key) + '" data-k="sum:' + F(t.key) + '" aria-label="' + F(t.name + (t.value ? ", " + t.value : "")) + '"' + (t.key === "alerts" ? ' style="--sum:' + t.colour + ';--sum-ink:#ffffff"' : t.key === "climate" ? ' style="' + go() + '"' : t.colour && Pn(t.colour) ? ' style="' + Pn(t.colour).slice(1) + '"' : "") + ">" + (t.key === "climate" ? vr : "") + '<div class="tfIcon" aria-hidden="true"' + ve(t.id || "", t.icon, t.name) + '></div><div><div class="activityRowName">' + F(t.name) + "</div>" + (t.value ? '<div class="activityRowMeta">' + F(t.value) + "</div>" : "") + "</div></div>";
  function Qt(t) {
    const e = lt();
    wt = { ...wt, favourites: e.includes(t) ? e.filter((a) => a !== t) : [...e, t], favHidden: (wt.favHidden || []).filter((a) => a !== t) }, ya(), Pe();
  }
  function eo(t) {
    document.querySelector("home-assistant") && (window.history.pushState(null, "", t), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function ko(t, e) {
    if (t.startsWith("path:")) {
      eo(t.slice(5));
      return;
    }
    Ii("summary:" + t, e);
  }
  async function jn() {
    const t = (c) => Promise.resolve().then(() => D(c)).catch(() => null), [e, a, o, i] = await Promise.all([
      t({ type: "frontend/get_user_data", key: Sp }),
      t({ type: "frontend/get_system_data", key: "home" }),
      t({ type: "frontend/get_system_data", key: "security" }),
      t({ type: "usage_prediction/common_control" })
    ]), l = (e == null ? void 0 : e.value) || {};
    wt = { favourites: l.favourites ?? null, sources: l.sources, hiddenSums: l.hiddenSums, shownSums: l.shownSums, home: l.home, dash: l.dash, named: l.named, favHidden: l.favHidden, suggest: l.suggest, favSeeded: l.favSeeded, favsTitle: l.favsTitle, areaOrder: l.areaOrder }, Nt = (a == null ? void 0 : a.value) || {}, _e = (o == null ? void 0 : o.value) || {}, fo = Array.isArray(i == null ? void 0 : i.entities) ? i.entities : [], ln = null, Object.keys(M).length && Pe(), ki(), Lt = !0, jt();
  }
  const zn = "HomeCore";
  async function ki() {
    var o, i, l;
    const t = location.pathname.split("/")[1], e = wt.named || [];
    if (!((i = (o = d()) == null ? void 0 : o.user) != null && i.is_admin) || !t || e.includes(t)) return;
    const a = () => {
      wt = { ...wt, named: [...e, t] }, ya();
    };
    try {
      const c = (l = await D({ type: "lovelace/dashboards/list" })) == null ? void 0 : l.find((y) => y.url_path === t);
      if (!c || c.mode === "yaml") return;
      if (c.title === zn) {
        a();
        return;
      }
      const u = await D({ type: "lovelace/config", url_path: t }), f = ((u == null ? void 0 : u.views) || []).flatMap((y) => [...y.cards || [], ...(y.sections || []).flatMap((S) => S.cards || [])]);
      if (!f.length || !f.every((y) => (y == null ? void 0 : y.type) === "custom:homecore-card" && !y.page)) return;
      await D({ type: "lovelace/dashboards/update", dashboard_id: c.id, title: zn }), a();
    } catch {
    }
  }
  let ao = null, Ke = 0, vs = !1;
  const ac = (t) => {
    const e = t.split(".")[0], a = zt(t).device_class;
    return V0.includes(e) && (e !== "binary_sensor" || as.includes(a) || !!Bp[a]);
  }, ys = (t) => t.startsWith("binary_sensor.") ? Bp[zt(t).device_class] : null;
  async function vu() {
    var t;
    if (!(vs || Date.now() - Ke < 30 * 1e3)) {
      vs = !0, Ke = Date.now();
      try {
        const e = Object.keys(((t = d()) == null ? void 0 : t.states) || {}).filter(ac), a = e.length ? await D({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: e }) : null;
        ao = Array.isArray(a) ? a.filter((o) => o.entity_id && o.state != null && o.when) : null;
      } catch {
        ao = null;
      }
      vs = !1, Pe();
    }
  }
  function yu() {
    const t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map(), a = (i) => {
      if (!M[i.entity_id] || !ac(i.entity_id) || !ks(i.entity_id) || ["unavailable", "unknown"].includes(i.state)) return;
      if (ys(i.entity_id)) {
        const c = e.get(i.entity_id);
        i.state === "on" ? (!c || i.when > c.when + 1) && e.set(i.entity_id, { ...i, alarm: !0, cleared: null }) : c && !c.cleared && i.when > c.when && (c.cleared = i.when);
        return;
      }
      const l = t.get(i.entity_id);
      (!l || i.when > l.when + 1) && t.set(i.entity_id, i);
    };
    [...ao || []].sort((i, l) => i.when - l.when).forEach(a);
    const o = ao ? Ke / 1e3 - 5 : 0;
    return Object.keys(M).forEach((i) => {
      var u;
      const l = M[i], c = l.last_changed ? Date.parse(l.last_changed) / 1e3 : 0;
      c > o && a({ entity_id: i, state: l.state, when: c, context_user_id: (u = l.context) == null ? void 0 : u.user_id });
    }), [...t.values(), ...e.values()].sort((i, l) => l.when - i.when).slice(0, z0);
  }
  function xu(t) {
    var o;
    const e = t.context_user_id && Object.keys(M).find((i) => i.startsWith("person.") && zt(i).user_id === t.context_user_id);
    if (e) return mt(e);
    const a = (o = d()) == null ? void 0 : o.user;
    return a && t.context_user_id === a.id ? a.name : ["automation", "script"].includes(t.context_domain) || t.context_event_type === "automation_triggered" ? t.context_name || "Home Assistant" : "";
  }
  function Mu(t) {
    const e = t.entity_id.split(".")[0], a = String(t.state);
    return e === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[a] || Wt(a).toLowerCase() : e === "cover" || e === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[a] || Wt(a).toLowerCase() : e === "binary_sensor" ? a === "on" ? "opened" : "closed" : e === "climate" ? a === "off" ? "turned off" : "set to " + Wt(a).toLowerCase() : e === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[a] || Wt(a).toLowerCase() : e === "alarm_control_panel" ? (Ep[a] || Wt(a)).toLowerCase() : e === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[a] || Wt(a).toLowerCase() : a === "on" ? "turned on" : a === "off" ? "turned off" : Wt(a).toLowerCase();
  }
  function ku(t) {
    const e = t.entity_id, a = t.alarm && ys(e), o = mt(e) + " " + (a ? a[0] : Mu(t)), i = a ? Ja(t.when * 1e3) + (t.cleared ? " · " + a[1] + " since " + Ja(t.cleared * 1e3) : "") : [xu(t), Ja(t.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow' + (a ? " alert" : "") + '"><div class="tfIcon' + (a ? " alert" : "") + '" aria-hidden="true"' + ve(e, Sa(e)) + '></div><button class="tfName" type="button" data-more="' + F(e) + '" data-at="' + Math.round(t.when * 1e3) + '" aria-label="' + F(o + ", " + i + ". More info") + '"><span class="activityRowName">' + F(o) + '</span><span class="activityRowMeta">' + F(i) + "</span></button></div>";
  }
  let qa = null, oc = 0;
  const Su = [["electricity", "Electricity", 4.3, "kWh"], ["solar", "Solar", 2.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function nc() {
    var e;
    if (Date.now() - oc < 5 * 60 * 1e3) return;
    oc = Date.now();
    const t = [];
    try {
      const a = ((e = await D({ type: "energy/get_prefs" })) == null ? void 0 : e.energy_sources) || [], o = (i) => a.filter((l) => l.type === i).flatMap((l) => i === "grid" ? (l.flow_from || []).map((c) => c.stat_energy_from) : [l.stat_energy_from]).filter(Boolean);
      for (const [i, l, c] of [["electricity", "Electricity", o("grid")], ["solar", "Solar", o("solar")], ["gas", "Gas", o("gas")], ["water", "Water", o("water")]]) {
        if (!c.length) continue;
        const u = await Promise.all(c.map((f) => Promise.resolve(D({ type: "recorder/statistic_during_period", statistic_id: f, calendar: { period: "day" }, types: ["change"] })).then((y) => Number(y == null ? void 0 : y.change) || 0, () => 0)));
        t.push({ key: i, name: l, id: c[0], ids: c, value: u.reduce((f, y) => f + y, 0), unit: zt(c[0]).unit_of_measurement || (i === "gas" || i === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    qa = t, Pe();
  }
  let Gn = null, rc = [];
  function xs() {
    var l;
    const t = rc = qa != null && qa.length ? qa : Su.map(([c, u, f, y]) => {
      if (c === "solar") {
        const x = Object.keys(M).find((R) => R.endsWith("_solar_today") && !R.includes("made_up_energy"));
        x && Number.isFinite(Number(M[x].state)) && (f = Number(M[x].state));
      }
      const S = "sensor.made_up_energy_" + c;
      return M[S] = { entity_id: S, state: String(f), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: u + " today", unit_of_measurement: y, state_class: "total_increasing" } }, { key: c, name: u, id: S, value: f, unit: y };
    });
    ot.clear(), t.some((c) => c.id === Gn) || (Gn = t[0].id);
    const e = t.map((c) => {
      const u = Number(c.value).toLocaleString(void 0, { maximumFractionDigits: c.value < 10 ? 2 : 1 }) + " " + c.unit, f = G0[c.key], y = c.id === Gn;
      return ot.set(c.id, { name: c.name, text: u, icon: f }), '<div class="activityRow tap' + (y ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + F(c.id) + '" aria-pressed="' + y + '" aria-label="' + F(c.name + ", " + u) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + ve("", f, c.name) + '></div><div><div class="activityRowName">' + F(c.name) + '</div><div class="activityRowMeta">' + F(u) + "</div></div></div>";
    }), a = t.find((c) => c.id === Gn), o = (((l = ie().opts.energy) == null ? void 0 : l.graph) || "above") === "below", i = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + F(a.id) + '" role="img" aria-label="' + F(a.name) + ', last 24 hours"></svg></div>';
    return Qa("dash:energy", 0, "Energy today", e, i, Qo().some((c) => c.key === "energy") ? "summary:energy" : null, "tfDashCard tfDash-energy" + (o ? "" : " graphAbove"));
  }
  function ic(t) {
    const e = H.querySelector(".tfDash-energy"), a = e == null ? void 0 : e.querySelector(".tfDashGraph svg");
    !a || t === Gn || (Gn = t, e.querySelectorAll("[data-energy-pick]").forEach((o) => {
      const i = o.dataset.energyPick === t;
      o.classList.toggle("picked", i), o.setAttribute("aria-pressed", String(i));
    }), a.dataset.graph = t, a.dataset.drawn = "", xa.set("dash:energy", xs()), Yc(!0));
  }
  const sc = {
    electricity: [15, 12, 10, 10, 10, 12, 25, 45, 40, 30, 25, 30, 35, 30, 25, 25, 35, 60, 80, 70, 55, 45, 30, 20],
    gas: [2, 2, 2, 2, 3, 8, 18, 20, 12, 6, 4, 4, 4, 4, 4, 5, 8, 14, 16, 14, 10, 6, 3, 2],
    water: [0, 0, 0, 0, 0, 2, 12, 18, 8, 4, 3, 4, 6, 3, 2, 3, 4, 6, 10, 8, 5, 5, 3, 1]
  }, lc = /* @__PURE__ */ new Map();
  async function _u(t) {
    const e = /* @__PURE__ */ new Date(), a = new Date(e).setHours(0, 0, 0, 0), o = e.getHours(), i = e.getMinutes() / 60, l = Array.from({ length: 24 }, (u, f) => f <= o ? 0 : null);
    if (!t.ids) {
      const u = sc[t.key] || sc.electricity, f = u.map((S, x) => x < o ? S : x === o ? S * i : 0), y = f.reduce((S, x) => S + x, 0) || 1;
      return l.map((S, x) => S == null ? null : t.value * f[x] / y);
    }
    const c = lc.get(t.id);
    if (c && c.day === a && Date.now() - c.at < 5 * 60 * 1e3) return c.hours;
    try {
      const u = await D({ type: "recorder/statistics_during_period", start_time: new Date(a).toISOString(), end_time: e.toISOString(), statistic_ids: t.ids, period: "hour", types: ["change"] });
      t.ids.forEach((S) => ((u == null ? void 0 : u[S]) || []).forEach((x) => {
        const R = typeof x.start == "number" ? x.start : Date.parse(x.start), E = new Date(R).getHours();
        R >= a && E < o && (l[E] += Number(x.change) || 0);
      }));
      const f = new Date(e).setMinutes(0, 0, 0), y = await Promise.all(t.ids.map((S) => Promise.resolve(D({ type: "recorder/statistic_during_period", statistic_id: S, fixed_period: { start_time: new Date(f).toISOString(), end_time: e.toISOString() }, types: ["change"] })).then((x) => Number(x == null ? void 0 : x.change) || 0, () => 0)));
      l[o] = y.reduce((S, x) => S + x, 0);
    } catch {
    }
    return lc.set(t.id, { at: Date.now(), day: a, hours: l }), l;
  }
  async function Cu(t, e) {
    const a = await _u(e);
    if (!t.isConnected) return;
    const o = Math.max(120, t.clientWidth || 260), i = Math.max(60, t.clientHeight || 130), l = 18, c = i - 18, u = o / 24, f = u * 0.72, y = (/* @__PURE__ */ new Date()).getHours(), S = a.map((P) => P ?? 0), x = Math.max(0, ...S), R = (P) => c - (x > 0 ? P / x * (c - l) : 0), E = (P) => P.toLocaleString(void 0, { maximumFractionDigits: P < 10 ? 2 : 1 }) + " " + e.unit, B = (P) => String(P).padStart(2, "0") + ":00", k = x > 0 ? S.indexOf(x) : -1;
    t.setAttribute("viewBox", "0 0 " + o + " " + i), t.setAttribute("aria-label", e.name + " today by the hour: " + E(e.value) + (k >= 0 ? ", most " + E(x) + " at " + B(k) : "")), t.innerHTML = [l, (l + c) / 2, c].map((P) => '<line x1="0" x2="' + o + '" y1="' + P + '" y2="' + P + '" stroke="var(--line)" stroke-width="1"/>').join("") + a.map((P, _) => P > 0 ? '<rect x="' + (_ * u + (u - f) / 2).toFixed(1) + '" y="' + R(P).toFixed(1) + '" width="' + f.toFixed(1) + '" height="' + (c - R(P)).toFixed(1) + '" rx="2" fill="' + (_ === y ? "var(--primary)" : "var(--text)") + '"' + (_ === y ? "" : ' fill-opacity=".5"') + "/>" : "").join("") + [0, 6, 12, 18].map((P) => '<text x="' + (P * u).toFixed(1) + '" y="' + (i - 3) + '">' + String(P).padStart(2, "0") + "</text>").join("") + (k >= 0 ? '<text x="0" y="11">Most: ' + F(E(x)) + " at " + B(k) + "</text>" : "");
  }
  function Au(t) {
    var e;
    (e = window.matchMedia) != null && e.call(window, "(prefers-reduced-motion: reduce)").matches || t.querySelectorAll("rect").forEach((a, o) => a.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], { duration: 500, delay: o * 18, easing: "cubic-bezier(.2,.7,.3,1)", fill: "backwards" }));
  }
  function cc(t) {
    var o;
    if ((o = window.matchMedia) != null && o.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [e, a] = t.querySelectorAll("path");
    Jp(t, a, [e].filter(Boolean));
  }
  let Si = null, Ms = 0;
  const ks = (t) => !t.startsWith("light.") || U0.includes((we.get(t) || "").toLowerCase()), Ss = () => Math.max(2, en((H == null ? void 0 : H.clientWidth) || 0).n), dc = (t) => {
    const e = Mo(t);
    return e.sections.map((a, o) => a && (e.parts || [])[o]).filter(Boolean);
  }, Tu = (t) => dc(t).slice(0, Un(t) - 1);
  function pc(t) {
    const e = ie().tiles;
    if (e) return e.filter((o) => M[o] || Z(o));
    if (!Si) {
      const o = (i) => {
        var l;
        return (((l = M[i]) == null ? void 0 : l.state) === "on" ? 1e6 : 0) + (va[i] || 0);
      };
      Si = {
        lights: Vt.rooms.flatMap((i) => i.lights).filter((i) => {
          var l;
          return ks(i) && ((l = M[i]) == null ? void 0 : l.state) !== "unavailable";
        }).sort((i, l) => o(l) - o(i) || mt(i).localeCompare(mt(l))),
        climates: Vt.rooms.flatMap((i) => i.actions.filter((l) => l.startsWith("climate.")))
      };
    }
    const a = Si.climates.filter((o) => M[o]).slice(0, t > 3 ? 2 : 1);
    return [...Si.lights.filter((o) => M[o]).slice(0, Math.max(0, t - a.length)), ...a];
  }
  const _s = () => {
    var t;
    return ((t = wt.home) == null ? void 0 : t.welcome) ?? !0;
  }, Lu = () => {
    var e, a;
    const t = (e = d()) == null ? void 0 : e.user;
    return (t == null ? void 0 : t.name) || ((a = Object.values(M).find((o) => {
      var i;
      return o.entity_id.startsWith("person.") && (t == null ? void 0 : t.id) && ((i = o.attributes) == null ? void 0 : i.user_id) === t.id;
    })) == null ? void 0 : a.attributes.friendly_name) || "";
  }, Du = () => {
    const t = (/* @__PURE__ */ new Date()).getHours(), e = Lu();
    return (t >= 5 && t < 12 ? "Good morning" : t >= 12 && t < 18 ? "Good afternoon" : "Good evening") + (e ? ", " + e : "");
  }, uc = (t, e, a, o) => (i) => '<section class="card tfCard tfDashCard ' + t + '" data-tf data-k="' + e + '" aria-label="' + a + '">' + (o ? '<div class="activityHeader">' + (e === "favs" ? '<button class="activityTitle tfTitleBtn" type="button" data-more="favourites" aria-label="Favourites. More info">' + a + "</button>" : '<div class="activityTitle">' + a + "</div>") + "</div>" : "") + '<div class="activityRows">' + i + "</div></section>";
  function Eu(t, e) {
    var l, c;
    t.dash = !0, t.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + ((T ? _s() : ie().welcome) ? '<span class="tfGreeting">' + F(Du()) + "</span>" : "") + F(((c = (l = d()) == null ? void 0 : l.config) == null ? void 0 : c.location_name) || "Home") + "</h1>" }), e.length && t.push({ key: "sums", wrap: (u) => '<div class="tfDashBarRow" data-tf data-k="sums">' + uc("tfDash-bar", "sums-bar", "Summaries", !1)(u).replace(" data-tf", "") + "</div>", tiles: e.map((u) => ({ key: "sum:" + u.key, html: Mi(u) })) }), !T && L().length && t.push({ key: "areas", html: O(0) });
    const a = pt();
    if (a.length && t.push({ key: "favs", wrap: uc("tfDash-favs", "favs", "Favourites", Ci()), tiles: a.map((u) => ({ key: "fav:" + u, html: It(u, { area: !0 }) })) }), T)
      return nc(), Sc() && t.push({ key: "dash:energy", html: xs() }), Ms = Ss(), pc(0).forEach((u) => t.push({
        key: "dash:tile:" + u,
        wrap: (f) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + F(u) + '">' + f + "</div>",
        tiles: [{ key: u, html: q(Z(u), u) }]
      })), t;
    const o = yu();
    t.push({ key: "dash:act", html: Qa("dash:act", 0, "Activity", o.length ? o.map(ku) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), t.push({ key: "dash:energy", html: xs() });
    const i = Ss();
    return Ms = i, pc(i >= 3 ? i : i * 2).forEach((u) => t.push({
      key: "dash:tile:" + u,
      wrap: (f) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + F(u) + '">' + f + "</div>",
      tiles: [{ key: u, html: j(u) ? q(Z(u), u) : $o(u, !1, Tu(u)) }]
    })), vu(), nc(), t;
  }
  const Er = 252, pe = 16, Bu = 200, Ru = Math.round(Er * 1.25), Pu = 60, Wa = Pu + pe, Hu = 3, fc = {
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
  }, Nu = ["wx", "favs", "act", "energy", "avg"], hc = ["XS", "S", "M", "L", "XL"], mc = hc.length, Ou = ["Narrow", "Wide", "Really wide"], Iu = { wx: 5, areas: 5, favs: 5, act: 5, energy: 4, avg: 4, aq: 4, pollen: 4, radar: 4, hourly: 4, sun: 4, moon: 4, uv: 4, humidity: 4, pressure: 4, wind: 4, visibility: 4 }, gc = (t) => !t.includes(".") || !M[t] || t.startsWith("light.") && mn(t) ? mc : Math.min(mc, dc(t).length + 1), Un = (t) => {
    const e = ie().opts[t] || {}, a = gc(t), o = Number(e.h) || (e.tall ? 5 : Iu[t] || bc);
    return Math.max(1, Math.min(a, o));
  }, bc = 2, Fu = 90, qu = 56, Aa = (t) => {
    var e;
    return fc[t] || (t.startsWith("room:") ? ((e = m.find((a) => "room:" + a.id === t)) == null ? void 0 : e.name) || "Area" : mt(t));
  }, Wu = 128;
  let sa = !1, te = null, ea = null, Cs = !1, bn = /* @__PURE__ */ new Map(), _i = 0, tn = 0;
  const So = ["title", "sums"], en = (t) => {
    const e = Math.max(1, Math.floor((t + pe) / (Bu + pe)));
    return { n: e, w: Math.max(1, Math.min(Ru, Math.floor((t - (e - 1) * pe) / e))) };
  }, As = () => b(m), Vu = () => {
    var e;
    const t = new Set(((e = wt.home) == null ? void 0 : e.areasOff) || []);
    return As().filter((a) => !t.has(a.id)).map((a) => "room:" + a.id);
  };
  function ju() {
    const t = Vu();
    return {
      cells: {},
      spans: { favs: 2 },
      hidden: Object.keys(fc).filter((e) => {
        var a, o;
        return !["title", ...((a = wt.home) == null ? void 0 : a.sums) === !1 ? [] : ["sums"], ...((o = wt.home) == null ? void 0 : o.favs) === !1 ? [] : ["favs"], ...Yu() ? ["wx"] : [], ...Sc() ? ["energy"] : []].includes(e);
      }),
      opts: { favs: { h: 5 }, ...Object.fromEntries(t.map((e) => [e, { h: 5 }])) },
      tiles: t,
      known: zo,
      areasOff: []
    };
  }
  const ie = () => T ? ju() : Ts(), Ts = () => {
    let t = { cells: {}, spans: {}, hidden: [], opts: {}, ...wt.dash || {} };
    t.sumsOff && (t = { ...t, hidden: [...t.hidden, "sums"] });
    const e = zo.filter((a) => !(t.known || []).includes(a) && !t.hidden.includes(a));
    return e.length ? { ...t, hidden: [...t.hidden, ...e] } : t;
  };
  function wn(t) {
    T || (wt = { ...wt, dash: { ...t, known: zo } }, ya());
  }
  function vn() {
    const t = (e) => H.querySelector(e);
    return [
      ["title", t(".tfDashTitle"), "full"],
      ["sums", t(".tfDashBarRow"), "full"],
      ["wx", Oa.wx, 2],
      ["areas", t(".tfAreas"), "areas"],
      ["favs", t(".tfDash-favs"), 2],
      ["act", t(".tfDash-act"), 2],
      ["energy", t(".tfDash-energy"), 2],
      ["avg", Oa.avg, 2],
      ...zo.map((e) => [e, Oa[e], us[e] || 1]),
      ...[...H.querySelectorAll(".tfDashTiles > [data-k]")].map((e) => [e.dataset.k, e, 1, !0])
    ].filter(([, e]) => e == null ? void 0 : e.isConnected).map(([e, a, o, i = !1]) => ({ key: e, el: a, span: o, tile: i }));
  }
  const wc = (t, e, a) => {
    var o;
    if (t.span === "full") return e;
    if (t.span === "areas") {
      const i = 2 * a + pe;
      t.el.style.setProperty("--area-open", i + "px");
      const l = Math.ceil((i + Math.max(0, L().length - 1) * (Wu + pe) + pe) / (a + pe));
      return Math.max(Math.min(e, 2), Math.min(l, e - (((o = ie().cells.areas) == null ? void 0 : o.col) || 0)));
    }
    return Math.min(e, ie().spans[t.key] ?? t.span);
  }, vc = (t) => Un(t.key);
  function yc(t, e, a = null) {
    const o = ie().cells, i = t.every((u) => !o[u.key] || o[u.key].col + u.cols <= e), l = (u) => o[u.key] || { row: 1e9, col: 0 };
    return (() => {
      const u = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map(), y = (k, P, _, z) => {
        for (let C = P; C < P + z; C++) for (let rt = k; rt < k + _; rt++) if (u.has(rt + "," + C)) return !1;
        return !0;
      }, S = (k, P, _) => {
        for (let z = _; z < _ + k.rows; z++) for (let C = P; C < P + k.cols; C++) u.add(C + "," + z);
        f.set(k.key, { col: P, row: _, cols: k.cols, rows: k.rows });
      }, x = (k, P, _) => {
        for (P = Math.max(0, Math.min(e - k.cols, P)), _ = Math.max(0, _); !y(P, _, k.cols, k.rows); ) _++;
        S(k, P, _);
      }, R = (k) => {
        for (let P = 0; ; P++) for (let _ = 0; _ <= e - k.cols; _++) if (y(_, P, k.cols, k.rows)) {
          S(k, _, P);
          return;
        }
      };
      a && x(a, te.col, te.row);
      const E = t.filter((k) => k !== a), B = (k, P) => l(k).row - l(P).row || l(k).col - l(P).col;
      return i ? (E.filter((k) => o[k.key]).sort(B).forEach((k) => x(k, o[k.key].col, o[k.key].row)), E.filter((k) => !o[k.key]).forEach(R), f) : ([...E].sort(B).forEach(R), f);
    })();
  }
  function zu(t, e) {
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
  function Ls() {
    const t = ie(), e = new Set(t.hidden), a = vn().filter((c) => !So.includes(c.key));
    let o = bn;
    if (!o.size) {
      const c = t.pegs || 4, u = a.filter((f) => !e.has(f.key));
      u.forEach((f) => {
        f.cols = wc(f, c, Er), f.rows = vc(f) ?? bc;
      }), o = yc(u, c);
    }
    const i = (c) => !e.has(c.key) && o.get(c.key) || { row: 1e9, col: 0 };
    a.sort((c, u) => i(c).row - i(u).row || i(c).col - i(u).col);
    const l = (t.phone || []).map((c) => a.find((u) => u.key === c && !e.has(c))).filter(Boolean);
    return [...l, ...a.filter((c) => !l.includes(c))];
  }
  const Gu = () => {
    const t = Ls();
    t.forEach((e, a) => e.el.style.setProperty("--o", String(3 + a))), Ds([...vn().filter((e) => So.includes(e.key)), ...t].map((e) => e.el));
  };
  function Ds(t) {
    if (te) return;
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
  const Yn = (t, e) => wn({ ...t, cells: e, pegs: en(H.clientWidth).n });
  function Es(t) {
    const e = H == null ? void 0 : H.querySelector('.tfAreas[data-k="areas"] .tfAreaGallery'), a = e == null ? void 0 : e.querySelector(".tfAreaPanel.active");
    if (!a || e.scrollWidth <= e.clientWidth) return;
    const o = e.getBoundingClientRect(), i = a.getBoundingClientRect(), l = i.right > o.right ? i.right - o.right : i.left < o.left ? i.left - o.left : 0;
    l && e.scrollBy({ left: l, behavior: t ? "smooth" : "auto" });
  }
  function We() {
    var z;
    if (requestAnimationFrame(() => Es(!1)), setTimeout(() => Es(!1), 360), !w || !H) return;
    const t = H.clientWidth, e = t < 2 * Er + pe, a = g.classList.contains("tfDash");
    T && (sa = !1), g.classList.toggle("tfOverview", T);
    const { n: o, w: i } = e ? { n: 2, w: Math.floor((t - pe) / 2) } : en(t);
    Ma.classList.add("tfPegs"), Ma.style.setProperty("--peg-n", o), Ma.style.setProperty("--peg-w", i + "px");
    const l = new Set(ie().hidden);
    zo.forEach((C) => {
      var rt;
      return (rt = Oa[C]) == null ? void 0 : rt.classList.toggle("tfNotAdded", l.has(C) && !(te != null && te.fromTray && te.key === C));
    }), ri(), g.classList.toggle("tfBoard", a), g.classList.toggle("tfEditing", a && sa && !e);
    const c = p("dashEditNav");
    !a && Do && $s(!1), c && T ? (c.hidden = !a, Do || (c.classList.remove("active"), c.setAttribute("aria-pressed", "false"), c.setAttribute("aria-label", "Edit Home page"), c.title = "Edit", c.innerHTML = es)) : c && (c.hidden = !a || e, c.classList.toggle("active", sa), c.setAttribute("aria-pressed", String(sa)), c.setAttribute("aria-label", sa ? "Done editing" : "Edit custom dashboard"), c.title = sa ? "Done" : "Edit", c.innerHTML = sa ? Tp : es);
    const u = a ? vn() : [];
    if ((!a || !T) && H.querySelectorAll(":scope > :is(.hcFloor,.hcFloorBox)").forEach((C) => C.remove()), !a) {
      H.style.height = "", H.querySelectorAll(".tfBoardItem").forEach((C) => {
        C.classList.remove("tfBoardItem", "tfBoardHidden"), C.style.left = C.style.top = C.style.width = C.style.height = "";
      }), (z = H.querySelector(".tfDash-act > .activityRows")) == null || z.style.removeProperty("max-height"), Hs(!1), g.classList.contains("tfDash") && Gu(), Ae();
      return;
    }
    if (T) {
      Xu(u, t, e);
      return;
    }
    H.style.setProperty("--peg-w", i + "px");
    const f = new Set(ie().hidden), y = i + pe;
    te != null && te.fromTray && f.delete(te.key), u.forEach((C) => C.el.classList.toggle("tfBoardHidden", f.has(C.key)));
    const S = u.filter((C) => !f.has(C.key) && getComputedStyle(C.el).display !== "none");
    let x = 0;
    S.filter((C) => So.includes(C.key)).forEach((C) => {
      C.el.classList.add("tfBoardItem"), Object.assign(C.el.style, { width: t + "px", height: "", left: "0px", top: x + "px" });
      const rt = C.key === "sums" && C.el.querySelector(".tfDash-bar"), Tt = rt ? rt.querySelectorAll(".activityRow").length : 0;
      rt && (rt.style.maxWidth = "none");
      for (let Bt = 1; rt && Bt <= Tt && (rt.style.setProperty("--bar-cols", String(Math.ceil(Tt / Bt))), !(rt.offsetWidth <= t)); Bt++)
        ;
      rt && (rt.style.maxWidth = ""), x += C.el.offsetHeight + pe;
    }), tn = x;
    const R = S.filter((C) => !So.includes(C.key));
    R.forEach((C) => {
      C.cols = wc(C, o, i), C.el.classList.add("tfBoardItem"), C.el.style.width = (C.cols === o ? t : C.cols * i + (C.cols - 1) * pe) + "px", C.el.style.height = "", C.rows = vc(C) ?? Math.max(1, Math.ceil((C.el.offsetHeight + pe - 6) / Wa));
    });
    const E = te && R.find((C) => C.key === te.key), B = e && Ls().map((C) => C.key), k = (C) => B.includes(C.key) ? B.indexOf(C.key) : -1, P = e ? zu([...R].sort((C, rt) => k(C) - k(rt)), o) : yc(R, o, E);
    P.forEach((C) => Object.assign(C, { x: C.cols === o ? 0 : C.col * y, y: tn + C.row * Wa, w: C.cols === o ? t : C.cols * i + (C.cols - 1) * pe, h: C.rows * Wa - pe })), R.forEach((C) => {
      const rt = P.get(C.key);
      C.el.style.height = rt.h + "px", C.el.dataset.rows = e && C.key === "wx" ? 5 : Un(C.key), C.key === "areas" && C.el.querySelectorAll(".tfAreaPanel .tfRoomTile").forEach((Tt) => {
        Tt.dataset.rows = C.el.dataset.rows;
      }), C.el.toggleAttribute("data-narrow", !e && rt.cols === 1 && o > 1), C.el.dataset.cols = rt.cols, C.el.classList.contains("tfDac") && C.el.style.setProperty("--tf-dac-pad", rt.h - Fu + "px"), !(C === E && !te.fromTray) && (C.el.style.left = rt.x + "px", C.el.style.top = rt.y + "px");
    }), e || (bn = P), Ds([...S.filter((C) => So.includes(C.key)), ...R.slice().sort((C, rt) => P.get(C.key).row - P.get(rt.key).row || P.get(C.key).col - P.get(rt.key).col)].map((C) => C.el)), [["favs", ".tfDash-favs"], ["act", ".tfDash-act"]].forEach(([C, rt]) => {
      const Tt = P.get(C), Bt = Tt && H.querySelector(rt), Gt = Bt == null ? void 0 : Bt.querySelector(":scope > .activityRows"), Ut = Bt == null ? void 0 : Bt.querySelector(":scope > .activityHeader");
      if (!Gt || !Ut) return;
      const Ct = Gt.getBoundingClientRect().top - Bt.getBoundingClientRect().top, Dt = Tt.rows === 1 ? Tt.h : Math.floor(Tt.h - Ct - parseFloat(getComputedStyle(Bt).paddingBottom)), ye = Math.max(1, Math.floor(Dt / qu));
      Gt.style.setProperty("--fill-row", (Dt / ye).toFixed(2) + "px"), Gt.style.maxHeight = Dt + "px";
    }), _i = Math.max(0, ...[...P.values()].map((C) => C.row + C.rows));
    let _ = tn + _i * Wa - pe;
    _ = Hs(sa && !e, R, P, _, o, i), H.style.height = _ + "px", requestAnimationFrame(() => g.classList.add("tfBoardReady")), u.forEach((C) => Ps.observe(C.el)), Yc(), Ae();
  }
  const _o = { row: 337, nameGap: 16, sumsGap: 16, full: 1336, floorTop: 12, floorHead: 24, floorGap: 16 }, xc = { s: { w: 252, h: 136, rows: 2 }, m: { w: 252, h: 212, rows: 3 }, l: { w: 252, h: 288, rows: 4 } }, Mc = () => {
    var t;
    return xc[(t = wt.home) == null ? void 0 : t.areaSize] ? wt.home.areaSize : "s";
  }, Bs = () => {
    var t;
    return ["rows", "columns", "bento"].includes((t = wt.home) == null ? void 0 : t.areaLayout) ? wt.home.areaLayout : "bento";
  }, kc = () => {
    var t;
    return ((t = wt.home) == null ? void 0 : t.cardsAs) === "rows" ? "rows" : "stacked";
  }, Uu = { byFloor: !0, bentoBoxes: !0, bentoMixed: !1, favsTitle: !1 }, Ci = () => T ? Co("favsTitle") : wt.favsTitle !== !1, Yu = () => {
    var t;
    return !!((t = wt.home) != null && t.weather && he());
  }, Sc = () => {
    var t;
    return !!((t = wt.home) != null && t.energy && (qa != null && qa.length));
  }, Co = (t) => {
    var e;
    return ((e = wt.home) == null ? void 0 : e[t]) ?? Uu[t];
  };
  function Zu() {
    var i;
    const t = Object.values(((i = d()) == null ? void 0 : i.floors) || {}), e = new Set(t.map((l) => l.floor_id)), a = t.map((l) => ({ id: l.floor_id, name: l.name, rooms: m.filter((c) => c.floor === l.floor_id) })), o = m.filter((l) => !e.has(l.floor));
    return o.length && a.push({ id: "", name: t.length ? "Other areas" : "", rooms: o }), a;
  }
  const _c = (t) => t.classList.toggle("hcMore", t.scrollHeight - t.scrollTop - t.clientHeight > 1);
  let ke = null, Cc = [], Br = /* @__PURE__ */ new Map();
  function Rs(t) {
    let e = H.querySelector(".hcHomeLand");
    if (!t) {
      e == null || e.remove();
      return;
    }
    e || (e = Object.assign(document.createElement("div"), { className: "tfBoardLand hcHomeLand" }), H.appendChild(e)), Object.assign(e.style, { left: t.x + "px", top: t.y + "px", width: t.w + "px", height: t.h + "px" });
  }
  function Ku(t) {
    if (!T || !Do || t.button !== 0 || H.clientWidth < 2 * Er + pe) return;
    const e = t.target.closest(".tfBoardItem"), a = e && vn().find((u) => u.el === e);
    if (!a || So.includes(a.key) || j(a.key)) return;
    t.preventDefault();
    const o = H.getBoundingClientRect(), i = Br.get(a.key);
    ke = { key: a.key, el: e, on: !1, x0: t.clientX, y0: t.clientY, left: i.x, top: i.y, order: [...Cc] };
    const l = (u) => {
      const f = u.clientX - ke.x0, y = u.clientY - ke.y0;
      if (!ke.on && Math.hypot(f, y) < 5) return;
      ke.on || (ke.on = !0, e.classList.add("tfDragging"), Ge() || e.animate([{ scale: "1" }, { scale: "1.05" }, { scale: "1.02" }], { duration: 260, easing: "cubic-bezier(.2,1.35,.4,1)" })), Object.assign(e.style, { left: ke.left + f + "px", top: ke.top + y + "px" });
      const S = u.clientX - o.left, x = u.clientY - o.top + H.scrollTop;
      let R = null, E = 1 / 0;
      if (Br.forEach((_, z) => {
        if (z === a.key || !ke.order.includes(z)) return;
        const C = Math.hypot(S - (_.x + _.w / 2), x - (_.y + _.h / 2));
        C < E && (E = C, R = { key: z, b: _ });
      }), !R) return;
      const B = ke.order.filter((_) => _ !== a.key), k = B.indexOf(R.key) + (S > R.b.x + R.b.w / 2 ? 1 : 0), P = [...B.slice(0, k), a.key, ...B.slice(k)];
      P.join() !== ke.order.join() ? (ke.order = P, We()) : Rs(Br.get(a.key));
    }, c = () => {
      removeEventListener("pointermove", l), removeEventListener("pointerup", c), removeEventListener("pointercancel", c);
      const u = ke;
      ke = null, e.classList.remove("tfDragging"), u.on && ga({ order: u.order }), We(), u.on && !Ge() && setTimeout(() => Pl(e), 340);
    };
    addEventListener("pointermove", l), addEventListener("pointerup", c), addEventListener("pointercancel", c);
  }
  function Xu(t, e, a) {
    var _d;
    const o = new Set(ie().hidden);
    t.forEach((ut) => ut.el.classList.toggle("tfBoardHidden", o.has(ut.key)));
    const i = t.filter((ut) => !o.has(ut.key) && getComputedStyle(ut.el).display !== "none"), l = pe, c = a ? { w: Math.floor((e - l) / 2) } : en(e), u = Math.min(e, _o.full);
    let f = 0;
    const y = Pi();
    g.classList.toggle("hcSumsFit", Nc()), g.classList.toggle("hcFavStrip", y);
    const S = i.filter((ut) => So.includes(ut.key) || y && ut.key === "favs");
    S.sort((ut, Pt) => ["title", "sums", "favs"].indexOf(ut.key) - ["title", "sums", "favs"].indexOf(Pt.key)), S.forEach((ut) => {
      ut.el.classList.add("tfBoardItem"), ut.el.toggleAttribute("data-narrow", !1), Object.assign(ut.el.style, { width: (ut.key === "title" ? e : u) + "px", height: "", left: "0px", top: f + "px" });
      const Pt = ut.key !== "title" && (ut.el.querySelector(".tfDash-bar>.activityRows") || ut.key === "favs" && ut.el.querySelector(":scope>.activityRows")), Le = Pt ? Pt.children.length : 0;
      if (Pt && (Pt.classList.remove("hcBarRows"), !a && Pt.scrollWidth > Pt.clientWidth + 1))
        for (let Zt = 2; Zt <= Le && (Pt.classList.add("hcBarRows"), Pt.style.setProperty("--bar-cols", String(Math.ceil(Le / Zt))), !(Pt.scrollWidth <= Pt.clientWidth + 1)); Zt++)
          ;
      f += ut.el.offsetHeight + (ut.key === "title" ? _o.nameGap : _o.sumsGap);
    });
    const x = ["favs", "wx", "energy"], R = (ke == null ? void 0 : ke.order) || ((_d = wt.home) == null ? void 0 : _d.order), E = R ? [...R.filter((ut) => x.includes(ut)), ...x.filter((ut) => !R.includes(ut))] : x;
    Cc = E;
    const B = i.filter((ut) => x.includes(ut.key) && !(y && ut.key === "favs")).sort((ut, Pt) => E.indexOf(ut.key) - E.indexOf(Pt.key));
    Br = /* @__PURE__ */ new Map();
    const k = (ut, Pt) => {
      if (Br.set(ut.key, Pt), Object.assign(ut.el.style, { width: Pt.w + "px", height: Pt.h + "px" }), ke != null && ke.on && ke.key === ut.key) {
        Rs(Pt);
        return;
      }
      Object.assign(ut.el.style, { left: Pt.x + "px", top: Pt.y + "px" });
    }, P = a ? e : 2 * c.w + l, _ = _o.row, z = kc() === "stacked" && !a && B.length > 0;
    let C = 0, rt = 0, Tt = f;
    B.forEach((ut) => {
      ut.el.classList.add("tfBoardItem"), ut.el.dataset.rows = 5, ut.el.dataset.cols = 2, ut.el.toggleAttribute("data-narrow", !1), !z && C && C + P > e && (f += rt + l, C = 0, rt = 0);
      let Pt = _;
      if ((a || ut.key === "favs") && (Object.assign(ut.el.style, { width: P + "px", height: "" }), Pt = ut.el.offsetHeight), z) {
        k(ut, { x: 0, y: Tt, w: P, h: Pt }), Tt += Pt + l;
        return;
      }
      k(ut, { x: C, y: f, w: P, h: Pt }), C += P + l, rt = Math.max(rt, Pt);
    }), B.length && !z && (f += rt + l);
    const Bt = z ? P + l : 0, Gt = z ? e - P - l : e, Ut = a ? "l" : Mc(), Ct = xc[Ut], Dt = Bs(), ye = Co("byFloor"), Te = c.w, Ne = Ct.h, Fe = a ? 2 : Math.max(1, Math.floor((Gt + l) / (Te + l))), or = new Map(i.filter((ut) => j(ut.key)).map((ut) => [ut.key, ut])), Ea = (ye ? Zu() : [{ id: "", name: "", icon: "", rooms: m }]).map((ut) => ({ ...ut, cards: ut.rooms.map((Pt) => or.get("room:" + Pt.id)).filter(Boolean) })).filter((ut) => ut.cards.length), Vi = Dt === "bento", ji = Vi && Co("bentoMixed"), Jf = Vi && ye && Co("bentoBoxes"), Qf = Dt === "columns" && ye && !a, Ro = 12, kd = (ut) => ut.name ? _o.floorHead + _o.floorGap : 0, Vr = (ut, Pt, Le) => {
      const Zt = /* @__PURE__ */ new Set(), se = [];
      ut.cards.forEach(($t, so) => {
        const an = ji && so === 0 && Pt >= 2 && ut.cards.length > 1, je = an ? 2 : 1, Po = an && !a ? 2 : 1;
        $t.el.classList.add("tfBoardItem"), $t.el.dataset.cols = je, $t.el.toggleAttribute("data-narrow", !1);
        for (let _n = 0; ; _n++) {
          const Cn = [...Array(Math.max(0, Pt - je + 1)).keys()].find((jr) => [...Array(je).keys()].every((Ua) => [...Array(Po).keys()].every((zi) => !Zt.has(_n + zi + "," + (jr + Ua)))));
          if (Cn != null) {
            [...Array(je).keys()].forEach((jr) => [...Array(Po).keys()].forEach((Ua) => Zt.add(_n + Ua + "," + (Cn + jr)))), se.push({ it: $t, r: _n, c: Cn, sc: je, sr: Po });
            break;
          }
        }
      });
      const le = Math.max(0, ...se.map(($t) => $t.r + $t.sr));
      Vi && !a && se.forEach(($t) => {
        for (; $t.r + $t.sr < le && !Zt.has($t.r + $t.sr + "," + $t.c) && $t.sc === 1; )
          Zt.add($t.r + $t.sr + "," + $t.c), $t.sr++;
      }), se.forEach(($t) => {
        $t.it.el.dataset.rows = Math.min(5, $t.sr * Ct.rows), Object.assign($t.it.el.style, { width: $t.sc * Le + ($t.sc - 1) * l + "px", height: $t.sr * Ne + ($t.sr - 1) * l + "px" });
      });
      const Kt = [...Array(le)].map(() => Ne), ge = [];
      let ba = kd(ut);
      return Kt.forEach(($t, so) => {
        ge[so] = ba, ba += $t + l;
      }), { h: ba - (le ? l : 0), places: se.map(($t) => ({ it: $t.it, x: $t.c * (Le + l), y: ge[$t.r], w: $t.sc * Le + ($t.sc - 1) * l, h: Kt.slice($t.r, $t.r + $t.sr).reduce((so, an) => so + an, 0) + ($t.sr - 1) * l })) };
    }, xl = new Map([...H.querySelectorAll(":scope > .hcFloor")].map((ut) => [ut.dataset.floor, ut])), Ml = new Map([...H.querySelectorAll(":scope > .hcFloorBox")].map((ut) => [ut.dataset.floor, ut])), Sd = [], th = (ut, Pt, Le, Zt) => {
      if (!ut.name) return;
      let se = xl.get(ut.id);
      xl.delete(ut.id), se || (se = Object.assign(document.createElement("div"), { className: "hcFloor" }), se.dataset.floor = ut.id, H.appendChild(se)), se.dataset.sig !== ut.name && (se.dataset.sig = ut.name, se.innerHTML = '<h2 class="hcFloorName">' + F(ut.name) + "</h2>"), Object.assign(se.style, { left: Pt + "px", top: Le + "px", width: Zt + "px" }), Sd.push(se);
    }, eh = (ut, Pt, Le, Zt, se) => {
      let le = Ml.get(ut.id);
      Ml.delete(ut.id), le || (le = Object.assign(document.createElement("div"), { className: "hcFloorBox" }), le.dataset.floor = ut.id, le.setAttribute("aria-hidden", "true"), H.prepend(le)), Object.assign(le.style, { left: Pt + "px", top: Le + "px", width: Zt + "px", height: se + "px" });
    }, ah = (ut) => parseFloat(getComputedStyle(ut.cards[0].el).paddingLeft) || 0, kl = (ut, Pt, Le, Zt, se = 0) => {
      th(ut, Le + se, Zt, (Pt.w ?? e) - se), Pt.places.forEach((le) => k(le.it, { x: Le + le.x, y: Zt + le.y, w: le.w, h: le.h }));
    };
    if (Ea.length && B.length && !z && (f += _o.floorTop), Qf) {
      let ut = 0, Pt = f;
      Ea.forEach((Le) => {
        const Zt = { ...Vr(Le, 1, Te), w: Te };
        ut && ut + Te > Gt && (f = Pt + l + _o.floorTop, ut = 0), kl(Le, Zt, Bt + ut, f), Pt = Math.max(Pt, f + Zt.h), ut += Te + l;
      }), f = Pt + l;
    } else if (Jf) {
      let ut = [{ x0: 0, x1: Gt, t: f }];
      const Pt = (Zt, se) => Math.max(...ut.filter((le) => le.x1 > Zt && le.x0 < se).map((le) => le.t)), Le = (Zt, se, le) => {
        const Kt = [];
        ut.forEach((ge) => {
          ge.x1 <= Zt || ge.x0 >= se ? Kt.push(ge) : (ge.x0 < Zt && Kt.push({ x0: ge.x0, x1: Zt, t: ge.t }), ge.x1 > se && Kt.push({ x0: se, x1: ge.x1, t: ge.t }));
        }), Kt.push({ x0: Zt, x1: se, t: le }), ut = Kt.sort((ge, ba) => ge.x0 - ba.x0);
      };
      Ea.forEach((Zt) => {
        const se = Zt.cards.length + (ji && Zt.cards.length > 1 ? 3 : 0);
        let le = a ? 2 : Math.min(Fe, Math.max(ji && Zt.cards.length > 1 ? 2 : 1, se <= 3 ? se : Math.ceil(se / 2)));
        for (; !a && le > 1 && le * Te + (le - 1) * l + 2 * Ro > Gt; ) le--;
        let Kt = null;
        for (let je = le; je >= (a ? le : 1); je--) {
          const Po = Math.min(Te, Math.floor((Gt - 2 * Ro - (je - 1) * l) / je)), _n = { ...Vr(Zt, je, Po), w: je * Po + (je - 1) * l }, Cn = _n.w + 2 * Ro, jr = _n.h + 2 * Ro;
          ut.map((Ua) => Ua.x0).filter((Ua) => Ua + Cn <= Gt + 0.5).forEach((Ua) => {
            const zi = Pt(Ua, Ua + Cn);
            (!Kt || zi < Kt.t - 0.5) && (Kt = { cc: je, inner: Po, bw: Cn, h: jr, t: zi, x: Ua });
          });
        }
        if (!Kt) {
          const je = Math.min(Te, Gt - 2 * Ro), Po = Vr(Zt, 1, je);
          Kt = { cc: 1, inner: je, bw: je + 2 * Ro, h: Po.h + 2 * Ro, t: Pt(0, Gt), x: 0 };
        }
        const ge = { ...Vr(Zt, Kt.cc, Kt.inner), w: Kt.cc * Kt.inner + (Kt.cc - 1) * l }, ba = Kt.bw, $t = Kt.h, so = Kt.x, an = Kt.t;
        eh(Zt, Bt + so, an, ba, $t), kl(Zt, ge, Bt + so + Ro, an + Ro, ah(Zt)), Le(so, Math.min(Gt, so + ba + l), an + $t + l);
      }), f = Math.max(...ut.map((Zt) => Zt.t));
    } else {
      const ut = (Pt) => {
        var le;
        if (!((le = wt.home) != null && le.fitTogether) || a) return Fe;
        const Le = z ? Tt - l - f : null, Zt = (Kt) => {
          const ge = Pt.cards.length + (ji && Pt.cards.length > 1 && Kt >= 2 ? 3 : 0), ba = Math.ceil(ge / Kt);
          return { holes: ba * Kt - ge, rows: ba, h: kd(Pt) + ba * Ne + (ba - 1) * l, w: Kt * Te + (Kt - 1) * l };
        }, se = (Kt) => Kt.holes === 0 || Vi && Kt.holes === 1 && Kt.rows > 1;
        for (let Kt = 1; Kt <= Fe; Kt++) {
          const ge = Zt(Kt);
          if (se(ge) && ge.h <= (Le ?? ge.w)) return Kt;
        }
        for (let Kt = 1; Kt <= Fe; Kt++) {
          const ge = Zt(Kt);
          if (ge.h <= (Le ?? ge.w)) return Kt;
        }
        return Fe;
      };
      Ea.forEach((Pt, Le) => {
        Le && (f += _o.floorTop);
        const Zt = Vr(Pt, ut(Pt), Te);
        kl(Pt, { ...Zt, w: Gt }, Bt, f), f += Zt.h + l;
      });
    }
    z && (f = Math.max(f, Tt)), xl.forEach((ut) => ut.remove()), Ml.forEach((ut) => ut.remove()), ke != null && ke.on || Rs(null), H.style.height = Math.max(0, f - l) + "px", Ds([...S.map((ut) => ut.el), ...B.map((ut) => ut.el), ...Sd, ...Ea.flatMap((ut) => ut.cards.map((Pt) => Pt.el))]), Hs(!1), t.forEach((ut) => [...ut.el.children].forEach((Pt) => Pt.toggleAttribute("inert", Do)));
    const Sl = H.querySelector(".tfDash-favs>.activityRows");
    Sl && (Sl.classList.toggle("hcFadeList", !y), _c(Sl)), requestAnimationFrame(() => g.classList.add("tfBoardReady")), t.forEach((ut) => Ps.observe(ut.el)), Ae();
  }
  const Ai = () => {
    Cs || (Cs = !0, requestAnimationFrame(() => {
      Cs = !1, We();
    }));
  }, Ps = new ResizeObserver(() => {
    te || Ai();
  });
  function $u(t, e, a) {
    const o = a + pe, i = t * a + (t - 1) * pe, l = e * Wa - pe, c = pe / 2, u = o / Math.max(1, Math.round(o / (Wa / 4))), f = Wa / 4, y = 6;
    let S = "";
    for (let x = 0; x <= t; x++) for (let R = 0; R <= e; R++) {
      const E = x * o - c, B = R * Wa - c;
      S += "M" + (E - y) + " " + B + "H" + (E + y) + "M" + E + " " + (B - y) + "V" + (B + y);
    }
    return '<svg width="' + i + '" height="' + l + '" viewBox="0 0 ' + i + " " + l + '"><defs><pattern id="tfGridDots" patternUnits="userSpaceOnUse" x="' + -c + '" y="' + -c + '" width="' + u.toFixed(3) + '" height="' + f + '"><circle cx="0" cy="0" r="1.4"></circle><circle cx="' + u.toFixed(3) + '" cy="0" r="1.4"></circle><circle cx="0" cy="' + f + '" r="1.4"></circle><circle cx="' + u.toFixed(3) + '" cy="' + f + '" r="1.4"></circle></pattern></defs><rect class="tfGridDots" x="' + -c + '" y="' + -c + '" width="' + (i + pe) + '" height="' + (l + pe) + '" fill="url(#tfGridDots)"></rect><path class="tfGridCross" d="' + S + '"></path></svg>';
  }
  function Hs(t, e = [], a = /* @__PURE__ */ new Map(), o = 0, i = 1, l = Er) {
    H.querySelectorAll(".tfEditChips").forEach((S) => {
      (!t || !S.closest(".tfBoardItem")) && S.remove();
    }), H.querySelectorAll(".tfFavHides").forEach((S) => S.remove()), H.querySelectorAll(".tfBoardItem").forEach((S) => [...S.children].forEach((x) => {
      x.classList.contains("tfEditChips") || x.toggleAttribute("inert", t);
    }));
    let c = H.querySelector(".tfBoardCells"), u = H.querySelector(".tfBoardLand");
    if (!t)
      return c == null || c.remove(), u == null || u.remove(), oo(), o;
    const f = _i + Hu;
    if (c || (c = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), c.setAttribute("aria-hidden", "true"), H.prepend(c)), c.style.top = tn + "px", c.dataset.size !== i + "x" + f + "x" + l && (c.dataset.size = i + "x" + f + "x" + l, c.innerHTML = $u(i, f, l)), o = Math.max(o, tn + f * Wa - pe), e.forEach((S) => {
      const x = S.el;
      !x || x.querySelector(":scope > .tfEditChips") || x.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + Kr + '</span><button class="tfEditChip" type="button" data-board-more="' + F(S.key) + '" aria-label="' + F(Aa(S.key)) + ' options" aria-haspopup="menu">' + F0 + "</button></div>");
    }), te && a.has(te.key)) {
      u || (u = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), H.appendChild(u));
      const S = a.get(te.key);
      Object.assign(u.style, { left: S.x + "px", top: S.y + "px", width: S.w + "px", height: S.h + "px" });
    } else u == null || u.remove();
    const y = H.querySelector(".tfDash-favs.tfBoardItem:not(.tfBoardHidden)");
    if (y) {
      const S = y.getBoundingClientRect();
      y.insertAdjacentHTML("beforeend", '<div class="tfFavHides">' + [...y.querySelectorAll('[data-k^="fav:"]')].map((x) => {
        const R = x.getBoundingClientRect(), E = x.dataset.k.slice(4);
        return '<button class="tfFavHide" type="button" data-fav-hide="' + F(E) + '" aria-label="Hide ' + F(mt(E)) + ' from the dashboard" style="left:' + Math.round(R.right - S.left - 42) + "px;top:" + Math.round(R.top - S.top + (R.height - 32) / 2) + 'px">' + Ap + "</button>";
      }).join("") + "</div>");
    }
    return o;
  }
  let Ns = "";
  function Os(t) {
    sa = t, t || (te = null, Ao = To = !1, oo()), We(), t ? (Ns = JSON.stringify(wt), Xn(Yt, "Edit custom dashboard", null)) : Ns && JSON.stringify(wt) !== Ns && Ta("Changes saved");
  }
  function Ju(t, e) {
    var P, _;
    oo();
    const a = bn.get(t), { n: o } = en(H.clientWidth), i = ie(), l = i.spans[t] ?? (j(t) ? 1 : 2);
    if (!a) return;
    const c = a.cols >= o, u = (z, C, rt) => '<button type="button" role="menuitem" data-board-act="' + z + '"' + (rt ? " disabled" : "") + ">" + C + "</button>", f = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    f.setAttribute("role", "menu"), f.setAttribute("aria-label", Aa(t) + " options");
    const y = H.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]'), S = gc(t), x = Un(t), R = '<div class="tfHeight" role="group" aria-label="Height"><span class="tfHeightLabel" aria-hidden="true">Height</span><div class="tfHeightTabs">' + hc.map((z, C) => '<button type="button" role="menuitemradio" aria-checked="' + (C + 1 === x) + '" aria-label="' + z + ", " + (C + 1) + (C ? " rows" : " row") + '" data-board-act="h:' + (C + 1) + '"' + (C < S ? "" : " disabled") + ">" + z + "</button>").join("") + "</div></div>", E = Nu.includes(t) || j(t) ? '<div class="tfHeight tfWidth" role="group" aria-label="Width"><span class="tfHeightLabel" aria-hidden="true">Width</span><div class="tfHeightTabs">' + Ou.map((z, C) => '<button type="button" role="menuitemradio" aria-checked="' + (C + 1 === Math.min(l, o)) + '" aria-label="' + z + ", " + (C + 1) + (C ? " columns" : " column") + '" data-board-act="w:' + (C + 1) + '"' + (C < o ? "" : " disabled") + ">" + z + "</button>").join("") + "</div></div>" : "", B = t === "radar" ? '<div class="tfHeight tfSource" role="group" aria-label="Source"><span class="tfHeightLabel" aria-hidden="true">Source</span><div class="tfSourceList">' + fs().map(([z, C]) => '<button type="button" role="menuitemradio" aria-checked="' + (z === mr()) + '" data-board-act="src:' + F(z) + '">' + F(C) + "</button>").join("") + "</div></div>" : "";
    f.innerHTML = R + E + B + (t === "energy" ? u("graph", (((P = i.opts.energy) == null ? void 0 : P.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + u("left", "Move left", c || a.col === 0) + u("right", "Move right", c || a.col + a.cols >= o) + u("up", "Move up", a.row <= 0) + u("down", "Move down") + (y ? u("remove", "Remove") : u("hide", "Hide")), H.appendChild(f);
    const k = Math.min(a.x + a.w - f.offsetWidth, H.clientWidth - f.offsetWidth);
    Object.assign(f.style, { left: Math.max(0, k) + "px", top: a.y + 28 + "px" }), ea = { key: t, menu: f, opener: e }, (_ = f.querySelector("button:not([disabled])")) == null || _.focus();
  }
  function oo(t) {
    if (!ea) return;
    const { menu: e, opener: a } = ea;
    ea = null, e.remove(), t && (a == null || a.focus());
  }
  const yn = () => Object.fromEntries([...bn].map(([t, e]) => [t, { col: e.col, row: e.row }]));
  function Qu(t, e) {
    var u, f, y;
    if (e === "remove") {
      oo(), tf(t);
      return;
    }
    const a = wt, o = ie(), i = yn(), l = i[t] || { col: 0, row: 0 };
    e.startsWith("w:") && (o.spans = { ...o.spans, [t]: e === "w:full" ? "full" : Number(e.slice(2)) }), e.startsWith("h:") && (o.opts = { ...o.opts, [t]: { ...o.opts[t] || {}, h: Number(e.slice(2)), tall: void 0 } }), e.startsWith("src:") && (o.opts = { ...o.opts, radar: { ...o.opts.radar || {}, source: e.slice(4) } }), e === "graph" && (o.opts = { ...o.opts, energy: { ...o.opts.energy || {}, graph: (((u = o.opts.energy) == null ? void 0 : u.graph) || "above") === "above" ? "below" : "above" } }), e === "left" && (i[t] = { ...l, col: l.col - 1 }), e === "right" && (i[t] = { ...l, col: l.col + 1 }), e === "up" && (i[t] = { ...l, row: l.row - 1 }), e === "down" && (i[t] = { ...l, row: l.row + 1 }), e === "hide" && (o.hidden = [.../* @__PURE__ */ new Set([...o.hidden, t])]), ["left", "right", "up", "down"].includes(e) && (te = { key: t, col: i[t].col, row: i[t].row }), Yn(o, i), te && (We(), te = null, Yn(ie(), yn()));
    const c = /^[hw]:/.test(e) && !Ge() && (ea == null ? void 0 : ea.menu.querySelector('[data-board-act="' + CSS.escape(e) + '"]'));
    if (c) {
      const S = ea;
      c.parentElement.querySelectorAll("[aria-checked]").forEach((x) => x.setAttribute("aria-checked", String(x === c))), setTimeout(() => {
        ea === S && oo();
      }, De.tabs.dur);
    } else oo();
    e === "graph" && (xa.delete("dash:energy"), Pe()), e.startsWith("src:") && ((f = Ce == null ? void 0 : Ce.get("radar")) == null || f.refresh(), Me == null || Me.refresh()), e.startsWith("h:") && t.includes(".") && Pe(), We(), e !== "hide" ? (y = H.querySelector('[data-board-more="' + CSS.escape(t) + '"]')) == null || y.focus() : Ta(Aa(t) + " hidden", Ri(a));
  }
  const Ac = (t) => {
    var e;
    return zo.includes(t) && !(((e = wt.dash) == null ? void 0 : e.cells) || {})[t] ? " added" : " put back";
  };
  function Is(t) {
    const e = ie(), a = Aa(t) + Ac(t);
    wn({ ...e, hidden: e.hidden.filter((o) => o !== t) }), We(), Ta(a);
  }
  const Ti = () => ie().tiles || [...H.querySelectorAll(".tfDashTiles > [data-k]")].map((t) => t.dataset.k).filter((t) => !ie().hidden.includes(t));
  function Tc(t, e) {
    const a = ie();
    Yn({ ...a, tiles: t, hidden: a.hidden.filter((o) => !o.includes(".")) }, e), Pe(), Ae();
  }
  const Lc = (t) => {
    Tc([...Ti().filter((e) => e !== t), t], yn()), Ta(Aa(t) + " added"), nf(t);
  }, tf = (t) => {
    const e = wt, a = yn();
    delete a[t], Tc(Ti().filter((o) => o !== t), a), Ta(Aa(t) + " removed", Ri(e));
  };
  let Fs = 0;
  function Ta(t, e = null) {
    var c;
    const a = p("toast");
    if (!a) return;
    if (mm(a, t), e) {
      const u = Object.assign(document.createElement("button"), { type: "button", className: "toastAction", textContent: "Undo" });
      u.addEventListener("click", () => {
        clearTimeout(Fs), a.classList.remove("show", "withAction"), e();
      }), a.appendChild(u);
    }
    const o = g.getBoundingClientRect(), i = (c = n.querySelector(".bottomNav")) == null ? void 0 : c.getBoundingClientRect(), l = Yt.classList.contains("open") && !no ? Math.min(o.right, Yt.getBoundingClientRect().left) : o.right;
    a.style.left = (o.left + l) / 2 + "px", a.style.bottom = (i != null && i.height ? window.innerHeight - i.top + 12 : 26) + "px", a.classList.add("tfToast", "show"), a.classList.toggle("withAction", !!e), gm(a), clearTimeout(Fs), Fs = setTimeout(() => a.classList.remove("show", "withAction"), e ? 5e3 : De.confirm.stay);
  }
  const ef = 700, af = 1e3, la = Object.assign(document.createElement("div"), { className: "tfTooltip", hidden: !0 });
  la.setAttribute("role", "tooltip"), la.setAttribute("aria-hidden", "true"), g.appendChild(la);
  let Li = null, Rr = 0, Zn = 0, Dc = -1 / 0;
  const qs = (t) => {
    if (t.nodeType !== 1) return !1;
    const e = getComputedStyle(t);
    return e.textOverflow === "ellipsis" && t.scrollWidth > t.clientWidth + 1 || e.webkitLineClamp !== "none" && t.scrollHeight > t.clientHeight + 1;
  }, of = (t) => {
    for (let e = t; e && e !== g; e = e.parentElement) if (qs(e)) return e;
    return null;
  };
  function Ec(t, e) {
    clearTimeout(Rr), clearTimeout(Zn);
    const a = () => {
      if (!t.isConnected) return;
      Li = t, la.textContent = e, la.hidden = !1;
      const o = t.getBoundingClientRect(), i = la.getBoundingClientRect(), l = o.top - i.height - 8 >= 8 ? o.top - i.height - 8 : o.bottom + 8;
      la.style.left = Math.max(8, Math.min(window.innerWidth - i.width - 8, o.left + o.width / 2 - i.width / 2)) + "px", la.style.top = l + "px";
    };
    !la.hidden || performance.now() - Dc < af ? a() : Rr = setTimeout(a, ef);
  }
  function Di() {
    clearTimeout(Rr), clearTimeout(Zn), la.hidden || (Dc = performance.now()), la.hidden = !0, Li = null;
  }
  n.addEventListener("pointerover", (t) => {
    if (t.pointerType === "touch") return;
    if (la.contains(t.target)) {
      clearTimeout(Zn);
      return;
    }
    const e = of(t.target);
    if (e && Xt.names === "scroll" && e.matches(Ei)) {
      Ws(e);
      return;
    }
    if (e) {
      e !== Li ? Ec(e, e.textContent.trim()) : clearTimeout(Zn);
      return;
    }
    clearTimeout(Rr), clearTimeout(Zn), Zn = setTimeout(Di, 120);
  }), n.addEventListener("focusin", (t) => {
    var o;
    const e = t.target;
    if (!((o = e.matches) != null && o.call(e, ":focus-visible"))) return;
    let a = [e, ...e.querySelectorAll("*")].filter(qs);
    Xt.names === "scroll" && (a.filter((i) => i.matches(Ei)).forEach(Ws), a = a.filter((i) => !i.matches(Ei))), a.length && Ec(e, a.map((i) => i.textContent.trim()).join(" · "));
  }), n.addEventListener("focusout", (t) => {
    t.target === Li && Di();
  }), n.addEventListener("keydown", (t) => {
    t.key === "Escape" && !la.hidden && (t.stopPropagation(), Di());
  }, !0), window.addEventListener("scroll", () => {
    (!la.hidden || Rr) && Di();
  }, { capture: !0, passive: !0 });
  const Ei = ".activityRowName,.activityRowMeta", Bi = /* @__PURE__ */ new WeakSet();
  function Ws(t) {
    var a;
    if (Xt.names !== "scroll" || Bi.has(t) || t.closest("[inert]") || (a = window.matchMedia) != null && a.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    Bi.add(t);
    const e = () => Promise.all([t.closest(".hcAreaPanel"), t.closest(".panelExpanded")].filter(Boolean).flatMap((o) => o.getAnimations()).map((o) => o.finished.catch(() => {
    })));
    setTimeout(async () => {
      await e();
      const o = t.isConnected && !t.closest("[inert]") ? t.scrollWidth - t.clientWidth : 0;
      if (o < 2) {
        Bi.delete(t);
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
        t.style.textOverflow = "", Bi.delete(t);
      };
    }, 600);
  }
  const Bc = new IntersectionObserver((t) => t.forEach((e) => {
    e.isIntersecting && !e.target.closest("[inert]") && (Bc.unobserve(e.target), Ws(e.target));
  }), { threshold: 1 });
  let Vs = !1;
  new MutationObserver(() => {
    Vs || Xt.names !== "scroll" || (Vs = !0, setTimeout(() => {
      Vs = !1, n.querySelectorAll(Ei).forEach((t) => {
        !t.dataset.glided && qs(t) && (t.dataset.glided = "1", Bc.observe(t));
      });
    }, 300));
  }).observe(n, { childList: !0, subtree: !0 });
  const Ri = (t) => () => {
    wt = t, ya(), Pe(), We(), Ae();
  };
  function nf(t) {
    const e = () => H.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]');
    setTimeout(() => {
      var c;
      const a = e();
      if (!a) return;
      const o = (c = window.matchMedia) == null ? void 0 : c.call(window, "(prefers-reduced-motion: reduce)").matches, i = a.getBoundingClientRect();
      (i.top < 0 || i.bottom > window.innerHeight) && a.scrollIntoView({ behavior: o ? "auto" : "smooth", block: "center" });
      const l = (u) => "0 0 0 4px color-mix(in srgb,var(--primary) " + u + "%,transparent),0 0 24px color-mix(in srgb,var(--primary) " + u + "%,transparent)";
      a.animate([{ boxShadow: l(55) }, { boxShadow: l(0) }], { duration: 1500, easing: o ? "steps(1, end)" : "ease-out" });
    }, rf(t) ? 260 : 0);
  }
  function rf(t) {
    const e = bn.get(t);
    if (!e || !Yt.classList.contains("open") || no) return !1;
    const { n: a, w: o } = en(H.clientWidth), i = Yt.getBoundingClientRect().left - H.getBoundingClientRect().left, l = (f) => f * (o + pe) + e.cols * o + (e.cols - 1) * pe <= i;
    if (l(e.col)) return !1;
    const c = /* @__PURE__ */ new Set();
    bn.forEach((f, y) => {
      if (y !== t) for (let S = f.row; S < f.row + f.rows; S++) for (let x = f.col; x < f.col + f.cols; x++) c.add(x + "," + S);
    });
    const u = (f, y) => {
      for (let S = y; S < y + e.rows; S++) for (let x = f; x < f + e.cols; x++) if (c.has(x + "," + S)) return !1;
      return !0;
    };
    for (let f = 0; f <= _i; f++) for (let y = 0; y + e.cols <= a && l(y); y++)
      if (u(y, f))
        return Yn(ie(), { ...yn(), [t]: { col: y, row: f } }), We(), !0;
    return !1;
  }
  const Rc = /^(light|switch|cover|climate|fan|lock|valve|media_player|humidifier|vacuum|scene|script|alarm_control_panel|water_heater|input_boolean)\./, Pc = [["page", "Page"], ["cards", "Cards"], ["areas", "Areas"], ["favs", "Favourites"]];
  let Kn = "page";
  const sf = (t, e) => '<section class="hcRowsCard hcTrayList">' + t.map(([a, o]) => '<button class="hcRow hcConfigRow" type="button" ' + e + '="' + a + '"><span class="hcRowText"><span class="hcRowName">' + F(o) + '</span></span><span class="hcRowEnd">' + Ul + "</span></button>").join("") + "</section>", Xn = (t, e, a, o) => {
    t.classList.toggle("hcTrayIn", !!a), t.querySelector(".tfTrayHead .activityTitle").textContent = a ? o : e, t.querySelector(".tfTrayInner").scrollTop = 0;
  }, lf = '<button class="back hcTrayBack" type="button" data-tray-back aria-label="Back">' + Vl + "</button>", cf = (t) => t.matches('[data-tray="welcome"],[data-tray="phone"]') ? "page" : t.querySelector("[data-room-add]") ? "areas" : t.querySelector('[data-tray="favs"]') ? "favs" : "cards";
  function js(t = !1) {
    const e = Yt.querySelector(".tfTrayInner"), a = Yt.querySelector(".hcTrayTabs"), o = a.querySelector(".rubberIndicator");
    let i = !0;
    e.querySelectorAll(":scope>.tfTraySection").forEach((c) => {
      c.hidden = cf(c) !== Kn, c.classList.toggle("hcFirst", !c.hidden && i), c.hidden || (i = !1);
    }), a.querySelectorAll("[data-tray-tab]").forEach((c) => {
      const u = c.dataset.trayTab === Kn;
      c.classList.toggle("active", u), c.setAttribute("aria-selected", String(u));
    });
    const l = a.querySelector(".tab.active");
    l != null && l.offsetWidth && (o.style.transition = "none", t ? rs(o, o.offsetLeft, o.offsetWidth, l.offsetLeft, l.offsetWidth) : (o.style.left = l.offsetLeft + "px", o.style.width = l.offsetWidth + "px"));
  }
  const Yt = Object.assign(document.createElement("aside"), { className: "tfEditTray" });
  Yt.setAttribute("aria-label", "Edit custom dashboard"), Yt.innerHTML = '<button class="tfTrayTuck" type="button" data-tray-tuck></button><div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit custom dashboard</div><button class="pill" type="button" data-tray-done>Done</button></div><div class="tabs rubberTabs hcTrayTabs" role="tablist" aria-label="Edit custom dashboard"><div class="rubberIndicator" aria-hidden="true"></div>' + Pc.map(([t, e], a) => '<button class="tab segBtn' + (a ? "" : " active") + '" type="button" role="tab" aria-selected="' + !a + '" data-tray-tab="' + t + '">' + e + "</button>").join("") + '</div><section class="tfTraySection" data-tray="welcome"></section><section class="tfTraySection" data-tray="cards"></section><section class="tfTraySection" data-tray="weather"></section><section class="tfTraySection"><div class="sectionLabel">Tiles</div><p class="tfTrayNote">Remove a tile from its ⋯.</p><button class="pill tfTrayAdd hcAddBtn" type="button" data-tile-add aria-expanded="false">' + ts + '<span>Add tile</span></button><div class="tfTrayPick" data-pick="tiles" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-tile-search><ul class="tfTrayList" data-tray="tilepick"></ul></div></section><section class="tfTraySection"><div class="sectionLabel">Areas</div><p class="tfTrayNote">Which areas the Areas card shows. Drag to change their order, here and on Home.</p><button class="pill tfTrayAdd hcAddBtn" type="button" data-room-add aria-expanded="false">' + ts + '<span>Add area</span></button><ul class="tfTrayList" data-tray="roompick" hidden></ul><ul class="tfTrayList hcHeList" data-tray="areas"></ul></section><section class="tfTraySection" data-tray="phone"></section><section class="tfTraySection"><div class="sectionLabel">Favourites</div><ul class="tfTrayList" data-tray="favs"></ul><button class="pill tfTrayAdd hcAddBtn" type="button" data-fav-add aria-expanded="false">' + ts + '<span>Add favourite</span></button><div class="tfTrayPick" data-pick="favs" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-fav-search><ul class="tfTrayList" data-tray="pick"></ul></div><div class="toggleRow tfTraySuggest" data-tray="favtitle"></div><div class="toggleRow tfTraySuggest" data-tray="suggest"></div></section></div>', g.appendChild(Yt);
  let no = !1, Ao = !1, To = !1, Pr = !1, aa = null, Lo = !1;
  const zs = {}, Va = (t, e) => {
    if (zs[t] === e) return;
    zs[t] = e;
    const a = Yt.querySelector('[data-tray="' + t + '"]');
    a.innerHTML = e, bo(a);
  }, Gs = (t, e) => '<span class="tfTrayName"><span class="activityRowName">' + F(mt(t)) + '</span><span class="activityRowMeta">' + F(e) + "</span></span>", df = (t, e, a) => '<li class="tfTrayFav' + (e ? " off" : "") + '" data-tray-fav="' + F(t) + '"><span class="tfTrayGrip" aria-hidden="true">' + Kr + '</span><span class="tfIcon"' + ve(t, Sa(t)) + "></span>" + Gs(t, e ? "Hidden" + (we.get(t) ? " · " + we.get(t) : "") : we.get(t) || He(t)) + '<button class="tfTrayBtn" type="button" data-fav-eye="' + F(t) + '" aria-pressed="' + !e + '" aria-label="' + (e ? "Show " : "Hide ") + F(mt(t)) + ' on the dashboard">' + (e ? Ap : q0) + "</button>" + (a ? '<button class="tfTrayBtn" type="button" data-fav-remove="' + F(t) + '" aria-label="Remove ' + F(mt(t)) + ' from favourites">' + zl + "</button>" : "<span></span>") + "</li>";
  function Us(t, e, a, o) {
    const i = t.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return Object.keys(M).filter((c) => e(c) && !a.has(c) && M[c].state !== "unavailable").filter((c) => {
      const u = (mt(c) + " " + (we.get(c) || "") + " " + c).toLowerCase();
      return i.every((f) => u.includes(f));
    }).sort((c, u) => (we.get(c) || "~").localeCompare(we.get(u) || "~") || mt(c).localeCompare(mt(u))).slice(0, 40).map((c) => '<li><button class="tfTrayPickItem" type="button" ' + o + '="' + F(c) + '"><span class="tfIcon"' + ve(c, Sa(c)) + "></span>" + Gs(c, we.get(c) || "—") + "</button></li>").join("") || '<li class="tfTrayNote">Nothing matches.</li>';
  }
  const pf = "https://www.home-assistant.io/dashboards/", Hc = {
    welcome: ["Welcome message", "<p>Shows a <strong>greeting</strong> above your home's name: good morning, afternoon or evening, then your name.</p>"],
    weather: ["Weather", "<p>The forecast card: now, the next hours in a sentence and the week ahead. Its <strong>Now</strong> opens the Weather page.</p>"],
    energy: ["Energy today", "<p>What your home has used and made today, hour by hour, with <strong>Electricity</strong>, <strong>Solar</strong>, <strong>Gas</strong> and <strong>Water</strong> under it. From your Energy dashboard.</p>"],
    favs: ["Favourite entities", "<p>The devices you use most, at the top of Home.</p><ul><li><strong>Drag</strong> one to change the order</li><li>Press <strong>×</strong> to take it off</li></ul>"],
    suggest: ["Suggested entities", "<p>Fills Favourites with devices you often use, after your own. They change as you use your home.</p>"],
    sums: ["Summaries", "<p>Each summary sums up one kind of thing across your home, like <strong>Lights</strong>: how many are on.</p><ul><li>Switch one off to hide it</li><li><strong>Drag</strong> one to change the order</li></ul>"]
  }, me = Object.assign(document.createElement("aside"), { className: "tfEditTray hcHomeTray" });
  me.setAttribute("aria-label", "Edit Home page"), me.toggleAttribute("inert", !0);
  let Do = !1, La = !1, Ys = "", Zs = null, $n = "page";
  function Ks(t, e) {
    const a = me.querySelector(".hcTrayTabs"), o = a == null ? void 0 : a.querySelector(".rubberIndicator"), i = a == null ? void 0 : a.querySelector(".tab.active");
    if (!(i != null && i.offsetWidth)) {
      requestAnimationFrame(() => {
        var l;
        return ((l = me.querySelector(".hcTrayTabs .tab.active")) == null ? void 0 : l.offsetWidth) && Ks(t, e);
      });
      return;
    }
    o.style.transition = "none", t && e ? rs(o, e.left, e.width, i.offsetLeft, i.offsetWidth) : (o.style.left = i.offsetLeft + "px", o.style.width = i.offsetWidth + "px");
  }
  const xn = (t) => '<button class="hcInfoBtn" type="button" data-info="' + t + '" aria-expanded="false" aria-label="About ' + F(Hc[t][0]) + '">' + Gl + "</button>", ma = (t, e, a) => '<button class="switch' + (t ? " on" : "") + '" type="button" role="switch" aria-checked="' + t + '" aria-label="' + F(e) + '" ' + a + "></button>", Xs = (t) => '<button class="tfTrayBtn hcHeGrip" type="button" data-he-grip aria-label="Move ' + F(t) + '. Use the up and down arrows">' + Kr + "</button>", Nc = () => {
    var t;
    return ((t = wt.home) == null ? void 0 : t.sumsWidth) === "fit";
  }, Pi = () => {
    var t;
    return ((t = wt.home) == null ? void 0 : t.favsAs) === "strip";
  }, Hr = (t, e, a, o) => '<div class="hcHeLine hcHeChoiceLine"><span class="activityRowName">' + t + '</span><div class="themeChoice hcHeChoice" role="group" aria-label="' + F(t) + '">' + o.map(([i, l]) => '<button class="wxLayoutBtn" type="button" ' + e + '="' + i + '" aria-pressed="' + (a === i) + '">' + l + "</button>").join("") + "</div></div>", Oc = () => Qo(!0).filter((t) => Yr[t.key]).map((t) => t.key);
  function Mn() {
    var f, y, S, x, R, E, B;
    if (!Do) return;
    const t = lt(), e = (k) => '<li class="hcHeRow" data-he-id="' + F(k) + '">' + Xs(mt(k)) + '<span class="tfIcon"' + ve(k, Sa(k)) + "></span>" + Gs(k, we.get(k) || He(k)) + '<button class="tfTrayBtn" type="button" data-he-remove="' + F(k) + '" aria-label="Take ' + F(mt(k)) + ' off Favourites">' + zl + "</button></li>", a = (k) => {
      const P = Yr[k];
      return '<li class="hcHeRow hcHeSum" data-he-id="' + F(k) + '"' + (P.colour && Pn(P.colour) ? ' style="' + Pn(P.colour).slice(1) + '"' : "") + ">" + Xs(P.name) + '<span class="tfIcon"' + ve("", P.icon, P.name) + '></span><span class="activityRowName">' + F(P.name) + "</span>" + ma(Fa(k), P.name, 'data-he-sum="' + F(k) + '"') + "</li>";
    }, o = ((f = me.querySelector("[data-he-search]")) == null ? void 0 : f.value) || "", i = [["page", "Page"], ["favs", "Favourites"], ["sums", "Summaries"], ["areas", "Areas"]], l = new Set(((y = wt.home) == null ? void 0 : y.areasOff) || []), c = (k) => '<li class="hcHeRow" data-he-id="' + F(k.id) + '">' + Xs(k.name) + '<span class="tfIcon"><span class="tfAreaGlyph"' + ve("area:" + k.id, k.icon || "mdi:texture-box", k.name) + '></span></span><span class="activityRowName">' + F(k.name) + "</span>" + ma(!l.has(k.id), "Show " + k.name + " on Home", 'data-he-area="' + F(k.id) + '"') + "</li>", u = {
      page: '<div class="hcHeLine"><span class="activityRowName">Welcome message</span>' + xn("welcome") + ma(_s(), "Welcome message", "data-he-welcome") + "</div>" + // the weather card and Energy today, where the house has them
      (he() ? '<div class="hcHeLine"><span class="activityRowName">Weather</span>' + xn("weather") + ma(!!((S = wt.home) != null && S.weather), "Weather", 'data-he-card="weather"') + "</div>" : "") + (qa != null && qa.length ? '<div class="hcHeLine"><span class="activityRowName">Energy today</span>' + xn("energy") + ma(!!((x = wt.home) != null && x.energy), "Energy today", 'data-he-card="energy"') + "</div>" : "") + Hr("Cards", "data-he-cards-as", kc(), [["stacked", "Stacked"], ["rows", "Rows"]]) + '<hr class="hcHeRule"><div class="hcHeLine"><span class="activityRowName">Group by floor</span>' + ma(Co("byFloor"), "Group by floor", 'data-he-flag="byFloor"') + "</div>" + Hr("Layout", "data-he-area-layout", Bs(), [["rows", "Rows"], ["columns", "Columns"], ["bento", "Bento"]]) + (Bs() === "bento" ? '<div class="hcHeLine"><span class="activityRowName">Floors as boxes</span>' + ma(Co("bentoBoxes"), "Floors as boxes", 'data-he-flag="bentoBoxes"') + '</div><div class="hcHeLine"><span class="activityRowName">Mixed sizes</span>' + ma(Co("bentoMixed"), "Mixed sizes", 'data-he-flag="bentoMixed"') + "</div>" : "") + Hr("Area cards", "data-he-area-size", Mc(), [["s", "Small"], ["m", "Medium"], ["l", "Large"]]) + // Fit together (Matt, 17 Nov): the areas as a neat block, not spread over every column that fits
      '<div class="hcHeLine"><span class="activityRowName">Fit together</span>' + ma(!!((R = wt.home) != null && R.fitTogether), "Fit together", "data-he-fit") + "</div>",
      favs: '<div class="hcHeLine"><span class="activityRowName">Show favourites</span>' + ma(((E = wt.home) == null ? void 0 : E.favs) !== !1, "Show favourites", 'data-he-card="favs"') + '</div><hr class="hcHeRule"><div class="hcHeLabel"><span class="activityRowName">Favourite entities</span>' + xn("favs") + "</div>" + Hr("Show as", "data-he-favs-as", Pi() ? "strip" : "card", [["card", "Card"], ["strip", "Strip"]]) + (Pi() ? "" : '<div class="hcHeLine"><span class="activityRowName">Title</span>' + ma(Co("favsTitle"), "Title", 'data-he-flag="favsTitle"') + "</div>") + '<ul class="tfTrayList hcHeList" data-he-list="favs">' + (t.map(e).join("") || '<li class="tfTrayNote">No favourites yet.</li>') + '</ul><button class="pill tfTrayAdd hcAddBtn" type="button" data-he-add aria-expanded="' + La + '">' + ts + '<span>Add favourite</span></button><div class="tfTrayPick" data-he-pick' + (La ? "" : " hidden") + '><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-he-search value="' + F(o) + '"><ul class="tfTrayList">' + (La ? Us(o, (k) => Rc.test(k), new Set(t), "data-he-pick-id") : "") + '</ul></div><hr class="hcHeRule"><div class="hcHeLine"><span class="activityRowName">Suggested entities</span>' + xn("suggest") + ma(At(), "Suggested entities", "data-he-suggest") + "</div>",
      sums: '<div class="hcHeLine"><span class="activityRowName">Show summaries</span>' + xn("sums") + ma(((B = wt.home) == null ? void 0 : B.sums) !== !1, "Show summaries", 'data-he-card="sums"') + "</div>" + Hr("Width", "data-he-sums-width", Nc() ? "fit" : "match", [["match", "Match the cards"], ["fit", "Fit the summaries"]]) + '<hr class="hcHeRule"><ul class="tfTrayList hcHeList" data-he-list="sums">' + Oc().map(a).join("") + "</ul>",
      areas: '<p class="tfTrayNote">Which areas show on Home. Drag to change their order, here and on the custom dashboard.</p><ul class="tfTrayList hcHeList" data-he-list="areas">' + As().map(c).join("") + "</ul>"
    };
    me.querySelector("[data-he-body]").innerHTML = // the note about the areas page first (Matt, 12 Nov: "to the top of the rollover"), as Home Assistant's dialog has it
    '<p class="tfTrayNote hcHeAreasNote">You can rearrange your floors and areas in the order that best represents your house on the <button type="button" class="hcHeLink" data-path="/config/areas/dashboard">areas page</button>.</p><div class="tabs rubberTabs hcTrayTabs" role="tablist" aria-label="Edit Home page"><div class="rubberIndicator" aria-hidden="true"></div>' + i.map(([k, P]) => '<button class="tab segBtn' + (k === $n ? " active" : "") + '" type="button" role="tab" aria-selected="' + (k === $n) + '" data-he-tab="' + k + '">' + P + "</button>").join("") + "</div>" + sf(i, "data-he-go") + '<div class="hcHeTabBody" role="tabpanel">' + u[$n] + "</div>", Ks(!1), bo(me);
  }
  const Jn = (t) => {
    wt = { ...wt, ...t }, ya(), Pe(), Mn();
  }, ga = (t) => Jn({ home: { ...wt.home || {}, ...t } });
  function $s(t) {
    kn(), Do = t, La = !1, me.classList.toggle("open", t), me.toggleAttribute("inert", !t), g.classList.toggle("hcHomeEditing", t), w && H && We();
    const e = p("dashEditNav"), a = me.querySelector(".tfTrayHead");
    e && t && (Zs = e.parentElement, a.appendChild(e)), e && !t && Zs && Zs.appendChild(e), e && (e.classList.toggle("active", t), e.setAttribute("aria-pressed", String(t)), e.setAttribute("aria-label", t ? "Done editing Home" : "Edit Home page"), e.title = t ? "Done" : "Edit", e.innerHTML = t ? Tp : es), t ? (Ys = JSON.stringify(wt), Mn(), Xn(me, "Edit Home page", null)) : Ys && JSON.stringify(wt) !== Ys && Ta("Changes saved");
  }
  me.innerHTML = '<div class="tfTrayInner"><div class="tfTrayHead">' + lf + '<div class="activityTitle">Edit Home page</div></div><div class="hcHeBody" data-he-body></div></div>', g.appendChild(me);
  let Eo = null;
  const ja = Object.assign(document.createElement("div"), { className: "card hcInfoPop", hidden: !0 });
  ja.setAttribute("role", "dialog"), g.appendChild(ja);
  function kn() {
    Eo && (Eo.setAttribute("aria-expanded", "false"), Eo = null, ja.hidden = !0);
  }
  function Ic(t) {
    const e = Eo;
    if (kn(), e === t) return;
    const [a, o] = Hc[t.dataset.info];
    ja.setAttribute("aria-label", a), ja.innerHTML = '<div class="hcInfoTitle">' + F(a) + '</div><div class="hcInfoText">' + o + '</div><a class="hcInfoMore" href="' + pf + '" target="_blank" rel="noopener">Learn more</a>', ja.hidden = !1, Eo = t, t.setAttribute("aria-expanded", "true");
    const i = t.getBoundingClientRect(), l = ja.offsetWidth, c = ja.offsetHeight;
    ja.style.left = Math.max(8, Math.min(innerWidth - l - 8, i.left + i.width / 2 - l / 2)) + "px", ja.style.top = (i.bottom + 8 + c > innerHeight - 8 ? Math.max(8, i.top - 8 - c) : i.bottom + 8) + "px";
  }
  n.addEventListener("pointerdown", (t) => {
    Eo && !t.composedPath().some((e) => e === ja || e === Eo) && kn();
  }, !0), n.addEventListener("keydown", (t) => {
    var e;
    if (t.key === "Escape") {
      if (Eo) {
        t.stopPropagation();
        const a = Eo;
        kn(), a.focus();
        return;
      }
      if (La) {
        t.stopPropagation(), La = !1, Mn();
        return;
      }
      Do && (t.stopPropagation(), $s(!1), (e = p("dashEditNav")) == null || e.focus());
    }
  }, !0);
  const uf = (t) => t.dataset.heList === "favs" ? lt() : t.dataset.heList === "areas" ? As().map((e) => e.id) : Oc(), Fc = (t, e) => t.dataset.heList === "favs" ? Jn({ favourites: e }) : t.dataset.heList === "areas" ? (Jn({ areaOrder: e }), We()) : ga({ sumOrder: e });
  me.addEventListener("keydown", (t) => {
    var u;
    const e = t.target.closest("[data-he-grip]");
    if (!e || !["ArrowUp", "ArrowDown"].includes(t.key)) return;
    t.preventDefault();
    const a = e.closest("[data-he-id]"), o = a.parentElement, i = uf(o), l = i.indexOf(a.dataset.heId), c = l + (t.key === "ArrowUp" ? -1 : 1);
    c < 0 || c >= i.length || (i.splice(c, 0, i.splice(l, 1)[0]), Fc(o, i), (u = me.querySelector('[data-he-list="' + o.dataset.heList + '"] [data-he-id="' + CSS.escape(a.dataset.heId) + '"] [data-he-grip]')) == null || u.focus());
  }), me.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-he-grip]");
    if (!e || t.button !== 0) return;
    const a = e.closest("[data-he-list]"), o = a.dataset.heList;
    el(t, e.closest("[data-he-id]"), "heId", (i) => Fc(a, i), (i) => me.querySelector('[data-he-list="' + o + '"] [data-he-id="' + CSS.escape(i) + '"]'));
  }), me.addEventListener("input", (t) => {
    if (t.target.matches("[data-he-search]")) {
      const e = t.target.selectionStart;
      Mn();
      const a = me.querySelector("[data-he-search]");
      a.focus(), a.setSelectionRange(e, e);
    }
  }), me.addEventListener("click", (t) => {
    var P, _, z, C;
    const e = t.target, a = e.closest("[data-info]");
    if (a) {
      Ic(a);
      return;
    }
    const o = e.closest("[data-he-go]");
    if (o) {
      $n = o.dataset.heGo, La = !1, kn(), Mn(), Xn(me, "Edit Home page", $n, o.textContent);
      return;
    }
    if (e.closest("[data-tray-back]")) {
      kn(), Xn(me, "Edit Home page", null);
      return;
    }
    const i = e.closest("[data-he-tab]");
    if (i) {
      const rt = me.querySelector(".hcTrayTabs .rubberIndicator"), Tt = { left: rt.offsetLeft, width: rt.offsetWidth };
      $n = i.dataset.heTab, La = !1, kn(), Mn(), Ks(!0, Tt), me.querySelector(".tfTrayInner").scrollTop = 0;
      return;
    }
    if (e.closest("[data-he-welcome]")) {
      ga({ welcome: !_s() });
      return;
    }
    const l = e.closest("[data-he-card]");
    if (l) {
      const rt = l.dataset.heCard, Tt = ["sums", "favs"].includes(rt) ? ((P = wt.home) == null ? void 0 : P[rt]) !== !1 : !!((_ = wt.home) != null && _[rt]);
      ga({ [rt]: !Tt });
      return;
    }
    const c = e.closest("[data-he-favs-as]");
    if (c) {
      ga({ favsAs: c.dataset.heFavsAs });
      return;
    }
    const u = e.closest("[data-he-sums-width]");
    if (u) {
      ga({ sumsWidth: u.dataset.heSumsWidth });
      return;
    }
    const f = e.closest("[data-he-area-size]");
    if (f) {
      ga({ areaSize: f.dataset.heAreaSize });
      return;
    }
    const y = e.closest("[data-he-area-layout]");
    if (y) {
      ga({ areaLayout: y.dataset.heAreaLayout });
      return;
    }
    if (e.closest("[data-he-fit]")) {
      ga({ fitTogether: !((z = wt.home) != null && z.fitTogether) });
      return;
    }
    const S = e.closest("[data-he-cards-as]");
    if (S) {
      ga({ cardsAs: S.dataset.heCardsAs });
      return;
    }
    const x = e.closest("[data-he-flag]");
    if (x) {
      const rt = x.dataset.heFlag;
      ga({ [rt]: !Co(rt) }), rt === "favsTitle" && za();
      return;
    }
    if (e.closest("[data-he-suggest]")) {
      Jn({ suggest: !At() });
      return;
    }
    const R = e.closest("[data-he-area]");
    if (R) {
      const rt = new Set(((C = wt.home) == null ? void 0 : C.areasOff) || []), Tt = R.dataset.heArea;
      rt.has(Tt) ? rt.delete(Tt) : rt.add(Tt), ga({ areasOff: [...rt] });
      return;
    }
    const E = e.closest("[data-he-sum]");
    if (E) {
      const rt = E.dataset.heSum, Tt = !Fa(rt), Bt = wt.home || {};
      ga(kp.includes(rt) ? { shownSums: Tt ? [...Bt.shownSums || [], rt] : (Bt.shownSums || []).filter((Gt) => Gt !== rt) } : { hiddenSums: Tt ? (Bt.hiddenSums || []).filter((Gt) => Gt !== rt) : [...Bt.hiddenSums || [], rt] });
      return;
    }
    const B = e.closest("[data-he-remove]");
    if (B) {
      Jn({ favourites: lt().filter((rt) => rt !== B.dataset.heRemove) });
      return;
    }
    if (e.closest("[data-he-add]")) {
      La = !La, Mn(), La && me.querySelector("[data-he-search]").focus({ preventScroll: !0 });
      return;
    }
    const k = e.closest("[data-he-pick-id]");
    k && (La = !1, me.querySelector("[data-he-search]").value = "", Jn({ favourites: [...lt(), k.dataset.hePickId] }));
  });
  function Ae() {
    var S, x, R;
    const t = sa && g.classList.contains("tfBoard");
    if (Yt.classList.toggle("open", t), Yt.classList.toggle("tucked", t && no), Yt.toggleAttribute("inert", !t), t || (Lo = !1), Gc(), !t) return;
    const e = Yt.querySelector("[data-tray-tuck]");
    e.innerHTML = no ? Vl : Ul, e.setAttribute("aria-expanded", String(!no)), e.setAttribute("aria-label", no ? "Show the edit tray" : "Tuck the edit tray away");
    const a = ie().hidden.filter((E) => !So.includes(E) && vn().some((B) => B.key === E)), o = (E, B) => '<button class="tfTrayCard" type="button" data-tray-card="' + F(E) + '" aria-label="' + F(Aa(E)) + ": drag it onto the board, or press to " + B + '"><span class="tfTrayGrip" aria-hidden="true">' + Kr + "</span>" + F(Aa(E)) + "</button>", i = a.filter((E) => !oi.includes(E)), l = oi.filter((E) => a.includes(E));
    Va("welcome", '<div class="hcHeLine"><span class="activityRowName">Welcome message</span>' + xn("welcome") + '<button class="switch' + (ie().welcome ? " on" : "") + '" type="button" role="switch" aria-checked="' + !!ie().welcome + '" aria-label="Welcome message" data-dash-welcome></button></div><div class="hcHeLine"><span class="activityRowName">Show summaries</span><button class="switch' + ((S = wt.dash) != null && S.sumsOff ? "" : " on") + '" type="button" role="switch" aria-checked="' + !((x = wt.dash) != null && x.sumsOff) + '" aria-label="Show summaries" data-dash-sums></button></div>'), requestAnimationFrame(() => js(!1)), Va("cards", '<div class="sectionLabel">Hidden and new cards</div>' + (i.length ? '<div class="tfTrayCards">' + i.map((E) => o(E, "put it back")).join("") + "</div>" : '<p class="tfTrayNote">Cards you hide, and new ones, wait here.</p>')), Va("weather", '<div class="sectionLabel">Weather</div>' + (l.length ? `<p class="tfTrayNote">The Weather page's widgets. Drag one onto the board, or press to add it.</p><div class="tfTrayCards">` + l.map((E) => o(E, "add it")).join("") + "</div>" : '<p class="tfTrayNote">Every weather widget is on the board.</p>')), Va("phone", '<div class="sectionLabel">Phone</div><p class="tfTrayNote">' + (ie().phone ? "Phones have an order of their own." : "Phones follow the board's order.") + '</p><button class="pill tfTrayAdd" type="button" data-phone-toggle aria-pressed="' + Lo + '">' + (Lo ? "Hide the phone" : "Show the phone") + "</button>");
    const c = new Set(wt.favHidden || []), u = lt(), f = [...u, ...[...c].filter((E) => !u.includes(E) && M[E])];
    Va("favs", f.map((E) => df(E, c.has(E), u.includes(E))).join("") || '<li class="tfTrayNote">No favourites yet.</li>'), Yt.querySelector('[data-pick="tiles"]').hidden = !To, Yt.querySelector("[data-tile-add]").setAttribute("aria-expanded", String(To)), To && Va("tilepick", Us(Yt.querySelector("[data-tile-search]").value, (E) => lr.includes(E.split(".")[0]), new Set(Ti()), "data-tile-pick")), Yt.querySelector('[data-tray="roompick"]').hidden = !Pr, Yt.querySelector("[data-room-add]").setAttribute("aria-expanded", String(Pr));
    const y = new Set(((R = wt.dash) == null ? void 0 : R.areasOff) || []);
    if (Va("areas", b(m).map((E) => '<li class="hcHeRow" data-area-id="' + F(E.id) + '"><button class="tfTrayBtn hcHeGrip" type="button" data-area-grip aria-label="Move ' + F(E.name) + '. Use the up and down arrows">' + Kr + '</button><span class="tfIcon"><span class="tfAreaGlyph"' + ve("area:" + E.id, E.icon || "mdi:texture-box", E.name) + '></span></span><span class="activityRowName">' + F(E.name) + '</span><button class="switch' + (y.has(E.id) ? "" : " on") + '" type="button" role="switch" aria-checked="' + !y.has(E.id) + '" aria-label="Show ' + F(E.name) + ' in the Areas card" data-area-on="' + F(E.id) + '"></button></li>').join("")), Pr) {
      const E = new Set(Ti());
      Va("roompick", b(m).filter((B) => !E.has("room:" + B.id)).map((B) => '<li><button class="tfTrayPickItem" type="button" data-room-pick="' + F(B.id) + '"><span class="tfIcon"><span class="tfAreaGlyph"' + ve("area:" + B.id, B.icon || "mdi:texture-box", B.name) + '></span></span><span class="tfTrayName"><span class="activityRowName">' + F(B.name) + "</span></span></button></li>").join("") || '<li class="tfTrayNote">Every area is on the board.</li>');
    }
    Yt.querySelector('[data-pick="favs"]').hidden = !Ao, Yt.querySelector("[data-fav-add]").setAttribute("aria-expanded", String(Ao)), Ao && Va("pick", Us(Yt.querySelector("[data-fav-search]").value, (E) => Rc.test(E), new Set(lt()), "data-fav-pick")), Va("favtitle", '<div><strong>Title</strong><div class="status">Favourites, at the top of the card.</div></div><button class="switch' + (Ci() ? " on" : "") + '" type="button" role="switch" aria-checked="' + Ci() + '" data-fav-title aria-label="Title"></button>'), Va("suggest", '<div><strong>Show suggestions</strong><div class="status">Fills the card after your favourites.</div></div><button class="switch' + (At() ? " on" : "") + '" type="button" role="switch" aria-checked="' + At() + '" data-fav-suggest aria-label="Show suggestions"></button>');
  }
  const Sn = (t) => {
    wt = { ...wt, ...t }, ya(), Pe(), Ae();
  };
  function qc(t, e) {
    const a = wt, o = new Set(wt.favHidden || []);
    e ? o.delete(t) : o.add(t), Sn({ favHidden: [...o] }), e ? Ta(mt(t) + " put back") : Ta(mt(t) + " hidden", Ri(a));
  }
  const ff = (t) => {
    const e = wt;
    Sn({ favourites: lt().filter((a) => a !== t), favHidden: (wt.favHidden || []).filter((a) => a !== t) }), Ta(mt(t) + " removed from favourites", Ri(e));
  }, hf = (t) => {
    Sn({ favourites: [...lt().filter((e) => e !== t), t], favHidden: (wt.favHidden || []).filter((e) => e !== t) }), Ta(mt(t) + " added to favourites");
  };
  Yt.addEventListener("click", (t) => {
    var a, o, i;
    const e = t.target.closest("button");
    if (e) {
      if (e.hasAttribute("data-tray-tab")) {
        Kn = e.dataset.trayTab, js(!0), Yt.querySelector(".tfTrayInner").scrollTop = 0;
        return;
      }
      if (e.hasAttribute("data-tray-go")) {
        Kn = e.dataset.trayGo, js(!1), Xn(Yt, "Edit custom dashboard", Kn, Pc.find(([l]) => l === Kn)[1]);
        return;
      }
      if (e.hasAttribute("data-tray-back")) {
        Xn(Yt, "Edit custom dashboard", null);
        return;
      }
      if (e.hasAttribute("data-tray-done")) Os(!1);
      else if (e.hasAttribute("data-info")) Ic(e);
      else if (e.hasAttribute("data-dash-sums"))
        wn({ ...Ts(), hidden: Ts().hidden.filter((l) => l !== "sums"), sumsOff: !((a = wt.dash) != null && a.sumsOff) }), Pe(), Ae();
      else if (e.hasAttribute("data-dash-welcome")) {
        const l = ie();
        wn({ ...l, welcome: !l.welcome }), Pe(), Ae();
      } else if (e.hasAttribute("data-tray-tuck"))
        no = !no, Ae();
      else if (e.hasAttribute("data-phone-toggle"))
        Lo = !Lo, Ae(), Lo && ((o = ca.querySelector("[data-phone-key]")) == null || o.focus({ preventScroll: !0 }));
      else if (e.dataset.trayCard)
        t.detail === 0 && (Is(e.dataset.trayCard), Ae());
      else if (e.dataset.favEye) qc(e.dataset.favEye, e.getAttribute("aria-pressed") !== "true");
      else if (e.dataset.favRemove) ff(e.dataset.favRemove);
      else if (e.hasAttribute("data-fav-add"))
        Ao = !Ao, Ae(), Ao && Yt.querySelector("[data-fav-search]").focus({ preventScroll: !0 });
      else if (e.dataset.favPick) hf(e.dataset.favPick);
      else if (e.hasAttribute("data-tile-add"))
        To = !To, Ae(), To && Yt.querySelector("[data-tile-search]").focus({ preventScroll: !0 });
      else if (e.dataset.tilePick) Lc(e.dataset.tilePick);
      else if (e.hasAttribute("data-room-add"))
        Pr = !Pr, Ae();
      else if (e.dataset.roomPick) Lc("room:" + e.dataset.roomPick);
      else if (e.dataset.areaOn) {
        const l = new Set(((i = wt.dash) == null ? void 0 : i.areasOff) || []);
        l.has(e.dataset.areaOn) ? l.delete(e.dataset.areaOn) : l.add(e.dataset.areaOn), wn({ ...ie(), areasOff: [...l] }), Pe(), Ae();
      } else e.hasAttribute("data-fav-suggest") ? Sn({ suggest: !At() }) : e.hasAttribute("data-fav-title") && (Sn({ favsTitle: !Ci() }), za());
    }
  }), Yt.addEventListener("input", (t) => {
    t.target.matches("[data-fav-search],[data-tile-search]") && Ae();
  });
  const Wc = (t) => {
    wt = { ...wt, areaOrder: t }, ya(), Pe(), Ae();
  };
  Yt.addEventListener("keydown", (t) => {
    var c, u, f;
    const e = (u = (c = t.target).closest) == null ? void 0 : u.call(c, "[data-area-grip]");
    if (!e || !["ArrowUp", "ArrowDown"].includes(t.key)) return;
    t.preventDefault();
    const a = e.closest("[data-area-id]").dataset.areaId, o = b(m).map((y) => y.id), i = o.indexOf(a), l = i + (t.key === "ArrowUp" ? -1 : 1);
    l < 0 || l >= o.length || (o.splice(l, 0, o.splice(i, 1)[0]), Wc(o), (f = Yt.querySelector('[data-area-id="' + CSS.escape(a) + '"] [data-area-grip]')) == null || f.focus());
  }), Yt.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-area-grip]");
    !e || t.button !== 0 || el(t, e.closest("[data-area-id]"), "areaId", Wc, (a) => Yt.querySelector('[data-area-id="' + CSS.escape(a) + '"]'));
  });
  const Bo = window.visualViewport, Js = () => {
    if (!Bo) return;
    const t = Math.max(0, Math.round(window.innerHeight - Bo.height - Bo.offsetTop));
    Yt.style.bottom = t > 40 ? t + "px" : "";
  };
  Bo == null || Bo.addEventListener("resize", Js), Bo == null || Bo.addEventListener("scroll", Js), Yt.addEventListener("focusin", (t) => {
    var e, a;
    (a = (e = t.target).matches) != null && a.call(e, "input") && setTimeout(() => {
      Js(), t.target.scrollIntoView({ block: "center", behavior: "smooth" });
    }, 350);
  }), Yt.addEventListener("keydown", (t) => {
    var a, o;
    const e = !!((o = (a = t.target).closest) != null && o.call(a, '[data-pick="tiles"],[data-tile-add]'));
    t.key !== "Escape" || !(e ? To : Ao) || (t.stopPropagation(), e ? To = !1 : Ao = !1, Ae(), Yt.querySelector(e ? "[data-tile-add]" : "[data-fav-add]").focus({ preventScroll: !0 }));
  });
  function Vc(t, e, a, o) {
    t.preventDefault();
    const i = t.clientX, l = t.clientY;
    let c = null, u = 0;
    const f = Object.assign(document.createElement("div"), { className: "tfFavDrop" }), y = (x) => {
      if (!c) {
        if (Math.hypot(x.clientX - i, x.clientY - l) < 4) return;
        c = e.cloneNode(!0), c.classList.add("tfTrayGhost"), c.style.width = e.offsetWidth + "px", g.appendChild(c);
      }
      c.style.transform = "translate(" + (x.clientX - 24) + "px," + (x.clientY - 24) + "px)";
      const R = !no && x.clientX >= Yt.getBoundingClientRect().left;
      if (a === "card") {
        const k = H.getBoundingClientRect(), { w: P } = en(H.clientWidth);
        te = !R && x.clientX >= k.left && x.clientX <= k.right && x.clientY >= k.top + tn ? { key: o, col: Math.max(0, Math.floor((x.clientX - k.left) / (P + pe))), row: Math.max(0, Math.floor((x.clientY - k.top - tn) / Wa)), fromTray: !0 } : null, u || (u = requestAnimationFrame(() => {
          u = 0, We();
        }));
        return;
      }
      const E = H.querySelector(".tfDash-favs"), B = E == null ? void 0 : E.getBoundingClientRect();
      if (aa = null, B && !R && x.clientX >= B.left && x.clientX <= B.right && x.clientY >= B.top && x.clientY <= B.bottom) {
        let k = 1 / 0;
        E.querySelectorAll('[data-k^="fav:"]').forEach((P, _) => {
          const z = P.getBoundingClientRect(), C = Math.hypot(x.clientX - (z.left + z.width / 2), x.clientY - (z.top + z.height / 2));
          C < k && (k = C, aa = { i: _, r: z, after: x.clientX > z.left + z.width / 2 });
        }), aa || (aa = { i: 0, r: null, after: !1 });
      }
      aa != null && aa.r ? (f.isConnected || g.appendChild(f), Object.assign(f.style, { left: (aa.after ? aa.r.right : aa.r.left) - 2 + "px", top: aa.r.top + 8 + "px", height: aa.r.height - 16 + "px" })) : f.remove();
    }, S = () => {
      if (window.removeEventListener("pointermove", y), window.removeEventListener("pointerup", S), window.removeEventListener("pointercancel", S), cancelAnimationFrame(u), c == null || c.remove(), f.remove(), a === "card") {
        if (!c) Is(o);
        else if (te != null && te.fromTray) {
          We();
          const k = Aa(o) + Ac(o), P = ie(), _ = yn();
          te = null, Yn({ ...P, hidden: P.hidden.filter((z) => z !== o) }, _), Ta(k);
        }
        te = null, We(), Pe(), Ae();
        return;
      }
      if (!aa) return;
      const x = new Set(wt.favHidden || []);
      x.delete(o);
      const R = lt().filter((k) => k !== o), E = R.filter((k) => !x.has(k)), B = E[Math.min(aa.i + (aa.after ? 1 : 0), E.length)];
      R.splice(B ? R.indexOf(B) : R.length, 0, o), aa = null, Sn({ favourites: R, favHidden: [...x] }), Ta(mt(o) + " put back");
    };
    window.addEventListener("pointermove", y), window.addEventListener("pointerup", S), window.addEventListener("pointercancel", S);
  }
  const jc = {
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
  }, zc = 136, mf = 288, gf = 0.8, bf = { wx: "mdi:weather-partly-cloudy", areas: "mdi:home", favs: "mdi:star", act: "mdi:history", energy: "mdi:lightning-bolt", avg: "mdi:chart-line", aq: "mdi:air-filter", pollen: "mdi:flower-pollen", radar: "mdi:radar" }, ca = Object.assign(document.createElement("aside"), { className: "tfMiniPhone" });
  ca.setAttribute("aria-label", "Phone order"), ca.innerHTML = '<div class="tfPhoneHead"><div class="activityTitle">Phone</div><button class="tfTrayBtn" type="button" data-phone-close aria-label="Close the phone">' + zl + '</button></div><p class="tfTrayNote" data-phone="note"></p><div class="tfPhoneScreen"><div class="tfPhoneList" data-phone="list"></div></div>', g.appendChild(ca);
  let Qs = "";
  function Gc() {
    var u;
    const t = Lo && sa && g.classList.contains("tfBoard") && !no;
    if (ca.classList.toggle("open", t), ca.toggleAttribute("inert", !t), !t) return;
    const e = Ls().filter((f) => !ie().hidden.includes(f.key)), a = e.length, o = (f) => Math.round(f * gf * 10) / 10 + "px", i = (f, y) => {
      const S = f.el.classList.contains("tfDac"), x = f.tile ? S ? mf : zc : jc[f.key] || zc;
      return '<button class="tfPhoneBlock' + (f.tile ? " tile" : "") + '" type="button" data-phone-key="' + F(f.key) + '" style="min-height:' + o(x) + '" aria-label="' + F(Aa(f.key) + ", " + (y + 1) + " of " + a + ". Drag, or use the arrow keys, to move it") + '"><span class="tfIcon"' + (f.tile ? ve(f.key, Sa(f.key)) : ve(f.key, bf[f.key])) + '></span><span class="tfPhoneName">' + F(Aa(f.key)) + "</span></button>";
    }, l = '<div class="tfPhoneTitle">' + F(((u = H.querySelector(".tfDashTitle")) == null ? void 0 : u.textContent) || "") + '</div><div class="tfPhoneBlock fixed" style="min-height:' + o(jc.sums) + '"><span class="tfPhoneName">' + F(Aa("sums")) + "</span></div>" + e.map(i).join("");
    if (ca.querySelector('[data-phone="note"]').innerHTML = ie().phone ? 'Phones use this order. <button class="tfLinkBtn" type="button" data-phone-reset>Follow the board</button>' : "Phones follow the board. Drag a card to give them an order of their own.", l === Qs) return;
    Qs = l;
    const c = ca.querySelector('[data-phone="list"]');
    c.innerHTML = l, bo(c);
  }
  function Uc(t, e) {
    var a;
    wn({ ...ie(), phone: t }), Ae(), e && ((a = ca.querySelector('[data-phone-key="' + CSS.escape(e) + '"]')) == null || a.focus({ preventScroll: !0 }));
  }
  const tl = () => [...ca.querySelectorAll("[data-phone-key]")].map((t) => t.dataset.phoneKey);
  function wf(t, e) {
    t.preventDefault();
    const a = e.parentElement, o = ca.querySelector(".tfPhoneScreen"), i = tl().join();
    e.classList.add("moving");
    const l = (u) => {
      const f = o.getBoundingClientRect();
      u.clientY > f.bottom - 40 ? o.scrollTop += 12 : u.clientY < f.top + 40 && (o.scrollTop -= 12);
      const y = [...a.querySelectorAll("[data-phone-key]")].find((R) => {
        const E = R.getBoundingClientRect();
        return R !== e && u.clientX >= E.left && u.clientX <= E.right && u.clientY >= E.top && u.clientY <= E.bottom;
      });
      if (!y) return;
      const S = y.getBoundingClientRect(), x = y.classList.contains("tile") ? u.clientX < S.left + S.width / 2 : u.clientY < S.top + S.height / 2;
      a.insertBefore(e, x ? y : y.nextSibling);
    }, c = () => {
      window.removeEventListener("pointermove", l), window.removeEventListener("pointerup", c), window.removeEventListener("pointercancel", c), e.classList.remove("moving");
      const u = tl();
      Qs = "", u.join() !== i ? Uc(u) : Gc();
    };
    window.addEventListener("pointermove", l), window.addEventListener("pointerup", c), window.addEventListener("pointercancel", c);
  }
  ca.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-phone-key]");
    e && t.button <= 0 && wf(t, e);
  }), ca.addEventListener("click", (t) => {
    var a;
    const e = t.target.closest("button");
    if (e != null && e.hasAttribute("data-phone-close"))
      Lo = !1, Ae(), (a = Yt.querySelector("[data-phone-toggle]")) == null || a.focus({ preventScroll: !0 });
    else if (e != null && e.hasAttribute("data-phone-reset")) {
      const { phone: o, ...i } = ie();
      wn(i), Ae();
    }
  }), ca.addEventListener("keydown", (t) => {
    var c, u, f, y;
    if (t.key === "Escape") {
      t.stopPropagation(), Lo = !1, Ae(), (c = Yt.querySelector("[data-phone-toggle]")) == null || c.focus({ preventScroll: !0 });
      return;
    }
    const e = (y = (f = (u = t.target).closest) == null ? void 0 : f.call(u, "[data-phone-key]")) == null ? void 0 : y.dataset.phoneKey, a = { ArrowUp: -1, ArrowLeft: -1, ArrowDown: 1, ArrowRight: 1 }[t.key];
    if (!e || !a) return;
    t.preventDefault();
    const o = tl(), i = o.indexOf(e), l = i + a;
    l < 0 || l >= o.length || ([o[i], o[l]] = [o[l], o[i]], Uc(o, e));
  });
  function el(t, e, a, o, i) {
    t.preventDefault();
    const l = De.drag, c = Ge(), u = 1 + l.lift / 100, f = [...e.parentElement.children].filter((Dt) => Dt.dataset[a]), y = f.indexOf(e), S = f.map((Dt) => Dt.getBoundingClientRect()), x = f.length - 1, R = S[y].height + (f.length > 1 ? S[1].top - S[0].bottom : 0), E = (Dt) => S[Dt].top + S[Dt].height / 2, B = t.clientY, k = S[0].top - S[y].top, P = S[x].top - S[y].top;
    let _ = 0, z = 0, C = 0, rt = 1, Tt = y, Bt = 0;
    e.classList.add("hcListDragging"), f.forEach((Dt) => {
      Dt !== e && (Dt.style.transition = c ? "none" : "transform " + l.gap + "ms " + Ee.land);
    });
    const Gt = () => {
      if (Bt = requestAnimationFrame(Gt), c) {
        z = _, e.style.transform = "translateY(" + z + "px)";
        return;
      }
      C = Rl(C, _ - z, l.pull / 100, l.keep / 100), z += C, rt += (u - rt) * 0.25;
      const Dt = Math.min(Math.abs(C) / 48, 1);
      e.style.transform = "translateY(" + z.toFixed(2) + "px) scale(" + (rt * (1 - 0.063 * Dt)).toFixed(4) + "," + (rt * (1 + 0.1 * Dt)).toFixed(4) + ")";
    };
    Bt = requestAnimationFrame(Gt);
    const Ut = (Dt) => {
      _ = Math.max(k, Math.min(P, Dt.clientY - B));
      const ye = E(y) + _, Te = f.filter((Ne, Fe) => Fe !== y && E(Fe) < ye).length;
      Te !== Tt && (Tt = Te, f.forEach((Ne, Fe) => {
        Ne !== e && (Ne.style.transform = y < Tt && Fe > y && Fe <= Tt ? "translateY(" + -R + "px)" : Tt < y && Fe >= Tt && Fe < y ? "translateY(" + R + "px)" : "");
      }));
    }, Ct = () => {
      window.removeEventListener("pointermove", Ut), window.removeEventListener("pointerup", Ct), window.removeEventListener("pointercancel", Ct), cancelAnimationFrame(Bt);
      const Dt = e.getBoundingClientRect(), ye = e.dataset[a];
      f.forEach((Ea) => {
        Ea.style.transition = "none", Ea.style.transform = "";
      }), e.classList.remove("hcListDragging");
      const Te = f.map((Ea) => Ea.dataset[a]);
      Te.splice(Tt, 0, Te.splice(y, 1)[0]), o(Te);
      const Ne = i(ye) || e;
      if (requestAnimationFrame(() => f.forEach((Ea) => {
        Ea.style.transition = "";
      })), c) return;
      const Fe = Ne.getBoundingClientRect(), or = Dt.top + Dt.height / 2 - (Fe.top + Fe.height / 2);
      Ne.classList.add("hcListLanding"), Ne.animate([{ transform: "translateY(" + or + "px) scale(" + rt + ")", filter: "drop-shadow(0 10px 30px rgba(0,0,0,.35))" }, { transform: "none", filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" }], { duration: l.slide, easing: Ee.land }).finished.then(() => {
        Ne.classList.remove("hcListLanding"), Pl(Ne);
      }, () => Ne.classList.remove("hcListLanding"));
    };
    window.addEventListener("pointermove", Ut), window.addEventListener("pointerup", Ct), window.addEventListener("pointercancel", Ct);
  }
  function vf(t, e) {
    el(
      t,
      e,
      "trayFav",
      (a) => {
        const o = new Set(lt());
        zs.favs = null, Sn({ favourites: a.filter((i) => o.has(i)) });
      },
      (a) => Yt.querySelector('[data-tray-fav="' + CSS.escape(a) + '"]')
    );
  }
  Yt.addEventListener("pointerdown", (t) => {
    if (t.button > 0) return;
    const e = t.target.closest("[data-tray-card]"), a = t.target.closest(".tfTrayFav");
    e ? Vc(t, e, "card", e.dataset.trayCard) : a && t.target.closest(".tfTrayGrip") ? vf(t, a) : a != null && a.classList.contains("off") && !t.target.closest("button") && Vc(t, a, "fav", a.dataset.trayFav);
  });
  function yf(t) {
    if (!sa || t.button !== 0 || t.target.closest("[data-board-more],.tfBoardMenu,.tfFavHides")) return;
    const e = t.target.closest(".tfBoardItem"), a = e && vn().find((Gt) => Gt.el === e);
    if (!a || So.includes(a.key)) return;
    const o = bn.get(a.key), { w: i } = en(H.clientWidth);
    if (!o) return;
    t.preventDefault(), oo();
    const l = t.clientX, c = t.clientY;
    let u = !1, f = 0;
    const y = De.drag, S = Ge();
    let x = 0, R = 0, E = 0, B = 0, k = 0, P = 0, _ = S || y.stick === 0, z = 0;
    const C = (Gt, Ut, Ct, Dt) => {
      e.style.transform = "translate(" + E.toFixed(2) + "px," + B.toFixed(2) + "px) rotate(" + Gt.toFixed(2) + "deg) rotate(" + Ut + "rad) scale(" + Ct.toFixed(4) + "," + Dt.toFixed(4) + ") rotate(" + -Ut + "rad)";
    }, rt = () => {
      if (z = requestAnimationFrame(rt), S) {
        E = x, B = R, C(0, 0, 1, 1);
        return;
      }
      if (!_) {
        const ye = Math.min(Math.hypot(x, R) / Math.max(1, y.stick), 1);
        E = x * 0.35, B = R * 0.35, C(0, Math.atan2(R, x), 1 + 0.155 * ye, 1 - 0.1 * ye);
        return;
      }
      k = Rl(k, x - E, y.pull / 100, y.keep / 100), P = Rl(P, R - B, y.pull / 100, y.keep / 100), E += k, B += P;
      const Gt = Math.hypot(k, P), Ut = Math.min(Gt / 48, 1), Ct = Math.max(-5, Math.min(y.tilt, k * 0.32)), Dt = 1 + y.lift / 100;
      C(Ct, Math.atan2(P, k), Dt * (1 + 0.1 * Ut), Dt * (1 - 0.063 * Ut));
    }, Tt = (Gt) => {
      if (x = Gt.clientX - l, R = Gt.clientY - c, !u) {
        if (Math.hypot(x, R) < 4) return;
        u = !0, te = { key: a.key, col: o.col, row: o.row }, e.classList.add("tfDragging", "mvDrag"), z = requestAnimationFrame(rt);
      }
      !_ && Math.hypot(x, R) > y.stick && (_ = !0, k = x * 0.085, P = R * 0.085), te.col = Math.round((o.x + x) / (i + pe)), te.row = Math.round((o.y + R - tn) / Wa), f || (f = requestAnimationFrame(() => {
        f = 0, We();
      }));
    }, Bt = () => {
      var or;
      if (window.removeEventListener("pointermove", Tt), window.removeEventListener("pointerup", Bt), window.removeEventListener("pointercancel", Bt), !u) return;
      const Gt = (nr) => {
        nr.preventDefault(), nr.stopImmediatePropagation();
      };
      window.addEventListener("click", Gt, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", Gt, { capture: !0 }), 300), cancelAnimationFrame(f), cancelAnimationFrame(z);
      const Ut = e.getBoundingClientRect(), Ct = a.key;
      e.style.transition = "none", We(), e.classList.remove("tfDragging", "mvDrag"), e.style.transform = "", te = null, Yn(ie(), yn()), We(), Pe();
      const Dt = (or = vn().find((nr) => nr.key === Ct)) == null ? void 0 : or.el;
      if (requestAnimationFrame(() => {
        e.style.transition = "", Dt && (Dt.style.transition = "");
      }), !Dt || S) return;
      Dt.style.transition = "none";
      const ye = Dt.getBoundingClientRect(), Te = Ut.left + Ut.width / 2 - (ye.left + ye.width / 2), Ne = Ut.top + Ut.height / 2 - (ye.top + ye.height / 2);
      Dt.style.zIndex = "20", Dt.animate([{ transform: "translate(" + Te + "px," + Ne + "px) scale(" + (1 + y.lift / 100) + ")" }, { transform: "none" }], { duration: y.slide, easing: Ee.land }).finished.then(() => {
        Dt.style.zIndex = "", Pl(Dt);
      }, () => {
        Dt.style.zIndex = "";
      });
    };
    window.addEventListener("pointermove", Tt), window.addEventListener("pointerup", Bt), window.addEventListener("pointercancel", Bt);
  }
  function Yc(t = !1) {
    const e = H == null ? void 0 : H.querySelector(".tfDashGraph svg[data-graph]");
    if (!(e != null && e.clientWidth)) return;
    const a = e.dataset.graph + "@" + e.clientWidth + "x" + e.clientHeight + "@" + Math.floor(Date.now() / 3e5);
    if (e.dataset.drawn === a) return;
    const o = !e.dataset.drawn;
    e.dataset.drawn = a;
    const i = rc.find((l) => l.id === e.dataset.graph);
    i ? Cu(e, i).then(() => {
      (t || o) && Au(e);
    }) : md(e.dataset.graph, e).then(() => {
      t && cc(e);
    });
  }
  function Zc() {
    var f, y, S;
    Vt = ti.model(d(), { madeUp: !T }), jt(), M = Vt.states, M[(f = wt.sources) == null ? void 0 : f.grid] && (Vt.grid = wt.sources.grid), M[(y = wt.sources) == null ? void 0 : y.alarm] && (Vt.security.alarms = [wt.sources.alarm]), ua.forEach((x, R) => {
      const E = M[R], B = (E == null ? void 0 : E.attributes) || {};
      if (!E || Date.now() - x.at > 2 * 60 * 1e3) {
        ua.delete(R);
        return;
      }
      x.pos != null && E.state !== "opening" && E.state !== "closing" && Math.abs(ka(R) - x.pos) < 1 && delete x.pos, x.tilt != null && Math.abs((B.current_tilt_position ?? -1) - x.tilt) < 1 && delete x.tilt, x.pos == null && x.tilt == null && ua.delete(R);
    });
    const t = [];
    let e = 0;
    const a = $();
    m = a.filter((x) => x.room).map((x) => x.room), m.some((x) => x.id === V) || (V = ((S = m[0]) == null ? void 0 : S.id) || null);
    const o = Q === "weather" ? { key: "weather", name: "Weather" } : Q && a.find((x) => x.key === Q);
    if (o || (Q = null), g.classList.toggle("tfAreaOpen", !!o), g.classList.toggle("tfWeatherOpen", (o == null ? void 0 : o.key) === "weather"), g.classList.toggle("tfDash", !o), we = /* @__PURE__ */ new Map(), Vt.rooms.forEach((x) => [...x.actions, ...x.plugs, ...x.readings, ...x.openings, ...x.solar, ...x.plants.flatMap((R) => [R.id, ...R.readings])].forEach((R) => we.set(R, x.name))), !o) return Eu(t, Qo());
    if (t.push({ key: "areahead", html: xf(o, ++e) }), o.key === "weather")
      return t.weather = ++e, t;
    const i = o.ids, l = o.room ? o.room.id : o.key, c = o.room;
    c != null && c.solar.length && t.push({ key: "energy:" + c.id, html: On(c, ++e) }), c && (c.readings.length || c.power != null) && t.push({ key: "readings:" + c.id, html: Yo(c, ++e) }), c == null || c.plants.forEach((x) => t.push({ key: "plant:" + x.id, html: vo(x, ++e) }));
    const u = [...i, ...((c == null ? void 0 : c.plugs) || []).filter((x) => !i.includes(x))];
    return u.length && t.push({ key: "block:" + l, order: ++e, tiles: u.map((x) => ({ key: x, html: $o(x) })) }), t;
  }
  const xf = (t, e) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + e + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + Vl + '</button><div class="settingsTitle">' + F(t.name) + "</div></div>";
  let Kc = 0, Xc = null;
  const $c = (t) => t === "weather" ? Oa.wx : t.startsWith("room:") && H.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || H.querySelector(".tfAreas");
  function Jc(t) {
    var e, a;
    Q || (Kc = Or().scrollTop, Xc = ((e = $c(t)) == null ? void 0 : e.getBoundingClientRect().top) ?? null), Q = t, t.startsWith("room:") && (V = t.slice(5)), za(), Or().scrollTop = 0, (a = H.querySelector("[data-area-back]")) == null || a.focus({ preventScroll: !0 });
  }
  let Nr = null;
  function Mf(t, e) {
    if (Nr == null || Nr(), e == null) return;
    const a = Or(), o = performance.now() + 1500, i = ["wheel", "touchstart", "pointerdown", "keydown"];
    let l = 0;
    const c = () => {
      cancelAnimationFrame(l), i.forEach((f) => window.removeEventListener(f, c, !0)), Nr = null;
    }, u = () => {
      const f = t();
      if (f != null && f.isConnected) {
        const y = f.getBoundingClientRect().top - e;
        Math.abs(y) > 0.5 && (a.scrollTop += y);
      }
      performance.now() < o ? l = requestAnimationFrame(u) : c();
    };
    i.forEach((f) => window.addEventListener(f, c, { capture: !0, passive: !0 })), Nr = c, u();
  }
  function al() {
    var a;
    const t = Q;
    Q = null, za(), Or().scrollTop = Kc, Mf(() => $c(t), Xc);
    const e = t.startsWith("room:") ? H.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || H.querySelector('.tfAreaPanel[data-area="' + CSS.escape(t.slice(5)) + '"]') : t === "weather" ? Oa.wx.querySelector(".wbOpenPage") : H.querySelector('[data-k="sum:' + CSS.escape(t) + '"]');
    (a = (e == null ? void 0 : e.querySelector("[data-go]")) || e) == null || a.focus({ preventScroll: !0 });
  }
  const kf = (t) => t.wrap ? t.wrap(t.tiles.map((e) => e.html).join(""), t) : '<div class="tfBlock" data-tf data-k="' + F(t.key) + '" style="order:' + t.order + '"><div class="tfActions">' + t.tiles.map((e) => e.html).join("") + "</div></div>", Qc = (t) => t.map((e) => e.key + (e.tiles ? "(" + e.tiles.map((a) => a.key).join(",") + ")" : "")).join(";");
  function Or() {
    for (let t = g.parentElement || g.getRootNode().host; t; t = t.parentElement || t.getRootNode().host) {
      const e = getComputedStyle(t).overflowY;
      if ((e === "auto" || e === "scroll") && t.scrollHeight > t.clientHeight) return t;
    }
    return document.scrollingElement;
  }
  function td(t) {
    const e = Or(), a = (u) => {
      const f = u.getBoundingClientRect();
      return f.height && f.bottom > 0 && f.top < window.innerHeight;
    }, o = [...H.children, ...H.querySelectorAll(".tfDashTiles > *")].find((u) => !u.matches(".tfDashTiles") && a(u)), i = o == null ? void 0 : o.dataset.k, l = o == null ? void 0 : o.getBoundingClientRect().top;
    t();
    const c = o != null && o.isConnected ? o : i && H.querySelector('[data-k="' + CSS.escape(i) + '"]');
    c != null && c.isConnected && l != null && (e.scrollTop += c.getBoundingClientRect().top - l);
  }
  function za() {
    if (!w || !H) return;
    const t = Zc(), e = (i) => {
      var l;
      return (((l = i.closest("[data-k]")) == null ? void 0 : l.dataset.k) || "") + "|" + i.dataset.iconFor + "|" + (i.dataset.iconName || "");
    }, a = /* @__PURE__ */ new Map();
    H.querySelectorAll("[data-tf] [data-icon-for]").forEach((i) => {
      i.firstElementChild && (a.get(e(i)) || a.set(e(i), []).get(e(i))).push(i.firstElementChild);
    }), H.querySelectorAll("[data-tf]").forEach((i) => i.remove()), xa.clear();
    const o = document.createElement("div");
    o.innerHTML = t.map((i) => i.tiles ? kf(i) : i.html).join(""), t.forEach((i) => i.tiles ? i.tiles.forEach((l) => xa.set(l.key, l.html)) : xa.set(i.key, i.html)), Qr = Qc(t), o.querySelectorAll("[data-icon-for]").forEach((i) => {
      var c;
      const l = !i.firstElementChild && ((c = a.get(e(i))) == null ? void 0 : c.shift());
      l && i.appendChild(l);
    }), H.append(...o.children), ai(t.weather), ni(), Ps.disconnect(), We(), bo(H), ul(H), xo(H), N(), gd(), er(), sd(), requestAnimationFrame(it);
  }
  const ed = (t) => {
    var a;
    const e = n.activeElement && t.contains(n.activeElement) ? n.activeElement : null;
    return e && { label: e.getAttribute("aria-label"), act: (a = e.dataset) == null ? void 0 : a.act };
  }, ol = (t, e) => {
    var a;
    e && ((a = e.label && t.querySelector('[aria-label="' + CSS.escape(e.label) + '"]') || e.act && t.querySelector('[data-act="' + CSS.escape(e.act) + '"]')) == null || a.focus({ preventScroll: !0 }));
  };
  function nl(t, e) {
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
    return [...t.children].forEach((c, u) => nl(c, l[u])), t;
  }
  function Sf(t, e) {
    const a = document.createElement("div");
    a.innerHTML = e;
    const o = ed(t), i = nl(t, a.firstElementChild);
    bo(i), ul(i), xo(i), ol(i, o);
  }
  function Pe() {
    !w || !H || te || td(_f);
  }
  function _f() {
    if (re = !1, !H.querySelector("[data-tf]")) {
      za();
      return;
    }
    const t = Zc();
    if (Qc(t) !== Qr) {
      za();
      return;
    }
    const e = (a) => qt().some((o) => {
      const i = o.slice(o.indexOf("|") + 1);
      return a === i || a.endsWith(":" + i);
    });
    t.forEach((a) => (a.tiles || [a]).forEach((o) => {
      if (xa.get(o.key) === o.html) return;
      if (e(o.key)) {
        re = !0;
        return;
      }
      const i = H.querySelector('[data-k="' + CSS.escape(o.key) + '"]');
      i && (xa.set(o.key, o.html), Sf(i, o.html), o.key.startsWith("energy:") && gd());
    })), er(), sd(), wi(), N(), Me == null || Me.update(), Ce == null || Ce.forEach((a) => a.update()), g.classList.contains("tfDash") && Ai(), requestAnimationFrame(it);
  }
  const Qn = {
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
  }, Cf = (t) => Ya(t) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function Af(t, e = {}, a = !1) {
    return '<div class="tfMoreList">' + t.map((o) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + F(o.name) + '</div><div class="tfMoreTiles' + (a ? " single" : "") + '">' + o.ids.map((i) => It(i, e)).join("") + "</div></div>").join("") + "</div>";
  }
  const Mt = document.createElement("div");
  Mt.className = "tfMoreBackdrop", Mt.hidden = !0, g.appendChild(Mt);
  const Ga = document.createElement("div");
  Ga.className = "tfMoreBackdrop tfMoreUnder", Ga.hidden = !0, g.insertBefore(Ga, Mt);
  const rl = (t, e) => {
    for (let a = t; a && a !== Mt; a = a.parentElement) {
      const o = getComputedStyle(a).overflowY;
      if ((o === "auto" || o === "scroll") && a.scrollHeight > a.clientHeight + 1 && (e < 0 ? a.scrollTop > 0 : a.scrollTop + a.clientHeight < a.scrollHeight - 1)) return !0;
    }
    return !1;
  };
  let Ir = null;
  Mt.addEventListener("touchstart", (t) => {
    Ir = { x: t.touches[0].clientX, y: t.touches[0].clientY };
  }, { passive: !0 }), Mt.addEventListener("touchmove", (t) => {
    var i, l;
    if (!Ir || t.touches.length > 1 || (l = (i = t.target).closest) != null && l.call(i, "input,textarea,select")) return;
    const e = t.touches[0], a = Ir.x - e.clientX, o = Ir.y - e.clientY;
    Ir = { x: e.clientX, y: e.clientY }, Math.abs(o) >= Math.abs(a) && !rl(t.target, o) && t.preventDefault();
  }, { passive: !1 }), Mt.addEventListener("wheel", (t) => {
    var e, a;
    Math.abs(t.deltaX) > Math.abs(t.deltaY) && ((a = (e = t.target).closest) != null && a.call(e, "[data-more-pages]")) || rl(t.target, t.deltaY) || t.preventDefault();
  }, { passive: !1 });
  const Tf = () => window.innerWidth <= 620;
  let Ve = null;
  Mt.addEventListener("pointerdown", (t) => {
    const e = Mt.querySelector(".tfMorePair");
    !Tf() || !e || !e.contains(t.target) || !t.isPrimary || Mt._closing || t.target.closest("input,textarea,select,.tfDacPad,[data-cover-art],.tfMoreSide,[data-drag],[data-blocks]") || (Ve = { x: t.clientX, y: t.clientY, t: performance.now(), dy: 0, v: 0, pair: e, from: t.target, grab: t.target.matches(".tfMore") || !!t.target.closest(".tfMoreHead") });
  }, !0), Mt.addEventListener("pointermove", (t) => {
    if (!Ve || !t.isPrimary) return;
    const e = t.clientY - Ve.y, a = performance.now();
    if (!Ve.on) {
      if (Math.abs(t.clientX - Ve.x) > 8 || e < -8 || !Ve.grab && rl(Ve.from, -1)) {
        Ve = null;
        return;
      }
      if (e < 8) return;
      Ve.on = !0;
      try {
        Mt.setPointerCapture(t.pointerId);
      } catch {
      }
    }
    Ve.v = (e - Ve.dy) / Math.max(1, a - Ve.t), Ve.dy = e, Ve.t = a, Ve.pair.style.transform = "translateY(" + Math.max(0, e) + "px)";
  });
  const ad = (t) => {
    if (!Ve || !t.isPrimary) return;
    const e = Ve;
    if (Ve = null, !e.on) return;
    const a = (y) => {
      y.preventDefault(), y.stopImmediatePropagation();
    };
    window.addEventListener("click", a, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", a, { capture: !0 }), 300);
    const o = t.type === "pointerup" && (e.dy > 120 || e.v > 0.5), i = "translateY(" + Math.max(0, e.dy) + "px)";
    if (e.pair.style.transform = "", !o || Ge()) {
      o ? wl() : e.pair.animate([{ transform: i }, { transform: "none" }], { duration: 320, easing: Ee.spring });
      return;
    }
    const l = A;
    Mt._closing = !0, Mt.style.pointerEvents = "none", Mt.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220, easing: Ee.exit, fill: "forwards" });
    const c = e.pair.animate([{ transform: i }, { transform: "translateY(calc(100% + 40px))" }], { duration: 220, easing: Ee.exit, fill: "forwards" });
    let u = !1;
    const f = () => {
      u || (u = !0, Mt._closing = !1, Mt.style.pointerEvents = "", Mt.getAnimations().forEach((y) => y.cancel()), e.pair.getAnimations().forEach((y) => y.cancel()), A === l && wl());
    };
    c.finished.then(f, f), setTimeout(f, 300);
  };
  Mt.addEventListener("pointerup", ad), Mt.addEventListener("pointercancel", ad);
  function il() {
    const t = Mt.querySelector(".tfMorePair"), e = Mt.querySelector(".tfMore");
    t == null || t.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - e.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", il, { passive: !0 }), w && fr();
  let ro = [];
  const Lf = (t) => t === "favourites" || t.startsWith("summary:") || t.startsWith("group:");
  function Df(t) {
    const e = (k, P = "") => '<div class="tfMoreHead">' + (A != null && A.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + up + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + F(k) + "</div>" + P + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + fp + "</button></div>", a = (k, P) => '<div class="tfMoreNow"><div class="tfMoreState">' + F(k) + "</div></div>", o = Af;
    if (t === "favourites") {
      const k = lt(), P = new Set(k), _ = [{ name: "Starred", ids: k }, { name: "Home", ids: Vt.homeVacuums }, { name: "Security", ids: [...Vt.security.alarms, ...Vt.security.locks] }, ...Vt.rooms.map((z) => ({ name: z.name, ids: [...z.actions, ...z.plugs] }))].map((z, C) => C ? { ...z, ids: z.ids.filter((rt) => !P.has(rt)) } : z).filter((z) => z.ids.length);
      return [e("Favourites"), a(k.length ? k.length + " starred" : "None starred"), o(_, { star: !0 }, !0)];
    }
    const i = (k, { name: P = "", alert: _ = !1, plain: z = !1 } = {}) => {
      const C = z ? [] : k.filter((Bt) => lr.includes(Bt.split(".")[0])), rt = k.filter((Bt) => !C.includes(Bt)), Tt = (Bt) => Bt.startsWith("vacuum.") && zt(Bt).battery_level != null ? zt(Bt).battery_level + "%" : null;
      return '<div class="tfMoreGroup">' + (P ? '<div class="tfMoreGroupName">' + F(P) + "</div>" : "") + '<div class="tfMoreActions">' + C.map((Bt) => $o(Bt, !0)).join("") + rt.map((Bt) => It(Bt, { plain: z, alert: _, say: z ? Tt(Bt) : null })).join("") + "</div></div>";
    };
    if (t.startsWith("summary:")) {
      const k = Qo().find((C) => C.key === t.slice(8));
      if (!k) return null;
      const P = k.key === "light" ? (k.groups || []).flatMap((C) => C.ids) : [], _ = P.some((C) => {
        var rt;
        return ((rt = M[C]) == null ? void 0 : rt.state) === "on";
      }), z = P.length ? '<button class="primary" type="button" data-acts="' + _a(P.map((C) => ["light", _ ? "turn_off" : "turn_on", C])) + '">' + (_ ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [e(k.name), '<div class="tfMoreNowRow">' + a(k.value) + z + "</div>", ...(k.groups || []).map((C) => i(C.ids, { name: C.name === k.name ? "" : C.name, alert: C.alert, plain: k.plain }))];
    }
    if (t.startsWith("group:")) {
      const [, k, P] = t.split(":"), _ = Vt.rooms.find((rt) => rt.id === k), z = _ && Vn(_).find((rt) => rt.key === P);
      if (!z) return null;
      const C = z.acts ? '<button class="primary" type="button" data-acts="' + _a(z.acts) + '">' + (z.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [e(_.name + " " + z.label.toLowerCase()), '<div class="tfMoreNowRow">' + a(z.value) + C + "</div>", i(Ie(_, P))];
    }
    const l = t.split(".")[0];
    M[t];
    const c = lr.includes(l) || Zr.includes(l) ? Mo(t) : sl(t), u = If(t), f = [...u ? u.pages.map((k) => ({ name: k.name, svg: k.svg, tabs: k.tabs, html: k.space + '<div class="tfMoreCtl"' + Xa(t).replace(" data-light", "") + ">" + k.rows.filter(Boolean).join("") + "</div>" })) : [{ name: "Control", svg: da, html: Pf(t) + (l === "plant" ? zf(t).join("") : "") + c.sections.filter(Boolean).join("") }], { name: "Info", svg: Gl, html: qf(t) }];
    A && A.page == null && (A.page = 0), A && (A.pages = f.length);
    const y = (A == null ? void 0 : A.page) || 0, S = (A == null ? void 0 : A.mode) || "", x = f.length - 1, R = !!(u != null && u.infoButton), E = f.flatMap((k, P) => (R && P === x ? [] : k.tabs || [{ name: k.name, svg: k.svg }]).map((_) => ({ ..._, page: P }))), B = (k) => k.page === y && (k.mode == null || k.mode === S);
    return [
      Bf(t, c),
      '<div class="tfMorePages' + (u ? " tfMorePop" : "") + (S && y === 0 ? " tfMoreHold" : "") + '" data-more-pages>' + f.map((k) => '<section class="tfMorePage" aria-label="' + k.name + '" data-mode="' + S + '">' + k.html + "</section>").join("") + "</div>",
      // the pages' icons in place of their dots (Matt, 12 Nov): Control's sliders and Info's (i); a light's Colour its palette first
      (R ? '<div class="tfMoreFoot"><span class="tfMoreFootGap"></span>' : "") + (E.length ? '<div class="tfMoreDots tfMorePageIcons" role="tablist" aria-label="' + (R ? "Views" : "Pages") + '">' + E.map((k) => '<button type="button" role="tab" aria-selected="' + B(k) + '" aria-label="' + k.name + '" title="' + k.name + '" data-more-page="' + k.page + '"' + (k.mode != null ? ' data-more-mode="' + k.mode + '"' : "") + (B(k) ? "" : ' tabindex="-1"') + ">" + k.svg + "</button>").join("") + "</div>" : "") + (R ? '<button class="tfMoreInfoBtn" type="button" aria-label="Info" title="Info" aria-pressed="' + (y === x) + '" data-more-page="' + x + '" data-more-toggle>' + Gl + "</button></div>" : "")
    ];
  }
  const Ef = (t, e) => {
    const a = t.split(".")[0], o = M[t], i = o.attributes;
    if (a === "light") return He(t);
    const l = a === "climate" ? Wt(i.hvac_action || o.state) : a === "humidifier" ? Wt(i.action || o.state) : a === "water_heater" ? Wt(i.operation_mode || o.state) : a === "fan" && o.state === "on" && i.percentage != null ? i.percentage + "%" : (a === "valve" || a === "cover") && i.current_position != null && o.state !== "closed" ? i.current_position + "%" : He(t);
    return [e, l].filter(Boolean).join(" · ");
  };
  function Bf(t, e, a) {
    var c, u, f, y, S;
    const o = (c = Vt.areaOf) == null ? void 0 : c.call(Vt, t), i = o && (((u = Vt.rooms.find((x) => x.id === o)) == null ? void 0 : u.name) || ((S = (y = (f = d()) == null ? void 0 : f.areas) == null ? void 0 : y[o]) == null ? void 0 : S.name)) || "", l = e.button ? Xo(t, e) : '<div class="tfIcon"' + ve(t, e.icon) + "></div>";
    return '<div class="tfMoreHead tfMoreTileHead' + (e.on ? " on" : "") + '"' + (e.tone ? ' data-tone="' + e.tone + '"' : "") + Xa(t) + ">" + (A != null && A.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + up + "</button>" : "") + l + '<div class="tfName"><span class="activityRowName" id="tfMoreTitle">' + F(mt(t)) + '</span><span class="activityRowMeta">' + F(Ef(t, i)) + '</span></div><button class="tfBack" type="button" data-more-close aria-label="Close">' + fp + "</button></div>";
  }
  const Rf = ["lock", "alarm_control_panel", "switch", "input_boolean", "fan", "valve", "media_player", "automation", "script", "scene", "button"];
  function sl(t) {
    var i;
    const e = t.split(".")[0], a = ((i = M[t]) == null ? void 0 : i.state) === "on", o = Zr.includes(e) ? { act: Et(e, "toggle", t), label: "Turn " + mt(t) + (a ? " off" : " on") } : e === "scene" || e === "script" ? { act: Et(e, "turn_on", t), label: "Run " + mt(t) } : null;
    return { sections: [], on: a, button: o, icon: Sa(t) };
  }
  function Pf(t) {
    const e = t.split(".")[0];
    if (Rf.includes(e) || e === "light" && !ha(t)) {
      const i = lr.includes(e) ? Mo(t) : sl(t);
      return i != null && i.button ? '<div class="tfMoreSpace tfMoreSwitch' + (i.on ? " on" : "") + '"' + (i.tone ? ' data-tone="' + i.tone + '"' : "") + Xa(t) + ">" + Xo(t, i) + "</div>" : "";
    }
    if (e === "cover") return '<div class="tfMoreSpace tfMoreFill"><div data-cover-art="' + F(t) + '"></div></div>';
    if (e === "light" && ha(t)) return '<div class="tfMoreSpace tfMoreFill"><div class="tfDacPad" data-dac="more:' + F(t) + '"></div></div>';
    const { big: a, lines: o } = Ff(t);
    return '<div class="tfMoreSpace"><div class="tfMoreBig' + (Ze("pos", t) != null ? " live" : "") + '"><span class="tfMoreNum">' + F(a[0]) + "</span>" + (a[1] ? '<span class="tfMoreUnit">' + F(a[1]) + "</span>" : "") + '</div><div class="tfMoreFacts">' + o.map(([i, l]) => '<div class="tfMoreFact"><span>' + F(i) + "</span><span>" + F(l) + "</span></div>").join("") + "</div></div>";
  }
  const Hf = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z"/></svg>', Nf = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="5" width="14" height="14" rx="4"/></svg>', Of = ["light", "climate", "fan", "humidifier", "water_heater", "alarm_control_panel", "cover", "lock", "valve", "switch", "input_boolean"], io = (t, e) => '<div class="tfMoreField"><div class="tfMoreLabel">' + F(t) + "</div>" + e + "</div>", Da = (t, e) => fa("tfSeg", t, e), ll = (t, e, a, o, i, l) => '<div class="tfBar tfPopBar ' + t + '" role="slider" tabindex="0" aria-label="' + F(o) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(a) + '" aria-valuetext="' + F(i) + '" data-drag="' + F(t + "|" + e) + '"><i style="width:' + Math.max(0, Math.min(100, a)) + '%"><output class="tfBarVal">' + F(i) + "</output></i>" + (l ? '<span class="tfBarIcon"' + ve("", l, o) + "></span>" : "") + "</div>", tr = (t, e) => '<div class="tfMoreSpace tfMoreSwitch' + (e.on ? " on" : "") + '"' + (e.tone ? ' data-tone="' + e.tone + '"' : "") + Xa(t) + ">" + Xo(t, e) + "</div>", cl = (t, e, a) => '<div class="tfMoreSpace"><div class="tfMoreBig"><span class="tfMoreNum">' + F(t) + "</span>" + (e ? '<span class="tfMoreUnit">' + F(e) + "</span>" : "") + '</div><div class="tfMoreFacts">' + a.filter(([, o]) => o != null && o !== "").map(([o, i]) => '<div class="tfMoreFact"><span>' + F(o) + "</span><span>" + F(i) + "</span></div>").join("") + "</div></div>", od = () => '<input class="tfMoreCode" type="password" inputmode="numeric" autocomplete="off" placeholder="Code" aria-label="Code" data-code value="' + F((A == null ? void 0 : A.code) || "") + '">', Hi = (t, e, a, o, i) => ({ label: o, pressed: i, html: null, coded: [t, e, a].join("|") }), nd = (t, e) => '<div class="tfSeg" role="group" aria-label="' + F(t) + '">' + e.map((a) => '<button type="button" data-coded="' + F(a.coded) + '" aria-pressed="' + !!a.pressed + '">' + F(a.label) + "</button>").join("") + "</div>", rd = (t, e, a) => Da(mt(t), [{ label: "Off", act: Et(e, "turn_off", t), pressed: !a }, { label: "On", act: Et(e, "turn_on", t), pressed: a }]);
  function If(t) {
    var l, c, u;
    const e = t.split(".")[0], a = M[t], o = a.attributes;
    if (!Of.includes(e)) return null;
    const i = lr.includes(e) || Zr.includes(e) ? Mo(t) : sl(t);
    if (e === "light") {
      const f = a.state === "on", y = gr(t), [S, x] = Hn(t), R = Ze("bright", t, f ? mo(a) : 0), E = Ze("ctf", t, f && o.color_mode === "color_temp" ? o.color_temp_kelvin : null), B = Ze("huev", t, f && Go.includes(o.color_mode) && o.hs_color ? o.hs_color[0] : null), k = y.includes("color_temp"), P = y.some((ye) => Go.includes(ye)), _ = ha(t), z = (ye, Te, Ne, Fe) => '<div class="tfBar tfVBar ' + ye + '" data-axis="y" role="slider" tabindex="0" aria-orientation="vertical" aria-label="' + F(mt(t) + " " + Te.toLowerCase()) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(Ne) + '" data-drag="' + ye + "|" + F(t) + '">' + Fe + "</div>", C = (ye, Te, Ne = "") => '<div class="tfVCol' + Ne + '">' + Te + "</div>", rt = C("Brightness", z("bright", "Brightness", R, '<i style="height:' + R + '%"></i><span class="tfBarIcon"' + ve("", "mdi:white-balance-sunny", "Brightness") + "></span>")), Tt = E == null ? null : (x - E) / (x - S), Bt = k ? C("Warmth", z("ctf", "Warmth", Tt == null ? 0 : Tt * 100, Tt == null ? "" : '<b style="top:' + Math.round((1 - Tt) * 1e3) / 10 + '%"></b>'), " tfVWarm") : "", Gt = P ? C("Colour", z("huev", "Colour", B == null ? 0 : (1 - B / 360) * 100, B == null ? "" : '<b style="top:' + Math.round(B / 360 * 1e3) / 10 + '%"></b>'), " tfVColour") : "", Ut = '<div class="tfVCols">' + rt + (Bt || Gt ? '<div class="tfVSwap">' + Bt + Gt + "</div>" : "") + "</div>", Ct = _ ? '<div class="tfLightPad"><div class="tfDacPad" data-dac="more:' + F(t) + '"></div></div>' : "", Dt = [P && { name: "Colour", svg: Hf, mode: "colour" }, _ && { name: "Dual Axis Controller", svg: Nf, mode: "dac" }, { name: "Sliders", svg: da, mode: "" }].filter(Boolean);
      return { infoButton: !0, pages: [{ name: "Control", svg: da, space: '<div class="tfMoreSpace tfLightSpace">' + Ut + Ct + "</div>", rows: [], tabs: Dt.length > 1 ? Dt : [] }] };
    }
    if (e === "climate") {
      const f = o.target_temp_step || 0.5, y = Number(o.temperature), S = Number(o.target_temp_low), x = Number(o.target_temp_high), R = (P) => Et("climate", "set_temperature", t, P), E = (P, _, z, C, rt) => (_ == null ? void 0 : _.length) && io(P, Da(P, _.map((Tt) => ({ label: Wt(Tt), act: Et("climate", C, t, { [rt]: Tt }), pressed: (z === "state" ? a.state : o[z]) === Tt })))), B = Number.isFinite(S) && Number.isFinite(x) && io("Range", '<div class="tfMoreRange">' + Qe("Low", Re(S) + " °C", R({ target_temp_low: S - f, target_temp_high: x }), R({ target_temp_low: S + f, target_temp_high: x })) + Qe("High", Re(x) + " °C", R({ target_temp_low: S, target_temp_high: x - f }), R({ target_temp_low: S, target_temp_high: x + f })) + "</div>"), k = Number(o.humidity);
      return { pages: [{
        name: "Control",
        svg: da,
        space: cl(Re(o.current_temperature), "°C", [["Target", Number.isFinite(y) ? Re(y) + " °C" : null], ["Humidity", o.current_humidity != null ? o.current_humidity + "%" : null], ["Action", o.hvac_action && Wt(o.hvac_action)]]),
        rows: [
          Number.isFinite(y) && Qe("Target temperature", Re(y) + " °C", R({ temperature: y - f }), R({ temperature: y + f })),
          B,
          E("Mode", o.hvac_modes, "state", "set_hvac_mode", "hvac_mode"),
          E("Fan", o.fan_modes, "fan_mode", "set_fan_mode", "fan_mode"),
          E("Swing", o.swing_modes, "swing_mode", "set_swing_mode", "swing_mode"),
          E("Preset", o.preset_modes, "preset_mode", "set_preset_mode", "preset_mode"),
          Number.isFinite(k) && o.min_humidity != null && io("Humidity", Qe("Target humidity", k + "%", Et("climate", "set_humidity", t, { humidity: k - 1 }), Et("climate", "set_humidity", t, { humidity: k + 1 })))
        ]
      }] };
    }
    if (e === "fan") {
      const f = a.state === "on", y = Ze("fan", t, f && Number(o.percentage) || 0), S = o.percentage != null;
      return { pages: [{ name: "Control", svg: da, space: tr(t, i), rows: S ? [
        ll("fan", t, y, mt(t) + " speed", y + "%", "mdi:fan"),
        o.oscillating != null && io("Oscillate", Da("Oscillate", [{ label: "Off", act: Et("fan", "oscillate", t, { oscillating: !1 }), pressed: !o.oscillating }, { label: "On", act: Et("fan", "oscillate", t, { oscillating: !0 }), pressed: !!o.oscillating }])),
        o.direction && io("Direction", Da("Direction", [["forward", "Forward"], ["reverse", "Reverse"]].map(([x, R]) => ({ label: R, act: Et("fan", "set_direction", t, { direction: x }), pressed: o.direction === x })))),
        ((l = o.preset_modes) == null ? void 0 : l.length) && io("Preset", Da("Preset", o.preset_modes.map((x) => ({ label: Wt(x), act: Et("fan", "set_preset_mode", t, { preset_mode: x }), pressed: o.preset_mode === x }))))
      ] : [rd(t, "fan", f)] }] };
    }
    if (e === "humidifier") {
      const f = Number(o.humidity);
      return { pages: [{ name: "Control", svg: da, space: cl(String(o.current_humidity), "%", [["Target", Number.isFinite(f) ? f + "%" : null], ["Action", o.action && Wt(o.action)]]), rows: [
        Number.isFinite(f) && Qe("Target humidity", f + "%", Et("humidifier", "set_humidity", t, { humidity: f - 1 }), Et("humidifier", "set_humidity", t, { humidity: f + 1 })),
        ((c = o.available_modes) == null ? void 0 : c.length) && io("Mode", Da("Mode", o.available_modes.map((y) => ({ label: Wt(y), act: Et("humidifier", "set_mode", t, { mode: y }), pressed: o.mode === y }))))
      ] }] };
    }
    if (e === "water_heater") {
      const f = Number(o.temperature), y = o.target_temp_step || 1;
      return { pages: [{ name: "Control", svg: da, space: cl(Re(o.current_temperature).replace(/\.0$/, ""), "°C", [["Target", Number.isFinite(f) ? String(f).replace(/\.0$/, "") + " °C" : null], ["Mode", Wt(o.operation_mode || a.state)]]), rows: [
        Number.isFinite(f) && Qe("Target temperature", f + " °C", Et("water_heater", "set_temperature", t, { temperature: f - y }), Et("water_heater", "set_temperature", t, { temperature: f + y })),
        ((u = o.operation_list) == null ? void 0 : u.length) && io("Mode", Da("Mode", o.operation_list.map((S) => ({ label: Wt(S), act: Et("water_heater", "set_operation_mode", t, { operation_mode: S }), pressed: (o.operation_mode || a.state) === S })))),
        o.away_mode != null && io("Away", Da("Away", [{ label: "Off", act: Et("water_heater", "set_away_mode", t, { away_mode: !1 }), pressed: o.away_mode !== "on" }, { label: "On", act: Et("water_heater", "set_away_mode", t, { away_mode: !0 }), pressed: o.away_mode === "on" }]))
      ] }] };
    }
    if (e === "alarm_control_panel") {
      const f = [...Dp, ["armed_vacation", "Vacation", "alarm_arm_vacation", 32]].filter(([, , , x]) => !x || fe(t, x)), y = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "clear", "0", "back"], S = '<div class="tfMoreSpace tfMoreKeypad">' + od() + '<div class="tfKeypad">' + y.map((x) => '<button type="button" data-key="' + x + '"' + (x === "back" ? ' aria-label="Delete"' : "") + ">" + (x === "clear" ? "Clear" : x === "back" ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22,3H7C6.31,3 5.77,3.35 5.41,3.88L0,12L5.41,20.11C5.77,20.64 6.31,21 7,21H22A2,2 0 0,0 24,19V5A2,2 0 0,0 22,3M22,19H7.07L2.4,12L7.06,5H22V19M10.41,17L14,13.41L17.59,17L19,15.59L15.41,12L19,8.41L17.59,7L14,10.59L10.41,7L9,8.41L12.59,12L9,15.59L10.41,17Z"/></svg>' : x) + "</button>").join("") + "</div></div>";
      return { pages: [{ name: "Control", svg: da, space: S, rows: [nd(mt(t), f.map(([x, R, E]) => Hi("alarm_control_panel", E, t, R, a.state === x)))] }] };
    }
    if (e === "cover") {
      if (o.current_position == null) return { pages: [{ name: "Control", svg: da, space: tr(t, i), rows: [Da(mt(t), [{ label: "Open", act: Et("cover", "open_cover", t), pressed: a.state !== "closed" }, { label: "Close", act: Et("cover", "close_cover", t), pressed: a.state === "closed" }])] }] };
      const f = a.state === "opening" || a.state === "closing", y = pn(t), S = yr(t);
      return { pages: [{ name: "Control", svg: da, space: '<div class="tfMoreSpace tfMoreArt"><div data-cover-art="' + F(t) + '"></div></div>', rows: [
        fe(t, jl) && Ar(t, y),
        S != null && io("Tilt", ll("tiltp", t, Ze("tiltp", t, S), mt(t) + " tilt", Math.round(Ze("tiltp", t, S)) + "%")),
        Da(mt(t), [fe(t, vp) && { label: "Open", act: Et("cover", "open_cover", t), disabled: y >= 100 && !f }, fe(t, xp) && { label: "Stop", act: Et("cover", "stop_cover", t) }, fe(t, yp) && { label: "Close", act: Et("cover", "close_cover", t), disabled: y <= 0 && !f }])
      ] }] };
    }
    if (e === "lock")
      return { pages: [{ name: "Control", svg: da, space: tr(t, i), rows: [
        od(),
        nd(mt(t), [Hi("lock", "lock", t, "Lock", a.state === "locked"), Hi("lock", "unlock", t, "Unlock", a.state === "unlocked"), fe(t, Lp) && Hi("lock", "open", t, "Open", a.state === "open")].filter(Boolean))
      ] }] };
    if (e === "valve") {
      const f = a.state === "open";
      if (o.current_position == null) return { pages: [{ name: "Control", svg: da, space: tr(t, i), rows: [Da(mt(t), [{ label: "Open", act: Et("valve", "open_valve", t), pressed: f }, { label: "Close", act: Et("valve", "close_valve", t), pressed: !f }])] }] };
      const y = Ze("valve", t, Number(o.current_position) || 0);
      return { pages: [{ name: "Control", svg: da, space: tr(t, i), rows: [
        ll("valve", t, y, mt(t) + " position", Math.round(y) + "%", "mdi:valve"),
        Da(mt(t), [{ label: "Open", act: Et("valve", "open_valve", t) }, fe(t, 8) && { label: "Stop", act: Et("valve", "stop_valve", t) }, { label: "Close", act: Et("valve", "close_valve", t) }])
      ] }] };
    }
    return { pages: [{ name: "Control", svg: da, space: tr(t, i), rows: [rd(t, e, a.state === "on")] }] };
  }
  function Ff(t) {
    var S;
    const e = M[t], a = zt(t), o = t.split(".")[0], i = (((S = Qn[o]) == null ? void 0 : S.call(Qn, a)) || []).filter(([, x]) => x != null && x !== ""), l = (x) => {
      const R = i.findIndex(([E]) => E === x);
      return R < 0 ? null : i.splice(R, 1)[0][1];
    }, c = (x) => {
      const R = String(x).match(/^(-?[\d.,]+)\s*(.*)$/);
      return R ? [R[1], R[2]] : [String(x), ""];
    }, u = () => [Wt(String(e.state).replace(/_/g, " ")), ""];
    let f;
    o === "light" ? (l("Brightness"), f = e.state === "on" && $a(t) ? [String(mo(e)), "%"] : u()) : o === "climate" ? f = c(l("Current temperature") || Re(a.current_temperature) + " °C") : o === "cover" ? (l("Position"), f = a.current_position != null ? [String(ka(t)), "%"] : u()) : o === "humidifier" ? f = c(l("Current humidity") || e.state) : o === "vacuum" ? f = c(l("Battery") || e.state) : o === "plant" ? f = c(l("Moisture") || e.state) : ["media_player", "lock", "alarm_control_panel", "valve"].includes(o) ? f = u() : f = c(e.state + (a.unit_of_measurement ? " " + a.unit_of_measurement : ""));
    const y = i.length ? i.slice(0, 4) : [["State", He(t)]];
    return { big: f, lines: y };
  }
  function qf(t) {
    var y, S, x, R, E, B, k;
    const e = M[t], a = d(), o = (y = a == null ? void 0 : a.entities) == null ? void 0 : y[t], i = o != null && o.device_id ? (S = a == null ? void 0 : a.devices) == null ? void 0 : S[o.device_id] : null, l = '<div class="tfMoreGraph"><div class="tfMoreGroupName">Last 24 hours</div><svg class="tfGraph tfDay" data-day="' + F(t) + '" role="img" aria-label="' + F(mt(t)) + ', last 24 hours"></svg></div>', c = (x = Vt.areaOf) == null ? void 0 : x.call(Vt, t), u = c && (((R = Vt.rooms.find((P) => P.id === c)) == null ? void 0 : R.name) || ((B = (E = a == null ? void 0 : a.areas) == null ? void 0 : E[c]) == null ? void 0 : B.name)) || "", f = [
      ...((k = Qn[t.split(".")[0]]) == null ? void 0 : k.call(Qn, zt(t))) || [],
      ["Changed", e.last_changed && Nn(Date.parse(e.last_changed))],
      ["Area", u],
      ["Device", i && (i.name_by_user || i.name)],
      ["Integration", (o == null ? void 0 : o.platform) && Wt(o.platform.replace(/_/g, " "))],
      ["Entity", t]
    ].filter(([, P]) => P != null && P !== "");
    return l + '<div class="tfMoreRows">' + f.map(([P, _]) => '<div class="tfMoreRow"><span>' + F(P) + "</span><span>" + F(_) + "</span></div>").join("") + "</div>" + Cf(t) + (i ? '<button class="tfDetailsBtn tfMoreLink" type="button" data-path="/config/devices/device/' + F(o.device_id) + '"><span>Device page</span>' + Ul + "</button>" : "");
  }
  const Wf = () => "";
  let dl = "";
  function pl(t) {
    var e;
    A && (A.details = t, er(), (e = Mt.querySelector(t ? "[data-details-close]" : "[data-details]")) == null || e.focus({ preventScroll: !0 }));
  }
  const Ni = (t) => {
    const e = M[t], a = ka(t), o = pn(t);
    return { kind: Wl(e), name: mt(t), text: He(t), pos: a, target: Math.abs(o - a) > 0.5 ? o : null, moving: e.state === "opening" || e.state === "closing", tilt: yr(t) ?? 100, canSet: fe(t, jl) };
  };
  function ul(t) {
    t.querySelectorAll("[data-cover-art]").forEach((e) => {
      const a = e.dataset.coverArt, o = e.dataset.artKey || "more:" + a;
      let i = Je.get(o);
      i || (i = T0({ onMove: (l) => qr(a, l), onSet: (l) => {
        qr(a, l), Wr("pos", a);
      } }), i.coverId = a, Je.set(o, i)), e.replaceWith(i.el), i.update(Ni(a));
    });
  }
  const id = (t) => [...Je.values()].filter((e) => e.coverId === t), fl = () => Je.forEach((t) => {
    M[t.coverId] && t.update(Ni(t.coverId));
  }), sd = () => {
    Je.forEach((t, e) => {
      t.el.isConnected || (t.destroy(), Je.delete(e));
    }), fl();
  };
  function er() {
    var l, c;
    if (!A || !(Lf(A.id) || M[A.id])) {
      Mt.hidden = !0;
      return;
    }
    if (qt().some((u) => u.endsWith("|" + A.id))) {
      re = !0, fl();
      return;
    }
    const t = Df(A.id), e = Mt.querySelector(".tfMore");
    if (!t) {
      Fi();
      return;
    }
    const a = ed(Mt), o = Wf(A.id), i = A.frame ? A.frame.wide : A.id.startsWith("summary:") || A.id.startsWith("group:");
    if (Mt.hidden || !e || t.length !== ro.length || e.classList.contains("wide") !== i) {
      const u = gl ? A.scroll || 0 : !Mt.hidden && e ? e.scrollTop : 0;
      if (Mt.innerHTML = '<div class="tfMorePair' + (Mt.hidden ? "" : " still") + '" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (i ? " wide" : "") + '"' + (A.frame ? ' style="height:' + A.frame.h + 'px"' : "") + ' tabindex="-1">' + t.join("") + "</section></div>", dl = o, Mt.classList.toggle("wide", i), Mt.hidden = !1, il(), ul(Mt), xo(Mt), bo(Mt), Mt.querySelectorAll("[data-day]").forEach((f) => fd(f.dataset.day, f, A.at)), dd(Mt), u && (Mt.querySelector(".tfMore").scrollTop = u), ld(), ol(Mt, a), !Mt.contains(n.activeElement)) {
        const f = Mt.querySelector("[data-more-close]");
        (l = f != null && f.offsetParent ? f : Mt.querySelector(".tfMore")) == null || l.focus({ preventScroll: !0 });
      }
    } else {
      if (t.forEach((u, f) => {
        var R, E;
        if (u === ro[f] || u.includes("data-cover-art") || e.children[f].contains((E = (R = n.activeElement) == null ? void 0 : R.matches) != null && E.call(R, "input,select") ? n.activeElement : null)) return;
        if (qt().some((B) => e.children[f].querySelector('[data-drag="' + CSS.escape(B) + '"]'))) {
          re = !0;
          return;
        }
        const y = document.createElement("div");
        y.innerHTML = u;
        const S = [...e.children[f].querySelectorAll(".tfMoreCtl,.tfMorePage")].map((B) => B.scrollTop), x = nl(e.children[f], y.firstElementChild);
        x.querySelectorAll(".tfMoreCtl,.tfMorePage").forEach((B, k) => {
          S[k] && (B.scrollTop = S[k]);
        }), bo(x), dd(x), xo(x);
      }), o !== dl) {
        const u = Mt.querySelector(".tfMoreSideBody");
        u && (u.innerHTML = o), dl = o;
      }
      e.querySelectorAll("[data-day]").forEach((u) => {
        u.innerHTML || fd(u.dataset.day, u, A.at);
      }), ld(), Mt.contains(n.activeElement) || ol(Mt, a);
    }
    (c = Mt.querySelector(".tfMorePair")) == null || c.classList.toggle("details", !!(A.details && o)), ro = t, fl();
  }
  function ld() {
    const t = Mt.querySelector("[data-more-pages]");
    !t || !A || (t.scrollTo({ left: (A.page || 0) * t.clientWidth, behavior: "instant" }), ml(), hl(t));
  }
  function hl(t) {
    const e = t.children[(A == null ? void 0 : A.page) || 0];
    e && (t.style.height = e.scrollHeight + "px");
  }
  function ml() {
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
  function Vf(t, e) {
    var o, i;
    const a = Mt.querySelector("[data-more-pages]");
    !a || !A || (A.page = Math.max(0, Math.min((A.pages || 2) - 1, t)), a.scrollTo({ left: A.page * a.clientWidth, behavior: (o = window.matchMedia) != null && o.call(window, "(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" }), ml(), hl(a), e && ((i = Mt.querySelector('.tfMoreDots [aria-selected="true"]')) == null || i.focus({ preventScroll: !0 })));
  }
  function Oi(t, e, a) {
    A && (e != null && e !== (A.mode || "") && (A.mode = e, Mt.querySelectorAll(".tfMorePage").forEach((o) => {
      o.dataset.mode = e;
    })), Vf(t, a));
  }
  let ar = null;
  Mt.addEventListener("touchstart", (t) => {
    var a, o, i, l;
    const e = t.touches[0];
    ar = (o = (a = t.target).closest) != null && o.call(a, "[data-more-pages]") && !((l = (i = t.target).closest) != null && l.call(i, "[data-drag],[data-blocks],.tfDacPad,[data-cover-art]")) && t.touches.length === 1 ? { x: e.clientX, y: e.clientY } : null;
  }, { passive: !0 }), Mt.addEventListener("touchend", (t) => {
    if (!ar || !A || (A.page || 0) !== 0 || !Mt.querySelector("[data-more-mode]")) {
      ar = null;
      return;
    }
    const e = t.changedTouches[0], a = e.clientX - ar.x, o = e.clientY - ar.y;
    if (ar = null, Math.abs(a) < 40 || Math.abs(a) < Math.abs(o) * 1.5) return;
    const i = [...Mt.querySelectorAll(".tfMoreDots [data-more-mode]")].map((c) => c.dataset.moreMode), l = i.indexOf(A.mode || "");
    a > 0 && l > 0 ? Oi(0, i[l - 1]) : a < 0 && A.mode && l < i.length - 1 && Oi(0, i[l + 1]);
  }, { passive: !0 });
  let cd = 0;
  Mt.addEventListener("scroll", (t) => {
    var a;
    const e = t.target;
    !((a = e.matches) != null && a.call(e, "[data-more-pages]")) || !A || (clearTimeout(cd), cd = setTimeout(() => {
      if (!A) return;
      const o = Math.round(e.scrollLeft / Math.max(1, e.clientWidth));
      o !== (A.page || 0) && (A.page = o, ml(), hl(e));
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
    A.code = "", o && (o.value = ""), Fr(i, l, c, u ? { code: u } : null).catch(() => {
    });
  }), setInterval(() => {
    A && er();
  }, 15 * 1e3);
  function Ii(t, e) {
    var i, l;
    const a = !!(A && e && Mt.contains(e)), o = a && Mt.querySelector(".tfMore");
    if (a && (A.scroll = o.scrollTop), a && !A.under) {
      const c = Mt.querySelector(".tfMorePair"), u = { more: A, parts: ro, opener: e };
      c.classList.add("still"), c.style.transform = "", c.inert = !0, Ga.innerHTML = "", Ga.appendChild(c), Ga.classList.toggle("wide", Mt.classList.contains("wide")), Ga.hidden = !1, Mt.hidden = !0, Mt.innerHTML = "", A = { id: t, opener: e, back: null, frame: null, under: u, at: Number((i = e == null ? void 0 : e.dataset) == null ? void 0 : i.at) || null }, bl();
      return;
    }
    A = { id: t, opener: a ? A.opener : e, back: a ? A : null, frame: a ? A.frame || { wide: o.classList.contains("wide"), h: o.offsetHeight } : null, under: a ? A.under : null, at: Number((l = e == null ? void 0 : e.dataset) == null ? void 0 : l.at) || null }, bl();
  }
  let gl = !1;
  function bl() {
    ro = [], gl = !Mt.hidden, Je.forEach((t, e) => {
      e !== A.id && Mt.contains(t.el) && (t.destroy(), Je.delete(e));
    }), er(), gl = !1;
  }
  function Fi() {
    if (!A) return;
    const t = A;
    fm(Mt, () => {
      A === t && wl();
    });
  }
  function wl() {
    var o, i, l, c, u, f, y, S;
    const t = A == null ? void 0 : A.opener, e = A == null ? void 0 : A.under;
    A = null, Je.forEach((x, R) => {
      Mt.contains(x.el) && (x.destroy(), Je.delete(R));
    }), Ye.forEach((x, R) => {
      /^more2?:/.test(R) && Ye.delete(R);
    }), Mt.hidden = !0, Mt.innerHTML = "";
    const a = { preventScroll: !0 };
    if (e) {
      const x = Ga.firstElementChild;
      A = e.more, ro = e.parts, x && (x.inert = !1, Mt.appendChild(x)), Mt.classList.toggle("wide", Ga.classList.contains("wide")), Ga.hidden = !0, Ga.innerHTML = "", Mt.hidden = !1;
      const R = Mt.querySelector(".tfMore");
      R && (R.scrollTop = A.scroll || 0), er(), (i = (o = e.opener) != null && o.isConnected ? e.opener : Mt.querySelector("[data-more-close]")) == null || i.focus(a);
      return;
    }
    t != null && t.isConnected ? t.focus(a) : (l = t == null ? void 0 : t.dataset) != null && l.more ? (c = H.querySelector('[data-more="' + CSS.escape(t.dataset.more) + '"]')) == null || c.focus(a) : (u = t == null ? void 0 : t.dataset) != null && u.summary ? (f = H.querySelector('[data-summary="' + CSS.escape(t.dataset.summary) + '"]')) == null || f.focus(a) : (y = t == null ? void 0 : t.hasAttribute) != null && y.call(t, "data-favs-edit") && ((S = H.querySelector("[data-favs-edit]")) == null || S.focus(a));
  }
  const jf = { moisture: "moisture", light: "light", brightness: "light", temperature: "temperature", fertility: "fertility", conductivity: "fertility" };
  function zf(t) {
    const e = String(zt(t).problem || ""), a = "sensor." + t.split(".")[1] + "_";
    return e === "none" ? [] : e.split(",").map((o) => o.trim().split(" ")).map(([o, i]) => {
      const l = jf[o], c = a + l;
      if (!l || !M[c] || !Ln[l]) return "";
      const u = zt(c).unit_of_measurement || "", [f, y] = Ln[l], S = i === "low";
      return '<div class="tfMoreGroup tfPlantProblem"><div class="tfMoreGroupName">' + F(mt(c)) + '</div><svg class="tfGraph tfPlantGraph" data-plant-graph="' + F(c) + '" data-guide="' + (S ? f : y) + '" data-guide-word="' + F("Wants " + (S ? "" : "up to ") + (S ? f : y).toLocaleString() + (u === "%" ? "%" : u ? " " + u : "") + (S ? " or more" : "")) + '" role="img" aria-label="' + F(mt(c)) + ', last 24 hours"></svg></div>';
    }).filter(Boolean);
  }
  const dd = (t) => t.querySelectorAll("[data-plant-graph]").forEach((e) => md(e.dataset.plantGraph, e, { guide: Number(e.dataset.guide), guideWord: e.dataset.guideWord }).then(() => cc(e)));
  function vl(t, e, a, o = {}) {
    const i = e.map((P) => P[1]).concat(o.guide != null ? [o.guide] : []), l = o.zero ? 0 : Math.min(...i), c = Math.max(...i), u = Math.max(120, t.clientWidth || 260), f = Math.max(60, t.clientHeight || 130), y = 8, S = f - 20, x = Date.now() - 24 * 3600 * 1e3, R = 24 * 3600 * 1e3, E = (P) => Math.max(0, Math.min(u, (P - x) / R * u)), B = (P) => c === l ? (y + S) / 2 : S - (P - l) / (c - l) * (S - y);
    let k = "M" + E(e[0][0]).toFixed(1) + " " + B(e[0][1]).toFixed(1);
    if (e.length > 2) k = Xp(e.map((P) => [E(P[0]), B(P[1])]));
    else for (let P = 1; P < e.length; P++) k += o.smooth ? "L" + E(e[P][0]).toFixed(1) + " " + B(e[P][1]).toFixed(1) : "H" + E(e[P][0]).toFixed(1) + "V" + B(e[P][1]).toFixed(1);
    t.setAttribute("viewBox", "0 0 " + u + " " + f), t.setAttribute("aria-label", a), t.innerHTML = $p(u, y, S) + '<path d="' + k + "V" + S + "H" + E(e[0][0]).toFixed(1) + 'Z" fill="' + (o.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + k + '" fill="none" stroke="' + (o.colour || "var(--primary)") + '" stroke-width="' + De.graphs.weight + '" stroke-linejoin="round" stroke-linecap="round"/><text x="0" y="' + (f - 4) + '">24 h ago</text><text x="' + u + '" y="' + (f - 4) + '" text-anchor="end">Now</text>' + (o.guide != null ? '<line class="tfGuide" x1="0" x2="' + u + '" y1="' + B(o.guide).toFixed(1) + '" y2="' + B(o.guide).toFixed(1) + '"/><text class="tfGuideWord" x="' + u + '" y="' + (B(o.guide) < 20 ? B(o.guide) + 14 : B(o.guide) - 5).toFixed(1) + '" text-anchor="end">' + F(o.guideWord || "") + "</text>" : "");
  }
  const pd = { lock: ["unlocked", "open", "opening"], cover: ["open", "opening", "closing"], valve: ["open", "opening", "closing"], vacuum: ["cleaning", "returning"] }, Gf = (t, e) => {
    const a = t.split(".")[0];
    return pd[a] ? pd[a].includes(e) : a === "alarm_control_panel" || a === "climate" || a === "media_player" ? !["off", "standby", "disarmed", "unavailable", "unknown"].includes(e) : e === "on";
  }, Uf = (t) => {
    const e = t.split(".")[0], a = zt(t).device_class;
    return e === "binary_sensor" ? { moisture: "Wet", smoke: "Smoke", gas: "Gas", carbon_monoxide: "Carbon monoxide", safety: "Unsafe" }[a] || (as.includes(a) ? "Open" : "On") : { lock: "Unlocked", cover: "Open", valve: "Open", vacuum: "Cleaning", alarm_control_panel: "Armed" }[e] || "On";
  }, ud = /* @__PURE__ */ new Map();
  let Yf = 0;
  async function Zf(t) {
    var i;
    let e = ud.get(t);
    if (!e || Date.now() - e.at > 60 * 1e3) {
      let l = [];
      if (Ya(t) && Number.isFinite(Number((i = M[t]) == null ? void 0 : i.state))) l = hd(t).map(([c, u]) => [c, String(u)]);
      else try {
        const c = await D({ type: "history/history_during_period", start_time: new Date(Date.now() - 864e5).toISOString(), entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        l = ((c == null ? void 0 : c[t]) || []).map((u) => [u.lu != null ? u.lu * 1e3 : Date.parse(u.last_updated || u.last_changed), String(u.s ?? u.state)]).filter(([u]) => Number.isFinite(u));
      } catch {
      }
      l.length || (l = (ao || []).filter((c) => c.entity_id === t).map((c) => [c.when * 1e3, String(c.state)])), e = { at: Date.now(), pts: l }, ud.set(t, e);
    }
    const a = M[t], o = e.pts.slice().sort((l, c) => l[0] - c[0]);
    return a && (!o.length || o[o.length - 1][1] !== a.state) && o.push([Date.parse(a.last_changed) || Date.now(), a.state]), o;
  }
  async function fd(t, e, a) {
    const o = await Zf(t);
    if (!e.isConnected) return;
    const i = o.map(([C, rt]) => [C, Number(rt)]);
    if (o.length > 1 && i.every(([, C]) => Number.isFinite(C))) {
      vl(e, i, mt(t) + ", last 24 hours");
      return;
    }
    const l = Date.now(), c = l - 864e5, u = Math.max(200, e.clientWidth || 360), f = 62, y = (C) => Math.max(0, Math.min(u, (C - c) / 864e5 * u)), S = [];
    let x = null;
    o.forEach(([C, rt]) => {
      const Tt = Gf(t, rt);
      Tt && x == null ? x = Math.max(C, c) : !Tt && x != null && (S.push([x, Math.max(C, c)]), x = null);
    }), x != null && S.push([x, l]);
    const R = ys(t) ? "var(--danger)" : t.startsWith("light.") ? "#ffaa00" : "var(--primary)", E = Uf(t), B = "tfDayClip" + ++Yf, k = S.map(([C, rt]) => E + (rt >= l - 1e3 && C <= c + 1e3 ? " all day" : rt >= l - 1e3 ? " since " + Ja(C) : C <= c + 1e3 ? " until " + Ja(rt) : " " + Ja(C) + "–" + Ja(rt)));
    let P = "", _ = -1 / 0;
    S.forEach(([C], rt) => {
      const Tt = k[rt].length * 5.4, Bt = Math.min(y(C), u - Tt);
      Bt < _ + 8 || (P += '<text x="' + Bt.toFixed(1) + '" y="10">' + F(k[rt]) + "</text>", _ = Bt + Tt);
    });
    let z = '<text x="' + u + '" y="' + (f - 2) + '" text-anchor="end">Now</text>';
    [0, 6, 12, 18].forEach((C) => {
      let rt = new Date(l).setHours(C, 0, 0, 0);
      rt > l && (rt -= 864e5), y(rt) > 8 && y(rt) < u - 34 && (z += '<text x="' + y(rt).toFixed(1) + '" y="' + (f - 2) + '" text-anchor="middle">' + String(C).padStart(2, "0") + "</text>");
    }), e.setAttribute("viewBox", "0 0 " + u + " " + f), e.setAttribute("aria-label", mt(t) + ", last 24 hours: " + (k.length ? k.join(", ") : "no changes")), e.innerHTML = '<clipPath id="' + B + '"><rect x="0" y="18" width="' + u + '" height="26" rx="8"/></clipPath>' + P + '<rect x="0" y="18" width="' + u + '" height="26" rx="8" fill="var(--text)" fill-opacity=".1"/><g clip-path="url(#' + B + ')">' + S.map(([C, rt]) => '<rect x="' + y(C).toFixed(1) + '" y="18" width="' + Math.max(2, y(rt) - y(C)).toFixed(1) + '" height="26" fill="' + R + '"/>').join("") + "</g>" + (a && a >= c ? '<line x1="' + y(a).toFixed(1) + '" x2="' + y(a).toFixed(1) + '" y1="13" y2="49" stroke="var(--text)" stroke-width="2" stroke-linecap="round"/>' : "") + z;
  }
  function hd(t) {
    var o;
    const e = Number((o = M[t]) == null ? void 0 : o.state), a = Date.now();
    if (zt(t).state_class === "total_increasing") {
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
  async function md(t, e, a = {}) {
    var B, k;
    let o = ft.get(t);
    if (t.endsWith("_solar_power")) o = { at: Date.now(), points: Td() };
    else if (Ya(t)) o = { at: Date.now(), points: hd(t) };
    else if (!o || Date.now() - o.at > 5 * 60 * 1e3) {
      try {
        const P = new Date(Date.now() - 864e5).toISOString(), _ = await D({ type: "history/history_during_period", start_time: P, entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), z = ((_ == null ? void 0 : _[t]) || []).map((C) => [C.lu != null ? C.lu * 1e3 : Date.parse(C.last_updated || C.last_changed), Number(C.s ?? C.state)]).filter(([C, rt]) => Number.isFinite(C) && Number.isFinite(rt));
        o = { at: Date.now(), points: z };
      } catch {
        o = { at: Date.now(), points: [] };
      }
      ft.set(t, o);
    }
    const i = e || H.querySelector('[data-graph="' + CSS.escape(t) + '"]');
    if (!i) return;
    const l = M[t], c = ((B = l == null ? void 0 : l.attributes) == null ? void 0 : B.unit_of_measurement) || "", u = o.points.slice(), f = Number(l == null ? void 0 : l.state);
    if (Number.isFinite(f) && !t.endsWith("_solar_power") && u.push([Date.now(), f]), u.length < 2) {
      i.setAttribute("aria-label", mt(t) + ": no history for the last 24 hours"), i.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const y = u.map((P) => P[1]), S = Math.min(...y), x = Math.max(...y), R = (P) => P.toLocaleString(void 0, { maximumFractionDigits: Math.abs(P) >= 100 ? 0 : 1 }), E = ((k = l == null ? void 0 : l.attributes) == null ? void 0 : k.state_class) === "total_increasing";
    vl(i, u, mt(t) + ", last 24 hours: " + (E ? "+" + R(y[y.length - 1] - y[0]) : S === x ? R(S) : R(S) + " to " + R(x)) + (c ? " " + c : ""), { smooth: t.endsWith("_solar_power"), zero: t.endsWith("_solar_power"), ...a });
  }
  function gd() {
    const t = H == null ? void 0 : H.querySelector("[data-solar]");
    if (!t) return;
    const e = Td();
    vl(t, e, "Solar, last 24 hours: up to " + Re(Math.max(...e.map((a) => a[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function Kf(t, e) {
    const a = e.entity_id, o = ua.get(a) || {}, i = { open_cover: 100, close_cover: 0, set_cover_position: e.position, toggle: ka(a) > 0 ? 0 : 100 }[t], l = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: e.tilt_position }[t];
    i != null && (o.pos = i), l != null && (o.tilt = l), t === "stop_cover" && (delete o.pos, delete o.tilt), t === "stop_cover_tilt" && delete o.tilt, o.at = Date.now(), ua.set(a, o);
  }
  function bd(t, e, a) {
    var i;
    const o = a == null ? void 0 : a.entity_id;
    return t !== "light" || typeof o != "string" || !yo[o] || !$a(o) || a.brightness_pct != null || a.brightness != null ? [e, a] : e !== "turn_on" && !(e === "toggle" && ((i = M[o]) == null ? void 0 : i.state) !== "on") ? [e, a] : ["turn_on", { ...a, brightness_pct: yo[o] }];
  }
  function Fr(t, e, a, o) {
    let i = { entity_id: a, ...o || {} };
    return [e, i] = bd(t, e, i), t === "cover" && Kf(e, i), va[a] = (va[a] || 0) + 1, lo.set(_p, JSON.stringify(va)), ti.call(t, e, i) ? Promise.resolve() : Promise.resolve(I(t, e, i));
  }
  function yl(t) {
    const [e, a, o, i] = t.split("|");
    Fr(e, a, o, i ? JSON.parse(i) : null).catch(() => {
    });
  }
  function qr(t, e) {
    st.set("pos|" + t, e), kt("pos|" + t), xa.delete(t), ro = ro.map(() => ""), [H, Mt].forEach((o) => o.querySelectorAll('[data-blocks="' + CSS.escape(t) + '"]').forEach((i) => ws(i, e)));
    const a = H.querySelector('.tfAction[data-k="' + CSS.escape(t) + '"] .tfName .activityRowMeta');
    if (a && (a.textContent = Math.round(e) + "%"), (A == null ? void 0 : A.id) === t) {
      const o = Mt.querySelector(".tfMoreState"), i = Mt.querySelector(".tfMoreSub");
      o && (o.textContent = Math.round(e) + "%", o.classList.add("live")), i && (i.textContent = "Currently " + ka(t) + "%");
    }
    id(t).forEach((o) => o.update(Ni(t)));
  }
  const Xf = (t, e) => {
    const a = t.shiftKey ? 10 : 1, o = { ArrowUp: e + a, ArrowRight: e + a, ArrowDown: e - a, ArrowLeft: e - a, PageUp: e + 25, PageDown: e - 25, Home: 0, End: 100 }[t.key];
    return o == null ? null : Math.max(0, Math.min(100, Math.round(o)));
  };
  function $f(t, e) {
    var k;
    const a = t.dataset.blocks;
    (k = t.setPointerCapture) == null || k.call(t, e.pointerId), vt.add("pos|" + a), R("pos|" + a);
    const o = (P) => {
      const _ = t.getBoundingClientRect();
      return Math.max(0, Math.min(100, (P.clientX - _.left) / _.width * 100));
    }, i = o(e), l = e.clientX;
    let c = !1, u = pn(a), f = i, y = 0;
    const S = () => {
      u = Math.abs(f - u) < 0.2 ? f : u + (f - u) * 0.14, qr(a, u), y = requestAnimationFrame(S);
    }, x = () => {
      c || (c = !0, t.classList.add("fine"), y = requestAnimationFrame(S));
    }, R = setTimeout(x, 350), E = (P) => {
      f = o(P), Math.abs(P.clientX - l) > 6 && (clearTimeout(R), x());
    }, B = () => {
      clearTimeout(R), cancelAnimationFrame(y), t.removeEventListener("pointermove", E), t.removeEventListener("pointerup", B), t.removeEventListener("pointercancel", B), t.classList.remove("fine"), vt.delete("pos|" + a), qr(a, c ? Math.round(u) : (Math.min(3, Math.floor(i / 25)) + 1) * 25), Wr("pos", a);
    };
    t.addEventListener("pointermove", E), t.addEventListener("pointerup", B), t.addEventListener("pointercancel", B);
  }
  function wd(t) {
    var e;
    V = t.dataset.area, H.querySelectorAll(".tfAreaPanel").forEach((a) => {
      var i;
      const o = a === t;
      a.classList.toggle("active", o), a.setAttribute("aria-expanded", String(o)), (i = a.querySelector(".panelExpanded")) == null || i.toggleAttribute("inert", !o);
    }), xa.set("areas", O(((e = H.querySelector('[data-k="areas"]')) == null ? void 0 : e.style.order) || 1)), setTimeout(() => Es(!0), 340);
  }
  const qi = {
    bright: { value: (t, e) => Math.round(e * 100), text: (t, e) => e ? e + "%" : "Off", send: (t, e) => e > 0 ? ["light", "turn_on", { brightness_pct: e }] : ["light", "turn_off", {}] },
    ct: { value: (t, e) => {
      const [a, o] = Hn(t);
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
      const [a, o] = Hn(t);
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
  function Wi(t, e, a, o) {
    var y;
    const i = qi[e].value(a, o);
    st.set(e + "|" + a, i), kt(e + "|" + a);
    const l = Math.round(o * 100) + "%", c = t.querySelector("i");
    if (e === "tilt") {
      c.style.width = "calc((100% - 8px) * " + o + ")";
      const [S, x] = t.querySelectorAll("span");
      S.classList.toggle("lit", o > 0.08), x.classList.toggle("lit", o > 0.92), xa.delete(a), ro = ro.map(() => ""), id(a).forEach((R) => R.update(Ni(a)));
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
    u && (u.textContent = qi[e].text(a, i));
    const f = t.closest(".tfMore") ? t.closest(".tfMore").querySelector(".tfMoreState") : (y = t.closest(".tfAction")) == null ? void 0 : y.querySelector(".tfName .activityRowMeta");
    f && (f.textContent = qi[e].text(a, i));
  }
  function Wr(t, e) {
    const a = t + "|" + e, o = st.get(a), i = ht.get(a), [l, c, u] = qi[t].send(e, o), f = () => setTimeout(() => {
      ht.get(a) === i && st.delete(a), Pe();
    }, 1500);
    Fr(l, c, e, u).then(f, f);
  }
  function vd(t) {
    t.addEventListener("click", (e) => {
      var o;
      const a = e.target.closest("[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-fav-hide],[data-energy-pick],[data-more-page],[data-path],.tfAreaPanel");
      if (ea && !e.target.closest(".tfBoardMenu,[data-board-more]") && oo(), !(!a || !t.contains(a) || a.disabled))
        if (a.dataset.boardMore)
          (ea == null ? void 0 : ea.key) === a.dataset.boardMore ? oo(!0) : Ju(a.dataset.boardMore, a);
        else if (a.dataset.boardAct) Qu(ea.key, a.dataset.boardAct);
        else if (a.dataset.boardShow) Is(a.dataset.boardShow);
        else if (a.dataset.favHide) qc(a.dataset.favHide, !1);
        else if (a.dataset.energyPick) ic(a.dataset.energyPick);
        else if (a.dataset.act) yl(a.dataset.act);
        else if (a.hasAttribute("data-details")) pl(!(A != null && A.details));
        else if (a.hasAttribute("data-details-close")) pl(!1);
        else if (a.dataset.summary) ko(a.dataset.summary, a);
        else if (a.dataset.star) Qt(a.dataset.star);
        else if (a.hasAttribute("data-more-back")) {
          const i = A.id;
          A = A.back, bl(), (o = Mt.querySelector('.tfMore [data-more="' + CSS.escape(i) + '"]')) == null || o.focus({ preventScroll: !0 });
        } else a.hasAttribute("data-favs-edit") ? Ii("favourites", a) : a.dataset.acts ? JSON.parse(a.dataset.acts).forEach(([i, l, c, u]) => Fr(i, l, c, u).catch(() => {
        })) : a.dataset.more ? Ii(a.dataset.more, a) : a.hasAttribute("data-more-close") ? Fi() : a.dataset.morePage ? Oi(a.hasAttribute("data-more-toggle") && ((A == null ? void 0 : A.page) || 0) === Number(a.dataset.morePage) ? 0 : Number(a.dataset.morePage), a.dataset.moreMode ?? null, !0) : a.dataset.path ? eo(a.dataset.path) : a.dataset.go ? Jc("room:" + a.dataset.go) : a.hasAttribute("data-area-back") ? al() : a.classList.contains("tfAreaPanel") && !a.classList.contains("active") && wd(a);
    }), t.addEventListener("keydown", (e) => {
      var o, i, l, c, u, f, y;
      const a = e.target;
      if ((o = a.dataset) != null && o.more && a.tagName !== "BUTTON" && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), Ii(a.dataset.more, a)), (i = a.dataset) != null && i.energyPick && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), ic(a.dataset.energyPick)), (l = a.classList) != null && l.contains("tfAreaPanel") && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), wd(a)), (c = a.dataset) != null && c.summary && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), ko(a.dataset.summary, a)), e.key === "Escape" && ea && t === H) {
        e.preventDefault(), oo(!0);
        return;
      }
      if (e.key === "Escape" && sa && t === H) {
        e.preventDefault(), Os(!1), (u = p("dashEditNav")) == null || u.focus();
        return;
      }
      if (e.key === "Escape" && Q && t === H && (e.preventDefault(), al()), (f = a.dataset) != null && f.blocks) {
        const S = a.dataset.blocks, x = Xf(e, Math.round(pn(S)));
        if (x == null) return;
        e.preventDefault(), qr(S, x), clearTimeout(Bn.get(S)), Bn.set(S, setTimeout(() => Wr("pos", S), 500));
        return;
      }
      if ((y = a.dataset) != null && y.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
        e.preventDefault();
        const [S, x] = a.dataset.drag.split("|"), R = Number(a.getAttribute("aria-valuenow")) / 100, E = e.key === "Home" ? 0 : e.key === "End" ? 1 : Math.max(0, Math.min(1, R + (e.key === "ArrowLeft" || e.key === "ArrowDown" ? -0.05 : 0.05)));
        Wi(a, S, x, E), Wr(S, x);
      }
    }), t.addEventListener("pointerdown", (e) => {
      var Gt;
      const a = e.target.closest("[data-blocks]");
      if (a && e.button === 0) {
        e.preventDefault(), $f(a, e);
        return;
      }
      const o = e.target.closest("[data-drag]");
      if (!o || e.button > 0) return;
      const [i, l] = o.dataset.drag.split("|"), c = i === "bright" && !$a(l), u = e.pointerType !== "mouse";
      if (c && !u) {
        yl(Et("light", "toggle", l));
        return;
      }
      const f = i === "bright" && ((Gt = M[l]) == null ? void 0 : Gt.state) !== "on", y = i + "|" + l;
      vt.add(y), kt(y);
      const S = i === "tilt" ? 4 : 0, x = o.dataset.axis === "y", R = () => x ? o.getBoundingClientRect().height : o.getBoundingClientRect().width - S * 2, E = (Ut) => {
        const Ct = o.getBoundingClientRect();
        return Math.max(0, Math.min(1, x ? 1 - (Ut.clientY - Ct.top) / R() : (Ut.clientX - Ct.left - S) / R()));
      };
      let B = u ? "waiting" : f ? "pressed" : "dragging", k = 0;
      const P = e.clientX, _ = e.clientY, z = (Ut, Ct) => Math.hypot(Ut.clientX - P, Ut.clientY - _) > Ct, C = () => {
        try {
          o.setPointerCapture(e.pointerId);
        } catch {
        }
      };
      u || (e.preventDefault(), C()), B === "dragging" && Wi(o, i, l, E(e));
      const rt = () => {
        var Ut, Ct;
        B = "sliding", ia = o, o.classList.add("held"), C(), (Ut = navigator.userActivation) != null && Ut.hasBeenActive && ((Ct = navigator.vibrate) == null || Ct.call(navigator, 8)), k = f ? (yo[l] ?? 100) / 100 : Number(o.getAttribute("aria-valuenow")) / 100;
      }, Tt = (Ut) => {
        B === "waiting" && z(Ut, wa) ? !c && (x ? Math.abs(Ut.clientY - _) > Math.abs(Ut.clientX - P) : Math.abs(Ut.clientX - P) > Math.abs(Ut.clientY - _)) ? rt() : B = "gone" : B === "pressed" && z(Ut, 4) && (B = "dragging"), B === "sliding" ? Wi(o, i, l, Math.max(0, Math.min(1, k + (x ? _ - Ut.clientY : Ut.clientX - P) / R()))) : B === "dragging" && Wi(o, i, l, E(Ut));
      }, Bt = (Ut) => {
        ["pointermove", "pointerup", "pointercancel"].forEach((Ct, Dt) => o.removeEventListener(Ct, Dt ? Bt : Tt)), o.classList.remove("held"), ia === o && (ia = null), vt.delete(y), B === "sliding" || B === "dragging" ? Wr(i, l) : Ut.type === "pointerup" && c ? yl(Et("light", "toggle", l)) : Ut.type === "pointerup" && f && (B === "waiting" || B === "pressed") && Fr("light", "turn_on", l).catch(() => {
        }), re && B !== "sliding" && B !== "dragging" && Pe();
      };
      o.addEventListener("pointermove", Tt), o.addEventListener("pointerup", Bt), o.addEventListener("pointercancel", Bt);
    }), t.addEventListener("touchmove", (e) => {
      ia && e.cancelable && e.preventDefault();
    }, { passive: !1 });
  }
  return H && w && (jn(), vd(H), vd(Mt), Mt.addEventListener("click", (t) => {
    t.target === Mt && Fi();
  }), (yd = n.getElementById("homeNav")) == null || yd.addEventListener("click", () => {
    Q && al();
  }), (xd = n.querySelector(".bottomNav")) == null || xd.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + es + "</button>"), (Md = p("dashEditNav")) == null || Md.addEventListener("click", () => T ? $s(!Do) : Os(!sa)), H.addEventListener("pointerdown", yf), H.addEventListener("pointerdown", Ku), H.addEventListener("click", (t) => {
    T && Do && t.target.closest(".tfBoardItem") && (t.preventDefault(), t.stopPropagation());
  }, !0), H.addEventListener("scroll", (t) => {
    var e;
    (e = t.target.classList) != null && e.contains("hcFadeList") && _c(t.target);
  }, !0), new ResizeObserver(() => {
    g.classList.contains("tfDash") && Ss() !== Ms ? Pe() : Ai();
  }).observe(H), window.addEventListener("resize", Ai, { passive: !0 }), Mt.addEventListener("keydown", (t) => {
    var e, a;
    if (t.key === "Escape")
      t.stopPropagation(), A != null && A.details ? pl(!1) : Fi();
    else if ((t.key === "ArrowLeft" || t.key === "ArrowRight") && ((a = (e = t.target).closest) != null && a.call(e, ".tfMoreDots"))) {
      t.preventDefault();
      const o = [...Mt.querySelectorAll(".tfMoreDots [data-more-page]")], i = o.findIndex((c) => c.getAttribute("aria-selected") === "true"), l = o[Math.max(0, Math.min(o.length - 1, i + (t.key === "ArrowRight" ? 1 : -1)))];
      l && Oi(Number(l.dataset.morePage), l.dataset.moreMode ?? null, !0);
    }
  })), Y(), {
    update(t) {
      if (!w) return;
      const e = !Object.keys(M).length;
      M = { ...Object.fromEntries(Object.entries(M).filter(([o]) => Ya(o))), ...t || {} };
      for (const o in M) o.startsWith("light.") && M[o].state === "on" && $a(o) && Oe(o, mo(M[o]));
      e ? za() : Pe();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      cn = !0, Me == null || Me.destroy(), Me = null, Ce == null || Ce.forEach((t) => t.destroy()), Ce = null;
    },
    resume() {
      cn = !1, !(!w || !(H != null && H.querySelector("[data-tf]"))) && (Ma.isConnected && ai(Ma.style.order), ni());
    }
  };
}
const Z0 = "0.13.3";
function K0() {
  if (document.getElementById("homecore-fonts")) return;
  const n = document.createElement("link");
  n.id = "homecore-fonts", n.rel = "stylesheet", n.href = "https://fonts.googleapis.com/css2?family=Geist:wght@200;300;400;500;600;700&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(n);
}
class X0 extends HTMLElement {
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
    K0();
    const r = this.shadowRoot || this.attachShadow({ mode: "open" });
    r.innerHTML = `<style>${oh}${nh}${rh}${ih}</style>${sh}`;
    const d = r.getElementById("app");
    d.style.opacity = "0", this._shell = dh(r, {
      setLight: (p) => this.classList.toggle("lightBody", p),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._test = Y0(r, { config: this._config, getHass: () => this._hass }), this._test.update(this._hass.states), dm(r, d), um(r), this.isConnected || this._test.suspend(), d.style.transition = "opacity .2s ease", d.style.opacity = "";
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
customElements.get("homecore-card") || (customElements.define("homecore-card", X0), window.customCards = window.customCards || [], window.customCards.push({
  type: "homecore-card",
  name: "HomeCore",
  description: "A test environment for the HomeCore design language.",
  preview: !1
}), console.info(`%c HOMECORE %c ${Z0} `, "background:#03a9f4;color:#090909;font-weight:700", ""));
