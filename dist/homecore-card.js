const Du = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-accent-secondary:#d0ff00;--color-text-accent:#d0ff00;--color-text-on-accent:#090909;--color-bg-resting:#1f7a4d;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--accent-text:var(--color-text-accent);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary);--secondary:var(--color-accent-secondary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-text-accent:#26221e;--color-accent-secondary:#03a9f4;--color-bg-resting:#7dbb98;--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#26221e;--color-text-on-selected:#fbf9f6;--color-bg-segment-selected:#fbf9f6;--color-accent-primary:#0288d1;--color-border-focus:#0288d1;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.pill,.primary,.navBtn,.tab,.back{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.hcAreaGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.hcAreaPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.hcAreaPanel.active{flex:7 1 0;min-width:0;cursor:default}.hcAreaPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.hcAreaPanel:before,.hcAreaPanel:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.hcAreaPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.hcAreaPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}#app.light .hcAreaPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.hcAreaPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.hcAreaPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.hcAreaPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}@media (max-width:900px){.hcAreaGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.hcAreaPanel,.hcAreaPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.panelCollapsed{display:none}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.sectionLabel{margin:0 0 8px 22.4px}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.toggleList{display:grid;gap:9.6px}.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.grid{grid-template-columns:1fr}}@media (max-width:620px){#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}}.card,.panel,.tile{border-radius:var(--r-card)}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .hcAreaPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.grid>*{min-width:0}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}:host{--primary:#03A9F4;--secondary:#D0FF00;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.activityRowMeta{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.toggleRow strong,.primary,.tab,.themeBtn,.wxLayoutBtn,.toast{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.note,.settingsSelect,.pill{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.metaTable th,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.hcAreaGallery,.hcAreaPanel{height:340px}@media (max-width:900px){.hcAreaPanel,.hcAreaPanel.active{height:320px}}@media (max-width:900px){.hcAreaGallery{height:auto}.hcAreaPanel,.hcAreaPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel{margin-left:16px}.grid{gap:8px}.sectionLabel{margin-bottom:8px}.hcAreaGallery{gap:8px}.hcAreaPanel,.hcAreaPanel.active{flex:0 0 100%;min-width:100%}.card,.hcAreaPanel{padding:16px}.activityRows{gap:8px}.activityRow{padding:10px 12px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}@media (prefers-reduced-motion: reduce){.sheet{transition:none}}.card,.panel,.hcAreaPanel.active{padding:var(--inset)}.hcAreaPanel{border-radius:var(--r-tile);padding:var(--inset)}.hcAreaPanel.active,.activityRow{border-radius:var(--r-tile)}.activityRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.activityRowMeta{color:var(--text)}.activityRowMeta{margin-top:0}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}#app{--group-bg:var(--card)}.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .note{margin:0 4px 4px}#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}', Eu = `#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}:is(#homeView,.tfMoreBackdrop,.tfEditTray,.tfMiniPhone) .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)),#homeView .tfATile{transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover,#homeView .tfATile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .wxWide{gap:16px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}@media (max-width:620px){#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--text)}#app.house.light{--hc-icon:#e6e6e6}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house .tfAreaHead .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house .tfAreaHead .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}.tfCard .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfAction>.tfActionHead{margin-bottom:auto}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .toggleRow:has(>.themeChoice,>.settingsSelect){flex-direction:column;align-items:stretch;gap:12px}#housePane .toggleRow>.settingsSelect{width:100%}#housePane .themeChoice[hidden]{display:none}#housePane .houseTab>.card:has(>.tfSetGroup){gap:24px}#housePane .tfSetGroup{display:grid;gap:8px}#housePane .tfSetGroup>.sectionLabel{margin:0 16px}#housePane{container:housepane/inline-size}#housePane .tfLightCards{display:none}@container housepane (width < 720px){#housePane .houseTab .metaTableWrap{display:none}#housePane .tfLightCards{display:grid;gap:8px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDacPad{min-width:0}.tfDacPad>dual-controller-v3{display:block}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}:is(.tfStep,.tfSeg,.tfBlocks,.tfTilt,.tfChips){font-family:var(--font-tile)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:0 1 46px;min-width:32px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);cursor:pointer}.tfStep svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfStep output{flex:1 0 auto;white-space:nowrap;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}#housePane .themeChoice,.tfBoardMenu .tfHeightTabs,.wb .wbSegments{gap:4px;padding:4px;border:0;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}#housePane .themeChoice{display:flex;flex-wrap:nowrap;width:100%}#housePane .themeChoice>button{flex:1 1 0;overflow:hidden;text-overflow:ellipsis}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button){height:38px;min-width:0;min-height:0;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile)!important;white-space:nowrap;cursor:pointer}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button):hover:not(:disabled):not([aria-pressed=true]):not([aria-checked=true]):not(.active){background:transparent;color:var(--text)}:is(#housePane .themeChoice :is(.wxLayoutBtn[aria-pressed=true],.themeBtn.active),.tfBoardMenu .tfHeightTabs button[aria-checked=true],.wb .wbSegments button[aria-pressed=true]){background:var(--bright);color:var(--on-bright)}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfAreaPanel .hcAreaPanelTop>div{min-width:0}.tfATags{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:4px;margin-left:auto;min-width:0}.tfATags .sourceTag{display:block;margin:0;max-width:100%;padding:6px 12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none;container:blocks/inline-size}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:12px 4px 4px 12px}.tfBlocks>span:nth-child(4){border-radius:4px 12px 12px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 14px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b small{font:inherit}@container blocks (width < 164px){.tfBlocks b small{display:none}}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.tfTilt i{position:absolute;top:4px;bottom:4px;left:4px;border-radius:12px;background:var(--primary)}.tfTilt span{position:relative;padding:0 16px;color:var(--text);font:600 14px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns svg{fill:none}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}#app.house .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}#app.house .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-l);--g1:var(--g1-l);--g2:var(--g2-l)}#app.house .tfSum[data-summary=climate] .tfIcon svg path{fill:url(#hcClimateGrad)}.tfGradDefs{position:absolute;width:0;height:0;overflow:hidden;pointer-events:none}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMoreBackdrop.tfMoreUnder{z-index:179;pointer-events:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}.tfMoreTileHead .tfName{display:grid;flex:1;min-width:0;cursor:default}.tfMoreTileHead :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreTileHead .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfMoreTileHead div.tfIcon{cursor:default}.tfMoreTileHead.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreTileHead.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMorePages{display:grid;grid-auto-flow:column;grid-auto-columns:100%;align-items:start;gap:20px;flex:none;overflow-x:auto;overflow-y:hidden;overscroll-behavior-x:contain;scroll-snap-type:x mandatory;scrollbar-width:none;transition:height .25s cubic-bezier(.2,.7,.3,1)}@media (prefers-reduced-motion:reduce){.tfMorePages{transition:none}}.tfMorePages::-webkit-scrollbar{display:none}.tfMorePage{display:flex;flex-direction:column;gap:14px;min-width:0;scroll-snap-align:start;scroll-snap-stop:always}.tfMoreSpace{flex:none;display:flex;flex-direction:column;justify-content:space-between;gap:12px;height:224px;padding:18px;border-radius:16px;background:var(--tile);overflow:hidden}.tfMoreSpace.tfMoreFill{justify-content:center;align-items:center;height:auto;padding:0;background:none;border-radius:0}.tfMoreSpace.tfMoreFill>.tfCoverArt{width:100%;height:auto;max-width:none;align-self:center}.tfMoreSpace.tfMoreFill>.tfDacPad{width:100%;height:100%}.tfMoreBig{display:flex;align-items:baseline;min-width:0;font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfMoreBig.live{color:var(--primary)}.tfMoreNum{overflow:hidden;text-overflow:ellipsis}.tfMoreUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfMoreFacts{display:flex;flex:1;flex-direction:column;justify-content:space-evenly;min-height:0}.tfMoreFact{display:flex;justify-content:space-between;gap:16px;font:400 14px/20px var(--font)}.tfMoreFact span:first-child{color:var(--muted)}.tfMoreFact span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreGraph{display:flex;flex:none;flex-direction:column;gap:6px}.tfMoreGraph .tfMoreGroupName{margin:0}.tfMoreGraph .tfGraph.tfDay{width:100%}.tfMoreDots{display:flex;flex:none;justify-content:center;gap:4px;margin-top:-4px}.tfMoreDots button{display:grid;place-items:center;width:24px;height:24px;min-height:0;padding:0;border:0;background:none;cursor:pointer}.tfMoreDots button:before{content:"";width:8px;height:8px;border-radius:50%;background:var(--muted);opacity:.45;transition:opacity .15s ease,background .15s ease}.tfMoreDots button[aria-selected=true]:before{background:var(--text);opacity:1}.tfMoreDots.tfMorePageIcons{gap:3px;align-self:center;margin-top:0;padding:3px;border-radius:19px;background:var(--tile)}.tfMoreDots.tfMorePageIcons button{width:48px;height:32px;border-radius:16px;color:var(--muted);transition:background .15s ease,color .15s ease}.tfMoreDots.tfMorePageIcons button:before{display:none}.tfMoreDots.tfMorePageIcons button svg{width:20px;height:20px;fill:currentColor}.tfMoreDots.tfMorePageIcons button[aria-selected=true]{background:var(--text);color:var(--card)}.tfMoreDots.tfMorePageIcons button:not([aria-selected=true]):hover{color:var(--text)}#homeView .grid>.tfDashTiles>.tfAction.tfHeadOnly,#homeView .grid .tfAction.tfHeadOnly{align-self:start}.tfMoreLink{margin-top:auto}.tfMoreLink svg{transform:none!important}.tfMorePage .tfMoreRows{flex:none}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card.tfCard{container-type:inline-size}#homeView .card.tfCard .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMorePair.still{animation:none}#app[data-more=sheet] .tfMore{width:min(640px,100vw)}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}#homeView .hcAreaPanel.tfAreaPanel{padding:18px 20px 10px}.tfAreaPanel .tfATiles{margin-inline:-10px}.tfAreaPanel .hcAreaPanelTop{justify-content:flex-start;gap:14px;padding:0}.tfAreaPanel .panelExpanded{justify-content:flex-start;gap:16px}.tfAreaPanel .icon{width:22px;height:22px}.tfATitle{display:flex;flex-direction:column;align-items:flex-start;min-width:0}#app .tfAName{max-width:100%;min-height:0;padding:0;border:0;border-radius:6px;background:none;color:var(--text);font:700 24px/1.2 var(--font-tile);letter-spacing:-.01em;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.tfAreaIcon{flex:none;border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}button.tfAreaIcon{cursor:pointer}.tfAreaGlyph{display:grid;place-items:center}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{display:grid;grid-template-columns:repeat(var(--peg-n),var(--peg-w));grid-auto-rows:60px;grid-auto-flow:row dense;align-items:stretch;gap:16px;max-width:none}#app.tfWeatherOpen .tfBento.tfPegs .wbItem{width:auto;min-height:0;align-self:stretch;display:flex;flex-direction:column}#app.tfWeatherOpen .tfBento.tfPegs .wbItem>*{flex:1;min-height:0}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=wide]{grid-column:span 2;grid-row:span 5}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=double]{grid-column:span 2;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=tile]{grid-column:span 1;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbCard.wbSquare{aspect-ratio:auto}#app.tfWeatherOpen .tfBento.tfPegs .wbWeather .wbNow{margin-bottom:auto}#app.tfWeatherOpen .tfBento.tfPegs :is(.wbStripScroll,.wbBars .wbDayBars,.wbBars.wbTabbed .wbDayBars){min-height:0}.tfABig{display:flex;flex-direction:column;align-items:flex-start;gap:4px;margin-top:auto;min-height:0;height:auto;padding:0;border:0;border-radius:8px;background:none;color:var(--text);text-align:start;cursor:pointer}.tfABigMain{font:200 32px/38.5px var(--font-tile);letter-spacing:0;white-space:nowrap}.tfABigUnit{margin-inline-start:.25em;font-size:inherit;letter-spacing:0}.tfABigSub{max-width:100%;overflow:hidden;color:var(--muted);font:400 16px/1.2 var(--font);white-space:nowrap;text-overflow:ellipsis}.tfATiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));min-height:calc(2 * var(--tile-min));align-content:end}.tfABig{max-width:100%}.panelExpanded:not(:has(.tfATiles)) .tfABig{margin-bottom:calc(2 * var(--tile-min) + 16px)}#app.tfBoard .tfAreas[data-rows="5"] .tfACMain{position:absolute;left:10px;right:10px;bottom:170.3px;max-width:none;text-align:center}#app.tfBoard .tfAreas[data-rows="4"] .tfACMain{position:absolute;left:10px;right:10px;bottom:164.1px;max-width:none;text-align:center}#app.tfBoard .tfAreas[data-rows="4"] .panelExpanded:not(:has(.tfATiles)) .tfABig{margin-bottom:calc(2 * var(--tile-min) + 12px)}.tfATile{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile)}.tfATile>:is(div,.tfName):last-child{min-width:0}.tfATile .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfATile.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfATile :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:18px 0 10px;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:6px;max-width:calc(100% - 20px)}.tfACMain{max-width:calc(100% - 20px);font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px);min-height:60px}.tfACTiles:has(>:nth-child(3)){margin-top:-60px}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}.tfACTiles:has(>:nth-child(2)){margin-top:-60px}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{gap:28px;padding:40px;background:var(--bg)}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:-20px -20px 0 0}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead) .activityTitle{font-size:24px}@media (max-width:620px){#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:0}}@media (min-width:621px){#app:not([data-more=sheet]) .tfMoreBackdrop.wide{place-items:start center}}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px}.tfMoreActions .tfAction{grid-column:auto}.tfMoreActions>.activityRow{align-self:start;display:grid;grid-auto-flow:column;grid-template-columns:auto minmax(0,1fr);align-items:center;align-content:start;gap:12px;min-width:0;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfMoreActions>.activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreActions>.tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreActions>.activityRow :is(.activityRowName,.activityRowMeta){display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreActions>.activityRow.alert .activityRowMeta{color:var(--danger)}@media (max-width:620px){.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash :is(.tfDash-aq,.tfDash-pollen,.tfDash-radar,.tfDash-hourly,.tfDash-sun,.tfDash-moon,.tfDash-uv,.tfDash-humidity,.tfDash-pressure,.tfDash-wind,.tfDash-visibility){order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app .tfNotAdded{display:none!important}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:1 0 409px}#app.tfDash .tfAreaPanel:not(.active){flex:0 0 128px}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;margin-top:auto;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(2,minmax(0,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app.house .tfDashBento .wbItem[data-size]{width:100%}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}.tfDash-wx .wbCondition{display:none}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .hcAreaGallery,#app.tfBoard .tfAreas .hcAreaPanel{height:100%;min-height:0}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;pointer-events:none;color:var(--text)}.tfBoardCells svg{display:block;overflow:visible}.tfBoardCells pattern circle{fill:currentColor;fill-opacity:.16}.tfBoardCells .tfGridCross{fill:none;stroke:currentColor;stroke-opacity:.45;stroke-width:1.5;stroke-linecap:round}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfHeight{display:grid;gap:6px;padding:6px 6px 8px}.tfHeightLabel{padding:0 6px;color:var(--muted);font:500 12px/16px var(--font)}.tfHeightTabs{display:grid;grid-template-columns:repeat(5,1fr)}.tfBoardMenu .tfHeightTabs button{justify-content:center}.tfBoardMenu .tfHeightTabs button:disabled{opacity:.35}.tfWidth{padding-top:0}.tfWidth .tfHeightTabs{grid-template-columns:repeat(3,auto)}.tfSourceList{display:grid;gap:2px}.tfBoardMenu .tfSourceList button[aria-checked=true]{background:var(--bright);color:var(--on-bright)}.tfBoardMenu .tfSourceList button[aria-checked=true]:hover{background:var(--bright)}.tfBoardMenu .tfWidth .tfHeightTabs button{white-space:nowrap}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows{grid-auto-rows:var(--fill-row,60px);margin-top:0}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows>.activityRow{min-height:0;height:var(--fill-row,60px);box-sizing:border-box}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]{padding:0;gap:0}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityHeader,#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.tfDashGraph{display:none}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityRows{margin:0;flex:1}#app.tfBoard .tfBoardItem.tfAction[data-rows="1"]{padding:10px;border-radius:24px}.tfRoomTile{cursor:pointer}.tfRoomTile .tfRoomIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomInline,.tfRoomSub{display:none}.tfRoomReading{display:flex;flex-direction:column;gap:4px;min-width:0}.tfRoomBig{overflow:hidden;color:var(--text);font:500 46px/46px var(--font-tile);letter-spacing:-.92px;white-space:nowrap;text-overflow:ellipsis}.tfRoomSub{overflow:hidden;color:var(--muted);font:400 16px/19px var(--font);white-space:nowrap;text-overflow:ellipsis}.tfRoomDevices{display:flex;gap:12px}.tfRoomDevices .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfRoomDevices .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}#app.tfBoard .tfRoomTile[data-rows="1"] .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-rows="1"] :is(.tfRoomReading,.tfRoomDevices),#app.tfBoard .tfRoomTile[data-rows="2"] .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfActionHead .activityRowMeta{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfRoomSub{display:block}#app.tfBoard .tfRoomTile[data-rows="4"] .tfRoomBig{font-size:52px;line-height:52px;letter-spacing:-1.92px}#app.tfBoard .tfRoomTile[data-rows="5"] .tfRoomBig{font-size:64px;line-height:64px;letter-spacing:-1.92px}#app.tfBoard .tfRoomTile[data-cols="1"]:is([data-rows="3"],[data-rows="4"],[data-rows="5"]) .tfRoomDevices{display:grid;grid-template-columns:repeat(2,max-content)}#app.tfBoard .tfRoomTile[data-cols="1"][data-rows="3"]:has(.tfRoomDevices) .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-cols="1"][data-rows="3"]:has(.tfRoomDevices) .tfRoomReading{display:none}#app.tfBoard .tfRoomTile[data-cols="1"]:is([data-rows="4"],[data-rows="5"]) .tfRoomDevices{min-height:calc(2 * var(--chip-size) + 12px);align-content:start}.tfRoomHeads{display:none;gap:12px 16px}.tfRoomDev{display:flex;align-items:center;gap:12px;min-width:0;padding:0;border:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfRoomDev .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomDev .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfRoomDevName{display:flex;flex-direction:column;min-width:0}.tfRoomDevName>span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]){flex-direction:row;align-items:center;gap:12px}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"])>.tfActionHead{flex:1;margin-bottom:0}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]) .tfRoomDevices{display:flex}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomHeads{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-cols="2"]):not([data-rows="1"]) .tfRoomHeads{grid-template-columns:repeat(4,minmax(0,1fr))}#app.tfBoard .tfRoomTile[data-cols="2"][data-rows="2"] .tfRoomDev:nth-child(n+3){display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]):has(.tfRoomDevices) .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]):has(.tfRoomDevices) .tfRoomReading{display:none}#app.tfBoard .tfDashBento[data-rows="1"] .wbCard{padding:10px;border-radius:24px}#app.tfBoard .tfDashBento[data-rows="1"] .wbVisual{display:none}#app.tfBoard .tfDash-wx[data-rows="1"] .wbNow{margin:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbWx.wbS90{width:40px;height:40px;border-radius:12px}#app.tfBoard .tfDashBento[data-rows] :is(.wb,.wbBento,.wbItem){height:100%;min-height:0}#app.tfBoard .tfDashBento[data-rows] .wbCard{height:100%;min-height:0;box-sizing:border-box;aspect-ratio:auto}#app.tfBoard .tfDash-wx[data-rows="1"] .wbDeg{font-size:20px;letter-spacing:0;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbPlace{font-size:13px;line-height:18px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbUnit{font-size:14px;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbWx.wbS90{width:100px;height:100px;border-radius:31px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbDeg{font-size:80px;line-height:80px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbUnit{font-size:30px;line-height:38px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbWeather{flex-direction:row;align-items:center;gap:16px}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNow{flex:none}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNextHours{display:flex;flex:1 1 0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbWeather{justify-content:center;padding-top:0;padding-bottom:0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) :is(.wbNow,.wbSummary){display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbColumns{display:flex;flex:none;height:185px}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsDay{display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsNow{display:inline}#app.tfBoard .tfDash-wx[data-narrow] .wbCard.wbWeather{gap:12px;padding:18px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbWx.wbS90{width:64px;height:64px;border-radius:20px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbDeg{font-size:46px;line-height:46px;letter-spacing:-.92px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbUnit{font-size:20px;line-height:26px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-narrow] .wbHalves{display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="3"] .wbNextHours{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow] .wbHour:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;flex:none;height:auto;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumn:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbHalves{display:none}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx:not([data-narrow])[data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="4"]) .wbSummary{display:none}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) :is(.wbColumns,.wbHalves){display:none}#app.tfBoard .tfDash-wx[data-rows="4"] .wbColumns{flex:1 1 0;height:auto;min-height:0;margin-top:0}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn{justify-content:flex-start;gap:8px;padding:12px 0 16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn .wbWx{width:40px;height:40px;border-radius:16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbTemps{gap:4px}#app.tfBoard .tfDash-wx[data-rows="4"] .wbHalves>:nth-child(n+5){display:none}#app.tfBoard .tfDash-energy[data-rows="2"] .tfDashGraph{display:none}#app.tfBoard .tfDash-energy:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) .activityRows{grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr)}#app.tfBoard .tfDash-energy[data-rows="3"] .tfDashGraph{min-height:0}#app.tfBoard .tfDashBento[data-rows="2"] .wbBaseRows{display:none}#app.tfBoard .tfDashBento[data-rows="2"] :is(.wbRadar,.wbCompareBars,.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfDashBento[data-rows="3"] :is(.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfAreas[data-rows="1"] .hcAreaPanel.tfAreaPanel{padding:10px}#app.tfBoard .tfAreas[data-rows="1"] .panelExpanded{display:grid;grid-template-columns:40px minmax(0,1fr);gap:0 12px;align-content:center}#app.tfBoard .tfAreas[data-rows="1"] :is(.panelExpanded>.hcAreaPanelTop,.tfACTop){display:contents}#app.tfBoard .tfAreas[data-rows="1"] .panelExpanded .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] .tfATitle .tfAName{font-size:14px;line-height:20px;height:auto}#app.tfBoard .tfAreas[data-rows="1"] .tfABig{margin:0;flex-direction:row}#app.tfBoard .tfAreas[data-rows="1"] .tfABigMain{font-size:14px;line-height:18px;letter-spacing:0}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfABigUnit){font-size:14px}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfABigSub,.tfATiles,.tfACTiles,.sourceTag){display:none}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed{display:grid;grid-template-columns:40px minmax(0,1fr);column-gap:12px;align-content:center;padding:0}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfACName,.tfACMain){margin:0;font-size:14px;line-height:18px;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.tfBoard .tfAreas:is([data-rows="2"],[data-rows="3"]) .tfABig{display:none}#app.tfBoard .tfAreas[data-rows="4"] .tfABig{flex:none;margin-top:auto;margin-bottom:auto}#app.tfBoard .tfAreas[data-rows="4"] .tfATiles{margin-top:0}#app.tfBoard .tfAreas[data-rows="4"] .panelExpanded{row-gap:12px}#app.tfBoard .tfAreas:is([data-rows="2"],[data-rows="3"],[data-rows="4"]) .tfATiles{margin-top:auto}#app.tfBoard .tfAreas[data-rows="2"] .tfATile:nth-child(n+3),#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfATile:nth-child(n+5){display:none}#app.tfBoard .tfAreas[data-rows="2"] .tfACTiles{display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTile:nth-child(n+3){display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACollapsed{justify-content:flex-start;gap:10px}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTiles{margin-top:auto}.tfEditTray{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px));right:0;bottom:0;z-index:160;display:flex;width:608px;max-width:calc(100vw - 56px);transform:translate(100%);transition:transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfEditTray.open{transform:none}.tfEditTray.open.tucked{transform:translate(100%)}.tfEditTray.open :is(.tfTrayInner,.tfTrayTuck){pointer-events:auto}.tfTrayTuck{position:absolute;top:20px;left:-52px;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border:0;border-radius:var(--r-inner);background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;--mdc-icon-size:22px}.tfTrayTuck svg{width:22px;height:22px}.tfEditTray:not(.open) .tfTrayTuck{visibility:hidden}.tfTrayInner{flex:1;min-width:0;display:flex;flex-direction:column;gap:20px;overflow:auto;overscroll-behavior:contain;padding:20px;border-radius:var(--r-card) 0 0 var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d}.tfTrayHead{display:flex;align-items:center;justify-content:space-between;gap:12px}.tfTraySection{display:flex;flex-direction:column;gap:8px}.tfTraySection .sectionLabel{margin:0}.tfTrayNote{margin:0;color:var(--muted);font:400 14px/1.3 var(--font)}.tfTrayCards{display:flex;flex-direction:column;gap:6px}.tfTrayCard{display:flex;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 14px 0 10px;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none}.tfTrayList{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}.tfTrayFav{display:grid;grid-template-columns:22px var(--chip-size) minmax(0,1fr) 36px 36px;align-items:center;gap:8px;min-height:var(--tile-min);padding:0 4px 0 6px;border-radius:var(--r-tile)}.tfTrayFav.off{cursor:grab;touch-action:none}.tfTrayFav.off :is(.tfIcon,.tfTrayName){opacity:.5}.tfTrayFav.moving{background:var(--tile)}.tfTrayGrip{display:grid;place-items:center;color:var(--muted);cursor:grab;touch-action:none}.tfTrayGrip svg{width:20px;height:20px;fill:currentColor}:is(.tfTrayFav,.tfTrayPickItem) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfTrayName{display:flex;flex-direction:column;min-width:0}.tfTrayName>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfTrayBtn{display:grid;place-items:center;width:36px;height:36px;min-height:0;padding:0;border:0;border-radius:12px;background:none;color:var(--text);cursor:pointer}.tfTrayBtn svg{width:20px;height:20px;fill:currentColor}.tfTrayBtn:hover{background:var(--tile)}.tfTrayAdd{align-self:flex-start}.tfTrayPick{display:flex;flex-direction:column;gap:6px}.tfTrayPick[hidden]{display:none}.tfTrayPickItem{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;width:100%;min-height:var(--tile-min);padding:0 10px;border:0;border-radius:var(--r-tile);background:none;color:var(--text);text-align:start;cursor:pointer}.tfTrayPickItem:hover{background:var(--tile)}.tfTraySuggest{margin-top:8px}.tfMiniPhone{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px) + 20px);bottom:20px;left:max(16px,calc(100vw - min(608px,100vw - 56px) - 380px));z-index:160;display:flex;flex-direction:column;gap:8px;width:324px;padding:12px;border-radius:44px;background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d;opacity:0;transform:translate(16px);transition:opacity .2s ease,transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfMiniPhone.open{opacity:1;transform:none;pointer-events:auto}.tfPhoneHead{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 4px 0 12px}.tfMiniPhone>.tfTrayNote{padding:0 12px 4px}.tfLinkBtn{min-height:0;padding:0;border:0;background:none;color:var(--primary);font:inherit;text-decoration:underline;cursor:pointer}.tfPhoneScreen{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;border-radius:34px;background:var(--bg);box-shadow:var(--hc-hair-all);padding:14px 0 24px}.tfPhoneList{display:flex;flex-wrap:wrap;gap:12.8px}.tfPhoneTitle{width:100%;padding:0 12.8px;color:var(--text);font:800 25.6px/1 var(--font);letter-spacing:-.055em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfPhoneBlock{display:flex;align-items:flex-start;gap:10px;width:100%;min-height:0;padding:12px;border:0;border-radius:27px;background:var(--card);box-shadow:var(--hc-hair);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.tfPhoneBlock.tile{width:calc((100% - 12.8px)/2);border-radius:22.4px}.tfPhoneBlock.fixed{align-items:center;color:var(--muted);cursor:default}.tfPhoneBlock.moving{box-shadow:var(--hc-hair),0 0 0 2px var(--primary);cursor:grabbing}.tfPhoneBlock:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfPhoneBlock .tfIcon{width:32px;height:32px;border-radius:13px;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}.tfPhoneName{min-width:0;padding-top:6px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tfTrayGhost{position:fixed;top:0;left:0;z-index:200;margin:0;pointer-events:none;opacity:.9;background:var(--tile);border-radius:var(--r-tile);box-shadow:0 8px 24px #00000059}.tfFavDrop{position:fixed;z-index:200;width:4px;border-radius:2px;background:var(--primary);pointer-events:none}.tfFavHides{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;pointer-events:none}.tfFavHide{position:absolute;display:grid;place-items:center;width:32px;height:32px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;pointer-events:auto}.tfFavHide svg{width:18px;height:18px;fill:currentColor}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.toast.tfToast{top:auto;right:auto;max-width:calc(100vw - 32px);transform:translate(-50%,6px)}.toast.tfToast.show{transform:translate(-50%)}.tfDash-act .activityRow.alert .activityRowName{color:var(--danger)}.activityRow .tfIcon.alert{background:#e53935;color:#fff}.tfGraph.tfDay{flex:none;height:62px;min-height:0}.tfGraph.tfDay text{font-size:10px}#housePane .rubberIndicator{background:var(--bright)}#housePane .tab.active{color:var(--on-bright)}#app.house .settingsSelect{border:1px solid var(--muted)}#app.house .addInput{display:block;width:100%;height:46px;min-height:0;box-sizing:border-box;margin:0;padding:0 10px;border:0;border-radius:var(--r-inner)!important;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:400 16px/18.4px Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;letter-spacing:-.32px;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}#app.house .addInput:hover{background:color-mix(in srgb,var(--text) 6%,var(--tile))}#app.house .addInput:focus-visible,#app.house .addInput:focus{background:var(--tile);box-shadow:inset 0 0 0 1.6px var(--primary)}#app.house .addInput::-webkit-search-decoration,#app.house .addInput::-webkit-search-cancel-button{-webkit-appearance:none;-moz-appearance:none;appearance:none}#app.house{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%23d9d9d9' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house.light{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%2326221e' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house select.settingsSelect{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 44px 0 16px;background-image:var(--select-chev);background-repeat:no-repeat;background-position:right 16px center;background-size:16px 16px}#app.house .addInput::placeholder{color:var(--muted);opacity:1}#app .activityRows :focus-visible{outline-offset:-2.4px}#app.house :is(button,a,input,select,[tabindex]){scroll-margin-bottom:96px}@media (max-width:620px){#app.house :is(.activityRowName,.activityRowMeta){white-space:normal;text-overflow:clip;overflow:visible;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}}.tfTooltip{position:fixed;z-index:500;max-width:min(320px,calc(100vw - 16px));padding:6px 10px;border-radius:10px;background:var(--bright);color:var(--on-bright);font:500 14px/18px var(--font);overflow-wrap:break-word;box-shadow:0 4px 16px #00000040}.tfTooltip[hidden]{display:none}.tfDashGraph rect{transform-box:fill-box;transform-origin:50% 100%}#app.house:is([data-names=cut],[data-names=scroll]) :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis;overflow-wrap:normal}#app.house[data-names=wrap] :is(.activityRowName,.activityRowMeta){display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:normal;overflow:hidden;text-overflow:ellipsis;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}#app.tfBoard .tfDash-favs>.activityRows{min-height:0;overflow-y:auto;scrollbar-width:thin}#app.house :is(.tfIcon,.tfAreaIcon,.tfRoomIcon){--chip-hi:.0375;background-image:linear-gradient(180deg,#ffffff08,#fff0)!important;box-shadow:inset 0 1px rgba(255,255,255,var(--chip-hi)),inset 0 -1px color-mix(in srgb,currentColor 3%,transparent),inset 0 -3px 6px color-mix(in srgb,currentColor 3.5%,transparent)}#app.house :is(.on[data-light] .tfIcon,.tfIcon.on[data-light],.tfACTile .tfIcon[data-light],.on[data-tone=alarm] .tfIcon,.tfIcon[data-light]){--chip-hi:.1375}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-xl]{grid-row:span 5}#app.tfBoard .tfDashBento:not([data-rows="5"]) .wbItem[data-xl] .wbCallouts{display:none}#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]) .wbZone{flex:1;height:auto;background:none;box-shadow:none;padding:0;align-items:flex-start}#app.tfBoard .tfDashBento[data-rows="3"] .wbItem[data-xl] .wbCallouts{display:flex;margin-top:0}#app.tfBoard .tfDashBento[data-rows="1"] :is(.wbZone,.wbCallouts){display:none}#app .wbZoneM{display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM){display:flex;align-items:flex-start;justify-content:flex-start}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM)>:not(.wbZoneM){display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZoneM{display:flex}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{grid-auto-flow:row}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-break]{grid-column-start:1}#app.house.tfWeatherOpen #homeView{max-width:none}#app.house #settingsView .toggleList{border-radius:var(--r-card);padding-block:4px}#app.house #settingsView .toggleRow{padding-left:18px;padding-right:18px}#app.house #settingsView .toggleRow:not([hidden])~.toggleRow:before{left:18px}#app.house .view{margin-left:0}#app.house #settingsView .toggleList>.tfCardTitle{display:flex;align-items:center;min-height:28px;padding:14px 18px 2px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfLightView{display:flex;padding:4px 0 14px}#housePane.tfLightCardsOn .houseTab .metaTableWrap,#housePane.tfLightCardsOn .houseTab .tfTableNote{display:none}#housePane.tfLightCardsOn .tfLightCards{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:8px}#housePane:not(.tfLightCardsOn) .tfLightCards{display:none}@container housepane (width < 720px){#housePane:not(.tfLightCardsOn) .houseTab .metaTableWrap{display:none}#housePane:not(.tfLightCardsOn) .tfLightCards{display:grid}}#app.house.light .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house .tfTrayInner{gap:32px}#app.house .tfTraySection{gap:12px}#app.house{--font:Geist,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-family:var(--font)}#app.house #housePane .toggleRow>:is(.themeChoice,.settingsSelect){align-self:flex-start;width:auto;max-width:100%}#app.house #housePane .themeChoice{display:inline-flex}#app.house #housePane .themeChoice>button{flex:0 1 auto;min-width:0;padding:0 16px;overflow:hidden;text-overflow:ellipsis}#app.house #housePane .toggleRow{min-width:0}#app.house #housePane .toggleRow>.settingsSelect{min-width:200px}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments){display:inline-flex;width:auto;align-self:flex-start}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments) button{flex:0 0 auto;padding:0 16px}@media (max-width:620px){#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid{display:flex!important;flex-wrap:wrap;align-items:flex-start;gap:var(--grid-gap);height:auto!important}#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid .tfBoardItem{position:relative!important;left:auto!important;top:auto!important}#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid>.tfBoardItem:not(.tfDash-favs){height:auto!important}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummary{flex:none;margin-top:0;container-type:normal}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummaryText{position:static}}#app.house :is(#housePane .themeChoice,.wb .wbSegments,.tfBoardMenu .tfHeightTabs){height:32px;padding:3px;gap:3px;box-sizing:border-box}#app.house :is(#housePane .themeChoice>button,.wb .wbSegments button,.tfBoardMenu .tfHeightTabs button){height:26px!important;padding:0 12px;border-radius:13px!important;font:600 12px/16px var(--font-tile)!important}.tfPlantProblem{flex:1 1 0;min-height:184px;flex-direction:column}.tfGraph.tfPlantGraph{flex:1 1 0;width:calc(100% - 20px);height:auto;min-height:160px;margin:0 10px}.tfGraph .tfGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:3 4;vector-effect:non-scaling-stroke}.tfGraph .tfGuideWord{font-size:11px}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){box-shadow:inset 0 0 0 1px var(--line)}.tfDashTitle .tfGreeting{display:block;margin-bottom:6px;font:500 20px/1.2 var(--font-tile);letter-spacing:0;color:var(--muted)}#app.tfOverview.tfDash #homeView .tfSum:not([data-summary=alerts]) .tfIcon{background:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar{width:100%;max-width:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows{display:flex;justify-content:space-between}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRow{flex:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows{display:grid;grid-template-columns:repeat(var(--bar-cols,3),minmax(0,1fr))}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows>.activityRow{min-width:0}@media (max-width:620px){#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}}#app.tfOverview.tfDash #homeView .tfDash-favs{padding:10px;border-radius:var(--r-card)}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-auto-rows:60px;row-gap:25px;max-height:100%;margin:0;overflow-y:auto;scrollbar-width:none}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows::-webkit-scrollbar{display:none}.hcFadeList.hcMore{-webkit-mask-image:linear-gradient(to bottom,#000 calc(100% - 40px),transparent);mask-image:linear-gradient(to bottom,#000 calc(100% - 40px),transparent)}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{height:60px;min-height:0;padding:10px;box-sizing:border-box}#app.tfOverview.tfDash #homeView .tfDash-wx .wbCard.wbWeather{gap:0;padding:18px}#app.tfOverview.tfDash #homeView .tfDash-wx .wbCondition,#app.tfOverview.tfDash #homeView .tfDash-wx .wbNextHours,#app.tfOverview.tfDash #homeView .tfDash-wx .wbHalves{display:none!important}#app.tfOverview.tfDash #homeView .tfDash-wx .wbSummary{flex:none;height:auto;margin:18px 0 0;container:none}#app.tfOverview.tfDash #homeView .tfDash-wx .wbSummaryText{position:static;-webkit-line-clamp:1}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumns{display:flex!important;height:159px;margin-top:auto;border-radius:var(--r-tile)}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn{padding:8px 0;background:none}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn:hover{background:var(--tile)}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn .wbWx.wbS60{width:60px;height:60px;border-radius:20px}#app.tfOverview.tfDash #homeView .tfRoomTile{padding:18px;gap:0;border-radius:28px}#app.tfOverview.tfDash #homeView .tfRoomTile>.tfActionHead{margin-bottom:0}#app.tfOverview.tfDash #homeView .tfRoomTile .tfActionHead .activityRowMeta{display:none}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomReading{margin-top:35px;gap:0}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomBig{font:400 48px/64px var(--font-tile);letter-spacing:-1.92px}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomSub{display:block;margin-top:-7px;font:400 16px/19px var(--font)}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomDevices{display:flex;justify-content:space-between;min-height:0;margin-top:auto;padding-top:16px}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomHeads{display:none}#app.tfOverview.tfDash #homeView .tfRoomTile:not(:has(.tfRoomDevices :nth-child(4))) .tfRoomDevices{justify-content:flex-start;gap:18.67px}#app.light.tfOverview.tfDash #homeView .tfRoomTile .tfRoomIcon{background-color:#acacac;color:#fff}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar{width:max-content;max-width:100%}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar .activityRows{justify-content:flex-start}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows{grid-template-columns:repeat(var(--bar-cols,3),auto)}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs{height:auto!important;padding:10px;container-type:normal}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows{display:flex;justify-content:space-between;grid-auto-rows:auto;row-gap:0;max-height:none}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{flex:none;width:240px;height:60px}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows{display:grid;grid-template-columns:repeat(var(--bar-cols,3),minmax(0,1fr))}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows>.activityRow{width:auto;min-width:0}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs{width:max-content!important;max-width:100%}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs>.activityRows{justify-content:flex-start}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows{grid-template-columns:repeat(var(--bar-cols,3),240px)}@media (max-width:620px){#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{width:auto;min-width:0}}#app.tfOverview.tfBoard #homeView .hcFloor{position:absolute;z-index:1;display:flex;align-items:center;height:24px;margin:0;box-sizing:border-box}#app.tfOverview.tfBoard #homeView .hcFloorBox{position:absolute;z-index:0;border-radius:40px;background:color-mix(in srgb,var(--text) 5%,transparent);box-sizing:border-box;pointer-events:none}#app.tfOverview #homeView .hcFloorName{margin:0;font:500 16px/24px var(--font);color:var(--title,var(--text));white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.tfOverview.tfDash #homeView .tfRoomTile{overflow:hidden}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaL .tfRoomBig{font-size:calc(48px * var(--hc-k,1));line-height:calc(64px * var(--hc-k,1))}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaL .tfRoomReading{margin-top:calc(35px * var(--hc-k,1))}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaM .tfRoomReading{margin-top:calc(14px * var(--hc-k,1))}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaM .tfRoomBig{font-size:calc(40px * var(--hc-k,1));line-height:calc(52px * var(--hc-k,1));letter-spacing:-1.6px}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaM .tfRoomSub{margin-top:-6px}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaS{padding:12px}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaS .tfRoomReading{margin-top:calc(8px * var(--hc-k,1))}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaS .tfRoomBig{font-size:calc(32px * var(--hc-k,1));line-height:calc(40px * var(--hc-k,1));letter-spacing:-1.28px}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaS .tfRoomSub{display:none}#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaM,.hcAreaS) .tfRoomDevices,#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaM,.hcAreaS):not(:has(.tfRoomDevices :nth-child(4))) .tfRoomDevices{display:flex;flex-wrap:wrap;justify-content:flex-start;gap:0 8px;height:var(--chip-size);overflow:hidden;padding-top:0;margin-top:auto}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaS .tfRoomReading{flex:none}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomReading{margin-bottom:12px}#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaS,.hcAreaM,.hcAreaL).hcAreaBig .tfRoomBig{font-size:calc(64px * var(--hc-k,1));line-height:calc(80px * var(--hc-k,1));letter-spacing:-2.56px}#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaS,.hcAreaM,.hcAreaL).hcAreaBig .tfRoomReading{margin-top:calc(35px * var(--hc-k,1))}#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaS,.hcAreaM,.hcAreaL).hcAreaBig .tfRoomSub{display:block}#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaS,.hcAreaM,.hcAreaL).hcAreaBig .tfRoomDevices{display:none!important}#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaS,.hcAreaM,.hcAreaL).hcAreaBig .tfRoomHeads{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));margin-top:auto}#app.hcHomeEditing.tfOverview #homeView .tfBoardItem.tfRoomTile{cursor:default;outline:0}#app.hcHomeEditing.tfOverview #homeView .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfRoomTile){cursor:grab;-webkit-user-select:none;user-select:none;touch-action:none;outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.hcHomeEditing.tfOverview #homeView .tfBoardItem.tfRoomTile{border-radius:28px}#app.hcHomeEditing.tfBoardReady #homeView .tfBoardItem{transition:left .34s cubic-bezier(.2,1.35,.4,1),top .34s cubic-bezier(.2,1.35,.4,1)}@media (prefers-reduced-motion:reduce){#app.hcHomeEditing.tfBoardReady #homeView .tfBoardItem{transition:none}}#app.hcHomeEditing #homeView .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}@media (max-width:620px){#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomDevices{display:grid;grid-template-columns:repeat(2,max-content);gap:12px;justify-content:start}}.tfEditTray .tfTrayInner{scrollbar-width:none}.tfEditTray .tfTrayInner::-webkit-scrollbar{display:none}.hcHeChoiceLine{flex-wrap:wrap;gap:8px 12px}.hcHeChoiceLine>.hcHeChoice{margin-left:auto}.hcHeChoice.themeChoice{display:inline-flex;flex-wrap:nowrap;height:32px;padding:3px;gap:3px;box-sizing:border-box;border-radius:16px;background:var(--control-2,var(--hc-icon))}#app .hcHeChoice>button{height:26px!important;min-height:0;padding:0 12px;border:0;border-radius:13px!important;background:none;color:var(--text);font:600 12px/16px var(--font-tile)!important;white-space:nowrap}#app .hcHeChoice>button[aria-pressed=true]{background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all)}.hcHeBody{display:flex;flex-direction:column;gap:12px}.hcHeBody>.tfTrayNote{margin:0 0 8px}.hcHeLabel{display:flex;align-items:center;gap:4px}.hcHeLine{display:flex;align-items:center;gap:4px;min-height:44px}.hcHeLine>.activityRowName{min-width:0}.hcHeLine>.switch{margin-left:auto}.hcHeLink{display:inline;min-height:0;padding:0;border:0;background:none;font:inherit;color:var(--primary);text-decoration:underline;cursor:pointer}.hcHeList{display:flex;flex-direction:column;gap:2px;margin:0;padding:0;list-style:none}.hcHeRow{display:grid;grid-template-columns:36px var(--chip-size) minmax(0,1fr) auto;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 4px;border-radius:var(--r-tile)}.hcHeRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.hcHeRow.moving{background:var(--card);box-shadow:var(--hc-hair-all)}.hcHeGrip{color:var(--muted);cursor:grab;touch-action:none}.hcHeSum .tfIcon{color:var(--sum-ink,var(--hc-icon-ink))}#app .hcHeRow.hcHeSum .tfIcon{background-color:transparent}#app.house .hcHeSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .hcHeSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}.hcInfoBtn{display:grid;place-items:center;flex:none;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:var(--r-fine,12px);background:none;color:var(--muted);cursor:pointer}.hcInfoBtn svg{width:18px;height:18px;fill:currentColor}.hcInfoBtn:hover,.hcInfoBtn[aria-expanded=true]{background:var(--tile);color:var(--text)}.hcInfoPop{position:fixed;z-index:320;width:280px;max-width:calc(100vw - 16px);display:flex;flex-direction:column;gap:8px;padding:16px;border-radius:var(--r-inner);box-shadow:var(--hc-hair-all),0 8px 28px #0000002e}.hcInfoPop[hidden]{display:none}.hcInfoTitle{font:600 14px/20px var(--font-tile);color:var(--text)}.hcInfoText{font:400 14px/1.45 var(--font);color:var(--text)}.hcInfoText p{margin:0}.hcInfoText ul{margin:6px 0 0;padding-left:18px}.hcInfoMore{align-self:flex-start;font:600 14px/20px var(--font-tile);color:var(--primary);text-decoration:underline}#app .tfTrayAdd.hcAddBtn{display:inline-flex;align-items:center;gap:6px;height:32px;min-height:0;margin:10px 0 12px;padding:0 16px 0 12px;border:0;border-radius:16px!important;background:#03a9f4;color:#fff;font:600 14px/20px var(--font-tile);text-decoration:none!important}#app .tfTrayAdd.hcAddBtn svg{width:18px;height:18px;flex:none;fill:currentColor}#app .tfTrayAdd.hcAddBtn:hover{background:#0398dc}#app .tfTrayAdd.hcAddBtn[aria-expanded=true]{background:#0288d1}.tfEditTray:not(.hcHomeTray) .tfTraySection:not(.hcFirst){padding-top:20px;border-top:1px solid var(--line)}#app.house .tfEditTray:not(.hcHomeTray) .tfTrayInner{gap:20px}.hcHeRule{width:100%;height:0;margin:8px 0;border:0;border-top:1px solid var(--line)}.tfEditTray .hcTrayTabs{display:flex;align-self:stretch;margin:0 0 4px;flex:none}.tfEditTray .hcTrayTabs .tab{flex:1 1 0;min-height:36px;padding:0 10px;font:600 14px/20px var(--font-tile)}.tfEditTray .hcTrayTabs .rubberIndicator{background:var(--text)}.tfEditTray .hcTrayTabs .tab.active{color:var(--card)}.tfEditTray .tfTraySection[hidden]{display:none!important}.hcHeTabBody{display:flex;flex-direction:column;gap:8px}.hcHomeTray .hcTrayTabs{margin:0 0 8px}#homeView .grid.tfStack{grid-auto-rows:1px;row-gap:0}#homeView .grid.tfStack>*{align-self:start}.tfTrayPop{position:fixed;z-index:260;right:calc(min(608px,100vw - 56px) + 12px);width:300px;max-width:calc(100vw - 80px);display:grid;gap:2px;padding:10px!important;background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfTrayPop[hidden]{display:none}.tfTrayPopTitle{padding:4px 8px 8px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfTrayPopRow{display:flex;align-items:center;gap:12px;min-height:var(--tile-min);padding:0 8px}.tfTrayPopRow .tfIcon{background-color:var(--hc-icon)}.tfTrayPopName{flex:1;min-width:0;font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app .tfMoreBackdrop:not(.wide) .tfMore{height:min(600px,85dvh)}#app .tfMoreBackdrop:not(.wide) .tfMorePages{flex:1 1 auto;min-height:0;height:auto!important;align-items:stretch}#app .tfMoreBackdrop:not(.wide) .tfMorePage{overflow-y:auto;overscroll-behavior:contain;scrollbar-width:none}#app .tfMoreBackdrop:not(.wide) .tfMorePage[aria-label=Control]>:first-child{margin-top:auto}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace{flex:1 1 auto;height:auto;min-height:224px}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill{min-height:0;container-type:size}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill>.tfCoverArt{width:min(100%,100cqh);height:auto}.tfMorePage[aria-label=Control]>:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink)+:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink){margin-top:14px}.tfMoreSwitch{display:flex;align-items:center;justify-content:center;min-height:0;padding:0;border-radius:0;background:none}.tfMoreSwitch .tfIcon{width:min(240px,100%);height:min(240px,100%);aspect-ratio:1;min-height:0;border:0;padding:0;border-radius:40%;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer;--mdc-icon-size:204px}.tfMoreSwitch.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreSwitch.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}@media (max-width:620px){#app .tfMoreBackdrop{place-items:end center;padding:0 16px max(16px,env(safe-area-inset-bottom,0px))}#app .tfMoreBackdrop .tfMorePair{width:100%;max-height:85dvh}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){width:100%;border-radius:34px;box-shadow:inset 0 0 0 1px var(--line),0 10px 30px #00000047}#app .tfMoreBackdrop .tfMore{padding-top:10px;outline:none}#app .tfMoreBackdrop .tfMore:before{content:"";display:block;position:sticky;top:10px;z-index:2;flex:none;width:36px;height:5px;margin:0 auto;border-radius:3px;background:var(--line)}#app .tfMoreBackdrop .tfMore [data-more-close]{display:none}}`, Bu = `.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:14px;aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:18px;border-radius:28px;overflow:hidden}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbChip{width:40px;height:40px;border-radius:16px}.wbSquare .wbName{font-size:14px;line-height:1.4}.wbSquare .wbSub{font-size:16px}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:10px}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846;border-radius:34px}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:1;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);fill-opacity:.14}.wbChart .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:24px minmax(0,1fr) 22px;grid-template-areas:". sun" "y plot" ". x";column-gap:8px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wb[data-style=smooth] :is(.wbWx,.wbSky):after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;border-radius:inherit;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1.3 0 0 0 -.15 1.3 0 0 0 -.15 1.3 0 0 0 -.15 0 0 0 0 1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:140px 140px;mix-blend-mode:overlay;opacity:.3}.wbBaseRows{display:flex;flex-direction:column;gap:4px;width:100%}.wbBaseRow{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbBaseRow>span:last-child{color:var(--text);white-space:nowrap}.wbBaseRow>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRadar{position:relative;flex:1;align-self:stretch;min-height:80px;border-radius:var(--r-inner);overflow:hidden;background-color:var(--tile);background-image:linear-gradient(color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px);background-size:24px 24px;background-position:center}.wbRadarRing{position:absolute;left:50%;top:50%;width:64%;aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 20%,transparent)}.wbRadarRing:after{content:"";position:absolute;top:25%;right:25%;bottom:25%;left:25%;border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 14%,transparent)}.wbRadarHome{position:absolute;left:50%;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 3px var(--tile)}.wbRadarMap,.wbRadarCam{background-image:none}.wbRadarLayer{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden}.wbRadarLayer img{position:absolute;width:256px;height:256px;max-width:none;pointer-events:none}.wbRadarLayer[hidden]{display:none}.wbRadarRain{opacity:.85}.wbRadarMap .wbRadarHome{z-index:2}.wbRadarTime,.wbRadarCredit{position:absolute;z-index:2;white-space:nowrap}.wbRadarTime{left:8px;bottom:6px;padding:1px 6px;border-radius:8px;background:color-mix(in srgb,var(--tile) 78%,transparent);color:var(--text);font:600 11px/16px var(--font-tile)}.wbRadarTime:empty{display:none}.wbRadarCredit{right:6px;top:4px;max-width:calc(100% - 12px);overflow:hidden;text-overflow:ellipsis;color:var(--muted);font:400 9px/12px var(--font)}.wbRadarNote{position:absolute;top:0;right:0;bottom:0;left:0;z-index:2;display:grid;place-items:center;padding:0 12px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbRadarCam img{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;object-fit:cover}.wbWx.wbLineIcon{display:grid;place-items:center;background:var(--tile);color:var(--text)}.wbWx.wbLineIcon>svg{width:64%;height:64%}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:18px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:14px 16px 12px 12px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbAsNow{display:none}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}.wbNextHours{display:none;justify-content:space-between;align-items:center;gap:8px;min-width:0}.wbHour{display:flex;flex-direction:column;align-items:center;gap:8px;min-width:0}.wbHourTime{color:var(--muted);font:400 14px/20px var(--font);white-space:nowrap}.wbHourTemp{font:400 18px/20px var(--font-tile);white-space:nowrap}.wbHour .wbWx.wbS40{width:40px;height:40px;border-radius:16px}.wbSummary{position:relative;flex:1 1 0;min-height:0;margin-top:-12px;container:wbsum/size}.wbSummaryText{position:absolute;top:12px;left:0;right:0;margin:0;color:var(--text);font:400 16px/22px var(--font);display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}@container wbsum (height < 56px){.wbSummaryText{-webkit-line-clamp:1}}@container wbsum (height < 34px){.wbSummaryText{display:none}}@container wb-card (width < 480px){.wbColumn .wbWx.wbS60{width:48px;height:48px;border-radius:16px}}@container wb-card (width < 400px){.wbCard.wbWeather{gap:16px;padding:18px 18px 10px}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumn .wbWx.wbS60{width:40px;height:40px;border-radius:14px}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbStripScroll.wbPaged{container-type:inline-size;scroll-snap-type:x mandatory;overscroll-behavior-x:contain}.wbStripScroll.wbPaged.wbHeld{scroll-snap-type:none}.wbPaged .wbStrip{position:relative;min-width:0;padding:0}.wbSnap{position:absolute;top:0;width:1px;height:1px;scroll-snap-align:start;pointer-events:none}.wbMark.wbLast{align-items:flex-end;transform:translate(-100%)}.wbPaged .wbTimes .wbMark.wbFirst{font:400 14px/20px var(--font)}.wbPaged .wbTimes .wbMark.wbNowMark{font:600 14px/20px var(--font-tile)}.wbSky .wbPast{position:absolute;top:0;bottom:0;left:0;background:var(--card);opacity:.45;pointer-events:none}.wbSky .wbNowLine{position:absolute;top:0;bottom:0;width:2px;margin-left:-1px;background:var(--text);opacity:.55;pointer-events:none}.wbSky.wbLineSky{background:var(--tile);color:var(--text)}.wbLineArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbLineArt .wbLineArc{fill:none;stroke:var(--text);stroke-width:1.5;stroke-linejoin:round;vector-effect:non-scaling-stroke;opacity:.7}.wbLineArt .wbLineHorizon{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.35}.wbLineArt .wbLineNight{fill:var(--text);opacity:.07}.wbLineArt .wbLineEdge{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.3}.wbLineTime{position:absolute;top:calc(80% + 4px);transform:translate(-50%);color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.wbLineNow{position:absolute;width:26px;height:26px;transform:translate(-50%,-50%);border-radius:50%;background:var(--tile);pointer-events:none}.wbLineNow>svg,.wbLineGlyph>svg{display:block;width:100%;height:100%}.wbLineGlyph{position:absolute;top:calc(50% - 14px);width:28px;height:28px;transform:translate(-50%);pointer-events:none}.wbLineGlyph.wbFirst{transform:none}.wbLineGlyph.wbLast{transform:translate(-100%)}.wbSky .wbMidnight{position:absolute;top:0;bottom:0;width:0;border-left:1.5px dashed var(--text);opacity:.5;pointer-events:none}.wbDays{position:absolute;top:36px;left:0;z-index:1;display:flex;pointer-events:none}.wbDaySpan{flex:none;min-width:0}.wbDayName{position:sticky;left:8px;margin-left:8px;height:26px;min-height:0;padding:0 10px;border:0;background:color-mix(in srgb,var(--card) 82%,transparent);color:var(--text);font:600 13px/26px var(--font-tile);white-space:nowrap;cursor:pointer;pointer-events:auto}.wb .wbDayName{border-radius:13px!important;font-family:var(--font-tile)!important}.wbViews button{padding:2px 10px;font-size:13px}.wbBars .wbDayBars{flex:1 1 0;min-height:160px;display:flex;flex-direction:column;padding:0 18px;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin}.wbBars.wbTabbed .wbDayBars{min-height:206px}.wbDayBar{flex:1 0 auto;display:grid;grid-template-columns:minmax(56px,auto) 40px 36px minmax(0,1fr) 36px;align-items:center;column-gap:12px;min-height:48px;box-shadow:inset 0 -.4px 0 var(--line)}.wbDayBar:last-child{box-shadow:none}.wbRangeDay{color:var(--text);font:600 14px/20px var(--font-tile);white-space:nowrap}.wbRangeLo{color:var(--muted);text-align:right;font:400 16px/20px var(--font);font-variant-numeric:tabular-nums}.wbRangeHi{color:var(--text);text-align:right;font:400 16px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbRangeTrack{position:relative;height:6px;border-radius:3px;background:var(--tile)}.wbRangeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:3px}.wbRangeNow{position:absolute;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:#fff;box-shadow:0 0 0 2px var(--card)}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbBars .wbDayBars{padding:0 8px;min-height:380px}.wbBars.wbTabbed .wbDayBars{min-height:426px}.wbDayBar{column-gap:8px}.wbStripScroll{min-height:380px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:16px;overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbSunTile .wbZone{display:block}.wbSunZone{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff;transition:background 1s ease}.wbSunTrack{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbSunBand{fill:#fff;fill-opacity:.1}.wbSunBand.wbSunDay{fill-opacity:.14}.wbSunBand.wbSunDone{fill-opacity:.85}.wbSunDot{fill:#ffd84a}.wbSunDot.wbSunNight{fill:#9aa3c7}.wbSunCount{position:absolute;top:22px;right:22px;bottom:22px;left:22px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;padding-bottom:14px}.wbSunLeft{font:500 clamp(28px,calc(16cqw * var(--wb-k,1)),36px)/1.1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums;white-space:nowrap}.wbSunWord{font:400 13px/18px var(--font);opacity:.85}.wbSunAt{position:absolute;bottom:32px;font:500 12px/16px var(--font);opacity:.85;font-variant-numeric:tabular-nums}.wbSunRise{left:32px}.wbSunSet{right:32px}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}.wbMoonCaption{gap:8px}.wbMoonCaption span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbMoonCaption span:last-child{flex:none}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbSea{position:relative;flex:1;min-height:0;border-radius:16px;overflow:hidden;--wb-sea-inset:clamp(8.88px,calc(4.76cqw * var(--wb-k,1)),12px)}.wbSeaArt{position:absolute;top:0;right:0;bottom:0;left:0;display:block;width:100%;height:100%;image-rendering:pixelated}.wbSeaFact{position:absolute;top:clamp(7px,calc(3.97cqw * var(--wb-k,1)),10px);inset-inline:var(--wb-sea-inset);color:#26221e;font:600 clamp(9.44px,calc(5.47cqw * var(--wb-k,1)),13.78px)/1.23 var(--font-tile)}.wbSeaValue{position:absolute;bottom:var(--wb-sea-inset);inset-inline-start:var(--wb-sea-inset);color:#fff;text-shadow:0 0 2px rgba(0,0,0,.6),0 1px 3px rgba(0,0,0,.5)}.wbSeaValue .wbUnitV{color:inherit}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbTrend{position:relative;width:100%;height:100%;min-height:0}.wbTrendPlot{position:absolute;top:22px;right:0;bottom:24px;left:0}.wbTrendPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbTrendLine{fill:none;stroke:var(--text);stroke-width:2;stroke-linejoin:round;stroke-linecap:round;opacity:.8}.wbTrendDot{position:absolute;width:7px;height:7px;margin:-3.5px 0 0 -3.5px;border-radius:50%;background:var(--card);box-shadow:0 0 0 2px var(--text)}.wbTrendDot.wbToday{width:11px;height:11px;margin:-5.5px 0 0 -5.5px;background:var(--primary);box-shadow:0 0 0 3px var(--card)}.wbAvgValue{position:absolute;transform:translate(-50%,calc(-100% - 8px));color:var(--muted);font:400 10px/1 var(--font-tile);white-space:nowrap}.wbAvgValue.wbToday{color:var(--text);font-size:12px;font-weight:600}.wbTrendAvg{position:absolute;right:0;transform:translateY(4px);color:var(--muted);font:400 10px/1 var(--font-tile)}.wbTrendDays{position:absolute;left:0;right:0;bottom:0;height:16px}.wbAvgDay{position:absolute;bottom:0;transform:translate(-50%);color:var(--muted);font:400 11px/16px var(--font-tile)}.wbAvgDay.wbToday{color:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}.wbZoned{gap:14px}.wbZone{position:relative;flex:none;height:198px;display:flex;align-items:center;justify-content:center;border-radius:16px;overflow:hidden}.wbCallouts{display:none;flex-direction:column;gap:4px;margin-top:-6px}.wbCallout{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbCallout>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbCallout>span:last-child{flex:none;color:var(--text);white-space:nowrap}.wbZone>.wbSunSky{flex:1;align-self:stretch;border-radius:0}.wbZone>.wbMoonBox{flex:none;height:150px}.wbBase .wbZone{align-items:flex-end;justify-content:flex-start}.wbZone>.wbTapeRow{align-self:stretch;height:100%}.wbItem[data-xl] .wbCallouts{display:flex}.wbUv .wbZone{display:block}.wbUvArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbUvBig{position:absolute;right:0;bottom:0;display:flex;flex-direction:column;align-items:flex-end}.wbUvNum{font:500 64px/.9 var(--font-tile);letter-spacing:-.03em;color:var(--text);font-variant-numeric:tabular-nums}.wbUvWord{margin-top:6px;font:400 14px/20px var(--font);color:var(--muted)}.wbAqSmile .wbZone{display:block}.wbAqFill{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff}.wbAqFace{position:absolute;left:12px;top:12px;width:min(140px,calc(100% - 60px));height:auto;aspect-ratio:1;fill:none;stroke:currentColor;stroke-width:3.4;stroke-linecap:round;stroke-linejoin:round}.wbAqFace .wbAqEyes{stroke-width:5}.wbAqBig{position:absolute;right:14px;bottom:12px;display:flex;flex-direction:column;align-items:flex-end}.wbAqNum{font:500 56px/.9 var(--font-tile);letter-spacing:-.03em;font-variant-numeric:tabular-nums}.wbAqUnit{margin-top:4px;font:500 14px/20px var(--font)}.wbPollenAir{position:absolute;top:0;right:0;bottom:62px;left:0;overflow:hidden;pointer-events:none}.wbFloat{position:absolute;left:-12%;animation:wbFloat linear infinite}.wbBob{display:block;animation:wbBob ease-in-out infinite alternate}@keyframes wbFloat{0%{left:-12%}to{left:106%}}@keyframes wbBob{0%{transform:translateY(-6px) rotate(-14deg)}to{transform:translateY(8px) rotate(16deg)}}.wbFloat svg{display:block}.wbSeed svg{width:calc(20px * var(--s));height:calc(28px * var(--s))}.wbGrain svg{width:calc(10px * var(--s));height:calc(10px * var(--s))}.wbStem svg{width:calc(9px * var(--s));height:calc(26px * var(--s))}.wbSeed{color:var(--text);opacity:.7}.wbGrain{color:#e9c46a;opacity:.85}.wbStem{color:#a3b18a;opacity:.75}#app.light .wbGrain{color:#c99a1e}#app.light .wbStem{color:#7d8c5f}@media (prefers-reduced-motion:reduce){.wbFloat,.wbBob{animation:none}.wbFloat{left:var(--x)}}.wbPush{display:block;transition:transform .35s cubic-bezier(.2,.8,.3,1)}.wbCallout.wbAdvice>span:first-child{color:var(--text)}.wbCard.wbSquare.wbGraphCard{height:100%;min-height:0}.wbGraphCard .wbHead .wbBack{margin:-4px -6px 0 auto}.wbGraphCard .wbRangeBtn{align-self:flex-start;display:inline-flex;align-items:center;gap:6px;max-width:100%;height:32px;padding:0 8px 0 10px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:600 12px/16px var(--font-tile);cursor:pointer}.wb button.wbRangeBtn{border-radius:12px!important}.wbRangeBtn>span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRangeBtn .wbIcon{flex:none;width:16px;height:16px;fill:currentColor}.wbRangeBtn[aria-expanded=true]{background:var(--bright);color:var(--on-bright)}.wbItem:has(.wbRangePick){position:relative;z-index:30}.wbRangePick{position:absolute;top:116px;left:18px;z-index:30;display:flex;flex-direction:column;gap:12px;width:248px;box-sizing:border-box;padding:12px;border-radius:24px;background:var(--card);box-shadow:var(--hc-hair-all),0 18px 40px #00000059}.wbRangePick.wbPickRight{left:auto;right:18px}.wbRangePresets{display:flex;flex-direction:column;gap:2px}.wb .wbRangePreset{height:32px;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--text);font:400 14px/20px var(--font);text-align:left;cursor:pointer}.wb .wbRangePreset:hover{background:var(--tile)}.wb .wbRangePreset[aria-pressed=true]{background:var(--bright);color:var(--on-bright);font-weight:600}.wbRangeDates{display:grid;grid-template-columns:1fr 1fr;gap:8px;padding-top:12px;box-shadow:inset 0 .4px 0 var(--line)}.wbRangeDates label{display:grid;gap:4px;min-width:0;color:var(--muted);font:400 12px/16px var(--font)}.wbRangeDates input{width:100%;min-width:0;height:32px;box-sizing:border-box;padding:0 6px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:400 12px/16px var(--font);color-scheme:inherit}.wb .wbRangeApply{height:32px;padding:0 14px;border:0;border-radius:999px!important;background:var(--bright);color:var(--on-bright);font:600 12px/16px var(--font-tile);cursor:pointer}.wbGraphCard .wbGraph{flex:1;height:auto;min-height:0}.wb.wbPopup{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073;overscroll-behavior:contain;container-type:normal}.wb.wbPopup[hidden]{display:none}.wbPopupBox{position:relative;width:520px;max-width:100%}.wbPopup .wbCard.wbSquare.wbGraphCard{height:auto;aspect-ratio:auto;box-shadow:var(--hc-hair-all)}.wbPopup .wbGraphCard .wbGraph{flex:none;height:auto}@media (max-width:620px){.wb.wbPopup{place-items:end stretch;padding:0}.wbPopupBox{width:100%}.wbPopup .wbCard.wbSquare.wbGraphCard{border-radius:28px 28px 0 0}}`, Ru = '#app .mvPv{position:relative;transform:perspective(var(--pv-persp)) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) scale(var(--sc,1));transition:transform var(--pv-ret) var(--pv-ease)}#app .mvPv.mvMoving{transition:transform 70ms linear}#app .mvPv:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;opacity:0;mix-blend-mode:soft-light;background:radial-gradient(circle at var(--mx,50%) var(--my,50%),rgba(255,255,255,var(--pv-shine)),transparent var(--pv-size));transition:opacity var(--pv-ret) ease}#app .mvPv.mvLit:after{opacity:1}#app .tfBar{--mv-c:var(--light-soft,var(--primary));transform-origin:center;transition:box-shadow var(--ab-out) var(--ab-ease),transform var(--ab-out) var(--ab-ease)}#app .tfBar.mvHover{box-shadow:0 0 var(--ab-blur) var(--ab-spread) color-mix(in srgb,var(--mv-c) var(--ab-str),transparent);transition-duration:var(--ab-in)}#app .tfBar.mvHold{box-shadow:0 0 var(--ab-blur2) var(--ab-spread2) color-mix(in srgb,var(--mv-c) var(--ab-str2),transparent);transform:var(--ab-grow);transition-duration:var(--ab-in)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>:is(svg,ha-icon,ha-state-icon,span){transition:scale var(--ih-dur) var(--ih-ease)}@media (hover:hover){#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-s)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover:before{opacity:1}}:where(#app button.tfIcon,#app .tfBack,#app .tfEditChip,#app .tfTrayBtn,#app [data-wb=graph-close]){position:relative}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;background:color-mix(in srgb,currentColor var(--ih-tint),transparent);opacity:0;transition:opacity var(--ih-dur) var(--ih-ease)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):active>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-p)}#app .mvSegInd{position:absolute;z-index:0;pointer-events:none}#app .mvSegMoving>button{position:relative;z-index:1;background-color:transparent!important;box-shadow:none!important;transition:none!important}#app .tfMoreBackdrop{-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}#app .toast.tfToast{min-height:58px;box-sizing:border-box;padding:9px 18px 9px 9px;gap:14px;border-radius:29px;font-size:18px;line-height:1.2}#app .toast .mvTick{display:grid;place-items:center;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--mv-ok);color:#fff}#app .toast .mvTick svg{width:26px;height:26px;fill:none;stroke:currentColor;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}#app .toast .mvToastText{font-weight:600}#app .toast .toastAction{font-size:16px;margin-left:2px}#app .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}#app{--ol-l:68%;--mv-ok:#4cc38a}#app.light{--ol-l:48%;--mv-ok:#1f7a4d}#app .tfAreaPanel:has(>.mvEdge){isolation:isolate;position:relative}#app .mvEdge,#app .mvEdgeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity var(--ol-in) ease-out}#app .mvEdgeFill{z-index:-1;background:hsl(var(--ol-h) 97% var(--ol-l));mix-blend-mode:soft-light;opacity:clamp(0,calc(var(--ol-fill) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-fill));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%)}#app .mvEdge{z-index:5}#app .mvEdge:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l));opacity:clamp(0,calc(var(--ol-border) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-border));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%));mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%))}#app .mvEdge>i{position:absolute;top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;border-radius:inherit;mix-blend-mode:plus-lighter;opacity:clamp(0,calc(var(--ol-glow) * (var(--edge-proximity,0) - var(--ol-esens)) / (100 - var(--ol-esens))),var(--ol-glow));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}#app .mvEdge>i:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;--s:var(--ol-size);box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l) / 60%),inset 0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),inset 0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),inset 0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(22.4px*var(--s)) calc(1.6px*var(--s)) hsl(var(--ol-h) 97% var(--ol-l) / 10%)}#app :not(.mvLitEdge)>:is(.mvEdge,.mvEdgeFill){opacity:0;transition:opacity var(--ol-out) ease-out}@media (prefers-reduced-motion:reduce){#app .mvPv{transform:none!important}#app .mvPv:after{display:none}#app .tfBar.mvHold{transform:none}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>*{scale:none!important}}#app .tfBoardItem.mvDrag{scale:none}#app.tfEditing.tfBoardReady .tfBoardItem:not(.tfDragging){transition:left .42s cubic-bezier(.34,1.46,.64,1),top .42s cubic-bezier(.34,1.46,.64,1),height .42s cubic-bezier(.34,1.46,.64,1)}', Pu = `<main id="app"><div class="shell">
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
`, ad = "homecore-theme", Hu = {
  home: '<path d="M3 10.5L12 3L21 10.5V21H3V10.5Z"/>',
  settings: '<path d="M21 4H14"/><path d="M10 4H3"/><path d="M21 12H12"/><path d="M8 12H3"/><path d="M21 20H16"/><path d="M12 20H3"/><path d="M14 2V6"/><path d="M8 10V14"/><path d="M16 18V22"/>',
  fullscreen: '<path d="M8 3H5C3.9 3 3 3.9 3 5V8"/><path d="M21 8V5C21 3.9 20.1 3 19 3H16"/><path d="M3 16V19C3 20.1 3.9 21 5 21H8"/><path d="M16 21H19C20.1 21 21 20.1 21 19V16"/>',
  back: '<path d="M15 18L9 12L15 6"/>'
}, Ou = (o) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (Hu[o] || "") + "</svg>", od = {
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
function Nu(o, { setLight: r, fullscreenSupported: d, toggleFullscreen: p }) {
  const g = (et) => o.getElementById(et), v = g("app");
  o.querySelectorAll("[data-icon]").forEach((et) => {
    et.innerHTML = Ou(et.dataset.icon);
  });
  const w = { home: g("homeView"), settings: g("settingsView") }, S = g("homeNav"), I = g("settingsNav");
  function y(et) {
    Object.entries(w).forEach(([at, X]) => X.classList.toggle("active", at === et)), S.classList.toggle("active", et === "home"), I.classList.toggle("active", et === "settings");
  }
  S.addEventListener("click", () => y("home")), I.addEventListener("click", () => y("settings")), g("settingsBack").addEventListener("click", () => y("home"));
  function C(et) {
    const at = et === "light";
    o.querySelectorAll(".themeBtn").forEach((X) => X.classList.toggle("active", X.dataset.theme === et)), v.classList.toggle("light", at), r(at);
  }
  C(od.get(ad) === "light" ? "light" : "dark"), o.querySelectorAll(".themeBtn").forEach((et) => et.addEventListener("click", () => {
    C(et.dataset.theme), od.set(ad, et.dataset.theme);
  }));
  const O = g("tvNav");
  d || (O.hidden = !0), O.addEventListener("click", () => p());
  let V;
  function Q(et) {
    const at = g("toast");
    at && (at.textContent = et, at.classList.add("show"), clearTimeout(V), V = setTimeout(() => at.classList.remove("show"), 2600));
  }
  return { showView: y, toast: Q };
}
const Iu = /* @__PURE__ */ new Set(["roaming", "test_area"]), Fu = {
  living_room: { climate: !0, cover: ["Curtains", "curtain", 62], temperature: 20.5, humidity: 44, motion: "Living room motion", plant: ["Monstera", 32, 4200, 21.4, 580] },
  kitchen: { temperature: 21.2, humidity: 48, door: "Back door", plant: ["Basil", 55, 900, 22.1, 910] },
  balcony: { solar: !0, door: "Balcony door", doorOpen: !0, valve: "Watering", plant: ["Tomatoes", 61, 18500, 14.2, 1240] },
  bedroom: { cover: ["Roller blind", "shade", 0], humidifier: !0, temperature: 18.9, humidity: 38, window: "Bedroom window" },
  office: { cover: ["Blinds", "blind", 60, 45], vacuum: !0, temperature: 21.8, humidity: 41, plant: ["Pothos", 47, 2600, 21.6, 640] },
  bathroom: { temperature: 22.4, humidity: 62 }
}, fn = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, _e = "made_up_", Pa = (o) => {
  var r;
  return (r = String(o).split(".")[1]) == null ? void 0 : r.startsWith(_e);
}, vi = (o) => o.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function Bl(o) {
  const r = o.getHours() + o.getMinutes() / 60, d = Math.max(0, Math.sin((r - 7) / 13 * Math.PI));
  return 2.4 * d * d;
}
function qu(o) {
  const r = new Date(o.getFullYear(), o.getMonth(), o.getDate());
  let d = 0;
  for (let p = +r; p < +o; p += 10 * 60 * 1e3) d += Bl(new Date(p)) / 6;
  return d;
}
function nd(o = /* @__PURE__ */ new Date()) {
  const r = [];
  for (let d = 0; d <= 96; d++) {
    const p = +o - (96 - d) * 15 * 60 * 1e3;
    r.push([p, Bl(new Date(p))]);
  }
  return r;
}
function Wu({ onChange: o }) {
  const r = {}, d = {}, p = (X, j, lt, pt) => {
    r[X] = { entity_id: X, state: lt, attributes: pt, last_changed: new Date(Date.now() - 18e6).toISOString() }, d[X] = j;
  }, g = (X, j, lt) => {
    const pt = r[X], gt = j ?? pt.state;
    r[X] = { ...pt, state: gt, attributes: { ...pt.attributes, ...lt }, last_changed: gt === pt.state ? pt.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, v = (X, j, lt, pt) => p("binary_sensor." + _e + (X ? X + "_" : "") + vi(j), X, pt ? "on" : "off", { friendly_name: j, device_class: lt });
  Object.entries(Fu).forEach(([X, j]) => {
    if (j.temperature != null && p("sensor." + _e + X + "_temperature", X, String(j.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), j.humidity != null && p("sensor." + _e + X + "_humidity", X, String(j.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), j.vacuum && p("vacuum." + _e + "robot", X, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), j.climate && p("climate." + _e + X, X, "heat", { friendly_name: "Thermostat", hvac_modes: ["off", "heat", "cool", "auto"], hvac_action: "heating", current_temperature: j.temperature, temperature: 21, min_temp: 7, max_temp: 30, target_temp_step: 0.5 }), j.cover) {
      const [lt, pt, gt, nt] = j.cover;
      p("cover." + _e + X + "_" + vi(lt), X, gt ? "open" : "closed", { friendly_name: lt, device_class: pt, current_position: gt, ...nt != null ? { current_tilt_position: nt } : {} });
    }
    if (j.humidifier && p("humidifier." + _e + X, X, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: j.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), j.solar && (p("sensor." + _e + X + "_solar_power", X, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), p("sensor." + _e + X + "_solar_today", X, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), j.valve && p("valve." + _e + X + "_" + vi(j.valve), X, "closed", { friendly_name: j.valve, device_class: "water" }), j.door && v(X, j.door, "door", j.doorOpen), j.window && v(X, j.window, "window", !1), j.motion && v(X, j.motion, "motion", !1), j.plant) {
      const [lt, pt, gt, nt, J] = j.plant, Y = _e + vi(lt), R = (Dt, it, z, Ot, F) => p("sensor." + Y + "_" + Dt, X, String(z), { friendly_name: it, device_class: F, state_class: "measurement", unit_of_measurement: Ot, plant_low: z < fn[Dt][0], plant_high: z > fn[Dt][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[Dt] });
      R("moisture", "Moisture", pt, "%", "moisture"), R("light", "Light", gt, "lx", "illuminance"), R("temperature", "Temperature", nt, "°C", "temperature"), R("fertility", "Fertility", J, "µS/cm", "conductivity");
      const wt = Object.entries({ moisture: pt, light: gt, temperature: nt, fertility: J }).filter(([Dt, it]) => it < fn[Dt][0] || it > fn[Dt][1]).map(([Dt, it]) => Dt + (it < fn[Dt][0] ? " low" : " high"));
      p("plant." + Y, X, wt.length ? "problem" : "ok", { friendly_name: lt, moisture: pt, brightness: gt, temperature: nt, conductivity: J, problem: wt.join(", ") || "none" });
    }
  }), p("alarm_control_panel." + _e + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 7, code_format: null, changed_by: "Matt" }), v(null, "Front door", "door", !1), v(null, "Smoke alarm", "smoke", !1), p("sensor." + _e + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const w = {}, S = {};
  let I = null;
  function y() {
    const X = /* @__PURE__ */ new Date();
    Object.keys(r).forEach((j) => {
      j.endsWith("_solar_power") && (r[j] = { ...r[j], state: Bl(X).toFixed(2) }), j.endsWith("_solar_today") && (r[j] = { ...r[j], state: qu(X).toFixed(1) });
    });
  }
  y();
  let C = 0;
  function O() {
    let X = !1;
    const j = ++C % 10 === 0, lt = (nt, J, Y) => {
      g(nt, J, Y), X = !0;
    };
    Object.entries(w).forEach(([nt, J]) => {
      const Y = r[nt].attributes.current_position, R = Y < J ? Math.min(J, Y + 10) : Math.max(J, Y - 10);
      R === J && delete w[nt], lt(nt, R === J ? R === 0 ? "closed" : "open" : J > Y ? "opening" : "closing", { current_position: R });
    }), Object.entries(S).forEach(([nt, J]) => {
      const Y = r[nt].attributes.current_tilt_position, R = Y < J ? Math.min(J, Y + 25) : Math.max(J, Y - 25);
      R === J && delete S[nt], lt(nt, null, { current_tilt_position: R });
    }), Object.keys(r).filter((nt) => nt.startsWith("climate.")).forEach((nt) => {
      const J = r[nt], Y = J.attributes, R = Y.current_temperature, wt = (J.state === "heat" || J.state === "auto") && R < Y.temperature - 0.05, Dt = (J.state === "cool" || J.state === "auto") && R > Y.temperature + 0.05, it = J.state === "off" ? "off" : wt ? "heating" : Dt ? "cooling" : "idle", z = j ? Math.round((R + (wt ? 0.1 : Dt ? -0.1 : 0)) * 10) / 10 : R;
      (z !== R || it !== Y.hvac_action) && lt(nt, null, { current_temperature: z, hvac_action: it });
    }), Object.keys(r).filter((nt) => nt.startsWith("humidifier.")).forEach((nt) => {
      const J = r[nt], Y = J.attributes, R = Y.current_humidity, wt = J.state === "on" && R < Y.humidity, Dt = wt && j ? R + 1 : R, it = J.state !== "on" ? "off" : wt ? "humidifying" : "idle";
      if (Dt !== R || it !== Y.action) {
        lt(nt, null, { current_humidity: Dt, action: it });
        const z = "sensor." + _e + d[nt] + "_humidity";
        r[z] && lt(z, String(Dt));
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
    const gt = r[pt], nt = gt.attributes, J = (Y, R) => g(pt, Y, R);
    if (X === "climate" && (j === "set_temperature" && J(null, { temperature: Math.max(nt.min_temp, Math.min(nt.max_temp, lt.temperature)) }), j === "set_hvac_mode" && J(lt.hvac_mode, lt.hvac_mode === "off" ? { hvac_action: "off" } : {}), j === "toggle" && J(gt.state === "off" ? "heat" : "off", gt.state === "off" ? {} : { hvac_action: "off" })), X === "cover") {
      const Y = j === "open_cover" ? 100 : j === "close_cover" ? 0 : j === "set_cover_position" ? lt.position : j === "toggle" ? nt.current_position > 0 ? 0 : 100 : null;
      j === "stop_cover" && (delete w[pt], delete S[pt], J(nt.current_position === 0 ? "closed" : "open")), Y != null && Y !== nt.current_position && (w[pt] = Y, J(Y > nt.current_position ? "opening" : "closing"));
      const R = j === "open_cover_tilt" ? 100 : j === "close_cover_tilt" ? 0 : j === "set_cover_tilt_position" ? lt.tilt_position : null;
      j === "stop_cover_tilt" && delete S[pt], R != null && nt.current_tilt_position != null && R !== nt.current_tilt_position && (S[pt] = R);
    }
    if (X === "humidifier" && (j === "set_humidity" && J(null, { humidity: Math.max(nt.min_humidity, Math.min(nt.max_humidity, lt.humidity)) }), j === "set_mode" && J(null, { mode: lt.mode }), j === "turn_on" || j === "turn_off" || j === "toggle")) {
      const Y = j === "turn_on" || j === "toggle" && gt.state !== "on";
      J(Y ? "on" : "off", { action: Y ? "idle" : "off" });
    }
    if (X === "vacuum" && (j === "start" && J("cleaning", { rooms: lt.rooms || nt.rooms }), j === "pause" && J("paused"), j === "return_to_base" && J("returning", { rooms: [] }), j === "locate" && J(null, { located: Date.now() }), j === "set_rooms" && J(null, { rooms: lt.rooms })), X === "valve") {
      const Y = j === "open_valve" || j === "toggle" && gt.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(j) && J(Y ? "open" : "closed");
    }
    if (X === "alarm_control_panel") {
      j === "alarm_disarm" && (I = null, J("disarmed", { changed_by: "Matt" }));
      const Y = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night" }[j];
      Y && (I = { mode: Y, at: Date.now() }, J("arming", { changed_by: "Matt" }));
    }
    return o(), !0;
  }
  function at(X, { madeUp: j = !0 } = {}) {
    const lt = j ? r : {}, pt = (X == null ? void 0 : X.states) || {}, gt = (X == null ? void 0 : X.entities) || {}, nt = (X == null ? void 0 : X.devices) || {}, J = (ot) => {
      var vt;
      const rt = gt[ot];
      return rt && (rt.area_id || rt.device_id && ((vt = nt[rt.device_id]) == null ? void 0 : vt.area_id)) || null;
    }, Y = (ot) => {
      const rt = gt[ot];
      return pt[ot] && pt[ot].state !== "unavailable" && !(rt != null && rt.hidden) && !(rt != null && rt.entity_category);
    }, R = {};
    Object.keys(pt).forEach((ot) => {
      const rt = J(ot);
      rt && Y(ot) && (R[rt] || (R[rt] = [])).push(ot);
    });
    const wt = { ...pt, ...lt }, Dt = (ot) => {
      var rt, vt;
      return (vt = (rt = wt[ot]) == null ? void 0 : rt.attributes) == null ? void 0 : vt.device_class;
    }, it = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], z = Object.keys(pt).filter((ot) => ot.startsWith("vacuum.") && Y(ot)), Ot = Object.values((X == null ? void 0 : X.areas) || {}).filter((ot) => !Iu.has(ot.area_id)).map((ot) => {
      const rt = ot.area_id, vt = R[rt] || [], ft = (Ct) => vt.filter((ye) => ye.startsWith(Ct + ".")), xt = (Ct) => ft("sensor").filter((ye) => Dt(ye) === Ct), Nt = (Ct) => Object.keys(lt).filter((ye) => d[ye] === rt && Ct(ye)), re = (Ct, ye) => Ct.length ? Ct : Nt(ye), mt = re(xt("temperature"), (Ct) => Ct.endsWith(rt + "_temperature")), je = re(xt("humidity"), (Ct) => Ct.endsWith(rt + "_humidity")), Xa = xt("power").filter((Ct) => /^(W|kW)$/.test(wt[Ct].attributes.unit_of_measurement || "")), Vo = ft("binary_sensor").filter((Ct) => Dt(Ct) === "moisture"), So = re(ft("plant"), (Ct) => Ct.startsWith("plant.")).map((Ct) => ({ id: Ct, readings: Nt((ye) => ye.startsWith("sensor." + Ct.split(".")[1] + "_")) })), Oa = [...ft("binary_sensor").filter((Ct) => it.includes(Dt(Ct))), ...Nt((Ct) => Ct.startsWith("binary_sensor."))];
      return {
        id: rt,
        name: ot.name,
        icon: ot.icon,
        floor: ot.floor_id || null,
        readings: [...mt.slice(0, 1), ...je.slice(0, 1), ...Vo],
        power: Xa.length ? Xa.reduce((Ct, ye) => Ct + Number(wt[ye].state) * (wt[ye].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: ft("switch"),
        lights: ft("light"),
        actions: [...ft("light"), ...re(ft("climate"), (Ct) => Ct.startsWith("climate.")), ...re(ft("cover"), (Ct) => Ct.startsWith("cover.")), ...re(ft("humidifier"), (Ct) => Ct.startsWith("humidifier.")), ...re(ft("valve"), (Ct) => Ct.startsWith("valve.")), ...ft("media_player"), ...ft("vacuum"), ...z.length ? [] : Nt((Ct) => Ct.startsWith("vacuum."))],
        solar: Nt((Ct) => Ct.includes("_solar_")),
        plants: So,
        openings: Oa,
        alerts: [...Vo, ...Oa].filter((Ct) => {
          var ye;
          return ((ye = wt[Ct]) == null ? void 0 : ye.state) === "on";
        })
      };
    }).filter((ot) => ot.readings.length || ot.plugs.length || ot.actions.length || ot.solar.length || ot.plants.length), F = Object.keys(pt).find((ot) => /^sensor\..*(p1_meter_power|grid_power)$/.test(ot) && pt[ot].state !== "unavailable") || null, tt = (ot) => Object.keys(pt).filter((rt) => rt.startsWith(ot + ".") && Y(rt)), D = tt("alarm_control_panel"), dt = z.length ? z : j ? ["vacuum." + _e + "robot"] : [];
    return {
      states: wt,
      rooms: Ot,
      grid: F,
      // any device's room, hidden ones too (Maintenance's batteries are mostly diagnostic)
      areaOf: (ot) => lt[ot] ? d[ot] : J(ot),
      vacuums: dt,
      homeVacuums: dt.filter((ot) => !Ot.some((rt) => rt.actions.includes(ot))),
      security: {
        alarms: D.length ? D : j ? ["alarm_control_panel." + _e + "house"] : [],
        locks: tt("lock"),
        openings: [...Object.keys(lt).filter((ot) => ot.startsWith("binary_sensor.")), ...j ? ["sensor." + _e + "doorbell"] : []]
      }
    };
  }
  return { model: at, call: et, stop() {
    clearInterval(V), clearInterval(Q);
  } };
}
const Sa = {
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
}, wr = (o) => o < 0 ? 0 : o > 1 ? 1 : o, Al = (o) => {
  const r = String(o || "#000000").trim().replace("#", ""), d = r.length === 3 ? r.split("").map((p) => p + p).join("") : r;
  return [0, 2, 4].map((p) => parseInt(d.slice(p, p + 2), 16) || 0);
}, ju = (o) => "#" + o.map((r) => Math.round(Math.max(0, Math.min(255, r))).toString(16).padStart(2, "0")).join(""), rd = {}, ka = (o, r, d) => {
  const p = o + r + d;
  return rd[p] || (rd[p] = ju(Al(o).map((g, v) => g + (Al(r)[v] - g) * d)));
}, id = {}, ll = (o) => id[o] || (id[o] = Al(o));
function dp(o, r) {
  const d = String(o || "");
  return (d === "sunny" || d === "clear-night" ? "clear" : d === "partlycloudy" ? "partly" : d === "fog" ? "fog" : d === "lightning" || d === "lightning-rainy" ? "storm" : d === "snowy" || d === "snowy-rainy" ? "snow" : d === "rainy" || d === "pouring" || d === "hail" ? "rain" : "cloudy") + "/" + (d === "clear-night" || r ? "night" : "day");
}
function Vu(o) {
  const r = { clear: [o.skyClearDay, o.skyClearNight], cloudy: [o.skyCloudyDay, o.skyCloudyNight], rain: [o.skyRainDay, o.skyRainNight], snow: [o.skySnowDay, o.skySnowNight], fog: [o.skyFogDay, o.skyFogNight] };
  return r.partly = [ka(r.clear[0], r.cloudy[0], 0.12), ka(r.clear[1], r.cloudy[1], 0.12)], r.storm = [ka(r.rain[0], "#000000", 0.22), ka(r.rain[1], "#000000", 0.22)], r;
}
const Cl = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], _l = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], Tl = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function zu(o, r = Sa) {
  const d = { ...Sa, ...r }, p = Vu(d), g = String(o).split("/"), v = p[g[0]] ? g[0] : "clear", w = g[1] === "night", S = p[v][w ? 1 : 0], I = {
    night: w,
    clearness: v === "clear" ? 1 : v === "partly" ? 0.7 : 0.25,
    sky: S,
    skyStops: [S],
    skyT: 0,
    sun: { x: 45, y: w ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: w ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: w ? 1 : 0 },
    stars: Cl.map(() => ({ o: 0 })),
    rain: _l.map(() => ({ o: 0, dy: -16 })),
    snow: Tl.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, y = (C) => Cl.map(() => ({ o: C }));
  return v === "clear" ? w ? (I.moon.o = 1, I.stars = y(1)) : I.sun.o = 1 : v === "partly" ? (I.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: w ? 1 : 0 }, w ? (I.moon = { x: 34, y: 33, d: 48, o: 1 }, I.stars = y(0.7)) : I.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : v === "cloudy" || v === "fog" ? (I.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: w ? 1 : 0 }, w ? I.moon = { x: 40, y: 36, d: 40, o: 0 } : I.sun = { x: 40, y: 36, r: 20, o: 0 }) : (I.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, w ? I.moon = { x: 38, y: 28, d: 36, o: 0 } : I.sun = { x: 38, y: 28, r: 18, o: 0 }, v === "snow" ? I.snow = Tl.map(() => ({ o: 1, dy: 0 })) : I.rain = _l.map((C, O) => ({ o: v === "storm" && O === 1 ? 0 : 1, dy: 0 })), v === "storm" && (I.bolt = { o: 1, dy: 0 })), I;
}
const Gu = [
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
], pn = (o, r) => (Gu[(r & 7) * 8 + (o & 7)] + 0.5) / 64, Uu = 0, pp = 1, fp = 2, up = 3, hp = 4, Za = 5, Oi = 6, Hn = 7, mp = 8, sd = (o, r) => r <= 0.6665 && ((o - 0.5) * (o - 0.5) + (r - 0.2877) * (r - 0.2877) <= 0.0824 || (o - 0.25) * (o - 0.25) + (r - 0.416) * (r - 0.416) <= 0.0625 || (o - 0.791) * (o - 0.791) + (r - 0.458) * (r - 0.458) <= 0.0437 || o >= 0.25 && o <= 0.791 && r >= 0.416), Yu = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], Zu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((o) => [o[0] * 13 / 11, o[1] * 28 / 24]), Ku = (o, r, d) => {
  let p = !1;
  for (let g = 0, v = o.length - 1; g < o.length; v = g++) {
    const w = o[g], S = o[v];
    w[1] > d != S[1] > d && r < (S[0] - w[0]) * (d - w[1]) / (S[1] - w[1]) + w[0] && (p = !p);
  }
  return p;
};
function Xu(o, { size: r = 90, px: d = 2, oneBit: p = !1, colors: g = Sa, ink: v = "#26221e", paper: w = "#fbf9f6", clock: S = 0, idle: I = !1 } = {}) {
  const y = { ...Sa, ...g }, C = Math.sin, O = Math.PI * 2, V = Math.max(6, Math.round(r / d)), Q = V / 90, et = I ? Math.floor(S / 100) * 100 : 0, at = I ? C(O * et / 3600) : 0, X = I ? 1.8 * C(O * et / 6400) : 0, j = I ? 0.9 * C(O * et / 4100) : 0, lt = I ? 0.8 * C(O * et / 5200) : 0, pt = et / 3400 % 1, gt = I && o.bolt.o > 0.5 && (pt < 0.04 || pt > 0.08 && pt < 0.11), nt = new Array(V * V), J = new Uint8Array(V * V), Y = (F, tt, D, dt, ot) => {
    D == null || F < 0 || tt < 0 || F >= V || tt >= V || (dt >= 1 || dt > pn(F + 5, tt + 3)) && (nt[tt * V + F] = D, J[tt * V + F] = ot);
  }, R = (F, tt, D, dt) => {
    for (let ot = Math.max(0, Math.floor(tt - D) - 1); ot <= Math.min(V - 1, tt + D + 1); ot++) for (let rt = Math.max(0, Math.floor(F - D) - 1); rt <= Math.min(V - 1, F + D + 1); rt++) dt(rt, ot, rt + 0.5 - F, ot + 0.5 - tt);
  }, wt = o.skyStops || [o.sky], Dt = o.skyT || 0;
  for (let F = 0; F < V; F++) {
    const tt = o.night ? wr(1 - (F + 0.5) / (V * 0.7)) * 0.85 : wr(((F + 0.5) / V - 0.35) / 0.65) * 0.85;
    for (let D = 0; D < V; D++) {
      let dt = wt[0];
      if (wt.length > 1) {
        const ot = Dt * (wt.length - 1), rt = Math.min(wt.length - 2, Math.floor(ot));
        dt = ot - rt > pn(D, F) ? wt[rt + 1] : wt[rt];
      }
      tt > pn(D + 2, F + 5) && (dt = o.night ? ka(dt, "#000000", 0.28) : ka(dt, "#ffffff", 0.2)), nt[F * V + D] = gt ? ka(dt, "#ffffff", 0.25) : dt;
    }
  }
  if (o.sun.o > 0.01) {
    const F = o.sun.x * Q, tt = o.sun.y * Q, D = Math.max(1, o.sun.r * Q);
    if (I) {
      const dt = D * (1.45 + 0.06 * at), ot = ka(y.sun, "#ffffff", 0.55);
      if (R(F, tt, dt, (rt, vt, ft, xt) => {
        const Nt = Math.sqrt(ft * ft + xt * xt);
        Nt > D && Nt < dt && Y(rt, vt, ot, 0.26 * (1 - (Nt - D) / (dt - D)) * o.sun.o, Uu);
      }), o.sun.o > 0.5) {
        const rt = Math.floor(et / 500) % 2, vt = Math.max(1, D * 0.22);
        for (let ft = 0; ft < 8; ft++) if (ft % 2 === rt) for (let xt = D + 1.5; xt < D + 1.5 + vt; xt += 0.7) Y(Math.floor(F + Math.cos(ft * Math.PI / 4) * xt), Math.floor(tt + Math.sin(ft * Math.PI / 4) * xt), y.sun, o.sun.o, mp);
      }
    }
    R(F, tt, D, (dt, ot, rt, vt) => {
      if (rt * rt + vt * vt > D * D) return;
      const ft = ((rt * 0.643 + vt * 0.766) / D + 1) / 2;
      Y(dt, ot, wr((ft - 0.62) / 0.38) > pn(dt, ot) ? y.sunEdge : y.sun, o.sun.o, pp);
    });
  }
  if (Cl.forEach((F, tt) => {
    const D = o.stars[tt].o;
    if (D < 0.01) return;
    const dt = Math.floor(F[0] * Q), ot = Math.floor(F[1] * Q), rt = I ? (Math.floor(et / 300) + tt * 3) % 6 : 0;
    if (rt === 5) return;
    const vt = Math.round(F[2] * Q * (rt === 4 ? 0.3 : rt < 2 ? 1 : 0.6));
    Y(dt, ot, y.star, D, Hn);
    for (let ft = 1; ft <= vt; ft++) {
      const xt = ft === vt && vt > 1 ? ka(y.star, o.sky, 0.5) : y.star;
      Y(dt - ft, ot, xt, D, Hn), Y(dt + ft, ot, xt, D, Hn), Y(dt, ot - ft, xt, D, Hn), Y(dt, ot + ft, xt, D, Hn);
    }
  }), o.moon.o > 0.01) {
    const F = Math.max(1.5, o.moon.d * Q * 0.37), tt = o.moon.x * Q, D = o.moon.y * Q + (I && lt > 0.4 ? -1 : 0), dt = tt + 0.547 * F, ot = D - 0.503 * F, rt = 0.82 * F, vt = ka(y.moon, "#ffffff", 0.6);
    R(tt, D, F, (ft, xt, Nt, re) => {
      if (Nt * Nt + re * re > F * F) return;
      const mt = ft + 0.5 - dt, je = xt + 0.5 - ot;
      mt * mt + je * je <= rt * rt || Y(ft, xt, wr((re + F) / (2 * F) * 1.1 - 0.1) > pn(ft, xt) ? y.moon : vt, o.moon.o, fp);
    });
  }
  const it = Math.max(2, Math.round(15.65 * Q)), z = Math.max(1, Math.round(5.87 * Q * 0.5));
  _l.forEach((F, tt) => {
    const D = o.rain[tt];
    let dt = D.dy, ot = D.o;
    if (ot < 0.01) return;
    if (I) {
      const ft = (et / 950 + tt / 3) % 1;
      dt += -5 + ft * 14, ot *= ft < 0.18 ? ft / 0.18 : ft > 0.72 ? (1 - ft) / 0.28 : 1;
    }
    const rt = (F[0] + 3 + X) * Q, vt = (F[1] + dt) * Q;
    for (let ft = 0; ft < it; ft++) for (let xt = 0; xt < z; xt++) Y(Math.floor(rt - 0.208 * ft) + xt, Math.floor(vt) + ft, y.rain, ot, hp);
  });
  const Ot = Math.max(0, Math.round(7.34 * Q / 2.6));
  if (Tl.forEach((F, tt) => {
    const D = o.snow[tt];
    let dt = D.dy, ot = 0, rt = D.o;
    if (rt < 0.01) return;
    if (I) {
      const xt = (et / 3200 + tt / 5) % 1;
      dt += -6 + xt * 14, ot = 1.5 * C(O * (xt * 1.5 + tt / 5)), rt *= xt < 0.2 ? xt / 0.2 : xt > 0.75 ? (1 - xt) / 0.25 : 1;
    }
    const vt = Math.floor((F[0] + 3.67 + ot + X) * Q), ft = Math.floor((F[1] + 3.67 + dt) * Q);
    Y(vt, ft, y.snow, rt, Za);
    for (let xt = 1; xt <= Ot; xt++)
      Y(vt - xt, ft, y.snow, rt, Za), Y(vt + xt, ft, y.snow, rt, Za), Y(vt, ft - xt, y.snow, rt, Za), Y(vt, ft + xt, y.snow, rt, Za), Ot > 1 && xt < Ot && (Y(vt - xt, ft - xt, y.snow, rt, Za), Y(vt + xt, ft - xt, y.snow, rt, Za), Y(vt - xt, ft + xt, y.snow, rt, Za), Y(vt + xt, ft + xt, y.snow, rt, Za));
  }), o.bolt.o > 0.01)
    if (V >= 30) {
      const F = 39 + X, tt = 50 + o.bolt.dy;
      for (let D = Math.floor(tt * Q); D <= (tt + 28) * Q; D++) for (let dt = Math.floor(F * Q); dt <= (F + 13) * Q; dt++)
        Ku(Zu, (dt + 0.5) / Q - F, (D + 0.5) / Q - tt) && Y(dt, D, y.sun, o.bolt.o, Oi);
    } else {
      const F = V / 18, tt = 7, D = 10 + Math.round(o.bolt.dy * 0.2);
      Yu.forEach((dt, ot) => dt.split("").forEach((rt, vt) => {
        if (rt !== "#") return;
        const ft = Math.floor((tt + vt) * F), xt = Math.floor((D + ot) * F);
        for (let Nt = xt; Nt < Math.max(xt + 1, Math.floor((D + ot + 1) * F)); Nt++) for (let re = ft; re < Math.max(ft + 1, Math.floor((tt + vt + 1) * F)); re++) Y(re, Nt, y.sun, o.bolt.o, Oi);
      }));
    }
  if (o.cloud.o > 0.01) {
    const F = Math.max(3, o.cloud.w * Q), tt = F * 0.6665, D = (o.cloud.x + X) * Q - F / 2, dt = (o.cloud.y + j) * Q - tt / 2, ot = ka(y.cloudDay, y.cloudNight, Math.round(o.cloud.f * 4) / 4), rt = ka(ot, "#000000", 0.16);
    for (let vt = Math.max(0, Math.floor(dt) - 1); vt <= Math.min(V - 1, dt + tt + 1); vt++) for (let ft = Math.max(0, Math.floor(D) - 1); ft <= Math.min(V - 1, D + F + 1); ft++) {
      const xt = (ft + 0.5 - D) / F, Nt = (vt + 0.5 - dt) / F;
      sd(xt, Nt) && Y(ft, vt, !sd(xt, Nt + 1 / F) || wr((Nt - 0.42) / 0.25) * 0.8 > pn(ft, vt) ? rt : ot, o.cloud.o, up);
    }
  }
  return $u(nt, J, V, V, { oneBit: p, ink: v, paper: w, snowInk: !o.night });
}
function $u(o, r, d, p, { oneBit: g, ink: v, paper: w, snowInk: S }) {
  const I = new Uint8ClampedArray(d * p * 4), y = ll(v), C = ll(w);
  for (let O = 0; O < p; O++) for (let V = 0; V < d; V++) {
    const Q = O * d + V, et = r[Q];
    if (o[Q] == null) continue;
    let at = ll(o[Q]);
    if (g) {
      let X;
      et === hp || et === mp ? X = !0 : et === Za ? X = S : et === Hn || et === Oi ? X = !1 : X = Math.round((0.2126 * at[0] + 0.7152 * at[1] + 0.0722 * at[2]) / 255 * 4) / 4 <= pn(V, O), (et === pp || et === fp || et === up || et === Oi) && (V > 0 && r[Q - 1] !== et || V < d - 1 && r[Q + 1] !== et || O > 0 && r[Q - d] !== et || O < p - 1 && r[Q + d] !== et) && (X = !0), at = X ? y : C;
    }
    I[Q * 4] = at[0], I[Q * 4 + 1] = at[1], I[Q * 4 + 2] = at[2], I[Q * 4 + 3] = 255;
  }
  return { w: d, h: p, data: I };
}
const xo = (o) => o < 0 ? 0 : o > 1 ? 1 : o, Ll = (o) => {
  const r = String(o || "#000000").trim().replace("#", ""), d = r.length === 3 ? r.split("").map((p) => p + p).join("") : r;
  return [0, 2, 4].map((p) => parseInt(d.slice(p, p + 2), 16) || 0);
}, Ju = (o) => "#" + o.map((r) => Math.round(Math.max(0, Math.min(255, r))).toString(16).padStart(2, "0")).join(""), ld = {}, Ma = (o, r, d) => {
  const p = o + r + d;
  return ld[p] || (ld[p] = Ju(Ll(o).map((g, v) => g + (Ll(r)[v] - g) * d)));
}, cd = {}, Bi = (o) => cd[o] || (cd[o] = Ll(o));
function Qu(o) {
  const r = { clear: [o.skyClearDay, o.skyClearNight], cloudy: [o.skyCloudyDay, o.skyCloudyNight], rain: [o.skyRainDay, o.skyRainNight], snow: [o.skySnowDay, o.skySnowNight], fog: [o.skyFogDay, o.skyFogNight] };
  return r.partly = [Ma(r.clear[0], r.cloudy[0], 0.12), Ma(r.clear[1], r.cloudy[1], 0.12)], r.storm = [Ma(r.rain[0], "#000000", 0.22), Ma(r.rain[1], "#000000", 0.22)], r;
}
const th = [
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
], vo = (o, r) => (th[(r & 7) * 8 + (o & 7)] + 0.5) / 64, gp = 1, bp = 2, wp = 3, vp = 4, On = 5, Ni = 6, Dl = 7, yp = 8, dd = (o, r) => r <= 0.6665 && ((o - 0.5) * (o - 0.5) + (r - 0.2877) * (r - 0.2877) <= 0.0824 || (o - 0.25) * (o - 0.25) + (r - 0.416) * (r - 0.416) <= 0.0625 || (o - 0.791) * (o - 0.791) + (r - 0.458) * (r - 0.458) <= 0.0437 || o >= 0.25 && o <= 0.791 && r >= 0.416), eh = (o, r, d) => {
  let p = !1;
  for (let g = 0, v = o.length - 1; g < o.length; v = g++) {
    const w = o[g], S = o[v];
    w[1] > d != S[1] > d && r < (S[0] - w[0]) * (d - w[1]) / (S[1] - w[1]) + w[0] && (p = !p);
  }
  return p;
};
function ah(o, r, d, p, { oneBit: g, ink: v, paper: w, snowInk: S }) {
  const I = new Uint8ClampedArray(d * p * 4), y = Bi(v), C = Bi(w);
  for (let O = 0; O < p; O++) for (let V = 0; V < d; V++) {
    const Q = O * d + V, et = r[Q];
    if (o[Q] == null) continue;
    let at = Bi(o[Q]);
    if (g) {
      let X;
      et === vp || et === yp ? X = !0 : et === On ? X = S : et === Dl || et === Ni ? X = !1 : X = Math.round((0.2126 * at[0] + 0.7152 * at[1] + 0.0722 * at[2]) / 255 * 4) / 4 <= vo(V, O), (et === gp || et === bp || et === wp || et === Ni) && (V > 0 && r[Q - 1] !== et || V < d - 1 && r[Q + 1] !== et || O > 0 && r[Q - d] !== et || O < p - 1 && r[Q + d] !== et) && (X = !0), at = X ? y : C;
    }
    I[Q * 4] = at[0], I[Q * 4 + 1] = at[1], I[Q * 4 + 2] = at[2], I[Q * 4 + 3] = 255;
  }
  return { w: d, h: p, data: I };
}
const oh = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, nh = (o) => dp(o, !1).split("/")[0], cl = (o) => () => {
  o |= 0, o = o + 1831565813 | 0;
  let r = Math.imul(o ^ o >>> 15, 1 | o);
  return r = r + Math.imul(r ^ r >>> 7, 61 | r) ^ r, ((r ^ r >>> 14) >>> 0) / 4294967296;
}, rh = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", ih = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", sh = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", lh = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", ch = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], dh = [".##", "##.", ".#.", "#.."];
function xp(o, { width: r, height: d, colors: p, wave: g = 0.38, soft: v = 6, glow: w = 0.6, columns: S = 6 }) {
  const I = { ...Sa, dawn: "#e5a77e", ...p }, y = Qu(I), C = r, O = d, V = C / S, Q = V / 2, et = Math.PI * 2, at = o.length ? o : [{ cond: "cloudy", night: !1 }], X = [...Array(S * 2)].map((gt, nt) => {
    const J = at[Math.min(nt, at.length - 1)], Y = nh(J.cond), R = nt % 2 === 1;
    return { cond: J.cond, k: Y, night: R, sky: y[Y][R ? 1 : 0], cover: oh[Y] };
  }), j = (gt) => O * (0.5 - g * Math.cos(et * (gt / V - 0.25)));
  return { C: I, S: X, W: C, H: O, cw: V, sw: Q, TAU: et, yb: j, side: (gt, nt, J) => {
    const Y = (gt ? j(nt) - J : J - j(nt)) / Math.max(3, v * 1.4) + 0.5;
    return Y <= 0 ? 0 : Y >= 1 ? 1 : Y;
  }, glowAt: (gt) => {
    const nt = ((gt / V - 0.25) % 1 + 1) % 1, J = Math.max(0, Math.min(S - 1, Math.round(gt / V - 0.25))), Y = Math.max(0, Math.min(S - 1, Math.round(gt / V - 0.75))), R = 1 - (X[2 * J].cover + X[2 * Y + 1].cover) / 2, wt = Math.sin(Math.PI * Math.min(1, Math.max(0, j(gt) / O)));
    return { c: nt < 0.5 ? I.dusk : I.dawn, a: w * (0.2 + 0.8 * R) * wt * wt };
  }, soft: v, tw: V * 0.3, sy: O / 90 };
}
function kp(o, { clock: r = 0, ambient: d = !1, seed: p = 1 }) {
  const { S: g, sw: v, side: w, C: S, TAU: I, sy: y, H: C } = o, O = r, V = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  g.forEach((at, X) => {
    const j = cl(p * 977 + X * 131 + 7), lt = (X + 0.5) * v, pt = at.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[at.k] : 0;
    for (let gt = 0; gt < pt; gt++) {
      const nt = lt + (j() - 0.5) * v * 1.6, J = (6 + j() * 76) * y, Y = j() < 0.35, R = 1.8 + j() * 1.6, wt = w(!0, nt, J) * (Y ? 0.95 : 0.7) * (d ? 0.6 + 0.4 * Math.sin(I * O / 2600 + gt * 1.7 + X) : 1);
      wt >= 0.03 && V.stars.push({ x: nt, y: J, big: Y, size: R, o: wt });
    }
    if (!at.night && (at.k === "clear" || at.k === "partly")) {
      const gt = lt + (j() - 0.5) * v * 0.3, nt = Math.min(15, v * 0.29);
      V.suns.push({ x: gt, y: 32 * y, rad: nt, halo: nt * 2.8 * (d ? 1 + 0.07 * Math.sin(I * O / 3600 + X) : 1) });
    }
    if (at.night && (at.k === "clear" || at.k === "partly")) {
      const gt = Math.min(0.78, v * 0.55 / 34), nt = lt - 23 * gt + (j() - 0.5) * v * 0.2;
      V.moons.push({ x: nt + 23 * gt, y: (4 + (d ? 0.8 * Math.sin(I * O / 5200 + X) : 0)) * y + 23 * gt, d: 46 * gt });
    }
  });
  const Q = Math.max(56, Math.min(100, C * 0.45)), et = Math.max(1, v / (Q * 2.4));
  return g.forEach((at, X) => {
    const j = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[at.k];
    if (!j) return;
    const lt = at.k === "partly" ? 1 : Math.round(j * et), pt = cl(p * 577 + X * 71 + 3), gt = (X + 0.5) * v, nt = at.k === "rain" || at.k === "storm" || at.night ? S.cloudNight : S.cloudDay, J = at.night ? 0.82 : at.k === "storm" ? 0.75 : 1;
    for (let Y = 0; Y < lt; Y++) {
      const R = Q / 46 * (at.k === "partly" ? 1 : 0.8 + pt() * 0.4), wt = gt + (at.k === "partly" ? v * 0.12 : ((Y + 0.5) / lt - 0.5) * v * 0.95 + (pt() - 0.5) * v * 0.5 / lt), Dt = (at.k === "partly" ? 40 : 6 + pt() * 26) * y, it = d ? 2.5 * Math.sin(I * O / 9e3 + X * 1.3 + Y * 2.1) : 0, z = d ? 0.9 * Math.sin(I * O / 6100 + X + Y) : 0;
      V.clouds.push({ x: wt - 23 * R + it, y: Dt - 15.33 * R + z, w: 46 * R, h: 30.66 * R, fill: nt, o: J * (lt > 1 && Y === 0 ? 0.85 : 1) });
    }
  }), g.forEach((at, X) => {
    const j = cl(p * 313 + X * 29 + 11), lt = (X + 0.5) * v, pt = at.cond === "pouring" ? 16 : at.cond === "rainy" || at.cond === "hail" ? 9 : at.cond === "lightning-rainy" ? 12 : at.cond === "snowy-rainy" ? 5 : 0;
    for (let nt = 0; nt < pt; nt++) {
      let J = lt + (j() - 0.5) * v * 1.05, Y = 44 + j() * 36, R = 1;
      if (d) {
        const Dt = ((Y - 44 + O * 0.04) % 36 + 36) % 36;
        J -= 0.21 * (Dt - (Y - 44)), Y = 44 + Dt, R = Math.min(1, Dt / 6, (36 - Dt) / 6);
      }
      Y *= y;
      const wt = w(at.night, J, Y) * R;
      wt >= 0.05 && V.drops.push({ x: J, y: Y, o: wt });
    }
    const gt = at.cond === "snowy" ? 11 : at.cond === "snowy-rainy" ? 6 : 0;
    for (let nt = 0; nt < gt; nt++) {
      let J = lt + (j() - 0.5) * v * 1.05, Y = 40 + j() * 44, R = 1;
      if (d) {
        const Dt = ((Y - 40 + O * 9e-3) % 44 + 44) % 44;
        Y = 40 + Dt, J += 1.6 * Math.sin(I * O / 2800 + nt * 1.9 + X), R = Math.min(1, Dt / 6, (44 - Dt) / 6);
      }
      Y *= y;
      const wt = w(at.night, J, Y) * R;
      wt >= 0.05 && V.flakes.push({ x: J, y: Y, o: wt });
    }
    if (at.k === "fog") {
      const nt = at.night ? "#c8ccd6" : "#ffffff", J = at.night ? 0.28 : 0.62, Y = d ? 4 * Math.sin(I * O / 8e3 + X) : 0;
      for (let R = 0; R < 4; R++) V.fogs.push({ x: lt - v * 0.75 + R % 2 * v * 0.18 + (R % 2 ? Y : -Y), y: (30 + R * 13) * y, w: v * 1.3, c: nt, a: J });
    }
    if (at.k === "storm") {
      const nt = (O / 3400 + X * 0.37) % 1;
      V.bolts.push({ x: lt + (j() - 0.5) * v * 0.3 - 5, y: 36 * y, o: d && !(nt < 0.05 || nt > 0.09 && nt < 0.12) ? 0.8 : 1 });
    }
  }), V;
}
function ph(o, r, d, p, g, v, w, S) {
  const { S: I, C: y, cw: C, yb: O, glowAt: V, soft: Q, tw: et, sy: at } = o, X = new Array(d * p), j = new Uint8Array(d * p), lt = new Uint8Array(d * p), pt = (F, tt, D, dt, ot) => {
    D == null || F < 0 || tt < 0 || F >= d || tt >= p || (dt >= 1 || dt > vo(F + 5, tt + 3)) && (X[tt * d + F] = D, j[tt * d + F] = ot);
  }, gt = (F, tt, D, dt) => {
    for (let ot = Math.max(0, Math.floor(tt - D) - 1); ot <= Math.min(p - 1, tt + D + 1); ot++) for (let rt = Math.max(0, Math.floor(F - D) - 1); rt <= Math.min(d - 1, F + D + 1); rt++) dt(rt, ot, rt + 0.5 - F, ot + 0.5 - tt);
  }, nt = (F, tt, D) => {
    for (let ot = 0; ot < F.length - 1; ot++) {
      const rt = (ot + tt) * C;
      if (D < rt - et / 2) return [F[ot], F[ot], 0];
      if (D <= rt + et / 2) return [F[ot], F[ot + 1], (D - rt + et / 2) / et];
    }
    const dt = F[F.length - 1];
    return [dt, dt, 0];
  }, J = I.filter((F) => !F.night).map((F) => F.sky), Y = I.filter((F) => F.night).map((F) => F.sky), R = Q / v, wt = 16 * at / v;
  for (let F = 0; F < d; F++) {
    const tt = (F + 0.5) * g, D = O(tt) / v, dt = nt(J, 0.75, tt), ot = nt(Y, 1.25, tt), rt = V(tt);
    for (let vt = 0; vt < p; vt++) {
      const ft = vo(F, vt), xt = vt + 0.5 - D, Nt = (R > 0.01 ? xo(0.5 + xt / R) : xt > 0 ? 1 : 0) > ft;
      let re = Nt ? dt[2] > ft ? dt[1] : dt[0] : ot[2] > ft ? ot[1] : ot[0];
      (Nt ? xo(((vt + 0.5) / p - 0.45) / 0.55) * 0.7 : xo(1 - (vt + 0.5) / (p * 0.55)) * 0.7) > vo(F + 2, vt + 5) && (re = Nt ? Ma(re, "#ffffff", 0.18) : Ma(re, "#000000", 0.25)), Nt && xt >= 0 && xt < wt && rt.a * 1.3 * (1 - xt / wt) > vo(F + 6, vt + 1) && (re = rt.c), X[vt * d + F] = re, lt[vt * d + F] = Nt ? 0 : 1;
    }
  }
  const Dt = Ma(y.sun, "#ffffff", 0.55), it = Ma(y.moon, "#ffffff", 0.6);
  r.stars.forEach((F) => {
    const tt = Math.floor(F.x / g), D = Math.floor(F.y / v);
    if (tt < 0 || D < 0 || tt >= d || D >= p || !lt[D * d + tt] || F.o < 0.15) return;
    const dt = F.o > 0.45 ? y.star : Ma(y.star, X[D * d + tt], 0.5), ot = F.big && F.o > 0.6 ? Math.floor(F.size / g) : 0;
    pt(tt, D, dt, 1, Dl);
    for (let rt = 1; rt <= ot; rt++) [[tt - rt, D], [tt + rt, D], [tt, D - rt], [tt, D + rt]].forEach((vt) => {
      vt[0] >= 0 && vt[1] >= 0 && vt[0] < d && vt[1] < p && lt[vt[1] * d + vt[0]] && pt(vt[0], vt[1], dt, 1, Dl);
    });
  }), r.suns.forEach((F) => {
    const tt = Math.max(1.5, F.rad / g), D = F.x / g, dt = F.y / v, ot = F.halo / g * 0.85;
    if (gt(D, dt, ot, (rt, vt, ft, xt) => {
      const Nt = Math.sqrt(ft * ft + xt * xt);
      Nt > tt && Nt < ot && !lt[vt * d + rt] && pt(rt, vt, Dt, 0.3 * (1 - (Nt - tt) / (ot - tt)), 0);
    }), S) {
      const rt = Math.floor(w / 500) % 2, vt = Math.max(1, tt * 0.3);
      for (let ft = 0; ft < 8; ft++) if (ft % 2 === rt) for (let xt = tt + 1.2; xt < tt + 1.2 + vt; xt += 0.7) pt(Math.floor(D + Math.cos(ft * Math.PI / 4) * xt), Math.floor(dt + Math.sin(ft * Math.PI / 4) * xt), y.sun, 1, yp);
    }
    gt(D, dt, tt, (rt, vt, ft, xt) => {
      ft * ft + xt * xt <= tt * tt && pt(rt, vt, xo(((xt / tt + 1) / 2 - 0.6) / 0.4) > vo(rt, vt) ? y.sunEdge : y.sun, 1, gp);
    });
  }), r.moons.forEach((F) => {
    const tt = Math.max(1.5, F.d * 0.37 / g), D = F.x / g, dt = F.y / v, ot = D + 0.547 * tt, rt = dt - 0.503 * tt, vt = 0.82 * tt;
    gt(D, dt, tt, (ft, xt, Nt, re) => {
      if (Nt * Nt + re * re > tt * tt) return;
      const mt = ft + 0.5 - ot, je = xt + 0.5 - rt;
      mt * mt + je * je > vt * vt && pt(ft, xt, xo((re + tt) / (2 * tt) * 1.1 - 0.1) > vo(ft, xt) ? y.moon : it, 1, bp);
    });
  }), r.clouds.forEach((F) => {
    const tt = Math.max(3, F.w / g), D = tt * 0.6665, dt = F.x / g, ot = F.y / v, rt = Ma(F.fill, "#000000", 0.16);
    for (let vt = Math.max(0, Math.floor(ot) - 1); vt <= Math.min(p - 1, ot + D + 1); vt++) for (let ft = Math.max(0, Math.floor(dt) - 1); ft <= Math.min(d - 1, dt + tt + 1); ft++) {
      const xt = (ft + 0.5 - dt) / tt, Nt = (vt + 0.5 - ot) / tt;
      dd(xt, Nt) && pt(ft, vt, !dd(xt, Nt + 1 / tt) || xo((Nt - 0.42) / 0.25) * 0.8 > vo(ft, vt) ? rt : F.fill, F.o, wp);
    }
  }), r.fogs.forEach((F) => {
    const tt = Math.floor(F.y / v), D = Math.max(tt, Math.floor((F.y + 6 * at) / v) - 1), dt = Math.floor(F.x / g), ot = Math.floor((F.x + F.w) / g);
    for (let rt = tt; rt <= D; rt++) for (let vt = dt; vt <= ot; vt++) {
      const ft = (vt - dt) / Math.max(1, ot - dt);
      pt(vt, rt, F.c, F.a * (ft < 0.25 ? ft / 0.25 : ft > 0.75 ? (1 - ft) / 0.25 : 1), 0);
    }
  });
  const z = Math.max(2, Math.round(9 / v));
  r.drops.forEach((F) => {
    const tt = F.x / g, D = Math.floor(F.y / v);
    for (let dt = 0; dt < z; dt++) pt(Math.floor(tt - 0.208 * dt * v / g), D + dt, y.rain, F.o, vp);
  });
  const Ot = Math.max(0, Math.round(4.4 / g / 2.6));
  return r.flakes.forEach((F) => {
    const tt = Math.floor(F.x / g), D = Math.floor(F.y / v);
    pt(tt, D, y.snow, F.o, On);
    for (let dt = 1; dt <= Ot; dt++)
      pt(tt - dt, D, y.snow, F.o, On), pt(tt + dt, D, y.snow, F.o, On), pt(tt, D - dt, y.snow, F.o, On), pt(tt, D + dt, y.snow, F.o, On);
  }), r.bolts.forEach((F) => {
    if (g <= 3.5)
      for (let tt = Math.floor(F.y / v); tt <= (F.y + 24) / v; tt++) for (let D = Math.floor(F.x / g); D <= (F.x + 11) / g; D++)
        eh(ch, (D + 0.5) * g - F.x, (tt + 0.5) * v - F.y) && pt(D, tt, y.sun, 1, Ni);
    else {
      const tt = Math.round(F.x / g), D = Math.round(F.y / v);
      dh.forEach((dt, ot) => dt.split("").forEach((rt, vt) => {
        rt === "#" && pt(tt + vt, D + ot, y.sun, 1, Ni);
      }));
    }
  }), { col: X, ids: j };
}
function fh(o, r) {
  const d = r.px, p = Math.max(6, Math.round(r.width / d)), g = Math.max(6, Math.round(r.height / d)), v = r.width / p, w = r.height / g, S = r.ambient ? Math.floor((r.clock || 0) / 100) * 100 : 0, I = (Q) => {
    const et = xp(Q, r);
    return ph(et, kp(et, { clock: S, ambient: r.ambient, seed: r.seed }), p, g, v, w, S, r.ambient);
  }, y = I(o), C = r.reveal == null ? 1 : xo(r.reveal);
  let O = y.col, V = y.ids;
  if (C < 1) {
    const Q = r.prev ? I(r.prev) : null, et = C * (p + 12);
    O = new Array(p * g), V = new Uint8Array(p * g);
    for (let at = 0; at < p * g; at++) {
      const X = at % p, j = at / p | 0;
      (r.reduce ? C : xo((et - X) / 12)) > vo(X, j) ? (O[at] = y.col[at], V[at] = y.ids[at]) : Q ? (O[at] = Q.col[at], V[at] = Q.ids[at]) : (O[at] = null, V[at] = 255);
    }
  }
  return ah(O, V, p, g, { oneBit: r.oneBit, ink: r.ink || "#26221e", paper: r.paper || "#fbf9f6", snowInk: !1 });
}
function uh(o, r, d) {
  const p = d.width, g = d.height, v = d.reveal == null ? 1 : xo(d.reveal), w = (V, Q) => {
    const et = xp(Q, d);
    hh(V, et, kp(et, d));
  };
  if (o.clearRect(0, 0, p, g), v >= 1) {
    w(o, r);
    return;
  }
  if (d.prev && w(o, d.prev), d.reduce) {
    o.save(), o.globalAlpha = v, w(o, r), o.restore();
    return;
  }
  const S = o.canvas, I = S.__wxOff || (S.__wxOff = document.createElement("canvas"));
  (I.width !== S.width || I.height !== S.height) && (I.width = S.width, I.height = S.height);
  const y = I.getContext("2d");
  y.setTransform(o.getTransform()), y.clearRect(0, 0, p, g), w(y, r);
  const C = v * (p + 64) - 64, O = y.createLinearGradient(C, 0, C + 64, 0);
  O.addColorStop(0, "rgba(0,0,0,1)"), O.addColorStop(1, "rgba(0,0,0,0)"), y.globalCompositeOperation = "destination-in", y.fillStyle = O, y.fillRect(0, 0, p, g), y.globalCompositeOperation = "source-over", o.save(), o.setTransform(1, 0, 0, 1, 0, 0), o.drawImage(I, 0, 0), o.restore();
}
function hh(o, r, d) {
  const { W: p, H: g, S: v, C: w, cw: S, yb: I, glowAt: y, soft: C, tw: O, sy: V } = r, Q = o.getTransform().a || 1, et = (z) => {
    o.shadowColor = z ? "rgba(28,18,8,.22)" : "transparent", o.shadowBlur = z ? 4 * Q : 0, o.shadowOffsetY = z ? 1.5 * Q : 0;
  }, at = (z, Ot) => {
    const F = Bi(z);
    return "rgba(" + F[0] + "," + F[1] + "," + F[2] + "," + Math.max(0, Math.min(1, Ot)).toFixed(3) + ")";
  }, X = (z, Ot) => {
    const F = o.createLinearGradient(0, 0, p, 0);
    F.addColorStop(0, z[0]);
    for (let tt = 0; tt < z.length - 1; tt++) {
      const D = (tt + Ot) * S, dt = (D - O / 2) / p, ot = (D + O / 2) / p;
      dt > 0 && dt < 1 && F.addColorStop(dt, z[tt]), ot > 0 && ot < 1 && F.addColorStop(ot, z[tt + 1]);
    }
    return F.addColorStop(1, z[z.length - 1]), F;
  }, j = Math.max(24, Math.ceil(p / 4)), lt = (z, Ot) => {
    o.beginPath();
    for (let F = 0; F <= j; F++) {
      const tt = p * F / j, D = z == null ? 0 : I(tt) + z;
      F ? o.lineTo(tt, D) : o.moveTo(tt, D);
    }
    for (let F = j; F >= 0; F--) {
      const tt = p * F / j;
      o.lineTo(tt, I(tt) + Ot);
    }
    o.closePath(), o.fill();
  };
  o.save(), o.fillStyle = X(v.filter((z) => !z.night).map((z) => z.sky), 0.75), o.fillRect(0, 0, p, g);
  const pt = o.createLinearGradient(0, 0, p, 0);
  for (let z = 0; z <= 64; z++) {
    const Ot = y(p * z / 64);
    pt.addColorStop(z / 64, at(Ot.c, Math.min(1, Ot.a)));
  }
  o.fillStyle = pt;
  for (let z = 0; z < 8; z++)
    o.globalAlpha = 1 - z / 8, lt(z * 2 * V, (z + 1) * 2 * V);
  o.fillStyle = X(v.filter((z) => z.night).map((z) => z.sky), 1.25);
  const gt = Math.max(0.5, C), nt = 6;
  o.globalAlpha = 1, lt(null, -gt);
  for (let z = 0; z < nt; z++)
    o.globalAlpha = 1 - (z + 0.5) / nt, lt(-gt + 2 * gt * z / nt, -gt + 2 * gt * (z + 1) / nt);
  o.globalAlpha = 1;
  const J = new Path2D(sh), Y = new Path2D(ih), R = new Path2D(rh), wt = new Path2D(lh);
  o.fillStyle = w.star, d.stars.forEach((z) => {
    o.globalAlpha = z.o, z.big ? (o.save(), o.translate(z.x, z.y), o.scale(z.size, z.size), o.fill(J), o.restore()) : (o.beginPath(), o.arc(z.x, z.y, 0.8, 0, Math.PI * 2), o.fill());
  }), o.globalAlpha = 1;
  const Dt = Ma(w.sun, "#ffffff", 0.55);
  d.suns.forEach((z) => {
    const Ot = o.createRadialGradient(z.x, z.y, 0, z.x, z.y, z.halo);
    Ot.addColorStop(0, at(Dt, 0.42)), Ot.addColorStop(0.7, at(Dt, 0)), o.fillStyle = Ot, o.beginPath(), o.arc(z.x, z.y, z.halo, 0, Math.PI * 2), o.fill();
    const F = o.createLinearGradient(0, z.y - z.rad, 0, z.y + z.rad);
    F.addColorStop(0.6, w.sun), F.addColorStop(1, w.sunEdge), o.fillStyle = F, et(!0), o.beginPath(), o.arc(z.x, z.y, z.rad, 0, Math.PI * 2), o.fill(), et(!1);
  });
  const it = Ma(w.moon, "#ffffff", 0.6);
  d.moons.forEach((z) => {
    o.save(), o.translate(z.x - z.d / 2, z.y - z.d / 2), o.scale(z.d / 46, z.d / 46);
    const Ot = o.createLinearGradient(0, 6, 0, 40);
    Ot.addColorStop(0, it), Ot.addColorStop(1, w.moon), o.fillStyle = Ot, et(!0), o.fill(Y), et(!1), o.restore();
  }), d.clouds.forEach((z) => {
    o.save(), o.globalAlpha = z.o, o.translate(z.x, z.y), o.scale(z.w / 46, z.h / 30.66), o.translate(-4, -9.67), o.fillStyle = z.fill, et(!0), o.fill(R), et(!1), o.restore();
  }), d.fogs.forEach((z) => {
    const Ot = o.createLinearGradient(z.x, 0, z.x + z.w, 0);
    Ot.addColorStop(0, at(z.c, 0)), Ot.addColorStop(0.25, at(z.c, z.a)), Ot.addColorStop(0.75, at(z.c, z.a)), Ot.addColorStop(1, at(z.c, 0)), o.fillStyle = Ot, o.fillRect(z.x, z.y, z.w, 6 * V);
  }), o.fillStyle = w.rain, d.drops.forEach((z) => {
    o.save(), o.globalAlpha = z.o, o.translate(z.x, z.y), o.rotate(12 * Math.PI / 180), o.fillRect(-1.5, 0, 3, 9), o.restore();
  }), o.fillStyle = w.snow, d.flakes.forEach((z) => {
    o.globalAlpha = z.o, o.beginPath(), o.arc(z.x, z.y, 2.2, 0, Math.PI * 2), o.fill();
  }), o.fillStyle = w.sun, d.bolts.forEach((z) => {
    o.save(), o.globalAlpha = z.o, o.translate(z.x, z.y), o.fill(wt), o.restore();
  }), o.restore();
}
const mh = (o) => o === "sunny" ? "clear" : o === "clear-night" ? "night" : o === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(o) ? "rain" : ["snowy", "snowy-rainy"].includes(o) ? "snow" : "cloudy", Bn = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, yi = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, dl = (o, r) => '<path class="' + r + '" d="' + o + '"/>', gh = (o, r) => ' style="animation-delay:-' + Math.round(o * 137 % r) + 'ms"', ya = (o, r, d, p) => {
  const g = d * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (p < 1 ? ' opacity="' + p + '"' : "") + gh(o, 2400) + ' d="M' + o + " " + (r - d) + "L" + (o + g) + " " + (r - g) + "L" + (o + d) + " " + r + "L" + (o + g) + " " + (r + g) + "L" + o + " " + (r + d) + "L" + (o - g) + " " + (r + g) + "L" + (o - d) + " " + r + "L" + (o - g) + " " + (r - g) + 'Z"/>';
}, pd = ([o, r, d], p) => '<path class="wbMoonPath" d="' + o + '" fill="url(#' + p + ')"/><defs><linearGradient id="' + p + '" x1="0" y1="' + r + '" x2="0" y2="' + d + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', bh = (o, r) => r ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + o + ')"/><defs><linearGradient id="' + o + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + o + ')"/><defs><linearGradient id="' + o + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', wh = (o) => (o ? ["29.35", "43.04", "56.74"].map((r, d) => '<g class="wbDrop" style="animation-delay:-' + d * 317 + 'ms"><rect class="wbAccent" x="' + r + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + r + ' 60.65)"/></g>') : [19, 26, 33].map((r, d) => '<g class="wbDrop" style="animation-delay:-' + d * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + r + ' 38)"/></g>')).join(""), vh = (o) => (o ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([r, d], p) => '<circle class="wbFlake" style="animation-delay:-' + p * 640 + 'ms" cx="' + r + '" cy="' + d + '" r="' + (o ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function yh(o, r, d, p) {
  const g = (v) => '<g filter="url(#' + p + '-sh)">' + v + "</g>";
  return o === "clear" ? r ? g(pd(d ? yi.l : yi.s, p)) + (d ? ya(70, 20, 5.83, 1) + ya(78.33, 41.67, 3.75, 0.8) + ya(60, 71.67, 3.33, 0.6) : ya(42, 12, 3.5, 1) + ya(47, 25, 2.25, 0.8) + ya(36, 43, 2, 0.6)) : g(bh(p, d)) : o === "partly" ? g(r ? pd(d ? yi.lp : yi.sp, p) : d ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + g(dl(d ? Bn.lp : Bn.sp, r ? "wbCloudLight" : "wbBright")) + (r ? d ? ya(73.33, 16.67, 4.17, 0.9) : ya(44, 10, 2.5, 0.9) : "") : o === "cloudy" ? g(dl(d ? Bn.lc : Bn.s, r ? "wbCloudLight" : "wbBright")) + (r ? d ? ya(15, 15, 3.75, 0.8) + ya(76.67, 13.33, 2.92, 0.6) : ya(9, 9, 2.25, 0.8) + ya(46, 8, 1.75, 0.6) : "") : g(dl(d ? Bn.lr : Bn.s, "wbCloudLight")) + (o === "rain" ? wh(d) : vh(d));
}
const xh = (o, r) => '<defs><filter id="' + o + '-sh" x="-25%" y="-25%" width="150%" height="160%"><feDropShadow dx="0" dy="' + (r ? 1.6 : 1) + '" stdDeviation="' + (r ? 1.8 : 1.1) + '" flood-color="#1c1208" flood-opacity=".22"/></filter></defs>';
function kh(o, r, d, p) {
  let g = mh(o);
  const v = g === "night" || !!d;
  g === "night" && (g = "clear");
  const w = r ? 90 : 54;
  return { k: g, night: v, svg: '<svg viewBox="0 0 ' + w + " " + w + '">' + xh(p, r) + yh(g, v, r, p) + "</svg>" };
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
], xi = (o, r) => (Mh[r % 8 * 8 + o % 8] + 0.5) / 64, Ha = (o) => [parseInt(o.slice(1, 3), 16), parseInt(o.slice(3, 5), 16), parseInt(o.slice(5, 7), 16)], qe = (o, r, d) => [Math.round(o[0] + (r[0] - o[0]) * d), Math.round(o[1] + (r[1] - o[1]) * d), Math.round(o[2] + (r[2] - o[2]) * d)], vr = (o) => o < 0 ? 0 : o > 1 ? 1 : o, fd = (o, r) => {
  let d = o * 374761393 + r * 668265263 ^ 1540483477;
  return d = Math.imul(d ^ d >>> 13, 1274126177), ((d ^ d >>> 16) >>> 0) / 4294967296;
}, un = [255, 255, 255], $e = Ha("#26221e"), ud = Ha("#0288d1"), Sh = Ha("#01579b"), pl = Ha(Sa.cloudDay), fl = Ha(Sa.cloudNight), ki = Ha(Sa.dusk), ul = Ha(Sa.sunEdge), Ah = Ha(Sa.sun), Ch = 10, hd = 0.3, ko = 56, Mp = 21;
function _h(o) {
  const r = Array.from({ length: Mp }, () => new Array(ko).fill(void 0)), d = (w, S, I) => {
    r[S][w] = I;
  }, p = qe(ki, $e, 0.35), g = qe($e, un, 0.22);
  for (let w = 0; w <= 6; w++) {
    const S = w < 2 ? ko - 2 : ko - 1;
    for (let I = 6 - w; I <= S; I++) d(I, w, w < 2 ? p : w === 6 ? g : $e);
  }
  const v = [ki, ul, fl, Ha(Sa.skyRainDay), qe(ki, $e, 0.2), qe(o, $e, 0.35)];
  [2, 3, 2, 3, 3].forEach((w, S) => {
    const I = 9 + S * 6;
    for (let y = 0; y < w; y++) {
      const C = v[(S * 2 + y * 3) % v.length];
      for (let O = I; O < I + 5; O++)
        d(O, 7 + y * 2, qe(C, $e, 0.12)), d(O, 8 + y * 2, y === w - 1 ? qe(C, un, 0.3) : C);
      d(I + 5, 7 + y * 2, $e), d(I + 5, 8 + y * 2, $e);
    }
  });
  for (let w = 7; w <= 12; w++) d(5, w, $e);
  d(5, 13, ul);
  for (let w = 7; w <= 14; w++) for (let S = 42; S <= 51; S++) d(S, w, S === 51 ? fl : pl);
  for (let w = 43; w <= 50; w += 2)
    d(w, 12, $e), d(w, 9, qe($e, pl, 0.4));
  for (let w = 40; w <= 53; w++) d(w, 14, w === 40 || w === 53 ? fl : pl);
  for (let w = 15; w <= 18; w++) for (let S = 46; S <= 49; S++) d(S, w, w === 18 ? $e : w === 16 ? ul : ki);
  for (let w = 15; w <= 19; w++) d(44, w, $e);
  return d(44, 20, Ah), r;
}
function Th(o, r, d, p) {
  const g = Math.max(1, Math.round(o)), v = Math.max(1, Math.round(r)), w = new Uint8ClampedArray(g * v * 4), S = Ha(p.skyClearDay), I = Ha(p.skyFogDay), y = _h(S), C = Math.round(v * 0.55), O = vr(1 - Math.log(d / hd) / Math.log(Ch / hd)), V = qe(S, I, O), Q = (j) => vr((j - 0.1) / 0.9), et = vr((1 - Math.exp(-2 / d) - 0.2) / 0.8), at = Math.round(g / 2 - ko / 2), X = C + 3;
  for (let j = 0; j < v; j++) {
    const lt = X - 1 - j, pt = j - X;
    for (let gt = 0; gt < g; gt++) {
      const nt = gt - at;
      let J, Y;
      const R = lt >= 0 && lt < Mp && nt >= 0 && nt < ko ? y[lt][nt] : void 0;
      if (R)
        J = R, Y = et;
      else if (lt >= 0 && lt <= 1 && nt >= 4 - lt && nt <= 5 - lt)
        J = qe(un, ud, 0.15), Y = et;
      else if (j < C) {
        const it = vr(((j + 0.5) / C - 0.15) / 0.85) * 3, z = Math.min(3, Math.floor(it + xi(gt + 2, j + 5)));
        J = qe(V, un, z * 0.1), Y = O * 0.95;
      } else {
        const it = (j - C + 0.5) / (v - C), z = Math.min(1.5, 6e-3 / (it * it)), Ot = vr(it * 1.4) * 3, F = Math.min(3, Math.floor(Ot + xi(gt + 1, j + 6)));
        J = qe(ud, Sh, F / 3);
        const tt = 1 + Math.round(it * 7), D = Math.floor(gt / (tt * 3)), dt = 0.06 + 0.16 * it, ot = gt % (tt * 3) < tt;
        ot && fd(D, j) < dt ? J = qe(J, un, 0.18 + 0.1 * (1 - it)) : ot && it > 0.5 && fd(D, j - 1) < dt && (J = qe(J, $e, 0.12)), Y = Q(1 - Math.exp(-z / d)), pt === 0 && nt >= 3 && nt <= 8 ? (J = qe(J, un, nt < 6 ? 0.8 : 0.45), Y = et) : pt >= 0 && pt <= 2 && nt >= ko && nt < ko + 40 ? ((1 - (nt - ko) / 40) * (pt === 1 ? 0.9 : 0.5) > xi(gt, j + 3) && (J = qe(J, un, 0.5)), Y = et) : pt === 0 && nt >= 6 && nt < ko && (J = qe(J, $e, nt % 2 === 0 ? 0.35 : 0.2), Y = et);
      }
      const wt = Y > xi(gt, j) ? I : J, Dt = (j * g + gt) * 4;
      w[Dt] = wt[0], w[Dt + 1] = wt[1], w[Dt + 2] = wt[2], w[Dt + 3] = 255;
    }
  }
  return { data: w, w: g, h: v };
}
const Lh = {
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
}, Dh = 1.6;
function Eh(o, r) {
  const d = o ? Lh[String(o).toUpperCase()] : void 0;
  if (!d || !(r > 0)) return;
  const p = (v) => Math.abs(Math.log(v[2] / r)), g = d.reduce((v, w) => p(w) < p(v) ? w : v);
  return p(g) <= Math.log(Dh) ? { from: g[0], to: g[1], km: g[2] } : void 0;
}
const Bh = (o, r) => r === "mi" ? o * 1.609344 : r === "m" ? o / 1e3 : r === "ft" ? o * 3048e-7 : r === "yd" ? o * 9144e-7 : o, Rh = (o) => o < 1 ? "very_poor" : o < 4 ? "poor" : o < 10 ? "moderate" : o < 20 ? "good" : o < 40 ? "very_good" : "excellent", Me = {
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
}, Se = { standard: "cubic-bezier(.2,0,0,1)", land: "cubic-bezier(.34,1.46,.64,1)", spring: "cubic-bezier(.2,1.2,.4,1)", soft: "cubic-bezier(.4,0,.2,1)", exit: "cubic-bezier(.4,0,1,1)" }, We = () => {
  var o;
  return !!((o = window.matchMedia) != null && o.call(window, "(prefers-reduced-motion: reduce)").matches);
};
function Ph() {
  const { pivot: o, slider: r, iconbtn: d, warp: p, outline: g } = Me;
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
  ].map(([v, w]) => v + ":" + w).join(";");
}
const hl = ":is(button.primary,button.pill,.hcBtn,.wbRangeBtn,.activityRow.tap,.hcRow,a.hcRow)", Hh = "#homeView .tfAreaPanel", Oh = 300, Ri = (o) => Math.min(1, Oh / Math.max(1, o)), ml = (o, r) => 1 + (r / 100 - 1) * Ri(o.offsetWidth);
function Nh(o, r) {
  r.style.cssText += ";" + Ph();
  let d = null;
  const p = (C) => {
    C.classList.remove("mvMoving", "mvLit"), C.style.setProperty("--rx", "0deg"), C.style.setProperty("--ry", "0deg"), C.style.setProperty("--sc", 1), C._down = !1;
  };
  o.addEventListener("pointermove", (C) => {
    var j, lt;
    const O = C.pointerType === "touch" || We() ? null : (lt = (j = C.target).closest) == null ? void 0 : lt.call(j, hl);
    if (d && d !== O && p(d), d = O, !O || O.disabled) return;
    const V = Me.pivot, Q = O.getBoundingClientRect(), et = (C.clientX - Q.left) / Q.width, at = (C.clientY - Q.top) / Q.height, X = 1;
    O.classList.add("mvPv", "mvMoving", "mvLit"), O.style.setProperty("--pv-persp", V.persp / Ri(Math.max(O.offsetWidth, O.offsetHeight)) + "px"), O.style.setProperty("--ry", (X * (et - 0.5) * 2 * V.tilt * Ri(O.offsetWidth)).toFixed(3) + "deg"), O.style.setProperty("--rx", (X * -(at - 0.5) * 2 * V.tilt * Ri(O.offsetHeight)).toFixed(3) + "deg"), O.style.setProperty("--mx", (et * 100).toFixed(1) + "%"), O.style.setProperty("--my", (at * 100).toFixed(1) + "%"), O._down || O.style.setProperty("--sc", ml(O, V.lift));
  }, { passive: !0 }), o.addEventListener("pointerout", (C) => {
    d && !d.contains(C.relatedTarget) && (p(d), d = null);
  }), o.addEventListener("pointerdown", (C) => {
    var V, Q;
    const O = We() ? null : (Q = (V = C.target).closest) == null ? void 0 : Q.call(V, hl);
    O && (O._down = !0, O.classList.add("mvPv"), O.classList.remove("mvMoving"), O.style.setProperty("--sc", ml(O, Me.pivot.press)));
  }), o.addEventListener("pointerup", (C) => {
    var V, Q;
    const O = (Q = (V = C.target).closest) == null ? void 0 : Q.call(V, hl);
    O && (O._down = !1, O.style.setProperty("--sc", C.pointerType === "touch" ? 1 : ml(O, Me.pivot.lift)));
  });
  let g = null;
  o.addEventListener("pointerover", (C) => {
    var O, V, Q;
    C.pointerType !== "touch" && ((Q = (V = (O = C.target).closest) == null ? void 0 : V.call(O, ".tfBar")) == null || Q.classList.add("mvHover"));
  }), o.addEventListener("pointerout", (C) => {
    var V, Q;
    const O = (Q = (V = C.target).closest) == null ? void 0 : Q.call(V, ".tfBar");
    O && !O.contains(C.relatedTarget) && O !== g && O.classList.remove("mvHover");
  }), o.addEventListener("pointerdown", (C) => {
    var V, Q;
    const O = (Q = (V = C.target).closest) == null ? void 0 : Q.call(V, ".tfBar");
    O && (g = O, O.classList.add("mvHold"));
  });
  const v = (C) => {
    if (!g) return;
    g.classList.remove("mvHold");
    const O = g.getBoundingClientRect();
    (C.pointerType === "touch" || C.clientX < O.left || C.clientX > O.right || C.clientY < O.top || C.clientY > O.bottom) && g.classList.remove("mvHover"), g = null;
  };
  window.addEventListener("pointerup", v, !0), window.addEventListener("pointercancel", v, !0), o.addEventListener("focusin", (C) => {
    var O, V;
    (V = (O = C.target).matches) != null && V.call(O, ".tfBar:focus-visible") && C.target.classList.add("mvHover");
  }), o.addEventListener("focusout", (C) => {
    var O;
    (O = C.target.classList) == null || O.remove("mvHover", "mvHold");
  }), o.addEventListener("keydown", (C) => {
    var V, Q;
    const O = (Q = (V = C.target).closest) == null ? void 0 : Q.call(V, ".tfBar");
    !O || !["ArrowRight", "ArrowUp", "ArrowLeft", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(C.key) || (O.classList.add("mvHold"), clearTimeout(O._k), O._k = setTimeout(() => O.classList.remove("mvHold"), 350));
  }), o.addEventListener("click", (C) => {
    var V, Q;
    const O = (Q = (V = C.target).closest) == null ? void 0 : Q.call(V, "button.tfIcon[data-act]");
    O && Ih(O);
  });
  let w = null;
  const S = (C, O, V) => {
    C.querySelector(":scope>.mvEdge") || C.insertAdjacentHTML("afterbegin", '<span class="mvEdgeFill" aria-hidden="true"></span><span class="mvEdge" aria-hidden="true"><i></i></span>');
    const Q = C.getBoundingClientRect(), et = Q.width / 2, at = Q.height / 2, X = O.clientX - Q.left - et, j = O.clientY - Q.top - at, lt = X ? et / Math.abs(X) : 1 / 0, pt = j ? at / Math.abs(j) : 1 / 0, gt = Math.min(Math.max(1 / Math.min(lt, pt), 0), 1);
    let nt = Math.atan2(j, X) * 180 / Math.PI + 90;
    nt < 0 && (nt += 360);
    const J = V ? 100 : gt * 100;
    C.style.setProperty("--edge-proximity", J.toFixed(3)), C.style.setProperty("--cursor-angle", nt.toFixed(3) + "deg"), C.classList.toggle("mvLitEdge", V || J >= Me.outline.lightAt);
  }, I = (C) => {
    C.classList.remove("mvLitEdge"), C.style.setProperty("--edge-proximity", "0"), C._down = !1;
  }, y = (C) => {
    var V;
    const O = (V = C.closest) == null ? void 0 : V.call(C, Hh);
    return O && !r.classList.contains("tfEditing") ? O : null;
  };
  o.addEventListener("pointermove", (C) => {
    if (C.pointerType === "touch") return;
    const O = y(C.target);
    w && w !== O && I(w), w = O, O && !O._down && S(O, C, !1);
  }, { passive: !0 }), o.addEventListener("pointerout", (C) => {
    w && !w.contains(C.relatedTarget) && (I(w), w = null);
  }), o.addEventListener("pointerdown", (C) => {
    const O = y(C.target);
    O && Me.outline.press && (O._down = !0, S(O, C, !0));
  }), o.addEventListener("pointerup", (C) => {
    const O = y(C.target);
    O && (O._down = !1, C.pointerType === "touch" ? I(O) : S(O, C, !1));
  }), new MutationObserver((C) => {
    var O;
    for (const V of C) {
      const Q = V.target;
      if (V.type === "attributes") {
        (O = Q.classList) != null && O.contains("tfMoreBackdrop") && !Q.hidden && V.oldValue !== null && md(Q);
        continue;
      }
      V.addedNodes.forEach((et) => {
        et.nodeType === 1 && et.classList.contains("tfMoreBackdrop") && !et.hidden && md(et);
      });
    }
  }).observe(r, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["hidden"], attributeOldValue: !0 });
}
const Sp = (o) => o.closest("[data-k],.tfMore,.tfMorePair") || o.getRootNode();
function Ap(o, r) {
  const d = [];
  for (let p = o; p && p !== r && p.parentNode; p = p.parentNode) d.unshift([...p.parentNode.children].indexOf(p));
  return d;
}
const Cp = (o, r) => r.reduce((d, p) => d == null ? void 0 : d.children[p], o);
function Ih(o) {
  var Q;
  if (We() || o._warp) return;
  const r = Me.warp, d = r.amount / 100, p = o.firstElementChild;
  if (!p) return;
  const g = { squash: { scale: 1 + 0.35 * d + " " + (1 - 0.55 * d) }, pinch: { scale: String(1 - 0.5 * d) }, twist: { rotate: 140 * d + "deg", scale: String(1 - 0.35 * d) }, flip: { rotate: "y 90deg" } }[r.style], v = "blur(" + 2 * d + "px)", w = o.getRootNode(), S = Sp(o), I = (Q = S.dataset) == null ? void 0 : Q.k, y = Ap(o, S), C = o.getAttribute("aria-pressed") + "|" + o.dataset.act;
  o._warp = 1;
  const O = p.animate([{ scale: "1", rotate: "none", filter: "blur(0px)" }, { ...g, filter: v }], { duration: r.win, easing: Se.exit, fill: "forwards" }), V = performance.now();
  O.finished.then(() => {
    const et = () => {
      var gt, nt;
      const at = I ? S.isConnected ? S : (gt = w.querySelector) == null ? void 0 : gt.call(w, '[data-k="' + CSS.escape(I) + '"]') : S, X = at && Cp(at, y);
      if (X === o && o.getAttribute("aria-pressed") + "|" + o.dataset.act === C && performance.now() - V < 420) {
        requestAnimationFrame(et);
        return;
      }
      (((nt = X == null ? void 0 : X.matches) != null && nt.call(X, "button.tfIcon") ? X : o).firstElementChild || p).animate([{ ...g, filter: v }, { scale: "1", rotate: "none", filter: "blur(0px)" }], { duration: r.wout, easing: Se[r.ease] }), O.cancel(), o._warp = 0;
    };
    et();
  });
}
const _p = (o) => {
  let r = "M" + o[0][0].toFixed(1) + " " + o[0][1].toFixed(1);
  for (let d = 0; d < o.length - 1; d++) {
    const p = o[d - 1] || o[d], g = o[d], v = o[d + 1], w = o[d + 2] || v, S = [g[0] + (v[0] - p[0]) / 6, g[1] + (v[1] - p[1]) / 6], I = [v[0] - (w[0] - g[0]) / 6, v[1] - (w[1] - g[1]) / 6];
    r += "C" + S.map((y) => y.toFixed(1)).join(" ") + " " + I.map((y) => y.toFixed(1)).join(" ") + " " + v.map((y) => y.toFixed(1)).join(" ");
  }
  return r;
}, Tp = (o, r, d, p = "mvGrid") => [0, 1, 2].map((g) => {
  const v = (r + (d - r) * g / 2).toFixed(1);
  return '<line class="' + p + '" x1="0" x2="' + o + '" y1="' + v + '" y2="' + v + '"/>';
}).join("");
function Lp(o, r = o.querySelector(".mvLine"), d = o.querySelectorAll(".mvArea,.mvDot")) {
  if (We() || !(r != null && r.getTotalLength)) return;
  const p = Me.graphs, g = r.getTotalLength();
  r.animate([{ strokeDasharray: g, strokeDashoffset: g }, { strokeDasharray: g, strokeDashoffset: 0 }], { duration: p.draw, easing: Se.standard }), [...d].forEach((v, w) => v.animate([{ opacity: 0 }, { opacity: 1 }], { duration: p.draw * 0.6, delay: p.draw * 0.3 + w * 12, easing: Se.standard, fill: "backwards" }));
}
function Pi(o, r, d, p, g) {
  if (o.getAnimations().forEach((C) => C.cancel()), o.style.left = p + "px", o.style.width = g + "px", We() || r === p && d === g) return;
  const v = Me.tabs, w = v.stretch / 100, S = (C, O) => ({ left: C + "px", width: O + "px" }), y = p > r ? S(r + (p - r) * (0.15 * (1 - w)), p + g - (r + (p - r) * (0.15 * (1 - w)))) : S(p, r + d - p - (r - p) * (0.15 * (1 - w)));
  o.animate([S(r, d), { offset: 0.5, ...y }, S(p, g)], { duration: v.dur, easing: Se.standard });
}
function Fh(o) {
  const r = ":is(.themeChoice,.wbSegments,.tfHeightTabs,.hcSeg,.tfSeg)", d = (g) => g.querySelector(':scope>[aria-pressed="true"],:scope>[aria-checked="true"],:scope>.active'), p = (g, v) => v ? [...g.children].indexOf(v) : -1;
  o.addEventListener("click", (g) => {
    var lt, pt, gt;
    const v = (pt = (lt = g.target).closest) == null ? void 0 : pt.call(lt, r + ">button"), w = v == null ? void 0 : v.parentElement;
    if (!w || We() || v.disabled) return;
    const S = d(w);
    if (!S || S === v) return;
    const I = p(w, S), y = w.getBoundingClientRect(), C = S.getBoundingClientRect(), O = getComputedStyle(S).borderRadius, V = w.getRootNode(), Q = Sp(w), et = (gt = Q.dataset) == null ? void 0 : gt.k, at = Ap(w, Q), X = performance.now(), j = () => {
      var z, Ot, F;
      const nt = et && !Q.isConnected ? (z = V.querySelector) == null ? void 0 : z.call(V, '[data-k="' + CSS.escape(et) + '"]') : Q, J = nt && Cp(nt, at), Y = (Ot = J == null ? void 0 : J.matches) != null && Ot.call(J, r) ? d(J) : null;
      if (!Y || p(J, Y) === I) {
        performance.now() - X < 700 && requestAnimationFrame(j);
        return;
      }
      const R = J.getBoundingClientRect(), wt = Y.getBoundingClientRect(), Dt = getComputedStyle(Y);
      (F = J.querySelector(":scope>.mvSegInd")) == null || F.remove();
      const it = document.createElement("span");
      it.className = "mvSegInd", it.style.cssText = "top:" + (wt.top - R.top - J.clientTop) + "px;height:" + wt.height + "px;border-radius:" + O + ";background:" + Dt.backgroundColor + ";box-shadow:" + Dt.boxShadow, getComputedStyle(J).position === "static" && (J.style.position = "relative"), J.prepend(it), J.classList.add("mvSegMoving"), Pi(it, C.left - y.left - J.clientLeft, C.width, wt.left - R.left - J.clientLeft, wt.width), clearTimeout(J._seg), J._seg = setTimeout(() => {
        it.remove(), J.classList.remove("mvSegMoving");
      }, Me.tabs.dur + 20);
    };
    requestAnimationFrame(j);
  }, !0);
}
const Dp = (o) => getComputedStyle(o).placeItems.startsWith("end");
function md(o) {
  const r = o.firstElementChild;
  if (We() || !r || r.classList.contains("still")) return;
  const d = Me.dialog;
  o.animate([{ opacity: 0, backdropFilter: "blur(0px)" }, { opacity: 1, backdropFilter: "blur(" + d.blur + "px)" }], { duration: d.open, easing: Se.standard }), r.style.animation = "none", r.animate(Dp(o) ? [{ transform: "translateY(100%)" }, { transform: "none" }] : [{ opacity: 0, transform: "scale(" + d.from / 100 + ")" }, { opacity: 1, transform: "none" }], { duration: d.open, easing: Se[d.ease] }), [...(r.classList.contains("tfMorePair") && r.querySelector(".tfMore") || r).children].forEach((g, v) => g.animate([{ opacity: 0 }, { opacity: 1 }], { duration: d.open * 0.6, delay: d.open * 0.35 + v * 40, easing: Se.standard, fill: "backwards" }));
}
function qh(o, r) {
  const d = o == null ? void 0 : o.firstElementChild;
  if (We() || !d || o.hidden || o._closing) {
    r();
    return;
  }
  const p = Me.dialog;
  o._closing = !0, o.style.pointerEvents = "none", o.animate([{ opacity: 1, backdropFilter: "blur(" + p.blur + "px)" }, { opacity: 0, backdropFilter: "blur(0px)" }], { duration: p.close, easing: Se.exit, fill: "forwards" });
  const g = d.animate(Dp(o) ? [{ transform: "none" }, { transform: "translateY(100%)" }] : [{ opacity: 1, transform: "none" }, { opacity: 0, transform: "scale(" + p.from / 100 + ")" }], { duration: p.close, easing: Se.exit, fill: "forwards" });
  let v = !1;
  const w = () => {
    v || (v = !0, o._closing = !1, o.style.pointerEvents = "", o.getAnimations().forEach((S) => S.cancel()), d.getAnimations().forEach((S) => S.cancel()), r());
  };
  g.finished.then(w, w), setTimeout(w, p.close + 80);
}
const Wh = '<span class="mvTick" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M20 6L9 17L4 12" pathLength="1"/></svg></span>';
function jh(o, r) {
  o.replaceChildren(), o.insertAdjacentHTML("afterbegin", Wh), o.appendChild(Object.assign(document.createElement("span"), { className: "mvToastText", textContent: r }));
}
function Vh(o) {
  if (We()) return;
  const r = Me.confirm;
  o.animate([{ opacity: 0, translate: "0 18px" }, { opacity: 1, translate: "0 0" }], { duration: r.dur, easing: Se.spring });
  const d = o.querySelector(".mvTick path");
  d && r.draw && d.animate([{ strokeDasharray: "1", strokeDashoffset: "1" }, { strokeDasharray: "1", strokeDashoffset: "0" }], { duration: 420, delay: r.dur * 0.5, easing: Se.standard, fill: "backwards" });
}
const gd = (o, r, d, p, g = 1) => (o + r * d * g) * Math.pow(p, g);
function bd(o) {
  const r = Me.drag.squash / 100;
  !o || We() || !r || o.animate([{ transform: "scale(" + (1 + r * 0.4) + "," + (1 - r) + ")" }, { transform: "scale(" + (1 - r * 0.1) + "," + (1 + r * 0.24) + ")" }, { transform: "none" }], { duration: 340, easing: "ease-out" });
}
function wd(o) {
  if (!o || We()) return;
  const r = Me.expand;
  [...o.children].slice(1).forEach((d, p) => d.animate([{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "none" }], { duration: 260, delay: r.delay + p * r.stagger, easing: "cubic-bezier(.2,0,0,1)", fill: "backwards" }));
}
const Le = 6e4, te = 36e5, ra = 864e5, Sr = 1440, zh = 6, Gh = 10 * Le, vd = 3, Uh = 3, Mi = { day: [6, 22], waking: [7, 23], all: [0, 24] }, Yh = [[-5, [91, 141, 239]], [5, [79, 195, 230]], [12, [95, 211, 160]], [18, [255, 211, 77]], [24, [255, 159, 67]], [30, [255, 91, 79]]], Zh = "M6.5 18.5h11a4 4 0 0 0 .4-7.98 5.5 5.5 0 0 0-10.6-1.1A4.5 4.5 0 0 0 6.5 18.5Z", yd = (o, r, d, p) => '<circle cx="' + o + '" cy="' + r + '" r="' + d + '"/><path d="' + [0, 45, 90, 135, 180, 225, 270, 315].map((g) => {
  const v = Math.cos(g * Math.PI / 180), w = Math.sin(g * Math.PI / 180), S = d + 2, I = d + 2 + p;
  return "M" + (o + v * S).toFixed(2) + " " + (r + w * S).toFixed(2) + "L" + (o + v * I).toFixed(2) + " " + (r + w * I).toFixed(2);
}).join("") + '"/>', mo = (o) => '<path d="' + Zh + '"' + (o ? ' transform="' + o + '"' : "") + "/>", go = (o) => '<path d="' + o + '"/>', xd = '<path d="M19.5 14.5A7.5 7.5 0 1 1 9.5 4.5a6 6 0 0 0 10 10Z"/>';
function Kh(o, r) {
  const d = "translate(0,-3)";
  switch (o) {
    case "sunny":
      return r ? xd : yd(12, 12, 4, 2.5);
    case "clear-night":
      return xd;
    case "partlycloudy":
      return (r ? '<path d="M11.5 9.5A4.5 4.5 0 1 1 6 4a3.6 3.6 0 0 0 5.5 5.5Z"/>' : yd(7.5, 7.5, 2.6, 1.4)) + mo("translate(3.6,3) scale(.85)");
    case "cloudy":
      return mo();
    case "fog":
      return go("M4 8.5h16M3 12.5h18M5 16.5h14");
    case "rainy":
      return mo(d) + go("M8.5 18.5 7.5 21M12.5 18.5l-1 2.5M16.5 18.5l-1 2.5");
    case "pouring":
      return mo(d) + go("M7.5 18.5 6 22M11 18.5 9.5 22M14.5 18.5 13 22M18 18.5 16.5 22");
    case "snowy":
      return mo(d) + go("M8 20h.01M12 21.5h.01M16 20h.01");
    case "snowy-rainy":
      return mo(d) + go("M8.5 18.5 7.5 21M12 21h.01M16.5 18.5l-1 2.5");
    case "hail":
      return mo(d) + '<circle cx="8" cy="20.5" r="1"/><circle cx="12" cy="21.5" r="1"/><circle cx="16" cy="20.5" r="1"/>';
    case "lightning":
      return mo(d) + go("M12.5 16 10.5 19.5h3l-2 3");
    case "lightning-rainy":
      return mo(d) + go("M12.5 16 10.5 19.5h3l-2 3M7.5 18.5l-1 2.5M17.5 18.5l-1 2.5");
    case "windy":
    case "windy-variant":
      return go("M3 8.5h10.5a2.5 2.5 0 1 0-2.5-2.5M3 12h15.5a2.5 2.5 0 1 1-2.5 2.5M3 15.5h8");
    default:
      return '<circle cx="12" cy="12" r="8"/>' + go("M12 8v5M12 16h.01");
  }
}
const gl = (o, r) => '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + Kh(o, r) + "</svg>", Xh = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), $h = 30 * Le, Jh = 7, Qh = 3, kd = 1, tm = Le, em = 15 * Le, am = 5, ee = {
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
}, El = 7, wo = 256, om = 3, Md = 700, nm = 1800, Ep = 5 * Le;
let Si = null, Sd = 0, yr = null;
function rm() {
  return Si && Date.now() - Sd < Ep ? Promise.resolve(Si) : yr || (yr = fetch("https://api.rainviewer.com/public/weather-maps.json").then((o) => o.ok ? o.json() : Promise.reject(new Error(String(o.status)))).then((o) => {
    var p, g;
    const r = (((p = o.radar) == null ? void 0 : p.past) || []).slice(-6), d = (((g = o.radar) == null ? void 0 : g.nowcast) || []).slice(0, om);
    return Si = { host: o.host, frames: [...r.map((v) => ({ ...v, past: !0 })), ...d] }, Sd = Date.now(), Si;
  }).finally(() => {
    yr = null;
  }), yr);
}
function im(o, r, d, p) {
  const g = El, v = 2 ** g, w = o * Math.PI / 180, S = (r + 180) / 360 * v * wo, I = (1 - Math.log(Math.tan(w) + 1 / Math.cos(w)) / Math.PI) / 2 * v * wo, y = S - d / 2, C = I - p / 2, O = [];
  for (let V = Math.floor(y / wo); V <= Math.floor((y + d - 1) / wo); V++) for (let Q = Math.floor(C / wo); Q <= Math.floor((C + p - 1) / wo); Q++)
    Q < 0 || Q >= v || O.push({ x: (V % v + v) % v, y: Q, left: V * wo - y, top: Q * wo - C });
  return O;
}
const sm = {
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
}, lm = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], cm = Object.keys(ht.phases), dm = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)", extreme: "var(--purple-color, #926bc7)" }, Ad = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, Bp = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], Ai = 100, Cd = "µg/m³", pm = "weather_alerts.air_quality_pollen", Ii = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], fm = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, um = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], hm = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, mm = { daily: 1, hourly: 2 }, bt = (o) => String(o ?? "").replace(/[&<>"']/g, (r) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[r]), Fe = (o, r) => o.replace(/\{(\w+)\}/g, (d, p) => r[p] ?? ""), yo = (o) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + o + '"/></svg>', _d = /* @__PURE__ */ new Map();
function Rp(o) {
  let r = _d.get(o);
  if (r === void 0) {
    const d = "http://www.w3.org/2000/svg", p = document.createElementNS(d, "svg"), g = document.createElementNS(d, "path");
    p.setAttribute("viewBox", "0 0 24 24"), p.style.cssText = "position:absolute;width:24px;height:24px;visibility:hidden;pointer-events:none", g.setAttribute("d", o), p.append(g), document.body.append(p);
    const v = g.getBBox();
    p.remove();
    const w = Math.max(v.width, v.height), S = w ? 26 * 24 / w : 0, I = S / 24;
    r = w ? "width:" + S.toFixed(2) + "px;height:" + S.toFixed(2) + "px;translate:" + ((12 - v.x - v.width / 2) * I).toFixed(2) + "px " + ((12 - v.y - v.height / 2) * I).toFixed(2) + "px" : "", _d.set(o, r);
  }
  return r ? '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true" style="' + r + '"><path d="' + o + '"/></svg>' : yo(o);
}
const gm = () => {
  var o;
  return !!((o = window.matchMedia) != null && o.call(window, "(prefers-reduced-motion: reduce)").matches);
}, ie = (o) => o != null && o !== "" && Number.isFinite(Number(o)), Td = /* @__PURE__ */ new Map(), Ld = /* @__PURE__ */ new Map(), bl = /* @__PURE__ */ new WeakMap(), bm = (o) => {
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
function Gt(o, r, d) {
  const p = Number(o);
  if (Number.isNaN(p)) return String(o);
  const g = (r == null ? void 0 : r.number_format) === "none", v = { maximumFractionDigits: 2, ...d, ...g ? { useGrouping: !1 } : {} }, w = g ? "en-US" : bm(r), S = JSON.stringify([w, v]);
  let I = Td.get(S);
  if (!I) {
    try {
      I = new Intl.NumberFormat(w, v);
    } catch {
      I = new Intl.NumberFormat(void 0, v);
    }
    Td.set(S, I);
  }
  return I.format(p);
}
const Rl = (o) => {
  var r;
  return ((r = o == null ? void 0 : o.locale) == null ? void 0 : r.language) || (o == null ? void 0 : o.language) || void 0;
};
function wm(o) {
  if (!o) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (bl.has(o)) return bl.get(o);
  const r = o.time_format, d = r === "language" || r === "system" || !r ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(r === "language" ? o.language : void 0).includes("10") : r === "12";
  return bl.set(o, d), d;
}
const Pp = (o) => {
  var r, d;
  return ((r = o == null ? void 0 : o.locale) == null ? void 0 : r.time_zone) === "server" && ((d = o == null ? void 0 : o.config) != null && d.time_zone) ? o.config.time_zone : void 0;
};
function Hp(o, r) {
  const d = JSON.stringify([o, r]);
  let p = Ld.get(d);
  if (!p) {
    try {
      p = new Intl.DateTimeFormat(o, r);
    } catch {
      p = new Intl.DateTimeFormat(void 0, { ...r, timeZone: void 0 });
    }
    Ld.set(d, p);
  }
  return p;
}
const Oe = (o, r) => Hp(Rl(r), { hour: "numeric", minute: "2-digit", hourCycle: wm(r == null ? void 0 : r.locale) ? "h12" : "h23", timeZone: Pp(r) }).format(o), Dd = (o, r) => Hp(Rl(r), { weekday: "short", timeZone: Pp(r) }).format(o), vm = (o, r) => o.toLocaleDateString(Rl(r), { weekday: "narrow" }), ce = (o, r) => ie(r) ? Gt(Math.round(Number(r)), o.locale) + "°" : "–", jo = (o) => {
  const r = new Date(o);
  return r.setHours(0, 0, 0, 0), r;
}, Rn = (o, r) => o.getFullYear() === r.getFullYear() && o.getMonth() === r.getMonth() && o.getDate() === r.getDate(), Je = Math.PI / 180, ym = 2440588, xm = 2451545, Fi = Je * 23.4397, km = 149598e3, Mm = -0.833 * Je, Sm = 0.133 * Je, Ed = 5 * Le, Op = (o) => o.getTime() / ra - 0.5 + ym - xm, Np = (o, r) => Math.atan2(Math.sin(o) * Math.cos(Fi) - Math.tan(r) * Math.sin(Fi), Math.cos(o)), Ip = (o, r) => Math.asin(Math.sin(r) * Math.cos(Fi) + Math.cos(r) * Math.sin(Fi) * Math.sin(o)), Am = (o, r) => Je * (280.16 + 360.9856235 * o) - r, Cm = (o, r, d) => Math.asin(Math.sin(r) * Math.sin(d) + Math.cos(r) * Math.cos(d) * Math.cos(o));
function Fp(o) {
  const r = Je * (357.5291 + 0.98560028 * o), d = Je * (1.9148 * Math.sin(r) + 0.02 * Math.sin(2 * r) + 3e-4 * Math.sin(3 * r)), p = r + d + Je * 102.9372 + Math.PI;
  return { ra: Np(p, 0), dec: Ip(p, 0), dist: km };
}
function qp(o) {
  const r = Je * (218.316 + 13.176396 * o), d = Je * (134.963 + 13.064993 * o), p = Je * (93.272 + 13.22935 * o), g = r + Je * 6.289 * Math.sin(d), v = Je * 5.128 * Math.sin(p);
  return { ra: Np(g, v), dec: Ip(g, v), dist: 385001 - 20905 * Math.cos(d) };
}
const Wp = (o, r, d, p) => {
  const g = Op(r), v = o(g);
  return Cm(Am(g, Je * -p) - v.ra, Je * d, v.dec);
}, qi = (o, r, d) => Wp(Fp, o, r, d), _m = (o, r, d) => Wp(qp, o, r, d);
function jp(o, r, d, p) {
  const g = {};
  let v = d.getTime(), w = o(d) - r;
  for (let S = v + Ed; S <= p.getTime(); S += Ed) {
    const I = o(new Date(S)) - r;
    if (w < 0 != I < 0) {
      const y = new Date(v + (S - v) * w / (w - I));
      I > 0 ? g.rise ?? (g.rise = y) : g.set ?? (g.set = y);
    }
    v = S, w = I;
  }
  return g;
}
const Vp = (o) => {
  const r = jo(o);
  return [r, new Date(r.getTime() + ra)];
}, Tm = (o, r, d) => jp((p) => qi(p, r, d), Mm, ...Vp(o)), Lm = (o, r, d) => jp((p) => _m(p, r, d), Sm, ...Vp(o));
function wl(o) {
  const r = Op(o), d = Fp(r), p = qp(r), g = Math.acos(Math.sin(d.dec) * Math.sin(p.dec) + Math.cos(d.dec) * Math.cos(p.dec) * Math.cos(d.ra - p.ra)), v = Math.atan2(d.dist * Math.sin(g), p.dist - d.dist * Math.cos(g)), w = Math.atan2(Math.cos(d.dec) * Math.sin(d.ra - p.ra), Math.sin(d.dec) * Math.cos(p.dec) - Math.cos(d.dec) * Math.sin(p.dec) * Math.cos(d.ra - p.ra));
  return { fraction: (1 + Math.cos(v)) / 2, phase: 0.5 + 0.5 * v * (w < 0 ? -1 : 1) / Math.PI };
}
const Dm = (o) => {
  const r = o * 28;
  return r < 0.5 || r > 27.5 ? "new_moon" : r < 6.5 ? "waxing_crescent" : r < 7.5 ? "first_quarter" : r < 13.5 ? "waxing_gibbous" : r < 14.5 ? "full_moon" : r < 20.5 ? "waning_gibbous" : r < 21.5 ? "last_quarter" : "waning_crescent";
}, Nn = (o) => {
  const r = o == null ? void 0 : o.config;
  return r && ie(r.latitude) && ie(r.longitude) ? { lat: Number(r.latitude), lon: Number(r.longitude) } : null;
};
function Pn(o, r) {
  var y, C, O;
  const d = Nn(o), p = d ? Tm(r, d.lat, d.lon) : {}, g = (y = o == null ? void 0 : o.states) == null ? void 0 : y["sun.sun"], v = jo(r).getTime(), w = (V) => {
    const Q = V ? new Date(V) : null;
    return Q && Number.isFinite(Q.getTime()) && jo(Q).getTime() === v ? Q : null;
  }, S = w((C = g == null ? void 0 : g.attributes) == null ? void 0 : C.next_rising), I = w((O = g == null ? void 0 : g.attributes) == null ? void 0 : O.next_setting);
  return S && (p.rise = S), I && (p.set = I), p;
}
function Em(o) {
  var p;
  const r = (p = o == null ? void 0 : o.states) == null ? void 0 : p["sun.sun"];
  if ((r == null ? void 0 : r.state) === "below_horizon" || (r == null ? void 0 : r.state) === "above_horizon") return r.state === "below_horizon";
  const d = Nn(o);
  return d ? qi(/* @__PURE__ */ new Date(), d.lat, d.lon) < 0 : !1;
}
const hn = (o) => !!o && o.state !== "unavailable" && o.state !== "unknown", In = (o, r) => {
  var p;
  const d = (p = o.entities) == null ? void 0 : p[r];
  return !d || !d.hidden && !d.entity_category;
}, ke = (o, r, d) => {
  var p, g;
  for (const v of r) {
    const w = (p = o.states) == null ? void 0 : p[v];
    if (!hn(w)) continue;
    const S = (g = w.attributes) == null ? void 0 : g[d];
    if (S != null && S !== "") return { stateObj: w, value: S };
  }
}, Bm = (o, r) => r.map((d) => {
  var p;
  return (p = o.states) == null ? void 0 : p[d];
}).find(hn), Rm = (o, r, d) => r.map((p) => {
  var g;
  return (g = o.states) == null ? void 0 : g[p];
}).find((p) => {
  var g;
  return hn(p) && (((g = p.attributes) == null ? void 0 : g.supported_features) == null || Number(p.attributes.supported_features) & mm[d]);
});
function Wo(o, r, d) {
  var v, w, S, I;
  const p = ((w = (v = o.config) == null ? void 0 : v.unit_system) == null ? void 0 : w.length) || "", g = (r == null ? void 0 : r.attributes) || {};
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
      return g.temperature_unit || ((I = (S = o.config) == null ? void 0 : S.unit_system) == null ? void 0 : I.temperature) || "";
  }
}
function Hi(o, r, d, p) {
  try {
    if (typeof o.formatEntityAttributeValueToParts == "function") {
      const [g, ...v] = o.formatEntityAttributeValueToParts(r, d, p).map((w) => w.value);
      return { number: g, unit: v.join("").trim() };
    }
  } catch {
  }
  return { number: Gt(p, o.locale), unit: Wo(o, r, d) };
}
function Bd(o, r, d, p) {
  try {
    if (typeof o.formatEntityAttributeValue == "function") return o.formatEntityAttributeValue(r, d, p);
  } catch {
  }
  const g = Hi(o, r, d, p);
  return (g.number + " " + g.unit).trim();
}
function bo(o, r) {
  var p;
  try {
    if (typeof o.formatEntityState == "function") return o.formatEntityState(r);
  } catch {
  }
  const d = (p = r.attributes) == null ? void 0 : p.unit_of_measurement;
  return sm[r.state] || (d && ie(r.state) ? Gt(r.state, o.locale) + " " + d : r.state);
}
function Fo(o, r) {
  var d;
  try {
    if (typeof o.formatEntityName == "function") return o.formatEntityName(r, { type: "entity" });
  } catch {
  }
  return ((d = r.attributes) == null ? void 0 : d.friendly_name) || r.entity_id;
}
const Rd = (o) => o < 3 ? "low" : o < 6 ? "moderate" : o < 8 ? "high" : o < 11 ? "very_high" : "extreme", Ci = (o) => Bp.find(([, r]) => o <= r)[0];
function Pm(o, r) {
  if (r === "Beaufort") return Math.round(o);
  const d = r ? fm[r] : void 0;
  if (d === void 0) return;
  const p = um.findIndex((g) => o * d < g);
  return p === -1 ? 12 : p;
}
const Pd = (o, r) => {
  const d = r ? hm[r] : void 0;
  return d === void 0 ? void 0 : o * d;
}, Hd = (o) => Object.keys(o.states || {}).find((r) => {
  var d, p;
  return r.startsWith("sensor.") && ((p = (d = o.entities) == null ? void 0 : d[r]) == null ? void 0 : p.platform) === "moon";
}), vl = (o) => Object.values(o.states || {}).filter((r) => {
  var d, p;
  return r.entity_id.startsWith("sensor.") && ((d = r.attributes) == null ? void 0 : d.device_class) === "precipitation" && ["total", "total_increasing"].includes(((p = r.attributes) == null ? void 0 : p.state_class) ?? "") && In(o, r.entity_id);
}).map((r) => r.entity_id).sort()[0];
function Hm(o) {
  var d;
  const r = {};
  for (const [p, g] of Object.entries(((d = o == null ? void 0 : o.core) == null ? void 0 : d.integration) ?? {})) {
    if (g && "integration_type" in g) {
      r[p] = g.categories;
      continue;
    }
    for (const [v, w] of Object.entries((g == null ? void 0 : g.integrations) ?? {})) r[v] = w == null ? void 0 : w.categories;
  }
  return r;
}
const zp = (o, r, d) => {
  var g, v, w;
  const p = (v = (g = o.entities) == null ? void 0 : g[d]) == null ? void 0 : v.platform;
  return !!p && !!((w = r[p]) != null && w.includes(pm));
};
function Om(o, r) {
  const d = /* @__PURE__ */ new Map();
  return Object.values(o.states || {}).filter((p) => {
    var g;
    return p.entity_id.startsWith("sensor.") && Ii.includes(((g = p.attributes) == null ? void 0 : g.device_class) ?? "") && In(o, p.entity_id) && zp(o, r, p.entity_id);
  }).sort((p, g) => p.entity_id.localeCompare(g.entity_id)).forEach((p) => {
    d.has(p.attributes.device_class) || d.set(p.attributes.device_class, p.entity_id);
  }), Ii.map((p) => d.get(p)).filter(Boolean);
}
const Nm = (o, r) => Object.values(o.states || {}).filter((d) => {
  var p, g;
  return d.entity_id.startsWith("sensor.") && In(o, d.entity_id) && zp(o, r, d.entity_id) && (((g = (p = o.entities) == null ? void 0 : p[d.entity_id]) == null ? void 0 : g.translation_key) ?? d.entity_id).toLowerCase().includes("pollen");
}).map((d) => d.entity_id).sort();
function Od(o, r, d) {
  const p = Math.max(r - o, 1e-6), g = d[d.length - 1], v = d.find((y) => p / y <= 4) ?? g * Math.ceil(p / (4 * g)), w = Math.floor(o / v) * v;
  let S = Math.ceil(r / v) * v;
  S === w && (S = w + v);
  const I = [];
  for (let y = w; y <= S + v / 1e3; y += v) I.push(y);
  return { min: w, max: S, ticks: I };
}
const Im = (o, r, d) => {
  const p = (w) => [1, 3, 5].map((S) => parseInt(w.slice(S, S + 2), 16)), g = p(o), v = p(r);
  return "rgb(" + g.map((w, S) => Math.round(w + (v[S] - w) * d)).join(", ") + ")";
}, Fm = (o, r, d, p) => {
  const g = d * Math.abs(1 - 2 * p), v = p < 0.5 ? 0 : 1;
  return "M " + o + " " + (r - d) + " A " + d + " " + d + " 0 0 0 " + o + " " + (r + d) + " A " + g + " " + d + " 0 0 " + v + " " + o + " " + (r - d) + " Z";
}, Xe = ({ icon: o, name: r, sub: d, visual: p, double: g, backdrop: v, cls: w, zone: S, callouts: I }) => '<div class="wbCard wbSquare' + (g ? " wbDouble" : "") + (v ? " wbHasBackdrop" : "") + (S != null ? " wbZoned" : "") + (w ? " " + w : "") + '">' + (v ? '<div class="wbBackdrop" aria-hidden="true">' + v + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + Rp(o) + '</div><div class="wbText"><span class="wbName">' + bt(r) + "</span>" + (d ? '<span class="wbSub">' + bt(d) + "</span>" : "") + "</div></div>" + (S != null ? '<div class="wbZone">' + S + "</div>" + (I != null && I.length ? '<div class="wbCallouts">' + I.slice(0, 3).map((y) => Array.isArray(y) ? '<span class="wbCallout"><span>' + bt(y[0]) + "</span><span>" + bt(y[1]) + "</span></span>" : '<span class="wbCallout wbAdvice"><span>' + bt(y) + "</span></span>").join("") + "</div>" : "") : '<div class="wbVisual">' + p + "</div>") + "</div>", _i = (o) => '<div class="wbZoneM">' + o + "</div>", xa = (o, r) => '<div class="wbValue"><span class="wbNum">' + bt(o) + "</span>" + (r ? '<span class="wbUnitV">' + bt(r) + "</span>" : "") + "</div>";
function qm(o) {
  const r = o.max - o.min || 1, d = (S) => 100 - (Math.min(o.max, Math.max(o.min, S)) - o.min) / r * 100, p = (S) => S / Sr * 100 + "%", g = (S) => S.map((I) => I.t + "," + d(I.v)).join(" "), v = o.kind === "line" ? o.points : [];
  let w = '<div class="wbDayChart"><div class="wbDcSun">' + o.sun.map((S) => '<span class="wbDcSunMark" style="left:' + p(S.t) + '">' + yo(S.rise ? ee.sunsetUp : ee.sunsetDown) + bt(S.label) + "</span>").join("") + "</div>";
  return w += '<div class="wbDcY">' + o.ticks.map((S) => '<span style="top:' + d(S) + '%">' + bt(o.format(S)) + "</span>").join("") + "</div>", w += '<div class="wbDcPlot"><svg viewBox="0 0 ' + Sr + ' 100" preserveAspectRatio="none">' + o.night.map(([S, I]) => '<rect class="wbDcNight" x="' + S + '" y="0" width="' + (I - S) + '" height="100"></rect>').join("") + o.ticks.map((S) => '<line class="wbDcGrid" x1="0" x2="' + Sr + '" y1="' + d(S) + '" y2="' + d(S) + '" vector-effect="non-scaling-stroke"></line>').join("") + o.sun.map((S) => '<line class="wbDcSunLine" x1="' + S.t + '" x2="' + S.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (o.past && o.past.length > 1 ? '<polyline class="wbDcPast" points="' + g(o.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (v.length > 1 ? '<polygon class="wbDcArea" points="' + v[0].t + ",100 " + g(v) + " " + v[v.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + g(v) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (o.now ? '<line class="wbDcNow" x1="' + o.now.t + '" x2="' + o.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (o.kind === "bars" ? o.points.filter((S) => S.v > 0).map((S) => '<i class="wbDcBar" style="left:' + p(S.t + 12) + ";width:" + p(36) + ";height:" + (100 - d(S.v)) + '%"></i>').join("") : "") + (o.now && o.kind === "line" ? '<i class="wbDcDot" style="left:' + p(o.now.t) + ";top:" + d(o.now.v) + '%"></i>' : "") + (o.peak ? '<span class="wbDcPeak" style="left:' + p(o.peak.t) + ";top:" + d(o.peak.v) + '%">' + bt(o.peak.label) + "</span>" : "") + (o.note ? '<span class="wbDcNote">' + bt(o.note) + "</span>" : "") + "</div>", w += '<div class="wbDcX">' + o.hours.map((S) => '<span class="' + (S.minor ? "wbMinor" : "") + '" style="left:' + p(S.t) + '">' + bt(S.label) + "</span>").join("") + "</div></div>", w;
}
function Nd(o, r, d = 120, p = 300) {
  const w = o.map((j) => j.value), S = Math.min(...w), I = Math.max(...w), y = I - S || 1, C = (j) => j / (o.length - 1) * p, O = (j) => 18 + (1 - (j - S) / y) * (d - 18 - 18), V = o.map((j, lt) => [C(lt), O(j.value)]), Q = V.length > 2 ? _p(V) : "M" + V.map((j) => j[0].toFixed(1) + " " + j[1].toFixed(1)).join("L"), et = w.indexOf(I), at = w.indexOf(S), X = (j) => j === 0 ? "start" : j === o.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 ' + p + " " + d + '" aria-hidden="true">' + Tp(p, 18, d - 18) + ('<path class="wbArea" d="' + Q + "L" + p + " " + (d - 18) + "L0 " + (d - 18) + 'Z"></path>') + '<path class="wbLine" d="' + Q + '" vector-effect="non-scaling-stroke"></path><text x="' + C(et) + '" y="' + (O(I) - 6) + '" text-anchor="' + X(et) + '">' + bt(r(I)) + '</text><text x="' + C(at) + '" y="' + (O(S) + 14) + '" text-anchor="' + X(at) + '">' + bt(r(S)) + '</text><text x="0" y="' + d + '" text-anchor="start">' + bt(o[0].label) + '</text><text x="' + p + '" y="' + d + '" text-anchor="end">' + bt(o[o.length - 1].label) + "</text></svg>";
}
function Wm(o, r) {
  const v = o.map((O) => O.value).concat([]), w = Math.min(...v) - 2, S = Math.max(...v) + 1, I = S - w || 1, y = 300 / o.length, C = (O) => (1 - (O - w) / I) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + o.map((O, V) => '<rect class="wbBar' + (O.now ? " wbNowBar" : "") + '" x="' + (V * y + y * 0.2) + '" y="' + C(O.value) + '" width="' + y * 0.6 + '" height="' + (104 - C(O.value)) + '" rx="6"></rect><text x="' + (V * y + y / 2) + '" y="120" text-anchor="middle">' + bt(O.label) + "</text>").join("") + "</svg>";
}
const jm = [
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
], Vm = [[60, 92, 2.2], [72, 98, 1.6], [48, 100, 1.5], [85, 88, 1.8], [38, 92, 1.3], [66, 84, 1.2], [95, 80, 1.3], [25, 40, 1.4], [82, 30, 1.3], [55, 108, 1.2]], Id = [[54.4, 95, 1.8], [44.5, 56.6, 1.5], [33.5, 56.6, 1.1], [23.7, 40.1, 1.1]], zm = [[30, 62], [48, 48], [72, 60], [96, 82], [86, 112], [30, 108], [16, 86]];
let Gm = 0;
function Fd(o, { getHass: r, entityId: d, style: p = "bitmap", motion: g = !0, cards: v, onOpen: w, hoursWindow: S, radarSource: I } = {}) {
  var Jn, $r;
  const y = "wb" + ++Gm + "-", C = document.createElement("div");
  C.className = "wb", C.dataset.style = p;
  const O = document.createElement("div");
  O.className = "wbBento", C.appendChild(O), o.replaceChildren(C);
  const V = document.createElement("div");
  V.className = "wb wbPopup", V.dataset.style = p, V.hidden = !0;
  const Q = ["aq_tile", "pollen_tile", "radar_tile"], et = ["current", "hourly", "sun", "pollen_tile", "moon", "uv_index", "aq_tile", "humidity", "pressure", "wind", "visibility", "radar_tile", "compared_to_average", "precipitation", "air_quality"].filter((s) => !v || v.includes(s)), at = { current: "wide", hourly: "wide", compared_to_average: "double" }, X = ["sun", "moon", "uv_index", "aq_tile", "pollen_tile", "humidity", "pressure", "wind"], j = {};
  et.forEach((s) => {
    const u = document.createElement("div");
    u.className = "wbItem", u.dataset.card = s, u.dataset.size = at[s] || "tile", u.hidden = !0, X.includes(s) && (u.dataset.xl = ""), O.appendChild(u), j[s] = { el: u, html: null };
  });
  let lt = !1, pt = null, gt = 0, nt = -1, J = !1, Y = null, R = "";
  const wt = "homecore-next-view", Dt = (() => {
    try {
      return localStorage.getItem(wt);
    } catch {
      return null;
    }
  })(), it = { graph: void 0, range: { preset: "day" }, picking: !1, openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", hourlyView: Dt === "bars" ? "bars" : "strip", aq: void 0 }, z = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let Ot = /* @__PURE__ */ new Date(), F = /* @__PURE__ */ new Date();
  const tt = {}, D = {}, dt = {}, ot = (s) => {
    var u;
    return ((u = dt[s]) == null ? void 0 : u.forecast) ?? [];
  }, rt = (s, u) => {
    var h;
    return dt[u] ? (h = s.states) == null ? void 0 : h[dt[u].entityId] : void 0;
  };
  function vt(s) {
    const u = D[s];
    u && (u.unsub.then((h) => {
      typeof h == "function" && h();
    }).catch(() => {
    }), delete D[s]), dt[s] && delete dt[s];
  }
  function ft(s, u, h) {
    var A;
    if (typeof ((A = s.connection) == null ? void 0 : A.subscribeMessage) != "function") return;
    const b = { entityId: h };
    try {
      b.unsub = Promise.resolve(s.connection.subscribeMessage((P) => {
        lt || D[u] !== b || (P != null && P.forecast ? dt[u] = { entityId: h, forecast: P.forecast } : delete dt[u], $o());
      }, { type: "weather/subscribe_forecast", forecast_type: u, entity_id: h }));
    } catch (P) {
      b.unsub = Promise.reject(P);
    }
    b.unsub.catch(() => {
      D[u] === b && delete D[u];
    }), D[u] = b;
  }
  function xt(s, u) {
    var h;
    for (const b of ["daily", "hourly"]) {
      const A = Rm(s, u, b);
      ((h = D[b]) == null ? void 0 : h.entityId) !== (A == null ? void 0 : A.entity_id) && (vt(b), A && ft(s, b, A.entity_id));
    }
  }
  const Nt = (s, u, h, b = !1) => s.callWS({
    type: "history/history_during_period",
    start_time: h.toISOString(),
    end_time: (/* @__PURE__ */ new Date()).toISOString(),
    entity_ids: [u],
    minimal_response: b,
    no_attributes: b,
    significant_changes_only: !1
  });
  async function re(s, u) {
    var W, G, N;
    const h = ke(s, u, "pressure");
    if (!h) return;
    const b = h.stateObj.entity_id, A = await Nt(s, b, new Date(Date.now() - 3 * te)), P = (N = (G = (W = A == null ? void 0 : A[b]) == null ? void 0 : W.find((K) => {
      var $;
      return typeof (($ = K.a) == null ? void 0 : $.pressure) == "number";
    })) == null ? void 0 : G.a) == null ? void 0 : N.pressure;
    z.pressureHistory = typeof P == "number" ? { entityId: b, value: P } : void 0;
  }
  async function mt(s, u) {
    var G;
    const h = ke(s, u, "temperature");
    if (!h) return;
    const b = h.stateObj.entity_id, A = jo(/* @__PURE__ */ new Date()), P = await Nt(s, b, new Date(A.getTime() - Jh * ra)), W = /* @__PURE__ */ new Map();
    for (const N of (P == null ? void 0 : P[b]) ?? []) {
      const K = (G = N.a) == null ? void 0 : G.temperature, $ = new Date((N.lc ?? N.lu) * 1e3);
      if (typeof K != "number" || $ >= A) continue;
      const ut = $.toDateString();
      W.set(ut, Math.max(W.get(ut) ?? -1 / 0, K));
    }
    z.temperatureHistory = { entityId: b, dailyHighs: [...W.values()], days: [...W.entries()].map(([N, K]) => ({ date: new Date(N), high: K })) };
  }
  async function je(s) {
    const u = vl(s);
    if (!u) return;
    const h = await s.callWS({ type: "recorder/statistic_during_period", statistic_id: u, rolling_window: { duration: { hours: 24 } } });
    z.rain = { entityId: u, change: (h == null ? void 0 : h.change) ?? void 0 };
  }
  function Xa() {
    const s = r == null ? void 0 : r();
    if (!s || lt || typeof s.callWS != "function") return;
    const u = Ct(s);
    z.lastFetch = Date.now(), [re(s, u), mt(s, u), je(s)].forEach((h) => h.then(() => $o(), () => {
    }));
  }
  async function Vo() {
    const s = r == null ? void 0 : r();
    if (!s) return;
    const u = ke(s, Ct(s), "temperature");
    if (!u) return;
    const h = u.stateObj.entity_id, b = jo(/* @__PURE__ */ new Date());
    try {
      const A = await Nt(s, h, b), P = (W) => ((A == null ? void 0 : A[h]) ?? []).map((G) => {
        var N;
        return { time: G.lu * 1e3, value: (N = G.a) == null ? void 0 : N[W] };
      }).filter((G) => typeof G.value == "number");
      z.todayHistory = { day: b.toDateString(), fetched: Date.now(), temperature: P("temperature"), humidity: P("humidity") }, $o();
    } catch {
    }
  }
  async function So(s) {
    const u = r == null ? void 0 : r();
    if (u)
      try {
        const h = await Nt(u, s, new Date(Date.now() - 24 * te), !0), b = ((h == null ? void 0 : h[s]) ?? []).filter((P) => ie(P.s)), A = Math.max(1, Math.ceil(b.length / 48));
        z.aqHistory = { entityId: s, points: b.filter((P, W) => W % A === 0).map((P) => ({ label: Oe(new Date(P.lu * 1e3), u), value: Number(P.s) })) }, $o();
      } catch {
      }
  }
  function Oa(s) {
    z.categories === void 0 && (z.categories = null, Promise.resolve().then(() => s.callWS({ type: "integration/descriptions" })).then((u) => {
      z.categories = Hm(u);
    }, () => {
      z.categories = {};
    }).then(() => $o()));
  }
  function Ct(s) {
    var h;
    const u = Object.keys(s.states || {}).filter((b) => b.startsWith("weather.") && In(s, b)).sort();
    return d && ((h = s.states) != null && h[d]) ? [d, ...u.filter((b) => b !== d)] : u;
  }
  const ye = (s) => z.categories ? { air: Om(s, z.categories), pollen: Nm(s, z.categories) } : { air: [], pollen: [] };
  function He(s, u, h, b) {
    if (p === "line") return '<span class="wbWx wbS' + u + ' wbLineIcon" aria-hidden="true">' + gl(s, h || s === "clear-night") + "</span>";
    if (p === "smooth") {
      const A = kh(s, u === 90, h, y + "g-" + b);
      return '<span class="wbWx wbS' + u + " wb" + A.k[0].toUpperCase() + A.k.slice(1) + (A.night ? " wbNight" : "") + '" aria-hidden="true">' + A.svg + "</span>";
    }
    return '<span class="wbWx wbS' + u + '" aria-hidden="true"><canvas data-wb-wx="' + bt(dp(s, h)) + '" data-size="' + u + '"></canvas></span>';
  }
  const Vt = () => ot("daily").filter((s) => s.templow != null).slice(0, zh);
  function Qe(s, u) {
    const h = new Date(u.datetime), b = /* @__PURE__ */ new Date();
    return Rn(h, b) ? ht.today : Rn(h, new Date(b.getTime() + ra)) ? ht.tomorrow : Dd(h, s);
  }
  const Fn = (s, u, h) => h === 0 ? Qe(s, u) : Dd(new Date(u.datetime), s);
  function qt(s, u) {
    var $, ut, Et, _t;
    const h = Bm(s, u);
    if (!h) return "";
    const b = Vt(), A = it.openDay !== void 0 ? b[it.openDay] : void 0, P = ke(s, u, "temperature"), W = b[0], G = W && Rn(new Date(W.datetime), /* @__PURE__ */ new Date()), N = ((ut = ($ = s.config) == null ? void 0 : $.unit_system) == null ? void 0 : ut.temperature) || ((Et = h.attributes) == null ? void 0 : Et.temperature_unit) || "";
    let K = '<div class="wbCard wbWeather' + (A ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (A ? " inert" : "") + '><div class="wbNow">' + (w ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + bt(ht.openPage) + '">' : '<div class="wbCurrent">') + He(h.state, 90, Em(s), "now") + '<div class="wbTempBlock">' + (P && ie(P.value) ? '<div class="wbTemp"><span class="wbDeg">' + bt(Gt(Math.round(Number(P.value)), s.locale)) + '</span><span class="wbUnit">' + bt(N) + "</span></div>" : "") + '<div class="wbPlace">' + bt(((_t = s.config) == null ? void 0 : _t.location_name) ?? "") + "</div></div>" + (w ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + bt(bo(s, h)) + "</div>" + (G && W.templow != null ? '<div class="wbRange">' + bt(Fe(ht.range, { high: ce(s, W.temperature), low: ce(s, W.templow) })) + "</div>" : "") + "</div></div>";
    if (K += pa(s) + me(s), b.length) {
      const Mt = G && P && ie(P.value) ? ce(s, P.value) : "", It = (Tt, st, Bt) => Tt === 0 && Mt ? '<span class="wbAsDay">' + bt(st) + '</span><span class="wbAsNow">' + bt(Bt) + "</span>" : bt(st);
      K += '<div class="wbColumns" role="list">' + b.map((Tt, st) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + st + '" data-wb-focus="col-' + st + '"><span class="wbDay">' + It(st, Fn(s, Tt, st), ht.now) + "</span>" + He(Tt.condition ?? "cloudy", 60, !1, "col" + st) + '<span class="wbTemps"><span class="wbHi">' + It(st, ce(s, Tt.temperature), Mt) + '</span><span class="wbLo">' + bt(ce(s, Tt.templow)) + "</span></span></button>").join("") + "</div>", K += '<div class="wbHalves" role="list">' + b.map((Tt, st) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + st + '" data-wb-focus="half-' + st + '">' + He(Tt.condition ?? "cloudy", 40, !1, "half" + st) + '<span class="wbText"><span class="wbName">' + bt(Qe(s, Tt)) + '</span><span class="wbSub">' + bt(Fe(ht.highLow, { high: ce(s, Tt.temperature), low: ce(s, Tt.templow) })) + "</span></span></button>").join("") + "</div>";
    }
    return K + "</div>" + (A ? Lr(s, u, A) : "") + "</div>";
  }
  const da = {
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
  }, Cr = {
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
  function _r(s) {
    const u = Date.now(), h = ot("hourly").filter((ut) => new Date(ut.datetime).getTime() > u - te).slice(0, 13);
    if (h.length < 2) return "";
    const b = (ut) => Oe(new Date(ut.datetime), s), A = (ut) => da[ut.condition] || "", P = (ut) => Cr[ut.condition] || ut.condition;
    let W = A(h[0]);
    if (!W) return "";
    let G = h[0], N = 0;
    for (const ut of h.slice(1))
      N === 2 || P(ut) === P(G) || !A(ut) || (W += (N ? " and " : ", ") + A(ut) + " from " + b(ut), G = ut, N++);
    const K = Number(h[0].temperature), $ = h.filter((ut) => ie(ut.temperature));
    if (ie(K) && $.length) {
      const ut = $.reduce((_t, Mt) => Number(Mt.temperature) < Number(_t.temperature) ? Mt : _t), Et = $.reduce((_t, Mt) => Number(Mt.temperature) > Number(_t.temperature) ? Mt : _t);
      K - Number(ut.temperature) >= 3 ? W += ", down to " + ce(s, ut.temperature) + " by " + b(ut) : Number(Et.temperature) - K >= 3 && (W += ", up to " + ce(s, Et.temperature) + " by " + b(Et));
    }
    return W[0].toUpperCase() + W.slice(1) + ".";
  }
  const pa = (s) => {
    const u = _r(s);
    return u ? '<div class="wbSummary"><p class="wbSummaryText">' + bt(u) + "</p></div>" : "";
  };
  function me(s) {
    const [u, h] = Mi[S == null ? void 0 : S()] || Mi.day, b = Date.now(), A = ot("hourly").filter((P) => {
      const W = new Date(P.datetime), G = W.getHours();
      return W.getTime() > b - te / 2 && G >= u && G < h && ie(P.temperature);
    }).slice(0, 4);
    return A.length ? '<div class="wbNextHours" role="list">' + A.map((P, W) => '<div class="wbHour" role="listitem"><span class="wbHourTime">' + bt(Oe(new Date(P.datetime), s)) + "</span>" + He(P.condition ?? "cloudy", 40, P.is_daytime === !1, "hr" + W) + '<span class="wbHourTemp">' + bt(ce(s, P.temperature)) + "</span></div>").join("") + "</div>" : "";
  }
  function Tr(s) {
    const u = s.getTime(), h = Date.now() - te;
    return ot("hourly").filter((b) => {
      const A = new Date(b.datetime).getTime();
      return A >= u && A < u + ra && A > h;
    });
  }
  function zo(s) {
    if (!s.length) return ["temperature"];
    const u = ["temperature"];
    return s.some((h) => h.precipitation != null || h.precipitation_probability != null) && u.push("precipitation"), s.some((h) => h.humidity != null) && u.push("humidity"), u;
  }
  function Lr(s, u, h) {
    const b = jo(new Date(h.datetime)), A = Tr(b), P = zo(A), W = P.includes(it.dayMode) ? it.dayMode : "temperature", G = (N) => N === "humidity" ? ht.humidity : ht.modes[N];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + He(h.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + bt(Qe(s, h)) + '</span><span class="wbSub">' + bt(Fe(ht.highLow, { high: ce(s, h.temperature), low: ce(s, h.templow) })) + '</span></div><button class="wbBack" title="' + bt(ht.back) + '" data-wb="close-day" data-wb-focus="back-day">' + yo(ee.back) + "</button></div>" + (P.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + P.map((N) => '<button aria-pressed="' + (N === W) + '" data-wb="day-mode" data-mode="' + N + '" data-wb-focus="day-mode-' + N + '">' + bt(G(N)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + qm(qn(s, u, b, A, W)) + "</div></div>";
  }
  function qn(s, u, h, b, A) {
    var tr;
    const P = h.getTime(), W = Date.now(), G = Rn(h, /* @__PURE__ */ new Date()), N = (Ut) => (Ut - P) / Le, K = (Ut) => Oe(new Date(Ut), s), $ = (Ut) => new Date(Ut.datetime).getTime(), ut = [0, 3, 6, 9, 12, 15, 18, 21].map((Ut) => ({ t: Ut * 60, label: K(P + Ut * te), minor: Ut % 6 !== 0 })), { rise: Et, set: _t } = Pn(s, h), Mt = [], It = [];
    Et && (Mt.push({ t: N(Et.getTime()), label: K(Et.getTime()), rise: !0 }), It.push([0, N(Et.getTime())])), _t && (Mt.push({ t: N(_t.getTime()), label: K(_t.getTime()), rise: !1 }), It.push([N(_t.getTime()), Sr]));
    const Tt = Nn(s);
    !Et && !_t && Tt && qi(new Date(P + ra / 2), Tt.lat, Tt.lon) < 0 && It.push([0, Sr]);
    const st = G ? N(W) : void 0, Bt = { hours: ut, sun: Mt, night: It };
    if (!b.length && !G) return { ...Bt, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: ht.noHourly };
    if (A === "precipitation") {
      const Ut = b.some((Ie) => Ie.precipitation_probability != null), Wa = b.map((Ie) => ({ t: N($(Ie)), v: Number((Ut ? Ie.precipitation_probability : Ie.precipitation) ?? 0) })), Ro = Wo(s, rt(s, "hourly"), "precipitation"), tn = Math.max(0, ...Wa.map((Ie) => Ie.v)), er = Ut ? 100 : Od(0, Math.max(tn, 1), [0.5, 1, 2, 5, 10]).max, Po = (Ie) => Ut ? Gt(Ie, s.locale) + "%" : Gt(Ie, s.locale, { maximumFractionDigits: 1 }) + " " + Ro, Ho = Wa.find((Ie) => Ie.v === tn);
      return {
        ...Bt,
        kind: "bars",
        points: Wa,
        min: 0,
        max: er,
        ticks: [0, er / 2, er],
        format: Po,
        now: st !== void 0 ? { t: st, v: 0 } : void 0,
        peak: Ho && tn > 0 ? { t: Ho.t + 30, v: Ho.v, label: Po(Ho.v) } : void 0,
        note: tn > 0 ? void 0 : ht.noRain
      };
    }
    const Pt = A === "humidity" ? "humidity" : "temperature", ue = b.filter((Ut) => Ut[Pt] != null && (!G || $(Ut) >= W)).map((Ut) => ({ t: N($(Ut)), v: Number(Ut[Pt]) }));
    let St, ne = [];
    if (st !== void 0) {
      const Ut = ke(s, u, Pt);
      Ut && ie(Ut.value) && (St = { t: st, v: Number(Ut.value) }, ue.unshift(St)), ne = (((tr = z.todayHistory) == null ? void 0 : tr.day) === h.toDateString() ? z.todayHistory[Pt] : []).filter((Ro) => Ro.time <= W).map((Ro) => ({ t: Math.max(0, N(Ro.time)), v: Ro.value })), St && ne.length && ne.push(St);
    }
    const oe = [...ne, ...ue];
    if (!oe.length) return { ...Bt, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: ht.noHourly };
    const Ge = oe.map((Ut) => Ut.v), no = Od(Math.min(...Ge), Math.max(...Ge), Pt === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    Pt === "humidity" && (no.min = Math.max(0, no.min), no.max = Math.min(100, no.max), no.ticks = no.ticks.filter((Ut) => Ut >= 0 && Ut <= 100));
    const Qo = Pt === "humidity" ? (Ut) => Gt(Ut, s.locale) + "%" : (Ut) => ce(s, Ut), Qn = Pt === "temperature" ? oe.reduce((Ut, Wa) => Wa.v > Ut.v ? Wa : Ut) : void 0;
    return { ...Bt, kind: "line", points: ue, past: ne, ...no, format: Qo, now: St, peak: Qn ? { ...Qn, label: Qo(Qn.v) } : void 0 };
  }
  function Wn(s) {
    const u = ["temperature"];
    return s.some((h) => h.precipitation_probability != null || h.precipitation != null) && u.push("precipitation"), s.some((h) => h.wind_speed != null) && u.push("wind"), u;
  }
  function Ao(s, u, h = vd) {
    var P, W;
    const b = ot("daily"), A = [];
    for (let G = 0; G < h; G++) for (const N of [!1, !0]) {
      const K = s.getTime() + (G * 24 + (N ? 12 : 0)) * te, $ = K + 12 * te, ut = {};
      u.forEach((_t) => {
        const Mt = new Date(_t.datetime).getTime();
        _t.condition && Mt >= K && Mt < $ && (ut[_t.condition] = (ut[_t.condition] ?? 0) + (Xh.has(_t.condition) ? 2 : 1));
      });
      let Et = (P = Object.entries(ut).sort((_t, Mt) => Mt[1] - _t[1])[0]) == null ? void 0 : P[0];
      if (!Et) {
        const _t = new Date(K).toDateString();
        Et = ((W = b.find((Mt) => new Date(Mt.datetime).toDateString() === _t)) == null ? void 0 : W.condition) ?? "cloudy";
      }
      A.push({ cond: N && Et === "sunny" ? "clear-night" : Et, night: N });
    }
    return A;
  }
  function Wi(s, u, h) {
    const b = rt(s, "hourly"), A = u.precipitation_probability != null ? Gt(u.precipitation_probability, s.locale) + "%" : "", P = u.precipitation ? Gt(u.precipitation, s.locale) + " " + Wo(s, b, "precipitation") : "";
    switch (h) {
      case "precipitation":
        return A ? [A, P] : [P || "–", ""];
      case "wind":
        return u.wind_speed != null ? [Gt(Math.round(u.wind_speed), s.locale), Wo(s, b, "wind_speed")] : ["–", ""];
      default:
        return [ce(s, u.temperature), (u.precipitation_probability ?? 0) >= 20 ? A : ""];
    }
  }
  function Na(s, u, h) {
    const [b, A] = Mi[S == null ? void 0 : S()] || Mi.day, P = [];
    for (let W = 0; W < 4 && P.length < 3; W++) {
      const G = /* @__PURE__ */ new Date();
      G.setHours(0, 0, 0, 0), G.setDate(G.getDate() + W);
      const N = new Date(G);
      N.setHours(A, 0, 0, 0), G.setHours(b, 0, 0, 0), !(N.getTime() <= h || !u.some((K) => {
        const $ = new Date(K.datetime).getTime();
        return $ >= G.getTime() && $ <= N.getTime();
      })) && P.push({ a: G.getTime(), b: N.getTime(), label: Qe(s, { datetime: G.toISOString() }) });
    }
    return P;
  }
  function ge(s, u, h, b, A, P) {
    const W = (h.b - u.a) / te, G = (st) => ((st - u.a) / te).toFixed(3), N = 80, K = 32, $ = [];
    for (const st = new Date(u.a - ra); st.getTime() < h.b + ra; st.setDate(st.getDate() + 1)) {
      const { rise: Bt, set: Pt } = Pn(s, new Date(st));
      Bt && Pt && $.push({ rise: Bt.getTime(), set: Pt.getTime() });
    }
    const ut = (st, Bt) => N - (N - K) * Math.sin(Math.PI * (Bt - st.rise) / (st.set - st.rise)), Et = (st) => !$.some((Bt) => st >= Bt.rise && st <= Bt.set);
    let _t = "", Mt = "", It = "";
    $.forEach((st, Bt) => {
      const Pt = [];
      for (let St = st.rise; St <= st.set; St += 15 * Le) Pt.push(G(St) + "," + ut(st, St).toFixed(2));
      Pt.push(G(st.set) + "," + N), _t += '<polyline class="wbLineArc" points="' + Pt.join(" ") + '"/>';
      const ue = $[Bt + 1];
      ue && (_t += '<rect class="wbLineNight" x="' + G(st.set) + '" y="0" width="' + ((ue.rise - st.set) / te).toFixed(3) + '" height="100"/>'), [[st.rise, "↑"], [st.set, "↓"]].forEach(([St, ne]) => {
        St < u.a || St > h.b || (Mt += '<line class="wbLineEdge" x1="' + G(St) + '" x2="' + G(St) + '" y1="0" y2="100"/>', It += '<span class="wbLineTime" style="left:' + P(St) + '">' + ne + " " + bt(Oe(new Date(St), s)) + "</span>");
      });
    });
    const Tt = $.find((st) => A >= st.rise && A <= st.set);
    return '<svg class="wbLineArt" viewBox="0 0 ' + W + ' 100" preserveAspectRatio="none" aria-hidden="true">' + _t + Mt + '<line class="wbLineHorizon" x1="0" x2="' + W + '" y1="' + N + '" y2="' + N + '"/></svg>' + It + (Tt ? '<span class="wbLineNow" style="left:' + P(A) + ";top:" + ut(Tt, A) + '%">' + gl("sunny", !1) + "</span>" : "") + b.filter((st) => st.entry && !st.now).map((st) => '<span class="wbLineGlyph' + st.edge + '" style="left:' + P(st.t) + '">' + gl(st.entry.condition ?? "cloudy", Et(st.t)) + "</span>").join("");
  }
  function jn(s, u) {
    delete tt.hourly;
    const h = it.hourlyView === "bars" ? "bars" : "strip", b = '<div class="wbHeader"><h2 class="wbTitle">' + bt(h === "bars" ? ht.nextDays : ht.nextHours) + '</h2><div class="wbSegments wbViews" role="group" aria-label="' + bt(ht.showAs) + '">' + ["strip", "bars"].map((St) => '<button aria-pressed="' + (St === h) + '" data-wb="hourly-view" data-view="' + St + '" data-wb-focus="hourly-view-' + St + '">' + bt(ht.views[St]) + "</button>").join("") + "</div></div>";
    if (h === "bars") return Vn(s, u, b);
    const A = ot("hourly"), P = Math.floor(Date.now() / Le) * Le, W = A.filter((St) => new Date(St.datetime).getTime() > P - te);
    if (!W.length) return "";
    const G = Wn(W), N = G.includes(it.hourlyMode) ? it.hourlyMode : "temperature", K = Na(s, A, P);
    if (!K.length) return "";
    const $ = K[0], ut = K[K.length - 1], Et = ($.b - $.a) / te, _t = (St) => "calc(var(--wb-u) * " + ((St - $.a) / te).toFixed(3) + ")", Mt = new Date($.a);
    Mt.setHours(6, 0, 0, 0), Mt.getTime() > $.a && Mt.setDate(Mt.getDate() - 1);
    const It = Math.ceil((ut.b - Mt.getTime()) / ra);
    p !== "line" && (tt.hourly = { segs: Ao(Mt, A, It), seed: Mt.getDate(), columns: It });
    const Tt = (St) => St === $.a ? " wbFirst" : St === ut.b ? " wbLast" : "", st = [];
    for (let St = $.a; St < ut.b; ) {
      const ne = new Date(St);
      ne.setHours(24, 0, 0, 0);
      const oe = Math.min(ne.getTime(), ut.b);
      st.push({ a: St, b: oe, label: Qe(s, { datetime: new Date(St).toISOString() }), page: K.find((Ge) => Ge.a >= St && Ge.a < oe) || K.find((Ge) => Ge.a < oe && Ge.b > St) }), St = oe;
    }
    const Bt = P > $.a && P < ut.b ? Math.floor((P - $.a) / (2 * te)) * 2 : 0, Pt = [];
    for (let St = $.a; St <= ut.b; St += te) {
      const ne = new Date(St), oe = Tt(St);
      !oe && ne.getHours() % Uh || !oe && (Math.abs($.a - St) < 2 * te || Math.abs(ut.b - St) < 2 * te) || P >= $.a && Math.abs(St - P) < 1.5 * te && !oe || Pt.push({ t: St, edge: oe, label: Oe(ne, s), entry: St >= P - te ? A.find((Ge) => new Date(Ge.datetime).getTime() === St) : void 0 });
    }
    P > $.a && P < $.b && Pt.push({ t: P, edge: P - $.a < te ? " wbFirst" : $.b - P < te ? " wbLast" : "", label: ht.now, entry: W[0], now: !0 });
    const ue = (St, ne) => '<span class="wbMark' + St.edge + (St.now ? " wbNowMark" : "") + '" style="left:' + _t(St.t) + '">' + ne + "</span>";
    return '<div class="wbCard wbHc wbHourly">' + b + (G.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + G.map((St) => '<button aria-pressed="' + (St === N) + '" data-wb="hourly-mode" data-mode="' + St + '" data-wb-focus="hourly-mode-' + St + '">' + bt(ht.modes[St]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll wbPaged" tabindex="0" aria-label="' + bt(ht.nextHours) + '" data-span="' + Et + '" data-start="' + Bt + '"><div class="wbStrip" style="--wb-u:calc(100cqw / ' + Et + ");width:calc(var(--wb-u) * " + (ut.b - $.a) / te + ')">' + // a stop every two hours (Matt, 1 Nov): a swipe settles on one, a flick runs on past several
    [...Array(Math.floor((ut.b - $.a) / (2 * te)) + 1)].map((St, ne) => '<i class="wbSnap" style="left:' + _t($.a + ne * 2 * te) + '"></i>').join("") + '<div class="wbDays">' + st.map((St, ne) => {
      var oe;
      return '<span class="wbDaySpan" style="width:calc(var(--wb-u) * ' + ((St.b - St.a) / te).toFixed(3) + ')"><button class="wbDayName" data-wb="hours-day" data-hours="' + (ne === 0 ? Bt : ((((oe = St.page) == null ? void 0 : oe.a) ?? St.a) - $.a) / te) + '" data-wb-focus="hours-day-' + ne + '">' + bt(St.label) + "</button></span>";
    }).join("") + '</div><div class="wbRow wbTimes">' + Pt.map((St) => ue(St, bt(St.label))).join("") + "</div>" + (p === "line" ? '<div class="wbSky wbLineSky">' + ge(s, $, ut, Pt, P, _t) : '<div class="wbSky"><div class="wbSkyArt" style="left:' + _t(Mt.getTime()) + ";width:calc(var(--wb-u) * " + It * 24 + ')"><canvas data-wb-strip="hourly"' + (p === "smooth" ? "" : ' class="wbPixels"') + "></canvas></div>") + (P > $.a ? '<i class="wbPast" style="width:' + _t(Math.min(P, ut.b)) + '"></i><i class="wbNowLine" style="left:' + _t(P) + '"></i>' : "") + st.slice(1).map((St) => '<i class="wbMidnight" style="left:' + _t(St.a) + '"></i>').join("") + '</div><div class="wbRow wbValues">' + Pt.map((St) => {
      if (!St.entry) return "";
      const [ne, oe] = Wi(s, St.entry, N);
      return ue(St, '<span class="wbPrimaryV">' + bt(ne) + '</span><span class="wbSecondary">' + bt(oe) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function Dr(s) {
    const u = Yh, h = u.findIndex(([N]) => N >= s);
    if (h <= 0) return "rgb(" + u[h < 0 ? u.length - 1 : 0][1].join(",") + ")";
    const [b, A] = u[h - 1], [P, W] = u[h], G = (s - b) / (P - b);
    return "rgb(" + A.map((N, K) => Math.round(N + (W[K] - N) * G)).join(",") + ")";
  }
  function Vn(s, u, h) {
    var _t;
    const b = ot("daily").filter((Mt) => ie(Mt.templow) && ie(Mt.temperature)).slice(0, 7);
    if (!b.length) return "";
    const A = Math.min(...b.map((Mt) => Number(Mt.templow))), P = Math.max(...b.map((Mt) => Number(Mt.temperature))), W = Math.max(1, P - A), G = (Mt) => Math.max(0, Math.min(100, (Mt - A) / W * 100)).toFixed(2), N = /F/.test(Wo(s, rt(s, "daily"), "temperature")), K = (Mt) => N ? (Mt - 32) / 1.8 : Mt, $ = "linear-gradient(90deg," + [0, 0.25, 0.5, 0.75, 1].map((Mt) => Dr(K(A + Mt * W)) + " " + Mt * 100 + "%").join(",") + ")", ut = (_t = ke(s, u, "temperature")) == null ? void 0 : _t.value;
    return '<div class="wbCard wbHc wbHourly wbBars' + (Wn(ot("hourly").filter((Mt) => new Date(Mt.datetime).getTime() > Date.now() - te)).length > 1 ? " wbTabbed" : "") + '">' + h + '<div class="wbDayBars" role="list">' + b.map((Mt, It) => {
      const Tt = Qe(s, Mt), st = Rn(new Date(Mt.datetime), /* @__PURE__ */ new Date()), Bt = Number(Mt.templow), Pt = Number(Mt.temperature);
      return '<div class="wbDayBar" role="listitem" aria-label="' + bt(Fe(ht.rangeRow, { day: Tt, low: ce(s, Bt), high: ce(s, Pt) })) + '"><span class="wbRangeDay">' + bt(Tt) + "</span>" + He(Mt.condition, 40, !1, "r" + It) + '<span class="wbRangeLo">' + bt(ce(s, Bt)) + '</span><span class="wbRangeTrack"><i class="wbRangeFill" style="background:' + $ + ";clip-path:inset(0 " + (100 - G(Pt)) + "% 0 " + G(Bt) + '% round 4px)"></i>' + (st && ie(ut) ? '<i class="wbRangeNow" style="left:' + G(Number(ut)) + '%"></i>' : "") + '</span><span class="wbRangeHi">' + bt(ce(s, Pt)) + "</span></div>";
    }).join("") + "</div></div>";
  }
  const Er = [[-120, "#0d1530"], [-60, "#1c2550"], [-15, "#c9707a"], [30, "#f2a46a"], [60, "#b49bc8"], [90, "#5aa5e6"]], Br = [[-90, "#5aa5e6"], [-60, "#a99bd0"], [-30, "#f0a54a"], [15, "#c45a5a"], [60, "#3a2a5c"], [120, "#0d1530"]], jt = (s, u) => {
    if (u <= s[0][0]) return s[0][1];
    for (let h = 1; h < s.length; h++) if (u <= s[h][0]) {
      const [b, A] = s[h - 1], [P, W] = s[h];
      return Im(A, W, (u - b) / (P - b));
    }
    return s[s.length - 1][1];
  }, kt = (s, u, h) => {
    if (!u || !h) return Er[5][1];
    const b = (s.getTime() - h.getTime()) / Le;
    return b >= -90 ? jt(Br, b) : jt(Er, (s.getTime() - u.getTime()) / Le);
  }, Ae = (s) => (s >= 60 ? Math.floor(s / 60) + "h " : "") + s % 60 + "m";
  function Jt(s) {
    const u = Ot, { rise: h, set: b } = Pn(s, u), A = h && b ? Math.round((b.getTime() - h.getTime()) / Le) : 0, P = Math.floor(A / 60), W = A % 60, G = (ue) => ue ? Oe(ue, s) : "–", N = new Date(u);
    N.setDate(N.getDate() + 1);
    const K = Pn(s, N), $ = K.rise && K.set ? Math.round((K.set.getTime() - K.rise.getTime()) / Le) : 0, ut = new Date(u);
    ut.setDate(ut.getDate() - 1);
    const Et = !!(h && b && u >= h && u <= b), _t = !!(h && u < h), Mt = Et ? h : _t ? Pn(s, ut).set : b, It = Et ? b : _t ? h : K.rise, Tt = Mt && It ? Math.min(1, Math.max(0, (u.getTime() - Mt.getTime()) / (It.getTime() - Mt.getTime()))) : 0, st = It ? Math.max(0, Math.round((It.getTime() - u.getTime()) / Le)) : 0, Bt = It ? Ae(st) : "–", Pt = Et ? ht.untilSunset : ht.untilSunrise;
    return Xe({
      icon: ee.sunny,
      name: ht.sun,
      sub: A ? Fe(ht.daylightShort, { hours: P, minutes: W }) : void 0,
      cls: "wbSunTile",
      callouts: [[ht.callout.riseTomorrow, G(K.rise)], [ht.callout.setTomorrow, G(K.set)], ...$ ? [[ht.callout.dayTomorrow, Math.floor($ / 60) + "h " + $ % 60 + "m"]] : []],
      zone: '<div class="wbSunZone" style="background:' + kt(u, h, b) + '"><svg class="wbSunTrack" data-up="' + (Et ? 1 : 0) + '" data-f="' + Tt.toFixed(4) + '" aria-hidden="true"></svg><div class="wbSunCount"><span class="wbSunLeft">' + bt(Bt) + '</span><span class="wbSunWord">' + bt(Pt) + '</span></div><span class="wbSunAt wbSunRise">' + bt(G(h)) + '</span><span class="wbSunAt wbSunSet">' + bt(G(b)) + "</span></div>" + // at M, the countdown alone (Matt, 10 Nov): M's zone has room for one line
      _i(xa(Bt, ""))
    });
  }
  const Ve = 22;
  function $a(s) {
    const u = Math.round(s.clientWidth), h = Math.round(s.clientHeight), b = Ve, A = b / 2, P = u + "x" + h + ":" + s.dataset.f + ":" + s.dataset.up;
    if (u < b * 3 || h < b * 3 || s.dataset.drawn === P) return;
    s.dataset.drawn = P;
    const W = "M" + A + " " + (h - b) + "V" + b + "A" + A + " " + A + " 0 0 1 " + b + " " + A + "H" + (u - b) + "A" + A + " " + A + " 0 0 1 " + (u - A) + " " + b + "V" + (h - b), G = "M" + (u - A) + " " + (h - b) + "A" + A + " " + A + " 0 0 1 " + (u - b) + " " + (h - A) + "H" + b + "A" + A + " " + A + " 0 0 1 " + A + " " + (h - b), N = 16, K = 6, $ = "M" + N + " 0H" + (u - N) + "A" + N + " " + N + " 0 0 1 " + u + " " + N + "V" + (h - N) + "A" + N + " " + N + " 0 0 1 " + (u - N) + " " + h + "H" + N + "A" + N + " " + N + " 0 0 1 0 " + (h - N) + "V" + N + "A" + N + " " + N + " 0 0 1 " + N + " 0ZM" + (b + K) + " " + b + "A" + K + " " + K + " 0 0 0 " + b + " " + (b + K) + "V" + (h - b - K) + "A" + K + " " + K + " 0 0 0 " + (b + K) + " " + (h - b) + "H" + (u - b - K) + "A" + K + " " + K + " 0 0 0 " + (u - b) + " " + (h - b - K) + "V" + (b + K) + "A" + K + " " + K + " 0 0 0 " + (u - b - K) + " " + b + "Z", ut = s.dataset.up === "1", Et = Number(s.dataset.f) || 0, _t = "http://www.w3.org/2000/svg";
    s.setAttribute("viewBox", "0 0 " + u + " " + h);
    const Mt = document.createElementNS(_t, "path");
    Mt.setAttribute("d", ut ? W : G), s.replaceChildren(Mt);
    const It = Mt.getTotalLength(), Tt = Mt.getPointAtLength(It * Et), st = ut ? It : 0;
    s.innerHTML = '<defs><mask id="' + y + 'sun-day"><path d="' + W + '" fill="none" stroke="#fff" stroke-width="' + b * 2 + '"></path></mask><mask id="' + y + 'sun-done"><path d="' + W + '" fill="none" stroke="#fff" stroke-width="' + b * 2 + '" stroke-dasharray="' + (ut ? (st * Et).toFixed(1) + " " + (st + 1).toFixed(1) : "0 99999") + '"></path></mask></defs><path class="wbSunBand" fill-rule="evenodd" d="' + $ + '"></path><path class="wbSunBand wbSunDay" fill-rule="evenodd" d="' + $ + '" mask="url(#' + y + 'sun-day)"></path><path class="wbSunBand wbSunDone" fill-rule="evenodd" d="' + $ + '" mask="url(#' + y + 'sun-done)"></path><circle class="wbSunDot' + (ut ? "" : " wbSunNight") + '" cx="' + Tt.x.toFixed(1) + '" cy="' + Tt.y.toFixed(1) + '" r="' + A + '"></circle>';
  }
  const Ja = typeof ResizeObserver == "function" ? new ResizeObserver((s) => s.forEach((u) => $a(u.target))) : null;
  function ji() {
    Ja == null || Ja.disconnect(), C.querySelectorAll("svg.wbSunTrack").forEach((s) => {
      $a(s), Ja == null || Ja.observe(s);
    });
  }
  function zn(s, u, h) {
    const b = (W) => y + "moon-" + W, A = s > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + b("terminator") + ')" d="' + Fm(61, 61, 57.9, s) + '"' + (u ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", P = (W, G, N, K, $, ut) => '<filter id="' + b(W) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + G + '" numOctaves="' + N + '" seed="' + K + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((Et) => "<feFunc" + Et + ' type="linear" slope="' + $ + '" intercept="' + ut + '"></feFunc' + Et + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + b("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + b("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + b("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + b("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + b("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + P("mottle", "0.045", 4, 3, 1.8, -0.4) + P("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + b("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + b("fill") + ')"></circle><g' + (h ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + b("soften") + ')">' + jm.map(([W, G, N, K, $, ut]) => '<ellipse cx="' + W + '" cy="' + G + '" rx="' + N + '" ry="' + K + '" fill-opacity="' + ut + '" transform="rotate(' + $ + " " + W + " " + G + ')"></ellipse>').join("") + "</g>" + Vm.map(([W, G, N]) => '<circle class="wbCrater" cx="' + W + '" cy="' + G + '" r="' + N + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + b("glow") + ')">' + zm.map(([W, G]) => '<line x1="54.4" y1="95" x2="' + W + '" y2="' + G + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + b("glow") + ')">' + Id.map(([W, G, N]) => '<circle cx="' + W + '" cy="' + G + '" r="' + N * 2 + '"></circle>').join("") + "</g>" + Id.map(([W, G, N]) => '<circle class="wbBrightCenter" cx="' + W + '" cy="' + G + '" r="' + N + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + b("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + b("grain") + ')"></rect>' + A + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function Rr(s) {
    const u = F, h = Nn(s), b = (h == null ? void 0 : h.lat) ?? 0, A = wl(u), P = Hd(s), W = P ? s.states[P] : void 0, G = hn(W) && cm.includes(W.state) ? W.state : Dm(A.phase), { rise: N, set: K } = h ? Lm(u, h.lat, h.lon) : {}, $ = A.phase > 0.5 != b < 0, ut = Gt(Math.round(A.fraction * 100), s.locale) + "%", Et = N ?? K;
    return Et && Oe(Et, s), Xe({
      icon: ee.night,
      name: ht.moon,
      sub: ht.phases[G],
      callouts: [...N ? [[ht.callout.moonrise, Oe(N, s)]] : [], ...K ? [[ht.callout.moonset, Oe(K, s)]] : [], [ht.callout.lit, ut]],
      // at M, how much of it is lit (Matt, 10 Nov)
      zone: '<div class="wbMoonBox">' + zn(A.fraction, $, b < 0) + "</div>" + _i(xa(Gt(Math.round(A.fraction * 100), s.locale), "%"))
    });
  }
  function Vi(s, u) {
    var Mt;
    const h = ke(s, u, "wind_speed");
    if (!h || !ie(h.value)) return "";
    const b = ke(s, u, "wind_gust_speed"), A = ke(s, u, "wind_bearing"), P = A && ie(A.value) ? Number(A.value) : void 0, W = Pm(Number(h.value), (Mt = h.stateObj.attributes) == null ? void 0 : Mt.wind_speed_unit), G = Hi(s, h.stateObj, "wind_speed", h.value), N = P !== void 0 ? ht.cardinal[lm[((P + 11.25) / 22.5 | 0) % 16]] : void 0, K = b ? Bd(s, b.stateObj, "wind_gust_speed", b.value) : void 0, $ = [N ? Fe(ht.windFrom, { direction: N }) : void 0, W !== void 0 ? W + " " + ht.beaufort : void 0].filter(Boolean).join(" · ") || K, ut = (It, Tt) => {
      const st = (It - 90) * Math.PI / 180;
      return [100 + Tt * Math.cos(st), 100 + Tt * Math.sin(st)];
    }, Et = Array.from({ length: 36 }, (It, Tt) => Tt * 10).map((It) => {
      const Tt = It % 90 === 0, [st, Bt] = ut(It, 97), [Pt, ue] = ut(It, Tt ? 83 : 89);
      return '<line class="wbTick' + (Tt ? " wbMajor" : "") + '" x1="' + st + '" y1="' + Bt + '" x2="' + Pt + '" y2="' + ue + '"></line>';
    }).join(""), _t = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([It, Tt]) => {
      const [st, Bt] = ut(Tt, 64);
      return '<text class="wbLetter' + (It === "n" ? " wbNorth" : "") + '" x="' + st + '" y="' + Bt + '">' + bt(ht.cardinal[It]) + "</text>";
    }).join("");
    return Xe({ icon: ee.windy, name: ht.wind, sub: $, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + Et + _t + (P !== void 0 ? '<path class="wbMarker" transform="rotate(' + P + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + bt(G.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + bt(G.unit) + "</text></svg>" });
  }
  const zi = (s, u) => {
    if (s < 3) return ht.advice.fine;
    if (s < 8) return ht.advice.sunblock;
    const h = Date.now(), b = ot("hourly").find((A) => A.uv_index != null && new Date(A.datetime).getTime() > h && A.uv_index < 6);
    return b && new Date(b.datetime).toDateString() === (/* @__PURE__ */ new Date()).toDateString() ? Fe(ht.advice.avoidUntil, { time: Oe(new Date(b.datetime), u) }) : ht.advice.avoidToday;
  };
  function mn(s, u) {
    const h = ke(s, u, "uv_index");
    if (!h || !ie(h.value)) return "";
    const b = Number(h.value), A = ht.uvLevel[Rd(b)], P = /* @__PURE__ */ new Date();
    P.setHours(23, 59, 59, 999);
    const W = ot("hourly").filter(($) => $.uv_index != null && new Date($.datetime) > /* @__PURE__ */ new Date() && new Date($.datetime) <= P).reduce(($, ut) => !$ || ut.uv_index > $.uv ? { uv: ut.uv_index, time: new Date(ut.datetime) } : $, void 0), G = dm[Rd(b)], N = 216 * Math.min(1, Math.max(0.08, 0.4 + (b - 4.5) * (0.5 / 5.5))), K = '<svg class="wbUvArt" viewBox="0 0 216 198" preserveAspectRatio="xMinYMin slice" aria-hidden="true"><defs><radialGradient id="' + y + 'uv-sun" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="' + N.toFixed(1) + '"><stop offset="0" style="stop-color:color-mix(in srgb, ' + G + ' 28%, #fff6dd)"></stop><stop offset=".62" style="stop-color:color-mix(in srgb, ' + G + ' 62%, #fff6dd)"></stop><stop offset="1" style="stop-color:' + G + '"></stop></radialGradient></defs><circle class="wbUvSun" cx="0" cy="0" r="' + N.toFixed(1) + '" fill="url(#' + y + 'uv-sun)"></circle></svg><div class="wbUvBig"><span class="wbUvNum">' + bt(Gt(Math.round(b), s.locale)) + '</span><span class="wbUvWord">' + bt(A) + "</span></div>" + _i(xa(Gt(Math.round(b), s.locale), ""));
    return Xe({
      icon: ee.sunnyAlert,
      name: ht.metrics.uv_index,
      sub: W && W.uv > b ? Fe(ht.uvPeak, { level: A, uv_index: Gt(Math.round(W.uv), s.locale), time: Oe(W.time, s) }) : A,
      zone: K,
      cls: "wbUv",
      callouts: [zi(b, s), [ht.callout.now, Gt(Math.round(b), s.locale) + " · " + A], [ht.callout.peak, W && W.uv > b ? Gt(Math.round(W.uv), s.locale) + " at " + Oe(W.time, s) : ht.callout.now]]
    });
  }
  function Pr(s) {
    const u = ot("daily")[0], h = z.temperatureHistory;
    if (!u || new Date(u.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !ie(u.temperature) || !h || h.dailyHighs.length < Qh) return "";
    const b = Number(u.temperature), A = h.dailyHighs.reduce((Tt, st) => Tt + st, 0) / h.dailyHighs.length, P = Math.round(b - A) || 0, W = P > 0 ? "above" : P < 0 ? "below" : "same", G = [...h.days, { date: /* @__PURE__ */ new Date(), high: b, today: !0 }], N = G.map((Tt) => Tt.high).concat(A), K = Math.min(...N) - 1, $ = Math.max(...N) + 1, ut = (Tt) => (1 - (Tt - K) / ($ - K)) * 100, Et = (Tt) => (Tt + 0.5) / G.length * 100, _t = G.map((Tt, st) => [Et(st), ut(Tt.high)]), Mt = _t.map(([Tt, st], Bt) => (Bt ? "L" : "M") + Tt.toFixed(2) + " " + st.toFixed(2)).join(""), It = '<div class="wbCompareBars wbTrend" aria-hidden="true"><div class="wbTrendPlot"><svg viewBox="0 0 100 100" preserveAspectRatio="none"><defs><linearGradient id="' + y + 'trend" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--primary)" stop-opacity=".28"></stop><stop offset="1" style="stop-color:var(--primary)" stop-opacity="0"></stop></linearGradient></defs><path class="wbTrendArea" d="' + Mt + "L" + _t[_t.length - 1][0].toFixed(2) + " 100L" + _t[0][0].toFixed(2) + ' 100Z" fill="url(#' + y + 'trend)"></path><line class="wbAvgLine" x1="0" x2="100" y1="' + ut(A).toFixed(2) + '" y2="' + ut(A).toFixed(2) + '" vector-effect="non-scaling-stroke"></line><path class="wbTrendLine" d="' + Mt + '" vector-effect="non-scaling-stroke"></path></svg><span class="wbTrendAvg" style="top:' + ut(A).toFixed(2) + '%">' + bt(ce(s, A)) + "</span>" + G.map((Tt, st) => {
      const Bt = Tt.today ? " wbToday" : "", Pt = "left:" + Et(st).toFixed(2) + "%;top:" + ut(Tt.high).toFixed(2) + "%";
      return '<i class="wbTrendDot' + Bt + '" style="' + Pt + '"></i><span class="wbAvgValue' + Bt + '" style="' + Pt + '">' + bt(ce(s, Tt.high)) + "</span>";
    }).join("") + '</div><div class="wbTrendDays">' + G.map((Tt, st) => '<span class="wbAvgDay' + (Tt.today ? " wbToday" : "") + '" style="left:' + Et(st).toFixed(2) + '%">' + bt(vm(Tt.date, s)) + "</span>").join("") + "</div></div>";
    return Xe({
      icon: ee.chartLine,
      name: ht.metrics.compared_to_average,
      double: !0,
      sub: Fe(ht.highsLastDays, { days: h.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (P > 0 ? "+" : "") + bt(ce(s, P)) + '</div><div class="wbCompareWords">' + bt(ht.average[W]) + '</div><div class="wbCompareTemps">' + bt(Fe(ht.todayVsAverage, { today: ce(s, b), average: ce(s, A) })) + "</div></div>" + It + "</div>"
    });
  }
  function Gi(s, u) {
    const h = ke(s, u, "humidity");
    if (!h || !ie(h.value)) return "";
    const b = ke(s, u, "dew_point"), A = Math.max(0, Math.min(100, Number(h.value)));
    return Xe({
      icon: ee.waterPercent,
      name: ht.metrics.humidity,
      sub: b && ie(b.value) ? Fe(ht.dewPoint, { dew_point: ce(s, b.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + A + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + xa(Gt(Math.round(Number(h.value)), s.locale), "%") + "</div>"
    });
  }
  function Go(s, u) {
    var Tt, st, Bt;
    const h = ke(s, u, "pressure");
    if (!h || !ie(h.value)) return "";
    const b = Number(h.value), A = (Tt = h.stateObj.attributes) == null ? void 0 : Tt.pressure_unit, P = Pd(b, A), W = ((st = z.pressureHistory) == null ? void 0 : st.entityId) === h.stateObj.entity_id ? Pd(z.pressureHistory.value, A) : void 0;
    let G;
    if (P !== void 0 && W !== void 0) {
      const Pt = P - W;
      G = Pt >= kd ? "rising" : Pt <= -kd ? "falling" : "steady";
    }
    const N = Hi(s, h.stateObj, "pressure", Math.round(b)), K = h.stateObj, $ = (Pt) => A === "inHg" ? Math.round(Pt * 100) / 100 : Math.round(Pt), ut = (Pt) => Bd(s, K, "pressure", $(Pt)), Et = W !== void 0 ? z.pressureHistory.value : void 0, _t = Et !== void 0 ? $(b - Et) : void 0, Mt = (Bt = K.entity_id) != null && Bt.startsWith("weather.") ? ot("hourly").find((Pt) => ie(Pt.pressure) && new Date(Pt.datetime).getTime() >= Date.now() + 3 * te - 30 * Le) : void 0, It = [
      ...G ? [ht.advice[G]] : [],
      ...Et !== void 0 ? [[ht.callout.hoursAgo, ut(Et)], [ht.callout.change, (_t > 0 ? "+" : _t < 0 ? "−" : "") + ut(Math.abs(_t))]] : [],
      ...Mt ? [[ht.callout.inHours, ut(Number(Mt.pressure))]] : []
    ];
    return Xe({
      icon: ee.gauge,
      name: ht.metrics.pressure,
      sub: G ? ht.pressure[G] : void 0,
      cls: "wbPressure",
      callouts: It,
      zone: '<div class="wbTapeRow"><div class="wbTapeValue">' + xa(N.number) + '<span class="wbTapeUnit">' + bt(N.unit) + "</span></div>" + (P !== void 0 ? Gn(s, P) : "") + "</div>"
    });
  }
  function Gn(s, u) {
    const A = Math.floor(u) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (P, W) => A + W).map((P) => {
      const W = 100 - (P - u) * 9;
      if (W < 22 || W > 178) return "";
      const G = P % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(W - 100) / 100) + '"><line class="wbTapeTick" x1="' + (G ? 2 : 8) + '" x2="26" y1="' + W + '" y2="' + W + '"></line>' + (G ? '<text class="wbTapeLabel" x="33" y="' + W + '">' + bt(Gt(P, s.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + bt(ht.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + bt(ht.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function gn(s) {
    var N, K;
    const u = vl(s), h = u ? s.states[u] : void 0;
    if (!h || ((N = z.rain) == null ? void 0 : N.entityId) !== u || !ie(z.rain.change)) return "";
    const b = ((K = h.attributes) == null ? void 0 : K.unit_of_measurement) ?? "", A = rt(s, "hourly"), P = Date.now() + ra, W = ot("hourly").filter(($) => $.precipitation != null && new Date($.datetime).getTime() <= P), G = W.reduce(($, ut) => $ + Number(ut.precipitation), 0);
    return Xe({
      icon: ee.rainy,
      name: ht.metrics.precipitation,
      sub: A && W.length ? Fe(ht.rainExpected, { amount: Gt(G, s.locale, { maximumFractionDigits: 1 }) + " " + Wo(s, A, "precipitation") }) : ht.rainLast24h,
      visual: xa(Gt(z.rain.change, s.locale, { maximumFractionDigits: 1 }), b) + (W.length > 1 ? Wm(W.map(($) => ({ label: "", value: Number($.precipitation) }))) : "")
    });
  }
  function Hr(s, u) {
    const h = ke(s, u, "visibility");
    if (!h || !ie(h.value)) return "";
    const b = Hi(s, h.stateObj, "visibility", h.value), A = Bh(Number(h.value), Wo(s, h.stateObj, "visibility"));
    return Xe({
      icon: ee.eyeOutline,
      name: ht.metrics.visibility,
      sub: ht.visibilityLevel[Rh(A)],
      visual: '<div class="wbSea"><canvas class="wbSeaArt" data-wb-sea="' + A + '" aria-hidden="true"></canvas><div class="wbSeaFact">' + bt(Ui(s, A)) + '</div><div class="wbSeaValue">' + xa(b.number, b.unit) + "</div></div>"
    });
  }
  function Ui(s, u) {
    var P;
    const h = Eh((P = s.config) == null ? void 0 : P.country, u);
    if (h) return Fe(ht.visibilityLandmarks, { from: h.from, to: h.to });
    const b = u / am * 60;
    if (b < 60) {
      const W = b < 5 ? Math.max(1, Math.round(b)) : 5 * Math.round(b / 5);
      if (W < 60) return Fe(ht.walkMinutes, { minutes: Gt(W, s.locale) });
    }
    const A = Math.max(1, Math.round(b / 30) / 2);
    return A < 8 ? Fe(ht.walkHours, { hours: Gt(A, s.locale) }) : ht.walkDay;
  }
  function Yi(s) {
    z.categories === void 0 && Oa(s);
    const u = ye(s), h = (N) => N.map((K) => s.states[K]).filter(hn), b = h(u.air), A = h(u.pollen);
    if (!b.length && !A.length) return "";
    const P = [...b, ...A], W = (N) => A.includes(N) ? ee.flower : ee.airFilter, G = P.find((N) => N.entity_id === it.aq);
    return G ? Qa(s, G, W(G)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + bt(ht.airQuality) + '</h2></div><div class="wbAqTiles">' + P.map((N) => '<button class="wbTile" data-wb="aq-open" data-entity="' + bt(N.entity_id) + '"><span class="wbChip">' + yo(W(N)) + '</span><span class="wbText"><span class="wbName">' + bt(Fo(s, N)) + '</span><span class="wbSub">' + bt(bo(s, N)) + "</span></span></button>").join("") + "</div></div>";
  }
  function Qa(s, u, h) {
    var $, ut, Et;
    const b = (($ = u.attributes) == null ? void 0 : $.unit_of_measurement) ?? "", A = ((ut = u.attributes) == null ? void 0 : ut.device_class) === "pm25" && b === Cd && ie(u.state), P = Number(u.state), W = A ? Ci(P) : void 0, G = ((Et = z.aqHistory) == null ? void 0 : Et.entityId) === u.entity_id ? z.aqHistory.points : void 0, N = (_t) => Math.min(100, Math.max(0, _t / Ai * 100));
    let K;
    if (G && G.length > 1) K = Nd(G, (_t) => (Gt(_t, s.locale, { maximumFractionDigits: 1 }) + " " + b).trim());
    else if (W) {
      let _t = 0;
      const Mt = Bp.map(([It, Tt]) => {
        const st = N(Math.min(Tt, Ai)), Bt = Ad[It] + " " + _t + "% " + st + "%";
        return _t = st, Bt;
      });
      K = '<div class="wbScale" role="meter" aria-label="' + bt(ht.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + Ai + '" aria-valuenow="' + P + '" style="background:linear-gradient(to right, ' + Mt.join(", ") + ')"><i style="left:' + N(P) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + Ai + " " + Cd + "</span></div>";
    } else K = '<span class="wbGraphNote"><span>' + bt(bo(s, u)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + yo(h) + '</span><span class="wbText"><span class="wbName">' + bt(Fo(s, u)) + '</span><span class="wbSub">' + bt(bo(s, u)) + (W ? " · " + bt(ht.aqLevel[W]) : "") + '</span></span><button class="wbBack" title="' + bt(ht.back) + '" data-wb="aq-close">' + yo(ee.back) + '</button></div><div class="wbGraph">' + K + "</div></div></div>";
  }
  const Zi = { good: "Good", fair: "Fair", moderate: "Moderate", poor: "Poor", very_poor: "Very poor", extremely_poor: "Extremely poor" }, bn = (s) => s <= 50 ? "Good" : s <= 100 ? "Moderate" : s <= 150 ? "Unhealthy for some" : s <= 200 ? "Unhealthy" : s <= 300 ? "Very unhealthy" : "Hazardous";
  function ze(s) {
    const u = /* @__PURE__ */ new Map();
    return Object.values(s.states || {}).filter((h) => {
      var b;
      return h.entity_id.startsWith("sensor.") && Ii.includes(((b = h.attributes) == null ? void 0 : b.device_class) ?? "") && hn(h) && In(s, h.entity_id);
    }).sort((h, b) => h.entity_id.localeCompare(b.entity_id)).forEach((h) => {
      u.has(h.attributes.device_class) || u.set(h.attributes.device_class, h);
    }), Ii.map((h) => u.get(h)).filter(Boolean);
  }
  const wn = (s) => Object.values(s.states || {}).filter((u) => {
    var h, b;
    return u.entity_id.startsWith("sensor.") && hn(u) && In(s, u.entity_id) && (((b = (h = s.entities) == null ? void 0 : h[u.entity_id]) == null ? void 0 : b.translation_key) ?? u.entity_id).toLowerCase().includes("pollen");
  }), Aa = ["none", "very_low", "low", "moderate", "high", "very_high"], Co = (s) => ie(s.state) ? Number(s.state) : Aa.indexOf(String(s.state).toLowerCase().replace(/ /g, "_")), ia = (s) => {
    const u = String(s).replace(/_/g, " ");
    return u[0].toUpperCase() + u.slice(1);
  }, Uo = (s, u, h) => {
    const b = h ? s === "aqi" ? u <= 50 ? "good" : u <= 100 ? "moderate" : "poor" : s === "pm25" ? Ci(u) : null : null;
    return b === "good" || b === "fair" ? ht.advice.window : b === "moderate" || b === null ? ht.advice.fine : ht.advice.closed;
  }, Or = ["good", "fair", "moderate", "poor", "very_poor", "extremely_poor"], De = (s) => Or[s <= 50 ? 0 : s <= 100 ? 1 : s <= 150 ? 2 : s <= 200 ? 3 : s <= 300 ? 4 : 5], _o = "M43 43q1 8 0 10M77 42q1 8 -1 10", Ia = {
    good: [_o, "M34 69Q61 98 86 67"],
    fair: [_o, "M40 74Q61 89 81 72"],
    moderate: [_o, "M41 79Q60 76 80 81"],
    poor: [_o, "M41 85Q60 73 80 86"],
    very_poor: ["M36 38l13 5M84 37l-13 5M43 48q1 7 0 9M77 47q1 7 -1 9", "M37 90Q60 64 84 89"],
    extremely_poor: ["M37 41l12 11M49 41l-12 11M71 40l12 11M83 40l-12 11", "M36 84q6 -8 12 0t12 0t12 0t12 0"]
  }, Nr = (s) => '<svg class="wbAqFace" viewBox="0 0 120 120" aria-hidden="true"><path d="M60 9C89 8 112 32 110 61C109 90 87 112 58 111C30 110 9 88 10 59C11 31 33 10 63 12"></path><path class="wbAqEyes" d="' + Ia[s][0] + '"></path><path d="' + Ia[s][1] + '"></path></svg>';
  function Ir(s) {
    const u = ze(s), h = u[0];
    if (!h) return Xe({ icon: ee.airFilter, name: ht.airQuality, sub: ht.noAir, visual: xa("–", ""), cls: "wbBase" });
    const b = h.attributes.device_class, A = Number(h.state), P = ie(h.state), W = b === "aqi" && P ? bn(A) : b === "pm25" && P ? Zi[Ci(A)] : bo(s, h), G = P ? Gt(Math.round(A), s.locale) : String(h.state), N = b === "aqi" ? "AQI" : h.attributes.unit_of_measurement || "", K = P && b === "aqi" ? De(A) : P && b === "pm25" ? Ci(A) : null;
    return Xe(K ? {
      icon: ee.airFilter,
      name: ht.airQuality,
      sub: W,
      cls: "wbAqSmile",
      zone: '<div class="wbAqFill" style="background:' + Ad[K] + '">' + Nr(K) + '<div class="wbAqBig"><span class="wbAqNum">' + bt(G) + "</span>" + (N ? '<span class="wbAqUnit">' + bt(N) + "</span>" : "") + "</div></div>" + _i(xa(G, N)),
      callouts: [Uo(b, A, P), ...u.slice(1, 3).map(($) => [Fo(s, $), bo(s, $)])]
    } : {
      icon: ee.airFilter,
      name: ht.airQuality,
      sub: W,
      cls: "wbBase",
      zone: xa(G, N),
      callouts: [Uo(b, A, P), ...u.slice(1, 3).map(($) => [Fo(s, $), bo(s, $)])]
    });
  }
  const Ki = [
    ["wbSeed", '<svg viewBox="0 0 22 30" aria-hidden="true"><path d="M11 28V11" fill="none" stroke="currentColor" stroke-width="1"></path><path d="M11 11L3 6M11 11L5 2.5M11 11L8.5 1M11 11L13.5 1M11 11L17 2.5M11 11L19 6" fill="none" stroke="currentColor" stroke-width=".8" stroke-linecap="round"></path><circle cx="11" cy="28.5" r="1.4" fill="currentColor"></circle></svg>'],
    ["wbGrain", '<svg viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="3.3" fill="currentColor"></circle><path d="M6 1.2v1.4M6 9.4v1.4M1.2 6h1.4M9.4 6h1.4M2.6 2.6l1 1M8.4 8.4l1 1M2.6 9.4l1-1M8.4 3.6l1-1" stroke="currentColor" stroke-width=".9" stroke-linecap="round"></path></svg>'],
    ["wbStem", '<svg viewBox="0 0 10 30" aria-hidden="true"><path d="M5 29Q3.6 18 5 8" fill="none" stroke="currentColor" stroke-width="1"></path><ellipse cx="5" cy="6" rx="2.3" ry="4.6" fill="currentColor"></ellipse></svg>']
  ], Xi = (s) => {
    const u = [1, 3, 5, 7, 10, 13][Math.max(0, Math.min(5, Number.isFinite(s) ? Math.round(s) : 0))];
    return '<div class="wbPollenAir" aria-hidden="true">' + Array.from({ length: u }, (h, b) => {
      const [A, P] = Ki[b % 3], W = 10 + b * 7 % 9, G = 2.6 + b * 5 % 4 * 0.4;
      return '<span class="wbFloat ' + A + '" style="top:' + (4 + b * 37 % 52) + "%;--x:" + (b * 29 % 90 + 4) + "%;--s:" + (0.8 + b * 13 % 5 / 10).toFixed(1) + ";animation-duration:" + W + "s;animation-delay:-" + (b * 2.3 % W).toFixed(1) + 's"><span class="wbPush"><span class="wbBob" style="animation-duration:' + G.toFixed(1) + "s;animation-delay:-" + (b * 0.7 % G).toFixed(1) + 's">' + P + "</span></span></span>";
    }).join("") + "</div>";
  };
  function $i(s) {
    const u = wn(s).sort((A, P) => Co(P) - Co(A));
    if (!u.length) return Xe({ icon: ee.flower, name: ht.pollen, sub: ht.noPollen, visual: xa("–", ""), cls: "wbBase" });
    const h = u[0], b = (A) => ie(A.state) ? bo(s, A) : ia(A.state);
    return Xe({
      icon: ee.flower,
      name: ht.pollen,
      sub: Fo(s, h) + " · " + b(h),
      cls: "wbBase wbPollen",
      zone: Xi(Co(h)) + xa(b(h), ""),
      callouts: u.slice(0, 3).map((A) => [Fo(s, A), b(A)])
    });
  }
  function vn(s) {
    var G;
    const u = Date.now(), h = ot("hourly").filter((N) => {
      const K = new Date(N.datetime).getTime();
      return K > u - te && K < u + 12 * te;
    }), b = h.find((N) => (N.precipitation_probability ?? 0) >= 50 || (N.precipitation ?? 0) >= 0.2), A = b ? Fe(ht.rainFrom, { time: Oe(new Date(Math.max(u, new Date(b.datetime).getTime())), s) }) : h.length ? ht.noRain12 : void 0, P = (I == null ? void 0 : I()) || "rainviewer";
    let W;
    if (P.startsWith("camera:")) {
      const N = s.states[P.slice(7)], K = N && N.state !== "unavailable" && ((G = N.attributes) == null ? void 0 : G.entity_picture);
      W = K ? '<div class="wbRadar wbRadarCam" aria-hidden="true"><img class="wbRadarImg" src="' + bt(K) + '" data-src="' + bt(K) + '" alt=""></div>' : '<div class="wbRadar" aria-hidden="true"><span class="wbRadarNote">' + bt(ht.cameraOff) + "</span></div>";
    } else {
      const N = Nn(s);
      W = N ? '<div class="wbRadar wbRadarMap" aria-hidden="true" data-lat="' + N.lat + '" data-lon="' + N.lon + '"><i class="wbRadarHome"></i></div>' : '<div class="wbRadar" aria-hidden="true"><i class="wbRadarRing"></i><i class="wbRadarHome"></i><span class="wbRadarNote">' + bt(ht.noLocation) + "</span></div>";
    }
    return Xe({ icon: ee.radar, name: ht.rainRadar, sub: A, cls: "wbBase wbRadarTile", visual: W });
  }
  const Fr = {
    current: qt,
    hourly: jn,
    sun: Jt,
    moon: Rr,
    wind: Vi,
    uv_index: mn,
    compared_to_average: Pr,
    humidity: Gi,
    pressure: Go,
    precipitation: gn,
    visibility: Hr,
    air_quality: Yi,
    aq_tile: Ir,
    pollen_tile: $i,
    radar_tile: vn
  }, Un = [["day", "Last 24 hours", 1], ["week", "Last 7 days", 7], ["month", "Last 30 days", 30]], Yo = (s, u) => {
    var h;
    return u.toLocaleDateString((h = s.locale) == null ? void 0 : h.language, { day: "numeric", month: "short" });
  }, fe = (s) => {
    const u = new Date(s);
    return u.setMinutes(u.getMinutes() - u.getTimezoneOffset()), u.toISOString().slice(0, 10);
  }, sa = () => {
    const s = it.range, u = Date.now();
    if (s.preset !== "custom") {
      const A = Un.find(([P]) => P === s.preset)[2];
      return [u - A * ra, u];
    }
    const h = jo(/* @__PURE__ */ new Date(s.from + "T00:00")).getTime(), b = Math.min(u, jo(/* @__PURE__ */ new Date(s.to + "T00:00")).getTime() + ra);
    return [Math.min(h, b - te), b];
  }, Qt = (s) => {
    const u = it.range;
    if (u.preset !== "custom") return Un.find(([A]) => A === u.preset)[1];
    const [h, b] = sa();
    return u.from === u.to ? Yo(s, new Date(h)) : Yo(s, new Date(h)) + " – " + Yo(s, new Date(b - 1));
  }, To = () => it.range.preset === "custom" ? it.range.from + "_" + it.range.to : it.range.preset, Lo = (s, u) => u - s <= 2 * ra, Yn = (s, u, h, b) => Lo(h, b) ? Oe(u, s) : Yo(s, u), to = (s, u = 60) => {
    const h = Math.max(1, Math.ceil(s.length / u));
    return s.filter((b, A) => A % h === 0 || A === s.length - 1);
  }, qr = (s, u, h, b, A = !1) => s.callWS({
    type: "history/history_during_period",
    start_time: new Date(h).toISOString(),
    end_time: new Date(b).toISOString(),
    entity_ids: [u],
    minimal_response: A,
    no_attributes: A,
    significant_changes_only: !1
  }), Do = (s) => async (u, h, b, A) => {
    const P = ke(u, h, s);
    if (!P) return [];
    const W = P.stateObj.entity_id, G = await qr(u, W, b, A);
    return to(((G == null ? void 0 : G[W]) ?? []).map((N) => {
      var ut;
      const K = ((ut = N.a) == null ? void 0 : ut[s]) ?? (ie(N.s) ? Number(N.s) : void 0), $ = (N.lu ?? N.lc) * 1e3;
      return typeof K == "number" && $ >= b && $ <= A ? { t: new Date($), value: K } : null;
    }).filter(Boolean)).map((N) => ({ label: Yn(u, N.t, b, A), value: N.value }));
  }, Wr = (s, u) => async (h, b, A, P) => {
    const W = s(h);
    if (!W) return [];
    const G = W.entity_id, N = await qr(h, G, A, P, !0);
    return to(((N == null ? void 0 : N[G]) ?? []).map((K) => {
      const $ = u(K.s), ut = K.lu * 1e3;
      return $ == null || !Number.isFinite($) || ut < A || ut > P ? null : { t: new Date(ut), value: $ };
    }).filter(Boolean)).map((K) => ({ label: Yn(h, K.t, A, P), value: K.value }));
  }, Zo = (s, u) => async (h, b, A, P) => {
    const W = Nn(h);
    if (!W) return [];
    const G = [];
    if (Lo(A, P)) for (let N = A; N <= P; N += te / 2) G.push({ label: Oe(new Date(N), h), value: s(new Date(N), W) });
    else for (let N = P; N >= A; N -= ra) {
      const K = new Date(N), $ = u(K, W, h);
      $ != null && G.unshift({ label: Yo(h, K), value: $ });
    }
    return to(G);
  }, Ko = (s) => wn(s).sort((u, h) => Co(h) - Co(u))[0], ta = (s, u, h) => {
    const b = ke(s, u, h);
    return b ? Wo(s, b.stateObj, h) : "";
  }, Xo = {
    current: { name: () => ht.modes.temperature, icon: () => ee.sunny, load: Do("temperature"), fmt: (s, u, h) => ce(s, h), now: (s, u) => {
      var h;
      return ce(s, (h = ke(s, u, "temperature")) == null ? void 0 : h.value);
    } },
    sun: {
      name: () => ht.sun,
      icon: () => ee.sunny,
      load: Zo((s, u) => Math.round(qi(s, u.lat, u.lon) / Je), (s, u, h) => {
        const b = Pn(h, s);
        return b.rise && b.set ? Math.round((b.set - b.rise) / te * 10) / 10 : null;
      }),
      fmt: (s, u, h, b) => b ? Gt(h, s.locale) + "°" : Gt(h, s.locale) + " h",
      sub: (s) => s ? "How high the sun was" : "Hours of daylight a day"
    },
    moon: {
      name: () => ht.moon,
      icon: () => ee.night,
      load: Zo((s) => Math.round(wl(s).fraction * 100), (s) => Math.round(wl(s).fraction * 100)),
      fmt: (s, u, h) => Gt(h, s.locale) + "%",
      sub: () => "How much of it was lit"
    },
    uv_index: { name: () => ht.metrics.uv_index, icon: () => ee.sunnyAlert, load: Do("uv_index"), fmt: (s, u, h) => Gt(Math.round(h * 10) / 10, s.locale), now: (s, u) => {
      const h = ke(s, u, "uv_index");
      return h ? Gt(Number(h.value), s.locale) : "";
    } },
    humidity: { name: () => ht.metrics.humidity, icon: () => ee.waterPercent, load: Do("humidity"), fmt: (s, u, h) => Gt(Math.round(h), s.locale) + "%", now: (s, u) => {
      const h = ke(s, u, "humidity");
      return h ? Gt(Math.round(Number(h.value)), s.locale) + "%" : "";
    } },
    pressure: { name: () => ht.metrics.pressure, icon: () => ee.gauge, load: Do("pressure"), fmt: (s, u, h) => Gt(Math.round(h), s.locale) + " " + ta(s, u, "pressure"), now: (s, u) => {
      const h = ke(s, u, "pressure");
      return h ? Gt(Math.round(Number(h.value)), s.locale) + " " + ta(s, u, "pressure") : "";
    } },
    wind: { name: () => ht.wind, icon: () => ee.windy, load: Do("wind_speed"), fmt: (s, u, h) => Gt(Math.round(h), s.locale) + " " + ta(s, u, "wind_speed"), now: (s, u) => {
      const h = ke(s, u, "wind_speed");
      return h ? Gt(Math.round(Number(h.value)), s.locale) + " " + ta(s, u, "wind_speed") : "";
    } },
    visibility: { name: () => ht.metrics.visibility, icon: () => ee.eyeOutline, load: Do("visibility"), fmt: (s, u, h) => Gt(Math.round(h * 10) / 10, s.locale) + " " + ta(s, u, "visibility"), now: (s, u) => {
      const h = ke(s, u, "visibility");
      return h ? Gt(Number(h.value), s.locale) + " " + ta(s, u, "visibility") : "";
    } },
    aq_tile: {
      name: (s) => ze(s)[0] ? Fo(s, ze(s)[0]) : ht.airQuality,
      icon: () => ee.airFilter,
      load: Wr((s) => ze(s)[0], (s) => ie(s) ? Number(s) : null),
      fmt: (s, u, h) => {
        var P, W;
        const b = ze(s)[0], A = (P = b == null ? void 0 : b.attributes) == null ? void 0 : P.device_class;
        return Gt(Math.round(h * 10) / 10, s.locale) + (A === "aqi" ? " AQI" : (W = b == null ? void 0 : b.attributes) != null && W.unit_of_measurement ? " " + b.attributes.unit_of_measurement : "");
      },
      now: (s) => {
        const u = ze(s)[0];
        return u ? bo(s, u) : "";
      }
    },
    pollen_tile: {
      name: (s) => Ko(s) ? Fo(s, Ko(s)) : ht.pollen,
      icon: () => ee.flower,
      load: Wr(Ko, (s) => {
        const u = Co({ state: s });
        return u < 0 ? null : u;
      }),
      fmt: (s, u, h) => ia(Aa[Math.round(h)] || ""),
      now: (s) => {
        const u = Ko(s);
        return u ? ia(u.state) : "";
      }
    }
  }, Fa = {};
  let yn = null;
  async function fa(s) {
    const u = r == null ? void 0 : r();
    if (!u || !Xo[s]) return;
    const h = s + "|" + To(), [b, A] = sa();
    if (Fa[h] && Date.now() - Fa[h].at < 5 * Le) return;
    Fa[h] = { at: Date.now(), points: null };
    try {
      Fa[h].points = await Xo[s].load(u, Ct(u), b, A);
    } catch {
      Fa[h].points = [];
    }
    Ee(!0), yn === s && it.graph === s && (yn = null, wd(V.querySelector(".wbGraphCard")));
    const P = it.graph === s && V.querySelector(".wbGraph .wbChart");
    P && Lp(P, P.querySelector(".wbLine"), P.querySelectorAll(".wbArea"));
  }
  function jr(s, u) {
    const h = it.range, b = fe(Date.now()), [A, P] = sa(), W = h.pickFrom || fe(A), G = h.pickTo || fe(P - 1);
    return '<div class="wbRangePick" role="dialog" aria-label="Choose date range"><div class="wbRangePresets">' + Un.map(([N, K]) => '<button class="wbRangePreset" aria-pressed="' + (h.preset === N) + '" data-wb="graph-preset" data-range="' + N + '" data-wb-focus="graph-preset-' + N + '">' + bt(K) + "</button>").join("") + '</div><div class="wbRangeDates"><label><span>From</span><input type="date" data-range-from value="' + W + '" max="' + b + '"></label><label><span>To</span><input type="date" data-range-to value="' + G + '" max="' + b + '"></label></div><button class="wbRangeApply" data-wb="graph-apply" data-wb-focus="graph-apply">Show these dates</button></div>';
  }
  function Vr(s, u, h) {
    var ut;
    const b = Xo[h], [A, P] = sa(), W = Lo(A, P), G = (ut = Fa[h + "|" + To()]) == null ? void 0 : ut.points, N = Math.max(120, Math.min(520, innerWidth - (innerWidth <= 620 ? 0 : 32)) - 2 * 18 - 32), $ = G ? G.length > 1 ? Nd(G, (Et) => b.fmt(s, u, Et, W), 220, N) : '<span class="wbGraphNote"><span>No history for these dates</span></span>' : '<span class="wbGraphNote"><span>Loading…</span></span>';
    return '<div class="wbPopupBox"><div class="wbCard wbSquare wbGraphCard" role="dialog" aria-modal="true" aria-label="' + bt(b.name(s)) + '"><div class="wbHead"><div class="wbChip wbPlain">' + Rp(b.icon(s)) + '</div><div class="wbText"><span class="wbName">' + bt(b.name(s)) + '</span><span class="wbSub">' + bt(b.sub ? b.sub(W) : b.now ? b.now(s, u) : "") + '</span></div><button class="wbBack" title="Close" data-wb="graph-close" data-wb-focus="graph-close">' + yo(ee.close) + '</button></div><button class="wbRangeBtn" aria-haspopup="dialog" aria-expanded="' + !!it.picking + '" title="Choose date range" data-wb="graph-pick" data-wb-focus="graph-pick">' + yo(ee.calendar) + "<span>" + bt(Qt(s)) + "</span>" + yo(ee.chevronDown) + '</button><div class="wbGraph">' + $ + "</div></div>" + (it.picking ? jr() : "") + "</div>";
  }
  function Ee(s) {
    var Et, _t, Mt, It, Tt;
    const u = r == null ? void 0 : r();
    if (!u || lt) return;
    const h = Ct(u);
    xt(u, h), z.lastFetch || Xa();
    const b = ye(u), A = Hd(u), P = vl(u), W = [
      ...h.map((st) => u.states[st]),
      u.states["sun.sun"],
      A && u.states[A],
      P && u.states[P],
      ...b.air.map((st) => u.states[st]),
      ...b.pollen.map((st) => u.states[st]),
      ...et.some((st) => Q.includes(st)) ? [...ze(u), ...wn(u)] : [],
      u.locale,
      u.config,
      u.entities,
      Math.floor(Date.now() / Le)
    ];
    if (!s && pt && W.length === pt.length && W.every((st, Bt) => st === pt[Bt])) return;
    pt = W;
    const G = C.getRootNode(), N = G.activeElement || document.activeElement;
    for (const st of et) {
      const Bt = j[st];
      let Pt = "";
      try {
        Pt = Fr[st](u, h) || "";
      } catch {
        Pt = "";
      }
      if (Pt === Bt.html) continue;
      const ue = N && Bt.el.contains(N) ? (Et = N.dataset) == null ? void 0 : Et.wbFocus : void 0, St = Bt.el.querySelector(".wbStripScroll"), ne = St ? St.scrollLeft : null;
      Bt.html = Pt, Bt.el.hidden = !Pt, Bt.el.innerHTML = Pt;
      const oe = Bt.el.querySelector(".wbStripScroll");
      oe && ne != null ? oe.scrollTo({ left: ne }) : oe != null && oe.dataset.start && oe.scrollTo({ left: Number(oe.dataset.start) * oe.clientWidth / Number(oe.dataset.span) }), ue && !Y && ((_t = Bt.el.querySelector('[data-wb-focus="' + ue + '"]')) == null || _t.focus());
    }
    let K = "";
    if (it.graph)
      try {
        K = Vr(u, h, it.graph) || "";
      } catch {
        K = "";
      }
    if (K !== R) {
      const st = N && V.contains(N) ? (Mt = N.dataset) == null ? void 0 : Mt.wbFocus : void 0;
      R = K, V.innerHTML = K, V.hidden = !K, K && !V.isConnected && (C.closest("#app") || C).appendChild(V), st && !Y && ((It = V.querySelector('[data-wb-focus="' + st + '"]')) == null || It.focus({ preventScroll: !0 }));
    }
    ji(), C.querySelectorAll(".wbRadarMap").forEach((st) => {
      st._tiles || Bo(st);
    }), Y && ((Tt = C.querySelector('[data-wb-focus="' + Y + '"]') || V.querySelector('[data-wb-focus="' + Y + '"]')) == null || Tt.focus({ preventScroll: !0 }), Y = null);
    let $ = !1, ut = !1;
    for (const st of et) {
      const Bt = j[st], Pt = !Bt.el.hidden, ue = at[st] === "wide" || X.includes(st), St = et.indexOf(st) >= et.indexOf("moon"), ne = Pt && (St && ue && !$ || !ue && !ut);
      ne && ue && ($ = !0), ne && !ue && (ut = !0), Bt.el.toggleAttribute("data-break", ne);
    }
    la(performance.now());
  }
  function $o() {
    J || lt || (J = !0, queueMicrotask(() => {
      J = !1, Ee(!0);
    }));
  }
  function zr() {
    const s = getComputedStyle(C), u = (W) => s.getPropertyValue(W).trim(), h = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([W, G]) => {
      u(G) && (h[W] = u(G));
    });
    const b = u("--color-text-primary") || "#f1f1f1", A = u("--color-bg-card") || "#222222", P = !!C.closest(".light");
    return { colors: { ...Sa, ...h }, ink: P ? b : A, paper: P ? A : b };
  }
  const Zn = (s, u) => {
    var h;
    s.width !== u.w && (s.width = u.w), s.height !== u.h && (s.height = u.h), (h = s.getContext("2d")) == null || h.putImageData(new ImageData(u.data, u.w, u.h), 0, 0);
  }, eo = () => g && !gm();
  function Gr(s, u) {
    C.querySelectorAll("canvas[data-wb-strip]").forEach((h) => Kn(h, tt[h.dataset.wbStrip], s, u));
  }
  function Kn(s, u, h, b) {
    if (!u || !s.getClientRects().length) return;
    const A = s.clientWidth, P = s.clientHeight;
    if (!A || !P) return;
    const W = { width: A, height: P, columns: u.columns || vd, colors: b.colors, clock: h, ambient: eo(), seed: u.seed, soft: 1.5 };
    if (p === "smooth") {
      const G = Math.min(2, window.devicePixelRatio || 1), N = Math.round(A * G), K = Math.round(P * G);
      s.width !== N && (s.width = N), s.height !== K && (s.height = K);
      const $ = s.getContext("2d");
      if (!$) return;
      $.setTransform(G, 0, 0, G, 0, 0), uh($, u.segs, W);
    } else Zn(s, fh(u.segs, { ...W, px: 2, oneBit: p === "onebit", ink: b.ink, paper: b.paper }));
  }
  function la(s) {
    if (lt) return;
    const u = zr();
    if (p !== "smooth") {
      const h = eo();
      C.querySelectorAll("canvas[data-wb-wx]").forEach((b) => {
        b.getClientRects().length && Zn(b, Xu(zu(b.dataset.wbWx, u.colors), { size: Number(b.dataset.size) || 40, px: 2, oneBit: p === "onebit", colors: u.colors, ink: u.ink, paper: u.paper, clock: s, idle: h }));
      });
    }
    C.querySelectorAll("canvas[data-wb-sea]").forEach((h) => {
      const b = h.clientWidth, A = h.clientHeight, P = Number(h.dataset.wbSea), W = b + "x" + A + ":" + P + ":" + u.colors.skyClearDay;
      !b || !A || !(P > 0) || h.dataset.painted === W || (h.dataset.painted = W, Zn(h, Th(b, A, P, u.colors)));
    }), Gr(s, u);
  }
  function Ur(s) {
    if (gt = 0, !(lt || !eo())) {
      if (!document.hidden)
        if (p === "smooth") Gr(s, zr());
        else {
          const u = Math.floor(s / 100);
          u !== nt && (nt = u, la(s));
        }
      gt = requestAnimationFrame(Ur);
    }
  }
  function Eo() {
    C.classList.toggle("wbMotion", eo()), !gt && !lt && eo() && (gt = requestAnimationFrame(Ur));
  }
  function xn(s) {
    var h, b, A, P, W, G, N;
    if (s.target === V) {
      it.graph = void 0, it.picking = !1, Ee(!0);
      return;
    }
    const u = (b = (h = s.target).closest) == null ? void 0 : b.call(h, "[data-wb]");
    if (!u || !(C.contains(u) || V.contains(u))) {
      const K = (P = (A = s.target).closest) == null ? void 0 : P.call(A, ".wbItem"), $ = K == null ? void 0 : K.dataset.card;
      if (!K || !C.contains(K) || !Xo[$] || it.graph === $ || C.closest(".tfEditing") || $ === "current" && w) return;
      it.graph = $, it.picking = !1, Y = "graph-close", Ee(!0), (W = Fa[$ + "|" + To()]) != null && W.points ? wd(V.querySelector(".wbGraphCard")) : yn = $, fa($);
      return;
    }
    switch (u.dataset.wb) {
      case "day": {
        it.openDay = Number(u.dataset.index), it.opener = u.dataset.wbFocus, Y = "back-day";
        const K = Vt()[it.openDay], $ = !z.todayHistory || z.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - z.todayHistory.fetched > Gh;
        K && Rn(new Date(K.datetime), /* @__PURE__ */ new Date()) && $ && Vo();
        break;
      }
      case "close-day":
        it.openDay = void 0, Y = it.opener, it.opener = void 0;
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
        const K = C.querySelector(".wbStripScroll");
        K && K.scrollTo({ left: Number(u.dataset.hours) * K.clientWidth / Number(K.dataset.span), behavior: "smooth" });
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
        it.picking = !it.picking, Y = it.picking ? "graph-preset-" + (it.range.preset === "custom" ? "day" : it.range.preset) : "graph-pick";
        break;
      case "graph-preset":
        it.range = { preset: u.dataset.range }, it.picking = !1, Y = "graph-pick", Ee(!0), fa(it.graph);
        return;
      case "graph-apply": {
        let K = it.range.pickFrom || ((G = C.querySelector("[data-range-from]")) == null ? void 0 : G.value), $ = it.range.pickTo || ((N = C.querySelector("[data-range-to]")) == null ? void 0 : N.value);
        if (!K || !$) return;
        K > $ && ([K, $] = [$, K]), it.range = { preset: "custom", from: K, to: $ }, it.picking = !1, Y = "graph-pick", Ee(!0), fa(it.graph);
        return;
      }
      default:
        return;
    }
    Ee(!0);
  }
  function Ne(s) {
    var u, h, b, A, P, W;
    s.key === "Escape" && it.openDay !== void 0 && ((h = (u = s.target).closest) != null && h.call(u, '[data-wb-open="day"]')) ? (it.openDay = void 0, Y = it.opener, it.opener = void 0, Ee(!0)) : s.key === "Escape" && it.picking && ((A = (b = s.target).closest) != null && A.call(b, ".wbGraphCard")) ? (it.picking = !1, Y = "graph-pick", Ee(!0)) : s.key === "Escape" && it.graph && ((W = (P = s.target).closest) != null && W.call(P, ".wbGraphCard")) && (it.graph = void 0, Ee(!0));
  }
  let ua = null;
  function kn(s) {
    var h, b;
    const u = (b = (h = s.target).closest) == null ? void 0 : b.call(h, ".wbStripScroll");
    !u || s.button !== 0 || (ua = { startX: s.pageX, left: u.scrollLeft, moved: !1 }, u.classList.add("wbHeld"), window.addEventListener("mousemove", Mn), window.addEventListener("mouseup", Yr, { once: !0 }));
  }
  function Mn(s) {
    const u = C.querySelector(".wbStripScroll");
    if (!ua || !u) return;
    const h = s.pageX - ua.startX;
    !ua.moved && Math.abs(h) > 1 && (ua.moved = !0, u.classList.add("wbDragging")), u.scrollLeft = ua.left - h;
  }
  function Yr() {
    ua = null, window.removeEventListener("mousemove", Mn);
    const s = C.querySelector(".wbStripScroll");
    if (!s) return;
    s.classList.remove("wbDragging", "wbHeld");
    const u = [...s.querySelectorAll(".wbSnap")];
    if (u.length) {
      const h = u.reduce((b, A) => Math.abs(A.offsetLeft - s.scrollLeft) < Math.abs(b.offsetLeft - s.scrollLeft) ? A : b);
      s.scrollTo({ left: h.offsetLeft, behavior: "smooth" });
    }
  }
  const Jo = (s) => {
    var h, b;
    const u = s.target;
    (h = u.matches) != null && h.call(u, "[data-range-from]") ? it.range.pickFrom = u.value : (b = u.matches) != null && b.call(u, "[data-range-to]") && (it.range.pickTo = u.value);
  };
  C.addEventListener("change", Jo), C.addEventListener("click", xn), C.addEventListener("keydown", Ne), V.addEventListener("change", Jo), V.addEventListener("click", xn), V.addEventListener("keydown", Ne), C.addEventListener("mousedown", kn);
  const Zr = 64, Ji = 30;
  let ha = null, Ca = 0;
  const ao = () => {
    Ca = 0, C.querySelectorAll(".wbPollen .wbPush").forEach((s) => {
      let u = 0, h = 0;
      if (ha) {
        const b = s.parentElement.getBoundingClientRect(), A = b.left + b.width / 2 - ha.x, P = b.top + b.height / 2 - ha.y, W = Math.hypot(A, P) || 1;
        if (W < Zr) {
          const G = (1 - W / Zr) * Ji;
          u = A / W * G, h = P / W * G;
        }
      }
      s.style.transform = u || h ? "translate(" + u.toFixed(1) + "px," + h.toFixed(1) + "px)" : "";
    }), ha && (Ca = requestAnimationFrame(ao));
  }, Kr = (s) => {
    var h, b;
    if (!((b = (h = s.target).closest) == null ? void 0 : b.call(h, ".wbPollen")) || Te != null && Te.matches) {
      ha && (ha = null, Ca || (Ca = requestAnimationFrame(ao)));
      return;
    }
    ha = { x: s.clientX, y: s.clientY }, Ca || (Ca = requestAnimationFrame(ao));
  }, qa = () => {
    ha = null, Ca || (Ca = requestAnimationFrame(ao));
  };
  C.addEventListener("pointermove", Kr), C.addEventListener("pointerleave", qa);
  const ca = typeof ResizeObserver == "function" ? new ResizeObserver(() => la(performance.now())) : null;
  ca == null || ca.observe(C);
  const ma = typeof ResizeObserver == "function" ? new ResizeObserver((s) => s.forEach((u) => {
    const h = u.target;
    h._tiles && (h.clientWidth !== h._w || h.clientHeight !== h._h) && Bo(h);
  })) : null;
  function Bo(s) {
    var W;
    const u = s.clientWidth, h = s.clientHeight;
    if (!u || !h || lt) return;
    const b = im(Number(s.dataset.lat), Number(s.dataset.lon), u, h), A = !!((W = C.closest("#app")) != null && W.classList.contains("light")), P = (G) => ' style="left:' + G.left + "px;top:" + G.top + 'px"';
    s._tiles = b, s._w = u, s._h = h, s._frames = null, s._built = Date.now(), s.innerHTML = '<div class="wbRadarLayer wbRadarBase">' + b.map((G) => '<img src="https://' + "abcd"[(G.x + G.y) % 4] + ".basemaps.cartocdn.com/" + (A ? "light_all" : "dark_all") + "/" + El + "/" + G.x + "/" + G.y + '.png"' + P(G) + ' alt="">').join("") + '</div><div class="wbRadarFrames"></div><i class="wbRadarHome"></i><span class="wbRadarTime"></span><span class="wbRadarCredit">© OpenStreetMap · CARTO · RainViewer</span>', ma == null || ma.observe(s), rm().then((G) => {
      !s.isConnected || lt || s._tiles !== b || (s.querySelector(".wbRadarFrames").innerHTML = G.frames.map((N, K) => '<div class="wbRadarLayer wbRadarRain" data-i="' + K + '" hidden>' + b.map(($) => '<img src="' + G.host + N.path + "/" + wo + "/" + El + "/" + $.x + "/" + $.y + '/2/1_1.png"' + P($) + ' alt="">').join("") + "</div>").join(""), s._frames = G.frames, s._hold = 0, Sn(s, G.frames.findLastIndex((N) => N.past)));
    }).catch(() => {
      s.isConnected && (s.querySelector(".wbRadarTime").textContent = ht.radarOff);
    });
  }
  function Sn(s, u) {
    const h = s._frames;
    if (!(h != null && h.length)) return;
    s._i = u, s.querySelectorAll(".wbRadarRain").forEach((A) => {
      A.hidden = Number(A.dataset.i) !== u;
    });
    const b = h[u];
    s.querySelector(".wbRadarTime").textContent = Oe(new Date(b.time * 1e3), r == null ? void 0 : r()) + (b.past ? "" : " · " + ht.forecastTag);
  }
  function Qi() {
    C.querySelectorAll(".wbRadarMap").forEach((s) => {
      if (!s._frames) return;
      if (Date.now() - s._built > Ep) {
        Bo(s);
        return;
      }
      if (Te != null && Te.matches) return;
      if (s._hold > 0) {
        s._hold -= Md;
        return;
      }
      const u = s._frames.length - 1, h = s._frames.findLastIndex((A) => A.past), b = s._i >= u ? 0 : s._i + 1;
      Sn(s, b), (b === h || b === u) && (s._hold = nm);
    });
  }
  const ts = () => C.querySelectorAll(".wbRadarImg").forEach((s) => {
    const u = s.dataset.src;
    s.src = u + (u.includes("?") ? "&" : "?") + "hc=" + Date.now();
  }), oo = typeof MutationObserver == "function" ? new MutationObserver(() => C.querySelectorAll(".wbRadarMap").forEach((s) => {
    s._tiles && Bo(s);
  })) : null, Xr = C.closest("#app");
  Xr && (oo == null || oo.observe(Xr, { attributes: !0, attributeFilter: ["class"] }));
  const Te = (Jn = window.matchMedia) == null ? void 0 : Jn.call(window, "(prefers-reduced-motion: reduce)"), Xn = () => {
    Eo(), la(performance.now());
  };
  ($r = Te == null ? void 0 : Te.addEventListener) == null || $r.call(Te, "change", Xn);
  const $n = [
    setInterval(() => {
      Ot = /* @__PURE__ */ new Date(), Ee(!0);
    }, tm),
    setInterval(() => {
      F = /* @__PURE__ */ new Date(), Ee(!0);
    }, em),
    setInterval(Xa, $h),
    setInterval(Qi, Md),
    setInterval(ts, Le)
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
      !s || s === p || (p = s, C.dataset.style = p, V.dataset.style = p, Ee(!0), Eo());
    },
    destroy() {
      var s;
      cancelAnimationFrame(Ca), C.removeEventListener("pointermove", Kr), C.removeEventListener("pointerleave", qa), lt = !0, $n.forEach(clearInterval), gt && cancelAnimationFrame(gt), gt = 0, ca == null || ca.disconnect(), ma == null || ma.disconnect(), oo == null || oo.disconnect(), (s = Te == null ? void 0 : Te.removeEventListener) == null || s.call(Te, "change", Xn), Yr(), C.removeEventListener("click", xn), C.removeEventListener("change", Jo), C.removeEventListener("keydown", Ne), C.removeEventListener("mousedown", kn), V.removeEventListener("click", xn), V.removeEventListener("change", Jo), V.removeEventListener("keydown", Ne), ["daily", "hourly"].forEach(vt), C.remove(), V.remove();
    }
  };
}
const Ar = "#E1E1E1", qd = "#F7F4F0", yl = "#03a9f4", Kt = 14, $t = 172;
let Um = 0;
const pe = (o) => Math.round(o * 100) / 100, Ka = (o, r, d) => Math.max(r, Math.min(d, o)), Mo = (o, r, d, p, g, v) => '<rect x="' + pe(o) + '" y="' + pe(r) + '" width="' + pe(d) + '" height="' + pe(p) + '" fill="' + g + '"' + (v != null ? ' opacity="' + v + '"' : "") + "/>", xl = (o) => o.map((r, d) => (d ? "L" : "M") + pe(r[0]) + " " + pe(r[1])).join("");
function kl(o) {
  const r = (o == null ? void 0 : o.attributes) || {};
  return r.device_class === "curtain" ? "curtain" : r.device_class === "blind" || r.current_tilt_position != null ? "venetian" : "blind";
}
const qo = [
  [2, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]],
  [6.5, ["#0B0F1C", "#2E7FD6", "#F2743B", "#F1B6C8", 0.95]],
  [9.5, ["#8FC4EC", "#4DA3E8", "#F4FAFF", "#2F7FCF", 0.7]],
  [13, ["#9ED3F6", "#3F97E6", "#FFFFFF", "#2B86D9", 0.65]],
  [17, ["#9FC2E4", "#4A8ED4", "#FFD9B8", "#5E8FD6", 0.75]],
  [19, ["#4B5E86", "#3B86E0", "#FF6A3D", "#B07CE8", 0.95]],
  [21.5, ["#1A2140", "#1F3F7A", "#B4506E", "#3E59A6", 0.8]],
  [26, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]]
];
function Ym(o) {
  const r = o < 2 ? o + 24 : o;
  let d = qo[0], p = qo[qo.length - 1];
  for (let S = 0; S < qo.length - 1; S++) if (r >= qo[S][0] && r <= qo[S + 1][0]) {
    d = qo[S], p = qo[S + 1];
    break;
  }
  const g = (r - d[0]) / (p[0] - d[0]), v = g * g * (3 - 2 * g), w = (S, I) => {
    const y = parseInt(S.slice(1), 16), C = parseInt(I.slice(1), 16);
    return "#" + [16, 8, 0].map((O) => Math.round((y >> O & 255) + ((C >> O & 255) - (y >> O & 255)) * v).toString(16).padStart(2, "0")).join("");
  };
  return { top: w(d[1][0], p[1][0]), bot: w(d[1][1], p[1][1]), warm: w(d[1][2], p[1][2]), cool: w(d[1][3], p[1][3]), op: d[1][4] + (p[1][4] - d[1][4]) * v, t: r };
}
function Zm(o) {
  const r = parseInt(o.slice(1), 16), d = (r >> 16 & 255) / 255, p = (r >> 8 & 255) / 255, g = (r & 255) / 255, v = Math.max(d, p, g), w = Math.min(d, p, g);
  let S = 0, I = 0;
  const y = (v + w) / 2;
  if (v !== w) {
    const C = v - w;
    I = y > 0.5 ? C / (2 - v - w) : C / (v + w), S = (v === d ? (p - g) / C + (p < g ? 6 : 0) : v === p ? (g - d) / C + 2 : (d - p) / C + 4) / 6;
  }
  return [S * 360, I * 100, y * 100];
}
function Gp(o, r, d) {
  r = Ka(r, 0, 100) / 100, d = Ka(d, 0, 100) / 100;
  const p = (w) => (w + o / 30) % 12, g = r * Math.min(d, 1 - d), v = (w) => d - g * Math.max(-1, Math.min(p(w) - 3, Math.min(9 - p(w), 1)));
  return "#" + [v(0), v(8), v(4)].map((w) => Math.round(w * 255).toString(16).padStart(2, "0")).join("");
}
const [Up, Yp, Zp] = Zm(Ar), Wd = Gp(Up, Yp, Math.max(6, Zp - 14)), Km = Gp(Up, Yp, Math.min(96, Zp + 16));
function Xm(o, r, d, p, g) {
  const v = $t / 2, w = $t * 0.12, S = v - (v - w) * o, I = (et) => et ** 1.3, y = Ka(d, -1.5, 1.5), C = (et) => -(Math.abs(y) * 4.6 * et ** 1.5) * Math.sign(y), O = o * 1.4, V = (et, at) => {
    const X = Math.min(4.8, Math.abs(d) * 2.6) * (at ? 1 : -1) * Math.sign(d || 1), j = at ? et + S : et, lt = at ? et : et + S, pt = (wt) => j + C(wt) + X * Math.sin(wt * Math.PI * 1.2 + p) * I(wt) * 1.4 + O * Math.sin(wt * Math.PI * 2 + p * 0.6) * I(wt) * (at ? 1 : -1), gt = [[lt, Kt]];
    for (let wt = 0; wt <= 12; wt++) gt.push([pt(wt / 12), Kt + $t * wt / 12]);
    gt.push([lt, Kt + $t]);
    let nt = '<path d="' + xl(gt) + 'Z" fill="' + Ar + '"/>';
    if (g) return nt;
    const J = 1.35 + ((at ? d > 0 : d < 0) ? 0.35 : 0), Y = (wt) => {
      const Dt = wt / 7, it = at ? 1 - Dt : Dt, z = (1 - it) ** 1.3, Ot = et + S * Dt;
      return Array.from({ length: 13 }, (F, tt) => {
        const D = tt / 12;
        return [Ot + C(D) * z + X * J * Math.sin(D * Math.PI * 1.2 + p - it * 3.2) * I(D) * 1.4 * z + O * 1.6 * Math.sin(D * Math.PI * 2 + p * 0.6 - it * 2.5) * I(D) * o * (0.4 + 0.6 * z), Kt + $t * D];
      });
    }, R = [1, 2, 3, 4, 5, 6].map(Y);
    for (let wt = 0; wt < 6; wt += 2) nt += '<path d="' + xl(R[wt]) + xl(R[wt + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return nt;
  }, Q = v - (v - w) * r;
  return { body: V(Kt, !0) + V(Kt + $t - S, !1), rails: [{ x: Kt + Q - 4, y: Kt, w: 4, h: $t }, { x: Kt + $t - Q, y: Kt, w: 4, h: $t }], head: 6.4 };
}
function $m(o, r, d) {
  const p = $t * (1 - o);
  let g = "";
  if (p > 1 && (g += Mo(Kt, Kt, $t, p, Ar), !d))
    for (let v = 1; v < 7; v += 2) g += Mo(Kt + $t * v / 7, Kt, $t / 7, p, "#fff");
  return { body: g, rails: [{ x: Kt, y: Kt + $t * (1 - r) - 7, w: $t, h: 11 }], head: 10.4 };
}
function Jm(o, r, d, p) {
  const g = 9 - 7 * (d / 100), v = Kt + $t * (1 - o), w = Math.ceil($t / 10) + 1, S = Kt + g / 2, I = (Kt + $t - g / 2 - S) / (w - 1), y = 0.8, C = 0.6, O = Array.from({ length: w }, (et, at) => Math.max(S + at * C, Math.min(S + at * I, v - g / 2 - (w - 1 - at) * C))), V = O.slice(0, -1).map((et, at) => Ka((O[at + 1] - et - C) / (I - C), 0, 1));
  V.push(V[w - 2]);
  let Q = "";
  return O.forEach((et, at) => {
    const X = y + (g - y) * V[at], j = Math.max(0.5, X / 2), lt = Math.max(0.4, X * 0.114);
    Q += Mo(Kt, et - j, $t, Math.max(1, X), Ar), !p && X > 2.2 && (Q += Mo(Kt, et + j - lt, $t, lt, Wd) + Mo(Kt, et - j, $t, lt * 0.55, Km, 0.75));
  }), p || [0.22, 0.78].forEach((et) => {
    Q += Mo(Kt + $t * et - 0.7, Kt, 1.4, Math.max(0, O[w - 1] + 1 - Kt), Wd, 0.85);
  }), { body: Q, rails: [{ x: Kt, y: Kt + $t * (1 - r) - 8, w: $t, h: 8 }], head: 8.8 };
}
const jd = (o, r, d, p, g, v, w) => o === "curtain" ? Xm(r, d, g, v, w) : o === "venetian" ? Jm(r, d, p, w) : $m(r, d, w);
function Qm(o, r) {
  let d = "", p = "";
  return r.forEach((g) => {
    const v = g.w > g.h, w = Ka(v ? Kt + $t / 2 : g.x + g.w / 2, 17, 183), S = Ka(v ? g.y + g.h / 2 : Kt + $t / 2, 17, 183);
    d += v ? Mo(Kt, Ka(g.y + g.h / 2, Kt, Kt + $t) - 1, $t, 2, yl) : Mo(Ka(g.x + g.w / 2, Kt, Kt + $t) - 1, Kt, 2, $t, yl);
    const I = v ? "M" + pe(w - 4) + " " + pe(S - 3) + "l4 -3l4 3M" + pe(w - 4) + " " + pe(S + 3) + "l4 3l4 -3" : "M" + pe(w - 3) + " " + pe(S - 4) + "l-3 4l3 4M" + pe(w + 3) + " " + pe(S - 4) + "l3 4l-3 4";
    p += '<circle cx="' + pe(w) + '" cy="' + pe(S) + '" r="11" fill="' + yl + '" filter="url(#' + o + 's)"/><path d="' + I + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: d, knobs: p };
}
function t0(o, r) {
  const d = /* @__PURE__ */ new Date(), p = Ym(d.getHours() + d.getMinutes() / 60), g = 42 + 18 * Math.sin(p.t * 0.5), v = p.t >= 5 && p.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (p.t - 5) / 15) : 80, w = jd(r.kind, r.pos / 100, r.bar / 100, r.tilt, r.vel, r.ph, !1), S = r.ghostAlpha > 4e-3 && r.ghost != null ? jd(r.kind, r.ghost / 100, r.ghost / 100, r.tilt, 0, 0, !0).body : "", I = r.grip > 4e-3 ? Qm(o, w.rails) : null, y = (C) => Mo(Kt, Kt, $t, $t, C);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + o + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + o + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + p.top + '"/><stop offset="1" stop-color="' + p.bot + '"/></linearGradient><radialGradient id="' + o + 'w" cx="' + pe(g) + '%" cy="' + pe(v) + '%" r="58%"><stop offset="0" stop-color="' + p.warm + '" stop-opacity="' + pe(p.op * 0.8) + '"/><stop offset="1" stop-color="' + p.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + o + 'k" cx="' + pe(100 - g * 0.8) + '%" cy="' + pe(100 - v * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + p.cool + '" stop-opacity="' + pe(p.op * 0.64) + '"/><stop offset="1" stop-color="' + p.cool + '" stop-opacity="0"/></radialGradient><filter id="' + o + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + qd + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + o + 'c)">' + y("url(#" + o + "l)") + y("url(#" + o + "w)") + y("url(#" + o + "k)") + (S ? '<g opacity="' + pe(r.ghostAlpha) + '">' + S + "</g>" : "") + w.body + '<rect x="14" y="14" width="172" height="' + w.head + '" fill="' + Ar + '" filter="url(#' + o + 's)"/></g>' + (I ? '<g clip-path="url(#' + o + 'c)" opacity="' + pe(r.grip) + '">' + I.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + qd + '" stroke-width="3"/>' + (I ? '<g opacity="' + pe(r.grip) + '">' + I.knobs + "</g>" : "") + "</svg>";
}
function e0({ onMove: o, onSet: r }) {
  var nt;
  const d = "cv" + ++Um, p = document.createElement("div");
  p.className = "tfCoverArt";
  const g = (nt = window.matchMedia) == null ? void 0 : nt.call(window, "(pointer: coarse)").matches;
  let v = null;
  const w = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let S = 0, I = !1, y = !1, C = null, O = 0, V = 0;
  const Q = () => (v == null ? void 0 : v.kind) === "curtain" ? "x" : "y", et = () => C || I || y || v.moving || v.target != null ? 1 : g ? performance.now() < V ? 1 : 0.4 : 0, at = () => {
    p.innerHTML = t0(d, { kind: v.kind, pos: w.pos, bar: v.target ?? w.pos, tilt: w.tilt, vel: w.vel, ph: w.ph, ghost: w.gpos, ghostAlpha: w.ghost, grip: w.grip });
  };
  function X(J) {
    S = 0;
    const Y = w.last ? Math.min(0.064, (J - w.last) / 1e3) : 1 / 60, R = Y * 60;
    w.last = J;
    const wt = v.pos - w.pos, Dt = w.pos;
    w.pos += Math.sign(wt) * Math.min(Math.abs(wt), Math.max(10.5, Math.abs(wt) * 1.4) * Y), Math.abs(v.pos - w.pos) < 0.03 && (w.pos = v.pos), w.vel = w.vel * 0.86 + (w.pos - Dt) / R * 0.14, Math.abs(w.vel) < 0.015 && w.pos === v.pos && (w.vel = 0), (w.pos !== Dt || w.vel) && (w.ph += (0.06 + Math.abs(w.vel) * 0.03) * R);
    const it = v.tilt - w.tilt;
    w.tilt += Math.sign(it) * Math.min(Math.abs(it), Math.max(60, Math.abs(it) * 4) * Y);
    const z = et();
    w.grip += (z - w.grip) * Math.min(1, Y * (z > w.grip ? 11 : 3.5)), Math.abs(z - w.grip) < 0.01 && (w.grip = z);
    const Ot = v.target != null && Math.abs(v.target - w.pos) > 0.5 ? 0.22 : 0;
    v.target != null && (w.gpos = v.target), w.ghost += (Ot - w.ghost) * Math.min(1, Y * (Ot > w.ghost ? 16 : 3)), Math.abs(Ot - w.ghost) < 4e-3 && (w.ghost = Ot), at(), w.pos !== v.pos || w.vel || w.tilt !== v.tilt || w.grip !== z || w.ghost !== Ot ? S = requestAnimationFrame(X) : w.last = 0;
  }
  const j = () => {
    v && !S && (S = requestAnimationFrame(X));
  }, lt = setInterval(() => {
    v && !S && at();
  }, 60 * 1e3), pt = (J) => {
    const Y = p.getBoundingClientRect();
    return Q() === "x" ? (J.clientX - Y.left) / Y.width : (J.clientY - Y.top) / Y.height;
  };
  p.addEventListener("pointerdown", (J) => {
    var wt;
    if (!(v != null && v.canSet) || J.button > 0) return;
    J.preventDefault(), (wt = p.setPointerCapture) == null || wt.call(p, J.pointerId);
    const Y = v.target ?? v.pos, R = p.getBoundingClientRect();
    C = { p0: pt(J), from: Y, x0: J.clientX, value: null, side: null }, v.kind === "curtain" && Y > 0 && (C.side = (J.clientX - R.left) / R.width < 0.5 ? "L" : "R"), j();
  }), p.addEventListener("pointermove", (J) => {
    if (!C) return;
    let Y;
    if (v.kind === "curtain") {
      if (!C.side) {
        const wt = J.clientX - C.x0;
        if (Math.abs(wt) < 4) return;
        C.side = wt < 0 ? "L" : "R";
      }
      const R = ($t / 2 - $t * 0.12) / 200;
      Y = C.from + (C.side === "L" ? -1 : 1) * ((pt(J) - C.p0) / R) * 100;
    } else Y = C.from - (pt(J) - C.p0) / ($t / 200) * 100;
    C.value = Ka(Y, 0, 100), o(C.value);
  });
  const gt = () => {
    if (!C) return;
    const J = C.value;
    C = null, J != null && r(Math.round(J)), j();
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
    const Y = Math.round(v.target ?? v.pos), R = J.shiftKey ? 10 : 1, wt = { ArrowUp: Y + R, ArrowRight: Y + R, ArrowDown: Y - R, ArrowLeft: Y - R, PageUp: Y + 25, PageDown: Y - 25, Home: 0, End: 100 }[J.key];
    if (wt == null) return;
    J.preventDefault();
    const Dt = Ka(wt, 0, 100);
    o(Dt), clearTimeout(O), O = setTimeout(() => r(Dt), 500);
  }), {
    el: p,
    update(J) {
      const Y = !v;
      v = J, Y && (w.pos = v.pos, w.tilt = v.tilt, V = performance.now() + 1500, g && setTimeout(j, 1600)), p.classList.toggle("x", Q() === "x"), p.classList.toggle("y", Q() === "y"), v.canSet ? (p.tabIndex = 0, p.setAttribute("role", "slider"), p.setAttribute("aria-valuemin", "0"), p.setAttribute("aria-valuemax", "100"), p.setAttribute("aria-valuenow", String(Math.round(v.target ?? v.pos))), p.setAttribute("aria-orientation", Q() === "x" ? "horizontal" : "vertical")) : p.setAttribute("role", "img"), p.setAttribute("aria-label", v.name + (v.canSet ? " position" : "")), p.setAttribute("aria-valuetext", v.text), j();
    },
    destroy() {
      cancelAnimationFrame(S), S = 0, clearInterval(lt), clearTimeout(O), p.remove();
    }
  };
}
const Vd = "homecore-density", Ua = {
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
}, q = (o) => String(o ?? "").replace(/[&<>"']/g, (r) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[r]), zd = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', Gd = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', Ud = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', Ti = {
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h2v12H6zM9.5 12L18 18V6z"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>'
}, Yd = {
  down: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 11h14v2H5z"/></svg>',
  up: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z"/></svg>'
}, Zd = 1, a0 = 4, Kd = 16, Xd = 32, o0 = 128, n0 = 256, $d = 16384, r0 = 1, i0 = 2, Jd = 4, s0 = 8, l0 = {
  open: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/></svg>',
  stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5" fill="currentColor"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l5 5-5 5"/><path d="M21 7l-5 5 5 5"/></svg>'
}, Qd = { curtain: ["mdi:curtains", "mdi:curtains-closed"], blind: ["mdi:roller-shade", "mdi:roller-shade-closed"], venetian: ["mdi:blinds-horizontal", "mdi:blinds-horizontal-closed"] }, c0 = { curtain: "curtains", blind: "blind", venetian: "blinds" }, xr = {
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
}, tp = ["covers", "people", "openings", "leaks", "vacuum"], ep = "homecore_house", ap = "homecore-house-used", Ml = ["switch", "fan", "input_boolean", "automation"], op = "homecore-house-look", d0 = [["look", "Look"], ["house", "House page"], ["weather", "Weather"]], p0 = [["popup", "Popup"], ["sheet", "Sheet"]], f0 = [["auto", "Automatic"], ["cut", "Cut short"], ["wrap", "Two lines"], ["scroll", "Scroll"]], u0 = [["day", "Daytime 06–22"], ["waking", "Waking 07–23"], ["all", "All day"]], h0 = [["bitmap", "Pixel"], ["onebit", "1-bit"], ["smooth", "Smooth"], ["line", "Line"]], kr = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', m0 = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', g0 = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>', np = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"/></svg>', Sl = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>', b0 = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 13C6.14 13 4.59 14.28 4.14 16H2V18H4.14C4.59 19.72 6.14 21 8 21S11.41 19.72 11.86 18H22V16H11.86C11.41 14.28 9.86 13 8 13M8 19C6.9 19 6 18.1 6 17C6 15.9 6.9 15 8 15S10 15.9 10 17C10 18.1 9.1 19 8 19M19.86 6C19.41 4.28 17.86 3 16 3S12.59 4.28 12.14 6H2V8H12.14C12.59 9.72 14.14 11 16 11S19.41 9.72 19.86 8H22V6H19.86M16 9C14.9 9 14 8.1 14 7C14 5.9 14.9 5 16 5S18 5.9 18 7C18 8.1 17.1 9 16 9Z"/></svg>', rp = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"/></svg>', Li = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/></svg>', ip = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', Kp = (o) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + o.map((r) => '<path d="' + r + '"/>').join("") + "</svg>", Di = Kp(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), sp = Kp(["M20 6L9 17L4 12"]), Ya = (o, r = "") => '<span class="tfAreaGlyph" data-icon-for="' + q(o || "") + '"' + (r ? ' data-icon-name="' + q(r) + '"' : "") + "></span>", w0 = (o) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (o ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', v0 = 1, y0 = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], lp = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, Ei = ["door", "window", "garage_door", "opening"], cp = { moisture: ["detected water", "dry"], smoke: ["detected smoke", "clear"], gas: ["detected gas", "clear"], carbon_monoxide: ["detected carbon monoxide", "clear"], safety: ["became unsafe", "safe"] }, Mr = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve"], x0 = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], k0 = 10, M0 = 20, S0 = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, A0 = ["living room", "bedroom", "office"];
function C0(o, { config: r, getHass: d }) {
  var $c, Jc, Qc;
  const p = (t) => o.getElementById(t), g = p("app"), v = r || {}, w = String(v.layout || "").toLowerCase().replace("_", "-") === "test-focus", S = String(v.page || "").toLowerCase() === "overview";
  let I = Ua.get(Vd) === "1", y = {};
  const C = (t) => {
    var e;
    return (e = d()) == null ? void 0 : e.callWS(t);
  }, O = (t, e, a) => C({ type: "call_service", domain: t, service: e, service_data: a }), V = o.querySelector("#appearancePane .toggleList");
  V && !p("densityToggle") && (V.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), p("densityToggle").addEventListener("click", () => {
    I = !I, Ua.set(Vd, I ? "1" : "0"), Y();
  }));
  const Q = [
    ["weather", "Weather", "The forecast under Home.", (t) => t.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (t) => t.startsWith("sensor.") && jt(t).device_class === "power" && /^(W|kW)$/.test(jt(t).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm in the Security popup.", (t) => t.startsWith("alarm_control_panel.")]
  ], et = (t, e, a, n) => '<div class="themeChoice" id="' + t + '" role="group" aria-label="' + e + '">' + n.map(([i, c]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + a + '="' + i + '">' + c + "</button>").join("") + "</div>", at = (t, e, a, n) => '<div class="toggleRow"' + (n ? ' id="' + n + '"' : "") + "><div><strong>" + t + "</strong>" + (e ? '<div class="status">' + e + "</div>" : "") + "</div>" + a + "</div>";
  function X() {
    var _, T;
    if (!w || p("housePane")) return;
    const t = p("settingsView");
    t.querySelector(".settingsTitle").textContent = "HomeCore settings";
    const e = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], a = (L, H) => '<div class="houseTab' + (L === "look" ? " active" : "") + '" data-house-pane="' + L + '"><section class="card">' + H + "</section></div>";
    t.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + e.map(([L, H]) => '<button class="tab segBtn' + (L === "look" ? " active" : "") + '" type="button" data-house-tab="' + L + '">' + H + "</button>").join("") + "</div>" + // Appearance in groups (Matt, 8 Nov), each one's title inside its card as a card header (Matt, 9 Nov)
    a("look", d0.map(([L, H]) => '<div class="tfSetGroup"><div class="toggleList" data-look-group="' + L + '"><div class="tfCardTitle">' + H + "</div></div></div>").join("")) + // Lights as cards by default, with a Cards | Table choice (Matt, 9 Nov)
    a("lights", '<div class="tfLightView"><div class="themeChoice" role="group" aria-label="Show lights as"><button class="wxLayoutBtn" type="button" data-light-view="cards">Cards</button><button class="wxLayoutBtn" type="button" data-light-view="table">Table</button></div></div><p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div><div class="tfLightCards" id="lightCards"></div>') + a("sources", '<div class="toggleList">' + Q.map(([L, H, U]) => at(H, U, '<select class="settingsSelect" data-source="' + L + '" aria-label="' + H + '"></select>')).join("") + "</div>") + a("sums", '<div class="toggleList">' + Object.entries(xr).map(([L, H]) => at(H.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + L + '" aria-label="' + H.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const n = (L) => t.querySelector('[data-look-group="' + L + '"]'), i = (L) => L == null ? void 0 : L.closest(".toggleRow");
    [i(t.querySelector(".themeBtn"))].forEach((L) => L && n("look").appendChild(L));
    const c = i(p("densityToggle"));
    c && (c.hidden = !0), [i(p("moreInfoChoice")), i(p("namesChoice"))].forEach((L) => L && n("house").appendChild(L)), n("house").insertAdjacentHTML("beforeend", at("Lights", "How lights show on the house page.", et("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + at("Pad", "What the Dual Axis Controller’s pad sets on its tile.", et("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow")), [i(p("hoursChoice")), i(p("wxStyleChoice"))].forEach((L) => L && n("weather").appendChild(L));
    const l = p("housePane"), f = l.querySelector(".houseTabs"), m = f.querySelector(".rubberIndicator"), k = "homecore-light-view", M = (L) => {
      l.classList.toggle("tfLightCardsOn", L === "cards"), l.querySelectorAll("[data-light-view]").forEach((H) => H.setAttribute("aria-pressed", String(H.dataset.lightView === L))), Ua.set(k, L);
    };
    M(Ua.get(k) === "table" ? "table" : "cards"), l.querySelector(".tfLightView").addEventListener("click", (L) => {
      const H = L.target.closest("[data-light-view]");
      H && M(H.dataset.lightView);
    }), new ResizeObserver(() => lt()).observe(l), (T = (_ = document.fonts) == null ? void 0 : _.ready) == null || T.then(() => lt());
    const x = (L) => {
      const H = f.querySelector(".tab.active");
      m.style.transition = "none", L ? Pi(m, m.offsetLeft, m.offsetWidth, H.offsetLeft, H.offsetWidth) : (m.style.left = H.offsetLeft + "px", m.style.width = H.offsetWidth + "px");
    };
    new ResizeObserver(() => x(!1)).observe(f), l.addEventListener("click", (L) => {
      const H = L.target.closest("[data-house-tab]");
      if (H) {
        f.querySelectorAll(".tab").forEach((E) => E.classList.toggle("active", E === H)), l.querySelectorAll(".houseTab").forEach((E) => E.classList.toggle("active", E.dataset.housePane === H.dataset.houseTab)), H.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), x(!0), lt();
        return;
      }
      const U = L.target.closest("[data-light-fav]");
      if (U) {
        tr(U.dataset.lightFav);
        return;
      }
      const B = L.target.closest("[data-light-pick]");
      if (B) {
        const [E, yt] = B.dataset.lightPick.split("|"), zt = { ...Vt[E] };
        B.dataset.v ? zt[yt] = B.dataset.v : delete zt[yt], Vt[E] = zt, Qe(), [...Ne.keys()].filter((Ht) => Ht.endsWith(":" + yt)).forEach((Ht) => Ne.delete(Ht)), Ba();
        return;
      }
      const Z = L.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!Z || Z.disabled)) {
        if (Z.dataset.lights && (Vt.lights = Z.dataset.lights), Z.dataset.dacPad && (Vt.dacPad = Z.dataset.dacPad), (Z.dataset.lights || Z.dataset.dacPad) && (Qe(), Ne.clear()), Z.dataset.sumToggle) {
          const E = Z.dataset.sumToggle, yt = new Set(mt.hiddenSums || []);
          yt.has(E) ? yt.delete(E) : yt.add(E), mt = { ...mt, hiddenSums: [...yt] }, He();
        }
        Ba();
      }
    }), l.addEventListener("change", (L) => {
      const H = L.target;
      H.dataset.source && (mt = { ...mt, sources: { ...mt.sources || {}, [H.dataset.source]: H.value || void 0 } }, He());
      const U = H.dataset.lightStyle || H.dataset.lightPad;
      if (U) {
        const B = H.dataset.lightStyle ? "lightStyles" : "lightPads", Z = { ...Vt[B] };
        H.value ? Z[U] = H.value : delete Z[U], Vt[B] = Z, Qe(), [...Ne.keys()].filter((E) => E.endsWith(":" + U)).forEach((E) => Ne.delete(E));
      }
      Ba();
    });
  }
  function j() {
    var x, _;
    kn() && xn();
    const t = p("housePane");
    if (!t) return;
    const e = !!customElements.get(la);
    t.querySelectorAll("[data-lights]").forEach((T) => T.setAttribute("aria-pressed", String(T.dataset.lights === Vt.lights))), p("lightsRow").querySelector(".status").textContent = e || !kn() ? "How lights show on the house page." : Eo === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", t.querySelectorAll("[data-dac-pad]").forEach((T) => T.setAttribute("aria-pressed", String(T.dataset.dacPad === Vt.dacPad))), p("dacPadRow").hidden = !kn();
    for (const T of t.querySelectorAll("[data-source]")) {
      if (T === o.activeElement) continue;
      const [L] = Q.find(([U]) => U === T.dataset.source), H = Object.keys(y).filter(Q.find(([U]) => U === L)[3]).sort((U, B) => kt(U).localeCompare(kt(B)));
      T.dataset.sig !== H.join(",") && (T.innerHTML = '<option value="">Automatic</option>' + H.map((U) => '<option value="' + q(U) + '">' + q(kt(U)) + "</option>").join(""), T.dataset.sig = H.join(",")), T.value = H.includes((x = mt.sources) == null ? void 0 : x[L]) ? mt.sources[L] : "";
    }
    t.querySelectorAll("[data-sum-toggle]").forEach((T) => {
      const L = !(mt.hiddenSums || []).includes(T.dataset.sumToggle);
      T.classList.toggle("on", L), T.setAttribute("aria-checked", String(L));
    });
    const a = p("lightRows"), n = p("lightCards"), i = o.activeElement, c = a != null && a.contains(i) || n != null && n.contains(i) ? i : null;
    if (!a || c != null && c.matches("select")) {
      lt();
      return;
    }
    const l = new Set($()), f = (T, L, H, U) => '<option value="' + T + '"' + (T === H ? " selected" : "") + ">" + L + "</option>", m = Object.keys(y).filter((T) => T.startsWith("light.")).sort((T, L) => !Ct.get(T) - !Ct.get(L) || (Ct.get(T) || "").localeCompare(Ct.get(L) || "") || kt(T).localeCompare(kt(L))).map((T) => {
      const L = Vt.lightStyles[T] || "", H = Vt.lightPads[T] || "", U = l.has(T), B = q(kt(T));
      return "<tr><td><strong>" + B + "</strong></td><td>" + q(Ct.get(T) || "—") + "</td><td>" + q(De(T)) + '</td><td class="metaSwitchCol"><button class="switch' + (U ? " on" : "") + '" type="button" role="switch" aria-checked="' + U + '" data-light-fav="' + q(T) + '" aria-label="' + B + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + q(T) + '" aria-label="' + B + ' tile">' + f("", "Default", L) + f("tile", "HomeCore tile", L) + f("dac", "Dual Axis Controller", L) + '</select></td><td><select class="settingsSelect" data-light-pad="' + q(T) + '" aria-label="' + B + ' pad"' + (ua(T) ? "" : " disabled") + ">" + f("", "Default", H) + f("temperature", "Temperature", H) + f("colour", "Colour", H) + "</select></td></tr>";
    }).join(""), k = (T, L, H, U, B) => '<div class="themeChoice" role="group" aria-label="' + H + '">' + U.map(([Z, E]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Z === B) + '" data-light-pick="' + T + "|" + q(L) + '" data-v="' + Z + '">' + E + "</button>").join("") + "</div>", M = Object.keys(y).filter((T) => T.startsWith("light.")).sort((T, L) => !Ct.get(T) - !Ct.get(L) || (Ct.get(T) || "").localeCompare(Ct.get(L) || "") || kt(T).localeCompare(kt(L))).map((T) => {
      const L = l.has(T), H = q(kt(T)), U = [Ct.get(T), De(T)].filter(Boolean).map(q).join(" · ");
      return '<div class="toggleList"><div class="toggleRow"><div><strong>' + H + '</strong><div class="status">' + U + "</div></div></div>" + at("Favourite", "", '<button class="switch' + (L ? " on" : "") + '" type="button" role="switch" aria-checked="' + L + '" data-light-fav="' + q(T) + '" aria-label="' + H + ' is a favourite"></button>') + at("Tile", "", k("lightStyles", T, H + " tile", [["", "Default"], ["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]], Vt.lightStyles[T] || "")) + (ua(T) ? at("Pad", "", k("lightPads", T, H + " pad", [["", "Default"], ["temperature", "Temperature"], ["colour", "Colour"]], Vt.lightPads[T] || "")) : "") + "</div>";
    }).join("");
    a.dataset.html !== m && (a.innerHTML = m, a.dataset.html = m), n.dataset.html !== M && (n.innerHTML = M, n.dataset.html = M), c != null && c.dataset.lightFav && ((_ = (n.contains(c) ? n : a).querySelector('[data-light-fav="' + CSS.escape(c.dataset.lightFav) + '"]')) == null || _.focus({ preventScroll: !0 })), lt();
  }
  function lt() {
    var e, a, n;
    const t = p("housePane");
    if (t)
      for (const i of t.querySelectorAll(".themeChoice")) {
        const c = [...i.querySelectorAll("button")];
        let l = (e = i.nextElementSibling) != null && e.classList.contains("tfChoiceList") ? i.nextElementSibling : null;
        if (!l) {
          l = document.createElement("select"), l.className = "settingsSelect tfChoiceList", l.setAttribute("aria-label", i.getAttribute("aria-label") || ((n = (a = i.closest(".toggleRow")) == null ? void 0 : a.querySelector("strong")) == null ? void 0 : n.textContent) || ""), l.addEventListener("change", () => {
            var x;
            return (x = c[Number(l.value)]) == null ? void 0 : x.click();
          }), i.after(l);
          const M = () => {
            l.innerHTML = c.map((_, T) => '<option value="' + T + '"' + (_.disabled ? " disabled" : "") + ">" + q(_.textContent) + "</option>").join("");
            const x = c.findIndex((_) => _.getAttribute("aria-pressed") === "true" || _.classList.contains("active"));
            x >= 0 && (l.value = String(x));
          };
          new MutationObserver(M).observe(i, { subtree: !0, attributes: !0, attributeFilter: ["aria-pressed", "class", "disabled"] }), M();
        }
        const f = (M) => {
          i.hidden !== !M && (i.hidden = !M), l.hidden !== M && (l.hidden = M);
        };
        if (c.length > 3) {
          f(!1);
          continue;
        }
        if (!i.getClientRects().length && !l.getClientRects().length) {
          l.dataset.fit || f(!0);
          continue;
        }
        const m = i.hidden;
        i.hidden = !1;
        const k = c.every((M) => M.scrollWidth <= M.clientWidth + 1);
        i.hidden = m, f(k), l.dataset.fit = "1";
      }
  }
  const pt = document.createElement("div");
  pt.className = "densityBadge", pt.setAttribute("aria-live", "polite"), pt.hidden = !0, g.appendChild(pt);
  let gt = 0;
  function nt() {
    if (!I) return;
    const t = p("homeView"), e = (c) => c.offsetParent !== null && !c.closest("[hidden]");
    t.querySelectorAll(":scope .card, :scope .tfAction").forEach((c) => {
      e(c) && (c.dataset.h = Math.round(c.getBoundingClientRect().height) + " px");
    });
    const a = [...t.querySelectorAll(".activityRow, .tfAction, .wxNow")].filter(e), n = window.innerHeight, i = a.filter((c) => {
      const l = c.getBoundingClientRect();
      return l.height > 0 && l.top >= 0 && l.bottom <= n + 0.5;
    }).length;
    pt.hidden = !t.classList.contains("active"), pt.innerHTML = "<b>" + i + "</b><small>of " + a.length + " readings on screen</small>";
  }
  const J = () => {
    I && requestAnimationFrame(nt);
  };
  function Y() {
    var t;
    g.classList.toggle("showDensity", I), (t = p("densityToggle")) == null || t.classList.toggle("on", I), pt.hidden = !I, clearInterval(gt), I && (gt = setInterval(nt, 1e3), nt());
  }
  window.addEventListener("scroll", J, { capture: !0, passive: !0 }), window.addEventListener("resize", J, { passive: !0 });
  const R = o.querySelector("#homeView .grid"), wt = document.createElement("style");
  o.appendChild(wt);
  const Dt = new ResizeObserver(() => Ot()), it = /* @__PURE__ */ new Set(), z = (t) => {
    const e = t.getBoundingClientRect().height;
    return Math.abs(e - t.offsetHeight) < 1 ? e : t.offsetHeight;
  };
  function Ot() {
    const t = g.classList.contains("tfAreaOpen") && !g.classList.contains("tfWeatherOpen");
    if (R.classList.toggle("tfStack", t), it.forEach((m) => {
      (!t || !m.isConnected) && (Dt.unobserve(m), it.delete(m));
    }), !t) {
      wt.textContent = "";
      return;
    }
    const e = getComputedStyle(R), a = parseFloat(e.columnGap) || 0, n = e.gridTemplateColumns.split(" ").length, i = [...R.children].filter((m) => m.dataset.k && m.offsetParent);
    wt.disabled = !0;
    const c = i.map((m) => {
      const k = getComputedStyle(m), M = /span (\d+)/.exec(k.gridColumnStart + " " + k.gridColumnEnd);
      return Math.min(n, M ? +M[1] : k.gridColumnEnd === "-1" ? n : 1);
    });
    wt.disabled = !1;
    let l = 0;
    const f = i.map((m, k) => {
      it.has(m) || (it.add(m), Dt.observe(m));
      const M = c[k];
      l + M > n && (l = 0);
      const x = l + 1;
      return l = (l + M) % n, '#homeView .grid.tfStack>[data-k="' + CSS.escape(m.dataset.k) + '"]{grid-column:' + x + " / span " + M + ";grid-row-end:span " + Math.max(1, Math.ceil(z(m) + a)) + "}";
    }).join(`
`);
    wt.textContent !== f && (wt.textContent = f);
  }
  new MutationObserver(Ot).observe(R, { childList: !0 }), new MutationObserver(Ot).observe(g, { attributes: !0, attributeFilter: ["class"] });
  let F = null, tt = null, D = null;
  const dt = /* @__PURE__ */ new Map(), ot = /* @__PURE__ */ new Map(), rt = /* @__PURE__ */ new Map(), vt = 6;
  let ft = null;
  const xt = /* @__PURE__ */ new Map(), Nt = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map();
  let mt = { favourites: null }, je = {}, Xa = {}, Vo = [], So = null;
  const Oa = (() => {
    try {
      return JSON.parse(Ua.get(ap)) || {};
    } catch {
      return {};
    }
  })();
  let Ct = /* @__PURE__ */ new Map(), ye = 0;
  function He() {
    clearTimeout(ye), ye = setTimeout(() => Promise.resolve(C({ type: "frontend/set_user_data", key: ep, value: mt })).catch(() => {
    }), 400);
  }
  const Vt = (() => {
    let t = {};
    try {
      t = JSON.parse(Ua.get(op)) || {};
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
  })(), Qe = () => Ua.set(op, JSON.stringify(Vt)), Fn = () => {
    g.dataset.more = Vt.more, g.dataset.names = Vt.names, Fs();
  };
  w && V && !p("moreInfoChoice") && (p("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + p0.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Vt.more === t) + '" data-more-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), p("moreInfoChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-more-style]");
    e && (Vt.more = e.dataset.moreStyle, Qe(), Fn(), p("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  }), p("moreInfoChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Long names</strong><div class="status">How a name or state too long for its space shows.</div></div><div class="themeChoice" id="namesChoice" role="group" aria-label="Long names">' + f0.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Vt.names === t) + '" data-names-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), p("namesChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-names-style]");
    e && (Vt.names = e.dataset.namesStyle, Vt.namesPicked = !0, Qe(), Fn(), p("namesChoice").querySelectorAll("[data-names-style]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  }), p("namesChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Next hours</strong><div class="status">The hours each day shows on the Weather page.</div></div><div class="themeChoice" id="hoursChoice" role="group" aria-label="Next hours">' + u0.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Vt.hoursWindow === t) + '" data-hours-window="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), p("hoursChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-hours-window]");
    e && (Vt.hoursWindow = e.dataset.hoursWindow, Qe(), me == null || me.refresh(), p("hoursChoice").querySelectorAll("[data-hours-window]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  }), p("hoursChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Weather art</strong><div class="status">How the weather and the sky are drawn.</div></div><div class="themeChoice" id="wxStyleChoice" role="group" aria-label="Weather art">' + h0.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Vt.wxStyle === t) + '" data-wx-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), p("wxStyleChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-wx-style]");
    e && (Vt.wxStyle = e.dataset.wxStyle, Qe(), me == null || me.setStyle(Vt.wxStyle), ge == null || ge.forEach((a) => a.setStyle(Vt.wxStyle)), p("wxStyleChoice").querySelectorAll("[data-wx-style]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  })), X();
  let qt = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const da = /* @__PURE__ */ new Map();
  let Cr = "";
  const _r = w ? Wu({ onChange: () => Ce() }) : null;
  w && g.classList.add("house");
  const pa = Object.assign(document.createElement("div"), { className: "tfBento" });
  let me = null, Tr = null, zo = !1;
  function Lr(t) {
    const e = Pt();
    if (g.classList.toggle("houseBento", !!e), me && (Tr !== e || t == null) && (me.destroy(), me = null), !e || t == null) {
      pa.remove();
      return;
    }
    pa.isConnected || R.append(pa), pa.style.order = t, !me && !zo && (me = Fd(pa, { getHass: d, entityId: e, style: Vt.wxStyle, hoursWindow: () => Vt.hoursWindow, radarSource: Vn }), Tr = e);
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
  ], Wn = qn.map(([t]) => t), Ao = ["aq", "pollen", "radar", "hourly", "sun", "moon", "uv", "humidity", "pressure", "wind", "visibility"], Wi = { hourly: 2 }, Na = Object.fromEntries(qn.map(([t]) => [t, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + t })]));
  let ge = null, jn = null;
  function Dr(t) {
    const e = Pt();
    ge && jn !== e && (ge.forEach((a) => a.destroy()), ge = null), Object.values(Na).forEach((a) => e ? !a.isConnected && R.append(a) : a.remove()), e && !ge && !zo && (ge = /* @__PURE__ */ new Map(), jn = e), Br();
  }
  const Vn = () => {
    var t;
    return ((t = ae().opts.radar) == null ? void 0 : t.source) || "rainviewer";
  }, Er = () => [["rainviewer", "RainViewer"], ...Object.values(y).filter((t) => t.entity_id.startsWith("camera.")).sort((t, e) => kt(t.entity_id).localeCompare(kt(e.entity_id))).map((t) => ["camera:" + t.entity_id, kt(t.entity_id)])];
  function Br() {
    if (!ge || zo) return;
    const t = new Set(ae().hidden);
    qn.forEach(([e, a]) => {
      ge.has(e) || t.has(e) && !(Zt != null && Zt.fromTray && Zt.key === e) || ge.set(e, Fd(Na[e], { getHass: d, entityId: jn, style: Vt.wxStyle, cards: a, onOpen: e === "wx" ? () => Dc("weather") : void 0, radarSource: Vn }));
    });
  }
  const jt = (t) => {
    var e;
    return ((e = y[t]) == null ? void 0 : e.attributes) || {};
  }, kt = (t) => jt(t).friendly_name || t, Ae = (t, e) => Pa(t) || (Number(jt(t).supported_features) & e) === e, Jt = (t) => {
    const e = String(t ?? "").replace(/_/g, " ");
    return e.charAt(0).toUpperCase() + e.slice(1);
  }, Ve = (t, e = 1) => Number(t).toLocaleString(void 0, { minimumFractionDigits: e, maximumFractionDigits: e }), $a = (t) => (t == null ? void 0 : t.state) === "on" ? t.attributes.brightness != null ? Math.max(1, Math.round(t.attributes.brightness / 2.55)) : 100 : 0, Ja = (t) => jt(t).supported_color_modes || [], ji = (t, e) => [5, 3, 1].map((a) => {
    const n = (a + t / 60) % 6;
    return 255 * (1 - e / 100 * Math.max(0, Math.min(n, 4 - n, 1)));
  }), zn = (t) => (t /= 255, t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)), Rr = (t) => 0.2126 * zn(t[0]) + 0.7152 * zn(t[1]) + 0.0722 * zn(t[2]), Vi = (t, e) => {
    const a = Rr(t), n = Rr(e);
    return (Math.max(a, n) + 0.05) / (Math.min(a, n) + 0.05);
  }, zi = 0.55, mn = ["hs", "xy", "rgb", "rgbw", "rgbww"], Pr = (t) => {
    const e = jt(t), a = mn.includes(e.color_mode);
    return (a && e.rgb_color ? e.rgb_color : a && e.hs_color ? ji(...e.hs_color) : [255, 170, 0]).map((n) => Math.round(Math.max(0, Math.min(255, n))));
  }, Gi = { heat: [255, 111, 34], cool: [33, 150, 243], heat_cool: [255, 193, 7], auto: [76, 175, 80], dry: [255, 152, 0], fan_only: [0, 188, 212] };
  function Go(t) {
    var n;
    const e = t.split(".")[0], a = (n = y[t]) == null ? void 0 : n.state;
    return !a || a === "unavailable" || a === "unknown" ? null : e === "light" ? a === "on" ? Pr(t) : null : e === "climate" ? Gi[a] || null : e === "cover" ? a !== "closed" ? [146, 107, 199] : null : e === "lock" ? a !== "locked" ? [244, 67, 54] : null : e === "media_player" ? ["playing", "paused", "on", "buffering"].includes(a) ? [3, 169, 244] : null : e === "humidifier" || e === "valve" ? ["on", "open", "opening", "closing"].includes(a) ? [33, 150, 243] : null : e === "vacuum" ? ["cleaning", "returning"].includes(a) ? [0, 150, 136] : null : e === "alarm_control_panel" ? a !== "disarmed" && a !== "triggered" ? [76, 175, 80] : null : e === "fan" ? a === "on" ? [0, 188, 212] : null : (e === "switch" || e === "input_boolean") && a === "on" ? [255, 193, 7] : null;
  }
  function Gn(t, e, a = !1) {
    const [n, i, c] = t.map((L) => L / 255), l = Math.max(n, i, c), f = Math.min(n, i, c), m = l - f, k = m ? (l === n ? (i - c) / m + (i < c ? 6 : 0) : l === i ? (c - n) / m + 2 : (n - i) / m + 4) * 60 : 0, M = (l + f) / 2, x = m ? m / (1 - Math.abs(2 * M - 1)) : 0, _ = m < 0.1 ? Math.min(x, 0.25) : 1, T = (L) => {
      const H = (B) => (B + k / 30) % 12, U = _ * Math.min(L, 1 - L);
      return [0, 8, 4].map((B) => Math.round(255 * (L - U * Math.max(-1, Math.min(H(B) - 3, 9 - H(B), 1)))));
    };
    for (let L = 0.5; a ? L < 0.96 : L > 0.04; L += a ? 0.01 : -0.01) {
      const H = T(L);
      if (Vi(H, e) >= 3) return "rgb(" + H.join(",") + ")";
    }
    return a ? "#ffffff" : "#26221e";
  }
  const gn = (t) => {
    const e = [1, 3, 5].map((a) => parseInt(t.slice(a, a + 2), 16));
    return Math.max(...e) - Math.min(...e) < 26 ? "" : ";--sum-d:" + Gn(e, [58, 58, 58], !0) + ";--sum-l:" + Gn(e, [230, 230, 230]);
  }, Hr = { d: ["#ffb894", "#d2b4ff", "#9dcbff"], l: ["#f0946a", "#b48ae6", "#6fa8e8"] }, Ui = () => [0, 1, 2].map((t) => "--g" + t + "-d:" + Hr.d[t] + ";--g" + t + "-l:" + Hr.l[t]).join(";"), Yi = '<svg class="tfGradDefs" aria-hidden="true" focusable="false"><defs><linearGradient id="hcClimateGrad" x1="0" y1="0" x2="0" y2="1">' + [0.15, 0.5, 0.85].map((t, e) => '<stop offset="' + t + '" style="stop-color:var(--g' + e + ')"/>').join("") + "</linearGradient></defs></svg>", Qa = (t) => {
    const e = t.map((a) => Math.round(a + (255 - a) * zi));
    return "--light-soft:rgb(" + e.join(",") + ");--light-ink:" + Gn(t, e);
  }, Zi = (t) => Qa(Pr(t)), bn = (t) => {
    const e = Go(t);
    return e ? ' data-light style="' + Qa(e) + '"' : "";
  }, ze = (t) => {
    const e = Ja(t);
    return e.length ? e.some((a) => a !== "onoff") : jt(t).brightness != null;
  }, wn = (t) => [jt(t).min_color_temp_kelvin || 2e3, jt(t).max_color_temp_kelvin || 6500], Aa = (t) => new Date(t).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
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
  const ia = (t) => {
    var e;
    return jt(t).current_position ?? (((e = y[t]) == null ? void 0 : e.state) === "closed" ? 0 : 100);
  }, Uo = (t) => {
    var e;
    return qa("pos", t, ((e = xt.get(t)) == null ? void 0 : e.pos) ?? ia(t));
  }, Or = (t) => {
    var e;
    return qa("tilt", t, ((e = xt.get(t)) == null ? void 0 : e.tilt) ?? jt(t).current_tilt_position);
  };
  function De(t) {
    var l;
    const e = y[t];
    if (!e) return "Not found";
    if (e.state === "unavailable") return "Unavailable";
    const a = e.attributes, n = t.split(".")[0];
    if (n === "light") {
      if (e.state !== "on") return "Off";
      const f = a.color_temp_kelvin;
      return (ze(t) ? $a(e) + "%" : "On") + (a.color_mode === "color_temp" && f ? " · " + Number(f).toLocaleString() + "k" : mn.includes(a.color_mode) ? " · Colour" : "");
    }
    if (n === "climate") return (e.state === "off" ? "Off" : Jt(a.hvac_action || e.state)) + " · " + Ve(a.current_temperature) + " °C now";
    if (n === "cover") {
      const f = ia(t), m = a.current_tilt_position;
      return e.state === "opening" || e.state === "closing" ? Jt(e.state) + " - " + f + "%" : (f <= 0 ? "Closed" : f >= 100 ? "Open" : "Partially open") + (m > 0 && m < 100 ? " · tilted" : "");
    }
    if (n === "humidifier") return e.state !== "on" ? "Off" : Jt(a.action || "on") + " · " + a.current_humidity + "% now";
    if (n === "vacuum") return Jt(e.state) + (e.state === "cleaning" && ((l = a.rooms) != null && l.length) ? " · " + a.rooms.join(", ") : "") + (a.battery_level != null ? " · " + a.battery_level + "%" : "");
    if (n === "media_player") return e.state === "playing" || e.state === "paused" ? (e.state === "paused" ? "Paused · " : "") + (a.media_title || "Playing") : Jt(e.state);
    if (n === "alarm_control_panel") return lp[e.state] || Jt(e.state);
    if (n === "lock" || n === "valve") return Jt(e.state);
    if (n === "switch") return e.state === "on" ? "On" : "Off";
    if (n === "plant") return e.state === "ok" ? "Healthy" : Jt(a.problem);
    if (n === "binary_sensor")
      return a.device_class === "battery" ? e.state === "on" ? "Low" : "Normal" : a.device_class === "problem" ? e.state === "on" ? "Problem" : "OK" : a.device_class === "moisture" ? e.state === "on" ? "Wet" : "Dry" : Ei.includes(a.device_class) ? e.state === "on" ? "Open" : "Closed" : e.state === "on" ? "Detected" : "Clear";
    if (a.rang) return "Rang at " + Aa(a.rang);
    const i = d();
    if (i != null && i.formatEntityState && !Pa(t))
      try {
        return i.formatEntityState(e);
      } catch {
      }
    const c = Number(e.state);
    if (e.state !== "" && Number.isFinite(c)) {
      const f = Math.abs(c) >= 100 ? 0 : Math.abs(c) >= 10 ? 1 : 2, m = a.unit_of_measurement ? a.unit_of_measurement === "%" ? "%" : " " + a.unit_of_measurement : "";
      return c.toLocaleString(void 0, { maximumFractionDigits: f }) + m + (a.plant_low ? " · Low" : a.plant_high ? " · High" : "");
    }
    return Jt(e.state);
  }
  const _o = (t) => t >= 1e3 ? Ve(t / 1e3, 2) + " kW" : Math.round(t).toLocaleString() + " W";
  function Ia(t) {
    var a, n;
    const e = d();
    t.querySelectorAll("[data-icon-for]").forEach((i) => {
      var f;
      const c = y[i.dataset.iconFor], l = i.dataset.iconName || "";
      if (customElements.get("ha-state-icon") && c && !l) {
        let m = i.firstElementChild;
        (!m || m.localName !== "ha-state-icon") && (i.textContent = "", m = document.createElement("ha-state-icon"), i.appendChild(m)), m.hass = e, m.stateObj = c;
      } else if (customElements.get("ha-icon")) {
        let m = i.firstElementChild;
        (!m || m.localName !== "ha-icon") && (i.textContent = "", m = document.createElement("ha-icon"), i.appendChild(m)), m.icon = l || ((f = c == null ? void 0 : c.attributes) == null ? void 0 : f.icon) || "mdi:circle-medium";
      } else i.textContent || (i.textContent = (i.dataset.letter || kt(i.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    }), (a = t.querySelectorAll) == null || a.call(t, ".tfIcon").forEach(Ir), (n = t.classList) != null && n.contains("tfIcon") && Ir(t), Un();
  }
  const Nr = /* @__PURE__ */ new Map();
  function Ir(t) {
    var c, l, f;
    const e = (((c = t.closest("[data-k]")) == null ? void 0 : c.dataset.k) || "") + "|" + (t.dataset.iconFor || ((l = t.querySelector("[data-icon-for]")) == null ? void 0 : l.dataset.iconFor) || t.getAttribute("aria-label") || ""), a = getComputedStyle(t), n = { backgroundColor: a.backgroundColor, color: a.color }, i = Nr.get(e);
    Nr.set(e, n), !(!i || i.backgroundColor === n.backgroundColor && i.color === n.color || (f = window.matchMedia) != null && f.call(window, "(prefers-reduced-motion: reduce)").matches) && t.animate([i, n], { duration: Me.warp.cdur, delay: Me.warp.cdelay, easing: Se[Me.warp.ease], fill: "backwards" });
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
    var T, L, H;
    const e = t.localName === "svg" ? t : Xi(t), a = e ? [...e.querySelectorAll("path,rect,circle,ellipse,polygon,polyline,line")] : [];
    if (!a.length) return !e;
    const n = (T = t.closest(".tfIcon")) == null ? void 0 : T.offsetWidth;
    if (n === void 0) return !0;
    if (!n) return !1;
    const i = n + "|" + a.map((U) => U.getAttribute("d") || U.localName).join("|");
    if (t.dataset.fitted === i) return !0;
    let c = 1 / 0, l = 1 / 0, f = -1 / 0, m = -1 / 0;
    for (const U of a) {
      const B = U.getBBox(), Z = getComputedStyle(U), E = Z.stroke !== "none" ? (parseFloat(Z.strokeWidth) || 0) / 2 : 0;
      !B.width && !B.height || (c = Math.min(c, B.x - E), l = Math.min(l, B.y - E), f = Math.max(f, B.x + B.width + E), m = Math.max(m, B.y + B.height + E));
    }
    if (!(f > c)) return !1;
    const k = (H = (L = e.viewBox) == null ? void 0 : L.baseVal) != null && H.width ? e.viewBox.baseVal : { x: 0, y: 0, width: 24, height: 24 }, M = n > 40 ? n * (26 / 40) : n - 14, x = M * k.width / Math.max(f - c, m - l), _ = x / k.width;
    return t.localName === "svg" ? (t.style.width = x + "px", t.style.height = x + "px") : t.style.setProperty("--mdc-icon-size", x + "px"), e.style.translate = ((k.x + k.width / 2 - (c + f) / 2) * _).toFixed(2) + "px " + ((k.y + k.height / 2 - (l + m) / 2) * _).toFixed(2) + "px", t.dataset.fitted = i, !0;
  }
  let vn = 0;
  function Fr(t = 0) {
    clearTimeout(vn), [...o.querySelectorAll(Ki)].filter((a) => !$i(a)).length && t < 5 && (vn = setTimeout(() => Fr(t + 1), 300));
  }
  function Un() {
    clearTimeout(vn), vn = setTimeout(() => Fr(), 60);
  }
  const Yo = (t) => {
    var e, a, n;
    return t.startsWith("light.") && y[t] && !jt(t).icon && !((n = (a = (e = d()) == null ? void 0 : e.entities) == null ? void 0 : a[t]) != null && n.icon) ? "mdi:lightbulb" : "";
  }, fe = (t, e, a) => (e = e || Yo(t), ' data-icon-for="' + q(t) + '"' + (e ? ' data-icon-name="' + q(e) + '"' : "") + (a ? ' data-letter="' + q(a) + '"' : "")), sa = (t) => t.endsWith("_solar_power") ? "mdi:solar-power-variant" : jt(t).rang ? "mdi:doorbell" : "", Qt = (t, e, a, n) => q([t, e, a, n ? JSON.stringify(n) : ""].join("|")), To = (t) => q(JSON.stringify(t));
  function Lo(t) {
    const e = q(kt(t) + ", " + De(t));
    return '<div class="activityRow tap" role="button" tabindex="0" data-more="' + q(t) + '" aria-label="' + e + '. More info"><div class="tfIcon" aria-hidden="true"' + fe(t, sa(t)) + '></div><div><div class="activityRowName">' + q(kt(t)) + '</div><div class="activityRowMeta">' + q(De(t)) + "</div></div></div>";
  }
  const Yn = (t, e, a) => '<div class="activityRow" aria-label="' + q(t + ", " + e) + '"><div class="tfIcon" aria-hidden="true"' + fe("", a, t) + '></div><div><div class="activityRowName">' + q(t) + '</div><div class="activityRowMeta">' + q(e) + "</div></div></div>";
  function to(t, e, a, n, i = "", c = null, l = "") {
    return '<section class="card tfCard' + (l ? " " + l : "") + '" data-tf data-k="' + q(t) + '" style="order:' + e + '" aria-label="' + q(a) + '"><div class="activityHeader">' + (c ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + q(c) + '" aria-label="' + q(a + (y[c] ? ", " + De(c) : "") + ". More info") + '">' + q(a) + "</button>" : '<div class="activityTitle">' + q(a) + "</div>") + '</div><div class="activityRows">' + n.join("") + "</div>" + i + "</section>";
  }
  function qr(t, e) {
    const a = "readings:" + t.id, n = t.readings.map((i) => Lo(i));
    return t.power != null && n.push(Yn("Power now", _o(t.power), "mdi:flash")), to(a, e, "Readings", n);
  }
  function Do(t, e) {
    var f;
    const a = "energy:" + t.id, [n, i] = [t.solar.find((m) => m.endsWith("_power")), t.solar.find((m) => m.endsWith("_today"))], c = [n, i].filter(Boolean).map((m) => Lo(m)), l = Number(((f = y[n]) == null ? void 0 : f.state) || 0) * 1e3;
    return qt.grid && (c.push(Lo(qt.grid)), c.push(Yn("House use", _o(l + Number(y[qt.grid].state)), "mdi:home-lightning-bolt"))), to(a, e, "Energy", c, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const Wr = (t, e) => to("plant:" + t.id, e, kt(t.id), t.readings.map((a) => Lo(a)), "", t.id);
  function Zo(t, e, a, n, i, c, l = null) {
    const f = a == null ? null : Math.max(0, Math.min(1, a)), m = f == null ? 0 : Math.round(f * 100);
    return '<div class="tfBar ' + t + '" role="slider" tabindex="0" aria-label="' + q(n) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + m + '"' + (i ? ' aria-valuetext="' + q(i) + '"' : "") + ' data-drag="' + q(t + "|" + e) + '">' + (l != null ? '<span class="was" aria-hidden="true" style="left:' + l + '%"></span>' : "") + (c ? f == null ? "" : '<b style="left:' + m + '%"></b>' : '<i style="width:' + m + '%"></i>') + "</div>";
  }
  const Ko = "homecore-house-last-bright", ta = (() => {
    try {
      return JSON.parse(Ua.get(Ko)) || {};
    } catch {
      return {};
    }
  })();
  let Xo = 0;
  const Fa = (t, e) => {
    !e || ta[t] === e || (ta[t] = e, clearTimeout(Xo), Xo = setTimeout(() => Ua.set(Ko, JSON.stringify(ta)), 500));
  }, yn = (t, e, a, n) => '<div class="tfStep" role="group" aria-label="' + q(t) + '"><button type="button" data-act="' + a + '" aria-label="Lower ' + q(t.toLowerCase()) + '">' + Yd.down + "</button><output>" + q(e) + '</output><button type="button" data-act="' + n + '" aria-label="Raise ' + q(t.toLowerCase()) + '">' + Yd.up + "</button></div>", fa = (t, e, a) => '<div class="' + t + '" role="group" aria-label="' + q(e) + '">' + a.filter(Boolean).map((n) => '<button type="button" data-act="' + n.act + '"' + (n.pressed != null ? ' aria-pressed="' + n.pressed + '"' : "") + (n.disabled ? " disabled" : "") + (n.aria ? ' aria-label="' + q(n.aria) + '"' : "") + ">" + (n.html || q(n.label)) + "</button>").join("") + "</div>", jr = (t, e) => "width:" + Math.round(Math.max(0, Math.min(1, (t - e * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * e / 3).toFixed(2), Vr = (t) => "left:calc(4px + " + t / 100 + " * (100% - 8px))", Ee = (t, e) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + q(kt(t)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(e) + '" aria-valuetext="' + Math.round(e) + '% open" data-blocks="' + q(t) + '">' + [0, 1, 2, 3].map((a) => '<span><i style="' + jr(e, a) + '"></i><b' + (e >= (a + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (a + 1) * 25 + "<small>%</small></b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + Vr(e) + '">' + Math.round(e) + "%</output></div>";
  function $o(t, e) {
    t.querySelectorAll(":scope>span").forEach((n, i) => {
      n.firstElementChild.setAttribute("style", jr(e, i)), n.lastElementChild.classList.toggle("lit", e >= (i + 1) * 25 - 12);
    });
    const a = t.querySelector(".tfTip");
    a.setAttribute("style", Vr(e)), a.textContent = Math.round(e) + "%", t.setAttribute("aria-valuenow", String(Math.round(e))), t.setAttribute("aria-valuetext", Math.round(e) + "% open");
  }
  const zr = (t, e) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + q(kt(t)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(e) + '" aria-valuetext="' + Math.round(e) + '% open" data-drag="tilt|' + q(t) + '"><i style="width:calc((100% - 8px) * ' + e / 100 + ')"></i><span' + (e > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (e > 92 ? ' class="lit"' : "") + ">Open</span></div>", Zn = (t, e, a) => '<div class="tfSeg tfCoverBtns" role="group" aria-label="' + q(kt(t)) + '">' + [
    Ae(t, r0) && ["open", "Open", "open_cover", e >= 100 && !a],
    Ae(t, s0) && ["stop", "Stop", "stop_cover", !1],
    Ae(t, i0) && ["close", "Close", "close_cover", e <= 0 && !a]
  ].filter(Boolean).map(([n, i, c, l]) => '<button type="button" data-act="' + Qt("cover", c, t) + '" aria-label="' + i + '"' + (l ? " disabled" : "") + ">" + l0[n] + "</button>").join("") + "</div>", eo = (t, e) => '<button class="tfIcon' + (e.art ? " art" : "") + '" type="button" data-act="' + e.button.act + '" aria-label="' + q(e.button.label) + '"' + (e.art ? ' style="background-image:url(&quot;' + q(e.art) + '&quot;)"' : fe(t, e.icon)) + "></button>", Gr = (t) => '<button class="tfName" type="button" data-more="' + q(t) + '" aria-label="' + q(kt(t) + ", " + De(t) + ". More info") + '"><span class="activityRowName">' + q(kt(t)) + '</span><span class="activityRowMeta">' + q(De(t)) + "</span></button>";
  function Kn(t, e = !1, a = null) {
    const n = ca(t), i = t.startsWith("light.") && Mn(t) && !(a && or(t) < 3), c = a || (e && t.startsWith("light.") ? ["bright"] : null), l = i ? ['<div class="tfDacPad" data-dac="' + (e ? "more:" : a ? "dash:" : "tile:") + q(t) + '"></div>'] : n.sections.map((f, m) => f && (!c || c.includes((n.parts || [])[m])) ? f : "").filter(Boolean);
    return '<div class="tfAction' + (i ? " tfDac" : "") + (n.on ? " on" : "") + (!i && !l.length ? " tfHeadOnly" : "") + '" data-k="' + q(t) + '"' + (n.tone ? ' data-tone="' + n.tone + '"' : "") + bn(t) + '><div class="tfActionHead">' + eo(t, n) + Gr(t) + "</div>" + l.join("") + "</div>";
  }
  const la = "dual-controller-v3", Ur = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.5/dist/dual-axis-controller-v4.js";
  let Eo = null;
  async function xn() {
    if (Eo || customElements.get(la)) return;
    Eo = "loading";
    const t = await Promise.resolve().then(() => C({ type: "lovelace/resources" })).catch(() => null), e = Array.isArray(t) && t.some((n) => /dual-axis-controller/i.test(n.url || ""));
    if (await Promise.race([customElements.whenDefined(la), new Promise((n) => setTimeout(n, e ? 8e3 : 0))]), customElements.get(la)) return;
    const a = Object.assign(document.createElement("script"), { src: Ur });
    a.onerror = () => {
      Eo = "failed", j();
    }, document.head.appendChild(a);
  }
  const Ne = /* @__PURE__ */ new Map(), ua = (t) => (Vt.lightStyles[t] || Vt.lights) === "dac", kn = () => Vt.lights === "dac" || Object.values(Vt.lightStyles).includes("dac");
  function Mn(t) {
    return ua(t) && !!customElements.get(la);
  }
  const Yr = (t) => Vt.lightPads[t] || Vt.dacPad, Jo = () => {
    const t = d();
    return t && {
      ...t,
      themes: { ...t.themes || {}, darkMode: !g.classList.contains("light") },
      callService: (e, a, n, ...i) => t.callService(e, ...Zc(e, a, n), ...i)
    };
  }, Zr = "ha-card,.hc.hcTile{padding:0!important;border:0!important;border-radius:0!important;background:none!important;box-shadow:none!important}.hcTileHead{display:none!important}.hc--dark{--hc-text:var(--color-text-primary,#f1f1f1)}.halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,198px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}", Ji = (t) => {
    !t.shadowRoot || t.shadowRoot.querySelector("style[data-tf]") || (t.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: Zr })).dataset.tf = "");
  }, ha = /* @__PURE__ */ new Map(), Ca = new ResizeObserver((t) => t.forEach(({ target: e }) => {
    const a = e.parentElement;
    !a || !e.offsetHeight || (a.style.removeProperty("min-height"), ha.set(a.dataset.dac, a.offsetHeight));
  }));
  function ao(t) {
    t.querySelectorAll("[data-dac]").forEach((e) => {
      const a = e.dataset.dac;
      let n = Ne.get(a);
      if (!n) {
        const i = a.slice(a.indexOf(":") + 1);
        n = document.createElement(la), n.setConfig({ type: "custom:" + la, entity: i, pad: Yr(i), tap_action: { action: "none" } }), Ne.set(a, n);
      }
      n.hass = Jo(), n.parentNode !== e && e.replaceChildren(n), !n.offsetHeight && ha.has(a) && (e.style.minHeight = ha.get(a) + "px"), Ca.observe(n), Ji(n);
    });
  }
  function Kr() {
    const t = Jo();
    Ne.forEach((e, a) => {
      e.isConnected ? e.hass = t : Ne.delete(a);
    });
  }
  customElements.whenDefined(la).then(() => {
    w && (R != null && R.querySelector("[data-tf]")) && Bc(Ba);
  });
  const qa = (t, e, a) => rt.has(t + "|" + e) ? rt.get(t + "|" + e) : a;
  function ca(t) {
    var c;
    const e = y[t], a = e.attributes, n = t.split(".")[0], i = (l, f) => ({ act: Qt(l, "toggle", t), label: f });
    if (n === "light") {
      const l = e.state === "on", f = Ja(t), [m, k] = wn(t), M = qa("bright", t, $a(e));
      l && Fa(t, $a(e));
      const x = qa("ct", t, l && a.color_mode === "color_temp" ? a.color_temp_kelvin : null), _ = qa("hue", t, l && mn.includes(a.color_mode) && a.hs_color ? a.hs_color[0] : null);
      return { on: l, button: i("light", "Turn " + kt(t) + (l ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        ze(t) && Zo("bright", t, M / 100, kt(t) + " brightness", M + "%", !1, l ? null : ta[t] ?? null),
        f.includes("color_temp") && Zo("ct", t, x == null ? null : (x - m) / (k - m), kt(t) + " warm to cool", x == null ? "" : Math.round(x) + " kelvin", !0),
        f.some((T) => mn.includes(T)) && Zo("hue", t, _ == null ? null : _ / 360, kt(t) + " colour", "", !0)
      ] };
    }
    if (n === "climate") {
      const l = a.target_temp_step || 0.5, f = Number(a.temperature);
      return { on: e.state !== "off", tone: e.state === "cool" || a.hvac_action === "cooling" ? "cool" : "heat", button: i("climate", "Turn " + kt(t) + (e.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(f) && yn("Target temperature", Ve(f) + " °C", Qt("climate", "set_temperature", t, { temperature: f - l }), Qt("climate", "set_temperature", t, { temperature: f + l })),
        fa("tfSeg", "Mode", (a.hvac_modes || []).map((m) => ({ label: Jt(m), act: Qt("climate", "set_hvac_mode", t, { hvac_mode: m }), pressed: e.state === m })))
      ] };
    }
    if (n === "cover") {
      const l = e.state === "opening" || e.state === "closing", f = e.state === "closed", m = Uo(t), k = Or(t);
      return { on: !f, tone: "blue", icon: Qd[kl(e)][f ? 1 : 0], button: i("cover", (f ? "Open " : "Close ") + kt(t)), parts: ["blocks", "tilt", "buttons"], sections: [
        Ae(t, Jd) && Ee(t, m),
        k != null && zr(t, k),
        Zn(t, m, l)
      ] };
    }
    if (n === "humidifier") {
      const l = Number(a.humidity);
      return { on: e.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: i("humidifier", "Turn " + kt(t) + (e.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(l) && yn("Target humidity", l + "%", Qt("humidifier", "set_humidity", t, { humidity: l - 1 }), Qt("humidifier", "set_humidity", t, { humidity: l + 1 })),
        ((c = a.available_modes) == null ? void 0 : c.length) && fa("tfSeg", "Mode", a.available_modes.map((f) => ({ label: Jt(f), act: Qt("humidifier", "set_mode", t, { mode: f }), pressed: a.mode === f })))
      ] };
    }
    if (n === "media_player") {
      const l = e.state === "playing", f = e.state === "off" || e.state === "standby", m = qa("vol", t, a.volume_level), k = f ? { act: Qt("media_player", Ae(t, o0) ? "turn_on" : "toggle", t), label: "Turn " + kt(t) + " on" } : e.state === "playing" || e.state === "paused" ? { act: Qt("media_player", "media_play_pause", t), label: (l ? "Pause " : "Play ") + kt(t) } : { act: Qt("media_player", Ae(t, n0) ? "turn_off" : "toggle", t), label: "Turn " + kt(t) + " off" };
      return { on: !f, tone: "blue", art: !f && a.entity_picture ? a.entity_picture : null, button: k, parts: ["playback", "volume"], sections: f ? [] : [
        (Ae(t, Kd) || Ae(t, Xd) || Ae(t, Zd) || Ae(t, $d)) && fa("tfSeg", "Playback", [
          { html: Ti.prev, aria: "Previous", act: Qt("media_player", "media_previous_track", t), disabled: !Ae(t, Kd) },
          { html: l ? Ti.pause : Ti.play, aria: l ? "Pause" : "Play", act: Qt("media_player", "media_play_pause", t), disabled: !(Ae(t, Zd) || Ae(t, $d)) },
          { html: Ti.next, aria: "Next", act: Qt("media_player", "media_next_track", t), disabled: !Ae(t, Xd) }
        ]),
        Ae(t, a0) && m != null && Zo("vol", t, m, kt(t) + " volume", Math.round(m * 100) + "%")
      ] };
    }
    if (n === "vacuum") {
      const l = e.state === "cleaning", f = a.rooms || [], m = (M) => f.includes(M) ? f.filter((x) => x !== M) : f.concat(M), k = Qt("vacuum", l ? "pause" : "start", t, Pa(t) ? { rooms: f } : null);
      return { on: l || e.state === "returning", tone: "blue", button: { act: k, label: (l ? "Pause " : "Start ") + kt(t) }, parts: ["controls", "rooms"], sections: [
        fa("tfSeg", kt(t), [
          { label: l ? "Pause" : "Start", act: k },
          { label: "Dock", act: Qt("vacuum", "return_to_base", t), disabled: e.state === "docked" },
          { label: "Locate", act: Qt("vacuum", "locate", t) }
        ]),
        Pa(t) && fa("tfChips", "Rooms to clean", qt.rooms.filter((M) => M.id !== "balcony").map((M) => ({ label: M.name, act: Qt("vacuum", "set_rooms", t, { rooms: m(M.name) }), pressed: f.includes(M.name) })))
      ] };
    }
    if (n === "lock") {
      const l = e.state === "locked";
      return { on: !l, tone: "heat", button: { act: Qt("lock", l ? "unlock" : "lock", t), label: (l ? "Unlock " : "Lock ") + kt(t) }, parts: ["controls"], sections: [
        fa("tfSeg", kt(t), [
          { label: "Lock", act: Qt("lock", "lock", t), pressed: l },
          { label: "Unlock", act: Qt("lock", "unlock", t), pressed: e.state === "unlocked" },
          Ae(t, v0) && { label: "Open", act: Qt("lock", "open", t), pressed: e.state === "open" }
        ])
      ] };
    }
    if (n === "alarm_control_panel") {
      const l = e.state === "disarmed";
      return { on: !l, tone: e.state === "triggered" ? "alarm" : "blue", button: { act: Qt("alarm_control_panel", l ? "alarm_arm_away" : "alarm_disarm", t), label: l ? "Arm " + kt(t) + ", away" : "Disarm " + kt(t) }, parts: ["controls"], sections: [
        fa("tfSeg", kt(t), y0.filter(([, , , f]) => !f || Ae(t, f)).map(([f, m, k]) => ({ label: m, act: Qt("alarm_control_panel", k, t), pressed: e.state === f })))
      ] };
    }
    if (n === "valve") {
      const l = e.state === "open";
      return { on: l, tone: "blue", icon: "mdi:sprinkler-variant", button: i("valve", (l ? "Close " : "Open ") + kt(t)), parts: ["controls"], sections: [
        fa("tfSeg", kt(t), [
          { label: "Open", act: Qt("valve", "open_valve", t), pressed: l },
          { label: "Close", act: Qt("valve", "close_valve", t), pressed: !l }
        ])
      ] };
    }
    if (Ml.includes(n)) {
      const l = e.state === "on";
      return { on: l, button: i(n, "Turn " + kt(t) + (l ? " off" : " on")), parts: [], sections: [] };
    }
    return { on: !1, button: { act: "", label: kt(t) }, sections: [] };
  }
  const ma = (t) => (Number.isInteger(Number(t)) ? String(Number(t)) : Ve(t)) + "°";
  function Bo(t) {
    var U;
    const e = (B) => t.readings.find((Z) => jt(Z).device_class === B), a = e("temperature"), n = e("humidity"), i = (B) => {
      var Z;
      return Number((Z = y[B]) == null ? void 0 : Z.state);
    }, c = (B) => t.actions.filter((Z) => B.test(Z)), l = t.lights.filter((B) => {
      var Z;
      return ((Z = y[B]) == null ? void 0 : Z.state) === "on";
    }), f = c(/^cover\./), m = f.filter((B) => {
      var Z;
      return ((Z = y[B]) == null ? void 0 : Z.state) !== "closed";
    }), k = [...new Set(f.map((B) => kl(y[B])))], M = c(/^climate\./)[0], x = c(/^humidifier\./)[0], _ = c(/^media_player\./), T = _.find((B) => {
      var Z;
      return ((Z = y[B]) == null ? void 0 : Z.state) === "playing";
    }) || _.find((B) => {
      var Z;
      return ((Z = y[B]) == null ? void 0 : Z.state) === "paused";
    }), L = t.plugs.filter((B) => {
      var Z;
      return ((Z = y[B]) == null ? void 0 : Z.state) === "on";
    }), H = [];
    if (a && Number.isFinite(i(a)) && H.push({ key: "temp", id: a, kind: "reading", icon: Ya(a), label: "Temperature", value: Ve(i(a)) + "°" }), n && Number.isFinite(i(n)) && H.push({ key: "hum", id: n, kind: "reading", icon: Ya(n), label: "Humidity", value: Math.round(i(n)) + "%" }), t.lights.length && H.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: Ya("", "mdi:lightbulb"),
      label: "Lights",
      value: l.length ? l.length + " of " + t.lights.length + " on" : "All off",
      short: l.length ? l.length + " on" : "Off",
      on: l.length > 0,
      light: l.length ? Zi(l[0]) : "",
      acts: t.lights.map((B) => ["light", l.length ? "turn_off" : "turn_on", B]),
      aria: (l.length ? "Turn off" : "Turn on") + " the lights in " + t.name
    }), f.length) {
      const B = k.length === 1 ? c0[k[0]] : "covers", Z = Math.round(f.reduce((E, yt) => E + ia(yt), 0) / f.length);
      H.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        light: m.length ? Qa([146, 107, 199]) : "",
        icon: Ya("", ((U = Qd[k[0]]) == null ? void 0 : U[m.length ? 0 : 1]) || "mdi:window-shutter"),
        label: Jt(B),
        value: Z <= 0 ? "Closed" : Z >= 100 ? "Open" : Z + "% open",
        short: Z <= 0 ? "Closed" : Z + "%",
        on: m.length > 0,
        acts: f.map((E) => ["cover", m.length ? "close_cover" : "open_cover", E]),
        aria: (m.length ? "Close the " : "Open the ") + B + " in " + t.name
      });
    }
    if (M) {
      const B = jt(M), Z = y[M].state === "off";
      H.push({
        key: "climate",
        kind: "control",
        tone: B.hvac_action === "cooling" ? "cool" : "heat",
        light: Go(M) ? Qa(Go(M)) : "",
        icon: Ya(M),
        label: kt(M),
        value: Z ? "Off" : Jt(B.hvac_action || y[M].state) + " · " + ma(B.temperature),
        short: Z ? "Off" : ma(B.temperature),
        on: !Z,
        acts: [["climate", "toggle", M]],
        aria: "Turn " + kt(M) + (Z ? " on" : " off")
      });
    }
    if (x) {
      const B = y[x].state === "on";
      H.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        light: B ? Qa([33, 150, 243]) : "",
        icon: Ya("", "mdi:air-humidifier"),
        label: kt(x),
        value: B ? "On · " + jt(x).humidity + "%" : "Off",
        short: B ? jt(x).humidity + "%" : "Off",
        on: B,
        acts: [["humidifier", "toggle", x]],
        aria: "Turn " + kt(x) + (B ? " off" : " on")
      });
    }
    if (_.length) {
      const B = T || _[0], Z = y[B], E = Z.state === "playing";
      H.push({
        key: "media",
        kind: "control",
        tone: "blue",
        light: Go(B) ? Qa(Go(B)) : "",
        icon: Ya(B),
        label: kt(B),
        value: De(B),
        short: E ? "Playing" : Z.state === "paused" ? "Paused" : Jt(Z.state),
        on: E,
        acts: [["media_player", Z.state === "playing" || Z.state === "paused" ? "media_play_pause" : "toggle", B]],
        aria: (E ? "Pause " : "Play ") + kt(B)
      });
    }
    return t.plugs.length && H.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      light: L.length ? Qa([255, 193, 7]) : "",
      icon: Ya("", "mdi:power-plug"),
      label: "Plugs",
      value: L.length ? L.length + " of " + t.plugs.length + " on" : "All off",
      short: L.length ? L.length + " on" : "Off",
      on: L.length > 0,
      acts: t.plugs.map((B) => ["switch", L.length ? "turn_off" : "turn_on", B]),
      aria: (L.length ? "Turn off" : "Turn on") + " the plugs in " + t.name
    }), t.alerts.forEach((B) => H.push(jt(B).device_class === "moisture" ? { key: "alert:" + B, kind: "alert", icon: Ya(B), label: "Water leak" } : { key: "note:" + B, kind: "note", icon: Ya(B), label: kt(B) + " " + De(B).toLowerCase() })), H;
  }
  const Sn = (t, e) => {
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
          var c;
          return ((c = y[i]) == null ? void 0 : c.state) === "playing";
        }) || n.find((i) => {
          var c;
          return ((c = y[i]) == null ? void 0 : c.state) === "paused";
        }) || n[0]].filter(Boolean);
      })()
    }[e] || [];
  }, Qi = (t, e, a) => '<button class="' + e + (t.on ? " on" : "") + '" type="button" data-tone="' + t.tone + '" data-acts="' + To(t.acts) + '" aria-label="' + q(t.aria) + '" aria-pressed="' + t.on + '">' + a + "</button>", ts = (t) => '<button class="tfAName" type="button" data-go="' + q(t.id) + '" aria-label="Open ' + q(t.name) + '">' + q(t.name) + "</button>";
  function oo(t, e, a = !1) {
    const n = e.find((f) => f.key === "lights"), i = !!(n != null && n.on), c = "", l = '<span class="tfAreaGlyph"' + fe("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span>";
    return a || !n ? '<span class="tfIcon tfAreaIcon' + (i ? " on" : "") + '"' + c + ' aria-hidden="true">' + l + "</span>" : '<button class="tfIcon tfAreaIcon' + (i ? " on" : "") + '" type="button"' + c + ' data-acts="' + To(n.acts) + '" aria-label="' + q(n.aria) + '" aria-pressed="' + i + '">' + l + "</button>";
  }
  const Xr = (t) => t.filter((e) => e.kind === "alert" || e.kind === "note").map((e) => '<span class="sourceTag">' + q(e.label) + "</span>").join(" "), Te = (t) => t.readings.find((e) => jt(e).device_class === "temperature") || [...t.readings, ...t.solar, ...t.openings, ...t.actions, ...t.plugs].find((e) => y[e]) || null, Xn = (t, e) => {
    const a = kt(e);
    return a.toLowerCase().startsWith(t.name.toLowerCase() + " ") ? Jt(a.slice(t.name.length + 1)) : a;
  };
  function $n(t) {
    const e = y[t], a = jt(t), n = t.split(".")[0], i = Number(e.state);
    if (e.state === "unavailable") return { text: "Unavailable" };
    if (n === "sensor" && Number.isFinite(i)) {
      if (a.device_class === "temperature") return { text: ma(i) };
      const c = a.unit_of_measurement || "";
      return c === "%" ? { text: Math.round(i) + "%" } : { text: Ve(i, Number.isInteger(i) ? 0 : 1), unit: c };
    }
    if (n === "climate" && (a.current_temperature ?? a.temperature) != null) return { text: ma(a.current_temperature ?? a.temperature) };
    if (n === "light") return { text: e.state !== "on" ? "Off" : ze(t) ? $a(e) + "%" : "On" };
    if (n === "cover") {
      const c = ia(t);
      return { text: c <= 0 ? "Closed" : c >= 100 ? "Open" : c + "%" };
    }
    return n === "humidifier" ? { text: e.state === "on" ? a.humidity + "%" : "Off" } : n === "media_player" ? { text: e.state === "playing" ? "Playing" : e.state === "paused" ? "Paused" : Jt(e.state) } : { text: De(t) };
  }
  const Jn = (t, e, a) => {
    const n = a.find((f) => f.key === "temp"), i = a.find((f) => f.key === "hum"), c = jt(e), l = y[e].state === "off";
    return e.startsWith("climate.") ? [Xn(t, e), l ? "Off" : Jt(c.hvac_action || y[e].state) + (c.temperature != null ? " · " + ma(c.temperature) : ""), i && i.value + " humidity"].filter(Boolean).join(" · ") : [!(n && n.id === e) && Xn(t, e), n && n.id !== e && n.value, i && i.id !== e && i.value + " humidity"].filter(Boolean).join(" · ");
  };
  function $r(t, e, a) {
    const n = a && $n(a), i = a ? Jn(t, a, e) : "", c = (m) => {
      const k = Sn(t, m.key);
      return k.length === 1 ? k[0] : "group:" + t.id + ":" + m.key;
    }, l = e.filter((m) => m.kind === "control").slice(0, 4).map((m) => '<div class="tfATile' + (m.on ? " on" : "") + '" data-tone="' + m.tone + '"' + (m.light ? ' data-light style="' + m.light + '"' : "") + ">" + Qi(m, "tfIcon", m.icon) + '<button class="tfName" type="button" data-more="' + q(c(m)) + '" aria-label="' + q(t.name + " " + m.label.toLowerCase() + ", " + m.value + ". Open") + '"><span class="activityRowName">' + q(m.label) + '</span><span class="activityRowMeta">' + q(m.value) + "</span></button></div>"), f = Xr(e);
    return '<div class="hcAreaPanelTop">' + oo(t, e) + '<div class="tfATitle">' + ts(t) + "</div>" + (f ? '<div class="tfATags">' + f + "</div>" : "") + "</div>" + (a ? '<button class="tfABig" type="button" data-more="' + q(a) + '" aria-label="' + q(kt(a) + ", " + De(a) + ". More info") + '"><span class="tfABigMain' + (n.text.length > 7 ? " long" : "") + '">' + q(n.text) + (n.unit ? '<span class="tfABigUnit">' + q(n.unit) + "</span>" : "") + "</span>" + (i ? '<span class="tfABigSub">' + q(i) + "</span>" : "") + "</button>" : "") + (l.length ? '<div class="tfATiles">' + l.join("") + "</div>" : "");
  }
  function s(t) {
    const e = t.id === F, a = Bo(t), n = Te(t), i = n && $n(n), c = [...a.filter((l) => l.kind === "control"), ...a.filter((l) => l.kind !== "control" && l.kind !== "reading")].slice(0, 4);
    return '<article class="hcAreaPanel tfAreaPanel' + (e ? " active" : "") + '" data-area="' + q(t.id) + '" tabindex="0" aria-expanded="' + e + '" aria-label="' + q(t.name) + '"><div class="panelExpanded"' + (e ? "" : " inert") + ">" + $r(t, a, n) + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop">' + oo(t, a, !0) + '<span class="tfACName">' + q(t.name) + '</span></div><span class="tfACMain">' + (i ? q(i.text + (i.unit ? " " + i.unit : "")) : "") + '</span><span class="tfACTiles" aria-hidden="true">' + c.map((l) => '<span class="tfACTile"><span class="tfIcon' + (l.kind === "alert" ? " alert" : "") + '"' + (l.on && l.light ? ' data-light style="' + l.light + '"' : "") + ">" + l.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let u = [];
  const h = (t) => {
    const e = mt.areaOrder || [], a = (n) => {
      const i = e.indexOf(n.id);
      return i < 0 ? e.length + t.indexOf(n) : i;
    };
    return [...t].sort((n, i) => a(n) - a(i));
  }, b = () => {
    var e;
    const t = new Set(((e = mt.dash) == null ? void 0 : e.areasOff) || []);
    return h(u).filter((a) => !t.has(a.id));
  }, A = (t) => {
    var a;
    const e = b();
    return e.some((n) => n.id === F) || (F = ((a = e[0]) == null ? void 0 : a.id) || null), '<div class="tfAreas" data-tf data-k="areas" style="order:' + t + '"><section class="hcAreaGallery tfAreaGallery" aria-label="Areas">' + e.map(s).join("") + "</section></div>";
  }, P = (t) => t.startsWith("room:"), W = (t) => u.find((e) => "room:" + e.id === t);
  function G(t, e) {
    const a = Bo(t), n = Te(t), i = n && $n(n), c = n ? Jn(t, n, a) : "", l = i ? i.text + (i.unit ? " " + i.unit : "") : "", f = (_) => {
      const T = Sn(t, _.key);
      return T.length === 1 ? T[0] : "group:" + t.id + ":" + _.key;
    }, m = a.filter((_) => _.kind === "control").slice(0, 4), k = (_) => _.on && _.light ? ' data-light style="' + _.light + '"' : "", M = m.map((_) => '<button class="tfIcon' + (_.on ? " on" : "") + '" type="button" data-tone="' + _.tone + '"' + k(_) + ' data-more="' + q(f(_)) + '" aria-label="' + q(_.label + ", " + _.value + ". Open its controls") + '">' + _.icon + "</button>"), x = m.map((_) => '<button class="tfRoomDev" type="button" data-more="' + q(f(_)) + '" aria-label="' + q(_.label + ", " + _.value + ". Open its controls") + '"><span class="tfIcon' + (_.on ? " on" : "") + '" data-tone="' + _.tone + '"' + k(_) + ">" + _.icon + '</span><span class="tfRoomDevName"><span class="activityRowName">' + q(_.label) + '</span><span class="activityRowMeta">' + q(_.value) + "</span></span></button>");
    return '<div class="tfAction tfRoomTile" data-k="' + q(e) + '" data-go="' + q(t.id) + '"><div class="tfActionHead"><span class="tfIcon tfRoomIcon" aria-hidden="true"><span class="tfAreaGlyph"' + fe("area:" + t.id, t.icon || "mdi:texture-box", t.name) + '></span></span><button class="tfName" type="button" data-go="' + q(t.id) + '" aria-label="Open ' + q(t.name) + '"><span class="activityRowName">' + q(t.name) + "</span>" + (l || c ? '<span class="activityRowMeta">' + (l ? '<span class="tfRoomInline">' + q(l) + (c ? " · " : "") + "</span>" : "") + q(c) + "</span>" : "") + "</button></div>" + (l ? '<div class="tfRoomReading" aria-hidden="true"><span class="tfRoomBig">' + q(l) + "</span>" + (c ? '<span class="tfRoomSub">' + q(c) + "</span>" : "") + "</div>" : "") + (M.length ? '<div class="tfRoomDevices">' + M.join("") + '</div><div class="tfRoomHeads">' + x.join("") + "</div>" : "") + "</div>";
  }
  const N = () => [
    { key: "home", name: "Home", ids: qt.homeVacuums },
    ...qt.rooms.map((t) => ({ key: "room:" + t.id, name: t.name, room: t, ids: t.actions }))
  ], K = (t, e, a) => t + " " + (t === 1 ? e : a), $ = () => (mt.favourites ?? je.favorite_entities ?? []).filter((t) => y[t]);
  function ut() {
    if (!So) {
      const e = Object.entries(Oa).sort((n, i) => i[1] - n[1]).map(([n]) => n), a = qt.rooms.flatMap((n) => n.actions);
      So = [.../* @__PURE__ */ new Set([...Vo, ...e, ...a.filter((n) => ca(n).on), ...a])];
    }
    const t = $();
    return So.filter((e) => y[e] && y[e].state !== "unavailable" && !t.includes(e));
  }
  let Et = !1;
  const _t = 6;
  function Mt() {
    if (!Et || mt.favSeeded || !qt.rooms.length || S) return;
    const t = (a) => Object.keys(y).find((n) => Pa(n) && a(n)), e = [t((a) => a.startsWith("climate.")), t((a) => a.startsWith("cover.") && /curtain/.test(a)), t((a) => a.startsWith("valve.")), qt.security.locks[0]];
    mt = { ...mt, favourites: [.../* @__PURE__ */ new Set([...mt.favourites ?? je.favorite_entities ?? [], ...e.filter(Boolean)])].slice(0, _t), favSeeded: !0 }, He();
  }
  const It = () => mt.suggest ?? !je.hide_suggested_entities;
  function Tt() {
    const t = new Set(S ? [] : mt.favHidden || []), e = $().filter((i) => !t.has(i)), a = It() ? ut().filter((i) => !t.has(i) && ns(i)) : [], n = Math.max(_t, e.length);
    return [...e, ...a].slice(0, S && !ci() ? n : Math.min(k0, n));
  }
  const st = (t) => {
    const e = $().includes(t);
    return '<button class="tfStar" type="button" data-star="' + q(t) + '" aria-pressed="' + e + '" aria-label="Favourite: ' + q(kt(t)) + '">' + w0(e) + "</button>";
  };
  function Bt(t, { area: e = !1, star: a = !1, plain: n = !1, say: i = null, alert: c = !1 } = {}) {
    var L, H, U, B, Z, E;
    const l = n && ((Z = (L = d()) == null ? void 0 : L.devices) == null ? void 0 : Z[(B = (U = (H = d()) == null ? void 0 : H.entities) == null ? void 0 : U[t]) == null ? void 0 : B.device_id]), f = l && (l.name_by_user || l.name) || kt(t), m = t.split(".")[0], k = !n && Mr.includes(m) ? ca(t) : null, M = k ? k.on : ["on", "open", "playing"].includes((E = y[t]) == null ? void 0 : E.state), x = n ? null : k ? k.button : Ml.includes(m) ? { act: Qt(m, "toggle", t), label: "Turn " + kt(t) + (M ? " off" : " on") } : m === "scene" || m === "script" ? { act: Qt(m, "turn_on", t), label: "Run " + kt(t) } : null, _ = (i ?? De(t)) + (e && Ct.get(t) ? " · " + Ct.get(t) : ""), T = (k == null ? void 0 : k.icon) || sa(t);
    return '<div class="activityRow' + (x ? " tfPlug" : "") + (M ? " on" : "") + (a ? " tfPick" : "") + (c ? " alert" : "") + '" data-k="' + q((e ? "fav:" : "row:") + t) + '" data-tone="' + (m === "light" ? "light" : (k == null ? void 0 : k.tone) || "blue") + '"' + bn(t) + ">" + (x && !a ? '<button class="tfIcon" type="button" data-act="' + x.act + '" aria-label="' + q(x.label) + '"' + fe(t, T) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + fe(t, T) + "></div>") + '<button class="tfName" type="button" data-more="' + q(t) + '" aria-label="' + q(f + ", " + _ + ". More info") + '"><span class="activityRowName">' + q(f) + '</span><span class="activityRowMeta">' + q(_) + "</span></button>" + (a ? st(t) : "") + "</div>";
  }
  const Pt = () => {
    var t;
    return y[(t = mt.sources) == null ? void 0 : t.weather] ? mt.sources.weather : y["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(y).find((e) => e.startsWith("weather."));
  };
  function ue() {
    var a;
    const t = (n) => Object.keys(y).filter((i) => i.startsWith("binary_sensor.") && n.includes(jt(i).device_class));
    return ((a = Xa.alert_entities) != null && a.length ? Xa.alert_entities : [...t(["moisture", "smoke", "gas"]).map((n) => ({ entity: n, severity: "alert" })), ...t(Ei).map((n) => ({ entity: n, severity: "warning" }))]).filter((n) => y[n.entity]).map((n) => ({ ...n, on: ["on", "open", "unlocked", "triggered", "problem"].includes(y[n.entity].state) }));
  }
  function St() {
    const t = Object.keys(xr), e = /* @__PURE__ */ new Set(), a = [];
    (je.shortcuts || []).forEach((c) => {
      if (c.type === "summary") {
        if (!t.includes(c.key) || e.has(c.key)) return;
        e.add(c.key);
      }
      a.push(c);
    }), t.forEach((c) => {
      e.has(c) || a.push({ type: "summary", key: c });
    });
    const n = oe().sumOrder || [], i = (c) => c.type === "summary" && n.includes(c.key) ? n.indexOf(c.key) : n.length;
    return n.length ? a.map((c, l) => [c, l]).sort((c, l) => i(c[0]) - i(l[0]) || c[1] - l[1]).map(([c]) => c) : a;
  }
  function ne() {
    var U;
    const t = ((U = d()) == null ? void 0 : U.entities) || {}, e = (B) => jt(B).device_class, a = Object.keys(y).filter((B) => B.startsWith("sensor.") && e(B) === "battery" || B.startsWith("binary_sensor.") && ["battery", "problem"].includes(e(B))), n = qt.rooms.flatMap((B) => B.plants.map((Z) => Z.id));
    if (!a.length && !n.length) return null;
    const i = (B) => {
      var E;
      const Z = (E = t[B]) == null ? void 0 : E.device_id;
      return !!Z && Object.keys(y).some((yt) => {
        var zt;
        return yt.startsWith("binary_sensor.") && ((zt = t[yt]) == null ? void 0 : zt.device_id) === Z && e(yt) === "battery_charging" && y[yt].state === "on";
      });
    }, c = (B) => B.startsWith("vacuum.") ? jt(B).battery_level <= 20 && y[B].state !== "docked" : B.startsWith("binary_sensor.") ? e(B) === "battery" && y[B].state === "on" : parseFloat(y[B].state) <= 20 && !i(B), l = [...a, ...qt.vacuums].filter((B) => y[B] && c(B)), f = [...a.filter((B) => e(B) === "problem" && y[B].state === "on"), ...n.filter((B) => {
      var Z;
      return ((Z = y[B]) == null ? void 0 : Z.state) === "problem";
    })], m = a.filter((B) => y[B].state === "unavailable"), k = [.../* @__PURE__ */ new Set([...l, ...f, ...m])], M = (B) => {
      const Z = parseFloat(y[B].state);
      return e(B) === "battery" && Number.isFinite(Z) ? Z : 101;
    }, x = [...n, ...qt.vacuums, ...[...a].sort((B, Z) => M(B) - M(Z))].filter((B) => y[B] && !k.includes(B)), _ = /* @__PURE__ */ new Map();
    x.forEach((B) => {
      var E;
      const Z = ((E = qt.areaOf) == null ? void 0 : E.call(qt, B)) || "";
      _.set(Z, [..._.get(Z) || [], B]);
    });
    const T = (B) => {
      const Z = qt.rooms.findIndex((E) => E.id === B);
      return B === "" ? 1 / 0 : Z < 0 ? qt.rooms.length : Z;
    }, L = [..._.keys()].sort((B, Z) => T(B) - T(Z)), H = (B) => {
      var Z, E, yt, zt;
      return ((Z = qt.rooms.find((Ht) => Ht.id === B)) == null ? void 0 : Z.name) || ((zt = (yt = (E = d()) == null ? void 0 : E.areas) == null ? void 0 : yt[B]) == null ? void 0 : zt.name) || B;
    };
    return {
      value: [l.length && K(l.length, "low battery", "low batteries"), f.length && K(f.length, "problem", "problems"), m.length && K(m.length, "unavailable device", "unavailable devices")].filter(Boolean).join(", ") || "All good",
      plain: !0,
      groups: [{ name: "Needs attention", ids: k, alert: !0 }, ...L.map((B) => ({ name: B ? H(B) : L.length > 1 ? "Other devices" : "Devices", ids: _.get(B) }))].filter((B) => B.ids.length)
    };
  }
  const oe = () => S ? mt.home || {} : mt, Ge = (t) => tp.includes(t) ? (oe().shownSums || []).includes(t) : !(oe().hiddenSums || []).includes(t);
  function no(t, e, a) {
    const n = t.flatMap((_) => a(_, /^cover\./)), i = n.filter((_) => {
      var T;
      return ["open", "opening"].includes((T = y[_]) == null ? void 0 : T.state);
    }).length, c = Object.keys(y).filter((_) => _.startsWith("person.")), l = c.filter((_) => {
      var T;
      return ((T = y[_]) == null ? void 0 : T.state) === "home";
    }).length, f = qt.security.openings.filter((_) => y[_]), m = f.filter((_) => y[_].state === "on").length, k = Object.keys(y).filter((_) => _.startsWith("binary_sensor.") && jt(_).device_class === "moisture"), M = k.filter((_) => y[_].state === "on").length, x = qt.vacuums.filter((_) => y[_]);
    return {
      covers: n.length && { value: i ? i + " open" : "All closed", groups: e((_) => a(_, /^cover\./)) },
      people: c.length && { value: l ? l + " home" : "Nobody home", groups: [{ name: "People", ids: c }] },
      openings: f.length && { value: m ? m + " open" : "All closed", groups: [{ name: "Doors and windows", ids: f }] },
      leaks: k.length && { value: M ? K(M, "leak", "leaks") : "All dry", groups: [{ name: "Leak sensors", ids: k }] },
      vacuum: x.length && { value: Jt(y[x[0]].state), groups: [{ name: "Vacuum", ids: x }] }
    };
  }
  function Qo(t = !1) {
    var we;
    const e = qt.rooms, a = qt.security, n = (Lt, Wt) => Lt.actions.filter((Ze) => Wt.test(Ze)), i = (Lt) => e.map((Wt) => ({ name: Wt.name, ids: Lt(Wt) })).filter((Wt) => Wt.ids.length), c = e.flatMap((Lt) => Lt.lights), l = c.filter((Lt) => {
      var Wt;
      return ((Wt = y[Lt]) == null ? void 0 : Wt.state) === "on";
    }).length, f = e.map((Lt) => Lt.readings.find((Wt) => jt(Wt).device_class === "temperature")).filter(Boolean).map((Lt) => Number(y[Lt].state)).filter(Number.isFinite), [m, k] = [Ve(Math.min(...f)), Ve(Math.max(...f))], M = e.flatMap((Lt) => n(Lt, /^media_player\./)), x = M.filter((Lt) => {
      var Wt;
      return ((Wt = y[Lt]) == null ? void 0 : Wt.state) === "playing";
    }).length, _ = ue(), T = _.filter((Lt) => Lt.severity === "warning" && Lt.on).length, L = a.locks.filter((Lt) => {
      var Wt;
      return ["unlocked", "jammed", "open"].includes((Wt = y[Lt]) == null ? void 0 : Wt.state);
    }).length, H = a.alarms.filter((Lt) => {
      var Wt;
      return ((Wt = y[Lt]) == null ? void 0 : Wt.state) === "disarmed";
    }).length, U = T ? K(T, "warning", "warnings") : null, B = L ? L + " unlocked" : H ? H + " disarmed" : U ? null : "All secure", Z = ne(), E = e.flatMap((Lt) => Lt.solar), yt = E.find((Lt) => Lt.endsWith("_power")), zt = {
      light: c.length && { value: l ? l + " on" : "All off", groups: i((Lt) => Lt.lights) },
      climate: f.length && { value: m === k ? m + "°" : m + " - " + k + "°", groups: i((Lt) => [...Lt.readings.filter((Wt) => ["temperature", "humidity"].includes(jt(Wt).device_class)), ...n(Lt, /^(climate|humidifier)\./)]) },
      security: (a.alarms.length || a.locks.length) && { value: [U, B].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...a.alarms, ...a.locks] }, { name: "Doors and windows", ids: a.openings }].filter((Lt) => Lt.ids.length) },
      media_players: M.length && { value: x ? x + " playing" : "No media playing", groups: i((Lt) => n(Lt, /^media_player\./)) },
      maintenance: Z,
      energy: qt.grid && { value: _o(Number(((we = y[yt]) == null ? void 0 : we.state) || 0) * 1e3 + Number(y[qt.grid].state)) + " now", groups: [{ name: "Energy", ids: [...E, qt.grid] }] },
      ...no(e, i, n)
    }, Ht = [], Xt = _.filter((Lt) => Lt.severity !== "warning" && Lt.on);
    return Xt.length && Ht.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: K(Xt.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: Xt.map((Lt) => Lt.entity) }] }), St().forEach((Lt) => {
      Lt.type !== "summary" ? Ht.push({ key: "path:" + Lt.path, name: Lt.label || Lt.path, icon: Lt.icon || "mdi:link-variant", colour: "", value: "" }) : !Lt.hidden && zt[Lt.key] && (t || Ge(Lt.key)) && Ht.push({ key: Lt.key, ...xr[Lt.key], ...zt[Lt.key] });
    }), Ht;
  }
  const Qn = (t) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + q(t.key) + '" data-k="sum:' + q(t.key) + '" aria-label="' + q(t.name + (t.value ? ", " + t.value : "")) + '"' + (t.key === "alerts" ? ' style="--sum:' + t.colour + ';--sum-ink:#ffffff"' : t.key === "climate" ? ' style="' + Ui() + '"' : t.colour && gn(t.colour) ? ' style="' + gn(t.colour).slice(1) + '"' : "") + ">" + (t.key === "climate" ? Yi : "") + '<div class="tfIcon" aria-hidden="true"' + fe(t.id || "", t.icon, t.name) + '></div><div><div class="activityRowName">' + q(t.name) + "</div>" + (t.value ? '<div class="activityRowMeta">' + q(t.value) + "</div>" : "") + "</div></div>";
  function tr(t) {
    const e = $();
    mt = { ...mt, favourites: e.includes(t) ? e.filter((a) => a !== t) : [...e, t], favHidden: (mt.favHidden || []).filter((a) => a !== t) }, He(), Ce();
  }
  function Ut(t) {
    document.querySelector("home-assistant") && (window.history.pushState(null, "", t), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function Wa(t, e) {
    if (t.startsWith("path:")) {
      Ut(t.slice(5));
      return;
    }
    pi("summary:" + t, e);
  }
  async function Ro() {
    const t = (l) => Promise.resolve().then(() => C(l)).catch(() => null), [e, a, n, i] = await Promise.all([
      t({ type: "frontend/get_user_data", key: ep }),
      t({ type: "frontend/get_system_data", key: "home" }),
      t({ type: "frontend/get_system_data", key: "security" }),
      t({ type: "usage_prediction/common_control" })
    ]), c = (e == null ? void 0 : e.value) || {};
    mt = { favourites: c.favourites ?? null, sources: c.sources, hiddenSums: c.hiddenSums, shownSums: c.shownSums, home: c.home, dash: c.dash, named: c.named, favHidden: c.favHidden, suggest: c.suggest, favSeeded: c.favSeeded, favsTitle: c.favsTitle, areaOrder: c.areaOrder }, je = (a == null ? void 0 : a.value) || {}, Xa = (n == null ? void 0 : n.value) || {}, Vo = Array.isArray(i == null ? void 0 : i.entities) ? i.entities : [], So = null, Object.keys(y).length && Ce(), er(), Et = !0, Mt();
  }
  const tn = "HomeCore";
  async function er() {
    var n, i, c;
    const t = location.pathname.split("/")[1], e = mt.named || [];
    if (!((i = (n = d()) == null ? void 0 : n.user) != null && i.is_admin) || !t || e.includes(t)) return;
    const a = () => {
      mt = { ...mt, named: [...e, t] }, He();
    };
    try {
      const l = (c = await C({ type: "lovelace/dashboards/list" })) == null ? void 0 : c.find((k) => k.url_path === t);
      if (!l || l.mode === "yaml") return;
      if (l.title === tn) {
        a();
        return;
      }
      const f = await C({ type: "lovelace/config", url_path: t }), m = ((f == null ? void 0 : f.views) || []).flatMap((k) => [...k.cards || [], ...(k.sections || []).flatMap((M) => M.cards || [])]);
      if (!m.length || !m.every((k) => (k == null ? void 0 : k.type) === "custom:homecore-card" && !k.page)) return;
      await C({ type: "lovelace/dashboards/update", dashboard_id: l.id, title: tn }), a();
    } catch {
    }
  }
  let Po = null, Ho = 0, Ie = !1;
  const Pl = (t) => {
    const e = t.split(".")[0], a = jt(t).device_class;
    return x0.includes(e) && (e !== "binary_sensor" || Ei.includes(a) || !!cp[a]);
  }, es = (t) => t.startsWith("binary_sensor.") ? cp[jt(t).device_class] : null;
  async function Xp() {
    var t;
    if (!(Ie || Date.now() - Ho < 30 * 1e3)) {
      Ie = !0, Ho = Date.now();
      try {
        const e = Object.keys(((t = d()) == null ? void 0 : t.states) || {}).filter(Pl), a = e.length ? await C({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: e }) : null;
        Po = Array.isArray(a) ? a.filter((n) => n.entity_id && n.state != null && n.when) : null;
      } catch {
        Po = null;
      }
      Ie = !1, Ce();
    }
  }
  function $p() {
    const t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map(), a = (i) => {
      if (!y[i.entity_id] || !Pl(i.entity_id) || !ns(i.entity_id) || ["unavailable", "unknown"].includes(i.state)) return;
      if (es(i.entity_id)) {
        const l = e.get(i.entity_id);
        i.state === "on" ? (!l || i.when > l.when + 1) && e.set(i.entity_id, { ...i, alarm: !0, cleared: null }) : l && !l.cleared && i.when > l.when && (l.cleared = i.when);
        return;
      }
      const c = t.get(i.entity_id);
      (!c || i.when > c.when + 1) && t.set(i.entity_id, i);
    };
    [...Po || []].sort((i, c) => i.when - c.when).forEach(a);
    const n = Po ? Ho / 1e3 - 5 : 0;
    return Object.keys(y).forEach((i) => {
      var f;
      const c = y[i], l = c.last_changed ? Date.parse(c.last_changed) / 1e3 : 0;
      l > n && a({ entity_id: i, state: c.state, when: l, context_user_id: (f = c.context) == null ? void 0 : f.user_id });
    }), [...t.values(), ...e.values()].sort((i, c) => c.when - i.when).slice(0, M0);
  }
  function Jp(t) {
    var n;
    const e = t.context_user_id && Object.keys(y).find((i) => i.startsWith("person.") && jt(i).user_id === t.context_user_id);
    if (e) return kt(e);
    const a = (n = d()) == null ? void 0 : n.user;
    return a && t.context_user_id === a.id ? a.name : ["automation", "script"].includes(t.context_domain) || t.context_event_type === "automation_triggered" ? t.context_name || "Home Assistant" : "";
  }
  function Qp(t) {
    const e = t.entity_id.split(".")[0], a = String(t.state);
    return e === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[a] || Jt(a).toLowerCase() : e === "cover" || e === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[a] || Jt(a).toLowerCase() : e === "binary_sensor" ? a === "on" ? "opened" : "closed" : e === "climate" ? a === "off" ? "turned off" : "set to " + Jt(a).toLowerCase() : e === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[a] || Jt(a).toLowerCase() : e === "alarm_control_panel" ? (lp[a] || Jt(a)).toLowerCase() : e === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[a] || Jt(a).toLowerCase() : a === "on" ? "turned on" : a === "off" ? "turned off" : Jt(a).toLowerCase();
  }
  function tf(t) {
    const e = t.entity_id, a = t.alarm && es(e), n = kt(e) + " " + (a ? a[0] : Qp(t)), i = a ? Aa(t.when * 1e3) + (t.cleared ? " · " + a[1] + " since " + Aa(t.cleared * 1e3) : "") : [Jp(t), Aa(t.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow' + (a ? " alert" : "") + '"><div class="tfIcon' + (a ? " alert" : "") + '" aria-hidden="true"' + fe(e, sa(e)) + '></div><button class="tfName" type="button" data-more="' + q(e) + '" data-at="' + Math.round(t.when * 1e3) + '" aria-label="' + q(n + ", " + i + ". More info") + '"><span class="activityRowName">' + q(n) + '</span><span class="activityRowMeta">' + q(i) + "</span></button></div>";
  }
  let _a = null, Hl = 0;
  const ef = [["electricity", "Electricity", 4.3, "kWh"], ["solar", "Solar", 2.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function Ol() {
    var e;
    if (Date.now() - Hl < 5 * 60 * 1e3) return;
    Hl = Date.now();
    const t = [];
    try {
      const a = ((e = await C({ type: "energy/get_prefs" })) == null ? void 0 : e.energy_sources) || [], n = (i) => a.filter((c) => c.type === i).flatMap((c) => i === "grid" ? (c.flow_from || []).map((l) => l.stat_energy_from) : [c.stat_energy_from]).filter(Boolean);
      for (const [i, c, l] of [["electricity", "Electricity", n("grid")], ["solar", "Solar", n("solar")], ["gas", "Gas", n("gas")], ["water", "Water", n("water")]]) {
        if (!l.length) continue;
        const f = await Promise.all(l.map((m) => Promise.resolve(C({ type: "recorder/statistic_during_period", statistic_id: m, calendar: { period: "day" }, types: ["change"] })).then((k) => Number(k == null ? void 0 : k.change) || 0, () => 0)));
        t.push({ key: i, name: c, id: l[0], ids: l, value: f.reduce((m, k) => m + k, 0), unit: jt(l[0]).unit_of_measurement || (i === "gas" || i === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    _a = t, Ce();
  }
  let An = null, Nl = [];
  function as() {
    var c;
    const t = Nl = _a != null && _a.length ? _a : ef.map(([l, f, m, k]) => {
      if (l === "solar") {
        const x = Object.keys(y).find((_) => _.endsWith("_solar_today") && !_.includes("made_up_energy"));
        x && Number.isFinite(Number(y[x].state)) && (m = Number(y[x].state));
      }
      const M = "sensor.made_up_energy_" + l;
      return y[M] = { entity_id: M, state: String(m), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: f + " today", unit_of_measurement: k, state_class: "total_increasing" } }, { key: l, name: f, id: M, value: m, unit: k };
    });
    ot.clear(), t.some((l) => l.id === An) || (An = t[0].id);
    const e = t.map((l) => {
      const f = Number(l.value).toLocaleString(void 0, { maximumFractionDigits: l.value < 10 ? 2 : 1 }) + " " + l.unit, m = S0[l.key], k = l.id === An;
      return ot.set(l.id, { name: l.name, text: f, icon: m }), '<div class="activityRow tap' + (k ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + q(l.id) + '" aria-pressed="' + k + '" aria-label="' + q(l.name + ", " + f) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + fe("", m, l.name) + '></div><div><div class="activityRowName">' + q(l.name) + '</div><div class="activityRowMeta">' + q(f) + "</div></div></div>";
    }), a = t.find((l) => l.id === An), n = (((c = ae().opts.energy) == null ? void 0 : c.graph) || "above") === "below", i = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + q(a.id) + '" role="img" aria-label="' + q(a.name) + ', last 24 hours"></svg></div>';
    return to("dash:energy", 0, "Energy today", e, i, Qo().some((l) => l.key === "energy") ? "summary:energy" : null, "tfDashCard tfDash-energy" + (n ? "" : " graphAbove"));
  }
  function Il(t) {
    const e = R.querySelector(".tfDash-energy"), a = e == null ? void 0 : e.querySelector(".tfDashGraph svg");
    !a || t === An || (An = t, e.querySelectorAll("[data-energy-pick]").forEach((n) => {
      const i = n.dataset.energyPick === t;
      n.classList.toggle("picked", i), n.setAttribute("aria-pressed", String(i));
    }), a.dataset.graph = t, a.dataset.drawn = "", da.set("dash:energy", as()), Ac(!0));
  }
  const Fl = {
    electricity: [15, 12, 10, 10, 10, 12, 25, 45, 40, 30, 25, 30, 35, 30, 25, 25, 35, 60, 80, 70, 55, 45, 30, 20],
    gas: [2, 2, 2, 2, 3, 8, 18, 20, 12, 6, 4, 4, 4, 4, 4, 5, 8, 14, 16, 14, 10, 6, 3, 2],
    water: [0, 0, 0, 0, 0, 2, 12, 18, 8, 4, 3, 4, 6, 3, 2, 3, 4, 6, 10, 8, 5, 5, 3, 1]
  }, ql = /* @__PURE__ */ new Map();
  async function af(t) {
    const e = /* @__PURE__ */ new Date(), a = new Date(e).setHours(0, 0, 0, 0), n = e.getHours(), i = e.getMinutes() / 60, c = Array.from({ length: 24 }, (f, m) => m <= n ? 0 : null);
    if (!t.ids) {
      const f = Fl[t.key] || Fl.electricity, m = f.map((M, x) => x < n ? M : x === n ? M * i : 0), k = m.reduce((M, x) => M + x, 0) || 1;
      return c.map((M, x) => M == null ? null : t.value * m[x] / k);
    }
    const l = ql.get(t.id);
    if (l && l.day === a && Date.now() - l.at < 5 * 60 * 1e3) return l.hours;
    try {
      const f = await C({ type: "recorder/statistics_during_period", start_time: new Date(a).toISOString(), end_time: e.toISOString(), statistic_ids: t.ids, period: "hour", types: ["change"] });
      t.ids.forEach((M) => ((f == null ? void 0 : f[M]) || []).forEach((x) => {
        const _ = typeof x.start == "number" ? x.start : Date.parse(x.start), T = new Date(_).getHours();
        _ >= a && T < n && (c[T] += Number(x.change) || 0);
      }));
      const m = new Date(e).setMinutes(0, 0, 0), k = await Promise.all(t.ids.map((M) => Promise.resolve(C({ type: "recorder/statistic_during_period", statistic_id: M, fixed_period: { start_time: new Date(m).toISOString(), end_time: e.toISOString() }, types: ["change"] })).then((x) => Number(x == null ? void 0 : x.change) || 0, () => 0)));
      c[n] = k.reduce((M, x) => M + x, 0);
    } catch {
    }
    return ql.set(t.id, { at: Date.now(), day: a, hours: c }), c;
  }
  async function of(t, e) {
    const a = await af(e);
    if (!t.isConnected) return;
    const n = Math.max(120, t.clientWidth || 260), i = Math.max(60, t.clientHeight || 130), c = 18, l = i - 18, f = n / 24, m = f * 0.72, k = (/* @__PURE__ */ new Date()).getHours(), M = a.map((U) => U ?? 0), x = Math.max(0, ...M), _ = (U) => l - (x > 0 ? U / x * (l - c) : 0), T = (U) => U.toLocaleString(void 0, { maximumFractionDigits: U < 10 ? 2 : 1 }) + " " + e.unit, L = (U) => String(U).padStart(2, "0") + ":00", H = x > 0 ? M.indexOf(x) : -1;
    t.setAttribute("viewBox", "0 0 " + n + " " + i), t.setAttribute("aria-label", e.name + " today by the hour: " + T(e.value) + (H >= 0 ? ", most " + T(x) + " at " + L(H) : "")), t.innerHTML = [c, (c + l) / 2, l].map((U) => '<line x1="0" x2="' + n + '" y1="' + U + '" y2="' + U + '" stroke="var(--line)" stroke-width="1"/>').join("") + a.map((U, B) => U > 0 ? '<rect x="' + (B * f + (f - m) / 2).toFixed(1) + '" y="' + _(U).toFixed(1) + '" width="' + m.toFixed(1) + '" height="' + (l - _(U)).toFixed(1) + '" rx="2" fill="' + (B === k ? "var(--primary)" : "var(--text)") + '"' + (B === k ? "" : ' fill-opacity=".5"') + "/>" : "").join("") + [0, 6, 12, 18].map((U) => '<text x="' + (U * f).toFixed(1) + '" y="' + (i - 3) + '">' + String(U).padStart(2, "0") + "</text>").join("") + (H >= 0 ? '<text x="0" y="11">Most: ' + q(T(x)) + " at " + L(H) + "</text>" : "");
  }
  function nf(t) {
    var e;
    (e = window.matchMedia) != null && e.call(window, "(prefers-reduced-motion: reduce)").matches || t.querySelectorAll("rect").forEach((a, n) => a.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], { duration: 500, delay: n * 18, easing: "cubic-bezier(.2,.7,.3,1)", fill: "backwards" }));
  }
  function Wl(t) {
    var n;
    if ((n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [e, a] = t.querySelectorAll("path");
    Lp(t, a, [e].filter(Boolean));
  }
  let Jr = null, os = 0;
  const ns = (t) => !t.startsWith("light.") || A0.includes((Ct.get(t) || "").toLowerCase()), rs = () => Math.max(2, an((R == null ? void 0 : R.clientWidth) || 0).n), jl = (t) => {
    const e = ca(t);
    return e.sections.map((a, n) => a && (e.parts || [])[n]).filter(Boolean);
  }, rf = (t) => jl(t).slice(0, or(t) - 1);
  function Vl(t) {
    const e = ae().tiles;
    if (e) return e.filter((n) => y[n] || W(n));
    if (!Jr) {
      const n = (i) => {
        var c;
        return (((c = y[i]) == null ? void 0 : c.state) === "on" ? 1e6 : 0) + (Oa[i] || 0);
      };
      Jr = {
        lights: qt.rooms.flatMap((i) => i.lights).filter((i) => {
          var c;
          return ns(i) && ((c = y[i]) == null ? void 0 : c.state) !== "unavailable";
        }).sort((i, c) => n(c) - n(i) || kt(i).localeCompare(kt(c))),
        climates: qt.rooms.flatMap((i) => i.actions.filter((c) => c.startsWith("climate.")))
      };
    }
    const a = Jr.climates.filter((n) => y[n]).slice(0, t > 3 ? 2 : 1);
    return [...Jr.lights.filter((n) => y[n]).slice(0, Math.max(0, t - a.length)), ...a];
  }
  const is = () => {
    var t;
    return ((t = mt.home) == null ? void 0 : t.welcome) ?? !0;
  }, sf = () => {
    var e, a;
    const t = (e = d()) == null ? void 0 : e.user;
    return (t == null ? void 0 : t.name) || ((a = Object.values(y).find((n) => {
      var i;
      return n.entity_id.startsWith("person.") && (t == null ? void 0 : t.id) && ((i = n.attributes) == null ? void 0 : i.user_id) === t.id;
    })) == null ? void 0 : a.attributes.friendly_name) || "";
  }, lf = () => {
    const t = (/* @__PURE__ */ new Date()).getHours(), e = sf();
    return (t >= 5 && t < 12 ? "Good morning" : t >= 12 && t < 18 ? "Good afternoon" : "Good evening") + (e ? ", " + e : "");
  }, zl = (t, e, a, n) => (i) => '<section class="card tfCard tfDashCard ' + t + '" data-tf data-k="' + e + '" aria-label="' + a + '">' + (n ? '<div class="activityHeader">' + (e === "favs" ? '<button class="activityTitle tfTitleBtn" type="button" data-more="favourites" aria-label="Favourites. More info">' + a + "</button>" : '<div class="activityTitle">' + a + "</div>") + "</div>" : "") + '<div class="activityRows">' + i + "</div></section>";
  function cf(t, e) {
    var c, l;
    t.dash = !0, t.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + ((S ? is() : ae().welcome) ? '<span class="tfGreeting">' + q(lf()) + "</span>" : "") + q(((l = (c = d()) == null ? void 0 : c.config) == null ? void 0 : l.location_name) || "Home") + "</h1>" }), e.length && t.push({ key: "sums", wrap: (f) => '<div class="tfDashBarRow" data-tf data-k="sums">' + zl("tfDash-bar", "sums-bar", "Summaries", !1)(f).replace(" data-tf", "") + "</div>", tiles: e.map((f) => ({ key: "sum:" + f.key, html: Qn(f) })) }), !S && b().length && t.push({ key: "areas", html: A(0) });
    const a = Tt();
    if (a.length && t.push({ key: "favs", wrap: zl("tfDash-favs", "favs", "Favourites", ti()), tiles: a.map((f) => ({ key: "fav:" + f, html: Bt(f, { area: !0 }) })) }), S)
      return Ol(), ac() && t.push({ key: "dash:energy", html: as() }), os = rs(), Vl(0).forEach((f) => t.push({
        key: "dash:tile:" + f,
        wrap: (m) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + q(f) + '">' + m + "</div>",
        tiles: [{ key: f, html: G(W(f), f) }]
      })), t;
    const n = $p();
    t.push({ key: "dash:act", html: to("dash:act", 0, "Activity", n.length ? n.map(tf) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), t.push({ key: "dash:energy", html: as() });
    const i = rs();
    return os = i, Vl(i >= 3 ? i : i * 2).forEach((f) => t.push({
      key: "dash:tile:" + f,
      wrap: (m) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + q(f) + '">' + m + "</div>",
      tiles: [{ key: f, html: P(f) ? G(W(f), f) : Kn(f, !1, rf(f)) }]
    })), Xp(), Ol(), t;
  }
  const ar = 252, se = 16, df = 200, pf = Math.round(ar * 1.25), ff = 60, Ta = ff + se, uf = 3, Gl = {
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
  }, hf = ["wx", "favs", "act", "energy", "avg"], Ul = ["XS", "S", "M", "L", "XL"], Yl = Ul.length, mf = ["Narrow", "Wide", "Really wide"], gf = { wx: 5, areas: 5, favs: 5, act: 5, energy: 4, avg: 4, aq: 4, pollen: 4, radar: 4, hourly: 4, sun: 4, moon: 4, uv: 4, humidity: 4, pressure: 4, wind: 4, visibility: 4 }, Zl = (t) => !t.includes(".") || !y[t] || t.startsWith("light.") && ua(t) ? Yl : Math.min(Yl, jl(t).length + 1), or = (t) => {
    const e = ae().opts[t] || {}, a = Zl(t), n = Number(e.h) || (e.tall ? 5 : gf[t] || Kl);
    return Math.max(1, Math.min(a, n));
  }, Kl = 2, bf = 90, wf = 56, ga = (t) => {
    var e;
    return Gl[t] || (t.startsWith("room:") ? ((e = u.find((a) => "room:" + a.id === t)) == null ? void 0 : e.name) || "Area" : kt(t));
  }, vf = 409, yf = 128;
  let ea = !1, Zt = null, Ue = null, ss = !1, en = /* @__PURE__ */ new Map(), Qr = 0, Oo = 0;
  const ro = ["title", "sums"], an = (t) => {
    const e = Math.max(1, Math.floor((t + se) / (df + se)));
    return { n: e, w: Math.max(1, Math.min(pf, Math.floor((t - (e - 1) * se) / e))) };
  }, ls = () => h(u), xf = () => {
    var e;
    const t = new Set(((e = mt.home) == null ? void 0 : e.areasOff) || []);
    return ls().filter((a) => !t.has(a.id)).map((a) => "room:" + a.id);
  };
  function kf() {
    const t = xf();
    return {
      cells: {},
      spans: { favs: 2 },
      hidden: Object.keys(Gl).filter((e) => {
        var a, n;
        return !["title", ...((a = mt.home) == null ? void 0 : a.sums) === !1 ? [] : ["sums"], ...((n = mt.home) == null ? void 0 : n.favs) === !1 ? [] : ["favs"], ...Cf() ? ["wx"] : [], ...ac() ? ["energy"] : []].includes(e);
      }),
      opts: { favs: { h: 5 }, ...Object.fromEntries(t.map((e) => [e, { h: 5 }])) },
      tiles: t,
      known: Ao,
      areasOff: []
    };
  }
  const ae = () => S ? kf() : cs(), cs = () => {
    let t = { cells: {}, spans: {}, hidden: [], opts: {}, ...mt.dash || {} };
    t.sumsOff && (t = { ...t, hidden: [...t.hidden, "sums"] });
    const e = Ao.filter((a) => !(t.known || []).includes(a) && !t.hidden.includes(a));
    return e.length ? { ...t, hidden: [...t.hidden, ...e] } : t;
  };
  function on(t) {
    S || (mt = { ...mt, dash: { ...t, known: Ao } }, He());
  }
  function nn() {
    const t = (e) => R.querySelector(e);
    return [
      ["title", t(".tfDashTitle"), "full"],
      ["sums", t(".tfDashBarRow"), "full"],
      ["wx", Na.wx, 2],
      ["areas", t(".tfAreas"), "areas"],
      ["favs", t(".tfDash-favs"), 2],
      ["act", t(".tfDash-act"), 2],
      ["energy", t(".tfDash-energy"), 2],
      ["avg", Na.avg, 2],
      ...Ao.map((e) => [e, Na[e], Wi[e] || 1]),
      ...[...R.querySelectorAll(".tfDashTiles > [data-k]")].map((e) => [e.dataset.k, e, 1, !0])
    ].filter(([, e]) => e == null ? void 0 : e.isConnected).map(([e, a, n, i = !1]) => ({ key: e, el: a, span: n, tile: i }));
  }
  const Xl = (t, e, a) => {
    var n;
    if (t.span === "full") return e;
    if (t.span === "areas") {
      const i = Math.ceil((vf + Math.max(0, b().length - 1) * (yf + se) + se) / (a + se));
      return Math.max(Math.min(e, 2), Math.min(i, e - (((n = ae().cells.areas) == null ? void 0 : n.col) || 0)));
    }
    return Math.min(e, ae().spans[t.key] ?? t.span);
  }, $l = (t) => or(t.key);
  function Jl(t, e, a = null) {
    const n = ae().cells, i = t.every((f) => !n[f.key] || n[f.key].col + f.cols <= e), c = (f) => n[f.key] || { row: 1e9, col: 0 };
    return (() => {
      const f = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Map(), k = (H, U, B, Z) => {
        for (let E = U; E < U + Z; E++) for (let yt = H; yt < H + B; yt++) if (f.has(yt + "," + E)) return !1;
        return !0;
      }, M = (H, U, B) => {
        for (let Z = B; Z < B + H.rows; Z++) for (let E = U; E < U + H.cols; E++) f.add(E + "," + Z);
        m.set(H.key, { col: U, row: B, cols: H.cols, rows: H.rows });
      }, x = (H, U, B) => {
        for (U = Math.max(0, Math.min(e - H.cols, U)), B = Math.max(0, B); !k(U, B, H.cols, H.rows); ) B++;
        M(H, U, B);
      }, _ = (H) => {
        for (let U = 0; ; U++) for (let B = 0; B <= e - H.cols; B++) if (k(B, U, H.cols, H.rows)) {
          M(H, B, U);
          return;
        }
      };
      a && x(a, Zt.col, Zt.row);
      const T = t.filter((H) => H !== a), L = (H, U) => c(H).row - c(U).row || c(H).col - c(U).col;
      return i ? (T.filter((H) => n[H.key]).sort(L).forEach((H) => x(H, n[H.key].col, n[H.key].row)), T.filter((H) => !n[H.key]).forEach(_), m) : ([...T].sort(L).forEach(_), m);
    })();
  }
  function Mf(t, e) {
    const a = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Map(), i = (c, l, f) => {
      for (let m = l; m < l + f.rows; m++) for (let k = c; k < c + f.cols; k++) if (a.has(k + "," + m)) return !1;
      return !0;
    };
    return t.forEach((c) => {
      for (let l = 0; ; l++) {
        let f = 0;
        for (; f <= e - c.cols && !i(f, l, c); ) f++;
        if (!(f > e - c.cols)) {
          for (let m = l; m < l + c.rows; m++) for (let k = f; k < f + c.cols; k++) a.add(k + "," + m);
          n.set(c.key, { col: f, row: l, cols: c.cols, rows: c.rows });
          return;
        }
      }
    }), n;
  }
  function ds() {
    const t = ae(), e = new Set(t.hidden), a = nn().filter((l) => !ro.includes(l.key));
    let n = en;
    if (!n.size) {
      const l = t.pegs || 4, f = a.filter((m) => !e.has(m.key));
      f.forEach((m) => {
        m.cols = Xl(m, l, ar), m.rows = $l(m) ?? Kl;
      }), n = Jl(f, l);
    }
    const i = (l) => !e.has(l.key) && n.get(l.key) || { row: 1e9, col: 0 };
    a.sort((l, f) => i(l).row - i(f).row || i(l).col - i(f).col);
    const c = (t.phone || []).map((l) => a.find((f) => f.key === l && !e.has(l))).filter(Boolean);
    return [...c, ...a.filter((l) => !c.includes(l))];
  }
  const Sf = () => {
    const t = ds();
    t.forEach((e, a) => e.el.style.setProperty("--o", String(3 + a))), ps([...nn().filter((e) => ro.includes(e.key)), ...t].map((e) => e.el));
  };
  function ps(t) {
    if (Zt) return;
    const e = o.activeElement;
    let a = null;
    for (const n of new Set(t.map((i) => {
      for (; i && i.parentElement !== R; ) i = i.parentElement;
      return i;
    }).filter(Boolean))) {
      const i = a ? a.nextSibling : R.querySelector(":scope > [data-tf]");
      if (n !== i)
        try {
          R.moveBefore ? R.moveBefore(n, i) : R.insertBefore(n, i);
        } catch {
          R.insertBefore(n, i);
        }
      a = n;
    }
    e && e !== o.activeElement && e.isConnected && e.focus({ preventScroll: !0 });
  }
  const Cn = (t, e) => on({ ...t, cells: e, pegs: an(R.clientWidth).n });
  function Be() {
    var Z;
    if (!w || !R) return;
    const t = R.clientWidth, e = t < 2 * ar + se, a = g.classList.contains("tfDash");
    S && (ea = !1), g.classList.toggle("tfOverview", S);
    const { n, w: i } = e ? { n: 2, w: Math.floor((t - se) / 2) } : an(t);
    pa.classList.add("tfPegs"), pa.style.setProperty("--peg-n", n), pa.style.setProperty("--peg-w", i + "px");
    const c = new Set(ae().hidden);
    Ao.forEach((E) => {
      var yt;
      return (yt = Na[E]) == null ? void 0 : yt.classList.toggle("tfNotAdded", c.has(E) && !(Zt != null && Zt.fromTray && Zt.key === E));
    }), Br(), g.classList.toggle("tfBoard", a), g.classList.toggle("tfEditing", a && ea && !e);
    const l = p("dashEditNav");
    !a && po && Es(!1), l && S ? (l.hidden = !a, po || (l.classList.remove("active"), l.setAttribute("aria-pressed", "false"), l.setAttribute("aria-label", "Edit Home page"), l.title = "Edit", l.innerHTML = Di)) : l && (l.hidden = !a || e, l.classList.toggle("active", ea), l.setAttribute("aria-pressed", String(ea)), l.setAttribute("aria-label", ea ? "Done editing" : "Edit custom dashboard"), l.title = ea ? "Done" : "Edit", l.innerHTML = ea ? sp : Di);
    const f = a ? nn() : [];
    if ((!a || !S) && R.querySelectorAll(":scope > :is(.hcFloor,.hcFloorBox)").forEach((E) => E.remove()), !a) {
      R.style.height = "", R.querySelectorAll(".tfBoardItem").forEach((E) => {
        E.classList.remove("tfBoardItem", "tfBoardHidden"), E.style.left = E.style.top = E.style.width = E.style.height = "";
      }), (Z = R.querySelector(".tfDash-act > .activityRows")) == null || Z.style.removeProperty("max-height"), ms(!1), g.classList.contains("tfDash") && Sf(), be();
      return;
    }
    if (S) {
      Lf(f, t, e);
      return;
    }
    R.style.setProperty("--peg-w", i + "px");
    const m = new Set(ae().hidden), k = i + se;
    Zt != null && Zt.fromTray && m.delete(Zt.key), f.forEach((E) => E.el.classList.toggle("tfBoardHidden", m.has(E.key)));
    const M = f.filter((E) => !m.has(E.key) && getComputedStyle(E.el).display !== "none");
    let x = 0;
    M.filter((E) => ro.includes(E.key)).forEach((E) => {
      E.el.classList.add("tfBoardItem"), Object.assign(E.el.style, { width: t + "px", height: "", left: "0px", top: x + "px" });
      const yt = E.key === "sums" && E.el.querySelector(".tfDash-bar"), zt = yt ? yt.querySelectorAll(".activityRow").length : 0;
      yt && (yt.style.maxWidth = "none");
      for (let Ht = 1; yt && Ht <= zt && (yt.style.setProperty("--bar-cols", String(Math.ceil(zt / Ht))), !(yt.offsetWidth <= t)); Ht++)
        ;
      yt && (yt.style.maxWidth = ""), x += E.el.offsetHeight + se;
    }), Oo = x;
    const _ = M.filter((E) => !ro.includes(E.key));
    _.forEach((E) => {
      E.cols = Xl(E, n, i), E.el.classList.add("tfBoardItem"), E.el.style.width = (E.cols === n ? t : E.cols * i + (E.cols - 1) * se) + "px", E.el.style.height = "", E.rows = $l(E) ?? Math.max(1, Math.ceil((E.el.offsetHeight + se - 6) / Ta));
    });
    const T = Zt && _.find((E) => E.key === Zt.key), L = e && ds().map((E) => E.key), H = (E) => L.includes(E.key) ? L.indexOf(E.key) : -1, U = e ? Mf([..._].sort((E, yt) => H(E) - H(yt)), n) : Jl(_, n, T);
    U.forEach((E) => Object.assign(E, { x: E.cols === n ? 0 : E.col * k, y: Oo + E.row * Ta, w: E.cols === n ? t : E.cols * i + (E.cols - 1) * se, h: E.rows * Ta - se })), _.forEach((E) => {
      const yt = U.get(E.key);
      E.el.style.height = yt.h + "px", E.el.dataset.rows = e && E.key === "wx" ? 5 : or(E.key), E.el.toggleAttribute("data-narrow", !e && yt.cols === 1 && n > 1), E.el.dataset.cols = yt.cols, E.el.classList.contains("tfDac") && E.el.style.setProperty("--tf-dac-pad", yt.h - bf + "px"), !(E === T && !Zt.fromTray) && (E.el.style.left = yt.x + "px", E.el.style.top = yt.y + "px");
    }), e || (en = U), ps([...M.filter((E) => ro.includes(E.key)), ..._.slice().sort((E, yt) => U.get(E.key).row - U.get(yt.key).row || U.get(E.key).col - U.get(yt.key).col)].map((E) => E.el)), [["favs", ".tfDash-favs"], ["act", ".tfDash-act"]].forEach(([E, yt]) => {
      const zt = U.get(E), Ht = zt && R.querySelector(yt), Xt = Ht == null ? void 0 : Ht.querySelector(":scope > .activityRows"), we = Ht == null ? void 0 : Ht.querySelector(":scope > .activityHeader");
      if (!Xt || !we) return;
      const Lt = Xt.getBoundingClientRect().top - Ht.getBoundingClientRect().top, Wt = zt.rows === 1 ? zt.h : Math.floor(zt.h - Lt - parseFloat(getComputedStyle(Ht).paddingBottom)), Ze = Math.max(1, Math.floor(Wt / wf));
      Xt.style.setProperty("--fill-row", (Wt / Ze).toFixed(2) + "px"), Xt.style.maxHeight = Wt + "px";
    }), Qr = Math.max(0, ...[...U.values()].map((E) => E.row + E.rows));
    let B = Oo + Qr * Ta - se;
    B = ms(ea && !e, _, U, B, n, i), R.style.height = B + "px", requestAnimationFrame(() => g.classList.add("tfBoardReady")), f.forEach((E) => hs.observe(E.el)), Ac(), be();
  }
  const aa = { gap: 20, phoneGap: 16, inner: 16, col: 252, row: 337, nameGap: 16, sumsGap: 16, full: 1336, floorTop: 12, floorHead: 24, floorGap: 16 }, Ql = { s: { w: 160, h: 192 }, m: { w: 200, h: 240 }, l: { w: 252, h: 337 } }, tc = () => {
    var t;
    return Ql[(t = mt.home) == null ? void 0 : t.areaSize] ? mt.home.areaSize : "s";
  }, fs = () => {
    var t;
    return ["rows", "columns", "bento"].includes((t = mt.home) == null ? void 0 : t.areaLayout) ? mt.home.areaLayout : "bento";
  }, ec = () => {
    var t;
    return ((t = mt.home) == null ? void 0 : t.cardsAs) === "rows" ? "rows" : "stacked";
  }, Af = { byFloor: !0, bentoBoxes: !0, bentoMixed: !1, favsTitle: !1 }, ti = () => S ? io("favsTitle") : mt.favsTitle !== !1, Cf = () => {
    var t;
    return !!((t = mt.home) != null && t.weather && Pt());
  }, ac = () => {
    var t;
    return !!((t = mt.home) != null && t.energy && (_a != null && _a.length));
  }, io = (t) => {
    var e;
    return ((e = mt.home) == null ? void 0 : e[t]) ?? Af[t];
  };
  function _f() {
    var i;
    const t = Object.values(((i = d()) == null ? void 0 : i.floors) || {}), e = new Set(t.map((c) => c.floor_id)), a = t.map((c) => ({ id: c.floor_id, name: c.name, rooms: u.filter((l) => l.floor === c.floor_id) })), n = u.filter((c) => !e.has(c.floor));
    return n.length && a.push({ id: "", name: t.length ? "Other areas" : "", rooms: n }), a;
  }
  const oc = (t) => t.classList.toggle("hcMore", t.scrollHeight - t.scrollTop - t.clientHeight > 1);
  let he = null, nc = [], nr = /* @__PURE__ */ new Map();
  function us(t) {
    let e = R.querySelector(".hcHomeLand");
    if (!t) {
      e == null || e.remove();
      return;
    }
    e || (e = Object.assign(document.createElement("div"), { className: "tfBoardLand hcHomeLand" }), R.appendChild(e)), Object.assign(e.style, { left: t.x + "px", top: t.y + "px", width: t.w + "px", height: t.h + "px" });
  }
  function Tf(t) {
    if (!S || !po || t.button !== 0 || R.clientWidth < 2 * ar + se) return;
    const e = t.target.closest(".tfBoardItem"), a = e && nn().find((f) => f.el === e);
    if (!a || ro.includes(a.key) || P(a.key)) return;
    t.preventDefault();
    const n = R.getBoundingClientRect(), i = nr.get(a.key);
    he = { key: a.key, el: e, on: !1, x0: t.clientX, y0: t.clientY, left: i.x, top: i.y, order: [...nc] };
    const c = (f) => {
      const m = f.clientX - he.x0, k = f.clientY - he.y0;
      if (!he.on && Math.hypot(m, k) < 5) return;
      he.on || (he.on = !0, e.classList.add("tfDragging"), We() || e.animate([{ scale: "1" }, { scale: "1.05" }, { scale: "1.02" }], { duration: 260, easing: "cubic-bezier(.2,1.35,.4,1)" })), Object.assign(e.style, { left: he.left + m + "px", top: he.top + k + "px" });
      const M = f.clientX - n.left, x = f.clientY - n.top + R.scrollTop;
      let _ = null, T = 1 / 0;
      if (nr.forEach((B, Z) => {
        if (Z === a.key || !he.order.includes(Z)) return;
        const E = Math.hypot(M - (B.x + B.w / 2), x - (B.y + B.h / 2));
        E < T && (T = E, _ = { key: Z, b: B });
      }), !_) return;
      const L = he.order.filter((B) => B !== a.key), H = L.indexOf(_.key) + (M > _.b.x + _.b.w / 2 ? 1 : 0), U = [...L.slice(0, H), a.key, ...L.slice(H)];
      U.join() !== he.order.join() ? (he.order = U, Be()) : us(nr.get(a.key));
    }, l = () => {
      removeEventListener("pointermove", c), removeEventListener("pointerup", l), removeEventListener("pointercancel", l);
      const f = he;
      he = null, e.classList.remove("tfDragging"), f.on && va({ order: f.order }), Be(), f.on && !We() && setTimeout(() => bd(e), 340);
    };
    addEventListener("pointermove", c), addEventListener("pointerup", l), addEventListener("pointercancel", l);
  }
  function Lf(t, e, a) {
    var ed;
    const n = new Set(ae().hidden);
    t.forEach((ct) => ct.el.classList.toggle("tfBoardHidden", n.has(ct.key)));
    const i = t.filter((ct) => !n.has(ct.key) && getComputedStyle(ct.el).display !== "none"), c = a ? aa.phoneGap : aa.gap, l = Math.min(e, aa.full);
    let f = 0;
    const m = ci();
    g.classList.toggle("hcSumsFit", hc()), g.classList.toggle("hcFavStrip", m);
    const k = i.filter((ct) => ro.includes(ct.key) || m && ct.key === "favs");
    k.sort((ct, Rt) => ["title", "sums", "favs"].indexOf(ct.key) - ["title", "sums", "favs"].indexOf(Rt.key)), k.forEach((ct) => {
      ct.el.classList.add("tfBoardItem"), ct.el.toggleAttribute("data-narrow", !1), Object.assign(ct.el.style, { width: (ct.key === "title" ? e : l) + "px", height: "", left: "0px", top: f + "px" });
      const Rt = ct.key !== "title" && (ct.el.querySelector(".tfDash-bar>.activityRows") || ct.key === "favs" && ct.el.querySelector(":scope>.activityRows")), ve = Rt ? Rt.children.length : 0;
      if (Rt && (Rt.classList.remove("hcBarRows"), !a && Rt.scrollWidth > Rt.clientWidth + 1))
        for (let le = 2; le <= ve && (Rt.classList.add("hcBarRows"), Rt.style.setProperty("--bar-cols", String(Math.ceil(ve / le))), !(Rt.scrollWidth <= Rt.clientWidth + 1)); le++)
          ;
      f += ct.el.offsetHeight + (ct.key === "title" ? aa.nameGap : aa.sumsGap);
    });
    const M = a ? 1 : Math.max(0.85, Math.min(1, e / aa.full)), x = ["favs", "wx", "energy"], _ = (he == null ? void 0 : he.order) || ((ed = mt.home) == null ? void 0 : ed.order), T = _ ? [..._.filter((ct) => x.includes(ct)), ...x.filter((ct) => !_.includes(ct))] : x;
    nc = T;
    const L = i.filter((ct) => x.includes(ct.key) && !(m && ct.key === "favs")).sort((ct, Rt) => T.indexOf(ct.key) - T.indexOf(Rt.key));
    nr = /* @__PURE__ */ new Map();
    const H = (ct, Rt) => {
      if (nr.set(ct.key, Rt), Object.assign(ct.el.style, { width: Rt.w + "px", height: Rt.h + "px" }), he != null && he.on && he.key === ct.key) {
        us(Rt);
        return;
      }
      Object.assign(ct.el.style, { left: Rt.x + "px", top: Rt.y + "px" });
    }, U = a ? e : Math.round((2 * aa.col + aa.inner) * M), B = Math.round(aa.row * M), Z = tc(), E = Ql[Z], yt = fs(), zt = io("byFloor"), Ht = ec() === "stacked" && !a && L.length > 0;
    let Xt = 0, we = 0, Lt = f;
    L.forEach((ct) => {
      ct.el.classList.add("tfBoardItem"), ct.el.dataset.rows = 5, ct.el.dataset.cols = 2, ct.el.toggleAttribute("data-narrow", !1);
      let Rt = B;
      if ((a || ct.key === "favs") && (Object.assign(ct.el.style, { width: U + "px", height: "" }), Rt = ct.el.offsetHeight), Ht) {
        H(ct, { x: 0, y: Lt, w: U, h: Rt }), Lt += Rt + c;
        return;
      }
      Xt && Xt + U > e && (f += we + c, Xt = 0, we = 0), H(ct, { x: Xt, y: f, w: U, h: Rt }), Xt += U + c, we = Math.max(we, Rt);
    }), L.length && !Ht && (f += we + c);
    const Wt = Ht ? U + c : 0, Ze = Ht ? e - U - c : e, Ga = a ? Math.floor((e - c) / 2) : Math.round(E.w * M), mi = Math.round(E.h * M), hr = a ? 2 : Math.max(1, Math.floor((Ze + c) / (Ga + c))), gi = new Map(i.filter((ct) => P(ct.key)).map((ct) => [ct.key, ct])), gr = (zt ? _f() : [{ id: "", name: "", rooms: u }]).map((ct) => ({ ...ct, cards: ct.rooms.map((Rt) => gi.get("room:" + Rt.id)).filter(Boolean) })).filter((ct) => ct.cards.length), Js = yt === "bento", Qs = Js && io("bentoMixed"), Mu = Js && zt && io("bentoBoxes"), Su = yt === "columns" && zt && !a, br = 12, Au = (ct) => ct.name ? aa.floorHead + aa.floorGap : 0, tl = (ct, Rt, ve) => {
      const le = /* @__PURE__ */ new Set(), de = [];
      ct.cards.forEach((Ft, No) => {
        const Ke = Qs && No === 0 && Rt >= 2 && ct.cards.length > 1, Io = Ke ? 2 : 1, bi = Ke && !a ? 2 : 1;
        Ft.el.classList.remove("hcAreaS", "hcAreaM", "hcAreaL", "hcAreaBig"), Ft.el.classList.add("hcArea" + Z.toUpperCase()), Ft.el.classList.toggle("hcAreaBig", Ke), Ft.el.style.setProperty("--hc-k", String(M)), Ft.el.classList.add("tfBoardItem"), Ft.el.dataset.rows = bi > 1 ? 10 : 5, Ft.el.dataset.cols = Io, Ft.el.toggleAttribute("data-narrow", !1);
        for (let wi = 0; ; wi++) {
          const rl = [...Array(Math.max(0, Rt - Io + 1)).keys()].find((il) => [...Array(Io).keys()].every((sl) => [...Array(bi).keys()].every((Lu) => !le.has(wi + Lu + "," + (il + sl)))));
          if (rl != null) {
            [...Array(Io).keys()].forEach((il) => [...Array(bi).keys()].forEach((sl) => le.add(wi + sl + "," + (rl + il)))), de.push({ it: Ft, r: wi, c: rl, sc: Io, sr: bi });
            break;
          }
        }
      });
      const Pe = Math.max(0, ...de.map((Ft) => Ft.r + Ft.sr));
      Js && !a && de.forEach((Ft) => {
        for (; Ft.r + Ft.sr < Pe && !le.has(Ft.r + Ft.sr + "," + Ft.c) && Ft.sc === 1; )
          le.add(Ft.r + Ft.sr + "," + Ft.c), Ft.sr++;
      }), de.forEach((Ft) => Object.assign(Ft.it.el.style, { width: Ft.sc * ve + (Ft.sc - 1) * c + "px", height: a ? "" : Ft.sr * mi + (Ft.sr - 1) * c + "px" }));
      const cn = [...Array(Pe)].map(() => a ? 0 : mi);
      a && de.forEach((Ft) => {
        cn[Ft.r] = Math.max(cn[Ft.r], Ft.it.el.offsetHeight);
      });
      const dn = [];
      let ho = Au(ct);
      return cn.forEach((Ft, No) => {
        dn[No] = ho, ho += Ft + c;
      }), { h: ho - (Pe ? c : 0), places: de.map((Ft) => ({ it: Ft.it, x: Ft.c * (ve + c), y: dn[Ft.r], w: Ft.sc * ve + (Ft.sc - 1) * c, h: cn.slice(Ft.r, Ft.r + Ft.sr).reduce((No, Ke) => No + Ke, 0) + (Ft.sr - 1) * c })) };
    }, el = new Map([...R.querySelectorAll(":scope > .hcFloor")].map((ct) => [ct.dataset.floor, ct])), al = new Map([...R.querySelectorAll(":scope > .hcFloorBox")].map((ct) => [ct.dataset.floor, ct])), td = [], Cu = (ct, Rt, ve, le) => {
      if (!ct.name) return;
      let de = el.get(ct.id);
      el.delete(ct.id), de || (de = Object.assign(document.createElement("div"), { className: "hcFloor" }), de.dataset.floor = ct.id, R.appendChild(de)), de.dataset.sig !== ct.name && (de.dataset.sig = ct.name, de.innerHTML = '<h2 class="hcFloorName">' + q(ct.name) + "</h2>"), Object.assign(de.style, { left: Rt + "px", top: ve + "px", width: le + "px" }), td.push(de);
    }, _u = (ct, Rt, ve, le, de) => {
      let Pe = al.get(ct.id);
      al.delete(ct.id), Pe || (Pe = Object.assign(document.createElement("div"), { className: "hcFloorBox" }), Pe.dataset.floor = ct.id, Pe.setAttribute("aria-hidden", "true"), R.prepend(Pe)), Object.assign(Pe.style, { left: Rt + "px", top: ve + "px", width: le + "px", height: de + "px" });
    }, Tu = (ct) => parseFloat(getComputedStyle(ct.cards[0].el).paddingLeft) || 0, ol = (ct, Rt, ve, le, de = 0) => {
      Cu(ct, ve + de, le, (Rt.w ?? e) - de), Rt.places.forEach((Pe) => H(Pe.it, { x: ve + Pe.x, y: le + Pe.y, w: Pe.w, h: Pe.h }));
    };
    if (gr.length && L.length && !Ht && (f += aa.floorTop), Su) {
      let ct = 0, Rt = f;
      gr.forEach((ve) => {
        const le = { ...tl(ve, 1, Ga), w: Ga };
        ct && ct + Ga > Ze && (f = Rt + c + aa.floorTop, ct = 0), ol(ve, le, Wt + ct, f), Rt = Math.max(Rt, f + le.h), ct += Ga + c;
      }), f = Rt + c;
    } else if (Mu) {
      const ct = Array(hr).fill(f);
      gr.forEach((Rt) => {
        const ve = Rt.cards.length + (Qs && Rt.cards.length > 1 ? 3 : 0), le = a ? 2 : Math.min(hr, Math.max(Qs && Rt.cards.length > 1 ? 2 : 1, ve <= 3 ? ve : Math.ceil(ve / 2))), de = le * (Ga + c) - c, Pe = Math.floor((de - 2 * br - (le - 1) * c) / le), cn = { ...tl(Rt, le, Pe), w: de - 2 * br };
        let dn = 0, ho = 1 / 0;
        for (let Ke = 0; Ke + le <= hr; Ke++) {
          const Io = Math.max(...ct.slice(Ke, Ke + le));
          Io < ho && (ho = Io, dn = Ke);
        }
        const Ft = Wt + dn * (Ga + c), No = cn.h + 2 * br;
        _u(Rt, Ft, ho, de, No), ol(Rt, cn, Ft + br, ho + br, Tu(Rt));
        for (let Ke = dn; Ke < dn + le; Ke++) ct[Ke] = ho + No + c;
      }), f = Math.max(f, ...ct);
    } else
      gr.forEach((ct, Rt) => {
        Rt && (f += aa.floorTop);
        const ve = tl(ct, hr, Ga);
        ol(ct, { ...ve, w: Ze }, Wt, f), f += ve.h + c;
      });
    Ht && (f = Math.max(f, Lt)), el.forEach((ct) => ct.remove()), al.forEach((ct) => ct.remove()), he != null && he.on || us(null), R.style.height = Math.max(0, f - c) + "px", ps([...k.map((ct) => ct.el), ...L.map((ct) => ct.el), ...td, ...gr.flatMap((ct) => ct.cards.map((Rt) => Rt.el))]), ms(!1), t.forEach((ct) => [...ct.el.children].forEach((Rt) => Rt.toggleAttribute("inert", po)));
    const nl = R.querySelector(".tfDash-favs>.activityRows");
    nl && (nl.classList.toggle("hcFadeList", !m), oc(nl)), requestAnimationFrame(() => g.classList.add("tfBoardReady")), t.forEach((ct) => hs.observe(ct.el)), be();
  }
  const ei = () => {
    ss || (ss = !0, requestAnimationFrame(() => {
      ss = !1, Be();
    }));
  }, hs = new ResizeObserver(() => {
    Zt || ei();
  });
  function Df(t, e, a) {
    const n = a + se, i = t * a + (t - 1) * se, c = e * Ta - se, l = se / 2, f = n / Math.max(1, Math.round(n / (Ta / 4))), m = Ta / 4, k = 6;
    let M = "";
    for (let x = 0; x <= t; x++) for (let _ = 0; _ <= e; _++) {
      const T = x * n - l, L = _ * Ta - l;
      M += "M" + (T - k) + " " + L + "H" + (T + k) + "M" + T + " " + (L - k) + "V" + (L + k);
    }
    return '<svg width="' + i + '" height="' + c + '" viewBox="0 0 ' + i + " " + c + '"><defs><pattern id="tfGridDots" patternUnits="userSpaceOnUse" x="' + -l + '" y="' + -l + '" width="' + f.toFixed(3) + '" height="' + m + '"><circle cx="0" cy="0" r="1.4"></circle><circle cx="' + f.toFixed(3) + '" cy="0" r="1.4"></circle><circle cx="0" cy="' + m + '" r="1.4"></circle><circle cx="' + f.toFixed(3) + '" cy="' + m + '" r="1.4"></circle></pattern></defs><rect class="tfGridDots" x="' + -l + '" y="' + -l + '" width="' + (i + se) + '" height="' + (c + se) + '" fill="url(#tfGridDots)"></rect><path class="tfGridCross" d="' + M + '"></path></svg>';
  }
  function ms(t, e = [], a = /* @__PURE__ */ new Map(), n = 0, i = 1, c = ar) {
    R.querySelectorAll(".tfEditChips").forEach((M) => {
      (!t || !M.closest(".tfBoardItem")) && M.remove();
    }), R.querySelectorAll(".tfFavHides").forEach((M) => M.remove()), R.querySelectorAll(".tfBoardItem").forEach((M) => [...M.children].forEach((x) => {
      x.classList.contains("tfEditChips") || x.toggleAttribute("inert", t);
    }));
    let l = R.querySelector(".tfBoardCells"), f = R.querySelector(".tfBoardLand");
    if (!t)
      return l == null || l.remove(), f == null || f.remove(), ja(), n;
    const m = Qr + uf;
    if (l || (l = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), l.setAttribute("aria-hidden", "true"), R.prepend(l)), l.style.top = Oo + "px", l.dataset.size !== i + "x" + m + "x" + c && (l.dataset.size = i + "x" + m + "x" + c, l.innerHTML = Df(i, m, c)), n = Math.max(n, Oo + m * Ta - se), e.forEach((M) => {
      const x = M.el;
      !x || x.querySelector(":scope > .tfEditChips") || x.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + kr + '</span><button class="tfEditChip" type="button" data-board-more="' + q(M.key) + '" aria-label="' + q(ga(M.key)) + ' options" aria-haspopup="menu">' + m0 + "</button></div>");
    }), Zt && a.has(Zt.key)) {
      f || (f = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), R.appendChild(f));
      const M = a.get(Zt.key);
      Object.assign(f.style, { left: M.x + "px", top: M.y + "px", width: M.w + "px", height: M.h + "px" });
    } else f == null || f.remove();
    const k = R.querySelector(".tfDash-favs.tfBoardItem:not(.tfBoardHidden)");
    if (k) {
      const M = k.getBoundingClientRect();
      k.insertAdjacentHTML("beforeend", '<div class="tfFavHides">' + [...k.querySelectorAll('[data-k^="fav:"]')].map((x) => {
        const _ = x.getBoundingClientRect(), T = x.dataset.k.slice(4);
        return '<button class="tfFavHide" type="button" data-fav-hide="' + q(T) + '" aria-label="Hide ' + q(kt(T)) + ' from the dashboard" style="left:' + Math.round(_.right - M.left - 42) + "px;top:" + Math.round(_.top - M.top + (_.height - 32) / 2) + 'px">' + np + "</button>";
      }).join("") + "</div>");
    }
    return n;
  }
  let gs = "";
  function bs(t) {
    ea = t, t || (Zt = null, so = lo = !1, ja()), Be(), t ? gs = JSON.stringify(mt) : gs && JSON.stringify(mt) !== gs && ba("Changes saved");
  }
  function Ef(t, e) {
    var U, B;
    ja();
    const a = en.get(t), { n } = an(R.clientWidth), i = ae(), c = i.spans[t] ?? (P(t) ? 1 : 2);
    if (!a) return;
    const l = a.cols >= n, f = (Z, E, yt) => '<button type="button" role="menuitem" data-board-act="' + Z + '"' + (yt ? " disabled" : "") + ">" + E + "</button>", m = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    m.setAttribute("role", "menu"), m.setAttribute("aria-label", ga(t) + " options");
    const k = R.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]'), M = Zl(t), x = or(t), _ = '<div class="tfHeight" role="group" aria-label="Height"><span class="tfHeightLabel" aria-hidden="true">Height</span><div class="tfHeightTabs">' + Ul.map((Z, E) => '<button type="button" role="menuitemradio" aria-checked="' + (E + 1 === x) + '" aria-label="' + Z + ", " + (E + 1) + (E ? " rows" : " row") + '" data-board-act="h:' + (E + 1) + '"' + (E < M ? "" : " disabled") + ">" + Z + "</button>").join("") + "</div></div>", T = hf.includes(t) || P(t) ? '<div class="tfHeight tfWidth" role="group" aria-label="Width"><span class="tfHeightLabel" aria-hidden="true">Width</span><div class="tfHeightTabs">' + mf.map((Z, E) => '<button type="button" role="menuitemradio" aria-checked="' + (E + 1 === Math.min(c, n)) + '" aria-label="' + Z + ", " + (E + 1) + (E ? " columns" : " column") + '" data-board-act="w:' + (E + 1) + '"' + (E < n ? "" : " disabled") + ">" + Z + "</button>").join("") + "</div></div>" : "", L = t === "radar" ? '<div class="tfHeight tfSource" role="group" aria-label="Source"><span class="tfHeightLabel" aria-hidden="true">Source</span><div class="tfSourceList">' + Er().map(([Z, E]) => '<button type="button" role="menuitemradio" aria-checked="' + (Z === Vn()) + '" data-board-act="src:' + q(Z) + '">' + q(E) + "</button>").join("") + "</div></div>" : "";
    m.innerHTML = _ + T + L + (t === "energy" ? f("graph", (((U = i.opts.energy) == null ? void 0 : U.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + f("left", "Move left", l || a.col === 0) + f("right", "Move right", l || a.col + a.cols >= n) + f("up", "Move up", a.row <= 0) + f("down", "Move down") + (k ? f("remove", "Remove") : f("hide", "Hide")), R.appendChild(m);
    const H = Math.min(a.x + a.w - m.offsetWidth, R.clientWidth - m.offsetWidth);
    Object.assign(m.style, { left: Math.max(0, H) + "px", top: a.y + 28 + "px" }), Ue = { key: t, menu: m, opener: e }, (B = m.querySelector("button:not([disabled])")) == null || B.focus();
  }
  function ja(t) {
    if (!Ue) return;
    const { menu: e, opener: a } = Ue;
    Ue = null, e.remove(), t && (a == null || a.focus());
  }
  const rn = () => Object.fromEntries([...en].map(([t, e]) => [t, { col: e.col, row: e.row }]));
  function Bf(t, e) {
    var f, m, k;
    if (e === "remove") {
      ja(), Rf(t);
      return;
    }
    const a = mt, n = ae(), i = rn(), c = i[t] || { col: 0, row: 0 };
    e.startsWith("w:") && (n.spans = { ...n.spans, [t]: e === "w:full" ? "full" : Number(e.slice(2)) }), e.startsWith("h:") && (n.opts = { ...n.opts, [t]: { ...n.opts[t] || {}, h: Number(e.slice(2)), tall: void 0 } }), e.startsWith("src:") && (n.opts = { ...n.opts, radar: { ...n.opts.radar || {}, source: e.slice(4) } }), e === "graph" && (n.opts = { ...n.opts, energy: { ...n.opts.energy || {}, graph: (((f = n.opts.energy) == null ? void 0 : f.graph) || "above") === "above" ? "below" : "above" } }), e === "left" && (i[t] = { ...c, col: c.col - 1 }), e === "right" && (i[t] = { ...c, col: c.col + 1 }), e === "up" && (i[t] = { ...c, row: c.row - 1 }), e === "down" && (i[t] = { ...c, row: c.row + 1 }), e === "hide" && (n.hidden = [.../* @__PURE__ */ new Set([...n.hidden, t])]), ["left", "right", "up", "down"].includes(e) && (Zt = { key: t, col: i[t].col, row: i[t].row }), Cn(n, i), Zt && (Be(), Zt = null, Cn(ae(), rn()));
    const l = /^[hw]:/.test(e) && !We() && (Ue == null ? void 0 : Ue.menu.querySelector('[data-board-act="' + CSS.escape(e) + '"]'));
    if (l) {
      const M = Ue;
      l.parentElement.querySelectorAll("[aria-checked]").forEach((x) => x.setAttribute("aria-checked", String(x === l))), setTimeout(() => {
        Ue === M && ja();
      }, Me.tabs.dur);
    } else ja();
    e === "graph" && (da.delete("dash:energy"), Ce()), e.startsWith("src:") && ((m = ge == null ? void 0 : ge.get("radar")) == null || m.refresh(), me == null || me.refresh()), e.startsWith("h:") && t.includes(".") && Ce(), Be(), e !== "hide" ? (k = R.querySelector('[data-board-more="' + CSS.escape(t) + '"]')) == null || k.focus() : ba(ga(t) + " hidden", si(a));
  }
  const rc = (t) => {
    var e;
    return Ao.includes(t) && !(((e = mt.dash) == null ? void 0 : e.cells) || {})[t] ? " added" : " put back";
  };
  function ws(t) {
    const e = ae(), a = ga(t) + rc(t);
    on({ ...e, hidden: e.hidden.filter((n) => n !== t) }), Be(), ba(a);
  }
  const ai = () => ae().tiles || [...R.querySelectorAll(".tfDashTiles > [data-k]")].map((t) => t.dataset.k).filter((t) => !ae().hidden.includes(t));
  function ic(t, e) {
    const a = ae();
    Cn({ ...a, tiles: t, hidden: a.hidden.filter((n) => !n.includes(".")) }, e), Ce(), be();
  }
  const sc = (t) => {
    ic([...ai().filter((e) => e !== t), t], rn()), ba(ga(t) + " added"), Nf(t);
  }, Rf = (t) => {
    const e = mt, a = rn();
    delete a[t], ic(ai().filter((n) => n !== t), a), ba(ga(t) + " removed", si(e));
  };
  let vs = 0;
  function ba(t, e = null) {
    var l;
    const a = p("toast");
    if (!a) return;
    if (jh(a, t), e) {
      const f = Object.assign(document.createElement("button"), { type: "button", className: "toastAction", textContent: "Undo" });
      f.addEventListener("click", () => {
        clearTimeout(vs), a.classList.remove("show", "withAction"), e();
      }), a.appendChild(f);
    }
    const n = g.getBoundingClientRect(), i = (l = o.querySelector(".bottomNav")) == null ? void 0 : l.getBoundingClientRect(), c = Yt.classList.contains("open") && !Va ? Math.min(n.right, Yt.getBoundingClientRect().left) : n.right;
    a.style.left = (n.left + c) / 2 + "px", a.style.bottom = (i != null && i.height ? window.innerHeight - i.top + 12 : 26) + "px", a.classList.add("tfToast", "show"), a.classList.toggle("withAction", !!e), Vh(a), clearTimeout(vs), vs = setTimeout(() => a.classList.remove("show", "withAction"), e ? 5e3 : Me.confirm.stay);
  }
  const Pf = 700, Hf = 1e3, oa = Object.assign(document.createElement("div"), { className: "tfTooltip", hidden: !0 });
  oa.setAttribute("role", "tooltip"), oa.setAttribute("aria-hidden", "true"), g.appendChild(oa);
  let oi = null, rr = 0, _n = 0, lc = -1 / 0;
  const ys = (t) => {
    if (t.nodeType !== 1) return !1;
    const e = getComputedStyle(t);
    return e.textOverflow === "ellipsis" && t.scrollWidth > t.clientWidth + 1 || e.webkitLineClamp !== "none" && t.scrollHeight > t.clientHeight + 1;
  }, Of = (t) => {
    for (let e = t; e && e !== g; e = e.parentElement) if (ys(e)) return e;
    return null;
  };
  function cc(t, e) {
    clearTimeout(rr), clearTimeout(_n);
    const a = () => {
      if (!t.isConnected) return;
      oi = t, oa.textContent = e, oa.hidden = !1;
      const n = t.getBoundingClientRect(), i = oa.getBoundingClientRect(), c = n.top - i.height - 8 >= 8 ? n.top - i.height - 8 : n.bottom + 8;
      oa.style.left = Math.max(8, Math.min(window.innerWidth - i.width - 8, n.left + n.width / 2 - i.width / 2)) + "px", oa.style.top = c + "px";
    };
    !oa.hidden || performance.now() - lc < Hf ? a() : rr = setTimeout(a, Pf);
  }
  function ni() {
    clearTimeout(rr), clearTimeout(_n), oa.hidden || (lc = performance.now()), oa.hidden = !0, oi = null;
  }
  o.addEventListener("pointerover", (t) => {
    if (t.pointerType === "touch") return;
    if (oa.contains(t.target)) {
      clearTimeout(_n);
      return;
    }
    const e = Of(t.target);
    if (e && Vt.names === "scroll" && e.matches(ri)) {
      xs(e);
      return;
    }
    if (e) {
      e !== oi ? cc(e, e.textContent.trim()) : clearTimeout(_n);
      return;
    }
    clearTimeout(rr), clearTimeout(_n), _n = setTimeout(ni, 120);
  }), o.addEventListener("focusin", (t) => {
    var n;
    const e = t.target;
    if (!((n = e.matches) != null && n.call(e, ":focus-visible"))) return;
    let a = [e, ...e.querySelectorAll("*")].filter(ys);
    Vt.names === "scroll" && (a.filter((i) => i.matches(ri)).forEach(xs), a = a.filter((i) => !i.matches(ri))), a.length && cc(e, a.map((i) => i.textContent.trim()).join(" · "));
  }), o.addEventListener("focusout", (t) => {
    t.target === oi && ni();
  }), o.addEventListener("keydown", (t) => {
    t.key === "Escape" && !oa.hidden && (t.stopPropagation(), ni());
  }, !0), window.addEventListener("scroll", () => {
    (!oa.hidden || rr) && ni();
  }, { capture: !0, passive: !0 });
  const ri = ".activityRowName,.activityRowMeta", ii = /* @__PURE__ */ new WeakSet();
  function xs(t) {
    var a;
    if (Vt.names !== "scroll" || ii.has(t) || t.closest("[inert]") || (a = window.matchMedia) != null && a.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    ii.add(t);
    const e = () => Promise.all([t.closest(".hcAreaPanel"), t.closest(".panelExpanded")].filter(Boolean).flatMap((n) => n.getAnimations()).map((n) => n.finished.catch(() => {
    })));
    setTimeout(async () => {
      await e();
      const n = t.isConnected && !t.closest("[inert]") ? t.scrollWidth - t.clientWidth : 0;
      if (n < 2) {
        ii.delete(t);
        return;
      }
      const i = n / 30 * 1e3, c = i + 1e3 + i;
      t.style.textOverflow = "clip";
      const l = t.animate([
        { textIndent: "0px", offset: 0, easing: "ease-in-out" },
        { textIndent: -n + "px", offset: i / c },
        { textIndent: -n + "px", offset: (1e3 + i) / c, easing: "ease-in-out" },
        { textIndent: "0px", offset: 1 }
      ], { duration: c });
      l.onfinish = l.oncancel = () => {
        t.style.textOverflow = "", ii.delete(t);
      };
    }, 600);
  }
  const dc = new IntersectionObserver((t) => t.forEach((e) => {
    e.isIntersecting && !e.target.closest("[inert]") && (dc.unobserve(e.target), xs(e.target));
  }), { threshold: 1 });
  let ks = !1;
  new MutationObserver(() => {
    ks || Vt.names !== "scroll" || (ks = !0, setTimeout(() => {
      ks = !1, o.querySelectorAll(ri).forEach((t) => {
        !t.dataset.glided && ys(t) && (t.dataset.glided = "1", dc.observe(t));
      });
    }, 300));
  }).observe(o, { childList: !0, subtree: !0 });
  const si = (t) => () => {
    mt = t, He(), Ce(), Be(), be();
  };
  function Nf(t) {
    const e = () => R.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]');
    setTimeout(() => {
      var l;
      const a = e();
      if (!a) return;
      const n = (l = window.matchMedia) == null ? void 0 : l.call(window, "(prefers-reduced-motion: reduce)").matches, i = a.getBoundingClientRect();
      (i.top < 0 || i.bottom > window.innerHeight) && a.scrollIntoView({ behavior: n ? "auto" : "smooth", block: "center" });
      const c = (f) => "0 0 0 4px color-mix(in srgb,var(--primary) " + f + "%,transparent),0 0 24px color-mix(in srgb,var(--primary) " + f + "%,transparent)";
      a.animate([{ boxShadow: c(55) }, { boxShadow: c(0) }], { duration: 1500, easing: n ? "steps(1, end)" : "ease-out" });
    }, If(t) ? 260 : 0);
  }
  function If(t) {
    const e = en.get(t);
    if (!e || !Yt.classList.contains("open") || Va) return !1;
    const { n: a, w: n } = an(R.clientWidth), i = Yt.getBoundingClientRect().left - R.getBoundingClientRect().left, c = (m) => m * (n + se) + e.cols * n + (e.cols - 1) * se <= i;
    if (c(e.col)) return !1;
    const l = /* @__PURE__ */ new Set();
    en.forEach((m, k) => {
      if (k !== t) for (let M = m.row; M < m.row + m.rows; M++) for (let x = m.col; x < m.col + m.cols; x++) l.add(x + "," + M);
    });
    const f = (m, k) => {
      for (let M = k; M < k + e.rows; M++) for (let x = m; x < m + e.cols; x++) if (l.has(x + "," + M)) return !1;
      return !0;
    };
    for (let m = 0; m <= Qr; m++) for (let k = 0; k + e.cols <= a && c(k); k++)
      if (f(k, m))
        return Cn(ae(), { ...rn(), [t]: { col: k, row: m } }), Be(), !0;
    return !1;
  }
  const pc = /^(light|switch|cover|climate|fan|lock|valve|media_player|humidifier|vacuum|scene|script|alarm_control_panel|water_heater|input_boolean)\./, Ff = [["page", "Page"], ["cards", "Cards"], ["areas", "Areas"], ["favs", "Favourites"]];
  let Ms = "page";
  const qf = (t) => t.matches('[data-tray="welcome"],[data-tray="phone"]') ? "page" : t.querySelector("[data-room-add]") ? "areas" : t.querySelector('[data-tray="favs"]') ? "favs" : "cards";
  function fc(t = !1) {
    const e = Yt.querySelector(".tfTrayInner"), a = Yt.querySelector(".hcTrayTabs"), n = a.querySelector(".rubberIndicator");
    let i = !0;
    e.querySelectorAll(":scope>.tfTraySection").forEach((l) => {
      l.hidden = qf(l) !== Ms, l.classList.toggle("hcFirst", !l.hidden && i), l.hidden || (i = !1);
    }), a.querySelectorAll("[data-tray-tab]").forEach((l) => {
      const f = l.dataset.trayTab === Ms;
      l.classList.toggle("active", f), l.setAttribute("aria-selected", String(f));
    });
    const c = a.querySelector(".tab.active");
    c != null && c.offsetWidth && (n.style.transition = "none", t ? Pi(n, n.offsetLeft, n.offsetWidth, c.offsetLeft, c.offsetWidth) : (n.style.left = c.offsetLeft + "px", n.style.width = c.offsetWidth + "px"));
  }
  const Yt = Object.assign(document.createElement("aside"), { className: "tfEditTray" });
  Yt.setAttribute("aria-label", "Edit custom dashboard"), Yt.innerHTML = '<button class="tfTrayTuck" type="button" data-tray-tuck></button><div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit custom dashboard</div><button class="pill" type="button" data-tray-done>Done</button></div><div class="tabs rubberTabs hcTrayTabs" role="tablist" aria-label="Edit custom dashboard"><div class="rubberIndicator" aria-hidden="true"></div>' + Ff.map(([t, e], a) => '<button class="tab segBtn' + (a ? "" : " active") + '" type="button" role="tab" aria-selected="' + !a + '" data-tray-tab="' + t + '">' + e + "</button>").join("") + '</div><section class="tfTraySection" data-tray="welcome"></section><section class="tfTraySection" data-tray="cards"></section><section class="tfTraySection" data-tray="weather"></section><section class="tfTraySection"><div class="sectionLabel">Tiles</div><p class="tfTrayNote">Remove a tile from its ⋯.</p><button class="pill tfTrayAdd hcAddBtn" type="button" data-tile-add aria-expanded="false">' + Li + '<span>Add tile</span></button><div class="tfTrayPick" data-pick="tiles" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-tile-search><ul class="tfTrayList" data-tray="tilepick"></ul></div></section><section class="tfTraySection"><div class="sectionLabel">Areas</div><p class="tfTrayNote">Which areas the Areas card shows. Drag to change their order, here and on Home.</p><ul class="tfTrayList hcHeList" data-tray="areas"></ul><button class="pill tfTrayAdd hcAddBtn" type="button" data-room-add aria-expanded="false">' + Li + '<span>Add area</span></button><ul class="tfTrayList" data-tray="roompick" hidden></ul></section><section class="tfTraySection" data-tray="phone"></section><section class="tfTraySection"><div class="sectionLabel">Favourites</div><ul class="tfTrayList" data-tray="favs"></ul><button class="pill tfTrayAdd hcAddBtn" type="button" data-fav-add aria-expanded="false">' + Li + '<span>Add favourite</span></button><div class="tfTrayPick" data-pick="favs" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-fav-search><ul class="tfTrayList" data-tray="pick"></ul></div><div class="toggleRow tfTraySuggest" data-tray="favtitle"></div><div class="toggleRow tfTraySuggest" data-tray="suggest"></div></section></div>', g.appendChild(Yt);
  let Va = !1, so = !1, lo = !1, ir = !1, Ye = null, co = !1;
  const Ss = {}, La = (t, e) => {
    if (Ss[t] === e) return;
    Ss[t] = e;
    const a = Yt.querySelector('[data-tray="' + t + '"]');
    a.innerHTML = e, Ia(a);
  }, As = (t, e) => '<span class="tfTrayName"><span class="activityRowName">' + q(kt(t)) + '</span><span class="activityRowMeta">' + q(e) + "</span></span>", Wf = (t, e, a) => '<li class="tfTrayFav' + (e ? " off" : "") + '" data-tray-fav="' + q(t) + '"><span class="tfTrayGrip" aria-hidden="true">' + kr + '</span><span class="tfIcon"' + fe(t, sa(t)) + "></span>" + As(t, e ? "Hidden" + (Ct.get(t) ? " · " + Ct.get(t) : "") : Ct.get(t) || De(t)) + '<button class="tfTrayBtn" type="button" data-fav-eye="' + q(t) + '" aria-pressed="' + !e + '" aria-label="' + (e ? "Show " : "Hide ") + q(kt(t)) + ' on the dashboard">' + (e ? np : g0) + "</button>" + (a ? '<button class="tfTrayBtn" type="button" data-fav-remove="' + q(t) + '" aria-label="Remove ' + q(kt(t)) + ' from favourites">' + Sl + "</button>" : "<span></span>") + "</li>";
  function Cs(t, e, a, n) {
    const i = t.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return Object.keys(y).filter((l) => e(l) && !a.has(l) && y[l].state !== "unavailable").filter((l) => {
      const f = (kt(l) + " " + (Ct.get(l) || "") + " " + l).toLowerCase();
      return i.every((m) => f.includes(m));
    }).sort((l, f) => (Ct.get(l) || "~").localeCompare(Ct.get(f) || "~") || kt(l).localeCompare(kt(f))).slice(0, 40).map((l) => '<li><button class="tfTrayPickItem" type="button" ' + n + '="' + q(l) + '"><span class="tfIcon"' + fe(l, sa(l)) + "></span>" + As(l, Ct.get(l) || "—") + "</button></li>").join("") || '<li class="tfTrayNote">Nothing matches.</li>';
  }
  const jf = "https://www.home-assistant.io/dashboards/", uc = {
    welcome: ["Welcome message", "<p>Shows a <strong>greeting</strong> above your home's name: good morning, afternoon or evening, then your name.</p>"],
    weather: ["Weather", "<p>The forecast card: now, the next hours in a sentence and the week ahead. Its <strong>Now</strong> opens the Weather page.</p>"],
    energy: ["Energy today", "<p>What your home has used and made today, hour by hour, with <strong>Electricity</strong>, <strong>Solar</strong>, <strong>Gas</strong> and <strong>Water</strong> under it. From your Energy dashboard.</p>"],
    favs: ["Favourite entities", "<p>The devices you use most, at the top of Home.</p><ul><li><strong>Drag</strong> one to change the order</li><li>Press <strong>×</strong> to take it off</li></ul>"],
    suggest: ["Suggested entities", "<p>Fills Favourites with devices you often use, after your own. They change as you use your home.</p>"],
    sums: ["Summaries", "<p>Each summary sums up one kind of thing across your home, like <strong>Lights</strong>: how many are on.</p><ul><li>Switch one off to hide it</li><li><strong>Drag</strong> one to change the order</li></ul>"]
  }, xe = Object.assign(document.createElement("aside"), { className: "tfEditTray hcHomeTray" });
  xe.setAttribute("aria-label", "Edit Home page"), xe.toggleAttribute("inert", !0);
  let po = !1, Da = !1, _s = "", Ts = null, li = "page";
  function Ls(t, e) {
    const a = xe.querySelector(".hcTrayTabs"), n = a == null ? void 0 : a.querySelector(".rubberIndicator"), i = a == null ? void 0 : a.querySelector(".tab.active");
    if (!(i != null && i.offsetWidth)) {
      requestAnimationFrame(() => {
        var c;
        return ((c = xe.querySelector(".hcTrayTabs .tab.active")) == null ? void 0 : c.offsetWidth) && Ls(t, e);
      });
      return;
    }
    n.style.transition = "none", t && e ? Pi(n, e.left, e.width, i.offsetLeft, i.offsetWidth) : (n.style.left = i.offsetLeft + "px", n.style.width = i.offsetWidth + "px");
  }
  const sn = (t) => '<button class="hcInfoBtn" type="button" data-info="' + t + '" aria-expanded="false" aria-label="About ' + q(uc[t][0]) + '">' + rp + "</button>", wa = (t, e, a) => '<button class="switch' + (t ? " on" : "") + '" type="button" role="switch" aria-checked="' + t + '" aria-label="' + q(e) + '" ' + a + "></button>", Ds = (t) => '<button class="tfTrayBtn hcHeGrip" type="button" data-he-grip aria-label="Move ' + q(t) + '. Use the up and down arrows">' + kr + "</button>", hc = () => {
    var t;
    return ((t = mt.home) == null ? void 0 : t.sumsWidth) === "fit";
  }, ci = () => {
    var t;
    return ((t = mt.home) == null ? void 0 : t.favsAs) === "strip";
  }, sr = (t, e, a, n) => '<div class="hcHeLine hcHeChoiceLine"><span class="activityRowName">' + t + '</span><div class="themeChoice hcHeChoice" role="group" aria-label="' + q(t) + '">' + n.map(([i, c]) => '<button class="wxLayoutBtn" type="button" ' + e + '="' + i + '" aria-pressed="' + (a === i) + '">' + c + "</button>").join("") + "</div></div>", mc = () => Qo(!0).filter((t) => xr[t.key]).map((t) => t.key);
  function Tn() {
    var m, k, M, x, _, T;
    if (!po) return;
    const t = $(), e = (L) => '<li class="hcHeRow" data-he-id="' + q(L) + '">' + Ds(kt(L)) + '<span class="tfIcon"' + fe(L, sa(L)) + "></span>" + As(L, Ct.get(L) || De(L)) + '<button class="tfTrayBtn" type="button" data-he-remove="' + q(L) + '" aria-label="Take ' + q(kt(L)) + ' off Favourites">' + Sl + "</button></li>", a = (L) => {
      const H = xr[L];
      return '<li class="hcHeRow hcHeSum" data-he-id="' + q(L) + '"' + (H.colour && gn(H.colour) ? ' style="' + gn(H.colour).slice(1) + '"' : "") + ">" + Ds(H.name) + '<span class="tfIcon"' + fe("", H.icon, H.name) + '></span><span class="activityRowName">' + q(H.name) + "</span>" + wa(Ge(L), H.name, 'data-he-sum="' + q(L) + '"') + "</li>";
    }, n = ((m = xe.querySelector("[data-he-search]")) == null ? void 0 : m.value) || "", i = [["page", "Page"], ["favs", "Favourites"], ["sums", "Summaries"], ["areas", "Areas"]], c = new Set(((k = mt.home) == null ? void 0 : k.areasOff) || []), l = (L) => '<li class="hcHeRow" data-he-id="' + q(L.id) + '">' + Ds(L.name) + '<span class="tfIcon"><span class="tfAreaGlyph"' + fe("area:" + L.id, L.icon || "mdi:texture-box", L.name) + '></span></span><span class="activityRowName">' + q(L.name) + "</span>" + wa(!c.has(L.id), "Show " + L.name + " on Home", 'data-he-area="' + q(L.id) + '"') + "</li>", f = {
      page: '<div class="hcHeLine"><span class="activityRowName">Welcome message</span>' + sn("welcome") + wa(is(), "Welcome message", "data-he-welcome") + "</div>" + // the weather card and Energy today, where the house has them
      (Pt() ? '<div class="hcHeLine"><span class="activityRowName">Weather</span>' + sn("weather") + wa(!!((M = mt.home) != null && M.weather), "Weather", 'data-he-card="weather"') + "</div>" : "") + (_a != null && _a.length ? '<div class="hcHeLine"><span class="activityRowName">Energy today</span>' + sn("energy") + wa(!!((x = mt.home) != null && x.energy), "Energy today", 'data-he-card="energy"') + "</div>" : "") + sr("Cards", "data-he-cards-as", ec(), [["stacked", "Stacked"], ["rows", "Rows"]]) + '<hr class="hcHeRule"><div class="hcHeLine"><span class="activityRowName">Group by floor</span>' + wa(io("byFloor"), "Group by floor", 'data-he-flag="byFloor"') + "</div>" + sr("Layout", "data-he-area-layout", fs(), [["rows", "Rows"], ["columns", "Columns"], ["bento", "Bento"]]) + (fs() === "bento" ? '<div class="hcHeLine"><span class="activityRowName">Floors as boxes</span>' + wa(io("bentoBoxes"), "Floors as boxes", 'data-he-flag="bentoBoxes"') + '</div><div class="hcHeLine"><span class="activityRowName">Mixed sizes</span>' + wa(io("bentoMixed"), "Mixed sizes", 'data-he-flag="bentoMixed"') + "</div>" : "") + sr("Area cards", "data-he-area-size", tc(), [["s", "Small"], ["m", "Medium"], ["l", "Large"]]),
      favs: '<div class="hcHeLine"><span class="activityRowName">Show favourites</span>' + wa(((_ = mt.home) == null ? void 0 : _.favs) !== !1, "Show favourites", 'data-he-card="favs"') + '</div><hr class="hcHeRule"><div class="hcHeLabel"><span class="activityRowName">Favourite entities</span>' + sn("favs") + "</div>" + sr("Show as", "data-he-favs-as", ci() ? "strip" : "card", [["card", "Card"], ["strip", "Strip"]]) + (ci() ? "" : '<div class="hcHeLine"><span class="activityRowName">Title</span>' + wa(io("favsTitle"), "Title", 'data-he-flag="favsTitle"') + "</div>") + '<ul class="tfTrayList hcHeList" data-he-list="favs">' + (t.map(e).join("") || '<li class="tfTrayNote">No favourites yet.</li>') + '</ul><button class="pill tfTrayAdd hcAddBtn" type="button" data-he-add aria-expanded="' + Da + '">' + Li + '<span>Add favourite</span></button><div class="tfTrayPick" data-he-pick' + (Da ? "" : " hidden") + '><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-he-search value="' + q(n) + '"><ul class="tfTrayList">' + (Da ? Cs(n, (L) => pc.test(L), new Set(t), "data-he-pick-id") : "") + '</ul></div><hr class="hcHeRule"><div class="hcHeLine"><span class="activityRowName">Suggested entities</span>' + sn("suggest") + wa(It(), "Suggested entities", "data-he-suggest") + "</div>",
      sums: '<div class="hcHeLine"><span class="activityRowName">Show summaries</span>' + sn("sums") + wa(((T = mt.home) == null ? void 0 : T.sums) !== !1, "Show summaries", 'data-he-card="sums"') + "</div>" + sr("Width", "data-he-sums-width", hc() ? "fit" : "match", [["match", "Match the cards"], ["fit", "Fit the summaries"]]) + '<hr class="hcHeRule"><ul class="tfTrayList hcHeList" data-he-list="sums">' + mc().map(a).join("") + "</ul>",
      areas: '<p class="tfTrayNote">Which areas show on Home. Drag to change their order, here and on the custom dashboard.</p><ul class="tfTrayList hcHeList" data-he-list="areas">' + ls().map(l).join("") + "</ul>"
    };
    xe.querySelector("[data-he-body]").innerHTML = // the note about the areas page first (Matt, 12 Nov: "to the top of the rollover"), as Home Assistant's dialog has it
    '<p class="tfTrayNote hcHeAreasNote">You can rearrange your floors and areas in the order that best represents your house on the <button type="button" class="hcHeLink" data-path="/config/areas/dashboard">areas page</button>.</p><div class="tabs rubberTabs hcTrayTabs" role="tablist" aria-label="Edit Home page"><div class="rubberIndicator" aria-hidden="true"></div>' + i.map(([L, H]) => '<button class="tab segBtn' + (L === li ? " active" : "") + '" type="button" role="tab" aria-selected="' + (L === li) + '" data-he-tab="' + L + '">' + H + "</button>").join("") + '</div><div class="hcHeTabBody" role="tabpanel">' + f[li] + "</div>", Ls(!1), Ia(xe);
  }
  const Ln = (t) => {
    mt = { ...mt, ...t }, He(), Ce(), Tn();
  }, va = (t) => Ln({ home: { ...mt.home || {}, ...t } });
  function Es(t) {
    lr(), po = t, Da = !1, xe.classList.toggle("open", t), xe.toggleAttribute("inert", !t), g.classList.toggle("hcHomeEditing", t), w && R && Be();
    const e = p("dashEditNav"), a = xe.querySelector(".tfTrayHead");
    e && t && (Ts = e.parentElement, a.appendChild(e)), e && !t && Ts && Ts.appendChild(e), e && (e.classList.toggle("active", t), e.setAttribute("aria-pressed", String(t)), e.setAttribute("aria-label", t ? "Done editing Home" : "Edit Home page"), e.title = t ? "Done" : "Edit", e.innerHTML = t ? sp : Di), t ? (_s = JSON.stringify(mt), Tn()) : _s && JSON.stringify(mt) !== _s && ba("Changes saved");
  }
  xe.innerHTML = '<div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit Home page</div></div><div class="hcHeBody" data-he-body></div></div>', g.appendChild(xe);
  let fo = null;
  const Ea = Object.assign(document.createElement("div"), { className: "card hcInfoPop", hidden: !0 });
  Ea.setAttribute("role", "dialog"), g.appendChild(Ea);
  function lr() {
    fo && (fo.setAttribute("aria-expanded", "false"), fo = null, Ea.hidden = !0);
  }
  function gc(t) {
    const e = fo;
    if (lr(), e === t) return;
    const [a, n] = uc[t.dataset.info];
    Ea.setAttribute("aria-label", a), Ea.innerHTML = '<div class="hcInfoTitle">' + q(a) + '</div><div class="hcInfoText">' + n + '</div><a class="hcInfoMore" href="' + jf + '" target="_blank" rel="noopener">Learn more</a>', Ea.hidden = !1, fo = t, t.setAttribute("aria-expanded", "true");
    const i = t.getBoundingClientRect(), c = Ea.offsetWidth, l = Ea.offsetHeight;
    Ea.style.left = Math.max(8, Math.min(innerWidth - c - 8, i.left + i.width / 2 - c / 2)) + "px", Ea.style.top = (i.bottom + 8 + l > innerHeight - 8 ? Math.max(8, i.top - 8 - l) : i.bottom + 8) + "px";
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
      po && (t.stopPropagation(), Es(!1), (e = p("dashEditNav")) == null || e.focus());
    }
  }, !0);
  const Vf = (t) => t.dataset.heList === "favs" ? $() : t.dataset.heList === "areas" ? ls().map((e) => e.id) : mc(), bc = (t, e) => t.dataset.heList === "favs" ? Ln({ favourites: e }) : t.dataset.heList === "areas" ? (Ln({ areaOrder: e }), Be()) : va({ sumOrder: e });
  xe.addEventListener("keydown", (t) => {
    var f;
    const e = t.target.closest("[data-he-grip]");
    if (!e || !["ArrowUp", "ArrowDown"].includes(t.key)) return;
    t.preventDefault();
    const a = e.closest("[data-he-id]"), n = a.parentElement, i = Vf(n), c = i.indexOf(a.dataset.heId), l = c + (t.key === "ArrowUp" ? -1 : 1);
    l < 0 || l >= i.length || (i.splice(l, 0, i.splice(c, 1)[0]), bc(n, i), (f = xe.querySelector('[data-he-list="' + n.dataset.heList + '"] [data-he-id="' + CSS.escape(a.dataset.heId) + '"] [data-he-grip]')) == null || f.focus());
  }), xe.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-he-grip]");
    if (!e || t.button !== 0) return;
    t.preventDefault();
    const a = e.closest("[data-he-id]"), n = a.parentElement;
    a.classList.add("moving");
    const i = (l) => {
      const f = [...n.children].filter((k) => k !== a), m = f.find((k) => {
        const M = k.getBoundingClientRect();
        return l.clientY < M.top + M.height / 2;
      });
      m !== a.nextElementSibling && n.insertBefore(a, m || null);
    }, c = () => {
      removeEventListener("pointermove", i), removeEventListener("pointerup", c), a.classList.remove("moving"), bc(n, [...n.children].map((l) => l.dataset.heId).filter(Boolean));
    };
    addEventListener("pointermove", i), addEventListener("pointerup", c);
  }), xe.addEventListener("input", (t) => {
    if (t.target.matches("[data-he-search]")) {
      const e = t.target.selectionStart;
      Tn();
      const a = xe.querySelector("[data-he-search]");
      a.focus(), a.setSelectionRange(e, e);
    }
  }), xe.addEventListener("click", (t) => {
    var H, U, B;
    const e = t.target, a = e.closest("[data-info]");
    if (a) {
      gc(a);
      return;
    }
    const n = e.closest("[data-he-tab]");
    if (n) {
      const Z = xe.querySelector(".hcTrayTabs .rubberIndicator"), E = { left: Z.offsetLeft, width: Z.offsetWidth };
      li = n.dataset.heTab, Da = !1, lr(), Tn(), Ls(!0, E), xe.querySelector(".tfTrayInner").scrollTop = 0;
      return;
    }
    if (e.closest("[data-he-welcome]")) {
      va({ welcome: !is() });
      return;
    }
    const i = e.closest("[data-he-card]");
    if (i) {
      const Z = i.dataset.heCard, E = ["sums", "favs"].includes(Z) ? ((H = mt.home) == null ? void 0 : H[Z]) !== !1 : !!((U = mt.home) != null && U[Z]);
      va({ [Z]: !E });
      return;
    }
    const c = e.closest("[data-he-favs-as]");
    if (c) {
      va({ favsAs: c.dataset.heFavsAs });
      return;
    }
    const l = e.closest("[data-he-sums-width]");
    if (l) {
      va({ sumsWidth: l.dataset.heSumsWidth });
      return;
    }
    const f = e.closest("[data-he-area-size]");
    if (f) {
      va({ areaSize: f.dataset.heAreaSize });
      return;
    }
    const m = e.closest("[data-he-area-layout]");
    if (m) {
      va({ areaLayout: m.dataset.heAreaLayout });
      return;
    }
    const k = e.closest("[data-he-cards-as]");
    if (k) {
      va({ cardsAs: k.dataset.heCardsAs });
      return;
    }
    const M = e.closest("[data-he-flag]");
    if (M) {
      const Z = M.dataset.heFlag;
      va({ [Z]: !io(Z) }), Z === "favsTitle" && Ba();
      return;
    }
    if (e.closest("[data-he-suggest]")) {
      Ln({ suggest: !It() });
      return;
    }
    const x = e.closest("[data-he-area]");
    if (x) {
      const Z = new Set(((B = mt.home) == null ? void 0 : B.areasOff) || []), E = x.dataset.heArea;
      Z.has(E) ? Z.delete(E) : Z.add(E), va({ areasOff: [...Z] });
      return;
    }
    const _ = e.closest("[data-he-sum]");
    if (_) {
      const Z = _.dataset.heSum, E = !Ge(Z), yt = mt.home || {};
      va(tp.includes(Z) ? { shownSums: E ? [...yt.shownSums || [], Z] : (yt.shownSums || []).filter((zt) => zt !== Z) } : { hiddenSums: E ? (yt.hiddenSums || []).filter((zt) => zt !== Z) : [...yt.hiddenSums || [], Z] });
      return;
    }
    const T = e.closest("[data-he-remove]");
    if (T) {
      Ln({ favourites: $().filter((Z) => Z !== T.dataset.heRemove) });
      return;
    }
    if (e.closest("[data-he-add]")) {
      Da = !Da, Tn(), Da && xe.querySelector("[data-he-search]").focus({ preventScroll: !0 });
      return;
    }
    const L = e.closest("[data-he-pick-id]");
    L && (Da = !1, xe.querySelector("[data-he-search]").value = "", Ln({ favourites: [...$(), L.dataset.hePickId] }));
  });
  function be() {
    var M, x, _;
    const t = ea && g.classList.contains("tfBoard");
    if (Yt.classList.toggle("open", t), Yt.classList.toggle("tucked", t && Va), Yt.toggleAttribute("inert", !t), t || (co = !1), Mc(), !t) return;
    const e = Yt.querySelector("[data-tray-tuck]");
    e.innerHTML = Va ? Gd : ip, e.setAttribute("aria-expanded", String(!Va)), e.setAttribute("aria-label", Va ? "Show the edit tray" : "Tuck the edit tray away");
    const a = ae().hidden.filter((T) => !ro.includes(T) && nn().some((L) => L.key === T)), n = (T, L) => '<button class="tfTrayCard" type="button" data-tray-card="' + q(T) + '" aria-label="' + q(ga(T)) + ": drag it onto the board, or press to " + L + '"><span class="tfTrayGrip" aria-hidden="true">' + kr + "</span>" + q(ga(T)) + "</button>", i = a.filter((T) => !Wn.includes(T)), c = Wn.filter((T) => a.includes(T));
    La("welcome", '<div class="hcHeLine"><span class="activityRowName">Welcome message</span>' + sn("welcome") + '<button class="switch' + (ae().welcome ? " on" : "") + '" type="button" role="switch" aria-checked="' + !!ae().welcome + '" aria-label="Welcome message" data-dash-welcome></button></div><div class="hcHeLine"><span class="activityRowName">Show summaries</span><button class="switch' + ((M = mt.dash) != null && M.sumsOff ? "" : " on") + '" type="button" role="switch" aria-checked="' + !((x = mt.dash) != null && x.sumsOff) + '" aria-label="Show summaries" data-dash-sums></button></div>'), requestAnimationFrame(() => fc(!1)), La("cards", '<div class="sectionLabel">Hidden and new cards</div>' + (i.length ? '<div class="tfTrayCards">' + i.map((T) => n(T, "put it back")).join("") + "</div>" : '<p class="tfTrayNote">Cards you hide, and new ones, wait here.</p>')), La("weather", '<div class="sectionLabel">Weather</div>' + (c.length ? `<p class="tfTrayNote">The Weather page's widgets. Drag one onto the board, or press to add it.</p><div class="tfTrayCards">` + c.map((T) => n(T, "add it")).join("") + "</div>" : '<p class="tfTrayNote">Every weather widget is on the board.</p>')), La("phone", '<div class="sectionLabel">Phone</div><p class="tfTrayNote">' + (ae().phone ? "Phones have an order of their own." : "Phones follow the board's order.") + '</p><button class="pill tfTrayAdd" type="button" data-phone-toggle aria-pressed="' + co + '">' + (co ? "Hide the phone" : "Show the phone") + "</button>");
    const l = new Set(mt.favHidden || []), f = $(), m = [...f, ...[...l].filter((T) => !f.includes(T) && y[T])];
    La("favs", m.map((T) => Wf(T, l.has(T), f.includes(T))).join("") || '<li class="tfTrayNote">No favourites yet.</li>'), Yt.querySelector('[data-pick="tiles"]').hidden = !lo, Yt.querySelector("[data-tile-add]").setAttribute("aria-expanded", String(lo)), lo && La("tilepick", Cs(Yt.querySelector("[data-tile-search]").value, (T) => Mr.includes(T.split(".")[0]), new Set(ai()), "data-tile-pick")), Yt.querySelector('[data-tray="roompick"]').hidden = !ir, Yt.querySelector("[data-room-add]").setAttribute("aria-expanded", String(ir));
    const k = new Set(((_ = mt.dash) == null ? void 0 : _.areasOff) || []);
    if (La("areas", h(u).map((T) => '<li class="hcHeRow" data-area-id="' + q(T.id) + '"><button class="tfTrayBtn hcHeGrip" type="button" data-area-grip aria-label="Move ' + q(T.name) + '. Use the up and down arrows">' + kr + '</button><span class="tfIcon"><span class="tfAreaGlyph"' + fe("area:" + T.id, T.icon || "mdi:texture-box", T.name) + '></span></span><span class="activityRowName">' + q(T.name) + '</span><button class="switch' + (k.has(T.id) ? "" : " on") + '" type="button" role="switch" aria-checked="' + !k.has(T.id) + '" aria-label="Show ' + q(T.name) + ' in the Areas card" data-area-on="' + q(T.id) + '"></button></li>').join("")), ir) {
      const T = new Set(ai());
      La("roompick", h(u).filter((L) => !T.has("room:" + L.id)).map((L) => '<li><button class="tfTrayPickItem" type="button" data-room-pick="' + q(L.id) + '"><span class="tfIcon"><span class="tfAreaGlyph"' + fe("area:" + L.id, L.icon || "mdi:texture-box", L.name) + '></span></span><span class="tfTrayName"><span class="activityRowName">' + q(L.name) + "</span></span></button></li>").join("") || '<li class="tfTrayNote">Every area is on the board.</li>');
    }
    Yt.querySelector('[data-pick="favs"]').hidden = !so, Yt.querySelector("[data-fav-add]").setAttribute("aria-expanded", String(so)), so && La("pick", Cs(Yt.querySelector("[data-fav-search]").value, (T) => pc.test(T), new Set($()), "data-fav-pick")), La("favtitle", '<div><strong>Title</strong><div class="status">Favourites, at the top of the card.</div></div><button class="switch' + (ti() ? " on" : "") + '" type="button" role="switch" aria-checked="' + ti() + '" data-fav-title aria-label="Title"></button>'), La("suggest", '<div><strong>Show suggestions</strong><div class="status">Fills the card after your favourites.</div></div><button class="switch' + (It() ? " on" : "") + '" type="button" role="switch" aria-checked="' + It() + '" data-fav-suggest aria-label="Show suggestions"></button>');
  }
  const ln = (t) => {
    mt = { ...mt, ...t }, He(), Ce(), be();
  };
  function wc(t, e) {
    const a = mt, n = new Set(mt.favHidden || []);
    e ? n.delete(t) : n.add(t), ln({ favHidden: [...n] }), e ? ba(kt(t) + " put back") : ba(kt(t) + " hidden", si(a));
  }
  const zf = (t) => {
    const e = mt;
    ln({ favourites: $().filter((a) => a !== t), favHidden: (mt.favHidden || []).filter((a) => a !== t) }), ba(kt(t) + " removed from favourites", si(e));
  }, Gf = (t) => {
    ln({ favourites: [...$().filter((e) => e !== t), t], favHidden: (mt.favHidden || []).filter((e) => e !== t) }), ba(kt(t) + " added to favourites");
  };
  Yt.addEventListener("click", (t) => {
    var a, n, i;
    const e = t.target.closest("button");
    if (e) {
      if (e.hasAttribute("data-tray-tab")) {
        Ms = e.dataset.trayTab, fc(!0), Yt.querySelector(".tfTrayInner").scrollTop = 0;
        return;
      }
      if (e.hasAttribute("data-tray-done")) bs(!1);
      else if (e.hasAttribute("data-info")) gc(e);
      else if (e.hasAttribute("data-dash-sums"))
        on({ ...cs(), hidden: cs().hidden.filter((c) => c !== "sums"), sumsOff: !((a = mt.dash) != null && a.sumsOff) }), Ce(), be();
      else if (e.hasAttribute("data-dash-welcome")) {
        const c = ae();
        on({ ...c, welcome: !c.welcome }), Ce(), be();
      } else if (e.hasAttribute("data-tray-tuck"))
        Va = !Va, be();
      else if (e.hasAttribute("data-phone-toggle"))
        co = !co, be(), co && ((n = na.querySelector("[data-phone-key]")) == null || n.focus({ preventScroll: !0 }));
      else if (e.dataset.trayCard)
        t.detail === 0 && (ws(e.dataset.trayCard), be());
      else if (e.dataset.favEye) wc(e.dataset.favEye, e.getAttribute("aria-pressed") !== "true");
      else if (e.dataset.favRemove) zf(e.dataset.favRemove);
      else if (e.hasAttribute("data-fav-add"))
        so = !so, be(), so && Yt.querySelector("[data-fav-search]").focus({ preventScroll: !0 });
      else if (e.dataset.favPick) Gf(e.dataset.favPick);
      else if (e.hasAttribute("data-tile-add"))
        lo = !lo, be(), lo && Yt.querySelector("[data-tile-search]").focus({ preventScroll: !0 });
      else if (e.dataset.tilePick) sc(e.dataset.tilePick);
      else if (e.hasAttribute("data-room-add"))
        ir = !ir, be();
      else if (e.dataset.roomPick) sc("room:" + e.dataset.roomPick);
      else if (e.dataset.areaOn) {
        const c = new Set(((i = mt.dash) == null ? void 0 : i.areasOff) || []);
        c.has(e.dataset.areaOn) ? c.delete(e.dataset.areaOn) : c.add(e.dataset.areaOn), on({ ...ae(), areasOff: [...c] }), Ce(), be();
      } else e.hasAttribute("data-fav-suggest") ? ln({ suggest: !It() }) : e.hasAttribute("data-fav-title") && (ln({ favsTitle: !ti() }), Ba());
    }
  }), Yt.addEventListener("input", (t) => {
    t.target.matches("[data-fav-search],[data-tile-search]") && be();
  });
  const vc = (t) => {
    mt = { ...mt, areaOrder: t }, He(), Ce(), be();
  };
  Yt.addEventListener("keydown", (t) => {
    var l, f, m;
    const e = (f = (l = t.target).closest) == null ? void 0 : f.call(l, "[data-area-grip]");
    if (!e || !["ArrowUp", "ArrowDown"].includes(t.key)) return;
    t.preventDefault();
    const a = e.closest("[data-area-id]").dataset.areaId, n = h(u).map((k) => k.id), i = n.indexOf(a), c = i + (t.key === "ArrowUp" ? -1 : 1);
    c < 0 || c >= n.length || (n.splice(c, 0, n.splice(i, 1)[0]), vc(n), (m = Yt.querySelector('[data-area-id="' + CSS.escape(a) + '"] [data-area-grip]')) == null || m.focus());
  }), Yt.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-area-grip]");
    if (!e || t.button !== 0) return;
    t.preventDefault();
    const a = e.closest("[data-area-id]"), n = a.parentElement;
    a.classList.add("moving");
    const i = (l) => {
      const f = [...n.children].filter((k) => k !== a), m = f.find((k) => {
        const M = k.getBoundingClientRect();
        return l.clientY < M.top + M.height / 2;
      });
      m !== a.nextElementSibling && n.insertBefore(a, m || null);
    }, c = () => {
      removeEventListener("pointermove", i), removeEventListener("pointerup", c), a.classList.remove("moving"), vc([...n.children].map((l) => l.dataset.areaId).filter(Boolean));
    };
    addEventListener("pointermove", i), addEventListener("pointerup", c);
  });
  const uo = window.visualViewport, Bs = () => {
    if (!uo) return;
    const t = Math.max(0, Math.round(window.innerHeight - uo.height - uo.offsetTop));
    Yt.style.bottom = t > 40 ? t + "px" : "";
  };
  uo == null || uo.addEventListener("resize", Bs), uo == null || uo.addEventListener("scroll", Bs), Yt.addEventListener("focusin", (t) => {
    var e, a;
    (a = (e = t.target).matches) != null && a.call(e, "input") && setTimeout(() => {
      Bs(), t.target.scrollIntoView({ block: "center", behavior: "smooth" });
    }, 350);
  }), Yt.addEventListener("keydown", (t) => {
    var a, n;
    const e = !!((n = (a = t.target).closest) != null && n.call(a, '[data-pick="tiles"],[data-tile-add]'));
    t.key !== "Escape" || !(e ? lo : so) || (t.stopPropagation(), e ? lo = !1 : so = !1, be(), Yt.querySelector(e ? "[data-tile-add]" : "[data-fav-add]").focus({ preventScroll: !0 }));
  });
  function yc(t, e, a, n) {
    t.preventDefault();
    const i = t.clientX, c = t.clientY;
    let l = null, f = 0;
    const m = Object.assign(document.createElement("div"), { className: "tfFavDrop" }), k = (x) => {
      if (!l) {
        if (Math.hypot(x.clientX - i, x.clientY - c) < 4) return;
        l = e.cloneNode(!0), l.classList.add("tfTrayGhost"), l.style.width = e.offsetWidth + "px", g.appendChild(l);
      }
      l.style.transform = "translate(" + (x.clientX - 24) + "px," + (x.clientY - 24) + "px)";
      const _ = !Va && x.clientX >= Yt.getBoundingClientRect().left;
      if (a === "card") {
        const H = R.getBoundingClientRect(), { w: U } = an(R.clientWidth);
        Zt = !_ && x.clientX >= H.left && x.clientX <= H.right && x.clientY >= H.top + Oo ? { key: n, col: Math.max(0, Math.floor((x.clientX - H.left) / (U + se))), row: Math.max(0, Math.floor((x.clientY - H.top - Oo) / Ta)), fromTray: !0 } : null, f || (f = requestAnimationFrame(() => {
          f = 0, Be();
        }));
        return;
      }
      const T = R.querySelector(".tfDash-favs"), L = T == null ? void 0 : T.getBoundingClientRect();
      if (Ye = null, L && !_ && x.clientX >= L.left && x.clientX <= L.right && x.clientY >= L.top && x.clientY <= L.bottom) {
        let H = 1 / 0;
        T.querySelectorAll('[data-k^="fav:"]').forEach((U, B) => {
          const Z = U.getBoundingClientRect(), E = Math.hypot(x.clientX - (Z.left + Z.width / 2), x.clientY - (Z.top + Z.height / 2));
          E < H && (H = E, Ye = { i: B, r: Z, after: x.clientX > Z.left + Z.width / 2 });
        }), Ye || (Ye = { i: 0, r: null, after: !1 });
      }
      Ye != null && Ye.r ? (m.isConnected || g.appendChild(m), Object.assign(m.style, { left: (Ye.after ? Ye.r.right : Ye.r.left) - 2 + "px", top: Ye.r.top + 8 + "px", height: Ye.r.height - 16 + "px" })) : m.remove();
    }, M = () => {
      if (window.removeEventListener("pointermove", k), window.removeEventListener("pointerup", M), window.removeEventListener("pointercancel", M), cancelAnimationFrame(f), l == null || l.remove(), m.remove(), a === "card") {
        if (!l) ws(n);
        else if (Zt != null && Zt.fromTray) {
          Be();
          const H = ga(n) + rc(n), U = ae(), B = rn();
          Zt = null, Cn({ ...U, hidden: U.hidden.filter((Z) => Z !== n) }, B), ba(H);
        }
        Zt = null, Be(), Ce(), be();
        return;
      }
      if (!Ye) return;
      const x = new Set(mt.favHidden || []);
      x.delete(n);
      const _ = $().filter((H) => H !== n), T = _.filter((H) => !x.has(H)), L = T[Math.min(Ye.i + (Ye.after ? 1 : 0), T.length)];
      _.splice(L ? _.indexOf(L) : _.length, 0, n), Ye = null, ln({ favourites: _, favHidden: [...x] }), ba(kt(n) + " put back");
    };
    window.addEventListener("pointermove", k), window.addEventListener("pointerup", M), window.addEventListener("pointercancel", M);
  }
  const xc = {
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
  }, kc = 136, Uf = 288, Yf = 0.8, Zf = { wx: "mdi:weather-partly-cloudy", areas: "mdi:home", favs: "mdi:star", act: "mdi:history", energy: "mdi:lightning-bolt", avg: "mdi:chart-line", aq: "mdi:air-filter", pollen: "mdi:flower-pollen", radar: "mdi:radar" }, na = Object.assign(document.createElement("aside"), { className: "tfMiniPhone" });
  na.setAttribute("aria-label", "Phone order"), na.innerHTML = '<div class="tfPhoneHead"><div class="activityTitle">Phone</div><button class="tfTrayBtn" type="button" data-phone-close aria-label="Close the phone">' + Sl + '</button></div><p class="tfTrayNote" data-phone="note"></p><div class="tfPhoneScreen"><div class="tfPhoneList" data-phone="list"></div></div>', g.appendChild(na);
  let Rs = "";
  function Mc() {
    var f;
    const t = co && ea && g.classList.contains("tfBoard") && !Va;
    if (na.classList.toggle("open", t), na.toggleAttribute("inert", !t), !t) return;
    const e = ds().filter((m) => !ae().hidden.includes(m.key)), a = e.length, n = (m) => Math.round(m * Yf * 10) / 10 + "px", i = (m, k) => {
      const M = m.el.classList.contains("tfDac"), x = m.tile ? M ? Uf : kc : xc[m.key] || kc;
      return '<button class="tfPhoneBlock' + (m.tile ? " tile" : "") + '" type="button" data-phone-key="' + q(m.key) + '" style="min-height:' + n(x) + '" aria-label="' + q(ga(m.key) + ", " + (k + 1) + " of " + a + ". Drag, or use the arrow keys, to move it") + '"><span class="tfIcon"' + (m.tile ? fe(m.key, sa(m.key)) : fe(m.key, Zf[m.key])) + '></span><span class="tfPhoneName">' + q(ga(m.key)) + "</span></button>";
    }, c = '<div class="tfPhoneTitle">' + q(((f = R.querySelector(".tfDashTitle")) == null ? void 0 : f.textContent) || "") + '</div><div class="tfPhoneBlock fixed" style="min-height:' + n(xc.sums) + '"><span class="tfPhoneName">' + q(ga("sums")) + "</span></div>" + e.map(i).join("");
    if (na.querySelector('[data-phone="note"]').innerHTML = ae().phone ? 'Phones use this order. <button class="tfLinkBtn" type="button" data-phone-reset>Follow the board</button>' : "Phones follow the board. Drag a card to give them an order of their own.", c === Rs) return;
    Rs = c;
    const l = na.querySelector('[data-phone="list"]');
    l.innerHTML = c, Ia(l);
  }
  function Sc(t, e) {
    var a;
    on({ ...ae(), phone: t }), be(), e && ((a = na.querySelector('[data-phone-key="' + CSS.escape(e) + '"]')) == null || a.focus({ preventScroll: !0 }));
  }
  const Ps = () => [...na.querySelectorAll("[data-phone-key]")].map((t) => t.dataset.phoneKey);
  function Kf(t, e) {
    t.preventDefault();
    const a = e.parentElement, n = na.querySelector(".tfPhoneScreen"), i = Ps().join();
    e.classList.add("moving");
    const c = (f) => {
      const m = n.getBoundingClientRect();
      f.clientY > m.bottom - 40 ? n.scrollTop += 12 : f.clientY < m.top + 40 && (n.scrollTop -= 12);
      const k = [...a.querySelectorAll("[data-phone-key]")].find((_) => {
        const T = _.getBoundingClientRect();
        return _ !== e && f.clientX >= T.left && f.clientX <= T.right && f.clientY >= T.top && f.clientY <= T.bottom;
      });
      if (!k) return;
      const M = k.getBoundingClientRect(), x = k.classList.contains("tile") ? f.clientX < M.left + M.width / 2 : f.clientY < M.top + M.height / 2;
      a.insertBefore(e, x ? k : k.nextSibling);
    }, l = () => {
      window.removeEventListener("pointermove", c), window.removeEventListener("pointerup", l), window.removeEventListener("pointercancel", l), e.classList.remove("moving");
      const f = Ps();
      Rs = "", f.join() !== i ? Sc(f) : Mc();
    };
    window.addEventListener("pointermove", c), window.addEventListener("pointerup", l), window.addEventListener("pointercancel", l);
  }
  na.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-phone-key]");
    e && t.button <= 0 && Kf(t, e);
  }), na.addEventListener("click", (t) => {
    var a;
    const e = t.target.closest("button");
    if (e != null && e.hasAttribute("data-phone-close"))
      co = !1, be(), (a = Yt.querySelector("[data-phone-toggle]")) == null || a.focus({ preventScroll: !0 });
    else if (e != null && e.hasAttribute("data-phone-reset")) {
      const { phone: n, ...i } = ae();
      on(i), be();
    }
  }), na.addEventListener("keydown", (t) => {
    var l, f, m, k;
    if (t.key === "Escape") {
      t.stopPropagation(), co = !1, be(), (l = Yt.querySelector("[data-phone-toggle]")) == null || l.focus({ preventScroll: !0 });
      return;
    }
    const e = (k = (m = (f = t.target).closest) == null ? void 0 : m.call(f, "[data-phone-key]")) == null ? void 0 : k.dataset.phoneKey, a = { ArrowUp: -1, ArrowLeft: -1, ArrowDown: 1, ArrowRight: 1 }[t.key];
    if (!e || !a) return;
    t.preventDefault();
    const n = Ps(), i = n.indexOf(e), c = i + a;
    c < 0 || c >= n.length || ([n[i], n[c]] = [n[c], n[i]], Sc(n, e));
  });
  function Xf(t, e) {
    t.preventDefault();
    const a = e.parentElement;
    e.classList.add("moving");
    const n = (c) => {
      const l = [...a.children].find((f) => {
        const m = f.getBoundingClientRect();
        return f !== e && c.clientY >= m.top && c.clientY <= m.bottom;
      });
      if (l) {
        const f = l.getBoundingClientRect();
        a.insertBefore(e, c.clientY < f.top + f.height / 2 ? l : l.nextSibling);
      }
    }, i = () => {
      window.removeEventListener("pointermove", n), window.removeEventListener("pointerup", i), window.removeEventListener("pointercancel", i), e.classList.remove("moving");
      const c = new Set($());
      Ss.favs = null, ln({ favourites: [...a.children].map((l) => l.dataset.trayFav).filter((l) => c.has(l)) });
    };
    window.addEventListener("pointermove", n), window.addEventListener("pointerup", i), window.addEventListener("pointercancel", i);
  }
  Yt.addEventListener("pointerdown", (t) => {
    if (t.button > 0) return;
    const e = t.target.closest("[data-tray-card]"), a = t.target.closest(".tfTrayFav");
    e ? yc(t, e, "card", e.dataset.trayCard) : a && t.target.closest(".tfTrayGrip") ? Xf(t, a) : a != null && a.classList.contains("off") && !t.target.closest("button") && yc(t, a, "fav", a.dataset.trayFav);
  });
  function $f(t) {
    if (!ea || t.button !== 0 || t.target.closest("[data-board-more],.tfBoardMenu,.tfFavHides")) return;
    const e = t.target.closest(".tfBoardItem"), a = e && nn().find((Xt) => Xt.el === e);
    if (!a || ro.includes(a.key)) return;
    const n = en.get(a.key), { w: i } = an(R.clientWidth);
    if (!n) return;
    t.preventDefault(), ja();
    const c = t.clientX, l = t.clientY;
    let f = !1, m = 0;
    const k = Me.drag, M = We();
    let x = 0, _ = 0, T = 0, L = 0, H = 0, U = 0, B = M || k.stick === 0, Z = 0;
    const E = (Xt, we, Lt, Wt) => {
      e.style.transform = "translate(" + T.toFixed(2) + "px," + L.toFixed(2) + "px) rotate(" + Xt.toFixed(2) + "deg) rotate(" + we + "rad) scale(" + Lt.toFixed(4) + "," + Wt.toFixed(4) + ") rotate(" + -we + "rad)";
    }, yt = () => {
      if (Z = requestAnimationFrame(yt), M) {
        T = x, L = _, E(0, 0, 1, 1);
        return;
      }
      if (!B) {
        const Ze = Math.min(Math.hypot(x, _) / Math.max(1, k.stick), 1);
        T = x * 0.35, L = _ * 0.35, E(0, Math.atan2(_, x), 1 + 0.155 * Ze, 1 - 0.1 * Ze);
        return;
      }
      H = gd(H, x - T, k.pull / 100, k.keep / 100), U = gd(U, _ - L, k.pull / 100, k.keep / 100), T += H, L += U;
      const Xt = Math.hypot(H, U), we = Math.min(Xt / 48, 1), Lt = Math.max(-5, Math.min(k.tilt, H * 0.32)), Wt = 1 + k.lift / 100;
      E(Lt, Math.atan2(U, H), Wt * (1 + 0.1 * we), Wt * (1 - 0.063 * we));
    }, zt = (Xt) => {
      if (x = Xt.clientX - c, _ = Xt.clientY - l, !f) {
        if (Math.hypot(x, _) < 4) return;
        f = !0, Zt = { key: a.key, col: n.col, row: n.row }, e.classList.add("tfDragging", "mvDrag"), Z = requestAnimationFrame(yt);
      }
      !B && Math.hypot(x, _) > k.stick && (B = !0, H = x * 0.085, U = _ * 0.085), Zt.col = Math.round((n.x + x) / (i + se)), Zt.row = Math.round((n.y + _ - Oo) / Ta), m || (m = requestAnimationFrame(() => {
        m = 0, Be();
      }));
    }, Ht = () => {
      var gi;
      if (window.removeEventListener("pointermove", zt), window.removeEventListener("pointerup", Ht), window.removeEventListener("pointercancel", Ht), !f) return;
      const Xt = (mr) => {
        mr.preventDefault(), mr.stopImmediatePropagation();
      };
      window.addEventListener("click", Xt, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", Xt, { capture: !0 }), 300), cancelAnimationFrame(m), cancelAnimationFrame(Z);
      const we = e.getBoundingClientRect(), Lt = a.key;
      e.style.transition = "none", Be(), e.classList.remove("tfDragging", "mvDrag"), e.style.transform = "", Zt = null, Cn(ae(), rn()), Be(), Ce();
      const Wt = (gi = nn().find((mr) => mr.key === Lt)) == null ? void 0 : gi.el;
      if (requestAnimationFrame(() => {
        e.style.transition = "", Wt && (Wt.style.transition = "");
      }), !Wt || M) return;
      Wt.style.transition = "none";
      const Ze = Wt.getBoundingClientRect(), Ga = we.left + we.width / 2 - (Ze.left + Ze.width / 2), mi = we.top + we.height / 2 - (Ze.top + Ze.height / 2);
      Wt.style.zIndex = "20", Wt.animate([{ transform: "translate(" + Ga + "px," + mi + "px) scale(" + (1 + k.lift / 100) + ")" }, { transform: "none" }], { duration: k.slide, easing: Se.land }).finished.then(() => {
        Wt.style.zIndex = "", bd(Wt);
      }, () => {
        Wt.style.zIndex = "";
      });
    };
    window.addEventListener("pointermove", zt), window.addEventListener("pointerup", Ht), window.addEventListener("pointercancel", Ht);
  }
  function Ac(t = !1) {
    const e = R == null ? void 0 : R.querySelector(".tfDashGraph svg[data-graph]");
    if (!(e != null && e.clientWidth)) return;
    const a = e.dataset.graph + "@" + e.clientWidth + "x" + e.clientHeight + "@" + Math.floor(Date.now() / 3e5);
    if (e.dataset.drawn === a) return;
    const n = !e.dataset.drawn;
    e.dataset.drawn = a;
    const i = Nl.find((c) => c.id === e.dataset.graph);
    i ? of(e, i).then(() => {
      (t || n) && nf(e);
    }) : Uc(e.dataset.graph, e).then(() => {
      t && Wl(e);
    });
  }
  function Cc() {
    var m, k, M;
    qt = _r.model(d(), { madeUp: !S }), Mt(), y = qt.states, y[(m = mt.sources) == null ? void 0 : m.grid] && (qt.grid = mt.sources.grid), y[(k = mt.sources) == null ? void 0 : k.alarm] && (qt.security.alarms = [mt.sources.alarm]), xt.forEach((x, _) => {
      const T = y[_], L = (T == null ? void 0 : T.attributes) || {};
      if (!T || Date.now() - x.at > 2 * 60 * 1e3) {
        xt.delete(_);
        return;
      }
      x.pos != null && T.state !== "opening" && T.state !== "closing" && Math.abs(ia(_) - x.pos) < 1 && delete x.pos, x.tilt != null && Math.abs((L.current_tilt_position ?? -1) - x.tilt) < 1 && delete x.tilt, x.pos == null && x.tilt == null && xt.delete(_);
    });
    const t = [];
    let e = 0;
    const a = N();
    u = a.filter((x) => x.room).map((x) => x.room), u.some((x) => x.id === F) || (F = ((M = u[0]) == null ? void 0 : M.id) || null);
    const n = tt === "weather" ? { key: "weather", name: "Weather" } : tt && a.find((x) => x.key === tt);
    if (n || (tt = null), g.classList.toggle("tfAreaOpen", !!n), g.classList.toggle("tfWeatherOpen", (n == null ? void 0 : n.key) === "weather"), g.classList.toggle("tfDash", !n), Ct = /* @__PURE__ */ new Map(), qt.rooms.forEach((x) => [...x.actions, ...x.plugs, ...x.readings, ...x.openings, ...x.solar, ...x.plants.flatMap((_) => [_.id, ..._.readings])].forEach((_) => Ct.set(_, x.name))), !n) return cf(t, Qo());
    if (t.push({ key: "areahead", html: Jf(n, ++e) }), n.key === "weather")
      return t.weather = ++e, t;
    const i = n.ids, c = n.room ? n.room.id : n.key, l = n.room;
    l != null && l.solar.length && t.push({ key: "energy:" + l.id, html: Do(l, ++e) }), l && (l.readings.length || l.power != null) && t.push({ key: "readings:" + l.id, html: qr(l, ++e) }), l == null || l.plants.forEach((x) => t.push({ key: "plant:" + x.id, html: Wr(x, ++e) }));
    const f = [...i, ...((l == null ? void 0 : l.plugs) || []).filter((x) => !i.includes(x))];
    return f.length && t.push({ key: "block:" + c, order: ++e, tiles: f.map((x) => ({ key: x, html: Kn(x) })) }), t;
  }
  const Jf = (t, e) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + e + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + Gd + '</button><div class="settingsTitle">' + q(t.name) + "</div></div>";
  let _c = 0, Tc = null;
  const Lc = (t) => t === "weather" ? Na.wx : t.startsWith("room:") && R.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || R.querySelector(".tfAreas");
  function Dc(t) {
    var e, a;
    tt || (_c = dr().scrollTop, Tc = ((e = Lc(t)) == null ? void 0 : e.getBoundingClientRect().top) ?? null), tt = t, t.startsWith("room:") && (F = t.slice(5)), Ba(), dr().scrollTop = 0, (a = R.querySelector("[data-area-back]")) == null || a.focus({ preventScroll: !0 });
  }
  let cr = null;
  function Qf(t, e) {
    if (cr == null || cr(), e == null) return;
    const a = dr(), n = performance.now() + 1500, i = ["wheel", "touchstart", "pointerdown", "keydown"];
    let c = 0;
    const l = () => {
      cancelAnimationFrame(c), i.forEach((m) => window.removeEventListener(m, l, !0)), cr = null;
    }, f = () => {
      const m = t();
      if (m != null && m.isConnected) {
        const k = m.getBoundingClientRect().top - e;
        Math.abs(k) > 0.5 && (a.scrollTop += k);
      }
      performance.now() < n ? c = requestAnimationFrame(f) : l();
    };
    i.forEach((m) => window.addEventListener(m, l, { capture: !0, passive: !0 })), cr = l, f();
  }
  function Hs() {
    var a;
    const t = tt;
    tt = null, Ba(), dr().scrollTop = _c, Qf(() => Lc(t), Tc);
    const e = t.startsWith("room:") ? R.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || R.querySelector('.tfAreaPanel[data-area="' + CSS.escape(t.slice(5)) + '"]') : t === "weather" ? Na.wx.querySelector(".wbOpenPage") : R.querySelector('[data-k="sum:' + CSS.escape(t) + '"]');
    (a = (e == null ? void 0 : e.querySelector("[data-go]")) || e) == null || a.focus({ preventScroll: !0 });
  }
  const tu = (t) => t.wrap ? t.wrap(t.tiles.map((e) => e.html).join(""), t) : '<div class="tfBlock" data-tf data-k="' + q(t.key) + '" style="order:' + t.order + '"><div class="tfActions">' + t.tiles.map((e) => e.html).join("") + "</div></div>", Ec = (t) => t.map((e) => e.key + (e.tiles ? "(" + e.tiles.map((a) => a.key).join(",") + ")" : "")).join(";");
  function dr() {
    for (let t = g.parentElement || g.getRootNode().host; t; t = t.parentElement || t.getRootNode().host) {
      const e = getComputedStyle(t).overflowY;
      if ((e === "auto" || e === "scroll") && t.scrollHeight > t.clientHeight) return t;
    }
    return document.scrollingElement;
  }
  function Bc(t) {
    const e = dr(), a = (f) => {
      const m = f.getBoundingClientRect();
      return m.height && m.bottom > 0 && m.top < window.innerHeight;
    }, n = [...R.children, ...R.querySelectorAll(".tfDashTiles > *")].find((f) => !f.matches(".tfDashTiles") && a(f)), i = n == null ? void 0 : n.dataset.k, c = n == null ? void 0 : n.getBoundingClientRect().top;
    t();
    const l = n != null && n.isConnected ? n : i && R.querySelector('[data-k="' + CSS.escape(i) + '"]');
    l != null && l.isConnected && c != null && (e.scrollTop += l.getBoundingClientRect().top - c);
  }
  function Ba() {
    if (!w || !R) return;
    const t = Cc(), e = (i) => {
      var c;
      return (((c = i.closest("[data-k]")) == null ? void 0 : c.dataset.k) || "") + "|" + i.dataset.iconFor + "|" + (i.dataset.iconName || "");
    }, a = /* @__PURE__ */ new Map();
    R.querySelectorAll("[data-tf] [data-icon-for]").forEach((i) => {
      i.firstElementChild && (a.get(e(i)) || a.set(e(i), []).get(e(i))).push(i.firstElementChild);
    }), R.querySelectorAll("[data-tf]").forEach((i) => i.remove()), da.clear();
    const n = document.createElement("div");
    n.innerHTML = t.map((i) => i.tiles ? tu(i) : i.html).join(""), t.forEach((i) => i.tiles ? i.tiles.forEach((c) => da.set(c.key, c.html)) : da.set(i.key, i.html)), Cr = Ec(t), n.querySelectorAll("[data-icon-for]").forEach((i) => {
      var l;
      const c = !i.firstElementChild && ((l = a.get(e(i))) == null ? void 0 : l.shift());
      c && i.appendChild(c);
    }), R.append(...n.children), Lr(t.weather), Dr(), hs.disconnect(), Be(), Ia(R), js(R), ao(R), j(), Yc(), En(), Nc(), requestAnimationFrame(nt);
  }
  const Rc = (t) => {
    var a;
    const e = o.activeElement && t.contains(o.activeElement) ? o.activeElement : null;
    return e && { label: e.getAttribute("aria-label"), act: (a = e.dataset) == null ? void 0 : a.act };
  }, Os = (t, e) => {
    var a;
    e && ((a = e.label && t.querySelector('[aria-label="' + CSS.escape(e.label) + '"]') || e.act && t.querySelector('[data-act="' + CSS.escape(e.act) + '"]')) == null || a.focus({ preventScroll: !0 }));
  };
  function Ns(t, e) {
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
    const c = [...e.children];
    return [...t.children].forEach((l, f) => Ns(l, c[f])), t;
  }
  function eu(t, e) {
    const a = document.createElement("div");
    a.innerHTML = e;
    const n = Rc(t), i = Ns(t, a.firstElementChild);
    Ia(i), js(i), ao(i), Os(i, n);
  }
  function Ce() {
    !w || !R || Zt || Bc(au);
  }
  function au() {
    if (!R.querySelector("[data-tf]")) {
      Ba();
      return;
    }
    const t = Cc();
    if (Ec(t) !== Cr) {
      Ba();
      return;
    }
    const e = (a) => [...rt.keys()].some((n) => {
      const i = n.slice(n.indexOf("|") + 1);
      return a === i || a.endsWith(":" + i);
    });
    t.forEach((a) => (a.tiles || [a]).forEach((n) => {
      if (da.get(n.key) === n.html || e(n.key)) return;
      const i = R.querySelector('[data-k="' + CSS.escape(n.key) + '"]');
      i && (da.set(n.key, n.html), eu(i, n.html), n.key.startsWith("energy:") && Yc());
    })), En(), Nc(), Kr(), j(), me == null || me.update(), ge == null || ge.forEach((a) => a.update()), g.classList.contains("tfDash") && ei(), requestAnimationFrame(nt);
  }
  const Dn = {
    light: (t) => [["Brightness", t.brightness != null ? Math.round(t.brightness / 2.55) + "%" : null], ["Colour temperature", t.color_temp_kelvin ? Number(t.color_temp_kelvin).toLocaleString() + " K" : null], ["Colour mode", t.color_mode && Jt(t.color_mode)]],
    climate: (t) => [["Current temperature", Ve(t.current_temperature) + " °C"], ["Target", Ve(t.temperature) + " °C"], ["Action", Jt(t.hvac_action)]],
    cover: (t) => [["Position", t.current_position != null ? t.current_position + "% open" : null], ["Tilt", t.current_tilt_position != null ? t.current_tilt_position + "% open" : null]],
    humidifier: (t) => [["Current humidity", t.current_humidity + "%"], ["Target", t.humidity + "%"], ["Mode", Jt(t.mode)]],
    media_player: (t) => [["Title", t.media_title], ["Artist", t.media_artist], ["Volume", t.volume_level != null ? Math.round(t.volume_level * 100) + "%" : null], ["Source", t.source]],
    vacuum: (t) => [["Battery", t.battery_level + "%"], ["Fan speed", Jt(t.fan_speed)], ["Rooms", (t.rooms || []).join(", ") || null]],
    lock: (t) => [["Changed by", t.changed_by]],
    alarm_control_panel: (t) => [["Changed by", t.changed_by]],
    valve: () => [],
    plant: (t) => [["Moisture", t.moisture + "%"], ["Light", Number(t.brightness).toLocaleString() + " lx"], ["Temperature", Ve(t.temperature) + " °C"], ["Fertility", t.conductivity + " µS/cm"], ["Problems", t.problem === "none" ? "None" : Jt(t.problem)]],
    weather: (t) => [["Temperature", t.temperature != null ? t.temperature + " " + (t.temperature_unit || "°C") : null], ["Humidity", t.humidity != null ? t.humidity + "%" : null], ["Wind", t.wind_speed != null ? t.wind_speed + " " + (t.wind_speed_unit || "km/h") : null], ["Pressure", t.pressure != null ? t.pressure + " " + (t.pressure_unit || "hPa") : null]]
  }, ou = (t) => Pa(t) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function nu(t, e = {}, a = !1) {
    return '<div class="tfMoreList">' + t.map((n) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + q(n.name) + '</div><div class="tfMoreTiles' + (a ? " single" : "") + '">' + n.ids.map((i) => Bt(i, e)).join("") + "</div></div>").join("") + "</div>";
  }
  const At = document.createElement("div");
  At.className = "tfMoreBackdrop", At.hidden = !0, g.appendChild(At);
  const Ra = document.createElement("div");
  Ra.className = "tfMoreBackdrop tfMoreUnder", Ra.hidden = !0, g.insertBefore(Ra, At);
  const Is = (t, e) => {
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
    var i, c;
    if (!pr || t.touches.length > 1 || (c = (i = t.target).closest) != null && c.call(i, "input,textarea,select")) return;
    const e = t.touches[0], a = pr.x - e.clientX, n = pr.y - e.clientY;
    pr = { x: e.clientX, y: e.clientY }, Math.abs(n) >= Math.abs(a) && !Is(t.target, n) && t.preventDefault();
  }, { passive: !1 }), At.addEventListener("wheel", (t) => {
    var e, a;
    Math.abs(t.deltaX) > Math.abs(t.deltaY) && ((a = (e = t.target).closest) != null && a.call(e, "[data-more-pages]")) || Is(t.target, t.deltaY) || t.preventDefault();
  }, { passive: !1 });
  const ru = () => window.innerWidth <= 620;
  let Re = null;
  At.addEventListener("pointerdown", (t) => {
    const e = At.querySelector(".tfMorePair");
    !ru() || !e || !e.contains(t.target) || !t.isPrimary || At._closing || t.target.closest("input,textarea,select,.tfDacPad,[data-cover-art],.tfMoreSide") || (Re = { x: t.clientX, y: t.clientY, t: performance.now(), dy: 0, v: 0, pair: e, from: t.target, grab: t.target.matches(".tfMore") || !!t.target.closest(".tfMoreHead") });
  }, !0), At.addEventListener("pointermove", (t) => {
    if (!Re || !t.isPrimary) return;
    const e = t.clientY - Re.y, a = performance.now();
    if (!Re.on) {
      if (Math.abs(t.clientX - Re.x) > 8 || e < -8 || !Re.grab && Is(Re.from, -1)) {
        Re = null;
        return;
      }
      if (e < 8) return;
      Re.on = !0;
      try {
        At.setPointerCapture(t.pointerId);
      } catch {
      }
    }
    Re.v = (e - Re.dy) / Math.max(1, a - Re.t), Re.dy = e, Re.t = a, Re.pair.style.transform = "translateY(" + Math.max(0, e) + "px)";
  });
  const Pc = (t) => {
    if (!Re || !t.isPrimary) return;
    const e = Re;
    if (Re = null, !e.on) return;
    const a = (k) => {
      k.preventDefault(), k.stopImmediatePropagation();
    };
    window.addEventListener("click", a, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", a, { capture: !0 }), 300);
    const n = t.type === "pointerup" && (e.dy > 120 || e.v > 0.5), i = "translateY(" + Math.max(0, e.dy) + "px)";
    if (e.pair.style.transform = "", !n || We()) {
      n ? Zs() : e.pair.animate([{ transform: i }, { transform: "none" }], { duration: 320, easing: Se.spring });
      return;
    }
    const c = D;
    At._closing = !0, At.style.pointerEvents = "none", At.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220, easing: Se.exit, fill: "forwards" });
    const l = e.pair.animate([{ transform: i }, { transform: "translateY(calc(100% + 40px))" }], { duration: 220, easing: Se.exit, fill: "forwards" });
    let f = !1;
    const m = () => {
      f || (f = !0, At._closing = !1, At.style.pointerEvents = "", At.getAnimations().forEach((k) => k.cancel()), e.pair.getAnimations().forEach((k) => k.cancel()), D === c && Zs());
    };
    l.finished.then(m, m), setTimeout(m, 300);
  };
  At.addEventListener("pointerup", Pc), At.addEventListener("pointercancel", Pc);
  function Fs() {
    const t = At.querySelector(".tfMorePair"), e = At.querySelector(".tfMore");
    t == null || t.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - e.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", Fs, { passive: !0 }), w && Fn();
  let za = [];
  const iu = (t) => t === "favourites" || t.startsWith("summary:") || t.startsWith("group:");
  function su(t) {
    const e = (m, k = "") => '<div class="tfMoreHead">' + (D != null && D.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + zd + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + q(m) + "</div>" + k + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + Ud + "</button></div>", a = (m, k) => '<div class="tfMoreNow"><div class="tfMoreState">' + q(m) + "</div></div>", n = nu;
    if (t === "favourites") {
      const m = $(), k = new Set(m), M = [{ name: "Starred", ids: m }, { name: "Home", ids: qt.homeVacuums }, { name: "Security", ids: [...qt.security.alarms, ...qt.security.locks] }, ...qt.rooms.map((x) => ({ name: x.name, ids: [...x.actions, ...x.plugs] }))].map((x, _) => _ ? { ...x, ids: x.ids.filter((T) => !k.has(T)) } : x).filter((x) => x.ids.length);
      return [e("Favourites"), a(m.length ? m.length + " starred" : "None starred"), n(M, { star: !0 }, !0)];
    }
    const i = (m, { name: k = "", alert: M = !1, plain: x = !1 } = {}) => {
      const _ = x ? [] : m.filter((H) => Mr.includes(H.split(".")[0])), T = m.filter((H) => !_.includes(H)), L = (H) => H.startsWith("vacuum.") && jt(H).battery_level != null ? jt(H).battery_level + "%" : null;
      return '<div class="tfMoreGroup">' + (k ? '<div class="tfMoreGroupName">' + q(k) + "</div>" : "") + '<div class="tfMoreActions">' + _.map((H) => Kn(H, !0)).join("") + T.map((H) => Bt(H, { plain: x, alert: M, say: x ? L(H) : null })).join("") + "</div></div>";
    };
    if (t.startsWith("summary:")) {
      const m = Qo().find((_) => _.key === t.slice(8));
      if (!m) return null;
      const k = m.key === "light" ? (m.groups || []).flatMap((_) => _.ids) : [], M = k.some((_) => {
        var T;
        return ((T = y[_]) == null ? void 0 : T.state) === "on";
      }), x = k.length ? '<button class="primary" type="button" data-acts="' + To(k.map((_) => ["light", M ? "turn_off" : "turn_on", _])) + '">' + (M ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [e(m.name), '<div class="tfMoreNowRow">' + a(m.value) + x + "</div>", ...(m.groups || []).map((_) => i(_.ids, { name: _.name === m.name ? "" : _.name, alert: _.alert, plain: m.plain }))];
    }
    if (t.startsWith("group:")) {
      const [, m, k] = t.split(":"), M = qt.rooms.find((T) => T.id === m), x = M && Bo(M).find((T) => T.key === k);
      if (!x) return null;
      const _ = x.acts ? '<button class="primary" type="button" data-acts="' + To(x.acts) + '">' + (x.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [e(M.name + " " + x.label.toLowerCase()), '<div class="tfMoreNowRow">' + a(x.value) + _ + "</div>", i(Sn(M, k))];
    }
    const c = t.split(".")[0];
    y[t];
    const l = Mr.includes(c) ? ca(t) : Hc(t), f = (D == null ? void 0 : D.page) || 0;
    return [
      lu(t, l),
      '<div class="tfMorePages" data-more-pages><section class="tfMorePage" aria-label="Control">' + du(t) + (c === "plant" ? mu(t).join("") : "") + l.sections.filter(Boolean).join("") + '</section><section class="tfMorePage" aria-label="Info">' + fu(t) + "</section></div>",
      // the pages' icons in place of their dots (Matt, 12 Nov): Control's sliders and Info's (i), a small segmented pair
      '<div class="tfMoreDots tfMorePageIcons" role="tablist" aria-label="Pages">' + [["Control", b0], ["Info", rp]].map(([m, k], M) => '<button type="button" role="tab" aria-selected="' + (M === f) + '" aria-label="' + m + '" title="' + m + '" data-more-page="' + M + '"' + (M === f ? "" : ' tabindex="-1"') + ">" + k + "</button>").join("") + "</div>"
    ];
  }
  function lu(t, e, a) {
    var l, f, m, k, M;
    const n = (l = qt.areaOf) == null ? void 0 : l.call(qt, t), i = n && (((f = qt.rooms.find((x) => x.id === n)) == null ? void 0 : f.name) || ((M = (k = (m = d()) == null ? void 0 : m.areas) == null ? void 0 : k[n]) == null ? void 0 : M.name)) || "", c = e.button ? eo(t, e) : '<div class="tfIcon"' + fe(t, e.icon) + "></div>";
    return '<div class="tfMoreHead tfMoreTileHead' + (e.on ? " on" : "") + '"' + (e.tone ? ' data-tone="' + e.tone + '"' : "") + bn(t) + ">" + (D != null && D.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + zd + "</button>" : "") + c + '<div class="tfName"><span class="activityRowName" id="tfMoreTitle">' + q(kt(t)) + "</span>" + (i ? '<span class="activityRowMeta">' + q(i) + "</span>" : "") + '</div><button class="tfBack" type="button" data-more-close aria-label="Close">' + Ud + "</button></div>";
  }
  const cu = ["lock", "alarm_control_panel", "switch", "input_boolean", "fan", "valve", "media_player", "automation", "script", "scene", "button"];
  function Hc(t) {
    var i;
    const e = t.split(".")[0], a = ((i = y[t]) == null ? void 0 : i.state) === "on", n = Ml.includes(e) ? { act: Qt(e, "toggle", t), label: "Turn " + kt(t) + (a ? " off" : " on") } : e === "scene" || e === "script" ? { act: Qt(e, "turn_on", t), label: "Run " + kt(t) } : null;
    return { sections: [], on: a, button: n, icon: sa(t) };
  }
  function du(t) {
    const e = t.split(".")[0];
    if (cu.includes(e) || e === "light" && !Mn(t)) {
      const i = Mr.includes(e) ? ca(t) : Hc(t);
      return i != null && i.button ? '<div class="tfMoreSpace tfMoreSwitch' + (i.on ? " on" : "") + '"' + (i.tone ? ' data-tone="' + i.tone + '"' : "") + bn(t) + ">" + eo(t, i) + "</div>" : "";
    }
    if (e === "cover") return '<div class="tfMoreSpace tfMoreFill"><div data-cover-art="' + q(t) + '"></div></div>';
    if (e === "light" && Mn(t)) return '<div class="tfMoreSpace tfMoreFill"><div class="tfDacPad" data-dac="more:' + q(t) + '"></div></div>';
    const { big: a, lines: n } = pu(t);
    return '<div class="tfMoreSpace"><div class="tfMoreBig' + (qa("pos", t) != null ? " live" : "") + '"><span class="tfMoreNum">' + q(a[0]) + "</span>" + (a[1] ? '<span class="tfMoreUnit">' + q(a[1]) + "</span>" : "") + '</div><div class="tfMoreFacts">' + n.map(([i, c]) => '<div class="tfMoreFact"><span>' + q(i) + "</span><span>" + q(c) + "</span></div>").join("") + "</div></div>";
  }
  function pu(t) {
    var M;
    const e = y[t], a = jt(t), n = t.split(".")[0], i = (((M = Dn[n]) == null ? void 0 : M.call(Dn, a)) || []).filter(([, x]) => x != null && x !== ""), c = (x) => {
      const _ = i.findIndex(([T]) => T === x);
      return _ < 0 ? null : i.splice(_, 1)[0][1];
    }, l = (x) => {
      const _ = String(x).match(/^(-?[\d.,]+)\s*(.*)$/);
      return _ ? [_[1], _[2]] : [String(x), ""];
    }, f = () => [Jt(String(e.state).replace(/_/g, " ")), ""];
    let m;
    n === "light" ? (c("Brightness"), m = e.state === "on" && ze(t) ? [String($a(e)), "%"] : f()) : n === "climate" ? m = l(c("Current temperature") || Ve(a.current_temperature) + " °C") : n === "cover" ? (c("Position"), m = a.current_position != null ? [String(ia(t)), "%"] : f()) : n === "humidifier" ? m = l(c("Current humidity") || e.state) : n === "vacuum" ? m = l(c("Battery") || e.state) : n === "plant" ? m = l(c("Moisture") || e.state) : ["media_player", "lock", "alarm_control_panel", "valve"].includes(n) ? m = f() : m = l(e.state + (a.unit_of_measurement ? " " + a.unit_of_measurement : ""));
    const k = i.length ? i.slice(0, 4) : [["State", De(t)]];
    return { big: m, lines: k };
  }
  function fu(t) {
    var k, M, x, _, T, L, H;
    const e = y[t], a = d(), n = (k = a == null ? void 0 : a.entities) == null ? void 0 : k[t], i = n != null && n.device_id ? (M = a == null ? void 0 : a.devices) == null ? void 0 : M[n.device_id] : null, c = '<div class="tfMoreGraph"><div class="tfMoreGroupName">Last 24 hours</div><svg class="tfGraph tfDay" data-day="' + q(t) + '" role="img" aria-label="' + q(kt(t)) + ', last 24 hours"></svg></div>', l = (x = qt.areaOf) == null ? void 0 : x.call(qt, t), f = l && (((_ = qt.rooms.find((U) => U.id === l)) == null ? void 0 : _.name) || ((L = (T = a == null ? void 0 : a.areas) == null ? void 0 : T[l]) == null ? void 0 : L.name)) || "", m = [
      ...((H = Dn[t.split(".")[0]]) == null ? void 0 : H.call(Dn, jt(t))) || [],
      ["Changed", e.last_changed && Co(Date.parse(e.last_changed))],
      ["Area", f],
      ["Device", i && (i.name_by_user || i.name)],
      ["Integration", (n == null ? void 0 : n.platform) && Jt(n.platform.replace(/_/g, " "))],
      ["Entity", t]
    ].filter(([, U]) => U != null && U !== "");
    return c + '<div class="tfMoreRows">' + m.map(([U, B]) => '<div class="tfMoreRow"><span>' + q(U) + "</span><span>" + q(B) + "</span></div>").join("") + "</div>" + ou(t) + (i ? '<button class="tfDetailsBtn tfMoreLink" type="button" data-path="/config/devices/device/' + q(n.device_id) + '"><span>Device page</span>' + ip + "</button>" : "");
  }
  const uu = () => "";
  let qs = "";
  function Ws(t) {
    var e;
    D && (D.details = t, En(), (e = At.querySelector(t ? "[data-details-close]" : "[data-details]")) == null || e.focus({ preventScroll: !0 }));
  }
  const di = (t) => {
    const e = y[t], a = ia(t), n = Uo(t);
    return { kind: kl(e), name: kt(t), text: De(t), pos: a, target: Math.abs(n - a) > 0.5 ? n : null, moving: e.state === "opening" || e.state === "closing", tilt: Or(t) ?? 100, canSet: Ae(t, Jd) };
  };
  function js(t) {
    t.querySelectorAll("[data-cover-art]").forEach((e) => {
      const a = e.dataset.coverArt, n = e.dataset.artKey || "more:" + a;
      let i = Nt.get(n);
      i || (i = e0({ onMove: (c) => fr(a, c), onSet: (c) => {
        fr(a, c), ur("pos", a);
      } }), i.coverId = a, Nt.set(n, i)), e.replaceWith(i.el), i.update(di(a));
    });
  }
  const Oc = (t) => [...Nt.values()].filter((e) => e.coverId === t), Vs = () => Nt.forEach((t) => {
    y[t.coverId] && t.update(di(t.coverId));
  }), Nc = () => {
    Nt.forEach((t, e) => {
      t.el.isConnected || (t.destroy(), Nt.delete(e));
    }), Vs();
  };
  function En() {
    var c, l;
    if (!D || !(iu(D.id) || y[D.id])) {
      At.hidden = !0;
      return;
    }
    if ([...rt.keys()].some((f) => f.endsWith("|" + D.id))) {
      Vs();
      return;
    }
    const t = su(D.id), e = At.querySelector(".tfMore");
    if (!t) {
      fi();
      return;
    }
    const a = Rc(At), n = uu(D.id), i = D.frame ? D.frame.wide : D.id.startsWith("summary:") || D.id.startsWith("group:");
    if (At.hidden || !e || t.length !== za.length || e.classList.contains("wide") !== i) {
      const f = Us ? D.scroll || 0 : !At.hidden && e ? e.scrollTop : 0;
      if (At.innerHTML = '<div class="tfMorePair' + (At.hidden ? "" : " still") + '" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (i ? " wide" : "") + '"' + (D.frame ? ' style="height:' + D.frame.h + 'px"' : "") + ' tabindex="-1">' + t.join("") + "</section></div>", qs = n, At.classList.toggle("wide", i), At.hidden = !1, Fs(), js(At), ao(At), Ia(At), At.querySelectorAll("[data-day]").forEach((m) => zc(m.dataset.day, m, D.at)), Wc(At), f && (At.querySelector(".tfMore").scrollTop = f), Ic(), Os(At, a), !At.contains(o.activeElement)) {
        const m = At.querySelector("[data-more-close]");
        (c = m != null && m.offsetParent ? m : At.querySelector(".tfMore")) == null || c.focus({ preventScroll: !0 });
      }
    } else {
      if (t.forEach((f, m) => {
        var x, _;
        if (f === za[m] || f.includes("data-cover-art") || e.children[m].contains((_ = (x = o.activeElement) == null ? void 0 : x.matches) != null && _.call(x, "input,select") ? o.activeElement : null) || [...rt.keys()].some((T) => e.children[m].querySelector('[data-drag="' + CSS.escape(T) + '"]'))) return;
        const k = document.createElement("div");
        k.innerHTML = f;
        const M = Ns(e.children[m], k.firstElementChild);
        Ia(M), Wc(M), ao(M);
      }), n !== qs) {
        const f = At.querySelector(".tfMoreSideBody");
        f && (f.innerHTML = n), qs = n;
      }
      e.querySelectorAll("[data-day]").forEach((f) => {
        f.innerHTML || zc(f.dataset.day, f, D.at);
      }), Ic(), At.contains(o.activeElement) || Os(At, a);
    }
    (l = At.querySelector(".tfMorePair")) == null || l.classList.toggle("details", !!(D.details && n)), za = t, Vs();
  }
  function Ic() {
    const t = At.querySelector("[data-more-pages]");
    !t || !D || (t.scrollTo({ left: (D.page || 0) * t.clientWidth, behavior: "instant" }), Gs(), zs(t));
  }
  function zs(t) {
    const e = t.children[(D == null ? void 0 : D.page) || 0];
    e && (t.style.height = e.scrollHeight + "px");
  }
  function Gs() {
    const t = (D == null ? void 0 : D.page) || 0;
    At.querySelectorAll("[data-more-page]").forEach((e) => {
      const a = Number(e.dataset.morePage) === t;
      e.setAttribute("aria-selected", String(a)), e.tabIndex = a ? 0 : -1;
    });
  }
  function Fc(t, e) {
    var n, i;
    const a = At.querySelector("[data-more-pages]");
    !a || !D || (D.page = Math.max(0, Math.min(1, t)), a.scrollTo({ left: D.page * a.clientWidth, behavior: (n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" }), Gs(), zs(a), (i = At.querySelector('[data-more-page="' + D.page + '"]')) == null || i.focus({ preventScroll: !0 }));
  }
  let qc = 0;
  At.addEventListener("scroll", (t) => {
    var a;
    const e = t.target;
    !((a = e.matches) != null && a.call(e, "[data-more-pages]")) || !D || (clearTimeout(qc), qc = setTimeout(() => {
      if (!D) return;
      const n = Math.round(e.scrollLeft / Math.max(1, e.clientWidth));
      n !== (D.page || 0) && (D.page = n, Gs(), zs(e));
    }, 80));
  }, !0), setInterval(() => {
    D && En();
  }, 15 * 1e3);
  function pi(t, e) {
    var i, c;
    const a = !!(D && e && At.contains(e)), n = a && At.querySelector(".tfMore");
    if (a && (D.scroll = n.scrollTop), a && !D.under) {
      const l = At.querySelector(".tfMorePair"), f = { more: D, parts: za, opener: e };
      l.classList.add("still"), l.style.transform = "", l.inert = !0, Ra.innerHTML = "", Ra.appendChild(l), Ra.classList.toggle("wide", At.classList.contains("wide")), Ra.hidden = !1, At.hidden = !0, At.innerHTML = "", D = { id: t, opener: e, back: null, frame: null, under: f, at: Number((i = e == null ? void 0 : e.dataset) == null ? void 0 : i.at) || null }, Ys();
      return;
    }
    D = { id: t, opener: a ? D.opener : e, back: a ? D : null, frame: a ? D.frame || { wide: n.classList.contains("wide"), h: n.offsetHeight } : null, under: a ? D.under : null, at: Number((c = e == null ? void 0 : e.dataset) == null ? void 0 : c.at) || null }, Ys();
  }
  let Us = !1;
  function Ys() {
    za = [], Us = !At.hidden, Nt.forEach((t, e) => {
      e !== D.id && At.contains(t.el) && (t.destroy(), Nt.delete(e));
    }), En(), Us = !1;
  }
  function fi() {
    if (!D) return;
    const t = D;
    qh(At, () => {
      D === t && Zs();
    });
  }
  function Zs() {
    var n, i, c, l, f, m, k, M;
    const t = D == null ? void 0 : D.opener, e = D == null ? void 0 : D.under;
    D = null, Nt.forEach((x, _) => {
      At.contains(x.el) && (x.destroy(), Nt.delete(_));
    }), Ne.forEach((x, _) => {
      _.startsWith("more:") && Ne.delete(_);
    }), At.hidden = !0, At.innerHTML = "";
    const a = { preventScroll: !0 };
    if (e) {
      const x = Ra.firstElementChild;
      D = e.more, za = e.parts, x && (x.inert = !1, At.appendChild(x)), At.classList.toggle("wide", Ra.classList.contains("wide")), Ra.hidden = !0, Ra.innerHTML = "", At.hidden = !1;
      const _ = At.querySelector(".tfMore");
      _ && (_.scrollTop = D.scroll || 0), En(), (i = (n = e.opener) != null && n.isConnected ? e.opener : At.querySelector("[data-more-close]")) == null || i.focus(a);
      return;
    }
    t != null && t.isConnected ? t.focus(a) : (c = t == null ? void 0 : t.dataset) != null && c.more ? (l = R.querySelector('[data-more="' + CSS.escape(t.dataset.more) + '"]')) == null || l.focus(a) : (f = t == null ? void 0 : t.dataset) != null && f.summary ? (m = R.querySelector('[data-summary="' + CSS.escape(t.dataset.summary) + '"]')) == null || m.focus(a) : (k = t == null ? void 0 : t.hasAttribute) != null && k.call(t, "data-favs-edit") && ((M = R.querySelector("[data-favs-edit]")) == null || M.focus(a));
  }
  const hu = { moisture: "moisture", light: "light", brightness: "light", temperature: "temperature", fertility: "fertility", conductivity: "fertility" };
  function mu(t) {
    const e = String(jt(t).problem || ""), a = "sensor." + t.split(".")[1] + "_";
    return e === "none" ? [] : e.split(",").map((n) => n.trim().split(" ")).map(([n, i]) => {
      const c = hu[n], l = a + c;
      if (!c || !y[l] || !fn[c]) return "";
      const f = jt(l).unit_of_measurement || "", [m, k] = fn[c], M = i === "low";
      return '<div class="tfMoreGroup tfPlantProblem"><div class="tfMoreGroupName">' + q(kt(l)) + '</div><svg class="tfGraph tfPlantGraph" data-plant-graph="' + q(l) + '" data-guide="' + (M ? m : k) + '" data-guide-word="' + q("Wants " + (M ? "" : "up to ") + (M ? m : k).toLocaleString() + (f === "%" ? "%" : f ? " " + f : "") + (M ? " or more" : "")) + '" role="img" aria-label="' + q(kt(l)) + ', last 24 hours"></svg></div>';
    }).filter(Boolean);
  }
  const Wc = (t) => t.querySelectorAll("[data-plant-graph]").forEach((e) => Uc(e.dataset.plantGraph, e, { guide: Number(e.dataset.guide), guideWord: e.dataset.guideWord }).then(() => Wl(e)));
  function Ks(t, e, a, n = {}) {
    const i = e.map((U) => U[1]).concat(n.guide != null ? [n.guide] : []), c = n.zero ? 0 : Math.min(...i), l = Math.max(...i), f = Math.max(120, t.clientWidth || 260), m = Math.max(60, t.clientHeight || 130), k = 8, M = m - 20, x = Date.now() - 24 * 3600 * 1e3, _ = 24 * 3600 * 1e3, T = (U) => Math.max(0, Math.min(f, (U - x) / _ * f)), L = (U) => l === c ? (k + M) / 2 : M - (U - c) / (l - c) * (M - k);
    let H = "M" + T(e[0][0]).toFixed(1) + " " + L(e[0][1]).toFixed(1);
    if (e.length > 2) H = _p(e.map((U) => [T(U[0]), L(U[1])]));
    else for (let U = 1; U < e.length; U++) H += n.smooth ? "L" + T(e[U][0]).toFixed(1) + " " + L(e[U][1]).toFixed(1) : "H" + T(e[U][0]).toFixed(1) + "V" + L(e[U][1]).toFixed(1);
    t.setAttribute("viewBox", "0 0 " + f + " " + m), t.setAttribute("aria-label", a), t.innerHTML = Tp(f, k, M) + '<path d="' + H + "V" + M + "H" + T(e[0][0]).toFixed(1) + 'Z" fill="' + (n.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + H + '" fill="none" stroke="' + (n.colour || "var(--primary)") + '" stroke-width="' + Me.graphs.weight + '" stroke-linejoin="round" stroke-linecap="round"/><text x="0" y="' + (m - 4) + '">24 h ago</text><text x="' + f + '" y="' + (m - 4) + '" text-anchor="end">Now</text>' + (n.guide != null ? '<line class="tfGuide" x1="0" x2="' + f + '" y1="' + L(n.guide).toFixed(1) + '" y2="' + L(n.guide).toFixed(1) + '"/><text class="tfGuideWord" x="' + f + '" y="' + (L(n.guide) < 20 ? L(n.guide) + 14 : L(n.guide) - 5).toFixed(1) + '" text-anchor="end">' + q(n.guideWord || "") + "</text>" : "");
  }
  const jc = { lock: ["unlocked", "open", "opening"], cover: ["open", "opening", "closing"], valve: ["open", "opening", "closing"], vacuum: ["cleaning", "returning"] }, gu = (t, e) => {
    const a = t.split(".")[0];
    return jc[a] ? jc[a].includes(e) : a === "alarm_control_panel" || a === "climate" || a === "media_player" ? !["off", "standby", "disarmed", "unavailable", "unknown"].includes(e) : e === "on";
  }, bu = (t) => {
    const e = t.split(".")[0], a = jt(t).device_class;
    return e === "binary_sensor" ? { moisture: "Wet", smoke: "Smoke", gas: "Gas", carbon_monoxide: "Carbon monoxide", safety: "Unsafe" }[a] || (Ei.includes(a) ? "Open" : "On") : { lock: "Unlocked", cover: "Open", valve: "Open", vacuum: "Cleaning", alarm_control_panel: "Armed" }[e] || "On";
  }, Vc = /* @__PURE__ */ new Map();
  let wu = 0;
  async function vu(t) {
    var i;
    let e = Vc.get(t);
    if (!e || Date.now() - e.at > 60 * 1e3) {
      let c = [];
      if (Pa(t) && Number.isFinite(Number((i = y[t]) == null ? void 0 : i.state))) c = Gc(t).map(([l, f]) => [l, String(f)]);
      else try {
        const l = await C({ type: "history/history_during_period", start_time: new Date(Date.now() - 864e5).toISOString(), entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        c = ((l == null ? void 0 : l[t]) || []).map((f) => [f.lu != null ? f.lu * 1e3 : Date.parse(f.last_updated || f.last_changed), String(f.s ?? f.state)]).filter(([f]) => Number.isFinite(f));
      } catch {
      }
      c.length || (c = (Po || []).filter((l) => l.entity_id === t).map((l) => [l.when * 1e3, String(l.state)])), e = { at: Date.now(), pts: c }, Vc.set(t, e);
    }
    const a = y[t], n = e.pts.slice().sort((c, l) => c[0] - l[0]);
    return a && (!n.length || n[n.length - 1][1] !== a.state) && n.push([Date.parse(a.last_changed) || Date.now(), a.state]), n;
  }
  async function zc(t, e, a) {
    const n = await vu(t);
    if (!e.isConnected) return;
    const i = n.map(([E, yt]) => [E, Number(yt)]);
    if (n.length > 1 && i.every(([, E]) => Number.isFinite(E))) {
      Ks(e, i, kt(t) + ", last 24 hours");
      return;
    }
    const c = Date.now(), l = c - 864e5, f = Math.max(200, e.clientWidth || 360), m = 62, k = (E) => Math.max(0, Math.min(f, (E - l) / 864e5 * f)), M = [];
    let x = null;
    n.forEach(([E, yt]) => {
      const zt = gu(t, yt);
      zt && x == null ? x = Math.max(E, l) : !zt && x != null && (M.push([x, Math.max(E, l)]), x = null);
    }), x != null && M.push([x, c]);
    const _ = es(t) ? "var(--danger)" : t.startsWith("light.") ? "#ffaa00" : "var(--primary)", T = bu(t), L = "tfDayClip" + ++wu, H = M.map(([E, yt]) => T + (yt >= c - 1e3 && E <= l + 1e3 ? " all day" : yt >= c - 1e3 ? " since " + Aa(E) : E <= l + 1e3 ? " until " + Aa(yt) : " " + Aa(E) + "–" + Aa(yt)));
    let U = "", B = -1 / 0;
    M.forEach(([E], yt) => {
      const zt = H[yt].length * 5.4, Ht = Math.min(k(E), f - zt);
      Ht < B + 8 || (U += '<text x="' + Ht.toFixed(1) + '" y="10">' + q(H[yt]) + "</text>", B = Ht + zt);
    });
    let Z = '<text x="' + f + '" y="' + (m - 2) + '" text-anchor="end">Now</text>';
    [0, 6, 12, 18].forEach((E) => {
      let yt = new Date(c).setHours(E, 0, 0, 0);
      yt > c && (yt -= 864e5), k(yt) > 8 && k(yt) < f - 34 && (Z += '<text x="' + k(yt).toFixed(1) + '" y="' + (m - 2) + '" text-anchor="middle">' + String(E).padStart(2, "0") + "</text>");
    }), e.setAttribute("viewBox", "0 0 " + f + " " + m), e.setAttribute("aria-label", kt(t) + ", last 24 hours: " + (H.length ? H.join(", ") : "no changes")), e.innerHTML = '<clipPath id="' + L + '"><rect x="0" y="18" width="' + f + '" height="26" rx="8"/></clipPath>' + U + '<rect x="0" y="18" width="' + f + '" height="26" rx="8" fill="var(--text)" fill-opacity=".1"/><g clip-path="url(#' + L + ')">' + M.map(([E, yt]) => '<rect x="' + k(E).toFixed(1) + '" y="18" width="' + Math.max(2, k(yt) - k(E)).toFixed(1) + '" height="26" fill="' + _ + '"/>').join("") + "</g>" + (a && a >= l ? '<line x1="' + k(a).toFixed(1) + '" x2="' + k(a).toFixed(1) + '" y1="13" y2="49" stroke="var(--text)" stroke-width="2" stroke-linecap="round"/>' : "") + Z;
  }
  function Gc(t) {
    var n;
    const e = Number((n = y[t]) == null ? void 0 : n.state), a = Date.now();
    if (jt(t).state_class === "total_increasing") {
      const i = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), c = Math.max(1, a - i);
      return [...Array(49)].map((l, f) => i + c * f / 48).map((l) => [l, Math.round(e * Math.pow((l - i) / c, 1.3) * 100) / 100]);
    }
    if (Pa(t) && t.endsWith("_moisture")) return [...Array(48)].map((i, c) => [a - (48 - c) * 30 * 60 * 1e3, Math.round((e + 22 * Math.pow(1 - c / 48, 1.2)) * 10) / 10]);
    if (Pa(t) && t.endsWith("_light")) {
      const i = (l) => {
        const f = new Date(l).getHours() + new Date(l).getMinutes() / 60;
        return Math.max(0, Math.sin((f - 6) / 14 * Math.PI));
      }, c = (l) => 0.8 + 0.2 * i(l);
      return [...Array(48)].map((l, f) => a - (48 - f) * 30 * 60 * 1e3).map((l) => [l, Math.round(e * c(l) / c(a))]);
    }
    return [...Array(48)].map((i, c) => [a - (48 - c) * 30 * 60 * 1e3, Math.round(e * (0.96 + 0.04 * Math.sin(c / 6)) * 10) / 10]);
  }
  async function Uc(t, e, a = {}) {
    var L, H;
    let n = dt.get(t);
    if (t.endsWith("_solar_power")) n = { at: Date.now(), points: nd() };
    else if (Pa(t)) n = { at: Date.now(), points: Gc(t) };
    else if (!n || Date.now() - n.at > 5 * 60 * 1e3) {
      try {
        const U = new Date(Date.now() - 864e5).toISOString(), B = await C({ type: "history/history_during_period", start_time: U, entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), Z = ((B == null ? void 0 : B[t]) || []).map((E) => [E.lu != null ? E.lu * 1e3 : Date.parse(E.last_updated || E.last_changed), Number(E.s ?? E.state)]).filter(([E, yt]) => Number.isFinite(E) && Number.isFinite(yt));
        n = { at: Date.now(), points: Z };
      } catch {
        n = { at: Date.now(), points: [] };
      }
      dt.set(t, n);
    }
    const i = e || R.querySelector('[data-graph="' + CSS.escape(t) + '"]');
    if (!i) return;
    const c = y[t], l = ((L = c == null ? void 0 : c.attributes) == null ? void 0 : L.unit_of_measurement) || "", f = n.points.slice(), m = Number(c == null ? void 0 : c.state);
    if (Number.isFinite(m) && !t.endsWith("_solar_power") && f.push([Date.now(), m]), f.length < 2) {
      i.setAttribute("aria-label", kt(t) + ": no history for the last 24 hours"), i.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const k = f.map((U) => U[1]), M = Math.min(...k), x = Math.max(...k), _ = (U) => U.toLocaleString(void 0, { maximumFractionDigits: Math.abs(U) >= 100 ? 0 : 1 }), T = ((H = c == null ? void 0 : c.attributes) == null ? void 0 : H.state_class) === "total_increasing";
    Ks(i, f, kt(t) + ", last 24 hours: " + (T ? "+" + _(k[k.length - 1] - k[0]) : M === x ? _(M) : _(M) + " to " + _(x)) + (l ? " " + l : ""), { smooth: t.endsWith("_solar_power"), zero: t.endsWith("_solar_power"), ...a });
  }
  function Yc() {
    const t = R == null ? void 0 : R.querySelector("[data-solar]");
    if (!t) return;
    const e = nd();
    Ks(t, e, "Solar, last 24 hours: up to " + Ve(Math.max(...e.map((a) => a[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function yu(t, e) {
    const a = e.entity_id, n = xt.get(a) || {}, i = { open_cover: 100, close_cover: 0, set_cover_position: e.position, toggle: ia(a) > 0 ? 0 : 100 }[t], c = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: e.tilt_position }[t];
    i != null && (n.pos = i), c != null && (n.tilt = c), t === "stop_cover" && (delete n.pos, delete n.tilt), t === "stop_cover_tilt" && delete n.tilt, n.at = Date.now(), xt.set(a, n);
  }
  function Zc(t, e, a) {
    var i;
    const n = a == null ? void 0 : a.entity_id;
    return t !== "light" || typeof n != "string" || !ta[n] || !ze(n) || a.brightness_pct != null || a.brightness != null ? [e, a] : e !== "turn_on" && !(e === "toggle" && ((i = y[n]) == null ? void 0 : i.state) !== "on") ? [e, a] : ["turn_on", { ...a, brightness_pct: ta[n] }];
  }
  function ui(t, e, a, n) {
    let i = { entity_id: a, ...n || {} };
    return [e, i] = Zc(t, e, i), t === "cover" && yu(e, i), Oa[a] = (Oa[a] || 0) + 1, Ua.set(ap, JSON.stringify(Oa)), _r.call(t, e, i) ? Promise.resolve() : Promise.resolve(O(t, e, i));
  }
  function Xs(t) {
    const [e, a, n, i] = t.split("|");
    ui(e, a, n, i ? JSON.parse(i) : null).catch(() => {
    });
  }
  function fr(t, e) {
    rt.set("pos|" + t, e), da.delete(t), za = za.map(() => ""), [R, At].forEach((n) => n.querySelectorAll('[data-blocks="' + CSS.escape(t) + '"]').forEach((i) => $o(i, e)));
    const a = R.querySelector('.tfAction[data-k="' + CSS.escape(t) + '"] .tfName .activityRowMeta');
    if (a && (a.textContent = Math.round(e) + "%"), (D == null ? void 0 : D.id) === t) {
      const n = At.querySelector(".tfMoreState"), i = At.querySelector(".tfMoreSub");
      n && (n.textContent = Math.round(e) + "%", n.classList.add("live")), i && (i.textContent = "Currently " + ia(t) + "%");
    }
    Oc(t).forEach((n) => n.update(di(t)));
  }
  const xu = (t, e) => {
    const a = t.shiftKey ? 10 : 1, n = { ArrowUp: e + a, ArrowRight: e + a, ArrowDown: e - a, ArrowLeft: e - a, PageUp: e + 25, PageDown: e - 25, Home: 0, End: 100 }[t.key];
    return n == null ? null : Math.max(0, Math.min(100, Math.round(n)));
  };
  function ku(t, e) {
    var H;
    const a = t.dataset.blocks;
    (H = t.setPointerCapture) == null || H.call(t, e.pointerId);
    const n = (U) => {
      const B = t.getBoundingClientRect();
      return Math.max(0, Math.min(100, (U.clientX - B.left) / B.width * 100));
    }, i = n(e), c = e.clientX;
    let l = !1, f = Uo(a), m = i, k = 0;
    const M = () => {
      f = Math.abs(m - f) < 0.2 ? m : f + (m - f) * 0.14, fr(a, f), k = requestAnimationFrame(M);
    }, x = () => {
      l || (l = !0, t.classList.add("fine"), k = requestAnimationFrame(M));
    }, _ = setTimeout(x, 350), T = (U) => {
      m = n(U), Math.abs(U.clientX - c) > 6 && (clearTimeout(_), x());
    }, L = () => {
      clearTimeout(_), cancelAnimationFrame(k), t.removeEventListener("pointermove", T), t.removeEventListener("pointerup", L), t.removeEventListener("pointercancel", L), t.classList.remove("fine"), fr(a, l ? Math.round(f) : (Math.min(3, Math.floor(i / 25)) + 1) * 25), ur("pos", a);
    };
    t.addEventListener("pointermove", T), t.addEventListener("pointerup", L), t.addEventListener("pointercancel", L);
  }
  function Kc(t) {
    var e;
    F = t.dataset.area, R.querySelectorAll(".tfAreaPanel").forEach((a) => {
      var i;
      const n = a === t;
      a.classList.toggle("active", n), a.setAttribute("aria-expanded", String(n)), (i = a.querySelector(".panelExpanded")) == null || i.toggleAttribute("inert", !n);
    }), da.set("areas", A(((e = R.querySelector('[data-k="areas"]')) == null ? void 0 : e.style.order) || 1));
  }
  const $s = {
    bright: { value: (t, e) => Math.round(e * 100), text: (t, e) => e ? e + "%" : "Off", send: (t, e) => e > 0 ? ["light", "turn_on", { brightness_pct: e }] : ["light", "turn_off", {}] },
    ct: { value: (t, e) => {
      const [a, n] = wn(t);
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
  function hi(t, e, a, n) {
    var m;
    const i = $s[e].value(a, n);
    rt.set(e + "|" + a, i);
    const c = Math.round(n * 100) + "%", l = t.querySelector("i");
    if (e === "tilt") {
      l.style.width = "calc((100% - 8px) * " + n + ")";
      const [k, M] = t.querySelectorAll("span");
      k.classList.toggle("lit", n > 0.08), M.classList.toggle("lit", n > 0.92), da.delete(a), za = za.map(() => ""), Oc(a).forEach((x) => x.update(di(a)));
    } else if (l) l.style.width = c;
    else {
      let k = t.querySelector("b");
      k || (k = document.createElement("b"), t.appendChild(k)), k.style.left = c;
    }
    t.setAttribute("aria-valuenow", String(Math.round(n * 100)));
    const f = (m = t.closest(".tfAction") || t.closest(".tfMore")) == null ? void 0 : m.querySelector(".tfName .activityRowMeta, .tfMoreState");
    f && (f.textContent = $s[e].text(a, i));
  }
  function ur(t, e) {
    const a = rt.get(t + "|" + e), [n, i, c] = $s[t].send(e, a), l = () => setTimeout(() => {
      rt.delete(t + "|" + e), Ce();
    }, 1500);
    ui(n, i, e, c).then(l, l);
  }
  function Xc(t) {
    t.addEventListener("click", (e) => {
      var n;
      const a = e.target.closest("[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-fav-hide],[data-energy-pick],[data-more-page],[data-path],.tfAreaPanel");
      if (Ue && !e.target.closest(".tfBoardMenu,[data-board-more]") && ja(), !(!a || !t.contains(a) || a.disabled))
        if (a.dataset.boardMore)
          (Ue == null ? void 0 : Ue.key) === a.dataset.boardMore ? ja(!0) : Ef(a.dataset.boardMore, a);
        else if (a.dataset.boardAct) Bf(Ue.key, a.dataset.boardAct);
        else if (a.dataset.boardShow) ws(a.dataset.boardShow);
        else if (a.dataset.favHide) wc(a.dataset.favHide, !1);
        else if (a.dataset.energyPick) Il(a.dataset.energyPick);
        else if (a.dataset.act) Xs(a.dataset.act);
        else if (a.hasAttribute("data-details")) Ws(!(D != null && D.details));
        else if (a.hasAttribute("data-details-close")) Ws(!1);
        else if (a.dataset.summary) Wa(a.dataset.summary, a);
        else if (a.dataset.star) tr(a.dataset.star);
        else if (a.hasAttribute("data-more-back")) {
          const i = D.id;
          D = D.back, Ys(), (n = At.querySelector('.tfMore [data-more="' + CSS.escape(i) + '"]')) == null || n.focus({ preventScroll: !0 });
        } else a.hasAttribute("data-favs-edit") ? pi("favourites", a) : a.dataset.acts ? JSON.parse(a.dataset.acts).forEach(([i, c, l, f]) => ui(i, c, l, f).catch(() => {
        })) : a.dataset.more ? pi(a.dataset.more, a) : a.hasAttribute("data-more-close") ? fi() : a.dataset.morePage ? Fc(Number(a.dataset.morePage)) : a.dataset.path ? Ut(a.dataset.path) : a.dataset.go ? Dc("room:" + a.dataset.go) : a.hasAttribute("data-area-back") ? Hs() : a.classList.contains("tfAreaPanel") && !a.classList.contains("active") && Kc(a);
    }), t.addEventListener("keydown", (e) => {
      var n, i, c, l, f, m, k;
      const a = e.target;
      if ((n = a.dataset) != null && n.more && a.tagName !== "BUTTON" && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), pi(a.dataset.more, a)), (i = a.dataset) != null && i.energyPick && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), Il(a.dataset.energyPick)), (c = a.classList) != null && c.contains("tfAreaPanel") && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), Kc(a)), (l = a.dataset) != null && l.summary && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), Wa(a.dataset.summary, a)), e.key === "Escape" && Ue && t === R) {
        e.preventDefault(), ja(!0);
        return;
      }
      if (e.key === "Escape" && ea && t === R) {
        e.preventDefault(), bs(!1), (f = p("dashEditNav")) == null || f.focus();
        return;
      }
      if (e.key === "Escape" && tt && t === R && (e.preventDefault(), Hs()), (m = a.dataset) != null && m.blocks) {
        const M = a.dataset.blocks, x = xu(e, Math.round(Uo(M)));
        if (x == null) return;
        e.preventDefault(), fr(M, x), clearTimeout(re.get(M)), re.set(M, setTimeout(() => ur("pos", M), 500));
        return;
      }
      if ((k = a.dataset) != null && k.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
        e.preventDefault();
        const [M, x] = a.dataset.drag.split("|"), _ = Number(a.getAttribute("aria-valuenow")) / 100, T = e.key === "Home" ? 0 : e.key === "End" ? 1 : Math.max(0, Math.min(1, _ + (e.key === "ArrowLeft" || e.key === "ArrowDown" ? -0.05 : 0.05)));
        hi(a, M, x, T), ur(M, x);
      }
    }), t.addEventListener("pointerdown", (e) => {
      var zt;
      const a = e.target.closest("[data-blocks]");
      if (a && e.button === 0) {
        e.preventDefault(), ku(a, e);
        return;
      }
      const n = e.target.closest("[data-drag]");
      if (!n || e.button > 0) return;
      const [i, c] = n.dataset.drag.split("|"), l = i === "bright" && !ze(c), f = e.pointerType !== "mouse";
      if (l && !f) {
        Xs(Qt("light", "toggle", c));
        return;
      }
      const m = i === "bright" && ((zt = y[c]) == null ? void 0 : zt.state) !== "on", k = i === "tilt" ? 4 : 0, M = () => n.getBoundingClientRect().width - k * 2, x = (Ht) => {
        const Xt = n.getBoundingClientRect();
        return Math.max(0, Math.min(1, (Ht.clientX - Xt.left - k) / M()));
      };
      let _ = f ? "waiting" : m ? "pressed" : "dragging", T = 0;
      const L = e.clientX, H = e.clientY, U = (Ht, Xt) => Math.hypot(Ht.clientX - L, Ht.clientY - H) > Xt, B = () => {
        try {
          n.setPointerCapture(e.pointerId);
        } catch {
        }
      };
      f || (e.preventDefault(), B()), _ === "dragging" && hi(n, i, c, x(e));
      const Z = () => {
        var Ht, Xt;
        _ = "sliding", ft = n, n.classList.add("held"), B(), (Ht = navigator.userActivation) != null && Ht.hasBeenActive && ((Xt = navigator.vibrate) == null || Xt.call(navigator, 8)), T = m ? (ta[c] ?? 100) / 100 : Number(n.getAttribute("aria-valuenow")) / 100;
      }, E = (Ht) => {
        _ === "waiting" && U(Ht, vt) ? !l && Math.abs(Ht.clientX - L) > Math.abs(Ht.clientY - H) ? Z() : _ = "gone" : _ === "pressed" && U(Ht, 4) && (_ = "dragging"), _ === "sliding" ? hi(n, i, c, Math.max(0, Math.min(1, T + (Ht.clientX - L) / M()))) : _ === "dragging" && hi(n, i, c, x(Ht));
      }, yt = (Ht) => {
        ["pointermove", "pointerup", "pointercancel"].forEach((Xt, we) => n.removeEventListener(Xt, we ? yt : E)), n.classList.remove("held"), ft === n && (ft = null), _ === "sliding" || _ === "dragging" ? ur(i, c) : Ht.type === "pointerup" && l ? Xs(Qt("light", "toggle", c)) : Ht.type === "pointerup" && m && (_ === "waiting" || _ === "pressed") && ui("light", "turn_on", c).catch(() => {
        });
      };
      n.addEventListener("pointermove", E), n.addEventListener("pointerup", yt), n.addEventListener("pointercancel", yt);
    }), t.addEventListener("touchmove", (e) => {
      ft && e.cancelable && e.preventDefault();
    }, { passive: !1 });
  }
  return R && w && (Ro(), Xc(R), Xc(At), At.addEventListener("click", (t) => {
    t.target === At && fi();
  }), ($c = o.getElementById("homeNav")) == null || $c.addEventListener("click", () => {
    tt && Hs();
  }), (Jc = o.querySelector(".bottomNav")) == null || Jc.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + Di + "</button>"), (Qc = p("dashEditNav")) == null || Qc.addEventListener("click", () => S ? Es(!po) : bs(!ea)), R.addEventListener("pointerdown", $f), R.addEventListener("pointerdown", Tf), R.addEventListener("click", (t) => {
    S && po && t.target.closest(".tfBoardItem") && (t.preventDefault(), t.stopPropagation());
  }, !0), R.addEventListener("scroll", (t) => {
    var e;
    (e = t.target.classList) != null && e.contains("hcFadeList") && oc(t.target);
  }, !0), new ResizeObserver(() => {
    g.classList.contains("tfDash") && rs() !== os ? Ce() : ei();
  }).observe(R), window.addEventListener("resize", ei, { passive: !0 }), At.addEventListener("keydown", (t) => {
    var e, a;
    t.key === "Escape" ? (t.stopPropagation(), D != null && D.details ? Ws(!1) : fi()) : (t.key === "ArrowLeft" || t.key === "ArrowRight") && ((a = (e = t.target).closest) != null && a.call(e, ".tfMoreDots")) && (t.preventDefault(), Fc(((D == null ? void 0 : D.page) || 0) + (t.key === "ArrowRight" ? 1 : -1)));
  })), Y(), {
    update(t) {
      if (!w) return;
      const e = !Object.keys(y).length;
      y = { ...Object.fromEntries(Object.entries(y).filter(([n]) => Pa(n))), ...t || {} };
      for (const n in y) n.startsWith("light.") && y[n].state === "on" && ze(n) && Fa(n, $a(y[n]));
      e ? Ba() : Ce();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      zo = !0, me == null || me.destroy(), me = null, ge == null || ge.forEach((t) => t.destroy()), ge = null;
    },
    resume() {
      zo = !1, !(!w || !(R != null && R.querySelector("[data-tf]"))) && (pa.isConnected && Lr(pa.style.order), Dr());
    }
  };
}
const _0 = "0.6.0";
function T0() {
  if (document.getElementById("homecore-fonts")) return;
  const o = document.createElement("link");
  o.id = "homecore-fonts", o.rel = "stylesheet", o.href = "https://fonts.googleapis.com/css2?family=Geist:wght@200;300;400;500;600;700&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(o);
}
class L0 extends HTMLElement {
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
    T0();
    const r = this.shadowRoot || this.attachShadow({ mode: "open" });
    r.innerHTML = `<style>${Du}${Eu}${Bu}${Ru}</style>${Pu}`;
    const d = r.getElementById("app");
    d.style.opacity = "0", this._shell = Nu(r, {
      setLight: (p) => this.classList.toggle("lightBody", p),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._test = C0(r, { config: this._config, getHass: () => this._hass }), this._test.update(this._hass.states), Nh(r, d), Fh(r), this.isConnected || this._test.suspend(), d.style.transition = "opacity .2s ease", d.style.opacity = "";
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
customElements.get("homecore-card") || (customElements.define("homecore-card", L0), window.customCards = window.customCards || [], window.customCards.push({
  type: "homecore-card",
  name: "HomeCore",
  description: "A test environment for the HomeCore design language.",
  preview: !1
}), console.info(`%c HOMECORE %c ${_0} `, "background:#D0FF00;color:#090909;font-weight:700", ""));
