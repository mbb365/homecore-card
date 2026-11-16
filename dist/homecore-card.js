const Tu = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-accent-secondary:#d0ff00;--color-text-accent:#d0ff00;--color-text-on-accent:#090909;--color-bg-resting:#1f7a4d;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--accent-text:var(--color-text-accent);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary);--secondary:var(--color-accent-secondary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-text-accent:#26221e;--color-accent-secondary:#03a9f4;--color-bg-resting:#7dbb98;--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#26221e;--color-text-on-selected:#fbf9f6;--color-bg-segment-selected:#fbf9f6;--color-accent-primary:#0288d1;--color-border-focus:#0288d1;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.pill,.primary,.navBtn,.tab,.back{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.hcAreaGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.hcAreaPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.hcAreaPanel.active{flex:7 1 0;min-width:0;cursor:default}.hcAreaPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.hcAreaPanel:before,.hcAreaPanel:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.hcAreaPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.hcAreaPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}#app.light .hcAreaPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.hcAreaPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.hcAreaPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.hcAreaPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}@media (max-width:900px){.hcAreaGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.hcAreaPanel,.hcAreaPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.panelCollapsed{display:none}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.sectionLabel{margin:0 0 8px 22.4px}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.toggleList{display:grid;gap:9.6px}.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.grid{grid-template-columns:1fr}}@media (max-width:620px){#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}}.card,.panel,.tile{border-radius:var(--r-card)}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .hcAreaPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.grid>*{min-width:0}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}:host{--primary:#03A9F4;--secondary:#D0FF00;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.activityRowMeta{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.toggleRow strong,.primary,.tab,.themeBtn,.wxLayoutBtn,.toast{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.note,.settingsSelect,.pill{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.metaTable th,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.hcAreaGallery,.hcAreaPanel{height:340px}@media (max-width:900px){.hcAreaPanel,.hcAreaPanel.active{height:320px}}@media (max-width:900px){.hcAreaGallery{height:auto}.hcAreaPanel,.hcAreaPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel{margin-left:16px}.grid{gap:8px}.sectionLabel{margin-bottom:8px}.hcAreaGallery{gap:8px}.hcAreaPanel,.hcAreaPanel.active{flex:0 0 100%;min-width:100%}.card,.hcAreaPanel{padding:16px}.activityRows{gap:8px}.activityRow{padding:10px 12px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}@media (prefers-reduced-motion: reduce){.sheet{transition:none}}.card,.panel,.hcAreaPanel.active{padding:var(--inset)}.hcAreaPanel{border-radius:var(--r-tile);padding:var(--inset)}.hcAreaPanel.active,.activityRow{border-radius:var(--r-tile)}.activityRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.activityRowMeta{color:var(--text)}.activityRowMeta{margin-top:0}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}#app{--group-bg:var(--card)}.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .note{margin:0 4px 4px}#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}', Du = `#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}:is(#homeView,.tfMoreBackdrop,.tfEditTray,.tfMiniPhone) .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)),#homeView .tfATile{transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover,#homeView .tfATile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .wxWide{gap:16px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}@media (max-width:620px){#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--text)}#app.house.light{--hc-icon:#e6e6e6}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house .tfAreaHead .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house .tfAreaHead .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}.tfCard .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfAction>.tfActionHead{margin-bottom:auto}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .toggleRow:has(>.themeChoice,>.settingsSelect){flex-direction:column;align-items:stretch;gap:12px}#housePane .toggleRow>.settingsSelect{width:100%}#housePane .themeChoice[hidden]{display:none}#housePane .houseTab>.card:has(>.tfSetGroup){gap:24px}#housePane .tfSetGroup{display:grid;gap:8px}#housePane .tfSetGroup>.sectionLabel{margin:0 16px}#housePane{container:housepane/inline-size}#housePane .tfLightCards{display:none}@container housepane (width < 720px){#housePane .houseTab .metaTableWrap{display:none}#housePane .tfLightCards{display:grid;gap:8px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDacPad{min-width:0}.tfDacPad>dual-controller-v3{display:block}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}:is(.tfStep,.tfSeg,.tfBlocks,.tfTilt,.tfChips){font-family:var(--font-tile)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:0 1 46px;min-width:32px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);cursor:pointer}.tfStep svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfStep output{flex:1 0 auto;white-space:nowrap;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}#housePane .themeChoice,.tfBoardMenu .tfHeightTabs,.wb .wbSegments{gap:4px;padding:4px;border:0;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}#housePane .themeChoice{display:flex;flex-wrap:nowrap;width:100%}#housePane .themeChoice>button{flex:1 1 0;overflow:hidden;text-overflow:ellipsis}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button){height:38px;min-width:0;min-height:0;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile)!important;white-space:nowrap;cursor:pointer}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button):hover:not(:disabled):not([aria-pressed=true]):not([aria-checked=true]):not(.active){background:transparent;color:var(--text)}:is(#housePane .themeChoice :is(.wxLayoutBtn[aria-pressed=true],.themeBtn.active),.tfBoardMenu .tfHeightTabs button[aria-checked=true],.wb .wbSegments button[aria-pressed=true]){background:var(--bright);color:var(--on-bright)}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfAreaPanel .hcAreaPanelTop>div{min-width:0}.tfATags{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:4px;margin-left:auto;min-width:0}.tfATags .sourceTag{display:block;margin:0;max-width:100%;padding:6px 12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none;container:blocks/inline-size}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:12px 4px 4px 12px}.tfBlocks>span:nth-child(4){border-radius:4px 12px 12px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 14px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b small{font:inherit}@container blocks (width < 164px){.tfBlocks b small{display:none}}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.tfTilt i{position:absolute;top:4px;bottom:4px;left:4px;border-radius:12px;background:var(--primary)}.tfTilt span{position:relative;padding:0 16px;color:var(--text);font:600 14px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns svg{fill:none}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}#app.house .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}#app.house .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-l);--g1:var(--g1-l);--g2:var(--g2-l)}#app.house .tfSum[data-summary=climate] .tfIcon svg path{fill:url(#hcClimateGrad)}.tfGradDefs{position:absolute;width:0;height:0;overflow:hidden;pointer-events:none}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMoreBackdrop.tfMoreUnder{z-index:179;pointer-events:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}.tfMoreTileHead .tfName{display:grid;flex:1;min-width:0;cursor:default}.tfMoreTileHead :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreTileHead .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfMoreTileHead div.tfIcon{cursor:default}.tfMoreTileHead.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreTileHead.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMorePages{display:grid;grid-auto-flow:column;grid-auto-columns:100%;align-items:start;gap:20px;flex:none;overflow-x:auto;overflow-y:hidden;overscroll-behavior-x:contain;scroll-snap-type:x mandatory;scrollbar-width:none;transition:height .25s cubic-bezier(.2,.7,.3,1)}@media (prefers-reduced-motion:reduce){.tfMorePages{transition:none}}.tfMorePages::-webkit-scrollbar{display:none}.tfMorePage{display:flex;flex-direction:column;gap:14px;min-width:0;scroll-snap-align:start;scroll-snap-stop:always}.tfMoreSpace{flex:none;display:flex;flex-direction:column;justify-content:space-between;gap:12px;height:224px;padding:18px;border-radius:16px;background:var(--tile);overflow:hidden}.tfMoreSpace.tfMoreFill{justify-content:center;align-items:center;height:auto;padding:0;background:none;border-radius:0}.tfMoreSpace.tfMoreFill>.tfCoverArt{width:100%;height:auto;max-width:none;align-self:center}.tfMoreSpace.tfMoreFill>.tfDacPad{width:100%;height:100%}.tfMoreBig{display:flex;align-items:baseline;min-width:0;font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfMoreBig.live{color:var(--primary)}.tfMoreNum{overflow:hidden;text-overflow:ellipsis}.tfMoreUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfMoreFacts{display:flex;flex:1;flex-direction:column;justify-content:space-evenly;min-height:0}.tfMoreFact{display:flex;justify-content:space-between;gap:16px;font:400 14px/20px var(--font)}.tfMoreFact span:first-child{color:var(--muted)}.tfMoreFact span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreGraph{display:flex;flex:none;flex-direction:column;gap:6px}.tfMoreGraph .tfMoreGroupName{margin:0}.tfMoreGraph .tfGraph.tfDay{width:100%}.tfMoreDots{display:flex;flex:none;justify-content:center;gap:4px;margin-top:-4px}.tfMoreDots button{display:grid;place-items:center;width:24px;height:24px;min-height:0;padding:0;border:0;background:none;cursor:pointer}.tfMoreDots button:before{content:"";width:8px;height:8px;border-radius:50%;background:var(--muted);opacity:.45;transition:opacity .15s ease,background .15s ease}.tfMoreDots button[aria-selected=true]:before{background:var(--text);opacity:1}.tfMoreDots.tfMorePageIcons{gap:3px;align-self:center;margin-top:0;padding:3px;border-radius:19px;background:var(--tile)}.tfMoreDots.tfMorePageIcons button{width:48px;height:32px;border-radius:16px;color:var(--muted);transition:background .15s ease,color .15s ease}.tfMoreDots.tfMorePageIcons button:before{display:none}.tfMoreDots.tfMorePageIcons button svg{width:20px;height:20px;fill:currentColor}.tfMoreDots.tfMorePageIcons button[aria-selected=true]{background:var(--text);color:var(--card)}.tfMoreDots.tfMorePageIcons button:not([aria-selected=true]):hover{color:var(--text)}#homeView .grid>.tfDashTiles>.tfAction.tfHeadOnly,#homeView .grid .tfAction.tfHeadOnly{align-self:start}.tfMoreLink{margin-top:auto}.tfMoreLink svg{transform:none!important}.tfMorePage .tfMoreRows{flex:none}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card.tfCard{container-type:inline-size}#homeView .card.tfCard .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMorePair.still{animation:none}#app[data-more=sheet] .tfMore{width:min(640px,100vw)}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}#homeView .hcAreaPanel.tfAreaPanel{padding:18px 20px 10px}.tfAreaPanel .tfATiles{margin-inline:-10px}.tfAreaPanel .hcAreaPanelTop{justify-content:flex-start;gap:14px;padding:0}.tfAreaPanel .panelExpanded{justify-content:flex-start;gap:16px}.tfAreaPanel .icon{width:22px;height:22px}.tfATitle{display:flex;flex-direction:column;align-items:flex-start;min-width:0}#app .tfAName{max-width:100%;min-height:0;padding:0;border:0;border-radius:6px;background:none;color:var(--text);font:700 24px/1.2 var(--font-tile);letter-spacing:-.01em;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.tfAreaIcon{flex:none;border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}button.tfAreaIcon{cursor:pointer}.tfAreaGlyph{display:grid;place-items:center}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{display:grid;grid-template-columns:repeat(var(--peg-n),var(--peg-w));grid-auto-rows:60px;grid-auto-flow:row dense;align-items:stretch;gap:16px;max-width:none}#app.tfWeatherOpen .tfBento.tfPegs .wbItem{width:auto;min-height:0;align-self:stretch;display:flex;flex-direction:column}#app.tfWeatherOpen .tfBento.tfPegs .wbItem>*{flex:1;min-height:0}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=wide]{grid-column:span 2;grid-row:span 5}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=double]{grid-column:span 2;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=tile]{grid-column:span 1;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbCard.wbSquare{aspect-ratio:auto}#app.tfWeatherOpen .tfBento.tfPegs .wbWeather .wbNow{margin-bottom:auto}#app.tfWeatherOpen .tfBento.tfPegs :is(.wbStripScroll,.wbBars .wbDayBars,.wbBars.wbTabbed .wbDayBars){min-height:0}.tfABig{display:flex;flex-direction:column;align-items:flex-start;gap:4px;margin-top:auto;min-height:0;height:auto;padding:0;border:0;border-radius:8px;background:none;color:var(--text);text-align:start;cursor:pointer}.tfABigMain{font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfABigMain.long{font-size:40px}.tfABigUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfABigSub{max-width:100%;overflow:hidden;color:var(--muted);font:400 16px/1.2 var(--font);white-space:nowrap;text-overflow:ellipsis}.tfATiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));min-height:calc(2 * var(--tile-min));align-content:end}.tfABig{max-width:100%}.panelExpanded:not(:has(.tfATiles)) .tfABig{margin-bottom:calc(2 * var(--tile-min) + 16px)}#app.tfBoard .tfAreas[data-rows="5"] .tfACMain{position:absolute;left:10px;right:10px;bottom:170.3px;max-width:none;text-align:center}#app.tfBoard .tfAreas[data-rows="4"] .tfACMain{position:absolute;left:10px;right:10px;bottom:164.1px;max-width:none;text-align:center}#app.tfBoard .tfAreas[data-rows="4"] .panelExpanded:not(:has(.tfATiles)) .tfABig{margin-bottom:calc(2 * var(--tile-min) + 12px)}.tfATile{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile)}.tfATile>:is(div,.tfName):last-child{min-width:0}.tfATile .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfATile.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfATile :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:18px 0 10px;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:6px;max-width:calc(100% - 20px)}.tfACMain{max-width:calc(100% - 20px);font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px);min-height:60px}.tfACTiles:has(>:nth-child(3)){margin-top:-60px}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}.tfACTiles:has(>:nth-child(2)){margin-top:-60px}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{gap:28px;padding:40px;background:var(--bg)}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:-20px -20px 0 0}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead) .activityTitle{font-size:24px}@media (max-width:620px){#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:0}}@media (min-width:621px){#app:not([data-more=sheet]) .tfMoreBackdrop.wide{place-items:start center}}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px}.tfMoreActions .tfAction{grid-column:auto}.tfMoreActions>.activityRow{align-self:start;display:grid;grid-auto-flow:column;grid-template-columns:auto minmax(0,1fr);align-items:center;align-content:start;gap:12px;min-width:0;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfMoreActions>.activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreActions>.tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreActions>.activityRow :is(.activityRowName,.activityRowMeta){display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreActions>.activityRow.alert .activityRowMeta{color:var(--danger)}@media (max-width:620px){.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash :is(.tfDash-aq,.tfDash-pollen,.tfDash-radar,.tfDash-hourly,.tfDash-sun,.tfDash-moon,.tfDash-uv,.tfDash-humidity,.tfDash-pressure,.tfDash-wind,.tfDash-visibility){order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app .tfNotAdded{display:none!important}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:1 0 409px}#app.tfDash .tfAreaPanel:not(.active){flex:0 0 128px}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;margin-top:auto;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(auto-fit,minmax(140px,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app.house .tfDashBento .wbItem[data-size]{width:100%}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}.tfDash-wx .wbCondition{display:none}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .hcAreaGallery,#app.tfBoard .tfAreas .hcAreaPanel{height:100%;min-height:0}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;pointer-events:none;color:var(--text)}.tfBoardCells svg{display:block;overflow:visible}.tfBoardCells pattern circle{fill:currentColor;fill-opacity:.16}.tfBoardCells .tfGridCross{fill:none;stroke:currentColor;stroke-opacity:.45;stroke-width:1.5;stroke-linecap:round}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfHeight{display:grid;gap:6px;padding:6px 6px 8px}.tfHeightLabel{padding:0 6px;color:var(--muted);font:500 12px/16px var(--font)}.tfHeightTabs{display:grid;grid-template-columns:repeat(5,1fr)}.tfBoardMenu .tfHeightTabs button{justify-content:center}.tfBoardMenu .tfHeightTabs button:disabled{opacity:.35}.tfWidth{padding-top:0}.tfWidth .tfHeightTabs{grid-template-columns:repeat(3,auto)}.tfSourceList{display:grid;gap:2px}.tfBoardMenu .tfSourceList button[aria-checked=true]{background:var(--bright);color:var(--on-bright)}.tfBoardMenu .tfSourceList button[aria-checked=true]:hover{background:var(--bright)}.tfBoardMenu .tfWidth .tfHeightTabs button{white-space:nowrap}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows{grid-auto-rows:var(--fill-row,60px);margin-top:0}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows>.activityRow{min-height:0;height:var(--fill-row,60px);box-sizing:border-box}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]{padding:0;gap:0}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityHeader,#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.tfDashGraph{display:none}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityRows{margin:0;flex:1}#app.tfBoard .tfBoardItem.tfAction[data-rows="1"]{padding:10px;border-radius:24px}.tfRoomTile{cursor:pointer}.tfRoomTile .tfRoomIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomInline,.tfRoomSub{display:none}.tfRoomReading{display:flex;flex-direction:column;gap:4px;min-width:0}.tfRoomBig{overflow:hidden;color:var(--text);font:500 46px/46px var(--font-tile);letter-spacing:-.92px;white-space:nowrap;text-overflow:ellipsis}.tfRoomSub{overflow:hidden;color:var(--muted);font:400 16px/19px var(--font);white-space:nowrap;text-overflow:ellipsis}.tfRoomDevices{display:flex;gap:12px}.tfRoomDevices .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfRoomDevices .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}#app.tfBoard .tfRoomTile[data-rows="1"] .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-rows="1"] :is(.tfRoomReading,.tfRoomDevices),#app.tfBoard .tfRoomTile[data-rows="2"] .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfActionHead .activityRowMeta{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfRoomSub{display:block}#app.tfBoard .tfRoomTile[data-rows="4"] .tfRoomBig{font-size:52px;line-height:52px;letter-spacing:-1.92px}#app.tfBoard .tfRoomTile[data-rows="5"] .tfRoomBig{font-size:64px;line-height:64px;letter-spacing:-1.92px}#app.tfBoard .tfRoomTile[data-cols="1"]:is([data-rows="3"],[data-rows="4"],[data-rows="5"]) .tfRoomDevices{display:grid;grid-template-columns:repeat(2,max-content)}#app.tfBoard .tfRoomTile[data-cols="1"][data-rows="3"]:has(.tfRoomDevices) .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-cols="1"][data-rows="3"]:has(.tfRoomDevices) .tfRoomReading{display:none}#app.tfBoard .tfRoomTile[data-cols="1"]:is([data-rows="4"],[data-rows="5"]) .tfRoomDevices{min-height:calc(2 * var(--chip-size) + 12px);align-content:start}.tfRoomHeads{display:none;gap:12px 16px}.tfRoomDev{display:flex;align-items:center;gap:12px;min-width:0;padding:0;border:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfRoomDev .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomDev .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfRoomDevName{display:flex;flex-direction:column;min-width:0}.tfRoomDevName>span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]){flex-direction:row;align-items:center;gap:12px}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"])>.tfActionHead{flex:1;margin-bottom:0}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]) .tfRoomDevices{display:flex}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomHeads{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-cols="2"]):not([data-rows="1"]) .tfRoomHeads{grid-template-columns:repeat(4,minmax(0,1fr))}#app.tfBoard .tfRoomTile[data-cols="2"][data-rows="2"] .tfRoomDev:nth-child(n+3){display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]):has(.tfRoomDevices) .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]):has(.tfRoomDevices) .tfRoomReading{display:none}#app.tfBoard .tfDashBento[data-rows="1"] .wbCard{padding:10px;border-radius:24px}#app.tfBoard .tfDashBento[data-rows="1"] .wbVisual{display:none}#app.tfBoard .tfDash-wx[data-rows="1"] .wbNow{margin:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbWx.wbS90{width:40px;height:40px;border-radius:12px}#app.tfBoard .tfDashBento[data-rows] :is(.wb,.wbBento,.wbItem){height:100%;min-height:0}#app.tfBoard .tfDashBento[data-rows] .wbCard{height:100%;min-height:0;box-sizing:border-box;aspect-ratio:auto}#app.tfBoard .tfDash-wx[data-rows="1"] .wbDeg{font-size:20px;letter-spacing:0;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbPlace{font-size:13px;line-height:18px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbUnit{font-size:14px;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbWx.wbS90{width:100px;height:100px;border-radius:31px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbDeg{font-size:80px;line-height:80px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbUnit{font-size:30px;line-height:38px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbWeather{flex-direction:row;align-items:center;gap:16px}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNow{flex:none}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNextHours{display:flex;flex:1 1 0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbWeather{justify-content:center;padding-top:0;padding-bottom:0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) :is(.wbNow,.wbSummary){display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbColumns{display:flex;flex:none;height:185px}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsDay{display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsNow{display:inline}#app.tfBoard .tfDash-wx[data-narrow] .wbCard.wbWeather{gap:12px;padding:18px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbWx.wbS90{width:64px;height:64px;border-radius:20px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbDeg{font-size:46px;line-height:46px;letter-spacing:-.92px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbUnit{font-size:20px;line-height:26px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-narrow] .wbHalves{display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="3"] .wbNextHours{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow] .wbHour:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;flex:none;height:auto;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumn:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbHalves{display:none}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx:not([data-narrow])[data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="4"]) .wbSummary{display:none}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) :is(.wbColumns,.wbHalves){display:none}#app.tfBoard .tfDash-wx[data-rows="4"] .wbColumns{flex:1 1 0;height:auto;min-height:0;margin-top:0}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn{justify-content:flex-start;gap:8px;padding:12px 0 16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn .wbWx{width:40px;height:40px;border-radius:16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbTemps{gap:4px}#app.tfBoard .tfDash-wx[data-rows="4"] .wbHalves>:nth-child(n+5){display:none}#app.tfBoard .tfDash-energy[data-rows="2"] .tfDashGraph{display:none}#app.tfBoard .tfDash-energy:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) .activityRows{grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr)}#app.tfBoard .tfDash-energy[data-rows="3"] .tfDashGraph{min-height:0}#app.tfBoard .tfDashBento[data-rows="2"] .wbBaseRows{display:none}#app.tfBoard .tfDashBento[data-rows="2"] :is(.wbRadar,.wbCompareBars,.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfDashBento[data-rows="3"] :is(.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfAreas[data-rows="1"] .hcAreaPanel.tfAreaPanel{padding:10px}#app.tfBoard .tfAreas[data-rows="1"] .panelExpanded{display:grid;grid-template-columns:40px minmax(0,1fr);gap:0 12px;align-content:center}#app.tfBoard .tfAreas[data-rows="1"] :is(.panelExpanded>.hcAreaPanelTop,.tfACTop){display:contents}#app.tfBoard .tfAreas[data-rows="1"] .panelExpanded .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] .tfATitle .tfAName{font-size:14px;line-height:20px;height:auto}#app.tfBoard .tfAreas[data-rows="1"] .tfABig{margin:0;flex-direction:row}#app.tfBoard .tfAreas[data-rows="1"] .tfABigMain{font-size:14px;line-height:18px;letter-spacing:0}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfABigUnit){font-size:14px}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfABigSub,.tfATiles,.tfACTiles,.sourceTag){display:none}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed{display:grid;grid-template-columns:40px minmax(0,1fr);column-gap:12px;align-content:center;padding:0}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfACName,.tfACMain){margin:0;font-size:14px;line-height:18px;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.tfBoard .tfAreas:is([data-rows="2"],[data-rows="3"]) .tfABig{display:none}#app.tfBoard .tfAreas[data-rows="4"] .tfABig{flex:none;margin-top:auto;margin-bottom:auto}#app.tfBoard .tfAreas[data-rows="4"] .tfATiles{margin-top:0}#app.tfBoard .tfAreas[data-rows="4"] .tfABigMain{font-size:52px}#app.tfBoard .tfAreas[data-rows="4"] .panelExpanded{row-gap:12px}#app.tfBoard .tfAreas:is([data-rows="2"],[data-rows="3"],[data-rows="4"]) .tfATiles{margin-top:auto}#app.tfBoard .tfAreas[data-rows="2"] .tfATile:nth-child(n+3),#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfATile:nth-child(n+5){display:none}#app.tfBoard .tfAreas[data-rows="2"] .tfACTiles{display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTile:nth-child(n+3){display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACollapsed{justify-content:flex-start;gap:10px}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTiles{margin-top:auto}.tfEditTray{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px));right:0;bottom:0;z-index:160;display:flex;width:608px;max-width:calc(100vw - 56px);transform:translate(100%);transition:transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfEditTray.open{transform:none}.tfEditTray.open.tucked{transform:translate(100%)}.tfEditTray.open :is(.tfTrayInner,.tfTrayTuck){pointer-events:auto}.tfTrayTuck{position:absolute;top:20px;left:-52px;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border:0;border-radius:var(--r-inner);background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;--mdc-icon-size:22px}.tfTrayTuck svg{width:22px;height:22px}.tfEditTray:not(.open) .tfTrayTuck{visibility:hidden}.tfTrayInner{flex:1;min-width:0;display:flex;flex-direction:column;gap:20px;overflow:auto;overscroll-behavior:contain;padding:20px;border-radius:var(--r-card) 0 0 var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d}.tfTrayHead{display:flex;align-items:center;justify-content:space-between;gap:12px}.tfTraySection{display:flex;flex-direction:column;gap:8px}.tfTraySection .sectionLabel{margin:0}.tfTrayNote{margin:0;color:var(--muted);font:400 14px/1.3 var(--font)}.tfTrayCards{display:flex;flex-direction:column;gap:6px}.tfTrayCard{display:flex;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 14px 0 10px;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none}.tfTrayList{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}.tfTrayFav{display:grid;grid-template-columns:22px var(--chip-size) minmax(0,1fr) 36px 36px;align-items:center;gap:8px;min-height:var(--tile-min);padding:0 4px 0 6px;border-radius:var(--r-tile)}.tfTrayFav.off{cursor:grab;touch-action:none}.tfTrayFav.off :is(.tfIcon,.tfTrayName){opacity:.5}.tfTrayFav.moving{background:var(--tile)}.tfTrayGrip{display:grid;place-items:center;color:var(--muted);cursor:grab;touch-action:none}.tfTrayGrip svg{width:20px;height:20px;fill:currentColor}:is(.tfTrayFav,.tfTrayPickItem) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfTrayName{display:flex;flex-direction:column;min-width:0}.tfTrayName>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfTrayBtn{display:grid;place-items:center;width:36px;height:36px;min-height:0;padding:0;border:0;border-radius:12px;background:none;color:var(--text);cursor:pointer}.tfTrayBtn svg{width:20px;height:20px;fill:currentColor}.tfTrayBtn:hover{background:var(--tile)}.tfTrayAdd{align-self:flex-start}.tfTrayPick{display:flex;flex-direction:column;gap:6px}.tfTrayPick[hidden]{display:none}.tfTrayPickItem{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;width:100%;min-height:var(--tile-min);padding:0 10px;border:0;border-radius:var(--r-tile);background:none;color:var(--text);text-align:start;cursor:pointer}.tfTrayPickItem:hover{background:var(--tile)}.tfTraySuggest{margin-top:8px}.tfMiniPhone{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px) + 20px);bottom:20px;left:max(16px,calc(100vw - min(608px,100vw - 56px) - 380px));z-index:160;display:flex;flex-direction:column;gap:8px;width:324px;padding:12px;border-radius:44px;background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d;opacity:0;transform:translate(16px);transition:opacity .2s ease,transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfMiniPhone.open{opacity:1;transform:none;pointer-events:auto}.tfPhoneHead{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 4px 0 12px}.tfMiniPhone>.tfTrayNote{padding:0 12px 4px}.tfLinkBtn{min-height:0;padding:0;border:0;background:none;color:var(--primary);font:inherit;text-decoration:underline;cursor:pointer}.tfPhoneScreen{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;border-radius:34px;background:var(--bg);box-shadow:var(--hc-hair-all);padding:14px 0 24px}.tfPhoneList{display:flex;flex-wrap:wrap;gap:12.8px}.tfPhoneTitle{width:100%;padding:0 12.8px;color:var(--text);font:800 25.6px/1 var(--font);letter-spacing:-.055em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfPhoneBlock{display:flex;align-items:flex-start;gap:10px;width:100%;min-height:0;padding:12px;border:0;border-radius:27px;background:var(--card);box-shadow:var(--hc-hair);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.tfPhoneBlock.tile{width:calc((100% - 12.8px)/2);border-radius:22.4px}.tfPhoneBlock.fixed{align-items:center;color:var(--muted);cursor:default}.tfPhoneBlock.moving{box-shadow:var(--hc-hair),0 0 0 2px var(--primary);cursor:grabbing}.tfPhoneBlock:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfPhoneBlock .tfIcon{width:32px;height:32px;border-radius:13px;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}.tfPhoneName{min-width:0;padding-top:6px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tfTrayGhost{position:fixed;top:0;left:0;z-index:200;margin:0;pointer-events:none;opacity:.9;background:var(--tile);border-radius:var(--r-tile);box-shadow:0 8px 24px #00000059}.tfFavDrop{position:fixed;z-index:200;width:4px;border-radius:2px;background:var(--primary);pointer-events:none}.tfFavHides{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;pointer-events:none}.tfFavHide{position:absolute;display:grid;place-items:center;width:32px;height:32px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;pointer-events:auto}.tfFavHide svg{width:18px;height:18px;fill:currentColor}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.toast.tfToast{top:auto;right:auto;max-width:calc(100vw - 32px);transform:translate(-50%,6px)}.toast.tfToast.show{transform:translate(-50%)}.tfDash-act .activityRow.alert .activityRowName{color:var(--danger)}.activityRow .tfIcon.alert{background:#e53935;color:#fff}.tfGraph.tfDay{flex:none;height:62px;min-height:0}.tfGraph.tfDay text{font-size:10px}#housePane .rubberIndicator{background:var(--bright)}#housePane .tab.active{color:var(--on-bright)}#app.house :is(.settingsSelect,.addInput){border:1px solid var(--muted)}#app.house{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%23d9d9d9' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house.light{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%2326221e' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house select.settingsSelect{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 44px 0 16px;background-image:var(--select-chev);background-repeat:no-repeat;background-position:right 16px center;background-size:16px 16px}#app.house .addInput::placeholder{color:var(--muted);opacity:1}#app .activityRows :focus-visible{outline-offset:-2.4px}#app.house :is(button,a,input,select,[tabindex]){scroll-margin-bottom:96px}@media (max-width:620px){#app.house :is(.activityRowName,.activityRowMeta){white-space:normal;text-overflow:clip;overflow:visible;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}}.tfTooltip{position:fixed;z-index:500;max-width:min(320px,calc(100vw - 16px));padding:6px 10px;border-radius:10px;background:var(--bright);color:var(--on-bright);font:500 14px/18px var(--font);overflow-wrap:break-word;box-shadow:0 4px 16px #00000040}.tfTooltip[hidden]{display:none}.tfDashGraph rect{transform-box:fill-box;transform-origin:50% 100%}#app.house:is([data-names=cut],[data-names=scroll]) :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis;overflow-wrap:normal}#app.house[data-names=wrap] :is(.activityRowName,.activityRowMeta){display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:normal;overflow:hidden;text-overflow:ellipsis;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}#app.tfBoard .tfDash-favs>.activityRows{min-height:0;overflow-y:auto;scrollbar-width:thin}#app.house :is(.tfIcon,.tfAreaIcon,.tfRoomIcon){--chip-hi:.0375;background-image:linear-gradient(180deg,#ffffff08,#fff0)!important;box-shadow:inset 0 1px rgba(255,255,255,var(--chip-hi)),inset 0 -1px color-mix(in srgb,currentColor 3%,transparent),inset 0 -3px 6px color-mix(in srgb,currentColor 3.5%,transparent)}#app.house :is(.on[data-light] .tfIcon,.tfIcon.on[data-light],.tfACTile .tfIcon[data-light],.on[data-tone=alarm] .tfIcon,.tfIcon[data-light]){--chip-hi:.1375}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-xl]{grid-row:span 5}#app.tfBoard .tfDashBento:not([data-rows="5"]) .wbItem[data-xl] .wbCallouts{display:none}#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]) .wbZone{flex:1;height:auto;background:none;box-shadow:none;padding:0;align-items:flex-start}#app.tfBoard .tfDashBento[data-rows="3"] .wbItem[data-xl] .wbCallouts{display:flex;margin-top:0}#app.tfBoard .tfDashBento[data-rows="1"] :is(.wbZone,.wbCallouts){display:none}#app .wbZoneM{display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM){display:flex;align-items:flex-start;justify-content:flex-start}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM)>:not(.wbZoneM){display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZoneM{display:flex}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{grid-auto-flow:row}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-break]{grid-column-start:1}#app.house.tfWeatherOpen #homeView{max-width:none}#app.house #settingsView .toggleList{border-radius:var(--r-card);padding-block:4px}#app.house #settingsView .toggleRow{padding-left:18px;padding-right:18px}#app.house #settingsView .toggleRow:not([hidden])~.toggleRow:before{left:18px}#app.house .view{margin-left:0}#app.house #settingsView .toggleList>.tfCardTitle{display:flex;align-items:center;min-height:28px;padding:14px 18px 2px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfLightView{display:flex;padding:4px 0 14px}#housePane.tfLightCardsOn .houseTab .metaTableWrap,#housePane.tfLightCardsOn .houseTab .tfTableNote{display:none}#housePane.tfLightCardsOn .tfLightCards{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:8px}#housePane:not(.tfLightCardsOn) .tfLightCards{display:none}@container housepane (width < 720px){#housePane:not(.tfLightCardsOn) .houseTab .metaTableWrap{display:none}#housePane:not(.tfLightCardsOn) .tfLightCards{display:grid}}#app.house.light .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house .tfTrayInner{gap:32px}#app.house .tfTraySection{gap:12px}#app.house{--font:Geist,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-family:var(--font)}#app.house #housePane .toggleRow>:is(.themeChoice,.settingsSelect){align-self:flex-start;width:auto;max-width:100%}#app.house #housePane .themeChoice{display:inline-flex}#app.house #housePane .themeChoice>button{flex:0 1 auto;min-width:0;padding:0 16px;overflow:hidden;text-overflow:ellipsis}#app.house #housePane .toggleRow{min-width:0}#app.house #housePane .toggleRow>.settingsSelect{min-width:200px}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments){display:inline-flex;width:auto;align-self:flex-start}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments) button{flex:0 0 auto;padding:0 16px}@media (max-width:620px){#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid{display:flex!important;flex-wrap:wrap;align-items:flex-start;gap:var(--grid-gap);height:auto!important}#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid .tfBoardItem{position:relative!important;left:auto!important;top:auto!important}#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid>.tfBoardItem:not(.tfDash-favs){height:auto!important}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummary{flex:none;margin-top:0;container-type:normal}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummaryText{position:static}}#app.house :is(#housePane .themeChoice,.wb .wbSegments,.tfBoardMenu .tfHeightTabs){height:32px;padding:3px;gap:3px;box-sizing:border-box}#app.house :is(#housePane .themeChoice>button,.wb .wbSegments button,.tfBoardMenu .tfHeightTabs button){height:26px!important;padding:0 12px;border-radius:13px!important;font:600 12px/16px var(--font-tile)!important}.tfPlantProblem{flex:1 1 0;min-height:184px;flex-direction:column}.tfGraph.tfPlantGraph{flex:1 1 0;width:calc(100% - 20px);height:auto;min-height:160px;margin:0 10px}.tfGraph .tfGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:3 4;vector-effect:non-scaling-stroke}.tfGraph .tfGuideWord{font-size:11px}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){box-shadow:inset 0 0 0 1px var(--line)}.tfDashTitle .tfGreeting{display:block;margin-bottom:6px;font:500 20px/1.2 var(--font-tile);letter-spacing:0;color:var(--muted)}#app.tfOverview.tfDash #homeView .tfSum:not([data-summary=alerts]) .tfIcon{background:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar{width:100%;max-width:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows{display:flex;justify-content:space-between}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRow{flex:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows{display:grid;grid-template-columns:repeat(var(--bar-cols,3),minmax(0,1fr))}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows>.activityRow{min-width:0}@media (max-width:620px){#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}}#app.tfOverview.tfDash #homeView .tfDash-favs{padding:10px;border-radius:var(--r-card)}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityHeader{display:none}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-auto-rows:60px;row-gap:25px;max-height:100%;margin:0;overflow-y:auto;scrollbar-width:none}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows::-webkit-scrollbar{display:none}.hcFadeList.hcMore{-webkit-mask-image:linear-gradient(to bottom,#000 calc(100% - 40px),transparent);mask-image:linear-gradient(to bottom,#000 calc(100% - 40px),transparent)}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{height:60px;min-height:0;padding:10px;box-sizing:border-box}#app.tfOverview.tfDash #homeView .tfDash-wx .wbCard.wbWeather{gap:0;padding:18px}#app.tfOverview.tfDash #homeView .tfDash-wx .wbCondition,#app.tfOverview.tfDash #homeView .tfDash-wx .wbNextHours,#app.tfOverview.tfDash #homeView .tfDash-wx .wbHalves{display:none!important}#app.tfOverview.tfDash #homeView .tfDash-wx .wbSummary{flex:none;height:auto;margin:18px 0 0;container:none}#app.tfOverview.tfDash #homeView .tfDash-wx .wbSummaryText{position:static;-webkit-line-clamp:1}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumns{display:flex!important;height:159px;margin-top:auto;border-radius:var(--r-tile)}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn{padding:8px 0;background:none}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn:hover{background:var(--tile)}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn .wbWx.wbS60{width:60px;height:60px;border-radius:20px}#app.tfOverview.tfDash #homeView .tfRoomTile{padding:18px;gap:0;border-radius:28px}#app.tfOverview.tfDash #homeView .tfRoomTile>.tfActionHead{margin-bottom:0}#app.tfOverview.tfDash #homeView .tfRoomTile .tfActionHead .activityRowMeta{display:none}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomReading{margin-top:35px;gap:0}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomBig{font:400 48px/64px var(--font-tile);letter-spacing:-1.92px}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomSub{display:block;margin-top:-7px;font:400 16px/19px var(--font)}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomDevices{display:flex;justify-content:space-between;min-height:0;margin-top:auto;padding-top:16px}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomHeads{display:none}#app.tfOverview.tfDash #homeView .tfRoomTile:not(:has(.tfRoomDevices :nth-child(4))) .tfRoomDevices{justify-content:flex-start;gap:18.67px}#app.light.tfOverview.tfDash #homeView .tfRoomTile .tfRoomIcon{background-color:#acacac;color:#fff}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar{width:max-content;max-width:100%}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar .activityRows{justify-content:flex-start}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows{grid-template-columns:repeat(var(--bar-cols,3),auto)}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs{height:auto!important;padding:10px;container-type:normal}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows{display:flex;justify-content:space-between;grid-auto-rows:auto;row-gap:0;max-height:none}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{flex:none;width:240px;height:60px}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows{display:grid;grid-template-columns:repeat(var(--bar-cols,3),minmax(0,1fr))}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows>.activityRow{width:auto;min-width:0}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs{width:max-content!important;max-width:100%}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs>.activityRows{justify-content:flex-start}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows{grid-template-columns:repeat(var(--bar-cols,3),240px)}@media (max-width:620px){#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{width:auto;min-width:0}}#app.tfOverview.tfBoard #homeView .hcFloor{position:absolute;z-index:1;display:flex;align-items:center;height:24px;margin:0;box-sizing:border-box}#app.tfOverview.tfBoard #homeView .hcFloorBox{position:absolute;z-index:0;border-radius:40px;background:color-mix(in srgb,var(--text) 5%,transparent);box-sizing:border-box;pointer-events:none}#app.tfOverview #homeView .hcFloorName{margin:0;font:500 16px/24px var(--font);color:var(--title,var(--text));white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.tfOverview.tfDash #homeView .tfRoomTile{overflow:hidden}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaL .tfRoomBig{font-size:calc(48px * var(--hc-k,1));line-height:calc(64px * var(--hc-k,1))}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaL .tfRoomReading{margin-top:calc(35px * var(--hc-k,1))}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaM .tfRoomReading{margin-top:calc(14px * var(--hc-k,1))}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaM .tfRoomBig{font-size:calc(40px * var(--hc-k,1));line-height:calc(52px * var(--hc-k,1));letter-spacing:-1.6px}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaM .tfRoomSub{margin-top:-6px}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaS{padding:12px}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaS .tfRoomReading{margin-top:calc(8px * var(--hc-k,1))}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaS .tfRoomBig{font-size:calc(32px * var(--hc-k,1));line-height:calc(40px * var(--hc-k,1));letter-spacing:-1.28px}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaS .tfRoomSub{display:none}#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaM,.hcAreaS) .tfRoomDevices,#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaM,.hcAreaS):not(:has(.tfRoomDevices :nth-child(4))) .tfRoomDevices{display:flex;flex-wrap:wrap;justify-content:flex-start;gap:0 8px;height:var(--chip-size);overflow:hidden;padding-top:0;margin-top:auto}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaS .tfRoomReading{flex:none}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomReading{margin-bottom:12px}#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaS,.hcAreaM,.hcAreaL).hcAreaBig .tfRoomBig{font-size:calc(64px * var(--hc-k,1));line-height:calc(80px * var(--hc-k,1));letter-spacing:-2.56px}#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaS,.hcAreaM,.hcAreaL).hcAreaBig .tfRoomReading{margin-top:calc(35px * var(--hc-k,1))}#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaS,.hcAreaM,.hcAreaL).hcAreaBig .tfRoomSub{display:block}#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaS,.hcAreaM,.hcAreaL).hcAreaBig .tfRoomDevices{display:none!important}#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaS,.hcAreaM,.hcAreaL).hcAreaBig .tfRoomHeads{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));margin-top:auto}#app.hcHomeEditing.tfOverview #homeView .tfBoardItem.tfRoomTile{cursor:default;outline:0}#app.hcHomeEditing.tfOverview #homeView .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfRoomTile){cursor:grab;-webkit-user-select:none;user-select:none;touch-action:none;outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.hcHomeEditing.tfOverview #homeView .tfBoardItem.tfRoomTile{border-radius:28px}#app.hcHomeEditing.tfBoardReady #homeView .tfBoardItem{transition:left .34s cubic-bezier(.2,1.35,.4,1),top .34s cubic-bezier(.2,1.35,.4,1)}@media (prefers-reduced-motion:reduce){#app.hcHomeEditing.tfBoardReady #homeView .tfBoardItem{transition:none}}#app.hcHomeEditing #homeView .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}@media (max-width:620px){#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomDevices{display:grid;grid-template-columns:repeat(2,max-content);gap:12px;justify-content:start}}.tfEditTray .tfTrayInner{scrollbar-width:none}.tfEditTray .tfTrayInner::-webkit-scrollbar{display:none}.hcHeChoiceLine{flex-wrap:wrap;gap:8px 12px}.hcHeChoiceLine>.hcHeChoice{margin-left:auto}.hcHeChoice.themeChoice{display:inline-flex;flex-wrap:nowrap;height:32px;padding:3px;gap:3px;box-sizing:border-box;border-radius:16px;background:var(--control-2,var(--hc-icon))}#app .hcHeChoice>button{height:26px!important;min-height:0;padding:0 12px;border:0;border-radius:13px!important;background:none;color:var(--text);font:600 12px/16px var(--font-tile)!important;white-space:nowrap}#app .hcHeChoice>button[aria-pressed=true]{background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all)}.hcHeBody{display:flex;flex-direction:column;gap:12px}.hcHeBody>.tfTrayNote{margin:0 0 8px}.hcHeLabel{display:flex;align-items:center;gap:4px}.hcHeLine{display:flex;align-items:center;gap:4px;min-height:44px}.hcHeLine>.activityRowName{min-width:0}.hcHeLine>.switch{margin-left:auto}.hcHeLink{display:inline;min-height:0;padding:0;border:0;background:none;font:inherit;color:var(--primary);text-decoration:underline;cursor:pointer}.hcHeList{display:flex;flex-direction:column;gap:2px;margin:0;padding:0;list-style:none}.hcHeRow{display:grid;grid-template-columns:36px var(--chip-size) minmax(0,1fr) auto;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 4px;border-radius:var(--r-tile)}.hcHeRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.hcHeRow.moving{background:var(--card);box-shadow:var(--hc-hair-all)}.hcHeGrip{color:var(--muted);cursor:grab;touch-action:none}.hcHeSum .tfIcon{color:var(--sum-ink,var(--hc-icon-ink))}#app .hcHeRow.hcHeSum .tfIcon{background-color:transparent}#app.house .hcHeSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .hcHeSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}.hcInfoBtn{display:grid;place-items:center;flex:none;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:var(--r-fine,12px);background:none;color:var(--muted);cursor:pointer}.hcInfoBtn svg{width:18px;height:18px;fill:currentColor}.hcInfoBtn:hover,.hcInfoBtn[aria-expanded=true]{background:var(--tile);color:var(--text)}.hcInfoPop{position:fixed;z-index:320;width:280px;max-width:calc(100vw - 16px);display:flex;flex-direction:column;gap:8px;padding:16px;border-radius:var(--r-inner);box-shadow:var(--hc-hair-all),0 8px 28px #0000002e}.hcInfoPop[hidden]{display:none}.hcInfoTitle{font:600 14px/20px var(--font-tile);color:var(--text)}.hcInfoText{font:400 14px/1.45 var(--font);color:var(--text)}.hcInfoText p{margin:0}.hcInfoText ul{margin:6px 0 0;padding-left:18px}.hcInfoMore{align-self:flex-start;font:600 14px/20px var(--font-tile);color:var(--primary);text-decoration:underline}#app .tfTrayAdd.hcAddBtn{display:inline-flex;align-items:center;gap:6px;height:32px;min-height:0;margin:10px 0 12px;padding:0 16px 0 12px;border:0;border-radius:16px!important;background:#03a9f4;color:#fff;font:600 14px/20px var(--font-tile);text-decoration:none!important}#app .tfTrayAdd.hcAddBtn svg{width:18px;height:18px;flex:none;fill:currentColor}#app .tfTrayAdd.hcAddBtn:hover{background:#0398dc}#app .tfTrayAdd.hcAddBtn[aria-expanded=true]{background:#0288d1}.tfEditTray:not(.hcHomeTray) .tfTraySection:not(.hcFirst){padding-top:20px;border-top:1px solid var(--line)}#app.house .tfEditTray:not(.hcHomeTray) .tfTrayInner{gap:20px}.hcHeRule{width:100%;height:0;margin:8px 0;border:0;border-top:1px solid var(--line)}.tfEditTray .hcTrayTabs{display:flex;align-self:stretch;margin:0 0 4px;flex:none}.tfEditTray .hcTrayTabs .tab{flex:1 1 0;min-height:36px;padding:0 10px;font:600 14px/20px var(--font-tile)}.tfEditTray .hcTrayTabs .rubberIndicator{background:var(--text)}.tfEditTray .hcTrayTabs .tab.active{color:var(--card)}.tfEditTray .tfTraySection[hidden]{display:none!important}.hcHeTabBody{display:flex;flex-direction:column;gap:8px}.hcHomeTray .hcTrayTabs{margin:0 0 8px}#homeView .grid.tfStack{grid-auto-rows:1px;row-gap:0}#homeView .grid.tfStack>*{align-self:start}.tfTrayPop{position:fixed;z-index:260;right:calc(min(608px,100vw - 56px) + 12px);width:300px;max-width:calc(100vw - 80px);display:grid;gap:2px;padding:10px!important;background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfTrayPop[hidden]{display:none}.tfTrayPopTitle{padding:4px 8px 8px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfTrayPopRow{display:flex;align-items:center;gap:12px;min-height:var(--tile-min);padding:0 8px}.tfTrayPopRow .tfIcon{background-color:var(--hc-icon)}.tfTrayPopName{flex:1;min-width:0;font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app .tfMoreBackdrop:not(.wide) .tfMore{height:min(600px,85dvh)}#app .tfMoreBackdrop:not(.wide) .tfMorePages{flex:1 1 auto;min-height:0;height:auto!important;align-items:stretch}#app .tfMoreBackdrop:not(.wide) .tfMorePage{overflow-y:auto;overscroll-behavior:contain;scrollbar-width:none}#app .tfMoreBackdrop:not(.wide) .tfMorePage[aria-label=Control]>:first-child{margin-top:auto}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace{flex:1 1 auto;height:auto;min-height:224px}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill{min-height:0;container-type:size}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill>.tfCoverArt{width:min(100%,100cqh);height:auto}.tfMorePage[aria-label=Control]>:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink)+:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink){margin-top:14px}.tfMoreSwitch{display:flex;align-items:center;justify-content:center;min-height:0;padding:0;border-radius:0;background:none}.tfMoreSwitch .tfIcon{width:min(240px,100%);height:min(240px,100%);aspect-ratio:1;min-height:0;border:0;padding:0;border-radius:40%;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer;--mdc-icon-size:204px}.tfMoreSwitch.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreSwitch.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}@media (max-width:620px){#app .tfMoreBackdrop{place-items:end center;padding:0 16px max(16px,env(safe-area-inset-bottom,0px))}#app .tfMoreBackdrop .tfMorePair{width:100%;max-height:85dvh}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){width:100%;border-radius:34px;box-shadow:inset 0 0 0 1px var(--line),0 10px 30px #00000047}#app .tfMoreBackdrop .tfMore{padding-top:10px;outline:none}#app .tfMoreBackdrop .tfMore:before{content:"";display:block;position:sticky;top:10px;z-index:2;flex:none;width:36px;height:5px;margin:0 auto;border-radius:3px;background:var(--line)}#app .tfMoreBackdrop .tfMore [data-more-close]{display:none}}`, Lu = `.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:14px;aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:18px;border-radius:28px;overflow:hidden}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbChip{width:40px;height:40px;border-radius:16px}.wbSquare .wbName{font-size:14px;line-height:1.4}.wbSquare .wbSub{font-size:16px}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:10px}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846;border-radius:34px}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:1;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);fill-opacity:.14}.wbChart .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:24px minmax(0,1fr) 22px;grid-template-areas:". sun" "y plot" ". x";column-gap:8px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wb[data-style=smooth] :is(.wbWx,.wbSky):after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;border-radius:inherit;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1.3 0 0 0 -.15 1.3 0 0 0 -.15 1.3 0 0 0 -.15 0 0 0 0 1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:140px 140px;mix-blend-mode:overlay;opacity:.3}.wbBaseRows{display:flex;flex-direction:column;gap:4px;width:100%}.wbBaseRow{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbBaseRow>span:last-child{color:var(--text);white-space:nowrap}.wbBaseRow>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRadar{position:relative;flex:1;align-self:stretch;min-height:80px;border-radius:var(--r-inner);overflow:hidden;background-color:var(--tile);background-image:linear-gradient(color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px);background-size:24px 24px;background-position:center}.wbRadarRing{position:absolute;left:50%;top:50%;width:64%;aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 20%,transparent)}.wbRadarRing:after{content:"";position:absolute;top:25%;right:25%;bottom:25%;left:25%;border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 14%,transparent)}.wbRadarHome{position:absolute;left:50%;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 3px var(--tile)}.wbRadarMap,.wbRadarCam{background-image:none}.wbRadarLayer{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden}.wbRadarLayer img{position:absolute;width:256px;height:256px;max-width:none;pointer-events:none}.wbRadarLayer[hidden]{display:none}.wbRadarRain{opacity:.85}.wbRadarMap .wbRadarHome{z-index:2}.wbRadarTime,.wbRadarCredit{position:absolute;z-index:2;white-space:nowrap}.wbRadarTime{left:8px;bottom:6px;padding:1px 6px;border-radius:8px;background:color-mix(in srgb,var(--tile) 78%,transparent);color:var(--text);font:600 11px/16px var(--font-tile)}.wbRadarTime:empty{display:none}.wbRadarCredit{right:6px;top:4px;max-width:calc(100% - 12px);overflow:hidden;text-overflow:ellipsis;color:var(--muted);font:400 9px/12px var(--font)}.wbRadarNote{position:absolute;top:0;right:0;bottom:0;left:0;z-index:2;display:grid;place-items:center;padding:0 12px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbRadarCam img{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;object-fit:cover}.wbWx.wbLineIcon{display:grid;place-items:center;background:var(--tile);color:var(--text)}.wbWx.wbLineIcon>svg{width:64%;height:64%}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:18px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:14px 16px 12px 12px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbAsNow{display:none}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}.wbNextHours{display:none;justify-content:space-between;align-items:center;gap:8px;min-width:0}.wbHour{display:flex;flex-direction:column;align-items:center;gap:8px;min-width:0}.wbHourTime{color:var(--muted);font:400 14px/20px var(--font);white-space:nowrap}.wbHourTemp{font:400 18px/20px var(--font-tile);white-space:nowrap}.wbHour .wbWx.wbS40{width:40px;height:40px;border-radius:16px}.wbSummary{position:relative;flex:1 1 0;min-height:0;margin-top:-12px;container:wbsum/size}.wbSummaryText{position:absolute;top:12px;left:0;right:0;margin:0;color:var(--text);font:400 16px/22px var(--font);display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}@container wbsum (height < 56px){.wbSummaryText{-webkit-line-clamp:1}}@container wbsum (height < 34px){.wbSummaryText{display:none}}@container wb-card (width < 480px){.wbColumn .wbWx.wbS60{width:48px;height:48px;border-radius:16px}}@container wb-card (width < 400px){.wbCard.wbWeather{gap:16px;padding:18px 18px 10px}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumn .wbWx.wbS60{width:40px;height:40px;border-radius:14px}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbStripScroll.wbPaged{container-type:inline-size;scroll-snap-type:x mandatory;overscroll-behavior-x:contain}.wbStripScroll.wbPaged.wbHeld{scroll-snap-type:none}.wbPaged .wbStrip{position:relative;min-width:0;padding:0}.wbSnap{position:absolute;top:0;width:1px;height:1px;scroll-snap-align:start;pointer-events:none}.wbMark.wbLast{align-items:flex-end;transform:translate(-100%)}.wbPaged .wbTimes .wbMark.wbFirst{font:400 14px/20px var(--font)}.wbPaged .wbTimes .wbMark.wbNowMark{font:600 14px/20px var(--font-tile)}.wbSky .wbPast{position:absolute;top:0;bottom:0;left:0;background:var(--card);opacity:.45;pointer-events:none}.wbSky .wbNowLine{position:absolute;top:0;bottom:0;width:2px;margin-left:-1px;background:var(--text);opacity:.55;pointer-events:none}.wbSky.wbLineSky{background:var(--tile);color:var(--text)}.wbLineArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbLineArt .wbLineArc{fill:none;stroke:var(--text);stroke-width:1.5;stroke-linejoin:round;vector-effect:non-scaling-stroke;opacity:.7}.wbLineArt .wbLineHorizon{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.35}.wbLineArt .wbLineNight{fill:var(--text);opacity:.07}.wbLineArt .wbLineEdge{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.3}.wbLineTime{position:absolute;top:calc(80% + 4px);transform:translate(-50%);color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.wbLineNow{position:absolute;width:26px;height:26px;transform:translate(-50%,-50%);border-radius:50%;background:var(--tile);pointer-events:none}.wbLineNow>svg,.wbLineGlyph>svg{display:block;width:100%;height:100%}.wbLineGlyph{position:absolute;top:calc(50% - 14px);width:28px;height:28px;transform:translate(-50%);pointer-events:none}.wbLineGlyph.wbFirst{transform:none}.wbLineGlyph.wbLast{transform:translate(-100%)}.wbSky .wbMidnight{position:absolute;top:0;bottom:0;width:0;border-left:1.5px dashed var(--text);opacity:.5;pointer-events:none}.wbDays{position:absolute;top:36px;left:0;z-index:1;display:flex;pointer-events:none}.wbDaySpan{flex:none;min-width:0}.wbDayName{position:sticky;left:8px;margin-left:8px;height:26px;min-height:0;padding:0 10px;border:0;background:color-mix(in srgb,var(--card) 82%,transparent);color:var(--text);font:600 13px/26px var(--font-tile);white-space:nowrap;cursor:pointer;pointer-events:auto}.wb .wbDayName{border-radius:13px!important;font-family:var(--font-tile)!important}.wbViews button{padding:2px 10px;font-size:13px}.wbBars .wbDayBars{flex:1 1 0;min-height:160px;display:flex;flex-direction:column;padding:0 18px;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin}.wbBars.wbTabbed .wbDayBars{min-height:206px}.wbDayBar{flex:1 0 auto;display:grid;grid-template-columns:minmax(56px,auto) 40px 36px minmax(0,1fr) 36px;align-items:center;column-gap:12px;min-height:48px;box-shadow:inset 0 -.4px 0 var(--line)}.wbDayBar:last-child{box-shadow:none}.wbRangeDay{color:var(--text);font:600 14px/20px var(--font-tile);white-space:nowrap}.wbRangeLo{color:var(--muted);text-align:right;font:400 16px/20px var(--font);font-variant-numeric:tabular-nums}.wbRangeHi{color:var(--text);text-align:right;font:400 16px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbRangeTrack{position:relative;height:6px;border-radius:3px;background:var(--tile)}.wbRangeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:3px}.wbRangeNow{position:absolute;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:#fff;box-shadow:0 0 0 2px var(--card)}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbBars .wbDayBars{padding:0 8px;min-height:380px}.wbBars.wbTabbed .wbDayBars{min-height:426px}.wbDayBar{column-gap:8px}.wbStripScroll{min-height:380px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:16px;overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbSunTile .wbZone{display:block}.wbSunZone{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff;transition:background 1s ease}.wbSunTrack{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbSunBand{fill:#fff;fill-opacity:.1}.wbSunBand.wbSunDay{fill-opacity:.14}.wbSunBand.wbSunDone{fill-opacity:.85}.wbSunDot{fill:#ffd84a}.wbSunDot.wbSunNight{fill:#9aa3c7}.wbSunCount{position:absolute;top:22px;right:22px;bottom:22px;left:22px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;padding-bottom:14px}.wbSunLeft{font:500 clamp(28px,calc(16cqw * var(--wb-k,1)),36px)/1.1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums;white-space:nowrap}.wbSunWord{font:400 13px/18px var(--font);opacity:.85}.wbSunAt{position:absolute;bottom:32px;font:500 12px/16px var(--font);opacity:.85;font-variant-numeric:tabular-nums}.wbSunRise{left:32px}.wbSunSet{right:32px}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}.wbMoonCaption{gap:8px}.wbMoonCaption span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbMoonCaption span:last-child{flex:none}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbSea{position:relative;flex:1;min-height:0;border-radius:16px;overflow:hidden;--wb-sea-inset:clamp(8.88px,calc(4.76cqw * var(--wb-k,1)),12px)}.wbSeaArt{position:absolute;top:0;right:0;bottom:0;left:0;display:block;width:100%;height:100%;image-rendering:pixelated}.wbSeaFact{position:absolute;top:clamp(7px,calc(3.97cqw * var(--wb-k,1)),10px);inset-inline:var(--wb-sea-inset);color:#26221e;font:600 clamp(9.44px,calc(5.47cqw * var(--wb-k,1)),13.78px)/1.23 var(--font-tile)}.wbSeaValue{position:absolute;bottom:var(--wb-sea-inset);inset-inline-start:var(--wb-sea-inset);color:#fff;text-shadow:0 0 2px rgba(0,0,0,.6),0 1px 3px rgba(0,0,0,.5)}.wbSeaValue .wbUnitV{color:inherit}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbTrend{position:relative;width:100%;height:100%;min-height:0}.wbTrendPlot{position:absolute;top:22px;right:0;bottom:24px;left:0}.wbTrendPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbTrendLine{fill:none;stroke:var(--text);stroke-width:2;stroke-linejoin:round;stroke-linecap:round;opacity:.8}.wbTrendDot{position:absolute;width:7px;height:7px;margin:-3.5px 0 0 -3.5px;border-radius:50%;background:var(--card);box-shadow:0 0 0 2px var(--text)}.wbTrendDot.wbToday{width:11px;height:11px;margin:-5.5px 0 0 -5.5px;background:var(--primary);box-shadow:0 0 0 3px var(--card)}.wbAvgValue{position:absolute;transform:translate(-50%,calc(-100% - 8px));color:var(--muted);font:400 10px/1 var(--font-tile);white-space:nowrap}.wbAvgValue.wbToday{color:var(--text);font-size:12px;font-weight:600}.wbTrendAvg{position:absolute;right:0;transform:translateY(4px);color:var(--muted);font:400 10px/1 var(--font-tile)}.wbTrendDays{position:absolute;left:0;right:0;bottom:0;height:16px}.wbAvgDay{position:absolute;bottom:0;transform:translate(-50%);color:var(--muted);font:400 11px/16px var(--font-tile)}.wbAvgDay.wbToday{color:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}.wbZoned{gap:14px}.wbZone{position:relative;flex:none;height:198px;display:flex;align-items:center;justify-content:center;border-radius:16px;overflow:hidden}.wbCallouts{display:none;flex-direction:column;gap:4px;margin-top:-6px}.wbCallout{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbCallout>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbCallout>span:last-child{flex:none;color:var(--text);white-space:nowrap}.wbZone>.wbSunSky{flex:1;align-self:stretch;border-radius:0}.wbZone>.wbMoonBox{flex:none;height:150px}.wbBase .wbZone{align-items:flex-end;justify-content:flex-start}.wbZone>.wbTapeRow{align-self:stretch;height:100%}.wbItem[data-xl] .wbCallouts{display:flex}.wbUv .wbZone{display:block}.wbUvArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbUvBig{position:absolute;right:0;bottom:0;display:flex;flex-direction:column;align-items:flex-end}.wbUvNum{font:500 64px/.9 var(--font-tile);letter-spacing:-.03em;color:var(--text);font-variant-numeric:tabular-nums}.wbUvWord{margin-top:6px;font:400 14px/20px var(--font);color:var(--muted)}.wbAqSmile .wbZone{display:block}.wbAqFill{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff}.wbAqFace{position:absolute;left:12px;top:12px;width:min(140px,calc(100% - 60px));height:auto;aspect-ratio:1;fill:none;stroke:currentColor;stroke-width:3.4;stroke-linecap:round;stroke-linejoin:round}.wbAqFace .wbAqEyes{stroke-width:5}.wbAqBig{position:absolute;right:14px;bottom:12px;display:flex;flex-direction:column;align-items:flex-end}.wbAqNum{font:500 56px/.9 var(--font-tile);letter-spacing:-.03em;font-variant-numeric:tabular-nums}.wbAqUnit{margin-top:4px;font:500 14px/20px var(--font)}.wbPollenAir{position:absolute;top:0;right:0;bottom:62px;left:0;overflow:hidden;pointer-events:none}.wbFloat{position:absolute;left:-12%;animation:wbFloat linear infinite}.wbBob{display:block;animation:wbBob ease-in-out infinite alternate}@keyframes wbFloat{0%{left:-12%}to{left:106%}}@keyframes wbBob{0%{transform:translateY(-6px) rotate(-14deg)}to{transform:translateY(8px) rotate(16deg)}}.wbFloat svg{display:block}.wbSeed svg{width:calc(20px * var(--s));height:calc(28px * var(--s))}.wbGrain svg{width:calc(10px * var(--s));height:calc(10px * var(--s))}.wbStem svg{width:calc(9px * var(--s));height:calc(26px * var(--s))}.wbSeed{color:var(--text);opacity:.7}.wbGrain{color:#e9c46a;opacity:.85}.wbStem{color:#a3b18a;opacity:.75}#app.light .wbGrain{color:#c99a1e}#app.light .wbStem{color:#7d8c5f}@media (prefers-reduced-motion:reduce){.wbFloat,.wbBob{animation:none}.wbFloat{left:var(--x)}}.wbPush{display:block;transition:transform .35s cubic-bezier(.2,.8,.3,1)}.wbCallout.wbAdvice>span:first-child{color:var(--text)}.wbCard.wbSquare.wbGraphCard{height:100%;min-height:0}.wbGraphCard .wbHead .wbBack{margin:-4px -6px 0 auto}.wbGraphCard .wbRangeBtn{align-self:flex-start;display:inline-flex;align-items:center;gap:6px;max-width:100%;height:32px;padding:0 8px 0 10px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:600 12px/16px var(--font-tile);cursor:pointer}.wb button.wbRangeBtn{border-radius:12px!important}.wbRangeBtn>span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRangeBtn .wbIcon{flex:none;width:16px;height:16px;fill:currentColor}.wbRangeBtn[aria-expanded=true]{background:var(--bright);color:var(--on-bright)}.wbItem:has(.wbRangePick){position:relative;z-index:30}.wbRangePick{position:absolute;top:116px;left:18px;z-index:30;display:flex;flex-direction:column;gap:12px;width:248px;box-sizing:border-box;padding:12px;border-radius:24px;background:var(--card);box-shadow:var(--hc-hair-all),0 18px 40px #00000059}.wbRangePick.wbPickRight{left:auto;right:18px}.wbRangePresets{display:flex;flex-direction:column;gap:2px}.wb .wbRangePreset{height:32px;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--text);font:400 14px/20px var(--font);text-align:left;cursor:pointer}.wb .wbRangePreset:hover{background:var(--tile)}.wb .wbRangePreset[aria-pressed=true]{background:var(--bright);color:var(--on-bright);font-weight:600}.wbRangeDates{display:grid;grid-template-columns:1fr 1fr;gap:8px;padding-top:12px;box-shadow:inset 0 .4px 0 var(--line)}.wbRangeDates label{display:grid;gap:4px;min-width:0;color:var(--muted);font:400 12px/16px var(--font)}.wbRangeDates input{width:100%;min-width:0;height:32px;box-sizing:border-box;padding:0 6px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:400 12px/16px var(--font);color-scheme:inherit}.wb .wbRangeApply{height:32px;padding:0 14px;border:0;border-radius:999px!important;background:var(--bright);color:var(--on-bright);font:600 12px/16px var(--font-tile);cursor:pointer}.wbGraphCard .wbGraph{flex:1;height:auto;min-height:0}.wb.wbPopup{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073;overscroll-behavior:contain;container-type:normal}.wb.wbPopup[hidden]{display:none}.wbPopupBox{position:relative;width:520px;max-width:100%}.wbPopup .wbCard.wbSquare.wbGraphCard{height:auto;aspect-ratio:auto;box-shadow:var(--hc-hair-all)}.wbPopup .wbGraphCard .wbGraph{flex:none;height:auto}@media (max-width:620px){.wb.wbPopup{place-items:end stretch;padding:0}.wbPopupBox{width:100%}.wbPopup .wbCard.wbSquare.wbGraphCard{border-radius:28px 28px 0 0}}`, Eu = '#app .mvPv{position:relative;transform:perspective(var(--pv-persp)) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) scale(var(--sc,1));transition:transform var(--pv-ret) var(--pv-ease)}#app .mvPv.mvMoving{transition:transform 70ms linear}#app .mvPv:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;opacity:0;mix-blend-mode:soft-light;background:radial-gradient(circle at var(--mx,50%) var(--my,50%),rgba(255,255,255,var(--pv-shine)),transparent var(--pv-size));transition:opacity var(--pv-ret) ease}#app .mvPv.mvLit:after{opacity:1}#app .tfBar{--mv-c:var(--light-soft,var(--primary));transform-origin:center;transition:box-shadow var(--ab-out) var(--ab-ease),transform var(--ab-out) var(--ab-ease)}#app .tfBar.mvHover{box-shadow:0 0 var(--ab-blur) var(--ab-spread) color-mix(in srgb,var(--mv-c) var(--ab-str),transparent);transition-duration:var(--ab-in)}#app .tfBar.mvHold{box-shadow:0 0 var(--ab-blur2) var(--ab-spread2) color-mix(in srgb,var(--mv-c) var(--ab-str2),transparent);transform:var(--ab-grow);transition-duration:var(--ab-in)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>:is(svg,ha-icon,ha-state-icon,span){transition:scale var(--ih-dur) var(--ih-ease)}@media (hover:hover){#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-s)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover:before{opacity:1}}:where(#app button.tfIcon,#app .tfBack,#app .tfEditChip,#app .tfTrayBtn,#app [data-wb=graph-close]){position:relative}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;background:color-mix(in srgb,currentColor var(--ih-tint),transparent);opacity:0;transition:opacity var(--ih-dur) var(--ih-ease)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):active>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-p)}#app .mvSegInd{position:absolute;z-index:0;pointer-events:none}#app .mvSegMoving>button{position:relative;z-index:1;background-color:transparent!important;box-shadow:none!important;transition:none!important}#app .tfMoreBackdrop{-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}#app .toast.tfToast{min-height:58px;box-sizing:border-box;padding:9px 18px 9px 9px;gap:14px;border-radius:29px;font-size:18px;line-height:1.2}#app .toast .mvTick{display:grid;place-items:center;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--mv-ok);color:#fff}#app .toast .mvTick svg{width:26px;height:26px;fill:none;stroke:currentColor;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}#app .toast .mvToastText{font-weight:600}#app .toast .toastAction{font-size:16px;margin-left:2px}#app .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}#app{--ol-l:68%;--mv-ok:#4cc38a}#app.light{--ol-l:48%;--mv-ok:#1f7a4d}#app .tfAreaPanel:has(>.mvEdge){isolation:isolate;position:relative}#app .mvEdge,#app .mvEdgeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity var(--ol-in) ease-out}#app .mvEdgeFill{z-index:-1;background:hsl(var(--ol-h) 97% var(--ol-l));mix-blend-mode:soft-light;opacity:clamp(0,calc(var(--ol-fill) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-fill));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%)}#app .mvEdge{z-index:5}#app .mvEdge:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l));opacity:clamp(0,calc(var(--ol-border) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-border));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%));mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%))}#app .mvEdge>i{position:absolute;top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;border-radius:inherit;mix-blend-mode:plus-lighter;opacity:clamp(0,calc(var(--ol-glow) * (var(--edge-proximity,0) - var(--ol-esens)) / (100 - var(--ol-esens))),var(--ol-glow));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}#app .mvEdge>i:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;--s:var(--ol-size);box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l) / 60%),inset 0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),inset 0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),inset 0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(22.4px*var(--s)) calc(1.6px*var(--s)) hsl(var(--ol-h) 97% var(--ol-l) / 10%)}#app :not(.mvLitEdge)>:is(.mvEdge,.mvEdgeFill){opacity:0;transition:opacity var(--ol-out) ease-out}@media (prefers-reduced-motion:reduce){#app .mvPv{transform:none!important}#app .mvPv:after{display:none}#app .tfBar.mvHold{transform:none}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>*{scale:none!important}}#app .tfBoardItem.mvDrag{scale:none}#app.tfEditing.tfBoardReady .tfBoardItem:not(.tfDragging){transition:left .42s cubic-bezier(.34,1.46,.64,1),top .42s cubic-bezier(.34,1.46,.64,1),height .42s cubic-bezier(.34,1.46,.64,1)}', Bu = `<main id="app"><div class="shell">
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
`, Jc = "homecore-theme", Ru = {
  home: '<path d="M3 10.5L12 3L21 10.5V21H3V10.5Z"/>',
  settings: '<path d="M21 4H14"/><path d="M10 4H3"/><path d="M21 12H12"/><path d="M8 12H3"/><path d="M21 20H16"/><path d="M12 20H3"/><path d="M14 2V6"/><path d="M8 10V14"/><path d="M16 18V22"/>',
  fullscreen: '<path d="M8 3H5C3.9 3 3 3.9 3 5V8"/><path d="M21 8V5C21 3.9 20.1 3 19 3H16"/><path d="M3 16V19C3 20.1 3.9 21 5 21H8"/><path d="M16 21H19C20.1 21 21 20.1 21 19V16"/>',
  back: '<path d="M15 18L9 12L15 6"/>'
}, Pu = (o) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (Ru[o] || "") + "</svg>", Qc = {
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
function Hu(o, { setLight: r, fullscreenSupported: c, toggleFullscreen: p }) {
  const g = (tt) => o.getElementById(tt), y = g("app");
  o.querySelectorAll("[data-icon]").forEach((tt) => {
    tt.innerHTML = Pu(tt.dataset.icon);
  });
  const w = { home: g("homeView"), settings: g("settingsView") }, A = g("homeNav"), N = g("settingsNav");
  function x(tt) {
    Object.entries(w).forEach(([at, K]) => K.classList.toggle("active", at === tt)), A.classList.toggle("active", tt === "home"), N.classList.toggle("active", tt === "settings");
  }
  A.addEventListener("click", () => x("home")), N.addEventListener("click", () => x("settings")), g("settingsBack").addEventListener("click", () => x("home"));
  function _(tt) {
    const at = tt === "light";
    o.querySelectorAll(".themeBtn").forEach((K) => K.classList.toggle("active", K.dataset.theme === tt)), y.classList.toggle("light", at), r(at);
  }
  _(Qc.get(Jc) === "light" ? "light" : "dark"), o.querySelectorAll(".themeBtn").forEach((tt) => tt.addEventListener("click", () => {
    _(tt.dataset.theme), Qc.set(Jc, tt.dataset.theme);
  }));
  const R = g("tvNav");
  c || (R.hidden = !0), R.addEventListener("click", () => p());
  let V;
  function $(tt) {
    const at = g("toast");
    at && (at.textContent = tt, at.classList.add("show"), clearTimeout(V), V = setTimeout(() => at.classList.remove("show"), 2600));
  }
  return { showView: x, toast: $ };
}
const Nu = /* @__PURE__ */ new Set(["roaming", "test_area"]), Ou = {
  living_room: { climate: !0, cover: ["Curtains", "curtain", 62], temperature: 20.5, humidity: 44, motion: "Living room motion", plant: ["Monstera", 32, 4200, 21.4, 580] },
  kitchen: { temperature: 21.2, humidity: 48, door: "Back door", plant: ["Basil", 55, 900, 22.1, 910] },
  balcony: { solar: !0, door: "Balcony door", doorOpen: !0, valve: "Watering", plant: ["Tomatoes", 61, 18500, 14.2, 1240] },
  bedroom: { cover: ["Roller blind", "shade", 0], humidifier: !0, temperature: 18.9, humidity: 38, window: "Bedroom window" },
  office: { cover: ["Blinds", "blind", 60, 45], vacuum: !0, temperature: 21.8, humidity: 41, plant: ["Pothos", 47, 2600, 21.6, 640] },
  bathroom: { temperature: 22.4, humidity: 62 }
}, dn = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, Ce = "made_up_", Ra = (o) => {
  var r;
  return (r = String(o).split(".")[1]) == null ? void 0 : r.startsWith(Ce);
}, bi = (o) => o.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function Dl(o) {
  const r = o.getHours() + o.getMinutes() / 60, c = Math.max(0, Math.sin((r - 7) / 13 * Math.PI));
  return 2.4 * c * c;
}
function Iu(o) {
  const r = new Date(o.getFullYear(), o.getMonth(), o.getDate());
  let c = 0;
  for (let p = +r; p < +o; p += 10 * 60 * 1e3) c += Dl(new Date(p)) / 6;
  return c;
}
function td(o = /* @__PURE__ */ new Date()) {
  const r = [];
  for (let c = 0; c <= 96; c++) {
    const p = +o - (96 - c) * 15 * 60 * 1e3;
    r.push([p, Dl(new Date(p))]);
  }
  return r;
}
function Fu({ onChange: o }) {
  const r = {}, c = {}, p = (K, j, lt, pt) => {
    r[K] = { entity_id: K, state: lt, attributes: pt, last_changed: new Date(Date.now() - 18e6).toISOString() }, c[K] = j;
  }, g = (K, j, lt) => {
    const pt = r[K], mt = j ?? pt.state;
    r[K] = { ...pt, state: mt, attributes: { ...pt.attributes, ...lt }, last_changed: mt === pt.state ? pt.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, y = (K, j, lt, pt) => p("binary_sensor." + Ce + (K ? K + "_" : "") + bi(j), K, pt ? "on" : "off", { friendly_name: j, device_class: lt });
  Object.entries(Ou).forEach(([K, j]) => {
    if (j.temperature != null && p("sensor." + Ce + K + "_temperature", K, String(j.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), j.humidity != null && p("sensor." + Ce + K + "_humidity", K, String(j.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), j.vacuum && p("vacuum." + Ce + "robot", K, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), j.climate && p("climate." + Ce + K, K, "heat", { friendly_name: "Thermostat", hvac_modes: ["off", "heat", "cool", "auto"], hvac_action: "heating", current_temperature: j.temperature, temperature: 21, min_temp: 7, max_temp: 30, target_temp_step: 0.5 }), j.cover) {
      const [lt, pt, mt, nt] = j.cover;
      p("cover." + Ce + K + "_" + bi(lt), K, mt ? "open" : "closed", { friendly_name: lt, device_class: pt, current_position: mt, ...nt != null ? { current_tilt_position: nt } : {} });
    }
    if (j.humidifier && p("humidifier." + Ce + K, K, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: j.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), j.solar && (p("sensor." + Ce + K + "_solar_power", K, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), p("sensor." + Ce + K + "_solar_today", K, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), j.valve && p("valve." + Ce + K + "_" + bi(j.valve), K, "closed", { friendly_name: j.valve, device_class: "water" }), j.door && y(K, j.door, "door", j.doorOpen), j.window && y(K, j.window, "window", !1), j.motion && y(K, j.motion, "motion", !1), j.plant) {
      const [lt, pt, mt, nt, X] = j.plant, Z = Ce + bi(lt), E = (Lt, it, G, Nt, O) => p("sensor." + Z + "_" + Lt, K, String(G), { friendly_name: it, device_class: O, state_class: "measurement", unit_of_measurement: Nt, plant_low: G < dn[Lt][0], plant_high: G > dn[Lt][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[Lt] });
      E("moisture", "Moisture", pt, "%", "moisture"), E("light", "Light", mt, "lx", "illuminance"), E("temperature", "Temperature", nt, "°C", "temperature"), E("fertility", "Fertility", X, "µS/cm", "conductivity");
      const wt = Object.entries({ moisture: pt, light: mt, temperature: nt, fertility: X }).filter(([Lt, it]) => it < dn[Lt][0] || it > dn[Lt][1]).map(([Lt, it]) => Lt + (it < dn[Lt][0] ? " low" : " high"));
      p("plant." + Z, K, wt.length ? "problem" : "ok", { friendly_name: lt, moisture: pt, brightness: mt, temperature: nt, conductivity: X, problem: wt.join(", ") || "none" });
    }
  }), p("alarm_control_panel." + Ce + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 7, code_format: null, changed_by: "Matt" }), y(null, "Front door", "door", !1), y(null, "Smoke alarm", "smoke", !1), p("sensor." + Ce + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const w = {}, A = {};
  let N = null;
  function x() {
    const K = /* @__PURE__ */ new Date();
    Object.keys(r).forEach((j) => {
      j.endsWith("_solar_power") && (r[j] = { ...r[j], state: Dl(K).toFixed(2) }), j.endsWith("_solar_today") && (r[j] = { ...r[j], state: Iu(K).toFixed(1) });
    });
  }
  x();
  let _ = 0;
  function R() {
    let K = !1;
    const j = ++_ % 10 === 0, lt = (nt, X, Z) => {
      g(nt, X, Z), K = !0;
    };
    Object.entries(w).forEach(([nt, X]) => {
      const Z = r[nt].attributes.current_position, E = Z < X ? Math.min(X, Z + 10) : Math.max(X, Z - 10);
      E === X && delete w[nt], lt(nt, E === X ? E === 0 ? "closed" : "open" : X > Z ? "opening" : "closing", { current_position: E });
    }), Object.entries(A).forEach(([nt, X]) => {
      const Z = r[nt].attributes.current_tilt_position, E = Z < X ? Math.min(X, Z + 25) : Math.max(X, Z - 25);
      E === X && delete A[nt], lt(nt, null, { current_tilt_position: E });
    }), Object.keys(r).filter((nt) => nt.startsWith("climate.")).forEach((nt) => {
      const X = r[nt], Z = X.attributes, E = Z.current_temperature, wt = (X.state === "heat" || X.state === "auto") && E < Z.temperature - 0.05, Lt = (X.state === "cool" || X.state === "auto") && E > Z.temperature + 0.05, it = X.state === "off" ? "off" : wt ? "heating" : Lt ? "cooling" : "idle", G = j ? Math.round((E + (wt ? 0.1 : Lt ? -0.1 : 0)) * 10) / 10 : E;
      (G !== E || it !== Z.hvac_action) && lt(nt, null, { current_temperature: G, hvac_action: it });
    }), Object.keys(r).filter((nt) => nt.startsWith("humidifier.")).forEach((nt) => {
      const X = r[nt], Z = X.attributes, E = Z.current_humidity, wt = X.state === "on" && E < Z.humidity, Lt = wt && j ? E + 1 : E, it = X.state !== "on" ? "off" : wt ? "humidifying" : "idle";
      if (Lt !== E || it !== Z.action) {
        lt(nt, null, { current_humidity: Lt, action: it });
        const G = "sensor." + Ce + c[nt] + "_humidity";
        r[G] && lt(G, String(Lt));
      }
    });
    const pt = r["vacuum." + Ce + "robot"], mt = pt.attributes;
    pt.state === "cleaning" && j && lt(pt.entity_id, null, { battery_level: Math.max(5, mt.battery_level - 1) }), pt.state === "returning" && lt(pt.entity_id, "docked", {}), pt.state === "docked" && mt.battery_level < 100 && lt(pt.entity_id, null, { battery_level: Math.min(100, mt.battery_level + 2) }), N && Date.now() - N.at > 5e3 && (lt("alarm_control_panel." + Ce + "house", "armed_" + N.mode, {}), N = null), K && o();
  }
  const V = setInterval(R, 1e3), $ = setInterval(() => {
    x(), o();
  }, 60 * 1e3);
  function tt(K, j, lt) {
    const pt = lt == null ? void 0 : lt.entity_id;
    if (!r[pt]) return !1;
    const mt = r[pt], nt = mt.attributes, X = (Z, E) => g(pt, Z, E);
    if (K === "climate" && (j === "set_temperature" && X(null, { temperature: Math.max(nt.min_temp, Math.min(nt.max_temp, lt.temperature)) }), j === "set_hvac_mode" && X(lt.hvac_mode, lt.hvac_mode === "off" ? { hvac_action: "off" } : {}), j === "toggle" && X(mt.state === "off" ? "heat" : "off", mt.state === "off" ? {} : { hvac_action: "off" })), K === "cover") {
      const Z = j === "open_cover" ? 100 : j === "close_cover" ? 0 : j === "set_cover_position" ? lt.position : j === "toggle" ? nt.current_position > 0 ? 0 : 100 : null;
      j === "stop_cover" && (delete w[pt], delete A[pt], X(nt.current_position === 0 ? "closed" : "open")), Z != null && Z !== nt.current_position && (w[pt] = Z, X(Z > nt.current_position ? "opening" : "closing"));
      const E = j === "open_cover_tilt" ? 100 : j === "close_cover_tilt" ? 0 : j === "set_cover_tilt_position" ? lt.tilt_position : null;
      j === "stop_cover_tilt" && delete A[pt], E != null && nt.current_tilt_position != null && E !== nt.current_tilt_position && (A[pt] = E);
    }
    if (K === "humidifier" && (j === "set_humidity" && X(null, { humidity: Math.max(nt.min_humidity, Math.min(nt.max_humidity, lt.humidity)) }), j === "set_mode" && X(null, { mode: lt.mode }), j === "turn_on" || j === "turn_off" || j === "toggle")) {
      const Z = j === "turn_on" || j === "toggle" && mt.state !== "on";
      X(Z ? "on" : "off", { action: Z ? "idle" : "off" });
    }
    if (K === "vacuum" && (j === "start" && X("cleaning", { rooms: lt.rooms || nt.rooms }), j === "pause" && X("paused"), j === "return_to_base" && X("returning", { rooms: [] }), j === "locate" && X(null, { located: Date.now() }), j === "set_rooms" && X(null, { rooms: lt.rooms })), K === "valve") {
      const Z = j === "open_valve" || j === "toggle" && mt.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(j) && X(Z ? "open" : "closed");
    }
    if (K === "alarm_control_panel") {
      j === "alarm_disarm" && (N = null, X("disarmed", { changed_by: "Matt" }));
      const Z = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night" }[j];
      Z && (N = { mode: Z, at: Date.now() }, X("arming", { changed_by: "Matt" }));
    }
    return o(), !0;
  }
  function at(K, { madeUp: j = !0 } = {}) {
    const lt = j ? r : {}, pt = (K == null ? void 0 : K.states) || {}, mt = (K == null ? void 0 : K.entities) || {}, nt = (K == null ? void 0 : K.devices) || {}, X = (ot) => {
      var vt;
      const rt = mt[ot];
      return rt && (rt.area_id || rt.device_id && ((vt = nt[rt.device_id]) == null ? void 0 : vt.area_id)) || null;
    }, Z = (ot) => {
      const rt = mt[ot];
      return pt[ot] && pt[ot].state !== "unavailable" && !(rt != null && rt.hidden) && !(rt != null && rt.entity_category);
    }, E = {};
    Object.keys(pt).forEach((ot) => {
      const rt = X(ot);
      rt && Z(ot) && (E[rt] || (E[rt] = [])).push(ot);
    });
    const wt = { ...pt, ...lt }, Lt = (ot) => {
      var rt, vt;
      return (vt = (rt = wt[ot]) == null ? void 0 : rt.attributes) == null ? void 0 : vt.device_class;
    }, it = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], G = Object.keys(pt).filter((ot) => ot.startsWith("vacuum.") && Z(ot)), Nt = Object.values((K == null ? void 0 : K.areas) || {}).filter((ot) => !Nu.has(ot.area_id)).map((ot) => {
      const rt = ot.area_id, vt = E[rt] || [], ft = (_t) => vt.filter((ve) => ve.startsWith(_t + ".")), yt = (_t) => ft("sensor").filter((ve) => Lt(ve) === _t), Ot = (_t) => Object.keys(lt).filter((ve) => c[ve] === rt && _t(ve)), ne = (_t, ve) => _t.length ? _t : Ot(ve), gt = ne(yt("temperature"), (_t) => _t.endsWith(rt + "_temperature")), Ve = ne(yt("humidity"), (_t) => _t.endsWith(rt + "_humidity")), Xa = yt("power").filter((_t) => /^(W|kW)$/.test(wt[_t].attributes.unit_of_measurement || "")), Wo = ft("binary_sensor").filter((_t) => Lt(_t) === "moisture"), So = ne(ft("plant"), (_t) => _t.startsWith("plant.")).map((_t) => ({ id: _t, readings: Ot((ve) => ve.startsWith("sensor." + _t.split(".")[1] + "_")) })), Ha = [...ft("binary_sensor").filter((_t) => it.includes(Lt(_t))), ...Ot((_t) => _t.startsWith("binary_sensor."))];
      return {
        id: rt,
        name: ot.name,
        icon: ot.icon,
        floor: ot.floor_id || null,
        readings: [...gt.slice(0, 1), ...Ve.slice(0, 1), ...Wo],
        power: Xa.length ? Xa.reduce((_t, ve) => _t + Number(wt[ve].state) * (wt[ve].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: ft("switch"),
        lights: ft("light"),
        actions: [...ft("light"), ...ne(ft("climate"), (_t) => _t.startsWith("climate.")), ...ne(ft("cover"), (_t) => _t.startsWith("cover.")), ...ne(ft("humidifier"), (_t) => _t.startsWith("humidifier.")), ...ne(ft("valve"), (_t) => _t.startsWith("valve.")), ...ft("media_player"), ...ft("vacuum"), ...G.length ? [] : Ot((_t) => _t.startsWith("vacuum."))],
        solar: Ot((_t) => _t.includes("_solar_")),
        plants: So,
        openings: Ha,
        alerts: [...Wo, ...Ha].filter((_t) => {
          var ve;
          return ((ve = wt[_t]) == null ? void 0 : ve.state) === "on";
        })
      };
    }).filter((ot) => ot.readings.length || ot.plugs.length || ot.actions.length || ot.solar.length || ot.plants.length), O = Object.keys(pt).find((ot) => /^sensor\..*(p1_meter_power|grid_power)$/.test(ot) && pt[ot].state !== "unavailable") || null, J = (ot) => Object.keys(pt).filter((rt) => rt.startsWith(ot + ".") && Z(rt)), T = J("alarm_control_panel"), dt = G.length ? G : j ? ["vacuum." + Ce + "robot"] : [];
    return {
      states: wt,
      rooms: Nt,
      grid: O,
      // any device's room, hidden ones too (Maintenance's batteries are mostly diagnostic)
      areaOf: (ot) => lt[ot] ? c[ot] : X(ot),
      vacuums: dt,
      homeVacuums: dt.filter((ot) => !Nt.some((rt) => rt.actions.includes(ot))),
      security: {
        alarms: T.length ? T : j ? ["alarm_control_panel." + Ce + "house"] : [],
        locks: J("lock"),
        openings: [...Object.keys(lt).filter((ot) => ot.startsWith("binary_sensor.")), ...j ? ["sensor." + Ce + "doorbell"] : []]
      }
    };
  }
  return { model: at, call: tt, stop() {
    clearInterval(V), clearInterval($);
  } };
}
const Ma = {
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
}, wr = (o) => o < 0 ? 0 : o > 1 ? 1 : o, kl = (o) => {
  const r = String(o || "#000000").trim().replace("#", ""), c = r.length === 3 ? r.split("").map((p) => p + p).join("") : r;
  return [0, 2, 4].map((p) => parseInt(c.slice(p, p + 2), 16) || 0);
}, qu = (o) => "#" + o.map((r) => Math.round(Math.max(0, Math.min(255, r))).toString(16).padStart(2, "0")).join(""), ed = {}, xa = (o, r, c) => {
  const p = o + r + c;
  return ed[p] || (ed[p] = qu(kl(o).map((g, y) => g + (kl(r)[y] - g) * c)));
}, ad = {}, rl = (o) => ad[o] || (ad[o] = kl(o));
function ip(o, r) {
  const c = String(o || "");
  return (c === "sunny" || c === "clear-night" ? "clear" : c === "partlycloudy" ? "partly" : c === "fog" ? "fog" : c === "lightning" || c === "lightning-rainy" ? "storm" : c === "snowy" || c === "snowy-rainy" ? "snow" : c === "rainy" || c === "pouring" || c === "hail" ? "rain" : "cloudy") + "/" + (c === "clear-night" || r ? "night" : "day");
}
function Wu(o) {
  const r = { clear: [o.skyClearDay, o.skyClearNight], cloudy: [o.skyCloudyDay, o.skyCloudyNight], rain: [o.skyRainDay, o.skyRainNight], snow: [o.skySnowDay, o.skySnowNight], fog: [o.skyFogDay, o.skyFogNight] };
  return r.partly = [xa(r.clear[0], r.cloudy[0], 0.12), xa(r.clear[1], r.cloudy[1], 0.12)], r.storm = [xa(r.rain[0], "#000000", 0.22), xa(r.rain[1], "#000000", 0.22)], r;
}
const Ml = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], Sl = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], Al = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function ju(o, r = Ma) {
  const c = { ...Ma, ...r }, p = Wu(c), g = String(o).split("/"), y = p[g[0]] ? g[0] : "clear", w = g[1] === "night", A = p[y][w ? 1 : 0], N = {
    night: w,
    clearness: y === "clear" ? 1 : y === "partly" ? 0.7 : 0.25,
    sky: A,
    skyStops: [A],
    skyT: 0,
    sun: { x: 45, y: w ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: w ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: w ? 1 : 0 },
    stars: Ml.map(() => ({ o: 0 })),
    rain: Sl.map(() => ({ o: 0, dy: -16 })),
    snow: Al.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, x = (_) => Ml.map(() => ({ o: _ }));
  return y === "clear" ? w ? (N.moon.o = 1, N.stars = x(1)) : N.sun.o = 1 : y === "partly" ? (N.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: w ? 1 : 0 }, w ? (N.moon = { x: 34, y: 33, d: 48, o: 1 }, N.stars = x(0.7)) : N.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : y === "cloudy" || y === "fog" ? (N.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: w ? 1 : 0 }, w ? N.moon = { x: 40, y: 36, d: 40, o: 0 } : N.sun = { x: 40, y: 36, r: 20, o: 0 }) : (N.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, w ? N.moon = { x: 38, y: 28, d: 36, o: 0 } : N.sun = { x: 38, y: 28, r: 18, o: 0 }, y === "snow" ? N.snow = Al.map(() => ({ o: 1, dy: 0 })) : N.rain = Sl.map((_, R) => ({ o: y === "storm" && R === 1 ? 0 : 1, dy: 0 })), y === "storm" && (N.bolt = { o: 1, dy: 0 })), N;
}
const Vu = [
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
], cn = (o, r) => (Vu[(r & 7) * 8 + (o & 7)] + 0.5) / 64, zu = 0, sp = 1, lp = 2, cp = 3, dp = 4, Za = 5, Hi = 6, Hn = 7, pp = 8, od = (o, r) => r <= 0.6665 && ((o - 0.5) * (o - 0.5) + (r - 0.2877) * (r - 0.2877) <= 0.0824 || (o - 0.25) * (o - 0.25) + (r - 0.416) * (r - 0.416) <= 0.0625 || (o - 0.791) * (o - 0.791) + (r - 0.458) * (r - 0.458) <= 0.0437 || o >= 0.25 && o <= 0.791 && r >= 0.416), Gu = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], Uu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((o) => [o[0] * 13 / 11, o[1] * 28 / 24]), Yu = (o, r, c) => {
  let p = !1;
  for (let g = 0, y = o.length - 1; g < o.length; y = g++) {
    const w = o[g], A = o[y];
    w[1] > c != A[1] > c && r < (A[0] - w[0]) * (c - w[1]) / (A[1] - w[1]) + w[0] && (p = !p);
  }
  return p;
};
function Zu(o, { size: r = 90, px: c = 2, oneBit: p = !1, colors: g = Ma, ink: y = "#26221e", paper: w = "#fbf9f6", clock: A = 0, idle: N = !1 } = {}) {
  const x = { ...Ma, ...g }, _ = Math.sin, R = Math.PI * 2, V = Math.max(6, Math.round(r / c)), $ = V / 90, tt = N ? Math.floor(A / 100) * 100 : 0, at = N ? _(R * tt / 3600) : 0, K = N ? 1.8 * _(R * tt / 6400) : 0, j = N ? 0.9 * _(R * tt / 4100) : 0, lt = N ? 0.8 * _(R * tt / 5200) : 0, pt = tt / 3400 % 1, mt = N && o.bolt.o > 0.5 && (pt < 0.04 || pt > 0.08 && pt < 0.11), nt = new Array(V * V), X = new Uint8Array(V * V), Z = (O, J, T, dt, ot) => {
    T == null || O < 0 || J < 0 || O >= V || J >= V || (dt >= 1 || dt > cn(O + 5, J + 3)) && (nt[J * V + O] = T, X[J * V + O] = ot);
  }, E = (O, J, T, dt) => {
    for (let ot = Math.max(0, Math.floor(J - T) - 1); ot <= Math.min(V - 1, J + T + 1); ot++) for (let rt = Math.max(0, Math.floor(O - T) - 1); rt <= Math.min(V - 1, O + T + 1); rt++) dt(rt, ot, rt + 0.5 - O, ot + 0.5 - J);
  }, wt = o.skyStops || [o.sky], Lt = o.skyT || 0;
  for (let O = 0; O < V; O++) {
    const J = o.night ? wr(1 - (O + 0.5) / (V * 0.7)) * 0.85 : wr(((O + 0.5) / V - 0.35) / 0.65) * 0.85;
    for (let T = 0; T < V; T++) {
      let dt = wt[0];
      if (wt.length > 1) {
        const ot = Lt * (wt.length - 1), rt = Math.min(wt.length - 2, Math.floor(ot));
        dt = ot - rt > cn(T, O) ? wt[rt + 1] : wt[rt];
      }
      J > cn(T + 2, O + 5) && (dt = o.night ? xa(dt, "#000000", 0.28) : xa(dt, "#ffffff", 0.2)), nt[O * V + T] = mt ? xa(dt, "#ffffff", 0.25) : dt;
    }
  }
  if (o.sun.o > 0.01) {
    const O = o.sun.x * $, J = o.sun.y * $, T = Math.max(1, o.sun.r * $);
    if (N) {
      const dt = T * (1.45 + 0.06 * at), ot = xa(x.sun, "#ffffff", 0.55);
      if (E(O, J, dt, (rt, vt, ft, yt) => {
        const Ot = Math.sqrt(ft * ft + yt * yt);
        Ot > T && Ot < dt && Z(rt, vt, ot, 0.26 * (1 - (Ot - T) / (dt - T)) * o.sun.o, zu);
      }), o.sun.o > 0.5) {
        const rt = Math.floor(tt / 500) % 2, vt = Math.max(1, T * 0.22);
        for (let ft = 0; ft < 8; ft++) if (ft % 2 === rt) for (let yt = T + 1.5; yt < T + 1.5 + vt; yt += 0.7) Z(Math.floor(O + Math.cos(ft * Math.PI / 4) * yt), Math.floor(J + Math.sin(ft * Math.PI / 4) * yt), x.sun, o.sun.o, pp);
      }
    }
    E(O, J, T, (dt, ot, rt, vt) => {
      if (rt * rt + vt * vt > T * T) return;
      const ft = ((rt * 0.643 + vt * 0.766) / T + 1) / 2;
      Z(dt, ot, wr((ft - 0.62) / 0.38) > cn(dt, ot) ? x.sunEdge : x.sun, o.sun.o, sp);
    });
  }
  if (Ml.forEach((O, J) => {
    const T = o.stars[J].o;
    if (T < 0.01) return;
    const dt = Math.floor(O[0] * $), ot = Math.floor(O[1] * $), rt = N ? (Math.floor(tt / 300) + J * 3) % 6 : 0;
    if (rt === 5) return;
    const vt = Math.round(O[2] * $ * (rt === 4 ? 0.3 : rt < 2 ? 1 : 0.6));
    Z(dt, ot, x.star, T, Hn);
    for (let ft = 1; ft <= vt; ft++) {
      const yt = ft === vt && vt > 1 ? xa(x.star, o.sky, 0.5) : x.star;
      Z(dt - ft, ot, yt, T, Hn), Z(dt + ft, ot, yt, T, Hn), Z(dt, ot - ft, yt, T, Hn), Z(dt, ot + ft, yt, T, Hn);
    }
  }), o.moon.o > 0.01) {
    const O = Math.max(1.5, o.moon.d * $ * 0.37), J = o.moon.x * $, T = o.moon.y * $ + (N && lt > 0.4 ? -1 : 0), dt = J + 0.547 * O, ot = T - 0.503 * O, rt = 0.82 * O, vt = xa(x.moon, "#ffffff", 0.6);
    E(J, T, O, (ft, yt, Ot, ne) => {
      if (Ot * Ot + ne * ne > O * O) return;
      const gt = ft + 0.5 - dt, Ve = yt + 0.5 - ot;
      gt * gt + Ve * Ve <= rt * rt || Z(ft, yt, wr((ne + O) / (2 * O) * 1.1 - 0.1) > cn(ft, yt) ? x.moon : vt, o.moon.o, lp);
    });
  }
  const it = Math.max(2, Math.round(15.65 * $)), G = Math.max(1, Math.round(5.87 * $ * 0.5));
  Sl.forEach((O, J) => {
    const T = o.rain[J];
    let dt = T.dy, ot = T.o;
    if (ot < 0.01) return;
    if (N) {
      const ft = (tt / 950 + J / 3) % 1;
      dt += -5 + ft * 14, ot *= ft < 0.18 ? ft / 0.18 : ft > 0.72 ? (1 - ft) / 0.28 : 1;
    }
    const rt = (O[0] + 3 + K) * $, vt = (O[1] + dt) * $;
    for (let ft = 0; ft < it; ft++) for (let yt = 0; yt < G; yt++) Z(Math.floor(rt - 0.208 * ft) + yt, Math.floor(vt) + ft, x.rain, ot, dp);
  });
  const Nt = Math.max(0, Math.round(7.34 * $ / 2.6));
  if (Al.forEach((O, J) => {
    const T = o.snow[J];
    let dt = T.dy, ot = 0, rt = T.o;
    if (rt < 0.01) return;
    if (N) {
      const yt = (tt / 3200 + J / 5) % 1;
      dt += -6 + yt * 14, ot = 1.5 * _(R * (yt * 1.5 + J / 5)), rt *= yt < 0.2 ? yt / 0.2 : yt > 0.75 ? (1 - yt) / 0.25 : 1;
    }
    const vt = Math.floor((O[0] + 3.67 + ot + K) * $), ft = Math.floor((O[1] + 3.67 + dt) * $);
    Z(vt, ft, x.snow, rt, Za);
    for (let yt = 1; yt <= Nt; yt++)
      Z(vt - yt, ft, x.snow, rt, Za), Z(vt + yt, ft, x.snow, rt, Za), Z(vt, ft - yt, x.snow, rt, Za), Z(vt, ft + yt, x.snow, rt, Za), Nt > 1 && yt < Nt && (Z(vt - yt, ft - yt, x.snow, rt, Za), Z(vt + yt, ft - yt, x.snow, rt, Za), Z(vt - yt, ft + yt, x.snow, rt, Za), Z(vt + yt, ft + yt, x.snow, rt, Za));
  }), o.bolt.o > 0.01)
    if (V >= 30) {
      const O = 39 + K, J = 50 + o.bolt.dy;
      for (let T = Math.floor(J * $); T <= (J + 28) * $; T++) for (let dt = Math.floor(O * $); dt <= (O + 13) * $; dt++)
        Yu(Uu, (dt + 0.5) / $ - O, (T + 0.5) / $ - J) && Z(dt, T, x.sun, o.bolt.o, Hi);
    } else {
      const O = V / 18, J = 7, T = 10 + Math.round(o.bolt.dy * 0.2);
      Gu.forEach((dt, ot) => dt.split("").forEach((rt, vt) => {
        if (rt !== "#") return;
        const ft = Math.floor((J + vt) * O), yt = Math.floor((T + ot) * O);
        for (let Ot = yt; Ot < Math.max(yt + 1, Math.floor((T + ot + 1) * O)); Ot++) for (let ne = ft; ne < Math.max(ft + 1, Math.floor((J + vt + 1) * O)); ne++) Z(ne, Ot, x.sun, o.bolt.o, Hi);
      }));
    }
  if (o.cloud.o > 0.01) {
    const O = Math.max(3, o.cloud.w * $), J = O * 0.6665, T = (o.cloud.x + K) * $ - O / 2, dt = (o.cloud.y + j) * $ - J / 2, ot = xa(x.cloudDay, x.cloudNight, Math.round(o.cloud.f * 4) / 4), rt = xa(ot, "#000000", 0.16);
    for (let vt = Math.max(0, Math.floor(dt) - 1); vt <= Math.min(V - 1, dt + J + 1); vt++) for (let ft = Math.max(0, Math.floor(T) - 1); ft <= Math.min(V - 1, T + O + 1); ft++) {
      const yt = (ft + 0.5 - T) / O, Ot = (vt + 0.5 - dt) / O;
      od(yt, Ot) && Z(ft, vt, !od(yt, Ot + 1 / O) || wr((Ot - 0.42) / 0.25) * 0.8 > cn(ft, vt) ? rt : ot, o.cloud.o, cp);
    }
  }
  return Ku(nt, X, V, V, { oneBit: p, ink: y, paper: w, snowInk: !o.night });
}
function Ku(o, r, c, p, { oneBit: g, ink: y, paper: w, snowInk: A }) {
  const N = new Uint8ClampedArray(c * p * 4), x = rl(y), _ = rl(w);
  for (let R = 0; R < p; R++) for (let V = 0; V < c; V++) {
    const $ = R * c + V, tt = r[$];
    if (o[$] == null) continue;
    let at = rl(o[$]);
    if (g) {
      let K;
      tt === dp || tt === pp ? K = !0 : tt === Za ? K = A : tt === Hn || tt === Hi ? K = !1 : K = Math.round((0.2126 * at[0] + 0.7152 * at[1] + 0.0722 * at[2]) / 255 * 4) / 4 <= cn(V, R), (tt === sp || tt === lp || tt === cp || tt === Hi) && (V > 0 && r[$ - 1] !== tt || V < c - 1 && r[$ + 1] !== tt || R > 0 && r[$ - c] !== tt || R < p - 1 && r[$ + c] !== tt) && (K = !0), at = K ? x : _;
    }
    N[$ * 4] = at[0], N[$ * 4 + 1] = at[1], N[$ * 4 + 2] = at[2], N[$ * 4 + 3] = 255;
  }
  return { w: c, h: p, data: N };
}
const xo = (o) => o < 0 ? 0 : o > 1 ? 1 : o, Cl = (o) => {
  const r = String(o || "#000000").trim().replace("#", ""), c = r.length === 3 ? r.split("").map((p) => p + p).join("") : r;
  return [0, 2, 4].map((p) => parseInt(c.slice(p, p + 2), 16) || 0);
}, Xu = (o) => "#" + o.map((r) => Math.round(Math.max(0, Math.min(255, r))).toString(16).padStart(2, "0")).join(""), nd = {}, ka = (o, r, c) => {
  const p = o + r + c;
  return nd[p] || (nd[p] = Xu(Cl(o).map((g, y) => g + (Cl(r)[y] - g) * c)));
}, rd = {}, Ei = (o) => rd[o] || (rd[o] = Cl(o));
function $u(o) {
  const r = { clear: [o.skyClearDay, o.skyClearNight], cloudy: [o.skyCloudyDay, o.skyCloudyNight], rain: [o.skyRainDay, o.skyRainNight], snow: [o.skySnowDay, o.skySnowNight], fog: [o.skyFogDay, o.skyFogNight] };
  return r.partly = [ka(r.clear[0], r.cloudy[0], 0.12), ka(r.clear[1], r.cloudy[1], 0.12)], r.storm = [ka(r.rain[0], "#000000", 0.22), ka(r.rain[1], "#000000", 0.22)], r;
}
const Ju = [
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
], vo = (o, r) => (Ju[(r & 7) * 8 + (o & 7)] + 0.5) / 64, fp = 1, up = 2, hp = 3, mp = 4, Nn = 5, Ni = 6, _l = 7, gp = 8, id = (o, r) => r <= 0.6665 && ((o - 0.5) * (o - 0.5) + (r - 0.2877) * (r - 0.2877) <= 0.0824 || (o - 0.25) * (o - 0.25) + (r - 0.416) * (r - 0.416) <= 0.0625 || (o - 0.791) * (o - 0.791) + (r - 0.458) * (r - 0.458) <= 0.0437 || o >= 0.25 && o <= 0.791 && r >= 0.416), Qu = (o, r, c) => {
  let p = !1;
  for (let g = 0, y = o.length - 1; g < o.length; y = g++) {
    const w = o[g], A = o[y];
    w[1] > c != A[1] > c && r < (A[0] - w[0]) * (c - w[1]) / (A[1] - w[1]) + w[0] && (p = !p);
  }
  return p;
};
function th(o, r, c, p, { oneBit: g, ink: y, paper: w, snowInk: A }) {
  const N = new Uint8ClampedArray(c * p * 4), x = Ei(y), _ = Ei(w);
  for (let R = 0; R < p; R++) for (let V = 0; V < c; V++) {
    const $ = R * c + V, tt = r[$];
    if (o[$] == null) continue;
    let at = Ei(o[$]);
    if (g) {
      let K;
      tt === mp || tt === gp ? K = !0 : tt === Nn ? K = A : tt === _l || tt === Ni ? K = !1 : K = Math.round((0.2126 * at[0] + 0.7152 * at[1] + 0.0722 * at[2]) / 255 * 4) / 4 <= vo(V, R), (tt === fp || tt === up || tt === hp || tt === Ni) && (V > 0 && r[$ - 1] !== tt || V < c - 1 && r[$ + 1] !== tt || R > 0 && r[$ - c] !== tt || R < p - 1 && r[$ + c] !== tt) && (K = !0), at = K ? x : _;
    }
    N[$ * 4] = at[0], N[$ * 4 + 1] = at[1], N[$ * 4 + 2] = at[2], N[$ * 4 + 3] = 255;
  }
  return { w: c, h: p, data: N };
}
const eh = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, ah = (o) => ip(o, !1).split("/")[0], il = (o) => () => {
  o |= 0, o = o + 1831565813 | 0;
  let r = Math.imul(o ^ o >>> 15, 1 | o);
  return r = r + Math.imul(r ^ r >>> 7, 61 | r) ^ r, ((r ^ r >>> 14) >>> 0) / 4294967296;
}, oh = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", nh = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", rh = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", ih = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", sh = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], lh = [".##", "##.", ".#.", "#.."];
function bp(o, { width: r, height: c, colors: p, wave: g = 0.38, soft: y = 6, glow: w = 0.6, columns: A = 6 }) {
  const N = { ...Ma, dawn: "#e5a77e", ...p }, x = $u(N), _ = r, R = c, V = _ / A, $ = V / 2, tt = Math.PI * 2, at = o.length ? o : [{ cond: "cloudy", night: !1 }], K = [...Array(A * 2)].map((mt, nt) => {
    const X = at[Math.min(nt, at.length - 1)], Z = ah(X.cond), E = nt % 2 === 1;
    return { cond: X.cond, k: Z, night: E, sky: x[Z][E ? 1 : 0], cover: eh[Z] };
  }), j = (mt) => R * (0.5 - g * Math.cos(tt * (mt / V - 0.25)));
  return { C: N, S: K, W: _, H: R, cw: V, sw: $, TAU: tt, yb: j, side: (mt, nt, X) => {
    const Z = (mt ? j(nt) - X : X - j(nt)) / Math.max(3, y * 1.4) + 0.5;
    return Z <= 0 ? 0 : Z >= 1 ? 1 : Z;
  }, glowAt: (mt) => {
    const nt = ((mt / V - 0.25) % 1 + 1) % 1, X = Math.max(0, Math.min(A - 1, Math.round(mt / V - 0.25))), Z = Math.max(0, Math.min(A - 1, Math.round(mt / V - 0.75))), E = 1 - (K[2 * X].cover + K[2 * Z + 1].cover) / 2, wt = Math.sin(Math.PI * Math.min(1, Math.max(0, j(mt) / R)));
    return { c: nt < 0.5 ? N.dusk : N.dawn, a: w * (0.2 + 0.8 * E) * wt * wt };
  }, soft: y, tw: V * 0.3, sy: R / 90 };
}
function wp(o, { clock: r = 0, ambient: c = !1, seed: p = 1 }) {
  const { S: g, sw: y, side: w, C: A, TAU: N, sy: x, H: _ } = o, R = r, V = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  g.forEach((at, K) => {
    const j = il(p * 977 + K * 131 + 7), lt = (K + 0.5) * y, pt = at.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[at.k] : 0;
    for (let mt = 0; mt < pt; mt++) {
      const nt = lt + (j() - 0.5) * y * 1.6, X = (6 + j() * 76) * x, Z = j() < 0.35, E = 1.8 + j() * 1.6, wt = w(!0, nt, X) * (Z ? 0.95 : 0.7) * (c ? 0.6 + 0.4 * Math.sin(N * R / 2600 + mt * 1.7 + K) : 1);
      wt >= 0.03 && V.stars.push({ x: nt, y: X, big: Z, size: E, o: wt });
    }
    if (!at.night && (at.k === "clear" || at.k === "partly")) {
      const mt = lt + (j() - 0.5) * y * 0.3, nt = Math.min(15, y * 0.29);
      V.suns.push({ x: mt, y: 32 * x, rad: nt, halo: nt * 2.8 * (c ? 1 + 0.07 * Math.sin(N * R / 3600 + K) : 1) });
    }
    if (at.night && (at.k === "clear" || at.k === "partly")) {
      const mt = Math.min(0.78, y * 0.55 / 34), nt = lt - 23 * mt + (j() - 0.5) * y * 0.2;
      V.moons.push({ x: nt + 23 * mt, y: (4 + (c ? 0.8 * Math.sin(N * R / 5200 + K) : 0)) * x + 23 * mt, d: 46 * mt });
    }
  });
  const $ = Math.max(56, Math.min(100, _ * 0.45)), tt = Math.max(1, y / ($ * 2.4));
  return g.forEach((at, K) => {
    const j = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[at.k];
    if (!j) return;
    const lt = at.k === "partly" ? 1 : Math.round(j * tt), pt = il(p * 577 + K * 71 + 3), mt = (K + 0.5) * y, nt = at.k === "rain" || at.k === "storm" || at.night ? A.cloudNight : A.cloudDay, X = at.night ? 0.82 : at.k === "storm" ? 0.75 : 1;
    for (let Z = 0; Z < lt; Z++) {
      const E = $ / 46 * (at.k === "partly" ? 1 : 0.8 + pt() * 0.4), wt = mt + (at.k === "partly" ? y * 0.12 : ((Z + 0.5) / lt - 0.5) * y * 0.95 + (pt() - 0.5) * y * 0.5 / lt), Lt = (at.k === "partly" ? 40 : 6 + pt() * 26) * x, it = c ? 2.5 * Math.sin(N * R / 9e3 + K * 1.3 + Z * 2.1) : 0, G = c ? 0.9 * Math.sin(N * R / 6100 + K + Z) : 0;
      V.clouds.push({ x: wt - 23 * E + it, y: Lt - 15.33 * E + G, w: 46 * E, h: 30.66 * E, fill: nt, o: X * (lt > 1 && Z === 0 ? 0.85 : 1) });
    }
  }), g.forEach((at, K) => {
    const j = il(p * 313 + K * 29 + 11), lt = (K + 0.5) * y, pt = at.cond === "pouring" ? 16 : at.cond === "rainy" || at.cond === "hail" ? 9 : at.cond === "lightning-rainy" ? 12 : at.cond === "snowy-rainy" ? 5 : 0;
    for (let nt = 0; nt < pt; nt++) {
      let X = lt + (j() - 0.5) * y * 1.05, Z = 44 + j() * 36, E = 1;
      if (c) {
        const Lt = ((Z - 44 + R * 0.04) % 36 + 36) % 36;
        X -= 0.21 * (Lt - (Z - 44)), Z = 44 + Lt, E = Math.min(1, Lt / 6, (36 - Lt) / 6);
      }
      Z *= x;
      const wt = w(at.night, X, Z) * E;
      wt >= 0.05 && V.drops.push({ x: X, y: Z, o: wt });
    }
    const mt = at.cond === "snowy" ? 11 : at.cond === "snowy-rainy" ? 6 : 0;
    for (let nt = 0; nt < mt; nt++) {
      let X = lt + (j() - 0.5) * y * 1.05, Z = 40 + j() * 44, E = 1;
      if (c) {
        const Lt = ((Z - 40 + R * 9e-3) % 44 + 44) % 44;
        Z = 40 + Lt, X += 1.6 * Math.sin(N * R / 2800 + nt * 1.9 + K), E = Math.min(1, Lt / 6, (44 - Lt) / 6);
      }
      Z *= x;
      const wt = w(at.night, X, Z) * E;
      wt >= 0.05 && V.flakes.push({ x: X, y: Z, o: wt });
    }
    if (at.k === "fog") {
      const nt = at.night ? "#c8ccd6" : "#ffffff", X = at.night ? 0.28 : 0.62, Z = c ? 4 * Math.sin(N * R / 8e3 + K) : 0;
      for (let E = 0; E < 4; E++) V.fogs.push({ x: lt - y * 0.75 + E % 2 * y * 0.18 + (E % 2 ? Z : -Z), y: (30 + E * 13) * x, w: y * 1.3, c: nt, a: X });
    }
    if (at.k === "storm") {
      const nt = (R / 3400 + K * 0.37) % 1;
      V.bolts.push({ x: lt + (j() - 0.5) * y * 0.3 - 5, y: 36 * x, o: c && !(nt < 0.05 || nt > 0.09 && nt < 0.12) ? 0.8 : 1 });
    }
  }), V;
}
function ch(o, r, c, p, g, y, w, A) {
  const { S: N, C: x, cw: _, yb: R, glowAt: V, soft: $, tw: tt, sy: at } = o, K = new Array(c * p), j = new Uint8Array(c * p), lt = new Uint8Array(c * p), pt = (O, J, T, dt, ot) => {
    T == null || O < 0 || J < 0 || O >= c || J >= p || (dt >= 1 || dt > vo(O + 5, J + 3)) && (K[J * c + O] = T, j[J * c + O] = ot);
  }, mt = (O, J, T, dt) => {
    for (let ot = Math.max(0, Math.floor(J - T) - 1); ot <= Math.min(p - 1, J + T + 1); ot++) for (let rt = Math.max(0, Math.floor(O - T) - 1); rt <= Math.min(c - 1, O + T + 1); rt++) dt(rt, ot, rt + 0.5 - O, ot + 0.5 - J);
  }, nt = (O, J, T) => {
    for (let ot = 0; ot < O.length - 1; ot++) {
      const rt = (ot + J) * _;
      if (T < rt - tt / 2) return [O[ot], O[ot], 0];
      if (T <= rt + tt / 2) return [O[ot], O[ot + 1], (T - rt + tt / 2) / tt];
    }
    const dt = O[O.length - 1];
    return [dt, dt, 0];
  }, X = N.filter((O) => !O.night).map((O) => O.sky), Z = N.filter((O) => O.night).map((O) => O.sky), E = $ / y, wt = 16 * at / y;
  for (let O = 0; O < c; O++) {
    const J = (O + 0.5) * g, T = R(J) / y, dt = nt(X, 0.75, J), ot = nt(Z, 1.25, J), rt = V(J);
    for (let vt = 0; vt < p; vt++) {
      const ft = vo(O, vt), yt = vt + 0.5 - T, Ot = (E > 0.01 ? xo(0.5 + yt / E) : yt > 0 ? 1 : 0) > ft;
      let ne = Ot ? dt[2] > ft ? dt[1] : dt[0] : ot[2] > ft ? ot[1] : ot[0];
      (Ot ? xo(((vt + 0.5) / p - 0.45) / 0.55) * 0.7 : xo(1 - (vt + 0.5) / (p * 0.55)) * 0.7) > vo(O + 2, vt + 5) && (ne = Ot ? ka(ne, "#ffffff", 0.18) : ka(ne, "#000000", 0.25)), Ot && yt >= 0 && yt < wt && rt.a * 1.3 * (1 - yt / wt) > vo(O + 6, vt + 1) && (ne = rt.c), K[vt * c + O] = ne, lt[vt * c + O] = Ot ? 0 : 1;
    }
  }
  const Lt = ka(x.sun, "#ffffff", 0.55), it = ka(x.moon, "#ffffff", 0.6);
  r.stars.forEach((O) => {
    const J = Math.floor(O.x / g), T = Math.floor(O.y / y);
    if (J < 0 || T < 0 || J >= c || T >= p || !lt[T * c + J] || O.o < 0.15) return;
    const dt = O.o > 0.45 ? x.star : ka(x.star, K[T * c + J], 0.5), ot = O.big && O.o > 0.6 ? Math.floor(O.size / g) : 0;
    pt(J, T, dt, 1, _l);
    for (let rt = 1; rt <= ot; rt++) [[J - rt, T], [J + rt, T], [J, T - rt], [J, T + rt]].forEach((vt) => {
      vt[0] >= 0 && vt[1] >= 0 && vt[0] < c && vt[1] < p && lt[vt[1] * c + vt[0]] && pt(vt[0], vt[1], dt, 1, _l);
    });
  }), r.suns.forEach((O) => {
    const J = Math.max(1.5, O.rad / g), T = O.x / g, dt = O.y / y, ot = O.halo / g * 0.85;
    if (mt(T, dt, ot, (rt, vt, ft, yt) => {
      const Ot = Math.sqrt(ft * ft + yt * yt);
      Ot > J && Ot < ot && !lt[vt * c + rt] && pt(rt, vt, Lt, 0.3 * (1 - (Ot - J) / (ot - J)), 0);
    }), A) {
      const rt = Math.floor(w / 500) % 2, vt = Math.max(1, J * 0.3);
      for (let ft = 0; ft < 8; ft++) if (ft % 2 === rt) for (let yt = J + 1.2; yt < J + 1.2 + vt; yt += 0.7) pt(Math.floor(T + Math.cos(ft * Math.PI / 4) * yt), Math.floor(dt + Math.sin(ft * Math.PI / 4) * yt), x.sun, 1, gp);
    }
    mt(T, dt, J, (rt, vt, ft, yt) => {
      ft * ft + yt * yt <= J * J && pt(rt, vt, xo(((yt / J + 1) / 2 - 0.6) / 0.4) > vo(rt, vt) ? x.sunEdge : x.sun, 1, fp);
    });
  }), r.moons.forEach((O) => {
    const J = Math.max(1.5, O.d * 0.37 / g), T = O.x / g, dt = O.y / y, ot = T + 0.547 * J, rt = dt - 0.503 * J, vt = 0.82 * J;
    mt(T, dt, J, (ft, yt, Ot, ne) => {
      if (Ot * Ot + ne * ne > J * J) return;
      const gt = ft + 0.5 - ot, Ve = yt + 0.5 - rt;
      gt * gt + Ve * Ve > vt * vt && pt(ft, yt, xo((ne + J) / (2 * J) * 1.1 - 0.1) > vo(ft, yt) ? x.moon : it, 1, up);
    });
  }), r.clouds.forEach((O) => {
    const J = Math.max(3, O.w / g), T = J * 0.6665, dt = O.x / g, ot = O.y / y, rt = ka(O.fill, "#000000", 0.16);
    for (let vt = Math.max(0, Math.floor(ot) - 1); vt <= Math.min(p - 1, ot + T + 1); vt++) for (let ft = Math.max(0, Math.floor(dt) - 1); ft <= Math.min(c - 1, dt + J + 1); ft++) {
      const yt = (ft + 0.5 - dt) / J, Ot = (vt + 0.5 - ot) / J;
      id(yt, Ot) && pt(ft, vt, !id(yt, Ot + 1 / J) || xo((Ot - 0.42) / 0.25) * 0.8 > vo(ft, vt) ? rt : O.fill, O.o, hp);
    }
  }), r.fogs.forEach((O) => {
    const J = Math.floor(O.y / y), T = Math.max(J, Math.floor((O.y + 6 * at) / y) - 1), dt = Math.floor(O.x / g), ot = Math.floor((O.x + O.w) / g);
    for (let rt = J; rt <= T; rt++) for (let vt = dt; vt <= ot; vt++) {
      const ft = (vt - dt) / Math.max(1, ot - dt);
      pt(vt, rt, O.c, O.a * (ft < 0.25 ? ft / 0.25 : ft > 0.75 ? (1 - ft) / 0.25 : 1), 0);
    }
  });
  const G = Math.max(2, Math.round(9 / y));
  r.drops.forEach((O) => {
    const J = O.x / g, T = Math.floor(O.y / y);
    for (let dt = 0; dt < G; dt++) pt(Math.floor(J - 0.208 * dt * y / g), T + dt, x.rain, O.o, mp);
  });
  const Nt = Math.max(0, Math.round(4.4 / g / 2.6));
  return r.flakes.forEach((O) => {
    const J = Math.floor(O.x / g), T = Math.floor(O.y / y);
    pt(J, T, x.snow, O.o, Nn);
    for (let dt = 1; dt <= Nt; dt++)
      pt(J - dt, T, x.snow, O.o, Nn), pt(J + dt, T, x.snow, O.o, Nn), pt(J, T - dt, x.snow, O.o, Nn), pt(J, T + dt, x.snow, O.o, Nn);
  }), r.bolts.forEach((O) => {
    if (g <= 3.5)
      for (let J = Math.floor(O.y / y); J <= (O.y + 24) / y; J++) for (let T = Math.floor(O.x / g); T <= (O.x + 11) / g; T++)
        Qu(sh, (T + 0.5) * g - O.x, (J + 0.5) * y - O.y) && pt(T, J, x.sun, 1, Ni);
    else {
      const J = Math.round(O.x / g), T = Math.round(O.y / y);
      lh.forEach((dt, ot) => dt.split("").forEach((rt, vt) => {
        rt === "#" && pt(J + vt, T + ot, x.sun, 1, Ni);
      }));
    }
  }), { col: K, ids: j };
}
function dh(o, r) {
  const c = r.px, p = Math.max(6, Math.round(r.width / c)), g = Math.max(6, Math.round(r.height / c)), y = r.width / p, w = r.height / g, A = r.ambient ? Math.floor((r.clock || 0) / 100) * 100 : 0, N = ($) => {
    const tt = bp($, r);
    return ch(tt, wp(tt, { clock: A, ambient: r.ambient, seed: r.seed }), p, g, y, w, A, r.ambient);
  }, x = N(o), _ = r.reveal == null ? 1 : xo(r.reveal);
  let R = x.col, V = x.ids;
  if (_ < 1) {
    const $ = r.prev ? N(r.prev) : null, tt = _ * (p + 12);
    R = new Array(p * g), V = new Uint8Array(p * g);
    for (let at = 0; at < p * g; at++) {
      const K = at % p, j = at / p | 0;
      (r.reduce ? _ : xo((tt - K) / 12)) > vo(K, j) ? (R[at] = x.col[at], V[at] = x.ids[at]) : $ ? (R[at] = $.col[at], V[at] = $.ids[at]) : (R[at] = null, V[at] = 255);
    }
  }
  return th(R, V, p, g, { oneBit: r.oneBit, ink: r.ink || "#26221e", paper: r.paper || "#fbf9f6", snowInk: !1 });
}
function ph(o, r, c) {
  const p = c.width, g = c.height, y = c.reveal == null ? 1 : xo(c.reveal), w = (V, $) => {
    const tt = bp($, c);
    fh(V, tt, wp(tt, c));
  };
  if (o.clearRect(0, 0, p, g), y >= 1) {
    w(o, r);
    return;
  }
  if (c.prev && w(o, c.prev), c.reduce) {
    o.save(), o.globalAlpha = y, w(o, r), o.restore();
    return;
  }
  const A = o.canvas, N = A.__wxOff || (A.__wxOff = document.createElement("canvas"));
  (N.width !== A.width || N.height !== A.height) && (N.width = A.width, N.height = A.height);
  const x = N.getContext("2d");
  x.setTransform(o.getTransform()), x.clearRect(0, 0, p, g), w(x, r);
  const _ = y * (p + 64) - 64, R = x.createLinearGradient(_, 0, _ + 64, 0);
  R.addColorStop(0, "rgba(0,0,0,1)"), R.addColorStop(1, "rgba(0,0,0,0)"), x.globalCompositeOperation = "destination-in", x.fillStyle = R, x.fillRect(0, 0, p, g), x.globalCompositeOperation = "source-over", o.save(), o.setTransform(1, 0, 0, 1, 0, 0), o.drawImage(N, 0, 0), o.restore();
}
function fh(o, r, c) {
  const { W: p, H: g, S: y, C: w, cw: A, yb: N, glowAt: x, soft: _, tw: R, sy: V } = r, $ = o.getTransform().a || 1, tt = (G) => {
    o.shadowColor = G ? "rgba(28,18,8,.22)" : "transparent", o.shadowBlur = G ? 4 * $ : 0, o.shadowOffsetY = G ? 1.5 * $ : 0;
  }, at = (G, Nt) => {
    const O = Ei(G);
    return "rgba(" + O[0] + "," + O[1] + "," + O[2] + "," + Math.max(0, Math.min(1, Nt)).toFixed(3) + ")";
  }, K = (G, Nt) => {
    const O = o.createLinearGradient(0, 0, p, 0);
    O.addColorStop(0, G[0]);
    for (let J = 0; J < G.length - 1; J++) {
      const T = (J + Nt) * A, dt = (T - R / 2) / p, ot = (T + R / 2) / p;
      dt > 0 && dt < 1 && O.addColorStop(dt, G[J]), ot > 0 && ot < 1 && O.addColorStop(ot, G[J + 1]);
    }
    return O.addColorStop(1, G[G.length - 1]), O;
  }, j = Math.max(24, Math.ceil(p / 4)), lt = (G, Nt) => {
    o.beginPath();
    for (let O = 0; O <= j; O++) {
      const J = p * O / j, T = G == null ? 0 : N(J) + G;
      O ? o.lineTo(J, T) : o.moveTo(J, T);
    }
    for (let O = j; O >= 0; O--) {
      const J = p * O / j;
      o.lineTo(J, N(J) + Nt);
    }
    o.closePath(), o.fill();
  };
  o.save(), o.fillStyle = K(y.filter((G) => !G.night).map((G) => G.sky), 0.75), o.fillRect(0, 0, p, g);
  const pt = o.createLinearGradient(0, 0, p, 0);
  for (let G = 0; G <= 64; G++) {
    const Nt = x(p * G / 64);
    pt.addColorStop(G / 64, at(Nt.c, Math.min(1, Nt.a)));
  }
  o.fillStyle = pt;
  for (let G = 0; G < 8; G++)
    o.globalAlpha = 1 - G / 8, lt(G * 2 * V, (G + 1) * 2 * V);
  o.fillStyle = K(y.filter((G) => G.night).map((G) => G.sky), 1.25);
  const mt = Math.max(0.5, _), nt = 6;
  o.globalAlpha = 1, lt(null, -mt);
  for (let G = 0; G < nt; G++)
    o.globalAlpha = 1 - (G + 0.5) / nt, lt(-mt + 2 * mt * G / nt, -mt + 2 * mt * (G + 1) / nt);
  o.globalAlpha = 1;
  const X = new Path2D(rh), Z = new Path2D(nh), E = new Path2D(oh), wt = new Path2D(ih);
  o.fillStyle = w.star, c.stars.forEach((G) => {
    o.globalAlpha = G.o, G.big ? (o.save(), o.translate(G.x, G.y), o.scale(G.size, G.size), o.fill(X), o.restore()) : (o.beginPath(), o.arc(G.x, G.y, 0.8, 0, Math.PI * 2), o.fill());
  }), o.globalAlpha = 1;
  const Lt = ka(w.sun, "#ffffff", 0.55);
  c.suns.forEach((G) => {
    const Nt = o.createRadialGradient(G.x, G.y, 0, G.x, G.y, G.halo);
    Nt.addColorStop(0, at(Lt, 0.42)), Nt.addColorStop(0.7, at(Lt, 0)), o.fillStyle = Nt, o.beginPath(), o.arc(G.x, G.y, G.halo, 0, Math.PI * 2), o.fill();
    const O = o.createLinearGradient(0, G.y - G.rad, 0, G.y + G.rad);
    O.addColorStop(0.6, w.sun), O.addColorStop(1, w.sunEdge), o.fillStyle = O, tt(!0), o.beginPath(), o.arc(G.x, G.y, G.rad, 0, Math.PI * 2), o.fill(), tt(!1);
  });
  const it = ka(w.moon, "#ffffff", 0.6);
  c.moons.forEach((G) => {
    o.save(), o.translate(G.x - G.d / 2, G.y - G.d / 2), o.scale(G.d / 46, G.d / 46);
    const Nt = o.createLinearGradient(0, 6, 0, 40);
    Nt.addColorStop(0, it), Nt.addColorStop(1, w.moon), o.fillStyle = Nt, tt(!0), o.fill(Z), tt(!1), o.restore();
  }), c.clouds.forEach((G) => {
    o.save(), o.globalAlpha = G.o, o.translate(G.x, G.y), o.scale(G.w / 46, G.h / 30.66), o.translate(-4, -9.67), o.fillStyle = G.fill, tt(!0), o.fill(E), tt(!1), o.restore();
  }), c.fogs.forEach((G) => {
    const Nt = o.createLinearGradient(G.x, 0, G.x + G.w, 0);
    Nt.addColorStop(0, at(G.c, 0)), Nt.addColorStop(0.25, at(G.c, G.a)), Nt.addColorStop(0.75, at(G.c, G.a)), Nt.addColorStop(1, at(G.c, 0)), o.fillStyle = Nt, o.fillRect(G.x, G.y, G.w, 6 * V);
  }), o.fillStyle = w.rain, c.drops.forEach((G) => {
    o.save(), o.globalAlpha = G.o, o.translate(G.x, G.y), o.rotate(12 * Math.PI / 180), o.fillRect(-1.5, 0, 3, 9), o.restore();
  }), o.fillStyle = w.snow, c.flakes.forEach((G) => {
    o.globalAlpha = G.o, o.beginPath(), o.arc(G.x, G.y, 2.2, 0, Math.PI * 2), o.fill();
  }), o.fillStyle = w.sun, c.bolts.forEach((G) => {
    o.save(), o.globalAlpha = G.o, o.translate(G.x, G.y), o.fill(wt), o.restore();
  }), o.restore();
}
const uh = (o) => o === "sunny" ? "clear" : o === "clear-night" ? "night" : o === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(o) ? "rain" : ["snowy", "snowy-rainy"].includes(o) ? "snow" : "cloudy", Bn = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, wi = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, sl = (o, r) => '<path class="' + r + '" d="' + o + '"/>', hh = (o, r) => ' style="animation-delay:-' + Math.round(o * 137 % r) + 'ms"', va = (o, r, c, p) => {
  const g = c * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (p < 1 ? ' opacity="' + p + '"' : "") + hh(o, 2400) + ' d="M' + o + " " + (r - c) + "L" + (o + g) + " " + (r - g) + "L" + (o + c) + " " + r + "L" + (o + g) + " " + (r + g) + "L" + o + " " + (r + c) + "L" + (o - g) + " " + (r + g) + "L" + (o - c) + " " + r + "L" + (o - g) + " " + (r - g) + 'Z"/>';
}, sd = ([o, r, c], p) => '<path class="wbMoonPath" d="' + o + '" fill="url(#' + p + ')"/><defs><linearGradient id="' + p + '" x1="0" y1="' + r + '" x2="0" y2="' + c + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', mh = (o, r) => r ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + o + ')"/><defs><linearGradient id="' + o + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + o + ')"/><defs><linearGradient id="' + o + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', gh = (o) => (o ? ["29.35", "43.04", "56.74"].map((r, c) => '<g class="wbDrop" style="animation-delay:-' + c * 317 + 'ms"><rect class="wbAccent" x="' + r + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + r + ' 60.65)"/></g>') : [19, 26, 33].map((r, c) => '<g class="wbDrop" style="animation-delay:-' + c * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + r + ' 38)"/></g>')).join(""), bh = (o) => (o ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([r, c], p) => '<circle class="wbFlake" style="animation-delay:-' + p * 640 + 'ms" cx="' + r + '" cy="' + c + '" r="' + (o ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function wh(o, r, c, p) {
  const g = (y) => '<g filter="url(#' + p + '-sh)">' + y + "</g>";
  return o === "clear" ? r ? g(sd(c ? wi.l : wi.s, p)) + (c ? va(70, 20, 5.83, 1) + va(78.33, 41.67, 3.75, 0.8) + va(60, 71.67, 3.33, 0.6) : va(42, 12, 3.5, 1) + va(47, 25, 2.25, 0.8) + va(36, 43, 2, 0.6)) : g(mh(p, c)) : o === "partly" ? g(r ? sd(c ? wi.lp : wi.sp, p) : c ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + g(sl(c ? Bn.lp : Bn.sp, r ? "wbCloudLight" : "wbBright")) + (r ? c ? va(73.33, 16.67, 4.17, 0.9) : va(44, 10, 2.5, 0.9) : "") : o === "cloudy" ? g(sl(c ? Bn.lc : Bn.s, r ? "wbCloudLight" : "wbBright")) + (r ? c ? va(15, 15, 3.75, 0.8) + va(76.67, 13.33, 2.92, 0.6) : va(9, 9, 2.25, 0.8) + va(46, 8, 1.75, 0.6) : "") : g(sl(c ? Bn.lr : Bn.s, "wbCloudLight")) + (o === "rain" ? gh(c) : bh(c));
}
const vh = (o, r) => '<defs><filter id="' + o + '-sh" x="-25%" y="-25%" width="150%" height="160%"><feDropShadow dx="0" dy="' + (r ? 1.6 : 1) + '" stdDeviation="' + (r ? 1.8 : 1.1) + '" flood-color="#1c1208" flood-opacity=".22"/></filter></defs>';
function yh(o, r, c, p) {
  let g = uh(o);
  const y = g === "night" || !!c;
  g === "night" && (g = "clear");
  const w = r ? 90 : 54;
  return { k: g, night: y, svg: '<svg viewBox="0 0 ' + w + " " + w + '">' + vh(p, r) + wh(g, y, r, p) + "</svg>" };
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
], vi = (o, r) => (xh[r % 8 * 8 + o % 8] + 0.5) / 64, Pa = (o) => [parseInt(o.slice(1, 3), 16), parseInt(o.slice(3, 5), 16), parseInt(o.slice(5, 7), 16)], We = (o, r, c) => [Math.round(o[0] + (r[0] - o[0]) * c), Math.round(o[1] + (r[1] - o[1]) * c), Math.round(o[2] + (r[2] - o[2]) * c)], vr = (o) => o < 0 ? 0 : o > 1 ? 1 : o, ld = (o, r) => {
  let c = o * 374761393 + r * 668265263 ^ 1540483477;
  return c = Math.imul(c ^ c >>> 13, 1274126177), ((c ^ c >>> 16) >>> 0) / 4294967296;
}, pn = [255, 255, 255], $e = Pa("#26221e"), cd = Pa("#0288d1"), kh = Pa("#01579b"), ll = Pa(Ma.cloudDay), cl = Pa(Ma.cloudNight), yi = Pa(Ma.dusk), dl = Pa(Ma.sunEdge), Mh = Pa(Ma.sun), Sh = 10, dd = 0.3, ko = 56, vp = 21;
function Ah(o) {
  const r = Array.from({ length: vp }, () => new Array(ko).fill(void 0)), c = (w, A, N) => {
    r[A][w] = N;
  }, p = We(yi, $e, 0.35), g = We($e, pn, 0.22);
  for (let w = 0; w <= 6; w++) {
    const A = w < 2 ? ko - 2 : ko - 1;
    for (let N = 6 - w; N <= A; N++) c(N, w, w < 2 ? p : w === 6 ? g : $e);
  }
  const y = [yi, dl, cl, Pa(Ma.skyRainDay), We(yi, $e, 0.2), We(o, $e, 0.35)];
  [2, 3, 2, 3, 3].forEach((w, A) => {
    const N = 9 + A * 6;
    for (let x = 0; x < w; x++) {
      const _ = y[(A * 2 + x * 3) % y.length];
      for (let R = N; R < N + 5; R++)
        c(R, 7 + x * 2, We(_, $e, 0.12)), c(R, 8 + x * 2, x === w - 1 ? We(_, pn, 0.3) : _);
      c(N + 5, 7 + x * 2, $e), c(N + 5, 8 + x * 2, $e);
    }
  });
  for (let w = 7; w <= 12; w++) c(5, w, $e);
  c(5, 13, dl);
  for (let w = 7; w <= 14; w++) for (let A = 42; A <= 51; A++) c(A, w, A === 51 ? cl : ll);
  for (let w = 43; w <= 50; w += 2)
    c(w, 12, $e), c(w, 9, We($e, ll, 0.4));
  for (let w = 40; w <= 53; w++) c(w, 14, w === 40 || w === 53 ? cl : ll);
  for (let w = 15; w <= 18; w++) for (let A = 46; A <= 49; A++) c(A, w, w === 18 ? $e : w === 16 ? dl : yi);
  for (let w = 15; w <= 19; w++) c(44, w, $e);
  return c(44, 20, Mh), r;
}
function Ch(o, r, c, p) {
  const g = Math.max(1, Math.round(o)), y = Math.max(1, Math.round(r)), w = new Uint8ClampedArray(g * y * 4), A = Pa(p.skyClearDay), N = Pa(p.skyFogDay), x = Ah(A), _ = Math.round(y * 0.55), R = vr(1 - Math.log(c / dd) / Math.log(Sh / dd)), V = We(A, N, R), $ = (j) => vr((j - 0.1) / 0.9), tt = vr((1 - Math.exp(-2 / c) - 0.2) / 0.8), at = Math.round(g / 2 - ko / 2), K = _ + 3;
  for (let j = 0; j < y; j++) {
    const lt = K - 1 - j, pt = j - K;
    for (let mt = 0; mt < g; mt++) {
      const nt = mt - at;
      let X, Z;
      const E = lt >= 0 && lt < vp && nt >= 0 && nt < ko ? x[lt][nt] : void 0;
      if (E)
        X = E, Z = tt;
      else if (lt >= 0 && lt <= 1 && nt >= 4 - lt && nt <= 5 - lt)
        X = We(pn, cd, 0.15), Z = tt;
      else if (j < _) {
        const it = vr(((j + 0.5) / _ - 0.15) / 0.85) * 3, G = Math.min(3, Math.floor(it + vi(mt + 2, j + 5)));
        X = We(V, pn, G * 0.1), Z = R * 0.95;
      } else {
        const it = (j - _ + 0.5) / (y - _), G = Math.min(1.5, 6e-3 / (it * it)), Nt = vr(it * 1.4) * 3, O = Math.min(3, Math.floor(Nt + vi(mt + 1, j + 6)));
        X = We(cd, kh, O / 3);
        const J = 1 + Math.round(it * 7), T = Math.floor(mt / (J * 3)), dt = 0.06 + 0.16 * it, ot = mt % (J * 3) < J;
        ot && ld(T, j) < dt ? X = We(X, pn, 0.18 + 0.1 * (1 - it)) : ot && it > 0.5 && ld(T, j - 1) < dt && (X = We(X, $e, 0.12)), Z = $(1 - Math.exp(-G / c)), pt === 0 && nt >= 3 && nt <= 8 ? (X = We(X, pn, nt < 6 ? 0.8 : 0.45), Z = tt) : pt >= 0 && pt <= 2 && nt >= ko && nt < ko + 40 ? ((1 - (nt - ko) / 40) * (pt === 1 ? 0.9 : 0.5) > vi(mt, j + 3) && (X = We(X, pn, 0.5)), Z = tt) : pt === 0 && nt >= 6 && nt < ko && (X = We(X, $e, nt % 2 === 0 ? 0.35 : 0.2), Z = tt);
      }
      const wt = Z > vi(mt, j) ? N : X, Lt = (j * g + mt) * 4;
      w[Lt] = wt[0], w[Lt + 1] = wt[1], w[Lt + 2] = wt[2], w[Lt + 3] = 255;
    }
  }
  return { data: w, w: g, h: y };
}
const _h = {
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
}, Th = 1.6;
function Dh(o, r) {
  const c = o ? _h[String(o).toUpperCase()] : void 0;
  if (!c || !(r > 0)) return;
  const p = (y) => Math.abs(Math.log(y[2] / r)), g = c.reduce((y, w) => p(w) < p(y) ? w : y);
  return p(g) <= Math.log(Th) ? { from: g[0], to: g[1], km: g[2] } : void 0;
}
const Lh = (o, r) => r === "mi" ? o * 1.609344 : r === "m" ? o / 1e3 : r === "ft" ? o * 3048e-7 : r === "yd" ? o * 9144e-7 : o, Eh = (o) => o < 1 ? "very_poor" : o < 4 ? "poor" : o < 10 ? "moderate" : o < 20 ? "good" : o < 40 ? "very_good" : "excellent", ke = {
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
  drag: { pull: 17, keep: 70, stick: 44, tilt: 5, lift: 3.5, slide: 420, squash: 5 },
  outline: { lightAt: 30, glowFrom: 20, colourFrom: 50, cone: 20, glow: 15, border: 49, fill: 15, size: 60, hue: 199, press: 1, fin: 180, fout: 350 }
}, Se = { standard: "cubic-bezier(.2,0,0,1)", land: "cubic-bezier(.34,1.46,.64,1)", spring: "cubic-bezier(.2,1.2,.4,1)", soft: "cubic-bezier(.4,0,.2,1)", exit: "cubic-bezier(.4,0,1,1)" }, je = () => {
  var o;
  return !!((o = window.matchMedia) != null && o.call(window, "(prefers-reduced-motion: reduce)").matches);
};
function Bh() {
  const { pivot: o, slider: r, iconbtn: c, warp: p, outline: g } = ke;
  return [
    ["--pv-persp", o.persp + "px"],
    ["--pv-shine", o.shine / 100],
    ["--pv-size", o.size + "%"],
    ["--pv-ret", o.ret + "ms"],
    ["--pv-ease", Se[o.ease]],
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
    ["--ih-s", c.scale / 100],
    ["--ih-p", c.press / 100],
    ["--ih-dur", c.dur + "ms"],
    ["--ih-ease", Se[c.ease]],
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
const pl = ":is(button.primary,button.pill,.hcBtn,.wbRangeBtn,.activityRow.tap,.hcRow,a.hcRow)", Rh = "#homeView .tfAreaPanel", Ph = 300, Bi = (o) => Math.min(1, Ph / Math.max(1, o)), fl = (o, r) => 1 + (r / 100 - 1) * Bi(o.offsetWidth);
function Hh(o, r) {
  r.style.cssText += ";" + Bh();
  let c = null;
  const p = (_) => {
    _.classList.remove("mvMoving", "mvLit"), _.style.setProperty("--rx", "0deg"), _.style.setProperty("--ry", "0deg"), _.style.setProperty("--sc", 1), _._down = !1;
  };
  o.addEventListener("pointermove", (_) => {
    var j, lt;
    const R = _.pointerType === "touch" || je() ? null : (lt = (j = _.target).closest) == null ? void 0 : lt.call(j, pl);
    if (c && c !== R && p(c), c = R, !R || R.disabled) return;
    const V = ke.pivot, $ = R.getBoundingClientRect(), tt = (_.clientX - $.left) / $.width, at = (_.clientY - $.top) / $.height, K = 1;
    R.classList.add("mvPv", "mvMoving", "mvLit"), R.style.setProperty("--pv-persp", V.persp / Bi(Math.max(R.offsetWidth, R.offsetHeight)) + "px"), R.style.setProperty("--ry", (K * (tt - 0.5) * 2 * V.tilt * Bi(R.offsetWidth)).toFixed(3) + "deg"), R.style.setProperty("--rx", (K * -(at - 0.5) * 2 * V.tilt * Bi(R.offsetHeight)).toFixed(3) + "deg"), R.style.setProperty("--mx", (tt * 100).toFixed(1) + "%"), R.style.setProperty("--my", (at * 100).toFixed(1) + "%"), R._down || R.style.setProperty("--sc", fl(R, V.lift));
  }, { passive: !0 }), o.addEventListener("pointerout", (_) => {
    c && !c.contains(_.relatedTarget) && (p(c), c = null);
  }), o.addEventListener("pointerdown", (_) => {
    var V, $;
    const R = je() ? null : ($ = (V = _.target).closest) == null ? void 0 : $.call(V, pl);
    R && (R._down = !0, R.classList.add("mvPv"), R.classList.remove("mvMoving"), R.style.setProperty("--sc", fl(R, ke.pivot.press)));
  }), o.addEventListener("pointerup", (_) => {
    var V, $;
    const R = ($ = (V = _.target).closest) == null ? void 0 : $.call(V, pl);
    R && (R._down = !1, R.style.setProperty("--sc", _.pointerType === "touch" ? 1 : fl(R, ke.pivot.lift)));
  });
  let g = null;
  o.addEventListener("pointerover", (_) => {
    var R, V, $;
    _.pointerType !== "touch" && (($ = (V = (R = _.target).closest) == null ? void 0 : V.call(R, ".tfBar")) == null || $.classList.add("mvHover"));
  }), o.addEventListener("pointerout", (_) => {
    var V, $;
    const R = ($ = (V = _.target).closest) == null ? void 0 : $.call(V, ".tfBar");
    R && !R.contains(_.relatedTarget) && R !== g && R.classList.remove("mvHover");
  }), o.addEventListener("pointerdown", (_) => {
    var V, $;
    const R = ($ = (V = _.target).closest) == null ? void 0 : $.call(V, ".tfBar");
    R && (g = R, R.classList.add("mvHold"));
  });
  const y = (_) => {
    if (!g) return;
    g.classList.remove("mvHold");
    const R = g.getBoundingClientRect();
    (_.pointerType === "touch" || _.clientX < R.left || _.clientX > R.right || _.clientY < R.top || _.clientY > R.bottom) && g.classList.remove("mvHover"), g = null;
  };
  window.addEventListener("pointerup", y, !0), window.addEventListener("pointercancel", y, !0), o.addEventListener("focusin", (_) => {
    var R, V;
    (V = (R = _.target).matches) != null && V.call(R, ".tfBar:focus-visible") && _.target.classList.add("mvHover");
  }), o.addEventListener("focusout", (_) => {
    var R;
    (R = _.target.classList) == null || R.remove("mvHover", "mvHold");
  }), o.addEventListener("keydown", (_) => {
    var V, $;
    const R = ($ = (V = _.target).closest) == null ? void 0 : $.call(V, ".tfBar");
    !R || !["ArrowRight", "ArrowUp", "ArrowLeft", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(_.key) || (R.classList.add("mvHold"), clearTimeout(R._k), R._k = setTimeout(() => R.classList.remove("mvHold"), 350));
  }), o.addEventListener("click", (_) => {
    var V, $;
    const R = ($ = (V = _.target).closest) == null ? void 0 : $.call(V, "button.tfIcon[data-act]");
    R && Nh(R);
  });
  let w = null;
  const A = (_, R, V) => {
    _.querySelector(":scope>.mvEdge") || _.insertAdjacentHTML("afterbegin", '<span class="mvEdgeFill" aria-hidden="true"></span><span class="mvEdge" aria-hidden="true"><i></i></span>');
    const $ = _.getBoundingClientRect(), tt = $.width / 2, at = $.height / 2, K = R.clientX - $.left - tt, j = R.clientY - $.top - at, lt = K ? tt / Math.abs(K) : 1 / 0, pt = j ? at / Math.abs(j) : 1 / 0, mt = Math.min(Math.max(1 / Math.min(lt, pt), 0), 1);
    let nt = Math.atan2(j, K) * 180 / Math.PI + 90;
    nt < 0 && (nt += 360);
    const X = V ? 100 : mt * 100;
    _.style.setProperty("--edge-proximity", X.toFixed(3)), _.style.setProperty("--cursor-angle", nt.toFixed(3) + "deg"), _.classList.toggle("mvLitEdge", V || X >= ke.outline.lightAt);
  }, N = (_) => {
    _.classList.remove("mvLitEdge"), _.style.setProperty("--edge-proximity", "0"), _._down = !1;
  }, x = (_) => {
    var V;
    const R = (V = _.closest) == null ? void 0 : V.call(_, Rh);
    return R && !r.classList.contains("tfEditing") ? R : null;
  };
  o.addEventListener("pointermove", (_) => {
    if (_.pointerType === "touch") return;
    const R = x(_.target);
    w && w !== R && N(w), w = R, R && !R._down && A(R, _, !1);
  }, { passive: !0 }), o.addEventListener("pointerout", (_) => {
    w && !w.contains(_.relatedTarget) && (N(w), w = null);
  }), o.addEventListener("pointerdown", (_) => {
    const R = x(_.target);
    R && ke.outline.press && (R._down = !0, A(R, _, !0));
  }), o.addEventListener("pointerup", (_) => {
    const R = x(_.target);
    R && (R._down = !1, _.pointerType === "touch" ? N(R) : A(R, _, !1));
  }), new MutationObserver((_) => {
    var R;
    for (const V of _) {
      const $ = V.target;
      if (V.type === "attributes") {
        (R = $.classList) != null && R.contains("tfMoreBackdrop") && !$.hidden && V.oldValue !== null && pd($);
        continue;
      }
      V.addedNodes.forEach((tt) => {
        tt.nodeType === 1 && tt.classList.contains("tfMoreBackdrop") && !tt.hidden && pd(tt);
      });
    }
  }).observe(r, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["hidden"], attributeOldValue: !0 });
}
const yp = (o) => o.closest("[data-k],.tfMore,.tfMorePair") || o.getRootNode();
function xp(o, r) {
  const c = [];
  for (let p = o; p && p !== r && p.parentNode; p = p.parentNode) c.unshift([...p.parentNode.children].indexOf(p));
  return c;
}
const kp = (o, r) => r.reduce((c, p) => c == null ? void 0 : c.children[p], o);
function Nh(o) {
  var $;
  if (je() || o._warp) return;
  const r = ke.warp, c = r.amount / 100, p = o.firstElementChild;
  if (!p) return;
  const g = { squash: { scale: 1 + 0.35 * c + " " + (1 - 0.55 * c) }, pinch: { scale: String(1 - 0.5 * c) }, twist: { rotate: 140 * c + "deg", scale: String(1 - 0.35 * c) }, flip: { rotate: "y 90deg" } }[r.style], y = "blur(" + 2 * c + "px)", w = o.getRootNode(), A = yp(o), N = ($ = A.dataset) == null ? void 0 : $.k, x = xp(o, A), _ = o.getAttribute("aria-pressed") + "|" + o.dataset.act;
  o._warp = 1;
  const R = p.animate([{ scale: "1", rotate: "none", filter: "blur(0px)" }, { ...g, filter: y }], { duration: r.win, easing: Se.exit, fill: "forwards" }), V = performance.now();
  R.finished.then(() => {
    const tt = () => {
      var mt, nt;
      const at = N ? A.isConnected ? A : (mt = w.querySelector) == null ? void 0 : mt.call(w, '[data-k="' + CSS.escape(N) + '"]') : A, K = at && kp(at, x);
      if (K === o && o.getAttribute("aria-pressed") + "|" + o.dataset.act === _ && performance.now() - V < 420) {
        requestAnimationFrame(tt);
        return;
      }
      (((nt = K == null ? void 0 : K.matches) != null && nt.call(K, "button.tfIcon") ? K : o).firstElementChild || p).animate([{ ...g, filter: y }, { scale: "1", rotate: "none", filter: "blur(0px)" }], { duration: r.wout, easing: Se[r.ease] }), R.cancel(), o._warp = 0;
    };
    tt();
  });
}
const Mp = (o) => {
  let r = "M" + o[0][0].toFixed(1) + " " + o[0][1].toFixed(1);
  for (let c = 0; c < o.length - 1; c++) {
    const p = o[c - 1] || o[c], g = o[c], y = o[c + 1], w = o[c + 2] || y, A = [g[0] + (y[0] - p[0]) / 6, g[1] + (y[1] - p[1]) / 6], N = [y[0] - (w[0] - g[0]) / 6, y[1] - (w[1] - g[1]) / 6];
    r += "C" + A.map((x) => x.toFixed(1)).join(" ") + " " + N.map((x) => x.toFixed(1)).join(" ") + " " + y.map((x) => x.toFixed(1)).join(" ");
  }
  return r;
}, Sp = (o, r, c, p = "mvGrid") => [0, 1, 2].map((g) => {
  const y = (r + (c - r) * g / 2).toFixed(1);
  return '<line class="' + p + '" x1="0" x2="' + o + '" y1="' + y + '" y2="' + y + '"/>';
}).join("");
function Ap(o, r = o.querySelector(".mvLine"), c = o.querySelectorAll(".mvArea,.mvDot")) {
  if (je() || !(r != null && r.getTotalLength)) return;
  const p = ke.graphs, g = r.getTotalLength();
  r.animate([{ strokeDasharray: g, strokeDashoffset: g }, { strokeDasharray: g, strokeDashoffset: 0 }], { duration: p.draw, easing: Se.standard }), [...c].forEach((y, w) => y.animate([{ opacity: 0 }, { opacity: 1 }], { duration: p.draw * 0.6, delay: p.draw * 0.3 + w * 12, easing: Se.standard, fill: "backwards" }));
}
function Ri(o, r, c, p, g) {
  if (o.getAnimations().forEach((_) => _.cancel()), o.style.left = p + "px", o.style.width = g + "px", je() || r === p && c === g) return;
  const y = ke.tabs, w = y.stretch / 100, A = (_, R) => ({ left: _ + "px", width: R + "px" }), x = p > r ? A(r + (p - r) * (0.15 * (1 - w)), p + g - (r + (p - r) * (0.15 * (1 - w)))) : A(p, r + c - p - (r - p) * (0.15 * (1 - w)));
  o.animate([A(r, c), { offset: 0.5, ...x }, A(p, g)], { duration: y.dur, easing: Se.standard });
}
function Oh(o) {
  const r = ":is(.themeChoice,.wbSegments,.tfHeightTabs,.hcSeg,.tfSeg)", c = (g) => g.querySelector(':scope>[aria-pressed="true"],:scope>[aria-checked="true"],:scope>.active'), p = (g, y) => y ? [...g.children].indexOf(y) : -1;
  o.addEventListener("click", (g) => {
    var lt, pt, mt;
    const y = (pt = (lt = g.target).closest) == null ? void 0 : pt.call(lt, r + ">button"), w = y == null ? void 0 : y.parentElement;
    if (!w || je() || y.disabled) return;
    const A = c(w);
    if (!A || A === y) return;
    const N = p(w, A), x = w.getBoundingClientRect(), _ = A.getBoundingClientRect(), R = getComputedStyle(A).borderRadius, V = w.getRootNode(), $ = yp(w), tt = (mt = $.dataset) == null ? void 0 : mt.k, at = xp(w, $), K = performance.now(), j = () => {
      var G, Nt, O;
      const nt = tt && !$.isConnected ? (G = V.querySelector) == null ? void 0 : G.call(V, '[data-k="' + CSS.escape(tt) + '"]') : $, X = nt && kp(nt, at), Z = (Nt = X == null ? void 0 : X.matches) != null && Nt.call(X, r) ? c(X) : null;
      if (!Z || p(X, Z) === N) {
        performance.now() - K < 700 && requestAnimationFrame(j);
        return;
      }
      const E = X.getBoundingClientRect(), wt = Z.getBoundingClientRect(), Lt = getComputedStyle(Z);
      (O = X.querySelector(":scope>.mvSegInd")) == null || O.remove();
      const it = document.createElement("span");
      it.className = "mvSegInd", it.style.cssText = "top:" + (wt.top - E.top - X.clientTop) + "px;height:" + wt.height + "px;border-radius:" + R + ";background:" + Lt.backgroundColor + ";box-shadow:" + Lt.boxShadow, getComputedStyle(X).position === "static" && (X.style.position = "relative"), X.prepend(it), X.classList.add("mvSegMoving"), Ri(it, _.left - x.left - X.clientLeft, _.width, wt.left - E.left - X.clientLeft, wt.width), clearTimeout(X._seg), X._seg = setTimeout(() => {
        it.remove(), X.classList.remove("mvSegMoving");
      }, ke.tabs.dur + 20);
    };
    requestAnimationFrame(j);
  }, !0);
}
const Cp = (o) => getComputedStyle(o).placeItems.startsWith("end");
function pd(o) {
  const r = o.firstElementChild;
  if (je() || !r || r.classList.contains("still")) return;
  const c = ke.dialog;
  o.animate([{ opacity: 0, backdropFilter: "blur(0px)" }, { opacity: 1, backdropFilter: "blur(" + c.blur + "px)" }], { duration: c.open, easing: Se.standard }), r.style.animation = "none", r.animate(Cp(o) ? [{ transform: "translateY(100%)" }, { transform: "none" }] : [{ opacity: 0, transform: "scale(" + c.from / 100 + ")" }, { opacity: 1, transform: "none" }], { duration: c.open, easing: Se[c.ease] }), [...(r.classList.contains("tfMorePair") && r.querySelector(".tfMore") || r).children].forEach((g, y) => g.animate([{ opacity: 0 }, { opacity: 1 }], { duration: c.open * 0.6, delay: c.open * 0.35 + y * 40, easing: Se.standard, fill: "backwards" }));
}
function Ih(o, r) {
  const c = o == null ? void 0 : o.firstElementChild;
  if (je() || !c || o.hidden || o._closing) {
    r();
    return;
  }
  const p = ke.dialog;
  o._closing = !0, o.style.pointerEvents = "none", o.animate([{ opacity: 1, backdropFilter: "blur(" + p.blur + "px)" }, { opacity: 0, backdropFilter: "blur(0px)" }], { duration: p.close, easing: Se.exit, fill: "forwards" });
  const g = c.animate(Cp(o) ? [{ transform: "none" }, { transform: "translateY(100%)" }] : [{ opacity: 1, transform: "none" }, { opacity: 0, transform: "scale(" + p.from / 100 + ")" }], { duration: p.close, easing: Se.exit, fill: "forwards" });
  let y = !1;
  const w = () => {
    y || (y = !0, o._closing = !1, o.style.pointerEvents = "", o.getAnimations().forEach((A) => A.cancel()), c.getAnimations().forEach((A) => A.cancel()), r());
  };
  g.finished.then(w, w), setTimeout(w, p.close + 80);
}
const Fh = '<span class="mvTick" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M20 6L9 17L4 12" pathLength="1"/></svg></span>';
function qh(o, r) {
  o.replaceChildren(), o.insertAdjacentHTML("afterbegin", Fh), o.appendChild(Object.assign(document.createElement("span"), { className: "mvToastText", textContent: r }));
}
function Wh(o) {
  if (je()) return;
  const r = ke.confirm;
  o.animate([{ opacity: 0, translate: "0 18px" }, { opacity: 1, translate: "0 0" }], { duration: r.dur, easing: Se.spring });
  const c = o.querySelector(".mvTick path");
  c && r.draw && c.animate([{ strokeDasharray: "1", strokeDashoffset: "1" }, { strokeDasharray: "1", strokeDashoffset: "0" }], { duration: 420, delay: r.dur * 0.5, easing: Se.standard, fill: "backwards" });
}
const fd = (o, r, c, p, g = 1) => (o + r * c * g) * Math.pow(p, g);
function ud(o) {
  const r = ke.drag.squash / 100;
  !o || je() || !r || o.animate([{ transform: "scale(" + (1 + r * 0.4) + "," + (1 - r) + ")" }, { transform: "scale(" + (1 - r * 0.1) + "," + (1 + r * 0.24) + ")" }, { transform: "none" }], { duration: 340, easing: "ease-out" });
}
function hd(o) {
  if (!o || je()) return;
  const r = ke.expand;
  [...o.children].slice(1).forEach((c, p) => c.animate([{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "none" }], { duration: 260, delay: r.delay + p * r.stagger, easing: "cubic-bezier(.2,0,0,1)", fill: "backwards" }));
}
const De = 6e4, te = 36e5, ia = 864e5, Mr = 1440, jh = 6, Vh = 10 * De, md = 3, zh = 3, xi = { day: [6, 22], waking: [7, 23], all: [0, 24] }, Gh = [[-5, [91, 141, 239]], [5, [79, 195, 230]], [12, [95, 211, 160]], [18, [255, 211, 77]], [24, [255, 159, 67]], [30, [255, 91, 79]]], Uh = "M6.5 18.5h11a4 4 0 0 0 .4-7.98 5.5 5.5 0 0 0-10.6-1.1A4.5 4.5 0 0 0 6.5 18.5Z", gd = (o, r, c, p) => '<circle cx="' + o + '" cy="' + r + '" r="' + c + '"/><path d="' + [0, 45, 90, 135, 180, 225, 270, 315].map((g) => {
  const y = Math.cos(g * Math.PI / 180), w = Math.sin(g * Math.PI / 180), A = c + 2, N = c + 2 + p;
  return "M" + (o + y * A).toFixed(2) + " " + (r + w * A).toFixed(2) + "L" + (o + y * N).toFixed(2) + " " + (r + w * N).toFixed(2);
}).join("") + '"/>', mo = (o) => '<path d="' + Uh + '"' + (o ? ' transform="' + o + '"' : "") + "/>", go = (o) => '<path d="' + o + '"/>', bd = '<path d="M19.5 14.5A7.5 7.5 0 1 1 9.5 4.5a6 6 0 0 0 10 10Z"/>';
function Yh(o, r) {
  const c = "translate(0,-3)";
  switch (o) {
    case "sunny":
      return r ? bd : gd(12, 12, 4, 2.5);
    case "clear-night":
      return bd;
    case "partlycloudy":
      return (r ? '<path d="M11.5 9.5A4.5 4.5 0 1 1 6 4a3.6 3.6 0 0 0 5.5 5.5Z"/>' : gd(7.5, 7.5, 2.6, 1.4)) + mo("translate(3.6,3) scale(.85)");
    case "cloudy":
      return mo();
    case "fog":
      return go("M4 8.5h16M3 12.5h18M5 16.5h14");
    case "rainy":
      return mo(c) + go("M8.5 18.5 7.5 21M12.5 18.5l-1 2.5M16.5 18.5l-1 2.5");
    case "pouring":
      return mo(c) + go("M7.5 18.5 6 22M11 18.5 9.5 22M14.5 18.5 13 22M18 18.5 16.5 22");
    case "snowy":
      return mo(c) + go("M8 20h.01M12 21.5h.01M16 20h.01");
    case "snowy-rainy":
      return mo(c) + go("M8.5 18.5 7.5 21M12 21h.01M16.5 18.5l-1 2.5");
    case "hail":
      return mo(c) + '<circle cx="8" cy="20.5" r="1"/><circle cx="12" cy="21.5" r="1"/><circle cx="16" cy="20.5" r="1"/>';
    case "lightning":
      return mo(c) + go("M12.5 16 10.5 19.5h3l-2 3");
    case "lightning-rainy":
      return mo(c) + go("M12.5 16 10.5 19.5h3l-2 3M7.5 18.5l-1 2.5M17.5 18.5l-1 2.5");
    case "windy":
    case "windy-variant":
      return go("M3 8.5h10.5a2.5 2.5 0 1 0-2.5-2.5M3 12h15.5a2.5 2.5 0 1 1-2.5 2.5M3 15.5h8");
    default:
      return '<circle cx="12" cy="12" r="8"/>' + go("M12 8v5M12 16h.01");
  }
}
const ul = (o, r) => '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + Yh(o, r) + "</svg>", Zh = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), Kh = 30 * De, Xh = 7, $h = 3, wd = 1, Jh = De, Qh = 15 * De, tm = 5, ee = {
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
}, Tl = 7, wo = 256, em = 3, vd = 700, am = 1800, _p = 5 * De;
let ki = null, yd = 0, yr = null;
function om() {
  return ki && Date.now() - yd < _p ? Promise.resolve(ki) : yr || (yr = fetch("https://api.rainviewer.com/public/weather-maps.json").then((o) => o.ok ? o.json() : Promise.reject(new Error(String(o.status)))).then((o) => {
    var p, g;
    const r = (((p = o.radar) == null ? void 0 : p.past) || []).slice(-6), c = (((g = o.radar) == null ? void 0 : g.nowcast) || []).slice(0, em);
    return ki = { host: o.host, frames: [...r.map((y) => ({ ...y, past: !0 })), ...c] }, yd = Date.now(), ki;
  }).finally(() => {
    yr = null;
  }), yr);
}
function nm(o, r, c, p) {
  const g = Tl, y = 2 ** g, w = o * Math.PI / 180, A = (r + 180) / 360 * y * wo, N = (1 - Math.log(Math.tan(w) + 1 / Math.cos(w)) / Math.PI) / 2 * y * wo, x = A - c / 2, _ = N - p / 2, R = [];
  for (let V = Math.floor(x / wo); V <= Math.floor((x + c - 1) / wo); V++) for (let $ = Math.floor(_ / wo); $ <= Math.floor((_ + p - 1) / wo); $++)
    $ < 0 || $ >= y || R.push({ x: (V % y + y) % y, y: $, left: V * wo - x, top: $ * wo - _ });
  return R;
}
const rm = {
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
}, im = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], sm = Object.keys(ht.phases), lm = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)", extreme: "var(--purple-color, #926bc7)" }, xd = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, Tp = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], Mi = 100, kd = "µg/m³", cm = "weather_alerts.air_quality_pollen", Oi = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], dm = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, pm = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], fm = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, um = { daily: 1, hourly: 2 }, bt = (o) => String(o ?? "").replace(/[&<>"']/g, (r) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[r]), qe = (o, r) => o.replace(/\{(\w+)\}/g, (c, p) => r[p] ?? ""), yo = (o) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + o + '"/></svg>', Md = /* @__PURE__ */ new Map();
function Dp(o) {
  let r = Md.get(o);
  if (r === void 0) {
    const c = "http://www.w3.org/2000/svg", p = document.createElementNS(c, "svg"), g = document.createElementNS(c, "path");
    p.setAttribute("viewBox", "0 0 24 24"), p.style.cssText = "position:absolute;width:24px;height:24px;visibility:hidden;pointer-events:none", g.setAttribute("d", o), p.append(g), document.body.append(p);
    const y = g.getBBox();
    p.remove();
    const w = Math.max(y.width, y.height), A = w ? 26 * 24 / w : 0, N = A / 24;
    r = w ? "width:" + A.toFixed(2) + "px;height:" + A.toFixed(2) + "px;translate:" + ((12 - y.x - y.width / 2) * N).toFixed(2) + "px " + ((12 - y.y - y.height / 2) * N).toFixed(2) + "px" : "", Md.set(o, r);
  }
  return r ? '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true" style="' + r + '"><path d="' + o + '"/></svg>' : yo(o);
}
const hm = () => {
  var o;
  return !!((o = window.matchMedia) != null && o.call(window, "(prefers-reduced-motion: reduce)").matches);
}, ie = (o) => o != null && o !== "" && Number.isFinite(Number(o)), Sd = /* @__PURE__ */ new Map(), Ad = /* @__PURE__ */ new Map(), hl = /* @__PURE__ */ new WeakMap(), mm = (o) => {
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
function zt(o, r, c) {
  const p = Number(o);
  if (Number.isNaN(p)) return String(o);
  const g = (r == null ? void 0 : r.number_format) === "none", y = { maximumFractionDigits: 2, ...c, ...g ? { useGrouping: !1 } : {} }, w = g ? "en-US" : mm(r), A = JSON.stringify([w, y]);
  let N = Sd.get(A);
  if (!N) {
    try {
      N = new Intl.NumberFormat(w, y);
    } catch {
      N = new Intl.NumberFormat(void 0, y);
    }
    Sd.set(A, N);
  }
  return N.format(p);
}
const Ll = (o) => {
  var r;
  return ((r = o == null ? void 0 : o.locale) == null ? void 0 : r.language) || (o == null ? void 0 : o.language) || void 0;
};
function gm(o) {
  if (!o) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (hl.has(o)) return hl.get(o);
  const r = o.time_format, c = r === "language" || r === "system" || !r ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(r === "language" ? o.language : void 0).includes("10") : r === "12";
  return hl.set(o, c), c;
}
const Lp = (o) => {
  var r, c;
  return ((r = o == null ? void 0 : o.locale) == null ? void 0 : r.time_zone) === "server" && ((c = o == null ? void 0 : o.config) != null && c.time_zone) ? o.config.time_zone : void 0;
};
function Ep(o, r) {
  const c = JSON.stringify([o, r]);
  let p = Ad.get(c);
  if (!p) {
    try {
      p = new Intl.DateTimeFormat(o, r);
    } catch {
      p = new Intl.DateTimeFormat(void 0, { ...r, timeZone: void 0 });
    }
    Ad.set(c, p);
  }
  return p;
}
const He = (o, r) => Ep(Ll(r), { hour: "numeric", minute: "2-digit", hourCycle: gm(r == null ? void 0 : r.locale) ? "h12" : "h23", timeZone: Lp(r) }).format(o), Cd = (o, r) => Ep(Ll(r), { weekday: "short", timeZone: Lp(r) }).format(o), bm = (o, r) => o.toLocaleDateString(Ll(r), { weekday: "narrow" }), ce = (o, r) => ie(r) ? zt(Math.round(Number(r)), o.locale) + "°" : "–", qo = (o) => {
  const r = new Date(o);
  return r.setHours(0, 0, 0, 0), r;
}, Rn = (o, r) => o.getFullYear() === r.getFullYear() && o.getMonth() === r.getMonth() && o.getDate() === r.getDate(), Je = Math.PI / 180, wm = 2440588, vm = 2451545, Ii = Je * 23.4397, ym = 149598e3, xm = -0.833 * Je, km = 0.133 * Je, _d = 5 * De, Bp = (o) => o.getTime() / ia - 0.5 + wm - vm, Rp = (o, r) => Math.atan2(Math.sin(o) * Math.cos(Ii) - Math.tan(r) * Math.sin(Ii), Math.cos(o)), Pp = (o, r) => Math.asin(Math.sin(r) * Math.cos(Ii) + Math.cos(r) * Math.sin(Ii) * Math.sin(o)), Mm = (o, r) => Je * (280.16 + 360.9856235 * o) - r, Sm = (o, r, c) => Math.asin(Math.sin(r) * Math.sin(c) + Math.cos(r) * Math.cos(c) * Math.cos(o));
function Hp(o) {
  const r = Je * (357.5291 + 0.98560028 * o), c = Je * (1.9148 * Math.sin(r) + 0.02 * Math.sin(2 * r) + 3e-4 * Math.sin(3 * r)), p = r + c + Je * 102.9372 + Math.PI;
  return { ra: Rp(p, 0), dec: Pp(p, 0), dist: ym };
}
function Np(o) {
  const r = Je * (218.316 + 13.176396 * o), c = Je * (134.963 + 13.064993 * o), p = Je * (93.272 + 13.22935 * o), g = r + Je * 6.289 * Math.sin(c), y = Je * 5.128 * Math.sin(p);
  return { ra: Rp(g, y), dec: Pp(g, y), dist: 385001 - 20905 * Math.cos(c) };
}
const Op = (o, r, c, p) => {
  const g = Bp(r), y = o(g);
  return Sm(Mm(g, Je * -p) - y.ra, Je * c, y.dec);
}, Fi = (o, r, c) => Op(Hp, o, r, c), Am = (o, r, c) => Op(Np, o, r, c);
function Ip(o, r, c, p) {
  const g = {};
  let y = c.getTime(), w = o(c) - r;
  for (let A = y + _d; A <= p.getTime(); A += _d) {
    const N = o(new Date(A)) - r;
    if (w < 0 != N < 0) {
      const x = new Date(y + (A - y) * w / (w - N));
      N > 0 ? g.rise ?? (g.rise = x) : g.set ?? (g.set = x);
    }
    y = A, w = N;
  }
  return g;
}
const Fp = (o) => {
  const r = qo(o);
  return [r, new Date(r.getTime() + ia)];
}, Cm = (o, r, c) => Ip((p) => Fi(p, r, c), xm, ...Fp(o)), _m = (o, r, c) => Ip((p) => Am(p, r, c), km, ...Fp(o));
function ml(o) {
  const r = Bp(o), c = Hp(r), p = Np(r), g = Math.acos(Math.sin(c.dec) * Math.sin(p.dec) + Math.cos(c.dec) * Math.cos(p.dec) * Math.cos(c.ra - p.ra)), y = Math.atan2(c.dist * Math.sin(g), p.dist - c.dist * Math.cos(g)), w = Math.atan2(Math.cos(c.dec) * Math.sin(c.ra - p.ra), Math.sin(c.dec) * Math.cos(p.dec) - Math.cos(c.dec) * Math.sin(p.dec) * Math.cos(c.ra - p.ra));
  return { fraction: (1 + Math.cos(y)) / 2, phase: 0.5 + 0.5 * y * (w < 0 ? -1 : 1) / Math.PI };
}
const Tm = (o) => {
  const r = o * 28;
  return r < 0.5 || r > 27.5 ? "new_moon" : r < 6.5 ? "waxing_crescent" : r < 7.5 ? "first_quarter" : r < 13.5 ? "waxing_gibbous" : r < 14.5 ? "full_moon" : r < 20.5 ? "waning_gibbous" : r < 21.5 ? "last_quarter" : "waning_crescent";
}, On = (o) => {
  const r = o == null ? void 0 : o.config;
  return r && ie(r.latitude) && ie(r.longitude) ? { lat: Number(r.latitude), lon: Number(r.longitude) } : null;
};
function Pn(o, r) {
  var x, _, R;
  const c = On(o), p = c ? Cm(r, c.lat, c.lon) : {}, g = (x = o == null ? void 0 : o.states) == null ? void 0 : x["sun.sun"], y = qo(r).getTime(), w = (V) => {
    const $ = V ? new Date(V) : null;
    return $ && Number.isFinite($.getTime()) && qo($).getTime() === y ? $ : null;
  }, A = w((_ = g == null ? void 0 : g.attributes) == null ? void 0 : _.next_rising), N = w((R = g == null ? void 0 : g.attributes) == null ? void 0 : R.next_setting);
  return A && (p.rise = A), N && (p.set = N), p;
}
function Dm(o) {
  var p;
  const r = (p = o == null ? void 0 : o.states) == null ? void 0 : p["sun.sun"];
  if ((r == null ? void 0 : r.state) === "below_horizon" || (r == null ? void 0 : r.state) === "above_horizon") return r.state === "below_horizon";
  const c = On(o);
  return c ? Fi(/* @__PURE__ */ new Date(), c.lat, c.lon) < 0 : !1;
}
const fn = (o) => !!o && o.state !== "unavailable" && o.state !== "unknown", In = (o, r) => {
  var p;
  const c = (p = o.entities) == null ? void 0 : p[r];
  return !c || !c.hidden && !c.entity_category;
}, xe = (o, r, c) => {
  var p, g;
  for (const y of r) {
    const w = (p = o.states) == null ? void 0 : p[y];
    if (!fn(w)) continue;
    const A = (g = w.attributes) == null ? void 0 : g[c];
    if (A != null && A !== "") return { stateObj: w, value: A };
  }
}, Lm = (o, r) => r.map((c) => {
  var p;
  return (p = o.states) == null ? void 0 : p[c];
}).find(fn), Em = (o, r, c) => r.map((p) => {
  var g;
  return (g = o.states) == null ? void 0 : g[p];
}).find((p) => {
  var g;
  return fn(p) && (((g = p.attributes) == null ? void 0 : g.supported_features) == null || Number(p.attributes.supported_features) & um[c]);
});
function Fo(o, r, c) {
  var y, w, A, N;
  const p = ((w = (y = o.config) == null ? void 0 : y.unit_system) == null ? void 0 : w.length) || "", g = (r == null ? void 0 : r.attributes) || {};
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
      return g.temperature_unit || ((N = (A = o.config) == null ? void 0 : A.unit_system) == null ? void 0 : N.temperature) || "";
  }
}
function Pi(o, r, c, p) {
  try {
    if (typeof o.formatEntityAttributeValueToParts == "function") {
      const [g, ...y] = o.formatEntityAttributeValueToParts(r, c, p).map((w) => w.value);
      return { number: g, unit: y.join("").trim() };
    }
  } catch {
  }
  return { number: zt(p, o.locale), unit: Fo(o, r, c) };
}
function Td(o, r, c, p) {
  try {
    if (typeof o.formatEntityAttributeValue == "function") return o.formatEntityAttributeValue(r, c, p);
  } catch {
  }
  const g = Pi(o, r, c, p);
  return (g.number + " " + g.unit).trim();
}
function bo(o, r) {
  var p;
  try {
    if (typeof o.formatEntityState == "function") return o.formatEntityState(r);
  } catch {
  }
  const c = (p = r.attributes) == null ? void 0 : p.unit_of_measurement;
  return rm[r.state] || (c && ie(r.state) ? zt(r.state, o.locale) + " " + c : r.state);
}
function Oo(o, r) {
  var c;
  try {
    if (typeof o.formatEntityName == "function") return o.formatEntityName(r, { type: "entity" });
  } catch {
  }
  return ((c = r.attributes) == null ? void 0 : c.friendly_name) || r.entity_id;
}
const Dd = (o) => o < 3 ? "low" : o < 6 ? "moderate" : o < 8 ? "high" : o < 11 ? "very_high" : "extreme", Si = (o) => Tp.find(([, r]) => o <= r)[0];
function Bm(o, r) {
  if (r === "Beaufort") return Math.round(o);
  const c = r ? dm[r] : void 0;
  if (c === void 0) return;
  const p = pm.findIndex((g) => o * c < g);
  return p === -1 ? 12 : p;
}
const Ld = (o, r) => {
  const c = r ? fm[r] : void 0;
  return c === void 0 ? void 0 : o * c;
}, Ed = (o) => Object.keys(o.states || {}).find((r) => {
  var c, p;
  return r.startsWith("sensor.") && ((p = (c = o.entities) == null ? void 0 : c[r]) == null ? void 0 : p.platform) === "moon";
}), gl = (o) => Object.values(o.states || {}).filter((r) => {
  var c, p;
  return r.entity_id.startsWith("sensor.") && ((c = r.attributes) == null ? void 0 : c.device_class) === "precipitation" && ["total", "total_increasing"].includes(((p = r.attributes) == null ? void 0 : p.state_class) ?? "") && In(o, r.entity_id);
}).map((r) => r.entity_id).sort()[0];
function Rm(o) {
  var c;
  const r = {};
  for (const [p, g] of Object.entries(((c = o == null ? void 0 : o.core) == null ? void 0 : c.integration) ?? {})) {
    if (g && "integration_type" in g) {
      r[p] = g.categories;
      continue;
    }
    for (const [y, w] of Object.entries((g == null ? void 0 : g.integrations) ?? {})) r[y] = w == null ? void 0 : w.categories;
  }
  return r;
}
const qp = (o, r, c) => {
  var g, y, w;
  const p = (y = (g = o.entities) == null ? void 0 : g[c]) == null ? void 0 : y.platform;
  return !!p && !!((w = r[p]) != null && w.includes(cm));
};
function Pm(o, r) {
  const c = /* @__PURE__ */ new Map();
  return Object.values(o.states || {}).filter((p) => {
    var g;
    return p.entity_id.startsWith("sensor.") && Oi.includes(((g = p.attributes) == null ? void 0 : g.device_class) ?? "") && In(o, p.entity_id) && qp(o, r, p.entity_id);
  }).sort((p, g) => p.entity_id.localeCompare(g.entity_id)).forEach((p) => {
    c.has(p.attributes.device_class) || c.set(p.attributes.device_class, p.entity_id);
  }), Oi.map((p) => c.get(p)).filter(Boolean);
}
const Hm = (o, r) => Object.values(o.states || {}).filter((c) => {
  var p, g;
  return c.entity_id.startsWith("sensor.") && In(o, c.entity_id) && qp(o, r, c.entity_id) && (((g = (p = o.entities) == null ? void 0 : p[c.entity_id]) == null ? void 0 : g.translation_key) ?? c.entity_id).toLowerCase().includes("pollen");
}).map((c) => c.entity_id).sort();
function Bd(o, r, c) {
  const p = Math.max(r - o, 1e-6), g = c[c.length - 1], y = c.find((x) => p / x <= 4) ?? g * Math.ceil(p / (4 * g)), w = Math.floor(o / y) * y;
  let A = Math.ceil(r / y) * y;
  A === w && (A = w + y);
  const N = [];
  for (let x = w; x <= A + y / 1e3; x += y) N.push(x);
  return { min: w, max: A, ticks: N };
}
const Nm = (o, r, c) => {
  const p = (w) => [1, 3, 5].map((A) => parseInt(w.slice(A, A + 2), 16)), g = p(o), y = p(r);
  return "rgb(" + g.map((w, A) => Math.round(w + (y[A] - w) * c)).join(", ") + ")";
}, Om = (o, r, c, p) => {
  const g = c * Math.abs(1 - 2 * p), y = p < 0.5 ? 0 : 1;
  return "M " + o + " " + (r - c) + " A " + c + " " + c + " 0 0 0 " + o + " " + (r + c) + " A " + g + " " + c + " 0 0 " + y + " " + o + " " + (r - c) + " Z";
}, Xe = ({ icon: o, name: r, sub: c, visual: p, double: g, backdrop: y, cls: w, zone: A, callouts: N }) => '<div class="wbCard wbSquare' + (g ? " wbDouble" : "") + (y ? " wbHasBackdrop" : "") + (A != null ? " wbZoned" : "") + (w ? " " + w : "") + '">' + (y ? '<div class="wbBackdrop" aria-hidden="true">' + y + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + Dp(o) + '</div><div class="wbText"><span class="wbName">' + bt(r) + "</span>" + (c ? '<span class="wbSub">' + bt(c) + "</span>" : "") + "</div></div>" + (A != null ? '<div class="wbZone">' + A + "</div>" + (N != null && N.length ? '<div class="wbCallouts">' + N.slice(0, 3).map((x) => Array.isArray(x) ? '<span class="wbCallout"><span>' + bt(x[0]) + "</span><span>" + bt(x[1]) + "</span></span>" : '<span class="wbCallout wbAdvice"><span>' + bt(x) + "</span></span>").join("") + "</div>" : "") : '<div class="wbVisual">' + p + "</div>") + "</div>", Ai = (o) => '<div class="wbZoneM">' + o + "</div>", ya = (o, r) => '<div class="wbValue"><span class="wbNum">' + bt(o) + "</span>" + (r ? '<span class="wbUnitV">' + bt(r) + "</span>" : "") + "</div>";
function Im(o) {
  const r = o.max - o.min || 1, c = (A) => 100 - (Math.min(o.max, Math.max(o.min, A)) - o.min) / r * 100, p = (A) => A / Mr * 100 + "%", g = (A) => A.map((N) => N.t + "," + c(N.v)).join(" "), y = o.kind === "line" ? o.points : [];
  let w = '<div class="wbDayChart"><div class="wbDcSun">' + o.sun.map((A) => '<span class="wbDcSunMark" style="left:' + p(A.t) + '">' + yo(A.rise ? ee.sunsetUp : ee.sunsetDown) + bt(A.label) + "</span>").join("") + "</div>";
  return w += '<div class="wbDcY">' + o.ticks.map((A) => '<span style="top:' + c(A) + '%">' + bt(o.format(A)) + "</span>").join("") + "</div>", w += '<div class="wbDcPlot"><svg viewBox="0 0 ' + Mr + ' 100" preserveAspectRatio="none">' + o.night.map(([A, N]) => '<rect class="wbDcNight" x="' + A + '" y="0" width="' + (N - A) + '" height="100"></rect>').join("") + o.ticks.map((A) => '<line class="wbDcGrid" x1="0" x2="' + Mr + '" y1="' + c(A) + '" y2="' + c(A) + '" vector-effect="non-scaling-stroke"></line>').join("") + o.sun.map((A) => '<line class="wbDcSunLine" x1="' + A.t + '" x2="' + A.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (o.past && o.past.length > 1 ? '<polyline class="wbDcPast" points="' + g(o.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (y.length > 1 ? '<polygon class="wbDcArea" points="' + y[0].t + ",100 " + g(y) + " " + y[y.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + g(y) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (o.now ? '<line class="wbDcNow" x1="' + o.now.t + '" x2="' + o.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (o.kind === "bars" ? o.points.filter((A) => A.v > 0).map((A) => '<i class="wbDcBar" style="left:' + p(A.t + 12) + ";width:" + p(36) + ";height:" + (100 - c(A.v)) + '%"></i>').join("") : "") + (o.now && o.kind === "line" ? '<i class="wbDcDot" style="left:' + p(o.now.t) + ";top:" + c(o.now.v) + '%"></i>' : "") + (o.peak ? '<span class="wbDcPeak" style="left:' + p(o.peak.t) + ";top:" + c(o.peak.v) + '%">' + bt(o.peak.label) + "</span>" : "") + (o.note ? '<span class="wbDcNote">' + bt(o.note) + "</span>" : "") + "</div>", w += '<div class="wbDcX">' + o.hours.map((A) => '<span class="' + (A.minor ? "wbMinor" : "") + '" style="left:' + p(A.t) + '">' + bt(A.label) + "</span>").join("") + "</div></div>", w;
}
function Rd(o, r, c = 120, p = 300) {
  const w = o.map((j) => j.value), A = Math.min(...w), N = Math.max(...w), x = N - A || 1, _ = (j) => j / (o.length - 1) * p, R = (j) => 18 + (1 - (j - A) / x) * (c - 18 - 18), V = o.map((j, lt) => [_(lt), R(j.value)]), $ = V.length > 2 ? Mp(V) : "M" + V.map((j) => j[0].toFixed(1) + " " + j[1].toFixed(1)).join("L"), tt = w.indexOf(N), at = w.indexOf(A), K = (j) => j === 0 ? "start" : j === o.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 ' + p + " " + c + '" aria-hidden="true">' + Sp(p, 18, c - 18) + ('<path class="wbArea" d="' + $ + "L" + p + " " + (c - 18) + "L0 " + (c - 18) + 'Z"></path>') + '<path class="wbLine" d="' + $ + '" vector-effect="non-scaling-stroke"></path><text x="' + _(tt) + '" y="' + (R(N) - 6) + '" text-anchor="' + K(tt) + '">' + bt(r(N)) + '</text><text x="' + _(at) + '" y="' + (R(A) + 14) + '" text-anchor="' + K(at) + '">' + bt(r(A)) + '</text><text x="0" y="' + c + '" text-anchor="start">' + bt(o[0].label) + '</text><text x="' + p + '" y="' + c + '" text-anchor="end">' + bt(o[o.length - 1].label) + "</text></svg>";
}
function Fm(o, r) {
  const y = o.map((R) => R.value).concat([]), w = Math.min(...y) - 2, A = Math.max(...y) + 1, N = A - w || 1, x = 300 / o.length, _ = (R) => (1 - (R - w) / N) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + o.map((R, V) => '<rect class="wbBar' + (R.now ? " wbNowBar" : "") + '" x="' + (V * x + x * 0.2) + '" y="' + _(R.value) + '" width="' + x * 0.6 + '" height="' + (104 - _(R.value)) + '" rx="6"></rect><text x="' + (V * x + x / 2) + '" y="120" text-anchor="middle">' + bt(R.label) + "</text>").join("") + "</svg>";
}
const qm = [
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
], Wm = [[60, 92, 2.2], [72, 98, 1.6], [48, 100, 1.5], [85, 88, 1.8], [38, 92, 1.3], [66, 84, 1.2], [95, 80, 1.3], [25, 40, 1.4], [82, 30, 1.3], [55, 108, 1.2]], Pd = [[54.4, 95, 1.8], [44.5, 56.6, 1.5], [33.5, 56.6, 1.1], [23.7, 40.1, 1.1]], jm = [[30, 62], [48, 48], [72, 60], [96, 82], [86, 112], [30, 108], [16, 86]];
let Vm = 0;
function Hd(o, { getHass: r, entityId: c, style: p = "bitmap", motion: g = !0, cards: y, onOpen: w, hoursWindow: A, radarSource: N } = {}) {
  var Jn, Xr;
  const x = "wb" + ++Vm + "-", _ = document.createElement("div");
  _.className = "wb", _.dataset.style = p;
  const R = document.createElement("div");
  R.className = "wbBento", _.appendChild(R), o.replaceChildren(_);
  const V = document.createElement("div");
  V.className = "wb wbPopup", V.dataset.style = p, V.hidden = !0;
  const $ = ["aq_tile", "pollen_tile", "radar_tile"], tt = ["current", "hourly", "sun", "pollen_tile", "moon", "uv_index", "aq_tile", "humidity", "pressure", "wind", "visibility", "radar_tile", "compared_to_average", "precipitation", "air_quality"].filter((s) => !y || y.includes(s)), at = { current: "wide", hourly: "wide", compared_to_average: "double" }, K = ["sun", "moon", "uv_index", "aq_tile", "pollen_tile", "humidity", "pressure", "wind"], j = {};
  tt.forEach((s) => {
    const u = document.createElement("div");
    u.className = "wbItem", u.dataset.card = s, u.dataset.size = at[s] || "tile", u.hidden = !0, K.includes(s) && (u.dataset.xl = ""), R.appendChild(u), j[s] = { el: u, html: null };
  });
  let lt = !1, pt = null, mt = 0, nt = -1, X = !1, Z = null, E = "";
  const wt = "homecore-next-view", Lt = (() => {
    try {
      return localStorage.getItem(wt);
    } catch {
      return null;
    }
  })(), it = { graph: void 0, range: { preset: "day" }, picking: !1, openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", hourlyView: Lt === "bars" ? "bars" : "strip", aq: void 0 }, G = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let Nt = /* @__PURE__ */ new Date(), O = /* @__PURE__ */ new Date();
  const J = {}, T = {}, dt = {}, ot = (s) => {
    var u;
    return ((u = dt[s]) == null ? void 0 : u.forecast) ?? [];
  }, rt = (s, u) => {
    var h;
    return dt[u] ? (h = s.states) == null ? void 0 : h[dt[u].entityId] : void 0;
  };
  function vt(s) {
    const u = T[s];
    u && (u.unsub.then((h) => {
      typeof h == "function" && h();
    }).catch(() => {
    }), delete T[s]), dt[s] && delete dt[s];
  }
  function ft(s, u, h) {
    var C;
    if (typeof ((C = s.connection) == null ? void 0 : C.subscribeMessage) != "function") return;
    const b = { entityId: h };
    try {
      b.unsub = Promise.resolve(s.connection.subscribeMessage((B) => {
        lt || T[u] !== b || (B != null && B.forecast ? dt[u] = { entityId: h, forecast: B.forecast } : delete dt[u], Ko());
      }, { type: "weather/subscribe_forecast", forecast_type: u, entity_id: h }));
    } catch (B) {
      b.unsub = Promise.reject(B);
    }
    b.unsub.catch(() => {
      T[u] === b && delete T[u];
    }), T[u] = b;
  }
  function yt(s, u) {
    var h;
    for (const b of ["daily", "hourly"]) {
      const C = Em(s, u, b);
      ((h = T[b]) == null ? void 0 : h.entityId) !== (C == null ? void 0 : C.entity_id) && (vt(b), C && ft(s, b, C.entity_id));
    }
  }
  const Ot = (s, u, h, b = !1) => s.callWS({
    type: "history/history_during_period",
    start_time: h.toISOString(),
    end_time: (/* @__PURE__ */ new Date()).toISOString(),
    entity_ids: [u],
    minimal_response: b,
    no_attributes: b,
    significant_changes_only: !1
  });
  async function ne(s, u) {
    var F, Y, P;
    const h = xe(s, u, "pressure");
    if (!h) return;
    const b = h.stateObj.entity_id, C = await Ot(s, b, new Date(Date.now() - 3 * te)), B = (P = (Y = (F = C == null ? void 0 : C[b]) == null ? void 0 : F.find((U) => {
      var et;
      return typeof ((et = U.a) == null ? void 0 : et.pressure) == "number";
    })) == null ? void 0 : Y.a) == null ? void 0 : P.pressure;
    G.pressureHistory = typeof B == "number" ? { entityId: b, value: B } : void 0;
  }
  async function gt(s, u) {
    var Y;
    const h = xe(s, u, "temperature");
    if (!h) return;
    const b = h.stateObj.entity_id, C = qo(/* @__PURE__ */ new Date()), B = await Ot(s, b, new Date(C.getTime() - Xh * ia)), F = /* @__PURE__ */ new Map();
    for (const P of (B == null ? void 0 : B[b]) ?? []) {
      const U = (Y = P.a) == null ? void 0 : Y.temperature, et = new Date((P.lc ?? P.lu) * 1e3);
      if (typeof U != "number" || et >= C) continue;
      const ut = et.toDateString();
      F.set(ut, Math.max(F.get(ut) ?? -1 / 0, U));
    }
    G.temperatureHistory = { entityId: b, dailyHighs: [...F.values()], days: [...F.entries()].map(([P, U]) => ({ date: new Date(P), high: U })) };
  }
  async function Ve(s) {
    const u = gl(s);
    if (!u) return;
    const h = await s.callWS({ type: "recorder/statistic_during_period", statistic_id: u, rolling_window: { duration: { hours: 24 } } });
    G.rain = { entityId: u, change: (h == null ? void 0 : h.change) ?? void 0 };
  }
  function Xa() {
    const s = r == null ? void 0 : r();
    if (!s || lt || typeof s.callWS != "function") return;
    const u = _t(s);
    G.lastFetch = Date.now(), [ne(s, u), gt(s, u), Ve(s)].forEach((h) => h.then(() => Ko(), () => {
    }));
  }
  async function Wo() {
    const s = r == null ? void 0 : r();
    if (!s) return;
    const u = xe(s, _t(s), "temperature");
    if (!u) return;
    const h = u.stateObj.entity_id, b = qo(/* @__PURE__ */ new Date());
    try {
      const C = await Ot(s, h, b), B = (F) => ((C == null ? void 0 : C[h]) ?? []).map((Y) => {
        var P;
        return { time: Y.lu * 1e3, value: (P = Y.a) == null ? void 0 : P[F] };
      }).filter((Y) => typeof Y.value == "number");
      G.todayHistory = { day: b.toDateString(), fetched: Date.now(), temperature: B("temperature"), humidity: B("humidity") }, Ko();
    } catch {
    }
  }
  async function So(s) {
    const u = r == null ? void 0 : r();
    if (u)
      try {
        const h = await Ot(u, s, new Date(Date.now() - 24 * te), !0), b = ((h == null ? void 0 : h[s]) ?? []).filter((B) => ie(B.s)), C = Math.max(1, Math.ceil(b.length / 48));
        G.aqHistory = { entityId: s, points: b.filter((B, F) => F % C === 0).map((B) => ({ label: He(new Date(B.lu * 1e3), u), value: Number(B.s) })) }, Ko();
      } catch {
      }
  }
  function Ha(s) {
    G.categories === void 0 && (G.categories = null, Promise.resolve().then(() => s.callWS({ type: "integration/descriptions" })).then((u) => {
      G.categories = Rm(u);
    }, () => {
      G.categories = {};
    }).then(() => Ko()));
  }
  function _t(s) {
    var h;
    const u = Object.keys(s.states || {}).filter((b) => b.startsWith("weather.") && In(s, b)).sort();
    return c && ((h = s.states) != null && h[c]) ? [c, ...u.filter((b) => b !== c)] : u;
  }
  const ve = (s) => G.categories ? { air: Pm(s, G.categories), pollen: Hm(s, G.categories) } : { air: [], pollen: [] };
  function Ne(s, u, h, b) {
    if (p === "line") return '<span class="wbWx wbS' + u + ' wbLineIcon" aria-hidden="true">' + ul(s, h || s === "clear-night") + "</span>";
    if (p === "smooth") {
      const C = yh(s, u === 90, h, x + "g-" + b);
      return '<span class="wbWx wbS' + u + " wb" + C.k[0].toUpperCase() + C.k.slice(1) + (C.night ? " wbNight" : "") + '" aria-hidden="true">' + C.svg + "</span>";
    }
    return '<span class="wbWx wbS' + u + '" aria-hidden="true"><canvas data-wb-wx="' + bt(ip(s, h)) + '" data-size="' + u + '"></canvas></span>';
  }
  const Vt = () => ot("daily").filter((s) => s.templow != null).slice(0, jh);
  function Qe(s, u) {
    const h = new Date(u.datetime), b = /* @__PURE__ */ new Date();
    return Rn(h, b) ? ht.today : Rn(h, new Date(b.getTime() + ia)) ? ht.tomorrow : Cd(h, s);
  }
  const Fn = (s, u, h) => h === 0 ? Qe(s, u) : Cd(new Date(u.datetime), s);
  function Ft(s, u) {
    var et, ut, Et, Ct;
    const h = Lm(s, u);
    if (!h) return "";
    const b = Vt(), C = it.openDay !== void 0 ? b[it.openDay] : void 0, B = xe(s, u, "temperature"), F = b[0], Y = F && Rn(new Date(F.datetime), /* @__PURE__ */ new Date()), P = ((ut = (et = s.config) == null ? void 0 : et.unit_system) == null ? void 0 : ut.temperature) || ((Et = h.attributes) == null ? void 0 : Et.temperature_unit) || "";
    let U = '<div class="wbCard wbWeather' + (C ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (C ? " inert" : "") + '><div class="wbNow">' + (w ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + bt(ht.openPage) + '">' : '<div class="wbCurrent">') + Ne(h.state, 90, Dm(s), "now") + '<div class="wbTempBlock">' + (B && ie(B.value) ? '<div class="wbTemp"><span class="wbDeg">' + bt(zt(Math.round(Number(B.value)), s.locale)) + '</span><span class="wbUnit">' + bt(P) + "</span></div>" : "") + '<div class="wbPlace">' + bt(((Ct = s.config) == null ? void 0 : Ct.location_name) ?? "") + "</div></div>" + (w ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + bt(bo(s, h)) + "</div>" + (Y && F.templow != null ? '<div class="wbRange">' + bt(qe(ht.range, { high: ce(s, F.temperature), low: ce(s, F.templow) })) + "</div>" : "") + "</div></div>";
    if (U += fa(s) + he(s), b.length) {
      const St = Y && B && ie(B.value) ? ce(s, B.value) : "", qt = (Tt, st, Pt) => Tt === 0 && St ? '<span class="wbAsDay">' + bt(st) + '</span><span class="wbAsNow">' + bt(Pt) + "</span>" : bt(st);
      U += '<div class="wbColumns" role="list">' + b.map((Tt, st) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + st + '" data-wb-focus="col-' + st + '"><span class="wbDay">' + qt(st, Fn(s, Tt, st), ht.now) + "</span>" + Ne(Tt.condition ?? "cloudy", 60, !1, "col" + st) + '<span class="wbTemps"><span class="wbHi">' + qt(st, ce(s, Tt.temperature), St) + '</span><span class="wbLo">' + bt(ce(s, Tt.templow)) + "</span></span></button>").join("") + "</div>", U += '<div class="wbHalves" role="list">' + b.map((Tt, st) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + st + '" data-wb-focus="half-' + st + '">' + Ne(Tt.condition ?? "cloudy", 40, !1, "half" + st) + '<span class="wbText"><span class="wbName">' + bt(Qe(s, Tt)) + '</span><span class="wbSub">' + bt(qe(ht.highLow, { high: ce(s, Tt.temperature), low: ce(s, Tt.templow) })) + "</span></span></button>").join("") + "</div>";
    }
    return U + "</div>" + (C ? Tr(s, u, C) : "") + "</div>";
  }
  const pa = {
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
  }, Ar = {
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
  function Cr(s) {
    const u = Date.now(), h = ot("hourly").filter((ut) => new Date(ut.datetime).getTime() > u - te).slice(0, 13);
    if (h.length < 2) return "";
    const b = (ut) => He(new Date(ut.datetime), s), C = (ut) => pa[ut.condition] || "", B = (ut) => Ar[ut.condition] || ut.condition;
    let F = C(h[0]);
    if (!F) return "";
    let Y = h[0], P = 0;
    for (const ut of h.slice(1))
      P === 2 || B(ut) === B(Y) || !C(ut) || (F += (P ? " and " : ", ") + C(ut) + " from " + b(ut), Y = ut, P++);
    const U = Number(h[0].temperature), et = h.filter((ut) => ie(ut.temperature));
    if (ie(U) && et.length) {
      const ut = et.reduce((Ct, St) => Number(St.temperature) < Number(Ct.temperature) ? St : Ct), Et = et.reduce((Ct, St) => Number(St.temperature) > Number(Ct.temperature) ? St : Ct);
      U - Number(ut.temperature) >= 3 ? F += ", down to " + ce(s, ut.temperature) + " by " + b(ut) : Number(Et.temperature) - U >= 3 && (F += ", up to " + ce(s, Et.temperature) + " by " + b(Et));
    }
    return F[0].toUpperCase() + F.slice(1) + ".";
  }
  const fa = (s) => {
    const u = Cr(s);
    return u ? '<div class="wbSummary"><p class="wbSummaryText">' + bt(u) + "</p></div>" : "";
  };
  function he(s) {
    const [u, h] = xi[A == null ? void 0 : A()] || xi.day, b = Date.now(), C = ot("hourly").filter((B) => {
      const F = new Date(B.datetime), Y = F.getHours();
      return F.getTime() > b - te / 2 && Y >= u && Y < h && ie(B.temperature);
    }).slice(0, 4);
    return C.length ? '<div class="wbNextHours" role="list">' + C.map((B, F) => '<div class="wbHour" role="listitem"><span class="wbHourTime">' + bt(He(new Date(B.datetime), s)) + "</span>" + Ne(B.condition ?? "cloudy", 40, B.is_daytime === !1, "hr" + F) + '<span class="wbHourTemp">' + bt(ce(s, B.temperature)) + "</span></div>").join("") + "</div>" : "";
  }
  function _r(s) {
    const u = s.getTime(), h = Date.now() - te;
    return ot("hourly").filter((b) => {
      const C = new Date(b.datetime).getTime();
      return C >= u && C < u + ia && C > h;
    });
  }
  function jo(s) {
    if (!s.length) return ["temperature"];
    const u = ["temperature"];
    return s.some((h) => h.precipitation != null || h.precipitation_probability != null) && u.push("precipitation"), s.some((h) => h.humidity != null) && u.push("humidity"), u;
  }
  function Tr(s, u, h) {
    const b = qo(new Date(h.datetime)), C = _r(b), B = jo(C), F = B.includes(it.dayMode) ? it.dayMode : "temperature", Y = (P) => P === "humidity" ? ht.humidity : ht.modes[P];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + Ne(h.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + bt(Qe(s, h)) + '</span><span class="wbSub">' + bt(qe(ht.highLow, { high: ce(s, h.temperature), low: ce(s, h.templow) })) + '</span></div><button class="wbBack" title="' + bt(ht.back) + '" data-wb="close-day" data-wb-focus="back-day">' + yo(ee.back) + "</button></div>" + (B.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + B.map((P) => '<button aria-pressed="' + (P === F) + '" data-wb="day-mode" data-mode="' + P + '" data-wb-focus="day-mode-' + P + '">' + bt(Y(P)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + Im(qn(s, u, b, C, F)) + "</div></div>";
  }
  function qn(s, u, h, b, C) {
    var tr;
    const B = h.getTime(), F = Date.now(), Y = Rn(h, /* @__PURE__ */ new Date()), P = (Gt) => (Gt - B) / De, U = (Gt) => He(new Date(Gt), s), et = (Gt) => new Date(Gt.datetime).getTime(), ut = [0, 3, 6, 9, 12, 15, 18, 21].map((Gt) => ({ t: Gt * 60, label: U(B + Gt * te), minor: Gt % 6 !== 0 })), { rise: Et, set: Ct } = Pn(s, h), St = [], qt = [];
    Et && (St.push({ t: P(Et.getTime()), label: U(Et.getTime()), rise: !0 }), qt.push([0, P(Et.getTime())])), Ct && (St.push({ t: P(Ct.getTime()), label: U(Ct.getTime()), rise: !1 }), qt.push([P(Ct.getTime()), Mr]));
    const Tt = On(s);
    !Et && !Ct && Tt && Fi(new Date(B + ia / 2), Tt.lat, Tt.lon) < 0 && qt.push([0, Mr]);
    const st = Y ? P(F) : void 0, Pt = { hours: ut, sun: St, night: qt };
    if (!b.length && !Y) return { ...Pt, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: ht.noHourly };
    if (C === "precipitation") {
      const Gt = b.some((Fe) => Fe.precipitation_probability != null), Fa = b.map((Fe) => ({ t: P(et(Fe)), v: Number((Gt ? Fe.precipitation_probability : Fe.precipitation) ?? 0) })), Ro = Fo(s, rt(s, "hourly"), "precipitation"), qa = Math.max(0, ...Fa.map((Fe) => Fe.v)), $o = Gt ? 100 : Bd(0, Math.max(qa, 1), [0.5, 1, 2, 5, 10]).max, Sn = (Fe) => Gt ? zt(Fe, s.locale) + "%" : zt(Fe, s.locale, { maximumFractionDigits: 1 }) + " " + Ro, Jo = Fa.find((Fe) => Fe.v === qa);
      return {
        ...Pt,
        kind: "bars",
        points: Fa,
        min: 0,
        max: $o,
        ticks: [0, $o / 2, $o],
        format: Sn,
        now: st !== void 0 ? { t: st, v: 0 } : void 0,
        peak: Jo && qa > 0 ? { t: Jo.t + 30, v: Jo.v, label: Sn(Jo.v) } : void 0,
        note: qa > 0 ? void 0 : ht.noRain
      };
    }
    const Ht = C === "humidity" ? "humidity" : "temperature", fe = b.filter((Gt) => Gt[Ht] != null && (!Y || et(Gt) >= F)).map((Gt) => ({ t: P(et(Gt)), v: Number(Gt[Ht]) }));
    let Mt, ae = [];
    if (st !== void 0) {
      const Gt = xe(s, u, Ht);
      Gt && ie(Gt.value) && (Mt = { t: st, v: Number(Gt.value) }, fe.unshift(Mt)), ae = (((tr = G.todayHistory) == null ? void 0 : tr.day) === h.toDateString() ? G.todayHistory[Ht] : []).filter((Ro) => Ro.time <= F).map((Ro) => ({ t: Math.max(0, P(Ro.time)), v: Ro.value })), Mt && ae.length && ae.push(Mt);
    }
    const re = [...ae, ...fe];
    if (!re.length) return { ...Pt, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: ht.noHourly };
    const Ie = re.map((Gt) => Gt.v), no = Bd(Math.min(...Ie), Math.max(...Ie), Ht === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    Ht === "humidity" && (no.min = Math.max(0, no.min), no.max = Math.min(100, no.max), no.ticks = no.ticks.filter((Gt) => Gt >= 0 && Gt <= 100));
    const Qn = Ht === "humidity" ? (Gt) => zt(Gt, s.locale) + "%" : (Gt) => ce(s, Gt), Mn = Ht === "temperature" ? re.reduce((Gt, Fa) => Fa.v > Gt.v ? Fa : Gt) : void 0;
    return { ...Pt, kind: "line", points: fe, past: ae, ...no, format: Qn, now: Mt, peak: Mn ? { ...Mn, label: Qn(Mn.v) } : void 0 };
  }
  function Wn(s) {
    const u = ["temperature"];
    return s.some((h) => h.precipitation_probability != null || h.precipitation != null) && u.push("precipitation"), s.some((h) => h.wind_speed != null) && u.push("wind"), u;
  }
  function Ao(s, u, h = md) {
    var B, F;
    const b = ot("daily"), C = [];
    for (let Y = 0; Y < h; Y++) for (const P of [!1, !0]) {
      const U = s.getTime() + (Y * 24 + (P ? 12 : 0)) * te, et = U + 12 * te, ut = {};
      u.forEach((Ct) => {
        const St = new Date(Ct.datetime).getTime();
        Ct.condition && St >= U && St < et && (ut[Ct.condition] = (ut[Ct.condition] ?? 0) + (Zh.has(Ct.condition) ? 2 : 1));
      });
      let Et = (B = Object.entries(ut).sort((Ct, St) => St[1] - Ct[1])[0]) == null ? void 0 : B[0];
      if (!Et) {
        const Ct = new Date(U).toDateString();
        Et = ((F = b.find((St) => new Date(St.datetime).toDateString() === Ct)) == null ? void 0 : F.condition) ?? "cloudy";
      }
      C.push({ cond: P && Et === "sunny" ? "clear-night" : Et, night: P });
    }
    return C;
  }
  function qi(s, u, h) {
    const b = rt(s, "hourly"), C = u.precipitation_probability != null ? zt(u.precipitation_probability, s.locale) + "%" : "", B = u.precipitation ? zt(u.precipitation, s.locale) + " " + Fo(s, b, "precipitation") : "";
    switch (h) {
      case "precipitation":
        return C ? [C, B] : [B || "–", ""];
      case "wind":
        return u.wind_speed != null ? [zt(Math.round(u.wind_speed), s.locale), Fo(s, b, "wind_speed")] : ["–", ""];
      default:
        return [ce(s, u.temperature), (u.precipitation_probability ?? 0) >= 20 ? C : ""];
    }
  }
  function Na(s, u, h) {
    const [b, C] = xi[A == null ? void 0 : A()] || xi.day, B = [];
    for (let F = 0; F < 4 && B.length < 3; F++) {
      const Y = /* @__PURE__ */ new Date();
      Y.setHours(0, 0, 0, 0), Y.setDate(Y.getDate() + F);
      const P = new Date(Y);
      P.setHours(C, 0, 0, 0), Y.setHours(b, 0, 0, 0), !(P.getTime() <= h || !u.some((U) => {
        const et = new Date(U.datetime).getTime();
        return et >= Y.getTime() && et <= P.getTime();
      })) && B.push({ a: Y.getTime(), b: P.getTime(), label: Qe(s, { datetime: Y.toISOString() }) });
    }
    return B;
  }
  function me(s, u, h, b, C, B) {
    const F = (h.b - u.a) / te, Y = (st) => ((st - u.a) / te).toFixed(3), P = 80, U = 32, et = [];
    for (const st = new Date(u.a - ia); st.getTime() < h.b + ia; st.setDate(st.getDate() + 1)) {
      const { rise: Pt, set: Ht } = Pn(s, new Date(st));
      Pt && Ht && et.push({ rise: Pt.getTime(), set: Ht.getTime() });
    }
    const ut = (st, Pt) => P - (P - U) * Math.sin(Math.PI * (Pt - st.rise) / (st.set - st.rise)), Et = (st) => !et.some((Pt) => st >= Pt.rise && st <= Pt.set);
    let Ct = "", St = "", qt = "";
    et.forEach((st, Pt) => {
      const Ht = [];
      for (let Mt = st.rise; Mt <= st.set; Mt += 15 * De) Ht.push(Y(Mt) + "," + ut(st, Mt).toFixed(2));
      Ht.push(Y(st.set) + "," + P), Ct += '<polyline class="wbLineArc" points="' + Ht.join(" ") + '"/>';
      const fe = et[Pt + 1];
      fe && (Ct += '<rect class="wbLineNight" x="' + Y(st.set) + '" y="0" width="' + ((fe.rise - st.set) / te).toFixed(3) + '" height="100"/>'), [[st.rise, "↑"], [st.set, "↓"]].forEach(([Mt, ae]) => {
        Mt < u.a || Mt > h.b || (St += '<line class="wbLineEdge" x1="' + Y(Mt) + '" x2="' + Y(Mt) + '" y1="0" y2="100"/>', qt += '<span class="wbLineTime" style="left:' + B(Mt) + '">' + ae + " " + bt(He(new Date(Mt), s)) + "</span>");
      });
    });
    const Tt = et.find((st) => C >= st.rise && C <= st.set);
    return '<svg class="wbLineArt" viewBox="0 0 ' + F + ' 100" preserveAspectRatio="none" aria-hidden="true">' + Ct + St + '<line class="wbLineHorizon" x1="0" x2="' + F + '" y1="' + P + '" y2="' + P + '"/></svg>' + qt + (Tt ? '<span class="wbLineNow" style="left:' + B(C) + ";top:" + ut(Tt, C) + '%">' + ul("sunny", !1) + "</span>" : "") + b.filter((st) => st.entry && !st.now).map((st) => '<span class="wbLineGlyph' + st.edge + '" style="left:' + B(st.t) + '">' + ul(st.entry.condition ?? "cloudy", Et(st.t)) + "</span>").join("");
  }
  function jn(s, u) {
    delete J.hourly;
    const h = it.hourlyView === "bars" ? "bars" : "strip", b = '<div class="wbHeader"><h2 class="wbTitle">' + bt(h === "bars" ? ht.nextDays : ht.nextHours) + '</h2><div class="wbSegments wbViews" role="group" aria-label="' + bt(ht.showAs) + '">' + ["strip", "bars"].map((Mt) => '<button aria-pressed="' + (Mt === h) + '" data-wb="hourly-view" data-view="' + Mt + '" data-wb-focus="hourly-view-' + Mt + '">' + bt(ht.views[Mt]) + "</button>").join("") + "</div></div>";
    if (h === "bars") return Vn(s, u, b);
    const C = ot("hourly"), B = Math.floor(Date.now() / De) * De, F = C.filter((Mt) => new Date(Mt.datetime).getTime() > B - te);
    if (!F.length) return "";
    const Y = Wn(F), P = Y.includes(it.hourlyMode) ? it.hourlyMode : "temperature", U = Na(s, C, B);
    if (!U.length) return "";
    const et = U[0], ut = U[U.length - 1], Et = (et.b - et.a) / te, Ct = (Mt) => "calc(var(--wb-u) * " + ((Mt - et.a) / te).toFixed(3) + ")", St = new Date(et.a);
    St.setHours(6, 0, 0, 0), St.getTime() > et.a && St.setDate(St.getDate() - 1);
    const qt = Math.ceil((ut.b - St.getTime()) / ia);
    p !== "line" && (J.hourly = { segs: Ao(St, C, qt), seed: St.getDate(), columns: qt });
    const Tt = (Mt) => Mt === et.a ? " wbFirst" : Mt === ut.b ? " wbLast" : "", st = [];
    for (let Mt = et.a; Mt < ut.b; ) {
      const ae = new Date(Mt);
      ae.setHours(24, 0, 0, 0);
      const re = Math.min(ae.getTime(), ut.b);
      st.push({ a: Mt, b: re, label: Qe(s, { datetime: new Date(Mt).toISOString() }), page: U.find((Ie) => Ie.a >= Mt && Ie.a < re) || U.find((Ie) => Ie.a < re && Ie.b > Mt) }), Mt = re;
    }
    const Pt = B > et.a && B < ut.b ? Math.floor((B - et.a) / (2 * te)) * 2 : 0, Ht = [];
    for (let Mt = et.a; Mt <= ut.b; Mt += te) {
      const ae = new Date(Mt), re = Tt(Mt);
      !re && ae.getHours() % zh || !re && (Math.abs(et.a - Mt) < 2 * te || Math.abs(ut.b - Mt) < 2 * te) || B >= et.a && Math.abs(Mt - B) < 1.5 * te && !re || Ht.push({ t: Mt, edge: re, label: He(ae, s), entry: Mt >= B - te ? C.find((Ie) => new Date(Ie.datetime).getTime() === Mt) : void 0 });
    }
    B > et.a && B < et.b && Ht.push({ t: B, edge: B - et.a < te ? " wbFirst" : et.b - B < te ? " wbLast" : "", label: ht.now, entry: F[0], now: !0 });
    const fe = (Mt, ae) => '<span class="wbMark' + Mt.edge + (Mt.now ? " wbNowMark" : "") + '" style="left:' + Ct(Mt.t) + '">' + ae + "</span>";
    return '<div class="wbCard wbHc wbHourly">' + b + (Y.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + Y.map((Mt) => '<button aria-pressed="' + (Mt === P) + '" data-wb="hourly-mode" data-mode="' + Mt + '" data-wb-focus="hourly-mode-' + Mt + '">' + bt(ht.modes[Mt]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll wbPaged" tabindex="0" aria-label="' + bt(ht.nextHours) + '" data-span="' + Et + '" data-start="' + Pt + '"><div class="wbStrip" style="--wb-u:calc(100cqw / ' + Et + ");width:calc(var(--wb-u) * " + (ut.b - et.a) / te + ')">' + // a stop every two hours (Matt, 1 Nov): a swipe settles on one, a flick runs on past several
    [...Array(Math.floor((ut.b - et.a) / (2 * te)) + 1)].map((Mt, ae) => '<i class="wbSnap" style="left:' + Ct(et.a + ae * 2 * te) + '"></i>').join("") + '<div class="wbDays">' + st.map((Mt, ae) => {
      var re;
      return '<span class="wbDaySpan" style="width:calc(var(--wb-u) * ' + ((Mt.b - Mt.a) / te).toFixed(3) + ')"><button class="wbDayName" data-wb="hours-day" data-hours="' + (ae === 0 ? Pt : ((((re = Mt.page) == null ? void 0 : re.a) ?? Mt.a) - et.a) / te) + '" data-wb-focus="hours-day-' + ae + '">' + bt(Mt.label) + "</button></span>";
    }).join("") + '</div><div class="wbRow wbTimes">' + Ht.map((Mt) => fe(Mt, bt(Mt.label))).join("") + "</div>" + (p === "line" ? '<div class="wbSky wbLineSky">' + me(s, et, ut, Ht, B, Ct) : '<div class="wbSky"><div class="wbSkyArt" style="left:' + Ct(St.getTime()) + ";width:calc(var(--wb-u) * " + qt * 24 + ')"><canvas data-wb-strip="hourly"' + (p === "smooth" ? "" : ' class="wbPixels"') + "></canvas></div>") + (B > et.a ? '<i class="wbPast" style="width:' + Ct(Math.min(B, ut.b)) + '"></i><i class="wbNowLine" style="left:' + Ct(B) + '"></i>' : "") + st.slice(1).map((Mt) => '<i class="wbMidnight" style="left:' + Ct(Mt.a) + '"></i>').join("") + '</div><div class="wbRow wbValues">' + Ht.map((Mt) => {
      if (!Mt.entry) return "";
      const [ae, re] = qi(s, Mt.entry, P);
      return fe(Mt, '<span class="wbPrimaryV">' + bt(ae) + '</span><span class="wbSecondary">' + bt(re) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function Dr(s) {
    const u = Gh, h = u.findIndex(([P]) => P >= s);
    if (h <= 0) return "rgb(" + u[h < 0 ? u.length - 1 : 0][1].join(",") + ")";
    const [b, C] = u[h - 1], [B, F] = u[h], Y = (s - b) / (B - b);
    return "rgb(" + C.map((P, U) => Math.round(P + (F[U] - P) * Y)).join(",") + ")";
  }
  function Vn(s, u, h) {
    var Ct;
    const b = ot("daily").filter((St) => ie(St.templow) && ie(St.temperature)).slice(0, 7);
    if (!b.length) return "";
    const C = Math.min(...b.map((St) => Number(St.templow))), B = Math.max(...b.map((St) => Number(St.temperature))), F = Math.max(1, B - C), Y = (St) => Math.max(0, Math.min(100, (St - C) / F * 100)).toFixed(2), P = /F/.test(Fo(s, rt(s, "daily"), "temperature")), U = (St) => P ? (St - 32) / 1.8 : St, et = "linear-gradient(90deg," + [0, 0.25, 0.5, 0.75, 1].map((St) => Dr(U(C + St * F)) + " " + St * 100 + "%").join(",") + ")", ut = (Ct = xe(s, u, "temperature")) == null ? void 0 : Ct.value;
    return '<div class="wbCard wbHc wbHourly wbBars' + (Wn(ot("hourly").filter((St) => new Date(St.datetime).getTime() > Date.now() - te)).length > 1 ? " wbTabbed" : "") + '">' + h + '<div class="wbDayBars" role="list">' + b.map((St, qt) => {
      const Tt = Qe(s, St), st = Rn(new Date(St.datetime), /* @__PURE__ */ new Date()), Pt = Number(St.templow), Ht = Number(St.temperature);
      return '<div class="wbDayBar" role="listitem" aria-label="' + bt(qe(ht.rangeRow, { day: Tt, low: ce(s, Pt), high: ce(s, Ht) })) + '"><span class="wbRangeDay">' + bt(Tt) + "</span>" + Ne(St.condition, 40, !1, "r" + qt) + '<span class="wbRangeLo">' + bt(ce(s, Pt)) + '</span><span class="wbRangeTrack"><i class="wbRangeFill" style="background:' + et + ";clip-path:inset(0 " + (100 - Y(Ht)) + "% 0 " + Y(Pt) + '% round 4px)"></i>' + (st && ie(ut) ? '<i class="wbRangeNow" style="left:' + Y(Number(ut)) + '%"></i>' : "") + '</span><span class="wbRangeHi">' + bt(ce(s, Ht)) + "</span></div>";
    }).join("") + "</div></div>";
  }
  const Lr = [[-120, "#0d1530"], [-60, "#1c2550"], [-15, "#c9707a"], [30, "#f2a46a"], [60, "#b49bc8"], [90, "#5aa5e6"]], Er = [[-90, "#5aa5e6"], [-60, "#a99bd0"], [-30, "#f0a54a"], [15, "#c45a5a"], [60, "#3a2a5c"], [120, "#0d1530"]], jt = (s, u) => {
    if (u <= s[0][0]) return s[0][1];
    for (let h = 1; h < s.length; h++) if (u <= s[h][0]) {
      const [b, C] = s[h - 1], [B, F] = s[h];
      return Nm(C, F, (u - b) / (B - b));
    }
    return s[s.length - 1][1];
  }, xt = (s, u, h) => {
    if (!u || !h) return Lr[5][1];
    const b = (s.getTime() - h.getTime()) / De;
    return b >= -90 ? jt(Er, b) : jt(Lr, (s.getTime() - u.getTime()) / De);
  }, Ae = (s) => (s >= 60 ? Math.floor(s / 60) + "h " : "") + s % 60 + "m";
  function $t(s) {
    const u = Nt, { rise: h, set: b } = Pn(s, u), C = h && b ? Math.round((b.getTime() - h.getTime()) / De) : 0, B = Math.floor(C / 60), F = C % 60, Y = (fe) => fe ? He(fe, s) : "–", P = new Date(u);
    P.setDate(P.getDate() + 1);
    const U = Pn(s, P), et = U.rise && U.set ? Math.round((U.set.getTime() - U.rise.getTime()) / De) : 0, ut = new Date(u);
    ut.setDate(ut.getDate() - 1);
    const Et = !!(h && b && u >= h && u <= b), Ct = !!(h && u < h), St = Et ? h : Ct ? Pn(s, ut).set : b, qt = Et ? b : Ct ? h : U.rise, Tt = St && qt ? Math.min(1, Math.max(0, (u.getTime() - St.getTime()) / (qt.getTime() - St.getTime()))) : 0, st = qt ? Math.max(0, Math.round((qt.getTime() - u.getTime()) / De)) : 0, Pt = qt ? Ae(st) : "–", Ht = Et ? ht.untilSunset : ht.untilSunrise;
    return Xe({
      icon: ee.sunny,
      name: ht.sun,
      sub: C ? qe(ht.daylightShort, { hours: B, minutes: F }) : void 0,
      cls: "wbSunTile",
      callouts: [[ht.callout.riseTomorrow, Y(U.rise)], [ht.callout.setTomorrow, Y(U.set)], ...et ? [[ht.callout.dayTomorrow, Math.floor(et / 60) + "h " + et % 60 + "m"]] : []],
      zone: '<div class="wbSunZone" style="background:' + xt(u, h, b) + '"><svg class="wbSunTrack" data-up="' + (Et ? 1 : 0) + '" data-f="' + Tt.toFixed(4) + '" aria-hidden="true"></svg><div class="wbSunCount"><span class="wbSunLeft">' + bt(Pt) + '</span><span class="wbSunWord">' + bt(Ht) + '</span></div><span class="wbSunAt wbSunRise">' + bt(Y(h)) + '</span><span class="wbSunAt wbSunSet">' + bt(Y(b)) + "</span></div>" + // at M, the countdown alone (Matt, 10 Nov): M's zone has room for one line
      Ai(ya(Pt, ""))
    });
  }
  const ze = 22;
  function $a(s) {
    const u = Math.round(s.clientWidth), h = Math.round(s.clientHeight), b = ze, C = b / 2, B = u + "x" + h + ":" + s.dataset.f + ":" + s.dataset.up;
    if (u < b * 3 || h < b * 3 || s.dataset.drawn === B) return;
    s.dataset.drawn = B;
    const F = "M" + C + " " + (h - b) + "V" + b + "A" + C + " " + C + " 0 0 1 " + b + " " + C + "H" + (u - b) + "A" + C + " " + C + " 0 0 1 " + (u - C) + " " + b + "V" + (h - b), Y = "M" + (u - C) + " " + (h - b) + "A" + C + " " + C + " 0 0 1 " + (u - b) + " " + (h - C) + "H" + b + "A" + C + " " + C + " 0 0 1 " + C + " " + (h - b), P = 16, U = 6, et = "M" + P + " 0H" + (u - P) + "A" + P + " " + P + " 0 0 1 " + u + " " + P + "V" + (h - P) + "A" + P + " " + P + " 0 0 1 " + (u - P) + " " + h + "H" + P + "A" + P + " " + P + " 0 0 1 0 " + (h - P) + "V" + P + "A" + P + " " + P + " 0 0 1 " + P + " 0ZM" + (b + U) + " " + b + "A" + U + " " + U + " 0 0 0 " + b + " " + (b + U) + "V" + (h - b - U) + "A" + U + " " + U + " 0 0 0 " + (b + U) + " " + (h - b) + "H" + (u - b - U) + "A" + U + " " + U + " 0 0 0 " + (u - b) + " " + (h - b - U) + "V" + (b + U) + "A" + U + " " + U + " 0 0 0 " + (u - b - U) + " " + b + "Z", ut = s.dataset.up === "1", Et = Number(s.dataset.f) || 0, Ct = "http://www.w3.org/2000/svg";
    s.setAttribute("viewBox", "0 0 " + u + " " + h);
    const St = document.createElementNS(Ct, "path");
    St.setAttribute("d", ut ? F : Y), s.replaceChildren(St);
    const qt = St.getTotalLength(), Tt = St.getPointAtLength(qt * Et), st = ut ? qt : 0;
    s.innerHTML = '<defs><mask id="' + x + 'sun-day"><path d="' + F + '" fill="none" stroke="#fff" stroke-width="' + b * 2 + '"></path></mask><mask id="' + x + 'sun-done"><path d="' + F + '" fill="none" stroke="#fff" stroke-width="' + b * 2 + '" stroke-dasharray="' + (ut ? (st * Et).toFixed(1) + " " + (st + 1).toFixed(1) : "0 99999") + '"></path></mask></defs><path class="wbSunBand" fill-rule="evenodd" d="' + et + '"></path><path class="wbSunBand wbSunDay" fill-rule="evenodd" d="' + et + '" mask="url(#' + x + 'sun-day)"></path><path class="wbSunBand wbSunDone" fill-rule="evenodd" d="' + et + '" mask="url(#' + x + 'sun-done)"></path><circle class="wbSunDot' + (ut ? "" : " wbSunNight") + '" cx="' + Tt.x.toFixed(1) + '" cy="' + Tt.y.toFixed(1) + '" r="' + C + '"></circle>';
  }
  const Ja = typeof ResizeObserver == "function" ? new ResizeObserver((s) => s.forEach((u) => $a(u.target))) : null;
  function Wi() {
    Ja == null || Ja.disconnect(), _.querySelectorAll("svg.wbSunTrack").forEach((s) => {
      $a(s), Ja == null || Ja.observe(s);
    });
  }
  function zn(s, u, h) {
    const b = (F) => x + "moon-" + F, C = s > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + b("terminator") + ')" d="' + Om(61, 61, 57.9, s) + '"' + (u ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", B = (F, Y, P, U, et, ut) => '<filter id="' + b(F) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + Y + '" numOctaves="' + P + '" seed="' + U + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((Et) => "<feFunc" + Et + ' type="linear" slope="' + et + '" intercept="' + ut + '"></feFunc' + Et + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + b("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + b("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + b("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + b("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + b("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + B("mottle", "0.045", 4, 3, 1.8, -0.4) + B("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + b("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + b("fill") + ')"></circle><g' + (h ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + b("soften") + ')">' + qm.map(([F, Y, P, U, et, ut]) => '<ellipse cx="' + F + '" cy="' + Y + '" rx="' + P + '" ry="' + U + '" fill-opacity="' + ut + '" transform="rotate(' + et + " " + F + " " + Y + ')"></ellipse>').join("") + "</g>" + Wm.map(([F, Y, P]) => '<circle class="wbCrater" cx="' + F + '" cy="' + Y + '" r="' + P + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + b("glow") + ')">' + jm.map(([F, Y]) => '<line x1="54.4" y1="95" x2="' + F + '" y2="' + Y + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + b("glow") + ')">' + Pd.map(([F, Y, P]) => '<circle cx="' + F + '" cy="' + Y + '" r="' + P * 2 + '"></circle>').join("") + "</g>" + Pd.map(([F, Y, P]) => '<circle class="wbBrightCenter" cx="' + F + '" cy="' + Y + '" r="' + P + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + b("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + b("grain") + ')"></rect>' + C + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function Br(s) {
    const u = O, h = On(s), b = (h == null ? void 0 : h.lat) ?? 0, C = ml(u), B = Ed(s), F = B ? s.states[B] : void 0, Y = fn(F) && sm.includes(F.state) ? F.state : Tm(C.phase), { rise: P, set: U } = h ? _m(u, h.lat, h.lon) : {}, et = C.phase > 0.5 != b < 0, ut = zt(Math.round(C.fraction * 100), s.locale) + "%", Et = P ?? U;
    return Et && He(Et, s), Xe({
      icon: ee.night,
      name: ht.moon,
      sub: ht.phases[Y],
      callouts: [...P ? [[ht.callout.moonrise, He(P, s)]] : [], ...U ? [[ht.callout.moonset, He(U, s)]] : [], [ht.callout.lit, ut]],
      // at M, how much of it is lit (Matt, 10 Nov)
      zone: '<div class="wbMoonBox">' + zn(C.fraction, et, b < 0) + "</div>" + Ai(ya(zt(Math.round(C.fraction * 100), s.locale), "%"))
    });
  }
  function ji(s, u) {
    var St;
    const h = xe(s, u, "wind_speed");
    if (!h || !ie(h.value)) return "";
    const b = xe(s, u, "wind_gust_speed"), C = xe(s, u, "wind_bearing"), B = C && ie(C.value) ? Number(C.value) : void 0, F = Bm(Number(h.value), (St = h.stateObj.attributes) == null ? void 0 : St.wind_speed_unit), Y = Pi(s, h.stateObj, "wind_speed", h.value), P = B !== void 0 ? ht.cardinal[im[((B + 11.25) / 22.5 | 0) % 16]] : void 0, U = b ? Td(s, b.stateObj, "wind_gust_speed", b.value) : void 0, et = [P ? qe(ht.windFrom, { direction: P }) : void 0, F !== void 0 ? F + " " + ht.beaufort : void 0].filter(Boolean).join(" · ") || U, ut = (qt, Tt) => {
      const st = (qt - 90) * Math.PI / 180;
      return [100 + Tt * Math.cos(st), 100 + Tt * Math.sin(st)];
    }, Et = Array.from({ length: 36 }, (qt, Tt) => Tt * 10).map((qt) => {
      const Tt = qt % 90 === 0, [st, Pt] = ut(qt, 97), [Ht, fe] = ut(qt, Tt ? 83 : 89);
      return '<line class="wbTick' + (Tt ? " wbMajor" : "") + '" x1="' + st + '" y1="' + Pt + '" x2="' + Ht + '" y2="' + fe + '"></line>';
    }).join(""), Ct = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([qt, Tt]) => {
      const [st, Pt] = ut(Tt, 64);
      return '<text class="wbLetter' + (qt === "n" ? " wbNorth" : "") + '" x="' + st + '" y="' + Pt + '">' + bt(ht.cardinal[qt]) + "</text>";
    }).join("");
    return Xe({ icon: ee.windy, name: ht.wind, sub: et, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + Et + Ct + (B !== void 0 ? '<path class="wbMarker" transform="rotate(' + B + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + bt(Y.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + bt(Y.unit) + "</text></svg>" });
  }
  const Vi = (s, u) => {
    if (s < 3) return ht.advice.fine;
    if (s < 8) return ht.advice.sunblock;
    const h = Date.now(), b = ot("hourly").find((C) => C.uv_index != null && new Date(C.datetime).getTime() > h && C.uv_index < 6);
    return b && new Date(b.datetime).toDateString() === (/* @__PURE__ */ new Date()).toDateString() ? qe(ht.advice.avoidUntil, { time: He(new Date(b.datetime), u) }) : ht.advice.avoidToday;
  };
  function un(s, u) {
    const h = xe(s, u, "uv_index");
    if (!h || !ie(h.value)) return "";
    const b = Number(h.value), C = ht.uvLevel[Dd(b)], B = /* @__PURE__ */ new Date();
    B.setHours(23, 59, 59, 999);
    const F = ot("hourly").filter((et) => et.uv_index != null && new Date(et.datetime) > /* @__PURE__ */ new Date() && new Date(et.datetime) <= B).reduce((et, ut) => !et || ut.uv_index > et.uv ? { uv: ut.uv_index, time: new Date(ut.datetime) } : et, void 0), Y = lm[Dd(b)], P = 216 * Math.min(1, Math.max(0.08, 0.4 + (b - 4.5) * (0.5 / 5.5))), U = '<svg class="wbUvArt" viewBox="0 0 216 198" preserveAspectRatio="xMinYMin slice" aria-hidden="true"><defs><radialGradient id="' + x + 'uv-sun" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="' + P.toFixed(1) + '"><stop offset="0" style="stop-color:color-mix(in srgb, ' + Y + ' 28%, #fff6dd)"></stop><stop offset=".62" style="stop-color:color-mix(in srgb, ' + Y + ' 62%, #fff6dd)"></stop><stop offset="1" style="stop-color:' + Y + '"></stop></radialGradient></defs><circle class="wbUvSun" cx="0" cy="0" r="' + P.toFixed(1) + '" fill="url(#' + x + 'uv-sun)"></circle></svg><div class="wbUvBig"><span class="wbUvNum">' + bt(zt(Math.round(b), s.locale)) + '</span><span class="wbUvWord">' + bt(C) + "</span></div>" + Ai(ya(zt(Math.round(b), s.locale), ""));
    return Xe({
      icon: ee.sunnyAlert,
      name: ht.metrics.uv_index,
      sub: F && F.uv > b ? qe(ht.uvPeak, { level: C, uv_index: zt(Math.round(F.uv), s.locale), time: He(F.time, s) }) : C,
      zone: U,
      cls: "wbUv",
      callouts: [Vi(b, s), [ht.callout.now, zt(Math.round(b), s.locale) + " · " + C], [ht.callout.peak, F && F.uv > b ? zt(Math.round(F.uv), s.locale) + " at " + He(F.time, s) : ht.callout.now]]
    });
  }
  function Rr(s) {
    const u = ot("daily")[0], h = G.temperatureHistory;
    if (!u || new Date(u.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !ie(u.temperature) || !h || h.dailyHighs.length < $h) return "";
    const b = Number(u.temperature), C = h.dailyHighs.reduce((Tt, st) => Tt + st, 0) / h.dailyHighs.length, B = Math.round(b - C) || 0, F = B > 0 ? "above" : B < 0 ? "below" : "same", Y = [...h.days, { date: /* @__PURE__ */ new Date(), high: b, today: !0 }], P = Y.map((Tt) => Tt.high).concat(C), U = Math.min(...P) - 1, et = Math.max(...P) + 1, ut = (Tt) => (1 - (Tt - U) / (et - U)) * 100, Et = (Tt) => (Tt + 0.5) / Y.length * 100, Ct = Y.map((Tt, st) => [Et(st), ut(Tt.high)]), St = Ct.map(([Tt, st], Pt) => (Pt ? "L" : "M") + Tt.toFixed(2) + " " + st.toFixed(2)).join(""), qt = '<div class="wbCompareBars wbTrend" aria-hidden="true"><div class="wbTrendPlot"><svg viewBox="0 0 100 100" preserveAspectRatio="none"><defs><linearGradient id="' + x + 'trend" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--primary)" stop-opacity=".28"></stop><stop offset="1" style="stop-color:var(--primary)" stop-opacity="0"></stop></linearGradient></defs><path class="wbTrendArea" d="' + St + "L" + Ct[Ct.length - 1][0].toFixed(2) + " 100L" + Ct[0][0].toFixed(2) + ' 100Z" fill="url(#' + x + 'trend)"></path><line class="wbAvgLine" x1="0" x2="100" y1="' + ut(C).toFixed(2) + '" y2="' + ut(C).toFixed(2) + '" vector-effect="non-scaling-stroke"></line><path class="wbTrendLine" d="' + St + '" vector-effect="non-scaling-stroke"></path></svg><span class="wbTrendAvg" style="top:' + ut(C).toFixed(2) + '%">' + bt(ce(s, C)) + "</span>" + Y.map((Tt, st) => {
      const Pt = Tt.today ? " wbToday" : "", Ht = "left:" + Et(st).toFixed(2) + "%;top:" + ut(Tt.high).toFixed(2) + "%";
      return '<i class="wbTrendDot' + Pt + '" style="' + Ht + '"></i><span class="wbAvgValue' + Pt + '" style="' + Ht + '">' + bt(ce(s, Tt.high)) + "</span>";
    }).join("") + '</div><div class="wbTrendDays">' + Y.map((Tt, st) => '<span class="wbAvgDay' + (Tt.today ? " wbToday" : "") + '" style="left:' + Et(st).toFixed(2) + '%">' + bt(bm(Tt.date, s)) + "</span>").join("") + "</div></div>";
    return Xe({
      icon: ee.chartLine,
      name: ht.metrics.compared_to_average,
      double: !0,
      sub: qe(ht.highsLastDays, { days: h.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (B > 0 ? "+" : "") + bt(ce(s, B)) + '</div><div class="wbCompareWords">' + bt(ht.average[F]) + '</div><div class="wbCompareTemps">' + bt(qe(ht.todayVsAverage, { today: ce(s, b), average: ce(s, C) })) + "</div></div>" + qt + "</div>"
    });
  }
  function zi(s, u) {
    const h = xe(s, u, "humidity");
    if (!h || !ie(h.value)) return "";
    const b = xe(s, u, "dew_point"), C = Math.max(0, Math.min(100, Number(h.value)));
    return Xe({
      icon: ee.waterPercent,
      name: ht.metrics.humidity,
      sub: b && ie(b.value) ? qe(ht.dewPoint, { dew_point: ce(s, b.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + C + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + ya(zt(Math.round(Number(h.value)), s.locale), "%") + "</div>"
    });
  }
  function Vo(s, u) {
    var Tt, st, Pt;
    const h = xe(s, u, "pressure");
    if (!h || !ie(h.value)) return "";
    const b = Number(h.value), C = (Tt = h.stateObj.attributes) == null ? void 0 : Tt.pressure_unit, B = Ld(b, C), F = ((st = G.pressureHistory) == null ? void 0 : st.entityId) === h.stateObj.entity_id ? Ld(G.pressureHistory.value, C) : void 0;
    let Y;
    if (B !== void 0 && F !== void 0) {
      const Ht = B - F;
      Y = Ht >= wd ? "rising" : Ht <= -wd ? "falling" : "steady";
    }
    const P = Pi(s, h.stateObj, "pressure", Math.round(b)), U = h.stateObj, et = (Ht) => C === "inHg" ? Math.round(Ht * 100) / 100 : Math.round(Ht), ut = (Ht) => Td(s, U, "pressure", et(Ht)), Et = F !== void 0 ? G.pressureHistory.value : void 0, Ct = Et !== void 0 ? et(b - Et) : void 0, St = (Pt = U.entity_id) != null && Pt.startsWith("weather.") ? ot("hourly").find((Ht) => ie(Ht.pressure) && new Date(Ht.datetime).getTime() >= Date.now() + 3 * te - 30 * De) : void 0, qt = [
      ...Y ? [ht.advice[Y]] : [],
      ...Et !== void 0 ? [[ht.callout.hoursAgo, ut(Et)], [ht.callout.change, (Ct > 0 ? "+" : Ct < 0 ? "−" : "") + ut(Math.abs(Ct))]] : [],
      ...St ? [[ht.callout.inHours, ut(Number(St.pressure))]] : []
    ];
    return Xe({
      icon: ee.gauge,
      name: ht.metrics.pressure,
      sub: Y ? ht.pressure[Y] : void 0,
      cls: "wbPressure",
      callouts: qt,
      zone: '<div class="wbTapeRow"><div class="wbTapeValue">' + ya(P.number) + '<span class="wbTapeUnit">' + bt(P.unit) + "</span></div>" + (B !== void 0 ? Gn(s, B) : "") + "</div>"
    });
  }
  function Gn(s, u) {
    const C = Math.floor(u) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (B, F) => C + F).map((B) => {
      const F = 100 - (B - u) * 9;
      if (F < 22 || F > 178) return "";
      const Y = B % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(F - 100) / 100) + '"><line class="wbTapeTick" x1="' + (Y ? 2 : 8) + '" x2="26" y1="' + F + '" y2="' + F + '"></line>' + (Y ? '<text class="wbTapeLabel" x="33" y="' + F + '">' + bt(zt(B, s.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + bt(ht.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + bt(ht.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function hn(s) {
    var P, U;
    const u = gl(s), h = u ? s.states[u] : void 0;
    if (!h || ((P = G.rain) == null ? void 0 : P.entityId) !== u || !ie(G.rain.change)) return "";
    const b = ((U = h.attributes) == null ? void 0 : U.unit_of_measurement) ?? "", C = rt(s, "hourly"), B = Date.now() + ia, F = ot("hourly").filter((et) => et.precipitation != null && new Date(et.datetime).getTime() <= B), Y = F.reduce((et, ut) => et + Number(ut.precipitation), 0);
    return Xe({
      icon: ee.rainy,
      name: ht.metrics.precipitation,
      sub: C && F.length ? qe(ht.rainExpected, { amount: zt(Y, s.locale, { maximumFractionDigits: 1 }) + " " + Fo(s, C, "precipitation") }) : ht.rainLast24h,
      visual: ya(zt(G.rain.change, s.locale, { maximumFractionDigits: 1 }), b) + (F.length > 1 ? Fm(F.map((et) => ({ label: "", value: Number(et.precipitation) }))) : "")
    });
  }
  function Pr(s, u) {
    const h = xe(s, u, "visibility");
    if (!h || !ie(h.value)) return "";
    const b = Pi(s, h.stateObj, "visibility", h.value), C = Lh(Number(h.value), Fo(s, h.stateObj, "visibility"));
    return Xe({
      icon: ee.eyeOutline,
      name: ht.metrics.visibility,
      sub: ht.visibilityLevel[Eh(C)],
      visual: '<div class="wbSea"><canvas class="wbSeaArt" data-wb-sea="' + C + '" aria-hidden="true"></canvas><div class="wbSeaFact">' + bt(Gi(s, C)) + '</div><div class="wbSeaValue">' + ya(b.number, b.unit) + "</div></div>"
    });
  }
  function Gi(s, u) {
    var B;
    const h = Dh((B = s.config) == null ? void 0 : B.country, u);
    if (h) return qe(ht.visibilityLandmarks, { from: h.from, to: h.to });
    const b = u / tm * 60;
    if (b < 60) {
      const F = b < 5 ? Math.max(1, Math.round(b)) : 5 * Math.round(b / 5);
      if (F < 60) return qe(ht.walkMinutes, { minutes: zt(F, s.locale) });
    }
    const C = Math.max(1, Math.round(b / 30) / 2);
    return C < 8 ? qe(ht.walkHours, { hours: zt(C, s.locale) }) : ht.walkDay;
  }
  function Ui(s) {
    G.categories === void 0 && Ha(s);
    const u = ve(s), h = (P) => P.map((U) => s.states[U]).filter(fn), b = h(u.air), C = h(u.pollen);
    if (!b.length && !C.length) return "";
    const B = [...b, ...C], F = (P) => C.includes(P) ? ee.flower : ee.airFilter, Y = B.find((P) => P.entity_id === it.aq);
    return Y ? Qa(s, Y, F(Y)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + bt(ht.airQuality) + '</h2></div><div class="wbAqTiles">' + B.map((P) => '<button class="wbTile" data-wb="aq-open" data-entity="' + bt(P.entity_id) + '"><span class="wbChip">' + yo(F(P)) + '</span><span class="wbText"><span class="wbName">' + bt(Oo(s, P)) + '</span><span class="wbSub">' + bt(bo(s, P)) + "</span></span></button>").join("") + "</div></div>";
  }
  function Qa(s, u, h) {
    var et, ut, Et;
    const b = ((et = u.attributes) == null ? void 0 : et.unit_of_measurement) ?? "", C = ((ut = u.attributes) == null ? void 0 : ut.device_class) === "pm25" && b === kd && ie(u.state), B = Number(u.state), F = C ? Si(B) : void 0, Y = ((Et = G.aqHistory) == null ? void 0 : Et.entityId) === u.entity_id ? G.aqHistory.points : void 0, P = (Ct) => Math.min(100, Math.max(0, Ct / Mi * 100));
    let U;
    if (Y && Y.length > 1) U = Rd(Y, (Ct) => (zt(Ct, s.locale, { maximumFractionDigits: 1 }) + " " + b).trim());
    else if (F) {
      let Ct = 0;
      const St = Tp.map(([qt, Tt]) => {
        const st = P(Math.min(Tt, Mi)), Pt = xd[qt] + " " + Ct + "% " + st + "%";
        return Ct = st, Pt;
      });
      U = '<div class="wbScale" role="meter" aria-label="' + bt(ht.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + Mi + '" aria-valuenow="' + B + '" style="background:linear-gradient(to right, ' + St.join(", ") + ')"><i style="left:' + P(B) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + Mi + " " + kd + "</span></div>";
    } else U = '<span class="wbGraphNote"><span>' + bt(bo(s, u)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + yo(h) + '</span><span class="wbText"><span class="wbName">' + bt(Oo(s, u)) + '</span><span class="wbSub">' + bt(bo(s, u)) + (F ? " · " + bt(ht.aqLevel[F]) : "") + '</span></span><button class="wbBack" title="' + bt(ht.back) + '" data-wb="aq-close">' + yo(ee.back) + '</button></div><div class="wbGraph">' + U + "</div></div></div>";
  }
  const Yi = { good: "Good", fair: "Fair", moderate: "Moderate", poor: "Poor", very_poor: "Very poor", extremely_poor: "Extremely poor" }, mn = (s) => s <= 50 ? "Good" : s <= 100 ? "Moderate" : s <= 150 ? "Unhealthy for some" : s <= 200 ? "Unhealthy" : s <= 300 ? "Very unhealthy" : "Hazardous";
  function Ge(s) {
    const u = /* @__PURE__ */ new Map();
    return Object.values(s.states || {}).filter((h) => {
      var b;
      return h.entity_id.startsWith("sensor.") && Oi.includes(((b = h.attributes) == null ? void 0 : b.device_class) ?? "") && fn(h) && In(s, h.entity_id);
    }).sort((h, b) => h.entity_id.localeCompare(b.entity_id)).forEach((h) => {
      u.has(h.attributes.device_class) || u.set(h.attributes.device_class, h);
    }), Oi.map((h) => u.get(h)).filter(Boolean);
  }
  const gn = (s) => Object.values(s.states || {}).filter((u) => {
    var h, b;
    return u.entity_id.startsWith("sensor.") && fn(u) && In(s, u.entity_id) && (((b = (h = s.entities) == null ? void 0 : h[u.entity_id]) == null ? void 0 : b.translation_key) ?? u.entity_id).toLowerCase().includes("pollen");
  }), Sa = ["none", "very_low", "low", "moderate", "high", "very_high"], Co = (s) => ie(s.state) ? Number(s.state) : Sa.indexOf(String(s.state).toLowerCase().replace(/ /g, "_")), sa = (s) => {
    const u = String(s).replace(/_/g, " ");
    return u[0].toUpperCase() + u.slice(1);
  }, zo = (s, u, h) => {
    const b = h ? s === "aqi" ? u <= 50 ? "good" : u <= 100 ? "moderate" : "poor" : s === "pm25" ? Si(u) : null : null;
    return b === "good" || b === "fair" ? ht.advice.window : b === "moderate" || b === null ? ht.advice.fine : ht.advice.closed;
  }, Hr = ["good", "fair", "moderate", "poor", "very_poor", "extremely_poor"], Le = (s) => Hr[s <= 50 ? 0 : s <= 100 ? 1 : s <= 150 ? 2 : s <= 200 ? 3 : s <= 300 ? 4 : 5], _o = "M43 43q1 8 0 10M77 42q1 8 -1 10", Aa = {
    good: [_o, "M34 69Q61 98 86 67"],
    fair: [_o, "M40 74Q61 89 81 72"],
    moderate: [_o, "M41 79Q60 76 80 81"],
    poor: [_o, "M41 85Q60 73 80 86"],
    very_poor: ["M36 38l13 5M84 37l-13 5M43 48q1 7 0 9M77 47q1 7 -1 9", "M37 90Q60 64 84 89"],
    extremely_poor: ["M37 41l12 11M49 41l-12 11M71 40l12 11M83 40l-12 11", "M36 84q6 -8 12 0t12 0t12 0t12 0"]
  }, Nr = (s) => '<svg class="wbAqFace" viewBox="0 0 120 120" aria-hidden="true"><path d="M60 9C89 8 112 32 110 61C109 90 87 112 58 111C30 110 9 88 10 59C11 31 33 10 63 12"></path><path class="wbAqEyes" d="' + Aa[s][0] + '"></path><path d="' + Aa[s][1] + '"></path></svg>';
  function Or(s) {
    const u = Ge(s), h = u[0];
    if (!h) return Xe({ icon: ee.airFilter, name: ht.airQuality, sub: ht.noAir, visual: ya("–", ""), cls: "wbBase" });
    const b = h.attributes.device_class, C = Number(h.state), B = ie(h.state), F = b === "aqi" && B ? mn(C) : b === "pm25" && B ? Yi[Si(C)] : bo(s, h), Y = B ? zt(Math.round(C), s.locale) : String(h.state), P = b === "aqi" ? "AQI" : h.attributes.unit_of_measurement || "", U = B && b === "aqi" ? Le(C) : B && b === "pm25" ? Si(C) : null;
    return Xe(U ? {
      icon: ee.airFilter,
      name: ht.airQuality,
      sub: F,
      cls: "wbAqSmile",
      zone: '<div class="wbAqFill" style="background:' + xd[U] + '">' + Nr(U) + '<div class="wbAqBig"><span class="wbAqNum">' + bt(Y) + "</span>" + (P ? '<span class="wbAqUnit">' + bt(P) + "</span>" : "") + "</div></div>" + Ai(ya(Y, P)),
      callouts: [zo(b, C, B), ...u.slice(1, 3).map((et) => [Oo(s, et), bo(s, et)])]
    } : {
      icon: ee.airFilter,
      name: ht.airQuality,
      sub: F,
      cls: "wbBase",
      zone: ya(Y, P),
      callouts: [zo(b, C, B), ...u.slice(1, 3).map((et) => [Oo(s, et), bo(s, et)])]
    });
  }
  const Zi = [
    ["wbSeed", '<svg viewBox="0 0 22 30" aria-hidden="true"><path d="M11 28V11" fill="none" stroke="currentColor" stroke-width="1"></path><path d="M11 11L3 6M11 11L5 2.5M11 11L8.5 1M11 11L13.5 1M11 11L17 2.5M11 11L19 6" fill="none" stroke="currentColor" stroke-width=".8" stroke-linecap="round"></path><circle cx="11" cy="28.5" r="1.4" fill="currentColor"></circle></svg>'],
    ["wbGrain", '<svg viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="3.3" fill="currentColor"></circle><path d="M6 1.2v1.4M6 9.4v1.4M1.2 6h1.4M9.4 6h1.4M2.6 2.6l1 1M8.4 8.4l1 1M2.6 9.4l1-1M8.4 3.6l1-1" stroke="currentColor" stroke-width=".9" stroke-linecap="round"></path></svg>'],
    ["wbStem", '<svg viewBox="0 0 10 30" aria-hidden="true"><path d="M5 29Q3.6 18 5 8" fill="none" stroke="currentColor" stroke-width="1"></path><ellipse cx="5" cy="6" rx="2.3" ry="4.6" fill="currentColor"></ellipse></svg>']
  ], Ki = (s) => {
    const u = [1, 3, 5, 7, 10, 13][Math.max(0, Math.min(5, Number.isFinite(s) ? Math.round(s) : 0))];
    return '<div class="wbPollenAir" aria-hidden="true">' + Array.from({ length: u }, (h, b) => {
      const [C, B] = Zi[b % 3], F = 10 + b * 7 % 9, Y = 2.6 + b * 5 % 4 * 0.4;
      return '<span class="wbFloat ' + C + '" style="top:' + (4 + b * 37 % 52) + "%;--x:" + (b * 29 % 90 + 4) + "%;--s:" + (0.8 + b * 13 % 5 / 10).toFixed(1) + ";animation-duration:" + F + "s;animation-delay:-" + (b * 2.3 % F).toFixed(1) + 's"><span class="wbPush"><span class="wbBob" style="animation-duration:' + Y.toFixed(1) + "s;animation-delay:-" + (b * 0.7 % Y).toFixed(1) + 's">' + B + "</span></span></span>";
    }).join("") + "</div>";
  };
  function Xi(s) {
    const u = gn(s).sort((C, B) => Co(B) - Co(C));
    if (!u.length) return Xe({ icon: ee.flower, name: ht.pollen, sub: ht.noPollen, visual: ya("–", ""), cls: "wbBase" });
    const h = u[0], b = (C) => ie(C.state) ? bo(s, C) : sa(C.state);
    return Xe({
      icon: ee.flower,
      name: ht.pollen,
      sub: Oo(s, h) + " · " + b(h),
      cls: "wbBase wbPollen",
      zone: Ki(Co(h)) + ya(b(h), ""),
      callouts: u.slice(0, 3).map((C) => [Oo(s, C), b(C)])
    });
  }
  function bn(s) {
    var Y;
    const u = Date.now(), h = ot("hourly").filter((P) => {
      const U = new Date(P.datetime).getTime();
      return U > u - te && U < u + 12 * te;
    }), b = h.find((P) => (P.precipitation_probability ?? 0) >= 50 || (P.precipitation ?? 0) >= 0.2), C = b ? qe(ht.rainFrom, { time: He(new Date(Math.max(u, new Date(b.datetime).getTime())), s) }) : h.length ? ht.noRain12 : void 0, B = (N == null ? void 0 : N()) || "rainviewer";
    let F;
    if (B.startsWith("camera:")) {
      const P = s.states[B.slice(7)], U = P && P.state !== "unavailable" && ((Y = P.attributes) == null ? void 0 : Y.entity_picture);
      F = U ? '<div class="wbRadar wbRadarCam" aria-hidden="true"><img class="wbRadarImg" src="' + bt(U) + '" data-src="' + bt(U) + '" alt=""></div>' : '<div class="wbRadar" aria-hidden="true"><span class="wbRadarNote">' + bt(ht.cameraOff) + "</span></div>";
    } else {
      const P = On(s);
      F = P ? '<div class="wbRadar wbRadarMap" aria-hidden="true" data-lat="' + P.lat + '" data-lon="' + P.lon + '"><i class="wbRadarHome"></i></div>' : '<div class="wbRadar" aria-hidden="true"><i class="wbRadarRing"></i><i class="wbRadarHome"></i><span class="wbRadarNote">' + bt(ht.noLocation) + "</span></div>";
    }
    return Xe({ icon: ee.radar, name: ht.rainRadar, sub: C, cls: "wbBase wbRadarTile", visual: F });
  }
  const Ir = {
    current: Ft,
    hourly: jn,
    sun: $t,
    moon: Br,
    wind: ji,
    uv_index: un,
    compared_to_average: Rr,
    humidity: zi,
    pressure: Vo,
    precipitation: hn,
    visibility: Pr,
    air_quality: Ui,
    aq_tile: Or,
    pollen_tile: Xi,
    radar_tile: bn
  }, Un = [["day", "Last 24 hours", 1], ["week", "Last 7 days", 7], ["month", "Last 30 days", 30]], Go = (s, u) => {
    var h;
    return u.toLocaleDateString((h = s.locale) == null ? void 0 : h.language, { day: "numeric", month: "short" });
  }, ge = (s) => {
    const u = new Date(s);
    return u.setMinutes(u.getMinutes() - u.getTimezoneOffset()), u.toISOString().slice(0, 10);
  }, la = () => {
    const s = it.range, u = Date.now();
    if (s.preset !== "custom") {
      const C = Un.find(([B]) => B === s.preset)[2];
      return [u - C * ia, u];
    }
    const h = qo(/* @__PURE__ */ new Date(s.from + "T00:00")).getTime(), b = Math.min(u, qo(/* @__PURE__ */ new Date(s.to + "T00:00")).getTime() + ia);
    return [Math.min(h, b - te), b];
  }, Jt = (s) => {
    const u = it.range;
    if (u.preset !== "custom") return Un.find(([C]) => C === u.preset)[1];
    const [h, b] = la();
    return u.from === u.to ? Go(s, new Date(h)) : Go(s, new Date(h)) + " – " + Go(s, new Date(b - 1));
  }, To = () => it.range.preset === "custom" ? it.range.from + "_" + it.range.to : it.range.preset, Do = (s, u) => u - s <= 2 * ia, Yn = (s, u, h, b) => Do(h, b) ? He(u, s) : Go(s, u), to = (s, u = 60) => {
    const h = Math.max(1, Math.ceil(s.length / u));
    return s.filter((b, C) => C % h === 0 || C === s.length - 1);
  }, Fr = (s, u, h, b, C = !1) => s.callWS({
    type: "history/history_during_period",
    start_time: new Date(h).toISOString(),
    end_time: new Date(b).toISOString(),
    entity_ids: [u],
    minimal_response: C,
    no_attributes: C,
    significant_changes_only: !1
  }), Lo = (s) => async (u, h, b, C) => {
    const B = xe(u, h, s);
    if (!B) return [];
    const F = B.stateObj.entity_id, Y = await Fr(u, F, b, C);
    return to(((Y == null ? void 0 : Y[F]) ?? []).map((P) => {
      var ut;
      const U = ((ut = P.a) == null ? void 0 : ut[s]) ?? (ie(P.s) ? Number(P.s) : void 0), et = (P.lu ?? P.lc) * 1e3;
      return typeof U == "number" && et >= b && et <= C ? { t: new Date(et), value: U } : null;
    }).filter(Boolean)).map((P) => ({ label: Yn(u, P.t, b, C), value: P.value }));
  }, qr = (s, u) => async (h, b, C, B) => {
    const F = s(h);
    if (!F) return [];
    const Y = F.entity_id, P = await Fr(h, Y, C, B, !0);
    return to(((P == null ? void 0 : P[Y]) ?? []).map((U) => {
      const et = u(U.s), ut = U.lu * 1e3;
      return et == null || !Number.isFinite(et) || ut < C || ut > B ? null : { t: new Date(ut), value: et };
    }).filter(Boolean)).map((U) => ({ label: Yn(h, U.t, C, B), value: U.value }));
  }, Uo = (s, u) => async (h, b, C, B) => {
    const F = On(h);
    if (!F) return [];
    const Y = [];
    if (Do(C, B)) for (let P = C; P <= B; P += te / 2) Y.push({ label: He(new Date(P), h), value: s(new Date(P), F) });
    else for (let P = B; P >= C; P -= ia) {
      const U = new Date(P), et = u(U, F, h);
      et != null && Y.unshift({ label: Go(h, U), value: et });
    }
    return to(Y);
  }, Yo = (s) => gn(s).sort((u, h) => Co(h) - Co(u))[0], ta = (s, u, h) => {
    const b = xe(s, u, h);
    return b ? Fo(s, b.stateObj, h) : "";
  }, Zo = {
    current: { name: () => ht.modes.temperature, icon: () => ee.sunny, load: Lo("temperature"), fmt: (s, u, h) => ce(s, h), now: (s, u) => {
      var h;
      return ce(s, (h = xe(s, u, "temperature")) == null ? void 0 : h.value);
    } },
    sun: {
      name: () => ht.sun,
      icon: () => ee.sunny,
      load: Uo((s, u) => Math.round(Fi(s, u.lat, u.lon) / Je), (s, u, h) => {
        const b = Pn(h, s);
        return b.rise && b.set ? Math.round((b.set - b.rise) / te * 10) / 10 : null;
      }),
      fmt: (s, u, h, b) => b ? zt(h, s.locale) + "°" : zt(h, s.locale) + " h",
      sub: (s) => s ? "How high the sun was" : "Hours of daylight a day"
    },
    moon: {
      name: () => ht.moon,
      icon: () => ee.night,
      load: Uo((s) => Math.round(ml(s).fraction * 100), (s) => Math.round(ml(s).fraction * 100)),
      fmt: (s, u, h) => zt(h, s.locale) + "%",
      sub: () => "How much of it was lit"
    },
    uv_index: { name: () => ht.metrics.uv_index, icon: () => ee.sunnyAlert, load: Lo("uv_index"), fmt: (s, u, h) => zt(Math.round(h * 10) / 10, s.locale), now: (s, u) => {
      const h = xe(s, u, "uv_index");
      return h ? zt(Number(h.value), s.locale) : "";
    } },
    humidity: { name: () => ht.metrics.humidity, icon: () => ee.waterPercent, load: Lo("humidity"), fmt: (s, u, h) => zt(Math.round(h), s.locale) + "%", now: (s, u) => {
      const h = xe(s, u, "humidity");
      return h ? zt(Math.round(Number(h.value)), s.locale) + "%" : "";
    } },
    pressure: { name: () => ht.metrics.pressure, icon: () => ee.gauge, load: Lo("pressure"), fmt: (s, u, h) => zt(Math.round(h), s.locale) + " " + ta(s, u, "pressure"), now: (s, u) => {
      const h = xe(s, u, "pressure");
      return h ? zt(Math.round(Number(h.value)), s.locale) + " " + ta(s, u, "pressure") : "";
    } },
    wind: { name: () => ht.wind, icon: () => ee.windy, load: Lo("wind_speed"), fmt: (s, u, h) => zt(Math.round(h), s.locale) + " " + ta(s, u, "wind_speed"), now: (s, u) => {
      const h = xe(s, u, "wind_speed");
      return h ? zt(Math.round(Number(h.value)), s.locale) + " " + ta(s, u, "wind_speed") : "";
    } },
    visibility: { name: () => ht.metrics.visibility, icon: () => ee.eyeOutline, load: Lo("visibility"), fmt: (s, u, h) => zt(Math.round(h * 10) / 10, s.locale) + " " + ta(s, u, "visibility"), now: (s, u) => {
      const h = xe(s, u, "visibility");
      return h ? zt(Number(h.value), s.locale) + " " + ta(s, u, "visibility") : "";
    } },
    aq_tile: {
      name: (s) => Ge(s)[0] ? Oo(s, Ge(s)[0]) : ht.airQuality,
      icon: () => ee.airFilter,
      load: qr((s) => Ge(s)[0], (s) => ie(s) ? Number(s) : null),
      fmt: (s, u, h) => {
        var B, F;
        const b = Ge(s)[0], C = (B = b == null ? void 0 : b.attributes) == null ? void 0 : B.device_class;
        return zt(Math.round(h * 10) / 10, s.locale) + (C === "aqi" ? " AQI" : (F = b == null ? void 0 : b.attributes) != null && F.unit_of_measurement ? " " + b.attributes.unit_of_measurement : "");
      },
      now: (s) => {
        const u = Ge(s)[0];
        return u ? bo(s, u) : "";
      }
    },
    pollen_tile: {
      name: (s) => Yo(s) ? Oo(s, Yo(s)) : ht.pollen,
      icon: () => ee.flower,
      load: qr(Yo, (s) => {
        const u = Co({ state: s });
        return u < 0 ? null : u;
      }),
      fmt: (s, u, h) => sa(Sa[Math.round(h)] || ""),
      now: (s) => {
        const u = Yo(s);
        return u ? sa(u.state) : "";
      }
    }
  }, Oa = {};
  let wn = null;
  async function ua(s) {
    const u = r == null ? void 0 : r();
    if (!u || !Zo[s]) return;
    const h = s + "|" + To(), [b, C] = la();
    if (Oa[h] && Date.now() - Oa[h].at < 5 * De) return;
    Oa[h] = { at: Date.now(), points: null };
    try {
      Oa[h].points = await Zo[s].load(u, _t(u), b, C);
    } catch {
      Oa[h].points = [];
    }
    Ee(!0), wn === s && it.graph === s && (wn = null, hd(V.querySelector(".wbGraphCard")));
    const B = it.graph === s && V.querySelector(".wbGraph .wbChart");
    B && Ap(B, B.querySelector(".wbLine"), B.querySelectorAll(".wbArea"));
  }
  function Wr(s, u) {
    const h = it.range, b = ge(Date.now()), [C, B] = la(), F = h.pickFrom || ge(C), Y = h.pickTo || ge(B - 1);
    return '<div class="wbRangePick" role="dialog" aria-label="Choose date range"><div class="wbRangePresets">' + Un.map(([P, U]) => '<button class="wbRangePreset" aria-pressed="' + (h.preset === P) + '" data-wb="graph-preset" data-range="' + P + '" data-wb-focus="graph-preset-' + P + '">' + bt(U) + "</button>").join("") + '</div><div class="wbRangeDates"><label><span>From</span><input type="date" data-range-from value="' + F + '" max="' + b + '"></label><label><span>To</span><input type="date" data-range-to value="' + Y + '" max="' + b + '"></label></div><button class="wbRangeApply" data-wb="graph-apply" data-wb-focus="graph-apply">Show these dates</button></div>';
  }
  function jr(s, u, h) {
    var ut;
    const b = Zo[h], [C, B] = la(), F = Do(C, B), Y = (ut = Oa[h + "|" + To()]) == null ? void 0 : ut.points, P = Math.max(120, Math.min(520, innerWidth - (innerWidth <= 620 ? 0 : 32)) - 2 * 18 - 32), et = Y ? Y.length > 1 ? Rd(Y, (Et) => b.fmt(s, u, Et, F), 220, P) : '<span class="wbGraphNote"><span>No history for these dates</span></span>' : '<span class="wbGraphNote"><span>Loading…</span></span>';
    return '<div class="wbPopupBox"><div class="wbCard wbSquare wbGraphCard" role="dialog" aria-modal="true" aria-label="' + bt(b.name(s)) + '"><div class="wbHead"><div class="wbChip wbPlain">' + Dp(b.icon(s)) + '</div><div class="wbText"><span class="wbName">' + bt(b.name(s)) + '</span><span class="wbSub">' + bt(b.sub ? b.sub(F) : b.now ? b.now(s, u) : "") + '</span></div><button class="wbBack" title="Close" data-wb="graph-close" data-wb-focus="graph-close">' + yo(ee.close) + '</button></div><button class="wbRangeBtn" aria-haspopup="dialog" aria-expanded="' + !!it.picking + '" title="Choose date range" data-wb="graph-pick" data-wb-focus="graph-pick">' + yo(ee.calendar) + "<span>" + bt(Jt(s)) + "</span>" + yo(ee.chevronDown) + '</button><div class="wbGraph">' + et + "</div></div>" + (it.picking ? Wr() : "") + "</div>";
  }
  function Ee(s) {
    var Et, Ct, St, qt, Tt;
    const u = r == null ? void 0 : r();
    if (!u || lt) return;
    const h = _t(u);
    yt(u, h), G.lastFetch || Xa();
    const b = ve(u), C = Ed(u), B = gl(u), F = [
      ...h.map((st) => u.states[st]),
      u.states["sun.sun"],
      C && u.states[C],
      B && u.states[B],
      ...b.air.map((st) => u.states[st]),
      ...b.pollen.map((st) => u.states[st]),
      ...tt.some((st) => $.includes(st)) ? [...Ge(u), ...gn(u)] : [],
      u.locale,
      u.config,
      u.entities,
      Math.floor(Date.now() / De)
    ];
    if (!s && pt && F.length === pt.length && F.every((st, Pt) => st === pt[Pt])) return;
    pt = F;
    const Y = _.getRootNode(), P = Y.activeElement || document.activeElement;
    for (const st of tt) {
      const Pt = j[st];
      let Ht = "";
      try {
        Ht = Ir[st](u, h) || "";
      } catch {
        Ht = "";
      }
      if (Ht === Pt.html) continue;
      const fe = P && Pt.el.contains(P) ? (Et = P.dataset) == null ? void 0 : Et.wbFocus : void 0, Mt = Pt.el.querySelector(".wbStripScroll"), ae = Mt ? Mt.scrollLeft : null;
      Pt.html = Ht, Pt.el.hidden = !Ht, Pt.el.innerHTML = Ht;
      const re = Pt.el.querySelector(".wbStripScroll");
      re && ae != null ? re.scrollTo({ left: ae }) : re != null && re.dataset.start && re.scrollTo({ left: Number(re.dataset.start) * re.clientWidth / Number(re.dataset.span) }), fe && !Z && ((Ct = Pt.el.querySelector('[data-wb-focus="' + fe + '"]')) == null || Ct.focus());
    }
    let U = "";
    if (it.graph)
      try {
        U = jr(u, h, it.graph) || "";
      } catch {
        U = "";
      }
    if (U !== E) {
      const st = P && V.contains(P) ? (St = P.dataset) == null ? void 0 : St.wbFocus : void 0;
      E = U, V.innerHTML = U, V.hidden = !U, U && !V.isConnected && (_.closest("#app") || _).appendChild(V), st && !Z && ((qt = V.querySelector('[data-wb-focus="' + st + '"]')) == null || qt.focus({ preventScroll: !0 }));
    }
    Wi(), _.querySelectorAll(".wbRadarMap").forEach((st) => {
      st._tiles || Bo(st);
    }), Z && ((Tt = _.querySelector('[data-wb-focus="' + Z + '"]') || V.querySelector('[data-wb-focus="' + Z + '"]')) == null || Tt.focus({ preventScroll: !0 }), Z = null);
    let et = !1, ut = !1;
    for (const st of tt) {
      const Pt = j[st], Ht = !Pt.el.hidden, fe = at[st] === "wide" || K.includes(st), Mt = tt.indexOf(st) >= tt.indexOf("moon"), ae = Ht && (Mt && fe && !et || !fe && !ut);
      ae && fe && (et = !0), ae && !fe && (ut = !0), Pt.el.toggleAttribute("data-break", ae);
    }
    ca(performance.now());
  }
  function Ko() {
    X || lt || (X = !0, queueMicrotask(() => {
      X = !1, Ee(!0);
    }));
  }
  function Vr() {
    const s = getComputedStyle(_), u = (F) => s.getPropertyValue(F).trim(), h = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([F, Y]) => {
      u(Y) && (h[F] = u(Y));
    });
    const b = u("--color-text-primary") || "#f1f1f1", C = u("--color-bg-card") || "#222222", B = !!_.closest(".light");
    return { colors: { ...Ma, ...h }, ink: B ? b : C, paper: B ? C : b };
  }
  const Zn = (s, u) => {
    var h;
    s.width !== u.w && (s.width = u.w), s.height !== u.h && (s.height = u.h), (h = s.getContext("2d")) == null || h.putImageData(new ImageData(u.data, u.w, u.h), 0, 0);
  }, eo = () => g && !hm();
  function zr(s, u) {
    _.querySelectorAll("canvas[data-wb-strip]").forEach((h) => Kn(h, J[h.dataset.wbStrip], s, u));
  }
  function Kn(s, u, h, b) {
    if (!u || !s.getClientRects().length) return;
    const C = s.clientWidth, B = s.clientHeight;
    if (!C || !B) return;
    const F = { width: C, height: B, columns: u.columns || md, colors: b.colors, clock: h, ambient: eo(), seed: u.seed, soft: 1.5 };
    if (p === "smooth") {
      const Y = Math.min(2, window.devicePixelRatio || 1), P = Math.round(C * Y), U = Math.round(B * Y);
      s.width !== P && (s.width = P), s.height !== U && (s.height = U);
      const et = s.getContext("2d");
      if (!et) return;
      et.setTransform(Y, 0, 0, Y, 0, 0), ph(et, u.segs, F);
    } else Zn(s, dh(u.segs, { ...F, px: 2, oneBit: p === "onebit", ink: b.ink, paper: b.paper }));
  }
  function ca(s) {
    if (lt) return;
    const u = Vr();
    if (p !== "smooth") {
      const h = eo();
      _.querySelectorAll("canvas[data-wb-wx]").forEach((b) => {
        b.getClientRects().length && Zn(b, Zu(ju(b.dataset.wbWx, u.colors), { size: Number(b.dataset.size) || 40, px: 2, oneBit: p === "onebit", colors: u.colors, ink: u.ink, paper: u.paper, clock: s, idle: h }));
      });
    }
    _.querySelectorAll("canvas[data-wb-sea]").forEach((h) => {
      const b = h.clientWidth, C = h.clientHeight, B = Number(h.dataset.wbSea), F = b + "x" + C + ":" + B + ":" + u.colors.skyClearDay;
      !b || !C || !(B > 0) || h.dataset.painted === F || (h.dataset.painted = F, Zn(h, Ch(b, C, B, u.colors)));
    }), zr(s, u);
  }
  function Gr(s) {
    if (mt = 0, !(lt || !eo())) {
      if (!document.hidden)
        if (p === "smooth") zr(s, Vr());
        else {
          const u = Math.floor(s / 100);
          u !== nt && (nt = u, ca(s));
        }
      mt = requestAnimationFrame(Gr);
    }
  }
  function Eo() {
    _.classList.toggle("wbMotion", eo()), !mt && !lt && eo() && (mt = requestAnimationFrame(Gr));
  }
  function vn(s) {
    var h, b, C, B, F, Y, P;
    if (s.target === V) {
      it.graph = void 0, it.picking = !1, Ee(!0);
      return;
    }
    const u = (b = (h = s.target).closest) == null ? void 0 : b.call(h, "[data-wb]");
    if (!u || !(_.contains(u) || V.contains(u))) {
      const U = (B = (C = s.target).closest) == null ? void 0 : B.call(C, ".wbItem"), et = U == null ? void 0 : U.dataset.card;
      if (!U || !_.contains(U) || !Zo[et] || it.graph === et || _.closest(".tfEditing") || et === "current" && w) return;
      it.graph = et, it.picking = !1, Z = "graph-close", Ee(!0), (F = Oa[et + "|" + To()]) != null && F.points ? hd(V.querySelector(".wbGraphCard")) : wn = et, ua(et);
      return;
    }
    switch (u.dataset.wb) {
      case "day": {
        it.openDay = Number(u.dataset.index), it.opener = u.dataset.wbFocus, Z = "back-day";
        const U = Vt()[it.openDay], et = !G.todayHistory || G.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - G.todayHistory.fetched > Vh;
        U && Rn(new Date(U.datetime), /* @__PURE__ */ new Date()) && et && Wo();
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
          localStorage.setItem(wt, it.hourlyView);
        } catch {
        }
        break;
      case "hours-day": {
        const U = _.querySelector(".wbStripScroll");
        U && U.scrollTo({ left: Number(u.dataset.hours) * U.clientWidth / Number(U.dataset.span), behavior: "smooth" });
        return;
      }
      case "aq-open":
        it.aq = u.dataset.entity, So(it.aq);
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
        it.range = { preset: u.dataset.range }, it.picking = !1, Z = "graph-pick", Ee(!0), ua(it.graph);
        return;
      case "graph-apply": {
        let U = it.range.pickFrom || ((Y = _.querySelector("[data-range-from]")) == null ? void 0 : Y.value), et = it.range.pickTo || ((P = _.querySelector("[data-range-to]")) == null ? void 0 : P.value);
        if (!U || !et) return;
        U > et && ([U, et] = [et, U]), it.range = { preset: "custom", from: U, to: et }, it.picking = !1, Z = "graph-pick", Ee(!0), ua(it.graph);
        return;
      }
      default:
        return;
    }
    Ee(!0);
  }
  function Oe(s) {
    var u, h, b, C, B, F;
    s.key === "Escape" && it.openDay !== void 0 && ((h = (u = s.target).closest) != null && h.call(u, '[data-wb-open="day"]')) ? (it.openDay = void 0, Z = it.opener, it.opener = void 0, Ee(!0)) : s.key === "Escape" && it.picking && ((C = (b = s.target).closest) != null && C.call(b, ".wbGraphCard")) ? (it.picking = !1, Z = "graph-pick", Ee(!0)) : s.key === "Escape" && it.graph && ((F = (B = s.target).closest) != null && F.call(B, ".wbGraphCard")) && (it.graph = void 0, Ee(!0));
  }
  let ha = null;
  function yn(s) {
    var h, b;
    const u = (b = (h = s.target).closest) == null ? void 0 : b.call(h, ".wbStripScroll");
    !u || s.button !== 0 || (ha = { startX: s.pageX, left: u.scrollLeft, moved: !1 }, u.classList.add("wbHeld"), window.addEventListener("mousemove", xn), window.addEventListener("mouseup", Ur, { once: !0 }));
  }
  function xn(s) {
    const u = _.querySelector(".wbStripScroll");
    if (!ha || !u) return;
    const h = s.pageX - ha.startX;
    !ha.moved && Math.abs(h) > 1 && (ha.moved = !0, u.classList.add("wbDragging")), u.scrollLeft = ha.left - h;
  }
  function Ur() {
    ha = null, window.removeEventListener("mousemove", xn);
    const s = _.querySelector(".wbStripScroll");
    if (!s) return;
    s.classList.remove("wbDragging", "wbHeld");
    const u = [...s.querySelectorAll(".wbSnap")];
    if (u.length) {
      const h = u.reduce((b, C) => Math.abs(C.offsetLeft - s.scrollLeft) < Math.abs(b.offsetLeft - s.scrollLeft) ? C : b);
      s.scrollTo({ left: h.offsetLeft, behavior: "smooth" });
    }
  }
  const Xo = (s) => {
    var h, b;
    const u = s.target;
    (h = u.matches) != null && h.call(u, "[data-range-from]") ? it.range.pickFrom = u.value : (b = u.matches) != null && b.call(u, "[data-range-to]") && (it.range.pickTo = u.value);
  };
  _.addEventListener("change", Xo), _.addEventListener("click", vn), _.addEventListener("keydown", Oe), V.addEventListener("change", Xo), V.addEventListener("click", vn), V.addEventListener("keydown", Oe), _.addEventListener("mousedown", yn);
  const Yr = 64, $i = 30;
  let ma = null, Ca = 0;
  const ao = () => {
    Ca = 0, _.querySelectorAll(".wbPollen .wbPush").forEach((s) => {
      let u = 0, h = 0;
      if (ma) {
        const b = s.parentElement.getBoundingClientRect(), C = b.left + b.width / 2 - ma.x, B = b.top + b.height / 2 - ma.y, F = Math.hypot(C, B) || 1;
        if (F < Yr) {
          const Y = (1 - F / Yr) * $i;
          u = C / F * Y, h = B / F * Y;
        }
      }
      s.style.transform = u || h ? "translate(" + u.toFixed(1) + "px," + h.toFixed(1) + "px)" : "";
    }), ma && (Ca = requestAnimationFrame(ao));
  }, Zr = (s) => {
    var h, b;
    if (!((b = (h = s.target).closest) == null ? void 0 : b.call(h, ".wbPollen")) || _e != null && _e.matches) {
      ma && (ma = null, Ca || (Ca = requestAnimationFrame(ao)));
      return;
    }
    ma = { x: s.clientX, y: s.clientY }, Ca || (Ca = requestAnimationFrame(ao));
  }, Ia = () => {
    ma = null, Ca || (Ca = requestAnimationFrame(ao));
  };
  _.addEventListener("pointermove", Zr), _.addEventListener("pointerleave", Ia);
  const da = typeof ResizeObserver == "function" ? new ResizeObserver(() => ca(performance.now())) : null;
  da == null || da.observe(_);
  const ga = typeof ResizeObserver == "function" ? new ResizeObserver((s) => s.forEach((u) => {
    const h = u.target;
    h._tiles && (h.clientWidth !== h._w || h.clientHeight !== h._h) && Bo(h);
  })) : null;
  function Bo(s) {
    var F;
    const u = s.clientWidth, h = s.clientHeight;
    if (!u || !h || lt) return;
    const b = nm(Number(s.dataset.lat), Number(s.dataset.lon), u, h), C = !!((F = _.closest("#app")) != null && F.classList.contains("light")), B = (Y) => ' style="left:' + Y.left + "px;top:" + Y.top + 'px"';
    s._tiles = b, s._w = u, s._h = h, s._frames = null, s._built = Date.now(), s.innerHTML = '<div class="wbRadarLayer wbRadarBase">' + b.map((Y) => '<img src="https://' + "abcd"[(Y.x + Y.y) % 4] + ".basemaps.cartocdn.com/" + (C ? "light_all" : "dark_all") + "/" + Tl + "/" + Y.x + "/" + Y.y + '.png"' + B(Y) + ' alt="">').join("") + '</div><div class="wbRadarFrames"></div><i class="wbRadarHome"></i><span class="wbRadarTime"></span><span class="wbRadarCredit">© OpenStreetMap · CARTO · RainViewer</span>', ga == null || ga.observe(s), om().then((Y) => {
      !s.isConnected || lt || s._tiles !== b || (s.querySelector(".wbRadarFrames").innerHTML = Y.frames.map((P, U) => '<div class="wbRadarLayer wbRadarRain" data-i="' + U + '" hidden>' + b.map((et) => '<img src="' + Y.host + P.path + "/" + wo + "/" + Tl + "/" + et.x + "/" + et.y + '/2/1_1.png"' + B(et) + ' alt="">').join("") + "</div>").join(""), s._frames = Y.frames, s._hold = 0, kn(s, Y.frames.findLastIndex((P) => P.past)));
    }).catch(() => {
      s.isConnected && (s.querySelector(".wbRadarTime").textContent = ht.radarOff);
    });
  }
  function kn(s, u) {
    const h = s._frames;
    if (!(h != null && h.length)) return;
    s._i = u, s.querySelectorAll(".wbRadarRain").forEach((C) => {
      C.hidden = Number(C.dataset.i) !== u;
    });
    const b = h[u];
    s.querySelector(".wbRadarTime").textContent = He(new Date(b.time * 1e3), r == null ? void 0 : r()) + (b.past ? "" : " · " + ht.forecastTag);
  }
  function Ji() {
    _.querySelectorAll(".wbRadarMap").forEach((s) => {
      if (!s._frames) return;
      if (Date.now() - s._built > _p) {
        Bo(s);
        return;
      }
      if (_e != null && _e.matches) return;
      if (s._hold > 0) {
        s._hold -= vd;
        return;
      }
      const u = s._frames.length - 1, h = s._frames.findLastIndex((C) => C.past), b = s._i >= u ? 0 : s._i + 1;
      kn(s, b), (b === h || b === u) && (s._hold = am);
    });
  }
  const Qi = () => _.querySelectorAll(".wbRadarImg").forEach((s) => {
    const u = s.dataset.src;
    s.src = u + (u.includes("?") ? "&" : "?") + "hc=" + Date.now();
  }), oo = typeof MutationObserver == "function" ? new MutationObserver(() => _.querySelectorAll(".wbRadarMap").forEach((s) => {
    s._tiles && Bo(s);
  })) : null, Kr = _.closest("#app");
  Kr && (oo == null || oo.observe(Kr, { attributes: !0, attributeFilter: ["class"] }));
  const _e = (Jn = window.matchMedia) == null ? void 0 : Jn.call(window, "(prefers-reduced-motion: reduce)"), Xn = () => {
    Eo(), ca(performance.now());
  };
  (Xr = _e == null ? void 0 : _e.addEventListener) == null || Xr.call(_e, "change", Xn);
  const $n = [
    setInterval(() => {
      Nt = /* @__PURE__ */ new Date(), Ee(!0);
    }, Jh),
    setInterval(() => {
      O = /* @__PURE__ */ new Date(), Ee(!0);
    }, Qh),
    setInterval(Xa, Kh),
    setInterval(Ji, vd),
    setInterval(Qi, De)
  ];
  return Ee(!0), Eo(), {
    update() {
      Ee(!1);
    },
    // a choice in Settings changed (Next hours' window)
    refresh() {
      Ee(!0);
    },
    setStyle(s) {
      !s || s === p || (p = s, _.dataset.style = p, V.dataset.style = p, Ee(!0), Eo());
    },
    destroy() {
      var s;
      cancelAnimationFrame(Ca), _.removeEventListener("pointermove", Zr), _.removeEventListener("pointerleave", Ia), lt = !0, $n.forEach(clearInterval), mt && cancelAnimationFrame(mt), mt = 0, da == null || da.disconnect(), ga == null || ga.disconnect(), oo == null || oo.disconnect(), (s = _e == null ? void 0 : _e.removeEventListener) == null || s.call(_e, "change", Xn), Ur(), _.removeEventListener("click", vn), _.removeEventListener("change", Xo), _.removeEventListener("keydown", Oe), _.removeEventListener("mousedown", yn), V.removeEventListener("click", vn), V.removeEventListener("change", Xo), V.removeEventListener("keydown", Oe), ["daily", "hourly"].forEach(vt), _.remove(), V.remove();
    }
  };
}
const Sr = "#E1E1E1", Nd = "#F7F4F0", bl = "#03a9f4", Yt = 14, Xt = 172;
let zm = 0;
const pe = (o) => Math.round(o * 100) / 100, Ka = (o, r, c) => Math.max(r, Math.min(c, o)), Mo = (o, r, c, p, g, y) => '<rect x="' + pe(o) + '" y="' + pe(r) + '" width="' + pe(c) + '" height="' + pe(p) + '" fill="' + g + '"' + (y != null ? ' opacity="' + y + '"' : "") + "/>", wl = (o) => o.map((r, c) => (c ? "L" : "M") + pe(r[0]) + " " + pe(r[1])).join("");
function vl(o) {
  const r = (o == null ? void 0 : o.attributes) || {};
  return r.device_class === "curtain" ? "curtain" : r.device_class === "blind" || r.current_tilt_position != null ? "venetian" : "blind";
}
const Io = [
  [2, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]],
  [6.5, ["#0B0F1C", "#2E7FD6", "#F2743B", "#F1B6C8", 0.95]],
  [9.5, ["#8FC4EC", "#4DA3E8", "#F4FAFF", "#2F7FCF", 0.7]],
  [13, ["#9ED3F6", "#3F97E6", "#FFFFFF", "#2B86D9", 0.65]],
  [17, ["#9FC2E4", "#4A8ED4", "#FFD9B8", "#5E8FD6", 0.75]],
  [19, ["#4B5E86", "#3B86E0", "#FF6A3D", "#B07CE8", 0.95]],
  [21.5, ["#1A2140", "#1F3F7A", "#B4506E", "#3E59A6", 0.8]],
  [26, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]]
];
function Gm(o) {
  const r = o < 2 ? o + 24 : o;
  let c = Io[0], p = Io[Io.length - 1];
  for (let A = 0; A < Io.length - 1; A++) if (r >= Io[A][0] && r <= Io[A + 1][0]) {
    c = Io[A], p = Io[A + 1];
    break;
  }
  const g = (r - c[0]) / (p[0] - c[0]), y = g * g * (3 - 2 * g), w = (A, N) => {
    const x = parseInt(A.slice(1), 16), _ = parseInt(N.slice(1), 16);
    return "#" + [16, 8, 0].map((R) => Math.round((x >> R & 255) + ((_ >> R & 255) - (x >> R & 255)) * y).toString(16).padStart(2, "0")).join("");
  };
  return { top: w(c[1][0], p[1][0]), bot: w(c[1][1], p[1][1]), warm: w(c[1][2], p[1][2]), cool: w(c[1][3], p[1][3]), op: c[1][4] + (p[1][4] - c[1][4]) * y, t: r };
}
function Um(o) {
  const r = parseInt(o.slice(1), 16), c = (r >> 16 & 255) / 255, p = (r >> 8 & 255) / 255, g = (r & 255) / 255, y = Math.max(c, p, g), w = Math.min(c, p, g);
  let A = 0, N = 0;
  const x = (y + w) / 2;
  if (y !== w) {
    const _ = y - w;
    N = x > 0.5 ? _ / (2 - y - w) : _ / (y + w), A = (y === c ? (p - g) / _ + (p < g ? 6 : 0) : y === p ? (g - c) / _ + 2 : (c - p) / _ + 4) / 6;
  }
  return [A * 360, N * 100, x * 100];
}
function Wp(o, r, c) {
  r = Ka(r, 0, 100) / 100, c = Ka(c, 0, 100) / 100;
  const p = (w) => (w + o / 30) % 12, g = r * Math.min(c, 1 - c), y = (w) => c - g * Math.max(-1, Math.min(p(w) - 3, Math.min(9 - p(w), 1)));
  return "#" + [y(0), y(8), y(4)].map((w) => Math.round(w * 255).toString(16).padStart(2, "0")).join("");
}
const [jp, Vp, zp] = Um(Sr), Od = Wp(jp, Vp, Math.max(6, zp - 14)), Ym = Wp(jp, Vp, Math.min(96, zp + 16));
function Zm(o, r, c, p, g) {
  const y = Xt / 2, w = Xt * 0.12, A = y - (y - w) * o, N = (tt) => tt ** 1.3, x = Ka(c, -1.5, 1.5), _ = (tt) => -(Math.abs(x) * 4.6 * tt ** 1.5) * Math.sign(x), R = o * 1.4, V = (tt, at) => {
    const K = Math.min(4.8, Math.abs(c) * 2.6) * (at ? 1 : -1) * Math.sign(c || 1), j = at ? tt + A : tt, lt = at ? tt : tt + A, pt = (wt) => j + _(wt) + K * Math.sin(wt * Math.PI * 1.2 + p) * N(wt) * 1.4 + R * Math.sin(wt * Math.PI * 2 + p * 0.6) * N(wt) * (at ? 1 : -1), mt = [[lt, Yt]];
    for (let wt = 0; wt <= 12; wt++) mt.push([pt(wt / 12), Yt + Xt * wt / 12]);
    mt.push([lt, Yt + Xt]);
    let nt = '<path d="' + wl(mt) + 'Z" fill="' + Sr + '"/>';
    if (g) return nt;
    const X = 1.35 + ((at ? c > 0 : c < 0) ? 0.35 : 0), Z = (wt) => {
      const Lt = wt / 7, it = at ? 1 - Lt : Lt, G = (1 - it) ** 1.3, Nt = tt + A * Lt;
      return Array.from({ length: 13 }, (O, J) => {
        const T = J / 12;
        return [Nt + _(T) * G + K * X * Math.sin(T * Math.PI * 1.2 + p - it * 3.2) * N(T) * 1.4 * G + R * 1.6 * Math.sin(T * Math.PI * 2 + p * 0.6 - it * 2.5) * N(T) * o * (0.4 + 0.6 * G), Yt + Xt * T];
      });
    }, E = [1, 2, 3, 4, 5, 6].map(Z);
    for (let wt = 0; wt < 6; wt += 2) nt += '<path d="' + wl(E[wt]) + wl(E[wt + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return nt;
  }, $ = y - (y - w) * r;
  return { body: V(Yt, !0) + V(Yt + Xt - A, !1), rails: [{ x: Yt + $ - 4, y: Yt, w: 4, h: Xt }, { x: Yt + Xt - $, y: Yt, w: 4, h: Xt }], head: 6.4 };
}
function Km(o, r, c) {
  const p = Xt * (1 - o);
  let g = "";
  if (p > 1 && (g += Mo(Yt, Yt, Xt, p, Sr), !c))
    for (let y = 1; y < 7; y += 2) g += Mo(Yt + Xt * y / 7, Yt, Xt / 7, p, "#fff");
  return { body: g, rails: [{ x: Yt, y: Yt + Xt * (1 - r) - 7, w: Xt, h: 11 }], head: 10.4 };
}
function Xm(o, r, c, p) {
  const g = 9 - 7 * (c / 100), y = Yt + Xt * (1 - o), w = Math.ceil(Xt / 10) + 1, A = Yt + g / 2, N = (Yt + Xt - g / 2 - A) / (w - 1), x = 0.8, _ = 0.6, R = Array.from({ length: w }, (tt, at) => Math.max(A + at * _, Math.min(A + at * N, y - g / 2 - (w - 1 - at) * _))), V = R.slice(0, -1).map((tt, at) => Ka((R[at + 1] - tt - _) / (N - _), 0, 1));
  V.push(V[w - 2]);
  let $ = "";
  return R.forEach((tt, at) => {
    const K = x + (g - x) * V[at], j = Math.max(0.5, K / 2), lt = Math.max(0.4, K * 0.114);
    $ += Mo(Yt, tt - j, Xt, Math.max(1, K), Sr), !p && K > 2.2 && ($ += Mo(Yt, tt + j - lt, Xt, lt, Od) + Mo(Yt, tt - j, Xt, lt * 0.55, Ym, 0.75));
  }), p || [0.22, 0.78].forEach((tt) => {
    $ += Mo(Yt + Xt * tt - 0.7, Yt, 1.4, Math.max(0, R[w - 1] + 1 - Yt), Od, 0.85);
  }), { body: $, rails: [{ x: Yt, y: Yt + Xt * (1 - r) - 8, w: Xt, h: 8 }], head: 8.8 };
}
const Id = (o, r, c, p, g, y, w) => o === "curtain" ? Zm(r, c, g, y, w) : o === "venetian" ? Xm(r, c, p, w) : Km(r, c, w);
function $m(o, r) {
  let c = "", p = "";
  return r.forEach((g) => {
    const y = g.w > g.h, w = Ka(y ? Yt + Xt / 2 : g.x + g.w / 2, 17, 183), A = Ka(y ? g.y + g.h / 2 : Yt + Xt / 2, 17, 183);
    c += y ? Mo(Yt, Ka(g.y + g.h / 2, Yt, Yt + Xt) - 1, Xt, 2, bl) : Mo(Ka(g.x + g.w / 2, Yt, Yt + Xt) - 1, Yt, 2, Xt, bl);
    const N = y ? "M" + pe(w - 4) + " " + pe(A - 3) + "l4 -3l4 3M" + pe(w - 4) + " " + pe(A + 3) + "l4 3l4 -3" : "M" + pe(w - 3) + " " + pe(A - 4) + "l-3 4l3 4M" + pe(w + 3) + " " + pe(A - 4) + "l3 4l-3 4";
    p += '<circle cx="' + pe(w) + '" cy="' + pe(A) + '" r="11" fill="' + bl + '" filter="url(#' + o + 's)"/><path d="' + N + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: c, knobs: p };
}
function Jm(o, r) {
  const c = /* @__PURE__ */ new Date(), p = Gm(c.getHours() + c.getMinutes() / 60), g = 42 + 18 * Math.sin(p.t * 0.5), y = p.t >= 5 && p.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (p.t - 5) / 15) : 80, w = Id(r.kind, r.pos / 100, r.bar / 100, r.tilt, r.vel, r.ph, !1), A = r.ghostAlpha > 4e-3 && r.ghost != null ? Id(r.kind, r.ghost / 100, r.ghost / 100, r.tilt, 0, 0, !0).body : "", N = r.grip > 4e-3 ? $m(o, w.rails) : null, x = (_) => Mo(Yt, Yt, Xt, Xt, _);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + o + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + o + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + p.top + '"/><stop offset="1" stop-color="' + p.bot + '"/></linearGradient><radialGradient id="' + o + 'w" cx="' + pe(g) + '%" cy="' + pe(y) + '%" r="58%"><stop offset="0" stop-color="' + p.warm + '" stop-opacity="' + pe(p.op * 0.8) + '"/><stop offset="1" stop-color="' + p.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + o + 'k" cx="' + pe(100 - g * 0.8) + '%" cy="' + pe(100 - y * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + p.cool + '" stop-opacity="' + pe(p.op * 0.64) + '"/><stop offset="1" stop-color="' + p.cool + '" stop-opacity="0"/></radialGradient><filter id="' + o + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + Nd + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + o + 'c)">' + x("url(#" + o + "l)") + x("url(#" + o + "w)") + x("url(#" + o + "k)") + (A ? '<g opacity="' + pe(r.ghostAlpha) + '">' + A + "</g>" : "") + w.body + '<rect x="14" y="14" width="172" height="' + w.head + '" fill="' + Sr + '" filter="url(#' + o + 's)"/></g>' + (N ? '<g clip-path="url(#' + o + 'c)" opacity="' + pe(r.grip) + '">' + N.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + Nd + '" stroke-width="3"/>' + (N ? '<g opacity="' + pe(r.grip) + '">' + N.knobs + "</g>" : "") + "</svg>";
}
function Qm({ onMove: o, onSet: r }) {
  var nt;
  const c = "cv" + ++zm, p = document.createElement("div");
  p.className = "tfCoverArt";
  const g = (nt = window.matchMedia) == null ? void 0 : nt.call(window, "(pointer: coarse)").matches;
  let y = null;
  const w = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let A = 0, N = !1, x = !1, _ = null, R = 0, V = 0;
  const $ = () => (y == null ? void 0 : y.kind) === "curtain" ? "x" : "y", tt = () => _ || N || x || y.moving || y.target != null ? 1 : g ? performance.now() < V ? 1 : 0.4 : 0, at = () => {
    p.innerHTML = Jm(c, { kind: y.kind, pos: w.pos, bar: y.target ?? w.pos, tilt: w.tilt, vel: w.vel, ph: w.ph, ghost: w.gpos, ghostAlpha: w.ghost, grip: w.grip });
  };
  function K(X) {
    A = 0;
    const Z = w.last ? Math.min(0.064, (X - w.last) / 1e3) : 1 / 60, E = Z * 60;
    w.last = X;
    const wt = y.pos - w.pos, Lt = w.pos;
    w.pos += Math.sign(wt) * Math.min(Math.abs(wt), Math.max(10.5, Math.abs(wt) * 1.4) * Z), Math.abs(y.pos - w.pos) < 0.03 && (w.pos = y.pos), w.vel = w.vel * 0.86 + (w.pos - Lt) / E * 0.14, Math.abs(w.vel) < 0.015 && w.pos === y.pos && (w.vel = 0), (w.pos !== Lt || w.vel) && (w.ph += (0.06 + Math.abs(w.vel) * 0.03) * E);
    const it = y.tilt - w.tilt;
    w.tilt += Math.sign(it) * Math.min(Math.abs(it), Math.max(60, Math.abs(it) * 4) * Z);
    const G = tt();
    w.grip += (G - w.grip) * Math.min(1, Z * (G > w.grip ? 11 : 3.5)), Math.abs(G - w.grip) < 0.01 && (w.grip = G);
    const Nt = y.target != null && Math.abs(y.target - w.pos) > 0.5 ? 0.22 : 0;
    y.target != null && (w.gpos = y.target), w.ghost += (Nt - w.ghost) * Math.min(1, Z * (Nt > w.ghost ? 16 : 3)), Math.abs(Nt - w.ghost) < 4e-3 && (w.ghost = Nt), at(), w.pos !== y.pos || w.vel || w.tilt !== y.tilt || w.grip !== G || w.ghost !== Nt ? A = requestAnimationFrame(K) : w.last = 0;
  }
  const j = () => {
    y && !A && (A = requestAnimationFrame(K));
  }, lt = setInterval(() => {
    y && !A && at();
  }, 60 * 1e3), pt = (X) => {
    const Z = p.getBoundingClientRect();
    return $() === "x" ? (X.clientX - Z.left) / Z.width : (X.clientY - Z.top) / Z.height;
  };
  p.addEventListener("pointerdown", (X) => {
    var wt;
    if (!(y != null && y.canSet) || X.button > 0) return;
    X.preventDefault(), (wt = p.setPointerCapture) == null || wt.call(p, X.pointerId);
    const Z = y.target ?? y.pos, E = p.getBoundingClientRect();
    _ = { p0: pt(X), from: Z, x0: X.clientX, value: null, side: null }, y.kind === "curtain" && Z > 0 && (_.side = (X.clientX - E.left) / E.width < 0.5 ? "L" : "R"), j();
  }), p.addEventListener("pointermove", (X) => {
    if (!_) return;
    let Z;
    if (y.kind === "curtain") {
      if (!_.side) {
        const wt = X.clientX - _.x0;
        if (Math.abs(wt) < 4) return;
        _.side = wt < 0 ? "L" : "R";
      }
      const E = (Xt / 2 - Xt * 0.12) / 200;
      Z = _.from + (_.side === "L" ? -1 : 1) * ((pt(X) - _.p0) / E) * 100;
    } else Z = _.from - (pt(X) - _.p0) / (Xt / 200) * 100;
    _.value = Ka(Z, 0, 100), o(_.value);
  });
  const mt = () => {
    if (!_) return;
    const X = _.value;
    _ = null, X != null && r(Math.round(X)), j();
  };
  return p.addEventListener("pointerup", mt), p.addEventListener("pointercancel", mt), p.addEventListener("lostpointercapture", mt), p.addEventListener("pointerenter", () => {
    N = !0, j();
  }), p.addEventListener("pointerleave", () => {
    N = !1, j();
  }), p.addEventListener("focus", () => {
    x = p.matches(":focus-visible"), j();
  }), p.addEventListener("blur", () => {
    x = !1, j();
  }), p.addEventListener("keydown", (X) => {
    if (!(y != null && y.canSet)) return;
    const Z = Math.round(y.target ?? y.pos), E = X.shiftKey ? 10 : 1, wt = { ArrowUp: Z + E, ArrowRight: Z + E, ArrowDown: Z - E, ArrowLeft: Z - E, PageUp: Z + 25, PageDown: Z - 25, Home: 0, End: 100 }[X.key];
    if (wt == null) return;
    X.preventDefault();
    const Lt = Ka(wt, 0, 100);
    o(Lt), clearTimeout(R), R = setTimeout(() => r(Lt), 500);
  }), {
    el: p,
    update(X) {
      const Z = !y;
      y = X, Z && (w.pos = y.pos, w.tilt = y.tilt, V = performance.now() + 1500, g && setTimeout(j, 1600)), p.classList.toggle("x", $() === "x"), p.classList.toggle("y", $() === "y"), y.canSet ? (p.tabIndex = 0, p.setAttribute("role", "slider"), p.setAttribute("aria-valuemin", "0"), p.setAttribute("aria-valuemax", "100"), p.setAttribute("aria-valuenow", String(Math.round(y.target ?? y.pos))), p.setAttribute("aria-orientation", $() === "x" ? "horizontal" : "vertical")) : p.setAttribute("role", "img"), p.setAttribute("aria-label", y.name + (y.canSet ? " position" : "")), p.setAttribute("aria-valuetext", y.text), j();
    },
    destroy() {
      cancelAnimationFrame(A), A = 0, clearInterval(lt), clearTimeout(R), p.remove();
    }
  };
}
const Fd = "homecore-density", Ua = {
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
}, q = (o) => String(o ?? "").replace(/[&<>"']/g, (r) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[r]), qd = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', Wd = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', jd = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', Ci = {
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h2v12H6zM9.5 12L18 18V6z"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>'
}, Vd = {
  down: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 11h14v2H5z"/></svg>',
  up: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z"/></svg>'
}, zd = 1, t0 = 4, Gd = 16, Ud = 32, e0 = 128, a0 = 256, Yd = 16384, o0 = 1, n0 = 2, Zd = 4, r0 = 8, i0 = {
  open: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/></svg>',
  stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5" fill="currentColor"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l5 5-5 5"/><path d="M21 7l-5 5 5 5"/></svg>'
}, Kd = { curtain: ["mdi:curtains", "mdi:curtains-closed"], blind: ["mdi:roller-shade", "mdi:roller-shade-closed"], venetian: ["mdi:blinds-horizontal", "mdi:blinds-horizontal-closed"] }, s0 = { curtain: "curtains", blind: "blind", venetian: "blinds" }, xr = {
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
}, Xd = ["covers", "people", "openings", "leaks", "vacuum"], $d = "homecore_house", Jd = "homecore-house-used", yl = ["switch", "fan", "input_boolean", "automation"], Qd = "homecore-house-look", l0 = [["look", "Look"], ["house", "House page"], ["weather", "Weather"]], c0 = [["popup", "Popup"], ["sheet", "Sheet"]], d0 = [["auto", "Automatic"], ["cut", "Cut short"], ["wrap", "Two lines"], ["scroll", "Scroll"]], p0 = [["day", "Daytime 06–22"], ["waking", "Waking 07–23"], ["all", "All day"]], f0 = [["bitmap", "Pixel"], ["onebit", "1-bit"], ["smooth", "Smooth"], ["line", "Line"]], _i = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', u0 = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', h0 = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>', tp = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"/></svg>', xl = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>', m0 = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 13C6.14 13 4.59 14.28 4.14 16H2V18H4.14C4.59 19.72 6.14 21 8 21S11.41 19.72 11.86 18H22V16H11.86C11.41 14.28 9.86 13 8 13M8 19C6.9 19 6 18.1 6 17C6 15.9 6.9 15 8 15S10 15.9 10 17C10 18.1 9.1 19 8 19M19.86 6C19.41 4.28 17.86 3 16 3S12.59 4.28 12.14 6H2V8H12.14C12.59 9.72 14.14 11 16 11S19.41 9.72 19.86 8H22V6H19.86M16 9C14.9 9 14 8.1 14 7C14 5.9 14.9 5 16 5S18 5.9 18 7C18 8.1 17.1 9 16 9Z"/></svg>', ep = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"/></svg>', Ti = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/></svg>', ap = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', Gp = (o) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + o.map((r) => '<path d="' + r + '"/>').join("") + "</svg>", Di = Gp(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), op = Gp(["M20 6L9 17L4 12"]), Ya = (o, r = "") => '<span class="tfAreaGlyph" data-icon-for="' + q(o || "") + '"' + (r ? ' data-icon-name="' + q(r) + '"' : "") + "></span>", g0 = (o) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (o ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', b0 = 1, w0 = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], np = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, Li = ["door", "window", "garage_door", "opening"], rp = { moisture: ["detected water", "dry"], smoke: ["detected smoke", "clear"], gas: ["detected gas", "clear"], carbon_monoxide: ["detected carbon monoxide", "clear"], safety: ["became unsafe", "safe"] }, kr = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve"], v0 = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], y0 = 10, x0 = 20, k0 = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, M0 = ["living room", "bedroom", "office"];
function S0(o, { config: r, getHass: c }) {
  var Yc, Zc, Kc;
  const p = (t) => o.getElementById(t), g = p("app"), y = r || {}, w = String(y.layout || "").toLowerCase().replace("_", "-") === "test-focus", A = String(y.page || "").toLowerCase() === "overview";
  let N = Ua.get(Fd) === "1", x = {};
  const _ = (t) => {
    var e;
    return (e = c()) == null ? void 0 : e.callWS(t);
  }, R = (t, e, a) => _({ type: "call_service", domain: t, service: e, service_data: a }), V = o.querySelector("#appearancePane .toggleList");
  V && !p("densityToggle") && (V.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), p("densityToggle").addEventListener("click", () => {
    N = !N, Ua.set(Fd, N ? "1" : "0"), Z();
  }));
  const $ = [
    ["weather", "Weather", "The forecast under Home.", (t) => t.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (t) => t.startsWith("sensor.") && jt(t).device_class === "power" && /^(W|kW)$/.test(jt(t).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm in the Security popup.", (t) => t.startsWith("alarm_control_panel.")]
  ], tt = (t, e, a, n) => '<div class="themeChoice" id="' + t + '" role="group" aria-label="' + e + '">' + n.map(([i, d]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + a + '="' + i + '">' + d + "</button>").join("") + "</div>", at = (t, e, a, n) => '<div class="toggleRow"' + (n ? ' id="' + n + '"' : "") + "><div><strong>" + t + "</strong>" + (e ? '<div class="status">' + e + "</div>" : "") + "</div>" + a + "</div>";
  function K() {
    var M, W;
    if (!w || p("housePane")) return;
    const t = p("settingsView");
    t.querySelector(".settingsTitle").textContent = "HomeCore settings";
    const e = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], a = (z, H) => '<div class="houseTab' + (z === "look" ? " active" : "") + '" data-house-pane="' + z + '"><section class="card">' + H + "</section></div>";
    t.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + e.map(([z, H]) => '<button class="tab segBtn' + (z === "look" ? " active" : "") + '" type="button" data-house-tab="' + z + '">' + H + "</button>").join("") + "</div>" + // Appearance in groups (Matt, 8 Nov), each one's title inside its card as a card header (Matt, 9 Nov)
    a("look", l0.map(([z, H]) => '<div class="tfSetGroup"><div class="toggleList" data-look-group="' + z + '"><div class="tfCardTitle">' + H + "</div></div></div>").join("")) + // Lights as cards by default, with a Cards | Table choice (Matt, 9 Nov)
    a("lights", '<div class="tfLightView"><div class="themeChoice" role="group" aria-label="Show lights as"><button class="wxLayoutBtn" type="button" data-light-view="cards">Cards</button><button class="wxLayoutBtn" type="button" data-light-view="table">Table</button></div></div><p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div><div class="tfLightCards" id="lightCards"></div>') + a("sources", '<div class="toggleList">' + $.map(([z, H, I]) => at(H, I, '<select class="settingsSelect" data-source="' + z + '" aria-label="' + H + '"></select>')).join("") + "</div>") + a("sums", '<div class="toggleList">' + Object.entries(xr).map(([z, H]) => at(H.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + z + '" aria-label="' + H.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const n = (z) => t.querySelector('[data-look-group="' + z + '"]'), i = (z) => z == null ? void 0 : z.closest(".toggleRow");
    [i(t.querySelector(".themeBtn"))].forEach((z) => z && n("look").appendChild(z));
    const d = i(p("densityToggle"));
    d && (d.hidden = !0), [i(p("moreInfoChoice")), i(p("namesChoice"))].forEach((z) => z && n("house").appendChild(z)), n("house").insertAdjacentHTML("beforeend", at("Lights", "How lights show on the house page.", tt("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + at("Pad", "What the Dual Axis Controller’s pad sets on its tile.", tt("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow")), [i(p("hoursChoice")), i(p("wxStyleChoice"))].forEach((z) => z && n("weather").appendChild(z));
    const l = p("housePane"), f = l.querySelector(".houseTabs"), m = f.querySelector(".rubberIndicator"), k = "homecore-light-view", S = (z) => {
      l.classList.toggle("tfLightCardsOn", z === "cards"), l.querySelectorAll("[data-light-view]").forEach((H) => H.setAttribute("aria-pressed", String(H.dataset.lightView === z))), Ua.set(k, z);
    };
    S(Ua.get(k) === "table" ? "table" : "cards"), l.querySelector(".tfLightView").addEventListener("click", (z) => {
      const H = z.target.closest("[data-light-view]");
      H && S(H.dataset.lightView);
    }), new ResizeObserver(() => lt()).observe(l), (W = (M = document.fonts) == null ? void 0 : M.ready) == null || W.then(() => lt());
    const v = (z) => {
      const H = f.querySelector(".tab.active");
      m.style.transition = "none", z ? Ri(m, m.offsetLeft, m.offsetWidth, H.offsetLeft, H.offsetWidth) : (m.style.left = H.offsetLeft + "px", m.style.width = H.offsetWidth + "px");
    };
    new ResizeObserver(() => v(!1)).observe(f), l.addEventListener("click", (z) => {
      const H = z.target.closest("[data-house-tab]");
      if (H) {
        f.querySelectorAll(".tab").forEach((L) => L.classList.toggle("active", L === H)), l.querySelectorAll(".houseTab").forEach((L) => L.classList.toggle("active", L.dataset.housePane === H.dataset.houseTab)), H.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), v(!0), lt();
        return;
      }
      const I = z.target.closest("[data-light-fav]");
      if (I) {
        Qn(I.dataset.lightFav);
        return;
      }
      const D = z.target.closest("[data-light-pick]");
      if (D) {
        const [L, kt] = D.dataset.lightPick.split("|"), Zt = { ...Vt[L] };
        D.dataset.v ? Zt[kt] = D.dataset.v : delete Zt[kt], Vt[L] = Zt, Qe(), [...Oe.keys()].filter((Rt) => Rt.endsWith(":" + kt)).forEach((Rt) => Oe.delete(Rt)), uo();
        return;
      }
      const Q = z.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!Q || Q.disabled)) {
        if (Q.dataset.lights && (Vt.lights = Q.dataset.lights), Q.dataset.dacPad && (Vt.dacPad = Q.dataset.dacPad), (Q.dataset.lights || Q.dataset.dacPad) && (Qe(), Oe.clear()), Q.dataset.sumToggle) {
          const L = Q.dataset.sumToggle, kt = new Set(gt.hiddenSums || []);
          kt.has(L) ? kt.delete(L) : kt.add(L), gt = { ...gt, hiddenSums: [...kt] }, Ne();
        }
        uo();
      }
    }), l.addEventListener("change", (z) => {
      const H = z.target;
      H.dataset.source && (gt = { ...gt, sources: { ...gt.sources || {}, [H.dataset.source]: H.value || void 0 } }, Ne());
      const I = H.dataset.lightStyle || H.dataset.lightPad;
      if (I) {
        const D = H.dataset.lightStyle ? "lightStyles" : "lightPads", Q = { ...Vt[D] };
        H.value ? Q[I] = H.value : delete Q[I], Vt[D] = Q, Qe(), [...Oe.keys()].filter((L) => L.endsWith(":" + I)).forEach((L) => Oe.delete(L));
      }
      uo();
    });
  }
  function j() {
    var v, M;
    yn() && vn();
    const t = p("housePane");
    if (!t) return;
    const e = !!customElements.get(ca);
    t.querySelectorAll("[data-lights]").forEach((W) => W.setAttribute("aria-pressed", String(W.dataset.lights === Vt.lights))), p("lightsRow").querySelector(".status").textContent = e || !yn() ? "How lights show on the house page." : Eo === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", t.querySelectorAll("[data-dac-pad]").forEach((W) => W.setAttribute("aria-pressed", String(W.dataset.dacPad === Vt.dacPad))), p("dacPadRow").hidden = !yn();
    for (const W of t.querySelectorAll("[data-source]")) {
      if (W === o.activeElement) continue;
      const [z] = $.find(([I]) => I === W.dataset.source), H = Object.keys(x).filter($.find(([I]) => I === z)[3]).sort((I, D) => xt(I).localeCompare(xt(D)));
      W.dataset.sig !== H.join(",") && (W.innerHTML = '<option value="">Automatic</option>' + H.map((I) => '<option value="' + q(I) + '">' + q(xt(I)) + "</option>").join(""), W.dataset.sig = H.join(",")), W.value = H.includes((v = gt.sources) == null ? void 0 : v[z]) ? gt.sources[z] : "";
    }
    t.querySelectorAll("[data-sum-toggle]").forEach((W) => {
      const z = !(gt.hiddenSums || []).includes(W.dataset.sumToggle);
      W.classList.toggle("on", z), W.setAttribute("aria-checked", String(z));
    });
    const a = p("lightRows"), n = p("lightCards"), i = o.activeElement, d = a != null && a.contains(i) || n != null && n.contains(i) ? i : null;
    if (!a || d != null && d.matches("select")) {
      lt();
      return;
    }
    const l = new Set(U()), f = (W, z, H, I) => '<option value="' + W + '"' + (W === H ? " selected" : "") + ">" + z + "</option>", m = Object.keys(x).filter((W) => W.startsWith("light.")).sort((W, z) => !_t.get(W) - !_t.get(z) || (_t.get(W) || "").localeCompare(_t.get(z) || "") || xt(W).localeCompare(xt(z))).map((W) => {
      const z = Vt.lightStyles[W] || "", H = Vt.lightPads[W] || "", I = l.has(W), D = q(xt(W));
      return "<tr><td><strong>" + D + "</strong></td><td>" + q(_t.get(W) || "—") + "</td><td>" + q(Le(W)) + '</td><td class="metaSwitchCol"><button class="switch' + (I ? " on" : "") + '" type="button" role="switch" aria-checked="' + I + '" data-light-fav="' + q(W) + '" aria-label="' + D + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + q(W) + '" aria-label="' + D + ' tile">' + f("", "Default", z) + f("tile", "HomeCore tile", z) + f("dac", "Dual Axis Controller", z) + '</select></td><td><select class="settingsSelect" data-light-pad="' + q(W) + '" aria-label="' + D + ' pad"' + (ha(W) ? "" : " disabled") + ">" + f("", "Default", H) + f("temperature", "Temperature", H) + f("colour", "Colour", H) + "</select></td></tr>";
    }).join(""), k = (W, z, H, I, D) => '<div class="themeChoice" role="group" aria-label="' + H + '">' + I.map(([Q, L]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Q === D) + '" data-light-pick="' + W + "|" + q(z) + '" data-v="' + Q + '">' + L + "</button>").join("") + "</div>", S = Object.keys(x).filter((W) => W.startsWith("light.")).sort((W, z) => !_t.get(W) - !_t.get(z) || (_t.get(W) || "").localeCompare(_t.get(z) || "") || xt(W).localeCompare(xt(z))).map((W) => {
      const z = l.has(W), H = q(xt(W)), I = [_t.get(W), Le(W)].filter(Boolean).map(q).join(" · ");
      return '<div class="toggleList"><div class="toggleRow"><div><strong>' + H + '</strong><div class="status">' + I + "</div></div></div>" + at("Favourite", "", '<button class="switch' + (z ? " on" : "") + '" type="button" role="switch" aria-checked="' + z + '" data-light-fav="' + q(W) + '" aria-label="' + H + ' is a favourite"></button>') + at("Tile", "", k("lightStyles", W, H + " tile", [["", "Default"], ["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]], Vt.lightStyles[W] || "")) + (ha(W) ? at("Pad", "", k("lightPads", W, H + " pad", [["", "Default"], ["temperature", "Temperature"], ["colour", "Colour"]], Vt.lightPads[W] || "")) : "") + "</div>";
    }).join("");
    a.dataset.html !== m && (a.innerHTML = m, a.dataset.html = m), n.dataset.html !== S && (n.innerHTML = S, n.dataset.html = S), d != null && d.dataset.lightFav && ((M = (n.contains(d) ? n : a).querySelector('[data-light-fav="' + CSS.escape(d.dataset.lightFav) + '"]')) == null || M.focus({ preventScroll: !0 })), lt();
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
            var v;
            return (v = d[Number(l.value)]) == null ? void 0 : v.click();
          }), i.after(l);
          const S = () => {
            l.innerHTML = d.map((M, W) => '<option value="' + W + '"' + (M.disabled ? " disabled" : "") + ">" + q(M.textContent) + "</option>").join("");
            const v = d.findIndex((M) => M.getAttribute("aria-pressed") === "true" || M.classList.contains("active"));
            v >= 0 && (l.value = String(v));
          };
          new MutationObserver(S).observe(i, { subtree: !0, attributes: !0, attributeFilter: ["aria-pressed", "class", "disabled"] }), S();
        }
        const f = (S) => {
          i.hidden !== !S && (i.hidden = !S), l.hidden !== S && (l.hidden = S);
        };
        if (d.length > 3) {
          f(!1);
          continue;
        }
        if (!i.getClientRects().length && !l.getClientRects().length) {
          l.dataset.fit || f(!0);
          continue;
        }
        const m = i.hidden;
        i.hidden = !1;
        const k = d.every((S) => S.scrollWidth <= S.clientWidth + 1);
        i.hidden = m, f(k), l.dataset.fit = "1";
      }
  }
  const pt = document.createElement("div");
  pt.className = "densityBadge", pt.setAttribute("aria-live", "polite"), pt.hidden = !0, g.appendChild(pt);
  let mt = 0;
  function nt() {
    if (!N) return;
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
  const X = () => {
    N && requestAnimationFrame(nt);
  };
  function Z() {
    var t;
    g.classList.toggle("showDensity", N), (t = p("densityToggle")) == null || t.classList.toggle("on", N), pt.hidden = !N, clearInterval(mt), N && (mt = setInterval(nt, 1e3), nt());
  }
  window.addEventListener("scroll", X, { capture: !0, passive: !0 }), window.addEventListener("resize", X, { passive: !0 });
  const E = o.querySelector("#homeView .grid"), wt = document.createElement("style");
  o.appendChild(wt);
  const Lt = new ResizeObserver(() => Nt()), it = /* @__PURE__ */ new Set(), G = (t) => {
    const e = t.getBoundingClientRect().height;
    return Math.abs(e - t.offsetHeight) < 1 ? e : t.offsetHeight;
  };
  function Nt() {
    const t = g.classList.contains("tfAreaOpen") && !g.classList.contains("tfWeatherOpen");
    if (E.classList.toggle("tfStack", t), it.forEach((m) => {
      (!t || !m.isConnected) && (Lt.unobserve(m), it.delete(m));
    }), !t) {
      wt.textContent = "";
      return;
    }
    const e = getComputedStyle(E), a = parseFloat(e.columnGap) || 0, n = e.gridTemplateColumns.split(" ").length, i = [...E.children].filter((m) => m.dataset.k && m.offsetParent);
    wt.disabled = !0;
    const d = i.map((m) => {
      const k = getComputedStyle(m), S = /span (\d+)/.exec(k.gridColumnStart + " " + k.gridColumnEnd);
      return Math.min(n, S ? +S[1] : k.gridColumnEnd === "-1" ? n : 1);
    });
    wt.disabled = !1;
    let l = 0;
    const f = i.map((m, k) => {
      it.has(m) || (it.add(m), Lt.observe(m));
      const S = d[k];
      l + S > n && (l = 0);
      const v = l + 1;
      return l = (l + S) % n, '#homeView .grid.tfStack>[data-k="' + CSS.escape(m.dataset.k) + '"]{grid-column:' + v + " / span " + S + ";grid-row-end:span " + Math.max(1, Math.ceil(G(m) + a)) + "}";
    }).join(`
`);
    wt.textContent !== f && (wt.textContent = f);
  }
  new MutationObserver(Nt).observe(E, { childList: !0 }), new MutationObserver(Nt).observe(g, { attributes: !0, attributeFilter: ["class"] });
  let O = null, J = null, T = null;
  const dt = /* @__PURE__ */ new Map(), ot = /* @__PURE__ */ new Map(), rt = /* @__PURE__ */ new Map(), vt = 6;
  let ft = null;
  const yt = /* @__PURE__ */ new Map(), Ot = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map();
  let gt = { favourites: null }, Ve = {}, Xa = {}, Wo = [], So = null;
  const Ha = (() => {
    try {
      return JSON.parse(Ua.get(Jd)) || {};
    } catch {
      return {};
    }
  })();
  let _t = /* @__PURE__ */ new Map(), ve = 0;
  function Ne() {
    clearTimeout(ve), ve = setTimeout(() => Promise.resolve(_({ type: "frontend/set_user_data", key: $d, value: gt })).catch(() => {
    }), 400);
  }
  const Vt = (() => {
    let t = {};
    try {
      t = JSON.parse(Ua.get(Qd)) || {};
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
  })(), Qe = () => Ua.set(Qd, JSON.stringify(Vt)), Fn = () => {
    g.dataset.more = Vt.more, g.dataset.names = Vt.names, Ns();
  };
  w && V && !p("moreInfoChoice") && (p("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + c0.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Vt.more === t) + '" data-more-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), p("moreInfoChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-more-style]");
    e && (Vt.more = e.dataset.moreStyle, Qe(), Fn(), p("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  }), p("moreInfoChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Long names</strong><div class="status">How a name or state too long for its space shows.</div></div><div class="themeChoice" id="namesChoice" role="group" aria-label="Long names">' + d0.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Vt.names === t) + '" data-names-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), p("namesChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-names-style]");
    e && (Vt.names = e.dataset.namesStyle, Vt.namesPicked = !0, Qe(), Fn(), p("namesChoice").querySelectorAll("[data-names-style]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  }), p("namesChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Next hours</strong><div class="status">The hours each day shows on the Weather page.</div></div><div class="themeChoice" id="hoursChoice" role="group" aria-label="Next hours">' + p0.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Vt.hoursWindow === t) + '" data-hours-window="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), p("hoursChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-hours-window]");
    e && (Vt.hoursWindow = e.dataset.hoursWindow, Qe(), he == null || he.refresh(), p("hoursChoice").querySelectorAll("[data-hours-window]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  }), p("hoursChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Weather art</strong><div class="status">How the weather and the sky are drawn.</div></div><div class="themeChoice" id="wxStyleChoice" role="group" aria-label="Weather art">' + f0.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Vt.wxStyle === t) + '" data-wx-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), p("wxStyleChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-wx-style]");
    e && (Vt.wxStyle = e.dataset.wxStyle, Qe(), he == null || he.setStyle(Vt.wxStyle), me == null || me.forEach((a) => a.setStyle(Vt.wxStyle)), p("wxStyleChoice").querySelectorAll("[data-wx-style]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  })), K();
  let Ft = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const pa = /* @__PURE__ */ new Map();
  let Ar = "";
  const Cr = w ? Fu({ onChange: () => Te() }) : null;
  w && g.classList.add("house");
  const fa = Object.assign(document.createElement("div"), { className: "tfBento" });
  let he = null, _r = null, jo = !1;
  function Tr(t) {
    const e = st();
    if (g.classList.toggle("houseBento", !!e), he && (_r !== e || t == null) && (he.destroy(), he = null), !e || t == null) {
      fa.remove();
      return;
    }
    fa.isConnected || E.append(fa), fa.style.order = t, !he && !jo && (he = Hd(fa, { getHass: c, entityId: e, style: Vt.wxStyle, hoursWindow: () => Vt.hoursWindow, radarSource: Vn }), _r = e);
  }
  const qn = [
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
  ], Wn = qn.map(([t]) => t), Ao = ["aq", "pollen", "radar", "hourly", "sun", "moon", "uv", "humidity", "pressure", "wind", "visibility"], qi = { hourly: 2 }, Na = Object.fromEntries(qn.map(([t]) => [t, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + t })]));
  let me = null, jn = null;
  function Dr(t) {
    const e = st();
    me && jn !== e && (me.forEach((a) => a.destroy()), me = null), Object.values(Na).forEach((a) => e ? !a.isConnected && E.append(a) : a.remove()), e && !me && !jo && (me = /* @__PURE__ */ new Map(), jn = e), Er();
  }
  const Vn = () => {
    var t;
    return ((t = oe().opts.radar) == null ? void 0 : t.source) || "rainviewer";
  }, Lr = () => [["rainviewer", "RainViewer"], ...Object.values(x).filter((t) => t.entity_id.startsWith("camera.")).sort((t, e) => xt(t.entity_id).localeCompare(xt(e.entity_id))).map((t) => ["camera:" + t.entity_id, xt(t.entity_id)])];
  function Er() {
    if (!me || jo) return;
    const t = new Set(oe().hidden);
    qn.forEach(([e, a]) => {
      me.has(e) || t.has(e) && !(Ut != null && Ut.fromTray && Ut.key === e) || me.set(e, Hd(Na[e], { getHass: c, entityId: jn, style: Vt.wxStyle, cards: a, onOpen: e === "wx" ? () => Cc("weather") : void 0, radarSource: Vn }));
    });
  }
  const jt = (t) => {
    var e;
    return ((e = x[t]) == null ? void 0 : e.attributes) || {};
  }, xt = (t) => jt(t).friendly_name || t, Ae = (t, e) => Ra(t) || (Number(jt(t).supported_features) & e) === e, $t = (t) => {
    const e = String(t ?? "").replace(/_/g, " ");
    return e.charAt(0).toUpperCase() + e.slice(1);
  }, ze = (t, e = 1) => Number(t).toLocaleString(void 0, { minimumFractionDigits: e, maximumFractionDigits: e }), $a = (t) => (t == null ? void 0 : t.state) === "on" ? t.attributes.brightness != null ? Math.max(1, Math.round(t.attributes.brightness / 2.55)) : 100 : 0, Ja = (t) => jt(t).supported_color_modes || [], Wi = (t, e) => [5, 3, 1].map((a) => {
    const n = (a + t / 60) % 6;
    return 255 * (1 - e / 100 * Math.max(0, Math.min(n, 4 - n, 1)));
  }), zn = (t) => (t /= 255, t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)), Br = (t) => 0.2126 * zn(t[0]) + 0.7152 * zn(t[1]) + 0.0722 * zn(t[2]), ji = (t, e) => {
    const a = Br(t), n = Br(e);
    return (Math.max(a, n) + 0.05) / (Math.min(a, n) + 0.05);
  }, Vi = 0.55, un = ["hs", "xy", "rgb", "rgbw", "rgbww"], Rr = (t) => {
    const e = jt(t), a = un.includes(e.color_mode);
    return (a && e.rgb_color ? e.rgb_color : a && e.hs_color ? Wi(...e.hs_color) : [255, 170, 0]).map((n) => Math.round(Math.max(0, Math.min(255, n))));
  }, zi = { heat: [255, 111, 34], cool: [33, 150, 243], heat_cool: [255, 193, 7], auto: [76, 175, 80], dry: [255, 152, 0], fan_only: [0, 188, 212] };
  function Vo(t) {
    var n;
    const e = t.split(".")[0], a = (n = x[t]) == null ? void 0 : n.state;
    return !a || a === "unavailable" || a === "unknown" ? null : e === "light" ? a === "on" ? Rr(t) : null : e === "climate" ? zi[a] || null : e === "cover" ? a !== "closed" ? [146, 107, 199] : null : e === "lock" ? a !== "locked" ? [244, 67, 54] : null : e === "media_player" ? ["playing", "paused", "on", "buffering"].includes(a) ? [3, 169, 244] : null : e === "humidifier" || e === "valve" ? ["on", "open", "opening", "closing"].includes(a) ? [33, 150, 243] : null : e === "vacuum" ? ["cleaning", "returning"].includes(a) ? [0, 150, 136] : null : e === "alarm_control_panel" ? a !== "disarmed" && a !== "triggered" ? [76, 175, 80] : null : e === "fan" ? a === "on" ? [0, 188, 212] : null : (e === "switch" || e === "input_boolean") && a === "on" ? [255, 193, 7] : null;
  }
  function Gn(t, e, a = !1) {
    const [n, i, d] = t.map((z) => z / 255), l = Math.max(n, i, d), f = Math.min(n, i, d), m = l - f, k = m ? (l === n ? (i - d) / m + (i < d ? 6 : 0) : l === i ? (d - n) / m + 2 : (n - i) / m + 4) * 60 : 0, S = (l + f) / 2, v = m ? m / (1 - Math.abs(2 * S - 1)) : 0, M = m < 0.1 ? Math.min(v, 0.25) : 1, W = (z) => {
      const H = (D) => (D + k / 30) % 12, I = M * Math.min(z, 1 - z);
      return [0, 8, 4].map((D) => Math.round(255 * (z - I * Math.max(-1, Math.min(H(D) - 3, 9 - H(D), 1)))));
    };
    for (let z = 0.5; a ? z < 0.96 : z > 0.04; z += a ? 0.01 : -0.01) {
      const H = W(z);
      if (ji(H, e) >= 3) return "rgb(" + H.join(",") + ")";
    }
    return a ? "#ffffff" : "#26221e";
  }
  const hn = (t) => {
    const e = [1, 3, 5].map((a) => parseInt(t.slice(a, a + 2), 16));
    return Math.max(...e) - Math.min(...e) < 26 ? "" : ";--sum-d:" + Gn(e, [58, 58, 58], !0) + ";--sum-l:" + Gn(e, [230, 230, 230]);
  }, Pr = { d: ["#ffb894", "#d2b4ff", "#9dcbff"], l: ["#f0946a", "#b48ae6", "#6fa8e8"] }, Gi = () => [0, 1, 2].map((t) => "--g" + t + "-d:" + Pr.d[t] + ";--g" + t + "-l:" + Pr.l[t]).join(";"), Ui = '<svg class="tfGradDefs" aria-hidden="true" focusable="false"><defs><linearGradient id="hcClimateGrad" x1="0" y1="0" x2="0" y2="1">' + [0.15, 0.5, 0.85].map((t, e) => '<stop offset="' + t + '" style="stop-color:var(--g' + e + ')"/>').join("") + "</linearGradient></defs></svg>", Qa = (t) => {
    const e = t.map((a) => Math.round(a + (255 - a) * Vi));
    return "--light-soft:rgb(" + e.join(",") + ");--light-ink:" + Gn(t, e);
  }, Yi = (t) => Qa(Rr(t)), mn = (t) => {
    const e = Vo(t);
    return e ? ' data-light style="' + Qa(e) + '"' : "";
  }, Ge = (t) => {
    const e = Ja(t);
    return e.length ? e.some((a) => a !== "onoff") : jt(t).brightness != null;
  }, gn = (t) => [jt(t).min_color_temp_kelvin || 2e3, jt(t).max_color_temp_kelvin || 6500], Sa = (t) => new Date(t).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
  function Co(t) {
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
  const sa = (t) => {
    var e;
    return jt(t).current_position ?? (((e = x[t]) == null ? void 0 : e.state) === "closed" ? 0 : 100);
  }, zo = (t) => {
    var e;
    return Ia("pos", t, ((e = yt.get(t)) == null ? void 0 : e.pos) ?? sa(t));
  }, Hr = (t) => {
    var e;
    return Ia("tilt", t, ((e = yt.get(t)) == null ? void 0 : e.tilt) ?? jt(t).current_tilt_position);
  };
  function Le(t) {
    var l;
    const e = x[t];
    if (!e) return "Not found";
    if (e.state === "unavailable") return "Unavailable";
    const a = e.attributes, n = t.split(".")[0];
    if (n === "light") {
      if (e.state !== "on") return "Off";
      const f = a.color_temp_kelvin;
      return (Ge(t) ? $a(e) + "%" : "On") + (a.color_mode === "color_temp" && f ? " · " + Number(f).toLocaleString() + "k" : un.includes(a.color_mode) ? " · Colour" : "");
    }
    if (n === "climate") return (e.state === "off" ? "Off" : $t(a.hvac_action || e.state)) + " · " + ze(a.current_temperature) + " °C now";
    if (n === "cover") {
      const f = sa(t), m = a.current_tilt_position;
      return e.state === "opening" || e.state === "closing" ? $t(e.state) + " - " + f + "%" : (f <= 0 ? "Closed" : f >= 100 ? "Open" : "Partially open") + (m > 0 && m < 100 ? " · tilted" : "");
    }
    if (n === "humidifier") return e.state !== "on" ? "Off" : $t(a.action || "on") + " · " + a.current_humidity + "% now";
    if (n === "vacuum") return $t(e.state) + (e.state === "cleaning" && ((l = a.rooms) != null && l.length) ? " · " + a.rooms.join(", ") : "") + (a.battery_level != null ? " · " + a.battery_level + "%" : "");
    if (n === "media_player") return e.state === "playing" || e.state === "paused" ? (e.state === "paused" ? "Paused · " : "") + (a.media_title || "Playing") : $t(e.state);
    if (n === "alarm_control_panel") return np[e.state] || $t(e.state);
    if (n === "lock" || n === "valve") return $t(e.state);
    if (n === "switch") return e.state === "on" ? "On" : "Off";
    if (n === "plant") return e.state === "ok" ? "Healthy" : $t(a.problem);
    if (n === "binary_sensor")
      return a.device_class === "battery" ? e.state === "on" ? "Low" : "Normal" : a.device_class === "problem" ? e.state === "on" ? "Problem" : "OK" : a.device_class === "moisture" ? e.state === "on" ? "Wet" : "Dry" : Li.includes(a.device_class) ? e.state === "on" ? "Open" : "Closed" : e.state === "on" ? "Detected" : "Clear";
    if (a.rang) return "Rang at " + Sa(a.rang);
    const i = c();
    if (i != null && i.formatEntityState && !Ra(t))
      try {
        return i.formatEntityState(e);
      } catch {
      }
    const d = Number(e.state);
    if (e.state !== "" && Number.isFinite(d)) {
      const f = Math.abs(d) >= 100 ? 0 : Math.abs(d) >= 10 ? 1 : 2, m = a.unit_of_measurement ? a.unit_of_measurement === "%" ? "%" : " " + a.unit_of_measurement : "";
      return d.toLocaleString(void 0, { maximumFractionDigits: f }) + m + (a.plant_low ? " · Low" : a.plant_high ? " · High" : "");
    }
    return $t(e.state);
  }
  const _o = (t) => t >= 1e3 ? ze(t / 1e3, 2) + " kW" : Math.round(t).toLocaleString() + " W";
  function Aa(t) {
    var a, n;
    const e = c();
    t.querySelectorAll("[data-icon-for]").forEach((i) => {
      var f;
      const d = x[i.dataset.iconFor], l = i.dataset.iconName || "";
      if (customElements.get("ha-state-icon") && d && !l) {
        let m = i.firstElementChild;
        (!m || m.localName !== "ha-state-icon") && (i.textContent = "", m = document.createElement("ha-state-icon"), i.appendChild(m)), m.hass = e, m.stateObj = d;
      } else if (customElements.get("ha-icon")) {
        let m = i.firstElementChild;
        (!m || m.localName !== "ha-icon") && (i.textContent = "", m = document.createElement("ha-icon"), i.appendChild(m)), m.icon = l || ((f = d == null ? void 0 : d.attributes) == null ? void 0 : f.icon) || "mdi:circle-medium";
      } else i.textContent || (i.textContent = (i.dataset.letter || xt(i.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    }), (a = t.querySelectorAll) == null || a.call(t, ".tfIcon").forEach(Or), (n = t.classList) != null && n.contains("tfIcon") && Or(t), Un();
  }
  const Nr = /* @__PURE__ */ new Map();
  function Or(t) {
    var d, l, f;
    const e = (((d = t.closest("[data-k]")) == null ? void 0 : d.dataset.k) || "") + "|" + (t.dataset.iconFor || ((l = t.querySelector("[data-icon-for]")) == null ? void 0 : l.dataset.iconFor) || t.getAttribute("aria-label") || ""), a = getComputedStyle(t), n = { backgroundColor: a.backgroundColor, color: a.color }, i = Nr.get(e);
    Nr.set(e, n), !(!i || i.backgroundColor === n.backgroundColor && i.color === n.color || (f = window.matchMedia) != null && f.call(window, "(prefers-reduced-motion: reduce)").matches) && t.animate([i, n], { duration: ke.warp.cdur, delay: ke.warp.cdelay, easing: Se[ke.warp.ease], fill: "backwards" });
  }
  const Zi = "[data-icon-for]>:is(ha-state-icon,ha-icon),.tfIcon>svg", Ki = (t) => {
    const e = [t];
    for (; e.length; ) {
      const a = e.shift();
      if (a.localName === "svg") return a;
      a.shadowRoot && e.push(...a.shadowRoot.children), e.push(...a.children);
    }
    return null;
  };
  function Xi(t) {
    var W, z, H;
    const e = t.localName === "svg" ? t : Ki(t), a = e ? [...e.querySelectorAll("path,rect,circle,ellipse,polygon,polyline,line")] : [];
    if (!a.length) return !e;
    const n = (W = t.closest(".tfIcon")) == null ? void 0 : W.offsetWidth;
    if (n === void 0) return !0;
    if (!n) return !1;
    const i = n + "|" + a.map((I) => I.getAttribute("d") || I.localName).join("|");
    if (t.dataset.fitted === i) return !0;
    let d = 1 / 0, l = 1 / 0, f = -1 / 0, m = -1 / 0;
    for (const I of a) {
      const D = I.getBBox(), Q = getComputedStyle(I), L = Q.stroke !== "none" ? (parseFloat(Q.strokeWidth) || 0) / 2 : 0;
      !D.width && !D.height || (d = Math.min(d, D.x - L), l = Math.min(l, D.y - L), f = Math.max(f, D.x + D.width + L), m = Math.max(m, D.y + D.height + L));
    }
    if (!(f > d)) return !1;
    const k = (H = (z = e.viewBox) == null ? void 0 : z.baseVal) != null && H.width ? e.viewBox.baseVal : { x: 0, y: 0, width: 24, height: 24 }, S = n > 40 ? n * (26 / 40) : n - 14, v = S * k.width / Math.max(f - d, m - l), M = v / k.width;
    return t.localName === "svg" ? (t.style.width = v + "px", t.style.height = v + "px") : t.style.setProperty("--mdc-icon-size", v + "px"), e.style.translate = ((k.x + k.width / 2 - (d + f) / 2) * M).toFixed(2) + "px " + ((k.y + k.height / 2 - (l + m) / 2) * M).toFixed(2) + "px", t.dataset.fitted = i, !0;
  }
  let bn = 0;
  function Ir(t = 0) {
    clearTimeout(bn), [...o.querySelectorAll(Zi)].filter((a) => !Xi(a)).length && t < 5 && (bn = setTimeout(() => Ir(t + 1), 300));
  }
  function Un() {
    clearTimeout(bn), bn = setTimeout(() => Ir(), 60);
  }
  const Go = (t) => {
    var e, a, n;
    return t.startsWith("light.") && x[t] && !jt(t).icon && !((n = (a = (e = c()) == null ? void 0 : e.entities) == null ? void 0 : a[t]) != null && n.icon) ? "mdi:lightbulb" : "";
  }, ge = (t, e, a) => (e = e || Go(t), ' data-icon-for="' + q(t) + '"' + (e ? ' data-icon-name="' + q(e) + '"' : "") + (a ? ' data-letter="' + q(a) + '"' : "")), la = (t) => t.endsWith("_solar_power") ? "mdi:solar-power-variant" : jt(t).rang ? "mdi:doorbell" : "", Jt = (t, e, a, n) => q([t, e, a, n ? JSON.stringify(n) : ""].join("|")), To = (t) => q(JSON.stringify(t));
  function Do(t) {
    const e = q(xt(t) + ", " + Le(t));
    return '<div class="activityRow tap" role="button" tabindex="0" data-more="' + q(t) + '" aria-label="' + e + '. More info"><div class="tfIcon" aria-hidden="true"' + ge(t, la(t)) + '></div><div><div class="activityRowName">' + q(xt(t)) + '</div><div class="activityRowMeta">' + q(Le(t)) + "</div></div></div>";
  }
  const Yn = (t, e, a) => '<div class="activityRow" aria-label="' + q(t + ", " + e) + '"><div class="tfIcon" aria-hidden="true"' + ge("", a, t) + '></div><div><div class="activityRowName">' + q(t) + '</div><div class="activityRowMeta">' + q(e) + "</div></div></div>";
  function to(t, e, a, n, i = "", d = null, l = "") {
    return '<section class="card tfCard' + (l ? " " + l : "") + '" data-tf data-k="' + q(t) + '" style="order:' + e + '" aria-label="' + q(a) + '"><div class="activityHeader">' + (d ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + q(d) + '" aria-label="' + q(a + (x[d] ? ", " + Le(d) : "") + ". More info") + '">' + q(a) + "</button>" : '<div class="activityTitle">' + q(a) + "</div>") + '</div><div class="activityRows">' + n.join("") + "</div>" + i + "</section>";
  }
  function Fr(t, e) {
    const a = "readings:" + t.id, n = t.readings.map((i) => Do(i));
    return t.power != null && n.push(Yn("Power now", _o(t.power), "mdi:flash")), to(a, e, "Readings", n);
  }
  function Lo(t, e) {
    var f;
    const a = "energy:" + t.id, [n, i] = [t.solar.find((m) => m.endsWith("_power")), t.solar.find((m) => m.endsWith("_today"))], d = [n, i].filter(Boolean).map((m) => Do(m)), l = Number(((f = x[n]) == null ? void 0 : f.state) || 0) * 1e3;
    return Ft.grid && (d.push(Do(Ft.grid)), d.push(Yn("House use", _o(l + Number(x[Ft.grid].state)), "mdi:home-lightning-bolt"))), to(a, e, "Energy", d, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const qr = (t, e) => to("plant:" + t.id, e, xt(t.id), t.readings.map((a) => Do(a)), "", t.id);
  function Uo(t, e, a, n, i, d, l = null) {
    const f = a == null ? null : Math.max(0, Math.min(1, a)), m = f == null ? 0 : Math.round(f * 100);
    return '<div class="tfBar ' + t + '" role="slider" tabindex="0" aria-label="' + q(n) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + m + '"' + (i ? ' aria-valuetext="' + q(i) + '"' : "") + ' data-drag="' + q(t + "|" + e) + '">' + (l != null ? '<span class="was" aria-hidden="true" style="left:' + l + '%"></span>' : "") + (d ? f == null ? "" : '<b style="left:' + m + '%"></b>' : '<i style="width:' + m + '%"></i>') + "</div>";
  }
  const Yo = "homecore-house-last-bright", ta = (() => {
    try {
      return JSON.parse(Ua.get(Yo)) || {};
    } catch {
      return {};
    }
  })();
  let Zo = 0;
  const Oa = (t, e) => {
    !e || ta[t] === e || (ta[t] = e, clearTimeout(Zo), Zo = setTimeout(() => Ua.set(Yo, JSON.stringify(ta)), 500));
  }, wn = (t, e, a, n) => '<div class="tfStep" role="group" aria-label="' + q(t) + '"><button type="button" data-act="' + a + '" aria-label="Lower ' + q(t.toLowerCase()) + '">' + Vd.down + "</button><output>" + q(e) + '</output><button type="button" data-act="' + n + '" aria-label="Raise ' + q(t.toLowerCase()) + '">' + Vd.up + "</button></div>", ua = (t, e, a) => '<div class="' + t + '" role="group" aria-label="' + q(e) + '">' + a.filter(Boolean).map((n) => '<button type="button" data-act="' + n.act + '"' + (n.pressed != null ? ' aria-pressed="' + n.pressed + '"' : "") + (n.disabled ? " disabled" : "") + (n.aria ? ' aria-label="' + q(n.aria) + '"' : "") + ">" + (n.html || q(n.label)) + "</button>").join("") + "</div>", Wr = (t, e) => "width:" + Math.round(Math.max(0, Math.min(1, (t - e * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * e / 3).toFixed(2), jr = (t) => "left:calc(4px + " + t / 100 + " * (100% - 8px))", Ee = (t, e) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + q(xt(t)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(e) + '" aria-valuetext="' + Math.round(e) + '% open" data-blocks="' + q(t) + '">' + [0, 1, 2, 3].map((a) => '<span><i style="' + Wr(e, a) + '"></i><b' + (e >= (a + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (a + 1) * 25 + "<small>%</small></b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + jr(e) + '">' + Math.round(e) + "%</output></div>";
  function Ko(t, e) {
    t.querySelectorAll(":scope>span").forEach((n, i) => {
      n.firstElementChild.setAttribute("style", Wr(e, i)), n.lastElementChild.classList.toggle("lit", e >= (i + 1) * 25 - 12);
    });
    const a = t.querySelector(".tfTip");
    a.setAttribute("style", jr(e)), a.textContent = Math.round(e) + "%", t.setAttribute("aria-valuenow", String(Math.round(e))), t.setAttribute("aria-valuetext", Math.round(e) + "% open");
  }
  const Vr = (t, e) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + q(xt(t)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(e) + '" aria-valuetext="' + Math.round(e) + '% open" data-drag="tilt|' + q(t) + '"><i style="width:calc((100% - 8px) * ' + e / 100 + ')"></i><span' + (e > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (e > 92 ? ' class="lit"' : "") + ">Open</span></div>", Zn = (t, e, a) => '<div class="tfSeg tfCoverBtns" role="group" aria-label="' + q(xt(t)) + '">' + [
    Ae(t, o0) && ["open", "Open", "open_cover", e >= 100 && !a],
    Ae(t, r0) && ["stop", "Stop", "stop_cover", !1],
    Ae(t, n0) && ["close", "Close", "close_cover", e <= 0 && !a]
  ].filter(Boolean).map(([n, i, d, l]) => '<button type="button" data-act="' + Jt("cover", d, t) + '" aria-label="' + i + '"' + (l ? " disabled" : "") + ">" + i0[n] + "</button>").join("") + "</div>", eo = (t, e) => '<button class="tfIcon' + (e.art ? " art" : "") + '" type="button" data-act="' + e.button.act + '" aria-label="' + q(e.button.label) + '"' + (e.art ? ' style="background-image:url(&quot;' + q(e.art) + '&quot;)"' : ge(t, e.icon)) + "></button>", zr = (t) => '<button class="tfName" type="button" data-more="' + q(t) + '" aria-label="' + q(xt(t) + ", " + Le(t) + ". More info") + '"><span class="activityRowName">' + q(xt(t)) + '</span><span class="activityRowMeta">' + q(Le(t)) + "</span></button>";
  function Kn(t, e = !1, a = null) {
    const n = da(t), i = t.startsWith("light.") && xn(t) && !(a && ar(t) < 3), d = a || (e && t.startsWith("light.") ? ["bright"] : null), l = i ? ['<div class="tfDacPad" data-dac="' + (e ? "more:" : a ? "dash:" : "tile:") + q(t) + '"></div>'] : n.sections.map((f, m) => f && (!d || d.includes((n.parts || [])[m])) ? f : "").filter(Boolean);
    return '<div class="tfAction' + (i ? " tfDac" : "") + (n.on ? " on" : "") + (!i && !l.length ? " tfHeadOnly" : "") + '" data-k="' + q(t) + '"' + (n.tone ? ' data-tone="' + n.tone + '"' : "") + mn(t) + '><div class="tfActionHead">' + eo(t, n) + zr(t) + "</div>" + l.join("") + "</div>";
  }
  const ca = "dual-controller-v3", Gr = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.5/dist/dual-axis-controller-v4.js";
  let Eo = null;
  async function vn() {
    if (Eo || customElements.get(ca)) return;
    Eo = "loading";
    const t = await Promise.resolve().then(() => _({ type: "lovelace/resources" })).catch(() => null), e = Array.isArray(t) && t.some((n) => /dual-axis-controller/i.test(n.url || ""));
    if (await Promise.race([customElements.whenDefined(ca), new Promise((n) => setTimeout(n, e ? 8e3 : 0))]), customElements.get(ca)) return;
    const a = Object.assign(document.createElement("script"), { src: Gr });
    a.onerror = () => {
      Eo = "failed", j();
    }, document.head.appendChild(a);
  }
  const Oe = /* @__PURE__ */ new Map(), ha = (t) => (Vt.lightStyles[t] || Vt.lights) === "dac", yn = () => Vt.lights === "dac" || Object.values(Vt.lightStyles).includes("dac");
  function xn(t) {
    return ha(t) && !!customElements.get(ca);
  }
  const Ur = (t) => Vt.lightPads[t] || Vt.dacPad, Xo = () => {
    const t = c();
    return t && {
      ...t,
      themes: { ...t.themes || {}, darkMode: !g.classList.contains("light") },
      callService: (e, a, n, ...i) => t.callService(e, ...zc(e, a, n), ...i)
    };
  }, Yr = "ha-card,.hc.hcTile{padding:0!important;border:0!important;border-radius:0!important;background:none!important;box-shadow:none!important}.hcTileHead{display:none!important}.hc--dark{--hc-text:var(--color-text-primary,#f1f1f1)}.halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,198px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}", $i = (t) => {
    !t.shadowRoot || t.shadowRoot.querySelector("style[data-tf]") || (t.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: Yr })).dataset.tf = "");
  }, ma = /* @__PURE__ */ new Map(), Ca = new ResizeObserver((t) => t.forEach(({ target: e }) => {
    const a = e.parentElement;
    !a || !e.offsetHeight || (a.style.removeProperty("min-height"), ma.set(a.dataset.dac, a.offsetHeight));
  }));
  function ao(t) {
    t.querySelectorAll("[data-dac]").forEach((e) => {
      const a = e.dataset.dac;
      let n = Oe.get(a);
      if (!n) {
        const i = a.slice(a.indexOf(":") + 1);
        n = document.createElement(ca), n.setConfig({ type: "custom:" + ca, entity: i, pad: Ur(i), tap_action: { action: "none" } }), Oe.set(a, n);
      }
      n.hass = Xo(), n.parentNode !== e && e.replaceChildren(n), !n.offsetHeight && ma.has(a) && (e.style.minHeight = ma.get(a) + "px"), Ca.observe(n), $i(n);
    });
  }
  function Zr() {
    const t = Xo();
    Oe.forEach((e, a) => {
      e.isConnected ? e.hass = t : Oe.delete(a);
    });
  }
  customElements.whenDefined(ca).then(() => {
    w && (E != null && E.querySelector("[data-tf]")) && Tc(uo);
  });
  const Ia = (t, e, a) => rt.has(t + "|" + e) ? rt.get(t + "|" + e) : a;
  function da(t) {
    var d;
    const e = x[t], a = e.attributes, n = t.split(".")[0], i = (l, f) => ({ act: Jt(l, "toggle", t), label: f });
    if (n === "light") {
      const l = e.state === "on", f = Ja(t), [m, k] = gn(t), S = Ia("bright", t, $a(e));
      l && Oa(t, $a(e));
      const v = Ia("ct", t, l && a.color_mode === "color_temp" ? a.color_temp_kelvin : null), M = Ia("hue", t, l && un.includes(a.color_mode) && a.hs_color ? a.hs_color[0] : null);
      return { on: l, button: i("light", "Turn " + xt(t) + (l ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        Ge(t) && Uo("bright", t, S / 100, xt(t) + " brightness", S + "%", !1, l ? null : ta[t] ?? null),
        f.includes("color_temp") && Uo("ct", t, v == null ? null : (v - m) / (k - m), xt(t) + " warm to cool", v == null ? "" : Math.round(v) + " kelvin", !0),
        f.some((W) => un.includes(W)) && Uo("hue", t, M == null ? null : M / 360, xt(t) + " colour", "", !0)
      ] };
    }
    if (n === "climate") {
      const l = a.target_temp_step || 0.5, f = Number(a.temperature);
      return { on: e.state !== "off", tone: e.state === "cool" || a.hvac_action === "cooling" ? "cool" : "heat", button: i("climate", "Turn " + xt(t) + (e.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(f) && wn("Target temperature", ze(f) + " °C", Jt("climate", "set_temperature", t, { temperature: f - l }), Jt("climate", "set_temperature", t, { temperature: f + l })),
        ua("tfSeg", "Mode", (a.hvac_modes || []).map((m) => ({ label: $t(m), act: Jt("climate", "set_hvac_mode", t, { hvac_mode: m }), pressed: e.state === m })))
      ] };
    }
    if (n === "cover") {
      const l = e.state === "opening" || e.state === "closing", f = e.state === "closed", m = zo(t), k = Hr(t);
      return { on: !f, tone: "blue", icon: Kd[vl(e)][f ? 1 : 0], button: i("cover", (f ? "Open " : "Close ") + xt(t)), parts: ["blocks", "tilt", "buttons"], sections: [
        Ae(t, Zd) && Ee(t, m),
        k != null && Vr(t, k),
        Zn(t, m, l)
      ] };
    }
    if (n === "humidifier") {
      const l = Number(a.humidity);
      return { on: e.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: i("humidifier", "Turn " + xt(t) + (e.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(l) && wn("Target humidity", l + "%", Jt("humidifier", "set_humidity", t, { humidity: l - 1 }), Jt("humidifier", "set_humidity", t, { humidity: l + 1 })),
        ((d = a.available_modes) == null ? void 0 : d.length) && ua("tfSeg", "Mode", a.available_modes.map((f) => ({ label: $t(f), act: Jt("humidifier", "set_mode", t, { mode: f }), pressed: a.mode === f })))
      ] };
    }
    if (n === "media_player") {
      const l = e.state === "playing", f = e.state === "off" || e.state === "standby", m = Ia("vol", t, a.volume_level), k = f ? { act: Jt("media_player", Ae(t, e0) ? "turn_on" : "toggle", t), label: "Turn " + xt(t) + " on" } : e.state === "playing" || e.state === "paused" ? { act: Jt("media_player", "media_play_pause", t), label: (l ? "Pause " : "Play ") + xt(t) } : { act: Jt("media_player", Ae(t, a0) ? "turn_off" : "toggle", t), label: "Turn " + xt(t) + " off" };
      return { on: !f, tone: "blue", art: !f && a.entity_picture ? a.entity_picture : null, button: k, parts: ["playback", "volume"], sections: f ? [] : [
        (Ae(t, Gd) || Ae(t, Ud) || Ae(t, zd) || Ae(t, Yd)) && ua("tfSeg", "Playback", [
          { html: Ci.prev, aria: "Previous", act: Jt("media_player", "media_previous_track", t), disabled: !Ae(t, Gd) },
          { html: l ? Ci.pause : Ci.play, aria: l ? "Pause" : "Play", act: Jt("media_player", "media_play_pause", t), disabled: !(Ae(t, zd) || Ae(t, Yd)) },
          { html: Ci.next, aria: "Next", act: Jt("media_player", "media_next_track", t), disabled: !Ae(t, Ud) }
        ]),
        Ae(t, t0) && m != null && Uo("vol", t, m, xt(t) + " volume", Math.round(m * 100) + "%")
      ] };
    }
    if (n === "vacuum") {
      const l = e.state === "cleaning", f = a.rooms || [], m = (S) => f.includes(S) ? f.filter((v) => v !== S) : f.concat(S), k = Jt("vacuum", l ? "pause" : "start", t, Ra(t) ? { rooms: f } : null);
      return { on: l || e.state === "returning", tone: "blue", button: { act: k, label: (l ? "Pause " : "Start ") + xt(t) }, parts: ["controls", "rooms"], sections: [
        ua("tfSeg", xt(t), [
          { label: l ? "Pause" : "Start", act: k },
          { label: "Dock", act: Jt("vacuum", "return_to_base", t), disabled: e.state === "docked" },
          { label: "Locate", act: Jt("vacuum", "locate", t) }
        ]),
        Ra(t) && ua("tfChips", "Rooms to clean", Ft.rooms.filter((S) => S.id !== "balcony").map((S) => ({ label: S.name, act: Jt("vacuum", "set_rooms", t, { rooms: m(S.name) }), pressed: f.includes(S.name) })))
      ] };
    }
    if (n === "lock") {
      const l = e.state === "locked";
      return { on: !l, tone: "heat", button: { act: Jt("lock", l ? "unlock" : "lock", t), label: (l ? "Unlock " : "Lock ") + xt(t) }, parts: ["controls"], sections: [
        ua("tfSeg", xt(t), [
          { label: "Lock", act: Jt("lock", "lock", t), pressed: l },
          { label: "Unlock", act: Jt("lock", "unlock", t), pressed: e.state === "unlocked" },
          Ae(t, b0) && { label: "Open", act: Jt("lock", "open", t), pressed: e.state === "open" }
        ])
      ] };
    }
    if (n === "alarm_control_panel") {
      const l = e.state === "disarmed";
      return { on: !l, tone: e.state === "triggered" ? "alarm" : "blue", button: { act: Jt("alarm_control_panel", l ? "alarm_arm_away" : "alarm_disarm", t), label: l ? "Arm " + xt(t) + ", away" : "Disarm " + xt(t) }, parts: ["controls"], sections: [
        ua("tfSeg", xt(t), w0.filter(([, , , f]) => !f || Ae(t, f)).map(([f, m, k]) => ({ label: m, act: Jt("alarm_control_panel", k, t), pressed: e.state === f })))
      ] };
    }
    if (n === "valve") {
      const l = e.state === "open";
      return { on: l, tone: "blue", icon: "mdi:sprinkler-variant", button: i("valve", (l ? "Close " : "Open ") + xt(t)), parts: ["controls"], sections: [
        ua("tfSeg", xt(t), [
          { label: "Open", act: Jt("valve", "open_valve", t), pressed: l },
          { label: "Close", act: Jt("valve", "close_valve", t), pressed: !l }
        ])
      ] };
    }
    if (yl.includes(n)) {
      const l = e.state === "on";
      return { on: l, button: i(n, "Turn " + xt(t) + (l ? " off" : " on")), parts: [], sections: [] };
    }
    return { on: !1, button: { act: "", label: xt(t) }, sections: [] };
  }
  const ga = (t) => (Number.isInteger(Number(t)) ? String(Number(t)) : ze(t)) + "°";
  function Bo(t) {
    var I;
    const e = (D) => t.readings.find((Q) => jt(Q).device_class === D), a = e("temperature"), n = e("humidity"), i = (D) => {
      var Q;
      return Number((Q = x[D]) == null ? void 0 : Q.state);
    }, d = (D) => t.actions.filter((Q) => D.test(Q)), l = t.lights.filter((D) => {
      var Q;
      return ((Q = x[D]) == null ? void 0 : Q.state) === "on";
    }), f = d(/^cover\./), m = f.filter((D) => {
      var Q;
      return ((Q = x[D]) == null ? void 0 : Q.state) !== "closed";
    }), k = [...new Set(f.map((D) => vl(x[D])))], S = d(/^climate\./)[0], v = d(/^humidifier\./)[0], M = d(/^media_player\./), W = M.find((D) => {
      var Q;
      return ((Q = x[D]) == null ? void 0 : Q.state) === "playing";
    }) || M.find((D) => {
      var Q;
      return ((Q = x[D]) == null ? void 0 : Q.state) === "paused";
    }), z = t.plugs.filter((D) => {
      var Q;
      return ((Q = x[D]) == null ? void 0 : Q.state) === "on";
    }), H = [];
    if (a && Number.isFinite(i(a)) && H.push({ key: "temp", id: a, kind: "reading", icon: Ya(a), label: "Temperature", value: ze(i(a)) + "°" }), n && Number.isFinite(i(n)) && H.push({ key: "hum", id: n, kind: "reading", icon: Ya(n), label: "Humidity", value: Math.round(i(n)) + "%" }), t.lights.length && H.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: Ya("", "mdi:lightbulb"),
      label: "Lights",
      value: l.length ? l.length + " of " + t.lights.length + " on" : "All off",
      short: l.length ? l.length + " on" : "Off",
      on: l.length > 0,
      light: l.length ? Yi(l[0]) : "",
      acts: t.lights.map((D) => ["light", l.length ? "turn_off" : "turn_on", D]),
      aria: (l.length ? "Turn off" : "Turn on") + " the lights in " + t.name
    }), f.length) {
      const D = k.length === 1 ? s0[k[0]] : "covers", Q = Math.round(f.reduce((L, kt) => L + sa(kt), 0) / f.length);
      H.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        light: m.length ? Qa([146, 107, 199]) : "",
        icon: Ya("", ((I = Kd[k[0]]) == null ? void 0 : I[m.length ? 0 : 1]) || "mdi:window-shutter"),
        label: $t(D),
        value: Q <= 0 ? "Closed" : Q >= 100 ? "Open" : Q + "% open",
        short: Q <= 0 ? "Closed" : Q + "%",
        on: m.length > 0,
        acts: f.map((L) => ["cover", m.length ? "close_cover" : "open_cover", L]),
        aria: (m.length ? "Close the " : "Open the ") + D + " in " + t.name
      });
    }
    if (S) {
      const D = jt(S), Q = x[S].state === "off";
      H.push({
        key: "climate",
        kind: "control",
        tone: D.hvac_action === "cooling" ? "cool" : "heat",
        light: Vo(S) ? Qa(Vo(S)) : "",
        icon: Ya(S),
        label: xt(S),
        value: Q ? "Off" : $t(D.hvac_action || x[S].state) + " · " + ga(D.temperature),
        short: Q ? "Off" : ga(D.temperature),
        on: !Q,
        acts: [["climate", "toggle", S]],
        aria: "Turn " + xt(S) + (Q ? " on" : " off")
      });
    }
    if (v) {
      const D = x[v].state === "on";
      H.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        light: D ? Qa([33, 150, 243]) : "",
        icon: Ya("", "mdi:air-humidifier"),
        label: xt(v),
        value: D ? "On · " + jt(v).humidity + "%" : "Off",
        short: D ? jt(v).humidity + "%" : "Off",
        on: D,
        acts: [["humidifier", "toggle", v]],
        aria: "Turn " + xt(v) + (D ? " off" : " on")
      });
    }
    if (M.length) {
      const D = W || M[0], Q = x[D], L = Q.state === "playing";
      H.push({
        key: "media",
        kind: "control",
        tone: "blue",
        light: Vo(D) ? Qa(Vo(D)) : "",
        icon: Ya(D),
        label: xt(D),
        value: Le(D),
        short: L ? "Playing" : Q.state === "paused" ? "Paused" : $t(Q.state),
        on: L,
        acts: [["media_player", Q.state === "playing" || Q.state === "paused" ? "media_play_pause" : "toggle", D]],
        aria: (L ? "Pause " : "Play ") + xt(D)
      });
    }
    return t.plugs.length && H.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      light: z.length ? Qa([255, 193, 7]) : "",
      icon: Ya("", "mdi:power-plug"),
      label: "Plugs",
      value: z.length ? z.length + " of " + t.plugs.length + " on" : "All off",
      short: z.length ? z.length + " on" : "Off",
      on: z.length > 0,
      acts: t.plugs.map((D) => ["switch", z.length ? "turn_off" : "turn_on", D]),
      aria: (z.length ? "Turn off" : "Turn on") + " the plugs in " + t.name
    }), t.alerts.forEach((D) => H.push(jt(D).device_class === "moisture" ? { key: "alert:" + D, kind: "alert", icon: Ya(D), label: "Water leak" } : { key: "note:" + D, kind: "note", icon: Ya(D), label: xt(D) + " " + Le(D).toLowerCase() })), H;
  }
  const kn = (t, e) => {
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
          return ((d = x[i]) == null ? void 0 : d.state) === "playing";
        }) || n.find((i) => {
          var d;
          return ((d = x[i]) == null ? void 0 : d.state) === "paused";
        }) || n[0]].filter(Boolean);
      })()
    }[e] || [];
  }, Ji = (t, e, a) => '<button class="' + e + (t.on ? " on" : "") + '" type="button" data-tone="' + t.tone + '" data-acts="' + To(t.acts) + '" aria-label="' + q(t.aria) + '" aria-pressed="' + t.on + '">' + a + "</button>", Qi = (t) => '<button class="tfAName" type="button" data-go="' + q(t.id) + '" aria-label="Open ' + q(t.name) + '">' + q(t.name) + "</button>";
  function oo(t, e, a = !1) {
    const n = e.find((f) => f.key === "lights"), i = !!(n != null && n.on), d = "", l = '<span class="tfAreaGlyph"' + ge("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span>";
    return a || !n ? '<span class="tfIcon tfAreaIcon' + (i ? " on" : "") + '"' + d + ' aria-hidden="true">' + l + "</span>" : '<button class="tfIcon tfAreaIcon' + (i ? " on" : "") + '" type="button"' + d + ' data-acts="' + To(n.acts) + '" aria-label="' + q(n.aria) + '" aria-pressed="' + i + '">' + l + "</button>";
  }
  const Kr = (t) => t.filter((e) => e.kind === "alert" || e.kind === "note").map((e) => '<span class="sourceTag">' + q(e.label) + "</span>").join(" "), _e = (t) => t.readings.find((e) => jt(e).device_class === "temperature") || [...t.readings, ...t.solar, ...t.openings, ...t.actions, ...t.plugs].find((e) => x[e]) || null, Xn = (t, e) => {
    const a = xt(e);
    return a.toLowerCase().startsWith(t.name.toLowerCase() + " ") ? $t(a.slice(t.name.length + 1)) : a;
  };
  function $n(t) {
    const e = x[t], a = jt(t), n = t.split(".")[0], i = Number(e.state);
    if (e.state === "unavailable") return { text: "Unavailable" };
    if (n === "sensor" && Number.isFinite(i)) {
      if (a.device_class === "temperature") return { text: ga(i) };
      const d = a.unit_of_measurement || "";
      return d === "%" ? { text: Math.round(i) + "%" } : { text: ze(i, Number.isInteger(i) ? 0 : 1), unit: d };
    }
    if (n === "climate" && (a.current_temperature ?? a.temperature) != null) return { text: ga(a.current_temperature ?? a.temperature) };
    if (n === "light") return { text: e.state !== "on" ? "Off" : Ge(t) ? $a(e) + "%" : "On" };
    if (n === "cover") {
      const d = sa(t);
      return { text: d <= 0 ? "Closed" : d >= 100 ? "Open" : d + "%" };
    }
    return n === "humidifier" ? { text: e.state === "on" ? a.humidity + "%" : "Off" } : n === "media_player" ? { text: e.state === "playing" ? "Playing" : e.state === "paused" ? "Paused" : $t(e.state) } : { text: Le(t) };
  }
  const Jn = (t, e, a) => {
    const n = a.find((f) => f.key === "temp"), i = a.find((f) => f.key === "hum"), d = jt(e), l = x[e].state === "off";
    return e.startsWith("climate.") ? [Xn(t, e), l ? "Off" : $t(d.hvac_action || x[e].state) + (d.temperature != null ? " · " + ga(d.temperature) : ""), i && i.value + " humidity"].filter(Boolean).join(" · ") : [!(n && n.id === e) && Xn(t, e), n && n.id !== e && n.value, i && i.id !== e && i.value + " humidity"].filter(Boolean).join(" · ");
  };
  function Xr(t, e, a) {
    const n = a && $n(a), i = a ? Jn(t, a, e) : "", d = (m) => {
      const k = kn(t, m.key);
      return k.length === 1 ? k[0] : "group:" + t.id + ":" + m.key;
    }, l = e.filter((m) => m.kind === "control").slice(0, 4).map((m) => '<div class="tfATile' + (m.on ? " on" : "") + '" data-tone="' + m.tone + '"' + (m.light ? ' data-light style="' + m.light + '"' : "") + ">" + Ji(m, "tfIcon", m.icon) + '<button class="tfName" type="button" data-more="' + q(d(m)) + '" aria-label="' + q(t.name + " " + m.label.toLowerCase() + ", " + m.value + ". Open") + '"><span class="activityRowName">' + q(m.label) + '</span><span class="activityRowMeta">' + q(m.value) + "</span></button></div>"), f = Kr(e);
    return '<div class="hcAreaPanelTop">' + oo(t, e) + '<div class="tfATitle">' + Qi(t) + "</div>" + (f ? '<div class="tfATags">' + f + "</div>" : "") + "</div>" + (a ? '<button class="tfABig" type="button" data-more="' + q(a) + '" aria-label="' + q(xt(a) + ", " + Le(a) + ". More info") + '"><span class="tfABigMain' + (n.text.length > 7 ? " long" : "") + '">' + q(n.text) + (n.unit ? '<span class="tfABigUnit">' + q(n.unit) + "</span>" : "") + "</span>" + (i ? '<span class="tfABigSub">' + q(i) + "</span>" : "") + "</button>" : "") + (l.length ? '<div class="tfATiles">' + l.join("") + "</div>" : "");
  }
  function s(t) {
    const e = t.id === O, a = Bo(t), n = _e(t), i = n && $n(n), d = [...a.filter((l) => l.kind === "control"), ...a.filter((l) => l.kind !== "control" && l.kind !== "reading")].slice(0, 4);
    return '<article class="hcAreaPanel tfAreaPanel' + (e ? " active" : "") + '" data-area="' + q(t.id) + '" tabindex="0" aria-expanded="' + e + '" aria-label="' + q(t.name) + '"><div class="panelExpanded"' + (e ? "" : " inert") + ">" + Xr(t, a, n) + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop">' + oo(t, a, !0) + '<span class="tfACName">' + q(t.name) + '</span></div><span class="tfACMain">' + (i ? q(i.text + (i.unit ? " " + i.unit : "")) : "") + '</span><span class="tfACTiles" aria-hidden="true">' + d.map((l) => '<span class="tfACTile"><span class="tfIcon' + (l.kind === "alert" ? " alert" : "") + '"' + (l.on && l.light ? ' data-light style="' + l.light + '"' : "") + ">" + l.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let u = [];
  const h = () => {
    var e;
    const t = new Set(((e = gt.dash) == null ? void 0 : e.areasOff) || []);
    return u.filter((a) => !t.has(a.id));
  }, b = (t) => {
    var a;
    const e = h();
    return e.some((n) => n.id === O) || (O = ((a = e[0]) == null ? void 0 : a.id) || null), '<div class="tfAreas" data-tf data-k="areas" style="order:' + t + '"><section class="hcAreaGallery tfAreaGallery" aria-label="Areas">' + e.map(s).join("") + "</section></div>";
  }, C = (t) => t.startsWith("room:"), B = (t) => u.find((e) => "room:" + e.id === t);
  function F(t, e) {
    const a = Bo(t), n = _e(t), i = n && $n(n), d = n ? Jn(t, n, a) : "", l = i ? i.text + (i.unit ? " " + i.unit : "") : "", f = (M) => {
      const W = kn(t, M.key);
      return W.length === 1 ? W[0] : "group:" + t.id + ":" + M.key;
    }, m = a.filter((M) => M.kind === "control").slice(0, 4), k = (M) => M.on && M.light ? ' data-light style="' + M.light + '"' : "", S = m.map((M) => '<button class="tfIcon' + (M.on ? " on" : "") + '" type="button" data-tone="' + M.tone + '"' + k(M) + ' data-more="' + q(f(M)) + '" aria-label="' + q(M.label + ", " + M.value + ". Open its controls") + '">' + M.icon + "</button>"), v = m.map((M) => '<button class="tfRoomDev" type="button" data-more="' + q(f(M)) + '" aria-label="' + q(M.label + ", " + M.value + ". Open its controls") + '"><span class="tfIcon' + (M.on ? " on" : "") + '" data-tone="' + M.tone + '"' + k(M) + ">" + M.icon + '</span><span class="tfRoomDevName"><span class="activityRowName">' + q(M.label) + '</span><span class="activityRowMeta">' + q(M.value) + "</span></span></button>");
    return '<div class="tfAction tfRoomTile" data-k="' + q(e) + '" data-go="' + q(t.id) + '"><div class="tfActionHead"><span class="tfIcon tfRoomIcon" aria-hidden="true"><span class="tfAreaGlyph"' + ge("area:" + t.id, t.icon || "mdi:texture-box", t.name) + '></span></span><button class="tfName" type="button" data-go="' + q(t.id) + '" aria-label="Open ' + q(t.name) + '"><span class="activityRowName">' + q(t.name) + "</span>" + (l || d ? '<span class="activityRowMeta">' + (l ? '<span class="tfRoomInline">' + q(l) + (d ? " · " : "") + "</span>" : "") + q(d) + "</span>" : "") + "</button></div>" + (l ? '<div class="tfRoomReading" aria-hidden="true"><span class="tfRoomBig">' + q(l) + "</span>" + (d ? '<span class="tfRoomSub">' + q(d) + "</span>" : "") + "</div>" : "") + (S.length ? '<div class="tfRoomDevices">' + S.join("") + '</div><div class="tfRoomHeads">' + v.join("") + "</div>" : "") + "</div>";
  }
  const Y = () => [
    { key: "home", name: "Home", ids: Ft.homeVacuums },
    ...Ft.rooms.map((t) => ({ key: "room:" + t.id, name: t.name, room: t, ids: t.actions }))
  ], P = (t, e, a) => t + " " + (t === 1 ? e : a), U = () => (gt.favourites ?? Ve.favorite_entities ?? []).filter((t) => x[t]);
  function et() {
    if (!So) {
      const e = Object.entries(Ha).sort((n, i) => i[1] - n[1]).map(([n]) => n), a = Ft.rooms.flatMap((n) => n.actions);
      So = [.../* @__PURE__ */ new Set([...Wo, ...e, ...a.filter((n) => da(n).on), ...a])];
    }
    const t = U();
    return So.filter((e) => x[e] && x[e].state !== "unavailable" && !t.includes(e));
  }
  let ut = !1;
  function Et() {
    if (!ut || gt.favSeeded || !Ft.rooms.length || A) return;
    const t = (a) => Object.keys(x).find((n) => Ra(n) && a(n)), e = [t((a) => a.startsWith("climate.")), t((a) => a.startsWith("cover.") && /curtain/.test(a)), t((a) => a.startsWith("valve.")), Ft.security.locks[0]];
    gt = { ...gt, favourites: [.../* @__PURE__ */ new Set([...gt.favourites ?? Ve.favorite_entities ?? [], ...e.filter(Boolean)])], favSeeded: !0 }, Ne();
  }
  const Ct = () => gt.suggest ?? !Ve.hide_suggested_entities;
  function St() {
    const t = new Set(A ? [] : gt.favHidden || []), e = U().filter((n) => !t.has(n)), a = Ct() ? et().filter((n) => !t.has(n) && as(n)) : [];
    return A && !Ts() ? [...e, ...a] : [...e, ...a].slice(0, y0);
  }
  const qt = (t) => {
    const e = U().includes(t);
    return '<button class="tfStar" type="button" data-star="' + q(t) + '" aria-pressed="' + e + '" aria-label="Favourite: ' + q(xt(t)) + '">' + g0(e) + "</button>";
  };
  function Tt(t, { area: e = !1, star: a = !1, plain: n = !1, say: i = null, alert: d = !1 } = {}) {
    var z, H, I, D, Q, L;
    const l = n && ((Q = (z = c()) == null ? void 0 : z.devices) == null ? void 0 : Q[(D = (I = (H = c()) == null ? void 0 : H.entities) == null ? void 0 : I[t]) == null ? void 0 : D.device_id]), f = l && (l.name_by_user || l.name) || xt(t), m = t.split(".")[0], k = !n && kr.includes(m) ? da(t) : null, S = k ? k.on : ["on", "open", "playing"].includes((L = x[t]) == null ? void 0 : L.state), v = n ? null : k ? k.button : yl.includes(m) ? { act: Jt(m, "toggle", t), label: "Turn " + xt(t) + (S ? " off" : " on") } : m === "scene" || m === "script" ? { act: Jt(m, "turn_on", t), label: "Run " + xt(t) } : null, M = (i ?? Le(t)) + (e && _t.get(t) ? " · " + _t.get(t) : ""), W = (k == null ? void 0 : k.icon) || la(t);
    return '<div class="activityRow' + (v ? " tfPlug" : "") + (S ? " on" : "") + (a ? " tfPick" : "") + (d ? " alert" : "") + '" data-k="' + q((e ? "fav:" : "row:") + t) + '" data-tone="' + (m === "light" ? "light" : (k == null ? void 0 : k.tone) || "blue") + '"' + mn(t) + ">" + (v && !a ? '<button class="tfIcon" type="button" data-act="' + v.act + '" aria-label="' + q(v.label) + '"' + ge(t, W) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + ge(t, W) + "></div>") + '<button class="tfName" type="button" data-more="' + q(t) + '" aria-label="' + q(f + ", " + M + ". More info") + '"><span class="activityRowName">' + q(f) + '</span><span class="activityRowMeta">' + q(M) + "</span></button>" + (a ? qt(t) : "") + "</div>";
  }
  const st = () => {
    var t;
    return x[(t = gt.sources) == null ? void 0 : t.weather] ? gt.sources.weather : x["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(x).find((e) => e.startsWith("weather."));
  };
  function Pt() {
    var a;
    const t = (n) => Object.keys(x).filter((i) => i.startsWith("binary_sensor.") && n.includes(jt(i).device_class));
    return ((a = Xa.alert_entities) != null && a.length ? Xa.alert_entities : [...t(["moisture", "smoke", "gas"]).map((n) => ({ entity: n, severity: "alert" })), ...t(Li).map((n) => ({ entity: n, severity: "warning" }))]).filter((n) => x[n.entity]).map((n) => ({ ...n, on: ["on", "open", "unlocked", "triggered", "problem"].includes(x[n.entity].state) }));
  }
  function Ht() {
    const t = Object.keys(xr), e = /* @__PURE__ */ new Set(), a = [];
    (Ve.shortcuts || []).forEach((d) => {
      if (d.type === "summary") {
        if (!t.includes(d.key) || e.has(d.key)) return;
        e.add(d.key);
      }
      a.push(d);
    }), t.forEach((d) => {
      e.has(d) || a.push({ type: "summary", key: d });
    });
    const n = Mt().sumOrder || [], i = (d) => d.type === "summary" && n.includes(d.key) ? n.indexOf(d.key) : n.length;
    return n.length ? a.map((d, l) => [d, l]).sort((d, l) => i(d[0]) - i(l[0]) || d[1] - l[1]).map(([d]) => d) : a;
  }
  function fe() {
    var I;
    const t = ((I = c()) == null ? void 0 : I.entities) || {}, e = (D) => jt(D).device_class, a = Object.keys(x).filter((D) => D.startsWith("sensor.") && e(D) === "battery" || D.startsWith("binary_sensor.") && ["battery", "problem"].includes(e(D))), n = Ft.rooms.flatMap((D) => D.plants.map((Q) => Q.id));
    if (!a.length && !n.length) return null;
    const i = (D) => {
      var L;
      const Q = (L = t[D]) == null ? void 0 : L.device_id;
      return !!Q && Object.keys(x).some((kt) => {
        var Zt;
        return kt.startsWith("binary_sensor.") && ((Zt = t[kt]) == null ? void 0 : Zt.device_id) === Q && e(kt) === "battery_charging" && x[kt].state === "on";
      });
    }, d = (D) => D.startsWith("vacuum.") ? jt(D).battery_level <= 20 && x[D].state !== "docked" : D.startsWith("binary_sensor.") ? e(D) === "battery" && x[D].state === "on" : parseFloat(x[D].state) <= 20 && !i(D), l = [...a, ...Ft.vacuums].filter((D) => x[D] && d(D)), f = [...a.filter((D) => e(D) === "problem" && x[D].state === "on"), ...n.filter((D) => {
      var Q;
      return ((Q = x[D]) == null ? void 0 : Q.state) === "problem";
    })], m = a.filter((D) => x[D].state === "unavailable"), k = [.../* @__PURE__ */ new Set([...l, ...f, ...m])], S = (D) => {
      const Q = parseFloat(x[D].state);
      return e(D) === "battery" && Number.isFinite(Q) ? Q : 101;
    }, v = [...n, ...Ft.vacuums, ...[...a].sort((D, Q) => S(D) - S(Q))].filter((D) => x[D] && !k.includes(D)), M = /* @__PURE__ */ new Map();
    v.forEach((D) => {
      var L;
      const Q = ((L = Ft.areaOf) == null ? void 0 : L.call(Ft, D)) || "";
      M.set(Q, [...M.get(Q) || [], D]);
    });
    const W = (D) => {
      const Q = Ft.rooms.findIndex((L) => L.id === D);
      return D === "" ? 1 / 0 : Q < 0 ? Ft.rooms.length : Q;
    }, z = [...M.keys()].sort((D, Q) => W(D) - W(Q)), H = (D) => {
      var Q, L, kt, Zt;
      return ((Q = Ft.rooms.find((Rt) => Rt.id === D)) == null ? void 0 : Q.name) || ((Zt = (kt = (L = c()) == null ? void 0 : L.areas) == null ? void 0 : kt[D]) == null ? void 0 : Zt.name) || D;
    };
    return {
      value: [l.length && P(l.length, "low battery", "low batteries"), f.length && P(f.length, "problem", "problems"), m.length && P(m.length, "unavailable device", "unavailable devices")].filter(Boolean).join(", ") || "All good",
      plain: !0,
      groups: [{ name: "Needs attention", ids: k, alert: !0 }, ...z.map((D) => ({ name: D ? H(D) : z.length > 1 ? "Other devices" : "Devices", ids: M.get(D) }))].filter((D) => D.ids.length)
    };
  }
  const Mt = () => A ? gt.home || {} : gt, ae = (t) => Xd.includes(t) ? (Mt().shownSums || []).includes(t) : !(Mt().hiddenSums || []).includes(t);
  function re(t, e, a) {
    const n = t.flatMap((M) => a(M, /^cover\./)), i = n.filter((M) => {
      var W;
      return ["open", "opening"].includes((W = x[M]) == null ? void 0 : W.state);
    }).length, d = Object.keys(x).filter((M) => M.startsWith("person.")), l = d.filter((M) => {
      var W;
      return ((W = x[M]) == null ? void 0 : W.state) === "home";
    }).length, f = Ft.security.openings.filter((M) => x[M]), m = f.filter((M) => x[M].state === "on").length, k = Object.keys(x).filter((M) => M.startsWith("binary_sensor.") && jt(M).device_class === "moisture"), S = k.filter((M) => x[M].state === "on").length, v = Ft.vacuums.filter((M) => x[M]);
    return {
      covers: n.length && { value: i ? i + " open" : "All closed", groups: e((M) => a(M, /^cover\./)) },
      people: d.length && { value: l ? l + " home" : "Nobody home", groups: [{ name: "People", ids: d }] },
      openings: f.length && { value: m ? m + " open" : "All closed", groups: [{ name: "Doors and windows", ids: f }] },
      leaks: k.length && { value: S ? P(S, "leak", "leaks") : "All dry", groups: [{ name: "Leak sensors", ids: k }] },
      vacuum: v.length && { value: $t(x[v[0]].state), groups: [{ name: "Vacuum", ids: v }] }
    };
  }
  function Ie(t = !1) {
    var be;
    const e = Ft.rooms, a = Ft.security, n = (Dt, Wt) => Dt.actions.filter((Ze) => Wt.test(Ze)), i = (Dt) => e.map((Wt) => ({ name: Wt.name, ids: Dt(Wt) })).filter((Wt) => Wt.ids.length), d = e.flatMap((Dt) => Dt.lights), l = d.filter((Dt) => {
      var Wt;
      return ((Wt = x[Dt]) == null ? void 0 : Wt.state) === "on";
    }).length, f = e.map((Dt) => Dt.readings.find((Wt) => jt(Wt).device_class === "temperature")).filter(Boolean).map((Dt) => Number(x[Dt].state)).filter(Number.isFinite), [m, k] = [ze(Math.min(...f)), ze(Math.max(...f))], S = e.flatMap((Dt) => n(Dt, /^media_player\./)), v = S.filter((Dt) => {
      var Wt;
      return ((Wt = x[Dt]) == null ? void 0 : Wt.state) === "playing";
    }).length, M = Pt(), W = M.filter((Dt) => Dt.severity === "warning" && Dt.on).length, z = a.locks.filter((Dt) => {
      var Wt;
      return ["unlocked", "jammed", "open"].includes((Wt = x[Dt]) == null ? void 0 : Wt.state);
    }).length, H = a.alarms.filter((Dt) => {
      var Wt;
      return ((Wt = x[Dt]) == null ? void 0 : Wt.state) === "disarmed";
    }).length, I = W ? P(W, "warning", "warnings") : null, D = z ? z + " unlocked" : H ? H + " disarmed" : I ? null : "All secure", Q = fe(), L = e.flatMap((Dt) => Dt.solar), kt = L.find((Dt) => Dt.endsWith("_power")), Zt = {
      light: d.length && { value: l ? l + " on" : "All off", groups: i((Dt) => Dt.lights) },
      climate: f.length && { value: m === k ? m + "°" : m + " - " + k + "°", groups: i((Dt) => [...Dt.readings.filter((Wt) => ["temperature", "humidity"].includes(jt(Wt).device_class)), ...n(Dt, /^(climate|humidifier)\./)]) },
      security: (a.alarms.length || a.locks.length) && { value: [I, D].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...a.alarms, ...a.locks] }, { name: "Doors and windows", ids: a.openings }].filter((Dt) => Dt.ids.length) },
      media_players: S.length && { value: v ? v + " playing" : "No media playing", groups: i((Dt) => n(Dt, /^media_player\./)) },
      maintenance: Q,
      energy: Ft.grid && { value: _o(Number(((be = x[kt]) == null ? void 0 : be.state) || 0) * 1e3 + Number(x[Ft.grid].state)) + " now", groups: [{ name: "Energy", ids: [...L, Ft.grid] }] },
      ...re(e, i, n)
    }, Rt = [], Kt = M.filter((Dt) => Dt.severity !== "warning" && Dt.on);
    return Kt.length && Rt.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: P(Kt.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: Kt.map((Dt) => Dt.entity) }] }), Ht().forEach((Dt) => {
      Dt.type !== "summary" ? Rt.push({ key: "path:" + Dt.path, name: Dt.label || Dt.path, icon: Dt.icon || "mdi:link-variant", colour: "", value: "" }) : !Dt.hidden && Zt[Dt.key] && (t || ae(Dt.key)) && Rt.push({ key: Dt.key, ...xr[Dt.key], ...Zt[Dt.key] });
    }), Rt;
  }
  const no = (t) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + q(t.key) + '" data-k="sum:' + q(t.key) + '" aria-label="' + q(t.name + (t.value ? ", " + t.value : "")) + '"' + (t.key === "alerts" ? ' style="--sum:' + t.colour + ';--sum-ink:#ffffff"' : t.key === "climate" ? ' style="' + Gi() + '"' : t.colour && hn(t.colour) ? ' style="' + hn(t.colour).slice(1) + '"' : "") + ">" + (t.key === "climate" ? Ui : "") + '<div class="tfIcon" aria-hidden="true"' + ge(t.id || "", t.icon, t.name) + '></div><div><div class="activityRowName">' + q(t.name) + "</div>" + (t.value ? '<div class="activityRowMeta">' + q(t.value) + "</div>" : "") + "</div></div>";
  function Qn(t) {
    const e = U();
    gt = { ...gt, favourites: e.includes(t) ? e.filter((a) => a !== t) : [...e, t], favHidden: (gt.favHidden || []).filter((a) => a !== t) }, Ne(), Te();
  }
  function Mn(t) {
    document.querySelector("home-assistant") && (dt.pushState(null, "", t), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function tr(t, e) {
    if (t.startsWith("path:")) {
      Mn(t.slice(5));
      return;
    }
    ci("summary:" + t, e);
  }
  async function Gt() {
    const t = (l) => Promise.resolve().then(() => _(l)).catch(() => null), [e, a, n, i] = await Promise.all([
      t({ type: "frontend/get_user_data", key: $d }),
      t({ type: "frontend/get_system_data", key: "home" }),
      t({ type: "frontend/get_system_data", key: "security" }),
      t({ type: "usage_prediction/common_control" })
    ]), d = (e == null ? void 0 : e.value) || {};
    gt = { favourites: d.favourites ?? null, sources: d.sources, hiddenSums: d.hiddenSums, shownSums: d.shownSums, home: d.home, dash: d.dash, named: d.named, favHidden: d.favHidden, suggest: d.suggest, favSeeded: d.favSeeded }, Ve = (a == null ? void 0 : a.value) || {}, Xa = (n == null ? void 0 : n.value) || {}, Wo = Array.isArray(i == null ? void 0 : i.entities) ? i.entities : [], So = null, Object.keys(x).length && Te(), Ro(), ut = !0, Et();
  }
  const Fa = "HomeCore";
  async function Ro() {
    var n, i, d;
    const t = location.pathname.split("/")[1], e = gt.named || [];
    if (!((i = (n = c()) == null ? void 0 : n.user) != null && i.is_admin) || !t || e.includes(t)) return;
    const a = () => {
      gt = { ...gt, named: [...e, t] }, Ne();
    };
    try {
      const l = (d = await _({ type: "lovelace/dashboards/list" })) == null ? void 0 : d.find((k) => k.url_path === t);
      if (!l || l.mode === "yaml") return;
      if (l.title === Fa) {
        a();
        return;
      }
      const f = await _({ type: "lovelace/config", url_path: t }), m = ((f == null ? void 0 : f.views) || []).flatMap((k) => [...k.cards || [], ...(k.sections || []).flatMap((S) => S.cards || [])]);
      if (!m.length || !m.every((k) => (k == null ? void 0 : k.type) === "custom:homecore-card" && !k.page)) return;
      await _({ type: "lovelace/dashboards/update", dashboard_id: l.id, title: Fa }), a();
    } catch {
    }
  }
  let qa = null, $o = 0, Sn = !1;
  const Jo = (t) => {
    const e = t.split(".")[0], a = jt(t).device_class;
    return v0.includes(e) && (e !== "binary_sensor" || Li.includes(a) || !!rp[a]);
  }, Fe = (t) => t.startsWith("binary_sensor.") ? rp[jt(t).device_class] : null;
  async function Up() {
    var t;
    if (!(Sn || Date.now() - $o < 30 * 1e3)) {
      Sn = !0, $o = Date.now();
      try {
        const e = Object.keys(((t = c()) == null ? void 0 : t.states) || {}).filter(Jo), a = e.length ? await _({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: e }) : null;
        qa = Array.isArray(a) ? a.filter((n) => n.entity_id && n.state != null && n.when) : null;
      } catch {
        qa = null;
      }
      Sn = !1, Te();
    }
  }
  function Yp() {
    const t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map(), a = (i) => {
      if (!x[i.entity_id] || !Jo(i.entity_id) || !as(i.entity_id) || ["unavailable", "unknown"].includes(i.state)) return;
      if (Fe(i.entity_id)) {
        const l = e.get(i.entity_id);
        i.state === "on" ? (!l || i.when > l.when + 1) && e.set(i.entity_id, { ...i, alarm: !0, cleared: null }) : l && !l.cleared && i.when > l.when && (l.cleared = i.when);
        return;
      }
      const d = t.get(i.entity_id);
      (!d || i.when > d.when + 1) && t.set(i.entity_id, i);
    };
    [...qa || []].sort((i, d) => i.when - d.when).forEach(a);
    const n = qa ? $o / 1e3 - 5 : 0;
    return Object.keys(x).forEach((i) => {
      var f;
      const d = x[i], l = d.last_changed ? Date.parse(d.last_changed) / 1e3 : 0;
      l > n && a({ entity_id: i, state: d.state, when: l, context_user_id: (f = d.context) == null ? void 0 : f.user_id });
    }), [...t.values(), ...e.values()].sort((i, d) => d.when - i.when).slice(0, x0);
  }
  function Zp(t) {
    var n;
    const e = t.context_user_id && Object.keys(x).find((i) => i.startsWith("person.") && jt(i).user_id === t.context_user_id);
    if (e) return xt(e);
    const a = (n = c()) == null ? void 0 : n.user;
    return a && t.context_user_id === a.id ? a.name : ["automation", "script"].includes(t.context_domain) || t.context_event_type === "automation_triggered" ? t.context_name || "Home Assistant" : "";
  }
  function Kp(t) {
    const e = t.entity_id.split(".")[0], a = String(t.state);
    return e === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[a] || $t(a).toLowerCase() : e === "cover" || e === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[a] || $t(a).toLowerCase() : e === "binary_sensor" ? a === "on" ? "opened" : "closed" : e === "climate" ? a === "off" ? "turned off" : "set to " + $t(a).toLowerCase() : e === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[a] || $t(a).toLowerCase() : e === "alarm_control_panel" ? (np[a] || $t(a)).toLowerCase() : e === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[a] || $t(a).toLowerCase() : a === "on" ? "turned on" : a === "off" ? "turned off" : $t(a).toLowerCase();
  }
  function Xp(t) {
    const e = t.entity_id, a = t.alarm && Fe(e), n = xt(e) + " " + (a ? a[0] : Kp(t)), i = a ? Sa(t.when * 1e3) + (t.cleared ? " · " + a[1] + " since " + Sa(t.cleared * 1e3) : "") : [Zp(t), Sa(t.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow' + (a ? " alert" : "") + '"><div class="tfIcon' + (a ? " alert" : "") + '" aria-hidden="true"' + ge(e, la(e)) + '></div><button class="tfName" type="button" data-more="' + q(e) + '" data-at="' + Math.round(t.when * 1e3) + '" aria-label="' + q(n + ", " + i + ". More info") + '"><span class="activityRowName">' + q(n) + '</span><span class="activityRowMeta">' + q(i) + "</span></button></div>";
  }
  let _a = null, El = 0;
  const $p = [["electricity", "Electricity", 4.3, "kWh"], ["solar", "Solar", 2.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function Bl() {
    var e;
    if (Date.now() - El < 5 * 60 * 1e3) return;
    El = Date.now();
    const t = [];
    try {
      const a = ((e = await _({ type: "energy/get_prefs" })) == null ? void 0 : e.energy_sources) || [], n = (i) => a.filter((d) => d.type === i).flatMap((d) => i === "grid" ? (d.flow_from || []).map((l) => l.stat_energy_from) : [d.stat_energy_from]).filter(Boolean);
      for (const [i, d, l] of [["electricity", "Electricity", n("grid")], ["solar", "Solar", n("solar")], ["gas", "Gas", n("gas")], ["water", "Water", n("water")]]) {
        if (!l.length) continue;
        const f = await Promise.all(l.map((m) => Promise.resolve(_({ type: "recorder/statistic_during_period", statistic_id: m, calendar: { period: "day" }, types: ["change"] })).then((k) => Number(k == null ? void 0 : k.change) || 0, () => 0)));
        t.push({ key: i, name: d, id: l[0], ids: l, value: f.reduce((m, k) => m + k, 0), unit: jt(l[0]).unit_of_measurement || (i === "gas" || i === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    _a = t, Te();
  }
  let An = null, Rl = [];
  function ts() {
    var d;
    const t = Rl = _a != null && _a.length ? _a : $p.map(([l, f, m, k]) => {
      if (l === "solar") {
        const v = Object.keys(x).find((M) => M.endsWith("_solar_today") && !M.includes("made_up_energy"));
        v && Number.isFinite(Number(x[v].state)) && (m = Number(x[v].state));
      }
      const S = "sensor.made_up_energy_" + l;
      return x[S] = { entity_id: S, state: String(m), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: f + " today", unit_of_measurement: k, state_class: "total_increasing" } }, { key: l, name: f, id: S, value: m, unit: k };
    });
    ot.clear(), t.some((l) => l.id === An) || (An = t[0].id);
    const e = t.map((l) => {
      const f = Number(l.value).toLocaleString(void 0, { maximumFractionDigits: l.value < 10 ? 2 : 1 }) + " " + l.unit, m = k0[l.key], k = l.id === An;
      return ot.set(l.id, { name: l.name, text: f, icon: m }), '<div class="activityRow tap' + (k ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + q(l.id) + '" aria-pressed="' + k + '" aria-label="' + q(l.name + ", " + f) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + ge("", m, l.name) + '></div><div><div class="activityRowName">' + q(l.name) + '</div><div class="activityRowMeta">' + q(f) + "</div></div></div>";
    }), a = t.find((l) => l.id === An), n = (((d = oe().opts.energy) == null ? void 0 : d.graph) || "above") === "below", i = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + q(a.id) + '" role="img" aria-label="' + q(a.name) + ', last 24 hours"></svg></div>';
    return to("dash:energy", 0, "Energy today", e, i, Ie().some((l) => l.key === "energy") ? "summary:energy" : null, "tfDashCard tfDash-energy" + (n ? "" : " graphAbove"));
  }
  function Pl(t) {
    const e = E.querySelector(".tfDash-energy"), a = e == null ? void 0 : e.querySelector(".tfDashGraph svg");
    !a || t === An || (An = t, e.querySelectorAll("[data-energy-pick]").forEach((n) => {
      const i = n.dataset.energyPick === t;
      n.classList.toggle("picked", i), n.setAttribute("aria-pressed", String(i));
    }), a.dataset.graph = t, a.dataset.drawn = "", pa.set("dash:energy", ts()), xc(!0));
  }
  const Hl = {
    electricity: [15, 12, 10, 10, 10, 12, 25, 45, 40, 30, 25, 30, 35, 30, 25, 25, 35, 60, 80, 70, 55, 45, 30, 20],
    gas: [2, 2, 2, 2, 3, 8, 18, 20, 12, 6, 4, 4, 4, 4, 4, 5, 8, 14, 16, 14, 10, 6, 3, 2],
    water: [0, 0, 0, 0, 0, 2, 12, 18, 8, 4, 3, 4, 6, 3, 2, 3, 4, 6, 10, 8, 5, 5, 3, 1]
  }, Nl = /* @__PURE__ */ new Map();
  async function Jp(t) {
    const e = /* @__PURE__ */ new Date(), a = new Date(e).setHours(0, 0, 0, 0), n = e.getHours(), i = e.getMinutes() / 60, d = Array.from({ length: 24 }, (f, m) => m <= n ? 0 : null);
    if (!t.ids) {
      const f = Hl[t.key] || Hl.electricity, m = f.map((S, v) => v < n ? S : v === n ? S * i : 0), k = m.reduce((S, v) => S + v, 0) || 1;
      return d.map((S, v) => S == null ? null : t.value * m[v] / k);
    }
    const l = Nl.get(t.id);
    if (l && l.day === a && Date.now() - l.at < 5 * 60 * 1e3) return l.hours;
    try {
      const f = await _({ type: "recorder/statistics_during_period", start_time: new Date(a).toISOString(), end_time: e.toISOString(), statistic_ids: t.ids, period: "hour", types: ["change"] });
      t.ids.forEach((S) => ((f == null ? void 0 : f[S]) || []).forEach((v) => {
        const M = typeof v.start == "number" ? v.start : Date.parse(v.start), W = new Date(M).getHours();
        M >= a && W < n && (d[W] += Number(v.change) || 0);
      }));
      const m = new Date(e).setMinutes(0, 0, 0), k = await Promise.all(t.ids.map((S) => Promise.resolve(_({ type: "recorder/statistic_during_period", statistic_id: S, fixed_period: { start_time: new Date(m).toISOString(), end_time: e.toISOString() }, types: ["change"] })).then((v) => Number(v == null ? void 0 : v.change) || 0, () => 0)));
      d[n] = k.reduce((S, v) => S + v, 0);
    } catch {
    }
    return Nl.set(t.id, { at: Date.now(), day: a, hours: d }), d;
  }
  async function Qp(t, e) {
    const a = await Jp(e);
    if (!t.isConnected) return;
    const n = Math.max(120, t.clientWidth || 260), i = Math.max(60, t.clientHeight || 130), d = 18, l = i - 18, f = n / 24, m = f * 0.72, k = (/* @__PURE__ */ new Date()).getHours(), S = a.map((I) => I ?? 0), v = Math.max(0, ...S), M = (I) => l - (v > 0 ? I / v * (l - d) : 0), W = (I) => I.toLocaleString(void 0, { maximumFractionDigits: I < 10 ? 2 : 1 }) + " " + e.unit, z = (I) => String(I).padStart(2, "0") + ":00", H = v > 0 ? S.indexOf(v) : -1;
    t.setAttribute("viewBox", "0 0 " + n + " " + i), t.setAttribute("aria-label", e.name + " today by the hour: " + W(e.value) + (H >= 0 ? ", most " + W(v) + " at " + z(H) : "")), t.innerHTML = [d, (d + l) / 2, l].map((I) => '<line x1="0" x2="' + n + '" y1="' + I + '" y2="' + I + '" stroke="var(--line)" stroke-width="1"/>').join("") + a.map((I, D) => I > 0 ? '<rect x="' + (D * f + (f - m) / 2).toFixed(1) + '" y="' + M(I).toFixed(1) + '" width="' + m.toFixed(1) + '" height="' + (l - M(I)).toFixed(1) + '" rx="2" fill="' + (D === k ? "var(--primary)" : "var(--text)") + '"' + (D === k ? "" : ' fill-opacity=".5"') + "/>" : "").join("") + [0, 6, 12, 18].map((I) => '<text x="' + (I * f).toFixed(1) + '" y="' + (i - 3) + '">' + String(I).padStart(2, "0") + "</text>").join("") + (H >= 0 ? '<text x="0" y="11">Most: ' + q(W(v)) + " at " + z(H) + "</text>" : "");
  }
  function tf(t) {
    var e;
    (e = window.matchMedia) != null && e.call(window, "(prefers-reduced-motion: reduce)").matches || t.querySelectorAll("rect").forEach((a, n) => a.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], { duration: 500, delay: n * 18, easing: "cubic-bezier(.2,.7,.3,1)", fill: "backwards" }));
  }
  function Ol(t) {
    var n;
    if ((n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [e, a] = t.querySelectorAll("path");
    Ap(t, a, [e].filter(Boolean));
  }
  let $r = null, es = 0;
  const as = (t) => !t.startsWith("light.") || M0.includes((_t.get(t) || "").toLowerCase()), os = () => Math.max(2, tn((E == null ? void 0 : E.clientWidth) || 0).n), Il = (t) => {
    const e = da(t);
    return e.sections.map((a, n) => a && (e.parts || [])[n]).filter(Boolean);
  }, ef = (t) => Il(t).slice(0, ar(t) - 1);
  function Fl(t) {
    const e = oe().tiles;
    if (e) return e.filter((n) => x[n] || B(n));
    if (!$r) {
      const n = (i) => {
        var d;
        return (((d = x[i]) == null ? void 0 : d.state) === "on" ? 1e6 : 0) + (Ha[i] || 0);
      };
      $r = {
        lights: Ft.rooms.flatMap((i) => i.lights).filter((i) => {
          var d;
          return as(i) && ((d = x[i]) == null ? void 0 : d.state) !== "unavailable";
        }).sort((i, d) => n(d) - n(i) || xt(i).localeCompare(xt(d))),
        climates: Ft.rooms.flatMap((i) => i.actions.filter((d) => d.startsWith("climate.")))
      };
    }
    const a = $r.climates.filter((n) => x[n]).slice(0, t > 3 ? 2 : 1);
    return [...$r.lights.filter((n) => x[n]).slice(0, Math.max(0, t - a.length)), ...a];
  }
  const ns = () => {
    var t;
    return ((t = gt.home) == null ? void 0 : t.welcome) ?? !0;
  }, af = () => {
    var e, a;
    const t = (e = c()) == null ? void 0 : e.user;
    return (t == null ? void 0 : t.name) || ((a = Object.values(x).find((n) => {
      var i;
      return n.entity_id.startsWith("person.") && (t == null ? void 0 : t.id) && ((i = n.attributes) == null ? void 0 : i.user_id) === t.id;
    })) == null ? void 0 : a.attributes.friendly_name) || "";
  }, of = () => {
    const t = (/* @__PURE__ */ new Date()).getHours(), e = af();
    return (t >= 5 && t < 12 ? "Good morning" : t >= 12 && t < 18 ? "Good afternoon" : "Good evening") + (e ? ", " + e : "");
  }, ql = (t, e, a, n) => (i) => '<section class="card tfCard tfDashCard ' + t + '" data-tf data-k="' + e + '" aria-label="' + a + '">' + (n ? '<div class="activityHeader">' + (e === "favs" ? '<button class="activityTitle tfTitleBtn" type="button" data-more="favourites" aria-label="Favourites. More info">' + a + "</button>" : '<div class="activityTitle">' + a + "</div>") + "</div>" : "") + '<div class="activityRows">' + i + "</div></section>";
  function nf(t, e) {
    var d, l;
    t.dash = !0, t.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + ((A ? ns() : oe().welcome) ? '<span class="tfGreeting">' + q(of()) + "</span>" : "") + q(((l = (d = c()) == null ? void 0 : d.config) == null ? void 0 : l.location_name) || "Home") + "</h1>" }), e.length && t.push({ key: "sums", wrap: (f) => '<div class="tfDashBarRow" data-tf data-k="sums">' + ql("tfDash-bar", "sums-bar", "Summaries", !1)(f).replace(" data-tf", "") + "</div>", tiles: e.map((f) => ({ key: "sum:" + f.key, html: no(f) })) }), !A && h().length && t.push({ key: "areas", html: b(0) });
    const a = St();
    if (a.length && t.push({ key: "favs", wrap: ql("tfDash-favs", "favs", "Favourites", !0), tiles: a.map((f) => ({ key: "fav:" + f, html: Tt(f, { area: !0 }) })) }), A)
      return Bl(), Jl() && t.push({ key: "dash:energy", html: ts() }), es = os(), Fl(0).forEach((f) => t.push({
        key: "dash:tile:" + f,
        wrap: (m) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + q(f) + '">' + m + "</div>",
        tiles: [{ key: f, html: F(B(f), f) }]
      })), t;
    const n = Yp();
    t.push({ key: "dash:act", html: to("dash:act", 0, "Activity", n.length ? n.map(Xp) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), t.push({ key: "dash:energy", html: ts() });
    const i = os();
    return es = i, Fl(i >= 3 ? i : i * 2).forEach((f) => t.push({
      key: "dash:tile:" + f,
      wrap: (m) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + q(f) + '">' + m + "</div>",
      tiles: [{ key: f, html: C(f) ? F(B(f), f) : Kn(f, !1, ef(f)) }]
    })), Up(), Bl(), t;
  }
  const er = 252, se = 16, rf = 200, sf = Math.round(er * 1.25), lf = 60, Ta = lf + se, cf = 3, Wl = {
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
  }, df = ["wx", "favs", "act", "energy", "avg"], jl = ["XS", "S", "M", "L", "XL"], Vl = jl.length, pf = ["Narrow", "Wide", "Really wide"], ff = { wx: 5, areas: 5, favs: 5, act: 5, energy: 4, avg: 4, aq: 4, pollen: 4, radar: 4, hourly: 4, sun: 4, moon: 4, uv: 4, humidity: 4, pressure: 4, wind: 4, visibility: 4 }, zl = (t) => !t.includes(".") || !x[t] || t.startsWith("light.") && ha(t) ? Vl : Math.min(Vl, Il(t).length + 1), ar = (t) => {
    const e = oe().opts[t] || {}, a = zl(t), n = Number(e.h) || (e.tall ? 5 : ff[t] || Gl);
    return Math.max(1, Math.min(a, n));
  }, Gl = 2, uf = 90, hf = 56, ba = (t) => {
    var e;
    return Wl[t] || (t.startsWith("room:") ? ((e = u.find((a) => "room:" + a.id === t)) == null ? void 0 : e.name) || "Area" : xt(t));
  }, mf = 409, gf = 128;
  let ea = !1, Ut = null, Ue = null, rs = !1, Qo = /* @__PURE__ */ new Map(), Jr = 0, Po = 0;
  const ro = ["title", "sums"], tn = (t) => {
    const e = Math.max(1, Math.floor((t + se) / (rf + se)));
    return { n: e, w: Math.max(1, Math.min(sf, Math.floor((t - (e - 1) * se) / e))) };
  }, bf = () => u.map((t) => "room:" + t.id);
  function wf() {
    const t = bf();
    return {
      cells: {},
      spans: { favs: 2 },
      hidden: Object.keys(Wl).filter((e) => {
        var a, n;
        return !["title", ...((a = gt.home) == null ? void 0 : a.sums) === !1 ? [] : ["sums"], ...((n = gt.home) == null ? void 0 : n.favs) === !1 ? [] : ["favs"], ...kf() ? ["wx"] : [], ...Jl() ? ["energy"] : []].includes(e);
      }),
      opts: { favs: { h: 5 }, ...Object.fromEntries(t.map((e) => [e, { h: 5 }])) },
      tiles: t,
      known: Ao,
      areasOff: []
    };
  }
  const oe = () => A ? wf() : is(), is = () => {
    let t = { cells: {}, spans: {}, hidden: [], opts: {}, ...gt.dash || {} };
    t.sumsOff && (t = { ...t, hidden: [...t.hidden, "sums"] });
    const e = Ao.filter((a) => !(t.known || []).includes(a) && !t.hidden.includes(a));
    return e.length ? { ...t, hidden: [...t.hidden, ...e] } : t;
  };
  function en(t) {
    A || (gt = { ...gt, dash: { ...t, known: Ao } }, Ne());
  }
  function an() {
    const t = (e) => E.querySelector(e);
    return [
      ["title", t(".tfDashTitle"), "full"],
      ["sums", t(".tfDashBarRow"), "full"],
      ["wx", Na.wx, 2],
      ["areas", t(".tfAreas"), "areas"],
      ["favs", t(".tfDash-favs"), 2],
      ["act", t(".tfDash-act"), 2],
      ["energy", t(".tfDash-energy"), 2],
      ["avg", Na.avg, 2],
      ...Ao.map((e) => [e, Na[e], qi[e] || 1]),
      ...[...E.querySelectorAll(".tfDashTiles > [data-k]")].map((e) => [e.dataset.k, e, 1, !0])
    ].filter(([, e]) => e == null ? void 0 : e.isConnected).map(([e, a, n, i = !1]) => ({ key: e, el: a, span: n, tile: i }));
  }
  const Ul = (t, e, a) => {
    var n;
    if (t.span === "full") return e;
    if (t.span === "areas") {
      const i = Math.ceil((mf + Math.max(0, h().length - 1) * (gf + se) + se) / (a + se));
      return Math.max(Math.min(e, 2), Math.min(i, e - (((n = oe().cells.areas) == null ? void 0 : n.col) || 0)));
    }
    return Math.min(e, oe().spans[t.key] ?? t.span);
  }, Yl = (t) => ar(t.key);
  function Zl(t, e, a = null) {
    const n = oe().cells, i = t.every((f) => !n[f.key] || n[f.key].col + f.cols <= e), d = (f) => n[f.key] || { row: 1e9, col: 0 };
    return (() => {
      const f = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Map(), k = (H, I, D, Q) => {
        for (let L = I; L < I + Q; L++) for (let kt = H; kt < H + D; kt++) if (f.has(kt + "," + L)) return !1;
        return !0;
      }, S = (H, I, D) => {
        for (let Q = D; Q < D + H.rows; Q++) for (let L = I; L < I + H.cols; L++) f.add(L + "," + Q);
        m.set(H.key, { col: I, row: D, cols: H.cols, rows: H.rows });
      }, v = (H, I, D) => {
        for (I = Math.max(0, Math.min(e - H.cols, I)), D = Math.max(0, D); !k(I, D, H.cols, H.rows); ) D++;
        S(H, I, D);
      }, M = (H) => {
        for (let I = 0; ; I++) for (let D = 0; D <= e - H.cols; D++) if (k(D, I, H.cols, H.rows)) {
          S(H, D, I);
          return;
        }
      };
      a && v(a, Ut.col, Ut.row);
      const W = t.filter((H) => H !== a), z = (H, I) => d(H).row - d(I).row || d(H).col - d(I).col;
      return i ? (W.filter((H) => n[H.key]).sort(z).forEach((H) => v(H, n[H.key].col, n[H.key].row)), W.filter((H) => !n[H.key]).forEach(M), m) : ([...W].sort(z).forEach(M), m);
    })();
  }
  function vf(t, e) {
    const a = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Map(), i = (d, l, f) => {
      for (let m = l; m < l + f.rows; m++) for (let k = d; k < d + f.cols; k++) if (a.has(k + "," + m)) return !1;
      return !0;
    };
    return t.forEach((d) => {
      for (let l = 0; ; l++) {
        let f = 0;
        for (; f <= e - d.cols && !i(f, l, d); ) f++;
        if (!(f > e - d.cols)) {
          for (let m = l; m < l + d.rows; m++) for (let k = f; k < f + d.cols; k++) a.add(k + "," + m);
          n.set(d.key, { col: f, row: l, cols: d.cols, rows: d.rows });
          return;
        }
      }
    }), n;
  }
  function ss() {
    const t = oe(), e = new Set(t.hidden), a = an().filter((l) => !ro.includes(l.key));
    let n = Qo;
    if (!n.size) {
      const l = t.pegs || 4, f = a.filter((m) => !e.has(m.key));
      f.forEach((m) => {
        m.cols = Ul(m, l, er), m.rows = Yl(m) ?? Gl;
      }), n = Zl(f, l);
    }
    const i = (l) => !e.has(l.key) && n.get(l.key) || { row: 1e9, col: 0 };
    a.sort((l, f) => i(l).row - i(f).row || i(l).col - i(f).col);
    const d = (t.phone || []).map((l) => a.find((f) => f.key === l && !e.has(l))).filter(Boolean);
    return [...d, ...a.filter((l) => !d.includes(l))];
  }
  const yf = () => {
    const t = ss();
    t.forEach((e, a) => e.el.style.setProperty("--o", String(3 + a))), ls([...an().filter((e) => ro.includes(e.key)), ...t].map((e) => e.el));
  };
  function ls(t) {
    if (Ut) return;
    const e = o.activeElement;
    let a = null;
    for (const n of new Set(t.map((i) => {
      for (; i && i.parentElement !== E; ) i = i.parentElement;
      return i;
    }).filter(Boolean))) {
      const i = a ? a.nextSibling : E.querySelector(":scope > [data-tf]");
      if (n !== i)
        try {
          E.moveBefore ? E.moveBefore(n, i) : E.insertBefore(n, i);
        } catch {
          E.insertBefore(n, i);
        }
      a = n;
    }
    e && e !== o.activeElement && e.isConnected && e.focus({ preventScroll: !0 });
  }
  const Cn = (t, e) => en({ ...t, cells: e, pegs: tn(E.clientWidth).n });
  function Pe() {
    var Q;
    if (!w || !E) return;
    const t = E.clientWidth, e = t < 2 * er + se, a = g.classList.contains("tfDash");
    A && (ea = !1), g.classList.toggle("tfOverview", A);
    const { n, w: i } = e ? { n: 2, w: Math.floor((t - se) / 2) } : tn(t);
    fa.classList.add("tfPegs"), fa.style.setProperty("--peg-n", n), fa.style.setProperty("--peg-w", i + "px");
    const d = new Set(oe().hidden);
    Ao.forEach((L) => {
      var kt;
      return (kt = Na[L]) == null ? void 0 : kt.classList.toggle("tfNotAdded", d.has(L) && !(Ut != null && Ut.fromTray && Ut.key === L));
    }), Er(), g.classList.toggle("tfBoard", a), g.classList.toggle("tfEditing", a && ea && !e);
    const l = p("dashEditNav");
    !a && po && Ds(!1), l && A ? (l.hidden = !a, po || (l.classList.remove("active"), l.setAttribute("aria-pressed", "false"), l.setAttribute("aria-label", "Edit Home page"), l.title = "Edit", l.innerHTML = Di)) : l && (l.hidden = !a || e, l.classList.toggle("active", ea), l.setAttribute("aria-pressed", String(ea)), l.setAttribute("aria-label", ea ? "Done editing" : "Edit custom dashboard"), l.title = ea ? "Done" : "Edit", l.innerHTML = ea ? op : Di);
    const f = a ? an() : [];
    if ((!a || !A) && E.querySelectorAll(":scope > :is(.hcFloor,.hcFloorBox)").forEach((L) => L.remove()), !a) {
      E.style.height = "", E.querySelectorAll(".tfBoardItem").forEach((L) => {
        L.classList.remove("tfBoardItem", "tfBoardHidden"), L.style.left = L.style.top = L.style.width = L.style.height = "";
      }), (Q = E.querySelector(".tfDash-act > .activityRows")) == null || Q.style.removeProperty("max-height"), fs(!1), g.classList.contains("tfDash") && yf(), Me();
      return;
    }
    if (A) {
      Af(f, t, e);
      return;
    }
    E.style.setProperty("--peg-w", i + "px");
    const m = new Set(oe().hidden), k = i + se;
    Ut != null && Ut.fromTray && m.delete(Ut.key), f.forEach((L) => L.el.classList.toggle("tfBoardHidden", m.has(L.key)));
    const S = f.filter((L) => !m.has(L.key) && getComputedStyle(L.el).display !== "none");
    let v = 0;
    S.filter((L) => ro.includes(L.key)).forEach((L) => {
      L.el.classList.add("tfBoardItem"), Object.assign(L.el.style, { width: t + "px", height: "", left: "0px", top: v + "px" });
      const kt = L.key === "sums" && L.el.querySelector(".tfDash-bar"), Zt = kt ? kt.querySelectorAll(".activityRow").length : 0;
      kt && (kt.style.maxWidth = "none");
      for (let Rt = 1; kt && Rt <= Zt && (kt.style.setProperty("--bar-cols", String(Math.ceil(Zt / Rt))), !(kt.offsetWidth <= t)); Rt++)
        ;
      kt && (kt.style.maxWidth = ""), v += L.el.offsetHeight + se;
    }), Po = v;
    const M = S.filter((L) => !ro.includes(L.key));
    M.forEach((L) => {
      L.cols = Ul(L, n, i), L.el.classList.add("tfBoardItem"), L.el.style.width = (L.cols === n ? t : L.cols * i + (L.cols - 1) * se) + "px", L.el.style.height = "", L.rows = Yl(L) ?? Math.max(1, Math.ceil((L.el.offsetHeight + se - 6) / Ta));
    });
    const W = Ut && M.find((L) => L.key === Ut.key), z = e && ss().map((L) => L.key), H = (L) => z.includes(L.key) ? z.indexOf(L.key) : -1, I = e ? vf([...M].sort((L, kt) => H(L) - H(kt)), n) : Zl(M, n, W);
    I.forEach((L) => Object.assign(L, { x: L.cols === n ? 0 : L.col * k, y: Po + L.row * Ta, w: L.cols === n ? t : L.cols * i + (L.cols - 1) * se, h: L.rows * Ta - se })), M.forEach((L) => {
      const kt = I.get(L.key);
      L.el.style.height = kt.h + "px", L.el.dataset.rows = e && L.key === "wx" ? 5 : ar(L.key), L.el.toggleAttribute("data-narrow", !e && kt.cols === 1 && n > 1), L.el.dataset.cols = kt.cols, L.el.classList.contains("tfDac") && L.el.style.setProperty("--tf-dac-pad", kt.h - uf + "px"), !(L === W && !Ut.fromTray) && (L.el.style.left = kt.x + "px", L.el.style.top = kt.y + "px");
    }), e || (Qo = I), ls([...S.filter((L) => ro.includes(L.key)), ...M.slice().sort((L, kt) => I.get(L.key).row - I.get(kt.key).row || I.get(L.key).col - I.get(kt.key).col)].map((L) => L.el)), [["favs", ".tfDash-favs"], ["act", ".tfDash-act"]].forEach(([L, kt]) => {
      const Zt = I.get(L), Rt = Zt && E.querySelector(kt), Kt = Rt == null ? void 0 : Rt.querySelector(":scope > .activityRows"), be = Rt == null ? void 0 : Rt.querySelector(":scope > .activityHeader");
      if (!Kt || !be) return;
      const Dt = Kt.getBoundingClientRect().top - Rt.getBoundingClientRect().top, Wt = Zt.rows === 1 ? Zt.h : Math.floor(Zt.h - Dt - parseFloat(getComputedStyle(Rt).paddingBottom)), Ze = Math.max(1, Math.floor(Wt / hf));
      Kt.style.setProperty("--fill-row", (Wt / Ze).toFixed(2) + "px"), Kt.style.maxHeight = Wt + "px";
    }), Jr = Math.max(0, ...[...I.values()].map((L) => L.row + L.rows));
    let D = Po + Jr * Ta - se;
    D = fs(ea && !e, M, I, D, n, i), E.style.height = D + "px", requestAnimationFrame(() => g.classList.add("tfBoardReady")), f.forEach((L) => ps.observe(L.el)), xc(), Me();
  }
  const aa = { gap: 20, phoneGap: 16, inner: 16, col: 252, row: 337, nameGap: 16, sumsGap: 16, full: 1336, floorTop: 12, floorHead: 24, floorGap: 16 }, Kl = { s: { w: 160, h: 192 }, m: { w: 200, h: 240 }, l: { w: 252, h: 337 } }, Xl = () => {
    var t;
    return Kl[(t = gt.home) == null ? void 0 : t.areaSize] ? gt.home.areaSize : "s";
  }, cs = () => {
    var t;
    return ["rows", "columns", "bento"].includes((t = gt.home) == null ? void 0 : t.areaLayout) ? gt.home.areaLayout : "bento";
  }, $l = () => {
    var t;
    return ((t = gt.home) == null ? void 0 : t.cardsAs) === "rows" ? "rows" : "stacked";
  }, xf = { byFloor: !0, bentoBoxes: !0, bentoMixed: !1 }, kf = () => {
    var t;
    return !!((t = gt.home) != null && t.weather && st());
  }, Jl = () => {
    var t;
    return !!((t = gt.home) != null && t.energy && (_a != null && _a.length));
  }, on = (t) => {
    var e;
    return ((e = gt.home) == null ? void 0 : e[t]) ?? xf[t];
  };
  function Mf() {
    var i;
    const t = Object.values(((i = c()) == null ? void 0 : i.floors) || {}), e = new Set(t.map((d) => d.floor_id)), a = t.map((d) => ({ id: d.floor_id, name: d.name, rooms: u.filter((l) => l.floor === d.floor_id) })), n = u.filter((d) => !e.has(d.floor));
    return n.length && a.push({ id: "", name: t.length ? "Other areas" : "", rooms: n }), a;
  }
  const Ql = (t) => t.classList.toggle("hcMore", t.scrollHeight - t.scrollTop - t.clientHeight > 1);
  let ue = null, tc = [], or = /* @__PURE__ */ new Map();
  function ds(t) {
    let e = E.querySelector(".hcHomeLand");
    if (!t) {
      e == null || e.remove();
      return;
    }
    e || (e = Object.assign(document.createElement("div"), { className: "tfBoardLand hcHomeLand" }), E.appendChild(e)), Object.assign(e.style, { left: t.x + "px", top: t.y + "px", width: t.w + "px", height: t.h + "px" });
  }
  function Sf(t) {
    if (!A || !po || t.button !== 0 || E.clientWidth < 2 * er + se) return;
    const e = t.target.closest(".tfBoardItem"), a = e && an().find((f) => f.el === e);
    if (!a || ro.includes(a.key) || C(a.key)) return;
    t.preventDefault();
    const n = E.getBoundingClientRect(), i = or.get(a.key);
    ue = { key: a.key, el: e, on: !1, x0: t.clientX, y0: t.clientY, left: i.x, top: i.y, order: [...tc] };
    const d = (f) => {
      const m = f.clientX - ue.x0, k = f.clientY - ue.y0;
      if (!ue.on && Math.hypot(m, k) < 5) return;
      ue.on || (ue.on = !0, e.classList.add("tfDragging"), je() || e.animate([{ scale: "1" }, { scale: "1.05" }, { scale: "1.02" }], { duration: 260, easing: "cubic-bezier(.2,1.35,.4,1)" })), Object.assign(e.style, { left: ue.left + m + "px", top: ue.top + k + "px" });
      const S = f.clientX - n.left, v = f.clientY - n.top + E.scrollTop;
      let M = null, W = 1 / 0;
      if (or.forEach((D, Q) => {
        if (Q === a.key || !ue.order.includes(Q)) return;
        const L = Math.hypot(S - (D.x + D.w / 2), v - (D.y + D.h / 2));
        L < W && (W = L, M = { key: Q, b: D });
      }), !M) return;
      const z = ue.order.filter((D) => D !== a.key), H = z.indexOf(M.key) + (S > M.b.x + M.b.w / 2 ? 1 : 0), I = [...z.slice(0, H), a.key, ...z.slice(H)];
      I.join() !== ue.order.join() ? (ue.order = I, Pe()) : ds(or.get(a.key));
    }, l = () => {
      removeEventListener("pointermove", d), removeEventListener("pointerup", l), removeEventListener("pointercancel", l);
      const f = ue;
      ue = null, e.classList.remove("tfDragging"), f.on && La({ order: f.order }), Pe(), f.on && !je() && setTimeout(() => ud(e), 340);
    };
    addEventListener("pointermove", d), addEventListener("pointerup", l), addEventListener("pointercancel", l);
  }
  function Af(t, e, a) {
    var $c;
    const n = new Set(oe().hidden);
    t.forEach((ct) => ct.el.classList.toggle("tfBoardHidden", n.has(ct.key)));
    const i = t.filter((ct) => !n.has(ct.key) && getComputedStyle(ct.el).display !== "none"), d = a ? aa.phoneGap : aa.gap, l = Math.min(e, aa.full);
    let f = 0;
    const m = Ts();
    g.classList.toggle("hcSumsFit", pc()), g.classList.toggle("hcFavStrip", m);
    const k = i.filter((ct) => ro.includes(ct.key) || m && ct.key === "favs");
    k.sort((ct, Bt) => ["title", "sums", "favs"].indexOf(ct.key) - ["title", "sums", "favs"].indexOf(Bt.key)), k.forEach((ct) => {
      ct.el.classList.add("tfBoardItem"), ct.el.toggleAttribute("data-narrow", !1), Object.assign(ct.el.style, { width: (ct.key === "title" ? e : l) + "px", height: "", left: "0px", top: f + "px" });
      const Bt = ct.key !== "title" && (ct.el.querySelector(".tfDash-bar>.activityRows") || ct.key === "favs" && ct.el.querySelector(":scope>.activityRows")), we = Bt ? Bt.children.length : 0;
      if (Bt && (Bt.classList.remove("hcBarRows"), !a && Bt.scrollWidth > Bt.clientWidth + 1))
        for (let le = 2; le <= we && (Bt.classList.add("hcBarRows"), Bt.style.setProperty("--bar-cols", String(Math.ceil(we / le))), !(Bt.scrollWidth <= Bt.clientWidth + 1)); le++)
          ;
      f += ct.el.offsetHeight + (ct.key === "title" ? aa.nameGap : aa.sumsGap);
    });
    const S = a ? 1 : Math.max(0.85, Math.min(1, e / aa.full)), v = ["favs", "wx", "energy"], M = (ue == null ? void 0 : ue.order) || (($c = gt.home) == null ? void 0 : $c.order), W = M ? [...M.filter((ct) => v.includes(ct)), ...v.filter((ct) => !M.includes(ct))] : v;
    tc = W;
    const z = i.filter((ct) => v.includes(ct.key) && !(m && ct.key === "favs")).sort((ct, Bt) => W.indexOf(ct.key) - W.indexOf(Bt.key));
    or = /* @__PURE__ */ new Map();
    const H = (ct, Bt) => {
      if (or.set(ct.key, Bt), Object.assign(ct.el.style, { width: Bt.w + "px", height: Bt.h + "px" }), ue != null && ue.on && ue.key === ct.key) {
        ds(Bt);
        return;
      }
      Object.assign(ct.el.style, { left: Bt.x + "px", top: Bt.y + "px" });
    }, I = a ? e : Math.round((2 * aa.col + aa.inner) * S), D = Math.round(aa.row * S), Q = Xl(), L = Kl[Q], kt = cs(), Zt = on("byFloor"), Rt = $l() === "stacked" && !a && z.length > 0;
    let Kt = 0, be = 0, Dt = f;
    z.forEach((ct) => {
      ct.el.classList.add("tfBoardItem"), ct.el.dataset.rows = 5, ct.el.dataset.cols = 2, ct.el.toggleAttribute("data-narrow", !1);
      let Bt = D;
      if ((a || ct.key === "favs") && (Object.assign(ct.el.style, { width: I + "px", height: "" }), Bt = ct.el.offsetHeight), Rt) {
        H(ct, { x: 0, y: Dt, w: I, h: Bt }), Dt += Bt + d;
        return;
      }
      Kt && Kt + I > e && (f += be + d, Kt = 0, be = 0), H(ct, { x: Kt, y: f, w: I, h: Bt }), Kt += I + d, be = Math.max(be, Bt);
    }), z.length && !Rt && (f += be + d);
    const Wt = Rt ? I + d : 0, Ze = Rt ? e - I - d : e, Ga = a ? Math.floor((e - d) / 2) : Math.round(L.w * S), ui = Math.round(L.h * S), hr = a ? 2 : Math.max(1, Math.floor((Ze + d) / (Ga + d))), hi = new Map(i.filter((ct) => C(ct.key)).map((ct) => [ct.key, ct])), gr = (Zt ? Mf() : [{ id: "", name: "", rooms: u }]).map((ct) => ({ ...ct, cards: ct.rooms.map((Bt) => hi.get("room:" + Bt.id)).filter(Boolean) })).filter((ct) => ct.cards.length), Ks = kt === "bento", Xs = Ks && on("bentoMixed"), xu = Ks && Zt && on("bentoBoxes"), ku = kt === "columns" && Zt && !a, br = 12, Mu = (ct) => ct.name ? aa.floorHead + aa.floorGap : 0, $s = (ct, Bt, we) => {
      const le = /* @__PURE__ */ new Set(), de = [];
      ct.cards.forEach((It, Ho) => {
        const Ke = Xs && Ho === 0 && Bt >= 2 && ct.cards.length > 1, No = Ke ? 2 : 1, mi = Ke && !a ? 2 : 1;
        It.el.classList.remove("hcAreaS", "hcAreaM", "hcAreaL", "hcAreaBig"), It.el.classList.add("hcArea" + Q.toUpperCase()), It.el.classList.toggle("hcAreaBig", Ke), It.el.style.setProperty("--hc-k", String(S)), It.el.classList.add("tfBoardItem"), It.el.dataset.rows = mi > 1 ? 10 : 5, It.el.dataset.cols = No, It.el.toggleAttribute("data-narrow", !1);
        for (let gi = 0; ; gi++) {
          const al = [...Array(Math.max(0, Bt - No + 1)).keys()].find((ol) => [...Array(No).keys()].every((nl) => [...Array(mi).keys()].every((_u) => !le.has(gi + _u + "," + (ol + nl)))));
          if (al != null) {
            [...Array(No).keys()].forEach((ol) => [...Array(mi).keys()].forEach((nl) => le.add(gi + nl + "," + (al + ol)))), de.push({ it: It, r: gi, c: al, sc: No, sr: mi });
            break;
          }
        }
      });
      const Re = Math.max(0, ...de.map((It) => It.r + It.sr));
      Ks && !a && de.forEach((It) => {
        for (; It.r + It.sr < Re && !le.has(It.r + It.sr + "," + It.c) && It.sc === 1; )
          le.add(It.r + It.sr + "," + It.c), It.sr++;
      }), de.forEach((It) => Object.assign(It.it.el.style, { width: It.sc * we + (It.sc - 1) * d + "px", height: a ? "" : It.sr * ui + (It.sr - 1) * d + "px" }));
      const sn = [...Array(Re)].map(() => a ? 0 : ui);
      a && de.forEach((It) => {
        sn[It.r] = Math.max(sn[It.r], It.it.el.offsetHeight);
      });
      const ln = [];
      let ho = Mu(ct);
      return sn.forEach((It, Ho) => {
        ln[Ho] = ho, ho += It + d;
      }), { h: ho - (Re ? d : 0), places: de.map((It) => ({ it: It.it, x: It.c * (we + d), y: ln[It.r], w: It.sc * we + (It.sc - 1) * d, h: sn.slice(It.r, It.r + It.sr).reduce((Ho, Ke) => Ho + Ke, 0) + (It.sr - 1) * d })) };
    }, Js = new Map([...E.querySelectorAll(":scope > .hcFloor")].map((ct) => [ct.dataset.floor, ct])), Qs = new Map([...E.querySelectorAll(":scope > .hcFloorBox")].map((ct) => [ct.dataset.floor, ct])), Xc = [], Su = (ct, Bt, we, le) => {
      if (!ct.name) return;
      let de = Js.get(ct.id);
      Js.delete(ct.id), de || (de = Object.assign(document.createElement("div"), { className: "hcFloor" }), de.dataset.floor = ct.id, E.appendChild(de)), de.dataset.sig !== ct.name && (de.dataset.sig = ct.name, de.innerHTML = '<h2 class="hcFloorName">' + q(ct.name) + "</h2>"), Object.assign(de.style, { left: Bt + "px", top: we + "px", width: le + "px" }), Xc.push(de);
    }, Au = (ct, Bt, we, le, de) => {
      let Re = Qs.get(ct.id);
      Qs.delete(ct.id), Re || (Re = Object.assign(document.createElement("div"), { className: "hcFloorBox" }), Re.dataset.floor = ct.id, Re.setAttribute("aria-hidden", "true"), E.prepend(Re)), Object.assign(Re.style, { left: Bt + "px", top: we + "px", width: le + "px", height: de + "px" });
    }, Cu = (ct) => parseFloat(getComputedStyle(ct.cards[0].el).paddingLeft) || 0, tl = (ct, Bt, we, le, de = 0) => {
      Su(ct, we + de, le, (Bt.w ?? e) - de), Bt.places.forEach((Re) => H(Re.it, { x: we + Re.x, y: le + Re.y, w: Re.w, h: Re.h }));
    };
    if (gr.length && z.length && !Rt && (f += aa.floorTop), ku) {
      let ct = 0, Bt = f;
      gr.forEach((we) => {
        const le = { ...$s(we, 1, Ga), w: Ga };
        ct && ct + Ga > Ze && (f = Bt + d + aa.floorTop, ct = 0), tl(we, le, Wt + ct, f), Bt = Math.max(Bt, f + le.h), ct += Ga + d;
      }), f = Bt + d;
    } else if (xu) {
      const ct = Array(hr).fill(f);
      gr.forEach((Bt) => {
        const we = Bt.cards.length + (Xs && Bt.cards.length > 1 ? 3 : 0), le = a ? 2 : Math.min(hr, Math.max(Xs && Bt.cards.length > 1 ? 2 : 1, we <= 3 ? we : Math.ceil(we / 2))), de = le * (Ga + d) - d, Re = Math.floor((de - 2 * br - (le - 1) * d) / le), sn = { ...$s(Bt, le, Re), w: de - 2 * br };
        let ln = 0, ho = 1 / 0;
        for (let Ke = 0; Ke + le <= hr; Ke++) {
          const No = Math.max(...ct.slice(Ke, Ke + le));
          No < ho && (ho = No, ln = Ke);
        }
        const It = Wt + ln * (Ga + d), Ho = sn.h + 2 * br;
        Au(Bt, It, ho, de, Ho), tl(Bt, sn, It + br, ho + br, Cu(Bt));
        for (let Ke = ln; Ke < ln + le; Ke++) ct[Ke] = ho + Ho + d;
      }), f = Math.max(f, ...ct);
    } else
      gr.forEach((ct, Bt) => {
        Bt && (f += aa.floorTop);
        const we = $s(ct, hr, Ga);
        tl(ct, { ...we, w: Ze }, Wt, f), f += we.h + d;
      });
    Rt && (f = Math.max(f, Dt)), Js.forEach((ct) => ct.remove()), Qs.forEach((ct) => ct.remove()), ue != null && ue.on || ds(null), E.style.height = Math.max(0, f - d) + "px", ls([...k.map((ct) => ct.el), ...z.map((ct) => ct.el), ...Xc, ...gr.flatMap((ct) => ct.cards.map((Bt) => Bt.el))]), fs(!1), t.forEach((ct) => [...ct.el.children].forEach((Bt) => Bt.toggleAttribute("inert", po)));
    const el = E.querySelector(".tfDash-favs>.activityRows");
    el && (el.classList.toggle("hcFadeList", !m), Ql(el)), requestAnimationFrame(() => g.classList.add("tfBoardReady")), t.forEach((ct) => ps.observe(ct.el)), Me();
  }
  const Qr = () => {
    rs || (rs = !0, requestAnimationFrame(() => {
      rs = !1, Pe();
    }));
  }, ps = new ResizeObserver(() => {
    Ut || Qr();
  });
  function Cf(t, e, a) {
    const n = a + se, i = t * a + (t - 1) * se, d = e * Ta - se, l = se / 2, f = n / Math.max(1, Math.round(n / (Ta / 4))), m = Ta / 4, k = 6;
    let S = "";
    for (let v = 0; v <= t; v++) for (let M = 0; M <= e; M++) {
      const W = v * n - l, z = M * Ta - l;
      S += "M" + (W - k) + " " + z + "H" + (W + k) + "M" + W + " " + (z - k) + "V" + (z + k);
    }
    return '<svg width="' + i + '" height="' + d + '" viewBox="0 0 ' + i + " " + d + '"><defs><pattern id="tfGridDots" patternUnits="userSpaceOnUse" x="' + -l + '" y="' + -l + '" width="' + f.toFixed(3) + '" height="' + m + '"><circle cx="0" cy="0" r="1.4"></circle><circle cx="' + f.toFixed(3) + '" cy="0" r="1.4"></circle><circle cx="0" cy="' + m + '" r="1.4"></circle><circle cx="' + f.toFixed(3) + '" cy="' + m + '" r="1.4"></circle></pattern></defs><rect class="tfGridDots" x="' + -l + '" y="' + -l + '" width="' + (i + se) + '" height="' + (d + se) + '" fill="url(#tfGridDots)"></rect><path class="tfGridCross" d="' + S + '"></path></svg>';
  }
  function fs(t, e = [], a = /* @__PURE__ */ new Map(), n = 0, i = 1, d = er) {
    E.querySelectorAll(".tfEditChips").forEach((S) => {
      (!t || !S.closest(".tfBoardItem")) && S.remove();
    }), E.querySelectorAll(".tfFavHides").forEach((S) => S.remove()), E.querySelectorAll(".tfBoardItem").forEach((S) => [...S.children].forEach((v) => {
      v.classList.contains("tfEditChips") || v.toggleAttribute("inert", t);
    }));
    let l = E.querySelector(".tfBoardCells"), f = E.querySelector(".tfBoardLand");
    if (!t)
      return l == null || l.remove(), f == null || f.remove(), Wa(), n;
    const m = Jr + cf;
    if (l || (l = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), l.setAttribute("aria-hidden", "true"), E.prepend(l)), l.style.top = Po + "px", l.dataset.size !== i + "x" + m + "x" + d && (l.dataset.size = i + "x" + m + "x" + d, l.innerHTML = Cf(i, m, d)), n = Math.max(n, Po + m * Ta - se), e.forEach((S) => {
      const v = S.el;
      !v || v.querySelector(":scope > .tfEditChips") || v.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + _i + '</span><button class="tfEditChip" type="button" data-board-more="' + q(S.key) + '" aria-label="' + q(ba(S.key)) + ' options" aria-haspopup="menu">' + u0 + "</button></div>");
    }), Ut && a.has(Ut.key)) {
      f || (f = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), E.appendChild(f));
      const S = a.get(Ut.key);
      Object.assign(f.style, { left: S.x + "px", top: S.y + "px", width: S.w + "px", height: S.h + "px" });
    } else f == null || f.remove();
    const k = E.querySelector(".tfDash-favs.tfBoardItem:not(.tfBoardHidden)");
    if (k) {
      const S = k.getBoundingClientRect();
      k.insertAdjacentHTML("beforeend", '<div class="tfFavHides">' + [...k.querySelectorAll('[data-k^="fav:"]')].map((v) => {
        const M = v.getBoundingClientRect(), W = v.dataset.k.slice(4);
        return '<button class="tfFavHide" type="button" data-fav-hide="' + q(W) + '" aria-label="Hide ' + q(xt(W)) + ' from the dashboard" style="left:' + Math.round(M.right - S.left - 42) + "px;top:" + Math.round(M.top - S.top + (M.height - 32) / 2) + 'px">' + tp + "</button>";
      }).join("") + "</div>");
    }
    return n;
  }
  let us = "";
  function hs(t) {
    ea = t, t || (Ut = null, io = so = !1, Wa()), Pe(), t ? us = JSON.stringify(gt) : us && JSON.stringify(gt) !== us && wa("Changes saved");
  }
  function _f(t, e) {
    var I, D;
    Wa();
    const a = Qo.get(t), { n } = tn(E.clientWidth), i = oe(), d = i.spans[t] ?? (C(t) ? 1 : 2);
    if (!a) return;
    const l = a.cols >= n, f = (Q, L, kt) => '<button type="button" role="menuitem" data-board-act="' + Q + '"' + (kt ? " disabled" : "") + ">" + L + "</button>", m = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    m.setAttribute("role", "menu"), m.setAttribute("aria-label", ba(t) + " options");
    const k = E.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]'), S = zl(t), v = ar(t), M = '<div class="tfHeight" role="group" aria-label="Height"><span class="tfHeightLabel" aria-hidden="true">Height</span><div class="tfHeightTabs">' + jl.map((Q, L) => '<button type="button" role="menuitemradio" aria-checked="' + (L + 1 === v) + '" aria-label="' + Q + ", " + (L + 1) + (L ? " rows" : " row") + '" data-board-act="h:' + (L + 1) + '"' + (L < S ? "" : " disabled") + ">" + Q + "</button>").join("") + "</div></div>", W = df.includes(t) || C(t) ? '<div class="tfHeight tfWidth" role="group" aria-label="Width"><span class="tfHeightLabel" aria-hidden="true">Width</span><div class="tfHeightTabs">' + pf.map((Q, L) => '<button type="button" role="menuitemradio" aria-checked="' + (L + 1 === Math.min(d, n)) + '" aria-label="' + Q + ", " + (L + 1) + (L ? " columns" : " column") + '" data-board-act="w:' + (L + 1) + '"' + (L < n ? "" : " disabled") + ">" + Q + "</button>").join("") + "</div></div>" : "", z = t === "radar" ? '<div class="tfHeight tfSource" role="group" aria-label="Source"><span class="tfHeightLabel" aria-hidden="true">Source</span><div class="tfSourceList">' + Lr().map(([Q, L]) => '<button type="button" role="menuitemradio" aria-checked="' + (Q === Vn()) + '" data-board-act="src:' + q(Q) + '">' + q(L) + "</button>").join("") + "</div></div>" : "";
    m.innerHTML = M + W + z + (t === "energy" ? f("graph", (((I = i.opts.energy) == null ? void 0 : I.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + f("left", "Move left", l || a.col === 0) + f("right", "Move right", l || a.col + a.cols >= n) + f("up", "Move up", a.row <= 0) + f("down", "Move down") + (k ? f("remove", "Remove") : f("hide", "Hide")), E.appendChild(m);
    const H = Math.min(a.x + a.w - m.offsetWidth, E.clientWidth - m.offsetWidth);
    Object.assign(m.style, { left: Math.max(0, H) + "px", top: a.y + 28 + "px" }), Ue = { key: t, menu: m, opener: e }, (D = m.querySelector("button:not([disabled])")) == null || D.focus();
  }
  function Wa(t) {
    if (!Ue) return;
    const { menu: e, opener: a } = Ue;
    Ue = null, e.remove(), t && (a == null || a.focus());
  }
  const nn = () => Object.fromEntries([...Qo].map(([t, e]) => [t, { col: e.col, row: e.row }]));
  function Tf(t, e) {
    var f, m, k;
    if (e === "remove") {
      Wa(), Df(t);
      return;
    }
    const a = gt, n = oe(), i = nn(), d = i[t] || { col: 0, row: 0 };
    e.startsWith("w:") && (n.spans = { ...n.spans, [t]: e === "w:full" ? "full" : Number(e.slice(2)) }), e.startsWith("h:") && (n.opts = { ...n.opts, [t]: { ...n.opts[t] || {}, h: Number(e.slice(2)), tall: void 0 } }), e.startsWith("src:") && (n.opts = { ...n.opts, radar: { ...n.opts.radar || {}, source: e.slice(4) } }), e === "graph" && (n.opts = { ...n.opts, energy: { ...n.opts.energy || {}, graph: (((f = n.opts.energy) == null ? void 0 : f.graph) || "above") === "above" ? "below" : "above" } }), e === "left" && (i[t] = { ...d, col: d.col - 1 }), e === "right" && (i[t] = { ...d, col: d.col + 1 }), e === "up" && (i[t] = { ...d, row: d.row - 1 }), e === "down" && (i[t] = { ...d, row: d.row + 1 }), e === "hide" && (n.hidden = [.../* @__PURE__ */ new Set([...n.hidden, t])]), ["left", "right", "up", "down"].includes(e) && (Ut = { key: t, col: i[t].col, row: i[t].row }), Cn(n, i), Ut && (Pe(), Ut = null, Cn(oe(), nn()));
    const l = /^[hw]:/.test(e) && !je() && (Ue == null ? void 0 : Ue.menu.querySelector('[data-board-act="' + CSS.escape(e) + '"]'));
    if (l) {
      const S = Ue;
      l.parentElement.querySelectorAll("[aria-checked]").forEach((v) => v.setAttribute("aria-checked", String(v === l))), setTimeout(() => {
        Ue === S && Wa();
      }, ke.tabs.dur);
    } else Wa();
    e === "graph" && (pa.delete("dash:energy"), Te()), e.startsWith("src:") && ((m = me == null ? void 0 : me.get("radar")) == null || m.refresh(), he == null || he.refresh()), e.startsWith("h:") && t.includes(".") && Te(), Pe(), e !== "hide" ? (k = E.querySelector('[data-board-more="' + CSS.escape(t) + '"]')) == null || k.focus() : wa(ba(t) + " hidden", ri(a));
  }
  const ec = (t) => {
    var e;
    return Ao.includes(t) && !(((e = gt.dash) == null ? void 0 : e.cells) || {})[t] ? " added" : " put back";
  };
  function ms(t) {
    const e = oe(), a = ba(t) + ec(t);
    en({ ...e, hidden: e.hidden.filter((n) => n !== t) }), Pe(), wa(a);
  }
  const ti = () => oe().tiles || [...E.querySelectorAll(".tfDashTiles > [data-k]")].map((t) => t.dataset.k).filter((t) => !oe().hidden.includes(t));
  function ac(t, e) {
    const a = oe();
    Cn({ ...a, tiles: t, hidden: a.hidden.filter((n) => !n.includes(".")) }, e), Te(), Me();
  }
  const oc = (t) => {
    ac([...ti().filter((e) => e !== t), t], nn()), wa(ba(t) + " added"), Rf(t);
  }, Df = (t) => {
    const e = gt, a = nn();
    delete a[t], ac(ti().filter((n) => n !== t), a), wa(ba(t) + " removed", ri(e));
  };
  let gs = 0;
  function wa(t, e = null) {
    var l;
    const a = p("toast");
    if (!a) return;
    if (qh(a, t), e) {
      const f = Object.assign(document.createElement("button"), { type: "button", className: "toastAction", textContent: "Undo" });
      f.addEventListener("click", () => {
        clearTimeout(gs), a.classList.remove("show", "withAction"), e();
      }), a.appendChild(f);
    }
    const n = g.getBoundingClientRect(), i = (l = o.querySelector(".bottomNav")) == null ? void 0 : l.getBoundingClientRect(), d = Qt.classList.contains("open") && !ja ? Math.min(n.right, Qt.getBoundingClientRect().left) : n.right;
    a.style.left = (n.left + d) / 2 + "px", a.style.bottom = (i != null && i.height ? window.innerHeight - i.top + 12 : 26) + "px", a.classList.add("tfToast", "show"), a.classList.toggle("withAction", !!e), Wh(a), clearTimeout(gs), gs = setTimeout(() => a.classList.remove("show", "withAction"), e ? 5e3 : ke.confirm.stay);
  }
  const Lf = 700, Ef = 1e3, oa = Object.assign(document.createElement("div"), { className: "tfTooltip", hidden: !0 });
  oa.setAttribute("role", "tooltip"), oa.setAttribute("aria-hidden", "true"), g.appendChild(oa);
  let ei = null, nr = 0, _n = 0, nc = -1 / 0;
  const bs = (t) => {
    if (t.nodeType !== 1) return !1;
    const e = getComputedStyle(t);
    return e.textOverflow === "ellipsis" && t.scrollWidth > t.clientWidth + 1 || e.webkitLineClamp !== "none" && t.scrollHeight > t.clientHeight + 1;
  }, Bf = (t) => {
    for (let e = t; e && e !== g; e = e.parentElement) if (bs(e)) return e;
    return null;
  };
  function rc(t, e) {
    clearTimeout(nr), clearTimeout(_n);
    const a = () => {
      if (!t.isConnected) return;
      ei = t, oa.textContent = e, oa.hidden = !1;
      const n = t.getBoundingClientRect(), i = oa.getBoundingClientRect(), d = n.top - i.height - 8 >= 8 ? n.top - i.height - 8 : n.bottom + 8;
      oa.style.left = Math.max(8, Math.min(window.innerWidth - i.width - 8, n.left + n.width / 2 - i.width / 2)) + "px", oa.style.top = d + "px";
    };
    !oa.hidden || performance.now() - nc < Ef ? a() : nr = setTimeout(a, Lf);
  }
  function ai() {
    clearTimeout(nr), clearTimeout(_n), oa.hidden || (nc = performance.now()), oa.hidden = !0, ei = null;
  }
  o.addEventListener("pointerover", (t) => {
    if (t.pointerType === "touch") return;
    if (oa.contains(t.target)) {
      clearTimeout(_n);
      return;
    }
    const e = Bf(t.target);
    if (e && Vt.names === "scroll" && e.matches(oi)) {
      ws(e);
      return;
    }
    if (e) {
      e !== ei ? rc(e, e.textContent.trim()) : clearTimeout(_n);
      return;
    }
    clearTimeout(nr), clearTimeout(_n), _n = setTimeout(ai, 120);
  }), o.addEventListener("focusin", (t) => {
    var n;
    const e = t.target;
    if (!((n = e.matches) != null && n.call(e, ":focus-visible"))) return;
    let a = [e, ...e.querySelectorAll("*")].filter(bs);
    Vt.names === "scroll" && (a.filter((i) => i.matches(oi)).forEach(ws), a = a.filter((i) => !i.matches(oi))), a.length && rc(e, a.map((i) => i.textContent.trim()).join(" · "));
  }), o.addEventListener("focusout", (t) => {
    t.target === ei && ai();
  }), o.addEventListener("keydown", (t) => {
    t.key === "Escape" && !oa.hidden && (t.stopPropagation(), ai());
  }, !0), window.addEventListener("scroll", () => {
    (!oa.hidden || nr) && ai();
  }, { capture: !0, passive: !0 });
  const oi = ".activityRowName,.activityRowMeta", ni = /* @__PURE__ */ new WeakSet();
  function ws(t) {
    var a;
    if (Vt.names !== "scroll" || ni.has(t) || t.closest("[inert]") || (a = window.matchMedia) != null && a.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    ni.add(t);
    const e = () => Promise.all([t.closest(".hcAreaPanel"), t.closest(".panelExpanded")].filter(Boolean).flatMap((n) => n.getAnimations()).map((n) => n.finished.catch(() => {
    })));
    setTimeout(async () => {
      await e();
      const n = t.isConnected && !t.closest("[inert]") ? t.scrollWidth - t.clientWidth : 0;
      if (n < 2) {
        ni.delete(t);
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
        t.style.textOverflow = "", ni.delete(t);
      };
    }, 600);
  }
  const ic = new IntersectionObserver((t) => t.forEach((e) => {
    e.isIntersecting && !e.target.closest("[inert]") && (ic.unobserve(e.target), ws(e.target));
  }), { threshold: 1 });
  let vs = !1;
  new MutationObserver(() => {
    vs || Vt.names !== "scroll" || (vs = !0, setTimeout(() => {
      vs = !1, o.querySelectorAll(oi).forEach((t) => {
        !t.dataset.glided && bs(t) && (t.dataset.glided = "1", ic.observe(t));
      });
    }, 300));
  }).observe(o, { childList: !0, subtree: !0 });
  const ri = (t) => () => {
    gt = t, Ne(), Te(), Pe(), Me();
  };
  function Rf(t) {
    const e = () => E.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]');
    setTimeout(() => {
      var l;
      const a = e();
      if (!a) return;
      const n = (l = window.matchMedia) == null ? void 0 : l.call(window, "(prefers-reduced-motion: reduce)").matches, i = a.getBoundingClientRect();
      (i.top < 0 || i.bottom > window.innerHeight) && a.scrollIntoView({ behavior: n ? "auto" : "smooth", block: "center" });
      const d = (f) => "0 0 0 4px color-mix(in srgb,var(--primary) " + f + "%,transparent),0 0 24px color-mix(in srgb,var(--primary) " + f + "%,transparent)";
      a.animate([{ boxShadow: d(55) }, { boxShadow: d(0) }], { duration: 1500, easing: n ? "steps(1, end)" : "ease-out" });
    }, Pf(t) ? 260 : 0);
  }
  function Pf(t) {
    const e = Qo.get(t);
    if (!e || !Qt.classList.contains("open") || ja) return !1;
    const { n: a, w: n } = tn(E.clientWidth), i = Qt.getBoundingClientRect().left - E.getBoundingClientRect().left, d = (m) => m * (n + se) + e.cols * n + (e.cols - 1) * se <= i;
    if (d(e.col)) return !1;
    const l = /* @__PURE__ */ new Set();
    Qo.forEach((m, k) => {
      if (k !== t) for (let S = m.row; S < m.row + m.rows; S++) for (let v = m.col; v < m.col + m.cols; v++) l.add(v + "," + S);
    });
    const f = (m, k) => {
      for (let S = k; S < k + e.rows; S++) for (let v = m; v < m + e.cols; v++) if (l.has(v + "," + S)) return !1;
      return !0;
    };
    for (let m = 0; m <= Jr; m++) for (let k = 0; k + e.cols <= a && d(k); k++)
      if (f(k, m))
        return Cn(oe(), { ...nn(), [t]: { col: k, row: m } }), Pe(), !0;
    return !1;
  }
  const sc = /^(light|switch|cover|climate|fan|lock|valve|media_player|humidifier|vacuum|scene|script|alarm_control_panel|water_heater|input_boolean)\./, Hf = [["page", "Page"], ["cards", "Cards"], ["areas", "Areas"], ["favs", "Favourites"]];
  let ys = "page";
  const Nf = (t) => t.matches('[data-tray="welcome"],[data-tray="phone"]') ? "page" : t.querySelector("[data-room-add]") ? "areas" : t.querySelector('[data-tray="favs"]') ? "favs" : "cards";
  function lc(t = !1) {
    const e = Qt.querySelector(".tfTrayInner"), a = Qt.querySelector(".hcTrayTabs"), n = a.querySelector(".rubberIndicator");
    let i = !0;
    e.querySelectorAll(":scope>.tfTraySection").forEach((l) => {
      l.hidden = Nf(l) !== ys, l.classList.toggle("hcFirst", !l.hidden && i), l.hidden || (i = !1);
    }), a.querySelectorAll("[data-tray-tab]").forEach((l) => {
      const f = l.dataset.trayTab === ys;
      l.classList.toggle("active", f), l.setAttribute("aria-selected", String(f));
    });
    const d = a.querySelector(".tab.active");
    d != null && d.offsetWidth && (n.style.transition = "none", t ? Ri(n, n.offsetLeft, n.offsetWidth, d.offsetLeft, d.offsetWidth) : (n.style.left = d.offsetLeft + "px", n.style.width = d.offsetWidth + "px"));
  }
  const Qt = Object.assign(document.createElement("aside"), { className: "tfEditTray" });
  Qt.setAttribute("aria-label", "Edit custom dashboard"), Qt.innerHTML = '<button class="tfTrayTuck" type="button" data-tray-tuck></button><div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit custom dashboard</div><button class="pill" type="button" data-tray-done>Done</button></div><div class="tabs rubberTabs hcTrayTabs" role="tablist" aria-label="Edit custom dashboard"><div class="rubberIndicator" aria-hidden="true"></div>' + Hf.map(([t, e], a) => '<button class="tab segBtn' + (a ? "" : " active") + '" type="button" role="tab" aria-selected="' + !a + '" data-tray-tab="' + t + '">' + e + "</button>").join("") + '</div><section class="tfTraySection" data-tray="welcome"></section><section class="tfTraySection" data-tray="cards"></section><section class="tfTraySection" data-tray="weather"></section><section class="tfTraySection"><div class="sectionLabel">Tiles</div><p class="tfTrayNote">Remove a tile from its ⋯.</p><button class="pill tfTrayAdd hcAddBtn" type="button" data-tile-add aria-expanded="false">' + Ti + '<span>Add tile</span></button><div class="tfTrayPick" data-pick="tiles" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-tile-search><ul class="tfTrayList" data-tray="tilepick"></ul></div></section><section class="tfTraySection"><div class="sectionLabel">Areas</div><p class="tfTrayNote">Which areas the Areas card shows, and one area on its own instead.</p><button class="pill tfTrayAdd" type="button" data-area-choose aria-expanded="false">Choose areas</button><button class="pill tfTrayAdd hcAddBtn" type="button" data-room-add aria-expanded="false">' + Ti + '<span>Add area</span></button><ul class="tfTrayList" data-tray="roompick" hidden></ul></section><section class="tfTraySection" data-tray="phone"></section><section class="tfTraySection"><div class="sectionLabel">Favourites</div><ul class="tfTrayList" data-tray="favs"></ul><button class="pill tfTrayAdd hcAddBtn" type="button" data-fav-add aria-expanded="false">' + Ti + '<span>Add favourite</span></button><div class="tfTrayPick" data-pick="favs" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-fav-search><ul class="tfTrayList" data-tray="pick"></ul></div><div class="toggleRow tfTraySuggest" data-tray="suggest"></div></section></div>', g.appendChild(Qt);
  const na = Object.assign(document.createElement("div"), { className: "card tfTrayPop" });
  na.setAttribute("role", "dialog"), na.setAttribute("aria-label", "Areas"), na.hidden = !0, g.appendChild(na);
  const ii = () => Qt.querySelector("[data-area-choose]");
  function Of() {
    const t = new Set(h().map((e) => e.id));
    na.innerHTML = '<div class="tfTrayPopTitle">Areas</div>' + u.map((e) => '<div class="tfTrayPopRow"><button class="switch' + (t.has(e.id) ? " on" : "") + '" type="button" role="switch" aria-checked="' + t.has(e.id) + '" aria-label="' + q(e.name) + '" data-area-on="' + q(e.id) + '"></button><span class="tfIcon"><span class="tfAreaGlyph"' + ge("area:" + e.id, e.icon || "mdi:texture-box", e.name) + '></span></span><span class="tfTrayPopName">' + q(e.name) + "</span></div>").join(""), Aa(na);
  }
  function xs() {
    var t;
    na.hidden || (na.hidden = !0, (t = ii()) == null || t.setAttribute("aria-expanded", "false"));
  }
  function If() {
    if (!na.hidden) {
      xs();
      return;
    }
    Of(), na.hidden = !1, ii().setAttribute("aria-expanded", "true");
    const t = ii().getBoundingClientRect();
    na.style.top = Math.max(16, Math.min(t.top - 12, innerHeight - na.offsetHeight - 16)) + "px";
  }
  na.addEventListener("click", (t) => {
    var i;
    const e = t.target.closest("[data-area-on]");
    if (!e) return;
    const a = !e.classList.contains("on"), n = new Set(((i = gt.dash) == null ? void 0 : i.areasOff) || []);
    a ? n.delete(e.dataset.areaOn) : n.add(e.dataset.areaOn), en({ ...oe(), areasOff: [...n] }), e.classList.toggle("on", a), e.setAttribute("aria-checked", String(a)), Te();
  }), na.addEventListener("keydown", (t) => {
    var e;
    t.key === "Escape" && (t.stopPropagation(), xs(), (e = ii()) == null || e.focus());
  });
  let ja = !1, io = !1, so = !1, rr = !1, Ye = null, lo = !1;
  const ks = {}, co = (t, e) => {
    if (ks[t] === e) return;
    ks[t] = e;
    const a = Qt.querySelector('[data-tray="' + t + '"]');
    a.innerHTML = e, Aa(a);
  }, Ms = (t, e) => '<span class="tfTrayName"><span class="activityRowName">' + q(xt(t)) + '</span><span class="activityRowMeta">' + q(e) + "</span></span>", Ff = (t, e, a) => '<li class="tfTrayFav' + (e ? " off" : "") + '" data-tray-fav="' + q(t) + '"><span class="tfTrayGrip" aria-hidden="true">' + _i + '</span><span class="tfIcon"' + ge(t, la(t)) + "></span>" + Ms(t, e ? "Hidden" + (_t.get(t) ? " · " + _t.get(t) : "") : _t.get(t) || Le(t)) + '<button class="tfTrayBtn" type="button" data-fav-eye="' + q(t) + '" aria-pressed="' + !e + '" aria-label="' + (e ? "Show " : "Hide ") + q(xt(t)) + ' on the dashboard">' + (e ? tp : h0) + "</button>" + (a ? '<button class="tfTrayBtn" type="button" data-fav-remove="' + q(t) + '" aria-label="Remove ' + q(xt(t)) + ' from favourites">' + xl + "</button>" : "<span></span>") + "</li>";
  function Ss(t, e, a, n) {
    const i = t.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return Object.keys(x).filter((l) => e(l) && !a.has(l) && x[l].state !== "unavailable").filter((l) => {
      const f = (xt(l) + " " + (_t.get(l) || "") + " " + l).toLowerCase();
      return i.every((m) => f.includes(m));
    }).sort((l, f) => (_t.get(l) || "~").localeCompare(_t.get(f) || "~") || xt(l).localeCompare(xt(f))).slice(0, 40).map((l) => '<li><button class="tfTrayPickItem" type="button" ' + n + '="' + q(l) + '"><span class="tfIcon"' + ge(l, la(l)) + "></span>" + Ms(l, _t.get(l) || "—") + "</button></li>").join("") || '<li class="tfTrayNote">Nothing matches.</li>';
  }
  const qf = "https://www.home-assistant.io/dashboards/", cc = {
    welcome: ["Welcome message", "<p>Shows a <strong>greeting</strong> above your home's name: good morning, afternoon or evening, then your name.</p>"],
    weather: ["Weather", "<p>The forecast card: now, the next hours in a sentence and the week ahead. Its <strong>Now</strong> opens the Weather page.</p>"],
    energy: ["Energy today", "<p>What your home has used and made today, hour by hour, with <strong>Electricity</strong>, <strong>Solar</strong>, <strong>Gas</strong> and <strong>Water</strong> under it. From your Energy dashboard.</p>"],
    favs: ["Favourite entities", "<p>The devices you use most, at the top of Home.</p><ul><li><strong>Drag</strong> one to change the order</li><li>Press <strong>×</strong> to take it off</li></ul>"],
    suggest: ["Suggested entities", "<p>Fills Favourites with devices you often use, after your own. They change as you use your home.</p>"],
    sums: ["Summaries", "<p>Each summary sums up one kind of thing across your home, like <strong>Lights</strong>: how many are on.</p><ul><li>Switch one off to hide it</li><li><strong>Drag</strong> one to change the order</li></ul>"]
  }, ye = Object.assign(document.createElement("aside"), { className: "tfEditTray hcHomeTray" });
  ye.setAttribute("aria-label", "Edit Home page"), ye.toggleAttribute("inert", !0);
  let po = !1, Da = !1, As = "", Cs = null, si = "page";
  function _s(t, e) {
    const a = ye.querySelector(".hcTrayTabs"), n = a == null ? void 0 : a.querySelector(".rubberIndicator"), i = a == null ? void 0 : a.querySelector(".tab.active");
    if (!(i != null && i.offsetWidth)) {
      requestAnimationFrame(() => {
        var d;
        return ((d = ye.querySelector(".hcTrayTabs .tab.active")) == null ? void 0 : d.offsetWidth) && _s(t, e);
      });
      return;
    }
    n.style.transition = "none", t && e ? Ri(n, e.left, e.width, i.offsetLeft, i.offsetWidth) : (n.style.left = i.offsetLeft + "px", n.style.width = i.offsetWidth + "px");
  }
  const rn = (t) => '<button class="hcInfoBtn" type="button" data-info="' + t + '" aria-expanded="false" aria-label="About ' + q(cc[t][0]) + '">' + ep + "</button>", Va = (t, e, a) => '<button class="switch' + (t ? " on" : "") + '" type="button" role="switch" aria-checked="' + t + '" aria-label="' + q(e) + '" ' + a + "></button>", dc = (t) => '<button class="tfTrayBtn hcHeGrip" type="button" data-he-grip aria-label="Move ' + q(t) + '. Use the up and down arrows">' + _i + "</button>", pc = () => {
    var t;
    return ((t = gt.home) == null ? void 0 : t.sumsWidth) === "fit";
  }, Ts = () => {
    var t;
    return ((t = gt.home) == null ? void 0 : t.favsAs) === "strip";
  }, ir = (t, e, a, n) => '<div class="hcHeLine hcHeChoiceLine"><span class="activityRowName">' + t + '</span><div class="themeChoice hcHeChoice" role="group" aria-label="' + q(t) + '">' + n.map(([i, d]) => '<button class="wxLayoutBtn" type="button" ' + e + '="' + i + '" aria-pressed="' + (a === i) + '">' + d + "</button>").join("") + "</div></div>", fc = () => Ie(!0).filter((t) => xr[t.key]).map((t) => t.key);
  function Tn() {
    var l, f, m, k, S;
    if (!po) return;
    const t = U(), e = (v) => '<li class="hcHeRow" data-he-id="' + q(v) + '">' + dc(xt(v)) + '<span class="tfIcon"' + ge(v, la(v)) + "></span>" + Ms(v, _t.get(v) || Le(v)) + '<button class="tfTrayBtn" type="button" data-he-remove="' + q(v) + '" aria-label="Take ' + q(xt(v)) + ' off Favourites">' + xl + "</button></li>", a = (v) => {
      const M = xr[v];
      return '<li class="hcHeRow hcHeSum" data-he-id="' + q(v) + '"' + (M.colour && hn(M.colour) ? ' style="' + hn(M.colour).slice(1) + '"' : "") + ">" + dc(M.name) + '<span class="tfIcon"' + ge("", M.icon, M.name) + '></span><span class="activityRowName">' + q(M.name) + "</span>" + Va(ae(v), M.name, 'data-he-sum="' + q(v) + '"') + "</li>";
    }, n = ((l = ye.querySelector("[data-he-search]")) == null ? void 0 : l.value) || "", i = [["page", "Page"], ["favs", "Favourites"], ["sums", "Summaries"]], d = {
      page: '<div class="hcHeLine"><span class="activityRowName">Welcome message</span>' + rn("welcome") + Va(ns(), "Welcome message", "data-he-welcome") + "</div>" + // the weather card and Energy today, where the house has them
      (st() ? '<div class="hcHeLine"><span class="activityRowName">Weather</span>' + rn("weather") + Va(!!((f = gt.home) != null && f.weather), "Weather", 'data-he-card="weather"') + "</div>" : "") + (_a != null && _a.length ? '<div class="hcHeLine"><span class="activityRowName">Energy today</span>' + rn("energy") + Va(!!((m = gt.home) != null && m.energy), "Energy today", 'data-he-card="energy"') + "</div>" : "") + ir("Cards", "data-he-cards-as", $l(), [["stacked", "Stacked"], ["rows", "Rows"]]) + '<hr class="hcHeRule"><div class="hcHeLine"><span class="activityRowName">Group by floor</span>' + Va(on("byFloor"), "Group by floor", 'data-he-flag="byFloor"') + "</div>" + ir("Layout", "data-he-area-layout", cs(), [["rows", "Rows"], ["columns", "Columns"], ["bento", "Bento"]]) + (cs() === "bento" ? '<div class="hcHeLine"><span class="activityRowName">Floors as boxes</span>' + Va(on("bentoBoxes"), "Floors as boxes", 'data-he-flag="bentoBoxes"') + '</div><div class="hcHeLine"><span class="activityRowName">Mixed sizes</span>' + Va(on("bentoMixed"), "Mixed sizes", 'data-he-flag="bentoMixed"') + "</div>" : "") + ir("Area cards", "data-he-area-size", Xl(), [["s", "Small"], ["m", "Medium"], ["l", "Large"]]),
      favs: '<div class="hcHeLine"><span class="activityRowName">Show favourites</span>' + Va(((k = gt.home) == null ? void 0 : k.favs) !== !1, "Show favourites", 'data-he-card="favs"') + '</div><hr class="hcHeRule"><div class="hcHeLabel"><span class="activityRowName">Favourite entities</span>' + rn("favs") + "</div>" + ir("Show as", "data-he-favs-as", Ts() ? "strip" : "card", [["card", "Card"], ["strip", "Strip"]]) + '<ul class="tfTrayList hcHeList" data-he-list="favs">' + (t.map(e).join("") || '<li class="tfTrayNote">No favourites yet.</li>') + '</ul><button class="pill tfTrayAdd hcAddBtn" type="button" data-he-add aria-expanded="' + Da + '">' + Ti + '<span>Add favourite</span></button><div class="tfTrayPick" data-he-pick' + (Da ? "" : " hidden") + '><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-he-search value="' + q(n) + '"><ul class="tfTrayList">' + (Da ? Ss(n, (v) => sc.test(v), new Set(t), "data-he-pick-id") : "") + '</ul></div><hr class="hcHeRule"><div class="hcHeLine"><span class="activityRowName">Suggested entities</span>' + rn("suggest") + Va(Ct(), "Suggested entities", "data-he-suggest") + "</div>",
      sums: '<div class="hcHeLine"><span class="activityRowName">Show summaries</span>' + rn("sums") + Va(((S = gt.home) == null ? void 0 : S.sums) !== !1, "Show summaries", 'data-he-card="sums"') + "</div>" + ir("Width", "data-he-sums-width", pc() ? "fit" : "match", [["match", "Match the cards"], ["fit", "Fit the summaries"]]) + '<hr class="hcHeRule"><ul class="tfTrayList hcHeList" data-he-list="sums">' + fc().map(a).join("") + "</ul>"
    };
    ye.querySelector("[data-he-body]").innerHTML = // the note about the areas page first (Matt, 12 Nov: "to the top of the rollover"), as Home Assistant's dialog has it
    '<p class="tfTrayNote hcHeAreasNote">You can rearrange your floors and areas in the order that best represents your house on the <button type="button" class="hcHeLink" data-path="/config/areas/dashboard">areas page</button>.</p><div class="tabs rubberTabs hcTrayTabs" role="tablist" aria-label="Edit Home page"><div class="rubberIndicator" aria-hidden="true"></div>' + i.map(([v, M]) => '<button class="tab segBtn' + (v === si ? " active" : "") + '" type="button" role="tab" aria-selected="' + (v === si) + '" data-he-tab="' + v + '">' + M + "</button>").join("") + '</div><div class="hcHeTabBody" role="tabpanel">' + d[si] + "</div>", _s(!1), Aa(ye);
  }
  const sr = (t) => {
    gt = { ...gt, ...t }, Ne(), Te(), Tn();
  }, La = (t) => sr({ home: { ...gt.home || {}, ...t } });
  function Ds(t) {
    lr(), po = t, Da = !1, ye.classList.toggle("open", t), ye.toggleAttribute("inert", !t), g.classList.toggle("hcHomeEditing", t), w && E && Pe();
    const e = p("dashEditNav"), a = ye.querySelector(".tfTrayHead");
    e && t && (Cs = e.parentElement, a.appendChild(e)), e && !t && Cs && Cs.appendChild(e), e && (e.classList.toggle("active", t), e.setAttribute("aria-pressed", String(t)), e.setAttribute("aria-label", t ? "Done editing Home" : "Edit Home page"), e.title = t ? "Done" : "Edit", e.innerHTML = t ? op : Di), t ? (As = JSON.stringify(gt), Tn()) : As && JSON.stringify(gt) !== As && wa("Changes saved");
  }
  ye.innerHTML = '<div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit Home page</div></div><div class="hcHeBody" data-he-body></div></div>', g.appendChild(ye);
  let fo = null;
  const Ea = Object.assign(document.createElement("div"), { className: "card hcInfoPop", hidden: !0 });
  Ea.setAttribute("role", "dialog"), g.appendChild(Ea);
  function lr() {
    fo && (fo.setAttribute("aria-expanded", "false"), fo = null, Ea.hidden = !0);
  }
  function uc(t) {
    const e = fo;
    if (lr(), e === t) return;
    const [a, n] = cc[t.dataset.info];
    Ea.setAttribute("aria-label", a), Ea.innerHTML = '<div class="hcInfoTitle">' + q(a) + '</div><div class="hcInfoText">' + n + '</div><a class="hcInfoMore" href="' + qf + '" target="_blank" rel="noopener">Learn more</a>', Ea.hidden = !1, fo = t, t.setAttribute("aria-expanded", "true");
    const i = t.getBoundingClientRect(), d = Ea.offsetWidth, l = Ea.offsetHeight;
    Ea.style.left = Math.max(8, Math.min(innerWidth - d - 8, i.left + i.width / 2 - d / 2)) + "px", Ea.style.top = (i.bottom + 8 + l > innerHeight - 8 ? Math.max(8, i.top - 8 - l) : i.bottom + 8) + "px";
  }
  o.addEventListener("pointerdown", (t) => {
    fo && !t.composedPath().some((e) => e === Ea || e === fo) && lr();
  }, !0), o.addEventListener("keydown", (t) => {
    var e;
    if (t.key === "Escape") {
      if (fo) {
        t.stopPropagation();
        const a = fo;
        lr(), a.focus();
        return;
      }
      if (Da) {
        t.stopPropagation(), Da = !1, Tn();
        return;
      }
      po && (t.stopPropagation(), Ds(!1), (e = p("dashEditNav")) == null || e.focus());
    }
  }, !0);
  const Wf = (t) => t.dataset.heList === "favs" ? U() : fc(), hc = (t, e) => t.dataset.heList === "favs" ? sr({ favourites: e }) : La({ sumOrder: e });
  ye.addEventListener("keydown", (t) => {
    var f;
    const e = t.target.closest("[data-he-grip]");
    if (!e || !["ArrowUp", "ArrowDown"].includes(t.key)) return;
    t.preventDefault();
    const a = e.closest("[data-he-id]"), n = a.parentElement, i = Wf(n), d = i.indexOf(a.dataset.heId), l = d + (t.key === "ArrowUp" ? -1 : 1);
    l < 0 || l >= i.length || (i.splice(l, 0, i.splice(d, 1)[0]), hc(n, i), (f = ye.querySelector('[data-he-list="' + n.dataset.heList + '"] [data-he-id="' + CSS.escape(a.dataset.heId) + '"] [data-he-grip]')) == null || f.focus());
  }), ye.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-he-grip]");
    if (!e || t.button !== 0) return;
    t.preventDefault();
    const a = e.closest("[data-he-id]"), n = a.parentElement;
    a.classList.add("moving");
    const i = (l) => {
      const f = [...n.children].filter((k) => k !== a), m = f.find((k) => {
        const S = k.getBoundingClientRect();
        return l.clientY < S.top + S.height / 2;
      });
      m !== a.nextElementSibling && n.insertBefore(a, m || null);
    }, d = () => {
      removeEventListener("pointermove", i), removeEventListener("pointerup", d), a.classList.remove("moving"), hc(n, [...n.children].map((l) => l.dataset.heId).filter(Boolean));
    };
    addEventListener("pointermove", i), addEventListener("pointerup", d);
  }), ye.addEventListener("input", (t) => {
    if (t.target.matches("[data-he-search]")) {
      const e = t.target.selectionStart;
      Tn();
      const a = ye.querySelector("[data-he-search]");
      a.focus(), a.setSelectionRange(e, e);
    }
  }), ye.addEventListener("click", (t) => {
    var z, H;
    const e = t.target, a = e.closest("[data-info]");
    if (a) {
      uc(a);
      return;
    }
    const n = e.closest("[data-he-tab]");
    if (n) {
      const I = ye.querySelector(".hcTrayTabs .rubberIndicator"), D = { left: I.offsetLeft, width: I.offsetWidth };
      si = n.dataset.heTab, Da = !1, lr(), Tn(), _s(!0, D), ye.querySelector(".tfTrayInner").scrollTop = 0;
      return;
    }
    if (e.closest("[data-he-welcome]")) {
      La({ welcome: !ns() });
      return;
    }
    const i = e.closest("[data-he-card]");
    if (i) {
      const I = i.dataset.heCard, D = ["sums", "favs"].includes(I) ? ((z = gt.home) == null ? void 0 : z[I]) !== !1 : !!((H = gt.home) != null && H[I]);
      La({ [I]: !D });
      return;
    }
    const d = e.closest("[data-he-favs-as]");
    if (d) {
      La({ favsAs: d.dataset.heFavsAs });
      return;
    }
    const l = e.closest("[data-he-sums-width]");
    if (l) {
      La({ sumsWidth: l.dataset.heSumsWidth });
      return;
    }
    const f = e.closest("[data-he-area-size]");
    if (f) {
      La({ areaSize: f.dataset.heAreaSize });
      return;
    }
    const m = e.closest("[data-he-area-layout]");
    if (m) {
      La({ areaLayout: m.dataset.heAreaLayout });
      return;
    }
    const k = e.closest("[data-he-cards-as]");
    if (k) {
      La({ cardsAs: k.dataset.heCardsAs });
      return;
    }
    const S = e.closest("[data-he-flag]");
    if (S) {
      const I = S.dataset.heFlag;
      La({ [I]: !on(I) });
      return;
    }
    if (e.closest("[data-he-suggest]")) {
      sr({ suggest: !Ct() });
      return;
    }
    const v = e.closest("[data-he-sum]");
    if (v) {
      const I = v.dataset.heSum, D = !ae(I), Q = gt.home || {};
      La(Xd.includes(I) ? { shownSums: D ? [...Q.shownSums || [], I] : (Q.shownSums || []).filter((L) => L !== I) } : { hiddenSums: D ? (Q.hiddenSums || []).filter((L) => L !== I) : [...Q.hiddenSums || [], I] });
      return;
    }
    const M = e.closest("[data-he-remove]");
    if (M) {
      sr({ favourites: U().filter((I) => I !== M.dataset.heRemove) });
      return;
    }
    if (e.closest("[data-he-add]")) {
      Da = !Da, Tn(), Da && ye.querySelector("[data-he-search]").focus({ preventScroll: !0 });
      return;
    }
    const W = e.closest("[data-he-pick-id]");
    W && (Da = !1, ye.querySelector("[data-he-search]").value = "", sr({ favourites: [...U(), W.dataset.hePickId] }));
  });
  function Me() {
    var k, S;
    const t = ea && g.classList.contains("tfBoard");
    if (Qt.classList.toggle("open", t), Qt.classList.toggle("tucked", t && ja), Qt.toggleAttribute("inert", !t), t || (lo = !1), (!t || !g.classList.contains("tfEditing")) && xs(), vc(), !t) return;
    const e = Qt.querySelector("[data-tray-tuck]");
    e.innerHTML = ja ? Wd : ap, e.setAttribute("aria-expanded", String(!ja)), e.setAttribute("aria-label", ja ? "Show the edit tray" : "Tuck the edit tray away");
    const a = oe().hidden.filter((v) => !ro.includes(v) && an().some((M) => M.key === v)), n = (v, M) => '<button class="tfTrayCard" type="button" data-tray-card="' + q(v) + '" aria-label="' + q(ba(v)) + ": drag it onto the board, or press to " + M + '"><span class="tfTrayGrip" aria-hidden="true">' + _i + "</span>" + q(ba(v)) + "</button>", i = a.filter((v) => !Wn.includes(v)), d = Wn.filter((v) => a.includes(v));
    co("welcome", '<div class="hcHeLine"><span class="activityRowName">Welcome message</span>' + rn("welcome") + '<button class="switch' + (oe().welcome ? " on" : "") + '" type="button" role="switch" aria-checked="' + !!oe().welcome + '" aria-label="Welcome message" data-dash-welcome></button></div><div class="hcHeLine"><span class="activityRowName">Show summaries</span><button class="switch' + ((k = gt.dash) != null && k.sumsOff ? "" : " on") + '" type="button" role="switch" aria-checked="' + !((S = gt.dash) != null && S.sumsOff) + '" aria-label="Show summaries" data-dash-sums></button></div>'), requestAnimationFrame(() => lc(!1)), co("cards", '<div class="sectionLabel">Hidden and new cards</div>' + (i.length ? '<div class="tfTrayCards">' + i.map((v) => n(v, "put it back")).join("") + "</div>" : '<p class="tfTrayNote">Cards you hide, and new ones, wait here.</p>')), co("weather", '<div class="sectionLabel">Weather</div>' + (d.length ? `<p class="tfTrayNote">The Weather page's widgets. Drag one onto the board, or press to add it.</p><div class="tfTrayCards">` + d.map((v) => n(v, "add it")).join("") + "</div>" : '<p class="tfTrayNote">Every weather widget is on the board.</p>')), co("phone", '<div class="sectionLabel">Phone</div><p class="tfTrayNote">' + (oe().phone ? "Phones have an order of their own." : "Phones follow the board's order.") + '</p><button class="pill tfTrayAdd" type="button" data-phone-toggle aria-pressed="' + lo + '">' + (lo ? "Hide the phone" : "Show the phone") + "</button>");
    const l = new Set(gt.favHidden || []), f = U(), m = [...f, ...[...l].filter((v) => !f.includes(v) && x[v])];
    if (co("favs", m.map((v) => Ff(v, l.has(v), f.includes(v))).join("") || '<li class="tfTrayNote">No favourites yet.</li>'), Qt.querySelector('[data-pick="tiles"]').hidden = !so, Qt.querySelector("[data-tile-add]").setAttribute("aria-expanded", String(so)), so && co("tilepick", Ss(Qt.querySelector("[data-tile-search]").value, (v) => kr.includes(v.split(".")[0]), new Set(ti()), "data-tile-pick")), Qt.querySelector('[data-tray="roompick"]').hidden = !rr, Qt.querySelector("[data-room-add]").setAttribute("aria-expanded", String(rr)), rr) {
      const v = new Set(ti());
      co("roompick", u.filter((M) => !v.has("room:" + M.id)).map((M) => '<li><button class="tfTrayPickItem" type="button" data-room-pick="' + q(M.id) + '"><span class="tfIcon"><span class="tfAreaGlyph"' + ge("area:" + M.id, M.icon || "mdi:texture-box", M.name) + '></span></span><span class="tfTrayName"><span class="activityRowName">' + q(M.name) + "</span></span></button></li>").join("") || '<li class="tfTrayNote">Every area is on the board.</li>');
    }
    Qt.querySelector('[data-pick="favs"]').hidden = !io, Qt.querySelector("[data-fav-add]").setAttribute("aria-expanded", String(io)), io && co("pick", Ss(Qt.querySelector("[data-fav-search]").value, (v) => sc.test(v), new Set(U()), "data-fav-pick")), co("suggest", '<div><strong>Show suggestions</strong><div class="status">Fills the card after your favourites.</div></div><button class="switch' + (Ct() ? " on" : "") + '" type="button" role="switch" aria-checked="' + Ct() + '" data-fav-suggest aria-label="Show suggestions"></button>');
  }
  const Dn = (t) => {
    gt = { ...gt, ...t }, Ne(), Te(), Me();
  };
  function mc(t, e) {
    const a = gt, n = new Set(gt.favHidden || []);
    e ? n.delete(t) : n.add(t), Dn({ favHidden: [...n] }), e ? wa(xt(t) + " put back") : wa(xt(t) + " hidden", ri(a));
  }
  const jf = (t) => {
    const e = gt;
    Dn({ favourites: U().filter((a) => a !== t), favHidden: (gt.favHidden || []).filter((a) => a !== t) }), wa(xt(t) + " removed from favourites", ri(e));
  }, Vf = (t) => {
    Dn({ favourites: [...U().filter((e) => e !== t), t], favHidden: (gt.favHidden || []).filter((e) => e !== t) }), wa(xt(t) + " added to favourites");
  };
  Qt.addEventListener("click", (t) => {
    var a, n;
    const e = t.target.closest("button");
    if (e) {
      if (e.hasAttribute("data-tray-tab")) {
        ys = e.dataset.trayTab, lc(!0), Qt.querySelector(".tfTrayInner").scrollTop = 0;
        return;
      }
      if (e.hasAttribute("data-tray-done")) hs(!1);
      else if (e.hasAttribute("data-info")) uc(e);
      else if (e.hasAttribute("data-dash-sums"))
        en({ ...is(), hidden: is().hidden.filter((i) => i !== "sums"), sumsOff: !((a = gt.dash) != null && a.sumsOff) }), Te(), Me();
      else if (e.hasAttribute("data-dash-welcome")) {
        const i = oe();
        en({ ...i, welcome: !i.welcome }), Te(), Me();
      } else e.hasAttribute("data-tray-tuck") ? (ja = !ja, Me()) : e.hasAttribute("data-phone-toggle") ? (lo = !lo, Me(), lo && ((n = ra.querySelector("[data-phone-key]")) == null || n.focus({ preventScroll: !0 }))) : e.dataset.trayCard ? t.detail === 0 && (ms(e.dataset.trayCard), Me()) : e.dataset.favEye ? mc(e.dataset.favEye, e.getAttribute("aria-pressed") !== "true") : e.dataset.favRemove ? jf(e.dataset.favRemove) : e.hasAttribute("data-fav-add") ? (io = !io, Me(), io && Qt.querySelector("[data-fav-search]").focus({ preventScroll: !0 })) : e.dataset.favPick ? Vf(e.dataset.favPick) : e.hasAttribute("data-tile-add") ? (so = !so, Me(), so && Qt.querySelector("[data-tile-search]").focus({ preventScroll: !0 })) : e.dataset.tilePick ? oc(e.dataset.tilePick) : e.hasAttribute("data-area-choose") ? If() : e.hasAttribute("data-room-add") ? (rr = !rr, Me()) : e.dataset.roomPick ? oc("room:" + e.dataset.roomPick) : e.hasAttribute("data-fav-suggest") && Dn({ suggest: !Ct() });
    }
  }), Qt.addEventListener("input", (t) => {
    t.target.matches("[data-fav-search],[data-tile-search]") && Me();
  }), Qt.addEventListener("keydown", (t) => {
    var a, n;
    const e = !!((n = (a = t.target).closest) != null && n.call(a, '[data-pick="tiles"],[data-tile-add]'));
    t.key !== "Escape" || !(e ? so : io) || (t.stopPropagation(), e ? so = !1 : io = !1, Me(), Qt.querySelector(e ? "[data-tile-add]" : "[data-fav-add]").focus({ preventScroll: !0 }));
  });
  function gc(t, e, a, n) {
    t.preventDefault();
    const i = t.clientX, d = t.clientY;
    let l = null, f = 0;
    const m = Object.assign(document.createElement("div"), { className: "tfFavDrop" }), k = (v) => {
      if (!l) {
        if (Math.hypot(v.clientX - i, v.clientY - d) < 4) return;
        l = e.cloneNode(!0), l.classList.add("tfTrayGhost"), l.style.width = e.offsetWidth + "px", g.appendChild(l);
      }
      l.style.transform = "translate(" + (v.clientX - 24) + "px," + (v.clientY - 24) + "px)";
      const M = !ja && v.clientX >= Qt.getBoundingClientRect().left;
      if (a === "card") {
        const H = E.getBoundingClientRect(), { w: I } = tn(E.clientWidth);
        Ut = !M && v.clientX >= H.left && v.clientX <= H.right && v.clientY >= H.top + Po ? { key: n, col: Math.max(0, Math.floor((v.clientX - H.left) / (I + se))), row: Math.max(0, Math.floor((v.clientY - H.top - Po) / Ta)), fromTray: !0 } : null, f || (f = requestAnimationFrame(() => {
          f = 0, Pe();
        }));
        return;
      }
      const W = E.querySelector(".tfDash-favs"), z = W == null ? void 0 : W.getBoundingClientRect();
      if (Ye = null, z && !M && v.clientX >= z.left && v.clientX <= z.right && v.clientY >= z.top && v.clientY <= z.bottom) {
        let H = 1 / 0;
        W.querySelectorAll('[data-k^="fav:"]').forEach((I, D) => {
          const Q = I.getBoundingClientRect(), L = Math.hypot(v.clientX - (Q.left + Q.width / 2), v.clientY - (Q.top + Q.height / 2));
          L < H && (H = L, Ye = { i: D, r: Q, after: v.clientX > Q.left + Q.width / 2 });
        }), Ye || (Ye = { i: 0, r: null, after: !1 });
      }
      Ye != null && Ye.r ? (m.isConnected || g.appendChild(m), Object.assign(m.style, { left: (Ye.after ? Ye.r.right : Ye.r.left) - 2 + "px", top: Ye.r.top + 8 + "px", height: Ye.r.height - 16 + "px" })) : m.remove();
    }, S = () => {
      if (window.removeEventListener("pointermove", k), window.removeEventListener("pointerup", S), window.removeEventListener("pointercancel", S), cancelAnimationFrame(f), l == null || l.remove(), m.remove(), a === "card") {
        if (!l) ms(n);
        else if (Ut != null && Ut.fromTray) {
          Pe();
          const H = ba(n) + ec(n), I = oe(), D = nn();
          Ut = null, Cn({ ...I, hidden: I.hidden.filter((Q) => Q !== n) }, D), wa(H);
        }
        Ut = null, Pe(), Te(), Me();
        return;
      }
      if (!Ye) return;
      const v = new Set(gt.favHidden || []);
      v.delete(n);
      const M = U().filter((H) => H !== n), W = M.filter((H) => !v.has(H)), z = W[Math.min(Ye.i + (Ye.after ? 1 : 0), W.length)];
      M.splice(z ? M.indexOf(z) : M.length, 0, n), Ye = null, Dn({ favourites: M, favHidden: [...v] }), wa(xt(n) + " put back");
    };
    window.addEventListener("pointermove", k), window.addEventListener("pointerup", S), window.addEventListener("pointercancel", S);
  }
  const bc = {
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
  }, wc = 136, zf = 288, Gf = 0.8, Uf = { wx: "mdi:weather-partly-cloudy", areas: "mdi:home", favs: "mdi:star", act: "mdi:history", energy: "mdi:lightning-bolt", avg: "mdi:chart-line", aq: "mdi:air-filter", pollen: "mdi:flower-pollen", radar: "mdi:radar" }, ra = Object.assign(document.createElement("aside"), { className: "tfMiniPhone" });
  ra.setAttribute("aria-label", "Phone order"), ra.innerHTML = '<div class="tfPhoneHead"><div class="activityTitle">Phone</div><button class="tfTrayBtn" type="button" data-phone-close aria-label="Close the phone">' + xl + '</button></div><p class="tfTrayNote" data-phone="note"></p><div class="tfPhoneScreen"><div class="tfPhoneList" data-phone="list"></div></div>', g.appendChild(ra);
  let Ls = "";
  function vc() {
    var f;
    const t = lo && ea && g.classList.contains("tfBoard") && !ja;
    if (ra.classList.toggle("open", t), ra.toggleAttribute("inert", !t), !t) return;
    const e = ss().filter((m) => !oe().hidden.includes(m.key)), a = e.length, n = (m) => Math.round(m * Gf * 10) / 10 + "px", i = (m, k) => {
      const S = m.el.classList.contains("tfDac"), v = m.tile ? S ? zf : wc : bc[m.key] || wc;
      return '<button class="tfPhoneBlock' + (m.tile ? " tile" : "") + '" type="button" data-phone-key="' + q(m.key) + '" style="min-height:' + n(v) + '" aria-label="' + q(ba(m.key) + ", " + (k + 1) + " of " + a + ". Drag, or use the arrow keys, to move it") + '"><span class="tfIcon"' + (m.tile ? ge(m.key, la(m.key)) : ge(m.key, Uf[m.key])) + '></span><span class="tfPhoneName">' + q(ba(m.key)) + "</span></button>";
    }, d = '<div class="tfPhoneTitle">' + q(((f = E.querySelector(".tfDashTitle")) == null ? void 0 : f.textContent) || "") + '</div><div class="tfPhoneBlock fixed" style="min-height:' + n(bc.sums) + '"><span class="tfPhoneName">' + q(ba("sums")) + "</span></div>" + e.map(i).join("");
    if (ra.querySelector('[data-phone="note"]').innerHTML = oe().phone ? 'Phones use this order. <button class="tfLinkBtn" type="button" data-phone-reset>Follow the board</button>' : "Phones follow the board. Drag a card to give them an order of their own.", d === Ls) return;
    Ls = d;
    const l = ra.querySelector('[data-phone="list"]');
    l.innerHTML = d, Aa(l);
  }
  function yc(t, e) {
    var a;
    en({ ...oe(), phone: t }), Me(), e && ((a = ra.querySelector('[data-phone-key="' + CSS.escape(e) + '"]')) == null || a.focus({ preventScroll: !0 }));
  }
  const Es = () => [...ra.querySelectorAll("[data-phone-key]")].map((t) => t.dataset.phoneKey);
  function Yf(t, e) {
    t.preventDefault();
    const a = e.parentElement, n = ra.querySelector(".tfPhoneScreen"), i = Es().join();
    e.classList.add("moving");
    const d = (f) => {
      const m = n.getBoundingClientRect();
      f.clientY > m.bottom - 40 ? n.scrollTop += 12 : f.clientY < m.top + 40 && (n.scrollTop -= 12);
      const k = [...a.querySelectorAll("[data-phone-key]")].find((M) => {
        const W = M.getBoundingClientRect();
        return M !== e && f.clientX >= W.left && f.clientX <= W.right && f.clientY >= W.top && f.clientY <= W.bottom;
      });
      if (!k) return;
      const S = k.getBoundingClientRect(), v = k.classList.contains("tile") ? f.clientX < S.left + S.width / 2 : f.clientY < S.top + S.height / 2;
      a.insertBefore(e, v ? k : k.nextSibling);
    }, l = () => {
      window.removeEventListener("pointermove", d), window.removeEventListener("pointerup", l), window.removeEventListener("pointercancel", l), e.classList.remove("moving");
      const f = Es();
      Ls = "", f.join() !== i ? yc(f) : vc();
    };
    window.addEventListener("pointermove", d), window.addEventListener("pointerup", l), window.addEventListener("pointercancel", l);
  }
  ra.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-phone-key]");
    e && t.button <= 0 && Yf(t, e);
  }), ra.addEventListener("click", (t) => {
    var a;
    const e = t.target.closest("button");
    if (e != null && e.hasAttribute("data-phone-close"))
      lo = !1, Me(), (a = Qt.querySelector("[data-phone-toggle]")) == null || a.focus({ preventScroll: !0 });
    else if (e != null && e.hasAttribute("data-phone-reset")) {
      const { phone: n, ...i } = oe();
      en(i), Me();
    }
  }), ra.addEventListener("keydown", (t) => {
    var l, f, m, k;
    if (t.key === "Escape") {
      t.stopPropagation(), lo = !1, Me(), (l = Qt.querySelector("[data-phone-toggle]")) == null || l.focus({ preventScroll: !0 });
      return;
    }
    const e = (k = (m = (f = t.target).closest) == null ? void 0 : m.call(f, "[data-phone-key]")) == null ? void 0 : k.dataset.phoneKey, a = { ArrowUp: -1, ArrowLeft: -1, ArrowDown: 1, ArrowRight: 1 }[t.key];
    if (!e || !a) return;
    t.preventDefault();
    const n = Es(), i = n.indexOf(e), d = i + a;
    d < 0 || d >= n.length || ([n[i], n[d]] = [n[d], n[i]], yc(n, e));
  });
  function Zf(t, e) {
    t.preventDefault();
    const a = e.parentElement;
    e.classList.add("moving");
    const n = (d) => {
      const l = [...a.children].find((f) => {
        const m = f.getBoundingClientRect();
        return f !== e && d.clientY >= m.top && d.clientY <= m.bottom;
      });
      if (l) {
        const f = l.getBoundingClientRect();
        a.insertBefore(e, d.clientY < f.top + f.height / 2 ? l : l.nextSibling);
      }
    }, i = () => {
      window.removeEventListener("pointermove", n), window.removeEventListener("pointerup", i), window.removeEventListener("pointercancel", i), e.classList.remove("moving");
      const d = new Set(U());
      ks.favs = null, Dn({ favourites: [...a.children].map((l) => l.dataset.trayFav).filter((l) => d.has(l)) });
    };
    window.addEventListener("pointermove", n), window.addEventListener("pointerup", i), window.addEventListener("pointercancel", i);
  }
  Qt.addEventListener("pointerdown", (t) => {
    if (t.button > 0) return;
    const e = t.target.closest("[data-tray-card]"), a = t.target.closest(".tfTrayFav");
    e ? gc(t, e, "card", e.dataset.trayCard) : a && t.target.closest(".tfTrayGrip") ? Zf(t, a) : a != null && a.classList.contains("off") && !t.target.closest("button") && gc(t, a, "fav", a.dataset.trayFav);
  });
  function Kf(t) {
    if (!ea || t.button !== 0 || t.target.closest("[data-board-more],.tfBoardMenu,.tfFavHides")) return;
    const e = t.target.closest(".tfBoardItem"), a = e && an().find((Kt) => Kt.el === e);
    if (!a || ro.includes(a.key)) return;
    const n = Qo.get(a.key), { w: i } = tn(E.clientWidth);
    if (!n) return;
    t.preventDefault(), Wa();
    const d = t.clientX, l = t.clientY;
    let f = !1, m = 0;
    const k = ke.drag, S = je();
    let v = 0, M = 0, W = 0, z = 0, H = 0, I = 0, D = S || k.stick === 0, Q = 0;
    const L = (Kt, be, Dt, Wt) => {
      e.style.transform = "translate(" + W.toFixed(2) + "px," + z.toFixed(2) + "px) rotate(" + Kt.toFixed(2) + "deg) rotate(" + be + "rad) scale(" + Dt.toFixed(4) + "," + Wt.toFixed(4) + ") rotate(" + -be + "rad)";
    }, kt = () => {
      if (Q = requestAnimationFrame(kt), S) {
        W = v, z = M, L(0, 0, 1, 1);
        return;
      }
      if (!D) {
        const Ze = Math.min(Math.hypot(v, M) / Math.max(1, k.stick), 1);
        W = v * 0.35, z = M * 0.35, L(0, Math.atan2(M, v), 1 + 0.155 * Ze, 1 - 0.1 * Ze);
        return;
      }
      H = fd(H, v - W, k.pull / 100, k.keep / 100), I = fd(I, M - z, k.pull / 100, k.keep / 100), W += H, z += I;
      const Kt = Math.hypot(H, I), be = Math.min(Kt / 48, 1), Dt = Math.max(-5, Math.min(k.tilt, H * 0.32)), Wt = 1 + k.lift / 100;
      L(Dt, Math.atan2(I, H), Wt * (1 + 0.1 * be), Wt * (1 - 0.063 * be));
    }, Zt = (Kt) => {
      if (v = Kt.clientX - d, M = Kt.clientY - l, !f) {
        if (Math.hypot(v, M) < 4) return;
        f = !0, Ut = { key: a.key, col: n.col, row: n.row }, e.classList.add("tfDragging", "mvDrag"), Q = requestAnimationFrame(kt);
      }
      !D && Math.hypot(v, M) > k.stick && (D = !0, H = v * 0.085, I = M * 0.085), Ut.col = Math.round((n.x + v) / (i + se)), Ut.row = Math.round((n.y + M - Po) / Ta), m || (m = requestAnimationFrame(() => {
        m = 0, Pe();
      }));
    }, Rt = () => {
      var hi;
      if (window.removeEventListener("pointermove", Zt), window.removeEventListener("pointerup", Rt), window.removeEventListener("pointercancel", Rt), !f) return;
      const Kt = (mr) => {
        mr.preventDefault(), mr.stopImmediatePropagation();
      };
      window.addEventListener("click", Kt, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", Kt, { capture: !0 }), 300), cancelAnimationFrame(m), cancelAnimationFrame(Q);
      const be = e.getBoundingClientRect(), Dt = a.key;
      e.style.transition = "none", Pe(), e.classList.remove("tfDragging", "mvDrag"), e.style.transform = "", Ut = null, Cn(oe(), nn()), Pe(), Te();
      const Wt = (hi = an().find((mr) => mr.key === Dt)) == null ? void 0 : hi.el;
      if (requestAnimationFrame(() => {
        e.style.transition = "", Wt && (Wt.style.transition = "");
      }), !Wt || S) return;
      Wt.style.transition = "none";
      const Ze = Wt.getBoundingClientRect(), Ga = be.left + be.width / 2 - (Ze.left + Ze.width / 2), ui = be.top + be.height / 2 - (Ze.top + Ze.height / 2);
      Wt.style.zIndex = "20", Wt.animate([{ transform: "translate(" + Ga + "px," + ui + "px) scale(" + (1 + k.lift / 100) + ")" }, { transform: "none" }], { duration: k.slide, easing: Se.land }).finished.then(() => {
        Wt.style.zIndex = "", ud(Wt);
      }, () => {
        Wt.style.zIndex = "";
      });
    };
    window.addEventListener("pointermove", Zt), window.addEventListener("pointerup", Rt), window.addEventListener("pointercancel", Rt);
  }
  function xc(t = !1) {
    const e = E == null ? void 0 : E.querySelector(".tfDashGraph svg[data-graph]");
    if (!(e != null && e.clientWidth)) return;
    const a = e.dataset.graph + "@" + e.clientWidth + "x" + e.clientHeight + "@" + Math.floor(Date.now() / 3e5);
    if (e.dataset.drawn === a) return;
    const n = !e.dataset.drawn;
    e.dataset.drawn = a;
    const i = Rl.find((d) => d.id === e.dataset.graph);
    i ? Qp(e, i).then(() => {
      (t || n) && tf(e);
    }) : jc(e.dataset.graph, e).then(() => {
      t && Ol(e);
    });
  }
  function kc() {
    var m, k, S;
    Ft = Cr.model(c(), { madeUp: !A }), Et(), x = Ft.states, x[(m = gt.sources) == null ? void 0 : m.grid] && (Ft.grid = gt.sources.grid), x[(k = gt.sources) == null ? void 0 : k.alarm] && (Ft.security.alarms = [gt.sources.alarm]), yt.forEach((v, M) => {
      const W = x[M], z = (W == null ? void 0 : W.attributes) || {};
      if (!W || Date.now() - v.at > 2 * 60 * 1e3) {
        yt.delete(M);
        return;
      }
      v.pos != null && W.state !== "opening" && W.state !== "closing" && Math.abs(sa(M) - v.pos) < 1 && delete v.pos, v.tilt != null && Math.abs((z.current_tilt_position ?? -1) - v.tilt) < 1 && delete v.tilt, v.pos == null && v.tilt == null && yt.delete(M);
    });
    const t = [];
    let e = 0;
    const a = Y();
    u = a.filter((v) => v.room).map((v) => v.room), u.some((v) => v.id === O) || (O = ((S = u[0]) == null ? void 0 : S.id) || null);
    const n = J === "weather" ? { key: "weather", name: "Weather" } : J && a.find((v) => v.key === J);
    if (n || (J = null), g.classList.toggle("tfAreaOpen", !!n), g.classList.toggle("tfWeatherOpen", (n == null ? void 0 : n.key) === "weather"), g.classList.toggle("tfDash", !n), _t = /* @__PURE__ */ new Map(), Ft.rooms.forEach((v) => [...v.actions, ...v.plugs, ...v.readings, ...v.openings, ...v.solar, ...v.plants.flatMap((M) => [M.id, ...M.readings])].forEach((M) => _t.set(M, v.name))), !n) return nf(t, Ie());
    if (t.push({ key: "areahead", html: Xf(n, ++e) }), n.key === "weather")
      return t.weather = ++e, t;
    const i = n.ids, d = n.room ? n.room.id : n.key, l = n.room;
    l != null && l.solar.length && t.push({ key: "energy:" + l.id, html: Lo(l, ++e) }), l && (l.readings.length || l.power != null) && t.push({ key: "readings:" + l.id, html: Fr(l, ++e) }), l == null || l.plants.forEach((v) => t.push({ key: "plant:" + v.id, html: qr(v, ++e) }));
    const f = [...i, ...((l == null ? void 0 : l.plugs) || []).filter((v) => !i.includes(v))];
    return f.length && t.push({ key: "block:" + d, order: ++e, tiles: f.map((v) => ({ key: v, html: Kn(v) })) }), t;
  }
  const Xf = (t, e) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + e + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + Wd + '</button><div class="settingsTitle">' + q(t.name) + "</div></div>";
  let Mc = 0, Sc = null;
  const Ac = (t) => t === "weather" ? Na.wx : t.startsWith("room:") && E.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || E.querySelector(".tfAreas");
  function Cc(t) {
    var e, a;
    J || (Mc = dr().scrollTop, Sc = ((e = Ac(t)) == null ? void 0 : e.getBoundingClientRect().top) ?? null), J = t, t.startsWith("room:") && (O = t.slice(5)), uo(), dr().scrollTop = 0, (a = E.querySelector("[data-area-back]")) == null || a.focus({ preventScroll: !0 });
  }
  let cr = null;
  function $f(t, e) {
    if (cr == null || cr(), e == null) return;
    const a = dr(), n = performance.now() + 1500, i = ["wheel", "touchstart", "pointerdown", "keydown"];
    let d = 0;
    const l = () => {
      cancelAnimationFrame(d), i.forEach((m) => window.removeEventListener(m, l, !0)), cr = null;
    }, f = () => {
      const m = t();
      if (m != null && m.isConnected) {
        const k = m.getBoundingClientRect().top - e;
        Math.abs(k) > 0.5 && (a.scrollTop += k);
      }
      performance.now() < n ? d = requestAnimationFrame(f) : l();
    };
    i.forEach((m) => window.addEventListener(m, l, { capture: !0, passive: !0 })), cr = l, f();
  }
  function Bs() {
    var a;
    const t = J;
    J = null, uo(), dr().scrollTop = Mc, $f(() => Ac(t), Sc);
    const e = t.startsWith("room:") ? E.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || E.querySelector('.tfAreaPanel[data-area="' + CSS.escape(t.slice(5)) + '"]') : t === "weather" ? Na.wx.querySelector(".wbOpenPage") : E.querySelector('[data-k="sum:' + CSS.escape(t) + '"]');
    (a = (e == null ? void 0 : e.querySelector("[data-go]")) || e) == null || a.focus({ preventScroll: !0 });
  }
  const Jf = (t) => t.wrap ? t.wrap(t.tiles.map((e) => e.html).join(""), t) : '<div class="tfBlock" data-tf data-k="' + q(t.key) + '" style="order:' + t.order + '"><div class="tfActions">' + t.tiles.map((e) => e.html).join("") + "</div></div>", _c = (t) => t.map((e) => e.key + (e.tiles ? "(" + e.tiles.map((a) => a.key).join(",") + ")" : "")).join(";");
  function dr() {
    for (let t = g.parentElement || g.getRootNode().host; t; t = t.parentElement || t.getRootNode().host) {
      const e = getComputedStyle(t).overflowY;
      if ((e === "auto" || e === "scroll") && t.scrollHeight > t.clientHeight) return t;
    }
    return document.scrollingElement;
  }
  function Tc(t) {
    const e = dr(), a = (f) => {
      const m = f.getBoundingClientRect();
      return m.height && m.bottom > 0 && m.top < window.innerHeight;
    }, n = [...E.children, ...E.querySelectorAll(".tfDashTiles > *")].find((f) => !f.matches(".tfDashTiles") && a(f)), i = n == null ? void 0 : n.dataset.k, d = n == null ? void 0 : n.getBoundingClientRect().top;
    t();
    const l = n != null && n.isConnected ? n : i && E.querySelector('[data-k="' + CSS.escape(i) + '"]');
    l != null && l.isConnected && d != null && (e.scrollTop += l.getBoundingClientRect().top - d);
  }
  function uo() {
    if (!w || !E) return;
    const t = kc(), e = (i) => {
      var d;
      return (((d = i.closest("[data-k]")) == null ? void 0 : d.dataset.k) || "") + "|" + i.dataset.iconFor + "|" + (i.dataset.iconName || "");
    }, a = /* @__PURE__ */ new Map();
    E.querySelectorAll("[data-tf] [data-icon-for]").forEach((i) => {
      i.firstElementChild && (a.get(e(i)) || a.set(e(i), []).get(e(i))).push(i.firstElementChild);
    }), E.querySelectorAll("[data-tf]").forEach((i) => i.remove()), pa.clear();
    const n = document.createElement("div");
    n.innerHTML = t.map((i) => i.tiles ? Jf(i) : i.html).join(""), t.forEach((i) => i.tiles ? i.tiles.forEach((d) => pa.set(d.key, d.html)) : pa.set(i.key, i.html)), Ar = _c(t), n.querySelectorAll("[data-icon-for]").forEach((i) => {
      var l;
      const d = !i.firstElementChild && ((l = a.get(e(i))) == null ? void 0 : l.shift());
      d && i.appendChild(d);
    }), E.append(...n.children), Tr(t.weather), Dr(), ps.disconnect(), Pe(), Aa(E), Fs(E), ao(E), j(), Vc(), En(), Rc(), requestAnimationFrame(nt);
  }
  const Dc = (t) => {
    var a;
    const e = o.activeElement && t.contains(o.activeElement) ? o.activeElement : null;
    return e && { label: e.getAttribute("aria-label"), act: (a = e.dataset) == null ? void 0 : a.act };
  }, Rs = (t, e) => {
    var a;
    e && ((a = e.label && t.querySelector('[aria-label="' + CSS.escape(e.label) + '"]') || e.act && t.querySelector('[data-act="' + CSS.escape(e.act) + '"]')) == null || a.focus({ preventScroll: !0 }));
  };
  function Ps(t, e) {
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
    return [...t.children].forEach((l, f) => Ps(l, d[f])), t;
  }
  function Qf(t, e) {
    const a = document.createElement("div");
    a.innerHTML = e;
    const n = Dc(t), i = Ps(t, a.firstElementChild);
    Aa(i), Fs(i), ao(i), Rs(i, n);
  }
  function Te() {
    !w || !E || Ut || Tc(tu);
  }
  function tu() {
    if (!E.querySelector("[data-tf]")) {
      uo();
      return;
    }
    const t = kc();
    if (_c(t) !== Ar) {
      uo();
      return;
    }
    const e = (a) => [...rt.keys()].some((n) => {
      const i = n.slice(n.indexOf("|") + 1);
      return a === i || a.endsWith(":" + i);
    });
    t.forEach((a) => (a.tiles || [a]).forEach((n) => {
      if (pa.get(n.key) === n.html || e(n.key)) return;
      const i = E.querySelector('[data-k="' + CSS.escape(n.key) + '"]');
      i && (pa.set(n.key, n.html), Qf(i, n.html), n.key.startsWith("energy:") && Vc());
    })), En(), Rc(), Zr(), j(), he == null || he.update(), me == null || me.forEach((a) => a.update()), g.classList.contains("tfDash") && Qr(), requestAnimationFrame(nt);
  }
  const Ln = {
    light: (t) => [["Brightness", t.brightness != null ? Math.round(t.brightness / 2.55) + "%" : null], ["Colour temperature", t.color_temp_kelvin ? Number(t.color_temp_kelvin).toLocaleString() + " K" : null], ["Colour mode", t.color_mode && $t(t.color_mode)]],
    climate: (t) => [["Current temperature", ze(t.current_temperature) + " °C"], ["Target", ze(t.temperature) + " °C"], ["Action", $t(t.hvac_action)]],
    cover: (t) => [["Position", t.current_position != null ? t.current_position + "% open" : null], ["Tilt", t.current_tilt_position != null ? t.current_tilt_position + "% open" : null]],
    humidifier: (t) => [["Current humidity", t.current_humidity + "%"], ["Target", t.humidity + "%"], ["Mode", $t(t.mode)]],
    media_player: (t) => [["Title", t.media_title], ["Artist", t.media_artist], ["Volume", t.volume_level != null ? Math.round(t.volume_level * 100) + "%" : null], ["Source", t.source]],
    vacuum: (t) => [["Battery", t.battery_level + "%"], ["Fan speed", $t(t.fan_speed)], ["Rooms", (t.rooms || []).join(", ") || null]],
    lock: (t) => [["Changed by", t.changed_by]],
    alarm_control_panel: (t) => [["Changed by", t.changed_by]],
    valve: () => [],
    plant: (t) => [["Moisture", t.moisture + "%"], ["Light", Number(t.brightness).toLocaleString() + " lx"], ["Temperature", ze(t.temperature) + " °C"], ["Fertility", t.conductivity + " µS/cm"], ["Problems", t.problem === "none" ? "None" : $t(t.problem)]],
    weather: (t) => [["Temperature", t.temperature != null ? t.temperature + " " + (t.temperature_unit || "°C") : null], ["Humidity", t.humidity != null ? t.humidity + "%" : null], ["Wind", t.wind_speed != null ? t.wind_speed + " " + (t.wind_speed_unit || "km/h") : null], ["Pressure", t.pressure != null ? t.pressure + " " + (t.pressure_unit || "hPa") : null]]
  }, eu = (t) => Ra(t) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function au(t, e = {}, a = !1) {
    return '<div class="tfMoreList">' + t.map((n) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + q(n.name) + '</div><div class="tfMoreTiles' + (a ? " single" : "") + '">' + n.ids.map((i) => Tt(i, e)).join("") + "</div></div>").join("") + "</div>";
  }
  const At = document.createElement("div");
  At.className = "tfMoreBackdrop", At.hidden = !0, g.appendChild(At);
  const Ba = document.createElement("div");
  Ba.className = "tfMoreBackdrop tfMoreUnder", Ba.hidden = !0, g.insertBefore(Ba, At);
  const Hs = (t, e) => {
    for (let a = t; a && a !== At; a = a.parentElement) {
      const n = getComputedStyle(a).overflowY;
      if ((n === "auto" || n === "scroll") && a.scrollHeight > a.clientHeight + 1 && (e < 0 ? a.scrollTop > 0 : a.scrollTop + a.clientHeight < a.scrollHeight - 1)) return !0;
    }
    return !1;
  };
  let pr = null;
  At.addEventListener("touchstart", (t) => {
    pr = { x: t.touches[0].clientX, y: t.touches[0].clientY };
  }, { passive: !0 }), At.addEventListener("touchmove", (t) => {
    var i, d;
    if (!pr || t.touches.length > 1 || (d = (i = t.target).closest) != null && d.call(i, "input,textarea,select")) return;
    const e = t.touches[0], a = pr.x - e.clientX, n = pr.y - e.clientY;
    pr = { x: e.clientX, y: e.clientY }, Math.abs(n) >= Math.abs(a) && !Hs(t.target, n) && t.preventDefault();
  }, { passive: !1 }), At.addEventListener("wheel", (t) => {
    var e, a;
    Math.abs(t.deltaX) > Math.abs(t.deltaY) && ((a = (e = t.target).closest) != null && a.call(e, "[data-more-pages]")) || Hs(t.target, t.deltaY) || t.preventDefault();
  }, { passive: !1 });
  const ou = () => window.innerWidth <= 620;
  let Be = null;
  At.addEventListener("pointerdown", (t) => {
    const e = At.querySelector(".tfMorePair");
    !ou() || !e || !e.contains(t.target) || !t.isPrimary || At._closing || t.target.closest("input,textarea,select,.tfDacPad,[data-cover-art],.tfMoreSide") || (Be = { x: t.clientX, y: t.clientY, t: performance.now(), dy: 0, v: 0, pair: e, from: t.target, grab: t.target.matches(".tfMore") || !!t.target.closest(".tfMoreHead") });
  }, !0), At.addEventListener("pointermove", (t) => {
    if (!Be || !t.isPrimary) return;
    const e = t.clientY - Be.y, a = performance.now();
    if (!Be.on) {
      if (Math.abs(t.clientX - Be.x) > 8 || e < -8 || !Be.grab && Hs(Be.from, -1)) {
        Be = null;
        return;
      }
      if (e < 8) return;
      Be.on = !0;
      try {
        At.setPointerCapture(t.pointerId);
      } catch {
      }
    }
    Be.v = (e - Be.dy) / Math.max(1, a - Be.t), Be.dy = e, Be.t = a, Be.pair.style.transform = "translateY(" + Math.max(0, e) + "px)";
  });
  const Lc = (t) => {
    if (!Be || !t.isPrimary) return;
    const e = Be;
    if (Be = null, !e.on) return;
    const a = (k) => {
      k.preventDefault(), k.stopImmediatePropagation();
    };
    window.addEventListener("click", a, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", a, { capture: !0 }), 300);
    const n = t.type === "pointerup" && (e.dy > 120 || e.v > 0.5), i = "translateY(" + Math.max(0, e.dy) + "px)";
    if (e.pair.style.transform = "", !n || je()) {
      n ? Gs() : e.pair.animate([{ transform: i }, { transform: "none" }], { duration: 320, easing: Se.spring });
      return;
    }
    const d = T;
    At._closing = !0, At.style.pointerEvents = "none", At.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220, easing: Se.exit, fill: "forwards" });
    const l = e.pair.animate([{ transform: i }, { transform: "translateY(calc(100% + 40px))" }], { duration: 220, easing: Se.exit, fill: "forwards" });
    let f = !1;
    const m = () => {
      f || (f = !0, At._closing = !1, At.style.pointerEvents = "", At.getAnimations().forEach((k) => k.cancel()), e.pair.getAnimations().forEach((k) => k.cancel()), T === d && Gs());
    };
    l.finished.then(m, m), setTimeout(m, 300);
  };
  At.addEventListener("pointerup", Lc), At.addEventListener("pointercancel", Lc);
  function Ns() {
    const t = At.querySelector(".tfMorePair"), e = At.querySelector(".tfMore");
    t == null || t.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - e.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", Ns, { passive: !0 }), w && Fn();
  let za = [];
  const nu = (t) => t === "favourites" || t.startsWith("summary:") || t.startsWith("group:");
  function ru(t) {
    const e = (m, k = "") => '<div class="tfMoreHead">' + (T != null && T.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + qd + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + q(m) + "</div>" + k + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + jd + "</button></div>", a = (m, k) => '<div class="tfMoreNow"><div class="tfMoreState">' + q(m) + "</div></div>", n = au;
    if (t === "favourites") {
      const m = U(), k = new Set(m), S = [{ name: "Starred", ids: m }, { name: "Home", ids: Ft.homeVacuums }, { name: "Security", ids: [...Ft.security.alarms, ...Ft.security.locks] }, ...Ft.rooms.map((v) => ({ name: v.name, ids: [...v.actions, ...v.plugs] }))].map((v, M) => M ? { ...v, ids: v.ids.filter((W) => !k.has(W)) } : v).filter((v) => v.ids.length);
      return [e("Favourites"), a(m.length ? m.length + " starred" : "None starred"), n(S, { star: !0 }, !0)];
    }
    const i = (m, { name: k = "", alert: S = !1, plain: v = !1 } = {}) => {
      const M = v ? [] : m.filter((H) => kr.includes(H.split(".")[0])), W = m.filter((H) => !M.includes(H)), z = (H) => H.startsWith("vacuum.") && jt(H).battery_level != null ? jt(H).battery_level + "%" : null;
      return '<div class="tfMoreGroup">' + (k ? '<div class="tfMoreGroupName">' + q(k) + "</div>" : "") + '<div class="tfMoreActions">' + M.map((H) => Kn(H, !0)).join("") + W.map((H) => Tt(H, { plain: v, alert: S, say: v ? z(H) : null })).join("") + "</div></div>";
    };
    if (t.startsWith("summary:")) {
      const m = Ie().find((M) => M.key === t.slice(8));
      if (!m) return null;
      const k = m.key === "light" ? (m.groups || []).flatMap((M) => M.ids) : [], S = k.some((M) => {
        var W;
        return ((W = x[M]) == null ? void 0 : W.state) === "on";
      }), v = k.length ? '<button class="primary" type="button" data-acts="' + To(k.map((M) => ["light", S ? "turn_off" : "turn_on", M])) + '">' + (S ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [e(m.name), '<div class="tfMoreNowRow">' + a(m.value) + v + "</div>", ...(m.groups || []).map((M) => i(M.ids, { name: M.name === m.name ? "" : M.name, alert: M.alert, plain: m.plain }))];
    }
    if (t.startsWith("group:")) {
      const [, m, k] = t.split(":"), S = Ft.rooms.find((W) => W.id === m), v = S && Bo(S).find((W) => W.key === k);
      if (!v) return null;
      const M = v.acts ? '<button class="primary" type="button" data-acts="' + To(v.acts) + '">' + (v.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [e(S.name + " " + v.label.toLowerCase()), '<div class="tfMoreNowRow">' + a(v.value) + M + "</div>", i(kn(S, k))];
    }
    const d = t.split(".")[0];
    x[t];
    const l = kr.includes(d) ? da(t) : Ec(t), f = (T == null ? void 0 : T.page) || 0;
    return [
      iu(t, l),
      '<div class="tfMorePages" data-more-pages><section class="tfMorePage" aria-label="Control">' + lu(t) + (d === "plant" ? uu(t).join("") : "") + l.sections.filter(Boolean).join("") + '</section><section class="tfMorePage" aria-label="Info">' + du(t) + "</section></div>",
      // the pages' icons in place of their dots (Matt, 12 Nov): Control's sliders and Info's (i), a small segmented pair
      '<div class="tfMoreDots tfMorePageIcons" role="tablist" aria-label="Pages">' + [["Control", m0], ["Info", ep]].map(([m, k], S) => '<button type="button" role="tab" aria-selected="' + (S === f) + '" aria-label="' + m + '" title="' + m + '" data-more-page="' + S + '"' + (S === f ? "" : ' tabindex="-1"') + ">" + k + "</button>").join("") + "</div>"
    ];
  }
  function iu(t, e, a) {
    var l, f, m, k, S;
    const n = (l = Ft.areaOf) == null ? void 0 : l.call(Ft, t), i = n && (((f = Ft.rooms.find((v) => v.id === n)) == null ? void 0 : f.name) || ((S = (k = (m = c()) == null ? void 0 : m.areas) == null ? void 0 : k[n]) == null ? void 0 : S.name)) || "", d = e.button ? eo(t, e) : '<div class="tfIcon"' + ge(t, e.icon) + "></div>";
    return '<div class="tfMoreHead tfMoreTileHead' + (e.on ? " on" : "") + '"' + (e.tone ? ' data-tone="' + e.tone + '"' : "") + mn(t) + ">" + (T != null && T.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + qd + "</button>" : "") + d + '<div class="tfName"><span class="activityRowName" id="tfMoreTitle">' + q(xt(t)) + "</span>" + (i ? '<span class="activityRowMeta">' + q(i) + "</span>" : "") + '</div><button class="tfBack" type="button" data-more-close aria-label="Close">' + jd + "</button></div>";
  }
  const su = ["lock", "alarm_control_panel", "switch", "input_boolean", "fan", "valve", "media_player", "automation", "script", "scene", "button"];
  function Ec(t) {
    var i;
    const e = t.split(".")[0], a = ((i = x[t]) == null ? void 0 : i.state) === "on", n = yl.includes(e) ? { act: Jt(e, "toggle", t), label: "Turn " + xt(t) + (a ? " off" : " on") } : e === "scene" || e === "script" ? { act: Jt(e, "turn_on", t), label: "Run " + xt(t) } : null;
    return { sections: [], on: a, button: n, icon: la(t) };
  }
  function lu(t) {
    const e = t.split(".")[0];
    if (su.includes(e) || e === "light" && !xn(t)) {
      const i = kr.includes(e) ? da(t) : Ec(t);
      return i != null && i.button ? '<div class="tfMoreSpace tfMoreSwitch' + (i.on ? " on" : "") + '"' + (i.tone ? ' data-tone="' + i.tone + '"' : "") + mn(t) + ">" + eo(t, i) + "</div>" : "";
    }
    if (e === "cover") return '<div class="tfMoreSpace tfMoreFill"><div data-cover-art="' + q(t) + '"></div></div>';
    if (e === "light" && xn(t)) return '<div class="tfMoreSpace tfMoreFill"><div class="tfDacPad" data-dac="more:' + q(t) + '"></div></div>';
    const { big: a, lines: n } = cu(t);
    return '<div class="tfMoreSpace"><div class="tfMoreBig' + (Ia("pos", t) != null ? " live" : "") + '"><span class="tfMoreNum">' + q(a[0]) + "</span>" + (a[1] ? '<span class="tfMoreUnit">' + q(a[1]) + "</span>" : "") + '</div><div class="tfMoreFacts">' + n.map(([i, d]) => '<div class="tfMoreFact"><span>' + q(i) + "</span><span>" + q(d) + "</span></div>").join("") + "</div></div>";
  }
  function cu(t) {
    var S;
    const e = x[t], a = jt(t), n = t.split(".")[0], i = (((S = Ln[n]) == null ? void 0 : S.call(Ln, a)) || []).filter(([, v]) => v != null && v !== ""), d = (v) => {
      const M = i.findIndex(([W]) => W === v);
      return M < 0 ? null : i.splice(M, 1)[0][1];
    }, l = (v) => {
      const M = String(v).match(/^(-?[\d.,]+)\s*(.*)$/);
      return M ? [M[1], M[2]] : [String(v), ""];
    }, f = () => [$t(String(e.state).replace(/_/g, " ")), ""];
    let m;
    n === "light" ? (d("Brightness"), m = e.state === "on" && Ge(t) ? [String($a(e)), "%"] : f()) : n === "climate" ? m = l(d("Current temperature") || ze(a.current_temperature) + " °C") : n === "cover" ? (d("Position"), m = a.current_position != null ? [String(sa(t)), "%"] : f()) : n === "humidifier" ? m = l(d("Current humidity") || e.state) : n === "vacuum" ? m = l(d("Battery") || e.state) : n === "plant" ? m = l(d("Moisture") || e.state) : ["media_player", "lock", "alarm_control_panel", "valve"].includes(n) ? m = f() : m = l(e.state + (a.unit_of_measurement ? " " + a.unit_of_measurement : ""));
    const k = i.length ? i.slice(0, 4) : [["State", Le(t)]];
    return { big: m, lines: k };
  }
  function du(t) {
    var k, S, v, M, W, z, H;
    const e = x[t], a = c(), n = (k = a == null ? void 0 : a.entities) == null ? void 0 : k[t], i = n != null && n.device_id ? (S = a == null ? void 0 : a.devices) == null ? void 0 : S[n.device_id] : null, d = '<div class="tfMoreGraph"><div class="tfMoreGroupName">Last 24 hours</div><svg class="tfGraph tfDay" data-day="' + q(t) + '" role="img" aria-label="' + q(xt(t)) + ', last 24 hours"></svg></div>', l = (v = Ft.areaOf) == null ? void 0 : v.call(Ft, t), f = l && (((M = Ft.rooms.find((I) => I.id === l)) == null ? void 0 : M.name) || ((z = (W = a == null ? void 0 : a.areas) == null ? void 0 : W[l]) == null ? void 0 : z.name)) || "", m = [
      ...((H = Ln[t.split(".")[0]]) == null ? void 0 : H.call(Ln, jt(t))) || [],
      ["Changed", e.last_changed && Co(Date.parse(e.last_changed))],
      ["Area", f],
      ["Device", i && (i.name_by_user || i.name)],
      ["Integration", (n == null ? void 0 : n.platform) && $t(n.platform.replace(/_/g, " "))],
      ["Entity", t]
    ].filter(([, I]) => I != null && I !== "");
    return d + '<div class="tfMoreRows">' + m.map(([I, D]) => '<div class="tfMoreRow"><span>' + q(I) + "</span><span>" + q(D) + "</span></div>").join("") + "</div>" + eu(t) + (i ? '<button class="tfDetailsBtn tfMoreLink" type="button" data-path="/config/devices/device/' + q(n.device_id) + '"><span>Device page</span>' + ap + "</button>" : "");
  }
  const pu = () => "";
  let Os = "";
  function Is(t) {
    var e;
    T && (T.details = t, En(), (e = At.querySelector(t ? "[data-details-close]" : "[data-details]")) == null || e.focus({ preventScroll: !0 }));
  }
  const li = (t) => {
    const e = x[t], a = sa(t), n = zo(t);
    return { kind: vl(e), name: xt(t), text: Le(t), pos: a, target: Math.abs(n - a) > 0.5 ? n : null, moving: e.state === "opening" || e.state === "closing", tilt: Hr(t) ?? 100, canSet: Ae(t, Zd) };
  };
  function Fs(t) {
    t.querySelectorAll("[data-cover-art]").forEach((e) => {
      const a = e.dataset.coverArt, n = e.dataset.artKey || "more:" + a;
      let i = Ot.get(n);
      i || (i = Qm({ onMove: (d) => fr(a, d), onSet: (d) => {
        fr(a, d), ur("pos", a);
      } }), i.coverId = a, Ot.set(n, i)), e.replaceWith(i.el), i.update(li(a));
    });
  }
  const Bc = (t) => [...Ot.values()].filter((e) => e.coverId === t), qs = () => Ot.forEach((t) => {
    x[t.coverId] && t.update(li(t.coverId));
  }), Rc = () => {
    Ot.forEach((t, e) => {
      t.el.isConnected || (t.destroy(), Ot.delete(e));
    }), qs();
  };
  function En() {
    var d, l;
    if (!T || !(nu(T.id) || x[T.id])) {
      At.hidden = !0;
      return;
    }
    if ([...rt.keys()].some((f) => f.endsWith("|" + T.id))) {
      qs();
      return;
    }
    const t = ru(T.id), e = At.querySelector(".tfMore");
    if (!t) {
      di();
      return;
    }
    const a = Dc(At), n = pu(T.id), i = T.frame ? T.frame.wide : T.id.startsWith("summary:") || T.id.startsWith("group:");
    if (At.hidden || !e || t.length !== za.length || e.classList.contains("wide") !== i) {
      const f = Vs ? T.scroll || 0 : !At.hidden && e ? e.scrollTop : 0;
      if (At.innerHTML = '<div class="tfMorePair' + (At.hidden ? "" : " still") + '" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (i ? " wide" : "") + '"' + (T.frame ? ' style="height:' + T.frame.h + 'px"' : "") + ' tabindex="-1">' + t.join("") + "</section></div>", Os = n, At.classList.toggle("wide", i), At.hidden = !1, Ns(), Fs(At), ao(At), Aa(At), At.querySelectorAll("[data-day]").forEach((m) => qc(m.dataset.day, m, T.at)), Oc(At), f && (At.querySelector(".tfMore").scrollTop = f), Pc(), Rs(At, a), !At.contains(o.activeElement)) {
        const m = At.querySelector("[data-more-close]");
        (d = m != null && m.offsetParent ? m : At.querySelector(".tfMore")) == null || d.focus({ preventScroll: !0 });
      }
    } else {
      if (t.forEach((f, m) => {
        var v, M;
        if (f === za[m] || f.includes("data-cover-art") || e.children[m].contains((M = (v = o.activeElement) == null ? void 0 : v.matches) != null && M.call(v, "input,select") ? o.activeElement : null) || [...rt.keys()].some((W) => e.children[m].querySelector('[data-drag="' + CSS.escape(W) + '"]'))) return;
        const k = document.createElement("div");
        k.innerHTML = f;
        const S = Ps(e.children[m], k.firstElementChild);
        Aa(S), Oc(S), ao(S);
      }), n !== Os) {
        const f = At.querySelector(".tfMoreSideBody");
        f && (f.innerHTML = n), Os = n;
      }
      e.querySelectorAll("[data-day]").forEach((f) => {
        f.innerHTML || qc(f.dataset.day, f, T.at);
      }), Pc(), At.contains(o.activeElement) || Rs(At, a);
    }
    (l = At.querySelector(".tfMorePair")) == null || l.classList.toggle("details", !!(T.details && n)), za = t, qs();
  }
  function Pc() {
    const t = At.querySelector("[data-more-pages]");
    !t || !T || (t.scrollTo({ left: (T.page || 0) * t.clientWidth, behavior: "instant" }), js(), Ws(t));
  }
  function Ws(t) {
    const e = t.children[(T == null ? void 0 : T.page) || 0];
    e && (t.style.height = e.scrollHeight + "px");
  }
  function js() {
    const t = (T == null ? void 0 : T.page) || 0;
    At.querySelectorAll("[data-more-page]").forEach((e) => {
      const a = Number(e.dataset.morePage) === t;
      e.setAttribute("aria-selected", String(a)), e.tabIndex = a ? 0 : -1;
    });
  }
  function Hc(t, e) {
    var n, i;
    const a = At.querySelector("[data-more-pages]");
    !a || !T || (T.page = Math.max(0, Math.min(1, t)), a.scrollTo({ left: T.page * a.clientWidth, behavior: (n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" }), js(), Ws(a), (i = At.querySelector('[data-more-page="' + T.page + '"]')) == null || i.focus({ preventScroll: !0 }));
  }
  let Nc = 0;
  At.addEventListener("scroll", (t) => {
    var a;
    const e = t.target;
    !((a = e.matches) != null && a.call(e, "[data-more-pages]")) || !T || (clearTimeout(Nc), Nc = setTimeout(() => {
      if (!T) return;
      const n = Math.round(e.scrollLeft / Math.max(1, e.clientWidth));
      n !== (T.page || 0) && (T.page = n, js(), Ws(e));
    }, 80));
  }, !0), setInterval(() => {
    T && En();
  }, 15 * 1e3);
  function ci(t, e) {
    var i, d;
    const a = !!(T && e && At.contains(e)), n = a && At.querySelector(".tfMore");
    if (a && (T.scroll = n.scrollTop), a && !T.under) {
      const l = At.querySelector(".tfMorePair"), f = { more: T, parts: za, opener: e };
      l.classList.add("still"), l.style.transform = "", l.inert = !0, Ba.innerHTML = "", Ba.appendChild(l), Ba.classList.toggle("wide", At.classList.contains("wide")), Ba.hidden = !1, At.hidden = !0, At.innerHTML = "", T = { id: t, opener: e, back: null, frame: null, under: f, at: Number((i = e == null ? void 0 : e.dataset) == null ? void 0 : i.at) || null }, zs();
      return;
    }
    T = { id: t, opener: a ? T.opener : e, back: a ? T : null, frame: a ? T.frame || { wide: n.classList.contains("wide"), h: n.offsetHeight } : null, under: a ? T.under : null, at: Number((d = e == null ? void 0 : e.dataset) == null ? void 0 : d.at) || null }, zs();
  }
  let Vs = !1;
  function zs() {
    za = [], Vs = !At.hidden, Ot.forEach((t, e) => {
      e !== T.id && At.contains(t.el) && (t.destroy(), Ot.delete(e));
    }), En(), Vs = !1;
  }
  function di() {
    if (!T) return;
    const t = T;
    Ih(At, () => {
      T === t && Gs();
    });
  }
  function Gs() {
    var n, i, d, l, f, m, k, S;
    const t = T == null ? void 0 : T.opener, e = T == null ? void 0 : T.under;
    T = null, Ot.forEach((v, M) => {
      At.contains(v.el) && (v.destroy(), Ot.delete(M));
    }), Oe.forEach((v, M) => {
      M.startsWith("more:") && Oe.delete(M);
    }), At.hidden = !0, At.innerHTML = "";
    const a = { preventScroll: !0 };
    if (e) {
      const v = Ba.firstElementChild;
      T = e.more, za = e.parts, v && (v.inert = !1, At.appendChild(v)), At.classList.toggle("wide", Ba.classList.contains("wide")), Ba.hidden = !0, Ba.innerHTML = "", At.hidden = !1;
      const M = At.querySelector(".tfMore");
      M && (M.scrollTop = T.scroll || 0), En(), (i = (n = e.opener) != null && n.isConnected ? e.opener : At.querySelector("[data-more-close]")) == null || i.focus(a);
      return;
    }
    t != null && t.isConnected ? t.focus(a) : (d = t == null ? void 0 : t.dataset) != null && d.more ? (l = E.querySelector('[data-more="' + CSS.escape(t.dataset.more) + '"]')) == null || l.focus(a) : (f = t == null ? void 0 : t.dataset) != null && f.summary ? (m = E.querySelector('[data-summary="' + CSS.escape(t.dataset.summary) + '"]')) == null || m.focus(a) : (k = t == null ? void 0 : t.hasAttribute) != null && k.call(t, "data-favs-edit") && ((S = E.querySelector("[data-favs-edit]")) == null || S.focus(a));
  }
  const fu = { moisture: "moisture", light: "light", brightness: "light", temperature: "temperature", fertility: "fertility", conductivity: "fertility" };
  function uu(t) {
    const e = String(jt(t).problem || ""), a = "sensor." + t.split(".")[1] + "_";
    return e === "none" ? [] : e.split(",").map((n) => n.trim().split(" ")).map(([n, i]) => {
      const d = fu[n], l = a + d;
      if (!d || !x[l] || !dn[d]) return "";
      const f = jt(l).unit_of_measurement || "", [m, k] = dn[d], S = i === "low";
      return '<div class="tfMoreGroup tfPlantProblem"><div class="tfMoreGroupName">' + q(xt(l)) + '</div><svg class="tfGraph tfPlantGraph" data-plant-graph="' + q(l) + '" data-guide="' + (S ? m : k) + '" data-guide-word="' + q("Wants " + (S ? "" : "up to ") + (S ? m : k).toLocaleString() + (f === "%" ? "%" : f ? " " + f : "") + (S ? " or more" : "")) + '" role="img" aria-label="' + q(xt(l)) + ', last 24 hours"></svg></div>';
    }).filter(Boolean);
  }
  const Oc = (t) => t.querySelectorAll("[data-plant-graph]").forEach((e) => jc(e.dataset.plantGraph, e, { guide: Number(e.dataset.guide), guideWord: e.dataset.guideWord }).then(() => Ol(e)));
  function Us(t, e, a, n = {}) {
    const i = e.map((I) => I[1]).concat(n.guide != null ? [n.guide] : []), d = n.zero ? 0 : Math.min(...i), l = Math.max(...i), f = Math.max(120, t.clientWidth || 260), m = Math.max(60, t.clientHeight || 130), k = 8, S = m - 20, v = Date.now() - 24 * 3600 * 1e3, M = 24 * 3600 * 1e3, W = (I) => Math.max(0, Math.min(f, (I - v) / M * f)), z = (I) => l === d ? (k + S) / 2 : S - (I - d) / (l - d) * (S - k);
    let H = "M" + W(e[0][0]).toFixed(1) + " " + z(e[0][1]).toFixed(1);
    if (e.length > 2) H = Mp(e.map((I) => [W(I[0]), z(I[1])]));
    else for (let I = 1; I < e.length; I++) H += n.smooth ? "L" + W(e[I][0]).toFixed(1) + " " + z(e[I][1]).toFixed(1) : "H" + W(e[I][0]).toFixed(1) + "V" + z(e[I][1]).toFixed(1);
    t.setAttribute("viewBox", "0 0 " + f + " " + m), t.setAttribute("aria-label", a), t.innerHTML = Sp(f, k, S) + '<path d="' + H + "V" + S + "H" + W(e[0][0]).toFixed(1) + 'Z" fill="' + (n.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + H + '" fill="none" stroke="' + (n.colour || "var(--primary)") + '" stroke-width="' + ke.graphs.weight + '" stroke-linejoin="round" stroke-linecap="round"/><text x="0" y="' + (m - 4) + '">24 h ago</text><text x="' + f + '" y="' + (m - 4) + '" text-anchor="end">Now</text>' + (n.guide != null ? '<line class="tfGuide" x1="0" x2="' + f + '" y1="' + z(n.guide).toFixed(1) + '" y2="' + z(n.guide).toFixed(1) + '"/><text class="tfGuideWord" x="' + f + '" y="' + (z(n.guide) < 20 ? z(n.guide) + 14 : z(n.guide) - 5).toFixed(1) + '" text-anchor="end">' + q(n.guideWord || "") + "</text>" : "");
  }
  const Ic = { lock: ["unlocked", "open", "opening"], cover: ["open", "opening", "closing"], valve: ["open", "opening", "closing"], vacuum: ["cleaning", "returning"] }, hu = (t, e) => {
    const a = t.split(".")[0];
    return Ic[a] ? Ic[a].includes(e) : a === "alarm_control_panel" || a === "climate" || a === "media_player" ? !["off", "standby", "disarmed", "unavailable", "unknown"].includes(e) : e === "on";
  }, mu = (t) => {
    const e = t.split(".")[0], a = jt(t).device_class;
    return e === "binary_sensor" ? { moisture: "Wet", smoke: "Smoke", gas: "Gas", carbon_monoxide: "Carbon monoxide", safety: "Unsafe" }[a] || (Li.includes(a) ? "Open" : "On") : { lock: "Unlocked", cover: "Open", valve: "Open", vacuum: "Cleaning", alarm_control_panel: "Armed" }[e] || "On";
  }, Fc = /* @__PURE__ */ new Map();
  let gu = 0;
  async function bu(t) {
    var i;
    let e = Fc.get(t);
    if (!e || Date.now() - e.at > 60 * 1e3) {
      let d = [];
      if (Ra(t) && Number.isFinite(Number((i = x[t]) == null ? void 0 : i.state))) d = Wc(t).map(([l, f]) => [l, String(f)]);
      else try {
        const l = await _({ type: "history/history_during_period", start_time: new Date(Date.now() - 864e5).toISOString(), entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        d = ((l == null ? void 0 : l[t]) || []).map((f) => [f.lu != null ? f.lu * 1e3 : Date.parse(f.last_updated || f.last_changed), String(f.s ?? f.state)]).filter(([f]) => Number.isFinite(f));
      } catch {
      }
      d.length || (d = (qa || []).filter((l) => l.entity_id === t).map((l) => [l.when * 1e3, String(l.state)])), e = { at: Date.now(), pts: d }, Fc.set(t, e);
    }
    const a = x[t], n = e.pts.slice().sort((d, l) => d[0] - l[0]);
    return a && (!n.length || n[n.length - 1][1] !== a.state) && n.push([Date.parse(a.last_changed) || Date.now(), a.state]), n;
  }
  async function qc(t, e, a) {
    const n = await bu(t);
    if (!e.isConnected) return;
    const i = n.map(([L, kt]) => [L, Number(kt)]);
    if (n.length > 1 && i.every(([, L]) => Number.isFinite(L))) {
      Us(e, i, xt(t) + ", last 24 hours");
      return;
    }
    const d = Date.now(), l = d - 864e5, f = Math.max(200, e.clientWidth || 360), m = 62, k = (L) => Math.max(0, Math.min(f, (L - l) / 864e5 * f)), S = [];
    let v = null;
    n.forEach(([L, kt]) => {
      const Zt = hu(t, kt);
      Zt && v == null ? v = Math.max(L, l) : !Zt && v != null && (S.push([v, Math.max(L, l)]), v = null);
    }), v != null && S.push([v, d]);
    const M = Fe(t) ? "var(--danger)" : t.startsWith("light.") ? "#ffaa00" : "var(--primary)", W = mu(t), z = "tfDayClip" + ++gu, H = S.map(([L, kt]) => W + (kt >= d - 1e3 && L <= l + 1e3 ? " all day" : kt >= d - 1e3 ? " since " + Sa(L) : L <= l + 1e3 ? " until " + Sa(kt) : " " + Sa(L) + "–" + Sa(kt)));
    let I = "", D = -1 / 0;
    S.forEach(([L], kt) => {
      const Zt = H[kt].length * 5.4, Rt = Math.min(k(L), f - Zt);
      Rt < D + 8 || (I += '<text x="' + Rt.toFixed(1) + '" y="10">' + q(H[kt]) + "</text>", D = Rt + Zt);
    });
    let Q = '<text x="' + f + '" y="' + (m - 2) + '" text-anchor="end">Now</text>';
    [0, 6, 12, 18].forEach((L) => {
      let kt = new Date(d).setHours(L, 0, 0, 0);
      kt > d && (kt -= 864e5), k(kt) > 8 && k(kt) < f - 34 && (Q += '<text x="' + k(kt).toFixed(1) + '" y="' + (m - 2) + '" text-anchor="middle">' + String(L).padStart(2, "0") + "</text>");
    }), e.setAttribute("viewBox", "0 0 " + f + " " + m), e.setAttribute("aria-label", xt(t) + ", last 24 hours: " + (H.length ? H.join(", ") : "no changes")), e.innerHTML = '<clipPath id="' + z + '"><rect x="0" y="18" width="' + f + '" height="26" rx="8"/></clipPath>' + I + '<rect x="0" y="18" width="' + f + '" height="26" rx="8" fill="var(--text)" fill-opacity=".1"/><g clip-path="url(#' + z + ')">' + S.map(([L, kt]) => '<rect x="' + k(L).toFixed(1) + '" y="18" width="' + Math.max(2, k(kt) - k(L)).toFixed(1) + '" height="26" fill="' + M + '"/>').join("") + "</g>" + (a && a >= l ? '<line x1="' + k(a).toFixed(1) + '" x2="' + k(a).toFixed(1) + '" y1="13" y2="49" stroke="var(--text)" stroke-width="2" stroke-linecap="round"/>' : "") + Q;
  }
  function Wc(t) {
    var n;
    const e = Number((n = x[t]) == null ? void 0 : n.state), a = Date.now();
    if (jt(t).state_class === "total_increasing") {
      const i = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), d = Math.max(1, a - i);
      return [...Array(49)].map((l, f) => i + d * f / 48).map((l) => [l, Math.round(e * Math.pow((l - i) / d, 1.3) * 100) / 100]);
    }
    if (Ra(t) && t.endsWith("_moisture")) return [...Array(48)].map((i, d) => [a - (48 - d) * 30 * 60 * 1e3, Math.round((e + 22 * Math.pow(1 - d / 48, 1.2)) * 10) / 10]);
    if (Ra(t) && t.endsWith("_light")) {
      const i = (l) => {
        const f = new Date(l).getHours() + new Date(l).getMinutes() / 60;
        return Math.max(0, Math.sin((f - 6) / 14 * Math.PI));
      }, d = (l) => 0.8 + 0.2 * i(l);
      return [...Array(48)].map((l, f) => a - (48 - f) * 30 * 60 * 1e3).map((l) => [l, Math.round(e * d(l) / d(a))]);
    }
    return [...Array(48)].map((i, d) => [a - (48 - d) * 30 * 60 * 1e3, Math.round(e * (0.96 + 0.04 * Math.sin(d / 6)) * 10) / 10]);
  }
  async function jc(t, e, a = {}) {
    var z, H;
    let n = dt.get(t);
    if (t.endsWith("_solar_power")) n = { at: Date.now(), points: td() };
    else if (Ra(t)) n = { at: Date.now(), points: Wc(t) };
    else if (!n || Date.now() - n.at > 5 * 60 * 1e3) {
      try {
        const I = new Date(Date.now() - 864e5).toISOString(), D = await _({ type: "history/history_during_period", start_time: I, entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), Q = ((D == null ? void 0 : D[t]) || []).map((L) => [L.lu != null ? L.lu * 1e3 : Date.parse(L.last_updated || L.last_changed), Number(L.s ?? L.state)]).filter(([L, kt]) => Number.isFinite(L) && Number.isFinite(kt));
        n = { at: Date.now(), points: Q };
      } catch {
        n = { at: Date.now(), points: [] };
      }
      dt.set(t, n);
    }
    const i = e || E.querySelector('[data-graph="' + CSS.escape(t) + '"]');
    if (!i) return;
    const d = x[t], l = ((z = d == null ? void 0 : d.attributes) == null ? void 0 : z.unit_of_measurement) || "", f = n.points.slice(), m = Number(d == null ? void 0 : d.state);
    if (Number.isFinite(m) && !t.endsWith("_solar_power") && f.push([Date.now(), m]), f.length < 2) {
      i.setAttribute("aria-label", xt(t) + ": no history for the last 24 hours"), i.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const k = f.map((I) => I[1]), S = Math.min(...k), v = Math.max(...k), M = (I) => I.toLocaleString(void 0, { maximumFractionDigits: Math.abs(I) >= 100 ? 0 : 1 }), W = ((H = d == null ? void 0 : d.attributes) == null ? void 0 : H.state_class) === "total_increasing";
    Us(i, f, xt(t) + ", last 24 hours: " + (W ? "+" + M(k[k.length - 1] - k[0]) : S === v ? M(S) : M(S) + " to " + M(v)) + (l ? " " + l : ""), { smooth: t.endsWith("_solar_power"), zero: t.endsWith("_solar_power"), ...a });
  }
  function Vc() {
    const t = E == null ? void 0 : E.querySelector("[data-solar]");
    if (!t) return;
    const e = td();
    Us(t, e, "Solar, last 24 hours: up to " + ze(Math.max(...e.map((a) => a[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function wu(t, e) {
    const a = e.entity_id, n = yt.get(a) || {}, i = { open_cover: 100, close_cover: 0, set_cover_position: e.position, toggle: sa(a) > 0 ? 0 : 100 }[t], d = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: e.tilt_position }[t];
    i != null && (n.pos = i), d != null && (n.tilt = d), t === "stop_cover" && (delete n.pos, delete n.tilt), t === "stop_cover_tilt" && delete n.tilt, n.at = Date.now(), yt.set(a, n);
  }
  function zc(t, e, a) {
    var i;
    const n = a == null ? void 0 : a.entity_id;
    return t !== "light" || typeof n != "string" || !ta[n] || !Ge(n) || a.brightness_pct != null || a.brightness != null ? [e, a] : e !== "turn_on" && !(e === "toggle" && ((i = x[n]) == null ? void 0 : i.state) !== "on") ? [e, a] : ["turn_on", { ...a, brightness_pct: ta[n] }];
  }
  function pi(t, e, a, n) {
    let i = { entity_id: a, ...n || {} };
    return [e, i] = zc(t, e, i), t === "cover" && wu(e, i), Ha[a] = (Ha[a] || 0) + 1, Ua.set(Jd, JSON.stringify(Ha)), Cr.call(t, e, i) ? Promise.resolve() : Promise.resolve(R(t, e, i));
  }
  function Ys(t) {
    const [e, a, n, i] = t.split("|");
    pi(e, a, n, i ? JSON.parse(i) : null).catch(() => {
    });
  }
  function fr(t, e) {
    rt.set("pos|" + t, e), pa.delete(t), za = za.map(() => ""), [E, At].forEach((n) => n.querySelectorAll('[data-blocks="' + CSS.escape(t) + '"]').forEach((i) => Ko(i, e)));
    const a = E.querySelector('.tfAction[data-k="' + CSS.escape(t) + '"] .tfName .activityRowMeta');
    if (a && (a.textContent = Math.round(e) + "%"), (T == null ? void 0 : T.id) === t) {
      const n = At.querySelector(".tfMoreState"), i = At.querySelector(".tfMoreSub");
      n && (n.textContent = Math.round(e) + "%", n.classList.add("live")), i && (i.textContent = "Currently " + sa(t) + "%");
    }
    Bc(t).forEach((n) => n.update(li(t)));
  }
  const vu = (t, e) => {
    const a = t.shiftKey ? 10 : 1, n = { ArrowUp: e + a, ArrowRight: e + a, ArrowDown: e - a, ArrowLeft: e - a, PageUp: e + 25, PageDown: e - 25, Home: 0, End: 100 }[t.key];
    return n == null ? null : Math.max(0, Math.min(100, Math.round(n)));
  };
  function yu(t, e) {
    var H;
    const a = t.dataset.blocks;
    (H = t.setPointerCapture) == null || H.call(t, e.pointerId);
    const n = (I) => {
      const D = t.getBoundingClientRect();
      return Math.max(0, Math.min(100, (I.clientX - D.left) / D.width * 100));
    }, i = n(e), d = e.clientX;
    let l = !1, f = zo(a), m = i, k = 0;
    const S = () => {
      f = Math.abs(m - f) < 0.2 ? m : f + (m - f) * 0.14, fr(a, f), k = requestAnimationFrame(S);
    }, v = () => {
      l || (l = !0, t.classList.add("fine"), k = requestAnimationFrame(S));
    }, M = setTimeout(v, 350), W = (I) => {
      m = n(I), Math.abs(I.clientX - d) > 6 && (clearTimeout(M), v());
    }, z = () => {
      clearTimeout(M), cancelAnimationFrame(k), t.removeEventListener("pointermove", W), t.removeEventListener("pointerup", z), t.removeEventListener("pointercancel", z), t.classList.remove("fine"), fr(a, l ? Math.round(f) : (Math.min(3, Math.floor(i / 25)) + 1) * 25), ur("pos", a);
    };
    t.addEventListener("pointermove", W), t.addEventListener("pointerup", z), t.addEventListener("pointercancel", z);
  }
  function Gc(t) {
    var e;
    O = t.dataset.area, E.querySelectorAll(".tfAreaPanel").forEach((a) => {
      var i;
      const n = a === t;
      a.classList.toggle("active", n), a.setAttribute("aria-expanded", String(n)), (i = a.querySelector(".panelExpanded")) == null || i.toggleAttribute("inert", !n);
    }), pa.set("areas", b(((e = E.querySelector('[data-k="areas"]')) == null ? void 0 : e.style.order) || 1));
  }
  const Zs = {
    bright: { value: (t, e) => Math.round(e * 100), text: (t, e) => e ? e + "%" : "Off", send: (t, e) => e > 0 ? ["light", "turn_on", { brightness_pct: e }] : ["light", "turn_off", {}] },
    ct: { value: (t, e) => {
      const [a, n] = gn(t);
      return Math.round(a + e * (n - a));
    }, text: (t, e) => e.toLocaleString() + "k", send: (t, e) => ["light", "turn_on", { color_temp_kelvin: e }] },
    hue: { value: (t, e) => Math.round(e * 360), text: () => "Colour", send: (t, e) => {
      var a;
      return ["light", "turn_on", { hs_color: [e, Math.max(60, ((a = jt(t).hs_color) == null ? void 0 : a[1]) || 100)] }];
    } },
    pos: { value: (t, e) => Math.round(e * 100), text: (t, e) => Math.round(e) + "%", send: (t, e) => ["cover", "set_cover_position", { position: Math.round(e) }] },
    tilt: { value: (t, e) => Math.round(e * 100), text: (t, e) => "Tilt " + e + "%", send: (t, e) => ["cover", "set_cover_tilt_position", { tilt_position: e }] },
    vol: { value: (t, e) => Math.round(e * 100) / 100, text: (t, e) => Math.round(e * 100) + "%", send: (t, e) => ["media_player", "volume_set", { volume_level: e }] }
  };
  function fi(t, e, a, n) {
    var m;
    const i = Zs[e].value(a, n);
    rt.set(e + "|" + a, i);
    const d = Math.round(n * 100) + "%", l = t.querySelector("i");
    if (e === "tilt") {
      l.style.width = "calc((100% - 8px) * " + n + ")";
      const [k, S] = t.querySelectorAll("span");
      k.classList.toggle("lit", n > 0.08), S.classList.toggle("lit", n > 0.92), pa.delete(a), za = za.map(() => ""), Bc(a).forEach((v) => v.update(li(a)));
    } else if (l) l.style.width = d;
    else {
      let k = t.querySelector("b");
      k || (k = document.createElement("b"), t.appendChild(k)), k.style.left = d;
    }
    t.setAttribute("aria-valuenow", String(Math.round(n * 100)));
    const f = (m = t.closest(".tfAction") || t.closest(".tfMore")) == null ? void 0 : m.querySelector(".tfName .activityRowMeta, .tfMoreState");
    f && (f.textContent = Zs[e].text(a, i));
  }
  function ur(t, e) {
    const a = rt.get(t + "|" + e), [n, i, d] = Zs[t].send(e, a), l = () => setTimeout(() => {
      rt.delete(t + "|" + e), Te();
    }, 1500);
    pi(n, i, e, d).then(l, l);
  }
  function Uc(t) {
    t.addEventListener("click", (e) => {
      var n;
      const a = e.target.closest("[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-fav-hide],[data-energy-pick],[data-more-page],[data-path],.tfAreaPanel");
      if (Ue && !e.target.closest(".tfBoardMenu,[data-board-more]") && Wa(), !(!a || !t.contains(a) || a.disabled))
        if (a.dataset.boardMore)
          (Ue == null ? void 0 : Ue.key) === a.dataset.boardMore ? Wa(!0) : _f(a.dataset.boardMore, a);
        else if (a.dataset.boardAct) Tf(Ue.key, a.dataset.boardAct);
        else if (a.dataset.boardShow) ms(a.dataset.boardShow);
        else if (a.dataset.favHide) mc(a.dataset.favHide, !1);
        else if (a.dataset.energyPick) Pl(a.dataset.energyPick);
        else if (a.dataset.act) Ys(a.dataset.act);
        else if (a.hasAttribute("data-details")) Is(!(T != null && T.details));
        else if (a.hasAttribute("data-details-close")) Is(!1);
        else if (a.dataset.summary) tr(a.dataset.summary, a);
        else if (a.dataset.star) Qn(a.dataset.star);
        else if (a.hasAttribute("data-more-back")) {
          const i = T.id;
          T = T.back, zs(), (n = At.querySelector('.tfMore [data-more="' + CSS.escape(i) + '"]')) == null || n.focus({ preventScroll: !0 });
        } else a.hasAttribute("data-favs-edit") ? ci("favourites", a) : a.dataset.acts ? JSON.parse(a.dataset.acts).forEach(([i, d, l, f]) => pi(i, d, l, f).catch(() => {
        })) : a.dataset.more ? ci(a.dataset.more, a) : a.hasAttribute("data-more-close") ? di() : a.dataset.morePage ? Hc(Number(a.dataset.morePage)) : a.dataset.path ? Mn(a.dataset.path) : a.dataset.go ? Cc("room:" + a.dataset.go) : a.hasAttribute("data-area-back") ? Bs() : a.classList.contains("tfAreaPanel") && !a.classList.contains("active") && Gc(a);
    }), t.addEventListener("keydown", (e) => {
      var n, i, d, l, f, m, k;
      const a = e.target;
      if ((n = a.dataset) != null && n.more && a.tagName !== "BUTTON" && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), ci(a.dataset.more, a)), (i = a.dataset) != null && i.energyPick && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), Pl(a.dataset.energyPick)), (d = a.classList) != null && d.contains("tfAreaPanel") && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), Gc(a)), (l = a.dataset) != null && l.summary && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), tr(a.dataset.summary, a)), e.key === "Escape" && Ue && t === E) {
        e.preventDefault(), Wa(!0);
        return;
      }
      if (e.key === "Escape" && ea && t === E) {
        e.preventDefault(), hs(!1), (f = p("dashEditNav")) == null || f.focus();
        return;
      }
      if (e.key === "Escape" && J && t === E && (e.preventDefault(), Bs()), (m = a.dataset) != null && m.blocks) {
        const S = a.dataset.blocks, v = vu(e, Math.round(zo(S)));
        if (v == null) return;
        e.preventDefault(), fr(S, v), clearTimeout(ne.get(S)), ne.set(S, setTimeout(() => ur("pos", S), 500));
        return;
      }
      if ((k = a.dataset) != null && k.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
        e.preventDefault();
        const [S, v] = a.dataset.drag.split("|"), M = Number(a.getAttribute("aria-valuenow")) / 100, W = e.key === "Home" ? 0 : e.key === "End" ? 1 : Math.max(0, Math.min(1, M + (e.key === "ArrowLeft" || e.key === "ArrowDown" ? -0.05 : 0.05)));
        fi(a, S, v, W), ur(S, v);
      }
    }), t.addEventListener("pointerdown", (e) => {
      var Zt;
      const a = e.target.closest("[data-blocks]");
      if (a && e.button === 0) {
        e.preventDefault(), yu(a, e);
        return;
      }
      const n = e.target.closest("[data-drag]");
      if (!n || e.button > 0) return;
      const [i, d] = n.dataset.drag.split("|"), l = i === "bright" && !Ge(d), f = e.pointerType !== "mouse";
      if (l && !f) {
        Ys(Jt("light", "toggle", d));
        return;
      }
      const m = i === "bright" && ((Zt = x[d]) == null ? void 0 : Zt.state) !== "on", k = i === "tilt" ? 4 : 0, S = () => n.getBoundingClientRect().width - k * 2, v = (Rt) => {
        const Kt = n.getBoundingClientRect();
        return Math.max(0, Math.min(1, (Rt.clientX - Kt.left - k) / S()));
      };
      let M = f ? "waiting" : m ? "pressed" : "dragging", W = 0;
      const z = e.clientX, H = e.clientY, I = (Rt, Kt) => Math.hypot(Rt.clientX - z, Rt.clientY - H) > Kt, D = () => {
        try {
          n.setPointerCapture(e.pointerId);
        } catch {
        }
      };
      f || (e.preventDefault(), D()), M === "dragging" && fi(n, i, d, v(e));
      const Q = () => {
        var Rt, Kt;
        M = "sliding", ft = n, n.classList.add("held"), D(), (Rt = navigator.userActivation) != null && Rt.hasBeenActive && ((Kt = navigator.vibrate) == null || Kt.call(navigator, 8)), W = m ? (ta[d] ?? 100) / 100 : Number(n.getAttribute("aria-valuenow")) / 100;
      }, L = (Rt) => {
        M === "waiting" && I(Rt, vt) ? !l && Math.abs(Rt.clientX - z) > Math.abs(Rt.clientY - H) ? Q() : M = "gone" : M === "pressed" && I(Rt, 4) && (M = "dragging"), M === "sliding" ? fi(n, i, d, Math.max(0, Math.min(1, W + (Rt.clientX - z) / S()))) : M === "dragging" && fi(n, i, d, v(Rt));
      }, kt = (Rt) => {
        ["pointermove", "pointerup", "pointercancel"].forEach((Kt, be) => n.removeEventListener(Kt, be ? kt : L)), n.classList.remove("held"), ft === n && (ft = null), M === "sliding" || M === "dragging" ? ur(i, d) : Rt.type === "pointerup" && l ? Ys(Jt("light", "toggle", d)) : Rt.type === "pointerup" && m && (M === "waiting" || M === "pressed") && pi("light", "turn_on", d).catch(() => {
        });
      };
      n.addEventListener("pointermove", L), n.addEventListener("pointerup", kt), n.addEventListener("pointercancel", kt);
    }), t.addEventListener("touchmove", (e) => {
      ft && e.cancelable && e.preventDefault();
    }, { passive: !1 });
  }
  return E && w && (Gt(), Uc(E), Uc(At), At.addEventListener("click", (t) => {
    t.target === At && di();
  }), (Yc = o.getElementById("homeNav")) == null || Yc.addEventListener("click", () => {
    J && Bs();
  }), (Zc = o.querySelector(".bottomNav")) == null || Zc.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + Di + "</button>"), (Kc = p("dashEditNav")) == null || Kc.addEventListener("click", () => A ? Ds(!po) : hs(!ea)), E.addEventListener("pointerdown", Kf), E.addEventListener("pointerdown", Sf), E.addEventListener("click", (t) => {
    A && po && t.target.closest(".tfBoardItem") && (t.preventDefault(), t.stopPropagation());
  }, !0), E.addEventListener("scroll", (t) => {
    var e;
    (e = t.target.classList) != null && e.contains("hcFadeList") && Ql(t.target);
  }, !0), new ResizeObserver(() => {
    g.classList.contains("tfDash") && os() !== es ? Te() : Qr();
  }).observe(E), window.addEventListener("resize", Qr, { passive: !0 }), At.addEventListener("keydown", (t) => {
    var e, a;
    t.key === "Escape" ? (t.stopPropagation(), T != null && T.details ? Is(!1) : di()) : (t.key === "ArrowLeft" || t.key === "ArrowRight") && ((a = (e = t.target).closest) != null && a.call(e, ".tfMoreDots")) && (t.preventDefault(), Hc(((T == null ? void 0 : T.page) || 0) + (t.key === "ArrowRight" ? 1 : -1)));
  })), Z(), {
    update(t) {
      if (!w) return;
      const e = !Object.keys(x).length;
      x = { ...Object.fromEntries(Object.entries(x).filter(([n]) => Ra(n))), ...t || {} };
      for (const n in x) n.startsWith("light.") && x[n].state === "on" && Ge(n) && Oa(n, $a(x[n]));
      e ? uo() : Te();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      jo = !0, he == null || he.destroy(), he = null, me == null || me.forEach((t) => t.destroy()), me = null;
    },
    resume() {
      jo = !1, !(!w || !(E != null && E.querySelector("[data-tf]"))) && (fa.isConnected && Tr(fa.style.order), Dr());
    }
  };
}
const A0 = "0.2.0";
function C0() {
  if (document.getElementById("homecore-fonts")) return;
  const o = document.createElement("link");
  o.id = "homecore-fonts", o.rel = "stylesheet", o.href = "https://fonts.googleapis.com/css2?family=Geist:wght@200;300;400;500;600;700&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(o);
}
class _0 extends HTMLElement {
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
    C0();
    const r = this.shadowRoot || this.attachShadow({ mode: "open" });
    r.innerHTML = `<style>${Tu}${Du}${Lu}${Eu}</style>${Bu}`;
    const c = r.getElementById("app");
    c.style.opacity = "0", this._shell = Hu(r, {
      setLight: (p) => this.classList.toggle("lightBody", p),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._test = S0(r, { config: this._config, getHass: () => this._hass }), this._test.update(this._hass.states), Hh(r, c), Oh(r), this.isConnected || this._test.suspend(), c.style.transition = "opacity .2s ease", c.style.opacity = "";
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
customElements.get("homecore-card") || (customElements.define("homecore-card", _0), window.customCards = window.customCards || [], window.customCards.push({
  type: "homecore-card",
  name: "HomeCore",
  description: "A page for your whole house, to try HomeCore with your own devices.",
  preview: !1
}), console.info(`%c HOMECORE %c ${A0} `, "background:#D0FF00;color:#090909;font-weight:700", ""));
